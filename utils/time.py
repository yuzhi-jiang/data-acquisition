# 获取当前时间戳
from datetime import time


def get_date():
    # 时间戳
    t = int(round(time.time() * 1000))
    return t