//disable load-screen on page load ~~
var loadScreen = document.getElementById('load-screen');
var typeDelay;
var loadDelay = 4000;
var str = [
  'Loading..'];
$(window).on('load',function() {
  var loadText = document.querySelector("#load-screen h3");
  var i = 0;
  var strArray = str[i].split('');
  var loopTimer;

  function type() {
    if(strArray.length > 0){
      typeDelay = 1800;
      loadText.innerHTML += strArray.shift();
    }
    else if(strArray.length === 0){
      strArray = 0;
      i++
      if(i === str.length) {
        typeDelay = 1800;
        i = 0;
      }
      setTimeout(function(){
        loadText.innerHTML = '';
        strArray = str[i].split('');
      }, typeDelay);
    }
    loopTimer = setTimeout(type, 80);
  }
  type();
  setTimeout(function(){
    $('#load-screen').css({
      'opacity': '0'
    });
    setTimeout(function(){
      loadScreen.remove();
    }, 1000);
  }, loadDelay);
});

$(document).ready(function()  {
  //enables horizontal scrolling on click &&
  $('#nav-links li a').click(function(e){
    var link = $(this).attr('href');
    // e.preventDefault();
  });

  //burger-button trigger
  var burgerB = document.querySelector('#burger-button');
  var active = false;
  var ul = document.querySelector('#nav-links')

  burgerB.addEventListener('click', function(){
    if(active === false){
      this.classList.add('rotate');
      active = true;
      $('#nav-links li').each(function(i) {
        setTimeout(function() {
          $('#nav-links li').eq(i).addClass('visible');
        },  150 * (i+1));
      });
    }
    else{
      this.classList.remove('rotate');
      active = false;
      $('#nav-links li').each(function(i) {
        setTimeout(function() {
          $('#nav-links li').eq(i).removeClass('visible');
        },  150 * (i+1));
      });
    }
  });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // .home center-text typing animation
  var typeDelay;
  var str = [
    'Hey, friend!',
    'Do you need help with your website?',
    'I\'m a front end web developer.',
    'And I\'d be honored to work with you!',
    'Shoot me an email whenever!',
    'In the meantime, feel free to check out the rest of my portfolio.',
    'Have a good one! :)'
     ];
  var centerText = document.getElementById('center-text');
  var i = 0;
  var strArray = str[i].split('');
  var loopTimer;
  var chibiMouth = document.querySelector('#chibi-mouth');
  var loopPause;

  function type() {
   if(strArray.length > 0){
     centerText.innerHTML += strArray.shift();
     chibiMouth.classList.add('active');
     loopPause = 1800;
   }
   else if(strArray.length === 0){
     strArray = 0;
     i++
     chibiMouth.classList.remove('active');
     if(i === str.length) {
       i = 0;
       loopPause = 5000;
     }
     setTimeout(function(){
       centerText.innerHTML = '';
       strArray = str[i].split('');
     }, loopPause);
   }
   loopTimer = setTimeout(type, 50);
  }
  setTimeout(function(){
    type();
  },loadDelay);
  // //start canvas animation
  // var canvas = document.querySelector('canvas');
  //
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  //
  // var c = canvas.getContext('2d');
  //
  // //Utility functions
  // function randomIntFromRange(min,max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  //
  // var colorArray = [
  //   '#f5f6f7',
  //   '#c6f4d4',
  //   '#7f8c8d'
  // ];
  //
  // function Particle(x, y, radius, color) {
  //   this.x = x;
  //   this.y = y;
  //   this.radius = radius;
  //   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  //   this.radians = Math.random() * Math.PI * 3.8;
  //   this.velocity = 0.008;
  //   this.distanceFromCirle = {x: randomIntFromRange(500,650),
  //                             y: randomIntFromRange(80,300)};
  //
  //   this.draw = function() {
  //     c.beginPath();
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     c.fillStyle = this.color;
  //     c.fill();
  //     c.closePath();
  //   }
  //
  //   this.update = function() {
  //     this.radians += this.velocity;
  //     this.x = x + Math.cos(this.radians / 2) * this.distanceFromCirle.x;
  //     this.y = y + Math.sin(this.radians) * this.distanceFromCirle.y;
  //
  //     this.draw();
  //   }
  // }
  //
  // window.addEventListener('resize', function(event) {
  //   if (innerWidth != canvas.width) {
  //    canvas.width = window.innerWidth;
  //    canvas.height = window.innerHeight;
  //
  //    init();
  //   }
  // });
  //
  // // Implementation
  // let particles;
  // function init() {
  //   particles = [];
  //
  //   for(let i = 0; i < 450; i++){
  //     particles.push(new Particle(canvas.width/2, canvas.height/1.8,(Math.random() * 3) + 1,'#000'));
  //   }
  // }
  //
  // function animate() {
  //   requestAnimationFrame(animate);
  //   c.clearRect(0, 0, innerWidth, innerHeight);
  //
  //   for(var i = 0; i < particles.length; i++) {
  //     particles[i].update();
  //
  //     //draw line whenever objects are at a close distance ~
  //     var dt = 40;
  //     for(var j = i; j < particles.length; j++) {
  //       if(particles[i].x - particles[j].x < dt &&
  //         particles[i].x - particles[j].x > -dt &&
  //         particles[i].y - particles[j].y < dt &&
  //         particles[i].y - particles[j].y > -dt) {
  //         c.beginPath();
  //         c.moveTo(particles[i].x, particles[i].y);
  //         c.lineTo(particles[j].x, particles[j].y);
  //         c.stroke();
  //         c.strokeStyle = '#F4F5F0';
  //         c.lineWidth = 0.30;
  //         c.closePath();
  //       }
  //     }
  //   }
  // }
  //
  // init();
  // animate();


  //start canvas animation
  var canvas = document.querySelector('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var c = canvas.getContext('2d');

  //Utility functions
  function randomIntFromRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var colorArray = [
    '#f5f6f7',
    '#c6f4d4',
    '#7f8c8d'
  ];

  function Dot(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }

    this.update = function() {
      this.draw();

      //object move ~
      this.x += this.dx;
      this.y += this.dy;

      //x axis overflow restriction ~
      if(this.x + this.radius > canvas.width || this.x - this.radius < 0)     {
        this.dx = -this.dx;
      }

      //y axis overflow restriction ~
      if(this.y + this.radius > canvas.height || this.y - this.radius < 0)  {
        this.dy = -this.dy
      }
    }
  }

  window.addEventListener('resize', function(event) {
    if (innerWidth != canvas.width) {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;

     init();
    }
  });

  // Implementation
  var dotArray = [];
  var dotLimit

  function init() {
    dotArray = [];
    dotLimit;

    // calculate dots/objects to be created depending on screen size
    function dotScreen() {
      if(innerWidth <= 414 ) {
        dotLimit = 80;
      }
      else{
        dotLimit = 250;
      }
    }
    dotScreen();

    for(var i = 0; i < dotLimit; i++) {
      var radius = randomIntFromRange(1,3);
      var x = Math.random() * (canvas.width - radius * 2) + radius;
      var y = Math.random() * (canvas.height - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 1.3;
      var dy = (Math.random() - 0.5) * 1.3;
      var colNum = Math.floor(Math.random() * colorArray.length);

      dotArray.push(new Dot(x, y, dx, dy, radius, colorArray[colNum]));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    //for loops used to call update on every object in an array ~
    for(var i = 0; i < dotArray.length; i++) {
      dotArray[i].update();

      //draw line whenever objects are at a close distance ~
      var dt = 60;
      for(var j = i; j < dotArray.length; j++) {
        if(dotArray[i].x - dotArray[j].x < dt &&
          dotArray[i].x - dotArray[j].x > -dt &&
          dotArray[i].y - dotArray[j].y < dt &&
          dotArray[i].y - dotArray[j].y > -dt) {
          c.beginPath();
          c.moveTo(dotArray[i].x, dotArray[i].y);
          c.lineTo(dotArray[j].x, dotArray[j].y);
          c.stroke();
          c.strokeStyle = '#F4F5F0';
          c.lineWidth = 0.30;
          c.closePath();
        }
      }
    }
  }

  init();
  animate();

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //scroll animation trigger
  $(window).scroll(function() {
    //who scroll animation triggers
    var wScroll = $(this).scrollTop();
    var navLinks = document.querySelector('#nav-links');
    var navBar = document.querySelector('.nav-bar');
    if(wScroll >= $('.who').offset().top){
      $('#burger-button').addClass('inactive');
      $('.nav-bar li').addClass('inactive');
      navLinks.children[1].classList.remove('inactive');
      navLinks.children[1].classList.add('active');
      navBar.classList.add('active');
      $('#center-logo').addClass('active');
    }
    else{
      $('#burger-button').removeClass('inactive');
      $('.nav-bar li').removeClass('inactive');
      $('#nav-links li').removeClass('active');
      navBar.classList.remove('active');
      $('#center-logo').removeClass('active');
    }

    if(wScroll >= $('.who').offset().top / 5){
      $('.who-content-1').addClass('active');
      $('.who-content-2').addClass('active');

      $('.who-content-1').children().each(function(i) {
        setTimeout(function() {
          $('.who-content-1').children().eq(i).addClass('active');
        },  150 * (i+1));
      });
    }
    else{
      $('.who-content-1').removeClass('active');
      $('.who-content-1').children().removeClass('active');
      $('.who-content-2').removeClass('active');
    }

    //what scroll animation triggers
    if(wScroll >= $('.what').offset().top / 1.7){
      $('#nav-links li').removeClass('active');
      $('#nav-links li').addClass('inactive');
      navLinks.children[2].classList.remove('inactive');
      navLinks.children[2].classList.add('active');


      $('.what .container').children().each(function(i){
        setTimeout(function(){
          $('.what .container').children().eq(i).addClass('active');
        },150 * (i+1));
      });
    }
    else{
      $('.what .container').children().removeClass('active');
    }

    //where scroll animation trigger
    if(wScroll >= $('.where').offset().top / 1.2){
      $('.where .container').addClass('active');
      $('#nav-links li').removeClass('active');
      $('#nav-links li').addClass('inactive');
      navLinks.children[3].classList.remove('inactive');
      navLinks.children[3].classList.add('active');
    }
    else{
      $('.where .container').removeClass('active');
    }
  });
});
