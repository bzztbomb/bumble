setInterval(changeBackground, 10);

let r = 50;
let g = 0;
let b = 0;

function changeBackground(){
  let which = _.random(0,2);
  let amt = _.random(-3, 3);
  switch(which){
    case 0:
      r = Math.max(0, Math.min((r + amt), 256));
      break;
    case 1:
      g = Math.max(0, Math.min((g + amt), 256));
      break;
    case 2:
      b = Math.max(0, Math.min((b + amt), 256));
      break;
  }
  let color = `rgb(${r},${g},${b})`;
  $('body').css('background-color', color);
}
