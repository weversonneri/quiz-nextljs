webpackHotUpdate_N_E("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ \"./db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ \"./db.json\", 1);\n/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ \"./src/components/Button/index.js\");\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/pages/quiz.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction LoadingWidget() {\n  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"Carregando....\"), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"s\"));\n}\n\n_c = LoadingWidget;\n\nfunction QuestionWidget(_ref) {\n  var _this = this;\n\n  var question = _ref.question,\n      questionIndex = _ref.questionIndex,\n      totalQuestions = _ref.totalQuestions,\n      _onSubmit = _ref.onSubmit;\n  var questionId = \"question__\".concat(questionIndex);\n  return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions, \" \"))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '150px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, question.description), __jsx(\"form\", {\n    onSubmit: function onSubmit(event) {\n      event.preventDefault();\n\n      _onSubmit();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    return __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      htmlFor: alternativeId,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 29\n      }\n    }, __jsx(\"input\", {\n      id: alternativeId,\n      name: questionId,\n      type: \"radio\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 33\n      }\n    }), alternative);\n  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 21\n    }\n  }, \"confirmar\"))));\n}\n\n_c2 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(screenStates.LOADING),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      screenState = _React$useState2[0],\n      setScreenState = _React$useState2[1];\n\n  var totalQuestions = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions.length;\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      currentQuestion = _React$useState4[0],\n      setCurrentQuestion = _React$useState4[1];\n\n  var questionIndex = currentQuestion;\n  var question = _db_json__WEBPACK_IMPORTED_MODULE_2__.questions[questionIndex];\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 1000);\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestions) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(screenStates.RESULT);\n    }\n  }\n\n  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 21\n    }\n  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 58\n    }\n  }), screenState === screenStates.RESULT && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 57\n    }\n  }, \"jjdjjfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh \")));\n}\n\n_s(QuizPage, \"uFzTItWrf72xkd+gzQBa3gJACYU=\");\n\n_c3 = QuizPage;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LoadingWidget\");\n$RefreshReg$(_c2, \"QuestionWidget\");\n$RefreshReg$(_c3, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz83ZDE4Il0sIm5hbWVzIjpbIkxvYWRpbmdXaWRnZXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsInRvdGFsUXVlc3Rpb25zIiwib25TdWJtaXQiLCJxdWVzdGlvbklkIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWx0ZXJuYXRpdmVzIiwibWFwIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiYWx0ZXJuYXRpdmVJZCIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic2NyZWVuU3RhdGUiLCJzZXRTY3JlZW5TdGF0ZSIsImRiIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUlJLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSixDQURKO0FBVUg7O0tBWFFBLGE7O0FBYVQsU0FBU0MsY0FBVCxPQUErRTtBQUFBOztBQUFBLE1BQXJEQyxRQUFxRCxRQUFyREEsUUFBcUQ7QUFBQSxNQUEzQ0MsYUFBMkMsUUFBM0NBLGFBQTJDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0QjtBQUFBLE1BQVpDLFNBQVksUUFBWkEsUUFBWTtBQUMzRSxNQUFNQyxVQUFVLHVCQUFnQkgsYUFBaEIsQ0FBaEI7QUFFQSxTQUVJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNpQkEsYUFBYSxHQUFHLENBRGpDLGlCQUN5Q0MsY0FEekMsT0FGSixDQURKLEVBUUk7QUFDSSxPQUFHLEVBQUMsaUJBRFI7QUFFSSxTQUFLLEVBQUU7QUFDSEcsV0FBSyxFQUFFLE1BREo7QUFFSEMsWUFBTSxFQUFFLE9BRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFIsS0FGWDtBQU9JLE9BQUcsRUFBRVAsUUFBUSxDQUFDUSxLQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFpQkksTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsUUFBUSxDQUFDUyxLQURkLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tULFFBQVEsQ0FBQ1UsV0FEZCxDQUpKLEVBUUk7QUFDUSxZQUFRLEVBQUUsa0JBQUNDLEtBQUQsRUFBVztBQUNyQkEsV0FBSyxDQUFDQyxjQUFOOztBQUNBVCxlQUFRO0FBQ1gsS0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUtILFFBQVEsQ0FBQ2EsWUFBVCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsV0FBRCxFQUFjQyxnQkFBZCxFQUFtQztBQUMxRCxRQUFNQyxhQUFhLDBCQUFtQkQsZ0JBQW5CLENBQW5CO0FBQ0EsV0FDSSxNQUFDLDhEQUFELENBQVEsS0FBUjtBQUNJLFFBQUUsRUFBQyxPQURQO0FBRUksYUFBTyxFQUFFQyxhQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHSTtBQUNJLFFBQUUsRUFBRUEsYUFEUjtBQUVJLFVBQUksRUFBRWIsVUFGVjtBQUdJLFVBQUksRUFBQyxPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQU9LVyxXQVBMLENBREo7QUFZSCxHQWRBLENBTkwsRUFxQkksTUFBQyw4REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJKLENBUkosQ0FqQkosQ0FGSjtBQXlESDs7TUE1RFFoQixjO0FBOERULElBQU1tQixZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRSxNQURXO0FBRWpCQyxTQUFPLEVBQUUsU0FGUTtBQUdqQkMsUUFBTSxFQUFFO0FBSFMsQ0FBckI7QUFNZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsd0JBQ09DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZU4sWUFBWSxDQUFDRSxPQUE1QixDQURQO0FBQUE7QUFBQSxNQUN4QkssV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUUvQixNQUFNeEIsY0FBYyxHQUFHeUIscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxNQUFwQzs7QUFGK0IseUJBR2VOLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBSGY7QUFBQTtBQUFBLE1BR3hCTSxlQUh3QjtBQUFBLE1BR1BDLGtCQUhPOztBQUkvQixNQUFNOUIsYUFBYSxHQUFHNkIsZUFBdEI7QUFDQSxNQUFNOUIsUUFBUSxHQUFHMkIscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhM0IsYUFBYixDQUFqQjtBQUdBc0IsOENBQUssQ0FBQ1MsU0FBTixDQUFnQixZQUFNO0FBQ2xCQyxjQUFVLENBQUMsWUFBTTtBQUNiUCxvQkFBYyxDQUFDUixZQUFZLENBQUNDLElBQWQsQ0FBZDtBQUNILEtBRlMsRUFFUCxJQUFJLElBRkcsQ0FBVjtBQUdILEdBSkQsRUFJRyxFQUpIOztBQU1BLFdBQVNlLGdCQUFULEdBQTRCO0FBQ3hCLFFBQU1DLFlBQVksR0FBR2xDLGFBQWEsR0FBRyxDQUFyQzs7QUFDQSxRQUFJa0MsWUFBWSxHQUFHakMsY0FBbkIsRUFBbUM7QUFDL0I2Qix3QkFBa0IsQ0FBQ0ksWUFBRCxDQUFsQjtBQUNILEtBRkQsTUFFTztBQUNIVCxvQkFBYyxDQUFDUixZQUFZLENBQUNHLE1BQWQsQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVNLHFDQUFFLENBQUNTLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLWCxXQUFXLEtBQUtQLFlBQVksQ0FBQ0MsSUFBN0IsSUFDRyxNQUFDLGNBQUQ7QUFDSSxZQUFRLEVBQUVuQixRQURkO0FBRUksaUJBQWEsRUFBRUMsYUFGbkI7QUFHSSxrQkFBYyxFQUFFQyxjQUhwQjtBQUlJLFlBQVEsRUFBRWdDLGdCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQVdLVCxXQUFXLEtBQUtQLFlBQVksQ0FBQ0UsT0FBN0IsSUFBd0MsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYN0MsRUFhS0ssV0FBVyxLQUFLUCxZQUFZLENBQUNHLE1BQTdCLElBQXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNElBYjVDLENBREosQ0FESjtBQW9CSDs7R0EzQ3VCQyxROztNQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvcXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcblxuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28nO1xuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xuXG5cbmZ1bmN0aW9uIExvYWRpbmdXaWRnZXQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdpZGdldD5cbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8uLi4uXG4gICAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XG4gICAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgICAgPC9XaWRnZXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoeyBxdWVzdGlvbiwgcXVlc3Rpb25JbmRleCwgdG90YWxRdWVzdGlvbnMsIG9uU3VibWl0IH0pIHtcbiAgICBjb25zdCBxdWVzdGlvbklkID0gYHF1ZXN0aW9uX18ke3F1ZXN0aW9uSW5kZXh9YDtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFdpZGdldD5cbiAgICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIHsvKiA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+ICovfVxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAge2BQZXJndW50YSAke3F1ZXN0aW9uSW5kZXggKyAxfSBkZSAke3RvdGFsUXVlc3Rpb25zfSBgfVxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9XCJEZXNjcmnDp8Ojb1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e3F1ZXN0aW9uLmltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmFsdGVybmF0aXZlcy5tYXAoKGFsdGVybmF0aXZlLCBhbHRlcm5hdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZUlkID0gYGFsdGVybmF0aXZlX18ke2FsdGVybmF0aXZlSW5kZXh9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdpZGdldC5Ub3BpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgICAgPC9XaWRnZXQ+XG5cbiAgICApO1xufVxuXG5jb25zdCBzY3JlZW5TdGF0ZXMgPSB7XG4gICAgUVVJWjogJ1FVSVonLFxuICAgIExPQURJTkc6ICdMT0FESU5HJyxcbiAgICBSRVNVTFQ6ICdSRVNVTFQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XG4gICAgY29uc3QgW3NjcmVlblN0YXRlLCBzZXRTY3JlZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShzY3JlZW5TdGF0ZXMuTE9BRElORyk7XG4gICAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBkYi5xdWVzdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gY3VycmVudFF1ZXN0aW9uO1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZGIucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdO1xuXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFNjcmVlblN0YXRlKHNjcmVlblN0YXRlcy5RVUlaKTtcbiAgICAgICAgfSwgMSAqIDEwMDApO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdFF1aXooKSB7XG4gICAgICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5kZXggKyAxO1xuICAgICAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XG4gICAgICAgICAgICA8UXVpekNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5RVUlaICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdXaWRnZXQgLz59XG5cbiAgICAgICAgICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5SRVNVTFQgJiYgPGRpdj5qamRqamZoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaCA8L2Rpdj59XG5cbiAgICAgICAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgICAgPC9RdWl6QmFja2dyb3VuZD5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

})