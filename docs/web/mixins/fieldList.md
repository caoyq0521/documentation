# fieldList

客户字段混入，包括`客户字段`、`企业字段`、`销售阶段`、`放弃原因`。

### data

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
allFieldList | 各个客户字段 | Array | - | -
personCustomerFieldList | 个人客户字段 | Array | - | -
companyCustomerFieldList | 企业客户字段 | Array | - | -
conactCompanyFieldList | 企业联系人字段 | Array | - | -
companyFieldList | 企业字段 | Array | - | -
abandonList | 放弃字段 | Array | - | -
abandonOption | 放弃原因可选值 | Array | - | -
salesStageField | 销售阶段字段  | Array | - | -
mobileFeild | 手机字段 | Array | - | -
customerNameFeild | 客户姓名字段 | Array | - | -

### computed

::: tip
必须手动调用 `_fetchFieldList` 方法。
:::

名称|说明|参数
:-|:-|:-
fieldOption | 字段配置 | `Object`类型，具体见下表

### fieldOption参数

名称|说明
:-|:-
customerName | 客户姓名字段
mobile | 手机字段
salesStage | 销售阶段字段
abandon | 放弃原因字段
allFieldList | 各个客户字段
customerPerson | 个人客户字段
customerCompany | 企业客户字段
conactCompany | 企业联系人字段
company | 手机字段

### methods

事件名称|说明|回调参数
:-|:-|:-
_resetFieldListData | 重置所有字段列表 | -
_fetchFieldList | 获取字段列表 | -