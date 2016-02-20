jQuery(document).ready(function ($) {
    
    // This browser supports JS
    $('html').removeClass('no-js').addClass('js');

    // Mobile menu and sidbar toggle
    $( "#nav-toggle" ).click(function() {
        $( "#sidebar" ).slideUp( "slow");
        $( "#menu" ).slideToggle( "slow");
    });
    $('#sidebar-toggle').click(function() {  
        $( "#menu" ).slideUp( "slow");
        $( "#sidebar" ).slideToggle( "slow");
    });
    
}
);