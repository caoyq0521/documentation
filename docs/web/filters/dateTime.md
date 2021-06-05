# dateTime

时间转换，将时间戳转换为年-月-日 时:分格式

### 参数

{Number} time 时间戳

### 返回值

{String} res 处理后的字符串

### 示例

```js
{{ time | dateTime }}

eg: 

{{ 23213213 | dateTime }} 处理后返回  '1970-01-01 14:26'
```