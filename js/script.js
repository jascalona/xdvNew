!function() {
    "use strict";
    !function() {
        function e(e) {
            for (var t = []; e = e.parentNode || e.host || e.defaultView; )
                t.push(e);
            return t
        }
        function t(e) {
            return function(t) {
                var r = void 0 !== t.getAttribute ? t.getAttribute("class") || "" : void 0;
                r && -1 === r.indexOf(e) && t.setAttribute("class", r.concat(" ", e).trim())
            }
        }
        try {
            document.querySelector(":focus-within")
        } catch (r) {
            return function() {
                function r(r) {
                    if (!n) {
                        window.requestAnimationFrame((function() {
                            n = !1,
                            "blur" === r.type && Array.prototype.slice.call(e(r.target)).forEach(function(e) {
                                return function(t) {
                                    var r = void 0 !== t.getAttribute ? t.getAttribute("class") || "" : void 0;
                                    r && -1 !== r.indexOf(e) && ("" === (r = r.replace(e, "").trim()) ? t.removeAttribute("class") : t.setAttribute("class", r))
                                }
                            }("focus-within")),
                            "focus" === r.type && Array.prototype.slice.call(e(r.target)).forEach(t("focus-within"))
                        }
                        ));
                        var n = !0
                    }
                }
                return document.addEventListener("focus", r, !0),
                document.addEventListener("blur", r, !0),
                t("js-focus-within")(document.body),
                !0
            }()
        }
    }();
    var e = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , t = {}.toString
      , r = function(e) {
        return t.call(e).slice(8, -1)
    }
      , n = "".split
      , i = e((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == r(e) ? n.call(e, "") : Object(e)
    }
    : Object
      , o = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
      , a = function(e) {
        return i(o(e))
    }
      , s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function l(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function c(e, t, r) {
        return e(r = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && r.path)
            }
        }, r.exports),
        r.exports
    }
    var u = "object"
      , d = function(e) {
        return e && e.Math == Math && e
    }
      , f = d(typeof globalThis == u && globalThis) || d(typeof window == u && window) || d(typeof self == u && self) || d(typeof s == u && s) || Function("return this")()
      , h = !e((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , v = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , p = f.document
      , m = v(p) && v(p.createElement)
      , y = function(e) {
        return m ? p.createElement(e) : {}
    }
      , w = !h && !e((function() {
        return 7 != Object.defineProperty(y("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , g = function(e) {
        if (!v(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
      , x = function(e, t) {
        if (!v(e))
            return e;
        var r, n;
        if (t && "function" == typeof (r = e.toString) && !v(n = r.call(e)))
            return n;
        if ("function" == typeof (r = e.valueOf) && !v(n = r.call(e)))
            return n;
        if (!t && "function" == typeof (r = e.toString) && !v(n = r.call(e)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }
      , b = Object.defineProperty
      , _ = {
        f: h ? b : function(e, t, r) {
            if (g(e),
            t = x(t, !0),
            g(r),
            w)
                try {
                    return b(e, t, r)
                } catch (e) {}
            if ("get"in r || "set"in r)
                throw TypeError("Accessors not supported");
            return "value"in r && (e[t] = r.value),
            e
        }
    }
      , k = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , S = h ? function(e, t, r) {
        return _.f(e, t, k(1, r))
    }
    : function(e, t, r) {
        return e[t] = r,
        e
    }
      , A = function(e, t) {
        try {
            S(f, e, t)
        } catch (r) {
            f[e] = t
        }
        return t
    }
      , E = c((function(e) {
        var t = f["__core-js_shared__"] || A("__core-js_shared__", {});
        (e.exports = function(e, r) {
            return t[e] || (t[e] = void 0 !== r ? r : {})
        }
        )("versions", []).push({
            version: "3.1.2",
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    ))
      , T = 0
      , C = Math.random()
      , L = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++T + C).toString(36))
    }
      , I = !!Object.getOwnPropertySymbols && !e((function() {
        return !String(Symbol())
    }
    ))
      , R = E("wks")
      , O = f.Symbol
      , D = function(e) {
        return R[e] || (R[e] = I && O[e] || (I ? O : L)("Symbol." + e))
    }
      , F = {}.hasOwnProperty
      , N = function(e, t) {
        return F.call(e, t)
    }
      , q = Math.ceil
      , H = Math.floor
      , M = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? H : q)(e)
    }
      , P = Math.min
      , z = function(e) {
        return e > 0 ? P(M(e), 9007199254740991) : 0
    }
      , j = Math.max
      , U = Math.min
      , B = function(e, t) {
        var r = M(e);
        return r < 0 ? j(r + t, 0) : U(r, t)
    }
      , V = function(e) {
        return function(t, r, n) {
            var i, o = a(t), s = z(o.length), l = B(n, s);
            if (e && r != r) {
                for (; s > l; )
                    if ((i = o[l++]) != i)
                        return !0
            } else
                for (; s > l; l++)
                    if ((e || l in o) && o[l] === r)
                        return e || l || 0;
            return !e && -1
        }
    }
      , W = {}
      , G = V(!1)
      , Y = function(e, t) {
        var r, n = a(e), i = 0, o = [];
        for (r in n)
            !N(W, r) && N(n, r) && o.push(r);
        for (; t.length > i; )
            N(n, r = t[i++]) && (~G(o, r) || o.push(r));
        return o
    }
      , X = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      , K = Object.keys || function(e) {
        return Y(e, X)
    }
      , $ = h ? Object.defineProperties : function(e, t) {
        g(e);
        for (var r, n = K(t), i = n.length, o = 0; i > o; )
            _.f(e, r = n[o++], t[r]);
        return e
    }
      , Q = f.document
      , J = Q && Q.documentElement
      , Z = E("keys")
      , ee = function(e) {
        return Z[e] || (Z[e] = L(e))
    }
      , te = ee("IE_PROTO")
      , re = function() {}
      , ne = function() {
        var e, t = y("iframe"), r = X.length;
        for (t.style.display = "none",
        J.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        ne = e.F; r--; )
            delete ne.prototype[X[r]];
        return ne()
    }
      , ie = Object.create || function(e, t) {
        var r;
        return null !== e ? (re.prototype = g(e),
        r = new re,
        re.prototype = null,
        r[te] = e) : r = ne(),
        void 0 === t ? r : $(r, t)
    }
    ;
    W[te] = !0;
    var oe = D("unscopables")
      , ae = Array.prototype;
    null == ae[oe] && S(ae, oe, ie(null));
    var se, le, ce, ue = function(e) {
        ae[oe][e] = !0
    }, de = {}, fe = E("native-function-to-string", Function.toString), he = f.WeakMap, ve = "function" == typeof he && /native code/.test(fe.call(he)), pe = f.WeakMap;
    if (ve) {
        var me = new pe
          , ye = me.get
          , we = me.has
          , ge = me.set;
        se = function(e, t) {
            return ge.call(me, e, t),
            t
        }
        ,
        le = function(e) {
            return ye.call(me, e) || {}
        }
        ,
        ce = function(e) {
            return we.call(me, e)
        }
    } else {
        var xe = ee("state");
        W[xe] = !0,
        se = function(e, t) {
            return S(e, xe, t),
            t
        }
        ,
        le = function(e) {
            return N(e, xe) ? e[xe] : {}
        }
        ,
        ce = function(e) {
            return N(e, xe)
        }
    }
    var be, _e, ke, Se = {
        set: se,
        get: le,
        has: ce,
        enforce: function(e) {
            return ce(e) ? le(e) : se(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var r;
                if (!v(t) || (r = le(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return r
            }
        }
    }, Ae = {}.propertyIsEnumerable, Ee = Object.getOwnPropertyDescriptor, Te = {
        f: Ee && !Ae.call({
            1: 2
        }, 1) ? function(e) {
            var t = Ee(this, e);
            return !!t && t.enumerable
        }
        : Ae
    }, Ce = Object.getOwnPropertyDescriptor, Le = {
        f: h ? Ce : function(e, t) {
            if (e = a(e),
            t = x(t, !0),
            w)
                try {
                    return Ce(e, t)
                } catch (e) {}
            if (N(e, t))
                return k(!Te.f.call(e, t), e[t])
        }
    }, Ie = c((function(e) {
        var t = Se.get
          , r = Se.enforce
          , n = String(fe).split("toString");
        E("inspectSource", (function(e) {
            return fe.call(e)
        }
        )),
        (e.exports = function(e, t, i, o) {
            var a = !!o && !!o.unsafe
              , s = !!o && !!o.enumerable
              , l = !!o && !!o.noTargetGet;
            "function" == typeof i && ("string" != typeof t || N(i, "name") || S(i, "name", t),
            r(i).source = n.join("string" == typeof t ? t : "")),
            e !== f ? (a ? !l && e[t] && (s = !0) : delete e[t],
            s ? e[t] = i : S(e, t, i)) : s ? e[t] = i : A(t, i)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && t(this).source || fe.call(this)
        }
        ))
    }
    )), Re = X.concat("length", "prototype"), Oe = {
        f: Object.getOwnPropertyNames || function(e) {
            return Y(e, Re)
        }
    }, De = {
        f: Object.getOwnPropertySymbols
    }, Fe = f.Reflect, Ne = Fe && Fe.ownKeys || function(e) {
        var t = Oe.f(g(e))
          , r = De.f;
        return r ? t.concat(r(e)) : t
    }
    , qe = function(e, t) {
        for (var r = Ne(t), n = _.f, i = Le.f, o = 0; o < r.length; o++) {
            var a = r[o];
            N(e, a) || n(e, a, i(t, a))
        }
    }, He = /#|\.prototype\./, Me = function(t, r) {
        var n = ze[Pe(t)];
        return n == Ue || n != je && ("function" == typeof r ? e(r) : !!r)
    }, Pe = Me.normalize = function(e) {
        return String(e).replace(He, ".").toLowerCase()
    }
    , ze = Me.data = {}, je = Me.NATIVE = "N", Ue = Me.POLYFILL = "P", Be = Me, Ve = Le.f, We = function(e, t) {
        var r, n, i, o, a, s = e.target, l = e.global, c = e.stat;
        if (r = l ? f : c ? f[s] || A(s, {}) : (f[s] || {}).prototype)
            for (n in t) {
                if (o = t[n],
                i = e.noTargetGet ? (a = Ve(r, n)) && a.value : r[n],
                !Be(l ? n : s + (c ? "." : "#") + n, e.forced) && void 0 !== i) {
                    if (typeof o == typeof i)
                        continue;
                    qe(o, i)
                }
                (e.sham || i && i.sham) && S(o, "sham", !0),
                Ie(r, n, o, e)
            }
    }, Ge = function(e) {
        return Object(o(e))
    }, Ye = !e((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    )), Xe = ee("IE_PROTO"), Ke = Object.prototype, $e = Ye ? Object.getPrototypeOf : function(e) {
        return e = Ge(e),
        N(e, Xe) ? e[Xe] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ke : null
    }
    , Qe = D("iterator"), Je = !1;
    [].keys && ("next"in (ke = [].keys()) ? (_e = $e($e(ke))) !== Object.prototype && (be = _e) : Je = !0),
    null == be && (be = {}),
    N(be, Qe) || S(be, Qe, (function() {
        return this
    }
    ));
    var Ze = {
        IteratorPrototype: be,
        BUGGY_SAFARI_ITERATORS: Je
    }
      , et = _.f
      , tt = D("toStringTag")
      , rt = function(e, t, r) {
        e && !N(e = r ? e : e.prototype, tt) && et(e, tt, {
            configurable: !0,
            value: t
        })
    }
      , nt = Ze.IteratorPrototype
      , it = function() {
        return this
    }
      , ot = function(e, t, r) {
        var n = t + " Iterator";
        return e.prototype = ie(nt, {
            next: k(1, r)
        }),
        rt(e, n, !1),
        de[n] = it,
        e
    }
      , at = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, r = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []),
            t = r instanceof Array
        } catch (e) {}
        return function(r, n) {
            return function(e, t) {
                if (g(e),
                !v(t) && null !== t)
                    throw TypeError("Can't set " + String(t) + " as a prototype")
            }(r, n),
            t ? e.call(r, n) : r.__proto__ = n,
            r
        }
    }() : void 0)
      , st = D("iterator")
      , lt = Ze.IteratorPrototype
      , ct = Ze.BUGGY_SAFARI_ITERATORS
      , ut = function() {
        return this
    }
      , dt = function(e, t, r, n, i, o, a) {
        ot(r, t, n);
        var s, l, c, u = function(e) {
            if (e === i && p)
                return p;
            if (!ct && e in h)
                return h[e];
            switch (e) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new r(this,e)
                }
            }
            return function() {
                return new r(this)
            }
        }, d = t + " Iterator", f = !1, h = e.prototype, v = h[st] || h["@@iterator"] || i && h[i], p = !ct && v || u(i), m = "Array" == t && h.entries || v;
        if (m && (s = $e(m.call(new e)),
        lt !== Object.prototype && s.next && ($e(s) !== lt && (at ? at(s, lt) : "function" != typeof s[st] && S(s, st, ut)),
        rt(s, d, !0))),
        "values" == i && v && "values" !== v.name && (f = !0,
        p = function() {
            return v.call(this)
        }
        ),
        h[st] !== p && S(h, st, p),
        de[t] = p,
        i)
            if (l = {
                values: u("values"),
                keys: o ? p : u("keys"),
                entries: u("entries")
            },
            a)
                for (c in l)
                    (ct || f || !(c in h)) && Ie(h, c, l[c]);
            else
                We({
                    target: t,
                    proto: !0,
                    forced: ct || f
                }, l);
        return l
    }
      , ft = Se.set
      , ht = Se.getterFor("Array Iterator")
      , vt = dt(Array, "Array", (function(e, t) {
        ft(this, {
            type: "Array Iterator",
            target: a(e),
            index: 0,
            kind: t
        })
    }
    ), (function() {
        var e = ht(this)
          , t = e.target
          , r = e.kind
          , n = e.index++;
        return !t || n >= t.length ? (e.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {
            value: t[n],
            done: !1
        } : {
            value: [n, t[n]],
            done: !1
        }
    }
    ), "values");
    de.Arguments = de.Array,
    ue("keys"),
    ue("values"),
    ue("entries");
    var pt = D("iterator")
      , mt = !e((function() {
        var e = new URL("b?e=1","http://a")
          , t = e.searchParams;
        return e.pathname = "c%20d",
        !t.sort || "http://a/c%20d?e=1" !== e.href || "1" !== t.get("e") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[pt] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash
    }
    ))
      , yt = function(e, t, r) {
        for (var n in t)
            Ie(e, n, t[n], r);
        return e
    }
      , wt = function(e, t, r) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return e
    }
      , gt = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
      , xt = function(e, t, r) {
        if (gt(e),
        void 0 === t)
            return e;
        switch (r) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(r) {
                return e.call(t, r)
            }
            ;
        case 2:
            return function(r, n) {
                return e.call(t, r, n)
            }
            ;
        case 3:
            return function(r, n, i) {
                return e.call(t, r, n, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , bt = D("toStringTag")
      , _t = "Arguments" == r(function() {
        return arguments
    }())
      , kt = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), bt)) ? n : _t ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i
    }
      , St = D("iterator")
      , At = function(e) {
        if (null != e)
            return e[St] || e["@@iterator"] || de[kt(e)]
    }
      , Et = function(e) {
        var t = At(e);
        if ("function" != typeof t)
            throw TypeError(String(e) + " is not iterable");
        return g(t.call(e))
    }
      , Tt = D("iterator")
      , Ct = Se.set
      , Lt = Se.getterFor("URLSearchParams")
      , It = Se.getterFor("URLSearchParamsIterator")
      , Rt = /\+/g
      , Ot = Array(4)
      , Dt = function(e) {
        return Ot[e - 1] || (Ot[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    }
      , Ft = function(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    }
      , Nt = function(e) {
        for (var t = e.replace(Rt, " "), r = 4; r; )
            t = t.replace(Dt(r--), Ft);
        return t
    }
      , qt = /[!'()~]|%20/g
      , Ht = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    }
      , Mt = function(e) {
        return Ht[e]
    }
      , Pt = function(e) {
        return encodeURIComponent(e).replace(qt, Mt)
    }
      , zt = function(e, t) {
        if (t)
            for (var r, n, i = t.split("&"), o = 0; o < i.length; )
                (r = i[o++]).length && (n = r.split("="),
                e.push({
                    key: Nt(n.shift()),
                    value: Nt(n.join("="))
                }));
        return e
    }
      , jt = function(e) {
        this.entries.length = 0,
        zt(this.entries, e)
    }
      , Ut = function(e, t) {
        if (e < t)
            throw TypeError("Not enough arguments")
    }
      , Bt = ot((function(e, t) {
        Ct(this, {
            type: "URLSearchParamsIterator",
            iterator: Et(Lt(e).entries),
            kind: t
        })
    }
    ), "Iterator", (function() {
        var e = It(this)
          , t = e.kind
          , r = e.iterator.next()
          , n = r.value;
        return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [n.key, n.value]),
        r
    }
    ))
      , Vt = function() {
        wt(this, Vt, "URLSearchParams");
        var e, t, r, n, i, o, a, s = arguments.length > 0 ? arguments[0] : void 0, l = this, c = [];
        if (Ct(l, {
            type: "URLSearchParams",
            entries: c,
            updateURL: null,
            updateSearchParams: jt
        }),
        void 0 !== s)
            if (v(s))
                if ("function" == typeof (e = At(s)))
                    for (t = e.call(s); !(r = t.next()).done; ) {
                        if ((i = (n = Et(g(r.value))).next()).done || (o = n.next()).done || !n.next().done)
                            throw TypeError("Expected sequence with length 2");
                        c.push({
                            key: i.value + "",
                            value: o.value + ""
                        })
                    }
                else
                    for (a in s)
                        N(s, a) && c.push({
                            key: a,
                            value: s[a] + ""
                        });
            else
                zt(c, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "")
    }
      , Wt = Vt.prototype;
    yt(Wt, {
        append: function(e, t) {
            Ut(arguments.length, 2);
            var r = Lt(this);
            r.entries.push({
                key: e + "",
                value: t + ""
            }),
            r.updateURL && r.updateURL()
        },
        delete: function(e) {
            Ut(arguments.length, 1);
            for (var t = Lt(this), r = t.entries, n = e + "", i = 0; i < r.length; )
                r[i].key === n ? r.splice(i, 1) : i++;
            t.updateURL && t.updateURL()
        },
        get: function(e) {
            Ut(arguments.length, 1);
            for (var t = Lt(this).entries, r = e + "", n = 0; n < t.length; n++)
                if (t[n].key === r)
                    return t[n].value;
            return null
        },
        getAll: function(e) {
            Ut(arguments.length, 1);
            for (var t = Lt(this).entries, r = e + "", n = [], i = 0; i < t.length; i++)
                t[i].key === r && n.push(t[i].value);
            return n
        },
        has: function(e) {
            Ut(arguments.length, 1);
            for (var t = Lt(this).entries, r = e + "", n = 0; n < t.length; )
                if (t[n++].key === r)
                    return !0;
            return !1
        },
        set: function(e, t) {
            Ut(arguments.length, 1);
            for (var r, n = Lt(this), i = n.entries, o = !1, a = e + "", s = t + "", l = 0; l < i.length; l++)
                (r = i[l]).key === a && (o ? i.splice(l--, 1) : (o = !0,
                r.value = s));
            o || i.push({
                key: a,
                value: s
            }),
            n.updateURL && n.updateURL()
        },
        sort: function() {
            var e, t, r, n = Lt(this), i = n.entries, o = i.slice();
            for (i.length = 0,
            t = 0; t < o.length; t++) {
                for (e = o[t],
                r = 0; r < t; r++)
                    if (i[r].key > e.key) {
                        i.splice(r, 0, e);
                        break
                    }
                r === t && i.push(e)
            }
            n.updateURL && n.updateURL()
        },
        forEach: function(e) {
            for (var t, r = Lt(this).entries, n = xt(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < r.length; )
                n((t = r[i++]).value, t.key, this)
        },
        keys: function() {
            return new Bt(this,"keys")
        },
        values: function() {
            return new Bt(this,"values")
        },
        entries: function() {
            return new Bt(this,"entries")
        }
    }, {
        enumerable: !0
    }),
    Ie(Wt, Tt, Wt.entries),
    Ie(Wt, "toString", (function() {
        for (var e, t = Lt(this).entries, r = [], n = 0; n < t.length; )
            e = t[n++],
            r.push(Pt(e.key) + "=" + Pt(e.value));
        return r.join("&")
    }
    ), {
        enumerable: !0
    }),
    rt(Vt, "URLSearchParams"),
    We({
        global: !0,
        forced: !mt
    }, {
        URLSearchParams: Vt
    });
    var Gt = [].slice
      , Yt = {}
      , Xt = function(e, t, r) {
        if (!(t in Yt)) {
            for (var n = [], i = 0; i < t; i++)
                n[i] = "a[" + i + "]";
            Yt[t] = Function("C,a", "return new C(" + n.join(",") + ")")
        }
        return Yt[t](e, r)
    }
      , Kt = Function.bind || function(e) {
        var t = gt(this)
          , r = Gt.call(arguments, 1)
          , n = function() {
            var i = r.concat(Gt.call(arguments));
            return this instanceof n ? Xt(t, i.length, i) : t.apply(e, i)
        };
        return v(t.prototype) && (n.prototype = t.prototype),
        n
    }
    ;
    function $t(e) {
        return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Qt(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Jt(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function Zt(e, t, r) {
        return t && Jt(e.prototype, t),
        r && Jt(e, r),
        e
    }
    function er(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }
            )))),
            n.forEach((function(t) {
                er(e, t, r[t])
            }
            ))
        }
        return e
    }
    function rr(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var r = []
              , n = !0
              , i = !1
              , o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
                !t || r.length !== t); n = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return r
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    We({
        target: "Function",
        proto: !0
    }, {
        bind: Kt
    });
    var nr = {
        f: D
    }
      , ir = f
      , or = _.f
      , ar = function(e) {
        var t = ir.Symbol || (ir.Symbol = {});
        N(t, e) || or(t, e, {
            value: nr.f(e)
        })
    }
      , sr = Array.isArray || function(e) {
        return "Array" == r(e)
    }
      , lr = Oe.f
      , cr = {}.toString
      , ur = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , dr = {
        f: function(e) {
            return ur && "[object Window]" == cr.call(e) ? function(e) {
                try {
                    return lr(e)
                } catch (e) {
                    return ur.slice()
                }
            }(e) : lr(a(e))
        }
    }
      , fr = ee("hidden")
      , hr = Se.set
      , vr = Se.getterFor("Symbol")
      , pr = Le.f
      , mr = _.f
      , yr = dr.f
      , wr = f.Symbol
      , gr = f.JSON
      , xr = gr && gr.stringify
      , br = D("toPrimitive")
      , _r = Te.f
      , kr = E("symbol-registry")
      , Sr = E("symbols")
      , Ar = E("op-symbols")
      , Er = E("wks")
      , Tr = Object.prototype
      , Cr = f.QObject
      , Lr = !Cr || !Cr.prototype || !Cr.prototype.findChild
      , Ir = h && e((function() {
        return 7 != ie(mr({}, "a", {
            get: function() {
                return mr(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }
    )) ? function(e, t, r) {
        var n = pr(Tr, t);
        n && delete Tr[t],
        mr(e, t, r),
        n && e !== Tr && mr(Tr, t, n)
    }
    : mr
      , Rr = function(e, t) {
        var r = Sr[e] = ie(wr.prototype);
        return hr(r, {
            type: "Symbol",
            tag: e,
            description: t
        }),
        h || (r.description = t),
        r
    }
      , Or = I && "symbol" == typeof wr.iterator ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return Object(e)instanceof wr
    }
      , Dr = function(e, t, r) {
        return e === Tr && Dr(Ar, t, r),
        g(e),
        t = x(t, !0),
        g(r),
        N(Sr, t) ? (r.enumerable ? (N(e, fr) && e[fr][t] && (e[fr][t] = !1),
        r = ie(r, {
            enumerable: k(0, !1)
        })) : (N(e, fr) || mr(e, fr, k(1, {})),
        e[fr][t] = !0),
        Ir(e, t, r)) : mr(e, t, r)
    }
      , Fr = function(e, t) {
        g(e);
        for (var r, n = function(e) {
            var t = K(e)
              , r = De.f;
            if (r)
                for (var n, i = r(e), o = Te.f, a = 0; i.length > a; )
                    o.call(e, n = i[a++]) && t.push(n);
            return t
        }(t = a(t)), i = 0, o = n.length; o > i; )
            Dr(e, r = n[i++], t[r]);
        return e
    }
      , Nr = function(e) {
        var t = _r.call(this, e = x(e, !0));
        return !(this === Tr && N(Sr, e) && !N(Ar, e)) && (!(t || !N(this, e) || !N(Sr, e) || N(this, fr) && this[fr][e]) || t)
    }
      , qr = function(e, t) {
        if (e = a(e),
        t = x(t, !0),
        e !== Tr || !N(Sr, t) || N(Ar, t)) {
            var r = pr(e, t);
            return !r || !N(Sr, t) || N(e, fr) && e[fr][t] || (r.enumerable = !0),
            r
        }
    }
      , Hr = function(e) {
        for (var t, r = yr(a(e)), n = [], i = 0; r.length > i; )
            N(Sr, t = r[i++]) || N(W, t) || n.push(t);
        return n
    }
      , Mr = function(e) {
        for (var t, r = e === Tr, n = yr(r ? Ar : a(e)), i = [], o = 0; n.length > o; )
            !N(Sr, t = n[o++]) || r && !N(Tr, t) || i.push(Sr[t]);
        return i
    };
    I || (Ie((wr = function() {
        if (this instanceof wr)
            throw TypeError("Symbol is not a constructor");
        var e = void 0 === arguments[0] ? void 0 : String(arguments[0])
          , t = L(e)
          , r = function(e) {
            this === Tr && r.call(Ar, e),
            N(this, fr) && N(this[fr], t) && (this[fr][t] = !1),
            Ir(this, t, k(1, e))
        };
        return h && Lr && Ir(Tr, t, {
            configurable: !0,
            set: r
        }),
        Rr(t, e)
    }
    ).prototype, "toString", (function() {
        return vr(this).tag
    }
    )),
    Te.f = Nr,
    _.f = Dr,
    Le.f = qr,
    Oe.f = dr.f = Hr,
    De.f = Mr,
    h && (mr(wr.prototype, "description", {
        configurable: !0,
        get: function() {
            return vr(this).description
        }
    }),
    Ie(Tr, "propertyIsEnumerable", Nr, {
        unsafe: !0
    })),
    nr.f = function(e) {
        return Rr(D(e), e)
    }
    ),
    We({
        global: !0,
        wrap: !0,
        forced: !I,
        sham: !I
    }, {
        Symbol: wr
    });
    for (var Pr = K(Er), zr = 0; Pr.length > zr; )
        ar(Pr[zr++]);
    We({
        target: "Symbol",
        stat: !0,
        forced: !I
    }, {
        for: function(e) {
            return N(kr, e += "") ? kr[e] : kr[e] = wr(e)
        },
        keyFor: function(e) {
            if (!Or(e))
                throw TypeError(e + " is not a symbol");
            for (var t in kr)
                if (kr[t] === e)
                    return t
        },
        useSetter: function() {
            Lr = !0
        },
        useSimple: function() {
            Lr = !1
        }
    }),
    We({
        target: "Object",
        stat: !0,
        forced: !I,
        sham: !h
    }, {
        create: function(e, t) {
            return void 0 === t ? ie(e) : Fr(ie(e), t)
        },
        defineProperty: Dr,
        defineProperties: Fr,
        getOwnPropertyDescriptor: qr
    }),
    We({
        target: "Object",
        stat: !0,
        forced: !I
    }, {
        getOwnPropertyNames: Hr,
        getOwnPropertySymbols: Mr
    }),
    We({
        target: "Object",
        stat: !0,
        forced: e((function() {
            De.f(1)
        }
        ))
    }, {
        getOwnPropertySymbols: function(e) {
            return De.f(Ge(e))
        }
    }),
    gr && We({
        target: "JSON",
        stat: !0,
        forced: !I || e((function() {
            var e = wr();
            return "[null]" != xr([e]) || "{}" != xr({
                a: e
            }) || "{}" != xr(Object(e))
        }
        ))
    }, {
        stringify: function(e) {
            for (var t, r, n = [e], i = 1; arguments.length > i; )
                n.push(arguments[i++]);
            if (r = t = n[1],
            (v(t) || void 0 !== e) && !Or(e))
                return sr(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)),
                    !Or(t))
                        return t
                }
                ),
                n[1] = t,
                xr.apply(gr, n)
        }
    }),
    wr.prototype[br] || S(wr.prototype, br, wr.prototype.valueOf),
    rt(wr, "Symbol"),
    W[fr] = !0;
    var jr = _.f
      , Ur = f.Symbol;
    if (h && "function" == typeof Ur && (!("description"in Ur.prototype) || void 0 !== Ur().description)) {
        var Br = {}
          , Vr = function() {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
              , t = this instanceof Vr ? new Ur(e) : void 0 === e ? Ur() : Ur(e);
            return "" === e && (Br[t] = !0),
            t
        };
        qe(Vr, Ur);
        var Wr = Vr.prototype = Ur.prototype;
        Wr.constructor = Vr;
        var Gr = Wr.toString
          , Yr = "Symbol(test)" == String(Ur("test"))
          , Xr = /^Symbol\((.*)\)[^)]+$/;
        jr(Wr, "description", {
            configurable: !0,
            get: function() {
                var e = v(this) ? this.valueOf() : this
                  , t = Gr.call(e);
                if (N(Br, e))
                    return "";
                var r = Yr ? t.slice(7, -1) : t.replace(Xr, "$1");
                return "" === r ? void 0 : r
            }
        }),
        We({
            global: !0,
            forced: !0
        }, {
            Symbol: Vr
        })
    }
    ar("iterator"),
    We({
        target: "Array",
        stat: !0
    }, {
        isArray: sr
    });
    var Kr = {};
    Kr[D("toStringTag")] = "z";
    var $r = "[object z]" !== String(Kr) ? function() {
        return "[object " + kt(this) + "]"
    }
    : Kr.toString
      , Qr = Object.prototype;
    $r !== Qr.toString && Ie(Qr, "toString", $r, {
        unsafe: !0
    });
    var Jr = function(e, t, r) {
        var n, i, a = String(o(e)), s = M(t), l = a.length;
        return s < 0 || s >= l ? r ? "" : void 0 : (n = a.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === l || (i = a.charCodeAt(s + 1)) < 56320 || i > 57343 ? r ? a.charAt(s) : n : r ? a.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
    }
      , Zr = Se.set
      , en = Se.getterFor("String Iterator");
    dt(String, "String", (function(e) {
        Zr(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }
    ), (function() {
        var e, t = en(this), r = t.string, n = t.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (e = Jr(r, n, !0),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    }
    ));
    var tn = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
      , rn = D("iterator")
      , nn = D("toStringTag")
      , on = vt.values;
    for (var an in tn) {
        var sn = f[an]
          , ln = sn && sn.prototype;
        if (ln) {
            if (ln[rn] !== on)
                try {
                    S(ln, rn, on)
                } catch (e) {
                    ln[rn] = on
                }
            if (ln[nn] || S(ln, nn, an),
            tn[an])
                for (var cn in vt)
                    if (ln[cn] !== vt[cn])
                        try {
                            S(ln, cn, vt[cn])
                        } catch (e) {
                            ln[cn] = vt[cn]
                        }
        }
    }
    var un = D("species")
      , dn = function(e, t) {
        var r;
        return sr(e) && ("function" != typeof (r = e.constructor) || r !== Array && !sr(r.prototype) ? v(r) && null === (r = r[un]) && (r = void 0) : r = void 0),
        new (void 0 === r ? Array : r)(0 === t ? 0 : t)
    }
      , fn = function(e, t) {
        var r = 1 == e
          , n = 2 == e
          , o = 3 == e
          , a = 4 == e
          , s = 6 == e
          , l = 5 == e || s
          , c = t || dn;
        return function(t, u, d) {
            for (var f, h, v = Ge(t), p = i(v), m = xt(u, d, 3), y = z(p.length), w = 0, g = r ? c(t, y) : n ? c(t, 0) : void 0; y > w; w++)
                if ((l || w in p) && (h = m(f = p[w], w, v),
                e))
                    if (r)
                        g[w] = h;
                    else if (h)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return f;
                        case 6:
                            return w;
                        case 2:
                            g.push(f)
                        }
                    else if (a)
                        return !1;
            return s ? -1 : o || a ? a : g
        }
    }
      , hn = D("species")
      , vn = function(t) {
        return !e((function() {
            var e = [];
            return (e.constructor = {})[hn] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== e[t](Boolean).foo
        }
        ))
    }
      , pn = fn(2)
      , mn = vn("filter");
    We({
        target: "Array",
        proto: !0,
        forced: !mn
    }, {
        filter: function(e) {
            return pn(this, e, arguments[1])
        }
    });
    var yn = fn(6)
      , wn = !0;
    "findIndex"in [] && Array(1).findIndex((function() {
        wn = !1
    }
    )),
    We({
        target: "Array",
        proto: !0,
        forced: wn
    }, {
        findIndex: function(e) {
            return yn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    ue("findIndex");
    var gn = function(t, r) {
        var n = [][t];
        return !n || !e((function() {
            n.call(null, r || function() {
                throw 1
            }
            , 1)
        }
        ))
    }
      , xn = [].forEach
      , bn = fn(0)
      , _n = gn("forEach") ? function(e) {
        return bn(this, e, arguments[1])
    }
    : xn;
    We({
        target: "Array",
        proto: !0,
        forced: [].forEach != _n
    }, {
        forEach: _n
    });
    var kn = D("iterator")
      , Sn = !1;
    try {
        var An = 0
          , En = {
            next: function() {
                return {
                    done: !!An++
                }
            },
            return: function() {
                Sn = !0
            }
        };
        En[kn] = function() {
            return this
        }
        ,
        Array.from(En, (function() {
            throw 2
        }
        ))
    } catch (e) {}
    var Tn = function(e, t) {
        if (!t && !Sn)
            return !1;
        var r = !1;
        try {
            var n = {};
            n[kn] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        }
                    }
                }
            }
            ,
            e(n)
        } catch (e) {}
        return r
    }
      , Cn = function(e, t, r, n) {
        try {
            return n ? t(g(r)[0], r[1]) : t(r)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && g(i.call(e)),
            t
        }
    }
      , Ln = D("iterator")
      , In = Array.prototype
      , Rn = function(e) {
        return void 0 !== e && (de.Array === e || In[Ln] === e)
    }
      , On = function(e, t, r) {
        var n = x(t);
        n in e ? _.f(e, n, k(0, r)) : e[n] = r
    }
      , Dn = !Tn((function(e) {
        Array.from(e)
    }
    ));
    We({
        target: "Array",
        stat: !0,
        forced: Dn
    }, {
        from: function(e) {
            var t, r, n, i, o = Ge(e), a = "function" == typeof this ? this : Array, s = arguments.length, l = s > 1 ? arguments[1] : void 0, c = void 0 !== l, u = 0, d = At(o);
            if (c && (l = xt(l, s > 2 ? arguments[2] : void 0, 2)),
            null == d || a == Array && Rn(d))
                for (r = new a(t = z(o.length)); t > u; u++)
                    On(r, u, c ? l(o[u], u) : o[u]);
            else
                for (i = d.call(o),
                r = new a; !(n = i.next()).done; u++)
                    On(r, u, c ? Cn(i, l, [n.value, u], !0) : n.value);
            return r.length = u,
            r
        }
    });
    var Fn = V(!1)
      , Nn = [].indexOf
      , qn = !!Nn && 1 / [1].indexOf(1, -0) < 0
      , Hn = gn("indexOf");
    We({
        target: "Array",
        proto: !0,
        forced: qn || Hn
    }, {
        indexOf: function(e) {
            return qn ? Nn.apply(this, arguments) || 0 : Fn(this, e, arguments[1])
        }
    });
    var Mn = [].join
      , Pn = i != Object
      , zn = gn("join", ",");
    We({
        target: "Array",
        proto: !0,
        forced: Pn || zn
    }, {
        join: function(e) {
            return Mn.call(a(this), void 0 === e ? "," : e)
        }
    });
    var jn = fn(1)
      , Un = vn("map");
    We({
        target: "Array",
        proto: !0,
        forced: !Un
    }, {
        map: function(e) {
            return jn(this, e, arguments[1])
        }
    });
    var Bn = D("species")
      , Vn = [].slice
      , Wn = Math.max
      , Gn = vn("slice");
    We({
        target: "Array",
        proto: !0,
        forced: !Gn
    }, {
        slice: function(e, t) {
            var r, n, i, o = a(this), s = z(o.length), l = B(e, s), c = B(void 0 === t ? s : t, s);
            if (sr(o) && ("function" != typeof (r = o.constructor) || r !== Array && !sr(r.prototype) ? v(r) && null === (r = r[Bn]) && (r = void 0) : r = void 0,
            r === Array || void 0 === r))
                return Vn.call(o, l, c);
            for (n = new (void 0 === r ? Array : r)(Wn(c - l, 0)),
            i = 0; l < c; l++,
            i++)
                l in o && On(n, i, o[l]);
            return n.length = i,
            n
        }
    }),
    We({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    var Yn = Date.prototype
      , Xn = Yn.toString
      , Kn = Yn.getTime;
    new Date(NaN) + "" != "Invalid Date" && Ie(Yn, "toString", (function() {
        var e = Kn.call(this);
        return e == e ? Xn.call(this) : "Invalid Date"
    }
    ));
    var $n = Te.f;
    We({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return function(e, t) {
                for (var r, n = a(e), i = K(n), o = i.length, s = 0, l = []; o > s; )
                    r = i[s++],
                    h && !$n.call(n, r) || l.push(t ? [r, n[r]] : n[r]);
                return l
            }(e, !0)
        }
    });
    var Qn = function(e, t, r) {
        var n, i = t.constructor;
        return i !== r && "function" == typeof i && (n = i.prototype) !== r.prototype && v(n) && at && at(e, n),
        e
    }
      , Jn = D("match")
      , Zn = function(e) {
        var t;
        return v(e) && (void 0 !== (t = e[Jn]) ? !!t : "RegExp" == r(e))
    }
      , ei = function() {
        var e = g(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    }
      , ti = function(e) {
        return "function" == typeof e ? e : void 0
    }
      , ri = D("species")
      , ni = function(e) {
        var t = function(e, t) {
            return arguments.length < 2 ? ti(ir[e]) || ti(f[e]) : ir[e] && ir[e][t] || f[e] && f[e][t]
        }(e)
          , r = _.f;
        h && t && !t[ri] && r(t, ri, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
      , ii = D("match")
      , oi = _.f
      , ai = Oe.f
      , si = f.RegExp
      , li = si.prototype
      , ci = /a/g
      , ui = /a/g
      , di = new si(ci) !== ci;
    if (Be("RegExp", h && (!di || e((function() {
        return ui[ii] = !1,
        si(ci) != ci || si(ui) == ui || "/a/i" != si(ci, "i")
    }
    ))))) {
        for (var fi = function(e, t) {
            var r = this instanceof fi
              , n = Zn(e)
              , i = void 0 === t;
            return !r && n && e.constructor === fi && i ? e : Qn(di ? new si(n && !i ? e.source : e,t) : si((n = e instanceof fi) ? e.source : e, n && i ? ei.call(e) : t), r ? this : li, fi)
        }, hi = function(e) {
            e in fi || oi(fi, e, {
                configurable: !0,
                get: function() {
                    return si[e]
                },
                set: function(t) {
                    si[e] = t
                }
            })
        }, vi = ai(si), pi = 0; pi < vi.length; )
            hi(vi[pi++]);
        li.constructor = fi,
        fi.prototype = li,
        Ie(f, "RegExp", fi)
    }
    ni("RegExp");
    var mi = RegExp.prototype.exec
      , yi = String.prototype.replace
      , wi = mi
      , gi = function() {
        var e = /a/
          , t = /b*/g;
        return mi.call(e, "a"),
        mi.call(t, "a"),
        0 !== e.lastIndex || 0 !== t.lastIndex
    }()
      , xi = void 0 !== /()??/.exec("")[1];
    (gi || xi) && (wi = function(e) {
        var t, r, n, i, o = this;
        return xi && (r = new RegExp("^" + o.source + "$(?!\\s)",ei.call(o))),
        gi && (t = o.lastIndex),
        n = mi.call(o, e),
        gi && n && (o.lastIndex = o.global ? n.index + n[0].length : t),
        xi && n && n.length > 1 && yi.call(n[0], r, (function() {
            for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0)
        }
        )),
        n
    }
    );
    var bi = wi;
    We({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== bi
    }, {
        exec: bi
    });
    var _i = /./.toString
      , ki = RegExp.prototype
      , Si = e((function() {
        return "/a/b" != _i.call({
            source: "a",
            flags: "b"
        })
    }
    ))
      , Ai = "toString" != _i.name;
    (Si || Ai) && Ie(RegExp.prototype, "toString", (function() {
        var e = g(this)
          , t = String(e.source)
          , r = e.flags;
        return "/" + t + "/" + String(void 0 === r && e instanceof RegExp && !("flags"in ki) ? ei.call(e) : r)
    }
    ), {
        unsafe: !0
    });
    var Ei = function(e, t, r) {
        return t + (r ? Jr(e, t, !0).length : 1)
    }
      , Ti = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return bi.call(e, t)
    }
      , Ci = D("species")
      , Li = !e((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , Ii = !e((function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var r = "ab".split(e);
        return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
    }
    ))
      , Ri = function(t, r, n, i) {
        var o = D(t)
          , a = !e((function() {
            var e = {};
            return e[o] = function() {
                return 7
            }
            ,
            7 != ""[t](e)
        }
        ))
          , s = a && !e((function() {
            var e = !1
              , r = /a/;
            return r.exec = function() {
                return e = !0,
                null
            }
            ,
            "split" === t && (r.constructor = {},
            r.constructor[Ci] = function() {
                return r
            }
            ),
            r[o](""),
            !e
        }
        ));
        if (!a || !s || "replace" === t && !Li || "split" === t && !Ii) {
            var l = /./[o]
              , c = n(o, ""[t], (function(e, t, r, n, i) {
                return t.exec === bi ? a && !i ? {
                    done: !0,
                    value: l.call(t, r, n)
                } : {
                    done: !0,
                    value: e.call(r, t, n)
                } : {
                    done: !1
                }
            }
            ))
              , u = c[0]
              , d = c[1];
            Ie(String.prototype, t, u),
            Ie(RegExp.prototype, o, 2 == r ? function(e, t) {
                return d.call(e, this, t)
            }
            : function(e) {
                return d.call(e, this)
            }
            ),
            i && S(RegExp.prototype[o], "sham", !0)
        }
    };
    Ri("match", 1, (function(e, t, r) {
        return [function(t) {
            var r = o(this)
              , n = null == t ? void 0 : t[e];
            return void 0 !== n ? n.call(t, r) : new RegExp(t)[e](String(r))
        }
        , function(e) {
            var n = r(t, e, this);
            if (n.done)
                return n.value;
            var i = g(e)
              , o = String(this);
            if (!i.global)
                return Ti(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, l = [], c = 0; null !== (s = Ti(i, o)); ) {
                var u = String(s[0]);
                l[c] = u,
                "" === u && (i.lastIndex = Ei(o, z(i.lastIndex), a)),
                c++
            }
            return 0 === c ? null : l
        }
        ]
    }
    ));
    var Oi = Math.max
      , Di = Math.min
      , Fi = Math.floor
      , Ni = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , qi = /\$([$&'`]|\d\d?)/g;
    Ri("replace", 2, (function(e, t, r) {
        return [function(r, n) {
            var i = o(this)
              , a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, i, n) : t.call(String(i), r, n)
        }
        , function(e, i) {
            var o = r(t, e, this, i);
            if (o.done)
                return o.value;
            var a = g(e)
              , s = String(this)
              , l = "function" == typeof i;
            l || (i = String(i));
            var c = a.global;
            if (c) {
                var u = a.unicode;
                a.lastIndex = 0
            }
            for (var d = []; ; ) {
                var f = Ti(a, s);
                if (null === f)
                    break;
                if (d.push(f),
                !c)
                    break;
                "" === String(f[0]) && (a.lastIndex = Ei(s, z(a.lastIndex), u))
            }
            for (var h, v = "", p = 0, m = 0; m < d.length; m++) {
                f = d[m];
                for (var y = String(f[0]), w = Oi(Di(M(f.index), s.length), 0), x = [], b = 1; b < f.length; b++)
                    x.push(void 0 === (h = f[b]) ? h : String(h));
                var _ = f.groups;
                if (l) {
                    var k = [y].concat(x, w, s);
                    void 0 !== _ && k.push(_);
                    var S = String(i.apply(void 0, k))
                } else
                    S = n(y, s, w, x, _, i);
                w >= p && (v += s.slice(p, w) + S,
                p = w + y.length)
            }
            return v + s.slice(p)
        }
        ];
        function n(e, r, n, i, o, a) {
            var s = n + e.length
              , l = i.length
              , c = qi;
            return void 0 !== o && (o = Ge(o),
            c = Ni),
            t.call(a, c, (function(t, a) {
                var c;
                switch (a.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return r.slice(0, n);
                case "'":
                    return r.slice(s);
                case "<":
                    c = o[a.slice(1, -1)];
                    break;
                default:
                    var u = +a;
                    if (0 === u)
                        return t;
                    if (u > l) {
                        var d = Fi(u / 10);
                        return 0 === d ? t : d <= l ? void 0 === i[d - 1] ? a.charAt(1) : i[d - 1] + a.charAt(1) : t
                    }
                    c = i[u - 1]
                }
                return void 0 === c ? "" : c
            }
            ))
        }
    }
    ));
    var Hi = D("species")
      , Mi = [].push
      , Pi = Math.min
      , zi = !e((function() {
        return !RegExp(4294967295, "y")
    }
    ));
    Ri("split", 2, (function(e, t, r) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, r) {
            var n = String(o(this))
              , i = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === i)
                return [];
            if (void 0 === e)
                return [n];
            if (!Zn(e))
                return t.call(n, e, i);
            for (var a, s, l, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, f = new RegExp(e.source,u + "g"); (a = bi.call(f, n)) && !((s = f.lastIndex) > d && (c.push(n.slice(d, a.index)),
            a.length > 1 && a.index < n.length && Mi.apply(c, a.slice(1)),
            l = a[0].length,
            d = s,
            c.length >= i)); )
                f.lastIndex === a.index && f.lastIndex++;
            return d === n.length ? !l && f.test("") || c.push("") : c.push(n.slice(d)),
            c.length > i ? c.slice(0, i) : c
        }
        : "0".split(void 0, 0).length ? function(e, r) {
            return void 0 === e && 0 === r ? [] : t.call(this, e, r)
        }
        : t,
        [function(t, r) {
            var i = o(this)
              , a = null == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, i, r) : n.call(String(i), t, r)
        }
        , function(e, i) {
            var o = r(n, e, this, i, n !== t);
            if (o.done)
                return o.value;
            var a = g(e)
              , s = String(this)
              , l = function(e, t) {
                var r, n = g(e).constructor;
                return void 0 === n || null == (r = g(n)[Hi]) ? t : gt(r)
            }(a, RegExp)
              , c = a.unicode
              , u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (zi ? "y" : "g")
              , d = new l(zi ? a : "^(?:" + a.source + ")",u)
              , f = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === f)
                return [];
            if (0 === s.length)
                return null === Ti(d, s) ? [s] : [];
            for (var h = 0, v = 0, p = []; v < s.length; ) {
                d.lastIndex = zi ? v : 0;
                var m, y = Ti(d, zi ? s : s.slice(v));
                if (null === y || (m = Pi(z(d.lastIndex + (zi ? 0 : v)), s.length)) === h)
                    v = Ei(s, v, c);
                else {
                    if (p.push(s.slice(h, v)),
                    p.length === f)
                        return p;
                    for (var w = 1; w <= y.length - 1; w++)
                        if (p.push(y[w]),
                        p.length === f)
                            return p;
                    v = h = m
                }
            }
            return p.push(s.slice(h)),
            p
        }
        ]
    }
    ), !zi);
    var ji = function(e, t, r) {
        if (Zn(t))
            throw TypeError("String.prototype." + r + " doesn't accept regex");
        return String(o(e))
    }
      , Ui = D("match")
      , Bi = function(e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (r) {
            try {
                return t[Ui] = !1,
                "/./"[e](t)
            } catch (e) {}
        }
        return !1
    }
      , Vi = Bi("startsWith")
      , Wi = "".startsWith;
    We({
        target: "String",
        proto: !0,
        forced: !Vi
    }, {
        startsWith: function(e) {
            var t = ji(this, e, "startsWith")
              , r = z(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length))
              , n = String(e);
            return Wi ? Wi.call(t, n, r) : t.slice(r, r + n.length) === n
        }
    });
    var Gi = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , Yi = "[" + Gi + "]"
      , Xi = RegExp("^" + Yi + Yi + "*")
      , Ki = RegExp(Yi + Yi + "*$")
      , $i = function(e, t) {
        return e = String(o(e)),
        1 & t && (e = e.replace(Xi, "")),
        2 & t && (e = e.replace(Ki, "")),
        e
    }
      , Qi = function(t) {
        return e((function() {
            return !!Gi[t]() || "​᠎" != "​᠎"[t]() || Gi[t].name !== t
        }
        ))
    }
      , Ji = Qi("trimStart")
      , Zi = Ji ? function() {
        return $i(this, 1)
    }
    : "".trimStart;
    for (var eo in We({
        target: "String",
        proto: !0,
        forced: Ji
    }, {
        trimStart: Zi,
        trimLeft: Zi
    }),
    tn) {
        var to = f[eo]
          , ro = to && to.prototype;
        if (ro && ro.forEach !== _n)
            try {
                S(ro, "forEach", _n)
            } catch (e) {
                ro.forEach = _n
            }
    }
    var no = _.f
      , io = Function.prototype
      , oo = io.toString
      , ao = /^\s*function ([^ (]*)/;
    h && !("name"in io) && no(io, "name", {
        configurable: !0,
        get: function() {
            try {
                return oo.call(this).match(ao)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var so = !e((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }
    ))
      , lo = c((function(e) {
        var t = L("meta")
          , r = _.f
          , n = 0
          , i = Object.isExtensible || function() {
            return !0
        }
          , o = function(e) {
            r(e, t, {
                value: {
                    objectID: "O" + ++n,
                    weakData: {}
                }
            })
        }
          , a = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, r) {
                if (!v(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!N(e, t)) {
                    if (!i(e))
                        return "F";
                    if (!r)
                        return "E";
                    o(e)
                }
                return e[t].objectID
            },
            getWeakData: function(e, r) {
                if (!N(e, t)) {
                    if (!i(e))
                        return !0;
                    if (!r)
                        return !1;
                    o(e)
                }
                return e[t].weakData
            },
            onFreeze: function(e) {
                return so && a.REQUIRED && i(e) && !N(e, t) && o(e),
                e
            }
        };
        W[t] = !0
    }
    ))
      , co = lo.onFreeze
      , uo = Object.freeze
      , fo = e((function() {
        uo(1)
    }
    ));
    We({
        target: "Object",
        stat: !0,
        forced: fo,
        sham: !so
    }, {
        freeze: function(e) {
            return uo && v(e) ? uo(co(e)) : e
        }
    });
    var ho = function() {
        function e(t, r, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
            Qt(this, e),
            null == r && (r = -1 / 0),
            null == n && (n = 1 / 0),
            this.name = t,
            this.min = r,
            this.max = n,
            this.underBreaks = i
        }
        return Zt(e, [{
            key: "getMin",
            value: function() {
                return this.min
            }
        }, {
            key: "getMax",
            value: function() {
                return this.max
            }
        }, {
            key: "contains",
            value: function(e) {
                return this === e || this.underBreaks.filter((function(t) {
                    return t === e
                }
                )).length > 0
            }
        }, {
            key: "toString",
            value: function() {
                return "BREAKPOINT.".concat(this.name)
            }
        }]),
        e
    }();
    ho.XS = new ho("XS",null,479),
    ho.SM = new ho("SM",480,767,[ho.XS]),
    ho.MD = new ho("MD",768,969,[ho.XS, ho.SM]),
    ho.LG = new ho("LG",970,null,[ho.XS, ho.SM, ho.MD]),
    ho.ALL = [ho.XS, ho.SM, ho.MD, ho.LG];
    var vo = function() {
        function e(t) {
            Qt(this, e),
            this.name = t
        }
        return Zt(e, [{
            key: "toString",
            value: function() {
                return "DIRECTION.".concat(this.name)
            }
        }]),
        e
    }();
    vo.LEFT = new vo("LEFT"),
    vo.RIGHT = new vo("RIGHT"),
    vo.UP = new vo("UP"),
    vo.DOWN = new vo("DOWN"),
    vo.NONE = new vo("NONE"),
    vo.HORIZONTAL = new vo("HORIZONTAL"),
    vo.VERTICAL = new vo("VERTICAL");
    var po = Object.freeze({
        READY: "xrx-fw-ready",
        FADER_CHANGE: "xrx-fw-fader--change",
        FADER_TRIGGER: "xrx-fw-fader--trigger-change",
        TIMER_BAR_START: "xrx-fw-timer-bar-start",
        TIMER_BAR_COMPLETE: "xrx-fw-timer-bar-complete",
        TIMER_BAR_TRIGGER: "xrx-fw-timer-bar-trigger",
        TIMER_BAR_PAUSE: "xrx-fw-timer-bar-pause",
        INTERACTIVEVIDEO_CHANGE: "xrx-fw-interactive-video-carousel--change",
        INTERACTIVEVIDEO_NEXT: "xrx-fw-interactive-video-carousel--next",
        SWIPE: "xrx.swipe",
        YOUTUBE_READY: "xrx-fw-youtube-ready",
        TEXT_COUNTER_START: "xrx-fw-text-counter-start",
        TEXT_COUNTER_COMPLETE: "xrx-fw-text-counter-complete",
        TEXT_COUNTER_TRIGGER: "xrx-fw-text-counter-trigger",
        MSS_TRIGGER_CHANGE: "xrx-fw-multi-step-selector--trigger-change",
        CTA_TRAY_TRIGGER_CHANGE: "xrx-fw-cta-tray--trigger-change",
        CTA_TRAY_TRIGGER_CLOSE: "xrx-fw-cta-tray--trigger-close",
        CTA_TRAY_CHANGE: "xrx-fw-cta-tray--change",
        CAROUSEL_CHANGE: "xrx-fw-carousel--change",
        CAROUSEL_TRIGGER_CHANGE: "xrx-fw-carousel--trigger-change",
        INTERSECTION: "xrx-fw-intersection",
        INTERSECTION_CHANGE: "xrx-fw-intersection--change",
        MARKETO_FORM_READY: "xrx-fw-marketo-form--ready",
        MARKETO_FORM_SUCCESS: "xrx-fw-marketo-form--success",
        MODAL_CLOSE: "xrx-fw-modal--close",
        COVEO_SEARCH_LOADED: "xrx-fw-coveo-search--loaded"
    })
      , mo = Object.freeze({
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40
    });
    function yo(e, t) {
        var r = e % t;
        return r < 0 ? t + r : r
    }
    function wo(e, t) {
        var r = function(e, t) {
            return {
                width: e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
                height: e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
            }
        }(e, t)
          , n = ho.XS;
        return ho.ALL.forEach((function(e) {
            if (r.width >= e.getMin() && r.width <= e.getMax())
                return n = e,
                !1
        }
        )),
        n
    }
    function go(e, t) {
        var r, n = this;
        return function() {
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                o[a] = arguments[a];
            var s = t || n;
            if (!r)
                if (window.requestAnimationFrame)
                    r = !0,
                    window.requestAnimationFrame((function() {
                        try {
                            e.apply(s, o)
                        } catch (e) {
                            throw r = !1,
                            e
                        }
                        r = !1
                    }
                    ));
                else {
                    r = !0;
                    try {
                        e.apply(s, o)
                    } catch (e) {
                        throw r = !1,
                        e
                    }
                    r = !1
                }
        }
    }
    function xo(e) {
        return "test" === e.env
    }
    function bo(e, t, r, n) {
        r = {
            linear: function(e) {
                return e
            },
            easeInQuad: function(e) {
                return e * e
            },
            easeOutQuad: function(e) {
                return e * (2 - e)
            },
            easeInOutQuad: function(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            },
            easeInCubic: function(e) {
                return e * e * e
            },
            easeOutCubic: function(e) {
                return --e * e * e + 1
            },
            easeInOutCubic: function(e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            },
            easeInQuart: function(e) {
                return e * e * e * e
            },
            easeOutQuart: function(e) {
                return 1 - --e * e * e * e
            },
            easeInOutQuart: function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            },
            easeInQuint: function(e) {
                return e * e * e * e * e
            },
            easeOutQuint: function(e) {
                return 1 + --e * e * e * e * e
            },
            easeInOutQuint: function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        }[r];
        var i = Date.now()
          , o = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
        o !== e ? requestAnimationFrame((function a(s) {
            var l, c, u = Date.now(), d = (l = 1) < (c = (u - i) / t) ? l : c, f = r(d);
            window.scrollTo(0, f * (e - o) + o),
            d < 1 ? requestAnimationFrame(a) : n && n()
        }
        )) : n && n()
    }
    function _o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t || (t = Ho());
        var r = e.getBoundingClientRect().top
          , n = Lo(window, document);
        t ? window.scrollTo(0, (window.scrollY || window.pageYOffset) + r - n) : bo((window.scrollY || window.pageYOffset) + r - n, 250, "easeInOutQuad")
    }
    function ko(e) {
        return function() {
            var t = e.matches || e.msMatchesSelector;
            if (t) {
                for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                    n[i] = arguments[i];
                return t.apply(e, n)
            }
            return !1
        }
    }
    function So(e, t) {
        for (var r = e; r && r !== document; ) {
            if (ko(r).call(r, t))
                return r;
            r = r.parentNode
        }
        return null
    }
    var Ao, Eo, To = ["button", "[href]", "input", "select", "textarea", '[tabindex]:not([tabindex="-1"])'];
    function Co() {
        var e = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        };
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
    function Lo(e, t) {
        if (Ao = Ao || t.querySelector(".xrx-fw-header-v6")) {
            var r = Ao.getBoundingClientRect().height;
            if (!Fo())
                if (Eo = Eo || t.querySelector(".xrx-fw-product-navigation-bar--floating"))
                    r += Eo.getBoundingClientRect().height;
            return r
        }
        return 0
    }
    function Io(e, t) {
        var r = t;
        if ("string" == typeof e && "object" === $t(r)) {
            Array.isArray(r) || (r = Object.entries(t));
            var n = r.map((function(e) {
                return e.map(encodeURIComponent).join("=")
            }
            )).join("&");
            return e + (e.indexOf("?") > 0 ? "&" : "?") + n
        }
        return e
    }
    function Ro() {
        var e = window.navigator.userAgent
          , t = !!e.match(/(iPad|iPhone|iPod)/i)
          , r = !!e.match(/WebKit/i);
        return t && r && !e.match(/(CriOS|OPiOS|EdgiOS)/i)
    }
    function Oo() {
        return window.self !== window.top
    }
    function Do() {
        return !!window.parent && !!window.parent.patternPath
    }
    function Fo() {
        return !!window.document.documentMode
    }
    function No() {
        return window.digitalData && window.digitalData.locale && window.digitalData.locale["url-prefix"] ? window.digitalData.locale["url-prefix"] : "en-us"
    }
    function qo() {
        return "rtl" === document.documentElement.getAttribute("dir")
    }
    function Ho() {
        return !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    function Mo(e) {
        var t = document.createElement("div");
        return t.innerHTML = e,
        t.textContent || t.innerText || ""
    }
    var Po = l(c((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        function i() {
            if (r)
                return r;
            if (!n || !window.document.body)
                return "indeterminate";
            var e = window.document.createElement("div");
            return e.appendChild(document.createTextNode("ABCD")),
            e.dir = "rtl",
            e.style.fontSize = "14px",
            e.style.width = "4px",
            e.style.height = "1px",
            e.style.position = "absolute",
            e.style.top = "-1000px",
            e.style.overflow = "scroll",
            document.body.appendChild(e),
            r = "reverse",
            e.scrollLeft > 0 ? r = "default" : (e.scrollLeft = 1,
            0 === e.scrollLeft && (r = "negative")),
            document.body.removeChild(e),
            r
        }
        t._setScrollType = function(e) {
            r = e
        }
        ,
        t.detectScrollType = i,
        t.getNormalizedScrollLeft = function(e, t) {
            var r = e.scrollLeft;
            if ("rtl" !== t)
                return r;
            var n = i();
            if ("indeterminate" === n)
                return Number.NaN;
            switch (n) {
            case "negative":
                return e.scrollWidth - e.clientWidth + r;
            case "reverse":
                return e.scrollWidth - e.clientWidth - r
            }
            return r
        }
        ,
        t.setNormalizedScrollLeft = function(e, t, r) {
            if ("rtl" === r) {
                var n = i();
                if ("indeterminate" !== n)
                    switch (n) {
                    case "negative":
                        e.scrollLeft = e.clientWidth - e.scrollWidth + t;
                        break;
                    case "reverse":
                        e.scrollLeft = e.scrollWidth - e.clientWidth - t;
                        break;
                    default:
                        e.scrollLeft = t
                    }
            } else
                e.scrollLeft = t
        }
    }
    )));
    function zo(e, t) {
        var r = document.dir;
        "rtl" === r ? Po.setNormalizedScrollLeft(e, e.scrollWidth - e.clientWidth - t, r) : e.scrollLeft = t
    }
    function jo(e) {
        var t = document.dir;
        return "rtl" === t ? e.scrollWidth - e.clientWidth - Po.getNormalizedScrollLeft(e, t) : e.scrollLeft
    }
    var Uo = function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this._setupSwipe()
        }
        return Zt(e, [{
            key: "_setupSwipe",
            value: function() {
                var e = null
                  , t = null
                  , r = null
                  , n = function(n) {
                    !1 !== n.isPrimary && (n.pointerType && "touch" !== n.pointerType || null === e && null === t && (e = n.pageX || n.touches[0].pageX,
                    t = n.pageY || n.touches[0].pageY,
                    r = n.target))
                }
                  , i = function(n) {
                    if (!1 !== n.isPrimary && (!n.pointerType || "touch" === n.pointerType)) {
                        if (null !== e && null !== t) {
                            var i, o = n.pageX || n.changedTouches[0].pageX, a = n.pageY || n.changedTouches[0].pageY, s = o - e, l = a - t, c = vo.NONE, u = vo.NONE;
                            if (s > 50 ? c = vo.RIGHT : s < -50 && (c = vo.LEFT),
                            l > 50 ? u = vo.DOWN : l < -50 && (u = vo.UP),
                            c !== vo.NONE || u !== vo.NONE)
                                "function" == typeof window.CustomEvent && (i = new CustomEvent(po.SWIPE,{
                                    detail: {
                                        target: r,
                                        xDirection: c,
                                        yDirection: u,
                                        xDiff: s,
                                        yDiff: l
                                    },
                                    bubbles: !0,
                                    cancelable: !0
                                }),
                                r.dispatchEvent(i))
                        }
                        e = null,
                        t = null,
                        r = null
                    }
                };
                document.addEventListener("pointerdown", n),
                document.addEventListener("touchstart", n),
                document.addEventListener("pointerup", i),
                document.addEventListener("touchend", i)
            }
        }]),
        e
    }();
    function Bo(e, t, r, n, i) {
        var o = this;
        i = i || !1;
        var a = Array.isArray(t) ? t : [t]
          , s = !0
          , l = !1
          , c = void 0;
        try {
            for (var u, d = a[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) {
                var f = u.value;
                e.addEventListener(f, (function(t) {
                    if (r)
                        for (var i = t.target; i && i !== o; i = i.parentNode) {
                            var a = ko(i);
                            if (!a)
                                break;
                            if (a.call(i, r)) {
                                t.desiredTarget = i,
                                n.call(i, t);
                                break
                            }
                        }
                    else
                        n.call(e, t)
                }
                ), i)
            }
        } catch (e) {
            l = !0,
            c = e
        } finally {
            try {
                s || null == d.return || d.return()
            } finally {
                if (l)
                    throw c
            }
        }
    }
    var Vo = [];
    function Wo(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vo.VERTICAL;
        e in Vo || ($o("scroll", "xrx-fw-scroll", e),
        Vo.push(e));
        var n = 0;
        Bo(e, "xrx-fw-scroll", null, (function(e) {
            var i = e.target
              , o = r === vo.VERTICAL
              , a = (o ? i.scrollTop || i.pageYOffset : i.scrollLeft || i.pageXOffset) || 0
              , s = a;
            o || (s = jo(i));
            var l = s < n
              , c = n - s;
            e.xrx = tr({}, e.xrx, {
                direction: l,
                change: c,
                scroll: s,
                rawScroll: a
            }),
            t(e),
            n = s
        }
        ))
    }
    var Go = !1;
    function Yo(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        Go || ($o("resize", "xrx-fw-resize", e),
        Go = !0);
        var i, o, a, s = 0, l = 0;
        Bo(e, "xrx-fw-resize", null, (function(c) {
            i = e.innerWidth - s,
            o = e.innerHeight - l,
            s = e.innerWidth,
            l = e.innerHeight,
            a = wo(e, t),
            n && Math.abs(i) < Math.abs(o) ? n(l, 0 === o ? vo.NONE : o > 0 ? vo.UP : vo.DOWN) : r && r(s, 0 === i ? vo.NONE : i > 0 ? vo.RIGHT : vo.LEFT, a)
        }
        ))
    }
    function Xo(e, t) {
        var r;
        return t = t || 250,
        function() {
            var n = this
              , i = arguments;
            clearTimeout(r),
            r = setTimeout((function() {
                e.apply(n, i)
            }
            ), t)
        }
    }
    function Ko(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" != typeof e.dispatchEvent)
            console.warn("Cannot dispatch event on element", e);
        else {
            var o;
            try {
                o = new window.CustomEvent(t,{
                    detail: r,
                    bubbles: n,
                    cancelable: i
                })
            } catch (e) {
                (o = document.createEvent("Event")).initEvent(t, n, i),
                o.detail = r
            }
            e.dispatchEvent(o)
        }
    }
    function $o(e, t, r) {
        var n = !1;
        r.addEventListener(e, (function() {
            n || (n = !0,
            requestAnimationFrame((function() {
                Ko(r, t),
                n = !1
            }
            )))
        }
        ))
    }
    function Qo(e, t, r) {
        if (Fo()) {
            return e.addEventListener(t, (function n(i) {
                e.removeEventListener(t, n),
                r(i)
            }
            ))
        }
        e.addEventListener(t, r, {
            capture: !1,
            once: !0,
            passive: !1
        })
    }
    var Jo = e((function() {
        K(1)
    }
    ));
    We({
        target: "Object",
        stat: !0,
        forced: Jo
    }, {
        keys: function(e) {
            return K(Ge(e))
        }
    });
    var Zo = Qi("trim");
    function ea(e) {
        var t = e.replace(/['"&,!#$\%^*:|\\\/~;]/g, "_");
        return t = (t = t.replace(/<[^>]*?>/g, " ")).replace(/\s+/g, " ")
    }
    function ta(e) {
        e && (window.xrx_sc_synthetic_lid_event ? window.xrx_sc_synthetic_lid_event(null, e) : console.log("Could not find a tracking method to use", e))
    }
    function ra(e, t, r) {
        if (void 0 !== window.s && "function" == typeof window.s.tl) {
            var n = window.s;
            n.linkTrackVars = "eVar1,prop1,eVar2,prop2,eVar3,prop3,eVar9,prop9,eVar34,prop34,eVar41,prop41,eVar42,prop42,events",
            n.linkTrackEvents = "event20,event21,event34",
            n.eVar41 = t,
            n.prop41 = "D=v41",
            n.eVar42 = r,
            n.prop42 = "D=v42",
            "string" == typeof n.pageName && n.pageName.match(/services:bpo:ccs:services/) && (n.pageName = n.pageName.replace("services:bpo:ccs:services", "bpo:customer-care")),
            "formpres" === e ? n.events = "event20" : "formsub" === e ? n.events = "event21" : "formerror" === e && (n.events = "event34"),
            n.tl(!0, "o", "xrxTrackForm")
        }
    }
    function na(e, t) {
        e && (e = ia(e),
        window.xrx_hbx_proxy ? window.xrx_hbx_proxy.xrxLid(e, void 0, t) : window.xrx_sc_synthetic_lid_event ? window.xrx_sc_synthetic_lid_event(e, t) : console.log("Could not find a tracking method to use: ".concat(e)))
    }
    function ia(e) {
        return e ? e.toLowerCase().trim().replace("&lid=", "").replace("&amp;lid=", "").replace(/[®™©&\(\)\[\]#;'"\\\/]/gi, "").replace("&", "").replace("--", "-").replace("--", "-").replace("--", "-").replace("  ", " ").replace("  ", " ").replace("  ", " ").replace(" ", "-") : e
    }
    function oa(e) {
        if (e) {
            if (e.dataset.xrxFwLid)
                return e.dataset.xrxFwLid;
            if (e.dataset.xrxAnalyticsLid)
                return e.dataset.xrxAnalyticsLid;
            if (e.getAttribute("name")) {
                var t = e.getAttribute("name")
                  , r = /lid\=([^&]*)/.exec(t);
                return r && r[1] ? r[1] : e.dataset.xrxFwLid
            }
            return ia(e.innerText)
        }
        return null
    }
    function aa(e) {
        return e.dataset.xrxFwBaseLid || null
    }
    function sa(e, t) {
        if (e) {
            var r = function(e) {
                if (e && e.dataset) {
                    for (var t = {}, r = 0, n = Object.entries(e.dataset); r < n.length; r++) {
                        var i = rr(n[r], 2)
                          , o = i[0]
                          , a = i[1];
                        if (o.startsWith("xrxDl")) {
                            var s = o.replace("xrxDl", "");
                            if ("event_label" === (s = s.charAt(0).toLowerCase() + s.slice(1))) {
                                var l = rr(a.split("|"), 4)
                                  , c = l[0]
                                  , u = l[1]
                                  , d = l[2]
                                  , f = l[3];
                                t.elLinkType = c,
                                t.elLid = u,
                                t.elClickHref = d,
                                t.elTag = f
                            }
                            t[s] = a
                        }
                    }
                    if (Object.keys(t).length)
                        return t
                }
            }(e);
            if (r) {
                var n = e.className || ""
                  , i = tr({
                    "gtm.element": e,
                    "gtm.elementClasses": n = n.split("").filter((function(e) {
                        return "\n" !== e && "\t" !== e
                    }
                    )).join("").split(" ").filter((function(e) {
                        return !!e && "\n" !== e && "\t" !== e
                    }
                    )).join(" ").trim(),
                    "gtm.elementId": e.id || "",
                    "gtm.elementTarget": e.target || "",
                    "gtm.elementUrl": e.href || e.action || "",
                    "gtm.elementLid": oa(e),
                    "gtm.elementTextContent": e.textContent,
                    "gtm.originalEvent": t
                }, r);
                window.dataLayer && "function" == typeof window.dataLayer.push ? window.dataLayer.push(i) : console.log("DataLayer", i)
            }
        }
    }
    We({
        target: "String",
        proto: !0,
        forced: Zo
    }, {
        trim: function() {
            return $i(this, 3)
        }
    }),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.lidClickHandler = this.lidClickHandler.bind(this),
            this.datalayerClickHandler = this.datalayerClickHandler.bind(this),
            this.selectHandler = this.selectHandler.bind(this),
            this.formSubmitHandler = this.formSubmitHandler.bind(this),
            Bo(this.document, "click", "[data-xrx-fw-lid]:not(form)", this.lidClickHandler),
            Bo(this.document, "change", "select", this.selectHandler),
            Bo(this.document, "submit", "form[data-xrx-fw-form-lid]", this.formSubmitHandler),
            Bo(this.document, "click", "[data-xrx-dl-event]:not(form)", this.datalayerClickHandler)
        }
        return Zt(e, [{
            key: "lidClickHandler",
            value: function(e) {
                var t = e.desiredTarget;
                this.track(t)
            }
        }, {
            key: "datalayerClickHandler",
            value: function(e) {
                var t = e.desiredTarget;
                t && sa(t)
            }
        }, {
            key: "selectHandler",
            value: function(e) {
                var t = e.desiredTarget;
                t && t.options && this.track(t.options[t.selectedIndex])
            }
        }, {
            key: "formSubmitHandler",
            value: function(e) {
                var t = e.desiredTarget;
                this.track(t)
            }
        }, {
            key: "track",
            value: function(e) {
                if (e) {
                    var t = e.dataset.xrxFwLid || e.dataset.xrxFwFormLid;
                    t && na(t, e)
                }
            }
        }]),
        e
    }())(window,document);
    var la = V(!0);
    We({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return la(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    ue("includes");
    var ca = Bi("includes");
    We({
        target: "String",
        proto: !0,
        forced: !ca
    }, {
        includes: function(e) {
            return !!~ji(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.clickHandler = this.clickHandler.bind(this),
            this.trustArcHandler = this.trustArcHandler.bind(this),
            this.bazaarVoiceHandler = this.bazaarVoiceHandler.bind(this),
            this.window = t,
            this.document = r,
            this.handlers = [this.trustArcHandler, this.bazaarVoiceHandler],
            Bo(this.document, "click", "[href]", this.clickHandler)
        }
        return Zt(e, [{
            key: "clickHandler",
            value: function(e) {
                try {
                    var t = e.desiredTarget
                      , r = t.getAttribute("href")
                      , n = !1;
                    if (r) {
                        var i = !0
                          , o = !1
                          , a = void 0;
                        try {
                            for (var s, l = this.handlers[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                                if (n = (0,
                                s.value)(r))
                                    break
                            }
                        } catch (e) {
                            o = !0,
                            a = e
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                        if (n && (e && (e.preventDefault(),
                        e.stopImmediatePropagation()),
                        t)) {
                            var c = t.dataset.xrxFwLid || t.dataset.xrxFwFormLid;
                            c && na(c, t)
                        }
                    }
                } catch (e) {
                    console.error("Error in alternative click handler.", e)
                }
            }
        }, {
            key: "trustArcHandler",
            value: function(e) {
                return !!(e.includes("preferences-mgr.truste.com") && this.window && this.window.truste && this.window.truste.eu && this.window.truste.eu.clickListener) && (this.window.truste.eu.clickListener(),
                !0)
            }
        }, {
            key: "bazaarVoiceHandler",
            value: function(e) {
                if (e.includes("ugc.bazaarvoice.com") && e.includes("bvaction") && e.includes("bvproductId") && this.window && this.window.$BV && this.window.$BV.ui) {
                    var t = e.substring(e.indexOf("?"))
                      , r = new URLSearchParams(t);
                    if ("rr_submit_review" === r.get("bvaction")) {
                        var n = r.get("bvproductId");
                        if (n)
                            return this.window.$BV.ui("rr", "submit_review", {
                                productId: n
                            }),
                            !0
                    }
                }
                return !1
            }
        }]),
        e
    }())(window,document);
    var ua = D("isConcatSpreadable")
      , da = !e((function() {
        var e = [];
        return e[ua] = !1,
        e.concat()[0] !== e
    }
    ))
      , fa = vn("concat")
      , ha = function(e) {
        if (!v(e))
            return !1;
        var t = e[ua];
        return void 0 !== t ? !!t : sr(e)
    };
    We({
        target: "Array",
        proto: !0,
        forced: !da || !fa
    }, {
        concat: function(e) {
            var t, r, n, i, o, a = Ge(this), s = dn(a, 0), l = 0;
            for (t = -1,
            n = arguments.length; t < n; t++)
                if (ha(o = -1 === t ? a : arguments[t])) {
                    if (l + (i = z(o.length)) > 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    for (r = 0; r < i; r++,
                    l++)
                        r in o && On(s, l, o[r])
                } else {
                    if (l >= 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    On(s, l++, o)
                }
            return s.length = l,
            s
        }
    });
    var va = "xrx-fw-hiding-sidebar--open"
      , pa = function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            Bo(this.document, "click", null, (function(e) {
                try {
                    n.handleCloseClick(e)
                } catch (e) {
                    console.error(e)
                }
            }
            )),
            Bo(this.document, "click", 'a[href^="#"]', (function(e) {
                try {
                    n.handleHashClick(e)
                } catch (e) {
                    console.error(e)
                }
            }
            )),
            Bo(this.document, "xrx.swipe", ".".concat("xrx-fw-hiding-sidebar"), (function(e) {
                try {
                    n.handleSwipeClose(e)
                } catch (e) {
                    console.error(e)
                }
            }
            )),
            Bo(this.document, "click", ".xrx-fw-hiding-sidebar__close", (function(e) {
                try {
                    So(e.desiredTarget, ".".concat("xrx-fw-hiding-sidebar")).classList.remove(va),
                    n.removeBodyClasses(n.document.body)
                } catch (e) {
                    console.error(e)
                }
            }
            ))
        }
        return Zt(e, [{
            key: "handleSwipeClose",
            value: function(e) {
                e.detail.xDirection === vo.LEFT && (e.desiredTarget.classList.remove(va),
                this.removeBodyClasses(this.document.body))
            }
        }, {
            key: "handleCloseClick",
            value: function(e) {
                var t = this.document.querySelector(".".concat(va));
                if (t) {
                    var r = So(e.target, ".".concat(va));
                    r && r === t || (t.classList.remove(va),
                    this.removeBodyClasses(this.document.body))
                }
            }
        }, {
            key: "handleHashClick",
            value: function(e) {
                var t = e.desiredTarget.getAttribute("href");
                if (t && t.length > 1) {
                    var r = this.document.querySelector("".concat(t, ".").concat("xrx-fw-hiding-sidebar"));
                    if (r) {
                        e.preventDefault();
                        var n = this.getSidebarBreakpoint(r);
                        ko(r).call(r, ".".concat(va)) ? (r.classList.remove(va),
                        this.removeBodyClasses(this.document.body)) : (r.classList.add(va),
                        this.document.body.classList.add("xrx-fw-body-overlay-".concat(n, "--no-overflow")))
                    }
                }
            }
        }, {
            key: "getSidebarBreakpoint",
            value: function(e) {
                for (var t = [].slice.call(e.classList), r = /xrx-fw-hiding-sidebar--(xs|sm|md|lg)/i, n = t.map((function(e) {
                    var t = e.match(r);
                    return t ? t[1] : null
                }
                )), i = 0; i < t.length; i++)
                    if (n[i])
                        return n[i]
            }
        }, {
            key: "removeBodyClasses",
            value: function(e) {
                e && [].slice.call(e.classList).forEach((function(t) {
                    -1 !== t.indexOf("xrx-fw-body-overlay") && e.classList.remove(t)
                }
                ))
            }
        }]),
        e
    }()
      , ma = {
        width: 800,
        height: 600,
        scrollbars: "yes",
        resizable: "yes",
        toolbar: "no",
        status: "no",
        menubar: "no",
        top: 0,
        left: 0,
        location: "no",
        directories: "no",
        copyhistory: "no"
    };
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.windowObjectReference = null,
            this.clickHandler = this.clickHandler.bind(this),
            this.openPopup = this.openPopup.bind(this),
            Bo(this.document, "click", "a[href][data-xrx-fw-popup]", this.clickHandler, !0),
            this.window.xrx = tr({}, this.window.xrx, {
                popup: {
                    open: this.openPopup
                }
            })
        }
        return Zt(e, [{
            key: "clickHandler",
            value: function(e) {
                var t = this
                  , r = e.desiredTarget || e.currentTarget
                  , n = r.dataset
                  , i = r.getAttribute("href")
                  , o = tr({}, ma);
                Object.keys(ma).forEach((function(e) {
                    var r = "xrxFwPopup".concat(t.capitaliseFirst(e));
                    n.hasOwnProperty(r) && (o[e] = n[r])
                }
                )),
                this.openPopup(i, o),
                e.preventDefault(),
                e.stopImmediatePropagation(),
                setTimeout((function() {
                    ta(r),
                    sa(r, e)
                }
                ), 50)
            }
        }, {
            key: "openPopup",
            value: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "xrxFwPopup";
                null === this.windowObjectReference || this.windowObjectReference.closed || this.windowObjectReference.close();
                var n = "";
                t && (n = Object.keys(t).filter((function(e) {
                    return void 0 !== t[e] && null !== t[e]
                }
                )).map((function(e) {
                    return "".concat(e, "=").concat(t[e])
                }
                )).join(",")),
                this.windowObjectReference = window.open(e, r, n)
            }
        }, {
            key: "capitaliseFirst",
            value: function(e) {
                var t = e.toLowerCase();
                return t.charAt(0).toUpperCase() + t.substr(1)
            }
        }]),
        e
    }())(window,document);
    var ya = c((function(e) {
        var t = {};
        (e.exports = function(e, r, n, i, o) {
            var a, s, l, c, u, d = xt(r, n, i ? 2 : 1);
            if (o)
                a = e;
            else {
                if ("function" != typeof (s = At(e)))
                    throw TypeError("Target is not iterable");
                if (Rn(s)) {
                    for (l = 0,
                    c = z(e.length); c > l; l++)
                        if ((i ? d(g(u = e[l])[0], u[1]) : d(e[l])) === t)
                            return t;
                    return
                }
                a = s.call(e)
            }
            for (; !(u = a.next()).done; )
                if (Cn(a, d, u.value, i) === t)
                    return t
        }
        ).BREAK = t
    }
    ))
      , wa = _.f
      , ga = lo.fastKey
      , xa = Se.set
      , ba = Se.getterFor
      , _a = (function(t, r, n, i, o) {
        var a = f[t]
          , s = a && a.prototype
          , l = a
          , c = i ? "set" : "add"
          , u = {}
          , d = function(e) {
            var t = s[e];
            Ie(s, e, "add" == e ? function(e) {
                return t.call(this, 0 === e ? 0 : e),
                this
            }
            : "delete" == e ? function(e) {
                return !(o && !v(e)) && t.call(this, 0 === e ? 0 : e)
            }
            : "get" == e ? function(e) {
                return o && !v(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
            }
            : "has" == e ? function(e) {
                return !(o && !v(e)) && t.call(this, 0 === e ? 0 : e)
            }
            : function(e, r) {
                return t.call(this, 0 === e ? 0 : e, r),
                this
            }
            )
        };
        if (Be(t, "function" != typeof a || !(o || s.forEach && !e((function() {
            (new a).entries().next()
        }
        )))))
            l = n.getConstructor(r, t, i, c),
            lo.REQUIRED = !0;
        else if (Be(t, !0)) {
            var h = new l
              , p = h[c](o ? {} : -0, 1) != h
              , m = e((function() {
                h.has(1)
            }
            ))
              , y = Tn((function(e) {
                new a(e)
            }
            ))
              , w = !o && e((function() {
                for (var e = new a, t = 5; t--; )
                    e[c](t, t);
                return !e.has(-0)
            }
            ));
            y || ((l = r((function(e, r) {
                wt(e, l, t);
                var n = Qn(new a, e, l);
                return null != r && ya(r, n[c], n, i),
                n
            }
            ))).prototype = s,
            s.constructor = l),
            (m || w) && (d("delete"),
            d("has"),
            i && d("get")),
            (w || p) && d(c),
            o && s.clear && delete s.clear
        }
        u[t] = l,
        We({
            global: !0,
            forced: l != a
        }, u),
        rt(l, t),
        o || n.setStrong(l, t, i)
    }("Set", (function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }
    ), {
        getConstructor: function(e, t, r, n) {
            var i = e((function(e, o) {
                wt(e, i, t),
                xa(e, {
                    type: t,
                    index: ie(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }),
                h || (e.size = 0),
                null != o && ya(o, e[n], e, r)
            }
            ))
              , o = ba(t)
              , a = function(e, t, r) {
                var n, i, a = o(e), l = s(e, t);
                return l ? l.value = r : (a.last = l = {
                    index: i = ga(t, !0),
                    key: t,
                    value: r,
                    previous: n = a.last,
                    next: void 0,
                    removed: !1
                },
                a.first || (a.first = l),
                n && (n.next = l),
                h ? a.size++ : e.size++,
                "F" !== i && (a.index[i] = l)),
                e
            }
              , s = function(e, t) {
                var r, n = o(e), i = ga(t);
                if ("F" !== i)
                    return n.index[i];
                for (r = n.first; r; r = r.next)
                    if (r.key == t)
                        return r
            };
            return yt(i.prototype, {
                clear: function() {
                    for (var e = o(this), t = e.index, r = e.first; r; )
                        r.removed = !0,
                        r.previous && (r.previous = r.previous.next = void 0),
                        delete t[r.index],
                        r = r.next;
                    e.first = e.last = void 0,
                    h ? e.size = 0 : this.size = 0
                },
                delete: function(e) {
                    var t = o(this)
                      , r = s(this, e);
                    if (r) {
                        var n = r.next
                          , i = r.previous;
                        delete t.index[r.index],
                        r.removed = !0,
                        i && (i.next = n),
                        n && (n.previous = i),
                        t.first == r && (t.first = n),
                        t.last == r && (t.last = i),
                        h ? t.size-- : this.size--
                    }
                    return !!r
                },
                forEach: function(e) {
                    for (var t, r = o(this), n = xt(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : r.first; )
                        for (n(t.value, t.key, this); t && t.removed; )
                            t = t.previous
                },
                has: function(e) {
                    return !!s(this, e)
                }
            }),
            yt(i.prototype, r ? {
                get: function(e) {
                    var t = s(this, e);
                    return t && t.value
                },
                set: function(e, t) {
                    return a(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function(e) {
                    return a(this, e = 0 === e ? 0 : e, e)
                }
            }),
            h && wa(i.prototype, "size", {
                get: function() {
                    return o(this).size
                }
            }),
            i
        },
        setStrong: function(e, t, r) {
            var n = t + " Iterator"
              , i = ba(t)
              , o = ba(n);
            dt(e, t, (function(e, t) {
                xa(this, {
                    type: n,
                    target: e,
                    state: i(e),
                    kind: t,
                    last: void 0
                })
            }
            ), (function() {
                for (var e = o(this), t = e.kind, r = e.last; r && r.removed; )
                    r = r.previous;
                return e.target && (e.last = r = r ? r.next : e.state.first) ? "keys" == t ? {
                    value: r.key,
                    done: !1
                } : "values" == t ? {
                    value: r.value,
                    done: !1
                } : {
                    value: [r.key, r.value],
                    done: !1
                } : (e.target = void 0,
                {
                    value: void 0,
                    done: !0
                })
            }
            ), r ? "entries" : "values", !r, !0),
            ni(t)
        }
    }),
    c((function(e) {
        !function(t, r) {
            var n = function(e, t, r) {
                var n, i;
                if (function() {
                    var t, r = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (t in i = e.lazySizesConfig || e.lazysizesConfig || {},
                    r)
                        t in i || (i[t] = r[t])
                }(),
                !t || !t.getElementsByClassName)
                    return {
                        init: function() {},
                        cfg: i,
                        noSupport: !0
                    };
                var o = t.documentElement
                  , a = e.HTMLPictureElement
                  , s = e.addEventListener.bind(e)
                  , l = e.setTimeout
                  , c = e.requestAnimationFrame || l
                  , u = e.requestIdleCallback
                  , d = /^picture$/i
                  , f = ["load", "error", "lazyincluded", "_lazyloaded"]
                  , h = {}
                  , v = Array.prototype.forEach
                  , p = function(e, t) {
                    return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                    h[t].test(e.getAttribute("class") || "") && h[t]
                }
                  , m = function(e, t) {
                    p(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
                }
                  , y = function(e, t) {
                    var r;
                    (r = p(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(r, " "))
                }
                  , w = function(e, t, r) {
                    var n = r ? "addEventListener" : "removeEventListener";
                    r && w(e, t),
                    f.forEach((function(r) {
                        e[n](r, t)
                    }
                    ))
                }
                  , g = function(e, r, i, o, a) {
                    var s = t.createEvent("Event");
                    return i || (i = {}),
                    i.instance = n,
                    s.initEvent(r, !o, !a),
                    s.detail = i,
                    e.dispatchEvent(s),
                    s
                }
                  , x = function(t, r) {
                    var n;
                    !a && (n = e.picturefill || i.pf) ? (r && r.src && !t.getAttribute("srcset") && t.setAttribute("srcset", r.src),
                    n({
                        reevaluate: !0,
                        elements: [t]
                    })) : r && r.src && (t.src = r.src)
                }
                  , b = function(e, t) {
                    return (getComputedStyle(e, null) || {})[t]
                }
                  , _ = function(e, t, r) {
                    for (r = r || e.offsetWidth; r < i.minSize && t && !e._lazysizesWidth; )
                        r = t.offsetWidth,
                        t = t.parentNode;
                    return r
                }
                  , k = (N = [],
                q = [],
                H = N,
                M = function() {
                    var e = H;
                    for (H = N.length ? q : N,
                    D = !0,
                    F = !1; e.length; )
                        e.shift()();
                    D = !1
                }
                ,
                P = function(e, r) {
                    D && !r ? e.apply(this, arguments) : (H.push(e),
                    F || (F = !0,
                    (t.hidden ? l : c)(M)))
                }
                ,
                P._lsFlush = M,
                P)
                  , S = function(e, t) {
                    return t ? function() {
                        k(e)
                    }
                    : function() {
                        var t = this
                          , r = arguments;
                        k((function() {
                            e.apply(t, r)
                        }
                        ))
                    }
                }
                  , A = function(e) {
                    var t, n, i = function() {
                        t = null,
                        e()
                    }, o = function() {
                        var e = r.now() - n;
                        e < 99 ? l(o, 99 - e) : (u || i)(i)
                    };
                    return function() {
                        n = r.now(),
                        t || (t = l(o, 99))
                    }
                }
                  , E = function() {
                    var a, f, h, _, E, C, L, I, R, O, D, F, N = /^img$/i, q = /^iframe$/i, H = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent), M = 0, P = 0, z = -1, j = function(e) {
                        P--,
                        (!e || P < 0 || !e.target) && (P = 0)
                    }, U = function(e) {
                        return null == F && (F = "hidden" == b(t.body, "visibility")),
                        F || !("hidden" == b(e.parentNode, "visibility") && "hidden" == b(e, "visibility"))
                    }, B = function(e, r) {
                        var n, i = e, a = U(e);
                        for (I -= r,
                        D += r,
                        R -= r,
                        O += r; a && (i = i.offsetParent) && i != t.body && i != o; )
                            (a = (b(i, "opacity") || 1) > 0) && "visible" != b(i, "overflow") && (n = i.getBoundingClientRect(),
                            a = O > n.left && R < n.right && D > n.top - 1 && I < n.bottom + 1);
                        return a
                    }, V = function() {
                        var e, r, s, l, c, u, d, h, v, p, m, y, w = n.elements;
                        if ((_ = i.loadMode) && P < 8 && (e = w.length)) {
                            for (r = 0,
                            z++; r < e; r++)
                                if (w[r] && !w[r]._lazyRace)
                                    if (!H || n.prematureUnveil && n.prematureUnveil(w[r]))
                                        Q(w[r]);
                                    else if ((h = w[r].getAttribute("data-expand")) && (u = 1 * h) || (u = M),
                                    p || (p = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand,
                                    n._defEx = p,
                                    m = p * i.expFactor,
                                    y = i.hFac,
                                    F = null,
                                    M < m && P < 1 && z > 2 && _ > 2 && !t.hidden ? (M = m,
                                    z = 0) : M = _ > 1 && z > 1 && P < 6 ? p : 0),
                                    v !== u && (C = innerWidth + u * y,
                                    L = innerHeight + u,
                                    d = -1 * u,
                                    v = u),
                                    s = w[r].getBoundingClientRect(),
                                    (D = s.bottom) >= d && (I = s.top) <= L && (O = s.right) >= d * y && (R = s.left) <= C && (D || O || R || I) && (i.loadHidden || U(w[r])) && (f && P < 3 && !h && (_ < 3 || z < 4) || B(w[r], u))) {
                                        if (Q(w[r]),
                                        c = !0,
                                        P > 9)
                                            break
                                    } else
                                        !c && f && !l && P < 4 && z < 4 && _ > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !h && (D || O || R || I || "auto" != w[r].getAttribute(i.sizesAttr))) && (l = a[0] || w[r]);
                            l && !c && Q(l)
                        }
                    }, W = function(e) {
                        var t, n = 0, o = i.throttleDelay, a = i.ricTimeout, s = function() {
                            t = !1,
                            n = r.now(),
                            e()
                        }, c = u && a > 49 ? function() {
                            u(s, {
                                timeout: a
                            }),
                            a !== i.ricTimeout && (a = i.ricTimeout)
                        }
                        : S((function() {
                            l(s)
                        }
                        ), !0);
                        return function(e) {
                            var i;
                            (e = !0 === e) && (a = 33),
                            t || (t = !0,
                            (i = o - (r.now() - n)) < 0 && (i = 0),
                            e || i < 9 ? c() : l(c, i))
                        }
                    }(V), G = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (j(e),
                        m(t, i.loadedClass),
                        y(t, i.loadingClass),
                        w(t, X),
                        g(t, "lazyloaded"))
                    }, Y = S(G), X = function(e) {
                        Y({
                            target: e.target
                        })
                    }, K = function(e) {
                        var t, r = e.getAttribute(i.srcsetAttr);
                        (t = i.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t),
                        r && e.setAttribute("srcset", r)
                    }, $ = S((function(e, t, r, n, o) {
                        var a, s, c, u, f, p;
                        (f = g(e, "lazybeforeunveil", t)).defaultPrevented || (n && (r ? m(e, i.autosizesClass) : e.setAttribute("sizes", n)),
                        s = e.getAttribute(i.srcsetAttr),
                        a = e.getAttribute(i.srcAttr),
                        o && (u = (c = e.parentNode) && d.test(c.nodeName || "")),
                        p = t.firesLoad || "src"in e && (s || a || u),
                        f = {
                            target: e
                        },
                        m(e, i.loadingClass),
                        p && (clearTimeout(h),
                        h = l(j, 2500),
                        w(e, X, !0)),
                        u && v.call(c.getElementsByTagName("source"), K),
                        s ? e.setAttribute("srcset", s) : a && !u && (q.test(e.nodeName) ? function(e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (r) {
                                e.src = t
                            }
                        }(e, a) : e.src = a),
                        o && (s || u) && x(e, {
                            src: a
                        })),
                        e._lazyRace && delete e._lazyRace,
                        y(e, i.lazyClass),
                        k((function() {
                            var t = e.complete && e.naturalWidth > 1;
                            p && !t || (t && m(e, "ls-is-cached"),
                            G(f),
                            e._lazyCache = !0,
                            l((function() {
                                "_lazyCache"in e && delete e._lazyCache
                            }
                            ), 9)),
                            "lazy" == e.loading && P--
                        }
                        ), !0)
                    }
                    )), Q = function(e) {
                        if (!e._lazyRace) {
                            var t, r = N.test(e.nodeName), n = r && (e.getAttribute(i.sizesAttr) || e.getAttribute("sizes")), o = "auto" == n;
                            (!o && f || !r || !e.getAttribute("src") && !e.srcset || e.complete || p(e, i.errorClass) || !p(e, i.lazyClass)) && (t = g(e, "lazyunveilread").detail,
                            o && T.updateElem(e, !0, e.offsetWidth),
                            e._lazyRace = !0,
                            P++,
                            $(e, t, o, n, r))
                        }
                    }, J = A((function() {
                        i.loadMode = 3,
                        W()
                    }
                    )), Z = function() {
                        3 == i.loadMode && (i.loadMode = 2),
                        J()
                    }, ee = function() {
                        f || (r.now() - E < 999 ? l(ee, 999) : (f = !0,
                        i.loadMode = 3,
                        W(),
                        s("scroll", Z, !0)))
                    };
                    return {
                        _: function() {
                            E = r.now(),
                            n.elements = t.getElementsByClassName(i.lazyClass),
                            a = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                            s("scroll", W, !0),
                            s("resize", W, !0),
                            s("pageshow", (function(e) {
                                if (e.persisted) {
                                    var r = t.querySelectorAll("." + i.loadingClass);
                                    r.length && r.forEach && c((function() {
                                        r.forEach((function(e) {
                                            e.complete && Q(e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }
                            )),
                            e.MutationObserver ? new MutationObserver(W).observe(o, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (o.addEventListener("DOMNodeInserted", W, !0),
                            o.addEventListener("DOMAttrModified", W, !0),
                            setInterval(W, 999)),
                            s("hashchange", W, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                t.addEventListener(e, W, !0)
                            }
                            )),
                            /d$|^c/.test(t.readyState) ? ee() : (s("load", ee),
                            t.addEventListener("DOMContentLoaded", W),
                            l(ee, 2e4)),
                            n.elements.length ? (V(),
                            k._lsFlush()) : W()
                        },
                        checkElems: W,
                        unveil: Q,
                        _aLSL: Z
                    }
                }()
                  , T = (I = S((function(e, t, r, n) {
                    var i, o, a;
                    if (e._lazysizesWidth = n,
                    n += "px",
                    e.setAttribute("sizes", n),
                    d.test(t.nodeName || ""))
                        for (o = 0,
                        a = (i = t.getElementsByTagName("source")).length; o < a; o++)
                            i[o].setAttribute("sizes", n);
                    r.detail.dataAttr || x(e, r.detail)
                }
                )),
                R = function(e, t, r) {
                    var n, i = e.parentNode;
                    i && (r = _(e, i, r),
                    (n = g(e, "lazybeforesizes", {
                        width: r,
                        dataAttr: !!t
                    })).defaultPrevented || (r = n.detail.width) && r !== e._lazysizesWidth && I(e, i, n, r))
                }
                ,
                O = A((function() {
                    var e, t = L.length;
                    if (t)
                        for (e = 0; e < t; e++)
                            R(L[e])
                }
                )),
                {
                    _: function() {
                        L = t.getElementsByClassName(i.autosizesClass),
                        s("resize", O)
                    },
                    checkElems: O,
                    updateElem: R
                })
                  , C = function() {
                    !C.i && t.getElementsByClassName && (C.i = !0,
                    T._(),
                    E._())
                };
                var L, I, R, O;
                var D, F, N, q, H, M, P;
                return l((function() {
                    i.init && C()
                }
                )),
                n = {
                    cfg: i,
                    autoSizer: T,
                    loader: E,
                    init: C,
                    uP: x,
                    aC: m,
                    rC: y,
                    hC: p,
                    fire: g,
                    gW: _,
                    rAF: k
                }
            }(t, t.document, Date);
            t.lazySizes = n,
            e.exports && (e.exports = n)
        }("undefined" != typeof window ? window : {})
    }
    )));
    c((function(e) {
        !function(t, r) {
            if (t) {
                var n = function() {
                    r(t.lazySizes),
                    t.removeEventListener("lazyunveilread", n, !0)
                };
                r = r.bind(null, t, t.document),
                e.exports ? r(_a) : t.lazySizes ? n() : t.addEventListener("lazyunveilread", n, !0)
            }
        }("undefined" != typeof window ? window : 0, (function(e, t, r) {
            var n, i, o, a, s, l, c, u, d, f, h, v, p, m, y, w, g = r.cfg, x = t.createElement("img"), b = "sizes"in x && "srcset"in x, _ = /\s+\d+h/g, k = (i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            o = Array.prototype.forEach,
            function() {
                var e = t.createElement("img")
                  , n = function(e) {
                    var t, r, n = e.getAttribute(g.srcsetAttr);
                    n && (r = n.match(i)) && ((t = "w" == r[2] ? r[1] / r[3] : r[3] / r[1]) && e.setAttribute("data-aspectratio", t),
                    e.setAttribute(g.srcsetAttr, n.replace(_, "")))
                }
                  , a = function(e) {
                    if (e.detail.instance == r) {
                        var t = e.target.parentNode;
                        t && "PICTURE" == t.nodeName && o.call(t.getElementsByTagName("source"), n),
                        n(e.target)
                    }
                }
                  , s = function() {
                    e.currentSrc && t.removeEventListener("lazybeforeunveil", a)
                };
                t.addEventListener("lazybeforeunveil", a),
                e.onload = s,
                e.onerror = s,
                e.srcset = "data:,a 1w 1h",
                e.complete && s()
            }
            );
            (g.supportsType || (g.supportsType = function(e) {
                return !e
            }
            ),
            e.HTMLPictureElement && b) ? !r.hasHDescriptorFix && t.msElementsFromPoint && (r.hasHDescriptorFix = !0,
            k()) : e.picturefill || g.pf || (g.pf = function(t) {
                var r, i;
                if (!e.picturefill)
                    for (r = 0,
                    i = t.elements.length; r < i; r++)
                        n(t.elements[r])
            }
            ,
            u = function(e, t) {
                return e.w - t.w
            }
            ,
            d = /^\s*\d+\.*\d*px\s*$/,
            s = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
            l = /\s/,
            c = function(e, t, r, n) {
                a.push({
                    c: t,
                    u: r,
                    w: 1 * n
                })
            }
            ,
            h = function() {
                var e, r, i;
                h.init || (h.init = !0,
                addEventListener("resize", (r = t.getElementsByClassName("lazymatchmedia"),
                i = function() {
                    var e, t;
                    for (e = 0,
                    t = r.length; e < t; e++)
                        n(r[e])
                }
                ,
                function() {
                    clearTimeout(e),
                    e = setTimeout(i, 66)
                }
                )))
            }
            ,
            v = function(t, n) {
                var i, o = t.getAttribute("srcset") || t.getAttribute(g.srcsetAttr);
                !o && n && (o = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(g.srcAttr) || t.getAttribute("src")),
                t._lazypolyfill && t._lazypolyfill._set == o || (i = f(o || ""),
                n && t.parentNode && (i.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(),
                i.isPicture && e.matchMedia && (r.aC(t, "lazymatchmedia"),
                h())),
                i._set = o,
                Object.defineProperty(t, "_lazypolyfill", {
                    value: i,
                    writable: !0
                }))
            }
            ,
            p = function(t) {
                return e.matchMedia ? (p = function(e) {
                    return !e || (matchMedia(e) || {}).matches
                }
                )(t) : !t
            }
            ,
            m = function(t) {
                var n, i, o, a, s, l, c;
                if (v(a = t, !0),
                (s = a._lazypolyfill).isPicture)
                    for (i = 0,
                    o = (n = t.parentNode.getElementsByTagName("source")).length; i < o; i++)
                        if (g.supportsType(n[i].getAttribute("type"), t) && p(n[i].getAttribute("media"))) {
                            a = n[i],
                            v(a),
                            s = a._lazypolyfill;
                            break
                        }
                return s.length > 1 ? (c = a.getAttribute("sizes") || "",
                c = d.test(c) && parseInt(c, 10) || r.gW(t, t.parentNode),
                s.d = function(t) {
                    var n = e.devicePixelRatio || 1
                      , i = r.getX && r.getX(t);
                    return Math.min(i || n, 2.5, n)
                }(t),
                !s.src || !s.w || s.w < c ? (s.w = c,
                l = function(e) {
                    for (var t, r, n = e.length, i = e[n - 1], o = 0; o < n; o++)
                        if ((i = e[o]).d = i.w / e.w,
                        i.d >= e.d) {
                            !i.cached && (t = e[o - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (r = Math.pow(t.d - .6, 1.6),
                            t.cached && (t.d += .15 * r),
                            t.d + (i.d - e.d) * r > e.d && (i = t));
                            break
                        }
                    return i
                }(s.sort(u)),
                s.src = l) : l = s.src) : l = s[0],
                l
            }
            ,
            (y = function(e) {
                if (!b || !e.parentNode || "PICTURE" == e.parentNode.nodeName.toUpperCase()) {
                    var t = m(e);
                    t && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u,
                    t.cached = !0,
                    e.setAttribute(g.srcAttr, t.u),
                    e.setAttribute("src", t.u))
                }
            }
            ).parse = f = function(e) {
                return a = [],
                (e = e.trim()).replace(_, "").replace(s, c),
                a.length || !e || l.test(e) || a.push({
                    c: e,
                    u: e,
                    w: 99
                }),
                a
            }
            ,
            n = y,
            g.loadedClass && g.loadingClass && (w = [],
            ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach((function(e) {
                w.push(e + g.loadedClass),
                w.push(e + g.loadingClass)
            }
            )),
            g.pf({
                elements: t.querySelectorAll(w.join(", "))
            })))
        }
        ))
    }
    )),
    c((function(e) {
        !function(t, r) {
            if (t) {
                var n = function() {
                    r(t.lazySizes),
                    t.removeEventListener("lazyunveilread", n, !0)
                };
                r = r.bind(null, t, t.document),
                e.exports ? r(_a) : t.lazySizes ? n() : t.addEventListener("lazyunveilread", n, !0)
            }
        }("undefined" != typeof window ? window : 0, (function(e, t, r) {
            if (e.addEventListener) {
                var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/
                  , i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/
                  , o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/
                  , a = /^picture$/i
                  , s = r.cfg
                  , l = {
                    getParent: function(t, r) {
                        var n = t
                          , i = t.parentNode;
                        return r && "prev" != r || !i || !a.test(i.nodeName || "") || (i = i.parentNode),
                        "self" != r && (n = "prev" == r ? t.previousElementSibling : r && (i.closest || e.jQuery) && (i.closest ? i.closest(r) : jQuery(i).closest(r)[0]) || i),
                        n
                    },
                    getFit: function(e) {
                        var t, r, n = getComputedStyle(e, null) || {}, a = n.content || n.fontFamily, s = {
                            fit: e._lazysizesParentFit || e.getAttribute("data-parent-fit")
                        };
                        return !s.fit && a && (t = a.match(i)) && (s.fit = t[1]),
                        s.fit ? (!(r = e._lazysizesParentContainer || e.getAttribute("data-parent-container")) && a && (t = a.match(o)) && (r = t[1]),
                        s.parent = l.getParent(e, r)) : s.fit = n.objectFit,
                        s
                    },
                    getImageRatio: function(t) {
                        var r, i, o, l, c, u, d, f = t.parentNode, h = f && a.test(f.nodeName || "") ? f.querySelectorAll("source, img") : [t];
                        for (r = 0; r < h.length; r++)
                            if (i = (t = h[r]).getAttribute(s.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "",
                            o = t._lsMedia || t.getAttribute("media"),
                            o = s.customMedia[t.getAttribute("data-media") || o] || o,
                            i && (!o || (e.matchMedia && matchMedia(o) || {}).matches)) {
                                (l = parseFloat(t.getAttribute("data-aspectratio"))) || ((c = i.match(n)) ? "w" == c[2] ? (u = c[1],
                                d = c[3]) : (u = c[3],
                                d = c[1]) : (u = t.getAttribute("width"),
                                d = t.getAttribute("height")),
                                l = u / d);
                                break
                            }
                        return l
                    },
                    calculateSize: function(e, t) {
                        var r, n, i, o = this.getFit(e), a = o.fit, s = o.parent;
                        return "width" == a || ("contain" == a || "cover" == a) && (n = this.getImageRatio(e)) ? (s ? t = s.clientWidth : s = e,
                        i = t,
                        "width" == a ? i = t : (r = t / s.clientHeight) && ("cover" == a && r < n || "contain" == a && r > n) && (i = t * (n / r)),
                        i) : t
                    }
                };
                r.parentFit = l,
                t.addEventListener("lazybeforesizes", (function(e) {
                    if (!e.defaultPrevented && e.detail.instance == r) {
                        var t = e.target;
                        e.detail.width = l.calculateSize(t, e.detail.width)
                    }
                }
                ))
            }
        }
        ))
    }
    ));
    _a.cfg.lazyClass = "xrx-fw-lazyload",
    _a.cfg.preloadClass = "xrx-fw-lazypreload",
    _a.cfg.loadingClass = "xrx-fw-lazyloading",
    _a.cfg.loadedClass = "xrx-fw-lazyloaded",
    _a.cfg.errorClass = "xrx-fw-lazyerror",
    _a.cfg.autosizesClass = "xrx-fw-lazyautosizes",
    _a.cfg.expFactor = 1.2,
    _a.cfg.loadMode = 1;
    var ka = new Set(["image/jpeg", "image/png", "image/webp", "image/svg+xml"]);
    _a.cfg.supportsType = function(e) {
        return ka.has(e)
    }
    ;
    var Sa = function() {
        var e, t, r = /(twitter|facebook|google-plus|pinterest|tumblr|vk|linkedin|buffer|email)/;
        function n(e) {
            return document.querySelectorAll(e)
        }
        function i(e) {
            return e.className.match(r)
        }
        function o(e, t, r, n) {
            return (n = n || s(e, t, r)).url || window.location.href
        }
        function a(e, t) {
            var r, i = n("meta[" + (t || (0 === e.indexOf("og:") ? "property" : "name")) + '="' + e + '"]');
            return i.length && (r = i[0].getAttribute("content") || ""),
            r || ""
        }
        function s(e, t, r) {
            var n, i, o, a, s = ["url", "title", "text", "image"], l = {}, c = r.parentNode;
            for (a in "twitter" == t && s.push("via"),
            s)
                o = "data-" + (i = s[a]),
                void 0 !== (n = r.getAttribute(o) || c.getAttribute(o) || (e[t] && void 0 !== e[t][i] ? e[t][i] : e[i])) && (l[i] = n);
            return l
        }
        function l(e, t) {
            var r = document.createElement("div");
            r.innerHTML = t,
            r.className = "ssk-num",
            e.appendChild(r)
        }
        function c(e, t, r, n) {
            var i, o, a = encodeURIComponent(t);
            switch (e) {
            case "facebook":
                i = "https://graph.facebook.com/?id=" + a,
                o = function(e) {
                    return n(e.share ? e.share.share_count : 0)
                }
                ;
                break;
            case "twitter":
                r && r.twitter && r.twitter.countCallback && r.twitter.countCallback(t, n);
                break;
            case "google-plus":
                return void function(e, t, r) {
                    var n = new XMLHttpRequest;
                    n.onreadystatechange = function() {
                        4 === this.readyState && this.status >= 200 && this.status < 400 && t(this.responseText)
                    }
                    ,
                    n.open("POST", e, !0),
                    n.setRequestHeader("Content-Type", "application/json"),
                    n.send(r)
                }(i = "https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ", o = function(e) {
                    if ((e = JSON.parse(e)).length)
                        return n(e[0].result.metadata.globalCounts.count)
                }
                , '[{"method":"pos.plusones.get","id":"p","params":{"id":"' + t + '","userId":"@viewer","groupId":"@self","nolog":true},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]');
            case "linkedin":
                i = "https://www.linkedin.com/countserv/count/share?url=" + a,
                o = function(e) {
                    return n(e.count)
                }
                ;
                break;
            case "pinterest":
                i = "https://api.pinterest.com/v1/urls/count.json?url=" + a,
                o = function(e) {
                    return n(e.count)
                }
                ;
                break;
            case "vk":
                i = "https://vk.com/share.php?act=count&url=" + a,
                o = function(e) {
                    return n(e)
                }
                ;
                break;
            case "buffer":
                i = "https://api.bufferapp.com/1/links/shares.json?url=" + a,
                o = function(e) {
                    return n(e.shares)
                }
            }
            i && o && function(e, t, r) {
                var n = "cb_" + e + "_" + Math.round(1e5 * Math.random())
                  , i = document.createElement("script");
                window[n] = function(e) {
                    try {
                        delete window[n]
                    } catch (e) {}
                    document.body.removeChild(i),
                    r(e)
                }
                ,
                "vk" == e ? window.VK = {
                    Share: {
                        count: function(e, t) {
                            window[n](t)
                        }
                    }
                } : "google-plus" == e && (window.services = {
                    gplus: {
                        cb: window[n]
                    }
                });
                i.src = t + (t.indexOf("?") >= 0 ? "&" : "?") + "callback=" + n,
                document.body.appendChild(i)
            }(e, i, o)
        }
        return (t = function(e) {
            var t = e || {}
              , r = t.selector || ".ssk";
            this.nodes = n(r),
            this.options = t
        }
        ).prototype = {
            share: function() {
                var e, t = this.nodes, r = this.options, n = {}, u = function() {
                    t.length && (function(e, t) {
                        for (var r = 0; r < e.length; r++)
                            t(e[r], r)
                    }(t, (function(e) {
                        var t, a = i(e);
                        if (a) {
                            if (e.getAttribute("data-ssk-ready")) {
                                if (!r.reinitialize || !e._skkListener)
                                    return;
                                !function(e, t, r) {
                                    e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent("on" + t, r)
                                }(e, "click", e._skkListener)
                            }
                            e.setAttribute("data-ssk-ready", !0),
                            function(e, t, r) {
                                e.addEventListener ? e.addEventListener(t, r) : e.attachEvent("on" + t, (function() {
                                    r.call(e)
                                }
                                ))
                            }(e, "click", d),
                            e._skkListener = d,
                            -1 !== e.parentNode.className.indexOf("ssk-count") && ((t = (a = a[0]) + "*|*" + o(r, a, e))in n || (n[t] = []),
                            n[t].push(e))
                        }
                    }
                    )),
                    function() {
                        var e, t;
                        for (e in n)
                            t = e.split("*|*"),
                            function(e) {
                                c(t[0], t[1], r, (function(t) {
                                    for (var r in e)
                                        l(e[r], t)
                                }
                                ))
                            }(n[e])
                    }())
                };
                function d(e) {
                    var t, n = function(e) {
                        var t = e || window.event;
                        t.preventDefault ? t.preventDefault() : (t.returnValue = !1,
                        t.cancelBubble = !0);
                        return t.currentTarget || t.srcElement
                    }(e), l = i(n), c = l[0];
                    if (l && (t = function(e, t, r) {
                        var n, i = s(e, t, r), l = o(e, t, r, i), c = void 0 !== i.title ? i.title : function(e) {
                            var t;
                            "twitter" == e && (t = a("twitter:title"));
                            return t || document.title
                        }(t), u = void 0 !== i.text ? i.text : function(e) {
                            var t;
                            "twitter" == e && (t = a("twitter:description"));
                            return t || a("description")
                        }(t), d = i.image ? i.image : a("og:image"), f = void 0 !== i.via ? i.via : a("twitter:site"), h = {
                            shareUrl: l,
                            title: c,
                            text: u,
                            image: d,
                            via: f,
                            options: e,
                            shareUrlEncoded: function() {
                                return encodeURIComponent(this.shareUrl)
                            }
                        };
                        switch (t) {
                        case "facebook":
                            n = "https://www.facebook.com/share.php?u=" + h.shareUrlEncoded();
                            break;
                        case "twitter":
                            n = "https://twitter.com/intent/tweet?url=" + h.shareUrlEncoded() + "&text=" + encodeURIComponent(c + (u && c ? " - " : "") + u),
                            f && (n += "&via=" + f.replace("@", ""));
                            break;
                        case "google-plus":
                            n = "https://plus.google.com/share?url=" + h.shareUrlEncoded();
                            break;
                        case "pinterest":
                            n = "https://pinterest.com/pin/create/button/?url=" + h.shareUrlEncoded() + "&description=" + encodeURIComponent(u),
                            d && (n += "&media=" + encodeURIComponent(d));
                            break;
                        case "tumblr":
                            n = "https://www.tumblr.com/share/link?url=" + h.shareUrlEncoded() + "&name=" + encodeURIComponent(c) + "&description=" + encodeURIComponent(u);
                            break;
                        case "linkedin":
                            n = "https://www.linkedin.com/shareArticle?mini=true&url=" + h.shareUrlEncoded() + "&title=" + encodeURIComponent(c) + "&summary=" + encodeURIComponent(u);
                            break;
                        case "vk":
                            n = "https://vkontakte.ru/share.php?url=" + h.shareUrlEncoded();
                            break;
                        case "buffer":
                            n = "https://buffer.com/add?source=button&url=" + h.shareUrlEncoded() + "&text=" + encodeURIComponent(u);
                            break;
                        case "email":
                            n = "mailto:?subject=" + encodeURIComponent(c) + "&body=" + encodeURIComponent(c + "\n" + l + "\n\n" + u + "\n")
                        }
                        h.networkUrl = n,
                        e.onBeforeOpen && e.onBeforeOpen(r, t, h);
                        return h.networkUrl
                    }(r, c, n)))
                        if (window.twttr && -1 !== n.getAttribute("href").indexOf("twitter.com/intent/"))
                            n.setAttribute("href", t);
                        else if ("email" !== c) {
                            var u, d;
                            "buffer" === c ? (u = 800,
                            d = 680) : (u = 575,
                            d = 400);
                            var f = function(e, t, r) {
                                var n, i, o, a;
                                t && r ? (i = document.documentElement.clientWidth / 2 - t / 2,
                                o = (document.documentElement.clientHeight - r) / 2,
                                a = "status=1,resizable=yes,width=" + t + ",height=" + r + ",top=" + o + ",left=" + i,
                                n = window.open(e, "", a)) : n = window.open(e);
                                return n.focus(),
                                n
                            }(t, u, d);
                            if (r.onOpen && r.onOpen(n, c, t, f),
                            r.onClose)
                                var h = window.setInterval((function() {
                                    !1 !== f.closed && (window.clearInterval(h),
                                    r.onClose(n, c, t, f))
                                }
                                ), 250)
                        } else
                            document.location = t
                }
                return !0 === r.forceInit ? u() : (e = u,
                "loading" != document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", (function() {
                    "loading" != document.readyState && e()
                }
                ))),
                this.nodes
            }
        },
        e = function(e) {
            return new t(e)
        }
        ,
        {
            init: function(t) {
                return e(t).share()
            }
        }
    }();
    function Aa(e) {
        var t = e.imageUrl
          , r = e.width
          , n = e.height
          , i = e.mode
          , o = e.webp
          , a = void 0 === o ? function() {
            try {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
            } catch (e) {
                return !1
            }
        }() : o
          , s = {
            url: encodeURIComponent(t),
            width: r,
            height: n,
            mode: i,
            webp: !!a || void 0
        }
          , l = Object.entries(s).filter((function(e) {
            return void 0 !== rr(e, 2)[1]
        }
        )).map((function(e) {
            var t = rr(e, 2);
            return t[0] + "=" + t[1].toString()
        }
        )).join("&");
        return window.digitalData && window.digitalData.framework && window.digitalData.framework.imageOptimisationApi ? "".concat(window.digitalData.framework.imageOptimisationApi, "?").concat(l) : t
    }
    window.SocialShareKit = Sa,
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            t.SocialShareKit ? this.window.SocialShareKit.init() : console.warn("SocialShareKit unavailable"),
            this.setupEventListeners()
        }
        return Zt(e, [{
            key: "setupEventListeners",
            value: function() {
                var e = this;
                Bo(this.document, "click", "a.ssk", (function(t) {
                    var r = t.desiredTarget
                      , n = r.dataset;
                    e.window.dataLayer && window.dataLayer.push({
                        event: "xrx_social_share-".concat(n.network)
                    }),
                    na("share-".concat(n.network), r)
                }
                ))
            }
        }]),
        e
    }())(window,document);
    var Ea = "[data-xrx-fw-lazy-background-image]"
      , Ta = function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.loadingNode = this.document.createElement("div"),
            this.loadingNode.classList.add("xrx-fw-loading"),
            !xo(this.window) && this.window.IntersectionObserver && (this.observer = new t.IntersectionObserver((function(e) {
                n.handleIntersection(e)
            }
            ),{}),
            this.trackedContainers = [],
            this.containerObserver = new t.IntersectionObserver((function(e) {
                n.handleIntersection(e, !0)
            }
            ),{})),
            !xo(this.window) && this.window.MutationObserver && (this.mutationObserver = new MutationObserver((function(e) {
                n.handleMutation(e)
            }
            )),
            this.mutationObserver.observe(this.document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["data-xrx-fw-lazy-background-image"]
            })),
            Array.from(this.document.querySelectorAll(Ea)).forEach((function(e) {
                n.initImage(e)
            }
            ))
        }
        return Zt(e, [{
            key: "handleMutation",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    if (e.addedNodes) {
                        var r = [];
                        e.addedNodes && e.addedNodes.length > 0 && (r = r.concat(Array.from(e.addedNodes))),
                        e.target && e.attributeName && "data-xrx-fw-lazy-background-image" === e.attributeName && r.push(e.target),
                        Array.isArray(r) && r.filter((function(e) {
                            return e.nodeType === Node.ELEMENT_NODE
                        }
                        )).forEach((function(e) {
                            var r = ko(e);
                            r && (r.call(e, Ea) ? t.initImage(e) : Array.from(e.querySelectorAll(Ea)).forEach((function(e) {
                                t.initImage(e)
                            }
                            )))
                        }
                        ))
                    }
                }
                ))
            }
        }, {
            key: "initImage",
            value: function(e) {
                if (this.reset(e),
                xo(this.window))
                    this.loadImage(e);
                else {
                    var t = So(e, "[data-xrx-fw-lazy-background-container], .xrx-fw-carousel__wrapper");
                    this.containerObserver && t ? this.trackedContainers.indexOf(t) < 0 && (this.trackedContainers.push(t),
                    this.containerObserver.observe(t)) : this.observer ? this.observer.observe(e) : this.preloadImage(e)
                }
            }
        }, {
            key: "reset",
            value: function(e) {
                e && (e.style.backgroundImage = null,
                e.parentNode.classList.remove("xrx-fw-lazy-background--animate"),
                e.parentNode.classList.remove("xrx-fw-lazy-background--loaded"),
                e.parentNode.querySelector(".xrx-fw-loading") || e.parentNode.insertBefore(this.loadingNode.cloneNode(), e))
            }
        }, {
            key: "getImageUrl",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , r = e.dataset.xrxFwLazyBackgroundImage;
                return t && (r = Aa({
                    imageUrl: r
                })),
                r
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , r = this.getImageUrl(e, t);
                if (r) {
                    e.parentNode.classList.add("xrx-fw-lazy-background--loaded"),
                    e.style.backgroundImage = "url('".concat(r, "')");
                    var n = e.parentNode.querySelector(".xrx-fw-loading");
                    n && n.parentNode.removeChild(n)
                }
            }
        }, {
            key: "preloadImage",
            value: function(e) {
                var t = this
                  , r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = this.getImageUrl(e, r);
                if (n) {
                    var i = new Image
                      , o = !1;
                    i.onload = function() {
                        if (!o) {
                            if (e.startTime)
                                window.performance.now() - e.startTime > 25 && e.parentNode.classList.add("xrx-fw-lazy-background--animate");
                            t.loadImage(e, r)
                        }
                    }
                    ,
                    i.onerror = function() {
                        o = !0,
                        console.warn("Image preload failed: ".concat(n)),
                        i.src !== e.dataset.xrxFwLazyBackgroundImage && t.preloadImage(e, !1)
                    }
                    ,
                    i.onabort = function() {
                        o = !0,
                        console.warn("Image preload aborted: ".concat(n))
                    }
                    ,
                    e.startTime = window.performance.now(),
                    i.src = n,
                    i.complete && !o && this.loadImage(e, r)
                }
            }
        }, {
            key: "handleIntersection",
            value: function(e, t) {
                var r = this;
                e.forEach((function(e) {
                    if (e.intersectionRatio > 0)
                        if (t) {
                            r.containerObserver.unobserve(e.target);
                            for (var n = 0, i = Array.from(e.target.querySelectorAll(Ea)); n < i.length; n++) {
                                var o = i[n];
                                r.preloadImage(o)
                            }
                        } else
                            r.observer.unobserve(e.target),
                            r.preloadImage(e.target)
                }
                ))
            }
        }]),
        e
    }();
    function Ca() {
        return "objectFit"in document.documentElement.style != !1
    }
    var La = function() {
        function e(t, r) {
            var n = this;
            (Qt(this, e),
            this.window = t,
            this.document = r,
            Ca()) || (t.MutationObserver && (this.mutationObserver = new MutationObserver((function(e) {
                n.handleMutation(e)
            }
            )),
            this.mutationObserver.observe(this.document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0
            })),
            Array.from(this.document.querySelectorAll(".xrx-fw-modern-lazy-background")).forEach((function(e) {
                n.initImage(e)
            }
            )))
        }
        return Zt(e, [{
            key: "handleMutation",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    e.addedNodes && Array.from(e.addedNodes).filter((function(e) {
                        return e.nodeType === Node.ELEMENT_NODE
                    }
                    )).forEach((function(e) {
                        var r = ko(e);
                        r && (r.call(e, ".xrx-fw-modern-lazy-background") ? t.initImage(e) : Array.from(e.querySelectorAll(".xrx-fw-modern-lazy-background")).forEach((function(e) {
                            t.initImage(e)
                        }
                        )))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "initImage",
            value: function(e) {
                this.loadImage(e)
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = e.querySelector("img[src]")
                  , r = e.querySelector("picture");
                if (t) {
                    var n = this.document.createElement("div");
                    n.classList.add("xrx-fw-modern-lazy-background__image"),
                    n.style.backgroundImage = "url(".concat(t.getAttribute("src"), ")"),
                    e.replaceChild(n, r)
                }
                e.classList.add("xrx-fw-modern-lazy-background--loaded")
            }
        }]),
        e
    }()
      , Ia = "[data-xrx-fw-responsive-background-image]"
      , Ra = function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r;
            var i, o, a;
            !xo(this.window) && this.window.IntersectionObserver && (this.observer = new t.IntersectionObserver((function(e) {
                n.handleIntersection(e)
            }
            ),{})),
            !xo(this.window) && this.window.MutationObserver && (this.mutationObserver = new MutationObserver((function(e) {
                n.handleMutation(e)
            }
            )),
            this.mutationObserver.observe(r.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["data-xrx-fw-responsive-background-image"]
            })),
            this.window.addEventListener("resize", (i = function(e) {
                n.handleWindowResize(s)
            }
            ,
            o = 500,
            function() {
                var e = this
                  , t = arguments
                  , r = function() {
                    return i.apply(e, t)
                };
                clearTimeout(a),
                a = setTimeout(r, o)
            }
            ));
            var s = Array.from(this.document.querySelectorAll(Ia));
            s.forEach((function(e) {
                n.initImage(e)
            }
            ))
        }
        return Zt(e, [{
            key: "handleMutation",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    if (e.addedNodes) {
                        var r = [];
                        e.addedNodes && e.addedNodes.length > 0 && (r = r.concat(Array.from(e.addedNodes))),
                        e.target && e.attributeName && "data-xrx-fw-responsive-background-image" === e.attributeName && r.push(e.target),
                        Array.isArray(r) && r.filter((function(e) {
                            return e.nodeType === Node.ELEMENT_NODE
                        }
                        )).forEach((function(e) {
                            var r = ko(e);
                            r && (r.call(e, Ia) ? t.initImage(e) : Array.from(e.querySelectorAll(Ia)).forEach((function(e) {
                                t.initImage(e)
                            }
                            )))
                        }
                        ))
                    }
                }
                ))
            }
        }, {
            key: "handleWindowResize",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    t.preloadImage(e)
                }
                ))
            }
        }, {
            key: "initImage",
            value: function(e) {
                this.reset(e),
                xo(this.window) ? this.loadImage(e) : this.observer ? this.observer.observe(e) : this.preloadImage(e)
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = e.dataset.xrxFwResponsiveBackgroundImage;
                t && (e.parentNode.classList.add("xrx-fw-responsive-background--loaded"),
                e.style.backgroundImage = "url('".concat(t, "')"))
            }
        }, {
            key: "reset",
            value: function(e) {
                e && (e.style.backgroundImage = null,
                e.parentNode.classList.remove("xrx-fw-responsive-background--animate"),
                e.parentNode.classList.remove("xrx-fw-responsive-background--loaded"))
            }
        }, {
            key: "preloadImage",
            value: function(e) {
                var t, r = e.dataset.xrxFwResponsiveBackgroundImage, n = e.dataset.xrxFwResponsiveBackgroundSrcset, i = e.dataset.xrxFwResponsiveBackgroundSizes, o = new Image, a = e.style.backgroundImage.slice(4, -1).replace(/"/g, "");
                o.onload = function() {
                    (t = o.currentSrc || o.src,
                    e.startTime) && (window.performance.now() - e.startTime > 25 && e.parentNode.classList.add("xrx-fw-responsive-background--animate"));
                    t && t !== a && (e.parentNode.classList.add("xrx-fw-responsive-background--loaded"),
                    e.style.backgroundImage = "url('".concat(t, "')"),
                    o.onload = null),
                    o.complete && (t = o.currentSrc || o.src) && t !== a && (e.parentNode.classList.add("xrx-fw-responsive-background--loaded"),
                    e.style.backgroundImage = "url('".concat(t, "')"))
                }
                ,
                o.onerror = function() {
                    console.warn("Image preload failed: ".concat(t))
                }
                ,
                o.onabort = function() {
                    console.warn("Image preload aborted: ".concat(t))
                }
                ,
                e.startTime = window.performance.now(),
                o.setAttribute("srcset", n),
                o.setAttribute("sizes", i),
                o.src = r
            }
        }, {
            key: "handleIntersection",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    e.intersectionRatio > 0 && (t.observer.unobserve(e.target),
                    t.preloadImage(e.target))
                }
                ))
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.window = t,
        this.document = r,
        Bo(r, "lazyloaded", ".xrx-fw-lazy-image__image", (function(e) {
            var t = e.desiredTarget;
            if (t) {
                var r = So(t, ".xrx-fw-lazy-image");
                r && r.classList.add("xrx-fw-lazy-image--loaded")
            }
        }
        )),
        Bo(r, "lazybeforesizes", ".xrx-fw-lazy-image .xrx-fw-lazyload", (function(e) {
            var t = (e.desiredTarget || e.target).parentNode
              , r = !0
              , n = !1
              , i = void 0;
            try {
                for (var o, a = t.getElementsByTagName("source")[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                    var s = o.value
                      , l = s.dataset.srcset;
                    if (l) {
                        var c = void 0;
                        c = l.indexOf(",") >= 0 ? l.split(",").map((function(e) {
                            return e.split(" ")[0]
                        }
                        )).slice(0, -1) : [l];
                        var u = l
                          , d = !0
                          , f = !1
                          , h = void 0;
                        try {
                            for (var v, p = c[Symbol.iterator](); !(d = (v = p.next()).done); d = !0) {
                                var m = v.value;
                                u = u.replace(m, Aa({
                                    imageUrl: m
                                }))
                            }
                        } catch (e) {
                            f = !0,
                            h = e
                        } finally {
                            try {
                                d || null == p.return || p.return()
                            } finally {
                                if (f)
                                    throw h
                            }
                        }
                        s.dataset.srcset = u
                    }
                }
            } catch (e) {
                n = !0,
                i = e
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (n)
                        throw i
                }
            }
        }
        ))
    }
    (window,document);
    var Oa = new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.handleMutation = this.handleMutation.bind(this),
            this.handleNode = this.handleNode.bind(this),
            this.observe = this.observe.bind(this),
            this.window.MutationObserver && (this.mutationObserver = new MutationObserver(this.handleMutation),
            this.mutationObserver.observe(this.document, {
                childList: !0,
                subtree: !0,
                attributes: !0
            })),
            this.selectors = []
        }
        return Zt(e, [{
            key: "handleMutation",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    e.target && t.handleNode(e.target, t.selectors),
                    e.addedNodes && Array.from(e.addedNodes).forEach((function(e) {
                        return t.handleNode(e, t.selectors)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "handleNode",
            value: function(e) {
                e && this.selectors.forEach((function(t) {
                    var r = t.selector
                      , n = t.cb;
                    ko(e)(r) && n(e)
                }
                ))
            }
        }, {
            key: "observe",
            value: function(e, t) {
                var r = this
                  , n = {
                    selector: e,
                    cb: t
                };
                this.selectors.push(n),
                Array.from(this.document.querySelectorAll(e)).forEach((function(e) {
                    return r.handleNode(e, [n])
                }
                ))
            }
        }]),
        e
    }())(window,document)
      , Da = "".concat("xrx-fw-lazy-video", "--loaded")
      , Fa = "xrx-fw-lazy-video--init-complete";
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            !xo(this.window) && this.window.IntersectionObserver && (this.intersectionObserver = new t.IntersectionObserver((function(e) {
                n.handleIntersection(e)
            }
            ),{})),
            this.initVideo = this.initVideo.bind(this),
            Oa.observe(".".concat("xrx-fw-lazy-video", " video"), this.initVideo)
        }
        return Zt(e, [{
            key: "initVideo",
            value: function(e) {
                var t = this
                  , r = this.getContext(e)
                  , n = r.container
                  , i = r.video;
                n && !n.classList.contains(Fa) && (n.classList.add(Fa),
                i && (Bo(i, "play", void 0, (function(e) {
                    t.makeVisible(i)
                }
                )),
                Bo(i, "loadeddata", void 0, (function(e) {
                    t.makeVisible(i)
                }
                )),
                this.intersectionObserver ? this.intersectionObserver.observe(i) : this.beginVideoLoad(i)))
            }
        }, {
            key: "getContext",
            value: function(e) {
                var t = So(e, ".".concat("xrx-fw-lazy-video"))
                  , r = t.querySelector("video");
                return {
                    container: t,
                    video: r
                }
            }
        }, {
            key: "beginVideoLoad",
            value: function(e) {
                var t = this.getContext(e).video;
                "none" === t.preload && (t.dataset && void 0 !== t.dataset.xrxFwLazyVideoAutoplay && (t.autoplay = !0),
                t.preload = "metadata",
                4 === t.readyState ? this.makeVisible(e) : 0 === t.readyState && 0 === t.networkState && t.play())
            }
        }, {
            key: "makeVisible",
            value: function(e) {
                this.getContext(e).container.classList.add(Da)
            }
        }, {
            key: "handleIntersection",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    if (e.intersectionRatio > 0) {
                        var r = t.getContext(e.target).video;
                        r && (t.intersectionObserver.unobserve(e.target),
                        t.beginVideoLoad(r))
                    }
                }
                ))
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.allLiveChats = Array.from(r.querySelectorAll(".xrx-fw-dsx-chat-artifact")),
            this.allLiveChats.length > 0 && this.observeVisibility()
        }
        return Zt(e, [{
            key: "observeVisibility",
            value: function() {
                var e = new MutationObserver((function(e) {
                    var t = !0
                      , r = !1
                      , n = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var a = i.value;
                            if ("style" === a.attributeName) {
                                var s = a.target
                                  , l = s.parentElement;
                                l.classList.contains("xrx-fw-component-wrapper__item") && ("none" === s.style.display ? l.style.display = "none" : l.style.display = "block")
                            }
                        }
                    } catch (e) {
                        r = !0,
                        n = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw n
                        }
                    }
                }
                ))
                  , t = {
                    attributes: !0,
                    attributeFilter: ["style"]
                }
                  , r = !0
                  , n = !1
                  , i = void 0;
                try {
                    for (var o, a = this.allLiveChats[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                        var s = o.value;
                        e.observe(s, t)
                    }
                } catch (e) {
                    n = !0,
                    i = e
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw i
                    }
                }
            }
        }]),
        e
    }())(window,document);
    var Na = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.int = 0,
            this.num = 0,
            this.posNum = 0,
            this.animationid,
            this.window = r,
            this.document = n,
            this.element = t,
            this.animatedicon = this.element.getElementsByClassName("xrx-fw-animated-cta__icon")[0],
            Bo(this.element, "mouseenter", "", (function(e) {
                return i.overFunction(e)
            }
            )),
            Bo(this.element, "mouseleave", "", (function(e) {
                return i.outFunction(e)
            }
            ))
        }
        return Zt(e, [{
            key: "stepAnimation",
            value: function() {
                var e = this;
                this.num++,
                this.posNum = -80 * this.num;
                var t = this.posNum + "px";
                this.animatedicon.style.backgroundPosition = t + " 0px",
                this.posNum <= -1520 && (this.num = 19,
                this.posNum = -1520,
                this.animatedicon.style.backgroundPosition = "-1520px 0px",
                this.window.cancelAnimationFrame(this.animationid)),
                this.animationid = this.window.requestAnimationFrame((function() {
                    return e.stepAnimation()
                }
                ))
            }
        }, {
            key: "overFunction",
            value: function(e) {
                var t = this;
                this.animationid = this.window.requestAnimationFrame((function() {
                    return t.stepAnimation()
                }
                ))
            }
        }, {
            key: "outFunction",
            value: function(e) {
                this.num = 0,
                this.posNum = 0,
                this.animatedicon.style.backgroundPosition = "0px 0px",
                this.window.cancelAnimationFrame(this.animationid)
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.window = t,
        this.document = r,
        this.elements = Array.from(r.querySelectorAll(".xrx-fw-animated-cta"));
        for (var n = 0, i = this.elements.length; n < i; n++) {
            var o = this.elements[n];
            new Na(o,t,r)
        }
    }
    (window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            Bo(this.document, "change", ".xrx-fw-slider input", (function(e) {
                n.setValue(e.desiredTarget)
            }
            )),
            Bo(this.document, "input", ".xrx-fw-slider input", (function(e) {
                n.setValue(e.desiredTarget)
            }
            ))
        }
        return Zt(e, [{
            key: "setValue",
            value: function(e) {
                var t = e.getAttribute("list");
                if (t) {
                    var r = document.getElementById(t)
                      , n = So(e, ".xrx-fw-slider").querySelector(".xrx-fw-slider__updating");
                    r && n && (n.innerText = r.options[e.value].value)
                }
            }
        }]),
        e
    }())(window,document);
    var qa = f.parseFloat
      , Ha = 1 / qa(Gi + "-0") != -1 / 0 ? function(e) {
        var t = $i(String(e), 3)
          , r = qa(t);
        return 0 === r && "-" == t.charAt(0) ? -0 : r
    }
    : qa;
    We({
        global: !0,
        forced: parseFloat != Ha
    }, {
        parseFloat: Ha
    });
    var Ma = f.parseInt
      , Pa = /^[+-]?0[Xx]/
      , za = 8 !== Ma(Gi + "08") || 22 !== Ma(Gi + "0x16") ? function(e, t) {
        var r = $i(String(e), 3);
        return Ma(r, t >>> 0 || (Pa.test(r) ? 16 : 10))
    }
    : Ma;
    We({
        global: !0,
        forced: parseInt != za
    }, {
        parseInt: za
    }),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.separator = ",",
            this.animations = [],
            this.containerSelector = ".xrx-fw-text-counter",
            this.runningClass = "xrx-fw-text-counter--running",
            this.elements = Array.from(this.document.querySelectorAll(this.containerSelector)),
            this.elements && Bo(r, po.READY, null, (function(e) {
                n.elements.forEach((function(e) {
                    var r = parseInt(e.dataset.value, 10)
                      , i = "true" === e.dataset.automatic || !0 === e.dataset.automatic;
                    !xo(n.window) && i && n.window.IntersectionObserver ? new t.IntersectionObserver((function(t, i) {
                        n.handleIntersection(t, i, e, r)
                    }
                    ),{
                        threshold: .8
                    }).observe(e) : i && n.count(e, r)
                }
                )),
                Bo(r, po.FADER_CHANGE, null, (function(e) {
                    var t = e.detail.element.querySelector(n.containerSelector);
                    if (t) {
                        var r = parseInt(t.dataset.value, 10);
                        Array.from(e.target.querySelectorAll(n.containerSelector)).forEach((function(e) {
                            return n.reset(e)
                        }
                        )),
                        n.count(t, r)
                    }
                }
                ))
            }
            ))
        }
        return Zt(e, [{
            key: "handleIntersection",
            value: function(e, t, r, n) {
                var i = this;
                e.forEach((function(e) {
                    e.intersectionRatio > 0 && (t.unobserve(e.target),
                    i.count(r, n))
                }
                ))
            }
        }, {
            key: "removeAnimation",
            value: function(e) {
                var t = this.animations[e];
                t && cancelAnimationFrame(t)
            }
        }, {
            key: "reset",
            value: function(e) {
                var t = e.querySelector(".xrx-fw-text-counter-target")
                  , r = this.elements.indexOf(e);
                t.innerHTML = 0,
                e.classList.remove(this.runningClass),
                this.removeAnimation(r)
            }
        }, {
            key: "count",
            value: function(e, t) {
                var r = this;
                if (!e.classList.contains(this.runningClass)) {
                    e.classList.add(this.runningClass);
                    var n = null
                      , i = 1e3 * parseFloat(e.dataset.seconds)
                      , o = e.dataset.hasOwnProperty("useEasing")
                      , a = e.querySelector(".xrx-fw-text-counter-target")
                      , s = this.elements.indexOf(e);
                    Ko(e, po.TEXT_COUNTER_START, {
                        element: e,
                        targetElement: a,
                        value: t
                    });
                    !function l(c) {
                        n || (n = c || 0);
                        var u = c - n
                          , d = 0;
                        if (d = o ? r.easeOutExpo(u, 0, t, i) : t * (u / i),
                        d = (d = Math.floor(d)) >= t || u >= i ? t : d,
                        a.innerHTML = r.formatNumber(d),
                        u >= i)
                            return e.classList.remove(r.runningClass),
                            r.removeAnimation(s),
                            void Ko(e, po.TEXT_COUNTER_COMPLETE, {
                                targetElement: a,
                                value: t
                            });
                        r.animations[s] = requestAnimationFrame(l)
                    }()
                }
            }
        }, {
            key: "formatNumber",
            value: function(e) {
                for (var t = e.toString(), r = "", n = 0, i = t.length; n < i; ++n)
                    0 !== n && n % 3 == 0 && (r = this.separator + r),
                    r = t[i - n - 1] + r;
                return r
            }
        }, {
            key: "easeOutExpo",
            value: function(e, t, r, n) {
                return r * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + t
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.containerSelector = ".xrx-fw-timer-bar",
            this.slideSelector = ".xrx-fw-timer-bar__slide",
            this.activeClass = "xrx-fw-timer-bar--running",
            this.pauseClass = "xrx-fw-timer-bar--pause",
            this.elements = Array.from(this.document.querySelectorAll(this.containerSelector)),
            this.elements && Bo(r, po.READY, null, (function(e) {
                n.elements.forEach((function(e) {
                    var r = "true" === e.dataset.automatic || !0 === e.dataset.automatic
                      , i = n.getSlides(e);
                    i.length && (Bo(i[0], "animationend", null, (function(t) {
                        return n.end(t, e)
                    }
                    )),
                    !xo(n.window) && r && n.window.IntersectionObserver ? new t.IntersectionObserver((function(t, r) {
                        n.handleIntersection(t, r, e)
                    }
                    ),{
                        threshold: .8
                    }).observe(e) : r && n.start(e))
                }
                )),
                Bo(r, po.FADER_CHANGE, null, (function(e) {
                    n.handleChangeEvent(e)
                }
                )),
                Bo(r, po.INTERACTIVEVIDEO_CHANGE, null, (function(e) {
                    n.handleChangeEvent(e)
                }
                )),
                Bo(r, po.TIMER_BAR_TRIGGER, n.containerSelector, (function(e) {
                    var t = e.desiredTarget;
                    t && n.start(t)
                }
                )),
                Bo(r, po.TIMER_BAR_PAUSE, n.containerSelector, (function(e) {
                    var t = e.desiredTarget;
                    t && t.classList.add(n.pauseClass)
                }
                ))
            }
            ))
        }
        return Zt(e, [{
            key: "getSlides",
            value: function(e) {
                return Array.from(e.querySelectorAll(this.slideSelector))
            }
        }, {
            key: "handleIntersection",
            value: function(e, t, r) {
                var n = this;
                e.forEach((function(e) {
                    e.intersectionRatio > 0 && (t.unobserve(e.target),
                    n.start(r))
                }
                ))
            }
        }, {
            key: "handleChangeEvent",
            value: function(e) {
                var t = this;
                if (Array.from(e.target.querySelectorAll(this.containerSelector)).forEach((function(e) {
                    e.classList.remove(t.activeClass),
                    t.getSlides(e).forEach((function(e) {
                        return t.reset(e)
                    }
                    ))
                }
                )),
                e.detail.element) {
                    var r = e.detail.element.querySelector(this.containerSelector);
                    r && this.start(r)
                }
            }
        }, {
            key: "reset",
            value: function(e) {
                e.style.animationDuration = "0s"
            }
        }, {
            key: "start",
            value: function(e) {
                var t = this
                  , r = parseFloat(e.dataset.seconds)
                  , n = this.getSlides(e);
                n.length && (e.classList.remove(this.pauseClass),
                e.classList.contains(this.activeClass) || (Ko(e, po.TIMER_BAR_START, {
                    container: e,
                    seconds: r
                }),
                n.forEach((function(e) {
                    t.reset(e),
                    e.style.animationDuration = "".concat(r, "s")
                }
                )),
                e.classList.add(this.activeClass)))
            }
        }, {
            key: "end",
            value: function(e, t) {
                "animationend" === e.type && Ko(t, po.TIMER_BAR_COMPLETE, {
                    container: t
                })
            }
        }]),
        e
    }())(window,document);
    var ja = function e(t) {
        Qt(this, e);
        var r = No()
          , n = window.digitalData && window.digitalData.locale && window.digitalData.locale.language ? window.digitalData.locale.language : window.digitalData && window.digitalData.locale && window.digitalData.locale["url-prefix"] ? window.digitalData.locale["url-prefix"].split("-")[0] : "en"
          , i = new Intl.RelativeTimeFormat([r, n],{
            numeric: "auto"
        })
          , o = new Date(t.dateTime)
          , a = Math.round((o.getTime() - Date.now()) / 1e3 / 60 / 60 / 24);
        t.textContent = i.format(a, "days")
    };
    new function e(t, r) {
        Qt(this, e),
        Intl && Intl.RelativeTimeFormat && Array.from(r.querySelectorAll(".xrx-fw-time-since")).map((function(e) {
            return new ja(e)
        }
        ))
    }
    (window,document);
    var Ua = {};
    /*! js-cookie v3.0.1 | MIT */
    function Ba(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                e[n] = r[n]
        }
        return e
    }
    var Va, Wa = function e(t, r) {
        function n(e, n, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = Ba({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                i.expires && (i.expires = i.expires.toUTCString()),
                e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var o = "";
                for (var a in i)
                    i[a] && (o += "; " + a,
                    !0 !== i[a] && (o += "=" + i[a].split(";")[0]));
                return document.cookie = e + "=" + t.write(n, e) + o
            }
        }
        return Object.create({
            set: n,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < r.length; i++) {
                        var o = r[i].split("=")
                          , a = o.slice(1).join("=");
                        try {
                            var s = decodeURIComponent(o[0]);
                            if (n[s] = t.read(a, s),
                            e === s)
                                break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                n(e, "", Ba({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(t) {
                return e(this.converter, Ba({}, this.attributes, t))
            },
            withConverter: function(t) {
                return e(Ba({}, this.converter, t), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(r)
            },
            converter: {
                value: Object.freeze(t)
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
    }), Ga = "improvements", Ya = "personal", Xa = "advertising", Ka = (er(Va = {}, "required", 0),
    er(Va, Ga, 1),
    er(Va, Ya, 2),
    er(Va, Xa, 3),
    Va), $a = ["dev", "stage", "test"];
    function Qa(e) {
        try {
            if (window && window.xrx_vars && window.xrx_vars.tier && $a.includes(window.xrx_vars.tier))
                return !0;
            if (window && window.digitalData && window.digitalData.locale && window.digitalData.locale.tier && $a.includes(window.digitalData.locale.tier))
                return !0;
            var t = Ka[e];
            if (void 0 !== t) {
                var r = Wa.get("cmapi_cookie_privacy");
                if (r && r.includes("permit") && r.includes((t + 1).toString()))
                    return !0;
                var n = Wa.get("notice_gdpr_prefs");
                if (n && n.includes(t.toString()))
                    return !0
            }
            var i = window.localStorage.getItem("truste.eu.cookie.notice_gdpr_prefs");
            if (i) {
                var o = JSON.parse(i);
                if (o && o.value.includes(t.toString()))
                    return !0
            }
        } catch (e) {
            console.error("Error getting cookie preferences")
        }
        return !1
    }
    function Ja() {
        Wa.remove("TEKPROFILE"),
        Wa.remove("TEKSESSION"),
        Qa(Ya) && Qa(Xa) || (Wa.remove("YSC"),
        Wa.remove("DEVICE_INFO"),
        Wa.remove("VISITOR_INFO1_LIVE")),
        Qa(Ya) || Wa.remove("_mkto_trk")
    }
    var Za = "https:".concat("//www.youtube.com/iframe_api")
      , es = new (function() {
        function e(t, r) {
            var n, i;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.youtubeReady = !1,
            this.onYouTubeIframeAPIReadyHandler = this.onYouTubeIframeAPIReadyHandler.bind(this),
            this.onYoutubeReady = this.onYoutubeReady.bind(this),
            n = "youtube",
            i = {
                onYoutubeReady: this.onYoutubeReady
            },
            void 0 !== Ua[n] ? console.warn("Unable to expose ".concat(n, ", it already exists")) : Ua[n] = i
        }
        return Zt(e, [{
            key: "init",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                xo(this.window) || t ? this.injectYoutubeScript() : this.hasWindowLoadHandler || (this.hasWindowLoadHandler = !0,
                "complete" === this.document.readyState ? this.injectYoutubeScript() : this.window.addEventListener("load", (function(t) {
                    setTimeout((function() {
                        e.injectYoutubeScript()
                    }
                    ), 50)
                }
                ))),
                this.hasInit || (this.hasInit = !0,
                this.oldOnYouTubeIframeAPIReady = this.window.onYouTubeIframeAPIReady,
                this.window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReadyHandler)
            }
        }, {
            key: "injectYoutubeScript",
            value: function() {
                if (this.document.body && !this.document.querySelector("script[src*='".concat("//www.youtube.com/iframe_api", "']"))) {
                    var e = this.document.createElement("script");
                    e.type = "text/javascript",
                    e.src = Za,
                    e.onload = function() {
                        Ja()
                    }
                    ,
                    this.document.body.appendChild(e)
                }
            }
        }, {
            key: "onYouTubeIframeAPIReadyHandler",
            value: function() {
                this.youtubeReady = !0,
                Ko(this.document, po.YOUTUBE_READY),
                "function" == typeof this.oldOnYouTubeIframeAPIReady && this.oldOnYouTubeIframeAPIReady()
            }
        }, {
            key: "isYoutubeReady",
            value: function() {
                return !!this.youtubeReady || !(void 0 === this.window.YT || "function" != typeof this.window.YT.Player || !this.window.YT.loaded) && (this.youtubeReady = !0,
                !0)
            }
        }, {
            key: "onYoutubeReady",
            value: function(e) {
                this.isYoutubeReady() ? e() : (this.document.addEventListener(po.YOUTUBE_READY, (function() {
                    return e()
                }
                )),
                this.init())
            }
        }]),
        e
    }())(window,document);
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.player = this.player.bind(this),
            this.mutationHandler = this.mutationHandler.bind(this),
            this.onLazybeforeunveil = this.onLazybeforeunveil.bind(this),
            this.onPlayerStateChange = this.onPlayerStateChange.bind(this),
            this.init()
        }
        return Zt(e, [{
            key: "init",
            value: function() {
                document.addEventListener("lazybeforeunveil", this.onLazybeforeunveil);
                this.observer = new MutationObserver(this.mutationHandler),
                this.observer.observe(this.document, {
                    attributeFilter: ["data-xrx-fw-video-url"],
                    attributes: !0,
                    subtree: !0
                })
            }
        }, {
            key: "onLazybeforeunveil",
            value: function(e) {
                var t = e.target;
                if (t) {
                    var r = t.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                    r && this.player(r)
                }
            }
        }, {
            key: "player",
            value: function(e) {
                var t = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e && es.onYoutubeReady((function() {
                    var n = e.dataset
                      , i = e.querySelector(".xrx-fw-youtube-video__iframe,iframe");
                    if (r) {
                        var o = t.document.createElement("div");
                        o.classList.add("xrx-fw-youtube-video__iframe"),
                        o.id = i.id,
                        i.parentNode.classList.remove("xrx-fw-youtube-video__vid--ready"),
                        i.parentNode.replaceChild(o, i),
                        e.xrxFwYoutube = null
                    }
                    if (n.xrxFwVideoUrl) {
                        i.id || (i.id = Co());
                        var a = t.getVideoIdFromUrl(n.xrxFwVideoUrl)
                          , s = !!n.xrxFwVideoAutoplay;
                        e.removeAttribute("data-xrx-fw-video-autoplay");
                        var l = n.xrxFwVideoPlaysInline ? 1 : 0;
                        e.removeAttribute("data-xrx-fw-video-plays-inline");
                        var c = !!n.xrxFwVideoMute;
                        e.removeAttribute("data-xrx-fw-video-mute");
                        var u = n.xrxFwVideoCaptions ? 1 : 0;
                        e.removeAttribute("data-xrx-fw-video-captions");
                        var d = n.xrxFwVideoInterfaceLocale || void 0
                          , f = n.xrxFwVideoCaptionsLocale || void 0;
                        if (e.xrxFwYoutube)
                            "function" == typeof e.xrxFwYoutube.loadVideoById && (e.startTracked = !1,
                            s ? e.xrxFwYoutube.loadVideoById(a) : e.xrxFwYoutube.cueVideoById(a)),
                            c && "function" == typeof e.xrxFwYoutube.mute && e.xrxFwYoutube.mute();
                        else {
                            var h = {
                                videoId: a,
                                playerVars: {
                                    enablejsapi: 1,
                                    rel: 0,
                                    autoplay: 0,
                                    modestbranding: 1,
                                    playsinline: l,
                                    cc_load_policy: u,
                                    hl: d,
                                    cc_lang_pref: f
                                },
                                events: {
                                    onReady: t.onPlayerReady(s, c).bind(t),
                                    onStateChange: t.onPlayerStateChange
                                }
                            };
                            Qa(Xa) && Qa(Ya) || (h.host = "https://www.youtube-nocookie.com");
                            var v = new YT.Player(i.id,h);
                            e.xrxFwYoutube = v
                        }
                    }
                }
                ))
            }
        }, {
            key: "onPlayerStateChange",
            value: function(e) {
                var t = e.target.getIframe();
                t.removeAttribute("height"),
                t.removeAttribute("width"),
                t.removeAttribute("frameborder");
                var r = So(t, ".xrx-fw-youtube-video__vid");
                if (e.data >= 0 && r.classList.add("xrx-fw-youtube-video__vid--ready"),
                e.data === YT.PlayerState.PLAYING) {
                    this.stopAll(r);
                    var n = aa(r);
                    n && !r.startTracked && (na("vid-".concat(n, "-start")),
                    r.startTracked = !0)
                }
            }
        }, {
            key: "onPlayerReady",
            value: function(e, t) {
                return function(r) {
                    var n = So(r.target.getIframe(), ".xrx-fw-youtube-video__vid");
                    if (n && r.target) {
                        n.dataset;
                        e && "function" == typeof r.target.playVideo ? r.target.playVideo() : "function" == typeof r.target.stopVideo && r.target.stopVideo(),
                        t && "function" == typeof r.target.mute && r.target.mute()
                    }
                }
            }
        }, {
            key: "mutationHandler",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    e.target && "attributes" === e.type && "data-xrx-fw-video-url" === e.attributeName && t.player(e.target, !0)
                }
                ))
            }
        }, {
            key: "getVideoIdFromUrl",
            value: function(e) {
                if (e) {
                    var t = e.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                    return void 0 !== t[2] ? t[2].split(/[^0-9a-z_\-]/i)[0] : t[0]
                }
                return null
            }
        }, {
            key: "stopAll",
            value: function(e) {
                Array.from(this.document.querySelectorAll(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]")).forEach((function(t) {
                    t !== e && t.xrxFwYoutube && "function" == typeof t.xrxFwYoutube.stopVideo && t.xrxFwYoutube.stopVideo()
                }
                ))
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            Bo(this.document, "mouseover", ".xrx-fw-disclaimer-mark", (function(e) {
                n.setToolTipPostion(e.desiredTarget)
            }
            )),
            Bo(this.document, "mouseout", ".xrx-fw-disclaimer-mark", (function(e) {
                n.hideToolTip(e.desiredTarget)
            }
            )),
            Bo(this.document, "touchstart", ".xrx-fw-disclaimer-mark", (function(e) {
                n.setToolTipPostion(e.desiredTarget)
            }
            )),
            Bo(this.document, "touchend", ".xrx-fw-disclaimer-mark", (function(e) {
                n.hideToolTip(e.desiredTarget)
            }
            ))
        }
        return Zt(e, [{
            key: "hideToolTip",
            value: function(e) {
                e.children[0].style.display = "none"
            }
        }, {
            key: "findClippingParent",
            value: function(e) {
                for (var t, r; e && e !== this.document; ) {
                    var n = this.window.getComputedStyle(e);
                    if (t || "visible" === n.overflowX || (t = e),
                    r || "visible" === n.overflowY || (r = e),
                    t && r)
                        break;
                    e = e.parentNode
                }
                return {
                    x: t || this.document.documentElement,
                    y: r || this.document.documentElement
                }
            }
        }, {
            key: "setToolTipPostion",
            value: function(e) {
                if (e) {
                    var t = this.findClippingParent(e)
                      , r = e.getBoundingClientRect()
                      , n = r.top - Math.max(t.y.getBoundingClientRect().top, 0)
                      , i = r.left - t.x.getBoundingClientRect().left
                      , o = t.x.getBoundingClientRect().width - i - 10
                      , a = e.children[0];
                    a.style.display = "block";
                    var s, l = a.offsetHeight, c = (a.offsetWidth + 10) / 2, u = this.getLeftRightPostion(i, c, o);
                    n >= l ? s = "xrx-fw-disclaimer-mark__tooltip-top" : n <= l && (s = "xrx-fw-disclaimer-mark__tooltip-bottom"),
                    a.className = "",
                    a.classList.add("xrx-fw-disclaimer-mark__tooltip"),
                    a.classList.add(s),
                    a.classList.add(u)
                }
            }
        }, {
            key: "getLeftRightPostion",
            value: function(e, t, r) {
                var n = "xrx-fw-disclaimer-mark__tooltip-right";
                return e >= t && r >= t ? n = "xrx-fw-disclaimer-mark__tooltip-centre" : e >= t && (n = "xrx-fw-disclaimer-mark__tooltip-left"),
                n
            }
        }]),
        e
    }())(window,document);
    new function e(t, r) {
        Qt(this, e),
        Bo(r, "change", ".xrx-fw-dropdown-menu[data-xrx-fw-allow-navigation]", (function(e) {
            var r = e.desiredTarget.value;
            (r.startsWith("http://") || r.startsWith("https://") || r.startsWith("/")) && (t.location.href = r)
        }
        ))
    }
    (window,document);
    var ts = function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            Bo(this.document, "click", "".concat(".xrx-fw-category-control-mode", " button"), (function(e) {
                n.handleModeClick(e)
            }
            ))
        }
        return Zt(e, [{
            key: "handleModeClick",
            value: function(e) {
                var t, r = e.desiredTarget, n = So(r, ".xrx-fw-category-control-mode");
                ko(r).call(r, ".xrx-fw-category-control-mode__button-list") ? (t = "list",
                n.classList.add("xrx-fw-category-control-mode--list")) : (t = "grid",
                n.classList.remove("xrx-fw-category-control-mode--list")),
                Ko(r, "xrx-fw-category-control-mode", t)
            }
        }]),
        e
    }()
      , rs = fn(5)
      , ns = !0;
    "find"in [] && Array(1).find((function() {
        ns = !1
    }
    )),
    We({
        target: "Array",
        proto: !0,
        forced: ns
    }, {
        find: function(e) {
            return rs(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    ue("find");
    var is = new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.loaded = !1
        }
        return Zt(e, [{
            key: "checkSelector",
            value: function(e, t) {
                var r = Array.from(this.document.querySelectorAll(e));
                if (this.window.Coveo)
                    return this.loaded = !0,
                    void r.forEach(t);
                r.length > 0 && (this.loaded || (this.loaded = !0,
                this.loadScripts()),
                this.waitForCoveo(r, t))
            }
        }, {
            key: "waitForCoveo",
            value: function(e, t) {
                var r = this
                  , n = setInterval((function() {
                    r.window.Coveo && (clearInterval(n),
                    e.forEach(t))
                }
                ), 250)
            }
        }, {
            key: "loadScripts",
            value: function() {
                var e = this.document.createElement("script");
                e.setAttribute("src", "https://static.cloud.coveo.com/searchui/v2.10104/js/CoveoJsSearch.Lazy.min.js"),
                e.setAttribute("class", "coveo-script"),
                e.setAttribute("defer", ""),
                e.setAttribute("integrity", "sha512-HxdDBIp5snbqtu1TPkBnXLKEvN9IPz3PeZW8zT9KfsflV9Ck822XDroDlpVbfCfXeiu8C0RDVn0fdu7aGy/H1g=="),
                e.setAttribute("crossorigin", "anonymous");
                var t = this.document.createElement("link");
                t.setAttribute("rel", "stylesheet"),
                t.setAttribute("id", "CoveoUI"),
                t.setAttribute("href", "https://static.cloud.coveo.com/searchui/v2.10104/0/css/CoveoFullSearch.min.css"),
                t.setAttribute("integrity", "sha512-9/A9yVCU4GS6/iIwTRJKnan4Hf8gDKj3anwItN9QCsU8SixaT5xkjjWsZ/iq0TWaizhtqOLacadXJfxHlwYCcA=="),
                t.setAttribute("crossorigin", "anonymous"),
                this.document.head.appendChild(e),
                this.document.head.appendChild(t)
            }
        }]),
        e
    }())(window,document);
    is.checkSelector(".xrx-fw-coveo-search-bar", (function(e) {
        new os(e,window,document)
    }
    ));
    var os = function() {
        function e(t, r, n) {
            Qt(this, e),
            this.searchBar = t,
            this.window = r,
            this.document = n,
            this.config = t.dataset,
            this.init()
        }
        return Zt(e, [{
            key: "init",
            value: function() {
                var t, r = this;
                t = this.config.locale ? this.config.locale : No();
                var n = this.config.searchResultsPage.replace("[locale]", t);
                Coveo.SearchEndpoint.configureCloudV2Endpoint(this.config.organizationId, this.config.accessToken, "https://platform.cloud.coveo.com/rest/search");
                var i = Coveo.$$(document).find("#" + this.searchBar.id)
                  , o = Coveo.initSearchbox(i, n, {
                    Searchbox: {
                        placeholder: this.config.placeholder,
                        enableQuerySuggestAddon: !0
                    }
                });
                if (o && "function" == typeof o.then && o.then((function() {
                    Ko(r.searchBar, po.COVEO_SEARCH_LOADED)
                }
                )),
                this.config.facets) {
                    var a = e.getFacetsData(this.config.facets);
                    0 !== Object.keys(a).length && Coveo.state(Coveo.$$(document).find("#" + this.searchBar.id), a)
                }
                Coveo.$$(i).on("beforeRedirect", (function(e, t) {
                    na("search-" + i.getElementsByTagName("INPUT")[0].value)
                }
                ))
            }
        }], [{
            key: "getFacetsData",
            value: function(e) {
                var t = {}
                  , r = e.split(",");
                if (r.length > 0) {
                    var n = !0
                      , i = !1
                      , o = void 0;
                    try {
                        for (var a, s = r[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                            var l = a.value.split(":");
                            if (l.length > 1) {
                                var c = l[0]
                                  , u = l[1].split("|");
                                t["f:@" + c] = u
                            }
                        }
                    } catch (e) {
                        i = !0,
                        o = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                }
                return t
            }
        }]),
        e
    }();
    is.checkSelector(".xrx-fw-coveo-recommended-block", (function(e) {
        new as(e,window,document)
    }
    ));
    var as = function() {
        function e(t, r, n) {
            Qt(this, e),
            this.element = t,
            this.window = r,
            this.document = n,
            this.config = t.dataset,
            this.initVars(),
            this.init()
        }
        return Zt(e, [{
            key: "initVars",
            value: function() {
                this.window.xrx_vars && (!this.pageLocale && this.window.xrx_vars.locale && (this.pageLocale = this.window.xrx_vars.locale),
                !this.pageLocale && this.window.xrx_vars["url-prefix"] && (this.pageLocale = this.window.xrx_vars["url-prefix"])),
                this.pageLocale || (this.pageLocale = this.document.documentElement.lang),
                this.pageLocale || (this.pageLocale = "en-US"),
                this.urlShort = this.pageLocale.toLowerCase().replace(/[^a-z]/gi, ""),
                this.urlLocale = this.urlShort.substring(0, 2) + "-" + this.urlShort.substring(2),
                this.window.xrx_vars && !this.beSupportServer && this.window.xrx_vars["be-support-url"] && (this.beSupportServer = this.window.xrx_vars["be-support-url"]),
                this.beSupportServer || (this.beSupportServer = "https://www.support.xerox.com/" + this.urlLocale)
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                if (Coveo.SearchEndpoint.configureCloudV2Endpoint(this.config.organizationId, this.config.accessToken, "https://platform.cloud.coveo.com/rest/search"),
                this.config.context)
                    try {
                        var t = JSON.parse(this.config.context);
                        Coveo.$$(this.element).on("buildingQuery", (function(e, r) {
                            r.queryBuilder.addContext(t)
                        }
                        )),
                        Coveo.$$(this.element).on("preprocessResults", (function(t, r) {
                            var n = !0
                              , i = !1
                              , o = void 0;
                            try {
                                for (var a, s = r.results.results[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                                    var l = a.value;
                                    e.resultFixer(l)
                                }
                            } catch (e) {
                                i = !0,
                                o = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (i)
                                        throw o
                                }
                            }
                        }
                        ))
                    } catch (e) {
                        console.error("Unable to parse context")
                    }
                Coveo.initRecommendation(this.element)
            }
        }, {
            key: "resultFixer",
            value: function(e) {
                this.resultPropFixer(e, "ClickUri"),
                this.resultPropFixer(e, "PrintableUri"),
                this.resultPropFixer(e, "clickUri"),
                this.resultPropFixer(e, "Uri"),
                this.resultPropFixer(e, "printableUri"),
                this.resultPropFixer(e.raw, "clickableuri"),
                this.resultPropFixer(e.raw, "sysclickableuri"),
                this.resultPropFixer(e.raw, "printableuri"),
                this.resultPropFixer(e.raw, "sysprintableuri"),
                this.resultPropFixer(e.raw, "uri"),
                this.resultPropFixer(e.raw, "sysuri")
            }
        }, {
            key: "resultPropFixer",
            value: function(e, t) {
                var r = e[t];
                if (r) {
                    if ("Xerox Support" === e.source || "Xerox Support D&D" === e.source)
                        r = r.replace(/[a-z]{4}\.html/, this.urlShort);
                    else {
                        var n = r.match(/support\/article\/([a-z]{2})\/([0-9]+)$/);
                        if (null !== n) {
                            var i = n[1]
                              , o = n[2];
                            r = this.beSupportServer + "/article/" + i + "/" + o
                        }
                    }
                    e[t] = r
                }
            }
        }]),
        e
    }();
    try {
        document.querySelector(":scope *")
    } catch (e) {
        !function(e) {
            var t = /:scope(?![\w-])/gi
              , r = a(e.querySelector);
            e.querySelector = function(e) {
                return r.apply(this, arguments)
            }
            ;
            var n = a(e.querySelectorAll);
            if (e.querySelectorAll = function(e) {
                return n.apply(this, arguments)
            }
            ,
            e.matches) {
                var i = a(e.matches);
                e.matches = function(e) {
                    return i.apply(this, arguments)
                }
            }
            if (e.closest) {
                var o = a(e.closest);
                e.closest = function(e) {
                    return o.apply(this, arguments)
                }
            }
            function a(e) {
                return function(r) {
                    var n = r && t.test(r);
                    if (n) {
                        var i = "q" + Math.floor(9e6 * Math.random()) + 1e6;
                        arguments[0] = r.replace(t, "[" + i + "]"),
                        this.setAttribute(i, "");
                        var o = e.apply(this, arguments);
                        return this.removeAttribute(i),
                        o
                    }
                    return e.apply(this, arguments)
                }
            }
        }(Element.prototype)
    }
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.hookUpEventHandlers()
        }
        return Zt(e, [{
            key: "hookUpEventHandlers",
            value: function() {
                var e = this;
                Bo(this.document, "click", ".xrx-fw-drawer .xrx-fw-drawer__title > a", (function(t) {
                    var r = t.desiredTarget
                      , n = e.getContext(r)
                      , i = n.allButtons
                      , o = n.currentTab
                      , a = n.currentTitle;
                    i.forEach((function(t) {
                        t !== r && e.closeTab(t)
                    }
                    ));
                    var s = e.isTabOpen(r);
                    s ? e.closeTab(r) : e.openTab(r);
                    var l = a.innerText;
                    o.dataset.xrxAnalyticsLid && (l = o.dataset.xrxAnalyticsLid),
                    na(l += s ? "-close" : "-open")
                }
                )),
                Bo(this.document, "transitionend", ".xrx-fw-drawer .xrx-fw-drawer__content.xrx-fw-drawer__content--transition", (function(e) {
                    var t = e.desiredTarget;
                    t.style.maxHeight = null,
                    t.classList.remove("xrx-fw-drawer__content--transition")
                }
                ))
            }
        }, {
            key: "isTabOpen",
            value: function(e) {
                return "true" === e.getAttribute("aria-expanded")
            }
        }, {
            key: "closeTab",
            value: function(e) {
                if ("true" === e.getAttribute("aria-expanded")) {
                    var t = this.getContext(e)
                      , r = t.contentDiv
                      , n = t.contentInnerDiv;
                    if (n) {
                        var i = n.getBoundingClientRect();
                        r.style.maxHeight = i.height + "px"
                    }
                    setTimeout((function() {
                        r.classList.add("xrx-fw-drawer__content--transition"),
                        e.setAttribute("aria-expanded", !1),
                        e.parentElement.classList.remove("xrx-fw-drawer__title--open"),
                        r.style.maxHeight = "0px"
                    }
                    ), 0)
                }
            }
        }, {
            key: "openTab",
            value: function(e) {
                if ("true" !== e.getAttribute("aria-expanded")) {
                    var t = this.getContext(e)
                      , r = t.contentDiv
                      , n = t.contentInnerDiv;
                    if (e.setAttribute("aria-expanded", !0),
                    e.parentElement.classList.add("xrx-fw-drawer__title--open"),
                    n) {
                        r.classList.add("xrx-fw-drawer__content--transition");
                        var i = n.getBoundingClientRect();
                        r.style.maxHeight = i.height + "px"
                    }
                }
            }
        }, {
            key: "getContext",
            value: function(e) {
                var t = So(e, ".xrx-fw-drawer")
                  , r = Array.from(t.querySelectorAll(":scope > .xrx-fw-drawer__tab"))
                  , n = Array.from(t.querySelectorAll(":scope > .xrx-fw-drawer__tab > .xrx-fw-drawer__title"))
                  , i = Array.from(t.querySelectorAll(":scope > .xrx-fw-drawer__tab > .xrx-fw-drawer__title > a"))
                  , o = So(e, ".xrx-fw-drawer__tab")
                  , a = o.querySelector(":scope > .xrx-fw-drawer__title")
                  , s = o.querySelector(":scope > .xrx-fw-drawer__content")
                  , l = s.querySelector(":scope > div, :scope > .xrx-fw-drawer__content__inner");
                return {
                    container: t,
                    allTabs: r,
                    allTitles: n,
                    allButtons: i,
                    contentDiv: s,
                    contentInnerDiv: l,
                    currentTab: o,
                    currentTitle: a
                }
            }
        }]),
        e
    }())(window,document);
    var ss = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.component = t,
            this.window = r,
            this.document = n,
            this.navNodeSelector = ".xrx-fw-featured-item-selector__nav-link",
            this.blockNodeSelector = ".xrx-fw-featured-item-selector__block",
            this.blockContainerSelector = ".xrx-fw-featured-item-selector__blocks",
            this.cycleInterval = null,
            this.cycleSeconds = 5,
            this.cycleItems(),
            Bo(this.component, "click", this.navNodeSelector, (function(e) {
                return i.interactionHandler(e)
            }
            )),
            Bo(this.component, "keydown", this.navNodeSelector, (function(e) {
                e.keyCode === mo.ENTER || e.keyCode === mo.SPACE ? i.interactionHandler(e) : e.keyCode === mo.RIGHT_ARROW ? (i.killCycle(),
                i.selectDirection(!qo())) : e.keyCode === mo.LEFT_ARROW && (i.killCycle(),
                i.selectDirection(!!qo()))
            }
            )),
            Bo(this.component, "focus", this.navNodeSelector, (function(e) {
                i.killCycle()
            }
            ))
        }
        return Zt(e, [{
            key: "interactionHandler",
            value: function(e) {
                this.killCycle(),
                this.selectItem(e.desiredTarget),
                e.preventDefault()
            }
        }, {
            key: "killCycle",
            value: function() {
                null !== this.cycleInterval && clearInterval(this.cycleInterval);
                var e = this.component.querySelector(this.blockContainerSelector);
                e && e.setAttribute("aria-live", "polite")
            }
        }, {
            key: "selectItem",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.selectNavItem(e, t),
                this.selectBlockItem(e)
            }
        }, {
            key: "cycleItems",
            value: function() {
                var e = this
                  , t = this.getNavNodes();
                if (!(t.length < 2)) {
                    var r = t.findIndex((function(e) {
                        return "true" === e.getAttribute("aria-selected")
                    }
                    ));
                    r = r >= 0 ? r : 0,
                    this.cycleInterval = setInterval((function() {
                        e.selectDirection(!0, !1)
                    }
                    ), 1e3 * this.cycleSeconds)
                }
            }
        }, {
            key: "selectDirection",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , r = this.getNavNodes()
                  , n = r.findIndex((function(e) {
                    return "true" === e.getAttribute("aria-selected")
                }
                ))
                  , i = yo(e ? n + 1 : n - 1, r.length);
                this.selectItem(r[i], t)
            }
        }, {
            key: "getNavNodes",
            value: function() {
                return Array.from(this.component.querySelectorAll(this.navNodeSelector))
            }
        }, {
            key: "selectNavItem",
            value: function(e, t) {
                "true" !== e.getAttribute("aria-selected") && (this.getNavNodes().forEach((function(e) {
                    e.setAttribute("aria-selected", "false"),
                    e.setAttribute("tab-index", "0")
                }
                )),
                e.setAttribute("aria-selected", "true"),
                e.setAttribute("tab-index", "-1"),
                t && e.focus())
            }
        }, {
            key: "selectBlockItem",
            value: function(e) {
                var t = e.getAttribute("href")
                  , r = Array.from(this.component.querySelectorAll(this.blockNodeSelector))
                  , n = this.component.querySelector(t);
                n && (r.forEach((function(e) {
                    e.setAttribute("hidden", "hidden")
                }
                )),
                n.removeAttribute("hidden"))
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.elements = Array.from(r.querySelectorAll(".xrx-fw-featured-item-selector")),
        this.elements.length && this.elements.forEach((function(e) {
            new ss(e,t,r)
        }
        ))
    }
    (window,document);
    var ls = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.window = r,
            this.document = n,
            this.group = t,
            this.imageContainers = Array.from(t.querySelectorAll(".xrx-fw-image-group__primary .xrx-fw-image-group__image-container")),
            this.images = Array.from(t.querySelectorAll(".xrx-fw-image-group__primary .xrx-fw-image-group__image")),
            this.totalImages = this.images.length,
            this.transitionDuration = 2e3 * this.totalImages,
            this.primary = t.querySelector(".xrx-fw-image-group__primary"),
            this.duplicate = t.querySelector(".xrx-fw-image-group__duplicate"),
            this.primary.style.transitionDuration = this.transitionDuration + "ms",
            this.duplicate.style.transitionDuration = this.transitionDuration + "ms",
            this.imageGroupWidth = this.primary.scrollWidth + 30,
            this.duplicate.style.transform = "translateX(" + this.imageGroupWidth + "px)",
            this.duplicate.style.display = "block",
            this.scrolling = !1,
            this.imagesLoaded = !1,
            this.animationId = null,
            this.animationSeconds = .5,
            this.totalTransitionImages = 4,
            this.currentIndex = 0,
            this.transitionendHandler = this.transitionendHandler.bind(this);
            var o = wo(r, n);
            o !== ho.XS && o !== ho.SM && (this.totalTransitionImages = 8),
            this.lastImage = this.images[Math.min(this.images.length - 1, this.totalTransitionImages)],
            !xo(this.window) && this.window.IntersectionObserver ? this.intersectionObserver = new r.IntersectionObserver((function(e) {
                e[0].intersectionRatio <= 0 ? i.groupOutView() : i.groupInView()
            }
            ),{}) : this.groupInView(),
            this.intersectionObserver && this.intersectionObserver.observe(this.group),
            this.window.addEventListener("resize", (function(e) {
                i.resetImages()
            }
            )),
            Bo(this.document, "transitionend", ".xrx-fw-image-group__primary", this.transitionendHandler),
            Bo(this.document, "transitionend", ".xrx-fw-image-group__duplicate", this.transitionendHandler),
            Bo(this.document, "transitionend", ".xrx-fw-image-group__image", this.transitionendHandler)
        }
        return Zt(e, [{
            key: "transitionendHandler",
            value: function(e) {
                e.target === this.primary && this.loopScroll(this.primary),
                e.target === this.duplicate && this.loopScroll(this.duplicate),
                e.target === this.lastImage && this.startScroll()
            }
        }, {
            key: "groupInView",
            value: function() {
                this.imagesLoaded || this.primary.classList.add("xrx-fw-image-group--fade-in"),
                this.imagesLoaded && this.startScroll()
            }
        }, {
            key: "groupOutView",
            value: function() {
                this.imagesLoaded && this.scrolling && this.resetPositioning()
            }
        }, {
            key: "loopScroll",
            value: function(e) {
                var t = this.getXpos(e.style.transform);
                t < 0 ? (e.style.display = "none",
                e.style.transitionProperty = "none",
                e.offsetHeight,
                e.style.transform = "translateX(" + this.imageGroupWidth + "px)",
                e.style.transitionProperty = "",
                e.style.display = "block",
                e.offsetHeight,
                e.style.transform = "translateX(0)") : 0 === t && (e.style.transform = "translateX(-" + this.imageGroupWidth + "px)")
            }
        }, {
            key: "resetImages",
            value: function() {
                var e = wo(window, document);
                e === ho.XS || e === ho.SM ? this.totalTransitionImages = 4 : this.totalTransitionImages = 8,
                this.resetScrollPositioning()
            }
        }, {
            key: "resetScrollPositioning",
            value: function() {
                this.imageGroupWidth = this.primary.scrollWidth + 30,
                this.resetPositioning(),
                this.startScroll()
            }
        }, {
            key: "startScroll",
            value: function() {
                this.totalImages > this.totalTransitionImages && (this.primary.style.transform = "translateX(-" + this.imageGroupWidth + "px)",
                this.duplicate.style.transform = "translateX(0)",
                this.scrolling = !0)
            }
        }, {
            key: "resetPositioning",
            value: function() {
                this.primary.style.display = "none",
                this.duplicate.style.display = "none",
                this.primary.style.transitionProperty = "none",
                this.duplicate.style.transitionProperty = "none",
                this.primary.offsetHeight,
                this.duplicate.offsetHeight,
                this.primary.style.transform = "translateX(0)",
                this.duplicate.style.transform = "translateX(" + this.imageGroupWidth + "px)",
                this.primary.style.transitionProperty = "",
                this.duplicate.style.transitionProperty = "",
                this.primary.style.display = "block",
                this.duplicate.style.display = "block",
                this.primary.offsetHeight,
                this.duplicate.offsetHeight
            }
        }, {
            key: "getXpos",
            value: function(e) {
                var t = /translateX\((-?\d+(?:\.\d*)?)px/g.exec(e);
                return t ? parseInt(t[1], 10) : void 0
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.window = t,
        this.document = r;
        for (var n = Array.from(r.querySelectorAll(".xrx-fw-image-group")), i = 0, o = n.length; i < o; i++) {
            var a = n[i];
            new ls(a,t,r)
        }
    }
    (window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.offset = 18,
            this.hookUpEventHandlers(),
            this.window.addEventListener("resize", Xo((function(e) {
                n.handleWindowResize()
            }
            ), 500)),
            this.handleWindowResize()
        }
        return Zt(e, [{
            key: "setTextHeights",
            value: function() {
                var e = wo(window, document)
                  , t = Array.from(document.querySelectorAll("div.xrx-fw-cta-tray-tile:not(.xrx-fw-cta-tray-tile--no-tray)"))
                  , r = [];
                if (t.length > 0)
                    for (var n = 0, i = t; n < i.length; n++) {
                        var o = i[n]
                          , a = o.querySelector(".xrx-fw-cta-tray-tile__text");
                        if (a) {
                            var s = a.getBoundingClientRect().height;
                            (!r[o.offsetTop] || s > r[o.offsetTop]) && (r[o.offsetTop] = s)
                        }
                    }
                if (!(r.length < 1))
                    for (var l = 0, c = t; l < c.length; l++) {
                        var u = c[l];
                        e === ho.SM && document.querySelector(".xrx-fw-cta-tray--variant-circle") || e === ho.MD || e === ho.LG ? r[u.offsetTop] ? u.querySelector(".xrx-fw-cta-tray-tile__text").style.minHeight = r[u.offsetTop] + "px" : u.querySelector(".xrx-fw-cta-tray-tile__text").style.removeProperty("min-height") : u.querySelector(".xrx-fw-cta-tray-tile__text").style.minHeight = "auto"
                    }
            }
        }, {
            key: "handleWindowResize",
            value: function() {
                for (var e = 0, t = Array.from(document.querySelectorAll("div.xrx-fw-cta-tray-tile")); e < t.length; e++) {
                    var r = t[e];
                    this.isTabOpen(r) ? this.resize(r, !0) : this.setTextHeights()
                }
            }
        }, {
            key: "hookUpEventHandlers",
            value: function() {
                var e = this
                  , t = !1;
                Bo(this.document, "click", ".xrx-fw-cta-tray .xrx-fw-cta-tray-tile:not(.xrx-fw-cta-tray-tile--no-tray) .xrx-fw-cta-tray-tile__container, .xrx-fw-cta-tray .xrx-fw-cta-tray-tile:not(.xrx-fw-cta-tray-tile--no-tray) .xrx-fw-cta-tray-tile__content__container__close", (function(r) {
                    t || (t = !0,
                    e.setTextHeights());
                    var n = So(r.desiredTarget, ".xrx-fw-cta-tray-tile")
                      , i = e.getContext(n)
                      , o = i.allTrays
                      , a = i.currentTray
                      , s = i.currentTitle;
                    o.forEach((function(t) {
                        t !== n && e.closeTab(t)
                    }
                    ));
                    var l = e.isTabOpen(n);
                    l ? e.closeTray(n) : e.openTab(n);
                    var c = s.innerText;
                    a.dataset.xrxAnalyticsLid && (c = a.dataset.xrxAnalyticsLid),
                    na(c += l ? "-close" : "-open")
                }
                )),
                Bo(document, po.MSS_TRIGGER_CHANGE, ".xrx-fw-multi-step-selector", (function(t) {
                    e.handleWindowResize()
                }
                )),
                Bo(document, po.CTA_TRAY_TRIGGER_CLOSE, ".xrx-fw-cta-tray", (function(e) {
                    Ko(e.detail.cta_tray_close, "click")
                }
                )),
                Bo(this.document, "transitionend", ".xrx-fw-cta-tray .xrx-fw-cta-tray-tile__content.xrx-fw-cta-tray-tile__content--transition", (function(e) {
                    var t = e.desiredTarget;
                    t.classList.remove("xrx-fw-cta-tray-tile__content--transition"),
                    Ko(t, po.CTA_TRAY_CHANGE)
                }
                )),
                Bo(this.document, "transitionend", ".xrx-fw-cta-tray .xrx-fw-cta-tray-tile.xrx-fw-cta-tray-tile--transition", (function(e) {
                    var t = e.desiredTarget;
                    t.classList.remove("xrx-fw-cta-tray-tile--transition"),
                    Ko(t, po.CTA_TRAY_CHANGE)
                }
                )),
                Bo(this.document, "click", ".xrx-fw-cta-tray-tile__content a", (function(t) {
                    var r = t.desiredTarget
                      , n = r.textContent;
                    if ((!r.name || !r.name.includes("&lid=")) && n) {
                        t.stopPropagation();
                        var i, o, a, s = "", l = e.getContext(r), c = l.container, u = l.currentTitle.getElementsByTagName("span");
                        if (c.dataset.trayId && (s = "".concat(c.dataset.trayId, "-")),
                        u.length > 0) {
                            var d = u[0].textContent;
                            s += "".concat(d, "-")
                        }
                        if (n && (s += n),
                        s)
                            na((i = s,
                            o = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",
                            a = new RegExp(o.split("").join("|"),"g"),
                            i.toString().toLowerCase().replace(/\s+/g, "-").replace(a, (function(e) {
                                return "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(o.indexOf(e))
                            }
                            )).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")))
                    }
                }
                ))
            }
        }, {
            key: "isTabOpen",
            value: function(e) {
                return "true" === e.getAttribute("aria-expanded")
            }
        }, {
            key: "closeTab",
            value: function(e) {
                if ("true" === e.getAttribute("aria-expanded")) {
                    var t = this.getContext(e)
                      , r = t.contentDiv
                      , n = t.contentInnerDiv;
                    if (n) {
                        var i = n.getBoundingClientRect();
                        r.style.maxHeight = i.height + "px"
                    }
                    setTimeout((function() {
                        e.setAttribute("aria-expanded", !1),
                        r.style.maxHeight = "0px",
                        e.style.paddingBottom = "0px"
                    }
                    ), 0)
                }
            }
        }, {
            key: "closeTray",
            value: function(e) {
                if ("true" === e.getAttribute("aria-expanded")) {
                    var t = this.getContext(e)
                      , r = t.contentDiv
                      , n = t.contentInnerDiv;
                    if (n) {
                        var i = n.getBoundingClientRect();
                        r.style.maxHeight = i.height + "px"
                    }
                    e.classList.add("xrx-fw-cta-tray-tile--transition"),
                    setTimeout((function() {
                        e.setAttribute("aria-expanded", !1),
                        r.style.maxHeight = "0px",
                        e.style.paddingBottom = "0px"
                    }
                    ), 0),
                    wo(window, document).contains(ho.MD) || setTimeout(_o, 500, e)
                }
            }
        }, {
            key: "resize",
            value: function(e, t) {
                var r = this.getContext(e)
                  , n = r.contentDiv
                  , i = r.contentInnerDiv
                  , o = r.contentFooter;
                if (i) {
                    t || (e.classList.add("xrx-fw-cta-tray-tile--transition"),
                    n.classList.add("xrx-fw-cta-tray-tile__content--transition"));
                    var a = i.getBoundingClientRect()
                      , s = 0;
                    if (o) {
                        var l = o.getBoundingClientRect();
                        s = a.height + l.height
                    } else
                        s = a.height;
                    n.style.maxHeight = s + "px",
                    e.style.paddingBottom = s - this.offset + "px"
                }
            }
        }, {
            key: "openTab",
            value: function(e) {
                var t = this;
                if ("true" !== e.getAttribute("aria-expanded")) {
                    var r = this.getContext(e).allTrays
                      , n = !1;
                    r.forEach((function(e) {
                        n || (n = t.isTabOpen(e))
                    }
                    )),
                    e.setAttribute("aria-expanded", !0),
                    this.resize(e, n),
                    wo(window, document).contains(ho.MD) || setTimeout(_o, 500, e)
                }
            }
        }, {
            key: "getContext",
            value: function(e) {
                var t = So(e, ".xrx-fw-cta-tray")
                  , r = Array.from(t.querySelectorAll(":scope > .xrx-fw-cta-tray-tile"))
                  , n = Array.from(t.querySelectorAll(":scope > .xrx-fw-cta-tray-tile > .xrx-fw-cta-tray-tile__text"))
                  , i = So(e, ".xrx-fw-cta-tray-tile")
                  , o = i.querySelector(":scope > .xrx-fw-cta-tray-tile__container").querySelector(":scope > .xrx-fw-cta-tray-tile__text")
                  , a = i.querySelector(":scope > .xrx-fw-cta-tray-tile__content")
                  , s = a.querySelector(":scope > div")
                  , l = a.querySelector(":scope > .xrx-fw-cta-tray-tile__content__footer");
                return {
                    container: t,
                    allTrays: r,
                    allTitles: n,
                    contentDiv: a,
                    contentInnerDiv: s,
                    currentTray: i,
                    currentTitle: o,
                    contentFooter: l
                }
            }
        }]),
        e
    }())(window,document);
    var cs = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.window = r,
            this.document = n,
            this.element = t,
            this.wrapper = this.element.querySelector(".xrx-fw-two-panel-selector__wrapper"),
            this.wrapper.style["max-height"] = this.wrapper.offsetHeight + "px",
            this.TwoPanelSelectorLabels = Array.from(t.querySelectorAll("label")),
            this.TwoPanelSelectorLabels.forEach((function(e, r) {
                e.addEventListener("click", go((function(r) {
                    return r.preventDefault(),
                    i.TwoPanelSelectorClickCallback(r, t, e, i.wrapper, n),
                    !1
                }
                )))
            }
            )),
            this.leaves = Array.from(t.querySelectorAll(".xrx-fw-two-panel-selector__flyout li .link")),
            this.leaves.forEach((function(e, r) {
                e.addEventListener("click", (function(r) {
                    return r.preventDefault(),
                    i.TwoPanelSelectorAjaxCallback(r, t, e),
                    !1
                }
                ))
            }
            ))
        }
        return Zt(e, [{
            key: "TwoPanelSelectorClickCallback",
            value: function(e, t, r, n, i) {
                var o = r.nextElementSibling;
                if (-1 !== o.className.indexOf("xrx-fw-two-panel-selector__flyout")) {
                    var a = o.offsetHeight;
                    a > t.offsetHeight && (a = t.offsetHeight),
                    n.style["max-height"] = a + "px";
                    var s = t.getBoundingClientRect();
                    bo((void 0 !== window.scrollY ? window.scrollY : window.pageYOffset) + s.top - 80, 250, "easeInOutQuad")
                } else
                    n.style["max-height"] = t.querySelector(".xrx-fw-two-panel-selector__wrapper > ul").offsetHeight + "px"
            }
        }, {
            key: "TwoPanelSelectorAjaxCallback",
            value: function(e, t, r) {
                if (r.dataset.json && r.dataset.callback) {
                    e.preventDefault();
                    var n = JSON.parse(r.dataset.json)
                      , i = window[r.dataset.callback];
                    "function" == typeof i && i(n)
                }
            }
        }]),
        e
    }();
    new function e(t, r) {
        var n = this;
        Qt(this, e),
        this.window = t,
        this.document = r,
        this.elements = Array.from(r.querySelectorAll(".xrx-fw-two-panel-selector")),
        this.panelSelectors = [],
        this.elements.map((function(e) {
            n.panelSelectors.push(new cs(e,t,r))
        }
        ))
    }
    (window,document),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.threshold = 5,
            this.elements = Array.from(r.querySelectorAll(".xrx-fw-reveal")),
            this.reveal = this.reveal.bind(this),
            this.reveal(),
            Yo(t, r, this.reveal)
        }
        return Zt(e, [{
            key: "reveal",
            value: function() {
                var e = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var n, i = this.elements[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                        var o = n.value
                          , a = o.querySelector(".xrx-fw-reveal__inner");
                        a.scrollHeight - this.threshold <= a.clientHeight ? o.classList.add("xrx-fw-reveal--show") : o.classList.remove("xrx-fw-reveal--show")
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e() {
            var t = this;
            Qt(this, e),
            this.selector = ".xrx-fw-terms-conditions",
            this.elements = Array.from(document.querySelectorAll(this.selector)),
            this.elements.length && (this.elements.forEach(this.toggleState),
            Bo(document, "change", "".concat(this.selector, " .xrx-fw-terms-conditions__checkbox"), (function(e) {
                var r = e.desiredTarget.parentNode;
                r && t.toggleState(r)
            }
            )))
        }
        return Zt(e, [{
            key: "toggleState",
            value: function(e) {
                var t = e.querySelector(".xrx-fw-terms-conditions__checkbox");
                if (t) {
                    var r = e.querySelector(".xrx-fw-terms-conditions__cta .xrx-fw-cta");
                    r && (t.checked ? r.setAttribute("aria-disabled", !1) : r.setAttribute("aria-disabled", !0))
                }
            }
        }]),
        e
    }()),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.elements = Array.from(r.querySelectorAll(".xrx-fw-carousel"));
            var i = !0
              , o = !1
              , a = void 0;
            try {
                for (var s, l = function() {
                    var e = s.value;
                    "true" === e.dataset.auto && n.window.requestAnimationFrame((function(t) {
                        return n.autoScroll(t, e)
                    }
                    )),
                    n.updateFocusable(e)
                }, c = this.elements[Symbol.iterator](); !(i = (s = c.next()).done); i = !0)
                    l()
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    i || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            Bo(r, "click", ".xrx-fw-carousel .xrx-fw-pagination-dot", (function(e) {
                var t = e.desiredTarget
                  , r = So(t, ".xrx-fw-carousel")
                  , n = Array.from(t.parentNode.children)
                  , i = n.indexOf(t) + 1
                  , o = Array.from(t.parentNode.querySelectorAll(".xrx-fw-pagination-dot:not(.xrx-fw-pagination-dot--hidden-mobile)")).indexOf(t) + 1;
                r.setAttribute("data-item", i),
                r.setAttribute("data-index", o),
                Ko(r, po.CAROUSEL_CHANGE, {
                    index: i,
                    hiddenIndex: o
                });
                var a = aa(r);
                if (a) {
                    var s = n.filter((function(e) {
                        return function(e) {
                            return e ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : null
                        }(e)
                    }
                    )).indexOf(t) + 1 || i;
                    na("".concat(a, "-int-button").concat(s))
                }
            }
            )),
            Bo(r, "click", ".xrx-fw-carousel .xrx-fw-carousel__controls__previous", (function(e) {
                n.nextPreviousHandler(!1, e)
            }
            )),
            Bo(r, "click", ".xrx-fw-carousel .xrx-fw-carousel__controls__next", (function(e) {
                n.nextPreviousHandler(!0, e)
            }
            )),
            Bo(r, po.SWIPE, ".xrx-fw-carousel", (function(e) {
                e.detail.xDirection === vo.LEFT ? n.nextPreviousHandler(!0, e) : e.detail.xDirection === vo.RIGHT && n.nextPreviousHandler(!1, e)
            }
            )),
            Bo(r, po.CAROUSEL_TRIGGER_CHANGE, ".xrx-fw-carousel", (function(e) {
                var t = e.desiredTarget
                  , r = e.detail
                  , i = r.direction
                  , o = r.index
                  , a = r.hiddenIndex;
                i === vo.LEFT ? n.nextPreviousHandler(!0, e) : i === vo.RIGHT ? n.nextPreviousHandler(!1, e) : o && (t.setAttribute("data-item", o),
                t.setAttribute("data-index", n.hiddenIndexToIndex(o, t) || o),
                Ko(t, po.CAROUSEL_CHANGE, {
                    index: o,
                    hiddenIndex: a
                }),
                n.updateFocusable(t))
            }
            )),
            Yo(t, r, (function(e, t, r) {
                if (!r.contains(ho.MD)) {
                    var i = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var s, l = n.elements[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var c = s.value
                              , u = parseInt(c.dataset.item, 10)
                              , d = c.querySelector(".xrx-fw-carousel__items")
                              , f = Array.from(d.children)
                              , h = f[u - 1];
                            if (h && h.classList.contains("xrx-fw-carousel__item--hidden-mobile")) {
                                do {
                                    u < 1 && (u = f.length),
                                    h = f[--u]
                                } while (h.classList.contains("xrx-fw-carousel__item--hidden-mobile"));
                                Ko(c, po.CAROUSEL_TRIGGER_CHANGE, {
                                    index: u + 1
                                })
                            }
                        }
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                }
            }
            )),
            Bo(r, po.CAROUSEL_CHANGE, ".xrx-fw-carousel", (function(e) {
                var t = e.desiredTarget;
                t && t.dataset && t.dataset.item && n.playYoutube(t, t.dataset.item - 1)
            }
            ))
        }
        return Zt(e, [{
            key: "updateFocusable",
            value: function(e) {
                var t = e.dataset
                  , r = t.itemsPerPage
                  , n = void 0 === r ? 3 : r
                  , i = t.index
                  , o = void 0 === i ? 1 : i
                  , a = parseInt(n, 10)
                  , s = parseInt(o);
                !wo(this.window, this.document).contains(ho.MD) && (a = 1);
                for (var l = Array.from(e.querySelectorAll(".xrx-fw-carousel__item")), c = function(e) {
                    l[e].querySelectorAll(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return To.map((function(r) {
                            return (e && e + " ") + r + (t && " " + t)
                        }
                        )).join(", ")
                    }()).forEach((function(t) {
                        "true" !== t.getAttribute("aria-hidden") && (e + 1 >= s && e + 1 < s + a ? t.setAttribute("tabindex", "") : t.setAttribute("tabindex", "-1"))
                    }
                    ))
                }, u = 0; u < l.length; u++)
                    c(u)
            }
        }, {
            key: "playYoutube",
            value: function(e, t) {
                Array.from(e.querySelectorAll(".xrx-fw-carousel__item")).forEach((function(e, r) {
                    var n = e.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                    if (n)
                        if (r === t)
                            if (n.xrxFwYoutube) {
                                var i = "function" == typeof n.xrxFwYoutube.playVideo
                                  , o = "function" == typeof n.xrxFwYoutube.mute;
                                i && n.xrxFwYoutube.playVideo(),
                                o && n.xrxFwYoutube.mute(),
                                i && o || n.xrxFwYoutube.addEventListener("onReady", (function(e) {
                                    i || e.target.playVideo(),
                                    o || e.target.mute()
                                }
                                ))
                            } else
                                n.setAttribute("data-xrx-fw-video-autoplay", !0),
                                n.setAttribute("data-xrx-fw-video-mute", !0);
                        else
                            n.xrxFwYoutube && "function" == typeof n.xrxFwYoutube.stopVideo && n.xrxFwYoutube.stopVideo()
                }
                ))
            }
        }, {
            key: "autoScroll",
            value: function(e, t) {
                var r = this;
                this.start || (this.start = e),
                e - this.start > 5e3 && (this.nextPreviousHandler(!0, null, t, !1),
                this.start = e),
                this.window.requestAnimationFrame((function(e) {
                    return r.autoScroll(e, t)
                }
                ))
            }
        }, {
            key: "indexToHiddenIndex",
            value: function(e, t) {
                return t.length && Array.from(t[0].parentNode.children).indexOf(t[e - 1]) + 1 || e
            }
        }, {
            key: "hiddenIndexToIndex",
            value: function(e, t) {
                var r;
                return (r = !wo(this.window, this.document).contains(ho.MD) ? t.querySelectorAll(".xrx-fw-carousel__items > .xrx-fw-carousel__item:not(.xrx-fw-carousel__item--hidden-mobile)") : t.querySelectorAll(".xrx-fw-carousel__items > .xrx-fw-carousel__item")).length && Array.from(r).indexOf(r[0].parentNode.children[e - 1]) + 1 || e
            }
        }, {
            key: "nextPreviousHandler",
            value: function(e, t, r) {
                var n, i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (t) {
                    var o = t.desiredTarget;
                    n = So(o, ".xrx-fw-carousel")
                } else
                    n = r;
                var a, s = !wo(this.window, this.document).contains(ho.MD), l = (a = s ? n.querySelectorAll(".xrx-fw-carousel__items > .xrx-fw-carousel__item:not(.xrx-fw-carousel__item--hidden-mobile)") : n.querySelectorAll(".xrx-fw-carousel__items > .xrx-fw-carousel__item")).length, c = n.dataset, u = c.itemsPerPage, d = void 0 === u ? 3 : u, f = c.index, h = void 0 === f ? 1 : f, v = c.focusable, p = void 0 !== v && v;
                d = parseInt(d, 10),
                p = !!p;
                var m = h = parseInt(h, 10);
                (s || p) && (d = 1),
                e ? (m += d) > l && (m = 1) : (m -= d) < 1 && (m = l);
                var y = this.indexToHiddenIndex(m, a);
                if (n.setAttribute("data-item", y),
                n.setAttribute("data-index", m),
                Ko(n, po.CAROUSEL_CHANGE, {
                    index: y,
                    hiddenIndex: m
                }),
                this.updateFocusable(n),
                i) {
                    var w = aa(n);
                    if (w) {
                        var g = e ? "next" : "prev";
                        na("".concat(w, "-int-").concat(g))
                    }
                }
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.containerSelector = ".xrx-fw-fader",
            this.elementSelector = ".xrx-fw-fader__item",
            this.animationSpeed = 750,
            this.maxItems = 10,
            this.containers = Array.from(r.querySelectorAll(this.containerSelector)),
            this.containers.length && Bo(r, po.READY, null, (function(e) {
                n.containers.forEach((function(e) {
                    xo(n.window) || !n.window.IntersectionObserver ? n.init(e) : new t.IntersectionObserver((function(e, t) {
                        n.handleIntersection(e, t)
                    }
                    ),{
                        threshold: .2
                    }).observe(e)
                }
                )),
                Bo(r, "click", ".xrx-fw-fader .xrx-fw-carousel__controls__previous", (function(e) {
                    n.previousHandler(e)
                }
                )),
                Bo(r, "click", ".xrx-fw-fader .xrx-fw-carousel__controls__next", (function(e) {
                    n.nextHandler(e)
                }
                )),
                Bo(r, "click", ".xrx-fw-fader .xrx-fw-pagination-dot", (function(e) {
                    var t = e.desiredTarget
                      , r = So(t, n.containerSelector)
                      , i = n.getElements(r)
                      , o = Array.from(t.parentNode.children).indexOf(t);
                    if (-1 !== o) {
                        n.setActiveElement(r, i, o);
                        var a = aa(r);
                        a && na("".concat(a, "-int-button").concat(o))
                    }
                }
                )),
                Bo(r, po.SWIPE, n.containerSelector, (function(e) {
                    e.detail.xDirection === vo.LEFT ? n.previousHandler(e) : e.detail.xDirection === vo.RIGHT && n.nextHandler(e)
                }
                )),
                Bo(r, po.TIMER_BAR_COMPLETE, n.containerSelector, (function(e) {
                    n.nextHandler(e, !1)
                }
                )),
                Bo(r, po.FADER_TRIGGER_CHANGE, n.containerSelector, (function(e) {
                    var t = e.detail
                      , r = t.direction
                      , i = t.index;
                    if (r === vo.LEFT)
                        n.previousHandler(e, !1);
                    else if (r === vo.RIGHT)
                        n.nextHandler(e, !1);
                    else if (i) {
                        var o = So(e.desiredTarget, n.containerSelector)
                          , a = n.getElements(o);
                        n.setActiveElement(o, a, i)
                    }
                }
                ))
            }
            ))
        }
        return Zt(e, [{
            key: "init",
            value: function(e) {
                var t = this
                  , r = this.getElements(e);
                r.forEach((function(e, r) {
                    e.style.transitionDuration = "".concat(t.animationSpeed, "ms")
                }
                )),
                this.setActiveElement(e, r, 0)
            }
        }, {
            key: "handleIntersection",
            value: function(e, t) {
                var r = this;
                e.forEach((function(e) {
                    e.intersectionRatio > 0 && (t.unobserve(e.target),
                    r.init(e.target))
                }
                ))
            }
        }, {
            key: "nextHandler",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e.preventDefault();
                var r = So(e.desiredTarget, this.containerSelector)
                  , n = this.getElements(r)
                  , i = this.getActiveIndex(r)
                  , o = i === n.length - 1 ? 0 : i + 1;
                if (this.setActiveElement(r, n, o),
                t) {
                    var a = aa(r);
                    a && na("".concat(a, "-int-next"))
                }
            }
        }, {
            key: "previousHandler",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e.preventDefault();
                var r = So(e.desiredTarget, this.containerSelector)
                  , n = this.getElements(r)
                  , i = this.getActiveIndex(r)
                  , o = 0 === i ? n.length - 1 : i - 1;
                if (this.setActiveElement(r, n, o),
                t) {
                    var a = aa(r);
                    a && na("".concat(a, "-int-prev"))
                }
            }
        }, {
            key: "getElements",
            value: function(e) {
                return Array.from(e.querySelectorAll(this.elementSelector))
            }
        }, {
            key: "getActiveIndex",
            value: function(e) {
                return parseInt(e.dataset.activeIndex || -1, 10)
            }
        }, {
            key: "getActiveElement",
            value: function(e) {
                var t = this.getElements(e)
                  , r = this.getActiveIndex(e);
                return void 0 === t[r] ? null : t[r]
            }
        }, {
            key: "setActiveElement",
            value: function(e, t, r) {
                if (void 0 !== t[r]) {
                    var n = this.getActiveElement(e)
                      , i = t[r]
                      , o = "true" === e.dataset.running || !0 === e.dataset.running;
                    o && n === i || (o || (e.dataset.running = !0),
                    e.dataset.activeIndex = r > this.maxItems - 1 ? 0 : r,
                    setTimeout((function() {
                        Ko(e, po.FADER_CHANGE, {
                            element: i,
                            index: r
                        })
                    }
                    ), this.animationSpeed))
                }
            }
        }]),
        e
    }())(window,document);
    var us = [].sort
      , ds = [1, 2, 3]
      , fs = e((function() {
        ds.sort(void 0)
    }
    ))
      , hs = e((function() {
        ds.sort(null)
    }
    ))
      , vs = gn("sort");
    We({
        target: "Array",
        proto: !0,
        forced: fs || !hs || vs
    }, {
        sort: function(e) {
            return void 0 === e ? us.call(Ge(this)) : us.call(Ge(this), gt(e))
        }
    });
    var ps = /"/g
      , ms = function(e, t, r, n) {
        var i = String(o(e))
          , a = "<" + t;
        return "" !== r && (a += " " + r + '="' + String(n).replace(ps, "&quot;") + '"'),
        a + ">" + i + "</" + t + ">"
    }
      , ys = function(t) {
        return e((function() {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }
        ))
    }
      , ws = ys("link");
    We({
        target: "String",
        proto: !0,
        forced: ws
    }, {
        link: function(e) {
            return ms(this, "a", "href", e)
        }
    });
    var gs = Object.assign
      , xs = !gs || e((function() {
        var e = {}
          , t = {}
          , r = Symbol();
        return e[r] = 7,
        "abcdefghijklmnopqrst".split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != gs({}, e)[r] || "abcdefghijklmnopqrst" != K(gs({}, t)).join("")
    }
    )) ? function(e, t) {
        for (var r = Ge(e), n = arguments.length, o = 1, a = De.f, s = Te.f; n > o; )
            for (var l, c = i(arguments[o++]), u = a ? K(c).concat(a(c)) : K(c), d = u.length, f = 0; d > f; )
                l = u[f++],
                h && !s.call(c, l) || (r[l] = c[l]);
        return r
    }
    : gs;
    function bs(e) {
        var t;
        if (e.url) {
            var r = [];
            e.timeout || (e.timeout = 3e4),
            e.retryLimit || (e.retryLimit = 1),
            e.tryCount || (e.tryCount = 0);
            var n = e.jsonp || "callback";
            if (e.url) {
                var i = e.url.match("".concat(n, "=([^&]*)"));
                i && i[1] && "?" !== i[1] && (t = i[1])
            }
            if (e.jsonpCallback)
                t = e.jsonpCallback;
            else
                for (; !t || void 0 !== window[t]; )
                    t = "xrxjsonp_" + (Math.random() + 1).toString(36).substring(7);
            var o, a = !1;
            if ("function" == typeof window[t] && (r.forEach((function(e) {
                e.parentNode.removeChild(e)
            }
            )),
            r = [],
            window[t] = null),
            window[t] = function(n) {
                o && window.clearInterval(o),
                "function" != typeof e.success || a || (a = !0,
                e.success.call(e, n),
                setTimeout((function() {
                    r.forEach((function(e) {
                        e.parentNode.removeChild(e)
                    }
                    )),
                    r = [],
                    window[t] = null
                }
                ), 100))
            }
            ,
            e.url.indexOf("?") > -1 ? e.url += "&".concat(n, "=").concat(t) : e.url += "?".concat(n, "=").concat(t),
            e.data)
                Object.keys(e.data).forEach((function(t) {
                    var r = encodeURIComponent(e.data[t]);
                    e.url += "&".concat(t, "=").concat(r)
                }
                ));
            e.retryLimit > 1 ? o = setInterval((function() {
                if (r.forEach((function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                r = [],
                e.tryCount < e.retryLimit) {
                    var t = document.createElement("script");
                    t.setAttribute("src", e.url),
                    t.setAttribute("type", "text/javascript"),
                    t.setAttribute("defer", "defer"),
                    document.getElementsByTagName("head")[0].appendChild(t),
                    r.push(t)
                } else
                    o && (window.clearInterval(o),
                    a || "function" == typeof e.error && e.error.call(e));
                e.tryCount++
            }
            ), e.timeout) : "number" == typeof e.timeout && "function" == typeof e.error && (o = setInterval((function() {
                r.forEach((function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                r = [],
                o && (window.clearInterval(o),
                a || e.error.call(e))
            }
            ), e.timeout));
            var s = document.createElement("script");
            s.setAttribute("src", e.url),
            s.setAttribute("type", "text/javascript"),
            s.setAttribute("defer", "defer"),
            "function" == typeof e.error && s.addEventListener("error", (function() {
                e.error.call(e)
            }
            )),
            document.getElementsByTagName("head")[0].appendChild(s),
            e.tryCount++,
            r.push(s)
        }
    }
    We({
        target: "Object",
        stat: !0,
        forced: Object.assign !== xs
    }, {
        assign: xs
    }),
    function() {
        var e;
        function t(e) {
            var t = 0;
            return function() {
                return t < e.length ? {
                    done: !1,
                    value: e[t++]
                } : {
                    done: !0
                }
            }
        }
        var r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, r) {
            e != Array.prototype && e != Object.prototype && (e[t] = r.value)
        }
          , n = "undefined" != typeof window && window === this ? this : void 0 !== s && null != s ? s : this;
        function i() {
            i = function() {}
            ,
            n.Symbol || (n.Symbol = l)
        }
        var o, a, l = (o = 0,
        function(e) {
            return "jscomp_symbol_" + (e || "") + o++
        }
        );
        function c() {
            i();
            var e = n.Symbol.iterator;
            e || (e = n.Symbol.iterator = n.Symbol("iterator")),
            "function" != typeof Array.prototype[e] && r(Array.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return function(e) {
                        return c(),
                        (e = {
                            next: e
                        })[n.Symbol.iterator] = function() {
                            return this
                        }
                        ,
                        e
                    }(t(this))
                }
            }),
            c = function() {}
        }
        function u(e) {
            var r = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
            return r ? r.call(e) : {
                next: t(e)
            }
        }
        if ("function" == typeof Object.setPrototypeOf)
            a = Object.setPrototypeOf;
        else {
            var d;
            e: {
                var f = {};
                try {
                    f.__proto__ = {
                        o: !0
                    },
                    d = f.o;
                    break e
                } catch (o) {}
                d = !1
            }
            a = d ? function(e, t) {
                if (e.__proto__ = t,
                e.__proto__ !== t)
                    throw new TypeError(e + " is not extensible");
                return e
            }
            : null
        }
        var h = a;
        function v() {
            this.g = !1,
            this.c = null,
            this.m = void 0,
            this.b = 1,
            this.l = this.s = 0,
            this.f = null
        }
        function p(e) {
            if (e.g)
                throw new TypeError("Generator is already running");
            e.g = !0
        }
        function m(e, t, r) {
            return e.b = r,
            {
                value: t
            }
        }
        function y(e) {
            for (var t in this.w = e,
            this.j = [],
            e)
                this.j.push(t);
            this.j.reverse()
        }
        function w(e) {
            this.a = new v,
            this.A = e
        }
        function g(e, t, r, n) {
            try {
                var i = t.call(e.a.c, r);
                if (!(i instanceof Object))
                    throw new TypeError("Iterator result " + i + " is not an object");
                if (!i.done)
                    return e.a.g = !1,
                    i;
                var o = i.value
            } catch (t) {
                return e.a.c = null,
                e.a.i(t),
                x(e)
            }
            return e.a.c = null,
            n.call(e.a, o),
            x(e)
        }
        function x(e) {
            for (; e.a.b; )
                try {
                    var t = e.A(e.a);
                    if (t)
                        return e.a.g = !1,
                        {
                            value: t.value,
                            done: !1
                        }
                } catch (t) {
                    e.a.m = void 0,
                    e.a.i(t)
                }
            if (e.a.g = !1,
            e.a.f) {
                if (t = e.a.f,
                e.a.f = null,
                t.v)
                    throw t.u;
                return {
                    value: t.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
        function b(e) {
            this.next = function(t) {
                return e.h(t)
            }
            ,
            this.throw = function(t) {
                return e.i(t)
            }
            ,
            this.return = function(t) {
                return function(e, t) {
                    p(e.a);
                    var r = e.a.c;
                    return r ? g(e, "return"in r ? r.return : function(e) {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    , t, e.a.return) : (e.a.return(t),
                    x(e))
                }(e, t)
            }
            ,
            c(),
            this[Symbol.iterator] = function() {
                return this
            }
        }
        function _(e, t) {
            var r = new b(new w(t));
            return h && h(r, e.prototype),
            r
        }
        if (v.prototype.h = function(e) {
            this.m = e
        }
        ,
        v.prototype.i = function(e) {
            this.f = {
                u: e,
                v: !0
            },
            this.b = this.s || this.l
        }
        ,
        v.prototype.return = function(e) {
            this.f = {
                return: e
            },
            this.b = this.l
        }
        ,
        w.prototype.h = function(e) {
            return p(this.a),
            this.a.c ? g(this, this.a.c.next, e, this.a.h) : (this.a.h(e),
            x(this))
        }
        ,
        w.prototype.i = function(e) {
            return p(this.a),
            this.a.c ? g(this, this.a.c.throw, e, this.a.h) : (this.a.i(e),
            x(this))
        }
        ,
        "undefined" == typeof FormData || !FormData.prototype.keys) {
            var k = function(e, t) {
                for (var r = 0; r < e.length; r++)
                    t(e[r])
            }
              , S = function(e, t, r) {
                if (2 > arguments.length)
                    throw new TypeError("2 arguments required, but only " + arguments.length + " present.");
                return t instanceof Blob ? [e + "", t, void 0 !== r ? r + "" : "string" == typeof t.name ? t.name : "blob"] : [e + "", t + ""]
            }
              , A = function(e) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                return [e + ""]
            }
              , E = function(e) {
                var t = u(e);
                return e = t.next().value,
                t = t.next().value,
                e instanceof Blob && (e = new File([e],t,{
                    type: e.type,
                    lastModified: e.lastModified
                })),
                e
            }
              , T = "object" == typeof window ? window : "object" == typeof self ? self : this
              , C = T.FormData
              , L = T.XMLHttpRequest && T.XMLHttpRequest.prototype.send
              , I = T.Request && T.fetch;
            i();
            var R = T.Symbol && Symbol.toStringTag
              , O = new WeakMap
              , D = Array.from || function(e) {
                return [].slice.call(e)
            }
            ;
            R && (Blob.prototype[R] || (Blob.prototype[R] = "Blob"),
            "File"in T && !File.prototype[R] && (File.prototype[R] = "File"));
            try {
                new File([],"")
            } catch (o) {
                T.File = function(e, t, r) {
                    return e = new Blob(e,r),
                    r = r && void 0 !== r.lastModified ? new Date(r.lastModified) : new Date,
                    Object.defineProperties(e, {
                        name: {
                            value: t
                        },
                        lastModifiedDate: {
                            value: r
                        },
                        lastModified: {
                            value: +r
                        },
                        toString: {
                            value: function() {
                                return "[object File]"
                            }
                        }
                    }),
                    R && Object.defineProperty(e, R, {
                        value: "File"
                    }),
                    e
                }
            }
            i(),
            c();
            var F = function(e) {
                if (O.set(this, Object.create(null)),
                !e)
                    return this;
                var t = this;
                k(e.elements, (function(e) {
                    e.name && !e.disabled && "submit" !== e.type && "button" !== e.type && ("file" === e.type ? k(e.files || [], (function(r) {
                        t.append(e.name, r)
                    }
                    )) : "select-multiple" === e.type || "select-one" === e.type ? k(e.options, (function(r) {
                        !r.disabled && r.selected && t.append(e.name, r.value)
                    }
                    )) : "checkbox" === e.type || "radio" === e.type ? e.checked && t.append(e.name, e.value) : t.append(e.name, e.value))
                }
                ))
            };
            if ((e = F.prototype).append = function(e, t, r) {
                var n = O.get(this);
                n[e] || (n[e] = []),
                n[e].push([t, r])
            }
            ,
            e.delete = function(e) {
                delete O.get(this)[e]
            }
            ,
            e.entries = function e() {
                var t, r, n, i, o, a, s = this;
                return _(e, (function(e) {
                    switch (e.b) {
                    case 1:
                        t = O.get(s),
                        n = new y(t);
                    case 2:
                        var l;
                        e: {
                            for (l = n; 0 < l.j.length; ) {
                                var c = l.j.pop();
                                if (c in l.w) {
                                    l = c;
                                    break e
                                }
                            }
                            l = null
                        }
                        if (null == (r = l)) {
                            e.b = 0;
                            break
                        }
                        i = u(t[r]),
                        o = i.next();
                    case 5:
                        if (o.done) {
                            e.b = 2;
                            break
                        }
                        return a = o.value,
                        m(e, [r, E(a)], 6);
                    case 6:
                        o = i.next(),
                        e.b = 5
                    }
                }
                ))
            }
            ,
            e.forEach = function(e, t) {
                for (var r = u(this), n = r.next(); !n.done; n = r.next()) {
                    var i = u(n.value);
                    n = i.next().value,
                    i = i.next().value,
                    e.call(t, i, n, this)
                }
            }
            ,
            e.get = function(e) {
                var t = O.get(this);
                return t[e] ? E(t[e][0]) : null
            }
            ,
            e.getAll = function(e) {
                return (O.get(this)[e] || []).map(E)
            }
            ,
            e.has = function(e) {
                return e in O.get(this)
            }
            ,
            e.keys = function e() {
                var t, r, n, i, o = this;
                return _(e, (function(e) {
                    if (1 == e.b && (t = u(o),
                    r = t.next()),
                    3 != e.b)
                        return r.done ? void (e.b = 0) : (n = r.value,
                        i = u(n),
                        m(e, i.next().value, 3));
                    r = t.next(),
                    e.b = 2
                }
                ))
            }
            ,
            e.set = function(e, t, r) {
                O.get(this)[e] = [[t, r]]
            }
            ,
            e.values = function e() {
                var t, r, n, i, o = this;
                return _(e, (function(e) {
                    if (1 == e.b && (t = u(o),
                    r = t.next()),
                    3 != e.b)
                        return r.done ? void (e.b = 0) : (n = r.value,
                        (i = u(n)).next(),
                        m(e, i.next().value, 3));
                    r = t.next(),
                    e.b = 2
                }
                ))
            }
            ,
            F.prototype._asNative = function() {
                for (var e = new C, t = u(this), r = t.next(); !r.done; r = t.next()) {
                    var n = u(r.value);
                    r = n.next().value,
                    n = n.next().value,
                    e.append(r, n)
                }
                return e
            }
            ,
            F.prototype._blob = function() {
                for (var e = "----formdata-polyfill-" + Math.random(), t = [], r = u(this), n = r.next(); !n.done; n = r.next()) {
                    var i = u(n.value);
                    n = i.next().value,
                    i = i.next().value,
                    t.push("--" + e + "\r\n"),
                    i instanceof Blob ? t.push('Content-Disposition: form-data; name="' + n + '"; filename="' + i.name + '"\r\n', "Content-Type: " + (i.type || "application/octet-stream") + "\r\n\r\n", i, "\r\n") : t.push('Content-Disposition: form-data; name="' + n + '"\r\n\r\n' + i + "\r\n")
                }
                return t.push("--" + e + "--"),
                new Blob(t,{
                    type: "multipart/form-data; boundary=" + e
                })
            }
            ,
            F.prototype[Symbol.iterator] = function() {
                return this.entries()
            }
            ,
            F.prototype.toString = function() {
                return "[object FormData]"
            }
            ,
            R && (F.prototype[R] = "FormData"),
            [["append", S], ["delete", A], ["get", A], ["getAll", A], ["has", A], ["set", S]].forEach((function(e) {
                var t = F.prototype[e[0]];
                F.prototype[e[0]] = function() {
                    return t.apply(this, e[1].apply(this, D(arguments)))
                }
            }
            )),
            L && (XMLHttpRequest.prototype.send = function(e) {
                e instanceof F ? (e = e._blob(),
                this.setRequestHeader("Content-Type", e.type),
                L.call(this, e)) : L.call(this, e)
            }
            ),
            I) {
                var N = T.fetch;
                T.fetch = function(e, t) {
                    return t && t.body && t.body instanceof F && (t.body = t.body._blob()),
                    N(e, t)
                }
            }
            T.FormData = F
        }
    }();
    var _s = Object.freeze({
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    })
      , ks = Object.freeze({
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500
    })
      , Ss = Object.freeze({
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        DELETE: "DELETE"
    })
      , As = Object.freeze({
        method: Ss.GET,
        body: null,
        async: !0,
        responseType: null,
        data: null
    });
    function Es() {
        return window.XMLHttpRequest ? new XMLHttpRequest : window.ActiveXObject ? new ActiveXObject("MSXML2.XMLHTTP") : void 0
    }
    function Ts(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , n = Object.assign({}, As, r)
          , i = Es();
        if (i) {
            i.onreadystatechange = function() {
                this.readyState === _s.DONE && ([ks.OK, ks.CREATED, ks.ACCEPTED].includes(this.status) ? t(this.response, this.status, !0) : t(this.response, this.status, !1))
            }
            ;
            var o = n.method
              , a = n.async
              , s = n.responseType
              , l = n.withCredentials
              , c = n.body
              , u = n.data;
            if (r.data)
                switch (o) {
                case Ss.POST:
                    c = FormData.prototype.isPrototypeOf(u) ? u : n.requestHeader.includes("json") ? "string" != typeof u ? JSON.stringify(u) : u : new FormData(u);
                    break;
                default:
                    e = Io(e, u = FormData.prototype.isPrototypeOf(u) ? Array.from(u.entries()) : Object.entries(u))
                }
            return i.open(o, e, a),
            s && (i.responseType = s),
            l && (i.withCredentials = l),
            n.requestHeader && i.setRequestHeader("Content-Type", n.requestHeader),
            i.send(c),
            i
        }
        return null
    }
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.init()
        }
        return Zt(e, [{
            key: "init",
            value: function() {
                var e = this;
                Array.from(document.querySelectorAll(".xrx-fw-connect__social-aggregator")).forEach((function(t) {
                    var r = e.getSources(t);
                    if (r) {
                        bs({
                            type: "GET",
                            url: "https://socialaggregator.external.xerox.com/wp-json/cdu-social/v1/aggregator/?aggregation_strategy=corporate_shuffle&limit=2" + ("&source[]=" + r.split(",").join("&source[]=")),
                            jsonp: "_jsonp",
                            dataType: "JSONP",
                            jsonpCallback: "xrxagg",
                            async: !0,
                            cache: !0,
                            error: function() {
                                console.error("ERROR: Could not fetch feed!!!"),
                                e.setNoFeedError(t)
                            },
                            success: function(r) {
                                e.handleData(r, t)
                            }
                        })
                    } else
                        e.setNoFeedError(t)
                }
                ))
            }
        }, {
            key: "getSources",
            value: function(e) {
                if (e) {
                    var t = So(e, "[data-sources]");
                    if (t && t.dataset.sources)
                        return t.dataset.sources
                }
                return null
            }
        }, {
            key: "setNoFeedError",
            value: function(e) {
                e.innerHTML = "<p>Unable to load social feed. Please try later.</p>"
            }
        }, {
            key: "handleData",
            value: function(e, t) {
                var r, n = this;
                if (t.innerHTML = "",
                !e || e.length < 1)
                    this.setNoFeedError(t);
                else {
                    r = "updated",
                    (e = e.sort((function(e, t) {
                        var n = t[r]
                          , i = e[r];
                        return n < i ? -1 : n > i ? 1 : 0
                    }
                    ))).forEach((function(e) {
                        var r = e;
                        if (r.title = r.title || "",
                        r.excerpt = r.excerpt || "",
                        r.link = r.link || "",
                        r.id = r.id || "",
                        r.native_id = r.native_id || "",
                        r.account = r.account || "",
                        r.account_name = r.account_name || "",
                        r.account_link = r.account_link || "",
                        r.source_id = r.source_id || "",
                        r.medium = r.medium || "",
                        r.medium = r.medium.replace(/ /g, "_").toLowerCase(),
                        r.image_link = r.image_link || "",
                        r.author = r.author || "",
                        r.URLexcerpt = encodeURIComponent(r.excerpt),
                        r.URLtitle = encodeURIComponent(r.title),
                        r[r.medium.replace(/ /g, "_").toLowerCase()] = !0,
                        "twitter" === r.medium)
                            ;
                        else if ("linkedin_company" === r.medium)
                            r.excerpt.length > 75 && (r.excerpt = r.excerpt.substr(0, 75) + "...");
                        else {
                            if ("facebook_page" !== r.medium)
                                return;
                            var i = r.media_id.substr(12);
                            r.postLink = r.account_link + "/posts/" + i
                        }
                        r = n.parseTitle(r),
                        t.innerHTML += n.renderTemplate(r)
                    }
                    )),
                    Array.from(t.querySelectorAll('.tweet-text a[href^="http://"]')).forEach((function(e) {
                        e.setAttribute("target", "_blank")
                    }
                    ))
                }
            }
        }, {
            key: "parseHashTag",
            value: function(e) {
                return e.replace(/[#]+[A-Za-z0-9-_]+/g, (function(e) {
                    var t = e.replace("#", "%23");
                    return e.link("http://twitter.com/search?q=" + t).replace(/^<a/, '$& target="_blank"')
                }
                ))
            }
        }, {
            key: "parseTitle",
            value: function(e) {
                var t = this.socialType(e);
                return e.title = e.title.replace(/\<a([^>]+)\>([^<]+)\<\/a\>/, (function(e, r, n) {
                    var i = "connect-social-" + t + "-" + n;
                    return "<a " + r + ' name="&lid=' + (i = ea(i)) + '" >' + n + "</a>"
                }
                )),
                e
            }
        }, {
            key: "renderTemplate",
            value: function(e) {
                return "twitter" === e.medium ? this.twitterTemplate(e) : this.defaultTemplate(e)
            }
        }, {
            key: "defaultTemplate",
            value: function(e) {
                var t = this.socialType(e);
                return '\n      <div class="xrx-fw-connect__social-aggregator__feed-item xrx-fw-connect__social-aggregator__feed-item--'.concat(t, '">\n        <div class="xrx-fw-connect__social-aggregator__feed-item__icon">\n          <span class="social-icons social-icons--type-').concat(t, '"></span>\n        </div>\n        <div class="xrx-fw-connect__social-aggregator__feed-item__text-side">\n          <p class="xrx-fw-connect__social-aggregator__feed-item__text-side__title">\n            ').concat(e.title, '\n          </p>\n          <p class="xrx-fw-connect__social-aggregator__feed-item__text-side__account">\n            <a name="&lid=connect-social-').concat(t, '-account" aria-label="Xerox ').concat(t, '" href="').concat(e.account_link, '" target="_blank">').concat(e.account, "</a>\n          </p>\n        </div>\n      </div>\n    ")
            }
        }, {
            key: "twitterTemplate",
            value: function(e) {
                return '\n      <div class="xrx-fw-connect__social-aggregator__feed-item  xrx-fw-connect__social-aggregator__feed-item--linkedin">\n        <div class="xrx-fw-connect__social-aggregator__feed-item__icon">\n          <span class="social-icons social-icons--type-twitter"></span>\n        </div>\n        <div class="xrx-fw-connect__social-aggregator__feed-item__text-side">\n          <p class="xrx-fw-connect__social-aggregator__feed-item__text-side__title">\n            '.concat(e.title, '\n          </p>\n          <p class="xrx-fw-connect__social-aggregator__feed-item__text-side__account">\n            <a href="').concat(e.account_link, '" target="_blank" aria-label="twitter-account-name-').concat(e.account_name, '">').concat(e.account_name, '</a>\n          </p>\n          <div class="xrx-fw-connect__social-aggregator__feed-item__text-side__twitter-actions">\n            <a class="xrx-fw-connect__social-aggregator__feed-item__text-side__twitter-actions__reply" name="&lid=connect-social-twitter-reply" target="_blank" href="https://twitter.com/intent/tweet?in_reply_to=').concat(e.native_id, '">Reply</a>\n            <a class="xrx-fw-connect__social-aggregator__feed-item__text-side__twitter-actions__retweet" name="&lid=connect-social-twitter-retweet" target="_blank" href="https://twitter.com/intent/retweet?tweet_id=').concat(e.native_id, '">Retweet</a>\n            <a class="xrx-fw-connect__social-aggregator__feed-item__text-side__twitter-actions__favorite" name="&lid=connect-social-twitter-favorite" target="_blank" href="https://twitter.com/intent/favorite?tweet_id=').concat(e.native_id, '">Favorite</a>\n          </div>\n        </div>\n      </div>\n    ')
            }
        }, {
            key: "socialType",
            value: function(e) {
                var t = "";
                if (e && e.medium)
                    switch (e.medium) {
                    case "twitter":
                        t = "twitter";
                        break;
                    case "linkedin_company":
                        t = "linkedin";
                        break;
                    case "facebook_page":
                        t = "facebook";
                        break;
                    case "youtube_channel":
                        t = "youtube"
                    }
                return t
            }
        }]),
        e
    }())(window,document);
    var Cs = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.window = r,
            this.document = n,
            this.element = t,
            this.video = this.element.querySelector("video");
            var o = go(this.handleWindowResize, this);
            o(),
            this.window.addEventListener("resize", o),
            this.video && (Bo(this.element, "click", "button.xrx-fw-hero__overlay-button--play", (function() {
                i.video.play()
            }
            )),
            Bo(this.element, "click", "button.xrx-fw-hero__overlay-button--replay", (function() {
                i.video.currentTime = 0,
                i.video.play()
            }
            )),
            Bo(this.video, "loadeddata", "", (function() {
                i.drawHeroVideo()
            }
            )),
            Bo(this.video, "canplay", "", (function() {
                i.drawHeroVideo(),
                null !== i.video.getAttribute("autoplay") && i.video.paused && i.video.play()
            }
            )),
            Bo(this.video, "play", "", (function() {
                i.heroVideoTransport(),
                i.element.classList.add("xrx-fw-hero--playing"),
                i.element.classList.remove("xrx-fw-hero--paused"),
                i.element.classList.remove("xrx-fw-hero--ended")
            }
            )),
            Bo(this.video, "paused", "", (function() {
                i.element.classList.add("xrx-fw-hero--paused"),
                i.element.classList.remove("xrx-fw-hero--playing")
            }
            )),
            Bo(this.video, "ended", "", (function() {
                i.element.classList.add("xrx-fw-hero--ended"),
                i.element.classList.remove("xrx-fw-hero--playing")
            }
            )))
        }
        return Zt(e, [{
            key: "handleWindowResize",
            value: function() {
                var e = this.element.querySelector("canvas.xrx-fw-hero__background__desktop__video");
                if (e) {
                    var t = this.element.querySelector("canvas.xrx-fw-hero__text__background__desktop__video")
                      , r = ko(this.element);
                    if (r && r.call(this.element, ".xrx-fw-hero--fixed-aspect")) {
                        var n = e.parentNode.getBoundingClientRect()
                          , i = n.height / n.width;
                        e.setAttribute("width", Math.ceil(n.width)),
                        e.setAttribute("height", Math.ceil(n.width * i))
                    }
                    if (t) {
                        var o = e.getBoundingClientRect();
                        t.setAttribute("width", Math.ceil(o.width)),
                        t.setAttribute("height", Math.ceil(o.height))
                    }
                    this.drawHeroVideo()
                }
                var a = this.element.querySelector(".xrx-fw-hero__background__desktop");
                if (a) {
                    var s = this.element.querySelector(".xrx-fw-hero__text__background__desktop");
                    if (s) {
                        var l = a.getBoundingClientRect();
                        s.style.width = l.width + "px",
                        s.style.height = l.height + "px"
                    }
                }
            }
        }, {
            key: "heroVideoTransport",
            value: function() {
                var e = this;
                window.requestAnimationFrame((function() {
                    e.video.ended || e.video.paused || e.drawHeroVideo(),
                    e.heroVideoTransport()
                }
                ))
            }
        }, {
            key: "drawHeroVideo",
            value: function() {
                var e = this.element.querySelector("canvas.xrx-fw-hero__text__background__desktop__video")
                  , t = this.element.querySelector("canvas.xrx-fw-hero__background__desktop__video");
                if (t && t.offsetParent) {
                    var r, n = t.getBoundingClientRect();
                    e && ((r = e.getContext("2d")).save(),
                    r.filter = "blur(10px)",
                    r.drawImage(this.video, 0, 0, n.width, n.height),
                    r.restore()),
                    (r = t.getContext("2d")).save(),
                    r.drawImage(this.video, 0, 0, n.width, n.height),
                    r.restore()
                }
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.window = t,
        this.document = r,
        this.elements = Array.from(r.querySelectorAll(".xrx-fw-hero"));
        for (var n = 0, i = this.elements.length; n < i; n++) {
            var o = this.elements[n];
            new Cs(o,t,r)
        }
    }
    (window,document);
    var Ls = Ro()
      , Is = function e(t, r, n) {
        Qt(this, e),
        this.window = r,
        this.document = n,
        this.element = t;
        var i = this.element.querySelector(".xrx-fw-homepage-hero__background--video");
        if (i && !i.classList.contains("xrx-fw-homepage-hero__background--video-alwaysshow"))
            for (var o = function() {
                var e = s[a]
                  , t = parseInt(i.getAttribute("timing"), 10) || 12;
                Bo(e, "timeupdate", "", (function() {
                    e.currentTime > t ? (i.classList.add("xrx-fw-homepage-hero__background--video-show"),
                    Ls && void 0 !== e.currentTime && "undefined" !== e.duration && e.currentTime >= e.duration && (e.currentTime = e.duration - .1,
                    e.pause())) : e.currentTime < t && i.classList.contains("xrx-fw-homepage-hero__background--video-show") && i.classList.remove("xrx-fw-homepage-hero__background--video-show")
                }
                ))
            }, a = 0, s = Array.from(i.querySelectorAll(".xrx-fw-homepage-hero__video")); a < s.length; a++)
                o()
    };
    new function e(t, r) {
        Qt(this, e),
        this.window = t,
        this.document = r,
        this.elements = Array.from(r.querySelectorAll(".xrx-fw-homepage-hero"));
        for (var n = 0, i = this.elements.length; n < i; n++) {
            var o = this.elements[n];
            new Is(o,t,r)
        }
    }
    (window,document);
    var Rs = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    ;
    Ri("search", 1, (function(e, t, r) {
        return [function(t) {
            var r = o(this)
              , n = null == t ? void 0 : t[e];
            return void 0 !== n ? n.call(t, r) : new RegExp(t)[e](String(r))
        }
        , function(e) {
            var n = r(t, e, this);
            if (n.done)
                return n.value;
            var i = g(e)
              , o = String(this)
              , a = i.lastIndex;
            Rs(a, 0) || (i.lastIndex = 0);
            var s = Ti(i, o);
            return Rs(i.lastIndex, a) || (i.lastIndex = a),
            null === s ? -1 : s.index
        }
        ]
    }
    ));
    function Os(e) {
        var t = {
            application: "framework"
        };
        window.digitalData && (window.digitalData.environment && window.digitalData.environment.platform && (t.site = window.digitalData.environment.platform),
        window.digitalData.locale && (window.digitalData.locale.tier && (t.tier = window.digitalData.locale.tier),
        window.digitalData.locale.locale && (t.locale = window.digitalData.locale.locale),
        window.digitalData.locale.eu && (t.europe = window.digitalData.locale.eu))),
        t.useragent = navigator.userAgent,
        t.url = window.location.href,
        t.referrer = document.referrer,
        t.verb = "POST";
        for (var r = 0, n = Object.entries(e); r < n.length; r++) {
            var i = rr(n[r], 2)
              , o = i[0]
              , a = i[1];
            t[o] = a
        }
        Ts("https://logs-01.loggly.com/inputs/063b7d68-f2f4-43c3-8ef2-0d75c3ae1092/tag/http/", (function(e, t) {}
        ), {
            method: "POST",
            responseType: "json",
            requestHeader: "application/json",
            data: t
        })
    }
    var Ds = function() {
        function e(t, r, n, i) {
            Qt(this, e),
            this.element = t,
            this.window = n,
            this.document = i,
            this.loadForm = this.loadForm.bind(this),
            this.marketoFormLoaded = this.marketoFormLoaded.bind(this),
            this.marketoForm = t.querySelector("form"),
            this.marketoFormIndex = r,
            this.embeddedTranslations = [],
            this.formLoaded = !1,
            this.translationComplete = !1,
            this.prefillData = {
                fields: void 0,
                querystring: void 0,
                session: void 0,
                marketo: void 0,
                inferred: void 0,
                merged: void 0
            },
            this.prefillComplete = !1,
            this.selectOptionsComplete = !1,
            this.config = this.marketoForm.dataset,
            "/" !== this.config.apiRoot.slice(this.config.apiRoot.length - 1) && (this.config.apiRoot += "/"),
            this.getPrefillData(),
            this.logglyArgs = {
                destination: {
                    marketo: !0
                },
                event_type: "marketo_submission",
                form: this.config.analyticsFormName,
                marketo_id: this.config.formId,
                module: "marketo"
            },
            this.config.pageLocale ? this.pageLocale = this.config.pageLocale : this.pageLocale = No(),
            this.loadForm()
        }
        return Zt(e, [{
            key: "loadForm",
            value: function() {
                var e = this
                  , t = setInterval((function() {
                    e.window.MktoForms2 && (e.window.MktoForms2.loadForm(e.config.host, e.config.instance, e.config.formId, e.marketoFormLoaded),
                    e.window.MktoForms2.onFormRender((function(t) {
                        e.replaceTextWithTranslations(),
                        e.redrawFields(),
                        Ko(e.marketoForm, po.MARKETO_FORM_READY)
                    }
                    )),
                    clearInterval(t))
                }
                ), 250)
            }
        }, {
            key: "marketoFormLoaded",
            value: function(e) {
                var t = this;
                if (e && e.mktoFormInstance && (e = e.mktoFormInstance),
                e) {
                    var r = e.getFormElem();
                    if (r.length > 0) {
                        this.marketoForm = r[0],
                        this.marketoForm.mktoFormInstance || (this.marketoForm.mktoFormInstance = e),
                        this.formLoaded = !0;
                        var n = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, s = this.getMarketoFields()[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                                var l = a.value
                                  , c = l.querySelectorAll("label[for]")
                                  , u = l.querySelectorAll("span")
                                  , d = !0
                                  , f = !1
                                  , h = void 0;
                                try {
                                    for (var v, p = u[Symbol.iterator](); !(d = (v = p.next()).done); d = !0) {
                                        v.value.id += "_" + this.config.formId + "_" + this.marketoFormIndex
                                    }
                                } catch (e) {
                                    f = !0,
                                    h = e
                                } finally {
                                    try {
                                        d || null == p.return || p.return()
                                    } finally {
                                        if (f)
                                            throw h
                                    }
                                }
                                var m = !0
                                  , y = !1
                                  , w = void 0;
                                try {
                                    for (var g, x = c[Symbol.iterator](); !(m = (g = x.next()).done); m = !0) {
                                        var b = g.value;
                                        if (b) {
                                            var _ = b.getAttribute("for");
                                            _ && (b.id += "_" + this.config.formId + "_" + this.marketoFormIndex,
                                            b.setAttribute("for", _ + "_" + this.config.formId + "_" + this.marketoFormIndex));
                                            var k = l.querySelectorAll('[id="' + _ + '"]')
                                              , S = !0
                                              , A = !1
                                              , E = void 0;
                                            try {
                                                for (var T, C = k[Symbol.iterator](); !(S = (T = C.next()).done); S = !0) {
                                                    var L = T.value;
                                                    if (L) {
                                                        var I = L.getAttribute("aria-labelledby").split(" ")
                                                          , R = []
                                                          , O = !0
                                                          , D = !1
                                                          , F = void 0;
                                                        try {
                                                            for (var N, q = I[Symbol.iterator](); !(O = (N = q.next()).done); O = !0) {
                                                                var H = N.value;
                                                                H += "_" + this.config.formId + "_" + this.marketoFormIndex,
                                                                R.push(H)
                                                            }
                                                        } catch (e) {
                                                            D = !0,
                                                            F = e
                                                        } finally {
                                                            try {
                                                                O || null == q.return || q.return()
                                                            } finally {
                                                                if (D)
                                                                    throw F
                                                            }
                                                        }
                                                        I = R.join(" "),
                                                        L.setAttribute("aria-labelledby", I),
                                                        L.id = _ + "_" + this.config.formId + "_" + this.marketoFormIndex
                                                    }
                                                }
                                            } catch (e) {
                                                A = !0,
                                                E = e
                                            } finally {
                                                try {
                                                    S || null == C.return || C.return()
                                                } finally {
                                                    if (A)
                                                        throw E
                                                }
                                            }
                                        }
                                    }
                                } catch (e) {
                                    y = !0,
                                    w = e
                                } finally {
                                    try {
                                        m || null == x.return || x.return()
                                    } finally {
                                        if (y)
                                            throw w
                                    }
                                }
                            }
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        "en" === this.pageLocale.substring(0, 2) || this.config.noTranslate || !this.config.apiRoot ? (this.translationComplete = !0,
                        this.isEverythingReady()) : this.config.apiRoot && this.translateForm(),
                        this.config.selectOptions ? this.injectSelectOptions() : (this.selectOptionsComplete = !0,
                        this.isEverythingReady()),
                        Bo(this.marketoForm, "focus", ".xrx-fw-marketo-form input", (function(e) {
                            t.trackOnce("formpres")
                        }
                        )),
                        Bo(this.marketoForm, "change", ".xrx-fw-marketo-form input", (function(e) {
                            t.trackOnce("formpres")
                        }
                        )),
                        e.onValidate((function(e) {
                            !1 === e && (t.trackMarketoForm("formerror"),
                            Os(tr({}, t.logglyArgs, {
                                exception: "Failure",
                                event_type: "marketo_submission_failure"
                            })))
                        }
                        )),
                        e.onSuccess((function(e, r) {
                            Ja(),
                            t.marketoForm.style.display = "none";
                            var n = t.marketoForm.parentElement.querySelector(".xrx-fw-marketo-form__content__intro");
                            n && (n.style.display = "none"),
                            Ko(t.marketoForm, po.MARKETO_FORM_SUCCESS, {
                                values: e
                            }),
                            t.trackMarketoForm("formsub"),
                            t.savePrefillDataToSession(e),
                            Os(t.logglyArgs);
                            var i = t.marketoForm.parentElement.querySelector(".xrx-fw-marketo-form__content__confirmation");
                            return i && (i.style.display = "block"),
                            !1
                        }
                        ))
                    }
                }
            }
        }, {
            key: "getMarketoFields",
            value: function() {
                var e = this.marketoForm.querySelectorAll(".mktoFieldWrap")
                  , t = this.marketoForm.querySelectorAll(".mktoButtonWrap");
                return Array.from(e).concat(Array.from(t))
            }
        }, {
            key: "getPrefillData",
            value: function() {
                this.prefillData.fields = this.getFieldsToPrefill();
                var e = Object.keys(this.prefillData.fields);
                this.prefillData.session = this.getPrefillDataFromSession(e),
                this.prefillData.querystring = this.prefillQuerystringData(e),
                this.prefillData.inferred = this.prefillInferredData(),
                this.config.apiRoot ? this.getPrefillDataFromMarketo(e) : this.prefillDataReady()
            }
        }, {
            key: "getPrefillDataFromSession",
            value: function(e) {
                var t = window.sessionStorage.getItem("prefillMarketoData");
                if (t) {
                    var r = {}
                      , n = JSON.parse(t)
                      , i = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var s, l = e[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var c = s.value;
                            r[c.toLowerCase()] = n[c]
                        }
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return r
                }
                return null
            }
        }, {
            key: "savePrefillDataToSession",
            value: function(e) {
                if (e && Qa(Ya)) {
                    var t = {}
                      , r = window.sessionStorage.getItem("prefillMarketoData");
                    r && (t = JSON.parse(r) || {});
                    var n = Object.keys(this.prefillData.fields);
                    Object.entries(e).forEach((function(r) {
                        var i = rr(r, 2)
                          , o = i[0]
                          , a = (i[1],
                        o.toLowerCase());
                        n.includes(a) && (t[a] = e[o] || t[a])
                    }
                    )),
                    delete t.id,
                    delete t.cookies,
                    window.sessionStorage.setItem("prefillMarketoData", JSON.stringify(t))
                }
            }
        }, {
            key: "getPrefillDataFromMarketo",
            value: function(e) {
                var t = this
                  , r = ""
                  , n = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                        var l = a.value;
                        "locale" !== l && (r += "&fields=" + l)
                    }
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                Ts(this.config.apiRoot + "api/marketo/prefill?instance=" + this.config.instance + r, (function(r, n, i) {
                    return t.handleMarketoData(r, n, i, e)
                }
                ), {
                    method: "GET",
                    responseType: "json",
                    requestHeader: "application/json",
                    withCredentials: !0
                })
            }
        }, {
            key: "handleMarketoData",
            value: function(e, t, r, n) {
                if (e && e.success) {
                    var i = e && e.result && e.result[0];
                    if (i) {
                        var o = {};
                        Object.entries(i).forEach((function(e) {
                            var t = rr(e, 2)
                              , r = t[0]
                              , i = t[1];
                            n.includes(r.toLowerCase()) && (o[r.toLowerCase()] = i)
                        }
                        )),
                        this.prefillData.marketo = o
                    }
                } else
                    e && e.errors && e.errors.length > 0 ? console.error("Marketo prefill: Error - " + e.errors[0].message) : console.error("Marketo prefill: Unknown Error");
                this.prefillDataReady()
            }
        }, {
            key: "prefillDataReady",
            value: function() {
                for (var e = this.prefillData, t = e.fields, r = e.querystring, n = e.session, i = e.marketo, o = e.inferred, a = {}, s = 0, l = Object.keys(t); s < l.length; s++) {
                    var c = l[s];
                    a[c] = t && t[c] || r && r[c] || n && n[c] || i && i[c] || o && o[c]
                }
                Object.keys(a).length > 0 && (this.savePrefillDataToSession(a),
                this.prefillData.merged = a),
                this.prefillComplete = !0,
                this.isEverythingReady()
            }
        }, {
            key: "prefillQuerystringData",
            value: function(e) {
                var t = {};
                new URLSearchParams(window.location.search).forEach((function(r, n) {
                    e && e.includes(n.toLowerCase()) && (t[n.toLowerCase()] = r)
                }
                ));
                var r = this.window.location.hash;
                if (r) {
                    r = r.substr(1).split("&");
                    var n = !0
                      , i = !1
                      , o = void 0;
                    try {
                        for (var a, s = r[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                            var l = a.value.split("=");
                            2 === l.length && (t[l[0]] = t[1])
                        }
                    } catch (e) {
                        i = !0,
                        o = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                }
                if (this.prefillData && 0 !== Object.entries(t).length)
                    return t
            }
        }, {
            key: "prefillInferredData",
            value: function() {
                var e = {};
                if (this.window && this.window.navigator && this.window.navigator.language) {
                    var t = rr(this.window.navigator.language.split("-") || [], 2)
                      , r = t[0]
                      , n = t[1];
                    e.locale = r,
                    e.language = r,
                    e.country = n && n.toUpperCase()
                }
                return e
            }
        }, {
            key: "getFieldsToPrefill",
            value: function() {
                var e = {
                    firstname: void 0,
                    locale: void 0,
                    language: void 0,
                    lastname: void 0,
                    email: void 0,
                    phone: void 0,
                    country: void 0
                };
                if (this.window.digitalData && this.window.digitalData.locale && this.window.digitalData.locale.locale) {
                    var t = rr(this.window.digitalData.locale.locale.split("_") || [], 2)
                      , r = t[0]
                      , n = t[1];
                    e.locale = r,
                    e.language = r,
                    e.country = n && n.toUpperCase()
                }
                if ("US" === e.country && (e.email_opt_in__c = !1),
                this.config.prefillFields) {
                    var i = this.config.prefillFields.split(",")
                      , o = !0
                      , a = !1
                      , s = void 0;
                    try {
                        for (var l, c = i[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                            var u = rr(l.value.split("|"), 2)
                              , d = u[0]
                              , f = u[1];
                            d && (e[d.toLowerCase()] = f)
                        }
                    } catch (e) {
                        a = !0,
                        s = e
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (a)
                                throw s
                        }
                    }
                }
                return e
            }
        }, {
            key: "injectSelectOptions",
            value: function() {
                var e = this.config.selectOptions;
                e = e.split(",").filter((function(e) {
                    return !!e
                }
                ));
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value
                          , s = a + "_" + this.config.formId + "_" + this.marketoFormIndex;
                        a = (a = a.toLowerCase()).charAt(0).toUpperCase() + a.slice(1),
                        a = "select".concat(a, "Data");
                        var l = this.config[a];
                        if (l) {
                            l = l.split(",");
                            var c = []
                              , u = !0
                              , d = !1
                              , f = void 0;
                            try {
                                for (var h, v = l[Symbol.iterator](); !(u = (h = v.next()).done); u = !0) {
                                    var p = h.value.split(":");
                                    if (p.length > 0) {
                                        var m = {}
                                          , y = p[1].startsWith(">");
                                        m.defaultSelect = y,
                                        m.select = y,
                                        y && (p[1] = p[1].substr(1)),
                                        m.value = p[1] ? p[1] : p[0],
                                        m.text = p[0],
                                        c.push(m)
                                    }
                                }
                            } catch (e) {
                                d = !0,
                                f = e
                            } finally {
                                try {
                                    u || null == v.return || v.return()
                                } finally {
                                    if (d)
                                        throw f
                                }
                            }
                            c.sort((function(e, t) {
                                return e.text.toLowerCase().localeCompare(t.text.toLowerCase())
                            }
                            ));
                            for (var w = 0, g = c; w < g.length; w++) {
                                var x = g[w]
                                  , b = !0
                                  , _ = !1
                                  , k = void 0;
                                try {
                                    for (var S, A = this.getMarketoFields()[Symbol.iterator](); !(b = (S = A.next()).done); b = !0) {
                                        var E = S.value.querySelector("select#" + s);
                                        if (E) {
                                            var T = new Option(x.text,x.value,x.defaultSelect,x.select);
                                            E.add(T)
                                        }
                                    }
                                } catch (e) {
                                    _ = !0,
                                    k = e
                                } finally {
                                    try {
                                        b || null == A.return || A.return()
                                    } finally {
                                        if (_)
                                            throw k
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
                this.selectOptionsComplete = !0,
                this.isEverythingReady()
            }
        }, {
            key: "populateFields",
            value: function() {
                if (this.marketoForm.mktoFormInstance) {
                    var e = this.marketoForm.mktoFormInstance.getValues()
                      , t = Object.keys(this.getFieldsToPrefill())
                      , r = {};
                    if (this.prefillData && this.prefillData.merged)
                        for (var n in e)
                            for (var i = 0, o = Object.entries(this.prefillData.merged); i < o.length; i++) {
                                var a = rr(o[i], 2)
                                  , s = a[0]
                                  , l = a[1];
                                n.toLowerCase() === s.toLowerCase() && t.includes(s) && (r[n] = l)
                            }
                    this.marketoForm.mktoFormInstance.vals(r)
                }
            }
        }, {
            key: "redrawFields",
            value: function() {
                for (var e = Array.from(this.marketoForm.querySelectorAll(".mktoCheckboxList")), t = Array.from(this.marketoForm.querySelectorAll(".mktoRadioList")), r = Array.from(this.marketoForm.querySelectorAll(".mktoRangeField")), n = Array.from(document.querySelectorAll("#mktoStyleLoaded")), i = 0, o = e; i < o.length; i++) {
                    var a = o[i]
                      , s = a.querySelectorAll("label");
                    if (1 === s.length) {
                        a.classList.remove("mktoCheckboxList"),
                        a.classList.add("mktoCheckbox"),
                        a.parentElement.classList.add("isCheckbox");
                        var l = a.querySelector(".mktoCheckbox > label");
                        "" === l.textContent && (l.setAttribute("role", "presentation"),
                        l.setAttribute("id", ""))
                    } else
                        s.length > 1 && a.parentElement.classList.add("isCheckboxList")
                }
                for (var c = 0, u = t; c < u.length; c++) {
                    u[c].parentElement.classList.add("isRadioList")
                }
                for (var d = 0, f = r; d < f.length; d++) {
                    f[d].parentElement.classList.add("isRange")
                }
                for (var h = 0, v = n; h < v.length; h++) {
                    var p = v[h];
                    0 !== n.indexOf(p) && p.remove()
                }
            }
        }, {
            key: "setErrorMessages",
            value: function() {
                for (var e = 0, t = Array.from(this.marketoForm.querySelectorAll("div.mktoRequiredField")); e < t.length; e++) {
                    var r = t[e]
                      , n = r.querySelector(".mktoField")
                      , i = r.querySelector("label");
                    if (i && n) {
                        var o = i.textContent.replace(/[*:]/g, "")
                          , a = "";
                        if (n.classList.contains("mktoEmailField"))
                            a = this.config.emailError;
                        else if (n.classList.contains("mktoField"))
                            switch (n.tagName) {
                            case "SELECT":
                                a = this.config.selectError;
                                break;
                            case "INPUT":
                            default:
                                a = this.config.fieldError
                            }
                        var s = a.replace("[fieldname]", o)
                          , l = document.createElement("div");
                        l.className = "marketo-error",
                        l.innerHTML = s,
                        r.appendChild(l)
                    }
                }
            }
        }, {
            key: "translateForm",
            value: function() {
                try {
                    this.embeddedTranslations && 0 === this.embeddedTranslations.length && (this.embeddedTranslations = ("string" == typeof this.config.translations ? JSON.parse(this.config.translations) : this.config.translations) || [])
                } catch (e) {
                    this.embeddedTranslations = []
                }
                Array.isArray(this.embeddedTranslations) && this.embeddedTranslations.length > 0 && this.replaceTextWithTranslations(),
                this.translationComplete = !0,
                this.isEverythingReady()
            }
        }, {
            key: "replaceTextWithTranslations",
            value: function() {
                var e = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var n, i = this.embeddedTranslations[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                        var o = n.value;
                        o.source = Mo(o.source),
                        o.translation = Mo(o.translation);
                        var a = !0
                          , s = !1
                          , l = void 0;
                        try {
                            for (var c, u = this.getElmsToTranslate()[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                                var d = c.value
                                  , f = this.getElmTranslationDetails(d);
                                if (f && f.text && f.key)
                                    if (o.source.replace(/[*:]/g, "").toLowerCase() === f.text.toLowerCase())
                                        if ("LABEL" === d.nodeName)
                                            d.innerHTML = d.innerHTML.replace(f.text, o.translation);
                                        else if ("OPTION" === d.nodeName)
                                            d.innerHTML = o.translation;
                                        else if ("BUTTON" === d.nodeName) {
                                            if (d.classList.contains("btn-default"))
                                                d.setAttribute("title", o.translation),
                                                d.querySelector("span").textContent = o.translation;
                                            else
                                                d.innerHTML = o.translation
                                        } else
                                            "mktoHtmlText" === d.classList.contains ? d.innerHTML = "<p>".concat(o.translation, "</p>") : "SPAN" === d.nodeName && (d.innerHTML = o.translation)
                            }
                        } catch (e) {
                            s = !0,
                            l = e
                        } finally {
                            try {
                                a || null == u.return || u.return()
                            } finally {
                                if (s)
                                    throw l
                            }
                        }
                        o.source === this.config.fieldError ? this.config.fieldError = o.translation : o.source === this.config.emailError ? this.config.emailError = o.translation : o.source === this.config.selectError && (this.config.selectError = o.translation)
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
            }
        }, {
            key: "getElmsToTranslate",
            value: function() {
                var e = []
                  , t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.getMarketoFields()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        for (var a = i.value, s = Array.from(a.querySelectorAll("label")), l = 0, c = s; l < c.length; l++) {
                            var u = c[l];
                            e.push(u)
                        }
                        var d = a.querySelector("select");
                        if (d) {
                            var f = !0
                              , h = !1
                              , v = void 0;
                            try {
                                for (var p, m = d.options[Symbol.iterator](); !(f = (p = m.next()).done); f = !0) {
                                    var y = p.value;
                                    if (e.push(y),
                                    "Country" === d.id)
                                        break
                                }
                            } catch (e) {
                                h = !0,
                                v = e
                            } finally {
                                try {
                                    f || null == m.return || m.return()
                                } finally {
                                    if (h)
                                        throw v
                                }
                            }
                        }
                        var w = a.querySelector(".mktoButton");
                        w && e.push(w);
                        var g = a.querySelector(".mktoHtmlText");
                        g && e.push(g);
                        var x = a.querySelector("button.btn-default")
                          , b = a.querySelector("button.btn-default > span");
                        x && b && e.push(b)
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
                return e
            }
        }, {
            key: "getElmTranslationDetails",
            value: function(e) {
                var t, r;
                if (e && ("LABEL" === e.nodeName ? r = "mkto_" + (t = e.textContent.replace(/[*:]/g, "")).toLowerCase().replace(/[ .,&]/g, "") : "OPTION" === e.nodeName ? r = "mkto_" + (t = e.text).toLowerCase().replace(/[ .,&]/g, "") : "BUTTON" === e.nodeName ? r = "mkto_" + (t = e.textContent.replace(/[*:]/g, "")).toLowerCase().replace(/[ .,&]/g, "") : "SPAN" === e.nodeName ? r = "mkto_" + (t = e.textContent).toLowerCase().replace(/[ .,&]/g, "") : e.classList.contains("mktoHtmlText") && (r = "mkto_" + (t = e.innerText.replace(/[\r\n]/g, "")).toLowerCase().replace(/[ .,&]/g, "")),
                t && r))
                    return {
                        text: t,
                        key: r
                    }
            }
        }, {
            key: "isEverythingReady",
            value: function() {
                this.formLoaded && this.translationComplete && this.prefillComplete && this.selectOptionsComplete && (this.redrawFields(),
                this.setErrorMessages(),
                this.prefillData && this.prefillData.merged && this.populateFields(),
                this.marketoForm.id += "_" + this.marketoFormIndex,
                Ko(this.marketoForm, po.MARKETO_FORM_READY),
                this.marketoForm.style.display = "")
            }
        }, {
            key: "trackOnce",
            value: function(e) {
                this.marketoForm.tracked || (this.marketoForm.tracked = {}),
                this.marketoForm.tracked[e] || (this.marketoForm.tracked[e] = !0,
                this.trackMarketoForm(e))
            }
        }, {
            key: "trackMarketoForm",
            value: function(e) {
                var t = ""
                  , r = this.document.querySelector("#xrx-omniture-setup");
                r ? r.dataset.lob && (t = r.dataset.lob) : this.window.xrx_vars ? this.window.xrx_vars.lob && (t = this.window.xrx_vars.lob) : t = "corp",
                "formsub" === e && void 0 !== window.dataLayer && this.config.analyticsFormName && window.dataLayer.push({
                    event: "formSubmit",
                    eventDesc: {
                        category: this.config.analyticsFormName,
                        subcategory: t,
                        type: "marketoForm"
                    }
                }),
                ra(e, "marketo-" + t + "-" + this.config.analyticsFormName, "marketo-" + t + "-" + this.config.analyticsFormName)
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e);
        var n = Array.from(r.querySelectorAll(".xrx-fw-marketo-form"));
        if (n.length > 0) {
            if (!t.MktoForms2) {
                var i = r.createElement("script");
                i.setAttribute("src", "//app-lon02.marketo.com/js/forms2/js/forms2.min.js"),
                i.setAttribute("defer", ""),
                n[0].appendChild(i)
            }
            for (var o = 0, a = n; o < a.length; o++) {
                var s = a[o];
                new Ds(s,n.indexOf(s),t,r)
            }
        }
    }
    (window,document);
    var Fs = ".xrx-fw-modal:not(.xrx-fw-modal--stateful)";
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.elements = Array.from(r.querySelectorAll(Fs)),
            this.openIfWithinTimeContraint(),
            this.thereCanBeOnlyOne(),
            this.addCloseLinkHandlers(),
            this.addOpenLinkHandlers()
        }
        return Zt(e, [{
            key: "openIfWithinTimeContraint",
            value: function() {
                this.elements.forEach((function(e) {
                    var t = e.dataset.startTime
                      , r = e.dataset.endTime
                      , n = e.dataset.timezoneOffset;
                    if (t && r) {
                        var i = new Date
                          , o = new Date(t)
                          , a = new Date(r);
                        if (void 0 !== n) {
                            var s = 60 * parseInt(n) * 60 * 1e3;
                            o = new Date(o.getTime() - s),
                            a = new Date(a.getTime() - s),
                            i = new Date(i.getTime() + 60 * i.getTimezoneOffset() * 1e3)
                        }
                        i >= o && i <= a && e.classList.add("xrx-fw-modal--open")
                    }
                }
                ))
            }
        }, {
            key: "addCloseLinkHandlers",
            value: function() {
                var e = this;
                Bo(document, po.MODAL_CLOSE, null, (function(t) {
                    if (t.detail && (t.detail.id || t.detail.modal)) {
                        var r = t.detail.modal ? t.detail.modal : document.querySelector("".concat(Fs, "#").concat(t.detail.id));
                        if (r) {
                            if (r.classList.remove("xrx-fw-modal--open"),
                            document.body.classList.remove("xrx-fw-modal__open"),
                            r.classList.contains("xrx-fw-modal--youtube")) {
                                var n = r.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                                n && n.xrxFwYoutube && n.xrxFwYoutube.stopVideo && n.xrxFwYoutube.stopVideo()
                            }
                            na(e.getAnalyticsLidProperty(r) + "-close")
                        }
                    }
                }
                )),
                Bo(document, "click", "".concat(Fs, " .xrx-fw-modal__close, ").concat(Fs, " .xrx-fw-modal__overlay"), (function(e) {
                    var t = So(e.desiredTarget, Fs);
                    Ko(document, po.MODAL_CLOSE, {
                        modal: t
                    })
                }
                ))
            }
        }, {
            key: "addOpenLinkHandlers",
            value: function() {
                var e = this;
                Bo(document, "click", "a[href^='#']", (function(t) {
                    var r = t.desiredTarget;
                    if (r && r.getAttribute("href")) {
                        var n = r.getAttribute("href").replace(/#/, "");
                        e.openModal(n, r) && t.preventDefault()
                    }
                }
                ))
            }
        }, {
            key: "findModalElemById",
            value: function(e) {
                var t = document.getElementById(e);
                if (t && ko(t).call(t, Fs))
                    return t;
                return null
            }
        }, {
            key: "getAnalyticsLidProperty",
            value: function(e) {
                var t = "modal";
                return e.dataset.lid && (t = e.dataset.lid),
                t
            }
        }, {
            key: "openModal",
            value: function(e, t) {
                var r = this.findModalElemById(e);
                if (r) {
                    var n = "".concat(Fs, ".").concat("xrx-fw-modal--open")
                      , i = Array.from(document.querySelectorAll(n));
                    if (i.length > 0 && i.map((function(e) {
                        e.classList.remove("xrx-fw-modal--open")
                    }
                    )),
                    r.classList.contains("xrx-fw-modal--youtube")) {
                        var o = t.dataset.xrxFwVideoUrl;
                        if (o) {
                            var a = r.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                            a && (a.setAttribute("data-xrx-fw-video-autoplay", null),
                            a.setAttribute("data-xrx-fw-video-url", o),
                            a.setAttribute("data-xrx-fw-base-lid", oa(t)))
                        }
                    }
                    return r.classList.add("xrx-fw-modal--open"),
                    document.body.classList.add("xrx-fw-modal__open"),
                    na(this.getAnalyticsLidProperty(r) + "-open"),
                    !0
                }
                return !1
            }
        }, {
            key: "thereCanBeOnlyOne",
            value: function() {
                var e = "".concat(Fs, ".").concat("xrx-fw-modal--open")
                  , t = Array.from(document.querySelectorAll(e));
                t.shift(),
                t.forEach((function(e) {
                    e.classList.remove("xrx-fw-modal--open")
                }
                ))
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.hookUpEventHandlers(),
            Array.from(r.querySelectorAll(".xrx-fw-product-specifications")).forEach((function(e) {
                var t = e.querySelector(".xrx-fw-dropdown-menu");
                t && n.displaySpecification(t)
            }
            ))
        }
        return Zt(e, [{
            key: "hookUpEventHandlers",
            value: function() {
                var e = this;
                Bo(this.document, "change", ".xrx-fw-product-specifications .xrx-fw-dropdown-menu", (function(t) {
                    var r = t.desiredTarget;
                    e.displaySpecification(r)
                }
                ))
            }
        }, {
            key: "displaySpecification",
            value: function(e) {
                var t = So(e, ".xrx-fw-product-specifications")
                  , r = Array.from(t.querySelectorAll(".xrx-fw-product-specifications__item"));
                r.forEach((function(e) {
                    e.classList.remove("xrx-fw-product-specifications__item--show")
                }
                )),
                r.length > e.selectedIndex && r[e.selectedIndex].classList.add("xrx-fw-product-specifications__item--show"),
                Array.from(t.querySelectorAll(".xrx-fw-dropdown-menu")).forEach((function(t) {
                    t !== e && (t.selectedIndex = e.selectedIndex)
                }
                ))
            }
        }]),
        e
    }())(window,document);
    var Ns = "".concat(".xrx-fw-product-videos", " .xrx-fw-carousel-video a[href]")
      , qs = "".concat(".xrx-fw-product-videos", " ").concat(".xrx-fw-product-videos", "__single-title");
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.carouselItemClickHandler = this.carouselItemClickHandler.bind(this),
            this.carouselChangeHandler = this.carouselChangeHandler.bind(this),
            this.init()
        }
        return Zt(e, [{
            key: "init",
            value: function() {
                Bo(this.document, "click", Ns, this.carouselItemClickHandler)
            }
        }, {
            key: "carouselItemClickHandler",
            value: function(e) {
                var t = e.desiredTarget
                  , r = So(t, ".xrx-fw-product-videos");
                if (r) {
                    var n = r.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                    n && (n.setAttribute("data-xrx-fw-video-autoplay", !0),
                    this.updatePlayer(n, t),
                    e.preventDefault())
                }
            }
        }, {
            key: "carouselChangeHandler",
            value: function(e) {
                var t = e.detail.index
                  , r = e.desiredTarget
                  , n = Array.from(r.querySelectorAll(".xrx-fw-carousel__item"));
                if (n.length >= t) {
                    var i = n[t - 1].querySelector("a.xrx-fw-carousel-video[href]");
                    if (i) {
                        var o = r.querySelector(".xrx-fw-youtube-video__vid[data-xrx-fw-video-url]");
                        o && this.updatePlayer(o, i)
                    }
                }
            }
        }, {
            key: "setVideoAttribute",
            value: function(e, t, r) {
                var n = t.getAttribute(r);
                n ? e.setAttribute(r, n) : e.removeAttribute(r)
            }
        }, {
            key: "updatePlayer",
            value: function(e, t) {
                var r = t.querySelector(".xrx-fw-lazy-background")
                  , n = e.parentNode.querySelector(".xrx-fw-lazy-background")
                  , i = t.querySelector(".xrx-fw-carousel-video__content");
                if (i) {
                    var o = i.innerText
                      , a = document.querySelector(qs);
                    a && (a.querySelector("h4").innerText = o)
                }
                r && n && e.parentNode.replaceChild(r.cloneNode(!0), n),
                this.setVideoAttribute(e, t, "data-xrx-fw-video-plays-inline"),
                this.setVideoAttribute(e, t, "data-xrx-fw-video-captions"),
                this.setVideoAttribute(e, t, "data-xrx-fw-video-captions-locale"),
                this.setVideoAttribute(e, t, "data-xrx-fw-video-interface-locale"),
                this.setVideoAttribute(e, t, "data-xrx-fw-video-mute"),
                e.setAttribute("data-xrx-fw-base-lid", oa(t)),
                e.setAttribute("data-xrx-fw-video-url", t.getAttribute("href"))
            }
        }]),
        e
    }())(window,document);
    var Hs = ys("anchor");
    We({
        target: "String",
        proto: !0,
        forced: Hs
    }, {
        anchor: function(e) {
            return ms(this, "a", "name", e)
        }
    });
    var Ms = "".concat("xrx-fw-tabbed-content", "__tab")
      , Ps = "".concat("xrx-fw-tabbed-content", "__toggle")
      , zs = function e(t) {
        Qt(this, e),
        Bo(t, "click", ".".concat(Ms), (function(e) {
            var t = e.desiredTarget.previousElementSibling;
            if (t) {
                var r = t.dataset.anchor;
                r && (Oo() ? window.location.hash = r : history.pushState({}, "", window.location.href.split("#")[0] + "#" + r))
            }
        }
        ))
    };
    new (function() {
        function e(t, r) {
            Qt(this, e);
            for (var n = Array.from(r.querySelectorAll(".".concat("xrx-fw-tabbed-content"))), i = 0, o = n; i < o.length; i++) {
                var a = o[i];
                new zs(a)
            }
            n.length > 0 && (this.hashChange(),
            Bo(t, "hashchange", null, this.hashChange))
        }
        return Zt(e, [{
            key: "hashChange",
            value: function(e) {
                var t = window.location.hash;
                if (t) {
                    var r = document.querySelector(".".concat(Ps, '[data-anchor="').concat(t.replace("#", ""), '"]'));
                    r && (r.checked = !0,
                    e && (e.preventDefault() || e.stopImmediatePropagation()))
                }
            }
        }]),
        e
    }())(window,document);
    var js = "".endsWith
      , Us = Math.min
      , Bs = Bi("endsWith");
    We({
        target: "String",
        proto: !0,
        forced: !Bs
    }, {
        endsWith: function(e) {
            var t = ji(this, e, "endsWith")
              , r = arguments.length > 1 ? arguments[1] : void 0
              , n = z(t.length)
              , i = void 0 === r ? n : Us(z(r), n)
              , o = String(e);
            return js ? js.call(t, o, i) : t.slice(i - o.length, i) === o
        }
    });
    var Vs = {};
    function Ws(e) {
        Vs[e] || (Vs[e] = !0,
        window.requestAnimationFrame((function() {
            try {
                var t = e.scrollHeight
                  , r = e.dataset
                  , n = r.hasOwnProperty("xrxFwHeightInheritChild") && !!r.xrxFwHeightInheritChild && e.firstElementChild;
                n && (t = e.firstElementChild.scrollHeight),
                t && e.style && e.style.setProperty && (window.CSS && CSS.supports && CSS.supports("color", "var(--xrx-fake-var)") ? e.style.setProperty("--height", "".concat(t, "px")) : n && e.style.setProperty("min-height", "".concat(t, "px")))
            } finally {
                delete Vs[e]
            }
        }
        )))
    }
    new (function() {
        function e(t, r) {
            var n = this;
            if (Qt(this, e),
            this.elements = Array.from(r.querySelectorAll("[data-xrx-fw-height]")),
            this.calculateHeights = this.calculateHeights.bind(this),
            this.calculateHeights(),
            t.ResizeObserver) {
                var i = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var s, l = function() {
                        var e = s.value
                          , t = {}
                          , r = new ResizeObserver((function(r) {
                            try {
                                var n = !1
                                  , i = !0
                                  , o = !1
                                  , a = void 0;
                                try {
                                    for (var s, l = r[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                                        var c = s.value
                                          , u = void 0;
                                        u = c.contentBoxSize ? c.contentBoxSize[0] ? c.contentBoxSize[0].blockSize : c.contentBoxSize.blockSize : c.contentRect.height;
                                        var d = t[c.target];
                                        void 0 === d && void 0 === u ? n = !0 : u !== d && (t[c.target] = u,
                                        n = !0)
                                    }
                                } catch (e) {
                                    o = !0,
                                    a = e
                                } finally {
                                    try {
                                        i || null == l.return || l.return()
                                    } finally {
                                        if (o)
                                            throw a
                                    }
                                }
                                n && Ws(e)
                            } catch (t) {
                                console.error(t),
                                Ws(e)
                            }
                        }
                        ))
                          , n = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, l = e.children[Symbol.iterator](); !(n = (a = l.next()).done); n = !0) {
                                var c = a.value;
                                r.observe(c)
                            }
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                n || null == l.return || l.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                    }, c = this.elements[Symbol.iterator](); !(i = (s = c.next()).done); i = !0)
                        l()
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            } else
                Yo(t, r, (function(e, t) {
                    return t !== vo.NONE && n.calculateHeights()
                }
                )),
                Bo(r, po.MSS_TRIGGER_CHANGE, ".xrx-fw-multi-step-selector", (function() {
                    n.calculateHeights()
                }
                )),
                Bo(r, po.COVEO_SEARCH_LOADED, void 0, (function() {
                    n.calculateHeights()
                }
                ));
            Bo(r, po.CTA_TRAY_CHANGE, ".xrx-fw-cta-tray", (function(e) {
                n.calculateHeights()
            }
            ))
        }
        return Zt(e, [{
            key: "calculateHeights",
            value: function() {
                var e = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var n, i = this.elements[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) {
                        Ws(n.value)
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
            }
        }]),
        e
    }())(window,document);
    var Gs = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.element = t,
            this.window = r,
            this.document = n,
            this.buttons = Array.from(this.element.querySelectorAll('[role="button"]')),
            this.panels = Array.from(this.element.querySelectorAll(".xrx-fw-icon-bar__panel[id]")),
            this.transitionLock = !1,
            this.buttons.length && this.panels.length && this.buttons.length === this.panels.length ? (this.panels.forEach((function(e) {
                e.removeAttribute("tabindex"),
                Ws(e),
                e.classList.contains("xrx-fw-icon-bar__panel--visually-hidden") ? e.hidden = !0 : i.element.classList.add("xrx-fw-icon-bar--open")
            }
            )),
            Bo(this.element, "click", '[role="button"]', this.clickEventHandler.bind(this)),
            Bo(this.element, "keydown", '[role="button"]', this.buttonKeyDownEventHandler.bind(this)),
            Bo(this.element, "keydown", null, this.keyDownEventHandler.bind(this)),
            Bo(n, po.MSS_TRIGGER_CHANGE, ".xrx-fw-multi-step-selector", (function(e) {
                var t = e.detail.element;
                if (t) {
                    var r = t.previousElementSibling;
                    r && "false" === r.getAttribute("aria-expanded") && i.setState(r, !0)
                }
            }
            ))) : console.warn("Failed to initialise icon-bar.")
        }
        return Zt(e, [{
            key: "clickEventHandler",
            value: function(e) {
                e.preventDefault(),
                e.desiredTarget.focus(),
                this.setState(e.desiredTarget)
            }
        }, {
            key: "setState",
            value: function(e) {
                var t = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.transitionLock) {
                    this.transitionLock = !0;
                    var n = e ? this.buttons.indexOf(e) : -1
                      , i = this.panels[n]
                      , o = i && !i.hidden
                      , a = !1
                      , s = function() {
                        a = !0,
                        o ? (i.classList.add("xrx-fw-icon-bar__panel--visually-hidden"),
                        Qo(i, "transitionend", (function(e) {
                            e.currentTarget.hidden = !0,
                            t.element.classList.remove("xrx-fw-icon-bar--open"),
                            t.transitionLock = !1
                        }
                        ))) : (r && i.classList.add("xrx-fw-icon-bar__panel--no-transition"),
                        i.hidden = !1,
                        Ws(i),
                        Qo(i, "transitionend", (function() {
                            t.transitionLock = !1,
                            r && i.classList.remove("xrx-fw-icon-bar__panel--no-transition")
                        }
                        )),
                        setTimeout((function() {
                            i.classList.remove("xrx-fw-icon-bar__panel--visually-hidden"),
                            t.element.classList.add("xrx-fw-icon-bar--open")
                        }
                        ), 20)),
                        e.setAttribute("aria-expanded", o ? "false" : "true"),
                        r || t.setHash(o ? void 0 : e),
                        _o(e, r)
                    };
                    this.buttons.forEach((function(e) {
                        e.setAttribute("aria-expanded", "false")
                    }
                    ));
                    var l = !1;
                    this.panels.forEach((function(e) {
                        e !== i && (e.classList.contains("xrx-fw-icon-bar__panel--visually-hidden") || (l = !0,
                        r && e.classList.add("xrx-fw-icon-bar__panel--no-transition"),
                        Qo(e, "transitionend", (function() {
                            event.currentTarget.hidden = !0,
                            r && e.classList.remove("xrx-fw-icon-bar__panel--no-transition"),
                            a || s()
                        }
                        )),
                        e.classList.add("xrx-fw-icon-bar__panel--visually-hidden")))
                    }
                    )),
                    l || a || s()
                }
            }
        }, {
            key: "buttonKeyDownEventHandler",
            value: function(e) {
                var t = e.keyCode || e.which
                  , r = e.desiredTarget;
                if (r) {
                    var n = !wo(this.window, this.document).contains(ho.MD)
                      , i = qo();
                    switch (t) {
                    case mo.ENTER:
                    case mo.SPACE:
                        return e.preventDefault(),
                        void this.setState(r);
                    case mo.HOME:
                        e.preventDefault();
                        var o = this.buttons[0];
                        return void (o && o.focus());
                    case mo.END:
                        e.preventDefault();
                        var a = this.buttons[this.buttons.length - 1];
                        return void (a && a.focus());
                    case n ? mo.UP_ARROW : i ? mo.RIGHT_ARROW : mo.LEFT_ARROW:
                        e.preventDefault();
                        var s = this.buttons.indexOf(r);
                        if (0 === s) {
                            var l = this.buttons[this.buttons.length - 1];
                            l && l.focus()
                        } else {
                            var c = this.buttons[s - 1];
                            c && c.focus()
                        }
                        return;
                    case n ? mo.DOWN_ARROW : i ? mo.LEFT_ARROW : mo.RIGHT_ARROW:
                        e.preventDefault();
                        var u = this.buttons.indexOf(r);
                        if (u === this.buttons.length - 1) {
                            var d = this.buttons[0];
                            d && d.focus()
                        } else {
                            var f = this.buttons[u + 1];
                            f && f.focus()
                        }
                        return
                    }
                }
            }
        }, {
            key: "keyDownEventHandler",
            value: function(e) {
                switch (e.keyCode || e.which) {
                case mo.ESCAPE:
                    var t = this.buttons.find((function(e) {
                        return "true" === e.getAttribute("aria-expanded")
                    }
                    ));
                    return void (t && (event.preventDefault(),
                    this.setState(t),
                    t.focus()))
                }
            }
        }, {
            key: "setHash",
            value: function(e) {
                Oo() ? this.window.location.hash = e ? e.href.split("#")[1] : "" : this.window.history.replaceState({}, "", e ? e.href : window.location.href.split("#")[0])
            }
        }]),
        e
    }();
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.iconBars = Array.from(r.querySelectorAll(".xrx-fw-icon-bar")).map((function(e) {
                return new Gs(e,t,r)
            }
            )),
            this.iconBars.length > 0 && (Bo(t, "hashchange", null, this.handleHash.bind(this)),
            this.handleHash())
        }
        return Zt(e, [{
            key: "handleHash",
            value: function(e) {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.iconBars[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value
                          , s = !0
                          , l = !1
                          , c = void 0;
                        try {
                            for (var u, d = a.buttons[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) {
                                var f = u.value;
                                window.location.hash && f.href.endsWith(window.location.hash.replace("#", "")) && (a.setState(f, !0),
                                e && (e.preventDefault() || e.stopImmediatePropagation()))
                            }
                        } catch (e) {
                            l = !0,
                            c = e
                        } finally {
                            try {
                                s || null == d.return || d.return()
                            } finally {
                                if (l)
                                    throw c
                            }
                        }
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.elements = Array.from(r.querySelectorAll(".xrx-fw-sticky-widget")),
            this.elements.length > 0 && this.hookUpEventHandlers()
        }
        return Zt(e, [{
            key: "hookUpEventHandlers",
            value: function() {
                Bo(this.document, "keypress", ".xrx-fw-sticky-widget .xrx-fw-sticky-widget-block", (function(e) {
                    var t = e.desiredTarget;
                    if (t && (e.keyCode === mo.ENTER || e.keyCode === mo.SPACE)) {
                        var r = t.querySelector("a");
                        r && r.click()
                    }
                }
                ))
            }
        }]),
        e
    }())(window,document);
    var Ys = "".concat("xrx-fw-tile-slider", "__items")
      , Xs = "".concat("xrx-fw-tile-slider", "__button")
      , Ks = "".concat(Xs, "--previous")
      , $s = "".concat(Xs, "--next")
      , Qs = "".concat("xrx-fw-tile-slider", "__scrollbar")
      , Js = "".concat(Qs, "__handle")
      , Zs = function() {
        function e(t, r, n) {
            var i = this;
            Qt(this, e),
            this.element = t,
            this.scrollElement = t.querySelector(".".concat(Ys)),
            this.scrollElement && (this.children = this.scrollElement.children,
            this.scroll = this.scroll.bind(this),
            Wo(this.scrollElement, this.scroll, vo.HORIZONTAL),
            this.lr = "rtl" === n.dir ? "right" : "left",
            this.scrollbar = er({
                element: t.querySelector(".".concat(Qs)),
                handle: t.querySelector(".".concat(Js)),
                active: !1,
                xOffset: null,
                size: 0,
                handleSize: 0,
                moved: 0
            }, this.lr, null),
            this.items = {
                active: !1,
                lastX: null,
                moved: 0
            },
            this.previousElement = t.querySelector(".".concat(Ks)),
            this.nextElement = t.querySelector(".".concat($s)),
            Bo(this.previousElement, "click", null, (function(e) {
                e.preventDefault(),
                i.moveBy(-1),
                ta(e.currentTarget)
            }
            )),
            Bo(this.nextElement, "click", null, (function(e) {
                e.preventDefault(),
                i.moveBy(1),
                ta(e.currentTarget)
            }
            )),
            this.handleScrollbarDown = this.handleScrollbarDown.bind(this),
            Bo(this.scrollbar.handle, "mousedown", null, this.handleScrollbarDown),
            this.handleItemsDown = this.handleItemsDown.bind(this),
            Bo(this.scrollElement, "mousedown", null, this.handleItemsDown),
            this.handleUp = this.handleUp.bind(this),
            Bo(n, "mouseup", null, this.handleUp),
            this.handleMove = this.handleMove.bind(this),
            Bo(n, "mousemove", null, this.handleMove),
            this.resize = this.resize.bind(this),
            Yo(r, n, this.resize),
            Bo(n, "dragstart", ".".concat(Ys, " *"), (function(e) {
                return e.preventDefault(),
                !1
            }
            )),
            Bo(n, "click", ".".concat(Ys, " *"), (function(e) {
                return i.block && e.preventDefault() || !0
            }
            )),
            this.resize())
        }
        return Zt(e, [{
            key: "invert",
            value: function(e) {
                return "right" === this.lr ? this.totalWidth - e : e
            }
        }, {
            key: "setScroll",
            value: function(e) {
                this.scrollElement.scrollLeft = "right" === this.lr ? this.totalWidth - e : e
            }
        }, {
            key: "resize",
            value: function() {
                var e = this.scrollElement.firstElementChild;
                e && (this.itemWidth = Math.round(e.getBoundingClientRect().width)),
                this.totalWidth = Math.round(this.scrollElement.scrollWidth),
                this.containerWidth = Math.round(this.scrollElement.getBoundingClientRect().width);
                var t = this.scrollbar.element.getBoundingClientRect();
                this.scrollbar.size = Math.round(t.width),
                this.scrollbar[this.lr] = Math.round(t[this.lr]),
                this.scrollbar.handleSize = this.calculateHandleSize(),
                this.scrollbar.handle.style.width = this.scrollbar.handleSize + "px";
                var r = this.scrollbar.handle.getBoundingClientRect();
                r.x + r.width > this.scrollbar.size && this.scroll({
                    xrx: {
                        rawScroll: this.scrollElement.scrollLeft
                    }
                })
            }
        }, {
            key: "calculateHandleSize",
            value: function() {
                return Math.round(this.containerWidth / this.totalWidth * this.scrollbar.size)
            }
        }, {
            key: "handleUp",
            value: function(e) {
                var t = this.items.active ? this.items.moved : this.scrollbar.moved
                  , r = this.items.active;
                this.block = !1,
                this.scrollbar.active = !1,
                this.items.active = !1,
                this.scrollElement.style.cursor = "";
                var n = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, s = this.children[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                        a.value.style.cursor = ""
                    }
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                r && this.items.moved > 10 && (this.block = !0),
                this.items.moved = 0,
                this.scrollbar.moved = 0,
                t > 10 && this.scrollbar && this.scrollbar.handle && this.scrollbar.handle.dataset.xrxFwTileSliderLid && na(this.scrollbar.handle.dataset.xrxFwTileSliderLid)
            }
        }, {
            key: "handleScrollbarDown",
            value: function(e) {
                this.block = !1,
                this.scrollbar.active = !this.scrollbar.active,
                this.scrollbar.active && (this.scrollbar.active = !0,
                this.scrollbar.xOffset = e.clientX - this.scrollbar.handle.getBoundingClientRect()[this.lr] + this.scrollbar[this.lr])
            }
        }, {
            key: "handleItemsDown",
            value: function(e) {
                if (this.block = !1,
                this.items.active = !this.items.active,
                this.items.active) {
                    this.items.active = !0,
                    this.items.lastX = e.clientX - this.scrollElement.getBoundingClientRect()[this.lr],
                    this.scrollElement.style.cursor = "grabbing";
                    var t = !0
                      , r = !1
                      , n = void 0;
                    try {
                        for (var i, o = this.children[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            i.value.style.cursor = "grabbing"
                        }
                    } catch (e) {
                        r = !0,
                        n = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw n
                        }
                    }
                }
            }
        }, {
            key: "handleMove",
            value: function(e) {
                if (this.scrollbar.active) {
                    var t = e.clientX - this.scrollbar.xOffset;
                    t = "right" === this.lr ? -t : t,
                    this.scrollbar.moved += Math.abs(t);
                    var r = Math.max(Math.min(t, this.scrollbar.size - this.scrollbar.handleSize), 0);
                    r += "right" === this.lr ? this.scrollbar.handleSize : 0,
                    this.setScroll(Math.round(r / this.scrollbar.size * this.totalWidth))
                } else if (this.items.active) {
                    var n = this.items.lastX - (e.clientX - this.scrollElement.getBoundingClientRect()[this.lr]);
                    this.scrollElement.scrollLeft += n,
                    this.items.lastX = e.clientX - this.scrollElement.getBoundingClientRect()[this.lr],
                    this.items.moved += Math.abs(n)
                }
            }
        }, {
            key: "moveBy",
            value: function(e) {
                if (this.itemWidth) {
                    var t = this.invert(this.scrollElement.scrollLeft)
                      , r = e > 0 ? Math.floor : Math.ceil;
                    e = "right" === this.lr ? -e : e,
                    t = r(t / this.itemWidth) * this.itemWidth,
                    this.setScroll(t + this.itemWidth * e)
                }
            }
        }, {
            key: "scroll",
            value: function(e) {
                var t = e.xrx.rawScroll;
                this.previousElement && (this.previousElement.style.display = t <= 0 ? "none" : ""),
                this.nextElement && (t >= this.totalWidth - this.containerWidth - 1 ? this.nextElement.style.display = "none" : this.nextElement.style.display = ""),
                t = this.invert(t);
                var r = Math.round(t / this.totalWidth * this.scrollbar.size);
                this.scrollbar.handle.style[this.lr] = r - ("right" === this.lr ? this.scrollbar.handleSize : 0) + "px"
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e);
        for (var n = 0, i = Array.from(r.querySelectorAll(".".concat("xrx-fw-tile-slider"))); n < i.length; n++) {
            var o = i[n];
            new Zs(o,t,r)
        }
    }
    (window,document);
    var el = ".xrx-fw-multi-step-selector"
      , tl = "".concat(el, "__wrapper")
      , rl = "".concat(el, "__panel-content")
      , nl = "".concat(el, "__panel-buttons")
      , il = "".concat(el, "__navigation__button--close")
      , ol = "".concat(el, "__navigation__button--back")
      , al = "".concat(el, ' a[href^="#"]:not(').concat(ol, "):not(").concat(il, ")")
      , sl = function() {
        function e(t, r, n) {
            Qt(this, e),
            this.elements = Array.from(n.querySelectorAll(rl)),
            this.window = t,
            this.document = r,
            this.mss = n,
            this.elements.length && this.hashChange(),
            this.hashChange = this.hashChange.bind(this),
            Bo(t, "hashchange", null, this.hashChange),
            this.close = this.close.bind(this);
            for (var i = 0, o = Array.from(n.querySelectorAll("".concat(ol, ", ").concat(il))); i < o.length; i++) {
                Bo(o[i], "click", null, this.close)
            }
            this.step = this.step.bind(this);
            var a = !0
              , s = !1
              , l = void 0;
            try {
                for (var c, u = n.querySelectorAll(al)[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                    Bo(c.value, "click", null, this.step)
                }
            } catch (e) {
                s = !0,
                l = e
            } finally {
                try {
                    a || null == u.return || u.return()
                } finally {
                    if (s)
                        throw l
                }
            }
        }
        return Zt(e, [{
            key: "hashChange",
            value: function() {
                var e = window.location.hash
                  , t = this.mss.querySelector(tl)
                  , r = null
                  , n = null;
                if (e)
                    if (n = this.mss.querySelector(e),
                    t.style.display = "none",
                    n) {
                        var i = !0
                          , o = !1
                          , a = void 0;
                        try {
                            for (var s, l = this.elements[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                                s.value.style.display = "none"
                            }
                        } catch (e) {
                            o = !0,
                            a = e
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                        ko(n).call(n, rl) && (n.style.display = ""),
                        r = So(this.mss, ".xrx-fw-icon-bar__panel")
                    } else
                        n = t,
                        t.style.display = "";
                else
                    t.style.display = "",
                    n = t;
                wo(window, document).contains(ho.MD) || _o(n),
                Ko(this.mss, po.MSS_TRIGGER_CHANGE, {
                    element: r
                })
            }
        }, {
            key: "setHash",
            value: function(e) {
                Oo() ? window.location.hash = e : history.replaceState({}, "", window.location.href.split("#")[0] + e),
                this.hashChange()
            }
        }, {
            key: "step",
            value: function(e) {
                e.preventDefault(),
                Do() && e.stopImmediatePropagation();
                var t = So(e.target, "a")
                  , r = t.getAttribute("href");
                if (r) {
                    var n = this.mss.querySelector(r)
                      , i = So(t, "".concat(rl, ", ").concat(nl));
                    if (i && n) {
                        this.setHash(r);
                        var o = n.querySelector(ol)
                          , a = i.getAttribute("id");
                        o && a ? o.setAttribute("href", "#".concat(a)) : o.setAttribute("href", "#")
                    }
                }
                ta(t)
            }
        }, {
            key: "close",
            value: function(e) {
                e.preventDefault(),
                Do() && e.stopImmediatePropagation();
                var t = So(e.target, "a")
                  , r = So(e.target, ".xrx-fw-cta-tray");
                if (t) {
                    var n = t.getAttribute("href");
                    if ("#" === n) {
                        if (t.classList.contains("xrx-fw-multi-step-selector__navigation__button--close") && r) {
                            var i = So(t, ".xrx-fw-cta-tray-tile__content__container").querySelector(".xrx-fw-cta-tray-tile__content__container__close");
                            Ko(r, po.CTA_TRAY_TRIGGER_CLOSE, {
                                cta_tray_close: i
                            })
                        }
                        var o = !0
                          , a = !1
                          , s = void 0;
                        try {
                            for (var l, c = this.elements[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                                l.value.style.display = "none"
                            }
                        } catch (e) {
                            a = !0,
                            s = e
                        } finally {
                            try {
                                o || null == c.return || c.return()
                            } finally {
                                if (a)
                                    throw s
                            }
                        }
                        this.setHash("")
                    } else
                        this.setHash(n)
                }
                if (r) {
                    if (t && t.classList.contains("xrx-fw-multi-step-selector__navigation__button--back")) {
                        var u = So(t, ".xrx-fw-cta-tray-tile");
                        if (u) {
                            var d = u.querySelector(".xrx-fw-cta-tray-tile__text");
                            d ? na(d.innerText + "-" + t.innerText) : ta(t)
                        } else
                            ta(t)
                    }
                } else
                    ta(t)
            }
        }]),
        e
    }();
    new function e(t, r) {
        Qt(this, e),
        this.elements = Array.from(r.querySelectorAll(el));
        var n = !0
          , i = !1
          , o = void 0;
        try {
            for (var a, s = this.elements[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                var l = a.value;
                new sl(t,r,l)
            }
        } catch (e) {
            i = !0,
            o = e
        } finally {
            try {
                n || null == s.return || s.return()
            } finally {
                if (i)
                    throw o
            }
        }
    }
    (window,document);
    var ll = "".concat(".xrx-fw-compare-table", "__navigation")
      , cl = "".concat(ll, "--next")
      , ul = "".concat(ll, "--previous")
      , dl = "".concat(".xrx-fw-compare-table", "__scroll")
      , fl = "".concat(".xrx-fw-compare-table", " .xrx-fw-pagination-dot")
      , hl = function() {
        function e(t) {
            Qt(this, e),
            this.element = t,
            this.parent = So(this.element, ".xrx-fw-compare-table"),
            this.active = !1,
            this.lastX = null,
            this.draggable = !0,
            this.handleDown = this.handleDown.bind(this),
            Bo(this.element, "mousedown", null, this.handleDown)
        }
        return Zt(e, [{
            key: "updateDraggable",
            value: function(e) {
                if (this.parent) {
                    var t = !e.contains(ho.MD)
                      , r = this.parent.dataset
                      , n = r.itemsPerPage
                      , i = r.itemCount
                      , o = t ? 1 : n;
                    this.draggable = o !== i
                } else
                    this.draggable = !0;
                this.reset({})
            }
        }, {
            key: "reset",
            value: function(e) {
                this.active = !1,
                this.lastX = null;
                var t = e.altKey || !this.draggable ? "auto" : "";
                this.element.style.cursor = t,
                this.element.style.userSelect = t,
                this.element.style.msUserSelect = t,
                this.element.style.mozUserSelect = t,
                this.element.style.webkitUserSelect = t
            }
        }, {
            key: "handleDown",
            value: function(e) {
                if (!e.altKey && this.draggable) {
                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty(),
                    this.element.style.cursor = "grabbing";
                    this.element.style.userSelect = "",
                    this.element.style.msUserSelect = "",
                    this.element.style.mozUserSelect = "",
                    this.element.style.webkitUserSelect = "",
                    this.active = !0,
                    this.lastX = e.clientX - this.element.getBoundingClientRect().left
                }
            }
        }, {
            key: "handleKeydown",
            value: function(e) {
                18 === e.keyCode && this.reset(e)
            }
        }, {
            key: "handleKeyup",
            value: function(e) {
                18 === e.keyCode && this.draggable && (this.element.style.cursor = "")
            }
        }, {
            key: "move",
            value: function(e) {
                if (!e.altKey && this.draggable && this.active) {
                    var t = this.lastX - (e.clientX - this.element.getBoundingClientRect().left);
                    this.element.scrollLeft += t,
                    this.lastX = e.clientX - this.element.getBoundingClientRect().left
                }
            }
        }]),
        e
    }();
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.elements = [],
            this.window = t,
            this.document = r,
            this.move = this.move.bind(this),
            Bo(r, "click", ul, (function(e) {
                return n.move(e, -1)
            }
            )),
            Bo(r, "click", cl, (function(e) {
                return n.move(e, 1)
            }
            )),
            this.page = this.page.bind(this),
            Bo(r, "click", fl, this.page),
            this.resize = this.resize.bind(this),
            Yo(t, r, this.resize),
            this.scroll = this.scroll.bind(this),
            this.dragManagers = [];
            for (var i = 0, o = Array.from(r.querySelectorAll(dl)); i < o.length; i++) {
                var a = o[i];
                Wo(a, this.scroll, vo.HORIZONTAL),
                this.dragManagers.push(new hl(a))
            }
            this.handleUp = this.handleUp.bind(this),
            Bo(r, "mouseup", null, this.handleUp),
            this.handleMove = this.handleMove.bind(this),
            Bo(r, "mousemove", null, this.handleMove),
            this.handleKeyup = this.handleKeyup.bind(this),
            Bo(r, "keyup", null, this.handleKeyup),
            this.handleKeydown = this.handleKeydown.bind(this),
            Bo(r, "keydown", null, this.handleKeydown),
            this.resize(null, null, wo(t, r))
        }
        return Zt(e, [{
            key: "handleUp",
            value: function(e) {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.dragManagers[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        i.value.reset(e)
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }
        }, {
            key: "handleMove",
            value: function(e) {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.dragManagers[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        i.value.move(e)
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }
        }, {
            key: "handleKeyup",
            value: function(e) {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.dragManagers[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        i.value.handleKeyup(e)
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }
        }, {
            key: "handleKeydown",
            value: function(e) {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var i, o = this.dragManagers[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        i.value.handleKeydown(e)
                    }
                } catch (e) {
                    r = !0,
                    n = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }
        }, {
            key: "scroll",
            value: function(e) {
                var t = e.xrx
                  , r = t.change
                  , n = t.scroll;
                if (Math.abs(r)) {
                    var i = !wo(this.window, this.document).contains(ho.MD)
                      , o = e.target
                      , a = So(o, ".xrx-fw-compare-table")
                      , s = a.querySelector(i ? "th" : ".xrx-fw-compare-table__table--desktop th").getBoundingClientRect().width
                      , l = a.dataset
                      , c = l.itemCount
                      , u = l.itemsPerPage
                      , d = (o.scrollWidth - s) / c
                      , f = n + d * (i || u) / 2
                      , h = Math.floor(f / d);
                    i || (h = Math.floor(h / u) * u),
                    a.setAttribute("data-item", h)
                }
            }
        }, {
            key: "resize",
            value: function(e, t, r) {
                for (var n = 0, i = Array.from(this.document.querySelectorAll(dl)); n < i.length; n++) {
                    var o = i[n];
                    this.move({
                        desiredTarget: o
                    }, 0, !1, !1)
                }
                var a = !0
                  , s = !1
                  , l = void 0;
                try {
                    for (var c, u = this.dragManagers[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                        c.value.updateDraggable(r)
                    }
                } catch (e) {
                    s = !0,
                    l = e
                } finally {
                    try {
                        a || null == u.return || u.return()
                    } finally {
                        if (s)
                            throw l
                    }
                }
            }
        }, {
            key: "page",
            value: function(e) {
                var t = e.desiredTarget
                  , r = Array.from(t.parentNode.children).indexOf(t);
                this.move(e, r, !0)
            }
        }, {
            key: "move",
            value: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                e.preventDefault && e.preventDefault();
                var i = !wo(this.window, this.document).contains(ho.MD)
                  , o = e.desiredTarget
                  , a = So(o, ".xrx-fw-compare-table")
                  , s = a.querySelector(i ? "th" : ".xrx-fw-compare-table__table--desktop th")
                  , l = s.getBoundingClientRect().width
                  , c = a.querySelector(dl)
                  , u = a.dataset
                  , d = u.itemCount
                  , f = u.itemsPerPage
                  , h = u.xrxFwBaseLid
                  , v = parseInt(a.dataset.item, 10) || 0;
                if (i || (v = Math.floor(v / f) * f),
                r ? v = Math.min(Math.max(t, 0), d) : v += t * (i || f),
                v <= d - 1 && v >= 0) {
                    a.setAttribute("data-item", v);
                    var p = c.scrollWidth
                      , m = Math.floor(p - l) / d
                      , y = v * m;
                    h && n && na(r ? "".concat(h, "-int-button").concat(t) : "".concat(h, "-int-").concat(t > 0 ? "next" : "prev")),
                    zo(c, y)
                }
            }
        }]),
        e
    }())(window,document);
    var vl = ".xrx-fw-action-carousel"
      , pl = "".concat(vl, "__carousel > .xrx-fw-carousel .xrx-fw-carousel__item")
      , ml = "".concat(vl, "__actions > .xrx-fw-carousel")
      , yl = "".concat(vl, "__carousel")
      , wl = "".concat(vl, "__carousel--variant-inactive-style");
    new function e(t) {
        Qt(this, e),
        this.document = t,
        this.inactiveStyleCarousels = t.querySelectorAll(wl);
        var r = !0
          , n = !1
          , i = void 0;
        try {
            for (var o, a = this.inactiveStyleCarousels[Symbol.iterator](); !(r = (o = a.next()).done); r = !0)
                for (var s = o.value, l = Array.from(s.querySelectorAll(".xrx-fw-carousel__item")), c = 0, u = l; c < u.length; c++) {
                    u[c].classList.add("xrx-fw-carousel__item--active");
                    break
                }
        } catch (e) {
            n = !0,
            i = e
        } finally {
            try {
                r || null == a.return || a.return()
            } finally {
                if (n)
                    throw i
            }
        }
        Bo(t, "click", pl, (function(e) {
            var t = e.desiredTarget
              , r = Array.from(t.parentNode.children).indexOf(t) + 1
              , n = So(t, vl);
            if (n) {
                Ko(n.querySelector(ml), po.CAROUSEL_TRIGGER_CHANGE, {
                    index: r
                }),
                e.preventDefault(),
                e.stopPropagation();
                var i = n.querySelector(yl);
                if (i && i.classList.contains("xrx-fw-action-carousel__carousel--variant-inactive-style")) {
                    for (var o = 0, a = Array.from(t.parentNode.children); o < a.length; o++) {
                        a[o].classList.remove("xrx-fw-carousel__item--active")
                    }
                    t.classList.add("xrx-fw-carousel__item--active")
                }
                var s = oa(t.querySelector(".xrx-fw-carousel__item > a"));
                s && na(s)
            }
        }
        ), !0),
        Bo(t, "click", "".concat(ml, " .xrx-fw-pagination-dot"), (function(e) {
            var t = e.desiredTarget
              , r = So(t, vl)
              , n = Array.from(t.parentNode.children).indexOf(t)
              , i = r.querySelector(wl);
            if (i) {
                for (var o = Array.from(i.querySelectorAll(".xrx-fw-carousel__item")), a = 0, s = o; a < s.length; a++) {
                    s[a].classList.remove("xrx-fw-carousel__item--active")
                }
                o[n].classList.add("xrx-fw-carousel__item--active")
            }
        }
        ))
    }
    (document);
    var gl = function() {
        function e(t, r) {
            var n = this;
            if (Qt(this, e),
            this.window = t,
            this.document = r,
            this.carousel = r.querySelector(".xrx-fw-interactive-video-carousel"),
            this.carousel) {
                var i = Array.from(this.carousel.querySelectorAll(".xrx-fw-interactive-video-carousel__item"));
                this.InteractiveVideo = [];
                for (var o = 0, a = i.length; o < a; o++)
                    this.InteractiveVideo.push(new xl(i[o],o,t,r));
                Bo(r, "click", ".xrx-fw-interactive-video-carousel .xrx-fw-control-cta", (function(e) {
                    var t = e.desiredTarget
                      , r = So(t, ".xrx-fw-interactive-video-carousel")
                      , i = Array.from(t.parentNode.children).indexOf(t) + 1
                      , o = r.getAttribute("data-index") || 1;
                    i !== (o = parseInt(o, 10)) && (r.setAttribute("data-futureindex", i),
                    n.InteractiveVideo[o - 1].element.classList.add("xrx-fw-interactive-video-carousel__item--fadeout"));
                    var a = r.dataset.xrxFwBaseLid;
                    a && na("".concat(a, "-int-button").concat(i))
                }
                )),
                Bo(r, po.SWIPE, ".xrx-fw-interactive-video-carousel", (function(e) {
                    var t = So(e.desiredTarget, ".xrx-fw-interactive-video-carousel").dataset.xrxFwBaseLid;
                    e.detail.xDirection === vo.LEFT ? (n.nextPreviousHandler(!0, e, !0),
                    t && na("".concat(t, "-int-next"))) : e.detail.xDirection === vo.RIGHT && (n.nextPreviousHandler(!1, e, !0),
                    t && na("".concat(t, "-int-prev")))
                }
                )),
                Bo(r, po.INTERACTIVEVIDEO_CHANGE, ".xrx-fw-interactive-video-carousel", (function(e) {
                    var t = e.detail.index
                      , r = n.InteractiveVideo[t - 1].video;
                    if (r.readyState >= 3)
                        r.play();
                    else
                        var i = 0
                          , o = setInterval((function() {
                            i >= 10 && (clearInterval(o),
                            r.play()),
                            r.readyState >= 3 && (clearInterval(o),
                            r.play()),
                            i++
                        }
                        ), 500)
                }
                )),
                Bo(r, po.INTERACTIVEVIDEO_NEXT, ".xrx-fw-interactive-video-carousel", (function(e) {
                    n.nextPreviousHandler(!0, e, !1)
                }
                )),
                !xo(this.window) && this.window.IntersectionObserver && (this.observer = new t.IntersectionObserver((function(e, t) {
                    n.handleIntersection(e, t, n.carousel)
                }
                ),{
                    threshold: .4
                })),
                xo(this.window) ? Ko(this.carousel, po.INTERACTIVEVIDEO_CHANGE, {
                    index: 1
                }) : this.observer ? this.observer.observe(this.carousel) : Ko(this.carousel, po.INTERACTIVEVIDEO_CHANGE, {
                    index: 1
                })
            }
        }
        return Zt(e, [{
            key: "nextPreviousHandler",
            value: function(e, t, r) {
                var n = So(t.desiredTarget, ".xrx-fw-interactive-video-carousel")
                  , i = n.querySelectorAll(".xrx-fw-interactive-video-carousel__items > .xrx-fw-interactive-video-carousel__item").length
                  , o = n.dataset
                  , a = o.itemsPerPage
                  , s = void 0 === a ? 1 : a
                  , l = o.index
                  , c = void 0 === l ? 1 : l;
                s = parseInt(s, 10);
                var u = c = parseInt(c, 10);
                e ? (u += s) > i && (u = 1) : (u -= s) < 1 && (u = i),
                r ? (n.setAttribute("data-futureindex", u),
                this.InteractiveVideo[c - 1].element.classList.add("xrx-fw-interactive-video-carousel__item--fadeout")) : (n.setAttribute("data-index", u),
                Ko(n, po.INTERACTIVEVIDEO_CHANGE, {
                    index: u
                }))
            }
        }, {
            key: "handleIntersection",
            value: function(e, t, r) {
                var n = this
                  , i = !1;
                e.forEach((function(e) {
                    e.intersectionRatio > .4 && (n.InteractiveVideo.forEach((function(e) {
                        if (e.element.classList.contains("xrx-fw-interactive-video--paused")) {
                            var t = parseInt(e.index);
                            t += 1,
                            Ko(n.carousel, po.INTERACTIVEVIDEO_CHANGE, {
                                index: t
                            }),
                            e.element.classList.remove("xrx-fw-interactive-video--paused"),
                            i = !0
                        }
                    }
                    )),
                    i || Ko(n.carousel, po.INTERACTIVEVIDEO_CHANGE, {
                        index: 1
                    })),
                    e.intersectionRatio < .4 && n.InteractiveVideo.forEach((function(e) {
                        if (e.element.classList.contains("xrx-fw-interactive-video--playing")) {
                            var t = n.carousel.querySelectorAll(".xrx-fw-timer-bar");
                            e.video.pause(),
                            e.element.classList.add("xrx-fw-interactive-video--paused"),
                            Ko(t[e.index], po.TIMER_BAR_PAUSE, {})
                        }
                    }
                    ))
                }
                ))
            }
        }]),
        e
    }()
      , xl = function() {
        function e(t, r, n, i) {
            var o = this;
            Qt(this, e),
            this.window = n,
            this.document = i,
            this.element = t,
            this.index = r;
            var a = this.element.querySelector(".xrx-fw-interactive-video__output")
              , s = this.element.querySelector(".xrx-fw-interactive-video__buffer");
            this.text = this.element.querySelector(".xrx-fw-interactive-video__text"),
            this.video = this.element.querySelector("video"),
            this.output = a.getContext("2d"),
            this.buffer = s.getContext("2d"),
            this.width = a.width,
            this.height = a.height,
            Ro() && this.video.load(),
            Bo(this.video, "play", "", (function(e) {
                var t = So(o.element, ".xrx-fw-interactive-video-carousel").querySelectorAll(".xrx-fw-timer-bar");
                o.InteractiveVideoTransport(e),
                Ko(t[o.index], po.TIMER_BAR_TRIGGER, {}),
                o.element.classList.add("xrx-fw-interactive-video--playing"),
                o.element.classList.remove("xrx-fw-interactive-video--restarted"),
                o.element.classList.remove("xrx-fw-interactive-video--ended")
            }
            )),
            Bo(this.video, "ended", "", (function(e) {
                var t = So(o.element, ".xrx-fw-interactive-video-carousel");
                o.element.classList.add("xrx-fw-interactive-video--ended"),
                o.element.classList.remove("xrx-fw-interactive-video--restarted"),
                o.element.classList.remove("xrx-fw-interactive-video--playing"),
                Ko(t, po.INTERACTIVEVIDEO_NEXT, {})
            }
            )),
            Bo(this.video, "pause", "", (function(e) {
                o.element.classList.add("xrx-fw-interactive-video--restarted"),
                o.element.classList.remove("xrx-fw-interactive-video--playing")
            }
            )),
            Bo(this.element, "transitionend", "", (function(e) {
                if (e.target === o.element) {
                    var t = So(o.element, ".xrx-fw-interactive-video-carousel")
                      , r = t.getAttribute("data-futureindex");
                    t.setAttribute("data-index", r),
                    Ko(t, po.INTERACTIVEVIDEO_CHANGE, {
                        index: r
                    }),
                    o.video.pause(),
                    o.video.currentTime = 0,
                    o.clearInteractiveVideo(),
                    o.element.classList.remove("xrx-fw-interactive-video-carousel__item--fadeout"),
                    o.text.classList.remove("xrx-fw-interactive-video__text--fadein")
                }
            }
            )),
            Bo(this.video, "timeupdate", "", (function() {
                var e = o.video.currentTime
                  , t = o.video.duration;
                if (e > 1 && (o.text.classList.add("xrx-fw-interactive-video__text--fadein"),
                xo(o.window))) {
                    var r = So(o.element, ".xrx-fw-interactive-video-carousel").querySelectorAll(".xrx-fw-timer-bar");
                    o.video.pause(),
                    Ko(r[o.index], po.TIMER_BAR_PAUSE, {})
                }
                e > t - 1 && o.text.classList.remove("xrx-fw-interactive-video__text--fadein")
            }
            ))
        }
        return Zt(e, [{
            key: "InteractiveVideoTransport",
            value: function(e) {
                var t = this;
                window.requestAnimationFrame((function() {
                    t.video.ended || t.video.paused || (t.clearInteractiveVideo(),
                    t.drawInteractiveVideo()),
                    t.InteractiveVideoTransport()
                }
                ))
            }
        }, {
            key: "drawInteractiveVideo",
            value: function() {
                this.buffer.drawImage(this.video, 0, 0);
                for (var e = this.buffer.getImageData(0, 0, this.width, this.height), t = e.data, r = this.buffer.getImageData(0, this.height, this.width, this.height).data, n = 3, i = t.length; n < i; n += 4)
                    t[n] = r[n - 1];
                this.output.putImageData(e, 0, 0, 0, 0, this.width, this.height)
            }
        }, {
            key: "clearInteractiveVideo",
            value: function() {
                this.output.clearRect(0, 0, this.width, this.height)
            }
        }]),
        e
    }();
    new gl(window,document);
    var bl = c((function(e, t) {
        !function() {
            function t(e, t, r) {
                var n = new XMLHttpRequest;
                n.open("GET", e),
                n.responseType = "blob",
                n.onload = function() {
                    o(n.response, t, r)
                }
                ,
                n.onerror = function() {
                    console.error("could not download file")
                }
                ,
                n.send()
            }
            function r(e) {
                var t = new XMLHttpRequest;
                t.open("HEAD", e, !1);
                try {
                    t.send()
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status
            }
            function n(e) {
                try {
                    e.dispatchEvent(new MouseEvent("click"))
                } catch (r) {
                    var t = document.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                    e.dispatchEvent(t)
                }
            }
            var i = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof s && s.global === s ? s : void 0
              , o = i.saveAs || ("object" != typeof window || window !== i ? function() {}
            : "download"in HTMLAnchorElement.prototype ? function(e, o, a) {
                var s = i.URL || i.webkitURL
                  , l = document.createElement("a");
                o = o || e.name || "download",
                l.download = o,
                l.rel = "noopener",
                "string" == typeof e ? (l.href = e,
                l.origin === location.origin ? n(l) : r(l.href) ? t(e, o, a) : n(l, l.target = "_blank")) : (l.href = s.createObjectURL(e),
                setTimeout((function() {
                    s.revokeObjectURL(l.href)
                }
                ), 4e4),
                setTimeout((function() {
                    n(l)
                }
                ), 0))
            }
            : "msSaveOrOpenBlob"in navigator ? function(e, i, o) {
                if (i = i || e.name || "download",
                "string" != typeof e)
                    navigator.msSaveOrOpenBlob(function(e, t) {
                        return void 0 === t ? t = {
                            autoBom: !1
                        } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"),
                        t = {
                            autoBom: !t
                        }),
                        t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e],{
                            type: e.type
                        }) : e
                    }(e, o), i);
                else if (r(e))
                    t(e, i, o);
                else {
                    var a = document.createElement("a");
                    a.href = e,
                    a.target = "_blank",
                    setTimeout((function() {
                        n(a)
                    }
                    ))
                }
            }
            : function(e, r, n, o) {
                if ((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."),
                "string" == typeof e)
                    return t(e, r, n);
                var a = "application/octet-stream" === e.type
                  , s = /constructor/i.test(i.HTMLElement) || i.safari
                  , l = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((l || a && s) && "object" == typeof FileReader) {
                    var c = new FileReader;
                    c.onloadend = function() {
                        var e = c.result;
                        e = l ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"),
                        o ? o.location.href = e : location = e,
                        o = null
                    }
                    ,
                    c.readAsDataURL(e)
                } else {
                    var u = i.URL || i.webkitURL
                      , d = u.createObjectURL(e);
                    o ? o.location = d : location.href = d,
                    o = null,
                    setTimeout((function() {
                        u.revokeObjectURL(d)
                    }
                    ), 4e4)
                }
            }
            );
            i.saveAs = o.saveAs = o,
            e.exports = o
        }()
    }
    ))
      , _l = "".concat(".xrx-fw-form", "__content__message")
      , kl = "".concat(_l, "--error")
      , Sl = "".concat(_l, "--success")
      , Al = /(?:#|&)(?:([^=&]+)=([^=&]+))/g;
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.onSubmit = this.onSubmit.bind(this),
            Bo(r, "submit", ".xrx-fw-form", this.onSubmit),
            this.prefill = this.prefill.bind(this);
            for (var n = 0, i = Array.from(r.querySelectorAll(".xrx-fw-form--prefill")); n < i.length; n++) {
                var o = i[n];
                this.prefill(o)
            }
        }
        return Zt(e, [{
            key: "prefill",
            value: function(e) {
                var t = this.window.location.hash;
                if (t)
                    for (var r; null !== (r = Al.exec(t)); ) {
                        var n = r[1]
                          , i = r[2]
                          , o = e.querySelector('input[name="'.concat(n, '"]'));
                        o && (o.value = i)
                    }
            }
        }, {
            key: "onSubmit",
            value: function(e) {
                var t = e.desiredTarget
                  , r = t.dataset.xrxFwDisableOnSuccess
                  , n = void 0 !== r && r;
                if (t)
                    if (this.isValid(t, e)) {
                        if (t.dataset.xrxFwAsync ? this.asyncOnSubmit(t, e) : this.report(t, "submit"),
                        n)
                            for (var i = 0, o = Array.from(t.querySelectorAll('input[type="submit"], button[type="submit"]')); i < o.length; i++) {
                                o[i].disabled = !0
                            }
                    } else
                        this.report(t, "invalid")
            }
        }, {
            key: "isValid",
            value: function(e, t) {
                for (var r = !1, n = 0, i = Array.from(e.querySelectorAll("input, textarea, select")); n < i.length; n++) {
                    var o = i[n]
                      , a = o.validity.valid
                      , s = o.nextElementSibling;
                    s && s.classList.contains("xrx-fw-form-inputs__error") && (s.textContent = a ? "" : o.validationMessage,
                    s.style.display = a ? "none" : ""),
                    a ? o.classList.remove("xrx-fw-form-inputs__input--error") : (o.classList.add("xrx-fw-form-inputs__input--error"),
                    t.preventDefault(),
                    r = !0)
                }
                return !r
            }
        }, {
            key: "asyncOnSubmit",
            value: function(e, t) {
                var r = e.querySelector('button.xrx-fw-cta--async[type="submit"]');
                if (r)
                    if (t.preventDefault(),
                    r.classList.contains("xrx-fw-cta--loading"))
                        this.asyncCancel(e, r);
                    else {
                        this.asyncSubmit(e, r);
                        for (var n = 0, i = Array.from(e.querySelectorAll(_l)); n < i.length; n++) {
                            i[n].style.display = "none"
                        }
                        r.classList.add("xrx-fw-cta--loading")
                    }
            }
        }, {
            key: "report",
            value: function(e, t) {
                var r = aa(e);
                r && na("".concat(r, "-").concat(t))
            }
        }, {
            key: "ajaxCallback",
            value: function(e, t, r, n, i) {
                var o = n.dataset
                  , a = o.xrxFwDownload
                  , s = o.xrxFwFileName
                  , l = void 0 === s ? null : s
                  , c = o.xrxFwMimeType
                  , u = void 0 === c ? "" : c
                  , d = o.xrxFwHideOnSuccess
                  , f = void 0 !== d && d;
                r ? (a && bl.saveAs(new Blob([e],{
                    xrxFwMimeType: u
                }), l),
                n.querySelector(Sl).style.display = "",
                f && n.classList.add("xrx-fw-form--success"),
                this.report(n, "ajax-success")) : (console.warn("Failed to fetch ".concat(n.action, ": ").concat(t)),
                n.querySelector(kl).style.display = "",
                this.report(n, "ajax-fail"));
                n.xrxAjax = void 0,
                i.classList.remove("xrx-fw-cta--loading")
            }
        }, {
            key: "asyncSubmit",
            value: function(e, t) {
                var r = this
                  , n = e.action
                  , i = e.method;
                if (e.xrxAjax)
                    console.warn("Already fetching from ".concat(n));
                else
                    try {
                        e.xrxAjax = Ts(n, (function(n, i, o) {
                            return r.ajaxCallback(n, i, o, e, t)
                        }
                        ), {
                            method: i.toUpperCase(),
                            responseType: "blob",
                            data: new FormData(e)
                        })
                    } catch (r) {
                        console.warn("Ajax call failed: ".concat(r.message)),
                        this.asyncCancel(e, t)
                    }
            }
        }, {
            key: "asyncCancel",
            value: function(e, t) {
                if (e.xrxAjax && e.xrxAjax.abort)
                    e.xrxAjax.abort(),
                    e.xrxAjax = void 0;
                else {
                    var r = e.action;
                    console.warn("Already cancelled ".concat(r))
                }
                t.classList.remove("xrx-fw-cta--loading"),
                this.report(e, "ajax-cancel")
            }
        }]),
        e
    }())(window,document);
    var El = fn(3)
      , Tl = gn("some");
    function Cl(e) {
        return !!(e.selectedIndex < 0 || !e.value && e.options && "" === e.options[e.selectedIndex].text.trim())
    }
    function Ll(e, t) {
        var r = Array.from(e.querySelectorAll(t));
        if (0 !== r.length)
            for (var n = 0, i = r; n < i.length; n++) {
                var o, a = i[n];
                a.classList.add("xrx-fw--inactive"),
                (o = a.querySelector("input")) && (o.value || o.placeholder) && a.classList.remove("xrx-fw--inactive");
                var s;
                (s = a.querySelector("select")) && (Cl(s) && !s.placeholder || a.classList.remove("xrx-fw--inactive"));
                var l;
                (l = a.querySelector("textarea")) && (l.value || l.placeholder) && a.classList.remove("xrx-fw--inactive")
            }
    }
    We({
        target: "Array",
        proto: !0,
        forced: Tl
    }, {
        some: function(e) {
            return El(this, e, arguments[1])
        }
    }),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.handleInputChange = this.handleInputChange.bind(this),
            this.pricesTableClass = "xrx-fw-prices-table",
            this.pricesTableRowClass = "xrx-fw-prices-table-row",
            Bo(this.document, "change", ".".concat(this.pricesTableClass, ' input[type="checkbox"]'), this.handleInputChange),
            this.handleInputChange()
        }
        return Zt(e, [{
            key: "handleInputChange",
            value: function(e) {
                var t = [];
                e && e.desiredTarget ? t.push(So(e.desiredTarget, ".".concat(this.pricesTableClass))) : t = Array.from(this.document.querySelectorAll(".".concat(this.pricesTableClass))),
                t.forEach((function(e) {
                    var t = Array.from(e.querySelectorAll('input[type="checkbox"]'))
                      , r = Array.from(e.querySelectorAll('.xrx-fw-prices-table__buttons button[type="submit"]'))
                      , n = t.some((function(e) {
                        return e.checked
                    }
                    ));
                    r.forEach((function(e) {
                        e.disabled = !n
                    }
                    ));
                    var i = e.querySelector("form");
                    if (i) {
                        var o = i.dataset && i.dataset.xrxFwPricesTableBaseLid;
                        if (o) {
                            var a = t.filter((function(e) {
                                return e.checked && e.dataset && e.dataset.xrxFwPricesTableRowLid
                            }
                            )).map((function(e) {
                                return e.dataset.xrxFwPricesTableRowLid
                            }
                            ));
                            if (a.length > 0) {
                                var s = e.querySelector("form");
                                if (o) {
                                    a.unshift(o);
                                    var l = ea(a.slice(0, 6).join("-"));
                                    s.dataset.xrxFwFormLid = l,
                                    s.setAttribute("data-xrx-fw-form-lid", l)
                                }
                            } else
                                i.dataset.xrxFwFormLid = o,
                                i.setAttribute("data-xrx-fw-form-lid", o)
                        }
                    }
                }
                ))
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.elements = Array.from(r.querySelectorAll(".support-search")),
            this.delayedClickActions = [];
            var i = Xo((function(e) {
                var t = e.target;
                n.clearSearchResults(t, !0),
                "" === t.value ? n.resetSearch(t) : t.value.length >= 2 && n.handleLiveSearch(e.target)
            }
            ));
            Bo(r, "keyup", ".support-search .support-search__product__search input", (function(e) {
                i(e)
            }
            )),
            Bo(r, "click", null, (function(e) {
                n.delayedClickActions.forEach((function(e) {
                    e()
                }
                )),
                n.delayedClickActions = []
            }
            )),
            Bo(r, "focusout", ".support-search .support-search__product__search input", (function(e) {
                n.delayedClickActions.push((function() {
                    n.handleLiveSearchFocusOut(e.target)
                }
                ))
            }
            )),
            Bo(r, "focusin", ".support-search .support-search__product__search input", (function(e) {
                n.handleLiveSearchFocusIn(e.target)
            }
            )),
            Bo(r, "click", ".support-search .support-search__product__search ul a", (function(e) {
                n.handleSearchClick(e.target)
            }
            )),
            Bo(r, "click", ".support-search a[data-category_id]:not([data-brand_id])", (function(e) {
                n.handleCategoryClick(e.target)
            }
            )),
            Bo(r, "click", ".support-search a[data-category_id][data-brand_id]", (function(e) {
                n.handleBrandClick(e.target)
            }
            )),
            Bo(r, "click", ".support-search a[data-categories]", (function(e) {
                n.handleCategories(e.target)
            }
            )),
            Bo(r, "click", ".support-search .support-search__product__search__close", (function(e) {
                n.resetSearch(e.target, !0),
                n.clearSearchResults(e.target, !0)
            }
            )),
            this.elements.forEach((function(e) {
                var t = e.querySelector(".support-search__type");
                n.handleCategories(t)
            }
            ))
        }
        return Zt(e, [{
            key: "findContainer",
            value: function(e) {
                return So(e, ".support-search")
            }
        }, {
            key: "handleCategories",
            value: function(e) {
                var t = this.findContainer(e).dataset
                  , r = So(e, ".support-search__bound").querySelector(".support-search__results");
                this.setTypeBreadcrumb(e, -1, null),
                bs({
                    url: "".concat(t.endpoint, "?mode=categories"),
                    jsonpCallback: "handleCategoriesResponse",
                    success: function(e) {
                        var t = "";
                        e.results && (t += "<ul>",
                        e.results.forEach((function(e) {
                            t += '<li><a data-category_id="'.concat(e.id, '">').concat(e.title, "</a></li>")
                        }
                        )),
                        t += "</ul>",
                        r.innerHTML = t)
                    }
                })
            }
        }, {
            key: "clearSearchResults",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = So(e, ".support-search__product__search");
                if (r.classList.remove("support-search__search--results"),
                t) {
                    var n = r.querySelector("* > ul");
                    n.innerHTML = ""
                }
            }
        }, {
            key: "handleLiveSearchFocusIn",
            value: function(e) {
                var t = this.findContainer(e)
                  , r = So(e, ".support-search__product__search")
                  , n = t.querySelector(".support-search__product__search > ul");
                r.classList.remove("support-search__search--results"),
                n.childNodes.length > 0 && r.classList.add("support-search__search--results")
            }
        }, {
            key: "handleLiveSearchFocusOut",
            value: function(e) {
                this.clearSearchResults(e)
            }
        }, {
            key: "handleLiveSearch",
            value: function(e) {
                var t = this.findContainer(e)
                  , r = So(e, ".support-search__bound")
                  , n = r.querySelector(".support-search__product__search")
                  , i = r.querySelector(".support-search__product__search > ul")
                  , o = t.dataset
                  , a = e.value;
                bs({
                    url: "".concat(o.endpoint, "?mode=live&search=").concat(encodeURIComponent(a)),
                    jsonpCallback: "handleLiveSearchResponse",
                    success: function(e) {
                        var t = "";
                        e.results && e.results.length > 0 ? (n.classList.add("support-search__search--results"),
                        e.results.forEach((function(e) {
                            t += "<li><a>".concat(e, "</a></li>")
                        }
                        ))) : n.classList.remove("support-search__search--results"),
                        i.innerHTML = t
                    }
                })
            }
        }, {
            key: "handleSearchClick",
            value: function(e) {
                var t = this
                  , r = this.findContainer(e)
                  , n = r.dataset
                  , i = e.innerText;
                i = (i = i.replace(/[^0-9a-z \/]/gi, "")).trim(),
                i = window.encodeURIComponent(i),
                bs({
                    url: "".concat(n.endpoint, "?mode=results&search=").concat(i),
                    jsonpCallback: "handleSearchClickResponse",
                    success: function(e) {
                        t.renderResults(r, e)
                    }
                }),
                So(e, "ul").innerHTML = ""
            }
        }, {
            key: "handleCategoryClick",
            value: function(e) {
                var t = this.findContainer(e)
                  , r = So(e, ".support-search__bound")
                  , n = t.dataset
                  , i = e.dataset
                  , o = r.querySelector(".support-search__results");
                this.resetSearch(t),
                this.setTypeBreadcrumb(e, 0, "<a data-categories>".concat(e.innerText, "</a>")),
                bs({
                    url: "".concat(n.endpoint, "?mode=category&search=").concat(i.category_id),
                    jsonpCallback: "handleCategoryClickResponse",
                    success: function(e) {
                        var t = "";
                        e.results && e.results.length > 0 && (t += "<ul>",
                        e.results.forEach((function(e) {
                            t += '<li><a data-brand_id="'.concat(e.id, '" data-category_id="').concat(e.categoryId, '">').concat(e.title, "</a></li>")
                        }
                        )),
                        t += "</ul>"),
                        o.innerHTML = t
                    }
                })
            }
        }, {
            key: "handleBrandClick",
            value: function(e) {
                var t = this
                  , r = this.findContainer(e)
                  , n = So(e, ".support-search__bound")
                  , i = r.dataset
                  , o = e.dataset;
                this.resetSearch(r),
                this.setTypeBreadcrumb(e, 1, '<a data-category_id="'.concat(o.category_id, '">').concat(e.innerText, "</a>")),
                bs({
                    url: "".concat(i.endpoint, "?mode=brand&search=").concat(o.brand_id, "&category=").concat(o.category_id),
                    jsonpCallback: "handleBrandClickResponse",
                    success: function(e) {
                        t.renderResults(n, e)
                    }
                })
            }
        }, {
            key: "renderResults",
            value: function(e, t) {
                var r = e.querySelector(".support-search__results")
                  , n = "";
                if (t.results && t.results.length > 0) {
                    var i = t.results && t.results.length > 1 ? "support-search__result--multi" : "support-search__result--single";
                    n += '<ul class="support-search__result '.concat(i, '">'),
                    t.results.forEach((function(e) {
                        var t = e.subResults && e.subResults.length > 0;
                        n += '<li class="'.concat(t ? "support-search__result--with-sub" : "support-search__result--without-sub", '">'),
                        n += '<span class="support-search__result__title">'.concat(e.title, "</span>"),
                        t ? (n += '<ul class="support-search__result__sub">',
                        e.subResults.forEach((function(e) {
                            e.links && e.links.length > 0 && (n += "<li>",
                            e.title && (n += '<span class="support-search__result__subtitle">'.concat(e.title, "</span>")),
                            n += '<ul class="support-search__result__links">',
                            e.links.forEach((function(e) {
                                n += '<li><a href="'.concat(e.url, '" target="_blank">').concat(e.title, "</a></li>")
                            }
                            )),
                            n += "</ul>",
                            n += "</li>")
                        }
                        )),
                        n += "</ul>") : e.links && e.links.length > 0 && (n += '<ul class="support-search__result__links">',
                        e.links.forEach((function(e) {
                            n += '<li><a href="'.concat(e.url, '" target="_blank">').concat(e.title, "</a></li>")
                        }
                        )),
                        n += "</ul>"),
                        n += "</li>"
                    }
                    )),
                    n += "</ul>",
                    r.classList.add("support-search__results--has-results")
                } else
                    r.classList.remove("support-search__results--has-results");
                r.innerHTML = n
            }
        }, {
            key: "setTypeBreadcrumb",
            value: function(e, t, r) {
                var n = So(e, ".support-search__bound").querySelector(".support-search__title > ul");
                null !== So(e, ".support-search__title") && (t++,
                r = null);
                for (var i = n.childNodes.length - 1; i >= 0 && i >= t; i--)
                    n.removeChild(n.childNodes[i]);
                if (r) {
                    var o = document.createElement("li");
                    o.innerHTML = r,
                    n.appendChild(o)
                }
            }
        }, {
            key: "resetSearch",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = this.findContainer(e)
                  , n = r.querySelector(".support-search__product")
                  , i = n.querySelector(".support-search__product__search input");
                i.value = "",
                t && i.focus && i.focus();
                var o = r.querySelector(".support-search__results");
                o.innerHTML = "",
                o.classList.remove("support-search__results--has-results")
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.dataLayerClickHandler = this.dataLayerClickHandler.bind(this),
            Bo(this.document, "click", ".xrx-fw-mtt-grid-row a", this.dataLayerClickHandler)
        }
        return Zt(e, [{
            key: "dataLayerClickHandler",
            value: function(e) {
                var t = e.desiredTarget;
                if (t) {
                    var r = So(t, ".xrx-fw-mtt-grid-row");
                    if (r) {
                        var n = r.querySelector("h2")
                          , i = r.querySelector("h3");
                        (n || i) && (this.window.dataLayer = this.window.dataLayer || [],
                        this.window.dataLayer.push({
                            event: "LearnMore_ButtonClick",
                            tileTitle: n ? n.innerText : void 0,
                            tileCategory: i ? i.innerText : void 0
                        }))
                    }
                }
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            this.window = t,
            this.document = r,
            this.update = this.update.bind(this),
            Bo(this.document, "focusin", "input,select,textarea", this.update),
            Bo(this.document, "focusout", "input,select,textarea", this.update),
            Bo(this.document, "change", "input,select,textarea", this.update),
            Bo(r, po.MARKETO_FORM_READY, ".xrx-fw-marketo-form", (function(e) {
                Ll(n.document, ".mktoFieldWrap")
            }
            )),
            Bo(r, po.READY, null, (function() {
                Ll(n.document, ":not(.xrx-fw-locator) .xrx-fw-form-inputs__group")
            }
            ))
        }
        return Zt(e, [{
            key: "update",
            value: function(e) {
                var t = e.desiredTarget;
                t && (t.value || t.placeholder || "focusin" === e.type) ? t.parentNode.classList.remove("xrx-fw--inactive") : ("SELECT" !== t.nodeName && !t.value && !t.placeholder || Cl(t)) && t.parentNode.classList.add("xrx-fw--inactive")
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            Qt(this, e),
            this.document = r,
            this.expand = this.expand.bind(this),
            Bo(r, "click", "[data-xrx-fw-expand]", this.expand),
            Bo(r, "click", "[data-xrx-fw-collapse]", this.collapse)
        }
        return Zt(e, [{
            key: "expand",
            value: function(e) {
                e.preventDefault();
                var t = e.desiredTarget
                  , r = t.dataset.xrxFwExpand;
                if (r) {
                    var n = So(t, r);
                    if (n) {
                        var i = n.dataset.xrxFwEcGroup;
                        if (i)
                            for (var o = 0, a = Array.from(this.document.querySelectorAll('[data-xrx-fw-ec-group="'.concat(i, '"]'))); o < a.length; o++) {
                                a[o].setAttribute("aria-expanded", !1)
                            }
                        n.setAttribute("aria-expanded", !0)
                    }
                }
            }
        }, {
            key: "collapse",
            value: function(e) {
                e.preventDefault();
                var t = e.desiredTarget
                  , r = t.dataset.xrxFwCollapse;
                if (r) {
                    var n = So(t, r);
                    n && n.setAttribute("aria-expanded", !1)
                }
            }
        }]),
        e
    }())(window,document),
    new (function() {
        function e(t, r) {
            var n = this;
            Qt(this, e),
            r.querySelector("[data-xrx-fw-scrollbar-width]") && (this.calculateScrollbarWidth(t, r),
            Yo(t, r, (function(e, i) {
                return i !== vo.NONE && n.calculateScrollbarWidth(t, r)
            }
            ), (function(e, i) {
                return i !== vo.NONE && n.calculateScrollbarWidth(t, r)
            }
            )))
        }
        return Zt(e, [{
            key: "calculateScrollbarWidth",
            value: function(e, t) {
                e.innerWidth > t.body.clientWidth + 5 ? (t.body.classList.add("xrx-fw-scrollbar"),
                t.body.style.setProperty && t.body.style.setProperty("--scrollbar-width", e.innerWidth - t.body.clientWidth + "px")) : (t.body.classList.remove("xrx-fw-scrollbar"),
                t.body.style.setProperty && t.body.style.setProperty("--scrollbar-width", "0px"))
            }
        }]),
        e
    }())(window,document),
    window.digitalData = window.digitalData || {},
    window.digitalData.environment = window.digitalData.environment || {},
    window.digitalData.environment.frameworkType = window.digitalData.environment.frameworkType || "release",
    window.digitalData.environment.frameworkVersion = window.digitalData.environment.frameworkVersion || "24161",
    new pa(window,document),
    new Uo(window,document),
    new Ta(window,document),
    new La(window,document),
    new Ra(window,document),
    new ts(window,document),
    window.xrxFw = Ua,
    Ko(document, po.READY, window.xrxFw)
}();
