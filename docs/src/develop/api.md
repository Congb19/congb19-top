# Congb19-top API 文档

---

## Public

> 获取日期

<details>
<summary>获取当前的日期信息</summary>

- url

`GET` /public/getDate

- Parameters

```javascript
{
  "isLogin": true //是否登录
}
```

- Responses

  - Code: 200

  - Description: Get the current date

  - Example Value:

```javascript
{
  "title": "date",
  "code": 200,
  "data": {
    "year": 2020,
    "month": 11,
    "date": 3,
    "day": 2
  }
}
```

</details>

> 获取幸运数字

<details>
<summary>获取一个 0~100 之间的随机数。</summary>

- url

`GET` /public/getDate

- Parameters

```javascript
{
}
```

- Responses

  - Code: 200

  - Description: Get a lucky number

  - Example Value:

```javascript
{
  "title": "luckyNumber",
  "code": 200,
  "data": {
    "luckyNumber": 2
  }
}
```

</details>

> 营销号文章生成器

<details>
<summary>营销号文章生成器</summary>

- url

`POST` /public/createTrashArticle

- Parameters

```javascript
{
  "main": "橘子",
  "event": "很好吃",
  "anotherEvent": "橘子酸酸甜甜的"
}
```

- Responses

  - Code: 200

  - Description: Create a Trash Article

  - Example Value:

```javascript
{
  "title": "trashArticle__橘子很好吃",
  "code": 200,
  "data": {
    "res": "橘子很好吃是怎么回事呢?橘子相信大家都很熟悉，但是橘子很好吃是怎么回事呢，下面就让小编带大家一起了解吧。\n    橘子很好吃，其实就是橘子酸酸甜甜的，大家可能会很惊讶橘子怎么会很好吃呢?但事实就是这样，小编也感到非常惊讶。\n    这就是关于橘子很好吃的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!"
  }
}
```

</details>

---

## User

---

## Blog

---
