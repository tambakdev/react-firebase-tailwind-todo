# Todo App

### Installation
you can use yarn or npm but i used yarn package manager.

> \$ git clone git@github.com:tambakdev/react-firebase-tailwind-todo.git your-project

> \$ cd your-project && yarn install

After depedencies is installed, please create console and database in your firebase account and edit ```index.js``` file from ```src/configs/firebase``` directory like this.

```
const firebaseConfig = {
  apiKey: "YOUR_API",
  authDomain: "YOUR_AUTHDOMAIN",
  databaseURL: "YOUR_URLDB",
  projectId: "YOUR_PROJECTNAME",
  storageBucket: "YOUR_STORAGE",
  messagingSenderId: "YOUR_IDSENDER",
  appId: "YOUR_APPID",
  measurementId: "YOUR_MEASUREMENTID",
};
```
and enjoy...

> \$ yarn start