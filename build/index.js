"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _context;
console.log('Hello world');

// ----Array.form
var array = [1, 2, 3];
(0, _forEach["default"])(_context = (0, _from["default"])(array)).call(_context, function ($item) {
  console.log($item);
});
// ----includes api
var array2 = [1, 2, 3, 4];
(0, _includes["default"])(array2).call(array2, 5);
// ----Promise
_promise["default"].resolve(1)["finally"]();
// ----map
var arr = [1, 2, 3];
var arr2 = (0, _map["default"])(arr).call(arr, function (item) {
  return Math.pow(item, 2);
});
console.log(arr2);
function DiceRoll() {
  var getRandomNumber = function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  };
  var _useState = useState(getRandomNumber()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    num = _useState2[0],
    setNum = _useState2[1];
  var handleClick = function handleClick() {
    var newNum = getRandomNumber();
    setNum(newNum);
  };
  return /*#__PURE__*/React.createElement("div", null, "Your dice roll: ", num, ".", /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Click to get a new number"));
}
;