modules.define('button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('Here an object of ' + this.domElem[0].innerHTML + ' comes. Just once.');
            }
        }
    },
    onClick: function() {
        console.log('Here I can track clicks');
    }
},{
    live: function() {
        this.liveBindTo('click', function(e) {
            this.onClick();
        });
    }
}));

});
