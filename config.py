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
NEWYORKFED_SOMA_SRC_DATA = os.path.join(DATA_US_DIR, 'newyorkfed_some_hold.json')
NEWYORKFED_WEI_SRC_DATA = os.path.join(DATA_US_DIR, 'newyorkfed_wei.json')
OLI_GOLD_RATIO_SRC_DATA = os.path.join(DATA_US_DIR, 'oil_gold_ratio.json')
OLI_SRC_DATA = os.path.join(DATA_US_DIR, 'oli.json')
GOLD_SRC_DATA = os.path.join(DATA_US_DIR, 'gold.json')
COPPER_GOLD_RATIO_SRC_DATA = os.path.join(DATA_US_DIR, 'copper_gold_ratio.json')
INTEREST_RATES_SRC_DATA = os.path.join(DATA_US_DIR, 'interest_rates.json')
COPPER_SRC_DATA = os.path.join(DATA_US_DIR, 'copper.json')
GOLD_SINCE_SRC_DATA = os.path.join(DATA_US_DIR, 'gold_since.json')

NEWYORKFED_SOMA_HOLD_URL = "https://markets.newyorkfed.org/read?productCode=30&startDt={}&endDt={}&query=summary&format=json"
NEWYORKFED_WEI_URL = "https://www.newyorkfed.org/medialibrary/research/interactives/data//wei_data.csv"
OLI_GOLD_RATIO_URL = "https://www.longtermtrends.net/data-oil-gold-ratio/"
OLI_URL = "https://www.longtermtrends.net/data-gold2/"
GOLD_URL = "https://www.longtermtrends.net/data-oil/"
COPPER_GOLD_RATIO_URL = "https://www.longtermtrends.net/data-copper-gold-ratio/"
INTEREST_RATES_URL = "https://www.longtermtrends.net/data-interest-rates/"
COPPER_URL = "https://www.longtermtrends.net/data-copper/"
GOLD_SINCE_URL = "https://www.longtermtrends.net/data-gold-since-1850/"

NEWYORKFED_HOLD_OUTPUT_NAME = 'newyorkfed_makert_hold.json'
NEWYORKFED_WEI_NAME = 'newyorkfed_wei.json'
OLI_OUTPUT_NAME = os.path.join(OUTPUT, 'oli.json')
OLI_GOLD_RATIO_OUTPUT_NAME = os.path.join(OUTPUT, 'oil_gold_ratio.json')
GOLD_OUTPUT_NAME = os.path.join(OUTPUT, 'gold.json')
COPPER_GOLD_RATIO_NAME = os.path.join(OUTPUT, 'copper_gold_ratio.json')
INTEREST_RATES_NAME = os.path.join(OUTPUT, 'interest_rates.json')
COPPER_NAME = os.path.join(OUTPUT, 'copper.json')
GOLD_SINCE_NAME = os.path.join(OUTPUT, 'gold_since.json')

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

