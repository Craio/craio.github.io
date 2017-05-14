$(document).ready(function() {
    'use strict';
    var demangle = baffle(".demangle");
    demangle.set({
        characters: '▓░█ ▒░▒▓░ ▒░░▓> ▒█▓ █░><▒ █▒█▓ ▓░/ ▓▓/█ █▓▒█+-#@0',
    });
    demangle.reveal(6283185307179586476925286766559);
});
