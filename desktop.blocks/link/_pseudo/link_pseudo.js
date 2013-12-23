modules.define(
    'i-bem__dom',
    ['jquery', 'dom', 'events'],
    function(provide, $, dom, events, BEMDOM) {
/**
 * Pseudo link
 * Links which does something without going to another page
 */
BEMDOM.decl({'block': 'link', 'modName': 'pseudo', 'modVal': 'yes'}, {

    /**
     * @private
     */
    _onClick: function(e) {

        console.log('clicks');

        e.preventDefault();

        this.hasMod('disabled', 'yes') || this.afterCurrentEvent(function() {
            this.emit('click');
        });

    },

    /**
     * @private
     */
    _onKeyUp: function(e) {

        if(e.shiftKey || e.ctrlKey || e.altKey) {
            return;
        }

        if(e.which === 13 || e.which === 32) { /* ENTER || SPACE */
            this.hasMod('disabled', 'yes') || this.afterCurrentEvent(function() {
                this.trigger('click');
            });
        }

    }

}, {

    live: function() {

        this.__base.apply(this, arguments);

        this.liveBindTo('pointerclick', function() {
            console.log(222);
        });

        this.liveBindTo({modName: 'pseudo', modVal: 'yes'}, 'pointerclick', function(e) {
            this._onClick(e);
        }).liveBindTo({modName: 'pseudo', modVal: 'yes'}, 'keyup', function(e) {
            this._onKeyUp(e);
        });

    }

});

provide(BEMDOM);

});
