var divKetQua1 = document.getElementById('ketQua1');
var divKetQua2 = document.getElementById('ketQua2');
var divKetQua3 = document.getElementById('ketQua3');
var divKetQua4 = document.getElementById('ketQua4');


function baiTap1() {
    var diemChuan = document.getElementById('txt-diemChuan').value * 1;
    var vung = document.getElementById('txt-vung').value;
    var doiTuong = document.getElementById('txt-doiTuong').value;
    var diem1 = document.getElementById('txt-diem1').value * 1;
    var diem2 = document.getElementById('txt-diem2').value * 1;
    var diem3 = document.getElementById('txt-diem3').value * 1;
    var diemKhuVuc, diemDoiTuong;
    switch (vung) {
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;

        default:
            diemKhuVuc = 0;
            break;
    }
    switch (doiTuong) {
        case "1":
            diemDoiTuong = 2.5;
            break;
        case "2":
            diemDoiTuong = 1.5;
            break;
        case "3":
            diemDoiTuong = 1;
            break;

        default:
            diemDoiTuong = 0;
            break;
    }

    var diemTongKet = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;

    if (diemTongKet >= diemChuan && diem1 != 0 && diem2 != 0 && diem3 != 0) {
        divKetQua1.innerHTML = `Chuc mung ban da dau 🤩 voi so diem la: ${diemTongKet}`
    }
    else {
        divKetQua1.innerHTML = `Rat tiec 😥 ban da rot, so diem cua ban la ${diemTongKet}`
    }

}
function baiTap2() {
    var tenKhachHang = document.getElementById('txt-tenKhachHang').value;
    var soDien = document.getElementById('txt-soDien').value * 1;
    var soTien = 0;

    if (soDien <= 50) {
        soTien = soDien * 500;
    }
    else if (soDien > 50 && soDien <= 100) {
        soTien = 50 * 500 + (soDien - 50) * 650;
    }
    else if (soDien > 100 && soDien <= 200) {
        soTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    }
    else if (soDien > 200 && soDien <= 350) {
        soTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
    }
    else {
        soTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 110 + (soDien - 350) * 1300;
    }
    var formatTien = soTien.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
    })
    divKetQua2.innerHTML = `Khach hang ${tenKhachHang} phai tra: ${formatTien}`;
}

function baiTap3() {
    var hoTen = document.getElementById('txt-hoTen').value
    var tongThuNhap = document.getElementById('txt-tongThuNhap').value * 1;
    var soNguoiPhuThuoc = document.getElementById('txt-soNguoiPhuThuoc').value * 1;
    var thueSuat = 0;
    var tienThue = 0;

    if (tongThuNhap <= 60000000) {
        thueSuat = 5 / 100;
    }
    else if (tongThuNhap > 60000000 && tongThuNhap <= 120000000) {
        thueSuat = 10 / 100
    }
    else if (tongThuNhap > 120000000 && tongThuNhap <= 210000000) {
        thueSuat = 15 / 100
    }
    else if (tongThuNhap > 2100000000 && tongThuNhap <= 384000000) {
        thueSuat = 20 / 100
    }
    else if (tongThuNhap > 3840000000 && tongThuNhap <= 624000000) {
        thueSuat = 25 / 100
    }
    else if (tongThuNhap > 624000000 && tongThuNhap <= 960000000) {
        thueSuat = 30 / 100
    }
    else {
        thueSuat = 35 / 100
    }

    tienThue = thueSuat * (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000)
    var formatTienThue = tienThue.toLocaleString('vi', {
        style: "currency",
        currency: 'VND'
    })


    divKetQua3.innerHTML = `Cong dan ${hoTen} phai dong: ${formatTienThue}`
}

// bai 4
var divKetNoi = document.querySelector('.ketNoi');
var divLoaiKhachHang = document.getElementById('txt-loaiKhachHang')
var loaiKhachHang 

divLoaiKhachHang.onchange = function () {
    loaiKhachHang = document.getElementById('txt-loaiKhachHang').value*1;
    
    if (loaiKhachHang == 1) {
        divKetNoi.style.display="block";
    }
    else {
        divKetNoi.style.display='none';
    }
}
function baiTap4() {

   
    var soKetNoi = document.getElementById('txt-soKetNoi').value * 1;
    var maKhachHang = document.getElementById('txt-maKhachHang').value;
    var soKenh = document.getElementById('txt-soKenh').value*1;
    var phiHoaDon = 0, phiDichVu = 0, phiThueKenh = 0;
    var tongTien = 0;
console.log(loaiKhachHang);

    switch (loaiKhachHang) {
        case 0:
            phiHoaDon = 4.5;
            phiDichVu = 20.5
            phiThueKenh = 7.5*soKenh
            break;
    
        case 1:
            phiHoaDon = 15;
            phiDichVu = soKetNoi<10?75:(75+(soKetNoi-10)*5)
            phiThueKenh = 50*soKenh
            break;
    }
    
    tongTien = phiHoaDon + phiDichVu + phiThueKenh;


    var formatTien = tongTien.toLocaleString('vi', {
        style: 'currency',
        currency: 'USD',
    })
    divKetQua4.innerHTML = `Ma khach hang: ${maKhachHang} <br> So tien can thanh toan: ${formatTien}`
}


document.getElementById('btnBai1').onclick = baiTap1;
document.getElementById('btnBai2').onclick = baiTap2;
document.getElementById('btnBai3').onclick = baiTap3;
document.getElementById('btnBai4').onclick = baiTap4;

