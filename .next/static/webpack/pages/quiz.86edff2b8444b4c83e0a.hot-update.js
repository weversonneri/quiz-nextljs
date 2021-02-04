webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/screens/Quiz/index.js":
/*!***********************************!*\
  !*** ./src/screens/Quiz/index.js ***!
  \***********************************/
/*! exports provided: HandleClickHome, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HandleClickHome\", function() { return HandleClickHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AlternativesForm */ \"./src/components/AlternativesForm/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BackLinkArrow */ \"./src/components/BackLinkArrow/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/GitHubCorner */ \"./src/components/GitHubCorner/index.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Link */ \"./src/components/Link/index.js\");\n\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/src/screens/Quiz/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import db from '../../../db.json';\n\n\n\n\n\n\n\n\n\n\n\n\nvar QuizUserName = function QuizUserName() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(),\n      name = _useRouter.query.name;\n\n  return __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }, \"Este \\xE9 seu resultado final \", name);\n};\n\n_s(QuizUserName, \"5maMmNWPMTB7P6OcxytbSlIph6Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = QuizUserName;\nvar HandleClickHome = function HandleClickHome(event) {\n  _s2();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])();\n  event.preventDefault;\n  return __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: function onClick() {\n      return router.push('/');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 10\n    }\n  }, \"fefe\");\n};\n\n_s2(HandleClickHome, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c2 = HandleClickHome;\n\nfunction ResultWidget(_ref) {\n  var _this2 = this;\n\n  var results = _ref.results,\n      totalQuestions = _ref.totalQuestions;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(QuizUserName, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Voc\\xEA acertou\\n            \".concat(results.reduce(function (somatoriaAtual, resultadoAtual) {\n    var isAcerto = resultadoAtual === true;\n\n    if (isAcerto) {\n      return somatoriaAtual + 1;\n    }\n\n    return somatoriaAtual;\n  }, 0)), ' ', \"de \", totalQuestions, \" perguntas\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, results.map(function (result, index) {\n    return __jsx(\"li\", {\n      key: \"result__\".concat(result),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }\n    }, \"#\", index + 1, \" Resultado: \", result == true ? 'Acertou ' : 'Errou');\n  })), __jsx(HandleClickHome, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    as: _components_Link__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Jogar Novamente\", console.log(\"testandoooo\"))));\n}\n\n_c3 = ResultWidget;\n\nfunction LoadingWidget() {\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, \"Carregando...\"), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }));\n}\n\n_c4 = LoadingWidget;\n\nfunction QuestionWidget(_ref2) {\n  _s3();\n\n  var _this3 = this;\n\n  var question = _ref2.question,\n      questionIndex = _ref2.questionIndex,\n      totalQuestions = _ref2.totalQuestions,\n      _onSubmit = _ref2.onSubmit,\n      addResult = _ref2.addResult;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      selectedAlternative = _React$useState2[0],\n      setSelectedAlternative = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isQuestionSubmited = _React$useState4[0],\n      setIsQuestionSubmited = _React$useState4[1];\n\n  var questionId = \"question__\".concat(questionIndex);\n  var isCorrect = selectedAlternative === question.answer;\n  var hasAlternativeSelected = selectedAlternative !== undefined;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, __jsx(_components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '190px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, question.description), __jsx(_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: function onSubmit(infosDoEvento) {\n      infosDoEvento.preventDefault();\n      setIsQuestionSubmited(true);\n      setTimeout(function () {\n        addResult(isCorrect);\n\n        _onSubmit();\n\n        setIsQuestionSubmited(false);\n        setSelectedAlternative(undefined);\n      }, 3 * 1000);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    var alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';\n    var isSelected = selectedAlternative === alternativeIndex;\n    return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      key: alternativeId,\n      htmlFor: alternativeId,\n      \"data-selected\": isSelected,\n      \"data-status\": isQuestionSubmited && alternativeStatus,\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      style: {\n        display: 'none'\n      },\n      id: alternativeId,\n      name: questionId,\n      onChange: function onChange() {\n        return setSelectedAlternative(alternativeIndex);\n      },\n      type: \"radio\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 17\n      }\n    }), alternative);\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    type: \"submit\",\n    disabled: !hasAlternativeSelected,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 11\n    }\n  }, \"Confirmar\"), isQuestionSubmited && isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 47\n    }\n  }, \"You're goddamn right!\"), isQuestionSubmited && !isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 48\n    }\n  }, \"Fail!\"))));\n}\n\n_s3(QuestionWidget, \"gOPL1EmksK8wUP52KQZyVU1FVK0=\");\n\n_c5 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage(_ref3) {\n  _s4();\n\n  var externalQuestions = _ref3.externalQuestions,\n      externalBg = _ref3.externalBg;\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(screenStates.LOADING),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      screenState = _React$useState6[0],\n      setScreenState = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      results = _React$useState8[0],\n      setResults = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState9, 2),\n      currentQuestion = _React$useState10[0],\n      setCurrentQuestion = _React$useState10[1];\n\n  var questionIndex = currentQuestion;\n  var question = externalQuestions[questionIndex];\n  var totalQuestions = externalQuestions.length;\n  var bg = externalBg;\n\n  function addResult(result) {\n    // results.push(result);\n    setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(results), [result]));\n  } // [React chama de: Efeitos || Effects]\n  // React.useEffect\n  // atualizado === willUpdate\n  // morre === willUnmount\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    // fetch() ...\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 2000); // nasce === didMount\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestions) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(screenStates.RESULT);\n    }\n  }\n\n  return __jsx(_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 5\n    }\n  }, __jsx(_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 7\n    }\n  }, __jsx(_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 9\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    addResult: addResult,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 11\n    }\n  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 50\n    }\n  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {\n    results: results,\n    totalQuestions: totalQuestions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 235,\n      columnNumber: 49\n    }\n  })), __jsx(_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    projectUrl: \"https://github.com/weversonneri/quiz-nextljs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s4(QuizPage, \"op6a2G6WeNFK4t0JnGKr98IrMhU=\");\n\n_c6 = QuizPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"QuizUserName\");\n$RefreshReg$(_c2, \"HandleClickHome\");\n$RefreshReg$(_c3, \"ResultWidget\");\n$RefreshReg$(_c4, \"LoadingWidget\");\n$RefreshReg$(_c5, \"QuestionWidget\");\n$RefreshReg$(_c6, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvUXVpei9pbmRleC5qcz8xZjk5Il0sIm5hbWVzIjpbIlF1aXpVc2VyTmFtZSIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsIkhhbmRsZUNsaWNrSG9tZSIsImV2ZW50Iiwicm91dGVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsInRvdGFsUXVlc3Rpb25zIiwicmVkdWNlIiwic29tYXRvcmlhQXR1YWwiLCJyZXN1bHRhZG9BdHVhbCIsImlzQWNlcnRvIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJMaW5rIiwiY29uc29sZSIsImxvZyIsIkxvYWRpbmdXaWRnZXQiLCJRdWVzdGlvbldpZGdldCIsInF1ZXN0aW9uIiwicXVlc3Rpb25JbmRleCIsIm9uU3VibWl0IiwiYWRkUmVzdWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkQWx0ZXJuYXRpdmUiLCJzZXRTZWxlY3RlZEFsdGVybmF0aXZlIiwiaXNRdWVzdGlvblN1Ym1pdGVkIiwic2V0SXNRdWVzdGlvblN1Ym1pdGVkIiwicXVlc3Rpb25JZCIsImlzQ29ycmVjdCIsImFuc3dlciIsImhhc0FsdGVybmF0aXZlU2VsZWN0ZWQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZm9zRG9FdmVudG8iLCJzZXRUaW1lb3V0IiwiYWx0ZXJuYXRpdmVzIiwiYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZUluZGV4IiwiYWx0ZXJuYXRpdmVJZCIsImFsdGVybmF0aXZlU3RhdHVzIiwiaXNTZWxlY3RlZCIsImRpc3BsYXkiLCJzY3JlZW5TdGF0ZXMiLCJRVUlaIiwiTE9BRElORyIsIlJFU1VMVCIsIlF1aXpQYWdlIiwiZXh0ZXJuYWxRdWVzdGlvbnMiLCJleHRlcm5hbEJnIiwic2NyZWVuU3RhdGUiLCJzZXRTY3JlZW5TdGF0ZSIsInNldFJlc3VsdHMiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJsZW5ndGgiLCJiZyIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdFF1aXoiLCJuZXh0UXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLG1CQUdyQkMsOERBQVMsRUFIWTtBQUFBLE1BRWRDLElBRmMsY0FFdkJDLEtBRnVCLENBRWRELElBRmM7O0FBS3pCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBa0NBLElBQWxDLENBQVA7QUFDRCxDQU5EOztHQUFNRixZO1VBR0FDLHNEOzs7S0FIQUQsWTtBQVFDLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0wsOERBQVMsRUFBeEI7QUFDQUksT0FBSyxDQUFDRSxjQUFOO0FBRUEsU0FBTyxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUQsTUFBTSxDQUFDRSxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0QsQ0FMTTs7SUFBTUosZTtVQUNJSCxzRDs7O01BREpHLGU7O0FBT2IsU0FBU0ssWUFBVCxPQUFtRDtBQUFBOztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ2pELFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LENBQUNLLFlBQUQsQ0FBbEI7QUFDRCxLQUZELE1BRU87QUFDTFIsb0JBQWMsQ0FBQ1IsWUFBWSxDQUFDRyxNQUFkLENBQWQ7QUFDRDtBQUNGOztBQUVELFNBQ0UsTUFBQyxrRUFBRDtBQUFnQixtQkFBZSxFQUFFVSxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR04sV0FBVyxLQUFLUCxZQUFZLENBQUNDLElBQTdCLElBQ0MsTUFBQyxjQUFEO0FBQ0UsWUFBUSxFQUFFL0IsUUFEWjtBQUVFLGlCQUFhLEVBQUVDLGFBRmpCO0FBR0Usa0JBQWMsRUFBRWQsY0FIbEI7QUFJRSxZQUFRLEVBQUUwRCxnQkFKWjtBQUtFLGFBQVMsRUFBRTFDLFNBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBWUdrQyxXQUFXLEtBQUtQLFlBQVksQ0FBQ0UsT0FBN0IsSUFBd0MsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaM0MsRUFjR0ssV0FBVyxLQUFLUCxZQUFZLENBQUNHLE1BQTdCLElBQXVDLE1BQUMsWUFBRDtBQUFjLFdBQU8sRUFBRS9DLE9BQXZCO0FBQWdDLGtCQUFjLEVBQUVDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkMUMsQ0FERixFQWlCRSxNQUFDLGlFQUFEO0FBQWMsY0FBVSxFQUFDLDhDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUFxQkQ7O0lBM0R1QitDLFE7O01BQUFBLFEiLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9RdWl6L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kYi5qc29uJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaWRnZXQnO1xuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekxvZ28nO1xuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcbmltcG9ydCBBbHRlcm5hdGl2ZXNGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWx0ZXJuYXRpdmVzRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBCYWNrTGlua0Fycm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFja0xpbmtBcnJvdyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGluayc7XG5cblxuY29uc3QgUXVpelVzZXJOYW1lID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgbmFtZSB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIDxzcGFuPkVzdGUgw6kgc2V1IHJlc3VsdGFkbyBmaW5hbCB7bmFtZX08L3NwYW4+XG59XG5cbmV4cG9ydCBjb25zdCBIYW5kbGVDbGlja0hvbWUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICBcbiAgcmV0dXJuIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+ZmVmZTwvQnV0dG9uPlxufVxuXG5mdW5jdGlvbiBSZXN1bHRXaWRnZXQoeyByZXN1bHRzLCB0b3RhbFF1ZXN0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdpZGdldD5cbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICA8UXVpelVzZXJOYW1lIC8+XG4gICAgICA8L1dpZGdldC5IZWFkZXI+XG5cbiAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2BWb2PDqiBhY2VydG91XG4gICAgICAgICAgICAke3Jlc3VsdHMucmVkdWNlKChzb21hdG9yaWFBdHVhbCwgcmVzdWx0YWRvQXR1YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWNlcnRvID0gcmVzdWx0YWRvQXR1YWwgPT09IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNBY2VydG8pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvbWF0b3JpYUF0dWFsICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbDtcblxuICAgICAgICAgIH0sIDApfWB9XG5cbiAgICAgICAgICB7LypyZXN1bHRzLmZpbHRlcigoeCkgPT4geCkubGVuZ3RoKi99XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICAgZGUge3RvdGFsUXVlc3Rpb25zfSBwZXJndW50YXNcblxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2ByZXN1bHRfXyR7cmVzdWx0fWB9PlxuICAgICAgICAgICAgICAje2luZGV4ICsgMX0gUmVzdWx0YWRvOiB7cmVzdWx0ID09IHRydWUgPyAnQWNlcnRvdSAnIDogJ0Vycm91J31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxIYW5kbGVDbGlja0hvbWUgLz5cbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICBKb2dhciBOb3ZhbWVudGVcbiAgICAgICAgICB7Y29uc29sZS5sb2coXCJ0ZXN0YW5kb29vb1wiKX1cbiAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExvYWRpbmdXaWRnZXQoKSB7XG4gIHJldHVybiAoXG4gICAgPFdpZGdldD5cbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICBDYXJyZWdhbmRvLi4uXG4gICAgICA8L1dpZGdldC5IZWFkZXI+XG5cbiAgICAgIDxXaWRnZXQuQ29udGVudCA+XG5cbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFF1ZXN0aW9uV2lkZ2V0KHtcbiAgcXVlc3Rpb24sXG4gIHF1ZXN0aW9uSW5kZXgsXG4gIHRvdGFsUXVlc3Rpb25zLFxuICBvblN1Ym1pdCxcbiAgYWRkUmVzdWx0LFxufSkge1xuICBjb25zdCBbc2VsZWN0ZWRBbHRlcm5hdGl2ZSwgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbaXNRdWVzdGlvblN1Ym1pdGVkLCBzZXRJc1F1ZXN0aW9uU3VibWl0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBxdWVzdGlvbklkID0gYHF1ZXN0aW9uX18ke3F1ZXN0aW9uSW5kZXh9YDtcbiAgY29uc3QgaXNDb3JyZWN0ID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gcXVlc3Rpb24uYW5zd2VyO1xuICBjb25zdCBoYXNBbHRlcm5hdGl2ZVNlbGVjdGVkID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSAhPT0gdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFdpZGdldD5cbiAgICAgIDxXaWRnZXQuSGVhZGVyPlxuICAgICAgICA8QmFja0xpbmtBcnJvdyBocmVmPVwiL1wiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICB7YFBlcmd1bnRhICR7cXVlc3Rpb25JbmRleCArIDF9IGRlICR7dG90YWxRdWVzdGlvbnN9YH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cblxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJEZXNjcmnDp8Ojb1wiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxOTBweCcsXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICB9fVxuICAgICAgICBzcmM9e3F1ZXN0aW9uLmltYWdlfVxuICAgICAgLz5cbiAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3F1ZXN0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEFsdGVybmF0aXZlc0Zvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KGluZm9zRG9FdmVudG8pID0+IHtcbiAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzUXVlc3Rpb25TdWJtaXRlZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBhZGRSZXN1bHQoaXNDb3JyZWN0KTtcbiAgICAgICAgICAgICAgb25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSwgMyAqIDEwMDApO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cXVlc3Rpb24uYWx0ZXJuYXRpdmVzLm1hcCgoYWx0ZXJuYXRpdmUsIGFsdGVybmF0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlSWQgPSBgYWx0ZXJuYXRpdmVfXyR7YWx0ZXJuYXRpdmVJbmRleH1gO1xuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVTdGF0dXMgPSBpc0NvcnJlY3QgPyAnU1VDQ0VTUycgOiAnRVJST1InO1xuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkQWx0ZXJuYXRpdmUgPT09IGFsdGVybmF0aXZlSW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8V2lkZ2V0LlRvcGljXG4gICAgICAgICAgICAgICAgYXM9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAga2V5PXthbHRlcm5hdGl2ZUlkfVxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgZGF0YS1zZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBkYXRhLXN0YXR1cz17aXNRdWVzdGlvblN1Ym1pdGVkICYmIGFsdGVybmF0aXZlU3RhdHVzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgIGlkPXthbHRlcm5hdGl2ZUlkfVxuICAgICAgICAgICAgICAgICAgbmFtZT17cXVlc3Rpb25JZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTZWxlY3RlZEFsdGVybmF0aXZlKGFsdGVybmF0aXZlSW5kZXgpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthbHRlcm5hdGl2ZX1cbiAgICAgICAgICAgICAgPC9XaWRnZXQuVG9waWM+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgey8qIDxwcmU+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocXVlc3Rpb24sIG51bGwsIDQpfVxuICAgICAgICAgIDwvcHJlPiAqL31cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWhhc0FsdGVybmF0aXZlU2VsZWN0ZWR9PlxuICAgICAgICAgICAgQ29uZmlybWFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge2lzUXVlc3Rpb25TdWJtaXRlZCAmJiBpc0NvcnJlY3QgJiYgPHA+WW91J3JlIGdvZGRhbW4gcmlnaHQhPC9wPn1cbiAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmICFpc0NvcnJlY3QgJiYgPHA+RmFpbCE8L3A+fVxuICAgICAgICA8L0FsdGVybmF0aXZlc0Zvcm0+XG4gICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgIDwvV2lkZ2V0PlxuICApO1xufVxuXG5jb25zdCBzY3JlZW5TdGF0ZXMgPSB7XG4gIFFVSVo6ICdRVUlaJyxcbiAgTE9BRElORzogJ0xPQURJTkcnLFxuICBSRVNVTFQ6ICdSRVNVTFQnLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKHsgZXh0ZXJuYWxRdWVzdGlvbnMsIGV4dGVybmFsQmcgfSkge1xuICBjb25zdCBbc2NyZWVuU3RhdGUsIHNldFNjcmVlblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHNjcmVlblN0YXRlcy5MT0FESU5HKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IHF1ZXN0aW9uSW5kZXggPSBjdXJyZW50UXVlc3Rpb247XG4gIGNvbnN0IHF1ZXN0aW9uID0gZXh0ZXJuYWxRdWVzdGlvbnNbcXVlc3Rpb25JbmRleF07XG4gIGNvbnN0IHRvdGFsUXVlc3Rpb25zID0gZXh0ZXJuYWxRdWVzdGlvbnMubGVuZ3RoO1xuICBjb25zdCBiZyA9IGV4dGVybmFsQmc7XG5cbiAgZnVuY3Rpb24gYWRkUmVzdWx0KHJlc3VsdCkge1xuICAgIC8vIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIHNldFJlc3VsdHMoW1xuICAgICAgLi4ucmVzdWx0cyxcbiAgICAgIHJlc3VsdCxcbiAgICBdKTtcbiAgfVxuXG4gIC8vIFtSZWFjdCBjaGFtYSBkZTogRWZlaXRvcyB8fCBFZmZlY3RzXVxuICAvLyBSZWFjdC51c2VFZmZlY3RcbiAgLy8gYXR1YWxpemFkbyA9PT0gd2lsbFVwZGF0ZVxuICAvLyBtb3JyZSA9PT0gd2lsbFVubW91bnRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBmZXRjaCgpIC4uLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlFVSVopO1xuICAgIH0sIDEgKiAyMDAwKTtcbiAgICAvLyBuYXNjZSA9PT0gZGlkTW91bnRcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdFF1aXooKSB7XG4gICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gcXVlc3Rpb25JbmRleCArIDE7XG4gICAgaWYgKG5leHRRdWVzdGlvbiA8IHRvdGFsUXVlc3Rpb25zKSB7XG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24obmV4dFF1ZXN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2NyZWVuU3RhdGUoc2NyZWVuU3RhdGVzLlJFU1VMVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtiZ30+XG4gICAgICA8UXVpekNvbnRhaW5lcj5cbiAgICAgICAgPFF1aXpMb2dvIC8+XG4gICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlFVSVogJiYgKFxuICAgICAgICAgIDxRdWVzdGlvbldpZGdldFxuICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgcXVlc3Rpb25JbmRleD17cXVlc3Rpb25JbmRleH1cbiAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc31cbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRRdWl6fVxuICAgICAgICAgICAgYWRkUmVzdWx0PXthZGRSZXN1bHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c2NyZWVuU3RhdGUgPT09IHNjcmVlblN0YXRlcy5MT0FESU5HICYmIDxMb2FkaW5nV2lkZ2V0IC8+fVxuXG4gICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLlJFU1VMVCAmJiA8UmVzdWx0V2lkZ2V0IHJlc3VsdHM9e3Jlc3VsdHN9IHRvdGFsUXVlc3Rpb25zPXt0b3RhbFF1ZXN0aW9uc30gLz59XG4gICAgICA8L1F1aXpDb250YWluZXI+XG4gICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vd2V2ZXJzb25uZXJpL3F1aXotbmV4dGxqc1wiIC8+XG4gICAgPC9RdWl6QmFja2dyb3VuZD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/screens/Quiz/index.js\n");

/***/ })

})