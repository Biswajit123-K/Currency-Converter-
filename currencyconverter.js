// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/v1/currencies";
const BASE_URL = 'http://v6.exchangerate-api.com/v6/3f7aef110c7cd47fc72854fe/pair/';
  const btn = document.querySelector("button");

  const dropdowns=document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(" .from select");
const toCurr = document.querySelector(" .to select");
const msg = document.querySelector(".msg");
document.addEventListener("load",()=>{
  updateExchangeRate();

});


  for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name =="from" && currCode=="USD"){
          newOption.selected="selected";
        }
        else if 
          (select.name =="to" && currCode=="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
    });
  }
  const updateFlag =(element)=>{
    let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  };
  btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    
  });
  const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
    let amval = amount.value;
    console.log(amval);
    if(amval = ""|| amval <1){
      amval = 1;
      amount.value = "1";

    }
    
    // const URL =`${BASE_URL}/${fromCurr.value}/${toCurr.value}`;
    let response = await fetch( `http://v6.exchangerate-api.com/v6/3f7aef110c7cd47fc72854fe/pair/${fromCurr.value}/${toCurr.value}`);
    console.log(response);
    let data = await response.json();
    console.log(data.conversion_rate);
    let rate = data.conversion_rate;
    console.log(rate);
    let finalamou = amount.value*rate;
    console.log(finalamou);
    
    msg.innerText = `${amount.value} ${fromCurr.value} = ${finalamou } ${toCurr.value}`;

  };