Su = function (t) {
    return t.sort((function (t, e) {
            return t.localeCompare(e)
        }
    ))
}
var xu = function (t) {
    var e = ""
        , n = [];
    for (var r in t)
        n.push(r);
    return n = Su(n),
        n.forEach((function (n, r) {
                0 != r && (e += "&"),
                t[n] instanceof Array && (t[n] = t[n].join()),
                    e += n + "=" + decodeURI(t[n])
            }
        )),
        e
    // wu.a.hex_md5(e)
}

t = {
    "BossId": 2865,
    "Pwd": 1698957057,
    "vid": "f0000543g0z",
    "step": 3,
    "bi": 0,
    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "url": "",
    "val": 0,
    "guid": "lxzromby_kqzbkpnzo7",
    "channel": "",
    "rand_str": "YPhKdii9vl"
}
t1={
  "vid": "f0000543g0z",
  "platform": "5910204",
  "guid": "lxzromby_kqzbkpnzo7",
  "cKey": "--01D08A887908D157811356E72061CCC9FE8CFAC6D8282A8D65E80833833A69F2FAB349A76AA5E42E405FC586491014B70DD465B1FE20FE7BF79EFCE2DDA9E80827438332878DAA23C0575173762F8EF908E0B5229B1F7FC12BBC69F2EEA6A38CCA233F27ACFFE5A7FAD58F5D06452633B7430F6F5ADD9BE0145BED09E594FB29C55C18F2D40FE39649DBB4A795F5DAAAE7CE2DDF025982223E5BF27252DF8D3DD6",
  "adjust": 1,
  "encryptVer": "8.1",
  "dtype": "3",
  "sphttps": "1",
  "otype": "ojson",
  "appVer": "V1.0.0",
  "app_version": "V1.0.0",
  "defn": "fhd",
  "rand_str": "Pkoy23ipIG",
  "channel": "ysp_tx"
  // "signature": "7079563e4366e48f59ed03c9a96447e5"
}
Iu = function (t) {
    var pu='Q0uVOpuUpXTOUwRn'
    var e = ""
        , n = [];
    for (var r in t)
        n.push(r);
    return n = n.sort(),
        n.forEach((function (n, r) {
                0 != r && (e += "&"),
                t[n] instanceof Array && (t[n] = t[n].join()),
                    e += n + "=" + decodeURI(t[n])
            }
        )),
        e += pu,
        e
        // wu.a.hex_md5(e)
}
a = xu(t1)
b = Iu(t1)

// signature=md5(a)
console.log(a)
console.log(b)