# sliceDotFront

处理字符串过长，字符串起始处显示省略号...

### 参数

- {String} value 需要处理的字符串

- {Number} arg 省略号开始前的字符串下标

### 返回值

{String} res 处理后的字符串

### 示例

```js
{{ value | sliceDotFront(5) }}

eg: 

{{ '一二三四五六七' | sliceDotFront(5) }} 处理后返回  '…六七'
```