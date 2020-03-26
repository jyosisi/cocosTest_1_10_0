__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof __require && __require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.text = "";
        this.label.string = "";
        var self = this;
        window.addEventListener("message", function(e) {
          var data = e.data;
          console.log("--------------this is web message--------------", data);
          -1 != data.indexOf("ToGame:") && (self.label.string = data);
        });
      },
      update: function update(dt) {},
      onEditDidEnded: function onEditDidEnded(editbox, customEventData) {
        this.text = editbox.string;
      },
      onBtnClick: function onBtnClick() {
        console.log("-------web--------onClick-----\x3e>cocos JS-------------", window.isNative);
        window.isNative ? document.location = "testkey://" + this.text : parent.postMessage("ToHall:" + this.text, "*");
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld" ]);