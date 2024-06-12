import json


@staticmethod
def dumps(text):
    json.dumps(text, indent=4, ensure_ascii=False)

def is_valid_json(jsonObj):
    try:
        json_object = json.loads(jsonObj)
    except Exception as e:
        return False
    return True


def try_parse_json(json_str):
    try:
        json_object = json.loads(json_str)
    except ValueError as e:
        return None
    return json_object