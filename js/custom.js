(function($) {

    "use strict";

    // REMOVE # FROM URL
    $( 'a[href="#"]' ).click( function(e) {
        e.preventDefault();
    });


})(window.jQuery);