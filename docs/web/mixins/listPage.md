# listPage

请求分页数据混入

### data

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
reqImmediately | 是否立即执行 getList 方法 | Boolean | - | true
reslist | 请求结果 | Array | - | -
reqParams | 请求参数 | String | - | -
reqUrl | 接口地址 | String | - | -
reqMethod | 请求方式 | String | post/get | post
reqLoading | 是否请求中 | Boolean | - | false
pagination | 分页配置，具体见下表 | Object | - | -
sortOption | 排序配置，具体见下表 | Object | - | -
basePageMode | 分页配置模式，具体见下表 | String | modeOne/modeTwo/modeThree/ modeOne

### pagination

字段|说明|默认值
:-|:-|:-
pageNo | 页码 | 1
pageSize | 每页多少条 | 30
totalCount | 总数 | 0

### sortOption

字段|说明|默认值
:-|:-|:-
sortField | 排序字段 | -
sortDir | `降序：1` 或者 `升序：2` | 1

### basePageMode

用于兼容后端分页数据需要请求参数不一致问题！

模式|字段
:-|:-
modeOne | pageNo/pageSize
modeTwo | page_number/page_size
modeThree | page

### methods

事件名称|说明|回调参数
:-|:-|:-
dataHandle | 处理返回数据 | 接口返回的列表数据
handleParams | 处理请求参数 | 共两个参数，依次为：参数数据、参数
getList | 调用接口方法 | -
updatePagination | 更新分页配置 | 新的配置信息
handleResetQuery | 重置参数并请求 | -
changePageNo | 更改分页 | 页码
changePageSize | 更改每页条数 | 每页条数
changeSortField | 处理排序 | 参数为`Object`类型，必须包含：`prop:排序字段`、`order:descending - 1/ascending - 2`
