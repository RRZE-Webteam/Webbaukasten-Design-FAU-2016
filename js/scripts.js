jQuery(document).ready(function ($) {

    // This browser supports JS
    $('html').addClass('js');

	// Add nav-toggle and sidebar-toggle
	var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
	var kopf = document.getElementById("kopf");
	if (windowWidth < 1024) {
		var navtoggle = document.createElement("a");
		navtoggle.innerHTML = "<div></div><div></div><div></div>";
		navtoggle.setAttribute('id', 'nav-toggle');
		navtoggle.setAttribute('class', 'hide-desktop');
		kopf.appendChild(navtoggle);
	}
	if (windowWidth < 720) {
		var sbtoggle = document.createElement("a");
		sbtoggle.setAttribute('id', 'sidebar-toggle');
		sbtoggle.setAttribute('class', 'hide-desktop');
		kopf.appendChild(sbtoggle);
	}

	// Mobile menu and sidbar toggle
    $( "#nav-toggle" ).click(function() {
        $( "#sidebar" ).slideUp( "slow");
        $( "#menu" ).slideToggle( "slow");
		$( "#hauptmenu" ).slideToggle( "slow");
    });
    $('#sidebar-toggle').click(function() {
        $( "#menu" ).slideUp( "slow");
        $( "#hauptmenu" ).slideUp( "slow");
        $( "#sidebar" ).slideToggle( "slow");
    });

	// Responsive tables
	$("#content table").wrap('<div class="table-wrapper" />').wrap('<div class="scrollable" />');

});