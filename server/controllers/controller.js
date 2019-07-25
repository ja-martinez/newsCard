const knex = require("../db/knex.js");

module.exports = {

  register: (req, res) => {
    knex('users')
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(() => {
        res.status(200).end();
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
          knex('saved_listings')
            .where('user_id', user.id)
            .rightJoin('articles', 'saved_listings.article_id', 'articles.id')
            .then(articles => {
              knex('saved_listings')
                .where('user_id', user.id)
                .rightJoin('notes', 'saved_listings.id', 'notes.listing_id')
                .then(notes => {
                  res.json({
                    articles,
                    notes,
                  })
                })
            })
        } else {
          res.status(401).end();
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
          }, ['id', 'content'])
          .then(notes => {
            const note = notes[0]
            res.json(note)
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
              knex('articles')
                .where('id', articleId)
                .then(articles => {
                  article = articles[0];
                  res.json(article)
                })
            })
        } else {
          knex('articles')
            .insert({
              title: req.body.title, 
              description: req.body.description, 
              img_url: req.body.image_url, 
              link_url: req.body.link_url
            }, ['id'])
            .then(articleId => {
              knex('saved_listings')
                .insert({
                  article_id: parseInt(articleId),
                  user_id: userId
                })
                .then(() => {
                  knex('articles')
                    .where('id', articleId)
                    .then(articles => {
                      article = articles[0];
                      res.json(article)
                    })
                })
            })
        }
      })
  }

}
