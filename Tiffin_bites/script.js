// SEARCH FUNCTIONALITY
let searchField=document.getElementById("search_field")
let TiffinContainer=document.getElementById("menu_two")
let Tiffincards=document.querySelectorAll(".card_container")

searchField.addEventListener("input",()=>{
    let searchTerm=searchField.value.toLowerCase().trim()
    // let hasResults=false;

    Tiffincards.forEach((card)=>{
        // console.log(card)
        let name=card.id
        // console.log(name)
        if (name.includes(searchTerm)){
            card.style.display="flex";
            // hasResults=true;
        }
        else{
            card.style.display="none"
            // hasResults=false;
        }
    })
})


let cartQuantity=document.getElementById("qunatity")
let cartPrice=document.getElementById("price")

let cart={}
let totalQuantity=0
let totalPrice=0

let cards=document.querySelectorAll(".card_container")
// console.log(cards)

cards.forEach((card)=>{
    // console.log(card)
    let itemid=card.id
    let itemName=card.querySelector(".food_title").innerText
    let itemPrice =Number(card.querySelector(".food_price").innerText.replace("₹",""))
    let itemQuantity=card.querySelector("span")
    let minusbtn=card.querySelectorAll(".quantity_btns")[0]
    let plusbtn=card.querySelectorAll(".quantity_btns")[1]


    // console.log(itemid)
    // console.log(itemName)
    // console.log(itemPrice)
    // console.log(itemQuantity)
    // console.log(minusbtn)
    // console.log(plusbtn)


    cart[itemid]={
        name:itemName,
        price:itemPrice,
        quantity:0
    }

    plusbtn.addEventListener("click",()=>{
        cart[itemid].quantity++;       
        totalQuantity++;
        totalPrice+=itemPrice;
        itemQuantity.innerText=cart[itemid].quantity;
        UpdateCart();
        
    })

        minusbtn.addEventListener("click",()=>{
        if (cart[itemid].quantity>0){
        cart[itemid].quantity--;       
        totalQuantity--;
        totalPrice-=itemPrice;
        itemQuantity.innerText=cart[itemid].quantity;
        UpdateCart();
        }
        
    })
})


let UpdateCart=()=>{
    cartQuantity.innerText=totalQuantity;
    cartPrice.innerText = `₹${totalPrice.toFixed(2)}`;

}


let cart_icon=document.getElementById("cart_icon")
console.log(cart_icon)
let closeBtn=document.getElementById("closeBtn")
console.log(closeBtn)
let main=document.querySelector("main")

cart_icon.addEventListener("click",()=>{
    main.style.display="flex"
    renderCart()
})

closeBtn.addEventListener("click",()=>{
    main.style.display="none"
})

let cartDetails=document.getElementById("cart_details")
let cart_total_items=document.querySelector("#cart_total_items>span")
let cart_total_price=document.querySelector("#cart_total_price>span")


function renderCart(){
    cartDetails.innerHTML=""
    let hasResults=false
    for(let id in cart){
        let name=cart[id].name
        let price=cart[id].price
        let quantity=cart[id].quantity
        if(quantity>0){
        hasResults=true
        let para=document.createElement("p")
        para.innerHTML = `${name} * ${quantity} = ₹${(price*quantity).toFixed(2)}`
        cartDetails.append(para)

        }

    } 
    if(hasResults == false){
        cartDetails.innerHTML="No items in Cart"
    }
    cart_total_items.innerText=totalQuantity
    cart_total_price.innerText=totalPrice.toFixed(2)

}
