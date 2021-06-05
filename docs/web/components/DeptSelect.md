# DeptSelect

员工/部门选择器。

### 效果图

::: tip
因该组件涉及到项目部分接口，所以这里只放张效果图。
:::

<img :src="$withBase('/images/dept-select-1.png')" alt="foo"> 

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
model | 模式 | String | all/dept | dept
isAuthor | 是否是选择当前登录用户所拥有的部门树 | Boolean | - | false
isRepoLimit | 是否限制已创建客户库的部门 | Boolean | - | false
isTMOnly | 是否只开启账号的员工 | Boolean | - | false
isQwOnly | 是否只来自企微 | Boolean | - | false
checkedIds | 已选择的 id 列表 | Array | - | -
disableIds | 禁止选择的 id 列表，列表必须在 dialogVisible 为 true 的时候传入 | Array | - | -
limitDepts | 限制的部门 id 列表 | Array | - | -
placeholder | 弹窗标题 | String | - | 选择部门/员工
filterPlaceholder | 过滤部门/员工输入框占位 | String | - | 搜索成员或部门
canEmpty | 是否开启非空校验 | Boolean | - | false
emptyPlaceholder | 非空校验占位符 | Boolean | - | 请至少选择一个部门或员工

### Events

事件名称|说明|回调参数
:-|:-|:-
change | 点击确定按钮事件 | 共两个参数，依次是：选择的部门列表、选择的员工列表