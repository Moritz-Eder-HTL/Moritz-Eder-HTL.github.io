function prevImg() {
    let img = document.images[8].src;

    for (let i = 8; i > 0; i--) {
        document.images[i].src = document.images[i - 1].src;
    }
    document.images[0].src = img;
}

function nextImg() {
    let img = document.images[0].src;

    for (let i = 0; i < 8; i++) {
        document.images[i].src = document.images[i + 1].src;
    }
    document.images[8].src = img;
}