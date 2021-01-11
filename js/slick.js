$(document).ready(function(){
    $('.teacherReviews-slick').slick({   
        dots: true,
        arrows: true,            
        slidesToShow: 4.35,                    
        slidesToScroll: 1,        
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/SliderArrowLeft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/SliderArrowRight.svg"></button>',  
        responsive: [
            {
                breakpoint: 1935,    
                settings: {                    
                    slidesToShow: 4.37
                },
            },
            {
                breakpoint: 1835,    
                settings: {                    
                    slidesToShow: 4.27
                },
            },
            {
                breakpoint: 1773,    
                settings: {                    
                    slidesToShow: 3.69
                },
            },
            {
                breakpoint: 1520,    
                settings: {                    
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 1261,    
                settings: {                    
                    slidesToShow: 2.34
                },
            }, 
            {
                breakpoint: 965,    
                settings: {                    
                    slidesToShow: 1
                },
            }     
        ],       
    });



    $('.slider1').slick({
        
        infinite: true,
        dots: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/SliderArrowLeft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/SliderArrowRight.svg"></button>',
        responsive: [
            {
              breakpoint: 1101,
              settings: {
                slidesToShow: 1.6
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1
                }
              },
          ]
    });
  });



  