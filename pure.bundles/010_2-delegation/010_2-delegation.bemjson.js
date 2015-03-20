({
    block: 'page',
    title: 'Live (lazy) initialization on DOM event',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_010_2-delegation.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    scripts: [
        { elem: 'js', url: '_010_2-delegation.js' }
    ],
    content:[
        {
            block: 'text',
            content: [
                {
                    elem: 'h1',
                    content: 'Dutch jokes'
                },
                {
                    elem: 'p',
                    content: [
                        'Click on the pink button to see one more joke with hidden translations.'
                    ]
                },
                [
                    '<a class="custom-button" href="#" onclick="this.outerHTML=\'',
                        '<p id=\\\'new-story\\\'></p>',
                    '\';',
                    'var phrase = document.createElement(\'span\');',
                    'phrase.setAttribute(\'class\', \'translate i-bem\');',
                    'phrase.innerHTML =\'Twee kippen<i class=\\\'translate__prompt\\\'></i>\';',
                    'var params = { translate: { prompt: \'две курицы\'}};',
                    'phrase.setAttribute(\'data-bem\', JSON.stringify(params));',
                    'var container = document.getElementById(\'new-story\');',
                    'container.appendChild(phrase);',

                    'container.appendChild(document.createTextNode(\' \'));',

                    'var phrase = document.createElement(\'span\');',
                    'phrase.setAttribute(\'class\', \'translate i-bem\');',
                    'phrase.innerHTML =\'rennen voor een haan uit<i class=\\\'translate__prompt\\\'></i>\';',
                    'var params = { translate: { prompt: \'бегут впереди петуха\'}};',
                    'phrase.setAttribute(\'data-bem\', JSON.stringify(params));',
                    'container.appendChild(phrase);',

                    'container.appendChild(document.createTextNode(\'. \'));',

                    'var phrase = document.createElement(\'span\');',
                    'phrase.setAttribute(\'class\', \'translate i-bem\');',
                    'phrase.innerHTML =\'Kakelt de ene kip tegen de andere<i class=\\\'translate__prompt\\\'></i>\';',
                    'var params = { translate: { prompt: \'кудахчет одна курица другой\'}};',
                    'phrase.setAttribute(\'data-bem\', JSON.stringify(params));',
                    'container.appendChild(phrase);',

                    'container.appendChild(document.createTextNode(\': \'));',

                    'var phrase = document.createElement(\'span\');',
                    'phrase.setAttribute(\'class\', \'translate i-bem\');',
                    'phrase.innerHTML =\'“Niet zo vlug<i class=\\\'translate__prompt\\\'></i>\';',
                    'var params = { translate: { prompt: \'не так быстро\'}};',
                    'phrase.setAttribute(\'data-bem\', JSON.stringify(params));',
                    'container.appendChild(phrase);',

                    'container.appendChild(document.createTextNode(\'! \'));',

                    'var phrase = document.createElement(\'span\');',
                    'phrase.setAttribute(\'class\', \'translate i-bem\');',
                    'phrase.innerHTML =\'Hij is niet zo jong meer<i class=\\\'translate__prompt\\\'></i>\';',
                    'var params = { translate: { prompt: \'он уже не так молод\'}};',
                    'phrase.setAttribute(\'data-bem\', JSON.stringify(params));',
                    'container.appendChild(phrase);',

                    'container.appendChild(document.createTextNode(\'! \'));',

                    'return false;">',
                    'Load new joke here',
                    '</a>'
                ],
                {
                    elem: 'h2',
                    mix: {
                        block: 'translate',
                        js: { prompt: 'хорошо доехал' }
                    },
                    content: [
                        'Goed aangekomen',
                        { block: 'translate', elem: 'prompt' }
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'Een man gaat een postkantor binnen',
                            prompt: 'один мужчина заходит на почту;'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'Hij wil een telegram versturen',
                            prompt: 'он хочет отправить телеграмму'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: '“De naam is toch gratis he?”',
                            prompt: 'имя ведь бесплатно, а?'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'vraagt hij',
                            prompt: 'спрашивает он'
                        },
                        '. '
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Inderdaad mijnheer”, antwoordt de loketbediende',
                            prompt: 'в самом деле /это так/, господин, отвечает служащий в окошке'
                        },
                        '. '
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Mooi zo”, zegt hij',
                            prompt: 'вот и прекрасно: «прекрасно так», говорит он'
                        },
                        ', ',
                        {
                            block: 'translate',
                            content: '“dan wil ik enkel mijn naam',
                            prompt: 'тогда я хочу только мое имя'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'op het telegram zetten',
                            prompt: 'в телеграмме поместить'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'Ik heet',
                            prompt: 'меня зовут'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'Ben Gisteravondgoedaangekomen',
                            prompt: 'Бен Вчеравечеромхорошодоехал'
                        },
                        '”.'
                    ]
                },
                {
                    elem: 'h2',
                    mix: {
                        block: 'translate',
                        js: { prompt: 'обратно домой' }
                    },
                    content: [
                        'Weer naar huis',
                        { block: 'translate', elem: 'prompt' }
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'Jan komt te laat de klas binnen',
                            prompt: 'Ян приходит очень поздно в класс'
                        },
                        ', ',
                        {
                            block: 'translate',
                            content: 'de meester zegt',
                            prompt: 'учитель говорит'
                        },
                        ': ',
                        {
                            block: 'translate',
                            content: '“Zeg wat heb jij vandaag voor een smoes',
                            prompt: 'скажи, какая у тебя сегодня отговорка'
                        },
                        '?”'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Nou”, zegt Jan,“het was zo glad buiten',
                            prompt: 'ну, на улице: «снаружи» было так скользко'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'dat als je een stap naar voren deed',
                            prompt: 'что когда ты делал шаг вперед'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'je weer twee stappen naar achteren gleed',
                            prompt: 'ты скользил опять два шага назад'
                        },
                        ',”'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Hoe ben je dan naar school gekomen',
                            prompt: 'как ж еты тогда пришел в школу'
                        },
                        '?”'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'Jan: “Nou, ik ben gewoon naar huis gaan lopen',
                            prompt: 'ну, я просто побежал: «пошел бежать» домой'
                        },
                        '”.'
                    ]
                },
                {
                    elem: 'h2',
                    mix: {
                        block: 'translate',
                        js: { prompt: 'лабрадор' }
                    },
                    content: [
                        'Labrador',
                        { block: 'translate', elem: 'prompt' }
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'Een jager leest',
                            prompt: 'один охотник читает'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'eenadvertentie in de krant',
                            prompt: 'объявление в газете'
                        },
                        ': ',
                        {
                            block: 'translate',
                            content: 'unieke jachthond te koop',
                            prompt: 'продается уникальная охотничья собака'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'Hij besluit',
                            prompt: 'он решает'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'te gaan kijken',
                            prompt: 'поехать посмотреть'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'De verkoper neemt hem mee naar het hok',
                            prompt: 'продавец ведет: «берет» его с собой к будке'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'De jager kijkt en zegt',
                            prompt: 'охотник смотрит и говорит'
                        },
                        ': ',
                        {
                            block: 'translate',
                            content: '“Maar dat is gewoon een labrador',
                            prompt: 'но это просто лабрадор'
                        },
                        '”. '
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Ja”, zegt de verkoper',
                            prompt: 'да, говорит продавец'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: '“maar deze hond is echt uniek',
                            prompt: 'но эта собака по-настоящему уникальна'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'We zullen wel eens even een stukje gaan jagen',
                            prompt: 'мы пойдем, пожалуй, как раз немного поохотимся'
                        },
                        '.”'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'De verkoper haalt zijn geweer',
                            prompt: 'продавец достает свое ружье'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'en de twee lopen met de hond naar het meer toe',
                            prompt: 'и двое идут с собакой к озеру'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'De verkoper knalt',
                            prompt: 'продавец ухлопывает'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'een eend uit de lucht',
                            prompt: 'утку с лету'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'en de eend valt in het water',
                            prompt: 'и утка падает в воду'
                        },
                        '. ',
                        {
                            block: 'translate',
                            content: 'Dehond loopt over het water',
                            prompt: 'собака бежит по воде'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'naar de eend toe',
                            prompt: 'к утке'
                        },
                        ', ',
                        {
                            block: 'translate',
                            content: 'neemt hem in zijn bek',
                            prompt: 'берет ее: «его» в зубы'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'en brengt hem over het water lopend',
                            prompt: 'и несет ее, бежа по воде'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'mee terug naar de twee mannen',
                            prompt: 'назад к двум мужчинам'
                        },
                        '.'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Dat is inderdaad bijzonder',
                            prompt: 'это в самом деле особенно'
                        },
                        ',” ',
                        {
                            block: 'translate',
                            content: 'zegt de jager',
                            prompt: 'говорит охотник'
                        },
                        ', ',
                        {
                            block: 'translate',
                            content: '“wat moet die hond kosten',
                            prompt: 'ну и сколько же стоит: «должна стоить» та собака'
                        },
                        '?”'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Ja”, zegt de verkoper,“hij is natuurlijk niet goedkoop',
                            prompt: 'да, говорит продавец, она конечно не дешевая'
                        },
                        ': ',
                        {
                            block: 'translate',
                            content: '5000 gulden',
                            prompt: '5000 гульденов'
                        },
                        '”.'
                    ]
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: '”Wat',
                            prompt: 'что?'
                        },
                        ',” ',
                        {
                            block: 'translate',
                            content: 'zegt de jager, “5000 gulden voor een hond',
                            prompt: '5000 гульденов за собаку'
                        },
                        ' ',
                        {
                            block: 'translate',
                            content: 'die niet kan zwemmen',
                            prompt: 'которая не умеет плавать'
                        },
                        '?”'
                    ]
                }
            ]
        }
    ]
})
