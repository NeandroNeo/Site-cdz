function playSound(id) {
    document.getElementById(id).play();
}

document.getElementById("music-btn").onclick = () => {
    document.getElementById("opening").play();
};
