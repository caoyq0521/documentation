# h5Auth

H5授权混入

### data

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
componentId | 第三方平台 appid | String | - | -
redirectUrl | 重定向地址，需要 urlencode，这里填写的应是服务开发方的回调地址 window.location.origin | String | - | -
preAuthCode | 预授权码 | String | - | -
authCode | 授权码 | String | - | -
authInfo | 授权信息 | String | - | -

### methods

事件名称|说明|回调参数
:-|:-|:-
buildAuthInfo | 建立授权 | -
getPreAuthCode | 获取预授权码 | -
showQrCode | 查看二维码 | -