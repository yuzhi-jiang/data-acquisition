
url: https://ygp.gdzwfw.gov.cn/#/44/jygg

此处难点为：异步

此url为广东省招考的


此sign是放在请求头中的
分别放在
X-Dgi-Req-Nonce #这个是16个随机字符
X-Dgi-Req-Signature # 这个是sign
X-Dgi-Req-Timestamp  #这个是时间戳



这个sign的生成方式是：随机字符+固定字符串+urlence(url参数排序)+时间戳  -> 最后再做sha256加密






