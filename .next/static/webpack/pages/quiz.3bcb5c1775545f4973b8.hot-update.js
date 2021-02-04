webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/screens/Quiz/index.js":
/*!***********************************!*\
  !*** ./src/screens/Quiz/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AlternativesForm */ \"./src/components/AlternativesForm/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BackLinkArrow */ \"./src/components/BackLinkArrow/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/GitHubCorner */ \"./src/components/GitHubCorner/index.js\");\n\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/src/screens/Quiz/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import db from '../../../db.json';\n\n\n\n\n\n\n\n\n\n\n\nvar QuizUserName = function QuizUserName() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(),\n      name = _useRouter.query.name;\n\n  return __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, \"Este \\xE9 seu resultado final \", name);\n};\n\n_s(QuizUserName, \"5maMmNWPMTB7P6OcxytbSlIph6Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = QuizUserName;\n\nfunction ResultWidget(_ref) {\n  var _this2 = this;\n\n  var results = _ref.results,\n      totalQuestions = _ref.totalQuestions;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(QuizUserName, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Voc\\xEA acertou\\n            \".concat(results.reduce(function (somatoriaAtual, resultadoAtual) {\n    var isAcerto = resultadoAtual === true;\n\n    if (isAcerto) {\n      return somatoriaAtual + 1;\n    }\n\n    return somatoriaAtual;\n  }, 0)), ' ', \"de \", totalQuestions, \" perguntas\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, results.map(function (result, index) {\n    return __jsx(\"li\", {\n      key: \"result__\".concat(result),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, \"#\", index + 1, \" Resultado: \", result == true ? 'Acertou ' : 'Errou');\n  })), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Jogar Novamente\", console.log(\"testandoooo\"))));\n}\n\n_c2 = ResultWidget;\n\nfunction LoadingWidget() {\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Carregando...\"), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n}\n\n_c3 = LoadingWidget;\n\nfunction QuestionWidget(_ref2) {\n  _s2();\n\n  var _this3 = this;\n\n  var question = _ref2.question,\n      questionIndex = _ref2.questionIndex,\n      totalQuestions = _ref2.totalQuestions,\n      _onSubmit = _ref2.onSubmit,\n      addResult = _ref2.addResult;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      selectedAlternative = _React$useState2[0],\n      setSelectedAlternative = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isQuestionSubmited = _React$useState4[0],\n      setIsQuestionSubmited = _React$useState4[1];\n\n  var questionId = \"question__\".concat(questionIndex);\n  var isCorrect = selectedAlternative === question.answer;\n  var hasAlternativeSelected = selectedAlternative !== undefined;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, console.log(bkacj)), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '190px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, question.description), __jsx(_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: function onSubmit(infosDoEvento) {\n      infosDoEvento.preventDefault();\n      setIsQuestionSubmited(true);\n      setTimeout(function () {\n        addResult(isCorrect);\n\n        _onSubmit();\n\n        setIsQuestionSubmited(false);\n        setSelectedAlternative(undefined);\n      }, 3 * 1000);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    var alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';\n    var isSelected = selectedAlternative === alternativeIndex;\n    return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      key: alternativeId,\n      htmlFor: alternativeId,\n      \"data-selected\": isSelected,\n      \"data-status\": isQuestionSubmited && alternativeStatus,\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      style: {\n        display: 'none'\n      },\n      id: alternativeId,\n      name: questionId,\n      onChange: function onChange() {\n        return setSelectedAlternative(alternativeIndex);\n      },\n      type: \"radio\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 17\n      }\n    }), alternative);\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    type: \"submit\",\n    disabled: !hasAlternativeSelected,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }, \"Confirmar\"), isQuestionSubmited && isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 47\n    }\n  }, \"You're goddamn right!\"), isQuestionSubmited && !isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 48\n    }\n  }, \"Fail!\"))));\n}\n\n_s2(QuestionWidget, \"gOPL1EmksK8wUP52KQZyVU1FVK0=\");\n\n_c4 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage(_ref3) {\n  _s3();\n\n  var externalQuestions = _ref3.externalQuestions,\n      externalBg = _ref3.externalBg;\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(screenStates.LOADING),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      screenState = _React$useState6[0],\n      setScreenState = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      results = _React$useState8[0],\n      setResults = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState9, 2),\n      currentQuestion = _React$useState10[0],\n      setCurrentQuestion = _React$useState10[1];\n\n  var questionIndex = currentQuestion;\n  var question = externalQuestions[questionIndex];\n  var totalQuestions = externalQuestions.length;\n  var bg = externalBg;\n\n  function addResult(result) {\n    // results.push(result);\n    setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(results), [result]));\n  } // [React chama de: Efeitos || Effects]\n  // React.useEffect\n  // atualizado === willUpdate\n  // morre === willUnmount\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    // fetch() ...\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 2000); // nasce === didMount\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestions) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(screenStates.RESULT);\n    }\n  }\n\n  return __jsx(_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 5\n    }\n  }, __jsx(_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }\n  }, __jsx(_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 9\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    addResult: addResult,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 11\n    }\n  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 50\n    }\n  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {\n    results: results,\n    totalQuestions: totalQuestions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 49\n    }\n  })), __jsx(_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    projectUrl: \"https://github.com/weversonneri/quiz-nextljs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s3(QuizPage, \"op6a2G6WeNFK4t0JnGKr98IrMhU=\");\n\n_c5 = QuizPage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"QuizUserName\");\n$RefreshReg$(_c2, \"ResultWidget\");\n$RefreshReg$(_c3, \"LoadingWidget\");\n$RefreshReg$(_c4, \"QuestionWidget\");\n$RefreshReg$(_c5, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvUXVpei9pbmRleC5qcz8xZjk5Il0sIm5hbWVzIjpbIlF1aXpVc2VyTmFtZSIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsIlJlc3VsdFdpZGdldCIsInJlc3VsdHMiLCJ0b3RhbFF1ZXN0aW9ucyIsInJlZHVjZSIsInNvbWF0b3JpYUF0dWFsIiwicmVzdWx0YWRvQXR1YWwiLCJpc0FjZXJ0byIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkxvYWRpbmdXaWRnZXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsIm9uU3VibWl0IiwiYWRkUmVzdWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJia2FjaiIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImFsdGVybmF0aXZlcyIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImFsdGVybmF0aXZlSWQiLCJhbHRlcm5hdGl2ZVN0YXR1cyIsImlzU2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2NyZWVuU3RhdGVzIiwiUVVJWiIsIkxPQURJTkciLCJSRVNVTFQiLCJRdWl6UGFnZSIsImV4dGVybmFsUXVlc3Rpb25zIiwiZXh0ZXJuYWxCZyIsInNjcmVlblN0YXRlIiwic2V0U2NyZWVuU3RhdGUiLCJzZXRSZXN1bHRzIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwibGVuZ3RoIiwiYmciLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdWJtaXRRdWl6IiwibmV4dFF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsbUJBR3JCQyw4REFBUyxFQUhZO0FBQUEsTUFFZEMsSUFGYyxjQUV2QkMsS0FGdUIsQ0FFZEQsSUFGYzs7QUFLekIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFrQ0EsSUFBbEMsQ0FBUDtBQUNELENBTkQ7O0dBQU1GLFk7VUFHQUMsc0Q7OztLQUhBRCxZOztBQVFOLFNBQVNJLFlBQVQsT0FBbUQ7QUFBQTs7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUNqRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFLRSxNQUFDLDBEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FFTUQsT0FBTyxDQUFDRSxNQUFSLENBQWUsVUFBQ0MsY0FBRCxFQUFpQkMsY0FBakIsRUFBb0M7QUFDckQsUUFBTUMsUUFBUSxHQUFHRCxjQUFjLEtBQUssSUFBcEM7O0FBQ0EsUUFBSUMsUUFBSixFQUFjO0FBQ1osYUFBT0YsY0FBYyxHQUFHLENBQXhCO0FBQ0Q7O0FB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a0JBQWMsRUFBRWIsY0FIbEI7QUFJRSxZQUFRLEVBQUUyRCxnQkFKWjtBQUtFLGFBQVMsRUFBRTVDLFNBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBWUdvQyxXQUFXLEtBQUtQLFlBQVksQ0FBQ0UsT0FBN0IsSUFBd0MsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaM0MsRUFjR0ssV0FBVyxLQUFLUCxZQUFZLENBQUNHLE1BQTdCLElBQXVDLE1BQUMsWUFBRDtBQUFjLFdBQU8sRUFBRWhELE9BQXZCO0FBQWdDLGtCQUFjLEVBQUVDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkMUMsQ0FERixFQWlCRSxNQUFDLGlFQUFEO0FBQWMsY0FBVSxFQUFDLDhDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUFxQkQ7O0lBM0R1QmdELFE7O01BQUFBLFEiLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9RdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kYi5qc29uJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaWRnZXQnO1xuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekxvZ28nO1xuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcbmltcG9ydCBBbHRlcm5hdGl2ZXNGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWx0ZXJuYXRpdmVzRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBCYWNrTGlua0Fycm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFja0xpbmtBcnJvdyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcblxuXG5jb25zdCBRdWl6VXNlck5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBuYW1lIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gPHNwYW4+RXN0ZSDDqSBzZXUgcmVzdWx0YWRvIGZpbmFsIHtuYW1lfTwvc3Bhbj5cbn1cblxuZnVuY3Rpb24gUmVzdWx0V2lkZ2V0KHsgcmVzdWx0cywgdG90YWxRdWVzdGlvbnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXaWRnZXQ+XG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgPFF1aXpVc2VyTmFtZSAvPlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtgVm9jw6ogYWNlcnRvdVxuICAgICAgICAgICAgJHtyZXN1bHRzLnJlZHVjZSgoc29tYXRvcmlhQXR1YWwsIHJlc3VsdGFkb0F0dWFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FjZXJ0byA9IHJlc3VsdGFkb0F0dWFsID09PSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzQWNlcnRvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29tYXRvcmlhQXR1YWw7XG5cbiAgICAgICAgICB9LCAwKX1gfVxuXG4gICAgICAgICAgey8qcmVzdWx0cy5maWx0ZXIoKHgpID0+IHgpLmxlbmd0aCovfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgIGRlIHt0b3RhbFF1ZXN0aW9uc30gcGVyZ3VudGFzXG5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgcmVzdWx0X18ke3Jlc3VsdH1gfT5cbiAgICAgICAgICAgICAgI3tpbmRleCArIDF9IFJlc3VsdGFkbzoge3Jlc3VsdCA9PSB0cnVlID8gJ0FjZXJ0b3UgJyA6ICdFcnJvdSd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+XG4gICAgICAgICAgSm9nYXIgTm92YW1lbnRlXG4gICAgICAgICAge2NvbnNvbGUubG9nKFwidGVzdGFuZG9vb29cIil9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICA8L1dpZGdldD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTG9hZGluZ1dpZGdldCgpIHtcbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0PlxuICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgIENhcnJlZ2FuZG8uLi5cbiAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cblxuICAgICAgPFdpZGdldC5Db250ZW50ID5cblxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICA8L1dpZGdldD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoe1xuICBxdWVzdGlvbixcbiAgcXVlc3Rpb25JbmRleCxcbiAgdG90YWxRdWVzdGlvbnMsXG4gIG9uU3VibWl0LFxuICBhZGRSZXN1bHQsXG59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZEFsdGVybmF0aXZlLCBzZXRTZWxlY3RlZEFsdGVybmF0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHF1ZXN0aW9uSWQgPSBgcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gO1xuICBjb25zdCBpc0NvcnJlY3QgPSBzZWxlY3RlZEFsdGVybmF0aXZlID09PSBxdWVzdGlvbi5hbnN3ZXI7XG4gIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0PlxuICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgIDxCYWNrTGlua0Fycm93IGhyZWY9XCIvXCIgPlxuICAgICAgICAgIHtjb25zb2xlLmxvZyhia2Fjail9XG4gICAgICAgIDwvQmFja0xpbmtBcnJvdz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc31gfVxuICAgICAgICA8L2gzPlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzE5MHB4JyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIH19XG4gICAgICAgIHNyYz17cXVlc3Rpb24uaW1hZ2V9XG4gICAgICAvPlxuICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8QWx0ZXJuYXRpdmVzRm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xuICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZFJlc3VsdChpc0NvcnJlY3QpO1xuICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xuICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFsdGVybmF0aXZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9LCAzICogMTAwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XG4gICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZVN0YXR1cyA9IGlzQ29ycmVjdCA/ICdTVUNDRVNTJyA6ICdFUlJPUic7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gYWx0ZXJuYXRpdmVJbmRleDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcbiAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICBrZXk9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH1cbiAgICAgICAgICAgICAgICBkYXRhLXNlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxuICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICB7LyogPHByZT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XG4gICAgICAgICAgPC9wcmU+ICovfVxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XG4gICAgICAgICAgICBDb25maXJtYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmIGlzQ29ycmVjdCAmJiA8cD5Zb3UncmUgZ29kZGFtbiByaWdodCE8L3A+fVxuICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgIWlzQ29ycmVjdCAmJiA8cD5GYWlsITwvcD59XG4gICAgICAgIDwvQWx0ZXJuYXRpdmVzRm9ybT5cbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59XG5cbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcbiAgUVVJWjogJ1FVSVonLFxuICBMT0FESU5HOiAnTE9BRElORycsXG4gIFJFU1VMVDogJ1JFU1VMVCcsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoeyBleHRlcm5hbFF1ZXN0aW9ucywgZXh0ZXJuYWxCZyB9KSB7XG4gIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgY29uc3QgcXVlc3Rpb24gPSBleHRlcm5hbFF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcbiAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBleHRlcm5hbFF1ZXN0aW9ucy5sZW5ndGg7XG4gIGNvbnN0IGJnID0gZXh0ZXJuYWxCZztcblxuICBmdW5jdGlvbiBhZGRSZXN1bHQocmVzdWx0KSB7XG4gICAgLy8gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgc2V0UmVzdWx0cyhbXG4gICAgICAuLi5yZXN1bHRzLFxuICAgICAgcmVzdWx0LFxuICAgIF0pO1xuICB9XG5cbiAgLy8gW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zIHx8IEVmZmVjdHNdXG4gIC8vIFJlYWN0LnVzZUVmZmVjdFxuICAvLyBhdHVhbGl6YWRvID09PSB3aWxsVXBkYXRlXG4gIC8vIG1vcnJlID09PSB3aWxsVW5tb3VudFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZldGNoKCkgLi4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XG4gICAgfSwgMSAqIDIwMDApO1xuICAgIC8vIG5hc2NlID09PSBkaWRNb3VudFxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcbiAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcbiAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2JnfT5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXG4gICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fVxuICAgICAgICAgICAgdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XG4gICAgICAgICAgICBhZGRSZXN1bHQ9e2FkZFJlc3VsdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdXaWRnZXQgLz59XG5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUkVTVUxUICYmIDxSZXN1bHRXaWRnZXQgcmVzdWx0cz17cmVzdWx0c30gdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfSAvPn1cbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS93ZXZlcnNvbm5lcmkvcXVpei1uZXh0bGpzXCIgLz5cbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Quiz/index.js\n");

/***/ })

})