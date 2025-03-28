/*
 --masteran--
const bentuk = document.getElementById('bentuk');
const inputPersegi = document.getElementById('inputPersegi');
const inputPersegiPanjang = document.getElementById('inputPersegiPanjang');
const hitung = document.getElementById('hitung');
const hasil = document.getElementById('hasil');

bentuk.addEventListener('change', function() {
    if (this.value === 'persegi') {
        inputPersegi.style.display = 'block';
        inputPersegiPanjang.style.display = 'none';
    } else {
        inputPersegi.style.display = 'none';
        inputPersegiPanjang.style.display = 'block';
    }
});

hitung.addEventListener('click', function() {
    const selectedBentuk = bentuk.value;
    let luas;

    if (selectedBentuk === 'persegi') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = sisi * sisi;
    } else {
        const panjang = parseFloat(document.getElementById('panjang').value);
        const lebar = parseFloat(document.getElementById('lebar').value);
        luas = panjang * lebar;
    }

    hasil.textContent = `Luas: ${luas}`;
});
--masteran--
*/

const persegi = document.getElementById('persegi');
const persegiPanjang = document.getElementById('persegiPanjang');
const inputPersegi = document.getElementById('inputPersegi');
const inputPersegiPanjang = document.getElementById('inputPersegiPanjang');
const inputPersegiKel = document.getElementById('inputPersegiKel');
const inputPersegiPanjangKel = document.getElementById('inputPersegiPanjangKel');
const hitung = document.getElementById('hitung');
const hasil = document.getElementById('hasil');
const hitungKel = document.getElementById('hitungKel');
const hasilKel = document.getElementById('hasilKel');
const hitung1 = document.getElementById('hitung1'); /*luasPPanjang*/
const hasil1 = document.getElementById('hasil1');/*hasilPPanjang*/
const hitung1Kel = document.getElementById('hitung1Kel'); /*luasPPanjang*/
const hasil1Kel = document.getElementById('hasil1Kel');

persegi.addEventListener('change', function() {
    inputPersegi.style.display = 'block';
    inputPersegiPanjang.style.display = 'none';
});

persegiPanjang.addEventListener('change', function() {
    inputPersegi.style.display = 'none';
    inputPersegiPanjang.style.display = 'block';
});


persegi.addEventListener('change', function() {
    inputPersegiKel.style.display = 'block';
    inputPersegiPanjangKel.style.display = 'none';
});

persegiPanjang.addEventListener('change', function() {
    inputPersegiKel.style.display = 'none';
    inputPersegiPanjangKel.style.display = 'block';
});

hitung.addEventListener('click', function() {
    const selectedBentuk = document.querySelector('input[name="bentuk"]:checked').value;
    let luas;

    if (selectedBentuk === 'persegi') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = sisi * sisi;
    } else {
        const panjang = parseFloat(document.getElementById('panjang').value);
        const lebar = parseFloat(document.getElementById('lebar').value);
        luas = panjang * lebar;
    }

    hasil.textContent = `Luas: ${luas}`;
    
});
    
hitungKel.addEventListener('click', function() {
    const selectedBentuk = document.querySelector('input[name="bentuk"]:checked').value;
    let keliling;

    if (selectedBentuk === 'persegi') {
        const sisiKel = parseFloat(document.getElementById('sisiKel').value);
        keliling = (4 * sisiKel);
    } else {
        const panjangKel = parseFloat(document.getElementById('panjangKel').value);
        const lebarKel = parseFloat(document.getElementById('lebarKel').value);
        keliling = (2 * (panjangKel + lebarKel));
    }
    
    hasilKel.textContent = `Keliling: ${keliling}`;
    
});

hitung1.addEventListener('click', function() {
    const selectedBentuk = document.querySelector('input[name="bentuk"]:checked').value;
    let luas;

    if (selectedBentuk === 'persegiPanjang') {
        const panjang = parseFloat(document.getElementById('panjang').value);
        const lebar = parseFloat(document.getElementById('lebar').value);
        luas = panjang * lebar;
    } else {
        const sisi = parseFloat(document.getElementById('sisi').value);
        luas = sisi * sisi;
    }

    hasil1.textContent = `Luas: ${luas}`;
    
});

hitung1Kel.addEventListener('click', function() {
    const selectedBentuk = document.querySelector('input[name="bentuk"]:checked').value;
    let keliling;

    if (selectedBentuk === 'persegiPanjang') {
        const panjangKel = parseFloat(document.getElementById('panjangKel').value);
        const lebarKel = parseFloat(document.getElementById('lebarKel').value);
        keliling = (2 * (panjangKel + lebarKel));
    } else {
        const sisiKel = parseFloat(document.getElementById('sisiKel').value);
        keliling = (4 * sisiKel);
    }
    
    hasil1Kel.textContent = `Keliling: ${keliling}`;
    
});

reset.addEventListener('click', function() {
    document.getElementById('sisi').value = '';
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    hasil.textContent = '';
});

resetKel.addEventListener('click', function() {
    document.getElementById('sisiKel').value = '';
    document.getElementById('panjangKel').value = '';
    document.getElementById('lebarKel').value = '';
    hasilKel.textContent = '';
});

resetPP.addEventListener('click', function() {
    document.getElementById('sisi').value = '';
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    hasil1.textContent = '';
});

resetPPKel.addEventListener('click', function() {
    document.getElementById('sisiKel').value = '';
    document.getElementById('panjangKel').value = '';
    document.getElementById('lebarKel').value = '';
    hasil1Kel.textContent = '';
});
