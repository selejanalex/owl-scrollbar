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
                this.draw();
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
        scrollBar: false
    };


    Scroller.prototype.initialize = function() {
        // @todo
    };

    Scroller.prototype.destroy = function(){
        // @todo
    };

    Scroller.prototype.draw = function() {
        // @todo
    };

    Scroller.prototype.scroll = function() {
        // @todo
    };

    $.fn.owlCarousel.Constructor.Plugins.Scroller = Scroller;

})( window.Zepto || window.jQuery, window,  document );