# mysql 安装、配置

## Target

为了让本地开发环境（windows，未来 macos）与服务器一致，sequelize 代码部署后可以直接跑。

- mysql server 版本： 5.7.23
- node mysql2 版本：^2.2.5
- sequelize 版本：^5.x.x

## Tips

- 登录 mysql：`mysql -u root -p;`

- 刷新权限：`flush privileges;`

## ubuntu

- 安装+配置：<https://segmentfault.com/a/1190000020887365>

- 重启 mysql：`sudo service mysql restart`

## windows

- 安装+配置：<https://www.jianshu.com/p/e828166f030b>

- 启动 mysql 服务 `net start mysql`

- 停止 mysql 服务 `net stop mysql`
  （重启=先停止再启动）
