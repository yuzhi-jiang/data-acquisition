import json
import time

import requests

from utils.require import *


import utils
from reverse import hne, getSign

param = {
    "type": "trading-type",
    "openConvert": "false",
    "keyword": "",
    "siteCode": "44",
    "secondType": "A",
    "tradingProcess": "",
    "thirdType": "[]",
    "projectType": "",
    "publishStartTime": "",
    "publishEndTime": "",
    "pageNo": 3,
    "pageSize": 10
}
def getData(param):
    Signature,e=getSign(param)
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "DNT": "1",
        "Origin": "https://ygp.gdzwfw.gov.cn",
        "Pragma": "no-cache",
        "Referer": "https://ygp.gdzwfw.gov.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Dgi-Req-App": "ggzy-portal",
        "X-Dgi-Req-Nonce": e['n'],
        "X-Dgi-Req-Signature": Signature,
        "X-Dgi-Req-Timestamp": str(e['t']),
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items"
    data = json.dumps(param, separators=(',', ':'))
    response = requests.post(url, headers=headers, data=data)
    return response.text

def getData2(param):
    Signature,e=getSign(param)
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "DNT": "1",
        "Origin": "https://ygp.gdzwfw.gov.cn",
        "Pragma": "no-cache",
        "Referer": "https://ygp.gdzwfw.gov.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Dgi-Req-App": "ggzy-portal",
        "X-Dgi-Req-Nonce": e['n'],
        "X-Dgi-Req-Signature": Signature,
        "X-Dgi-Req-Timestamp": str(e['t']),
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    req=MyRequest("https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items")
    req.set_header(headers)
    res=req.post(param)
    return res.get_json()

if __name__ == '__main__':
    param['pageNo']=4
    page4=getData2(param)
    print("page4",page4)

    #sleep 2s
    time.sleep(2)

    param['pageNo']=5
    page5=getData2(param)
    print("page5",page5)