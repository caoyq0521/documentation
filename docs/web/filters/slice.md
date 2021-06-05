# slice

字符串截取方法

### 参数

{String} value 需要转化的字符串

{Array} [start, end] 截取字符串的下标区间，不包含下标end元素 

### 返回值

{String} res 截取后的字符串

### 示例

```js
{{ value | slice([0, 1]) }}

eg: 

{{ 'abc' | slice([0, 1]) }} 转化后返回  'a'
```