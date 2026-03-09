function openSurprise() {
    document.getElementById("surpriseBox").classList.remove("hidden");
}

function playMusic() {
    let music = document.getElementById("bgMusic");
    music.play();
}

function yesAnswer() {
    document.getElementById("result").innerHTML =
        "💖 Yayyy!! I Love You So Much 💖 <br><br> You are the best part of my life 💘✨ <br><br> Happy Valentine's Day My Queen 🌹👑";
}

function noAnswer() {
    document.getElementById("result").innerHTML =
        "😢 Oh no... Please say Yes 😍💖";
}