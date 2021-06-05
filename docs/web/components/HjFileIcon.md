# HjFileIcon

根据文件`地址`或者`类型`显示对应文件icon，现支持下面这些文件：

<img :src="$withBase('/images/hj-file-icon-1.png')" alt="foo"> 
<img :src="$withBase('/images/hj-file-icon-2.png')" alt="foo"> 


### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
url | 文件地址，如果没有后缀就不会识别类型 | String | - | -
type | 文件类型，没有后缀的文件，需要传入确定的type | png/jpg/gif/mp4/mp3/zip/rar/pdf/ppt/xsl/doc/html/txt/ | -