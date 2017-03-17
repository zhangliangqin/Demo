$(function() {
  var moveLeft = 20;
  var moveDown = 10;

  $('a#trigger').hover(function(e) {
    $('div#pop-up').show();
	
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
  }, function() {
    $('div#pop-up').hide();
  });

  $('a#trigger').mousemove(function(e) {
    $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
  
  $("a#trigger").click(function(){
		
	    var reviewDiv = $("<div></div>");
	//	reviewDiv.attr("id","reviewCtId");
		reviewDiv.addClass("reviewContainer");
	//	reviewDiv.add("span");
		reviewDiv.text("Review list div");
		reviewDiv.appendTo('body');
		$(".reviewContainer").show();
	//    reviewDiv.addclass();
	//	$(".content").css("background-color","yellow");
		console.log("mouse click end");
	});

});