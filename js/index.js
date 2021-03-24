
// tgl_btn 이벤트
$(function(){
  $('.tgl_btn').click(function(){
    let docTop = $(document).scrollTop();
    if(docTop < 200){
      $('.header').toggleClass('active');
    }
    $('nav').slideToggle();
  });
})

// 섹션이동하면 slide Toggle 이벤트
$(function(){
  $('.main_nav a').click(function(){
    $('nav').slideToggle();
  });
})


// 메인슬라이더
  window.onload = function(){
    var mySwiper = new Swiper('.swiper-container', {
    speed:1000,
    loop: true,      
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay:2000,
      disableOnInteraction: false,
    }
  });
}

// 네비게이션 스크롤 이벤트
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 100 ){
    $('.go_main').addClass('active');
  }else{
    $('.go_main').removeClass('active');
  }        
})
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 180 ){
    $('.header').addClass('active');
    $('.main_nav').addClass('active');
    $('.go_main').addClass('active');
  }else{
    $('.header').removeClass('active');
    $('.main_nav').removeClass('active');
    $('.go_main').removeClass('active');
  }        
})


//iam_txt 스크롤 이벤트 
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 220){
    $('.iam_txt').addClass('active');
  }else{
    $('.iam_txt').removeClass('active');
  }    
})


// work hover
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 300){
    $('.content_top').addClass('sticky');
  }else{
    $('.content_top').removeClass('sticky');
  }  
})

// work 새창
$('.hl_port').on('click',function(){
  let actIndex = $(this).index();
  if(actIndex == 0){
    window.open('http://kassy.dothome.co.kr/megabox/');
  }else if(actIndex == 1){
    window.open('http://kassy.dothome.co.kr/hansol/');
  }else if(actIndex == 2){
    window.open('http://kassy.dothome.co.kr/indigo/');
  }else{
    window.open('http://kassy.dothome.co.kr/mozilla/');
  }
})

// txt typing 이벤트
function txtTyping(){
  let pTyping = $('.skill .skill_top .p');
  let txtTyping = pTyping.text().trim();
  pTyping.text('');
  let subTyping = '';
  let indexNum = 0;
  let rotateStrong = setInterval(function(){
    if(indexNum < txtTyping.length){
      subTyping = subTyping + txtTyping[indexNum];
      pTyping.text(subTyping);
      indexNum++;
    }else{
      subTyping ='';
      indexNum = 0;
    }
  },100);
}