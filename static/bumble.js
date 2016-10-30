

$( document ).ready(() => {
  console.log("let's get ready to bumble!");
  doSingleAnimation();
});

function doSingleAnimation(){
  return getImageName()
      .then(loadImage)
      .then(img => {
          img.css({left: -1 * img.width(), top: -1 * img.height()});
          img.velocity({top: $(document).height() + 'px', left: $(document).width() + 'px'},
              {easing: null, duration: _.random(1000, 10000), complete: () => {
                  console.log('done animating');
                  return doSingleAnimation();
                }
              }
          );
      });
}

function loadImage(filename){
  console.log(`starting load ${filename}`);
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
