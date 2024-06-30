import requests
import json


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
    "request-id": "999999sTFsCibsbM1719680355117",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "seqid": "412",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "yspappid": "519748109",
    "yspsdkinput": "6154d4e6a6e58b63e3fe217b962bd031",
    "yspsdksign": "82bea3826eead9d08b818f66ac8ab137"
}
cookies = {
    "guid": "lxzromby_kqzbkpnzo7",
    "versionName": "99.99.99",
    "versionCode": "999999",
    "vplatform": "109",
    "platformVersion": "Chrome",
    "deviceModel": "126",
    "newLogin": "1",

}
url = "https://player-api.yangshipin.cn/v1/player/get_video_info"
data = {
    "vid": "f0000543g0z",
    "platform": "5910204",
    "guid": "lxzromby_kqzbkpnzo7",
    "cKey": "--0179B4DD800EDECCC66A5D48B65F5D7B92CFAB028AB417FD5B816D8C8C8B103D15E2EA9EF87F0DF4CFB5D507BA3CD04B2BD3F6719D2B14259112C6A57C4E8016D93AAB782B41A704F7080DFB792ACC4E02DB18DCE8ADFD7BB699106CA5EB2679D04E93C55AA8E1F8B93F0E193BA0616C516E3763D512CA5118C0D3E7CBFFE137961BD8D241E03545C8C124C4F651BE53BEC1CFD4DFCDFFE7E9FB331D4E2F3C6FAA",
    "adjust": 1,
    "encryptVer": "8.1",
    "dtype": "3",
    "sphttps": "1",
    "otype": "ojson",
    "appVer": "V1.0.0",
    "app_version": "V1.0.0",
    "defn": "fhd",
    "rand_str": "Qit9WwwEC9",
    "channel": "ysp_tx",
    "signature": "27098b6a6c134814e6c528945ea8d8e9"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)