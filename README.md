# Tutorial on JavaScript in BEM terms

One of the key issues of the BEM stack, the [bem-core
library](https://github.com/bem/bem-core) provides
[i-bem](https://github.com/bem/bem-core/tree/v1/common.blocks/i-bem) block among others.
It is often called a helper block since it's used to build other blocks and
empowers them with BEM features.

The `i-bem` block is implemented usign a variety of technologies, including JavaScript,
which provides the framework for coding in BEM terms.

This tutorial details how to use `i-bem` features for JavaScript in your
components.

## JavaScript-enriched block
### Prerequisites
Block `i-bem` and its `dom` element, with all their dependencies, must be included
into your page js file if you are going to enjoy BEM. This happens
automatically if you borrow the project structure from the
[project-stub repository](https://github.com/bem/project-stub/tree/bem-core).

### HTML structure
Any BEM block can be equiped with JavaScript. To do this, you just need to place
a JavaScript file into your block directory.

```
desktop.blocks/
    my-block/
        my-block.js
```

Then, just mark a block with a `js` flag when declaring it in the BEM tree.

```js
{
    block: 'my-block',
    js: true
}
```

This gives (after running BEMHTML templates on the JSON) a corresponding DOM
node marked with an `i-bem` class and having `onclick` attributes with block
parameters.

```html
<div class="my-block i-bem" onclick="return {"my-block":{}}">
    ...
</div>
```

If you are not using BEMHTML templates, instruct your templates to produce the same
output or write this HTML manually. Then you can use BEM JavaScript with this HTML.

BTW, if you are interested as to why the onclick attribute was chosen to store parameters, check
the article: [JavaScript components low
basics](http://varya.me/en/issues/javascript-component-solutions/).

## The console.log example
The first example is the most simple. It demostrates the block structure and
shows how the JavaScript starts working.<br/>
Load the example page
[001-simple-block](http://varya.me/bem-js-tutorial/desktop.bundles/001-simple-block/001-simple-block.html)
with your console tool open, and you can see the `outerHTML` of the `my-block` on
the page.

The BEMJSON declaration of the example
[001-simple-block.bemjson.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/001-simple-block/001-simple-block.bemjson.js)
describes a simple page with only one `my-block` component.

The `my-block` component is represented on the
[001-simple-block/blocks](https://github.com/toivonen/bem-js-tutorial/tree/master/desktop.bundles/001-simple-block/blocks/my-block)
level with a JavaScript file. The
[my-block.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/001-simple-block/blocks/my-block/my-block.js)
file is filled with a simple piece of code.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('my-block', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log(this.domElem[0].outerHTML);
            }
        }
    }
});

provide(DOM);

});
```

The `i-bem` utilizes a special [module system
ymaps/modules](https://github.com/ymaps/modules), so the first line defines which
modules to use for the component. In this case it is `i-bem__dom`, a
module represented as a `dom` element of `i-bem` block from `bem-core` library.
[Link to its code, if you need
it](https://github.com/bem/bem-core/blob/v1/common.blocks/i-bem/__dom/i-bem__dom.js).

Inside you can use the `DOM` object and its `decl` method to describe a block.

The block name is the first parameter.<br/>
The second is a hash of dynamic
properties of the block. Every instance of the block gets a copy of them.

Aside from custom properties, the hash can also contain some special ones. You can see one
of them, an `onSetMod` property in the example. It is used to store callbacks to
run when a block gets a modifier. The syntax is the following:

```js
DOM.decl('my-block', {
    onSetMod: {
        'foo' : function() {
            // Runs when a block gets any value of `foo` modifier
        },
        'bar' : {
            'qux' : function() {
                // Runs when a block gets 'qux' value of 'bar' modifier
            },
            '' : function() {
                // Runs when `bar` modifier is removed from a block
            }
        }
    }
});
```
The fisrt modifier any block gets is a `js` modifier with its `inited` value.
The framework core reads all the `i-bem` marked blocks on a page and then initializes
them and sets the `js_inited` modifier on each block. Thus, you can
write a code to be run after the block starts functioning by 
defining a callback to the `js_inited` modifier.

In the example presented above, this code is a `console.log` call with the block's `outerHTML`.

## Modifiers
In BEM, modifiers express block states. To put a block into a special state we
set a modifier on it. Then a block runs a callback associated with
this modifier.

### Setting a modifier on a block and reacting to it

In the
[002-change-modifier](http://varya.me/bem-js-tutorial/desktop.bundles/002-change-modifier/002-change-modifier.html)
example you can see a button changing its state after a user clicks on it.

The button is a BEM block named `call-button` and is represented by CSS,
JavaScript and templates placed into [the block
folder](https://github.com/toivonen/bem-js-tutorial/tree/master/desktop.bundles/002-change-modifier/blocks/call-button).

In JavaScript
[blocks/call-button/call-button.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/002-change-modifier/blocks/call-button/call-button.js)
there is a common BEM DOM block declaration.

The callback associated with `js_inited` modifier runs when a block is
initialized by the core. In this example it starts with binding to a `click`
event on the DOM node corresponding to the block. This is done with the `bindTo`
helper.<br/>
In the callback it is said to set a modifier `status` with its `calling` value
to the block and the `setMod` method serves for it.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('call-button', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.setMod('status', 'calling');
                });
            }
        }

...

```

The `setMod` method applies a modifier's CSS class to the blocks which makes the
block change its appearance. If you need additional changes on a block,
place them into a function corresponsing to the modifier. Like the following:

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('call-button', {
    onSetMod: {
        'js' : { ... },
        'status' : {
            'calling' : function() {
                this.elem('link').text('Calling...');
            }
        }
    }
});

provide(DOM);

});
```
Here you can run your calculations, or code any functionality of the block. As
there is access to the block DOM node and its children, the DOM structure can
also be changed.<br/>
With the `elem` helper you can select the elements of the block by their names.

The conception of pre-defined block states expressed with modifiers, is a very
powerful and efficient way to describe an interface compomemnt.<br/>
Everything related to a particular block state is encapsulated in a relevant modifier.
From wherever you change a block modifier, it knows what to do.<br/>
Modifiers are described in a declarative manner, which empowers a programmer to extend
the code with further implementations or to redefine it completely, as is shown
in the tutorial below.

### Setting a modifier on an element

According to BEM, elements can be modified in the same way as blocks. JavaScript methods
are similar in both. The next
example
[003-element-modifier](http://varya.me/bem-js-tutorial/desktop.bundles/003-element-modifier/003-element-modifier.html)
illustrates this.

The `traffic-light` block contains three light elements `stop`, `slow` and `go`
each of which can have a `status` modifier with its `on` and `off` value. As follows:
[traffic-light.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/003-element-modifier/blocks/traffic-light/traffic-light.js).

Similar to the previous example, the `traffic-light` block is introduced to the
`i-bem` core as a DOM-equiped block.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('traffic-light', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                ...
                this.setMod('status', 'stop');
            }
        },
        ...
});

provide(DOM);

});
```

The traffic light works by switching its `status` modifier from the `stop` to the
`slow` and then to the `go` values. In its initializing method it is said to set
a modifier `status_stop` to the block, so that the cycle begins.

The `status` modifier is declared with its callback, once for all its values. This
is a good way to get rid of copy&paste if the corresponsing states work similarly.

```js
modules.define('i-bem__dom', function(provide, DOM) {

var timer;

DOM.decl('traffic-light', {
    onSetMod: {
        'js' : { ... },
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
    ...
});

provide(DOM);

});
```

The arguments passed into the modifier callback are:

 1. Modifier name,
 1. Modifier value to be set,
 1. Previous modifier value.

With these, the actions can be a bit different depending on the modifier value.

Here a corresponding element is given the `status_on` modifier so that its light
turns on and the previously active projector is set `status_off`.

Modifiers are set on elements with the already familiar `setMod` helper with an
optional first parameter which means an element name.<br/>

So, by providing different parameters to the same `setMod` function you can:

```js
// apply a modifier to a current block
this.setMod('modName', 'modValue');

// apply a modifier to an element of a current block
this.setMod(this.elem('elemName'), 'modName', 'modValue');
```

Describing the actions related to element modifiers is similar to block modifier
actions. By analogy to `onSetMod` property you can user `onElemSetMod` with the
following syntax:

```js
DOM.decl('my-block', {
    onElemSetMod: {
        'elemName' : {
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
    }
});
```

In this example, only the `go` element is provided with a special functionality.

```js
modules.define('i-bem__dom', function(provide, DOM) {

var goSound = new Audio('blocks/traffic-light/__go/traffic-light__go.mp3'),
    timer;

DOM.decl('traffic-light', {
    onSetMod: { ... },
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
});

provide(DOM);

});
```

This makes a browser play a traffic light sound when an element is switched into
`status_on` and to keep silent when the modifier goes off.

### Toggling a modifier

It is useful to toggle a modifier if there are 2 values of it to be changed one
by one. This is what the
[004-toggle-mod](http://varya.me/bem-js-tutorial/desktop.bundles/004-toggle-mod/004-toggle-mod.html)
example demonstrates.

It shows a `switch` block, which is a nice button, with its `switched_off`
modifier meaning that the button is inactive at the moment. The
[switch.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/004-toggle-mod/blocks/switch/switch.js)
file of the block instucts the button to react to user clicks and toggle the
modifier from `switched_off` to `switched_on` and backwards by using the
`toggleMod` helper.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('switch', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    this.toggleMod('switched', 'on', 'off');
                });
            }
        }
    }
});

provide(DOM);

});
```

Indeed, the same goes for elements which an additional first parameter for the
helper method.

### Deleting a modifier

Removing a modifier from an element (or a block) explained with
[005-modifier-removing](http://varya.me/bem-js-tutorial/desktop.bundles/005-modifier-removing/005-modifier-removing.html)
example. This is a kind of To-Do list, where each task is a sticky note and can
be hidden (which means to be marked done) with a click.

The list is represented as a `todo` block where every item is name a `task`
block. As all the tasks are visible by default, it is emphasized by a
`visible_yes` modifier.

```html
<ul class="todo ..." onclick="return { 'todo': {} }">
  <li class="todo__task todo__task_visible_yes" title="Click to remove">
    <a class="todo__task-inner">
      <h2>Lean more about BEM</h2>
      Visit bem.info to learn more.
    </a>
  </li>
  ...
```

How the block behaves is described in its [todo.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/005-modifier-removing/blocks/todo/todo.js)
file.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('todo', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo(this.elem('task'), 'click', function(e) {
                    this.delMod(e.domElem, 'visible');
                });
            }
        }
    }
});

provide(DOM);

});
```

Whenever a user clicks on a `task` element the `visible` modifier is removed
from it by `delMod` modifier.<br/>
The `delMod` helper can also be used for blocks as the first parameter (an
element object) is optional.

Notice that the `bindTo` helper works not with a block but with its elements
here.
