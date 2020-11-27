import json
import urllib3
import os
import csv
import requests
import logging
import base64
import datetime
from dateutil.relativedelta import relativedelta
from retrying import retry
from collections import namedtuple
from tempfile import TemporaryFile  # , NamedTemporaryFile

import config as cf
from lib import utils

urllib3.disable_warnings()
logger = logging.getLogger(__name__)

TASK = namedtuple("task", ["url", "file", "output"])


def header():
    return {'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, sdch',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
            }

def tasks():
    _t = {
        cf.OLI_GOLD_RATIO_URL: [cf.OLI_GOLD_RATIO_SRC_DATA, cf.OLI_GOLD_RATIO_OUTPUT_NAME],
        cf.OLI_URL: [cf.OLI_SRC_DATA, cf.OLI_OUTPUT_NAME],
        cf.GOLD_URL: [cf.GOLD_SRC_DATA, cf.GOLD_OUTPUT_NAME],
    }
    t = []
    for k,v in _t.items():
        task = TASK(url=k, file=v[0], output=v[1])
        t.append(task)
    return t

@retry(stop_max_attempt_number=20, wait_fixed=3)
def get(url):
    rep = requests.get(url, verify=False, headers=header())
    return rep

def bs64(data):
    res = []
    for i in data:
        _key, _val = i[0], i[1]
        key, val = base64.b64decode(_key),base64.b64decode(_val)
        if b"T" in key:
            key, _ = key.split(b"T")
        res.append({'t':str(key, encoding='utf8'),'v': float(val) })
    return res

def read(src):
    f = open(src, 'r')
    _dt = json.load(f)
    f.close()
    return _dt

def write(f,data):
    _f = open(f, 'w')
    json.dump(data, _f)
    _f.flush()
    _f.close()

def run():
    t = tasks()
    for i in t:
        path, file_name = os.path.split(i.file)
        name, suffix = file_name.split('.')
        output_name_format = name + "_{}." + suffix
        rep = get(i.url)
        logger.info(i)
        logger.info(rep.json())
        new_data = bs64(rep.json())
        src_data = read(i.file)
        if len(new_data) > len(src_data):
            logger.info('write data: {}'.format(i))
            write(i.file, new_data)
        split_output(new_data, output_name_format)

def split_output(data, fname, y=[6,11,21,31]):
    # def split_output(data, fname, y=[6]):
    if not fname: return
    years = []
    for i in y:
        r = utils.today() - relativedelta(years=i)
        years.append(r)
    for i in years:
        c = []
        for item in data:
            _t = datetime.date.fromisoformat(item['t'])
            if i < _t:
                c.append(item)
        idx = years.index(i)
        file_name = fname.format(y[idx])
        output_path = os.path.join(cf.OUTPUT, file_name)
        utils.save_ouput(c, output_path)



def bin():
    current = utils.now()
    close_time = utils.now().replace(hour=16, minute=30, second=0)
    if current > close_time:
        logger.info('IS OLI GOLD TIME. RUN...')
        run()
        return
    logger.info('NOT OLI GOLD TIME.')

if __name__ == '__main__':
    # bin()
    # print(utils.now().date())
    # split_output('d')
    run()
    # print(datetime.date.fromisoformat("2020-01-23"))
