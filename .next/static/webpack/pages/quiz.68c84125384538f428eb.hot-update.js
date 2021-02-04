webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/screens/Quiz/index.js":
/*!***********************************!*\
  !*** ./src/screens/Quiz/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AlternativesForm */ \"./src/components/AlternativesForm/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BackLinkArrow */ \"./src/components/BackLinkArrow/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/GitHubCorner */ \"./src/components/GitHubCorner/index.js\");\n\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/src/screens/Quiz/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import db from '../../../db.json';\n\n\n\n\n\n\n\n\n\n\n\nvar QuizUserName = function QuizUserName() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(),\n      name = _useRouter.query.name;\n\n  return __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 10\n    }\n  }, \"Este \\xE9 seu resultado final \", name);\n};\n\n_s(QuizUserName, \"5maMmNWPMTB7P6OcxytbSlIph6Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = QuizUserName;\n\nfunction ResultWidget(_ref) {\n  var _this2 = this;\n\n  var results = _ref.results,\n      totalQuestions = _ref.totalQuestions;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(QuizUserName, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Voc\\xEA acertou\\n            \".concat(results.reduce(function (somatoriaAtual, resultadoAtual) {\n    var isAcerto = resultadoAtual === true;\n\n    if (isAcerto) {\n      return somatoriaAtual + 1;\n    }\n\n    return somatoriaAtual;\n  }, 0)), ' ', \"de \", totalQuestions, \" perguntas\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, results.map(function (result, index) {\n    return __jsx(\"li\", {\n      key: \"result__\".concat(result),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, \"#\", index + 1, \" Resultado: \", result == true ? 'Acertou ' : 'Errou');\n  })), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Jogar Novamente\", console.log(\"testandoooo\"))));\n}\n\n_c2 = ResultWidget;\n\nfunction LoadingWidget() {\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Carregando...\"), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n}\n\n_c3 = LoadingWidget;\n\nfunction QuestionWidget(_ref2) {\n  _s2();\n\n  var _this3 = this;\n\n  var question = _ref2.question,\n      questionIndex = _ref2.questionIndex,\n      totalQuestions = _ref2.totalQuestions,\n      _onSubmit = _ref2.onSubmit,\n      addResult = _ref2.addResult;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      selectedAlternative = _React$useState2[0],\n      setSelectedAlternative = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isQuestionSubmited = _React$useState4[0],\n      setIsQuestionSubmited = _React$useState4[1];\n\n  var questionId = \"question__\".concat(questionIndex);\n  var isCorrect = selectedAlternative === question.answer;\n  var hasAlternativeSelected = selectedAlternative !== undefined;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, console.log(\"bkacj\")), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '190px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, question.description), __jsx(_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: function onSubmit(infosDoEvento) {\n      infosDoEvento.preventDefault();\n      setIsQuestionSubmited(true);\n      setTimeout(function () {\n        addResult(isCorrect);\n\n        _onSubmit();\n\n        setIsQuestionSubmited(false);\n        setSelectedAlternative(undefined);\n      }, 3 * 1000);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    var alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';\n    var isSelected = selectedAlternative === alternativeIndex;\n    return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      key: alternativeId,\n      htmlFor: alternativeId,\n      \"data-selected\": isSelected,\n      \"data-status\": isQuestionSubmited && alternativeStatus,\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      style: {\n        display: 'none'\n      },\n      id: alternativeId,\n      name: questionId,\n      onChange: function onChange() {\n        return setSelectedAlternative(alternativeIndex);\n      },\n      type: \"radio\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 17\n      }\n    }), alternative);\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    type: \"submit\",\n    disabled: !hasAlternativeSelected,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }, \"Confirmar\"), isQuestionSubmited && isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 47\n    }\n  }, \"You're goddamn right!\"), isQuestionSubmited && !isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 48\n    }\n  }, \"Fail!\"))));\n}\n\n_s2(QuestionWidget, \"gOPL1EmksK8wUP52KQZyVU1FVK0=\");\n\n_c4 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage(_ref3) {\n  _s3();\n\n  var externalQuestions = _ref3.externalQuestions,\n      externalBg = _ref3.externalBg;\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(screenStates.LOADING),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      screenState = _React$useState6[0],\n      setScreenState = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      results = _React$useState8[0],\n      setResults = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState9, 2),\n      currentQuestion = _React$useState10[0],\n      setCurrentQuestion = _React$useState10[1];\n\n  var questionIndex = currentQuestion;\n  var question = externalQuestions[questionIndex];\n  var totalQuestions = externalQuestions.length;\n  var bg = externalBg;\n\n  function addResult(result) {\n    // results.push(result);\n    setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(results), [result]));\n  } // [React chama de: Efeitos || Effects]\n  // React.useEffect\n  // atualizado === willUpdate\n  // morre === willUnmount\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    // fetch() ...\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 2000); // nasce === didMount\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestions) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(screenStates.RESULT);\n    }\n  }\n\n  return __jsx(_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 5\n    }\n  }, __jsx(_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }\n  }, __jsx(_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 9\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    addResult: addResult,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 11\n    }\n  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 50\n    }\n  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {\n    results: results,\n    totalQuestions: totalQuestions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 49\n    }\n  })), __jsx(_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    projectUrl: \"https://github.com/weversonneri/quiz-nextljs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s3(QuizPage, \"op6a2G6WeNFK4t0JnGKr98IrMhU=\");\n\n_c5 = QuizPage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"QuizUserName\");\n$RefreshReg$(_c2, \"ResultWidget\");\n$RefreshReg$(_c3, \"LoadingWidget\");\n$RefreshReg$(_c4, \"QuestionWidget\");\n$RefreshReg$(_c5, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvUXVpei9pbmRleC5qcz8xZjk5Il0sIm5hbWVzIjpbIlF1aXpVc2VyTmFtZSIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsIlJlc3VsdFdpZGdldCIsInJlc3VsdHMiLCJ0b3RhbFF1ZXN0aW9ucyIsInJlZHVjZSIsInNvbWF0b3JpYUF0dWFsIiwicmVzdWx0YWRvQXR1YWwiLCJpc0FjZXJ0byIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkxvYWRpbmdXaWRnZXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsIm9uU3VibWl0IiwiYWRkUmVzdWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJhbHRlcm5hdGl2ZXMiLCJhbHRlcm5hdGl2ZSIsImFsdGVybmF0aXZlSW5kZXgiLCJhbHRlcm5hdGl2ZUlkIiwiYWx0ZXJuYXRpdmVTdGF0dXMiLCJpc1NlbGVjdGVkIiwiZGlzcGxheSIsInNjcmVlblN0YXRlcyIsIlFVSVoiLCJMT0FESU5HIiwiUkVTVUxUIiwiUXVpelBhZ2UiLCJleHRlcm5hbFF1ZXN0aW9ucyIsImV4dGVybmFsQmciLCJzY3JlZW5TdGF0ZSIsInNldFNjcmVlblN0YXRlIiwic2V0UmVzdWx0cyIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImxlbmd0aCIsImJnIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0UXVpeiIsIm5leHRRdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG1CQUdyQkMsOERBQVMsRUFIWTtBQUFBLE1BRWRDLElBRmMsY0FFdkJDLEtBRnVCLENBRWRELElBRmM7O0FBS3pCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBa0NBLElBQWxDLENBQVA7QUFDRCxDQU5EOztHQUFNRixZO1VBR0FDLHNEOzs7S0FIQUQsWTs7QUFRTixTQUFTSSxZQUFULE9BQW1EO0FBQUE7O0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFDakQsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0UsTUFBQywwREFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBRU1ELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLFVBQUNDLGNBQUQsRUFBaUJDLGNBQWpCLEVBQW9DO0FBQ3JELFFBQU1DLFFBQVEsR0FBR0QsY0FBYyxLQUFLLElBQXBDOztBQUNBLFFBQUlDLFFBQUosRUFBYztBQUNaLGFBQU9GLGNBQWMsR0FBRyxDQUF4QjtBQUNEOztBQUNELFdBQU9B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YixjQUhsQjtBQUlFLFlBQVEsRUFBRTBELGdCQUpaO0FBS0UsYUFBUyxFQUFFM0MsU0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFZR21DLFdBQVcsS0FBS1AsWUFBWSxDQUFDRSxPQUE3QixJQUF3QyxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVozQyxFQWNHSyxXQUFXLEtBQUtQLFlBQVksQ0FBQ0csTUFBN0IsSUFBdUMsTUFBQyxZQUFEO0FBQWMsV0FBTyxFQUFFL0MsT0FBdkI7QUFBZ0Msa0JBQWMsRUFBRUMsY0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWQxQyxDQURGLEVBaUJFLE1BQUMsaUVBQUQ7QUFBYyxjQUFVLEVBQUMsOENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERjtBQXFCRDs7SUEzRHVCK0MsUTs7TUFBQUEsUSIsImZpbGUiOiIuL3NyYy9zY3JlZW5zL1F1aXovaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RiLmpzb24nO1xuaW1wb3J0IFdpZGdldCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpZGdldCc7XG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWl6TG9nbyc7XG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XG5pbXBvcnQgUXVpekNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xuaW1wb3J0IEFsdGVybmF0aXZlc0Zvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbHRlcm5hdGl2ZXNGb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IEJhY2tMaW5rQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrTGlua0Fycm93JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HaXRIdWJDb3JuZXInO1xuXG5cbmNvbnN0IFF1aXpVc2VyTmFtZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IG5hbWUgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiA8c3Bhbj5Fc3RlIMOpIHNldSByZXN1bHRhZG8gZmluYWwge25hbWV9PC9zcGFuPlxufVxuXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoeyByZXN1bHRzLCB0b3RhbFF1ZXN0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdpZGdldD5cbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICA8UXVpelVzZXJOYW1lIC8+XG4gICAgICA8L1dpZGdldC5IZWFkZXI+XG5cbiAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2BWb2PDqiBhY2VydG91XG4gICAgICAgICAgICAke3Jlc3VsdHMucmVkdWNlKChzb21hdG9yaWFBdHVhbCwgcmVzdWx0YWRvQXR1YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWNlcnRvID0gcmVzdWx0YWRvQXR1YWwgPT09IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNBY2VydG8pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvbWF0b3JpYUF0dWFsICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbDtcblxuICAgICAgICAgIH0sIDApfWB9XG5cbiAgICAgICAgICB7LypyZXN1bHRzLmZpbHRlcigoeCkgPT4geCkubGVuZ3RoKi99XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICAgZGUge3RvdGFsUXVlc3Rpb25zfSBwZXJndW50YXNcblxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2ByZXN1bHRfXyR7cmVzdWx0fWB9PlxuICAgICAgICAgICAgICAje2luZGV4ICsgMX0gUmVzdWx0YWRvOiB7cmVzdWx0ID09IHRydWUgPyAnQWNlcnRvdSAnIDogJ0Vycm91J31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxCdXR0b24gaHJlZj1cIi9cIj5cbiAgICAgICAgICBKb2dhciBOb3ZhbWVudGVcbiAgICAgICAgICB7Y29uc29sZS5sb2coXCJ0ZXN0YW5kb29vb1wiKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgIDwvV2lkZ2V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2FkaW5nV2lkZ2V0KCkge1xuICByZXR1cm4gKFxuICAgIDxXaWRnZXQ+XG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgQ2FycmVnYW5kby4uLlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8V2lkZ2V0LkNvbnRlbnQgPlxuXG4gICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgIDwvV2lkZ2V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBRdWVzdGlvbldpZGdldCh7XG4gIHF1ZXN0aW9uLFxuICBxdWVzdGlvbkluZGV4LFxuICB0b3RhbFF1ZXN0aW9ucyxcbiAgb25TdWJtaXQsXG4gIGFkZFJlc3VsdCxcbn0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQWx0ZXJuYXRpdmUsIHNldFNlbGVjdGVkQWx0ZXJuYXRpdmVdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2lzUXVlc3Rpb25TdWJtaXRlZCwgc2V0SXNRdWVzdGlvblN1Ym1pdGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcXVlc3Rpb25JZCA9IGBxdWVzdGlvbl9fJHtxdWVzdGlvbkluZGV4fWA7XG4gIGNvbnN0IGlzQ29ycmVjdCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IHF1ZXN0aW9uLmFuc3dlcjtcbiAgY29uc3QgaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgIT09IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxXaWRnZXQ+XG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgPEJhY2tMaW5rQXJyb3cgaHJlZj1cIi9cIiA+XG4gICAgICAgICAge2NvbnNvbGUubG9nKFwiYmthY2pcIil9XG4gICAgICAgIDwvQmFja0xpbmtBcnJvdz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc31gfVxuICAgICAgICA8L2gzPlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzE5MHB4JyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIH19XG4gICAgICAgIHNyYz17cXVlc3Rpb24uaW1hZ2V9XG4gICAgICAvPlxuICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8QWx0ZXJuYXRpdmVzRm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xuICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZFJlc3VsdChpc0NvcnJlY3QpO1xuICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xuICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFsdGVybmF0aXZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9LCAzICogMTAwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XG4gICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZVN0YXR1cyA9IGlzQ29ycmVjdCA/ICdTVUNDRVNTJyA6ICdFUlJPUic7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gYWx0ZXJuYXRpdmVJbmRleDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcbiAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICBrZXk9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH1cbiAgICAgICAgICAgICAgICBkYXRhLXNlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxuICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICB7LyogPHByZT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XG4gICAgICAgICAgPC9wcmU+ICovfVxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XG4gICAgICAgICAgICBDb25maXJtYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmIGlzQ29ycmVjdCAmJiA8cD5Zb3UncmUgZ29kZGFtbiByaWdodCE8L3A+fVxuICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgIWlzQ29ycmVjdCAmJiA8cD5GYWlsITwvcD59XG4gICAgICAgIDwvQWx0ZXJuYXRpdmVzRm9ybT5cbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59XG5cbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcbiAgUVVJWjogJ1FVSVonLFxuICBMT0FESU5HOiAnTE9BRElORycsXG4gIFJFU1VMVDogJ1JFU1VMVCcsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoeyBleHRlcm5hbFF1ZXN0aW9ucywgZXh0ZXJuYWxCZyB9KSB7XG4gIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgY29uc3QgcXVlc3Rpb24gPSBleHRlcm5hbFF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcbiAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBleHRlcm5hbFF1ZXN0aW9ucy5sZW5ndGg7XG4gIGNvbnN0IGJnID0gZXh0ZXJuYWxCZztcblxuICBmdW5jdGlvbiBhZGRSZXN1bHQocmVzdWx0KSB7XG4gICAgLy8gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgc2V0UmVzdWx0cyhbXG4gICAgICAuLi5yZXN1bHRzLFxuICAgICAgcmVzdWx0LFxuICAgIF0pO1xuICB9XG5cbiAgLy8gW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zIHx8IEVmZmVjdHNdXG4gIC8vIFJlYWN0LnVzZUVmZmVjdFxuICAvLyBhdHVhbGl6YWRvID09PSB3aWxsVXBkYXRlXG4gIC8vIG1vcnJlID09PSB3aWxsVW5tb3VudFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZldGNoKCkgLi4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XG4gICAgfSwgMSAqIDIwMDApO1xuICAgIC8vIG5hc2NlID09PSBkaWRNb3VudFxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcbiAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcbiAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2JnfT5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXG4gICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fVxuICAgICAgICAgICAgdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XG4gICAgICAgICAgICBhZGRSZXN1bHQ9e2FkZFJlc3VsdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdXaWRnZXQgLz59XG5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUkVTVUxUICYmIDxSZXN1bHRXaWRnZXQgcmVzdWx0cz17cmVzdWx0c30gdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfSAvPn1cbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS93ZXZlcnNvbm5lcmkvcXVpei1uZXh0bGpzXCIgLz5cbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Quiz/index.js\n");

/***/ })

})