# Modifiers

In BEM, modifiers express block states. To put a block into a special state we set a
modifier on it. Then a block runs a callback associated with this modifier.

## Setting a modifier on a block and reacting to it

```files
pure.bundles/
    002-change-modifier/
        blocks/
            call-button/
                call-button.bemhtml.js
                call-button.css
                call-button.js
                call-button.png
        002-change-modifier.bemjson.js
        002-change-modifier.html
```

In the [002-change-modifier](https://bem-site.github.io/bem-js-tutorial/pure.bundles/002-change-modifier/002-change-modifier.html)
([BEMJSON](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/002-change-modifier/002-change-modifier.bemjson.js))
example you can see a button changing its state after a user clicks on it.

The button is a block named `call-button` and is represented by
[CSS](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/002-change-modifier/blocks/call-button/call-button.css),
[JavaScript](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/002-change-modifier/blocks/call-button/call-button.js)
and [templates](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/002-change-modifier/blocks/call-button/call-button.bemhtml)
placed into [the block folder](https://github.com/bem/bem-js-tutorial/tree/master/pure.bundles/002-change-modifier/blocks/call-button).

In JavaScript
[blocks/call-button/call-button.js](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/002-change-modifier/blocks/call-button/call-button.js)
there is a common BEM DOM block declaration.

The callback associated with the `js_inited` modifier runs when a block is
initialized by the core. In this example it starts with binding to a `click`
event on the DOM node corresponding to the block. This is done with `_domEvents()`.

The callback sets a `calling` modifier to the block with the `setMod` method.

```js
modules.define('call-button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._domEvents().on('click', function() {
                    this.setMod('calling');
                });
            }
        }

...

```

Take into account that here we use a boolean modifier, which has no value. But
as you will see below, modifiers are very often used as key-value pairs. In that
case, both modifier name and its value have to be passed to the `setMod`
helper:

```js
this.setMod('status', 'on');
...
this.setMod('status', 'off');
```

The `setMod` method applies a modifier CSS class to the blocks which makes the
block change its appearance. If you need additional changes on a block,
place them into a function corresponding to the modifier. Like the following:

```js
modules.define('call-button', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : { ... },
        'calling' : function() {
            this._elem('link').domElem.text('Calling...');
        }
    }
}));

});
```

Here you can run your calculations, or code any functionality of the block. As
there is access to the block DOM node and its children, the DOM structure can
also be changed. With the `_elem` helper you can get the block element instance
by its name and then use its DOM node.

The concept of pre-defined block states expressed with modifiers is a very
powerful and efficient way to describe an interface component.

Everything related to a particular block state is encapsulated in a relevant
modifier. From wherever you change a block modifier, it knows what to do.

Modifiers are described in a declarative manner, which empowers a programmer to
extend the code with further implementations or to redefine it completely, as is
shown in the tutorial below.

## Setting a modifier on an element

```files
pure.bundles/
    003-element-modifier/
        blocks
            page/
            sign/
            text/
            traffic-light/
                __go/
                    traffic-light__go.mp3
                traffic-light.bemhtml.js
                traffic-light.css
                traffic-light.js
        003-element-modifier.bemjson.js
        003-element-modifier.html
```

According to BEM, elements can be modified in the same way as blocks. JavaScript
methods are similar in both. The
[003-element-modifier](https://bem-site.github.io/bem-js-tutorial/pure.bundles/003-element-modifier/003-element-modifier.html)
example illustrates this.

Similar to the previous example, the `traffic-light` has
[CSS](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/003-element-modifier/blocks/traffic-light/traffic-light.css),
[JavaScript](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/003-element-modifier/blocks/traffic-light/traffic-light.js)
and [BEMHTML](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/003-element-modifier/blocks/traffic-light/traffic-light.bemhtml) implementations and is introduced to the `i-bem` core as a
DOM-equipped block.

It contains three light elements `stop`, `slow` and `go` each of which can have a
`status` modifier with its `on` and `off` value.

```js
modules.define('traffic-light', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                ...
                this.setMod('status', 'stop');
            }
        },
        ...
}));

});
```

The traffic light works by switching its `status` modifier from the `stop` to the
`slow` and then to the `go` values. In its initializing method it is said to set
a modifier `status_stop` to the block, so that the cycle begins.

The `status` modifier is declared with its callback, once for all its values. This
is a good way to get rid of copy&paste if the corresponding states work similarly.

```js
modules.define('traffic-light', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock('traffic-light', {
    onSetMod: {
        'js' : { ... },

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

            this.timer = window.setTimeout(function() {
                _this.setMod('status', nextStatus[modVal]);
            }, 2000);
        }
    },
    ...
}));

});
```

The arguments passed into the modifier callback are:

 1. Modifier name,
 1. Modifier value to be set,
 1. Previous modifier value.

With these, the actions can be a bit different depending on the modifier value.

Here a corresponding element is given the `status_on` modifier so that its light
turns on and the previously active projector is set `status_off`.

Modifiers are set on elements with the already familiar `setMod` helper called
on an element instance found through `_elem`.

So, by providing different parameters to the same `setMod` function you can:

```js
// apply a modifier to a current block
this.setMod('modName', 'modValue');

// apply a modifier to an element of a current block
this._elem('elemName').setMod('modName', 'modValue');
```

Describing the actions related to element modifiers is similar to block modifier
actions. Declare the element with `bemDom.declElem` and use the `onSetMod`
property:

```js
bemDom.declElem('my-block', 'elemName', {
    onSetMod: {
      'foo' : function() {
          // Runs when an element gets any value of `foo` modifier
      },
      'bar' : {
          'qux' : function() {
              // Runs when an element gets 'qux' value of 'bar' modifier
          },
          '' : function() {
              // Runs when `bar` modifier is removed from an element
          }
        }
    }
});
```

In this example, only the `go` element is provided with a special functionality.

```js
modules.define('traffic-light', ['i-bem-dom'], function(provide, bemDom) {

var goSound = new Audio('blocks/traffic-light/__go/traffic-light__go.mp3');

bemDom.declElem('traffic-light', 'go', {
    onSetMod: {
        'status' : {
            'on' : function() {
                goSound.play();
            },

            'off' : function() {
                goSound.pause();
            }
        }
    }
});

provide(bemDom.declBlock(this.name, {
    onSetMod: { ... }
}));

});
```

This makes a browser play a traffic light sound when an element is switched into
`status_on` and to keep silent when the modifier goes off.

## Toggling a modifier

```files
pure.bundles/
    004-toggle-mod/
        blocks/
            page/
            switch/
                switch.bemhtml.js
                switch.css
                switch.js
        004-toggle-mod.bemjson.js
        004-toggle-mod.html
```

It is useful to toggle a modifier if there are 2 values of it to be changed one
by one. This is what the
[004-toggle-mod](https://bem-site.github.io/bem-js-tutorial/pure.bundles/004-toggle-mod/004-toggle-mod.html)
([BEMJSON](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/004-toggle-mod/004-toggle-mod.bemjson.js))
example demonstrates.

It shows a `switch` block, which is a nice button, with its `switched_off`
modifier meaning that the button is inactive at the moment.

The
[switch.js](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/004-toggle-mod/blocks/switch/switch.js)
file of the block instructs the button to react to user clicks and toggle the
modifier from `switched_off` to `switched_on` and backwards by using the
`toggleMod` helper.

```js
modules.define('switch', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._domEvents().on('click', function() {
                    this.toggleMod('switched', 'on', 'off');
                });
            }
        }
    }
}));

});
```

Indeed, the same goes for elements when `toggleMod` is called on an element
instance.

## Deleting a modifier

```files
pure.bundles/
    005-modifier-removing/
        blocks/
            page/
            todo/
                todo.bemhtml.js
                todo.css
                todo.js
        005-modifier-removing.bemjson.js
        005-modifier-removing.html
```

Removing a modifier from an element (or a block) explained with
[005-modifier-removing](https://bem-site.github.io/bem-js-tutorial/pure.bundles/005-modifier-removing/005-modifier-removing.html)
([BEMJSON](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/005-modifier-removing/005-modifier-removing.bemjson.js))
example. This is a kind of To-Do list, where each task is a sticky note and can
be hidden (which means to be marked done) with a click.

The list is represented as a `todo` block where every item is name a `task`
block. As all the tasks are visible by default, it is emphasized by a
`visible_yes` modifier.

```html
<ul class="todo ..." data-bem="{ 'todo': {} }">
  <li class="todo__task todo__task_visible_yes" title="Click to remove">
    <a class="todo__task-inner">
      <h2>Lean more about BEM</h2>

      Visit bem.info to learn more.
    </a>
  </li>
  ...
```

How the block behaves is described in its
[todo.js](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/005-modifier-removing/blocks/todo/todo.js)
file.

```js
modules.define('todo', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Task = bemDom.declElem('todo', 'task');

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._domEvents('task').on('click', function(e) {
                    $(e.currentTarget).bem(Task).delMod('visible');
                });
            }
        }
    }
}));

});
```

Whenever a user clicks on a `task` element the `visible` modifier is removed
from it by `delMod` modifier.

Notice that `_domEvents('task')` subscribes the block to DOM events from its
`task` elements.

**NOTE:** This handler is attached when a block instance is initialized. For large
lists and dynamically added elements, use lazy initialization through `lazyInit`
and `onInit`, which is explained later.

## Before a modifier is set

```files
pure.bundles/
    006-before-set-mod/
        blocks/
            page/
            accordion-menu/
                accordion-menu.bemhtml.js
                accordion-menu.css
                accordion-menu.js
        006-before-set-mod.bemjson.js
        006-before-set-mod.html
```

Besides the possibility to react on a modifier setting, you can do something
before that happens. It is widely adopted for the cases when you need to prevent
setting a modifier.

The
[006-before-set-mod](https://bem-site.github.io/bem-js-tutorial/pure.bundles/006-before-set-mod/006-before-set-mod.html)
([BEMJSON](https://github.com/bem/bem-js-tutorial/blob/master/pure.bundles/006-before-set-mod/006-before-set-mod.bemjson.js))
example illustrates such a case with an
[accordion-menu](https://github.com/bem/bem-js-tutorial/tree/master/pure.bundles/006-before-set-mod/blocks/accordion-menu)
block.

You can see a menu with a few items on a page. Each of them can reveal
its subitems when being clicked. To do that you need bind to a `click` event on
the menu items, set `current` modifier into `true` for the related item and
ensure that previously selected item is closed (which means its `current`
modifier is set into `false`).

```js
modules.define('accordion-menu',
        ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Item = bemDom.declElem('accordion-menu', 'item', {
    onSetMod: {
        'current' : {
            'true' : function() {
                this._block().setCurrentItem(this);
            }
        }
    }
});

provide(bemDom.declBlock(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this._elem({ elem : Item, modName : 'current', modVal : true });

                this._domEvents('item').on('click', function(e) {
                    $(e.currentTarget).bem(Item).setMod('current', true);
                });
            }
        }
    },

    setCurrentItem: function(item) {
        this._current && this._current !== item && this._current.delMod('current');
        this._current = item;
    }

}));

});
```

**NOTE:** You may also take notice that jQuery is used here to wrap the elements and
this provides some changes into the code. The bem-core library is based on a
[ymaps/modules](https://github.com/ymaps/modules/blob/master/README.md)
module system. With it each module should be declared before using.

The example becomes more interesting when a disabled item appears. Such an item
has to prevent its being in the `current` state. That is always possible to put
an additional condition in the modifier callback but the core provides a more
elegant solution. In an element declaration, use `beforeSetMod` to instruct the
element what to do before setting a modifier. It also prevents setting a modifier
when a callback related to the 'before' part returns `false`.

```js
modules.define('accordion-menu',
        ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Item = bemDom.declElem('accordion-menu', 'item', {
    beforeSetMod: {
        'current' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },
    ...
});

});
```

Here it checks if the clicked item is disabled and prevents such an item to be
`current`.
