from utils.require import MyRequest

params = {
  "vid": "f0000543g0z",
  "platform": "5910204",
  "guid": "lxzromby_kqzbkpnzo7",
  "cKey": "--01F1FB080349B25D689AD83A6FF693DD360DC95786C41B18C2E0C0680E0C6A612325A0EB3BEFBAB4C3320EF7EDCD42FC62381AAD22C0CD461453CEB920B8F4023B40EE7019F032B1BD0C91B3148BAD789927BFC0A85EF1D3BDC9F01003E52914F50D9AF15ACED4236759C13D0C89547123FC4DEB3129476F330510B5D94BB3400D182DE24BD5ED1C387C451E8DE6C21021FE8771A4AC41439A6CEEC006A74A07FF",
  "adjust": 1,
  "encryptVer": "8.1",
  "dtype": "3",
  "sphttps": "1",
  "otype": "ojson",
  "appVer": "V1.0.0",
  "app_version": "V1.0.0",
  "defn": "fhd",
  "rand_str": "3VDEOpGXov",
  "channel": "ysp_tx",
  "signature": "5d9afc2c1202d3de76ac66e8708df0cd"
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
    "videoHistory_nouser": "%5B%7B%22vid%22%3A%22f0000543g0z%22%2C%22cid%22%3A%22%22%2C%22recordTime%22%3A0%7D%5D",
    "nseqId": "390",
    "nrequest-id": "999999aBcDoCUOKj1719676589644"
}
header={
    "seqid": "1",
    "request-id": "999999icTkcHNm1b1719676338710",
    "yspappid": "519748109",
    "yspsdkinput": "414ef1a5ef5ce8ed926172e770eae326",
    "yspsdksign": "f832ce4fe2ffc2d9b720e440412a7a72",
    "cookie": cookies,
    "Referer": "https://www.yangshipin.cn/",


    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }



  # "body": "{\"vid\":\"f0000543g0z\",\"platform\":\"5910204\",\"guid\":\"lxzromby_kqzbkpnzo7\",\"cKey\":\"--01BA2C7AC4D6459AA6B72F7F6D99872D3C57254F2D39BDCB98ACA708FDC948AD875B08871A77BA90877930F67BDED7217D837FE361B90BE73E745F3E6E2C581BFB8E38D0B2ADE21B185220C8B37B29D3388FF867CC7FB4F75A1BFDF8D9A8A56339F28F9E741C4E13CCE54DFBD3064E553A7E823A9D0C34A52E22C9A764D4D34930FA65B4EA9EADFCE23C37AA715C9E1471D62F2604198213F8A0F16D5B2D78D941\",\"adjust\":1,\"encryptVer\":\"8.1\",\"dtype\":\"3\",\"sphttps\":\"1\",\"otype\":\"ojson\",\"appVer\":\"V1.0.0\",\"app_version\":\"V1.0.0\",\"defn\":\"fhd\",\"rand_str\":\"bV7GrkvpUT\",\"channel\":\"ysp_tx\",\"signature\":\"fa853b48642e9f9c0dd1388cd33d31a0\"}",









req=MyRequest('https://player-api.yangshipin.cn/v1/player/get_video_info')
req.set_header(header)

res=req.post(params)
json=res.get_json()
print(json)





