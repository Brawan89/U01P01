const arr = JSON.parse(localStorage.getItem("arr"))


const myFav = arr.filter((item,i)=>{
    return item.fav == true
})




console.log(myFav);

const favoriteCard =()=>{
    myFav.forEach((item, i) => {
        $(".myFav").append(`<div  id="item${i}" class="containimg">
          <img  src=' ${item.im1}'/> 
          <h2  class="tit"> ${item.title}</h2> 
          <button  > + </button>
          </div>`);
         
                }) }
favoriteCard();




