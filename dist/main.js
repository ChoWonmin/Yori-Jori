'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log('main');

var main = new (_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var cookList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return Util.loadJson('/data/food_origin.json');

                case 2:
                    cookList = _context.sent;


                    console.log(cookList);

                    return _context.abrupt('return');

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})))();