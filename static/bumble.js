
const COORDS = ['left', 'right', 'top', 'bottom'];

$( document ).ready(() => {
  console.log("let's get ready to bumble!");
  _.range(25).forEach(doSingleAnimation);
  // doSingleAnimation();
});

function doSingleAnimation(){
  return getImageName()
      .then(loadImage)
      .then(img => {

          let trajectory = getTrajectory(img);
          img.css({left: trajectory.start.x, top: trajectory.start.y});

          mutateImage(img);

          img.velocity({left: trajectory.end.x + 'px', top: trajectory.end.y + 'px'},
              {easing: null, duration: _.random(1000, 10000), complete: () => {
                  // console.log('done animating');
                  img.remove();
                  return doSingleAnimation();
                }
              }
          );
      });
}

function mutateImage(img){
  if(_.random(0,1)){
    flipHorizontal(img);
  }
  if(((img.width() == 400) || (img.height() == 400)) && _.random(0, 100) < 25){
    let min = 150;
    img.css({'max-width': _.random(min, 400) + 'px'});
    img.css({'max-height': _.random(min, 400) + 'px'});
  }
}

function getTrajectory(img){
  let start = randomEdgePoint();
  start = positionOffScreen(start, img);
  // console.log(`Starting at ${start.coord}: ${start.x}x${start.y}`);
  // console.log('window is ' + $(window).width() + 'x' + $(window).height());
  let end = randomEdgePoint(COORDS.filter(c => c != start.coord));
  end = positionOffScreen(end, img);
  return { start: start, end: end};
}

function randomEdgePoint(coords){
  coords = coords || COORDS;
  let coord = coords[_.random(0, coords.length - 1)];
  switch(coord){
    case 'left':
      return {coord: coord, x: 0, y: randomY()};
    case 'right':
      return {coord: coord, x: $(window).width(), y: randomY()};
    case 'top':
      return {coord: coord, x: randomX(), y: 0};
    case 'bottom':
      return {coord: coord, x: randomX(), y: $(window).height()};
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
  return _.random(0, $(window).width());
}

function randomY(){
  return _.random(0, $(window).height());
}

function flipHorizontal(img){
  // console.log('horizontal flip');
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
  // console.log(`starting load ${filename}`);
  return new Promise((fulfill,reject) => {
    let img = new Image();
    img.className = 'imgitem';
    img.onload = () => {
      img = $(img);
      $('body').append(img);
      // console.log(`loaded ${filename} ${img.width()}x${img.height()}`);
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
