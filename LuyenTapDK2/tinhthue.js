
function tinhthue(){
    let thunhapthang=parseFloat(document.getElementById("thunhap").value);
    let sothue;
    if(thunhapthang<=5000000){
        sothue = thunhapthang*5/100;
    }else if(thunhapthang>5000000 && thunhapthang<=10000000){
        sothue = (thunhapthang*10/100)-250000;
    }else if(thunhapthang>10000000 && thunhapthang<=18000000){
        sothue = (thunhapthang*15/100)-750000;
    }else if(thunhapthang>18000000 && thunhapthang<=32000000){
        sothue = (thunhapthang*20/100)-1650000;
    }else if(thunhapthang>32000000 && thunhapthang<=52000000){
        sothue = (thunhapthang*25/100)-3250000;
    }else if(thunhapthang>5200000 && thunhapthang<=80000000){
        sothue = (thunhapthang*30/100)-5850000;
    }else{
        sothue = (thunhapthang*35/100)-9850000;
    }
    document.getElementById('ketqua').innerHTML='Thue thu nhap ca nhan la '+sothue;

}