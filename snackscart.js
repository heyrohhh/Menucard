let egg =document.getElementById('egg');
let ice_cream =document.getElementById('ice_cream');
let kachori =document.getElementById('Kachori');
let dry_fruit = document.getElementById('dryfruit');
let cart = document.getElementById('scart');
let cart1 = document.getElementById('scart1');
let cart2 = document.getElementById('scart2');
let cart3 = document.getElementById('scart3');
let cart4= document.getElementById('scart4');
let cart5 = document.getElementById('scart5');
let cart6 = document.getElementById('scart6');
let cart7 = document.getElementById('scart7');
let cart8 = document.getElementById('scart8');

let price=0;
let price1=0;
let price2=0;
let price3=0;
let price4=0;
let price5=0;
let price6=0;
let price7=0;
let price8 =0;


// function first

function add(){
    price+=30;
    cart.innerHTML= "Boiled Eggs Plate:"+price; 
    let NewElement=document.createElement("button");
    NewElement.textContent ="Remove";
    NewElement.addEventListener("click",function(){
        if(price<30){
            cart.innerHTML= "";
        }else{
            price-=30;
            cart.innerHTML= "Boiled Eggs Plate:"+price;
            let container = document.getElementById('scart');
        container.appendChild(NewElement);
        }
        
    })
    let container = document.getElementById('scart');
    container.appendChild(NewElement);

}
    // function Second
function add1(){
    price1+=60;
    cart1.innerHTML= "Vanila Ice-Cream :"+price1; 
    let NewElement=document.createElement("button");
    NewElement.textContent ="Remove";
    NewElement.addEventListener("click",function(){
        if(price1<60){
            cart1.innerHTML= "";
        }else{
            price1-=60;
                cart1.innerHTML= "Vanila Ice-Cream :"+price1;
            let container = document.getElementById('scart1');
        container.appendChild(NewElement);
        }    
    })
    let container = document.getElementById('scart1');
    container.appendChild(NewElement); 
}

// function Third

function add2(){
    price2+=150;
    cart2.innerHTML= "Dry Fruit :"+price2;  
    let NewElement=document.createElement("button");
    NewElement.textContent ="Remove";
    NewElement.addEventListener("click",function(){
        if(price2<150){
            cart2.innerHTML= "";
        }else{
            price2-=150;
                cart2.innerHTML= "Dry Fruits :"+price2;
            let container = document.getElementById('scart2');
        container.appendChild(NewElement);
        }    
    })
    let container = document.getElementById('scart2');
    container.appendChild(NewElement); 
}

// function 4th


function add3(){
    price3+=25;
    cart3.innerHTML= "Kachori:"+price3;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price3<25){
            cart3.innerHTML="";
        }else{
            price3-=25;
            cart3.innerHTML="kachori : "+price3;
            let container=document.getElementById("scart3");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart3");
    container.appendChild(NewElement);

}

// function fifth
function add4(){
    price4+=249;
    cart4.innerHTML= "Pizza:"+price4;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price4<249){
            cart4.innerHTML="";
        }else{
            price4-=249;
            cart4.innerHTML="Pizza : "+price4;
            let container=document.getElementById("scart4");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart4");
    container.appendChild(NewElement);

}

// function sixth 

function add5(){
    price5+=65;
    cart5.innerHTML= "Burger:"+price5;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price5<65){
            cart5.innerHTML="";
        }else{
            price5-=65;
            cart5.innerHTML="Burger : "+price5;
            let container=document.getElementById("scart5");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart5");
    container.appendChild(NewElement);

}

// function seventh
function add6(){
    price6+=12;
    cart6.innerHTML= "Samosa:"+price6;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price6<12){
            cart6.innerHTML=" ";
        }else{
            price6-=12;
            cart6.innerHTML="Samosa : "+price6;
            let container=document.getElementById("scart6");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart6");
    container.appendChild(NewElement);

}


// function eighth

function add7(){
    price7+=79;
    cart7.innerHTML= "Veg-Roll:"+price7;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price7<79){
            cart7.innerHTML=" ";
        }else{
            price7-=79;
            cart7.innerHTML="Samosa : "+price7;
            let container=document.getElementById("scart7");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart7");
    container.appendChild(NewElement);

}

// function ninth

function add8(){
    price8+=119;
    cart8.innerHTML= "Veg-Roll:"+price8;  
    let NewElement = document.createElement("button");
    NewElement.textContent="Remove";
    NewElement.addEventListener("click",function(){
        if(price8<119){
            cart8.innerHTML=" ";
        }else{
            price8-=119;
            cart8.innerHTML="Samosa : "+price8;
            let container=document.getElementById("scart8");
            container.appendChild(NewElement);
        }
    })
    let container=document.getElementById("scart8");
    container.appendChild(NewElement);

}

function total() {
    let totalPrice = price + price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8;
    document.getElementById('total').innerHTML = "Total Price: "+" "+ "&#8377;" + totalPrice;

    if(totalPrice === 0){
        alert("Please Buy Soemething fot total")
    }
}


