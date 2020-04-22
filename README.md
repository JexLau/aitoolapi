# QuantLab.BitCoin.Terminal.BusinessCenter 
### Terminal业务中心

## 快速开始

### 运行程序
先运行  
``` npm install ```  
命令，下载需要的依赖。  

然后运行命令  
` npm run dev ` 本地开发环境  

线上环境根据环境变量` EGG_SERVER_ENV `不同，加载不同配置文件  

` EGG_SERVER_ENV=Test ` 线上测试环境

` EGG_SERVER_ENV=A ` 新加坡A环境

` EGG_SERVER_ENV=Client ` 对外发布环境

然后运行
` npm run start ` 运行服务  
 
服务暴露端口为` 7012 `