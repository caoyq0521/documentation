# authInfo

授权混入

### data

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
authInfo | 授权信息 | String | - | -

### methods

事件名称|说明|回调参数
:-|:-|:-
dataHandle | 获取授权信息 | 授权类型，具体见下表
refreshAuthInfo | 刷新授权信息 | 授权类型，具体见下表

### 授权类型

类型|说明
:-|:-
- | 公众号和小程序
1 | 公众号
2 | 小程序