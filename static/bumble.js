

$( document ).ready(() => {

  console.log( "ready!" );
  getImageName()
    .then(loadImage)
    .then(img => {
        img.css({left: -1 * img.width(), top: -1 * img.height()});
        img.velocity({top: $(document).height() + 'px', left: $(document).width() + 'px'},
            {easing: null, duration: 6000, complete: () => console.log('done animating')});
      });
});

function loadImage(filename){
  return new Promise((fulfill,reject) => {
    let img = new Image();
    img.className = 'imgitem';
    img.onload = () => {
      img = $(img);
      $('body').append(img);
      console.log(`loaded ${filename} ${img.width()}x${img.height()}`);
      fulfill(img);
    };
    img.src = `/images/${filename}`;
  });
}

function getImageName(){
  return new Promise((fulfill, reject) => {
    $.get('/i', file => {
      fulfill(file);
    });
  });
}
