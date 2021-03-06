"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var time_ago_pipe_1 = require("./time-ago-pipe");
var TimeAgoPipeModule = (function () {
    function TimeAgoPipeModule() {
    }
    return TimeAgoPipeModule;
}());
TimeAgoPipeModule = __decorate([
    core_1.NgModule({
        declarations: [time_ago_pipe_1.TimeAgoPipe],
        exports: [time_ago_pipe_1.TimeAgoPipe],
    })
], TimeAgoPipeModule);
exports.TimeAgoPipeModule = TimeAgoPipeModule;
__export(require("./time-ago-pipe"));
//# sourceMappingURL=index.js.map