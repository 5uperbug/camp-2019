(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"info-card\">\n  <mat-card-header>\n    <mat-card-title>When?</mat-card-title>\n    <mat-card-subtitle>October 6th (Sunday) - October 8th (Tuesday)</mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n\n<mat-card class=\"info-card\">\n  <mat-card-header>\n    <mat-card-title>Where?</mat-card-title>\n    <mat-card-subtitle>Camp Revive</mat-card-subtitle>\n  </mat-card-header>\n  <div class=\"map-container\">\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15567.49755208893!2d77.7892532!3d12.7216166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1c33f12e8105fc5!2sBreakthrough%40Camp%20Revive!5e0!3m2!1sen!2sin!4v1569563299149!5m2!1sen!2sin\"\n      frameborder=\"0\" style=\"border:0;height:300px;\" allowfullscreen=\"\"></iframe>\n  </div>\n\n\n  <mat-card-actions>\n    <a mat-button href=\"https://goo.gl/maps/CyGbePLDbVwwEVLn8\" target=\"_blank\" class=\"link-btn\">\n      VIEW ON MAPS\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"info-card\">\n  <mat-card-header>\n    <mat-card-title>Theme?</mat-card-title>\n    <mat-card-subtitle>Moral Purity in Popular Culture</mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n\n<mat-card class=\"info-card\">\n  <mat-card-header>\n    <mat-card-title>Guest Speaker</mat-card-title>\n    <mat-card-subtitle>Johnny Varghese</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <a mat-button href=\"https://www.youtube.com/watch?v=3hIW1iY-Dsw\" target=\"_blank\" class=\"link-btn\">\n      INTRO VIDEO\n    </a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-card {\n  max-width: 300px;\n  margin: 20px auto; }\n  .info-card .link-btn {\n    margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvZGV2L2V4cC9jYW1wL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBS2xCO0VBUEQ7SUFLSSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWNhcmQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcblxuICAubGluay1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(appService) {
        this.appService = appService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.appService.setHeaderTitle('About');
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"overlay\" [(opened)]=\"opened\" class=\"sidenav\">\n    <div class=\"header\">\n      <img src=\"../assets/logo.png\">\n      <mat-divider></mat-divider>\n    </div>\n    <div class=\"menu\">\n      <mat-nav-list>\n        <a mat-list-item (click)=\"openPage('/#schedule')\">\n          Schedule\n        </a>\n        <a mat-list-item (click)=\"openPage('/#songbook')\">\n          Song Book\n        </a>\n        <a mat-list-item (click)=\"openPage('/#about')\">\n          About\n        </a>\n        <!-- <a mat-list-item href=\"\">\n          Teams\n        </a>\n        <a mat-list-item href=\"\">\n          Rooms\n        </a>\n        <a mat-list-item href=\"\">\n          Guidelines\n        </a> -->\n      </mat-nav-list>\n\n      <mat-nav-list>\n        <a mat-list-item href=\"\"></a>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"mat-elevation-z6 toolbar\">\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"openSideNav()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        <span> {{headerTitle}} </span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <div class=\"router-dump\">\n      <router-outlet class=\"router-dump\"></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100vh; }\n  .sidenav-container .sidenav {\n    width: 70%; }\n  .sidenav-container .sidenav .header {\n      height: 100px; }\n  .sidenav-container .sidenav .header img {\n        display: block;\n        margin: 0 auto;\n        margin-top: 10px;\n        height: auto;\n        width: 95%; }\n  .sidenav-container .toolbar {\n    position: fixed;\n    z-index: 10; }\n  .sidenav-container .router-dump {\n    padding-top: 56px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvZGV2L2V4cC9jYW1wL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQStCZDtFQWhDRDtJQUlJLFdBQVUsRUFrQlg7RUF0Qkg7TUFPTSxjQUFhLEVBVWQ7RUFqQkw7UUFVUSxlQUFjO1FBQ2QsZUFBYztRQUNkLGlCQUFnQjtRQUNoQixhQUFZO1FBQ1osV0FBVSxFQUNYO0VBZlA7SUF5QkksZ0JBQWU7SUFDZixZQUFXLEVBQ1o7RUEzQkg7SUE4Qkksa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDcwJTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAubWVudSB7XG5cbiAgICB9XG4gIH1cblxuICAudG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLnJvdXRlci1kdW1wIHtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.headerTitle = 'Bethelights Camp 2019';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opened = false;
        this.appService.getHeaderChangedObserver().subscribe(function (title) {
            _this.headerTitle = title;
        });
    };
    AppComponent.prototype.openSideNav = function () {
        this.opened = true;
    };
    AppComponent.prototype.openPage = function (url) {
        window.location.href = url;
        this.opened = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: markedOptionsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markedOptionsFactory", function() { return markedOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _songbook_songbook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./songbook/songbook.component */ "./src/app/songbook/songbook.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guidelines/guidelines.component */ "./src/app/guidelines/guidelines.component.ts");
/* harmony import */ var _songbook_lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./songbook/lyrics/lyrics.component */ "./src/app/songbook/lyrics/lyrics.component.ts");















// function that returns `MarkedOptions` with renderer override
function markedOptionsFactory() {
    var renderer = new ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkedRenderer"]();
    renderer.blockquote = function (text) {
        return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
    };
    return {
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
                _songbook_songbook_component__WEBPACK_IMPORTED_MODULE_11__["SongbookComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_13__["GuidelinesComponent"],
                _songbook_lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_14__["LyricsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"] },
                    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"] },
                    { path: 'songbook', component: _songbook_songbook_component__WEBPACK_IMPORTED_MODULE_11__["SongbookComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
                    { path: '**', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
                ], { useHash: true }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
                    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkedOptions"],
                        useFactory: markedOptionsFactory,
                    }
                })
            ],
            entryComponents: [
                _songbook_lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_14__["LyricsComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppService = /** @class */ (function () {
    function AppService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AppService.prototype.getHeaderChangedObserver = function () {
        return this.subject.asObservable();
    };
    AppService.prototype.setHeaderTitle = function (title) {
        this.subject.next(title);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/custom-material/custom-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-material/custom-material.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/guidelines/guidelines.component.html":
/*!******************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  guidelines works!\n</p>\n"

/***/ }),

/***/ "./src/app/guidelines/guidelines.component.scss":
/*!******************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlbGluZXMvZ3VpZGVsaW5lcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/guidelines/guidelines.component.ts":
/*!****************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.ts ***!
  \****************************************************/
/*! exports provided: GuidelinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinesComponent", function() { return GuidelinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuidelinesComponent = /** @class */ (function () {
    function GuidelinesComponent() {
    }
    GuidelinesComponent.prototype.ngOnInit = function () {
    };
    GuidelinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guidelines',
            template: __webpack_require__(/*! ./guidelines.component.html */ "./src/app/guidelines/guidelines.component.html"),
            styles: [__webpack_require__(/*! ./guidelines.component.scss */ "./src/app/guidelines/guidelines.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuidelinesComponent);
    return GuidelinesComponent;
}());



/***/ }),

/***/ "./src/app/schedule/day1.json":
/*!************************************!*\
  !*** ./src/app/schedule/day1.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"time":"12: 00 PM","title":"Leave church"},{"time":"01: 30 PM","title":"Lunch"},{"time":"02: 30 PM","title":"Debrief"},{"time":"04: 30 PM","title":"Tea"},{"time":"05: 00 PM","title":"Singing"},{"time":"05: 30 PM","title":"Introduction"},{"time":"06: 00 PM","title":"Workshop 1"},{"time":"06: 30 PM","title":"Session1"},{"time":"07: 30 PM","title":"Games"},{"time":"08: 00 PM","title":"Dinner"},{"time":"09: 00 PM","title":"Devotion","desc":"Ben Jacob"},{"time":"09: 30 PM","title":"---"}];

/***/ }),

/***/ "./src/app/schedule/day2.json":
/*!************************************!*\
  !*** ./src/app/schedule/day2.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = [{"title":"Hike","time":"6:00 AM","desc":""},{"title":"Get ready","time":"7:00 AM","desc":""},{"title":"Devotion","time":"8:00 AM","desc":"Blessen George Thomas"},{"title":"Breakfast","time":"8:30 AM","desc":""},{"title":"Singing","time":"9:30 AM","desc":""},{"title":"Session 2","time":"10:00 AM","desc":""},{"title":"Workshop 2","time":"10:45 AM","desc":""},{"title":"Tea","time":"11:30 AM","desc":""},{"title":"Games","time":"11:45 AM","desc":""},{"title":"Break for lunch","time":"1:00 PM","desc":""},{"title":"Chill time ","time":"2:00 PM","desc":""},{"title":"2 by 2","time":"3:00 PM","desc":""},{"title":"Tea","time":"4:00 PM","desc":""},{"title":"Games","time":"4:15 PM","desc":""},{"title":"Recover from games","time":"5:15 PM","desc":""},{"title":"Singing","time":"5:30 PM","desc":""},{"title":"Session 3","time":"6:00 PM","desc":""},{"title":"Workshop 3","time":"7:00 PM","desc":""},{"title":"Dinner","time":"7:30 PM","desc":""},{"title":"Devotion","time":"8:30 PM","desc":"Jose Thomas Thekkacharuvil"},{"title":"Bonfire","time":"9:30 PM","desc":""}];

/***/ }),

/***/ "./src/app/schedule/day3.json":
/*!************************************!*\
  !*** ./src/app/schedule/day3.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"title":"Get Ready","time":"7:00 AM"},{"title":"Devotion","time":"8:00 AM","desc":"Abin Dennis"},{"title":"Breakfast","time":"8:30 AM"},{"title":"Singing","time":"9:15 AM"},{"title":"Workshop 4","time":"9:45 AM"},{"title":"Session 4","time":"10:15 AM"},{"title":"Tea","time":"11:00 AM"},{"title":"Q/A with Johnny Varghese","time":"11:15 AM"},{"title":"Closing","time":"12:30 PM"},{"title":"Lunch","time":"1:00 PM"},{"title":"Photo Session","time":"2.00 PM"},{"title":"Departure","time":"2.30 PM"}];

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Oct 6\">\n    <mat-list class=\"list-container\">\n      <mat-list-item *ngFor=\"let item of schedule.day1\">\n        <div class=\"time\"> {{item.time}} </div>\n        <div class=\"text\">\n          <span>{{item.title}}</span>\n          <span class=\"desc\" *ngIf=\"item.desc\">{{item.desc}}</span>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </mat-tab>\n\n  <mat-tab label=\"Oct 7\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of schedule.day2\">\n        <div class=\"time\"> {{item.time}} </div>\n        <div class=\"text\">\n          <span>{{item.title}}</span>\n          <span class=\"desc\" *ngIf=\"item.desc\">{{item.desc}}</span>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </mat-tab>\n  <mat-tab label=\"Oct 8\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of schedule.day3\">\n        <div class=\"time\"> {{item.time}} </div>\n        <div class=\"text\">\n          <span>{{item.title}}</span>\n          <span class=\"desc\" *ngIf=\"item.desc\">{{item.desc}}</span>\n        </div>\n      </mat-list-item>\n    </mat-list>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.scss":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".time {\n  width: 90px; }\n\n.text {\n  margin-left: 5px; }\n\n.text span {\n    display: block; }\n\n.desc {\n  font-size: 12px;\n  font-weight: 100;\n  margin: 5px 0; }\n\n.list-container ::ng-deep .mat-list-item {\n  border-bottom: 1px solid #eeeeee24;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvZGV2L2V4cC9jYW1wL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFLakI7O0FBTkQ7SUFJSSxlQUFjLEVBQ2Y7O0FBR0g7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBR0Q7RUFHTSxtQ0FBa0M7RUFDbEMsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZSB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgOjpuZy1kZWVwIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTI0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _day1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day1.json */ "./src/app/schedule/day1.json");
var _day1_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./day1.json */ "./src/app/schedule/day1.json", 1);
/* harmony import */ var _day2_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day2.json */ "./src/app/schedule/day2.json");
var _day2_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./day2.json */ "./src/app/schedule/day2.json", 1);
/* harmony import */ var _day3_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day3.json */ "./src/app/schedule/day3.json");
var _day3_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./day3.json */ "./src/app/schedule/day3.json", 1);





var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.schedule = {
            day1: _day1_json__WEBPACK_IMPORTED_MODULE_2__,
            day2: _day2_json__WEBPACK_IMPORTED_MODULE_3__,
            day3: _day3_json__WEBPACK_IMPORTED_MODULE_4__,
        };
    };
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/schedule/schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/songbook/lyrics/lyrics.component.html":
/*!*******************************************************!*\
  !*** ./src/app/songbook/lyrics/lyrics.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6 toolbar\">\n  <mat-toolbar-row>\n    <button mat-icon-button (click)=\"close()\">\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    <span style=\"width: 80%;\n    text-overflow: ellipsis;\n    word-break: break-all;\n    overflow: hidden;\">{{title}}</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"lyrics-container\" *ngIf=\"content\">\n  <markdown [data]=\"content\" ngPreserveWhitespaces=\"true\">\n  </markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/songbook/lyrics/lyrics.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/songbook/lyrics/lyrics.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lyrics-container {\n  padding: 0 25px;\n  padding-top: 13px;\n  margin-top: 56px;\n  overflow: auto;\n  height: calc(100% - 70px); }\n\n.toolbar {\n  position: fixed;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvZGV2L2V4cC9jYW1wL3NyYy9hcHAvc29uZ2Jvb2svbHlyaWNzL2x5cmljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9zb25nYm9vay9seXJpY3MvbHlyaWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmx5cmljcy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/songbook/lyrics/lyrics.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/songbook/lyrics/lyrics.component.ts ***!
  \*****************************************************/
/*! exports provided: LyricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricsComponent", function() { return LyricsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LyricsComponent = /** @class */ (function () {
    function LyricsComponent(bottomSheetRef, http, injectedData) {
        this.bottomSheetRef = bottomSheetRef;
        this.http = http;
        this.injectedData = injectedData;
    }
    LyricsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.injectedData.title;
        this.http.get(this.injectedData.src, { responseType: 'text' }).subscribe(function (data) {
            _this.content = data;
        });
    };
    LyricsComponent.prototype.close = function (event) {
        this.bottomSheetRef.dismiss();
    };
    LyricsComponent.prototype.onLoad = function (event) {
        console.log(event);
    };
    LyricsComponent.prototype.onError = function (event) {
        console.log(event);
    };
    LyricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lyrics',
            template: __webpack_require__(/*! ./lyrics.component.html */ "./src/app/songbook/lyrics/lyrics.component.html"),
            styles: [__webpack_require__(/*! ./lyrics.component.scss */ "./src/app/songbook/lyrics/lyrics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], Object])
    ], LyricsComponent);
    return LyricsComponent;
}());



/***/ }),

/***/ "./src/app/songbook/songbook.component.html":
/*!**************************************************!*\
  !*** ./src/app/songbook/songbook.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <div class=\"song-container\"\n    (click)=\"open(item); $event.stopPropagation()\"\n    *ngFor=\"let item of songs; let idx = index\"\n    matRipple>\n\n    <div class=\"title\">\n      <span class=\"number\">{{idx + 1}}. </span>\n      <span class=\"title\">{{item.title}}</span>\n    </div>\n    <div class=\"first-line\">\n      {{item.firstLine}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/songbook/songbook.component.scss":
/*!**************************************************!*\
  !*** ./src/app/songbook/songbook.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".song-container {\n  cursor: pointer;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  padding: 15px 28px;\n  margin: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n  .song-container .title span {\n    display: inline-block; }\n  .song-container .title span.number {\n      width: 30px; }\n  .song-container .title span.title {\n      width: calc(100% - 31px);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .song-container .first-line {\n    margin-left: 30px;\n    margin-top: 8px;\n    font-size: 12px;\n    font-weight: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvZGV2L2V4cC9jYW1wL3NyYy9hcHAvc29uZ2Jvb2svc29uZ2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLGdEQUErQztFQUMvQyxtQkFBa0I7RUFDbEIsVUFBUztFQUNULG1EQUE4QyxFQTBCL0M7RUEvQkQ7SUFVTSxzQkFBcUIsRUFZdEI7RUF0Qkw7TUFhUSxZQUFXLEVBQ1o7RUFkUDtNQWlCUSx5QkFBd0I7TUFDeEIsb0JBQW1CO01BQ25CLGlCQUFnQjtNQUNoQix3QkFBdUIsRUFDeEI7RUFyQlA7SUEwQkksa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9zb25nYm9vay9zb25nYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb25nLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTVweCAyOHB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xMik7XG5cbiAgLnRpdGxlIHtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAmLm51bWJlciB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICAmLnRpdGxlIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMxcHgpO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlyc3QtbGluZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/songbook/songbook.component.ts":
/*!************************************************!*\
  !*** ./src/app/songbook/songbook.component.ts ***!
  \************************************************/
/*! exports provided: SongbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongbookComponent", function() { return SongbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lyrics/lyrics.component */ "./src/app/songbook/lyrics/lyrics.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _assets_lyrics_md_files_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/lyrics-md-files/config.json */ "./src/assets/lyrics-md-files/config.json");
var _assets_lyrics_md_files_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lyrics-md-files/config.json */ "./src/assets/lyrics-md-files/config.json", 1);






var SongbookComponent = /** @class */ (function () {
    function SongbookComponent(bottomSheet, appService) {
        this.bottomSheet = bottomSheet;
        this.appService = appService;
    }
    SongbookComponent.prototype.ngOnInit = function () {
        this.songs = _assets_lyrics_md_files_config_json__WEBPACK_IMPORTED_MODULE_5__;
        this.appService.setHeaderTitle('Songbook');
    };
    SongbookComponent.prototype.open = function (song) {
        console.log(song);
        var sheetRef = this.bottomSheet.open(_lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_3__["LyricsComponent"], {
            panelClass: ['fullscreen-bottomsheet'],
            data: song
        });
    };
    SongbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-songbook',
            template: __webpack_require__(/*! ./songbook.component.html */ "./src/app/songbook/songbook.component.html"),
            styles: [__webpack_require__(/*! ./songbook.component.scss */ "./src/app/songbook/songbook.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], SongbookComponent);
    return SongbookComponent;
}());



/***/ }),

/***/ "./src/assets/lyrics-md-files/config.json":
/*!************************************************!*\
  !*** ./src/assets/lyrics-md-files/config.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, default */
/***/ (function(module) {

module.exports = [{"title":"Come Thou Fount","firstLine":"Come, Thou fount of every blessing,","src":"./assets/lyrics-md-files/songs/come-thou-fount.md"},{"title":"As The Deer","firstLine":"As the deer panteth for the water","src":"./assets/lyrics-md-files/songs/as-the-deer.md"},{"title":"Bless The Lord Oh My Soul","firstLine":"_Bless the Lord, Oh my soul","src":"./assets/lyrics-md-files/songs/bless-the-lord.md"},{"title":"Indescribable","firstLine":"From the highest of heights to the depths of the sea","src":"./assets/lyrics-md-files/songs/indescribable.md"},{"title":"Because He Lives","firstLine":"God sent his son, They called him Jesus","src":"./assets/lyrics-md-files/songs/because-he-lives.md"},{"title":"Lovely Lord","firstLine":"You are filled with compassion and mercy and grace","src":"./assets/lyrics-md-files/songs/lovely-lord.md"},{"title":"Heart Of Worship","firstLine":"When the music fades","src":"./assets/lyrics-md-files/songs/heart-of-worship.md"},{"title":"How Deep","firstLine":"How deep the Father's love for us","src":"./assets/lyrics-md-files/songs/how-deep.md"},{"title":"Love Is Deep","firstLine":"_Your love is deep, Your love is high","src":"./assets/lyrics-md-files/songs/love-is-deep.md"},{"title":"He Is Exalted","firstLine":"He is exalted the King is exalted on High","src":"./assets/lyrics-md-files/songs/he-is-exalted.md"},{"title":"My Jesus My Saviour","firstLine":"My Jesus, My Savior,","src":"./assets/lyrics-md-files/songs/my-jesus-my.md"},{"title":"Lord I Lift Your Name On High","firstLine":"Lord I lift your name on high","src":"./assets/lyrics-md-files/songs/lord-i-lift.md"},{"title":"Your Name","firstLine":"As morning dawns and evening fades","src":"./assets/lyrics-md-files/songs/your-name.md"},{"title":"Shout To The North And The South","firstLine":"Men of faith rise up and sing","src":"./assets/lyrics-md-files/songs/shout-to-the.md"},{"title":"Our Father","firstLine":"Hear our prayer","src":"./assets/lyrics-md-files/songs/our-father.md"},{"title":"Are You Washed In The Blood","firstLine":"Have you been to Jesus for the cleansing power?","src":"./assets/lyrics-md-files/songs/are-you-washed.md"},{"title":"Fairest Lord Jesus","firstLine":"Fairest Lord Jesus, Ruler of all nature,","src":"./assets/lyrics-md-files/songs/fairest-lord-jesus.md"},{"title":"I Am Thine Oh Lord","firstLine":"I am thine, O Lord, I have heard thy voice,","src":"./assets/lyrics-md-files/songs/i-am-thine.md"},{"title":"Great Is Thy Faithfulness","firstLine":"Great is Thy faithfulness, O God my Father,","src":"./assets/lyrics-md-files/songs/great-is-thy.md"},{"title":"Above All Powers","firstLine":"Above all powers, Above all kings","src":"./assets/lyrics-md-files/songs/above-all-powers.md"},{"title":"Jesus Paid It All","firstLine":"I hear the Savior say,","src":"./assets/lyrics-md-files/songs/jesus-paid-it.md"},{"title":"How Great Is Our God","firstLine":"The splendor of a king, Clothed in majesty","src":"./assets/lyrics-md-files/songs/how-great-is.md"},{"title":"Everlasting God","firstLine":"Strength will rise as we wait upon the Lord","src":"./assets/lyrics-md-files/songs/everlasting-god.md"},{"title":"Forever","firstLine":"Give thanks to the Lord our God and King","src":"./assets/lyrics-md-files/songs/forever.md"},{"title":"Lord I Lift Your Name On High","firstLine":"Lord, I lift Your name on high","src":"./assets/lyrics-md-files/songs/lord-i-lift.md"},{"title":"Come People Of The Risen King","firstLine":"Come, people of the risen King","src":"./assets/lyrics-md-files/songs/come-people-of.md"},{"title":"By Faith","firstLine":"By faith we see the hand of God","src":"./assets/lyrics-md-files/songs/by-faith.md"},{"title":"You Are Beautiful Beyond Description","firstLine":"You are beautiful beyond description","src":"./assets/lyrics-md-files/songs/you-are-beautiful.md"},{"title":"Our God Is Greater","firstLine":"Water you turned into wine,","src":"./assets/lyrics-md-files/songs/our-god-is.md"},{"title":"Elshadai Aaradhana","firstLine":"Tere jaisa kaun hain","src":"./assets/lyrics-md-files/songs/elshadai-aaradhana.md"},{"title":"Ashisho Se Baharane Vala","firstLine":"Ashisho se baharane vala","src":"./assets/lyrics-md-files/songs/ashisho-se-baharane.md"},{"title":"His Mercy Is More","firstLine":"What love could remember, no wrongs we have done","src":"./assets/lyrics-md-files/songs/his-mercy-is.md"},{"title":"I Can Only Imagine","firstLine":"I can only imagine","src":"./assets/lyrics-md-files/songs/i-can-only.md"},{"title":"Jesus Thank You","firstLine":"The mystery of the cross I cannot comprehend","src":"./assets/lyrics-md-files/songs/jesus-thank-you.md"},{"title":"He Hideth My Soul","firstLine":"A wonderful saviour is Jesus my Lord","src":"./assets/lyrics-md-files/songs/he-hideth-my.md"},{"title":"Kartha Ninna Preethi Suvenu","firstLine":"_Kartha ninna preethisuvenu, nanna prana priyane (2)","src":"./assets/lyrics-md-files/songs/kartha-ninna-preethi.md"},{"title":"Tu Hi Mera","firstLine":"Gaun Main Har Pal","src":"./assets/lyrics-md-files/songs/tu-hi-mera.md"},{"title":"Stuti Karu Mai","firstLine":"Stuti karu mai  Yeshu maha raja ki","src":"./assets/lyrics-md-files/songs/stuti-karu-mai.md"},{"title":"Ancient Of Days","firstLine":"Though the nations rage, kingdoms rise and fall","src":"./assets/lyrics-md-files/songs/ancient-of-days.md"},{"title":"Mera Yeshu","firstLine":"Paap hatane ko srap mitane ko","src":"./assets/lyrics-md-files/songs/mera-yeshu.md"},{"title":"You Are Lord Of Creation We Bow Down","firstLine":"You are Lord of creation","src":"./assets/lyrics-md-files/songs/you-are-lord.md"},{"title":"Sampoornavada Ninna Krupe","firstLine":"_Sampoornavada ninna krupe","src":"./assets/lyrics-md-files/songs/sampoornavada-ninna-krupe.md"},{"title":"O God Beyond All Praising","firstLine":"O God beyond all praising,","src":"./assets/lyrics-md-files/songs/o-god-beyond.md"},{"title":"Vaazhthunnu Njan Athyunnathane","firstLine":"Vaazhthunnu njaan athyunnathane","src":"./assets/lyrics-md-files/songs/vaazhthunnu-njan-athyunnathane.md"},{"title":"Santhosham Pongunthe","firstLine":"_Santhosham ponguthae – (2)","src":"./assets/lyrics-md-files/songs/santhosham-pongunthe.md"},{"title":"God Sent His Son Daivathin Puthranam","firstLine":"God sent his son, They called him Jesus","src":"./assets/lyrics-md-files/songs/god-sent-his.md"},{"title":"Nanniyode Njan Sthuthi Paadidum","firstLine":"_Nanniyode njan Sthuthi Paadidum_","src":"./assets/lyrics-md-files/songs/nanniyode-njan-sthuthi.md"},{"title":"Hallelujah For The Cross","firstLine":"Up to the hill of Calvary","src":"./assets/lyrics-md-files/songs/hallelujah-for-the.md"},{"title":"Be Thou My Vision","firstLine":"Be Thou my vision, O Lord of my heart","src":"./assets/lyrics-md-files/songs/be-thou-my.md"},{"title":"My Redeemers Love","firstLine":"My Redeemer's love is deeper","src":"./assets/lyrics-md-files/songs/my-redeemers-love.md"},{"title":"Enthu Njan Pakaram Nalkum","firstLine":"Enthu njan pakaram nalkum","src":"./assets/lyrics-md-files/songs/enthu-njan-pakaram.md"},{"title":"Yeshu Jaisa Koi Nahi","firstLine":"Hey prabhu devathavo mei","src":"./assets/lyrics-md-files/songs/yeshu-jaisa-koi.md"},{"title":"Thenilum","firstLine":"Maayai Yaana Indha Ulaginilae","src":"./assets/lyrics-md-files/songs/thenilum.md"},{"title":"Hail Jesus Youre My King","firstLine":"Hail Jesus! You're my King!","src":"./assets/lyrics-md-files/songs/hail-jesus-youre.md"},{"title":"Arabic Medley","firstLine":"Yesu'u ant al-malik (2)","src":"./assets/lyrics-md-files/songs/arabic-medley.md"}];

/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aby/dev/exp/camp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map