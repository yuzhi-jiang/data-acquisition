import json
from enum import Enum
from typing import Dict

import requests

class MyResponse:
    def __init__(self, response):
        self.response = response

    def get_text(self):
        return self.response.text

    def get_json(self):
        return self.response.json()

    def dumps_json(self):
        return json.dumps(self.response.json(), indent=4, ensure_ascii=False)

    def print_json(self):
        print(self.dumps_json())


class ResponseType(Enum):
    json = 'application/json'
    xml = 'application/xml'
    text = 'text/plain'
    pdf = 'application/pdf'
    html = 'text/html; charset=UTF-8'


class MyRequest:
    def __init__(self, url, res_type: ResponseType = None):
        self.url = url
        self.headers = {}
        self.user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
        self.cookies = None
        if res_type is not None:
            value = res_type.value
            self.headers.update({'Content-Type': value})
            print('content-type:', value)
    def set_header(self, headers):
        self.headers.update(headers)

    def set_user_agent(self, user_agent):
        self.user_agent = user_agent

    def set_cookie(self, cookies):
        self.cookies = cookies

    def get(self, params: Dict = None):
        response = requests.get(self.url, headers=self.headers, params=params, cookies=self.cookies)
        return MyResponse(response)

    def post(self, data: Dict = None,params=None) -> MyResponse:
        data1 = json.dumps(data, separators=(',', ':'))
        response = requests.post(self.url, headers=self.headers, params=params, data=data1, cookies=self.cookies)
        return MyResponse(response)


# Example Usage
# Create an instance of MyRequest with a URL
def example_use():
    req = MyRequest('http://192.168.177.240/lnoumu/common/queryGroup')

    # Set header, user-agent and cookie
    # req.set_header({'Content-Type': 'application/json'})
    req.set_user_agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0')
    req.set_cookie({'JSESSIONID': '0f36b92fa26f248b2868e32596024570'})

    # Send a GET request with parameters
    response_get = req.get({'q': '委外'})
    res = response_get.print_json()
    print(res)

    # Send a POST request with data
    # response_post = req.post({'pageNum': 1, 'pageSize': 10})
    # print(response_post.get_text())
    # print(response_post.get_json())
    # print(response_post.dumps_json())


if __name__ == '__main__':
    example_use()
