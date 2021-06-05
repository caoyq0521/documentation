# verifyTypeInfoFilter

公众号认证枚举类型

### 规则

1. 无参数或者参数中不含id字段

    公众号认证类型为 未认证

2. 参数中含id字段

    id字段值为-1，公众号认证类型为 未认证

    id字段值为小于3，公众号认证类型为 已认证

    其余情况，公众号认证类型为 已资质认证

### 参数

{JSON} value JSON字符串

### 返回值

{String} res 公众号认证类型

### 示例

```js
{{ value | verifyTypeInfoFilter }}

eg: 

{{ JSON.stringify({id: -1}) | serviceTypeInfoFilter }} 返回  '未认证'

{{ JSON.stringify({id: 2}) | serviceTypeInfoFilter }} 返回  '已认证'

{{ JSON.stringify({id: 4}) | serviceTypeInfoFilter }} 返回  '已资质认证'
```
