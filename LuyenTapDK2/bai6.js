//Giai phuong trinh ax+b=0
let a=parseFloat(prompt('Nhap a'));
let b=parseFloat(prompt('Nhap b'));

if(a==0){
    if(b==0){
        document.write('Phuong trinh co vo so nghiem');
    }else{
        document.write('Phuong trinh vo nghiem');
    }
}else{
    document.write('Phuong trinh co nghiem x='+(-b/a));
}