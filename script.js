
/* Love Timer */

let startDate = new Date("2025-10-06");

function updateTimer(){

    let now = new Date();

    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    let minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    let seconds = Math.floor(
        (diff / 1000) % 60
    );

    document.getElementById("timer").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds ❤️";
}

updateTimer();

setInterval(updateTimer, 1000);


/* Surprise Button */

function surprise(){

    alert(
        "I Love You Forever ❤️\n\n" +
        "Thank you for being such a beautiful part of my life. " +
        "Happy Birthday, My Love! 🎂❤️"
    );

}


/* Floating Hearts */

setInterval(() => {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 500);

