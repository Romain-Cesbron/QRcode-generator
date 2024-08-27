const qr_url_input= document.getElementById('qr_url_input')
const qr_url = qr_url_input.value
const qr_space = document.getElementById('qr_space')


fetch(qr_url).then(function(response){
    if (response.ok){createQR()

    }
    else {
        
    }
})
let qrcode = null

function createQR(){
    new QRCode(qrcode, {
        text: qr_url,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    qr_space.innerHTML=qr_space
    }
