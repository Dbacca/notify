$(function(){
  $('.company__person').on('mouseover',function(){
    //console.log("mouse over active");
    //create a variable for the name attribute
    var name = $(this).attr('name');
    console.log(name);
    $('.company__person-name').text(name);
  });
  $('.company__person').on('mouseout',function(){
      $('.company__person-name').html('&nbsp;');
  });
});
