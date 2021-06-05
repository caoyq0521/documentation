# serviceTypeInfoFilter

判断公众号枚举类型

### 规则

1. 无参数或者参数中不含id字段

   公众号类型为 订阅号

2. 参数中含id字段

    id字段值小于2，公众号类型为 订阅号

    id字段值为2，公众号类型为 服务号

### 参数

{JSON} value JSON字符串

### 返回值

{String} res 公众号类型

### 示例

```js
{{ value | serviceTypeInfoFilter }}

eg: 

{{ JSON.stringify({id: 2}) | serviceTypeInfoFilter }} 返回  '服务号'
```