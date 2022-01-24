function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

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

preloadImages(["2018-group.png", '2019-group.jpg', 'banner.jpg', 'chess.jpg', 'class-schedule.jpg', 'english-writing.jpg', 'group-banner.jpg', 'logo.png', 'math.jpg', 'rules.png', 'popup.png', 'bg.png', 'bg2.png'])

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    if (getCookie('mode') != null) {
        darkmode(document.title)
    }

    const options = {
        eventType: 'keydown',
        keystrokeDelay: 1500
    };

    keyMapper([Reveal], options);
});

function keyMapper(callbackList, options) {
    const eventType = options && options.eventType || 'keydown';
    const keystrokeDelay = options && options.keystrokeDelay || 1500;

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
    if (userInput.includes("/dark")) {
        darkmode(document.title)
        setCookie('mode', 'dark', 1)
    }
    else if (userInput.includes("/white")) {
        whitemode(document.title)
        eraseCookie('mode')
    }
}

function darkmode(page) {
    // General
    document.querySelector('#nav').style.backgroundColor = 'black';
    document.querySelector('#nav').style.boxShadow = '0 0 5px -1px rgba(255, 255, 255, 255.305)';
    document.querySelector('#logotext').style.color = 'white';
    document.body.style.background = 'url("images/bg2.png") repeat 0 0';
    document.body.style.backgroundColor = 'black';
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#ab').style.color = 'white';
    document.querySelector('#ec').style.color = 'white';
    // Specific
    if (page === "West Canada Art Centre | Home") {
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
    else if (page === "West Canada Art Centre | About") {

    }
    else if (page === "West Canada Art Centre | Extracurriculars") {

    }
}

function whitemode(page) {
    // General
    document.querySelector('#nav').style.backgroundColor = 'white';
    document.querySelector('#nav').style.boxShadow = '0 0 5px -1px rgba(0, 0, 0, 0.305)';
    document.querySelector('#logotext').style.color = 'black';
    document.body.style.background = 'url("images/bg.png") repeat 0 0';
    document.body.style.backgroundColor = 'white';
    document.querySelector('#home').style.color = 'black';
    document.querySelector('#ab').style.color = 'black';
    document.querySelector('#ec').style.color = 'black';
    // Specific
    if (page === "West Canada Art Centre | Home") {
        document.querySelector("#name").style.color = "black";
        document.querySelector("#descrip").style.color = "black";
        document.querySelector("#explore").style.borderColor = "black";
        document.querySelector("#explore").style.color = "black";
        document.querySelector("#photo1").style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 5px 38px, rgba(0, 0, 0, 0.22) 0px 5px 12px";
        document.querySelector("#photo2").style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 5px 38px, rgba(0, 0, 0, 0.22) 0px 5px 12px";
        document.querySelector("#a").style.color = "black";
        document.querySelector("#b").style.color = "black";
        document.querySelector("#c").style.color = "black";
        document.querySelector("#av").style.borderColor = "black";
        document.querySelector("#bv").style.borderColor = "black";
        document.querySelector("#cv").style.borderColor = "black";
        document.querySelector("#main").style.borderColor = "black";
        document.querySelector("#main").style.backgroundColor = "white";
    }
    else if (page === "West Canada Art Centre | About") {

    }
    else if (page === "West Canada Art Centre | Extracurriculars") {

    }
}