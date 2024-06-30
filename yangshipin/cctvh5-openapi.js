global.self = global;
window=global;
var cctvh5core = require('./cctvh5-openapicore.js')

window['cctvh5-openapicore']= cctvh5core

document={
    getElementsByTagName:function(a){
        return {
            classList:[],
            setAttribute:function(){
            }
            ,  pathname:''
        }
    }
}
/*! For license information please see cctvh5-openapi.min.js.LICENSE.txt */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["cctvh5-openapi"] = e() : t["cctvh5-openapi"] = e()
}(self, (function() {
    return function() {
        var t = {
            442: function(t) {
                t.exports = function(t) {
                    var e = (t = t || {}).src || ""
                      , r = t.charset || ""
                      , n = t.onLoad || function() {}
                      , o = document.createElement("script");
                    return o.async = "async",
                    o.src = e,
                    r && (o.charset = r),
                    o.onreadystatechange = function() {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof n && n(),
                        this.onload = null,
                        this.onreadystatechange = null,
                        this.parentNode.removeChild(this))
                    }
                    ,
                    o.onload = o.onreadystatechange,
                    // document.getElementsByTagName("head")[0].appendChild(o),
                    o
                }
            },
            669: function(t, e, r) {
                var n = r(482)
                  , o = r(486)
                  , i = r(442)
                  , a = "SPORE_SDK_PROMISE"
                  , c = null;
                "undefined" != typeof window ? (c = window[a]) || (c = {},
                window[a] = c) : c = {},
                t.exports = function(t) {
                    var e = n({
                        name: "",
                        url: "",
                        charset: "utf-8"
                    }, t)
                      , r = e.name;
                    if (!r)
                        return Promise.reject(new Error("Require parameter: options.name"));
                    if (!e.url)
                        return Promise.reject(new Error("Require parameter: options.url"));
                    var a = c[r];
                    return a ? a.sdk ? Promise.resolve(a.sdk) : a : (a = new Promise((function(t) {
                        i({
                            src: e.url,
                            charset: e.charset,
                            onLoad: function() {
                                var e = o(window, r);
                                a.sdk = e,
                                t(e)
                            }
                        })
                    }
                    )),
                    c[r] = a,
                    a)
                }
            },
            607: function(t) {
                var e = {};
                t.exports = function(t, r) {
                    var n = e[t] || {};
                    if (t) {
                        var o = t.indexOf("?");
                        if (o >= 0) {
                            var i = t.slice(o + 1, t.length);
                            (i = i.replace(/#.*/, "")).split("&").forEach((function(t) {
                                var e = t.indexOf("=");
                                if (e > 0) {
                                    var r = t.slice(0, e)
                                      , o = t.slice(e + 1, t.length);
                                    n[r] = o
                                }
                            }
                            ))
                        }
                        e[t] = n
                    }
                    return r ? n[r] || "" : n
                }
            },
            482: function(t) {
                t.exports = function(t) {
                    return t = t || {},
                    Array.prototype.slice.call(arguments, 1).forEach((function(e) {
                        var r;
                        for (r in e = e || {})
                            e.hasOwnProperty(r) && (t[r] = e[r])
                    }
                    )),
                    t
                }
            },
            486: function(t, e, r) {
                var n = r(971)
                  , o = r(403);
                t.exports = function(t, e, r) {
                    if (t && "string" == typeof e) {
                        var i, a = o(e), c = t, u = a.length;
                        for (i = 0; i < u; i += 1) {
                            var s = a[i];
                            if ("array" === n(c))
                                /^\d+$/.test(s) && (s = parseInt(s, 10)),
                                c = c[s];
                            else {
                                if ("object" != typeof c) {
                                    c = void 0;
                                    break
                                }
                                c = c[s]
                            }
                        }
                        var f = c;
                        return "undefined" === n(f) && "undefined" !== n(r) && (f = r),
                        f
                    }
                }
            },
            971: function(t) {
                t.exports = function(t) {
                    return Object.prototype.toString.call(t).toLowerCase().replace(/^\[object\s*|\]$/gi, "")
                }
            },
            403: function(t) {
                t.exports = function(t) {
                    if ("string" != typeof t)
                        return [];
                    var e = [];
                    return t.split(".").forEach((function(t) {
                        var r = t.replace(/\[([^[\]]+)\]/g, ".$1").split(".");
                        "" === r[0] && r.shift(),
                        r.forEach((function(t) {
                            e.push(t)
                        }
                        ))
                    }
                    )),
                    e
                }
            },
            518: function(t, e, r) {
                var n = r(435).default;
                function o() {
                    "use strict";
                    t.exports = o = function() {
                        return r
                    }
                    ,
                    t.exports.__esModule = !0,
                    t.exports.default = t.exports;
                    var e, r = {}, i = Object.prototype, a = i.hasOwnProperty, c = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    }
                    , u = "function" == typeof Symbol ? Symbol : {}, s = u.iterator || "@@iterator", f = u.asyncIterator || "@@asyncIterator", l = u.toStringTag || "@@toStringTag";
                    function p(t, e, r) {
                        return Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        t[e]
                    }
                    try {
                        p({}, "")
                    } catch (e) {
                        p = function(t, e, r) {
                            return t[e] = r
                        }
                    }
                    function h(t, e, r, n) {
                        var o = e && e.prototype instanceof x ? e : x
                          , i = Object.create(o.prototype)
                          , a = new I(n || []);
                        return c(i, "_invoke", {
                            value: P(t, r, a)
                        }),
                        i
                    }
                    function d(t, e, r) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, r)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    r.wrap = h;
                    var v = "suspendedStart"
                      , y = "suspendedYield"
                      , g = "executing"
                      , m = "completed"
                      , w = {};
                    function x() {}
                    function b() {}
                    function E() {}
                    var L = {};
                    p(L, s, (function() {
                        return this
                    }
                    ));
                    var j = Object.getPrototypeOf
                      , O = j && j(j(N([])));
                    O && O !== i && a.call(O, s) && (L = O);
                    var _ = E.prototype = x.prototype = Object.create(L);
                    function S(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            p(t, e, (function(t) {
                                return this._invoke(e, t)
                            }
                            ))
                        }
                        ))
                    }
                    function k(t, e) {
                        function r(o, i, c, u) {
                            var s = d(t[o], t, i);
                            if ("throw" !== s.type) {
                                var f = s.arg
                                  , l = f.value;
                                return l && "object" == n(l) && a.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    r("next", t, c, u)
                                }
                                ), (function(t) {
                                    r("throw", t, c, u)
                                }
                                )) : e.resolve(l).then((function(t) {
                                    f.value = t,
                                    c(f)
                                }
                                ), (function(t) {
                                    return r("throw", t, c, u)
                                }
                                ))
                            }
                            u(s.arg)
                        }
                        var o;
                        c(this, "_invoke", {
                            value: function(t, n) {
                                function i() {
                                    return new e((function(e, o) {
                                        r(t, n, e, o)
                                    }
                                    ))
                                }
                                return o = o ? o.then(i, i) : i()
                            }
                        })
                    }
                    function P(t, r, n) {
                        var o = v;
                        return function(i, a) {
                            if (o === g)
                                throw new Error("Generator is already running");
                            if (o === m) {
                                if ("throw" === i)
                                    throw a;
                                return {
                                    value: e,
                                    done: !0
                                }
                            }
                            for (n.method = i,
                            n.arg = a; ; ) {
                                var c = n.delegate;
                                if (c) {
                                    var u = C(c, n);
                                    if (u) {
                                        if (u === w)
                                            continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (o === v)
                                        throw o = m,
                                        n.arg;
                                    n.dispatchException(n.arg)
                                } else
                                    "return" === n.method && n.abrupt("return", n.arg);
                                o = g;
                                var s = d(t, r, n);
                                if ("normal" === s.type) {
                                    if (o = n.done ? m : y,
                                    s.arg === w)
                                        continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (o = m,
                                n.method = "throw",
                                n.arg = s.arg)
                            }
                        }
                    }
                    function C(t, r) {
                        var n = r.method
                          , o = t.iterator[n];
                        if (o === e)
                            return r.delegate = null,
                            "throw" === n && t.iterator.return && (r.method = "return",
                            r.arg = e,
                            C(t, r),
                            "throw" === r.method) || "return" !== n && (r.method = "throw",
                            r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                            w;
                        var i = d(o, t.iterator, r.arg);
                        if ("throw" === i.type)
                            return r.method = "throw",
                            r.arg = i.arg,
                            r.delegate = null,
                            w;
                        var a = i.arg;
                        return a ? a.done ? (r[t.resultName] = a.value,
                        r.next = t.nextLoc,
                        "return" !== r.method && (r.method = "next",
                        r.arg = e),
                        r.delegate = null,
                        w) : a : (r.method = "throw",
                        r.arg = new TypeError("iterator result is not an object"),
                        r.delegate = null,
                        w)
                    }
                    function T(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]),
                        2 in t && (e.finallyLoc = t[2],
                        e.afterLoc = t[3]),
                        this.tryEntries.push(e)
                    }
                    function R(t) {
                        var e = t.completion || {};
                        e.type = "normal",
                        delete e.arg,
                        t.completion = e
                    }
                    function I(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        t.forEach(T, this),
                        this.reset(!0)
                    }
                    function N(t) {
                        if (t || "" === t) {
                            var r = t[s];
                            if (r)
                                return r.call(t);
                            if ("function" == typeof t.next)
                                return t;
                            if (!isNaN(t.length)) {
                                var o = -1
                                  , i = function r() {
                                    for (; ++o < t.length; )
                                        if (a.call(t, o))
                                            return r.value = t[o],
                                            r.done = !1,
                                            r;
                                    return r.value = e,
                                    r.done = !0,
                                    r
                                };
                                return i.next = i
                            }
                        }
                        throw new TypeError(n(t) + " is not iterable")
                    }
                    return b.prototype = E,
                    c(_, "constructor", {
                        value: E,
                        configurable: !0
                    }),
                    c(E, "constructor", {
                        value: b,
                        configurable: !0
                    }),
                    b.displayName = p(E, l, "GeneratorFunction"),
                    r.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                    }
                    ,
                    r.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E,
                        p(t, l, "GeneratorFunction")),
                        t.prototype = Object.create(_),
                        t
                    }
                    ,
                    r.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }
                    ,
                    S(k.prototype),
                    p(k.prototype, f, (function() {
                        return this
                    }
                    )),
                    r.AsyncIterator = k,
                    r.async = function(t, e, n, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new k(h(t, e, n, o),i);
                        return r.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }
                        ))
                    }
                    ,
                    S(_),
                    p(_, l, "Generator"),
                    p(_, s, (function() {
                        return this
                    }
                    )),
                    p(_, "toString", (function() {
                        return "[object Generator]"
                    }
                    )),
                    r.keys = function(t) {
                        var e = Object(t)
                          , r = [];
                        for (var n in e)
                            r.push(n);
                        return r.reverse(),
                        function t() {
                            for (; r.length; ) {
                                var n = r.pop();
                                if (n in e)
                                    return t.value = n,
                                    t.done = !1,
                                    t
                            }
                            return t.done = !0,
                            t
                        }
                    }
                    ,
                    r.values = N,
                    I.prototype = {
                        constructor: I,
                        reset: function(t) {
                            if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = e,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = e,
                            this.tryEntries.forEach(R),
                            !t)
                                for (var r in this)
                                    "t" === r.charAt(0) && a.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type)
                                throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done)
                                throw t;
                            var r = this;
                            function n(n, o) {
                                return c.type = "throw",
                                c.arg = t,
                                r.next = n,
                                o && (r.method = "next",
                                r.arg = e),
                                !!o
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var i = this.tryEntries[o]
                                  , c = i.completion;
                                if ("root" === i.tryLoc)
                                    return n("end");
                                if (i.tryLoc <= this.prev) {
                                    var u = a.call(i, "catchLoc")
                                      , s = a.call(i, "finallyLoc");
                                    if (u && s) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc)
                                    } else if (u) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0)
                                    } else {
                                        if (!s)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var o = n;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = t,
                            i.arg = e,
                            o ? (this.method = "next",
                            this.next = o.finallyLoc,
                            w) : this.complete(i)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type)
                                throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            w
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.finallyLoc === t)
                                    return this.complete(r.completion, r.afterLoc),
                                    R(r),
                                    w
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.tryLoc === t) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        R(r)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, r, n) {
                            return this.delegate = {
                                iterator: N(t),
                                resultName: r,
                                nextLoc: n
                            },
                            "next" === this.method && (this.arg = e),
                            w
                        }
                    },
                    r
                }
                t.exports = o,
                t.exports.__esModule = !0,
                t.exports.default = t.exports
            },
            435: function(t) {
                function e(r) {
                    return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    ,
                    t.exports.__esModule = !0,
                    t.exports.default = t.exports,
                    e(r)
                }
                t.exports = e,
                t.exports.__esModule = !0,
                t.exports.default = t.exports
            },
            117: function(t, e, r) {
                var n = r(518)();
                t.exports = n;
                try {
                    regeneratorRuntime = n
                } catch (t) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
                }
            }
        }
          , e = {};
        function r(n) {
            var o = e[n];
            if (void 0 !== o)
                return o.exports;
            var i = e[n] = {
                exports: {}
            };
            return t[n](i, i.exports, r),
            i.exports
        }
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return r.d(e, {
                a: e
            }),
            e
        }
        ,
        r.d = function(t, e) {
            for (var n in e)
                r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ;
        var n = {};
        return function() {
            "use strict";
            function t(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        t[n] = r[n]
                }
                return t
            }
            r.r(n),
            r.d(n, {
                VERSION: function() {
                    return b
                },
                clearSignatureCache: function() {
                    return w
                },
                cookie: function() {
                    return x
                },
                getSignature: function() {
                    return m
                },
                ready: function() {
                    return g
                }
            });
            var e = function e(r, n) {
                function o(e, o, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (i = t({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                        i.expires && (i.expires = i.expires.toUTCString()),
                        e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var a = "";
                        for (var c in i)
                            i[c] && (a += "; " + c,
                            !0 !== i[c] && (a += "=" + i[c].split(";")[0]));
                        return document.cookie = e + "=" + r.write(o, e) + a
                    }
                }
                return Object.create({
                    set: o,
                    get: function(t) {
                        if ("undefined" != typeof document && (!arguments.length || t)) {
                            for (var e = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < e.length; o++) {
                                var i = e[o].split("=")
                                  , a = i.slice(1).join("=");
                                try {
                                    var c = decodeURIComponent(i[0]);
                                    if (n[c] = r.read(a, c),
                                    t === c)
                                        break
                                } catch (t) {}
                            }
                            return t ? n[t] : n
                        }
                    },
                    remove: function(e, r) {
                        o(e, "", t({}, r, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(r) {
                        return e(this.converter, t({}, this.attributes, r))
                    },
                    withConverter: function(r) {
                        return e(t({}, this.converter, r), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(r)
                    }
                })
            }({
                read: function(t) {
                    return '"' === t[0] && (t = t.slice(1, -1)),
                    t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(t) {
                    return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
              , o = r(117)
              , i = r.n(o)
              , a = r(669)
              , c = r.n(a)
              , u = r(607)
              , s = r.n(u)
              , f = {
                prefix: "cctvh5",
                name: "kits",
                getModuleName() {
                    return f.prefix + "-" + f.name
                },
                isShowLog() {
                    var t = s()(location.href, "felog")
                      , r = e.get("debug_felog")
                      , n = t || r || ""
                      , o = n.split(",");
                    return "on" === n || o.indexOf(f.name) >= 0
                },
                isTest() {
                    var t = s()(location.href, "test")
                      , r = e.get("debug_test")
                      , n = t || r || ""
                      , o = n.split(",");
                    return "on" === n || o.indexOf(f.name) >= 0
                }
            }
              , l = f;
            l.name = "openapi";
            var p = l
              , h = function(t, e, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value,
                        e instanceof r ? e : new r((function(t) {
                            t(e)
                        }
                        ))).then(a, c)
                    }
                    u((n = n.apply(t, e || [])).next())
                }
                ))
            }
              , d = "cctvh5-openapicore"
              , v = "cctvh5-openapicore-pm";
            function y() {
                return cctvh5core;
                if (window[d])
                    return window[v] = Promise.resolve(),
                    window[v];
                if (!window[v]) {
                    var t = "https://s.yangshipin.cn"
                      , e = (60,
                    Math.floor((new Date).getTime() / 6e4));
                    p.isTest() && (t = "https://mtest.yangshipin.cn/s");
                    var r = t + "/CCTVVideo/cctvh5-openapicore/cctvh5-openapicore.js?ts=" + e;
                    window[v] = c()({
                        name: d,
                        url: r
                    })
                }
                return window[v]
            }
            function g() {

                return h(this, void 0, void 0, i().mark((function t() {
                    var e;
                    return i().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:

                                return t.next = 2,
                                y();
                            case 2:

                                return e = t.sent,
                                t.abrupt("return", e);
                            case 4:
                            case "end":

                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            function m(t) {
                return  h(this, void 0, void 0, i().mark((function e() {
                    var r;
                    var rr= i().wrap((function(e) {

                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,


                                g();
                            case 2:

                                // return r = e.sent,
                                return r=cctvh5core,
                                    // console.log("call cctvh5core-getSignature")
                                e.abrupt("return", r.getSignature(t));
                            case 4:
                            case "end":

                                return e.stop()
                            }
                    }
                    ),e)
                        return rr;
                }
                )))
                // console.log(res.then(ress=>console.log(ress)))
            }
            function w() {
                return h(this, void 0, void 0, i().mark((function t() {
                    var e;
                    return i().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                g();
                            case 2:
                                return e = t.sent,
                                t.abrupt("return", e.clearSignatureCache());
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            var x = e
              , b = "2.0.0"
        }(),
        n
    }()
}
));
