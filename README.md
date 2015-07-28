CARS: Codes for Administrative Regions of China
===============================================

行政区划代码是由中华人民共和国国家统计局发布一套6位数字标识的区域编码，最新的	行政代码可以从以下地址获取到：

http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/

使用说明
-------

1. 安装 [node](https://nodejs.org/)
2. 抓去需要版本的数据，替换 `rawdata.txt`
3. 编辑 `base.js`，补充需要的方法
4. 运行 `./build.sh`，将会生成 `dist/carc.js`
