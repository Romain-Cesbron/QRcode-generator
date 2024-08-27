const qr_url_input = document.getElementById('qr_url_input');
const qr_space = document.getElementById('qr_space');

document.getElementById('generate_bt').addEventListener('click', function () {
    const qr_url = qr_url_input.value.trim();
    qr_space.innerHTML = '';
    createQR(qr_url);
});

function createQR(qr_url) {
    new QRCode(qr_space, {
        text: qr_url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
