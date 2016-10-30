
const COORDS = ['left', 'right', 'top', 'bottom'];

$( document ).ready(() => {
  console.log("let's get ready to bumble!");
  doSingleAnimation();
});

function doSingleAnimation(){
  return getImageName()
      .then(loadImage)
      .then(img => {
          let start = randomEdgePoint();
          start = positionOffScreen(start, img);
          console.log(`Starting at ${start.coord}: ${start.x}x${start.y}`);
          img.css({left: start.x, top: start.y});
          if(_.random(0,1)){
            flipHorizontal(img);
          }
          let end = randomEdgePoint(COORDS.filter(c => c != start.coord));
          end = positionOffScreen(end, img);
          img.velocity({left: end.x + 'px', top: end.y + 'px'},
              {easing: null, duration: _.random(1000, 10000), complete: () => {
                  console.log('done animating');
                  img.remove();
                  return doSingleAnimation();
                }
              }
          );
      });
}

function randomEdgePoint(coords){
  coords = coords || COORDS;
  let coord = coords[_.random(0, coords.length - 1)];
  switch(coord){
    case 'left':
      return {coord: coord, x: 0, y: randomY()};
    case 'right':
      return {coord: coord, x: $(document).width(), y: randomY()};
    case 'top':
      return {coord: coord, x: randomX(), y: 0};
    case 'bottom':
      return {coord: coord, x: randomX(), y: $(document).height()};
  }
}

function positionOffScreen(point, img){
  switch(point.coord){
    case 'left':
      point.x = point.x - img.width();
      break;
    case 'top':
      point.y = point. y - img.height();
  }
  return point;
}

function randomX(){
  return _.random(0, $(document).width());
}

function randomY(){
  return _.random(0, $(document).height());
}

function flipHorizontal(img){
  console.log('horizontal flip');
  return img.css({
    '-moz-transform': 'scaleX(-1)',
    '-o-transform': 'scaleX(-1)',
    '-webkit-transform': 'scaleX(-1)',
    'transform': 'scaleX(-1)',
    'filter': 'FlipH',
    '-ms-filter': 'FlipH',
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
