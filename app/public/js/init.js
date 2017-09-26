(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

// Banner rotate effect
jQuery(function() {
    'use strict';

    var thingsToCareAbout = [
        'Business',
        'Civil Services',
        'Culture and Recreation',
        'Education',
        'Environment',
        'Health',
        'Housing and Development',
        'Public Safety',
        'Social Services',
        'Transportation'
    ].sort(function() {
        return Math.random() >= 0.5;
    });

    var currentThingIndex = 0;

    function rotateThingsToCareAbout() {
        jQuery('#thingsToImpact').text(thingsToCareAbout[currentThingIndex++]);
        if (currentThingIndex === thingsToCareAbout.length) {
            currentThingIndex = 0;
        }

        setTimeout(rotateThingsToCareAbout, 500);
    };

    rotateThingsToCareAbout();
});