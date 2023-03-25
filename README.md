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

| Body        | Type      | Description                                      |
| :---------- | :-------- | :----------------------------------------------- |
| `name`      | `string`  | The namme of the chicken                         |
| `birthday`  | `date`    | When the chicken is born                         |
| `weight`    | `number`  | The weight of the chicken                        |
| `steps`     | `number`  | The number of steps the chicken has made         |
| `isRunning` | `Boolean` | If true the service run will increment the steps |

```http
  PATCH /quizz - update a quizz
```

| Body          | Type     | Description                         |
| :------------ | :------- | :---------------------------------- |
| `name`        | `string` | **Required**. The name of the quizz |
| `description` | `string` | Description of the quizz            |
| `id`          | `string` | **Required**. The id of the quizz   |

```http
  PATCH /quizz - delete a quizz
```

| Body | Type     | Description                       |
| :--- | :------- | :-------------------------------- |
| `id` | `string` | **Required**. The id of the quizz |

```http
  POST /quizz/question - add a question to a quizz
```

| Body         | Type     | Description                          |
| :----------- | :------- | :----------------------------------- |
| `quizzId`    | `string` | **Required**. The id of the quizz    |
| `questionId` | `string` | **Required**. The id of the question |

```http
  POST /quizz/question - remove a question to a quizz
```

| Body         | Type     | Description                          |
| :----------- | :------- | :----------------------------------- |
| `quizzId`    | `string` | **Required**. The id of the quizz    |
| `questionId` | `string` | **Required**. The id of the question |
