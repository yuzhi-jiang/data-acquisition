from utils.require import MyRequest

params = {
  "vid": "f0000543g0z",
  "platform": "5910204",
  "guid": "lxzromby_kqzbkpnzo7",
  "cKey": "--01C03F2DCD10870841E2E447F424BB50BD043258DE45CAC099224BD603702444CE99C6A0721B6AF9B5E3D87AF3CB45288E4DDC284C99EFD82B205BB3A201A02638398D16DFA0CFF46C951BDE4207E4B83ABE0E90327B5E6766C4AE5209ACC5B335341B01CD991FD4D2B8BDC3AD514B490A1893DA08DDD21CAE0E0D5FDAD7F47E409B70A103F607482C0D160ABF82352C401E116A7C64AC740A6B7B342C7CC52ED0",
  "adjust": 1,
  "encryptVer": "8.1",
  "dtype": "3",
  "sphttps": "1",
  "otype": "ojson",
  "appVer": "V1.0.0",
  "app_version": "V1.0.0",
  "defn": "fhd",
  "rand_str": "rRzlnAiPlC",
  "channel": "ysp_tx",
  "signature": "1b8700bc8d3e95258dbb50e61ad7651b"
}
header={
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "request-id": "999999JxFQCaa2Jg1719654812091",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "seqid": "387",
    "yspappid": "519748109",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "yspsdkinput": "ccd392ea7c94196f1d07d9d069f9d245",
    "yspsdksign": "2ea598ac23501423d5adbe02042024cd",
    "cookie": "guid=lxzromby_kqzbkpnzo7; versionName=99.99.99; versionCode=999999; vplatform=109; platformVersion=Chrome; deviceModel=126; newLogin=1; updateProtocol=1; videoHistory_nouser=%5B%7B%22vid%22%3A%22f0000543g0z%22%2C%22cid%22%3A%22%22%2C%22recordTime%22%3A173.267829%7D%5D; nseqId=389; nrequest-id=999999UlaT60dKBK1719676487982",
    "Referer": "https://www.yangshipin.cn/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }










req=MyRequest('https://player-api.yangshipin.cn/v1/player/get_video_info')
req.set_header(header)

res=req.post(params)
json=res.get_json()
print(json)







