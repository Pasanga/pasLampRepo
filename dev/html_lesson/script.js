$(function(){
  
  
  $('a[href^=#]').click(function(){
		var speed = 1000;
        var headerHight = 30;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
  
  
  
    
    
  var stateClose =false;
   $('#read-more').click(
      function(){
          if (true == stateClose)
       　   {
               $('#read-more a').text('閉じる');
               $('#more-text').slideDown(1000);
               stateClose = false;
            }
            else
            {
               $('#read-more a').text('もっと詳しく');
               $('#more-text').slideUp(800);
               stateClose = true;
            }
      }
   );

//    $('#read-more').click(
//      function(){
//        $('#read-more a').text('aaa');
//        $('#more-text').hide();
//      }
//    );
//
//    $('.more').toggleClass('.moremore');
    
    
    $(".carousel").carousel();
    
});