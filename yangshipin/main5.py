import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "dnt": "1",
    "origin": "https://www.yangshipin.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.yangshipin.cn/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
cookies = {
    "guid": "lxzromby_kqzbkpnzo7",
    "versionName": "99.99.99",
    "versionCode": "999999",
    "vplatform": "109",
    "platformVersion": "Chrome",
    "deviceModel": "126",
    "newLogin": "1",
    "updateProtocol": "1",
    "videoHistory_nouser": "%5B%7B%22vid%22%3A%22f0000543g0z%22%2C%22cid%22%3A%22%22%2C%22recordTime%22%3A8.547054%7D%5D",
    "nseqId": "441",
    "nrequest-id": "999999RnutHmQTEZ1719684905474"
}
url = "https://h5access.yangshipin.cn/web/open/token"
params = {
    "yspappid": "519748109",
    "guid": "lxzromby_kqzbkpnzo7",
    "vappid": "59306155",
    "vsecret": "b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801",
    "raw": "1",
    "version": "v1",
    "ts": "1719685030313",
    "rnd": "ed76853e005238336264bb5a3514242c"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)