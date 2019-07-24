const controller = require("../controllers/controller.js")
module.exports = function(app){

  app.get('/savedArticles/', controller.getArticles);
  app.get('notes/', controller.getNotes);
  app.post('/saveArticle/', controller.saveArticle)

}
