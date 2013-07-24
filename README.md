# Tutorial on JavaScript in BEM terms

One of the key issues of BEM stack, the [bem-core
library](https://github.com/bem/bem-core) provides
`[i-bem](https://github.com/bem/bem-core/tree/v1/common.blocks/i-bem)` block among others.
It is often called a helper block since its used to build other blocks and
empower them with BEM features.

Being implemented with different technologies, `i-bem` block has its JavaScript
part, which forms a framework for coding JavaScript in BEM terms.

This tutorial illustrates how to use `i-bem` features for JavaScript in your
components.

## JavaScript-fortifed (enriched?) block
### Prerequisites
Block `i-bem` and its `dom` element with all their dependencies must be included
into your page JavaScript if you are going to enjoy BEM. That happens
automatically if you borrow he project structure from the
[project-stub repository](https://github.com/bem/project-stub/tree/bem-core).

### HTML structure
Any BEM block can be equiped with JavaScript. To do this, you need just to place
a JavaScript file into your block directory.

```
desktop.blocks/
    my-block/
        my-block.js
```

Then, just mark a block with `js` flag when declaring it in BEM tree

```
{
    block: 'my-block',
    js: true
}
```

This gives (after running BEMHTML templates on the JSON) a corresponding DOM
node marked with `i-bem` class and having `onclick` attributes with block
parameters.

```
<div class="my-block i-bem" onclick="return {"my-block":{}}">
    ...
</div>
```

If you are not using BEMHTML templates, teach your templates to produce the same
output or write this HTML manually, and you can use BEM JavaScript as well.

BTW, if interested why the onclick attribute was chosen to store params, check
an article about [JavaScript components low
basics](http://varya.me/en/issues/javascript-component-solutions/).

## The console.log example
The first example is the simpliest. It just illustrates the block structure and
shows how the JavaScript starts working.<br/>
Load the example page
[001-simple-block](http://varya.me/bem-js-tutorial/desktop.bundles/001-simple-block/001-simple-block.html)
with your console tool open, and you can see the outerHTML of the `my-block` on
a page.

The BEMJSON declaration of the example
[001-simple-block.bemjson.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/001-simple-block/001-simple-block.bemjson.js)
describes a simple page with the only one `my-block` component on it.

The `my-block` component is represented on a
[001-simple-block/blocks](https://github.com/toivonen/bem-js-tutorial/tree/master/desktop.bundles/001-simple-block/blocks/my-block)
level with a JavaScript file. This
[my-block.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/001-simple-block/blocks/my-block/my-block.js)
file filled with a simple piece of code.

```
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

`i-bem` utilize a special [module system
ymaps/modules](https://github.com/ymaps/modules), so the first line defines what
are the modules to use for the component. In this case it is `i-bem__dom`, a
module represented as a `dom` element of `i-bem` block from `bem-core` library.
[Link to its code, if you need
it](https://github.com/bem/bem-core/blob/v1/common.blocks/i-bem/__dom/i-bem__dom.js).

Inside you can use `DOM` object and its `decl` method to describe a block.

Block name goes as the first parameter. The second is a hash of dynamic
properties of the block. Every instance of the block gets a copy of them.

Aside from custom properties, the hash can contain some special. You can see one
of them, an `onSetMod` property in the example. It is used to store callbacks to
run when a block gets a modifier. The syntax is the following:

```
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
The fisrt modifier any block gets is `js` modifier in its `inited` value. It
happens after the framework core reads all the `i-bem` marked blocks on a page
and creates JavaScript objects for the block components, which we call
`initialize` them. Thus, defining a callback for `js_inited` block state you can
write a code to be run after the block starts functioning.

Here it is just a `console.log` call with the block's `outerHTML`.

## Modifiers
In BEM modifiers express block state. To put a block into a special state we
set a modifier on it. Then, a block runs a callback associated with
this modifier.

### Setting a modifier on a block and react on that
In the
[002-change-modifier](http://varya.me/bem-js-tutorial/desktop.bundles/002-change-modifier/002-change-modifier.html)
example you can see a button changing its state after a user clicks on it.

The button is a BEM block named `call-button` and represented with CSS,
JavaScript and templates placed into [the block
folder](https://github.com/toivonen/bem-js-tutorial/tree/master/desktop.bundles/002-change-modifier/blocks/call-button).

In JavaScript
[blocks/call-button/call-button.js](https://github.com/toivonen/bem-js-tutorial/blob/master/desktop.bundles/002-change-modifier/blocks/call-button/call-button.js)
there is a common BEM DOM block declaration.

The callback associated with `js_inited` modifier runs when a block is
initialized by the core. Here it...

```
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
