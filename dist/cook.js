'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var cook = new function () {
    var currentIndex = void 0;
    var cookCanvas = $('.cook-wrap');
    //const processCanvasList = $('.process-wrap');

    this.init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        $('.start-btn').click(function () {
                            cookCanvas.attr('display', 'none');
                            currentIndex = 0;

                            //processCanvasList[currentIndex].attr('display','block');
                        });

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}();

cook.init();