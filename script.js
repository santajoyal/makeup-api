var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.setAttribute("placeholder","Search for Products");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.marginLeft="10px"
button.innerHTML="Search";
button.addEventListener("click",foo);

div.append(input,button);
document.body.append(div);

async function foo(){
  try {
    var userdata=document.getElementById("name").value;
    var res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    var res1=await res.json();
    // console.log(res1);
    for(var i=0;i<res1.length;i++){
      if(userdata===res1[i].name){
        // console.log(res1[i].brand);
        var card=document.createElement("div");
        card.style.textAlign="center";
        card.innerHTML=`<div class="card" style="width: 18rem;">
        <h5 class="card-title" style="background-color:palevioletred;">${res1[i].brand}</h5>
        <img src="${res1[i].image_link}" class="card-img-top" alt="img" >
        <div class="card-body">
          <h5 class="card-title">${res1[i].name}</h5>
          <h6 class="card-title">price: ${res1[i].price}</h6>
          <a href="${res1[i].product_link}" class="btn btn-primary">Buy Now</a>
          <p class="card-text"><b>Description: </b>${res1[i].description}</p>
        </div>
      </div>`;
      document.body.append(card);
      }
    }
  } 
  catch (error) {
    console.log(error);
  }
}
foo();