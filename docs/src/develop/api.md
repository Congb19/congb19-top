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

---

## User

---

## Blog

---
