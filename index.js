function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = 'images/'+array[i];
    }
}

preloadImages(["2018-group.png", '2019-group.jpg', 'banner.jpg', 'chess.jpg', 'class-schedule.jpg', 'english-writing.jpg', 'group-banner.jpg', 'logo.png', 'math.jpg', 'rules.png'])

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const options = {
        eventType: 'keydown',
        keystrokeDelay: 2000
    };

    keyMapper([Reveal], options);
});

function keyMapper(callbackList, options) {
    const eventType = options && options.eventType || 'keydown';
    const keystrokeDelay = options && options.keystrokeDelay || 1000;

    let state = {
        buffer: [],
        lastKeyTime: Date.now()
    };

    document.addEventListener(eventType, event => {
        const key = event.key;
        const currentTime = Date.now();
        let buffer = [];

        if (currentTime - state.lastKeyTime > keystrokeDelay) {
            buffer = [key];
        } else {
            buffer = [...state.buffer, key];
        }

        state = {buffer: buffer, lastKeyTime: currentTime};

        callbackList.forEach(callback => callback(buffer));
    });
}

function Reveal(keySequence) {
    const userInput = keySequence.join('').toLowerCase();
    if (userInput.includes("arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightdm")) {
        darkmode()
    }
}

function darkmode() {
    document.getElementById('nav').style.backgroundColor = 'black';
    document.getElementById('nav').style.boxShadow = '0 0 5px -1px rgba(255, 255, 255, 255.305)';
    document.querySelector('#logotext').style.color = 'white';
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#ab').style.color = 'white';
    document.querySelector('#ec').style.color = 'white';
    document.body.style.background = 'url("images/bg2.png") repeat 0 0';
    document.body.style.backgroundColor = 'black';
    document.querySelector("#name").style.color = "white";
    document.querySelector("#descrip").style.color = "white";
    document.querySelector("#explore").style.borderColor = "white";
    document.querySelector("#explore").style.color = "white";
    document.querySelector("#photo1").style.boxShadow = "rgba(255, 255, 255, 0.3) 0px 5px 38px, rgba(255, 255, 255, 0.22) 0px 5px 12px";
    document.querySelector("#photo2").style.boxShadow = "rgba(255, 255, 255, 0.3) 0px 5px 38px, rgba(255, 255, 255, 0.22) 0px 5px 12px";
    document.querySelector("#a").style.color = "white";
    document.querySelector("#b").style.color = "white";
    document.querySelector("#c").style.color = "white";
    document.querySelector("#av").style.borderColor = "white";
    document.querySelector("#bv").style.borderColor = "white";
    document.querySelector("#cv").style.borderColor = "white";
    document.querySelector("#main").style.borderColor = "white";
    document.querySelector("#main").style.backgroundColor = "black";
}