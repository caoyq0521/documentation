# second

时间转换，将 秒 转化为 d天h小时m分s秒 形式

### 参数

{Number, String} value 需要转换的秒数

### 返回值

{String} res 处理后时间

### 示例

```js
{{ value | second }}

eg: 

{{ 30 | second }} 处理后返回  '30秒'

{{ 100 | second }} 处理后返回  '1分钟40秒'

{{ '123213' | second }} 处理后返回  '1天10小时13分钟33秒'
```