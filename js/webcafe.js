let nav = $('.navigation');
let btn = $('.btn-menubar');
let menu = $('.menu');

btn.on('click', function(){
  nav.toggleClass('is-act');
})