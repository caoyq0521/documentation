# moneyFilter

数字(金额)转换，转换后的数字(金额)以百为单位

### 规则

转换后的数字(金额)默认四舍五入保留两位小数

### 参数

{Number} value 需要转换的数字(金额)

### 返回值

{Number} res 转换后的数字(金额)

### 示例

```js
{{ value | moneyFilter }}


eg:

{{ 1 | moneyFilter }} 返回 0.01

{{ 1000 | moneyFilter }} 返回 10.00
```