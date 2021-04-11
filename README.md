// Nodemon

- install node-mon

* npm install -g nodemon: "install trong mọi dự án"
* npm install --save-dev nodemon: "install trong devDependencies của dự án"

- Vào file package.json chọn scripts viết ("start": "nodemon --inspect ./build/index.js",): "chạy npm start để không thoát khỏi command") npm start
  //Morgan

- install morgan

* npm install --save-dev nodemon: "install trong devDependencies của dự án"
  // node-sass

- install scss: npm install node-sass
- Vào file package.json chọn scripts viết ("watch": "node-sass -w build/resource/scss/app.scss build/public/css/app.css",) //node-sass -w file chứa scss sang file chứa css npm run watch

//express-handlebars
-install express-handlebars:

- npm install express-handlebars
  -use:
- const handlebars = require("express-handlebars");
- app.get("/", (req, res) => {
  res.render("Tên file hbs mà bạn muốn render đến");
  });
  ├── app.js
  └── views
  ├── home.handlebars
  └── layouts
  └── main.handlebars
