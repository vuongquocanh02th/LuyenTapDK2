let a=parseFloat(prompt("Nhap a"));
let b=parseFloat(prompt("Nhap b"));
let c=parseFloat(prompt("Nhap c"));
if(a>0 && b>0 && c>0 && a+b>c && b+c>a && a+c>b){
    alert(a+" , "+b+" , "+c+' la 3 canh cua 1 tam giac');
}else {
    alert("khong phai 3 canh cua tam giac");
}