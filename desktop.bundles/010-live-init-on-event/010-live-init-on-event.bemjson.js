({
    block: 'page',
    title: 'Live (lazy) initialization on DOM event',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_010-live-init-on-event.css', ie: false },
        { elem: 'css', url: '_010-live-init-on-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
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
                        'This example shows a BEM-component initialized after "click". ',
                        'The text is based on a book preview ',
                        '<a href="http://frankbooks.ru/uploads/attachments/moppen-m-817.pdf">',
                        'Нидерландский шутя',
                        '</a>, ',
                        'which is an adopted version of some Dutch jokes for Russian-speaking ',
                        'learners.'
                    ]
                },
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
                }
            ]
        },
        { elem: 'js', url: '_010-live-init-on-event.js' }
    ]
})
