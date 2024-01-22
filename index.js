let btn = document.querySelector('.btn-success');
let btnBai6 = document.querySelector('.btnBai6');
let btnBai7 = document.querySelector('.btnBai7');
let divArr = document.querySelector('.render_arr');
let divBai1 = document.getElementById('kq1'),
    divBai2 = document.getElementById('kq2'),
    divBai3 = document.getElementById('kq3'),
    divBai4 = document.getElementById('kq4'),
    divBai5 = document.getElementById('kq5'),
    divBai6 = document.getElementById('kq6'),
    divBai7 = document.getElementById('kq7'),
    divBai8 = document.getElementById('kq8'),
    divBai9 = document.getElementById('kq9'),
    divBai10 = document.getElementById('kq10');




var arrSoN = [];
btnBai6.onclick = function () {
    giaiBai6();
    giaiBaiTap();
    showKetQua();
}
btnBai7.onclick = function () {
    giaiBai7();
    giaiBaiTap();
    showKetQua();
}
btn.onclick = function () {
    themSoNVaoMang();
    giaiBaiTap();
    showKetQua();
    clearInput();
};
function themSoNVaoMang() {
    let soN = document.getElementById('soN').value * 1;
    arrSoN.push(soN);
}
function showKetQua() {
    divArr.innerHTML = arrSoN;
}
function giaiBaiTap() {
    giaiBai1();
    giaiBai2();
    giaiBai3();
    giaiBai4();
    giaiBai5();
    giaiBai8();
    giaiBai9();
    giaiBai10();
}
function giaiBai1() {
    let tong = 0;
    for (let i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            tong += arrSoN[i];
        }
        divBai1.innerHTML = `Bai 1: Tong cac so duong trong mang la: ${tong}`
    }
}
function giaiBai2() {
    let dem = 0;
    for (let i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            dem++;
        }

    }
    divBai2.innerHTML = `Bai 2: mang co ${dem} so duong trong mang`
}
function giaiBai3() {
    let min = arrSoN[0];
    for (let o = 1; o < arrSoN.length; o++) {
        if (min > arrSoN[o]) {
            min = arrSoN[o];
        }
    }
    divBai3.innerHTML = `Bai 3: gia tri nho nhat cua mang la: ${min}`
}
function giaiBai4() {
    let sapXepArr = arrSoN.slice(0).sort(function (a, b) {
        return a - b;
    })

    let max = sapXepArr[sapXepArr.length - 1];
    if (max >= 0) {
        divBai4.innerHTML = `Bai 4: so duong lon nhat trong mang la: ${max}`
    }
    else {
        divBai4.innerHTML = "Bai 4: mang khong co so duong"
    }

}
function giaiBai5() {
    let soChanCuoiCung = -1;
    for (let i = arrSoN.length; i >= 0; i--) {
        if (arrSoN[i] % 2 == 0) {
            soChanCuoiCung = arrSoN[i];
            break;
        }
    }
    if (soChanCuoiCung != -1) {
        divBai5.innerHTML = `Bai 5: So chan cuoi cung trong mang: ${soChanCuoiCung}`;
    }
    else {
        divBai5.innerHTML = `Bai 5: Khong co so chan`;
    }

}
function giaiBai6() {
    let index1 = document.getElementById('index1').value * 1,
        index2 = document.getElementById('index2').value * 1;


    if (index1 && index2) {
        let value1 = arrSoN[index1];
        let value2 = arrSoN[index2]
        arrSoN[index1] = value2;
        arrSoN[index2] = value1;
        console.log(arrSoN)
    }
    else {
        alert("da chuyen doi");
    }

}
function giaiBai7() {
    arrSoN.sort(function (a, b) {
        return a - b;
    })
    showKetQua();
    alert("da sap xep")
}
function giaiBai8() {
    for (let i = 0; i < arrSoN.length; i++) {
        const soN = arrSoN[i];
        let isNguyenTo = false;
        if (soN > 1) {
            for (let z = 2; z < soN; z++) {
                if (soN % z == 0)
                    break;
                isNguyenTo = true;
            }
        }
        if (isNguyenTo) {
            divBai8.innerHTML = `Bai 8: so nguyen to dau tien trong mang la so: ${soN}`
            break;
        }
        else {
            divBai8.innerHTML = "Bai 8: day khong co so nguyen to"
        }
    }
}
function giaiBai9() {
    var count = 0;
    for (let i = 0; i < arrSoN.length; i++) {
        const soN = arrSoN[i];
        if (soN % 1 == 0) {
            count++;
        }
    }
    divBai9.innerHTML = `Bai 9: So phan tu nguyen trong mang la: ${count}`
}
function giaiBai10() {
    var demSoAm = 0, demSoDuong = 0, content
    for (let i = 0; i < arrSoN.length; i++) {
        const soN = arrSoN[i];
        if (soN > 0) {
            demSoDuong++
        }
        if (soN < 0) {
            demSoAm++;
        }
    }
    if (demSoDuong>demSoAm) {
        content = 'mang co so duong nhieu hon so am'
    }
    else if(demSoDuong<demSoAm){
        content = 'mang co so am nhieu hon so duong'
    }
    else{
        content = 'mang co so am va so duong bang nhau'
    }
    divBai10.innerHTML='Bai 10: '+content;
}

function clearInput() {
    document.getElementById('soN').value = '';
    document.getElementById('soN').focus();
}















