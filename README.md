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

```
{
    block: 'my-block',
    js: true
}
```

This gives (after running BEMHTML templates on the JSON) a corresponding DOM
node marked with an `i-bem` class and having `onclick` attributes with block
parameters.

```
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
The fisrt modifier any block gets is a `js` modifier with its `inited` value.
The framework core reads all the `i-bem` marked blocks on a page and then initializes
them and sets the `js_inited` modifier on each block. Thus, you can
write a code to be run after the block starts functioning by 
defining a callback to the `js_inited` modifier.

In the example presented above, this code is a `console.log` call with the block's `outerHTML`.

## Modifiers
In BEM, modifiers express block states. To put a block into a special state we
set a modifier on it. Then, a block runs a callback associated with
this modifier.

### Setting a modifier on a block and reacting on that

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
