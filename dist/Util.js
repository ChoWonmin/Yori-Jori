"use strict";

var Util = new function () {
    this.loadJson = function (url) {
        return $.get(url);
    };
}();