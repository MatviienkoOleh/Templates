(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+m+8":
/*!****************************************************************!*\
  !*** ./src/app/modules/home/components/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onNavigate(target) {
        if (target.value) {
            this.router.navigate([target.value]);
            return true;
        }
        else {
            return false;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 0, consts: [["display", "none"], ["id", "instagram", "viewBox", "0 0 24 24"], ["d", "m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z", "fill", "url(#SVGID_1_)"], ["d", "m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z", "fill", "#fff"], ["id", "facebook", "viewBox", "0 0 112.196 112.196"], ["cx", "56.098", "cy", "56.098", "r", "56.098", 2, "fill", "#3B5998"], ["d", "M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34\n        c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z", 2, "fill", "#FFFFFF"], [1, "wrapper"], [1, "header"], [1, "header_Navigation"], [1, "container"], [1, "dropdown", "dropdown-dark"], ["name", "two", 1, "dropdown-select", 3, "change"], ["id", "form", "value", ""], ["id", "form", "value", "form"], ["id", "form", "value", "services"], ["id", "form", "value", "FAQ"], ["routerLink", "/form", 1, "myButton"], [1, "main_content"], [1, "main_footer"], [1, "fotter_links"], [1, "syte_Links"], [1, "icon_instagram"], ["href", ""], [0, "xlink", "href", "#instagram"], [1, "icon_facebook"], [0, "xlink", "href", "#facebook"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "symbol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_select_change_13_listener($event) { return ctx.onNavigate($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "F&Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0412\u0425\u041E\u0414");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "main", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " (change)= \"navigateTo($event.target.value)\"\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E | 9:00 \u2014 18:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "use", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "use", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(#ffffff, #585e66);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.header_Navigation[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: gray;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  height: 28px;\n  width: 150px;\n  background: #f2f2f2;\n  border: 1px solid;\n  border-color: white #f7f7f7 whitesmoke;\n  border-radius: 3px;\n  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.dropdown[_ngcontent-%COMP%]:before, .dropdown[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 9px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 4px dashed;\n  border-color: #888888 transparent;\n  pointer-events: none;\n}\n\n.dropdown[_ngcontent-%COMP%]:before {\n  border-bottom-style: solid;\n  border-top: none;\n}\n\n.dropdown[_ngcontent-%COMP%]:after {\n  margin-top: 7px;\n  border-top-style: solid;\n  border-bottom: none;\n}\n\n.dropdown-select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 130%;\n  margin: 0;\n  padding: 6px 8px 6px 10px;\n  height: 28px;\n  line-height: 14px;\n  font-size: 12px;\n  color: #62717a;\n  text-shadow: 0 1px white;\n  background: #f2f2f2;\n  border-radius: 0;\n  -webkit-appearance: none;\n}\n\n.dropdown-select[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n  width: 100%;\n  color: #394349;\n  outline: 2px solid #49aff2;\n  outline: 2px solid -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.dropdown-select[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\n  margin: 3px;\n  padding: 6px 8px;\n  text-shadow: none;\n  background: #f2f2f2;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.lt-ie9[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.lt-ie9[_ngcontent-%COMP%]   .dropdown-select[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.lt-ie9[_ngcontent-%COMP%]   .dropdown-select[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n}\n\n@-moz-document url-prefix() {\n  .dropdown-select {\n    padding-left: 6px;\n  }\n}\n\n.dropdown-dark[_ngcontent-%COMP%] {\n  background: #444;\n  border-color: #111111 #0a0a0a black;\n  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n\n.dropdown-dark[_ngcontent-%COMP%]:before {\n  border-bottom-color: #aaa;\n}\n\n.dropdown-dark[_ngcontent-%COMP%]:after {\n  border-top-color: #aaa;\n}\n\n.dropdown-dark[_ngcontent-%COMP%]   .dropdown-select[_ngcontent-%COMP%] {\n  color: #aaa;\n  text-shadow: 0 1px black;\n  background: #444;\n}\n\n.dropdown-dark[_ngcontent-%COMP%]   .dropdown-select[_ngcontent-%COMP%]:focus {\n  color: #ccc;\n}\n\n.dropdown-dark[_ngcontent-%COMP%]   .dropdown-select[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\n  background: #444;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.4);\n}\n\n.myButton[_ngcontent-%COMP%] {\n  margin-right: 20px;\n\tbox-shadow:inset 0px 1px 3px 0px #525252;\n\tbackground:linear-gradient(to bottom, #555555 5%, #3b3b3b 100%);\n\tbackground-color:#707070;\n\tborder-radius:5px;\n\tborder:1px solid #010504;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#949494;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding: 8px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px -1px 0px #2b665e;\n}\n\n.myButton[_ngcontent-%COMP%]:hover {\n\tbackground:linear-gradient(to bottom, #3b3b3b 5%, #707070 100%);\n\tbackground-color:#3b3b3b;\n}\n\n.myButton[_ngcontent-%COMP%]:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n.main_content[_ngcontent-%COMP%] {\n  background-color: lightslategray;\n  margin-top: 5%;\n  width: 90%;\n  margin-left: 5%;\n  border: 1px solid black;\n  height: 70vh;\n}\n\n.main_footer[_ngcontent-%COMP%] {\n  background-color: lightslategray;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10%;\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.fotter_links[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.syte_Links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 4%;\n}\n\n.icon_facebook[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: block;\n  width: 40px;\n  height: 40px;\n}\n\n.icon_instagram[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBSWxCLDhFQUE4RTtFQUU5RSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLDBCQUEwQjtFQUMxQiwyQ0FBMkM7RUFDM0Msb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFJbkMsNkVBQTZFO0VBRTdFLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtDQUNuQix3Q0FBd0M7Q0FDeEMsK0RBQStEO0NBQy9ELHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsK0RBQStEO0NBQy9ELHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0FBQ1I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgIzU4NWU2Nik7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyX05hdmlnYXRpb24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAjZjdmN2Y3IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjA2KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4wNikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjA2KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuMDYpKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5kcm9wZG93bjpiZWZvcmUsIC5kcm9wZG93bjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogOXB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiA0cHggZGFzaGVkO1xuICBib3JkZXItY29sb3I6ICM4ODg4ODggdHJhbnNwYXJlbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZHJvcGRvd246YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5kcm9wZG93bjphZnRlciB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5kcm9wZG93bi1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMzAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDEwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MjcxN2E7XG4gIHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0OmZvY3VzIHtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMzk0MzQ5O1xuICBvdXRsaW5lOiAycHggc29saWQgIzQ5YWZmMjtcbiAgb3V0bGluZTogMnB4IHNvbGlkIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QgPiBvcHRpb24ge1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubHQtaWU5IC5kcm9wZG93biB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sdC1pZTkgLmRyb3Bkb3duLXNlbGVjdCB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubHQtaWU5IC5kcm9wZG93bi1zZWxlY3Q6Zm9jdXMge1xuICB6LWluZGV4OiAzO1xufVxuXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuZHJvcGRvd24tc2VsZWN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgfVxufVxuXG4uZHJvcGRvd24tZGFyayB7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIGJvcmRlci1jb2xvcjogIzExMTExMSAjMGEwYTBhIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5kcm9wZG93bi1kYXJrOmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNhYWE7XG59XG5cbi5kcm9wZG93bi1kYXJrOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2FhYTtcbn1cblxuLmRyb3Bkb3duLWRhcmsgLmRyb3Bkb3duLXNlbGVjdCB7XG4gIGNvbG9yOiAjYWFhO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggYmxhY2s7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG59XG5cbi5kcm9wZG93bi1kYXJrIC5kcm9wZG93bi1zZWxlY3Q6Zm9jdXMge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmRyb3Bkb3duLWRhcmsgLmRyb3Bkb3duLXNlbGVjdCA+IG9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5teUJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcblx0Ym94LXNoYWRvdzppbnNldCAwcHggMXB4IDNweCAwcHggIzUyNTI1Mjtcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTU1NTU1IDUlLCAjM2IzYjNiIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM3MDcwNzA7XG5cdGJvcmRlci1yYWRpdXM6NXB4O1xuXHRib3JkZXI6MXB4IHNvbGlkICMwMTA1MDQ7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0Y29sb3I6Izk0OTQ5NDtcblx0Zm9udC1mYW1pbHk6QXJpYWw7XG5cdGZvbnQtc2l6ZToxNXB4O1xuXHRmb250LXdlaWdodDpib2xkO1xuXHRwYWRkaW5nOiA4cHggMjNweDtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93OjBweCAtMXB4IDBweCAjMmI2NjVlO1xufVxuXG4ubXlCdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYjNiM2IgNSUsICM3MDcwNzAgMTAwJSk7XG5cdGJhY2tncm91bmQtY29sb3I6IzNiM2IzYjtcbn1cblxuLm15QnV0dG9uOmFjdGl2ZSB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHR0b3A6MXB4O1xufVxuXG4ubWFpbl9jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYWluX2Zvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5mb3R0ZXJfbGlua3Mge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnN5dGVfTGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA0JTtcbn1cblxuLmljb25fZmFjZWJvb2sge1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pY29uX2luc3RhZ3JhbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oleh/Рабочий стол/Temlates/Templates/Angular/work/modules-routing/src/main.ts */"zUnb");


/***/ }),

/***/ "9NiU":
/*!*******************************************!*\
  !*** ./src/app/modules/faq/faq.module.ts ***!
  \*******************************************/
/*! exports provided: FAQModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQModule", function() { return FAQModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/faq/faq.component */ "Lpbr");




class FAQModule {
}
FAQModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FAQModule });
FAQModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FAQModule_Factory(t) { return new (t || FAQModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FAQModule, { declarations: [_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAQModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "Whea");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationBarComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationBarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [
                    _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationBarComponent"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "H4LN":
/*!*********************************************!*\
  !*** ./src/app/modules/form/form.module.ts ***!
  \*********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form/form.component */ "jSfV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_components_account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/components/account/account.component */ "RcHk");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");








const routesOne = [
    { path: 'form/account', component: _account_components_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] },
];
class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routesOne)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routesOne)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Lpbr":
/*!*************************************************************!*\
  !*** ./src/app/modules/faq/components/faq/faq.component.ts ***!
  \*************************************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FAQComponent {
    constructor() { }
    ngOnInit() {
    }
}
FAQComponent.ɵfac = function FAQComponent_Factory(t) { return new (t || FAQComponent)(); };
FAQComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQComponent, selectors: [["app-faq"]], decls: 76, vars: 0, consts: [[1, "wrapper"], [1, "list_of_Links_FAQ"], [1, "list_link_block"], ["href", "", 1, "links_FAQ"]], template: function FAQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0420\u0421\u041E, \u041C\u0421\u0417, \u0422\u0411\u041E... \u0447\u0442\u043E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u043C\u043E\u0449\u044C \u0441\u043E \u0432\u0445\u043E\u0434\u043E\u043C \u0438 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0430\u0443\u043D\u0442\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043B\u0438 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u0435\u0441\u0442\u044C \u0437\u0430\u0432\u043E\u0434\u044B-\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438. \u0413\u0434\u0435 \u043E\u043D\u0438 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u0430\u043A\u043E\u0432\u044B \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041A\u0430\u043A \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0437\u0430\u0432\u043E\u0434\u044B-\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u0451 \u043E\u0442\u0432\u0435\u0437\u0442\u0438 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0437\u0430\u0432\u043E\u0434-\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A (\u0444\u0438\u0437. \u043B\u0438\u0446\u0430\u043C)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041F\u0440\u0430\u0432\u0434\u0430 \u043B\u0438, \u0447\u0442\u043E \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0438 \u0443 \u043D\u0430\u0441 \u043D\u0435 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041A\u0430\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0442\u0440\u0443\u0434\u043D\u043E (\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E) \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043B\u0438 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435 \u043E\u0431\u0443\u0432\u044C, \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u0443\u044E \u043A \u043D\u043E\u0441\u043A\u0435?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0410 \u043D\u0435 \u043F\u0440\u043E\u0449\u0435 \u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0437\u0430\u0432\u043E\u0434\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0430\u043C\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u0442\u044C \u043C\u0443\u0441\u043E\u0440?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0410 \u043D\u0435 \u043F\u0440\u043E\u0449\u0435 \u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043C\u0443\u0441\u043E\u0440\u043E\u0441\u0436\u0438\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0432\u043E\u0434\u044B \u0438 \u0438\u0437\u0431\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043E\u0442 \u043C\u0443\u0441\u043E\u0440\u0430 \u0441 \u0438\u0445 \u043F\u043E\u043C\u043E\u0449\u044C\u044E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041A\u043E\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0431\u043E\u0440 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0434\u0432\u043E\u0440\u0435?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0427\u0442\u043E \u0434\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041E \u043F\u0443\u043D\u043A\u0442\u0430\u0445 \u0438 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0413\u0434\u0435 \u044F \u043C\u043E\u0433\u0443 \u043D\u0430\u0439\u0442\u0438 \u043F\u0443\u043D\u043A\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0431\u043E\u0440\u0430 \u0438\u043B\u0438 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043B\u044F \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u044F?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041F\u0440\u0430\u0432\u0434\u0430 \u043B\u0438, \u0447\u0442\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u0451 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0432\u0430\u043B\u044F\u0442 \u0432 \u043E\u0434\u043D\u0443 \u043A\u0443\u0447\u0443 \u0438 \u0432\u0435\u0437\u0443\u0442 \u043D\u0430 \u0441\u0432\u0430\u043B\u043A\u0443/\u041C\u0421\u0417?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0440\u0430\u0437\u043D\u044B\u0435 \u0432\u0438\u0434\u044B \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u044F \u0438\u043D\u043E\u0433\u0434\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442 \u0432 \u043E\u0434\u0438\u043D \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u0451 \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0431\u043E\u0440\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442 \u0432 \u043E\u0434\u0438\u043D \u043C\u0443\u0441\u043E\u0440\u043E\u0432\u043E\u0437 \u0441\u043E \u0441\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0442\u0445\u043E\u0434\u0430\u043C\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u0451 \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0431\u043E\u0440\u0430 \u043D\u0435\u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u044B\u0432\u043E\u0437\u044F\u0442?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u041A\u0443\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0430\u0442\u044C \u0440\u0442\u0443\u0442\u043D\u044B\u0439 \u0433\u0440\u0430\u0434\u0443\u0441\u043D\u0438\u043A?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u041A\u0443\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0430\u0442\u044C \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u041A\u0443\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0430\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u043E\u0441\u0431\u0435\u0440\u0435\u0433\u0430\u044E\u0449\u0438\u0435 \u0440\u0442\u0443\u0442\u043D\u044B\u0435 \u043B\u0430\u043C\u043F\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0437\u0430\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0435 \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u044F \u0438\u043B\u0438 \u043D\u0435 \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.list_of_Links_FAQ[_ngcontent-%COMP%] {\n    width: 80vw;\n    list-style-type: none;\n    border: 1px solid black;\n    padding: 5%;\n    background: linear-gradient(#ffffff, #585e66);\n}\n\n.list_link_block[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: rgb(243, 243, 243);\n}\n\n.links_FAQ[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoiZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saXN0X29mX0xpbmtzX0ZBUSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjNTg1ZTY2KTtcbn1cblxuLmxpc3RfbGlua19ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG4ubGlua3NfRkFRIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAQComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RcHk":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/account/account.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 34, vars: 0, consts: [["display", "none"], ["id", "tree", "viewBox", "0 0 512 512"], ["d", "M478.747,240.972c0-34.779-21.15-64.618-51.289-77.357c5.322-10.289,8.347-21.959,8.347-34.342\n\tc0-41.349-33.52-74.87-74.87-74.87c-11.781,0-22.921,2.729-32.837,7.577c-8.811-31.544-37.741-54.693-72.097-54.693\n\ts-63.286,23.149-72.097,54.694c-9.915-4.848-21.056-7.577-32.837-7.577c-41.349,0-74.87,33.52-74.87,74.87\n\tc0,12.383,3.025,24.053,8.347,34.342c-30.139,12.739-51.289,42.578-51.289,77.357c0,45.073,35.535,81.799,80.112,83.81\n\tc6.215,22.511,30.215,39.292,58.896,39.292c16.256,0,31.001-5.399,41.869-14.166c10.867,8.767,25.613,14.166,41.869,14.166\n\ts31.001-5.399,41.869-14.166c10.867,8.767,25.613,14.166,41.869,14.166c28.682,0,52.682-16.782,58.896-39.292\n\tC443.212,322.771,478.747,286.045,478.747,240.972z", 2, "fill", "#129B12"], ["d", "M251.511,7.435c-0.922,0.055-1.84,0.122-2.752,0.211c-0.279,0.027-0.557,0.058-0.836,0.088\n\t\tc-0.98,0.106-1.955,0.228-2.924,0.372c-0.181,0.027-0.363,0.053-0.544,0.081c-1.153,0.18-2.298,0.38-3.433,0.611\n\t\tc-0.002,0-0.004,0.001-0.006,0.001c19.654,3.997,38.056,17.686,49.714,34.941c8.256,12.219,22.362,19.262,37.074,18.262\n\t\tc0.098-0.007,0.196-0.013,0.294-0.02c-8.81-31.546-37.74-54.695-72.096-54.695c-1.204,0-2.4,0.035-3.591,0.092\n\t\tC252.11,7.393,251.811,7.417,251.511,7.435z", 2, "fill", "#097C09"], ["d", "M427.457,163.615c5.323-10.289,8.347-21.959,8.347-34.342c0-41.349-33.52-74.87-74.87-74.87\n\t\tc-5.131,0-10.141,0.519-14.981,1.504c34.165,6.944,59.879,37.151,59.879,73.366c0,12.383-3.025,24.053-8.347,34.342\n\t\tc30.139,12.739,51.289,42.578,51.289,77.357c0,45.073-35.535,81.799-80.111,83.809c-5.094,18.45-22.139,33.044-43.913,37.712\n\t\tc4.793,1.029,9.813,1.581,14.988,1.581c28.681,0,52.682-16.782,58.896-39.292c44.577-2.01,80.111-38.736,80.111-83.809\n\t\tC478.747,206.193,457.598,176.355,427.457,163.615z", 2, "fill", "#097C09"], ["d", "M202.392,337.507c-6.752,11.452-34.735,24.258-45.112,24.986c1.142,0.245,2.299,0.459,3.465,0.649\n\tc0.094,0.015,0.187,0.032,0.281,0.047c1.183,0.188,2.377,0.349,3.583,0.478c0.031,0.003,0.062,0.005,0.093,0.009\n\tc1.085,0.115,2.182,0.197,3.285,0.263c0.269,0.016,0.537,0.031,0.807,0.044c1.149,0.055,2.304,0.092,3.47,0.092l0,0\n\tc14.826,0,28.385-4.501,38.902-11.942l1.844-1.341l-9.391-15.408L202.392,337.507z", 2, "fill", "#009000"], ["d", "M293.438,356.625l32.077-50.616c2.537-4.004,1.77-9.26-1.807-12.371l0,0\n\tc-3.819-3.322-9.562-3.105-13.119,0.496l-23.623,23.916c-3.133,3.172-8.501,0.534-7.904-3.884l6.947-51.468\n\tc0.742-5.499-3.323-10.479-8.859-10.853l-6.508-0.44c-4.891-0.33-9.244,3.08-10.093,7.907l-12.399,70.449\n\tc-0.69,3.918-5.665,5.211-8.175,2.124l-38.834-47.759c-2.687-3.305-7.232-4.442-11.158-2.791l-6.799,2.858\n\tc-5.383,2.263-7.513,8.77-4.509,13.777l39.907,66.518c5.779,9.633,8.162,20.934,6.717,32.074\n\tc-5.172,39.888-11.596,77.507-37.887,108.151h137.185l0,0c-28.144-32.805-35.086-73.601-38.811-116.618\n\tC284.827,377.049,287.503,365.99,293.438,356.625z", 2, "fill", "#BF6101"], ["d", "M325.513,306.009c2.537-4.004,1.77-9.26-1.807-12.371l0,0c-3.819-3.322-9.562-3.105-13.119,0.496\n\tl-10.55,10.68l0,0l-13.073,13.236c-3.133,3.172-8.5,0.534-7.904-3.884l6.947-51.468c0.724-5.36-3.125-10.214-8.447-10.803\n\tl-19.533,121.408c-0.328,1.568-0.585,3.151-0.763,4.745l0,0l0,0c-0.372,3.318-0.422,6.683-0.131,10.046\n\tc3.725,43.018,10.667,83.814,38.811,116.618l0,0h28.649l0,0c-28.144-32.805-35.086-73.601-38.811-116.618\n\tc-0.956-11.046,1.719-22.105,7.654-31.47L325.513,306.009z", 2, "fill", "#9A4D01"], ["d", "M241.753,66.065c-21.005,0-39.087,12.467-47.284,30.399c-8.468-5.984-18.796-9.511-29.953-9.511\n\tc-28.706,0-51.977,23.271-51.977,51.977c0,9.472,2.546,18.343,6.972,25.991c-24.926,3.832-44.014,25.371-44.014,51.37\n\tc0,28.706,23.271,51.977,51.977,51.977s166.256-121.52,166.256-150.226S270.458,66.065,241.753,66.065z", 2, "fill", "#28A528"], ["d", "M437.094,160.109c3.984-9.778,5.998-20.118,5.998-30.835c0-2.173-0.086-4.369-0.256-6.524\n\tc-0.316-4.012-3.827-7.005-7.836-6.692c-4.011,0.316-7.008,3.824-6.692,7.836c0.139,1.777,0.211,3.587,0.211,5.38\n\tc0,10.904-2.534,21.332-7.532,30.994c-0.934,1.803-1.071,3.914-0.381,5.824s2.146,3.445,4.016,4.235\n\tc28.454,12.027,46.84,39.757,46.84,70.645c0,41.064-32.133,74.68-73.154,76.53c-3.153,0.142-5.856,2.298-6.695,5.34\n\tc-5.43,19.669-27.246,33.945-51.872,33.945c-11.734,0-22.926-3.123-32.145-8.889l24.074-37.99c1.687-2.662,2.553-5.613,2.643-8.553\n\tc0.149-4.9-1.859-9.768-5.821-13.215c-6.703-5.832-16.843-5.447-23.086,0.873l-18.065,18.289l5.89-43.63\n\tc0.622-4.613-0.709-9.326-3.652-12.931c-2.575-3.155-6.228-5.269-10.212-5.959c-0.569-0.098-1.145-0.168-1.725-0.207l-6.508-0.44\n\tc-3.238-0.22-6.335,0.485-9.019,1.9c-4.474,2.358-7.805,6.692-8.742,12.014l-5.698,32.375l-5.698,32.374l-35.182-43.267\n\tc-1.167-1.435-2.543-2.638-4.056-3.591c-0.009-0.006-0.018-0.013-0.027-0.019c-0.163-0.102-0.334-0.19-0.5-0.287\n\tc-2.165-1.257-4.579-2.032-7.062-2.252c-0.079-0.007-0.16-0.006-0.239-0.012c-0.366-0.027-0.732-0.05-1.1-0.054\n\tc-2.242-0.022-4.506,0.401-6.65,1.303l-6.799,2.858c-4.515,1.897-7.978,5.655-9.502,10.309c-1.524,4.655-0.953,9.733,1.567,13.934\n\tl28.798,48c-8.59,4.588-18.647,7.068-28.958,7.068c-24.627,0-46.442-14.276-51.872-33.944c-0.84-3.043-3.543-5.198-6.695-5.34\n\tc-41.021-1.85-73.154-35.466-73.154-76.531c0-30.889,18.386-58.619,46.84-70.645c1.87-0.79,3.326-2.325,4.016-4.235\n\ts0.552-4.021-0.381-5.824c-4.998-9.662-7.532-20.09-7.532-30.994c0-37.265,30.318-67.583,67.583-67.583\n\tc10.387,0,20.359,2.3,29.637,6.836c1.943,0.951,4.209,0.988,6.184,0.102c1.973-0.886,3.452-2.603,4.034-4.687\n\tc8.118-29.067,34.88-49.368,65.079-49.368s56.961,20.301,65.079,49.368c0.583,2.084,2.061,3.802,4.034,4.687\n\tc1.974,0.887,4.241,0.85,6.184-0.102c9.278-4.536,19.25-6.836,29.637-6.836c24.911,0,47.73,13.639,59.551,35.596\n\tc1.907,3.543,6.327,4.869,9.87,2.961c3.544-1.907,4.869-6.327,2.961-9.87c-14.367-26.684-42.102-43.26-72.382-43.26\n\tc-9.839,0-19.373,1.699-28.444,5.061C320.293,21.083,289.932,0,256.001,0s-64.292,21.083-76.49,52.179\n\tc-9.071-3.362-18.605-5.061-28.444-5.061c-45.302,0-82.157,36.855-82.157,82.156c0,10.717,2.014,21.058,5.998,30.835\n\tc-29.962,15.653-48.94,46.627-48.94,80.863c0,47.179,35.631,86.097,82.019,90.723c9.12,23.595,34.75,39.665,64.275,39.665\n\tc12.944,0,25.62-3.214,36.457-9.142l3.611,6.018c4.926,8.212,6.965,17.938,5.74,27.389c-1.06,8.171-2.365,17.793-4.02,27.211\n\tc-0.696,3.964,1.953,7.741,5.916,8.437c3.969,0.697,7.741-1.953,8.437-5.916c1.705-9.703,3.039-19.527,4.119-27.86\n\tc1.645-12.691-1.087-25.746-7.695-36.759l-39.907-66.517c-0.472-0.786-0.337-1.53-0.214-1.904c0.122-0.374,0.454-1.053,1.298-1.408\n\tl6.8-2.858c0.936-0.394,2.04-0.118,2.681,0.671l38.835,47.76c0.103,0.126,0.212,0.244,0.319,0.365\n\tc1.443,1.64,3.238,2.819,5.211,3.466c2.096,0.688,4.386,0.778,6.651,0.205c0.025-0.006,0.05-0.01,0.076-0.017c0,0,0,0,0.001,0h0.001\n\tc2.201-0.572,4.115-1.714,5.604-3.259c0.058-0.061,0.121-0.118,0.178-0.179c0.052-0.057,0.1-0.118,0.151-0.176\n\tc1.428-1.611,2.418-3.615,2.813-5.862l12.399-70.449c0.205-1.164,1.274-1.977,2.426-1.901l6.509,0.44\n\tc0.867,0.059,1.394,0.553,1.63,0.843c0.236,0.289,0.615,0.903,0.498,1.766l-6.947,51.469c-0.086,0.637-0.12,1.271-0.104,1.898\n\tc0.108,4.389,2.632,8.422,6.667,10.404c0.288,0.142,0.58,0.271,0.875,0.387c1.473,0.584,3.019,0.858,4.55,0.837\n\tc3.062-0.042,6.067-1.263,8.323-3.548l23.622-23.916c0.408-0.413,0.939-0.636,1.481-0.673c0.024-0.002,0.047-0.008,0.071-0.009\n\tc0.012,0,0.024,0.002,0.036,0.002c0.414-0.009,0.83,0.089,1.201,0.302c0.127,0.073,0.249,0.159,0.364,0.259\n\tc0.865,0.753,1.047,2.004,0.434,2.973l-32.077,50.616c-6.737,10.632-9.848,23.417-8.758,35.999\n\tc3.052,35.249,8.341,74.994,31.324,108.703H202.105c8.224-12.196,14.614-26.071,19.392-42.043c1.153-3.855-1.037-7.916-4.893-9.069\n\tc-3.857-1.153-7.917,1.037-9.069,4.893c-5.828,19.482-14.22,35.433-25.657,48.761c-1.853,2.16-2.279,5.202-1.09,7.788\n\tc1.189,2.586,3.774,4.243,6.62,4.243h137.185c2.846,0,5.432-1.657,6.62-4.243c1.189-2.586,0.763-5.628-1.09-7.787\n\tc-28.059-32.706-33.853-75.221-37.082-112.503c-0.815-9.421,1.51-18.99,6.549-26.941l0.204-0.323\n\tc11.543,7.234,25.447,11.158,39.944,11.158c29.525,0,55.155-16.07,64.275-39.666c46.388-4.626,82.019-43.544,82.019-90.722\n\tC486.034,206.736,467.055,175.762,437.094,160.109z", 2, "fill", "#121419"], [1, "wrapper"], [1, "main_info"], [1, "list_Elements"], [1, "elements"], [0, "xlink", "href", "#tree"], [1, "content_block"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041C\u0430\u0448\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u042F\u043A\u0443\u0442\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+380638067874");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0411\u0430\u043B\u0430\u043D\u0441: 2000 points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rank: 163");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Registration in : 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Some Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(#ffffff, #585e66);\n}\n\n.main_info[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.list_Elements[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-left: -20px;\n}\n\n.elements[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.content_block[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  background-color: #f3f3f3;\n  border-radius: 10px;\n  margin-top: 3%;\n  margin-left: 8%;\n  width: 80vw;\n  height: 60vh;\n  border: 1px solid #2b270a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgIzU4NWU2Nik7XG59XG5cbi5tYWluX2luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGlzdF9FbGVtZW50cyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4uZWxlbWVudHMge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb250ZW50X2Jsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogOCU7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYjI3MGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UQkx":
/*!****************************************************************************!*\
  !*** ./src/app/modules/services/components/services/services.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WNGt":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessories/accessories.module */ "ryoB");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.module */ "lKKO");
/* harmony import */ var _faq_faq_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.module */ "9NiU");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.module */ "H4LN");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "iydT");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.module */ "YFug");






const modules = [
    _accessories_accessories_module__WEBPACK_IMPORTED_MODULE_0__["AccessoriesModule"],
    _account_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"],
    _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
    _form_form_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"],
    _services_services_module__WEBPACK_IMPORTED_MODULE_5__["ServicesModule"],
    _faq_faq_module__WEBPACK_IMPORTED_MODULE_2__["FAQModule"]
];


/***/ }),

/***/ "Whea":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/navigation-bar/navigation-bar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 11, vars: 0, consts: [[1, "navigation_Bar"], ["routerLink", "/home", 1, "links"], ["routerLink", "/accessories", 1, "links"], ["routerLink", "/account", 1, "links"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navigation_Bar[_ngcontent-%COMP%] {\n  width: 200px;\n  font-size: 30px;\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.links[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgb(0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckIiLCJmaWxlIjoibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uX0JhciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5saW5rcyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-bar',
                templateUrl: './navigation-bar.component.html',
                styleUrls: ['./navigation-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YFug":
/*!*****************************************************!*\
  !*** ./src/app/modules/services/services.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services/services.component */ "UQkx");




class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ "WNGt");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "o0su");
/* harmony import */ var _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accessories/accessories.module */ "ryoB");
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/account/account.module */ "lKKO");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/home/home.module */ "iydT");
/* harmony import */ var _modules_form_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/form/form.module */ "H4LN");
/* harmony import */ var _modules_services_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/services/services.module */ "YFug");
/* harmony import */ var _modules_faq_faq_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/faq/faq.module */ "9NiU");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._services__WEBPACK_IMPORTED_MODULE_5__["correctPath"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_accessories_accessories_module__WEBPACK_IMPORTED_MODULE_6__["AccessoriesModule"], _modules_account_account_module__WEBPACK_IMPORTED_MODULE_7__["AccountModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _modules_form_form_module__WEBPACK_IMPORTED_MODULE_9__["FormModule"], _modules_services_services_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModule"], _modules_faq_faq_module__WEBPACK_IMPORTED_MODULE_11__["FAQModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ..._modules__WEBPACK_IMPORTED_MODULE_4__["modules"]
                ],
                providers: [
                    ..._services__WEBPACK_IMPORTED_MODULE_5__["correctPath"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f6y5":
/*!*************************************************!*\
  !*** ./src/app/services/correctPath.servece.ts ***!
  \*************************************************/
/*! exports provided: correctPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctPathService", function() { return correctPathService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class correctPathService {
    constructor() {
        this.currentUrl = [];
        this.mockList = [
            {
                message: 'User tends to home',
                journey: ['/home', '/account', '/home']
            },
            {
                message: 'User tends to account',
                journey: ['/account', '/home', '/account']
            },
            {
                message: 'User loves journeys',
                journey: ['/home', '/account', '/accessories']
            }
        ];
    }
    findPath(url) {
        this.currentUrl.push(url);
        const currentUrlString = this.currentUrl.toString();
        for (let i = 0; i < this.mockList.length; i++) {
            if (currentUrlString.includes(this.mockList[i].journey.toString())) {
                console.log(this.mockList[i].message);
                this.currentUrl = [];
            }
        }
    }
}
correctPathService.ɵfac = function correctPathService_Factory(t) { return new (t || correctPathService)(); };
correctPathService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: correctPathService, factory: correctPathService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](correctPathService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "hxf/":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/accessories/components/accessories/accessories.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccessoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function() { return AccessoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navigation-bar/navigation-bar.component */ "Whea");



class AccessoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessoriesComponent.ɵfac = function AccessoriesComponent_Factory(t) { return new (t || AccessoriesComponent)(); };
AccessoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessoriesComponent, selectors: [["app-accessories"]], decls: 5, vars: 0, consts: [[1, "nav_Bar"], [1, "header"], [1, "accessories"]], template: function AccessoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft \u00E9\u00E9n van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van \"de Finibus Bonorum et Malorum\" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", komt uit een zin in sectie 1.10.32. Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van \"de Finibus Bonorum et Malorum\" door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"]], styles: [".accessories[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  justify-content: center;\n  border: 1px solid hsl(0, 0%, 0%);\n  padding: 10px;\n}\n\n.nav_Bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzc29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhY2Nlc3Nvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2Vzc29yaWVzIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCAwJSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYXZfQmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accessories',
                templateUrl: './accessories.component.html',
                styleUrls: ['./accessories.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "+m+8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jSfV":
/*!****************************************************************!*\
  !*** ./src/app/modules/form/components/form/form.component.ts ***!
  \****************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FormComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 16, vars: 0, consts: [[1, "wrapper"], [1, "login-box"], [1, "user-box"], ["type", "text", "name", "", "required", ""], ["type", "password", "name", "", "required", ""], ["routerLink", "account", "href", "#"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    height: 97vh;\n    background: linear-gradient(#ffffff, #585e66);\n}\n\n.login-box[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 350px;\n    padding: 40px;\n    transform: translate(-50%, -50%);\n    background: rgba(255, 254, 254, 0.5);\n    box-sizing: border-box;\n    box-shadow: 0 15px 25px rgba(0,0,0,.6);\n    border-radius: 10px;\n}\n\n.login-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0 0 30px;\n    padding: 0;\n    color: rgb(0, 0, 0);\n    text-align: center;\n}\n\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n    font-size: 16px;\n    color: rgb(0, 0, 0);\n    margin-bottom: 30px;\n    border: none;\n    border-bottom: 1px solid rgb(10, 10, 10);\n    outline: none;\n    background: transparent;\n  }\n\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    top:0;\n    left: 0;\n    padding: 10px 0;\n    font-size: 16px;\n    color: rgb(0, 0, 0);\n    pointer-events: none;\n    transition: .5s;\n  }\n\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 0;\n    color: #000000;\n    font-size: 12px;\n  }\n\n.login-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    padding: 10px 20px;\n    color: #000000;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    overflow: hidden;\n    transition: .5s;\n    margin-top: 40px;\n    letter-spacing: 4px;\n    border: 1px solid black;\n  }\n\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n  }\n\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    top: -100%;\n    right: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(180deg, transparent, #000000);\n    animation: btn-anim2 1s linear infinite;\n    animation-delay: .25s\n  }\n\n@keyframes btn-anim2 {\n    0% {\n      top: -100%;\n    }\n    50%,100% {\n      top: 100%;\n    }\n  }\n\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n    bottom: 0;\n    right: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(270deg, transparent, #000000);\n    animation: btn-anim3 1s linear infinite;\n    animation-delay: .5s\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUU7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsT0FBTztJQUNQLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCOztBQUVBOztJQUVFLFVBQVU7SUFDVixPQUFPO0lBQ1AsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlEQUF5RDtJQUN6RCx1Q0FBdUM7SUFDdkM7RUFDRjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxTQUFTO0lBQ1g7RUFDRjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsdUNBQXVDO0lBQ3ZDO0VBQ0YiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGhlaWdodDogOTd2aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgIzU4NWU2Nik7XG59XG5cbi5sb2dpbi1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDI1cHggcmdiYSgwLDAsMCwuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiAgXG4ubG9naW4tYm94IGgyIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gIFxuICAubG9naW4tYm94IC51c2VyLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubG9naW4tYm94IC51c2VyLWJveCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTAsIDEwLCAxMCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAubG9naW4tYm94IC51c2VyLWJveCBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgfVxuICBcbiAgLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcbiAgLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBcbiAgLmxvZ2luLWJveCBmb3JtIGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIC5sb2dpbi1ib3ggYSBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgdG9wOiAtMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgIzAwMDAwMCk7XG4gICAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjI1c1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJ0bi1hbmltMiB7XG4gICAgMCUge1xuICAgICAgdG9wOiAtMTAwJTtcbiAgICB9XG4gICAgNTAlLDEwMCUge1xuICAgICAgdG9wOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLmxvZ2luLWJveCBhIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCAjMDAwMDAwKTtcbiAgICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNXNcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lKKO":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account/account.component */ "RcHk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");





class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _components_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: correctPath, correctPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctPath", function() { return correctPath; });
/* harmony import */ var _correctPath_servece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctPath.servece */ "f6y5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctPathService", function() { return _correctPath_servece__WEBPACK_IMPORTED_MODULE_0__["correctPathService"]; });


const correctPath = [
    _correctPath_servece__WEBPACK_IMPORTED_MODULE_0__["correctPathService"],
];



/***/ }),

/***/ "ryoB":
/*!***********************************************************!*\
  !*** ./src/app/modules/accessories/accessories.module.ts ***!
  \***********************************************************/
/*! exports provided: AccessoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoriesModule", function() { return AccessoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accessories/accessories.component */ "hxf/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");





class AccessoriesModule {
}
AccessoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccessoriesModule });
AccessoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccessoriesModule_Factory(t) { return new (t || AccessoriesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessoriesModule, { declarations: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [
                    _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_2__["AccessoriesComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_faq_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/faq/components/faq/faq.component */ "Lpbr");
/* harmony import */ var _modules_form_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form/components/form/form.component */ "jSfV");
/* harmony import */ var _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/components/home/home.component */ "+m+8");
/* harmony import */ var _modules_services_components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/services/components/services/services.component */ "UQkx");








const routes = [
    { path: '', component: _modules_home_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'form', component: _modules_form_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'services', component: _modules_services_components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"] },
    { path: 'FAQ', component: _modules_faq_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map