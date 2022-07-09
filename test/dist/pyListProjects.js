function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
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
export function spawnChild(command, scriptName, args, options) {
    return _spawnChild.apply(this, arguments);
}
function _spawnChild() {
    _spawnChild = _asyncToGenerator(regeneratorRuntime.mark(function _callee(command, scriptName, args, options) {
        var spawn, fileURLToPath, ref, path, dirname, __filename, __dirname, scriptPath, child, data, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk, error, _iteratorAbruptCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _value1, chunk1, exitCode;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return import("child_process");
                case 2:
                    spawn = _ctx.sent.spawn;
                    _ctx.next = 5;
                    return import("url");
                case 5:
                    fileURLToPath = _ctx.sent.fileURLToPath;
                    _ctx.next = 8;
                    return import("path");
                case 8:
                    ref = _ctx.sent;
                    path = ref.default;
                    dirname = ref.dirname;
                    __filename = fileURLToPath(import.meta.url);
                    __dirname = dirname(__filename);
                    scriptPath = path.resolve(__dirname, scriptName);
                    child = spawn(command, [
                        scriptPath
                    ].concat(args || []), options);
                    data = "";
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _ctx.prev = 17;
                    _iterator = _asyncIterator(child.stdout);
                case 19:
                    _ctx.next = 21;
                    return _iterator.next();
                case 21:
                    if (!(_iteratorAbruptCompletion = !(_step = _ctx.sent).done)) {
                        _ctx.next = 26;
                        break;
                    }
                    {
                        _value = _step.value;
                        chunk = _value;
                        console.log("stdout chunk: " + chunk);
                        data += chunk;
                    }
                case 23:
                    _iteratorAbruptCompletion = false;
                    _ctx.next = 19;
                    break;
                case 26:
                    _ctx.next = 32;
                    break;
                case 28:
                    _ctx.prev = 28;
                    _ctx.t0 = _ctx["catch"](17);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 32:
                    _ctx.prev = 32;
                    _ctx.prev = 33;
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                        _ctx.next = 37;
                        break;
                    }
                    _ctx.next = 37;
                    return _iterator.return();
                case 37:
                    _ctx.prev = 37;
                    if (!_didIteratorError) {
                        _ctx.next = 40;
                        break;
                    }
                    throw _iteratorError;
                case 40:
                    return _ctx.finish(37);
                case 41:
                    return _ctx.finish(32);
                case 42:
                    error = "";
                    _iteratorAbruptCompletion1 = false, _didIteratorError1 = false;
                    _ctx.prev = 44;
                    _iterator1 = _asyncIterator(child.stderr);
                case 46:
                    _ctx.next = 48;
                    return _iterator1.next();
                case 48:
                    if (!(_iteratorAbruptCompletion1 = !(_step1 = _ctx.sent).done)) {
                        _ctx.next = 53;
                        break;
                    }
                    {
                        _value1 = _step1.value;
                        chunk1 = _value1;
                        console.error("stderr chunk: " + chunk1);
                        error += chunk1;
                    }
                case 50:
                    _iteratorAbruptCompletion1 = false;
                    _ctx.next = 46;
                    break;
                case 53:
                    _ctx.next = 59;
                    break;
                case 55:
                    _ctx.prev = 55;
                    _ctx.t1 = _ctx["catch"](44);
                    _didIteratorError1 = true;
                    _iteratorError1 = _ctx.t1;
                case 59:
                    _ctx.prev = 59;
                    _ctx.prev = 60;
                    if (!(_iteratorAbruptCompletion1 && _iterator1.return != null)) {
                        _ctx.next = 64;
                        break;
                    }
                    _ctx.next = 64;
                    return _iterator1.return();
                case 64:
                    _ctx.prev = 64;
                    if (!_didIteratorError1) {
                        _ctx.next = 67;
                        break;
                    }
                    throw _iteratorError1;
                case 67:
                    return _ctx.finish(64);
                case 68:
                    return _ctx.finish(59);
                case 69:
                    _ctx.next = 71;
                    return new Promise(function(resolve, _) {
                        child.on("close", resolve);
                    });
                case 71:
                    exitCode = _ctx.sent;
                    if (!exitCode) {
                        _ctx.next = 74;
                        break;
                    }
                    throw new Error("subprocess error exit ".concat(exitCode, ", ").concat(error));
                case 74:
                    return _ctx.abrupt("return", data);
                case 75:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                17,
                28,
                32,
                42
            ],
            [
                33,
                ,
                37,
                41
            ],
            [
                44,
                55,
                59,
                69
            ],
            [
                60,
                ,
                64,
                68
            ]
        ]);
    }));
    return _spawnChild.apply(this, arguments);
}
var pyListProjects = fn(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var data, projects;
    return regeneratorRuntime.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return spawnChild("python", "./python/list.py");
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
