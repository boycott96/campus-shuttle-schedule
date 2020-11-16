# campus-shuttle-schedule

## 本项目使用的是飞书开发语言，进行搭建，与微信小程序类似。只有个别的命令区别与微信小程序
```
比如微信小程序使用的wx:for 
飞书小程序使用的tt:for
```

### 安装开发者工具
```
npm install https://sf1-scmcdn-tos.pstatp.com/goofy/lark/opdev/cli/bdeefe-opdev-cli-1.3.0.tgz -g --registry https://registry.npm.taobao.org
```

### 进行登录
```
opdev login
```

### 创建小程序
```
opdev new my-hello-world --template=hello-world
```

### 运行小程序
```
opdev devtools ./my-hello-world
```

### 手机预览
```
opdev preview ./my-hello-world -p Mobile
```

### 上传代码到飞书的线上，并到飞书应用管理后台，进行项目发布
```
opdev upload ./my-hello-world -p Mobile -v 1.7.0
```
