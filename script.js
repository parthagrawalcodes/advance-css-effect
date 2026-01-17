let first=document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let str1=first.innerText;
let str2=second.innerText;
let str3=third.innerText;

let firstInterval;

first.addEventListener("mouseenter", () => {
  clearInterval(firstInterval); // important
  let counter = 0;

  firstInterval = setInterval(() => {
    let newstr = str1.split("").map((_, index) => {
      if (index < counter) return str1[index];
      return character[Math.floor(Math.random() * character.length)];
    }).join("");

    first.innerText = newstr;
    counter += 0.25;

    if (counter >= str1.length) {
      clearInterval(firstInterval);
      first.innerText = str1;
    }
  }, 30);
});

let secondInterval;
second.addEventListener('mouseenter',()=>{
    clearInterval(secondInterval);
    let counter=0;
 secondInterval=setInterval(()=>{
        let newstr2= str2.split("").map((element, index) => {
            if(index<counter) return str2[index];
         return character.split("")[Math.floor(Math.random()*53)];
    }).join("");
    second.innerHTML=newstr2;
    counter+=0.25;
    if(counter>=str2.length){
        clearInterval(secondInterval);
        second.innerText=str2;
    }
    },30);

});
let thirdInterval;
third.addEventListener('mouseenter',()=>{
    clearInterval(thirdInterval);
    let counter=0;
thirdInterval=setInterval(()=>{
        let newstr3= str3.split("").map((element ,index) => {
            if(index<counter) return str3[index];
         return character.split("")[Math.floor(Math.random()*53)];
    }).join("");
    counter+=0.25;
    third.innerHTML=newstr3;
    if(counter>=str3.length){
        clearInterval(thirdInterval);
        third.innerText=str3;
    }
    },30);

});