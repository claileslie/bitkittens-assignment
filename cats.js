$(function() {
  $('.summon-cats').on('click', function(){
    console.log("MROWWWW")
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      $(data.cats).each(function(){
        var cat = $('<img>').attr('src', this.photo).attr('alt','Photo of: ' + this.name)
        $('.cat-box').html(cat)
      });
    });
  });
});
