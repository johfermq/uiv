webpackJsonp([11],{JJTE:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("markdown-wrapper",[t("h1",{attrs:{id:"progressbar"}},[s._v("ProgressBar "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbar","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("blockquote",[t("p",[s._v("Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.")])]),s._v(" "),t("h2",{attrs:{id:"example"}},[s._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Default progress bar.")]),s._v(" "),t("progress-bar-example",{ref:"progress-bar-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("66")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"with-label"}},[s._v("With Label "),t("a",{staticClass:"header-anchor",attrs:{href:"#with-label","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("To ensure that the label text remains legible even for low percentages, consider use "),t("code",{pre:!0},[s._v("min-width")]),s._v(" prop.")]),s._v(" "),t("progress-bar-with-label",{ref:"progress-bar-with-label"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("Default Label"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("Custom Label"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label-text")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Loading......Please wait."')]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("Minimum Width"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("min-width")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("/>")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress1")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("66")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-with-label.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"contextual-alternatives"}},[s._v("Contextual Alternatives "),t("a",{staticClass:"header-anchor",attrs:{href:"#contextual-alternatives","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Progress bars use some of the same button and alert classes for consistent styles.")]),s._v(" "),t("progress-bar-contextual-alternatives",{ref:"progress-bar-contextual-alternatives"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress40"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress20"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress60"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress80"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v("/>")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress20")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress40")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress60")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress80")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-contextual-alternatives.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"striped"}},[s._v("Striped "),t("a",{staticClass:"header-anchor",attrs:{href:"#striped","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Uses a gradient to create a striped effect. Not available in IE9 and below.")]),s._v(" "),t("progress-bar-striped",{ref:"progress-bar-striped"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress40"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress20"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress60"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress80"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v("/>")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress20")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress40")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress60")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("60")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress80")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-striped.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"animated"}},[s._v("Animated "),t("a",{staticClass:"header-anchor",attrs:{href:"#animated","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Animate the stripes right to left. Not available in IE9 and below.")]),s._v(" "),t("progress-bar-animated",{ref:"progress-bar-animated"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("active")]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-animated.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"stacked"}},[s._v("Stacked "),t("a",{staticClass:"header-anchor",attrs:{href:"#stacked","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Place multiple "),t("code",{pre:!0},[s._v("<progress-bar-stack>")]),s._v(" into the same "),t("code",{pre:!0},[s._v("<progress-bar>")]),s._v(" to stack them.")]),s._v(" "),t("progress-bar-stacked",{ref:"progress-bar-stacked"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar-stack")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress35"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar-stack")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress20"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("striped")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar-stack")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"progress10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v("/>")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("progress-bar")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress20")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress35")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("35")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("progress10")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- progress-bar-stacked.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h2",{attrs:{id:"progressbarjs"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/release/src/components/progressbar/ProgressBar.js"}},[s._v("ProgressBar.js")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbarjs","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h3",{attrs:{id:"props"}},[s._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Required")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("v-model")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("✔")]),s._v(" "),t("td",[s._v("Current progress (0 ~ 100).")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("label")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Show label on progress bar.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("label-text")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Custom label text.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("min-width")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Apply a minimum width to the progress bar, useful when showing label and small current value.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("type")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Progress bar type, support success / info / warning / danger. Or you can add custom types.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("striped")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Apply striped style.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("active")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Apply active to striped style.")])])])])]),t("h3",{attrs:{id:"slots"}},[s._v("Slots "),t("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),s._v(" "),t("td",[s._v("Use this slot if need stacked progress bar, see example in the code panel above.")])])])])]),t("h2",{attrs:{id:"progressbarstackjs"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/release/src/components/progressbar/ProgressBarStack.js"}},[s._v("ProgressBarStack.js")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbarstackjs","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("ProgressBar")]),s._v(" and "),t("code",{pre:!0},[s._v("ProgressBarStack")]),s._v(" shared same props.")])],1)},staticRenderFns:[]},e=t("VU/8")({components:{"progress-bar-example":{template:'<div class="markdown-live-example">\n  <progress-bar v-model="progress"/>\n</div>',data:function(){return{progress:66}}},"progress-bar-with-label":{template:'<div class="markdown-live-example">\n  <section>\n    <h4>Default Label</h4>\n    <progress-bar v-model="progress" label/>\n    <h4>Custom Label</h4>\n    <progress-bar v-model="progress" label label-text="Loading......Please wait."/>\n    <h4>Minimum Width</h4>\n    <progress-bar v-model="progress1" min-width label/>\n  </section>\n</div>',data:function(){return{progress1:1,progress:66}}},"progress-bar-contextual-alternatives":{template:'<div class="markdown-live-example">\n  <section>\n    <progress-bar v-model="progress40" type="success"/>\n    <progress-bar v-model="progress20" type="info"/>\n    <progress-bar v-model="progress60" type="warning"/>\n    <progress-bar v-model="progress80" type="danger"/>\n  </section>\n</div>',data:function(){return{progress20:20,progress40:40,progress60:60,progress80:80}}},"progress-bar-striped":{template:'<div class="markdown-live-example">\n  <section>\n    <progress-bar v-model="progress40" type="success" striped/>\n    <progress-bar v-model="progress20" type="info" striped/>\n    <progress-bar v-model="progress60" type="warning" striped/>\n    <progress-bar v-model="progress80" type="danger" striped/>\n  </section>\n</div>',data:function(){return{progress20:20,progress40:40,progress60:60,progress80:80}}},"progress-bar-animated":{template:'<div class="markdown-live-example">\n  <progress-bar v-model="progress" striped active/>\n</div>',data:function(){return{progress:40}}},"progress-bar-stacked":{template:'<div class="markdown-live-example">\n  <progress-bar>\n    <progress-bar-stack v-model="progress35" type="success"/>\n    <progress-bar-stack v-model="progress20" type="warning" striped/>\n    <progress-bar-stack v-model="progress10" type="danger"/>\n  </progress-bar>\n</div>',data:function(){return{progress20:20,progress35:35,progress10:10}}}}},r,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=11.27b3356f0a253bad7da2.js.map