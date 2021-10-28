let myImage = JSON.parse(localStorage.getItem("arr")) || [
    {
      title: "Vienna",
      im1: "Vienna.jpg",
      extraImg: ["Vienna4.jpg"],
      des: "There are a few variations on the Vienna but one of the most common is made with two ingredients espresso and whipped cream The whipped cream takes the place of milk and sugar to provide a creamy texture",
      fav: false, 
    },
    {
      title: "Frappucino",
      im1: "Frappucino2.jpg ",
      extraImg: ["Frappucino1.jpg"],
      des: "Frappuccino is a trademarked brand of the Starbucks Corporation for a line of highly-sweetened iced, blended coffee drinks. It consists of coffee or crème base, blended with ice and other various ingredients like flavored syrups, usually topped with whipped cream and or spices",
      fav: false,
    },
    {
      title: "latte",
      im1: `latte2.jpeg`,
      extraImg: ["latte3.jpeg"],
      des: "This classic drink is typically 1/3 espresso and 2/3 steamed milk, topped with a thin layer of foam, but coffee shops have come up with seemingly endless customizations. You can experiment with flavored syrups like vanilla and pumpkin spice or create a nondairy version by using oat milk. Skilled baristas often swirl the foam into latte art!",
      fav: false,
    },
    {
      title: "Black Coffee",
      im1: `Black coffee3.jpeg`,
      extraImg: ["Black coffee2.jpg"],
      des: "No frills here: Black coffee is made from plain ground coffee beans that are brewed hot. It's served without added sugar, milk, or flavorings. Lets take a closer look at the most notable black coffee types.",
      fav: false,
    },
    {
      title: "Cappuccino",
      im1: "Cappuccino2.jpeg",
      extraImg: ["Cappuccino1.jpeg"],
      des: "This espresso-based drink is similar to a latte, but the frothy top layer is thicker. The standard ratio is equal parts espresso, steamed milk, and foam. It's often served in a 6-ounce cup (smaller than a latte cup) and can be topped with a sprinkling of cinnamon.",
      fav: false,
    },
    {
      title: "macchiato",
      im1: "macchiato2.jpeg",
      extraImg: ["macchiato1.jpeg"],
      des: "A macchiato is a shot of espresso with just a touch of steamed milk or foam. In Italian, macchiato means stained or spotted, so a caffè macchiato refers to coffee that's been stained with milk.",
      fav: false,
    },
    {
      title: "Americano",
      im1: `Americano4.jpeg`,
      extraImg: ["Americano3.jpeg"],
      des: "Order this drink and you'll get a shot of espresso diluted with hot water.Americano is an Italian term for American coffee. It is believed that the name comes from the U.S. soldiers in Italy during the 2nd World War who used water to ration the scarce amounts of espresso available at the time.",
      fav: false,
    },
    {
      title: "Cortado",
      im1: `Cortado2.jpeg`,
      extraImg: ["Cortado1.jpg"],
      des: "This drink, which hails from Spain, is half espresso, half steamed milk. Unlike many Italian coffee drinks, it contains little to no foam. It's typically served in a 4.5-ounce glass.",
      fav: false,
    },
    {
      title: "Flat White",
      im1: `Flat White1.jpeg`,
      extraImg: ["Flat White2.jpg"],
      des: "Like the latte, this drink consists of espresso and steamed milk, but the ratio of espresso to milk is higher. Baristas also fold the milk as it steams, which creates a more velvety texture. The flat white has roots in Australia and New Zealand.",
      fav: false,
    },
  ];
  
  
  
  const render = () => {
    $(".image").html("")
    myImage.forEach((item, i) => {
      $(".image").append(`<div  id="item${i}" class="containimg">
        <img  src=' ${item.im1}'/> 
        <i onclick= 'favoriteCard(${i})'  id="favr-${i}"  class="far fa-heart"></i>
        <h2  class="tit"> ${item.title}</h2> 
        <button onclick='renderOneItem(${i})' > + </button>
        </div>`);
        
  
    if (item.fav === true) {
    $("#favr-"+i).removeClass("far")
    $("#favr-"+i).addClass("fas") 
    }
        
    });
  };
  
  render();
  
  
  // Description...........
  function renderOneItem(i) {
    // console.log(myImage[i]);
    const myItem = myImage[i];
    $(".image").hide();
     $('.oneItem').append(`<div class="ext">
      <h2 class="t1">${myItem.title}</h2>
      <div class="ext2">
      <div class="gItem" >
      <p class="desc">${myItem.des} </p></div>
      <div class="gItem" >
      <img class="ig3" src=' ${myItem.extraImg}'/>
       </div> </div> </div> `)
  }

  
  // search
  $(".search-container").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".containimg ").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
     });
  
  
  // fav
    function favoriteCard(i) {
      myImage[i].fav = !myImage[i].fav
      localStorage.setItem("arr",JSON.stringify(myImage))
     
  
      render()
      
       }
  