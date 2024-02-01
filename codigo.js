const contenedorQR= document.getElementById('qrcode');
const form =document.getElementById('formulario');
const submit=document.getElementById('submit-btn');

QR = new QRCode(contenedorQR);

form.addEventListener('submit', event=>{
    event.preventDefault();
    QR.makeCode(form.qrtext.value);
    contenedorQR.classList.add('active');
});






