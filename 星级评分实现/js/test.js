var num = 2;

var $item = $('#rating').find('.rating-item');

var lightOn = function(num) {
    $item.each(function(index) {
        if(index < num){
            $(this).css('background-position', '0 -32px');
        } else {
            $(this).css('background-position', '0 0');
        }
    });
}

lightOn(num);

$item.on('mouseover', function(){
    lightOn($(this).index() + 1);
});
$item.on('click', function(){
    num = $(this).index() + 1;
});

$('#rating').on('mouseout', function() {
    lightOn(num);
});