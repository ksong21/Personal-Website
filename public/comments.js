window.onload = function load() {
    document.body.style.opacity = 1;
}

function postComment() {
    let msg = document.getElementById("text").value;

    $.ajax({
        url: "postComment",
        method: "post",
        data: {
            comment: msg
        },
        success: function(res) {
            if (res.success) {
                location.reload();
            }
        }
    })
}

function goBack() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "/..";
    }, 1300);
}