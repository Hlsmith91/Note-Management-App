"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/entityMethods/useEntityTags.js":
/*!**********************************************!*\
  !*** ./hooks/entityMethods/useEntityTags.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useGeneralizedCrudMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useGeneralizedCrudMethods */ \"./hooks/useGeneralizedCrudMethods.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nvar _s = $RefreshSig$();\n\n\nfunction useEntityTags(url, errorNotificationFn) {\n    _s();\n    const { data , error , createRecord  } = (0,_useGeneralizedCrudMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, errorNotificationFn);\n    function createTagsAndMerge(tagIdsIn, tagNamesInString) {\n        if (!tagIdsIn && !tagNamesInString) return undefined;\n        const tagNamesIn = tagNamesInString ? tagNamesInString.split(\",\").filter((t)=>t && t.length > 0) : [];\n        const tagIds = tagIdsIn ? [\n            ...tagIdsIn\n        ] : [];\n        const tagsNamesAllUppercase = data === null || data === void 0 ? void 0 : data.map((r)=>r.tagName.toUpperCase());\n        tagNamesIn.filter((rec)=>{\n            return !(!rec || rec.trim().length === 0);\n        }).array.forEach(function(tag) {\n            if (tagsNamesAllUppercase.includes(tag.toUpperCase())) {\n                const tagNameValue = tagsNameAllUppercase.find((r)=>r === tag.toUpperCase());\n                const id = data === null || data === void 0 ? void 0 : data.find((r)=>r.tagName.toUpperCase() === tagNameValue).id;\n                if (!tagIds.includes(id)) {\n                    tagIds.push(id);\n                }\n            } else {\n                const tagIdNew = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n                createRecord({\n                    id: tagIdNew,\n                    tagName: tag\n                });\n                tagIds.push(tagIdNew);\n            }\n        });\n        return tagIds;\n    }\n    return {\n        data,\n        error,\n        createTagsAndMerge\n    };\n}\n_s(useEntityTags, \"WQTd3kn8/Sf9b18ySexO6Dqu62Q=\", false, function() {\n    return [\n        _useGeneralizedCrudMethods__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useEntityTags);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9lbnRpdHlNZXRob2RzL3VzZUVudGl0eVRhZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxRTtBQUNuQztBQUVsQyxTQUFTRyxjQUFjQyxHQUFHLEVBQUVDLG1CQUFtQixFQUFDOztJQUM1QyxNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxhQUFZLEVBQUMsR0FBR1Isc0VBQXlCQSxDQUFDSSxLQUFLQztJQUduRSxTQUFTSSxtQkFBbUJDLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQUM7UUFDbkQsSUFBRyxDQUFDRCxZQUFZLENBQUNDLGtCQUFrQixPQUFPQztRQUMxQyxNQUFNQyxhQUFhRixtQkFDaEJBLGlCQUFpQkcsS0FBSyxDQUFDLEtBQUtDLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsS0FBS0EsRUFBRUMsTUFBTSxHQUFHLEtBQUssRUFBRTtRQUNsRSxNQUFNQyxTQUFTUixXQUFXO2VBQUlBO1NBQVMsR0FBRyxFQUFFO1FBQzVDLE1BQU1TLHdCQUF3QmIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYyxHQUFHLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLE9BQU8sQ0FBQ0MsV0FBVztRQUVsRVYsV0FBV0UsTUFBTSxDQUFFUyxDQUFBQSxNQUFPO1lBQ3RCLE9BQU8sQ0FBRSxFQUFDQSxPQUFPQSxJQUFJQyxJQUFJLEdBQUdSLE1BQU0sS0FBSztRQUMzQyxHQUFHUyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxTQUFVQyxHQUFHLEVBQUM7WUFDM0IsSUFBSVQsc0JBQXNCVSxRQUFRLENBQUNELElBQUlMLFdBQVcsS0FBSztnQkFDbkQsTUFBTU8sZUFBZUMscUJBQXFCQyxJQUFJLENBQUNYLENBQUFBLElBQUtBLE1BQ2hETyxJQUFJTCxXQUFXO2dCQUNuQixNQUFNVSxLQUFLM0IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNMEIsSUFBSSxDQUFDWCxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLENBQUNDLFdBQVcsT0FBT08sY0FBY0csRUFBRTtnQkFDdkUsSUFBRyxDQUFDZixPQUFPVyxRQUFRLENBQUNJLEtBQUs7b0JBQUNmLE9BQU9nQixJQUFJLENBQUNEO2dCQUFJLENBQUM7WUFDL0MsT0FBTTtnQkFDRixNQUFNRSxXQUFXakMsd0NBQU1BO2dCQUN2Qk0sYUFBYTtvQkFDVHlCLElBQUlFO29CQUFVYixTQUFTTTtnQkFDM0I7Z0JBQ0FWLE9BQU9nQixJQUFJLENBQUNDO1lBQ2hCLENBQUM7UUFDTDtRQUNBLE9BQU9qQjtJQUNYO0lBQ0EsT0FBTztRQUFDWjtRQUFNQztRQUFPRTtJQUFrQjtBQUMzQztHQTlCU047O1FBQytCSCxrRUFBeUJBOzs7QUErQmpFLCtEQUFlRyxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL2VudGl0eU1ldGhvZHMvdXNlRW50aXR5VGFncy5qcz9iZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VHZW5lcmFsaXplZENydWRNZXRob2RzIGZyb20gXCIuLi91c2VHZW5lcmFsaXplZENydWRNZXRob2RzXCI7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlRW50aXR5VGFncyh1cmwsIGVycm9yTm90aWZpY2F0aW9uRm4pe1xyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBjcmVhdGVSZWNvcmR9ID0gdXNlR2VuZXJhbGl6ZWRDcnVkTWV0aG9kcyh1cmwsIGVycm9yTm90aWZpY2F0aW9uRm4pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYWdzQW5kTWVyZ2UodGFnSWRzSW4sIHRhZ05hbWVzSW5TdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0YWdJZHNJbiAmJiAhdGFnTmFtZXNJblN0cmluZykgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCB0YWdOYW1lc0luID0gdGFnTmFtZXNJblN0cmluZ1xyXG4gICAgICAgICA/IHRhZ05hbWVzSW5TdHJpbmcuc3BsaXQoXCIsXCIpLmZpbHRlcih0ID0+IHQgJiYgdC5sZW5ndGggPiAwKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhZ0lkcyA9IHRhZ0lkc0luID8gWy4uLnRhZ0lkc0luXSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhZ3NOYW1lc0FsbFVwcGVyY2FzZSA9IGRhdGE/Lm1hcChyID0+IHIudGFnTmFtZS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICBcclxuICAgICAgICB0YWdOYW1lc0luLmZpbHRlciggcmVjID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEoIXJlYyB8fCByZWMudHJpbSgpLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgfSkuYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodGFnKXtcclxuICAgICAgICAgICAgaWYgKHRhZ3NOYW1lc0FsbFVwcGVyY2FzZS5pbmNsdWRlcyh0YWcudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ05hbWVWYWx1ZSA9IHRhZ3NOYW1lQWxsVXBwZXJjYXNlLmZpbmQociA9PiByID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZGF0YT8uZmluZChyID0+IHIudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSB0YWdOYW1lVmFsdWUpLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRhZ0lkcy5pbmNsdWRlcyhpZCkpIHt0YWdJZHMucHVzaChpZCk7fVxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdJZE5ldyA9IHV1aWR2NCgpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGFnSWROZXcsIHRhZ05hbWU6IHRhZyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGFnSWRzLnB1c2godGFnSWROZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRhZ0lkcztcclxuICAgIH1cclxuICAgIHJldHVybiB7ZGF0YSwgZXJyb3IsIGNyZWF0ZVRhZ3NBbmRNZXJnZX07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVudGl0eVRhZ3M7Il0sIm5hbWVzIjpbInVzZUdlbmVyYWxpemVkQ3J1ZE1ldGhvZHMiLCJ2NCIsInV1aWR2NCIsInVzZUVudGl0eVRhZ3MiLCJ1cmwiLCJlcnJvck5vdGlmaWNhdGlvbkZuIiwiZGF0YSIsImVycm9yIiwiY3JlYXRlUmVjb3JkIiwiY3JlYXRlVGFnc0FuZE1lcmdlIiwidGFnSWRzSW4iLCJ0YWdOYW1lc0luU3RyaW5nIiwidW5kZWZpbmVkIiwidGFnTmFtZXNJbiIsInNwbGl0IiwiZmlsdGVyIiwidCIsImxlbmd0aCIsInRhZ0lkcyIsInRhZ3NOYW1lc0FsbFVwcGVyY2FzZSIsIm1hcCIsInIiLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJyZWMiLCJ0cmltIiwiYXJyYXkiLCJmb3JFYWNoIiwidGFnIiwiaW5jbHVkZXMiLCJ0YWdOYW1lVmFsdWUiLCJ0YWdzTmFtZUFsbFVwcGVyY2FzZSIsImZpbmQiLCJpZCIsInB1c2giLCJ0YWdJZE5ldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/entityMethods/useEntityTags.js\n"));

/***/ })

});