# 这是一个示例 Python 脚本。

# 按 Shift+F10 执行或将其替换为您的代码。
# 按 双击 Shift 在所有地方搜索类、文件、工具窗口、操作和设置。

import hashlib
import random
import time
import urllib
from urllib.parse import unquote

k = "k8tUyS$m"


def getDate():
    # 时间戳
    t = int(round(time.time() * 1000))
    return t




def hne(n):
    # 随机生成n个字符串

    strs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return ''.join([random.choice(strs) for i in range(n)])


def pne(e):
    t = ""
    if type(e) == dict:
        t = '&'.join([f"{n}={e[n]}" for n in sorted(e.keys())])
    elif type(e) == str:
        t = '&'.join(sorted(e.split('&')))
    return t


def decodeURIComponent(url):
    return unquote(url)


def uK(param):
    # sha256
    return hashlib.sha256(param.encode('utf-8')).hexdigest()


def t1(e={}):
    t = e.get('p', '')
    n = e.get('t', '')
    u = e.get('n', '')
    o = e.get('k', '')
    r = pne(t)
    strs = u + o + decodeURIComponent(r) + str(n)
    return uK(strs)


# s=pne('type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo=2&pageSize=10' )
# print(s)


# params = {"type": "trading-type", "openConvert": "false", "keyword": "", "siteCode": "44", "secondType": "A",
#           "tradingProcess": "", "thirdType": "[]", "projectType": "", "publishStartTime": "", "publishEndTime": "",
#           "pageNo": 3, "pageSize": 10}

params = {
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
#将params转换为url
# encoded_params = urllib.parse.urlencode(params)
# print(encoded_params)
# t=getDate()
# n=hne(16)
# p = 'type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo=2&pageSize=10'
# e = {"p": encoded_params, "t": t, "n": n, "k": k}
# print(e)
# Signature = t1(e)


def getSign(params):
    t = getDate()
    n = hne(16)

    e={"p": urllib.parse.urlencode(params), "t": t, "n": n, "k": k}
    #获取e中的p
    return t1(e),e



getSign(params)
