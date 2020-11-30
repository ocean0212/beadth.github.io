import logging
import json
import sys
import traceback
from collections import namedtuple

import config as cf
from lib import utils
from lib.browser import *
from bin import newyorkfed
from bin import longtermtrends
from bin import cpi
from bin import treasury
from bin import federal_founds_rate

logger = logging.getLogger(__name__)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging.basicConfig(level = logging.INFO,format = '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh = logging.FileHandler('main.log', encoding="utf-8")
ch = logging.StreamHandler()
logger.level = logging.DEBUG
logger.addHandler(fh)
logger.addHandler(ch)




IndexInfo = namedtuple("index_info", ["code", "url", "tv_index"])
IndexInfoHandle = namedtuple("index_info_handle", ["code", "url", "handle", "tv_index"])


index_dict = [
    {"tv_index": "INDEX:SLTW", "code": "COM"},
    {"tv_index": "INDEX:SYTW", "code": "CND"},
    {"tv_index": "INDEX:SPTW", "code": "CNS"},
    {"tv_index": "INDEX:SETW", "code": "ENE"},
    {"tv_index": "INDEX:SFTW", "code": "FIN"},
    {"tv_index": "INDEX:SVTW", "code": "HLT"},
    {"tv_index": "INDEX:SITW", "code": "IND"},
    {"tv_index": "INDEX:SBTW", "code": "MAT"},
    {"tv_index": "INDEX:SSTW", "code": "REI"},
    {"tv_index": "INDEX:SKTW", "code": "TEC"},
    {"tv_index": "INDEX:SUTW", "code": "UTL"},
    {"tv_index": "INDEX:S5TW", "code": "SPX"},
]

INDEXS = []

for item in index_dict:
    code = item["tv_index"].replace(":", "-")
    url = cf.BASE_URL + code
    index = IndexInfo(tv_index=item["tv_index"], url=url, code=item['code'])
    INDEXS.append(index)

@utils.extract_context_info
def start(br):
    for index, item in enumerate(INDEXS):
        if index == 0:
            get_url(br, item)
        else:
            new_tab(br, item)
        new_item = IndexInfoHandle(code=item.code, url=item.url, handle=handles(br)[index], tv_index=item.tv_index)
        logger.info(new_item)
        INDEXS[index] = new_item

@utils.extract_context_info
def loading_page(br):
    for i, item in enumerate(INDEXS):
        logger.info("switch to window: {}, tv: {}.".format(item.handle, item.tv_index))
        switch_window(br, item)
        time.sleep(0.2)
        if utils.is_market_open() == 1:
            return

@utils.extract_context_info
def save_last(br):
    tmp = {}
    for i, item in enumerate(INDEXS):
        switch_window(br, item)
        close = get_element(br, '//*[@id="anchor-page-1"]/div/div[3]/div[1]/div/div/div/div[1]/div[1]')
        pre_close = get_element(br, '//*[@id="anchor-page-1"]/div/div[3]/div[3]/div[1]/div[1]')
        open_price = get_element(br, '//*[@id="anchor-page-1"]/div/div[3]/div[3]/div[2]/div[1]')
        day_range = get_element(br, '//*[@id="anchor-page-1"]/div/div[3]/div[3]/div[4]/div[1]')

        low, high = [i.strip() for i in day_range.text.split("—")]
        logger.info("{} - {}".format(close.text, item))
        data = {
            "code": item.code,
            "pre": float(pre_close.text),
            "high": float(high),
            "low": float(low),
            "close": float(close.text),
            "open": float(open_price.text),
            "current_day": utils.today(),
            "merket_type": "US",
            "other": item.tv_index
        }
        tmp[item.code] = {
            "close": float(close.text),
            "open": float(open_price.text),
            "pre": float(pre_close.text),
            "low": float(low),
            "high": float(high),
            "other": item.tv_index,
            'day': utils.today().isoformat(),

        }
        logger.info("ITEM DATA CODE : {} --- {}".format(item.code, data))
    current = {'time': utils.today().isoformat(), 'data': tmp}
    return current

@utils.extract_context_info
def quit_browser(br):
    br.quit()

@utils.extract_context_info
def main():
    logger.info(sys.version)
    logger.info("start... today: {} new: {}".format(utils.today().isoformat(), utils.now().isoformat()))
    utils.init_sentry()
    if utils.is_market_open():
        logger.info("not is_market_open. exit. today: {} new: {}".format(utils.today().isoformat(), utils.now().isoformat()))
        return
    logger.info("is_market_open. run.. today: {} new: {}".format(utils.today().isoformat(), utils.now().isoformat()))

    if not utils.check_tradecal():
        return
    run()

@utils.extract_context_info
@retry(stop_max_attempt_number=20, wait_fixed=3)
def run():
    while True:
        try:
            path = os.path.join(cf.DATA_US_DIR,'sp500_all.json')
            all = utils.read_json_file(path)
            # market breadth
            br = browser()
            start(br)
            loading_page(br)

            current = save_last(br)
            all[current['time']] = current['data']
            utils.save_to_json(path, all)
            output = os.path.join(cf.OUTPUT, 'sp500_all.json')
            utils.save_to_json(output, all)
            # utils.day_trading_save(all)
            utils.split_save_json(all, cf.OUTPUT, 'sp500_{}.json')
            # newyorkfed.org
            newyorkfed.bin()
            longtermtrends.bin()
            cpi.bin()
            federal_founds_rate.bin()
            treasury.bin()
            quit_browser(br)
            return 
        except Exception as e :
            logger.error(e,exc_info=1)
            raise e

if __name__ == '__main__':
    main()
