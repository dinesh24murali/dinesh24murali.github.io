webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_social_sharing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-social-sharing */ "./node_modules/react-social-sharing/dist-es6/index.js");
/* harmony import */ var react_social_sharing__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gist */ "./node_modules/react-gist/es/index.js");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-adsense */ "./node_modules/react-adsense/lib/index.js");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_adsense__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_constants_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/utils */ "./services/utils.js");
/* harmony import */ var _components_RecentArticles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/RecentArticles */ "./components/RecentArticles.js");
/* harmony import */ var _components_VerticalAd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/VerticalAd */ "./components/VerticalAd.js");


var _jsxFileName = "/home/dinesh/work_dump/my_projects/space_blog/pages/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












function Blogs() {
  var _this = this;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query;

  var id = query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: '',
    description: '',
    categoryId: '',
    readTimeMin: 0,
    date: Object(_services_utils__WEBPACK_IMPORTED_MODULE_10__["getDate"])(),
    content: []
  }),
      blog = _useState[0],
      setBlog = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      recent = _useState2[0],
      setRecent = _useState2[1];

  var shareLinks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    provider: 'linkedin',
    url: "https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["domain"])
  }]),
      socialLinks = _useState3[0],
      setSocialLinks = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!id) return;
    Object(_services_utils__WEBPACK_IMPORTED_MODULE_10__["getBlog"])(id).then(function (res) {
      if (res) {
        var data = res.data && res.data.data ? res.data.data : res.data ? res.data : {};
        setBlog({
          content: data.content && data.content.length ? data.content : [],
          title: data.title,
          description: data.description,
          date: Object(_services_utils__WEBPACK_IMPORTED_MODULE_10__["getDate"])(data.date),
          readTimeMin: data.readTimeMin,
          categoryId: data.categoryId
        });
      }

      window.scrollTo(0, 0);
    })["catch"](function () {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/', '/', {
        shallow: false
      });
    });
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_utils__WEBPACK_IMPORTED_MODULE_10__["getRecentArticles"])().then(function (res) {
      if (res) setRecent(res.data && res.data.length ? res.data : []);
    })["catch"](function () {});
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /**
     * Fetching the links to create own social share links
     */
    if (shareLinks.current && id && _constants_constants__WEBPACK_IMPORTED_MODULE_8__["domain"]) {
      var blocks = shareLinks.current.querySelectorAll('a');
      var links = JSON.parse(JSON.stringify(socialLinks));

      for (var i = 0; i < blocks.length; i += 1) {
        if (blocks[i].href) {
          if (blocks[i].href.includes('twitter')) {
            links.push({
              provider: 'twitter',
              url: blocks[i].href
            });
          } else if (blocks[i].href.includes('facebook')) {
            links.push({
              provider: 'facebook',
              url: blocks[i].href
            });
          }
        }
      }

      setSocialLinks(links);
    }
  }, [shareLinks, id, _constants_constants__WEBPACK_IMPORTED_MODULE_8__["domain"]]); // eslint-disable-line

  var renderBlog = function renderBlog(content) {
    if (!content || content.length <= 0) return null;
    var bloger = content.map(function (line, index) {
      if (line.isImage && line.imageUrl) {
        return __jsx("div", {
          className: "d-flex justify-content-center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }
        }, __jsx("img", {
          src: line.imageUrl,
          alt: "",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }
        }));
      }

      if (line.isGist && line.gist) return __jsx(react_gist__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        className: "mt-3 mb-3",
        id: line.gist,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 44
        }
      });
      if (line.isMainHeading) return __jsx("div", {
        className: "main-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 38
        }
      });
      if (line.isSubHeading) return __jsx("div", {
        className: "sub-heading",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 37
        }
      });
      if (line.isCodeSection) return __jsx("div", {
        className: "code-section",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 38
        }
      });
      if (line.isQuoted) return __jsx("div", {
        className: "quote",
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 33
        }
      });
      return __jsx("div", {
        key: index,
        dangerouslySetInnerHTML: {
          __html: line.html
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 14
        }
      });
    });
    return bloger;
  };

  var onSocialShare = function onSocialShare(url) {
    if (url) window.open(url, '', 'width=500,height=500');
  };

  var printBlog = renderBlog(blog.content);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, blog.title), __jsx("meta", {
    name: "description",
    content: blog.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), __jsx("span", {
    className: "blog-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "blog-page__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(_components_VerticalAd__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 header-ad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(react_adsense__WEBPACK_IMPORTED_MODULE_7___default.a.Google, {
    client: _constants_constants__WEBPACK_IMPORTED_MODULE_8__["adClientId"],
    slot: "3072497734",
    format: "auto",
    responsive: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "heading-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, blog.title), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, Object(_services_utils__WEBPACK_IMPORTED_MODULE_10__["printDate"])(blog.date), "\xA0-\xA0", blog.readTimeMin, ' ', "mins read"), __jsx("ul", {
    className: "share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("li", {
    ref: shareLinks,
    className: "hide-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, __jsx(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__["Twitter"], {
    link: "https://www.".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["domain"], "/").concat(id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }), __jsx(react_social_sharing__WEBPACK_IMPORTED_MODULE_5__["Facebook"], {
    link: "https://www.".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["domain"], "/").concat(id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  })), socialLinks.map(function (links) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, __jsx("a", {
      "aria-label": links.provider,
      style: {
        cursor: 'pointer'
      },
      className: "mr-5",
      rel: "noopener noreferrer",
      onClick: function onClick() {
        return onSocialShare(links.url);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fab fa-".concat(links.provider),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    })));
  }))), __jsx("div", {
    className: "contents col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, printBlog), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx(react_adsense__WEBPACK_IMPORTED_MODULE_7___default.a.Google, {
    client: _constants_constants__WEBPACK_IMPORTED_MODULE_8__["adClientId"],
    slot: "9591641415",
    format: "auto",
    responsive: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "recent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, "You might be interested in:")), __jsx(_components_RecentArticles__WEBPACK_IMPORTED_MODULE_11__["default"], {
    articles: recent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }))))));
}

Blogs.getInitialProps = function _callee(_ref) {
  var Component, pageProps;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, pageProps = _ref.pageProps;
          return _context.abrupt("return", __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 10
            }
          })));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

})
//# sourceMappingURL=blog.js.706d86b8127f34df3310.hot-update.js.map