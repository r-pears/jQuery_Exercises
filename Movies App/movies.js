$('#submit').on('click', function (event) {
  event.preventDefault();
  let $movie = $('#movieTitle').val();
  let $rating = $('#movieRating').val();
  $('#movieList')
    .append(`<li>${$movie} has ${$rating} stars</li>`)
    .append(`<button id='deleteMovie'>Delete Movie</button>`);
  $('#movieTitle').val(' ');
  $('#movieRating').val(' ');
});

$('ul').on('focus', 'button', function () {
  $(this).prev().remove();
  $(this).remove();
});
