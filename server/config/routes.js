const controller = require("../controllers/controller.js")
module.exports = function(app){

  app.post('/register', controller.register);
  app.get('/login', controller.login);
  app.post('/saveArticle/', controller.saveArticle);
  app.post('/postNote/:articleId', controller.postNote)

}
