let sayi = prompt("sayı giriniz:");
let toplam =0;

for(let i=0; i<sayi.length; i++){
    let rakam=sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(sayi==toplam){
    alert("armstrong sayıdır.");
} else{
    alert("armstrong sayı değildir!");
}