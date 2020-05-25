var addClass = function (element, className) {
    var classNames = element.className.split(/\s+/);
    if (classNames.indexOf(className) == -1) {
        classNames.push(className);
    }
    element.className = classNames.join(' ')
}

var arr = [ 
    {
        type: 'text',
        text: '惶恐,',
    },  {
        type: 'text',
        text: '抑郁,',
    }, {
        type: 'text',
        text: '不安,',
    },  {
        type: 'text',
        text: '突然失去了整个世界。'
    },  '<br>',  {
        type: 'text',
        text: '想和你说好多话，'
    }, {
        type: 'text',
        text: '打了很多字，'
    },  '<br>',  {
        type: 'text',
        text: '最后还是删掉了，'
    }, {
        type: 'text',
        text: '终究 '
    },  '<br>',  {
        type: 'text',
        text: '放弃吗？'
    },  {
        type: 'text',
        text: '真的很喜欢你啊。'
    },  '<br>',  {
        type: 'text',
        text: '哈哈，这么多字，可能你根本不会看吧。'
    },  '<br>',  {
        type: 'text',
        text: '或许，'
    },  {
        type: 'text',
        text: '你从未知道过这个页面。'
    },  '<br>',  {
        type: 'text',
        text: '又或许'
    },  {
        type: 'text',
        text: '你就从未喜欢过我吧，'
    },  {
        type: 'text',
        text: '嗯？'
    },  {
        type: 'delete',
        num: 2
    }, {
        type: 'text',
        text: '嗯！'
    }, '<br>', {
        type: 'text',
        text: '又或许，'
    },  {
        type: 'text',
        text: '根本从未记得过这么一个人吧。'
    }, {
        type: 'wait',
        time: 3000
    },
    {type: 'delete',num: 3,time: 200},
    {type: 'delete',num: 9,time: 150},
    {type: 'delete',num: 9,time: 100},
    {type: 'delete',num: 9,time: 50},
    {type: 'delete',num: 98,time: 25},
]

var autoType = new AutoType("#content", arr);
autoType.once("end", function () {
    addClass(content, 'end'), 
    document.querySelector('#clock-box').classList.add('clock-show')
})

setInterval(timeElapse, 1000);