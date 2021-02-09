window.onload = function load() {
    document.body.style.opacity = 1;
    setTimeout(function() {
        scroller();
    }, 1000);
}

function scroller() {
    let desc = document.getElementById("desc");
    let msg = "These are the key courses I've taken so far:";
    
    for (let i = 1; i <= 44; i++) {
        setTimeout(function() {
            desc.innerHTML = msg.substring(0, i);
        }, i * 60);
    }
}

function java() {
    window.open("https://www.bcit.ca/outlines/20203046383");
}

function c() {
    window.open("https://www.bcit.ca/outlines/20203034760");
}

function webDev2() {
    window.open("https://www.bcit.ca/study/outlines/20201087580");
}

function webDev1() {
    window.open("https://www.bcit.ca/study/outlines/20201087560");
}

function projects2() {
    window.open("https://www.bcit.ca/study/outlines/20201087576");
}

function projects1() {
    window.open("https://www.bcit.ca/study/outlines/20201087568");
}

function compArch() {
    window.open("https://www.bcit.ca/outlines/20203034766");
}

function bizComm2() {
    window.open("https://www.bcit.ca/study/outlines/20202066130");
}

function sql() {
    window.open("https://www.bcit.ca/study/courses/comp1630#outcomes");
}

function math() {
    window.open("https://www.bcit.ca/outlines/20203034757/");
}

function goBack() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/..";
    }, 1300);
}