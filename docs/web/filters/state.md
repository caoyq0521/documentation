# state

启用、停用状态码转换

### 转换规则
- 0 已停用
- 1 启用

### 参数

{Number} value

### 返回值

{String} res 返回的结果

### 示例

```js
{{ value | state }}

eg: 

{{ 0 | dateTime }} 处理后返回  '已停用'

{{ 1 | dateTime }} 处理后返回  '启用'
```