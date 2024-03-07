(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8503], {
		98229: function(a, b, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/swap", function() {
				return c(43031)
			}])
		},
		38144: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return t
				}
			});
			var d = c(26042),
				e = c(69396),
				f = c(99534),
				g = c(85893);
			c(67294);
			var h = c(7297),
				i = c(87379),
				j = c(57247),
				k = c(44850);

			function l() {
				var a = (0, h.Z)(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);
				return l = function() {
					return a
				}, a
			}

			function m() {
				var a = (0, h.Z)(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "]);
				return m = function() {
					return a
				}, a
			}

			function n() {
				var a = (0, h.Z)(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"]);
				return n = function() {
					return a
				}, a
			}

			function o() {
				var a = (0, h.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"]);
				return o = function() {
					return a
				}, a
			}
			var p = (0, i.F4)(l()),
				q = function(a) {
					var b = a.isActive,
						c = a.isSuccess,
						d = a.isWarning,
						e = a.borderBackground,
						f = a.theme;
					return e || (d ? f.colors.warning : c ? f.colors.success : b ? "linear-gradient(180deg, ".concat(f.colors.primaryBright, ", ").concat(f.colors.secondary, ")") : f.colors.cardBorder)
				},
				r = i.ZP.div.withConfig({
					componentId: "sc-eecfaa46-0"
				}).withConfig({
					componentId: "sc-62e22978-0"
				})(n(), q, function(a) {
					return a.theme.radii.card
				}, function(a) {
					var b = a.theme,
						c = a.isDisabled;
					return b.colors[c ? "textDisabled" : "text"]
				}, function(a) {
					return a.isActive && (0, i.iv)(m(), p)
				}, j.Dh),
				s = (0, i.ZP)(k.Z).withConfig({
					componentId: "sc-eecfaa46-1"
				}).withConfig({
					componentId: "sc-62e22978-1"
				})(o(), function(a) {
					return a.hasCustomBorder ? "initial" : "inherit"
				}, function(a) {
					var b = a.theme,
						c = a.background;
					return null != c ? c : b.card.background
				}, function(a) {
					return a.theme.radii.card
				});
			r.defaultProps = {
				isActive: !1,
				isSuccess: !1,
				isWarning: !1,
				isDisabled: !1
			};
			var t = function(a) {
				var b = a.ribbon,
					c = a.children,
					h = a.background,
					i = (0, f.Z)(a, ["ribbon", "children", "background"]);
				return (0, g.jsx)(r, (0, e.Z)((0, d.Z)({}, i), {
					children: (0, g.jsxs)(s, {
						background: h,
						hasCustomBorder: !!i.borderBackground,
						children: [b, c]
					})
				}))
			}
		},
		19729: function(a, b, c) {
			"use strict";
			var d = c(26042),
				e = c(69396),
				f = c(85893);
			c(67294);
			var g = c(17058),
				h = function(a) {
					return (0, f.jsx)(g.Z, (0, e.Z)((0, d.Z)({
						viewBox: "0 0 24 24"
					}, a), {
						children: (0, f.jsx)("path", {
							d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
						})
					}))
				};
			b.Z = h
		},
		72234: function(a, b, c) {
			"use strict";
			c.d(b, {
				A: function() {
					return o
				}
			});
			var d = c(26042),
				e = c(69396),
				f = c(10253),
				g = c(85893),
				h = c(96293),
				i = c(30822),
				j = c(91131),
				k = c(62349),
				l = c(21581),
				m = c(96464),
				n = {
					variant: "danger",
					disabled: !1,
					children: (0, g.jsx)(m.Z, {
						children: "Wrong Network"
					})
				},
				o = function(a) {
					var b = (0, k.gi)().isWrongNetwork,
						c = (0, f.Z)((0, i.c)(), 1)[0],
						m = (0, j.b9)(l.v);
					return (0, g.jsx)(h.Z, (0, d.Z)((0, e.Z)((0, d.Z)({}, a), {
						onClick: function(c) {
							if (b) m(!1);
							else {
								var d;
								null === (d = a.onClick) || void 0 === d || d.call(a, c)
							}
						}
					}), c && {
						disabled: !0
					}, b && n))
				}
		},
		49704: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return x
				}
			});
			var d = c(10253),
				e = c(7297),
				f = c(85893),
				g = c(90452),
				h = c(97114),
				i = c(80421),
				j = c(65528),
				k = c(96293),
				l = c(95963),
				m = c(87379),
				n = c(39475),
				o = c(41914),
				p = c(74314),
				q = c(64011),
				r = c(93293),
				s = c(53854),
				t = c(86435);

			function u() {
				var a = (0, e.Z)(["\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  background-color: ", ";\n  text-align: center;\n"]);
				return u = function() {
					return a
				}, a
			}
			var v = m.ZP.div.withConfig({
					componentId: "sc-14e16177-0"
				})(u(), function(a) {
					return a.theme.colors.text
				}, function(a) {
					return a.theme.colors.invertedContrast
				}),
				w = function(a) {
					var b = a.currencies,
						c = a.onDismiss,
						d = (0, q.Z)().chainId,
						e = (0, l.$G)().t,
						j = d && b ? b.map(function(a) {
							return (0, s.pu)(a, d)
						}) : [],
						k = (0, t.l6)();
					return (0, f.jsx)(g.Z, {
						title: e("Unsupported Assets"),
						maxWidth: "420px",
						onDismiss: c,
						children: (0, f.jsxs)(o.Tz, {
							gap: "lg",
							children: [j.map(function(a) {
								var b;
								return a && k && Object.keys(k).includes(a.address) && (0, f.jsxs)(o.Tz, {
									gap: "10px",
									children: [(0, f.jsxs)(n.BA, {
										gap: "5px",
										align: "center",
										children: [(0, f.jsx)(p.Xw, {
											currency: a,
											size: "24px"
										}), (0, f.jsx)(h.Z, {
											children: a.symbol
										})]
									}), d && (0, f.jsx)(i.Z, {
										external: !0,
										small: !0,
										color: "primaryDark",
										href: (0, r.C)(a.address, "address", d),
										children: a.address
									})]
								}, null === (b = a.address) || void 0 === b ? void 0 : b.concat("not-supported"))
							}), (0, f.jsx)(o.Tz, {
								gap: "lg",
								children: (0, f.jsx)(h.Z, {
									children: e("Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons.")
								})
							})]
						})
					})
				};

			function x(a) {
				var b = a.currencies,
					c = (0, l.$G)().t,
					e = (0, d.Z)((0, j.Z)((0, f.jsx)(w, {
						currencies: b
					})), 1)[0];
				return (0, f.jsx)(v, {
					children: (0, f.jsx)(k.Z, {
						variant: "text",
						onClick: e,
						children: c("Read more about unsupported assets")
					})
				})
			}
		},
		7694: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return f
				}
			});
			var d = c(91001),
				e = c(5039);

			function f() {
				var a, b, c = (0, e.gq)();
				return null === (a = (0, d.Wk)(c, "getCurrentBlockTimestamp")) || void 0 === a ? void 0 : null === (b = a.result) || void 0 === b ? void 0 : b[0]
			}
		},
		95605: function(a, b, c) {
			"use strict";
			c.d(b, {
				o: function() {
					return y
				}
			});
			var d, e = c(47568),
				f = c(26042),
				g = c(29815),
				h = c(34051),
				i = c.n(h),
				j = c(43196),
				k = c(95963),
				l = c(64011),
				m = c(67294),
				n = c(68605),
				o = c(53467),
				p = c(67083),
				q = c(55892),
				r = c(93293);

			function s(a) {
				return /^0x0*$/.test(a)
			}
			var t, u = c(19838),
				v = c(60872),
				w = c(81748),
				x = c(42808);

			function y(a) {
				var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.gv,
					c = arguments.length > 2 ? arguments[2] : void 0,
					h = (0, l.Z)(),
					t = h.account,
					y = h.chainId,
					z = (0, n.Fh)(),
					A = function(a) {
						var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.gv,
							c = arguments.length > 2 ? arguments[2] : void 0,
							d = (0, l.Z)(),
							e = d.account,
							f = d.chainId,
							g = null === c ? e : c,
							h = (0, w.Z)(),
							i = (0, v.Ti)();
						return (0, m.useMemo)(function() {
							if (!a || !g || !e || !f || !h || !i) return [];
							var c = [];
							return c.push(j.F0.swapCallParameters(a, {
								feeOnTransfer: !1,
								allowedSlippage: new j.gG(j.QA.BigInt(b), u.PM),
								recipient: g,
								deadline: h.toNumber()
							})), a.tradeType === j.YL.EXACT_INPUT && c.push(j.F0.swapCallParameters(a, {
								feeOnTransfer: !0,
								allowedSlippage: new j.gG(j.QA.BigInt(b), u.PM),
								recipient: g,
								deadline: h.toNumber()
							})), c.map(function(a) {
								return {
									parameters: a,
									contract: i
								}
							})
						}, [e, b, f, i, h, g, a])
					}(a, b, c),
					B = (0, k.$G)().t,
					C = (0, q.h7)(),
					D = null === c ? t : c;
				return (0, m.useMemo)(function() {
					var h;
					return a && t && y ? D ? {
						state: d.VALID,
						callback: (h = (0, e.Z)(i().mark(function d() {
							var e, h, k, l, m, n, p, q, u, w, y;
							return i().wrap(function(d) {
								for (;;) switch (d.prev = d.next) {
									case 0:
										return d.next = 3, Promise.all(A.map(function(a) {
											var b, c = a.parameters,
												d = c.methodName,
												e = c.args,
												f = c.value,
												h = a.contract,
												i = !f || s(f) ? {} : {
													value: f
												};
											return (b = h.estimateGas)[d].apply(b, (0, g.Z)(e).concat([i])).then(function(b) {
												return {
													call: a,
													gasEstimate: b
												}
											}).catch(function(b) {
												var c;
												return console.error("Gas estimate failed, trying eth_call to extract error", a), (c = h.callStatic)[d].apply(c, (0, g.Z)(e).concat([i])).then(function(c) {
													return console.error("Unexpected successful call after failed estimate gas", a, b, c), {
														call: a,
														error: B("Unexpected issue with estimating the gas. Please try again.")
													}
												}).catch(function(b) {
													return console.error("Call threw error", a, b), {
														call: a,
														error: (0, x.e)(b, B)
													}
												})
											})
										}));
									case 3:
										if (k = (h = d.sent).find(function(a, b, c) {
												return "gasEstimate" in a && (b === c.length - 1 || "gasEstimate" in c[b + 1])
											})) {
											d.next = 10;
											break
										}
										if (!((l = h.filter(function(a) {
												return "error" in a
											})).length > 0)) {
											d.next = 9;
											break
										}
										throw Error(l[l.length - 1].error);
									case 9:
										throw Error(B("Unexpected error. Could not estimate gas for the swap."));
									case 10:
										return n = (m = k.call).contract, p = m.parameters, q = p.methodName, u = p.args, w = p.value, y = k.gasEstimate, d.abrupt("return", (e = n)[q].apply(e, (0, g.Z)(u).concat([(0, f.Z)({
											gasLimit: (0, r.yC)(y),
											gasPrice: z
										}, w && !s(w) ? {
											value: w,
											from: t
										} : {
											from: t
										})])).then(function(d) {
											var e = a.inputAmount.currency.symbol,
												g = a.outputAmount.currency.symbol,
												h = (0, v.P4)(b),
												i = a.tradeType === j.YL.EXACT_INPUT ? a.inputAmount.toSignificant(3) : a.maximumAmountIn(h).toSignificant(3),
												k = a.tradeType === j.YL.EXACT_OUTPUT ? a.outputAmount.toSignificant(3) : a.minimumAmountOut(h).toSignificant(3),
												l = "Swap ".concat(a.tradeType === j.YL.EXACT_OUTPUT ? "max." : "", " ").concat(i, " ").concat(e, " for ").concat(a.tradeType === j.YL.EXACT_INPUT ? "min." : "", " ").concat(k, " ").concat(g),
												m = c && (0, r.UJ)(c) ? (0, o.Z)(c) : c,
												n = D === t ? l : "".concat(l, " to ").concat(m);
											return C(d, {
												summary: n,
												translatableSummary: {
													text: a.tradeType === j.YL.EXACT_OUTPUT ? D === t ? "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%" : "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%" : D === t ? "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%" : "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",
													data: (0, f.Z)({
														inputAmount: i,
														inputSymbol: e,
														outputAmount: k,
														outputSymbol: g
													}, D !== t && {
														recipientAddress: m
													})
												},
												type: "swap"
											}), d.hash
										}).catch(function(a) {
											if ((null == a ? void 0 : a.code) === 4001) throw Error("Transaction rejected.");
											throw console.error("Swap failed", a, q, u, w), Error(B("Swap failed: %message%", {
												message: (0, x.e)(a, B)
											}))
										}));
									case 12:
									case "end":
										return d.stop()
								}
							}, d)
						})), function() {
							return h.apply(this, arguments)
						}),
						error: null
					} : null !== c ? {
						state: d.INVALID,
						callback: null,
						error: "Invalid recipient"
					} : {
						state: d.LOADING,
						callback: null,
						error: null
					} : {
						state: d.INVALID,
						callback: null,
						error: "Missing dependencies"
					}
				}, [a, t, y, D, c, A, z, B, C, b])
			}(t = d || (d = {}))[t.INVALID = 0] = "INVALID", t[t.LOADING = 1] = "LOADING", t[t.VALID = 2] = "VALID"
		},
		81748: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return g
				}
			});
			var d = c(67294),
				e = c(9473),
				f = c(7694);

			function g() {
				var a = (0, e.v9)(function(a) {
						return a.user.userDeadline
					}),
					b = (0, f.Z)();
				return (0, d.useMemo)(function() {
					if (b && a) return b.add(a)
				}, [b, a])
			}
		},
		43031: function(a, b, c) {
			"use strict";
			c.r(b), c.d(b, {
				default: function() {
					return cn
				}
			});
			var d, e = c(85893),
				f = c(36380),
				g = c(14924),
				h = c(26042),
				i = c(69396),
				j = c(10253),
				k = c(7297),
				l = c(67294),
				m = c(87379),
				n = c(43196),
				o = c(60872),
				p = c(97114),
				q = c(5527),
				r = c(25349),
				s = c(65528),
				t = c(4318),
				u = c(6372),
				v = c(92863),
				w = c(96293),
				x = c(84091),
				y = c(44850),
				z = c(23715),
				A = c(49704),
				B = c(72234),
				C = c(11163),
				D = c(64011),
				E = c(95963),
				F = c(19838),
				G = c(45131),
				H = c(26717),
				I = {
					pokemoney: new n.WU(n.a_.BSC, "0x32ff5b4C3B1744F0344D96fA2f87799Ed2805749", 18, "PMY", "Pokemoney Coin", ""),
					free: new n.WU(n.a_.BSC, "0x880BCe9321c79cAc1D290De6d31DDE722C606165", 8, "FREE", "Freedom Protocol Token", ""),
					safemoon: new n.WU(n.a_.BSC, "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3", 9, "SAFEMOON", "Safemoon Token", "https://safemoon.net/")
				},
				J = H.ds.bondly,
				K = H.ds.itam,
				L = H.ds.ccar,
				M = H.ds.bttold,
				N = I.pokemoney,
				O = I.free,
				P = I.safemoon,
				Q = {
					safemoon: P,
					bondly: J,
					itam: K,
					ccar: L,
					bttold: M,
					pokemoney: N,
					free: O
				},
				R = Object.values(Q),
				S = function(a) {
					return R.some(function(b) {
						return b.equals(a)
					})
				},
				T = c(95271),
				U = c(22868),
				V = c(47431),
				W = c(8100),
				X = function() {
					var a = (0, l.useState)(!1),
						b = a[0],
						c = a[1],
						d = (0, l.useCallback)(function() {
							b || c(!0)
						}, [b]),
						e = (0, W.kY)().mutate,
						f = (0, D.Z)().chainId;
					return (0, l.useEffect)(function() {
						b && (e(["blockNumber", f]), setTimeout(function() {
							return c(!1)
						}, 500))
					}, [e, b, f]), {
						refreshBlockNumber: d,
						isLoading: b
					}
				},
				Y = c(59039),
				Z = c(36261),
				$ = c(41914),
				_ = c(10566),
				aa = c(41228),
				ab = c(63603);

			function ac() {
				var a = (0, k.Z)(["\n  width: 100%;\n"]);
				return ac = function() {
					return a
				}, a
			}

			function ad() {
				var a = (0, k.Z)(["\n  padding: 24px 0;\n"]);
				return ad = function() {
					return a
				}, a
			}
			var ae = m.ZP.div.withConfig({
					componentId: "sc-afc6e8e9-0"
				})(ac()),
				af = (0, m.ZP)($.lg).withConfig({
					componentId: "sc-afc6e8e9-1"
				})(ad()),
				ag = function(a) {
					var b, c, d, f, g, h, i, j, k, l, m = a.trade,
						n = (0, E.$G)().t,
						o = n("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
							amountA: null !== (i = null == m ? void 0 : null === (b = m.inputAmount) || void 0 === b ? void 0 : b.toSignificant(6)) && void 0 !== i ? i : "",
							symbolA: null !== (j = null == m ? void 0 : null === (c = m.inputAmount) || void 0 === c ? void 0 : null === (d = c.currency) || void 0 === d ? void 0 : d.symbol) && void 0 !== j ? j : "",
							amountB: null !== (k = null == m ? void 0 : null === (f = m.outputAmount) || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== k ? k : "",
							symbolB: null !== (l = null == m ? void 0 : null === (g = m.outputAmount) || void 0 === g ? void 0 : null === (h = g.currency) || void 0 === h ? void 0 : h.symbol) && void 0 !== l ? l : ""
						});
					return (0, e.jsxs)(ae, {
						children: [(0, e.jsx)(af, {
							children: (0, e.jsx)(ab.Z, {})
						}), (0, e.jsxs)($.Tz, {
							gap: "12px",
							justify: "center",
							children: [(0, e.jsx)(p.Z, {
								fontSize: "20px",
								children: n("Waiting For Confirmation")
							}), (0, e.jsx)($.Tz, {
								gap: "12px",
								justify: "center",
								children: (0, e.jsx)(p.Z, {
									bold: !0,
									small: !0,
									textAlign: "center",
									children: o
								})
							}), (0, e.jsx)(p.Z, {
								small: !0,
								color: "textSubtle",
								textAlign: "center",
								children: n("Confirm this transaction in your wallet")
							})]
						})]
					})
				},
				ah = c(70193),
				ai = c(19729),
				aj = c(45061),
				ak = c(39475),
				al = c(4003),
				am = c(44700);

			function an() {
				var a = (0, k.Z)(["\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n"]);
				return an = function() {
					return a
				}, a
			}

			function ao() {
				var a = (0, k.Z)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
				return ao = function() {
					return a
				}, a
			}

			function ap() {
				var a = (0, k.Z)(["\n  padding: 2px;\n\n  ", "\n"]);
				return ap = function() {
					return a
				}, a
			}

			function aq() {
				var a = (0, k.Z)(["\n  color: ", ";\n"]);
				return aq = function() {
					return a
				}, a
			}

			function ar() {
				var a = (0, k.Z)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
				return ar = function() {
					return a
				}, a
			}

			function as() {
				var a = (0, k.Z)(["\n  width: 220px;\n"]);
				return as = function() {
					return a
				}, a
			}

			function at() {
				var a = (0, k.Z)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
				return at = function() {
					return a
				}, a
			}

			function au() {
				var a = (0, k.Z)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
				return au = function() {
					return a
				}, a
			}

			function av() {
				var a = (0, k.Z)(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
				return av = function() {
					return a
				}, a
			}
			var aw = (0, m.ZP)(t.Z).withConfig({
					componentId: "sc-4d6dcedb-0"
				})(an()),
				ax = m.ZP.div.withConfig({
					componentId: "sc-4d6dcedb-1"
				})(ap(), function(a) {
					return a.clickable ? (0, m.iv)(ao()) : null
				}),
				ay = (0, m.ZP)(p.Z).withConfig({
					componentId: "sc-4d6dcedb-2"
				})(aq(), function(a) {
					var b = a.theme,
						c = a.severity;
					return 3 === c || 4 === c ? b.colors.failure : 2 === c ? b.colors.warning : 1 === c ? b.colors.text : b.colors.success
				}),
				az = m.ZP.button.withConfig({
					componentId: "sc-4d6dcedb-3"
				})(ar(), function(a) {
					return a.theme.colors.background
				}, function(a) {
					return a.theme.colors.text
				}, function(a) {
					return a.theme.colors.dropdown
				}, function(a) {
					return a.theme.colors.dropdown
				}),
				aA = (0, m.ZP)(p.Z).attrs({
					ellipsis: !0
				}).withConfig({
					componentId: "sc-4d6dcedb-4"
				})(as()),
				aB = m.ZP.div.withConfig({
					componentId: "sc-4d6dcedb-5"
				})(at(), function(a) {
					var b = a.theme;
					return "".concat(b.colors.failure, "33")
				}, function(a) {
					return a.theme.colors.failure
				}),
				aC = m.ZP.div.withConfig({
					componentId: "sc-4d6dcedb-6"
				})(au(), function(a) {
					var b = a.theme;
					return "".concat(b.colors.failure, "33")
				});

			function aD(a) {
				var b = a.error;
				return (0, e.jsxs)(aB, {
					children: [(0, e.jsx)(aC, {
						children: (0, e.jsx)(am.Z, {
							width: "24px"
						})
					}), (0, e.jsx)("p", {
						children: b
					})]
				})
			}
			var aE = (0, m.ZP)($.Tz).withConfig({
				componentId: "sc-4d6dcedb-7"
			})(av(), function(a) {
				var b = a.theme;
				return "".concat(b.colors.warning, "33")
			});

			function aF(a) {
				var b = a.priceImpact;
				return (0, e.jsx)(ay, {
					fontSize: "14px",
					severity: (0, o.oX)(b),
					children: b ? b.lessThan(F.IS) ? "<0.01%" : "".concat(b.toFixed(2), "%") : "-"
				})
			}

			function aG() {
				var a = (0, k.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return aG = function() {
					return a
				}, a
			}
			var aH = (0, m.ZP)($.Tz).withConfig({
				componentId: "sc-1464a4b3-0"
			})(aG(), function(a) {
				return a.theme.radii.default
			}, function(a) {
				return a.theme.colors.cardBorder
			}, function(a) {
				return a.theme.colors.background
			});

			function aI(a) {
				var b, c, d, f, g = a.trade,
					h = a.slippageAdjustedAmounts,
					i = a.isEnoughInputBalance,
					j = a.onConfirm,
					k = a.swapErrorMessage,
					m = a.disabledConfirm,
					q = (0, E.$G)().t,
					r = (0, l.useState)(!1),
					s = r[0],
					t = r[1],
					u = (0, l.useMemo)(function() {
						return (0, o.U7)(g)
					}, [g]),
					v = u.priceImpactWithoutFee,
					x = u.realizedLPFee,
					y = (0, o.oX)(v),
					z = "".concat((100 * al.om).toFixed(2), "%"),
					A = "".concat((100 * al.BY).toFixed(2), "%"),
					B = "".concat((100 * al.hT).toFixed(4), "%"),
					C = "".concat((100 * al.xy).toFixed(4), "%");
				return (0, e.jsxs)(e.Fragment, {
					children: [(0, e.jsxs)(aH, {
						children: [(0, e.jsxs)(ak.m0, {
							align: "center",
							children: [(0, e.jsx)(p.Z, {
								fontSize: "14px",
								children: q("Price")
							}), (0, e.jsxs)(p.Z, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "10px"
								},
								children: [(0, o.Kh)(g, s), (0, e.jsx)(az, {
									onClick: function() {
										return t(!s)
									},
									children: (0, e.jsx)(ai.Z, {
										width: "14px"
									})
								})]
							})]
						}), (0, e.jsxs)(ak.m0, {
							children: [(0, e.jsxs)(ak.DA, {
								children: [(0, e.jsx)(p.Z, {
									fontSize: "14px",
									children: q(g.tradeType === n.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
								}), (0, e.jsx)(aj.Z, {
									text: q("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px"
								})]
							}), (0, e.jsxs)(ak.DA, {
								children: [(0, e.jsx)(p.Z, {
									fontSize: "14px",
									children: g.tradeType === n.YL.EXACT_INPUT ? null !== (d = null === (b = h[ah.gN.OUTPUT]) || void 0 === b ? void 0 : b.toSignificant(4)) && void 0 !== d ? d : "-" : null !== (f = null === (c = h[ah.gN.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4)) && void 0 !== f ? f : "-"
								}), (0, e.jsx)(p.Z, {
									fontSize: "14px",
									marginLeft: "4px",
									children: g.tradeType === n.YL.EXACT_INPUT ? g.outputAmount.currency.symbol : g.inputAmount.currency.symbol
								})]
							})]
						}), (0, e.jsxs)(ak.m0, {
							children: [(0, e.jsxs)(ak.DA, {
								children: [(0, e.jsx)(p.Z, {
									fontSize: "14px",
									children: q("Price Impact")
								}), (0, e.jsx)(aj.Z, {
									text: q("The difference between the market price and your price due to trade size."),
									ml: "4px"
								})]
							}), (0, e.jsx)(aF, {
								priceImpact: v
							})]
						}), (0, e.jsxs)(ak.m0, {
							children: [(0, e.jsxs)(ak.DA, {
								children: [(0, e.jsx)(p.Z, {
									fontSize: "14px",
									children: q("Liquidity Provider Fee")
								}), (0, e.jsx)(aj.Z, {
									text: (0, e.jsxs)(e.Fragment, {
										children: [(0, e.jsx)(p.Z, {
											mb: "12px",
											children: q("For each trade a %amount% fee is paid", {
												amount: z
											})
										}), (0, e.jsxs)(p.Z, {
											children: ["- ", q("%amount% to LP token holders", {
												amount: A
											})]
										}), (0, e.jsxs)(p.Z, {
											children: ["- ", q("%amount% to the Treasury", {
												amount: B
											})]
										}), (0, e.jsxs)(p.Z, {
											children: ["- ", q("%amount% towards LFG buyback and burn", {
												amount: C
											})]
										})]
									}),
									ml: "4px"
								})]
							}), (0, e.jsx)(p.Z, {
								fontSize: "14px",
								children: x ? "".concat(null == x ? void 0 : x.toSignificant(6), " ").concat(g.inputAmount.currency.symbol) : "-"
							})]
						})]
					}), (0, e.jsxs)(ak.BA, {
						children: [(0, e.jsx)(w.Z, {
							variant: y > 2 ? "danger" : "primary",
							onClick: j,
							disabled: m,
							mt: "12px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: q(y > 2 || g.tradeType === n.YL.EXACT_OUTPUT && !i ? "Swap Anyway" : "Confirm Swap")
						}), k ? (0, e.jsx)(aD, {
							error: k
						}) : null]
					})]
				})
			}
			var aJ = c(74314),
				aK = c(53467);

			function aL(a) {
				var b, c, d = a.trade,
					f = a.slippageAdjustedAmounts,
					g = a.isEnoughInputBalance,
					h = a.recipient,
					i = a.showAcceptChanges,
					k = a.onAcceptChanges,
					m = a.allowedSlippage,
					q = (0, E.$G)().t,
					r = (0, l.useMemo)(function() {
						return (0, o.U7)(d)
					}, [d]).priceImpactWithoutFee,
					s = (0, o.oX)(r),
					t = i && d.tradeType === n.YL.EXACT_OUTPUT && g ? "primary" : d.tradeType !== n.YL.EXACT_OUTPUT || g ? "text" : "failure",
					v = d.tradeType === n.YL.EXACT_INPUT ? null === (b = f[ah.gN.OUTPUT]) || void 0 === b ? void 0 : b.toSignificant(6) : null === (c = f[ah.gN.INPUT]) || void 0 === c ? void 0 : c.toSignificant(6),
					x = d.tradeType === n.YL.EXACT_INPUT ? d.outputAmount.currency.symbol : d.inputAmount.currency.symbol,
					y = q(d.tradeType === n.YL.EXACT_INPUT ? "Output is estimated. You will receive at least or the transaction will revert." : "Input is estimated. You will sell at most or the transaction will revert."),
					z = (0, j.Z)(y.split("".concat(v, " ").concat(x)), 2),
					A = z[0],
					B = z[1],
					C = h ? (0, aK.Z)(h) : "",
					D = q("Output will be sent to %recipient%", {
						recipient: C
					}),
					F = (0, j.Z)(D.split(C), 2),
					G = F[0],
					H = F[1];
				return (0, e.jsxs)($.Tz, {
					gap: "md",
					children: [(0, e.jsxs)(ak.m0, {
						align: "flex-end",
						children: [(0, e.jsxs)(ak.DA, {
							gap: "4px",
							children: [(0, e.jsx)(aJ.Xw, {
								currency: d.inputAmount.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), (0, e.jsx)(aA, {
								fontSize: "24px",
								color: t,
								children: d.inputAmount.toSignificant(6)
							})]
						}), (0, e.jsx)(ak.DA, {
							gap: "0px",
							children: (0, e.jsx)(p.Z, {
								fontSize: "24px",
								ml: "10px",
								children: d.inputAmount.currency.symbol
							})
						})]
					}), (0, e.jsx)(ak.DA, {
						children: (0, e.jsx)(u.Z, {
							width: "16px",
							ml: "4px"
						})
					}), (0, e.jsxs)(ak.m0, {
						align: "flex-end",
						children: [(0, e.jsxs)(ak.DA, {
							gap: "4px",
							children: [(0, e.jsx)(aJ.Xw, {
								currency: d.outputAmount.currency,
								size: "24px"
							}), (0, e.jsx)(aA, {
								fontSize: "24px",
								color: s > 2 ? "failure" : i && d.tradeType === n.YL.EXACT_INPUT ? "primary" : "text",
								children: d.outputAmount.toSignificant(6)
							})]
						}), (0, e.jsx)(ak.DA, {
							children: (0, e.jsx)(p.Z, {
								fontSize: "24px",
								ml: "10px",
								children: d.outputAmount.currency.symbol
							})
						})]
					}), i ? (0, e.jsx)(aE, {
						justify: "flex-start",
						gap: "0px",
						children: (0, e.jsxs)(ak.m0, {
							children: [(0, e.jsxs)(ak.DA, {
								children: [(0, e.jsx)(am.Z, {
									mr: "8px"
								}), (0, e.jsxs)(p.Z, {
									bold: !0,
									children: [" ", q("Price Updated")]
								})]
							}), (0, e.jsx)(w.Z, {
								onClick: k,
								children: q("Accept")
							})]
						})
					}) : null, (0, e.jsxs)($.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "24px 0 0 0px"
						},
						children: [(0, e.jsxs)(ak.DA, {
							style: {
								width: "100%"
							},
							children: [(0, e.jsx)(p.Z, {
								color: "secondary",
								bold: !0,
								textTransform: "uppercase",
								children: q("Slippage Tolerance")
							}), (0, e.jsx)(p.Z, {
								bold: !0,
								color: "primary",
								ml: "auto",
								textAlign: "end",
								children: "".concat((0, o.P4)(m).toFixed(1), "%")
							})]
						}), d.tradeType === n.YL.EXACT_OUTPUT && !g && (0, e.jsx)(p.Z, {
							small: !0,
							color: "failure",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: q("Insufficient input token balance. Your transaction may fail.")
						}), (0, e.jsxs)(p.Z, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: [A, B]
						})]
					}), null !== h ? (0, e.jsx)($.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "12px 0 0 0px"
						},
						children: (0, e.jsxs)(p.Z, {
							color: "textSubtle",
							children: [G, (0, e.jsx)("b", {
								title: h,
								children: C
							}), H]
						})
					}) : null]
				})
			}
			var aM = function(a) {
					var b = a.trade,
						c = a.originalTrade,
						d = a.onAcceptChanges,
						f = a.allowedSlippage,
						g = a.onConfirm,
						h = a.recipient,
						i = a.currencyBalances,
						j = (0, l.useMemo)(function() {
							var a, d;
							return Boolean(b && c && (a = b, d = c, a.tradeType !== d.tradeType || !a.inputAmount.currency.equals(d.inputAmount.currency) || !a.inputAmount.equalTo(d.inputAmount) || !a.outputAmount.currency.equals(d.outputAmount.currency) || !a.outputAmount.equalTo(d.outputAmount)))
						}, [c, b]),
						k = (0, l.useMemo)(function() {
							return (0, o.b5)(b, f)
						}, [b, f]),
						m = (0, l.useMemo)(function() {
							if ((null == b ? void 0 : b.tradeType) !== n.YL.EXACT_OUTPUT) return null;
							var a = !!(i && i[ah.gN.INPUT]),
								c = a && i[ah.gN.INPUT].currency.isNative,
								d = a ? c ? (0, G.i)(i[ah.gN.INPUT]) : i[ah.gN.INPUT] : null;
							return !!d && !!k && !!k[ah.gN.INPUT] && (d.greaterThan(k[ah.gN.INPUT]) || d.equalTo(k[ah.gN.INPUT]))
						}, [i, b, k]),
						p = (0, l.useCallback)(function() {
							return b ? (0, e.jsx)(aL, {
								trade: b,
								allowedSlippage: f,
								slippageAdjustedAmounts: k,
								isEnoughInputBalance: m,
								recipient: h,
								showAcceptChanges: j,
								onAcceptChanges: d
							}) : null
						}, [f, d, h, j, b, k, m, ]),
						q = (0, l.useCallback)(function() {
							return b ? (0, e.jsx)(aI, {
								onConfirm: g,
								trade: b,
								disabledConfirm: j,
								slippageAdjustedAmounts: k,
								isEnoughInputBalance: m
							}) : null
						}, [g, j, b, m, k]);
					return (0, e.jsx)(aa.pM, {
						topContent: p,
						bottomContent: q
					})
				},
				aN = (0, l.memo)(aM),
				aO = c(90452),
				aP = function(a) {
					var b = a.children,
						c = a.handleDismiss,
						d = (0, E.$G)().t;
					return (0, e.jsx)(aO.Z, {
						title: d("Confirm Swap"),
						headerBackground: "gradients.cardHeader",
						onDismiss: c,
						children: b
					})
				},
				aQ = c(14660),
				aR = function(a) {
					var b = a.onDismiss,
						c = a.message,
						d = a.openSettingModal,
						f = null == c ? void 0 : c.includes("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."),
						g = (0, l.useCallback)(function() {
							null == b || b(), f && d && d()
						}, [f, b, d]),
						h = (0, aQ.Z)().t;
					return f ? (0, e.jsx)(aa.ht, {
						message: (0, e.jsxs)(e.Fragment, {
							children: [(0, e.jsxs)(p.Z, {
								mb: "16px",
								children: [h("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your"), " ", (0, e.jsx)(p.Z, {
									bold: !0,
									display: "inline",
									style: {
										cursor: "pointer"
									},
									onClick: g,
									children: (0, e.jsx)("u", {
										children: h("slippage tolerance.")
									})
								})]
							}), (0, e.jsx)(_.Z, {
								href: "https://docs.lfgswap.finance/products/lfgswap-exchange/trade-guide",
								style: {
									width: "100%",
									justifyContent: "center"
								},
								children: h("What are the potential issues with the token?")
							})]
						})
					}) : (0, e.jsx)(aa.ht, {
						message: c,
						onDismiss: b
					})
				},
				aS = function(a) {
					var b = a.trade,
						c = a.originalTrade,
						d = a.currencyBalances,
						f = a.onAcceptChanges,
						g = a.allowedSlippage,
						h = a.onConfirm,
						i = a.onDismiss,
						j = a.customOnDismiss,
						k = a.recipient,
						m = a.swapErrorMessage,
						n = a.attemptingTxn,
						o = a.txHash,
						p = a.openSettingModal,
						q = (0, D.Z)().chainId,
						r = (0, l.useCallback)(function() {
							j && j(), null == i || i()
						}, [j, i]),
						s = (0, l.useCallback)(function() {
							return m ? (0, e.jsx)(aR, {
								openSettingModal: p,
								onDismiss: i,
								message: m
							}) : (0, e.jsx)(aN, {
								trade: b,
								currencyBalances: d,
								originalTrade: c,
								onAcceptChanges: f,
								allowedSlippage: g,
								onConfirm: h,
								recipient: k
							})
						}, [b, c, f, g, h, k, m, i, p, d, ]);
					return q ? (0, e.jsx)(aP, {
						handleDismiss: r,
						children: n ? (0, e.jsx)(ag, {
							trade: b
						}) : o ? (0, e.jsx)(aa.rD, {
							chainId: q,
							hash: o,
							onDismiss: r,
							currencyToAdd: null == b ? void 0 : b.outputAmount.currency
						}) : s()
					}) : null
				},
				aT = (0, l.memo)(aS),
				aU = c(71372),
				aV = c(99534);

			function aW(a) {
				return null != a
			}
			var aX = function(a) {
					var b, c, d, e, f;
					return b = a, c = aW, e = (d = (0, l.useState)(function() {
						return c && c(b) ? b : void 0
					}))[0], f = d[1], (0, l.useEffect)(function() {
						f(function(a) {
							return !c || c(b) ? b : a
						})
					}, [c, b]), e
				},
				aY = c(68605),
				aZ = c(94528),
				a$ = c(53854),
				a_ = (0, l.memo)(function(a) {
					var b = a.trade;
					return (0, e.jsx)(t.Z, {
						flexWrap: "wrap",
						width: "100%",
						justifyContent: "flex-end",
						alignItems: "center",
						children: b.route.path.map(function(a, b, c) {
							var d = b === c.length - 1,
								f = (0, a$.Bv)(a);
							return (0, e.jsxs)(l.Fragment, {
								children: [(0, e.jsx)(t.Z, {
									alignItems: "end",
									children: (0, e.jsx)(p.Z, {
										fontSize: "14px",
										ml: "0.125rem",
										mr: "0.125rem",
										children: f.symbol
									})
								}), !d && (0, e.jsx)(aZ.Z, {
									width: "12px"
								})]
							}, b)
						})
					})
				});

			function a0(a) {
				var b, c, d, f, g = a.trade,
					h = a.allowedSlippage,
					i = (0, E.$G)().t,
					j = (0, o.U7)(g),
					k = j.priceImpactWithoutFee,
					l = j.realizedLPFee,
					m = g.tradeType === n.YL.EXACT_INPUT,
					q = (0, o.b5)(g, h),
					r = "".concat((100 * al.om).toFixed(2), "%"),
					s = "".concat((100 * al.BY).toFixed(2), "%"),
					t = "".concat((100 * al.hT).toFixed(4), "%"),
					u = "".concat((100 * al.xy).toFixed(4), "%");
				return (0, e.jsxs)($.Tz, {
					style: {
						padding: "0 16px"
					},
					children: [(0, e.jsxs)(ak.m0, {
						children: [(0, e.jsxs)(ak.DA, {
							children: [(0, e.jsx)(p.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: i(m ? "Minimum received" : "Maximum sold")
							}), (0, e.jsx)(aj.Z, {
								text: i("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, e.jsx)(ak.DA, {
							children: (0, e.jsx)(p.Z, {
								fontSize: "14px",
								children: m ? null !== (d = "".concat(null === (b = q[ah.gN.OUTPUT]) || void 0 === b ? void 0 : b.toSignificant(4), " ").concat(g.outputAmount.currency.symbol)) && void 0 !== d ? d : "-" : null !== (f = "".concat(null === (c = q[ah.gN.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4), " ").concat(g.inputAmount.currency.symbol)) && void 0 !== f ? f : "-"
							})
						})]
					}), (0, e.jsxs)(ak.m0, {
						children: [(0, e.jsxs)(ak.DA, {
							children: [(0, e.jsx)(p.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: i("Price Impact")
							}), (0, e.jsx)(aj.Z, {
								text: i("The difference between the market price and estimated price due to trade size."),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, e.jsx)(aF, {
							priceImpact: k
						})]
					}), (0, e.jsxs)(ak.m0, {
						children: [(0, e.jsxs)(ak.DA, {
							children: [(0, e.jsx)(p.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: i("Liquidity Provider Fee")
							}), (0, e.jsx)(aj.Z, {
								text: (0, e.jsxs)(e.Fragment, {
									children: [(0, e.jsx)(p.Z, {
										mb: "12px",
										children: i("For each trade a %amount% fee is paid", {
											amount: r
										})
									}), (0, e.jsxs)(p.Z, {
										children: ["- ", i("%amount% to LP token holders", {
											amount: s
										})]
									}), (0, e.jsxs)(p.Z, {
										children: ["- ", i("%amount% to the Treasury", {
											amount: t
										})]
									}), (0, e.jsxs)(p.Z, {
										children: ["- ", i("%amount% towards LFG buyback and burn", {
											amount: u
										})]
									})]
								}),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, e.jsx)(p.Z, {
							fontSize: "14px",
							children: l ? "".concat(l.toSignificant(4), " ").concat(g.inputAmount.currency.symbol) : "-"
						})]
					})]
				})
			}

			function a1(a) {
				var b = a.trade,
					c = (0, E.$G)().t,
					d = (0, j.Z)((0, aY.$2)(), 1)[0],
					f = Boolean(b && b.route.path.length > 2);
				return (0, e.jsx)($.Tz, {
					gap: "0px",
					children: b && (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)(a0, {
							trade: b,
							allowedSlippage: d
						}), f && (0, e.jsx)(e.Fragment, {
							children: (0, e.jsxs)(ak.m0, {
								style: {
									padding: "0 16px"
								},
								children: [(0, e.jsxs)("span", {
									style: {
										display: "flex",
										alignItems: "center"
									},
									children: [(0, e.jsx)(p.Z, {
										fontSize: "14px",
										color: "textSubtle",
										children: c("Route")
									}), (0, e.jsx)(aj.Z, {
										text: c("Routing through these tokens resulted in the best price for your trade."),
										ml: "4px",
										placement: "top-start"
									})]
								}), (0, e.jsx)(a_, {
									trade: b
								})]
							})
						})]
					})
				})
			}

			function a2() {
				var a = (0, k.Z)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
				return a2 = function() {
					return a
				}, a
			}
			var a3 = m.ZP.div.withConfig({
				componentId: "sc-ddb625d1-0"
			})(a2(), function(a) {
				return a.show ? "16px" : 0
			}, function(a) {
				return a.theme.colors.invertedContrast
			}, function(a) {
				return a.show ? "translateY(0%)" : "translateY(-100%)"
			});

			function a4(a) {
				var b, c = a.trade,
					d = (0, aV.Z)(a, ["trade"]),
					f = aX(c);
				return (0, e.jsx)(a3, {
					show: Boolean(c),
					children: (0, e.jsx)(a1, (0, i.Z)((0, h.Z)({}, d), {
						trade: null !== (b = null != c ? c : f) && void 0 !== b ? b : void 0
					}))
				})
			}

			function a5(a) {
				var b, c, d, f, g, h = a.price,
					i = a.showInverted,
					j = a.setShowInverted,
					k = i ? null == h ? void 0 : h.toSignificant(6) : null === (b = null == h ? void 0 : h.invert()) || void 0 === b ? void 0 : b.toSignificant(6),
					l = Boolean((null == h ? void 0 : h.baseCurrency) && (null == h ? void 0 : h.quoteCurrency)),
					m = i ? "".concat(null == h ? void 0 : null === (c = h.quoteCurrency) || void 0 === c ? void 0 : c.symbol, " per ").concat(null == h ? void 0 : null === (d = h.baseCurrency) || void 0 === d ? void 0 : d.symbol) : "".concat(null == h ? void 0 : null === (f = h.baseCurrency) || void 0 === f ? void 0 : f.symbol, " per ").concat(null == h ? void 0 : null === (g = h.quoteCurrency) || void 0 === g ? void 0 : g.symbol);
				return (0, e.jsx)(p.Z, {
					style: {
						justifyContent: "center",
						alignItems: "center",
						display: "flex"
					},
					children: l ? (0, e.jsxs)(e.Fragment, {
						children: [null != k ? k : "-", " ", m, (0, e.jsx)(az, {
							onClick: function() {
								return j(!i)
							},
							children: (0, e.jsx)(ai.Z, {
								width: "14px"
							})
						})]
					}) : "-"
				})
			}

			function a6() {
				var a = (0, k.Z)(["\n  width: 50%;\n"]);
				return a6 = function() {
					return a
				}, a
			}

			function a7() {
				var a = (0, k.Z)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
				return a7 = function() {
					return a
				}, a
			}

			function a8() {
				var a = (0, k.Z)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
				return a8 = function() {
					return a
				}, a
			}

			function a9() {
				var a = (0, k.Z)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
				return a9 = function() {
					return a
				}, a
			}
			var ba = (0, m.ZP)(ak.m0).withConfig({
					componentId: "sc-b6a41b3e-0"
				})(a6()),
				bb = m.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-1"
				})(a7(), function(a) {
					var b = a.theme,
						c = a.confirmed,
						d = a.disabled;
					return d ? b.colors.backgroundDisabled : c ? b.colors.success : b.colors.primary
				}),
				bc = m.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-2"
				})(a8()),
				bd = m.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-3"
				})(a9(), function(a) {
					var b = a.theme,
						c = a.prevConfirmed,
						d = a.disabled;
					return d ? b.colors.backgroundDisabled : c ? b.colors.success : b.colors.primary
				}, function(a) {
					var b = a.theme,
						c = a.prevConfirmed,
						d = a.disabled;
					return d ? b.colors.backgroundDisabled : c ? b.colors.primary : b.colors.backgroundDisabled
				});

			function be(a) {
				var b = a.steps,
					c = a.disabled,
					d = void 0 !== c && c,
					f = (0, aV.Z)(a, ["steps", "disabled"]);
				return (0, e.jsx)($.Tz, (0, i.Z)((0, h.Z)({
					justify: "center"
				}, f), {
					children: (0, e.jsxs)(ba, {
						children: [b.map(function(a, c) {
							return (0, e.jsxs)(bc, {
								children: [(0, e.jsx)(bb, {
									confirmed: a,
									disabled: d || !b[c - 1] && 0 !== c,
									children: a ? "✓" : c + 1
								}), (0, e.jsx)(bd, {
									prevConfirmed: a,
									disabled: d
								})]
							}, c)
						}), (0, e.jsx)(bb, {
							disabled: d || !b[b.length - 1],
							children: b.length + 1
						})]
					})
				}))
			}
			var bf, bg = c(45460),
				bh = c(43151),
				bi = c(86435),
				bj = c(50165),
				bk = c(95605),
				bl = c(47568),
				bm = c(34051),
				bn = c.n(bm),
				bo = c(97938),
				bp = c(55892),
				bq = c(71900),
				br = c(5039),
				bs = c(71228);
			(bf = d || (d = {}))[bf.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", bf[bf.WRAP = 1] = "WRAP", bf[bf.UNWRAP = 2] = "UNWRAP";
			var bt = {
					wrapType: d.NOT_APPLICABLE
				},
				bu = c(81081),
				bv = c(28630),
				bw = c(49438),
				bx = c(9355),
				by = c(67334),
				bz = c(59750),
				bA = c(23917),
				bB = c(80421),
				bC = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsxs)(p.Z, {
							children: [a("SAFEMOON has been migrated to"), " ", (0, e.jsx)(bB.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://blockscout.com/poa/sokol/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
								children: a("a new contract address.")
							}), " ", a("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, e.jsxs)(bB.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://twitter.com/safemoon/status/1477770592031887360",
								children: [a("Safemoon's announcement"), "."]
							})]
						})
					})
				},
				bD = bC,
				bE = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsxs)(p.Z, {
							children: [a("ITAM has been rebranded as ITAM CUBE."), " ", (0, e.jsx)(bB.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://itam.network/swap",
								children: a("Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.")
							}), " ", a("All transfers of the old ITAM token will be disabled after the swap.")]
						})
					})
				},
				bF = bE,
				bG = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(p.Z, {
						children: a("Warning: BONDLY has been compromised. Please remove liquidity until further notice.")
					})
				},
				bH = bG,
				bI = c(19731),
				bJ = function(a) {
					var b = a.handleContinueClick,
						c = (0, E.$G)().t,
						d = (0, l.useState)(!1),
						f = d[0],
						g = d[1];
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsxs)(t.Z, {
							justifyContent: "space-between",
							children: [(0, e.jsxs)(t.Z, {
								alignItems: "center",
								children: [(0, e.jsx)(bI.Z, {
									name: "confirmed",
									type: "checkbox",
									checked: f,
									onChange: function() {
										return g(!f)
									},
									scale: "sm"
								}), (0, e.jsx)(p.Z, {
									ml: "10px",
									style: {
										userSelect: "none"
									},
									children: c("I understand")
								})]
							}), (0, e.jsx)(w.Z, {
								disabled: !f,
								onClick: b,
								children: c("Continue")
							})]
						})
					})
				},
				bK = bJ,
				bL = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsxs)(p.Z, {
							children: [a("Crypto Cars (CCAR) has been migrated to"), " ", (0, e.jsx)(bB.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://blockscout.com/poa/sokol/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396",
								children: a("a new contract address.")
							}), " ", a("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, e.jsx)(bB.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://t.me/Crypto_Cars_Official/465037",
								children: a("the announcement.")
							})]
						})
					})
				},
				bM = bL,
				bN = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsxs)(e.Fragment, {
						children: [(0, e.jsx)(p.Z, {
							children: a("Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:")
						}), (0, e.jsx)(p.Z, {
							children: "1 BTT (OLD) = 1,000 BTT (NEW)"
						}), (0, e.jsxs)(p.Z, {
							mb: "8px",
							children: [a("Trade the new BTT token"), " ", (0, e.jsx)(bB.Z, {
								style: {
									display: "inline"
								},
								href: "https://lfgswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
								children: a("here")
							})]
						}), (0, e.jsx)(_.Z, {
							href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142",
							children: a("For more details on the swap, please refer here.")
						})]
					})
				},
				bO = bN,
				bP = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsx)(p.Z, {
							children: a("Suspicious rugpull token")
						})
					})
				},
				bQ = bP,
				bR = function() {
					var a = (0, E.$G)().t;
					return (0, e.jsx)(e.Fragment, {
						children: (0, e.jsx)(p.Z, {
							children: a("Risk Warning: This token is subject to high price risk. Please do your own research before trading this token. Please also note that as of 24 June 2022 there is also a reflection fee for every transfer of FREE ranging from 2.5 to 5% per trade/transfer.")
						})
					})
				},
				bS = bR;

			function bT() {
				var a = (0, k.Z)(["\n  max-width: 440px;\n"]);
				return bT = function() {
					return a
				}, a
			}

			function bU() {
				var a = (0, k.Z)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);
				return bU = function() {
					return a
				}, a
			}
			var bV = (0, m.ZP)(bx.F0).withConfig({
					componentId: "sc-7430ef3e-0"
				})(bT()),
				bW = (0, m.ZP)(by.Z).withConfig({
					componentId: "sc-7430ef3e-1"
				})(bU()),
				bX = function(a) {
					var b, c = a.swapCurrency,
						d = a.onDismiss,
						f = (0, E.$G)().t,
						h = (0, bA.ZP)().theme,
						i = (b = {}, (0, g.Z)(b, Q.safemoon.address, {
							symbol: Q.safemoon.symbol,
							component: (0, e.jsx)(bD, {})
						}), (0, g.Z)(b, Q.bondly.address, {
							symbol: Q.bondly.symbol,
							component: (0, e.jsx)(bH, {})
						}), (0, g.Z)(b, Q.itam.address, {
							symbol: Q.itam.symbol,
							component: (0, e.jsx)(bF, {})
						}), (0, g.Z)(b, Q.ccar.address, {
							symbol: Q.ccar.symbol,
							component: (0, e.jsx)(bM, {})
						}), (0, g.Z)(b, Q.bttold.address, {
							symbol: Q.bttold.symbol,
							component: (0, e.jsx)(bO, {})
						}), (0, g.Z)(b, Q.pokemoney.address, {
							symbol: Q.pokemoney.symbol,
							component: (0, e.jsx)(bQ, {})
						}), (0, g.Z)(b, Q.free.address, {
							symbol: Q.free.symbol,
							component: (0, e.jsx)(bS, {})
						}), b),
						j = i[c.address];
					return (0, e.jsxs)(bV, {
						$minWidth: "280px",
						children: [(0, e.jsx)(bx.xB, {
							background: h.colors.gradients.cardHeader,
							children: (0, e.jsx)(bz.Z, {
								p: "12px 24px",
								children: f("Notice for trading %symbol%", {
									symbol: j.symbol
								})
							})
						}), (0, e.jsxs)(bx.fe, {
							p: "24px",
							children: [(0, e.jsx)(bW, {
								variant: "warning",
								mb: "24px",
								children: (0, e.jsx)(y.Z, {
									children: j.component
								})
							}), (0, e.jsx)(bK, {
								handleContinueClick: d
							})]
						})]
					})
				};

			function bY() {
				var a = (0, k.Z)(["\n  flex-shrink: 0;\n  height: fit-content;\n  padding: 0 24px;\n\n  ", " {\n    padding: 0 40px;\n  }\n\n  ", " {\n    ", ";\n  }\n"]);
				return bY = function() {
					return a
				}, a
			}

			function bZ() {
				var a = (0, k.Z)(["\n  width: 328px;\n"]);
				return bZ = function() {
					return a
				}, a
			}
			var b$ = (0, m.ZP)(t.Z).withConfig({
					componentId: "sc-f3994e2-0"
				})(bY(), function(a) {
					return a.theme.mediaQueries.lg
				}, function(a) {
					return a.theme.mediaQueries.xxl
				}, function(a) {
					return a.$isChartExpanded ? "padding: 0 120px" : "padding: 0 40px"
				}),
				b_ = (0, m.ZP)(y.Z).withConfig({
					componentId: "sc-f3994e2-1"
				})(bZ()),
				b0 = c(45341),
				b1 = c(85714),
				b2 = c(86921),
				b3 = c(24339),
				b4 = c(17058),
				b5 = function(a) {
					return (0, e.jsxs)(b4.Z, (0, i.Z)((0, h.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, a), {
						children: [(0, e.jsx)("path", {
							stroke: "none",
							fill: "#D7CAEC",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, e.jsxs)("defs", {
							children: [(0, e.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, e.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, e.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						})]
					}))
				},
				b6 = function(a) {
					var b = a.disabled,
						c = (0, aV.Z)(a, ["disabled"]);
					return b ? (0, e.jsx)(b5, (0, h.Z)({}, c)) : (0, e.jsxs)(b4.Z, (0, i.Z)((0, h.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, c), {
						children: [(0, e.jsx)("path", {
							stroke: "none",
							fill: "#7A6EAA",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, e.jsxs)("defs", {
							children: [(0, e.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, e.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, e.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						}), (0, e.jsx)("g", {
							clipPath: "url(#arrow-clip)",
							children: (0, e.jsx)("circle", {
								cx: "12",
								cy: "12",
								r: "5",
								transform: "rotate(365,12,12)",
								fill: "none",
								stroke: "#D7CAEC",
								strokeWidth: "16",
								strokeDasharray: "30",
								strokeDashoffset: "0",
								children: (0, e.jsx)("animate", {
									attributeName: "stroke-dashoffset",
									values: "0;-30",
									begin: "arrow_loading.click; 0.7s",
									repeatCount: "indefinite",
									dur: "6.3s"
								})
							})
						}), (0, e.jsx)("use", {
							xlinkHref: "#arrow"
						}), (0, e.jsx)("animateTransform", {
							id: "transform_0",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "0 0 0",
							to: "-10 0 0",
							dur: "0.07s",
							begin: "arrow_loading.click;",
							repeatCount: "1"
						}), (0, e.jsx)("animateTransform", {
							id: "transform_1",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "-45 0 0",
							to: "390 0 0",
							dur: "0.6s",
							begin: "transform_0.end",
							repeatCount: "1"
						}), (0, e.jsx)("animateTransform", {
							id: "transform_2",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "390 0 0",
							to: "360 0 0",
							dur: "0.15s",
							begin: "transform_1.end",
							repeatCount: "1"
						})]
					}))
				};

			function b7() {
				var a = (0, k.Z)(["\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"]);
				return b7 = function() {
					return a
				}, a
			}

			function b8() {
				var a = (0, k.Z)(["\n  color: ", ";\n"]);
				return b8 = function() {
					return a
				}, a
			}
			var b9 = (0, m.ZP)(t.Z).withConfig({
				componentId: "sc-595da3ab-0"
			})(b7(), function(a) {
				return a.theme.colors.cardBorder
			});
			(0, m.ZP)(q.Z).withConfig({
				componentId: "sc-595da3ab-1"
			})(b8(), function(a) {
				return a.theme.colors.textSubtle
			});
			var ca = function(a) {
					var b = a.title,
						c = a.subtitle,
						d = (a.setIsChartDisplayed, a.isChartDisplayed, a.hasAmount),
						f = a.onRefreshPrice,
						g = (0, j.Z)((0, aY.DG)(), 1),
						h = g[0],
						i = (0, j.Z)((0, s.Z)((0, e.jsx)(b2.Z, {})), 1)[0],
						k = (0, l.useCallback)(function() {
							return null == f ? void 0 : f()
						}, [f]);
					return (0, e.jsxs)(b9, {
						children: [(0, e.jsxs)(t.Z, {
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
							children: [(0, e.jsx)(t.Z, {
								flexDirection: "column",
								alignItems: "flex-end",
								width: "100%",
								mr: 18,
								children: (0, e.jsx)(bz.Z, {
									as: "h2",
									children: b
								})
							}), (0, e.jsxs)(t.Z, {
								children: [(0, e.jsx)(b0.Z, {
									show: h,
									children: (0, e.jsx)(b3.Z, {
										color: "textSubtle",
										mr: "0",
										mode: V.a.SWAP_LIQUIDITY
									})
								}), (0, e.jsx)(q.Z, {
									onClick: i,
									variant: "text",
									scale: "sm",
									children: (0, e.jsx)(b1.Z, {
										color: "textSubtle",
										width: "24px"
									})
								}), (0, e.jsx)(q.Z, {
									variant: "text",
									scale: "sm",
									onClick: k,
									children: (0, e.jsx)(b6, {
										disabled: !d,
										color: "textSubtle",
										width: "27px"
									})
								})]
							})]
						}), (0, e.jsx)(t.Z, {
							alignItems: "center",
							children: (0, e.jsx)(p.Z, {
								color: "textSubtle",
								fontSize: "14px",
								children: c
							})
						})]
					})
				},
				cb = c(19131),
				cc = c(40330),
				cd = c(59225),
				ce = c(28996);

			function cf() {
				var a = (0, k.Z)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"]);
				return cf = function() {
					return a
				}, a
			}

			function cg() {
				var a = (0, k.Z)(["\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    background-color: ", ";\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n"]);
				return cg = function() {
					return a
				}, a
			}
			var ch = (0, m.ZP)(p.Z).withConfig({
					componentId: "sc-4f45876a-0"
				})(cf(), function(a) {
					return a.theme.colors.secondary
				}),
				ci = (0, m.ZP)(q.Z).withConfig({
					componentId: "sc-4f45876a-1"
				})(cg(), function(a) {
					return a.theme.colors.primary
				}),
				cj = [n.a_.BSC],
				ck = (0, U.h)(U.Z);

			function cl() {
				var a, b, c, f, k, q, H, I, J, K, L, M, N = (0, C.useRouter)(),
					O = (0, bu.jj)(),
					P = (0, E.$G)().t,
					Q = (0, r.Z)().isMobile,
					R = (0, l.useState)(!1),
					U = R[0];
				R[1];
				var W = (0, j.Z)((0, aY.vD)(Q), 2),
					_ = W[0],
					aa = W[1],
					ab = (0, l.useState)(_),
					ac = ab[0],
					ad = ab[1],
					ae = X(),
					af = ae.refreshBlockNumber,
					ag = ae.isLoading,
					ai = (0, m.Fg)().isDark;
				(0, l.useEffect)(function() {
					aa(ac)
				}, [ac, aa]);
				var aj, al, am, an, ao, ap, aq, ar, as, at, au, av, ay = [(0, bi.U8)(null == O ? void 0 : O.inputCurrencyId), (0, bi.U8)(null == O ? void 0 : O.outputCurrencyId), ],
					az = ay[0],
					aA = ay[1],
					aB = (0, l.useMemo)(function() {
						var a;
						return null !== (q = (a = [az, aA]).filter(function(a) {
							return null == a ? void 0 : a.isToken
						})) && void 0 !== q ? q : []
					}, [az, aA]),
					aC = (0, D.Z)(),
					aE = aC.account,
					aF = aC.chainId,
					aG = (0, bi.e_)(),
					aH = aB && aB.filter(function(a) {
						return !(a.address in aG) && a.chainId === aF
					}),
					aI = (0, j.Z)((0, aY.DG)(), 1),
					aJ = aI[0],
					aK = (0, j.Z)((0, aY.$2)(), 1),
					aL = aK[0],
					aM = (0, bu.dU)(),
					aN = aM.independentField,
					aO = aM.typedValue,
					aP = aM.recipient,
					aQ = aM[ah.gN.INPUT],
					aR = aQ.currencyId,
					aS = aM[ah.gN.OUTPUT],
					aV = aS.currencyId,
					aW = (0, bi.U8)(aR),
					aX = (0, bi.U8)(aV),
					aZ = (0, bu.SM)(aN, aO, aW, aX, aP),
					a$ = aZ.v2Trade,
					a_ = aZ.currencyBalances,
					a0 = aZ.parsedAmount,
					a1 = aZ.currencies,
					a2 = aZ.inputError,
					a3 = (aj = a1[ah.gN.INPUT], al = a1[ah.gN.OUTPUT], am = aO, an = (0, E.$G)().t, ao = (0, D.Z)(), ap = ao.chainId, aq = ao.account, ar = (0, bs.d)().callWithGasPrice, as = (0, br.vR)(), at = (0, bq._h)(null != aq ? aq : void 0, aj), au = (0, l.useMemo)(function() {
						return (0, bo.Z)(am, aj)
					}, [aj, am]), av = (0, bp.h7)(), (0, l.useMemo)(function() {
						if (!as || !ap || !aj || !al) return bt;
						var a, b, c = au && at && !at.lessThan(au);
						return (null == aj ? void 0 : aj.isNative) && (null === (a = n.FX[ap]) || void 0 === a ? void 0 : a.equals(al)) ? {
							wrapType: d.WRAP,
							execute: c && au ? (0, bl.Z)(bn().mark(function a() {
								var b, c, d, e;
								return bn().wrap(function(a) {
									for (;;) switch (a.prev = a.next) {
										case 0:
											return a.prev = 0, a.next = 3, ar(as, "deposit", void 0, {
												value: "0x".concat(au.quotient.toString(16))
											});
										case 3:
											b = a.sent, c = au.toSignificant(6), d = aj.symbol, e = n.FX[ap].symbol, av(b, {
												summary: "Wrap ".concat(c, " ").concat(d, " to ").concat(e),
												translatableSummary: {
													text: "Wrap %amount% %native% to %wrap%",
													data: {
														amount: c,
														native: d,
														wrap: e
													}
												},
												type: "wrap"
											}), a.next = 13;
											break;
										case 10:
											a.prev = 10, a.t0 = a.catch(0), console.error("Could not deposit", a.t0);
										case 13:
										case "end":
											return a.stop()
									}
								}, a, null, [
									[0, 10]
								])
							})) : void 0,
							inputError: c ? void 0 : an("Insufficient %symbol% balance", {
								symbol: aj.symbol
							})
						} : (null === (b = n.FX[ap]) || void 0 === b ? void 0 : b.equals(aj)) && (null == al ? void 0 : al.isNative) ? {
							wrapType: d.UNWRAP,
							execute: c && au ? (0, bl.Z)(bn().mark(function a() {
								var b, c, d, e;
								return bn().wrap(function(a) {
									for (;;) switch (a.prev = a.next) {
										case 0:
											return a.prev = 0, a.next = 3, ar(as, "withdraw", ["0x".concat(au.quotient.toString(16)), ]);
										case 3:
											b = a.sent, c = au.toSignificant(6), d = n.FX[ap].symbol, e = al.symbol, av(b, {
												summary: "Unwrap ".concat(c, " ").concat(d, " to ").concat(e),
												translatableSummary: {
													text: "Unwrap %amount% %wrap% to %native%",
													data: {
														amount: c,
														wrap: d,
														native: e
													}
												}
											}), a.next = 13;
											break;
										case 10:
											a.prev = 10, a.t0 = a.catch(0), console.error("Could not withdraw", a.t0);
										case 13:
										case "end":
											return a.stop()
									}
								}, a, null, [
									[0, 10]
								])
							})) : void 0,
							inputError: c ? void 0 : an("Insufficient %symbol% balance", {
								symbol: aj.symbol
							})
						} : bt
					}, [as, ap, aj, al, an, au, at, av, ar])),
					a6 = a3.wrapType,
					a7 = a3.execute,
					a8 = a3.inputError,
					a9 = a6 !== d.NOT_APPLICABLE,
					ba = a9 ? void 0 : a$;
				(0, bu.yF)(aR, aW, aV, aX);
				var bb = a9 ? (H = {}, (0, g.Z)(H, ah.gN.INPUT, a0), (0, g.Z)(H, ah.gN.OUTPUT, a0), H) : (I = {}, (0, g.Z)(I, ah.gN.INPUT, aN === ah.gN.INPUT ? a0 : null == ba ? void 0 : ba.inputAmount), (0, g.Z)(I, ah.gN.OUTPUT, aN === ah.gN.OUTPUT ? a0 : null == ba ? void 0 : ba.outputAmount), I),
					bc = (0, T._)(),
					bd = bc.onSwitchTokens,
					bf = bc.onCurrencySelection,
					bm = bc.onUserInput,
					bx = bc.onChangeRecipient,
					by = !a2,
					bz = aN === ah.gN.INPUT ? ah.gN.OUTPUT : ah.gN.INPUT,
					bA = (0, l.useCallback)(function(a) {
						bm(ah.gN.INPUT, a)
					}, [bm]),
					bB = (0, l.useCallback)(function(a) {
						bm(ah.gN.OUTPUT, a)
					}, [bm]),
					bC = (0, l.useState)({
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0
					}),
					bD = bC[0],
					bE = bD.tradeToConfirm,
					bF = bD.swapErrorMessage,
					bG = bD.attemptingTxn,
					bH = bD.txHash,
					bI = bC[1],
					bJ = (L = {}, (0, g.Z)(L, aN, aO), (0, g.Z)(L, bz, a9 ? null !== (J = null === (a = bb[aN]) || void 0 === a ? void 0 : a.toExact()) && void 0 !== J ? J : "" : null !== (K = null === (b = bb[bz]) || void 0 === b ? void 0 : b.toSignificant(6)) && void 0 !== K ? K : ""), L),
					bK = null == ba ? void 0 : ba.route,
					bL = Boolean(a1[ah.gN.INPUT] && a1[ah.gN.OUTPUT] && (null === (c = bb[aN]) || void 0 === c ? void 0 : c.greaterThan(F.iV))),
					bM = (0, j.Z)((0, bj.re)(ba, aL, aF), 2),
					bN = bM[0],
					bO = bM[1],
					bP = (0, l.useState)(!1),
					bQ = bP[0],
					bR = bP[1];
				(0, l.useEffect)(function() {
					bN === bj.UK.PENDING && bR(!0)
				}, [bN, bQ]);
				var bS = (0, G.i)(a_[ah.gN.INPUT]),
					bT = Boolean(bS && (null === (f = bb[ah.gN.INPUT]) || void 0 === f ? void 0 : f.equalTo(bS))),
					bU = (0, bk.o)(ba, aL, aP),
					bV = bU.callback,
					bW = bU.error,
					bY = (0, o.U7)(ba).priceImpactWithoutFee,
					bZ = (0, j.Z)((0, aY.RO)(), 1)[0],
					b0 = (0, l.useCallback)(function() {
						(!bY || function(a, b) {
							if (!a.lessThan(F.EV)) {
								var c = "confirm";
								return window.prompt(b('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', {
									amount: F.EV.toFixed(0),
									word: c
								})) === c
							}
							return !!a.lessThan(F.Uf) || window.confirm(b("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", {
								amount: F.Uf.toFixed(0)
							}))
						}(bY, P)) && bV && (bI({
							attemptingTxn: !0,
							tradeToConfirm: bE,
							swapErrorMessage: void 0,
							txHash: void 0
						}), bV().then(function(a) {
							bI({
								attemptingTxn: !1,
								tradeToConfirm: bE,
								swapErrorMessage: void 0,
								txHash: a
							})
						}).catch(function(a) {
							bI({
								attemptingTxn: !1,
								tradeToConfirm: bE,
								swapErrorMessage: a.message,
								txHash: void 0
							})
						}))
					}, [bY, bV, bE, P]),
					b1 = (0, l.useState)(!1),
					b2 = b1[0],
					b3 = b1[1],
					b4 = (0, o.oX)(bY),
					b5 = !a2 && (bN === bj.UK.NOT_APPROVED || bN === bj.UK.PENDING || bQ && bN === bj.UK.APPROVED) && !(b4 > 3 && !aJ),
					b6 = (0, l.useCallback)(function() {
						bI({
							tradeToConfirm: bE,
							attemptingTxn: bG,
							swapErrorMessage: bF,
							txHash: bH
						}), bH && bm(ah.gN.INPUT, "")
					}, [bG, bm, bF, bE, bH]),
					b7 = (0, l.useCallback)(function() {
						bI({
							tradeToConfirm: ba,
							swapErrorMessage: bF,
							txHash: bH,
							attemptingTxn: bG
						})
					}, [bG, bF, ba, bH]),
					b8 = (0, l.useState)(null),
					b9 = b8[0],
					cf = b8[1],
					cg = (0, j.Z)((0, s.Z)((0, e.jsx)(bX, {
						swapCurrency: b9
					}), !1), 1),
					cl = cg[0];
				(0, l.useEffect)(function() {
					b9 && cl()
				}, [b9]);
				var cm = (0, l.useCallback)(function(a) {
						bR(!1), bf(ah.gN.INPUT, a), S(a) ? cf(a) : cf(null), (0, cd.Z)("inputCurrency", (0, ce.H)(a))
					}, [bf]),
					cn = (0, l.useCallback)(function() {
						bS && bm(ah.gN.INPUT, bS.toExact())
					}, [bS, bm]),
					co = (0, l.useCallback)(function(a) {
						bf(ah.gN.OUTPUT, a), S(a) ? cf(a) : cf(null), (0, cd.Z)("outputCurrency", (0, ce.H)(a))
					}, [bf]),
					cp = (0, z.mP)(null == a1 ? void 0 : a1.INPUT, null == a1 ? void 0 : a1.OUTPUT),
					cq = (0, j.Z)((0, s.Z)((0, e.jsx)(cb.Z, {
						tokens: aH,
						onCancel: function() {
							return N.push("/swap")
						}
					})), 1),
					cr = cq[0];
				(0, l.useEffect)(function() {
					aH.length > 0 && cr()
				}, [aH.length]);
				var cs = (0, l.useState)(!1),
					ct = cs[0],
					cu = cs[1],
					cv = (0, j.Z)((0, s.Z)((0, e.jsx)(ck, {
						customOnDismiss: function() {
							return cu(!0)
						},
						mode: V.a.SWAP_LIQUIDITY
					})), 1),
					cw = cv[0],
					cx = (0, j.Z)((0, s.Z)((0, e.jsx)(aT, {
						trade: ba,
						originalTrade: bE,
						currencyBalances: a_,
						onAcceptChanges: b7,
						attemptingTxn: bG,
						txHash: bH,
						recipient: aP,
						allowedSlippage: aL,
						onConfirm: b0,
						swapErrorMessage: bF,
						customOnDismiss: b6,
						openSettingModal: cw
					}), !0, !0, "confirmSwapModal"), 1),
					cy = cx[0];
				(0, l.useEffect)(function() {
					ct && (cu(!1), bI(function(a) {
						return (0, i.Z)((0, h.Z)({}, a), {
							swapErrorMessage: void 0
						})
					}), cy())
				}, [ct, cy]);
				var cz = Boolean(a0),
					cA = (0, l.useCallback)(function() {
						cz && af()
					}, [cz, af]);
				return (0, l.useMemo)(function() {
					return !aF || cj.includes(aF)
				}, [aF]), (0, e.jsx)(bw.Z, {
					removePadding: U,
					hideFooterOnDesktop: U,
					style: {
						background: Q ? ai ? "url(/images/swap-bg-dark-mobile1.png)" : "url(/images/swap-bg-light-mobile1.png)" : ai ? "url(/images/swap-bg-dark1.png)" : "url(/images/swap-bg-light1.png)",
						backgroundSize: "100% 100%"
					},
					children: (0, e.jsx)(t.Z, {
						width: "100%",
						justifyContent: "center",
						position: "relative",
						children: (0, e.jsx)(t.Z, {
							flexDirection: "column",
							children: (0, e.jsx)(b$, {
								$isChartExpanded: U,
								children: (0, e.jsxs)(b_, {
									mt: U ? "24px" : "0",
									children: [(0, e.jsxs)(bg.j, {
										children: [(0, e.jsx)(ca, {
											title: P("Swap"),
											subtitle: P("Trade tokens in an instant"),
											setIsChartDisplayed: ad,
											isChartDisplayed: ac,
											hasAmount: cz,
											onRefreshPrice: cA
										}), (0, e.jsxs)(aw, {
											id: "swap-page",
											style: {
												minHeight: "412px"
											},
											children: [(0, e.jsxs)($.Tz, {
												gap: "sm",
												children: [(0, e.jsx)(aU.Z, {
													label: aN === ah.gN.OUTPUT && !a9 && ba ? P("From (estimated)") : P("From"),
													value: bJ[ah.gN.INPUT],
													showMaxButton: !bT,
													currency: a1[ah.gN.INPUT],
													onUserInput: bA,
													onMax: cn,
													onCurrencySelect: cm,
													otherCurrency: a1[ah.gN.OUTPUT],
													id: "swap-currency-input",
													showCommonBases: !0,
													commonBasesType: cc.L0.SWAP_LIMITORDER
												}), (0, e.jsx)($.Tz, {
													justify: "space-between",
													children: (0, e.jsxs)(ak.BA, {
														justify: aJ ? "space-between" : "center",
														style: {
															padding: "0 1rem"
														},
														children: [(0, e.jsxs)(ci, {
															variant: "light",
															scale: "sm",
															onClick: function() {
																bR(!1), bd()
															},
															children: [(0, e.jsx)(u.Z, {
																className: "icon-down",
																color: a1[ah.gN.INPUT] && a1[ah.gN.OUTPUT] ? "primary" : "text"
															}), (0, e.jsx)(v.Z, {
																className: "icon-up-down",
																color: a1[ah.gN.INPUT] && a1[ah.gN.OUTPUT] ? "primary" : "text"
															})]
														}), null === aP && !a9 && aJ ? (0, e.jsx)(w.Z, {
															variant: "text",
															id: "add-recipient-button",
															onClick: function() {
																return bx("")
															},
															children: P("+ Add a send (optional)")
														}) : null]
													})
												}), (0, e.jsx)(aU.Z, {
													value: bJ[ah.gN.OUTPUT],
													onUserInput: bB,
													label: aN === ah.gN.INPUT && !a9 && ba ? P("To (estimated)") : P("To"),
													showMaxButton: !1,
													currency: a1[ah.gN.OUTPUT],
													onCurrencySelect: co,
													otherCurrency: a1[ah.gN.INPUT],
													id: "swap-currency-output",
													showCommonBases: !0,
													commonBasesType: cc.L0.SWAP_LIMITORDER
												}), aJ && null !== aP && !a9 ? (0, e.jsxs)(e.Fragment, {
													children: [(0, e.jsxs)(ak.BA, {
														justify: "space-between",
														style: {
															padding: "0 1rem"
														},
														children: [(0, e.jsx)(ax, {
															clickable: !1,
															children: (0, e.jsx)(u.Z, {
																width: "16px"
															})
														}), (0, e.jsx)(w.Z, {
															variant: "text",
															id: "remove-recipient-button",
															onClick: function() {
																return bx(null)
															},
															children: P("- Remove send")
														})]
													}), (0, e.jsx)(Y.Z, {
														id: "recipient",
														value: aP,
														onChange: bx
													})]
												}) : null, a9 ? null : (0, e.jsxs)($.Tz, {
													gap: "7px",
													style: {
														padding: "0 16px"
													},
													children: [(0, e.jsx)(ak.m0, {
														align: "center",
														children: Boolean(ba) && (0, e.jsxs)(e.Fragment, {
															children: [(0, e.jsx)(ch, {
																children: P("Price")
															}), ag ? (0, e.jsx)(x.Z, {
																width: "100%",
																ml: "8px",
																height: "24px"
															}) : (0, e.jsx)(a5, {
																price: null == ba ? void 0 : ba.executionPrice,
																showInverted: b2,
																setShowInverted: b3
															})]
														})
													}), (0, e.jsxs)(ak.m0, {
														align: "center",
														children: [(0, e.jsx)(ch, {
															children: P("Slippage Tolerance")
														}), (0, e.jsxs)(p.Z, {
															bold: !0,
															color: "primary",
															children: [aL / 100, "%"]
														})]
													})]
												})]
											}), (0, e.jsxs)(y.Z, {
												mt: "0.25rem",
												children: [cp ? (0, e.jsx)(w.Z, {
													width: "100%",
													disabled: !0,
													children: P("Unsupported Asset")
												}) : aE ? a9 ? (0, e.jsx)(B.A, {
													width: "100%",
													disabled: Boolean(a8),
													onClick: a7,
													children: null != a8 ? a8 : a6 === d.WRAP ? "Wrap" : a6 === d.UNWRAP ? "Unwrap" : null
												}) : !bK && bL ? (0, e.jsxs)(Z.h2, {
													style: {
														textAlign: "center",
														padding: "0.75rem"
													},
													children: [(0, e.jsx)(p.Z, {
														color: "textSubtle",
														children: P("Insufficient liquidity for this trade.")
													}), bZ && (0, e.jsx)(p.Z, {
														color: "textSubtle",
														children: P("Try enabling multi-hop trades.")
													})]
												}) : b5 ? (0, e.jsxs)(ak.m0, {
													children: [(0, e.jsx)(B.A, {
														variant: bN === bj.UK.APPROVED ? "success" : "primary",
														onClick: bO,
														disabled: bN !== bj.UK.NOT_APPROVED || bQ,
														width: "48%",
														children: bN === bj.UK.PENDING ? (0, e.jsxs)(ak.BA, {
															gap: "6px",
															justify: "center",
															children: [P("Enabling"), " ", (0, e.jsx)(bv.Z, {
																stroke: "white"
															})]
														}) : bQ && bN === bj.UK.APPROVED ? P("Enabled") : P("Enable %asset%", {
															asset: null !== (M = null === (k = a1[ah.gN.INPUT]) || void 0 === k ? void 0 : k.symbol) && void 0 !== M ? M : ""
														})
													}), (0, e.jsx)(B.A, {
														variant: by && b4 > 2 ? "danger" : "primary",
														onClick: function() {
															aJ ? b0() : (bI({
																tradeToConfirm: ba,
																attemptingTxn: !1,
																swapErrorMessage: void 0,
																txHash: void 0
															}), cy())
														},
														width: "48%",
														id: "swap-button",
														disabled: !by || bN !== bj.UK.APPROVED || b4 > 3 && !aJ,
														children: b4 > 3 && !aJ ? P("Price Impact High") : b4 > 2 ? P("Swap Anyway") : P("Swap")
													})]
												}) : (0, e.jsx)(B.A, {
													variant: by && b4 > 2 && !bW ? "danger" : "primary",
													onClick: function() {
														aJ ? b0() : (bI({
															tradeToConfirm: ba,
															attemptingTxn: !1,
															swapErrorMessage: void 0,
															txHash: void 0
														}), cy())
													},
													id: "swap-button",
													width: "100%",
													disabled: !by || b4 > 3 && !aJ || !!bW,
													children: a2 || (b4 > 3 && !aJ ? P("Price Impact Too High") : b4 > 2 ? P("Swap Anyway") : P("Swap"))
												}) : (0, e.jsx)(bh.Z, {
													width: "100%"
												}), b5 && (0, e.jsx)($.ZP, {
													style: {
														marginTop: "1rem"
													},
													children: (0, e.jsx)(be, {
														steps: [bN === bj.UK.APPROVED]
													})
												}), aJ && bF ? (0, e.jsx)(aD, {
													error: bF
												}) : null]
											})]
										})]
									}), cp ? (0, e.jsx)(A.Z, {
										currencies: [a1.INPUT, a1.OUTPUT]
									}) : ba && (0, e.jsx)(a4, {
										trade: ba
									})]
								})
							})
						})
					})
				})
			}
			var cm = function() {
				return (0, e.jsx)(cl, {})
			};
			cm.chains = f.vo;
			var cn = cm
		},
		42808: function(a, b, c) {
			"use strict";

			function d(a, b) {
				for (var c, d, e, f, g, h, i; a;) c = null !== (h = null !== (g = null !== (f = a.reason) && void 0 !== f ? f : null === (d = a.data) || void 0 === d ? void 0 : d.message) && void 0 !== g ? g : a.message) && void 0 !== h ? h : c, a = null !== (i = a.error) && void 0 !== i ? i : null === (e = a.data) || void 0 === e ? void 0 : e.originalError;
				switch ((null == c ? void 0 : c.indexOf("execution reverted: ")) === 0 && (c = c.substring(20)), c) {
					case "PancakeRouter: EXPIRED":
						return b("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
					case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
					case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
					case "PancakeRouter: INSUFFICIENT_A_AMOUNT":
					case "PancakeRouter: INSUFFICIENT_B_AMOUNT":
						return b("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
					case "TransferHelper: TRANSFER_FROM_FAILED":
						return b("The input token cannot be transferred. There may be an issue with the input token.");
					case "Pancake: TRANSFER_FAILED":
						return b("The output token cannot be transferred. There may be an issue with the output token.");
					default:
						if ((null == c ? void 0 : c.indexOf("undefined is not an object")) !== -1) return console.error(a, c), b("An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.");
						return b("Unknown error%reason%. Try increasing your slippage tolerance.", {
							reason: c ? ': "'.concat(c, '"') : ""
						})
				}
			}
			c.d(b, {
				e: function() {
					return d
				}
			})
		},
		59039: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return w
				}
			});
			var d = c(7297),
				e = c(85893),
				f = c(67294),
				g = c(87379),
				h = c(97114),
				i = c(80421),
				j = c(93293),
				k = c(95963),
				l = c(64011),
				m = c(41914),
				n = c(39475);

			function o() {
				var a = (0, d.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
				return o = function() {
					return a
				}, a
			}

			function p() {
				var a = (0, d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
				return p = function() {
					return a
				}, a
			}

			function q() {
				var a = (0, d.Z)(["\n  flex: 1;\n  padding: 1rem;\n"]);
				return q = function() {
					return a
				}, a
			}

			function r() {
				var a = (0, d.Z)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
				return r = function() {
					return a
				}, a
			}
			var s = g.ZP.div.withConfig({
					componentId: "sc-966d56e6-0"
				})(o(), function(a) {
					return a.theme.colors.backgroundAlt
				}),
				t = g.ZP.div.withConfig({
					componentId: "sc-966d56e6-1"
				})(p(), function(a) {
					var b = a.error,
						c = a.theme;
					return b ? c.colors.failure : c.colors.background
				}, function(a) {
					return a.error ? "step-end" : "step-start"
				}, function(a) {
					return a.error ? "step-end" : "step-start"
				}, function(a) {
					return a.theme.colors.backgroundAlt
				}),
				u = g.ZP.div.withConfig({
					componentId: "sc-966d56e6-2"
				})(q()),
				v = g.ZP.input.withConfig({
					componentId: "sc-966d56e6-3"
				})(r(), function(a) {
					return a.theme.colors.backgroundAlt
				}, function(a) {
					return a.error ? "step-end" : "step-start"
				}, function(a) {
					var b = a.error,
						c = a.theme;
					return b ? c.colors.failure : c.colors.primary
				}, function(a) {
					return a.theme.colors.textDisabled
				}, function(a) {
					return a.theme.colors.textDisabled
				});

			function w(a) {
				var b = a.id,
					c = a.value,
					d = a.onChange,
					g = (0, l.Z)().chainId,
					o = (0, k.$G)().t,
					p = (0, j.UJ)(c) ? c : void 0,
					q = (0, f.useCallback)(function(a) {
						d(a.target.value.replace(/\s+/g, ""))
					}, [d]),
					r = Boolean(c.length > 0 && !p);
				return (0, e.jsx)(s, {
					id: b,
					children: (0, e.jsx)(t, {
						error: r,
						children: (0, e.jsx)(u, {
							children: (0, e.jsxs)(m.Tz, {
								gap: "md",
								children: [(0, e.jsxs)(n.m0, {
									children: [(0, e.jsx)(h.Z, {
										children: o("Recipient")
									}), p && g && (0, e.jsxs)(i.Z, {
										external: !0,
										small: !0,
										href: (0, j.C)(p, "address", g),
										children: ["(", o("View on %site%", {
											site: (0, j.X0)(g)
										}), ")"]
									})]
								}), (0, e.jsx)(v, {
									className: "recipient-address-input",
									type: "text",
									autoComplete: "off",
									autoCorrect: "off",
									autoCapitalize: "off",
									spellCheck: "false",
									placeholder: o("Wallet Address"),
									error: r,
									pattern: "^(0x[a-fA-F0-9]{40})$",
									onChange: q,
									value: c
								})]
							})
						})
					})
				})
			}
		}
	},
	function(a) {
		a.O(0, [5855, 9363, 1021, 165, 914, 3298, 8326, 7088, 4437, 9774, 2888, 179], function() {
			var b;
			return a(a.s = 98229)
		}), _N_E = a.O()
	}
])
//# sourceMappingURL=swap-7d0409510e38da88.js.map