(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ahnaf\Documents\Github\portfolio-site-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "0lWy":
/*!*****************************************************!*\
  !*** ./src/app/components/music/music.component.ts ***!
  \*****************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



class MusicComponent {
    constructor() {
        this.faGit = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"];
    }
    ngOnInit() {
    }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) { return new (t || MusicComponent)(); };
MusicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MusicComponent, selectors: [["app-music"]], decls: 31, vars: 1, consts: [[1, "container"], [1, "outer"], ["href", "https://ahnafone.github.io/MusicBot/", "target", "_blank"], [1, "inner"], ["src", "assets/images/musicbot.png", "alt", ""], [1, "desc"], [1, "title"], [1, "cta"], [1, "cta-btn"], ["href", "https://github.com/ahnafone/MusicBot/", "target", "_blank"], [1, "cta-btn", "cta-primary"], [3, "icon"]], template: function MusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "MusicBot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " This is a personal project. It is a bot that works similarly to a discord music bot. It allows you and your friends to queue songs and play it, but it comes with the added benefit of not requiring discord to work. Its fun for parties! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " You can check out the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "UI Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " as well as the source code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Technologies used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "React, Node.js, and Express.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGit);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n    width: 30vw;\r\n    margin-left: 3rem;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: var(--sub1);\r\n    margin: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: var(--main-dark);\r\n}\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    width: 50vw; height: 40vh;\r\n    position: relative;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    width: 47vw; padding-top: 56.25%;\r\n    overflow: hidden;\r\n    border-radius: 15px;\r\n    box-shadow: 3px 3px 15px grey;\r\n    transition: width 300ms, padding-top 300ms;\r\n\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    cursor: pointer;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%]:hover {\r\n    width: 50vw;\r\n    transition: width 300ms, padding-top 300ms;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.cta-btn[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    font-weight: 700;\r\n    color: var(--sub1);\r\n    background-color: white;\r\n    border: 2px solid var(--sub1);\r\n    border-radius: 30px;\r\n    margin: 0 3px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.cta-btn[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    background-color: var(--sub1);\r\n}\r\n\r\n.cta-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n\r\n.cta-primary[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: var(--sub1);\r\n}\r\n\r\n.cta-primary[_ngcontent-%COMP%]:hover {\r\n    color: var(--sub1);\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBSUE7SUFDSSxXQUFXLEVBQUUsWUFBWTtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDBDQUEwQzs7SUFFMUMsa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJtdXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHZhcigtLXN1YjEpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyayk7XHJcbn1cclxuXHJcblxyXG5cclxuLm91dGVyIHtcclxuICAgIHdpZHRoOiA1MHZ3OyBoZWlnaHQ6IDQwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICB3aWR0aDogNDd2dzsgcGFkZGluZy10b3A6IDU2LjI1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxNXB4IGdyZXk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcywgcGFkZGluZy10b3AgMzAwbXM7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbm5lcjpob3ZlciB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zLCBwYWRkaW5nLXRvcCAzMDBtcztcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY3RhLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tc3ViMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1YjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uY3RhLWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIxKTtcclxufVxyXG5cclxuLmN0YS1idG4gZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jdGEtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIxKTtcclxufVxyXG4uY3RhLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXN1YjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/scroll.service */ "uPsD");


class HeaderComponent {
    constructor(scroll) {
        this.scroll = scroll;
        this.pages = 0;
        this.page = 0;
    }
    ngOnInit() {
        this.pages = this.scroll.getPages().length;
        this.pageRef = this.scroll.getPageObs().subscribe(page => this.page = page);
    }
    ngOnDestroy() {
        this.pageRef.unsubscribe();
    }
    goto(i) {
        this.scroll.jumpToPage(i);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "name", 3, "click"], [1, "contact", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_1_listener() { return ctx.goto(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ahnaf Ahmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_3_listener() { return ctx.goto(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.page != 0 && ctx.page != ctx.pages - 1);
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: -6rem; left: 0; right: 0;\r\n    z-index: 10;\r\n\r\n    height: 5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 2rem;\r\n\r\n    opacity: 0;\r\n    transition: opacity 150ms, top 300ms;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    color: var(--main-dark);\r\n}\r\n\r\n.name[_ngcontent-%COMP%]:hover {\r\n    color: var(--main);\r\n}\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n    color: var(--sub1);\r\n    font-size: 0.8rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]:hover {\r\n    color: rgb(247, 165, 150);\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    opacity: 1;\r\n    transition: opacity 400ms, top 300ms;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUTtJQUM3QixXQUFXOztJQUVYLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTZyZW07IGxlZnQ6IDA7IHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMsIHRvcCAzMDBtcztcclxufVxyXG5cclxuLmNvbnRhaW5lciBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG59XHJcbi5uYW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLXN1YjEpO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jb250YWN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAxNjUsIDE1MCk7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zLCB0b3AgMzAwbXM7XHJcbn0iXX0= */"] });


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

/***/ "Bcdz":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-arrows/nav-arrows.component.ts ***!
  \***************************************************************/
/*! exports provided: NavArrowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavArrowsComponent", function() { return NavArrowsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/scroll.service */ "uPsD");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavArrowsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavArrowsComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.navigate(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r0.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faDown);
} }
function NavArrowsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavArrowsComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.navigateTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back to Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r1.show);
} }
class NavArrowsComponent {
    constructor(scroll) {
        this.scroll = scroll;
        this.pages = 0;
        this.page = 0;
        this.show = false;
        this.faUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleUp"];
        this.faDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleDown"];
        this.pages = scroll.getPages().length;
        this.pageRef = scroll.getPageObs().subscribe(page => {
            this.page = page;
            this.displayNav();
        });
    }
    ngOnInit() {
        this.displayNav();
    }
    ngOnDestroy() {
        this.pageRef.unsubscribe();
    }
    displayNav() {
        this.show = false;
        setTimeout(() => {
            this.show = true;
        }, 1000);
    }
    navigate(dir) {
        if (dir) {
            this.scroll.navigate({ up: true });
        }
        else {
            this.scroll.navigate({ down: true });
        }
    }
    navigateTop() {
        this.scroll.navigate({ top: true });
    }
}
NavArrowsComponent.ɵfac = function NavArrowsComponent_Factory(t) { return new (t || NavArrowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"])); };
NavArrowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavArrowsComponent, selectors: [["app-nav-arrows"]], decls: 4, vars: 3, consts: [[1, "arrow", "up"], [3, "icon"], ["class", "arrow down", 3, "show", "click", 4, "ngIf"], [1, "arrow", "down", 3, "click"]], template: function NavArrowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavArrowsComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavArrowsComponent_div_3_Template, 3, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page + 1 != ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page + 1 == ctx.pages);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".arrow[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n\r\n    color: white;\r\n    background-color: var(--sub1);\r\n    padding: 0.2rem 1rem;\r\n    border-radius: 15px;\r\n\r\n    margin: 0;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.arrow[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n.arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    display: inline-block;\r\n}\r\n.up[_ngcontent-%COMP%] {\r\n    top: 0;\r\n}\r\n.down[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n}\r\n.show[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    margin: 30px 0;\r\n    transition: opacity 150ms, margin 300ms;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1hcnJvd3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsNkJBQTZCOztJQUU3QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixtQkFBbUI7O0lBRW5CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksTUFBTTtBQUNWO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDIiwiZmlsZSI6Im5hdi1hcnJvd3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIxKTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hcnJvdyBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4uYXJyb3cgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVwIHtcclxuICAgIHRvcDogMDtcclxufVxyXG4uZG93biB7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMsIG1hcmdpbiAzMDBtcztcclxufSJdfQ== */"] });


/***/ }),

/***/ "F7NT":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 12, vars: 0, consts: [[1, "outer"], ["src", "assets/images/uni-back.jpeg", "alt", "uni campus", 1, "back-img"], [1, "inner"], [1, "inner-test"], ["src", "assets/images/uni-logo.png", "alt", "uni logo", 1, "logo"], [1, "inner-text"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I'm currently doing my Bachelors in Computing Science at the University of Alberta, and I expect to graduate in 2022.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I have taken courses on Data Structures, Algorithms, Computer Architecture, Software Engineering, Machine Learning, and Computer Networking. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".outer[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%; padding-top: 60%;\r\n    border-radius: 15px;\r\n    box-shadow: 4px 4px var(--main-dark);\r\n    overflow: hidden;\r\n}\r\n\r\n.back-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 80%; height: 80%;\r\n    z-index: 10;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(228, 225, 225, 0.85);\r\n    border-radius: 15px;\r\n}\r\n\r\n.inner-test[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: 40px 75px;\r\n    margin-right: 10px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: var(--main-dark);\r\n}\r\n\r\n.inner-text[_ngcontent-%COMP%] {\r\n    margin: 20px 75px;\r\n    margin-left: 10px;\r\n    color: black;\r\n}\r\n\r\n.inner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 26px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdDQUFnQztJQUNoQyxVQUFVLEVBQUUsV0FBVztJQUN2QixXQUFXOztJQUVYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImVkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlOyBwYWRkaW5nLXRvcDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggdmFyKC0tbWFpbi1kYXJrKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iYWNrLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogODAlOyBoZWlnaHQ6IDgwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI1LCAyMjUsIDAuODUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uaW5uZXItdGVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggNzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyayk7XHJcbn1cclxuXHJcbi5pbm5lci10ZXh0IHtcclxuICAgIG1hcmdpbjogMjBweCA3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmlubmVyLXRleHQgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "LVLQ":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-indicator/page-indicator.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIndicatorComponent", function() { return PageIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/scroll.service */ "uPsD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PageIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIndicatorComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.jumpTo(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dot-curr", ctx_r0.page == i_r2);
} }
class PageIndicatorComponent {
    constructor(scroll) {
        this.scroll = scroll;
        this.show = false;
        this.pages = [];
        this.page = 0;
        this.pages = scroll.getPages();
    }
    ngOnInit() {
        this.pageRef = this.scroll.getPageObs().subscribe(page => this.page = page);
        setTimeout(() => { this.show = true; }, 3000);
    }
    ngOnDestroy() {
        this.pageRef.unsubscribe();
    }
    jumpTo(i) {
        if (i != this.page) {
            this.scroll.jumpToPage(i);
        }
    }
}
PageIndicatorComponent.ɵfac = function PageIndicatorComponent_Factory(t) { return new (t || PageIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"])); };
PageIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageIndicatorComponent, selectors: [["app-page-indicator"]], decls: 2, vars: 3, consts: [[1, "indicator"], ["class", "dot", 3, "dot-curr", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"]], template: function PageIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageIndicatorComponent_div_1_Template, 1, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".indicator[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%; right: 0;\r\n    transform: translate(0, -50%);\r\n\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    opacity: 0;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n    width: 10px; height: 10px;\r\n    background-color: white;\r\n    border: 2px solid var(--sub1);\r\n    border-radius: 50%;\r\n    margin: 20px 30px;\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n}\r\n\r\n.dot-curr[_ngcontent-%COMP%] {\r\n    width: 13px; height: 13px;\r\n    background-color: var(--sub1);\r\n    margin-right: 27px;\r\n    opacity: 1;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transition: opacity 150ms;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaW5kaWNhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsNkJBQTZCOztJQUU3QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJwYWdlLWluZGljYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTsgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZG90IHtcclxuICAgIHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1YjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRvdC1jdXJyIHtcclxuICAgIHdpZHRoOiAxM3B4OyBoZWlnaHQ6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIxKTtcclxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zO1xyXG59Il19 */"] });


/***/ }),

/***/ "M1mS":
/*!***************************************************!*\
  !*** ./src/app/components/hair/hair.component.ts ***!
  \***************************************************/
/*! exports provided: HairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairComponent", function() { return HairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HairComponent {
    constructor() { }
    ngOnInit() {
    }
}
HairComponent.ɵfac = function HairComponent_Factory(t) { return new (t || HairComponent)(); };
HairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HairComponent, selectors: [["app-hair"]], decls: 29, vars: 0, consts: [[1, "container"], [1, "logo"], [1, "logo-text"], [1, "outer", "img-1"], [1, "inner"], ["href", "assets/images/hair-home.png", "target", "_blank"], ["src", "assets/images/hair-home.png", "alt", "Hair by Ninson Homepage"], [1, "outer", "img-2"], ["href", "assets/images/hair-cart.png", "target", "_blank"], ["src", "assets/images/hair-cart.png", "alt", "Hair by Ninson Cartpage"], [1, "tech"]], template: function HairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hair by Ninson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This site is designed to be a familier shopping website where the users can browse, view, and purchase wigs online. This was my first freelance project and my first website built with Angular. \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "You can click on an image to view in fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Technologies used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular and Firebase.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " The source code for this project is not public. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80vw;\r\n    height: 80vh;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: var(--main-dark);\r\n    text-align: center;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    line-height: 1.35rem;\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2%;\r\n    right: 2%;\r\n    text-align: right;\r\n    max-width: 30vw;\r\n    font-size: 0.8rem;\r\n    color: grey;\r\n}\r\n\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n    font-family: 'Satisfy', cursive;\r\n    color: #D19897;\r\n    font-size: 2.75rem;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.tech[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 2%;\r\n    left: 2%;\r\n\r\n    max-width: 30vw;\r\n    margin-top: 2rem;\r\n    font-size: 0.8rem;\r\n    color: grey;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.img-1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0; left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.img-2[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 3;\r\n}\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin: 10px;\r\n    width: 45vw;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    width: 43vw; padding-top: 56.25%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 5px grey;\r\n    border-radius: 15px;\r\n    transition: width 300ms;\r\n    position: relative;\r\n}\r\n\r\n\r\n.inner[_ngcontent-%COMP%]:hover {\r\n    width: 45vw;\r\n    transition: width 300ms;\r\n}\r\n\r\n\r\n.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhaXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTs7SUFFUixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsT0FBTztJQUNmLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFDQTtJQUNJLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1oiLCJmaWxlIjoiaGFpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMiU7XHJcbiAgICByaWdodDogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1heC13aWR0aDogMzB2dztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NhdGlzZnknLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICNEMTk4OTc7XHJcbiAgICBmb250LXNpemU6IDIuNzVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZWNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMiU7XHJcbiAgICBsZWZ0OiAyJTtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5pbWctMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7IGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW1nLTIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG5cclxuLm91dGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogNDV2dztcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbm5lciB7XHJcbiAgICB3aWR0aDogNDN2dzsgcGFkZGluZy10b3A6IDU2LjI1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmlubmVyOmhvdmVyIHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XHJcbn1cclxuXHJcbi5pbm5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ROHl":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkComponent {
    constructor() {
        this.skills = {
            angular: { month: 7, year: 2020 },
            react: { month: 1, year: 2020 },
            svelte: { month: 1, year: 2021 },
            node: { month: 12, year: 2019 },
            android: { month: 5, year: 2018 },
            flutter: { month: 1, year: 2020 },
            mongo: { month: 12, year: 2019 },
            firestore: { month: 10, year: 2019 }
        };
    }
    ngOnInit() {
    }
    getTime(time) {
        let date = new Date();
        let diff = ((date.getFullYear() - time.year) * 12) + date.getMonth() - time.month + 1;
        if (diff < 12) {
            return diff + " months";
        }
        else if (diff >= 12 && diff < 24) {
            return "1 year";
        }
        else {
            return Math.floor(diff / 12) + " years";
        }
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 88, vars: 8, consts: [[1, "outer"], [1, "title"], [1, "inner"], [1, "skills-container"], [1, "skills-row", "space-btm"], [1, "skill"], [1, "skill-label"], [1, "triangle"], [1, "skill-points"], [1, "skill-point"], [1, "skill-point-title"], [1, "skills-row"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Used in 3 projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Used in 2 project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Svelte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cloud Firestore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Used in 3 projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Used in 2 projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Node.js & Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Used in 3 projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Android Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Used in 2 projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Flutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.angular));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.react));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.svelte));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.firestore));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.mongo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.node));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.android));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.skills.flutter));
    } }, styles: [".outer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 15px;\r\n    box-shadow: 0 0 10px grey;\r\n    background-color: whitesmoke;\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    background-color: var(--main);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    color: var(--main-dark);\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin: 20px 50px;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.space-btm[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%] {\r\n    width: 0; height: 0;\r\n    border-top: 5px solid transparent;\r\n    border-bottom: 5px solid transparent;\r\n    border-left: 5px solid var(--sub1);\r\n\r\n    position: absolute;\r\n    top: 0.5rem; left: -1rem;\r\n}\r\n\r\n.skills-container[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.skills-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\n.skill[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 1rem 2rem;\r\n}\r\n\r\n.skill-label[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    margin-right: 2rem;\r\n    width: 5rem;\r\n    color: black;\r\n    position: relative;\r\n}\r\n\r\n.skill-point[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    width: 13rem;\r\n}\r\n\r\n.skill-point[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.skill-point[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    font-style: italic;\r\n}\r\n\r\n.skill-point-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: var(--main-dark);\r\n}\r\n\r\n.skill-point-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n\r\n\r\n    .skill[_ngcontent-%COMP%] {\r\n        margin: 1rem;\r\n    }\r\n\r\n    .skill-label[_ngcontent-%COMP%] {\r\n        width: 4rem;\r\n    }\r\n\r\n    .skill-point[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px;\r\n        width: 10rem;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n\r\n    .skills-row[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .skill[_ngcontent-%COMP%] {\r\n        display: inline-flex;\r\n        justify-content: left;\r\n    }\r\n\r\n    .skill-label[_ngcontent-%COMP%] {\r\n        margin-right: 3rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsa0NBQWtDOztJQUVsQyxrQkFBa0I7SUFDbEIsV0FBVyxFQUFFLFdBQVc7QUFDNUI7O0FBR0E7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTs7O0lBR0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6IndvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBncmV5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZS1idG0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4udHJpYW5nbGUge1xyXG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tc3ViMSk7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjVyZW07IGxlZnQ6IC0xcmVtO1xyXG59XHJcblxyXG5cclxuLnNraWxscy1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5za2lsbHMtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2tpbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMXJlbSAycmVtO1xyXG59XHJcbi5za2lsbC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5za2lsbC1wb2ludCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEzcmVtO1xyXG59XHJcbi5za2lsbC1wb2ludCBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLnNraWxsLXBvaW50IGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc2tpbGwtcG9pbnQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcclxufVxyXG4uc2tpbGwtcG9pbnQtdGl0bGUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcblxyXG5cclxuICAgIC5za2lsbCB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1sYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLXBvaW50IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcblxyXG4gICAgLnNraWxscy1yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");


class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Y/6S":
/*!***************************************************!*\
  !*** ./src/app/components/mock/mock.component.ts ***!
  \***************************************************/
/*! exports provided: MockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockComponent", function() { return MockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MockComponent {
    constructor() { }
    ngOnInit() {
    }
}
MockComponent.ɵfac = function MockComponent_Factory(t) { return new (t || MockComponent)(); };
MockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MockComponent, selectors: [["app-mock"]], decls: 32, vars: 0, consts: [[1, "container"], [1, "desc"], [1, "project-imgs"], [1, "outer"], [1, "inner"], ["href", "assets/images/qbank.png", "target", "_blank"], ["src", "assets/images/qbank.png", "alt", "Question Bank"], ["href", "assets/images/admin.png", "target", "_blank"], ["src", "assets/images/admin.png", "alt", "Mock Exam"]], template: function MockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mock Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I created a web based Mock Exam site for my client. It is designed to recreate the digital exam experience and will be used for coaching CFA Examination Candidates. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I also created a Question Bank program for Exam Administrator to manage the exam syllabus and questions, as well as to easily create exam sessions for the Mock Exam site to use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is my second freelance project and I am currently maintaining it. \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Technologies used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Angular, Node.js, Express, MongoDB, jQuery, and EJS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The source code for this project is not public. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "You can click on an image to view in fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n    width: 30vw;\r\n    margin-right: 3rem;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #5472d3;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    line-height: 1.35rem;\r\n}\r\n\r\n\r\n.project-imgs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.outer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    width: 32vw;\r\n    margin: 0.5rem;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    width: 30vw; padding-top: 56.25%;\r\n    transition: width 300ms;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 5px grey;\r\n    border-radius: 15px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.inner[_ngcontent-%COMP%]:hover {\r\n    width: 32vw;\r\n    transition: width 300ms;\r\n}\r\n\r\n\r\n.project-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtBQUNaIiwiZmlsZSI6Im1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi5kZXNjIHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzU0NzJkMztcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2plY3QtaW1ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm91dGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB3aWR0aDogMzJ2dztcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlubmVyIHtcclxuICAgIHdpZHRoOiAzMHZ3OyBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5uZXI6aG92ZXIge1xyXG4gICAgd2lkdGg6IDMydnc7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcclxufVxyXG5cclxuLnByb2plY3QtaW1ncyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/education/education.component */ "F7NT");
/* harmony import */ var _components_nav_arrows_nav_arrows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav-arrows/nav-arrows.component */ "Bcdz");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_page_indicator_page_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-indicator/page-indicator.component */ "LVLQ");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/work/work.component */ "ROHl");
/* harmony import */ var _components_mock_mock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mock/mock.component */ "Y/6S");
/* harmony import */ var _components_hair_hair_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hair/hair.component */ "M1mS");
/* harmony import */ var _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/music/music.component */ "0lWy");
/* harmony import */ var _components_moodtracker_moodtracker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/moodtracker/moodtracker.component */ "ftkW");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"],
        _components_nav_arrows_nav_arrows_component__WEBPACK_IMPORTED_MODULE_4__["NavArrowsComponent"],
        _components_page_indicator_page_indicator_component__WEBPACK_IMPORTED_MODULE_6__["PageIndicatorComponent"],
        _components_work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
        _components_mock_mock_component__WEBPACK_IMPORTED_MODULE_8__["MockComponent"],
        _components_hair_hair_component__WEBPACK_IMPORTED_MODULE_9__["HairComponent"],
        _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"],
        _components_moodtracker_moodtracker_component__WEBPACK_IMPORTED_MODULE_11__["MoodtrackerComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"]] }); })();


/***/ }),

/***/ "ftkW":
/*!*****************************************************************!*\
  !*** ./src/app/components/moodtracker/moodtracker.component.ts ***!
  \*****************************************************************/
/*! exports provided: MoodtrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodtrackerComponent", function() { return MoodtrackerComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




const _c0 = ["mood"];
function MoodtrackerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", "assets/images/moodtracker/" + (i_r2 + 1) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", "assets/images/moodtracker/" + (i_r2 + 1) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", "moodtracker-screenshot-" + (i_r2 + 1));
} }
class MoodtrackerComponent {
    constructor() {
        this.lst = new Array(8);
        this.faLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleLeft"];
        this.faRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleRight"];
        this.curr = 0;
    }
    ngOnInit() { }
    navigate(dir) {
        if (dir && this.curr != 7) {
            if (this.curr == 6) {
                this.curr = 7;
            }
            else {
                this.curr += 3;
            }
        }
        else if (!dir && this.curr != 0) {
            if (this.curr == 1) {
                this.curr = 0;
            }
            else {
                this.curr -= 3;
            }
        }
        this.imgElems.toArray()[this.curr].nativeElement.scrollIntoView({ block: "nearest", inline: 'end', behavior: 'smooth' });
    }
}
MoodtrackerComponent.ɵfac = function MoodtrackerComponent_Factory(t) { return new (t || MoodtrackerComponent)(); };
MoodtrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoodtrackerComponent, selectors: [["app-moodtracker"]], viewQuery: function MoodtrackerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgElems = _t);
    } }, decls: 25, vars: 7, consts: [[1, "container"], [1, "gallery"], ["class", "gl-outer", 4, "ngFor", "ngForOf"], [1, "nav", "nav-left", 3, "click"], [3, "icon"], [1, "nav", "nav-right", 3, "click"], [1, "desc"], ["href", "https://github.com/CMPUT301F19T31/NeedArraysBoss/", "target", "_blank"], [1, "gl-outer"], ["mood", ""], [1, "gl-inner"], [1, "gl-item"], ["target", "_blank", 3, "href"], [3, "src", "alt"]], template: function MoodtrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "MoodTracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MoodtrackerComponent_div_4_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodtrackerComponent_Template_div_click_5_listener() { return ctx.navigate(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodtrackerComponent_Template_div_click_7_listener() { return ctx.navigate(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "You can click on an image to view in fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " A social media app made for Android that you can use to track your moods, and share it with your friends! I created this app with my friends for my CMPUT 301 course. \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "(2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Technologies used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Android Studio and Firebase.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " You can also ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "check out the repo on Github.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lst);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.curr != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.curr != 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faRight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    max-width: 30vw;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\r\n    text-align: left;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n    text-align: right;\r\n}\r\n\r\n.gallery[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n    width: 70vw;\r\n    position: relative;\r\n}\r\n\r\n.gl-outer[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 18vw; padding-top: 43%; \r\n    position: relative;\r\n    margin: 0 1rem;\r\n}\r\n\r\n.gl-inner[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.gl-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 14vw; padding-top: 194%;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: 3px 3px 10px gray;\r\n    position: relative;\r\n\r\n    transition: width 300ms;\r\n}\r\n\r\n.gl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.gl-item[_ngcontent-%COMP%]:hover {\r\n    width: 15vw;\r\n    transition: width 300ms;\r\n}\r\n\r\n\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    transform: translate(0, -50%);\r\n    color: white;\r\n    background-color: var(--sub1);\r\n    cursor: pointer;\r\n\r\n    width: 2.2rem; height: 2.2rem;\r\n    border-radius: 50%;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 10;\r\n\r\n    opacity: 0;\r\n    transition: opacity 150ms;\r\n}\r\n\r\n.nav-left[_ngcontent-%COMP%] {\r\n    left: -3rem;\r\n}\r\n\r\n.nav-right[_ngcontent-%COMP%] {\r\n    right: -3rem;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transition: opacity 150ms;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2R0cmFja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7O0lBRWhDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVcsRUFBRSxpQkFBaUI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCOztJQUVsQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFJQSxRQUFROztBQUNSO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlOztJQUVmLGFBQWEsRUFBRSxjQUFjO0lBQzdCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJtb29kdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kZXNjIHAge1xyXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xyXG59XHJcbi5kZXNjIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZGVzYyBwOmxhc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5nbC1vdXRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTh2dzsgcGFkZGluZy10b3A6IDQzJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgMXJlbTtcclxufVxyXG4uZ2wtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2wtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTR2dzsgcGFkZGluZy10b3A6IDE5NCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCBncmF5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xyXG59XHJcbi5nbC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uZ2wtaXRlbTpob3ZlciB7XHJcbiAgICB3aWR0aDogMTV2dztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIE5hdiAqL1xyXG4ubmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWIxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMi4ycmVtOyBoZWlnaHQ6IDIuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXM7XHJcbn1cclxuLm5hdi1sZWZ0IHtcclxuICAgIGxlZnQ6IC0zcmVtO1xyXG59XHJcbi5uYXYtcmlnaHQge1xyXG4gICAgcmlnaHQ6IC0zcmVtO1xyXG59XHJcblxyXG4ubmF2IGZhLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zO1xyXG59Il19 */"] });


/***/ }),

/***/ "uPsD":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollService {
    constructor() {
        this.ignoreScroll = false;
        this.pages = ["top", "edu", "work", "proj-start", "mood", "mock", "hair", "music", "contact"];
        this.page = 0;
        this.pageSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
    }
    getPageObs() {
        return this.pageSub.asObservable();
    }
    getPages() {
        return this.pages;
    }
    ignoreScrollTimeout() {
        this.ignoreScroll = true;
        setTimeout(() => {
            this.ignoreScroll = false;
        }, 800);
    }
    navigate(output) {
        if (this.ignoreScroll) {
            return;
        }
        else {
            this.ignoreScrollTimeout();
        }
        if (output.up) {
            this.page--;
            this.pageSub.next(this.page);
        }
        else if (output.down) {
            this.page++;
            this.pageSub.next(this.page);
        }
        else if (output.top) {
            this.page = 0;
            this.pageSub.next(0);
        }
    }
    jumpToPage(i) {
        if (this.ignoreScroll) {
            return;
        }
        else {
            this.ignoreScrollTimeout();
        }
        if (i >= 0 && i < this.pages.length) {
            this.page = i;
            this.pageSub.next(i);
        }
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(); };
ScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scroll.service */ "uPsD");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "KZTq");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/education/education.component */ "F7NT");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/work/work.component */ "ROHl");
/* harmony import */ var _components_moodtracker_moodtracker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/moodtracker/moodtracker.component */ "ftkW");
/* harmony import */ var _components_mock_mock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mock/mock.component */ "Y/6S");
/* harmony import */ var _components_hair_hair_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hair/hair.component */ "M1mS");
/* harmony import */ var _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/music/music.component */ "0lWy");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/header.component */ "2MiI");
/* harmony import */ var _components_nav_arrows_nav_arrows_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/nav-arrows/nav-arrows.component */ "Bcdz");
/* harmony import */ var _components_page_indicator_page_indicator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/page-indicator/page-indicator.component */ "LVLQ");














class MainComponent {
    constructor(renderer, scroll, scrollToService) {
        this.renderer = renderer;
        this.scroll = scroll;
        this.scrollToService = scrollToService;
        this.pages = [];
        // State Variables
        this.page = -1;
        this.prevY = 0;
        this.ignoreScroll = false;
        // Icons
        this.faGit = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"];
        this.faLinkedIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedinIn"];
    }
    ngOnInit() {
        this.pages = this.scroll.getPages();
        this.pageRef = this.scroll.getPageObs().subscribe(page => {
            if (page != this.page) {
                if (!this.ignoreScroll) {
                    this.ignoreScrollTimeout();
                }
                this.page = page;
                this.scrollTo(page);
            }
        });
        this.scrollListener = this.renderer.listen('window', 'scroll', e => {
            let ypos = e.target.scrollingElement.scrollTop;
            let prev = this.prevY;
            if (!this.ignoreScroll) {
                this.ignoreScrollTimeout();
                if (this.page != (this.pages.length - 1) && ypos > prev) {
                    this.scroll.navigate({ down: true });
                }
                else if (this.page != 0 && ypos < prev) {
                    this.scroll.navigate({ up: true });
                }
            }
            this.prevY = ypos;
        });
    }
    ngOnDestroy() {
        this.scrollListener();
        this.pageRef.unsubscribe();
    }
    ignoreScrollTimeout() {
        this.ignoreScroll = true;
        setTimeout(() => {
            this.ignoreScroll = false;
        }, 800);
    }
    scrollTo(i) {
        this.scrollToService.scrollTo({
            target: this.pages[i],
            duration: 450
        }).subscribe(() => { }, err => console.error(err));
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 72, vars: 36, consts: [["id", "top", 1, "background"], [1, "cover"], ["src", "assets/images/cover.png", "alt", "cover"], [1, "cta"], ["href", "mailto:ahnafon3@gmail.com"], ["id", "cta-primary"], ["href", "https://github.com/ahnafone", "target", "_blank"], [3, "icon"], ["href", "https://www.linkedin.com/in/ahnav/", "target", "_blank"], ["id", "edu", 1, "background", "bg-grad-bottom"], [1, "component-container"], ["id", "work", 1, "background"], ["id", "proj-start", 1, "background", "bg-grad-bottom"], [1, "free-container"], ["id", "mood", 1, "background"], ["id", "mock", 1, "background", "bg-grad-bottom"], ["id", "hair", 1, "background"], ["id", "music", 1, "background", "bg-grad-bottom"], ["id", "contact", 1, "background"], [1, "free-container", "contact"], [1, "contact-text"], [1, "chat"], [2, "font-size", "0.9", "font-weight", "bold", "margin-top", "3rem", "margin-bottom", "1rem"], [2, "color", "grey", "font-size", "0.7rem"], [2, "font-size", "1.3rem"], [1, "contact-cta"], [1, "cta-outer"], ["id", "", 1, "cta-inner", "cta-git"], [1, "cta-inner", "cta-link"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Let's Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "The next few pages is a combination of my best projects in no specific order. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " It contains my freelance, personal, and university projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-moodtracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "app-mock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-hair");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "app-music");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " I'm currently actively searching for freelance opportunities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " If you like my work, then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "let's chat!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "You can reach out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Edmonton, AB \u00A0 \u2022 \u00A0 Dhaka, Bangladesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ahnafon3@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-nav-arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "app-page-indicator");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faLinkedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 1)("in-view", ctx.page == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 2)("in-view", ctx.page == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 3)("in-view", ctx.page == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 4)("in-view", ctx.page == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 5)("in-view", ctx.page == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 6)("in-view", ctx.page == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 7)("in-view", ctx.page == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("out-view", ctx.page != 8)("in-view", ctx.page == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faGit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faLinkedIn);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _components_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _components_moodtracker_moodtracker_component__WEBPACK_IMPORTED_MODULE_7__["MoodtrackerComponent"], _components_mock_mock_component__WEBPACK_IMPORTED_MODULE_8__["MockComponent"], _components_hair_hair_component__WEBPACK_IMPORTED_MODULE_9__["HairComponent"], _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _components_nav_arrows_nav_arrows_component__WEBPACK_IMPORTED_MODULE_12__["NavArrowsComponent"], _components_page_indicator_page_indicator_component__WEBPACK_IMPORTED_MODULE_13__["PageIndicatorComponent"]], styles: ["img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    background-image: linear-gradient(to bottom right, var(--background) 0%, white 33%, white 66%, var(--background) 100%);\r\n\r\n}\r\n\r\n.bg-grad-bottom[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(to top right, var(--background) 0%, white 33%, white 66%, var(--background) 100%);\r\n}\r\n\r\n.component-container[_ngcontent-%COMP%] {\r\n    z-index: 5;\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 60%;\r\n}\r\n\r\n.out-view[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    opacity: 0;\r\n    transition: left 800ms, opacity 500ms;\r\n}\r\n\r\n.in-view[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n    opacity: 1;\r\n    transition: left 800ms, opacity 500ms;\r\n}\r\n\r\n.free-container[_ngcontent-%COMP%] {\r\n    z-index: 5;\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n.cover[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 5;\r\n    width: 60%;\r\n    transition: width 300ms, height 300ms;\r\n}\r\n\r\n.cover[_ngcontent-%COMP%]:hover {\r\n    width: 65%;\r\n    transition: width 300ms, height 300ms;\r\n}\r\n\r\n.cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-shadow: 0 0 8px grey;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 15%; left: 10%;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    color: var(--sub1);\r\n    background-color: white;\r\n    border: 2px solid var(--sub1);\r\n    border-radius: 30px;\r\n    margin: 0 3px;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    background-color: var(--sub1);\r\n}\r\n\r\n#cta-primary[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: var(--sub1);\r\n    margin: 0 10px;\r\n}\r\n\r\n#cta-primary[_ngcontent-%COMP%]:hover {\r\n    color: var(--sub1);\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n#proj-start[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#proj-start[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: var(--sub1);\r\n}\r\n\r\n\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 24px;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: var(--main-dark);\r\n    margin-bottom: 2.5rem;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.contact-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 1.3rem;\r\n    line-height: 2rem;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    margin: 10px 0;\r\n    z-index: 2;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 5px;\r\n    background-color: var(--main-dark);\r\n    position: absolute;\r\n    bottom: 0; left: 3px;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    transition: height 200ms;\r\n}\r\n\r\n.contact-cta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cta-outer[_ngcontent-%COMP%] {\r\n    width: 3.5rem; height: 3.5rem;\r\n    margin: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cta-inner[_ngcontent-%COMP%] {\r\n    width: 3rem; height: 3rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    transition: width 300ms, height 300ms;\r\n}\r\n\r\n.cta-inner[_ngcontent-%COMP%]:hover {\r\n    width: 3.3rem; height: 3.3rem;\r\n    transition: width 300ms, height 300ms;\r\n}\r\n\r\n.cta-git[_ngcontent-%COMP%] {\r\n    color: var(--font);\r\n    background-image: linear-gradient(to bottom right, white, #b6b6b6);\r\n    border: 2px solid var(--font);\r\n}\r\n\r\n.cta-link[_ngcontent-%COMP%] {\r\n    color: #0A66C2;\r\n    background-image: linear-gradient(to bottom right, white, #8dc0f3);\r\n    border: 2px solid #0A66C2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0hBQXNIOztBQUUxSDs7QUFDQTtJQUNJLG1IQUFtSDtBQUN2SDs7QUFHQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBR0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFHQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0FBQzFCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFHQSwwQkFBMEI7O0FBQzFCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBLG1CQUFtQjs7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFHQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsU0FBUyxFQUFFLFNBQVM7QUFDeEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhLEVBQUUsY0FBYztJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXLEVBQUUsWUFBWTtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7O0FBQ0E7SUFDSSxhQUFhLEVBQUUsY0FBYztJQUM3QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxrRUFBa0U7SUFDbEUseUJBQXlCO0FBQzdCIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tYmFja2dyb3VuZCkgMCUsIHdoaXRlIDMzJSwgd2hpdGUgNjYlLCB2YXIoLS1iYWNrZ3JvdW5kKSAxMDAlKTtcclxuXHJcbn1cclxuLmJnLWdyYWQtYm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIHZhcigtLWJhY2tncm91bmQpIDAlLCB3aGl0ZSAzMyUsIHdoaXRlIDY2JSwgdmFyKC0tYmFja2dyb3VuZCkgMTAwJSk7XHJcbn1cclxuXHJcblxyXG4uY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLm91dC12aWV3IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCA4MDBtcywgb3BhY2l0eSA1MDBtcztcclxufVxyXG4uaW4tdmlldyB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCA4MDBtcywgb3BhY2l0eSA1MDBtcztcclxufVxyXG5cclxuXHJcbi5mcmVlLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuLyogQ292ZXIgU3R5bGVzICovXHJcbi5jb3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXM7XHJcbn1cclxuLmNvdmVyOmhvdmVyIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcywgaGVpZ2h0IDMwMG1zO1xyXG59XHJcbi5jb3ZlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IGdyZXk7XHJcbn1cclxuXHJcblxyXG4uY3RhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTUlOyBsZWZ0OiAxMCU7XHJcbn1cclxuLmN0YSBidXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLXN1YjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG59XHJcbi5jdGEgYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1YjEpO1xyXG59XHJcblxyXG4jY3RhLXByaW1hcnkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViMSk7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4jY3RhLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXN1YjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBQcm9qZWN0cyBTdGFydCBzdHlsZXMgKi9cclxuI3Byb2otc3RhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcHJvai1zdGFydCBoMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tc3ViMSk7XHJcbn1cclxuXHJcblxyXG4vKiBDb250YWN0IFN0eWxlcyAqL1xyXG4uY29udGFjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNvbnRhY3QgaDEge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyayk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG4uY29udGFjdC10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2hhdCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbi5jaGF0IGRpdiB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwOyBsZWZ0OiAzcHg7XHJcbn1cclxuLmNoYXQ6aG92ZXIgZGl2IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcztcclxufVxyXG5cclxuLmNvbnRhY3QtY3RhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmN0YS1vdXRlciB7XHJcbiAgICB3aWR0aDogMy41cmVtOyBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmN0YS1pbm5lciB7XHJcbiAgICB3aWR0aDogM3JlbTsgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMsIGhlaWdodCAzMDBtcztcclxufVxyXG4uY3RhLWlubmVyOmhvdmVyIHtcclxuICAgIHdpZHRoOiAzLjNyZW07IGhlaWdodDogMy4zcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMsIGhlaWdodCAzMDBtcztcclxufVxyXG5cclxuLmN0YS1naXQge1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgd2hpdGUsICNiNmI2YjYpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udCk7XHJcbn1cclxuLmN0YS1saW5rIHtcclxuICAgIGNvbG9yOiAjMEE2NkMyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgd2hpdGUsICM4ZGMwZjMpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBBNjZDMjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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