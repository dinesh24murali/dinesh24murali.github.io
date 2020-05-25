webpackHotUpdate("static/development/pages/blog/View_Encapsulation_in_Angular_9.js",{

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppConstants = /*#__PURE__*/function () {
  function AppConstants() {
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
  }

  _createClass(AppConstants, [{
    key: "getArticleUrl",
    value: function getArticleUrl(id) {
      return "/blog/".concat(id, ".html");
    }
  }]);

  return AppConstants;
}();

var constants = new AppConstants();
module.exports = constants;

/***/ })

})
//# sourceMappingURL=View_Encapsulation_in_Angular_9.js.41347eab608eca0dac56.hot-update.js.map