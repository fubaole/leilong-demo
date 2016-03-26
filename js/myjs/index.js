/**
 * Created by Administrator on 2016/2/5.
 */
$(function(){
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    (function(){
        $('.show_sm').click(function(){
            var pzhi = parseInt($(this).css('backgroundPositionX'));
            if(pzhi == 0){
                $(this).css('backgroundPositionX','-30px');
            }else {
                $(this).css('backgroundPositionX','0px');
            }
            var Rzhi = parseInt($('.floatR').css('right'));

            if(Rzhi==0){
                $('.floatR').stop().animate({'right':'-130px'});
            }else {
                $('.floatR').stop().animate({'right':'0px'});
            }
        });
    })();

})
