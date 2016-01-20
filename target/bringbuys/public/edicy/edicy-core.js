!function (e, t) {
    function n(e) {
        var t = e.length, n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Et[e] = {};
        return ut.each(e.match(ct) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ut.cache : e, f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t)return f || (l ? e[s] = f = Z.pop() || ut.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType, u = a ? ut.cache : e, l = a ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++)delete o[t[r]];
                    if (!(n ? s : ut.isEmptyObject)(o))return
                }
                (n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : kt.test(r) ? ut.parseJSON(r) : r
                } catch (o) {
                }
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t))return ut.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return ut.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t))return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e, function (e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        var t = Xt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e), a = ut._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)ut.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ut.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events)ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
        if (!a)for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
    }

    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;)if (t = Nn[i] + n, t in e)return t;
        return r
    }

    function T(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }

    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ut._data(r, "olddisplay", C(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function k(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function N(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ut.css(e, n + kn[o], !0, i)), r ? ("content" === n && (a -= ut.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + kn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + kn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + kn[o] + "Width", !0, i)));
        return a
    }

    function S(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = fn(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i))return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function C(e) {
        var t = V, n = wn[e];
        return n || (n = j(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), cn.detach()), wn[e] = n), n
    }

    function j(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body), r = ut.css(n[0], "display");
        return n.remove(), r
    }

    function _(e, t, n, r) {
        var i;
        if (ut.isArray(t))ut.each(t, function (t, i) {
            n || Cn.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ut.type(t))r(e, t); else for (i in t)_(e + "[" + i + "]", t[i], n, r)
    }

    function A(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function O(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0, ut.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var a = {}, s = e === Un;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function D(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e
    }

    function H(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c)s in r && (n[c[s]] = r[s]);
        for (; "*" === l[0];)l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in u)if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0]in r)a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function L(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])for (i in e.converters)a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i)for (n in a)if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0)if (i && e["throws"])t = i(t); else try {
                    t = i(t)
                } catch (c) {
                    return {state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r}
                }
            }
            l = r
        }
        return {state: "success", data: t}
    }

    function M() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function q() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ut.now()
    }

    function R(e, t) {
        ut.each(t, function (t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++)if (r[i].call(e, t, n))return
        })
    }

    function B(e, t, n) {
        var r, i, o = 0, a = ir.length, s = ut.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = Zn || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: ut.extend({}, t),
            opts: ut.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || q(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++)if (r = ir[o].call(l, e, c, l.opts))return r;
        return R(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function I(e, t) {
        var n, r, i, o, a;
        for (i in e)if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand"in a) {
            n = a.expand(n), delete e[r];
            for (i in n)i in e || (e[i] = n[i], t[i] = o)
        } else t[r] = o
    }

    function P(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && T(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, p.always(function () {
            p.always(function () {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)if (a = t[i], tr.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show"))continue;
            g.push(i)
        }
        if (o = g.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden"in s && (m = s.hidden), u && (s.hidden = !m), m ? ut(e).show() : p.done(function () {
                ut(e).hide()
            }), p.done(function () {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h)ut.style(e, t, h[t])
            });
            for (i = 0; o > i; i++)r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function W(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = kn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function U(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var z, X, J = typeof t, V = e.document, Q = e.location, Y = e.jQuery, G = e.$, K = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, rt = Z.slice, it = Z.indexOf, ot = K.toString, at = K.hasOwnProperty, st = et.trim, ut = function (e, t) {
        return new ut.fn.init(e, t, X)
    }, lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ct = /\S+/g, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, vt = /^-ms-/, bt = /-([\da-z])/gi, xt = function (e, t) {
        return t.toUpperCase()
    }, wt = function (e) {
        (V.addEventListener || "load" === e.type || "complete" === V.readyState) && (Tt(), ut.ready())
    }, Tt = function () {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (V.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
    };
    ut.fn = ut.prototype = {
        jquery: et, constructor: ut, init: function (e, n, r) {
            var i, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), dt.test(i[1]) && ut.isPlainObject(n))for (i in n)ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = V.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = V, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return rt.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return ut.each(this, e, t)
        }, ready: function (e) {
            return ut.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(rt.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(ut.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: nt, sort: [].sort, splice: [].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)if (null != (o = arguments[u]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ut.extend({
        noConflict: function (t) {
            return e.$ === ut && (e.$ = G), t && e.jQuery === ut && (e.jQuery = Y), ut
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ut.readyWait++ : ut.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                if (!V.body)return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (z.resolveWith(V, [ut]), ut.fn.trigger && ut(V).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === ut.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === ut.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e))return !1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || V;
            var r = dt.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ut.trim(n), n && ht.test(n.replace(mt, "@").replace(yt, "]").replace(gt, ""))) ? Function("return " + n)() : (ut.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && ut.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(vt, "ms-").replace(bt, xt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)for (; a > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (s)for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: st && !st.call("﻿ ") ? function (e) {
            return null == e ? "" : st.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ft, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (it)return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else for (; n[o] !== t;)e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)for (; a > o; o++)i = t(e[o], o, r), null != i && (u[u.length] = i); else for (o in e)i = t(e[o], o, r), null != i && (u[u.length] = i);
            return tt.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            }, i.guid = e.guid = e.guid || ut.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r)ut.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(ut(e), n)
                })), n))for (; l > u; u++)n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }
    }), ut.ready.promise = function (t) {
        if (!z)if (z = ut.Deferred(), "complete" === V.readyState)setTimeout(ut.ready); else if (V.addEventListener)V.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1); else {
            V.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && V.documentElement
            } catch (r) {
            }
            n && n.doScroll && function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ut.ready()
                }
            }()
        }
        return z.promise(t)
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), X = ut(V);
    var Et = {};
    ut.Callbacks = function (e) {
        e = "string" == typeof e ? Et[e] || r(e) : ut.extend({}, e);
        var n, i, o, a, s, u, l = [], c = !e.once && [], f = function (t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    !function r(t) {
                        ut.each(t, function (t, n) {
                            var i = ut.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), n ? a = l.length : i && (u = t, f(i))
                }
                return this
            }, remove: function () {
                return l && ut.each(arguments, function (e, t) {
                    for (var r; (r = ut.inArray(t, l, r)) > -1;)l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                }), this
            }, has: function (e) {
                return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], this
            }, disable: function () {
                return l = c = i = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = t, i || p.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return p
    }, ut.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return ut.Deferred(function (n) {
                        ut.each(t, function (t, o) {
                            var a = o[0], s = ut.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? ut.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, ut.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = rt.call(arguments), a = o.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ut.Deferred(), l = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)for (t = Array(a), n = Array(a), r = Array(a); a > i; i++)o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ut.support = function () {
        var t, n, r, i, o, a, s, u, l, c, f = V.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length)return {};
        o = V.createElement("select"), s = o.appendChild(V.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!i.value,
            optSelected: s.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = V.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = V.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        })f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ut(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = V.getElementsByTagName("body")[0];
            a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(V.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== J && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Nt = /([A-Z])/g;
    ut.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ut.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++)i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                ut.data(this, e)
            }) : ut.access(this, function (n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) : null : (this.each(function () {
                    ut.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ut.removeData(this, e)
            })
        }
    }), ut.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ut._data(e, n), r && (!i || ut.isArray(r) ? i = ut._data(e, n, ut.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ut.queue(e, t), r = n.length, i = n.shift(), o = ut._queueHooks(e, t), a = function () {
                ut.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function () {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
        }
    }), ut.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ut.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = ut.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)r = ut._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var St, Ct, jt = /[\t\r\n]/g, _t = /\r/g, At = /^(?:input|select|textarea|button|object)$/i, Ot = /^(?:a|area)$/i, Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Ht = /^(?:checked|selected)$/i, Lt = ut.support.getSetAttribute, Mt = ut.support.input;
    ut.fn.extend({
        attr: function (e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ut.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = ut.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ct) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                for (o = 0; i = t[o++];)0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ut.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ct) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return ut.isFunction(e) ? this.each(function (n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];)s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else(n === J || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ut.isFunction(e), this.each(function (n) {
                var o, a = ut(this);
                1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)) : void 0
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function () {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === J ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Dt.test(n) ? Ct : St)), r === t ? i && o && "get"in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== J && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set"in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(ct);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = ut.propFix[n] || n, Dt.test(n) ? !Lt && Ht.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Lt ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), Ct = {
        get: function (e, n) {
            var r = ut.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? Mt && Lt ? null != i : Ht.test(n) ? e[ut.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : Mt && Lt || !Ht.test(n) ? e.setAttribute(!Lt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Mt && Lt || (ut.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        }, set: function (e, n, r) {
            return ut.nodeName(e, "input") ? (e.defaultValue = n, t) : St && St.set(e, n, r)
        }
    }), Lt || (St = ut.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        }, set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ut.attrHooks.contenteditable = {
        get: St.get, set: function (e, t, n) {
            St.set(e, "" === t ? !1 : t, n)
        }
    }, ut.each(["width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), ut.support.style || (ut.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set: function (e, n) {
                return ut.isArray(n) ? e.checked = ut.inArray(ut(e).val(), n) >= 0 : t
            }
        })
    });
    var Ft = /^(?:input|select|textarea)$/i, qt = /^key/, Rt = /^(?:mouse|contextmenu)|click/, Bt = /^(?:focusinfocus|focusoutblur)$/, It = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = ut._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function (e) {
                    return typeof ut === J || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;)a = It.exec(n[u]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ut.event.special[h] || {}, p = ut.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ut.event.global[h] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ct) || [""], l = t.length; l--;)if (s = It.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;)a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c)ut.event.remove(e, d + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V], h = at.call(n, "type") ? n.type : n, g = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Bt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || h, Bt.test(l + h) || (u = u.parentNode); u; u = u.parentNode)d.push(u), f = u;
                    f === (i.ownerDocument || V) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped();)n.type = p > 1 ? l : c.bindType || h, a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {
                    }
                    ut.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [], u = rt.call(arguments), l = (ut._data(this, "events") || {})[e.type] || [], c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), o[r] && o.push(i);
                o.length && s.push({elem: l, handlers: o})
            }
            return n.length > u && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[ut.expando])return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Rt.test(i) ? this.mouseHooks : qt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || V, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, click: {
                trigger: function () {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            }, focus: {
                trigger: function () {
                    if (this !== V.activeElement && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ut.extend(new ut.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ut.removeEvent = V.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
    }, ut.Event = function (e, n) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && ut.extend(this, n), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, t) : new ut.Event(e, n)
    }, ut.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ut.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ut.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ut._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), t)
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function () {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
            })), !1) : (ut.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return ut.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), ut.support.focusinBubbles || ut.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0)
        };
        ut.event.special[t] = {
            setup: function () {
                0 === n++ && V.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && V.removeEventListener(e, r, !0)
            }
        }
    }), ut.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e)this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = l; else if (!i)return this;
            return 1 === o && (s = i, i = function (e) {
                return ut().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function () {
                ut.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                ut.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                ut.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? ut.event.trigger(e, n, r, !0) : t
        }
    }), function (e, t) {
        function n(e) {
            return ht.test(e + "")
        }

        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function i(e) {
            return e[B] = !0, e
        }

        function o(e) {
            var t = O.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t : I) !== O && A(t), t = t || O, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (s = t.nodeType) && 9 !== s)return [];
            if (!H && !r) {
                if (i = gt.exec(e))if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (i[2])return G.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && P.getByClassName && t.getElementsByClassName)return G.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                }
                if (P.qsa && !L.test(e)) {
                    if (c = !0, d = B, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g)try {
                        return G.apply(n, K.call(h.querySelectorAll(g), 0)), n
                    } catch (m) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }

        function s(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e, t) {
            var n, r, i, o, s, u, l, c = z[e + " "];
            if (c)return t ? 0 : c.slice(0);
            for (s = e, u = [], l = k.preFilter; s;) {
                (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in k.filter)!(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? a.error(e) : z(e, u).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i)if (l = t[B] || (t[B] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === E)return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || E, u[1] === !0)return !0
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[B] && (r = m(r)), o && !o[B] && (o = m(o, a)), i(function (i, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, m = i || b(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? m : g(m, p, e, s, u), v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r)for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : G.apply(a, v)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, a, !0), l = d(function (e) {
                return Z.call(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                return !o && (r || n !== _) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++)if (n = k.relative[e[s].type])c = [d(h(c), n)]; else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                    for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function v(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function (i, s, u, l, c) {
                var f, p, d, h = [], m = 0, y = "0", v = i && [], b = null != c, x = _, w = i || o && k.find.TAG("*", c && s.parentNode || s), T = $ += null == x ? 1 : Math.random() || .1;
                for (b && (_ = s !== O && s, E = n); null != (f = w[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p++];)if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && ($ = T, E = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p++];)d(v, h, s, u);
                    if (i) {
                        if (m > 0)for (; y--;)v[y] || h[y] || (h[y] = Y.call(l));
                        h = g(h)
                    }
                    G.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = T, _ = x), v
            };
            return r ? i(s) : s
        }

        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)a(e, t[r], n);
            return n
        }

        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !H && k.relative[o[1].type]) {
                    if (t = k.find.ID(a.matches[0].replace(xt, wt), t)[0], !t)return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)if ((u = k.find[s]) && (r = u(a.matches[0].replace(xt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e)return G.apply(n, K.call(r, 0)), n;
                    break
                }
            }
            return C(e, l)(r, t, H, n, dt.test(e)), n
        }

        function w() {
        }

        var T, E, k, N, S, C, j, _, A, O, D, H, L, M, F, q, R, B = "sizzle" + -new Date, I = e.document, P = {}, $ = 0, W = 0, U = r(), z = r(), X = r(), J = typeof t, V = 1 << 31, Q = [], Y = Q.pop, G = Q.push, K = Q.slice, Z = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = RegExp("^" + et + "*," + et + "*"), lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = RegExp(ot), ft = RegExp("^" + nt + "$"), pt = {
            ID: RegExp("^#(" + tt + ")"),
            CLASS: RegExp("^\\.(" + tt + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + it),
            PSEUDO: RegExp("^" + ot),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function (e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            K.call(I.documentElement.childNodes, 0)[0].nodeType
        } catch (Tt) {
            K = function (e) {
                for (var t, n = []; t = this[e++];)n.push(t);
                return n
            }
        }
        S = a.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = a.setDocument = function (e) {
            var r = e ? e.ownerDocument || e : I;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, D = r.documentElement, H = S(r), P.tagNameNoComments = o(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), P.attributes = o(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), P.getByClassName = o(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), P.getByName = o(function (e) {
                e.id = B + 0, e.innerHTML = "<a name='" + B + "'></a><div name='" + B + "'></div>", D.insertBefore(e, D.firstChild);
                var t = r.getElementsByName && r.getElementsByName(B).length === 2 + r.getElementsByName(B + 0).length;
                return P.getIdNotName = !r.getElementById(B), D.removeChild(e), t
            }), k.attrHandle = o(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== J && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, P.getIdNotName ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== J && !H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (k.find.ID = function (e, n) {
                if (typeof n.getElementById !== J && !H) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== J && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = P.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.NAME = P.getByName && function (e, n) {
                    return typeof n.getElementsByName !== J ? n.getElementsByName(name) : t
                }, k.find.CLASS = P.getByClassName && function (e, n) {
                    return typeof n.getElementsByClassName === J || H ? t : n.getElementsByClassName(e)
                }, M = [], L = [":focus"], (P.qsa = n(r.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || L.push(":checked")
            }), o(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && L.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (P.matchesSelector = n(F = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                P.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", ot)
            }), L = RegExp(L.join("|")), M = RegExp(M.join("|")), q = n(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, R = D.compareDocumentPosition ? function (e, t) {
                var n;
                return e === t ? (j = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || q(I, e) ? -1 : t === r || q(I, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (e === t)return j = !0, 0;
                if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a)return s(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; u[i] === l[i];)i++;
                return i ? s(u[i], l[i]) : u[i] === I ? -1 : l[i] === I ? 1 : 0
            }, j = !1, [0, 0].sort(R), P.detectDuplicates = j, O) : O
        }, a.matches = function (e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== O && A(e), t = t.replace(bt, "='$1']"), !(!P.matchesSelector || H || M && M.test(t) || L.test(t)))try {
                var n = F.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (r) {
            }
            return a(t, O, null, [e]).length > 0
        }, a.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && A(e), q(e, t)
        }, a.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== O && A(e), H || (t = t.toLowerCase()), (n = k.attrHandle[t]) ? n(e) : H || P.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            if (j = !P.detectDuplicates, e.sort(R), j) {
                for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return e
        }, N = a.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += N(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += N(t);
            return n
        }, k = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = U[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && U(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[B] || (m[B] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[B] || (t[B] = {}))[e]) && l[0] === $)p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[B] || (f[B] = {}))[e] = [$, p]), f !== t)););
                            return p -= i, p === r || 0 === p % r && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[B] ? r(t) : r.length > 1 ? (n = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;)i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = C(e.replace(at, "$1"));
                    return r[B] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return a(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function (t) {
                        var n;
                        do if (n = H ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === D
                }, focus: function (e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !k.pseudos.empty(e)
                }, header: function (e) {
                    return yt.test(e.nodeName)
                }, input: function (e) {
                    return mt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;)e.push(r);
                    return e
                })
            }
        };
        for (T in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[T] = u(T);
        for (T in{submit: !0, reset: !0})k.pseudos[T] = l(T);
        C = a.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;)o = y(t[n]), o[B] ? r.push(o) : i.push(o);
                o = X(e, v(i, r))
            }
            return o
        }, k.pseudos.nth = k.pseudos.eq, k.filters = w.prototype = k.pseudos, k.setFilters = new w, A(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains
    }(e);
    var Pt = /Until$/, $t = /^(?:parents|prev(?:Until|All))/, Wt = /^.[^:#\[\.,]*$/, Ut = ut.expr.match.needsContext, zt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ut.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e)return r = this, this.pushStack(ut(e).filter(function () {
                for (t = 0; i > t; t++)if (ut.contains(r[t], this))return !0
            }));
            for (n = [], t = 0; i > t; t++)ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        }, has: function (e) {
            var t, n = ut(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (ut.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(f(this, e, !1))
        }, filter: function (e) {
            return this.pushStack(f(this, e, !0))
        }, is: function (e) {
            return !!e && ("string" == typeof e ? Ut.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ut.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e), r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ut.fn.andSelf = ut.fn.addBack, ut.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ut.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ut.dir(e, "parentNode", n)
        }, next: function (e) {
            return c(e, "nextSibling")
        }, prev: function (e) {
            return c(e, "previousSibling")
        }, nextAll: function (e) {
            return ut.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return ut.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ut.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ut.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ut.sibling(e.firstChild)
        }, contents: function (e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
        }
    }, function (e, t) {
        ut.fn[e] = function (n, r) {
            var i = ut.map(this, t, n);
            return Pt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !zt[e] ? ut.unique(i) : i, this.length > 1 && $t.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ut.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Jt = / jQuery\d+="(?:null|\d+)"/g, Vt = RegExp("<(?:" + Xt + ")[\\s/>]", "i"), Qt = /^\s+/, Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Gt = /<([\w:]+)/, Kt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, un = p(V), ln = un.appendChild(V.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
        text: function (e) {
            return ut.access(this, function (e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return ut.isFunction(e) ? this.each(function (t) {
                ut(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ut(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ut.isFunction(e);
            return this.each(function (n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ut.clone(this, e, t)
            })
        }, html: function (e) {
            return ut.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Jt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Vt.test(e) || !ut.support.leadingWhitespace && Qt.test(e) || sn[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t))
            })
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0, f = this.length, p = this, m = f - 1, y = e[0], v = ut.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || ut.support.checkClone) && nn.test(y))return this.each(function (i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++)o = l, c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                if (a)for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++)o = s[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null
            }
            return this
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ut.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), ut(o[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ut.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a)r[a] && v(i, r[a]);
            if (t)if (n)for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++)y(i, r[a]); else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++)if (o = e[g], o || 0 === o)if ("object" === ut.type(o))ut.merge(h, o.nodeType ? [o] : o); else if (Zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Gt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Yt, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
                if (!ut.support.leadingWhitespace && Qt.test(o) && h.push(t.createTextNode(Qt.exec(o)[0])), !ut.support.tbody)for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), g = 0; o = h[g++];)if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))for (i = 0; o = s[i++];)rn.test(o.type || "") && n.push(o);
            return s = null, d
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[a]); a++)if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events)for (r in o.events)c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== J ? n.removeAttribute(s) : n[s] = null, Z.push(i))
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = RegExp("^(" + lt + ")(.*)$", "i"), bn = RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), xn = RegExp("^([+-])=(" + lt + ")", "i"), wn = {BODY: "block"}, Tn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, En = {
        letterSpacing: 0,
        fontWeight: 400
    }, kn = ["Top", "Right", "Bottom", "Left"], Nn = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function (e, n) {
            return ut.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++)a[n[s]] = ut.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : T(this)) ? ut(this).show() : ut(this).hide()
            })
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ut.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n), l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                    l[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in En && (a = En[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (fn = function (t) {
        return e.getComputedStyle(t, null)
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : V.documentElement.currentStyle && (fn = function (e) {
        return e.currentStyle
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ut.each(["height", "width"], function (e, n) {
        ut.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function () {
                    return S(e, n, i)
                }) : S(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && fn(e);
                return k(e, t, r ? N(e, n, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function (e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }), ut(function () {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ut.swap(e, {display: "inline-block"}, pn, [e, "marginRight"]) : t
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, n) {
            ut.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = pn(e, n), bn.test(r) ? ut(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function (e) {
        return !ut.expr.filters.hidden(e)
    }), ut.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ut.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ut.cssHooks[e + t].set = k)
    });
    var Sn = /%20/g, Cn = /\[\]$/, jn = /\r?\n/g, _n = /^(?:submit|button|image|reset|file)$/i, An = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function () {
            return ut.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && An.test(this.nodeName) && !_n.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ut(this).val();
                return null == n ? null : ut.isArray(n) ? ut.map(n, function (e) {
                    return {name: t.name, value: e.replace(jn, "\r\n")}
                }) : {name: t.name, value: n.replace(jn, "\r\n")}
            }).get()
        }
    }), ut.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e))ut.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)_(r, e[r], n, o);
        return i.join("&").replace(Sn, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ut.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ut.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var On, Dn, Hn = ut.now(), Ln = /\?/, Mn = /#.*$/, Fn = /([?&])_=[^&]*/, qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bn = /^(?:GET|HEAD)$/, In = /^\/\//, Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, $n = ut.fn.load, Wn = {}, Un = {}, zn = "*/".concat("*");
    try {
        Dn = Q.href
    } catch (Xn) {
        Dn = V.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    On = Pn.exec(Dn.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
        if ("string" != typeof e && $n)return $n.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ut.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ut.each(["get", "post"], function (e, n) {
        ut[n] = function (e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Rn.test(On[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": ut.parseJSON, "text xml": ut.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? D(D(e, ut.ajaxSettings), t) : D(ut.ajaxSettings, e)
        },
        ajaxPrefilter: A(Wn),
        ajaxTransport: A(Un),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, E = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = H(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 204 === e ? (o = !0, E = "nocontent") : 304 === e ? (o = !0, E = "notmodified") : (o = L(p, b), E = o.state, f = o.data, v = o.error, o = !v)) : (v = E, (e || !E) && (E = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || E) + "", o ? g.resolveWith(d, [f, E, T]) : g.rejectWith(d, [T, E, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : v]), m.fireWith(d, [T, E]), l && (h.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event, g = ut.Deferred(), m = ut.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!f)for (f = {}; t = qn.exec(s);)f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? s : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)y[t] = [y[t], e[t]]; else T.always(e[T.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(In, On[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (i = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (On[3] || ("http:" === On[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), O(Wn, p, n, T), 2 === x)return T;
            l = p.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Bn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Ln.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + Hn++) : a + (Ln.test(a) ? "&" : "?") + "_=" + Hn++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x))return T.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})T[o](p[o]);
            if (c = O(Un, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (E) {
                    if (!(2 > x))throw E;
                    r(-1, E)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function (e, n) {
            return ut.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return ut.get(e, t, n, "json")
        }
    }), ut.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return ut.globalEval(e), e
            }
        }
    }), ut.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = V.head || ut("head")[0] || V.documentElement;
            return {
                send: function (t, i) {
                    n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Jn = [], Vn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Jn.pop() || ut.expando + "_" + Hn++;
            return this[e] = !0, e
        }
    }), ut.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Vn, "$1" + o) : n.jsonp !== !1 && (n.url += (Ln.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ut.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Jn.push(o)), s && ut.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Qn, Yn, Gn = 0, Kn = e.ActiveXObject && function () {
            var e;
            for (e in Qn)Qn[e](t, !0)
        };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && M() || F()
    } : M, Yn = ut.ajaxSettings.xhr(), ut.support.cors = !!Yn && "withCredentials"in Yn, Yn = ut.support.ajax = !!Yn, Yn && ut.ajaxTransport(function (n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)u.setRequestHeader(s, i[s])
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState))if (r = t, a && (u.onreadystatechange = ut.noop, Kn && delete Qn[a]), i)4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        f && o(s, c, f, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Gn, Kn && (Qn || (Qn = {}, ut(e).unload(Kn)), Qn[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/, nr = RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [P], or = {
        "*": [function (e, t) {
            var n, r, i = this.createTween(e, t), o = nr.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                    s = ut.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
            }
            return i
        }]
    };
    ut.Animation = ut.extend(B, {
        tweener: function (e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ut.Tween = $, $.prototype = {
        constructor: $, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ut.each(["toggle", "show", "hide"], function (e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), ut.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ut.isEmptyObject(e), o = ut.speed(t, n, r), a = function () {
                var t = B(this, ut.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }, (i || ut._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = ut.timers, a = ut._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ut._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ut.timers, a = r ? r.length : 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ut.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ut.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ut.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
        }, r
    }, ut.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ut.timers = [], ut.fx = $.prototype.init, ut.fx.tick = function () {
        var e, n = ut.timers, r = 0;
        for (Zn = ut.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t
    }, ut.fx.timer = function (e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function () {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function () {
        clearInterval(er), er = null
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers, function (t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()), r = U(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ut.offset = {
        setOffset: function (e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e), s = a.offset(), u = ut.css(e, "top"), l = ut.css(e, "left"), c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using"in t ? t.using.call(e, f) : a.css(f)
        }
    }, ut.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || V.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");)e = e.offsetParent;
                return e || V.documentElement
            })
        }
    }), ut.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function (i) {
            return ut.access(this, function (e, i, o) {
                var a = U(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ut.each({Height: "height", Width: "width"}, function (e, n) {
        ut.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            ut.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ut.access(this, function (n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ut
    })
}(window), function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n;
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (r) {
            var i, o, a, s, u, l, c, f;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("cross-domain"), u = s === t ? null : s, l = r.data("with-credentials") || null, c = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
                    var p = r.data("ujs:submit-button");
                    p && (a.push(p), r.data("ujs:submit-button", null))
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                f = {
                    type: i || "GET", data: a, dataType: c, beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i])
                    }, success: function (e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    }, complete: function (e, t) {
                        r.trigger("ajax:complete", [e, t])
                    }, error: function (e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    }, crossDomain: u
                }, l && (f.xhrFields = {withCredentials: l}), o && (f.url = o);
                var d = n.ajax(f);
                return r.trigger("ajax:send", d), d
            }
            return !1
        },
        handleMethod: function (r) {
            var i = n.href(r), o = r.data("method"), a = r.attr("target"), s = e("meta[name=csrf-token]").attr("content"), u = e("meta[name=csrf-param]").attr("content"), l = e('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            u !== t && s !== t && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
        },
        disableFormElements: function (t) {
            t.find(n.disableSelector).each(function () {
                var t = e(this), n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(n.enableSelector).each(function () {
                var t = e(this), n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, r = e.data("confirm"), i = !1;
            return r ? (n.fire(e, "confirm") && (i = n.confirm(r), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
        },
        blankInputs: function (t, n, r) {
            var i, o, a = e(), s = n || "input,textarea", u = t.find(s);
            return u.each(function () {
                if (i = e(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !o == !r) {
                    if (i.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(document).delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), e(document).delegate(n.linkClickSelector, "click.rails", function (r) {
        var i = e(this), o = i.data("method"), a = i.data("params");
        if (!n.allowAction(i))return n.stopEverything(r);
        if (i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
            if (!(!r.metaKey && !r.ctrlKey || o && "GET" !== o || a))return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.error(function () {
                n.enableElement(i)
            }), !1
        }
        return i.data("method") ? (n.handleMethod(i), !1) : void 0
    }), e(document).delegate(n.buttonClickSelector, "click.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.inputChangeSelector, "change.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.formSubmitSelector, "submit.rails", function (r) {
        var i = e(this), o = i.data("remote") !== t, a = n.blankInputs(i, n.requiredInputSelector), s = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i))return n.stopEverything(r);
        if (a && i.attr("novalidate") == t && n.fire(i, "ajax:aborted:required", [a]))return n.stopEverything(r);
        if (o) {
            if (s) {
                setTimeout(function () {
                    n.disableFormElements(i)
                }, 13);
                var u = n.fire(i, "ajax:aborted:file", [s]);
                return u || setTimeout(function () {
                    n.enableFormElements(i)
                }, 13), u
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function () {
            n.disableFormElements(i)
        }, 13)
    }), e(document).delegate(n.formInputClickSelector, "click.rails", function (t) {
        var r = e(this);
        if (!n.allowAction(r))return n.stopEverything(t);
        var i = r.attr("name"), o = i ? {name: i, value: r.val()} : null;
        r.closest("form").data("ujs:submit-button", o)
    }), e(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && n.disableFormElements(e(this))
    }), e(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"), n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery);
var JSON;
if (JSON || (JSON = {}), function () {
        "use strict";
        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, o, a, s = gap, u = t[e];
            switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
                case"string":
                    return quote(u);
                case"number":
                    return isFinite(u) ? String(u) : "null";
                case"boolean":
                case"null":
                    return String(u);
                case"object":
                    if (!u)return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                        for (o = u.length, n = 0; o > n; n += 1)a[n] = str(n, u) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)for (o = rep.length, n = 0; o > n; n += 1)"string" == typeof rep[n] && (r = rep[n], i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i)); else for (r in u)Object.prototype.hasOwnProperty.call(u, r) && (i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }

        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)for (r = 0; n > r; r += 1)indent += " "; else"string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))throw new Error("JSON.stringify");
            return str("", {"": e})
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }

            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), function () {
        var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.push, s = r.slice, u = r.concat, l = i.toString, c = i.hasOwnProperty, f = r.forEach, p = r.map, d = r.reduce, h = r.reduceRight, g = r.filter, m = r.every, y = r.some, v = r.indexOf, b = r.lastIndexOf, x = Array.isArray, w = Object.keys, T = o.bind, E = function (e) {
            return e instanceof E ? e : this instanceof E ? void(this._wrapped = e) : new E(e)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = E), exports._ = E) : e._ = E, E.VERSION = "1.6.0";
        var k = E.each = E.forEach = function (e, t, r) {
            if (null == e)return e;
            if (f && e.forEach === f)e.forEach(t, r); else if (e.length === +e.length) {
                for (var i = 0, o = e.length; o > i; i++)if (t.call(r, e[i], i, e) === n)return
            } else for (var a = E.keys(e), i = 0, o = a.length; o > i; i++)if (t.call(r, e[a[i]], a[i], e) === n)return;
            return e
        };
        E.map = E.collect = function (e, t, n) {
            var r = [];
            return null == e ? r : p && e.map === p ? e.map(t, n) : (k(e, function (e, i, o) {
                r.push(t.call(n, e, i, o))
            }), r)
        };
        var N = "Reduce of empty array with no initial value";
        E.reduce = E.foldl = E.inject = function (e, t, n, r) {
            var i = arguments.length > 2;
            if (null == e && (e = []), d && e.reduce === d)return r && (t = E.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            if (k(e, function (e, o, a) {
                    i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
                }), !i)throw new TypeError(N);
            return n
        }, E.reduceRight = E.foldr = function (e, t, n, r) {
            var i = arguments.length > 2;
            if (null == e && (e = []), h && e.reduceRight === h)return r && (t = E.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var a = E.keys(e);
                o = a.length
            }
            if (k(e, function (s, u, l) {
                    u = a ? a[--o] : --o, i ? n = t.call(r, n, e[u], u, l) : (n = e[u], i = !0)
                }), !i)throw new TypeError(N);
            return n
        }, E.find = E.detect = function (e, t, n) {
            var r;
            return S(e, function (e, i, o) {
                return t.call(n, e, i, o) ? (r = e, !0) : void 0
            }), r
        }, E.filter = E.select = function (e, t, n) {
            var r = [];
            return null == e ? r : g && e.filter === g ? e.filter(t, n) : (k(e, function (e, i, o) {
                t.call(n, e, i, o) && r.push(e)
            }), r)
        }, E.reject = function (e, t, n) {
            return E.filter(e, function (e, r, i) {
                return !t.call(n, e, r, i)
            }, n)
        }, E.every = E.all = function (e, t, r) {
            t || (t = E.identity);
            var i = !0;
            return null == e ? i : m && e.every === m ? e.every(t, r) : (k(e, function (e, o, a) {
                return (i = i && t.call(r, e, o, a)) ? void 0 : n
            }), !!i)
        };
        var S = E.some = E.any = function (e, t, r) {
            t || (t = E.identity);
            var i = !1;
            return null == e ? i : y && e.some === y ? e.some(t, r) : (k(e, function (e, o, a) {
                return i || (i = t.call(r, e, o, a)) ? n : void 0
            }), !!i)
        };
        E.contains = E.include = function (e, t) {
            return null == e ? !1 : v && e.indexOf === v ? -1 != e.indexOf(t) : S(e, function (e) {
                return e === t
            })
        }, E.invoke = function (e, t) {
            var n = s.call(arguments, 2), r = E.isFunction(t);
            return E.map(e, function (e) {
                return (r ? t : e[t]).apply(e, n)
            })
        }, E.pluck = function (e, t) {
            return E.map(e, E.property(t))
        }, E.where = function (e, t) {
            return E.filter(e, E.matches(t))
        }, E.findWhere = function (e, t) {
            return E.find(e, E.matches(t))
        }, E.max = function (e, t, n) {
            if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535)return Math.max.apply(Math, e);
            var r = -1 / 0, i = -1 / 0;
            return k(e, function (e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                s > i && (r = e, i = s)
            }), r
        }, E.min = function (e, t, n) {
            if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535)return Math.min.apply(Math, e);
            var r = 1 / 0, i = 1 / 0;
            return k(e, function (e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                i > s && (r = e, i = s)
            }), r
        }, E.shuffle = function (e) {
            var t, n = 0, r = [];
            return k(e, function (e) {
                t = E.random(n++), r[n - 1] = r[t], r[t] = e
            }), r
        }, E.sample = function (e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = E.values(e)), e[E.random(e.length - 1)]) : E.shuffle(e).slice(0, Math.max(0, t))
        };
        var C = function (e) {
            return null == e ? E.identity : E.isFunction(e) ? e : E.property(e)
        };
        E.sortBy = function (e, t, n) {
            return t = C(t), E.pluck(E.map(e, function (e, r, i) {
                return {value: e, index: r, criteria: t.call(n, e, r, i)}
            }).sort(function (e, t) {
                var n = e.criteria, r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n)return 1;
                    if (r > n || void 0 === r)return -1
                }
                return e.index - t.index
            }), "value")
        };
        var j = function (e) {
            return function (t, n, r) {
                var i = {};
                return n = C(n), k(t, function (o, a) {
                    var s = n.call(r, o, a, t);
                    e(i, s, o)
                }), i
            }
        };
        E.groupBy = j(function (e, t, n) {
            E.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), E.indexBy = j(function (e, t, n) {
            e[t] = n
        }), E.countBy = j(function (e, t) {
            E.has(e, t) ? e[t]++ : e[t] = 1
        }), E.sortedIndex = function (e, t, n, r) {
            n = C(n);
            for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
                var s = o + a >>> 1;
                n.call(r, e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }, E.toArray = function (e) {
            return e ? E.isArray(e) ? s.call(e) : e.length === +e.length ? E.map(e, E.identity) : E.values(e) : []
        }, E.size = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : E.keys(e).length
        }, E.first = E.head = E.take = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : s.call(e, 0, t)
        }, E.initial = function (e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, E.last = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, E.rest = E.tail = E.drop = function (e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, E.compact = function (e) {
            return E.filter(e, E.identity)
        };
        var _ = function (e, t, n) {
            return t && E.every(e, E.isArray) ? u.apply(n, e) : (k(e, function (e) {
                E.isArray(e) || E.isArguments(e) ? t ? a.apply(n, e) : _(e, t, n) : n.push(e)
            }), n)
        };
        E.flatten = function (e, t) {
            return _(e, t, [])
        }, E.without = function (e) {
            return E.difference(e, s.call(arguments, 1))
        }, E.partition = function (e, t) {
            var n = [], r = [];
            return k(e, function (e) {
                (t(e) ? n : r).push(e)
            }), [n, r]
        }, E.uniq = E.unique = function (e, t, n, r) {
            E.isFunction(t) && (r = n, n = t, t = !1);
            var i = n ? E.map(e, n, r) : e, o = [], a = [];
            return k(i, function (n, r) {
                (t ? r && a[a.length - 1] === n : E.contains(a, n)) || (a.push(n), o.push(e[r]))
            }), o
        }, E.union = function () {
            return E.uniq(E.flatten(arguments, !0))
        }, E.intersection = function (e) {
            var t = s.call(arguments, 1);
            return E.filter(E.uniq(e), function (e) {
                return E.every(t, function (t) {
                    return E.contains(t, e)
                })
            })
        }, E.difference = function (e) {
            var t = u.apply(r, s.call(arguments, 1));
            return E.filter(e, function (e) {
                return !E.contains(t, e)
            })
        }, E.zip = function () {
            for (var e = E.max(E.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++)t[n] = E.pluck(arguments, "" + n);
            return t
        }, E.object = function (e, t) {
            if (null == e)return {};
            for (var n = {}, r = 0, i = e.length; i > r; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, E.indexOf = function (e, t, n) {
            if (null == e)return -1;
            var r = 0, i = e.length;
            if (n) {
                if ("number" != typeof n)return r = E.sortedIndex(e, t), e[r] === t ? r : -1;
                r = 0 > n ? Math.max(0, i + n) : n
            }
            if (v && e.indexOf === v)return e.indexOf(t, n);
            for (; i > r; r++)if (e[r] === t)return r;
            return -1
        }, E.lastIndexOf = function (e, t, n) {
            if (null == e)return -1;
            var r = null != n;
            if (b && e.lastIndexOf === b)return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var i = r ? n : e.length; i--;)if (e[i] === t)return i;
            return -1
        }, E.range = function (e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;)o[i++] = e, e += n;
            return o
        };
        var A = function () {
        };
        E.bind = function (e, t) {
            var n, r;
            if (T && e.bind === T)return T.apply(e, s.call(arguments, 1));
            if (!E.isFunction(e))throw new TypeError;
            return n = s.call(arguments, 2), r = function () {
                if (!(this instanceof r))return e.apply(t, n.concat(s.call(arguments)));
                A.prototype = e.prototype;
                var i = new A;
                A.prototype = null;
                var o = e.apply(i, n.concat(s.call(arguments)));
                return Object(o) === o ? o : i
            }
        }, E.partial = function (e) {
            var t = s.call(arguments, 1);
            return function () {
                for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++)r[i] === E && (r[i] = arguments[n++]);
                for (; n < arguments.length;)r.push(arguments[n++]);
                return e.apply(this, r)
            }
        }, E.bindAll = function (e) {
            var t = s.call(arguments, 1);
            if (0 === t.length)throw new Error("bindAll must be passed function names");
            return k(t, function (t) {
                e[t] = E.bind(e[t], e)
            }), e
        }, E.memoize = function (e, t) {
            var n = {};
            return t || (t = E.identity), function () {
                var r = t.apply(this, arguments);
                return E.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
        }, E.delay = function (e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, E.defer = function (e) {
            return E.delay.apply(E, [e, 1].concat(s.call(arguments, 1)))
        }, E.throttle = function (e, t, n) {
            var r, i, o, a = null, s = 0;
            n || (n = {});
            var u = function () {
                s = n.leading === !1 ? 0 : E.now(), a = null, o = e.apply(r, i), r = i = null
            };
            return function () {
                var l = E.now();
                s || n.leading !== !1 || (s = l);
                var c = t - (l - s);
                return r = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, s = l, o = e.apply(r, i), r = i = null) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
            }
        }, E.debounce = function (e, t, n) {
            var r, i, o, a, s, u = function () {
                var l = E.now() - a;
                t > l ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), o = i = null))
            };
            return function () {
                o = this, i = arguments, a = E.now();
                var l = n && !r;
                return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s
            }
        }, E.once = function (e) {
            var t, n = !1;
            return function () {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, E.wrap = function (e, t) {
            return E.partial(t, e)
        }, E.compose = function () {
            var e = arguments;
            return function () {
                for (var t = arguments, n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)];
                return t[0]
            }
        }, E.after = function (e, t) {
            return function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, E.keys = function (e) {
            if (!E.isObject(e))return [];
            if (w)return w(e);
            var t = [];
            for (var n in e)E.has(e, n) && t.push(n);
            return t
        }, E.values = function (e) {
            for (var t = E.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++)r[i] = e[t[i]];
            return r
        }, E.pairs = function (e) {
            for (var t = E.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++)r[i] = [t[i], e[t[i]]];
            return r
        }, E.invert = function (e) {
            for (var t = {}, n = E.keys(e), r = 0, i = n.length; i > r; r++)t[e[n[r]]] = n[r];
            return t
        }, E.functions = E.methods = function (e) {
            var t = [];
            for (var n in e)E.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, E.extend = function (e) {
            return k(s.call(arguments, 1), function (t) {
                if (t)for (var n in t)e[n] = t[n]
            }), e
        }, E.pick = function (e) {
            var t = {}, n = u.apply(r, s.call(arguments, 1));
            return k(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        }, E.omit = function (e) {
            var t = {}, n = u.apply(r, s.call(arguments, 1));
            for (var i in e)E.contains(n, i) || (t[i] = e[i]);
            return t
        }, E.defaults = function (e) {
            return k(s.call(arguments, 1), function (t) {
                if (t)for (var n in t)void 0 === e[n] && (e[n] = t[n])
            }), e
        }, E.clone = function (e) {
            return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e
        }, E.tap = function (e, t) {
            return t(e), e
        };
        var O = function (e, t, n, r) {
            if (e === t)return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t)return e === t;
            e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
            var i = l.call(e);
            if (i != l.call(t))return !1;
            switch (i) {
                case"[object String]":
                    return e == String(t);
                case"[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case"[object Date]":
                case"[object Boolean]":
                    return +e == +t;
                case"[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t)return !1;
            for (var o = n.length; o--;)if (n[o] == e)return r[o] == t;
            var a = e.constructor, s = t.constructor;
            if (a !== s && !(E.isFunction(a) && a instanceof a && E.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)return !1;
            n.push(e), r.push(t);
            var u = 0, c = !0;
            if ("[object Array]" == i) {
                if (u = e.length, c = u == t.length)for (; u-- && (c = O(e[u], t[u], n, r)););
            } else {
                for (var f in e)if (E.has(e, f) && (u++, !(c = E.has(t, f) && O(e[f], t[f], n, r))))break;
                if (c) {
                    for (f in t)if (E.has(t, f) && !u--)break;
                    c = !u
                }
            }
            return n.pop(), r.pop(), c
        };
        E.isEqual = function (e, t) {
            return O(e, t, [], [])
        }, E.isEmpty = function (e) {
            if (null == e)return !0;
            if (E.isArray(e) || E.isString(e))return 0 === e.length;
            for (var t in e)if (E.has(e, t))return !1;
            return !0
        }, E.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, E.isArray = x || function (e) {
                return "[object Array]" == l.call(e)
            }, E.isObject = function (e) {
            return e === Object(e)
        }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
            E["is" + e] = function (t) {
                return l.call(t) == "[object " + e + "]"
            }
        }), E.isArguments(arguments) || (E.isArguments = function (e) {
            return !(!e || !E.has(e, "callee"))
        }), "function" != typeof/./ && (E.isFunction = function (e) {
            return "function" == typeof e
        }), E.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, E.isNaN = function (e) {
            return E.isNumber(e) && e != +e
        }, E.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
        }, E.isNull = function (e) {
            return null === e
        }, E.isUndefined = function (e) {
            return void 0 === e
        }, E.has = function (e, t) {
            return c.call(e, t)
        }, E.noConflict = function () {
            return e._ = t, this
        }, E.identity = function (e) {
            return e
        }, E.constant = function (e) {
            return function () {
                return e
            }
        }, E.property = function (e) {
            return function (t) {
                return t[e]
            }
        }, E.matches = function (e) {
            return function (t) {
                if (t === e)return !0;
                for (var n in e)if (e[n] !== t[n])return !1;
                return !0
            }
        }, E.times = function (e, t, n) {
            for (var r = Array(Math.max(0, e)), i = 0; e > i; i++)r[i] = t.call(n, i);
            return r
        }, E.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, E.now = Date.now || function () {
                return (new Date).getTime()
            };
        var D = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
        D.unescape = E.invert(D.escape);
        var H = {
            escape: new RegExp("[" + E.keys(D.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + E.keys(D.unescape).join("|") + ")", "g")
        };
        E.each(["escape", "unescape"], function (e) {
            E[e] = function (t) {
                return null == t ? "" : ("" + t).replace(H[e], function (t) {
                    return D[e][t]
                })
            }
        }), E.result = function (e, t) {
            if (null == e)return void 0;
            var n = e[t];
            return E.isFunction(n) ? n.call(e) : n
        }, E.mixin = function (e) {
            k(E.functions(e), function (t) {
                var n = E[t] = e[t];
                E.prototype[t] = function () {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), R.call(this, n.apply(E, e))
                }
            })
        };
        var L = 0;
        E.uniqueId = function (e) {
            var t = ++L + "";
            return e ? e + t : t
        }, E.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var M = /(.)^/, F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        E.template = function (e, t, n) {
            var r;
            n = E.defaults({}, n, E.templateSettings);
            var i = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"), o = 0, a = "__p+='";
            e.replace(i, function (t, n, r, i, s) {
                return a += e.slice(o, s).replace(q, function (e) {
                    return "\\" + F[e]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                r = new Function(n.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            if (t)return r(t, E);
            var u = function (e) {
                return r.call(this, e, E)
            };
            return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
        }, E.chain = function (e) {
            return E(e).chain()
        };
        var R = function (e) {
            return this._chain ? E(e).chain() : e
        };
        E.mixin(E), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = r[e];
            E.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], R.call(this, n)
            }
        }), k(["concat", "join", "slice"], function (e) {
            var t = r[e];
            E.prototype[e] = function () {
                return R.call(this, t.apply(this._wrapped, arguments))
            }
        }), E.extend(E.prototype, {
            chain: function () {
                return this._chain = !0, this
            }, value: function () {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function () {
            return E
        })
    }.call(this), function (e, t) {
        if ("function" == typeof define && define.amd)define(["underscore", "jquery", "exports"], function (n, r, i) {
            e.Backbone = t(e, i, n, r)
        }); else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function (e, t, n, r) {
        var i = e.Backbone, o = [];
        o.push;
        var a = o.slice;
        o.splice, t.VERSION = "1.1.2", t.$ = r, t.noConflict = function () {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = t.Events = {
            on: function (e, t, n) {
                if (!l(this, "on", e, [t, n]) || !t)return this;
                this._events || (this._events = {});
                var r = this._events[e] || (this._events[e] = []);
                return r.push({callback: t, context: n, ctx: n || this}), this
            }, once: function (e, t, r) {
                if (!l(this, "once", e, [t, r]) || !t)return this;
                var i = this, o = n.once(function () {
                    i.off(e, o), t.apply(this, arguments)
                });
                return o._callback = t, this.on(e, o, r)
            }, off: function (e, t, r) {
                var i, o, a, s, u, c, f, p;
                if (!this._events || !l(this, "off", e, [t, r]))return this;
                if (!e && !t && !r)return this._events = void 0, this;
                for (s = e ? [e] : n.keys(this._events), u = 0, c = s.length; c > u; u++)if (e = s[u], a = this._events[e]) {
                    if (this._events[e] = i = [], t || r)for (f = 0, p = a.length; p > f; f++)o = a[f], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && i.push(o);
                    i.length || delete this._events[e]
                }
                return this
            }, trigger: function (e) {
                if (!this._events)return this;
                var t = a.call(arguments, 1);
                if (!l(this, "trigger", e, t))return this;
                var n = this._events[e], r = this._events.all;
                return n && c(n, t), r && c(r, arguments), this
            }, stopListening: function (e, t, r) {
                var i = this._listeningTo;
                if (!i)return this;
                var o = !t && !r;
                r || "object" != typeof t || (r = this), e && ((i = {})[e._listenId] = e);
                for (var a in i)e = i[a], e.off(t, r, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
                return this
            }
        }, u = /\s+/, l = function (e, t, n, r) {
            if (!n)return !0;
            if ("object" == typeof n) {
                for (var i in n)e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (u.test(n)) {
                for (var o = n.split(u), a = 0, s = o.length; s > a; a++)e[t].apply(e, [o[a]].concat(r));
                return !1
            }
            return !0
        }, c = function (e, t) {
            var n, r = -1, i = e.length, o = t[0], a = t[1], s = t[2];
            switch (t.length) {
                case 0:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                    return;
                case 2:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                    return;
                case 3:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                    return;
                default:
                    for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
                    return
            }
        }, f = {listenTo: "on", listenToOnce: "once"};
        n.each(f, function (e, t) {
            s[t] = function (t, r, i) {
                var o = this._listeningTo || (this._listeningTo = {}), a = t._listenId || (t._listenId = n.uniqueId("l"));
                return o[a] = t, i || "object" != typeof r || (i = this), t[e](r, i, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
        var p = t.Model = function (e, t) {
            var r = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(p.prototype, s, {
            changed: null, validationError: null, idAttribute: "id", initialize: function () {
            }, toJSON: function () {
                return n.clone(this.attributes)
            }, sync: function () {
                return t.sync.apply(this, arguments)
            }, get: function (e) {
                return this.attributes[e]
            }, escape: function (e) {
                return n.escape(this.get(e))
            }, has: function (e) {
                return null != this.get(e)
            }, set: function (e, t, r) {
                var i, o, a, s, u, l, c, f;
                if (null == e)return this;
                if ("object" == typeof e ? (o = e, r = t) : (o = {})[e] = t, r || (r = {}), !this._validate(o, r))return !1;
                a = r.unset, u = r.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), f = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (i in o)t = o[i], n.isEqual(f[i], t) || s.push(i), n.isEqual(c[i], t) ? delete this.changed[i] : this.changed[i] = t, a ? delete f[i] : f[i] = t;
                if (!u) {
                    s.length && (this._pending = r);
                    for (var p = 0, d = s.length; d > p; p++)this.trigger("change:" + s[p], this, f[s[p]], r)
                }
                if (l)return this;
                if (!u)for (; this._pending;)r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            }, unset: function (e, t) {
                return this.set(e, void 0, n.extend({}, t, {unset: !0}))
            }, clear: function (e) {
                var t = {};
                for (var r in this.attributes)t[r] = void 0;
                return this.set(t, n.extend({}, e, {unset: !0}))
            }, hasChanged: function (e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            }, changedAttributes: function (e) {
                if (!e)return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, r = !1, i = this._changing ? this._previousAttributes : this.attributes;
                for (var o in e)n.isEqual(i[o], t = e[o]) || ((r || (r = {}))[o] = t);
                return r
            }, previous: function (e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            }, previousAttributes: function () {
                return n.clone(this._previousAttributes)
            }, fetch: function (e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this, r = e.success;
                return e.success = function (n) {
                    return t.set(t.parse(n, e), e) ? (r && r(t, n, e), t.trigger("sync", t, n, e), void 0) : !1
                }, q(this, e), this.sync("read", this, e)
            }, save: function (e, t, r) {
                var i, o, a, s = this.attributes;
                if (null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({validate: !0}, r), i && !r.wait) {
                    if (!this.set(i, r))return !1
                } else if (!this._validate(i, r))return !1;
                i && r.wait && (this.attributes = n.extend({}, s, i)), void 0 === r.parse && (r.parse = !0);
                var u = this, l = r.success;
                return r.success = function (e) {
                    u.attributes = s;
                    var t = u.parse(e, r);
                    return r.wait && (t = n.extend(i || {}, t)), n.isObject(t) && !u.set(t, r) ? !1 : (l && l(u, e, r), u.trigger("sync", u, e, r), void 0)
                }, q(this, r), o = this.isNew() ? "create" : r.patch ? "patch" : "update", "patch" === o && (r.attrs = i), a = this.sync(o, this, r), i && r.wait && (this.attributes = s), a
            }, destroy: function (e) {
                e = e ? n.clone(e) : {};
                var t = this, r = e.success, i = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
                if (e.success = function (n) {
                        (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    }, this.isNew())return e.success(), !1;
                q(this, e);
                var o = this.sync("delete", this, e);
                return e.wait || i(), o
            }, url: function () {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            }, parse: function (e) {
                return e
            }, clone: function () {
                return new this.constructor(this.attributes)
            }, isNew: function () {
                return !this.has(this.idAttribute)
            }, isValid: function (e) {
                return this._validate({}, n.extend(e || {}, {validate: !0}))
            }, _validate: function (e, t) {
                if (!t.validate || !this.validate)return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return r ? (this.trigger("invalid", this, r, n.extend(t, {validationError: r})), !1) : !0
            }
        });
        var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(d, function (e) {
            p.prototype[e] = function () {
                var t = a.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var h = t.Collection = function (e, t) {
            t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({silent: !0}, t))
        }, g = {add: !0, remove: !0, merge: !0}, m = {add: !0, remove: !1};
        n.extend(h.prototype, s, {
            model: p, initialize: function () {
            }, toJSON: function (e) {
                return this.map(function (t) {
                    return t.toJSON(e)
                })
            }, sync: function () {
                return t.sync.apply(this, arguments)
            }, add: function (e, t) {
                return this.set(e, n.extend({merge: !1}, t, m))
            }, remove: function (e, t) {
                var r = !n.isArray(e);
                e = r ? [e] : n.clone(e), t || (t = {});
                var i, o, a, s;
                for (i = 0, o = e.length; o > i; i++)s = e[i] = this.get(e[i]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                return r ? e[0] : e
            }, set: function (e, t) {
                t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                var r = !n.isArray(e);
                e = r ? e ? [e] : [] : n.clone(e);
                var i, o, a, s, u, l, c, f = t.at, d = this.model, h = this.comparator && null == f && t.sort !== !1, m = n.isString(this.comparator) ? this.comparator : null, y = [], v = [], b = {}, x = t.add, w = t.merge, T = t.remove, E = !h && x && T ? [] : !1;
                for (i = 0, o = e.length; o > i; i++) {
                    if (u = e[i] || {}, a = u instanceof p ? s = u : u[d.prototype.idAttribute || "id"], l = this.get(a))T && (b[l.cid] = !0), w && (u = u === s ? s.attributes : u, t.parse && (u = l.parse(u, t)), l.set(u, t), h && !c && l.hasChanged(m) && (c = !0)), e[i] = l; else if (x) {
                        if (s = e[i] = this._prepareModel(u, t), !s)continue;
                        y.push(s), this._addReference(s, t)
                    }
                    s = l || s, !E || !s.isNew() && b[s.id] || E.push(s), b[s.id] = !0
                }
                if (T) {
                    for (i = 0, o = this.length; o > i; ++i)b[(s = this.models[i]).cid] || v.push(s);
                    v.length && this.remove(v, t)
                }
                if (y.length || E && E.length)if (h && (c = !0), this.length += y.length, null != f)for (i = 0, o = y.length; o > i; i++)this.models.splice(f + i, 0, y[i]); else {
                    E && (this.models.length = 0);
                    var k = E || y;
                    for (i = 0, o = k.length; o > i; i++)this.models.push(k[i])
                }
                if (c && this.sort({silent: !0}), !t.silent) {
                    for (i = 0, o = y.length; o > i; i++)(s = y[i]).trigger("add", s, this, t);
                    (c || E && E.length) && this.trigger("sort", this, t)
                }
                return r ? e[0] : e
            }, reset: function (e, t) {
                t || (t = {});
                for (var r = 0, i = this.models.length; i > r; r++)this._removeReference(this.models[r], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
            }, push: function (e, t) {
                return this.add(e, n.extend({at: this.length}, t))
            }, pop: function (e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            }, unshift: function (e, t) {
                return this.add(e, n.extend({at: 0}, t))
            }, shift: function (e) {
                var t = this.at(0);
                return this.remove(t, e), t
            }, slice: function () {
                return a.apply(this.models, arguments)
            }, get: function (e) {
                return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            }, at: function (e) {
                return this.models[e]
            }, where: function (e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                    for (var n in e)if (e[n] !== t.get(n))return !1;
                    return !0
                })
            }, findWhere: function (e) {
                return this.where(e, !0)
            }, sort: function (e) {
                if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            }, pluck: function (e) {
                return n.invoke(this.models, "get", e)
            }, fetch: function (e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success, r = this;
                return e.success = function (n) {
                    var i = e.reset ? "reset" : "set";
                    r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
                }, q(this, e), this.sync("read", this, e)
            }, create: function (e, t) {
                if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t)))return !1;
                t.wait || this.add(e, t);
                var r = this, i = t.success;
                return t.success = function (e, n) {
                    t.wait && r.add(e, t), i && i(e, n, t)
                }, e.save(null, t), e
            }, parse: function (e) {
                return e
            }, clone: function () {
                return new this.constructor(this.models)
            }, _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            }, _prepareModel: function (e, t) {
                if (e instanceof p)return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var r = new this.model(e, t);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
            }, _addReference: function (e) {
                this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            }, _removeReference: function (e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            }, _onModelEvent: function (e, t, n, r) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(y, function (e) {
            h.prototype[e] = function () {
                var t = a.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var v = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(v, function (e) {
            h.prototype[e] = function (t, r) {
                var i = n.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
                return n[e](this.models, i, r)
            }
        });
        var b = t.View = function (e) {
            this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
        }, x = /^(\S+)\s*(.*)$/, w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(b.prototype, s, {
            tagName: "div", $: function (e) {
                return this.$el.find(e)
            }, initialize: function () {
            }, render: function () {
                return this
            }, remove: function () {
                return this.$el.remove(), this.stopListening(), this
            }, setElement: function (e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            }, delegateEvents: function (e) {
                if (!e && !(e = n.result(this, "events")))return this;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    if (n.isFunction(r) || (r = this[e[t]]), r) {
                        var i = t.match(x), o = i[1], a = i[2];
                        r = n.bind(r, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, r) : this.$el.on(o, a, r)
                    }
                }
                return this
            }, undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid), this
            }, _ensureElement: function () {
                if (this.el)this.setElement(n.result(this, "el"), !1); else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(r, !1)
                }
            }
        }), t.sync = function (e, r, i) {
            var o = E[e];
            n.defaults(i || (i = {}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON});
            var a = {type: o, dataType: "json"};
            if (i.url || (a.url = n.result(r, "url") || F()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {model: a.data} : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                a.type = "POST", i.emulateJSON && (a.data._method = o);
                var s = i.beforeSend;
                i.beforeSend = function (e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || i.emulateJSON || (a.processData = !1), "PATCH" === a.type && T && (a.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var u = i.xhr = t.ajax(n.extend(a, i));
            return r.trigger("request", r, u, i), u
        };
        var T = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), E = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        t.ajax = function () {
            return t.$.ajax.apply(t.$, arguments)
        };
        var k = t.Router = function (e) {
            e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        }, N = /\((.*?)\)/g, S = /(\(\?)?:\w+/g, C = /\*\w+/g, j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(k.prototype, s, {
            initialize: function () {
            }, route: function (e, r, i) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var o = this;
                return t.history.route(e, function (n) {
                    var a = o._extractParameters(e, n);
                    o.execute(i, a), o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a)
                }), this
            }, execute: function (e, t) {
                e && e.apply(this, t)
            }, navigate: function (e, n) {
                return t.history.navigate(e, n), this
            }, _bindRoutes: function () {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());)this.route(e, this.routes[e])
                }
            }, _routeToRegExp: function (e) {
                return e = e.replace(j, "\\$&").replace(N, "(?:$1)?").replace(S, function (e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(C, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            }, _extractParameters: function (e, t) {
                var r = e.exec(t).slice(1);
                return n.map(r, function (e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var _ = t.History = function () {
            this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        }, A = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, D = /msie [\w.]+/, H = /\/$/, L = /#.*$/;
        _.started = !1, n.extend(_.prototype, s, {
            interval: 50, atRoot: function () {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            }, getHash: function (e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            }, getFragment: function (e, t) {
                if (null == e)if (this._hasPushState || !this._wantsHashChange || t) {
                    e = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(H, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else e = this.getHash();
                return e.replace(A, "")
            }, start: function (e) {
                if (_.started)throw new Error("Backbone.history has already been started");
                _.started = !0, this.options = n.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var r = this.getFragment(), i = document.documentMode, o = D.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                if (this.root = ("/" + this.root + "/").replace(O, "/"), o && this._wantsHashChange) {
                    var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(r)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                var s = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot())return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            }, stop: function () {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), _.started = !1
            }, route: function (e, t) {
                this.handlers.unshift({route: e, callback: t})
            }, checkUrl: function () {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
            }, loadUrl: function (e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function (t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            }, navigate: function (e, t) {
                if (!_.started)return !1;
                t && t !== !0 || (t = {trigger: !!t});
                var n = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(L, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState)this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                        if (!this._wantsHashChange)return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            }, _updateHash: function (e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new _;
        var M = function (e, t) {
            var r, i = this;
            r = e && n.has(e, "constructor") ? e.constructor : function () {
                return i.apply(this, arguments)
            }, n.extend(r, i, t);
            var o = function () {
                this.constructor = r
            };
            return o.prototype = i.prototype, r.prototype = new o, e && n.extend(r.prototype, e), r.__super__ = i.prototype, r
        };
        p.extend = h.extend = k.extend = b.extend = _.extend = M;
        var F = function () {
            throw new Error('A "url" property or function must be specified')
        }, q = function (e, t) {
            var n = t.error;
            t.error = function (r) {
                n && n(e, r, t), e.trigger("error", e, r, t)
            }
        };
        return t
    }), "undefined" == typeof Edicy || !Edicy)var Edicy = {};
!function () {
    window.edy = window.edy || [], window.edy = function () {
        var e = {}, t = function (t) {
            var n = t.shift();
            1 == t.length && (t = t[0]), e[n] || (e[n] = []), e[n].push(t)
        };
        return edy.forEach(t), {
            push: t, hasOption: function (t) {
                return !!e[t]
            }, getOption: function (t) {
                return e[t]
            }
        }
    }(), Edicy.siteOpts = window.edy, Edicy.jQuery = jQuery.noConflict(!0), Edicy.Modernizr = EdicyModernizr, Edicy.ui = {}, Edicy.slugReplacements = {
        "@": "-at-",
        _: "-",
        õ: "o",
        ä: "a",
        ö: "o",
        ü: "u"
    }
}(), function () {
    Edicy.Backbone = Backbone.noConflict(), Edicy.Backbone.$ = Edicy.jQuery, Edicy.Underscore = _.noConflict(), Edicy.Underscore.templateSettings = {
        evaluate: /\{\%(.+?)\%\}/g,
        interpolate: /\{\{(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    }, Edicy.Underscore.mixin({
        compactObject: function (e) {
            return Edicy.Underscore.each(e, function (t, n) {
                null === t && delete e[n]
            }), e
        }
    }), Edicy.Underscore.extend(Edicy, Edicy.Backbone.Events), Edicy.Backbone.mixin = function (e, t, n) {
        n = Edicy.Underscore.filter(["initialize", "render"].concat(n || []), function (n) {
            return e.prototype[n] && t[n]
        }), Edicy.Underscore.defaults(e.prototype, t), Edicy.Underscore.defaults(e.prototype.events, t.events), Edicy.Underscore.each(n, function (n) {
            var r = e.prototype[n];
            e.prototype[n] = function (e) {
                return t[n].apply(this, [e]), r.apply(this, [e])
            }
        })
    }, Edicy.Backbone.inlineMixin = function (e) {
        var t = Edicy.Underscore.chain(arguments).toArray().rest().flatten().value(), n = e.prototype || e, r = {};
        return Edicy.Underscore(t).each(function (e) {
            Edicy.Underscore(e).each(function (e, t) {
                if (Edicy.Underscore.isFunction(e)) {
                    if (n[t] === e)return;
                    n[t] && (r[t] = r.hasOwnProperty(t) ? r[t] : [n[t]], r[t].push(e)), n[t] = e
                } else Edicy.Underscore.isArray(e) ? n[t] = Edicy.Underscore.union(e, n[t] || []) : Edicy.Underscore.isObject(e) ? n[t] = Edicy.Underscore.extend({}, e, n[t] || {}) : t in n || (n[t] = e)
            })
        }), Edicy.Underscore(r).each(function (e, t) {
            n[t] = function () {
                var t, n = this, r = arguments;
                return Edicy.Underscore(e).each(function (e) {
                    var i = Edicy.Underscore.isFunction(e) ? e.apply(n, r) : e;
                    t = "undefined" == typeof i ? t : i
                }), t
            }
        }), e
    };
    var e = Edicy.Backbone.Model.extend;
    Edicy.Underscore([Edicy.Backbone.Model, Edicy.Backbone.Collection, Edicy.Backbone.Router, Edicy.Backbone.View]).each(function (t) {
        t.extend = function (t, n) {
            var r = e.call(this, t, n);
            return r.prototype.mixins && r.prototype.hasOwnProperty("mixins") && Edicy.Backbone.inlineMixin(r, r.prototype.mixins), r
        }
    })
}(), function () {
    var e = {
        capitalize: function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, number_with_delimiter: function (e) {
            return (e || 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")
        }, url_encode_quotes: function (e) {
            return e.replace(/"/g, "%22").replace(/'/g, "%27").replace(/\(/g, escape("(")).replace(/\)/g, escape(")"))
        }
    };
    Edicy.StringUtil = e
}(), function () {
    var e = function (e) {
        return -e.getTimezoneOffset()
    }, t = function () {
        return e(new Date(2011, 0, 1, 0, 0, 0, 0))
    }, n = function () {
        return e(new Date(2011, 5, 1, 0, 0, 0, 0))
    }, r = function () {
        var e = t(), r = n(), i = e - r;
        return 0 > i ? {utc_offset: e, dst: !0, hemisphere: "NORTH"} : i > 0 ? {
            utf_offset: r,
            dst: !0,
            hemisphere: "SOUTH"
        } : {utf_offset: e, dst: !1, hemisphere: "N/A"}
    }, i = function () {
        return {
            utcOffset: function () {
                return r().utc_offset
            }, getInfo: function () {
                return r()
            }
        }
    }();
    Edicy.TimeZone = i
}(), function (e) {
    "use strict";
    e.interpolationMatcher = RegExp(/%{([\s\S]+?)}/g), e.lookup = function (e) {
        var t = e.split("."), n = window.i18n_translations || {};
        if (void 0 === n)return null;
        for (; t.length && (n = n[t.shift()], void 0 !== n && null !== n););
        return void 0 !== n && null !== n ? n : void 0
    }, e.translate = function (t, n) {
        var r = this.lookup(t);
        return void 0 !== r && null !== r || !n || (r = n.fallback, delete n.fallback), r = e.interpolate(r, n), void 0 === r || null === r ? this.missingTranslation(t) : r
    }, e.interpolate = function (t, n) {
        return t && n && (t = t.replace(e.interpolationMatcher, function (e, t) {
            return n.hasOwnProperty(t) ? n[t] : "%{" + t + "}"
        })), t
    }, e.learn = function (e) {
        for (var t in e)window.i18n_translations[t] = e[t]
    }, e.missingTranslation = function (e) {
        return '[missing "' + e + '" translation]'
    }, e.t = e.translate
}(this.I18n = {});