modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

$('.experiment').click(function(){

    $('.button').each(function(i, bt){

        var $bt = $(bt).bem('button');
        $bt.setMod('focused');

        $bt.hasMod('focused')?
            console.log('The button "' + $bt.elem('text').text() + '" was successfully focused') :
            console.log('Cannot focus "' + $bt.elem('text').text() + '" button');

    });

});

provide(DOM);

});
