$(function(){
  $('.company__person').on('mouseover',function(){
  console.log("mouse over active");
  //create a variable for the name attribute
  var name = $(this).attr('name');
  console.log(name);
  console.log(this);
  console.log($('.company__person-name'));
  document.getElementsByClassName('.company__person-name').innerHTML = name;
});
});
