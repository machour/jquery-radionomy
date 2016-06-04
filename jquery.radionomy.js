(function($) {

    $.fn.radionomy = function(options, breakpoints) {

        var sizes = {
            medium: [300, 389],
            mobile: [320, 90],
            horizontal: [728, 90]
        };

        var queryParams = $.extend({
            url: "",
            type: "horizontal",
            autoplay: 0,
            volume: 50,
            color1: "#f1ffc4",
            color2: "#ff844f",
            version: 1.1,
            language: "en",
            referer: document.referrer
        }, options);

        var originalType = queryParams.type;

        breakpoints = breakpoints || {};

        var url = getSrc(queryParams);
        var attrs = {
            class: 'radionomy-player',
            style: 'padding: 0; margin: 0; border: 0; height: ' + sizes[queryParams.type][1] + 'px;width:' + sizes[queryParams.type][0] + 'px;',
            src: url
        };
        var iframe = $('<iframe/>', attrs);

        if (!$.isEmptyObject(breakpoints)) {
            $(window).resize(function () {
                var cWidth = document.body.clientWidth;
                var type = originalType;
                for (var bp in breakpoints) {
                    console.log("bp: " + bp + " / " + cWidth);
                    if (cWidth <= bp) {
                        type = breakpoints[bp];
                        break;
                    }
                }
                if (queryParams.type !== type) {
                    queryParams.type = type;
                    iframe.attr('src', getSrc(queryParams));
                    iframe.css('width', sizes[type][0]).css('height', sizes[type][1]);
                }
            }).resize();
        }
        return this.replaceWith(iframe);
    };

    function getSrc(settings)
    {
        return "https://www.radionomy.com/" + settings.language + "/radio/" + settings.url + "/export/?" + $.param(settings);
    }

}( jQuery ));