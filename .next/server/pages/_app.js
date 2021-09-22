"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./next-seo.config.ts":
/*!****************************!*\
  !*** ./next-seo.config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  openGraph: {\n    type: 'website',\n    locale: 'en_US',\n    url: 'https://curiousplaces.com.br',\n    site_name: 'Curious Places'\n  },\n  twitter: {\n    handle: '@clarxyz',\n    site: '@site',\n    cardType: 'summary_large_image'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxJQUFJLEVBQUUsU0FERztBQUVUQyxJQUFBQSxNQUFNLEVBQUUsT0FGQztBQUdUQyxJQUFBQSxHQUFHLEVBQUUsOEJBSEk7QUFJVEMsSUFBQUEsU0FBUyxFQUFFO0FBSkYsR0FERTtBQU9iQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsTUFBTSxFQUFFLFVBREQ7QUFFUEMsSUFBQUEsSUFBSSxFQUFFLE9BRkM7QUFHUEMsSUFBQUEsUUFBUSxFQUFFO0FBSEg7QUFQSSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9uZXh0LXNlby5jb25maWcudHM/YjhlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIG9wZW5HcmFwaDoge1xuICAgIHR5cGU6ICd3ZWJzaXRlJyxcbiAgICBsb2NhbGU6ICdlbl9VUycsXG4gICAgdXJsOiAnaHR0cHM6Ly9jdXJpb3VzcGxhY2VzLmNvbS5icicsXG4gICAgc2l0ZV9uYW1lOiAnQ3VyaW91cyBQbGFjZXMnXG4gIH0sXG4gIHR3aXR0ZXI6IHtcbiAgICBoYW5kbGU6ICdAY2xhcnh5eicsXG4gICAgc2l0ZTogJ0BzaXRlJyxcbiAgICBjYXJkVHlwZTogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwidXJsIiwic2l0ZV9uYW1lIiwidHdpdHRlciIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./next-seo.config.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../next-seo.config */ \"./next-seo.config.ts\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/anaclaragarcia/Desktop/boilerplate/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"google-site-verification\",\n        content: \"8kDtWUmUQEh7QXoj_shRaxcgYAVpHs_YQ7TeniN0kmI\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/img/icon-512.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/img/icon-512.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"manifest\",\n        href: \"/manifest.json\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css\",\n        integrity: \"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==\",\n        crossOrigin: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_3__.default), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.GlobalStyles, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n      color: \"#04d361\",\n      startPosition: 0.3,\n      stopDelayMs: 200,\n      height: 4.5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFFQSxTQUFTSyxHQUFULENBQWE7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWIsRUFBaUQ7QUFDL0Msc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLDBCQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBTSxXQUFHLEVBQUMsZUFBVjtBQUEwQixZQUFJLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBTSxXQUFHLEVBQUMsa0JBQVY7QUFBNkIsWUFBSSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU0sV0FBRyxFQUFDLFVBQVY7QUFBcUIsWUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsa0RBRlA7QUFHRSxpQkFBUyxFQUFDLGlHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRSw4REFBQyxnREFBRCxvQkFBZ0JKLHFEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBaUJFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUFrQkUsOERBQUMsMkRBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLG1CQUFhLEVBQUUsR0FGakI7QUFHRSxpQkFBVyxFQUFFLEdBSGY7QUFJRSxZQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLGVBd0JFLDhEQUFDLFNBQUQsb0JBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBLGtCQURGO0FBNEJEOztBQUVELGlFQUFlRixHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5leHROcHJvZ3Jlc3MgZnJvbSAnbmV4dGpzLXByb2dyZXNzYmFyJ1xuXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL25leHQtc2VvLmNvbmZpZydcblxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbCdcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIjhrRHRXVW1VUUVoN1FYb2pfc2hSYXhjZ1lBVnBIc19ZUTdUZW5pTjBrbUlcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1nL2ljb24tNTEyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjcuMS9kaXN0L2xlYWZsZXQuY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTIteG9kWkJOVEM1bjE3WHQyYXRUUHVFMUh4alZNU3ZMVlc5b2NxVUtMc0NDNUNYZGJxQ21ibEFzaE9NQVM2L2tlcXEvc01aTVoxOXNjUjRQc1pDaFNSN0E9PVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDxOZXh0TnByb2dyZXNzXG4gICAgICAgIGNvbG9yPVwiIzA0ZDM2MVwiXG4gICAgICAgIHN0YXJ0UG9zaXRpb249ezAuM31cbiAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXs0LjV9XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJOZXh0TnByb2dyZXNzIiwiRGVmYXVsdFNlbyIsIlNFTyIsIkdsb2JhbFN0eWxlcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyles\": () => (/* binding */ GlobalStyles)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\":root{--highlight:#04d361;--background:#06092B;--white:#f1f2f3;--container:100rem;--small:1.5rem;--medium:3rem;--large:5rem;}*{margin:0;padding:0;box-sizing:border-box;}html{font-size:62.5%;}html,body,#__next{height:100%;background:var(--background);color:var(--white);}body{font-family:--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}p,a{font-size:2rem;line-height:var(--medium);}a{color:var(--highlight);}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsWUFBWSxHQUFHRCxvRUFBSCxrZUFBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3N0eWxlcy9nbG9iYWwudHM/MTU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgICA6cm9vdCB7XG4gICAgICAgIC0taGlnaGxpZ2h0OiAjMDRkMzYxO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwNjA5MkI7XG4gICAgICAgIC0td2hpdGU6ICNmMWYyZjM7XG5cbiAgICAgICAgLS1jb250YWluZXI6IDEwMHJlbTtcblxuICAgICAgICAtLXNtYWxsOiAxLjVyZW07XG4gICAgICAgIC0tbWVkaXVtOiAzcmVtO1xuICAgICAgICAtLWxhcmdlOiA1cmVtO1xuICAgXG4gICAgfVxuICBcbiAgKiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgfVxuXG4gIGh0bWwsIGJvZHksICNfX25leHQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG5cbiAgYm9keSB7XG4gICAgICBmb250LWZhbWlseTogLS1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgXG4gICAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgcCwgYXtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tZWRpdW0pO1xuICB9XG5cbiAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0KTtcbiAgfVxuXG5gXG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.ts\n");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();