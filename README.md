# congb19-top

congb19-top 前端

目前只是个门面主页，功能嘛慢慢加
（同时也是 Congb19 的 Vue3+ts 练习场）

地址：https://www.congb19.com/

Vue 3, Typescript, Vite, scss, Naive UI

---

## ideas

Admin:
Dashboard (秘密房间)

1. 审核大家发送的快乐和烦恼
2. 增加 Wall 的内容
3. 写 miniblog，待商榷，或许对接到 congb19-blog 去会比较好？
4. **需要登陆系统。**

Feat 1: 解忧杂货铺！

1. 把游客的快乐以卡片形式贴出
2. 游客可以提烦恼或快乐
3. if 游客提了烦恼，落库->后台发送邮件到 Congb19 处->联系 解忧->部分展示
4. if 游客提了快乐，落库->后台发送邮件到 Congb19 处->审核->展示

Feat 2: 成就墙

1. 展示 Congb19 的 power！
2. 内容：已通关游戏、（未来）音乐作品、。。。
3. 游戏卡片 图 标题 评价 底部加 wiki 链接，
4. 音乐卡片 图 标题 简介 底部加 demo 链接

Feat 3: miniblog 待商榷

1. 文章卡片，文章详情页

Tips:

0. ~~darkmode，自适应和手动切换（√）~~
1. 切到 darkmode 时，弹一个灯泡挂在顶端；切到白天时滑一个太阳出来，根据时间确定位置。
2. 字体大小 随机 自动适配
3. 瀑布式堆叠 + 大量 item 懒加载
4.
