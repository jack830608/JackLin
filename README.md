# node.js + express + react  + scss

This project requires [Node.js](https://nodejs.org/) v10+ to run. 


### For local development

Run with [nodemon](https://nodemon.io/)
```sh
$ cd project_folder
$ npm install
$ npm run dev
```

### For production

```sh
$ cd project_folder
$ npm install
$ npm run build
$ npm start
```

### For production docker build

```sh
$ cd project_folder
$ sh build.sh
```

### Push to docker hub

- Step 1: cd project_folder
- Step 2: Modify DockerVersion to latest version
- Step 3: Execute  ``` sh push.sh```
