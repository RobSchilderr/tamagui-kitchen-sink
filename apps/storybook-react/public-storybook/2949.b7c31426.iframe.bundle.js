"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[2949],{"../../packages/app/src/navigation/useOnRouteChange.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{useOnRouteChange:()=>useOnRouteChange});var _react_navigation_native__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@react-navigation/native/lib/module/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useOnRouteChange(func){var routeIndex=(0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_1__.useNavigationState)((function(state){return null==state?void 0:state.index}));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){Number.isInteger(routeIndex)&&func()}),[routeIndex]),null}}}]);