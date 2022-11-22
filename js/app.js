$(document) .on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})   
// active_end
// mixitup_st
var mixer = mixitup('.gallery-body',{
    animation:{
        effectsOut:'fade translateX(-100%)',
    }
// mixitup_end  



})(jQuery);	