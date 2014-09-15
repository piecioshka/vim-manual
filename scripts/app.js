(function ($) {
    'use strict';

    var keysMap = {
        75: 40, // up
        74: 38 // down
    };

    function resolveHandler(evt) {
        var scrollPosition = $(window).scrollTop();

        switch (keysMap[evt.keyCode]) {
            case 40:
                $(window).scrollTop(scrollPosition - 40);
                break; // up
            case 38:
                $(window).scrollTop(scrollPosition + 40);
                break; // down
        }
    }

    function useVimMode(evt) {
        if (keysMap.hasOwnProperty(String(evt.keyCode))) {
            resolveHandler(evt);
        }
    }

    function vimModeEnable() {
        $(window).on('keydown', useVimMode);
    }

    vimModeEnable();
}(Zepto));
