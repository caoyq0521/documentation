# timeAgo

计算某一个时间距离现在多久了

### 参数

{Number} time 某个时间戳秒数

### 规则

- 一分钟以内的单位为 `minutes`
- 一小时以内的单位为 `hours`
- 一天以内的达单位为 `days`

### 返回值

{String} res 距离当前的时间

### 示例

```js
{{ value | timeAgo }}

eg: 

{{ new Date('2021-06-05 12:00:00') / 1000) | timeAgo }} 返回  '5 hour'

{{ new Date('2021-06-04 12:00:00') / 1000) | timeAgo }} 返回  '1 day'
```