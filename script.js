var money = 10.00;
var cokes = 0;
var chips = 0;
var cokesPrice = 1.50;
var chipsPrice = 1.25;
var item;
var itemsStorage = {"Snickers":[0.90,10,"A1"],"Clif":[1.35,10,"A2"]}

$(".buy").click(function() {
  item = $("#input").val();
  console.log(item);
  if (item==="coke" && money>=cokesPrice){
    money -= cokesPrice;
    $(".message").append("<p>You bought a coke for 1.50. Refreshing!</p>")
  }
  else if (item==="chips" && money>=chipsPrice){
    money -= chipsPrice;
    $(".message").append("<p>You bought some chips for 1.25. Crunchy and salty.</p>")
  }
  else{
    $(".message").append("<p>That's not right. Either you can't afford the item, or you didn't put an item at all.</p>")
  }
  $(".money").html(money)
  console.log(money)
});
