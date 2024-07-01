import requests
import json

guid = 'lxzromby_kqzbkpnzo7'
seqid = '14'
yspsdkinput = 'baef53716051884c5e2744b34f6db053'
yspsdksign = '512b698273e7560b35f29ff164b31745'
yspappid = '519748109'

headers = {
    "request-id": "999999N1uUIyM1GX1719732048788",

    "seqid": seqid,
    "yspappid": yspappid,
    "yspsdkinput": yspsdkinput,
    "yspsdksign": yspsdksign,

    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
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

    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",

}
cookies = {
    "guid": guid,
    "vplatform": "109",
}
url = "https://player-api.yangshipin.cn/v1/player/get_video_info"
data={
    "vid": "f0000543g0z",
    "platform": "5910204",
    "guid": "lxzromby_kqzbkpnzo7",
    "cKey": "--0152C61A448E393970449B743EB17D9202F1261945C6427D2F8FB3B370C0D7DF045993062E9B98F2F10FF1CD37CA8B7E8320F1146DB59B0BCFCA72484CAECC37B6A062A690AA46C707BB9B38F56409D766CF0CF7DAF7BB4DAB86A241E2C0B0BB48480DF17286D88EC5711E8DB597D42BD5F25A4342B025FF737D24BADFFD470710AE0A17C56D3BE8314BA217C26A7F60B7602AC31CB79DC7D8451DCA6D7A042D2A",
    "adjust": 1,
    "encryptVer": "8.1",
    "dtype": "3",
    "sphttps": "1",
    "otype": "ojson",
    "appVer": "V1.0.0",
    "app_version": "V1.0.0",
    "defn": "fhd",
    "rand_str": "JGJ1Ww1ROM",
    "channel": "ysp_tx",
    "signature": "99da3f7ea213f7c81ac659191d9c178e"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)
