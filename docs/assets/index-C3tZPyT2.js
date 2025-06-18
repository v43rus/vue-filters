(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = true;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {}, ht = [], Re = () => {
}, vi = () => false, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ss = (e) => e.startsWith("onUpdate:"), oe = Object.assign, rs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Si = Object.prototype.hasOwnProperty, U = (e, t) => Si.call(e, t), R = Array.isArray, pt = (e) => gn(e) === "[object Map]", sr = (e) => gn(e) === "[object Set]", M = (e) => typeof e == "function", Z = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", rr = (e) => (G(e) || M(e)) && M(e.then) && M(e.catch), ir = Object.prototype.toString, gn = (e) => ir.call(e), Ci = (e) => gn(e).slice(8, -1), or = (e) => gn(e) === "[object Object]", is = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rt = /* @__PURE__ */ ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ei = /-(\w)/g, Ge = _n((e) => e.replace(Ei, (t, n) => n ? n.toUpperCase() : "")), Ti = /\B([A-Z])/g, ct = _n((e) => e.replace(Ti, "-$1").toLowerCase()), lr = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = _n((e) => e ? `on${lr(e)}` : ""), qe = (e, t) => !Object.is(e, t), An = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, cr = (e, t, n, s = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: s, value: n });
}, Oi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Os;
const bn = () => Os || (Os = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function os(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Z(s) ? Pi(s) : os(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (Z(e) || G(e)) return e;
}
const Ai = /;(?![^(]*\))/g, Ii = /:([^]+)/, Ri = /\/\*[^]*?\*\//g;
function Pi(e) {
  const t = {};
  return e.replace(Ri, "").split(Ai).forEach((n) => {
    if (n) {
      const s = n.split(Ii);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function mn(e) {
  let t = "";
  if (Z(e)) t = e;
  else if (R(e)) for (let n = 0; n < e.length; n++) {
    const s = mn(e[n]);
    s && (t += s + " ");
  }
  else if (G(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Mi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fi = /* @__PURE__ */ ns(Mi);
function fr(e) {
  return !!e || e === "";
}
const ur = (e) => !!(e && e.__v_isRef === true), Kn = (e) => Z(e) ? e : e == null ? "" : R(e) || G(e) && (e.toString === ir || !M(e.toString)) ? ur(e) ? Kn(e.value) : JSON.stringify(e, ar, 2) : String(e), ar = (e, t) => ur(t) ? ar(e, t.value) : pt(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => (n[In(s, i) + " =>"] = r, n), {}) } : sr(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => In(n)) } : Qe(t) ? In(t) : G(t) && !R(t) && !or(t) ? String(t) : t, In = (e, t = "") => {
  var n;
  return Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let se;
class dr {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = se, !t && se && (this.index = (se.scopes || (se.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = se;
      try {
        return se = this, t();
      } finally {
        se = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = se, se = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (se = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function hr(e) {
  return new dr(e);
}
function pr() {
  return se;
}
function Di(e, t = false) {
  se && se.cleanups.push(e);
}
let z;
const Rn = /* @__PURE__ */ new WeakSet();
class gr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, se && se.active && se.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rn.has(this) && (Rn.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || br(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, As(this), mr(this);
    const t = z, n = ye;
    z = this, ye = true;
    try {
      return this.fn();
    } finally {
      wr(this), z = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) fs(t);
      this.deps = this.depsTail = void 0, As(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Vn(this) && this.run();
  }
  get dirty() {
    return Vn(this);
  }
}
let _r = 0, Pt, Mt;
function br(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Pt, Pt = e;
}
function ls() {
  _r++;
}
function cs() {
  if (--_r > 0) return;
  if (Mt) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pt; ) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (s) {
        e || (e = s);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function mr(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), fs(s), ji(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Vn(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (yr(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function yr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ht) || (e.globalVersion = Ht, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Vn(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = z, s = ye;
  z = e, ye = true;
  try {
    mr(e);
    const r = e.fn(e._value);
    (t.version === 0 || qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    z = n, ye = s, wr(e), e.flags &= -3;
  }
}
function fs(e, t = false) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) fs(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ji(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = true;
const xr = [];
function He() {
  xr.push(ye), ye = false;
}
function Ne() {
  const e = xr.pop();
  ye = e === void 0 ? true : e;
}
function As(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = z;
    z = void 0;
    try {
      t();
    } finally {
      z = n;
    }
  }
}
let Ht = 0;
class Li {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!z || !ye || z === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== z) n = this.activeLink = new Li(z, this), z.deps ? (n.prevDep = z.depsTail, z.depsTail.nextDep = n, z.depsTail = n) : z.deps = z.depsTail = n, vr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = z.depsTail, n.nextDep = void 0, z.depsTail.nextDep = n, z.depsTail = n, z.deps === n && (z.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ht++, this.notify(t);
  }
  notify(t) {
    ls();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      cs();
    }
  }
}
function vr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) vr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const sn = /* @__PURE__ */ new WeakMap(), ot = Symbol(""), Bn = Symbol(""), Nt = Symbol("");
function re(e, t, n) {
  if (ye && z) {
    let s = sn.get(e);
    s || sn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new us()), r.map = s, r.key = n), r.track();
  }
}
function Le(e, t, n, s, r, i) {
  const o = sn.get(e);
  if (!o) {
    Ht++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (ls(), t === "clear") o.forEach(l);
  else {
    const f = R(e), d = f && is(n);
    if (f && n === "length") {
      const a = Number(s);
      o.forEach((p, w) => {
        (w === "length" || w === Nt || !Qe(w) && w >= a) && l(p);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Nt)), t) {
      case "add":
        f ? d && l(o.get("length")) : (l(o.get(ot)), pt(e) && l(o.get(Bn)));
        break;
      case "delete":
        f || (l(o.get(ot)), pt(e) && l(o.get(Bn)));
        break;
      case "set":
        pt(e) && l(o.get(ot));
        break;
    }
  }
  cs();
}
function $i(e, t) {
  const n = sn.get(e);
  return n && n.get(t);
}
function ft(e) {
  const t = H(e);
  return t === e ? t : (re(t, "iterate", Nt), me(e) ? t : t.map(te));
}
function wn(e) {
  return re(e = H(e), "iterate", Nt), e;
}
const Hi = { __proto__: null, [Symbol.iterator]() {
  return Pn(this, Symbol.iterator, te);
}, concat(...e) {
  return ft(this).concat(...e.map((t) => R(t) ? ft(t) : t));
}, entries() {
  return Pn(this, "entries", (e) => (e[1] = te(e[1]), e));
}, every(e, t) {
  return De(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return De(this, "filter", e, t, (n) => n.map(te), arguments);
}, find(e, t) {
  return De(this, "find", e, t, te, arguments);
}, findIndex(e, t) {
  return De(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return De(this, "findLast", e, t, te, arguments);
}, findLastIndex(e, t) {
  return De(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return De(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Mn(this, "includes", e);
}, indexOf(...e) {
  return Mn(this, "indexOf", e);
}, join(e) {
  return ft(this).join(e);
}, lastIndexOf(...e) {
  return Mn(this, "lastIndexOf", e);
}, map(e, t) {
  return De(this, "map", e, t, void 0, arguments);
}, pop() {
  return Et(this, "pop");
}, push(...e) {
  return Et(this, "push", e);
}, reduce(e, ...t) {
  return Is(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Is(this, "reduceRight", e, t);
}, shift() {
  return Et(this, "shift");
}, some(e, t) {
  return De(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Et(this, "splice", e);
}, toReversed() {
  return ft(this).toReversed();
}, toSorted(e) {
  return ft(this).toSorted(e);
}, toSpliced(...e) {
  return ft(this).toSpliced(...e);
}, unshift(...e) {
  return Et(this, "unshift", e);
}, values() {
  return Pn(this, "values", te);
} };
function Pn(e, t, n) {
  const s = wn(e), r = s[t]();
  return s !== e && !me(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Ni = Array.prototype;
function De(e, t, n, s, r, i) {
  const o = wn(e), l = o !== e && !me(e), f = o[t];
  if (f !== Ni[t]) {
    const p = f.apply(e, i);
    return l ? te(p) : p;
  }
  let d = n;
  o !== e && (l ? d = function(p, w) {
    return n.call(this, te(p), w, e);
  } : n.length > 2 && (d = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const a = f.call(o, d, s);
  return l && r ? r(a) : a;
}
function Is(e, t, n, s) {
  const r = wn(e);
  let i = n;
  return r !== e && (me(e) ? n.length > 3 && (i = function(o, l, f) {
    return n.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return n.call(this, o, te(l), f, e);
  }), r[t](i, ...s);
}
function Mn(e, t, n) {
  const s = H(e);
  re(s, "iterate", Nt);
  const r = s[t](...n);
  return (r === -1 || r === false) && hs(n[0]) ? (n[0] = H(n[0]), s[t](...n)) : r;
}
function Et(e, t, n = []) {
  He(), ls();
  const s = H(e)[t].apply(e, n);
  return cs(), Ne(), s;
}
const Ui = /* @__PURE__ */ ns("__proto__,__v_isRef,__isVue"), Sr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe));
function Wi(e) {
  Qe(e) || (e = String(e));
  const t = H(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class Cr {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return s === (r ? i ? Qi : Ar : i ? Or : Tr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = R(t);
    if (!r) {
      let f;
      if (o && (f = Hi[n])) return f;
      if (n === "hasOwnProperty") return Wi;
    }
    const l = Reflect.get(t, n, Q(t) ? t : s);
    return (Qe(n) ? Sr.has(n) : Ui(n)) || (r || re(t, "get", n), i) ? l : Q(l) ? o && is(n) ? l : l.value : G(l) ? r ? Ir(l) : yn(l) : l;
  }
}
class Er extends Cr {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const f = Ye(i);
      if (!me(s) && !Ye(s) && (i = H(i), s = H(s)), !R(t) && Q(i) && !Q(s)) return f ? false : (i.value = s, true);
    }
    const o = R(t) && is(n) ? Number(n) < t.length : U(t, n), l = Reflect.set(t, n, s, Q(t) ? t : r);
    return t === H(r) && (o ? qe(s, i) && Le(t, "set", n, s) : Le(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Le(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Qe(n) || !Sr.has(n)) && re(t, "has", n), s;
  }
  ownKeys(t) {
    return re(t, "iterate", R(t) ? "length" : ot), Reflect.ownKeys(t);
  }
}
class Ki extends Cr {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const Vi = new Er(), Bi = new Ki(), zi = new Er(true);
const zn = (e) => e, kt = (e) => Reflect.getPrototypeOf(e);
function qi(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = H(r), o = pt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...s), a = n ? zn : t ? rn : te;
    return !t && re(i, "iterate", f ? Bn : ot), { next() {
      const { value: p, done: w } = d.next();
      return w ? { value: p, done: w } : { value: l ? [a(p[0]), a(p[1])] : a(p), done: w };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Gt(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Ji(e, t) {
  const n = { get(r) {
    const i = this.__v_raw, o = H(i), l = H(r);
    e || (qe(r, l) && re(o, "get", r), re(o, "get", l));
    const { has: f } = kt(o), d = t ? zn : e ? rn : te;
    if (f.call(o, r)) return d(i.get(r));
    if (f.call(o, l)) return d(i.get(l));
    i !== o && i.get(r);
  }, get size() {
    const r = this.__v_raw;
    return !e && re(H(r), "iterate", ot), Reflect.get(r, "size", r);
  }, has(r) {
    const i = this.__v_raw, o = H(i), l = H(r);
    return e || (qe(r, l) && re(o, "has", r), re(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
  }, forEach(r, i) {
    const o = this, l = o.__v_raw, f = H(l), d = t ? zn : e ? rn : te;
    return !e && re(f, "iterate", ot), l.forEach((a, p) => r.call(i, d(a), d(p), o));
  } };
  return oe(n, e ? { add: Gt("add"), set: Gt("set"), delete: Gt("delete"), clear: Gt("clear") } : { add(r) {
    !t && !me(r) && !Ye(r) && (r = H(r));
    const i = H(this);
    return kt(i).has.call(i, r) || (i.add(r), Le(i, "add", r, r)), this;
  }, set(r, i) {
    !t && !me(i) && !Ye(i) && (i = H(i));
    const o = H(this), { has: l, get: f } = kt(o);
    let d = l.call(o, r);
    d || (r = H(r), d = l.call(o, r));
    const a = f.call(o, r);
    return o.set(r, i), d ? qe(i, a) && Le(o, "set", r, i) : Le(o, "add", r, i), this;
  }, delete(r) {
    const i = H(this), { has: o, get: l } = kt(i);
    let f = o.call(i, r);
    f || (r = H(r), f = o.call(i, r)), l && l.call(i, r);
    const d = i.delete(r);
    return f && Le(i, "delete", r, void 0), d;
  }, clear() {
    const r = H(this), i = r.size !== 0, o = r.clear();
    return i && Le(r, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    n[r] = qi(r, e, t);
  }), n;
}
function as(e, t) {
  const n = Ji(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(U(n, r) && r in s ? n : s, r, i);
}
const ki = { get: as(false, false) }, Gi = { get: as(false, true) }, Yi = { get: as(true, false) };
const Tr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap();
function Xi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xi(Ci(e));
}
function yn(e) {
  return Ye(e) ? e : ds(e, false, Vi, ki, Tr);
}
function eo(e) {
  return ds(e, false, zi, Gi, Or);
}
function Ir(e) {
  return ds(e, true, Bi, Yi, Ar);
}
function ds(e, t, n, s, r) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = Zi(e);
  if (i === 0) return e;
  const o = r.get(e);
  if (o) return o;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function Je(e) {
  return Ye(e) ? Je(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function hs(e) {
  return e ? !!e.__v_raw : false;
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function ps(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && cr(e, "__v_skip", true), e;
}
const te = (e) => G(e) ? yn(e) : e, rn = (e) => G(e) ? Ir(e) : e;
function Q(e) {
  return e ? e.__v_isRef === true : false;
}
function gt(e) {
  return to(e, false);
}
function to(e, t) {
  return Q(e) ? e : new no(e, t);
}
class no {
  constructor(t, n) {
    this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : H(t), this._value = n ? t : te(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || me(t) || Ye(t);
    t = s ? t : H(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : te(t), this.dep.trigger());
  }
}
function ue(e) {
  return Q(e) ? e.value : e;
}
const so = { get: (e, t, n) => t === "__v_raw" ? e : ue(Reflect.get(e, t, n)), set: (e, t, n, s) => {
  const r = e[t];
  return Q(r) && !Q(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
} };
function Rr(e) {
  return Je(e) ? e : new Proxy(e, so);
}
function ro(e) {
  const t = R(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = oo(e, n);
  return t;
}
class io {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = true, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return $i(H(this._object), this._key);
  }
}
function oo(e, t, n) {
  const s = e[t];
  return Q(s) ? s : new io(e, t, n);
}
class lo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ht - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && z !== this) return br(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return yr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function co(e, t, n = false) {
  let s, r;
  return M(e) ? s = e : (s = e.get, r = e.set), new lo(s, r, n);
}
const Yt = {}, on = /* @__PURE__ */ new WeakMap();
let st;
function fo(e, t = false, n = st) {
  if (n) {
    let s = on.get(n);
    s || on.set(n, s = []), s.push(e);
  }
}
function uo(e, t, n = q) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = n, d = (A) => r ? A : me(A) || r === false || r === 0 ? ze(A, 1) : ze(A);
  let a, p, w, v, P = false, F = false;
  if (Q(e) ? (p = () => e.value, P = me(e)) : Je(e) ? (p = () => d(e), P = true) : R(e) ? (F = true, P = e.some((A) => Je(A) || me(A)), p = () => e.map((A) => {
    if (Q(A)) return A.value;
    if (Je(A)) return d(A);
    if (M(A)) return f ? f(A, 2) : A();
  })) : M(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      He();
      try {
        w();
      } finally {
        Ne();
      }
    }
    const A = st;
    st = a;
    try {
      return f ? f(e, 3, [v]) : e(v);
    } finally {
      st = A;
    }
  } : p = Re, t && r) {
    const A = p, N = r === true ? 1 / 0 : r;
    p = () => ze(A(), N);
  }
  const ee = pr(), W = () => {
    a.stop(), ee && ee.active && rs(ee.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...N) => {
      A(...N), W();
    };
  }
  let k = F ? new Array(e.length).fill(Yt) : Yt;
  const J = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A)) if (t) {
      const N = a.run();
      if (r || P || (F ? N.some((Fe, ne) => qe(Fe, k[ne])) : qe(N, k))) {
        w && w();
        const Fe = st;
        st = a;
        try {
          const ne = [N, k === Yt ? void 0 : F && k[0] === Yt ? [] : k, v];
          k = N, f ? f(t, 3, ne) : t(...ne);
        } finally {
          st = Fe;
        }
      }
    } else a.run();
  };
  return l && l(J), a = new gr(p), a.scheduler = o ? () => o(J, false) : J, v = (A) => fo(A, false, a), w = a.onStop = () => {
    const A = on.get(a);
    if (A) {
      if (f) f(A, 4);
      else for (const N of A) N();
      on.delete(a);
    }
  }, t ? s ? J(true) : k = a.run() : o ? o(J.bind(null, true), true) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, Q(e)) ze(e.value, t, n);
  else if (R(e)) for (let s = 0; s < e.length; s++) ze(e[s], t, n);
  else if (sr(e) || pt(e)) e.forEach((s) => {
    ze(s, t, n);
  });
  else if (or(e)) {
    for (const s in e) ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && ze(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Vt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    xn(r, t, n);
  }
}
function Me(e, t, n, s) {
  if (M(e)) {
    const r = Vt(e, t, n, s);
    return r && rr(r) && r.catch((i) => {
      xn(i, t, n);
    }), r;
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Me(e[i], t, n, s));
    return r;
  }
}
function xn(e, t, n, s = true) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++) if (a[p](e, f, d) === false) return;
      }
      l = l.parent;
    }
    if (i) {
      He(), Vt(i, null, 10, [e, f, d]), Ne();
      return;
    }
  }
  ao(e, n, r, s, o);
}
function ao(e, t, n, s = true, r = false) {
  if (r) throw e;
  console.error(e);
}
const ce = [];
let Oe = -1;
const _t = [];
let Ve = null, dt = 0;
const Pr = Promise.resolve();
let ln = null;
function Mr(e) {
  const t = ln || Pr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ho(e) {
  let t = Oe + 1, n = ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ce[s], i = Ut(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function gs(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = ce[ce.length - 1];
    !n || !(e.flags & 2) && t >= Ut(n) ? ce.push(e) : ce.splice(ho(t), 0, e), e.flags |= 1, Fr();
  }
}
function Fr() {
  ln || (ln = Pr.then(jr));
}
function po(e) {
  R(e) ? _t.push(...e) : Ve && e.id === -1 ? Ve.splice(dt + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), Fr();
}
function Rs(e, t, n = Oe + 1) {
  for (; n < ce.length; n++) {
    const s = ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Dr(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort((n, s) => Ut(n) - Ut(s));
    if (_t.length = 0, Ve) {
      Ve.push(...t);
      return;
    }
    for (Ve = t, dt = 0; dt < Ve.length; dt++) {
      const n = Ve[dt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ve = null, dt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function jr(e) {
  try {
    for (Oe = 0; Oe < ce.length; Oe++) {
      const t = ce[Oe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Vt(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Oe < ce.length; Oe++) {
      const t = ce[Oe];
      t && (t.flags &= -2);
    }
    Oe = -1, ce.length = 0, Dr(), ln = null, (ce.length || _t.length) && jr();
  }
}
let we = null, Lr = null;
function cn(e) {
  const t = we;
  return we = e, Lr = e && e.type.__scopeId || null, t;
}
function go(e, t = we, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ns(-1);
    const i = cn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      cn(i), s._d && Ns(1);
    }
    return o;
  };
  return s._n = true, s._c = true, s._d = true, s;
}
function et(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (He(), Me(f, n, 8, [e.el, l, e, t]), Ne());
  }
}
const _o = Symbol("_vte"), bo = (e) => e.__isTeleport;
function _s(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _s(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bs(e, t) {
  return M(e) ? oe({ name: e.name }, t, { setup: e }) : e;
}
function $r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function fn(e, t, n, s, r = false) {
  if (R(e)) {
    e.forEach((P, F) => fn(P, t && (R(t) ? t[F] : t), n, s, r));
    return;
  }
  if (Ft(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? xs(s.component) : s.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === q ? l.refs = {} : l.refs, p = l.setupState, w = H(p), v = p === q ? () => false : (P) => U(w, P);
  if (d != null && d !== f && (Z(d) ? (a[d] = null, v(d) && (p[d] = null)) : Q(d) && (d.value = null)), M(f)) Vt(f, l, 12, [o, a]);
  else {
    const P = Z(f), F = Q(f);
    if (P || F) {
      const ee = () => {
        if (e.f) {
          const W = P ? v(f) ? p[f] : a[f] : f.value;
          r ? R(W) && rs(W, i) : R(W) ? W.includes(i) || W.push(i) : P ? (a[f] = [i], v(f) && (p[f] = a[f])) : (f.value = [i], e.k && (a[e.k] = f.value));
        } else P ? (a[f] = o, v(f) && (p[f] = o)) : F && (f.value = o, e.k && (a[e.k] = o));
      };
      o ? (ee.id = -1, ge(ee, n)) : ee();
    }
  }
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, Hr = (e) => e.type.__isKeepAlive;
function mo(e, t) {
  Nr(e, "a", t);
}
function wo(e, t) {
  Nr(e, "da", t);
}
function Nr(e, t, n = ie) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (vn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; ) Hr(r.parent.vnode) && yo(s, t, n, r), r = r.parent;
  }
}
function yo(e, t, n, s) {
  const r = vn(t, e, s, true);
  Ur(() => {
    rs(s[t], r);
  }, n);
}
function vn(e, t, n = ie, s = false) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      He();
      const l = Bt(n), f = Me(t, n, e, o);
      return l(), Ne(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ue = (e) => (t, n = ie) => {
  (!Kt || e === "sp") && vn(e, (...s) => t(...s), n);
}, xo = Ue("bm"), vo = Ue("m"), So = Ue("bu"), Co = Ue("u"), Eo = Ue("bum"), Ur = Ue("um"), To = Ue("sp"), Oo = Ue("rtg"), Ao = Ue("rtc");
function Io(e, t = ie) {
  vn("ec", e, t);
}
const Ro = Symbol.for("v-ndc");
function Po(e, t, n, s) {
  let r;
  const i = n, o = R(e);
  if (o || Z(e)) {
    const l = o && Je(e);
    let f = false, d = false;
    l && (f = !me(e), d = Ye(e), e = wn(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++) r[a] = t(f ? d ? rn(te(e[a])) : te(e[a]) : e[a], a, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (G(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, f) => t(l, f, void 0, i));
  else {
    const l = Object.keys(e);
    r = new Array(l.length);
    for (let f = 0, d = l.length; f < d; f++) {
      const a = l[f];
      r[f] = t(e[a], a, f, i);
    }
  }
  else r = [];
  return r;
}
const qn = (e) => e ? ci(e) ? xs(e) : qn(e.parent) : null, Dt = oe(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => qn(e.parent), $root: (e) => qn(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Kr(e), $forceUpdate: (e) => e.f || (e.f = () => {
  gs(e.update);
}), $nextTick: (e) => e.n || (e.n = Mr.bind(e.proxy)), $watch: (e) => el.bind(e) }), Fn = (e, t) => e !== q && !e.__isScriptSetup && U(e, t), Mo = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
  let d;
  if (t[0] !== "$") {
    const v = o[t];
    if (v !== void 0) switch (v) {
      case 1:
        return s[t];
      case 2:
        return r[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (Fn(s, t)) return o[t] = 1, s[t];
      if (r !== q && U(r, t)) return o[t] = 2, r[t];
      if ((d = e.propsOptions[0]) && U(d, t)) return o[t] = 3, i[t];
      if (n !== q && U(n, t)) return o[t] = 4, n[t];
      Jn && (o[t] = 0);
    }
  }
  const a = Dt[t];
  let p, w;
  if (a) return t === "$attrs" && re(e.attrs, "get", ""), a(e);
  if ((p = l.__cssModules) && (p = p[t])) return p;
  if (n !== q && U(n, t)) return o[t] = 4, n[t];
  if (w = f.config.globalProperties, U(w, t)) return w[t];
}, set({ _: e }, t, n) {
  const { data: s, setupState: r, ctx: i } = e;
  return Fn(r, t) ? (r[t] = n, true) : s !== q && U(s, t) ? (s[t] = n, true) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) {
  let l;
  return !!n[o] || e !== q && U(e, o) || Fn(t, o) || (l = i[0]) && U(l, o) || U(s, o) || U(Dt, o) || U(r.config.globalProperties, o);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Ps(e) {
  return R(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Jn = true;
function Fo(e) {
  const t = Kr(e), n = e.proxy, s = e.ctx;
  Jn = false, t.beforeCreate && Ms(t.beforeCreate, e, "bc");
  const { data: r, computed: i, methods: o, watch: l, provide: f, inject: d, created: a, beforeMount: p, mounted: w, beforeUpdate: v, updated: P, activated: F, deactivated: ee, beforeDestroy: W, beforeUnmount: k, destroyed: J, unmounted: A, render: N, renderTracked: Fe, renderTriggered: ne, errorCaptured: j, serverPrefetch: $, expose: X, inheritAttrs: be, components: xe, directives: We, filters: xt } = t;
  if (d && Do(d, s, null), o) for (const D in o) {
    const V = o[D];
    M(V) && (s[D] = V.bind(n));
  }
  if (r) {
    const D = r.call(n, n);
    G(D) && (e.data = yn(D));
  }
  if (Jn = true, i) for (const D in i) {
    const V = i[D], Xe = M(V) ? V.bind(n, n) : M(V.get) ? V.get.bind(n, n) : Re, qt = !M(V) && M(V.set) ? V.set.bind(n) : Re, Ze = ui({ get: Xe, set: qt });
    Object.defineProperty(s, D, { enumerable: true, configurable: true, get: () => Ze.value, set: (ve) => Ze.value = ve });
  }
  if (l) for (const D in l) Wr(l[D], s, n, D);
  if (f) {
    const D = M(f) ? f.call(n) : f;
    Reflect.ownKeys(D).forEach((V) => {
      Uo(V, D[V]);
    });
  }
  a && Ms(a, e, "c");
  function Y(D, V) {
    R(V) ? V.forEach((Xe) => D(Xe.bind(n))) : V && D(V.bind(n));
  }
  if (Y(xo, p), Y(vo, w), Y(So, v), Y(Co, P), Y(mo, F), Y(wo, ee), Y(Io, j), Y(Ao, Fe), Y(Oo, ne), Y(Eo, k), Y(Ur, A), Y(To, $), R(X)) if (X.length) {
    const D = e.exposed || (e.exposed = {});
    X.forEach((V) => {
      Object.defineProperty(D, V, { get: () => n[V], set: (Xe) => n[V] = Xe });
    });
  } else e.exposed || (e.exposed = {});
  N && e.render === Re && (e.render = N), be != null && (e.inheritAttrs = be), xe && (e.components = xe), We && (e.directives = We), $ && $r(e);
}
function Do(e, t, n = Re) {
  R(e) && (e = kn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    G(r) ? "default" in r ? i = jt(r.from || s, r.default, true) : i = jt(r.from || s) : i = jt(r), Q(i) ? Object.defineProperty(t, s, { enumerable: true, configurable: true, get: () => i.value, set: (o) => i.value = o }) : t[s] = i;
  }
}
function Ms(e, t, n) {
  Me(R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, s) {
  let r = s.includes(".") ? ti(n, s) : () => n[s];
  if (Z(e)) {
    const i = t[e];
    M(i) && Xt(r, i);
  } else if (M(e)) Xt(r, e.bind(n));
  else if (G(e)) if (R(e)) e.forEach((i) => Wr(i, t, n, s));
  else {
    const i = M(e.handler) ? e.handler.bind(n) : t[e.handler];
    M(i) && Xt(r, i, e);
  }
}
function Kr(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach((d) => un(f, d, o, true)), un(f, t, o)), G(t) && i.set(t, f), f;
}
function un(e, t, n, s = false) {
  const { mixins: r, extends: i } = t;
  i && un(e, i, n, true), r && r.forEach((o) => un(e, o, n, true));
  for (const o in t) if (!(s && o === "expose")) {
    const l = jo[o] || n && n[o];
    e[o] = l ? l(e[o], t[o]) : t[o];
  }
  return e;
}
const jo = { data: Fs, props: Ds, emits: Ds, methods: Ot, computed: Ot, beforeCreate: le, created: le, beforeMount: le, mounted: le, beforeUpdate: le, updated: le, beforeDestroy: le, beforeUnmount: le, destroyed: le, unmounted: le, activated: le, deactivated: le, errorCaptured: le, serverPrefetch: le, components: Ot, directives: Ot, watch: $o, provide: Fs, inject: Lo };
function Fs(e, t) {
  return t ? e ? function() {
    return oe(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t);
  } : t : e;
}
function Lo(e, t) {
  return Ot(kn(e), kn(t));
}
function kn(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ot(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ds(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(/* @__PURE__ */ Object.create(null), Ps(e), Ps(t ?? {})) : t;
}
function $o(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = oe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t) n[s] = le(e[s], t[s]);
  return n;
}
function Vr() {
  return { app: null, config: { isNativeTag: vi, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Ho = 0;
function No(e, t) {
  return function(s, r = null) {
    M(s) || (s = oe({}, s)), r != null && !G(r) && (r = null);
    const i = Vr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = false;
    const d = i.app = { _uid: Ho++, _component: s, _props: r, _container: null, _context: i, _instance: null, version: yl, get config() {
      return i.config;
    }, set config(a) {
    }, use(a, ...p) {
      return o.has(a) || (a && M(a.install) ? (o.add(a), a.install(d, ...p)) : M(a) && (o.add(a), a(d, ...p))), d;
    }, mixin(a) {
      return i.mixins.includes(a) || i.mixins.push(a), d;
    }, component(a, p) {
      return p ? (i.components[a] = p, d) : i.components[a];
    }, directive(a, p) {
      return p ? (i.directives[a] = p, d) : i.directives[a];
    }, mount(a, p, w) {
      if (!f) {
        const v = d._ceVNode || ke(s, r);
        return v.appContext = i, w === true ? w = "svg" : w === false && (w = void 0), e(v, a, w), f = true, d._container = a, a.__vue_app__ = d, xs(v.component);
      }
    }, onUnmount(a) {
      l.push(a);
    }, unmount() {
      f && (Me(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(a, p) {
      return i.provides[a] = p, d;
    }, runWithContext(a) {
      const p = lt;
      lt = d;
      try {
        return a();
      } finally {
        lt = p;
      }
    } };
    return d;
  };
}
let lt = null;
function Uo(e, t) {
  if (ie) {
    let n = ie.provides;
    const s = ie.parent && ie.parent.provides;
    s === n && (n = ie.provides = Object.create(s)), n[e] = t;
  }
}
function jt(e, t, n = false) {
  const s = ie || we;
  if (s || lt) {
    let r = lt ? lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && M(t) ? t.call(s && s.proxy) : t;
  }
}
function Wo() {
  return !!(ie || we || lt);
}
const Br = {}, zr = () => Object.create(Br), qr = (e) => Object.getPrototypeOf(e) === Br;
function Ko(e, t, n, s = false) {
  const r = {}, i = zr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? e.props = s ? r : eo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Vo(e, t, n, s) {
  const { props: r, attrs: i, vnode: { patchFlag: o } } = e, l = H(r), [f] = e.propsOptions;
  let d = false;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (Sn(e.emitsOptions, w)) continue;
        const v = t[w];
        if (f) if (U(i, w)) v !== i[w] && (i[w] = v, d = true);
        else {
          const P = Ge(w);
          r[P] = Gn(f, l, P, v, e, false);
        }
        else v !== i[w] && (i[w] = v, d = true);
      }
    }
  } else {
    Jr(e, t, r, i) && (d = true);
    let a;
    for (const p in l) (!t || !U(t, p) && ((a = ct(p)) === p || !U(t, a))) && (f ? n && (n[p] !== void 0 || n[a] !== void 0) && (r[p] = Gn(f, l, p, void 0, e, true)) : delete r[p]);
    if (i !== l) for (const p in i) (!t || !U(t, p)) && (delete i[p], d = true);
  }
  d && Le(e.attrs, "set", "");
}
function Jr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = false, l;
  if (t) for (let f in t) {
    if (Rt(f)) continue;
    const d = t[f];
    let a;
    r && U(r, a = Ge(f)) ? !i || !i.includes(a) ? n[a] = d : (l || (l = {}))[a] = d : Sn(e.emitsOptions, f) || (!(f in s) || d !== s[f]) && (s[f] = d, o = true);
  }
  if (i) {
    const f = H(n), d = l || q;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      n[p] = Gn(r, f, p, d[p], e, !U(d, p));
    }
  }
  return o;
}
function Gn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = U(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && M(f)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const a = Bt(r);
          s = d[n] = f.call(null, t), a();
        }
      } else s = f;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] && (i && !l ? s = false : o[1] && (s === "" || s === ct(n)) && (s = true));
  }
  return s;
}
const Bo = /* @__PURE__ */ new WeakMap();
function kr(e, t, n = false) {
  const s = n ? Bo : t.propsCache, r = s.get(e);
  if (r) return r;
  const i = e.props, o = {}, l = [];
  let f = false;
  if (!M(e)) {
    const a = (p) => {
      f = true;
      const [w, v] = kr(p, t, true);
      oe(o, w), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f) return G(e) && s.set(e, ht), ht;
  if (R(i)) for (let a = 0; a < i.length; a++) {
    const p = Ge(i[a]);
    js(p) && (o[p] = q);
  }
  else if (i) for (const a in i) {
    const p = Ge(a);
    if (js(p)) {
      const w = i[a], v = o[p] = R(w) || M(w) ? { type: w } : oe({}, w), P = v.type;
      let F = false, ee = true;
      if (R(P)) for (let W = 0; W < P.length; ++W) {
        const k = P[W], J = M(k) && k.name;
        if (J === "Boolean") {
          F = true;
          break;
        } else J === "String" && (ee = false);
      }
      else F = M(P) && P.name === "Boolean";
      v[0] = F, v[1] = ee, (F || U(v, "default")) && l.push(p);
    }
  }
  const d = [o, l];
  return G(e) && s.set(e, d), d;
}
function js(e) {
  return e[0] !== "$" && !Rt(e);
}
const ms = (e) => e[0] === "_" || e === "$stable", ws = (e) => R(e) ? e.map(Ie) : [Ie(e)], zo = (e, t, n) => {
  if (t._n) return t;
  const s = go((...r) => ws(t(...r)), n);
  return s._c = false, s;
}, Gr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ms(r)) continue;
    const i = e[r];
    if (M(i)) t[r] = zo(r, i, s);
    else if (i != null) {
      const o = ws(i);
      t[r] = () => o;
    }
  }
}, Yr = (e, t) => {
  const n = ws(t);
  e.slots.default = () => n;
}, Qr = (e, t, n) => {
  for (const s in t) (n || !ms(s)) && (e[s] = t[s]);
}, qo = (e, t, n) => {
  const s = e.slots = zr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Qr(s, t, n), n && cr(s, "_", r, true)) : Gr(t, s);
  } else t && Yr(e, t);
}, Jo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = true, o = q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = false : Qr(r, t, n) : (i = !t.$stable, Gr(t, r)), o = t;
  } else t && (Yr(e, t), o = { default: 1 });
  if (i) for (const l in r) !ms(l) && o[l] == null && delete r[l];
}, ge = ll;
function ko(e) {
  return Go(e);
}
function Go(e, t) {
  const n = bn();
  n.__VUE__ = true;
  const { insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: f, setText: d, setElementText: a, parentNode: p, nextSibling: w, setScopeId: v = Re, insertStaticContent: P } = e, F = (c, u, h, b = null, g = null, _ = null, S = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u) return;
    c && !Tt(c, u) && (b = Jt(c), ve(c, g, _, true), c = null), u.patchFlag === -2 && (y = false, u.dynamicChildren = null);
    const { type: m, ref: O, shapeFlag: C } = u;
    switch (m) {
      case Cn:
        ee(c, u, h, b);
        break;
      case wt:
        W(c, u, h, b);
        break;
      case jn:
        c == null && k(u, h, b, S);
        break;
      case Ae:
        xe(c, u, h, b, g, _, S, x, y);
        break;
      default:
        C & 1 ? N(c, u, h, b, g, _, S, x, y) : C & 6 ? We(c, u, h, b, g, _, S, x, y) : (C & 64 || C & 128) && m.process(c, u, h, b, g, _, S, x, y, St);
    }
    O != null && g && fn(O, c && c.ref, _, u || c, !u);
  }, ee = (c, u, h, b) => {
    if (c == null) s(u.el = l(u.children), h, b);
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, W = (c, u, h, b) => {
    c == null ? s(u.el = f(u.children || ""), h, b) : u.el = c.el;
  }, k = (c, u, h, b) => {
    [c.el, c.anchor] = P(c.children, u, h, b, c.el, c.anchor);
  }, J = ({ el: c, anchor: u }, h, b) => {
    let g;
    for (; c && c !== u; ) g = w(c), s(c, h, b), c = g;
    s(u, h, b);
  }, A = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; ) h = w(c), r(c), c = h;
    r(u);
  }, N = (c, u, h, b, g, _, S, x, y) => {
    u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), c == null ? Fe(u, h, b, g, _, S, x, y) : $(c, u, g, _, S, x, y);
  }, Fe = (c, u, h, b, g, _, S, x) => {
    let y, m;
    const { props: O, shapeFlag: C, transition: E, dirs: I } = c;
    if (y = c.el = o(c.type, _, O && O.is, O), C & 8 ? a(y, c.children) : C & 16 && j(c.children, y, null, b, g, Dn(c, _), S, x), I && et(c, null, b, "created"), ne(y, c, c.scopeId, S, b), O) {
      for (const B in O) B !== "value" && !Rt(B) && i(y, B, null, O[B], _, b);
      "value" in O && i(y, "value", null, O.value, _), (m = O.onVnodeBeforeMount) && Te(m, b, c);
    }
    I && et(c, null, b, "beforeMount");
    const L = Yo(g, E);
    L && E.beforeEnter(y), s(y, u, h), ((m = O && O.onVnodeMounted) || L || I) && ge(() => {
      m && Te(m, b, c), L && E.enter(y), I && et(c, null, b, "mounted");
    }, g);
  }, ne = (c, u, h, b, g) => {
    if (h && v(c, h), b) for (let _ = 0; _ < b.length; _++) v(c, b[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || si(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const S = g.vnode;
        ne(c, S, S.scopeId, S.slotScopeIds, g.parent);
      }
    }
  }, j = (c, u, h, b, g, _, S, x, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const O = c[m] = x ? Be(c[m]) : Ie(c[m]);
      F(null, O, u, h, b, g, _, S, x);
    }
  }, $ = (c, u, h, b, g, _, S) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: O } = u;
    y |= c.patchFlag & 16;
    const C = c.props || q, E = u.props || q;
    let I;
    if (h && tt(h, false), (I = E.onVnodeBeforeUpdate) && Te(I, h, u, c), O && et(u, c, h, "beforeUpdate"), h && tt(h, true), (C.innerHTML && E.innerHTML == null || C.textContent && E.textContent == null) && a(x, ""), m ? X(c.dynamicChildren, m, x, h, b, Dn(u, g), _) : S || V(c, u, x, null, h, b, Dn(u, g), _, false), y > 0) {
      if (y & 16) be(x, C, E, h, g);
      else if (y & 2 && C.class !== E.class && i(x, "class", null, E.class, g), y & 4 && i(x, "style", C.style, E.style, g), y & 8) {
        const L = u.dynamicProps;
        for (let B = 0; B < L.length; B++) {
          const K = L[B], de = C[K], fe = E[K];
          (fe !== de || K === "value") && i(x, K, de, fe, g, h);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !S && m == null && be(x, C, E, h, g);
    ((I = E.onVnodeUpdated) || O) && ge(() => {
      I && Te(I, h, u, c), O && et(u, c, h, "updated");
    }, b);
  }, X = (c, u, h, b, g, _, S) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], m = u[x], O = y.el && (y.type === Ae || !Tt(y, m) || y.shapeFlag & 198) ? p(y.el) : h;
      F(y, m, O, null, b, g, _, S, true);
    }
  }, be = (c, u, h, b, g) => {
    if (u !== h) {
      if (u !== q) for (const _ in u) !Rt(_) && !(_ in h) && i(c, _, u[_], null, g, b);
      for (const _ in h) {
        if (Rt(_)) continue;
        const S = h[_], x = u[_];
        S !== x && _ !== "value" && i(c, _, x, S, g, b);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, xe = (c, u, h, b, g, _, S, x, y) => {
    const m = u.el = c ? c.el : l(""), O = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: E, slotScopeIds: I } = u;
    I && (x = x ? x.concat(I) : I), c == null ? (s(m, h, b), s(O, h, b), j(u.children || [], h, O, g, _, S, x, y)) : C > 0 && C & 64 && E && c.dynamicChildren ? (X(c.dynamicChildren, E, h, g, _, S, x), (u.key != null || g && u === g.subTree) && Xr(c, u, true)) : V(c, u, h, O, g, _, S, x, y);
  }, We = (c, u, h, b, g, _, S, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(u, h, b, S, y) : xt(u, h, b, g, _, S, y) : zt(c, u, y);
  }, xt = (c, u, h, b, g, _, S) => {
    const x = c.component = pl(c, b, g);
    if (Hr(c) && (x.ctx.renderer = St), gl(x, false, S), x.asyncDep) {
      if (g && g.registerDep(x, Y, S), !c.el) {
        const y = x.subTree = ke(wt);
        W(null, y, u, h);
      }
    } else Y(x, c, u, h, g, _, S);
  }, zt = (c, u, h) => {
    const b = u.component = c.component;
    if (il(c, u, h)) if (b.asyncDep && !b.asyncResolved) {
      D(b, u, h);
      return;
    } else b.next = u, b.update();
    else u.el = c.el, b.vnode = u;
  }, Y = (c, u, h, b, g, _, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: E, u: I, parent: L, vnode: B } = c;
        {
          const Ce = Zr(c);
          if (Ce) {
            C && (C.el = B.el, D(c, C, S)), Ce.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let K = C, de;
        tt(c, false), C ? (C.el = B.el, D(c, C, S)) : C = B, E && An(E), (de = C.props && C.props.onVnodeBeforeUpdate) && Te(de, L, C, B), tt(c, true);
        const fe = $s(c), Se = c.subTree;
        c.subTree = fe, F(Se, fe, p(Se.el), Jt(Se), c, g, _), C.el = fe.el, K === null && ol(c, fe.el), I && ge(I, g), (de = C.props && C.props.onVnodeUpdated) && ge(() => Te(de, L, C, B), g);
      } else {
        let C;
        const { el: E, props: I } = u, { bm: L, m: B, parent: K, root: de, type: fe } = c, Se = Ft(u);
        tt(c, false), L && An(L), !Se && (C = I && I.onVnodeBeforeMount) && Te(C, K, u), tt(c, true);
        {
          de.ce && de.ce._injectChildStyle(fe);
          const Ce = c.subTree = $s(c);
          F(null, Ce, h, b, c, g, _), u.el = Ce.el;
        }
        if (B && ge(B, g), !Se && (C = I && I.onVnodeMounted)) {
          const Ce = u;
          ge(() => Te(C, K, Ce), g);
        }
        (u.shapeFlag & 256 || K && Ft(K.vnode) && K.vnode.shapeFlag & 256) && c.a && ge(c.a, g), c.isMounted = true, u = h = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new gr(x);
    c.scope.off();
    const m = c.update = y.run.bind(y), O = c.job = y.runIfDirty.bind(y);
    O.i = c, O.id = c.uid, y.scheduler = () => gs(O), tt(c, true), m();
  }, D = (c, u, h) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, Vo(c, u.props, b, h), Jo(c, u.children, h), He(), Rs(c), Ne();
  }, V = (c, u, h, b, g, _, S, x, y = false) => {
    const m = c && c.children, O = c ? c.shapeFlag : 0, C = u.children, { patchFlag: E, shapeFlag: I } = u;
    if (E > 0) {
      if (E & 128) {
        qt(m, C, h, b, g, _, S, x, y);
        return;
      } else if (E & 256) {
        Xe(m, C, h, b, g, _, S, x, y);
        return;
      }
    }
    I & 8 ? (O & 16 && vt(m, g, _), C !== m && a(h, C)) : O & 16 ? I & 16 ? qt(m, C, h, b, g, _, S, x, y) : vt(m, g, _, true) : (O & 8 && a(h, ""), I & 16 && j(C, h, b, g, _, S, x, y));
  }, Xe = (c, u, h, b, g, _, S, x, y) => {
    c = c || ht, u = u || ht;
    const m = c.length, O = u.length, C = Math.min(m, O);
    let E;
    for (E = 0; E < C; E++) {
      const I = u[E] = y ? Be(u[E]) : Ie(u[E]);
      F(c[E], I, h, null, g, _, S, x, y);
    }
    m > O ? vt(c, g, _, true, false, C) : j(u, h, b, g, _, S, x, y, C);
  }, qt = (c, u, h, b, g, _, S, x, y) => {
    let m = 0;
    const O = u.length;
    let C = c.length - 1, E = O - 1;
    for (; m <= C && m <= E; ) {
      const I = c[m], L = u[m] = y ? Be(u[m]) : Ie(u[m]);
      if (Tt(I, L)) F(I, L, h, null, g, _, S, x, y);
      else break;
      m++;
    }
    for (; m <= C && m <= E; ) {
      const I = c[C], L = u[E] = y ? Be(u[E]) : Ie(u[E]);
      if (Tt(I, L)) F(I, L, h, null, g, _, S, x, y);
      else break;
      C--, E--;
    }
    if (m > C) {
      if (m <= E) {
        const I = E + 1, L = I < O ? u[I].el : b;
        for (; m <= E; ) F(null, u[m] = y ? Be(u[m]) : Ie(u[m]), h, L, g, _, S, x, y), m++;
      }
    } else if (m > E) for (; m <= C; ) ve(c[m], g, _, true), m++;
    else {
      const I = m, L = m, B = /* @__PURE__ */ new Map();
      for (m = L; m <= E; m++) {
        const he = u[m] = y ? Be(u[m]) : Ie(u[m]);
        he.key != null && B.set(he.key, m);
      }
      let K, de = 0;
      const fe = E - L + 1;
      let Se = false, Ce = 0;
      const Ct = new Array(fe);
      for (m = 0; m < fe; m++) Ct[m] = 0;
      for (m = I; m <= C; m++) {
        const he = c[m];
        if (de >= fe) {
          ve(he, g, _, true);
          continue;
        }
        let Ee;
        if (he.key != null) Ee = B.get(he.key);
        else for (K = L; K <= E; K++) if (Ct[K - L] === 0 && Tt(he, u[K])) {
          Ee = K;
          break;
        }
        Ee === void 0 ? ve(he, g, _, true) : (Ct[Ee - L] = m + 1, Ee >= Ce ? Ce = Ee : Se = true, F(he, u[Ee], h, null, g, _, S, x, y), de++);
      }
      const Es = Se ? Qo(Ct) : ht;
      for (K = Es.length - 1, m = fe - 1; m >= 0; m--) {
        const he = L + m, Ee = u[he], Ts = he + 1 < O ? u[he + 1].el : b;
        Ct[m] === 0 ? F(null, Ee, h, Ts, g, _, S, x, y) : Se && (K < 0 || m !== Es[K] ? Ze(Ee, h, Ts, 2) : K--);
      }
    }
  }, Ze = (c, u, h, b, g = null) => {
    const { el: _, type: S, transition: x, children: y, shapeFlag: m } = c;
    if (m & 6) {
      Ze(c.component.subTree, u, h, b);
      return;
    }
    if (m & 128) {
      c.suspense.move(u, h, b);
      return;
    }
    if (m & 64) {
      S.move(c, u, h, St);
      return;
    }
    if (S === Ae) {
      s(_, u, h);
      for (let C = 0; C < y.length; C++) Ze(y[C], u, h, b);
      s(c.anchor, u, h);
      return;
    }
    if (S === jn) {
      J(c, u, h);
      return;
    }
    if (b !== 2 && m & 1 && x) if (b === 0) x.beforeEnter(_), s(_, u, h), ge(() => x.enter(_), g);
    else {
      const { leave: C, delayLeave: E, afterLeave: I } = x, L = () => {
        c.ctx.isUnmounted ? r(_) : s(_, u, h);
      }, B = () => {
        C(_, () => {
          L(), I && I();
        });
      };
      E ? E(_, L, B) : B();
    }
    else s(_, u, h);
  }, ve = (c, u, h, b = false, g = false) => {
    const { type: _, props: S, ref: x, children: y, dynamicChildren: m, shapeFlag: O, patchFlag: C, dirs: E, cacheIndex: I } = c;
    if (C === -2 && (g = false), x != null && (He(), fn(x, null, h, c, true), Ne()), I != null && (u.renderCache[I] = void 0), O & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const L = O & 1 && E, B = !Ft(c);
    let K;
    if (B && (K = S && S.onVnodeBeforeUnmount) && Te(K, u, c), O & 6) xi(c.component, h, b);
    else {
      if (O & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      L && et(c, null, u, "beforeUnmount"), O & 64 ? c.type.remove(c, u, h, St, b) : m && !m.hasOnce && (_ !== Ae || C > 0 && C & 64) ? vt(m, u, h, false, true) : (_ === Ae && C & 384 || !g && O & 16) && vt(y, u, h), b && Ss(c);
    }
    (B && (K = S && S.onVnodeUnmounted) || L) && ge(() => {
      K && Te(K, u, c), L && et(c, null, u, "unmounted");
    }, h);
  }, Ss = (c) => {
    const { type: u, el: h, anchor: b, transition: g } = c;
    if (u === Ae) {
      yi(h, b);
      return;
    }
    if (u === jn) {
      A(c);
      return;
    }
    const _ = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: S, delayLeave: x } = g, y = () => S(h, _);
      x ? x(c.el, _, y) : y();
    } else _();
  }, yi = (c, u) => {
    let h;
    for (; c !== u; ) h = w(c), r(c), c = h;
    r(u);
  }, xi = (c, u, h) => {
    const { bum: b, scope: g, job: _, subTree: S, um: x, m: y, a: m, parent: O, slots: { __: C } } = c;
    Ls(y), Ls(m), b && An(b), O && R(C) && C.forEach((E) => {
      O.renderCache[E] = void 0;
    }), g.stop(), _ && (_.flags |= 8, ve(S, c, u, h)), x && ge(x, u), ge(() => {
      c.isUnmounted = true;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, vt = (c, u, h, b = false, g = false, _ = 0) => {
    for (let S = _; S < c.length; S++) ve(c[S], u, h, b, g);
  }, Jt = (c) => {
    if (c.shapeFlag & 6) return Jt(c.component.subTree);
    if (c.shapeFlag & 128) return c.suspense.next();
    const u = w(c.anchor || c.el), h = u && u[_o];
    return h ? w(h) : u;
  };
  let Tn = false;
  const Cs = (c, u, h) => {
    c == null ? u._vnode && ve(u._vnode, null, null, true) : F(u._vnode || null, c, u, null, null, null, h), u._vnode = c, Tn || (Tn = true, Rs(), Dr(), Tn = false);
  }, St = { p: F, um: ve, m: Ze, r: Ss, mt: xt, mc: j, pc: V, pbc: X, n: Jt, o: e };
  return { render: Cs, hydrate: void 0, createApp: No(Cs) };
}
function Dn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xr(e, t, n = false) {
  const s = e.children, r = t.children;
  if (R(s) && R(r)) for (let i = 0; i < s.length; i++) {
    const o = s[i];
    let l = r[i];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Be(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Xr(o, l)), l.type === Cn && (l.el = o.el), l.type === wt && !l.el && (l.el = o.el);
  }
}
function Qo(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; ) l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
  return n;
}
function Zr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Zr(t);
}
function Ls(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Xo = Symbol.for("v-scx"), Zo = () => jt(Xo);
function Xt(e, t, n) {
  return ei(e, t, n);
}
function ei(e, t, n = q) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = oe({}, n), f = t && s || !t && i !== "post";
  let d;
  if (Kt) {
    if (i === "sync") {
      const v = Zo();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!f) {
      const v = () => {
      };
      return v.stop = Re, v.resume = Re, v.pause = Re, v;
    }
  }
  const a = ie;
  l.call = (v, P, F) => Me(v, a, P, F);
  let p = false;
  i === "post" ? l.scheduler = (v) => {
    ge(v, a && a.suspense);
  } : i !== "sync" && (p = true, l.scheduler = (v, P) => {
    P ? v() : gs(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), p && (v.flags |= 2, a && (v.id = a.uid, v.i = a));
  };
  const w = uo(e, t, l);
  return Kt && (d ? d.push(w) : f && w()), w;
}
function el(e, t, n) {
  const s = this.proxy, r = Z(e) ? e.includes(".") ? ti(s, e) : () => s[e] : e.bind(s, s);
  let i;
  M(t) ? i = t : (i = t.handler, n = t);
  const o = Bt(this), l = ei(r, i.bind(s), n);
  return o(), l;
}
function ti(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const tl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${ct(t)}Modifiers`];
function nl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || q;
  let r = n;
  const i = t.startsWith("update:"), o = i && tl(s, t.slice(7));
  o && (o.trim && (r = n.map((a) => Z(a) ? a.trim() : a)), o.number && (r = n.map(Oi)));
  let l, f = s[l = On(t)] || s[l = On(Ge(t))];
  !f && i && (f = s[l = On(ct(t))]), f && Me(f, e, 6, r);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = true, Me(d, e, 6, r);
  }
}
function ni(e, t, n = false) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {}, l = false;
  if (!M(e)) {
    const f = (d) => {
      const a = ni(d, t, true);
      a && (l = true, oe(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (G(e) && s.set(e, null), null) : (R(i) ? i.forEach((f) => o[f] = null) : oe(o, i), G(e) && s.set(e, o), o);
}
function Sn(e, t) {
  return !e || !pn(t) ? false : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, ct(t)) || U(e, t));
}
function $s(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: f, render: d, renderCache: a, props: p, data: w, setupState: v, ctx: P, inheritAttrs: F } = e, ee = cn(e);
  let W, k;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, N = A;
      W = Ie(d.call(N, A, a, p, v, w, P)), k = l;
    } else {
      const A = t;
      W = Ie(A.length > 1 ? A(p, { attrs: l, slots: o, emit: f }) : A(p, null)), k = t.props ? l : sl(l);
    }
  } catch (A) {
    Lt.length = 0, xn(A, e, 1), W = ke(wt);
  }
  let J = W;
  if (k && F !== false) {
    const A = Object.keys(k), { shapeFlag: N } = J;
    A.length && N & 7 && (i && A.some(ss) && (k = rl(k, i)), J = yt(J, k, false, true));
  }
  return n.dirs && (J = yt(J, null, false, true), J.dirs = J.dirs ? J.dirs.concat(n.dirs) : n.dirs), n.transition && _s(J, n.transition), W = J, cn(ee), W;
}
const sl = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rl = (e, t) => {
  const n = {};
  for (const s in e) (!ss(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function il(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && f >= 0) {
    if (f & 1024) return true;
    if (f & 16) return s ? Hs(s, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== s[w] && !Sn(d, w)) return true;
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? true : s === o ? false : s ? o ? Hs(s, o, d) : true : !!o;
  return false;
}
function Hs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return true;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Sn(n, i)) return true;
  }
  return false;
}
function ol({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const si = (e) => e.__isSuspense;
function ll(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : po(e);
}
const Ae = Symbol.for("v-fgt"), Cn = Symbol.for("v-txt"), wt = Symbol.for("v-cmt"), jn = Symbol.for("v-stc"), Lt = [];
let _e = null;
function bt(e = false) {
  Lt.push(_e = e ? null : []);
}
function cl() {
  Lt.pop(), _e = Lt[Lt.length - 1] || null;
}
let Wt = 1;
function Ns(e, t = false) {
  Wt += e, e < 0 && _e && t && (_e.hasOnce = true);
}
function ri(e) {
  return e.dynamicChildren = Wt > 0 ? _e || ht : null, cl(), Wt > 0 && _e && _e.push(e), e;
}
function an(e, t, n, s, r, i) {
  return ri(ae(e, t, n, s, r, i, true));
}
function Us(e, t, n, s, r) {
  return ri(ke(e, t, n, s, r, true));
}
function ii(e) {
  return e ? e.__v_isVNode === true : false;
}
function Tt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const oi = ({ key: e }) => e ?? null, Zt = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || Q(e) || M(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function ae(e, t = null, n = null, s = 0, r = null, i = e === Ae ? 0 : 1, o = false, l = false) {
  const f = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && oi(t), ref: t && Zt(t), scopeId: Lr, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: s, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: we };
  return l ? (ys(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= Z(n) ? 8 : 16), Wt > 0 && !o && _e && (f.patchFlag > 0 || i & 6) && f.patchFlag !== 32 && _e.push(f), f;
}
const ke = fl;
function fl(e, t = null, n = null, s = 0, r = null, i = false) {
  if ((!e || e === Ro) && (e = wt), ii(e)) {
    const l = yt(e, t, true);
    return n && ys(l, n), Wt > 0 && !i && _e && (l.shapeFlag & 6 ? _e[_e.indexOf(e)] = l : _e.push(l)), l.patchFlag = -2, l;
  }
  if (wl(e) && (e = e.__vccOpts), t) {
    t = ul(t);
    let { class: l, style: f } = t;
    l && !Z(l) && (t.class = mn(l)), G(f) && (hs(f) && !R(f) && (f = oe({}, f)), t.style = os(f));
  }
  const o = Z(e) ? 1 : si(e) ? 128 : bo(e) ? 64 : G(e) ? 4 : M(e) ? 2 : 0;
  return ae(e, t, n, s, r, o, i, true);
}
function ul(e) {
  return e ? hs(e) || qr(e) ? oe({}, e) : e : null;
}
function yt(e, t, n = false, s = false) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? al(r || {}, t) : r, a = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && oi(d), ref: t && t.ref ? n && i ? R(i) ? i.concat(Zt(t)) : [i, Zt(t)] : Zt(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== Ae ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: f, component: e.component, suspense: e.suspense, ssContent: e.ssContent && yt(e.ssContent), ssFallback: e.ssFallback && yt(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return f && s && _s(a, f.clone(a)), a;
}
function li(e = " ", t = 0) {
  return ke(Cn, null, e, t);
}
function Ie(e) {
  return e == null || typeof e == "boolean" ? ke(wt) : R(e) ? ke(Ae, null, e.slice()) : ii(e) ? Be(e) : ke(Cn, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function ys(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (R(t)) n = 16;
  else if (typeof t == "object") if (s & 65) {
    const r = t.default;
    r && (r._c && (r._d = false), ys(e, r()), r._c && (r._d = true));
    return;
  } else {
    n = 32;
    const r = t._;
    !r && !qr(t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else M(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [li(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function al(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s) if (r === "class") t.class !== s.class && (t.class = mn([t.class, s.class]));
    else if (r === "style") t.style = os([t.style, s.style]);
    else if (pn(r)) {
      const i = t[r], o = s[r];
      o && i !== o && !(R(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
    } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Te(e, t, n, s = null) {
  Me(e, t, 7, [n, s]);
}
const dl = Vr();
let hl = 0;
function pl(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || dl, i = { uid: hl++, vnode: e, type: s, parent: t, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new dr(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(r.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: kr(s, r), emitsOptions: ni(s, r), emit: null, emitted: null, propsDefaults: q, inheritAttrs: s.inheritAttrs, ctx: q, data: q, props: q, attrs: q, slots: q, refs: q, setupState: q, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = nl.bind(null, i), e.ce && e.ce(i), i;
}
let ie = null, dn, Yn;
{
  const e = bn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  dn = t("__VUE_INSTANCE_SETTERS__", (n) => ie = n), Yn = t("__VUE_SSR_SETTERS__", (n) => Kt = n);
}
const Bt = (e) => {
  const t = ie;
  return dn(e), e.scope.on(), () => {
    e.scope.off(), dn(t);
  };
}, Ws = () => {
  ie && ie.scope.off(), dn(null);
};
function ci(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = false;
function gl(e, t = false, n = false) {
  t && Yn(t);
  const { props: s, children: r } = e.vnode, i = ci(e);
  Ko(e, s, i, t), qo(e, r, n || t);
  const o = i ? _l(e, t) : void 0;
  return t && Yn(false), o;
}
function _l(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mo);
  const { setup: s } = n;
  if (s) {
    He();
    const r = e.setupContext = s.length > 1 ? ml(e) : null, i = Bt(e), o = Vt(s, e, 0, [e.props, r]), l = rr(o);
    if (Ne(), i(), (l || e.sp) && !Ft(e) && $r(e), l) {
      if (o.then(Ws, Ws), t) return o.then((f) => {
        Ks(e, f);
      }).catch((f) => {
        xn(f, e, 0);
      });
      e.asyncDep = o;
    } else Ks(e, o);
  } else fi(e);
}
function Ks(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = Rr(t)), fi(e);
}
function fi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Re);
  {
    const r = Bt(e);
    He();
    try {
      Fo(e);
    } finally {
      Ne(), r();
    }
  }
}
const bl = { get(e, t) {
  return re(e, "get", ""), e[t];
} };
function ml(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, bl), slots: e.slots, emit: e.emit, expose: t };
}
function xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rr(ps(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Dt) return Dt[n](e);
  }, has(t, n) {
    return n in t || n in Dt;
  } })) : e.proxy;
}
function wl(e) {
  return M(e) && "__vccOpts" in e;
}
const ui = (e, t) => co(e, t, Kt), yl = "3.5.16";
/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qn;
const Vs = typeof window < "u" && window.trustedTypes;
if (Vs) try {
  Qn = Vs.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const ai = Qn ? (e) => Qn.createHTML(e) : (e) => e, xl = "http://www.w3.org/2000/svg", vl = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, Bs = je && je.createElement("template"), Sl = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, s) => {
  const r = t === "svg" ? je.createElementNS(xl, e) : t === "mathml" ? je.createElementNS(vl, e) : n ? je.createElement(e, { is: n }) : je.createElement(e);
  return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
}, createText: (e) => je.createTextNode(e), createComment: (e) => je.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => je.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, s, r, i) {
  const o = n ? n.previousSibling : t.lastChild;
  if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
  else {
    Bs.innerHTML = ai(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
    const l = Bs.content;
    if (s === "svg" || s === "mathml") {
      const f = l.firstChild;
      for (; f.firstChild; ) l.appendChild(f.firstChild);
      l.removeChild(f);
    }
    t.insertBefore(l, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Cl = Symbol("_vtc");
function El(e, t, n) {
  const s = e[Cl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zs = Symbol("_vod"), Tl = Symbol("_vsh"), Ol = Symbol(""), Al = /(^|;)\s*display\s*:/;
function Il(e, t, n) {
  const s = e.style, r = Z(n);
  let i = false;
  if (n && !r) {
    if (t) if (Z(t)) for (const o of t.split(";")) {
      const l = o.slice(0, o.indexOf(":")).trim();
      n[l] == null && en(s, l, "");
    }
    else for (const o in t) n[o] == null && en(s, o, "");
    for (const o in n) o === "display" && (i = true), en(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Ol];
      o && (n += ";" + o), s.cssText = n, i = Al.test(n);
    }
  } else t && e.removeAttribute("style");
  zs in e && (e[zs] = i ? s.display : "", e[Tl] && (s.display = "none"));
}
const qs = /\s*!important$/;
function en(e, t, n) {
  if (R(n)) n.forEach((s) => en(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const s = Rl(e, t);
    qs.test(n) ? e.setProperty(ct(s), n.replace(qs, ""), "important") : e[s] = n;
  }
}
const Js = ["Webkit", "Moz", "ms"], Ln = {};
function Rl(e, t) {
  const n = Ln[t];
  if (n) return n;
  let s = Ge(t);
  if (s !== "filter" && s in e) return Ln[t] = s;
  s = lr(s);
  for (let r = 0; r < Js.length; r++) {
    const i = Js[r] + s;
    if (i in e) return Ln[t] = i;
  }
  return t;
}
const ks = "http://www.w3.org/1999/xlink";
function Gs(e, t, n, s, r, i = Fi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ks, t.slice(6, t.length)) : e.setAttributeNS(ks, t, n) : n == null || i && !fr(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Qe(n) ? String(n) : n);
}
function Ys(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ai(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = fr(n) : n == null && l === "string" ? (n = "", o = true) : l === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Pl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ml(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Qs = Symbol("_vei");
function Fl(e, t, n, s, r = null) {
  const i = e[Qs] || (e[Qs] = {}), o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, f] = Dl(t);
    if (s) {
      const d = i[t] = $l(s, r);
      Pl(e, l, d, f);
    } else o && (Ml(e, l, o, f), i[t] = void 0);
  }
}
const Xs = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (Xs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Xs); ) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : ct(e.slice(2)), t];
}
let $n = 0;
const jl = Promise.resolve(), Ll = () => $n || (jl.then(() => $n = 0), $n = Date.now());
function $l(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Me(Hl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Ll(), n;
}
function Hl(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else return t;
}
const Zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nl = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? El(e, s, o) : t === "style" ? Il(e, n, s) : pn(t) ? ss(t) || Fl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Ul(e, t, s, o)) ? (Ys(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gs(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Z(s)) ? Ys(e, Ge(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Gs(e, t, s, o));
};
function Ul(e, t, n, s) {
  if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Zs(t) && M(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
  }
  return Zs(t) && Z(n) ? false : t in e;
}
const Wl = ["ctrl", "shift", "alt", "meta"], Kl = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Wl.some((n) => e[`${n}Key`] && !t.includes(n)) }, nt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Kl[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, Vl = oe({ patchProp: Nl }, Sl);
let er;
function Bl() {
  return er || (er = ko(Vl));
}
const zl = (...e) => {
  const t = Bl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Jl(s);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, false, ql(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function ql(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Jl(e) {
  return Z(e) ? document.querySelector(e) : e;
}
/*!
* pinia v3.0.3
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let di;
const En = (e) => di = e, hi = Symbol();
function Xn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var $t;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})($t || ($t = {}));
function kl() {
  const e = hr(true), t = e.run(() => gt({}));
  let n = [], s = [];
  const r = ps({ install(i) {
    En(r), r._a = i, i.provide(hi, r), i.config.globalProperties.$pinia = r, s.forEach((o) => n.push(o)), s = [];
  }, use(i) {
    return this._a ? n.push(i) : s.push(i), this;
  }, _p: n, _a: null, _e: e, _s: /* @__PURE__ */ new Map(), state: t });
  return r;
}
const pi = () => {
};
function tr(e, t, n, s = pi) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && pr() && Di(r), r;
}
function ut(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Gl = (e) => e(), nr = Symbol(), Hn = Symbol();
function Zn(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n], r = e[n];
    Xn(r) && Xn(s) && e.hasOwnProperty(n) && !Q(s) && !Je(s) ? e[n] = Zn(r, s) : e[n] = s;
  }
  return e;
}
const Yl = Symbol();
function Ql(e) {
  return !Xn(e) || !Object.prototype.hasOwnProperty.call(e, Yl);
}
const { assign: Ke } = Object;
function Xl(e) {
  return !!(Q(e) && e.effect);
}
function Zl(e, t, n, s) {
  const { state: r, actions: i, getters: o } = t, l = n.state.value[e];
  let f;
  function d() {
    l || (n.state.value[e] = r ? r() : {});
    const a = ro(n.state.value[e]);
    return Ke(a, i, Object.keys(o || {}).reduce((p, w) => (p[w] = ps(ui(() => {
      En(n);
      const v = n._s.get(e);
      return o[w].call(v, v);
    })), p), {}));
  }
  return f = gi(e, d, t, n, s, true), f;
}
function gi(e, t, n = {}, s, r, i) {
  let o;
  const l = Ke({ actions: {} }, n), f = { deep: true };
  let d, a, p = [], w = [], v;
  const P = s.state.value[e];
  !i && !P && (s.state.value[e] = {}), gt({});
  let F;
  function ee(j) {
    let $;
    d = a = false, typeof j == "function" ? (j(s.state.value[e]), $ = { type: $t.patchFunction, storeId: e, events: v }) : (Zn(s.state.value[e], j), $ = { type: $t.patchObject, payload: j, storeId: e, events: v });
    const X = F = Symbol();
    Mr().then(() => {
      F === X && (d = true);
    }), a = true, ut(p, $, s.state.value[e]);
  }
  const W = i ? function() {
    const { state: $ } = n, X = $ ? $() : {};
    this.$patch((be) => {
      Ke(be, X);
    });
  } : pi;
  function k() {
    o.stop(), p = [], w = [], s._s.delete(e);
  }
  const J = (j, $ = "") => {
    if (nr in j) return j[Hn] = $, j;
    const X = function() {
      En(s);
      const be = Array.from(arguments), xe = [], We = [];
      function xt(D) {
        xe.push(D);
      }
      function zt(D) {
        We.push(D);
      }
      ut(w, { args: be, name: X[Hn], store: N, after: xt, onError: zt });
      let Y;
      try {
        Y = j.apply(this && this.$id === e ? this : N, be);
      } catch (D) {
        throw ut(We, D), D;
      }
      return Y instanceof Promise ? Y.then((D) => (ut(xe, D), D)).catch((D) => (ut(We, D), Promise.reject(D))) : (ut(xe, Y), Y);
    };
    return X[nr] = true, X[Hn] = $, X;
  }, A = { _p: s, $id: e, $onAction: tr.bind(null, w), $patch: ee, $reset: W, $subscribe(j, $ = {}) {
    const X = tr(p, j, $.detached, () => be()), be = o.run(() => Xt(() => s.state.value[e], (xe) => {
      ($.flush === "sync" ? a : d) && j({ storeId: e, type: $t.direct, events: v }, xe);
    }, Ke({}, f, $)));
    return X;
  }, $dispose: k }, N = yn(A);
  s._s.set(e, N);
  const ne = (s._a && s._a.runWithContext || Gl)(() => s._e.run(() => (o = hr()).run(() => t({ action: J }))));
  for (const j in ne) {
    const $ = ne[j];
    if (Q($) && !Xl($) || Je($)) i || (P && Ql($) && (Q($) ? $.value = P[j] : Zn($, P[j])), s.state.value[e][j] = $);
    else if (typeof $ == "function") {
      const X = J($, j);
      ne[j] = X, l.actions[j] = $;
    }
  }
  return Ke(N, ne), Ke(H(N), ne), Object.defineProperty(N, "$state", { get: () => s.state.value[e], set: (j) => {
    ee(($) => {
      Ke($, j);
    });
  } }), s._p.forEach((j) => {
    Ke(N, o.run(() => j({ store: N, app: s._a, pinia: s, options: l })));
  }), P && i && n.hydrate && n.hydrate(N.$state, P), d = true, a = true, N;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ec(e, t, n) {
  let s;
  const r = typeof t == "function";
  s = r ? n : t;
  function i(o, l) {
    const f = Wo();
    return o = o || (f ? jt(hi, null) : null), o && En(o), o = di, o._s.has(e) || (r ? gi(e, t, s, o) : Zl(e, s, o)), o._s.get(e);
  }
  return i.$id = e, i;
}
const vs = /* @__PURE__ */ ec("image", { state: () => ({ file: null, filter: "" }), actions: { upload(e) {
  if (!e.dataTransfer) return;
  const t = e.dataTransfer.files[0];
  t.type.match("image.*") && (this.file = t);
} } });
let T;
function es(e) {
  const t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    const r = e.description;
    return r == null ? "Symbol" : `Symbol(${r})`;
  }
  if (t == "function") {
    const r = e.name;
    return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
  }
  if (Array.isArray(e)) {
    const r = e.length;
    let i = "[";
    r > 0 && (i += es(e[0]));
    for (let o = 1; o < r; o++) i += ", " + es(e[o]);
    return i += "]", i;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
  let s;
  if (n.length > 1) s = n[1];
  else return toString.call(e);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(e) + ")";
  } catch {
    return "Object";
  }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : s;
}
let Pe = 0, At = null;
function mt() {
  return (At === null || At.byteLength === 0) && (At = new Uint8Array(T.memory.buffer)), At;
}
const tn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, tc = typeof tn.encodeInto == "function" ? function(e, t) {
  return tn.encodeInto(e, t);
} : function(e, t) {
  const n = tn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function hn(e, t, n) {
  if (n === void 0) {
    const l = tn.encode(e), f = t(l.length, 1) >>> 0;
    return mt().subarray(f, f + l.length).set(l), Pe = l.length, f;
  }
  let s = e.length, r = t(s, 1) >>> 0;
  const i = mt();
  let o = 0;
  for (; o < s; o++) {
    const l = e.charCodeAt(o);
    if (l > 127) break;
    i[r + o] = l;
  }
  if (o !== s) {
    o !== 0 && (e = e.slice(o)), r = n(r, s, s = o + e.length * 3, 1) >>> 0;
    const l = mt().subarray(r + o, r + s), f = tc(e, l);
    o += f.written, r = n(r, s, o, 1) >>> 0;
  }
  return Pe = o, r;
}
let rt = null;
function at() {
  return (rt === null || rt.buffer.detached === true || rt.buffer.detached === void 0 && rt.buffer !== T.memory.buffer) && (rt = new DataView(T.memory.buffer)), rt;
}
const _i = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && _i.decode();
function it(e, t) {
  return e = e >>> 0, _i.decode(mt().subarray(e, e + t));
}
function bi(e, t) {
  if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return e.ptr;
}
function nc(e, t) {
  bi(e, $e);
  const n = hn(t, T.__wbindgen_malloc, T.__wbindgen_realloc), s = Pe;
  T.filter(e.__wbg_ptr, n, s);
}
function ts(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return mt().set(e, n / 1), Pe = e.length, n;
}
function Qt(e, t) {
  return e = e >>> 0, mt().subarray(e / 1, e / 1 + t);
}
function sc(e, t, n) {
  bi(n, $e);
  var s = n.__destroy_into_raw();
  T.putImageData(e, t, s);
}
function rc(e, t) {
  const n = T.open_image(e, t);
  return $e.__wrap(n);
}
function Nn(e) {
  return e == null;
}
function nn(e) {
  const t = T.__externref_table_alloc();
  return T.__wbindgen_export_2.set(t, e), t;
}
function pe(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    const s = nn(n);
    T.__wbindgen_exn_store(s);
  }
}
let It = null;
function ic() {
  return (It === null || It.byteLength === 0) && (It = new Uint8ClampedArray(T.memory.buffer)), It;
}
function oc(e, t) {
  return e = e >>> 0, ic().subarray(e / 1, e / 1 + t);
}
const Un = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => T.__wbg_photonimage_free(e >>> 0, 1));
class $e {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create($e.prototype);
    return n.__wbg_ptr = t, Un.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Un.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    T.__wbg_photonimage_free(t, 0);
  }
  constructor(t, n, s) {
    const r = ts(t, T.__wbindgen_malloc), i = Pe, o = T.photonimage_new(r, i, n, s);
    return this.__wbg_ptr = o >>> 0, Un.register(this, this.__wbg_ptr, this), this;
  }
  static new_from_base64(t) {
    const n = hn(t, T.__wbindgen_malloc, T.__wbindgen_realloc), s = Pe, r = T.base64_to_image(n, s);
    return $e.__wrap(r);
  }
  static new_from_byteslice(t) {
    const n = ts(t, T.__wbindgen_malloc), s = Pe, r = T.photonimage_new_from_byteslice(n, s);
    return $e.__wrap(r);
  }
  static new_from_blob(t) {
    const n = T.photonimage_new_from_blob(t);
    return $e.__wrap(n);
  }
  static new_from_image(t) {
    const n = T.photonimage_new_from_image(t);
    return $e.__wrap(n);
  }
  get_width() {
    return T.photonimage_get_width(this.__wbg_ptr) >>> 0;
  }
  get_raw_pixels() {
    const t = T.photonimage_get_raw_pixels(this.__wbg_ptr);
    var n = Qt(t[0], t[1]).slice();
    return T.__wbindgen_free(t[0], t[1] * 1, 1), n;
  }
  get_height() {
    return T.photonimage_get_height(this.__wbg_ptr) >>> 0;
  }
  get_base64() {
    let t, n;
    try {
      const s = T.photonimage_get_base64(this.__wbg_ptr);
      return t = s[0], n = s[1], it(s[0], s[1]);
    } finally {
      T.__wbindgen_free(t, n, 1);
    }
  }
  get_bytes() {
    const t = T.photonimage_get_bytes(this.__wbg_ptr);
    var n = Qt(t[0], t[1]).slice();
    return T.__wbindgen_free(t[0], t[1] * 1, 1), n;
  }
  get_bytes_jpeg(t) {
    const n = T.photonimage_get_bytes_jpeg(this.__wbg_ptr, t);
    var s = Qt(n[0], n[1]).slice();
    return T.__wbindgen_free(n[0], n[1] * 1, 1), s;
  }
  get_bytes_webp() {
    const t = T.photonimage_get_bytes_webp(this.__wbg_ptr);
    var n = Qt(t[0], t[1]).slice();
    return T.__wbindgen_free(t[0], t[1] * 1, 1), n;
  }
  get_image_data() {
    return T.photonimage_get_image_data(this.__wbg_ptr);
  }
  set_imgdata(t) {
    T.photonimage_set_imgdata(this.__wbg_ptr, t);
  }
  get_estimated_filesize() {
    const t = T.photonimage_get_estimated_filesize(this.__wbg_ptr);
    return BigInt.asUintN(64, t);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => T.__wbg_rgb_free(e >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => T.__wbg_rgba_free(e >>> 0, 1));
async function lc(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (s) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t);
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
  }
}
function cc() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbg_new_abda76e883ba8a5f = function() {
    return new Error();
  }, e.wbg.__wbg_stack_658279fe44541cf6 = function(t, n) {
    const s = n.stack, r = hn(s, T.__wbindgen_malloc, T.__wbindgen_realloc), i = Pe;
    at().setInt32(t + 4 * 1, i, true), at().setInt32(t + 4 * 0, r, true);
  }, e.wbg.__wbg_error_f851667af71bcfc6 = function(t, n) {
    let s, r;
    try {
      s = t, r = n, console.error(it(t, n));
    } finally {
      T.__wbindgen_free(s, r, 1);
    }
  }, e.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec = function(t) {
    let n;
    try {
      n = t instanceof Window;
    } catch {
      n = false;
    }
    return n;
  }, e.wbg.__wbg_document_e5c1786dea6542e4 = function(t) {
    const n = t.document;
    return Nn(n) ? 0 : nn(n);
  }, e.wbg.__wbg_body_e70ae6abd01ae584 = function(t) {
    const n = t.body;
    return Nn(n) ? 0 : nn(n);
  }, e.wbg.__wbg_createElement_5d4c76f218b78145 = function() {
    return pe(function(t, n, s) {
      return t.createElement(it(n, s));
    }, arguments);
  }, e.wbg.__wbg_width_4c6f0048d64cf86b = function(t) {
    return t.width;
  }, e.wbg.__wbg_height_21f0d3fd8f753394 = function(t) {
    return t.height;
  }, e.wbg.__wbg_width_79e0847ed5883b03 = function(t) {
    return t.width;
  }, e.wbg.__wbg_height_e4e4e4779f8feac0 = function(t) {
    return t.height;
  }, e.wbg.__wbg_data_fda507064d127f5b = function(t, n) {
    const s = n.data, r = ts(s, T.__wbindgen_malloc), i = Pe;
    at().setInt32(t + 4 * 1, i, true), at().setInt32(t + 4 * 0, r, true);
  }, e.wbg.__wbg_newwithu8clampedarrayandsh_1fddccb3a94a5e05 = function() {
    return pe(function(t, n, s, r) {
      return new ImageData(oc(t, n), s >>> 0, r >>> 0);
    }, arguments);
  }, e.wbg.__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae = function(t) {
    let n;
    try {
      n = t instanceof CanvasRenderingContext2D;
    } catch {
      n = false;
    }
    return n;
  }, e.wbg.__wbg_drawImage_fede06db74e39a60 = function() {
    return pe(function(t, n, s, r) {
      t.drawImage(n, s, r);
    }, arguments);
  }, e.wbg.__wbg_drawImage_f395c8e43c79a909 = function() {
    return pe(function(t, n, s, r, i, o, l, f, d, a) {
      t.drawImage(n, s, r, i, o, l, f, d, a);
    }, arguments);
  }, e.wbg.__wbg_getImageData_5e1c242046e6b59e = function() {
    return pe(function(t, n, s, r, i) {
      return t.getImageData(n, s, r, i);
    }, arguments);
  }, e.wbg.__wbg_putImageData_a8b3e177ee06d521 = function() {
    return pe(function(t, n, s, r) {
      t.putImageData(n, s, r);
    }, arguments);
  }, e.wbg.__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e = function(t) {
    let n;
    try {
      n = t instanceof HTMLCanvasElement;
    } catch {
      n = false;
    }
    return n;
  }, e.wbg.__wbg_width_dc225e55343b745e = function(t) {
    return t.width;
  }, e.wbg.__wbg_setwidth_488780db69b08846 = function(t, n) {
    t.width = n >>> 0;
  }, e.wbg.__wbg_height_3a8bec2f3fe71b26 = function(t) {
    return t.height;
  }, e.wbg.__wbg_setheight_1761808c18403921 = function(t, n) {
    t.height = n >>> 0;
  }, e.wbg.__wbg_getContext_fc99dbd3a9a7e318 = function() {
    return pe(function(t, n, s) {
      const r = t.getContext(it(n, s));
      return Nn(r) ? 0 : nn(r);
    }, arguments);
  }, e.wbg.__wbg_settextContent_f82a86a8df347e1c = function(t, n, s) {
    t.textContent = n === 0 ? void 0 : it(n, s);
  }, e.wbg.__wbg_appendChild_fa3b00dade9fc4cf = function() {
    return pe(function(t, n) {
      return t.appendChild(n);
    }, arguments);
  }, e.wbg.__wbg_newnoargs_e643855c6572a4a8 = function(t, n) {
    return new Function(it(t, n));
  }, e.wbg.__wbg_call_f96b398515635514 = function() {
    return pe(function(t, n) {
      return t.call(n);
    }, arguments);
  }, e.wbg.__wbg_self_b9aad7f1c618bfaf = function() {
    return pe(function() {
      return self.self;
    }, arguments);
  }, e.wbg.__wbg_window_55e469842c98b086 = function() {
    return pe(function() {
      return window.window;
    }, arguments);
  }, e.wbg.__wbg_globalThis_d0957e302752547e = function() {
    return pe(function() {
      return globalThis.globalThis;
    }, arguments);
  }, e.wbg.__wbg_global_ae2f87312b8987fb = function() {
    return pe(function() {
      return global.global;
    }, arguments);
  }, e.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, e.wbg.__wbg_buffer_fcbfb6d88b2732e9 = function(t) {
    return t.buffer;
  }, e.wbg.__wbg_new_bc5d9aad3f9ac80e = function(t) {
    return new Uint8Array(t);
  }, e.wbg.__wbg_set_4b3aa8445ac1e91c = function(t, n, s) {
    t.set(n, s >>> 0);
  }, e.wbg.__wbg_length_d9c4ded7e708c6a1 = function(t) {
    return t.length;
  }, e.wbg.__wbindgen_debug_string = function(t, n) {
    const s = es(n), r = hn(s, T.__wbindgen_malloc, T.__wbindgen_realloc), i = Pe;
    at().setInt32(t + 4 * 1, i, true), at().setInt32(t + 4 * 0, r, true);
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(it(t, n));
  }, e.wbg.__wbindgen_memory = function() {
    return T.memory;
  }, e.wbg.__wbindgen_init_externref_table = function() {
    const t = T.__wbindgen_export_2, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, e;
}
function fc(e, t) {
  return T = e.exports, mi.__wbindgen_wasm_module = t, rt = null, At = null, It = null, T.__wbindgen_start(), T;
}
async function mi(e) {
  if (T !== void 0) return T;
  typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("/assets/photon_rs_bg-D290nosJ.wasm", import.meta.url));
  const t = cc();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: s } = await lc(await e, t);
  return fc(n, s);
}
let Wn = null;
function uc() {
  const e = gt(null);
  let t = null;
  const n = new Image(), s = gt(0), r = gt(0);
  function i(f) {
    e.value && (t = e.value.getContext("2d"), n.addEventListener("load", o), n.src = f);
  }
  function o() {
    !t || !e.value || (s.value = n.naturalWidth, r.value = n.naturalHeight, e.value.width = s.value, e.value.height = r.value, t.drawImage(n, 0, 0, s.value, r.value));
  }
  async function l(f) {
    if (!t || !e.value) return;
    Wn || (Wn = mi()), await Wn;
    const d = rc(e.value, t);
    f.length && nc(d, f), sc(e.value, t, d);
  }
  return { canvasElement: e, loadImage: i, drawOriginalImage: o, filterImage: l, originalWidth: s, originalHeight: r };
}
function ac(e, t) {
  const n = new FileReader();
  return e && n.readAsDataURL(e), t && n.addEventListener("load", t), n;
}
const dc = { class: "my-8" }, hc = { class: "flex justify-center" }, pc = ["width", "height"], gc = { class: "text-white text-xl mt-4 w-[90%] text-center mx-auto" }, _c = { class: "flex justify-center gap-4" }, bc = ["onClick"], mc = { class: "flex" }, wc = /* @__PURE__ */ bs({ __name: "AppEditor", setup(e) {
  const t = ["oceanic", "vintage", "rosetint"], n = vs(), { canvasElement: s, loadImage: r, drawOriginalImage: i, filterImage: o, originalWidth: l, originalHeight: f } = uc(), d = ac(n.file, () => {
    if (!d.result) return;
    const p = d.result.toString();
    r(p);
  });
  n.$subscribe((p, w) => {
    i(), w.filter ? o(w.filter) : i();
  });
  function a() {
    s.value && s.value.toBlob((p) => {
      var _a, _b;
      if (!p) return;
      const w = URL.createObjectURL(p), v = document.createElement("a");
      v.href = w, v.download = ((_b = (_a = n.file) == null ? void 0 : _a.name) == null ? void 0 : _b.replace(/\.[^/.]+$/, "")) + "-filtered.jpg" || "filtered-image.jpg", v.click(), URL.revokeObjectURL(w);
    }, "image/jpeg", 0.9);
  }
  return (p, w) => (bt(), an("div", dc, [ae("div", hc, [ae("canvas", { ref_key: "canvasElement", ref: s, width: ue(l), height: ue(f), class: "rounded-lg shadow-2xl", style: { width: "90%", height: "auto", border: "1px solid #ccc" } }, null, 8, pc)]), ae("div", gc, [ae("div", _c, [(bt(), an(Ae, null, Po(t, (v, P) => ae("button", { key: P, class: mn([{ "bg-pink-600 rounded-lg": ue(n).filter !== v, "bg-green-600 rounded-lg": ue(n).filter === v }, "md:text-lg text-sm py-2 w-full hover:cursor-pointer transition duration-300"]), type: "button", onClick: (F) => ue(n).filter = ue(n).filter === v ? "" : v }, Kn(v), 11, bc)), 64))]), ae("div", mc, [ae("button", { class: "bg-blue-400 md:text-lg text-sm p-2 mt-4 mr-1 w-full rounded-lg hover:cursor-pointer", type: "button", onClick: w[0] || (w[0] = (v) => {
    ue(n).file = null, ue(n).filter = "";
  }) }, " Upload New Image "), ae("button", { class: "bg-indigo-700 md:text-lg text-sm p-2 mt-4 ml-1 block w-full rounded-lg text-center hover:cursor-pointer", type: "button", onClick: a }, " Download " + Kn(ue(n).file ? ue(n).file.name.replace(/\.[^/.]+$/, "") + "-filtered.jpg" : "filtered-image.jpg"), 1)])])]));
} }), yc = /* @__PURE__ */ bs({ __name: "AppUpload", setup(e) {
  const t = vs(), n = gt(null);
  function s() {
    var _a;
    (_a = n.value) == null ? void 0 : _a.click();
  }
  function r(i) {
    const o = i.target;
    o.files && o.files.length > 0 && (t.file = o.files[0]);
  }
  return (i, o) => (bt(), an("div", { class: "text-center my-8 py-32 text-slate-700 italic rounded border-4 border-double border-slate-700/25", onDrag: o[0] || (o[0] = nt(() => {
  }, ["prevent", "stop"])), onDragstart: o[1] || (o[1] = nt(() => {
  }, ["prevent", "stop"])), onDragend: o[2] || (o[2] = nt(() => {
  }, ["prevent", "stop"])), onDragover: o[3] || (o[3] = nt(() => {
  }, ["prevent", "stop"])), onDragenter: o[4] || (o[4] = nt(() => {
  }, ["prevent", "stop"])), onDragleave: o[5] || (o[5] = nt(() => {
  }, ["prevent", "stop"])), onDrop: o[6] || (o[6] = nt((...l) => ue(t).upload && ue(t).upload(...l), ["prevent", "stop"])), onClick: s }, [o[7] || (o[7] = li(" Drag and drop image")), o[8] || (o[8] = ae("br", null, null, -1)), o[9] || (o[9] = ae("span", { class: "block mt-2 text-sm text-slate-500" }, "or click to select from device", -1)), ae("input", { ref_key: "fileInput", ref: n, type: "file", accept: "image/*", class: "hidden", onChange: r }, null, 544)], 32));
} }), xc = { class: "font-['Quicksand'] lg:w-[50%] bg-white p-8 shadow-2xl rounded left-0 right-0 m-4" }, vc = /* @__PURE__ */ bs({ __name: "App", setup(e) {
  const t = vs();
  return (n, s) => {
    const r = yc, i = wc;
    return bt(), an("div", xc, [s[0] || (s[0] = ae("h1", { class: "text-center text-3xl text-indigo-700" }, "Vue Filters", -1)), ue(t).file ? (bt(), Us(i, { key: 1 })) : (bt(), Us(r, { key: 0 }))]);
  };
} }), wi = zl(vc);
wi.use(kl());
wi.mount("#app");
