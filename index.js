/*! 327-10-RELEASE 2018-10-07 */

function __trcCopyProps(e, t, i) {
    for (r in e) t[r] = e[r];
    if (i) for (var r in i) t[r] = i[r];
    return t
}

function __trcFromError(e) {
    return TRC.Browser.ie ? e.message + "[" + e.number + ": " + e.name + "]" : e.message ? e.message + (e.fileName ? e.fileName + ":" + e.lineNumber : "") : e
}

function __trcClientTimestamp() {
    var e = new Date, t = e.getHours(), i = e.getMinutes(), r = e.getSeconds() + e.getMilliseconds() / 1e3;
    return (t < 10 ? "0" : "") + t + ":" + (i < 10 ? "0" : "") + i + ":" + (r < 10 ? "0" : "") + r.toFixed(3)
}

function __trcLog(e, t) {
    if (TRC.pConsole("page", TRC.modDebug.getType(e), t, t), "0" == e && TRC.pConsole("errors", TRC.modDebug.getType(e), t, t), !(window.trc_debug_level < e)) {
        var i = Array.prototype.slice.call(arguments, 2);
        i.length > 0 && (t += "(" + i.join(",") + ")"), "object" == typeof window.console && console.log(t), (document.cookie.search("taboola-debug") > 0 || e <= window.trc_debug_level) && TRC.modDebug.logMessageToServer(e, t)
    }
}

function __trcError(e, t) {
    __trcLog(0, e + (t ? ": " + __trcFromError(t) : "")), t && t.stack && void 0 !== window.console && console.trace && console.trace()
}

function __trcDebug() {
    var e = Array.prototype.slice.call(arguments);
    e.unshift(3), __trcLog.apply(null, e)
}

function __trcInfo() {
    var e = Array.prototype.slice.call(arguments);
    e.unshift(2), __trcLog.apply(null, e)
}

function __trcWarn() {
    var e = Array.prototype.slice.call(arguments);
    e.unshift(1), __trcLog.apply(null, e)
}

function __trcDOMWalker(e, t) {
    for (t(e), e = e.firstChild; e;) arguments.callee(e, t), e = e.nextSibling
}

function __trcPurgeEventHandlers(e) {
    try {
        __trcDOMWalker(e, function (e) {
            for (var t in e) "function" == typeof e[t] && (e[t] = null)
        })
    } catch (e) {
    }
}

function __trcJSONify(e) {
    if (window.JSON && window.JSON.stringify && window.TRCImpl && window.TRCImpl.global["use-native-json-stringify"]) return window.JSON.stringify(e);

    function t(e) {
        return '"' + e.replace(/[\s\S]/g, function (e) {
            switch (e) {
                case'"':
                    return '\\"';
                case"\\":
                    return "\\\\";
                case"\n":
                    return "\\n";
                case"\r":
                    return "\\r"
            }
            return e
        }) + '"'
    }

    function i(e) {
        for (var t = [], i = 0; i < e.length; i++) t[i] = __trcJSONify(e[i]);
        return t
    }

    function r(e) {
        var i = [];
        for (var r in e) e.hasOwnProperty(r) && i.push(t(r) + ":" + __trcJSONify(e[r]));
        return i
    }

    return e instanceof Array ? "[" + i(e).join(",") + "]" : "object" == typeof e ? "{" + r(e).join(",") + "}" : null === e ? "null" : "string" == typeof e ? t(e) : void 0 === e ? "undefined" : e.toString()
}

Gettext = function (e) {
    return {
        gettext: function () {
            return ""
        }, strargs: function () {
            return ""
        }
    }
}, Gettext.strargs = function () {
    return ""
}, function (e, t, i) {
    "use strict";
    var r = t.createElement("div"), o = t.createElement("div"), n, a = function (e, t) {
        if (e.classList) return e.classList.add(t);
        i.dom.removeClass(e, t), e.className += " " + t
    }, s = function (e) {
        var t;
        27 === (e.which || e.keyCode) && m()
    }, l = function (e) {
        var t = e.target || e.srcElement;
        t !== o && "trc_close_modal" !== t.id || (i.dom.stopEvent(e), m())
    }, c = function (e) {
        /http(s)?:\/\/www\.taboola\.com/.test(e.origin) && e.data && 1025 == +e.data && m()
    }, d = function (e) {
        var t = [];
        return t.push("<a id=trc_close_modal class=trc_modal_close>&times;</a>"), t.push('<iframe class=trc_modal_frame scrolling=no frameborder=0 allowTransparency=true src="'), t.push(e), t.push('"></iframe>'), t.join("")
    }, h = function (e, t) {
        for (; e.tagName.toUpperCase() !== t.toUpperCase();) e = e.parentNode;
        return e
    }, p = function (t) {
        e.showModalDialog(t.href, "", "dialogHeight: 550px; dialogWidth: 660px")
    }, u = function (a) {
        var u = h(a.target || a.srcElement, "A");
        if (a && i.dom.stopEvent(a), i.Browser["ieUpto"](7)) return p(u);
        n || T(), r.innerHTML = d(u.href), i.dom.removeClass(o, "trc_modal_hidden"), i.dom.removeClass(r, "trc_modal_hidden"), i.dom.on(t, "keyup", s), i.dom.on(t, "click", l), i.dom.on(t.getElementById("trc_close_modal"), "click", l), i.dom.on(e, "message", c)
    }, m = function () {
        a(o, "trc_modal_hidden"), a(r, "trc_modal_hidden"), i.dom.off(t, "keyup", s), i.dom.off(t, "click", l), i.dom.off(t.getElementById("trc_close_modal"), "click", l), i.dom.off(e, "message", c)
    }, g = function (e) {
        var i = t.createElement("div");
        return i.id = "tbl-aug-" + Math.floor(2147483648 * Math.random()).toString(36), b += "#" + i.id + " ", e && e.appendChild(i), i
    }, f = function (e) {
        var t = [];
        return t.push(e + '.trc_modal_dialog { width:660px; height:550px; box-shadow: black 0 0 18px 0;font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; padding:12px;border:2px solid #417cc3;border-radius:10px;position:fixed;z-index:99999;background:#f7f9fc;top:50%;left:50%;margin-top:-250px;margin-left:-330px;-moz-box-sizing: content-box; -webkit-box-sizing: content-box;box-sizing: content-box;}'), t.push(e + ".trc_modal_mask {z-index:1040;position:fixed;top:0;left:0;right:0;bottom:0;background:#000;opacity:0.5;filter: alpha(opacity=50);}"), t.push(e + ".trc_modal_close {font-family:sans-serif!important;width:30px!important;height:30px!important;font-size: 30px!important;font-weight: bold!important;line-height: 28px!important;color: #fff!important;text-shadow: 0 1px 0 #000;opacity: 0.9;filter: alpha(opacity=90);background: #417cc3;padding: 0;cursor: pointer;border: 0;-webkit-appearance: none;text-align: center;border-radius: 15px!important;position:absolute!important;top: -13px;right: -13px;text-decoration: none!important;z-index: 9;}"), t.push(e + ".trc_modal_close:hover {text-decoration: none!important;opacity: 1!important;filter: alpha(opacity=100)!important;}"), t.push(e + ".trc_modal_hidden {display:none!important;}"), t.push(e + ".trc_modal_frame {width: 100%!important;height: 550px!important;}"), t.join("")
    }, b = "", v = g(), C, y = g(g(v)), T = function () {
        o.className = "trc_modal_mask trc_modal_hidden", r.className = "trc_modal_dialog trc_modal_hidden", y.appendChild(o), y.appendChild(r), t.body.appendChild(v), i.dom.injectStyle(f(b)), n = !0
    };
    i.aboutUs = {open: u, close: m}
}(window, document, TRC), function (e, t) {
    TRC.blocker = TRC.blocker || {
        states: {ABP_DETECTION_DISABLED: -2, ABP_NOT_DETECTED: 0, ABP_DETECTED: 1},
        createBlockDetectionDiv: function (e) {
            var i = t.createElement("div");
            return i.className = e, i.appendChild(t.createTextNode(".")), t.documentElement.appendChild(i), i
        },
        isBlockDetectedOnDiv: function (e) {
            return e.offsetHeight ? (console.log("page", "warn", "No AdBlockPlus detected on div with class: " + e.className), !1) : (console.log("page", "warn", "AdBlockPlus detected on div with class: " + e.className), !0)
        },
        isBlockDetectedOnClassNames: function (e) {
            var i, r = e.length, o;
            for (i = 0; i < r; i++) if (e[i]) {
                o = this.createBlockDetectionDiv(e[i]);
                try {
                    if (this.isBlockDetectedOnDiv(o)) return !0
                } catch (e) {
                    console.log("page", "error", "unable to inspect offsetHeight of div with class: " + o.className)
                } finally {
                    t.documentElement.removeChild(o)
                }
            }
            return !1
        },
        getBlockedState: function (e, t) {
            return this.blockedState !== this.states.ABP_DETECTED || t ? (this.blockedState = e && this.isBlockDetectedOnClassNames(e) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED, this.blockedState) : this.blockedState
        }
    }
}(window, document), function () {
    TRC.amp = {};
    var e = TRC.amp, t, i;
    e.getRboxContainer = function () {
        return t || (t = document.getElementsByClassName("trc_rbox_container")[0]), t
    }, e.getAMPContainer = function () {
        return i || (i = document.getElementById("c"))
    }, e.setAMPmodule = function (t) {
        t.manualVisibilityTrigger = !0, t.disableReadMore = !0, t.slider = !1;
        var i = null, r = this.sendAMPResize, o = this.sendAMPFeedResize, n = t.global["amp-neg-threshold"] || 5,
            a = t.global["amp-pos-threshold"] || 100, s = t.global["amp-debounce-time"] || 200,
            l = void 0 !== t.amp_disable_resize ? t.amp_disable_resize : t.global["amp-disable-resize"],
            c = "function" == typeof t.global["amp-onrender"] ? t.global["amp-onrender"] : function () {
                return !0
            };
        e.getAMPContainer().classList.add("tbl-amp-container"), TRC.eventDelegator.subscribe("onrender", function (t) {
            var d = {negative: n, positive: a};
            if (!c(t) || l) return !1;
            null === i && (i = !(!t.container.placementData || !t.container.placementData.isFeedCard)), i ? (e.getAMPContainer().style.position = "static", o()) : (r(d, TRC.lastVisibleRects ? TRC.lastVisibleRects : null), TRC.listen("visible::" + t.placement, TRC.util.debounce(r.trcBind(this, d), s, !1, this)))
        })
    }, e.sendAMPResize = function (t, i) {
        var r = i ? i.boundingClientRect.height : TRC.dom.getWindowHeight(), o = e.getRboxContainer().scrollHeight,
            n = r - o, a = n < 0 ? t.negative : t.positive;
        Math.abs(n) >= a && window.context.requestResize(void 0, o)
    }, e.sendAMPFeedResize = function () {
        window.context.requestResize(void 0, e.getAMPContainer().offsetHeight + 50), TRC.dispatch("ampFeedResize")
    }
}(), function (e, t) {
    TRC.aspect = {
        before: function (e, t, i, r) {
            var o = e[t];
            e[t] = function () {
                return r && (e[t] = o), i.apply(this, arguments), o.apply(this, arguments)
            }
        }, after: function (e, t, i, r) {
            var o = e[t];
            e[t] = function () {
                r && (e[t] = o);
                var n = o.apply(this, arguments);
                return i.apply(this, arguments), n
            }
        }
    }
}(window, document), function (e, t) {
    var i = function () {
        this.dom = !!t.getElementById && 1, this.dom && (!t.importNode || (this.dom = 2), !t.normalizeDocument || (this.dom = 3));
        var i = this.opera = !!e.opera && 9;
        if (this.opera && (!navigator.geolocation || (this.opera = 10), !e.opera.version || (this.opera = parseFloat(e.opera.version()))), this.ie = navigator.userAgent.match(/Trident/) && /rv:11.0/i.test(navigator.userAgent) ? 11 : "object" == typeof t.all && !i && ("CSS1Compat" != t.compatMode ? 6 : e.XMLHttpRequest ? Object.defineProperty ? "object" != typeof DOMImplementation || "function" != typeof DOMImplementation.prototype.createDocument ? 8 : e["msMatchMedia"] ? 10 : 9 : 7 : 6), this.webkit = !!e.openDatabase && !this.opera, this.chrome = !(!this.webkit || !e.chrome), this.safari = this.webkit && !this.chrome, this.safari && (!t.compareDocumentPosition || (this.safari = 4), !navigator["registerContentHandler"] || (this.safari = 5), !e["matchMedia"] || (this.safari = 6)), this.firefox = !!navigator.userAgent.match(/firefox/i), this.firefox) {
            try {
                "function" == typeof t.createElement("canvas").getContext && (this.firefox = 1.5)
            } catch (e) {
            }
            "object" == typeof e["globalStorage"] && (this.firefox = 2), !t.elementFromPoint || (this.firefox = 3), !t.querySelector || (this.firefox = 3.5), !t.getElementsByTagName("head")[0]["mozMatchesSelector"] || (this.firefox = 3.6), !e.Uint8Array || (this.firefox = 4), !Function.prototype["isGenerator"] || (this.firefox = 5), !e["matchMedia"] || (this.firefox = 6), !e.FileReader || !e.FileReader.prototype.readAsArrayBuffer || (this.firefox = 7), !t.head || !t.head.insertAdjacentHTML || (this.firefox = 8)
        }
        for (var r = ["firefox", "chrome", "safari", "webkit", "khtml", "ie", "opera"], o = 0; o < r.length; o++) !function (e, t) {
            e[t + "Upto"] = function (e) {
                return this[t] && ("number" != typeof this[t] || this[t] <= e)
            }, e[t + "Atleast"] = function (e) {
                return this[t] && ("number" != typeof this[t] || this[t] >= e)
            }
        }(this, r[o]);
        return this.compatibility = {
            lineClamp: void 0 !== t.createElement("div").style["webkitLineClamp"],
            cssTransforms: function () {
                for (var e = t.createElement("div"), i = ["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], r = 0; r < i.length; r++) if (void 0 !== e.style[i[r]]) return !0;
                return !1
            }(),
            passiveEvents: function () {
                var e = !1;
                try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    }))
                } catch (e) {
                }
                return e
            }()
        }, this
    }, r = function () {
        var e;
        this.isTouchDevice = "ontouchstart" in window, this.deviceType = (e = navigator.userAgent.match(/iPhone|iPod|iPad/i)) ? e[0] : "other"
    };
    TRC.Browser = new i, TRC.Device = new r
}(window, document), function () {
    const e = "card-available", t = "card-visible", i = "card-interaction", r = ["click"];

    class o {
        constructor(e, t, i, r) {
            const o = t.feedDynamicParameters;
            this.trcManager = e, this.cardPlacementData = i, this.exactVisibleDistanceThresholdFromTop = o && o["exactVisibleDistanceThresholdFromTop"] || this.trcManager.global["exact-visible-distance-threshold-from-top"] || 200, this.listenToCardInteractionEvents(r)
        }

        sendEvent(e, t) {
            TRC.TrcEventsLogger.sendPlacementEvent(this.trcManager, this.cardPlacementData, e, t)
        }

        handleRenderedCard(t) {
            t.style.position = "relative", this.sendEvent(e), this.observeCardVisibility(t)
        }

        listenToCardInteractionEvents(e) {
            r.forEach(t => {
                TRC.dom.on(e, t, this.sendCardInteractionEvent.trcBind(this, t)), "click" === t && e.querySelector("iframe") && TRC.dom.on(window, "blur", this.checkIfCardIFrameClickedAndLog.trcBind(this, e))
            })
        }

        checkIfCardIFrameClickedAndLog(e) {
            const t = document.activeElement;
            t && "iframe" === t.tagName.toLowerCase() && (t === e || e.contains(t)) && this.sendCardInteractionEvent("click")
        }

        sendCardInteractionEvent(e) {
            const t = {id: Date.now(), type: e}, r = {d: JSON.stringify(t)};
            this.sendEvent(i, r)
        }

        observeCardVisibility(e) {
            const i = {
                targetElement: e,
                enableDelayedVisibilityCheck: !0,
                exactVisibleThresholdFromTop: this.exactVisibleDistanceThresholdFromTop,
                onTrigger: this.sendEvent.trcBind(this, t, null)
            };
            TRC.intersections.isInViewPort(i)
        }
    }

    TRC.CardEventsManager = o
}(), function () {
    var e = 0, t = 1, i = 2, r, o = {taboola_default: "BOOx2jhOOx2mtAKABDENAqAAAAAYSAAA"}, n = {cmpStatus: 3}, a = "",
        s = {getConsentData: []}, l = {getConsentData: 1};

    function c() {
        n.gdprApplies = !0, n.consentData = o.taboola_default, n.consentPreset = "taboola_default"
    }

    function d(e, t, i) {
        l[e] && s[e].push(i)
    }

    function h(t) {
        t.cmpStatus = e, u(t)
    }

    function p() {
        return !!window.__cmp && (window.__cmp("getConsentData", null, h), !0)
    }

    function u(e) {
        n = TRC.util.merge(n, e), m()
    }

    function m() {
        var e = s["getConsentData"];
        if (!0 !== e.pushOverride) {
            e.push = function (e) {
                "function" == typeof e && e(n)
            }, e.pushOverride = !0;
            for (var t = 0; t < e.length; t++) e[t](n)
        }
    }

    TRC.consent = TRC.consent || {}, TRC.consent.setPresets = function (e) {
        o = TRC.util.merge(o, e)
    }, TRC.consent.setConsent = function (t) {
        TRC.consent.hasCMP() ? (c(), t && (n.cmpStatus = t.consentData ? e : n.cmpStatus, n.consentPreset = t.consentData ? "" : n.consentPreset, (n = TRC.util.merge(n, t)).consentData = o[t.consentPreset] || n.consentData), u()) : __trcError("TRC.consent.setConsent:- no consent source was set")
    }, TRC.consent.getConsentStatus = function () {
        return n.cmpStatus
    }, TRC.consent.hasCMP = function () {
        return !!a
    }, TRC.consent.setConsentSource = function (e, i) {
        return c(), a = e.source.toLowerCase() || a, o = TRC.util.merge(o, e.presets), TRC.cmp = d, n.cmpStatus = t, i && (o = i), "iab" !== a || p()
    }
}(), TRC.css = TRC.css || {}, TRC.css.utils = function (e) {
    var t, i = 4040, r = " style_split", o = "{class},", n = 0, a = 0, s = "", l = "vidiscovery-note";

    function c(e, t) {
        var i = e.indexOf("@media") >= 0 ? e.split("{")[0] + "{" : "", r, o, n, s;
        return (s = (o = (r = (e = i ? e.substring(e.indexOf("{") + 1) : e).split("{")).length > 1 ? r[0].split(".") : e.split(".")).length) < 2 ? i + e : __trcTrim(n = o[1]) === l ? i + e : (t[__trcTrim(n)] ? (u(1), o[0] = "#" + t[__trcTrim(n)].cssDivsArr.join(" #") + " " + o[0]) : (u(a), o[0] = f(o.join(".")) + o[0]), r.length > 1 ? (r[0] = o.join("."), i + r.join("{")) : i + o.join("."))
    }

    function d(e, t) {
        var o = e.split(","), n = o.length, a = "";
        if (g() > i && (a = r, __trcDebug("Number of augmented css rules before Split : " + g()), m(0)), null === t) return h(n < 2 ? e : o, a);
        if (n < 2) return a + c(e, t);
        for (var s = 0; s < n && (o[s] = c(o[s], t), !(o[s].indexOf("{") >= 0 && s < n - 1)); s++) ;
        return a + o.join(",")
    }

    function h(e, t) {
        var i = e.length;
        if ("string" == typeof e) return u(1), t + e;
        for (var r = 0; r < i && (u(1), !(e[r].indexOf("{") >= 0 && r < i - 1)); r++) ;
        return t + e.join(",")
    }

    function p(e, t) {
        var i = e.split("}"), r = i.length;
        if (r < 2) return d(e, t);
        for (var o = 0; o < r; o++) i[o] = d(i[o], t);
        return i.join("}")
    }

    function u(e) {
        n += e
    }

    function m(e) {
        n = e
    }

    function g() {
        return n
    }

    function f(e) {
        return b(!1, !1).replace(new RegExp("{class}", "gm"), e)
    }

    function b(e, t) {
        var i;
        if ("object" == typeof e) {
            for (var r in s = "", e) "string" == typeof r && "" !== r && (i = "#" + e[r].cssDivsArr.join(" #") + " ", s = s + i + " " + o), a++;
            return s = "#" + t.iframe.join(" #") + " " + o + "#" + t.topDiv.join(" #") + " " + o + s.slice(0, s.length - o.length)
        }
        return s
    }

    return t = {
        setStyleTextIdPrefix: function (e, t, i) {
            t && b(t, i);
            var r = p(e, t);
            return __trcDebug("Number of augmented css rules left : " + g()), m(0), r
        }, setStyleElements: function (e) {
            var t = e.split(r), i = t.length;
            i > 1 && TRC.pConsole("page", "debug", "splitting css", "");
            for (var o = 0; o < i; o++) TRC.dom.injectStyle(t[o])
        }, setStyleToElements: function (e, t, i) {
            try {
                var r = [], o = t.split(","), n = [];
                "Array" == __trcTypeOf(e) ? r = e : r.push(e);
                for (var a = 0, s = r.length; a < s; a++) for (var l = 0, c = o.length; l < len; l++) "inline" === i && (n = syles[l].split(":"), r[a].style[__trcTrim(n[0])] = __trcTrim(n[1]))
            } catch (e) {
                __trcError("Error in TRC.css.utils.setStyleToElements " + e.message)
            }
        }, setStyleProperty: function (e, t, i, r) {
            var o = e.style.cssText;
            o += ";" + t + ":" + i + (r ? "!important" : ""), e.style.cssText = o
        }, generateCssRuleWithVendorPrefixes: function (e, t) {
            for (var i = [" -webkit-", "-moz-", "-ms-", "-o-"], r, o = "{property}: {value};".replace("{property}", e).replace("{value}", t), n = [], a = 0; a < i.length; a++) n.push(i[a] + o);
            return n.push(o), n.join(" ")
        }, escape: window["CSS"] && window["CSS"].escape || function (e) {
            var t = function (e) {
                this.message = e
            };
            (t.prototype = new Error).name = "InvalidCharacterError";
            for (var i = String(e), r = i.length, o = -1, n, a = "", s = i.charCodeAt(0); ++o < r;) {
                if (0 == (n = i.charCodeAt(o))) throw new t("Invalid character: the input contains U+0000.");
                a += n >= 1 && n <= 31 || 127 == n || 0 == o && n >= 48 && n <= 57 || 1 == o && n >= 48 && n <= 57 && 45 == s ? "\\" + n.toString(16) + " " : n >= 128 || 45 == n || 95 == n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? i.charAt(o) : "\\" + i.charAt(o)
            }
            return a
        }
    }, e._trcIsUTactive && (t.classSplit = c, t.multiRuleSplit = d, t.ruleSplit = p, t.addRuleCounter = u, t.getCssIdsTemplate = b), t
}(window), TRC.css.Stack = function (e, t) {
    for (var i = e.idPrefix || "tab_", r = e.stack, o = {}, n = document.createDocumentFragment(), a = t ? document.head.appendChild(document.createElement("style")) : null, s = 0; s < r.length; s++) o[r[s].type] = TRC.dom.injectStyle(r[s].cssText || "", n, !0, i + r[s].type);
    this.injectAllStyles = function () {
        a ? document.head.insertBefore(n, a) : document.head.appendChild(n)
    }, this.addStyle = function (e, t, r) {
        var a = o[e];
        t && (a ? a.styleSheet ? a.styleSheet.cssText += t : a.appendChild(document.createTextNode(t)) : o[e] = TRC.dom.injectStyle(t, r ? document : n, !0, i + e))
    }
}, TRC.css.responsive = function () {
    var e;

    function t(e, t) {
        var i;
        return ((TRC.Browser["ieUpto"](7) ? 99 : 99.99) - e * t) / e
    }

    function i(e, i, r, o, n, a) {
        var s = t(e, r), l = "rtl" === a ? "right" : "left",
            c = "." + i + " .videoCube{width: " + s + "%; position: relative; float: " + l + "; margin: 0 0 " + r + "% 0; margin-" + l + ": " + r + "%;}";
        n ? o.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset)) : o.push(c)
    }

    function r(e, t, i, r, n, a) {
        var s = "rtl" === a ? "right" : "left", l = "rtl" === a ? "left" : "right",
            c = " .trc_rbox_div .videoCube {width: " + (1 == e.cells ? "100" : "48") + "%;}",
            d = " .trc_header_left_column {width: " + (1 == e.cells ? "100" : "48") + "%;}",
            h = " .trc_header_right_column {display: " + (1 == e.cells ? "none" : "inline") + ";}",
            p = "." + t + " .trc_rbox_div div.videoCube:nth-of-type(-n+" + e.rows + "){float:" + s + ";clear:" + s + ";}",
            u = "." + t + " .trc_rbox_div div.videoCube:nth-of-type(n+" + (e.rows + 1) + "){float:none;clear:" + l + ";margin-" + s + ":auto;}";
        n ? o(e, t, i, r, a) : r ? (i.push(TRC.css.utils.setStyleTextIdPrefix(u, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(p, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push(u), i.push(p)), r ? (i.push(TRC.css.utils.setStyleTextIdPrefix("." + t + c, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix("." + t + d, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix("." + t + h, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push("." + t + c), i.push("." + t + d), i.push("." + t + h))
    }

    function o(e, t, i, r, o) {
        var n, a = "rtl" === o ? "right" : "left", s = "rtl" === o ? "left" : "right", l = e.rows * e.cells - e.rows, c,
            d;
        for (n = 1; n <= e.rows; n++) c = "." + t + " .trc_rbox_div .videoCube_" + n + "_child{float:" + a + ";clear:" + a + ";}", r ? i.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset)) : i.push(c);
        for (n = e.rows + 1; n <= l; n++) d = "." + t + ".trc_rbox_div  .videoCube_" + n + "_child{float:none;clear:" + s + ";margin-" + a + ":auto;}", r ? i.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)) : i.push(d)
    }

    function n(e, t, i, r, o, n, s, l) {
        var d = e.rows * e.cells,
            h = "." + t + " div.videoCube:nth-of-type(-n+" + d + "){display:block;visibility:visible;}",
            p = "." + t + " div.videoCube:nth-of-type(n+" + (d + 1) + "){display:none;visibility:hidden;}";
        o ? c(i, r, d, t, n) : n ? (i.push(TRC.css.utils.setStyleTextIdPrefix(h, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(p, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push(h), i.push(p)), s && a(e, t, i, l)
    }

    function a(e, t, i, r) {
        var o, n = e.cells / r * 100;
        i.push("." + t + " .trc_rbox_div { width: " + n + "%; }"), i.push("." + t + " .trc_rbox_outer { overflow-x: scroll; -webkit-overflow-scrolling: touch; }")
    }

    function s(e, t, i, r, o) {
        var n = "rtl" === i ? "right" : "left";
        return r ? "." + t + " .trc_rbox_div{margin-" + n + ":-" + e.margin * e.cells / o + "%;}" : "." + t + " .trc_rbox_outer{margin-" + n + ":-" + e.margin + "%;}"
    }

    function l(e, t, r, o, n, a, l, c) {
        var h,
            p = "." + t + " .trc_rbox_outer .videoCube ." + (1 == e.cells ? "video-label-box" : "trc-main-label") + " {height:auto;}",
            u = "." + t + " .trc_rbox_outer .videoCube {margin-bottom:10px;}", m = s(e, t, a, l, c),
            g = e.rows * e.cells, f = TRCImpl.global["disable-one-row-widget-auto-height"],
            b = (l || !f) && 1 == e.rows;
        (1 == e.cells || b) && (o ? d(r, t, n, g) : n ? (r.push(TRC.css.utils.setStyleTextIdPrefix(p, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(u, TRC.modesCache, TRC.lightBoxCssReset))) : (r.push(p), r.push(u))), n ? r.push(TRC.css.utils.setStyleTextIdPrefix(m, TRC.modesCache, TRC.lightBoxCssReset)) : r.push(m), r.push("." + t + " .videoCube_aspect{padding-bottom:" + e.ratio + "%; width: 100%;}"), i(e.cells, t, e.margin, r, n, a)
    }

    function c(e, t, i, r, o) {
        var n;
        for (n = 1; n <= i; n++) o ? e.push(TRC.css.utils.setStyleTextIdPrefix("." + r + " .videoCube_" + n + "_child{display:block;visibility:visible;}", TRC.modesCache, TRC.lightBoxCssReset)) : e.push("." + r + " .videoCube_" + n + "_child{display:block;visibility:visible;}");
        for (n = i + 1; n <= t; n++) o ? e.push(TRC.css.utils.setStyleTextIdPrefix("." + r + " .videoCube_" + n + "_child{display:none;visibility:hidden;}", TRC.modesCache, TRC.lightBoxCssReset)) : e.push("." + r + " .videoCube_" + n + "_child{display:none;visibility:hidden;}")
    }

    function d(e, t, i, r) {
        for (var o, n, a = 1; a <= r; a++) o = "." + t + " .videoCube_" + a + "_child .video-label-box {height:auto;}", n = "." + t + " .videoCube_" + a + "_child{margin-bottom:10px;}", i ? (e.push(TRC.css.utils.setStyleTextIdPrefix(o, TRC.modesCache, TRC.lightBoxCssReset)), e.push(TRC.css.utils.setStyleTextIdPrefix(n, TRC.modesCache, TRC.lightBoxCssReset))) : (e.push(o), e.push(n))
    }

    return e = {
        rulesToCssText: function (e, t, i, o, a, s, c, d) {
            var h, p, u = [], m, g = TRC.Browser["ieUpto"](8), f;
            for (h = 0; p = t[h]; h++) g || ((m = void 0 !== p.min || void 0 !== p.max) && u.push("@media screen and "), void 0 !== p.min && (u.push("(min-width: " + p.min + "px) "), p.max && u.push("and ")), void 0 !== p.max && u.push("(max-width: " + p.max + "px) "), m && u.push("{")), f = e + (g ? "_rule" + h : ""), a ? r(p, f, u, o, g, s) : l(p, f, u, g, o, s, c, d), n(p, f, u, i, g, o, c, d), !g && m && u.push("} ");
            return u.join("")
        }, getRulePercentageWidth: t
    }
}(), TRC.DaisyChain = function (e, t) {
    var i = {}, r, o = "finish", n = "active", a, s, l, c = 0, d = 0, h = TRC.text, p = n;
    this.normalizeTag = function (t, i) {
        var r = e.global["normalize-provider-tag"];
        return "function" == typeof r ? r(i.trc.tag.js, i, t, h.htmlUnescape) : h.htmlUnescape(i.trc.tag.js)
    }, this.addToChain = function (e, t) {
        var r = t || e.trc.tag.pr;
        i[r] = e, c++, TRC.pConsole("mediation", "debug", "pushing in daisy chain ", e, "object")
    }, this.renderAd = function (e) {
        var n, a;
        try {
            return TRC.dispatch("trcContentReady", {container: t.container}), s && TRC.Timeout.clear(s), p == o ? (TRC.pConsole("mediation", "info", "passback rejected - daisy chain finished"), __trcWarn("passback rejected - daisy chain finished- " + r), !1) : (this.incrementPriority(), (n = i[r]) ? (this.renderNextAd(n, e), !0) : d < c ? this.renderAd(e) : (p = o, !1))
        } catch (e) {
            return __trcError("Error in DaisyChain.renderAd - " + (a = n && n.trc.tag ? n.trc.tag.jsid : r), e), l || (l = !0, this.renderAd()), !1
        }
    }, this.renderNextAd = function (e, t) {
        d++, e.trc.tag ? this.renderScript(e) : this.renderTaboola(e, t)
    }, this.incrementPriority = function () {
        r ? r++ : r = 1
    }, this.renderTaboola = function (i, r) {
        TRC.pConsole("mediation", "debug", "rendering taboola"), this.removeIframe(), t.response = i, p = o, r ? r.loadScriptCallback(t.response) : e.internalDrawRBox(t)
    }, this.renderScript = function (i) {
        var r = i.trc.tag;
        s = this.setDeferredAvailableEvent(r.uip, r.ri, e.global["mediation-tag-timeout"] || 1e3), TRC.pConsole("mediation", "debug", "rendering script : " + r.jsid, s, "string"), a = a || TRC.ScriptRenderer.createIframe(t.container), r.normalizedTag = this.normalizeTag(a, i), TRC.ScriptRenderer.renderInIframe(a, r)
    }, this.setDeferredAvailableEvent = function (t, i, r) {
        return TRC.Timeout.set(function () {
            p = o, e.sendEvent("available", {
                ri: i,
                uip: t
            }, null, !0), TRC.pConsole("mediation", "debug", "send available on placement : " + t)
        }, r)
    }, this.removeIframe = function () {
        a && a.parentElement.removeChild(a)
    }, TRC.pConsole("mediation", "info", "starting daisy chain on placement : " + t.placement)
}, TRC.modDebug = function (e, t) {
    var i = TRC.PROTOCOL, r = 2, o,
        n = {timeStamp: "tim=", type: "type=", message: "msg=", debugLevel: "llvl=", id: "id="}, a = function (e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return t.join("&")
        }, s = (l = {}, {
            setMessageCache: function (e) {
                l[e] ? l[e] += 1 : l[e] = 1
            }, getMessageCount: function (e) {
                return l[e] ? l[e] : 0
            }
        }), l;

    function c(e) {
        TRC.net.fireSimpleHttpRequest(e)
    }

    function d(e) {
        switch (e) {
            case 0:
                return "error";
            case.5:
                return "perf";
            case 1:
                return "warn";
            case 2:
                return "info";
            case 3:
                return "debug";
            case 4:
                return "map";
            default:
                return
        }
    }

    function h(t, i, r, o) {
        var s = e.TRCImpl && "thin" === e.TRCImpl.getSystemFlag("loaderType") ? "-tl" : "";
        return n.timeStamp + escape(r) + "&" + n.type + escape(d(t)) + "&" + n.message + escape(i) + (trc_debug_level > 1 ? "&" + n.debugLevel + trc_debug_level : "") + "&" + n.id + Math.floor(1e4 * Math.random()) + (e.TRC.version ? "&cv=" + e.TRC.version + s : "") + (o ? "&" + a(o) : "")
    }

    return o = {
        logMessageToServer: function (t, o, n) {
            if (s.setMessageCache(o), s.getMessageCount(o) <= r) {
                var a = e.TRCImpl && TRCImpl.domain ? TRCImpl.domain : "trc.taboola.com",
                    l = e.TRCImpl ? TRCImpl["normalize-log-param"]("publisher", TRC.publisherId) : TRC.publisherId, d;
                c(i + "//" + a + "/" + l + "/log/2/debug" + "?" + h(t, o, __trcClientTimestamp(), n))
            }
        }, getType: d
    }, e._trcIsUTactive && (o.getType = d, o.messageCache = s, o.getLogParams = h), o
}(window, document), function (e, t) {
    TRC.DeepLinking = {
        isAppStoreURL: function (e, t) {
            var i = /^(market|itms-apps|ms-windows-store)\:\/\//, r = t && new RegExp(t);
            return i.test(e) || !!t && r.test(e)
        }, openDeepLink: function (e) {
            var t = document.createElement("iframe");
            return t.src = e, t.className = "tbl-deep-link", t.height = 0, t.width = 0, document.body.appendChild(t), t
        }
    }
}(window, document), function () {
    TRC.DefaultVideoUnitLoader = function e(t) {
        this.videoConfig = t
    }, TRC.DefaultVideoUnitLoader.prototype.loadUnit = function (videoCallbackData) {
        return eval(videoCallbackData.tags[0].url)
    }, TRC.DefaultVideoUnitLoader.prototype.getVideoContainerSelector = function (e) {
        var t;
        return this.videoConfig.position ? "#" + (t = this.createVideoContainer(e)).id : null
    }, TRC.DefaultVideoUnitLoader.prototype.createVideoContainer = function (e) {
        var t = document.createElement("div"), i = e._trc_container, r;
        if (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += "-video", !i) return __trcWarn("Cannot generate a selector for widget adjacent video container - widget container is not found"), null;
        switch (this.videoConfig.position) {
            case"above":
                r = i;
                break;
            case"below":
                r = i.nextSibling;
                break;
            default:
                __trcWarn("Unknown position in video config: " + this.videoConfig.position)
        }
        return e.insertBefore(t, r), t
    }
}(), function (e, t) {
    var i = [], r = null, o = !1, n, a, s, l;

    function c(e) {
        try {
            if (r && (TRC.Browser["ieUpto"](10) ? t.detachEvent("onreadystatechange", r) : (t.removeEventListener("DOMContentLoaded", arguments.callee, !1), TRC.Interval.clear(r))), TRC.dom.isReady) return;
            TRC.dom.isReady = !0, TRC.dom.onReady = function (e) {
                e()
            };
            for (var o = 0; o < i.length; o++) i[o]()
        } catch (e) {
            __trcError("Error in DOMReady processing", e)
        }
    }

    function d() {
        return e.pageXOffset || t.body.scrollLeft
    }

    TRC.dom = {
        injectedStyles: [],
        isReady: !1,
        onReady: function (e, t) {
            t ? TRC.Timeout.set(e, 10) : i.push(e)
        },
        init: function () {
            if (!o) if (o = !0, t.readyState && /loaded|complete/.test(t.readyState)) c(!0); else {
                if (TRC.Browser["ieUpto"](10)) {
                    var i = t.createElement("div");
                    !function () {
                        try {
                            i.doScroll("left")
                        } catch (e) {
                            return void(i.to = TRC.Timeout.set(arguments.callee, 10))
                        }
                        c()
                    }(), t.attachEvent("onreadystatechange", r = function () {
                        /loaded|complete/.test(t.readyState) && (TRC.Timeout.clear(i.to), c())
                    })
                } else {
                    if (/interactive/.test(t.readyState)) return void c(!0);
                    t.addEventListener("DOMContentLoaded", c, !1), r = TRC.Interval.set(function () {
                        /loaded|complete|interactive/.test(t.readyState) && c()
                    }, 10)
                }
                var n = e.onload;
                e.onload = function () {
                    if (c(), n) try {
                        n()
                    } catch (e) {
                    }
                }
            }
        },
        on: e.addEventListener ? function (e, t, i) {
            var r;
            "touchstart" !== t && "touchmove" !== t || !TRC.Browser.compatibility.passiveEvents || (r = {passive: !0}), e.addEventListener(t, i, r)
        } : e.attachEvent ? function (e, t, i) {
            e.attachEvent("on" + t, i)
        } : void(el["on" + sType] = fn),
        off: e.removeEventListener ? function (e, t, i) {
            e.removeEventListener(t, i, !1)
        } : e.detachEvent ? function (e, t, i) {
            e.detachEvent("on" + t, i)
        } : void(el["on" + sType] = fn),
        getText: function (e) {
            return e.textContent || e.innerText || e.innerHTML
        },
        lineHeight: function (e) {
            var t;
            return e.clineHeight || (t = e.style.display, e.style.display = "inline-block", e.clineHeight = e.clientHeight, e.style.display = t), e.clineHeight
        },
        isAncestor: function (e, t, i) {
            for (t = i ? t : t.parentNode; t && t !== e && 9 != t.nodeType;) t = t.parentNode;
            return e === t
        },
        injectStyle: function (e, i, r, o) {
            var n = document.createElement("style"), i = i || t;
            return n.type = "text/css", o && (n.id = o), i.head ? i.head.appendChild(n) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), !0 !== r && (this.injectStyleOverflowFix(e), TRC.styleInjected = !0), this.injectedStyles.push(n), n
        },
        injectStyleOverflowFix: function (e) {
            if (TRC.Browser.ie && 31 == document.styleSheets.length) {
                var i = document.getElementById("trc_rbox_css_loaded");
                if (null == i && ((i = document.createElement("div")).id = "trc_rbox_css_loaded", t.body.appendChild(i)), "hidden" != document.trcGetCurrentStyle(i, "overflow")) {
                    var r = e.split("}"), o = null;
                    try {
                        for (var n = 0; n < document.styleSheets.length; n++) {
                            var a = document.styleSheets[n];
                            if (r.length + a.rules.length <= 4096) {
                                o = a;
                                break
                            }
                        }
                        null != o && (o.cssText += e)
                    } catch (e) {
                        __trcError("Error in injectStyleOverflowFix processing", e)
                    }
                }
            }
        },
        removeAllInjectedStyleSheets: function () {
            for (var e, t = 0; t < this.injectedStyles.length; t++) (e = this.injectedStyles[t]).parentNode && e.parentNode.removeChild(e);
            this.injectedStyles = [], TRC.styleInjected = !1
        },
        swapElements: function (e, t, i) {
            return i && TRC.dom.purgeEventHandlers(e), e.parentNode.replaceChild(t, e), t
        },
        iterateOnNode: function (e, t) {
            for (t(e), e = e.firstChild; e;) arguments.callee(e, t), e = e.nextSibling
        },
        purgeEventHandlers: function (e) {
            try {
                TRC.dom.iterateOnNode(e, function (e) {
                    for (var t in e) "function" == typeof e[t] && (e[t] = null)
                })
            } catch (e) {
                __trcError("TRC.dom.purgeEventHandlers : ", e.message)
            }
        },
        clearInnerElements: function (e) {
            for (var t; t = e.firstChild;) this.purgeEventHandlers(t), e.removeChild(t)
        },
        stopEvent: function (e) {
            return e.cancelBubble = !0, e.returnValue = !1, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1
        },
        addClass: function (e, t) {
            e.className += " " + t + " "
        },
        removeClass: function (e, t) {
            var i;
            if (e.classList) return e.classList.remove(t);
            i = new RegExp("s*" + t, "g"), e.className = e.className.replace(i, "")
        },
        createHTMLElement: function (e, t) {
            var i;
            return i = document.createElement(e), t && Object.keys(t).length && Object.keys(t).forEach(function (e) {
                i[e] = t[e]
            }), i
        },
        elementMatchesSelector: function (e, t) {
            var i, r;
            return ["matches", "msMatchesSelector", "oMatchesSelector", "mozMatchesSelector", "webkitMatchesSelector"].some(function (t) {
                return e[t] && (r = t), e[t]
            }), r ? e[r](t) : null
        },
        closest: function (e, t) {
            if (e.closest) return e.closest(t);
            for (; !this.elementMatchesSelector(e, t);) if (!(e = e.parentElement)) return null;
            return e
        },
        getWindowWidth: function () {
            return window.innerWidth ? this.getWindowWidth = function () {
                return window.innerWidth
            } : 0 != document.documentElement.clientWidth ? this.getWindowWidth = function () {
                return document.documentElement.clientWidth
            } : this.getWindowWidth = function () {
                return document.body.clientWidth
            }, this.getWindowWidth()
        },
        getWindowHeight: function () {
            return window.innerHeight ? this.getWindowHeight = function () {
                return window.innerHeight
            } : 0 != document.documentElement.clientHeight ? this.getWindowHeight = function () {
                return document.documentElement.clientHeight
            } : this.getWindowHeight = function () {
                return document.body.clientHeight
            }, this.getWindowHeight()
        },
        getPageVerticalScroll: function () {
            return e.pageYOffset || t.body.scrollTop
        },
        getScrollTop: function (t) {
            return t === e ? this.getPageVerticalScroll() || document.documentElement.scrollTop : t.scrollTop
        },
        getViewportVerticalRange: function () {
            var e = this.getPageVerticalScroll(), t;
            return {min: e, max: e + this.getWindowHeight()}
        },
        getViewportHorizontalRange: function () {
            var e = d(), t;
            return {min: e, max: e + this.getWindowWidth()}
        },
        getElementRect: function (e) {
            return e.getBoundingClientRect()
        },
        isInIframe: function (t) {
            try {
                return e.top !== e.self
            } catch (e) {
                return "boolean" == typeof t && t
            }
        },
        createAugmentingContainers: function (e, t) {
            for (var i = [], r = null, o, n = 0; n < e; n++) r = o = this.createAugmentingContainer(r), i.push(o);
            return t && i[e - 1].appendChild(t), i
        },
        createAugmentingContainer: function (e) {
            var i = t.createElement("div");
            return i.id = "tbl-aug-" + Math.floor(2147483648 * Math.random()).toString(36), e && e.appendChild(i), i
        },
        generateAugmentationPrefix: function (e) {
            for (var t = "", i = 0; i < e.length; i++) t += "#" + e[i].id + " ";
            return t
        },
        isHighDensity: (l = window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3, function () {
            return l
        }),
        isRetina: (s = (window.matchMedia && (window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches) || window.devicePixelRatio && window.devicePixelRatio > 2) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent), function () {
            return s
        }),
        isSmartPhone: (a = window.matchMedia && window.matchMedia(" only screen and (min-device-width : 320px) and (max-device-width : 480px)").matches || /(iPhone|iPod)/g.test(navigator.userAgent), function () {
            return a
        }),
        isTablet: (n = window.matchMedia && window.matchMedia(" only screen and (min-device-width : 768px) and (max-device-width : 1024px)").matches || /(iPhone|iPod)/g.test(navigator.userAgent), function () {
            return n
        }),
        isDesktop: function () {
            return !(this.isTablet() || this.isSmartPhone())
        },
        getOuterWidth: function (e) {
            var t, i, r;
            return e.getBoundingClientRect().width + parseFloat(getComputedStyle(e).marginLeft) + parseFloat(getComputedStyle(e).marginRight)
        }
    }
}(window, document), function (e, t) {
    "use strict";
    var i = {}, r = e.TRC, o;

    function n(e, t) {
        e.innerHTML = i._tokenizeSingle(r.dom.getText(e), t)
    }

    function a(e, t) {
        if (e) {
            var i = o(function e(t) {
                return t.className.search("title") >= 0
            }, e, "span"), r = o(function e(t) {
                return t.className.search("description") >= 0
            }, e, "span");
            t.call(this, e, i, r)
        }
    }

    function s(e) {
        return function (t) {
            for (var i in t) {
                var r;
                if (t.hasOwnProperty(i)) t[i].boxes.forEach(function t(i) {
                    a(i.labelsBox, e), a(i.preLabelsBox, e)
                })
            }
        }
    }

    r.Ellipsis = i, i.doEllipsis = function (e) {
        o = o || r.implClasses.TRCRBox.prototype.findElement, r.ellipsisPerf && console.timeStamp("Taboola new ellipsis"), r.performance && r.performance.mark("7.2.1", null, "Ellipsis", "all", "SmartEllipsis", r.PerfEvenType.START), i.measure(e), i.renderEllipsis(e), r.performance && r.performance.mark("7.2.9", null, "Ellipsis", "all", "SmartEllipsis", r.PerfEvenType.STOP)
    }, i.tokenize = function (e, t) {
        return t = t in i._tokenizeStrategies ? t : "word", s(function (e, r, o) {
            e.trcEllipsisTokenized && delete e.trcEllipsisTokenized;
            var a = i._tokenizeStrategies[t];
            r && n(r, a), o && n(o, a), e.trcEllipsisTokenized = !0
        })(e)
    }, i.verifyTokenized = function (e) {
        var t = !0;
        return s(function (e) {
            t = t && e.trcEllipsisTokenized
        })(e), t
    }, i.measure = s(function (e, t, r) {
        var o = t && i._measureSingleElementSizes(t), n = r && i._measureSingleElementSizes(r);
        e.trcEllipsisPositions = {title: o, description: n}
    }), i.renderEllipsis = s(function (e, t, r) {
        var o = e.trcEllipsisPositions;
        if (!o || t && !o.title || r && !o.description) __trcDebug("Calling renderEllipsis without measuring first. Skipping"); else try {
            t && i._repaintSingleEllipsis(t, o.title), r && i._repaintSingleEllipsis(r, o.description)
        } catch (e) {
            __trcDebug(e.message + ". Skipping")
        }
    }), i._tokenizeStrategies = {
        word: function (e) {
            return {spaces: !0, tokens: e.split(/\s+/)}
        }, letter: function (e) {
            return {spaces: !1, tokens: e.match(/&[\w#]+;|./g)}
        }
    }, i._tokenizeSingle = function (e, t) {
        var i = t.call(this, e);
        return r.util.map(i.tokens, function (e) {
            return " " === e ? e : "<ins>" + e + "</ins>"
        }).join(i.spaces ? " " : "")
    }, i._measureSingleElementSizes = function (e) {
        if (!e || !e.offsetHeight) return null;
        if (!e.firstChild || "INS" != e.firstChild.tagName) return __trcDebug("Attempted to call measure on element before tokenize. Skipping");
        var t = o(function e(t) {
            return t.className.search("lastLineEllipsis") >= 0
        }, e, "ins");
        if (t) {
            var i = e.getElementsByTagName("ins");
            if (t.className.replace(/[\t\r\n\f]/g, " ").indexOf("tblHideAllButFirst") >= 0) for (var n = 0; n < i.length; n++) {
                var a;
                (a = i[n]).style.display = ""
            }
            t.parentNode.removeChild(t)
        }
        for (var i = e.getElementsByTagName("ins"), s = r.dom.lineHeight(i[0]), l = Math.floor(e.offsetHeight / s) * s, c = l - s, d = e.offsetWidth, h = i[0].offsetWidth, p = [], u, m, n = 0; n < i.length; n++) {
            var a = i[n];
            void 0 === u && a.offsetTop >= c && (u = i[n]), void 0 !== u && p.push(r.dom.getText(a)), !m && a.offsetTop >= l && (m = i[n - 1])
        }
        return {lastLineStartsAt: u, lastVisibleWord: m, singleLineContent: p, elementWidth: d, firstWordWidth: h}
    }, i._repaintSingleEllipsis = function (e, o) {
        if (o.lastVisibleWord) {
            var n = t.createElement("ins");
            r.dom.addClass(n, "lastLineEllipsis");
            var a = e.tokenizeStrategy || "word", s = i._tokenizeStrategies[a]("").spaces;
            if (n.appendChild(document.createTextNode(o.singleLineContent.join(s ? " " : ""))), e.insertBefore(n, o.lastLineStartsAt), "word" === a && o.firstWordWidth >= o.elementWidth) for (var l = e.getElementsByTagName("ins"), c = 0; c < l.length; c++) {
                var d = l[c];
                -1 == d.className.replace(/[\t\r\n\f]/g, " ").indexOf("lastLineEllipsis") ? d.style.display = "none" : d.className += " tblHideAllButFirst"
            }
        }
    }
}(window, document), TRC.eventDelegator = function (e, t) {
    var i = [], r = {}, o;

    function n(e, t) {
        var r;
        i[e] && (a(r = i[e]["_all"], t || ""), t && i[e][t.container.id] && a(r = i[e][t.container.id], t))
    }

    function a(e, t) {
        if (e) {
            var i, r = e.length;
            for (i = 0; i < r; i++) try {
                "function" == typeof e[i] && setTimeout(function (e, t) {
                    return function () {
                        e(t)
                    }
                }(e[i], t), 0)
            } catch (e) {
                __trcError("executeHandlers", e)
            }
        }
    }

    function s(e, t) {
        var i;
        if (t) for (i in t) try {
            "function" == typeof e && setTimeout(function (e, t) {
                return function () {
                    e(t)
                }
            }(e, t[i]), 0)
        } catch (e) {
            __trcError("executeHandlers", e)
        } else setTimeout(e, 0)
    }

    function l(e) {
        i[e] = [], i[e]["_all"] = []
    }

    function c(e, t) {
        i[e][t] = []
    }

    var d = {
        subscribe: function (e, t, o) {
            i[e] || l(e), o ? (i[e][o] || c(e, o), i[e][o].push(t), r[e] && r[e][o] && s(t, {mode: r[e][o]})) : (i[e]["_all"].push(t), r[e] && s(t, r[e]))
        }, dispatch: function (e, t) {
            r[e] = r[e] || {}, t ? r[e][t.container.id] = t : r[e]["_all"] = {}, n(e, t || null)
        }, resetEvents: function () {
            r = {}
        }
    };
    if (e._trcIsUTactive && (d.processDelegatorsStack = n, d.executeHandlers = a, d.executePreviousEvents = s, d.delegatorsStack = i, d.eventsStack = r), TRC.subscriptionRegister) for (; TRC.subscriptionRegister.length;) o = TRC.subscriptionRegister.shift(), d.subscribe(o.event, o.handler, o.container);
    return d
}(window, document), function (e, t) {
    function i(e) {
        return {detail: e}
    }

    function r(e) {
        return "api::" + e
    }

    function o(e, t) {
        TRC.dispatch(r(e), i(t))
    }

    function n(e, t) {
        var i = TRC.TRCParser, r;
        return e = e || {}, r = {
            mode: i.parseModeName(e),
            placement: i.parsePlacementName(e),
            baseMode: i.parseBaseModeName(e),
            variant: i.parseTestVariant(e),
            itemCount: i.getItemCount(e)
        }, t && (r.container = t.container, r.items = t.apiData), r
    }

    TRC.EventsAPI = {
        dispatchVisible: function () {
        }, dispatchClick: function (e, t) {
            var i = TRC.TRCParser, r;
            e = e || {}, r = new TRC.ItemParser(e), t = t || {}, o("click", {
                slot: r.getSlot(),
                id: r.getId(),
                type: r.getType(),
                title: r.getTitle(),
                url: r.getUrl(),
                linkTarget: r.getLinkTarget(),
                mode: i.parseModeName(t),
                placement: i.parsePlacementName(t),
                baseMode: i.parseBaseModeName(t),
                variant: i.parseTestVariant(t),
                itemCount: i.getItemCount(t)
            })
        }, dispatchVisible: function (e, t) {
            var i;
            o("visible", n(e, t))
        }, dispatchRender: function (e, t) {
            var i;
            o("render", n(e, t))
        }, dispatchNoContent: function (e, t) {
            var i = {reason: e};
            t && (i.placement = t), o("nocontent", i)
        }, listen: function (e, t) {
            TRC.listen(r(e), t, !0)
        }, readmore: function (e, t) {
            var i = TRC.TRCParser;
            t = t || {}, o("readmore." + e, {
                mode: i.parseModeName(t),
                placement: i.parsePlacementName(t),
                variant: i.parseTestVariant(t)
            })
        }
    }
}(window, document), function (e, t) {
    var i, r, o = {}, n = 0;

    function a(e) {
        void 0 === o[e] && (o[e] = [])
    }

    function s(e, t) {
        a(e), o[e].forEach(function (i, r) {
            t != i.id || o[e].splice(r, 1)
        })
    }

    if (TRC.listen = function (e, t, i) {
        if ("object" == typeof e && e.length) return e.forEach(function (e) {
            TRC.listen(e, t)
        }), null;
        a(e);
        var r = {
            id: n++, handler: t, eventName: e, sync: i, remove: function () {
                s(this.eventName, this.id)
            }
        };
        return o[e].push(r), r
    }, TRC.dispatch = function (e, t) {
        a(e);
        var n = i(e, t);
        o[e].forEach(function (e) {
            if (e.sync) try {
                e.handler.call(this, n)
            } catch (e) {
            } else r(function () {
                e.handler.call(this, n)
            }.trcBind(this))
        }.trcBind(this))
    }, t.addEventListener && t.dispatchEvent) return t.addEventListener("trcFakeEvents", function (e) {
        e.cx()
    }, !1), i = function (e, i) {
        var r = t.createEvent("Event");
        return r.initEvent(e, !1, !1), "[object Array]" === Object.prototype.toString.call(i) ? r.data = i : "object" == typeof i ? __trcCopyProps(i, r) : r.data = i, r
    }, void(r = function (e) {
        var r = i("trcFakeEvents");
        r.cx = e, t.dispatchEvent(r)
    });
    t.documentElement.attachEvent("onpropertychange", function (e) {
        "trcFakeEvents" == e.propertyName && e.cx()
    }), i = function (e, i) {
        var r;
        return i && i.generator && "ceo" === i.generator ? (i.type = e, i) : ((r = t.createEventObject()).generator = "ceo", r.type = e, "[object Array]" === Object.prototype.toString.call(i) ? r.data = i : "object" == typeof i ? __trcCopyProps(i, r) : r.data = i, r)
    }, r = function (e) {
        var r = i("trcFakeEvents");
        r.cx = e, r.propertyName = "trcFakeEvents", t.documentElement.fireEvent("onpropertychange", r)
    }
}(window, document), function (e) {
    var t = TRC.ExpandAnimationManager = function (t) {
        this.rbox = t, this.container = t.container, this.trcContainer = this.container._trc_container, TRC.css.utils.setStyleElements(this.createCSS()), this.trcContainer.className += " trc_expandable", this.throttledExpandScrollHandler = this.scrollHandler.trcBind(this).trcThrottle(10), TRC.dom.on(e, "scroll", this.throttledExpandScrollHandler)
    };
    t.prototype.scrollHandler = function () {
        this.rbox.isInViewPort(this.container, 0) ? this.trcContainer.wasOutOfViewPort && (this.trcContainer.className += " trc_show", TRC.dom.off(window, "scroll", this.throttledExpandScrollHandler)) : this.trcContainer.wasOutOfViewPort = !0
    }, t.prototype.createCSS = function () {
        for (var e = [], t = "#" + TRC.css.utils.escape(this.container.id), i = this.rbox.trc.getProperty(this.rbox.mode_name, "expand-animation-duration"), r = this.rbox.trc.getProperty(this.rbox.mode_name, "expand-animation-max-height"), o = [t + " .trc_rbox_container.trc_expandable {" + TRC.css.utils.generateCssRuleWithVendorPrefixes("transition-duration", i + "ms") + "}", t + " .trc_rbox_container.trc_expandable.trc_show { max-height: " + r + "px;}"], n = 0; n < o.length; n++) this.rbox.trc.cssReset ? e.push(TRC.css.utils.setStyleTextIdPrefix(o[n], TRC.modesCache, TRC.lightBoxCssReset)) : e.push(o[n]);
        return e.join("")
    }
}(window), function () {
    const e = {
        collapsedHeight: 490,
        expandButtonCaption: "Show More",
        collapseButtonCaption: "Show Less",
        fadeBackgroundColor: "#fff",
        fadeHeight: 60,
        buttonTop: 28,
        buttonBottom: 10,
        fadeGradient: 40
    };

    class t {
        constructor(t, i, r) {
            this.externalCardMaxRetries = t.global["external-card-max-retries"] || 5, this.externalCardRetryInterval = t.global["external-card-retry-interval"] || 1e3, r = __trcCopyProps(e, {}, r), this.init(i, r)
        }

        init(e, i, r = 0) {
            if (this.boxElement = document.getElementById(e), this.boxElement) {
                if (this.boxElement.getBoundingClientRect().height < i.collapsedHeight) return void(r < this.externalCardMaxRetries ? (r++, setTimeout(this.init.trcBind(this, e, i, r), this.externalCardRetryInterval)) : TRC.dom.addClass(this.boxElement, "tbl-expandable-box-inactive"));
                TRC.dom.addClass(this.boxElement, "tbl-collapsed"), TRC.dom.injectStyle(t.getExpandableBoxCSS(e, i)), this.boxElement.appendChild(this.createExpandButton(i)), this.boxElement.appendChild(this.createCollapseButton(i)), this.listenToBoxClick()
            } else __trcError(`Cannot find expandable box element by ID: ${e}`)
        }

        createExpandButton(e) {
            return this.createButton(e.expandButtonCaption, this.handleExpandClick, "tbl-expand-btn-container")
        }

        createCollapseButton(e) {
            return this.createButton(e.collapseButtonCaption, this.handleCollapseClick, "tbl-collapse-btn-container")
        }

        createButton(e, t, i) {
            let r = document.createElement("div"), o = document.createElement("a");
            return o.className += "tbl-expandable-box-btn", o.textContent ? o.textContent = e : o.innerText = e, TRC.dom.on(o, "click", t.trcBind(this)), r.className = `tbl-expandable-box-btn-container ${i}`, r.appendChild(o), r
        }

        addExpandClasses() {
            TRC.dom.addClass(this.boxElement, "tbl-expanded"), TRC.dom.removeClass(this.boxElement, "tbl-collapsed"), this.isExpanded = !0
        }

        addCollapseClasses() {
            TRC.dom.addClass(this.boxElement, "tbl-collapsed"), TRC.dom.removeClass(this.boxElement, "tbl-expanded"), this.isExpanded = !1
        }

        handleExpandClick(e) {
            e.preventDefault(), e.stopPropagation(), this.isExpanded || this.addExpandClasses()
        }

        handleCollapseClick(e) {
            e.preventDefault(), e.stopPropagation(), this.addCollapseClasses(), this.boxElement.scrollIntoView && this.boxElement.scrollIntoView()
        }

        static getExpandableBoxCSS(e, t) {
            return `#${e}.tbl-expanded { max-height:inherit;}#${e}.tbl-collapsed { max-height: ${t.collapsedHeight}px; overflow: hidden; position: relative;}#${e} .tbl-expandable-box-btn { margin: ${t.buttonTop}px 0 ${t.buttonBottom}px !important; display: inline-block!important; line-height: 38px!important; text-align: center!important; white-space: nowrap!important; vertical-align: middle!important; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer!important; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #326891!important; background: #edf2f5 none !important; border: 1px solid #93abbc !important; height: 38px!important; width: 100%!important; font-size: 15px!important; font-weight: bold!important; border-radius: 3px!important; font-family: sans-serif!important; }#${e} .tbl-expandable-box-btn:hover { background-color: #bed0dc!important; border-color: #7399b3!important; color: #326891!important; }#${e} .tbl-expandable-box-btn-container { display: none; text-align: center; }#${e} .tbl-expand-btn-container { position: absolute; z-index: 100; left: 0; right:0; bottom: 0; padding: ${t.fadeHeight}px 10px 0px 10px; box-sizing: border-box; background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(50%, ${t.fadeBackgroundColor}), color-stop(100%, ${t.fadeBackgroundColor})); background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='${t.fadeBackgroundColor}',GradientType=0); }#${e}.tbl-expanded .tbl-collapse-btn-container{ display:block; padding: 0px 5px;}#${e}.tbl-collapsed .tbl-expand-btn-container{ display:block;}`
        }

        listenToBoxClick() {
            TRC.listen("expandableBoxChildIFrameClick", e => {
                e.container !== this.boxElement || this.isExpanded || this.addExpandClasses()
            })
        }
    }

    TRC.ExpandableBox = t
}(), TRC.ExternalContainerAppender = {
    MAX_RETRIES: 50, TIMEOUT: 100, move: function (e, t, i) {
        var r;
        i = i || 0, document.querySelector && (t ? (r = document.querySelector(e)) ? (t.appendChild(r), TRC.dispatch("trcContentReady", {container: t})) : i < this.MAX_RETRIES ? TRC.Timeout.set(this.move.trcBind(this, e, t, i + 1), this.TIMEOUT) : __trcWarn("Could not find external container with selector " + e + " to move") : __trcError("Could not find target container for external container move"))
    }
}, function () {
    var e = "data-card-index",
        t = {card: {1: "cardVisibleHandler", 2: "cardInvisibleHandler", 3: "cardInvisibleHandler"}};

    function i(e) {
        this.subscribers = [], this.visibleFeedContainers = [], this.feedObserverCommonOptions = {
            onExit: this.feedIntersectionExitHandler.trcBind(this),
            onEnter: this.feedIntersectionEnterHandler.trcBind(this)
        }, this.addFeedIntersectionEventHandler(e)
    }

    i.prototype.subscribe = function (e) {
        this.subscribers.push(e)
    }, i.prototype.addFeedIntersectionEventHandler = function (e) {
        if (e) {
            var t = __trcCopyProps(this.feedObserverCommonOptions, {targetElement: e});
            TRC.intersections.observe(t)
        }
    }, i.prototype.feedIntersectionEnterHandler = function (e, t) {
        var i;
        -1 === this.visibleFeedContainers.indexOf(t) && this.visibleFeedContainers.push(t), this.subscribers.forEach(function (e) {
            e.feedVisibleHandler()
        })
    }, i.prototype.feedIntersectionExitHandler = function (e, t) {
        var i = this.visibleFeedContainers.indexOf(t);
        -1 !== i && this.visibleFeedContainers.splice(i, 1), this.visibleFeedContainers.length || this.subscribers.forEach(function (e) {
            e.feedInvisibleHandler()
        })
    }, i.prototype.cardIntersectionEventHandler = function (i, r, o) {
        var n = parseInt(i.getAttribute(e), 10), a = t.card[o];
        a && this.subscribers.forEach(function (e) {
            e[a](n)
        })
    }, i.prototype.onCardAdded = function (e, t) {
        var i;
        e && t && (i = {
            targetElement: e,
            onTrigger: this.cardIntersectionEventHandler.trcBind(this)
        }, TRC.intersections.isInViewPort(i), this.subscribers.forEach(function (i) {
            i.cardAddedHandler(e, t)
        }))
    }, TRC.FeedObserver = i
}(), function () {
    var e = [2, 3, 5, 5, 5, 5, 5], t = 10, i = 1, r = 2;

    function o(r, o) {
        this.state = i, this.timeOnFeed = null, this.lastTimeStamp = null, this.tickCounter = 0, this.eventIntervals = e, this.defaultInterval = t, this.trcManager = o, r.subscribe(this)
    }

    o.prototype.cardVisibleHandler = function (e) {
    }, o.prototype.cardInvisibleHandler = function (e) {
    }, o.prototype.feedVisibleHandler = function () {
        this.state === i && this.start()
    }, o.prototype.feedInvisibleHandler = function () {
        this.state === r && setTimeout(this.stop(), 0)
    }, o.prototype.cardAddedHandler = function (e, t) {
    }, o.prototype.tick = function (e) {
        e || this.update();
        var t = this.defaultInterval;
        this.tickCounter < this.eventIntervals.length && (t = this.eventIntervals[this.tickCounter]), this.timeoutId = setTimeout(this.tick.trcBind(this), 1e3 * t), this.tickCounter++
    }, o.prototype.start = function () {
        this.state = r, this.lastTimeStamp = Date.now(), this.tick(!0)
    }, o.prototype.stop = function () {
        this.state = i, clearTimeout(this.timeoutId), this.update()
    }, o.prototype.update = function () {
        this.updateTimeOnFeed()
    }, o.prototype.updateTimeOnFeed = function () {
        var e = Date.now();
        this.timeOnFeed += e - this.lastTimeStamp, this.lastTimeStamp = e
    }, o.prototype.sendUpdate = function (e) {
    }, TRC.FeedReportingServiceBase = o
}(), function () {
    var e = "organic", t = "sponsored", i = "firstItem";

    function r(e, t, i, r) {
        this.parentFeed = e, this.trcManager = t, this.options = i, this.feedContainer = e.container, this.teaser, this.teaserVisibilityCountDownStartTime = 0, this.teaserVisibilityCountDownTimer = null, this.carouselItemsIterationInterval = null, this.teaserItems = null, this.state = {
            feedInViewport: !1,
            teaserIsVisible: !1,
            visibleItemIndex: 0,
            currentCarouselIteration: 1,
            doneCarouseling: !1
        }, this.itemsTypesMap = {
            organic: this.handleOrganicItemClick,
            sponsored: this.scrollToFeed,
            discover: this.scrollToFeed
        }, this.config = this.getTeaserConfig(r), this.trcResponseListener = TRC.listen("trcResponseHandled", this.onTrcResponse.trcBind(this)), this.videoSliderReady = !1, this.listenToVideoSliderReady()
    }

    function o() {
        return '<svg class="tbl-arrow-icon arrow-1" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + '<svg class="tbl-arrow-icon arrow-2" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>"
    }

    function n() {
        return '<div class="tbl-teaser-closeBtn">' + '<svg width="10px" height="10px" viewBox="0 0 10 10">' + "<defs></defs>" + '<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">' + '<g id="icons" transform="translate(-23.000000, -130.000000)">' + '<polygon id="Desktop-Close-initial" points="33 131.208868 31.7911325 130 28 133.791132 24.2088675 130 23 131.208868 26.7911325 135 23 138.791132 24.2088675 140 28 136.208868 31.7911325 140 33 138.791132 29.2088675 135"></polygon>' + "</g>" + "</g>" + "</svg>" + "</div>"
    }

    r.prototype.getValueOrDefault = function (e, t) {
        return 0 === e ? 0 : e || t
    }, r.prototype.getTeaserConfig = function (t) {
        return {
            showTeaserAfterNumOfMiliseconds: (t = t || {}).showTeaserAfterNumOfMiliseconds || 5e3,
            maxOrganicItems: this.getValueOrDefault(parseInt(t.maxOrganicItems), 2),
            maxSponsoredItems: this.getValueOrDefault(parseInt(t.maxSponsoredItems), 1),
            carouselItemsDisplayInMilliseconds: parseInt(t.carouselItemsDisplayInMilliseconds) || 7e3,
            itemRetriesLeft: t.maxItemRetries || 5,
            customCardDesktop: t.customCardDesktop || [e],
            customCardMobile: t.customCardMobile || [e],
            teaserSidePosition: t.teaserSidePosition || "right",
            mobileVerticalPosition: t.mobileVerticalPosition || "bottom",
            scrollDurationSpeed: parseInt(t.scrollDurationSpeed) || 2500,
            discoverButtonText: t.discoverButtonText || "Discover More Articles",
            discoverCardLabel: t.discoverCardLabel || "Discover Articles Trending Now",
            discoverCardBlueButton: t.discoverCardBlueButton || "Jump to the Latest Posts",
            itemHeader: t.itemHeader || "Up Next",
            topStickyElementHeight: parseInt(t.topStickyElementHeight) || 0,
            teaserVisibilityRemainingTime: parseInt(t.teaserVisibilityRemainingTime) || null,
            lastItemType: t.lastItemType || "discover",
            teaserCarouselIteration: parseInt(t.teaserCarouselIteration) || 2
        }
    }, r.prototype.listenToVideoSliderReady = function () {
        this.videoConversionListener = TRC.listen("videoSliderReady", this.onVideoSliderReady.trcBind(this))
    }, r.prototype.onVideoSliderReady = function () {
        this.videoSliderReady = !0, this.videoConversionListener.remove(), this.hideTeaser()
    }, r.prototype.getImagePrefixByItemThumbnail = function (e) {
        var t = {width: 120, height: 120}, i = TRC.implClasses.TRCRBox.prototype.getImageUrlPrefix(),
            r = this.trcManager.global["tmp-image-utf8-encode"] ? encodeURIComponent(e) : escape(e);
        return (i = TRC.URL.prototype.switchProtocol.call(i, TRC.PROTOCOL)).replace(new RegExp("{w}", "g"), t.width.toString()).replace(new RegExp("{h}", "g"), t.height.toString()) + r
    }, r.prototype.createTeaserItems = function (i) {
        var r = i.video_data, o = this.getImagePrefixByItemThumbnail(r.thumbnail);
        return {
            id: r["item-id"],
            content: r.title || r.description,
            img: o,
            "item-type": TRC.dom.elementMatchesSelector(i, ".syndicatedItem") ? t : e
        }
    }, r.prototype.getTeaserItemsFromFeed = function () {
        this.visibleOrganicItems = this.getVisibleFeedItemByItemSelector(".videoCube:not(.syndicatedItem)"), this.visibleSponsoredItems = this.getVisibleFeedItemByItemSelector(".videoCube.syndicatedItem");
        var e = this.getItemsByConfigMaxItemsNumber(this.config.maxOrganicItems, this.visibleOrganicItems),
            t = this.getItemsByConfigMaxItemsNumber(this.config.maxSponsoredItems, this.visibleSponsoredItems), i;
        return e.concat(t).map(this.createTeaserItems.bind(this))
    }, r.prototype.hasEnoughItemsFromFeed = function (e) {
        return e && e.length >= this.config.maxOrganicItems
    }, r.prototype.getItemsByConfigMaxItemsNumber = function (e, t) {
        return t.length >= e ? t.slice(0, e) : t
    }, r.prototype.getVisibleFeedItemByItemSelector = function (e) {
        var t = this.feedContainer, i, r = {}, o;
        return [].slice.call(t.querySelectorAll(e)).filter(function (e) {
            return e.getBoundingClientRect().height > 0
        }).filter(function (e) {
            return !r.hasOwnProperty(e.getAttribute("data-item-id")) && (r[e.getAttribute("data-item-id")] = !0)
        })
    }, r.prototype.createNewElement = function (e, t, i, r, o, n) {
        if (!e) return !1;
        var a = document.createElement(e);
        return a.id = t || "", a.className = i || "", a.innerHTML = r || "", n && n.forEach(function (e) {
            var t = Object.keys(e)[0], i = e[t];
            a.setAttribute(t, i)
        }), o && o.forEach(function (e) {
            var t = Object.keys(e)[0], i = e[t];
            TRC.dom.on(a, t, i)
        }), a
    }, r.prototype.getCardItemInnerHtml = function (e, t) {
        var i;
        return '<div class="img" style="' + (e ? "background-image: url(" + e + ")" : "") + '"></div>' + '<div class="content-container">' + '<div class="content">' + '<span class="card-content">' + t + "</span>" + "</div>" + "</div>" + "</li>"
    }, r.prototype.getDiscoverCardInnerHtml = function (e) {
        return '<div class="img">' + '<div class="mockup-feed-wrapper">' + this.getMockupHTML(e) + "</div>" + "</div>" + '<div class="content-container">' + '<div class="content">' + '<div class="card-content">' + '<div class="discover-card-label">' + this.config.discoverCardLabel + "</div>" + '<div class="discover-card-btn">' + this.config.discoverCardBlueButton + '<span class="arrow">' + '<svg class="tbl-arrow-icon arrow-1" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + '<svg class="tbl-arrow-icon arrow-2" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + "</span></div>" + "</div>" + "</div>" + "</div>"
    }, r.prototype.getItmesAsDomElements = function (e) {
        var t = this, i = [{click: t.handleItemClick.bind(t)}], r = e.map(function (e, r) {
            var o = 0 === r ? "show" : "", n = t.getCardItemInnerHtml(e.img, e.content),
                a = [{"data-item-id": e.id}, {"data-item-type": e["item-type"]}, {"teaser-item-index": r}, {style: "z-index:" + r}];
            return t.createNewElement("li", null, "tbl-teaser-item card-holder card-" + r + " " + o, n, i, a)
        });
        if ("discover" === this.config.lastItemType) {
            var o = this.getDiscoveritemElement(e, i);
            r.push(o)
        }
        return r
    }, r.prototype.getDiscoveritemElement = function (e, t) {
        var i = this.getDiscoverCardInnerHtml(e), r = [{"data-item-type": "discover"}, {style: "z-index:" + e.length}];
        return this.createNewElement("li", null, "tbl-teaser-item tbl-discover-card card-" + e.length, i, t, r)
    }, r.prototype.getMockupHTML = function (e) {
        for (var t = '<div class="section-wrapper">' + '<div class="mockup-section"></div>' + '<div class="mockup-row"></div>' + '<div class="mockup-span"></div>' + "</div>", i = e.map(function (e) {
            return e.img
        }), r = 0; r < 2; r++) for (var o = 0; o < i.length; o++) t += '<div class="section-wrapper">' + '<div class="mockup-section" style="background-image: url(' + i[o] + ')"></div>' + '<div class="mockup-row"></div>' + '<div class="mockup-span"></div>' + "</div>";
        return t
    }, r.prototype.createTeaserElement = function () {
        var e = [{mouseenter: this.handleTeaserHover.bind(this)}, {mouseleave: this.handleMouseLeaveTeaser.bind(this)}],
            t = "DESK" === TRC.platform_code ? " tbl-teaser-position-" + this.config.teaserSidePosition : "";
        return this.createNewElement("div", "tbl-teaser", "tbl-cards-teaser " + t + " tbl-teaser-mobile-position-" + this.config.mobileVerticalPosition, null, e)
    }, r.prototype.createInnerTeaserElement = function () {
        return this.createNewElement("div", "tbl-teaser-inner", "tbl-cards-teaser-inner")
    }, r.prototype.createArrowIconElement = function () {
        return this.createNewElement("span", null, "arrow", '<svg class="tbl-arrow-icon arrow-1" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + '<svg class="tbl-arrow-icon arrow-2" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>")
    }, r.prototype.createHeaderElement = function () {
        return this.createNewElement("div", "tbl-up-next", "tbl-teaser-header", "<span>" + this.config.itemHeader + "</span>")
    }, r.prototype.createCircleArrowElement = function () {
        return this.createNewElement("div", null, "circle-arrow", "")
    }, r.prototype.createClosebuttonElement = function () {
        return this.createNewElement("div", null, "tbl-teaser-closeBtn-wrapper", '<div class="tbl-teaser-closeBtn">' + '<svg width="10px" height="10px" viewBox="0 0 10 10">' + "<defs></defs>" + '<g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">' + '<g id="icons" transform="translate(-23.000000, -130.000000)">' + '<polygon id="Desktop-Close-initial" points="33 131.208868 31.7911325 130 28 133.791132 24.2088675 130 23 131.208868 26.7911325 135 23 138.791132 24.2088675 140 28 136.208868 31.7911325 140 33 138.791132 29.2088675 135"></polygon>' + "</g>" + "</g>" + "</svg>" + "</div>", [{click: this.handleCloseBtnClick.bind(this)}])
    }, r.prototype.createDiscoverFeedDiv = function () {
        return this.createNewElement("div", "discoverFeed", "tbl-discover-feed-btn", this.config.discoverButtonText + '<span class="arrow">' + '<svg class="tbl-arrow-icon arrow-1" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + '<svg class="tbl-arrow-icon arrow-2" viewBox="0 0 52 32">' + '<path d="M39.308 1.455h11.601l-24.852 29.091-24.602-29.091h12.25l12.352 14.545z"></path>' + "</svg>" + "</span>", [{click: this.handleDiscoverFeedBtnClick.bind(this)}])
    }, r.prototype.createItemsContainerElement = function () {
        return this.createNewElement("ul", "tbl-items-container")
    }, r.prototype.createTeaserHtml = function (e) {
        var t = this.createTeaserElement(), i = this.createInnerTeaserElement(), r = this.createArrowIconElement(),
            o = this.createHeaderElement(), n = this.createCircleArrowElement(), a = this.createClosebuttonElement(),
            s = this.createDiscoverFeedDiv(), l = this.getItmesAsDomElements(e), c = this.createItemsContainerElement();
        return l.forEach(function (e) {
            c.appendChild(e)
        }), i.appendChild(s), i.appendChild(o), n.appendChild(r), i.appendChild(n), i.appendChild(c), t.appendChild(i), t.appendChild(a), t
    }, r.prototype.handleTextOverflow = function () {
        var e;
        [].slice.call(document.querySelectorAll("#tbl-teaser #tbl-items-container .tbl-teaser-item.card-holder .content")).forEach(function (e) {
            for (var t = e.parentNode, i = e.parentNode.offsetHeight - parseInt(window.getComputedStyle(t).paddingTop, 10); e.offsetHeight > i || e.offsetHeight > 41;) e.innerText = e.innerText.slice(0, -1)
        })
    }, r.prototype.renderCustomCardIntoFeed = function () {
        var e,
            i = ("DESK" === TRC.platform_code ? this.config.customCardDesktop : this.config.customCardMobile).includes(t) ? "has-sponsored" : "",
            r = this.createNewElement("div", "taboola-teaser-card-container", "trc_related_container trc_spotlight_widget trc_elastic tbl-feed-card " + i, "");
        r.innerHTML = '<div class="trc_rbox_container" style="display: block;">' + "<div>" + '<div id="trc_wrapper" class="trc_rbox thumbnails-feed trc-content-sponsored " style="overflow: hidden; display: block;">' + '<div id="trc_header" class="trc_rbox_header trc_rbox_border_elm">' + '<div class="trc_header_ext">' + '<div class="logoDiv link-adc ">' + '<a class="trc_desktop_adc_link trc_attribution_position_top" rel="nofollow" href="http://popup.taboola.com/en/?template=colorbox&amp;utm_source=kentuckysportsradio&amp;utm_medium=referral&amp;utm_content=thumbnails-feed:Below Article Thumbnails | Card 1:" target="_blank">' + '<span class="trc_adc_wrapper">' + '<span class="trc_adc_s_logo"></span>&nbsp;</span>' + '<span class="trc_logos_v_align">&nbsp;</span>' + "</a>" + "</div>" + '<div class="logoDiv link-disclosure attribution-disclosure-link-hybrid">' + '<a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow" href="http://popup.taboola.com/en/?template=colorbox&amp;utm_source=kentuckysportsradio&amp;utm_medium=referral&amp;utm_content=thumbnails-feed:Below Article Thumbnails | Card 1:" target="_blank">' + "<span>Promoted Links</span>" + '<span class="trc_logos_v_align">&nbsp;</span>' + "</a>" + "</div>" + "</div>" + "</div>" + '<div id="outer" class="trc_rbox_outer">' + '<div id="rbox-t2v" class="trc_rbox_div trc_rbox_border_elm">' + '<div id="internal_trc" class="items-wrapper">' + "</div>" + "</div>" + "</div>" + '<div class="trc_clearer"></div>' + "</div>" + "</div>" + "</div>";
        var o = document.querySelector('.trc_related_container[data-card-index="1"]');
        o.parentNode.insertBefore(r, o)
    }, r.prototype.sendAbTestEvent = function (e, t) {
        window._taboola = window._taboola || [], _taboola.push({
            name: "abtests",
            val: {abTestsEventType: "simple", name: e, type: t, eventTime: (new Date).getTime()}
        })
    }, r.prototype.scrollToDestination = function (e, t, i, r) {
        var o = {
                easeInOutQuart: function (e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                }
            }, n = window.pageYOffset, a = "now" in window.performance ? performance.now() : (new Date).getTime(),
            s = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
            l = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
            c = "number" == typeof e ? e : e.offsetTop, d = Math.round(s - c < l ? s - l : c);
        if ("requestAnimationFrame" in window == !1) return window.scroll(0, d), void(r && r());

        function h() {
            var e = "now" in window.performance ? performance.now() : (new Date).getTime(),
                s = Math.min(1, (e - a) / t), l = o[i](s), c = Math.ceil(l * (d - n) + n);
            window.scrollTo(0, c), window.pageYOffset !== d ? requestAnimationFrame(h) : r && r()
        }

        h()
    }, r.prototype.arrayDoesntIncludeIdAndIsSimilarType = function (e, t, i, r) {
        return -1 === e.indexOf(t) && i === r
    }, r.prototype.getFeedItemsNodeListByClickedItem = function (i) {
        var r = this.feedContainer, o = this.teaserItems, n = [r.querySelector('[data-item-id="' + i.id + '"]')],
            a = "PHON" === TRC.platform_code ? this.config.customCardMobile : this.config.customCardDesktop;
        return a.splice(a.indexOf(i["item-type"]), 1), ocArray = o.filter(function (t) {
            return t["item-type"] === e && i.id !== t.id
        }), scArray = o.filter(function (e) {
            return e["item-type"] === t
        }), a.forEach(function (t) {
            var i = t === e ? ocArray.shift() : scArray.shift(), o = r.querySelector('[data-item-id="' + i.id + '"]');
            n.push(o)
        }), n
    }, r.prototype.scrollToFeed = function () {
        var e = 10, t = this.getElementDestinationFromTopOfThePage(this.feedContainer) - e, i;
        t -= this.config.topStickyElementHeight, this.scrollToDestination(t, this.config.scrollDurationSpeed, "easeInOutQuart")
    }, r.prototype.getElementDestinationFromTopOfThePage = function (e) {
        for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
        return t
    }, r.prototype.moveTitleWithLogoSectionUnderTheTumbnailOfNode = function (e) {
        var t = e.querySelector(".trc-pre-label");
        if (t) {
            var i = t.parentElement, r = e.querySelector(".item-thumbnail-href"),
                o = t.querySelector(".video-icon-container"), n = e.querySelector(".trc-main-label").parentElement;
            o && (o.className += "tbl-hidden"), n.className += ".tbl-hidden", i.parentNode.insertBefore(r, i)
        } else TRC.dom.addClass(e, "no-label-box-with-title-icon")
    }, r.prototype.updateImageWithNewDimenssions = function (e) {
        var t;
        TRC.implClasses.TRCRBox.prototype.createVideoBoxImageLoader.trcBind(e.rbox, e)()
    }, r.prototype.updateCardWithNewStyle = function (e, t, i) {
        var r = e.getAttribute("data-card-index");
        e.className += " card-modified-by-teaser num-of-items-" + t.cells, TRC.dom.injectStyle(this.getModifiedCardCss(r, t, i), null, this.trcManager.isThinLoaderMode())
    }, r.prototype.updateCarouselWidth = function (e) {
        var t = e.querySelector(".videoCube"), i = e.querySelector(".trc_rbox_div"), r = t.offsetWidth;
        i.style.width = i.offsetWidth - r + "px"
    }, r.prototype.handleCardAfterItemMove = function (e, t) {
        if (t.length) {
            var i = this, r = this.getResponsiveItemDataByGivenCard(e);
            r.cells = t.length === r.cells ? r.cells : r.cells - 1, this.updateCardWithNewStyle(e, r), r.isCarousel && this.updateCarouselWidth(e), t.forEach(function (e) {
                i.updateImageWithNewDimenssions(e)
            })
        }
    }, r.prototype.getModifiedCardCss = function (e, t, i) {
        if (t.cells <= 0) return "";
        var r = t.cells, o = t.margin, n = "PHON" === TRC.platform_code && i ? "97.7%" : this.getCalculatedWidth(r, o);
        return cssWidth = n ? "width:" + n : "", style = '[data-card-index="' + e + '"].card-modified-by-teaser.num-of-items-' + r + " .videoCube:nth-of-type(-n+" + r + "){display: block; visibility: visible;" + cssWidth + "}", style
    }, r.prototype.getCalculatedWidth = function (e, t) {
        return (99.9 - e * t) / e + "%"
    }, r.prototype.getResponsiveItemDataByGivenCard = function (e) {
        var t = {margin: 2, cells: 1, isCarousel: !1}, i = e.querySelector(".videoCube"),
            r = i ? i.rbox.responsiveRules : [], o = i.rbox.trcResponse.v.length,
            n = this.getVisibleItemsListFromCard(e).length, a;
        return t.isCarousel = !(!i || !i.rbox.isCarousel) && i.rbox.isCarousel, r.length && (a = "PHON" === TRC.platform_code ? r.filter(function (e) {
            return e.max <= 480 && e.min >= 0
        })[0] : r.filter(function (e) {
            return void 0 === e.max
        })[0]), t.margin = a ? a.margin : t.margin, t.cells = n || o, t
    }, r.prototype.appendItemIntoFirstCard = function (e) {
        var t = this.feedContainer.querySelector(".tbl-feed-card div.videoCube"),
            i = document.trcGetParentByClassName(t, "tbl-feed-card"), r = this.getResponsiveItemDataByGivenCard(i);
        r.cells = r.cells + 1, this.updateCardWithNewStyle(i, r, !0), t.parentNode.insertBefore(e, t)
    }, r.prototype.getItemDataByItemId = function (e) {
        return this.teaserItems.filter(function (t) {
            return t.id === e
        })[0]
    }, r.prototype.handelDomChangeOnItemNode = function (e) {
        var t = "false" === e.getAttribute("data-item-syndicated"), i = e.rbox.container, r;
        "1" !== i.getAttribute("data-card-index") && (t && this.moveTitleWithLogoSectionUnderTheTumbnailOfNode(e), this.appendItemIntoFirstCard(e), this.removeOriginalCardIfEmpty(i))
    }, r.prototype.removeOriginalCardIfEmpty = function (e) {
        var t = this.getVisibleItemsListFromCard(e), i;
        !t.length ? e.parentNode.removeChild(e) : this.handleCardAfterItemMove(e, t)
    }, r.prototype.getVisibleItemsListFromCard = function (e) {
        return [].slice.call(e.querySelectorAll(".videoCube")).filter(function (e) {
            return e.getBoundingClientRect().height > 0
        })
    }, r.prototype.handleItemClick = function (e) {
        e.preventDefault();
        var t = e.currentTarget, i = parseInt(t.getAttribute("teaser-item-index"), 10) + 1,
            r = t.getAttribute("data-item-type"), o = i || r;
        this.sendAbTestEvent("teaserItemClick", o), this.hideTeaser(), this.itemsTypesMap[r].call(this, t)
    }, r.prototype.handleOrganicItemClick = function (e) {
        var t = e.getAttribute("data-item-id"), i = this.getItemDataByItemId(t), r;
        this.getFeedItemsNodeListByClickedItem(i).forEach(this.handelDomChangeOnItemNode.bind(this)), this.scrollToFeed()
    }, r.prototype.handleDiscoverFeedBtnClick = function (e) {
        e.preventDefault(), this.sendAbTestEvent("discoverMoreArticlesBtnClick", "click"), this.hideTeaser(), this.scrollToFeed()
    }, r.prototype.handleCloseBtnClick = function (e) {
        e.preventDefault(), this.sendAbTestEvent("closeTeaserBtnClicked", "click"), this.hideTeaser()
    }, r.prototype.handleTeaserHover = function () {
        this.sendAbTestEvent("teaserHovered", "hover"), this.state.doneCarouseling ? this.pauseTeaserVisibilityCountDown() : this.stopCarousel()
    }, r.prototype.pauseTeaserVisibilityCountDown = function () {
        this.config.teaserVisibilityRemainingTime && (this.config.teaserVisibilityRemainingTime = this.config.teaserVisibilityRemainingTime - (new Date - this.teaserVisibilityCountDownStartTime), this.stopTimer(this.teaserVisibilityCountDownTimer))
    }, r.prototype.handleMouseLeaveTeaser = function () {
        this.state.doneCarouseling ? this.startTeaserVisibilityCountDown() : this.playCarousel()
    }, r.prototype.startTeaserVisibilityCountDown = function () {
        this.config.teaserVisibilityRemainingTime && (this.teaserVisibilityCountDownTimer = this.startTimer(this.hideTeaser.bind(this), this.config.teaserVisibilityRemainingTime), this.teaserVisibilityCountDownStartTime = new Date)
    }, r.prototype.getNextItem = function (e, t, i) {
        var r = e.nextSibling;
        return this.isNextItemShouldBeFirstItem(r, e, t) && (r = i), r
    }, r.prototype.isNextItemShouldBeFirstItem = function (e, t, i) {
        return !this.isLastIteration() && (this.isNextItemIsLastItemAndIsDiscoverCard(e, i) || this.isCurrentItemIsLastAndLastShouldBeFirstByConfig(t, i))
    }, r.prototype.isLastIteration = function () {
        return this.state.currentCarouselIteration === this.config.teaserCarouselIteration
    }, r.prototype.isCurrentItemIsLastAndLastShouldBeFirstByConfig = function (e, t) {
        return e === t && this.config.lastItemType === i
    }, r.prototype.isNextItemIsLastItemAndIsDiscoverCard = function (e, t) {
        return e && e === t && e.classList.contains("tbl-discover-card")
    }, r.prototype.getPreviousItem = function (e, t, i) {
        var r = e.previousSibling;
        if (e === t) {
            var o = i.filter(function (e) {
                return e.classList.toString().indexOf("tbl-discover-card") < 0
            });
            r = o[o.length - 1]
        }
        return r
    }, r.prototype.displayNextItemAndUpdateTeaserState = function (e, t, i, r) {
        e.classList.contains("tbl-discover-card") ? TRC.dom.addClass(this.teaser, "discover-mode") : TRC.dom.removeClass(this.teaser, "discover-mode"), e.style["zIndex"] = parseInt(t.style["zIndex"], 10) + 1, TRC.dom.addClass(e, "show"), this.state.visibleItemIndex = i, this.state.currentCarouselIteration = r ? this.state.currentCarouselIteration + 1 : this.state.currentCarouselIteration
    }, r.prototype.showNextItem = function () {
        var e = [].slice.call(document.querySelectorAll("#tbl-teaser .tbl-teaser-item")),
            t = document.querySelector("#tbl-teaser .tbl-teaser-item.card-" + this.state.visibleItemIndex), r = e[0],
            o = e[e.length - 1], n = this.getPreviousItem(t, r, e), a = this.getNextItem(t, o, r);
        if (n && TRC.dom.removeClass(n, "show"), a) {
            var s = e.indexOf(a);
            this.displayNextItemAndUpdateTeaserState(a, t, s, a === r)
        } else this.config.lastItemType === i && (r.style["zIndex"] = parseInt(o.style["zIndex"], 10) + 1, TRC.dom.addClass(r, "show")), this.stopCarousel(), this.state.doneCarouseling = !0, this.startTeaserVisibilityCountDown()
    }, r.prototype.shouldShowNextItem = function () {
        this.state.teaserIsVisible ? this.showNextItem() : this.stopCarousel()
    }, r.prototype.playCarousel = function () {
        this.carouselItemsIterationInterval = this.startTimer(this.shouldShowNextItem.bind(this), this.config.carouselItemsDisplayInMilliseconds)
    }, r.prototype.stopCarousel = function () {
        this.stopTimer(this.carouselItemsIterationInterval)
    }, r.prototype.startTimer = function (e, t) {
        return TRC.Interval.set(e, t)
    }, r.prototype.stopTimer = function (e) {
        e && TRC.Interval.clear(e)
    }, r.prototype.hideTeaser = function () {
        this.state.teaserIsVisible && (TRC.dom.removeClass(this.teaser, "in-viewport"), this.state.teaserIsVisible = !1, this.sendAbTestEvent("teaserIsHidden", "teaserIsHidden"), this.stopTimer(this.teaserVisibilityCountDownTimer), this.stopTimer(this.carouselItemsIterationInterval))
    }, r.prototype.observeFeed = function () {
        var e = this, t = {
            targetElement: e.feedContainer, onEnter: function () {
                e.state.feedInViewport = !0, e.trcResponseListener.remove(), e.state.teaserIsVisible && (e.hideTeaser(), TRC.intersections.unobserve(e.feedObserverId))
            }
        };
        this.feedObserverId = TRC.intersections.observe(t)
    }, r.prototype.generateFeedTeaser = function () {
        this.teaserItems && this.teaserItems.length ? (this.teaser = this.createTeaserHtml(this.teaserItems), TRC.dom.injectStyle(this.createCss(), null, this.trcManager.isThinLoaderMode()), document.body.appendChild(this.teaser), this.handleTextOverflow(), this.tryToDisplayTeaser()) : this.sendAbTestEvent("noTeaser", "noTeaserItemsToShow")
    }, r.prototype.showTeaser = function () {
        TRC.dom.addClass(this.teaser, "in-viewport"), this.state.teaserIsVisible = !0, this.sendAbTestEvent("teaserIsVisible", "teaserIsVisible"), this.playCarousel()
    }, r.prototype.tryToDisplayTeaser = function () {
        var e = this;
        setTimeout(function () {
            !e.teaser || e.state.feedInViewport || e.videoSliderReady || e.showTeaser()
        }, this.config.showTeaserAfterNumOfMiliseconds)
    }, r.prototype.onTrcResponse = function () {
        if (!this.state.feedInViewport && !this.teaser) {
            if (this.feedObserverId || this.observeFeed(), this.teaserItems = this.getTeaserItemsFromFeed(), !this.hasEnoughItemsFromFeed(this.visibleOrganicItems) && this.config.itemRetriesLeft > 0) return this.config.itemRetriesLeft--, void this.parentFeed.infiniteScrollEngine.getNextBatch(!0);
            this.trcResponseListener.remove(), this.generateFeedTeaser()
        }
    }, r.prototype.createCss = function (e) {
        var t = ".tbl-cards-teaser{position:fixed;background:#fff;bottom:0;transition:.4s ease;width:390px;height:120px;color:#2a2a2a;border-radius:2px;box-sizing:border-box;box-shadow:0 1px 6px 0 rgba(0,0,0,0.16);font-weight:bold;z-index:9999999999;cursor:default}.tbl-cards-teaser.tbl-teaser-position-left{left:0;transform:translate(16px, 1000px);}.tbl-cards-teaser.tbl-teaser-position-left {right:0;transform:translate(-16px,1000px);}.tbl-cards-teaser.in-viewport{transition-delay: 0.3s;}.tbl-cards-teaser.tbl-teaser-position-left {left: 0;transform: translate(16px, 1000px);}.tbl-cards-teaser.tbl-teaser-position-right{right: 0;transform: translate(-16px, 1000px);}.tbl-cards-teaser.in-viewport{transition-delay: 0.3s;}.tbl-cards-teaser.in-viewport.tbl-teaser-position-right{transform: translate(-16px, -16px);}.tbl-cards-teaser.in-viewport.tbl-teaser-position-left{transform: translate(16px, -16px);}.tbl-cards-teaser .tbl-cards-teaser-inner{width:100%;height:100%;border-radius:2px;cursor:pointer}.tbl-cards-teaser .tbl-teaser-header{position:absolute;top:13px;left:150px;line-height:1.69;font-size:13px;color:#8d9093}.tbl-cards-teaser .circle-arrow{position:absolute;width:32px;height:32px;top:50%;margin-top:-16px;left:calc(120px - 16px);background:#fff;box-shadow:0 1px 7px 0 rgba(0,0,0,0.2);border-radius:50%;z-index:99;pointer-events:none}.tbl-cards-teaser .circle-arrow .arrow{width:12px;top:7px;left:calc(50% - 6px);margin:0}.tbl-cards-teaser .circle-arrow .arrow .tbl-arrow-icon{animation-name:slideDownFade-2;-webkit-animation-name:slideDownFade-2;width:12px;fill:#0071ce}.tbl-cards-teaser .tbl-discover-feed-btn:hover ~ .circle-arrow .arrow .tbl-arrow-icon{animation-name:none;-webkit-animation-name:none}",
            i = ".tbl-cards-teaser.discover-mode .tbl-teaser-header{display:none!important}.tbl-cards-teaser .tbl-discover-feed-btn{position:absolute;bottom:8px;right:7px;background:#fff;color:#0071ce;padding:4px 7px 4px 8px;font-size:11px;border-radius:2px;z-index:10;cursor:pointer}.tbl-cards-teaser .tbl-discover-feed-btn .arrow .tbl-arrow-icon{fill:#0071ce}.tbl-cards-teaser.discover-mode .tbl-discover-feed-btn{display:none!important}.tbl-hide{display:none!important}.tbl-cards-teaser .tbl-discover-feed-btn:hover{background:#0071ce;color:#fff}.tbl-cards-teaser .tbl-discover-feed-btn:hover .arrow .tbl-arrow-icon{fill:#fff}.tbl-cards-teaser .tbl-discover-feed-btn span{width:8px;position:relative;transform:translateY(2px)}.tbl-cards-teaser .tbl-discover-feed-btn .arrow .tbl-arrow-icon{-webkit-animation-name:none;animation-name:none}.tbl-cards-teaser .tbl-discover-feed-btn:hover .arrow .tbl-arrow-icon{-webkit-animation-name:slideDownFade;animation-name:slideDownFade}.tbl-cards-teaser .tbl-discover-feed-btn:hover ~ .tbl-teaser-header .arrow .tbl-arrow-icon{-webkit-animation-name:none;animation-name:none}.tbl-cards-teaser ul{margin:0;padding:0;width:100%;height:100%}",
            r = '.tbl-cards-teaser .tbl-teaser-item{display:list-item!important;list-style:none;width:100%;height:100%;position:absolute;top:140px;left:0}.tbl-cards-teaser #tbl-items-container .tbl-teaser-item:last-child{z-index:9}.tbl-cards-teaser .tbl-teaser-item:hover:not(.tbl-discover-card) .content{text-decoration:underline}.tbl-cards-teaser .tbl-discover-feed-btn:hover ~ ul .tbl-teaser-item .content{text-decoration:none}.tbl-cards-teaser .tbl-discover-card .img{background:#f1f1f1;overflow:hidden}.tbl-cards-teaser .tbl-discover-card .img:before,.tbl-cards-teaser .tbl-discover-card .img:after{content:"";display:block;width:80px;height:17px;position:absolute;left:calc(50% - 40px);z-index:1}.tbl-cards-teaser .tbl-discover-card .img:before{background-image:linear-gradient(to top,rgba(246,246,249,0),rgba(246,246,249,0.8));top:0}.tbl-cards-teaser .tbl-discover-card .img:after{background-image:linear-gradient(to bottom,rgba(246,246,249,0),rgba(246,246,249,0.8));bottom:0}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper{background:#f1f1f1;overflow:hidden;width:80px;margin:auto;position:relative;transform:translateY(-8.5%)}',
            o = ".tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .section-wrapper div{background-color:#a8a8a8;border-radius:1px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .section-wrapper{width:100%;margin-bottom:15px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-section{width:100%;background-size:cover;height:45px;border-radius:2px;margin-bottom:6px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-row{width:58px;height:4px;margin-bottom:4px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-span{width:16.3px;height:3px}.tbl-cards-teaser .tbl-discover-card .mockup-feed-wrapper{-webkit-animation-name:scrollDown;animation-name:scrollDown;animation-play-state:paused;-webkit-animation-play-state:paused;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.tbl-cards-teaser .tbl-discover-card:hover .mockup-feed-wrapper{animation-play-state:running;-webkit-animation-play-state:running}",
            n = '.tbl-cards-teaser .tbl-teaser-item.show{top:0;margin:0}.tbl-cards-teaser .img{display:inline-block;vertical-align:top;width:120px;height:100%;background-image: url("http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png");background-size:cover;background-position:center;border-radius:2px 0 0 2px;transform:translateY(140px);transition:transform .2s ease}.tbl-cards-teaser .tbl-teaser-item.show .img{transform:translateY(0)}.tbl-cards-teaser .tbl-teaser-item.tbl-discover-card .content-container{width:calc(100% - 120px);padding-top:0;padding-left:10px;background:#fff;font-size:19px}.tbl-cards-teaser .tbl-teaser-item.tbl-discover-card .content-container .content{display:table;width:100%;height:100%;padding:0}.tbl-cards-teaser .tbl-teaser-item.tbl-discover-card .content-container .content .card-content{display:table-cell;vertical-align:middle;font-size:19px}.tbl-cards-teaser .tbl-discover-card .discover-card-label{display:block;font-size:13px;font-weight:bold;color:#8d9093;margin-bottom:8px}.tbl-cards-teaser .tbl-discover-card .discover-card-btn{display:inline-block;background:#0071ce;color:#fff;padding:5.5px 13px 5.5px 8px;border-radius:2px;box-shadow:0 1px 6px 0 rgba(0,0,0,0.16);font-size:15px;font-weight:bold;line-height:1.27;transition:.2s ease}',
            a = ".tbl-cards-teaser .tbl-discover-card .discover-card-btn:hover{background:#154c91}.tbl-cards-teaser .tbl-discover-card .discover-card-btn .arrow{top:3px;margin-left:8px}.tbl-cards-teaser .tbl-discover-card .discover-card-btn .arrow .tbl-arrow-icon{-webkit-animation-name:none;animation-name:none}.tbl-cards-teaser .tbl-discover-card:hover .discover-card-btn .arrow .tbl-arrow-icon{-webkit-animation-name:slideDownFade;animation-name:slideDownFade}.tbl-cards-teaser .tbl-discover-card .arrow .tbl-arrow-icon{fill:#fff}.tbl-cards-teaser .content-container{display:inline-block;width:calc(96% - 120px);height:100%;padding-top:35px;padding-left:30px;vertical-align:top;box-sizing:border-box;overflow:hidden}.tbl-cards-teaser .content{font-size:15px;background:#fff;line-height:1.27;float:none;width:auto;font-family:Arial,Helvetica,sans-serif;text-transform:initial;transform:translateY(140px);transition:transform .35s ease;padding:0;margin:0;border:0;box-shadow:none;border-radius:0}.tbl-cards-teaser .tbl-teaser-item.show .content{transform:translateY(0)}",
            s = ".tbl-cards-teaser .arrow{position:relative;top:3px;width:8px;height:20px;display:inline-block;vertical-align:middle;margin-left:3px}.tbl-cards-teaser .arrow .tbl-arrow-icon{width:8px;height:10px;position:absolute;transform:translateY(0);fill:#8d9093;-webkit-animation-name:slideDownFade;animation-name:slideDownFade;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.tbl-cards-teaser .arrow .arrow-2{-webkit-animation-delay:1s;animation-delay:1s}.tbl-cards-teaser .tbl-teaser-closeBtn-wrapper{position:absolute;top:-28px;right:-20px;width:50px;height:33px}.tbl-cards-teaser .tbl-teaser-closeBtn{position:absolute;top:0;right:10px;height:24px;padding:0 12px;visibility:hidden;opacity:0;cursor:pointer}.tbl-cards-teaser .tbl-teaser-closeBtn svg{display:block;height:100%;fill:#979797}.tbl-cards-teaser:hover .tbl-teaser-closeBtn{visibility:visible;opacity:1}.tbl-cards-teaser .tbl-teaser-closeBtn:hover svg{fill:#979797}",
            l = ".tbl-cards-teaser.discover-mode .circle-arrow{display:none}@media screen and (min-width:0) and (max-width:812px){.tbl-cards-teaser{width:100vw;height:80px;left:0;border-radius:0;overflow:hidden}.tbl-cards-teaser.tbl-teaser-mobile-position-bottom{top:auto;bottom:0;transform:translateY(300px)}.tbl-cards-teaser.tbl-teaser-mobile-position-top{top:0;bottom:auto;transform:translateY(-300px)}.tbl-cards-teaser .tbl-cards-teaser-inner{border-radius:0}.tbl-cards-teaser.in-viewport{transform:translateY(0px)}.tbl-cards-teaser .tbl-teaser-header{line-height:1.5;font-size:12px;top:10px;left:103px;z-index:9}.tbl-cards-teaser .img{width:80px;border-radius:0}.tbl-cards-teaser .content-container{width:calc(94% - 80px);padding-top:30px;padding-left:23px}.tbl-cards-teaser .tbl-teaser-item.tbl-discover-card .content-container{width:calc(100% - 80px);padding-left:11px}.tbl-cards-teaser .tbl-teaser-item.tbl-discover-card .content-container .content .card-content{font-size:18px}.tbl-cards-teaser .tbl-discover-card .discover-card-btn{padding:4.5px 9px 4.5px 7px;font-size:13px}",
            c = ".tbl-cards-teaser .circle-arrow{left:calc(80px - 16px)}.tbl-cards-teaser .tbl-discover-card .discover-card-btn .arrow .tbl-arrow-icon{-webkit-animation-name:slideDownFade;animation-name:slideDownFade}.tbl-cards-teaser .content{font-size:13px;line-height:16px}.tbl-cards-teaser .tbl-teaser-item:hover:not(.tbl-discover-card) .content{text-decoration:none}.tbl-cards-teaser .tbl-teaser-closeBtn-wrapper{top:0;right:0;width:30px;height:30px;z-index:99}.tbl-cards-teaser .tbl-teaser-closeBtn{height:100%;width:100%;display:block;visibility:visible;opacity:1;background:0;border:0;box-shadow:none;transition:none;left:10px;padding:0}.tbl-cards-teaser .tbl-teaser-closeBtn svg{width:12px;height:100%;fill:#a4a7a9}.tbl-cards-teaser .tbl-teaser-closeBtn:hover{background:0}.tbl-cards-teaser .tbl-discover-feed-btn{display:none}.tbl-cards-teaser .tbl-arrow-icon{-webkit-animation-name:slideDownFade;animation-name:slideDownFade;-webkit-animation-delay:1s;animation-delay:1s}.tbl-cards-teaser .arrow .arrow-2{-webkit-animation-delay:2s;animation-delay:2s}.tbl-cards-teaser.discover-mode",
            d = ".tbl-arrow-icon{-webkit-animation-name:randomString;animation-name:randomString}.tbl-cards-teaser.discover-mode .mockup-feed-wrapper{-webkit-animation-name:scrollDown;animation-name:scrollDown;animation-play-state:running;-webkit-animation-play-state:running;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-delay:2s;animation-delay:2s}.tbl-cards-teaser .tbl-discover-card .img:before,.tbl-cards-teaser .tbl-discover-card .img:after{width:53px;height:11px;left:calc(50% - 26px)}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper{width:53px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-section{height:30px;margin-bottom:4px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-row{width:39px;height:3px;margin-bottom:2px}.tbl-cards-teaser .tbl-discover-card .img .mockup-feed-wrapper .mockup-span{width:11px;height:2px}}",
            h = "@-webkit-keyframes slideDownFade{0%{opacity:0;transform:translateY(-4px)}50%{transform:translateY(0px);opacity:1}100%{opacity:0;transform:translateY(4px)}}@-webkit-keyframes slideDownFade-2{0%{opacity:0;transform:translateY(-7px)}50%{transform:translateY(0px);opacity:1}100%{opacity:0;transform:translateY(7px)}}@-webkit-keyframes scrollDown{0%,100%{transform:translateY(-8.5%)}10%{transform:translateY(-14%)}85%{transform:translateY(-76.5%)}}#taboola-teaser-card-container.trc_elastic .trc_rbox_outer{margin-left:-2%}#taboola-teaser-card-container.trc_elastic .videoCube{width:47.995%;position:relative;float:left;margin:0 0 2% 0;margin-left:2%;display:block;visibility:visible}#taboola-teaser-card-container.trc_related_container .attribution-disclosure-link-hybrid{display:block}#taboola-teaser-card-container .trc_rbox_header{display:none}#taboola-teaser-card-container.has-sponsored .trc_rbox_header{display:block}#taboola-teaser-card-container.trc_elastic .videoCube_aspect{width:100%;padding-bottom:56.25%}",
            p = '#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href.show-title-under-thumbnail .video-label-box.trc-pre-label{height:auto}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href.show-title-under-thumbnail .video-label{display:block}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href.show-title-under-thumbnail .video-label.video-description{display:none}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href .label-box-with-title-icon{margin-top:5px}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href .label-box-with-title-icon .video-icon-container{display:none}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"].no-label-box-with-title-icon .item-label-href .trc-main-label{display:block}',
            u = '#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"].no-label-box-with-title-icon .item-label-href .trc-main-label .video-description{display:none}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"].no-label-box-with-title-icon .item-label-href .trc-pre-label .video-description{display:none}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href .video-label-box.trc-main-label .video-description{display:none}.tbl-feed-card[data-card-index="1"] .videoCube[data-item-syndicated="false"] .item-label-href .video-label-box.trc-main-label .video-description,.tbl-feed-card[data-card-index="1"] .videoCube[data-item-syndicated="false"].no-label-box-with-title-icon .item-label-href .trc-pre-label .video-description{display:none}.trc_elastic .videoCube.new-videoCube-items-1{width:97.99%}',
            m = '.trc_elastic .videoCube.new-videoCube-items-2{width:47.995%}.trc_elastic .videoCube.new-videoCube-items-3{width:31.33%}@media screen and (min-width:0) and (max-width:812px){#taboola-teaser-card-container.trc_elastic .videoCube{width:97.99%}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"].no-label-box-with-title-icon .item-label-href .trc-main-label{display:block}#taboola-teaser-card-container.trc_elastic .videoCube[data-item-syndicated="false"] .item-label-href .label-box-with-title-icon{margin:5px 5px 0 5px}}',
            g = [];
        return e && e.feedTeaserCss ? g.push(e.feedTeaserCss) : (g.push(t), g.push(i), g.push(r), g.push(o), g.push(n), g.push(a), g.push(s), g.push(l), g.push(c), g.push(d), g.push(h), g.push(p), g.push(u), g.push(m)), g.join("")
    }, TRC.FeedTeaser = r
}(), function () {
    const e = "tbl-feed-container", t = "tbl-feed-card", i = "tbl-feed-full-width", r = "tbl-feed-partial-width",
        o = "tbl-feed-abp", n = "data-feed-container-num", a = "data-feed-main-container-id",
        s = "data-parent-placement-name", l = {FULL_WIDTH: "FULL_WIDTH", PARTIAL_WIDTH: "PARTIAL_WIDTH"};

    class c {
        constructor(e, t, i) {
            let r = __trcCopyProps(i, {}), o = e.global && e.global["enable-feed-observer"],
                n = e.global && e.global["enable-card-observer"], a, s;
            this.trcManager = e, this.container = t.container, this.origContainer = this.container, this.mainContainerId = this.container.id, this.mainContainerPlacement = t.placement, this.numContainers = 1, this.testData = e.testData, this.feedObserver = null, this.options = i, this.numPendingPublisherCards = 0, this.layout = i.mobileLayout || i.feedUi && i.feedUi.layout, i.wasWidget && (this.widgetToFeedHelper = new TRC.WidgetToFeedHelper(this, e, i.hasFeedUI)), (o || n) && (this.feedObserver = new TRC.FeedObserver(this.container), a = o ? new TRC.TimeOnFeedService(this.feedObserver, e) : null, s = n ? new TRC.TimeOnCardService(this.feedObserver, e) : null), i.videoSingleManager && this.loadVideoSingleManager(t, e, i), !1 !== i.hasFeedUI && TRC.dom.injectStyle(this.createCss(i), null, this.trcManager.isThinLoaderMode()), r.afterPlacementContainerCreated = this.addFeedCardAttributes.trcBind(this), this.infiniteScrollEngine = new TRC.InfiniteScrollEngine(e, t, r), this.publisherCardsManager = new TRC.PublisherCardsManager(this, e, t, i);
            let l,
                c = (i && i.feedDynamicParameters && i.feedDynamicParameters["feedNextUpConfig"] ? JSON.parse(i.feedDynamicParameters["feedNextUpConfig"]) : null) || i && i.feedNextUp;
            c && (this.feedTeaserManager = new TRC.FeedTeaser(this, e, i, c)), this.setMainContainerCssClassesAndAttributes(this.container, i), this.listenToCardContentReady(), this.header = this.createHeader()
        }

        handlePlacement(e) {
            let t = e.trcResponse && e.trcResponse.spl, i = e.trcResponse && e.trcResponse.pcp,
                r = this.infiniteScrollEngine.numPlacements;
            return t ? (this.infiniteScrollEngine.handlePlacement(e), this.publisherCardsManager.registerPublisherCardForHandling(e), void this.publisherCardsManager.handlePendingPublisherCards(0, r, null, t)) : i ? (this.publisherCardsManager.registerPublisherCardForHandling(e), this.infiniteScrollEngine.numPlacements++, void this.numPendingPublisherCards++) : (this.numPendingPublisherCards > 0 && (this.publisherCardsManager.handlePendingPublisherCards(0, r, null, t), this.numPendingPublisherCards = 0), this.infiniteScrollEngine.handlePlacement(e), void this.trcManager["after-card-created"](e, r, this))
        }

        stopScrolling() {
            this.infiniteScrollEngine.stopScrolling()
        }

        setIsAllowedToRequestMoreContent(e) {
            this.infiniteScrollEngine.setIsAllowedToRequestMoreContent(e)
        }

        updateNextBatchNumber(e) {
            this.infiniteScrollEngine.updateNextBatchNumber(e)
        }

        setMainContainerCssClassesAndAttributes(t, c) {
            let d = [e];
            switch (this.layout) {
                case l.FULL_WIDTH:
                    d.push(i);
                    break;
                case l.PARTIAL_WIDTH:
                    d.push(r)
            }
            c.feedUi && c.feedUi.cardFrame && d.push(`tbl-feed-frame-${c.feedUi.cardFrame}`), TRC.blocker.blockedState > 0 && d.push(o), TRC.dom.addClass(this.container, d.join(" ")), this.numContainers > 1 && (this.container.id = `${this.mainContainerId}-split-num-${this.numContainers - 1}`), t.setAttribute(n, this.numContainers), t.setAttribute(a, this.mainContainerId), t.setAttribute(s, this.mainContainerPlacement)
        }

        createHeader() {
            let e = document.createElement("div"), t = document.createElement("div");
            return t.className = "tbl-feed-header-logo", e.className = "tbl-feed-header", e.appendChild(t), this.container.insertBefore(e, this.container.firstChild), e
        }

        addFeedCardAttributes(e, t) {
            this.feedObserver && this.feedObserver.onCardAdded(e, t), e.setAttribute("tbl-feed-card", ""), t.isStandaloneVideo && c.setFeedVideoCardAttribute(e), c.setFeedCardVideoIndication(e, t)
        }

        static setFeedCardVideoIndication(e, t) {
            t.trcResponse.nvb && e.setAttribute("no-vbelow", ""), t.trcResponse.nva && e.setAttribute("no-vabove", "")
        }

        static setFeedVideoCardAttribute(e) {
            e.setAttribute("tbl-feed-video", "")
        }

        listenToCardContentReady() {
            TRC.listen("trcContentReady", this.onCardContentReady.trcBind(this))
        }

        listenToBoxChildIFrameClick() {
            this.expandableBoxIFrameClickListener || (this.expandableBoxIFrameClickListener = !0, TRC.dom.on(window, "blur", () => {
                let e = document.activeElement;
                e && TRC.dom.elementMatchesSelector(e, `[${a}="${this.mainContainerId}"] .${t} iframe`) && TRC.dispatch("expandableBoxChildIFrameClick", {container: TRC.dom.closest(e, " ." + t)})
            }))
        }

        onCardContentReady(e) {
            let i, r;
            e.container && ((r = (i = e.container.placementData) && i.trcResponse && i.trcResponse.cpad) && (e.container.style.padding = r), TRC.dom.addClass(e.container, t), i && i.expandOptions && (e.container.expandableBox = new TRC.ExpandableBox(this.trcManager, e.container.id, e.container.placementData.expandOptions), this.listenToBoxChildIFrameClick()))
        }

        createCss(e) {
            let t = [];
            return e.feedCss ? t.push(e.feedCss) : t.push(c.getDefaultFeedCSS()), this.isFullWidthMobileFeed(e) && t.push(this.getMobileFullWidthMarginsCss()), e.feedUi && t.push(c.getFeedUiCss(e.feedUi)), t.push(e.feedCssOverride), t.join("")
        }

        getTestData() {
            return this.testData
        }

        static getFeedUiCss(t) {
            let i = [], r = t.feedBackgroundColor || t.feedBackground;
            return i.push(`[${n}].${e} {background-color: ${r}; padding: ${t.feedPadding};}`), "NONE" === t["logoPosition"] ? i.push(`.tbl-feed-container .tbl-feed-header {display:none;}`) : i.push(`.tbl-feed-container .tbl-feed-header {padding: 0px 5px 10px 5px; background: transparent; text-align: ${t["logoPosition"]};}`), i.join("")
        }

        getMobileFullWidthMarginsCss(t) {
            let r = t ? this.container.parentNode : this.container, o = r.getBoundingClientRect(), a = -1 * o.left,
                s = -1 * (document.documentElement.clientWidth - o.width - Math.abs(a)),
                l = `#${this.container.id}.${e}.${i}`;
            return (a || s) && r.offsetParent ? (t && (l += `[${n}="${t}"]`), `@media screen and (max-width: 480px) {\n                        ${l} {\n                            margin-left: ${a}px;\n                            margin-right: ${s}px;\n                        }\n                    }`) : ""
        }

        static getDefaultFeedCSS() {
            return `.${e} { position: relative; margin-top: 20px; margin-bottom: 20px; -webkit-text-size-adjust: 100%; clear: both;}.${e} .tbl-feed-header { padding: 5px; background-color: #ffffff;}.${e} .tbl-feed-header-logo { height: 11px; width: 76px; display: block; margin: 0; background: url(//cdn.taboola.com/static/f8/f89e1763-220d-4e09-ba69-9e040548fb7a.svg) no-repeat 0 0; background-size: contain;}.${e} .${t} { margin-bottom: 10px; background-color: #ffffff; border: 1px solid #f1f1f1;}.${e} .tbl-loading-spinner { margin-bottom: 10px;}.${e} .${o} { max-width:770px; margin: 20px auto 0;}/** Mobile CSS Rules **/@media screen and (max-width: 480px) { .${e} { padding: 0; background-color: #ffffff; } .${e} .tbl-feed-header { margin-left: 2px; padding: 5px 0; } .${e} .${t} { margin-bottom: 5px; padding-bottom: 5px; border-width: 0; border-bottom: 4px solid #f1f1f1; } .${e} .trc_header_ext, ${e} .trc-widget-footer { padding-right: 3px; }}/** End of Mobile CSS Rules **/`
        }

        static getVideoManagerRequestData(e) {
            return {
                "session-data": TRC.pageManager.getPublisherValue(TRC.publisherId, "session-data"),
                req: e.getGlobalRequestId()
            }
        }

        loadVideoSingleManager(e, t, i) {
            let r = __trcCopyProps(e, {}, null), o = __trcCopyProps(i.videoSingleManager, {});
            o.parentFeedOptions = i, this.videoManager = new TRC.VideoTagLoader(t, o, r, null, c.getVideoManagerRequestData(t)), this.videoManager.loadVideo()
        }

        switchMainContainer(e) {
            this.container = e, this.infiniteScrollEngine.switchMainContainer(this.container), this.feedObserver && this.feedObserver.addFeedIntersectionEventHandler(this.container)
        }

        isFullWidthMobileFeed(e) {
            let t;
            return (e.mobileLayout || this.layout) === l.FULL_WIDTH
        }

        getIsFirstBatch() {
            return this.infiniteScrollEngine.getIsFirstBatch()
        }
    }

    TRC.Feed = c
}(), function () {
    var t = 1000075, i = function (e, i, r, o) {
        var a, s = TRC.pageManager.getTopMostWindow().location.hostname,
            l = o.global["fraud-detection-script-url"] || "http://js.ad-score.com/score.min.js?pid=" + t + "#tid=src1",
            c = {l1: e, uid: i, pub_domain: s, ref: r};
        a = TRC.URL.prototype.switchProtocol.call(l, TRC.PROTOCOL) + "&" + TRC.util.keys(c).map(function (e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(c[e])
        }).join("&"), this.isInitialized = !0, n(a)
    }, r = function (i, r) {
        setTimeout(function () {
            try {
                TRC.clickFraudDetect.isLoaded ? adScore("send", "adclick", {}, {
                    pid: "" + t,
                    l2: i,
                    l6: "clicked",
                    uid: r
                }) : __trcWarn("Fraud script did not render", e)
            } catch (e) {
                __trcWarn("fraudScriptCallback: Error in fraud detection", e)
            }
        }, 0)
    };

    function o() {
        TRC.clickFraudDetect.isLoaded = !0
    }

    function n(e) {
        if (!TRC.botDetected) try {
            TRC.net.loadScript(e, "js", o, null, !0)
        } catch (e) {
            __trcWarn("loadFraudScript: Error appending fraud script", e)
        }
    }

    TRC.clickFraudDetect = {init: i, fraudScriptCallback: r, isInitialized: !1, isLoaded: !1}
}(), TRC.util = function (win, doc) {
    var modObject = {
        isType: function (e, t) {
            return t = t.charAt(0).toUpperCase() + t.substr(1), Object.prototype.toString.call(e) == "[object " + t + "]"
        }, hasKeys: function (e) {
            var t;
            if (this.isType(e, "object")) if (Object.keys && !Object.propertyIsEnumerable("keys")) {
                if (Object.keys(e).length > 0) return !0
            } else for (t in e) if (e.hasOwnProperty(t)) return !0;
            return !1
        }, copyProperties: function (e, t, i) {
            var r;
            if (this.isType(i, "Array")) {
                r = i.length;
                for (var o = 0; o < r; o++) t[i[o]] = e[i[o]] ? e[i[o]] : void 0;
                return !0
            }
            return !1
        }, getRandomIds: function (e) {
            for (var t = 0; t < e.len; t++) e.arr[t] = e.prefix + Math.floor(Math.random() * Math.pow(10, e.strength) + 1) + e.suffix
        }, getHtmlDecodeText: (element = doc.createElement("div"), function (e) {
            return e && "string" == typeof e ? (element.innerHTML = encodeURI(e), e = element.textContent || element.innerText, element.innerHTML = "", decodeURI(e)) : ""
        }), isEmptyString: function (e) {
            return !e || /^\s*$/.test(e)
        }, keys: function () {
            "use strict";
            if (Object.keys) return function (e) {
                return "object" == typeof e || "function" == typeof e && null !== e ? Object.keys(e) : []
            };
            var e = Object.prototype.hasOwnProperty, t = !{toString: null}.propertyIsEnumerable("toString"),
                i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                r = i.length;
            return function (o) {
                if ("object" != typeof o && ("function" != typeof o || null === o)) return [];
                var n = [], a, s;
                for (a in o) e.call(o, a) && n.push(a);
                if (t) for (s = 0; s < r; s++) e.call(o, i[s]) && n.push(i[s]);
                return n
            }
        }(), merge: function (e) {
            "use strict";
            if (void 0 === e || null === e || e.constructor !== Object) return null;
            for (var t = TRC.util, i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (void 0 !== r && null !== r && r.constructor === Object) for (var o = t.keys(r), n = 0, a, s = o.length; n < s; n++) e[a = o[n]] = r[a]
            }
            return e
        }, debounce: function (e, t, i, r) {
            var o;
            return function () {
                var n = r || window, a = arguments, s = function () {
                    o = null, i || e.apply(n, a)
                }, l = i && !o;
                clearTimeout(o), o = setTimeout(s, t), l && e.apply(n, a)
            }
        }, jsonParseWithNative: function (e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                return TRC.util.jsonParseWithEval(e)
            }
        }, jsonParseWithEval: function (text) {
            try {
                return eval("(" + String(text) + ")")
            } catch (e) {
                throw new Error("JSON parse error - invalid input!")
            }
        }, isNativeFunction: function (e) {
            return /\{\s*\[native code\]\s*\}/.test("" + e)
        }, filterObj: function (e, t) {
            var i = {};
            for (var r in t) t.hasOwnProperty(r) && e.call(this, t[r], r, t) && (i[r] = t[r]);
            return i
        }, textIsRTL: function (e) {
            if (!e) return !1;
            var t = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜︀-﹯﻽-￿", i = "֑-߿יִ-﷿ﹰ-ﻼ",
                r = e.match(new RegExp("^[^" + t + i + "]*(?:([" + t + "]+)|([" + i + "]+))"));
            return !(!r || !r[2])
        }, isArray: function (e) {
            return !(!e || Array !== e.constructor)
        }, some: function (e, t) {
            if (!this.isArray(e)) return !1;
            if (Array.prototype.some) return e.some(t);
            {
                function i(e, t) {
                    "use strict";
                    if (null == e) throw new TypeError("some called on null or undefined");
                    if ("function" != typeof t) throw new TypeError;
                    for (var i = Object(e), r = i.length >>> 0, o = arguments.length >= 2 ? arguments[1] : void 0, n = 0; n < r; n++) if (n in i && t.call(o, i[n], n, i)) return !0;
                    return !1
                }

                return i(e, t)
            }
        }, map: function (e, t, i) {
            if (Array.prototype.map) return e.map(t, i);
            var r, o, n;
            if (null == e) throw new TypeError(" array is null or not defined");
            var a = Object(e), s = a.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            for (arguments.length > 1 && (r = i), o = new Array(s), n = 0; n < s;) {
                var l, c;
                n in a && (l = a[n], c = t.call(r, l, n, a), o[n] = c), n++
            }
            return o
        }, isTrue: function (e) {
            return "true" === e || !0 === e || "1" === e
        }, isFalse: function (e) {
            return !e || "false" === e
        }, hashString: function (e) {
            var t = 0;
            if (0 == e.length) return t;
            for (var i = 0; i < e.length; i++) {
                var r;
                t = (t << 5) - t + e.charCodeAt(i), t &= t
            }
            return t
        }
    }, element;
    return modObject
}(window, document);
var __trcUnJSONify = JSON && JSON.parse && "function" == typeof JSON.parse && TRC.util.isNativeFunction(JSON.parse) ? TRC.util.jsonParseWithNative : TRC.util.jsonParseWithEval;

function __trcGetMargins(e) {
    var t = parseInt(document.trcGetCurrentStyle(e, "margin-bottom")),
        i = parseInt(document.trcGetCurrentStyle(e, "margin-top"));
    return (isNaN(i) ? 0 : i) + (isNaN(t) ? 0 : t)
}

function __trcAttachResize(e, t) {
    e.attachEvent ? e.attachEvent("onresize", t) : ("object" != typeof e.resizeInt && (e.resizeInt = {}), e.resizeInt[t] = TRC.Interval.set(function (e) {
        return void 0 === e.sourceWidth || void 0 === e.sourceHeight ? (e.sourceWidth = e.clientWidth, void(e.sourceHeight = e.clientHeight)) : e.sourceWidth != e.clientWidth || e.sourceHeight != e.clientHeight ? (delete e.sourceWidth, delete e.clientWidth, void t.apply(e)) : void 0
    }, 250, e))
}

function __trcDetachResize(e, t) {
    if (TRC.Browser.ie) e.detachEvent("onresize", t); else {
        "object" != typeof e.resizeInt && (e.resizeInt = {});
        try {
            e.resizeInt[t] && TRC.Interval.clear(e.resizeInt[t]), delete e.resizeInt[t]
        } catch (e) {
        }
    }
}

function __trcTrim(e) {
    return e.replace(/^\s+|\s+$/g, "")
}

function __trcGetElementsByClass(e, t, i) {
    var r = [], o = new RegExp("(^|\\s)" + e + "(\\s|$)"), n, a, s;
    for (i = i || document, t = t || "*", a = (n = i.getElementsByTagName(t)).length, s = 0; s < a; s++) o.test(n[s].className) && r.push(n[s]);
    return r
}

function __trcToArray(e, t) {
    var i;
    for (i in e) e.hasOwnProperty(i) && t.push([i, e[i]])
}

function __trcObjectCreate(e) {
    if ("function" == typeof Object.create) return Object.create(e);
    var t = function () {
    };
    if (e !== Object(e) && null !== e) throw TypeError("Argument must be an object, or null");
    t.prototype = e || {};
    var i = new t;
    return t.prototype = null, null === e && (i.__proto__ = null), i
}

void 0 === Array.prototype.push && (Array.prototype.push = function () {
    for (var e = 0; e < arguments.length; e++) this[this.length] = arguments[e]
}), void 0 === Array.prototype.indexOf && (Array.prototype.indexOf = function (e, t) {
    "number" != typeof t && (t = 0);
    for (var i = t; i < this.length; i++) if (this[i] == e) return i;
    return -1
}), void 0 === Array.prototype.forEach && (Array.prototype.forEach = function (e) {
    var t = this.length;
    if ("function" != typeof e) throw new TypeError;
    for (var i = arguments[1], r = 0; r < t; r++) r in this && e.call(i, this[r], r, this)
}), void 0 === document.getElementsByClassName && (document.getElementsByClassName = function (e) {
    var t = [];
    elms = document.getElementsByTagName("*");
    var i = e.split(/ +/);
    e:for (var r = 0; r < elms.length; r++) {
        for (var o = elms[r].className.split(/ +/), n = 0; n < i.length; n++) if (o.indexOf(i[n]) < 0) continue e;
        t.push(elms[r])
    }
    return t
}), void 0 === document.trcGetCurrentStyle && (document.trcGetCurrentStyle = function (e, t, i) {
    return "string" == typeof e && (e = document.getElementById(e)), window.getComputedStyle ? window.getComputedStyle(e, i).getPropertyValue(t) : (t = t.replace(/-(\w)/, function (e, t) {
        return t.toUpperCase()
    }), e.currentStyle[t])
}), void 0 === document.trcGetParentByClassName && (document.trcGetParentByClassName = function (e, t) {
    return e ? e.className.split(/\s+/).indexOf(t) >= 0 ? e : document.trcGetParentByClassName(e.parentNode, t) : null
}), void 0 === document.trcGetChildByClassName && (document.trcGetChildByClassName = function (e, t) {
    return e ? e.className.split(/\s+/).indexOf(t) >= 0 ? e : document.trcGetChildByClassName(e.firstChild, t) : null
}), void 0 === Function.prototype.trcBind && (!Function.prototype.bind || window.TRCImpl && window.TRCImpl.global && !window.TRCImpl.global["disable-native-function-bind"] ? Function.prototype.trcBind = function (e) {
    var t = this, i = Array.prototype.slice.call(arguments, 1);
    return function () {
        var r = i.concat(Array.prototype.slice.call(arguments, 0));
        return t.apply(e, r)
    }
} : Function.prototype.trcBind = Function.prototype.bind), void 0 === Function.prototype.trcThrottle && (Function.prototype.trcThrottle = function (e) {
    var t, i = this;
    return function () {
        var r = arguments;
        t && clearTimeout(t), t = setTimeout(function () {
            i.apply(i, r)
        }, e)
    }
}), void 0 === document.head && (document.head = document.getElementsByTagName("head")[0]), TRC.GoogleAds = function () {
    return "object" == typeof window.console && console.log("TRC.GoogleAds is Deprecated"), {
        draw: function () {
        }
    }
}, TRC.math = TRC.math || function (e, t) {
    function i(e, t, i) {
        return void 0 === i || 0 == +i ? Math[e](t) : (t = +t, i = +i, isNaN(t) || "number" != typeof i || i % 1 != 0 ? NaN : (t = t.toString().split("e"), +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - i : -i)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + i : i))))
    }

    return {
        roundByDecimal: function e(t, i) {
            var r = t / i, o = r.toFixed(0), n = r - o;
            return o * i + i * Math.round(n)
        }, round10: function (e, t) {
            return i("round", e, t)
        }
    }
}(window, document), function () {
    var e = "trc_vp_els", t = 5;

    function i(e) {
        this.trcManager = e, this.sessionStorage = TRC.pageManager.getLocalStorageImplementation("strict-w3c-storage", "session"), this.lastViewportElementData = this.getVPElementsHistory()[e.getItemId()], e.trcCache.enableCacheViaStorageFlag()
    }

    i.prototype.trackElement = function (e) {
        TRC.dom.on(e, "click", this.storeElementPosition.trcBind(this, e))
    }, i.prototype.scrollToElementIfWasLastInViewPort = function (e) {
        var t, i = this.trcManager;
        this.lastViewportElementData && e.id === this.lastViewportElementData.id && (delete(t = this.getVPElementsHistory())[this.trcManager.getItemId()], this.storeVPElementsHistory(t), "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), setTimeout(function () {
            e.scrollIntoView(!1);
            var t = {
                abTestsEventType: "simple",
                name: "backToFeed_backToCard",
                type: __trcJSONify({
                    origViewId: e.placementData.cachedViewId,
                    viewId: TRC.pageManager.getPageData(),
                    placement: e.getAttribute("data-placement-name"),
                    cardIndex: e.getAttribute("data-card-index")
                }),
                eventTime: (new Date).getTime()
            };
            i.sendEvent("abtests", {"unescape-d": encodeURIComponent(__trcJSONify(t))}, null, !1, null, null)
        }, 0))
    }, i.prototype.storeElementPosition = function (e) {
        var t = this.getVPElementsHistory();
        t[this.trcManager.getItemId()] = {id: e.id, s: (new Date).getTime()};
        var i = {
            abTestsEventType: "simple",
            name: "backToFeed_exitFromCard",
            type: __trcJSONify({
                viewId: TRC.pageManager.getPageData(),
                placement: e.getAttribute("data-placement-name"),
                cardIndex: e.getAttribute("data-card-index")
            }),
            eventTime: (new Date).getTime()
        };
        this.trcManager.sendEvent("abtests", {"unescape-d": encodeURIComponent(__trcJSONify(i))}, null, !1, null, null), this.storeVPElementsHistory(t)
    }, i.prototype.storeVPElementsHistory = function (t) {
        t = this.removeEntriesToLimit(t), this.sessionStorage.setValue(e, __trcJSONify(t))
    }, i.prototype.getVPElementsHistory = function () {
        var t = this.sessionStorage.getValue(e) || "{}";
        return TRC.util.jsonParseWithNative(t)
    }, i.prototype.removeEntriesToLimit = function (e) {
        var i = {}, r;
        if (TRC.util.keys(e).length <= t) return e;
        for (var o in e) e.hasOwnProperty(o) && (i[e[o].s] = o);
        for ((r = TRC.util.keys(i)).sort(); r.length > t;) r.shift();
        for (var n in i) i.hasOwnProperty(n) && -1 === r.indexOf(n) && delete e[i[n]];
        return e
    }, TRC.HistoryManager = i
}(), function () {
    function e(e, t, i) {
        this.trcManager = e, this.parentPlacementData = t, this.parentPlacementName = t.placement, this.container = t.container, this.parentContainerId = this.container.id, this.afterPlacementContainerCreated = i.afterPlacementContainerCreated, this.nextBatchDistanceThreshold = i.nextBatchDistanceThreshold || 2e3, this.numPlacements = 1, this.feedDynamicParameters = i.feedDynamicParameters, this.uiBatchNumberCounter = 1, this.isPendingNextBatch = !0, this.isFirstBatchRequest = !0, this.isLoadNextBatchAnchorObserveEnter = !1, this.enableManualLoadNextBatch = this.trcManager.manualVisibilityTrigger && this.trcManager.global["enable-manual-visible"], this.numPlaceholderItems = this.feedDynamicParameters && this.feedDynamicParameters["numPlaceholderItems"] || 3;
        var r = this.feedDynamicParameters && this.feedDynamicParameters["rootSelectorScrollElement"] || this.trcManager.global["feed-load-next-batch-root-selector"];
        this.observerRootSelector = r || null, this.observerScrollElement = r && document.querySelector(r) || window, this.feedObserverLoadNextBatch = this.feedDynamicParameters && this.feedDynamicParameters["feedObserverLoadNextBatch"] || this.trcManager.global["feed-observer-load-next-batch"], this.firstBatchDistanceThresholdFromTop = this.feedDynamicParameters && this.feedDynamicParameters["firstBatchDistanceThresholdFromTop"] || this.trcManager.global["first-batch-distance-threshold-from-top"], this.feedObserverLoadNextBatch && !this.enableManualLoadNextBatch && (this.isLoadNextBatchUsingObserver = !0), this.isLoadNextBatchUsingObserver || this.enableManualLoadNextBatch || (this.throttledScrollHandler = this.scrollHandler.trcBind(this).trcThrottle(10), this.lastScrollTop = this.getScrollTop(), TRC.dom.on(this.observerScrollElement, "scroll", this.throttledScrollHandler)), this.firstBatchDistanceThresholdFromTop && !this.enableManualLoadNextBatch && (this.throttledLoadRestOfBatchScrollHandler = this.loadRestOfBatchScrollHandler.trcBind(this, this.firstBatchDistanceThresholdFromTop).trcThrottle(10), TRC.dom.on(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler)), this.enableManualLoadNextBatch && (this.lastManualRectsTop = 0, this.listenToManualLoadNextBatchEvent()), this.feedDynamicParameters && this.feedDynamicParameters.enableHistory && (this.historyManager = new TRC.HistoryManager(e)), this.isLoadNextBatchUsingObserver && this.createLoadNextBatchObserverAnchorElement(), this.listenToTrcResponse(), this.createLoadingIndicator()
    }

    e.prototype.loadRestOfBatchScrollHandler = function (e) {
        var t = this.isNearingStartOfPage(e);
        this.restOfFirstBatchLoaded || this.isCache ? TRC.dom.off(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler) : !this.restOfFirstBatchLoaded && t && (this.getNextBatch(), TRC.dom.off(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler))
    }, e.prototype.scrollHandler = function () {
        this.isNearingEndOfContent() && this.getNextBatch(), this.lastScrollTop = this.getScrollTop()
    }, e.prototype.createNewNextBatchAnchorObserver = function () {
        TRC.dom.off(this.observerScrollElement, "scroll", this.nextBatchObserverCreator), TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId), this.ampFeedResizeListener && this.ampFeedResizeListener.remove(), this.nextBatchObserverCreator = null, this.isLoadNextBatchAnchorObserveEnter = !1, this.observeNextBatchAnchor()
    }, e.prototype.observeNextBatchAnchor = function () {
        var e = this, t = this.getNextBatchDistanceThreshold(), i = {
            rootSelector: this.observerRootSelector,
            targetElement: this.loadNextBatchAnchorContainer,
            threshold: [0, .25, .5, .75, 1],
            rootMargin: "0px 0px " + t + "px 0px",
            onEnter: this.getNextBatch.trcBind(this)
        };
        this.loadNextBatchAnchorObserverId = TRC.intersections.observe(i)
    }, e.prototype.createLoadingSpinner = function () {
        this.spinnerContainer = document.createElement("div"), this.spinnerContainer.className += "tbl-loading-spinner tbl-hidden", this.container.appendChild(this.spinnerContainer)
    }, e.prototype.createLoadingCardPlaceholder = function () {
        var e = "rtl" === this.trcManager.direction ? "tbl-loading-placeholder-dir-rtl" : "";
        this.spinnerContainer = document.createElement("div"), this.spinnerContainer.className += "tbl-loading-spinner tbl-loading-cards-placeholder tbl-hidden " + e;
        for (var t = 0; t < this.numPlaceholderItems; t++) this.spinnerContainer.appendChild(this.createPlaceholderNode());
        this.container.appendChild(this.spinnerContainer), this.container.className += " render-late-effect"
    }, e.prototype.createLoadingIndicator = function () {
        var e;
        this.feedDynamicParameters && "true" === this.feedDynamicParameters["disableLoadingCardsPlaceholder"] || this.trcManager.global["disable-loading-cards-placeholder"] ? this.createLoadingSpinner() : this.createLoadingCardPlaceholder()
    }, e.prototype.createPlaceholderNode = function () {
        var e = this.createNewElement("div", ["tbl-placeholder-card"]),
            t = this.createNewElement("div", ["tbl-first-row-pl", "tbl-masker"]),
            i = this.createNewElement("div", ["tbl-second-row-pl", "tbl-masker"]),
            r = this.createNewElement("div", ["tbl-third-row-pl", "tbl-masker"]),
            o = this.createNewElement("div", ["tbl-last-row-right-padding", "tbl-masker"]),
            n = this.createNewElement("div", ["tbl-img-top-padding", "tbl-masker"]),
            a = this.createNewElement("div", ["tbl-img-bottom-padding", "tbl-masker"]),
            s = this.createNewElement("div", ["tbl-first-col-padding", "tbl-masker"]),
            l = this.createNewElement("div", ["tbl-second-col-padding", "tbl-masker"]);
        return e.appendChild(t), e.appendChild(i), e.appendChild(r), e.appendChild(o), e.appendChild(n), e.appendChild(a), e.appendChild(s), e.appendChild(l), e
    }, e.prototype.createNewElement = function (e, t) {
        var i = document.createElement(e);
        return t.forEach(function (e) {
            i.className += " " + e
        }), i
    }, e.prototype.createLoadNextBatchObserverAnchorElement = function () {
        this.loadNextBatchAnchorContainer = document.createElement("div"), this.loadNextBatchAnchorContainer.className = "tbl-batch-anchor", this.container.appendChild(this.loadNextBatchAnchorContainer), this.observeNextBatchAnchor()
    }, e.prototype.stopScrolling = function () {
        if (this.isLoadNextBatchUsingObserver) return this.isAllowedToRequestMoreContent = !1, void TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId);
        this.enableManualLoadNextBatch ? this.isAllowedToRequestMoreContent = !1 : TRC.dom.off(this.observerScrollElement, "scroll", this.throttledScrollHandler)
    }, e.prototype.hideLoadingSpinner = function () {
        -1 === this.spinnerContainer.className.indexOf("tbl-hidden") && TRC.dom.addClass(this.spinnerContainer, "tbl-hidden")
    }, e.prototype.showLoadingSpinner = function () {
        TRC.dom.removeClass(this.spinnerContainer, "tbl-hidden")
    }, e.prototype.listenToTrcResponse = function () {
        var e = this.onTrcResponse.trcBind(this);
        TRC.EventsAPI.listen("nocontent", e), TRC.listen("trcResponseHandled", e), TRC.listen("resumeFeedRendering", e)
    }, e.prototype.listenToManualLoadNextBatchEvent = function () {
        TRC.listen("visible::" + this.parentPlacementName, this.manualLoadNextBatchHandler.trcBind(this))
    }, e.prototype.shouldEnableLoadNextBatch = function (e) {
        var t = e.boundingClientRect.top < this.lastManualRectsTop, i;
        return e.boundingClientRect.top + e.boundingClientRect.height - e.rootBounds.height <= this.getNextBatchDistanceThreshold() && t
    }, e.prototype.manualLoadNextBatchHandler = function (e) {
        this.shouldEnableLoadNextBatch(e) && this.getNextBatch(), this.lastManualRectsTop = e.boundingClientRect.top
    }, e.prototype.isNearingStartOfPage = function (e) {
        return e <= this.getScrollTop()
    }, e.prototype.isNearingEndOfContent = function () {
        var e = this.container.getBoundingClientRect().top + this.container.offsetHeight,
            t = TRC.dom.getViewportVerticalRange(), i = t.max - t.min, r,
            o = e > 0 && e - i <= this.getNextBatchDistanceThreshold(), n;
        return this.getScrollTop() > this.lastScrollTop && o
    }, e.prototype.getNextBatchDistanceThreshold = function () {
        return this.isFirstBatchRequest && this.trcNextBatchNumber && this.trcManager.global["feed-first-batch-distance-threshold"] || this.nextBatchDistanceThreshold
    }, e.prototype.updateNextBatchNumber = function (e) {
        this.trcNextBatchNumber = +e
    }, e.prototype.getNextBatch = function (e) {
        var t = {};
        if (!1 !== this.isAllowedToRequestMoreContent && !this.isPendingNextBatch) {
            if (this.isLoadNextBatchUsingObserver) {
                if (!e && this.isLoadNextBatchAnchorObserveEnter) return;
                this.isLoadNextBatchAnchorObserveEnter = !0
            }
            this.isFirstBatchRequest = !1, this.parentPlacementData.fi = this.numPlacements, this.parentPlacementData.fb = this.trcNextBatchNumber || ++this.uiBatchNumberCounter, this.restOfFirstBatchLoaded = !0, t[this.parentPlacementName] = this.parentPlacementData, this.isPendingNextBatch = !0, this.showLoadingSpinner(), this.trcManager.dispatchLoadRequest(t)
        }
    }, e.prototype.getScrollTop = function () {
        return TRC.dom.getScrollTop(this.observerScrollElement)
    }, e.prototype.isVideoItemPreviewOn = function (e, t) {
        return !(e.uimvip !== t.mode && !e.evip)
    }, e.prototype.handlePlacement = function (e) {
        var t = document.createElement("div");
        if (this.feedDynamicParameters && this.isVideoItemPreviewOn(this.feedDynamicParameters, e) && (t.className = "tbl-preview"), e.isCache) {
            if (this.isCache = !0, this.cachedViewId = e.cachedViewId, !this.loadFromCacheEventSent) {
                var i = {
                    abTestsEventType: "simple",
                    name: "backToFeed_loadFromCache",
                    type: __trcJSONify({
                        origViewId: this.cachedViewId,
                        placement: e.placement,
                        cardIndex: this.numPlacements
                    }),
                    eventTime: (new Date).getTime()
                };
                this.trcManager.sendEvent("abtests", {"unescape-d": encodeURIComponent(__trcJSONify(i))}, null, !1, null, null), this.loadFromCacheEventSent = !0
            }
        } else if (this.isCache && !this.loadNotFromCacheEventSent) {
            var i = {
                abTestsEventType: "simple",
                name: "backToFeed_loadNotFromCache",
                type: __trcJSONify({
                    origViewId: this.cachedViewId,
                    placement: e.placement,
                    cardIndex: this.numPlacements
                }),
                eventTime: (new Date).getTime()
            };
            this.trcManager.sendEvent("abtests", {"unescape-d": encodeURIComponent(__trcJSONify(i))}, null, !1, null, null), this.loadNotFromCacheEventSent = !0
        }
        e.container = t, e.modeGroupOrder = this.numPlacements, t.setAttribute("data-card-index", this.numPlacements), t.placementData = e, this.uiBatchNumberCounter = +e.trcResponse.fb || this.uiBatchNumberCounter, this.parentContainerId && (t.id = this.parentContainerId + "-pl" + this.numPlacements, t.setAttribute("data-batch-num", this.uiBatchNumberCounter)), "function" == typeof this.afterPlacementContainerCreated && this.afterPlacementContainerCreated(t, e), this.isLoadNextBatchUsingObserver ? this.container.insertBefore(t, this.container.querySelector(".tbl-batch-anchor")) : this.container.insertBefore(t, this.container.querySelector(".tbl-loading-spinner")), this.historyManager && (this.historyManager.trackElement(t), this.historyManager.scrollToElementIfWasLastInViewPort(t)), this.numPlacements++
    }, e.prototype.switchMainContainer = function (e) {
        this.container = e, this.isLoadNextBatchUsingObserver && this.container.appendChild(this.loadNextBatchAnchorContainer), this.container.appendChild(this.spinnerContainer)
    }, e.prototype.onTrcResponse = function (e) {
        e && "api::nocontent" === e.type && e.detail.placement || (this.isPendingNextBatch = !1, this.hideLoadingSpinner(), this.isLoadNextBatchUsingObserver && !this.nextBatchObserverCreator && !1 !== this.isAllowedToRequestMoreContent && (this.nextBatchObserverCreator = this.createNewNextBatchAnchorObserver.trcBind(this).trcThrottle(10), TRC.dom.on(this.observerScrollElement, "scroll", this.nextBatchObserverCreator), this.ampFeedResizeListener = TRC.listen("ampFeedResize", this.nextBatchObserverCreator)))
    }, e.prototype.setIsAllowedToRequestMoreContent = function (e) {
        this.isAllowedToRequestMoreContent = e
    }, e.prototype.getIsFirstBatch = function () {
        return this.isFirstBatchRequest
    }, TRC.InfiniteScrollEngine = e
}(), function (e, t) {
    "use strict";
    if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
            return this.intersectionRatio > 0
        }
    }); else {
        var i = [];
        o.prototype.THROTTLE_TIMEOUT = 1e3, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function (e) {
            if (!this._observationTargets.some(function (t) {
                return t.element == e
            })) {
                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                this._registerInstance(), this._observationTargets.push({
                    element: e,
                    entry: null
                }), this._monitorIntersections()
            }
        }, o.prototype.unobserve = function (e) {
            this._observationTargets = this._observationTargets.filter(function (t) {
                return t.element != e
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, o.prototype.disconnect = function () {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, o.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return this._queuedEntries = [], e
        }, o.prototype._initThresholds = function (e) {
            var t = e || [0];
            return Array.isArray(t) || (t = [t]), t.sort().filter(function (e, t, i) {
                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                return e !== i[t - 1]
            })
        }, o.prototype._parseRootMargin = function (e) {
            var t, i = (e || "0px").split(/\s+/).map(function (e) {
                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                return {value: parseFloat(t[1]), unit: t[2]}
            });
            return i[1] = i[1] || i[0], i[2] = i[2] || i[0], i[3] = i[3] || i[1], i
        }, o.prototype._monitorIntersections = function () {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }, o.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, l(e, "resize", this._checkForIntersections, !0), l(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, o.prototype._checkForIntersections = function () {
            var e = this._rootIsInDom(),
                t = e ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
            this._observationTargets.forEach(function (i) {
                var o = i.element, a = d(o), s = this._rootContainsTarget(o), l = i.entry,
                    c = e && s && this._computeTargetAndRootIntersection(o, t), h = i.entry = new r({
                        time: n(),
                        target: o,
                        boundingClientRect: a,
                        rootBounds: t,
                        intersectionRect: c
                    });
                l ? e && s ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h) : l && l.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, o.prototype._computeTargetAndRootIntersection = function (i, r) {
            if ("none" != e.getComputedStyle(i).display) {
                for (var o, n = d(i), a = u(i), s = !1; !s;) {
                    var l = null, h = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                    if ("none" == h.display) return;
                    if (a == this.root || a == t ? (s = !0, l = r) : a != t.body && a != t.documentElement && "visible" != h.overflow && (l = d(a)), l && !(n = c(l, n))) break;
                    a = u(a)
                }
                return n
            }
        }, o.prototype._getRootRect = function () {
            var e;
            if (this.root) e = d(this.root); else {
                var i = t.documentElement, r = t.body;
                e = {
                    top: 0,
                    left: 0,
                    right: i.clientWidth || r.clientWidth,
                    width: i.clientWidth || r.clientWidth,
                    bottom: i.clientHeight || r.clientHeight,
                    height: i.clientHeight || r.clientHeight
                }
            }
            return this._expandRectByRootMargin(e)
        }, o.prototype._expandRectByRootMargin = function (e) {
            var t = this._rootMarginValues.map(function (t, i) {
                return "px" == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100
            }), i = {top: e.top - t[0], right: e.right + t[1], bottom: e.bottom + t[2], left: e.left - t[3]};
            return i.width = i.right - i.left, i.height = i.bottom - i.top, i
        }, o.prototype._hasCrossedThreshold = function (e, t) {
            var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (i !== r) for (var o = 0; o < this.thresholds.length; o++) {
                var n = this.thresholds[o];
                if (n == i || n == r || n < i != n < r) return !0
            }
        }, o.prototype._rootIsInDom = function () {
            return !this.root || p(t, this.root)
        }, o.prototype._rootContainsTarget = function (e) {
            return p(this.root || t, e)
        }, o.prototype._registerInstance = function () {
            i.indexOf(this) < 0 && i.push(this)
        }, o.prototype._unregisterInstance = function () {
            var e = i.indexOf(this);
            -1 != e && i.splice(e, 1)
        }, e.IntersectionObserver = o, e.IntersectionObserverEntry = r
    }

    function r(e) {
        this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }, this.isIntersecting = !!e.intersectionRect;
        var t = this.boundingClientRect, i = t.width * t.height, r = this.intersectionRect, o = r.width * r.height;
        this.intersectionRatio = i ? o / i : this.isIntersecting ? 1 : 0
    }

    function o(e, t) {
        var i = t || {};
        if ("function" != typeof e) throw new Error("callback must be a function");
        if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = a(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function (e) {
            return e.value + e.unit
        }).join(" ")
    }

    function n() {
        return e.performance && performance.now && performance.now()
    }

    function a(e, t) {
        var i = null;
        return function () {
            i || (i = setTimeout(function () {
                e(), i = null
            }, t))
        }
    }

    function s(e, t, i, r) {
        "function" == typeof e.addEventListener ? e.addEventListener(t, i, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i)
    }

    function l(e, t, i, r) {
        "function" == typeof e.removeEventListener ? e.removeEventListener(t, i, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
    }

    function c(e, t) {
        var i = Math.max(e.top, t.top), r = Math.min(e.bottom, t.bottom), o = Math.max(e.left, t.left),
            n = Math.min(e.right, t.right), a = n - o, s = r - i;
        return a >= 0 && s >= 0 && {top: i, bottom: r, left: o, right: n, width: a, height: s}
    }

    function d(e) {
        var t;
        try {
            t = e.getBoundingClientRect()
        } catch (e) {
        }
        return t ? (t.width && t.height || (t = {
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.right - t.left,
            height: t.bottom - t.top
        }), t) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
    }

    function h() {
        return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
    }

    function p(e, t) {
        for (var i = t; i;) {
            if (i == e) return !0;
            i = u(i)
        }
        return !1
    }

    function u(e) {
        var t = e.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t
    }
}(window, document), TRC.intersections = function (e, t) {
    var i = 0, r = {}, o = {}, n = "observeId";

    function a() {
    }

    function s(e, t) {
        if (TRC.util.isArray(e.threshold)) for (var i = 0; i < e.threshold.length; i++) {
            var r = e.threshold[i];
            -1 === t.indexOf(r) && t.push(e.threshold)
        } else -1 === t.indexOf(e.threshold) && t.push(e.threshold)
    }

    function l(e, i, r, o, n) {
        var a, s;
        return e.disableCheckOverlay || i !== TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE || (a = t.elementFromPoint(o - 1, n - 1) || t.elementFromPoint(o + 1, n + 1), isNaN(e.exactVisibleThresholdFromTop) || (s = t.elementFromPoint(o, r.boundingClientRect.top + e.exactVisibleThresholdFromTop)), c(a, r.target) || c(s, r.target) || (i = TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE, r.intersectionRatio >= 1 && null !== a && TRC.intersections.observePolling(e))), i
    }

    function c(e, t) {
        return e && (e === t || t.contains(e))
    }

    function d(e, t, i, r) {
        return i.height >= r || e <= i.right && t <= i.bottom && t > 0
    }

    function h(e) {
        var i, r, o, n, a = p(e.getBoundingClientRect()), s;
        return r = a.targetElementCenterX, o = a.targetElementCenterY, i = c(t.elementFromPoint(r, o), e)
    }

    function p(e) {
        var t, i;
        return {
            targetElementCenterX: e.left + Math.round((e.right - e.left) / 2),
            targetElementCenterY: e.top + Math.round((e.bottom - e.top) / 2)
        }
    }

    function u(e, t) {
        t === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && TRC.intersections.unObservePolling(e)
    }

    function m(e, t, i) {
        t.onTrigger(e, t.observer, i), u(i, t)
    }

    function g(e) {
        TRC.Timeout.clear(e.visibleTimeout), delete e.visibleTimeout
    }

    function f(e, t, i) {
        t.isEnter && e.isVisible && ("function" != typeof t.visibleWidgetPredicate || t.visibleWidgetPredicate()) && (delete e.isVisible, e.visibilityReported = !0, m(e, t, i))
    }

    function b(e, t, i) {
        g(e), e.visibilityReported || f(e, t, i)
    }

    function v(e, t, i) {
        var r = TRCImpl && TRCImpl.global["visibility-intersection-api-delay"] || 1e3,
            o = i === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && !e.visibleTimeout;
        t.enableDelayedVisibilityCheck ? o && (e.isVisible = !0, e.visibleTimeout = TRC.Timeout.set(b.trcBind(this, e, t, i), r)) : m(e, t, i)
    }

    function C(e, t, i) {
        var r = t.target, o, n, a, s, c;
        e.isEnter = t.isIntersecting, e.isExit = !e.isEnter, e.intersection = t.intersectionRatio, e.isEnter ? e.onEnter(t, r, e.observer) : e.isExit && (r.visibleTimeout && g(r), r.isVisible = !1, e.onExit(t, r, e.observer), TRC.intersections.unObservePolling(e));
        var h = p(o = t.boundingClientRect);
        return a = h.targetElementCenterX, s = h.targetElementCenterY, n = TRCImpl && TRCImpl.global["visibility-threshold-override"] || 0, c = l(e, c = t.isIntersecting && t.intersectionRatio >= n && d(a, s, t.intersectionRect, e.exactVisibleThresholdFromTop) ? TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE : t.isIntersecting ? TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE : TRC.intersections.visibilityState.NOT_IN_VIEW_PORT, t, a, s), i.disableDuplicatePrevention ? v(r, e, c) : e.lastEventId && e.lastEventId === c || (v(r, e, c), e.lastEventId = c), c
    }

    var y = {
        TARGET_ATTRIB: n,
        visibilityState: {IN_VIEW_PORT_VISIBLE: 1, IN_VIEW_PORT_NOT_VISIBLE: 2, NOT_IN_VIEW_PORT: 3},
        observe: function (e) {
            var t, l, c, d = e.disableCheckOverlay ? [0, .5] : [0, .25, .5, .75, 1];

            function h(t) {
                for (var i, o = 0; o < t.length; o++) {
                    var a = t[o];
                    i = a.target.getAttribute(n).split(" ");
                    for (var s = 0; s < i.length; s++) {
                        var l = i[s], c = r[l];
                        c && c.observer.tblObserverKey === this.tblObserverKey && C(c, a, e)
                    }
                }
            }

            if (e.targetElement && null !== e.threshold && (e.onEnter || e.onExit || e.onTrigger)) {
                t = e.targetElement, l = "tbl-observe-" + i, c = t.getAttribute(n) ? t.getAttribute(n) + " " + l : l, t.setAttribute(n, c), i++, s(e, d), r[l] = {
                    targetSelector: l,
                    targetElement: t,
                    isEnter: null,
                    isExit: null,
                    intersection: null,
                    disableCheckOverlay: e.disableCheckOverlay,
                    disableDuplicatePrevention: e.disableDuplicatePrevention,
                    enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                    visibleWidgetPredicate: e.visibleWidgetPredicate,
                    exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                    threshold: e.threshold,
                    onExit: e.onExit || a,
                    onEnter: e.onEnter || a,
                    onTrigger: e.onTrigger || a
                };
                var p = {root: e.rootSelector || null, rootMargin: e.rootMargin || "0px", threshold: e.threshold},
                    u = TRC.util.hashString(JSON.stringify(p)), m;
                return o[u] ? m = o[u] : (p.root = p.root && document.querySelector(p.root), m = new IntersectionObserver(h.trcBind(p), p), "MutationObserver" in window || (m.POLL_INTERVAL = TRCImpl.global["intersections-polyfill-poll-interval"] || 500), p.tblObserverKey = m.tblObserverKey = u, o[u] = m), r[l].observer = m, m.observe(t), l
            }
            __trcDebug("missing params for intersectionHandler")
        },
        isInViewPort: function (e) {
            var t = TRCImpl.global["visibility-threshold"] || e.disableCheckOverlay ? [0, .5] : [0, .25, .5, .75, 1],
                i = {
                    rootSelector: e.rootSelector || null,
                    targetElement: e.targetElement,
                    threshold: t,
                    rootMargin: "0px",
                    disableCheckOverlay: e.disableCheckOverlay,
                    disableDuplicatePrevention: e.disableDuplicatePrevention,
                    enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                    visibleWidgetPredicate: e.visibleWidgetPredicate,
                    exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                    onTrigger: e.onTrigger
                };
            return this.observe(i)
        },
        unobserve: function (e) {
            var t = r[e], i, o;
            if (t) return o = (i = (t = r[e].targetElement).getAttribute(n).split(" ")).indexOf(e), 1 === i.length && (r[e].observer.unobserve(t), t.removeAttribute(n)), o > -1 && i.length > 1 && (i.splice(o, 1), t.setAttribute(n, i.join(" "))), delete r[e];
            __trcLog("missing target element for unobserve")
        },
        getIntersectionState: function () {
            return r
        },
        observePolling: function (e) {
            var t = 500;
            this.observedElementsInPolling[e.targetSelector] || (this.observedElementsInPolling[e.targetSelector] = {
                target: e.targetElement,
                state: e
            }, e.underPolling = !0, this.observedElementsInPollingCounter++), this.observedElementsInPollingCounter > 0 && this.startPolling(t)
        },
        unObservePolling: function (e) {
            this.observedElementsInPolling[e.targetSelector] && (delete this.observedElementsInPolling[e.targetSelector], this.observedElementsInPollingCounter--, e.underPolling = !1), 0 === this.observedElementsInPollingCounter && this.stopPolling()
        },
        stopPolling: function () {
            clearInterval(this.pollingInterval), this.pollingInterval = null
        },
        startPolling: function (e) {
            this.pollingInterval || (this.pollingInterval = setInterval(function () {
                var e, t = !1, i, r, o = y.observedElementsInPolling;
                for (var n in o) if (o.hasOwnProperty(n) && (t = h((e = o[n]).target))) {
                    i = e.target.getAttribute(y.TARGET_ATTRIB).split(" "), r = y.getIntersectionState();
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        v(e.target, r[s], y.visibilityState.IN_VIEW_PORT_VISIBLE)
                    }
                    y.unObservePolling(e.state)
                }
            }, e))
        },
        observedElementsInPolling: {},
        observedElementsInPollingCounter: 0
    };
    return y
}(window, document), function () {
    function e(e) {
        this._data = e
    }

    e.prototype.getId = function () {
        return this._data.id
    }, e.prototype.getLinkTarget = function () {
        return this._data.linkTarget
    }, e.prototype.getUrl = function () {
        return this._data.url
    }, e.prototype.getTitle = function () {
        return this._data.title
    }, e.prototype.getType = function () {
        var e = this._data;
        return e["is-syndicated"] ? "sponsored" : e["is-in-network"] ? "exchange" : e["is-native"] ? "native" : "organic"
    }, e.prototype.getSlot = function () {
        return this._data.itemIndex
    }, TRC.ItemParser = e
}(), function (e, t) {
    var i = {
        source: "|v|h|c|t|s|p|o|z|video|home|category|text|search|photo|other|content_hub",
        target: "|v|p|t|m|video|photo|text|mix|"
    }, r = "v", o = function (e, t) {
        return e = e.toLowerCase(), -1 !== i[t].indexOf("|" + e + "|") ? "content_hub" === e ? "z" : e.substr(0, 1) : (__trcError('illegal parameter "' + e + '" was passed to trc_ListOriginBuilder method: "set' + t.substr(0, 1).toUpperCase() + t.substr(1) + '" \nUsing "video" instead'), "v")
    }, n = TRC.ListOriginBuilder = function (e, t) {
        this.setSource(e || r), this.setTarget(t || "v")
    };
    n.prototype.setSource = function (e) {
        r = o(e, "source")
    }, n.prototype.getSource = function () {
        return r
    }, n.prototype.setTarget = function (e) {
        this.target = o(e, "target")
    }, n.prototype.getTarget = function () {
        return this.target
    }, n.prototype.toString = function () {
        return (r + "2" + this.target).replace(/v2v/, "blended")
    }
}(window, document), TRC.mdl = function (e, t) {
    var i = encodeURIComponent("."), r = encodeURIComponent("|"), o, n, a, s;

    function l(e, t) {
        var i = !1;
        if (t && t.systemFlags && "thin" == t.systemFlags.loaderType && e && e.trc && e.trc.vl) {
            var r = e.trc.vl;
            i = TRC.util.some(r, function (e) {
                return !(!e || !e["mn"])
            }), t.isWaitingForModes = i
        }
        return i
    }

    function c(e, t, i, r, o) {
        for (var n = [], a = {}, s = 0; s < t.length; s++) {
            var l = t[s];
            a[l.name] || (n.push(l), a[l.name] = !0)
        }
        return i(e, n, r, o)
    }

    function d(e, t, i, r) {
        for (var o, n = e + "/mode/", a = t.length, s = encodeURIComponent("|"), l = encodeURIComponent("__"), c = 0; c < a; c++) {
            var d = t[c];
            d.name && d.revision && (n = n + encodeURIComponent(d.name) + l + encodeURIComponent(d.revision), c + 1 < a && (n += s))
        }
        return n = n + "&publisher=" + encodeURIComponent(r)
    }

    function h(e, t, o, n) {
        for (var a, s = e + "/" + "?modes=", l = t.length, c = 0; c < l; c++) {
            var d = t[c];
            d.name && d.revision && (s = s + encodeURIComponent(d.name) + i + encodeURIComponent(d.revision), c + 1 < l && (s += r))
        }
        return s = s + "&publisher=" + encodeURIComponent(n) + "&clientVersion=" + encodeURIComponent(o)
    }

    function p(e, t, i, r) {
        var o = u(function (e) {
            t(e), delete TRC.callbacks[o]
        });

        function n(e) {
            "error" === e.type && f(i, r)
        }

        TRC.net.loadScript(e + "&callback=TRC.callbacks." + o, "js", n)
    }

    function u(e) {
        var t = "rboxDynamicModeLoaderCallbackName" + (n = n + 1 || 1);
        return TRC.callbacks[t] = e, t
    }

    function m(e, t) {
        var i = [];
        if (e && e.trc && e.trc.vl) {
            var r = e.trc.vl;
            if (TRC.util.isArray(r)) for (var o = 0; o < r.length; o++) {
                var n = r[o];
                if (n["mn"] && !t[n["mn"]]) {
                    var a = {name: n["mn"], revision: n["mr"], mode: null};
                    i.push(a)
                }
            }
        }
        return i.sort(function (e, t) {
            return e.name > t.name ? 1 : -1
        }), i
    }

    function g(e) {
        if (e && e.trc && e.trc.vl) {
            for (var t = e.trc.vl, i = 0; i < t.length; i++) {
                var r = t[i];
                delete r.t, r["m"] = r["mn"]
            }
            e.trc && e.trc.t && delete e.trc.t
        }
    }

    function f(e, t) {
        e.isWaitingForModes = !1, t()
    }

    return {
        loadedModes: {}, yieldDynamicModeLoad: function e(t, r, n) {
            var s = "https://modes.taboola.com";
            if (o = l(t, r)) if (TRC.mdl.loadedModes = TRC.mdl.loadedModes || {}, (a = m(t, TRC.mdl.loadedModes)).length > 0) {
                var d = TRC.networkId ? TRC.networkId : TRC.publisherId, u;
                p(c(s, a, h, r.version, d), b.trcBind(this), r, n)
            } else f(r, n); else f(r, n);

            function b(e) {
                if (r.isWaitingForModes = !1, e) for (var a in e) if (e.hasOwnProperty(a)) {
                    var s = a.split(i)[0];
                    TRC.mdl.loadedModes[s] = e[a], TRC.cssStack.addStyle("mode", e[a]._style, TRC.styleInjected), TRC.cssStack.addStyle("custom", e[a]._customStyle, TRC.styleInjected)
                }
                for (var l in TRC.styleInjected || TRC.cssStack.injectAllStyles(), TRC.mdl.loadedModes) TRC.mdl.loadedModes.hasOwnProperty(l) && (TRCImpl.modes[l] = TRC.mdl.loadedModes[l]);
                o && g(t), n()
            }
        }, isLoaded: function (e) {
            return TRC.mdl.loadedModes = TRC.mdl.loadedModes || {}, !!TRC.mdl.loadedModes[e]
        }
    }
}(window, document), TRC.net = function (e, t) {
    var i = {}, r = [], o;
    return {
        loadScript: function (e, i, r, o, n) {
            var a = t.getElementsByTagName("script")[0], s = null;
            if ("js" == i) (s = t.createElement("script")).type = "text/javascript", s.src = e, s.charset = "UTF-8", o ? s.setAttribute("defer", "defer") : n && s.setAttribute("async", "async"); else {
                if ("css" != i) throw new Error("External reference loaded must be of type 'js' or 'css'!");
                (s = t.createElement("link")).rel = "stylesheet", s.type = "text/css", s.href = e
            }
            return "function" == typeof r && (s.addEventListener ? (s.addEventListener("load", r, !1), s.addEventListener("error", r, !1)) : s.onreadystatechange = function () {
                "loaded" != s.readyState && "complete" != s.readyState || r.apply(s)
            }), a.parentNode.insertBefore(s, a), s
        }, checkLoadJsCssFile: function (e, t, r) {
            var o = e.replace(new RegExp("^.*/([^/]+)$"), "$1");
            try {
                return void 0 === i[o] ? (i[o] = TRC.net.loadScript(e, t, r), "css" == t && (i["css"] = 1)) : "function" == typeof r && TRC.Timeout.set(function () {
                    r.apply(i[o])
                }, 0), i[o]
            } catch (t) {
                __trcError("Error trying to load " + e, t)
            }
        }, fireSimpleHttpRequest: function (e) {
            var t = new Image;
            t.src = e, r.push(t)
        }
    }
}(window, document), function () {
    TRC.InvokePVideoLoader = function () {
        TRC.PVideoLoader = function e(t, i, r, o) {
            this.blockVideo = o.blockThumbnailVideoLoader, this.blockVideo || (TRC.VideoLoader.call(this, t.trc, i, t.placement, t.container, r), this.rbox = t)
        }, TRC.PVideoLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoLoader.prototype.ITEM_ID_SEPARATOR = "~~", TRC.PVideoLoader.prototype.getCallbacksObjectKey = function () {
            return "pVideoCallbacks"
        }, TRC.PVideoLoader.prototype.genVideoCallback = function (videoCallbackParams) {
            var videoCallbackName = this.generateCallbackName(), that = this;
            return TRC.pVideoCallbacks[videoCallbackName] = function (data) {
                if (data = data || {}, data.tags && data.tags[0]) {
                    var unitBootSrc = data.tags[0].unitBootSrc || that.videoConfig.unitBootSrc,
                        script = document.createElement("script");
                    script.src = unitBootSrc, script.setAttribute("type", "text/javascript"), script.setAttribute("src", unitBootSrc), script.onload = function () {
                        var unit = eval(data.tags[0].url),
                            viewabilityConfig = that.videoConfig["autoTriggerConfig"]["viewabilityConfig"];
                        if (-1 == viewabilityConfig.time && (viewabilityConfig.time = 0, viewabilityConfig.percentage = 101), unit.set("pVideoUrl", videoCallbackParams.url), unit.set("playerContainer", videoCallbackParams.playerContainer), unit.set("components.PosterView", {
                            isActive: !0,
                            imageLocation: videoCallbackParams.poster
                        }), unit.set("customization.placeHolder.background-color", "black"), unit.set("viewPercent", viewabilityConfig.percentage), unit.set("secondsInView", viewabilityConfig.time), unit.set("isPlayOnHover", that.videoConfig["autoTriggerConfig"]["hover"]), unit.set("isRepeat", that.videoConfig.repeat), that.videoConfig["videoEventsEnabled"]) {
                            var videoDataForEvent = that.getVideoDataForEvent(videoCallbackParams.itemIndex, videoCallbackParams.itemId);
                            unit.on("error", function () {
                                that.sendDebugEvent("error", videoDataForEvent)
                            }), unit.on("eligible", function () {
                                that.sendDebugEvent("eligible", videoDataForEvent)
                            }), unit.on("play", function (e) {
                                that.sendDebugEvent("play", videoDataForEvent, e)
                            }), unit.on("render", function () {
                                that.sendDebugEvent("rendered", videoDataForEvent)
                            }), unit.on("quarterly", function (e) {
                                that.sendDebugEvent("quarterly", videoDataForEvent, e)
                            }), unit.on("complete", function () {
                                that.sendDebugEvent("complete", videoDataForEvent)
                            })
                        }
                        TRC.tlf && console.timeEnd("in setVideoPlayerLoad"), TRC.tlf && console.timeStamp("end setVideoPlayerLoad")
                    }, document.getElementsByTagName("head")[0].appendChild(script)
                }
            }, "TRC." + this.getCallbacksObjectKey() + "." + videoCallbackName
        }, TRC.PVideoLoader.prototype.sendDebugEvent = function (e, t, i) {
            var r, o = window.trc_debug_level;
            r = {
                event: e,
                data: i || null,
                rii: t.rii,
                placement: t.placement,
                mode: t.modeName,
                itemIndex: t.itemIndex,
                itemId: t.itemId
            }, window.trc_debug_level = 3, __trcDebug("Performance Video Event: " + JSON.stringify(r)), window.trc_debug_level = o
        }, TRC.PVideoLoader.prototype.getVideoDataForEvent = function (e, t) {
            return {
                rii: this.rbox["response"]["trc"]["req"],
                placement: this.rbox["placement"],
                modeName: this.rbox["mode_name"],
                itemIndex: e,
                itemId: this.extractRealItemId(t)
            }
        }, TRC.PVideoLoader.prototype.extractRealItemId = function (e) {
            if (!e) return null;
            var t = e.split(this.ITEM_ID_SEPARATOR)[2];
            return t && t.length > 0 && !isNaN(parseFloat(t)) && isFinite(t) ? t : null
        }, TRC.PVideoLoader.prototype.loadVideo = function (e, t) {
            var i, r, o, n = TRC.VideoLoader.prototype.loadVideo.call(this, e);
            return n && t && (i = (o = t.container.getElementsByClassName("thumbBlock_holder")) && o[0]) && t.isCreatePVideoOverlay && (r = TRC.pVideoOverlay.create(t.video_data, t.language, t.isSendEvents), i.appendChild(r)), n
        }
    }
}(), function (e, t, i) {
    var r = {
        en: {cancel: "CANCEL", goto: "GO TO"},
        de: {cancel: "Abbrechen", goto: "Mehr erfahren"},
        fr: {cancel: "Annuler", goto: "Se rendre sur"},
        it: {cancel: "Annulla", goto: "Vai a"},
        jp: {cancel: "キャンセル", goto: "サイトへ行く"},
        pt: {cancel: "Fechar", goto: "Ir para"},
        es: {cancel: "Cancelar", goto: "Ir a"},
        ko: {cancel: "CANCEL", goto: "지금 더 알아보기"},
        he: {cancel: "סגור", goto: "עבור לדף"}
    }, o = {}, n, a = (i = i || {
        dom: {
            stopEvent: function (e) {
                e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
            }, on: function (e, t, i) {
                e.addEventListener(t, i)
            }, addClass: function (e, t) {
                e.className += " " + t + " "
            }, removeClass: function (e, t) {
                var i = new RegExp("s*" + t, "g");
                e.className = e.className.replace(i, "")
            }
        }, global: {"p-video-overlay-send-events": !1}
    }).dom, s = function (e, t) {
        var r, o;
        n && (o = {
            abTestsEventType: "simple",
            name: e,
            type: __trcJSONify(r = {itemId: t["item-id"], publisher: t["publisher"], syndicatorId: t["syndicator-id"]}),
            eventTime: (new Date).getTime()
        }, TRCImpl.sendEvent && TRCImpl.sendEvent("abtests", {"unescape-d": encodeURIComponent(__trcJSONify(o))}, null, !1, null, null), i.modDebug.logMessageToServer(1, e, r))
    }, l = function (e) {
        var t;
        return e && e.length ? (t = e.replace(/(^\w+:|^)\/\//, "")).replace(/\/.*/, "") : ""
    }, c = function (e) {
        var t = e.className.match(/p-video-overlay-show/);
        a[t ? "removeClass" : "addClass"](e, "p-video-overlay-show")
    }, d = function (e, t) {
        c(t.currentTarget.firstElementChild), void 0 === t.gotoSyndicator && s("p-video-overlay__display-overlay", e), t.gotoSyndicator || a.stopEvent(t)
    }, h = function (e, t, i) {
        s(t.msg, e), i.gotoSyndicator = t.flag
    }, p = function (e, t, i) {
        var r = a.createHTMLElement("div", {className: e || ""});
        return "function" == typeof t && a.on(r, "click", t), i && i.length && i.forEach && i.forEach(function (e) {
            r.appendChild(e)
        }), r
    }, u = function (e) {
        var t, i;
        return i = a.createHTMLElement("span", {
            className: "p-video-back-action-label",
            innerText: o.cancel || r.en.cancel
        }), t = p("p-video-overlay-action p-video-back-action", h.bind(this, e, {
            msg: "p-video-overlay__hide-overlay",
            flag: !1
        }), [i])
    }, m = function (e) {
        var t, i, n;
        return n = a.createHTMLElement("span", {
            className: "p-video-goto-action-label",
            innerText: o.goto || r.en.goto
        }), i = a.createHTMLElement("span", {
            className: "p-video-goto-action-url",
            innerHTML: l(e["url"])
        }), t = p("p-video-overlay-action p-video-goto-action", h.bind(this, e, {
            msg: "p-video-overlay__go-to-syndicator-page",
            flag: !0
        }), [n, i])
    }, g = function (e) {
        var t, i, r;
        return t = u(e), i = m(e), r = p("p-video-overlay", null, [i, t])
    }, f = function (e, t, i) {
        var a, l = g(e);
        return n = i, o = r[t || "en"] || r["en"], a = p("p-video-overlay-container", d.bind(this, e), [l]), s("p-video-overlay__overlay-created-on-item", e), a
    };
    i.pVideoOverlay = {
        create: f,
        createVideoPlayerOverlayElement: g,
        createActionElement: p,
        createGotoActionElement: m,
        createBackActionElement: u,
        actionClickHandler: h,
        videoOverlayClickHandler: d,
        videoOverlayToggleDisplay: c,
        stripUrl: l,
        sendDebugEvent: s
    }
}(window, document, TRC), function (e, t) {
    e.TRC = e.TRC || {};
    var i, r = !1, o = "taboola global", n = "trctestcookie";

    function a(t) {
        var i;
        if (TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui page_management parseXML"), e.DOMParser) return (new DOMParser).parseFromString(t, "text/xml");
        if (xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), xmlDoc.async = !1, xmlDoc.validateOnParse = !1, !xmlDoc.loadXML(t)) throw"XMLParsing failed";
        return xmlDoc
    }

    function s() {
        for (var e = "trc_cookie_storage", t = new Object, i = document.cookie.split(/;\s+/), r = 0; r < i.length; r++) {
            var o = TRC.text.lsplit(i[r], "=", 2), n = unescape(o[0]), a = unescape(o[1]);
            if (n == e) {
                for (var s = a.split("|"), l = 0; l < s.length; l++) {
                    var o = s[l].split("=");
                    t[unescape(o[0])] = unescape(o[1])
                }
                break
            }
        }

        function c() {
            var i = new Array, r, o;
            for (var n in t) t.hasOwnProperty(n) && null != t[n] && (i[i.length] = escape(n) + "=" + escape(t[n]));
            r = i.length > 0 ? 1 : -1, o = new Date((new Date).getTime() + 365 * r * 864e5), document.cookie = e + "=" + escape(i.join("|")) + ";path=/;expires=" + o.toUTCString()
        }

        return this.getValue = function (e) {
            return t.hasOwnProperty(e) ? t[e] : null
        }, this.setValue = function (e, i) {
            t[e] = i, c()
        }, this.removeKey = function (e) {
            delete t[e], c()
        }, this
    }

    function l(e) {
        var t = e || {};
        return this.getValue = function (e) {
            return t[e] ? t[e] : null
        }, this.setValue = function (e, i) {
            t[e] = i
        }, this.removeKey = function (e) {
            delete t[e]
        }, this.getData = function () {
            return t
        }, this
    }

    function c(t) {
        return this.getValue = function (i) {
            return e[t + "Storage"].getItem(i)
        }, this.setValue = function (i, r) {
            try {
                e[t + "Storage"].setItem(i, r)
            } catch (e) {
            }
        }, this.removeKey = function (i) {
            try {
                e[t + "Storage"].removeItem(i)
            } catch (e) {
            }
        }, this
    }

    function d(t) {
        var i = e[t + "Storage"], r = (new Date).getTime() + "", o = "_taboolaStorageDetection";
        try {
            if (i.setItem(o, r), i.getItem(o) == r) return i.removeItem(o), i
        } catch (e) {
        }
        return null
    }

    function h(t) {
        try {
            if (e.localStorage instanceof Storage && TRC.useStorageDetection && d(t)) return new c(t)
        } catch (e) {
            return null
        }
    }

    var p = function () {
        return this.publisher_id = null, this.item_id = null, this.page_id = null, this.state = {}, this.stateStack = [], this.getLocalStorageImplementation = function (t, i) {
            if (null != this.state.privateStorageImpl && "strict-w3c-storage" != t) return this.state.privateStorageImpl;
            var r = e.TRCImpl ? e.TRCImpl.global : {};
            switch (t = t || (r["local-storage-usage"] ? r["local-storage-usage"] : "prefer-w3c-storage")) {
                case"strict-w3c-storage":
                    return h("session" === i ? "session" : "local");
                case"prefer-w3c-storage":
                    var o = h("local");
                    if (o) return this.state.privateStorageImpl = o;
                case"prefer-cookies":
                    try {
                        if (this.canWriteCookies()) return this.state.privateStorageImpl = new s
                    } catch (e) {
                    }
                default:
                    return this.state.privateStorageImpl = new l
            }
        }, this.getFirstPartyCookie = function () {
            if (this.state.firstPartyCookie) return this.state.firstPartyCookie;
            var e = this.getLocalStorageImplementation();
            if (e instanceof s || e instanceof l) return this.state.firstPartyCookie = e;
            try {
                if (this.canWriteCookies()) return this.state.firstPartyCookie = new s
            } catch (e) {
            }
            return this.state.firstPartyCookie = new l
        }, this.canWriteCookies = function () {
            var e;
            return document.cookie = n + "=ok", e = -1 !== document.cookie.indexOf(n), document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", e
        }, this.getDummyStorage = function (e) {
            return new l(e)
        }, this.trcParseParams = function (e) {
            if (e && !owner.item_id) for (var t = e.split("&"), i = 0; i < t.length; i++) {
                var r = TRC.text.lsplit(t[i], "=", 2);
                switch (unescape(r[0])) {
                    case"item_id":
                        owner.item_id = unescape(r[1]);
                        break;
                    case"publisher_id":
                        owner.publisher_id = unescape(r[1])
                }
            }
        }, this.trcGetPublisherParams = function () {
            for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                var i = e[t].src.split("taboola(syndication)?.com/libtrc/")[1];
                if (i && e[t].src.search(/taboola(syndication)?.com.*page_management/) >= 0) {
                    var r = (i = i.split("?")[0]).split("/");
                    owner.page_id = r[0], r.length > 2 && (owner.page_id += "/" + r[1]), owner.trcParseParams(e[t].src.split("?")[1])
                }
            }
        }, this.getPageData = function () {
            var e = this.getTopMostWindow();
            return e.taboola_view_id || (e.taboola_view_id = (new Date).getTime()), e.taboola_view_id
        }, this.storeValue = function (e, t) {
            this.storePublisherValue(o, e, t)
        }, this.removeKey = function (e) {
            this.removePublisherKey(o, e)
        }, this.getValue = function (e) {
            return this.getPublisherValue(o, e)
        }, this.storePublisherValue = function (e, t, i) {
            var r;
            this.isNotAllowedToWriteValue(t, i) || (r = this.buildKeyWithPublisher(e, t), this.getLocalStorageImplementation().setValue(r, i), this.addKeyToStoredKeysList(r))
        }, this.isNotAllowedToWriteValue = function (e, t) {
            return null == t || void 0 == t || TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(e)
        }, this.buildKeyWithPublisher = function (e, t) {
            return e + ":" + t
        }, this.getPublisherValue = function (e, t) {
            return TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(t) ? null : this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(e, t))
        }, this.removePublisherKey = function (e, t) {
            return this.getLocalStorageImplementation().removeKey(this.buildKeyWithPublisher(e, t))
        }, this.removeAllKeys = function () {
            for (var e = this.getStoredKeysList(), t = [], i, r = 0; r < e.length; r++) i = e[r], this.isAllowedKeyWhenDoNotTrack(i) ? t.push(i) : this.getLocalStorageImplementation().removeKey(i);
            this.setStoredKeysList(t)
        }, this.addKeyToStoredKeysList = function (e) {
            var t = this.getStoredKeysList();
            -1 === t.indexOf(e) && (t.push(e), this.setStoredKeysList(t))
        }, this.getStoredKeysList = function () {
            var e = this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(o, "local-storage-keys")),
                t;
            try {
                t = TRC.util.jsonParseWithNative(e) || []
            } catch (e) {
                t = [], __trcError("Could not parse local storage keys", e)
            }
            return t
        }, this.setStoredKeysList = function (e) {
            var t;
            try {
                t = __trcJSONify(e), this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(o, "local-storage-keys"), t)
            } catch (e) {
                return void __trcError("Could not stringify local storage keys", e)
            }
        }, this.isAllowedKeyWhenDoNotTrack = function (t) {
            var i, r = (e.TRCImpl && e.TRCImpl.global || {})["dnt-allowed-keys"] || ["session-id", "trc_css-isolation"],
                o;
            return null !== t && void 0 !== t && (o = t.split(":")[1] || t, -1 !== r.indexOf(o))
        }, this.removeUserId = function () {
            TRC.pageManager.removeKey("user-id"), TRCImpl.global["store-userid-first-party-cookie"] && this.getFirstPartyCookie().removeKey(this.buildKeyWithPublisher(o, "user-id"))
        }, this.storeUserId = function (e) {
            this.isNotAllowedToWriteValue("user-id", e) || (this.storePublisherValue(o, "user-id", e), TRCImpl.global["store-userid-first-party-cookie"] && this.getFirstPartyCookie() !== this.getLocalStorageImplementation() && this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(o, "user-id"), e))
        }, this.getUserIdFirstPartyCookie = function () {
            return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(o, "user-id"))
        }, this.sortByLength = function (e, t) {
            return e.domain.lenth - t.domain.length
        }, this.setDomainConfiguration = function (e) {
            try {
                var t = a(e);
                if ("domains" != t.documentElement.tagName || t.getElementsByTagName("domain").length < 1) throw"Invalid configuration document: " + e;
                var i = t.getElementsByTagName("domain");
                this.state.m_publisherDomains = {host: [], path: [], query: []};
                for (var r = 0; r < i.length; r++) {
                    var o = i[r], n = this.state.m_publisherDomains[o.getAttribute("type")];
                    if (!(n instanceof Array)) throw"Invalid domain type in configuration: " + o.getAttribute("type");
                    n.push({
                        domain: o.text ? o.text : o.textContent,
                        keep: !!o.getAttribute("keep"),
                        staging: !!o.getAttribute("staging")
                    })
                }
            } catch (e) {
                this.state.m_publisherDomains = {}
            }
        }, this.matchOn = function (e, t, i) {
            if (!e || e.length < 1) return [];
            if (e.matching) return e.matching.slice(0);
            e.matching = [];
            for (var r = 0; r < e.length; r++) t(i, e[r].domain) && e.matching.push(e[r]);
            return e.matching.slice(0)
        }, this.getMatchingHosts = function () {
            return this.matchOn(this.state.m_publisherDomains.host, function (e, t) {
                return e.slice(e.length - t.split(".").length).join(".") == t
            }, e.location.host.split("."))
        }, this.getMatchingPaths = function () {
            return this.matchOn(this.state.m_publisherDomains.path, function (e, t) {
                return e.slice(0, t.split("/").length).join("/") == t
            }, e.location.pathname.split("/"))
        }, this.getMatchingQuery = function () {
            return this.matchOn(this.state.m_publisherDomains.query, function (e, t) {
                for (var i = t.split("&"), r = 0; r < i.length; r++) {
                    for (var o = i[r].split("="), n = !1, a = 0; a < e.length; a++) {
                        var s = e[a].split("=");
                        n = n || unescape(o[0]) == unescape(s[0]) && unescape(o[1]) == unescape(s[1])
                    }
                    if (!n) return !1
                }
                return !0
            }, e.location.search.replace(/^\?/, "").split("&"))
        }, this.getTopMostWindow = function () {
            var t;
            try {
                (t = e.top).TRC = t.TRC || {}, t.TRC || (t = e)
            } catch (i) {
                t = e
            }
            return t
        }, this.isEmbeddedView = function () {
            return this.state.m_publisherDomains.host && this.state.m_publisherDomains.host.length && this.getMatchingHosts().length <= 0 && e.location.host.search(/taboola\w*.com$/) < 0
        }, this.isStagingView = function () {
            return !this.isEmbeddedView() && function () {
                for (var e = 0; e < arguments.length; e++) if (function (e) {
                    for (; e.length > 0;) if (e.shift().staging) return !0
                }(arguments[e])) return !0;
                return !1
            }(this.getMatchingHosts(), this.getMatchingPaths(), this.getMatchingQuery())
        }, this.fixRecommendationURL = function (t) {
            function i(e, t) {
                for (var i = e.substring(1).split("/").reverse(), r = t.substring(1).split("/"), o = "", n = 0; n < r.length && n < i.length; n++) for (var a = 0; a < i.length; a++) {
                    if (n - a < 0) {
                        o = "/" + r.slice(0, n + 1).join("/");
                        break
                    }
                    if (i[a] != r[n - a]) break
                }
                return t.substring(o.length)
            }

            function r(e) {
                for (var t = {}, i = 0; i < e.length; i++) kv = TRC.text.lsplit(e[i], "=", 2), t[kv[0]] = kv[1];
                return t
            }

            var o;
            TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui page_management fixRecommendationURL");
            try {
                o = new TRC.URL(t)
            } catch (e) {
                return t
            }
            var n = this.getMatchingHosts().sort(this.sortByLength);
            if (n.length < 1) return t;
            for (; n.length > 0 && !n[0].keep;) n.shift();
            n.length > 0 && (o.host = e.location.host);
            for (var a = this.getMatchingPaths().sort(this.sortByLength); a.length > 0 && !a[0].keep;) a.shift();
            a.length > 0 && (o.pathname = a[0].domain + i(a[0].domain, o.pathname));
            var s = this.getMatchingQuery(), l = o.search.replace(/^\?/, "").split("&");
            "" == l[0] && l.shift();
            for (var c = 0; c < s.length; c++) {
                for (var d = r(s[c].domain.split("&")), c = 0; c < l.length; c++) {
                    var h, p = d[h = TRC.text.lsplit(l[c], "=", 2).shift()];
                    void 0 !== p && (l[c] = h + "=" + p, delete d[h])
                }
                for (var h in d) l.push(h + "=" + d[h])
            }
            return o.search = l.length > 0 ? "?" + l.join("&") : "", o.toString()
        }, this.additionalDispatchParams = function () {
            return null == this.state.moreDispatchParams && (this.state.moreDispatchParams = this.getCurrentURL().filtered), 0 == this.state.moreDispatchParams.length ? "" : "&" + this.state.moreDispatchParams.join("&")
        }, this.getForceTrcCache = function () {
            return r
        }, this.getCurrentURL = function () {
            var t = new TRC.URL(e.location.href), i = [], o = [];
            t.search.replace(/^\?/, "").split(/&/).forEach(function (e) {
                e && (0 == e.search("trc_") || "taboola-debug" == e ? (r = new Boolean(e.match(/trc_cache/)).valueOf(), o.push(e)) : i.push(e))
            }), t.search = i.length > 0 ? "?" + i.join("&") : "";
            var n = new String(t.toString());
            return n.filtered = o, n
        }, this.initState = function () {
            void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null, this.state.m_publisherDomains = {
                host: [],
                path: [],
                query: []
            }, this.state.moreDispatchParams = null
        }, this.pushState = function () {
            this.stateStack.push(this.state), delete this.state, this.initState()
        }, this.popState = function () {
            this.stateStack.length > 0 && (this.state = this.stateStack.pop())
        }, this.initState(), this
    };
    p.getPageData = function () {
        return i.getPageData()
    }, p.storeValue = function (e, t) {
        return i.storeValue(e, t)
    }, p.storePublisherValue = function (e, t, r) {
        return i.storePublisherValue(e, t, r)
    }, p.getValue = function (e) {
        return i.getValue(e)
    }, p.getPublisherValue = function (e, t) {
        return i.getPublisherValue(e, t)
    }, p.setDomainConfiguration = function (e) {
        return i.setDomainConfiguration(e)
    }, p.isEmbeddedView = function () {
        return i.isEmbeddedView()
    }, p.isStagingView = function () {
        return i.isStagingView()
    }, p.fixRecommendationURL = function (e) {
        return i.fixRecommendationURL(e)
    }, p.additionalDispatchParams = function () {
        return i.additionalDispatchParams()
    }, p.getCurrentURL = function () {
        return i.getCurrentURL()
    }, p.pushState = function () {
        return i.pushState()
    }, p.popState = function () {
        return i.popState()
    }, TRC.pageManager = i = TRC.pageManager || new p, e.PageManager = e.PageManager || p
}(window, document), function (e, t) {
    var i = TRC.PostRenderQueue = function () {
        return this.backend = [], this
    };
    i.prototype.pushBack = function (e, t) {
        __trcDebug("postRenderQueue.pushBack(" + e + ")"), this.backend.push({name: e, func: t})
    }, i.prototype.pushFront = function (e, t) {
        __trcDebug("postRenderQueue.pushFront(" + e + ")"), this.backend.unshift({name: e, func: t})
    }, i.prototype.popFront = function () {
        if (0 == this.backend.length) return null;
        var e = this.backend.shift();
        return "function" == typeof e ? {name: "unknown", func: e} : e
    }
}(window, document), function () {
    const e = 5, t = 1e3, i = 100;

    class r {
        constructor(r, o, n, a) {
            this.parentFeed = r, this.trcManager = o, this.options = a, this.container = r.container, this.origContainer = this.container, this.pendingPublisherCardsList = [], this.feedDynamicParameters = this.options.feedDynamicParameters, this.shouldStopFeedOnMissingPublisherCard = this.feedDynamicParameters && "STOP" === this.feedDynamicParameters["missingPublisherCardFeedStrategy"] || "STOP" === this.trcManager.global["missing-publisher-card-feed-strategy"], this.shouldSendCardEvents = !(this.feedDynamicParameters && this.feedDynamicParameters["disableSendingCardEvents"] || this.trcManager.global["disable-sending-card-events"]), this.publisherCardMaxRetries = o.global["feed-split-max-retries"] || e, this.publisherCardRetryInterval = o.global["feed-split-retry-interval"] || t, this.feedCardEventsMaxRetries = o.global["feed-card-events-max-retries"] || e, this.feedCardEventsRetryInterval = o.global["feed-card-events-retry-interval"] || t, this.feedCardEventsMinContainerHeight = o.global["feed-card-events-min-container-height"] || i
        }

        handlePendingPublisherCards(e = 0, t, i, r) {
            const o = (i = i || this.pendingPublisherCardsList[0]).trcResponse, n = r ? "spl" : "pcp", a = o[n],
                s = a.tps, l = document.querySelector(s), c = a.sun || a.pun;
            if (!l || !l.parentNode) return this.parentFeed.setIsAllowedToRequestMoreContent(!1), void(e < this.publisherCardMaxRetries ? (e++, setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, i, r), this.publisherCardRetryInterval)) : (e = 0, this.pendingPublisherCardsList.shift(), this.pendingPublisherCardsList.length ? setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, this.pendingPublisherCardsList[0], r), this.publisherCardRetryInterval) : (r || this.shouldStopFeedOnMissingPublisherCard ? this.parentFeed.stopScrolling() : (this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), TRC.dispatch("resumeFeedRendering")), TRC.modDebug.logMessageToServer(1, `Load publisher card: ${c} on Card: ${t} with the anchor element selector: ${s} failed after ${this.publisherCardMaxRetries} retries`, {
                idx: "pc",
                pc: c,
                st: 0,
                sel: s,
                slot: t,
                plat: this.trcManager.getPlatformCode()
            }))));
            this.createFeedContainerForResumeAfterPublisherCard(l, a), this.shouldSendCardEvents && !r && this.pendingPublisherCardsList.forEach(this.initCardEventsManager.trcBind(this)), TRC.modDebug.logMessageToServer(2, `Load publisher card: ${c} on Card: ${t} with the anchor element selector: ${s} succeed`, {
                idx: "pc",
                pc: c,
                st: 1
            }), this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), e > 0 && TRC.dispatch("resumeFeedRendering")
        }

        initCardEventsManager(e, t = 0) {
            const i = e.trcResponse.pcp.tps, r = document.querySelector(i);
            if (!r) return void(t < this.publisherCardMaxRetries && (t++, setTimeout(this.initCardEventsManager.trcBind(this, e, t), this.feedCardEventsRetryInterval)));
            const o = new TRC.CardEventsManager(this.trcManager, this.options, e, r);
            this.checkIfCardRendered(o, r)
        }

        createFeedContainerForResumeAfterPublisherCard(e, t) {
            const i = document.createElement("div");
            if (this.parentFeed.numContainers++, this.parentFeed.switchMainContainer(i), this.parentFeed.setMainContainerCssClassesAndAttributes(i, this.options), e.parentNode.insertBefore(i, e.nextElementSibling), t && (TRC.util.isTrue(t.scw) || TRC.util.isTrue(t.acw)) && (this.setPublisherCardContainerStyle(i), TRC.dom.on(window, "resize", this.setPublisherCardContainerStyle.trcBind(this, i))), this.parentFeed.isFullWidthMobileFeed(this.options)) {
                const e = this.parentFeed.getMobileFullWidthMarginsCss(this.parentFeed.numContainers);
                e && TRC.dom.injectStyle(e, null, this.trcManager.isThinLoaderMode())
            }
        }

        static getContainerWidth(e) {
            return getComputedStyle(e).width
        }

        getPageDirection() {
            return "rtl" === this.trcManager.direction ? "right" : "left"
        }

        setPublisherCardContainerMargin(e) {
            const t = this.getPageDirection(), i = this.origContainer.getBoundingClientRect()[t],
                r = e.getBoundingClientRect()[t];
            let o, n = 1;
            if (i === r) return;
            "right" === t ? (o = "marginRight", n = -1) : o = "marginLeft";
            const a = parseInt(getComputedStyle(e)[o]), s = (i - r + a) * n;
            e.style[o] = `${s}px`
        }

        setPublisherCardContainerStyle(e) {
            const t = r.getContainerWidth(this.origContainer), i = r.getContainerWidth(e),
                o = this.options.feedDynamicParameters,
                n = o && o["disableFeedSplitContainerAlignment"] || this.trcManager.global["disable-feed-split-container-alignment"],
                a = t === i;
            a && n || (a || (e.style.width = t), n || this.setPublisherCardContainerMargin(e))
        }

        registerPublisherCardForHandling(e) {
            this.pendingPublisherCardsList.unshift(e)
        }

        checkIfCardRendered(e, t, i = 0) {
            t.getBoundingClientRect().height < this.feedCardEventsMinContainerHeight ? i < this.feedCardEventsMaxRetries && (i++, setTimeout(this.checkIfCardRendered.trcBind(this, e, t, i), this.feedCardEventsRetryInterval)) : e.handleRenderedCard(t)
        }
    }

    TRC.PublisherCardsManager = r
}(), window.document, TRC.RboxMap = function () {
    var e = 7, t = "14", i = "trc_map", r = {}, o, n = !1;
    return this.isValidForMapping = function (r) {
        var o, n, a, s, l = (new Date).getTime(), c = 1e3 * 60 * 60 * 24 * e;
        if (r) {
            if (!(o = r.getValue(i))) return !0;
            if (n = (s = o.split(";"))[0], (a = s[1]) < t) return r.removeKey(i), !0;
            if (l - n > c) return r.removeKey(i), !0
        }
        return !1
    }, this.setStorage = function () {
        var e = (new Date).getTime();
        try {
            o.setValue(i, e + ";" + t)
        } catch (e) {
        }
    }, this.init = function () {
        try {
            return o = TRC.pageManager.getLocalStorageImplementation("strict-w3c-storage", "local"), this.isValidForMapping(o) ? this : {disabled: !0}
        } catch (e) {
            return {disabled: !0}
        }
    }, this.sendDebugMap = function (e) {
        try {
            n || (n = !0, this.setStorage()), r[e] ? r[e]++ : (r[e] = 1, TRC.modDebug.logMessageToServer(4, e))
        } catch (e) {
        }
    }, this.init()
}, function (e, t) {
    const i = "tbl-forkorts-article", r = ` ${i} ${i}-active`, o = `tbl-read-more-box-btn`, n = {
        de: "Weiterlesen",
        el: "%CE%94%CE%B9%CE%B1%CE%B2%CE%AC%CF%83%CF%84%CE%B5%20%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%83%CF%8C%CF%84%CE%B5%CF%81%CE%B1",
        en: "Read%20More",
        es: "Leer%20M%C3%A1s",
        fr: "Lire%20La%20Suite",
        he: "%D7%A7%D7%A8%D7%90%20%D7%A2%D7%95%D7%93",
        hi: "%E0%A4%94%E0%A4%B0%20%E0%A4%AA%E0%A4%A2%E0%A4%BC%E0%A5%87%E0%A4%82",
        it: "Per%20saperne%20di%20pi%C3%B9",
        jp: "%E7%B6%9A%E3%81%8D%E3%82%92%E8%AA%AD%E3%82%80",
        ko: "%EC%9E%90%EC%84%B8%ED%9E%88%EB%B3%B4%EA%B8%B0",
        nl: "Lees%20Meer",
        pt: "Leia%20Mais",
        ru: "%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B0%D0%BB%D0%B5%D0%B5",
        ta: "%E0%AE%AE%E0%AF%87%E0%AE%B2%E0%AF%81%E0%AE%AE%E0%AF%8D%20%E0%AE%AA%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95",
        th: "%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%A1"
    };

    function a(e, t, i) {
        return i = i || "en", {
            caption: e && e.caption || t && t.caption || n[i] && decodeURIComponent(n[i]) || "Read More",
            boxSelector: e && e.boxSelector || t && t.boxSelector || null,
            threshold: e && e.threshold || t && t.threshold || 1100,
            backgroundColor: e && e.backgroundColor || t && t.backgroundColor || "#fff",
            minimizedSize: e && e.minimizedSize || t && t.minimizedSize || 800,
            scrollSize: e && e.scrollSize || t && t.scrollSize || 800,
            buttonTop: e && e.buttonTop || t && t.buttonTop || 48,
            buttonBottom: e && e.buttonBottom || t && t.buttonBottom || 28,
            divTop: e && e.divTop || t && t.divTop || 38,
            gradient: e && e.gradient || t && t.gradient || 40,
            cutoffType: e && e.cutoffType || t && t.cutoffType || "ARTICLE",
            anchorSelector: e && e.anchorSelector || t && t.anchorSelector || null,
            lengthFromAnchorElementType: e && e.lengthFromAnchorElementType || t && t.lengthFromAnchorElementType || "BELOW",
            lengthFromAnchorElement: e && e.lengthFromAnchorElement || t && t.lengthFromAnchorElement || 30
        }
    }

    function s(e) {
        return `.${i} { max-height: inherit;}.${i}.tbl-forkorts-article-active { max-height: ${e.minimizedSize}px; overflow: hidden; position: relative;}.tbl-read-more-btn { display: inline-block!important; margin: ${e.buttonTop}px 0 ${e.buttonBottom}px !important; line-height: 38px!important; text-align: center!important; white-space: nowrap!important; vertical-align: middle!important; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer!important; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #326891!important; background: #edf2f5 none !important; border: 1px solid #93abbc !important; height: 38px!important; width: 250px!important; font-size: 15px!important; font-weight: bold!important; border-radius: 3px!important; font-family: sans-serif!important;}.tbl-read-more-btn:hover { background-color: #bed0dc!important; border-color: #7399b3!important; color: #326891!important;}.tbl-read-more-box { position: absolute; z-index: 4; left: 0; right:0; bottom: 0; display: none; text-align: center; padding: ${e.divTop}px 12px 12px; background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, ${e.backgroundColor} ${e.gradient}%, ${e.backgroundColor} 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(50%, ${e.backgroundColor}), color-stop(100%, ${e.backgroundColor})); background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, ${e.backgroundColor} ${e.gradient}%, ${e.backgroundColor} 100%); background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, ${e.backgroundColor} ${e.gradient}%, ${e.backgroundColor} 100%); background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, ${e.backgroundColor} ${e.gradient}%, ${e.backgroundColor} 100%); background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, ${e.backgroundColor} ${e.gradient}%, ${e.backgroundColor} 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='${e.backgroundColor}',GradientType=0 );}.${i}-active .tbl-read-more-box{ display:block;}`
    }

    function l() {
        return e.pageYOffset || t.documentElement.scrollTop || t.body.scrollTop
    }

    function c(e) {
        let r = t.querySelector(`.${i}`);
        e.preventDefault(), e.stopPropagation(), r.classList.remove(`${i}-active`), r.style.maxHeight = "", this.sendEvent("readmore", {}, null, !0), TRC.EventsAPI.readmore("click", this.response && this.response.trc)
    }

    function d(e, i) {
        let r = t.createElement("div");
        return r.className = `tbl-read-more-box`, r.innerHTML = `<a id="${o}_${i}" class="tbl-read-more-btn" href="#">${e.caption}</a>`, r
    }

    function h(t, i) {
        const r = e.trc_debug_level;
        e.trc_debug_level = 3, __trcDebug(`Read More : ${t} - ${i}`), e.trc_debug_level = r
    }

    function p(i, r) {
        const o = i.context || r.context;
        "parent" === o && (e = e.parent, t = e.parent.document), "top" === o && (e = e.top, t = e.top.document)
    }

    function u(e, i) {
        const r = i || "kortWidgetCssStyle";
        let o = t.querySelector(`#${r}`);
        o && o.parentNode.removeChild(o), (o = t.createElement("div")).id = r, o.innerHTML = `&shy;<style>${e}</style>`, t.documentElement.appendChild(o)
    }

    function m(e, i, r) {
        let o, n;
        if ("PAGE_ELEMENT" === e.cutoffType && (n = t.querySelector(e.anchorSelector))) {
            const t = n.getBoundingClientRect(), a = i.getBoundingClientRect();
            "ABOVE" === e.lengthFromAnchorElementType ? o = t.top - a.top - e.lengthFromAnchorElement : (o = t.bottom - a.top + e.lengthFromAnchorElement, o += r.getBoundingClientRect().height)
        }
        return o
    }

    function g(n) {
        let g = !1;
        try {
            TRC.tlf && console.time("init Read More");
            const f = a(n.readMorePageConfig, n.readMoreConfig, n.trc.language), b = n.isReadMoreDebug;
            let v, C, y;
            p(n.readMorePageConfig, n.readMoreConfig), e.matchMedia && f.boxSelector ? (C = t.querySelector(f.boxSelector)) ? t.querySelector(`.${i}`) !== C ? C.offsetHeight >= f.threshold && l() < f.scrollSize ? (C.className += r, u(s(f)), v = d(f, n.id), C.appendChild(v), (y = m(f, C, v)) && (C.style.maxHeight = `${y}px`), g = !0, TRC.EventsAPI.readmore("render", n.response && n.response.trc), t.querySelector(`#${o}_${n.id}`).addEventListener("click", c.trcBind(n), !1)) : b && h("dimensions exception", n.mode_name) : b && h("box content already in use", n.mode_name) : b && h("box content not detected", n.mode_name) : b && h("no box selector defined", n.mode_name), TRC.tlf && console.timeEnd("init Read More")
        } catch (e) {
            __trcError("Error read more init", e)
        }
        g || TRC.EventsAPI.readmore("none", n.response && n.response.trc)
    }

    TRC.setReadMore = g
}(window, document), TRC.ScriptRenderer = {
    render: function (e, t) {
        e && e.js ? (e.normalizedTag = TRC.text.htmlUnescape(e.js), this.renderInIframe(this.createIframe(t.container), e)) : __trcError("could not find script to render")
    }, createIframe: function (e) {
        if (!e) return void __trcError("could not find container to create Iframe within");
        let t = document.createElement("iframe");
        return t.style.border = t.frameBorder = t.border = "0", t.style.display = "block", t.scrolling = "no", e.appendChild(t), t
    }, renderInIframe: function (e, t) {
        if (!e) return void __trcError("could not find iframe to render within");
        let i = e.contentWindow || e.contentDocument;
        i.document && (i = i.document), this.setOuterIframeStyle(e, t), this.runTagInIframe(i, t.normalizedTag), this.resetStyleInIframe(i)
    }, setOuterIframeStyle: function (e, t) {
        e.style.width = t.w || "0px", e.style.height = t.h || "0px"
    }, runTagInIframe: function (e, t) {
        void 0 !== t && null !== t ? (e.open(), e.write(t), e.close()) : __trcError("could not find normalizedTag to render")
    }, resetStyleInIframe: function (e) {
        let t = e.createElement("style"), i = "body { margin: 0px }";
        t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = i : t.appendChild(e.createTextNode(i)), e.getElementsByTagName("head")[0].appendChild(t)
    }
}, function () {
    TRC.SingleVideoManagerUnitLoader = function e(t, i) {
        this.trcManager = i, this.videoConfig = t, this.parentFeedOptions = t.parentFeedOptions
    }, TRC.SingleVideoManagerUnitLoader.prototype.loadUnit = function (videoCallbackData) {
        var unit;
        return unit = eval(videoCallbackData.tags[0].url), this.setUnitParams(unit), unit
    }, TRC.SingleVideoManagerUnitLoader.prototype.getVideoContainerSelector = function () {
        return null
    }, TRC.SingleVideoManagerUnitLoader.prototype.setUnitParams = function (e) {
        var t = this.videoConfig.distanceRepeat || 0, i = TRC.util.isTrue(this.videoConfig.startFromSlider),
            r = TRC.util.isTrue(this.videoConfig.detachToSlider),
            o = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation), n = this.videoConfig.videoAbTest || null,
            a = this.videoConfig.startCard || null, s = this.videoConfig.maxVideoCards || null,
            l = this.videoConfig.permanentCard || null, c = this.videoConfig.aggLevel || 1, d = {level: c},
            h = this.parentFeedOptions.feedDynamicParameters,
            p = h && h["videoDisclosurePosition"] || this.parentFeedOptions.videoDisclosurePosition || this.trcManager.global["video-disclosure-position"],
            u = this.parentFeedOptions && this.parentFeedOptions["uiDesignVersion"];
        e.set("distanceRepeat", t), e.set("detachToSlider.isStartFromSlider", i), e.set("detachToSlider.isDetachToSlider", r), e.set("detachToSlider.animation", o), e.set("abTest", n), i && e.on("filledImpression", function () {
            TRC.dispatch("videoSliderReady")
        }), c > 1 && e.set("preset", d), a && e.set("startCard", a), s && e.set("maxVideoCards", s), l && e.set("permanentCard", l), p && e.set("components.adChoice.position", p), u >= 3 && (e.set("components.adChoice.title.style.color", "#999999"), e.set("components.adChoice.title.logoStyle.display", "none"))
    }
}(), function (e, t) {
    const i = "trc_slider", r = `${i}_animate`, o = "vertical", n = "horizontal", a = "top", s = "bottom", l = "left",
        c = "right", d = 44;

    class h {
        constructor(e) {
            let r = t.createElement("div"), o = TRC.dom.createAugmentingContainers(3, r),
                n = TRC.dom.generateAugmentationPrefix(o);
            this.rbox = e, this.sliderContainer = r, this.accumulatedScroll = 0, this.getConfiguration(), this.lastScrollTop = this.getScrollTop(), this.calcSlideDirection(), TRC.dom.injectStyle(this.createCSS(n)), TRC.dom.addClass(this.sliderContainer, i), TRC.dom.addClass(this.sliderContainer, `trc_slider_slide_from_${this.slideFrom}`), TRC.dom.addClass(this.sliderContainer, `trc_slider_${this.slideDirection}`), this.createCloseBtn(), this.sliderContainer.appendChild(e["outermostContainer"]), t.body.appendChild(o[0]), this.listenToRBoxRender()
        }

        getConfiguration() {
            let e = this.rbox;
            this.scrollRefElement = e.trc.getFunction(e.mode_name, "slider-scroll-ref-element", e.propertiesOverride), this.slideFrom = e.trc.getProperty(e.mode_name, "slider-slide-from"), this.minEffectiveScrollSize = e.trc.getProperty(e.mode_name, "slider-min-effective-scroll-size"), this.transitionDuration = e.trc.getProperty(e.mode_name, "slider-transition-duration"), this.transitionDelay = e.trc.getProperty(e.mode_name, "slider-transition-delay"), this.backgroundColor = e.trc.getProperty(e.mode_name, "slider-background-color"), this.closeBtnFontSize = e.trc.getProperty(e.mode_name, "slider-close-btn-font-size"), this.closeBtnSize = e.trc.getProperty(e.mode_name, "slider-close-btn-size"), this.closeBtnColor = e.trc.getProperty(e.mode_name, "slider-close-btn-color"), this.sliderZIndex = parseInt(e.trc.getProperty(e.mode_name, "slider-z-index"), 10)
        }

        calcSlideDirection() {
            switch (this.slideFrom) {
                case a:
                case s:
                    this.slideDirection = o;
                    break;
                case l:
                case c:
                    this.slideDirection = n
            }
        }

        listenToRBoxRender() {
            TRC.eventDelegator.subscribe("onrender", () => {
                this.slideOut(), TRC.dom.on(this.scrollRefElement, "scroll", this.sliderScrollHandler.trcBind(this).trcThrottle(10)), (/(iPad|iPhone|iPod touch);.*CPU.*OS ([4567])_\d/.test(navigator.userAgent) || /CriOS/.test(navigator.userAgent)) && (TRC.dom.on(e, "touchstart", this.sliderScrollHandler.trcBind(this)), TRC.dom.on(e, "touchend", this.sliderScrollHandler.trcBind(this)), TRC.dom.on(e, "touchmove", this.sliderScrollHandler.trcBind(this))), setTimeout(() => {
                    TRC.dom.addClass(this.sliderContainer, r)
                }, 0)
            }, this.rbox.container.id)
        }

        isBrowserPinchZoomed() {
            const t = 10;
            return TRC.Device.isTouchDevice && Math.abs(Math.round(this.sliderContainer.clientWidth) - Math.round(e.innerWidth)) > t
        }

        sliderScrollHandler() {
            let i = this.getScrollTop(), r = "up", o = "down", n, a,
                s = t.body.scrollHeight - (e.innerHeight || t.documentElement.clientHeight);
            if (this.isBrowserPinchZoomed()) return this.slideOut(), !0;
            i > this.lastScrollTop ? n = o : i < this.lastScrollTop && (n = r), i >= 0 && (this.scrollRefElement !== e || i <= s) && (this.lastScrollDir !== n && (this.accumulatedScroll = 0), a = n === o ? -1 : 1, this.accumulatedScroll += (this.lastScrollTop - i) * a, this.accumulatedScroll >= this.minEffectiveScrollSize && (n === r ? this.sliderShown || this.slideIn() : n === o && this.slideOut()), this.lastScrollTop = i, this.lastScrollDir = n, clearTimeout(this.scrollAccumulationTimer), this.scrollAccumulationTimer = setTimeout(() => {
                this.accumulatedScroll = 0
            }, 200))
        }

        getScrollTop() {
            return TRC.dom.getScrollTop(this.scrollRefElement)
        }

        closeClickHandler() {
            TRC.dom.addClass(this.sliderContainer, "trc_user_closed"), this.rbox.sendEvent("close", {}, null, !0)
        }

        createCSS(e) {
            const t = TRC.css.utils.generateCssRuleWithVendorPrefixes,
                i = this.slideDirection === o ? "translateY" : "translateX",
                r = -1 !== [s, c].indexOf(this.slideFrom) ? "100%" : "-100%";
            return `${e}.trc_slider { position: fixed; z-index: ${this.sliderZIndex};}${e}.trc_slider .trc_related_container { padding: 5px 5px 0;}${e}.trc_slider.trc_user_closed { display: none;}${e}.trc_slider_close_btn { font-family: Arial, helvetica, sans-serif; float: right; font-size: ${this.closeBtnFontSize}; font-weight: bold; height: ${this.closeBtnSize}; width: ${this.closeBtnSize}; line-height: ${this.closeBtnSize}; vertical-align: baseline; text-align: center; color: ${this.closeBtnColor}; background-color: ${this.backgroundColor};}${e}.trc_slider_slide_from_top .trc_slider_close_btn { position: absolute; right: 0; top: 0; z-index: ${this.sliderZIndex + 1};}${e}.trc_slider_close_touch_padding { position: absolute; right: 0; top: 0; height: ${d}px; width: ${d}px; z-index: ${this.sliderZIndex + 2};}${e}.trc_slider { ${this.slideFrom}: 0; ${t("transform", `${i}(${r})`)}}${e}.trc_slider.trc_slide_in { ${t("transform", `${i}(0)`)}}${e}.trc_slider.trc_slider_animate { ${t("transition-duration", `${this.transitionDuration}ms`)} ${t("transition-delay", `${this.transitionDelay}ms`)} ${t("transition-property", "transform")}}@media only screen and (max-device-width: 600px) and (orientation: landscape) { ${e}.trc_slider.trc_slide_in { ${t("transform", `${i}(${r})`)} }}${e}.trc_slider.trc_slider_vertical { width: 100%; left: 50%; margin-left: -50%;}${e}.trc_slider.trc_slider_horizontal { bottom: 0;}${e}.trc_slider .trc_related_container { background-color: ${this.backgroundColor};}`
        }

        createCloseBtn() {
            let e = t.createElement("div");
            e.innerHTML = "&times;", TRC.dom.addClass(e, "trc_slider_close_btn"), this.sliderContainer.appendChild(e);
            const i = TRC.Device.isTouchDevice && parseInt(this.closeBtnSize, 10) < d;
            let r;
            if (i) {
                let e = t.createElement("div");
                TRC.dom.addClass(e, "trc_slider_close_touch_padding"), this.sliderContainer.appendChild(e), r = e
            } else r = e;
            TRC.dom.addClass(r, "trc_slider_close_click_target"), TRC.dom.on(r, "click", this.closeClickHandler.trcBind(this))
        }

        slideIn() {
            TRC.Browser.compatibility.cssTransforms ? /trc_slide_in/.test(this.sliderContainer.className) || TRC.dom.addClass(this.sliderContainer, "trc_slide_in") : this.sliderContainer.style[this.slideFrom] = "0px", this.sliderShown = !0
        }

        slideOut() {
            const e = this.slideDirection === n ? "clientWidth" : "clientHeight";
            TRC.Browser.compatibility.cssTransforms ? TRC.dom.removeClass(this.sliderContainer, "trc_slide_in") : this.sliderContainer.style[this.slideFrom] = `-${this.sliderContainer[e]}px`, this.sliderShown = !1
        }
    }

    TRC.SliderManager = h
}(window, document), function (e, t) {
    TRC.SpotlightLoader = {
        load: function (e) {
            this.shouldLoad(e) && (this.loadedScript ? TRC.dispatch("trc_afterRboxDraw") : (__trcDebug("Detected Spotlight Administrator(" + e.trc["pi"] + ")"), TRC.backstageDomainPrefix = e.trc["bdp"], this.loadedScript = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + "resources/js/1.1.0/spotlight.js", TRC.PROTOCOL), TRC.Manager.prototype.loadExternal(this.loadedScript, "js")))
        }, shouldLoad: function (e) {
            return !(!t.querySelectorAll || TRC.Device.isTouchDevice || !e || !e.trc || "1" != e.trc["sl"])
        }, registerOnMainContainer: function (e, t) {
            e && this.shouldLoad(t) && e.setAttribute("data-spotlight-publisher-id", t.trc["pi"])
        }
    }
}(window, document), function () {
    TRC.StandaloneVideoUnitLoader = function e(t, i) {
        this.videoConfig = t, this.options = i
    }, TRC.StandaloneVideoUnitLoader.prototype.loadUnit = function (videoCallbackData, videoContainer) {
        var unit;
        return this.setCmTag(videoContainer), unit = eval(videoCallbackData.tags[0].url), this.setupVideo(videoContainer, unit), unit
    }, TRC.StandaloneVideoUnitLoader.prototype.getVideoContainerSelector = function (e) {
        return e && e.id ? "#" + e.id : (__trcWarn("Cannot get a selector for standalone video container - Taboola publisher container must be defined and have an ID"), null)
    }, TRC.StandaloneVideoUnitLoader.prototype.setCmTag = function (e) {
        window["cmTag"].set("isCustomEvents", !0), window["cmTag"].set("width", e.getBoundingClientRect().width), window["cmTag"].set("customization", this.options.videoCssCustomization)
    }, TRC.StandaloneVideoUnitLoader.prototype.setupVideo = function (e, t) {
        var i = !1, r = TRC.util.isTrue(this.videoConfig.startFromSlider),
            o = TRC.util.isTrue(this.videoConfig.detachToSlider),
            n = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation), a = function () {
                !i && TRC.visibility.isInViewPortWithOffset(e, -50) && (t.play(e), i = !0, TRC.dispatch("trcContentReady", {container: e}), TRC.dom.off(window, "scroll", a))
            };
        t.set("detachToSlider.isStartFromSlider", r), t.set("detachToSlider.isDetachToSlider", o), t.set("detachToSlider.animation", n), t.on("ready", function () {
            a(), i || TRC.dom.on(window, "scroll", a)
        })
    }
}(), function () {
    var e = TRC.taboolaConnect = {}, t = !1, i = {};

    function r(e, t) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
    }

    function o(e, t) {
        "available" === t && TRC.dispatch("available::" + e.placementName, {container: e.container}), "click" === t && TRC.dispatch("click::" + e.placementName)
    }

    function n(e, t) {
        var i;
        return e.indexOf("#") > 0 ? e.replace("#", "#tbcId=" + t + "&") : e + "#tbcId=" + t
    }

    function a(e, t) {
        var i = e.indexOf("?"), r = t || window.navigator.language;
        return i > 0 ? e.replace("?", "?lang=" + r + "&") : e + "?lang=" + r
    }

    function s(e, t, i) {
        var r = t.config["max-height"] && parseInt(t.config["max-height"]);
        r && parseInt(i.height) > r && (i.height = r), e.height = e.style.height = parseInt(i.height) + "px"
    }

    e.createIframe = function (e, t, o, s, l, c) {
        if (e) {
            var d = o || {}, h = Math.floor(2147483648 * Math.random()).toString(36),
                p = document.createElement("iframe");
            return d.attributes && r(d.attributes, p), p.style.border = p.frameBorder = p.border = "0", p.style.display = "block", p.style.height = parseInt(o.height) ? parseInt(o.height) + "px" : "0px", p.style.width = "100%", p.scrolling = "no", p.sandbox = d.sandbox || "allow-same-origin allow-scripts allow-popups allow-forms", p.src = n(a(t, c), h), i[h] = {
                origin: s,
                placementName: l,
                frame: p,
                config: o,
                container: e
            }, e.innerHTML = "", e.appendChild(p), p
        }
        __trcError("could not find container to create Iframe within")
    }, e.receiveMessage = function (e, t) {
        var r = t.data, o;
        r && i[r.id] && ((void 0 === e.origin ? i[r.id].origin : e.origin) === t.origin && this[r.action] && this[r.action](r.payload ? r.payload : {sizeObject: r.sizeObject}, i[r.id]))
    }, e.getOrigin = function (e) {
        return e.match(/^(https:|http:)?\/\/[^/]+/i)[0]
    }, e.postMessage = function (e, t, i) {
        e.contentWindow.postMessage(t, i)
    }, e.rendered = function (t, i) {
        var r = i.frame, n = i.container, a;
        s(r, i, t.sizeObject), n.className += " tbl-feed-card", o(i, "available"), e.postMessage(r, {
            action: "rendered",
            message: "rendered done",
            dimension: {height: r.style.height}
        }, "*")
    }, e.expand = function (t, i) {
        var r = i.frame, o;
        s(r, i, t.sizeObject), e.postMessage(r, {
            action: "expand",
            message: "expand done",
            dimension: {height: r.style.height}
        }, "*")
    }, e.click = function (t, i) {
        var r = i.frame, n = t.sizeObject;
        n && s(r, i, n), o(i, "click"), e.postMessage(r, {
            action: "click",
            message: "click done",
            dimension: {height: r.style.height}
        }, "*")
    }, e.collapse = function (t, i) {
        var r = i.frame, o;
        s(r, i, t.sizeObject), e.postMessage(r, {
            action: "collapse",
            message: "collapse done",
            dimension: {height: r.style.height}
        }, "*")
    }, e.maxHeight = function (t, i) {
        var r = i.frame, o = i.config["max-height"] ? i.config["max-height"] : "";
        e.postMessage(r, {action: "maxHeight", message: o, dimension: {height: r.style.height}}, "*")
    }, e.createCard = function (e, i, r, o, n) {
        var a = this.getOrigin(r.origin || i);
        a ? (t || (window.addEventListener("message", this.receiveMessage.bind(this, r), !1), t = !0), this.createIframe(e, i, r, a, o, n)) : __trcError("non valid origin for third party card")
    }
}(), function (e, t) {
    TRC.text = {
        replaceAll: function (e, t, i, r) {
            var o;
            return void 0 !== t && void 0 !== i && t !== i ? (o = new RegExp(t, "gi"), e.replace(o, "function" == typeof i && "object" == typeof r ? i.trcBind(r) : i)) : e
        }, lsplit: function (e, t, i) {
            var r = e.split(t);
            return r.slice(0, i - 1).concat(r.length >= i ? r.slice(i - 1).join(t) : [])
        }, parseCSV: function (e) {
            for (var t = e.split(","), i = []; t.length;) {
                var r = t.shift();
                if ('"' == r[0]) {
                    do {
                        if ('"' == r.slice(1).replace(/""/g, "").slice(-1)) break;
                        r += "," + t.shift()
                    } while (t.length);
                    i.push(r.slice(1, r.length - 1).replace(/""/g, '"'))
                } else i.push(r)
            }
            return i
        }, toStringList: function (e) {
            if (!e) return [];
            if (!(e instanceof Array)) return ["" + e];
            var t = [];
            return e.forEach(function (e) {
                e && t.push("" + e)
            }), t
        }, htmlUnescape: function (e) {
            return String(e).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#34;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        }, encodeHTML: function (e) {
            return "string" == typeof e && e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
    }
}(window, document), function () {
    function e(e, t) {
        TRC.FeedReportingServiceBase.call(this, e, t), this.visibleCardsMap = {}, this.cardIndexToRequestId = {}, this.eventIntervals = t.global["card-observer-intervals"] || this.eventIntervals, this.defaultInterval = t.global["card-observer-default-interval"] || this.defaultInterval
    }

    e.prototype = Object.create(TRC.FeedReportingServiceBase.prototype), e.prototype.constructor = e, e.prototype.cardVisibleHandler = function (e) {
        var t = this._getCardData(e) || this._createCardData(e);
        t.isVisible || this._updateCardData(e, {isVisible: !0, viewCount: t.viewCount + 1, visibleTs: Date.now()})
    }, e.prototype.cardInvisibleHandler = function (e) {
        var t = this._getCardData(e);
        t && t.isVisible && 1 !== this.state && t.visibleTs && this._updateCardData(e, {
            accumulatedDisplayDuration: t.accumulatedDisplayDuration + (Date.now() - t.visibleTs),
            lastVisibilityDurationReported: !1,
            isVisible: !1
        })
    }, e.prototype.cardAddedHandler = function (e, t) {
        TRC.FeedReportingServiceBase.prototype.cardAddedHandler.call(e, t);
        var i = parseInt(e.getAttribute("data-card-index"), 10);
        this.cardIndexToRequestId[i] = t.trcResponse.ri
    }, e.prototype.update = function () {
        TRC.FeedReportingServiceBase.prototype.updateTimeOnFeed.call(this);
        var e = {}, t;
        for (t in this.visibleCardsMap) if (this.visibleCardsMap.hasOwnProperty(t)) {
            var i = this._cardTocData(t);
            i && (e[i.requestId] = {toc: i.toc, vc: i.vc})
        }
        Object.keys(e).length > 0 && this.sendUpdate(e)
    }, e.prototype._cardTocData = function (e) {
        var t = null, i = 0, r = this.visibleCardsMap[e], o = r.visibleTs, n = r.viewCount,
            a = r.accumulatedDisplayDuration, s = r.isVisible, l = r.lastVisibilityDurationReported,
            c = this.cardIndexToRequestId[e];
        return (s || a >= 0 && !l) && (s && (i = Date.now() - o, this._updateCardData(e, {accumulatedDisplayDuration: i + a}), 1 === this.state && this._updateCardData(e, {isVisible: !1})), this._updateCardData(e, {lastVisibilityDurationReported: !0}), t = {
            requestId: c,
            toc: this._getCardData(e).accumulatedDisplayDuration,
            vc: n
        }), t
    }, e.prototype._updateCardData = function (e, t) {
        for (var i in t) t.hasOwnProperty(i) && (this.visibleCardsMap[e][i] = t[i])
    }, e.prototype._getCardData = function (e) {
        return this.visibleCardsMap[e]
    }, e.prototype._createCardData = function (e) {
        return this.visibleCardsMap[e] = {
            requestId: this.cardIndexToRequestId[e],
            viewCount: 0,
            accumulatedDisplayDuration: 0,
            visibleTs: 0,
            isVisible: !1,
            lastVisibilityDurationReported: !1
        }, this.visibleCardsMap[e]
    }, e.prototype.sendUpdate = function (e) {
        var t = {d: __trcJSONify(e)};
        this.trcManager.sendEvent("card", t)
    }, TRC.TimeOnCardService = e
}(), function () {
    function e(e, t) {
        TRC.FeedReportingServiceBase.call(this, e, t), this.visibleCardsMap = {}, this.maxDepth = 0, this.eventIntervals = t.global["feed-observer-intervals"] || this.eventIntervals, this.defaultInterval = t.global["feed-observer-default-interval"] || this.defaultInterval
    }

    e.prototype = Object.create(TRC.FeedReportingServiceBase.prototype), e.prototype.constructor = e, e.prototype.cardVisibleHandler = function (e) {
        this.maxDepth = Math.max(e, this.maxDepth), this.visibleCardsMap[e] = !0
    }, e.prototype.cardInvisibleHandler = function (e) {
        delete this.visibleCardsMap[e]
    }, e.prototype.stop = function () {
        TRC.FeedReportingServiceBase.prototype.stop.call(this), this.visibleCardsMap = {}
    }, e.prototype.update = function () {
        TRC.FeedReportingServiceBase.prototype.updateTimeOnFeed.call(this);
        var e = 0;
        Object.keys(this.visibleCardsMap).map(function (t) {
            var i = +t;
            e = Math.max(i, e)
        }), this.sendUpdate(e)
    }, e.prototype.sendUpdate = function (e) {
        var t = {tof: Math.floor(this.timeOnFeed / 1e3), dpt: e, mdpt: this.maxDepth};
        this.trcManager.sendEvent("feed", t)
    }, TRC.TimeOnFeedService = e
}(), function () {
    function e(e, r) {
        var o, n;
        i(n = document.createElement("span"), "span"), o = t(r), n.appendChild(o), e.appendChild(n)
    }

    function t(e) {
        var t = document.createElement("iframe");
        return i(t, "iFrame"), t.src = "javascript:'<html><head>" + e.join("\n") + "</head><body></body></html>'", t.jsScriptTagList = e, t
    }

    function i(e, t) {
        e.id = "script-tracking-" + t + "-" + parseInt(1e4 * Math.random(), 10), e.name = e.id, e.width = 0, e.height = 0, e.style.display = "none"
    }

    TRC.TrackingScriptLoader = {
        TRC_SCRIPT_TAGS_ATTRIBUTE: "viewability-tags",
        renderScriptTagIntoVideoBox: function (t, i) {
            try {
                t && i && i[this.TRC_SCRIPT_TAGS_ATTRIBUTE] && i[this.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0 ? e(t, i[this.TRC_SCRIPT_TAGS_ATTRIBUTE]) : __trcDebug("renderScriptTagIntoVideoBox: videoBox/recommendation is null or TRC_SCRIPT_TAGS_ATTRIBUTE not exist")
            } catch (e) {
                __trcError("failed to add JS script tracking to single videoBox Container")
            }
        }
    }
}(), function (e, t) {
    TRC.TrcCache = function (e, t) {
        var i = TRC.pageManager, r = e.storageType || "session",
            o = i.getLocalStorageImplementation("strict-w3c-storage", r), n = 0, a, s = e.cacheSize || 5,
            l = e.ttl || 1e3 * 60 * 20, c = e.disableFeedCache, d = e.cacheName || "trc_cache", h = "trc_cache_active";
        if (!o) return {isValidCache: !1};
        this.extractKey = function (e) {
            for (var t, i, r = e.it + "=" + e.ii, o = [], n = 0; n < e.r.length; n++) o.push("," + e.r[n].uip + "=" + e.r[n].uim);
            return this.sortByPlacements(o), r += o.join()
        }, this.cacheResponse = function (e, t) {
            TRC.tlf && console.time("in cacheResponse");
            var i = this.setCacheResponse(e, t);
            return n > s && this.removeToLimit(), o.setValue(d, __trcJSONify(a.getData())), TRC.tlf && console.timeEnd("in cacheResponse"), i
        }, this.setCacheResponse = function (e, t) {
            var r = (new Date).getTime(), o;
            try {
                (o = this.getFeedRelatedResponseFromCache(a, e, t)) ? this.addNewFeedCardsToCachedResponse(t.trc.vl, o.r.trc.vl) : (a.setValue(e, {
                    s: r,
                    r: t,
                    vi: i.getPageData()
                }), n++, this.setCacheClean(e))
            } catch (e) {
                return !1
            }
            return !0
        }, this.getCacheResponse = function (e) {
            var t;
            return TRC.tlf && console.time("in getCacheResponse"), a.getValue(e) && !this.isOverTtl(a.getValue(e).s) ? (TRC.tlf && console.timeEnd("in getCacheResponse"), {
                response: a.getValue(e).r,
                viewId: a.getValue(e).vi
            }) : (TRC.tlf && console.timeEnd("in getCacheResponse"), null)
        }, this.isOverTtl = function (e) {
            var t;
            return (new Date).getTime() - e > l
        }, this.setCacheClean = function (e) {
            TRC.Timeout.set(function () {
                TRC.tlf && console.time("in setCacheClean"), a.removeKey(e), o.setValue(d, __trcJSONify(a.getData())), TRC.tlf && console.timeEnd("in setCacheClean")
            }, l)
        }, this.cleanCache = function (e) {
            for (var t = e || TRC.util.keys(a.getData()), i, r = 0; r < t.length; r++) i = t[r], this.isOverTtl(a.getValue(i).s) && this.removeKey(i);
            o.setValue(d, __trcJSONify(a.getData()))
        }, this.removeKey = function (e) {
            a.getValue(e) && (a.removeKey(e), n--)
        }, this.getTrcCache = function () {
            var e = o.getValue(d) || {};
            try {
                if (e) return i.getDummyStorage(TRC.util.jsonParseWithNative(e))
            } catch (e) {
                return i.getDummyStorage()
            }
        }, this.removeToLimit = function (e) {
            e = e || TRC.util.keys(a.getData());
            var t = n - s, i;
            this.sortByStamp(e);
            for (var r = 0; r < t; r++) i = e.shift(), this.removeKey(i)
        }, this.sortByPlacements = function (e) {
            for (var t, i, r = 1; r <= e.length - 1; ++r) {
                for (t = e[r], i = r; i > 0 && e[i - 1] >= t;) e[i] = e[i - 1], --i;
                e[i] = t
            }
        }, this.sortByStamp = function (e) {
            for (var t, i, r, o = 1; o <= e.length - 1; ++o) for (t = a.getValue(e[o]).s, r = o; r > 0 && a.getValue(e[r - 1]).s >= i;) i = e[r], e[r] = this.keys[r - 1], e[r] = i, --r
        }, this.init = function () {
            var e;
            TRC.tlf && console.time("in init cache trc"), t ? o.removeKey(d) : (a = this.getTrcCache(), e = TRC.util.keys(a.getData()), n = e.length, this.cleanCache(e), n > s && this.removeToLimit(e), TRC.tlf && console.timeEnd("in init cache trc"))
        }, this.enableCacheViaStorageFlag = function () {
            o.setValue(h, "true")
        }, this.isCacheEnabledViaStorageFlag = function () {
            return "true" === o.getValue(h)
        }, this.getFeedRelatedResponseFromCache = function (e, t) {
            var i = e.getValue(t), r, o, n;
            if (!c) {
                if (i) return i;
                if (r = e.getData(), !((o = t.split(",")).length > 2)) for (var a in r) if (r.hasOwnProperty(a) && (n = a.split(","), o[0] === n[0] && n.indexOf(o[1]) > 0)) return r[a]
            }
        }, this.addNewFeedCardsToCachedResponse = function (e, t) {
            e.forEach(function (e) {
                for (var i, r = 0; r < t.length; r++) if (e.uip === t[r].uip) {
                    i = !0;
                    break
                }
                i || t.push(e)
            })
        }, this.isValidCache = !0, this.init()
    }
}(window, document), function () {
    let e;
    (TRC.TrcEventsLogger = {}).sendPlacementEvent = function (e, t, i, r, o, n, a, s) {
        let l = !1, c = t.trcResponse, d = t.globalTrcResponseJSON, h = c.ri, p = d.sd, u = t.placement,
            m = Math.floor(1e5 * Math.random()), g = {
                ri: h,
                sd: e.getSessionData(p),
                ui: TRC.pageManager.getValue("user-id"),
                pi: e.getItemId(),
                wi: d.wi,
                pt: e.getItemType(),
                vi: t.cachedViewId || TRC.pageManager.getPageData()
            }, f = function () {
                l || (l = !0, a && a())
            };
        t.cachedViewId && (g.cache = "1"), __trcCopyProps(r, g), n ? (TRC.pConsole(u, "info", `sending event type: ${i}`, g, "object"), e.log1(i, g, o, f, u)) : e.logTrcEvent(i, g, o, f);
        const b = null;
        TRC.performance && "card-visible" === i && TRC.performance.mark(`11.0.${m}`, b, u, h, "card-visible", TRC.PerfEvenType.MARK), "number" == typeof s && TRC.Timeout.set(f, s)
    }
}(), function (e, t) {
    TRC.TRCParser = {
        parseModeName: function (e) {
            return e.mode || null
        }, parsePlacementName: function (e) {
            return e.placement || null
        }, parseABModeName: function (e, t) {
            var i = this.parseTestVariant(t);
            return null === i ? null : "ab_" + e + "_" + i
        }, parseBaseModeName: function (e) {
            if ("object" != typeof e) return null;
            var t = e["video-list"];
            return "object" == typeof t && t["base-mode"] ? t["base-mode"] : null
        }, parseTestVariant: function (e) {
            var t;
            return "object" != typeof e ? null : (t = e["video-list"], e.uvpw && "object" == typeof t && t["test-variant"] ? t["test-variant"] : void 0 === e["test-variant"] ? null : e["test-variant"])
        }, IsBaseModeAndABModeExist: function (e) {
            var t = this.parseBaseModeName(e), i = this.parseTestVariant(e);
            return !(!t || !i)
        }, parseBaseModeAndABModeName: function (e) {
            var t = this.parseTestVariant(e), i = this.parseBaseModeName(e);
            return null !== i && null !== t ? "ab_" + i + "_" + t : null
        }, getItemCount: function (e) {
            return e["video-list"].video.length
        }, hasVariantMismatch: function (e) {
            var t = e["test-variant"], i = e["video-list"]["test-variant"];
            return !(!t || !i) && t !== i
        }
    }
}(window, document), function (win, doc) {
    var TRANSPORT_FORM_ELEMENT = "trc-transport-form-element",
        Manager = TRC.Manager = function (configuration, globalParams) {
            this.totalModeCounter = 0, this.renderedModeCounter = 0;
            var TRC_REQUEST_DELAY = 500;

            function isYieldingEnabled(e, t) {
                var i;
                if ((t ? t.global : {})["disable-yield"]) return !1;
                if (TRC.URL.prototype.getParameter.call(win.location.href, "yield-batch")) return !0;
                for (var r in e) {
                    var o;
                    if (void 0 !== e[r].modeGroupOrder) return !0
                }
                return !1
            }

            function pushRboxTrackingMode() {
                if (document.body) {
                    var e = "rbox-tracking", t = e + "-div";
                    if (!document.getElementById(t)) {
                        var i = document.createElement("div");
                        i.id = t, document.body.appendChild(i).style.display = "none"
                    }
                    win._taboola.push({mode: e, container: t})
                }
            }

            return this.numOfResetCssDivs = 3, this.eventLogger = [], this.eventCounter = {}, this.NO_CONTENT = {
                noItems: "NO_ITEMS",
                mute: "MUTE",
                error: "ERROR",
                timeOut: "TIMEOUT"
            }, this.feeds = {}, this.cloudinarySortedRatios, this.cachedResponses = {}, this.loadedJsTags = [], this.pendingRequests = [], this.iframePixelReporter, this.reset = function () {
                for (var e in this.reset = !0, TRC.dispatch("trcReset"), this.daisyChainReset(), this.clearPageElements(), this.widgetContainerReset(), this.feedContainerReset(), TRC.callbacks) TRC.callbacks.hasOwnProperty(e) && e.search("recommendations") >= 0 && (TRC.callbacks[e] = function () {
                });
                this.preloadRequestLoader && (TRC.Timeout.clear(this.preloadRequestLoader.timeout), this.preloadRequestLoader.parentNode.removeChild(this.preloadRequestLoader), this.preloadRequestLoader = null);
                try {
                    delete win.trc_video_id, delete win.trc_article_id, delete win.trc_item_url, delete win.trc_testmode, delete win.trc_adPlayer
                } catch (e) {
                    win.trc_video_id = null, win.trc_article_id = null, win.trc_item_url = null, win.trc_testmode = null, win.trc_adPlayer = null
                }
            }, this.renderRBox = function (e, t) {
                var i = document.trcGetParentByClassName(e.getContainer(), "trc_rbox_container");
                i.style.display = "block", e.load(function () {
                    i.style.display = "none"
                }, t)
            }, this.getConfig = function (e, t) {
                return void 0 !== e[t] ? e[t] : void 0 !== win["trc_" + t] && null != win["trc_" + t] ? e[t] = win["trc_" + t] : (void 0 !== this[t] && this[t], e[t] = this[t])
            }, this.getItemId = function () {
                var e = this.itemid;
                return win.trc_video_id || "" == win.trc_video_id ? e = win.trc_video_id : (win.trc_article_id || "" == win.trc_article_id) && (e = win.trc_article_id), "" == e && (e = this.getAutoItemMeta("item-id", null, this.urlPreNormalizer, this["normalize-item-id"])), this.itemid = e
            }, this.getGlobalRequestId = function () {
                return TRC.events_ri
            }, this.getGlobalSessionData = function () {
                return TRC.session_data
            }, this.getSessionId = function () {
                return this.sessionId
            }, this.getPlatformCode = function () {
                return TRC.platform_code
            }, this.getReferrer = function () {
                var e = "";
                if (this.referrer) return this.referrer;
                this.referrer = function () {
                    for (var e = document.head.getElementsByTagName("link"), t = 0; t < e.length; t++) if ("referrer" == e[t].rel) return e[t].href;
                    return null
                }();
                try {
                    e = decodeURI(top.window.document.referrer)
                } catch (t) {
                    e = "", __trcDebug("TRC.Manager.getReferrer : rendering in cross domain iframe")
                }
                return this.referrer = this.referrer ? this.referrer : e && !/https?:\/\/(\w+)\.taboola(syndication)?\.com/.test(e) ? e.substr(0, 400) : e.split("?")[0]
            }, this.getItemUrlQueryString = function () {
                if (this.itemUrlQueryString) return this.itemUrlQueryString;
                var e = TRC.pageManager.getTopMostWindow(), t = this.global["item-query-string-max-length"] || 400, i;
                return this.itemUrlQueryString = e.location.search, this.itemUrlQueryString.length > t && (i = this.itemUrlQueryString.substring(0, t - 1), this.itemUrlQueryString = i.substring(0, i.lastIndexOf("&"))), this.itemUrlQueryString
            }, this.getListSize = function (e) {
                return e.visible ? this.calculateAutoListSize(e) : 0
            }, this.getExtraResponsiveRecom = function (e) {
                var t = this.getProperty(e.mode_name, "responsive-extra-columns"),
                    i = this.getProperty(e.mode_name, "rows");
                return t ? t * (i || 1) : 0
            }, this.getResponsiveRecommendations = function (e) {
                var t, i = 0, r, o, n, a = "function" == typeof win["matchMedia"];
                t = this.getMatchMediaRuleMaxWidth(e, a);
                for (var s = 0, l = e.length; s < l; s++) r = (n = e[s]).cells * n.rows, o = a && (win["matchMedia"]("(min-width: " + n.minWidth + "px)" + (isNaN(n.maxWidth) ? "" : " and (max-width: " + n.maxWidth + "px)")).matches || win["matchMedia"]("screen and (min-height: " + n.minWidth + "px)" + (isNaN(n.maxWidth) ? "" : " and (max-height: " + n.maxWidth + "px)") + " and (orientation: portrait)").matches), (isNaN(t) || n.minWidth <= t || t < 0 || o) && i < r && (i = r);
                return {listSize: i, rule: i ? n : null}
            }, this.getMatchMediaRuleMaxWidth = function (e, t) {
                var i, r;
                if (!t) return screen.width;
                for (var o = 0, n = e.length; o < n; o++) if (r = e[o], (i = win["matchMedia"]("screen and (min-device-width: " + r.minWidth + "px)" + (isNaN(r.maxWidth) ? "" : " and (max-device-width: " + r.maxWidth + "px)"))).matches) return r.maxWidth
            }, this.calculateAutoListSize = function (e) {
                var t = this.getProperty(e.mode_name, "list-size"), i = 0,
                    r = this.getProperty(e.mode_name, "responsive-rules"), o = null, n, a;
                if (this.getProperty(e.mode_name, "mode-is-responsive")) {
                    if (r && r.length) return o = this.getResponsiveRecommendations(r), e.matched_rule = o.rule, o.listSize;
                    i = this.getExtraResponsiveRecom(e)
                }
                if (a = t + i, e.autoSize = this.getProperty(e.mode_name, "auto-size"), !e.autoSize) return e.autoSize = !1, a;
                if (0 == (n = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth))) return e.autoSize = !1, a;
                for (var s = this.getProperty(e.mode_name, "auto-size-rules"), l = 0; l < s.length; l++) parseInt(s[l]["minWc"]) <= n && n <= parseInt(s[l]["maxWc"]) && (e.AutoSizeRule = s[l]);
                return e.AutoSizeRule ? (e.rows = this.getProperty(e.mode_name, "rows"), e.rows <= 1 ? this.modes[e.mode_name]["list-size"] = e.AutoSizeRule.n + i : this.modes[e.mode_name]["list-size"] = e.AutoSizeRule.n * e.rows + i) : 0
            }, this.calculateAutoSizeParameters = function (e) {
                var t, i;
                if (this.calculateAutoListSize(e), e.AutoSizeRule) for (var r = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth), o = e.AutoSizeRule["minWsRange"]; o <= e.AutoSizeRule["maxWsRange"]; o++) if (t = (r - (e.AutoSizeRule.n - 1) * o) / e.AutoSizeRule.n, (i = parseInt(t)) == t) {
                    e.AutoSizeRule.Wi = t, e.AutoSizeRule.Ws = o;
                    break
                }
            }, this.getItemUrl = function () {
                var e = this.itemurl;
                return (win.trc_item_url || null == this.itemurl) && (e = this.getAutoItemMeta("item-url", null, this.urlPreNormalizer, this["normalize-item-url"])), this.itemurl = e
            }, this.urlPreNormalizer = function (e, t) {
                var i = this["prenormalize-" + e], r;
                if (!i) return t;
                (i["truncate-at"] || []).forEach(function (e) {
                    var i = t.search(e);
                    i >= 0 && (t = t.substr(0, i))
                });
                var o = new win.TRC.URL(t);
                for (var n in i) if (i.hasOwnProperty(n)) {
                    if (!i[n]) continue;
                    switch (n) {
                        case"host":
                            delete o.host;
                            break;
                        case"trailing-dirsep":
                            for (; "/" == o.pathname.substr(o.pathname.length - 1);) o.pathname = o.pathname.substr(0, o.pathname.length - 1);
                            break;
                        case"query":
                            var a = [], s = o.search.replace(/^\?/, "").split("&");
                            "string" == typeof(r = i[n]) && (r = new RegExp(r));
                            var l = r instanceof Array ? function (e) {
                                for (var t = 0; t < r.length; t++) if (e == r[t]) return !0;
                                return !1
                            } : r instanceof RegExp ? r.test.trcBind(r) : function () {
                                return !1
                            };
                            s.forEach(function (e) {
                                l(decodeURIComponent(e.split("=")[0])) && a.push(e)
                            }), o.search = (a.length ? "?" : "") + a.join("&");
                            break;
                        case"fragment":
                            var c = o.hash.replace(/^#/, "");
                            "string" == typeof(r = i[n]) && (r = new RegExp(r)), o.hash = "", r instanceof RegExp && r.test(c) ? o.hash = "#" + c : r instanceof Array && r.forEach(function (e) {
                                c.search(e) >= 0 && (o.hash = "#" + c)
                            })
                    }
                }
                return o.pathname || (o.pathname = "/"), "item-id" == e ? o.toString().toLowerCase() : o.toString()
            }, this.genCallback = function (e) {
                var t = "recommendations_" + (TRC.callbacks.auto_gen_callback_seq = TRC.callbacks.auto_gen_callback_seq + 1 || 1);
                return TRC.callbacks[t] = e, "TRC.callbacks." + t
            }, this.formatTRCRequest = function (e, t, i) {
                try {
                    e.hasOwnProperty("rbox-tracking") && Object.keys && Object.keys(e).length > 1 && delete e["rbox-tracking"];
                    var r = new this.GlobalRequetParams;
                    return (TRC.isOptim("geom") && !i || !TRC.isOptim("geom")) && (this.setGlobalParmas(r, t), this.setGlobalParamsDecorators(r)), r.setPlacementsParamsArray(this.getPlacementsRequestParams(e, r, i)), TRC.pConsole("recommendations", "debug", "hook : normalize-request-param", this["normalize-request-param"].toString(), "string"), r.setAll(this["normalize-request-param"](r.getAll(), null)), this.setNewPlacementsInRequest(e, r), TRC.pConsole("recommendations", "info", "formatted request", r.getAll(), "object"), r.getAll()
                } catch (e) {
                    __trcError("TRC.formatTRCRequest", e)
                }
            }, this.setGlobalParmas = function (e, t) {
                var i = e, r = TRCImpl ? TRCImpl.global : {};
                i.setItemId(this.getItemId()), i.setTemplate(TRC.pageTemplate), i.setItemType(t || this.getItemType()), i.setSessionData(TRC.pageManager.getPublisherValue(TRC.publisherId, "session-data")), i.setUserId(TRC.pageManager.getValue("user-id")), r["store-userid-first-party-cookie"] && i.setUserIdFirstPartyCookie(TRC.pageManager.getUserIdFirstPartyCookie()), i.setViewId(TRC.pageManager.getPageData()), i.setClientVersion(this.version), i.setPublisherVersion(this.getPublisherVersion()), i.setItemUrl(this.getItemUrl()), i.setDeviceId(this.deviceId), i.setUnifiedId(this.unifiedId), i.setUserType(this.userType), i.setExternalPageView(this.external_page_view), i.setBlockVideoLoader(this.blockVideoLoader ? "1" : "0"), i.setUserLanguages(this.getUserLanguages()), this.consentState && (i.setCmpStatus(this.consentState.cmpStatus), i.setGdprApplies(this.consentState.gdprApplies), i.setConsentDaisyBit(this.consentState.consentData), i.setGdprWasTimeout(this.consentState.wasTimeout)), TRC.consentData && (i.setCmpStatus(TRC.consentData.cmpStatus), i.setGdprApplies(TRC.consentData.gdprApplies), i.setConsentDaisyBit(TRC.consentData.consentDaisyBit)), i.setBlockThumbnailVideoLoader(this.blockThumbnailVideoLoader ? "1" : "0"), !1 !== r["local-storage-piggyback"] && i.setLocalStoragePiggyback(TRC.pageManager.getValue(TRC.LOCAL_STORAGE_PIGGYBACK)), void 0 !== navigator.connection && (i.setConnectionType(navigator.connection.type), i.setConnectionSpeed(navigator.connection.effectiveType))
            }, this.setNewPlacementsInRequest = function (e, t) {
                var i, r, o = t.getPlacementsParamsArray();
                if (e) for (var n = 0, a = o.length; n < a; n++) i = o[n].uip, r = o[n].orig_uip, e[i] || (e[i] = e[r], e[r] = e[i], e[r].new_uip = i)
            }, this.setRequestMetaData = function (e) {
                var t = {};
                for (var i in this.tags && this.tags.length && (t.k = this.tags.join(",")), this.metadata) this.metadata.hasOwnProperty(i) && this.metadata[i] && (t[this.parseMetaName(i)] = this.metadata[i]);
                TRC.util.hasKeys(t) && e.setMetaData(t)
            }, this.parseMetaName = function (e) {
                switch (e) {
                    case"user":
                        return "u";
                    case"uploader":
                        return "U";
                    case"content-rating":
                        return "c";
                    case"publish-date":
                        return "t";
                    case"duration":
                        return "d";
                    case"category":
                        return "x";
                    case"v":
                    case"r":
                    default:
                        return e
                }
            }, this.getPlacementsRequestParams = function (e, t, i) {
                for (var r = [], o, n = TRC.util.keys(e), a, s, l = 0; l < n.length; l++) (a = e[s = n[l]]).placement && (this.setModeGlobalParamsDecorators(t, a), (o = this.createNewPlacementParams(a, e[s], i)).setAll(this["normalize-request-param"](o.getAll(), a.mode_name)), r.push(o.getAll()));
                return r
            }, this.createNewPlacementParams = function (e, t, i) {
                var r = new this.PlacementParams;
                return r.setListId(e.list_id || "rbox-tracking" === e.mode ? e.mode : "rbox-" + (e.visible ? e.origin.toString() : "tracking")), r.setListSize(this.getListSize(e)), r.setUIMode(this.computeUIM(t)), r.setUIPlacement(e.placement), r.setOriginalUIPlacement(e.placement), this.setPlacementParamsDecorators(r, e, i), r
            }, this.setPlacementParamsDecorators = function (e, t, i) {
                var r = this.getProperty(t.mode_name, "required-attributes");
                "string" == typeof r && "none" != r && e.setRequiredAttr(r), t.dfp && t.dfp.campaign_id && e.setNativeCampaignID(t.dfp.campaign_id), t.category && e.setAllowedCategories(t.category), this.enablePlacementGeometry && (TRC.isOptim("geom") && !i || !TRC.isOptim("geom")) && this.addGeometryPlacementData(e, t.container), t.exclude && e.setExclusions(TRC.text.toStringList(t.exclude)), t.fi && e.setFeedIndex(t.fi), t.fb && e.setFeedBatch(t.fb), t.fti && e.setFeedTemplateId(t.fti)
            }, this.addGeometryPageData = function (e, t) {
                try {
                    TRC.tlf && console.time("page geometry"), e.setArticlePos(this.getGeometryPageData(t)), e.setBrowserWidth(TRC.dom.getWindowWidth()), e.setScreenWidth(window.screen.availWidth), e.setScreenHeight(window.screen.availHeight), TRC.tlf && console.timeEnd("page geometry")
                } catch (t) {
                    e.bad = -5
                }
            }, this.addGeometryPlacementData = function (e, t) {
                try {
                    TRC.tlf && console.time("mode geometry - " + e.getAll().uim), e.setContainerPos(this.getPosFromDocTop(t, "top")), e.setContainerWidth(this.getModeWidth(t)), TRC.tlf && console.timeEnd("mode geometry - " + e.getAll().uim)
                } catch (t) {
                    e.cd = -5
                }
            }, this.getModeWidth = function (e) {
                return e.getBoundingClientRect().width
            }, this.getGeometryPageData = function (e) {
                var t, i;
                switch (!0) {
                    case"function" != typeof doc.querySelector:
                        return -4;
                    case"string" == typeof e:
                        return this.computeGeometryPageData(e);
                    case e instanceof Array && e.length > 0:
                        for (i = 0; i < e.length; i++) if ((t = this.computeGeometryPageData(e)) > -1) return t;
                        return -2;
                    default:
                        return -1
                }
            }, this.computeGeometryPageData = function (e) {
                try {
                    var t = doc.querySelector(e);
                    return t ? this.getPosFromDocTop(t, "bottom") : -2
                } catch (e) {
                    return -3
                }
            }, this.getPosFromDocTop = function (e, t) {
                return e.getBoundingClientRect()[t] + TRC.dom.getPageVerticalScroll()
            }, this.setGlobalParamsDecorators = function (e) {
                TRC.pageManager.getValue("past-exclusions") && e.setPastExclusions(TRC.pageManager.getValue("past-exclusions")), this.excludedItems && e.setExclusions(TRC.text.toStringList(this.excludedItems)), win.trc_testmode && e.enableTrcTesMode(), this.getReferrer() && e.setReferrer(this.referrer), TRC.rtbUserIds && this.setRTBUserId(TRC.rtbUserIds, e), this.enablePageGeometry && this.addGeometryPageData(e, this.global["page-geometry-selectors"]), this.setRequestMetaData(e), !0 === this.global["send-item-query-string-in-req"] && e.setItemUrlQueryString(this.getItemUrlQueryString()), TRC.networkId && e.setNetworkID(TRC.networkId), this.tracking_codes && e.setUTMParams(this.buildUTMParams(this.tracking_codes)), this.additional_data && e.setAdditionalData(this.additional_data)
            }, Manager.prototype.buildUTMParams = function (e) {
                var t = [];
                for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                return t.join("&")
            }, this.setModeGlobalParamsDecorators = function (e, t) {
                this.setPlayerGlobalParams(e, t), 0 == t.origin.toString().indexOf("h2") && e.setItemId("_homepage_")
            }, this.setPlayerGlobalParams = function (e, t) {
                e.setItemId(t.item_id), e.setItemType(t.item_type), e.setItemUrl(t.item_url)
            }, this.computeUIM = function (e) {
                var t = e.mode_name, i, r, o;
                return t + (this.global["disable-network-uim"] || void 0 === TRC.networkId ? "" : ":pub=" + TRC.networkId) + (TRC.blocker.blockedState > -2 && this.global["use-abp-uim"] ? ":abp=" + TRC.blocker.blockedState : "") + (this.global["use-calibration-uim"] && this.getProperty(t, "mode-is-responsive") ? this.computeCalbUIM(e) : "")
            }, this.computeCalbUIM = function (e) {
                if (!e.matched_rule) return "";
                var t = TRC.implClasses.TRCRBox, i = this.modes[e.mode_name], r = e.matched_rule,
                    o = "none" != i["thumbnail-position"] && i["thumbnail-position"] || void 0,
                    n = o ? TRC.math.round10(t.prototype.getRuleAspectRatio(r, "ratio") || t.prototype.getThumbAspectRatio(i, "ratio") || t.prototype.DEFAULT_THUMB_RATIO, -1) : void 0,
                    a = o ? this.caclculateThumbnailWidth(e.container, r) : void 0;
                return ":type=responsive,rows=" + r.rows + ",cells=" + r.cells + ",thumb-pos=" + o + (o && "none" != o ? ",thumb-ratio=" + n + ",thumb-width=" + a : "")
            }, this.caclculateThumbnailWidth = function (e, t) {
                var i = TRC.css.responsive.getRulePercentageWidth(t.cells, t.margin.h) / 100, r, o = 50;
                return e && i ? (r = parseInt(e.clientWidth > 0 ? e.clientWidth : e.offsetWidth, 10), TRC.math.roundByDecimal(r * i, o)) : null
            }, this.setRTBUserId = function (e, t) {
                var i = TRC.util.keys(e), r;
                for (r = 0; r < i.length; r++) e[i[r]].ui && t.setRtui(e[i[r]])
            }, this.dispatchLoadRequest = function (preloadRequest) {
                if (!(TRC.isKilled && TRC.isKilled() || !TRC.util.hasKeys(preloadRequest))) if (!this.preloadRequestLoader || this.global["disable-simultaneous-req-protection"]) {
                    var timeout = this.getProperty(null, "timeout") || 8e3, req, url, usingCache = !1;
                    if (this.preloadRequest = preloadRequest, null != this.getItemId()) {
                        this.delayedDispatchLoadRequest = null;
                        try {
                            if (req = this.formatTRCRequest(this.preloadRequest), TRC.utm.push((new Date).getTime() - TRC.utm.start), this.isValidForCache(req.it) && (usingCache = this.activateTrcCache(req, this.trcCache, this.trcCacheItemType, this.handleLoadResponse, this), usingCache)) return;
                            req.cb = this.genCallback(this.handleLoadResponse.trcBind(this, req.cacheKey)), url = this.createRequestUrl(req), TRC.worker ? TRC.worker.xhr(url, function (data) {
                                try {
                                    eval(data)
                                } catch (e) {
                                    __trcError("TRC.worker: Worker Error in trc response", e)
                                }
                            }, function () {
                                __trcError("TRC.worker: Worker Error in xhr trc response")
                            }) : (this.preloadRequestLoader = this.loadExternal(url, "js", this.handleLoadResponseFailure.trcBind(this), !0), this.preloadRequestLoader.timeout = TRC.Timeout.set(this.abortLoadRequest.trcBind(this, !0), timeout), this.lastReqId = req.id, TRC.performance && TRC.performance.mark("5.1.0", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.START), TRC.pConsole("", "time", "dispatch recommendation request", ""))
                        } catch (e) {
                            __trcError("TRC.dispatchLoadRequest: Error in request processing", e)
                        }
                    } else this.delayedDispatchLoadRequest = this.dispatchLoadRequest.trcBind(this, preloadRequest)
                } else {
                    var args = arguments;
                    TRC.Timeout.set(function () {
                        args.callee.apply(this, [].slice.call(args).concat([!0]))
                    }.trcBind(this), 100)
                }
            }, this.isValidForCache = function (e) {
                return !!(this.trcCache && this.trcCache.isValidCache && (this.trcCache.isCacheEnabledViaStorageFlag() || this.trcCacheItemType[e] && ("" === this.trcParams || TRC.pageManager.getForceTrcCache())))
            }, this.activateTrcCache = function (e, t, i, r, o) {
                if (!e.r && !e.r.length) return !1;
                var n = t.extractKey(e), a = t.getCacheResponse(n);
                if (a && a.response && !this.cachedResponses[n]) {
                    if ("c" === i[e.it] || t.isCacheEnabledViaStorageFlag()) return this.setCachedResponse(a, r, o, n), this.cachedResponses[n] = !0, !0;
                    "d" === i[e.it] && (e.cache = 1, e.cacheKey = n)
                } else e.cacheKey = n, a && a.response && t.isCacheEnabledViaStorageFlag() && this.cachedResponses[n] && (e.vi = a.viewId);
                return !1
            }, this.setCachedResponse = function (e, t, i, r) {
                e.response.cached = !0, e.response.cachedViewId = e.viewId, TRC.Timeout.set(t.trcBind(i, null, e.response, !0), 0), TRC.pConsole("recommendations", "warn", "using cached recommendations", "")
            }, this.createRequestUrl = function (e) {
                this.systemFlags && this.systemFlags.loaderType && (e.lt = this.systemFlags.loaderType), delete e.cacheKey;
                var t = "", i;
                return e.cache && (t = "&cache=1", delete e.cache), protocol + "//" + this.domain + "/" + encodeURIComponent(TRC.publisherId) + "/trc/3/json?" + "tim=" + encodeURIComponent(__trcClientTimestamp()) + (this.trcByPass ? "&trc_skip_failover=yes&" : "&") + "data=" + encodeURIComponent(__trcJSONify(e)) + this.getOptOut() + TRC.pageManager.additionalDispatchParams() + t + (win.trc_debug_level > 1 ? "&llvl=" + win.trc_debug_level : "")
            }, this.abortLoadRequest = function (e) {
                var t;
                for (t in this.preloadRequestLoader && (this.preloadRequestLoader.parentNode.removeChild(this.preloadRequestLoader), this.preloadRequestLoader = null), e ? TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.timeOut) : TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.error), this.preloadRequest) if (this.preloadRequest.hasOwnProperty(t)) {
                    if (t.search("rbox-tracking") >= 0) continue;
                    e && (e = !1, __trcWarn("TRC.abortLoadRequest: pv3 timeout"));
                    var i = this.preloadRequest[t];
                    delete this.preloadRequest[t], i.loadRBoxRequestFailed = !0, this.internalDrawRBox(i)
                }
            }, this.getOptOut = function () {
                return this.userOptOut ? "&user.opt_out=true" : ""
            }, this.handleLoadResponseFailure = function (e) {
                TRC.performance && TRC.performance.mark("5.1.8", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.STOP), null == this.preloadRequestLoader || this.isWaitingForModes || !this.global["disable-simultaneous-req-protection"] && e && e.target && this.preloadRequestLoader.src !== e.target.src || (TRC.Timeout.clear(this.preloadRequestLoader.timeout), __trcError("Server did not respond to loadRBox"), this.abortLoadRequest())
            }, this.isActivePlacementData = function (e, t) {
                return !e.new_uip || t === e.new_uip
            }, this.handleLoadResponse = function (e, t, i) {
                function r() {
                    for (var e in this.parseResponse(t, i), this.preloadRequest) if (this.preloadRequest.hasOwnProperty(e)) {
                        if (o = this.preloadRequest[e], this.placementShouldHaveResponseData(o, e) && !this.placementHasResponseData(o)) {
                            __trcWarn("Server did not provide response for '" + e + '"!');
                            var r = o;
                            delete this.preloadRequest[e], __trcDebug("Recovering internalDrawRBox(" + e + ")"), this.internalDrawRBox(r)
                        }
                        this.isActivePlacementData(o, e) && 1 != o.pv2 && o.dc && o.dc.renderAd(), o.scriptData && (TRC.isOptim("defer-scripts") ? setTimeout(function (e, t) {
                            TRC.ScriptRenderer.render(t.scriptData, t)
                        }.trcBind(null, o.scriptData, o), 0) : TRC.ScriptRenderer.render(o.scriptData, o)), o.iframeData && TRC.taboolaConnect.createCard(o.container, o.iframeData.url, o.iframeData.config, o.placement, this.language)
                    }
                    this.global["smart-ellipsis"] && TRC.dom.on(win, "resize", TRC.util.debounce(this._repaintEllipsis, 500, !1, this)), this.preloadRequestLoader && (this.preloadRequestLoader.parentNode.removeChild(this.preloadRequestLoader), this.preloadRequestLoader = null);
                    try {
                        TRC.SpotlightLoader.load(t)
                    } catch (e) {
                        __trcError("Error while trying to load Spotlight")
                    }
                    TRC.tlf && console.timeEnd("in handleLoadResponse"), TRC.tlf && console.timeStamp("end handleLoadResponse"), TRC.performance && TRC.performance.mark("6.0.9", null, "TrcPv3", "", "pv3prase", TRC.PerfEvenType.STOP)
                }

                try {
                    TRC.tlf && console.timeStamp("start handleLoadResponse(pv3)"), TRC.tlf && console.time("in handleLoadResponse"), TRC.performance && TRC.performance.mark("6.0.1", null, "TrcPv3", "", "pv3prase", TRC.PerfEvenType.START), TRC.pConsole("recommendations", "info", "recommendations response", t, t.trc.verbose ? "verbose" : "object"), TRC.pConsole("", "time", "recommendations loaded", "");
                    var o, n = TRCImpl ? TRCImpl.global : {};
                    if (TRC.utm.push((new Date).getTime() - TRC.utm.start), this.preloadRequestLoader && TRC.Timeout.clear(this.preloadRequestLoader.timeout), t && t.trc && t.trc.ui && (this.watchedItem = t.trc["wi"], this.globaleRequestId = t.trc["vl"] && t.trc["vl"].length ? t.trc["vl"][0].ri : this.globaleRequestId, TRC.events_ri = this.globaleRequestId, TRC.session_data = t && t.trc ? t.trc["sd"] : null, TRC.platform_code = t && t.trc ? t.trc["plc"] : null, TRC.isOptim("defer-events") ? setTimeout(function () {
                        TRC.eventDelegator.dispatch("user_id_ready")
                    }, 0) : TRC.eventDelegator.dispatch("user_id_ready"), TRC.eventDelegator.dispatch("user_id_ready"), t.trc.stp && (TRC.isOptim("defer-events") ? setTimeout(function () {
                        TRC.dispatch("send_user_id", t.trc.stp)
                    }, 0) : TRC.dispatch("send_user_id", t.trc.stp)), t.trc.jst && (TRC.isOptim("defer-events") ? setTimeout(function () {
                        TRC.dispatch("load_script_tags", t.trc.jst)
                    }, 0) : TRC.dispatch("load_script_tags", t.trc.jst)), TRC.responseLoaded = !0, TRC.alertVVResponseLoaded && TRC.alertVVResponseLoaded(TRC.version)), !(t && t.trc && t.trc["vl"] && t.trc["vl"].length)) return __trcError("Invalid response from server: " + t), void this.abortLoadRequest();
                    t.trc["tc"] && !TRC.taboolaConsole && TRC.Manager.prototype.loadExternal("//c2.taboola.com/console/console_loader.js", "js"), TRC.UserIdMerger.notifyPossibleUserChange(this, TRC.publisherId, t.trc["ui"], t.trc["sd"]), TRC.pageManager.storePublisherValue(TRC.publisherId, "session-data", t.trc["sd"]), !1 !== n["local-storage-piggyback"] && t && t.trc && t.trc[TRC.LOCAL_STORAGE_PIGGYBACK] && TRC.pageManager.storeValue(TRC.LOCAL_STORAGE_PIGGYBACK, t.trc[TRC.LOCAL_STORAGE_PIGGYBACK]), t.trc["DNT"] && "TRUE" === t.trc["DNT"].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : (TRC.pageManager.storeUserId(t.trc["ui"]), TRC.pConsole("page", "debug", "Storing user-id: " + t.trc["ui"])), e && (this.trcCache.cacheResponse(e, t, TRC.pageManager.state.moreDispatchParams), this.cachedResponses[e] = !0);
                    var a = this;
                    TRC.mdl.yieldDynamicModeLoad(t, this, function () {
                        r.call(a), a.handleLoadResponseFailure(), TRC.dispatch("trcResponseHandled")
                    })
                } catch (e) {
                    __trcError("Error in TRC.handleLoadResponse : ", e)
                }
            }, this.parseResponse = function (e, t) {
                var i, r, o, n, a, s = {};
                for (this.yieldingEnabled = isYieldingEnabled(this.preloadRequest, this), this.feedConfigs = e.trc["f"], this.testData = e.trc["td"], o = 0; o < e.trc["vl"].length; o++) i = (n = e.trc["vl"][o]).dc ? n.dc : n.uip, this.sessionId = e.trc["si"], void 0 !== (r = this.getOrCreatePlacementData(i, n)) ? (r.unifiedPlacement = n.uuip, r.globalTrcResponseJSON = e.trc, r.trcResponse = n, i.search("rbox-tracking") >= 0 ? r.response = this.formatPlacementRecommendations(e, o) : this.hasFeedConflict(i, n.fpl) ? (__trcWarn("Feed conflict detected for " + i + "with feed placement " + n.fpl + "and test data " + this.td), TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, i)) : (n.et && (r.expandOptions = this.getExpandOptions(n)), r.isCache = t, e.cachedViewId && (r.cachedViewId = e.cachedViewId), n.fpl && this.handleFeedCardPlacement(n, r), r.scriptData || r.publisherCardData || (n.es ? TRC.ExternalContainerAppender.move(n.es, r.container) : this.isStandaloneVideo(n) ? (r.videoTagLoader = new TRC.VideoTagLoader(this, n.vtag, r, null, {
                    "session-data": e.trc["sd"],
                    req: n["ri"]
                }), r.videoTagLoader.loadVideo()) : (a = this.formatPlacementRecommendations(e, o, s), n.dc && ("tbl" !== n.typ || 1 != n.pr || !n.v || n.v.length < 1) ? (r.dc || (r.dc = new TRC.DaisyChain(this, r), this.daisyChains.push(r.dc)), r.dc.addToChain(a, n.pr)) : (r.response = a, this.addFormattedResponseToWidgetAddedFromTrc(n, a, r.addWidget)), r.response && (r.dc && delete r.dc, a.trc["video-list"] && (r["container-selectors"] = a.trc["video-list"]["container-selectors"], r["render-on-orig-container"] = a.trc["video-list"]["render-on-orig-container"]), r.pv2 || void 0 === r.container && !r.addWidget || (this.yieldingEnabled ? this.loadRBoxDrawQueue(r) : this.internalDrawRBox(r))))))) : __trcWarn("Invalid placement in server response", i);
                if (s.text && (TRC.cssStack ? TRC.cssStack.addStyle("override", s.text, TRC.styleInjected) : TRC.dom.injectStyle(s.text)), this.yieldingEnabled) {
                    var l = this.global ? this.global : {}, c = l["yield-delay"] ? l["yield-delay"] : 0;
                    this.executeRBoxDrawQueue(c)
                }
            }, this.addFormattedResponseToWidgetAddedFromTrc = function (e, t, i) {
                i && (this.preloadRequest[e.uip].response = t)
            }, this.getWidgetContainer = function (e) {
                var t = e["container"], i = !(0 == e["render-on-orig-container"]);
                if (!doc.querySelectorAll) return t;
                var r = this.getOrCreateContainerForMoveOrAddWidget(e["container-selectors"], t);
                return r || (i ? t : (__trcWarn("TRC.getWidgetContainer: Not falling back to original container even though could not find valid container when trying to move a widget"), null))
            }, this.getOrCreateContainerForMoveOrAddWidget = function (e, t) {
                if (e) try {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i].container, o = e[i].shouldCreateContainer, n = doc.querySelectorAll(r);
                        if (n && 1 === n.length) {
                            1 == o && (e[i].shouldCreateContainer = !1, n = [this.createNewContainer(e[i].location, n[0])]);
                            var a = this.ensureValidContainer(n[0]);
                            if (a === t) return t;
                            if (a) return this.cleanContainerClasses(t), a
                        }
                    }
                    __trcWarn("TRC.extractValidContainer: Could not find any valid container when trying to move or add a widget")
                } catch (e) {
                    __trcError("TRC.extractValidContainer: Error occured while trying to find valid container", e)
                }
                return null
            }, this.createNewContainer = function (e, t) {
                var i;
                return (i = doc.createElement("div")).id = (new Date).getTime(), e && "first" === e ? t.insertBefore(i, t.firstChild) : e && "last" === e && t.appendChild(i), i
            }, this.cleanContainerClasses = function (e) {
                e && (e.className = "")
            }, this.formatPlacementRecommendations = function (e, t, i) {
                var r = e.trc["vl"][t], o, n = this.preloadRequest[r.uip] || {}, a = {
                    trc: {
                        req: r["ri"],
                        "session-id": e.trc["si"],
                        "session-data": e.trc["sd"],
                        "user-id": e.trc["ui"],
                        "watched-item": e.trc["wi"],
                        "country-code": e.trc["cc"],
                        "test-variant": e.trc["t"],
                        "is-provider": !!e.trc["iframeData"],
                        uvpw: e.trc["uvpw"],
                        placement: r.uip,
                        mode: n.mode,
                        DNT: e.trc["DNT"],
                        cpb: e.trc["cpb"],
                        sl: e.trc["sl"],
                        pi: e.trc["pi"],
                        bdp: e.trc["bdp"],
                        ppb: r["ppb"],
                        "test-data": e.trc["td"],
                        "placement-group": r["pg"]
                    }
                };
                return e.cached && (a.cached = !0, a.cachedViewId = e.cachedViewId), r.dc && "tbl" !== r.typ ? a.trc["tag"] = r : a.trc["video-list"] = {
                    video: r["v"],
                    "base-mode": r["m"],
                    "test-variant": r["t"],
                    "properties-override": r["po"] ? TRC.util.jsonParseWithEval("{" + r["po"] + "}") : null,
                    "container-selectors": r["cs"],
                    "render-on-orig-container": r["rooc"],
                    vtag: r["vtag"],
                    pvc: r["pvc"],
                    "content-hub-forced-placement": !!r["chf"]
                }, (o = r["csso"]) && (i.text = this.getModeOverrideCss(i, o, n)), r["fpl"] && (a.feedPlacement = r["fpl"]), a
            }, this.getModeOverrideCss = function (e, t, i) {
                if (t.indexOf("$container_id$") > -1) try {
                    t = TRC.text.replaceAll(t, "\\$container_id\\$", "#" + i.container.id, null)
                } catch (e) {
                    t = TRC.text.replaceAll(t, "\\$container_id\\$", "", null)
                }
                return e.text ? e.text + t : t
            }, this.loadSpotlight = function () {
                document.querySelectorAll && (this.spotlightLoaded ? TRC.dispatch("trc_afterRboxDraw") : (this.spotlightLoaded = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + "resources/js/1.1.0/spotlight.js", protocol), this.loadExternal(this.spotlightLoaded, "js")))
            }, this.setCssDivsIds = function (e, t) {
                var i = 4;
                for (var r in e) e.hasOwnProperty(r) && (e[r].cssDivsArr = [], r && TRC.util.getRandomIds({
                    arr: e[r].cssDivsArr,
                    len: t,
                    strength: i,
                    prefix: "t",
                    suffix: "_r"
                }))
            }, this.setLBCssDivsIds = function (e, t) {
                var i = 4;
                TRC.util.getRandomIds({
                    arr: e.iframe,
                    len: t,
                    strength: i,
                    prefix: "t",
                    suffix: "_r"
                }), TRC.util.getRandomIds({arr: e.topDiv, len: t, strength: i, prefix: "t", suffix: "_r"})
            }, this.getModesCache = function () {
                if (TRC.modesCache) return TRC.modesCache;
                for (var e in TRC.modesCache = {}, this.modes) this.modes.hasOwnProperty(e) && (TRC.modesCache[e] = {});
                return TRC.modesCache
            }, this.sendUserIdTags = function (e) {
                this.sendExternalTracking(e.data)
            }, this.initFrameworks = function (e) {
                "amp" === e && TRC.amp ? TRC.amp.setAMPmodule(this) : "mobile-sdk" !== e || (this.manualVisibilityTrigger = !0)
            }, this.init = function (e) {
                TRC.tlf && console.timeStamp("init TRCImpl");
                var t = TRC.URL.prototype.getParameter.call(location.href, "trc_css-isolation") || TRC.pageManager.getValue("trc_css-isolation"),
                    i = TRC.URL.prototype.getParameter.call(location.href, "trc_abp"), r = !0;
                __trcCopyProps(e, this), globalParams.framework && this.initFrameworks(globalParams.framework), this.boxes = {}, this.daisyChains = [], this.unique_placement_count = {}, this.tags = [], this.metadata = {}, this.cssReset = "yes" === t || "no" !== t && !1 !== this.global["css-isolation"], this.trcRequestDelay = this.global["trc-request-delay"] || TRC_REQUEST_DELAY, this.trcByPass = !0 === this["trc-skip-failover"], this.enablePageGeometry = this.global["has-page-geometry"], this.enablePlacementGeometry = this.global["has-mode-geometry"], t && TRC.pageManager.storeValue("trc_css-isolation", t), this.configForPostEvent = {
                    available: this.global["send-avail-as-post"],
                    visible: this.global["send-event-as-post"],
                    "new-visible": this.global["send-event-as-post"],
                    explore: this.global["send-explore-as-post"],
                    "content-hub-available": this.global["send-avail-as-post"],
                    "content-hub-visible": this.global["send-event-as-post"],
                    "content-hub-explore": this.global["send-explore-as-post"]
                }, this.configForGetEvent = {
                    available: this.global["send-avail-as-get"],
                    visible: this.global["send-visible-as-get"],
                    "new-visible": this.global["send-visible-as-get"],
                    explore: this.global["send-explore-as-get"],
                    "content-hub-available": this.global["send-avail-as-get"],
                    "content-hub-visible": this.global["send-visible-as-get"],
                    "content-hub-explore": this.global["send-explore-as-get"]
                }, this.isDeferredAvailable = this.global["enable-deferred-available"], this.unifiedVisibility = this.global["enable-unified-visibility"], this.trcParams = TRC.pageManager.additionalDispatchParams(), this.trcCacheClean = this.global["clean-trc-cache"], this.trcCache = this.global["enable-trc-cache"] ? new TRC.TrcCache(this.global["trc-cache-conf"] || {}) : null, this.trcCacheItemType = this.global["trc-cache-it"], this.disableReadMore = !1 === this.global["enable-read-more"] || !1 === this.disableReadMore, this.blockVideoLoader = this.shouldBlockVideoLoader(this.global["block-video-prob"]), this.blockThumbnailVideoLoader = this.shouldBlockThumbnailVideoLoader(this.global["block-thumbnail-video-prob"]), this.global["enable-consent"] && this.setConsentConfig(this.consentConfigOverride, this.global["consent-presets"]), TRC.getBackstageUrl = function () {
                    var e = TRC.backstageDomainPrefix || "backstage";
                    return this["backstage-domain-url"] || "https://" + e + ".taboola.com/backstage/"
                }.trcBind(this), i ? this.setABPEmulation(i) : this.global["abp-detection-enabled"] ? TRC.blocker.blockedState = TRC.blocker.getBlockedState(this.global["abp-detection-class-names"] || ["banner_ad", "sponsored_ad"], this.global["abp-ignore-cached-state"]) : TRC.blocker.blockedState = TRC.blocker.states.ABP_DETECTION_DISABLED, TRC.styleInjected || (this.isThinLoaderMode() ? this.stackedStyleInjection(this.defaults.style, this.global.style, this.global.rtlStyle, r) : this.bakedStyelInjection()), TRC.pageManager.setDomainConfiguration(this.global["publisher-domains"]), this.domain = this.global["requests-domain"] ? this.global["requests-domain"] : "trc.taboola.com", this.origin instanceof Array || (this.origin = [this.origin]), null != this.userMetadata ? this.metadata.user = __trcJSONify(this.userMetadata) : void 0 === win["trc_user_id"] ? this.metadata.user = this["get-user"]() : this.metadata.user = win["trc_user_id"], TRC.util.hasKeys(this["trc-network-mapping"]) && (TRC.networkId = TRC.publisherId, this.shiftPublisherId(this["trc-network-mapping"]));
                try {
                    TRC.pConsole("page", "debug", "Hook : publisher_start", this["publisher-start"].toString()), this["publisher-start"]()
                } catch (e) {
                    __trcError("Error running publisher-start", e)
                }
                this.metadata.uploader = this["get-creator"](), this.tags = this["get-tags"]();
                try {
                    this.metadata.v = this["get-views"](), this.metadata.r = this["get-rating"](), this["metafields"].split(",").forEach(function (e) {
                        e && (this.metadata[e] = this["get-" + e] ? this["get-" + e]() : this.readMetaTag(e))
                    }.trcBind(this))
                } catch (e) {
                }
                this.gt = new Gettext({
                    domain: "rbox",
                    locale_data: this.global.locale
                }), win.trc_testmode = !!win.trc_testmode || TRC.pageManager.isStagingView(), this.shouldEnableFraudDetection() && this.enableFraudDetection(), TRC.listen("send_user_id", this.sendUserIdTags.trcBind(this)), TRC.listen("load_script_tags", this.loadScriptTags.trcBind(this)), this.init = function () {
                }, TRC.isInteractive = !1, TRC.isPageLoaded = !1, this.trcCacheClean && !this.trcCache && (this.trcCache = new TRC.TrcCache({}, !0), this.trcCache = null), this.setInteractiveHandlers(), this.setPageOnloadHandlers(), this.listenToRenderedModes(), this.global["enable-always-track"] && !TRC.pushedRboxTracking && (pushRboxTrackingMode(), TRC.pushedRboxTracking = !0)
            }, this.ABPswap = function (e) {
                return TRC.text.replaceAll(e, "\\." + TRC.SYNDICATED_CLASS_NAME + "|" + "\\." + TRC.SPONSORED_CONTAINER_CLASS_NAME, function (e) {
                    return "." + this[e.slice(1)]
                }, this.global["switch-abp-class"])
            }, this.stackedStyleInjection = function (e, t, i, r) {
                TRC.cssStack || (TRC.cssStack = new TRC.css.Stack({
                    idPrefix: "tab_",
                    stack: [{type: "default", cssText: e + (i || "")}, {type: "mode", cssText: ""}, {
                        type: "publisher",
                        cssText: t
                    }, {type: "custom", cssText: ""}]
                }, r))
            }, this.bakedStyelInjection = function () {
                var e = this.defaults.style + this.global.style;
                TRC.blocker.blockedState > 0 && this.global["switch-abp-class"] && (e = this.ABPswap(e)), this.cssReset ? (this.setLBCssDivsIds(TRC.lightBoxCssReset = {
                    iframe: [],
                    topDiv: []
                }, this.numOfResetCssDivs), this.setCssDivsIds(this.getModesCache(), this.numOfResetCssDivs), TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, TRC.modesCache, TRC.lightBoxCssReset)), __trcInfo("CSS Isolation is active")) : this.global["css-ie-split"] && TRC.Browser["ieUpto"](9) ? TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, null, TRC.lightBoxCssReset)) : TRC.dom.injectStyle(e)
            }, this.setABPEmulation = function (e) {
                TRC.blocker.blockedState = e, this.global["abp-detection-enabled"] = !0, this.global["use-abp-uim"] = !0, TRC.pConsole("page", "warn", "emulating Ad Blocker Plus detection.")
            }, this.setInteractiveHandlers = function () {
                var e = TRC.EVENT_PAGE_INTERACTIVE, t = ["resize", "scroll"],
                    i = ["scroll", "mousedown", "keydown", "touchstart"], r = function (o) {
                        var n;
                        if (o = o || window.event, !TRC.Browser.ie || "resize" !== o.type || null != o.srcElement) {
                            for (n = 0; n < t.length; n++) TRC.dom.off(win, t[n], r);
                            for (n = 0; n < i.length; n++) TRC.dom.off(doc, i[n], r);
                            TRC.isInteractive = !0, TRC.dispatch(e)
                        }
                    }, o;
                for (o = 0; o < t.length; o++) TRC.dom.on(win, t[o], r);
                for (o = 0; o < i.length; o++) TRC.dom.on(doc, i[o], r)
            }, this.setConsentConfig = function (e, t) {
                TRC.consent.hasCMP() || (t && TRC.consent.setPresets(t), e ? TRC.consent.setConsentSource(TRC.util.merge({source: "iab_override"}, e)) : "function" == typeof window.__cmp && TRC.consent.setConsentSource({source: "iab"}))
            }, this.setPageOnloadHandlers = function () {
                var e = TRC.EVENT_PAGE_LOAD, t = function () {
                    TRC.dom.off(win, "load", t), TRC.isPageLoaded = !0, TRC.dispatch(e)
                };
                "complete" === document.readyState ? (TRC.isPageLoaded = !0, TRC.dispatch(e)) : TRC.dom.on(win, "load", t)
            }, this.pollTillContainerAvailable = function (e, t) {
                var i = 1e3, r = 40, o = this, n = e["container"], a = function () {
                    o.internalDrawRBox(e)
                };
                if (t = void 0 === t ? i : t, e["player"] || !0 === e["slider"] || TRC.dom.isReady) return TRC.dom.onReady(a);
                try {
                    e["container"] = this.ensureValidContainer(e["container"], !0)
                } catch (e) {
                }
                return e["container"] ? this.internalDrawRBox(e) : (e["container"] = n, t-- ? (t = TRC.dom.isReady ? Math.min(t, 1) : t, TRC.Timeout.set(function () {
                    o.pollTillContainerAvailable.call(o, e, t)
                }, r), null) : TRC.dom.onReady(a))
            }, this.countTrcContainerMissingError = 0, this.ensureValidContainer = function (e, t) {
                var i = "trc_related_container", r = TRC.dom.isInIframe(!0) ? " trc_in_iframe" : "";
                if ("string" == typeof e && (e = document.getElementById(e), t && !e)) return null;
                if ("object" != typeof e && (e = null), null != e) {
                    if (e.className.match(i)) return e;
                    for (; e.hasChildNodes();) e.removeChild(e.firstChild);
                    return e.origClassName = e.className, e.className += " " + i + " trc_spotlight_widget" + r, e
                }
                if (null != (e = document.getElementById(i))) return e.className.search(i) <= 0 && (e.origClassName = e.className), e.className += " " + i + " trc_spotlight_widget" + r, e;
                if (!document.body) return null;
                for (var o = null, n = document.body.getElementsByTagName("script"), a = 0; a < n.length; a++) if (!n[a].src && /TRC\.drawRBox\(/.test(n[a].innerHTML)) {
                    o = n[a];
                    break
                }
                if (!o || !o.parentNode) return this.countTrcContainerMissingError < 2 && (this.countTrcContainerMissingError += 1, __trcError("Didn't manage to find TRC container for R-Box (" + this.countTrcContainerMissingError + ") " + (TRC.dom.isReady ? "(Document is Ready)" : "") + "!")), null;
                var s = document.createElement("div");
                return s.id = s.className = i + " trc_spotlight_widget" + r, o.parentNode.insertBefore(s, o), s
            }, this.getPublisherVersion = function () {
                try {
                    if (TRC.baseDomain.search(TRC.publisherId) >= 0) {
                        var e = TRC.baseDomain.split("/");
                        if ("" == e[e.length - 1] && e.pop(), e[e.length - 1] != TRC.publisherId) return e[e.length - 1]
                    }
                } catch (e) {
                }
                return "default"
            }, this.getItemType = function () {
                switch (TRC.listOrigin.getSource()) {
                    case"h":
                        return "home";
                    case"c":
                        return "category";
                    case"t":
                        return "text";
                    case"s":
                        return "search";
                    case"p":
                        return "photo";
                    case"o":
                        return "other";
                    case"z":
                        return "content_hub";
                    case"v":
                    default:
                        return "video"
                }
            }, this.getUserLanguages = function () {
                return navigator.languages || (navigator.language ? [navigator.language] : [])
            }, this.playVideo = function (e) {
                var t = !1, i;
                try {
                    TRC.dispatch("videoPlaying", e)
                } catch (e) {
                    __trcError("Problem in playVideo:videoPlaying", e)
                }
                if (void 0 !== e.id && win.trc_video_id != e.id) {
                    var r = TRC.listOrigin.getSource();
                    if (void 0 === e.url && (win.trc_video_id || "v" != r ? e.url = null : (e.url = this.getAutoItemMeta("item-url", null, this.urlPreNormalizer, this["normalize-item-url"]), this.trc_url_auto_detection = e.id)), win.trc_video_id = e.id, win.trc_item_url = e.url, null != this.delayedDispatchLoadRequest && (this.delayedDispatchLoadRequest(), t = !0), 0 != win.TRC.trc_drawRBox) {
                        var o = 0;
                        for (var n in this.boxes) if (this.boxes.hasOwnProperty(n)) {
                            if (!/(rbox-blended|rplayer|rbox-v2)/.test(this.boxes[n].getListId())) continue;
                            this.boxes[n].updateRecommendations("video") && o++
                        }
                        if (o < 1 && !t) {
                            var a = {};
                            delete(i = this.computeRBoxOptions({
                                mode: "rbox-tracking",
                                item_id: e.id,
                                item_url: e.url,
                                item_type: "video",
                                visible: !1
                            })).container, a[i.placement] = i, this.dispatchLoadRequest(a)
                        }
                    }
                }
            }, this.setUser = function (e) {
                this.userMetadata = e, TRC.pConsole("page", "info", "user meta data ", e, "object")
            }, this.getUIInstance = function (e) {
                var t = this.getProperty(e, "impl-class");
                return t && t in win.TRC.implClasses ? win.TRC.implClasses[t] : TRC.implClasses.TRCRBox
            }, this.calculatePlacement = function (e) {
                if (e["mode_name"].search("rbox-tracking") >= 0) return e["mode_name"];
                var t = e["mode_name"] + (e["category"] ? "!" + e["category"] : "");
                return void 0 !== this.unique_placement_count[t] && (t += "#" + ++this.unique_placement_count[t]), t
            }, this.computeRBoxOptions = function (e) {
                return "string" == typeof e && (e = {mode_name: e}), e.pubOpts ? e : (e.pubOpts = __trcCopyProps(e, {}), win.trc_testmode = !!win.trc_testmode || !!e["testmode"], e["tracking"] = (this.tracking ? this.tracking : "") + (e["tracking"] ? e["tracking"] : ""), e["target_type"] = e["target_type"] || this.target_type || this.getProperty(e["mode_name"], "target_type") || "video", e["origin"] = new TRC.ListOriginBuilder(TRC.listOrigin.getSource(), e["target_type"]), e["mode_name"] = !!e["mode"] && e["mode"] || !!e["mode_name"] && e["mode_name"] || !!win["trc_mode_name"] && win["trc_mode_name"] || "rbox-" + e["origin"].toString(), e["mode_name"] = e["mode_name"].replace(/\s+/g, ""), e["category"] = !!e["category"] && e["category"], e["link_target"] = e["link_target"] || this.link_target, void 0 === e["placement"] && (e["placement"] = this.calculatePlacement(e)), this.unique_placement_count[e["placement"]] = 0, e["visible"] = "boolean" == typeof e["visible"] ? e["visible"] : !this.invisible, "string" == typeof e["autoplaybox"] && (e["autoplaybox"] = document.getElementById(e["autoplaybox"])), !e["player"] && !0 !== e["slider"] && e["visible"] && (e["original_container"] = e["container"], e["container"] = this.ensureValidContainer(e["container"])), e.addWidget || (e.response = null), e.computed = !0, e)
            }, this.listenToPlayer = function (e, t) {
                var i = "trc_related_container", r;
                r = TRC.listen("videoPlaying", function (o) {
                    var n = document.getElementById(o.player_id), a;
                    n ? TRC.dom.isAncestor(t, n, !0) ? (r.remove(), TRC.listen("videoPlaying", function (e) {
                        e.player_id === t.player_id ? a.style.left = "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for videoPlaying")
                    }), t.player_id = o.player_id, e["container"] && ("string" == typeof e["container"] && (e["container"] = document.getElementById(e["container"])), a = e["container"]), a || (e["container"] = a = document.createElement("div")), a.className = i + " trc-inplayer-rbox", a.style.left = "-999999em", a.style.width = n.offsetWidth + "px", a.style.marginTop = "-" + n.offsetHeight + "px", TRC.Browser["ieUpto"](6) && (t.style.position = "absolute"), t.appendChild(a), TRC.kaltura_API && TRC.Browser.firefox && (delete TRC.kaltura_API, TRC.kaltura_support()), e.getListId = function () {
                        return "rplayer-after"
                    }, e.list_id = e.getListId(), e.loaded = !0, this.internalDrawRBox(e)) : __trcError("TRC.listenToPlayer: object with player_id wasn't found in playerContainer that was passed") : __trcError("TRC.listenToPlayer: wrong player_id was passed")
                }.trcBind(this)), TRC.listen("videoDone", function (i) {
                    var r = e["container"];
                    r ? i.player_id === t.player_id ? r.style.left = "0" : __trcError("TRC.listenToPlayer: wrong player_id was used for videoDone") : __trcError("TRC.listenToPlayer:videoDone mainContainer wasn't found")
                }), TRC.ooyala_API && (TRC.listen("ooyala_stateChanged", function (i) {
                    var r = e["container"];
                    r && (i.player_id === t.player_id ? r.style.left = "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for ooyala_stateChanged"))
                }), TRC.listen("ooyala_activePanelChanged", function (i) {
                    var r = e["container"];
                    r && (i.player_id === t.player_id ? r.style.left = "more" === i["activePanel"] || "info" === i["activePanel"] ? "0" : "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for ooyala_activePanelChanged"))
                }))
            }, this.loadRBoxDrawQueue = function e(t) {
                function i(e) {
                    if (!this.urlOverrideYieldArr) {
                        var t = TRC.URL.prototype.getParameter.call(win.location.href, "yield-batch");
                        this.urlOverrideYieldArr = t ? t.split("|") : []
                    }
                    return this.urlOverrideYieldArr.indexOf(e) > -1
                }

                if (i(t.placement) && (t.modeGroupOrder = 0), this.itemsToDraw = this.itemsToDraw || [], this.itemsToDrawWithoutOrder = this.itemsToDrawWithoutOrder || [], void 0 !== t.modeGroupOrder) {
                    var r = parseInt(t.modeGroupOrder, 10);
                    isNaN(r) ? this.itemsToDrawWithoutOrder.push(t) : (this.itemsToDraw[r] = this.itemsToDraw[r] || [], this.itemsToDraw[r].push(t))
                } else this.itemsToDrawWithoutOrder.push(t)
            }, this.executeRBoxDrawQueue = function e(t, i) {
                TRC.yieldingOrderArr = TRC.yieldingOrderArr || [];
                var i = i || 0;
                TRC.taboola_yield_report && 0 == i && (console.time("executeRBoxDrawQ"), performance.mark("start executeRBoxDrawQueue")), this.itemsToDrawWithoutOrder.length > 0 && (this.itemsToDraw.push(this.itemsToDrawWithoutOrder), this.itemsToDrawWithoutOrder = []);
                var r = this.itemsToDraw.shift();
                if (TRC.yieldingOrderArr.push(r ? r.length : 0), r) {
                    TRC.taboola_yield_report && (console.time("executeRBoxDrawQueue batch-" + i), performance.mark("start executeRBoxDrawQueue batch-" + i));
                    var o = {};
                    for (var n in r) {
                        var a = this.internalDrawRBox(r[n]);
                        o[a.id] = a
                    }
                    TRC.dispatch("batchrender", {data: {boxes: o}}), TRC.taboola_yield_report && (console.timeEnd("executeRBoxDrawQueue batch-" + i), performance.mark("end executeRBoxDrawQueue batch-" + i))
                }
                var s = function (e, t) {
                    this.executeRBoxDrawQueue(e, t)
                }.bind(this);
                if (this.itemsToDraw.length > 0) return r ? void TRC.Timeout.set(function () {
                    s(t, ++i)
                }, t) : void s(t, ++i);
                TRC.taboola_yield_report && (console.timeEnd("executeRBoxDrawQ"), performance.mark("end executeRBoxDrawQueue"), performance.measure("total rbox rendering time", "start executeRBoxDrawQueue", "end executeRBoxDrawQueue"));
                var l = this;
                i > 0 && (l = {boxes: {}}), TRC.dispatch("allrender", {data: l})
            }, this.internalDrawRBox = function (e) {
                var t, i;
                if (e["container"] = this.getWidgetContainer(e), (e = this.computeRBoxOptions(e))["player"]) {
                    var r = e["player"];
                    return delete e["player"], void this.listenToPlayer(e, document.getElementById(r))
                }
                if (!0 === e["slider"] && (e["container"] = document.createElement("div"), e["container"].id = "trc_rbox_slider_" + Math.floor(2147483648 * Math.random()).toString(36), e["container"].className = "trc_related_container", this.cssReset && doc.body.appendChild(e["container"])), t = e["container"]) {
                    if (e["visible"] || (t.style.display = "none"), e["spotlight"] && t.setAttribute("data-spotlight-publisher-id", e["spotlight-publisher-id"]), null != e.response || !this.loadCalled || void 0 === this.preloadRequest[e["placement"]] || (e.response = this.preloadRequest[e["placement"]].response, __trcCopyProps(e, this.preloadRequest[e["placement"]]), null != e.response)) {
                        try {
                            TRC.SpotlightLoader.registerOnMainContainer(t, e.response)
                        } catch (e) {
                            __trcError("Error while trying to register Spotlight data on main container")
                        }
                        var o = new (this.getUIInstance(e["mode_name"]))(e.origin.toString(), e, this);
                        return this.boxes[o.id] = o, t._trc_container || (t._trc_container = document.createElement("div"), t._trc_container.className = "trc_rbox_container", t._trc_anonbox = document.createElement("div"), t._trc_container.appendChild(t._trc_anonbox), t.appendChild(t._trc_container), this.cssReset && "rbox-tracking" !== o.mode_name ? (i = doc.createElement("div"), TRC.dom.swapElements(t, i, !1), o["outermostContainer"] = this.createCssResetContainers(t, o.mode_name), TRC.dom.swapElements(i, o["outermostContainer"], !1), TRC.pConsole("page", "info", "CSS reset is enabled on all widgets")) : o["outermostContainer"] = t), o.render(t._trc_anonbox), this.renderRBox(o, e), win.TRC.trc_drawRBox = !0, o
                    }
                    this.preloadRequest[e["placement"]]["container"] = e["container"]
                }
            }, this.createCssResetContainers = function (e, t) {
                for (var i = TRC.modesCache[t] ? TRC.modesCache[t].cssDivsArr : [], r, o = e, n, a = i.length - 1; a >= 0; a--) (n = document.createElement("div")).id = i[a], n.className = "trc_isolation", n.appendChild(o), o = n;
                return o
            }, this.daisyChainReset = function () {
                var e = this.daisyChains.length, t;
                for (t = 0; t < e; t++) this.daisyChains[t].removeIframe()
            }, this.dispatchRequestWrapper = function (e) {
                this.loadCalled = !0, TRC.initWorker(), this.dispatchLoadRequest(e), this.isPendingLoadRBox = !1
            },this.dispatchCMPRequest = function (e, t) {
                var i = parseInt(1e5 * Math.random());
                this.pendingRequests[i] = 1, TRC.cmp("getConsentData", null, function (r) {
                    e.pendingRequests[i] && (delete e.pendingRequests[i], e.consentState = r, e.dispatchRequestWrapper(t))
                }), this.global["max-wait-for-cmp"] && TRC.Timeout.set(function () {
                    e.pendingRequests[i] && TRC.consent.setConsent({wasTimeout: !0})
                }, this.global["max-wait-for-cmp"])
            },this.loadRBox = function () {
                var e = arguments, t = Array.prototype.slice.call(arguments), i = {}, r, o = 40, n = this;
                if (!(t.length < 1)) try {
                    if (this.isPendingLoadRBox || this.preloadRequestLoader) return void setTimeout(function () {
                        this.loadRBox.apply(this, e)
                    }.trcBind(this), 100);
                    t[0] instanceof Array && (t = t[0]), this.till_request_count = 0;
                    for (var a = 0; a < t.length; a++) t[a]["player"] || !0 === t[a]["slider"] || this.till_request_count++;

                    function s(e, t) {
                        e[t.placement] = t, this.internalDrawRBox(t)
                    }

                    for (; t.length;) if ((r = this.computeRBoxOptions(__trcCopyProps(t.shift(), {})))["player"] || !0 === r["slider"]) TRC.Timeout.set(s.trcBind(this, i, r), 0); else {
                        if (i[r.placement]) throw new Error("Placement '" + r.placement + "' is not unique in loadRBox()!");
                        i[r.placement] = r, function (e, t, i) {
                            if (this.isPendingLoadRBox = !0, e.container && 1 === e.container.nodeType) this.till_request_count--; else {
                                if (!TRC.dom.isReady) return !e["player"] && !0 !== e["slider"] && e["visible"] && (e["container"] = this.ensureValidContainer(e["original_container"])), void TRC.Timeout.set(arguments.callee.trcBind(this, e, t, i), t);
                                this.error("Invalid container provided for request " + e.placement + " (" + e.container + ")!"), delete i[e.placement], this.till_request_count--
                            }
                            this.till_request_count <= 0 && (TRC.consent.hasCMP() ? this.dispatchCMPRequest(n, i) : this.dispatchRequestWrapper(i))
                        }.trcBind(this, r, o, i)()
                    }
                } catch (e) {
                    throw __trcError("Error in loadRBox()", e), e
                }
            },this.parseLoaderParams(globalParams),TRC.dom.init(),this.init(configuration),this
        }, protocol = TRC.PROTOCOL;
    Manager.prototype["list-size"] = 0, Manager.prototype.MAX_RETRY = 2, Manager.prototype.drawInterface = !1, Manager.prototype.delayedDispatchLoadRequest = null, Manager.prototype.invisible = !1, Manager.prototype.excludedItems = null, Manager.prototype.boxes = {}, Manager.prototype.itemid = null, Manager.prototype.itemurl = null, Manager.prototype.tags = [], Manager.prototype.metadata = {}, Manager.prototype.gt = {}, Manager.prototype.userMetadata = null, Manager.prototype.loadCalled = !1, Manager.prototype.unique_placement_count = {}, Manager.prototype.trc_url_auto_detection = null, Manager.prototype.shiftPublisherId = function (e) {
        var t = TRC.URL.prototype.getParameter.call(location.href, "taboola_sim_domain") || TRC.URL.prototype.getParameter.call(location.href, "fakeurl"),
            i = win.trc_item_url ? new TRC.URL(win.trc_item_url) : null,
            r = (t || (i ? i.host : null) || location.host).toLowerCase(),
            o = (t || (i ? i.href : null) || location.href).toLowerCase(), n = e[r], a = "/",
            s = ["m", "mobile", "www2", "www3"], l, c, d, h, p, u;
        if (!n) {
            for (__trcToArray(e, l = []), l.sort(function (e, t) {
                return e[0].length > t[0].length ? -1 : e[0].length < t[0].length ? 1 : 0
            }), c = 0, d = l.length; c < d; c++) if ((h = l[c][0].toLowerCase()).indexOf(a) > 0) {
                if (o.match(h)) {
                    n = l[c][1];
                    break
                }
                if (h.indexOf("www.") > -1 && o.match(h.replace("www.", ""))) {
                    n = l[c][1];
                    break
                }
            } else if (r.match(h)) {
                n = l[c][1];
                break
            }
            if (!n && r.indexOf("www.") < 0) {
                for (c = 0, d = s.length; c < d && (p = new RegExp("(https://|http://|^)" + s[c] + "."), !(n = e[u = r.replace(p, "www.")])); c++) ;
                n || (n = e[u = "www." + r])
            }
        }
        TRC.publisherId = n || "unknown-site-on-" + TRC.publisherId, TRC.pConsole("page", "info", "in 'Network-Solution' : publisher-id was set to - " + TRC.publisherId, "")
    }, Manager.prototype.widgetContainerReset = function () {
        for (var e in this.boxes) if (this.boxes.hasOwnProperty(e)) {
            var t = this.boxes[e].container, i;
            if (t) {
                for (i = t.getAttribute(TRC.intersections.TARGET_ATTRIB), t.className = t.origClassName, delete t._trc_container, delete t._trc_anonbox; t.hasChildNodes();) t.removeChild(t.lastChild);
                i && this.removeObserver(i)
            }
            TRC.Timeout.reset(), TRC.Interval.reset(), delete this.boxes[e]
        }
    }, Manager.prototype.feedContainerReset = function () {
        for (var e in this.feeds) if (this.feeds.hasOwnProperty(e)) for (var t = this.feeds[e].mainContainerId, i = document.querySelectorAll("[data-feed-main-container-id=" + t + "]"), r, o, n = 0; n < i.length; n++) o = (r = i[n]).getAttribute(TRC.intersections.TARGET_ATTRIB), n > 0 ? r.remove() : (r.className = r.origClassName, r.innerHTML = "", o && this.removeObserver(o))
    }, Manager.prototype.removeObserver = function (e) {
        for (var t = e.split(" "), i = 0; i < t.length; i++) TRC.intersections.unobserve(t[i])
    }, Manager.prototype.getProperty = function (e, t, i) {
        return i && i.hasOwnProperty(t) && void 0 !== i[t] ? i[t] : void 0 === this.modes || void 0 === this.modes[e] || void 0 === this.modes[e][t] ? this[t] : this.modes[e][t]
    }, Manager.prototype.getFunction = function (e, t, i) {
        var r = Array.prototype.slice.call(arguments, 3), o = this.getProperty(e, t, i);
        if ("function" == typeof o) return TRC.pConsole(e, "debug", "Hook : " + t, o.toString(), "function"), o.apply(this, r)
    }, Manager.prototype.readMetaTag = function (e) {
        for (var t = document.head.getElementsByTagName("meta"), i = null, r = 0; r < t.length; r++) if (t[r].name) {
            if (t[r].name.toLowerCase() == "item-" + e.toLowerCase()) return t[r].content;
            t[r].name.toLowerCase() == e.toLowerCase() && (i = t[r].content)
        }
        return i
    }, Manager.prototype.get_intent = function () {
        var e = win.location.href, t = TRC.pageManager.getPublisherValue(TRC.publisherId, "auto-play-intent");
        if (null != t) {
            var i = t.split(":");
            if (parseInt(i[0]) > (new Date).getTime() - 3e4 && i[1] == this.getItemId()) return void 0 !== i[2] ? i[2] : "n"
        }
        return e.search(this.getItemId()) >= 0 ? "s" : "u"
    }, Manager.prototype["get-creator"] = function () {
        return this.readMetaTag("uploader") || this.readMetaTag("creator")
    }, Manager.prototype["get-tags"] = function () {
    }, TRC.implClasses = TRC.implClasses || {}, Manager.prototype.logTrcEvent = function (e, t, i, r, o) {
        var n = !1, a, s, l, c, d;
        if (t.tim = __trcClientTimestamp(), t.id = parseInt(1e4 * Math.random()), t.llvl = win.trc_debug_level, this.global["tmp-disable-cv"] || (t.cv = this.version), !TRC.isKilled || !TRC.isKilled()) {
            if (this.configForPostEvent[e]) try {
                if (a = this.global["send-full-list"] && i ? __trcCopyProps(t, {}, i) : t, c = this.shouldPostEventAsAjax(e), l = (s = (d = this.global["rbox-ajax-post-events-full-rollout"]) ? "" : "new-") + e, c) try {
                    this.logPostTrcEventAsAjax(l, a)
                } catch (n) {
                    !1 !== this.configForGetEvent[e] && d || (t.fbe = 1, this.logGetTrcEvent(l, t, r, i, o))
                }
                d || this.logPostTrcEvent(e, a)
            } catch (e) {
                n = !0, __trcError("Error in sending post event", e)
            }
            (n || !1 !== this.configForGetEvent[e] || !0 !== this.configForPostEvent[e]) && ((!1 === this.configForGetEvent[e] || n) && (t.fbe = 1), this.logGetTrcEvent(e, t, r, i, o))
        }
    }, Manager.prototype.isValidForFill = function (e, t) {
        try {
            if (("available" == e || "visible" == e) && this.global["enable-get-fil"] && this.global["get-fil-n-items"] >= this.preloadRequest[t].response.trc["video-list"].video.length) return !0
        } catch (e) {
        }
        return !1
    }, Manager.prototype.shouldEnableFraudDetection = function () {
        var e, t, i;
        return !!this.global["test_for_fraud"] && (0 !== (t = this.global["fraud-traffic-percentage"]) && (t = t || 10, (i = Math.floor(100 * Math.random())) <= t))
    }, Manager.prototype.enableFraudDetection = function () {
        if (!TRC.clickFraudDetect.isInitialized) try {
            TRC.clickFraudDetect.init(TRC.publisherId, TRC.pageManager.getValue("user-id"), this.referrer, this)
        } catch (e) {
            __trcWarn("failed to init fraud detection")
        }
    }, Manager.prototype.logGetTrcEvent = function (e, t, i, r, o) {
        var n, a, s, l, c, d;
        for (n in TRC.tlf && console.time("in logGetTrcEvent - " + e), t) t.hasOwnProperty(n) && (t[n] = this["normalize-log-param"](n, t[n]));
        a = this["normalize-log-param"]("publisher", TRC.publisherId), e = this["normalize-log-param"]("type", e), this.isValidForFill(e, o) && (t = __trcCopyProps(t, {}, r));
        try {
            for (l in s = protocol + "//" + this.domain + "/" + a + "/log/3/" + escape(e) + "?", s += this.trcByPass ? "trc_skip_failover=yes&" : "", t) t.hasOwnProperty(l) && (c = "_" == l.charAt(0) ? l.substr(1) : l, void 0 !== t[l] && null != t[l] && (0 == l.indexOf("unescape-") ? s += l.replace("unescape-", "") + "=" + t[l] + "&" : s += escape(c) + "=" + escape(t[l]) + "&"));
            d = new Image, this.eventLogger.push(d), i && (d.onload = d.onerror = function () {
                if ("function" == typeof i) try {
                    i()
                } catch (e) {
                    __trcError("Error in event callback", e)
                }
                return !0
            }), d.src = s
        } catch (e) {
            __trcError("Error in sending event", e)
        }
        TRC.tlf && console.timeEnd("in logGetTrcEvent - " + e), TRC.performance && "available" === e && TRC.performance.mark("8.1.9"), TRC.performance && "visible" === e && TRC.performance.mark("9.1.9")
    }, Manager.prototype.logPostTrcEvent = function (e, t) {
        TRC.tlf && console.time("in logPostTrcEvent - " + e);
        var i, r = this["normalize-log-param"]("publisher", TRC.publisherId), e,
            o = "tb-trc-transportFrame-" + (e = this["normalize-log-param"]("type", e)) + "-" + t.id,
            n = this.getTransportForm(o), a = document.getElementById(o), s;
        for (var l in t) t.hasOwnProperty(l) && ((i = doc.createElement("input")).name = ("_" == l.charAt(0) ? l.substr(1) : l).replace(/unescape-/g, ""), i.type = "hidden", i.value = this["normalize-log-param"](l, t[l]), n.appendChild(i));
        if (!a) throw new Error("post iframe can be created");
        TRC.Browser.ie && ((s = a.contentDocument ? a.contentDocument : a.contentWindow.document).write(""), s.close()), n.action = protocol + "//" + this.domain + "/" + r + "/log/3/" + escape(e) + (this.trcByPass ? "?trc_skip_failover=yes" : ""), n.submit(), TRC.tlf && console.timeEnd("in logPostTrcEvent - " + e), TRC.performance && "available" === e && TRC.performance.mark("8.2.9"), TRC.performance && "visible" === e && TRC.performance.mark("9.2.9")
    }, Manager.prototype.getTransportForm = function (e) {
        var t, i;
        return (i = doc.createElement("form")).className = "trc-hidden " + TRANSPORT_FORM_ELEMENT, i.target = e, i.style.display = "none", i.method = "post", doc.body.appendChild(i), (t = doc.createElement("span")).className = TRANSPORT_FORM_ELEMENT, t.innerHTML = '<iframe class="trc-hidden" id="' + e + '" name="' + e + '" width="0" height="0" style="display:none"></iframe>', doc.body.appendChild(t), i
    }, Manager.prototype.shouldPostEventAsAjax = function (e) {
        var t = this.global["rbox-post-events-as-ajax"];
        return t && ("boolean" == typeof t || -1 !== t.indexOf(e))
    }, Manager.prototype.logPostTrcEventAsAjax = function (e, t) {
        var i = !1, r = win.XDomainRequest || TRC.Browser.ieUpto(9);
        if (!r) try {
            TRC.TRCLogger.post(protocol + "//" + this.domain, e, t)
        } catch (e) {
            i = !0, __trcError("Error in sending post event as ajax", e)
        }
        (r || i) && this.logPostTrcEvent(e, t)
    }, Manager.prototype.log1 = function (e, t, i, r, o) {
        var n = e + ":" + (o || t.li + t.ii) + t.ri;
        t.ii && t.it && (n = e + ":" + t.li + t.ii + t.ri), this.eventCounter[n] ? this.eventCounter[n]++ : (this.logTrcEvent(e, t, i, r, o), this.eventCounter[n] = 1)
    }, Manager.prototype.loadExternal = function () {
        return TRC.net.loadScript.apply(null, arguments)
    }, Manager.prototype.parseLoaderParams = function (e) {
        for (var t in e) if (e.hasOwnProperty(t)) {
            var i = e[t];
            if ("unknown" == i) continue;
            switch ("auto" == i && (i = ""), t) {
                case"visible":
                    this.invisible = !("boolean" == typeof i ? i : "false" != i);
                    break;
                case"video":
                    win.trc_video_id = i, TRC.listOrigin.setSource("v");
                    break;
                case"url":
                    win.trc_item_url = i;
                    break;
                case"article":
                    win.trc_article_id = i, TRC.listOrigin.setSource("t");
                    break;
                case"category":
                    win.trc_article_id = i, TRC.listOrigin.setSource("c");
                    break;
                case"home":
                    win.trc_article_id = i, TRC.listOrigin.setSource("h");
                    break;
                case"search":
                    win.trc_article_id = i, TRC.listOrigin.setSource("s");
                    break;
                case"photo":
                    win.trc_article_id = i, TRC.listOrigin.setSource("p");
                    break;
                case"other":
                    win.trc_article_id = i, TRC.listOrigin.setSource("o");
                    break;
                case"content_hub":
                    win.trc_article_id = i, TRC.listOrigin.setSource("z");
                    break;
                case"link_target":
                    this.link_target = i;
                    break;
                case"video_source":
                    this.video_source = i;
                    break;
                case"callback":
                    this.video_player_callback = i;
                    break;
                case"player_reference":
                    this.video_player_reference = i;
                    break;
                case"target_type":
                    TRC.listOrigin.setTarget(this.target_type = i);
                    break;
                case"exclude":
                    this.excludedItems = i instanceof Array ? i : [i];
                    break;
                case"tracking":
                    this.tracking = i;
                    break;
                case"referrer":
                    this.referrer = i;
                    break;
                case"amp_disable_resize":
                    this.amp_disable_resize = i;
                case"user_opt_out":
                    this.userOptOut = !(!i || "false" == i || "0" == i);
                    break;
                case"device":
                    this.deviceId = i;
                    break;
                case"unified_id":
                    this.unifiedId = i;
                    break;
                case"user_type":
                    this.userType = i;
                    break;
                case"external_page_view":
                    this.external_page_view = i;
                    break;
                case"tracking_codes":
                    this.tracking_codes = i;
                    break;
                case"additional_data":
                    this.additional_data = i;
                    break;
                case"framework":
                    this.framework = i;
                    break;
                case"iab_alternative_config":
                    this.consentConfigOverride = i;
                    break;
                case"consentMessage":
                    TRC.consent.setConsent(i)
            }
        }
    }, Manager.prototype.getItemByMetaValue = function (e) {
        for (var t = document.head.getElementsByTagName("meta"), i = 0; i < t.length; i++) if (t[i].name == e) return t[i].content;
        return null
    }, Manager.prototype.getItemByCanonicalValue = function (e, t) {
        for (var i = document.head.getElementsByTagName("link"), r = 0; r < i.length; r++) if ("canonical" == i[r].rel) return t.call(this, e, i[r].href);
        return null
    }, Manager.prototype.getItemByOgValue = function (e, t) {
        for (var i = document.head.getElementsByTagName("meta"), r = 0; r < i.length; r++) if ("og:url" == i[r].getAttribute("property") && i[r].content.length > 5) return t.call(this, e, i[r].content);
        return null
    }, Manager.prototype.getItemByLocationValue = function (e, t) {
        return t.call(this, e, TRC.pageManager.getCurrentURL().toString())
    }, Manager.prototype.getItemByParamUrl = function (e, t) {
        return !win.trc_item_url || "item-id" != e && "item-url" != e ? null : t.call(this, e, win.trc_item_url)
    }, Manager.prototype.getAutoItemMeta = function (e, t, i, r) {
        var o = ["paramUrl", "meta", "canonical", "og", "location"], n = {
            paramUrl: "getItemByParamUrl",
            meta: "getItemByMetaValue",
            canonical: "getItemByCanonicalValue",
            og: "getItemByOgValue",
            location: "getItemByLocationValue"
        }, a = this.global["url-extract-order"] ? this.global["url-extract-order"] : o, s = 0, l, c, d;
        for (a.push("location"), t = t ? i.call(this, e, t) : null; s < a.length && TRC.util.isEmptyString(t);) {
            c = a[s], l = this[n[a[s]]];
            try {
                t = l ? l.call(this, e, i) : null
            } catch (e) {
                if (!this.global["tmp-catch-item-url-err"]) throw new Error(e.message);
                t = ""
            }
            s++
        }
        return "item-url" == e && "getItemByParamUrl" == c ? t : (d = "getItemByLocationValue" != c, t = r ? r.call(this, t, win.trc_video_id ? "video" : "text", d) : t)
    }, Manager.prototype.sendEvent = function (e, t, i, r, o, n) {
        var a = !1, s = {
            ri: TRC.events_ri,
            sd: this.getSessionData(TRC.session_data),
            ui: TRC.pageManager.getValue("user-id"),
            pi: this.getItemId(),
            wi: this.watchedItem ? this.watchedItem : null,
            pt: this.getItemType(),
            vi: TRC.pageManager.getPageData()
        }, l = function () {
            a || (a = !0, o && o())
        };
        __trcCopyProps(t, s), r ? (this.log1(e, s, i, l, this.placement), TRC.pConsole("page", "info", "event type : " + e + " - this event will be sent only once for the widget", s, "object")) : (this.logTrcEvent(e, s, i, l), TRC.pConsole("page", "info", "sending event type : " + e, s, "object")), "number" == typeof n && TRC.Timeout.set(l, n)
    }, Manager.prototype.getSystemFlag = function (e) {
        return this.systemFlags && void 0 !== this.systemFlags[e] ? this.systemFlags[e] : null
    }, Manager.prototype.isThinLoaderMode = function () {
        return "thin" === this.getSystemFlag("loaderType")
    }, Manager.prototype.getSessionData = function (e) {
        var t = TRC.pageManager.getPublisherValue(TRC.publisherId, "session-data"), i, r;
        return (!0 === this.global["prefer-response-session-data"] || !t) && e ? e : t
    }, Manager.prototype.GlobalRequetParams = function () {
        var e = {id: parseInt(1e3 * Math.random())};
        this.setItemId = function (t) {
            t && (e.ii = t)
        }, this.setTemplate = function (t) {
            t && (e.tmpl = t)
        }, this.setItemType = function (t) {
            t && (e.it = t)
        }, this.setSessionData = function (t) {
            e.sd = t
        }, this.setUserId = function (t) {
            e.ui = t
        }, this.setUserIdFirstPartyCookie = function (t) {
            e.uifp = t
        }, this.setUserLanguages = function (t) {
            t && (e.ul = t)
        }, this.setCmpStatus = function (t) {
            "number" == typeof t && (e.cmps = t)
        }, this.setConsentDaisyBit = function (t) {
            "string" == typeof t && (e.cdb = t)
        }, this.setCmpStatus = function (t) {
            "number" == typeof t && (e.cmps = t)
        }, this.setGdprApplies = function (t) {
            "boolean" == typeof t && (e.ga = t)
        }, this.setGdprWasTimeout = function (t) {
            "boolean" == typeof t && (e.gwto = t)
        }, this.setViewId = function (t) {
            e.vi = t
        }, this.setClientVersion = function (t) {
            e.cv = t
        }, this.setPublisherVersion = function (t) {
            e.uiv = t
        }, this.setItemUrl = function (t) {
            t && (e.u = t)
        }, this.setPlacementsParamsArray = function (t) {
            e.r = t
        }, this.getPlacementsParamsArray = function () {
            return e.r
        }, this.setPastExclusions = function (t) {
            e.px = t
        }, this.setScreenHeight = function (t) {
            e.sh = t
        }, this.setScreenWidth = function (t) {
            e.sw = t
        }, this.setBrowserWidth = function (t) {
            e.bw = t
        }, this.setArticlePos = function (t) {
            e.bad = t
        }, this.setExclusions = function (t) {
            e.ex = t
        }, this.enableTrcTesMode = function () {
            e.y = !0
        }, this.setReferrer = function (t) {
            e.e = t
        }, this.setMetaData = function (t) {
            e.m = t
        }, this.setItemUrlQueryString = function (t) {
            t && (e.qs = t)
        }, this.setNetworkID = function (t) {
            e.nsid = t
        }, this.getId = function () {
            return e.id
        }, this.setAll = function (t) {
            t && (e = t)
        }, this.getAll = function () {
            return e
        }, this.setRtui = function (t) {
            e.rtui = e.rtui || [], "object" == typeof t && e.rtui.push(t)
        }, this.setDeviceId = function (t) {
            t && (e.did = t)
        }, this.setUnifiedId = function (t) {
            t && (e.unuid = t)
        }, this.setUserType = function (t) {
            t && (e.usrtyp = t)
        }, this.setExternalPageView = function (t) {
            t && (e.extpvid = t)
        }, this.setUTMParams = function (t) {
            t && (e.pp = t)
        }, this.setBlockVideoLoader = function (t) {
            t && (e.bv = t)
        }, this.setLocalStoragePiggyback = function (t) {
            t && (e[TRC.LOCAL_STORAGE_PIGGYBACK] = t)
        }, this.setBlockThumbnailVideoLoader = function (t) {
            t && (e.btv = t)
        }, this.setConnectionType = function (t) {
            t && (e.con = t)
        }, this.setConnectionSpeed = function (t) {
            t && (e.cos = t)
        }, this.setAdditionalData = function (t) {
            t && (e.ad = t)
        }
    }, Manager.prototype.PlacementParams = function () {
        var e = {};
        this.setListId = function (t) {
            e.li = t
        }, this.setListSize = function (t) {
            e.s = t
        }, this.setUIMode = function (t) {
            e.uim = t
        }, this.setUIPlacement = function (t) {
            e.uip = t
        }, this.setContainerPos = function (t) {
            e.cd = t
        }, this.setContainerWidth = function (t) {
            e.mw = t
        }, this.setOriginalUIPlacement = function (t) {
            e.orig_uip = t
        }, this.setRequiredAttr = function (t) {
            e.ra = t
        }, this.setAllowedCategories = function (t) {
            e.ac = t
        }, this.setNativeCampaignID = function (t) {
            e.nvcid = t
        }, this.setExclusions = function (t) {
            e.ex = t
        }, this.setFeedIndex = function (t) {
            e.fi = t
        }, this.setFeedBatch = function (t) {
            e.fb = t
        }, this.setFeedTemplateId = function (t) {
            e.fti = t
        }, this.setAll = function (t) {
            e = t
        }, this.getAll = function () {
            return e
        }
    }, Manager.prototype.log = __trcLog, Manager.prototype.error = __trcError, Manager.prototype.warn = __trcWarn, Manager.prototype.info = __trcInfo, Manager.prototype.debug = __trcDebug, TRC.EVENT_PAGE_INTERACTIVE = "trcPageInteractive", TRC.EVENT_PAGE_LOAD = "trcPageLoad", Manager.prototype._repaintEllipsis = function (e) {
        var t = e.data && e.data.boxes;
        TRC.Ellipsis.doEllipsis(TRC.util.filterObj(function (e) {
            return e.shouldUseSmartEllipsis()
        }, t || this.boxes))
    }, Manager.prototype.sendExternalTracking = function (e) {
        if (!TRC.botDetected) {
            var t = this.generatePixelsMarkup(e), i, r = !TRC.Browser["ieUpto"](8);
            try {
                t && (r && (r = this.appendPixelsToIFrame(t)), r || ((i = doc.createElement("span")).innerHTML = t, doc.body.appendChild(i)))
            } catch (e) {
                __trcError("Error in Manager.sendExternalTracking")
            }
        }
    }, Manager.prototype.loadScriptTags = function (e) {
        var t = e.data, i, r;
        for (r = 0; t && r < t.length; r++) if (i = t[r], !this.loadedJsTags.hasOwnProperty(i)) try {
            i = TRC.URL.prototype.switchProtocol.call(i, TRC.PROTOCOL), TRC.net.loadScript(i, "js", null, null, !0), this.loadedJsTags[i] = !0
        } catch (e) {
            __trcWarn("Error appending script at position " + r + ", url=" + i, e)
        }
    }, Manager.prototype.listenToRenderedModes = function () {
        TRC.eventDelegator.subscribe("onrender", function () {
            this.renderedModeCounter++, this.renderedModeCounter !== this.totalModeCounter || TRC.yieldingEnabled || TRC.dispatch("allrender", {data: this})
        }.trcBind(this))
    }, Manager.prototype.generatePixelsMarkup = function (e) {
        for (var t = "", i, r = 0; e && r < e.length; r++) (i = TRC.text.encodeHTML(e[r])) && (t += '<img width="0" height="0" src="' + TRC.URL.prototype.switchProtocol.call(i, protocol, !0) + '">');
        return t
    }, Manager.prototype.appendPixelsToIFrame = function (e) {
        var t = /<img [^>]*src="([^"]+)"[^>]*>/gm, i;
        return (i = this.global["disable-unified-iframe-pixel-reporter"] ? this.appendPixelsToIFrameMultipleIframes(e) : this.appendPixelsToIFrameUnifiedIframes(e)) && this.global["track-external-pixel-traffic"] && this.global["track-external-pixel-traffic"] > 100 * Math.random() && TRC.modDebug.logMessageToServer(1, "fire external pixel", {
            idx: "pix",
            plat: this.getPlatformCode(),
            urls: e.match(t)
        }), i
    }, Manager.prototype.appendPixelsToIFrameUnifiedIframes = function (e) {
        var t, i = "trc-pixel-iframe-" + parseInt(1e4 * Math.random(), 10), r, o, n = !1, a;
        if (e) {
            try {
                this.iframePixelReporter ? r = this.iframePixelReporter : ((t = doc.createElement("span")).innerHTML = '<iframe class="trc-hidden" id="' + i + '" name="' + i + '" width="0" height="0" style="display:none"></iframe>', doc.body.appendChild(t), r = doc.getElementById(i), this.iframePixelReporter = r), o = r.contentDocument ? r.contentDocument : r.contentWindow.document, (a = doc.createElement("span")).innerHTML = e, o.body.appendChild(a), n = !0, o.close()
            } catch (e) {
                __trcDebug("Failed to create IFrame for external tracking")
            }
            return n
        }
    }, Manager.prototype.appendPixelsToIFrameMultipleIframes = function (e) {
        var t, i = "trc-pixel-iframe-" + parseInt(1e4 * Math.random(), 10), r, o, n = !1;
        if (e) {
            try {
                (t = doc.createElement("span")).innerHTML = '<iframe class="trc-hidden" id="' + i + '" name="' + i + '" width="0" height="0" style="display:none"></iframe>', doc.body.appendChild(t), r = doc.getElementById(i), this.iframePixelReporter = r, (o = r.contentDocument ? r.contentDocument : r.contentWindow.document).body.innerHTML = e, n = !0, o.close()
            } catch (e) {
                __trcDebug("Failed to create IFrame for external tracking")
            }
            return n
        }
    }, Manager.prototype.placementShouldHaveResponseData = function (e, t) {
        return 1 != e.pv2 && t.search("rbox-tracking") < 0 && !e.isFeed && !e.isIframeCard && !e.externalContainerSelector && !e.isStandaloneVideo && !e.scriptData && !e.publisherCardData
    }, Manager.prototype.placementHasResponseData = function (e) {
        return null != e.response || e.dc
    }, Manager.prototype.handleFeedCardPlacement = function (e, t) {
        t.isFeedCard = !0, t.parentFeed = this.getOrCreateFeed(e), t.parentFeed.handlePlacement(t)
    }, Manager.prototype.getOrCreateFeed = function (e) {
        var t = e.fpl, i = e.uuip, r = this.preloadRequest[t], o = this.feeds[t], n = this.getFeedConfig(t), a = {
            nextBatchDistanceThreshold: n["nbdt"],
            feedCss: n["css"],
            feedCssOverride: n["fcss"],
            mobileLayout: n["fml"],
            videoSingleManager: n["vsm"],
            feedUi: n["fui"],
            feedNextUp: n["fnu"],
            feedDynamicParameters: n["drp"],
            wasWidget: TRC.util.isTrue(n["ww"]),
            hasFeedUI: void 0 === n["hfu"] || TRC.util.isTrue(n["hfu"]),
            videoDisclosurePosition: n["vdp"],
            uiDesignVersion: n["udv"]
        };
        return o || (r.fti = n["fti"], r.unifiedPlacement = i, o = new TRC.Feed(this, r, a), this.feeds[t] = o, r.isFeed = !0), n["eof"] && o.stopScrolling(), n["nb"] && o.updateNextBatchNumber(n["nb"]), o
    }, Manager.prototype.getOrCreatePlacementData = function (e, t) {
        var i = this.preloadRequest[e];
        return i || (i = this.createPlacementData(e, t)) && (this.preloadRequest[e] = i), i
    }, Manager.prototype.createPlacementData = function (e, t) {
        return this.isRegularWidget(t) ? this.createAddedWidgetData(e, t) : this.isFeedIframe(t) ? this.createFeedIframe(e, t) : this.isFeedScriptWidget(t) ? this.createFeedScriptWidgetData(e, t) : this.isExternalContainerWidget(t) ? this.createExternalWidgetData(e, t) : this.isStandaloneVideo(t) ? this.createStandaloneVideoWidgetData(e, t) : this.isPublisherCard(t) ? this.createPublisherCardData(e, t) : void 0
    }, Manager.prototype.isRegularWidget = function (e) {
        return e.m
    }, Manager.prototype.createAddedWidgetData = function (e, t) {
        return {placement: e, mode: t.m, mode_name: t.m, addWidget: !0}
    }, Manager.prototype.isFeedScriptWidget = function e(t) {
        return t.fpl && t.js
    }, Manager.prototype.isFeedIframe = function (e) {
        return e.fpl && e.ifr
    }, Manager.prototype.isPublisherCard = function (e) {
        return e.fpl && e.pcp
    }, Manager.prototype.createFeedScriptWidgetData = function (e, t) {
        return {placement: e, addWidget: !0, scriptData: t}
    }, Manager.prototype.createFeedIframe = function (e, t) {
        return {placement: e, addWidget: !0, iframeData: t, isIframeCard: !0}
    }, Manager.prototype.createPublisherCardData = function (e, t) {
        return {placement: e, addWidget: !0, publisherCardData: t.pcp}
    }, Manager.prototype.isExternalContainerWidget = function (e) {
        return void 0 !== e.es && null !== e.es
    }, Manager.prototype.createExternalWidgetData = function (e, t) {
        return {placement: e, externalContainerSelector: t.es}
    }, Manager.prototype.isStandaloneVideo = function (e) {
        return e.vtag && e.vtag.position === TRC.VideoTagLoader.prototype.LOCATION_TYPES.STANDALONE
    }, Manager.prototype.createStandaloneVideoWidgetData = function (e, t) {
        return {placement: e, isStandaloneVideo: !0}
    }, Manager.prototype.getFeedConfig = function (e) {
        return this.feedConfigs && this.feedConfigs[e] ? this.feedConfigs[e] : {}
    }, Manager.prototype.hasFeedConflict = function (e, t) {
        return this.feeds[e] || this.hasFeedTestDataMismatch(t)
    }, Manager.prototype.hasFeedTestDataMismatch = function (e) {
        var t = this.feeds[e];
        return !(!t || t.getTestData() === this.testData)
    }, Manager.prototype.getSortedCloudinaryRatios = function () {
        var e, t;
        if (!this.cloudinarySortedRatios) {
            e = this.global["cloudinary-aspect-ratios-list"] || [[1, 2], [1, 1.9], [1, 1.8], [9, 16], [1, 1.7], [1, 1.6], [1, 1.5], [1, 1.4], [3, 4], [1, 1.3], [1, 1.2], [1, 1.1], [1, 1], [1, .9], [6, 5], [1, .8], [4, 3], [1, .7], [3, 2], [1, .6], [16, 9], [2, 1]];
            for (var i = 0; i < e.length; i++) t = e[i], e[i] = t[0] / t[1];
            this.cloudinarySortedRatios = e.sort()
        }
        return this.cloudinarySortedRatios
    }, Manager.prototype.getExpandOptions = function (e) {
        var t = {expandType: e["et"]};
        return e["ch"] && (t.collapsedHeight = e["ch"]), e["ebc"] && (t.expandButtonCaption = e["ebc"]), e["cbc"] && (t.collapseButtonCaption = e["cbc"]), t
    }, Manager.prototype.clearPageElements = function () {
        this.clearTransportFrames(), this.clearUserXElements(), this.clearStyleSheets()
    }, Manager.prototype.clearTransportFrames = function () {
        var e;
        document.querySelector && [].slice.call(document.querySelectorAll("." + TRANSPORT_FORM_ELEMENT)).forEach(function (e) {
            e.parentNode.removeChild(e)
        })
    }, Manager.prototype.clearUserXElements = function () {
        TRC.userX && TRC.userX.reset()
    }, Manager.prototype.clearStyleSheets = function () {
        this.global["clear-styles-on-reset"] && TRC.dom.removeAllInjectedStyleSheets()
    }, Manager.prototype.shouldBlockVideoLoader = function (e) {
        var t = !1;
        return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole("page", "info", "Blocked video: " + t + ", block-video-prob: " + e, "string"), t
    }, Manager.prototype.shouldBlockThumbnailVideoLoader = function (e) {
        var t = !1;
        return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole("page", "info", "Blocked thumbnail video: " + t + ", block-Thumbnail-video-prob: " + e, "string"), t
    }, Manager.prototype.getPublisherVersionPropertyWithFallbackToNetwork = function (e) {
        return this[e][TRC.publisherId] || TRC.networkId && this[e][TRC.networkId]
    }, Manager.prototype.getSiteNameOgValue = function () {
        return this.siteName || (this.siteName = this.getPageMetaPropertyValue("og:site_name")), this.siteName
    }, Manager.prototype.getPageMetaPropertyValue = function (e) {
        for (var t = document.head.getElementsByTagName("meta"), i = 0; i < t.length; i++) if (t[i].getAttribute("property") === e) return t[i].content;
        return __trcDebug("Failed finding meta tag property : " + e + " value"), null
    }, Manager.prototype.initWorker = function () {
        this.global["xhr-worker"] && TRC.initWorker()
    }
}(window, document), function (t, i) {
    TRC.implClasses = TRC.implClasses || {};
    var r = TRC.implClasses.TRCRBox = function (e, t, i) {
            return this._id = Math.floor(1e5 * Math.random()), this.fixHeight = t.height, this.domain = i.domain, this.origin = e, this.header = !1, this.id = "trc_" + this._id, this.response = this.request = null, __trcCopyProps(t, this), this.loaded = !!this.loaded && this.loaded, this.element = null, this.listContainer = null, this.retryCount = 0, this.drawList = !1, this.forceItemType = !1, this.trc = i, this.util = TRC.util, this.timeoutId = null, this.errorHandler = "", this.boxes = [], this.visible_boxes = {}, this.synd_visible_boxes = {}, this.network_visible_boxes = {}, this.native_visible_boxes = {}, this.new_visible_boxes = {}, this.synd_new_visible_boxes = {}, this.network_new_visible_boxes = {}, this.native_new_visible_boxes = {}, this.recommendationList = null, this.MIN_VISIBLE_ITMES = this.trc.global["min-visible-items"] || 1, this.visibilityIntersectionApiFullRollout = this.trc.global["visibility-intersection-api-full-rollout"], this.visibilityIntersectionApiEventName = this.visibilityIntersectionApiFullRollout ? "visible" : "new-visible", this.use_cdn = !0 === this.trc.getProperty(this.mode_name, "use-cdn-recommendations", this.propertiesOverride), this.postRenderQueue = new TRC["PostRenderQueue"], this.pager = null, this.src = null, this.fullEventItemsHash = {}, this.isCssImportant = this.trc.getProperty(this.mode_name, "use-css-important", this.propertiesOverride), this.publisher = TRC.publisherId, this.auto_scroll_interval = null, this.auto_scroll = null, this.smallIOSDevice = this.trc["small-ios-device"] || "iPhone|iPod", this.isSmallIOS = this.smallIOSDevice.indexOf(TRC.Device.deviceType) >= 0, this.isFeedCard = t.isFeedCard, this.iosLinkTarget = this.trc.getProperty(this.mode_name, "ios-sc-link-target-mode", this.propertiesOverride) || this.trc.global["ios-sc-link-target"], this.defaultLinkTarget = this.trc.global["link-target-conf"] || {
                NAV: "_self",
                NT: "_blank",
                SP: "_blank"
            }, this.linkTargetConf = this.isSmallIOS && this.iosLinkTarget ? this.iosLinkTarget : this.trc["link-target-conf"], this.ntHandlerEnabled = this.trc.global["publisher-onclick-nt-enabled"], this.organicRedirParam = this.trc.global["organic-redirect-param"], this.shiftRedirOnclick = this.trc.global["shift-redir-onclick"], this.manualVisibility = !((t.isFeedCard || window.AMP_MODE) && "mobile-sdk" !== this.trc.framework || !t.manualVisibilityTrigger && !this.trc.manualVisibilityTrigger || !this.trc.global["enable-manual-visible"]), this.useRedirect = this.trc.global["enable-organic-redirect"], this.useRedirectOnLink = this.trc.global["use-redirect-on-link"], this.adcItemTypes = this.trc.global["adchoice-item-types"] || {
                "is-organic": !1,
                "is-in-network": !1,
                "is-syndicated": !0,
                "is-native": !0
            }, this.sendClickPiggyBack = this.trc.global["send-pb-in-click"], this.sendModeDebugData = this.trc.global["send-debug-mode"], this.imagesAltUrls = this.trc.global["images-alt-urls"] || [], this.lazyImageLoadMethdos = {
                PAGE_LOAD: "regLazyImageLoadOnPageLoad",
                PAGE_INTERACTIVE: "regLazyImageLoadOnPageInteractive",
                RBOX_VISIBLE: "regLazyImageLoadOnRboxVisibile"
            }, this.reqParams = {
                "item-type": this.trc.getItemType(),
                "item-id": this.trc.getItemId()
            }, this.apiData = [], this.lazyLoadImageObserversIds = [], this.resetVisibilityData = function () {
                this.visible_boxes = {}, this.synd_visible_boxes = {}, this.network_visible_boxes = {}, this.native_visible_boxes = {}, this.new_visible_boxes = {}, this.synd_new_visible_boxes = {}, this.network_new_visible_boxes = {}, this.native_new_visible_boxes = {}
            }, this
        }, o = "data-img-src",
        n = "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_80%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces%2Ce_sharpen/",
        a = "https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/", s = TRC.PROTOCOL, l, c, d, h,
        p;
    r.prototype.getImageUrlPrefix = function () {
        return n
    }, r.prototype.DEFAULT_THUMB_RATIO = .8, r.prototype.genRBoxURL = function (e, i) {
        if (e = e || null, t.trc_testmode) return this.getRetryUrl("static-preview");
        var r = {};
        return r[this.placement] = this, this.formatedTRCRequest = i || this.trc.formatTRCRequest(r, this.forceItemType, !0), this.formatedTRCRequest.cb = this.trc.genCallback(this.loadScriptCallback.trcBind(this, e)), this.trc.createRequestUrl(this.formatedTRCRequest)
    }, r.prototype.getListId = function () {
        return this.visible ? "rbox-" + this.origin : "rbox-tracking"
    }, r.prototype.getSessionId = function () {
        return this.response && this.response.trc ? this.response.trc["session-id"] : null
    }, r.prototype.getItemType = function () {
        return this.forceItemType ? this.forceItemType : this.trc.getItemType()
    }, r.prototype.generateRDiv = function () {
        var e = document.createElement("div");
        return e.id = this.getListId(), e.className = "trc_rbox_div trc_rbox_border_elm", "none" != this.element.style.display && (e.style.display = "none"), e.style.overflowX = "hidden", e.style.overflowY = "hidden", e
    }, r.prototype.generateHeader = function (e) {
        var t = this.getWidgetToFeedHelper(), i = document.createElement("div"), r = document.createElement("span"),
            o = this.trc.getProperty(this.mode_name, "header", this.propertiesOverride),
            n = this.trc.getProperty(this.mode_name, "header-right", this.propertiesOverride), a = "No Header" !== n;
        if (i.id = this.id.replace("trc_", "trc_header_"), i.className = "trc_rbox_header trc_rbox_border_elm", r.className = "trc_rbox_header_span", this.generateHeaderIcon(r), i["ext"] = document.createElement("div"), i["ext"].className = "trc_header_ext", i.appendChild(i["ext"]), a) this.generateHeaderPart(r, o, "trc_header_left_column trc_header_left_part"), this.generateHeaderPart(r, n, "trc_header_right_column trc_header_right_part"); else {
            var s = "No Header" !== o ? o : "";
            r.insertAdjacentHTML("beforeend", s)
        }
        return i["titleBox"] = r, i.appendChild(r), t && !t.getHeader() ? t.addHeaderToFeed(i) : e.appendChild(i), i
    }, r.prototype.generateHeaderIcon = function (e) {
        var t, i, r, o = this.trc.getProperty(this.mode_name, "header-icon", this.propertiesOverride) || "NONE";
        "CUSTOM" === o ? r = this.trc.getProperty(this.mode_name, "header-icon-url", this.propertiesOverride) : "PUBLISHER_LOGO" === o && (r = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-logo")), r && ((i = document.createElement("img")).className = "trc_rbox_header_icon_img trc_img", i.src = TRC.URL.prototype.switchProtocol.call(r, s), (t = document.createElement("div")).className = "trc_rbox_header_icon_div", t.appendChild(i), e.appendChild(t), e.className += " trc_rbox_header_icon_span")
    }, r.prototype.generateHeaderPart = function (e, t, i) {
        var r = document.createElement("span");
        r.className = "trc_inner_header " + (i || ""), r.insertAdjacentHTML("beforeend", t), e.appendChild(r)
    }, r.prototype.render = function (e) {
        TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui render");
        var t = this.trc.getProperty(this.mode_name, "auto-scroll", this.propertiesOverride);
        this.element = document.createElement("div"), this.element.id = this.id.replace("trc_", "trc_wrapper_"), this.element.className = "trc_rbox" + " " + this.mode_name, this.element.style.overflow = "hidden", void 0 !== t && "none" != t && (this.element.onmouseover = function () {
            null != this.auto_scroll_interval && TRC.Interval.clear(this.auto_scroll_interval)
        }, this.element.onmouseout = function () {
            "function" == typeof this.auto_scroll && (null != this.auto_scroll_interval && TRC.Interval.clear(this.auto_scroll_interval), this.auto_scroll_interval = TRC.Interval.set(this.auto_scroll, parseInt(t)))
        }), e.appendChild(this.element), this.element.style.display = "none", !0 === this.trc.getProperty(this.mode_name, "has-expand-animation", this.propertiesOverride) && new TRC.ExpandAnimationManager(this)
    }, r.prototype.generateVisibleParts = function () {
        if (null == this.listContainer) {
            this.header = this.generateHeader(this.element);
            var e = document.createElement("div");
            e.id = this.id.replace("trc_", "outer_"), e.className = "trc_rbox_outer", e.style.overflow = "hidden", this.listContainer = this.generateRDiv(), e.appendChild(this.listContainer), this.element.appendChild(e), this.element.style.display = "block", !0 === this.trc.global["disclosure-enabled"] ? this.addTaboolaLogo() : this.addTaboolaLogoNoDisclosure()
        }
    }, r.prototype.getRetryUrl = function (e) {
        TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui getRetryUrl");
        var t = s + "//cdn.taboola.com/libtrc/" + TRC.publisherId + "/";
        return "preview" == e ? t + "trc-" + e + ".js" : t + "trc-" + this.getListId() + "-" + e + ".js"
    }, r.prototype.check_preview_size_error = function (e, t) {
        TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui check_preview_size_error");
        var i = t.trc["video-list"].video;
        return i instanceof Array || (i = [i]), e != this.getRetryUrl("preview") && i.length < 10 && (this.src = this.getRetryUrl("preview"), !0)
    }, r.prototype.setTargetItemsList = function (e, t, i) {
        if (t) for (var r = 0, o = t.length; r < o; r++) e[t[r]["item-id"]] = {
            tii: t[r]["item-id"],
            tipt: this.getProviderType(t[r]),
            tit: t[r]["type"],
            tids: i
        }
    }, r.prototype.getJsonTargetItemsList = function (e) {
        var t = [], i;
        for (i in e) e.hasOwnProperty(i) && t.push(e[i]);
        return t
    }, r.prototype.PostData = function () {
        var e = {};
        this.setFullItemlist = function (t) {
            "object" == typeof t ? e.fil = __trcJSONify(t) : "string" == typeof t && (e.fil = t)
        }, this.setScreenHeight = function (t) {
            e.sh = t
        }, this.setScreenWidth = function (t) {
            e.sw = t
        }, this.setBrowserWidth = function (t) {
            e.bw = t
        }, this.setArticlePos = function (t) {
            e.bad = t
        }, this.setContainerPos = function (t) {
            e.cd = t
        }, this.setContainerWidth = function (t) {
            e.mw = t
        }, this.getAll = function () {
            return e
        }
    }, r.prototype.getProviderType = function (e, t) {
        return e["is-syndicated"] ? t ? "sponsored" : "SP" : e["is-in-network"] ? t ? "exchange" : "NT" : e["is-native"] ? t ? "native" : "NAV" : t ? "organic" : "RC"
    }, r.prototype.setApiItemsData = function (e) {
        this.apiData.push({url: e.url, slot: e.itemIndex, id: e.id, type: this.getProviderType(e, !0), title: e.title})
    }, r.prototype.isReadMoreDevice = function (e) {
        for (var t = e.split("|"), i = {
            smart_phone: TRC.dom.isSmartPhone(),
            tablet: TRC.dom.isTablet(),
            desktop: TRC.dom.isDesktop()
        }, r = 0; r < t.length; r++) {
            if ("all" === t[r]) return !0;
            if (i[t[r]]) return !0
        }
        return !1
    }, r.prototype.getReadMoreConfig = function () {
        var e = this.trc.getProperty(this.mode_name, "read-more-config", this.propertiesOverride) || {};
        return e.boxSelector = this.trc.getProperty(this.mode_name, "read-more-box-selector", this.propertiesOverride), e.threshold = this.trc.getProperty(this.mode_name, "read-more-threshold", this.propertiesOverride), e.minimizedSize = this.trc.getProperty(this.mode_name, "read-more-minimized-size", this.propertiesOverride), e.caption = this.trc.getProperty(this.mode_name, "read-more-caption", this.propertiesOverride), e.cutoffType = this.trc.getProperty(this.mode_name, "read-more-cutoff-from-type", this.propertiesOverride), e.anchorSelector = this.trc.getProperty(this.mode_name, "read-more-anchor-selector", this.propertiesOverride), e.lengthFromAnchorElementType = this.trc.getProperty(this.mode_name, "read-more-cutoff-length-type", this.propertiesOverride), e.lengthFromAnchorElement = this.trc.getProperty(this.mode_name, "read-more-cutoff-length-from-anchor-element", this.propertiesOverride), e.modeDevices = this.trc.getProperty(this.mode_name, "read-more-mode-devices", this.propertiesOverride), e
    }, r.prototype.loadScriptCallback = function (e, i) {
        var r = this.trcResponse && this.trcResponse.hasOwnProperty("ifr") && this.trcResponse.ifr;

        function o() {
            this.trc.parseResponse(i), this.trc.preloadRequest[this.placement].dc ? this.trc.preloadRequest[this.placement].dc.renderAd(this) : (this.loadScriptCallback(null, this.trc.preloadRequest[this.placement].response), TRC.dom.on(t, "resize", TRC.util.debounce(this.trc._repaintEllipsis.trcBind(this.trc, [this]), 500, !1, this.trc)), TRC.dispatch("ellipsis", {data: [this]}))
        }

        var n = "TRCRBox.loadScriptCallback" + "(retry=" + this.retryCount + ")", a = i.trc, s, l, c, d,
            h = this.response && this.response.trc["DNT"] && "TRUE" === this.response.trc["DNT"].toUpperCase(),
            p = this.trc.global["has-userx"], u = TRC.TRCParser, m, g, f = TRC.Device.isTouchDevice, b, v = null, C, y,
            T, _ = this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride);
        this.sendModeDebugData && (v = this.getModeDebugData("object")), __trcDebug("Enter " + n), this.abortRequest(), this.utm = this.requestTime && [this.requestTime, (new Date).getTime() - TRC.utm.start];
        var R = !!t.trc_testmode;
        if (e && (this.trc.trcCache.cacheResponse(e, i, TRC.pageManager.state.moreDispatchParams), this.trc.cachedResponses[e] = !0), a["vl"] && a["vl"].length) {
            TRC.tlf && console.timeStamp("start loadScriptCallback(pv2)"), this.timeoutId && (TRC.Timeout.clear(this.timeoutId), this.timeoutId = null);
            var x = this;
            TRC.mdl.yieldDynamicModeLoad(i, this.trc, function () {
                o.call(x)
            })
        } else {
            if (a && a["video-list"] && a["video-list"].pvc && (this.pVideoLoader = new TRC.PVideoLoader(this, a["video-list"].pvc, this.response.trc, this.trc)), !(a && a["video-list"] && a["video-list"].video || r)) return __trcError("Exit " + n + ": pv2 format error"), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement);
            if (R && this.check_preview_size_error(this.src, i)) return __trcDebug("Exit " + n + ": preview with not enough items"), void this.getData();
            if (TRC.UserIdMerger.notifyPossibleUserChange(this.trc, TRC.publisherId, a["user-id"], a["session-data"]), TRC.pageManager.storePublisherValue(TRC.publisherId, "session-data", a["session-data"]), i.trc["DNT"] && "TRUE" === i.trc["DNT"].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : TRC.pageManager.storeUserId(a["user-id"]), this.drawList) __trcWarn("Exit " + n + ": got another response after already drawing"); else {
                if (this.response = i, this.response.cached && (this.cachedViewId = this.response.cachedViewId), this.setTargetItemsList(this.fullEventItemsHash, a["video-list"].video, "a"), (y = new this.PostData).setFullItemlist(this.getJsonTargetItemsList(this.fullEventItemsHash)), T = this.createUtmParam(), void 0 !== this.modeGroupOrder && this.util.merge(T, {mgo: this.modeGroupOrder}), a["video-list"].video && a["video-list"].video.length < 1 && "rbox-tracking" != this.getListId()) return __trcError("Exit " + n + ": no items in response - " + this.mode_name), TRC.EventsAPI.dispatchRender(a), this.abortRendering(), this.trc.isDeferredAvailable ? (TRC.performance && TRC.performance.mark("8.0.1." + this._id), TRC.Timeout.set(this.sendEvent.trcBind(this, "available", this.util.merge(T, {df: 1}), this.util.merge(y.getAll(), v), !0), 0)) : this.sendEvent("available", T, this.util.merge(y.getAll(), v), !0), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement);
                if (this.recommendationList = a["video-list"].video || [], r ? TRC.listen("available::" + this.placement, function (e) {
                    !1 !== this.trcResponse.config["send-events"] && (this.sendEvent("available", T, this.util.merge(y.getAll(), v), !0), TRC.intersections.isInViewPort({
                        targetElement: e.container,
                        enableDelayedVisibilityCheck: !0,
                        onTrigger: function () {
                            this.recommendationList.length && this.newVisibleItemsCollection(!0, this.recommendationList), this.sendNewVisibility()
                        }.trcBind(this)
                    }), this.registerProviderClicks(this.recommendationList)), this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["i"])
                }.trcBind(this)) : this.trc.isDeferredAvailable ? (TRC.performance && TRC.performance.mark("8.0.1." + this._id), this.postRenderQueue.pushBack("available", this.sendEvent.trcBind(this, "available", this.util.merge(T, {df: 1}), this.util.merge(y.getAll(), v), !0))) : this.sendEvent("available", T, this.util.merge(y.getAll(), v), !0), this.itemsTypes = this.getItemsTypesList(this.recommendationList), this.hasSyndicatedContent = this.hasSyndicated(this.itemsTypes), this.privacyId = this.getPrivacyId(this.recommendationList), this.orig_name = this.mode_name, this.orig_placement = this.placement, r || this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["i"]), u.IsBaseModeAndABModeExist(a) ? (c = u.parseBaseModeAndABModeName(a), this.changeModeName(c, !0, "base mode named: " + c + " has no configuration. " + "using fallback - " + this.mode_name)) : (d = u.parseBaseModeName(a)) ? (TRC.pConsole(this.mode_name, "info", "base mode = " + d), this.changeModeName(d, !0, "base mode - " + d + ": has no configuration. using fallback - " + this.mode_name)) : (l = u.parseTestVariant(a)) && (TRC.pConsole(this.mode_name, "info", "test variant = " + l, s), s = u.parseABModeName(this.mode_name, a), this.changeModeName(s, !1, "variant -  " + l + " : has no configuration. using fallback - " + this.mode_name), u.hasVariantMismatch(a) && this.trc.global["send-variant-warning"] && __trcWarn(("UI variant mismatch detected for publisher={pub}, " + "page type={page}, UI mode={mode}, pacement={placement}. " + "Using header variant resulted with variant={header}, " + "Using per widget variant resulted with variant={widget}.").replace("{pub}", TRC.publisherId).replace("{page}", this.trc.getItemType()).replace("{mode}", this.mode_name).replace("{placement}", this.placement).replace("{header}", i && i["test-variant"] || "").replace("{widget}", i && i["video-list"] && i["video-list"]["test-variant"] || ""))), r || "rbox-tracking" == this.getListId() || void 0 !== this.trc.modes[this.mode_name]) if (!this.trc.isThinLoaderMode() || TRC.mdl.isLoaded(this.mode_name)) {
                    this.propertiesOverride = a["video-list"]["properties-override"], m = this.trc.getProperty(this.mode_name, "auto-size", this.propertiesOverride), g = "none" != this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride), b = this.trc.getProperty(this.mode_name, "mode-has-userx", this.propertiesOverride), this.useNativeLineClamp = TRC.Browser.compatibility.lineClamp && !this.trc.getProperty(this.mode_name, "details-inline-with-title", this.propertiesOverride) && this.trc.getProperty(this.mode_name, "use-browser-line-clamp", this.propertiesOverride), this.widgetCreatorLayout = this.trc.getProperty(this.mode_name, "widget-creator-layout", this.propertiesOverride), this.isWCTextLinks = "autowidget-template-text-links" === this.widgetCreatorLayout, this.isResponsive = this.trc.getProperty(this.mode_name, "mode-is-responsive", this.propertiesOverride), this.isCarousel = "scrolling" === this.trc.getProperty(this.mode_name, "navigation-type", this.propertiesOverride), this.shouldLazyLoadImages = this.trc.getProperty(this.mode_name, "has-thumbs-image-lazy-load", this.propertiesOverride) || this.trc.global["thumbnail-image-lazy-load"], this.link_target = this.link_target || this.trc.getProperty(this.mode_name, "link-target") || "normal", TRC.pConsole(this.mode_name, "info", "has user X = " + b, ""), __trcDebug("Exit " + n + ": success"), this.drawList = !0, this.hasReadMore = !0 !== this.trc.disableReadMore && this.trc.getProperty(this.mode_name, "enable-read-more", this.propertiesOverride), this.isReadMoreDebug = this.trc.global["read-more-debug"] || this.trc["read-more-debug"], this.readMorePageConfig = this["read_more"] || {}, this.readMoreConfig = this.getReadMoreConfig(), this.readMoreDevices = this.trc.getProperty(this.mode_name, "read-more-mode-devices", this.propertiesOverride) || this.trc["read-more-devices"], this.getWidgetToFeedHelper() && this.getWidgetToFeedHelper().applyWidgetHeaderAndFooterStylesToFeed(this.mode_name), this.callPreRenderHooks(), this.trc.getProperty(this.mode_name, "pending-archive") && __trcError("PENDING_ARCHIVE_MODE_ERROR[" + this.mode_name + "]"), TRC.setReadMore && this.hasReadMore && this.isReadMoreDevice(this.readMoreDevices) ? TRC.isOptim("defer-read-more") ? setTimeout(function () {
                        TRC.setReadMore(this)
                    }.trcBind(this), 0) : TRC.setReadMore(this) : TRC.EventsAPI.readmore("none", this.response && this.response.trc), this.trc.yieldingEnabled || this.trc.totalModeCounter++;
                    var w = null;
                    try {
                        this.reqId = this.response.trc.req
                    } catch (e) {
                        this.reqId = -1
                    }
                    if (TRC.performance && TRC.performance.mark("7.0.1." + this._id, w, this.mode_name, this.reqId, "rendering", TRC.PerfEvenType.REQ_LEVEL_START), this.container && this.container.setAttribute("data-placement-name", this.placement), r || (this.isResponsive && !this.isWCTextLinks ? (this.generateResponsiveOuters(this.element), this.drawResponsiveList(a)) : (m && this.container && 0 == this.container.clientWidth && (this.container.style.width = "100%"), this.generateVisibleParts(), this.drawListBody(a))), this.shouldLazyLoadImages && (this.lazyLoadViewportMarginThreshold = this.trc.getProperty(this.mode_name, "thumbs-image-lazy-load-margins", this.propertiesOverride) || this.trc.global["thumbs-image-lazy-load-margins"] || "600px 1500px 600px 1500px", this.isCarousel && "none" !== _ && this.createCarouselContainerImgLazyLoadObserver()), TRC.performance && TRC.performance.mark("7.0.9." + this._id, w, this.mode_name, this.reqId, "rendering", TRC.PerfEvenType.REQ_LEVEL_STOP), TRC.dispatch("trcContentReady", {container: this.container}), a && a["video-list"] && a["video-list"].vtag && this.trc["mode-before-video-load"](this)) {
                        TRC.performance && TRC.performance.mark("10.0.1." + this._id, null, "videotag", "", "videoTagLoad", TRC.PerfEvenType.START);
                        var I = {placement: this.placement, container: this.container};
                        this.videoTagLoader = new TRC.VideoTagLoader(this.trc, a["video-list"].vtag, I, this, this.response.trc), this.videoTagLoader.loadVideo(), TRC.performance && TRC.performance.mark("10.0.9." + this._id, null, "videotag", "", "videoTagLoad", TRC.PerfEvenType.STOP)
                    }
                    try {
                        TRC.SpotlightLoader.registerOnMainContainer(this.container, i), TRC.SpotlightLoader.load(this.response)
                    } catch (e) {
                        __trcError("Error while trying to load Spotlight")
                    }
                    if (this.trc.global["show-rtb-ad-choices-icon"] && g && !h && !TRC.SpotlightLoader.loadedScript) {
                        if (!TRC.userAdChoice.isInitialized) try {
                            TRC.userAdChoice.init(this.trc["language"])
                        } catch (e) {
                            __trcDebug("failed to init RTB Choice")
                        }
                        try {
                            TRC.userAdChoice.initForMode(this)
                        } catch (e) {
                            __trcDebug("failed to init RTB Choice for mode " + this.mode_name)
                        }
                    }
                    if (b && p && g && !h && !TRC.Browser["ieUpto"](8) && !f && !TRC.SpotlightLoader.loadedScript) {
                        if (!TRC.userX.isInitialized) try {
                            TRC.userX.init(this.trc["language"])
                        } catch (e) {
                            __trcDebug("failed to init Taboola Choice")
                        }
                        try {
                            TRC.userX.initForMode(this)
                        } catch (e) {
                            __trcDebug("failed to init Taboola Choice for mode " + this.mode_name)
                        }
                    }
                    !TRC.SliderManager || !0 !== this.slider && !0 !== this.trc.getProperty(this.mode_name, "slider", this.propertiesOverride) || !1 === this.trc.slider || new TRC.SliderManager(this)
                } else __trcError("TRCRBox.loadScriptCallback: Mode name '" + this.mode_name + "' isn't loaded (thin loader) "); else __trcError("TRCRBox.loadScriptCallback: Mode name '" + this.mode_name + "' doesn't exist in configuration file ")
            }
        }
    }, r.prototype.callPreRenderHooks = function () {
        var e = this.trc.getProperty(this.mode_name, "mode-start"), t = this.trc["mode-pub-start"];
        try {
            "function" == typeof t && t(this, this.container), "function" == typeof e && e(this, this.container)
        } catch (e) {
            __trcError("Error in pre rendered hooks - " + e.message)
        }
    }, r.prototype.registerProviderClicks = function (e) {
        for (var t, i = 0; i < e.length; i++) {
            t = e[i], TRC.listen("click::" + this.placement, function () {
                this.sendEvent("click", {
                    it: t.type,
                    ii: t["item-id"],
                    p: t["is-syndicated"] ? t.publisher : "",
                    li: this.getListId()
                }, null, !1), this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["c"])
            }.trcBind(this));
            break
        }
    }, r.prototype.changeModeName = function (e, t, i) {
        void 0 !== this.trc.modes[e] ? (this.trc.cssReset && this.switchCSSResetDivIds(this.mode_name, e), this.mode_name = e, this.element.className = "trc_rbox" + " " + this.mode_name) : this.trc.global["send-variant-warning"] && (t ? __trcWarn(i) : __trcDebug(i))
    }, r.prototype.switchCSSResetDivIds = function (e, t) {
        var r = TRC.modesCache[e] ? TRC.modesCache[e].cssDivsArr : [],
            o = TRC.modesCache[t] ? TRC.modesCache[t].cssDivsArr : [], n = r.length;
        try {
            for (var a = 0; a < n; a++) i.getElementById(r[a]).id = o[a]
        } catch (e) {
            __trcError("TRCRBox.prototype.switchCSSResetDivs : ", e.message)
        }
    }, r.prototype.loadFailureHandler = function () {
        TRC.performance && TRC.performance.mark("5.2.8." + this._id, null, "TrcPv2", "", "pv2call", TRC.PerfEvenType.STOP), TRC.pConsole(this.mode_name, "debug", "handleing TRC request failure", "");
        var e = "TRCRBox.loadFailureHandler" + "(retry=" + this.retryCount + ")";
        if (__trcDebug("Enter " + e), this.request) {
            if ("object" == typeof window["trc_json_response"]) return __trcWarn("Exit " + e + ": old style response"), this.loadScriptCallback(null, window["trc_json_response"]), void delete window["trc_json_response"];
            if (this.abortRequest(), this.response || this.dc) __trcDebug("Exit " + e + ": response already received"); else {
                if (t.trc_testmode) this.src = this.getRetryUrl("preview"), __trcDebug("Exit " + e + ": preview"); else {
                    if (!this.use_cdn) return __trcError("Aborting on error due to use-cdn=false", null), void this.abortRendering();
                    this.src = this.getRetryUrl("error"), __trcWarn("Exit " + e + ": retrying with " + this.src.split("/")[2].split(".")[0].toUpperCase())
                }
                this.getData()
            }
        } else __trcDebug("Exit " + e + ": request was aborted")
    }, r.prototype.abortRequest = function () {
        this.timeoutId && (TRC.Timeout.clear(this.timeoutId), this.timeoutId = null), this.request && (this.request.parentNode.removeChild(this.request), this.request = null)
    }, r.prototype.sendRequest = function () {
        var e = "TRCRBox.sendRequest" + "(retry=" + this.retryCount + ")";
        if (__trcDebug("Enter " + e), this.response) return __trcDebug("Exit " + e + ": already have response"), void this.loadScriptCallback(null, this.response);
        if (this.loadRBoxRequestFailed) {
            if (!this.use_cdn) return __trcError("loadRBox failed and not using CDN, aborting."), void this.abortRendering();
            this.retryCount++, this.src = this.getRetryUrl("error")
        }
        var t = this.trc.getProperty(this.mode_name, "timeout", this.propertiesOverride) || 8e3;
        this.timeoutId = TRC.Timeout.set(function () {
            this.timeoutHappened = this.timeoutHappened + 1 || 1, this.use_cdn ? (this.abortRequest(), this.src = this.getRetryUrl("timeout"), __trcWarn("Called TRCRBox.sendRequest.timeout(" + this.timeoutHappened + "): retrying with " + this.src.split("/")[2].split(".")[0].toUpperCase()), this.getData()) : __trcError("Timedout waiting for server but not aborting")
        }.trcBind(this), t), this.response = null;
        try {
            if (this.requestTime = (new Date).getTime() - TRC.utm.start, this.trc.isValidForCache(this.formatedTRCRequest.it)) {
                var i;
                if (this.trc.activateTrcCache(this.formatedTRCRequest, this.trc.trcCache, this.trc.trcCacheItemType, this.loadScriptCallback, this)) return;
                this.src = this.genRBoxURL(this.formatedTRCRequest.cacheKey, this.formatedTRCRequest)
            }
            this.request = this.trc.loadExternal(this.src, "js", this.loadFailureHandler.trcBind(this), !0), TRC.performance && TRC.performance.mark("5.2.0." + this._id, null, "TrcPv2", "", "pv2call", TRC.PerfEvenType.START)
        } catch (t) {
            return void __trcError("Exit " + e + ": error in loadExternal", t)
        }
        __trcDebug("Exit " + e + ": success")
    }, r.prototype.abortRendering = function () {
        var e;
        switch (__trcDebug("Called " + ("TRCRBox.abortRendering" + "(retry=" + this.retryCount + ")")), this.drawList = !0, typeof this.errorHandler) {
            case"string":
                return void(null != this.listContainer && this.listContainer.appendChild(document.createTextNode("Error getting recommendations: " + this.errorHandler)));
            case"function":
                return void this["errorHandler"]()
        }
    }, r.prototype.getData = function () {
        this.loaded = !0, this.retryCount++;
        var e = "TRCRBox.getData" + "(retry=" + this.retryCount + ")";
        if (__trcDebug("Enter " + e), this.cdnEventHandler || (this.cdnEventHandler = TRC.listen("staticRecommendationsReceived", function (e) {
            this.response || this.loadScriptCallback(null, e.response)
        }.trcBind(this))), this.retryCount > this.trc.MAX_RETRY) return __trcError("Exit " + e + ": max retry - last call was to " + this.src.split("/")[2].split(".")[0].toUpperCase()), void this.abortRendering();
        TRC.dom.onReady(this.sendRequest.trcBind(this), !TRC.Browser.ie), __trcDebug("Exit " + e + ": success")
    }, r.prototype.getContainer = function () {
        return this.element.parentNode
    }, r.prototype.sendEvent = function (e, t, i, r, o, n) {
        var a = !1, s = this.formatedTRCRequest && this.formatedTRCRequest.tmpl,
            l = this.response.trc["placement-group"],
            c = this.response && this.response.trc ? this.response.trc["session-data"] : null, d = {
                ri: this.response ? this.response.trc["req"] : null,
                sd: this.trc.getSessionData(c),
                ui: TRC.pageManager.getValue("user-id"),
                pi: this.trc.getItemId(),
                wi: this.response ? this.response.trc["watched-item"] : null,
                pt: this.getItemType(),
                vi: this.cachedViewId || TRC.pageManager.getPageData(),
                li: this.getListId()
            }, h = function () {
                a || (a = !0, o && o())
            };
        this.response.cached && (d.cache = "1"), this.formatedTRCRequest && this.formatedTRCRequest.ad && (d.ad = __trcJSONify(this.formatedTRCRequest.ad)), (this.trc.global["tmp-use-pb-params"] && this.trc.configForPostEvent[e] || "click" === e && this.sendClickPiggyBack) && (this.response.trc && this.response.trc["ppb"] && (t.ppb = this.response.trc["ppb"]), this.response.trc && this.response.trc["cpb"] && (t.cpb = this.response.trc["cpb"])), "click" == e && "nt" == t.prt && (d = {}), s && (d.tmpl = s), l && (d.pg = l), __trcCopyProps(t, d), !0 !== this.response.trc["video-list"]["content-hub-forced-placement"] || "available" !== e && "explore" !== e && "visible" !== e || (e = "content-hub-" + e), r ? (TRC.pConsole(this.mode_name, "info", "sending event type : " + e, d, "object"), this.trc.log1(e, d, i, h, this.placement)) : this.trc.logTrcEvent(e, d, i, h);
        var p = null;
        TRC.performance && "visible" == e && TRC.performance.mark("11.0." + this._id, p, this.mode_name, this.reqId, "visible", TRC.PerfEvenType.MARK), "number" == typeof n && TRC.Timeout.set(h, n)
    }, r.prototype.load = function (e, t) {
        if (!this.loaded) {
            this.trc.preloadRequest = this.trc.preloadRequest || {}, "object" == typeof t && void 0 === this.trc.preloadRequest[t.placement] && (t.pv2 = !0, this.trc.preloadRequest[t.placement] = t);
            var i = this.trc.getItemId(), r;
            void 0 !== i && null != i && 0 != i.length ? (this.src = this.genRBoxURL(), this.errorHandler = e, this.getData()) : this.loaded = !0
        }
    }, r.prototype.updateRecommendations = function (e) {
        return this.retryCount = 0, this.drawList = !1, this.loadRBoxRequestFailed = !1, this.response = null, this.forceItemType = e, this.reqParams = {
            "item-type": this.trc.getItemType(),
            "item-id": this.trc.getItemId()
        }, this.timeoutId && (TRC.Timeout.clear(this.timeoutId), this.timeoutId = null), this.loaded = !1, this.trc.renderRBox(this), !0
    }, r.prototype.isVisible = function (e, t) {
        function i(e, t) {
            return !(!e.parentNode || e.parentNode == document.documentElement && e != t) && (e == t || i(e.parentNode, t))
        }

        var r = (e = e || this.container).getBoundingClientRect();
        if (!this.hasVolume(r)) return !1;
        var o = this.getBoundingClientRect(r, t), n = o.left + Math.round((o.right - o.left) / 2),
            a = o.top + Math.round((o.bottom - o.top) / 2),
            s = TRC.Browser["operaUpto"](10.1) || TRC.Browser["safariUpto"](4) ? document.elementFromPoint(n + document.body.scrollLeft, a + document.body.scrollTop) : document.elementFromPoint(n, a),
            l = this.getRootBounds(t), c = n > 0 && n < l.maxX && a > 0 && a < l.maxY;
        return t ? c : c && s && i(s, e)
    }, r.prototype.hasVolume = function (e) {
        return e.top !== e.bottom
    }, r.prototype.getBoundingClientRect = function (e, t) {
        var i;
        return t ? {
            left: t.boundingClientRect.left + e.left,
            right: t.boundingClientRect.right + e.left,
            top: t.boundingClientRect.top + e.top,
            bottom: t.boundingClientRect.top + e.bottom,
            width: t.boundingClientRect.width,
            height: t.boundingClientRect.height
        } : e
    }, r.prototype.getRootBounds = function (e) {
        var t = {};
        return e ? (t.maxX = e.rootBounds.width, t.maxY = e.rootBounds.height, t) : (t.maxX = "CSS1Compat" === document.compatMode && document.documentElement.clientWidth || document.body.clientWidth, t.maxY = "CSS1Compat" === document.compatMode && document.documentElement.clientHeight || document.body.clientHeight, t)
    }, r.prototype.visible_items_collection = function (e) {
        var t, i = 0, r, o, n;
        for (t = 0; t < this.boxes.length; t++) r = this.boxes[t].video_data, o = this.fullEventItemsHash[r["item-id"]], (n = this.isVisible(this.boxes[t], e)) ? (r["is-syndicated"] ? this.pushVisibleItem(this.synd_visible_boxes, r, this.visibilityArr, "is-syndicated") : r["is-in-network"] ? this.pushVisibleItem(this.network_visible_boxes, r, this.visibilityArr, "is-in-network") : r["is-native"] ? this.pushVisibleItem(this.native_visible_boxes, r, this.visibilityArr, "is-native") : this.pushVisibleItem(this.visible_boxes, r, this.visibilityArr, "is-organic"), o.tids = "vp", i++) : "vp" != o.tids && (o.tids = "nvp");
        return i
    }, r.prototype.pushVisibleItem = function (e, t, i, r) {
        e[t["item-id"]] = {id: t["item-id"], type: t["type"], publisher: t["publisher"]}
    }, r.prototype.clearChilds = function (e) {
        for (; e.hasChildNodes();) e.removeChild(e.lastChild)
    }, r.prototype.hasSyndicated = function (e) {
        for (var t = 0, i; i = e[t]; t++) if (i["is-syndicated"] || i["is-in-network"] || i["is-native"]) return !0;
        return !1
    }, r.prototype.rePositionDurationElement = function (e, t, i) {
        TRC.Browser["ieUpto"](6) ? (e.style.marginLeft = t / 2 - 3 + "px", e.style.top = i / 2 - 15 + "px") : 7 === TRC.Browser.ie ? (e.style.left = t - 3 + "px", e.style.top = i - 15 + "px") : (e.style.marginLeft = t - 3 + "px", e.style.top = i - 15 + "px")
    }, r.prototype.getFirstVideoItem = function (e) {
        var t, i = e.boxes, r = null;
        for (t = 0; t < i.length; t++) if (!i[t].isSyndicated) {
            r = i[t].video_data;
            break
        }
        return r
    }, r.prototype.hasDuration = function () {
        for (var e, t = this.trc.getProperty(this.mode_name, "detail-order", this.propertiesOverride).split(","), i = 0; e = t[i]; i++) if ("duration" == e) return !0;
        return !1
    }, r.prototype.cleanStyleDimensions = function (e) {
        var t = null;
        try {
            __trcDOMWalker(e, function (e) {
                e.style.cssText && (e.style.width = "", e.style.height = ""), -1 !== (e.className + "").indexOf("video-duration") && (t = e)
            })
        } catch (e) {
        }
        return t
    }, r.prototype.createBillboard = function () {
        var e = __trcGetElementsByClass("trc_rbox_outer", "div", this.element)[0];
        if (!e) return null;
        var t = document.createElement("div");
        return this.billboard = t, t.className = "trc_billboard", t.style.width = "auto", e.parentNode.insertBefore(t, e), e.style.clear = "both", t
    }, r.prototype.checkForBlocking = function () {
        var e, t, i, r, o, n, a, s, l = "", c = [], d = [], h = [];
        for (e = 0; t = this.boxes[e]; e++) {
            try {
                (o = t.video_data["is-in-network"] || t.video_data["is-native"]) || (r = t.video_data["is-syndicated"])
            } catch (e) {
            }
            n = o ? d : r ? h : c, t && 1 === t.nodeType && t.childNodes.length ? (a = document.trcGetCurrentStyle(t, "-moz-binding"), i = document.trcGetCurrentStyle(t, "orphans"), "hidden" != (s = document.trcGetCurrentStyle(t, "visibility")) && ("none" == document.trcGetCurrentStyle(t, "display") ? ("4321" == document.trcGetCurrentStyle(t, "orphans") && (l = l || "adblockplus"), n.push(1)) : a && "none" != a && (l = l || "adblockplus", n.push(1)))) : n.push(1)
        }
        (c.length || h.length || d.length) && __trcWarn("blocked:" + c.length + "-" + d.length + "-" + h.length + "-" + (l || "unknown"))
    }, r.prototype.createEmbedThumb = function (e) {
        var i = this["player-container-id"] && document.getElementById(this["player-container-id"]),
            r = this.trc.getProperty(this.mode_name, "player-detail-order", this.propertiesOverride),
            o = document.createElement("DIV"),
            n = this.trc.getProperty(this.mode_name, "render-player-info", this.propertiesOverride), a, s, l, c = this,
            d = this.trc.getProperty(this.mode_name, "player-thumbnail-height", this.propertiesOverride) || 300,
            h = this.trc.getProperty(this.mode_name, "player-thumbnail-width", this.propertiesOverride) || 400;
        (e = e || this.getFirstVideoItem(this)) ? (i = i || this.createBillboard()) ? (i.innerHTML = "", i.className += " " + this.mode_name, i.hasDuration = this.hasDuration(), o.style.height = "100%", o.style.cssFloat = "left", o.className = "playerCube", i.appendChild(o), a = this.drawVideoBox(e, i.hasDuration, r, "top"), o.appendChild(a), l = a.getElementsByTagName("A"), n ? a.fixTextOverflow() : l[1] && l[1].parentNode.removeChild(l[1]), a.thumb && a.img && a.img_src && (a.thumb.appendChild(a.img), a.img.onload = function () {
            var e = n ? h : a.clientWidth, t = n || this.billboard ? d : a.clientHeight;
            a.img.offsetWidth + a.img.offsetHeight ? this.FixVideoImage(e, t, a.img) : TRC.Timeout.set(function () {
                e = n ? h : a.clientWidth, t = n || this.billboard ? d : a.clientHeight, c.FixVideoImage(e, t, a.img)
            }, 10)
        }.trcBind(this), s = this.cleanStyleDimensions(a), a.style.marginLeft = "0", a.style.width = "auto", a.style.height = "100%", a.style.cssFloat = "none", a.style.styleFloat = "none", a.thumb.style.width = n || this.billboard ? h + "px" : "100%", a.thumb.style.height = n || this.billboard ? d + "px" : "100%", a.thumb.style.marginRight = "0", a.thumb.style.position = "relative", this.setImageLoad(a.img, a, this.getThumbnailURL(e, a.thumb.offsetWidth, a.thumb.offsetHeight), 100, a.thumb, this.trc.global["thumb-lazy-load-switch"]), TRC.Browser["ieUpto"](6) && (a.onmouseover = function () {
            this.className += " playerCube_hover"
        }, a.onmouseout = function () {
            this.className = this.className.replace(/\b\s+playerCube_hover\b/g, "")
        }), i.videoBlock = l[0], l[0].onclick = function (r) {
            var o = this.trc.getProperty(this.mode_name, "player-embed-code", this.propertiesOverride);
            return r = r || event, "function" == typeof o && i && !t.trc_testmode ? this.playInsideHostingContainer(e, o, i) : t.open(e.logger_url), r.preventDefault && r.preventDefault(), r.returnValue = !1
        }.trcBind(this), a.visCheckDone = !0, s && this.rePositionDurationElement(s, a.thumb.clientWidth, a.thumb.clientHeight))) : __trcError("Can't find container element for createEmbedThumb!") : __trcError("outerbox.js: video item was not found")
    }, r.prototype.setVideoPlayerLoad = function (e, t, i, r, o, n) {
        try {
            this.pVideoLoader.loadVideo({
                playerContainer: e,
                url: t,
                poster: i,
                itemIndex: r,
                itemId: o
            }, n), TRC.tlf && console.time("in setVideoPlayerLoad")
        } catch (e) {
            __trcWarn("Error in setVideoPlayerLoad", e)
        }
    }, r.prototype.getThumbnailsDimensions = function (e) {
        var t = e.boundingClientRect, i;
        return {width: Math.ceil(t.width), height: Math.ceil(t.height)}
    }, r.prototype.removeCarouselItemImgLazyLoadObserver = function (e) {
        for (var e = e.split(" "), t, i = 0; i < e.length; i++) -1 !== (t = this.lazyLoadImageObserversIds.indexOf(e[i])) && (TRC.intersections.unobserve(this.lazyLoadImageObserversIds[t]), this.lazyLoadImageObserversIds.splice(t, 1))
    }, r.prototype.createCarouselContainerImgLazyLoadObserver = function () {
        var e = {
            targetElement: this.container,
            threshold: 0,
            rootMargin: this.lazyLoadViewportMarginThreshold,
            disableCheckOverlay: !0,
            onEnter: this.createCarouselItemImgLazyLoadObserver.trcBind(this)
        };
        this.lazyLoadImageObserversIds.push(TRC.intersections.observe(e))
    }, r.prototype.loadCarouselItemImage = function (e, t, i, r, o, n, a, s, l, c) {
        var d = this.getThumbnailsDimensions(a), h = s.getAttribute(TRC.intersections.TARGET_ATTRIB);
        this.setImageLoad(e, t, i, r, o, n, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h)
    }, r.prototype.createCarouselItemImgLazyLoadObserver = function (e, t, i, r) {
        for (var o, n = t.getAttribute(TRC.intersections.TARGET_ATTRIB), a = 0; a < this.boxes.length; a++) o = {
            rootSelector: "#" + this.outerBox.id,
            targetElement: this.boxes[a].thumbBlock,
            threshold: 0,
            rootMargin: this.lazyLoadViewportMarginThreshold,
            onEnter: this.loadCarouselItemImage.trcBind(this, this.boxes[a].img, this.boxes[a], this.boxes[a].img_src, 100, this.boxes[a].thumbBlock, this.trc.global["thumb-lazy-load-switch"])
        }, this.lazyLoadImageObserversIds.push(TRC.intersections.observe(o));
        n && this.removeCarouselItemImgLazyLoadObserver(n)
    }, r.prototype.lazyLoadImage = function (e, t, i, r, o, n, a, s, l, c) {
        var d = this.getThumbnailsDimensions(a), h = s.getAttribute(TRC.intersections.TARGET_ATTRIB);
        this.setImageLoad(e, t, i, r, o, n, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h)
    }, r.prototype.alternateImgBaseUrl = function (e) {
        return TRC.imageCounter++, e.replace("images.taboola.com", this.imagesAltUrls[TRC.imageCounter % this.imagesAltUrls.length])
    }, r.prototype.setImageLoad = function (e, t, i, r, o, n, a, l) {
        var c, d, h, p, u, m, g = this.trc.global["tmp-image-utf8-encode"] ? encodeURIComponent(i) : escape(i), f, b;
        if (!a && this.shouldLazyLoadImages) {
            if (this.isCarousel) return;
            return f = {
                targetElement: o,
                threshold: 0,
                rootMargin: this.lazyLoadViewportMarginThreshold,
                disableCheckOverlay: !0,
                onEnter: this.lazyLoadImage.trcBind(this, e, t, i, r, o, n)
            }, void this.lazyLoadImageObserversIds.push(TRC.intersections.observe(f))
        }
        if (m = a ? l : this.getContainerDim(o, t, this.isHiddenItem(t))) p = this.getImageOptimizationUrlByItemRtbProp(t.video_data), i = this.getImageOptimizePrefix(i, p, m) + g; else if (r) return void TRC.Timeout.set(this.setImageLoad.trcBind(this, e, t, i, r--, o, n, a, l), 50);
        c = t.video_data["pvideo-url"], d = t.video_data.itemIndex, h = t.video_data["item-id"], this.imagesAltUrls.length > 0 && (i = this.alternateImgBaseUrl(i)), t.img_src = i = TRC.URL.prototype.switchProtocol.call(i, s), n && !a ? this.setLazyImageLoad(e, i) : e.src = i, b = Date.now(), TRC.performance && TRC.performance.mark("imgLoad" + b + "start", null, "", b, "imgLoadTime", TRC.PerfEvenType.START), TRC.dom.on(e, "load", function (e) {
            return TRC.performance && TRC.performance.mark("imgLoad" + b + "stop", null, "", b, "imgLoadTime", TRC.PerfEvenType.STOP), !0
        }), this.pVideoLoader && c && (u = {
            isCreatePVideoOverlay: this.trc.getProperty(this.mode_name, "p-video-overlay", this.propertiesOverride),
            video_data: t.video_data,
            container: t,
            language: this.trc["language"],
            isSendEvents: this.trc.global["p-video-overlay-send-events"]
        }, o = this.isResponsive ? o : o.firstChild, this.setVideoPlayerLoad(o, c, i, d, h, u))
    }, r.prototype.getImageOptimizationUrlByItemRtbProp = function (e) {
        return this.imageOptimizePrefixFlag = !0, e["is-rtb"] ? this.rtbImageOptimizePrefix = this.rtbImageOptimizePrefix || this.getImageOptimizationUrl(e) : this.imageOptimizePrefix = this.imageOptimizePrefix || this.getImageOptimizationUrl(e)
    }, r.prototype.setImagePrefixUrl = function (e) {
        var t = e["is-rtb"] ? "rtb-image-url-prefix" : "image-url-prefix", i = e["is-rtb"] ? a : n;
        return this.trc.getProperty(this.mode_name, t, this.propertiesOverride) || this.trc.global[t] || i
    }, r.prototype.handleGifPrefixParams = function (e) {
        var t = this.trc.global["gif-fade-effect-in-ms"], i = ",e_fade:{fade},e_fade:-{fade}", r;
        return e = e.replace(/(f_png|f_jpg)/, "f_gif"), t && "0" !== t && (r = encodeURIComponent(i.replace(new RegExp("{fade}", "g"), t)), e = e.substr(0, e.length - 1) + r + (e.lastIndexOf("/") === e.length - 1 ? "/" : "")), e
    }, r.prototype.getImageOptimizationUrl = function (e) {
        var t = this.setImagePrefixUrl(e), i = this.trc.global["images-host"],
            r = this.trc.getProperty(this.mode_name, "images-radius", this.propertiesOverride), o = e["is-gift"], n;
        return i && i.length > 2 && ((n = new TRC.URL(t)).host = i, t = n.toString()), r && "0" != r && (t = (t = t.replace(/f_jpg(%2C)?/, "")).replace(/fetch\//, "fetch/f_png%2C" + "r_" + r + "%2C")), o && (t = this.handleGifPrefixParams(t)), t
    }, r.prototype.isHiddenItem = function (e) {
        return "none" === i.trcGetCurrentStyle(e, "display", null)
    }, r.prototype.getContainerDim = function (e, t, i) {
        var r, o, n = 100;
        if (i) {
            if (this.cachedImageDim) return this.cachedImageDim
        } else if (r = TRC.dom.getElementRect(e), o = Math.ceil(r.right - r.left)) return n = Math.ceil(r.bottom - r.top || this.getAspectHeight(t) || o * this.getThumbAspectRatio(this.trc.modes[this.mode_name], "ratio") || n), this.cachedImageDim = {
            width: o,
            height: n
        };
        return null
    }, r.prototype.getAspectHeight = function (e) {
        var t;
        return e.thumbnail_aspect ? (t = TRC.dom.getElementRect(e.thumbnail_aspect)).bottom - t.top : 0
    }, r.prototype.getImageOptimizePrefix = function (e, t, i) {
        TRC.performance && TRC.performance.mark("7.1.1." + this._id);
        var r = this.getImageSizeFactor(),
            o = this.trc.getProperty(this.mode_name, "image-min-width", this.propertiesOverride) || 110,
            n = this.trc.getProperty(this.mode_name, "image-max-dimension", this.propertiesOverride) || 1500,
            a = this.trc.getProperty(this.mode_name, "image-size-round", this.propertiesOverride) || 20,
            s = this.trc.getProperty(this.mode_name, "image-max-ratio", this.propertiesOverride) || 2.5,
            l = Math.min(Math.ceil(Math.max(i.width * r, o) / a) * a, n),
            c = Math.max(Math.min(this.getAllowedRatio(i), s), 1 / s), d = Math.ceil(l * c);
        return t = t.replace(new RegExp("{w}", "g"), l.toString()).replace(new RegExp("{h}", "g"), d.toString()), TRC.performance && TRC.performance.mark("7.1.9." + this._id), t
    }, r.prototype.getImageSizeFactor = function () {
        var e = this.trc.getProperty(this.mode_name, "image-size-factor", this.propertiesOverride) || 1.2;
        return this.trc.getProperty(this.mode_name, "use-dpr-images", this.propertiesOverride) && TRC.dom.isHighDensity() && (e = this.trc.getProperty(this.mode_name, "image-dpr-factor", this.propertiesOverride) || e), e
    }, r.prototype.getAllowedRatio = function (e) {
        for (var t = this.trc.getSortedCloudinaryRatios(), i = this.trc.getProperty(this.mode_name, "image-allowed-ratio-diff", this.propertiesOverride) || .01, r = 1 * e.height / e.width, o = Math.abs(r - i), n = 0; n < t.length; n++) {
            var a = t[n];
            if (!isNaN(a) && a >= o) return a
        }
        return r
    }, r.prototype.setLazyImageLoad = function (e, t) {
        e.setAttribute(o, t)
    }, r.prototype.setLazyImageLoadMethod = function () {
        var e = this.trc.global["thumb-lazy-load-method"] ? this.trc.global["thumb-lazy-load-method"].split(",") : [],
            t = 0, i = e.length, r;
        for (r = 0; r < i; r++) this.lazyImageLoadMethdos[e[r]] && (t = 1, this[this.lazyImageLoadMethdos[e[r]]]());
        if (!t) for (r in this.lazyImageLoadMethdos) this.lazyImageLoadMethdos.hasOwnProperty(r) && this[this.lazyImageLoadMethdos[r]]()
    }, r.prototype.regLazyImageLoadOnPageInteractive = function () {
        var e = TRC.EVENT_PAGE_INTERACTIVE;
        TRC.listen(e, this.lazyImageLoader.trcBind(this)), TRC.isInteractive && TRC.dispatch(e, void 0)
    }, r.prototype.regLazyImageLoadOnPageLoad = function () {
        var e = TRC.EVENT_PAGE_LOAD;
        TRC.listen(e, this.lazyImageLoader.trcBind(this)), TRC.isPageLoaded && TRC.dispatch(e, void 0)
    }, r.prototype.regLazyImageLoadOnRboxVisibile = function () {
        var e = this.trc.global["thumb-lazy-load-space"] || 100;
        this.isInViewPort(this.container, e) && this.lazyImageLoader.trcBind(this)
    }, r.prototype.isInViewPort = function (e, t) {
        var i = TRC.visibility.getMinViewPortOffsets(this.container);
        return !(i < 0 && Math.abs(i) > t)
    }, r.prototype.lazyImageLoader = function () {
        var e = this.thumbnailImageStack || this.container.getElementsByTagName("img"), t, i = e.length, r;
        if (this.imagesLazyLoaded) this.imagesLazyLoaded = !0; else for (t = 0; t < i; t++) (r = e[t].getAttribute(o)) && (e[t].src = r)
    }, r.prototype.createUtmParam = function () {
        return {utm: TRC.utm.join(",") + (this.utm ? "," + this.utm.join(",") : "")}
    }, r.prototype.drawListBody = function (e) {
        if (TRC.tlf && console.timeStamp("start mode - " + this.mode_name), TRC.tlf && console.group("mode - " + this.mode_name), TRC.tlf && console.time("mode rendering"), "object" == typeof e) if (this.element.offsetTop <= 0 && this.element.offsetWidth <= 0) TRC.Timeout.set(this.drawListBody.trcBind(this, e), 1e3); else {
            t._tblConsole = t._tblConsole || [], TRC.pConsole(this.mode_name, "debug", "start drawing widget", "");
            var r = this.listContainer;
            this.boxes = [];
            var o = 0, n = this.trc;
            if (this.navigationType = n.getProperty(this.mode_name, "navigation-type", this.propertiesOverride), this.trc.calculateAutoSizeParameters(this), this.element.className += this.autoSize ? " trc-auto-size" : "", this.isWCTextLinks) {
                var a = i.trcGetParentByClassName(this.getContainer(), "trc_related_container");
                if (TRC.dom.addClass(a, "trc_tl"), this.isClassFilter = TRC.Browser["ieUpto"](8), this.isClassFilter ? TRC.listen("IE_ClassShift", this.fixWCTextLinksVideoBoxes.trcBind(this)) : TRC.dom.on(t, "resize", this.fixWCTextLinksVideoBoxes.trcBind(this).trcThrottle(500)), TRC.listen("videoCubeChange", this.fixWCTextLinksVideoBoxes.trcBind(this)), this.isResponsive) {
                    var s = "trc_tl_responsive";
                    TRC.dom.addClass(a, s + " " + s + "_" + this.id), this.setResponsiveRules(s + "_" + this.id, this.recommendationList.length)
                }
            }
            var l = !1, c = this.trc.getProperty(this.mode_name, "detail-order", this.propertiesOverride),
                d = this.orientation = this.trc.getProperty(this.mode_name, "orientation", this.propertiesOverride);
            c = c.split(",");
            for (var h = 0; h < c.length; h++) "duration" == c[h] && (l = !0);
            var p = 0;
            this.exploreTimeoutId = null, void 0 !== this.trc.global && (p = this.trc.global["explore-delay"] ? this.trc.global["explore-delay"] : p);
            var u = this;
            this.container.onmouseover = function (e) {
                var i = null;
                t.event ? i = t.event.srcElement : e && (i = e.target), i != this.container && null != this.exploreTimeoutId || i == this.container && null != this.exploreTimeoutId || (this.exploreTimeoutId = TRC.Timeout.set(function () {
                    this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null), this.sendEvent("explore", {}, null, !0, null, null)
                }.trcBind(this), p))
            }.trcBind(this), 0 != p && (this.container.onmouseout = function (e) {
                e = e || t.event;
                var i = this.container.getBoundingClientRect();
                e.clientX >= i.left && e.clientX < i.right && e.clientY >= i.top && e.clientY < i.bottom || this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null)
            }.trcBind(this));
            var m = document.createElement("div");
            for (m.id = "internal_" + this.id, this.internalContainer = m; r.firstChild;) r.removeChild(r.firstChild);
            r.appendChild(m), "none" != r.style.display && "none" != r.parentNode.style.display || (this.listContainer.style.display = "block", this.listContainer.parentNode.style.display = "block");
            var g = {};
            __trcCopyProps(e, g), delete g["video-list"], m.meta = g, this.firstVideo = null;
            var f = this.isResponsive ? this.recommendationList.length : n.getProperty(this.mode_name, "list-size", this.propertiesOverride);
            f = Math.min(f, this.recommendationList.length), "horizontal" == d ? (r.style.overflowY = "hidden", r.style.overflowX = "auto", m.style.width = "5000px") : (r.style.overflowX = "hidden", r.style.overflowY = "auto");
            for (var b = 0; b < f; b++) {
                TRC.tlf && 0 == b && console.time("item rendering");
                var v = this.recommendationList[b];
                v.itemIndex = b, null == this.firstVideo && "video" == v.type && (this.firstVideo = v);
                try {
                    this.trc.getFunction(this.mode_name, "item-data-filter", this.propertiesOverride, v);
                    var C = this.drawVideoBox(v, l);
                    if (b >= this.recommendationList.length / 2 && this.isWCTextLinks && !this.isResponsive && (C.className += " trc_tl_right_col"), "vertical" == d) {
                        var y = document.createElement("div");
                        y.style.clear = "both", C.appendChild(y)
                    }
                    if (m.appendChild(C), "scrolling" != this.navigationType) {
                        var T = this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride);
                        if (this.rows > 1 && this.autoSize && ("top" == T || "bottom" == T) && (this.itemMaxHeight = this.itemMaxHeight ? this.itemMaxHeight < C.clientHeight ? C.clientHeight : this.itemMaxHeight : C.clientHeight), C.offsetHeight > r.offsetHeight) {
                            var _ = C.offsetHeight - r.offsetHeight;
                            C.style.height = parseInt(document.trcGetCurrentStyle(C, "height")) - _ + "px"
                        }
                        m.removeChild(C)
                    } else {
                        C.fixTextOverflow(), void 0 === C.image_div ? C.thumb.appendChild(C.img) : (C.thumb.appendChild(C.image_div), C.image_div.appendChild(C.img)), this.trc.global["use-delay-image-load"] ? TRC.Timeout.set(this.setImageLoad.trcBind(this, C.img, C, C.img_src, 100, C.thumb, this.trc.global["thumb-lazy-load-switch"]), 10) : this.setImageLoad(C.img, C, C.img_src, 100, C.thumb, this.trc.global["thumb-lazy-load-switch"]);
                        var R = parseInt(document.trcGetCurrentStyle(C, "margin-right"));
                        o = C.clientWidth + C.offsetLeft + (isNaN(R) ? 0 : R), "horizontal" == d && k(C) && S(C, r.offsetHeight)
                    }
                    this.boxes.push(C)
                } catch (e) {
                    __trcError("Error in drawVideoBox", e)
                }
                TRC.tlf && 0 == b && console.timeEnd("item rendering")
            }
            if ("scrolling" != n.getProperty(this.mode_name, "navigation-type", this.propertiesOverride)) {
                m.style.width = "auto";
                var x = this.drawPager(), w = n.getProperty(this.mode_name, "auto-scroll", this.propertiesOverride);
                void 0 !== w && void 0 !== x && null != x && "none" != w && (this.auto_scroll = function () {
                    var e = 0;
                    for (b = 0; b < x.pages.length; b++) if (x.pages[b] == x.current && b != x.pages.length - 1) {
                        e = ++b;
                        break
                    }
                    x.pages[e].page_switch()
                }, null != this.auto_scroll_interval && TRC.Interval.clear(this.auto_scroll_interval), this.auto_scroll_interval = TRC.Interval.set(this.auto_scroll, parseInt(w)))
            } else m.style.width = o + "px", TRC.Browser["ieUpto"](6) && 1.1 * r.parentNode.parentNode.clientWidth < r.clientWidth && (r.style.width = "99%"), function (e) {
                if (!(r["client" + e] + 1 >= r["scroll" + e])) {
                    if (TRC.Browser.ie && TRC.Browser.ie < 8) return r.style[e.toLowerCase()] = m["client" + e] + 18 + "px", void("Width" == e && (this.element.style.width = r.style[e.toLowerCase()]));
                    var t = Math.floor(Math.max(1, r["scroll" + e] - r["client" + e]));
                    t -= Math.max(0, r["scroll" + e] - r.parentNode["scroll" + e]);
                    var i = parseInt(r.style[e.toLowerCase()]),
                        o = Math.max(r["scroll" + e], isNaN(i) ? 0 : i) + t + "px";
                    r.style[e.toLowerCase()] = o, "Width" == e && (this.element.style.width = o), this.postRenderQueue.pushFront("adapt to scrollbar", arguments.callee.trcBind(this, e))
                }
            }.call(this, "horizontal" == n.getProperty(this.mode_name, "orientation", this.propertiesOverride) ? "Height" : "Width"), n.getProperty(this.mode_name, "shade-scroll", this.propertiesOverride) && this.postRenderQueue.pushBack("drawShade", function (e) {
                this.drawShade(e)
            }.trcBind(this, d)), r.onscroll = function () {
                this.sendEvent("explore", {}, null, !0), this.check_visibility()
            }.trcBind(this), this.check_visibility();
            if (this.shouldAddRowsClearingDivs()) for (var b = 0; b < this.boxes.length; b++) this.isBeginningOfNewRow(b, this.boxes.length) && this.addAutoSizeRowClearingDiv(this.boxes[b]);
            this.boxes[0].className += " trc-first-recommendation trc-spotlight-first-recommendation", this.hasSyndicatedContent && this.postRenderQueue.pushBack("syndication hint icon", this.addSyndicationHintIcon.trcBind(this, m)), "embed" === this.link_target && this.postRenderQueue.pushBack("createEmbedThumb", this.createEmbedThumb.trcBind(this)), this.postRenderQueue.pushBack("list-suffix,publisher-end", function (e) {
                this.trc.getFunction(this.mode_name, "list-suffix", this.propertiesOverride, e, this), this.trc["publisher-end"](this.id)
            }.trcBind(this, m)), this.postRenderQueue.pushBack("checkForBlocking", this.checkForBlocking.trcBind(this)), this.postRender(), this.trc.global["thumb-lazy-load-switch"] && this.setLazyImageLoadMethod();
            var I = 0, E = 1e3;
            this.visibleTimeoutId = null, void 0 !== this.trc.global && (I = this.trc.global["visible-delay"] ? this.trc.global["visible-delay"] : I, E = this.trc.global["visible-cycle"] ? this.trc.global["visible-cycle"] : E), this.setVisibility(this.manualVisibility, this.trc.global["enable-deferred-visible"], this.trc.global["visible-defer-timeout"], I, E, m), TRC.eventDelegator.dispatch("onrender", {
                name: this.mode_name,
                container: this.container,
                placement: this.orig_placement
            }), TRC.EventsAPI.dispatchRender(e, this), TRC.tlf && console.timeEnd("mode rendering"), TRC.tlf && console.groupEnd()
        }

        function k(e) {
            var t = parseInt(document.trcGetCurrentStyle(e, "height"));
            if (isNaN(t)) return !0;
            var i = document.createElement("span");
            i.style.display = "block", i.style.height = "10px", i.style.width = "10px", e.appendChild(i);
            var r = parseInt(document.trcGetCurrentStyle(e, "height"));
            return e.removeChild(i), r != t
        }

        function S(e, t) {
            e.style.height = t + "px";
            for (var i = 0; e.clientHeight > t;) e.style.height = t - ++i + "px"
        }
    }, r.prototype.postRender = function (e) {
        if (e) {
            var t = this.postRenderQueue.popFront();
            if (null == t) return void __trcDebug("TRCRBox.postRender: finished");
            try {
                t.func.call(this), TRC.pConsole(this.mode_name, "debug", "executing postRender functions - see info", t.func.toString())
            } catch (e) {
                __trcError("Error in TRCRBox.postRender while executing " + t.name, e)
            }
        }
        TRC.Timeout.set(this.postRender.trcBind(this, !0), 0)
    }, r.prototype.getPopupUrl = function () {
        return this.trc.getProperty(this.mode_name, "popup-custom-url", this.propertiesOverride) || "popup.taboola.com/" + (this.trc["language"] || "en")
    }, r.prototype.addSyndicationHintIcon = function (e) {
        var t = this.trc.getProperty(this.mode_name, "syndicated-attribution", this.propertiesOverride),
            i = this.trc.getProperty(this.mode_name, "syndicated-attribution-tooltip", this.propertiesOverride),
            r = this.trc.getProperty(this.mode_name, "syndicated-attribution-position", this.propertiesOverride), o,
            n = document.createElement("a"), a = /\btrc_rbox\b/;
        for (n.href = TRC.PROTOCOL + "//" + this.getPopupUrl() + "/?" + this.getAttributionLinkParams(), n.rel = "nofollow", n.appendChild(document.createTextNode(t)), n.title = i, n.style.display = "block", n.className = "whatsThisSyndicated a-" + r, n.target = "_blank"; !a.test(e.className);) e = e.parentNode;
        (o = n.cloneNode(!0)).className += " trc_mobile_attribution_link", n.className += " trc_desktop_attribution_link", e.appendChild(n), e.appendChild(o), "absolute" !== e.style.position && (e.style.position = "relative"), TRC.dom.on(n, "click", function (e) {
            return TRC.aboutUs.open(e || event) || !1
        })
    }, r.prototype.drawShade = function (e) {
        if (!(TRC.Browser.ie && TRC.Browser.ie <= 6)) {
            var t = this.listContainer["client" + ("vertical" == e ? "Width" : "Height")] + "px",
                i = this.listContainer["client" + ("vertical" == e ? "Height" : "Width")] + this.listContainer["client" + ("vertical" == e ? "Top" : "Left")] - 10 + "px",
                r = document.createElement("div");
            r.className = e + "-start-shade", r.style["vertical" == e ? "width" : "height"] = t, r.style["margin" + ("vertical" == e ? "Top" : "Left")] = this.listContainer["client" + ("vertical" == e ? "Top" : "Left")] + "px";
            var o = document.createElement("div");
            o.className = e + "-end-shade", o.style["vertical" == e ? "width" : "height"] = t, this.listContainer.parentNode.insertBefore(r, this.listContainer), this.listContainer.parentNode.insertBefore(o, this.listContainer), o.style["margin" + ("vertical" == e ? "Top" : "Left")] = i, o.style.backgroundRepeat = r.style.backgroundRepeat = "repeat-" + ("vertical" == e ? "x" : "y")
        }
    }, r.prototype.drawPager = function () {
        var e = this.trc, t = e.getProperty(this.mode_name, "pager-type-style", this.propertiesOverride),
            i = e.getProperty(this.mode_name, "cyclical-paging", this.propertiesOverride),
            r = e.getProperty(this.mode_name, "pager-position", this.propertiesOverride),
            o = e.getProperty(this.mode_name, "pager-button-location", this.propertiesOverride),
            n = e.getProperty(this.mode_name, "pager-button-style", this.propertiesOverride), a = this.mode_name,
            l = this.listContainer, c = e.getProperty(a, "orientation", this.propertiesOverride), d = l.firstChild, h;

        function p() {
            TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui drawPager count_number_of_pages");
            var e = [], t = 0, i = 0;
            if ("none" == this.navigationType) return [{start_index: 0, end_index: this.boxes.length}];
            for (h = 0; h < this.boxes.length; h++) {
                var r = this.boxes[h];
                d.appendChild(r), r.fixTextOverflow(!0), "vertical" == c ? d.offsetHeight - 5 >= l.clientHeight && (d.removeChild(r), e[t++] = {
                    start_index: i,
                    end_index: h - 1 < i ? i : h - 1
                }, i = h - 1 >= i ? h-- : h, this.clearChilds(d)) : 1.1 * l.clientHeight < l.scrollHeight && (d.removeChild(r), e[t++] = {
                    start_index: i,
                    end_index: h - 1 <= i ? i : h - 1
                }, i = h - 1 >= i ? h-- : h, this.clearChilds(d))
            }
            return e[t] = {start_index: i, end_index: h - 1}, this.clearChilds(d), e
        }

        this.rows = e.getProperty(a, "rows", this.propertiesOverride), this.clearChilds(d), l.style.overflowX = "hidden", l.style.overflowY = "hidden";
        var u = p.call(this), m = document.createElement("div");
        if (m.style.clear = "both", !this.autoSize) {
            for (; this.rows > 1 && !(u.length >= this.rows);) this.rows--;
            if (this.rows > 1) for (var g = [], f = 0; f < u.length; f++) this.boxes[u[f].start_index].className += " trc-first-in-row", (f + 1) % this.rows == 0 && g.push({
                start_index: u[f + 1 - this.rows].start_index,
                end_index: u[f].end_index
            });
            g && (l.style.height = "auto", u = g)
        }
        for (h = u[0].start_index; h <= u[0].end_index; h++) if (!(h >= this.boxes.length)) {
            var b = this.boxes[h];
            d.appendChild(b);
            try {
                null != b.img_src && (void 0 === b.image_div ? b.thumb.appendChild(b.img) : (b.thumb.appendChild(b.image_div), b.image_div.appendChild(b.img)), this.setImageLoad(b.img, b, b.img_src, 100, b.thumb, this.trc.global["thumb-lazy-load-switch"]), b.img_src = null)
            } catch (e) {
                __trcError("Pager thumbnail images fixing errors", e)
            }
            b.fixTextOverflow()
        }
        d.appendChild(m);
        var v = this.pager;
        if (null != v) try {
            v.parentNode.removeChild(v)
        } catch (e) {
        }
        var C = u.length;
        if (TRC.rboxMap && C && TRC.rboxMap.sendDebugMap("trcrboxui drawPager countPages"), C <= 1 || "none" == this.navigationType) return this.check_visibility(), null;
        var y = document.createElement("div");
        y.style.position = "absolute", y.style.width = l.clientWidth / 2 + "px";
        var T = document.createElement("div");
        y.appendChild(T), l.parentNode.appendChild(y), T.id = "trc_pager_" + this.id, T.className = "trc_pager", T.current = null, T.pages = [], T.curPage = 0;
        var _ = l.clientWidth, R = document.createElement("div");
        R.id = "pager_prev_" + this.id, R.className = "trc_pager_prev", "sides" == o ? (R.style.width = "auto", R.style.paddingTop = (l.clientHeight - R.clientHeight) / 2 + "px", R.style.position = "absolute", R.style["ltr" == e.direction ? "left" : "right"] = "0px", l.parentNode.insertBefore(R, l)) : T.appendChild(R), R.onclick = function () {
            T.curPage > 0 ? T.pages[T.curPage - 1].onclick() : i && T.pages[T.pages.length - 1].onclick()
        };
        var x = document.createElement("div");
        x.id = "pager_next_" + this.id, x.className = "trc_pager_next", x.onclick = function () {
            T.curPage + 1 < T.pages.length ? T.pages[T.curPage + 1].onclick() : i && T.pages[0].onclick()
        };
        var w = TRC.URL.prototype.switchProtocol.call(e.getProperty(this.mode_name, "pager-button-inactive-image", this.propertiesOverride), s),
            I = TRC.URL.prototype.switchProtocol.call(e.getProperty(this.mode_name, "pager-button-active-image", this.propertiesOverride), s),
            E = TRC.URL.prototype.switchProtocol.call(e.getProperty(this.mode_name, "pager-button-hover-image", this.propertiesOverride), s);
        if ("none" != o) if (TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui drawPager pager_btn_location"), "image" == n) "" != w ? (R.image = document.createElement("img"), "sides" == o && (R.image.onload = function () {
            l.style.paddingLeft = l.style.paddingRight = this.clientWidth + "px"
        }), R.image.src = w, R.appendChild(R.image), x.image = document.createElement("img"), "sides" == o && (x.image.onload = function () {
            l.style.paddingLeft = l.style.paddingRight = this.clientWidth + "px", this.style["ltr" == e.direction ? "left" : "right"] = _ - this.clientWidth + "px"
        }), x.image.src = w, x.appendChild(x.image), R.onmouseover = function () {
            this.before_image = this.image.src, E != this.image.src && (this.image.src = E)
        }, R.onmouseout = function () {
            void 0 !== this.before_image && this.before_image != this.image.src && (this.image.src = this.before_image)
        }, x.onmouseover = function () {
            this.before_image = this.image.src, E != this.image.src && (this.image.src = E)
        }, x.onmouseout = function () {
            void 0 !== this.before_image && this.before_image != this.image.src && (this.image.src = this.before_image)
        }) : (R.innerHTML = "&lt;", x.innerHTML = "&gt;"); else {
            var k = n.split("|");
            R.innerHTML = k[0], x.innerHTML = k[1]
        } else R.style.display = "none", x.style.display = "none";
        var S = document.createElement("div");
        S.className = "trc_pager_pages", T.appendChild(S);
        var P = e.getProperty(this.mode_name, "pager-style-active-image", this.propertiesOverride),
            B = e.getProperty(this.mode_name, "pager-style-inactive-image", this.propertiesOverride),
            L = e.getProperty(this.mode_name, "pager-style-hover-image", this.propertiesOverride);
        for (h = 0; h < C; h++) {
            var D = document.createElement("div");
            switch (t) {
                case"none":
                    D.innerHTML = "", S.style.cssText = "display:none !important;";
                    break;
                case"numbers":
                    D.innerHTML = "" + (h + 1);
                    break;
                case"counter":
                    var M = document.createElement("span");
                    M.className = "trc_pager_counter", M.innerHTML = Gettext.strargs(e.gt.gettext("%1 of %2"), [h + 1, T.pages.length]), D.appendChild(M), S.className.search("trc_pager_counter") < 0 && (S.className += " trc_pager_counter");
                    break;
                case"bullets":
                    D.innerHTML = '<span style="font-weight: bold;">&bull;</span>';
                    break;
                case"image":
                    "" != P ? (D.inner_img = document.createElement("img"), D.inner_img.src = B, D.appendChild(D.inner_img)) : D.innerHTML = "" + (h + 1)
            }
            D.className = "trc_pager_unselected", S.appendChild(D), D.index = h;
            var O = this;
            D.page_switch = function () {
                TRC.rboxMap && TRC.rboxMap.sendDebugMap("trcrboxui drawPager page_switch");
                try {
                    d.removeChild(m)
                } catch (e) {
                }
                if (null != T.current) {
                    for ("image" == t && "" != B && (D.inner_img.src = B), T.current.className = "trc_pager_unselected", h = u[T.curPage].start_index; h <= u[T.curPage].end_index; h++) h < O.boxes.length && d.removeChild(O.boxes[h]);
                    for (h = u[this.index].start_index; h <= u[this.index].end_index; h++) if (!(h >= O.boxes.length)) {
                        var r = O.boxes[h];
                        if (h === u[this.index].start_index && (r.className += " trc-spotlight-first-recommendation"), d.appendChild(r), void 0 !== r.img && null != r.img_src && (r.video_data.ad_load_count = (new Date).getTime(), void 0 === r.image_div ? r.thumb.appendChild(r.img) : (r.thumb.appendChild(r.image_div), r.image_div.appendChild(r.img)), r.img.src = r.img_src, r.img_src = null), null != r.spnoverlay) {
                            var n = r.spnoverlay, a = n.firstChild, s = n.lastChild,
                                l = s[(s.clientHeight > 0 ? "client" : "scroll") + "Height"];
                            a.style.width = s[(s.clientWidth > 0 ? "client" : "scroll") + "Width"] + "px", n.style.height = a.style.height = Math.max(l, parseInt(a.style.height)) + "px", r.spnoverlay = null
                        }
                        r.fixTextOverflow(), O.postRender()
                    }
                }
                if (d.appendChild(m), T.current = this, "image" == t && "" != P && (D.inner_img.src = P), this.className = "trc_pager_selected", T.curPage = this.index, void 0 !== x && (this.index + 1 >= T.pages.length && !i ? ("" != w && "none" != o && (x.image.src = w), x.className = "trc_pager_next pager_disabled") : ("" != I && "none" != o && (x.image.src = I), x.className = "trc_pager_next pager_enabled")), void 0 !== R && (this.index <= 0 && !i ? ("" != w && "none" != o && (R.image.src = w), R.className = "trc_pager_prev pager_disabled") : ("" != I && "none" != o && (R.image.src = I), R.className = "trc_pager_prev pager_enabled")), "counter" == t) {
                    var c = document.createElement("div");
                    for (c.appendChild(document.createTextNode(Gettext.strargs(e.gt.gettext("%1 of %2"), [this.index + 1, T.pages.length]))); S.firstChild;) S.removeChild(S.firstChild);
                    S.appendChild(c)
                }
                O.check_visibility(), TRC.dispatch("trc_afterRboxDraw")
            }, D.onclick = function () {
                this.page_switch(), 0 != this.index && O.sendEvent("explore", {}, null, !0)
            }, D.onmouseover = function () {
                "image" == t && "" != L && (this.prev_img = this.inner_img.src, this.inner_img.src = L)
            }, D.onmouseout = function () {
                "image" == t && void 0 !== this.prev_img && (this.inner_img.src = this.prev_img)
            }, T.pages.push(D)
        }
        if ("sides" == o ? (x.style.width = "auto", x.style.paddingTop = (l.clientHeight - x.clientHeight) / 2 + "px", x.style.position = "absolute", l.parentNode.insertBefore(x, l), l.style.paddingLeft = l.style.paddingRight = x.clientWidth + "px", x.style["ltr" == this.trc.direction ? "left" : "right"] = _ + x.clientWidth + "px") : T.appendChild(x), T.pages[0].onclick(), this.pager = T, "center" == r) {
            T.style.position = "absolute", T.style.cssFloat = "none", T.style.styleFloat = "none", T.style.display = "block";
            var A = T.clientWidth;
            T.style.width = A + 2 + "px", T.style.position = "relative";
            var N = (l.clientWidth - A) / 2;
            T.parentNode.style.width = A + 2 + N + "px", T.style.marginLeft = N + "px"
        } else if ("header" == r && this.header.ext) {
            T.parentNode.removeChild(T), T.className += " in_trc_header";
            var V = document.createElement("div");
            V.appendChild(T), V.id = T.id, T.id = "";
            var F = document.createElement("div");
            F.style.clear = "left", V.appendChild(F), this.header.titleBox.innerHTML || (this.header.titleBox.innerHTML = "&nbsp;"), this.header.ext.appendChild(V)
        }
        return T
    }, r.prototype.check_visibility = function () {
        for (var e = 0; e < this.boxes.length; e++) {
            var t = this.boxes[e];
            this.itemMaxHeight && (t.style.height = this.itemMaxHeight + "px")
        }
    }, r.prototype.playInsideHostingContainer = function (t, i, r) {
        var o = this.trc.getProperty(this.mode_name, "render-player-info", this.propertiesOverride), n, a, s,
            l = this.trc.getProperty(this.mode_name, "player-detail-order", this.propertiesOverride), c;
        r.videoBlock ? ("A" === r.videoBlock.tagName.toUpperCase() && (n = this.trc.getProperty(this.mode_name, "player-thumbnail-height", this.propertiesOverride) || 300, r.videoBlock.parentNode.replaceChild(c = document.createElement("DIV"), r.videoBlock), r.videoBlock = c, r.videoBlock.style.height = o ? n + "px" : "", r.videoBlock.style.overflow = "hidden", o && (r.videoBlock.style.width = (this.trc.getProperty(this.mode_name, "player-thumbnail-width", this.propertiesOverride) || 400) + "px", r.videoBlock.style.height = (this.trc.getProperty(this.mode_name, "player-thumbnail-height", this.propertiesOverride) || 300) + "px")), __trcPurgeEventHandlers(r.videoBlock), r.videoBlock.innerHTML = "", s = r.getElementsByTagName("A")[0], i.apply(null, [r.videoBlock, t]), o && (a = this.drawVideoBox(t, r.hasDuration, l, "top"), __trcPurgeEventHandlers(s), s.parentNode.replaceChild(a.getElementsByTagName("A")[1], s)), this.sendEvent("click", {
            ii: t["item-id"],
            it: t.type
        }, null), this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(t)["c"])) : __trcError("Error opening autoPlayContainer", e)
    }, r.prototype.findElement = function (e, t, i, r) {
        void 0 === t && (t = document), void 0 === i && (i = "*");
        for (var o = t.getElementsByTagName(i), n = 0; n < o.length; n++) if (e(o[n])) return o[n];
        return r
    }, r.prototype.findElements = function (e, t, i) {
        for (var r = [], o = 0; e && o < e.length; o++) {
            var n = e[o], a = this.findElement(function (e) {
                return e.className.search(n) >= 0
            }, t, "span");
            a && (i && (a = a.cloneNode(!0)), r.push(a))
        }
        return r
    }, r.prototype.findFlash = function (e) {
        var t = this.findElement(e, document, "embed");
        return t || this.findElement(e, document, "object")
    }, r.prototype.pauseVideo = function (e) {
        var t = this.findFlash(function (e) {
            return "function" == typeof e.pauseVideo
        });
        try {
            t && t.pauseVideo(e)
        } catch (e) {
            __trcError("Error in pauseVideo", e)
        }
        "function" == typeof window["trc_pauseVideo"] && window["trc_pauseVideo"](e)
    }, r.prototype.playVideoAd = function (e, t, i, r) {
        var o = this.findFlash(function (e) {
            return "function" == typeof e.playVideoAd
        });
        try {
            o && o.playVideoAd(e.title, e["display-url"], e["landing-url"], e.url, t, i, e["item-id"], r)
        } catch (e) {
            __trcError("Error in playVideoAd", e)
        }
    }, r.prototype.getLinkTarget = function (e, t, i) {
        var r;
        return (r = t && t[e] || i[e]) || (r = "_blank"), r
    }, r.prototype.addPiggyBackParams = function (e) {
        if (e) return e + "&ppb=" + this.response.trc["ppb"] + "&cpb=" + this.response.trc["cpb"]
    }, r.prototype.addModeDebugData = function (e) {
        return e + encodeURI(this.getModeDebugData("string"))
    }, r.prototype.getModeDebugData = function (e, t) {
        try {
            var i = this.response.trc["test-variant"];
            if ("string" === e) {
                var r = "&cmn=" + this.mode_name, o = "&cpn=" + this.placement, n = "", a = "", s = "";
                return i !== t && (n = "&omn=" + this.orig_name, a = "&opn=" + this.orig_placement, s = "&vn=" + i), r + o + n + a + s
            }
            var l = {};
            return l.cmn = this.mode_name, l.cpn = this.placement, i !== t && (l.omn = this.orig_name, l.opn = this.orig_placement, l.vn = i), l
        } catch (e) {
        }
    }, r.prototype.detectItemFromSameHost = function (e, t) {
        if (e === t || this.trc["detect-item-from-same-host"](e, t)) return !0;
        for (var i = e.split(".").reverse().join(""), r = t.split(".").reverse().join(""), o = 6, n = !0, a = 0; a < o; a++) if (i[a] !== r[a]) {
            n = !1;
            break
        }
        return n
    }, r.prototype.createVideoLink = function (e, t) {
        var i = document.createElement("a"), r = this.trc.global["publisher-onclick-nt-enabled"] && e["is-in-network"],
            r = this.ntHandlerEnabled && e["is-in-network"], o, n,
            a = this.sendClickPiggyBack ? this.addPiggyBackParams(e.logger_url) : e.logger_url,
            s = !0 !== this.trc.global["disable-stop-propagation"],
            l = TRC.pageManager.getTopMostWindow().location.hostname, c = TRC.URL(e["url"]).host;
        return this.sendModeDebugData && (a = this.addModeDebugData(a)), !0 === this.response.trc["video-list"]["content-hub-forced-placement"] && (a = a.replace("click", "content-hub-click")), r && (e.hasNtClckHnadler = !0), i.title = TRC.isOptim("title-decode") ? t : TRC.util.getHtmlDecodeText(t), e.link_target = this.link_target, e.isSyndicated && !r ? (i.href = e.url, (this.trc.global["allow-nofollow-for-exchange"] || !e["is-in-network"] || e["is-in-network"] && !this.detectItemFromSameHost(l, c)) && (i.rel = "nofollow"), o = this.getLinkTarget(this.getProviderType(e), this.linkTargetConf, this.defaultLinkTarget), i.logger_url = a.replace("&url=", "&redir=") + (e["is-in-network"] ? "&prt=nt" : "") + (e["is-native"] ? "&prt=nav" : ""), i.target = o, 1 == this.trc.global["enable-ie-split-click-event"] && TRC.Browser.ie && (n = i.logger_url.length > 2048), !0 === this.trc.global["touchstart-enabled"] && TRC.dom.on(i, "touchstart", function (e) {
            i.href = i.logger_url, i.isTouchPropagation = 1, s && e.stopPropagation()
        }), i.onmousedown = function (e) {
            if (((e = e || event).target || e.srcElement).target = o, i.isTouchPropagation) return !0;
            n || (i.href = i.logger_url)
        }, i.onclick = function () {
            if (TRC.clickFraudDetect.isInitialized && e["is-syndicated"] && TRC.clickFraudDetect.fraudScriptCallback(this.placement, TRC.pageManager.getValue("user-id")), this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(e)["c"]), this.trc.global["deep-linking-enabled"] && TRC.DeepLinking.isAppStoreURL(e.url, this.trc.global["additional-deep-links-regex"])) try {
                return TRC.DeepLinking.openDeepLink(i.logger_url), !1
            } catch (e) {
            }
            return !!i.isTouchPropagation || (n ? this.sendEvent("click", {
                ii: e["item-id"],
                it: e.type
            }, null, !1) : this.shiftRedirOnclick && (i.href = i.logger_url), this.pauseVideo("link"), !TRC.Browser["ieUpto"](7) || (this.clickLink(i.href, i.target), !1))
        }.trcBind(this)) : (i.href = e.url, "blank" != this.link_target ? i.target = "_parent" : (i.target = "_blank", i.onmousedown = function (e) {
            ((e = e || event).target || e.srcElement).target = "_blank"
        }), e["is-in-network"] && (e.scParams.prt = "nt"), this.organicRedirParam && (a = a.replace("&url=", "&" + this.organicRedirParam + "=")), this.useRedirect && this.useRedirectOnLink && (i.href = a), i.onmousedown = function () {
            i.href = a
        }, i.onclick = this.videoLinkClickHandler.trcBind(this, e, i, a)), this.trc.global["events-api-click-enabled"] && TRC.dom.on(i, "click", function (t) {
            var r = i.target;
            e.linkTarget = r, "_blank" === r ? setTimeout(function () {
                TRC.EventsAPI.dispatchClick(e, this.response.trc)
            }.trcBind(this), 0) : TRC.EventsAPI.dispatchClick(e, this.response.trc)
        }.trcBind(this)), i
    }, r.prototype.videoLinkClickHandler = (l = 2e3, c = function (e, i, r) {
        var o;
        return "function" != typeof e.trc.global["syndication-embed-code"] || t.trc_testmode ? t.open(i.logger_url) : __trcWarn("Taboola Lightbox implementation is deprecated"), !1
    }, d = function (e, i) {
        var r = e.trc.getProperty(e.mode_name, "player-embed-code", this.propertiesOverride),
            o = e["player-container-id"], n = e.billboard || document.getElementById(o);
        return "function" == typeof r && n && !t.trc_testmode ? e.playInsideHostingContainer(i, r, n) : t.open(i.logger_url), !1
    }, h = function (e, t, i, r) {
        return "video" == t.type && e.pauseVideo("link"), i.target = "_blank", TRC.Browser["ieUpto"](7) || r ? !!TRC.Browser["firefoxUpto"](8) || (e.clickLink(i.href, i.target), !1) : (i.href = t.url, e.sendEvent("click", {
            ii: t["item-id"],
            it: t.type
        }, null, !1), !0)
    }, p = function (e) {
        var t = e.link_target;
        if ("local" === t) {
            if ("function" == typeof window["trc_videoSelected"]) return void window["trc_videoSelected"].call(window, e.id, e.url);
            t = this.trc.video_source
        }
        this.clickLink(e.url)
    }, function (e, i, r, o) {
        o = o || event;
        var n = e.link_target, a = !1, s = this.useRedirect;
        if ("embed" !== n && this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(e)["c"]), "lightbox" === n && this.trc.global) return c(this, e, o);
        switch (n) {
            case"embed":
                a = d(this, e);
                break;
            case"blank":
                (o.target || o.srcElement).target = "_blank", s && (i.href = r), a = h(this, e, i, s);
                break;
            default:
                if (s && "local" != e.link_target && "function" != typeof this.onclick && "function" != typeof this.trc.onclick) {
                    if (TRC.Browser["ieUpto"](7)) return this.clickLink(i.href, i.target), !1;
                    this.shiftRedirOnclick && (i.href = r), a = !0
                } else this.sendEvent("click", e.hasNtClckHnadler ? e.scParams : {
                    ii: e["item-id"],
                    it: e.type
                }, null, !1, this.publisherClickHandler.trcBind(this, e, p.trcBind(this, e, !1)), l)
        }
        return e.url != e.original_url && __trcDebug("url:" + e.original_url + ", changed to:" + e.url + ", on page:" + t.location.href), a || (o.cancelBubble = !0, o.stopPropagation && o.stopPropagation()), a
    }), r.prototype.clickLink = function (e, i) {
        TRC.Browser["firefoxUpto"](8) && (t.location.href = e);
        var r = document.createElement("a");
        if (r.href = e, r.target = i || "_parent", r.style.visibility = "hidden", document.body.appendChild(r), r.click) r.click(); else {
            var o = new MouseEvent("click", {bubbles: !0, cancelable: !0, view: window, button: 0});
            r.dispatchEvent(o)
        }
    }, r.prototype.publisherClickHandler = function (e, t) {
        var i = __trcCopyProps(e, {});
        delete i["item-id"], delete i.link;
        try {
            if ("function" == typeof this.onclick && !this.onclick.call(this.pubOpts, i)) return !1;
            if ("function" == typeof this.trc.onclick && !this.trc.onclick.call(this.pubOpts, i)) return !1
        } catch (e) {
            __trcError("Publisher 'onclick' handler had an error", e)
        }
        return t(this)
    }, r.prototype.add_span = function (e, t, i) {
        var r = document.createElement("span");
        return null != e && (r.className = e), null != t && ("object" == typeof t ? r.appendChild(t) : r.innerHTML = t), void 0 !== i && i.appendChild(r), r
    }, r.prototype.genBidiLabel = function (e, t, i) {
        var r, o, n = TRC.util.textIsRTL(t), a = o = t, s = "video-label " + i;
        if (this.shouldUseSmartEllipsis() && (!this.useNativeLineClamp || n)) {
            var l = this.trc.getProperty(this.mode_name, "tokenize-strategy") || "word",
                c = TRC.Ellipsis._tokenizeStrategies[l];
            a = TRC.Ellipsis._tokenizeSingle(o.innerHTML || o, c), s += " trc-smart-ellipsis"
        }
        return (r = this.add_span(s, a, e)).isRTL = n, r.tokenizeStrategy = l, r
    },r.prototype.buildLabelBox = function (e, t, i) {
        var r, o, n;
        for (-1 !== i.indexOf("title") && this.createTitleAndIconContainer(e), r = 0; r < i.length; r++) switch (o = i[r]) {
            case"title":
                this.genBidiLabel(e, t.title, "video-title");
                break;
            case"uploader":
                void 0 !== t.uploader && this.add_span("video-label video-uploader", this.formatData("uploader", t.uploader), e);
                break;
            case"category":
                void 0 !== t.category && this.add_span("video-label video-category", this.formatData("category", decodeURIComponent(t.category.split(";")[0].split("//")[0])), e);
                break;
            case"views":
                this.add_span("video-label video-views", this.formatData("views", t["views"]), e);
                break;
            case"rating":
                this.add_span("video-label video-rating", this.formatData("rating", t["rating"]), e);
                break;
            case"description":
                var a;
                this.genBidiLabel(e, t.description, "video-description").title = '"Description: ' + this.removeHtmlTags(t.description) + '"';
                break;
            case"duration":
                void 0 !== t.duration && "" != t.duration && this.add_span("video-label video-duration-detail", this.formatData("duration", t.duration), e);
                break;
            case"branding":
                t.isSyndicated ? this.shouldHandleScBrandingWithSponsoredLink() ? this.createScBrandingWithSponsoredLink(t, e) : this.createScBranding(t, e) : this.createOrganicBranding(t, e);
                break;
            case"url":
                break;
            default:
                void 0 !== t[o] && t[o] && this.add_span("video-label video-" + o, this.formatData(o, t[o]), e)
        }
    },r.prototype.shouldHandleScBrandingWithSponsoredLink = function () {
        return "after_branding" === this.getDisclosurePosition()
    },r.prototype.getDisclosurePosition = function () {
        return this.disclosurePosition || (this.disclosurePosition = this.trc.getProperty(this.mode_name, "disclosure-position", this.propertiesOverride)), this.disclosurePosition
    },r.prototype.getDisclosureAlignment = function () {
        return this.disclosureAlignment || (this.disclosureAlignment = this.trc.getProperty(this.mode_name, "disclosure-alignment", this.propertiesOverride)), this.disclosureAlignment
    },r.prototype.createScBrandingWithSponsoredLink = function (e, t) {
        var i, r, o;
        i = this.trc.getProperty(this.mode_name, "branding-separator", this.propertiesOverride), this.branding = this.add_span("branding composite-branding", null, t), this.add_span("branding-inner", this.formatData("syndicator", e["branding-text"]), this.branding), (r = this.trc.getProperty(this.mode_name, "disclosure-link-text-sponsored", this.propertiesOverride)) && ("right" !== (o = this.getDisclosureAlignment()) && this.add_span("branding-separator", i, this.branding), this.renderDisclosureLinkWithBranding(this.branding, r, o))
    },r.prototype.createScBranding = function (e, t) {
        e["branding-text"] ? this.add_span("branding", this.formatData("syndicator", e["branding-text"]), t) : e["branding-url"] && this.add_span("branding", "<img src='" + e["branding-url"] + "'>", t)
    },r.prototype.createOrganicBranding = function (e, t) {
        this.add_span("branding", this.formatData("syndicator", this.getPublisherBrandingName()), t)
    },r.prototype.createTitleAndIconContainer = function (e) {
        var t, i, r, o = this.trc.getProperty(this.mode_name, "title-icon", this.propertiesOverride) || "NONE";
        "CUSTOM" === o ? r = this.trc.getProperty(this.mode_name, "title-icon-url", this.propertiesOverride) : "PUBLISHER_LOGO" === o && (r = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-logo")), r && (t = document.createElement("span"), i = document.createElement("img"), t.className = "video-icon-container", i.className = "video-icon-img trc_img", i.src = TRC.URL.prototype.switchProtocol.call(r, s), e.className += " label-box-with-title-icon", t.appendChild(i), e.appendChild(t))
    },r.prototype.FixVideoImage = function (e, t, i) {
        var r = TRC.css.utils;
        if (0 == i.height || 0 == i.width || !i.complete || TRC.Browser["ieUpto"](6)) return r.setStyleProperty(i, "width", e + "px", this.isCssImportant), r.setStyleProperty(i, "height", t + "px", this.isCssImportant), void(i.style.visibility = "visible");
        var o = e / t, n = i.width / i.height;
        if (o > n) {
            var a = Math.floor(e / n), s = Math.floor((t - a) / 2);
            r.setStyleProperty(i, "width", e + "px", this.isCssImportant), 0 != s && (TRC.Browser["ieAtleast"](8) ? (i.style.position = "relative", r.setStyleProperty(i, "top", s + "px", this.isCssImportant)) : r.setStyleProperty(i, "margin-top", s + "px", this.isCssImportant))
        } else {
            var l = Math.floor(t * n), c = Math.floor((e - l) / 2);
            r.setStyleProperty(i, "height", t + "px", this.isCssImportant), 0 != c && (TRC.Browser["ieAtleast"](8) ? (i.style.position = "relative", "ltr" == this.trc.direction ? r.setStyleProperty(i, "left", c + "px", this.isCssImportant) : r.setStyleProperty(i, "left", -1 * c + "px", this.isCssImportant)) : "ltr" == this.trc.direction ? r.setStyleProperty(i, "margin-left", c + "px", this.isCssImportant) : r.setStyleProperty(i, "margin-right", c + "px", this.isCssImportant))
        }
        i.style.visibility = "visible"
    },r.prototype.drawThumbnailLink = function (e, t, i, r, o) {
        var n;
        t || "video" == i.type && void 0 !== i.duration && "" != i.duration && "0" != i.duration && (n = this.genDuration(i.duration));
        var a = this.createVideoLink(i, r);
        TRC.dom.addClass(a, "item-thumbnail-href"), void 0 !== i["thumbnail-clickable"] && "false" == i["thumbnail-clickable"] && (a.title = "", a.style.cursor = "default", a.onclick = function () {
            return !1
        });
        var l = this.trc.getProperty(this.mode_name, "thumbnail-height", this.propertiesOverride),
            c = this.trc.getProperty(this.mode_name, "thumbnail-width", this.propertiesOverride),
            d = document.createElement("span");
        if (d.className = "thumbBlock", void 0 !== l && (d.style.height = l + "px"), void 0 !== c && (d.style.width = c + "px"), i.imageIframe) this.drawImageIframe(d, i.imageIframe, i.link.logger_url), e.hasFloatingButton = !0; else {
            var h = document.createElement("img");
            h.style.visibility = "hidden";
            var p = this.add_span("thumbnail-overlay", null, d);
            TRC.Browser["ieUpto"](6) && (p.style.display = "none");
            var u = this.trc.getProperty(this.mode_name, "emblem", this.propertiesOverride), m = null;
            null == u || "null" == u || TRC.Browser.ie && !TRC.Browser["ieAtleast"](7) || ((m = this.add_span("thumbnail-emblem", null, d)).style.backgroundImage = "url('" + u + "')"), void 0 !== l && (p.style.height = l + "px", null != m && (m.style.height = l + "px")), void 0 !== c && (p.style.width = c + "px", null != m && (m.style.width = c + "px")), h.onerror = this.imageOnErrorHandler.trcBind(this, h, i, s), h.onload = function (e) {
                e.complete ? this.FixVideoImage(c, l, e) : TRC.Timeout.set(arguments.callee.trcBind(this, e), 1e3)
            }.trcBind(this, h), 7 === TRC.Browser.ie && (e.image_div = document.createElement("div"))
        }
        if (i.isSyndicated) {
            var g = document.createElement("span");
            if (g.className = "branding", i["branding-text"]) g.appendChild(document.createTextNode(this.formatData("syndicator", i["branding-text"]))); else if (i["branding-url"]) {
                var f = document.createElement("img");
                f.src = i["branding-url"], g.appendChild(f)
            }
            d.style.position = "relative", d.appendChild(g);
            var b = document.createElement("span"),
                v = this.trc.getProperty(this.mode_name, "syndicated-static-text", this.propertiesOverride),
                C = this.trc.getProperty(this.mode_name, "syndicated-static-text-position", this.propertiesOverride);
            b.className = "static-text" + " " + C, v && b.appendChild(document.createTextNode(v)), d.appendChild(b)
        }
        if (e.thumb = d, e.img = h, e.img_src = this.getThumbnailURL(i, c, l), n) {
            var y = document.createElement("div");
            y.className = "video-duration video-duration-detail", y.style.left = 0, void 0 !== c && (TRC.Browser["ieUpto"](6) ? (y.style.marginLeft = c / 2 - 3 + "px", y.style.top = l / 2 - 15 + "px") : 7 === TRC.Browser.ie ? (y.style.left = c - 3 + "px", y.style.top = l - 15 + "px") : (y.style.marginLeft = c - 3 + "px", y.style.top = l - 15 + "px")), y.appendChild(n);
            var T = this.genDuration(i.duration);
            T.style.opacity = 1, T.style.filter = "alpha(opacity=100)", T.style.backgroundColor = "transparent", y.appendChild(T), d.appendChild(y)
        }
        switch (a.appendChild(d), o) {
            case"bottom":
                d.style.cssFloat = "none", d.style.styleFloat = "none", d.style.display = "block", d.style.width = c + "px";
                break;
            case"top":
            case"under":
                d.style.cssFloat = "none", d.style.styleFloat = "none", d.style.display = "block", d.style.width = c + "px";
                break;
            case"end":
                d.style.cssFloat = "right", d.style.styleFloat = "right"
        }
        return a
    },r.prototype.imageOnErrorHandler = function (e, t, i) {
        var r = e.src, o = r.search(/\Shttp\S/), n = t["item-id"];
        r = o > 5 && this.isTaboolaCDNImage(r) ? this.getFallbackImageForTaboolaCDNImage(r, n, i) : this.getFallbackImageForNonTaboolaCDNImage(e, n, i), e.src = r
    },r.prototype.isUsingImageOptimizationService = function (e) {
        var t = this.trc.global["images-host"] ? this.trc.global["images-host"] : "images.taboola.com";
        return e.indexOf(t) > -1
    },r.prototype.isTaboolaCDNImage = function (e) {
        return e.match(/cdn.taboola.com\/.*thumbnails\S/)
    },r.prototype.getFallbackImageForTaboolaCDNImage = function (e, t, i) {
        var r = this.isUsingImageOptimizationService(e), o = e.search(/\Shttp\S/), n = unescape(e.slice(o + 1)),
            a = TRC.URL.prototype.switchProtocol.call(r ? unescape(n) : n, i);
        return __trcWarn("Failed to load taboola CDN thumbnail " + e + " for item=" + t + ", loading direct thumbnail instead : " + a), a
    },r.prototype.getFallbackImageForNonTaboolaCDNImage = function (e, t, i) {
        var r = e.src, o = this.isUsingImageOptimizationService(r), n = r.search(/\Shttp\S/),
            a = o && unescape(e.src.slice(n + 1)),
            s = "https:" !== i || a && 0 === a.indexOf(i) || this.trc.global["always-allow-orig-image-fallback"];
        return n > 5 && o && s ? this.getOrigImageFromOptimizationUrl(e.src, a, t) : this.getDefaultThumbnail(e, t, i)
    },r.prototype.getOrigImageFromOptimizationUrl = function (e, t, i) {
        return __trcWarn("Failed to load thumbnail " + e + " for item=" + i + ", loading " + t + " thumbnail instead"), t
    },r.prototype.getDefaultThumbnail = function (e, t, i) {
        var r = this.trc.getProperty(this.mode_name, "default-thumbnail", this.propertiesOverride),
            o = TRC.URL.prototype.switchProtocol.call("undefined" != r ? r : "", i);
        return e.onerror = null, __trcWarn("Failed to load thumbnail " + e.src + " for item=" + t + ", loading default thumbnail instead"), o
    },r.prototype.drawVideoBox = function (e, t, i, r) {
        var o = "";
        (e = __trcCopyProps(e, {})).isSyndicated = e["is-syndicated"] || e["is-in-network"] || e["is-native"], e.isPhoto = "photo" === e.type, e.isText = "text" === e.type, e.imageIframe = e.hasOwnProperty("image-iframe") && e["image-iframe"], this.setApiItemsData(e), e.tags = "string" == typeof e.tags ? TRC.text.parseCSV(e.tags) : [];
        var n = document.createElement("div");
        n.rbox = this;
        var a = n.thumbnail_position = r || this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride);
        n.video_data = e, n.setAttribute("data-item-id", e["item-id"]), n.setAttribute("data-item-title", e.title), n.setAttribute("data-item-thumb", this.getThumbnailURL(e, 100, 80)), n.setAttribute("data-item-syndicated", !!e.isSyndicated), this.setVideoBoxClassName(n), this.autoSize && this.setAutoDimantions(n);
        var s = e.url;
        if (0 == s.search(/\w{3,4}:\/\/(\w+)\.taboola(syndication)?.com/)) for (var l = s.split(/[\?&]/), c = 0; c < l.length; c++) if ("url" == l[c].split("=")[0]) {
            s = decodeURIComponent(l[c].split("=")[1]);
            break
        }
        if (!e.isSyndicated) {
            if (e.original_url = s, (s = this.trc.getFunction(this.mode_name, "change-url", this.propertiesOverride, s, n, this.tracking)) == e.original_url && this.tracking) {
                var d = s.split("#");
                s = d[0] + (d[0].search("\\?") >= 0 ? "&" : "?") + this.tracking + (d[1] ? "#" + d[1] : "")
            }
            "function" == typeof TRC.pageManager && (s = TRC.pageManager.fixRecommendationURL(s))
        }
        e.url = s, e.scParams = this.createVideoBoxClickUrlParams(e, s), e.logger_url = this.createVideoBoxClickUrlWithParams(e.scParams), o += e.title;
        var h = this.createVideoLink(e, o);
        TRC.dom.addClass(h, "item-label-href"), e.link = h;
        var p = document.createElement("span");
        if (p.style.display = "block", p.className = "video-label-box", h.appendChild(p), n.labelsBox = p, n.appendChild(h), "none" != a) {
            var u = this.drawThumbnailLink(n, t, e, o, a);
            if ("under" == a) {
                var m = this.trc.getProperty(this.mode_name, "thumbnail-height", this.propertiesOverride);
                u.title = h.title = "", n.insertBefore(u, h), n.style.position = "relative", n.style.height = m + "px";
                var g = document.createElement("span");
                g.className = "label-box-overlay", h.className += "video-labels-anchor", o = this.findElement(function (e) {
                    return e.className.search("title") >= 0
                }, n.labelsBox, "span", null), TRC.Browser["ieUpto"](8) && !TRC.Browser["ieUpto"](7) && (h.className += " ie8fix"), n.labelsBox.appendChild(g), e.thumbUnder = !0
            } else "bottom" == a ? n.appendChild(u) : n.insertBefore(u, h)
        }
        var f = i || this.trc.getProperty(this.mode_name, "detail-order" + (e.isSyndicated ? "-syndicated" : ""), this.propertiesOverride);
        f = f.split(","), this.buildLabelBox(p, e, f), n.fixTextOverflow = this.fixBoxTitleAndDesc.trcBind(this, e, p), TRC.Browser["ieUpto"](6) && (n.onmouseover = function () {
            this.className += " videoCube_hover"
        }, n.onmouseout = function () {
            this.className = this.className.replace(/\b\s+videoCube_hover\b/g, "")
        }), e[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE] && e[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0 && TRC.TrackingScriptLoader.renderScriptTagIntoVideoBox(n, e);
        try {
            this.trc.getFunction(this.mode_name, "item-renderer", this.propertiesOverride, n, n.video_data)
        } catch (e) {
            __trcError("Error in itemRenderer", e)
        }
        return n
    },r.prototype.shouldAddRowsClearingDivs = function () {
        var e = "autowidget-template-static" === this.widgetCreatorLayout;
        return this.autoSize && e && !this.trc.global["disable-autosize-clearing-div"]
    },r.prototype.isBeginningOfNewRow = function (e, t) {
        var i = e % (t / this.rows) == 0;
        return 0 !== e && i
    },r.prototype.addAutoSizeRowClearingDiv = function (e) {
        var t = document.createElement("div");
        t.style.clear = "both", t.style.width = "100%", e.parentNode.insertBefore(t, e)
    },r.prototype.setAutoDimantions = function (e) {
        if (this.AutoSizeRule) {
            var t = this.AutoSizeRule.Ws + "px";
            this.rows > 1 && (e.style.marginBottom = t), this.boxes.length % this.AutoSizeRule.n == 0 && (t = 0), "rtl" == this.trc.direction ? e.style.marginRight = t : e.style.marginLeft = t, e.style.width = this.AutoSizeRule.Wi + "px";
            var i, r,
                o = this.trc.getProperty(this.mode_name, "thumbnail-height", this.propertiesOverride) / this.trc.getProperty(this.mode_name, "thumbnail-width", this.propertiesOverride);
            this.trc.modes[this.mode_name]["thumbnail-width"] = this.AutoSizeRule.Wi, this.trc.modes[this.mode_name]["thumbnail-height"] = Math.round(this.AutoSizeRule.Wi * o)
        }
    },r.prototype.getRuleAspectRatio = function (e, t) {
        return !(!e["virtualThumbWidth"] || !e["virtualThumbHeight"] || isNaN(e["virtualThumbWidth"]) || isNaN(e["virtualThumbHeight"])) && ("ratio" == t ? e["virtualThumbHeight"] / e["virtualThumbWidth"] : e["virtualThumbHeight"] / e["virtualThumbWidth"] * 100)
    },r.prototype.getThumbAspectRatio = function (e, t) {
        try {
            var i = e["thumbnail-height"] / e["thumbnail-width"];
            return "ratio" == t ? i : Math.round(100 * i)
        } catch (e) {
            return __trcWarn("getThumbAspectRatio", e.message), null
        }
    },r.prototype.getThumbnailURL = function (e, t, i) {
        if (void 0 === e["thumb-size"]) return e["thumbnail"];
        for (var r = [{
            w: e["thumb-size"].split("x")[0],
            h: e["thumb-size"].split("x")[1],
            u: e["thumbnail"]
        }], o = 1; void 0 !== e["thumb-size-" + o]; o++) r.push({
            w: e["thumb-size-" + o].split("x")[0],
            h: e["thumb-size-" + o].split("x")[1],
            u: e["thumbnail-" + o]
        });
        r = r.sort(function (e, t) {
            return e.w * e.h - t.w * t.h
        });
        for (var n = 0; n < r.length; n++) if (t * i <= r[n].w * r[n].h) return r[n].u;
        return r.pop().u
    },r.prototype.addTaboolaLogoNoDisclosure = function () {
        var e, t = this.trc["attribution"],
            i = this.trc.getProperty(this.mode_name, "attribution-text", this.propertiesOverride),
            r = TRC.URL.prototype.switchProtocol.call(this.trc.getProperty(this.mode_name, "logo-image", this.propertiesOverride), s),
            o = this.trc.getProperty(this.mode_name, "attribution-position", this.propertiesOverride), n,
            a = "//www.taboola.com/popup?" + ["template=colorbox", "utm_source=" + this.publisher, "utm_medium=referral", "utm_content=" + this.mode_name + ":" + this.placement + ":" + (this.trc["test-variant"] || "")].join("&");
        if (0 != t && "none" !== o) {
            var l = document.createElement("div");
            l.className = "logoDiv", l.innerHTML = "&nbsp;", "rtl" == this.trc["attribution-disclosure-direction"] ? (l.style.cssFloat = "left", l.style.styleFloat = "left") : (l.style.cssFloat = "right", l.style.styleFloat = "right");
            var c = document.createElement("a");
            c.href = a, c.rel = "nofollow", c.target = "_blank", l.appendChild(c), "top" == o ? "object" == typeof this.header && this.header.ext.appendChild(l) : this.element.appendChild(l);
            var d = document.createElement("div"), h = "clear:both; _height:1px; _overflow:hidden;";
            if ("string" == typeof d.style.cssText ? d.style.cssText = h : d.setAttribute("style", h), this.element.appendChild(d), "string" != typeof r || null != i && "" != i && "null" != i) c.innerHTML += i, e = c.cloneNode(!0), c.className += " trc_desktop_attribution_link", e.className += " trc_mobile_attribution_link", l.appendChild(e), c.onclick = function (e) {
                return TRC.aboutUs.open(e || event) || !1
            }; else if (TRC.Browser["ieUpto"](6)) {
                var p = document.createElement("span");
                p.style.width = "45px", p.style.height = "11px", p.backgroundImage = "none", p.style.display = "block", p.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + r + '")', c.appendChild(p)
            } else {
                var u = document.createElement("img");
                u.src = r, u.style.border = "0", c.appendChild(u)
            }
        }
    },r.prototype.addTaboolaLogo = function () {
        this.renderAdchoicesLink(this.getAdchoiceConfig(), this.itemsTypes, this.adcItemTypes), this.renderAttributionLink(), this.renderDisclosureLink(), this.addClearingDiv(), this.addWidgetContentType()
    },r.prototype.renderAttributionLink = function () {
        var e = "<span>" + this.trc.getProperty(this.mode_name, "attribution-text", this.propertiesOverride) + "</span>",
            t = this.trc.getProperty(this.mode_name, "attribution-position", this.propertiesOverride),
            i = this.trc["attribution"] && "none" != t,
            r = this.trc.getProperty(this.mode_name, "hide-attribution-when-no-place", this.propertiesOverride),
            o = this.trc["attribution-disclosure-direction"];
        i && ("top" === t ? this.isContainerNarrowForAttribution() ? r || this.generateLinksBox(this.getWidgetFooter(), e, o, "attribution", null, "bottom") : this.generateLinksBox(this.header.ext, e, o, "attribution", null, "top") : this.generateLinksBox(this.getWidgetFooter(), e, o, "attribution", null, "bottom"))
    },r.prototype.isContainerNarrowForAttribution = function () {
        if (TRC.isOptim("attribution") && this.isFeedCard) return !1;
        var e = this.trc.getProperty(this.mode_name, "min-width-for-attribution", this.propertiesOverride),
            t = this.container.clientWidth || this.container.offsetWidth;
        return t && e > t
    },r.prototype.adcHoverHandler = function (e, t) {
        var i = __trcGetElementsByClass("trc_adc_b_logo", null, e)[0];
        i.style.display = t ? "inline-block" : "none"
    },r.prototype.isAdchoicesEnabled = function (e, t, i) {
        return !!e && ("off" != e.status && !!this.isAdchoiceItemTypes(t, i))
    },r.prototype.isAdchoiceItemTypes = function (e, t) {
        for (var i in e) if (t[i]) return !0;
        return !1
    },r.prototype.getAdchoiceConfig = function () {
        var e = this.trc.getProperty(this.mode_name, "adchoice-position", this.propertiesOverride);
        return {
            status: this.trc.global["has-adchoice"] && "none" !== e ? "on" : "off",
            position: e,
            url: this.trc.getProperty(this.mode_name, "adchoice-target-url", this.propertiesOverride) || this.trc.global["adchoice-url"],
            enableBig: this.trc.getProperty(this.mode_name, "adchoice-large", this.propertiesOverride)
        }
    },r.prototype.getAdchoicesPosition = function (e, t) {
        var i = "top";
        return "auto" === e ? (i = "none" === t ? i : t, this.isContainerNarrowForAttribution() && (i = "bottom")) : i = e, i
    },r.prototype.renderAdchoicesLink = function (e, t, i) {
        if (this.hasAdChoicesLogo = this.isAdchoicesEnabled(e, t, i), this.hasAdChoicesLogo) {
            var o = '<span class="trc_adc_wrapper"><span class="trc_adc_s_logo"></span>' + (e.enableBig ? '<span class="trc_adc_b_logo"></span>' : "") + "&nbsp;</span>",
                n = this.getAdchoicesPosition(e.position, this.trc.getProperty(this.mode_name, "attribution-position", this.propertiesOverride)),
                a, s = e.url || null, l = this.trc["attribution-disclosure-direction"];
            a = "top" === n ? this.generateLinksBox(this.header.ext, o, l, "adc", null, "top", s) : this.generateLinksBox(this.getWidgetFooter(), o, l, "adc", null, n, s), e.enableBig && (a.onmouseover = function () {
                r.prototype.adcHoverHandler(this, !0)
            }, a.onmouseout = function () {
                r.prototype.adcHoverHandler(this, !1)
            })
        }
    },r.prototype.generateLinksBox = function (e, t, i, r, o, n, a, s) {
        var l, c = document.createElement("div"), d = ["trc_desktop_" + r + "_link", "trc_mobile_" + r + "_link"], h,
            p = this.getPopupUrl(), u = TRC.PROTOCOL + "//" + p + "/?" + this.getAttributionLinkParams(), m = a || u,
            g = function (e) {
                return TRC.aboutUs.open(e) || !1
            };
        if (e) {
            for (l = 0; l < d.length; l++) (h = document.createElement("a")).className = d[l] + " trc_attribution_position_" + (n || "bottom"), h.rel = "nofollow", h.innerHTML = t, h.href = m, h.target = "_blank", this.hasAdChoicesLogo && (h.innerHTML += '<span class="trc_logos_v_align">&nbsp;</span>'), l || (h.onclick = g), c.appendChild(h);
            return "rtl" === i && (c.style.cssFloat = c.style.styleFloat = "left"), c.className = "logoDiv link-" + r + " " + (o ? " attribution-disclosure-link-" + o : "") + (s ? " align-" + r + "-" + s : ""), e.appendChild(c), c
        }
    },r.prototype.getAttributionLinkParams = function () {
        var e = ["template=colorbox", "utm_source=" + this.publisher, "utm_medium=referral", "utm_content=" + this.mode_name + ":" + this.placement + ":" + (this.trc["test-variant"] || "")];
        return !this.trc.global["show-rtb-ad-choices-icon"] && this.privacyId && e.push("plink=" + this.privacyId), e.join("&")
    },r.prototype.addWidgetContentType = function () {
        var e = this.getWidgetContentType(this.itemsTypes);
        this.element.className += " " + ("sponsored" === e && TRC.blocker.blockedState > 0 && this.trc.global["switch-abp-class"] ? this.trc.global["switch-abp-class"]["trc-content-sponsored"] : "trc-content-" + e) + " "
    },r.prototype.getWidgetContentType = function (e) {
        var t = e["is-syndicated"] || e["is-in-network"] || e["is-native"];
        return t && e["is-organic"] ? "hybrid" : t ? "sponsored" : "organic"
    },r.prototype.getItemsTypesList = function (e) {
        for (var t = {}, i = 0, r; r = e[i]; i++) r["is-syndicated"] ? t["is-syndicated"] = !0 : r["is-in-network"] ? t["is-in-network"] = !0 : r["is-native"] ? t["is-native"] = !0 : t["is-organic"] = !0, r["is-adc"] && (t["is-adc"] = !0);
        return t
    },r.prototype.getPrivacyId = function (e) {
        for (var t = 0, i; i = e[t]; t++) if (i["plink"]) return i["plink"];
        return null
    },r.prototype.getWidgetFooter = function () {
        var e = this.getWidgetToFeedHelper();
        return this.footer || (this.footer = document.createElement("div"), this.footer.className = "trc-widget-footer", e && !e.getFooter() ? e.addFooterToFeed(this.footer) : this.element.appendChild(this.footer)), this.footer
    },r.prototype.renderDisclosureLink = function () {
        var e = this.trc.getProperty(this.mode_name, "min-width-for-disclosure", this.propertiesOverride),
            t = this.trc.getProperty(this.mode_name, "hide-disclosure-when-no-place", this.propertiesOverride),
            i = "<span>" + this.trc.getProperty(this.mode_name, "disclosure-link-text-sponsored", this.propertiesOverride) + "</span>",
            r = "<span>" + this.trc.getProperty(this.mode_name, "disclosure-link-text-hybrid", this.propertiesOverride) + "</span>",
            o, n = this.trc["attribution-disclosure-direction"];
        "none" !== this.getDisclosurePosition() && "after_branding" !== this.getDisclosurePosition() && (o = this.isFeedCard && TRC.isOptim("disclosure") ? 0 : this.container.clientWidth || this.container.offsetWidth, "bottom" !== this.getDisclosurePosition() && this.isHeaderExtContainerAvailable() && (!o || o >= e) ? (this.generateLinksBox(this.header.ext, i, n, "disclosure", "sponsored", "top"), this.generateLinksBox(this.header.ext, r, n, "disclosure", "hybrid", "top")) : t || (this.generateLinksBox(this.getWidgetFooter(), i, n, "disclosure", "sponsored", "bottom"), this.generateLinksBox(this.getWidgetFooter(), r, n, "disclosure", "hybrid", "bottom")))
    },r.prototype.renderDisclosureLinkWithBranding = function (e, t) {
        var i = "<span>" + t + "</span>", r = "right" === this.getDisclosureAlignment() ? this.trc.direction : null;
        this.generateLinksBox(e, i, r, "disclosure", "sponsored", this.getDisclosurePosition(), null, this.getDisclosureAlignment())
    },r.prototype.isHeaderExtContainerAvailable = function () {
        return this.header.ext && "No Header" != this.trc.getProperty(this.mode_name, "header", this.propertiesOverride)
    },r.prototype.addClearingDiv = function () {
        this.element.appendChild(document.createElement("div")).className = "trc_clearer"
    },r.prototype.genDuration = function (e) {
        var t = this.formatDuration(e), i = document.createElement("dt");
        i.style.position = "absolute", i.style.overflow = "hidden", i.style.height = "auto", i.style.width = "auto", i.style.zIndex = 48, i.style.right = 0;
        var r = document.createElement("div");
        return r.style.zIndex = 50, r.style.paddingLeft = "4px", r.style.paddingRight = "4px", r.innerHTML = t, i.appendChild(r), i
    },r.prototype.fixBoxTitleAndDesc = function (e, t, i) {
        if (i) try {
            var r = this.trc.getProperty(this.mode_name, "details-inline-with-title", this.propertiesOverride),
                o = r ? r.split(",") : [], n = this.findElement(function (e) {
                    return e.className.search("title") >= 0
                }, t, "span", null);
            o && o.length && n && "inline" == document.trcGetCurrentStyle(n, "display") && (n.style.display = "inline-block"), n.inlineDetailsElements = this.setupInlineDetails(o, t), this.fixBoxOverflow(n, e["title"], !1, "false" != e["truncate-title"], o, t), e.thumbUnder && (e.link.style.fontSize = t.font + "px"), o && o.length && (n.style.display = "inline"), this.fixBoxOverflow(this.findElement(function (e) {
                return e.className.search("description") >= 0
            }, t, "span", null), e.description, !0, !0, null, null)
        } catch (e) {
            __trcError("Problem in fixBoxTitleAndDesc", e)
        } else this.postRenderQueue.pushBack("fixBoxTitleAndDesc", this.fixBoxTitleAndDesc.trcBind(this, e, t, !0))
    },r.prototype.fixBoxOverflow = function (e, t, i, r, o, n) {
        var a = !1;
        if (!(null == e || this.useNativeLineClamp && (a = this.setupBoxLineClamp(e)))) {
            if (this.shouldUseSmartEllipsis() && !a) return __trcDebug("Skipping fixBoxOverflow due to feature flag.");
            if (TRC.ellipsisPerf && console.timeStamp("Taboola old ellipsis"), !(e.clientHeight <= 0 || e.clientWidth <= 0)) {
                void 0 === r && (r = !0);
                var s = !1;
                e.parentNode.font = this.getFontSize(e);
                var l = e.innerHTML;
                e.innerHTML = "";
                var c = this.add_span(null, "H", e), d = Math.max(c.offsetHeight, c.clientHeight),
                    h = Math.max(0, e.scrollHeight - e.clientHeight);
                for (e.removeChild(c), e.innerHTML = l, this.addInlineElementsForMeasure(e.inlineDetailsElements, e, !0), e.inlineDetailsElementsHTML = e.innerHTML.replace(l, ""), t = t.replace(/^\s+|\s+$/g, ""); e.clientHeight + h + d / 2 < e.scrollHeight && t.length;) {
                    var p;
                    if (s = !0, r) t = this.truncateOverflowingText(e, t, i), e.innerHTML += e.inlineDetailsElementsHTML; else if (!this.decreaseOverflowingTextFontSize(e)) break
                }
                this.hideClonedElementsAfterMeasure(o, n), TRC.Browser.ie && !s && (e.style.height = "auto")
            }
        }
    },r.prototype.setupBoxLineClamp = function (e) {
        TRC.dom.removeClass(e, "trc_ellipsis");
        var t = parseInt(document.trcGetCurrentStyle(e, "line-height"), 10),
            i = parseInt(document.trcGetCurrentStyle(e, "height"), 10),
            r = t && i ? Math.round(i / t).toString() : null;
        return !(!r || e.isRTL || "rtl" == document.trcGetCurrentStyle(e, "direction")) && (TRC.dom.addClass(e, "trc_ellipsis"), TRC.css.utils.setStyleProperty(e, "-webkit-line-clamp", r, !1), e.parentNode.font = this.getFontSize(e), !0)
    },r.prototype.setupInlineDetails = function (e, t) {
        for (var i = this.findElements(e, t), r = !1, o = 0; e && o < e.length; o++) "branding" == e[o] && (r = !0);
        if (e.length && !r) {
            var n = this.findElement(function (e) {
                return e.className.search("branding") >= 0
            }, t, "span", null);
            n && (n.style.display = "block")
        }
        for (var a = 0; i && a < i.length; a++) {
            var s = i[a];
            s.style.display = "inline-block", s.style.verticalAlign = TRC.Browser["ieUpto"](7) ? "baseline" : "middle"
        }
        return i
    },r.prototype.truncateOverflowingText = function (e, t, i) {
        t = i && t.search(/\s/) >= 0 ? t.replace(/\s+\S+$/, "") : t.substr(0, t.length - 1);
        var r = e.getElementsByTagName("bde");
        return e.inlineDetailsElementsHTML && r.length && (e.innerHTML = e.innerHTML.replace(e.inlineDetailsElementsHTML, "")), e.getElementsByTagName("span").length > 0 && e.removeChild(e.getElementsByTagName("span")[0]), (r.length > 0 ? r[0] : e).innerHTML = t, this.add_span(null, "&hellip;", e), t
    },r.prototype.decreaseOverflowingTextFontSize = function (e) {
        var t = this.getFontSize(e);
        if (parseInt(t) <= 9) return !1;
        var i = "font-size: " + (t = parseInt(t) - 1) + "px!important; line-height: " + 1.25 * t + "px!important;";
        return "string" == typeof e.style.cssText ? e.style.cssText = i : e.setAttribute("style", i), !0
    },r.prototype.addInlineElementsForMeasure = function (e, t, i) {
        for (var r, o, n, a = 0; e && a < e.length; a++) r = e[a], !(o = this.findElement(function (e) {
            return e.className.search(r) >= 0 && e.parentNode === t
        }, t)) && r && ((n = document.createElement("span")).className = "trc_inline_detail_spacer", n.innerHTML = TRC.Browser["ieUpto"](8) ? "&nbsp;" : " ", t.appendChild(n), t.appendChild(i ? r.cloneNode(!0) : r))
    },r.prototype.hideClonedElementsAfterMeasure = function (e, t) {
        for (var i, r, o = 0; e && o < e.length; o++) i = e[o], (r = this.findElement(function (e) {
            return e.className.search(i) >= 0 && e.parentNode === t
        }, t, "span")) && (r.style.display = "none")
    },r.prototype.removeTagsEntities = function (e) {
        var t = new RegExp("<[^>]*>$");
        return t.test(e) || (t = new RegExp("&w+;$")).test(e) ? e.replace(t, "") : e
    },r.prototype.removeHtmlTags = function (e) {
        return e.replace(new RegExp("<[^>]+>", "g"), "")
    },r.prototype.formatData = function (e, t) {
        var i = this.trc.getProperty(this.mode_name, "format-" + e, this.propertiesOverride);
        return "function" == typeof(i = i || "%s") ? i.call(this, t) : ((e.search("duration") >= 0 || e.search("Duration") >= 0) && (t = this.formatDuration(t)), void 0 === t && (t = ""), i.replace(new RegExp("%\\w"), '<dt style="display:inline">' + t + "</dt>"))
    },r.prototype.formatDuration = function (e) {
        var t = parseInt(e / 3600);
        t >= 1 ? e %= 3600 : t = 0;
        var i = parseInt(e / 60), r = parseInt(e % 60);
        return "number" != typeof t || "number" != typeof i || "number" != typeof r || isNaN(t) || isNaN(i) || isNaN(r) || e < 1 ? "" : (t >= 1 ? t + ":" : "") + (i < 10 ? "0" : "") + i + ":" + (r < 10 ? "0" : "") + r
    },r.prototype.formatNumber = function (e) {
        return void 0 === e ? "" : this.trc.getFunction(this.mode_name, "format-number", this.propertiesOverride, e)
    },r.prototype.dateFormatISO = function (e) {
        var t = new Date(1e3 * parseInt(e)), i = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate();
        return o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), i + "-" + r + "-" + o
    },r.prototype.dateFormatAmerican = function (e) {
        var t = new Date(1e3 * parseInt(e)), i = t.getFullYear(), r, o;
        return t.getMonth() + 1 + "/" + t.getDate() + "/" + i
    },r.prototype.dateFormatEuropean = function (e) {
        var t = new Date(1e3 * parseInt(e)), i = t.getFullYear(), r = t.getMonth() + 1, o;
        return t.getDate() + "/" + r + "/" + i
    },r.prototype.dateFormatDays = function (e) {
        var t = new Date, i = " months ago", r = t.getFullYear(), o = t.getMonth(), n = new Date;
        void 0 === e && 0 == parseInt(e) || (n = new Date(1e3 * parseInt(e)));
        var a, s, l = 12 * r + o - (12 * n.getFullYear() + n.getMonth()), c, d;
        0 == l ? i = (l = t.getDate() - n.getDate()) <= 1 ? " day ago" : " days ago" : 1 == l && (i = " month ago");
        return l + i
    },r.prototype.ratingStars = function (e, t) {
        if (t > 5 && (t = Math.floor(t / 2)), void 0 === e) return "";
        for (var i = document.createElement("span"), r = 0; r < t; r++) {
            var o = document.createElement("img");
            o.style.width = "16px", o.style.height = "16px", o.style.display = "inline";
            var n = s + "//cdn.taboola.com/taboola/star-on.png", a = s + "//cdn.taboola.com/taboola/star-off.png";
            r < parseInt(e) ? o.src = n : o.src = a, i.appendChild(o)
        }
        return i
    },r.prototype.getFontSize = function (e) {
        for (var t = 0, i = !1, r = document.trcGetCurrentStyle(e, "font-size"), o = ["px", "pt", "em", "ch"]; !i && t < o.length;) {
            if (r.indexOf(o[t])) {
                switch (r = parseInt(r), o[t]) {
                    case"px":
                        break;
                    case"pt":
                        r /= .75;
                        break;
                    case"em":
                    case"ch":
                        r *= 10
                }
                i = !0
            }
            t++
        }
        return r
    },r.prototype.sendExploreEvent = function () {
        this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null), this.sendEvent("explore", {}, null, !0)
    },r.prototype.onMouseOverExploreTrackerHandler = function (e, i) {
        var r = (i = i || t.event).target || i.srcElement;
        r != this.container && null != this.exploreTimeoutId || r == this.container && null != this.exploreTimeoutId || (this.exploreTimeoutId = TRC.Timeout.set(this.sendExploreEvent.trcBind(this), e))
    },r.prototype.setExploreTracker = function () {
        var e = 0;
        this.exploreTimeoutId = null, void 0 !== this.trc.global && (e = this.trc.global["explore-delay"] ? this.trc.global["explore-delay"] : e), this.container.onmouseover = this.onMouseOverExploreTrackerHandler.trcBind(this, e), 0 != e && (this.container.onmouseout = this.onMouseOutExploreTrackerHandler.trcBind(this))
    },r.prototype.onMouseOutExploreTrackerHandler = function (e) {
        e = e || t.event;
        var i = this.container.getBoundingClientRect();
        e.clientX >= i.left && e.clientX < i.right && e.clientY >= i.top && e.clientY < i.bottom || this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null)
    },r.prototype.resetBoxes = function () {
        this.boxes = []
    },r.prototype.setResponsiveRules = function (e, t) {
        var i = this.trc.getProperty(this.mode_name, "responsive-rules", this.propertiesOverride);
        i ? this.setOnStandardResponsiveRules(e, t, i) : this.setOnAutoSizeResponsiveRules(e, t, this.trc.getProperty(this.mode_name, "auto-size-rules", this.propertiesOverride))
    },r.prototype.setOnStandardResponsiveRules = function (e, t, i) {
        var r = this.trc.getProperty(this.mode_name, "rows", this.propertiesOverride), o = 1, n,
            a = this.trc.getProperty(this.mode_name, "carousel-min-items", this.propertiesOverride) || 1.33;
        try {
            n = this.responsiveRules = [];
            for (var s = 0, l = i.length; s < l; s++) n[s] = {
                rows: i[s].rows || r || o,
                cells: i[s].cells,
                min: i[s].minWidth,
                max: i[s].maxWidth,
                margin: i[s].margin.h,
                ratio: this.getRuleAspectRatio(i[s]) || this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || 100 * this.DEFAULT_THUMB_RATIO
            }, this.isClassFilter && this.pushResponsiveIERules(e + "_rule" + s, n[s].min);
            TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, this.isWCTextLinks, this.trc.direction, this.isCarousel, a)), this.isClassFilter && this.setResponsiveIEClassShift(e)
        } catch (e) {
            __trcError("Error in setOnStandardResponsiveRules : ", e.message)
        }
    },r.prototype.setOnAutoSizeResponsiveRules = function (e, t, i) {
        var r = TRC.dom.getWindowWidth(),
            o = this.container.clientWidth > 0 ? this.container.clientWidth : this.container.offsetWidth, n = r / o,
            a = this.trc.getProperty(this.mode_name, "rows", this.propertiesOverride), s = 1, l,
            c = this.trc.getProperty(this.mode_name, "carousel-min-items", this.propertiesOverride);
        try {
            l = this.responsiveRules = [];
            for (var d = 0, h = i.length; d < h; d++) l[d] = {
                rows: i[d].rows || a || s,
                cells: i[d].n,
                min: n * i[d]["minWc"],
                margin: Math.round((i[d]["maxWsRange"] + i[d]["minWsRange"]) / 2) / o * 100,
                ratio: this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || i[d].ratio || 100 * this.DEFAULT_THUMB_RATIO
            }, this.isClassFilter && this.pushResponsiveIERules(e + "_rule" + d, l[d].min);
            TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, !1, this.trc.direction), this.isCarousel, c), this.isClassFilter && this.setResponsiveIEClassShift(e)
        } catch (e) {
            __trcError("Error in setOnAutoSizeResponsiveRules : ", e.message)
        }
    },r.prototype.setResponsiveIEClassShift = function (e) {
        var i = this.getResponsiveIEClassShift(e).trcBind(this);
        i(), TRC.dom.on(t, "resize", i.trcThrottle(50))
    },r.prototype.getResponsiveIEClassShift = function (e) {
        var t = e, i = "IE_ClassShift", r = TRC.dom.getWindowWidth, o = r();
        return function () {
            var e = "", n, a, s = -1, l = r();
            for (n in this.responsiveIERules) this.responsiveIERules.hasOwnProperty(n) && (a = parseInt(n)) > s && l >= a && (e = this.responsiveIERules[n], s = a);
            t !== e && (this.container.className = this.container.className.replace(t, e), t = e), Math.abs(o - l) > 1 && (TRC.dispatch(i), o = l)
        }
    },r.prototype.pushResponsiveIERules = function (e, t) {
        TRC.util.isType(this.responsiveIERules, "Array") || (this.responsiveIERules = {}, this.pushResponsiveIERules = function (e, t) {
            this.responsiveIERules[t] = e
        }, this.pushResponsiveIERules(e, t))
    },r.prototype.setMetaAttribute = function (e) {
        e.meta = {}, __trcCopyProps(this.trc, e.meta), delete e.meta["video-list"]
    },r.prototype.drawResponsiveList = function (e) {
        TRC.tlf && console.timeStamp("start mode - " + this.mode_name), TRC.tlf && console.group("mode - " + this.mode_name), TRC.tlf && console.time("mode rendering");
        var r = this.listContainer, o = document.createElement("div"), n = this.recommendationList.length, a = 0,
            s = 1e3, l = i.trcGetParentByClassName(this.getContainer(), "trc_related_container"), c = "trc_elastic";
        TRC.pConsole(this.mode_name, "debug", "start drawing responsive mode - see info", this.trc.getProperty(this.mode_name, "responsive-rules", this.propertiesOverride), "object"), this.internalContainer = o, this.isClassFilter = TRC.Browser["ieUpto"](8), this.orientation = this.trc.getProperty(this.mode_name, "orientation", this.propertiesOverride), TRC.dom.addClass(l, c + " " + c + "_" + this.id), this.resetBoxes(), o.id = "internal_" + this.id, TRC.dom.clearInnerElements(r), r.appendChild(o), this.setExploreTracker(), this.setMetaAttribute(o), this.firstVideo = null, this.setResponsiveRules(c + "_" + this.id, n), this.pasreRecommendationList(n, this.hasDuration(), o), this.trc.global["smart-ellipsis"] || (this.isClassFilter ? TRC.listen("IE_ClassShift", this.fixResponsiveVideoBoxes.trcBind(this)) : (TRC.dom.on(t, "resize", this.fixResponsiveVideoBoxes.trcBind(this).trcThrottle(500)), TRC.listen("videoCubeChange", this.fixResponsiveVideoBoxes.trcBind(this)))), TRC.dom.addClass(this.boxes[0], "trc-first-recommendation trc-spotlight-first-recommendation"), "embed" === this.link_target && this.postRenderQueue.pushBack("createEmbedThumb", this.createEmbedThumb.trcBind(this)), this.postRenderQueue.pushBack("list-suffix,publisher-end", function (e) {
            this.trc.getFunction(this.mode_name, "list-suffix", this.propertiesOverride, e, this), this.trc["publisher-end"](this.id)
        }.trcBind(this, o)), this.postRenderQueue.pushBack("checkForBlocking", this.checkForBlocking.trcBind(this)), this.postRender(), this.trc.global["thumb-lazy-load-switch"] && this.setLazyImageLoadMethod(), this.visibleTimeoutId = null, void 0 !== this.trc.global && (a = this.trc.global["visible-delay"] ? this.trc.global["visible-delay"] : a, s = this.trc.global["visible-cycle"] ? this.trc.global["visible-cycle"] : s), this.setVisibility(this.manualVisibility, this.trc.global["enable-deferred-visible"], this.trc.global["visible-defer-timeout"], a, s, o), TRC.eventDelegator.dispatch("onrender", {
            name: this.mode_name,
            container: this.container,
            placement: this.orig_placement
        }), TRC.EventsAPI.dispatchRender(e, this), TRC.tlf && console.timeEnd("mode rendering"), TRC.tlf && console.groupEnd()
    },r.prototype.setVisibility = function (e, t, i, r, o, n) {
        this.trc.unifiedVisibility ? this.registerVisibility(r, o) : e ? TRC.listen("visible::" + this.orig_placement, this.getEventVisibility.trcBind(this, n)) : t ? TRC.Timeout.set(this.enableVisibility.trcBind(this, r, o, n), i || "0") : this.enableVisibility(r, o, n)
    },r.prototype.getRecomDirectURL = function (e) {
        if (0 == e.search(/\w{3,4}:\/\/(\w+)\.taboola(syndication)?.com/)) for (var t = e.split(/[\?&]/), i = 0, r = t.length; i < r; i++) if ("url" == t[i].split("=")[0]) return decodeURIComponent(t[i].split("=")[1]);
        return e
    },r.prototype.getURLHashParts = function (e) {
        return e[0] + (e[0].search("\\?") >= 0 ? "&" : "?") + this.tracking + (e[1] ? "#" + e[1] : "")
    },r.prototype.createVideoBoxDirectURL = function (e) {
        var t = e.video_data, i = t.url, r;
        try {
            i = this.getRecomDirectURL(i), t.isSyndicated || (t.original_url = i, (i = this.trc.getFunction(this.mode_name, "change-url", this.propertiesOverride, i, e, this.tracking)) == t.original_url && this.tracking && (r = i.split("#"), i = this.getURLHashParts(r)), "function" == typeof TRC.pageManager && (i = TRC.pageManager.fixRecommendationURL(i))), t.url = i, e.directURL = i
        } catch (e) {
            __trcError("Error in createVideoBoxDirectURL", e)
        }
    },r.prototype.createVideoBoxClickUrlParams = function (e, t) {
        var i = this.response && this.response.trc ? this.response.trc["session-data"] : null, r = {
            pi: this.trc.getItemId(),
            ri: this.response.trc["req"],
            sd: this.trc.getSessionData(i),
            ui: TRC.pageManager.getValue("user-id"),
            it: e.type,
            ii: e["item-id"],
            pt: this.getItemType(),
            li: this.listContainer.id,
            sig: e.sig,
            url: t,
            vi: this.cachedViewId || TRC.pageManager.getPageData(),
            p: e.isSyndicated ? e.publisher : "",
            r: Math.floor(100 * Math.random())
        }, o = this.formatedTRCRequest && this.formatedTRCRequest.tmpl, n = this.response.trc["placement-group"];
        return o && (r.tmpl = o), n && (r.pg = n), r
    },r.prototype.createVideoBoxClickUrlWithParams = function (e) {
        var t = [];
        for (var i in e) e.hasOwnProperty(i) && e[i] && (this.trc["normalize-log-param"](i, e[i]), t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i])));
        return s + "//" + this.domain + "/" + encodeURIComponent(this.trc["normalize-log-param"]("publisher", TRC.publisherId)) + "/log/3/click?" + t.join("&")
    },r.prototype.createVideoBoxClickUrl = function (e, t) {
        var i = this.createVideoBoxClickUrlParams(e, t);
        return this.createVideoBoxClickUrlWithParams(i)
    },r.prototype.fixResponsiveBoxTitleAndDesc = function (e) {
        var t = e.labelsBox, i = e.video_data, r = e.link, o = this.getDetailSpansFromLabelsBoxes("title", e),
            n = this.getDetailSpansFromLabelsBoxes("description", e), a = this.findElement(function (e) {
                return e.className.search("label-box-overlay") >= 0
            }, t, "span", null), s = function () {
                i.thumbUnder && t.font && (r.style.fontSize = t.font + "px")
            };
        try {
            if (!this.trc.global["smart-ellipsis"]) for (var l = 0; l < o.length; l++) o[l].innerHTML = e.getAttribute("data-item-title");
            setTimeout(function () {
                for (var t = 0; t < o.length; t++) this.fixBoxOverflow(o[t], e.getAttribute("data-item-title"), !1, "false" != i["truncate-title"]);
                TRC.Browser["ieUpto"](8) && a && (a.style.height = "99%", a.style.height = "100%"), s()
            }.trcBind(this), 0), n.length && setTimeout(function () {
                for (var e = 0; e < n.length; e++) this.fixBoxOverflow(n[e], i["description"], !0, !0)
            }.trcBind(this), 0)
        } catch (e) {
            __trcError("Problem in fixResponsiveBoxTitleAndDesc", e)
        }
    },r.prototype.getDetailSpansFromLabelsBoxes = function (e, t) {
        var i = t.querySelectorAll('.video-label-box [class*="' + e + '"]');
        return [].slice.call(i)
    },r.prototype.createVideoBoxLabels = function (e) {
        var t = document.createElement("span");
        return this.setVideoBoxLabelsClass(t), e.appendChild(t), t
    },r.prototype.setVideoBoxLabelsClass = function (e) {
        e.className = "video-label-box"
    },r.prototype.createThumbBlockHolder = function (e, t, r) {
        var o = i.createElement("div");
        o.className = "thumbBlock_holder", t.appendChild(o), this.createVideoBoxThumbBlock(e, o, r), this.createVideoBoxAspect(o, e)
    },r.prototype.createVideoBoxAspect = function (e, t) {
        var i = document.createElement("div");
        i.className = "videoCube_aspect", e.appendChild(i), t.thumbnail_aspect = i
    },r.prototype.drawVideoBoxThumbnailLink = function (e, t, i, r) {
        var o;
        return e.img_src = this.getThumbnailURL(i, this.trc.getProperty(this.mode_name, "thumbnail-width", this.propertiesOverride), this.trc.getProperty(this.mode_name, "thumbnail-height", this.propertiesOverride)), o = this.createVideoLink(i, r), TRC.dom.addClass(o, "item-thumbnail-href"), this.createThumbBlockHolder(e, o, t), o
    },r.prototype.createVideoBoxThumbBlock = function (e, t, i) {
        var r = document.createElement("span"), o = "", n = e.video_data;
        i || "video" != n.type || void 0 === n.duration || "" == n.duration || "0" == n.duration || (o = this.genDuration(n.duration)), r.className = "thumbBlock", n.imageIframe && (this.drawImageIframe(r, n.imageIframe, e.link.logger_url), e.hasFloatingButton = !0), e.thumbBlock = r, "" != o && this.createDurationBlock(r, o, n.duration), t.appendChild(r)
    },r.prototype.setVideoBoxImageHandlers = function (e, t, i) {
        e.onerror = this.responsiveImageOnErrorHandler.trcBind(this, e, t, i, s), e.onload = this.responsiveImageOnLoadHandler.trcBind(this, e, t, i)
    },r.prototype.responsiveImageOnErrorHandler = function (e, t, i, r) {
        var o = e.src, n = o.search(/\Shttp\S/), a = i["item-id"];
        if (n > 5 && this.isTaboolaCDNImage(o) && !TRC.Browser.ie) return o = this.getFallbackImageForTaboolaCDNImage(o, a, r), void(t.img_src = e.src = o);
        o = this.getFallbackImageForNonTaboolaCDNImage(e, a, r), TRC.Browser["ieUpto"](8) ? (e.src = o, null == e.onerror && TRC.Timeout.set(this.fixResponsiveVideoImage.trcBind(this, t, e, !0), 500)) : t.thumbBlock.style.backgroundImage = "URL('" + o + "')"
    },r.prototype.responsiveImageOnLoadHandler = function (e, t, i) {
        e && e.complete ? this.appendVideoBoxImage(t) : TRC.Browser["ieUpto"](8) ? (this.appendVideoBoxImage(t), this.fixResponsiveVideoImage(t, e, !1), TRC.listen("IE_ClassShift", this.fixResponsiveVideoImage.trcBind(this, t, e).trcBind(this))) : TRC.Timeout.set(arguments.callee.trcBind(this, t.thumbBlock, e), 50)
    },r.prototype.fixResponsiveVideoImage = function (e, t, i) {
        var r;
        if (this.imageOptimizePrefixFlag) return t.style.visibility = "visible", t.style.width = "100%", void(t.style.height = "100%");
        var o = 7 == TRC.Browser.ie ? e.thumbBlock.getBoundingClientRect() : null, n = e.thumbBlock,
            a = o ? o.right - o.left : n.clientWidth, s = o ? o.bottom - o.top : n.clientHeight, l, c, d, h, p,
            u = this.isCssImportant, m = TRC.css.utils;
        if (0 != s && 0 != a && 0 != t.height) try {
            (l = a / s) > (c = this.getImageAspectRatio(t)) ? (d = Math.floor(a / c), h = Math.floor((s - d) / 2), m.setStyleProperty(t, "width", a + "px", u), 0 != h && (TRC.Browser["ieAtleast"](8) ? (t.style.position = "relative", m.setStyleProperty(t, "top", h + "px", u)) : m.setStyleProperty(t, "margin-top", h + "px", u))) : (r = Math.floor(s * c), p = Math.floor((a - r) / 2), m.setStyleProperty(t, "height", s + "px", u), 0 != p && (TRC.Browser["ieAtleast"](8) ? (t.style.position = "relative", "ltr" == this.trc.direction ? m.setStyleProperty(t, "left", p + "px", u) : m.setStyleProperty(t, "left", -1 * p + "px", u)) : "ltr" == this.trc.direction ? m.setStyleProperty(t, "margin-left", p + "px", u) : m.setStyleProperty(t, "margin-right", p + "px", u))), t.style.visibility = "visible"
        } catch (e) {
            alert(e.message), __trcError("Error in fixResponsiveVideoImage : ", e.message)
        } else i || TRC.Timeout.set(this.fixResponsiveVideoImage.trcBind(this, e, t, !0), 500)
    },r.prototype.getImageAspectRatio = function (e) {
        return e.trcRatio || (e.trcRatio = e.width / e.height), e.trcRatio
    },r.prototype.createVideoBoxImageLoader = function (e) {
        var t = TRC.Browser["ieUpto"](8) ? i.createElement("img") : new Image, r, o, n, a = e.video_data,
            s = e.thumbBlock;
        this.trc.global["thumb-lazy-load-switch"] && this.updateThumbnailStack(t), t.style.visibility = "hidden", 7 === TRC.Browser.ie && (e.image_div = document.createElement("div")), e.img = t, this.setVideoBoxImageHandlers(t, e, a), this.trc.global["use-delay-image-load"] ? TRC.Timeout.set(this.setImageLoad.trcBind(this, t, e, e.img_src, 100, s, this.trc.global["thumb-lazy-load-switch"]), 10) : this.setImageLoad(t, e, e.img_src, 100, s, this.trc.global["thumb-lazy-load-switch"]), TRC.Browser["ieUpto"](6) || (r = this.add_span("thumbnail-overlay", null, s)), null == (o = this.trc.getProperty(this.mode_name, "emblem", this.propertiesOverride)) || "null" == o || TRC.Browser.ie && !TRC.Browser["ieUpto"](7) || ((n = this.add_span("thumbnail-emblem", null, s)).style.backgroundImage = "url('" + o + "')"), a.isSyndicated && this.addVideoBoxBranding(s, a)
    },r.prototype.updateThumbnailStack = function (e) {
        this.thumbnailImageStack = this.thumbnailImageStack || [], this.thumbnailImageStack.push(e)
    },r.prototype.addVideoBoxBranding = function (e, t) {
        var i = document.createElement("span"), r = document.createElement("span"),
            o = this.trc.getProperty(this.mode_name, "syndicated-static-text", this.propertiesOverride),
            n = this.trc.getProperty(this.mode_name, "syndicated-static-text-position", this.propertiesOverride);
        i.className = "branding", t["branding-text"] ? i.appendChild(document.createTextNode(this.formatData("syndicator", t["branding-text"]))) : t["branding-url"] && this.createBrandingImage(i, t["branding-url"]), e.appendChild(i), r.className = "static-text " + n, o && r.appendChild(document.createTextNode(o)), e.appendChild(r)
    },r.prototype.createBrandingImage = function (e, t) {
        var r = i.createElement("img");
        r.src = t, e.appendChild(r)
    },r.prototype.createDurationBlock = function (e, t, i) {
        var r = document.createElement("div"), o = this.genDuration(i);
        r.className = "video-duration video-duration-detail", r.appendChild(t), o.style.opacity = 1, o.style.filter = "alpha(opacity=100)", o.style.backgroundColor = "transparent", r.appendChild(o), e.appendChild(r)
    },r.prototype.createVideoBoxLabelOverlay = function (e) {
        var t = document.createElement("span");
        t.className = "label-box-overlay", e.appendChild(t)
    },r.prototype.createVideoBoxThumbLink = function (e, t) {
        try {
            var i = e.video_data, r = e.thumbnail_position,
                o = this.drawVideoBoxThumbnailLink(e, t, i, e.getAttribute("data-item-title"));
            "under" === r ? (o.title = e.link.title = "", e.insertBefore(o, e.link), TRC.dom.addClass(e.link, "video-labels-anchor"), this.findElement(function (e) {
                return e.className.search("title") >= 0
            }, e.labelsBox, "span", null), 8 == TRC.Browser.ie && TRC.dom.addClass(e.link, "ie8fix"), this.createVideoBoxLabelOverlay(e.labelsBox), i.thumbUnder = !0) : "bottom" === r ? e.appendChild(o) : e.insertBefore(o, e.link)
        } catch (e) {
            __trcError("Error in createVideoBoxThumbLink", e)
        }
    },r.prototype.setVideoBoxDataAttr = function (e, t) {
        e.setAttribute("data-item-id", t["item-id"]), e.setAttribute("data-item-title", t.title), e.setAttribute("data-item-thumb", this.getThumbnailURL(t, 100, 80)), e.setAttribute("data-item-syndicated", !!t.isSyndicated)
    },r.prototype.getThumbnailPosition = function (e, t) {
        return t || this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride)
    },r.prototype.drawResponsiveVideoBox = function (e, t, i, r, o, n) {
        var a = document.createElement("div");
        try {
            return t = __trcCopyProps(t, {}, {
                isSyndicated: t["is-syndicated"] || t["is-in-network"] || t["is-native"],
                isPhoto: "photo" === t.type,
                isText: "text" === t.type,
                imageIframe: t.hasOwnProperty("image-iframe") && t["image-iframe"],
                tags: "string" == typeof t.tags ? TRC.text.parseCSV(t.tags) : []
            }), this.setApiItemsData(t), this.createResponsiveVideoBox(a, t, o, n), "none" !== a.thumbnail_position && this.createVideoBoxThumbLink(a, i), this.createResponsiveLabelsBoxes(a), TRC.Browser["ieUpto"](6) && this.setOmouseEffects_IE6(a), t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE] && t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0 && TRC.TrackingScriptLoader.renderScriptTagIntoVideoBox(a, t), this.trc.getFunction(this.mode_name, "item-renderer", this.propertiesOverride, a, a.video_data), e.appendChild(a), this.fixResponsiveBoxTitleAndDesc(a), this.boxes.push(a), this.shouldHandleScBrandingWithSponsoredLink() && this.handleBrandingWithDisclosureContainerWidth(), t.imageIframe || this.createVideoBoxImageLoader(a), a
        } catch (e) {
            __trcError("Error in drawResponsiveVideoBox", e)
        }
        return null
    },r.prototype.createResponsiveLabelsBoxes = function (e) {
        this.buildLabelBox(e.preLabelsBox, e.video_data, e.pre_detail_order), this.buildLabelBox(e.labelsBox, e.video_data, e.detail_order)
    },r.prototype.handleBrandingWithDisclosureContainerWidth = function () {
        var e = this.branding;
        if (e) {
            var t = e.querySelector(".branding-inner"), i = e.querySelector(".branding-separator"),
                r = e.querySelector(".logoDiv"), o = i && TRC.dom.getOuterWidth(i), n = TRC.dom.getOuterWidth(r);
            t.style.maxWidth = "calc(100% - " + (o + n) + "px)"
        }
    },r.prototype.createResponsiveVideoBox = function (e, t, i, r) {
        e.rbox = this, e.video_data = t, e.thumbnail_position = this.getThumbnailPosition(t, r || null), this.setVideoBoxDataAttr(e, t), this.setVideoBoxClassName(e), this.createVideoBoxDirectURL(e), t.logger_url = this.createVideoBoxClickUrl(e.video_data, e.directURL), e.setAttribute("data-item-title", t.title), this.setVideoBoxDetailsOrder(e, i || null), this.createDetailsLabelsContainers(e)
    },r.prototype.createDetailsLabelsContainers = function (e) {
        var t = 0;
        e.pre_detail_order.length > 0 && (this.createVideoBoxPreThumbnailLink(e), t++), e.detail_order.length > 0 && (this.createVideoBoxAfterThumbnailLink(e), t++), t > 1 && TRC.dom.addClass(e, "trc-split-label")
    },r.prototype.setVideoBoxClassName = function (e) {
        var t = 0, i = this.isResponsive,
            r = this.trc.getProperty(this.mode_name, "orientation", this.propertiesOverride),
            o = TRC.blocker.blockedState > 0 && this.trc.global["switch-abp-class"] ? this.trc.global["switch-abp-class"]["syndicatedItem"] : TRC.SYNDICATED_CLASS_NAME;
        this.setVideoBoxClassName = function (e) {
            var n = e.video_data;
            e.className = "videoCube " + "trc_spotlight_item " + "origin-" + n.origin + " thumbnail_" + e.thumbnail_position + (n.isSyndicated ? " " + o : "") + (n["is-in-network"] ? " inNetworkItem" : "") + (n["is-native"] ? " tabNativeItem" : "") + (n.isPhoto ? " photoItem" : "") + (n.isText ? " textItem" : "") + " " + (i ? "videoCube_" + (t += 1) + "_child" : r)
        }, this.setVideoBoxClassName(e)
    },r.prototype.setVideoBoxDetailsOrder = function (e, t) {
        var i = t || this.trc.getProperty(this.mode_name, "detail-order" + (e.video_data.isSyndicated ? "-syndicated" : ""), this.propertiesOverride),
            r = this.trc.getProperty(this.mode_name, "before-detail-order" + (e.video_data.isSyndicated ? "-syndicated" : ""), this.propertiesOverride);
        e.detail_order = i ? i.split(",") : [], e.pre_detail_order = r ? r.split(",") : []
    },r.prototype.setOmouseEffects_IE6 = function (e) {
        e.onmouseover = function () {
            TRC.dom.addClass(this, " videoCube_hover")
        }, e.onmouseout = function () {
            this.className = this.className.replace(/\b\s+videoCube_hover\b/g, "")
        }
    },r.prototype.createVideoBoxAfterThumbnailLink = function (e) {
        var t = e.video_data, i = e.getAttribute("data-item-title"), r = this.createVideoLink(t, i);
        e.labelsBox = this.createVideoBoxLabels(r), e.appendChild(r), e.link = r, TRC.dom.addClass(r, "item-label-href"), TRC.dom.addClass(e.labelsBox, "trc-main-label")
    },r.prototype.createVideoBoxPreThumbnailLink = function (e) {
        var t = e.video_data, i = e.getAttribute("data-item-title"), r = this.createVideoLink(t, i);
        e.preLabelsBox = this.createVideoBoxLabels(r), e.appendChild(r), e.preLink = r, TRC.dom.addClass(r, "item-label-href"), TRC.dom.addClass(e.preLabelsBox, "trc-pre-label"), TRC.dom.addClass(e, "item-has-pre-label")
    },r.prototype.appendVideoBoxImage = function (e) {
        try {
            (null != e.img_src || this.trc.global["thumb-lazy-load-switch"]) && (void 0 === e.image_div ? TRC.Browser["ieUpto"](8) ? (e.thumbBlock.appendChild(e.img), e.img.style.visibility = "visible") : e.thumbBlock.style.backgroundImage = "URL('" + e.img_src + "')" : (e.thumbBlock.appendChild(e.image_div), e.image_div.appendChild(e.img), e.img.style.visibility = "visible"))
        } catch (e) {
            __trcError("Pager thumbnail images fixing errors", e)
        }
    },r.prototype.pasreRecommendationList = function (e, t, i) {
        var r, o;
        this.stopBoxRendering = !1;
        for (var n = 0; n < e; n++) {
            TRC.tlf && 0 == n && console.time("item rendering"), (r = this.recommendationList[n]).itemIndex = n, null == this.firstVideo && "video" == r.type && (this.firstVideo = r);
            try {
                this.trc.getFunction(this.mode_name, "item-data-filter", this.propertiesOverride, r), this.fixHeight && !this.stopBoxRendering ? (o = this.drawResponsiveVideoBox(i, r, t, this.orientation), this.stopBoxRendering = this.hasMaxHeightExploitation(parseInt(document.trcGetCurrentStyle(this.container, "height"), 10), this.fixHeight), this.stopBoxRendering && this.safeRemoveItem(o)) : this.fixHeight || this.drawResponsiveVideoBox(i, r, t, this.orientation, null, null)
            } catch (e) {
                __trcError("Error in pasreRecommendationList", e)
            }
            TRC.tlf && 0 == n && console.timeEnd("item rendering")
        }
    },r.prototype.safeRemoveItem = function (e) {
        var t = e.parentNode;
        TRC.dom.clearInnerElements(e), t.removeChild(e)
    },r.prototype.hasMaxHeightExploitation = function (e, t) {
        return t <= e
    },r.prototype.fixResponsiveVideoBoxes = function () {
        for (var e = this.boxes, t = 0, i = e.length; t < i; t++) this.fixResponsiveBoxTitleAndDesc(e[t])
    },r.prototype.fixWCTextLinksVideoBoxes = function () {
        for (var e = this.boxes, t = 0, i = e.length; t < i; t++) e[t].labelsBox.firstChild.innerHTML = e[t].video_data["title"], e[t].fixTextOverflow(!0)
    },r.prototype.createSponsoredOverlay = function (e) {
        var t = i.createElement("span");
        t.className = "trc_sponsored_overlay", e.appendChild(t)
    },r.prototype.setSponsoredOverlayClass = function (e, t) {
        t.className = "thumbnail" == e ? "trc_sponsored_overlay_base" : "trc_sponsored_overlay_base round"
    },r.prototype.genrateResponsiveSponsoredLabel = function (e, t) {
        var i = this.trc.getProperty(this.mode_name, "sponsored-location", this.propertiesOverride);
        if (i.match(/^thumbnail/)) {
            var r = document.createElement("span");
            try {
                this.setSponsoredOverlayClass(i, r), this.createSponsoredOverlay(r), t.appendChild(r), e["spnoverlay"] = r
            } catch (e) {
                __trcError("Error while generating sponsored label", e)
            }
        }
    },r.prototype.generateResponsiveOuters = function (e) {
        if (null == this.listContainer) {
            this.header = this.generateHeader(e);
            var t = i.createElement("div");
            t.id = this.id.replace("trc_", "outer_"), t.className = "trc_rbox_outer", this.generateResponsiveRBoxDiv(t), e.appendChild(t), this.outerBox = t, !0 === this.trc.global["disclosure-enabled"] ? this.addTaboolaLogo() : this.addTaboolaLogoNoDisclosure(), e.style.display = "block"
        }
    },r.prototype.getEventVisibility = function (e, t) {
        (this.visible_items_collection(t) >= this.MIN_VISIBLE_ITMES || this.isVisible(this.container, t)) && this.sendVisibility(e, this.trc.global["enable-visibility-intersection-api"])
    },r.prototype.generateResponsiveRBoxDiv = function (e) {
        var t = i.createElement("div");
        t.id = this.getListId(), t.className = "trc_rbox_div trc_rbox_border_elm", e.appendChild(t), this.listContainer = t
    },r.prototype.isVisibleWidget = function (e) {
        return !!(this.visible_items_collection(null) >= e || this.isVisible(this.container, null))
    },r.prototype.sendVisibility = function (e, t) {
        var i, r = null, o = new this.PostData,
            n = this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride), a = [], s = [],
            l = [], c = [], d = [], h = [], p = [], u = [], m = [], g = [], f = [];
        for (i in this.visible_boxes) this.visible_boxes.hasOwnProperty(i) && (a.push(this.visible_boxes[i].id), l.push(this.visible_boxes[i].type));
        for (i in this.synd_visible_boxes) this.synd_visible_boxes.hasOwnProperty(i) && (s.push(this.synd_visible_boxes[i].id), c.push(this.synd_visible_boxes[i].type), p.push(this.synd_visible_boxes[i].publisher));
        for (i in this.network_visible_boxes) this.network_visible_boxes.hasOwnProperty(i) && (d.push(this.network_visible_boxes[i].id), h.push(this.network_visible_boxes[i].type), u.push(this.network_visible_boxes[i].publisher));
        for (i in this.native_visible_boxes) this.native_visible_boxes.hasOwnProperty(i) && (m.push(this.native_visible_boxes[i].id), g.push(this.native_visible_boxes[i].type), f.push(this.native_visible_boxes[i].publisher));
        if (a.length > 0 || s.length > 0 || d.length > 0 || m.length > 0) return TRC.pConsole(this.mode_name, "info", "sending visible event", ""), o.setFullItemlist(this.getJsonTargetItemsList(this.fullEventItemsHash)), this.trc.enablePageGeometry && this.trc.addGeometryPageData(o, this.trc.global["page-geometry-selectors"]), this.trc.enablePlacementGeometry && this.trc.addGeometryPlacementData(o, this.container), this.sendModeDebugData && (r = this.getModeDebugData("object")), TRC.EventsAPI.dispatchVisible(this.response.trc, this), this.sendEvent("visible", {
            il: a.join(","),
            sil: s.join(","),
            ilt: l.join(","),
            navil: m.join(","),
            silt: c.join(","),
            ntil: d.join(","),
            ntilt: h.join(","),
            navilt: g.join(","),
            niltp: u.join(","),
            siltp: p.join(","),
            naviltp: f.join(","),
            tp: n
        }, this.util.merge(o.getAll(), r), !0), t && !this.visibilityIntersectionApiFullRollout && this.sendEvent("new-visible", {
            il: a.join(","),
            sil: s.join(","),
            ilt: l.join(","),
            navil: m.join(","),
            silt: c.join(","),
            ntil: d.join(","),
            ntilt: h.join(","),
            navilt: g.join(","),
            niltp: u.join(","),
            siltp: p.join(","),
            naviltp: f.join(","),
            tp: n
        }, this.util.merge(o.getAll(), r), !0), !this.trc.global["disable-external-visibility-once"] && this.externalVisibleSent || (this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["vi"]), this.externalVisibleSent = !0), void this.trc.getFunction(this.mode_name, "after-visible", this.propertiesOverride, e, this)
    },r.prototype.sendNewVisibility = function () {
        var e, t = null, i = new this.PostData,
            r = this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride), o = [], n = [],
            a = [], s = [], l = [], c = [], d = [], h = [], p = [], u = [], m = [];
        if (!this.visibilityReported) {
            for (e in this.new_visible_boxes) this.new_visible_boxes.hasOwnProperty(e) && (o.push(this.new_visible_boxes[e].id), a.push(this.new_visible_boxes[e].type));
            for (e in this.synd_new_visible_boxes) this.synd_new_visible_boxes.hasOwnProperty(e) && (n.push(this.synd_new_visible_boxes[e].id), s.push(this.synd_new_visible_boxes[e].type), d.push(this.synd_new_visible_boxes[e].publisher));
            for (e in this.network_new_visible_boxes) this.network_new_visible_boxes.hasOwnProperty(e) && (l.push(this.network_new_visible_boxes[e].id), c.push(this.network_new_visible_boxes[e].type), h.push(this.network_new_visible_boxes[e].publisher));
            for (e in this.native_new_visible_boxes) this.native_new_visible_boxes.hasOwnProperty(e) && (p.push(this.native_new_visible_boxes[e].id), u.push(this.native_new_visible_boxes[e].type), m.push(this.native_new_visible_boxes[e].publisher));
            return o.length > 0 || n.length > 0 || l.length > 0 || p.length > 0 ? (TRC.pConsole(this.mode_name, "info", "sending new visible event", ""), i.setFullItemlist(this.getJsonTargetItemsList(this.fullEventItemsHash)), this.trc.enablePageGeometry && this.trc.addGeometryPageData(i, this.trc.global["page-geometry-selectors"]), this.trc.enablePlacementGeometry && this.trc.addGeometryPlacementData(i, this.container), this.sendModeDebugData && (t = this.getModeDebugData("object")), TRC.EventsAPI.dispatchVisible(this.response.trc, this), this.sendEvent(this.visibilityIntersectionApiEventName, {
                il: o.join(","),
                sil: n.join(","),
                ilt: a.join(","),
                navil: p.join(","),
                silt: s.join(","),
                ntil: l.join(","),
                ntilt: c.join(","),
                navilt: u.join(","),
                niltp: h.join(","),
                siltp: d.join(","),
                naviltp: m.join(","),
                tp: r
            }, this.util.merge(i.getAll(), t), !0), this.visibilityIntersectionApiFullRollout && (!this.trc.global["disable-external-visibility-once"] && this.externalVisibleSent || (this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["vi"]), this.externalVisibleSent = !0), this.trc.getFunction(this.mode_name, "after-visible", this.propertiesOverride, this.internalContainer, this)), void(this.visibilityReported = !0)) : void 0
        }
    },r.prototype.newVisibleItemsCollection = function (e, t) {
        var i, r = 0, o, n, a = t || this.boxes;
        for (i = 0; i < a.length; i++) o = a[i].video_data || a[i], n = this.fullEventItemsHash[o["item-id"]], e || this.boxes[i].isVisible ? (o["is-syndicated"] ? this.pushNewVisibleItem(this.synd_new_visible_boxes, o, "is-syndicated") : o["is-in-network"] ? this.pushNewVisibleItem(this.network_new_visible_boxes, o, "is-in-network") : o["is-native"] ? this.pushNewVisibleItem(this.native_new_visible_boxes, o, "is-native") : this.pushNewVisibleItem(this.new_visible_boxes, o, "is-organic"), n.tids = "vp", r++) : "vp" != n.tids && (n.tids = "nvp");
        return r
    },r.prototype.pushNewVisibleItem = function (e, t, i) {
        e[t["item-id"]] = {id: t["item-id"], type: t["type"], publisher: t["publisher"]}
    },r.prototype.isNewVisibleWidget = function () {
        return this.newVisibleItemsCollection() >= this.MIN_VISIBLE_ITMES || this.container.isVisible
    },r.prototype.enableVisibility = function (e, t, i) {
        var r = this.sendNewVisibility.trcBind(this), o = this.isNewVisibleWidget.trcBind(this), n, a;
        if (TRC.tlf && console.time("vsibility - " + this.mode_name), this.resetVisibilityData(), (this.trc.global["enable-visibility-intersection-api"] || this.visibilityIntersectionApiFullRollout) && !this.isObsereved) {
            n = {
                targetElement: this.container,
                enableDelayedVisibilityCheck: !0,
                visibleWidgetPredicate: o,
                onTrigger: r
            }, TRC.intersections.isInViewPort(n);
            for (var s = 0; s < this.boxes.length; s++) a = {
                targetElement: this.boxes[s],
                enableDelayedVisibilityCheck: !0,
                visibleWidgetPredicate: o,
                onTrigger: r
            }, TRC.intersections.isInViewPort(a);
            this.isObsereved = !0
        }
        if (!this.visibilityIntersectionApiFullRollout) if (this.isVisibleWidget(this.MIN_VISIBLE_ITMES)) {
            var l = arguments.callee;
            this.visibleTimeoutId = TRC.Timeout.set(function () {
                this.visibleTimeoutId && (TRC.Timeout.clear(this.visibleTimeoutId), this.visibleTimeoutId = null), this.isVisibleWidget(this.MIN_VISIBLE_ITMES) ? this.sendVisibility(i) : TRC.Timeout.set(l.trcBind(this, e, t, i), t)
            }.trcBind(this), e)
        } else TRC.Timeout.set(arguments.callee.trcBind(this, e, t, i), t);
        TRC.tlf && console.timeEnd("vsibility - " + this.mode_name)
    },r.prototype.registerVisibility = function (e, t) {
        this.trc.visibilityScheduler || (this.trc.visibilityScheduler = new TRC.VisibilityScheduler(t, e)), this.trc.visibilityScheduler.register(this)
    },r.prototype.getAllExternalTrackingURLsList = function () {
        var e = this.recommendationList, t;
        try {
            if (!this.externalTrackingURLsList) {
                this.externalTrackingURLsList = {};
                for (var i = 0; e && i < e.length; i++) for (var r in t = this.getItemExternalTrackingURLsList(e[i])) t.hasOwnProperty(r) && (this.externalTrackingURLsList[r] || (this.externalTrackingURLsList[r] = []), this.externalTrackingURLsList[r] = this.externalTrackingURLsList[r].concat(t[r]))
            }
            return this.externalTrackingURLsList
        } catch (e) {
            return __trcError("Error in TRCRBox.getAllExternalTrackingURLsList"), {}
        }
    },r.prototype.getItemExternalTrackingURLsList = function (e) {
        var t = e["item-id"], i = e["itp"], r, o, n, a = {};
        if (!t) return __trcDebug("Item does not have id. External tracking pixel will not be sent if defined"), [];
        try {
            if (this.externalTrackingURLsListByItemId || (this.externalTrackingURLsListByItemId = {}), !this.externalTrackingURLsListByItemId[t]) {
                for (var s = 0; i && s < i.length; s++) o = (r = i[s])["t"], n = r["u"], o && n && (a[o] || (a[o] = []), a[o].push(n));
                this.externalTrackingURLsListByItemId[t] = a
            }
            return this.externalTrackingURLsListByItemId[t]
        } catch (e) {
            return __trcError("Error in TRCRBox.getItemExternalTrackingURLsList"), []
        }
    },r.prototype.shouldUseSmartEllipsis = function () {
        return this.trc.global["smart-ellipsis"] && ("enableAndOverrideModeFlag" === this.trc.global["smart-ellipsis"] || this.trc.getProperty(this.mode_name, "smart-ellipsis"))
    },r.prototype.getEffectiveResponsiveRule = function () {
        if ("function" != typeof t["matchMedia"] || !this.isResponsive || !this.responsiveRules) return null;
        for (var e = 0; e < this.responsiveRules.length; e++) if (t["matchMedia"]("screen and (min-width: " + this.responsiveRules[e].min + "px)" + (isNaN(this.responsiveRules[e].max) ? "" : " and (max-width: " + this.responsiveRules[e].max + "px)")).matches) return this.responsiveRules[e];
        return null
    },r.prototype.drawImageIframe = function (e, t, i) {
        t = t || "", i = i && i.replace(/&redir=[^&]*/, "") + "&redir=", e.innerHTML = t.replace("${CLICK_URL_ESC}", encodeURIComponent(i))
    },r.prototype.getWidgetToFeedHelper = function () {
        return this.parentFeed && this.parentFeed.widgetToFeedHelper
    },r.prototype.getPublisherBrandingName = function () {
        if (!this.publisherBrandingText) {
            var e = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-branding") || "";
            this.publisherBrandingText = TRC.text.encodeHTML(e) || this.trc.getSiteNameOgValue() || ""
        }
        return this.publisherBrandingText
    }
}(window, document), function (e, t) {
    var i = TRC.URL = function (e) {
        var t = TRC.text.lsplit;
        if (!e) throw new Error("Invalid URL!");
        this.href = e;
        var i = t(e, "#", 2);
        return this.hash = i.length > 1 ? "#" + i.pop() : "", i = t(e = i[0], "?", 2), this.search = i.length > 1 ? "?" + i.pop() : "", i = t(e = i[0], "://", 2), this.protocol = i.length > 1 ? i.shift() + ":" : "", i = t(e = i[0], "/", 2), this.pathname = i.length > 1 ? "/" + i.pop() : "/", i = t(e = i[0], "@", 2), this.auth = i.length > 1 ? i.shift() : "", i = t(e = i[0], ":", 2), this.port = i.length > 1 ? parseInt(i.pop()) : 0, this.host = i[0], this
    }, r = {"http:": 1, "https:": 1};
    i.prototype.toString = function (e) {
        return (this.host ? this.protocol + "//" + (this.auth ? this.auth + "@" : "") + this.host + (this.port ? ":" + this.port : "") : "") + this.pathname + this.search + (e ? "" : this.hash || "")
    }, i.prototype.switchProtocol = function (e, t) {
        var i = this instanceof TRC.URL ? this : new TRC.URL(this), o;
        return r[e] && (t && "https:" == i.protocol || (i.protocol = e)), (o = i.toString(!1)).length > 1 ? o : ""
    }, i.prototype.getParameter = function (e) {
        var t = this instanceof TRC.URL ? this : new TRC.URL(this);
        params = t.search.substr(1).split(/&/);
        for (var i = 0; i < params.length; i++) {
            var r = params[i].split(new RegExp("="), 2);
            if (unescape(r[0]) == e) return unescape(r[1])
        }
        return null
    }
}(window, document), function (e, t, i) {
    "use strict";
    var r = {
        en: {adChoiceBtn: {title: "Why do I see this item?"}},
        de: {adChoiceBtn: {title: "Warum sehe ich diesen Artikel?"}},
        fr: {adChoiceBtn: {title: "Pourquoi dois-je voir cet article?"}},
        it: {adChoiceBtn: {title: "Perché vedo questa voce?"}},
        jp: {adChoiceBtn: {title: "なぜ私はこのアイテムを見ていますか？"}},
        pt: {adChoiceBtn: {title: "Por que eu vejo este item?"}}
    }, o, n = function (e) {
        o = r[e || "en"] || r["en"], i.userAdChoice.isInitialized = !0
    }, a = function (e) {
        for (var t = 0; t < e.boxes.length; t++) s(e.boxes[t], e.recommendationList[t])
    }, s = function (e, r) {
        if (!e["hasFloatingButton"] && r["plink"]) {
            e.hasFloatingButton = !0;
            var n = t.trcGetCurrentStyle(e, "position"), a = t.createElement("div"), s = t.createElement("a");
            n && "static" !== n || (e.style.position = "relative");
            var l = "trc_user_adChoice_btn";
            ("STATIC" === r["adc-type"] || i.Device.isTouchDevice) && (l += " trc_user_adChoice_btn_static"), i.dom.addClass(a, l), a.setAttribute("title", o.adChoiceBtn.title), s.setAttribute("href", r["plink"]), s.setAttribute("target", "_blank"), s.appendChild(a), e.appendChild(s)
        }
    };
    i.userAdChoice = {init: n, initForMode: a, locale: "en", isInitialized: !1}
}(window, document, TRC), function (e, t) {
    e.TRC = e.TRC || {}, TRC.UserIdMerger = {
        notifyPossibleUserChange: function (e, t, i, r) {
            var o, n, a;
            e.global["rbox-enable-fix-user-id-event"] && (o = TRC.pageManager.getValue("user-id"), n = TRC.pageManager.getPublisherValue(t, "session-data"), this.multipleUsersExist(i, o) && this.sendUserIdFixEvent(e, o, i, n, r))
        }, multipleUsersExist: function (e, t) {
            return t && e && t !== e
        }, sendUserIdFixEvent: function (e, t, i, r, o) {
            var n = {time: (new Date).getTime(), fromUser: t, toUser: i, fromSD: r, toSD: o};
            e.sendEvent("fix-user-id", n)
        }
    }
}(window, document), function (e, t, i) {
    const r = {
        en: {
            popover: {
                title: {removed: "Removed!", scRemoved: "Sponsored link removed", thankYou: "Thank You!"},
                content: {
                    questionnaire: {
                        tellUsWhy: "Tell us why?",
                        options: {
                            uninteresting: "Uninteresting",
                            misleading: "Misleading",
                            offensive: "Offensive",
                            repetitive: "Repetitive",
                            racy: "Vulgar/Racy",
                            other: "Other"
                        }
                    }, approval: "We will try not to show you this content anymore."
                }
            }, removeBtn: {title: "Remove this item"}, undoBtn: {label: "Undo"}
        },
        de: {
            popover: {
                title: {
                    removed: "Beitrag entfernt",
                    scRemoved: "Gesponserter Beitrag entfernt",
                    thankYou: "Vielen Dank"
                },
                content: {
                    questionnaire: {
                        tellUsWhy: "Warum wollten Sie das nicht sehen?",
                        options: {
                            uninteresting: "Interessiert mich nicht",
                            misleading: "Finde ich irreführend",
                            offensive: "Der Inhalt ist anstößig",
                            repetitive: "Ich kenne den Beitrag schon",
                            racy: "Vulgär/Gewagt",
                            other: "Andere Gründe"
                        }
                    }, approval: "Wir bemühen uns, Ihnen diesen Inhalt nicht noch einmal anzuzeigen."
                }
            }, removeBtn: {title: "Ich möchte das nicht sehen"}, undoBtn: {label: "Beitrag nicht entfernen"}
        },
        fr: {
            popover: {
                title: {removed: "Supprimé!", scRemoved: "Lien sponsorisé supprimé", thankYou: "Merci!"},
                content: {
                    questionnaire: {
                        tellUsWhy: "Quelle est la raison?",
                        options: {
                            uninteresting: "Inintéressant",
                            misleading: "Trompeur",
                            offensive: "Offusquant",
                            repetitive: "Répétitif",
                            racy: "Vulgaire/Grossier",
                            other: "Autre"
                        }
                    }, approval: "Nous essaierons de ne plus vous montrer ce type de contenu à l'avenir."
                }
            }, removeBtn: {title: "Supprimer ce contenu"}, undoBtn: {label: "Annuler"}
        },
        it: {
            popover: {
                title: {removed: "Rimosso!", scRemoved: "Link sponsorizzato rimosso", thankYou: "Grazie!"},
                content: {
                    questionnaire: {
                        tellUsWhy: "Ci puoi dire il motivo?",
                        options: {
                            uninteresting: "Non mi interessa",
                            misleading: "Non è coerente",
                            offensive: "E’ offensivo",
                            repetitive: "E’ ripetuto",
                            racy: "Vogare/Erotico",
                            other: "Altro"
                        }
                    }, approval: "Cercheremo di non mostrarti più questo contenuto"
                }
            }, removeBtn: {title: "Rimuovi questo elemento"}, undoBtn: {label: "Annulla"}
        },
        jp: {
            popover: {
                title: {removed: "削除されました!", scRemoved: "このコンテンツを非表示に設定しました。", thankYou: "ありがとうございました。"},
                content: {
                    questionnaire: {
                        tellUsWhy: "非表示にされた理由をお聞かせください。",
                        options: {
                            uninteresting: "興味がない",
                            misleading: "紛らわしい",
                            offensive: "不快",
                            repetitive: "繰り返し表示される",
                            racy: "卑猥",
                            other: "その他"
                        }
                    }, approval: "いただいたご意見は今後のサービス改善の参考にさせていただきます。"
                }
            }, removeBtn: {title: "この項目を削除する"}, undoBtn: {label: "元に戻す"}
        },
        pt: {
            popover: {
                title: {removed: "Removido!", scRemoved: "Link patrocinado removido", thankYou: "Obrigado!"},
                content: {
                    questionnaire: {
                        tellUsWhy: "Diga-nos porquê",
                        options: {
                            uninteresting: "Desinteressante",
                            misleading: "Enganador",
                            offensive: "Ofensivo",
                            repetitive: "Repetitivo",
                            racy: "Apelativo/ Erótico",
                            other: "Outra razão"
                        }
                    }, approval: "Vamos tentar não mostrar-lhe este conteúdo."
                }
            }, removeBtn: {title: "Remover este item"}, undoBtn: {label: "Desfazer"}
        },
        ko: {
            popover: {
                title: {removed: "삭제됨!", scRemoved: "종료된 후원콘텐츠 입니다.", thankYou: "감사합니다!"},
                content: {
                    questionnaire: {
                        tellUsWhy: "이유를 알려 주세요.",
                        options: {
                            uninteresting: "관심없음",
                            misleading: "부적절함",
                            offensive: "혐오감을 줌",
                            repetitive: "반복됨",
                            racy: "저속/선정적인 표현",
                            other: "기타"
                        }
                    }, approval: "타불라에 의해 종료된 광고 입니다."
                }
            }, removeBtn: {title: "아이템 삭제"}, undoBtn: {label: "돌아가기"}
        },
        "zh-CN": {
            popover: {
                title: {removed: "已移除", scRemoved: "赞助内容已移除", thankYou: "谢谢！"},
                content: {
                    questionnaire: {
                        tellUsWhy: "告诉我们原因",
                        options: {
                            uninteresting: "不感兴趣",
                            misleading: "误导",
                            offensive: "冒犯",
                            repetitive: "重复",
                            racy: "低俗／色情",
                            other: "其它"
                        }
                    }, approval: "我们会尽量不向您展示这篇内容了"
                }
            }, removeBtn: {title: "移除此项目"}, undoBtn: {label: "撤消"}
        }
    }, o = 8e3, n = 4e3;
    let a, s;

    function l(e) {
        const t = e.which || e.keyCode;
        27 === t && _()
    }

    function c(e) {
        const t = e.target || e.srcElement;
        i.dom.isAncestor(i.userX.popover, t, !0) || _()
    }

    function d(e) {
        return `.trc_user_exclude_btn { background: url("//cdn.taboola.com/libtrc/static/thumbnails/f539211219b796ffbb49949997c764f0.png") no-repeat scroll 0 0 transparent; width: 12px; height: 12px; position: absolute; right: 2px; top: 2px; z-index: 9000; cursor: pointer; visibility: hidden;}.trc_undo_btn { font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 14px; font-weight: normal; color: #3366CC; text-decoration: underline; cursor: pointer; position: absolute; right: 2px; top: 2px; padding: 0 1px; z-index: 11000; visibility: hidden;}.videoCube:hover .trc_user_exclude_btn,.videoCube_hover .trc_user_exclude_btn,.trc_user_excluded.videoCube:hover .trc_undo_btn,.trc_user_excluded.videoCube_hover .trc_undo_btn,.trc_undo_btn.trc_anchor { visibility: visible;}.videoCube.trc_user_excluded .trc_user_exclude_btn { visibility: hidden;}.trc_fade { opacity: 0; filter: alpha(opacity=0); visibility: hidden; transition: opacity 500ms 0s, visibility 0s 500ms; -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms;}.trc_fade.trc_in,.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 1; filter: alpha(opacity=100); transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -webkit-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s;}.trc_excludable .trc_exclude_overlay { position: absolute; z-index: 10000; top: 0; left: 0; width: 100%; height: 100%; cursor: default; background-color: white; /* this is to make elements from underneath this overlay unclickable in IE */}.videoCube.trc_excludable .trc_exclude_overlay.trc_fade { filter: alpha(opacity=80)9; /* fix for IE8 and below - keep opacity the same or else it goes crazy, because we also change the visibility */}.videoCube.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 0.8; filter: alpha(opacity=80);}.videoCube.trc_user_excluded .thumbBlock { filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0' /></filter></svg>#grayscale"); filter: gray; -webkit-filter: grayscale(100%);}.videoCube.trc_user_excluded:hover a .video-label-box .video-title, .videoCube_hover.trc_user_excluded a .video-label-box .video-title { text-decoration: none;}.videoCube.trc_user_excluded a .video-label-box *, .videoCube.trc_user_excluded:hover a .video-label-box *, .videoCube_hover.trc_user_excluded a .video-label-box * { color: #000000; overflow: hidden; /* fixes a bug in IE7 - opacity does not work with overflow: visible */ -webkit-transition: color 500ms 0s; -moz-transition: color 500ms 0s; -o-transition: color 500ms 0s; transition: color 500ms 0s;}.videoCube.trc_user_excluded a .video-label-box .label-box-overlay { background-color: #BBBBBB; -webkit-transition: background-color 500ms 0s; -moz-transition: background-color 500ms 0s; -o-transition: background-color 500ms 0s; transition: background-color 500ms 0s;}.videoCube.thumbnail_under.trc_user_excluded .video-labels-anchor, .videoCube.thumbnail_under.trc_user_excluded:hover .video-labels-anchor { max-height: none; -webkit-transition: none; -moz-transition: none; -o-transition: none; transition: none;}\n                .trc_popover_aug_container { position: static;}${e}.trc_popover { position: absolute; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; color: #000000; cursor: default; top: 0; right: 0; z-index: 12000; width: 180px; padding: 1px; text-align: left; white-space: normal; background-color: #ffffff; border: 1px solid rgba(0, 0, 0, 0.2); -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box;}${e}.trc_popover iframe{ width: 100%;}${e}.trc_popover .trc_popover_arrow,.trc_popover .trc_popover_arrow:after { position: absolute; display: block; width: 0; height: 0; border: solid transparent;}${e}.trc_popover .trc_popover_arrow { border-width: 11px;}${e}.trc_popover .trc_popover_arrow:after { border-width: 10px; content: "";}${e}.trc_popover.trc_bottom { margin-top: 10px;}${e}.trc_popover.trc_bottom .trc_popover_arrow { top: -11px; right: 11px; margin-left: -11px; border-bottom-color: #999; border-bottom-color: rgba(0, 0, 0, 0.25); border-top-width: 0;}${e}.trc_popover.trc_bottom .trc_popover_arrow:after { top: 1px; margin-left: -10px; border-bottom-color: #ffffff; border-top-width: 0;}${e}.trc_popover_fade.trc_in { visibility: visible; opacity: 1; filter: alpha(opacity=100); transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -webkit-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s;}${e}.trc_popover_fade { visibility: hidden; opacity: 0; filter: alpha(opacity=0); transition: opacity 500ms 0s, visibility 0s 500ms; -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms;}`
    }

    function h() {
        return `html { overflow: hidden;}body { display: inline-block; width: 100%; margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; color: #000000;}.trc_popover_title_wrapper { padding: 8px 14px; margin: 0; font-weight: bold; background-color: #f7f7f7; border-bottom: 1px solid #ebebeb; -webkit-border-radius: 5px 5px 0 0; -moz-border-radius: 5px 5px 0 0; border-radius: 5px 5px 0 0;}.trc_popover_title { width: 100%; display: inline-block; vertical-align: middle;}.trc_popover_title_text { float: left;}.trc_popover_content_wrapper { display: inline-block; float: left; padding: 9px 14px;}.trc_popover_content { width: 100%;}.trc_question_container .trc_question_title { margin: 0 0 3px;}.trc_question_container input[type=radio] { float: left; cursor: pointer; margin: 3px 4px 0 5px;}.trc_popover_content_wrapper .trc_question_container label{ float: left; clear: left; width: 100%; cursor: pointer; line-height: 20px; text-align: left;}.trc_question_container_ie.trc_question_container input[type=radio] { margin: 0 2px 0 0;}`
    }

    function p(o) {
        TRC.tlf && console.time("init userx");
        const n = U(o);
        let s = i.dom.createAugmentingContainers(3, null), l = i.dom.generateAugmentationPrefix(s);
        s.forEach(e => e.className = "trc_popover_aug_container"), i.userX.mainPopoverContainer = s[0], t.body.appendChild(i.userX.mainPopoverContainer), i.dom.injectStyle(d(l)), i.userX.popover = v(s[2]), TRC.dom.on(e, "resize", k), a = r[n] || r["en"], i.userX.isInitialized = !0, TRC.tlf && console.timeEnd("init userx")
    }

    function u() {
        let e = i.userX.mainPopoverContainer;
        e && e.parentNode && e.parentNode.removeChild(e), i.userX.isInitialized = !1
    }

    function m(e) {
        e.boxes.forEach(e => g(e))
    }

    function g(e) {
        if (!e["hasFloatingButton"]) {
            e.hasFloatingButton = !0;
            let r = t.trcGetCurrentStyle(e, "position"), o = t.createElement("div"), n = t.createElement("div"),
                s = t.createElement("div");
            r && "static" !== r || (e.style.position = "relative"), i.dom.addClass(o, "trc_user_exclude_btn"), o.setAttribute("title", a.removeBtn.title), o.onclick = function (t) {
                M(t, e)
            }.trcBind(e.rbox), e.appendChild(o), i.dom.addClass(s, "trc_exclude_overlay trc_fade"), e.appendChild(s), i.dom.addClass(n, "trc_undo_btn"), n.innerHTML = a.undoBtn.label, n.onclick = function (t) {
                A(t, e)
            }.trcBind(this), e.appendChild(n), i.dom.addClass(e, "trc_excludable")
        }
    }

    function f(e) {
        let t = document.createElement("iframe");
        return t.frameBorder = t.border = "0", t.scrolling = "no", t.src = "javascript:void(0)", t.style.width = "100%", e.appendChild(t)
    }

    function b(e, t, i) {
        let r = e.contentDocument ? e.contentDocument : e.contentWindow.document;
        r.write(t), setTimeout(() => {
            try {
                r.close(), i && i()
            } catch (e) {
            }
        }, 0)
    }

    function v(e) {
        let r = t.createElement("div"), o = t.createElement("div"), n;
        return i.dom.addClass(r, "trc_popover trc_popover_fade trc_bottom"), i.dom.addClass(o, "trc_popover_arrow"), r.appendChild(o), e.appendChild(r), r.trcContentIFrame = n = f(r), i.dom.on(t, "keyup", l), i.dom.on(t, "click", c), i.dom.on(r, "mouseover", P), i.dom.on(r, "mouseout", B), b(n, y(), () => {
            let e = n.contentDocument || n.contentWindow.document;
            e.TRC = i, i.dom.injectStyle(h(), e)
        }), r
    }

    function C() {
        const e = "<" + "script>", t = "<" + "/script>";
        let i = "";
        return document.domain !== location.hostname && (i += `${e}\n                        document.domain='${document.domain}';\n                     ${t}`), i += `${e}\n                    document.head = document.head || document.getElementsByTagName('head')[0];\n                ${t}`
    }

    function y() {
        return `<!doctype html>\n                <body>\n                    ${C()}\n                    <div class=" trc_popover_title_wrapper ">\n                        <div class=" trc_popover_title " id="title">\n                            <span class=" trc_popover_title_text "></span>\n                        </div>\n                    </div>\n                    <div class=" trc_popover_content_wrapper ">\n                        <div id="content" class=" trc_popover_content "></div>\n                    </div>\n                </body>`
    }

    function T(e, t, r) {
        let o = i.userX.popover, n = o.trcContentIFrame, a = n.contentDocument || n.contentWindow.document;
        e = e || o.videoCube, o.anchor && i.dom.removeClass(o.anchor, "trc_anchor"), o.videoCube = e, n.style.height = `${a.body.offsetHeight}px`, i.dom.addClass(o, "trc_in"), t = t || e, o.anchor = t, 9 === i.Browser.ie && (o.style.display = "block"), E(), P(), r && (s = new S(_, r)), o.isVisible = !0
    }

    function _() {
        let e = i.userX.popover;
        i.dom.removeClass(e, "trc_in"), e.anchor && i.dom.removeClass(e.anchor, "trc_anchor"), 9 === i.Browser.ie && (e.style.display = "none"), e.isVisible = !1, P()
    }

    function R(e) {
        let t, r = i.userX.popover.trcContentIFrame,
            o = (r.contentDocument || r.contentWindow.document).getElementById("content");
        if (o.innerHTML = "", "string" != typeof e) try {
            o.appendChild(e)
        } catch (t) {
            o.innerHTML = e.outerHTML
        } else o.innerHTML = e
    }

    function x(e) {
        let t, r = i.userX.popover.trcContentIFrame, o;
        (r.contentDocument || r.contentWindow.document).getElementById("title").innerHTML = e
    }

    function w(e) {
        let t = {}, r = function (e) {
            let t = 0;
            if ("string" == typeof e && null !== e && "" !== e) {
                let i = e.indexOf("px");
                t = i >= 0 ? parseInt(e.substring(0, i), 10) : 1
            }
            return t
        }, o = function (e) {
            let t = {left: 0, top: 0, right: 0, bottom: 0};
            if (window.getComputedStyle) {
                let i = window.getComputedStyle(e, null);
                t.left = parseInt(i.borderLeftWidth.slice(0, -2), 10), t.top = parseInt(i.borderTopWidth.slice(0, -2), 10), t.right = parseInt(i.borderRightWidth.slice(0, -2), 10), t.bottom = parseInt(i.borderBottomWidth.slice(0, -2), 10)
            } else t.left = r(e.style.borderLeftWidth), t.top = r(e.style.borderTopWidth), t.right = r(e.style.borderRightWidth), t.bottom = r(e.style.borderBottomWidth);
            return t
        };
        if (t.x = 0, t.y = 0, null !== e) if (e.getBoundingClientRect) {
            let r = document.documentElement, o = e.getBoundingClientRect(), n = i.Browser.ie,
                a = n || window.scrollX === r.scrollLeft || void 0 === window.scrollX ? r.scrollLeft : window.scrollX,
                s = n || window.scrollY === r.scrollTop || void 0 === window.scrollY ? r.scrollTop : window.scrollY;
            t.x = o.left + a, t.y = o.top + s
        } else {
            t.x = e.offsetLeft, t.y = e.offsetTop;
            let r = e.parentNode, n = e.offsetParent, a = null;
            for (; null != n;) {
                t.x += n.offsetLeft, t.y += n.offsetTop;
                let e = n.tagName.toLowerCase();
                if ((i.Browser["ieUpto"](8) && "table" !== e || (i.Browser["firefoxAtleast"](3) || i.Browser.chrome) && "td" === e) && (a = o(n), t.x += a.left, t.y += a.top), n !== document.body && n !== document.documentElement && (t.x -= n.scrollLeft, t.y -= n.scrollTop), !i.Browser.ie && !i.Browser.opera || i.Browser["ieAtleast"](8)) for (; n !== r && null !== r;) t.x -= r.scrollLeft, t.y -= r.scrollTop, (i.Browser["firefoxUpto"](3) || i.Browser.webkit) && (a = o(r), t.x += a.left, t.y += a.top), r = r.parentNode;
                r = n.parentNode, n = n.offsetParent
            }
        }
        return t
    }

    function I(e, t, i, r) {
        return e.offsetWidth - t.x - i.offsetWidth / 2 - r.offsetWidth / 2
    }

    function E() {
        let e = i.userX.popover,
            t = e && e.videoCube && e.videoCube.rbox.findElement(e => e.className.search("trc_popover_arrow") >= 0, e, "div"),
            r = e && e.anchor, o, n, a;
        r && t && (i.dom.addClass(r, "trc_anchor"), n = (o = w(r)).x - e.offsetWidth + r.offsetWidth / 2 + t.clientLeft + t.offsetWidth / 2 + 1, a = o.y + r.offsetHeight, n < 0 ? (t.style.right = `${I(e, o, t, r)}px`, n = 0) : t.style.right = null, e.style.left = `${n}px`, e.style.top = `${a}px`)
    }

    function k() {
        let e = i.userX && i.userX.popover;
        e && e.isVisible && E()
    }

    function S(e, t) {
        let i, r, o = t;
        this.pause = function () {
            clearTimeout(i), o -= new Date - r
        }, this.resume = function () {
            r = new Date, i = setTimeout(e, o)
        }, this.resume()
    }

    function P() {
        s && s.pause && s.pause()
    }

    function B() {
        s && s.resume && s.resume()
    }

    function L() {
        let e = t.createElement("div"), r = t.createElement("div"), o, n, s = a.popover.content.questionnaire.options;
        i.dom.addClass(e, "trc_question_container"), i.Browser.ie && i.dom.addClass(e, "trc_question_container_ie"), r.innerHTML = a.popover.content.questionnaire.tellUsWhy, i.dom.addClass(r, "trc_question_title"), e.appendChild(r);
        for (let i in s) s.hasOwnProperty(i) && (o = t.createElement("label"), (n = t.createElement("input")).setAttribute("type", "radio"), n.setAttribute("name", "excludeReason"), n.setAttribute("value", i), n.setAttribute("onchange", "this.checked = true; TRC.userX.explainExclude(event, TRC.userX.popover.videoCube, 400); "), o.appendChild(n), o.innerHTML += s[i], e.appendChild(o));
        return e
    }

    function D(e) {
        let t = e && e["video_data"], i = {};
        return t ? (i.ii = t && t["item-id"], i.prt = "rc", t["is-syndicated"] && (i.prt = "sc"), t["is-in-network"] && (i.prt = "nt"), t["is-native"] && (i.prt = "nav"), i.p = t.publisher || "", TRC.pageManager.getValue("past-exclusions") && (i.px = TRC.pageManager.getValue("past-exclusions")), i) : (__trcWarn("No video data have been found for user exclude event request params. aborting."), !1)
    }

    function M(e, t) {
        e = e || event;
        let r = D(t);
        return t && "true" === t.getAttribute("data-excluded") || !r ? (__trcDebug("No recommendation to exclude. Not sending exclude event."), i.dom.stopEvent(e)) : (t.rbox.sendEvent("exclude", r, null, !1), O(t), i.dom.stopEvent(e))
    }

    function O(e) {
        let t = e.rbox.findElement(function (e) {
            return e.className.search("trc_undo_btn") >= 0
        }, e, "div"), r = e && e["video_data"]["is-syndicated"] ? a.popover.title.scRemoved : a.popover.title.removed;
        i.userX.popover.videoCube = e, i.pageManager.storeValue("past-exclusions", 1), x(r), R(L()), T(e, t, o), e.setAttribute("data-excluded", "true"), i.dom.addClass(e, "trc_user_excluded")
    }

    function A(e, t) {
        e = e || event;
        let r = D(t);
        return t && t.getAttribute("data-excluded") && r ? (t.rbox.sendEvent("excludeundo", r, null, !1), N(t), i.dom.stopEvent(e)) : (__trcDebug("No recommendation to unexclude. Not sending exclude-undo event."), i.dom.stopEvent(e))
    }

    function N(e) {
        e.removeAttribute("data-excluded"), i.dom.removeClass(e, "trc_user_excluded"), _()
    }

    function V(e, t, i) {
        let r = (e = e || event).target || e.srcElement, o = D(t);
        P(), t && t.getAttribute("data-excluded") && o ? (o.xr = r.getAttribute("value"), t.rbox.sendEvent("excludeexplain", o, null, !1)) : __trcDebug("No recommendation exclude to explain. Not sending exclude-explain event."), i ? setTimeout(() => {
            F()
        }, i) : F()
    }

    function F() {
        let e = i.userX.popover, t = i.Browser["ieUpto"](9) ? 0 : 250;
        _(), i.dom.addClass(e.anchor, "trc_anchor"), setTimeout(() => {
            x(a.popover.title.thankYou), R(a.popover.content.approval), T(e.videoCube, e.anchor, n)
        }, t)
    }

    function U(e) {
        return e ? "tb-jp" === e ? e.substr(e.indexOf("-") + 1) : e : "en"
    }

    i.userX = {init: p, initForMode: m, explainExclude: V, reset: u, locale: "en", isInitialized: !1}
}(window, document, TRC), function () {
    TRC.VideoAsItemUnitLoader = function e(t, i, r) {
        this.videoConfig = t, this.options = i, this.rbox = r, this.allowExpandInViewport = TRC.util.isTrue(t.allowExpandInViewport), this.replaceWidgetItems = TRC.util.isTrue(t.replaceWidgetItems), this.disableFitToSizeForSingleColumn = TRC.util.isTrue(t.disableFitToSizeForSingleColumn)
    }, TRC.VideoAsItemUnitLoader.prototype.loadUnit = function (videoCallbackData, videoContainer) {
        var itemsToHide = this.getSponsoredItemsToHide(), slotItem, slotItemComputedStyle, unit;
        return (!this.replaceWidgetItems || itemsToHide && itemsToHide.length) && (slotItem = this.getSlotWidgetItem(), slotItemComputedStyle = getComputedStyle(slotItem), this.setCmTag(slotItem, slotItemComputedStyle), unit = eval(videoCallbackData.tags[0].url), this.setupVideo(unit, itemsToHide, videoContainer, slotItemComputedStyle)), unit
    }, TRC.VideoAsItemUnitLoader.prototype.getVideoContainerSelector = function (e) {
        var t = this.createVideoContainer(e);
        return t ? "#" + t.id : null
    }, TRC.VideoAsItemUnitLoader.prototype.createVideoContainer = function (e) {
        var t = document.createElement("figure"), i = this.getSlotWidgetItem(), r = i && i.parentNode;
        return i && r && e ? (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += "-video", r.insertBefore(t, i), t) : (__trcWarn("Could not create video container selector for integrated widget - nowhere to append the video container"), null)
    }, TRC.VideoAsItemUnitLoader.prototype.setCmTag = function (e, t) {
        var i = this.getUnitContainerStyle(e, t);
        window["cmTag"].set("isCustomEvents", !0), window["cmTag"].set("width", parseInt(i.width)), window["cmTag"].set("customization", this.getUnitCustomization(e, i)), window["cmTag"].set("isFitToSize", this.isFitToSizeVideo()), window["cmTag"].set("openingEffect", this.videoConfig.expandEffect)
    }, TRC.VideoAsItemUnitLoader.prototype.getUnitCustomization = function (e, t) {
        var i, r, o, n = {};
        return n.unitContainer = t, this.isFitToSizeVideo() || (i = e.querySelector(".thumbBlock_holder"), r = e.querySelector(".video-label-box .video-title"), o = e.querySelector(".video-label-box .branding"), n.placeHolder = getComputedStyle(i), n.titleContainer = {
            title: getComputedStyle(r),
            branding: getComputedStyle(o)
        }), n
    }, TRC.VideoAsItemUnitLoader.prototype.isFitToSizeVideo = function () {
        if (!this.disableFitToSizeForSingleColumn) return !0;
        var e = this.rbox.getEffectiveResponsiveRule();
        return !e || 1 !== e.cells
    }, TRC.VideoAsItemUnitLoader.prototype.getUnitContainerStyle = function (e, t) {
        var i = parseFloat(t.marginLeft), r = parseFloat(t.marginRight), o = parseFloat(t.width),
            n = this.getNumOfSlotsToOccupy(), a;
        return {width: Math.ceil(o * n + (i + r) * (n - 1)) + "px", height: t.height}
    }, TRC.VideoAsItemUnitLoader.prototype.setupVideo = function (e, t, i, r) {
        var o = this.allowExpandInViewport, n = this.getSlotWidgetItem(), a = this, s = a.rbox.container;
        this.setVideoContainerInitialStyle(i, r), e.on("ready", function () {
            !o && TRC.visibility.isInViewPortWithOffset(n, 0) || (s && TRC.dom.addClass(s, "iw_video_frame"), a.replaceWidgetItems ? t && t.length ? (parseInt(a.videoConfig.expandEffect) ? e.on("renderAnimation:completed", a.displayVideoInsteadOfItems.trcBind(a, i, t)) : a.displayVideoInsteadOfItems(i, t), e.play(i)) : __trcDebug("Not enough sponsored items to hide - aborting integrated widget video load") : e.play(i))
        })
    }, TRC.VideoAsItemUnitLoader.prototype.setVideoContainerInitialStyle = function (e, t) {
        var i = this.getSlotWidgetItem(), r = parseFloat(t.marginLeft), o = this.getOuterRBoxComputedStyle(),
            n = parseFloat(o.marginLeft), a = i.offsetLeft - r - (n + r);
        e.style.position = "absolute", e.style.float = t.float, e.style.top = i.offsetTop + "px", e.style.left = a + "px", e.style.width = "auto", e.style.marginLeft = t.marginLeft, e.style.marginRight = t.marginRight, e.style.marginTop = t.marginTop, e.style.marginBottom = t.marginBottom, this.replaceWidgetItems || (e.style.zIndex = 90)
    }, TRC.VideoAsItemUnitLoader.prototype.getOuterRBoxComputedStyle = function () {
        var e = this.rbox.outerBox;
        return getComputedStyle(e)
    }, TRC.VideoAsItemUnitLoader.prototype.displayVideoInsteadOfItems = function (e, t) {
        this.hideWidgetItems(t), e.style.position = "static"
    }, TRC.VideoAsItemUnitLoader.prototype.hideWidgetItems = function (e) {
        for (var t = 0; t < e.length; t++) e[t].style.display = "none", e[t].style.visibility = "hidden"
    }, TRC.VideoAsItemUnitLoader.prototype.getSlotWidgetItem = function () {
        var e, t;
        return this.slotWidgetItem ? this.slotWidgetItem : (e = this.getWidgetItems(), t = this.getInsertionPointSlotNumber() - 1, isNaN(t) ? void 0 : this.slotWidgetItem = e[t])
    }, TRC.VideoAsItemUnitLoader.prototype.getInsertionPointSlotNumber = function () {
        var e = this.getWidgetItems(), t = parseInt(this.videoConfig.slot), i;
        if (void 0 !== this.insertionPointSlotNumber) return this.insertionPointSlotNumber;
        if (!isNaN(t) && t > 0) {
            if (this.allowExpandInViewport) return this.insertionPointSlotNumber = t;
            for (var r = t; r <= e.length; r++) if (i = r - 1, !TRC.visibility.isInViewPortWithOffset(e[i], 0)) return this.insertionPointSlotNumber = r
        }
        return __trcWarn("video tag loader - unknown slot (" + t + ") for integrated widget implementation"), null
    }, TRC.VideoAsItemUnitLoader.prototype.getSponsoredItemsToHide = function () {
        for (var e = this.getWidgetItems(), t = e.length, i, r = this.getInsertionPointSlotNumber(), o = this.getNumOfSlotsToOccupy(), n, a = []; t >= r; t--) if ((n = e[i = t - 1]).video_data["is-syndicated"] && null !== n.offsetParent && (a.push(n), a.length === o)) return a;
        return __trcWarn("video tag loader - didn't find enough sponsored items for integrated widget replacement"), null
    }, TRC.VideoAsItemUnitLoader.prototype.getWidgetItems = function () {
        return this.rbox.boxes
    }, TRC.VideoAsItemUnitLoader.prototype.getNumOfSlotsToOccupy = function () {
        var e, t, i, r = this.videoConfig.slotMaxSize || 2, o = this.getInsertionPointSlotNumber();
        return void 0 === this.numOfSlotsToOccupy && ((e = this.rbox.getEffectiveResponsiveRule()) ? (t = o % e.cells || e.cells, i = e.cells - t + 1, this.numOfSlotsToOccupy = Math.min(i, r)) : this.numOfSlotsToOccupy = r), this.numOfSlotsToOccupy
    }
}(), TRC.InvokeVideoLoader = function () {
    TRC.VideoLoader = function e(t, i, r, o, n) {
        this.trcManager = t, this.videoConfig = i, this.placement = r, this.unifiedPlacement = i.unifiedPlacement, this.taboolaContainer = o, this.trcResponse = n, this.consentData = TRC.consentData || {}
    }, TRC.VideoLoader.prototype.CALLBACK_NAME_PREFIX = "videoCallback", TRC.VideoLoader.prototype.valueOrEmptyString = function (e) {
        return null !== e && void 0 !== e ? e : ""
    }, TRC.VideoLoader.prototype.loadVideo = function (o) {
        if (TRC.botDetected) __trcDebug("video loader - not loading. Bot detected."); else if (this.blockVideo) __trcDebug("video loader - not loading. Video was blocked due to configuration."); else {
            if (!TRC.Browser["ieUpto"](10)) {
                var n = document.createElement("script"), a = this.videoConfig.scriptUrlTemplate;
                return TRC.pConsole("video loader", "info", "loading video for placement: " + this.placement), a ? (n.id = this.taboolaContainer.id + "-v-loader", n.src = a.replace("{PUBLISHER_NAME}", TRC.publisherId).replace("{UNIT_TYPE}", encodeURIComponent(this.videoConfig.unitType)).replace("{UNIT_LOCATION}", encodeURIComponent(this.valueOrEmptyString(this.videoConfig.unitLocation))).replace("{SOURCE_PAGE_TYPE}", this.trcManager.getItemType()).replace("{PLACEMENT_NAME}", encodeURIComponent(this.getPlacementName())).replace("{UNIFIED_PLACEMENT_NAME}", encodeURIComponent(this.valueOrEmptyString(this.getUnifiedPlacementName()))).replace("{USER_ID}", TRC.pageManager.getValue("user-id")).replace("{CALLBACK_NAME}", this.genVideoCallback(o)).replace("{REFERRER}", encodeURIComponent(this.trcManager.getReferrer())).replace("{PAGE_URL}", encodeURIComponent(this.valueOrEmptyString(this.getItemUrlForVideo()))).replace("{CACHE_BUSTER}", this.getScriptCacheBuster()).replace("{PLATFORM}", this.valueOrEmptyString(this.videoConfig.platform)).replace("{COUNTRY}", this.valueOrEmptyString(this.videoConfig.country)).replace("{TAG_ID}", this.valueOrEmptyString(this.videoConfig.tagId)).replace("{VARIANT}", this.valueOrEmptyString(this.videoConfig.variant)).replace("{SESSION_ID}", this.valueOrEmptyString(this.trcManager.getSessionId())).replace("{SOURCE_ITEM_ID}", this.valueOrEmptyString(this.trcManager.getItemId())).replace("{VIEW_ID}", this.valueOrEmptyString(TRC.pageManager.getPageData())).replace("{GEO_LAT}", this.valueOrEmptyString(e())).replace("{GEO_ING}", this.valueOrEmptyString(t())).replace("{DEVICE_IFA}", this.valueOrEmptyString(this.trcManager.deviceId)).replace("{APP_ID}", this.valueOrEmptyString(i())).replace("{SESSION_DATA}", this.valueOrEmptyString(this.getSessionData())).replace("{REQUEST_ID}", this.valueOrEmptyString(this.getRequestId())).replace("{APP_NAME}", this.valueOrEmptyString(r())).replace("{CONSENT_DAISY_BIT}", this.valueOrEmptyString(this.consentData.consentDaisyBit)).replace("{GDPR_APPLIES}", this.valueOrEmptyString(this.consentData.gdprApplies)), this.taboolaContainer.appendChild(n)) : TRC.pConsole("video loader", "error", "error while loading video for placement: " + this.placement + ". missing script url template in response"), !0
            }
            __trcDebug("video loader - not loading. Unsupported browser.")
        }
    };
    var e = function () {
        if (o() && void 0 !== TRCImpl.additional_data.sdkd.loc) return TRCImpl.additional_data.sdkd.loc.lat
    }, t = function () {
        if (o() && void 0 !== TRCImpl.additional_data.sdkd.loc) return TRCImpl.additional_data.sdkd.loc.ing
    }, i = function () {
        if (o()) return TRCImpl.additional_data.sdkd.appid
    }, r = function () {
        if (o()) return TRCImpl.additional_data.sdkd.app
    }, o = function () {
        return void 0 !== TRCImpl.additional_data && void 0 !== TRCImpl.additional_data.sdkd
    };
    TRC.VideoLoader.prototype.generateCallbackName = function () {
        var e, t = this.getCallbacksObjectKey();
        return TRC[t] = TRC[t] || {}, e = TRC[t].auto_gen_callback_seq = TRC[t].auto_gen_callback_seq + 1 || 1, this.CALLBACK_NAME_PREFIX + e
    }, TRC.VideoLoader.prototype.genVideoCallback = function () {
        throw new Error("This is an abstract method that should be inherited.")
    }, TRC.VideoLoader.prototype.getCallbacksObjectKey = function () {
        throw new Error("This is an abstract method that should be inherited.")
    }, TRC.VideoLoader.prototype.getItemUrlForVideo = function () {
        var e = [], t = "", i, r, o, n, a;
        if (!(i = this.trcManager.getItemUrl())) return null;
        if (r = this.getVideoParametersToKeep(), (o = (o = this.getWindowLocationSearch()).substr(1)).length) {
            e = o.split("&");
            for (var s = 0; s < e.length; s++) (n = e[s].split("=")[0]).length && -1 !== r.indexOf(n) && -1 === i.indexOf(n.concat("=")) && (t = t.concat(n, "=", e[s].split("=")[1], "&"));
            t.length >= 1 && (t = t.substring(0, t.length - 1), t = (a = -1 === i.indexOf("?") ? "?" : "&").concat(t)), i = i.concat(t)
        }
        return i
    }, TRC.VideoLoader.prototype.getSessionData = function () {
        return this.trcResponse["session-data"]
    }, TRC.VideoLoader.prototype.getRequestId = function () {
        return this.trcResponse["req"]
    }, TRC.VideoLoader.prototype.getPlacementName = function () {
        return this.videoConfig.placement || this.placement
    }, TRC.VideoLoader.prototype.getUnifiedPlacementName = function () {
        return this.unifiedPlacement
    }, TRC.VideoLoader.prototype.getScriptCacheBuster = function () {
        return (new Date).getTime().toString()
    }, TRC.VideoLoader.prototype.getWindowLocationSearch = function () {
        return window.location.search || ""
    }, TRC.VideoLoader.prototype.getVideoParametersToKeep = function () {
        return this.trcManager.global["video-tag-keep-url-params"] || ["vstaging", "keyword", "customTB"]
    }
}, TRC.InvokeVideoTagLoader = function () {
    TRC.VideoTagLoader = function e(t, i, r, o, n) {
        this.blockVideo = t.blockVideoLoader || !t["before-video-load"](), this.blockVideo || (TRC.VideoLoader.call(this, t, i, r.placement, r.container, n), this.options = r, this.videoConfig = i, this.unitLoader = this.initUnitLoader(i, r, o, t))
    }, TRC.VideoTagLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoTagLoader.prototype.LOCATION_TYPES = {
        ABOVE: "above",
        BELOW: "below",
        ITEM: "item",
        STANDALONE: "standalone",
        SINGLE_MANAGER: "singleManager"
    }, TRC.VideoTagLoader.prototype.initUnitLoader = function (e, t, i, r) {
        switch (e.position) {
            case this.LOCATION_TYPES.STANDALONE:
                return new TRC.StandaloneVideoUnitLoader(e, t);
            case this.LOCATION_TYPES.ITEM:
                return new TRC.VideoAsItemUnitLoader(e, t, i);
            case this.LOCATION_TYPES.SINGLE_MANAGER:
                return new TRC.SingleVideoManagerUnitLoader(e, r);
            default:
                return new TRC.DefaultVideoUnitLoader(e)
        }
    }, TRC.VideoTagLoader.prototype.setGlobalUnitParams = function (e) {
        this.trcManager && this.trcManager.framework && "mobile-sdk" === this.trcManager.framework && (e.set("isSDK", !0), e.set("widgetPlacement", this.getPlacementName())), TRC.filledImpressions = TRC.filledImpressions || [], e.on("filledImpression", function (e) {
            TRC.filledImpressions.push(e)
        })
    }, TRC.VideoTagLoader.prototype.getCallbacksObjectKey = function () {
        return "videoTagCallbacks"
    }, TRC.VideoTagLoader.prototype.genVideoCallback = function () {
        var e = this.generateCallbackName(), t = this;
        return TRC.videoTagCallbacks[e] = function (e) {
            var i, r;
            (e = e || {}).tags && e.tags[0] && (i = e.tags[0].unitBootSrc || t.videoConfig.unitBootSrc, (r = document.createElement("script")).src = i, r.onload = function () {
                var i = t.videoConfig.containerSelector || t.unitLoader.getVideoContainerSelector(t.taboolaContainer),
                    r, o;
                i && (window["cmTag"].set("parentSelector", i), r = document.querySelector(i)), (o = t.unitLoader.loadUnit(e, r)) && t.setGlobalUnitParams(o)
            }, document.getElementsByTagName("head")[0].appendChild(r))
        }, "TRC." + this.getCallbacksObjectKey() + "." + e
    }
}, function (e, t) {
    TRC.VisibilityScheduler = function (t, i) {
        var r = {}, o = {}, n = 0, a = t || 1e3, s = i || 500, l = 0;

        function c() {
            var t;
            for (var i in TRC.tlf && console.time("visibility cycle"), r) r[i].isVisibleWidget(r[i].MIN_VISIBLE_ITMES) && (t = !0, o[i] = r[i]);
            t && e.setTimeout(d.trcBind(this), s), l > 0 && e.setTimeout(c.trcBind(this), a), TRC.tlf && console.timeEnd("visibility cycle")
        }

        function d() {
            var t;
            for (var i in TRC.tlf && console.time("visibility verification"), o) (t = o[i]).isVisibleWidget(t.MIN_VISIBLE_ITMES) && (e.setTimeout(t.sendVisibility.trcBind(t), 0), p(i)), h(i);
            TRC.tlf && console.timeEnd("visibility verification")
        }

        function h(e) {
            delete o[e]
        }

        function p(e) {
            delete r[e], l--
        }

        this.register = function (t) {
            r[++n] = t, 1 === ++l && e.setTimeout(c.trcBind(this), a)
        }
    }
}(window, document), TRC.visibility = TRC.visibility || {}, TRC.visibility = function (e, t) {
    function i(e) {
        var t = TRC.dom.getViewportVerticalRange(), i = TRC.dom.getElementRect(e);
        return i.top < 0 ? Math.max(i.top, i.bottom) : t.max - i.top - t.min
    }

    function r(e) {
        var t = TRC.dom.getViewportHorizontalRange(), i = TRC.dom.getElementRect(e);
        return i.left < 0 ? Math.max(i.left, i.right) : t.max - i.left - t.min
    }

    var o = {
        getViewPortOffsets: function (e) {
            var t, o;
            return {verticalOffset: i(e), horizontalOffset: r(e)}
        }, getMinViewPortOffsets: function (e) {
            var t = this.getViewPortOffsets(e);
            return t.verticalOffset < 0 && t.horizontalOffset < 0 ? Math.max(t.verticalOffset, t.horizontalOffset) : Math.min(t.verticalOffset, t.horizontalOffset)
        }, isInViewPortWithOffset: function (e, t) {
            var i;
            return !(this.getMinViewPortOffsets(e) < (t = t || 0))
        }
    };
    return e._trcIsUTactive && (o.getVerticalVPShift = i, o.getHorizontalVPShift = r), o
}(window, document), function () {
    const e = "trc-w2f", t = "trc-w2f-no-ui";

    class i {
        constructor(e, t, i) {
            this.parentFeed = e, this.trcManager = t, this.hasFeedUI = i, this.setUpFeedContainer(), TRC.listen("trcResponseHandled", this.setContentTypeCssClass.trcBind(this))
        }

        setUpFeedContainer() {
            let i = this.parentFeed.container;
            i.className += ` ${e}`, !1 === this.hasFeedUI && (i.className += ` ${t}`)
        }

        setContentTypeCssClass() {
            let e = this.parentFeed.container, t = e.querySelectorAll(".videoCube.syndicatedItem").length, i,
                r = "sponsored";
            e.querySelectorAll(".videoCube:not(.syndicatedItem)").length && (r = t ? "hybrid" : "organic"), this.parentFeed.container.className = this.parentFeed.container.className.replace(/\btrc-content-(hybrid|sponsored|organic)\b/g, ""), this.parentFeed.container.className += " trc-content-" + r
        }

        addHeaderToFeed(e) {
            this.parentFeed.header.appendChild(e), this.header = e
        }

        addFooterToFeed(e) {
            this.footer = document.createElement("div"), this.footer.className = "tbl-feed-footer", this.footer.appendChild(e), this.parentFeed.container.appendChild(this.footer)
        }

        getHeader() {
            return this.header
        }

        getFooter() {
            return this.footer
        }

        applyWidgetHeaderAndFooterStylesToFeed(t) {
            if (this.headerAndFooterStylesApplied) return;
            let i = this.trcManager.isThinLoaderMode(),
                r = new RegExp(`(\\.${t})([^{]+\\.(trc_rbox_header|logoDiv|trc-widget-footer))`, "g"),
                o = new RegExp(`^(?![^}]*.${e}[^{]+).*$`, "gm");
            TRC.dom.injectedStyles.forEach(t => {
                if (!r.test(t.innerText)) return;
                let n = t.innerText.replace(r, `.${e}$2`);
                n = (n = (n = (n = n.replace(/\n/g, "")).replace(/}/g, "}\n")).replace(o, "")).replace(/\n/g, ""), TRC.dom.injectStyle(n, document, i)
            }), this.headerAndFooterStylesApplied = !0
        }
    }

    TRC.WidgetToFeedHelper = i
}(), function () {
    class e {
        constructor() {
            let e = new Worker(this._buildBlob());
            TRC.URL = TRC.URL || TRC.webkitURL, e.onmessage = this.onWorkerMessage.bind(this), this.worker = e, this.contextCallbacks = {}, this.context = 0
        }

        xhr(e, t, i) {
            const r = {url: e, type: "xhr", _context: this._generateContextId()};
            this.contextCallbacks[r._context] = {resolve: t, reject: i}, this.worker.postMessage(r)
        }

        onWorkerMessage(e) {
            let t = e.data, i = t._context, r = t.type, o = t.error, n = this.contextCallbacks[i] || {}, a = n.resolve,
                s = n.reject, l = "xhrBlob" === r ? t.buffer : t.result;
            a && "function" == typeof a || !o ? a(l || {}) : "function" == typeof s && s(), delete this.contextCallbacks[i]
        }

        _generateContextId() {
            return ++this.context
        }

        _buildBlob() {
            const e = new Blob([`/*! 327-10-RELEASE 2018-10-07 */\n\nfunction fetch(e,t,s){let n=new XMLHttpRequest;n.withCredentials=!0,n.onreadystatechange=function(){n.readyState<4||200!==n.status||4===n.readyState&&t(n)},n.onerror=function(){s()},n.open("GET",e,!0),n.send("")}self.addEventListener("message",e=>{const t=e.data,s=t.url,n=t._context,o=t.type;fetch(s,e=>{const t=e.responseText,s={result:t,type:o,_context:n};self.postMessage(s)},()=>{const e={error:!0,type:o,_context:n};self.postMessage(e)})},!1);`], {type: "text/javascript"});
            return window.URL.createObjectURL(e)
        }
    }

    TRC.initWorker = function () {
        TRC.worker || window.Worker && window.URL && window.URL.createObjectURL && TRCImpl.global["xhr-worker"] && (TRC.worker = new e)
    }
}(), function (e) {
    e.TRC = e.TRC || {};
    var t = function (e) {
        var t = [];
        for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
        return t.join("&")
    }, i = function () {
        return !0
    }, r = function (e, i, r, o) {
        var n = e + "/" + encodeURIComponent(r || TRC.publisherId) + "/log/3" + "/" + i;
        return o && (n += "?" + t(o)), n
    }, o = function (t, r) {
        var o, n = new (e.XDomainRequest || e.XMLHttpRequest);
        return n.open(t, r), n.onload = i, n.onerror = i, n.ontimeout = i, n.onprogress = i, n.withCredentials = !0, n
    };
    TRC.TRCLogger = {
        post: function (e, i, n, a) {
            var s = r(e, i, a), l = o("POST", s);
            l.setRequestHeader && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.send(t(n))
        }, get: function (e, t, i, n) {
            var a = r(e, t, n, i), s;
            o("GET", a).send()
        }
    }
}(window), function (win, doc) {
    TRC.performance && TRC.performance.mark("4.0");
    var protocol = TRC.PROTOCOL, getParameter = TRC.URL.prototype.getParameter,
        taboolaConsole = getParameter.call(location.href, "trc_console"), timers, div;

    function invokeInheritedModules() {
        TRC.InvokeVideoLoader(), TRC.InvokePVideoLoader(), TRC.InvokeVideoTagLoader()
    }

    function initRboxMapping() {
        TRC.rboxUsageOn && (TRC.rboxMap = new TRC.RboxMap, TRC.rboxMap.disabled && (TRC.rboxMap = null))
    }

    win.trc_debug_level = getParameter.call(location.href, "taboola-debug"), TRC.tlf = !!getParameter.call(location.href, "taboola-perf"), TRC.taboola_yield_report = !!getParameter.call(location.href, "taboola-yield-report"), taboolaConsole && "yes" === taboolaConsole.toLowerCase() && (TRC.taboolaConsole = !0, TRC.Manager.prototype.loadExternal("http://c2.taboola.com/console/console_loader.js", "js")), isNaN(parseInt(win.trc_debug_level)) && (trc_debug_level = 1), TRC.callbacks = {
        cdnRecommendations: function (e) {
            TRC.dispatch("staticRecommendationsReceived", {response: e})
        }, mute: function () {
            var e = TRCImpl.boxes, t;
            if (TRCImpl.preloadRequestLoader = null, TRC.Timeout.reset(), e) for (t in e) e[t].request = null;
            TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.mute), TRC.pConsole("warning - mute!", "warn", "server returned mute", "")
        }
    }, TRC.trc_drawRBox = !1, TRC.listOrigin = new TRC.ListOriginBuilder, TRC.baseDomain = TRC.baseDomain || protocol + "//cdn.taboola.com/libtrc/" + TRC.publisherId + "/", TRC.prototype = TRC.prototype || {}, TRC.Interval = function () {
        var intervals = {};
        return {
            set: function (callback, interval) {
                var aArgs = Array.prototype.slice.call(arguments, 2), intervalId = win.setInterval(function () {
                    "function" == typeof callback ? callback.apply(null, aArgs) : eval(callback)
                }, interval);
                return intervals[intervalId.toString()] = 1, intervalId
            }, clear: function (e) {
                e && (win.clearInterval(e), delete intervals[e.toString()])
            }, reset: function () {
                var e;
                for (intervalId in intervals) win.clearInterval(intervalId), delete intervals[intervalId.toString()]
            }
        }
    }(), TRC.Timeout = (timers = {}, {
        set: function (e, t) {
            var i = win.setTimeout(function () {
                delete timers[i.toString()], e()
            }, t);
            return timers[i.toString()] = 1, i
        }, clear: function (e) {
            e && (win.clearTimeout(e), delete timers[e.toString()])
        }, reset: function () {
            var e;
            for (e in timers) win.clearTimeout(e), delete timers[e.toString()]
        }
    }), TRC.trcReady = function () {
        try {
            TRC.pConsole("page", "debug", "libtrc : calling TRC.ready", ""), invokeInheritedModules(), TRC.implLoaded = !0, initRboxMapping();
            var e = TRC.ready({style: ".trc_rbox_container{direction:ltr;text-align:left}.trc_rbox_header{border-style:solid;border-width:0;overflow:hidden;vertical-align:middle}.trc_rbox_container .trc_img{display:inline-block!important}.trc_rbox_header_icon_div{display:table-cell;vertical-align:baseline}.trc_rbox_header .trc_rbox_header_icon_div .trc_rbox_header_icon_img{vertical-align:middle;width:auto}.trc_rbox_header_icon_span{display:inline-table}.in_trc_header{position:relative!important;float:right;margin:0}#trc_rbox_css_loaded{overflow:hidden;width:0;height:0}.trc_rbox{margin-top:0}.trc_rbox_div{margin:0 0 3px;direction:ltr;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:auto;position:relative;width:auto;*width:auto;border:solid #CCC 1px}.loading-animation span{display:block}.videoCube{zoom:1;cursor:pointer;float:none;overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}div.videoCube:hover,.videoCube_hover{cursor:pointer}.videoCube span.video-title:hover,.videoCube_hover span.video-title{text-decoration:underline}.videoCube a{text-decoration:none;border:0;color:#000;cursor:pointer}.videoCube a:hover,.videoCube_hover a,.videoCube a:link,.videoCube a{text-decoration:none!important;outline:0}.videoCube a .thumbBlock{float:left;display:block;overflow:hidden!important}.videoCube a img,.videoCube img{border:0;_border:0;display:block;margin:0;height:auto;width:auto}.videoCube .video-label{display:block;overflow:hidden}.videoCube .video-label{width:auto!important;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.videoCube .video-label-box.label-box-with-title-icon{display:table}.video-icon-container{float:left;display:table-cell;vertical-align:baseline}.video-icon-img{vertical-align:middle}.videoCube .video-duration a{}.videoCube .video-duration{height:0;float:left;position:relative;color:#fff;font-size:11px}.videoCube .video-duration dt{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;background-color:#000;opacity:.6;filter:alpha(opacity=60)}.videoCube span.video-label.trc_ellipsis{position:relative;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.videoCube span.video-label.trc-smart-ellipsis{position:relative;overflow:hidden}.videoCube span.video-label.trc-smart-ellipsis ins{display:inline-block;text-decoration:inherit}.videoCube span.video-label.trc-smart-ellipsis ins.lastLineEllipsis{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.sponsored-default .video-description{font-weight:400;color:#000;font-size:9px;max-height:22px;*height:22px;overflow:hidden;line-height:9px}.video-duration.video-duration-detail div{color:#fff}.sponsored-default{background-color:#f7f6c6;padding-bottom:0!important}.trc_rbox .sponsored{position:relative;display:block;overflow:visible;height:auto;width:auto;padding-right:0;text-align:right;font-size:9px}.sponsored-url{white-space:nowrap;float:left;overflow:hidden;width:98%;height:auto;margin-top:0;margin-left:1px;padding-bottom:2px;color:green;font-size:9px;text-decoration:underline}.sponsored-default .video-title{height:26px;font-size:11px;line-height:13px;max-height:26px;*height:26px}.sponsored-default .thumbBlock img{}.sponsored-default .thumbBlock{text-align:center;background-color:transparent}.trc_rbox_div{height:410px}.videoCube{direction:ltr;font-size:11px;margin:0;color:#000;border-width:0}.videoCube.vertical:first-child{border-top:0;margin-top:0}.videoCube.horizontal:first-child{border-left:0;margin-left:0}.trc_rbox .trc_rbox_div .videoCube.vertical{_margin-top:expression(this.previousSibling==null?'0':'default')}.trc_rbox .trc_rbox_div .videoCube.horizontal{_margin-left:expression(this.previousSibling==null?'0':'default')}div.videoCube:hover,.videoCube_hover{background-color:#EBF0FF;color:#000}.videoCube .thumbBlock{margin-right:5px;margin-left:1px;border-style:solid}.videoCube a img,.videoCube img{border-color:#ececec}.videoCube .overlayImg{}.videoCube .video-label-box{margin-left:81px}.videoCube .video-label dt{font-weight:700}.videoCube .video-title{height:auto;margin-bottom:3px;white-space:normal}.videoCube .trc_inline_detail_spacer{display:inline-block;white-space:pre}.sponsored-default{padding-bottom:0}.loading-animation{font-family:sans;font-size:1.5em;text-align:center;color:gray;height:100%}.trc_rbox_header{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-decoration:none;color:#000}.trc_header_right_part{position:absolute;left:50%;top:0}.branding_div{overflow:visible;float:right}.branding_div img{height:20px}.videoCube .branding .logoDiv{font-size:inherit}.videoCube .branding .logoDiv a{vertical-align:inherit;color:inherit}.videoCube .branding .logoDiv a span{vertical-align:inherit}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored{display:inline-block;float:none}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored.align-disclosure-right{float:right}.branding.composite-branding>*{display:inline-block;vertical-align:bottom}.branding .branding-separator{margin:0 2px;font-weight:400}.branding .branding-inner{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.trc_pager div{float:left;font-family:sans;cursor:pointer;margin-left:2px;margin-right:2px}.trc_pager_prev,.trc_pager_next{}.trc_pager{font-weight:400}.trc_pager_pages{display:block!important}.trc_related_container div.horizontal{float:left;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.trc_related_container div.vertical{}.trc_related_container DIV.videoCube.thumbnail_top .thumbBlock,.trc_related_container DIV.videoCube.thumbnail_bottom .thumbBlock{float:none}@media screen and (-webkit-min-device-pixel-ratio:0){.sponsored-url{margin-top:2px}}.vidiscovery-note{display:none}.pager_disabled{cursor:auto}.videoCube .thumbBlock .trc_sponsored_overlay_base{display:block;width:auto;margin-left:0;position:absolute;color:#fff!important}.videoCube .thumbBlock .trc_sponsored_overlay{filter:alpha(opacity=60);opacity:.6;display:block;position:absolute;*left:0}.videoCube .thumbBlock .trc_sponsored_overlay_base .sponsored{position:relative;display:block;overflow:visible;width:auto;text-align:center;padding:0 5px;margin-top:0}.videoCube .thumbBlock .trc_sponsored_overlay_base.round .trc_sponsored_overlay{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.videoCube .thumbBlock .trc_sponsored_overlay_base.round{margin-left:4px}.thumbnail-emblem{background-color:transparent;background-repeat:no-repeat;position:absolute;z-index:50}.playerCube .thumbnail-overlay,.videoCube .thumbnail-overlay{position:absolute;background-color:transparent;background-repeat:no-repeat;z-index:50}.videoCube:hover .thumbnail-overlay,.videoCube_hover .thumbnail-overlay{position:absolute;background-color:transparent;background-repeat:no-repeat;z-index:50}.thumbnail_bottom{padding-bottom:8px}.trc_pager_next img,trc_pager_next pager_disabled img,trc_pager_next:hover img{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1);filter:FlipH;-ms-filter:\"FlipH\"}.trc_cover_iframe{position:absolute;z-index:100000;top:0;left:0;background:#000;opacity:.4;filter:alpha(opacity=40);border:0}.trc_lightbox_base{z-index:100001;position:fixed}.trc_lightbox_overlay{background-color:transparent;position:absolute;z-index:100002}.trc_lightbox_transparent{position:absolute;z-index:100003}#trc_lightbox_header{font-family:\"Trebuchet MS\",Helvetica,sans-serif}.trc_whitebox{background-color:#fff;position:relative;z-index:100004;padding:0 20px 20px;margin:0 auto;border:2px solid #000;-moz-box-shadow:3px 3px 20px #000;-webkit-box-shadow:3px 3px 20px #000;box-shadow:3px 3px 20px #000;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.trc_whiteboxCloseButton{width:32px;height:32px;border:0;position:absolute;right:-16px;top:-14px;cursor:pointer;background:url(//cdn.taboola.com/taboola-generic/close.png) no-repeat top left transparent;color:#fff;color:transparent;font-size:0}.trc_related_container .logoDiv{font-family:Arial,Helvetica,sans-serif;white-space:nowrap;font-size:9px}.trc_related_container .logoDiv a{font-size:9px;text-decoration:none!important;color:#000;margin-right:1px;vertical-align:text-bottom}.logoDiv a span:hover{text-decoration:underline}.trc_rbox_header .logoDiv{font-size:1em}.trc_related_container .vertical-start-shade{background-image:url(//cdn.taboola.com/taboola-generic/shade-down.png);height:10px;width:auto;position:absolute;z-index:5}.trc_related_container .vertical-end-shade{background-image:url(//cdn.taboola.com/taboola-generic/shade-up.png);height:10px;width:auto;position:absolute;z-index:5}.trc_related_container .horizontal-start-shade{background-image:url(//cdn.taboola.com/taboola-generic/shade-right.png);height:auto;width:10px;position:absolute;z-index:5}.trc_related_container .horizontal-end-shade{background-image:url(//cdn.taboola.com/taboola-generic/shade-left.png);height:auto;width:10px;position:absolute;z-index:5}.trc_rbox_container.trc_expandable{overflow:hidden;max-height:0;transition-property:max-height;-webkit-transition-property:max-height;-moz-transition-property:max-height;-o-transition-property:max-height;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}DIV.trc_autoplaylist-box{margin:6px auto 0;border:0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;padding:4px;font-family:\"Trebuchet MS\",Helvetica,sans-serif;width:320px;background:#191919;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#191919', endColorstr='#393939');-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#191919, endColorstr=#393939)\";background:-webkit-gradient(linear,left top,left bottom,from(#191919),to(#393939));background:-moz-linear-gradient(top,#191919,#393939);background:linear-gradient(top,#191919,#393939)}DIV.trc_autoplaylist-box .trc-next-up-header{font-size:14px;color:#CCC;float:left;line-height:31px;margin:0 4px 0 6px;overflow:hidden;white-space:nowrap}DIV.trc_autoplaylist-box .trc-next-up-countdown{color:#fff;font-weight:700;font-size:15px;padding-left:4px}DIV.trc_autoplaylist-box .nextup{cursor:pointer}DIV.trc_autoplaylist-box .nextup .thumbblock{border:solid #FEFEFE 1px;margin-right:10px}DIV.trc_autoplaylist-box:hover .nextup .thumbblock SPAN.thumbnail-overlay{background-image:url(//cdn.taboola.com/taboola-generic/lightbox-overlay.png)}DIV.trc_autoplaylist-box .nextup .video-label-box{color:#fff;font-weight:700;font-size:12px;line-height:14px}.trc-syndication-link{text-decoration:none;color:inherit}.playerCube{width:100%;height:100%;position:relative;cursor:pointer}.playerCube .thumbnail-overlay{width:100%;height:100%;top:0;left:0;position:absolute}.trc_related_container .whatsThisSyndicated{position:absolute;cursor:pointer}.trc_related_container .whatsThisSyndicated.a-bottom-right,.trc_related_container .static-text.bottom-right{bottom:0;right:0}.trc_related_container .whatsThisSyndicated.a-top-right,.trc_related_container .static-text.top-right{top:0;right:0}.trc_related_container .whatsThisSyndicated.a-bottom-left,.trc_related_container .static-text.bottom-left{bottom:0;left:0}.trc_related_container .whatsThisSyndicated.a-top-left,.trc_related_container .static-text.top-left{top:0;left:0}.trc_related_container .videoCube .thumbBlock .branding{position:absolute;bottom:0;z-index:1;width:100%;margin:0;padding:5px 0;text-align:center}.syndicatedItem .branding{margin:0}.trc_related_container .videoCube .thumbBlock .static-text{position:absolute;z-index:1;margin:0;padding:5px;background-color:#000;color:#fff;display:block;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:400;text-align:left;text-decoration:none;opacity:.7}.trc_related_container .static-text.top{width:100%;top:0;padding:5px 0}.trc_related_container .static-text.bottom{width:100%;bottom:0;padding:2px 0}.trc-inplayer-rbox{background:#333;background:rgba(30,30,30,.9);*background:#333;bottom:0;position:absolute;height:300px;text-align:center}.trc-inplayer-rbox .trc_rbox_container{margin:50px auto 0;width:640px}.trc_rbox.trc-auto-size{width:100%;height:100%}.videoCube.thumbnail_under .thumbBlock{margin-left:0;margin-right:0}.videoCube.thumbnail_under .label-box-overlay{width:100%;height:100%;position:absolute;background:#000;opacity:.75;filter:alpha(opacity=75);top:0;_display:none}.videoCube.thumbnail_under .video-labels-anchor{width:100%;height:auto;position:absolute;z-index:1;left:0;bottom:0;min-height:2.58em;max-height:2.58em;padding-top:2px;padding-bottom:2px;_background-color:#CECECE;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-ms-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear;line-height:1.25em}.videoCube.thumbnail_under .video-labels-anchor span.video-title,.videoCube.thumbnail_under .video-labels-anchor span.branding{position:relative;z-index:1;padding:0 3px;margin:0}.videoCube.thumbnail_under .video-title{min-height:2.58em}.videoCube.thumbnail_under:hover .video-labels-anchor{opacity:1;max-height:6.45em}.trc-auto-size .trc_rbox_outer .trc_rbox_div{height:auto;width:auto}.trc-auto-size .trc_rbox_div .videoCube{height:auto}.trc-auto-size .trc_rbox_div .videoCube.trc-first-recommendation{margin-top:0}.trc_rbox .trc_rbox_outer .trc_rbox_div .videoCube.trc-first-in-row{margin-left:0}.trc_elastic .trc_rbox{width:auto}.trc_elastic .videoCube{overflow:hidden}.trc_elastic .videoCube .thumbBlock{display:block;background-color:transparent;background-position:center center;background-repeat:no-repeat;background-size:cover;position:absolute;display:inline-block;top:0;right:0;bottom:0;left:0;margin-left:0;margin-right:0}.trc_elastic .thumbBlock_holder{position:relative;width:100%}.trc_elastic .thumbnail_start .thumbBlock_holder{float:left;margin-right:10px}.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder{margin-right:0}.trc_elastic .videoCube_aspect{width:1px}.trc_elastic .trc_rbox .trc_rbox_div{height:auto}.trc_elastic .thumbnail_start .trc-pre-label{float:left;padding-right:10px}.trc_elastic .thumbnail_start.trc-split-label .trc-main-label{float:left;padding-left:10px}.trc_elastic .thumbnail_start .video-label-box{box-sizing:border-box}.trc_elastic .video-label-box{display:block}.trc_user_adChoice_btn{background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat scroll 0 0 rgba(255,255,255,1);border-radius:0 0 0 5px;width:16px;height:16px;position:absolute;right:0;top:0;z-index:9000;cursor:pointer;border-width:2px 0 2px 4px;border-style:solid;border-color:#fff;opacity:.7;background-size:contain;visibility:hidden}.videoCube:hover .trc_user_adChoice_btn,.videoCube_hover .trc_user_adChoice_btn{visibility:visible}.videoCube .trc_user_adChoice_btn_static{visibility:visible}.p-video-overlay-container{position:absolute;width:100%;height:100%;top:0;left:0;background-color:transparent}.p-video-overlay.p-video-overlay-show{display:flex}.p-video-overlay{display:none;background-color:#000;opacity:.7;width:100%;height:100%;flex-direction:column}.p-video-overlay-action{color:#fff;width:100%;direction:ltr;text-align:center;display:flex;justify-content:center;flex-direction:column}.p-video-overlay-action.p-video-back-action{height:34%}.p-video-back-action-label{font-family:Helvetica Neue;font-size:14px;font-weight:200;letter-spacing:1px}.p-video-overlay-action.p-video-goto-action{height:66%}.p-video-goto-action-url{font-family:Helvetica Neue;font-size:24px;font-weight:400;text-decoration:underline;margin-top:5px}.p-video-goto-action-label{font-family:Helvetica Neue;font-size:14px;font-weight:100;letter-spacing:1px}.trc_related_container .trc_clearer{clear:both;height:0;overflow:hidden;font-size:0;line-height:0;visibility:hidden}.link-adc{float:right!important}.trc-widget-footer .logoDiv{line-height:normal;padding-bottom:5px}.trc-widget-footer .link-adc a .trc_adc_wrapper,.trc_header_ext .link-adc a .trc_adc_wrapper{height:12px;width:18px;display:inline-block;padding-left:1px;margin-bottom:2px}.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_s_logo,.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_b_logo{vertical-align:middle;height:15px;display:inline-block;margin-top:-1px}.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{width:12px;height:14px;background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat;background-size:contain;vertical-align:middle}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_b_logo{width:77px;background:#fff url(//cdn.taboola.com/libtrc/static/thumbnails/0781f9c5a8637d1e162874f157460048.png) no-repeat!important;right:-1px;display:none;position:absolute}.trc_mobile_disclosure_link,.trc_mobile_attribution_link,.trc_mobile_adc_link{display:none}.trc_desktop_disclosure_link,.trc_desktop_attribution_link,.trc_desktop_adc_link{display:inline}@media screen and (max-width:767px){.trc_mobile_disclosure_link{display:inline}.trc_mobile_attribution_link{display:inline}.trc_mobile_adc_link{display:inline}.trc_desktop_disclosure_link{display:none}.trc_desktop_attribution_link{display:none}.trc_desktop_adc_link{display:none}}.trc_in_iframe .trc_mobile_attribution_link,.trc_in_iframe .trc_mobile_disclosure_link{display:inline}.trc_in_iframe .trc_desktop_attribution_link,.trc_in_iframe .trc_desktop_disclosure_link{display:none}.trc_related_container .logoDiv,.trc_related_container .trc_header_ext .logoDiv{float:right}.trc_related_container .logoDiv+.logoDiv{margin-right:2px}.trc_related_container .attribution-disclosure-link-sponsored,.trc_related_container .attribution-disclosure-link-hybrid{display:none}.trc_related_container .trc-content-sponsored .attribution-disclosure-link-sponsored,.trc-w2f.trc-content-sponsored .attribution-disclosure-link-sponsored{display:block}.trc_related_container .trc-content-hybrid .attribution-disclosure-link-hybrid,.trc-w2f.trc-content-hybrid .attribution-disclosure-link-hybrid{display:block}.trc_related_container .trc-widget-footer:hover a span,.trc_related_container .trc_header_ext:hover a span{text-decoration:underline!important}.logoDiv a span.trc_logos_v_align{display:inline-block!important;font-size:15px!important;line-height:1em!important;width:0!important}.trc_related_container .trc_header_ext:hover a span.trc_logos_v_align,.trc_related_container .trc_header_ext:hover a span.trc_adc_wrapper,.trc_related_container .trc-widget-footer:hover a span.trc_logos_v_align,.trc_related_container .trc-widget-footer:hover a span.trc_adc_wrapper{text-decoration:none!important}.trc_related_container{clear:both}.tbl-loading-spinner{width:100%;height:40px;background:url(//cdn.taboola.com/static/91/91a25024-792d-4b52-84e6-ad1478c3f552.gif) center center no-repeat;background-size:40px}.tbl-loading-spinner.tbl-loading-cards-placeholder{background:transparent;background-size:100%;height:auto;margin-top:40px}.tbl-placeholder-card{background:#f6f7f9;height:125px;overflow:hidden;position:relative;margin-bottom:48px}.tbl-placeholder-card:before{background-color:#f6f7f8;background-image:url(//cdn.taboola.com/static/91/9117a6d9-cbf1-4ea6-8caa-7461ce6554bc.gif);background-repeat:repeat-y;background-size:100% 1px;content:' ';display:block;height:100%}.tbl-img-placeholder.tbl-masker:before{position:absolute;content:'';display:block;width:540px;height:252px;background:#fff;top:-251px;right:0;opacity:0}.tbl-masker{position:absolute;width:calc(100% - 190px - 24px);background-color:#fff;box-sizing:content-box;border-color:#fff;border-style:solid;border-left-width:24px}.tbl-loading-placeholder-dir-rtl .tbl-masker{border-right-width:24px}.tbl-loading-placeholder-dir-rtl .tbl-first-row-top-margin{right:150px;left:auto}.tbl-loading-placeholder-dir-rtl .tbl-first-row-bottom-margin{right:150px;left:auto}.tbl-loading-placeholder-dir-rtl .tbl-second-row-bottom-margin{right:150px;left:auto}.tbl-loading-placeholder-dir-rtl .tbl-third-row-bottom-margin{right:150px;left:auto}.tbl-last-row-right-padding{top:83px;left:calc(30% + 130px);width:100%;height:15px;border-width:0}.tbl-loading-placeholder-dir-rtl .tbl-last-row-right-padding{left:auto;right:calc(30% + 130px)}.tbl-loading-placeholder-dir-rtl .tbl-first-row-right-padding{right:calc(30% + 130px);left:auto}.tbl-first-row-pl{height:18px;background-color:transparent;top:0;left:190px;border-top-width:11px;border-bottom-width:18px;z-index:1}.tbl-loading-placeholder-dir-rtl .tbl-first-row-pl{right:190px;left:auto}.tbl-second-row-pl{height:18px;background-color:transparent;top:47px;left:190px;border-top-width:0;border-bottom-width:18px;z-index:1}.tbl-loading-placeholder-dir-rtl .tbl-second-row-pl{right:190px;left:auto}.tbl-third-row-pl{height:15px;background-color:transparent;top:83px;left:190px;border-top-width:0;border-bottom-width:35px;z-index:1}.tbl-img-top-padding{display:none}.tbl-img-bottom-padding{display:none}.tbl-loading-placeholder-dir-rtl .tbl-third-row-pl{right:190px;left:auto}.tbl-first-col-padding{display:none}.tbl-second-col-padding{display:block;width:24px;height:100%;border-width:0;top:0;right:0}.tbl-loading-placeholder-dir-rtl .tbl-second-col-padding{left:0;right:auto}.render-late-effect.tbl-feed-container .thumbBlock{opacity:0;transition:opacity .75s}.render-late-effect.tbl-feed-container .thumbBlock[style*=background-image]{opacity:1}@media screen and (max-width:480px) and (min-width:0){.tbl-loading-spinner.tbl-loading-cards-placeholder{margin-top:8px}.tbl-placeholder-card{height:87px;margin-bottom:8px}.tbl-masker{width:calc(100% - 114px - 12px);border-left-width:12px}.tbl-loading-placeholder-dir-rtl .tbl-masker{border-right-width:12px}.tbl-first-row-pl{height:10px;left:114px;border-top-width:16px;border-bottom-width:10px}.tbl-second-row-pl{top:36px;height:10px;left:114px;border-top-width:0;border-bottom-width:11px}.tbl-third-row-pl{top:57px;height:8px;left:114px;border-top-width:0;border-bottom-width:22px}.tbl-last-row-right-padding{top:57px;height:8px}.tbl-img-top-padding{display:block;top:0;width:100%;height:10px;border-width:0}.tbl-img-bottom-padding{display:block;width:100%;height:10px;bottom:0;border-width:0}.tbl-first-col-padding{display:block;width:8px;height:100%;top:0;left:0;border-width:0}.tbl-loading-placeholder-dir-rtl .tbl-first-col-padding{left:auto;right:0}.tbl-second-col-padding{display:none}.tbl-loading-placeholder-dir-rtl .tbl-first-row-pl{right:114px;left:auto}.tbl-loading-placeholder-dir-rtl .tbl-second-row-pl{right:114px;left:auto}.tbl-loading-placeholder-dir-rtl .tbl-third-row-pl{right:114px;left:auto}}.tbl-hidden{display:none!important}.tbl-batch-anchor{width:100%;height:1px}.iw_video_frame .trc_rbox_div{overflow:hidden}.trc-w2f .trc_rbox .trc_rbox_header,.trc-w2f .trc_rbox .trc-widget-footer{display:none!important}"});
            if (e.global["smart-ellipsis"] && !TRC.ellipsisListening && (TRC.listen("ellipsis", e._repaintEllipsis.trcBind(e)), TRC.listen("allrender", e._repaintEllipsis.trcBind(e)), TRC.listen("batchrender", e._repaintEllipsis.trcBind(e)), TRC.ellipsisListening = !0), !e.invisible) return;
            TRC.dom.onReady(function () {
                div ? (div.innerHTML = "", div.style.display = "none") : (div = doc.createElement("div"), doc.body.appendChild(div).style.display = "none"), e.internalDrawRBox({
                    mode: "rbox-tracking",
                    container: div
                })
            })
        } catch (e) {
            __trcError("Error in libtrc initialization", e)
        }
    }, TRC.pConsole("", "time", "impl file loaded", ""), TRC.utm.push((new Date).getTime() - TRC.utm.start), TRC.tlf && console.timeStamp("call trcReady"), TRC.trcReady()
}(window, document);