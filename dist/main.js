'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//main.js
var main = new function () {

    var that = this;

    var cookList = void 0;
    var OriginalList = void 0;
    var tmpList = void 0;

    var difficulty_low = $('#d-low');
    var difficulty_mid = $('#d-mid');
    var difficulty_high = $('#d-high');
    var $searchBar = $('.search_bar_input');
    var $timeMinBar = $('#limit_time_min');
    var $timeMaxBar = $('#limit_time_max');
    var $kcalMinBar = $('#limit_kcal_min');
    var $kcalMaxBar = $('#limit_kcal_max');

    var word = void 0;
    var timeMin = void 0;
    var timeMax = void 0;
    var kcalMin = void 0;
    var kcalMax = void 0;

    this.init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Util.loadJson(FOOD_JSON);

                    case 2:
                        cookList = _context.sent;

                        OriginalList = cookList;
                        tmpList = OriginalList;

                        that.drawCookList(OriginalList);
                        that.addModal();

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    this.drawCookList = function (list) {
        var $cookList = $('.cookList');

        $cookList.children('*').remove();

        _.forEach(list, function (cook, i) {

            $('<div class="cookItem" cookId="' + cook.id + '">\n             <img class="image" src="' + (MAIN_IMAGE_PATH + cook.id + '.jpg') + '">\n             <div class="text">\n                <div class="name">' + cook.name + '</div>\n                <div class="ingredient">' + cook.ingredient_main + '</div>\n             </div>\n           </div>').appendTo($cookList);
        });

        console.log("drawCook Finished! " + Object.keys(list).length);
    };
    this.addModal = function () {
        console.log("addModal Start");
        var $cookItem = $('.cookItem');
        $cookItem.click(function () {
            var id = $(this).attr('cookId');

            $('body').css('overflow', 'hidden');
            $('.cookModal-container').css('display', 'block');
            $('.cookModal').load('/cook?id=' + id);
        });

        $('.close-btn').click(function () {
            $('body').css('overflow', 'auto');
            $('.cookModal-container').css('display', 'none');
            $('.cookModal').children('*').remove();
        });
    };
    this.searchByName = function (list, word) {
        if (word === undefined) {
            word = "";
        }
        console.log("searchByName 시작");
        console.log("word: " + word);
        var temp = _.filter(list, function (v) {
            return v.name.indexOf(word) !== -1;
        });

        list = {};
        _.forEach(temp, function (t) {
            return list[t.id] = t;
        });
        console.log(list);
        console.log("search By name recipe: " + Object.keys(list).length);

        return list;
    };

    this.searchByKcal = function (list, min, max) {
        if (min === undefined || min === "") {
            min = "0";
        }

        if (max === undefined || max === "") {
            max = "1267";
        }

        var temp = _.filter(list, function (v) {
            return v.kcal >= parseInt(min) && v.kcal <= parseInt(max);
        });

        list = {};
        _.forEach(temp, function (t) {
            return list[t.id] = t;
        });

        return list;
    };

    this.searchByTime = function (list, min, max) {
        if (min === undefined || min === "") {
            min = "0";
        }

        if (max === undefined || max === "") {
            max = "540";
        }
        console.log("searchByTime 시작");
        console.log("min: " + min + " max: " + max);
        var temp = _.filter(list, function (v) {
            return v.time >= parseInt(min) && v.time <= parseInt(max);
        });

        list = {};
        _.forEach(temp, function (t) {
            return list[t.id] = t;
        });
        console.log(list);
        console.log("search By time recipe: " + Object.keys(list).length);

        return list;
    };

    $searchBar.keyup(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log("KeyUp start");
                        _context2.next = 3;
                        return $searchBar.val();

                    case 3:
                        word = _context2.sent;

                        console.log("KeyUp finish");
                        that.updateList();

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    })));

    $timeMinBar.keyup(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        console.log("TimeMin KeyUp Start!");
                        _context3.next = 3;
                        return $timeMinBar.val();

                    case 3:
                        timeMin = _context3.sent;

                        console.log("TimeMin KeyUp Finish!");
                        that.updateList();

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    })));

    $timeMaxBar.keyup(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        console.log("TimeMax KeyUp Start!");
                        _context4.next = 3;
                        return $timeMaxBar.val();

                    case 3:
                        timeMax = _context4.sent;

                        console.log("TimeMax KeyUp Finish!");
                        that.updateList();

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    })));

    $kcalMinBar.keyup(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        console.log("kcalMin KeyUp Start!");
                        _context5.next = 3;
                        return $kcalMinBar.val();

                    case 3:
                        kcalMin = _context5.sent;

                        console.log("kcalMin KeyUp Finish!");
                        that.updateList();

                    case 6:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    })));

    $kcalMaxBar.keyup(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        console.log("kcalMax KeyUp Start!");
                        _context6.next = 3;
                        return $kcalMaxBar.val();

                    case 3:
                        kcalMax = _context6.sent;

                        console.log("kcalMax KeyUp Finish!");
                        that.updateList();

                    case 6:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    })));

    this.filter_difficulty = function (list) {

        var status = 1;

        if (difficulty_low.attr("value") === "checked") {
            status *= 2;
        } else {
            console.log("체크 X. d-low");
        }

        if (difficulty_mid.attr("value") === "checked") {
            status *= 3;
        } else {
            console.log("체크 X. d-mid");
        }

        if (difficulty_high.attr("value") === "checked") {
            status *= 5;
        } else {
            console.log("체크 X. d-high");
        }
        console.log(status);

        var temp = _.filter(list, function (v) {
            return status % parseInt(v.difficulty) === 0;
        });

        list = {};
        _.forEach(temp, function (t) {
            return list[t.id] = t;
        });

        tmpList = list;
        return list;
    };

    difficulty_low.click(function () {

        if (difficulty_low.attr("value") === "checked") {
            difficulty_low.attr("value", "unchecked");
            $(this).css('background-color', 'white');
        } else {
            difficulty_low.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("low: " + difficulty_low.attr("value"));
        that.updateList();
    });

    difficulty_mid.click(function () {

        if (difficulty_mid.attr("value") === "checked") {
            difficulty_mid.attr("value", "unchecked");
            $(this).css('background-color', 'white');
        } else {
            difficulty_mid.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("mid: " + difficulty_mid.attr("value"));
        that.updateList();
    });

    difficulty_high.click(function () {

        if (difficulty_high.attr("value") === "checked") {
            difficulty_high.attr("value", "unchecked");
            $(this).css('background-color', 'white');
        } else {
            difficulty_high.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("high: " + difficulty_high.attr("value"));
        that.updateList();
    });

    this.filter_time = function (list) {

        return list;
    };

    this.filter_kcal = function (list) {

        return list;
    };

    this.updateList = function () {

        tmpList = that.searchByName(OriginalList, word);
        tmpList = that.filter_difficulty(tmpList);
        tmpList = that.searchByKcal(tmpList, kcalMin, kcalMax);
        tmpList = that.searchByTime(tmpList, timeMin, timeMax);

        that.drawCookList(tmpList);
        that.addModal();
    };
}();
main.init();