$(function(){
    $('.home').click(function(){
        $('#home').show();
    });
    $('.tokutyou-tag').click(function(){
        $('#feature').show();
    });
    $('.ryoukin-tag').click(function(){
        $('#ryoukin').show();
    });
    $('.koramu-tag').click(function(){
        $('#column').show();
    });
    $('.otoiawase-tag').click(function(){
        $('#otoi').show();
    });
    
    
    $('#read-more').click(function(){
        $('#read-close').show();
        $('#more-text').show();
        $(this).hide();
    });
    
    $('#read-close').click(function(){
        $('#read-more').show();
        $('#more-text').hide();
        $(this).hide();
    });
    
    
    $(".carousel").carousel();
    
    
    
});