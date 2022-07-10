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
var pyCreateProject = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var data, project;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return spawnChild("python", "./django_prototype/django_prototype/functions/create.py", [
                        args
                    ]);
                case 2:
                    data = _ctx.sent;
                    project = JSON.parse(data);
                    return _ctx.abrupt("return", project);
                case 5:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function(args) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "pyCreateProject"
});
export default pyCreateProject;
