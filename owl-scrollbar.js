;(function ( $, window, document, undefined ) {
    /**
     * @param carousel
     * @constructor
     */
    var Scroller = function(carousel){
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if(e.namespace && !this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
            }, this),
            'drag.owl.carousel' : $.proxy(function(e) {
                if(e.namespace && this._initialized) {
                    this.dragHandler(e);
                }
            }, this)
        };

        // Merge Options
        this._core.options = $.extend({}, Scroller.Defaults, this._core.options);
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Scroller.Defaults = {
        scrollBar    : false,
        scrollWrapId : "owl-carousel-scrollWrap",
        scrollBarClass : "owl-carousel-scrollBar"
    };


    /**
     * Experimenting.
     * @protected
     */
    Scroller.prototype.initialize = function() {
        // @todo check if using nav.
        var settings = this._core.settings,
            element  = this.$element,
            dragBar  = $("<div />"),
            dragWrap = $("<div />", {
                id: settings.scrollWrapId
            });

        // @todo remove style.
        if(settings.scrollBar) {
            dragBar
                .css({position: "absolute", width : "100px", height: "10px", "background-color": "red"})
                .addClass(settings.scrollBarClass)
                .appendTo(dragWrap)
                .on('mousedown', $.proxy(function(e) {
                    this.barScroll(e);
                }, this));

            dragWrap.appendTo($(element));
        }
    };

    /**
     * Scroll bar drag handler.
     * @param e
     * @protected
     */
    Scroller.prototype.barScroll = function(e) {
        var $dragging = null;
        var canDrag   = true;
        var el_w      = $(e.currentTarget).outerWidth();

        // Experiments
        $(e.currentTarget).on("mousemove", $.proxy(function(e) {
            if(canDrag) {
                if ($dragging) {
                    $dragging.offset({
                        left: e.pageX - el_w / 2
                    });
                }
                $dragging = $(e.target);
            }
        }, this))
        .on('mouseup', $.proxy(function(e) {
            canDrag = false;
        }, this));
    };

    Scroller.prototype.dragDirection = function() {

    };

    Scroller.prototype.dragSpeed = function() {

    };

    Scroller.prototype.dragHandler = function(e) {
        console.log(e.currentTarget);
        console.log(this._core.maximum(false));
        console.log(this._core.current())
    };

    Scroller.prototype.destroy = function(){
        // @todo
    };

    $.fn.owlCarousel.Constructor.Plugins.Scroller = Scroller;

})( window.Zepto || window.jQuery, window,  document );