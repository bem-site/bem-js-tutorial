modules.define('traffic-light', ['i-bem-dom'], function(provide, bemDom) {

var goSound = new Audio('blocks/traffic-light/__go/traffic-light__go.mp3');

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this
                    .bindTo(this._elem('reset'), 'click', function(){
                        this.setMod('status', 'stop');
                    })
                    .setMod('status', 'stop');
            }
        },
        'status' : function(modName, modVal, oldModVal) {
            clearTimeout(this.timer);
            var nextStatus = {
                'stop' : 'slow',
                'slow' : 'go',
                'go' : 'stop'
                },
                _this = this;
            oldModVal && this._elem(oldModVal).setMod('status', 'off');
            this._elem(modVal).setMod('status', 'on');
            this.timer = window.setTimeout(function(){
                _this.setMod('status', nextStatus[modVal]);
            }, 2000);
        }
    },
    onElemSetMod: {
        'go' : {
            'status' : {
                'on' : function() {
                    goSound.play();
                },
                'off' : function() {
                    goSound.pause();
                }
            }
        }
    }
}));

});
