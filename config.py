import os

from pytz import timezone, country_timezones

BASE_DIR = os.path.dirname((os.path.abspath(__file__)))
BASE_URL = "https://cn.tradingview.com/symbols/"
TOKEN = os.getenv("TOKEN", "c67ed59a3d67f720f9b9b1e89214348a9e0210a9dd8887fc46885cd9")
# WEBDRIVER_URL = os.getenv("WEBDRIVER_URL", "http://10.0.0.9:9099/wd/hub")
WEBDRIVER_URL = os.getenv("WEBDRIVER_URL", "http://127.0.0.1:4444/wd/hub")
DEBUG = int(os.getenv("DEBUG", 0))
DATA_DIR = os.path.join(BASE_DIR, 'data')
DATA_US_DIR = os.path.join(BASE_DIR, 'data', 'us')
OUTPUT = os.path.join(BASE_DIR, os.getenv("OUTPUT", 'output'))
NEWYORKFED_SRC_DATA = os.path.join(DATA_US_DIR, 'newyorkfed.json')



LOOP_GAP = int(os.getenv("LOOP_GAP", 2))
BROWSER_NAME = os.getenv("BROWSER_NAME", "chrome")
CN_TIMEZONE = timezone("Asia/Shanghai")
US_TIMEZONE = timezone('America/New_York')

SENTRY_SDN = os.getenv("SENTRY_SDN", "https://d9043653a7fc461daa61c8905e960c23@o356170.ingest.sentry.io/5440867")



if __name__ == '__main__':
    # timezone('Asia/Shanghai')
    # print(timezone("us"))
    print(country_timezones('us'))
    print(DEBUG)

