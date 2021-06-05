# numberFormatter

数字转化，将数字转为文件大小单位

### 规则

- 10^3 -- k
- 10^6 -- M
- 10^9 -- G
- 10^12 -- T
- 10^15 -- P
- 10^18 -- E

### 参数

- {Number} num 需要转化的数字
- {Number} digits 转换后四舍五保留的小数位数

### 返回值

{String} res 数字转换后的结果

### 示例

```js
{{ value | numberFormatter }}

eg: 

{{1000 | numberFormatter}} 返回 '1k'

{{1111111 | numberFormatter(2)}} 返回 '1.11M'
```