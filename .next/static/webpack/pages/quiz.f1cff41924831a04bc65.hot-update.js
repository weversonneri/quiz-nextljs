webpackHotUpdate_N_E("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ \"./db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ \"./db.json\", 1);\n/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ \"./src/components/Button/index.js\");\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/pages/quiz.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction LoadingWidget() {\n  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"Carregando....\"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"s\"));\n}\n\n_c = LoadingWidget;\n\nfunction QuestionWidget(_ref) {\n  var _this = this;\n\n  var question = _ref.question,\n      questionIndex = _ref.questionIndex,\n      totalQuestions = _ref.totalQuestions;\n  var questionId = \"question__\".concat(questionIndex);\n  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions, \" \"))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '150px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, question.description), __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      htmlFor: alternativeId,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 29\n      }\n    }, __jsx(\"input\", {\n      id: alternativeId,\n      name: questionId,\n      type: \"radio\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 33\n      }\n    }), alternative);\n  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, \"confirmar\"))));\n}\n\n_c2 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(screenStates.LOADING),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      screenState = _React$useState2[0],\n      setScreenState = _React$useState2[1];\n\n  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      currentQuestion = _React$useState4[0],\n      setCurrentQuestion = _React$useState4[1];\n\n  var questionIndex = currentQuestion;\n  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex];\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 1000);\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestion) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(scrreStates.RESULT);\n    }\n  }\n\n  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 21\n    }\n  }), screenState === screenState.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 57\n    }\n  }), screenState === screenState.RESULT && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 56\n    }\n  }, \"jjdjjf\")));\n}\n\n_s(QuizPage, \"uFzTItWrf72xkd+gzQBa3gJACYU=\");\n\n_c3 = QuizPage;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LoadingWidget\");\n$RefreshReg$(_c2, \"QuestionWidget\");\n$RefreshReg$(_c3, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz83ZDE4Il0sIm5hbWVzIjpbIkxvYWRpbmdXaWRnZXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsInRvdGFsUXVlc3Rpb25zIiwicXVlc3Rpb25JZCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWx0ZXJuYXRpdmVzIiwibWFwIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiYWx0ZXJuYXRpdmVJZCIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic2NyZWVuU3RhdGUiLCJzZXRTY3JlZW5TdGF0ZSIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iLCJ0b3RhbFF1ZXN0aW9uIiwic2NycmVTdGF0ZXMiLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUlJLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSixDQURKO0FBVUg7O0tBWFFBLGE7O0FBYVQsU0FBU0MsY0FBVCxPQUFxRTtBQUFBOztBQUFBLE1BQTNDQyxRQUEyQyxRQUEzQ0Es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QUFNQyxZQUFZLEdBQUcvQixhQUFhLEdBQUcsQ0FBckM7O0FBQ0EsUUFBSStCLFlBQVksR0FBR0MsYUFBbkIsRUFBa0M7QUFDOUJMLHdCQUFrQixDQUFDSSxZQUFELENBQWxCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hULG9CQUFjLENBQUNXLFdBQVcsQ0FBQ2hCLE1BQWIsQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVNLHFDQUFFLENBQUNXLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLYixXQUFXLEtBQUtQLFlBQVksQ0FBQ0MsSUFBN0IsSUFDRyxNQUFDLGNBQUQ7QUFDSSxZQUFRLEVBQUVoQixRQURkO0FBRUksaUJBQWEsRUFBRUMsYUFGbkI7QUFHSSxrQkFBYyxFQUFFQyxjQUhwQjtBQUlJLFlBQVEsRUFBRTZCLGdCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQVdLVCxXQUFXLEtBQUtBLFdBQVcsQ0FBQ0wsT0FBNUIsSUFBdUMsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYNUMsRUFhS0ssV0FBVyxLQUFLQSxXQUFXLENBQUNKLE1BQTVCLElBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiM0MsQ0FESixDQURKO0FBb0JIOztHQTNDdUJDLFE7O01BQUFBLFEiLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xuXG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XG5cblxuZnVuY3Rpb24gTG9hZGluZ1dpZGdldCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V2lkZ2V0PlxuICAgICAgICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgQ2FycmVnYW5kby4uLi5cbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICAgICAgICBzXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCh7IHF1ZXN0aW9uLCBxdWVzdGlvbkluZGV4LCB0b3RhbFF1ZXN0aW9ucyB9KSB7XG4gICAgY29uc3QgcXVlc3Rpb25JZCA9IGBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWA7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxXaWRnZXQ+XG4gICAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICAgICAgICB7LyogPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiAvPiAqL31cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc30gYH1cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6fDo29cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtxdWVzdGlvbi5pbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxmb3JtID5cbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoKGFsdGVybmF0aXZlLCBhbHRlcm5hdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgICA8L1dpZGdldD5cblxuICAgICk7XG59XG5cbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcbiAgICBRVUlaOiAnUVVJWicsXG4gICAgTE9BRElORzogJ0xPQURJTkcnLFxuICAgIFJFU1VMVDogJ1JFU1VMVCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xuICAgIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xuICAgIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZGIucXVlc3Rpb25zLmxlbmd0aDtcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRiLnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcblxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XG4gICAgICAgIH0sIDEgKiAxMDAwKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRRdWl6KCkge1xuICAgICAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2NyZWVuU3RhdGUoc2NycmVTdGF0ZXMuUkVTVUxUKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cbiAgICAgICAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxRdWl6TG9nbyAvPlxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlFVSVogJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25XaWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXg9e3F1ZXN0aW9uSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFF1ZXN0aW9ucz17dG90YWxRdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0UXVpen1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZS5MT0FESU5HICYmIDxMb2FkaW5nV2lkZ2V0IC8+fVxuXG4gICAgICAgICAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZS5SRVNVTFQgJiYgPGRpdj5qamRqamY8L2Rpdj59XG5cbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

})