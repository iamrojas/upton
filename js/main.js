
$('.smooth').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });




let shapeAnime = new Waypoint({
  element: document.getElementById('hero'),
  handler: function(direction) {
      anime({
          targets: ['.st1', '.st2'],
          opacity: [0, 1],
          translateY: [-500, 0],
          duration: 1500,
          easing: 'easeOutQuad',
          delay: function(el, index) {
              return index * 10;
          },
      })
  },
  offset: 1000
});

let shape2Anime = new Waypoint({
  element: document.getElementById('hero'),
  handler: function(direction) {
      anime({
          targets: ['.st3' , '.st4'],
          opacity: [0, 1],
          translateX: [-250, 0],
          duration: 1000,
          easing: 'easeOutQuad',
          delay: function(el, index) {
              return index * 10;
          },
      })
  },
  offset: 1000
});




let aboutAnime = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        anime({
            targets: ['.about-left', '.about-right'],
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 800,
            easing: 'easeInOutQuad',
            delay: function(el, index) {
                return index * 400;
            },
        })
    },
    offset: 1000
});


let workAnime = new Waypoint({
    element: document.getElementById('work'),
    handler: function(direction) {
        anime({
            targets: ['.work__item'],
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 800,
            easing: 'easeInOutQuad',
            delay: function(el, index) {
                return index * 400;
            },
        })
    },
    offset: 1000
});