/*!

Holder - client side image placeholders
Version 2.9.4+cabil
漏 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
! function(e) {
	if (e.document) {
		var t = e.document;
		t.querySelectorAll || (t.querySelectorAll = function(n) {
				var r, i = t.createElement("style"),
					o = [];
				for (t.documentElement.firstChild.appendChild(i), t._qsa = [], i.styleSheet.cssText = n +
					"{x-qsa:expression(document._qsa && document._qsa.push(this))}", e.scrollBy(0, 0), i.parentNode.removeChild(i); t
					._qsa.length;) r = t._qsa.shift(), r.style.removeAttribute("x-qsa"), o.push(r);
				return t._qsa = null, o
			}), t.querySelector || (t.querySelector = function(e) {
				var n = t.querySelectorAll(e);
				return n.length ? n[0] : null
			}), t.getElementsByClassName || (t.getElementsByClassName = function(e) {
				return e = String(e).replace(/^|\s+/g, "."), t.querySelectorAll(e)
			}), Object.keys || (Object.keys = function(e) {
				if (e !== Object(e)) throw TypeError("Object.keys called on non-object");
				var t, n = [];
				for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
				return n
			}), Array.prototype.forEach || (Array.prototype.forEach = function(e) {
				if (void 0 === this || null === this) throw TypeError();
				var t = Object(this),
					n = t.length >>> 0;
				if ("function" != typeof e) throw TypeError();
				var r, i = arguments[1];
				for (r = 0; r < n; r++) r in t && e.call(i, t[r], r, t)
			}),
			function(e) {
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				e.atob = e.atob || function(e) {
					e = String(e);
					var n, r = 0,
						i = [],
						o = 0,
						a = 0;
					if (e = e.replace(/\s/g, ""), e.length % 4 === 0 && (e = e.replace(/=+$/, "")), e.length % 4 === 1) throw Error(
						"InvalidCharacterError");
					if (/[^+\/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");
					for (; r < e.length;) n = t.indexOf(e.charAt(r)), o = o << 6 | n, a += 6, 24 === a && (i.push(String.fromCharCode(
							o >> 16 & 255)), i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o)), a = 0, o = 0),
						r += 1;
					return 12 === a ? (o >>= 4, i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2, i.push(String.fromCharCode(
						o >> 8 & 255)), i.push(String.fromCharCode(255 & o))), i.join("")
				}, e.btoa = e.btoa || function(e) {
					e = String(e);
					var n, r, i, o, a, s, l, h = 0,
						u = [];
					if (/[^\x00-\xFF]/.test(e)) throw Error("InvalidCharacterError");
					for (; h < e.length;) n = e.charCodeAt(h++), r = e.charCodeAt(h++), i = e.charCodeAt(h++), o = n >> 2, a = (3 & n) <<
						4 | r >> 4, s = (15 & r) << 2 | i >> 6, l = 63 & i, h === e.length + 2 ? (s = 64, l = 64) : h === e.length + 1 &&
						(l = 64), u.push(t.charAt(o), t.charAt(a), t.charAt(s), t.charAt(l));
					return u.join("")
				}
			}(e), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(e) {
				var t = this.__proto__ || this.constructor.prototype;
				return e in this && (!(e in t) || t[e] !== this[e])
			}),
			function() {
				if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function() {
						return (new Date).getTime()
					}, "now" in e.performance == !1) {
					var t = Date.now();
					performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), e.performance
						.now = function() {
							return Date.now() - t
						}
				}
			}(), e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? ! function(e) {
				e.requestAnimationFrame = function(t) {
					return webkitRequestAnimationFrame(function() {
						t(e.performance.now())
					})
				}, e.cancelAnimationFrame = e.webkitCancelAnimationFrame
			}(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? ! function(e) {
				e.requestAnimationFrame = function(t) {
					return mozRequestAnimationFrame(function() {
						t(e.performance.now())
					})
				}, e.cancelAnimationFrame = e.mozCancelAnimationFrame
			}(e) : ! function(e) {
				e.requestAnimationFrame = function(t) {
					return e.setTimeout(t, 1e3 / 60)
				}, e.cancelAnimationFrame = e.clearTimeout
			}(e))
	}
}(this),
function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define([], t) : "object" == typeof exports ? exports.Holder = t() : e.Holder = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.p = "", t(0)
	}([function(e, t, n) {
		e.exports = n(1)
	}, function(e, t, n) {
		(function(t) {
			function r(e, t, n, r) {
				var a = i(n.substr(n.lastIndexOf(e.domain)), e);
				a && o({
					mode: null,
					el: r,
					flags: a,
					engineSettings: t
				})
			}

			function i(e, t) {
				var n = {
						theme: k(O.settings.themes.gray, null),
						stylesheets: t.stylesheets,
						instanceOptions: t
					},
					r = e.indexOf("?"),
					i = [e];
				r !== -1 && (i = [e.slice(0, r), e.slice(r + 1)]);
				var o = i[0].split("/");
				n.holderURL = e;
				var a = o[1],
					s = a.match(/([\d]+p?)x([\d]+p?)/);
				if (!s) return !1;
				if (n.fluid = a.indexOf("p") !== -1, n.dimensions = {
						width: s[1].replace("p", "%"),
						height: s[2].replace("p", "%")
					}, 2 === i.length) {
					var l = v.parse(i[1]);
					if (w.truthy(l.ratio)) {
						n.fluid = !0;
						var h = parseFloat(n.dimensions.width.replace("%", "")),
							u = parseFloat(n.dimensions.height.replace("%", ""));
						u = Math.floor(100 * (u / h)), h = 100, n.dimensions.width = h + "%", n.dimensions.height = u + "%"
					}
					if (n.auto = w.truthy(l.auto), l.bg && (n.theme.bg = w.parseColor(l.bg)), l.fg && (n.theme.fg = w.parseColor(
							l.fg)), l.bg && !l.fg && (n.autoFg = !0), l.theme && n.instanceOptions.themes.hasOwnProperty(l.theme) && (n
							.theme = k(n.instanceOptions.themes[l.theme], null)), l.text && (n.text = l.text), l.textmode && (n.textmode =
							l.textmode), l.size && (n.size = l.size), l.font && (n.font = l.font), l.align && (n.align = l.align), l.lineWrap &&
						(n.lineWrap = l.lineWrap), n.nowrap = w.truthy(l.nowrap), n.outline = w.truthy(l.outline), w.truthy(l.random)
					) {
						O.vars.cache.themeKeys = O.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);
						var c = O.vars.cache.themeKeys[0 | Math.random() * O.vars.cache.themeKeys.length];
						n.theme = k(n.instanceOptions.themes[c], null)
					}
				}
				return n
			}

			function o(e) {
				var t = e.mode,
					n = e.el,
					r = e.flags,
					i = e.engineSettings,
					o = r.dimensions,
					s = r.theme,
					l = o.width + "x" + o.height;
				t = null == t ? r.fluid ? "fluid" : "image" : t;
				var c = /holder_([a-z]+)/g,
					d = !1;
				if (null != r.text && (s.text = r.text, "object" === n.nodeName.toLowerCase())) {
					for (var f = s.text.split("\\n"), p = 0; p < f.length; p++) f[p] = w.encodeHtmlEntity(f[p]);
					s.text = f.join("\\n")
				}
				if (s.text) {
					var g = s.text.match(c);
					null !== g && g.forEach(function(e) {
						"holder_dimensions" === e && (s.text = s.text.replace(e, l))
					})
				}
				var m = r.holderURL,
					v = k(i, null);
				if (r.font && (s.font = r.font, !v.noFontFallback && "img" === n.nodeName.toLowerCase() && O.setup.supportsCanvas &&
						"svg" === v.renderer && (v = k(v, {
							renderer: "canvas"
						}))), r.font && "canvas" == v.renderer && (v.reRender = !0), "background" == t) null == n.getAttribute(
					"data-background-src") && x.setAttr(n, {
					"data-background-src": m
				});
				else {
					var y = {};
					y[O.vars.dataAttr] = m, x.setAttr(n, y)
				}
				r.theme = s, n.holderData = {
					flags: r,
					engineSettings: v
				}, "image" != t && "fluid" != t || x.setAttr(n, {
					alt: s.text ? d ? s.text : s.text + " [" + l + "]" : l
				});
				var b = {
					mode: t,
					el: n,
					holderSettings: {
						dimensions: o,
						theme: s,
						flags: r
					},
					engineSettings: v
				};
				"image" == t ? (r.auto || (n.style.width = o.width + "px", n.style.height = o.height + "px"), "html" == v.renderer ?
					n.style.backgroundColor = s.bg : (a(b), "exact" == r.textmode && (n.holderData.resizeUpdate = !0, O.vars.resizableImages
						.push(n), h(n)))) : "background" == t && "html" != v.renderer ? a(b) : "fluid" == t && (n.holderData.resizeUpdate = !
					0, "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height +
						"px"), "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width +
						"px"), "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display =
						"block"), u(n), "html" == v.renderer ? n.style.backgroundColor = s.bg : (O.vars.resizableImages.push(n), h(
						n)))
			}

			function a(e) {
				function n() {
					var t = null;
					switch (l.renderer) {
						case "canvas":
							t = E(u, e);
							break;
						case "svg":
							t = C(u, e);
							break;
						default:
							throw "Holder: invalid renderer: " + l.renderer
					}
					return t
				}
				var r = null,
					i = e.mode,
					o = e.el,
					a = e.holderSettings,
					l = e.engineSettings;
				switch (l.renderer) {
					case "svg":
						if (!O.setup.supportsSVG) return;
						break;
					case "canvas":
						if (!O.setup.supportsCanvas) return;
						break;
					default:
						return
				}
				var h = {
						width: a.dimensions.width,
						height: a.dimensions.height,
						theme: a.theme,
						flags: a.flags
					},
					u = s(h);
				if (r = n(), null == r) throw "Holder: couldn't render placeholder";
				"background" == i ? (o.style.backgroundImage = "url(" + r + ")", l.noBackgroundSize || (o.style.backgroundSize =
					h.width + "px " + h.height + "px")) : ("img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
					src: r
				}) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
					data: r,
					type: "image/svg+xml"
				}), l.reRender && t.setTimeout(function() {
					var e = n();
					if (null == e) throw "Holder: couldn't render placeholder";
					"img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
						src: e
					}) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
						data: e,
						type: "image/svg+xml"
					})
				}, 150)), x.setAttr(o, {
					"data-holder-rendered": !0
				})
			}

			function s(e) {
				function t(e, t, n, r) {
					t.width = n, t.height = r, e.width = Math.max(e.width, t.width), e.height += t.height
				}
				var n = O.defaults.size;
				switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size), e.font = {
						family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
						size: l(e.width, e.height, n, O.defaults.scale),
						units: e.theme.units ? e.theme.units : O.defaults.units,
						weight: e.theme.fontweight ? e.theme.fontweight : "bold"
					}, e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height), e.noWrap = e.theme.nowrap || e.flags
					.nowrap, e.align = e.theme.align || e.flags.align || "center", e.flags.textmode) {
					case "literal":
						e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
						break;
					case "exact":
						if (!e.flags.exactDimensions) break;
						e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height)
				}
				var r = e.flags.lineWrap || O.setup.lineWrapRatio,
					i = e.width * r,
					o = i,
					a = new y({
						width: e.width,
						height: e.height
					}),
					s = a.Shape,
					h = new s.Rect("holderBg", {
						fill: e.theme.bg
					});
				if (h.resize(e.width, e.height), a.root.add(h), e.flags.outline) {
					var u = new S(h.properties.fill);
					u = u.lighten(u.lighterThan("7f7f7f") ? -.1 : .1), h.properties.outline = {
						fill: u.toHex(!0),
						width: 2
					}
				}
				var c = e.theme.fg;
				if (e.flags.autoFg) {
					var d = new S(h.properties.fill),
						f = new S("fff"),
						p = new S("000", {
							alpha: .285714
						});
					c = d.blendAlpha(d.lighterThan("7f7f7f") ? p : f).toHex(!0)
				}
				var g = new s.Group("holderTextGroup", {
					text: e.text,
					align: e.align,
					font: e.font,
					fill: c
				});
				g.moveTo(null, null, 1), a.root.add(g);
				var m = g.textPositionData = z(a);
				if (!m) throw "Holder: staging fallback not supported yet.";
				g.properties.leading = m.boundingBox.height;
				var v = null,
					w = null;
				if (m.lineCount > 1) {
					var b, x = 0,
						A = 0,
						C = 0;
					w = new s.Group("line" + C), "left" !== e.align && "right" !== e.align || (o = e.width * (1 - 2 * (1 - r)));
					for (var E = 0; E < m.words.length; E++) {
						var k = m.words[E];
						v = new s.Text(k.text);
						var T = "\\n" == k.text;
						!e.noWrap && (x + k.width >= o || T === !0) && (t(g, w, x, g.properties.leading), g.add(w), x = 0, A += g.properties
							.leading, C += 1, w = new s.Group("line" + C), w.y = A), T !== !0 && (v.moveTo(x, 0), x += m.spaceWidth +
							k.width, w.add(v))
					}
					if (t(g, w, x, g.properties.leading), g.add(w), "left" === e.align) g.moveTo(e.width - i, null, null);
					else if ("right" === e.align) {
						for (b in g.children) w = g.children[b], w.moveTo(e.width - w.width, null, null);
						g.moveTo(0 - (e.width - i), null, null)
					} else {
						for (b in g.children) w = g.children[b], w.moveTo((g.width - w.width) / 2, null, null);
						g.moveTo((e.width - g.width) / 2, null, null)
					}
					g.moveTo(null, (e.height - g.height) / 2, null), (e.height - g.height) / 2 < 0 && g.moveTo(null, 0, null)
				} else v = new s.Text(e.text), w = new s.Group("line0"), w.add(v), g.add(w), "left" === e.align ? g.moveTo(e.width -
					i, null, null) : "right" === e.align ? g.moveTo(0 - (e.width - i), null, null) : g.moveTo((e.width - m.boundingBox
					.width) / 2, null, null), g.moveTo(null, (e.height - m.boundingBox.height) / 2, null);
				return a
			}

			function l(e, t, n, r) {
				var i = parseInt(e, 10),
					o = parseInt(t, 10),
					a = Math.max(i, o),
					s = Math.min(i, o),
					l = .8 * Math.min(s, a * r);
				return Math.round(Math.max(n, l))
			}

			function h(e) {
				var t;
				t = null == e || null == e.nodeType ? O.vars.resizableImages : [e];
				for (var n = 0, r = t.length; n < r; n++) {
					var i = t[n];
					if (i.holderData) {
						var o = i.holderData.flags,
							s = T(i);
						if (s) {
							if (!i.holderData.resizeUpdate) continue;
							if (o.fluid && o.auto) {
								var l = i.holderData.fluidConfig;
								switch (l.mode) {
									case "width":
										s.height = s.width / l.ratio;
										break;
									case "height":
										s.width = s.height * l.ratio
								}
							}
							var h = {
								mode: "image",
								holderSettings: {
									dimensions: s,
									theme: o.theme,
									flags: o
								},
								el: i,
								engineSettings: i.holderData.engineSettings
							};
							"exact" == o.textmode && (o.exactDimensions = s, h.holderSettings.dimensions = o.dimensions), a(h)
						} else f(i)
					}
				}
			}

			function u(e) {
				if (e.holderData) {
					var t = T(e);
					if (t) {
						var n = e.holderData.flags,
							r = {
								fluidHeight: "%" == n.dimensions.height.slice(-1),
								fluidWidth: "%" == n.dimensions.width.slice(-1),
								mode: null,
								initialDimensions: t
							};
						r.fluidWidth && !r.fluidHeight ? (r.mode = "width", r.ratio = r.initialDimensions.width / parseFloat(n.dimensions
							.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height", r.ratio = parseFloat(n.dimensions.width) /
							r.initialDimensions.height), e.holderData.fluidConfig = r
					} else f(e)
				}
			}

			function c() {
				var e, n = [],
					r = Object.keys(O.vars.invisibleImages);
				r.forEach(function(t) {
					e = O.vars.invisibleImages[t], T(e) && "img" == e.nodeName.toLowerCase() && (n.push(e), delete O.vars.invisibleImages[
						t])
				}), n.length && F.run({
					images: n
				}), setTimeout(function() {
					t.requestAnimationFrame(c)
				}, 10)
			}

			function d() {
				O.vars.visibilityCheckStarted || (t.requestAnimationFrame(c), O.vars.visibilityCheckStarted = !0)
			}

			function f(e) {
				e.holderData.invisibleId || (O.vars.invisibleId += 1, O.vars.invisibleImages["i" + O.vars.invisibleId] = e, e.holderData
					.invisibleId = O.vars.invisibleId)
			}

			function p(e) {
				O.vars.debounceTimer || e.call(this), O.vars.debounceTimer && t.clearTimeout(O.vars.debounceTimer), O.vars.debounceTimer =
					t.setTimeout(function() {
						O.vars.debounceTimer = null, e.call(this)
					}, O.setup.debounce)
			}

			function g() {
				p(function() {
					h(null)
				})
			}
			var m = n(2),
				v = n(3),
				y = n(6),
				w = n(7),
				b = n(8),
				x = n(9),
				S = n(10),
				A = n(11),
				C = n(12),
				E = n(15),
				k = w.extend,
				T = w.dimensionCheck,
				j = A.svg_ns,
				F = {
					version: A.version,
					addTheme: function(e, t) {
						return null != e && null != t && (O.settings.themes[e] = t), delete O.vars.cache.themeKeys, this
					},
					addImage: function(e, t) {
						var n = x.getNodeArray(t);
						return n.forEach(function(t) {
							var n = x.newEl("img"),
								r = {};
							r[O.setup.dataAttr] = e, x.setAttr(n, r), t.appendChild(n)
						}), this
					},
					setResizeUpdate: function(e, t) {
						e.holderData && (e.holderData.resizeUpdate = !!t, e.holderData.resizeUpdate && h(e))
					},
					run: function(e) {
						e = e || {};
						var n = {},
							a = k(O.settings, e);
						O.vars.preempted = !0, O.vars.dataAttr = a.dataAttr || O.setup.dataAttr, n.renderer = a.renderer ? a.renderer :
							O.setup.renderer, O.setup.renderers.join(",").indexOf(n.renderer) === -1 && (n.renderer = O.setup.supportsSVG ?
								"svg" : O.setup.supportsCanvas ? "canvas" : "html");
						var s = x.getNodeArray(a.images),
							l = x.getNodeArray(a.bgnodes),
							h = x.getNodeArray(a.stylenodes),
							u = x.getNodeArray(a.objects);
						return n.stylesheets = [], n.svgXMLStylesheet = !0, n.noFontFallback = !!a.noFontFallback, n.noBackgroundSize = !
							!a.noBackgroundSize, h.forEach(function(e) {
								if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
									var t = e.attributes.href.value,
										r = x.newEl("a");
									r.href = t;
									var i = r.protocol + "//" + r.host + r.pathname + r.search;
									n.stylesheets.push(i)
								}
							}), l.forEach(function(e) {
								if (t.getComputedStyle) {
									var r = t.getComputedStyle(e, null).getPropertyValue("background-image"),
										s = e.getAttribute("data-background-src"),
										l = s || r,
										h = null,
										u = a.domain + "/",
										c = l.indexOf(u);
									if (0 === c) h = l;
									else if (1 === c && "?" === l[0]) h = l.slice(1);
									else {
										var d = l.substr(c).match(/([^\"]*)"?\)/);
										if (null !== d) h = d[1];
										else if (0 === l.indexOf("url(")) throw "Holder: unable to parse background URL: " + l
									}
									if (h) {
										var f = i(h, a);
										f && o({
											mode: "background",
											el: e,
											flags: f,
											engineSettings: n
										})
									}
								}
							}), u.forEach(function(e) {
								var t = {};
								try {
									t.data = e.getAttribute("data"), t.dataSrc = e.getAttribute(O.vars.dataAttr)
								} catch (i) {}
								var o = null != t.data && 0 === t.data.indexOf(a.domain),
									s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain);
								o ? r(a, n, t.data, e) : s && r(a, n, t.dataSrc, e)
							}), s.forEach(function(e) {
								var t = {};
								try {
									t.src = e.getAttribute("src"), t.dataSrc = e.getAttribute(O.vars.dataAttr), t.rendered = e.getAttribute(
										"data-holder-rendered")
								} catch (i) {}
								var o = null != t.src,
									s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain),
									l = null != t.rendered && "true" == t.rendered;
								o ? 0 === t.src.indexOf(a.domain) ? r(a, n, t.src, e) : s && (l ? r(a, n, t.dataSrc, e) : ! function(e,
									t, n, i, o) {
									w.imageExists(e, function(e) {
										e || r(t, n, i, o)
									})
								}(t.src, a, n, t.dataSrc, e)) : s && r(a, n, t.dataSrc, e)
							}), this
					}
				},
				O = {
					settings: {
						domain: "holder.js",
						images: "img",
						objects: "object",
						bgnodes: "body .holderjs",
						stylenodes: "head link.holderjs",
						themes: {
							gray: {
								bg: "#EEEEEE",
								fg: "#AAAAAA"
							},
							social: {
								bg: "#3a5a97",
								fg: "#FFFFFF"
							},
							industrial: {
								bg: "#434A52",
								fg: "#C2F200"
							},
							sky: {
								bg: "#0D8FDB",
								fg: "#FFFFFF"
							},
							vine: {
								bg: "#39DBAC",
								fg: "#1E292C"
							},
							lava: {
								bg: "#F8591A",
								fg: "#1C2846"
							}
						}
					},
					defaults: {
						size: 10,
						units: "pt",
						scale: 1 / 16
					}
				},
				z = function() {
					var e = null,
						t = null,
						n = null;
					return function(r) {
						var i = r.root;
						if (O.setup.supportsSVG) {
							var o = !1,
								a = function(e) {
									return document.createTextNode(e)
								};
							null != e && e.parentNode === document.body || (o = !0), e = b.initSVG(e, i.properties.width, i.properties
								.height), e.style.display = "block", o && (t = x.newEl("text", j), n = a(null), x.setAttr(t, {
									x: 0
								}), t.appendChild(n), e.appendChild(t), document.body.appendChild(e), e.style.visibility = "hidden", e.style
								.position = "absolute", e.style.top = "-100%", e.style.left = "-100%");
							var s = i.children.holderTextGroup,
								l = s.properties;
							x.setAttr(t, {
								y: l.font.size,
								style: w.cssProps({
									"font-weight": l.font.weight,
									"font-size": l.font.size + l.font.units,
									"font-family": l.font.family
								})
							}), n.nodeValue = l.text;
							var h = t.getBBox(),
								u = Math.ceil(h.width / i.properties.width),
								c = l.text.split(" "),
								d = l.text.match(/\\n/g);
							u += null == d ? 0 : d.length, n.nodeValue = l.text.replace(/[ ]+/g, "");
							var f = t.getComputedTextLength(),
								p = h.width - f,
								g = Math.round(p / Math.max(1, c.length - 1)),
								m = [];
							if (u > 1) {
								n.nodeValue = "";
								for (var v = 0; v < c.length; v++)
									if (0 !== c[v].length) {
										n.nodeValue = w.decodeHtmlEntity(c[v]);
										var y = t.getBBox();
										m.push({
											text: c[v],
											width: y.width
										})
									}
							}
							return e.style.display = "none", {
								spaceWidth: g,
								lineCount: u,
								boundingBox: h,
								words: m
							}
						}
						return !1
					}
				}();
			for (var D in O.flags) O.flags.hasOwnProperty(D) && (O.flags[D].match = function(e) {
				return e.match(this.regex)
			});
			O.setup = {
					renderer: "html",
					debounce: 100,
					ratio: 1,
					supportsCanvas: !1,
					supportsSVG: !1,
					lineWrapRatio: .9,
					dataAttr: "data-src",
					renderers: ["html", "canvas", "svg"]
				}, O.vars = {
					preempted: !1,
					resizableImages: [],
					invisibleImages: {},
					invisibleId: 0,
					visibilityCheckStarted: !1,
					debounceTimer: null,
					cache: {}
				},
				function() {
					var e = x.newEl("canvas");
					e.getContext && e.toDataURL("image/png").indexOf("data:image/png") != -1 && (O.setup.renderer = "canvas", O.setup
						.supportsCanvas = !0), document.createElementNS && document.createElementNS(j, "svg").createSVGRect && (O.setup
						.renderer = "svg", O.setup.supportsSVG = !0)
				}(), d(), m && m(function() {
					O.vars.preempted || F.run(), t.addEventListener ? (t.addEventListener("resize", g, !1), t.addEventListener(
							"orientationchange", g, !1)) : t.attachEvent("onresize", g), "object" == typeof t.Turbolinks && t.document
						.addEventListener("page:change", function() {
							F.run()
						})
				}), e.exports = F
		}).call(t, function() {
			return this
		}())
	}, function(e, t) {
		function n(e) {
			function t(e) {
				if (!x) {
					if (!a.body) return i(t);
					for (x = !0; e = S.shift();) i(e)
				}
			}

			function n(e) {
				(w || e.type === l || a[d] === c) && (r(), t())
			}

			function r() {
				w ? (a[y](m, n, h), e[y](l, n, h)) : (a[p](v, n), e[p](u, n))
			}

			function i(e, t) {
				setTimeout(e, +t >= 0 ? t : 1)
			}

			function o(e) {
				x ? i(e) : S.push(e)
			}
			null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded",
				function C() {
					document.removeEventListener("DOMContentLoaded", C, !1), document.readyState = "complete"
				}, !1), document.readyState = "loading");
			var a = e.document,
				s = a.documentElement,
				l = "load",
				h = !1,
				u = "on" + l,
				c = "complete",
				d = "readyState",
				f = "attachEvent",
				p = "detachEvent",
				g = "addEventListener",
				m = "DOMContentLoaded",
				v = "onreadystatechange",
				y = "removeEventListener",
				w = g in a,
				b = h,
				x = h,
				S = [];
			if (a[d] === c) i(t);
			else if (w) a[g](m, n, h), e[g](l, n, h);
			else {
				a[f](v, n), e[f](u, n);
				try {
					b = null == e.frameElement && s
				} catch (A) {}
				b && b.doScroll && ! function E() {
					if (!x) {
						try {
							b.doScroll("left")
						} catch (e) {
							return i(E, 50)
						}
						r(), t()
					}
				}()
			}
			return o.version = "1.4.0", o.isReady = function() {
				return x
			}, o
		}
		e.exports = "undefined" != typeof window && n(window)
	}, function(e, t, n) {
		var r = encodeURIComponent,
			i = decodeURIComponent,
			o = n(4),
			a = n(5),
			s = /(\w+)\[(\d+)\]/,
			l = /\w+\.\w+/;
		t.parse = function(e) {
			if ("string" != typeof e) return {};
			if (e = o(e), "" === e) return {};
			"?" === e.charAt(0) && (e = e.slice(1));
			for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
				var a, h, u, c = n[r].split("="),
					d = i(c[0]);
				if (a = s.exec(d)) t[a[1]] = t[a[1]] || [], t[a[1]][a[2]] = i(c[1]);
				else if (a = l.test(d)) {
					for (a = d.split("."), h = t; a.length;)
						if (u = a.shift(), u.length) {
							if (h[u]) {
								if (h[u] && "object" != typeof h[u]) break
							} else h[u] = {};
							a.length || (h[u] = i(c[1])), h = h[u]
						}
				} else t[c[0]] = null == c[1] ? "" : i(c[1])
			}
			return t
		}, t.stringify = function(e) {
			if (!e) return "";
			var t = [];
			for (var n in e) {
				var i = e[n];
				if ("array" != a(i)) t.push(r(n) + "=" + r(e[n]));
				else
					for (var o = 0; o < i.length; ++o) t.push(r(n + "[" + o + "]") + "=" + r(i[o]))
			}
			return t.join("&")
		}
	}, function(e, t) {
		function n(e) {
			return e.replace(/^\s*|\s*$/g, "")
		}
		t = e.exports = n, t.left = function(e) {
			return e.replace(/^\s*/, "")
		}, t.right = function(e) {
			return e.replace(/\s*$/, "")
		}
	}, function(e, t) {
		function n(e) {
			return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor
				.isBuffer(e)))
		}
		var r = Object.prototype.toString;
		e.exports = function(e) {
			switch (r.call(e)) {
				case "[object Date]":
					return "date";
				case "[object RegExp]":
					return "regexp";
				case "[object Arguments]":
					return "arguments";
				case "[object Array]":
					return "array";
				case "[object Error]":
					return "error"
			}
			return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" :
				n(e) ? "buffer" : (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e), typeof e)
		}
	}, function(e, t) {
		var n = function(e) {
			function t(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}
			var n = 1,
				r = function(e) {
					n++, this.parent = null, this.children = {}, this.id = n, this.name = "n" + n, "undefined" != typeof e && (
						this.name = e), this.x = this.y = this.z = 0, this.width = this.height = 0
				};
			r.prototype.resize = function(e, t) {
				null != e && (this.width = e), null != t && (this.height = t)
			}, r.prototype.moveTo = function(e, t, n) {
				this.x = null != e ? e : this.x, this.y = null != t ? t : this.y, this.z = null != n ? n : this.z
			}, r.prototype.add = function(e) {
				var t = e.name;
				if ("undefined" != typeof this.children[t]) throw "SceneGraph: child already exists: " + t;
				this.children[t] = e, e.parent = this
			};
			var i = function() {
				r.call(this, "root"), this.properties = e
			};
			i.prototype = new r;
			var o = function(e, n) {
				if (r.call(this, e), this.properties = {
						fill: "#000000"
					}, "undefined" != typeof n) t(this.properties, n);
				else if ("undefined" != typeof e && "string" != typeof e) throw "SceneGraph: invalid node name"
			};
			o.prototype = new r;
			var a = function() {
				o.apply(this, arguments), this.type = "group"
			};
			a.prototype = new o;
			var s = function() {
				o.apply(this, arguments), this.type = "rect"
			};
			s.prototype = new o;
			var l = function(e) {
				o.call(this), this.type = "text", this.properties.text = e
			};
			l.prototype = new o;
			var h = new i;
			return this.Shape = {
				Rect: s,
				Text: l,
				Group: a
			}, this.root = h, this
		};
		e.exports = n
	}, function(e, t) {
		(function(e) {
			t.extend = function(e, t) {
				var n = {};
				for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
				if (null != t)
					for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
				return n
			}, t.cssProps = function(e) {
				var t = [];
				for (var n in e) e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
				return t.join(";")
			}, t.encodeHtmlEntity = function(e) {
				for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) n = e.charCodeAt(r), n > 128 ? t.unshift(["&#", n, ";"]
					.join("")) : t.unshift(e[r]);
				return t.join("")
			}, t.imageExists = function(e, t) {
				var n = new Image;
				n.onerror = function() {
					t.call(this, !1)
				}, n.onload = function() {
					t.call(this, !0)
				}, n.src = e
			}, t.decodeHtmlEntity = function(e) {
				return e.replace(/&#(\d+);/g, function(e, t) {
					return String.fromCharCode(t)
				})
			}, t.dimensionCheck = function(e) {
				var t = {
					height: e.clientHeight,
					width: e.clientWidth
				};
				return !(!t.height || !t.width) && t
			}, t.truthy = function(e) {
				return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "鉁�" === e : !!e
			}, t.parseColor = function(e) {
				var t, n = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,
					r = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
					i = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,
					o = e.match(n);
				return null !== o ? (t = o[1] || o[2], "#" !== t[0] ? "#" + t : t) : (o = e.match(r), null !== o ? t = "rgb(" +
					o.slice(1).join(",") + ")" : (o = e.match(i), null !== o ? t = "rgba(" + o.slice(1).join(",") + ")" : null)
				)
			}, t.canvasRatio = function() {
				var t = 1,
					n = 1;
				if (e.document) {
					var r = e.document.createElement("canvas");
					if (r.getContext) {
						var i = r.getContext("2d");
						t = e.devicePixelRatio || 1, n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio ||
							i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1
					}
				}
				return t / n
			}
		}).call(t, function() {
			return this
		}())
	}, function(e, t, n) {
		(function(e) {
			var r = n(9),
				i = "http://www.w3.org/2000/svg",
				o = 8;
			t.initSVG = function(e, t, n) {
				var a, s, l = !1;
				e && e.querySelector ? (s = e.querySelector("style"), null === s && (l = !0)) : (e = r.newEl("svg", i), l = !
					0), l && (a = r.newEl("defs", i), s = r.newEl("style", i), r.setAttr(s, {
					type: "text/css"
				}), a.appendChild(s), e.appendChild(a)), e.webkitMatchesSelector && e.setAttribute("xmlns", i);
				for (var h = 0; h < e.childNodes.length; h++) e.childNodes[h].nodeType === o && e.removeChild(e.childNodes[h]);
				for (; s.childNodes.length;) s.removeChild(s.childNodes[0]);
				return r.setAttr(e, {
					width: t,
					height: n,
					viewBox: "0 0 " + t + " " + n,
					preserveAspectRatio: "none"
				}), e
			}, t.svgStringToDataURI = function() {
				var t = "data:image/svg+xml;charset=UTF-8,",
					n = "data:image/svg+xml;charset=UTF-8;base64,";
				return function(r, i) {
					return i ? n + btoa(e.unescape(encodeURIComponent(r))) : t + encodeURIComponent(r)
				}
			}(), t.serializeSVG = function(t, n) {
				if (e.XMLSerializer) {
					var i = new XMLSerializer,
						o = "",
						a = n.stylesheets;
					if (n.svgXMLStylesheet) {
						for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
							var h = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');
							s.insertBefore(h, s.firstChild)
						}
						s.removeChild(s.documentElement), o = i.serializeToString(s)
					}
					var u = i.serializeToString(t);
					return u = u.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), o + u
				}
			}
		}).call(t, function() {
			return this
		}())
	}, function(e, t) {
		(function(e) {
			t.newEl = function(t, n) {
				if (e.document) return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t)
			}, t.setAttr = function(e, t) {
				for (var n in t) e.setAttribute(n, t[n])
			}, t.createXML = function() {
				if (e.DOMParser) return (new DOMParser).parseFromString("<xml />", "application/xml")
			}, t.getNodeArray = function(t) {
				var n = null;
				return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n =
					t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ?
					n = t : null === t && (n = []), n = Array.prototype.slice.call(n)
			}
		}).call(t, function() {
			return this
		}())
	}, function(e, t) {
		var n = function(e, t) {
			"string" == typeof e && (this.original = e, "#" === e.charAt(0) && (e = e.slice(1)), /[^a-f0-9]+/i.test(e) || (
				3 === e.length && (e = e.replace(/./g, "$&$&")), 6 === e.length && (this.alpha = 1, t && t.alpha && (this.alpha =
					t.alpha), this.set(parseInt(e, 16)))))
		};
		n.rgb2hex = function(e, t, n) {
			function r(e) {
				var t = (0 | e).toString(16);
				return e < 16 && (t = "0" + t), t
			}
			return [e, t, n].map(r).join("")
		}, n.hsl2rgb = function(e, t, n) {
			var r = e / 60,
				i = (1 - Math.abs(2 * n - 1)) * t,
				o = i * (1 - Math.abs(parseInt(r) % 2 - 1)),
				a = n - i / 2,
				s = 0,
				l = 0,
				h = 0;
			return r >= 0 && r < 1 ? (s = i, l = o) : r >= 1 && r < 2 ? (s = o, l = i) : r >= 2 && r < 3 ? (l = i, h = o) :
				r >= 3 && r < 4 ? (l = o, h = i) : r >= 4 && r < 5 ? (s = o, h = i) : r >= 5 && r < 6 && (s = i, h = o), s +=
				a, l += a, h += a, s = parseInt(255 * s), l = parseInt(255 * l), h = parseInt(255 * h), [s, l, h]
		}, n.prototype.set = function(e) {
			this.raw = e;
			var t = (16711680 & this.raw) >> 16,
				n = (65280 & this.raw) >> 8,
				r = 255 & this.raw,
				i = .2126 * t + .7152 * n + .0722 * r,
				o = -.09991 * t - .33609 * n + .436 * r,
				a = .615 * t - .55861 * n - .05639 * r;
			return this.rgb = {
				r: t,
				g: n,
				b: r
			}, this.yuv = {
				y: i,
				u: o,
				v: a
			}, this
		}, n.prototype.lighten = function(e) {
			var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1),
				r = 255 * t | 0,
				i = Math.min(255, Math.max(0, this.rgb.r + r)),
				o = Math.min(255, Math.max(0, this.rgb.g + r)),
				a = Math.min(255, Math.max(0, this.rgb.b + r)),
				s = n.rgb2hex(i, o, a);
			return new n(s)
		}, n.prototype.toHex = function(e) {
			return (e ? "#" : "") + this.raw.toString(16)
		}, n.prototype.lighterThan = function(e) {
			return e instanceof n || (e = new n(e)), this.yuv.y > e.yuv.y
		}, n.prototype.blendAlpha = function(e) {
			e instanceof n || (e = new n(e));
			var t = e,
				r = this,
				i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r,
				o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g,
				a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;
			return new n(n.rgb2hex(i, o, a))
		}, e.exports = n
	}, function(e, t) {
		e.exports = {
			version: "2.9.4",
			svg_ns: "http://www.w3.org/2000/svg"
		}
	}, function(e, t, n) {
		function r(e, t) {
			return c.element({
				tag: t,
				width: e.width,
				height: e.height,
				fill: e.properties.fill
			})
		}

		function i(e) {
			return h.cssProps({
				fill: e.fill,
				"font-weight": e.font.weight,
				"font-family": e.font.family + ", monospace",
				"font-size": e.font.size + e.font.units
			})
		}

		function o(e, t, n) {
			var r = n / 2;
			return ["M", r, r, "H", e - r, "V", t - r, "H", r, "V", 0, "M", 0, r, "L", e, t - r, "M", 0, t - r, "L", e, r].join(
				" ")
		}
		var a = n(13),
			s = n(8),
			l = n(11),
			h = n(7),
			u = l.svg_ns,
			c = {
				element: function(e) {
					var t = e.tag,
						n = e.content || "";
					return delete e.tag, delete e.content, [t, n, e]
				}
			};
		e.exports = function(e, t) {
			var n = t.engineSettings,
				l = n.stylesheets,
				h = l.map(function(e) {
					return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>'
				}).join("\n"),
				d = "holder_" + Number(new Date).toString(16),
				f = e.root,
				p = f.children.holderTextGroup,
				g = "#" + d + " text { " + i(p.properties) + " } ";
			p.y += .8 * p.textPositionData.boundingBox.height;
			var m = [];
			Object.keys(p.children).forEach(function(e) {
				var t = p.children[e];
				Object.keys(t.children).forEach(function(e) {
					var n = t.children[e],
						r = p.x + t.x + n.x,
						i = p.y + t.y + n.y,
						o = c.element({
							tag: "text",
							content: n.properties.text,
							x: r,
							y: i
						});
					m.push(o)
				})
			});
			var v = c.element({
					tag: "g",
					content: m
				}),
				y = null;
			if (f.children.holderBg.properties.outline) {
				var w = f.children.holderBg.properties.outline;
				y = c.element({
					tag: "path",
					d: o(f.children.holderBg.width, f.children.holderBg.height, w.width),
					"stroke-width": w.width,
					stroke: w.fill,
					fill: "none"
				})
			}
			var b = r(f.children.holderBg, "rect"),
				x = [];
			x.push(b), w && x.push(y), x.push(v);
			var S = c.element({
					tag: "g",
					id: d,
					content: x
				}),
				A = c.element({
					tag: "style",
					content: g,
					type: "text/css"
				}),
				C = c.element({
					tag: "defs",
					content: A
				}),
				E = c.element({
					tag: "svg",
					content: [C, S],
					width: f.properties.width,
					height: f.properties.height,
					xmlns: u,
					viewBox: [0, 0, f.properties.width, f.properties.height].join(" "),
					preserveAspectRatio: "none"
				}),
				k = a(E);
			k = h + k[0];
			var T = s.svgStringToDataURI(k, "background" === t.mode);
			return T
		}
	}, function(e, t, n) {
		n(14);
		e.exports = function r(e, t, n) {
			"use strict";

			function i(e) {
				var t = e.match(/^[\w-]+/),
					r = {
						tag: t ? t[0] : "div",
						attr: {},
						children: []
					},
					i = e.match(/#([\w-]+)/),
					o = e.match(/\$([\w-]+)/),
					a = e.match(/\.[\w-]+/g);
				return i && (r.attr.id = i[1], n[i[1]] = r), o && (n[o[1]] = r), a && (r.attr["class"] = a.join(" ").replace(
					/\./g, "")), e.match(/&$/g) && (f = !1), r
			}

			function o(e, t) {
				if (null !== t && t !== !1 && void 0 !== t) return "string" != typeof t && "object" != typeof t ? String(t) :
					t
			}

			function a(e) {
				return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
			}

			function s(e) {
				return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(
					/>/g, "&gt;")
			}
			var l, h, u, c, d = 1,
				f = !0;
			if (n = n || {}, "string" == typeof e[0]) e[0] = i(e[0]);
			else {
				if (!Array.isArray(e[0])) throw new Error("First element of array must be a string, or an array and not " +
					JSON.stringify(e[0]));
				d = 0
			}
			for (; d < e.length; d++) {
				if (e[d] === !1 || null === e[d]) {
					e[0] = !1;
					break
				}
				if (void 0 !== e[d] && e[d] !== !0)
					if ("string" == typeof e[d]) f && (e[d] = s(e[d])), e[0].children.push(e[d]);
					else if ("number" == typeof e[d]) e[0].children.push(e[d]);
				else if (Array.isArray(e[d])) {
					if (Array.isArray(e[d][0])) {
						if (e[d].reverse().forEach(function(t) {
								e.splice(d + 1, 0, t)
							}), 0 !== d) continue;
						d++
					}
					r(e[d], t, n), e[d][0] && e[0].children.push(e[d][0])
				} else if ("function" == typeof e[d]) u = e[d];
				else {
					if ("object" != typeof e[d]) throw new TypeError('"' + e[d] + '" is not allowed as a value.');
					for (h in e[d]) e[d].hasOwnProperty(h) && null !== e[d][h] && e[d][h] !== !1 && ("style" === h && "object" ==
						typeof e[d][h] ? e[0].attr[h] = JSON.stringify(e[d][h], o).slice(2, -2).replace(/","/g, ";").replace(/":"/g,
							":").replace(/\\"/g, "'") : e[0].attr[h] = e[d][h])
				}
			}
			if (e[0] !== !1) {
				l = "<" + e[0].tag;
				for (c in e[0].attr) e[0].attr.hasOwnProperty(c) && (l += " " + c + '="' + a(e[0].attr[c]) + '"');
				l += ">", e[0].children.forEach(function(e) {
					l += e
				}), l += "</" + e[0].tag + ">", e[0] = l
			}
			return n[0] = e[0], u && u(e[0]), n
		}
	}, function(e, t) {
		"use strict";

		function n(e) {
			var t = "" + e,
				n = r.exec(t);
			if (!n) return t;
			var i, o = "",
				a = 0,
				s = 0;
			for (a = n.index; a < t.length; a++) {
				switch (t.charCodeAt(a)) {
					case 34:
						i = "&quot;";
						break;
					case 38:
						i = "&amp;";
						break;
					case 39:
						i = "&#39;";
						break;
					case 60:
						i = "&lt;";
						break;
					case 62:
						i = "&gt;";
						break;
					default:
						continue
				}
				s !== a && (o += t.substring(s, a)), s = a + 1, o += i
			}
			return s !== a ? o + t.substring(s, a) : o
		}
		var r = /["'&<>]/;
		e.exports = n
	}, function(e, t, n) {
		var r = n(9),
			i = n(7);
		e.exports = function() {
			var e = r.newEl("canvas"),
				t = null;
			return function(n) {
				null == t && (t = e.getContext("2d"));
				var r = i.canvasRatio(),
					o = n.root;
				e.width = r * o.properties.width, e.height = r * o.properties.height, t.textBaseline = "middle";
				var a = o.children.holderBg,
					s = r * a.width,
					l = r * a.height,
					h = 2,
					u = h / 2;
				t.fillStyle = a.properties.fill, t.fillRect(0, 0, s, l), a.properties.outline && (t.strokeStyle = a.properties
					.outline.fill, t.lineWidth = a.properties.outline.width, t.moveTo(u, u), t.lineTo(s - u, u), t.lineTo(s - u,
						l - u), t.lineTo(u, l - u), t.lineTo(u, u), t.moveTo(0, u), t.lineTo(s, l - u), t.moveTo(0, l - u), t.lineTo(
						s, u), t.stroke());
				var c = o.children.holderTextGroup;
				t.font = c.properties.font.weight + " " + r * c.properties.font.size + c.properties.font.units + " " + c.properties
					.font.family + ", monospace", t.fillStyle = c.properties.fill;
				for (var d in c.children) {
					var f = c.children[d];
					for (var p in f.children) {
						var g = f.children[p],
							m = r * (c.x + f.x + g.x),
							v = r * (c.y + f.y + g.y + c.properties.leading / 2);
						t.fillText(g.properties.text, m, v)
					}
				}
				return e.toDataURL("image/png")
			}
		}()
	}])
}),
function(e, t) {
	t && (Holder = e.Holder);
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package);
