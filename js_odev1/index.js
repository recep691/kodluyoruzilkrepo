const name = prompt("Adinizi giriniz");
const element = document.querySelector("#myName");
const element2 = document.querySelector("#myClock");
const tarih = new Date() ;


if (typeof name === "string"){
    element.textContent = name ;
    element2.innerHTML = `${tarih.toLocaleString()}` ;
}