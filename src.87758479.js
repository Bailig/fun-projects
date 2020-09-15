// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../paint-clone/src/app-bar.styled.tsx":[function(require,module,exports) {
"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBarRoot = exports.appBarVariables = void 0;

var styled_components_1 = __importDefault(require("styled-components"));

exports.appBarVariables = {
  height: 56
};
exports.AppBarRoot = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "px;\n"], ["\n  height: ", "px;\n"])), exports.appBarVariables.height);
var templateObject_1;
},{"styled-components":"../../../node_modules/styled-components/dist/styled-components.browser.esm.js"}],"../../paint-clone/src/app-bar.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = void 0;

var react_1 = __importDefault(require("react"));

var app_bar_styled_1 = require("./app-bar.styled");

exports.AppBar = function (props) {
  var activeTool = props.activeTool,
      backgroundColor = props.backgroundColor,
      brushColor = props.brushColor,
      brushSize = props.brushSize,
      onDownload = props.onDownload,
      onCacheClear = props.onCacheClear,
      onCanvasClear = props.onCanvasClear,
      _a = props.onToolSelect,
      onToolSelect = _a === void 0 ? function () {} : _a,
      _b = props.onBackgroundColorChange,
      onBackgroundColorChange = _b === void 0 ? function () {} : _b,
      _c = props.onBrushColorChange,
      onBrushColorChange = _c === void 0 ? function () {} : _c,
      _d = props.onBrushSizeChange,
      onBrushSizeChange = _d === void 0 ? function () {} : _d;
  return react_1.default.createElement(app_bar_styled_1.AppBarRoot, {
    style: {
      display: "flex"
    }
  }, react_1.default.createElement("div", null, activeTool), react_1.default.createElement("button", {
    type: "button",
    onClick: function () {
      return onToolSelect("brush");
    }
  }, "brush"), react_1.default.createElement("input", {
    value: brushColor,
    autoComplete: "off",
    onChange: function (e) {
      return onBrushColorChange(e.target.value);
    }
  }), react_1.default.createElement("div", null, "brush size"), react_1.default.createElement("div", null, brushSize), react_1.default.createElement("input", {
    type: "range",
    min: "1",
    max: "50",
    value: brushSize,
    onChange: function (e) {
      return onBrushSizeChange(parseInt(e.target.value, 10));
    }
  }), react_1.default.createElement("input", {
    value: backgroundColor,
    autoComplete: "off",
    onChange: function (e) {
      return onBackgroundColorChange(e.target.value);
    }
  }), react_1.default.createElement("button", {
    type: "button",
    title: "Eraser",
    onClick: function () {
      return onToolSelect("eraser");
    }
  }, "eraser"), react_1.default.createElement("button", {
    type: "button",
    title: "Clear",
    onClick: onCanvasClear
  }, "clear"), react_1.default.createElement("button", {
    type: "button",
    title: "Clear cache",
    onClick: onCacheClear
  }, "clear cache"), react_1.default.createElement("button", {
    type: "button",
    title: "Save image file",
    onClick: onDownload
  }, "save image file"));
};
},{"react":"../../../node_modules/react/index.js","./app-bar.styled":"../../paint-clone/src/app-bar.styled.tsx"}],"../../paint-clone/src/paint-clone.styled.tsx":[function(require,module,exports) {
"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = exports.MobileMessage = void 0;

var styled_components_1 = __importDefault(require("styled-components"));

exports.MobileMessage = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media screen and (min-width: 800px) {\n    display: none;\n  }\n"], ["\n  @media screen and (min-width: 800px) {\n    display: none;\n  }\n"])));
exports.Canvas = styled_components_1.default.canvas(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: crosshair;\n"], ["\n  cursor: crosshair;\n"])));
var templateObject_1, templateObject_2;
},{"styled-components":"../../../node_modules/styled-components/dist/styled-components.browser.esm.js"}],"../../paint-clone/src/paint-clone-container.tsx":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaintCloneContainer = void 0;

var react_1 = __importStar(require("react"));

var app_bar_1 = require("./app-bar");

var app_bar_styled_1 = require("./app-bar.styled");

var paint_clone_styled_1 = require("./paint-clone.styled");

exports.PaintCloneContainer = function () {
  var canvasRef = react_1.useRef(null);
  var contextRef = react_1.useRef();
  var isDrawingRef = react_1.useRef(false);
  var drawnStokesRef = react_1.useRef([]);

  var _a = react_1.useState("#ffffff"),
      backgroundColor = _a[0],
      setBackgroundColor = _a[1];

  var _b = react_1.useState("#000000"),
      brushColor = _b[0],
      setBrushColor = _b[1];

  var _c = react_1.useState(10),
      brushSize = _c[0],
      setBrushSize = _c[1];

  var _d = react_1.useState("brush"),
      activeTool = _d[0],
      setActiveTool = _d[1];

  react_1.useEffect(function () {
    var canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");
  }, []);
  var initCanvas = react_1.useCallback(function () {
    var canvas = canvasRef.current;
    var context = contextRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - app_bar_styled_1.appBarVariables.height;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [backgroundColor]);
  var restoreDrawing = react_1.useCallback(function () {
    var context = contextRef.current;
    var drawnStokes = drawnStokesRef.current;
    drawnStokes.forEach(function (stroke, i) {
      if (i === 0) return;
      context.beginPath();
      context.moveTo(drawnStokes[i - 1].x, drawnStokes[i - 1].y);
      context.lineWidth = stroke.size;
      context.lineCap = "round";

      if (stroke.type === "eraser") {
        context.strokeStyle = backgroundColor;
      } else {
        context.strokeStyle = stroke.color;
      }

      context.lineTo(stroke.x, stroke.y);
      context.stroke();
    });
  }, [backgroundColor]);
  react_1.useEffect(function () {
    initCanvas();
    restoreDrawing();
  }, [initCanvas, restoreDrawing]);

  var getMousePosition = function (event) {
    var boundaries = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top
    };
  };

  var handleMouseDown = function (e) {
    isDrawingRef.current = true;
    var context = contextRef.current;
    var curserPosition = getMousePosition(e);
    context.moveTo(curserPosition.x, curserPosition.y);
    context.beginPath();
    context.lineCap = "round";

    if (activeTool === "eraser") {
      context.strokeStyle = backgroundColor;
      context.lineWidth = 50;
    } else {
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
    }
  };

  var handleMouseMove = function (e) {
    if (!isDrawingRef.current) return;
    var context = contextRef.current;
    var currentPosition = getMousePosition(e);
    context.lineTo(currentPosition.x, currentPosition.y);
    context.stroke();
    var stroke = activeTool === "brush" ? {
      x: currentPosition.x,
      y: currentPosition.y,
      size: brushSize,
      color: brushColor,
      type: activeTool
    } : {
      x: currentPosition.x,
      y: currentPosition.y,
      size: 50,
      type: activeTool
    };
    drawnStokesRef.current.push(stroke);
  };

  var handleMouseUp = function () {
    isDrawingRef.current = false;
  };

  var handleCanvasClear = function () {
    drawnStokesRef.current = [];
    initCanvas();
  };

  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(app_bar_1.AppBar, {
    activeTool: activeTool,
    backgroundColor: backgroundColor,
    brushColor: brushColor,
    brushSize: brushSize,
    onBackgroundColorChange: setBackgroundColor,
    onBrushColorChange: setBrushColor,
    onToolSelect: setActiveTool,
    onBrushSizeChange: setBrushSize,
    onCanvasClear: handleCanvasClear
  }), react_1.default.createElement(paint_clone_styled_1.Canvas, {
    ref: canvasRef,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }), react_1.default.createElement(paint_clone_styled_1.MobileMessage, null, "Please use application on larger screen"));
};
},{"react":"../../../node_modules/react/index.js","./app-bar":"../../paint-clone/src/app-bar.tsx","./app-bar.styled":"../../paint-clone/src/app-bar.styled.tsx","./paint-clone.styled":"../../paint-clone/src/paint-clone.styled.tsx"}],"../../paint-clone/src/index.tsx":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__exportStar(require("./app-bar"), exports);

var paint_clone_container_1 = require("./paint-clone-container");

Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return paint_clone_container_1.PaintCloneContainer;
  }
});
},{"./app-bar":"../../paint-clone/src/app-bar.tsx","./paint-clone-container":"../../paint-clone/src/paint-clone-container.tsx"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50716" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/src.87758479.js.map