modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    DOM.decl('my-block', {

        onSetMod: {

            'js' : {

                'inited' : function() {
                    var text = [
                        'This is a block represented in HTML like <br/>',
                        $('<div/>').text(this.domElem[0].outerHTML).html(),
                        '<br/>',
                        ' and equiped with JavaScript functionality. ',
                        'The text you are reading now was appended dynamically.'
                    ];
                    this.domElem.html(text);
                }
            }

        }

    });

    provide(DOM);

});
