global.self = global;
self.location={
    href:''
}
window=global;
// import fetch from 'node-fetch';
// window.fetch = fetch;
fetch1=import('node-fetch').then(async (nodeFetch) => {
  const fetch = nodeFetch.default;
    return fetch;
}).catch(error => {
  console.error('Error:', error);
});



window.getElementsByTagName=function(a){
        return {
            classList:[],
            setAttribute:function(){
            }
            ,  pathname:''
        }
    }
document={
    baseURI:''
}
/*! For license information please see cctvh5-openapicore.js.LICENSE.txt */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["cctvh5-openapicore"] = t() : e["cctvh5-openapicore"] = t()
}(self, (function() {
    return function() {
        var e = {
            383: function(e) {
                var t = {};
                e.exports = function(e, r) {
                    var n = t[e] || {};
                    if (e) {
                        var o = e.indexOf("?");
                        if (o >= 0) {
                            var i = e.slice(o + 1, e.length);
                            (i = i.replace(/#.*/, "")).split("&").forEach((function(e) {
                                var t = e.indexOf("=");
                                if (t > 0) {
                                    var r = e.slice(0, t)
                                      , o = e.slice(t + 1, e.length);
                                    n[r] = o
                                }
                            }
                            ))
                        }
                        t[e] = n
                    }
                    return r ? n[r] || "" : n
                }
            },
            587: function(e) {
                e.exports = function(e, t) {
                    return e = e || "",
                    t ? e.replace(/([^?#]*)(\?{0,1}[^?#]*)(#{0,1}.*)/, (function(e, r, n, o) {
                        var i = (n = (n = n || "").replace(/^\?/, "")).split("&").reduce((function(e, t) {
                            var r = t.split("=");
                            return r[0] && (e[r[0]] = r[1]),
                            e
                        }
                        ), {});
                        Object.keys(t).forEach((function(e) {
                            var r = t[e];
                            null == r ? delete i[e] : i[e] = r
                        }
                        ));
                        var a = Object.keys(i);
                        return r + (n = a.length ? "?" + a.map((function(e) {
                            return e + "=" + i[e]
                        }
                        )).join("&") : "") + o
                    }
                    )) : e
                }
            },
            941: function(e, t, r) {
                var n = r(657)
                  , o = r(447);
                e.exports = function(e, t, r) {
                    if (e && "string" == typeof t) {
                        var i, a = o(t), s = e, c = a.length;
                        for (i = 0; i < c; i += 1) {
                            var u = a[i];
                            if ("array" === n(s))
                                /^\d+$/.test(u) && (u = parseInt(u, 10)),
                                s = s[u];
                            else {
                                if ("object" != typeof s) {
                                    s = void 0;
                                    break
                                }
                                s = s[u]
                            }
                        }
                        var f = s;
                        return "undefined" === n(f) && "undefined" !== n(r) && (f = r),
                        f
                    }
                }
            },
            657: function(e) {
                e.exports = function(e) {
                    return Object.prototype.toString.call(e).toLowerCase().replace(/^\[object\s*|\]$/gi, "")
                }
            },
            447: function(e) {
                e.exports = function(e) {
                    if ("string" != typeof e)
                        return [];
                    var t = [];
                    return e.split(".").forEach((function(e) {
                        var r = e.replace(/\[([^[\]]+)\]/g, ".$1").split(".");
                        "" === r[0] && r.shift(),
                        r.forEach((function(e) {
                            t.push(e)
                        }
                        ))
                    }
                    )),
                    t
                }
            },
            870: function(e, t, r) {
                "use strict";
                var n, o = this && this.__extends || (n = function(e, t) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var r in t)
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    ,
                    n(e, t)
                }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e
                    }
                    n(e, t),
                    e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
                    new r)
                }
                ), i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(r(663))
                  , s = r(210)
                  , c = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return o(t, e),
                    t.prototype.parseArgs = function(e) {
                        var t = []
                          , r = []
                          , n = []
                          , o = []
                          , i = !1;
                        return e.forEach((function(e) {
                            var t = e;
                            i ? o.push(t.content) : (s.STRING_AS_TYPES.indexOf(typeof t.content) >= 0 && (t.content = String(t.content)),
                            "string" == typeof t.content ? (r.push(t.content),
                            n.push("color: ".concat(t.color, ";"))) : (i = !0,
                            o.push(t.content)))
                        }
                        )),
                        r.length && (t.push(r.map((function(e) {
                            return "%c ".concat(e)
                        }
                        )).join(" ")),
                        t = t.concat(n)),
                        t.concat(o)
                    }
                    ,
                    t
                }(a.default);
                t.default = c
            },
            210: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DEFAULT_ICONS = t.DEFAULT_COLORS = t.DEFAULT_LEVELS = t.ICON_STRESS = t.ICON_TIP = t.ICON_FAIL = t.ICON_SUCCESS = t.ICON_ERROR = t.ICON_WARN = t.ICON_INFO = t.ICON_LOG = t.ICON_DEBUG = t.COLOR_STRESS = t.COLOR_TIP = t.COLOR_FAIL = t.COLOR_SUCCESS = t.COLOR_ERROR = t.COLOR_WARN = t.COLOR_INFO = t.COLOR_LOG = t.COLOR_DEBUG = t.STRING_AS_TYPES = void 0,
                t.STRING_AS_TYPES = ["undefined", "number", "boolean"],
                t.COLOR_DEBUG = "#9932cc",
                t.COLOR_LOG = "#808080",
                t.COLOR_INFO = "#1e90ff",
                t.COLOR_WARN = "#ffd700",
                t.COLOR_ERROR = "#dc143c",
                t.COLOR_SUCCESS = "#04be02",
                t.COLOR_FAIL = "#ff6347",
                t.COLOR_TIP = "#6495ed",
                t.COLOR_STRESS = "#f4a0ab",
                t.ICON_DEBUG = "#",
                t.ICON_LOG = ".",
                t.ICON_INFO = "*",
                t.ICON_WARN = "!",
                t.ICON_ERROR = "x",
                t.ICON_SUCCESS = "✓",
                t.ICON_FAIL = "☢",
                t.ICON_TIP = "✱",
                t.ICON_STRESS = "⚑",
                t.DEFAULT_LEVELS = {
                    debug: 0,
                    log: 1,
                    info: 2,
                    warn: 3,
                    error: 4
                },
                t.DEFAULT_COLORS = {
                    debug: "",
                    log: "",
                    info: "",
                    warn: t.COLOR_WARN,
                    error: t.COLOR_ERROR,
                    success: t.COLOR_SUCCESS,
                    fail: t.COLOR_FAIL,
                    tip: t.COLOR_TIP,
                    stress: t.COLOR_STRESS
                },
                t.DEFAULT_ICONS = {
                    debug: {
                        icon: t.ICON_DEBUG,
                        color: t.COLOR_DEBUG
                    },
                    log: {
                        icon: t.ICON_LOG,
                        color: t.COLOR_LOG
                    },
                    info: {
                        icon: t.ICON_INFO,
                        color: t.COLOR_INFO
                    },
                    warn: {
                        icon: t.ICON_WARN,
                        color: t.COLOR_WARN
                    },
                    error: {
                        icon: t.ICON_ERROR,
                        color: t.COLOR_ERROR
                    },
                    success: {
                        icon: t.ICON_SUCCESS,
                        color: t.COLOR_SUCCESS
                    },
                    fail: {
                        icon: t.ICON_FAIL,
                        color: t.COLOR_FAIL
                    },
                    tip: {
                        icon: t.ICON_TIP,
                        color: t.COLOR_TIP
                    },
                    stress: {
                        icon: t.ICON_STRESS,
                        color: t.COLOR_STRESS
                    }
                }
            },
            663: function(e, t, r) {
                "use strict";
                var n = this && this.__assign || function() {
                    return n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r])
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }
                    ,
                    n.apply(this, arguments)
                }
                  , o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = o(r(667))
                  , a = r(526)
                  , s = r(210)
                  , c = function() {}
                  , u = function() {
                    function e(e) {
                        this.conf = {},
                        this.meta = {},
                        this.levels = n({}, s.DEFAULT_LEVELS),
                        this.colors = n({}, s.DEFAULT_COLORS),
                        this.icons = n({}, s.DEFAULT_ICONS),
                        this.transport = function() {}
                        ,
                        this.log = c,
                        this.debug = c,
                        this.warn = c,
                        this.error = c,
                        this.success = c,
                        this.fail = c,
                        this.tip = c,
                        this.stress = c,
                        this.config(e),
                        this.setMethods()
                    }
                    return e.prototype.setMethods = function() {
                        var e = this;
                        Object.keys(this.levels).forEach((function(t) {
                            e.method(t, {
                                level: t
                            })
                        }
                        )),
                        this.method("tip", {
                            level: "log",
                            flag: "tip"
                        }),
                        this.method("success", {
                            level: "info",
                            flag: "success"
                        }),
                        this.method("stress", {
                            level: "warn",
                            flag: "stress"
                        }),
                        this.method("fail", {
                            level: "error",
                            flag: "fail"
                        })
                    }
                    ,
                    e.prototype.theme = function(e) {
                        var t = this;
                        ["colors", "icons"].forEach((function(r) {
                            Object.assign(t[r], n({}, e[r]))
                        }
                        ))
                    }
                    ,
                    e.prototype.config = function(e) {
                        var t = n({
                            color: !0,
                            timeStamp: !0,
                            print: !0,
                            level: 0,
                            metaColor: !1,
                            stringify: !1,
                            meta: {},
                            timeTemplate: "{{YYYY}}/{{MM}}/{{DD}} {{hh}}:{{mm}}:{{ss}}.{{mss}}",
                            wrapIcon: function(e) {
                                return "[".concat(e, "]")
                            },
                            wrapTag: function(e) {
                                return "[".concat(e, "]")
                            },
                            transport: null
                        }, e);
                        this.conf = t,
                        Object.assign(this.meta, n({}, t.meta)),
                        "function" == typeof t.transport && (this.transport = t.transport)
                    }
                    ,
                    e.prototype.fork = function(e) {
                        var t = this
                          , r = Object.create(this);
                        return Object.keys(this).forEach((function(e) {
                            var n, o = t[e];
                            "object" === (0,
                            i.default)(o) ? r[e] = (n = o,
                            JSON.parse(JSON.stringify(n))) : r[e] = o
                        }
                        )),
                        r.config(e),
                        r
                    }
                    ,
                    e.prototype.method = function(e, t) {
                        this[e] = function() {
                            for (var e = [], r = 0; r < arguments.length; r++)
                                e[r] = arguments[r];
                            var o = n({}, t);
                            this.output(o, e)
                        }
                    }
                    ,
                    e.prototype.destroy = function() {
                        var e = this;
                        this.conf.transport = null,
                        Object.keys(this).forEach((function(t) {
                            e[t] = null
                        }
                        ))
                    }
                    ,
                    e.prototype.output = function(e, t) {
                        var r = n({
                            level: "log",
                            flag: "",
                            color: ""
                        }, e)
                          , o = this
                          , i = o.conf
                          , s = o.meta
                          , c = o.levels
                          , u = o.colors
                          , f = o.icons
                          , l = {};
                        Object.assign(l, s);
                        var p = String(r.level) || "log"
                          , h = String(r.flag);
                        l.content = t,
                        l.level = p,
                        l.flag = h,
                        l.grade = Number(c[p]) || 0,
                        l.time = Date.now();
                        var d = f[String(r.flag)] || f[p]
                          , v = r.color || u[h] || u[p]
                          , g = [];
                        g = (g = t.slice(0)).map((function(e) {
                            var t = "";
                            return v && (t = String(v)),
                            {
                                color: t,
                                content: e
                            }
                        }
                        )),
                        Object.keys(s).reverse().forEach((function(e) {
                            var t = String(s[e]) || "";
                            if (t) {
                                var r = i.wrapTag(t, e)
                                  , n = {
                                    color: "gray",
                                    content: r
                                };
                                if (i.metaColor && (n.color = v || "gray",
                                "object" == typeof i.metaColor)) {
                                    var o = i.metaColor[e];
                                    n.color = o || "gray"
                                }
                                r && g.unshift(n)
                            }
                        }
                        ));
                        var m = i.wrapIcon(p);
                        if (d) {
                            var y = d.icon;
                            y && (m = i.wrapIcon(y));
                            var b = {
                                color: d.color || "",
                                content: m
                            };
                            g.unshift(b)
                        }
                        if (i.timeStamp) {
                            var w = (0,
                            a.formatTime)(Number(l.time), {
                                template: i.timeTemplate
                            });
                            g.unshift({
                                color: "gray",
                                content: w
                            })
                        }
                        var O = [];
                        O = i.color ? this.parseArgs(g) : g.map((function(e) {
                            return e.content
                        }
                        )),
                        i.stringify && (O = O.map((function(e) {
                            var t = typeof e;
                            return String("boolean" === t || "number" === t || "string" === t ? e : JSON.stringify(e)).replace(/[\r\n]/g, " ")
                        }
                        ))),
                        l.__content = O,
                        "function" == typeof this.transport && this.transport(l),
                        i.print && l.grade >= i.level && console.log.apply(console, O)
                    }
                    ,
                    e
                }();
                t.default = u
            },
            931: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.fixTo = void 0,
                t.fixTo = function(e, t) {
                    var r = e.toString()
                      , n = Math.max((t || 2) - r.length + 1, 0);
                    return new Array(n).join("0") + r
                }
            },
            912: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.substitute = void 0,
                t.substitute = function(e, t, r) {
                    return e.replace(r || /\\?\{\{([^{}]+)\}\}/g, (function(e, r) {
                        if ("\\" === e.charAt(0))
                            return e.slice(1);
                        var n = null !== t[r] && void 0 !== t[r] ? t[r] : "";
                        return String(n)
                    }
                    ))
                }
            },
            526: function(e, t, r) {
                "use strict";
                var n = this && this.__assign || function() {
                    return n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r])
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }
                    ,
                    n.apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.formatTime = void 0;
                var o = r(931)
                  , i = r(912);
                function a(e, t) {
                    var r = (0,
                    o.fixTo)(e, t)
                      , n = r.length - t;
                    return n > 0 ? r.substr(n) : r
                }
                t.formatTime = function(e, t) {
                    var r = {}
                      , s = n({
                        weekday: "日一二三四五六".split(""),
                        template: "{{YYYY}}-{{MM}}-{{DD}} {{hh}}:{{mm}}"
                    }, t)
                      , c = new Date(Number(e));
                    return r.year = c.getFullYear(),
                    r.month = c.getMonth() + 1,
                    r.date = c.getDate(),
                    r.day = c.getDay(),
                    r.hours = c.getHours(),
                    r.miniutes = c.getMinutes(),
                    r.seconds = c.getSeconds(),
                    r.milliSeconds = c.getMilliseconds(),
                    r.YYYY = a(r.year, 4),
                    r.YY = a(r.year, 2),
                    r.Y = String(r.year),
                    r.MM = (0,
                    o.fixTo)(r.month, 2),
                    r.M = String(r.month),
                    r.DD = (0,
                    o.fixTo)(r.date, 2),
                    r.D = String(r.date),
                    r.d = s.weekday[r.day],
                    r.hh = (0,
                    o.fixTo)(r.hours, 2),
                    r.h = String(r.hours),
                    r.mm = (0,
                    o.fixTo)(r.miniutes, 2),
                    r.m = String(r.miniutes),
                    r.ss = (0,
                    o.fixTo)(r.seconds, 2),
                    r.s = String(r.seconds),
                    r.mss = (0,
                    o.fixTo)(r.milliSeconds, 3),
                    r.ms = String(r.milliSeconds),
                    (0,
                    i.substitute)(s.template, r)
                }
            },
            667: function(e, t) {
                "use strict";
                function r(e) {
                    return Object.prototype.toString.call(e).toLowerCase().replace(/^\[object\s*|\]$/gi, "")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.type = void 0,
                t.type = r,
                t.default = r
            },
            505: function(e, t) {
                "use strict";
                var r = Object.prototype.hasOwnProperty;
                function n(e) {
                    try {
                        return decodeURIComponent(e.replace(/\+/g, " "))
                    } catch (e) {
                        return null
                    }
                }
                function o(e) {
                    try {
                        return encodeURIComponent(e)
                    } catch (e) {
                        return null
                    }
                }
                t.stringify = function(e, t) {
                    t = t || "";
                    var n, i, a = [];
                    for (i in "string" != typeof t && (t = "?"),
                    e)
                        if (r.call(e, i)) {
                            if ((n = e[i]) || null != n && !isNaN(n) || (n = ""),
                            i = o(i),
                            n = o(n),
                            null === i || null === n)
                                continue;
                            a.push(i + "=" + n)
                        }
                    return a.length ? t + a.join("&") : ""
                }
                ,
                t.parse = function(e) {
                    for (var t, r = /([^=?#&]+)=?([^&]*)/g, o = {}; t = r.exec(e); ) {
                        var i = n(t[1])
                          , a = n(t[2]);
                        null === i || null === a || i in o || (o[i] = a)
                    }
                    return o
                }
            },
            168: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    if (t = t.split(":")[0],
                    !(e = +e))
                        return !1;
                    switch (t) {
                    case "http":
                    case "ws":
                        return 80 !== e;
                    case "https":
                    case "wss":
                        return 443 !== e;
                    case "ftp":
                        return 21 !== e;
                    case "gopher":
                        return 70 !== e;
                    case "file":
                        return !1
                    }
                    return 0 !== e
                }
            },
            571: function(e, t, r) {
                "use strict";
                var n = r(168)
                  , o = r(505)
                  , i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
                  , a = /[\n\r\t]/g
                  , s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
                  , c = /:\d+$/
                  , u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
                  , f = /^[a-zA-Z]:/;
                function l(e) {
                    return (e || "").toString().replace(i, "")
                }
                var p = [["#", "hash"], ["?", "query"], function(e, t) {
                    return v(t.protocol) ? e.replace(/\\/g, "/") : e
                }
                , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
                  , h = {
                    hash: 1,
                    query: 1
                };
                function d(e) {
                    var t, n = ("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).location || {}, o = {}, i = typeof (e = e || n);
                    if ("blob:" === e.protocol)
                        o = new m(unescape(e.pathname),{});
                    else if ("string" === i)
                        for (t in o = new m(e,{}),
                        h)
                            delete o[t];
                    else if ("object" === i) {
                        for (t in e)
                            t in h || (o[t] = e[t]);
                        void 0 === o.slashes && (o.slashes = s.test(e.href))
                    }
                    return o
                }
                function v(e) {
                    return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
                }
                function g(e, t) {
                    e = (e = l(e)).replace(a, ""),
                    t = t || {};
                    var r, n = u.exec(e), o = n[1] ? n[1].toLowerCase() : "", i = !!n[2], s = !!n[3], c = 0;
                    return i ? s ? (r = n[2] + n[3] + n[4],
                    c = n[2].length + n[3].length) : (r = n[2] + n[4],
                    c = n[2].length) : s ? (r = n[3] + n[4],
                    c = n[3].length) : r = n[4],
                    "file:" === o ? c >= 2 && (r = r.slice(2)) : v(o) ? r = n[4] : o ? i && (r = r.slice(2)) : c >= 2 && v(t.protocol) && (r = n[4]),
                    {
                        protocol: o,
                        slashes: i || v(o),
                        slashesCount: c,
                        rest: r
                    }
                }
                function m(e, t, r) {
                    if (e = (e = l(e)).replace(a, ""),
                    !(this instanceof m))
                        return new m(e,t,r);
                    var i, s, c, u, h, y, b = p.slice(), w = typeof t, O = this, _ = 0;
                    for ("object" !== w && "string" !== w && (r = t,
                    t = null),
                    r && "function" != typeof r && (r = o.parse),
                    i = !(s = g(e || "", t = d(t))).protocol && !s.slashes,
                    O.slashes = s.slashes || i && t.slashes,
                    O.protocol = s.protocol || t.protocol || "",
                    e = s.rest,
                    ("file:" === s.protocol && (2 !== s.slashesCount || f.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !v(O.protocol))) && (b[3] = [/(.*)/, "pathname"]); _ < b.length; _++)
                        "function" != typeof (u = b[_]) ? (c = u[0],
                        y = u[1],
                        c != c ? O[y] = e : "string" == typeof c ? ~(h = "@" === c ? e.lastIndexOf(c) : e.indexOf(c)) && ("number" == typeof u[2] ? (O[y] = e.slice(0, h),
                        e = e.slice(h + u[2])) : (O[y] = e.slice(h),
                        e = e.slice(0, h))) : (h = c.exec(e)) && (O[y] = h[1],
                        e = e.slice(0, h.index)),
                        O[y] = O[y] || i && u[3] && t[y] || "",
                        u[4] && (O[y] = O[y].toLowerCase())) : e = u(e, O);
                    r && (O.query = r(O.query)),
                    i && t.slashes && "/" !== O.pathname.charAt(0) && ("" !== O.pathname || "" !== t.pathname) && (O.pathname = function(e, t) {
                        if ("" === e)
                            return t;
                        for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, o = r[n - 1], i = !1, a = 0; n--; )
                            "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1),
                            a++) : a && (0 === n && (i = !0),
                            r.splice(n, 1),
                            a--);
                        return i && r.unshift(""),
                        "." !== o && ".." !== o || r.push(""),
                        r.join("/")
                    }(O.pathname, t.pathname)),
                    "/" !== O.pathname.charAt(0) && v(O.protocol) && (O.pathname = "/" + O.pathname),
                    n(O.port, O.protocol) || (O.host = O.hostname,
                    O.port = ""),
                    O.username = O.password = "",
                    O.auth && (~(h = O.auth.indexOf(":")) ? (O.username = O.auth.slice(0, h),
                    O.username = encodeURIComponent(decodeURIComponent(O.username)),
                    O.password = O.auth.slice(h + 1),
                    O.password = encodeURIComponent(decodeURIComponent(O.password))) : O.username = encodeURIComponent(decodeURIComponent(O.auth)),
                    O.auth = O.password ? O.username + ":" + O.password : O.username),
                    O.origin = "file:" !== O.protocol && v(O.protocol) && O.host ? O.protocol + "//" + O.host : "null",
                    O.href = O.toString()
                }
                m.prototype = {
                    set: function(e, t, r) {
                        var i = this;
                        switch (e) {
                        case "query":
                            "string" == typeof t && t.length && (t = (r || o.parse)(t)),
                            i[e] = t;
                            break;
                        case "port":
                            i[e] = t,
                            n(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname,
                            i[e] = "");
                            break;
                        case "hostname":
                            i[e] = t,
                            i.port && (t += ":" + i.port),
                            i.host = t;
                            break;
                        case "host":
                            i[e] = t,
                            c.test(t) ? (t = t.split(":"),
                            i.port = t.pop(),
                            i.hostname = t.join(":")) : (i.hostname = t,
                            i.port = "");
                            break;
                        case "protocol":
                            i.protocol = t.toLowerCase(),
                            i.slashes = !r;
                            break;
                        case "pathname":
                        case "hash":
                            if (t) {
                                var a = "pathname" === e ? "/" : "#";
                                i[e] = t.charAt(0) !== a ? a + t : t
                            } else
                                i[e] = t;
                            break;
                        case "username":
                        case "password":
                            i[e] = encodeURIComponent(t);
                            break;
                        case "auth":
                            var s = t.indexOf(":");
                            ~s ? (i.username = t.slice(0, s),
                            i.username = encodeURIComponent(decodeURIComponent(i.username)),
                            i.password = t.slice(s + 1),
                            i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(t))
                        }
                        for (var u = 0; u < p.length; u++) {
                            var f = p[u];
                            f[4] && (i[f[1]] = i[f[1]].toLowerCase())
                        }
                        return i.auth = i.password ? i.username + ":" + i.password : i.username,
                        i.origin = "file:" !== i.protocol && v(i.protocol) && i.host ? i.protocol + "//" + i.host : "null",
                        i.href = i.toString(),
                        i
                    },
                    toString: function(e) {
                        e && "function" == typeof e || (e = o.stringify);
                        var t, r = this, n = r.host, i = r.protocol;
                        i && ":" !== i.charAt(i.length - 1) && (i += ":");
                        var a = i + (r.protocol && r.slashes || v(r.protocol) ? "//" : "");
                        return r.username ? (a += r.username,
                        r.password && (a += ":" + r.password),
                        a += "@") : r.password ? (a += ":" + r.password,
                        a += "@") : "file:" !== r.protocol && v(r.protocol) && !n && "/" !== r.pathname && (a += "@"),
                        (":" === n[n.length - 1] || c.test(r.hostname) && !r.port) && (n += ":"),
                        a += n + r.pathname,
                        (t = "object" == typeof r.query ? e(r.query) : r.query) && (a += "?" !== t.charAt(0) ? "?" + t : t),
                        r.hash && (a += r.hash),
                        a
                    }
                },
                m.extractProtocol = g,
                m.location = d,
                m.trimLeft = l,
                m.qs = o,
                e.exports = m
            },
            963: function(e, t, r) {
                "use strict";
                e.exports = r.p + "04a21cfb8e34324502c3.wasm"
            },
            636: function(e, t, r) {
                var n = r(91).default;
                function o() {
                    "use strict";
                    e.exports = o = function() {
                        return r
                    }
                    ,
                    e.exports.__esModule = !0,
                    e.exports.default = e.exports;
                    var t, r = {}, i = Object.prototype, a = i.hasOwnProperty, s = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    }
                    , c = "function" == typeof Symbol ? Symbol : {}, u = c.iterator || "@@iterator", f = c.asyncIterator || "@@asyncIterator", l = c.toStringTag || "@@toStringTag";
                    function p(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }),
                        e[t]
                    }
                    try {
                        p({}, "")
                    } catch (t) {
                        p = function(e, t, r) {
                            return e[t] = r
                        }
                    }
                    function h(e, t, r, n) {
                        var o = t && t.prototype instanceof w ? t : w
                          , i = Object.create(o.prototype)
                          , a = new N(n || []);
                        return s(i, "_invoke", {
                            value: L(e, r, a)
                        }),
                        i
                    }
                    function d(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    r.wrap = h;
                    var v = "suspendedStart"
                      , g = "suspendedYield"
                      , m = "executing"
                      , y = "completed"
                      , b = {};
                    function w() {}
                    function O() {}
                    function _() {}
                    var x = {};
                    p(x, u, (function() {
                        return this
                    }
                    ));
                    var C = Object.getPrototypeOf
                      , S = C && C(C(A([])));
                    S && S !== i && a.call(S, u) && (x = S);
                    var R = _.prototype = w.prototype = Object.create(x);
                    function T(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            p(e, t, (function(e) {
                                return this._invoke(t, e)
                            }
                            ))
                        }
                        ))
                    }
                    function E(e, t) {
                        function r(o, i, s, c) {
                            var u = d(e[o], e, i);
                            if ("throw" !== u.type) {
                                var f = u.arg
                                  , l = f.value;
                                return l && "object" == n(l) && a.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                    r("next", e, s, c)
                                }
                                ), (function(e) {
                                    r("throw", e, s, c)
                                }
                                )) : t.resolve(l).then((function(e) {
                                    f.value = e,
                                    s(f)
                                }
                                ), (function(e) {
                                    return r("throw", e, s, c)
                                }
                                ))
                            }
                            c(u.arg)
                        }
                        var o;
                        s(this, "_invoke", {
                            value: function(e, n) {
                                function i() {
                                    return new t((function(t, o) {
                                        r(e, n, t, o)
                                    }
                                    ))
                                }
                                return o = o ? o.then(i, i) : i()
                            }
                        })
                    }
                    function L(e, r, n) {
                        var o = v;
                        return function(i, a) {
                            if (o === m)
                                throw Error("Generator is already running");
                            if (o === y) {
                                if ("throw" === i)
                                    throw a;
                                return {
                                    value: t,
                                    done: !0
                                }
                            }
                            for (n.method = i,
                            n.arg = a; ; ) {
                                var s = n.delegate;
                                if (s) {
                                    var c = j(s, n);
                                    if (c) {
                                        if (c === b)
                                            continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (o === v)
                                        throw o = y,
                                        n.arg;
                                    n.dispatchException(n.arg)
                                } else
                                    "return" === n.method && n.abrupt("return", n.arg);
                                o = m;
                                var u = d(e, r, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? y : g,
                                    u.arg === b)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (o = y,
                                n.method = "throw",
                                n.arg = u.arg)
                            }
                        }
                    }
                    function j(e, r) {
                        var n = r.method
                          , o = e.iterator[n];
                        if (o === t)
                            return r.delegate = null,
                            "throw" === n && e.iterator.return && (r.method = "return",
                            r.arg = t,
                            j(e, r),
                            "throw" === r.method) || "return" !== n && (r.method = "throw",
                            r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                            b;
                        var i = d(o, e.iterator, r.arg);
                        if ("throw" === i.type)
                            return r.method = "throw",
                            r.arg = i.arg,
                            r.delegate = null,
                            b;
                        var a = i.arg;
                        return a ? a.done ? (r[e.resultName] = a.value,
                        r.next = e.nextLoc,
                        "return" !== r.method && (r.method = "next",
                        r.arg = t),
                        r.delegate = null,
                        b) : a : (r.method = "throw",
                        r.arg = new TypeError("iterator result is not an object"),
                        r.delegate = null,
                        b)
                    }
                    function k(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]),
                        2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                        this.tryEntries.push(t)
                    }
                    function I(e) {
                        var t = e.completion || {};
                        t.type = "normal",
                        delete t.arg,
                        e.completion = t
                    }
                    function N(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }],
                        e.forEach(k, this),
                        this.reset(!0)
                    }
                    function A(e) {
                        if (e || "" === e) {
                            var r = e[u];
                            if (r)
                                return r.call(e);
                            if ("function" == typeof e.next)
                                return e;
                            if (!isNaN(e.length)) {
                                var o = -1
                                  , i = function r() {
                                    for (; ++o < e.length; )
                                        if (a.call(e, o))
                                            return r.value = e[o],
                                            r.done = !1,
                                            r;
                                    return r.value = t,
                                    r.done = !0,
                                    r
                                };
                                return i.next = i
                            }
                        }
                        throw new TypeError(n(e) + " is not iterable")
                    }
                    return O.prototype = _,
                    s(R, "constructor", {
                        value: _,
                        configurable: !0
                    }),
                    s(_, "constructor", {
                        value: O,
                        configurable: !0
                    }),
                    O.displayName = p(_, l, "GeneratorFunction"),
                    r.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === O || "GeneratorFunction" === (t.displayName || t.name))
                    }
                    ,
                    r.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _,
                        p(e, l, "GeneratorFunction")),
                        e.prototype = Object.create(R),
                        e
                    }
                    ,
                    r.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }
                    ,
                    T(E.prototype),
                    p(E.prototype, f, (function() {
                        return this
                    }
                    )),
                    r.AsyncIterator = E,
                    r.async = function(e, t, n, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new E(h(e, t, n, o),i);
                        return r.isGeneratorFunction(t) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }
                        ))
                    }
                    ,
                    T(R),
                    p(R, l, "Generator"),
                    p(R, u, (function() {
                        return this
                    }
                    )),
                    p(R, "toString", (function() {
                        return "[object Generator]"
                    }
                    )),
                    r.keys = function(e) {
                        var t = Object(e)
                          , r = [];
                        for (var n in t)
                            r.push(n);
                        return r.reverse(),
                        function e() {
                            for (; r.length; ) {
                                var n = r.pop();
                                if (n in t)
                                    return e.value = n,
                                    e.done = !1,
                                    e
                            }
                            return e.done = !0,
                            e
                        }
                    }
                    ,
                    r.values = A,
                    N.prototype = {
                        constructor: N,
                        reset: function(e) {
                            if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = t,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = t,
                            this.tryEntries.forEach(I),
                            !e)
                                for (var r in this)
                                    "t" === r.charAt(0) && a.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type)
                                throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done)
                                throw e;
                            var r = this;
                            function n(n, o) {
                                return s.type = "throw",
                                s.arg = e,
                                r.next = n,
                                o && (r.method = "next",
                                r.arg = t),
                                !!o
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var i = this.tryEntries[o]
                                  , s = i.completion;
                                if ("root" === i.tryLoc)
                                    return n("end");
                                if (i.tryLoc <= this.prev) {
                                    var c = a.call(i, "catchLoc")
                                      , u = a.call(i, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0)
                                    } else {
                                        if (!u)
                                            throw Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var o = n;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = e,
                            i.arg = t,
                            o ? (this.method = "next",
                            this.next = o.finallyLoc,
                            b) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type)
                                throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === e.type && t && (this.next = t),
                            b
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e)
                                    return this.complete(r.completion, r.afterLoc),
                                    I(r),
                                    b
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        I(r)
                                    }
                                    return o
                                }
                            }
                            throw Error("illegal catch attempt")
                        },
                        delegateYield: function(e, r, n) {
                            return this.delegate = {
                                iterator: A(e),
                                resultName: r,
                                nextLoc: n
                            },
                            "next" === this.method && (this.arg = t),
                            b
                        }
                    },
                    r
                }
                e.exports = o,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            },
            91: function(e) {
                function t(r) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    e.exports.__esModule = !0,
                    e.exports.default = e.exports,
                    t(r)
                }
                e.exports = t,
                e.exports.__esModule = !0,
                e.exports.default = e.exports
            },
            971: function(e, t, r) {
                var n = r(636)();
                e.exports = n;
                try {
                    regeneratorRuntime = n
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
                }
            }
        }
          , t = {};
        function r(n) {
            var o = t[n];
            if (void 0 !== o)
                return o.exports;
            var i = t[n] = {
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r),
            i.exports
        }
        r.m = e,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, {
                a: t
            }),
            t
        }
        ,
        r.d = function(e, t) {
            for (var n in t)
                r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ,
        r.g = function() {
         return window
        }(),
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        function() {
            var e;
            r.g.importScripts && (e = r.g.location + "");
            var t = r.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src),
            !e)) {
                var n = 't.getElementsByTagName("script")';
                if (n.length)
                    for (var o = n.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
                        e = n[o--].src
            }
            if (!e){
                 console.log('Automatic publicPath is not supported in this browser')
            }
                // throw new Error("Automatic publicPath is not supported in this browser");

            // e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
            r.p = null
        }(),
        r.b = document.baseURI || self.location.href;
        var n = {};
        return function() {
            "use strict";
            function e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        e[n] = r[n]
                }
                return e
            }
            r.r(n),
            r.d(n, {
                VERSION: function() {
                    return Le
                },
                clearSignatureCache: function() {
                    return Te
                },
                cookie: function() {
                    return je
                },
                getSignature: function() {
                    return Ee
                }
            });
            var t = function t(r, n) {
                function o(t, o, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (i = e({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                        i.expires && (i.expires = i.expires.toUTCString()),
                        t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var a = "";
                        for (var s in i)
                            i[s] && (a += "; " + s,
                            !0 !== i[s] && (a += "=" + i[s].split(";")[0]));
                        return document.cookie = t + "=" + r.write(o, t) + a
                    }
                }
                return Object.create({
                    set: o,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < t.length; o++) {
                                var i = t[o].split("=")
                                  , a = i.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(i[0]);
                                    if (n[s] = r.read(a, s),
                                    e === s)
                                        break
                                } catch (e) {}
                            }
                            return e ? n[e] : n
                        }
                    },
                    remove: function(t, r) {
                        o(t, "", e({}, r, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(r) {
                        return t(this.converter, e({}, this.attributes, r))
                    },
                    withConverter: function(r) {
                        return t(e({}, this.converter, r), this.attributes)
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
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)),
                    e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
              , o = r(941)
              , i = r.n(o)
              , a = r(657)
              , s = r.n(a)
              , c = r(383)
              , u = r.n(c)
              , f = function(e, t) {
                return void 0 === t && (t = null),
                "undefined" != typeof window ? i()(window, e, t) : t
            };
            function l(e) {
                var t = e || f("navigator.userAgent", "");
                return /yangshipin\/v([\d.]+)/i.test(t)
            }
            var p = "guid"
              , h = function() {
                var e = "";
                try {
                    e = localStorage.getItem(p)
                } catch (t) {
                    e = ""
                }
                return e
            }
              , d = function() {
                var e = "";
                try {
                    e = t.get(p, {
                        domain: "yangshipin.cn",
                        path: "/"
                    })
                } catch (t) {
                    e = ""
                }
                return e
            }
              , v = function(e) {
                if (e)
                    try {
                        localStorage.setItem(p, e)
                    } catch (e) {}
            }
              , g = function(e) {
                if (e)
                    try {
                        t.set(p, e, {
                            domain: "yangshipin.cn",
                            path: "/",
                            expires: 36135
                        })
                    } catch (e) {}
            }
              , m = function() {
                var e = "";
                return e = d() || h(),
                l() || (v(e),
                g(e)),
                e || (e = Date.now().toString(36) + "_" + Math.random().toString(36).replace(/^0./, ""),
                l() || (g(e),
                v(e),
                e = d() || h()),
                e || (e = "private")),
                e
            }
              , y = r(870)
              , b = r.n(y)
              , w = {
                prefix: "cctvh5",
                name: "kits",
                getModuleName() {
                    return w.prefix + "-" + w.name
                },
                isShowLog() {
                    var e = u()(location.href, "felog")
                      , r = t.get("debug_felog")
                      , n = e || r || ""
                      , o = n.split(",");
                    return "on" === n || o.indexOf(w.name) >= 0
                },
                isTest() {
                    var e = u()(location.href, "test")
                      , r = t.get("debug_test")
                      , n = e || r || ""
                      , o = n.split(",");
                    return "on" === n || o.indexOf(w.name) >= 0
                }
            }
              , O = w
              , _ = 2;
            O.isShowLog() && (_ = 0);
            var x = new (b())({
                level: _,
                meta: {
                    module: O.getModuleName()
                }
            });
            function C() {
                _ = O.isShowLog() ? 0 : 2,
                x.conf.level = _
            }
            var S = x;
            C(),
            x.config({
                level: _,
                meta: {
                    module: "cctvh5-openapi"
                }
            });
            var R = S
              , T = "[state]"
              , E = {
                guid: "",
                token: "",
                yspappid: "",
                input: "",
                ts: "",
                version: "",
                query: {}
            };
            function L() {
                var e = m() || "";
                R.debug(T, "update state guid:", e),
                e && (E.guid = e)
            }
            function j() {
                var e = "v1"
                  , t = u()(window.location.href);
                return t.cver && (e = "" + t.cver),
                E.query = t,
                E.version = e,
                e
            }
            var k = r(971)
              , I = r.n(k)
              , N = {
                vappid: "59306155",
                vsecret: "b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801",
                raw: 1
            };
            O.name = "openapi",
            C();
            var A, P = O, D = r(587), U = r.n(D), M = r(571), F = r.n(M), G = function(e) {
                var t = {
                    name: "",
                    params: null,
                    withCredentials: !1,
                    customError: !1,
                    resolveErrorMsg: null,
                    formatResult: null
                }
                  , r = Object.assign(Object.assign({
                    url: "",
                    type: "get",
                    contentType: "application/json",
                    dataType: "json",
                    headers: null,
                    data: null
                }, t), e);
                "function" != typeof r.resolveErrorMsg && (r.resolveErrorMsg = function(e) {
                    R.error("Request error:", e)
                }
                );
                var n = r.url || "";
                /^http/.test(n) || (n = "" + location.protocol + n);
                var o = new (F())(n);
                r.name || (r.name = "" + o.host + o.pathname);
                var a = "GET";
                r.type && "string" == typeof r.type && (a = r.type.toUpperCase());
                var c = Object.assign({}, r);
                Object.keys(t).forEach((e=>{
                    delete c[e]
                }
                ));
                var u = r.params;
                if (u && "object" === s()(u)) {
                    var f = {};
                    Object.keys(u).forEach((e=>{
                        var t = u[e];
                        null != t && (f[e] = encodeURIComponent(t))
                    }
                    )),
                    n = U()(o.href, f)
                }
                var l, p = {
                    method: a,
                    cache: "no-store",
                    headers: Object.assign({
                        "content-type": r.contentType || "",
                            "origin": "https://www.yangshipin.cn"
                    }, r.headers)
                };
                console.log("headersdfsdf:",p)
                r.withCredentials && (p.credentials = "include"),
                "object" === s()(r.data) ? p.body = JSON.stringify(r.data) : "string" == typeof r.data && (p.body = r.data);
                console.log("call feahtchsdf")



                var h = fetch1.then((fetch1)=>{
                     console.log("sdfsdaf： n",n)
                        console.log("sdfsdaf： p",p)
                    async function customFetch(url, options) {
                            try {
                              const response = await fetch1(url, options);
                              const data = await response.json();
                              return data;
                            } catch (error) {
                              console.error('Error:', error);
                            }
                          }

                    var n='https://h5access.yangshipin.cn/web/open/token?yspappid=519748109&guid=lxzromby_kqzbkpnzo7&vappid=59306155&vsecret=b42702bf7309a179d102f3d51b1add2fda0bc7ada64cb801&raw=1&version=v1&ts=1719689095297&rnd=6b8a0155efddf6d2eeadae9ebada131b'
                    customFetch(n, {
                method: 'GET',
                headers: {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "dnt": "1",
                "origin": "https://www.yangshipin.cn",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "referer": "https://www.yangshipin.cn/",
                "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }
  }).then(data => {
                          console.log('sdfasdfdsfsd',data.data);
                         return Promise.resolve(data.data)
                        }).catch(e=>{});

                //      fetch1(n, p)
                //          .then((e=>{
                //     // console.log('featchlog ',e)
                //     l = e;
                //     var t = r.dataType
                //       , n = void 0 === t ? "json" : t
                //       , o = !1;
                //     if (l.status >= 200 && l.status <= 299 && (o = !0),
                //     !o)
                //         return null;
                //     switch (n) {
                //     case "text":
                //         return e.text();
                //     case "arrayBuffer":
                //         return e.arrayBuffer();
                //     case "blob":
                //         return e.blob();
                //     case "formData":
                //         return e.formData();
                //     default:
                //         return e.json()
                //     }
                // }
                //             ))
                //          .then((e=>function(e)
                // {
                //             // console.log('featchlog2 ',e)
                //     var t, r = e.response, n = e.data, o = e.conf, a = r ? r.status : 0, c = r ? r.statusText : "null", u = n;
                //     if (R.debug(["request end. response.status: " + a, "result:"].join("\n"), u),
                //     "json" === o.dataType)
                //         if (u) {
                //             var f = {};
                //             if ("object" === s()(o.formatResult)) {
                //                 var l = o.formatResult;
                //                 Object.keys(l).forEach((e=>{
                //                     var t = l[e];
                //                     f[e] = i()(r, t)
                //                 }
                //                 ))
                //             } else
                //                 f = "function" === s()(o.formatResult) ? o.formatResult(u) : u;
                //             if (o.customError)
                //                 t = f;
                //             else if (0 === f.ret)
                //                 t = f.data;
                //             else if (f.msg) {
                //                 var p = new Error("(" + f.ret + ")" + f.msg);
                //                 p.code = i()(f, "ret", 0),
                //                 t = Promise.reject(p)
                //             } else if (f.ret) {
                //                 var h = new Error("(" + f.ret + ")网络暂不可用，请稍后打开");
                //                 h.code = i()(f, "ret", 0),
                //                 t = Promise.reject(h)
                //             } else
                //                 t = Promise.reject(new Error("接口返回格式错误:" + c))
                //         } else
                //             t = Promise.reject(new Error("无数据返回"));
                //     else
                //         t = n;
                //     return t
                // }(
                //     {
                //     response: l,
                //     data: e,
                //     conf: r
                // })))


                })
                h.then(res=>{
                    console.log('h res:',res)
                })
                return h
            };
            function Y(e, t, r, n, o, i, a) {
                try {
                    var s = e[i](a)
                      , c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o)
            }
            function q(e) {
                return function() {
                    var t = this
                      , r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);
                        function a(e) {
                            Y(i, n, o, a, s, "next", e)
                        }
                        function s(e) {
                            Y(i, n, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var W = new Array(128).fill(void 0);
            function B(e) {
                return W[e]
            }
            W.push(void 0, null, !0, !1);
            var $ = 0
              , V = null;
            function z() {
                return null !== V && 0 !== V.byteLength || (V = new Uint8Array(A.memory.buffer)),
                V
            }
            var J = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
                encode: ()=>{
                    throw Error("TextEncoder not available")
                }
            }
              , Z = "function" == typeof J.encodeInto ? function(e, t) {
                return J.encodeInto(e, t)
            }
            : function(e, t) {
                var r = J.encode(e);
                return t.set(r),
                {
                    read: e.length,
                    written: r.length
                }
            }
              , H = null;
            function K() {
                return null !== H && 0 !== H.byteLength || (H = new Int32Array(A.memory.buffer)),
                H
            }
            var Q = W.length;
            var X = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
                ignoreBOM: !0,
                fatal: !0
            }) : {
                decode: ()=>{
                    throw Error("TextDecoder not available")
                }
            };
            function ee(e, t) {
                return e >>>= 0,
                X.decode(z().subarray(e, e + t))
            }
            function te() {
                var e, t;
                try {
                    var r = A.__wbindgen_add_to_stack_pointer(-16);
                    A.get_token_rnd(r);
                    var n = K()[r / 4 + 0]
                      , o = K()[r / 4 + 1];
                    return e = n,
                    t = o,
                    ee(n, o)
                } finally {
                    A.__wbindgen_add_to_stack_pointer(16),
                    A.__wbindgen_free(e, t, 1)
                }
            }
            function re() {
                var e, t;
                try {
                    var r = A.__wbindgen_add_to_stack_pointer(-16);
                    A.get_signature(r);
                    var n = K()[r / 4 + 0]
                      , o = K()[r / 4 + 1];
                    return e = n,
                    t = o,
                    ee(n, o)
                } finally {
                    A.__wbindgen_add_to_stack_pointer(16),
                    A.__wbindgen_free(e, t, 1)
                }
            }
            function ne(e, t) {
                return oe.apply(this, arguments)
            }
            function oe() {
                return (oe = q(I().mark((function e(t, r) {
                    var n, o;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!("function" == typeof Response && t instanceof Response)) {
                                    e.next = 23;
                                    break
                                }
                                if ("function" != typeof WebAssembly.instantiateStreaming) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 2,
                                e.next = 5,
                                WebAssembly.instantiateStreaming(t, r);
                            case 5:
                            case 20:
                                return e.abrupt("return", e.sent);
                            case 8:
                                if (e.prev = 8,
                                e.t0 = e.catch(2),
                                "application/wasm" == t.headers.get("Content-Type")) {
                                    e.next = 14;
                                    break
                                }
                                console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e.t0),
                                e.next = 15;
                                break;
                            case 14:
                                throw e.t0;
                            case 15:
                                return e.next = 17,
                                t.arrayBuffer();
                            case 17:
                                return n = e.sent,
                                e.next = 20,
                                WebAssembly.instantiate(n, r);
                            case 23:
                                return e.next = 25,
                                WebAssembly.instantiate(t, r);
                            case 25:
                                if (!((o = e.sent)instanceof WebAssembly.Instance)) {
                                    e.next = 30;
                                    break
                                }
                                return e.abrupt("return", {
                                    instance: o,
                                    module: t
                                });
                            case 30:
                                return e.abrupt("return", o);
                            case 31:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 8]])
                }
                )))).apply(this, arguments)
            }
            function ie() {
                var e = {
                    wbg: {}
                };
                return e.wbg.__wbg_get_9c1840f7ecd81363 = function(e, t) {
                    var r, n;
                    try {
                        return r = e,
                        n = t,
                        function(e) {
                            Q === W.length && W.push(W.length + 1);
                            var t = Q;
                            return Q = W[t],
                            W[t] = e,
                            t
                        }(window.cctvh5openapi.get(ee(e, t)))
                    } finally {
                        A.__wbindgen_free(r, n, 1)
                    }
                }
                ,
                e.wbg.__wbindgen_string_get = function(e, t) {
                    var r = B(t)
                      , n = "string" == typeof r ? r : void 0
                      , o = null == n ? 0 : function(e, t, r) {
                        if (void 0 === r) {
                            var n = J.encode(e)
                              , o = t(n.length, 1) >>> 0;
                            return z().subarray(o, o + n.length).set(n),
                            $ = n.length,
                            o
                        }
                        for (var i = e.length, a = t(i, 1) >>> 0, s = z(), c = 0; c < i; c++) {
                            var u = e.charCodeAt(c);
                            if (u > 127)
                                break;
                            s[a + c] = u
                        }
                        if (c !== i) {
                            0 !== c && (e = e.slice(c)),
                            a = r(a, i, i = c + 3 * e.length, 1) >>> 0;
                            var f = z().subarray(a + c, a + i);
                            a = r(a, i, c += Z(e, f).written, 1) >>> 0
                        }
                        return $ = c,
                        a
                    }(n, A.__wbindgen_malloc, A.__wbindgen_realloc)
                      , i = $;
                    K()[e / 4 + 1] = i,
                    K()[e / 4 + 0] = o
                }
                ,
                e.wbg.__wbindgen_object_drop_ref = function(e) {
                    var t;
                    B(t = e),
                    function(e) {
                        e < 132 || (W[e] = Q,
                        Q = e)
                    }(t)
                }
                ,
                e
            }
            function ae(e, t) {
                return A = e.exports,
                ce.__wbindgen_wasm_module = t,
                H = null,
                V = null,
                A
            }
            function se(e) {
                if (void 0 !== A)
                    return A;
                var t = ie();
                return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
                ae(new WebAssembly.Instance(e,t), e)
            }
            function ce(e) {
                return ue.apply(this, arguments)
            }
            function ue() {
                return (ue = q(I().mark((function e(t) {
                    var n, o, i, a;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (void 0 === A) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", A);
                            case 2:
                                return void 0 === t && (t = new URL(r(963),r.b)),
                                n = ie(),
                                ("string" == typeof t || "function" == typeof Request && t instanceof Request || "function" == typeof URL && t instanceof URL) && (t = fetch(t)),
                                e.t0 = ne,
                                e.next = 9,
                                t;
                            case 9:
                                return e.t1 = e.sent,
                                e.t2 = n,
                                e.next = 13,
                                (0,
                                e.t0)(e.t1, e.t2);
                            case 13:
                                return o = e.sent,
                                i = o.instance,
                                a = o.module,
                                e.abrupt("return", ae(i, a));
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            "undefined" != typeof TextDecoder && X.decode();
            var fe = ce
              , le = function(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                        t instanceof r ? t : new r((function(e) {
                            e(t)
                        }
                        ))).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , pe = "[wasm]"
              , he = null;
            function de(e) {
                return he || (he = window.fetch(e, {
                    headers: {
                        Accept: "application/wasm"
                    }
                }).then((e=>e.arrayBuffer())))
            }
            function ve(e) {
                return le(this, void 0, void 0, I().mark((function t() {
                    var r, n;
                    return I().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                de(e);
                            case 2:
                                return r = t.sent,
                                se(n = new WebAssembly.Module(r)),
                                t.abrupt("return", n);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            function ge(e) {
                return le(this, void 0, void 0, I().mark((function t() {
                    var r, n;
                    return I().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return r = de(e),
                                t.next = 3,
                                fe(r);
                            case 3:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            var me = null
              , ye = null;
            function be() {
                if (!me)
                    return ye || (ye = function() {
                        return le(this, void 0, void 0, I().mark((function e() {
                            var t, r, n, o, i, a;
                            return I().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t = "",
                                        r = 0,
                                        P.isTest() ? (t = "https://mtest.yangshipin.cn/s/CCTVVideo/cctvh5-openapicore",
                                        r = Date.now()) : (t = "https://s.yangshipin.cn/CCTVVideo/cctvh5-openapicore",
                                        r = Math.floor((new Date).getTime() / 6e4)),
                                        n = t + "/keygen_bg.wasm?ts=" + r,
                                        R.debug(pe, "load wasm:", n),
                                        o = Date.now(),
                                        me) {
                                            e.next = 12;
                                            break
                                        }
                                        return i = new Promise((e=>{
                                            ve(n).then(e).catch((e=>{
                                                R.warn(pe, e)
                                            }
                                            )),
                                            ge(n).then(e).catch((e=>{
                                                R.warn(pe, e)
                                            }
                                            ))
                                        }
                                        )).catch((e=>{
                                            R.warn(pe, e)
                                        }
                                        )),
                                        e.next = 11,
                                        i;
                                    case 11:
                                        me = e.sent;
                                    case 12:
                                        return a = Date.now(),
                                        R.debug(pe, "load wasm done. cost " + (a - o) + "ms"),
                                        e.abrupt("return", me);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))
                    }(),
                    setTimeout((()=>{
                        ye = null
                    }
                    ), 5e3)),
                    ye
            }
            var we = function(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                        t instanceof r ? t : new r((function(e) {
                            e(t)
                        }
                        ))).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , Oe = "[yspapp]";
            class _e {
                constructor(e) {
                    Object.defineProperty(this, "yspappid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, "pmRefreshToken", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }),
                    Object.defineProperty(this, "token", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: ""
                    }),
                    Object.defineProperty(this, "expireTime", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }),
                    Object.defineProperty(this, "refreshTimer", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }),
                    Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: ""
                    }),
                    this.yspappid = (null == e ? void 0 : e.yspappid) || ""
                }
                fetchToken() {
                    return we(this, void 0, void 0, I().mark((function e() {
                        var t, r, n, o, i, a, s, c;
                        return I().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (R.debug(Oe, "fetch token"),
                                    t = this.yspappid,
                                    L(),
                                    r = E.guid,
                                    t) {
                                        e.next = 7;
                                        break
                                    }
                                    return R.error(Oe, "require yspappid"),
                                    e.abrupt("return", null);
                                case 7:
                                    if (r) {
                                        e.next = 10;
                                        break
                                    }
                                    return R.error(Oe, "require guid"),
                                    e.abrupt("return", null);
                                case 10:
                                    return n = P.isTest() ? "h5api" : "h5access",
                                    o = "https://" + n + ".yangshipin.cn/web/open/token",
                                    i = j(),
                                    a = Date.now(),
                                    E.yspappid = t,
                                    E.ts = "" + a,
                                    s = te(),
                                    e.next = 19,
                                    G({
                                        url: o,
                                        withCredentials: !0,
                                        params: Object.assign(Object.assign({
                                            yspappid: t,
                                            guid: r
                                        }, N), {
                                            version: i,
                                            ts: a,
                                            rnd: s
                                        })
                                    });
                                case 19:
                                    console.log('e.sent',e.sent)
                                    return (c = e.sent).token || R.warn("fetch token error"),
                                    e.abrupt("return", c);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
                refreshToken() {
                    return we(this, void 0, void 0, I().mark((function e() {
                        var t, r, n, o, i;
                        return I().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return R.debug(Oe, "refresh token"),
                                    this.clearRefreshTask(),
                                    t = Date.now(),
                                    e.next = 5,
                                    console.log("call fetchToken"),
                                    this.fetchToken();
                                case 5:
                                    r = e.sent,
                                    n = Date.now(),
                                    R.debug(Oe, "fetch token cost " + (n - t) + "ms"),
                                    r && (this.token = (null == r ? void 0 : r.token) || "",
                                    o = parseInt("" + r.expire, 10) || 0,
                                    i = Math.max(o, 6e4),
                                    this.token && (this.expireTime = n + i),
                                    this.setRefreshTask(i - 3e4));
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
                getCachedToken() {
                    return we(this, void 0, void 0, I().mark((function e() {
                        var t;
                        return I().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (R.debug(Oe, "get cached token"),
                                    t = this.token || "",
                                    Date.now() > this.expireTime && (t = "",
                                    this.token = ""),
                                    this.token) {
                                        e.next = 10;
                                        break
                                    }
                                    return this.pmRefreshToken || (this.pmRefreshToken = this.refreshToken()),
                                    e.next = 8,
                                    this.pmRefreshToken;
                                case 8:
                                    this.pmRefreshToken = null,
                                    t = this.token || "";
                                case 10:
                                    return e.abrupt("return", t);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
                getSignature(e) {
                    return void 0 === e && (e = ""),
                    we(this, void 0, void 0, I().mark((function t() {
                        var r, n, o, i, a;
                        return I().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    be();
                                case 2:
                                    return t.next = 4,
                                    this.getCachedToken();
                                case 4:
                                    return r = t.sent,
                                    n = this.yspappid,
                                    E.yspappid = n,
                                    E.token = r,
                                    E.input = e,
                                    o = Date.now(),
                                    R.debug(Oe, "compute signature start"),
                                    i = re(),
                                    a = Date.now(),
                                    R.debug(Oe, "compute signature cos: " + (a - o) + "ms"),
                                    t.abrupt("return", i);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
                setRefreshTask(e) {
                    this.clearRefreshTask(),
                    this.refreshTimer = setTimeout((()=>{
                        this.refreshToken()
                    }
                    ), e)
                }
                clearRefreshTask() {
                    this.refreshTimer && (clearTimeout(this.refreshTimer),
                    this.refreshTimer = null)
                }
                clearCache() {
                    this.token = "",
                    this.expireTime = 0
                }
            }
            var xe = function(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                        t instanceof r ? t : new r((function(e) {
                            e(t)
                        }
                        ))).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , Ce = ["yspappid"]
              , Se = "[get-signature]"
              , Re = new Map;
            function Te() {
                R.debug(Se, "clear signature cache"),
                Re.forEach((e=>{
                    e.clearCache()
                }
                ))
            }
            function Ee(e) {
                console.log("Ex",e)
                return xe(this, void 0, void 0, I().mark((function t() {
                    var r, n, o, i, a, s, c, u, f, l, p, h, d;
                    return I().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (R.debug(Se, "get signature options:", e),
                                r = Object.assign({
                                    guid: "",
                                    input: ""
                                }, e),
                                n = r.yspappid,
                                o = void 0 === n ? "" : n,
                                i = r.input,
                                a = void 0 === i ? "" : i,
                                s = r.guid,
                                c = void 0 === s ? "" : s,
                                u = {
                                    openapi_signature: ""
                                },
                                L(),
                                (f = Ce.filter((e=>!r[e]))).forEach((e=>{
                                    R.error(Se, "require " + e)
                                }
                                )),
                                !(f.length > 0)) {
                                    t.next = 9;
                                    break
                                }
                                return t.abrupt("return", u);
                            case 9:
                                return c && (E.guid = c),
                                l = (new Date).getTime(),

                                (p = Re.get(o)) || (p = new _e({
                                    yspappid: o
                                }),
                                Re.set(o, p)),
                                t.next = 15,
                                p.getSignature(a);
                            case 15:
                                return h = t.sent,
                                d = (new Date).getTime(),
                                R.debug(Se, "get signature " + h + " cost " + (d - l) + "ms"),
                                u.openapi_signature = h,
                                t.abrupt("return", u);
                            case 20:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            L();
            var Le = "1.0.0"
              , je = t
              , ke = "cctvh5openapi";
            window[ke] || (window[ke] = {
                state: E,
                get: function(e) {
                    var t = i()(window, e);
                    return "string" == typeof t ? t : "number" == typeof t || "boolean" == typeof t || null == t ? "" + t : s()(t)
                }
            }),
            R.info("version:", Le)
        }(),
        n
    }()
}
));
