import json


from openpyxl.workbook import Workbook




class DataExport:
    @staticmethod
    def write_data_to_excel(path,datas:list[list],include_title:list=None):
        """
        将数据写入excel文件
        :param path: 文件路径
        :param datas:  数据列表，每个元素是一个字典，表示一行数据
        :param include_title: 自定义表头，如果为空则使用默认表头
        :return:
        """
        if type(datas) != list:
            print("数据格式错误")
            return
        # 创建一个新的workbook
        wb = Workbook()
        ws = wb.active
        title_data=datas[0]
        if type(title_data) != list:
            print("数据格式错误")
            return
        # 写入表头
        headers = list(title_data[0].keys())
        if include_title is not None:
            headers=include_title
        ws.append(headers)

        for data in datas:
            # 写入数据
            for item in data:
                values = [item[key] for key in headers]
                ws.append(values)

        # 保存文件
        wb.save(path)
    @staticmethod
    # 定义一个函数，将数据写入excel文件
    def write_data_to_excel_str(path,datas:str,include_title:list=None):
        """
        将json字符串写入excel文件
        :param path: 文件路径
        :param datas:  数据列表字符串(是一个json)，每个元素是一个字典，表示一行数据
        :param include_title: 自定义表头，如果为空则使用默认表头
        """
        # 将json字符串转换为列表
        dataList=json.load(datas)
        # 调用写入excel文件的函数
        DataExport.write_data_to_excel(path,[dataList],include_title)

data=[
    {'name': '张三', 'age': 20, 'gender': '男'},
    {'name': '李四', 'age': 25, 'gender': '女'},
]
data2=[
    {'name': '张三1', 'age': 201, 'gender': '男1'},
    {'name': '李四1', 'age': 251, 'gender': '女1'},
]
if __name__ == '__main__':
    DataExport.write_data_to_excel("data6.xlsx",[data])