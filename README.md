<div align="center">

  <img src="/public/mascot.svg#gh-dark-mode-only" alt="logo" width="200" height="auto" />
  <img src="/public/mascot.svg#gh-light-mode-only" alt="logo" width="200" height="auto" />
  <br/>
  <br/>
  <p>
   GetLingo - the interactive language learning platform with lessons, quizzes and progress tracking. <br>GetLingo is built using TypeScript and follows all modern Web Development practices.
  </p>

# [`👉🏻 Live Link 👈🏻`](https://get-lingo.vercel.app/)

<p>
  <a href="https://github.com/Ventorix/GetLingo/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Ventorix/GetLingo" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Ventorix/GetLingo" alt="last update" />
  </a>
  <a href="https://github.com/Ventorix/mindflow/network/members">
    <img src="https://img.shields.io/github/forks/Ventorix/GetLingo" alt="forks" />
  </a>
  <a href="https://github.com/Ventorix/mindflow/stargazers">
    <img src="https://img.shields.io/github/stars/Ventorix/GetLingo" alt="stars" />
  </a>
  <a href="https://github.com/Ventorix/mindflow/issues/">
    <img src="https://img.shields.io/github/issues/Ventorix/GetLingo" alt="open issues" />
  </a>
  <a href="https://github.com/Ventorix/mindflow/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Ventorix/GetLingo" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/Ventorix/GetLingo/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Ventorix/GetLingo/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Ventorix/GetLingo/issues/">Request Feature</a>
  </h4>
</div>

</br>

## :gear: Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
&nbsp;&nbsp;![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
&nbsp;&nbsp;![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
&nbsp;&nbsp;![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
&nbsp;&nbsp;![Drizzle](https://img.shields.io/badge/Drizzle-3982CE?style=for-the-badge&logo=Drizzle&logoColor=white)
&nbsp;&nbsp;![Neon](https://img.shields.io/badge/Neon-000000?style=for-the-badge&logo=Neon&logoColor=white)
&nbsp;&nbsp;![Clerk](https://img.shields.io/badge/Clerk-008000?style=for-the-badge&logo=Clerk&logoColor=white)
&nbsp;&nbsp;![Zustand](https://img.shields.io/badge/Zustand-008000?style=for-the-badge&logo=Zustand&logoColor=white)
&nbsp;&nbsp;![shadcn/ui](https://img.shields.io/badge/shadcn/ui-008000?style=for-the-badge&logo=shadcn/ui&logoColor=white)

<br/>

## :wrench: Stats
</br>

[![Stats for GetLingo](https://github.com/Ventorix/GetLingo/assets/40743606/89676373-568c-4195-b666-22c4a594b842 "Stats for GetLingo")](https://pagespeed.web.dev/analysis/https-get-lingo-vercel-app/ "Stats for GetLingo")

<br/>

## :toolbox: Features

- 🔐 Auth using Clerk
- 🌐 Courses, Units, Lessons, Challenges
- 🔊 Sound effects
- ❤️ Hearts system
- 🌟 Points / XP system
- 🗺 Quests milestones
- 🔄 Practice old lessons to regain hearts
- 🛍 Shop system to exchange diamonds with hearts
- 🏆 Leaderboard
- 🏠 Landing page
- 📊 Admin dashboard React Admin
- 💳 Courses, Units, Lessons, Challenges CRUD operations
- 📱 Mobile responsiveness
- 💾 PostgresDB using NeonDB
- 🌧 ORM using DrizzleORM

<br/>

## :camera: Screenshots

<kbd>![image](https://github.com/Ventorix/GetLingo/assets/40743606/908cdc9e-ac54-4e6e-a755-edb67f542716)</kbd>

<kbd>![image](https://github.com/Ventorix/GetLingo/assets/40743606/d2a9e2b5-c4ab-4de2-ba96-4be56f7d5122)</kbd>

<kbd>![image](https://github.com/Ventorix/GetLingo/assets/40743606/0d8c17bb-94d0-41bc-a820-14ad9d0132f7)</kbd>

<kbd>![image](https://github.com/Ventorix/GetLingo/assets/40743606/5182c7b4-2297-4f0c-9a49-ac6943c89918)</kbd>

<kbd>![image](https://github.com/Ventorix/GetLingo/assets/40743606/9e14d487-3ac2-44a6-b3c3-18eaaa5436e8)</kbd>

<br/>

## Installation

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/Ventorix/GetLingo.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx"

# db uri
DATABASE_URL=
```

### Setup Drizzle ORM

Push database schema to server (I used Neon)

```shell
npm run db:push

```

### Seed the app

```shell
npm run db:seed

```

### Start the app

```shell
npm run dev
```

### Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `db:push`       | Push database schema to server           |
| `db:seed`       | Fill database with base working data     |
| `db:studio`     | Launch Drizzle Studio to view database   |
<br/>

## :raised_hands: Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
