webpackHotUpdate("static/development/pages/index.js",{

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleUrl = getArticleUrl;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppConstants = function AppConstants() {
  _classCallCheck(this, AppConstants);

  _defineProperty(this, "baseUrl", 'https://raw.githubusercontent.com/shadowfalls/mirror/master/src');

  _defineProperty(this, "routeLinks", {
    categories: '/topics',
    about: '/about',
    blogListPage: '/blogs',
    blogPage: '/blog'
  });

  _defineProperty(this, "months", {
    0: 'January',
    1: 'Febuary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  });

  _defineProperty(this, "categoryTypes", '_categorieTypes');

  _defineProperty(this, "recentArticles", '_recentArticlesJson');
};

function getArticleUrl(id) {
  return "/blog/".concat(id);
}

var constants = new AppConstants();
module.exports = constants;

/***/ })

})
//# sourceMappingURL=index.js.1acf8586b9a428ea8b75.hot-update.js.map