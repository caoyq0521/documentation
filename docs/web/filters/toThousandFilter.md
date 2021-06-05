# toThousandFilter

将数字从个位起每个三位用 , 隔开

### 参数

{Number} num 需要处理化的数字

### 返回值

{String} res 处理后的结果

### 示例

```js
{{ value | toThousandFilter }}

eg: 

{{ 10000 | toThousandFilter }} 处理后返回  10,000

{{ 100 | toThousandFilter }} 处理后返回  100

{{ 1000.022 | toThousandFilter }} 处理后返回  1,000.022
```