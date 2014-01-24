# Туториал по JavaScript в терминах БЭМ

### Ссылки
 * [Содержание](../00-Intro/00-Intro.ru.md)
 * [Ранее. Модификаторы](../02-Modifiers/02-Modifiers.ru.md)

----------------------------------

## Живая (ленивая) инициализация

Перед началом работы блок инициализируется ядром. В конце этого процесса блок
получает модификатор `js_inited`, о котором вы уже знаете.

В процессе инициализации возникает JavaScript-объект, соответствующий экземпляру
блока. Затем запускается коллбэк модификатора `js_inited` со всеми инициирующими
действиями.

В предыдущих примерах все блоки инициализировались по `domReady`. Хотя на
страницах со множеством блоков нет никакой нужды инициализировать все сразу.
Иногда пользователь загружает страницу только чтобы нажать на ней
одну-единственную кнопку. Так что лучше сэкономить на вычислениях и памяти
браузера, проинициализировав компонент только когда пользователь начал с ним
работать.

Это называется "живая" или "ленивая" инициализация.

### Статический метод `live`

Инструкции по ленивой инициализации блока даются в статическом методе `live`.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('my-block', {
    onSetMod: {
        ...
    },
    ...
},{
    live: function() {
        // Здесь можно сказать, когда инициализировать
        // экземпляр блока
    }
});

provide(DOM);

});
```

В предыдущих примерах вообще не было статических методов. Это рассматривалось
как то, что свойство `live` имеет значение `false`.<br/>
А в данном примере это функция, так что ядро понимает, что блок не нужно сразу
инициализировать, а нужно подождать возникновения специальных условий. Это может
быть, например, DOM-событие на блоке или элементе.

### Инициализация блока по DOM событию

<pre>├── pure.bundles/
│   ├── 010-live-init-on-event/
│   │   ├── blocks/
│   │   │   ├── .bem/
│   │   │   ├── text/
│   │   │   └── translate/
│   │   │       ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/010-live-init-on-event/blocks/translate/translate.bemhtml">translate.bemhtml</a>
│   │   │       ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/010-live-init-on-event/blocks/translate/translate.css">translate.css</a>
│   │   │       └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/010-live-init-on-event/blocks/translate/translate.js">translate.js</a>
│   │   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/010-live-init-on-event/010-live-init-on-event.bemjson.js">010-live-init-on-event.bemjson.js</a>

>> <a href="http://varya.me/bem-js-tutorial/pure.bundles/010-live-init-on-event/010-live-init-on-event.html">010-live-init-on-event.html</a></pre>

На странице
[010-live-init-on-event.html](http://varya.me/bem-js-tutorial/pure.bundles/010-live-init-on-event/010-live-init-on-event.html)
вы можете увидеть историю, написанную на голландском языке. На самом деле текст
разделен на множество маленьких кусочков, по фразам. Каждая фраза завернута в
блок `translate`.

Если пользователь, читающий текст, не понимает его значения, он может увидеть
перевод, кликнув по нужной фразе.

```html
<span
    class="translate i-bem"
    data-bem="{'translate':{'prompt':'один мужчина заходит на почту;'}}">
    Een man gaat een postkantor binnen
    <i class="translate__prompt"></i>
</span>
```

Как видно из HTML-структуры, блок `translate` содержит фразу на голландском
языке, а ее русский перевод хранится как параметр блока в атрибуте `data-bem`.
Также есть элемент `prompt`, которого не видно пока он не понадобится.

Обратите внимание, что у блока нет класса `translate_js_inited`, он не
появляется даже при полной загрузке страницы. Это означает, что и
JavaScript-объект, соответствующий экземпляру блока, пока не создан.<br/>
В файле
[translate.js](https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/010-live-init-on-event/blocks/translate/translate.js)
сказано, что блок нужно инициализироват тогда, когда на его DOM-узле случится
событие `click`.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('translate', {
    ...
},{
    live: function() {
        this.liveInitOnEvent('click');
    }
});

provide(DOM);

});
```

По клику ядро устанавливает для блока модификатор `js_inited` и запускает
"конструктор" — функцию, проассоциированную с этим модификатором.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('translate', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.setMod(this.elem('prompt'), 'visible', true);
            }
        }
    },
    onElemSetMod: {
        'prompt': {
            'visible': function(elem) {
                elem.text(this.params['prompt']);
            }
        }
    }
},{
    ...
});

provide(DOM);

});
```

Вложенному элементу `prompt` назначается модификатор `visible` со значением
`true`, что делает его видимым на страницы. Также это означает, что из
параметров блока берется перевод — свойство `this.patams['prompt']` — и
вставляется внутрь элемента.<br/>
На самом деле, текст перевода можно было и раньше вставить в элемент, ведь он не
был виден пользователю. Но для демонстрации того, как получать параметры из
`data-bem`, выбран этот вариант.

Возвращаясь к живой инициализации, вы можете увидеть, что на странице со
множеством блоков, ядро инициализирует только те, на которых произошло слушаемое
событие. Это экономит память, и страница работает быстрее.

В основе лежит 
[делегация событий](http://davidwalsh.name/event-delegate). То есть, несмотря на
то, что блоков много, есть всего один обработчик события `click` на объекте
`document`.<br/>
Это не только выгодно с точки зрения производительности, но и добавляет гибкости
для программирования динамически изменяемых страниц. В этом вы можете убедиться
на следующем примере.

### Делегированная инициализация
<pre>

>> <a href="http://varya.me/bem-js-tutorial/pure.bundles/010_2-delegation/010_2-delegation.html">010_2-delegation.html</a></pre>

В этом примере используется блок `translate` — тот же самый, что и в предыдущем.
Но кроме этого там есть страшный JavaScript, он срабатывает, если пользователь
нажал на розовую кнопку и жинамически вставляет в страницу несколько новых
блоков `translate`. Если после этого вы кликните на некоторые фразы свежей
шутки, то увидите, что эти блоки работают абсолютно так же, как и те, что
присутствовали на странице с самого начала.

Ядро фреймворка `i-bem` слушает события на объекте `document`. Когда
пользователь кликает по блокам, событие поднимается наверх до `document`, и ядро
инициализирует блок, следуя инструкциям в секции `live`.

### Binding to live events
<pre>├── pure.bundles/
│   ├── 011-live-bind-to/
│   │   ├── blocks/
│   │   │   ├── .bem/
│   │   │   ├── button/
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/011-live-bind-to/blocks/button/button.bemhtml">button.bemhtml</a>
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/011-live-bind-to/blocks/button/button.css">button.css</a>
│   │   │   |   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/011-live-bind-to/blocks/button/button.js">button.js</a>
│   │   │   └── page/
│   │   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/011-live-bind-to/011-live-bind-to.bemjson.js">011-live-bind-to.bemjson.js</a>

>> <a href="http://varya.me/bem-js-tutorial/pure.bundles/011-live-bind-to/011-live-bind-to.html">011-live-bind-to.html</a></pre>

The next [example with 100 BonBon
buttons](http://varya.me/bem-js-tutorial/pure.bundles/011-live-bind-to/011-live-bind-to.html)
shows that live events can be reacted not once when initializing a block but
every time.

This `button` block is again equipped with live initialization instructions since
it would be madness to initialize all the 100 buttons at once and then listen to
the clicks on each of them.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('button', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('Here an object of ' + this.domElem[0].innerHTML + ' comes. Just once.');
            }
        }
    },
    ...
},{
    live: function() {
        this.liveBindTo('click');
    }
});

provide(DOM);

});
```

Similar to the examples with `liveInitOnEvent` this code initializes a block
instance and runs the `js_inited` modifier callback.

Unlike the `liveInitOnEvent` the `liveBindTo` method runs its callback not
just once but every time a user clicks the button.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('button', {
    onSetMod: {
        ...
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
});

provide(DOM);

});
```

### Live initialization on many events
<pre>├── pure.bundles/
│   ├── 012-live-init-many-events/
│   │   ├── blocks/
│   │   │   ├── .bem/
│   │   │   ├── checkbox/
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/012-live-init-many-events/blocks/checkbox/checkbox.bemhtml">checkbox.bemhtml</a>
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/012-live-init-many-events/blocks/checkbox/checkbox.css">checkbox.css</a>
│   │   │   |   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/012-live-init-many-events/blocks/checkbox/checkbox.js">checkbox.js</a>
│   │   │   └── page/
│   │   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/pure.bundles/012-live-init-many-events/012-live-init-many-events.bemjson.js">012-live-init-many-events.bemjson.js</a>

>> <a href="http://varya.me/bem-js-tutorial/pure.bundles/012-live-init-many-events/012-live-init-many-events.html">012-live-init-many-events.html</a></pre>

In the previous examples the core watched only one `click` event to decide if a
block should start working or not. But sometimes reacting just one event is not
enough. This is illustrated with the
[012-live-init-many-events](http://varya.me/bem-js-tutorial/pure.bundles/012-live-init-many-events/012-live-init-many-events.html)
example, where you can see customized checkboxes.

```html
<span
    class="checkbox i-bem"
    data-bem="{'checkbox':{}}">
    <input class="checkbox__control" id="remember1" type="checkbox" value="on">
    <label class="checkbox__label" for="remember1"></label>
</span>
```

It is obvious an instance of this block has to be initialized when a user clicks
its `label` element.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('checkbox', {
    ...
    _onClick : function() {
        this.setMod('focused', true);
    },
    ...
},{
    live: function() {
        this.liveBindTo('label', 'click', function() {
            this._onClick();
        });
    }
});

provide(DOM);

});
```

The same `liveBindTo` method is used here to initialized the block and listen to
its next clicks. Notice that here it is provided with an additional parameter
(the first one) with the name of a block element whose clicks we are interested
in.

But more than that, the control can be changed with a keyboard (or from another
JavaScript piece) and this must also be taken into account.<br/>
You can put in the `live` method as many instructions about how to initialize as
you need. Here it happens after a `click` event on the `label` element and also
after a `change` event on the embedded `control` element, which is native `input`.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('checkbox', {
    ...
    _onClick : function() {
        this.setMod('focused', true);
    },
    _onChange : function(e) {
        this.setMod('checked', e.target.checked);
    }
},{
    live: function() {
        this.liveBindTo('label', 'click', function() {
            this._onClick();
        });

        this.liveBindTo('control', 'change', function(e){
            this._onChange(e);
        });
    }
});

provide(DOM);

});
```

The block should also be inited when focused in or focused out.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('checkbox', {
    ...
},{
    live: function() {
        this.liveBindTo('label', 'click', function() {
            this._onClick();
        });

        this.liveBindTo('control', 'change', function(e){
            this._onChange(e);
        });

        this.liveBindTo('control', 'focusin focusout', function(e){
            this.setMod('focused', e.type == 'focusin'? true : false);
        });
    }
});

provide(DOM);

});
```

As you can see, it is possible to bind to more than one event with the same
callback if list their names separated with a space.

Then, with adding modifiers' functionality to the components, it can be finished.

```js
modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('checkbox', {
    onSetMod: {
        'focused' : {
            'true' : function() {
                this.elem('control').focus();
            },
            '' : function() {
                this.elem('control').blur();
            }
        },
        'checked' : function(modName, modVal) {
            this.elem('control').attr('checked', modVal ? 'checked' : false);
        }
    },
    ...
},{
    live: function() {
        ...
    }
});

provide(DOM);

});
```

This approach makes the control behaviour consistent. No matter how a user or
another piece of JavaScript or a browser start to interact with the component,
it will work fine. Getting the `focused` modifier from something, it would focus
the embedded input control. Having the control focused, it would set `focused`
modifier to itself providing the proper view. When changed either manually or
automatically the block would get `checked` modifier and a `checked` attribute
for the control or loose them.

#### Why not :checked?
As you might notice, in this example an internal 'control' element (the input)
is indicated to be checked with the `checked` modifier on its parent block.

```html
<span
    class="checkbox i-bem checkbox_js_inited checkbox_checked"
    data-bem="{'checkbox':{}}">
    <input
        class="checkbox__control"
        id="remember2"
        type="checkbox"
        value="on"
        checked="checked">
   <label class="checkbox__label" for="remember2"></label>
</span>
```

```css
.checkbox_checked .checkbox__label {
    left: 54px;
}

.checkbox_checked .checkbox__label:after {
    background: #00bf00;
}
```

Indeed, it would be possible to use `:checked` pseudo selector as it was done in
the [control prototype](http://codepen.io/bbodine1/pen/novBm).

```css
.checkbox input[type=checkbox]:checked + label {
  left: 54px;
}

.checkbox input[type=checkbox]:checked + label:after {
  background: #00bf00;
}
```

However the modifier approach supplies more flexibility making the whole block
be able to change if checked

```css
.checkbox_checked
{
    background-image: -webkit-linear-gradient(0deg, #333, #333 4px, #555 4px, #555 6px);
    background-image: linear-gradient(0deg, #333, #333 4px, #555 4px, #555 6px);
    background-size: 6px 6px;
}
```

as well as saves time for parsing selectors and bringing architectural
consistency to the code.

### BEM events

Besides DOM events, `i-bem.js` operates with custom JavaScript events on the
JavaScript objects corresponding to the blocks. These events are named `BEM
events` and usually serve to normalize a component API.

The [`link`
block](https://github.com/bem/bem-components/tree/a37156b9646b97472776b8ce035ca1736dc7257c/common.blocks/link)
of `bem-components` block library can provide an example of firing a custom BEM
event. Its JavaScript functionality is to trigger the `click` event on the
corresponding JavaScript object whenever a user clicks the left button if the
current link is not disabled. An event is triggered with the help of `emit` method
of the block.

```js
  _onClick : function(e) {
      e.preventDefault();
      this.hasMod('disabled') || this.emit('click');
  }
```

Thus, the `link` block has an API which can be used by other blocks on a page.

Another example is the [`menu` block](https://github.com/varya/bem-js-tutorial/tree/master/desktop.blocks/menu)
of this tutorial. It is represets a list of menu items in HTML, one of those can be
selected at the moment.

```html
<div class="menu i-bem" data-bem="{&quot;menu&quot;:{}}">
  <ul class="menu__layout">
    <li class="menu__layout-unit menu__layout-unit_position_first">
      <div class="menu__item menu__item_state_current">
        Item 1
      </div>
    </li>
    <li class="menu__layout-unit">
      <div class="menu__item menu__item_state_current">
        Item 2
      </div>
    </li>
    <li class="menu__layout-unit">
      <div class="menu__item menu__item_state_current">
        Item 3
      </div>
    </li>
  </ul>
</div>
```

The menu listens to the DOM clicks on its `item-selector` elements and emits the
`current` event which signals about changing the current item and provides the
data.

```js
this
    .delMod(prev, 'state')
    .emit('current', {
        prev    : prev,
        current : elem
    });
```

This event fires on the JavaScript object corresponding to the menu block instance.
With that, any other block subscribed to the `current` BEM event of the menu can
learn when it changes its current item and react on it.

### Live initialization on BEM a event of an inner block

<pre>├── components.bundles/
│   ├── 014-live-init-bem-event/
│   │   ├── blocks/
│   │   │   ├── .bem/
│   │   │   ├── map-marks/
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map-marks/map-marks.bemhtml">map-marks.bemhtml</a>
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map-marks/map-marks.css">map-marks.css</a>
│   │   │   |   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map-marks/map-marks.js">map-marks.js</a>
│   │   │   ├── map/
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map/map.bemhtml">map.bemhtml</a>
│   │   │   |   ├── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map/map.deps.js">map.deps.js</a>
│   │   │   |   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map/map.js">map.js</a>
│   │   │   ├── menu/
│   │   │   |   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/menu/menu.css">menu.css</a>
│   │   │   └── page/
│   │   └── <a href="https://github.com/toivonen/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/014-live-init-bem-event.bemjson.js">014-live-init-bem-event.bemjson.js</a>

>> <a href="http://varya.me/bem-js-tutorial/components.bundles/014-live-init-bem-event/014-live-init-bem-event.html">014-live-init-bem-event.html</a></pre>

The example shows [`map-marks`
block](https://github.com/varya/bem-js-tutorial/tree/master/components.bundles/014-live-init-bem-event/blocks/map-marks)
which binds a menu and a map so that a user can select the menu item and see a
related mark in the map.

The `map-marks` block contains the blocks `menu` and `map`. This can be seen
from [bemjson description of the
page](https://github.com/varya/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/014-live-init-bem-event.bemjson.js)
or inside the page html
[014-live-init-bem-event.html](http://varya.me/bem-js-tutorial/components.bundles/014-live-init-bem-event/014-live-init-bem-event.html).

This block is only needed when a user has been started to interact with the
menu. So the block uses live initialization and it is declared to initialize the
block only when the `current` BEM event fires on the included `menu` block.

The JavaScript implementation of the block [map-marks.js](https://github.com/varya/bem-js-tutorial/blob/master/components.bundles/014-live-init-bem-event/blocks/map-marks/map-marks.js)
uses live initialization depending on the inner block.

```js
modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {
    ...
}, {
    live: function() {
        this.liveInitOnBlockInsideEvent('current', 'menu', function(e, data){
            this._showMap(e, data.current);
        });
    }
});

provide(DOM);

});
```

The `liveInitOnBlockInsideEvent` methods requests the names of an event and the
included block s well as a callback.

Once a user clicks a menu item, it becomes current and the menu block emits
`current` event. Being catched, it initializes the `map-marks` block, which means
it gets `js_inited` modifier ans the related method runs:

```js
modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {

  onSetMod: {
      'js' : {
          'inited' : function () {
              this._menu = this.findBlockInside('menu');
              this._map = this.findBlockInside('map');
          }
      }
  },

  ...

}, {
    live: function() {
        ...
    }
});

provide(DOM);

});
```

Then the callback runs the `_showMap` method of the block instance. This shows a
mark on a map using the `map` block.

```js
modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('map-marks', {

    ...

    _showMap: function(e, elem) {
        var params = this._menu.elemParams(elem);
        this._map.showAddress(params['address']);
    }

    ...

}, {
    live: function() {
        ...
    }
});

provide(DOM);

});
```

---------------------------------------
### Links
 * [Содержание](../00-Intro/00-Intro.ru.md)
 * [Ранее. Модификаторы](../02-Modifiers/02-Modifiers.ru.md)
