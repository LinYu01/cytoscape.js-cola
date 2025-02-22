(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeCola"] = factory();
	else
		root["cytoscapeCola"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global = global || self, factory(global.cola = {}));
})(undefined, function (exports) {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }

  function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  }

  var PowerEdge = function PowerEdge(source, target, type) {
    this.source = source;
    this.target = target;
    this.type = type;
  };
  var Configuration = /*#__PURE__*/function () {
    function Configuration(n, edges, linkAccessor, rootGroup) {
      var _this = this;

      this.linkAccessor = linkAccessor;
      this.modules = new Array(n);
      this.roots = [];

      if (rootGroup) {
        this.initModulesFromGroup(rootGroup);
      } else {
        this.roots.push(new ModuleSet());

        for (var i = 0; i < n; ++i) {
          this.roots[0].add(this.modules[i] = new Module(i));
        }
      }

      this.R = edges.length;
      edges.forEach(function (e) {
        var s = _this.modules[linkAccessor.getSourceIndex(e)],
            t = _this.modules[linkAccessor.getTargetIndex(e)],
            type = linkAccessor.getType(e);

        s.outgoing.add(type, t);
        t.incoming.add(type, s);
      });
    }

    var _proto = Configuration.prototype;

    _proto.initModulesFromGroup = function initModulesFromGroup(group) {
      var moduleSet = new ModuleSet();
      this.roots.push(moduleSet);

      for (var i = 0; i < group.leaves.length; ++i) {
        var node = group.leaves[i];
        var module = new Module(node.id);
        this.modules[node.id] = module;
        moduleSet.add(module);
      }

      if (group.groups) {
        for (var j = 0; j < group.groups.length; ++j) {
          var child = group.groups[j]; // Propagate group properties (like padding, stiffness, ...) as module definition so that the generated power graph group will inherit it

          var definition = {};

          for (var prop in child) {
            if (prop !== "leaves" && prop !== "groups" && child.hasOwnProperty(prop)) definition[prop] = child[prop];
          } // Use negative module id to avoid clashes between predefined and generated modules


          moduleSet.add(new Module(-1 - j, new LinkSets(), new LinkSets(), this.initModulesFromGroup(child), definition));
        }
      }

      return moduleSet;
    } // merge modules a and b keeping track of their power edges and removing the from roots
    ;

    _proto.merge = function merge(a, b, k) {
      if (k === void 0) {
        k = 0;
      }

      var inInt = a.incoming.intersection(b.incoming),
          outInt = a.outgoing.intersection(b.outgoing);
      var children = new ModuleSet();
      children.add(a);
      children.add(b);
      var m = new Module(this.modules.length, outInt, inInt, children);
      this.modules.push(m);

      var update = function update(s, i, o) {
        s.forAll(function (ms, linktype) {
          ms.forAll(function (n) {
            var nls = n[i];
            nls.add(linktype, m);
            nls.remove(linktype, a);
            nls.remove(linktype, b);
            a[o].remove(linktype, n);
            b[o].remove(linktype, n);
          });
        });
      };

      update(outInt, "incoming", "outgoing");
      update(inInt, "outgoing", "incoming");
      this.R -= inInt.count() + outInt.count();
      this.roots[k].remove(a);
      this.roots[k].remove(b);
      this.roots[k].add(m);
      return m;
    };

    _proto.rootMerges = function rootMerges(k) {
      if (k === void 0) {
        k = 0;
      }

      var rs = this.roots[k].modules();
      var n = rs.length;
      var merges = new Array(n * (n - 1));
      var ctr = 0;

      for (var i = 0, i_ = n - 1; i < i_; ++i) {
        for (var j = i + 1; j < n; ++j) {
          var a = rs[i],
              b = rs[j];
          merges[ctr] = {
            id: ctr,
            nEdges: this.nEdges(a, b),
            a: a,
            b: b
          };
          ctr++;
        }
      }

      return merges;
    };

    _proto.greedyMerge = function greedyMerge() {
      for (var i = 0; i < this.roots.length; ++i) {
        // Handle single nested module case
        if (this.roots[i].modules().length < 2) continue; // find the merge that allows for the most edges to be removed.  secondary ordering based on arbitrary id (for predictability)

        var ms = this.rootMerges(i).sort(function (a, b) {
          return a.nEdges == b.nEdges ? a.id - b.id : a.nEdges - b.nEdges;
        });
        var m = ms[0];
        if (m.nEdges >= this.R) continue;
        this.merge(m.a, m.b, i);
        return true;
      }
    };

    _proto.nEdges = function nEdges(a, b) {
      var inInt = a.incoming.intersection(b.incoming),
          outInt = a.outgoing.intersection(b.outgoing);
      return this.R - inInt.count() - outInt.count();
    };

    _proto.getGroupHierarchy = function getGroupHierarchy(retargetedEdges) {
      var _this2 = this;

      var groups = [];
      var root = {};
      toGroups(this.roots[0], root, groups);
      var es = this.allEdges();
      es.forEach(function (e) {
        var a = _this2.modules[e.source];
        var b = _this2.modules[e.target];
        retargetedEdges.push(new PowerEdge(typeof a.gid === "undefined" ? e.source : groups[a.gid], typeof b.gid === "undefined" ? e.target : groups[b.gid], e.type));
      });
      return groups;
    };

    _proto.allEdges = function allEdges() {
      var es = [];
      Configuration.getEdges(this.roots[0], es);
      return es;
    };

    Configuration.getEdges = function getEdges(modules, es) {
      modules.forAll(function (m) {
        m.getEdges(es);
        Configuration.getEdges(m.children, es);
      });
    };

    return Configuration;
  }();

  function toGroups(modules, group, groups) {
    modules.forAll(function (m) {
      if (m.isLeaf()) {
        if (!group.leaves) group.leaves = [];
        group.leaves.push(m.id);
      } else {
        var g = group;
        m.gid = groups.length;

        if (!m.isIsland() || m.isPredefined()) {
          g = {
            id: m.gid
          };
          if (m.isPredefined()) // Apply original group properties
            for (var prop in m.definition) {
              g[prop] = m.definition[prop];
            }
          if (!group.groups) group.groups = [];
          group.groups.push(m.gid);
          groups.push(g);
        }

        toGroups(m.children, g, groups);
      }
    });
  }

  var Module = /*#__PURE__*/function () {
    function Module(id, outgoing, incoming, children, definition) {
      if (outgoing === void 0) {
        outgoing = new LinkSets();
      }

      if (incoming === void 0) {
        incoming = new LinkSets();
      }

      if (children === void 0) {
        children = new ModuleSet();
      }

      this.id = id;
      this.outgoing = outgoing;
      this.incoming = incoming;
      this.children = children;
      this.definition = definition;
    }

    var _proto2 = Module.prototype;

    _proto2.getEdges = function getEdges(es) {
      var _this3 = this;

      this.outgoing.forAll(function (ms, edgetype) {
        ms.forAll(function (target) {
          es.push(new PowerEdge(_this3.id, target.id, edgetype));
        });
      });
    };

    _proto2.isLeaf = function isLeaf() {
      return this.children.count() === 0;
    };

    _proto2.isIsland = function isIsland() {
      return this.outgoing.count() === 0 && this.incoming.count() === 0;
    };

    _proto2.isPredefined = function isPredefined() {
      return typeof this.definition !== "undefined";
    };

    return Module;
  }();

  function _intersection(m, n) {
    var i = {};

    for (var v in m) {
      if (v in n) i[v] = m[v];
    }

    return i;
  }

  var ModuleSet = /*#__PURE__*/function () {
    function ModuleSet() {
      this.table = {};
    }

    var _proto3 = ModuleSet.prototype;

    _proto3.count = function count() {
      return Object.keys(this.table).length;
    };

    _proto3.intersection = function intersection(other) {
      var result = new ModuleSet();
      result.table = _intersection(this.table, other.table);
      return result;
    };

    _proto3.intersectionCount = function intersectionCount(other) {
      return this.intersection(other).count();
    };

    _proto3.contains = function contains(id) {
      return id in this.table;
    };

    _proto3.add = function add(m) {
      this.table[m.id] = m;
    };

    _proto3.remove = function remove(m) {
      delete this.table[m.id];
    };

    _proto3.forAll = function forAll(f) {
      for (var mid in this.table) {
        f(this.table[mid]);
      }
    };

    _proto3.modules = function modules() {
      var vs = [];
      this.forAll(function (m) {
        if (!m.isPredefined()) vs.push(m);
      });
      return vs;
    };

    return ModuleSet;
  }();
  var LinkSets = /*#__PURE__*/function () {
    function LinkSets() {
      this.sets = {};
      this.n = 0;
    }

    var _proto4 = LinkSets.prototype;

    _proto4.count = function count() {
      return this.n;
    };

    _proto4.contains = function contains(id) {
      var result = false;
      this.forAllModules(function (m) {
        if (!result && m.id == id) {
          result = true;
        }
      });
      return result;
    };

    _proto4.add = function add(linktype, m) {
      var s = linktype in this.sets ? this.sets[linktype] : this.sets[linktype] = new ModuleSet();
      s.add(m);
      ++this.n;
    };

    _proto4.remove = function remove(linktype, m) {
      var ms = this.sets[linktype];
      ms.remove(m);

      if (ms.count() === 0) {
        delete this.sets[linktype];
      }

      --this.n;
    };

    _proto4.forAll = function forAll(f) {
      for (var linktype in this.sets) {
        f(this.sets[linktype], Number(linktype));
      }
    };

    _proto4.forAllModules = function forAllModules(f) {
      this.forAll(function (ms, lt) {
        return ms.forAll(f);
      });
    };

    _proto4.intersection = function intersection(other) {
      var result = new LinkSets();
      this.forAll(function (ms, lt) {
        if (lt in other.sets) {
          var i = ms.intersection(other.sets[lt]),
              n = i.count();

          if (n > 0) {
            result.sets[lt] = i;
            result.n += n;
          }
        }
      });
      return result;
    };

    return LinkSets;
  }();

  function getGroups(nodes, links, la, rootGroup) {
    var n = nodes.length,
        c = new Configuration(n, links, la, rootGroup);

    while (c.greedyMerge()) {}

    var powerEdges = [];
    var g = c.getGroupHierarchy(powerEdges);
    powerEdges.forEach(function (e) {
      var f = function f(end) {
        var g = e[end];
        if (typeof g == "number") e[end] = nodes[g];
      };

      f("source");
      f("target");
    });
    return {
      groups: g,
      powerEdges: powerEdges
    };
  }

  // compute the size of the union of two sets a and b
  function unionCount(a, b) {
    var u = {};

    for (var i in a) {
      u[i] = {};
    }

    for (var i in b) {
      u[i] = {};
    }

    return Object.keys(u).length;
  } // compute the size of the intersection of two sets a and b


  function intersectionCount(a, b) {
    var n = 0;

    for (var i in a) {
      if (typeof b[i] !== 'undefined') ++n;
    }

    return n;
  }

  function getNeighbours(links, la) {
    var neighbours = {};

    var addNeighbours = function addNeighbours(u, v) {
      if (typeof neighbours[u] === 'undefined') neighbours[u] = {};
      neighbours[u][v] = {};
    };

    links.forEach(function (e) {
      var u = la.getSourceIndex(e),
          v = la.getTargetIndex(e);
      addNeighbours(u, v);
      addNeighbours(v, u);
    });
    return neighbours;
  } // modify the lengths of the specified links by the result of function f weighted by w


  function computeLinkLengths(links, w, f, la) {
    var neighbours = getNeighbours(links, la);
    links.forEach(function (l) {
      var a = neighbours[la.getSourceIndex(l)];
      var b = neighbours[la.getTargetIndex(l)];
      la.setLength(l, 1 + w * f(a, b));
    });
  }
  /** modify the specified link lengths based on the symmetric difference of their neighbours
   * @class symmetricDiffLinkLengths
   */

  function symmetricDiffLinkLengths(links, la, w) {
    if (w === void 0) {
      w = 1;
    }

    computeLinkLengths(links, w, function (a, b) {
      return Math.sqrt(unionCount(a, b) - intersectionCount(a, b));
    }, la);
  }
  /** modify the specified links lengths based on the jaccard difference between their neighbours
   * @class jaccardLinkLengths
   */

  function jaccardLinkLengths(links, la, w) {
    if (w === void 0) {
      w = 1;
    }

    computeLinkLengths(links, w, function (a, b) {
      return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1 ? 0 : intersectionCount(a, b) / unionCount(a, b);
    }, la);
  }
  /** generate separation constraints for all edges unless both their source and sink are in the same strongly connected component
   * @class generateDirectedEdgeConstraints
   */

  function generateDirectedEdgeConstraints(n, links, axis, la) {
    var components = stronglyConnectedComponents(n, links, la);
    var nodes = {};
    components.forEach(function (c, i) {
      return c.forEach(function (v) {
        return nodes[v] = i;
      });
    });
    var constraints = [];
    links.forEach(function (l) {
      var ui = la.getSourceIndex(l),
          vi = la.getTargetIndex(l),
          u = nodes[ui],
          v = nodes[vi];

      if (u !== v) {
        constraints.push({
          axis: axis,
          left: ui,
          right: vi,
          gap: la.getMinSeparation(l)
        });
      }
    });
    return constraints;
  }
  /**
   * Tarjan's strongly connected components algorithm for directed graphs
   * returns an array of arrays of node indicies in each of the strongly connected components.
   * a vertex not in a SCC of two or more nodes is it's own SCC.
   * adaptation of https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
   */

  function stronglyConnectedComponents(numVertices, edges, la) {
    var nodes = [];
    var index = 0;
    var stack = [];
    var components = [];

    function strongConnect(v) {
      // Set the depth index for v to the smallest unused index
      v.index = v.lowlink = index++;
      stack.push(v);
      v.onStack = true; // Consider successors of v

      for (var _iterator = _createForOfIteratorHelperLoose(v.out), _step; !(_step = _iterator()).done;) {
        var w = _step.value;

        if (typeof w.index === 'undefined') {
          // Successor w has not yet been visited; recurse on it
          strongConnect(w);
          v.lowlink = Math.min(v.lowlink, w.lowlink);
        } else if (w.onStack) {
          // Successor w is in stack S and hence in the current SCC
          v.lowlink = Math.min(v.lowlink, w.index);
        }
      } // If v is a root node, pop the stack and generate an SCC


      if (v.lowlink === v.index) {
        // start a new strongly connected component
        var component = [];

        while (stack.length) {
          w = stack.pop();
          w.onStack = false; //add w to current strongly connected component

          component.push(w);
          if (w === v) break;
        } // output the current strongly connected component


        components.push(component.map(function (v) {
          return v.id;
        }));
      }
    }

    for (var i = 0; i < numVertices; i++) {
      nodes.push({
        id: i,
        out: []
      });
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(edges), _step2; !(_step2 = _iterator2()).done;) {
      var e = _step2.value;
      var _v = nodes[la.getSourceIndex(e)],
          w = nodes[la.getTargetIndex(e)];

      _v.out.push(w);
    }

    for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
      var v = _nodes[_i];
      if (typeof v.index === 'undefined') strongConnect(v);
    }

    return components;
  }

  /**
   * Descent respects a collection of locks over nodes that should not move
   * @class Locks
   */
  var Locks = /*#__PURE__*/function () {
    function Locks() {
      this.locks = {};
    }
    /**
     * add a lock on the node at index id
     * @method add
     * @param id index of node to be locked
     * @param x required position for node
     */

    var _proto = Locks.prototype;

    _proto.add = function add(id, x) {
      /* DEBUG
                  if (isNaN(x[0]) || isNaN(x[1])) debugger;
      DEBUG */
      this.locks[id] = x;
    }
    /**
     * @method clear clear all locks
     */
    ;

    _proto.clear = function clear() {
      this.locks = {};
    }
    /**
     * @isEmpty
     * @returns false if no locks exist
     */
    ;

    _proto.isEmpty = function isEmpty() {
      for (var l in this.locks) {
        return false;
      }

      return true;
    }
    /**
     * perform an operation on each lock
     * @apply
     */
    ;

    _proto.apply = function apply(f) {
      for (var l in this.locks) {
        f(Number(l), this.locks[l]);
      }
    };

    return Locks;
  }();
  var BYTES_PER_F32 = 32 / 8;
  /**
   * Uses a gradient descent approach to reduce a stress or p-stress goal function over a graph with specified ideal edge lengths or a square matrix of dissimilarities.
   * The standard stress function over a graph nodes with position vectors x,y,z is (mathematica input):
   *   stress[x_,y_,z_,D_,w_]:=Sum[w[[i,j]] (length[x[[i]],y[[i]],z[[i]],x[[j]],y[[j]],z[[j]]]-d[[i,j]])^2,{i,Length[x]-1},{j,i+1,Length[x]}]
   * where: D is a square matrix of ideal separations between nodes, w is matrix of weights for those separations
   *        length[x1_, y1_, z1_, x2_, y2_, z2_] = Sqrt[(x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2]
   * below, we use wij = 1/(Dij^2)
   *
   * @class Descent
   */

  var Descent = /*#__PURE__*/function () {
    /**
     * @method constructor
     * @param x {number[][]} initial coordinates for nodes
     * @param D {number[][]} matrix of desired distances between pairs of nodes
     * @param G {number[][]} [default=null] if specified, G is a matrix of weights for goal terms between pairs of nodes.
     * If G[i][j] > 1 and the separation between nodes i and j is greater than their ideal distance, then there is no contribution for this pair to the goal
     * If G[i][j] <= 1 then it is used as a weighting on the contribution of the variance between ideal and actual separation between i and j to the goal function
     */
    function Descent(x, D, G, wasm) {
      if (G === void 0) {
        G = null;
      }

      this.threshold = 0.0001; // Parameters for grid snap stress.
      // TODO: Make a pluggable "StressTerm" class instead of this
      // mess.

      this.numGridSnapNodes = 0;
      this.snapGridSize = 100;
      this.snapStrength = 1000;
      this.scaleSnapByMaxH = false;
      this.random = new PseudoRandom();
      this.project = null;
      this.wasm = wasm;
      this.x = x.map(function (xn) {
        return new Float32Array(xn);
      });
      this.k = x.length; // dimensionality

      var n = this.n = x[0].length; // number of nodes
      // Set up Wasm context

      this.setupWasm(D, G);
      this.a = new Array(this.k);
      this.b = new Array(this.k);
      this.c = new Array(this.k);
      this.d = new Array(this.k);
      this.e = new Array(this.k);
      this.ia = new Array(this.k);
      this.ib = new Array(this.k);
      this.xtmp = new Array(this.k);
      this.locks = new Locks();
      this.minD = Number.MAX_VALUE;
      var i = n,
          j;

      while (i--) {
        j = n;

        while (--j > i) {
          var d = D[i][j];

          if (d > 0 && d < this.minD) {
            this.minD = d;
          }
        }
      }

      if (this.minD === Number.MAX_VALUE) this.minD = 1;
      i = this.k;

      while (i--) {
        j = n;
        this.a[i] = new Float32Array(n);
        this.b[i] = new Float32Array(n);
        this.c[i] = new Float32Array(n);
        this.d[i] = new Float32Array(n);
        this.e[i] = new Float32Array(n);
        this.ia[i] = new Float32Array(n);
        this.ib[i] = new Float32Array(n);
        this.xtmp[i] = new Array(n);
      }
    }
    /** gradient vector
     * @property g {Float32Array[]}
     */

    var _proto2 = Descent.prototype;

    _proto2.computeDerivatives = function computeDerivatives(x) {
      var _this = this;

      if (this.k === 2) {
        var packedX = function () {
          var packed = new Float32Array(x[0].length * _this.k);
          x.forEach(function (xn, i) {
            return packed.set(xn, i * _this.n);
          });
          return packed;
        }();

        var outX = this.wasm.compute_2d(this.ctxPtr, packedX);

        if (x) {
          x.forEach(function (xn, i) {
            var slice = outX.subarray(i * _this.n, i * _this.n + _this.n);
            xn.set(slice);
          });
        }
      } else if (this.k === 3) {
        var _packedX = function () {
          var packed = new Float32Array(x[0].length * _this.k);
          x.forEach(function (xn, i) {
            return packed.set(xn, i * _this.n);
          });
          return packed;
        }();

        var _outX = this.wasm.compute_3d(this.ctxPtr, _packedX);

        if (x) {
          x.forEach(function (xn, i) {
            var slice = _outX.subarray(i * _this.n, i * _this.n + _this.n);

            xn.set(slice);
          });
        }
      } else {
        throw new Error('Invalid dimensionality');
      }

      if (!this.locks.isEmpty()) {
        this.locks.apply(function (u, p) {
          if (_this.k === 2) {
            _this.wasm.apply_lock_2d(_this.ctxPtr, u, p[0], p[1], x[0][u], x[1][u]);
          } else if (_this.k === 3) {
            _this.wasm.apply_lock_3d(_this.ctxPtr, u, p[0], p[1], p[2], x[0][u], x[1][u], x[2][u]);
          } else {
            throw new Error('Invalid dimensionality');
          }
        });
      }
    };

    _proto2.cleanWasmMemory = function cleanWasmMemory() {
      if (this.ctxPtr) {
        this.wasm.release_ctx_2d(this.ctxPtr);
        this.ctxPtr = 0;
      }
    };

    _proto2.setupWasm = function setupWasm(D, G) {
      var _this2 = this;

      if (G === void 0) {
        G = null;
      }

      var allD = new Float32Array(this.n * this.n);
      var allG = G ? new Float32Array(this.n * this.k) : new Float32Array(0);
      D.forEach(function (dn, i) {
        allD.set(dn, i * _this2.n);
      });

      if (G) {
        G.forEach(function (gn, i) {
          allG.set(gn, i * _this2.n);
        });
      }

      allD.forEach(function (d, i) {
        if (d === Infinity) {
          allD[i] = -10000000; // ideal distance

          allG[i] = 1000.; // weight
        }
      });
      var createrFn = this.k === 2 ? this.wasm.create_derivative_computer_ctx_2d : this.wasm.create_derivative_computer_ctx_3d;
      var ctxPtr = createrFn(this.n, allD, allG);
      this.ctxPtr = ctxPtr;
    };

    Descent.createSquareMatrix = function createSquareMatrix(n, f) {
      var M = new Array(n);

      for (var i = 0; i < n; ++i) {
        M[i] = new Array(n);

        for (var j = 0; j < n; ++j) {
          M[i][j] = f(i, j);
        }
      }

      return M;
    };

    _proto2.offsetDir = function offsetDir() {
      var _this3 = this;

      var u = new Array(this.k);
      var l = 0;

      for (var i = 0; i < this.k; ++i) {
        var x = u[i] = this.random.getNextBetween(0.01, 1) - 0.5;
        l += x * x;
      }

      l = Math.sqrt(l);
      return u.map(function (x) {
        return x *= _this3.minD / l;
      });
    };

    Descent.dotProd = function dotProd(a, b) {
      var x = 0,
          i = a.length;

      while (i--) {
        x += a[i] * b[i];
      }

      return x;
    } // result r = matrix m * vector v
    ;

    Descent.rightMultiply = function rightMultiply(m, v, r) {
      var i = m.length;

      while (i--) {
        r[i] = Descent.dotProd(m[i], v);
      }
    } // computes the optimal step size to take in direction d using the
    // derivative information in this.g and this.H
    // returns the scalar multiplier to apply to d to get the optimal step
    ;

    _proto2.computeStepSize = function computeStepSize() {
      if (this.k === 2) {
        return this.wasm.compute_step_size_2d(this.ctxPtr);
      } else if (this.k === 3) {
        return this.wasm.compute_step_size_3d(this.ctxPtr);
      } else {
        throw new Error('Invalid dimensionality');
      }
    };

    _proto2.reduceStress = function reduceStress() {
      this.computeDerivatives(this.x);
      var alpha = this.computeStepSize();
      var thisG = this.g;

      for (var i = 0; i < this.k; ++i) {
        this.takeDescentStep(this.x[i], thisG[i], alpha);
      }

      return this.computeStress();
    };

    Descent.copy = function copy(a, b) {
      var m = a.length,
          n = b[0].length;

      for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
          b[i][j] = a[i][j];
        }
      }
    } // takes a step of stepSize * d from x0, and then project against any constraints.
    // result is returned in r.
    // x0: starting positions
    // r: result positions will be returned here
    // d: unconstrained descent vector
    // stepSize: amount to step along d
    ;

    _proto2.stepAndProject = function stepAndProject(x0, r, d, stepSize) {
      Descent.copy(x0, r);
      this.takeDescentStep(r[0], d[0], stepSize);
      if (this.project) this.project[0](x0[0], x0[1], r[0]);
      this.takeDescentStep(r[1], d[1], stepSize);
      if (this.project) this.project[1](r[0], x0[1], r[1]); // todo: allow projection against constraints in higher dimensions

      for (var i = 2; i < this.k; i++) {
        this.takeDescentStep(r[i], d[i], stepSize);
      } // the following makes locks extra sticky... but hides the result of the projection from the consumer
      //if (!this.locks.isEmpty()) {
      //    this.locks.apply((u, p) => {
      //        for (var i = 0; i < this.k; i++) {
      //            r[i][u] = p[i];
      //        }
      //    });
      //}
    };

    Descent.mApply = function mApply(m, n, f) {
      var i = m;

      while (i-- > 0) {
        var j = n;

        while (j-- > 0) {
          f(i, j);
        }
      }
    };

    _proto2.matrixApply = function matrixApply(f) {
      Descent.mApply(this.k, this.n, f);
    };

    _proto2.computeNextPosition = function computeNextPosition(x0, r) {
      this.computeDerivatives(x0);
      var alpha = this.computeStepSize();
      this.stepAndProject(x0, r, this.g, alpha);
      /* DEBUG
                  for (var u: number = 0; u < this.n; ++u)
                      for (var i = 0; i < this.k; ++i)
                          if (isNaN(r[i][u])) debugger;
      DEBUG */

      if (this.project) {
        // This functionality is not yet implemented with the Wasm port
        throw new Error('Computing step with with `this.project` set is not yet implemented in Wasm port'); // this.matrixApply((i, j) => this.e[i][j] = x0[i][j] - r[i][j]);
        // var beta = this.computeStepSize(this.e);
        // beta = Math.max(0.2, Math.min(beta, 1));
        // this.stepAndProject(x0, r, this.e, beta);
      }
    };

    _proto2.run = function run(iterations) {
      var stress = Number.MAX_VALUE,
          converged = false;

      while (!converged && iterations-- > 0) {
        var s = this.rungeKutta();
        converged = Math.abs(stress / s - 1) < this.threshold;
        stress = s;
      }

      return stress;
    };

    _proto2.rungeKutta = function rungeKutta() {
      var _this4 = this;

      this.computeNextPosition(this.x, this.a);
      Descent.mid(this.x, this.a, this.ia);
      this.computeNextPosition(this.ia, this.b);
      Descent.mid(this.x, this.b, this.ib);
      this.computeNextPosition(this.ib, this.c);
      this.computeNextPosition(this.c, this.d);
      var disp = 0;
      this.matrixApply(function (i, j) {
        var x = (_this4.a[i][j] + 2.0 * _this4.b[i][j] + 2.0 * _this4.c[i][j] + _this4.d[i][j]) / 6.0,
            d = _this4.x[i][j] - x;
        disp += d * d;
        _this4.x[i][j] = x;
      });
      return disp;
    };

    Descent.mid = function mid(a, b, m) {
      Descent.mApply(a.length, a[0].length, function (i, j) {
        return m[i][j] = a[i][j] + (b[i][j] - a[i][j]) / 2.0;
      });
    };

    _proto2.takeDescentStep = function takeDescentStep(x, d, stepSize) {
      for (var i = 0; i < this.n; ++i) {
        x[i] = x[i] - stepSize * d[i];
      }
    };

    _proto2.computeStress = function computeStress() {
      var stress = 0;

      for (var u = 0, nMinus1 = this.n - 1; u < nMinus1; ++u) {
        for (var v = u + 1, n = this.n; v < n; ++v) {
          var l = 0;

          for (var i = 0; i < this.k; ++i) {
            var dx = this.x[i][u] - this.x[i][v];
            l += dx * dx;
          }

          l = Math.sqrt(l);
          var d = this.D[u][v];
          if (!isFinite(d)) continue;
          var rl = d - l;
          var d2 = d * d;
          stress += rl * rl / d2;
        }
      }

      return stress;
    };

    _createClass(Descent, [{
      key: "g",
      get: function get() {
        var _this5 = this;

        var memory = this.wasm.get_memory();
        var memoryView = new Float32Array(memory.buffer);
        var gPtr = this.k === 2 ? this.wasm.get_g_2d(this.ctxPtr) : this.wasm.get_g_3d(this.ctxPtr);
        var gOffset = gPtr / BYTES_PER_F32;
        return new Array(this.k).fill(null).map(function (_, i) {
          return memoryView.subarray(gOffset + i * _this5.n, gOffset + i * _this5.n + _this5.n);
        });
      }
    }, {
      key: "G",
      set: function set(newG) {
        var _this6 = this;

        var allG = function () {
          if (newG) {
            var _allG = new Float32Array(_this6.n * _this6.n);

            newG.forEach(function (Gn, i) {
              return _allG.set(Gn, i * _this6.n);
            });
            return _allG;
          } else {
            return new Float32Array();
          }
        }();

        if (this.k === 2) {
          this.wasm.set_G_2d(this.ctxPtr, allG);
        } else if (this.k === 3) {
          this.wasm.set_G_3d(this.ctxPtr, allG);
        } else {
          throw new Error('Invalid dimensionality');
        }
      }
      /**
       * matrix of desired distances between pairs of nodes
       */

    }, {
      key: "D",
      get: function get() {
        var _this7 = this;

        var memory = this.wasm.get_memory();
        var memoryView = new Float32Array(memory.buffer);
        var DPtr = this.k === 2 ? this.wasm.get_D_2d(this.ctxPtr) : this.wasm.get_D_3d(this.ctxPtr);
        var DOffset = DPtr / BYTES_PER_F32;
        return new Array(this.n).fill(null).map(function (_, i) {
          return memoryView.subarray(DOffset + i * _this7.n, DOffset + i * _this7.n + _this7.n);
        });
      }
    }]);

    return Descent;
  }();
  Descent.zeroDistance = 1e-10; // Linear congruential pseudo random number generator

  var PseudoRandom = /*#__PURE__*/function () {
    function PseudoRandom(seed) {
      if (seed === void 0) {
        seed = 1;
      }

      this.seed = seed;
      this.a = 214013;
      this.c = 2531011;
      this.m = 2147483648;
      this.range = 32767;
    } // random real between 0 and 1


    var _proto3 = PseudoRandom.prototype;

    _proto3.getNext = function getNext() {
      this.seed = (this.seed * this.a + this.c) % this.m;
      return (this.seed >> 16) / this.range;
    } // random real between min and max
    ;

    _proto3.getNextBetween = function getNextBetween(min, max) {
      return min + this.getNext() * (max - min);
    };

    return PseudoRandom;
  }();

  var PositionStats = /*#__PURE__*/function () {
    function PositionStats(scale) {
      this.scale = scale;
      this.AB = 0;
      this.AD = 0;
      this.A2 = 0;
    }

    var _proto = PositionStats.prototype;

    _proto.addVariable = function addVariable(v) {
      var ai = this.scale / v.scale;
      var bi = v.offset / v.scale;
      var wi = v.weight;
      this.AB += wi * ai * bi;
      this.AD += wi * ai * v.desiredPosition;
      this.A2 += wi * ai * ai;
    };

    _proto.getPosn = function getPosn() {
      return (this.AD - this.AB) / this.A2;
    };

    return PositionStats;
  }();
  var Constraint = /*#__PURE__*/function () {
    function Constraint(left, right, gap, equality) {
      if (equality === void 0) {
        equality = false;
      }

      this.left = left;
      this.right = right;
      this.gap = gap;
      this.equality = equality;
      this.active = false;
      this.unsatisfiable = false;
      this.left = left;
      this.right = right;
      this.gap = gap;
      this.equality = equality;
    }

    var _proto2 = Constraint.prototype;

    _proto2.slack = function slack() {
      return this.unsatisfiable ? Number.MAX_VALUE : this.right.scale * this.right.position() - this.gap - this.left.scale * this.left.position();
    };

    return Constraint;
  }();
  var Variable = /*#__PURE__*/function () {
    function Variable(desiredPosition, weight, scale) {
      if (weight === void 0) {
        weight = 1;
      }

      if (scale === void 0) {
        scale = 1;
      }

      this.desiredPosition = desiredPosition;
      this.weight = weight;
      this.scale = scale;
      this.offset = 0;
    }

    var _proto3 = Variable.prototype;

    _proto3.dfdv = function dfdv() {
      return 2.0 * this.weight * (this.position() - this.desiredPosition);
    };

    _proto3.position = function position() {
      return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
    } // visit neighbours by active constraints within the same block
    ;

    _proto3.visitNeighbours = function visitNeighbours(prev, f) {
      var ff = function ff(c, next) {
        return c.active && prev !== next && f(c, next);
      };

      this.cOut.forEach(function (c) {
        return ff(c, c.right);
      });
      this.cIn.forEach(function (c) {
        return ff(c, c.left);
      });
    };

    return Variable;
  }();
  var Block = /*#__PURE__*/function () {
    function Block(v) {
      this.vars = [];
      v.offset = 0;
      this.ps = new PositionStats(v.scale);
      this.addVariable(v);
    }

    var _proto4 = Block.prototype;

    _proto4.addVariable = function addVariable(v) {
      v.block = this;
      this.vars.push(v);
      this.ps.addVariable(v);
      this.posn = this.ps.getPosn();
    } // move the block where it needs to be to minimize cost
    ;

    _proto4.updateWeightedPosition = function updateWeightedPosition() {
      this.ps.AB = this.ps.AD = this.ps.A2 = 0;

      for (var i = 0, n = this.vars.length; i < n; ++i) {
        this.ps.addVariable(this.vars[i]);
      }

      this.posn = this.ps.getPosn();
    };

    _proto4.compute_lm = function compute_lm(v, u, postAction) {
      var _this = this;

      var dfdv = v.dfdv();
      v.visitNeighbours(u, function (c, next) {
        var _dfdv = _this.compute_lm(next, v, postAction);

        if (next === c.right) {
          dfdv += _dfdv * c.left.scale;
          c.lm = _dfdv;
        } else {
          dfdv += _dfdv * c.right.scale;
          c.lm = -_dfdv;
        }

        postAction(c);
      });
      return dfdv / v.scale;
    };

    _proto4.populateSplitBlock = function populateSplitBlock(v, prev) {
      var _this2 = this;

      v.visitNeighbours(prev, function (c, next) {
        next.offset = v.offset + (next === c.right ? c.gap : -c.gap);

        _this2.addVariable(next);

        _this2.populateSplitBlock(next, v);
      });
    } // traverse the active constraint tree applying visit to each active constraint
    ;

    _proto4.traverse = function traverse(visit, acc, v, prev) {
      var _this3 = this;

      if (v === void 0) {
        v = this.vars[0];
      }

      if (prev === void 0) {
        prev = null;
      }

      v.visitNeighbours(prev, function (c, next) {
        acc.push(visit(c));

        _this3.traverse(visit, acc, next, v);
      });
    } // calculate lagrangian multipliers on constraints and
    // find the active constraint in this block with the smallest lagrangian.
    // if the lagrangian is negative, then the constraint is a split candidate.
    ;

    _proto4.findMinLM = function findMinLM() {
      var m = null;
      this.compute_lm(this.vars[0], null, function (c) {
        if (!c.equality && (m === null || c.lm < m.lm)) m = c;
      });
      return m;
    };

    _proto4.findMinLMBetween = function findMinLMBetween(lv, rv) {
      this.compute_lm(lv, null, function () {});
      var m = null;
      this.findPath(lv, null, rv, function (c, next) {
        if (!c.equality && c.right === next && (m === null || c.lm < m.lm)) m = c;
      });
      return m;
    };

    _proto4.findPath = function findPath(v, prev, to, visit) {
      var _this4 = this;

      var endFound = false;
      v.visitNeighbours(prev, function (c, next) {
        if (!endFound && (next === to || _this4.findPath(next, v, to, visit))) {
          endFound = true;
          visit(c, next);
        }
      });
      return endFound;
    } // Search active constraint tree from u to see if there is a directed path to v.
    // Returns true if path is found.
    ;

    _proto4.isActiveDirectedPathBetween = function isActiveDirectedPathBetween(u, v) {
      if (u === v) return true;
      var i = u.cOut.length;

      while (i--) {
        var c = u.cOut[i];
        if (c.active && this.isActiveDirectedPathBetween(c.right, v)) return true;
      }

      return false;
    } // split the block into two by deactivating the specified constraint
    ;

    Block.split = function split(c) {
      /* DEBUG
                  console.log("split on " + c);
                  console.assert(c.active, "attempt to split on inactive constraint");
      DEBUG */
      c.active = false;
      return [Block.createSplitBlock(c.left), Block.createSplitBlock(c.right)];
    };

    Block.createSplitBlock = function createSplitBlock(startVar) {
      var b = new Block(startVar);
      b.populateSplitBlock(startVar, null);
      return b;
    } // find a split point somewhere between the specified variables
    ;

    _proto4.splitBetween = function splitBetween(vl, vr) {
      /* DEBUG
                  console.assert(vl.block === this);
                  console.assert(vr.block === this);
      DEBUG */
      var c = this.findMinLMBetween(vl, vr);

      if (c !== null) {
        var bs = Block.split(c);
        return {
          constraint: c,
          lb: bs[0],
          rb: bs[1]
        };
      } // couldn't find a split point - for example the active path is all equality constraints


      return null;
    };

    _proto4.mergeAcross = function mergeAcross(b, c, dist) {
      c.active = true;

      for (var i = 0, n = b.vars.length; i < n; ++i) {
        var v = b.vars[i];
        v.offset += dist;
        this.addVariable(v);
      }

      this.posn = this.ps.getPosn();
    };

    _proto4.cost = function cost() {
      var sum = 0,
          i = this.vars.length;

      while (i--) {
        var v = this.vars[i],
            d = v.position() - v.desiredPosition;
        sum += d * d * v.weight;
      }

      return sum;
    };

    return Block;
  }();
  var Blocks = /*#__PURE__*/function () {
    function Blocks(vs) {
      this.vs = vs;
      var n = vs.length;
      this.list = new Array(n);

      while (n--) {
        var b = new Block(vs[n]);
        this.list[n] = b;
        b.blockInd = n;
      }
    }

    var _proto5 = Blocks.prototype;

    _proto5.cost = function cost() {
      var sum = 0,
          i = this.list.length;

      while (i--) {
        sum += this.list[i].cost();
      }

      return sum;
    };

    _proto5.insert = function insert(b) {
      /* DEBUG
                  console.assert(!this.contains(b), "blocks error: tried to reinsert block " + b.blockInd)
      DEBUG */
      b.blockInd = this.list.length;
      this.list.push(b);
      /* DEBUG
                  console.log("insert block: " + b.blockInd);
                  this.contains(b);
      DEBUG */
    };

    _proto5.remove = function remove(b) {
      /* DEBUG
                  console.log("remove block: " + b.blockInd);
                  console.assert(this.contains(b));
      DEBUG */
      var last = this.list.length - 1;
      var swapBlock = this.list[last];
      this.list.length = last;

      if (b !== swapBlock) {
        this.list[b.blockInd] = swapBlock;
        swapBlock.blockInd = b.blockInd;
        /* DEBUG
                        console.assert(this.contains(swapBlock));
        DEBUG */
      }
    } // merge the blocks on either side of the specified constraint, by copying the smaller block into the larger
    // and deleting the smaller.
    ;

    _proto5.merge = function merge(c) {
      var l = c.left.block,
          r = c.right.block;
      /* DEBUG
                  console.assert(l!==r, "attempt to merge within the same block");
      DEBUG */

      var dist = c.right.offset - c.left.offset - c.gap;

      if (l.vars.length < r.vars.length) {
        r.mergeAcross(l, c, dist);
        this.remove(l);
      } else {
        l.mergeAcross(r, c, -dist);
        this.remove(r);
      }
      /* DEBUG
                  console.assert(Math.abs(c.slack()) < 1e-6, "Error: Constraint should be at equality after merge!");
                  console.log("merged on " + c);
      DEBUG */
    };

    _proto5.forEach = function forEach(f) {
      this.list.forEach(f);
    } // useful, for example, after variable desired positions change.
    ;

    _proto5.updateBlockPositions = function updateBlockPositions() {
      this.list.forEach(function (b) {
        return b.updateWeightedPosition();
      });
    } // split each block across its constraint with the minimum lagrangian
    ;

    _proto5.split = function split(inactive) {
      var _this5 = this;

      this.updateBlockPositions();
      this.list.forEach(function (b) {
        var v = b.findMinLM();

        if (v !== null && v.lm < Solver.LAGRANGIAN_TOLERANCE) {
          b = v.left.block;
          Block.split(v).forEach(function (nb) {
            return _this5.insert(nb);
          });

          _this5.remove(b);

          inactive.push(v);
          /* DEBUG
                              console.assert(this.contains(v.left.block));
                              console.assert(this.contains(v.right.block));
          DEBUG */
        }
      });
    };

    return Blocks;
  }();
  var Solver = /*#__PURE__*/function () {
    function Solver(vs, cs) {
      this.vs = vs;
      this.cs = cs;
      this.vs = vs;
      vs.forEach(function (v) {
        v.cIn = [], v.cOut = [];
        /* DEBUG
                        v.toString = () => "v" + vs.indexOf(v);
        DEBUG */
      });
      this.cs = cs;
      cs.forEach(function (c) {
        c.left.cOut.push(c);
        c.right.cIn.push(c);
        /* DEBUG
                        c.toString = () => c.left + "+" + c.gap + "<=" + c.right + " slack=" + c.slack() + " active=" + c.active;
        DEBUG */
      });
      this.inactive = cs.map(function (c) {
        c.active = false;
        return c;
      });
      this.bs = null;
    }

    var _proto6 = Solver.prototype;

    _proto6.cost = function cost() {
      return this.bs.cost();
    } // set starting positions without changing desired positions.
    // Note: it throws away any previous block structure.
    ;

    _proto6.setStartingPositions = function setStartingPositions(ps) {
      this.inactive = this.cs.map(function (c) {
        c.active = false;
        return c;
      });
      this.bs = new Blocks(this.vs);
      this.bs.forEach(function (b, i) {
        return b.posn = ps[i];
      });
    };

    _proto6.setDesiredPositions = function setDesiredPositions(ps) {
      this.vs.forEach(function (v, i) {
        return v.desiredPosition = ps[i];
      });
    }
    /* DEBUG
            private getId(v: Variable): number {
                return this.vs.indexOf(v);
            }
    
            // sanity check of the index integrity of the inactive list
            checkInactive(): void {
                var inactiveCount = 0;
                this.cs.forEach(c=> {
                    var i = this.inactive.indexOf(c);
                    console.assert(!c.active && i >= 0 || c.active && i < 0, "constraint should be in the inactive list if it is not active: " + c);
                    if (i >= 0) {
                        inactiveCount++;
                    } else {
                        console.assert(c.active, "inactive constraint not found in inactive list: " + c);
                    }
                });
                console.assert(inactiveCount === this.inactive.length, inactiveCount + " inactive constraints found, " + this.inactive.length + "in inactive list");
            }
            // after every call to satisfy the following should check should pass
            checkSatisfied(): void {
                this.cs.forEach(c=>console.assert(c.slack() >= vpsc.Solver.ZERO_UPPERBOUND, "Error: Unsatisfied constraint! "+c));
            }
    DEBUG */
    ;

    _proto6.mostViolated = function mostViolated() {
      var minSlack = Number.MAX_VALUE,
          v = null,
          l = this.inactive,
          n = l.length,
          deletePoint = n;

      for (var i = 0; i < n; ++i) {
        var c = l[i];
        if (c.unsatisfiable) continue;
        var slack = c.slack();

        if (c.equality || slack < minSlack) {
          minSlack = slack;
          v = c;
          deletePoint = i;
          if (c.equality) break;
        }
      }

      if (deletePoint !== n && (minSlack < Solver.ZERO_UPPERBOUND && !v.active || v.equality)) {
        l[deletePoint] = l[n - 1];
        l.length = n - 1;
      }

      return v;
    } // satisfy constraints by building block structure over violated constraints
    // and moving the blocks to their desired positions
    ;

    _proto6.satisfy = function satisfy() {
      if (this.bs == null) {
        this.bs = new Blocks(this.vs);
      }
      /* DEBUG
                  console.log("satisfy: " + this.bs);
      DEBUG */

      this.bs.split(this.inactive);
      var v = null;

      while ((v = this.mostViolated()) && (v.equality || v.slack() < Solver.ZERO_UPPERBOUND && !v.active)) {
        var lb = v.left.block,
            rb = v.right.block;
        /* DEBUG
                        console.log("most violated is: " + v);
                        this.bs.contains(lb);
                        this.bs.contains(rb);
        DEBUG */

        if (lb !== rb) {
          this.bs.merge(v);
        } else {
          if (lb.isActiveDirectedPathBetween(v.right, v.left)) {
            // cycle found!
            v.unsatisfiable = true;
            continue;
          } // constraint is within block, need to split first


          var split = lb.splitBetween(v.left, v.right);

          if (split !== null) {
            this.bs.insert(split.lb);
            this.bs.insert(split.rb);
            this.bs.remove(lb);
            this.inactive.push(split.constraint);
          } else {
            /* DEBUG
                                    console.log("unsatisfiable constraint found");
            DEBUG */
            v.unsatisfiable = true;
            continue;
          }

          if (v.slack() >= 0) {
            /* DEBUG
                                    console.log("violated constraint indirectly satisfied: " + v);
            DEBUG */
            // v was satisfied by the above split!
            this.inactive.push(v);
          } else {
            /* DEBUG
                                    console.log("merge after split:");
            DEBUG */
            this.bs.merge(v);
          }
        }
        /* DEBUG
                        this.bs.contains(v.left.block);
                        this.bs.contains(v.right.block);
                        this.checkInactive();
        DEBUG */
      }
      /* DEBUG
                  this.checkSatisfied();
      DEBUG */
    } // repeatedly build and split block structure until we converge to an optimal solution
    ;

    _proto6.solve = function solve() {
      this.satisfy();
      var lastcost = Number.MAX_VALUE,
          cost = this.bs.cost();

      while (Math.abs(lastcost - cost) > 0.0001) {
        this.satisfy();
        lastcost = cost;
        cost = this.bs.cost();
      }

      return cost;
    };

    return Solver;
  }();
  Solver.LAGRANGIAN_TOLERANCE = -1e-4;
  Solver.ZERO_UPPERBOUND = -1e-10;
  /**
    * Remove overlap between spans while keeping their centers as close as possible to the specified desiredCenters.
    * Lower and upper bounds will be respected if the spans physically fit between them
    * (otherwise they'll be moved and their new position returned).
    * If no upper/lower bound is specified then the bounds of the moved spans will be returned.
    * returns a new center for each span.
    */

  function removeOverlapInOneDimension(spans, lowerBound, upperBound) {
    var vs = spans.map(function (s) {
      return new Variable(s.desiredCenter);
    });
    var cs = [];
    var n = spans.length;

    for (var i = 0; i < n - 1; i++) {
      var left = spans[i],
          right = spans[i + 1];
      cs.push(new Constraint(vs[i], vs[i + 1], (left.size + right.size) / 2));
    }

    var leftMost = vs[0],
        rightMost = vs[n - 1],
        leftMostSize = spans[0].size / 2,
        rightMostSize = spans[n - 1].size / 2;
    var vLower = null,
        vUpper = null;

    if (lowerBound) {
      vLower = new Variable(lowerBound, leftMost.weight * 1000);
      vs.push(vLower);
      cs.push(new Constraint(vLower, leftMost, leftMostSize));
    }

    if (upperBound) {
      vUpper = new Variable(upperBound, rightMost.weight * 1000);
      vs.push(vUpper);
      cs.push(new Constraint(rightMost, vUpper, rightMostSize));
    }

    var solver = new Solver(vs, cs);
    solver.solve();
    return {
      newCenters: vs.slice(0, spans.length).map(function (v) {
        return v.position();
      }),
      lowerBound: vLower ? vLower.position() : leftMost.position() - leftMostSize,
      upperBound: vUpper ? vUpper.position() : rightMost.position() + rightMostSize
    };
  }

  //Based on js_es:
  //
  //https://github.com/vadimg/js_bintrees
  //
  //Copyright (C) 2011 by Vadim Graboys
  //
  //Permission is hereby granted, free of charge, to any person obtaining a copy
  //of this software and associated documentation files (the "Software"), to deal
  //in the Software without restriction, including without limitation the rights
  //to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  //copies of the Software, and to permit persons to whom the Software is
  //furnished to do so, subject to the following conditions:
  //
  //The above copyright notice and this permission notice shall be included in
  //all copies or substantial portions of the Software.
  //
  //THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  //IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  //FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  //AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  //LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  //OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  //THE SOFTWARE.
  var TreeBase = /*#__PURE__*/function () {
    function TreeBase() {
      // returns iterator to node if found, null otherwise
      this.findIter = function (data) {
        var res = this._root;
        var iter = this.iterator();

        while (res !== null) {
          var c = this._comparator(data, res.data);

          if (c === 0) {
            iter._cursor = res;
            return iter;
          } else {
            iter._ancestors.push(res);

            res = res.get_child(c > 0);
          }
        }

        return null;
      };
    } // removes all nodes from the tree


    var _proto = TreeBase.prototype;

    _proto.clear = function clear() {
      this._root = null;
      this.size = 0;
    };

    // returns node data if found, null otherwise
    _proto.find = function find(data) {
      var res = this._root;

      while (res !== null) {
        var c = this._comparator(data, res.data);

        if (c === 0) {
          return res.data;
        } else {
          res = res.get_child(c > 0);
        }
      }

      return null;
    };

    // Returns an interator to the tree node immediately before (or at) the element
    _proto.lowerBound = function lowerBound(data) {
      return this._bound(data, this._comparator);
    };

    // Returns an interator to the tree node immediately after (or at) the element
    _proto.upperBound = function upperBound(data) {
      var cmp = this._comparator;

      function reverse_cmp(a, b) {
        return cmp(b, a);
      }

      return this._bound(data, reverse_cmp);
    };

    // returns null if tree is empty
    _proto.min = function min() {
      var res = this._root;

      if (res === null) {
        return null;
      }

      while (res.left !== null) {
        res = res.left;
      }

      return res.data;
    };

    // returns null if tree is empty
    _proto.max = function max() {
      var res = this._root;

      if (res === null) {
        return null;
      }

      while (res.right !== null) {
        res = res.right;
      }

      return res.data;
    };

    // returns a null iterator
    // call next() or prev() to point to an element
    _proto.iterator = function iterator() {
      return new Iterator(this);
    };

    // calls cb on each node's data, in order
    _proto.each = function each(cb) {
      var it = this.iterator(),
          data;

      while ((data = it.next()) !== null) {
        cb(data);
      }
    };

    // calls cb on each node's data, in reverse order
    _proto.reach = function reach(cb) {
      var it = this.iterator(),
          data;

      while ((data = it.prev()) !== null) {
        cb(data);
      }
    };

    // used for lowerBound and upperBound
    _proto._bound = function _bound(data, cmp) {
      var cur = this._root;
      var iter = this.iterator();

      while (cur !== null) {
        var c = this._comparator(data, cur.data);

        if (c === 0) {
          iter._cursor = cur;
          return iter;
        }

        iter._ancestors.push(cur);

        cur = cur.get_child(c > 0);
      }

      for (var i = iter._ancestors.length - 1; i >= 0; --i) {
        cur = iter._ancestors[i];

        if (cmp(data, cur.data) > 0) {
          iter._cursor = cur;
          iter._ancestors.length = i;
          return iter;
        }
      }

      iter._ancestors.length = 0;
      return iter;
    };

    return TreeBase;
  }();
  var Iterator = /*#__PURE__*/function () {
    function Iterator(tree) {
      this._tree = tree;
      this._ancestors = [];
      this._cursor = null;
    }

    var _proto2 = Iterator.prototype;

    _proto2.data = function data() {
      return this._cursor !== null ? this._cursor.data : null;
    };

    // if null-iterator, returns first node
    // otherwise, returns next node
    _proto2.next = function next() {
      if (this._cursor === null) {
        var root = this._tree._root;

        if (root !== null) {
          this._minNode(root);
        }
      } else {
        if (this._cursor.right === null) {
          // no greater node in subtree, go up to parent
          // if coming from a right child, continue up the stack
          var save;

          do {
            save = this._cursor;

            if (this._ancestors.length) {
              this._cursor = this._ancestors.pop();
            } else {
              this._cursor = null;
              break;
            }
          } while (this._cursor.right === save);
        } else {
          // get the next node from the subtree
          this._ancestors.push(this._cursor);

          this._minNode(this._cursor.right);
        }
      }

      return this._cursor !== null ? this._cursor.data : null;
    };

    // if null-iterator, returns last node
    // otherwise, returns previous node
    _proto2.prev = function prev() {
      if (this._cursor === null) {
        var root = this._tree._root;

        if (root !== null) {
          this._maxNode(root);
        }
      } else {
        if (this._cursor.left === null) {
          var save;

          do {
            save = this._cursor;

            if (this._ancestors.length) {
              this._cursor = this._ancestors.pop();
            } else {
              this._cursor = null;
              break;
            }
          } while (this._cursor.left === save);
        } else {
          this._ancestors.push(this._cursor);

          this._maxNode(this._cursor.left);
        }
      }

      return this._cursor !== null ? this._cursor.data : null;
    };

    _proto2._minNode = function _minNode(start) {
      while (start.left !== null) {
        this._ancestors.push(start);

        start = start.left;
      }

      this._cursor = start;
    };

    _proto2._maxNode = function _maxNode(start) {
      while (start.right !== null) {
        this._ancestors.push(start);

        start = start.right;
      }

      this._cursor = start;
    };

    return Iterator;
  }();

  var Node = /*#__PURE__*/function () {
    function Node(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.red = true;
    }

    var _proto3 = Node.prototype;

    _proto3.get_child = function get_child(dir) {
      return dir ? this.right : this.left;
    };

    _proto3.set_child = function set_child(dir, val) {
      if (dir) {
        this.right = val;
      } else {
        this.left = val;
      }
    };

    return Node;
  }();

  var RBTree = /*#__PURE__*/function (_TreeBase) {
    _inheritsLoose(RBTree, _TreeBase);

    function RBTree(comparator) {
      var _this;

      _this = _TreeBase.call(this) || this;
      _this._root = null;
      _this._comparator = comparator;
      _this.size = 0;
      return _this;
    } // returns true if inserted, false if duplicate


    var _proto4 = RBTree.prototype;

    _proto4.insert = function insert(data) {
      var ret = false;

      if (this._root === null) {
        // empty tree
        this._root = new Node(data);
        ret = true;
        this.size++;
      } else {
        var head = new Node(undefined); // fake tree root

        var dir = false;
        var last = false; // setup

        var gp = null; // grandparent

        var ggp = head; // grand-grand-parent

        var p = null; // parent

        var node = this._root;
        ggp.right = this._root; // search down

        while (true) {
          if (node === null) {
            // insert new node at the bottom
            node = new Node(data);
            p.set_child(dir, node);
            ret = true;
            this.size++;
          } else if (RBTree.is_red(node.left) && RBTree.is_red(node.right)) {
            // color flip
            node.red = true;
            node.left.red = false;
            node.right.red = false;
          } // fix red violation


          if (RBTree.is_red(node) && RBTree.is_red(p)) {
            var dir2 = ggp.right === gp;

            if (node === p.get_child(last)) {
              ggp.set_child(dir2, RBTree.single_rotate(gp, !last));
            } else {
              ggp.set_child(dir2, RBTree.double_rotate(gp, !last));
            }
          }

          var cmp = this._comparator(node.data, data); // stop if found


          if (cmp === 0) {
            break;
          }

          last = dir;
          dir = cmp < 0; // update helpers

          if (gp !== null) {
            ggp = gp;
          }

          gp = p;
          p = node;
          node = node.get_child(dir);
        } // update root


        this._root = head.right;
      } // make root black


      this._root.red = false;
      return ret;
    };

    // returns true if removed, false if not found
    _proto4.remove = function remove(data) {
      if (this._root === null) {
        return false;
      }

      var head = new Node(undefined); // fake tree root

      var node = head;
      node.right = this._root;
      var p = null; // parent

      var gp = null; // grand parent

      var found = null; // found item

      var dir = true;

      while (node.get_child(dir) !== null) {
        var last = dir; // update helpers

        gp = p;
        p = node;
        node = node.get_child(dir);

        var cmp = this._comparator(data, node.data);

        dir = cmp > 0; // save found node

        if (cmp === 0) {
          found = node;
        } // push the red node down


        if (!RBTree.is_red(node) && !RBTree.is_red(node.get_child(dir))) {
          if (RBTree.is_red(node.get_child(!dir))) {
            var sr = RBTree.single_rotate(node, dir);
            p.set_child(last, sr);
            p = sr;
          } else if (!RBTree.is_red(node.get_child(!dir))) {
            var sibling = p.get_child(!last);

            if (sibling !== null) {
              if (!RBTree.is_red(sibling.get_child(!last)) && !RBTree.is_red(sibling.get_child(last))) {
                // color flip
                p.red = false;
                sibling.red = true;
                node.red = true;
              } else {
                var dir2 = gp.right === p;

                if (RBTree.is_red(sibling.get_child(last))) {
                  gp.set_child(dir2, RBTree.double_rotate(p, last));
                } else if (RBTree.is_red(sibling.get_child(!last))) {
                  gp.set_child(dir2, RBTree.single_rotate(p, last));
                } // ensure correct coloring


                var gpc = gp.get_child(dir2);
                gpc.red = true;
                node.red = true;
                gpc.left.red = false;
                gpc.right.red = false;
              }
            }
          }
        }
      } // replace and remove if found


      if (found !== null) {
        found.data = node.data;
        p.set_child(p.right === node, node.get_child(node.left === null));
        this.size--;
      } // update root and make it black


      this._root = head.right;

      if (this._root !== null) {
        this._root.red = false;
      }

      return found !== null;
    };

    RBTree.is_red = function is_red(node) {
      return node !== null && node.red;
    };

    RBTree.single_rotate = function single_rotate(root, dir) {
      var save = root.get_child(!dir);
      root.set_child(!dir, save.get_child(dir));
      save.set_child(dir, root);
      root.red = true;
      save.red = false;
      return save;
    };

    RBTree.double_rotate = function double_rotate(root, dir) {
      root.set_child(!dir, RBTree.single_rotate(root.get_child(!dir), !dir));
      return RBTree.single_rotate(root, dir);
    };

    return RBTree;
  }(TreeBase);

  function computeGroupBounds(g) {
    g.bounds = typeof g.leaves !== "undefined" ? g.leaves.reduce(function (r, c) {
      return c.bounds.union(r);
    }, Rectangle.empty()) : Rectangle.empty();
    if (typeof g.groups !== "undefined") g.bounds = g.groups.reduce(function (r, c) {
      return computeGroupBounds(c).union(r);
    }, g.bounds);
    g.bounds = g.bounds.inflate(g.padding);
    return g.bounds;
  }
  var Rectangle = /*#__PURE__*/function () {
    function Rectangle(x, X, y, Y) {
      this.x = x;
      this.X = X;
      this.y = y;
      this.Y = Y;
    }

    Rectangle.empty = function empty() {
      return new Rectangle(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
    };

    var _proto = Rectangle.prototype;

    _proto.cx = function cx() {
      return (this.x + this.X) / 2;
    };

    _proto.cy = function cy() {
      return (this.y + this.Y) / 2;
    };

    _proto.overlapX = function overlapX(r) {
      var ux = this.cx(),
          vx = r.cx();
      if (ux <= vx && r.x < this.X) return this.X - r.x;
      if (vx <= ux && this.x < r.X) return r.X - this.x;
      return 0;
    };

    _proto.overlapY = function overlapY(r) {
      var uy = this.cy(),
          vy = r.cy();
      if (uy <= vy && r.y < this.Y) return this.Y - r.y;
      if (vy <= uy && this.y < r.Y) return r.Y - this.y;
      return 0;
    };

    _proto.setXCentre = function setXCentre(cx) {
      var dx = cx - this.cx();
      this.x += dx;
      this.X += dx;
    };

    _proto.setYCentre = function setYCentre(cy) {
      var dy = cy - this.cy();
      this.y += dy;
      this.Y += dy;
    };

    _proto.width = function width() {
      return this.X - this.x;
    };

    _proto.height = function height() {
      return this.Y - this.y;
    };

    _proto.union = function union(r) {
      return new Rectangle(Math.min(this.x, r.x), Math.max(this.X, r.X), Math.min(this.y, r.y), Math.max(this.Y, r.Y));
    }
    /**
     * return any intersection points between the given line and the sides of this rectangle
     * @method lineIntersection
     * @param x1 number first x coord of line
     * @param y1 number first y coord of line
     * @param x2 number second x coord of line
     * @param y2 number second y coord of line
     * @return any intersection points found
     */
    ;

    _proto.lineIntersections = function lineIntersections(x1, y1, x2, y2) {
      var sides = [[this.x, this.y, this.X, this.y], [this.X, this.y, this.X, this.Y], [this.X, this.Y, this.x, this.Y], [this.x, this.Y, this.x, this.y]];
      var intersections = [];

      for (var i = 0; i < 4; ++i) {
        var r = Rectangle.lineIntersection(x1, y1, x2, y2, sides[i][0], sides[i][1], sides[i][2], sides[i][3]);
        if (r !== null) intersections.push({
          x: r.x,
          y: r.y
        });
      }

      return intersections;
    }
    /**
     * return any intersection points between a line extending from the centre of this rectangle to the given point,
     *  and the sides of this rectangle
     * @method lineIntersection
     * @param x2 number second x coord of line
     * @param y2 number second y coord of line
     * @return any intersection points found
     */
    ;

    _proto.rayIntersection = function rayIntersection(x2, y2) {
      var ints = this.lineIntersections(this.cx(), this.cy(), x2, y2);
      return ints.length > 0 ? ints[0] : null;
    };

    _proto.vertices = function vertices() {
      return [{
        x: this.x,
        y: this.y
      }, {
        x: this.X,
        y: this.y
      }, {
        x: this.X,
        y: this.Y
      }, {
        x: this.x,
        y: this.Y
      }];
    };

    Rectangle.lineIntersection = function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
      var dx12 = x2 - x1,
          dx34 = x4 - x3,
          dy12 = y2 - y1,
          dy34 = y4 - y3,
          denominator = dy34 * dx12 - dx34 * dy12;
      if (denominator == 0) return null;
      var dx31 = x1 - x3,
          dy31 = y1 - y3,
          numa = dx34 * dy31 - dy34 * dx31,
          a = numa / denominator,
          numb = dx12 * dy31 - dy12 * dx31,
          b = numb / denominator;

      if (a >= 0 && a <= 1 && b >= 0 && b <= 1) {
        return {
          x: x1 + a * dx12,
          y: y1 + a * dy12
        };
      }

      return null;
    };

    _proto.inflate = function inflate(pad) {
      return new Rectangle(this.x - pad, this.X + pad, this.y - pad, this.Y + pad);
    };

    return Rectangle;
  }();
  /**
   * Returns the endpoints of a line that connects the centre of two rectangles.
   * @param {Rectangle} [source] The source Rectangle.
   * @param {Rectangle} [target] The target Rectangle.
   * @param {number} [ah] The size of the arrow head, a distance to shorten the
   *                      line by.
   * @return An object with three point properties, the intersection with the
   *         source rectangle (sourceIntersection), the intersection with then
   *         target rectangle (targetIntersection), and the point an arrow
   *         head of the specified size would need to start (arrowStart).
   */

  function makeEdgeBetween(source, target, ah) {
    var si = source.rayIntersection(target.cx(), target.cy()) || {
      x: source.cx(),
      y: source.cy()
    },
        ti = target.rayIntersection(source.cx(), source.cy()) || {
      x: target.cx(),
      y: target.cy()
    },
        dx = ti.x - si.x,
        dy = ti.y - si.y,
        l = Math.sqrt(dx * dx + dy * dy),
        al = l - ah;
    return {
      sourceIntersection: si,
      targetIntersection: ti,
      arrowStart: {
        x: si.x + al * dx / l,
        y: si.y + al * dy / l
      }
    };
  }
  /**
   * Returns the intersection of a line from the given point to the centre
   * of the target rectangle where it intersects the rectanngle.
   * @param [source] The source point.
   * @param {Rectangle} [target] The target Rectangle.
   * @param {number} [ah] The size of the arrow head, a distance to shorten the
   *                      line by.
   * @return The point an arrow head of the specified size would need to start.
   */

  function makeEdgeTo(s, target, ah) {
    var ti = target.rayIntersection(s.x, s.y);
    if (!ti) ti = {
      x: target.cx(),
      y: target.cy()
    };
    var dx = ti.x - s.x,
        dy = ti.y - s.y,
        l = Math.sqrt(dx * dx + dy * dy);
    return {
      x: ti.x - ah * dx / l,
      y: ti.y - ah * dy / l
    };
  }

  var Node$1 = function Node(v, r, pos) {
    this.v = v;
    this.r = r;
    this.pos = pos;
    this.prev = makeRBTree();
    this.next = makeRBTree();
  };

  var Event = function Event(isOpen, v, pos) {
    this.isOpen = isOpen;
    this.v = v;
    this.pos = pos;
  };

  function compareEvents(a, b) {
    if (a.pos > b.pos) {
      return 1;
    }

    if (a.pos < b.pos) {
      return -1;
    }

    if (a.isOpen) {
      // open must come before close
      return -1;
    }

    if (b.isOpen) {
      // open must come before close
      return 1;
    }

    return 0;
  }

  function makeRBTree() {
    return new RBTree(function (a, b) {
      return a.pos - b.pos;
    });
  }

  var xRect = {
    getCentre: function getCentre(r) {
      return r.cx();
    },
    getOpen: function getOpen(r) {
      return r.y;
    },
    getClose: function getClose(r) {
      return r.Y;
    },
    getSize: function getSize(r) {
      return r.width();
    },
    makeRect: function makeRect(open, close, center, size) {
      return new Rectangle(center - size / 2, center + size / 2, open, close);
    },
    findNeighbours: findXNeighbours
  };
  var yRect = {
    getCentre: function getCentre(r) {
      return r.cy();
    },
    getOpen: function getOpen(r) {
      return r.x;
    },
    getClose: function getClose(r) {
      return r.X;
    },
    getSize: function getSize(r) {
      return r.height();
    },
    makeRect: function makeRect(open, close, center, size) {
      return new Rectangle(open, close, center - size / 2, center + size / 2);
    },
    findNeighbours: findYNeighbours
  };

  function generateGroupConstraints(root, f, minSep, isContained) {
    if (isContained === void 0) {
      isContained = false;
    }

    var padding = root.padding,
        gn = typeof root.groups !== 'undefined' ? root.groups.length : 0,
        ln = typeof root.leaves !== 'undefined' ? root.leaves.length : 0,
        childConstraints = !gn ? [] : root.groups.reduce(function (ccs, g) {
      return ccs.concat(generateGroupConstraints(g, f, minSep, true));
    }, []),
        n = (isContained ? 2 : 0) + ln + gn,
        vs = new Array(n),
        rs = new Array(n),
        i = 0,
        add = function add(r, v) {
      rs[i] = r;
      vs[i++] = v;
    };

    if (isContained) {
      // if this group is contained by another, then we add two dummy vars and rectangles for the borders
      var b = root.bounds,
          c = f.getCentre(b),
          s = f.getSize(b) / 2,
          open = f.getOpen(b),
          close = f.getClose(b),
          min = c - s + padding / 2,
          max = c + s - padding / 2;
      root.minVar.desiredPosition = min;
      add(f.makeRect(open, close, min, padding), root.minVar);
      root.maxVar.desiredPosition = max;
      add(f.makeRect(open, close, max, padding), root.maxVar);
    }

    if (ln) root.leaves.forEach(function (l) {
      return add(l.bounds, l.variable);
    });
    if (gn) root.groups.forEach(function (g) {
      var b = g.bounds;
      add(f.makeRect(f.getOpen(b), f.getClose(b), f.getCentre(b), f.getSize(b)), g.minVar);
    });
    var cs = generateConstraints(rs, vs, f, minSep);

    if (gn) {
      vs.forEach(function (v) {
        v.cOut = [], v.cIn = [];
      });
      cs.forEach(function (c) {
        c.left.cOut.push(c), c.right.cIn.push(c);
      });
      root.groups.forEach(function (g) {
        var gapAdjustment = (g.padding - f.getSize(g.bounds)) / 2;
        g.minVar.cIn.forEach(function (c) {
          return c.gap += gapAdjustment;
        });
        g.minVar.cOut.forEach(function (c) {
          c.left = g.maxVar;
          c.gap += gapAdjustment;
        });
      });
    }

    return childConstraints.concat(cs);
  }

  function generateConstraints(rs, vars, rect, minSep) {
    var i,
        n = rs.length;
    var N = 2 * n;
    console.assert(vars.length >= n);
    var events = new Array(N);

    for (i = 0; i < n; ++i) {
      var r = rs[i];
      var v = new Node$1(vars[i], r, rect.getCentre(r));
      events[i] = new Event(true, v, rect.getOpen(r));
      events[i + n] = new Event(false, v, rect.getClose(r));
    }

    events.sort(compareEvents);
    var cs = new Array();
    var scanline = makeRBTree();

    for (i = 0; i < N; ++i) {
      var e = events[i];
      var v = e.v;

      if (e.isOpen) {
        scanline.insert(v);
        rect.findNeighbours(v, scanline);
      } else {
        // close event
        scanline.remove(v);

        var makeConstraint = function makeConstraint(l, r) {
          var sep = (rect.getSize(l.r) + rect.getSize(r.r)) / 2 + minSep;
          cs.push(new Constraint(l.v, r.v, sep));
        };

        var visitNeighbours = function visitNeighbours(forward, reverse, mkcon) {
          var u,
              it = v[forward].iterator();

          while ((u = it[forward]()) !== null) {
            mkcon(u, v);
            u[reverse].remove(v);
          }
        };

        visitNeighbours("prev", "next", function (u, v) {
          return makeConstraint(u, v);
        });
        visitNeighbours("next", "prev", function (u, v) {
          return makeConstraint(v, u);
        });
      }
    }

    console.assert(scanline.size === 0);
    return cs;
  }

  function findXNeighbours(v, scanline) {
    var f = function f(forward, reverse) {
      var it = scanline.findIter(v);
      var u;

      while ((u = it[forward]()) !== null) {
        var uovervX = u.r.overlapX(v.r);

        if (uovervX <= 0 || uovervX <= u.r.overlapY(v.r)) {
          v[forward].insert(u);
          u[reverse].insert(v);
        }

        if (uovervX <= 0) {
          break;
        }
      }
    };

    f("next", "prev");
    f("prev", "next");
  }

  function findYNeighbours(v, scanline) {
    var f = function f(forward, reverse) {
      var u = scanline.findIter(v)[forward]();

      if (u !== null && u.r.overlapX(v.r) > 0) {
        v[forward].insert(u);
        u[reverse].insert(v);
      }
    };

    f("next", "prev");
    f("prev", "next");
  }

  function generateXConstraints(rs, vars) {
    return generateConstraints(rs, vars, xRect, 1e-6);
  }
  function generateYConstraints(rs, vars) {
    return generateConstraints(rs, vars, yRect, 1e-6);
  }
  function generateXGroupConstraints(root) {
    return generateGroupConstraints(root, xRect, 1e-6);
  }
  function generateYGroupConstraints(root) {
    return generateGroupConstraints(root, yRect, 1e-6);
  }
  function removeOverlaps(rs) {
    var vs = rs.map(function (r) {
      return new Variable(r.cx());
    });
    var cs = generateXConstraints(rs, vs);
    var solver = new Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) {
      return rs[i].setXCentre(v.position());
    });
    vs = rs.map(function (r) {
      return new Variable(r.cy());
    });
    cs = generateYConstraints(rs, vs);
    solver = new Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) {
      return rs[i].setYCentre(v.position());
    });
  }
  var IndexedVariable = /*#__PURE__*/function (_Variable) {
    _inheritsLoose(IndexedVariable, _Variable);

    function IndexedVariable(index, w) {
      var _this;

      _this = _Variable.call(this, 0, w) || this;
      _this.index = index;
      return _this;
    }

    return IndexedVariable;
  }(Variable);
  var Projection = /*#__PURE__*/function () {
    function Projection(nodes, groups, rootGroup, constraints, avoidOverlaps) {
      var _this2 = this;

      if (rootGroup === void 0) {
        rootGroup = null;
      }

      if (constraints === void 0) {
        constraints = null;
      }

      if (avoidOverlaps === void 0) {
        avoidOverlaps = false;
      }

      this.nodes = nodes;
      this.groups = groups;
      this.rootGroup = rootGroup;
      this.avoidOverlaps = avoidOverlaps;
      this.variables = nodes.map(function (v, i) {
        return v.variable = new IndexedVariable(i, 1);
      });
      if (constraints) this.createConstraints(constraints);

      if (avoidOverlaps && rootGroup && typeof rootGroup.groups !== 'undefined') {
        nodes.forEach(function (v) {
          if (!v.width || !v.height) {
            //If undefined, default to nothing
            v.bounds = new Rectangle(v.x, v.x, v.y, v.y);
            return;
          }

          var w2 = v.width / 2,
              h2 = v.height / 2;
          v.bounds = new Rectangle(v.x - w2, v.x + w2, v.y - h2, v.y + h2);
        });
        computeGroupBounds(rootGroup);
        var i = nodes.length;
        groups.forEach(function (g) {
          _this2.variables[i] = g.minVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
          _this2.variables[i] = g.maxVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
        });
      }
    }

    var _proto2 = Projection.prototype;

    _proto2.createSeparation = function createSeparation(c) {
      return new Constraint(this.nodes[c.left].variable, this.nodes[c.right].variable, c.gap, typeof c.equality !== "undefined" ? c.equality : false);
    } // simple satisfaction of alignment constraints to ensure initial feasibility
    ;

    _proto2.makeFeasible = function makeFeasible(c) {
      var _this3 = this;

      if (!this.avoidOverlaps) return; // sort nodes in constraint by position (along "guideline")

      var axis = 'x',
          dim = 'width';
      if (c.axis === 'x') axis = 'y', dim = 'height';
      var vs = c.offsets.map(function (o) {
        return _this3.nodes[o.node];
      }).sort(function (a, b) {
        return a[axis] - b[axis];
      });
      var p = null;
      vs.forEach(function (v) {
        // if two nodes overlap then shove the second one along
        if (p) {
          var nextPos = p[axis] + p[dim];

          if (nextPos > v[axis]) {
            v[axis] = nextPos;
          }
        }

        p = v;
      });
    };

    _proto2.createAlignment = function createAlignment(c) {
      var _this4 = this;

      var u = this.nodes[c.offsets[0].node].variable;
      this.makeFeasible(c);
      var cs = c.axis === 'x' ? this.xConstraints : this.yConstraints;
      c.offsets.slice(1).forEach(function (o) {
        var v = _this4.nodes[o.node].variable;
        cs.push(new Constraint(u, v, o.offset, true));
      });
    };

    _proto2.createConstraints = function createConstraints(constraints) {
      var _this5 = this;

      var isSep = function isSep(c) {
        return typeof c.type === 'undefined' || c.type === 'separation';
      };

      this.xConstraints = constraints.filter(function (c) {
        return c.axis === "x" && isSep(c);
      }).map(function (c) {
        return _this5.createSeparation(c);
      });
      this.yConstraints = constraints.filter(function (c) {
        return c.axis === "y" && isSep(c);
      }).map(function (c) {
        return _this5.createSeparation(c);
      });
      constraints.filter(function (c) {
        return c.type === 'alignment';
      }).forEach(function (c) {
        return _this5.createAlignment(c);
      });
    };

    _proto2.setupVariablesAndBounds = function setupVariablesAndBounds(x0, y0, desired, getDesired) {
      this.nodes.forEach(function (v, i) {
        if (v.fixed) {
          v.variable.weight = v.fixedWeight ? v.fixedWeight : 1000;
          desired[i] = getDesired(v);
        } else {
          v.variable.weight = 1;
        }

        var w = (v.width || 0) / 2,
            h = (v.height || 0) / 2;
        var ix = x0[i],
            iy = y0[i];
        v.bounds = new Rectangle(ix - w, ix + w, iy - h, iy + h);
      });
    };

    _proto2.xProject = function xProject(x0, y0, x) {
      if (!this.rootGroup && !(this.avoidOverlaps || this.xConstraints)) return;
      this.project(x0, y0, x0, x, function (v) {
        return v.px;
      }, this.xConstraints, generateXGroupConstraints, function (v) {
        return v.bounds.setXCentre(x[v.variable.index] = v.variable.position());
      }, function (g) {
        var xmin = x[g.minVar.index] = g.minVar.position();
        var xmax = x[g.maxVar.index] = g.maxVar.position();
        var p2 = g.padding / 2;
        g.bounds.x = xmin - p2;
        g.bounds.X = xmax + p2;
      });
    };

    _proto2.yProject = function yProject(x0, y0, y) {
      if (!this.rootGroup && !this.yConstraints) return;
      this.project(x0, y0, y0, y, function (v) {
        return v.py;
      }, this.yConstraints, generateYGroupConstraints, function (v) {
        return v.bounds.setYCentre(y[v.variable.index] = v.variable.position());
      }, function (g) {
        var ymin = y[g.minVar.index] = g.minVar.position();
        var ymax = y[g.maxVar.index] = g.maxVar.position();
        var p2 = g.padding / 2;
        g.bounds.y = ymin - p2;
        g.bounds.Y = ymax + p2;
      });
    };

    _proto2.projectFunctions = function projectFunctions() {
      var _this6 = this;

      return [function (x0, y0, x) {
        return _this6.xProject(x0, y0, x);
      }, function (x0, y0, y) {
        return _this6.yProject(x0, y0, y);
      }];
    };

    _proto2.project = function project(x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds) {
      this.setupVariablesAndBounds(x0, y0, desired, getDesired);

      if (this.rootGroup && this.avoidOverlaps) {
        computeGroupBounds(this.rootGroup);
        cs = cs.concat(generateConstraints(this.rootGroup));
      }

      this.solve(this.variables, cs, start, desired);
      this.nodes.forEach(updateNodeBounds);

      if (this.rootGroup && this.avoidOverlaps) {
        this.groups.forEach(updateGroupBounds);
        computeGroupBounds(this.rootGroup);
      }
    };

    _proto2.solve = function solve(vs, cs, starting, desired) {
      var solver = new Solver(vs, cs);
      solver.setStartingPositions(starting);
      solver.setDesiredPositions(desired);
      solver.solve();
    };

    return Projection;
  }();

  var PairingHeap = /*#__PURE__*/function () {
    // from: https://gist.github.com/nervoussystem
    //{elem:object, subheaps:[array of heaps]}
    function PairingHeap(elem) {
      this.elem = elem;
      this.subheaps = [];
    }

    var _proto = PairingHeap.prototype;

    _proto.toString = function toString(selector) {
      var str = "",
          needComma = false;

      for (var i = 0; i < this.subheaps.length; ++i) {
        var subheap = this.subheaps[i];

        if (!subheap.elem) {
          needComma = false;
          continue;
        }

        if (needComma) {
          str = str + ",";
        }

        str = str + subheap.toString(selector);
        needComma = true;
      }

      if (str !== "") {
        str = "(" + str + ")";
      }

      return (this.elem ? selector(this.elem) : "") + str;
    };

    _proto.forEach = function forEach(f) {
      if (!this.empty()) {
        f(this.elem, this);
        this.subheaps.forEach(function (s) {
          return s.forEach(f);
        });
      }
    };

    _proto.count = function count() {
      return this.empty() ? 0 : 1 + this.subheaps.reduce(function (n, h) {
        return n + h.count();
      }, 0);
    };

    _proto.min = function min() {
      return this.elem;
    };

    _proto.empty = function empty() {
      return this.elem == null;
    };

    _proto.contains = function contains(h) {
      if (this === h) return true;

      for (var i = 0; i < this.subheaps.length; i++) {
        if (this.subheaps[i].contains(h)) return true;
      }

      return false;
    };

    _proto.isHeap = function isHeap(lessThan) {
      var _this = this;

      return this.subheaps.every(function (h) {
        return lessThan(_this.elem, h.elem) && h.isHeap(lessThan);
      });
    };

    _proto.insert = function insert(obj, lessThan) {
      return this.merge(new PairingHeap(obj), lessThan);
    };

    _proto.merge = function merge(heap2, lessThan) {
      if (this.empty()) return heap2;else if (heap2.empty()) return this;else if (lessThan(this.elem, heap2.elem)) {
        this.subheaps.push(heap2);
        return this;
      } else {
        heap2.subheaps.push(this);
        return heap2;
      }
    };

    _proto.removeMin = function removeMin(lessThan) {
      if (this.empty()) return null;else return this.mergePairs(lessThan);
    };

    _proto.mergePairs = function mergePairs(lessThan) {
      if (this.subheaps.length == 0) return new PairingHeap(null);else if (this.subheaps.length == 1) {
        return this.subheaps[0];
      } else {
        var firstPair = this.subheaps.pop().merge(this.subheaps.pop(), lessThan);
        var remaining = this.mergePairs(lessThan);
        return firstPair.merge(remaining, lessThan);
      }
    };

    _proto.decreaseKey = function decreaseKey(subheap, newValue, setHeapNode, lessThan) {
      var newHeap = subheap.removeMin(lessThan); //reassign subheap values to preserve tree

      subheap.elem = newHeap.elem;
      subheap.subheaps = newHeap.subheaps;

      if (setHeapNode !== null && newHeap.elem !== null) {
        setHeapNode(subheap.elem, subheap);
      }

      var pairingNode = new PairingHeap(newValue);

      if (setHeapNode !== null) {
        setHeapNode(newValue, pairingNode);
      }

      return this.merge(pairingNode, lessThan);
    };

    return PairingHeap;
  }();
  /**
   * @class PriorityQueue a min priority queue backed by a pairing heap
   */

  var PriorityQueue = /*#__PURE__*/function () {
    function PriorityQueue(lessThan) {
      this.lessThan = lessThan;
    }
    /**
     * @method top
     * @return the top element (the min element as defined by lessThan)
     */

    var _proto2 = PriorityQueue.prototype;

    _proto2.top = function top() {
      if (this.empty()) {
        return null;
      }

      return this.root.elem;
    }
    /**
     * @method push
     * put things on the heap
     */
    ;

    _proto2.push = function push() {
      var pairingNode;

      for (var i = 0, arg; arg = i < 0 || arguments.length <= i ? undefined : arguments[i]; ++i) {
        pairingNode = new PairingHeap(arg);
        this.root = this.empty() ? pairingNode : this.root.merge(pairingNode, this.lessThan);
      }

      return pairingNode;
    }
    /**
     * @method empty
     * @return true if no more elements in queue
     */
    ;

    _proto2.empty = function empty() {
      return !this.root || !this.root.elem;
    }
    /**
     * @method isHeap check heap condition (for testing)
     * @return true if queue is in valid state
     */
    ;

    _proto2.isHeap = function isHeap() {
      return this.root.isHeap(this.lessThan);
    }
    /**
     * @method forEach apply f to each element of the queue
     * @param f function to apply
     */
    ;

    _proto2.forEach = function forEach(f) {
      this.root.forEach(f);
    }
    /**
     * @method pop remove and return the min element from the queue
     */
    ;

    _proto2.pop = function pop() {
      if (this.empty()) {
        return null;
      }

      var obj = this.root.min();
      this.root = this.root.removeMin(this.lessThan);
      return obj;
    }
    /**
     * @method reduceKey reduce the key value of the specified heap node
     */
    ;

    _proto2.reduceKey = function reduceKey(heapNode, newKey, setHeapNode) {
      if (setHeapNode === void 0) {
        setHeapNode = null;
      }

      this.root = this.root.decreaseKey(heapNode, newKey, setHeapNode, this.lessThan);
    };

    _proto2.toString = function toString(selector) {
      return this.root.toString(selector);
    }
    /**
     * @method count
     * @return number of elements in queue
     */
    ;

    _proto2.count = function count() {
      return this.root.count();
    };

    return PriorityQueue;
  }();

  var Neighbour = function Neighbour(id, distance) {
    this.id = id;
    this.distance = distance;
  };

  var Node$2 = function Node(id) {
    this.id = id;
    this.neighbours = [];
  };

  var QueueEntry = function QueueEntry(node, prev, d) {
    this.node = node;
    this.prev = prev;
    this.d = d;
  };
  /**
   * calculates all-pairs shortest paths or shortest paths from a single node
   * @class Calculator
   * @constructor
   * @param n {number} number of nodes
   * @param es {Edge[]} array of edges
   */

  var Calculator = /*#__PURE__*/function () {
    function Calculator(n, es, getSourceIndex, getTargetIndex, getLength) {
      this.n = n;
      this.es = es;
      this.neighbours = new Array(this.n);
      var i = this.n;

      while (i--) {
        this.neighbours[i] = new Node$2(i);
      }

      i = this.es.length;

      while (i--) {
        var e = this.es[i];
        var u = getSourceIndex(e),
            v = getTargetIndex(e);
        var d = getLength(e);
        this.neighbours[u].neighbours.push(new Neighbour(v, d));
        this.neighbours[v].neighbours.push(new Neighbour(u, d));
      }
    }
    /**
     * compute shortest paths for graph over n nodes with edges an array of source/target pairs
     * edges may optionally have a length attribute.  1 is the default.
     * Uses Johnson's algorithm.
     *
     * @method DistanceMatrix
     * @return the distance matrix
     */

    var _proto = Calculator.prototype;

    _proto.DistanceMatrix = function DistanceMatrix() {
      var D = new Array(this.n);

      for (var i = 0; i < this.n; ++i) {
        D[i] = this.dijkstraNeighbours(i);
      }

      return D;
    }
    /**
     * get shortest paths from a specified start node
     * @method DistancesFromNode
     * @param start node index
     * @return array of path lengths
     */
    ;

    _proto.DistancesFromNode = function DistancesFromNode(start) {
      return this.dijkstraNeighbours(start);
    };

    _proto.PathFromNodeToNode = function PathFromNodeToNode(start, end) {
      return this.dijkstraNeighbours(start, end);
    } // find shortest path from start to end, with the opportunity at
    // each edge traversal to compute a custom cost based on the
    // previous edge.  For example, to penalise bends.
    ;

    _proto.PathFromNodeToNodeWithPrevCost = function PathFromNodeToNodeWithPrevCost(start, end, prevCost) {
      var q = new PriorityQueue(function (a, b) {
        return a.d <= b.d;
      }),
          u = this.neighbours[start],
          qu = new QueueEntry(u, null, 0),
          visitedFrom = {};
      q.push(qu);

      while (!q.empty()) {
        qu = q.pop();
        u = qu.node;

        if (u.id === end) {
          break;
        }

        var i = u.neighbours.length;

        while (i--) {
          var neighbour = u.neighbours[i],
              v = this.neighbours[neighbour.id]; // don't double back

          if (qu.prev && v.id === qu.prev.node.id) continue; // don't retraverse an edge if it has already been explored
          // from a lower cost route

          var viduid = v.id + ',' + u.id;
          if (viduid in visitedFrom && visitedFrom[viduid] <= qu.d) continue;
          var cc = qu.prev ? prevCost(qu.prev.node.id, u.id, v.id) : 0,
              t = qu.d + neighbour.distance + cc; // store cost of this traversal

          visitedFrom[viduid] = t;
          q.push(new QueueEntry(v, qu, t));
        }
      }

      var path = [];

      while (qu.prev) {
        qu = qu.prev;
        path.push(qu.node.id);
      }

      return path;
    };

    _proto.dijkstraNeighbours = function dijkstraNeighbours(start, dest) {
      if (dest === void 0) {
        dest = -1;
      }

      var q = new PriorityQueue(function (a, b) {
        return a.d <= b.d;
      }),
          i = this.neighbours.length,
          d = new Array(i);

      while (i--) {
        var node = this.neighbours[i];
        node.d = i === start ? 0 : Number.POSITIVE_INFINITY;
        node.q = q.push(node);
      }

      while (!q.empty()) {
        // console.log(q.toString(function (u) { return u.id + "=" + (u.d === Number.POSITIVE_INFINITY ? "\u221E" : u.d.toFixed(2) )}));
        var u = q.pop();
        d[u.id] = u.d;

        if (u.id === dest) {
          var path = [];
          var v = u;

          while (typeof v.prev !== 'undefined') {
            path.push(v.prev.id);
            v = v.prev;
          }

          return path;
        }

        i = u.neighbours.length;

        while (i--) {
          var neighbour = u.neighbours[i];
          var v = this.neighbours[neighbour.id];
          var t = u.d + neighbour.distance;

          if (u.d !== Number.MAX_VALUE && v.d > t) {
            v.d = t;
            v.prev = u;
            q.reduceKey(v.q, v, function (e, q) {
              return e.q = q;
            });
          }
        }
      }

      return d;
    };

    return Calculator;
  }();

  var Point = function Point() {};
  var LineSegment = function LineSegment(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  };
  var PolyPoint = /*#__PURE__*/function (_Point) {
    _inheritsLoose(PolyPoint, _Point);

    function PolyPoint() {
      return _Point.apply(this, arguments) || this;
    }

    return PolyPoint;
  }(Point);
  /** tests if a point is Left|On|Right of an infinite line.
   * @param points P0, P1, and P2
   * @return >0 for P2 left of the line through P0 and P1
   *            =0 for P2 on the line
   *            <0 for P2 right of the line
   */

  function isLeft(P0, P1, P2) {
    return (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y);
  }

  function above(p, vi, vj) {
    return isLeft(p, vi, vj) > 0;
  }

  function below(p, vi, vj) {
    return isLeft(p, vi, vj) < 0;
  }
  /**
   * returns the convex hull of a set of points using Andrew's monotone chain algorithm
   * see: http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain
   * @param S array of points
   * @return the convex hull as an array of points
   */

  function ConvexHull(S) {
    var P = S.slice(0).sort(function (a, b) {
      return a.x !== b.x ? b.x - a.x : b.y - a.y;
    });
    var n = S.length,
        i;
    var minmin = 0;
    var xmin = P[0].x;

    for (i = 1; i < n; ++i) {
      if (P[i].x !== xmin) break;
    }

    var minmax = i - 1;
    var H = [];
    H.push(P[minmin]); // push minmin point onto stack

    if (minmax === n - 1) {
      // degenerate case: all x-coords == xmin
      if (P[minmax].y !== P[minmin].y) // a  nontrivial segment
        H.push(P[minmax]);
    } else {
      // Get the indices of points with max x-coord and min|max y-coord
      var maxmin,
          maxmax = n - 1;
      var xmax = P[n - 1].x;

      for (i = n - 2; i >= 0; i--) {
        if (P[i].x !== xmax) break;
      }

      maxmin = i + 1; // Compute the lower hull on the stack H

      i = minmax;

      while (++i <= maxmin) {
        // the lower line joins P[minmin]  with P[maxmin]
        if (isLeft(P[minmin], P[maxmin], P[i]) >= 0 && i < maxmin) continue; // ignore P[i] above or on the lower line

        while (H.length > 1) // there are at least 2 points on the stack
        {
          // test if  P[i] is left of the line at the stack top
          if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break; // P[i] is a new hull  vertex
          else H.length -= 1; // pop top point off  stack
        }

        if (i != minmin) H.push(P[i]);
      } // Next, compute the upper hull on the stack H above the bottom hull


      if (maxmax != maxmin) // if  distinct xmax points
        H.push(P[maxmax]); // push maxmax point onto stack

      var bot = H.length; // the bottom point of the upper hull stack

      i = maxmin;

      while (--i >= minmax) {
        // the upper line joins P[maxmax]  with P[minmax]
        if (isLeft(P[maxmax], P[minmax], P[i]) >= 0 && i > minmax) continue; // ignore P[i] below or on the upper line

        while (H.length > bot) // at least 2 points on the upper stack
        {
          // test if  P[i] is left of the line at the stack top
          if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break; // P[i] is a new hull  vertex
          else H.length -= 1; // pop top point off  stack
        }

        if (i != minmin) H.push(P[i]); // push P[i] onto stack
      }
    }

    return H;
  } // apply f to the points in P in clockwise order around the point p

  function clockwiseRadialSweep(p, P, f) {
    P.slice(0).sort(function (a, b) {
      return Math.atan2(a.y - p.y, a.x - p.x) - Math.atan2(b.y - p.y, b.x - p.x);
    }).forEach(f);
  }
  //    Input:  P = a 2D point (exterior to the polygon)
  //            n = number of polygon vertices
  //            V = array of vertices for a 2D convex polygon
  //    Output: rtan = index of rightmost tangent point V[rtan]
  //            ltan = index of leftmost tangent point V[ltan]


  function tangent_PointPolyC(P, V) {
    // Rtangent_PointPolyC and Ltangent_PointPolyC require polygon to be
    // "closed" with the first vertex duplicated at end, so V[n-1] = V[0].
    var Vclosed = V.slice(0); // Copy V

    Vclosed.push(V[0]); // Add V[0] at end

    return {
      rtan: Rtangent_PointPolyC(P, Vclosed),
      ltan: Ltangent_PointPolyC(P, Vclosed)
    };
  } // Rtangent_PointPolyC(): binary search for convex polygon right tangent
  //    Input:  P = a 2D point (exterior to the polygon)
  //            n = number of polygon vertices
  //            V = array of vertices for a 2D convex polygon with first
  //                vertex duplicated as last, so V[n-1] = V[0]
  //    Return: index "i" of rightmost tangent point V[i]


  function Rtangent_PointPolyC(P, V) {
    var n = V.length - 1; // use binary search for large convex polygons

    var a, b, c; // indices for edge chain endpoints

    var upA, dnC; // test for up direction of edges a and c
    // rightmost tangent = maximum for the isLeft() ordering
    // test if V[0] is a local maximum

    if (below(P, V[1], V[0]) && !above(P, V[n - 1], V[0])) return 0; // V[0] is the maximum tangent point

    for (a = 0, b = n;;) {
      // start chain = [0,n] with V[n]=V[0]
      if (b - a === 1) if (above(P, V[a], V[b])) return a;else return b;
      c = Math.floor((a + b) / 2); // midpoint of [a,b], and 0<c<n

      dnC = below(P, V[c + 1], V[c]);
      if (dnC && !above(P, V[c - 1], V[c])) return c; // V[c] is the maximum tangent point
      // no max yet, so continue with the binary search
      // pick one of the two subchains [a,c] or [c,b]

      upA = above(P, V[a + 1], V[a]);

      if (upA) {
        // edge a points up
        if (dnC) // edge c points down
          b = c; // select [a,c]
        else {
            // edge c points up
            if (above(P, V[a], V[c])) // V[a] above V[c]
              b = c; // select [a,c]
            else // V[a] below V[c]
              a = c; // select [c,b]
          }
      } else {
        // edge a points down
        if (!dnC) // edge c points up
          a = c; // select [c,b]
        else {
            // edge c points down
            if (below(P, V[a], V[c])) // V[a] below V[c]
              b = c; // select [a,c]
            else // V[a] above V[c]
              a = c; // select [c,b]
          }
      }
    }
  } // Ltangent_PointPolyC(): binary search for convex polygon left tangent
  //    Input:  P = a 2D point (exterior to the polygon)
  //            n = number of polygon vertices
  //            V = array of vertices for a 2D convex polygon with first
  //                vertex duplicated as last, so V[n-1] = V[0]
  //    Return: index "i" of leftmost tangent point V[i]


  function Ltangent_PointPolyC(P, V) {
    var n = V.length - 1; // use binary search for large convex polygons

    var a, b, c; // indices for edge chain endpoints

    var dnA, dnC; // test for down direction of edges a and c
    // leftmost tangent = minimum for the isLeft() ordering
    // test if V[0] is a local minimum

    if (above(P, V[n - 1], V[0]) && !below(P, V[1], V[0])) return 0; // V[0] is the minimum tangent point

    for (a = 0, b = n;;) {
      // start chain = [0,n] with V[n] = V[0]
      if (b - a === 1) if (below(P, V[a], V[b])) return a;else return b;
      c = Math.floor((a + b) / 2); // midpoint of [a,b], and 0<c<n

      dnC = below(P, V[c + 1], V[c]);
      if (above(P, V[c - 1], V[c]) && !dnC) return c; // V[c] is the minimum tangent point
      // no min yet, so continue with the binary search
      // pick one of the two subchains [a,c] or [c,b]

      dnA = below(P, V[a + 1], V[a]);

      if (dnA) {
        // edge a points down
        if (!dnC) // edge c points up
          b = c; // select [a,c]
        else {
            // edge c points down
            if (below(P, V[a], V[c])) // V[a] below V[c]
              b = c; // select [a,c]
            else // V[a] above V[c]
              a = c; // select [c,b]
          }
      } else {
        // edge a points up
        if (dnC) // edge c points down
          a = c; // select [c,b]
        else {
            // edge c points up
            if (above(P, V[a], V[c])) // V[a] above V[c]
              b = c; // select [a,c]
            else // V[a] below V[c]
              a = c; // select [c,b]
          }
      }
    }
  } // RLtangent_PolyPolyC(): get the RL tangent between two convex polygons
  //    Input:  m = number of vertices in polygon 1
  //            V = array of vertices for convex polygon 1 with V[m]=V[0]
  //            n = number of vertices in polygon 2
  //            W = array of vertices for convex polygon 2 with W[n]=W[0]
  //    Output: *t1 = index of tangent point V[t1] for polygon 1
  //            *t2 = index of tangent point W[t2] for polygon 2


  function tangent_PolyPolyC(V, W, t1, t2, cmp1, cmp2) {
    var ix1, ix2; // search indices for polygons 1 and 2
    // first get the initial vertex on each polygon

    ix1 = t1(W[0], V); // right tangent from W[0] to V

    ix2 = t2(V[ix1], W); // left tangent from V[ix1] to W
    // ping-pong linear search until it stabilizes

    var done = false; // flag when done

    while (!done) {
      done = true; // assume done until...

      while (true) {
        if (ix1 === V.length - 1) ix1 = 0;
        if (cmp1(W[ix2], V[ix1], V[ix1 + 1])) break;
        ++ix1; // get Rtangent from W[ix2] to V
      }

      while (true) {
        if (ix2 === 0) ix2 = W.length - 1;
        if (cmp2(V[ix1], W[ix2], W[ix2 - 1])) break;
        --ix2; // get Ltangent from V[ix1] to W

        done = false; // not done if had to adjust this
      }
    }

    return {
      t1: ix1,
      t2: ix2
    };
  }
  function LRtangent_PolyPolyC(V, W) {
    var rl = RLtangent_PolyPolyC(W, V);
    return {
      t1: rl.t2,
      t2: rl.t1
    };
  }
  function RLtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Ltangent_PointPolyC, above, below);
  }
  function LLtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Ltangent_PointPolyC, Ltangent_PointPolyC, below, below);
  }
  function RRtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Rtangent_PointPolyC, above, above);
  }
  var BiTangent = function BiTangent(t1, t2) {
    this.t1 = t1;
    this.t2 = t2;
  };
  var BiTangents = function BiTangents() {};
  var TVGPoint = /*#__PURE__*/function (_Point2) {
    _inheritsLoose(TVGPoint, _Point2);

    function TVGPoint() {
      return _Point2.apply(this, arguments) || this;
    }

    return TVGPoint;
  }(Point);
  var VisibilityVertex = function VisibilityVertex(id, polyid, polyvertid, p) {
    this.id = id;
    this.polyid = polyid;
    this.polyvertid = polyvertid;
    this.p = p;
    p.vv = this;
  };
  var VisibilityEdge = /*#__PURE__*/function () {
    function VisibilityEdge(source, target) {
      this.source = source;
      this.target = target;
    }

    var _proto = VisibilityEdge.prototype;

    _proto.length = function length() {
      var dx = this.source.p.x - this.target.p.x;
      var dy = this.source.p.y - this.target.p.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    return VisibilityEdge;
  }();
  var TangentVisibilityGraph = /*#__PURE__*/function () {
    function TangentVisibilityGraph(P, g0) {
      this.P = P;
      this.V = [];
      this.E = [];

      if (!g0) {
        var n = P.length; // For each node...

        for (var i = 0; i < n; i++) {
          var p = P[i]; // For each node vertex.

          for (var j = 0; j < p.length; ++j) {
            var pj = p[j],
                vv = new VisibilityVertex(this.V.length, i, j, pj);
            this.V.push(vv); // For the every iteration but the first, generate an
            // edge from the previous visibility vertex to the
            // current one.

            if (j > 0) this.E.push(new VisibilityEdge(p[j - 1].vv, vv));
          } // Add a visibility edge from the first vertex to the last.


          if (p.length > 1) this.E.push(new VisibilityEdge(p[0].vv, p[p.length - 1].vv));
        }

        for (var i = 0; i < n - 1; i++) {
          var Pi = P[i];

          for (var j = i + 1; j < n; j++) {
            var Pj = P[j],
                t = tangents(Pi, Pj);

            for (var q in t) {
              var c = t[q],
                  source = Pi[c.t1],
                  target = Pj[c.t2];
              this.addEdgeIfVisible(source, target, i, j);
            }
          }
        }
      } else {
        this.V = g0.V.slice(0);
        this.E = g0.E.slice(0);
      }
    }

    var _proto2 = TangentVisibilityGraph.prototype;

    _proto2.addEdgeIfVisible = function addEdgeIfVisible(u, v, i1, i2) {
      if (!this.intersectsPolys(new LineSegment(u.x, u.y, v.x, v.y), i1, i2)) {
        this.E.push(new VisibilityEdge(u.vv, v.vv));
      }
    };

    _proto2.addPoint = function addPoint(p, i1) {
      var n = this.P.length;
      this.V.push(new VisibilityVertex(this.V.length, n, 0, p));

      for (var i = 0; i < n; ++i) {
        if (i === i1) continue;
        var poly = this.P[i],
            t = tangent_PointPolyC(p, poly);
        this.addEdgeIfVisible(p, poly[t.ltan], i1, i);
        this.addEdgeIfVisible(p, poly[t.rtan], i1, i);
      }

      return p.vv;
    };

    _proto2.intersectsPolys = function intersectsPolys(l, i1, i2) {
      for (var i = 0, n = this.P.length; i < n; ++i) {
        if (i != i1 && i != i2 && intersects(l, this.P[i]).length > 0) {
          return true;
        }
      }

      return false;
    };

    return TangentVisibilityGraph;
  }();

  function intersects(l, P) {
    var ints = [];

    for (var i = 1, n = P.length; i < n; ++i) {
      var _int = Rectangle.lineIntersection(l.x1, l.y1, l.x2, l.y2, P[i - 1].x, P[i - 1].y, P[i].x, P[i].y);

      if (_int) ints.push(_int);
    }

    return ints;
  }

  function tangents(V, W) {
    var m = V.length - 1,
        n = W.length - 1;
    var bt = new BiTangents();

    for (var i = 0; i <= m; ++i) {
      for (var j = 0; j <= n; ++j) {
        var v1 = V[i == 0 ? m : i - 1];
        var v2 = V[i];
        var v3 = V[i == m ? 0 : i + 1];
        var w1 = W[j == 0 ? n : j - 1];
        var w2 = W[j];
        var w3 = W[j == n ? 0 : j + 1];
        var v1v2w2 = isLeft(v1, v2, w2);
        var v2w1w2 = isLeft(v2, w1, w2);
        var v2w2w3 = isLeft(v2, w2, w3);
        var w1w2v2 = isLeft(w1, w2, v2);
        var w2v1v2 = isLeft(w2, v1, v2);
        var w2v2v3 = isLeft(w2, v2, v3);

        if (v1v2w2 >= 0 && v2w1w2 >= 0 && v2w2w3 < 0 && w1w2v2 >= 0 && w2v1v2 >= 0 && w2v2v3 < 0) {
          bt.ll = new BiTangent(i, j);
        } else if (v1v2w2 <= 0 && v2w1w2 <= 0 && v2w2w3 > 0 && w1w2v2 <= 0 && w2v1v2 <= 0 && w2v2v3 > 0) {
          bt.rr = new BiTangent(i, j);
        } else if (v1v2w2 <= 0 && v2w1w2 > 0 && v2w2w3 <= 0 && w1w2v2 >= 0 && w2v1v2 < 0 && w2v2v3 >= 0) {
          bt.rl = new BiTangent(i, j);
        } else if (v1v2w2 >= 0 && v2w1w2 < 0 && v2w2w3 >= 0 && w1w2v2 <= 0 && w2v1v2 > 0 && w2v2v3 <= 0) {
          bt.lr = new BiTangent(i, j);
        }
      }
    }

    return bt;
  }

  function isPointInsidePoly(p, poly) {
    for (var i = 1, n = poly.length; i < n; ++i) {
      if (below(poly[i - 1], poly[i], p)) return false;
    }

    return true;
  }

  function isAnyPInQ(p, q) {
    return !p.every(function (v) {
      return !isPointInsidePoly(v, q);
    });
  }

  function polysOverlap(p, q) {
    if (isAnyPInQ(p, q)) return true;
    if (isAnyPInQ(q, p)) return true;

    for (var i = 1, n = p.length; i < n; ++i) {
      var v = p[i],
          u = p[i - 1];
      if (intersects(new LineSegment(u.x, u.y, v.x, v.y), q).length > 0) return true;
    }

    return false;
  }

  var packingOptions = {
    PADDING: 10,
    GOLDEN_SECTION: (1 + /*#__PURE__*/Math.sqrt(5)) / 2,
    FLOAT_EPSILON: 0.0001,
    MAX_INERATIONS: 100
  }; // assign x, y to nodes while using box packing algorithm for disconnected graphs

  function applyPacking(graphs, w, h, node_size, desired_ratio, centerGraph) {
    if (desired_ratio === void 0) {
      desired_ratio = 1;
    }

    if (centerGraph === void 0) {
      centerGraph = true;
    }

    return function (node_size, desired_ratio) {
      var init_x = 0,
          init_y = 0,
          svg_width = w,
          svg_height = h,
          desired_ratio = typeof desired_ratio !== 'undefined' ? desired_ratio : 1,
          node_size = typeof node_size !== 'undefined' ? node_size : 0,
          real_width = 0,
          real_height = 0,
          min_width = 0,
          global_bottom = 0,
          line = [];
      if (graphs.length == 0) return; /// that would take care of single nodes problem
      // graphs.forEach(function (g) {
      //     if (g.array.length == 1) {
      //         g.array[0].x = 0;
      //         g.array[0].y = 0;
      //     }
      // });

      calculate_bb(graphs);
      apply(graphs);

      if (centerGraph) {
        put_nodes_to_right_positions(graphs);
      } // get bounding boxes for all separate graphs


      function calculate_bb(graphs) {
        graphs.forEach(function (g) {
          calculate_single_bb(g);
        });

        function calculate_single_bb(graph) {
          var min_x = Number.MAX_VALUE,
              min_y = Number.MAX_VALUE,
              max_x = 0,
              max_y = 0;
          graph.array.forEach(function (v) {
            var w = typeof v.width !== 'undefined' ? v.width : node_size;
            var h = typeof v.height !== 'undefined' ? v.height : node_size;
            w /= 2;
            h /= 2;
            max_x = Math.max(v.x + w, max_x);
            min_x = Math.min(v.x - w, min_x);
            max_y = Math.max(v.y + h, max_y);
            min_y = Math.min(v.y - h, min_y);
          });
          graph.width = max_x - min_x;
          graph.height = max_y - min_y;
        }
      } //function plot(data, left, right, opt_x, opt_y) {
      //    // plot the cost function
      //    var plot_svg = d3.select("body").append("svg")
      //        .attr("width", function () { return 2 * (right - left); })
      //        .attr("height", 200);
      //    var x = d3.time.scale().range([0, 2 * (right - left)]);
      //    var xAxis = d3.svg.axis().scale(x).orient("bottom");
      //    plot_svg.append("g").attr("class", "x axis")
      //        .attr("transform", "translate(0, 199)")
      //        .call(xAxis);
      //    var lastX = 0;
      //    var lastY = 0;
      //    var value = 0;
      //    for (var r = left; r < right; r += 1) {
      //        value = step(data, r);
      //        // value = 1;
      //        plot_svg.append("line").attr("x1", 2 * (lastX - left))
      //            .attr("y1", 200 - 30 * lastY)
      //            .attr("x2", 2 * r - 2 * left)
      //            .attr("y2", 200 - 30 * value)
      //            .style("stroke", "rgb(6,120,155)");
      //        lastX = r;
      //        lastY = value;
      //    }
      //    plot_svg.append("circle").attr("cx", 2 * opt_x - 2 * left).attr("cy", 200 - 30 * opt_y)
      //        .attr("r", 5).style('fill', "rgba(0,0,0,0.5)");
      //}
      // actual assigning of position to nodes


      function put_nodes_to_right_positions(graphs) {
        graphs.forEach(function (g) {
          // calculate current graph center:
          var center = {
            x: 0,
            y: 0
          };
          g.array.forEach(function (node) {
            center.x += node.x;
            center.y += node.y;
          });
          center.x /= g.array.length;
          center.y /= g.array.length; // calculate current top left corner:

          var corner = {
            x: center.x - g.width / 2,
            y: center.y - g.height / 2
          };
          var offset = {
            x: g.x - corner.x + svg_width / 2 - real_width / 2,
            y: g.y - corner.y + svg_height / 2 - real_height / 2
          }; // put nodes:

          g.array.forEach(function (node) {
            node.x += offset.x;
            node.y += offset.y;
          });
        });
      } // starts box packing algorithm
      // desired ratio is 1 by default


      function apply(data, desired_ratio) {
        var curr_best_f = Number.POSITIVE_INFINITY;
        var curr_best = 0;
        data.sort(function (a, b) {
          return b.height - a.height;
        });
        min_width = data.reduce(function (a, b) {
          return a.width < b.width ? a.width : b.width;
        });
        var left = x1 = min_width;
        var right = x2 = get_entire_width(data);
        var iterationCounter = 0;
        var f_x1 = Number.MAX_VALUE;
        var f_x2 = Number.MAX_VALUE;
        var flag = -1; // determines which among f_x1 and f_x2 to recompute

        var dx = Number.MAX_VALUE;
        var df = Number.MAX_VALUE;

        while (dx > min_width || df > packingOptions.FLOAT_EPSILON) {
          if (flag != 1) {
            var x1 = right - (right - left) / packingOptions.GOLDEN_SECTION;
            var f_x1 = step(data, x1);
          }

          if (flag != 0) {
            var x2 = left + (right - left) / packingOptions.GOLDEN_SECTION;
            var f_x2 = step(data, x2);
          }

          dx = Math.abs(x1 - x2);
          df = Math.abs(f_x1 - f_x2);

          if (f_x1 < curr_best_f) {
            curr_best_f = f_x1;
            curr_best = x1;
          }

          if (f_x2 < curr_best_f) {
            curr_best_f = f_x2;
            curr_best = x2;
          }

          if (f_x1 > f_x2) {
            left = x1;
            x1 = x2;
            f_x1 = f_x2;
            flag = 1;
          } else {
            right = x2;
            x2 = x1;
            f_x2 = f_x1;
            flag = 0;
          }

          if (iterationCounter++ > 100) {
            break;
          }
        } // plot(data, min_width, get_entire_width(data), curr_best, curr_best_f);


        step(data, curr_best);
      } // one iteration of the optimization method
      // (gives a proper, but not necessarily optimal packing)


      function step(data, max_width) {
        line = [];
        real_width = 0;
        real_height = 0;
        global_bottom = init_y;

        for (var i = 0; i < data.length; i++) {
          var o = data[i];
          put_rect(o, max_width);
        }

        return Math.abs(get_real_ratio() - desired_ratio);
      } // looking for a position to one box


      function put_rect(rect, max_width) {
        var parent = undefined;

        for (var i = 0; i < line.length; i++) {
          if (line[i].space_left >= rect.height && line[i].x + line[i].width + rect.width + packingOptions.PADDING - max_width <= packingOptions.FLOAT_EPSILON) {
            parent = line[i];
            break;
          }
        }

        line.push(rect);

        if (parent !== undefined) {
          rect.x = parent.x + parent.width + packingOptions.PADDING;
          rect.y = parent.bottom;
          rect.space_left = rect.height;
          rect.bottom = rect.y;
          parent.space_left -= rect.height + packingOptions.PADDING;
          parent.bottom += rect.height + packingOptions.PADDING;
        } else {
          rect.y = global_bottom;
          global_bottom += rect.height + packingOptions.PADDING;
          rect.x = init_x;
          rect.bottom = rect.y;
          rect.space_left = rect.height;
        }

        if (rect.y + rect.height - real_height > -packingOptions.FLOAT_EPSILON) real_height = rect.y + rect.height - init_y;
        if (rect.x + rect.width - real_width > -packingOptions.FLOAT_EPSILON) real_width = rect.x + rect.width - init_x;
      }

      function get_entire_width(data) {
        var width = 0;
        data.forEach(function (d) {
          return width += d.width + packingOptions.PADDING;
        });
        return width;
      }

      function get_real_ratio() {
        return real_width / real_height;
      }
    }(node_size, desired_ratio);
  }
  /**
   * connected components of graph
   * returns an array of {}
   */

  function separateGraphs(nodes, links) {
    var marks = {};
    var ways = {};
    var graphs = [];
    var clusters = 0;

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var n1 = link.source;
      var n2 = link.target;
      if (ways[n1.index]) ways[n1.index].push(n2);else ways[n1.index] = [n2];
      if (ways[n2.index]) ways[n2.index].push(n1);else ways[n2.index] = [n1];
    }

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (marks[node.index]) continue;
      explore_node(node, true);
    }

    function explore_node(n, is_new) {
      if (marks[n.index] !== undefined) return;

      if (is_new) {
        clusters++;
        graphs.push({
          array: []
        });
      }

      marks[n.index] = clusters;
      graphs[clusters - 1].array.push(n);
      var adjacent = ways[n.index];
      if (!adjacent) return;

      for (var j = 0; j < adjacent.length; j++) {
        explore_node(adjacent[j], false);
      }
    }

    return graphs;
  }

  function _loadWasmModule(sync, filepath, src, imports) {
    function _instantiateOrCompile(source, imports, stream) {
      var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
      var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;

      if (imports) {
        return instantiateFunc(source, imports);
      } else {
        return compileFunc(source);
      }
    }

    var buf = null;

    if (filepath) {
      return _instantiateOrCompile(fetch(filepath), imports, true);
    }

    var raw = globalThis.atob(src);
    var rawLength = raw.length;
    buf = new Uint8Array(new ArrayBuffer(rawLength));
    for (var i = 0; i < rawLength; i++) {
      buf[i] = raw.charCodeAt(i);
    }

    if (sync) {
      var mod = new WebAssembly.Module(buf);
      return imports ? new WebAssembly.Instance(mod, imports) : mod;
    } else {
      return _instantiateOrCompile(buf, imports, false);
    }
  }

  function wasmSIMD_bg(imports) {
    return _loadWasmModule(0, null, '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IG9uIGEgYE5vbmVgIHZhbHVlbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5ycwCfABAAHAAAAGgCAAAeAMoGBG5hbWUBwgYcADJ3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fbWVtb3J5OjpoMGNmZTIyYmQ3OGZlNjc3ZAE6ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bWFsbG9jOjpoMGViYjU0YWQ5ZmU1ODI0ZAIUY29tcHV0ZV9zdGVwX3NpemVfMmQDFGNvbXB1dGVfc3RlcF9zaXplXzNkBApjb21wdXRlXzJkBQpjb21wdXRlXzNkBiFjcmVhdGVfZGVyaXZhdGl2ZV9jb21wdXRlcl9jdHhfM2QHOGRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmZyZWU6Omg0YmJkNTgyYTI0OWQxOWZlCCFjcmVhdGVfZGVyaXZhdGl2ZV9jb21wdXRlcl9jdHhfMmQJQWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmRpc3Bvc2VfY2h1bms6OmgyNzI5NDMxZTJiZDdmNTY0CkZkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjppbnNlcnRfbGFyZ2VfY2h1bms6OmhjMmEyZDc5YjhhNDc2Nzk4CwhzZXRfR18yZAwIc2V0X0dfM2QNDWFwcGx5X2xvY2tfM2QODnJlbGVhc2VfY3R4XzJkDw1hcHBseV9sb2NrXzJkEDdzdGQ6OnBhbmlja2luZzo6cnVzdF9wYW5pY193aXRoX2hvb2s6OmhhNzk3NDQ0YWZhMGU2OTQ5ERFfX3diaW5kZ2VuX21hbGxvYxIpY29yZTo6cGFuaWNraW5nOjpwYW5pYzo6aGU5NjA0N2E2MWVhMjY1NDgTNGFsbG9jOjpyYXdfdmVjOjpjYXBhY2l0eV9vdmVyZmxvdzo6aGE4MzkzYWYwYWExNGRkNjUULWNvcmU6OnBhbmlja2luZzo6cGFuaWNfZm10OjpoNTc4ZDQ1OTc5YmVjYTVmZhUPX193YmluZGdlbl9mcmVlFh9fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyFwhnZXRfRF8yZBgIZ2V0X0RfM2QZCGdldF9nXzJkGgZtZW1zZXQbCmdldF9tZW1vcnkASg90YXJnZXRfZmVhdHVyZXMEKw9tdXRhYmxlLWdsb2JhbHMrE25vbnRyYXBwaW5nLWZwdG9pbnQrB3NpbWQxMjgrCHNpZ24tZXh0', imports);
  }

  var setWasm = function setWasm(wasmModule) {
    try {
      return Promise.resolve(WebAssembly.instantiate(wasmModule, {
        "./derivative_computer_bg.js": {
          __wbindgen_memory: __wbindgen_memory
        }
      })).then(function (inst) {
        wasm = inst.exports;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var wasm;
  function getWasm() {
    return wasm;
  }
  function __wbg_set_wasm(val) {
    wasm = val;
  }
  var heap = /*#__PURE__*/new Array(128).fill(undefined);
  heap.push(undefined, null, true, false);
  var heap_next = heap.length;

  function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    var idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
  }
  /**
  * @param {number} ctx_ptr
  */

  function release_ctx_2d(ctx_ptr) {
    wasm.release_ctx_2d(ctx_ptr);
  }
  var cachedFloat32Memory0 = null;

  function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
      cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }

    return cachedFloat32Memory0;
  }

  var WASM_VECTOR_LEN = 0;

  function passArrayF32ToWasm0(arg, malloc) {
    var ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  /**
  * @param {number} node_count
  * @param {Float32Array} D
  * @param {Float32Array} G
  * @returns {number}
  */

  function create_derivative_computer_ctx_2d(node_count, D, G) {
    var ptr0 = passArrayF32ToWasm0(D, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(G, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.create_derivative_computer_ctx_2d(node_count, ptr0, len0, ptr1, len1);
    return ret;
  }
  /**
  * @param {number} node_count
  * @param {Float32Array} D
  * @param {Float32Array} G
  * @returns {number}
  */

  function create_derivative_computer_ctx_3d(node_count, D, G) {
    var ptr0 = passArrayF32ToWasm0(D, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArrayF32ToWasm0(G, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.create_derivative_computer_ctx_3d(node_count, ptr0, len0, ptr1, len1);
    return ret;
  }
  var cachedInt32Memory0 = null;

  function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }

    return cachedInt32Memory0;
  }

  function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
  }
  /**
  * @param {number} ctx_ptr
  * @param {Float32Array} x
  * @returns {Float32Array}
  */

  function compute_2d(ctx_ptr, x) {
    try {
      var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

      var ptr0 = passArrayF32ToWasm0(x, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.compute_2d(retptr, ctx_ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v2 = getArrayF32FromWasm0(r0, r1).slice();

      wasm.__wbindgen_free(r0, r1 * 4);

      return v2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} ctx_ptr
  * @param {Float32Array} x
  * @returns {Float32Array}
  */

  function compute_3d(ctx_ptr, x) {
    try {
      var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);

      var ptr0 = passArrayF32ToWasm0(x, wasm.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm.compute_3d(retptr, ctx_ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v2 = getArrayF32FromWasm0(r0, r1).slice();

      wasm.__wbindgen_free(r0, r1 * 4);

      return v2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} ctx_ptr
  * @param {number} u
  * @param {number} p_0
  * @param {number} p_1
  * @param {number} x_0_u
  * @param {number} x_1_u
  */

  function apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u) {
    wasm.apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u);
  }
  /**
  * @param {number} ctx_ptr
  * @param {number} u
  * @param {number} p_0
  * @param {number} p_1
  * @param {number} p_2
  * @param {number} x_0_u
  * @param {number} x_1_u
  * @param {number} x_2_u
  */

  function apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u) {
    wasm.apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u);
  }
  /**
  * @param {number} ctx_ptr
  * @returns {number}
  */

  function compute_step_size_2d(ctx_ptr) {
    var ret = wasm.compute_step_size_2d(ctx_ptr);
    return ret;
  }
  /**
  * @param {number} ctx_ptr
  * @returns {number}
  */

  function compute_step_size_3d(ctx_ptr) {
    var ret = wasm.compute_step_size_3d(ctx_ptr);
    return ret;
  }

  function getObject(idx) {
    return heap[idx];
  }

  function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
  }

  function takeObject(idx) {
    var ret = getObject(idx);
    dropObject(idx);
    return ret;
  }
  /**
  * @returns {any}
  */

  function get_memory() {
    var ret = wasm.get_memory();
    return takeObject(ret);
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_D_2d(ctx) {
    var ret = wasm.get_D_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_D_3d(ctx) {
    var ret = wasm.get_D_3d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_g_2d(ctx) {
    var ret = wasm.get_g_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_g_3d(ctx) {
    var ret = wasm.get_D_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @param {Float32Array} new_G
  */

  function set_G_2d(ctx, new_G) {
    var ptr0 = passArrayF32ToWasm0(new_G, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.set_G_2d(ctx, ptr0, len0);
  }
  /**
  * @param {number} ctx
  * @param {Float32Array} new_G
  */

  function set_G_3d(ctx, new_G) {
    var ptr0 = passArrayF32ToWasm0(new_G, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.set_G_3d(ctx, ptr0, len0);
  }
  function __wbindgen_memory() {
    var ret = wasm.memory;
    return addHeapObject(ret);
  }

  var wasmSIMD = {
    __proto__: null,
    setWasm: setWasm,
    getWasm: getWasm,
    __wbg_set_wasm: __wbg_set_wasm,
    release_ctx_2d: release_ctx_2d,
    create_derivative_computer_ctx_2d: create_derivative_computer_ctx_2d,
    create_derivative_computer_ctx_3d: create_derivative_computer_ctx_3d,
    compute_2d: compute_2d,
    compute_3d: compute_3d,
    apply_lock_2d: apply_lock_2d,
    apply_lock_3d: apply_lock_3d,
    compute_step_size_2d: compute_step_size_2d,
    compute_step_size_3d: compute_step_size_3d,
    get_memory: get_memory,
    get_D_2d: get_D_2d,
    get_D_3d: get_D_3d,
    get_g_2d: get_g_2d,
    get_g_3d: get_g_3d,
    set_G_2d: set_G_2d,
    set_G_3d: set_G_3d,
    __wbindgen_memory: __wbindgen_memory
  };

  function wasmNoSIMD_bg(imports) {
    return _loadWasmModule(0, null, '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////A3EhBANAIANCgICA/IOAgMA/NwIAIANBOGpCgICA/IOAgMA/NwIAIANBMGpCgICA/IOAgMA/NwIAIANBKGpCgICA/IOAgMA/NwIAIANBIGpCgICA/IOAgMA/NwIAIANBGGpCgICA/IOAgMA/NwIAIANBEGpCgICA/IOAgMA/NwIAIANBCGpCgICA/IOAgMA/NwIAIANBQGshAyAEQQJrIgQNAAsLIAdFDQAgA0KAgID8g4CAwD83AhggA0KAgID8g4CAwD83AhAgA0KAgID8g4CAwD83AgggA0KAgID8g4CAwD83AgAgA0EgaiEDCyAFRQ0AA0AgA0GAgID8AzYCACADQQRqIQMgBUEBayIFDQALCyADQYCAgPwDNgIACyAAQdAAaiIDKAIABEAgACgCTBAHCyAAIAE2AkwgAEHUAGogAjYCACADIAI2AgAPCxATAAsAC/sDAQV/AkACQAJAIAINACAAKAIQIgEgAWwiAkUEQEEEIQFBACECDAELIAJB/////wFLDQEgAkECdCIBQQBIDQEgAQR/QZ2FwAAtAAAaIAEQAQUgAkGAgICAAklBAnQLIgFFDQIgASEDAkAgAkECSQ0AIAJBAWtBB3EhBQJAIAJBAmtBB0kNACACQQlrIgRBA3ZBAWoiBkEBcSEHIARBCE8EQCAGQf7///8DcSEEA0AgA0KAgID8g4CAwD83AgAgA0E4akKAgID8g4CAwD83AgAgA0EwakKAgID8g4CAwD83AgAgA0EoakKAgID8g4CAwD83AgAgA0EgakKAgID8g4CAwD83AgAgA0EYakKAgID8g4CAwD83AgAgA0EQakKAgID8g4CAwD83AgAgA0EIakKAgID8g4CAwD83AgAgA0FAayEDIARBAmsiBA0ACwsgB0UNACADQoCAgPyDgIDAPzcCGCADQoCAgPyDgIDAPzcCECADQoCAgPyDgIDAPzcCCCADQoCAgPyDgIDAPzcCACADQSBqIQMLIAVFDQADQCADQYCAgPwDNgIAIANBBGohAyAFQQFrIgUNAAsLIANBgICA/AM2AgALIABB6ABqIgMoAgAEQCAAKAJkEAcLIAAgATYCZCAAQewAaiACNgIAIAMgAjYCAA8LEBMACwALsAIBBH9BHyECIABCADcCECABQf///wdNBEAgAUEGIAFBCHZnIgNrdkEBcSADQQF0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AQsgAQRAIAAgAWohAQNAIABBADoAACABIABBAWoiAEsNAAsLCwQAEAALC9MBAQBBgIDAAAvJAXNyYy9saWIucnMAAAAAEAAKAAAATwAAAC0AAABsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzY2FwYWNpdHkgb3ZlcmZsb3cAAAA4ABAAEQAAABwAEAAcAAAAFgIAAAUAAAABAAAAAAAAAAEAAAACAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZWxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnMAnwAQABwAAABoAgAAHgDKBgRuYW1lAcIGHAAyd2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX21lbW9yeTo6aDBjZmUyMmJkNzhmZTY3N2QBOmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46Om1hbGxvYzo6aDBlYmI1NGFkOWZlNTgyNGQCFGNvbXB1dGVfc3RlcF9zaXplXzNkAwpjb21wdXRlXzNkBCFjcmVhdGVfZGVyaXZhdGl2ZV9jb21wdXRlcl9jdHhfM2QFIWNyZWF0ZV9kZXJpdmF0aXZlX2NvbXB1dGVyX2N0eF8yZAYUY29tcHV0ZV9zdGVwX3NpemVfMmQHOGRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmZyZWU6Omg0YmJkNTgyYTI0OWQxOWZlCApjb21wdXRlXzJkCUFkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjpkaXNwb3NlX2NodW5rOjpoMjcyOTQzMWUyYmQ3ZjU2NAoIc2V0X0dfMmQLCHNldF9HXzNkDEZkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjppbnNlcnRfbGFyZ2VfY2h1bms6OmhjMmEyZDc5YjhhNDc2Nzk4DQ1hcHBseV9sb2NrXzNkDg5yZWxlYXNlX2N0eF8yZA8NYXBwbHlfbG9ja18yZBA3c3RkOjpwYW5pY2tpbmc6OnJ1c3RfcGFuaWNfd2l0aF9ob29rOjpoYTc5NzQ0NGFmYTBlNjk0ORERX193YmluZGdlbl9tYWxsb2MSKWNvcmU6OnBhbmlja2luZzo6cGFuaWM6OmhlOTYwNDdhNjFlYTI2NTQ4EzRhbGxvYzo6cmF3X3ZlYzo6Y2FwYWNpdHlfb3ZlcmZsb3c6OmhhODM5M2FmMGFhMTRkZDY1FC1jb3JlOjpwYW5pY2tpbmc6OnBhbmljX2ZtdDo6aDU3OGQ0NTk3OWJlY2E1ZmYVD19fd2JpbmRnZW5fZnJlZRYfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlchcIZ2V0X0RfMmQYCGdldF9EXzNkGQhnZXRfZ18yZBoGbWVtc2V0GwpnZXRfbWVtb3J5AEEPdGFyZ2V0X2ZlYXR1cmVzAysPbXV0YWJsZS1nbG9iYWxzKxNub250cmFwcGluZy1mcHRvaW50KwhzaWduLWV4dA==', imports);
  }

  var setWasm$1 = function setWasm(wasmModule) {
    try {
      return Promise.resolve(WebAssembly.instantiate(wasmModule, {
        "./derivative_computer_bg.js": {
          __wbindgen_memory: __wbindgen_memory$1
        }
      })).then(function (inst) {
        wasm$1 = inst.exports;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var wasm$1;
  function getWasm$1() {
    return wasm$1;
  }
  function __wbg_set_wasm$1(val) {
    wasm$1 = val;
  }
  var heap$1 = /*#__PURE__*/new Array(128).fill(undefined);
  heap$1.push(undefined, null, true, false);
  var heap_next$1 = heap$1.length;

  function addHeapObject$1(obj) {
    if (heap_next$1 === heap$1.length) heap$1.push(heap$1.length + 1);
    var idx = heap_next$1;
    heap_next$1 = heap$1[idx];
    heap$1[idx] = obj;
    return idx;
  }
  /**
  * @param {number} ctx_ptr
  */

  function release_ctx_2d$1(ctx_ptr) {
    wasm$1.release_ctx_2d(ctx_ptr);
  }
  var cachedFloat32Memory0$1 = null;

  function getFloat32Memory0$1() {
    if (cachedFloat32Memory0$1 === null || cachedFloat32Memory0$1.byteLength === 0) {
      cachedFloat32Memory0$1 = new Float32Array(wasm$1.memory.buffer);
    }

    return cachedFloat32Memory0$1;
  }

  var WASM_VECTOR_LEN$1 = 0;

  function passArrayF32ToWasm0$1(arg, malloc) {
    var ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32Memory0$1().set(arg, ptr / 4);
    WASM_VECTOR_LEN$1 = arg.length;
    return ptr;
  }
  /**
  * @param {number} node_count
  * @param {Float32Array} D
  * @param {Float32Array} G
  * @returns {number}
  */

  function create_derivative_computer_ctx_2d$1(node_count, D, G) {
    var ptr0 = passArrayF32ToWasm0$1(D, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    var ptr1 = passArrayF32ToWasm0$1(G, wasm$1.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN$1;
    var ret = wasm$1.create_derivative_computer_ctx_2d(node_count, ptr0, len0, ptr1, len1);
    return ret;
  }
  /**
  * @param {number} node_count
  * @param {Float32Array} D
  * @param {Float32Array} G
  * @returns {number}
  */

  function create_derivative_computer_ctx_3d$1(node_count, D, G) {
    var ptr0 = passArrayF32ToWasm0$1(D, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    var ptr1 = passArrayF32ToWasm0$1(G, wasm$1.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN$1;
    var ret = wasm$1.create_derivative_computer_ctx_3d(node_count, ptr0, len0, ptr1, len1);
    return ret;
  }
  var cachedInt32Memory0$1 = null;

  function getInt32Memory0$1() {
    if (cachedInt32Memory0$1 === null || cachedInt32Memory0$1.byteLength === 0) {
      cachedInt32Memory0$1 = new Int32Array(wasm$1.memory.buffer);
    }

    return cachedInt32Memory0$1;
  }

  function getArrayF32FromWasm0$1(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32Memory0$1().subarray(ptr / 4, ptr / 4 + len);
  }
  /**
  * @param {number} ctx_ptr
  * @param {Float32Array} x
  * @returns {Float32Array}
  */

  function compute_2d$1(ctx_ptr, x) {
    try {
      var retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);

      var ptr0 = passArrayF32ToWasm0$1(x, wasm$1.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN$1;
      wasm$1.compute_2d(retptr, ctx_ptr, ptr0, len0);
      var r0 = getInt32Memory0$1()[retptr / 4 + 0];
      var r1 = getInt32Memory0$1()[retptr / 4 + 1];
      var v2 = getArrayF32FromWasm0$1(r0, r1).slice();

      wasm$1.__wbindgen_free(r0, r1 * 4);

      return v2;
    } finally {
      wasm$1.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} ctx_ptr
  * @param {Float32Array} x
  * @returns {Float32Array}
  */

  function compute_3d$1(ctx_ptr, x) {
    try {
      var retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);

      var ptr0 = passArrayF32ToWasm0$1(x, wasm$1.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN$1;
      wasm$1.compute_3d(retptr, ctx_ptr, ptr0, len0);
      var r0 = getInt32Memory0$1()[retptr / 4 + 0];
      var r1 = getInt32Memory0$1()[retptr / 4 + 1];
      var v2 = getArrayF32FromWasm0$1(r0, r1).slice();

      wasm$1.__wbindgen_free(r0, r1 * 4);

      return v2;
    } finally {
      wasm$1.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} ctx_ptr
  * @param {number} u
  * @param {number} p_0
  * @param {number} p_1
  * @param {number} x_0_u
  * @param {number} x_1_u
  */

  function apply_lock_2d$1(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u) {
    wasm$1.apply_lock_2d(ctx_ptr, u, p_0, p_1, x_0_u, x_1_u);
  }
  /**
  * @param {number} ctx_ptr
  * @param {number} u
  * @param {number} p_0
  * @param {number} p_1
  * @param {number} p_2
  * @param {number} x_0_u
  * @param {number} x_1_u
  * @param {number} x_2_u
  */

  function apply_lock_3d$1(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u) {
    wasm$1.apply_lock_3d(ctx_ptr, u, p_0, p_1, p_2, x_0_u, x_1_u, x_2_u);
  }
  /**
  * @param {number} ctx_ptr
  * @returns {number}
  */

  function compute_step_size_2d$1(ctx_ptr) {
    var ret = wasm$1.compute_step_size_2d(ctx_ptr);
    return ret;
  }
  /**
  * @param {number} ctx_ptr
  * @returns {number}
  */

  function compute_step_size_3d$1(ctx_ptr) {
    var ret = wasm$1.compute_step_size_3d(ctx_ptr);
    return ret;
  }

  function getObject$1(idx) {
    return heap$1[idx];
  }

  function dropObject$1(idx) {
    if (idx < 132) return;
    heap$1[idx] = heap_next$1;
    heap_next$1 = idx;
  }

  function takeObject$1(idx) {
    var ret = getObject$1(idx);
    dropObject$1(idx);
    return ret;
  }
  /**
  * @returns {any}
  */

  function get_memory$1() {
    var ret = wasm$1.get_memory();
    return takeObject$1(ret);
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_D_2d$1(ctx) {
    var ret = wasm$1.get_D_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_D_3d$1(ctx) {
    var ret = wasm$1.get_D_3d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_g_2d$1(ctx) {
    var ret = wasm$1.get_g_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @returns {number}
  */

  function get_g_3d$1(ctx) {
    var ret = wasm$1.get_D_2d(ctx);
    return ret;
  }
  /**
  * @param {number} ctx
  * @param {Float32Array} new_G
  */

  function set_G_2d$1(ctx, new_G) {
    var ptr0 = passArrayF32ToWasm0$1(new_G, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    wasm$1.set_G_2d(ctx, ptr0, len0);
  }
  /**
  * @param {number} ctx
  * @param {Float32Array} new_G
  */

  function set_G_3d$1(ctx, new_G) {
    var ptr0 = passArrayF32ToWasm0$1(new_G, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN$1;
    wasm$1.set_G_3d(ctx, ptr0, len0);
  }
  function __wbindgen_memory$1() {
    var ret = wasm$1.memory;
    return addHeapObject$1(ret);
  }

  var wasmNoSIMD = {
    __proto__: null,
    setWasm: setWasm$1,
    getWasm: getWasm$1,
    __wbg_set_wasm: __wbg_set_wasm$1,
    release_ctx_2d: release_ctx_2d$1,
    create_derivative_computer_ctx_2d: create_derivative_computer_ctx_2d$1,
    create_derivative_computer_ctx_3d: create_derivative_computer_ctx_3d$1,
    compute_2d: compute_2d$1,
    compute_3d: compute_3d$1,
    apply_lock_2d: apply_lock_2d$1,
    apply_lock_3d: apply_lock_3d$1,
    compute_step_size_2d: compute_step_size_2d$1,
    compute_step_size_3d: compute_step_size_3d$1,
    get_memory: get_memory$1,
    get_D_2d: get_D_2d$1,
    get_D_3d: get_D_3d$1,
    get_g_2d: get_g_2d$1,
    get_g_3d: get_g_3d$1,
    set_G_2d: set_G_2d$1,
    set_G_3d: set_G_3d$1,
    __wbindgen_memory: __wbindgen_memory$1
  };

  /**
   * Loads the WebAssembly module that performs the derivative computations for `descent.ts`
   */

  var getHasSIMDSupport = function getHasSIMDSupport() {
    try {
      return Promise.resolve(WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11])));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var AsyncOnce = /*#__PURE__*/function () {
    function AsyncOnce(getter) {
      this.pending = null;
      this.getter = getter;
    }

    var _proto = AsyncOnce.prototype;

    _proto.get = function get() {
      try {
        var _this2 = this;

        if (_this2.res) {
          return Promise.resolve(_this2.res.value);
        }

        if (_this2.pending) {
          return Promise.resolve(_this2.pending);
        }

        _this2.pending = new Promise(function (resolve) {
          return _this2.getter().then(function (res) {
            _this2.res = {
              value: res
            };
            _this2.pending = null;
            resolve(res);
          });
        });
        return Promise.resolve(_this2.pending);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    return AsyncOnce;
  }();

  var WasmInst = /*#__PURE__*/new AsyncOnce(function () {
    try {
      return Promise.resolve(getHasSIMDSupport()).then(function (hasWasmSIMDSupport) {
        if (!window.location.href.includes('localhost')) {
          console.log(hasWasmSIMDSupport ? 'Wasm SIMD support detected!' : 'Wasm SIMD support NOT detected; using non-SIMD Wasm');
        }

        if (hasWasmSIMDSupport) {
          return Promise.resolve(wasmSIMD_bg()).then(function (wasmModule) {
            setWasm(wasmModule);
            return wasmSIMD;
          });
        } else {
          return Promise.resolve(wasmNoSIMD_bg()).then(function (wasmModule) {
            setWasm$1(wasmModule);
            return wasmNoSIMD;
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  });
  var getDerivativeComputerWasm = function getDerivativeComputerWasm() {
    return WasmInst.get();
  };

  var wasmInstPromise = /*#__PURE__*/getDerivativeComputerWasm();

  (function (EventType) {
    EventType[EventType["start"] = 0] = "start";
    EventType[EventType["tick"] = 1] = "tick";
    EventType[EventType["end"] = 2] = "end";
  })(exports.EventType || (exports.EventType = {}));

  function isGroup(g) {
    return typeof g.leaves !== 'undefined' || typeof g.groups !== 'undefined';
  }
  /**
   * Main interface to cola layout.
   * @class Layout
   */

  var Layout = /*#__PURE__*/function () {
    function Layout() {
      var _this = this;

      this._canvasSize = [1, 1];
      this._linkDistance = 20;
      this._defaultNodeSize = 10;
      this._linkLengthCalculator = null;
      this._linkType = null;
      this._avoidOverlaps = false;
      this._handleDisconnected = true;
      this._running = false;
      this._nodes = [];
      this._groups = [];
      this._rootGroup = null;
      this._links = [];
      this._constraints = [];
      this._distanceMatrix = null;
      this._descent = null;
      this._directedLinkConstraints = null;
      this._threshold = 0.01;
      this._visibilityGraph = null;
      this._groupCompactness = 1e-6; // sub-class and override this property to replace with a more sophisticated eventing mechanism

      this.event = null;
      this.linkAccessor = {
        getSourceIndex: Layout.getSourceIndex,
        getTargetIndex: Layout.getTargetIndex,
        setLength: Layout.setLinkLength,
        getType: function getType(l) {
          return typeof _this._linkType === "function" ? _this._linkType(l) : 0;
        }
      };
    } // subscribe a listener to an event
    // sub-class and override this method to replace with a more sophisticated eventing mechanism


    var _proto = Layout.prototype;

    _proto.on = function on(e, listener) {
      // override me!
      if (!this.event) this.event = {};

      if (typeof e === 'string') {
        this.event[exports.EventType[e]] = listener;
      } else {
        this.event[e] = listener;
      }

      return this;
    } // a function that is notified of events like "tick"
    // sub-classes can override this method to replace with a more sophisticated eventing mechanism
    ;

    _proto.trigger = function trigger(e) {
      if (this.event && typeof this.event[e.type] !== 'undefined') {
        this.event[e.type](e);
      }
    } // a function that kicks off the iteration tick loop
    // it calls tick() repeatedly until tick returns true (is converged)
    // subclass and override it with something fancier (e.g. dispatch tick on a timer)
    ;

    _proto.kick = function kick() {
      while (!this.tick()) {}
    }
    /**
     * iterate the layout.  Returns true when layout converged.
     */
    ;

    _proto.tick = function tick() {
      if (this._alpha < this._threshold) {
        this._running = false;
        this.trigger({
          type: exports.EventType.end,
          alpha: this._alpha = 0,
          stress: this._lastStress
        });
        return true;
      }

      var n = this._nodes.length;
      var o, i;

      this._descent.locks.clear();

      for (i = 0; i < n; ++i) {
        o = this._nodes[i];

        if (o.fixed) {
          if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
            o.px = o.x;
            o.py = o.y;
          }

          var p = [o.px, o.py];

          this._descent.locks.add(i, p);
        }
      }

      var s1 = this._descent.rungeKutta(); //var s1 = descent.reduceStress();


      if (s1 === 0) {
        this._alpha = 0;
      } else if (typeof this._lastStress !== 'undefined') {
        this._alpha = s1; //Math.abs(Math.abs(this._lastStress / s1) - 1);
      }

      this._lastStress = s1;
      this.updateNodePositions();
      this.trigger({
        type: exports.EventType.tick,
        alpha: this._alpha,
        stress: this._lastStress
      });
      return false;
    } // copy positions out of descent instance into each of the nodes' center coords
    ;

    _proto.updateNodePositions = function updateNodePositions() {
      var x = this._descent.x[0],
          y = this._descent.x[1];
      var o,
          i = this._nodes.length;

      while (i--) {
        o = this._nodes[i];
        o.x = x[i];
        o.y = y[i];
      }
    };

    _proto.nodes = function nodes(v) {
      if (!v) {
        if (this._nodes.length === 0 && this._links.length > 0) {
          // if we have links but no nodes, create the nodes array now with empty objects for the links to point at.
          // in this case the links are expected to be numeric indices for nodes in the range 0..n-1 where n is the number of nodes
          var n = 0;

          this._links.forEach(function (l) {
            n = Math.max(n, l.source, l.target);
          });

          this._nodes = new Array(++n);

          for (var i = 0; i < n; ++i) {
            this._nodes[i] = {};
          }
        }

        return this._nodes;
      }

      this._nodes = v;
      return this;
    };

    _proto.groups = function groups(x) {
      var _this2 = this;

      if (!x) return this._groups;
      this._groups = x;
      this._rootGroup = {};

      this._groups.forEach(function (g) {
        if (typeof g.padding === "undefined") g.padding = 1;

        if (typeof g.leaves !== "undefined") {
          g.leaves.forEach(function (v, i) {
            if (typeof v === 'number') (g.leaves[i] = _this2._nodes[v]).parent = g;
          });
        }

        if (typeof g.groups !== "undefined") {
          g.groups.forEach(function (gi, i) {
            if (typeof gi === 'number') (g.groups[i] = _this2._groups[gi]).parent = g;
          });
        }
      });

      this._rootGroup.leaves = this._nodes.filter(function (v) {
        return typeof v.parent === 'undefined';
      });
      this._rootGroup.groups = this._groups.filter(function (g) {
        return typeof g.parent === 'undefined';
      });
      return this;
    };

    _proto.powerGraphGroups = function powerGraphGroups(f) {
      var g = getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
      this.groups(g.groups);
      f(g);
      return this;
    };

    _proto.avoidOverlaps = function avoidOverlaps(v) {
      if (!arguments.length) return this._avoidOverlaps;
      this._avoidOverlaps = v;
      return this;
    };

    _proto.handleDisconnected = function handleDisconnected(v) {
      if (!arguments.length) return this._handleDisconnected;
      this._handleDisconnected = v;
      return this;
    }
    /**
     * causes constraints to be generated such that directed graphs are laid out either from left-to-right or top-to-bottom.
     * a separation constraint is generated in the selected axis for each edge that is not involved in a cycle (part of a strongly connected component)
     * @param axis {string} 'x' for left-to-right, 'y' for top-to-bottom
     * @param minSeparation {number|link=>number} either a number specifying a minimum spacing required across all links or a function to return the minimum spacing for each link
     */
    ;

    _proto.flowLayout = function flowLayout(axis, minSeparation) {
      if (!arguments.length) axis = 'y';
      this._directedLinkConstraints = {
        axis: axis,
        getMinSeparation: typeof minSeparation === 'number' ? function () {
          return minSeparation;
        } : minSeparation
      };
      return this;
    };

    _proto.links = function links(x) {
      if (!arguments.length) return this._links;
      this._links = x;
      return this;
    };

    _proto.constraints = function constraints(c) {
      if (!arguments.length) return this._constraints;
      this._constraints = c;
      return this;
    };

    _proto.distanceMatrix = function distanceMatrix(d) {
      if (!arguments.length) return this._distanceMatrix;
      this._distanceMatrix = d;
      return this;
    };

    _proto.size = function size(x) {
      if (!x) return this._canvasSize;
      this._canvasSize = x;
      return this;
    };

    _proto.defaultNodeSize = function defaultNodeSize(x) {
      if (!x) return this._defaultNodeSize;
      this._defaultNodeSize = x;
      return this;
    };

    _proto.groupCompactness = function groupCompactness(x) {
      if (!x) return this._groupCompactness;
      this._groupCompactness = x;
      return this;
    };

    _proto.linkDistance = function linkDistance(x) {
      if (!x) {
        return this._linkDistance;
      }

      this._linkDistance = typeof x === "function" ? x : +x;
      this._linkLengthCalculator = null;
      return this;
    };

    _proto.linkType = function linkType(f) {
      this._linkType = f;
      return this;
    };

    _proto.convergenceThreshold = function convergenceThreshold(x) {
      if (!x) return this._threshold;
      this._threshold = typeof x === "function" ? x : +x;
      return this;
    };

    _proto.alpha = function alpha(x) {
      if (!arguments.length) return this._alpha;else {
        x = +x;

        if (this._alpha) {
          // if we're already running
          if (x > 0) this._alpha = x; // we might keep it hot
          else this._alpha = 0; // or, next tick will dispatch "end"
        } else if (x > 0) {
          // otherwise, fire it up!
          if (!this._running) {
            this._running = true;
            this.trigger({
              type: exports.EventType.start,
              alpha: this._alpha = x
            });
            this.kick();
          }
        }

        return this;
      }
    };

    _proto.getLinkLength = function getLinkLength(link) {
      return typeof this._linkDistance === "function" ? +this._linkDistance(link) : this._linkDistance;
    };

    Layout.setLinkLength = function setLinkLength(link, length) {
      link.length = length;
    };

    _proto.getLinkType = function getLinkType(link) {
      return typeof this._linkType === "function" ? this._linkType(link) : 0;
    }
    /**
     * compute an ideal length for each link based on the graph structure around that link.
     * you can use this (for example) to create extra space around hub-nodes in dense graphs.
     * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
     * i.e. if neighbours of source is a and neighbours of target are b then calculation is: sqrt(|a union b| - |a intersection b|)
     * Actual computation based on inspection of link structure occurs in start(), so links themselves
     * don't have to have been assigned before invoking this function.
     * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
     * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
     */
    ;

    _proto.symmetricDiffLinkLengths = function symmetricDiffLinkLengths$1(idealLength, w) {
      var _this3 = this;

      if (w === void 0) {
        w = 1;
      }

      this.linkDistance(function (l) {
        return idealLength * l.length;
      });

      this._linkLengthCalculator = function () {
        return symmetricDiffLinkLengths(_this3._links, _this3.linkAccessor, w);
      };

      return this;
    }
    /**
     * compute an ideal length for each link based on the graph structure around that link.
     * you can use this (for example) to create extra space around hub-nodes in dense graphs.
     * In particular this calculation is based on the "symmetric difference" in the neighbour sets of the source and target:
     * i.e. if neighbours of source is a and neighbours of target are b then calculation is: |a intersection b|/|a union b|
     * Actual computation based on inspection of link structure occurs in start(), so links themselves
     * don't have to have been assigned before invoking this function.
     * @param {number} [idealLength] the base length for an edge when its source and start have no other common neighbours (e.g. 40)
     * @param {number} [w] a multiplier for the effect of the length adjustment (e.g. 0.7)
     */
    ;

    _proto.jaccardLinkLengths = function jaccardLinkLengths$1(idealLength, w) {
      var _this4 = this;

      if (w === void 0) {
        w = 1;
      }

      this.linkDistance(function (l) {
        return idealLength * l.length;
      });

      this._linkLengthCalculator = function () {
        return jaccardLinkLengths(_this4._links, _this4.linkAccessor, w);
      };

      return this;
    }
    /**
     * start the layout process
     * @method start
     * @param {number} [initialUnconstrainedIterations=0] unconstrained initial layout iterations
     * @param {number} [initialUserConstraintIterations=0] initial layout iterations with user-specified constraints
     * @param {number} [initialAllConstraintsIterations=0] initial layout iterations with all constraints including non-overlap
     * @param {number} [gridSnapIterations=0] iterations of "grid snap", which pulls nodes towards grid cell centers - grid of size node[0].width - only really makes sense if all nodes have the same width and height
     * @param [keepRunning=true] keep iterating shronously via the tick method
     * @param [centerGraph=true] Center graph on restart
     */
    ;

    _proto.start = function start(initialUnconstrainedIterations, initialUserConstraintIterations, initialAllConstraintsIterations, gridSnapIterations, keepRunning, centerGraph) {
      if (initialUnconstrainedIterations === void 0) {
        initialUnconstrainedIterations = 0;
      }

      if (initialUserConstraintIterations === void 0) {
        initialUserConstraintIterations = 0;
      }

      if (initialAllConstraintsIterations === void 0) {
        initialAllConstraintsIterations = 0;
      }

      if (keepRunning === void 0) {
        keepRunning = true;
      }

      if (centerGraph === void 0) {
        centerGraph = true;
      }

      try {
        var _this6 = this;

        var i, j, n, N, m, w, h, i, i;
        n = _this6.nodes().length;
        N = n + 2 * _this6._groups.length;
        m = _this6._links.length;
        w = _this6._canvasSize[0];
        h = _this6._canvasSize[1];
        var x = new Array(N),
            y = new Array(N);
        var G = null;
        var ao = _this6._avoidOverlaps;

        _this6._nodes.forEach(function (v, i) {
          v.index = i;

          if (typeof v.x === 'undefined') {
            v.x = w / 2, v.y = h / 2;
          }

          x[i] = v.x, y[i] = v.y;
        });

        if (_this6._linkLengthCalculator) _this6._linkLengthCalculator(); //should we do this to clearly label groups?
        //this._groups.forEach((g, i) => g.groupIndex = i);

        var distances;

        if (_this6._distanceMatrix) {
          // use the user specified distanceMatrix
          distances = _this6._distanceMatrix;
        } else {
          // construct an n X n distance matrix based on shortest paths through graph (with respect to edge.length).
          distances = new Calculator(N, _this6._links, Layout.getSourceIndex, Layout.getTargetIndex, function (l) {
            return _this6.getLinkLength(l);
          }).DistanceMatrix(); // G is a square matrix with G[i][j] = 1 iff there exists an edge between node i and node j
          // otherwise 2. (

          G = Descent.createSquareMatrix(N, function () {
            return 2;
          });

          _this6._links.forEach(function (l) {
            if (typeof l.source == "number") l.source = _this6._nodes[l.source];
            if (typeof l.target == "number") l.target = _this6._nodes[l.target];
          });

          _this6._links.forEach(function (e) {
            var u = Layout.getSourceIndex(e),
                v = Layout.getTargetIndex(e);
            G[u][v] = G[v][u] = e.weight || 1;
          });
        }

        var D = Descent.createSquareMatrix(N, function (i, j) {
          return distances[i][j];
        });

        if (_this6._rootGroup && typeof _this6._rootGroup.groups !== 'undefined') {
          i = n;

          var addAttraction = function addAttraction(i, j, strength, idealDistance) {
            G[i][j] = G[j][i] = strength;
            D[i][j] = D[j][i] = idealDistance;
          };

          _this6._groups.forEach(function (g) {
            addAttraction(i, i + 1, _this6._groupCompactness, 0.1); // todo: add terms here attracting children of the group to the group dummy nodes
            //if (typeof g.leaves !== 'undefined')
            //    g.leaves.forEach(l => {
            //        addAttraction(l.index, i, 1e-4, 0.1);
            //        addAttraction(l.index, i + 1, 1e-4, 0.1);
            //    });
            //if (typeof g.groups !== 'undefined')
            //    g.groups.forEach(g => {
            //        var gid = n + g.groupIndex * 2;
            //        addAttraction(gid, i, 0.1, 0.1);
            //        addAttraction(gid + 1, i, 0.1, 0.1);
            //        addAttraction(gid, i + 1, 0.1, 0.1);
            //        addAttraction(gid + 1, i + 1, 0.1, 0.1);
            //    });

            if (typeof g.bounds === 'undefined') {
              x[i] = w / 2, y[i++] = h / 2;
              x[i] = w / 2, y[i++] = h / 2;
            } else {
              x[i] = g.bounds.x, y[i++] = g.bounds.y;
              x[i] = g.bounds.X, y[i++] = g.bounds.Y;
            }
          });
        } else _this6._rootGroup = {
          leaves: _this6._nodes,
          groups: []
        };

        var curConstraints = _this6._constraints || [];

        if (_this6._directedLinkConstraints) {
          _this6.linkAccessor.getMinSeparation = _this6._directedLinkConstraints.getMinSeparation;
          curConstraints = curConstraints.concat(generateDirectedEdgeConstraints(n, _this6._links, _this6._directedLinkConstraints.axis, _this6.linkAccessor)); // todo: add containment constraints between group dummy nodes and their children
        }

        _this6.avoidOverlaps(false);

        return Promise.resolve(wasmInstPromise).then(function (wasmInst) {
          _this6._descent = new Descent([x, y], D, undefined, wasmInst);

          _this6._descent.locks.clear();

          for (i = 0; i < n; ++i) {
            var o = _this6._nodes[i];

            if (o.fixed) {
              o.px = o.x;
              o.py = o.y;
              var p = [o.x, o.y];

              _this6._descent.locks.add(i, p);
            }
          }

          _this6._descent.threshold = _this6._threshold; // apply initialIterations without user constraints or nonoverlap constraints
          // if groups are specified, dummy nodes and edges will be added to untangle
          // with respect to group connectivity

          _this6.initialLayout(initialUnconstrainedIterations, x, y); // apply initialIterations with user constraints but no nonoverlap constraints


          if (curConstraints.length > 0) _this6._descent.project = new Projection(_this6._nodes, _this6._groups, _this6._rootGroup, curConstraints).projectFunctions();

          _this6._descent.run(initialUserConstraintIterations);

          _this6.separateOverlappingComponents(w, h, centerGraph); // subsequent iterations will apply all constraints


          _this6.avoidOverlaps(ao);

          if (ao) {
            _this6._nodes.forEach(function (v, i) {
              v.x = x[i], v.y = y[i];
            });

            _this6._descent.project = new Projection(_this6._nodes, _this6._groups, _this6._rootGroup, curConstraints, true).projectFunctions();

            _this6._nodes.forEach(function (v, i) {
              x[i] = v.x, y[i] = v.y;
            });
          } // allow not immediately connected nodes to relax apart (p-stress)


          _this6._descent.G = G;

          _this6._descent.run(initialAllConstraintsIterations); // TODO
          // if (gridSnapIterations) {
          //     this._descent.snapStrength = 1000;
          //     this._descent.snapGridSize = this._nodes[0].width;
          //     this._descent.numGridSnapNodes = n;
          //     this._descent.scaleSnapByMaxH = n != N; // if we have groups then need to scale hessian so grid forces still apply
          //     var G0 = Descent.createSquareMatrix(N,(i, j) => {
          //         if (i >= n || j >= n) return G[i][j];
          //         return 0
          //     });
          //     this._descent.G = G0;
          //     this._descent.run(gridSnapIterations);
          // }


          _this6.updateNodePositions();

          _this6.separateOverlappingComponents(w, h, centerGraph);

          return keepRunning ? _this6.resume() : _this6;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _proto.initialLayout = function initialLayout(iterations, x, y) {
      if (this._groups.length > 0 && iterations > 0) {
        // construct a flat graph with dummy nodes for the groups and edges connecting group dummy nodes to their children
        // todo: edges attached to groups are replaced with edges connected to the corresponding group dummy node
        var n = this._nodes.length;

        var edges = this._links.map(function (e) {
          return {
            source: e.source.index,
            target: e.target.index
          };
        });

        var vs = this._nodes.map(function (v) {
          return {
            index: v.index
          };
        });

        this._groups.forEach(function (g, i) {
          vs.push({
            index: g.index = n + i
          });
        });

        this._groups.forEach(function (g, i) {
          if (typeof g.leaves !== 'undefined') g.leaves.forEach(function (v) {
            return edges.push({
              source: g.index,
              target: v.index
            });
          });
          if (typeof g.groups !== 'undefined') g.groups.forEach(function (gg) {
            return edges.push({
              source: g.index,
              target: gg.index
            });
          });
        }); // layout the flat graph with dummy nodes and edges


        new Layout().size(this.size()).nodes(vs).links(edges).avoidOverlaps(false).linkDistance(this.linkDistance()).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(iterations, 0, 0, 0, false);

        this._nodes.forEach(function (v) {
          x[v.index] = vs[v.index].x;
          y[v.index] = vs[v.index].y;
        });
      } else {
        this._descent.run(iterations);
      }
    } // recalculate nodes position for disconnected graphs
    ;

    _proto.separateOverlappingComponents = function separateOverlappingComponents(width, height, centerGraph) {
      var _this7 = this;

      if (centerGraph === void 0) {
        centerGraph = true;
      }

      // recalculate nodes position for disconnected graphs
      if (!this._distanceMatrix && this._handleDisconnected) {
        var x = this._descent.x[0],
            y = this._descent.x[1];

        this._nodes.forEach(function (v, i) {
          v.x = x[i], v.y = y[i];
        });

        var graphs = separateGraphs(this._nodes, this._links);
        applyPacking(graphs, width, height, this._defaultNodeSize, 1, centerGraph);

        this._nodes.forEach(function (v, i) {
          _this7._descent.x[0][i] = v.x, _this7._descent.x[1][i] = v.y;

          if (v.bounds) {
            v.bounds.setXCentre(v.x);
            v.bounds.setYCentre(v.y);
          }
        });
      }
    };

    _proto.resume = function resume() {
      return this.alpha(0.1);
    };

    _proto.pause = function pause() {
      return this.alpha(0);
    };

    _proto.stop = function stop() {
      if (this._descent) {
        this._descent.cleanWasmMemory();
      }

      return this.alpha(0);
    } /// find a visibility graph over the set of nodes.  assumes all nodes have a
    /// bounds property (a rectangle) and that no pair of bounds overlaps.
    ;

    _proto.prepareEdgeRouting = function prepareEdgeRouting(nodeMargin) {
      if (nodeMargin === void 0) {
        nodeMargin = 0;
      }

      this._visibilityGraph = new TangentVisibilityGraph(this._nodes.map(function (v) {
        return v.bounds.inflate(-nodeMargin).vertices();
      }));
    }
    /**
     * find a route avoiding node bounds for the given edge.
     * assumes the visibility graph has been created (by prepareEdgeRouting method)
     * and also assumes that nodes have an index property giving their position in the
     * node array.  This index property is created by the start() method.
     * @param [edge] The edge to generate a route for.
     * @param {number} [ah] The size of the arrow head, a distance to shorten the end
     *                      of the edge by.  Defaults to 5.
     */
    ;

    _proto.routeEdge = function routeEdge(edge, ah, draw) {
      if (ah === void 0) {
        ah = 5;
      }

      var lineData = []; //if (d.source.id === 10 && d.target.id === 11) {
      //    debugger;
      //}

      var vg2 = new TangentVisibilityGraph(this._visibilityGraph.P, {
        V: this._visibilityGraph.V,
        E: this._visibilityGraph.E
      }),
          port1 = {
        x: edge.source.x,
        y: edge.source.y
      },
          port2 = {
        x: edge.target.x,
        y: edge.target.y
      },
          start = vg2.addPoint(port1, edge.source.index),
          end = vg2.addPoint(port2, edge.target.index);
      vg2.addEdgeIfVisible(port1, port2, edge.source.index, edge.target.index);

      if (typeof draw !== 'undefined') {
        draw(vg2);
      }

      var sourceInd = function sourceInd(e) {
        return e.source.id;
      },
          targetInd = function targetInd(e) {
        return e.target.id;
      },
          length = function length(e) {
        return e.length();
      },
          spCalc = new Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length),
          shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);

      if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
        var route = makeEdgeBetween(edge.source.innerBounds, edge.target.innerBounds, ah);
        lineData = [route.sourceIntersection, route.arrowStart];
      } else {
        var n = shortestPath.length - 2,
            p = vg2.V[shortestPath[n]].p,
            q = vg2.V[shortestPath[0]].p,
            lineData = [edge.source.innerBounds.rayIntersection(p.x, p.y)];

        for (var i = n; i >= 0; --i) {
          lineData.push(vg2.V[shortestPath[i]].p);
        }

        lineData.push(makeEdgeTo(q, edge.target.innerBounds, ah));
      } //lineData.forEach((v, i) => {
      //    if (i > 0) {
      //        var u = lineData[i - 1];
      //        this._nodes.forEach(function (node) {
      //            if (node.id === getSourceIndex(d) || node.id === getTargetIndex(d)) return;
      //            var ints = node.innerBounds.lineIntersections(u.x, u.y, v.x, v.y);
      //            if (ints.length > 0) {
      //                debugger;
      //            }
      //        })
      //    }
      //})


      return lineData;
    } //The link source and target may be just a node index, or they may be references to nodes themselves.
    ;

    Layout.getSourceIndex = function getSourceIndex(e) {
      return typeof e.source === 'number' ? e.source : e.source.index;
    } //The link source and target may be just a node index, or they may be references to nodes themselves.
    ;

    Layout.getTargetIndex = function getTargetIndex(e) {
      return typeof e.target === 'number' ? e.target : e.target.index;
    } // Get a string ID for a given link.
    ;

    Layout.linkId = function linkId(e) {
      return Layout.getSourceIndex(e) + "-" + Layout.getTargetIndex(e);
    } // The fixed property has three bits:
    // Bit 1 can be set externally (e.g., d.fixed = true) and show persist.
    // Bit 2 stores the dragging state, from mousedown to mouseup.
    // Bit 3 stores the hover state, from mouseover to mouseout.
    ;

    Layout.dragStart = function dragStart(d) {
      if (isGroup(d)) {
        Layout.storeOffset(d, Layout.dragOrigin(d));
      } else {
        Layout.stopNode(d);
        d.fixed |= 2; // set bit 2
      }
    } // we clobber any existing desired positions for nodes
    // in case another tick event occurs before the drag
    ;

    Layout.stopNode = function stopNode(v) {
      v.px = v.x;
      v.py = v.y;
    } // we store offsets for each node relative to the centre of the ancestor group
    // being dragged in a pair of properties on the node
    ;

    Layout.storeOffset = function storeOffset(d, origin) {
      if (typeof d.leaves !== 'undefined') {
        d.leaves.forEach(function (v) {
          v.fixed |= 2;
          Layout.stopNode(v);
          v._dragGroupOffsetX = v.x - origin.x;
          v._dragGroupOffsetY = v.y - origin.y;
        });
      }

      if (typeof d.groups !== 'undefined') {
        d.groups.forEach(function (g) {
          return Layout.storeOffset(g, origin);
        });
      }
    } // the drag origin is taken as the centre of the node or group
    ;

    Layout.dragOrigin = function dragOrigin(d) {
      if (isGroup(d)) {
        return {
          x: d.bounds.cx(),
          y: d.bounds.cy()
        };
      } else {
        return d;
      }
    } // for groups, the drag translation is propagated down to all of the children of
    // the group.
    ;

    Layout.drag = function drag(d, position) {
      if (isGroup(d)) {
        if (typeof d.leaves !== 'undefined') {
          d.leaves.forEach(function (v) {
            d.bounds.setXCentre(position.x);
            d.bounds.setYCentre(position.y);
            v.px = v._dragGroupOffsetX + position.x;
            v.py = v._dragGroupOffsetY + position.y;
          });
        }

        if (typeof d.groups !== 'undefined') {
          d.groups.forEach(function (g) {
            return Layout.drag(g, position);
          });
        }
      } else {
        d.px = position.x;
        d.py = position.y;
      }
    } // we unset only bits 2 and 3 so that the user can fix nodes with another a different
    // bit such that the lock persists between drags
    ;

    Layout.dragEnd = function dragEnd(d) {
      if (isGroup(d)) {
        if (typeof d.leaves !== 'undefined') {
          d.leaves.forEach(function (v) {
            Layout.dragEnd(v);
            delete v._dragGroupOffsetX;
            delete v._dragGroupOffsetY;
          });
        }

        if (typeof d.groups !== 'undefined') {
          d.groups.forEach(Layout.dragEnd);
        }
      } else {
        d.fixed &= ~6; // unset bits 2 and 3
        //d.fixed = 0;
      }
    } // in d3 hover temporarily locks nodes, currently not used in cola
    ;

    Layout.mouseOver = function mouseOver(d) {
      d.fixed |= 4; // set bit 3

      d.px = d.x, d.py = d.y; // set velocity to zero
    } // in d3 hover temporarily locks nodes, currently not used in cola
    ;

    Layout.mouseOut = function mouseOut(d) {
      d.fixed &= ~4; // unset bit 3
    };

    return Layout;
  }();

  var LayoutAdaptor = /*#__PURE__*/function (_Layout) {
    _inheritsLoose(LayoutAdaptor, _Layout);

    function LayoutAdaptor(options) {
      var _this;

      _this = _Layout.call(this) || this; // take in implementation as defined by client

      var self = _assertThisInitialized(_this);

      var o = options;

      if (o.trigger) {
        _this.trigger = o.trigger;
      }

      if (o.kick) {
        _this.kick = o.kick;
      }

      if (o.drag) {
        _this.drag = o.drag;
      }

      if (o.on) {
        _this.on = o.on;
      }

      _this.dragstart = _this.dragStart = Layout.dragStart;
      _this.dragend = _this.dragEnd = Layout.dragEnd;
      return _this;
    } // dummy functions in case not defined by client


    var _proto = LayoutAdaptor.prototype;

    _proto.trigger = function trigger(e) {};

    _proto.kick = function kick() {};

    _proto.drag = function drag() {};

    _proto.on = function on(eventType, listener) {
      return this;
    };

    return LayoutAdaptor;
  }(Layout);
  /**
   * provides an interface for use with any external graph system (e.g. Cytoscape.js):
   */

  function adaptor(options) {
    return new LayoutAdaptor(options);
  }

  /**
   * @internal
   */

  var D3StyleLayoutAdaptor = /*#__PURE__*/function (_Layout) {
    _inheritsLoose(D3StyleLayoutAdaptor, _Layout);

    function D3StyleLayoutAdaptor(d3Context) {
      var _this;

      if (d3Context === void 0) {
        d3Context = self.d3;
      }

      _this = _Layout.call(this) || this;
      _this.d3Context = d3Context;
      _this.event = d3Context.dispatch(exports.EventType[exports.EventType.start], exports.EventType[exports.EventType.tick], exports.EventType[exports.EventType.end]); // bit of trickyness remapping 'this' so we can reference it in the function body.

      var d3layout = _assertThisInitialized(_this);

      _this.drag = function () {
        if (!drag) {
          var drag = d3Context.behavior.drag().origin(Layout.dragOrigin).on("dragstart.d3adaptor", Layout.dragStart).on("drag.d3adaptor", function (d) {
            Layout.drag(d, d3layout.d3Context.event);
            d3layout.resume(); // restart annealing
          }).on("dragend.d3adaptor", Layout.dragEnd);
        }

        if (!arguments.length) return drag; // this is the context of the function, i.e. the d3 selection

        this //.on("mouseover.adaptor", colaMouseover)
        //.on("mouseout.adaptor", colaMouseout)
        .call(drag);
      };

      return _this;
    }

    var _proto = D3StyleLayoutAdaptor.prototype;

    _proto.trigger = function trigger(e) {
      var d3event = {
        type: exports.EventType[e.type],
        alpha: e.alpha,
        stress: e.stress
      };
      this.event[d3event.type](d3event); // via d3 dispatcher, e.g. event.start(e);
    } // iterate layout using a d3.timer, which queues calls to tick repeatedly until tick returns true
    ;

    _proto.kick = function kick() {
      var _this2 = this;

      this.d3Context.timer(function () {
        return _Layout.prototype.tick.call(_this2);
      });
    } // a function for binding to events on the adapter
    ;

    _proto.on = function on(eventType, listener) {
      if (typeof eventType === 'string') {
        this.event.on(eventType, listener);
      } else {
        this.event.on(exports.EventType[eventType], listener);
      }

      return this;
    };

    return D3StyleLayoutAdaptor;
  }(Layout);

  /**
   * @internal
   */

  var D3v4StyleLayoutAdaptor = /*#__PURE__*/function (_Layout) {
    _inheritsLoose(D3v4StyleLayoutAdaptor, _Layout);

    function D3v4StyleLayoutAdaptor(d3Context) {
      var _this;

      _this = _Layout.call(this) || this;
      _this.d3Context = d3Context;
      _this.event = d3Context.dispatch(exports.EventType[exports.EventType.start], exports.EventType[exports.EventType.tick], exports.EventType[exports.EventType.end]); // bit of trickyness remapping 'this' so we can reference it in the function body.

      var d3layout = _assertThisInitialized(_this);

      _this.drag = function () {
        if (!drag) {
          var drag = d3Context.drag().subject(Layout.dragOrigin).on("start.d3adaptor", Layout.dragStart).on("drag.d3adaptor", function (d) {
            Layout.drag(d, d3Context.event);
            d3layout.resume(); // restart annealing
          }).on("end.d3adaptor", Layout.dragEnd);
        }

        if (!arguments.length) return drag; // this is the context of the function, i.e. the d3 selection
        //this//.on("mouseover.adaptor", colaMouseover)
        //.on("mouseout.adaptor", colaMouseout)

        arguments[0].call(drag);
      };

      return _this;
    }

    var _proto = D3v4StyleLayoutAdaptor.prototype;

    _proto.trigger = function trigger(e) {
      var d3event = {
        type: exports.EventType[e.type],
        alpha: e.alpha,
        stress: e.stress
      }; // the dispatcher is actually expecting something of type EventTarget as the second argument
      // so passing the thing above is totally abusing the pattern... not sure what to do about this yet

      this.event.call(d3event.type, d3event); // via d3 dispatcher, e.g. event.start(e);
    } // iterate layout using a d3.timer, which queues calls to tick repeatedly until tick returns true
    ;

    _proto.kick = function kick() {
      var _this2 = this;

      var t = this.d3Context.timer(function () {
        return _Layout.prototype.tick.call(_this2) && t.stop();
      });
    } // a function for binding to events on the adapter
    ;

    _proto.on = function on(eventType, listener) {
      if (typeof eventType === 'string') {
        this.event.on(eventType, listener);
      } else {
        this.event.on(exports.EventType[eventType], listener);
      }

      return this;
    };

    return D3v4StyleLayoutAdaptor;
  }(Layout);

  /**
   * provides an interface for use with d3:
   * Correct way to create way to construct the d3 cola object is to pass the d3 object into the adaptor function, like so:
   *
   *   `var d3cola = cola.d3adaptor(d3);`
   *
   * Internally, it will figure out if d3 is version 3 or 4 from the version tag and set up the right event forwarding. Defaults to version 3 if the d3 object is not passed.
   * - uses the d3 event system to dispatch layout events such as:
   *   o "start" (start layout process)
   *   o "tick" (after each layout iteration)
   *   o "end" (layout converged and complete).
   * - uses the d3 timer to queue layout iterations.
   * - sets up d3.behavior.drag to drag nodes
   *   o use `node.call(<the returned instance of Layout>.drag)` to make nodes draggable
   * returns an instance of the cola.Layout itself with which the user
   * can interact directly.
   */

  function d3adaptor(d3Context) {
    if (!d3Context || isD3V3(d3Context)) {
      return new D3StyleLayoutAdaptor(d3Context);
    }

    return new D3v4StyleLayoutAdaptor(d3Context);
  }

  function isD3V3(d3Context) {
    var v3exp = /^3\./;
    return d3Context.version && d3Context.version.match(v3exp) !== null;
  }

  var NodeWrapper = function NodeWrapper(id, rect, children) {
    this.id = id;
    this.rect = rect;
    this.children = children;
    this.leaf = typeof children === 'undefined' || children.length === 0;
  };
  var Vert = function Vert(id, x, y, node, line) {
    if (node === void 0) {
      node = null;
    }

    if (line === void 0) {
      line = null;
    }

    this.id = id;
    this.x = x;
    this.y = y;
    this.node = node;
    this.line = line;
  };
  var LongestCommonSubsequence = /*#__PURE__*/function () {
    function LongestCommonSubsequence(s, t) {
      this.s = s;
      this.t = t;
      var mf = LongestCommonSubsequence.findMatch(s, t);
      var tr = t.slice(0).reverse();
      var mr = LongestCommonSubsequence.findMatch(s, tr);

      if (mf.length >= mr.length) {
        this.length = mf.length;
        this.si = mf.si;
        this.ti = mf.ti;
        this.reversed = false;
      } else {
        this.length = mr.length;
        this.si = mr.si;
        this.ti = t.length - mr.ti - mr.length;
        this.reversed = true;
      }
    }

    LongestCommonSubsequence.findMatch = function findMatch(s, t) {
      var m = s.length;
      var n = t.length;
      var match = {
        length: 0,
        si: -1,
        ti: -1
      };
      var l = new Array(m);

      for (var i = 0; i < m; i++) {
        l[i] = new Array(n);

        for (var j = 0; j < n; j++) {
          if (s[i] === t[j]) {
            var v = l[i][j] = i === 0 || j === 0 ? 1 : l[i - 1][j - 1] + 1;

            if (v > match.length) {
              match.length = v;
              match.si = i - v + 1;
              match.ti = j - v + 1;
            }
          } else l[i][j] = 0;
        }
      }

      return match;
    };

    var _proto = LongestCommonSubsequence.prototype;

    _proto.getSequence = function getSequence() {
      return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
    };

    return LongestCommonSubsequence;
  }();
  var GridRouter = /*#__PURE__*/function () {
    function GridRouter(originalnodes, accessor, groupPadding) {
      var _this = this;

      if (groupPadding === void 0) {
        groupPadding = 12;
      }

      this.originalnodes = originalnodes;
      this.groupPadding = groupPadding;
      this.leaves = null;
      this.nodes = originalnodes.map(function (v, i) {
        return new NodeWrapper(i, accessor.getBounds(v), accessor.getChildren(v));
      });
      this.leaves = this.nodes.filter(function (v) {
        return v.leaf;
      });
      this.groups = this.nodes.filter(function (g) {
        return !g.leaf;
      });
      this.cols = this.getGridLines('x');
      this.rows = this.getGridLines('y'); // create parents for each node or group that is a member of another's children

      this.groups.forEach(function (v) {
        return v.children.forEach(function (c) {
          return _this.nodes[c].parent = v;
        });
      }); // root claims the remaining orphans

      this.root = {
        children: []
      };
      this.nodes.forEach(function (v) {
        if (typeof v.parent === 'undefined') {
          v.parent = _this.root;

          _this.root.children.push(v.id);
        } // each node will have grid vertices associated with it,
        // some inside the node and some on the boundary
        // leaf nodes will have exactly one internal node at the center
        // and four boundary nodes
        // groups will have potentially many of each


        v.ports = [];
      }); // nodes ordered by their position in the group hierarchy

      this.backToFront = this.nodes.slice(0);
      this.backToFront.sort(function (x, y) {
        return _this.getDepth(x) - _this.getDepth(y);
      }); // compute boundary rectangles for each group
      // has to be done from front to back, i.e. inside groups to outside groups
      // such that each can be made large enough to enclose its interior

      var frontToBackGroups = this.backToFront.slice(0).reverse().filter(function (g) {
        return !g.leaf;
      });
      frontToBackGroups.forEach(function (v) {
        var r = Rectangle.empty();
        v.children.forEach(function (c) {
          return r = r.union(_this.nodes[c].rect);
        });
        v.rect = r.inflate(_this.groupPadding);
      });
      var colMids = this.midPoints(this.cols.map(function (r) {
        return r.pos;
      }));
      var rowMids = this.midPoints(this.rows.map(function (r) {
        return r.pos;
      })); // setup extents of lines

      var rowx = colMids[0],
          rowX = colMids[colMids.length - 1];
      var coly = rowMids[0],
          colY = rowMids[rowMids.length - 1]; // horizontal lines

      var hlines = this.rows.map(function (r) {
        return {
          x1: rowx,
          x2: rowX,
          y1: r.pos,
          y2: r.pos
        };
      }).concat(rowMids.map(function (m) {
        return {
          x1: rowx,
          x2: rowX,
          y1: m,
          y2: m
        };
      })); // vertical lines

      var vlines = this.cols.map(function (c) {
        return {
          x1: c.pos,
          x2: c.pos,
          y1: coly,
          y2: colY
        };
      }).concat(colMids.map(function (m) {
        return {
          x1: m,
          x2: m,
          y1: coly,
          y2: colY
        };
      })); // the full set of lines

      var lines = hlines.concat(vlines); // we record the vertices associated with each line

      lines.forEach(function (l) {
        return l.verts = [];
      }); // the routing graph

      this.verts = [];
      this.edges = []; // create vertices at the crossings of horizontal and vertical grid-lines

      hlines.forEach(function (h) {
        return vlines.forEach(function (v) {
          var p = new Vert(_this.verts.length, v.x1, h.y1);
          h.verts.push(p);
          v.verts.push(p);

          _this.verts.push(p); // assign vertices to the nodes immediately under them


          var i = _this.backToFront.length;

          while (i-- > 0) {
            var node = _this.backToFront[i],
                r = node.rect;
            var dx = Math.abs(p.x - r.cx()),
                dy = Math.abs(p.y - r.cy());

            if (dx < r.width() / 2 && dy < r.height() / 2) {
              p.node = node;
              break;
            }
          }
        });
      });
      lines.forEach(function (l, li) {
        // create vertices at the intersections of nodes and lines
        _this.nodes.forEach(function (v, i) {
          v.rect.lineIntersections(l.x1, l.y1, l.x2, l.y2).forEach(function (intersect, j) {
            //console.log(li+','+i+','+j+':'+intersect.x + ',' + intersect.y);
            var p = new Vert(_this.verts.length, intersect.x, intersect.y, v, l);

            _this.verts.push(p);

            l.verts.push(p);
            v.ports.push(p);
          });
        }); // split lines into edges joining vertices


        var isHoriz = Math.abs(l.y1 - l.y2) < 0.1;

        var delta = function delta(a, b) {
          return isHoriz ? b.x - a.x : b.y - a.y;
        };

        l.verts.sort(delta);

        for (var i = 1; i < l.verts.length; i++) {
          var u = l.verts[i - 1],
              v = l.verts[i];
          if (u.node && u.node === v.node && u.node.leaf) continue;

          _this.edges.push({
            source: u.id,
            target: v.id,
            length: Math.abs(delta(u, v))
          });
        }
      });
    }

    var _proto2 = GridRouter.prototype;

    _proto2.avg = function avg(a) {
      return a.reduce(function (x, y) {
        return x + y;
      }) / a.length;
    } // in the given axis, find sets of leaves overlapping in that axis
    // center of each GridLine is average of all nodes in column
    ;

    _proto2.getGridLines = function getGridLines(axis) {
      var columns = [];
      var ls = this.leaves.slice(0, this.leaves.length);

      while (ls.length > 0) {
        // find a column of all leaves overlapping in axis with the first leaf
        var overlapping = ls.filter(function (v) {
          return v.rect['overlap' + axis.toUpperCase()](ls[0].rect);
        });
        var col = {
          nodes: overlapping,
          pos: this.avg(overlapping.map(function (v) {
            return v.rect['c' + axis]();
          }))
        };
        columns.push(col);
        col.nodes.forEach(function (v) {
          return ls.splice(ls.indexOf(v), 1);
        });
      }

      columns.sort(function (a, b) {
        return a.pos - b.pos;
      });
      return columns;
    } // get the depth of the given node in the group hierarchy
    ;

    _proto2.getDepth = function getDepth(v) {
      var depth = 0;

      while (v.parent !== this.root) {
        depth++;
        v = v.parent;
      }

      return depth;
    } // medial axes between node centres and also boundary lines for the grid
    ;

    _proto2.midPoints = function midPoints(a) {
      if (a.length === 1) {
        return [a[0]];
      }

      var gap = a[1] - a[0];
      var mids = [a[0] - gap / 2];

      for (var i = 1; i < a.length; i++) {
        mids.push((a[i] + a[i - 1]) / 2);
      }

      mids.push(a[a.length - 1] + gap / 2);
      return mids;
    } // find path from v to root including both v and root
    ;

    _proto2.findLineage = function findLineage(v) {
      var lineage = [v];

      do {
        v = v.parent;
        lineage.push(v);
      } while (v !== this.root);

      return lineage.reverse();
    } // find path connecting a and b through their lowest common ancestor
    ;

    _proto2.findAncestorPathBetween = function findAncestorPathBetween(a, b) {
      var aa = this.findLineage(a),
          ba = this.findLineage(b),
          i = 0;

      while (aa[i] === ba[i]) {
        i++;
      } // i-1 to include common ancestor only once (as first element)


      return {
        commonAncestor: aa[i - 1],
        lineages: aa.slice(i).concat(ba.slice(i))
      };
    } // when finding a path between two nodes a and b, siblings of a and b on the
    // paths from a and b to their least common ancestor are obstacles
    ;

    _proto2.siblingObstacles = function siblingObstacles(a, b) {
      var _this2 = this;

      var path = this.findAncestorPathBetween(a, b);
      var lineageLookup = {};
      path.lineages.forEach(function (v) {
        return lineageLookup[v.id] = {};
      });
      var obstacles = path.commonAncestor.children.filter(function (v) {
        return !(v in lineageLookup);
      });
      path.lineages.filter(function (v) {
        return v.parent !== path.commonAncestor;
      }).forEach(function (v) {
        return obstacles = obstacles.concat(v.parent.children.filter(function (c) {
          return c !== v.id;
        }));
      });
      return obstacles.map(function (v) {
        return _this2.nodes[v];
      });
    } // for the given routes, extract all the segments orthogonal to the axis x
    // and return all them grouped by x position
    ;

    GridRouter.getSegmentSets = function getSegmentSets(routes, x, y) {
      // vsegments is a list of vertical segments sorted by x position
      var vsegments = [];

      for (var ei = 0; ei < routes.length; ei++) {
        var route = routes[ei];

        for (var si = 0; si < route.length; si++) {
          var s = route[si];
          s.edgeid = ei;
          s.i = si;
          var sdx = s[1][x] - s[0][x];

          if (Math.abs(sdx) < 0.1) {
            vsegments.push(s);
          }
        }
      }

      vsegments.sort(function (a, b) {
        return a[0][x] - b[0][x];
      }); // vsegmentsets is a set of sets of segments grouped by x position

      var vsegmentsets = [];
      var segmentset = null;

      for (var i = 0; i < vsegments.length; i++) {
        var s = vsegments[i];

        if (!segmentset || Math.abs(s[0][x] - segmentset.pos) > 0.1) {
          segmentset = {
            pos: s[0][x],
            segments: []
          };
          vsegmentsets.push(segmentset);
        }

        segmentset.segments.push(s);
      }

      return vsegmentsets;
    } // for all segments in this bundle create a vpsc problem such that
    // each segment's x position is a variable and separation constraints
    // are given by the partial order over the edges to which the segments belong
    // for each pair s1,s2 of segments in the open set:
    //   e1 = edge of s1, e2 = edge of s2
    //   if leftOf(e1,e2) create constraint s1.x + gap <= s2.x
    //   else if leftOf(e2,e1) create cons. s2.x + gap <= s1.x
    ;

    GridRouter.nudgeSegs = function nudgeSegs(x, y, routes, segments, leftOf, gap) {
      var n = segments.length;
      if (n <= 1) return;
      var vs = segments.map(function (s) {
        return new Variable(s[0][x]);
      });
      var cs = [];

      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (i === j) continue;
          var s1 = segments[i],
              s2 = segments[j],
              e1 = s1.edgeid,
              e2 = s2.edgeid,
              lind = -1,
              rind = -1; // in page coordinates (not cartesian) the notion of 'leftof' is flipped in the horizontal axis from the vertical axis
          // that is, when nudging vertical segments, if they increase in the y(conj) direction the segment belonging to the
          // 'left' edge actually needs to be nudged to the right
          // when nudging horizontal segments, if the segments increase in the x direction
          // then the 'left' segment needs to go higher, i.e. to have y pos less than that of the right

          if (x == 'x') {
            if (leftOf(e1, e2)) {
              //console.log('s1: ' + s1[0][x] + ',' + s1[0][y] + '-' + s1[1][x] + ',' + s1[1][y]);
              if (s1[0][y] < s1[1][y]) {
                lind = j, rind = i;
              } else {
                lind = i, rind = j;
              }
            }
          } else {
            if (leftOf(e1, e2)) {
              if (s1[0][y] < s1[1][y]) {
                lind = i, rind = j;
              } else {
                lind = j, rind = i;
              }
            }
          }

          if (lind >= 0) {
            //console.log(x+' constraint: ' + lind + '<' + rind);
            cs.push(new Constraint(vs[lind], vs[rind], gap));
          }
        }
      }

      var solver = new Solver(vs, cs);
      solver.solve();
      vs.forEach(function (v, i) {
        var s = segments[i];
        var pos = v.position();
        s[0][x] = s[1][x] = pos;
        var route = routes[s.edgeid];
        if (s.i > 0) route[s.i - 1][1][x] = pos;
        if (s.i < route.length - 1) route[s.i + 1][0][x] = pos;
      });
    };

    GridRouter.nudgeSegments = function nudgeSegments(routes, x, y, leftOf, gap) {
      var vsegmentsets = GridRouter.getSegmentSets(routes, x, y); // scan the grouped (by x) segment sets to find co-linear bundles

      for (var i = 0; i < vsegmentsets.length; i++) {
        var ss = vsegmentsets[i];
        var events = [];

        for (var j = 0; j < ss.segments.length; j++) {
          var s = ss.segments[j];
          events.push({
            type: 0,
            s: s,
            pos: Math.min(s[0][y], s[1][y])
          });
          events.push({
            type: 1,
            s: s,
            pos: Math.max(s[0][y], s[1][y])
          });
        }

        events.sort(function (a, b) {
          return a.pos - b.pos + a.type - b.type;
        });
        var open = [];
        var openCount = 0;
        events.forEach(function (e) {
          if (e.type === 0) {
            open.push(e.s);
            openCount++;
          } else {
            openCount--;
          }

          if (openCount == 0) {
            GridRouter.nudgeSegs(x, y, routes, open, leftOf, gap);
            open = [];
          }
        });
      }
    } // obtain routes for the specified edges, nicely nudged apart
    // warning: edge paths may be reversed such that common paths are ordered consistently within bundles!
    // @param edges list of edges
    // @param nudgeGap how much to space parallel edge segements
    // @param source function to retrieve the index of the source node for a given edge
    // @param target function to retrieve the index of the target node for a given edge
    // @returns an array giving, for each edge, an array of segments, each segment a pair of points in an array
    ;

    _proto2.routeEdges = function routeEdges(edges, nudgeGap, source, target) {
      var _this3 = this;

      var routePaths = edges.map(function (e) {
        return _this3.route(source(e), target(e));
      });
      var order = GridRouter.orderEdges(routePaths);
      var routes = routePaths.map(function (e) {
        return GridRouter.makeSegments(e);
      });
      GridRouter.nudgeSegments(routes, 'x', 'y', order, nudgeGap);
      GridRouter.nudgeSegments(routes, 'y', 'x', order, nudgeGap);
      GridRouter.unreverseEdges(routes, routePaths);
      return routes;
    } // path may have been reversed by the subsequence processing in orderEdges
    // so now we need to restore the original order
    ;

    GridRouter.unreverseEdges = function unreverseEdges(routes, routePaths) {
      routes.forEach(function (segments, i) {
        var path = routePaths[i];

        if (path.reversed) {
          segments.reverse(); // reverse order of segments

          segments.forEach(function (segment) {
            segment.reverse(); // reverse each segment
          });
        }
      });
    };

    GridRouter.angleBetween2Lines = function angleBetween2Lines(line1, line2) {
      var angle1 = Math.atan2(line1[0].y - line1[1].y, line1[0].x - line1[1].x);
      var angle2 = Math.atan2(line2[0].y - line2[1].y, line2[0].x - line2[1].x);
      var diff = angle1 - angle2;

      if (diff > Math.PI || diff < -Math.PI) {
        diff = angle2 - angle1;
      }

      return diff;
    } // does the path a-b-c describe a left turn?
    ;

    GridRouter.isLeft = function isLeft(a, b, c) {
      return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) <= 0;
    } // for the given list of ordered pairs, returns a function that (efficiently) looks-up a specific pair to
    // see if it exists in the list
    ;

    GridRouter.getOrder = function getOrder(pairs) {
      var outgoing = {};

      for (var i = 0; i < pairs.length; i++) {
        var p = pairs[i];
        if (typeof outgoing[p.l] === 'undefined') outgoing[p.l] = {};
        outgoing[p.l][p.r] = true;
      }

      return function (l, r) {
        return typeof outgoing[l] !== 'undefined' && outgoing[l][r];
      };
    } // returns an ordering (a lookup function) that determines the correct order to nudge the
    // edge paths apart to minimize crossings
    ;

    GridRouter.orderEdges = function orderEdges(edges) {
      var edgeOrder = [];

      for (var i = 0; i < edges.length - 1; i++) {
        for (var j = i + 1; j < edges.length; j++) {
          var e = edges[i],
              f = edges[j],
              lcs = new LongestCommonSubsequence(e, f);
          var u, vi, vj;
          if (lcs.length === 0) continue; // no common subpath

          if (lcs.reversed) {
            // if we found a common subpath but one of the edges runs the wrong way,
            // then reverse f.
            f.reverse();
            f.reversed = true;
            lcs = new LongestCommonSubsequence(e, f);
          }

          if ((lcs.si <= 0 || lcs.ti <= 0) && (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length)) {
            // the paths do not diverge, so make an arbitrary ordering decision
            edgeOrder.push({
              l: i,
              r: j
            });
            continue;
          }

          if (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length) {
            // if the common subsequence of the
            // two edges being considered goes all the way to the
            // end of one (or both) of the lines then we have to
            // base our ordering decision on the other end of the
            // common subsequence
            u = e[lcs.si + 1];
            vj = e[lcs.si - 1];
            vi = f[lcs.ti - 1];
          } else {
            u = e[lcs.si + lcs.length - 2];
            vi = e[lcs.si + lcs.length];
            vj = f[lcs.ti + lcs.length];
          }

          if (GridRouter.isLeft(u, vi, vj)) {
            edgeOrder.push({
              l: j,
              r: i
            });
          } else {
            edgeOrder.push({
              l: i,
              r: j
            });
          }
        }
      } //edgeOrder.forEach(function (e) { console.log('l:' + e.l + ',r:' + e.r) });


      return GridRouter.getOrder(edgeOrder);
    } // for an orthogonal path described by a sequence of points, create a list of segments
    // if consecutive segments would make a straight line they are merged into a single segment
    // segments are over cloned points, not the original vertices
    ;

    GridRouter.makeSegments = function makeSegments(path) {
      function copyPoint(p) {
        return {
          x: p.x,
          y: p.y
        };
      }

      var isStraight = function isStraight(a, b, c) {
        return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.001;
      };

      var segments = [];
      var a = copyPoint(path[0]);

      for (var i = 1; i < path.length; i++) {
        var b = copyPoint(path[i]),
            c = i < path.length - 1 ? path[i + 1] : null;

        if (!c || !isStraight(a, b, c)) {
          segments.push([a, b]);
          a = b;
        }
      }

      return segments;
    } // find a route between node s and node t
    // returns an array of indices to verts
    ;

    _proto2.route = function route(s, t) {
      var _this4 = this;

      var source = this.nodes[s],
          target = this.nodes[t];
      this.obstacles = this.siblingObstacles(source, target);
      var obstacleLookup = {};
      this.obstacles.forEach(function (o) {
        return obstacleLookup[o.id] = o;
      });
      this.passableEdges = this.edges.filter(function (e) {
        var u = _this4.verts[e.source],
            v = _this4.verts[e.target];
        return !(u.node && u.node.id in obstacleLookup || v.node && v.node.id in obstacleLookup);
      }); // add dummy segments linking ports inside source and target

      for (var i = 1; i < source.ports.length; i++) {
        var u = source.ports[0].id;
        var v = source.ports[i].id;
        this.passableEdges.push({
          source: u,
          target: v,
          length: 0
        });
      }

      for (var i = 1; i < target.ports.length; i++) {
        var u = target.ports[0].id;
        var v = target.ports[i].id;
        this.passableEdges.push({
          source: u,
          target: v,
          length: 0
        });
      }

      var getSource = function getSource(e) {
        return e.source;
      },
          getTarget = function getTarget(e) {
        return e.target;
      },
          getLength = function getLength(e) {
        return e.length;
      };

      var shortestPathCalculator = new Calculator(this.verts.length, this.passableEdges, getSource, getTarget, getLength);

      var bendPenalty = function bendPenalty(u, v, w) {
        var a = _this4.verts[u],
            b = _this4.verts[v],
            c = _this4.verts[w];
        var dx = Math.abs(c.x - a.x),
            dy = Math.abs(c.y - a.y); // don't count bends from internal node edges

        if (a.node === source && a.node === b.node || b.node === target && b.node === c.node) return 0;
        return dx > 1 && dy > 1 ? 1000 : 0;
      }; // get shortest path


      var shortestPath = shortestPathCalculator.PathFromNodeToNodeWithPrevCost(source.ports[0].id, target.ports[0].id, bendPenalty); // shortest path is reversed and does not include the target port

      var pathPoints = shortestPath.reverse().map(function (vi) {
        return _this4.verts[vi];
      });
      pathPoints.push(this.nodes[target.id].ports[0]); // filter out any extra end points that are inside the source or target (i.e. the dummy segments above)

      return pathPoints.filter(function (v, i) {
        return !(i < pathPoints.length - 1 && pathPoints[i + 1].node === source && v.node === source || i > 0 && v.node === target && pathPoints[i - 1].node === target);
      });
    };

    GridRouter.getRoutePath = function getRoutePath(route, cornerradius, arrowwidth, arrowheight) {
      var result = {
        routepath: 'M ' + route[0][0].x + ' ' + route[0][0].y + ' ',
        arrowpath: ''
      };

      if (route.length > 1) {
        for (var i = 0; i < route.length; i++) {
          var li = route[i];
          var x = li[1].x,
              y = li[1].y;
          var dx = x - li[0].x;
          var dy = y - li[0].y;

          if (i < route.length - 1) {
            if (Math.abs(dx) > 0) {
              x -= dx / Math.abs(dx) * cornerradius;
            } else {
              y -= dy / Math.abs(dy) * cornerradius;
            }

            result.routepath += 'L ' + x + ' ' + y + ' ';
            var l = route[i + 1];
            var x0 = l[0].x,
                y0 = l[0].y;
            var x1 = l[1].x;
            var y1 = l[1].y;
            dx = x1 - x0;
            dy = y1 - y0;
            var angle = GridRouter.angleBetween2Lines(li, l) < 0 ? 1 : 0; //console.log(cola.GridRouter.angleBetween2Lines(li, l))

            var x2, y2;

            if (Math.abs(dx) > 0) {
              x2 = x0 + dx / Math.abs(dx) * cornerradius;
              y2 = y0;
            } else {
              x2 = x0;
              y2 = y0 + dy / Math.abs(dy) * cornerradius;
            }

            var cx = Math.abs(x2 - x);
            var cy = Math.abs(y2 - y);
            result.routepath += 'A ' + cx + ' ' + cy + ' 0 0 ' + angle + ' ' + x2 + ' ' + y2 + ' ';
          } else {
            var arrowtip = [x, y];
            var arrowcorner1, arrowcorner2;

            if (Math.abs(dx) > 0) {
              x -= dx / Math.abs(dx) * arrowheight;
              arrowcorner1 = [x, y + arrowwidth];
              arrowcorner2 = [x, y - arrowwidth];
            } else {
              y -= dy / Math.abs(dy) * arrowheight;
              arrowcorner1 = [x + arrowwidth, y];
              arrowcorner2 = [x - arrowwidth, y];
            }

            result.routepath += 'L ' + x + ' ' + y + ' ';

            if (arrowheight > 0) {
              result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1] + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
            }
          }
        }
      } else {
        var li = route[0];
        var x = li[1].x,
            y = li[1].y;
        var dx = x - li[0].x;
        var dy = y - li[0].y;
        var arrowtip = [x, y];
        var arrowcorner1, arrowcorner2;

        if (Math.abs(dx) > 0) {
          x -= dx / Math.abs(dx) * arrowheight;
          arrowcorner1 = [x, y + arrowwidth];
          arrowcorner2 = [x, y - arrowwidth];
        } else {
          y -= dy / Math.abs(dy) * arrowheight;
          arrowcorner1 = [x + arrowwidth, y];
          arrowcorner2 = [x - arrowwidth, y];
        }

        result.routepath += 'L ' + x + ' ' + y + ' ';

        if (arrowheight > 0) {
          result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1] + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
        }
      }

      return result;
    };

    return GridRouter;
  }();

  var wasmInstPromise$1 = /*#__PURE__*/getDerivativeComputerWasm();
  var Link3D = /*#__PURE__*/function () {
    function Link3D(source, target) {
      this.source = source;
      this.target = target;
    }

    var _proto = Link3D.prototype;

    _proto.actualLength = function actualLength(x) {
      var _this = this;

      return Math.sqrt(x.reduce(function (c, v) {
        var dx = v[_this.target] - v[_this.source];
        return c + dx * dx;
      }, 0));
    };

    return Link3D;
  }();
  var Node3D = function Node3D(x, y, z) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    if (z === void 0) {
      z = 0;
    }

    this.x = x;
    this.y = y;
    this.z = z;
  };
  var Layout3D = /*#__PURE__*/function () {
    function Layout3D(nodes, links, idealLinkLength) {
      var _this2 = this;

      if (idealLinkLength === void 0) {
        idealLinkLength = 1;
      }

      this.nodes = nodes;
      this.links = links;
      this.idealLinkLength = idealLinkLength;
      this.constraints = null;
      this.useJaccardLinkLengths = true;
      this.result = new Array(Layout3D.k);

      for (var i = 0; i < Layout3D.k; ++i) {
        this.result[i] = new Array(nodes.length);
      }

      nodes.forEach(function (v, i) {
        for (var _iterator = _createForOfIteratorHelperLoose(Layout3D.dims), _step; !(_step = _iterator()).done;) {
          var dim = _step.value;
          if (typeof v[dim] == 'undefined') v[dim] = Math.random();
        }

        _this2.result[0][i] = v.x;
        _this2.result[1][i] = v.y;
        _this2.result[2][i] = v.z;
      });
    }

    var _proto2 = Layout3D.prototype;

    _proto2.linkLength = function linkLength(l) {
      return l.actualLength(this.result);
    };

    _proto2.start = function start(iterations) {
      if (iterations === void 0) {
        iterations = 100;
      }

      try {
        var _this4 = this;

        var n = _this4.nodes.length;
        var linkAccessor = new LinkAccessor();
        if (_this4.useJaccardLinkLengths) jaccardLinkLengths(_this4.links, linkAccessor, 1.5);

        _this4.links.forEach(function (e) {
          return e.length *= _this4.idealLinkLength;
        }); // Create the distance matrix that Cola needs


        var distanceMatrix = new Calculator(n, _this4.links, function (e) {
          return e.source;
        }, function (e) {
          return e.target;
        }, function (e) {
          return e.length;
        }).DistanceMatrix();
        var D = Descent.createSquareMatrix(n, function (i, j) {
          return distanceMatrix[i][j];
        }); // G is a square matrix with G[i][j] = 1 iff there exists an edge between node i and node j
        // otherwise 2.

        var G = Descent.createSquareMatrix(n, function () {
          return 2;
        });

        _this4.links.forEach(function (_ref) {
          var source = _ref.source,
              target = _ref.target;
          return G[source][target] = G[target][source] = 1;
        });

        return Promise.resolve(wasmInstPromise$1).then(function (wasmInst) {
          _this4.descent = new Descent(_this4.result, D, undefined, wasmInst);
          _this4.descent.threshold = 1e-3;
          _this4.descent.G = G.map(function (Gn) {
            return new Float32Array(Gn);
          }); //let constraints = this.links.map(e=> <any>{
          //    axis: 'y', left: e.source, right: e.target, gap: e.length*1.5
          //});

          if (_this4.constraints) _this4.descent.project = new Projection(_this4.nodes, null, null, _this4.constraints).projectFunctions();

          for (var i = 0; i < _this4.nodes.length; i++) {
            var v = _this4.nodes[i];

            if (v.fixed) {
              _this4.descent.locks.add(i, [v.x, v.y, v.z]);
            }
          }

          _this4.descent.run(iterations);

          return _this4;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _proto2.tick = function tick() {
      this.descent.locks.clear();

      for (var i = 0; i < this.nodes.length; i++) {
        var v = this.nodes[i];

        if (v.fixed) {
          this.descent.locks.add(i, [v.x, v.y, v.z]);
        }
      }

      return this.descent.rungeKutta();
    };

    return Layout3D;
  }();
  Layout3D.dims = ['x', 'y', 'z'];
  Layout3D.k = Layout3D.dims.length;

  var LinkAccessor = /*#__PURE__*/function () {
    function LinkAccessor() {}

    var _proto3 = LinkAccessor.prototype;

    _proto3.getSourceIndex = function getSourceIndex(e) {
      return e.source;
    };

    _proto3.getTargetIndex = function getTargetIndex(e) {
      return e.target;
    };

    _proto3.getLength = function getLength(e) {
      return e.length;
    };

    _proto3.setLength = function setLength(e, l) {
      e.length = l;
    };

    return LinkAccessor;
  }();

  /**
   * @property nudgeGap spacing between parallel edge segments
   * @property margin space around nodes
   * @property groupMargin space around groups
   */

  function gridify(pgLayout, nudgeGap, margin, groupMargin) {
    pgLayout.cola.start(0, 0, 0, 10, false);
    var gridrouter = route(pgLayout.cola.nodes(), pgLayout.cola.groups(), margin, groupMargin);
    return gridrouter.routeEdges(pgLayout.powerGraph.powerEdges, nudgeGap, function (e) {
      return e.source.routerNode.id;
    }, function (e) {
      return e.target.routerNode.id;
    });
  }

  function route(nodes, groups, margin, groupMargin) {
    nodes.forEach(function (d) {
      d.routerNode = {
        name: d.name,
        bounds: d.bounds.inflate(-margin)
      };
    });
    groups.forEach(function (d) {
      d.routerNode = {
        bounds: d.bounds.inflate(-groupMargin),
        children: (typeof d.groups !== 'undefined' ? d.groups.map(function (c) {
          return nodes.length + c.id;
        }) : []).concat(typeof d.leaves !== 'undefined' ? d.leaves.map(function (c) {
          return c.index;
        }) : [])
      };
    });
    var gridRouterNodes = nodes.concat(groups).map(function (d, i) {
      d.routerNode.id = i;
      return d.routerNode;
    });
    return new GridRouter(gridRouterNodes, {
      getChildren: function getChildren(v) {
        return v.children;
      },
      getBounds: function getBounds(v) {
        return v.bounds;
      }
    }, margin - groupMargin);
  }

  function powerGraphGridLayout(graph, size, grouppadding) {
    // compute power graph
    var powerGraph;
    graph.nodes.forEach(function (v, i) {
      return v.index = i;
    });
    new Layout().avoidOverlaps(false).nodes(graph.nodes).links(graph.links).powerGraphGroups(function (d) {
      powerGraph = d;
      powerGraph.groups.forEach(function (v) {
        return v.padding = grouppadding;
      });
    }); // construct a flat graph with dummy nodes for the groups and edges connecting group dummy nodes to their children
    // power edges attached to groups are replaced with edges connected to the corresponding group dummy node

    var n = graph.nodes.length;
    var edges = [];
    var vs = graph.nodes.slice(0);
    vs.forEach(function (v, i) {
      return v.index = i;
    });
    powerGraph.groups.forEach(function (g) {
      var sourceInd = g.index = g.id + n;
      vs.push(g);
      if (typeof g.leaves !== 'undefined') g.leaves.forEach(function (v) {
        return edges.push({
          source: sourceInd,
          target: v.index
        });
      });
      if (typeof g.groups !== 'undefined') g.groups.forEach(function (gg) {
        return edges.push({
          source: sourceInd,
          target: gg.id + n
        });
      });
    });
    powerGraph.powerEdges.forEach(function (e) {
      edges.push({
        source: e.source.index,
        target: e.target.index
      });
    }); // layout the flat graph with dummy nodes and edges

    new Layout().size(size).nodes(vs).links(edges).avoidOverlaps(false).linkDistance(30).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(100, 0, 0, 0, false); // final layout taking node positions from above as starting positions
    // subject to group containment constraints
    // and then gridifying the layout

    return {
      cola: new Layout().convergenceThreshold(1e-3).size(size).avoidOverlaps(true).nodes(graph.nodes).links(graph.links) //.flowLayout('y', 30)
      .groupCompactness(1e-4).linkDistance(30).symmetricDiffLinkLengths(5).powerGraphGroups(function (d) {
        powerGraph = d;
        powerGraph.groups.forEach(function (v) {
          v.padding = grouppadding;
        });
      }).start(50, 0, 100, 0, false),
      powerGraph: powerGraph
    };
  }

  exports.BiTangent = BiTangent;
  exports.BiTangents = BiTangents;
  exports.Block = Block;
  exports.Blocks = Blocks;
  exports.Calculator = Calculator;
  exports.Configuration = Configuration;
  exports.Constraint = Constraint;
  exports.ConvexHull = ConvexHull;
  exports.Descent = Descent;
  exports.GridRouter = GridRouter;
  exports.IndexedVariable = IndexedVariable;
  exports.Iterator = Iterator;
  exports.LLtangent_PolyPolyC = LLtangent_PolyPolyC;
  exports.LRtangent_PolyPolyC = LRtangent_PolyPolyC;
  exports.Layout = Layout;
  exports.Layout3D = Layout3D;
  exports.LayoutAdaptor = LayoutAdaptor;
  exports.LineSegment = LineSegment;
  exports.Link3D = Link3D;
  exports.LinkSets = LinkSets;
  exports.Locks = Locks;
  exports.LongestCommonSubsequence = LongestCommonSubsequence;
  exports.Module = Module;
  exports.ModuleSet = ModuleSet;
  exports.Node3D = Node3D;
  exports.NodeWrapper = NodeWrapper;
  exports.PairingHeap = PairingHeap;
  exports.Point = Point;
  exports.PolyPoint = PolyPoint;
  exports.PositionStats = PositionStats;
  exports.PowerEdge = PowerEdge;
  exports.PriorityQueue = PriorityQueue;
  exports.Projection = Projection;
  exports.PseudoRandom = PseudoRandom;
  exports.RBTree = RBTree;
  exports.RLtangent_PolyPolyC = RLtangent_PolyPolyC;
  exports.RRtangent_PolyPolyC = RRtangent_PolyPolyC;
  exports.Rectangle = Rectangle;
  exports.Solver = Solver;
  exports.TVGPoint = TVGPoint;
  exports.TangentVisibilityGraph = TangentVisibilityGraph;
  exports.TreeBase = TreeBase;
  exports.Variable = Variable;
  exports.Vert = Vert;
  exports.VisibilityEdge = VisibilityEdge;
  exports.VisibilityVertex = VisibilityVertex;
  exports.WasmInst = WasmInst;
  exports.adaptor = adaptor;
  exports.applyPacking = applyPacking;
  exports.clockwiseRadialSweep = clockwiseRadialSweep;
  exports.computeGroupBounds = computeGroupBounds;
  exports.d3adaptor = d3adaptor;
  exports.generateDirectedEdgeConstraints = generateDirectedEdgeConstraints;
  exports.generateXConstraints = generateXConstraints;
  exports.generateXGroupConstraints = generateXGroupConstraints;
  exports.generateYConstraints = generateYConstraints;
  exports.generateYGroupConstraints = generateYGroupConstraints;
  exports.getDerivativeComputerWasm = getDerivativeComputerWasm;
  exports.getGroups = getGroups;
  exports.gridify = gridify;
  exports.isLeft = isLeft;
  exports.jaccardLinkLengths = jaccardLinkLengths;
  exports.makeEdgeBetween = makeEdgeBetween;
  exports.makeEdgeTo = makeEdgeTo;
  exports.polysOverlap = polysOverlap;
  exports.powerGraphGridLayout = powerGraphGridLayout;
  exports.removeOverlapInOneDimension = removeOverlapInOneDimension;
  exports.removeOverlaps = removeOverlaps;
  exports.separateGraphs = separateGraphs;
  exports.stronglyConnectedComponents = stronglyConnectedComponents;
  exports.symmetricDiffLinkLengths = symmetricDiffLinkLengths;
  exports.tangent_PolyPolyC = tangent_PolyPolyC;
  exports.tangents = tangents;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=cola.umd.development.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assign = __webpack_require__(2);
var defaults = __webpack_require__(3);
// const cola = require('webcola') || ( typeof window !== 'undefined' ? window.cola : null );
var cola = __webpack_require__(0);
var raf = __webpack_require__(5);
var isString = function isString(o) {
  return (typeof o === "undefined" ? "undefined" : _typeof(o)) === _typeof("");
};
var isNumber = function isNumber(o) {
  return (typeof o === "undefined" ? "undefined" : _typeof(o)) === _typeof(0);
};
var isObject = function isObject(o) {
  return o != null && (typeof o === "undefined" ? "undefined" : _typeof(o)) === _typeof({});
};
var isFunction = function isFunction(o) {
  return o != null && (typeof o === "undefined" ? "undefined" : _typeof(o)) === _typeof(function () {});
};
var nop = function nop() {};

var getOptVal = function getOptVal(val, ele) {
  if (isFunction(val)) {
    var fn = val;
    return fn.apply(ele, [ele]);
  } else {
    return val;
  }
};

// constructor
// options : object containing layout options
function ColaLayout(options) {
  this.options = assign({}, defaults, options);
}

// runs the layout
ColaLayout.prototype.run = function () {
  var layout = this;
  var options = this.options;

  layout.manuallyStopped = false;

  var cy = options.cy; // cy is automatically populated for us in the constructor
  var eles = options.eles;
  var nodes = eles.nodes();
  var edges = eles.edges();
  var ready = false;

  var isParent = function isParent(ele) {
    return ele.isParent();
  };

  var parentNodes = nodes.filter(isParent);

  var nonparentNodes = nodes.subtract(parentNodes);

  var bb = options.boundingBox || { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
  if (bb.x2 === undefined) {
    bb.x2 = bb.x1 + bb.w;
  }
  if (bb.w === undefined) {
    bb.w = bb.x2 - bb.x1;
  }
  if (bb.y2 === undefined) {
    bb.y2 = bb.y1 + bb.h;
  }
  if (bb.h === undefined) {
    bb.h = bb.y2 - bb.y1;
  }

  var updateNodePositions = function updateNodePositions() {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var dimensions = node.layoutDimensions(options);
      var scratch = node.scratch("cola");

      // update node dims
      if (!scratch.updatedDims) {
        var padding = getOptVal(options.nodeSpacing, node);

        scratch.width = dimensions.w + 2 * padding;
        scratch.height = dimensions.h + 2 * padding;
      }
    }

    try {
      nodes.positions(function (node) {
        var scratch = node.scratch().cola;
        var isColaLocked = node.scratch("__cola_locked");
        var retPos = void 0;

        // 1 cytoscape.lock() is not list here as it will prevent position updates
        // 2 but for cola locked state, will have to do check here
        if (!node.grabbed() && nonparentNodes.contains(node) && !isColaLocked) {
          retPos = {
            x: bb.x1 + scratch.x,
            y: bb.y1 + scratch.y
          };

          if (!isNumber(retPos.x) || !isNumber(retPos.y)) {
            retPos = undefined;
          }
        }

        return retPos;
      });
    } catch (error) {
      // ignore error
      // console.warn(error);
    }

    nodes.updateCompoundBounds(); // because the way this layout sets positions is buggy for some reason; ref #878

    if (!ready) {
      onReady();
      ready = true;
    }

    if (options.fit) {
      cy.fit(options.padding);
    }
  };

  var onDone = function onDone() {
    if (options.ungrabifyWhileSimulating) {
      grabbableNodes.grabify();
    }
    cy.off("destroy", destroyHandler);
    nodes.off("grab free position", grabHandler);
    nodes.off("lock unlock", lockHandler);
    // trigger layoutstop when the layout stops (e.g. finishes)
    layout.one("layoutstop", options.stop);
    layout.trigger({ type: "layoutstop", layout: layout });
  };

  var onReady = function onReady() {
    // trigger layoutready when each node has had its position set at least once
    layout.one("layoutready", options.ready);
    layout.trigger({ type: "layoutready", layout: layout });
  };

  var ticksPerFrame = options.refresh;

  if (options.refresh < 0) {
    ticksPerFrame = 1;
  } else {
    ticksPerFrame = Math.max(1, ticksPerFrame); // at least 1
  }

  var adaptor = layout.adaptor = cola.adaptor({
    trigger: function trigger(e) {
      // on sim event
      var TICK = cola.EventType ? cola.EventType.tick : null;
      var END = cola.EventType ? cola.EventType.end : null;

      switch (e.type) {
        case "tick":
        case TICK:
          if (options.animate) {
            updateNodePositions();
          }
          break;

        case "end":
        case END:
          updateNodePositions();
          // if (!options.infinite) {
          //   onDone();
          // }
          break;
      }
    },

    kick: function kick() {
      // kick off the simulation
      //let skip = 0;

      var firstTick = true;

      var inftick = function inftick() {
        // if (layout.manuallyStopped) {
        //   onDone();

        //   return true;
        // }

        var ret = adaptor.tick();

        if (!options.infinite && !firstTick) {
          adaptor.convergenceThreshold(options.convergenceThreshold);
        }

        firstTick = false;

        // manuallyStopped means paused or stoped
        if (ret && options.infinite && !layout.manuallyStopped) {
          // resume layout if done
          adaptor.resume(); // resume => new kick
        }

        return ret; // allow regular finish b/c of new kick
      };

      var multitick = function multitick() {
        // multiple ticks in a row
        var ret = void 0;

        for (var i = 0; i < ticksPerFrame && !ret; i++) {
          ret = ret || inftick(); // pick up true ret vals => sim done
        }

        return ret;
      };

      if (options.animate) {
        var frame = function frame() {
          if (multitick()) {
            return;
          }

          raf(frame);
        };

        raf(frame);
      } else {
        while (!inftick()) {
          // keep going...
        }
      }
    },

    on: nop, // dummy; not needed

    drag: nop // not needed for our case
  });
  layout.adaptor = adaptor;
  layout.onDone = onDone;

  // if set no grabbing during layout
  var grabbableNodes = nodes.filter(":grabbable");
  if (options.ungrabifyWhileSimulating) {
    grabbableNodes.ungrabify();
  }

  var destroyHandler = void 0;
  cy.one("destroy", destroyHandler = function destroyHandler() {
    layout.stop();
  });

  // handle node dragging
  var grabHandler = void 0;
  nodes.on("grab free position", grabHandler = function grabHandler(e) {
    var node = this;
    var scrCola = node.scratch().cola;
    var pos = node.position();
    var nodeIsTarget = e.cyTarget === node || e.target === node;

    if (!nodeIsTarget) {
      return;
    }

    switch (e.type) {
      case "grab":
        adaptor.dragstart(scrCola);
        break;
      case "free":
        adaptor.dragend(scrCola);
        break;
      case "position":
        // only update when different (i.e. manual .position() call or drag) so we don't loop needlessly
        if (scrCola.px !== pos.x - bb.x1 || scrCola.py !== pos.y - bb.y1) {
          scrCola.px = pos.x - bb.x1;
          scrCola.py = pos.y - bb.y1;
        }
        break;
    }
  });

  var lockHandler = void 0;
  nodes.on("lock unlock", lockHandler = function lockHandler() {
    var node = this;
    var scrCola = node.scratch().cola;

    var isColaLocked = node.scratch("__cola_locked");

    scrCola.fixed = node.locked() || isColaLocked === true;

    if (node.locked()) {
      adaptor.dragstart(scrCola);
    } else {
      adaptor.dragend(scrCola);
    }
  });

  // add nodes to cola
  adaptor.nodes(nonparentNodes.map(function (node, i) {
    var padding = getOptVal(options.nodeSpacing, node);
    var pos = node.position();
    var dimensions = node.layoutDimensions(options);

    var isColaLocked = node.scratch("__cola_locked");

    var struct = node.scratch().cola = {
      x: options.randomize && !node.locked() && !isColaLocked || pos.x === undefined ? Math.round(Math.random() * bb.w) : pos.x,
      y: options.randomize && !node.locked() && !isColaLocked || pos.y === undefined ? Math.round(Math.random() * bb.h) : pos.y,
      width: dimensions.w + 2 * padding,
      height: dimensions.h + 2 * padding,
      index: i,
      fixed: node.locked() || isColaLocked === true
    };

    return struct;
  }));

  // the constraints to be added on nodes
  var constraints = [];

  if (options.alignment) {
    // then set alignment constraints

    if (options.alignment.vertical) {
      var verticalAlignments = options.alignment.vertical;
      verticalAlignments.forEach(function (alignment) {
        var offsetsX = [];
        alignment.forEach(function (nodeData) {
          var node = nodeData.node;
          var scrCola = node.scratch().cola;
          var index = scrCola.index;
          offsetsX.push({
            node: index,
            offset: nodeData.offset ? nodeData.offset : 0
          });
        });
        constraints.push({
          type: "alignment",
          axis: "x",
          offsets: offsetsX
        });
      });
    }

    if (options.alignment.horizontal) {
      var horizontalAlignments = options.alignment.horizontal;
      horizontalAlignments.forEach(function (alignment) {
        var offsetsY = [];
        alignment.forEach(function (nodeData) {
          var node = nodeData.node;
          var scrCola = node.scratch().cola;
          var index = scrCola.index;
          offsetsY.push({
            node: index,
            offset: nodeData.offset ? nodeData.offset : 0
          });
        });
        constraints.push({
          type: "alignment",
          axis: "y",
          offsets: offsetsY
        });
      });
    }
  }

  // if gapInequalities variable is set add each inequality constraint to list of constraints
  if (options.gapInequalities) {
    options.gapInequalities.forEach(function (inequality) {
      // for the constraints to be passed to cola layout adaptor use indices of nodes,
      // not the nodes themselves
      var leftIndex = inequality.left.scratch().cola.index;
      var rightIndex = inequality.right.scratch().cola.index;

      constraints.push({
        axis: inequality.axis,
        left: leftIndex,
        right: rightIndex,
        gap: inequality.gap,
        equality: inequality.equality
      });
    });
  }

  // add constraints if any
  if (constraints.length > 0) {
    adaptor.constraints(constraints);
  }

  // add compound nodes to cola
  adaptor.groups(parentNodes.map(function (node, i) {
    // add basic group incl leaf nodes
    var optPadding = getOptVal(options.nodeSpacing, node);
    var getPadding = function getPadding(d) {
      return parseFloat(node.style("padding-" + d));
    };

    var pleft = getPadding("left") + optPadding;
    var pright = getPadding("right") + optPadding;
    var ptop = getPadding("top") + optPadding;
    var pbottom = getPadding("bottom") + optPadding;

    node.scratch().cola = {
      index: i,

      padding: Math.max(pleft, pright, ptop, pbottom),

      // leaves should only contain direct descendants (children),
      // not the leaves of nested compound nodes or any nodes that are compounds themselves
      leaves: node.children().intersection(nonparentNodes).map(function (child) {
        return child[0].scratch().cola.index;
      }),

      fixed: node.locked()
    };

    return node;
  }).map(function (node) {
    // add subgroups
    node.scratch().cola.groups = node.children().intersection(parentNodes).map(function (child) {
      return child.scratch().cola.index;
    });

    return node.scratch().cola;
  }));

  // get the edge length setting mechanism
  var length = void 0;
  var lengthFnName = void 0;
  if (options.edgeLength != null) {
    length = options.edgeLength;
    lengthFnName = "linkDistance";
  } else if (options.edgeSymDiffLength != null) {
    length = options.edgeSymDiffLength;
    lengthFnName = "symmetricDiffLinkLengths";
  } else if (options.edgeJaccardLength != null) {
    length = options.edgeJaccardLength;
    lengthFnName = "jaccardLinkLengths";
  } else {
    length = 100;
    lengthFnName = "linkDistance";
  }

  var lengthGetter = function lengthGetter(link) {
    return link.calcLength;
  };

  // add the edges to cola
  adaptor.links(edges.stdFilter(function (edge) {
    return nonparentNodes.contains(edge.source()) && nonparentNodes.contains(edge.target());
  }).map(function (edge) {
    var c = edge.scratch().cola = {
      source: edge.source()[0].scratch().cola.index,
      target: edge.target()[0].scratch().cola.index
    };

    if (length != null) {
      c.calcLength = getOptVal(length, edge);
    }

    return c;
  }));

  adaptor.size([bb.w, bb.h]);

  if (length != null) {
    adaptor[lengthFnName](lengthGetter);
  }

  // set the flow of cola
  if (options.flow) {
    var flow = void 0;
    var defAxis = "y";
    var defMinSep = 50;

    if (isString(options.flow)) {
      flow = {
        axis: options.flow,
        minSeparation: defMinSep
      };
    } else if (isNumber(options.flow)) {
      flow = {
        axis: defAxis,
        minSeparation: options.flow
      };
    } else if (isObject(options.flow)) {
      flow = options.flow;

      flow.axis = flow.axis || defAxis;
      flow.minSeparation = flow.minSeparation != null ? flow.minSeparation : defMinSep;
    } else {
      // e.g. options.flow: true
      flow = {
        axis: defAxis,
        minSeparation: defMinSep
      };
    }

    adaptor.flowLayout(flow.axis, flow.minSeparation);
  }

  layout.trigger({ type: "layoutstart", layout: layout });

  adaptor.avoidOverlaps(options.avoidOverlap).handleDisconnected(options.handleDisconnected).start(options.unconstrIter, options.userConstIter, options.allConstIter, undefined, // gridSnapIterations = 0
  undefined, // keepRunning = true
  options.centerGraph);

  if (!options.infinite) {
    setTimeout(function () {
      if (!layout.manuallyStopped) {
        adaptor.stop();
      }
    }, options.maxSimulationTime);
  }

  return this; // chaining
};

// called on continuous layouts to stop them before they finish
ColaLayout.prototype.stop = function () {
  if (this.adaptor) {
    this.manuallyStopped = true;
    this.adaptor.stop();
    this.onDone();
  }

  return this; // chaining
};

ColaLayout.prototype.pause = function () {
  if (this.adaptor) {
    this.manuallyStopped = true;
    this.adaptor.pause();
  }

  return this; // chaining
};

ColaLayout.prototype.resume = function () {
  if (this.adaptor) {
    this.manuallyStopped = false;
    this.adaptor.resume();
  }

  return this; // chaining
};

module.exports = ColaLayout;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.filter(function (src) {
    return src != null;
  }).forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

  return tgt;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// default layout options
var defaults = {
  animate: true, // whether to show the layout as it's running
  refresh: 1, // number of ticks per frame; higher is faster but more jerky
  maxSimulationTime: 4000, // max length in ms to run the layout
  ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
  fit: true, // on every layout reposition of nodes, fit the viewport
  padding: 30, // padding around the simulation
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node

  // layout event callbacks
  ready: function ready() {}, // on layoutready
  stop: function stop() {}, // on layoutstop

  // positioning options
  randomize: false, // use random node positions at beginning of layout
  avoidOverlap: true, // if true, prevents overlap of node bounding boxes
  handleDisconnected: true, // if true, avoids disconnected components from overlapping
  convergenceThreshold: 0.01, // when the alpha value (system energy) falls below this value, the layout stops
  nodeSpacing: function nodeSpacing(node) {
    return 10;
  }, // extra spacing around nodes
  flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
  alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
  gapInequalities: undefined, // list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]
  centerGraph: true, // adjusts the node positions initially to center the graph (pass false if you want to start the layout from the current position)


  // different methods of specifying edge length
  // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
  edgeLength: undefined, // sets edge length directly in simulation
  edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
  edgeJaccardLength: undefined, // jaccard edge length in simulation

  // iterations of cola algorithm; uses default values on undefined
  unconstrIter: undefined, // unconstrained initial layout iterations
  userConstIter: undefined, // initial layout iterations with user-specified constraints
  allConstIter: undefined, // initial layout iterations with all constraints including non-overlap

  // infinite layout options
  infinite: false // overrides all other options for a forces-all-the-time mode
};

module.exports = defaults;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(1);
var cola = __webpack_require__(0);
// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('layout', 'cola', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}
register.cola = cola;

module.exports = register;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var raf = void 0;

if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== ( true ? "undefined" : _typeof(undefined))) {
  raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
    return setTimeout(fn, 16);
  };
} else {
  // if not available, all you get is immediate calls
  raf = function raf(cb) {
    cb();
  };
}

module.exports = raf;

/***/ })
/******/ ]);
});