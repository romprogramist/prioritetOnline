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
               
            
            // {
            //     breakpoint: 1522,    
            //     settings: {
                    
            //         slidesToShow: 3.67                                                      
            //     }
            // },
            // {
            //     breakpoint: 1257,    
            //     settings: {
                    
            //         slidesToShow: 3
            //     }
            // },
            // {
            //     breakpoint: 1067,    
            //     settings: {                    
            //         slidesToShow: 2.33                                                 
            //     }
            // },
            // {
            //     breakpoint: 980,
            //     settings: { 
            //         slidesToShow: 1.65                                        
            //     }
            // },
            // {
            //     breakpoint: 885,    
            //     settings: {  
            //         slidesToShow: 1.67                           
            //     }
            // },
            // {
            //     breakpoint: 715,    
            //     settings: {
            //         slidesToShow: 1.69                                    
            //     }
            // },
        ],       
    });



    // function doCheck() {
    //     const now = new Date();
    //     if (now.getHours() !== 13) { // часы
    //     timeout();
    //     } else {
    //     if (now.getMinutes() !== 59) { // минуты
    //     timeout();
    //     } else {
    //     if (now.getSeconds() !== 57) { // секунды
    //     timeout()
    //     } else {
    //     document.querySelector("#checkout > div.buttonContainer > button").click();
    //     }
    //     }
    //     }
    //     }
    //     function timeout() {
    //     setTimeout(() => {
    //     doCheck();
    //     }, 750)
    //     }
    //     doCheck();
        


    $('.slider1').slick({
        
        infinite: true,
        dots: true,
        slidesToShow: 1.7,
        // centerPadding: '160px',
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



  