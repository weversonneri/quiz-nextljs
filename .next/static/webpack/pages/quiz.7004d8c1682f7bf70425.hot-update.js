webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/screens/Quiz/index.js":
/*!***********************************!*\
  !*** ./src/screens/Quiz/index.js ***!
  \***********************************/
/*! exports provided: HandleClickHome, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HandleClickHome\", function() { return HandleClickHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuizPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget */ \"./src/components/Widget/index.js\");\n/* harmony import */ var _components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/QuizLogo */ \"./src/components/QuizLogo/index.js\");\n/* harmony import */ var _components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/QuizBackground */ \"./src/components/QuizBackground/index.js\");\n/* harmony import */ var _components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuizContainer */ \"./src/components/QuizContainer/index.js\");\n/* harmony import */ var _components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AlternativesForm */ \"./src/components/AlternativesForm/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BackLinkArrow */ \"./src/components/BackLinkArrow/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/GitHubCorner */ \"./src/components/GitHubCorner/index.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Link */ \"./src/components/Link/index.js\");\n\n\n\nvar _jsxFileName = \"/home/weverson/Temp/Workspaces/imersao-react-alura/learnquiz/src/screens/Quiz/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // import db from '../../../db.json';\n\n\n\n\n\n\n\n\n\n\n\n\nvar QuizUserName = function QuizUserName() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(),\n      name = _useRouter.query.name;\n\n  return __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }, \"Este \\xE9 seu resultado final \", name);\n}; //FUNCIONA MAS AINDA NÃO SEI SE É UMA BOA PRATICA\n\n\n_s(QuizUserName, \"5maMmNWPMTB7P6OcxytbSlIph6Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c = QuizUserName;\nvar HandleClickHome = function HandleClickHome(event) {\n  _s2();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])();\n  event.preventDefault;\n  return __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: function onClick() {\n      return router.push('/');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, \"Responder Novamente\");\n};\n\n_s2(HandleClickHome, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"]];\n});\n\n_c2 = HandleClickHome;\n\nfunction ResultWidget(_ref) {\n  var _this2 = this;\n\n  var results = _ref.results,\n      totalQuestions = _ref.totalQuestions;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(QuizUserName, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Voc\\xEA acertou\\n            \".concat(results.reduce(function (somatoriaAtual, resultadoAtual) {\n    var isAcerto = resultadoAtual === true;\n\n    if (isAcerto) {\n      return somatoriaAtual + 1;\n    }\n\n    return somatoriaAtual;\n  }, 0)), ' ', \"de \", totalQuestions, \" perguntas\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, results.map(function (result, index) {\n    return __jsx(\"li\", {\n      key: \"result__\".concat(result),\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"#\", index + 1, \" Resultado: \", result == true ? 'Acertou ' : 'Errou');\n  })), __jsx(HandleClickHome, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      textDecoration: 'none'\n    },\n    as: _components_Link__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Jogar Novamente\")));\n}\n\n_c3 = ResultWidget;\n\nfunction LoadingWidget() {\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, \"Carregando...\"), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }));\n}\n\n_c4 = LoadingWidget;\n\nfunction QuestionWidget(_ref2) {\n  _s3();\n\n  var _this3 = this;\n\n  var question = _ref2.question,\n      questionIndex = _ref2.questionIndex,\n      totalQuestions = _ref2.totalQuestions,\n      _onSubmit = _ref2.onSubmit,\n      addResult = _ref2.addResult;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(undefined),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      selectedAlternative = _React$useState2[0],\n      setSelectedAlternative = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isQuestionSubmited = _React$useState4[0],\n      setIsQuestionSubmited = _React$useState4[1];\n\n  var questionId = \"question__\".concat(questionIndex);\n  var isCorrect = selectedAlternative === question.answer;\n  var hasAlternativeSelected = selectedAlternative !== undefined;\n  return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, __jsx(_components_BackLinkArrow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, \"Pergunta \".concat(questionIndex + 1, \" de \").concat(totalQuestions))), __jsx(\"img\", {\n    alt: \"Descri\\xE7\\xE3o\",\n    style: {\n      width: '100%',\n      height: '190px',\n      objectFit: 'cover'\n    },\n    src: question.image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Content, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, question.title), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, question.description), __jsx(_components_AlternativesForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: function onSubmit(infosDoEvento) {\n      infosDoEvento.preventDefault();\n      setIsQuestionSubmited(true);\n      setTimeout(function () {\n        addResult(isCorrect);\n\n        _onSubmit();\n\n        setIsQuestionSubmited(false);\n        setSelectedAlternative(undefined);\n      }, 3 * 1000);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, question.alternatives.map(function (alternative, alternativeIndex) {\n    var alternativeId = \"alternative__\".concat(alternativeIndex);\n    var alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';\n    var isSelected = selectedAlternative === alternativeIndex;\n    return __jsx(_components_Widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Topic, {\n      as: \"label\",\n      key: alternativeId,\n      htmlFor: alternativeId,\n      \"data-selected\": isSelected,\n      \"data-status\": isQuestionSubmited && alternativeStatus,\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      style: {\n        display: 'none'\n      },\n      id: alternativeId,\n      name: questionId,\n      onChange: function onChange() {\n        return setSelectedAlternative(alternativeIndex);\n      },\n      type: \"radio\",\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 17\n      }\n    }), alternative);\n  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    type: \"submit\",\n    disabled: !hasAlternativeSelected,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 11\n    }\n  }, \"Confirmar\"), isQuestionSubmited && isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 47\n    }\n  }, \"You're goddamn right!\"), isQuestionSubmited && !isCorrect && __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 48\n    }\n  }, \"Fail!\"))));\n}\n\n_s3(QuestionWidget, \"gOPL1EmksK8wUP52KQZyVU1FVK0=\");\n\n_c5 = QuestionWidget;\nvar screenStates = {\n  QUIZ: 'QUIZ',\n  LOADING: 'LOADING',\n  RESULT: 'RESULT'\n};\nfunction QuizPage(_ref3) {\n  _s4();\n\n  var externalQuestions = _ref3.externalQuestions,\n      externalBg = _ref3.externalBg;\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(screenStates.LOADING),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      screenState = _React$useState6[0],\n      setScreenState = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      results = _React$useState8[0],\n      setResults = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),\n      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState9, 2),\n      currentQuestion = _React$useState10[0],\n      setCurrentQuestion = _React$useState10[1];\n\n  var questionIndex = currentQuestion;\n  var question = externalQuestions[questionIndex];\n  var totalQuestions = externalQuestions.length;\n  var bg = externalBg;\n\n  function addResult(result) {\n    // results.push(result);\n    setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(results), [result]));\n  } // [React chama de: Efeitos || Effects]\n  // React.useEffect\n  // atualizado === willUpdate\n  // morre === willUnmount\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    // fetch() ...\n    setTimeout(function () {\n      setScreenState(screenStates.QUIZ);\n    }, 1 * 2000); // nasce === didMount\n  }, []);\n\n  function handleSubmitQuiz() {\n    var nextQuestion = questionIndex + 1;\n\n    if (nextQuestion < totalQuestions) {\n      setCurrentQuestion(nextQuestion);\n    } else {\n      setScreenState(screenStates.RESULT);\n    }\n  }\n\n  return __jsx(_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    backgroundImage: bg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 5\n    }\n  }, __jsx(_components_QuizContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 7\n    }\n  }, __jsx(_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 9\n    }\n  }), screenState === screenStates.QUIZ && __jsx(QuestionWidget, {\n    question: question,\n    questionIndex: questionIndex,\n    totalQuestions: totalQuestions,\n    onSubmit: handleSubmitQuiz,\n    addResult: addResult,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 11\n    }\n  }), screenState === screenStates.LOADING && __jsx(LoadingWidget, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 50\n    }\n  }), screenState === screenStates.RESULT && __jsx(ResultWidget, {\n    results: results,\n    totalQuestions: totalQuestions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 238,\n      columnNumber: 49\n    }\n  })), __jsx(_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    projectUrl: \"https://github.com/weversonneri/quiz-nextljs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s4(QuizPage, \"op6a2G6WeNFK4t0JnGKr98IrMhU=\");\n\n_c6 = QuizPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"QuizUserName\");\n$RefreshReg$(_c2, \"HandleClickHome\");\n$RefreshReg$(_c3, \"ResultWidget\");\n$RefreshReg$(_c4, \"LoadingWidget\");\n$RefreshReg$(_c5, \"QuestionWidget\");\n$RefreshReg$(_c6, \"QuizPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvUXVpei9pbmRleC5qcz8xZjk5Il0sIm5hbWVzIjpbIlF1aXpVc2VyTmFtZSIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsIkhhbmRsZUNsaWNrSG9tZSIsImV2ZW50Iiwicm91dGVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiUmVzdWx0V2lkZ2V0IiwicmVzdWx0cyIsInRvdGFsUXVlc3Rpb25zIiwicmVkdWNlIiwic29tYXRvcmlhQXR1YWwiLCJyZXN1bHRhZG9BdHVhbCIsImlzQWNlcnRvIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsIkxpbmsiLCJMb2FkaW5nV2lkZ2V0IiwiUXVlc3Rpb25XaWRnZXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uSW5kZXgiLCJvblN1Ym1pdCIsImFkZFJlc3VsdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEFsdGVybmF0aXZlIiwic2V0U2VsZWN0ZWRBbHRlcm5hdGl2ZSIsImlzUXVlc3Rpb25TdWJtaXRlZCIsInNldElzUXVlc3Rpb25TdWJtaXRlZCIsInF1ZXN0aW9uSWQiLCJpc0NvcnJlY3QiLCJhbnN3ZXIiLCJoYXNBbHRlcm5hdGl2ZVNlbGVjdGVkIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmZvc0RvRXZlbnRvIiwic2V0VGltZW91dCIsImFsdGVybmF0aXZlcyIsImFsdGVybmF0aXZlIiwiYWx0ZXJuYXRpdmVJbmRleCIsImFsdGVybmF0aXZlSWQiLCJhbHRlcm5hdGl2ZVN0YXR1cyIsImlzU2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2NyZWVuU3RhdGVzIiwiUVVJWiIsIkxPQURJTkciLCJSRVNVTFQiLCJRdWl6UGFnZSIsImV4dGVybmFsUXVlc3Rpb25zIiwiZXh0ZXJuYWxCZyIsInNjcmVlblN0YXRlIiwic2V0U2NyZWVuU3RhdGUiLCJzZXRSZXN1bHRzIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwibGVuZ3RoIiwiYmciLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdWJtaXRRdWl6IiwibmV4dFF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxtQkFHckJDLDhEQUFTLEVBSFk7QUFBQSxNQUVkQyxJQUZjLGNBRXZCQyxLQUZ1QixDQUVkRCxJQUZjOztBQUt6QixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQWtDQSxJQUFsQyxDQUFQO0FBQ0QsQ0FORCxDLENBUUE7OztHQVJNRixZO1VBR0FDLHNEOzs7S0FIQUQsWTtBQVNDLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0wsOERBQVMsRUFBeEI7QUFDQUksT0FBSyxDQUFDRSxjQUFOO0FBRUEsU0FBTyxNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUQsTUFBTSxDQUFDRSxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUNELENBTE07O0lBQU1KLGU7VUFDSUgsc0Q7OztNQURKRyxlOztBQU9iLFNBQVNLLFlBQVQsT0FBbUQ7QUFBQTs7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUNqRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtB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dCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vZGIuanNvbic7XG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0JztcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1aXpMb2dvJztcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XG5pbXBvcnQgQWx0ZXJuYXRpdmVzRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsdGVybmF0aXZlc0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgQmFja0xpbmtBcnJvdyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JhY2tMaW5rQXJyb3cnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpbmsnO1xuXG5cbmNvbnN0IFF1aXpVc2VyTmFtZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IG5hbWUgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiA8c3Bhbj5Fc3RlIMOpIHNldSByZXN1bHRhZG8gZmluYWwge25hbWV9PC9zcGFuPlxufVxuXG4vL0ZVTkNJT05BIE1BUyBBSU5EQSBOw4NPIFNFSSBTRSDDiSBVTUEgQk9BIFBSQVRJQ0FcbmV4cG9ydCBjb25zdCBIYW5kbGVDbGlja0hvbWUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuXG4gIHJldHVybiA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlJlc3BvbmRlciBOb3ZhbWVudGU8L0J1dHRvbj5cbn1cblxuZnVuY3Rpb24gUmVzdWx0V2lkZ2V0KHsgcmVzdWx0cywgdG90YWxRdWVzdGlvbnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXaWRnZXQ+XG4gICAgICA8V2lkZ2V0LkhlYWRlcj5cbiAgICAgICAgPFF1aXpVc2VyTmFtZSAvPlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtgVm9jw6ogYWNlcnRvdVxuICAgICAgICAgICAgJHtyZXN1bHRzLnJlZHVjZSgoc29tYXRvcmlhQXR1YWwsIHJlc3VsdGFkb0F0dWFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FjZXJ0byA9IHJlc3VsdGFkb0F0dWFsID09PSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzQWNlcnRvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb21hdG9yaWFBdHVhbCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29tYXRvcmlhQXR1YWw7XG5cbiAgICAgICAgICB9LCAwKX1gfVxuXG4gICAgICAgICAgey8qcmVzdWx0cy5maWx0ZXIoKHgpID0+IHgpLmxlbmd0aCovfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgIGRlIHt0b3RhbFF1ZXN0aW9uc30gcGVyZ3VudGFzXG5cbiAgICAgICAgPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgcmVzdWx0X18ke3Jlc3VsdH1gfT5cbiAgICAgICAgICAgICAgI3tpbmRleCArIDF9IFJlc3VsdGFkbzoge3Jlc3VsdCA9PSB0cnVlID8gJ0FjZXJ0b3UgJyA6ICdFcnJvdSd9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8SGFuZGxlQ2xpY2tIb21lIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICBocmVmPXtcIi9cIn0+XG4gICAgICAgICBKb2dhciBOb3ZhbWVudGVcblxuICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICA8L1dpZGdldD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTG9hZGluZ1dpZGdldCgpIHtcbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0PlxuICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgIENhcnJlZ2FuZG8uLi5cbiAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cblxuICAgICAgPFdpZGdldC5Db250ZW50ID5cblxuICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICA8L1dpZGdldD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUXVlc3Rpb25XaWRnZXQoe1xuICBxdWVzdGlvbixcbiAgcXVlc3Rpb25JbmRleCxcbiAgdG90YWxRdWVzdGlvbnMsXG4gIG9uU3VibWl0LFxuICBhZGRSZXN1bHQsXG59KSB7XG4gIGNvbnN0IFtzZWxlY3RlZEFsdGVybmF0aXZlLCBzZXRTZWxlY3RlZEFsdGVybmF0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtpc1F1ZXN0aW9uU3VibWl0ZWQsIHNldElzUXVlc3Rpb25TdWJtaXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHF1ZXN0aW9uSWQgPSBgcXVlc3Rpb25fXyR7cXVlc3Rpb25JbmRleH1gO1xuICBjb25zdCBpc0NvcnJlY3QgPSBzZWxlY3RlZEFsdGVybmF0aXZlID09PSBxdWVzdGlvbi5hbnN3ZXI7XG4gIGNvbnN0IGhhc0FsdGVybmF0aXZlU2VsZWN0ZWQgPSBzZWxlY3RlZEFsdGVybmF0aXZlICE9PSB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0PlxuICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgIDxCYWNrTGlua0Fycm93IGhyZWY9XCIvXCIgLz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIHtgUGVyZ3VudGEgJHtxdWVzdGlvbkluZGV4ICsgMX0gZGUgJHt0b3RhbFF1ZXN0aW9uc31gfVxuICAgICAgICA8L2gzPlxuICAgICAgPC9XaWRnZXQuSGVhZGVyPlxuXG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIkRlc2NyacOnw6NvXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzE5MHB4JyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIH19XG4gICAgICAgIHNyYz17cXVlc3Rpb24uaW1hZ2V9XG4gICAgICAvPlxuICAgICAgPFdpZGdldC5Db250ZW50PlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7cXVlc3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8QWx0ZXJuYXRpdmVzRm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoaW5mb3NEb0V2ZW50bykgPT4ge1xuICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNRdWVzdGlvblN1Ym1pdGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGFkZFJlc3VsdChpc0NvcnJlY3QpO1xuICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xuICAgICAgICAgICAgICBzZXRJc1F1ZXN0aW9uU3VibWl0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEFsdGVybmF0aXZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9LCAzICogMTAwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtxdWVzdGlvbi5hbHRlcm5hdGl2ZXMubWFwKChhbHRlcm5hdGl2ZSwgYWx0ZXJuYXRpdmVJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmVJZCA9IGBhbHRlcm5hdGl2ZV9fJHthbHRlcm5hdGl2ZUluZGV4fWA7XG4gICAgICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZVN0YXR1cyA9IGlzQ29ycmVjdCA/ICdTVUNDRVNTJyA6ICdFUlJPUic7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRBbHRlcm5hdGl2ZSA9PT0gYWx0ZXJuYXRpdmVJbmRleDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxXaWRnZXQuVG9waWNcbiAgICAgICAgICAgICAgICBhcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICBrZXk9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17YWx0ZXJuYXRpdmVJZH1cbiAgICAgICAgICAgICAgICBkYXRhLXNlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGRhdGEtc3RhdHVzPXtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgYWx0ZXJuYXRpdmVTdGF0dXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgaWQ9e2FsdGVybmF0aXZlSWR9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtxdWVzdGlvbklkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNlbGVjdGVkQWx0ZXJuYXRpdmUoYWx0ZXJuYXRpdmVJbmRleCl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2FsdGVybmF0aXZlfVxuICAgICAgICAgICAgICA8L1dpZGdldC5Ub3BpYz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICB7LyogPHByZT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShxdWVzdGlvbiwgbnVsbCwgNCl9XG4gICAgICAgICAgPC9wcmU+ICovfVxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaGFzQWx0ZXJuYXRpdmVTZWxlY3RlZH0+XG4gICAgICAgICAgICBDb25maXJtYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7aXNRdWVzdGlvblN1Ym1pdGVkICYmIGlzQ29ycmVjdCAmJiA8cD5Zb3UncmUgZ29kZGFtbiByaWdodCE8L3A+fVxuICAgICAgICAgIHtpc1F1ZXN0aW9uU3VibWl0ZWQgJiYgIWlzQ29ycmVjdCAmJiA8cD5GYWlsITwvcD59XG4gICAgICAgIDwvQWx0ZXJuYXRpdmVzRm9ybT5cbiAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgPC9XaWRnZXQ+XG4gICk7XG59XG5cbmNvbnN0IHNjcmVlblN0YXRlcyA9IHtcbiAgUVVJWjogJ1FVSVonLFxuICBMT0FESU5HOiAnTE9BRElORycsXG4gIFJFU1VMVDogJ1JFU1VMVCcsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoeyBleHRlcm5hbFF1ZXN0aW9ucywgZXh0ZXJuYWxCZyB9KSB7XG4gIGNvbnN0IFtzY3JlZW5TdGF0ZSwgc2V0U2NyZWVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoc2NyZWVuU3RhdGVzLkxPQURJTkcpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgcXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbjtcbiAgY29uc3QgcXVlc3Rpb24gPSBleHRlcm5hbFF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XTtcbiAgY29uc3QgdG90YWxRdWVzdGlvbnMgPSBleHRlcm5hbFF1ZXN0aW9ucy5sZW5ndGg7XG4gIGNvbnN0IGJnID0gZXh0ZXJuYWxCZztcblxuICBmdW5jdGlvbiBhZGRSZXN1bHQocmVzdWx0KSB7XG4gICAgLy8gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgc2V0UmVzdWx0cyhbXG4gICAgICAuLi5yZXN1bHRzLFxuICAgICAgcmVzdWx0LFxuICAgIF0pO1xuICB9XG5cbiAgLy8gW1JlYWN0IGNoYW1hIGRlOiBFZmVpdG9zIHx8IEVmZmVjdHNdXG4gIC8vIFJlYWN0LnVzZUVmZmVjdFxuICAvLyBhdHVhbGl6YWRvID09PSB3aWxsVXBkYXRlXG4gIC8vIG1vcnJlID09PSB3aWxsVW5tb3VudFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZldGNoKCkgLi4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUVVJWik7XG4gICAgfSwgMSAqIDIwMDApO1xuICAgIC8vIG5hc2NlID09PSBkaWRNb3VudFxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVpeigpIHtcbiAgICBjb25zdCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkluZGV4ICsgMTtcbiAgICBpZiAobmV4dFF1ZXN0aW9uIDwgdG90YWxRdWVzdGlvbnMpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTY3JlZW5TdGF0ZShzY3JlZW5TdGF0ZXMuUkVTVUxUKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2JnfT5cbiAgICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgICA8UXVpekxvZ28gLz5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUVVJWiAmJiAoXG4gICAgICAgICAgPFF1ZXN0aW9uV2lkZ2V0XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbkluZGV4PXtxdWVzdGlvbkluZGV4fVxuICAgICAgICAgICAgdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFF1aXp9XG4gICAgICAgICAgICBhZGRSZXN1bHQ9e2FkZFJlc3VsdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtzY3JlZW5TdGF0ZSA9PT0gc2NyZWVuU3RhdGVzLkxPQURJTkcgJiYgPExvYWRpbmdXaWRnZXQgLz59XG5cbiAgICAgICAge3NjcmVlblN0YXRlID09PSBzY3JlZW5TdGF0ZXMuUkVTVUxUICYmIDxSZXN1bHRXaWRnZXQgcmVzdWx0cz17cmVzdWx0c30gdG90YWxRdWVzdGlvbnM9e3RvdGFsUXVlc3Rpb25zfSAvPn1cbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS93ZXZlcnNvbm5lcmkvcXVpei1uZXh0bGpzXCIgLz5cbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Quiz/index.js\n");

/***/ })

})