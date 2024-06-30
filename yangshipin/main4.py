import requests
import json

guid = 'lxzromby_kqzbkpnzo7'
seqid = '413'
yspsdkinput = '41aeac9c981cbf963c5332aafff3e4e5'
yspsdksign = '3ab9662c28f126ea1c3c9df02c5d891f'
yspappid = '519748109'

headers = {
    "request-id": "999999Dg1K0U8dqc1719684795188",

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
data={"vid":"f0000543g0z","platform":"5910204","guid":"lxzromby_kqzbkpnzo7","cKey":"--01FAAD4C53120DF2A0583103DA6B7F611E693C4A29BBB2FE4F7B4069BBA1583E02BE05F41B6DD2126F40BF5EAF478E4355B4A4B58654B1981B839517650470FB22F741B7B0D1A04B1B45F616442ECEB6B10EB4C257323730A695CA5B4B3A0E420CC698B64EE960B369A05DBBF61D366F87F45FEFB68781D8377BB40B192565E4591FB5D487296411C42E4EBC043D24EDE886641E5268CF39397EE9DAF9EAF91329","adjust":1,"encryptVer":"8.1","dtype":"3","sphttps":"1","otype":"ojson","appVer":"V1.0.0","app_version":"V1.0.0","defn":"fhd","rand_str":"HwoOVxOHpC","channel":"ysp_tx","signature":"e2435185999e88505217f685b71a1625"}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)
