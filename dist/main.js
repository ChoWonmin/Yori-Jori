'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log('main');

var main = new (_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var cookList, $cookItem;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Util.loadJson(FOOD_JSON);

                case 2:
                    cookList = _context.sent;


                    _.forEach(cookList, function (cook, i) {
                        var $cookList = $('.cookList');

                        if (i < 10000060) $('<div class="cookItem" cookId="' + cook.id + '">\n             <img class="image" src="' + (MAIN_IMAGE_PATH + cook.id + '.jpg') + '">\n             <div class="text">\n                <div class="name">' + cook.name + '</div>\n                <div class="ingredient">' + cook.ingredient_main + '</div>\n             </div>\n           </div>').appendTo($cookList);
                    });

                    $cookItem = $('.cookItem');

                    $cookItem.click(function () {
                        var id = $(this).attr('cookId');

                        $('.cookModal-container').css('display', 'block');
                        $('.cookModal').load('/cook?id=' + id);
                    });

                    $('.close-btn').click(function () {
                        $('.cookModal-container').css('display', 'none');
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})))();