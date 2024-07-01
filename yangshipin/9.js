async function getData(url,options) {
    const res = await fetch(url,options);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    throw new Error('Failed to fetch data');
}
async function getData2(a){
    return Promise.resolve('a='+a)
}

 function* dataGenerator(param) {
    while (true) {
        try {
            // yield await getData(param.url, param.options);
            yield  param;
        } catch (error) {
            yield { error: error.message };
        }
    }
}

var url1='https://h5access.yangshipin.cn/web/open/token?yspappid=519748109&guid=ly0in2hz_ca8m7owgyd&vappid=59306155&vsecret=b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801&raw=1&version=v1&ts=1719689355111&rnd=67c73675affc4860f70669d9617ccee2';

var url2='https://anml.cn/api/v1/memo?creatorId=1&rowStatus=NORMAL&limit=10';

const headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    // 省略其他headers
};

const param = {
    url: url1,
    options: {
        method:'GET',
        headers: headers
    }
}

// const gen = dataGenerator(param);
//
// function getToken(url) {
//     param.url=url;
//     const result1 =  gen.next(param);
//     return result1.value
// }
//
// const aa = getToken(url1);
// console.log('aa', aa);

const gen =dataGenerator(getData2(12))
const aaa=gen.next()
console.log('aaaa')
console.log(aaa)
aaa.value.then(res=>console.log(res))