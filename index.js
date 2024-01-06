var divKetQua1 = document.getElementById('ketQua1');
var divKetQua2 = document.getElementById('ketQua2');
var divKetQua3 = document.getElementById('ketQua3');
var divKetQua4 = document.getElementById('ketQua4');
var divKetQua5 = document.getElementById('ketQua5');

function baiTap1(){
    var soNgayDiLam = document.getElementById('txt-soNgayDiLam').value*1;
    var luong1Ngay = 100000;
    var tongLuong = soNgayDiLam * luong1Ngay;

    var formatLuong = tongLuong.toLocaleString("vi",{
        style: 'currency',
        currency: 'VND',
    })
    divKetQua1.innerHTML = `Luong nhan la: ${formatLuong}`
}
function baiTap2(){
    var so1 = document.getElementById('txt-so1').value*1;
    var so2 = document.getElementById('txt-so2').value*1;
    var so3 = document.getElementById('txt-so3').value*1;
    var so4 = document.getElementById('txt-so4').value*1;
    var so5 = document.getElementById('txt-so5').value*1;
    var trungBinhCong = (so1+so2+so3+so4+so5)/5;
    divKetQua2.innerHTML=`Trung binh cong cua cac so la: ${trungBinhCong}`;
}

function baiTap3(){
    var tiLeUsdRaVND = 23500;
    var soUSD = document.getElementById('txt-soUSD').value*1;
    var soVND = soUSD * tiLeUsdRaVND;
    soUSD = soUSD.toLocaleString('vi',{
        style: 'currency',
        currency: 'USD'
    })
    soVND = soVND.toLocaleString('vi',{
        style: 'currency',
        currency: 'VND'
    })
    divKetQua3.innerHTML = `${soUSD} doi ra duoc ${soVND}` 
}

function baiTap4(){
    var chieuDai = document.getElementById('txt-chieuDai').value*1;
    var chieuRong = document.getElementById('txt-chieuRong').value*1
    var chuVi = (chieuDai+chieuRong)*2;
    var dienTich = chieuDai*chieuRong;
    divKetQua4.innerHTML = `Chu vi cua hinh chu nhat la: ${chuVi} <br> Dien tich cua hinh chu nhat la: ${dienTich}`
}

function baiTap5(){
    var so = document.getElementById('txt-kySo').value*1;
    var soHangChuc = Math.floor(so/10);
    var soHangDonVi = so%10;
    var tongKySo = soHangChuc + soHangDonVi;

    divKetQua5.innerHTML=`tong 2 ky so cua ${so} la: ${tongKySo}`;
}
document.getElementById('btnBai1').onclick=baiTap1;
document.getElementById('btnBai2').onclick=baiTap2;
document.getElementById('btnBai3').onclick=baiTap3;
document.getElementById('btnBai4').onclick=baiTap4;
document.getElementById('btnBai5').onclick=baiTap5;

