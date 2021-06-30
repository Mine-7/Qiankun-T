qiankun -test

### 启动操作
1.执行 npm i 安装主应用依赖
2.执行 npm run clone 克隆所有子应用代码
3.执行 npm run checkout  切换子应用分支至develop 分支
4.执行 npm run installAll  安装子应用依赖
5.执行 npm start  启动所有应用 主应用默认 8000 端口， 子应用1 3000 端口， 子应用2 3001 端口


### 更新代码
更新主应用 包括子应用代码
npm run pull 

###  打包部署

npm run build

目前子应用打包有问题 主应用打包完成后需切换至 子应用文件逐个打包

注意：需先打包主应用 再打包子应用 

dist 文件 目录需按如下放置



dist
--child
----sub-react
----sub-react-second
