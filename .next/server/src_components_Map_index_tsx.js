"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Map_index_tsx";
exports.ids = ["src_components_Map_index_tsx"];
exports.modules = {

/***/ "./src/components/Map/index.tsx":
/*!**************************************!*\
  !*** ./src/components/Map/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ \"react-leaflet\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"leaflet\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/Map/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/anaclaragarcia/Desktop/boilerplate/src/components/Map/index.tsx\";\n\n\n\n\n\nconst MAPBOX_API_KEY = \"pk.eyJ1IjoiY2xhcnh5eiIsImEiOiJja3R1aWN2aHgyMHE3MnhwcW13MzM5a3duIn0.adijzNZfmuuzJakESa6sZg\";\n\nconst CustomTileLayer = () => {\n  return MAPBOX_API_KEY ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.TileLayer, {\n    attribution: \"\\xA9 <a href=\\\"https://apps.mapbox.com/feedback/\\\">Mapbox</a> \\xA9 <a href=\\\"http://www.openstreetmap.org/copyright\\\">OpenStreetMap</a>\",\n    url: `https://api.mapbox.com/styles/v1/clarxyz/cktupwrek1j2h17qfs8cs2zdr/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.TileLayer, {\n    attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst markerIcon = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Icon)({\n  iconUrl: 'pin.png',\n  iconSize: [38, 38],\n  iconAnchor: [20, 20],\n  popupAnchor: [0, -40]\n});\n\nconst Map = ({\n  places\n}) => {\n  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.MapWrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.MapContainer, {\n      center: [0, 0],\n      zoom: 3,\n      style: {\n        height: '100%',\n        width: '100%'\n      },\n      minZoom: 3,\n      maxBounds: [[-180, 180], [180, -180]],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.MapConsumer, {\n        children: map => {\n          const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n          if (width < 768) {\n            map.setMinZoom(2);\n          }\n\n          return null;\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CustomTileLayer, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, undefined), places === null || places === void 0 ? void 0 : places.map(({\n        id,\n        name,\n        slug,\n        location\n      }) => {\n        const {\n          latitude,\n          longitude\n        } = location;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.Marker, {\n          position: [latitude, longitude],\n          title: name,\n          icon: markerIcon,\n          eventHandlers: {\n            click: () => {\n              router.push(`/place/${slug}`);\n            }\n          }\n        }, `place-${id}`, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, undefined);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThDRCxDQWpERDs7QUFrREEsaUVBQWViLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL01hcC9pbmRleC50c3g/OGE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgfSBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBNYXBDb25zdW1lciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG50eXBlIFBsYWNlID0ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzbHVnOiBzdHJpbmdcbiAgbG9jYXRpb246IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXJcbiAgfVxufVxuZXhwb3J0IHR5cGUgTWFwUHJvcHMgPSB7XG4gIHBsYWNlcz86IFBsYWNlW11cbn1cblxuY29uc3QgTUFQQk9YX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQVBJX0tFWVxuXG5jb25zdCBDdXN0b21UaWxlTGF5ZXIgPSAoKSA9PiB7XG4gIHJldHVybiBNQVBCT1hfQVBJX0tFWSA/IChcbiAgICA8VGlsZUxheWVyXG4gICAgICBhdHRyaWJ1dGlvbj0nwqkgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5tYXBib3guY29tL2ZlZWRiYWNrL1wiPk1hcGJveDwvYT4gwqkgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nXG4gICAgICB1cmw9e2BodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9jbGFyeHl6L2NrdHVwd3JlazFqMmgxN3FmczhjczJ6ZHIvdGlsZXMvMjU2L3t6fS97eH0ve3l9QDJ4P2FjY2Vzc190b2tlbj0ke01BUEJPWF9BUElfS0VZfWB9XG4gICAgLz5cbiAgKSA6IChcbiAgICA8VGlsZUxheWVyXG4gICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBtYXJrZXJJY29uID0gbmV3IEwuSWNvbih7XG4gIGljb25Vcmw6ICdwaW4ucG5nJyxcbiAgaWNvblNpemU6IFszOCwgMzhdLFxuICBpY29uQW5jaG9yOiBbMjAsIDIwXSxcbiAgcG9wdXBBbmNob3I6IFswLCAtNDBdXG59KVxuXG5jb25zdCBNYXAgPSAoeyBwbGFjZXMgfTogTWFwUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxTLk1hcFdyYXBwZXI+XG4gICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgIGNlbnRlcj17WzAsIDBdfVxuICAgICAgICB6b29tPXszfVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBtaW5ab29tPXszfVxuICAgICAgICBtYXhCb3VuZHM9e1tcbiAgICAgICAgICBbLTE4MCwgMTgwXSxcbiAgICAgICAgICBbMTgwLCAtMTgwXVxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8TWFwQ29uc3VtZXI+XG4gICAgICAgICAgeyhtYXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID1cbiAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcblxuICAgICAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgICAgIG1hcC5zZXRNaW5ab29tKDIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH19XG4gICAgICAgIDwvTWFwQ29uc3VtZXI+XG4gICAgICAgIDxDdXN0b21UaWxlTGF5ZXIgLz5cbiAgICAgICAge3BsYWNlcz8ubWFwKCh7IGlkLCBuYW1lLCBzbHVnLCBsb2NhdGlvbiB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBsb2NhdGlvblxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgICAga2V5PXtgcGxhY2UtJHtpZH1gfVxuICAgICAgICAgICAgICBwb3NpdGlvbj17W2xhdGl0dWRlLCBsb25naXR1ZGVdfVxuICAgICAgICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgICAgICAgaWNvbj17bWFya2VySWNvbn1cbiAgICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17e1xuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3BsYWNlLyR7c2x1Z31gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgIDwvUy5NYXBXcmFwcGVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBNYXBcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJNYXBDb25zdW1lciIsIkwiLCJTIiwiTUFQQk9YX0FQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUFQQk9YX0FQSV9LRVkiLCJDdXN0b21UaWxlTGF5ZXIiLCJtYXJrZXJJY29uIiwiSWNvbiIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsIk1hcCIsInBsYWNlcyIsInJvdXRlciIsImhlaWdodCIsIndpZHRoIiwibWFwIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5Iiwic2V0TWluWm9vbSIsImlkIiwibmFtZSIsInNsdWciLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Map/index.tsx\n");

/***/ }),

/***/ "./src/components/Map/styles.ts":
/*!**************************************!*\
  !*** ./src/components/Map/styles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapWrapper\": () => (/* binding */ MapWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MapWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"styles__MapWrapper\",\n  componentId: \"sc-lbr986-0\"\n})([\"width:100%;height:100%;.leaflet-container{background-color:var(--background);}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsVUFBVSxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzRkFBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL01hcC9zdHlsZXMudHM/MDY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTWFwV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIH1cbmBcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNYXBXcmFwcGVyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Map/styles.ts\n");

/***/ })

};
;