window.onload = function load() {
    document.body.style.opacity = 1;
    setTimeout(function() {
        scroller();
    }, 1000);
}

function scroller() {
    let desc = document.getElementById("desc");
    let msg = "Here are some of my projects:";
    
    for (let i = 1; i <= 29; i++) {
        setTimeout(function() {
            desc.innerHTML = msg.substring(0, i);
        }, i * 60);
    }
}

function grid() {
    window.open("https://github.com/ksong21/CSS-Grid");
}

function hangman() {
    window.open("https://github.com/ksong21/Hangman");
}

function gem() {
    window.open("https://github.com/ksong21/Gem-Blaster");
}

function sql() {
    window.open("https://github.com/ksong21/G1-Financial");
}

function goBack() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/..";
    }, 1300);
}