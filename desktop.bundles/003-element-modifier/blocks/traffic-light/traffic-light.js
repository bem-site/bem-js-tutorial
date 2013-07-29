modules.define('i-bem__dom', function(provide, DOM) {

var goSound = new Audio('blocks/traffic-light/__go/traffic-light__go.mp3'),
    timer;

DOM.decl('traffic-light', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo(this.elem('reset'), 'click', function(){
                    this.setMod('status', 'stop');
                });
                this.setMod('status', 'stop');
            }
        },
        'status' : function(modName, modVal, oldModVal) {
            clearTimeout(timer);
            var nextStatus = {
                'stop' : 'slow',
                'slow' : 'go',
                'go' : 'stop'
                },
                _this = this;
            oldModVal && this.setMod(this.elem(oldModVal), 'status', 'off');
            this.setMod(this.elem(modVal), 'status', 'on');
            timer = window.setTimeout(function(){
                _this.setMod('status', nextStatus[modVal]);
            }, 2000);
        }
    },
    onElemSetMod: {
        'go' : {
            'status' : {
                'on' : function() {
                    //goSound.play();
                },
                'off' : function() {
                    goSound.pause();
                }
            }
        }
    }
});

provide(DOM);

});
