/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nhtml {\n  height: 100%;\n  margin: 0;\n}\n\nh1{\n    color: green;\n}\n.all{\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    height: 100%;\n}\n.header{\n    background-color: #ececec;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    border-bottom: 3px solid green;\n    \n}\n.mode{\n    justify-self: center;\n    align-self: center;\n    margin-right: 15px;\n}\n.title{\n    justify-self: center;\n    align-self: center;\n}\n.content{\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    \n    \n}\n.leftBar{\n    background-color: rgb(255, 255, 255);\n    color: rgb(41, 17, 17);\n    margin-left: 30px;\n    margin-right: 30px;\n\n\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n\n.rightBar{\n    background-color: #ececec;\n\n}\nh2{\n    font-size: 32px ;\n}\n.home{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.boxHome, .addNewProject{\n    font-size: 25px;\n    cursor: pointer;\n    \n}\n.boxHome:hover {\n    background-color: #9de0a9;\n}\n\n.newProject{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 10px;\n}\n.btnCancelProject, .btnAddProject{\n    height: 30px;\n    width: 80px;\n    border-radius: 10px;\n}\n.projectName{\n    grid-column: 1/3;\n    border-radius: 10px;\n\n}\n.btnCancelProject{\n    background-color: red;\n    color: white;\n}\n.btnAddProject{\n    background-color: green;\n    color: white;\n}\n.taskBox{\n    display: grid;\n    grid-template-columns: repeat(6,1fr);\n    background-color: #9de0a9;\n    margin-left: 30px;\n    margin-right: 30px;\n    border-radius: 15px;\n    flex: 1;\n    border: 1px solid black;\n\n\n}\n.tasksInRight{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-top: 30px;\n}\n.projectBox:hover{\n    cursor: pointer;\n    background-color: lightblue;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project),\n/* harmony export */   exportProjectsToLocalStorage: () => (/* binding */ exportProjectsToLocalStorage),\n/* harmony export */   importProjectsFromLocalStorage: () => (/* binding */ importProjectsFromLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\nclass Project {\n    constructor(title){\n      this.title=title;\n      this.tasks = [];\n    }\n  \n    addTaskIntoProject(task){\n      this.tasks.push(task);\n    }\n  \n    removeTask(index){\n      this.tasks.splice(index,1);\n    }   \n  }\n\n  let importProjectsFromLocalStorage = (key) => {\n    let allProjects = JSON.parse(localStorage.getItem(key));\n    if(!allProjects){\n      // if there is nothing stored in localStorage,\n      return [];\n    }\n    // here, we have an array of generic objects.\n    //  we likely want to .map() over that array, and tell\n    //  them that they are `Project` objects instead\n    allProjects = allProjects.map( (genericObject) =>{\n      let project = new Project(genericObject.title);\n      project.tasks = genericObject.tasks.map((genericTask)=>{\n        let newTaskInP = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](genericTask.title, genericTask.description, genericTask.date, genericTask.priority, genericTask.status)\n        return newTaskInP;\n      })\n      return project;\n    })\n    // if we did that map right, we have an array of Project things!\n    return allProjects;\n  }\n  \n  let exportProjectsToLocalStorage = (key, thingToSave) =>\n    localStorage.setItem(key, JSON.stringify(thingToSave) );\n\n\n    \n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, date, priority, status){\n      this.title = title;\n      this.description = description;\n      this.date = date;\n      this.priority = priority;\n      this.status = status;\n    }\n  }\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\n\n\n\nlet allProjects= (0,_Project__WEBPACK_IMPORTED_MODULE_1__.importProjectsFromLocalStorage)(\"allprojects\");\n\nconst today = document.querySelector(\"#today\");\nconst allTasks = document.querySelector(\"#allTasks\");\nconst important = document.querySelector(\"#important\");\nconst tasksInRight = document.querySelector(\".tasksInRight\");\nconst btnAddNewTask = document.querySelector(\".btnAddNewTask\");\nconst addNewProject = document.querySelector(\".addNewProject\");\nconst barTitle = document.querySelector(\".barTitle\");\nconst projectsList = document.querySelector(\".projectsList\");\n\n\n\n\nmakeProject();\n\n\nlet canClikAgain = true;\n\n\n\nfunction forAddingNewProject(){\n    if(canClikAgain){\n        \n   \n        \n        const newProject = document.createElement(\"div\");\n        newProject.classList.add(\"newProject\");\n    \n\n        const projectName = document.createElement(\"input\");\n        \n         newProject.appendChild(projectName);\n        projectName.classList.add(\"projectName\");\n        \n\n        const btnAddProject = document.createElement(\"button\");\n        btnAddProject.textContent = \"Add\";\n        newProject.appendChild(btnAddProject);\n        btnAddProject.classList.add(\"btnAddProject\");\n    \n        btnAddProject.addEventListener(\"click\", () => {\n            if(projectName.value == \"\"){\n                alert(\"You must fill input with some value\");\n            } else{\n                projectsList.removeChild(projectsList.lastChild);\n                const p = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                p.title = projectName.value\n                allProjects.push(p);\n                (0,_Project__WEBPACK_IMPORTED_MODULE_1__.exportProjectsToLocalStorage)(\"allprojects\", allProjects);\n                makeProject();\n                canClikAgain = true;\n                \n\n            }\n        })\n\n        const btnCancelProject = document.createElement(\"button\");\n        btnCancelProject.textContent = \"Cancel\";\n        newProject.appendChild(btnCancelProject);\n        btnCancelProject.addEventListener(\"click\", () => {\n        projectsList.removeChild(projectsList.lastChild);\n        canClikAgain = true;\n\n        })\n\n        btnCancelProject.classList.add(\"btnCancelProject\");\n\n\n        \n      \n\n        projectsList.appendChild(newProject);\n        canClikAgain = false;\n    }\n    \n}\nconsole.log(allProjects);\n\n\naddNewProject.addEventListener(\"click\", () => {\n    \n    forAddingNewProject();\n\n    \n    \n})\n\n \nfunction  makeProject(){\n    \n    \n    while(projectsList.firstChild){\n        projectsList.removeChild(projectsList.lastChild);\n    }\n    allProjects.forEach(pro => {\n        let index = allProjects.indexOf(pro);\n        \n    const projectBox = document.createElement(\"div\");\n    projectBox.classList.add(\"projectBox\");\n    const para = document.createElement(\"p\");\n    para.textContent = pro.title;\n    projectBox.appendChild(para);\n\n    \n    let taksBtnCreated = false;\n\n    projectBox.addEventListener(\"click\", () => {\n        barTitle.innerHTML = pro.title;\n        \n      tasksInRight.innerHTML = \"\";\n    \n      taksBtnCreated = false;\n     \n\n\n        if(taksBtnCreated == false){\n            btnAddNewTask.innerHTML = \"\";\n\n            const createBtn = document.createElement(\"button\");\n            createBtn.textContent= \"+Add\";\n            btnAddNewTask.appendChild(createBtn);\n\n        \n\n        createBtn.addEventListener(\"click\", () =>{\n        \n            const taskBox = document.createElement(\"div\");\n            const taskTitle = document.createElement(\"p\");\n            taskTitle.textContent = \"Title:\";\n            taskBox.appendChild(taskTitle);\n            \n            const taskTitleInput = document.createElement(\"input\");\n            taskBox.appendChild(taskTitleInput);\n\n            const taskDetails = document.createElement(\"p\");\n            taskDetails.textContent = \"Details:\";\n            taskBox.appendChild(taskDetails);\n\n            const taskDetailsInput = document.createElement(\"input\");\n            taskBox.appendChild(taskDetailsInput);\n\n            const datePara = document.createElement(\"p\");\n            datePara.textContent = \"Pick a date\";\n            taskBox.appendChild(datePara);\n        \n            const datePicker = document.createElement(\"input\");\n            datePicker.setAttribute('type', 'date');\n            taskBox.appendChild(datePicker);\n\n            const importance = document.createElement(\"p\");\n            importance.textContent = \"priority?\";\n            taskBox.appendChild(importance);\n            const imp = document.createElement(\"button\");\n            imp.textContent = \"not priority\";\n            imp.style.color = \"black\";\n            \n            taskBox.appendChild(imp);\n            imp.addEventListener(\"click\" , ()=> {\n                if(imp.textContent == \"not priority\"){\n                    imp.style.color = \"white\";\n                    imp.style.backgroundColor =\"green\";\n                    imp.textContent = \"priority\";\n                } \n                else if(imp.textContent == \"priority\"){\n                    imp.style.backgroundColor =\"red\";\n                    imp.style.color = \"black\";\n                    imp.textContent = \"not priority\";\n                }\n            })\n\n            \n\n            const add = document.createElement(\"button\");\n            add.textContent = \"Add\";\n            taskBox.appendChild(add);\n            add.classList.add(\"add\");\n    \n        add.addEventListener(\"click\", () => {\n            \n                tasksInRight.removeChild(tasksInRight.lastChild);\n                const task = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                task.title = taskTitleInput.value;\n                task.description = taskDetailsInput.value;\n                if(imp.textContent == \"not priority\"){\n                    task.priority = \"not priority\";\n                } else if(imp.textContent == \"priority\"){\n                    task.priority = \"priority\";\n                }\n                \n                task.date = datePicker.value;\n                pro.addTaskIntoProject(task);\n                (0,_Project__WEBPACK_IMPORTED_MODULE_1__.exportProjectsToLocalStorage)(\"allprojects\", allProjects);\n\n                makeTask(task,pro);\n                \n               \n                \n            \n        })\n\n         \n\n        const btnCancelTask = document.createElement(\"button\");\n        btnCancelTask.textContent = \"Cancel\";\n        taskBox.appendChild(btnCancelTask);\n        btnCancelTask.addEventListener(\"click\", () => {\n            tasksInRight.removeChild(tasksInRight.lastChild);\n        \n\n        })\n\n            tasksInRight.appendChild(taskBox);\n\n\n        })\n\n        \n\n        taksBtnCreated = true;\n        \n        }\n        // displaying tasks in current project\n       \n        displayTasks(pro);\n    })\n    \n\n    \n\n    const removeProject = document.createElement(\"button\");\n    removeProject.textContent = \"remove\";\n    projectBox.appendChild(removeProject);\n    removeProject.addEventListener(\"click\", ()=> {\n        allProjects.splice(index,1);\n        (0,_Project__WEBPACK_IMPORTED_MODULE_1__.exportProjectsToLocalStorage)(\"allprojects\", allProjects);\n        makeProject();\n        barTitle.textContent = \"\";\n        btnAddNewTask.innerHTML = \"\";\n        tasksInRight.innerHTML = \"\";\n    })\n\n    projectsList.appendChild(projectBox);\n    })\n    \n}\nfunction displayTasks(pro){\n   \n    pro.tasks.forEach(taskInProject => {\n        makeTask(taskInProject,pro);\n      })\n}\n\n\nfunction makeTask(task,pro){\n\n    \n\n    \n    const taskBox = document.createElement(\"div\");\n    taskBox.classList.add(\"taskBox\");\n    const title = document.createElement(\"p\");\n    title.textContent = task.title;\n    taskBox.appendChild(title);\n\n    const description = document.createElement(\"p\");\n    description.textContent = task.description;\n    taskBox.appendChild(description);\n\n    const date = document.createElement(\"p\");\n    date.textContent = task.date;\n    taskBox.appendChild(date);\n\n\n    const importance = document.createElement(\"p\");\n    importance.textContent = task.priority;\n    taskBox.appendChild(importance);\n\n    const done = document.createElement(\"button\");\n    done.textContent = \"unfinished\";\n    task.status = \"unfinished\"\n    done.style.backgroundColor =\"red\";\n    done.addEventListener(\"click\", ()=>{\n        if(done.textContent == \"unfinished\"){\n            done.style.color = \"white\";\n            done.style.backgroundColor =\"green\";\n            done.textContent = \"finished\";\n            task.status = \"finished\"\n        } \n        else if(done.textContent == \"finished\"){\n            done.style.backgroundColor =\"red\";\n            done.style.color = \"black\";\n             done.textContent = \"unfinished\";\n             task.status = \"unfinished\"\n        }\n        \n\n    })\n    taskBox.appendChild(done);\n    \n\n    const delTask = document.createElement(\"button\");\n    delTask.textContent = \"delete\";\n    delTask.addEventListener(\"click\", () => {\n        \n        \n        pro.removeTask(pro.tasks.indexOf(task));\n        (0,_Project__WEBPACK_IMPORTED_MODULE_1__.exportProjectsToLocalStorage)(\"allprojects\", allProjects);\n        \n        tasksInRight.innerHTML = \"\";\n        displayTasks(pro);\n        \n    })\n    taskBox.appendChild(delTask);\n\n    tasksInRight.appendChild(taskBox);\n }\n\nfunction initialDIsplay(){\n    barTitle.textContent = allTasks.innerHTML;\n    btnAddNewTask.innerHTML = \"\";\n    tasksInRight.innerHTML = \"\";\n    allProjects.forEach(project => {\n        project.tasks.forEach(taskInProject => {\n            makeTask(taskInProject);\n            \n          })\n    })\n}\n\nallTasks.addEventListener(\"click\" , () => {\n   \n    barTitle.textContent = allTasks.innerHTML;\n    btnAddNewTask.innerHTML = \"\";\n    tasksInRight.innerHTML = \"\";\n    allProjects.forEach(project => {\n        project.tasks.forEach(taskInProject => {\n            makeTask(taskInProject);\n            \n          })\n    })\n})\n\nimportant.addEventListener(\"click\" , ()=> {\n    barTitle.textContent = important.innerHTML;\n    btnAddNewTask.innerHTML = \"\";\n    tasksInRight.innerHTML = \"\";\n    allProjects.forEach(project => {\n        project.tasks.forEach(taskInProject => {\n            if(taskInProject.priority == \"priority\"){\n                makeTask(taskInProject);\n            }\n            \n            \n          })\n    })\n\n})\n\ntoday.addEventListener(\"click\", () => {\n    barTitle.textContent = today.innerHTML;\n    btnAddNewTask.innerHTML = \"\";\n    tasksInRight.innerHTML = \"\";\n    allProjects.forEach(project => {\n        project.tasks.forEach(taskInProject => {\n            const date = new Date();\n            date.getDate();\n            const result = date.toISOString().split('T')[0]\n            \n            if(taskInProject.date == result){\n               makeTask(taskInProject);\n            }\n            \n            \n          })\n    })\n\n})\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;