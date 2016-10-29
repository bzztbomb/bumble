

$( document ).ready(function() {

  console.log( "ready!" );
  getImage()
    .then(image => {
      $('#container').append(`<img id="theImg" src="/images/${image}" width="400px;"/>`);
    })
});

function getImage(){
  return new Promise((fulfill, reject) => {
    $.get('/i', file => {
      fulfill(file);
    });
  });
}
