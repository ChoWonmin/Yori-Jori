'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var main = new function () {

    var that = this;

    var cookList = void 0;
    var currentList = void 0;

    this.init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return Util.loadJson(FOOD_JSON);

                    case 2:
                        cookList = _context.sent;

                        currentList = cookList;

                        console.log(cookList);

                        that.drawCookList(cookList);
                        that.addModal();

                        that.addSearchAction();

                    case 8:
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
    };

    this.addModal = function () {
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
        var temp = _.filter(list, function (v) {
            return v.name.indexOf(word) !== -1;
        });

        list = {};
        _.forEach(temp, function (t) {
            return list[t.id] = t;
        });
        console.log(list);

        return list;
    };

    this.addSearchAction = function () {
        console.log('add SearchAction');

        var $searchBar = $('.search_bar_input');

        $searchBar.keyup(function () {
            var word = $searchBar.val();

            var tmp = that.searchByName(currentList, word);

            that.drawCookList(tmp);
            that.addModal();
        });
    };
}();
main.init();