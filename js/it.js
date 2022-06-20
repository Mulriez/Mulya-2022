var nama = document.getElementById('nama')
var email = document.getElementById('email')
var pesan = document.getElementById('pesan')

var nama_error = document.getElementById('nama_error')
var email_error = document.getElementById('email_error')
var pesan_error = document.getElementById('pesan_error')

email.addEventListener('textInput', emailVerify);
nama.addEventListener('textInput', namaVerify);
pesan.addEventListener('textInput', pesanVerify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = '1px solid red';
        email_error.style.display = 'block';
        email.focus();
        
    }
    if (nama.value.length < 4) {
        nama.style.border = '1px solid red';
        nama_error.style.display = 'block';
        nama.focus();
        
    }
    if (pesan.value.length < 4) {
        pesan.style.border = '1px solid red';
        pesan_error.style.display = 'block';
        pesan.focus();
        
    }
}

function emailVerify() {
    if (email.value.length >= 9) {
        email.style.border = '1px solid silver';
        email_error.style.display = 'none';
        return true;
    }
}
function namaVerify() {
    if (nama.value.length >= 4) {
        nama.style.border = '1px solid silver';
        nama_error.style.display = 'none';
        return true;
    }
}
function pesanVerify() {
    if (pesan.value.length >= 4) {
        pesan.style.border = '1px solid silver';
        pesan_error.style.display = 'none';
        return true;
    }
}