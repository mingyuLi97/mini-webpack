# 简易的 webpack

## 1、初始化阶段 - webpack

合并配置项
创建 compiler
注册插件

## 2、编译阶段 - build

读取入口文件
从入口文件开始进行编译
调用 loader 对源代码进行转换
借助 babel 解析为 AST 收集依赖模块
递归对依赖模块进行编译操作

## 3、生成阶段 - seal

创建 chunk 对象
生成 assets 对象

## 4、写入阶段 - emit

## 参考

- https://juejin.cn/post/7031546400034947108
- https://juejin.cn/post/7130999419582971912
