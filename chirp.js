// fetch('https://arcane-reaches-97615.herokuapp.com/posts')
// .then(function(response){
//   $('#chirps').html('<table class="table table-striped"></table>')
//   $('#chirps table').append('<tr><th>Something</th><th>Tweet</th></tr>')
//
//   response.json().then(function(json){
//     json.posts.forEach(function(x){
//     $('.chirps table').append('<tr><td>' + x.user_id + '</td><td>' + x.body + '</td></tr>')
//   })
// })
//
// })

// fetch('https://arcane-reaches-97615.herokuapp.com/posts')
// .then(function(response){
//   return response.json()
// }).then(function(things){
//   things.posts.forEach(function(twerp){
//     document.getElementsByClassName('chirps').innerHTML = document.getElementsByClassName('chirps').innerHTML + "<p>" + twerp.body + "</p>" + "<span>" + twerp.user_id + "</span>"
//   })
// })

var film_source   = $("#film_output").html();
var film_template = Handlebars.compile(film_source);

$.getJSON('https://arcane-reaches-97615.herokuapp.com/posts')
.then(function(r){
    $('.posts').html('')
    r.results.forEach(function(film){
      film.formatted_crawl = simple_format(film.opening_crawl)
      var display = film_template(film)
      $('.posts').append(display)
      film.characters.forEach(function(char_url){
        $.getJSON(char_url).then(function(x){
          $('#episode' + film.body)
        })
      })
    })
