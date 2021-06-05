# sliceDot

处理字符串过长，在字符串末尾显示省略号...

### 参数

- {String} value 需要转化的字符串
- {Array} [start, end] 处理字符串的下标区间，不包含下标end元素 

### 返回值

{String} res 处理后的字符串

### 示例

```js
{{ value | slice([0, 1]) }}

eg: 

{{ 'abcdef' | slice([0, 4]) }} 处理后返回  'abcd...'

{{ 'a' | slice([0, 4]) }} 处理后返回  'a'
```