webpackHotUpdate("static/development/pages/blogs/[id].js",{

/***/ "./pages/blogs/[id].js":
/*!*****************************!*\
  !*** ./pages/blogs/[id].js ***!
  \*****************************/
/*! exports provided: default, getInitialProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-disqus-comments */ "./node_modules/react-disqus-comments/build/main.js");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_disqus_comments__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gist */ "./node_modules/react-gist/es/index.js");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-adsense */ "./node_modules/react-adsense/lib/index.js");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_adsense__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Share */ "./components/Share.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/utils */ "./services/utils.js");
/* harmony import */ var _components_RecentArticles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/RecentArticles */ "./components/RecentArticles.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Blog(props) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query;

  var id = query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    description: '',
    categoryId: '',
    readTimeMin: 0,
    date: Object(_services_utils__WEBPACK_IMPORTED_MODULE_11__["getDate"])(),
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      blog = _useState2[0],
      setBlog = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      recent = _useState4[0],
      setRecent = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!id) return;
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["baseUrl"], "/api/articles/").concat(id, ".json")).then(function (res) {
      if (res) {
        var ress = res;
        setBlog({
          content: res.data.content && res.data.content.length ? res.data.content : [],
          title: res.data.title,
          description: res.data.description,
          date: Object(_services_utils__WEBPACK_IMPORTED_MODULE_11__["getDate"])(res.data.date),
          readTimeMin: res.data.readTimeMin,
          categoryId: res.data.categoryId
        });
      }

      window.scrollTo(0, 0);
    })["catch"](function (err) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/', '/', {
        shallow: false
      });
    });
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_services_utils__WEBPACK_IMPORTED_MODULE_11__["getRecentArticles"])().then(function (res) {
      if (res) setRecent(res.data && res.data.length ? res.data : []);
    })["catch"](function (err) {});
  }, []);

  var handleNewComment = function handleNewComment() {};

  var renderBlog = function renderBlog(content) {
    if (!content || content.length <= 0) return null;
    var blog = content.map(function (line, index) {
      if (line.isGist && line.gist) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gist__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        className: "mt-3 mb-3",
        id: line.gist
      });
      if (line.isMainHeading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        }
      });
      if (line.isSubHeading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        }
      });
      if (line.isCodeSection) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "code-section",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        }
      });
      if (line.isQuoted) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quote",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        }
      });
    });
    return blog;
  };

  var printBlog = renderBlog(blog.content);
  var shareUrls = {
    linkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.dineshmg.com/".concat(id, "&title=Learn%20Web%20development&summary=&source="),
    facebook: "https://www.facebook.com/sharer/sharer.php?u=https%3A//www.dineshmg.com/".concat(id),
    twitter: "https://twitter.com/home?status=https%3A//www.dineshmg.com/".concat(id)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: blog.description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "blog-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-page__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_10__["default"], {
    urls: shareUrls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_adsense__WEBPACK_IMPORTED_MODULE_7___default.a.Google, {
    client: "ca-pub-3929370842605036",
    slot: "3072497734",
    format: "auto",
    responsive: "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading-text"
  }, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, Object(_services_utils__WEBPACK_IMPORTED_MODULE_11__["printDate"])(blog.date), "\xA0-\xA0", blog.readTimeMin, " mins read", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "share"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    className: "mr-5",
    rel: "noopener noreferrer",
    href: shareUrls.linkedIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    className: "mr-5",
    rel: "noopener noreferrer",
    href: shareUrls.facebook
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    className: "mr-5",
    rel: "noopener noreferrer",
    href: shareUrls.twitter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents col-12"
  }, printBlog), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recent"
  }, "Recent Articles:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RecentArticles__WEBPACK_IMPORTED_MODULE_12__["default"], {
    articles: recent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_5___default.a, {
    shortname: "shadowfalls-github-io-webtutor-1",
    identifier: blog.title + '123',
    title: blog.title,
    onNewComment: handleNewComment
  })))))));
}
function getInitialProps(_ref) {
  var Component, ctx, pageProps;
  return regeneratorRuntime.async(function getInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx, pageProps = _ref.pageProps;
          console.log(ctx);
          console.log(pageProps);
          console.log('-----------------------------------------------------------------------');
          return _context.abrupt("return", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=[id].js.fa5ec07aa8e57d293f5f.hot-update.js.map