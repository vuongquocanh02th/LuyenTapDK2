//giai phuong trinh ax^2+bx+c=0
let a=parseFloat(prompt("nhap a"));
let b=parseFloat(prompt("nhap b"));
let c=parseFloat(prompt("nhap c"));
let delta=Math.pow(b,2)-4*a*c;
if(delta<0){
    document.write("Phuong trinh vo nghiem");
}else if(delta==0){
    document.write("Phuong trinh co nghiem kep x1=x2= "+(-b/(2*a)));
}else {
    document.write("Phuong trinh co 2 nghiem phan biet x1= "+
    ((-b+Math.sqrt(delta))/(2*a))+" va x2= "+((-b-Math.sqrt(delta))/(2*a)));
}