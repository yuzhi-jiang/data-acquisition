var jzq1;

fetch1=import('node-fetch').then(async (nodeFetch) => {
  const fetch = nodeFetch.default;
  async function customFetch(url, options) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
    customFetch('https://h5access.yangshipin.cn/web/open/token?yspappid=519748109&guid=ly0in2hz_ca8m7owgyd&vappid=5930\n' +
        '6155&vsecret=b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801&raw=1&version=v1&ts=1719689355111&rnd=67c73675affc4860f70669d9617ccee2', {
    method: 'GET',
    headers: {
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
  })
    .then(data => {
      console.log(data);
    });

    return fetch;
}).catch(error => {
  console.error('Error:', error);
});