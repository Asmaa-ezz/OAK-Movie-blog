const axios = require('axios');

exports.get = (req, res) => {
  const movie = [];
  axios.get('https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=20')
    .then((response) => {
      for (let i = 0; i < 3; i++) {
        const rendom = Math.floor(Math.random() * 21);
        const img = response.data.data.movies[rendom].large_cover_image;
        const id = response.data.data.movies[rendom].id;
        movie.push({ img, id });
      }
      res.render('home', {
        movie, stylefile: 'home', domfile: 'home', fetch: 'fetchAPI', fetchAPI: 'fetch',
      });
    })
    .catch((error) => {
      console.log(error.message);
      return new TypeError(`error in API + ${error.message}`);
    });
};

