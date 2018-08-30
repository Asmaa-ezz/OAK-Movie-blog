const search = document.getElementById('search');
const but = document.getElementById('search-but');
const img = document.getElementsByClassName('dev-img')[0];
const imgSerch = document.getElementsByClassName('result')[0];

img.addEventListener('click', (t) => {
  if (t.target.nodeName === 'IMG') {
    const id = parseInt(t.target.id);
    const url = `https://yts.am/api/v2/movie_details.json?movie_id=${id}`;
    fetchAPI(null, 'GET', url, (err, res) => {
      if (err) console.log(`err${err.message}`);
      const x = res.movie;
      const object = {
        id: x.id,
        title: x.title,
        year: x.year,
        rating: x.rating,
        language: x.language,
        image: x.large_cover_image,
        summary: x.summary,
      };
      fetch1('/details', 'POST', object, (err, result) => {
        if (err) console.log(err);
        else console.log('pass', result);
      });
    });
  }
});


but.addEventListener('click', (e) => {
  e.preventDefault();

  if (search.value !== '') {
    const url = `https://yts.am/api/v2/list_movies.json?query_term=${search.value}`;
    const movie = [];
    fetchAPI(null, 'GET', url, (err, result) => {
      if (err) alert(err.message);
      // console.log(result.movies)
      let imgResult;
      imgSerch.textContent = '' ;
      result.movies.forEach((x,i) => {
        const object = {
          id: x.id,
          title: x.title,
          year: x.year,
          rating: x.rating,
          language: x.language,
          large_cover_image: x.large_cover_image,
          description_intro: x.description_intro,
        };
        movie.push(object);
        imgResult = document.createElement('IMG');
        imgResult.addEventListener('click',(t)=>{
          fetch1('/details', 'POST', object, (err, result) => {
            if (err) console.log(err);
            else console.log('pass', result);
          });
        })
        imgResult.src = movie[i].large_cover_image;
        imgResult.setAttribute('class','random-img');
        imgSerch.appendChild(imgResult);
      });
    });
  } else {
    alert('fill the filed');
  }
});
