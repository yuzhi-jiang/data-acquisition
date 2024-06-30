import requests
import json

guid = 'lxzromby_kqzbkpnzo7'
seqid = '412'
yspsdkinput = '24245ced61164ecc2bbe9ddc15eeb9b6'
yspsdksign = '68ba9da711c0edf8d5da98f50c13346f'
yspappid = '519748109'

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "dnt": "1",
    "origin": "https://www.yangshipin.cn",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.yangshipin.cn/",
    "request-id": "999999HaXaQegJoo1719679575525",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "seqid": "412",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "yspappid": "519748109",
    "yspsdkinput": "24245ced61164ecc2bbe9ddc15eeb9b6",
    "yspsdksign": "68ba9da711c0edf8d5da98f50c13346f"
}


cookies = {
    "guid": guid,
    "vplatform": "109",
}
url = "https://player-api.yangshipin.cn/v1/player/get_video_info"
data = data = {
    "vid": "f0000543g0z",
    "platform": "5910204",
    "guid": "lxzromby_kqzbkpnzo7",
    "cKey": "--010339E34229B3BEC22034E3BC77DB9D762DFF652AA967E3B14C1C97E5DFBA813EEC993C4AFB941BE2ED3DC4E2420C8EF01ECA306F7BA45812DDA6823846FE8BC56458D41D58101C5667E634FAC9121551D7F46AF9FB72D22FCF67369104A90FE182E0D3E4DA47D8E95A5DF7FC4A70DA7CCEB411DB32F48D320D9A65151D3E3CC06D37A4CF23BDB1727A3D5C450ED6CB5D51828C30A577237E1433E7D244260012",
    "adjust": 1,
    "encryptVer": "8.1",
    "dtype": "3",
    "sphttps": "1",
    "otype": "ojson",
    "appVer": "V1.0.0",
    "app_version": "V1.0.0",
    "defn": "fhd",
    "rand_str": "e8jATFa2yN",
    "channel": "ysp_tx",
    "signature": "410744ecfdae7a6036d2a2e0421c3e0d"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)
