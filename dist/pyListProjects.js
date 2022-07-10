function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
import regeneratorRuntime from "regenerator-runtime";
import { fn } from "./factory.js";
import { spawnChild } from "./factory.js";
var pyListProjects = fn(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var data, projects;
    return regeneratorRuntime.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return spawnChild("python", "./django_prototype/django_prototype/functions/list.py");
            case 2:
                data = _ctx.sent;
                projects = JSON.parse(data);
                return _ctx.abrupt("return", projects);
            case 5:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
})), {
    name: "pyListProjects"
});
export default pyListProjects;
