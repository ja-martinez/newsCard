const knex = require("../db/knex.js");

module.exports = {

  register: (req, res) => {
    knex('users')
      .insert([{
        email: req.body.email,
        password: req.body.password
      }])
      .then(() => {
        res.status(200);
      })
  },

  login: (req, res) => {
    knex('users')
      .where({
        email: req.body.email
      })
      .then(result => {
        let user = result[0];
        if (user.password === req.body.password) {
          req.session.user = user;
          knex('saved_lisings')
            .where('user_id', user.id)
            .rightJoin('articles', 'saved_listings.article_id', 'articles.id')
            .then(articles => {
              knex('saved_listings')
                .where('user_id', user.id)
                .rightJoin('notes', 'saved_listings.id', 'notes.listing_id')
                .then(notes => {
                  res.json({
                    articles,
                    notes
                  })
                })
            })
        } else {
          res.status(401)
        }
      })
  },

  postNote: (req, res) => {
    articleId = req.params.articleId;
    userId = req.session.user.id
    knex('saved_listings')
      .where({
        article_id: articleId,
        user_id: userId
      })
      .then(listings => {
        listingId = listings[0].id;
        knex('notes')
          .insert({
            listing_id: listingId,
            content: req.body.content
          })
          .then(() => {
            res.status(200)
          })
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
            .then(() => {
              res.status(200)
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
                .then(() => {
                  res.status(200)
                })
            })
        }
      })
  }

}
