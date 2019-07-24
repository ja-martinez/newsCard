const knex = require("../db/knex.js");

module.exports = {

  getArticles: (req, res) => {
    userId = req.session.user.id;
    knex('saved_lisings')
      .where('user_id', userId)
      .rightJoin('articles', 'saved_listings.article_id', 'articles.id')
      .then(articles => {
        res.json(articles)
      })
  },

  getNotes: (req, res) => {
    userId = req.session.user.id;
    knex('saved_listings')
      .where('user_id', userId)
      .rightJoin('notes', 'saved_listings.id', 'notes.listing_id')
      .then(notes => {
        res.json(notes)
      })
  },

  saveArticle: (req, res) => {
    userId = req.session.user.id;
    knex('articles')
      .then(articles => {
        const arrayIndex = articles.findIndex(article => article.title === req.body.title)
        if (arrayIndex !== -1) {
          const articleId = arrayIndex + 1;
          knex('saved_listings')
            .insert({
              article_id: articleId, 
              user_id: userId
            })
        } else {
          knex('articles')
            .insert({
              title: req.body.title, 
              description: req.body.description, 
              img_url: req.body.imageUrl, 
              link_url: req.body.linkUrl
            }, ['id'])
            .then(articleId => {
              knex('saved_listings')
                .insert({
                  article_id: articleId,
                  user_id: userId
                })
            })
        }
      }
  },

}
