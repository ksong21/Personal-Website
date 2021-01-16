window.onload = function load() {
    document.body.style.opacity = 1;

    setTimeout(function() {
        scroller();
    }, 1000);
    setInterval(function() {
        scroller();
    }, 3500);
}

function scroller() {
    let welcome = document.getElementById("welcome");
    let msg1 = "Hello.";
    let msg2 = "Welcome...";

    if (welcome.innerHTML == msg1) {
        for (let i = 1; i <= 10; i++) {
            setTimeout(function() {
                welcome.innerHTML = msg2.substring(0, i);
            }, i * 80);
        }
    } else {
        for (let i = 1; i <= 6; i++) {
            setTimeout(function() {
                welcome.innerHTML = msg1.substring(0, i);
            }, i * 80);
        }
    }
}

function courses() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/courses"
    }, 1300);
}

function projects() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/projects"
    }, 1300);
}

function comments() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/comments"
    }, 1300);
}