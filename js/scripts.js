$(document).ready(function() {

    var ranks = ["ace",2,3,4,5,6,7,8,9,10,"jack","queens","king"];
    var suits = ["clubs","diamonds","spades","hearts"];

    suits.forEach(function(suit){
      ranks.forEach(function(rank){
        $(".result").text(function(){
                $("ul").append("<li>"+rank + " of "+ suit+"</li>");
            });
      });
    });

});
