# dateFilter

时间格式化处理，去除时间中的秒

### 参数

{String} value 时间参数

### 返回值

{String} res 处理后的时间

### 示例

```js
{{ value | verifyTypeInfoFilter }}

eg: 

{{ '--' | verifyTypeInfoFilter }} 返回  '--'

{{ '2021-05-21 16:30:47' | verifyTypeInfoFilter }} 返回  '2021-05-21 16:30'
```