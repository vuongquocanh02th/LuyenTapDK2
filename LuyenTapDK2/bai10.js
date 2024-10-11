//Tinh gia dien 1 thang
let Muc1=1806;
let Muc2=1866;
let Muc3=2167;
let Muc4=2729;
let Muc5=3050;
let Muc6=3151;
function tinhTienDien() {
    let tieuthu=parseFloat(document.getElementById('congsuat').value);
    let tongtien=document.getElementById('total');
    if(tieuthu<=50){
        tongtien=tieuthu*Muc1;
    }else if(tieuthu<=100){
        tongtien=(tieuthu-50)*Muc2+tieuthu*Muc1;
    }else if(tieuthu<=200){
        tongtien=(tieuthu-100)*Muc3+(tieuthu-50)*Muc2+tieuthu*Muc1;
    }else if(tieuthu<=300){
        tongtien=(tieuthu-200)*Muc4+(tieuthu-100)*Muc3+(tieuthu-50)*Muc2+tieuthu*Muc1;
    }else if(tieuthu<=400){
        tongtien=(tieuthu-300)*Muc5+(tieuthu-200)*Muc4+(tieuthu-100)*Muc3+(tieuthu-50)*Muc2+tieuthu*Muc1;
    }else{
        tongtien=(tieuthu-400)*Muc6+(tieuthu-300)*Muc5+(tieuthu-200)*Muc4+(tieuthu-100)*Muc3+(tieuthu-50)*Muc2+tieuthu*Muc1;
    }
    document.getElementById('total').innerHTML='Tong tien dien la '+tongtien;
}