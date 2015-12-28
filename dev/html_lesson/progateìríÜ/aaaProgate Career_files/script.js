$(function(){
    $('#read-more').click(function(){
        $('#more-close').show();
        $('#more-text').show();
        $(this).hide();
    });
    
    $('#more-close').click(function(){
        $('#read-more').show();
        $('#more-text').hide();
        $(this).hide();
    });
    
    
    
    
    
    
});