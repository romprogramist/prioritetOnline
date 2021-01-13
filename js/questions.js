
$(document).ready(function() {
    
    $(".questions__global > .questions__item > .questions__visible").click(function() {
        $(" .questions__invisibly", $(this).parent()).slideToggle("fast"),
        $(".imgArrow", $(this).parent()).toggleClass('imgArrow_active'),
        $(".questions__visible", $(this).parent()).toggleClass('questions__visible_active');
        return false;
    });
    $(".questions__global .questions__invisibly ").hide();   
});



// questions__visible_active

