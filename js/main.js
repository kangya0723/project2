$(document).ready(function(){

    var mv = new Swiper(".mv", {
        centeredSlides: true,
        loop: true, 
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var best = new Swiper(".best", {
        centeredSlides: true,
        loop: true, 
        speed: 1000,
        slidesPerView: 4,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      });

      $(".play").hide();
      $(".pause").click(function(){
        mv.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
      });
      $(".play").click(function(){
        mv.autoplay.start();
        $(".play").hide();
        $(".pause").show();
      });
      $(".best li img:nth-child(2)").hide();
      $(".best li").hover(function(){
        $(this).find("img:nth-child(2)").stop().fadeToggle()
        $(this).find(".best li").hide();
      });

      // $(".new_right li:not(:first-child").hide();
      // $(".new_left li:nth-child(1)").click(function(){
      //   $(this).addClass("on").siblings().removeClass("on");
      //   $(".new_right li:nth-child(1)").stop().fadeIn().siblings().fadeOut();
      // });
      // $(".new_left li:nth-child(2)").click(function(){
      //   $(this).addClass("on").siblings().removeClass("on");
      //   $(".new_right li:nth-child(2)").stop().fadeIn().siblings().fadeOut();
      // });
      // $(".new_left li:nth-child(3)").click(function(){
      //   $(this).addClass("on").siblings().removeClass("on");
      //   $(".new_right li:nth-child(3)").stop().fadeIn().siblings().fadeOut();
      // });
      // $(".new_left li:nth-child(4)").click(function(){
      //   $(this).addClass("on").siblings().removeClass("on");
      //   $(".new_right li:nth-child(4)").stop().fadeIn().siblings().fadeOut();
      // });

       $(".tab_btn li").click(function(){
         let idx = $(this).index();
         $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
       });

      $(".tab_img li:not(:first-child)").hide();
      
      // .tab_btn li를 클릭했을 때
      // $(this)의 index()값을 가져와서 변수 idx에 할당하시오
      // .tab_img li에 eq(변수 idx)에 해당하는 li는 fadeIn하고 형제들은 fadeOut하시오
});