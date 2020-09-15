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
})({"../../music-player/src/assets/cant-you-see.mp3":[function(require,module,exports) {
module.exports = "/cant-you-see.f97ae7db.mp3";
},{}],"../../music-player/src/assets/holiday-blues.mp3":[function(require,module,exports) {
module.exports = "/holiday-blues.e187673f.mp3";
},{}],"../../music-player/src/assets/strawberry.mp3":[function(require,module,exports) {
module.exports = "/strawberry.3bf75c5f.mp3";
},{}],"../../music-player/src/progress-bar.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

var react_1 = __importDefault(require("react"));

exports.ProgressBar = function (props) {
  var value = props.value,
      onClick = props.onClick;

  var handleClick = function (e) {
    if (!onClick) return;
    var width = e.currentTarget.offsetWidth;
    var clickX = e.nativeEvent.offsetX;
    onClick(clickX / width);
  };

  return react_1.default.createElement("div", {
    style: {
      height: 20,
      cursor: "pointer",
      border: "1px solid black"
    },
    onClick: handleClick,
    role: "progressbar"
  }, react_1.default.createElement("div", {
    style: {
      width: value * 100 + "%",
      height: "100%",
      backgroundColor: "black"
    }
  }));
};
},{"react":"../../../node_modules/react/index.js"}],"../../music-player/src/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsToTime = void 0;

var zeroPad = function (number) {
  var numberString = "" + Math.floor(number);
  return ("0" + numberString).slice(-2);
};

exports.secondsToTime = function (totalSeconds) {
  var displaySeconds = totalSeconds % 60;
  var totalMinutes = (totalSeconds - displaySeconds) / 60;
  var displayMinutes = totalMinutes % 60;
  return zeroPad(displayMinutes) + ":" + zeroPad(displaySeconds);
};
},{}],"../../music-player/src/music-player-container.tsx":[function(require,module,exports) {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicPlayerContainer = void 0;

var react_1 = __importStar(require("react"));

var cant_you_see_mp3_1 = __importDefault(require("./assets/cant-you-see.mp3"));

var holiday_blues_mp3_1 = __importDefault(require("./assets/holiday-blues.mp3"));

var strawberry_mp3_1 = __importDefault(require("./assets/strawberry.mp3"));

var progress_bar_1 = require("./progress-bar");

var utils_1 = require("./utils");

var MUSICS = [{
  src: cant_you_see_mp3_1.default,
  name: "Can't you see",
  author: "Dyalla",
  credit: "Can't you see by Dyalla",
  url: "https://soundcloud.com/dyallas/cant-you-see"
}, {
  src: holiday_blues_mp3_1.default,
  name: "Holiday blues",
  author: "Joakim Karud",
  credit: "Holiday blues by Joakim Karud",
  url: "https://soundcloud.com/joakimkarud/holiday-blues"
}, {
  src: strawberry_mp3_1.default,
  name: "Strawberry",
  author: "Jeff Kaale",
  credit: "Strawberry by Jeff Kaale",
  url: "https://soundcloud.com/jeff-kaale/strawberry"
}];

exports.MusicPlayerContainer = function () {
  var _a = react_1.useState(0),
      musicIndex = _a[0],
      setMusicIndex = _a[1];

  var _b = react_1.useState(false),
      isPlaying = _b[0],
      setIsPlaying = _b[1];

  var _c = react_1.useState(0),
      progressValue = _c[0],
      setProgressValue = _c[1];

  var _d = react_1.useState(0),
      duration = _d[0],
      setDuration = _d[1];

  var _e = react_1.useState(0),
      currentTime = _e[0],
      setCurrentTime = _e[1];

  var musicRef = react_1.useRef(null);
  var _f = MUSICS[musicIndex],
      src = _f.src,
      name = _f.name,
      author = _f.author,
      url = _f.url;
  var totalMusicCount = MUSICS.length;
  react_1.useEffect(function () {
    var _a;

    setProgressValue(0);
    if (isPlaying) (_a = musicRef.current) === null || _a === void 0 ? void 0 : _a.play();
  }, [musicIndex]);

  var handlePrevious = function () {
    if (musicIndex === 0) return;
    setMusicIndex(musicIndex - 1);
  };

  var handleNext = function () {
    var lastIndex = totalMusicCount - 1;
    if (musicIndex === lastIndex) return;
    setMusicIndex(musicIndex + 1);
  };

  var handlePause = function () {
    var _a;

    (_a = musicRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    setIsPlaying(false);
  };

  var handlePlay = function () {
    var _a;

    (_a = musicRef.current) === null || _a === void 0 ? void 0 : _a.play();
    setIsPlaying(true);
  };

  var handleTimeUpdate = function (e) {
    if (!isPlaying) return;
    var target = e.currentTarget;
    setProgressValue(target.currentTime / target.duration);
    setCurrentTime(target.currentTime);
  };

  var handleProgressBarClick = function (value) {
    setProgressValue(value);
    var musicEl = musicRef.current;
    musicEl.currentTime = value * musicEl.duration;
    setCurrentTime(musicEl.currentTime);
  };

  var handleDurationChange = function (e) {
    setDuration(e.currentTarget.duration);
  };

  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", null, name), react_1.default.createElement("div", null, "by ", author), react_1.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "link to original music"), react_1.default.createElement(progress_bar_1.ProgressBar, {
    value: progressValue,
    onClick: handleProgressBarClick
  }), react_1.default.createElement("div", null, react_1.default.createElement("span", null, utils_1.secondsToTime(currentTime)), "/", react_1.default.createElement("span", null, utils_1.secondsToTime(duration))), react_1.default.createElement("button", {
    type: "button",
    onClick: handlePrevious
  }, "previous"), react_1.default.createElement("button", {
    type: "button",
    onClick: function () {
      return isPlaying ? handlePause() : handlePlay();
    }
  }, isPlaying ? "pause" : "play"), react_1.default.createElement("button", {
    type: "button",
    onClick: handleNext
  }, "next"), react_1.default.createElement("audio", {
    src: src,
    ref: musicRef,
    onEnded: handleNext,
    onTimeUpdate: handleTimeUpdate,
    onDurationChange: handleDurationChange
  }), react_1.default.createElement("div", null, musicIndex + 1, "/", totalMusicCount));
};
},{"react":"../../../node_modules/react/index.js","./assets/cant-you-see.mp3":"../../music-player/src/assets/cant-you-see.mp3","./assets/holiday-blues.mp3":"../../music-player/src/assets/holiday-blues.mp3","./assets/strawberry.mp3":"../../music-player/src/assets/strawberry.mp3","./progress-bar":"../../music-player/src/progress-bar.tsx","./utils":"../../music-player/src/utils.ts"}],"../../music-player/src/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var music_player_container_1 = require("./music-player-container");

Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return music_player_container_1.MusicPlayerContainer;
  }
});
},{"./music-player-container":"../../music-player/src/music-player-container.tsx"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/src.16e6013f.js.map