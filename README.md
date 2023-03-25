CHICKEN-API.V1

## Description
A chicken API, logs every request and error, made with EXPRESS and MONGODB

## Installation

```bash
  npm install
```

ADD .env environement variable to server (already here even if not a good practice so u can instant try ;)

## Usage

To run the test server, run the following command

```bash
  npm run test
```

To run the dev server, run the following command

```bash
  npm run dev
```

To run the server, run the following command

```bash
  npm run start
```

## API Reference

### Chicken

```http
  GET /chicken - get all chicken
```
```http
  GET /chicken/id - get chicken with id = id
```

```http
  POST/PATCH /Chicken - create / update a chicken
```

| Body        | Type      | Description                                      |
| :---------- | :-------- | :----------------------------------------------- |
| `name`      | `string`  | The namme of the chicken                         |
| `birthday`  | `date`    | When the chicken is born                         |
| `weight`    | `number`  | The weight of the chicken                        |
| `steps`     | `number`  | The number of steps the chicken has made         |
| `isRunning` | `Boolean` | If true the service run will increment the steps |


```http
  DELETE /chicken - delete a chicken
```

| Body | Type     | Description                       |
| :--- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. The id of the chicken to delete |

```http
  post /chicken/run - no body required , increment every chicken with isRunning variable true
```