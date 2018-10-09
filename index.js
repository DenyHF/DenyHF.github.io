var MG = [];
var t = function (e, t) {
    MG.blocker = MG.blocker || {
        states: {
            ABP_DETECTION_DISABLED: -2,
            ABP_NOT_DETECTED: 0,
            ABP_DETECTED: 1
        },
        createBlockDetectionDiv: function(e) {
            var i = t.createElement("div");
            return i.className = e, i.appendChild(t.createTextNode(".")), t.documentElement.appendChild(i), i
        },
        isBlockDetectedOnDiv: function(e) {
            return e.offsetHeight ? (MG.pConsole("page", "warn", "No AdBlockPlus detected on div with class: " + e.className), !1) : (MG.pConsole("page", "warn", "AdBlockPlus detected on div with class: " + e.className), !0)
        },
        isBlockDetectedOnClassNames: function(e) {
            var i, r = e.length,
                o;
            for (i = 0; i < r; i++)
                if (e[i]) {
                    o = this.createBlockDetectionDiv(e[i]);
                    try {
                        if (this.isBlockDetectedOnDiv(o)) return !0
                    } catch (e) {
                        MG.pConsole("page", "error", "unable to inspect offsetHeight of div with class: " + o.className)
                    } finally {
                        t.documentElement.removeChild(o)
                    }
                }
            return !1
        },
        getBlockedState: function(e, t) {
            return this.blockedState !== this.states.ABP_DETECTED || t ? (this.blockedState = e && this.isBlockDetectedOnClassNames(e) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED, this.blockedState) : this.blockedState
        }
    }
}(window, document);
alert(MG.blocker.getBlockedState());