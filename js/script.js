$(document).ready(function(){
   
     

    $('ul.studyOf__tabs').on('click', 'li:not(.studyOf__tab_active)', function() {
      $(this)
          .addClass('studyOf__tab_active').siblings().removeClass('studyOf__tab_active')
          .closest('div.studyOf__flex').find('div.studyOf__whiteBG').removeClass('studyOf__whiteBG_active').eq($(this).index()).addClass('studyOf__whiteBG_active');
    }); 

    // $('ul.studyOf__tabs').on('click', 'li:not(.studyOf__tab_active)', function() {
    // $(this)
    //     .addClass('studyOf__tab_active').siblings().removeClass('studyOf__tab_active')
    //     .closest('div.container').find('div.studyOf__img').removeClass('studyOf__img_active').eq($(this).index()).addClass('studyOf__img_active');
    // }); 

    $('ul.slider__tabs').on('click', 'li:not(.slider__tab_active)', function() {
      $(this)
          .addClass('slider__tab_active').siblings().removeClass('slider__tab_active')
    }); 
    

});





