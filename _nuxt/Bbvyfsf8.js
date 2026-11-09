import{Vt as e,kt as t,r as n}from"./O1SVVnHy.js";import{C as r,Et as i,G as a,H as o,I as s,J as c,K as l,O as u,P as d,Tt as f,_ as p,c as m,ct as h,d as g,f as _,g as v,h as y,it as b,j as x,l as S,lt as C,q as w,r as T,rt as E,u as D,v as O,wt as k,y as A,z as j}from"./BkCpsaxO.js";import{$ as M,$t as N,At as P,B as F,Bt as I,Ct as L,Dt as R,E as ee,Et as te,Ft as z,G as ne,Gt as B,H as re,Ht as V,I as H,It as ie,J as ae,Jt as U,K as W,Kt as oe,L as se,Lt as ce,Mt as le,Nt as ue,Ot as G,Pt as de,Q as K,Qt as fe,R as pe,Rt as me,St as q,Tt as he,U as J,Ut as ge,V as _e,Vt as ve,W as ye,Wt as be,X as xe,Xt as Se,Y as Ce,Yt as Y,Z as we,Zt as Te,_ as Ee,_t as De,a as Oe,an as ke,at as Ae,bt as je,cn as Me,ct as Ne,d as Pe,dt as Fe,en as Ie,et as Le,f as Re,fn as ze,ft as Be,g as Ve,gn as He,gt as Ue,hn as We,ht as Ge,i as Ke,in as qe,it as Je,jt as Ye,kt as Xe,ln as Ze,lt as Qe,m as $e,mn as et,mt as tt,n as nt,nn as rt,nt as it,o as at,on as ot,ot as st,p as ct,pn as lt,pt as ut,q as dt,qt as ft,rn as pt,rt as mt,s as ht,sn as gt,st as _t,tn as vt,tt as yt,u as bt,un as xt,ut as St,v as Ct,vt as wt,wt as Tt,xt as Et,yt as Dt,z as Ot,zt as kt}from"./CeRC1V7Q.js";import{c as At,i as jt,n as Mt,o as Nt,r as Pt,t as Ft}from"./DNDwzQ6k.js";import{C as It,M as Lt,N as Rt,S as zt,_ as Bt,b as Vt,d as Ht,f as Ut,g as Wt,h as Gt,l as Kt,m as qt,o as Jt,p as Yt,t as Xt,u as Zt,v as Qt,w as $t,x as en,y as tn}from"#entry";import{n as nn,r as rn,t as an}from"./DQQoFbHY.js";import{n as on,o as sn,r as cn,t as ln}from"./5NfomtDp.js?v=behin2";var un=`attached`,dn=1e3,fn=1001,pn=1002,mn=1003,hn=1004,gn=1005,_n=1006,vn=1007,yn=1008,bn=1009,xn=1010,Sn=1011,Cn=1012,wn=1013,Tn=1014,En=1015,Dn=1016,On=1017,kn=1018,An=1020,jn=35902,Mn=35899,Nn=1021,Pn=1022,Fn=1023,In=1026,Ln=1027,Rn=1028,zn=1029,Bn=1030,Vn=1031,Hn=1033,Un=33776,Wn=33777,Gn=33778,Kn=33779,qn=35840,Jn=35841,Yn=35842,Xn=35843,Zn=36196,Qn=37492,$n=37496,er=37488,tr=37489,nr=37490,rr=37491,ir=37808,ar=37809,or=37810,sr=37811,cr=37812,lr=37813,ur=37814,dr=37815,fr=37816,pr=37817,mr=37818,hr=37819,gr=37820,_r=37821,vr=36492,yr=36494,br=36495,xr=36283,Sr=36284,Cr=36285,wr=36286,Tr=2300,Er=2301,Dr=2302,Or=2303,kr=2400,Ar=2401,jr=2402,Mr=2500,Nr=3200,Pr=`srgb`,Fr=`srgb-linear`,Ir=`linear`,Lr=`srgb`,Rr=7680,zr=35044,Br=35048,Vr=2e3;function Hr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ur(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Gr(){let e=Wr(`canvas`);return e.style.display=`block`,e}var Kr={};function qr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Jr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function X(...e){e=Jr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Yr(...e){e=Jr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xr(...e){let t=e.join(` `);t in Kr||(Kr[t]=!0,X(...e))}function Zr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qr={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},$r=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ei=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ti=1234567,ni=Math.PI/180,ri=180/Math.PI;function ii(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ei[e&255]+ei[e>>8&255]+ei[e>>16&255]+ei[e>>24&255]+`-`+ei[t&255]+ei[t>>8&255]+`-`+ei[t>>16&15|64]+ei[t>>24&255]+`-`+ei[n&63|128]+ei[n>>8&255]+`-`+ei[n>>16&255]+ei[n>>24&255]+ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]).toLowerCase()}function ai(e,t,n){return Math.max(t,Math.min(n,e))}function oi(e,t){return(e%t+t)%t}function si(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ci(e,t,n){return e===t?0:(n-e)/(t-e)}function li(e,t,n){return(1-n)*e+n*t}function ui(e,t,n,r){return li(e,t,1-Math.exp(-n*r))}function di(e,t=1){return t-Math.abs(oi(e,t*2)-t)}function fi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function pi(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function mi(e,t){return e+Math.floor(Math.random()*(t-e+1))}function hi(e,t){return e+Math.random()*(t-e)}function gi(e){return e*(.5-Math.random())}function _i(e){e!==void 0&&(ti=e);let t=ti+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vi(e){return e*ni}function yi(e){return e*ri}function bi(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function xi(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Si(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ci(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:X(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function wi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ei={DEG2RAD:ni,RAD2DEG:ri,generateUUID:ii,clamp:ai,euclideanModulo:oi,mapLinear:si,inverseLerp:ci,lerp:li,damp:ui,pingpong:di,smoothstep:fi,smootherstep:pi,randInt:mi,randFloat:hi,randFloatSpread:gi,seededRandom:_i,degToRad:vi,radToDeg:yi,isPowerOfTwo:bi,ceilPowerOfTwo:xi,floorPowerOfTwo:Si,setQuaternionFromProperEuler:Ci,normalize:Ti,denormalize:wi},Z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ai(this.x,e.x,t.x),this.y=ai(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ai(this.x,e,t),this.y=ai(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ai(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Di=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:X(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ai(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ki.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ki.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ai(this.x,e.x,t.x),this.y=ai(this.y,e.y,t.y),this.z=ai(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ai(this.x,e,t),this.y=ai(this.y,e,t),this.z=ai(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ai(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oi.copy(this).projectOnVector(e),this.sub(Oi)}reflect(e){return this.sub(Oi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oi=new Q,ki=new Di,Ai=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xr(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ji.makeScale(e,t)),this}rotate(e){return Xr(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ji.makeRotation(-e)),this}translate(e,t){return Xr(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ji.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ji=new Ai,Mi=new Ai().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ni=new Ai().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pi(){let e={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ii(e.r),e.g=Ii(e.g),e.b=Ii(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Li(e.r),e.g=Li(e.g),e.b=Li(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ir:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xr(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xr(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fr]:{primaries:t,whitePoint:r,transfer:Ir,toXYZ:Mi,fromXYZ:Ni,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pr},outputColorSpaceConfig:{drawingBufferColorSpace:Pr}},[Pr]:{primaries:t,whitePoint:r,transfer:Lr,toXYZ:Mi,fromXYZ:Ni,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pr}}}),e}var Fi=Pi();function Ii(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Li(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ri,zi=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ri===void 0&&(Ri=Wr(`canvas`)),Ri.width=e.width,Ri.height=e.height;let t=Ri.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Wr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ii(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ii(t[e]/255)*255):t[e]=Ii(t[e]);return{data:t,width:e.width,height:e.height}}return X(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bi=0,Vi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bi++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Hi(r[t].image)):e.push(Hi(r[t]))}else e=Hi(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Hi(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(X(`Texture: Unable to serialize Texture.`),{})}var Ui=0,Wi=new Q,Gi=class e extends $r{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=fn,i=fn,a=_n,o=yn,s=Fn,c=bn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ui++}),this.uuid=ii(),this.name=``,this.source=new Vi(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ai,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wi).x}get height(){return this.source.getSize(Wi).y}get depth(){return this.source.getSize(Wi).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){X(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){X(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x-=Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case pn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y-=Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case pn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gi.DEFAULT_IMAGE=null,Gi.DEFAULT_MAPPING=300,Gi.DEFAULT_ANISOTROPY=1;var Ki=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ai(this.x,e.x,t.x),this.y=ai(this.y,e.y,t.y),this.z=ai(this.z,e.z,t.z),this.w=ai(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ai(this.x,e,t),this.y=ai(this.y,e,t),this.z=ai(this.z,e,t),this.w=ai(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ai(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qi=class extends $r{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ki(0,0,e,t),this.scissorTest=!1,this.viewport=new Ki(0,0,e,t),this.textures=[];let r=new Gi({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ji=class extends qi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yi=class extends Gi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xi=class extends Gi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Zi=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),i=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ea,e,ta)}lookAt(e,t,n){let r=this.elements;return ia.subVectors(e,t),ia.lengthSq()===0&&(ia.z=1),ia.normalize(),na.crossVectors(n,ia),na.lengthSq()===0&&(Math.abs(n.z)===1?ia.x+=1e-4:ia.z+=1e-4,ia.normalize(),na.crossVectors(n,ia)),na.normalize(),ra.crossVectors(ia,na),r[0]=na.x,r[4]=ra.x,r[8]=ia.x,r[1]=na.y,r[5]=ra.y,r[9]=ia.y,r[2]=na.z,r[6]=ra.z,r[10]=ia.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qi.set(r[0],r[1],r[2]).length(),o=Qi.set(r[4],r[5],r[6]).length(),s=Qi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$i.copy(this);let c=1/a,l=1/o,u=1/s;return $i.elements[0]*=c,$i.elements[1]*=c,$i.elements[2]*=c,$i.elements[4]*=l,$i.elements[5]*=l,$i.elements[6]*=l,$i.elements[8]*=u,$i.elements[9]*=u,$i.elements[10]*=u,t.setFromRotationMatrix($i),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Vr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Vr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new Q,$i=new Zi,ea=new Q(0,0,0),ta=new Q(1,1,1),na=new Q,ra=new Q,ia=new Q,aa=new Zi,oa=new Di,sa=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ai(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ai(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ai(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ai(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ai(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:X(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oa.setFromEuler(this),this.setFromQuaternion(oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sa.DEFAULT_ORDER=`XYZ`;var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},la=0,ua=new Q,da=new Di,fa=new Zi,pa=new Q,ma=new Q,ha=new Q,ga=new Di,_a=new Q(1,0,0),va=new Q(0,1,0),ya=new Q(0,0,1),ba={type:`added`},xa={type:`removed`},Sa={type:`childadded`,child:null},Ca={type:`childremoved`,child:null},wa=class e extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:la++}),this.uuid=ii(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Q,n=new sa,r=new Di,i=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zi},normalMatrix:{value:new Ai}}),this.matrix=new Zi,this.matrixWorld=new Zi,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(ya,e)}translateOnAxis(e,t){return ua.copy(e).applyQuaternion(this.quaternion),this.position.add(ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(ma,pa,this.up):fa.lookAt(pa,ma,this.up),this.quaternion.setFromRotationMatrix(fa),r&&(fa.extractRotation(r.matrixWorld),da.setFromRotationMatrix(fa),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Yr(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ba),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null):Yr(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xa),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ba),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,ha),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,ga,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wa.DEFAULT_UP=new Q(0,1,0),wa.DEFAULT_MATRIX_AUTO_UPDATE=!0,wa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ta=class extends wa{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ea={type:`رشد`},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ea)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ta;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function ja(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ma=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fi.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Fi.workingColorSpace){return this.r=e,this.g=t,this.b=n,Fi.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Fi.workingColorSpace){if(e=oi(e,1),t=ai(t,0,1),n=ai(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ja(i,r,e+1/3),this.g=ja(i,r,e),this.b=ja(i,r,e-1/3)}return Fi.colorSpaceToWorking(this,r),this}setStyle(e,t=Pr){function n(t){t!==void 0&&parseFloat(t)<1&&X(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:X(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);X(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pr){let n=Oa[e.toLowerCase()];return n===void 0?X(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pr){return Fi.workingToColorSpace(Na.copy(this),e),Math.round(ai(Na.r*255,0,255))*65536+Math.round(ai(Na.g*255,0,255))*256+Math.round(ai(Na.b*255,0,255))}getHexString(e=Pr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fi.workingColorSpace){Fi.workingToColorSpace(Na.copy(this),t);let n=Na.r,r=Na.g,i=Na.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Fi.workingColorSpace){return Fi.workingToColorSpace(Na.copy(this),t),e.r=Na.r,e.g=Na.g,e.b=Na.b,e}getStyle(e=Pr){Fi.workingToColorSpace(Na.copy(this),e);let t=Na.r,n=Na.g,r=Na.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+t,ka.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ka),e.getHSL(Aa);let n=li(ka.h,Aa.h,t),r=li(ka.s,Aa.s,t),i=li(ka.l,Aa.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Na=new Ma;Ma.NAMES=Oa;var Pa=class extends wa{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fa=new Q,Ia=new Q,La=new Q,Ra=new Q,za=new Q,Ba=new Q,Va=new Q,Ha=new Q,Ua=new Q,Wa=new Q,Ga=new Ki,Ka=new Ki,qa=new Ki,Ja=class e{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fa.subVectors(e,t),r.cross(Fa);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fa.subVectors(r,t),Ia.subVectors(n,t),La.subVectors(e,t);let a=Fa.dot(Fa),o=Fa.dot(Ia),s=Fa.dot(La),c=Ia.dot(Ia),l=Ia.dot(La),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ra)!==null&&Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ra)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ra.x),s.addScaledVector(a,Ra.y),s.addScaledVector(o,Ra.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ga.setScalar(0),Ka.setScalar(0),qa.setScalar(0),Ga.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ga,i.x),a.addScaledVector(Ka,i.y),a.addScaledVector(qa,i.z),a}static isFrontFacing(e,t,n,r){return Fa.subVectors(n,t),Ia.subVectors(e,t),Fa.cross(Ia).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fa.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Fa.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;za.subVectors(r,n),Ba.subVectors(i,n),Ha.subVectors(e,n);let s=za.dot(Ha),c=Ba.dot(Ha);if(s<=0&&c<=0)return t.copy(n);Ua.subVectors(e,r);let l=za.dot(Ua),u=Ba.dot(Ua);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(za,a);Wa.subVectors(e,i);let f=za.dot(Wa),p=Ba.dot(Wa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ba,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Va.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Va,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(za,a).addScaledVector(Ba,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ya=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Za.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Za.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Za.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Za):Za.fromBufferAttribute(r,t),Za.applyMatrix4(e.matrixWorld),this.expandByPoint(Za);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Za),Za.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),oo.subVectors(this.max,ao),$a.subVectors(e.a,ao),eo.subVectors(e.b,ao),to.subVectors(e.c,ao),no.subVectors(eo,$a),ro.subVectors(to,eo),io.subVectors($a,to);let t=[0,-no.z,no.y,0,-ro.z,ro.y,0,-io.z,io.y,no.z,0,-no.x,ro.z,0,-ro.x,io.z,0,-io.x,-no.y,no.x,0,-ro.y,ro.x,0,-io.y,io.x,0];return!lo(t,$a,eo,to,oo)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,$a,eo,to,oo))?!1:(so.crossVectors(no,ro),t=[so.x,so.y,so.z],lo(t,$a,eo,to,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Za).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Za).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Za=new Q,Qa=new Ya,$a=new Q,eo=new Q,to=new Q,no=new Q,ro=new Q,io=new Q,ao=new Q,oo=new Q,so=new Q,co=new Q;function lo(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){co.fromArray(e,a);let o=i.x*Math.abs(co.x)+i.y*Math.abs(co.y)+i.z*Math.abs(co.z),s=t.dot(co),c=n.dot(co),l=r.dot(co);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var uo=new Q,fo=new Z,po=0,mo=class extends $r{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:po++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=zr,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXYZ(t,uo.x,uo.y,uo.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix4(e),this.setXYZ(t,uo.x,uo.y,uo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyNormalMatrix(e),this.setXYZ(t,uo.x,uo.y,uo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.transformDirection(e),this.setXYZ(t,uo.x,uo.y,uo.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ti(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array),r=Ti(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array),r=Ti(r,this.array),i=Ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ho=class extends mo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},go=class extends mo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_o=class extends mo{constructor(e,t,n){super(new Float32Array(e),t,n)}},vo=new Ya,yo=new Q,bo=new Q,xo=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vo.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(yo,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(bo)),this.expandByPoint(yo.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},So=0,Co=new Zi,wo=new wa,To=new Q,Eo=new Ya,Do=new Ya,Oo=new Q,ko=class e extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:So++}),this.uuid=ii(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Hr(e)?go:ho)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ai().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Co.makeRotationFromQuaternion(e),this.applyMatrix4(Co),this}rotateX(e){return Co.makeRotationX(e),this.applyMatrix4(Co),this}rotateY(e){return Co.makeRotationY(e),this.applyMatrix4(Co),this}rotateZ(e){return Co.makeRotationZ(e),this.applyMatrix4(Co),this}translate(e,t,n){return Co.makeTranslation(e,t,n),this.applyMatrix4(Co),this}scale(e,t,n){return Co.makeScale(e,t,n),this.applyMatrix4(Co),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new _o(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&X(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yr(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Eo.setFromBufferAttribute(n),this.morphTargetsRelative?(Oo.addVectors(this.boundingBox.min,Eo.min),this.boundingBox.expandByPoint(Oo),Oo.addVectors(this.boundingBox.max,Eo.max),this.boundingBox.expandByPoint(Oo)):(this.boundingBox.expandByPoint(Eo.min),this.boundingBox.expandByPoint(Eo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yr(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yr(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Q,1/0);return}if(e){let n=this.boundingSphere.center;if(Eo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Do.setFromBufferAttribute(n),this.morphTargetsRelative?(Oo.addVectors(Eo.min,Do.min),Eo.expandByPoint(Oo),Oo.addVectors(Eo.max,Do.max),Eo.expandByPoint(Oo)):(Eo.expandByPoint(Do.min),Eo.expandByPoint(Do.max))}Eo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Oo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Oo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Oo.fromBufferAttribute(a,t),o&&(To.fromBufferAttribute(e,t),Oo.add(To)),r=Math.max(r,n.distanceToSquared(Oo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Yr(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Yr(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Q,s[e]=new Q;let c=new Q,l=new Q,u=new Q,d=new Z,f=new Z,p=new Z,m=new Q,h=new Q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Q,y=new Q,b=new Q,x=new Q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Q,i=new Q,a=new Q,o=new Q,s=new Q,c=new Q,l=new Q,u=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Oo.fromBufferAttribute(e,t),Oo.normalize(),e.setXYZ(t,Oo.x,Oo.y,Oo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mo(a,r,i)}if(this.index===null)return X(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=zr,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jo=new Q,Mo=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix4(e),this.setXYZ(t,jo.x,jo.y,jo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyNormalMatrix(e),this.setXYZ(t,jo.x,jo.y,jo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.transformDirection(e),this.setXYZ(t,jo.x,jo.y,jo.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ti(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ti(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ti(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ti(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ti(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array),r=Ti(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ti(t,this.array),n=Ti(n,this.array),r=Ti(r,this.array),i=Ti(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){qr(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new mo(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qr(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},No=new Q,Po=new Q,Fo=new Ai,Io=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=No.subVectors(n,t).cross(Po.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(No),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fo.getNormalMatrix(e),r=this.coplanarPoint(No).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lo=0,Ro=class extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lo++}),this.uuid=ii(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ma(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){X(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){X(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ma().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Io().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zo=new Q,Bo=new Q,Vo=new Q,Ho=new Q,Uo=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zo)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zo.copy(this.origin).addScaledVector(this.direction,t),zo.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bo.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Ho.copy(this.origin).sub(Bo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vo),o=Ho.dot(this.direction),s=-Ho.dot(Vo),c=Ho.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bo).addScaledVector(Vo,d),f}intersectSphere(e,t){if(e.radius<0)return null;zo.subVectors(e.center,this.origin);let n=zo.dot(this.direction),r=zo.dot(zo)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zo)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,z=j-P*N,ne=M-F*N,B=z*te-ne*ee,re=L*ne-R*z,V=ee*R-te*L;if(r){if(B<0||re<0||V<0)return null}else if((B<0||re<0||V<0)&&(B>0||re>0||V>0))return null;let H=B+re+V;if(H===0)return null;let ie=I*(B*D+re*A+V*N);return(H>0?ie<0:ie>0)?null:this.at(ie/H,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wo=class extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Ma(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Go=new Zi,Ko=new Uo,qo=new xo,Jo=new Q,Yo=new Q,Xo=new Q,Zo=new Q,Qo=new Q,$o=new Q,es=new Q,ts=new Q,ns=class extends wa{constructor(e=new ko,t=new Wo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$o.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qo.fromBufferAttribute(s,e),a?$o.addScaledVector(Qo,r):$o.addScaledVector(Qo.sub(t),r))}t.add($o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),Ko.copy(e.ray).recast(e.near),!(qo.containsPoint(Ko.origin)===!1&&(Ko.intersectSphere(qo,Jo)===null||Ko.origin.distanceToSquared(Jo)>(e.far-e.near)**2))&&(Go.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(Go),(n.boundingBox===null||Ko.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ko)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=is(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=is(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=is(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=is(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function rs(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ts.copy(s),ts.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ts);return l<n.near||l>n.far?null:{distance:l,point:ts.clone(),object:e}}function is(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yo),e.getVertexPosition(c,Xo),e.getVertexPosition(l,Zo);let u=rs(e,t,n,r,Yo,Xo,Zo,es);if(u){let e=new Q;Ja.getBarycoord(es,Yo,Xo,Zo,e),i&&(u.uv=Ja.getInterpolatedAttribute(i,s,c,l,e,new Z)),a&&(u.uv1=Ja.getInterpolatedAttribute(a,s,c,l,e,new Z)),o&&(u.normal=Ja.getInterpolatedAttribute(o,s,c,l,e,new Q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Q,materialIndex:0};Ja.getNormal(Yo,Xo,Zo,t.normal),u.face=t,u.barycoord=e}return u}var as=new Ki,os=new Ki,ss=new Ki,cs=new Ki,ls=new Zi,us=new Q,ds=new xo,fs=new Zi,ps=new Uo,ms=class extends ns{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=un,this.bindMatrix=new Zi,this.bindMatrixInverse=new Zi,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ya),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,us),this.boundingBox.expandByPoint(us)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xo),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,us),this.boundingSphere.expandByPoint(us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(r),e.ray.intersectsSphere(ds)!==!1&&(fs.copy(r).invert(),ps.copy(e.ray).applyMatrix4(fs),(this.boundingBox===null||ps.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ps)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ki,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():X(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;os.fromBufferAttribute(r.attributes.skinIndex,e),ss.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(as.copy(t),t.set(0,0,0,0)):(as.set(...t,1),t.set(0,0,0)),as.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ss.getComponent(e);if(r!==0){let i=os.getComponent(e);ls.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(cs.copy(as).applyMatrix4(ls),r)}}return t.isVector4&&(t.w=as.w),t.applyMatrix4(this.bindMatrixInverse)}},hs=class extends wa{constructor(){super(),this.isBone=!0,this.type=`Bone`}},gs=class extends Gi{constructor(e=null,t=1,n=1,r,i,a,o,s,c=mn,l=mn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_s=new Zi,vs=new Zi,ys=class e{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){X(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Zi)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Zi;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:vs;_s.multiplyMatrices(i,t[r]),_s.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gs(t,e,e,Fn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(X(`Skeleton: No bone found with UUID:`,r),i=new hs),this.bones.push(i),this.boneInverses.push(new Zi().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},bs=class extends mo{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Zi,Ss=new Zi,Cs=[],ws=new Ya,Ts=new Zi,Es=new ns,Ds=new xo,Os=class extends ns{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ts)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ya),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),ws.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(ws)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),Ds.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,xs),Ss.multiplyMatrices(n,xs),Es.matrixWorld=Ss,Es.raycast(e,Cs);for(let e=0,n=Cs.length;e<n;e++){let n=Cs[e];n.instanceId=i,n.object=this,t.push(n)}Cs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gs(new Float32Array(r*this.count),r,this.count,Rn,En));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new xo,As=new Z(.5,.5),js=new Q,Ms=class{constructor(e=new Io,t=new Io,n=new Io,r=new Io,i=new Io,a=new Io){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476+As.distanceTo(e.center),ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ns=class extends Ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Ma(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ps=new Q,Fs=new Q,Is=new Zi,Ls=new Uo,Rs=new xo,zs=new Q,Bs=new Q,Vs=class extends wa{constructor(e=new ko,t=new Ns){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ps.fromBufferAttribute(t,e-1),Fs.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ps.distanceTo(Fs);e.setAttribute(`lineDistance`,new _o(n,1))}else X(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Rs.radius+=i,e.ray.intersectsSphere(Rs)===!1)return;Is.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Is);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Hs(this,e,Ls,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Hs(this,e,Ls,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Hs(this,e,Ls,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Hs(this,e,Ls,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Hs(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ps.fromBufferAttribute(s,i),Fs.fromBufferAttribute(s,a),n.distanceSqToSegment(Ps,Fs,zs,Bs)>r)return;zs.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(zs);if(!(c<t.near||c>t.far))return{distance:c,point:Bs.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Us=new Q,Ws=new Q,Gs=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Us.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Us.distanceTo(Ws);e.setAttribute(`lineDistance`,new _o(n,1))}else X(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ks=class extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},qs=class extends Ro{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Ma(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js=new Zi,Ys=new Uo,Xs=new xo,Zs=new Q,Qs=class extends wa{constructor(e=new ko,t=new qs){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=i,e.ray.intersectsSphere(Xs)===!1)return;Js.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Js);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Zs.fromBufferAttribute(l,n),$s(Zs,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Zs.fromBufferAttribute(l,a),$s(Zs,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function $s(e,t,n,r,i,a,o){let s=Ys.distanceSqToPoint(e);if(s<n){let n=new Q;Ys.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ec=class extends Gi{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tc=class extends Gi{constructor(e,t,n=Tn,r,i,a,o=mn,s=mn,c,l=In,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nc=class extends tc{constructor(e,t=Tn,n=301,r,i,a=mn,o=mn,s,c=In){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},rc=class extends Gi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ic=class e extends ko{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new _o(c,3)),this.setAttribute(`normal`,new _o(l,3)),this.setAttribute(`uv`,new _o(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ac=class e extends ko{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new _o(p,3)),this.setAttribute(`normal`,new _o(m,3)),this.setAttribute(`uv`,new _o(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function oc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(cc(i))i.isRenderTargetTexture?(X(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(cc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function sc(e){let t={};for(let n=0;n<e.length;n++){let r=oc(e[n]);for(let e in r)t[e]=r[e]}return t}function cc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function lc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function uc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fi.workingColorSpace}var dc={clone:oc,merge:sc},fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mc=class extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fc,this.fragmentShader=pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oc(e.uniforms),this.uniformsGroups=lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Ma().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ki().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ai().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Zi().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hc=class extends mc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},gc=class extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Ma(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ma(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_c=class extends gc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ai(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ma(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ma(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ma(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},vc=class extends Ro{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Ma(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ma(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Nr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Sc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Cc(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function wc(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Tc(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ec=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Dc=class extends Ec{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ar:i=e,o=2*t-n;break;case jr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ar:a=e,s=2*n-t;break;case jr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oc=class extends Ec{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},kc=class extends Ec{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends Ec{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Nc(n,t,g,y,r);i[p]=jc(x,o,_,b,m)}return i}};function jc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Mc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Nc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=jc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Mc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Pc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Sc(e.settings)&&(n.settings={inTangents:xc(e.settings.inTangents,Array),outTangents:xc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case Dr:t=this.InterpolantFactoryMethodSmooth;break;case Or:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return X(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return Dr;case this.InterpolantFactoryMethodBezier:return Or}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Sc(this.settings)&&(Fc(this.settings.inTangents,e),Fc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Yr(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Yr(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Yr(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Yr(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ur(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Yr(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Dr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Pc.prototype.ValueTypeName=``,Pc.prototype.TimeBufferType=Float32Array,Pc.prototype.ValueBufferType=Float32Array,Pc.prototype.DefaultInterpolation=Er;var Ic=class extends Pc{constructor(e,t,n){super(e,t,n)}};Ic.prototype.ValueTypeName=`bool`,Ic.prototype.ValueBufferType=Array,Ic.prototype.DefaultInterpolation=Tr,Ic.prototype.InterpolantFactoryMethodLinear=void 0,Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Pc{constructor(e,t,n,r){super(e,t,n,r)}};Lc.prototype.ValueTypeName=`color`;var Rc=class extends Pc{constructor(e,t,n,r){super(e,t,n,r)}};Rc.prototype.ValueTypeName=`number`;var zc=class extends Ec{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Di.slerpFlat(i,0,a,c-o,a,c,s);return i}},Bc=class extends Pc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};Bc.prototype.ValueTypeName=`quaternion`,Bc.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends Pc{constructor(e,t,n){super(e,t,n)}};Vc.prototype.ValueTypeName=`string`,Vc.prototype.ValueBufferType=Array,Vc.prototype.DefaultInterpolation=Tr,Vc.prototype.InterpolantFactoryMethodLinear=void 0,Vc.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Pc{constructor(e,t,n,r){super(e,t,n,r)}};Hc.prototype.ValueTypeName=`vector`;var Uc=class{constructor(e=``,t=-1,n=[],r=Mr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Gc(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Pc.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Cc(o);o=wc(o,1,c),s=wc(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Rc(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Wc(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Rc;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Hc;case`color`:return Lc;case`quaternion`:return Bc;case`bool`:case`boolean`:return Ic;case`string`:return Vc}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Gc(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Wc(e.type);if(e.times===void 0){let t=[],n=[];Tc(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),Sc(e.settings)&&(n.settings={inTangents:xc(e.settings.inTangents,Float32Array),outTangents:xc(e.settings.outTangents,Float32Array)}),n}var Kc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(qc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!qc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function qc(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Jc=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Yc=class{constructor(e){this.manager=e===void 0?Jc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yc.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Xc={},Zc=class extends Error{constructor(e,t){super(e),this.response=t}},Qc=class extends Yc{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Kc.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Xc[e]!==void 0){Xc[e].push({onLoad:t,onProgress:n,onError:r});return}Xc[e]=[],Xc[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&X(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Xc[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Zc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Kc.add(`file:${e}`,t);let n=Xc[e];delete Xc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Xc[e];if(n===void 0)throw this.manager.itemError(e),t;delete Xc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},$c=new WeakMap,el=class extends Yc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Kc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=$c.get(a);e===void 0&&(e=[],$c.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Wr(`img`);function s(){l(),t&&t(this);let n=$c.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}$c.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Kc.remove(`image:${e}`);let n=$c.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}$c.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kc.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},tl=class extends Yc{constructor(e){super(e)}load(e,t,n,r){let i=new Gi,a=new el(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},nl=class extends wa{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Ma(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},rl=new Zi,il=new Q,al=new Q,ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Zi,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Ki(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=new Q,cl=new Di,ll=new Q,ul=class extends wa{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Zi,this.projectionMatrix=new Zi,this.projectionMatrixInverse=new Zi,this.coordinateSystem=Vr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,cl,ll),ll.x===1&&ll.y===1&&ll.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,cl,ll.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sl,cl,ll),ll.x===1&&ll.y===1&&ll.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,cl,ll.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},dl=new Q,fl=new Z,pl=new Z,ml=class extends ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ri*2*Math.atan(Math.tan(ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dl.x,dl.y).multiplyScalar(-e/dl.z),dl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dl.x,dl.y).multiplyScalar(-e/dl.z)}getViewSize(e,t){return this.getViewBounds(e,fl,pl),t.subVectors(pl,fl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ni*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hl=class extends ol{constructor(){super(new ml(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ri*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},gl=class extends nl{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(wa.DEFAULT_UP),this.updateMatrix(),this.target=new wa,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new hl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_l=class extends ol{constructor(){super(new ml(90,1,.5,500)),this.isPointLightShadow=!0}},vl=class extends nl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yl=class extends ul{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bl=class extends ol{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wa.DEFAULT_UP),this.updateMatrix(),this.target=new wa,this.shadow=new bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Sl=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Cl=class extends ko{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},wl=new WeakMap,Tl=class extends Yc{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&X(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&X(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Kc.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{wl.has(a)===!0?(r&&r(wl.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Kc.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),wl.set(s,t),Kc.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Kc.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},El=-90,Dl=1,Ol=class extends wa{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ml(El,Dl,e,t);r.layers=this.layers,this.add(r);let i=new ml(El,Dl,e,t);i.layers=this.layers,this.add(i);let a=new ml(El,Dl,e,t);a.layers=this.layers,this.add(a);let o=new ml(El,Dl,e,t);o.layers=this.layers,this.add(o);let s=new ml(El,Dl,e,t);s.layers=this.layers,this.add(s);let c=new ml(El,Dl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},kl=class extends ml{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Al=`\\[\\]\\.:\\/`,jl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ml=`[^\\[\\]\\.:\\/]`,Nl=`[^`+Al.replace(`\\.`,``)+`]`,Pl=`((?:WC+[\\/:])*)`.replace(`WC`,Ml),Fl=`(WCOD+)?`.replace(`WCOD`,Nl),Il=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ml),Ll=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ml),Rl=RegExp(`^`+Pl+Fl+Il+Ll+`$`),zl=[`material`,`materials`,`bones`,`map`],Bl=class{constructor(e,t,n){let r=n||Vl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(jl,``)}static parseTrackName(e){let t=Rl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);zl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){X(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Yr(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Yr(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Yr(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Yr(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Yr(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Yr(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Yr(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Yr(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Yr(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Yr(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vl.Composite=Bl,Vl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Vl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Vl.prototype.GetterByBindingType=[Vl.prototype._getValue_direct,Vl.prototype._getValue_array,Vl.prototype._getValue_arrayElement,Vl.prototype._getValue_toArray],Vl.prototype.SetterByBindingTypeAndVersioning=[[Vl.prototype._setValue_direct,Vl.prototype._setValue_direct_setNeedsUpdate,Vl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vl.prototype._setValue_array,Vl.prototype._setValue_array_setNeedsUpdate,Vl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vl.prototype._setValue_arrayElement,Vl.prototype._setValue_arrayElement_setNeedsUpdate,Vl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vl.prototype._setValue_fromArray,Vl.prototype._setValue_fromArray_setNeedsUpdate,Vl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Hl(e,t,n,r){let i=Ul(r);switch(n){case Nn:return e*t;case Rn:return e*t/i.components*i.byteLength;case zn:return e*t/i.components*i.byteLength;case Bn:return e*t*2/i.components*i.byteLength;case Vn:return e*t*2/i.components*i.byteLength;case Pn:return e*t*3/i.components*i.byteLength;case Fn:return e*t*4/i.components*i.byteLength;case Hn:return e*t*4/i.components*i.byteLength;case Un:case Wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gn:case Kn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jn:case Xn:return Math.max(e,16)*Math.max(t,8)/4;case qn:case Yn:return Math.max(e,8)*Math.max(t,8)/2;case Zn:case Qn:case er:case tr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $n:case nr:case rr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ir:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ar:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case or:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case sr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case cr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case lr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ur:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case mr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _r:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vr:case yr:case br:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xr:case Sr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cr:case wr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ul(e){switch(e){case bn:case xn:return{byteLength:1,components:1};case Cn:case Sn:case Dn:return{byteLength:2,components:1};case On:case kn:return{byteLength:2,components:4};case Tn:case wn:case En:return{byteLength:4,components:1};case jn:case Mn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?X(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Wl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Gl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Kl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Ma(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ai},alphaMap:{value:null},alphaMapTransform:{value:new Ai},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ai}},envmap:{envMap:{value:null},envMapRotation:{value:new Ai},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ai}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ai}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ai},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ai},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ai},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ai}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ai}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ai}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ma(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Ma(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ai},alphaTest:{value:0},uvTransform:{value:new Ai}},sprite:{diffuse:{value:new Ma(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ai},alphaMap:{value:null},alphaMapTransform:{value:new Ai},alphaTest:{value:0}}},ql={basic:{uniforms:sc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Kl.meshbasic_vert,fragmentShader:Kl.meshbasic_frag},lambert:{uniforms:sc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Ma(0)},envMapIntensity:{value:1}}]),vertexShader:Kl.meshlambert_vert,fragmentShader:Kl.meshlambert_frag},phong:{uniforms:sc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Ma(0)},specular:{value:new Ma(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kl.meshphong_vert,fragmentShader:Kl.meshphong_frag},standard:{uniforms:sc([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Ma(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kl.meshphysical_vert,fragmentShader:Kl.meshphysical_frag},toon:{uniforms:sc([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Ma(0)}}]),vertexShader:Kl.meshtoon_vert,fragmentShader:Kl.meshtoon_frag},matcap:{uniforms:sc([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Kl.meshmatcap_vert,fragmentShader:Kl.meshmatcap_frag},points:{uniforms:sc([$.points,$.fog]),vertexShader:Kl.points_vert,fragmentShader:Kl.points_frag},dashed:{uniforms:sc([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kl.linedashed_vert,fragmentShader:Kl.linedashed_frag},depth:{uniforms:sc([$.common,$.displacementmap]),vertexShader:Kl.depth_vert,fragmentShader:Kl.depth_frag},normal:{uniforms:sc([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Kl.meshnormal_vert,fragmentShader:Kl.meshnormal_frag},sprite:{uniforms:sc([$.sprite,$.fog]),vertexShader:Kl.sprite_vert,fragmentShader:Kl.sprite_frag},background:{uniforms:{uvTransform:{value:new Ai},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kl.background_vert,fragmentShader:Kl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ai}},vertexShader:Kl.backgroundCube_vert,fragmentShader:Kl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kl.cube_vert,fragmentShader:Kl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kl.equirect_vert,fragmentShader:Kl.equirect_frag},distance:{uniforms:sc([$.common,$.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kl.distance_vert,fragmentShader:Kl.distance_frag},shadow:{uniforms:sc([$.lights,$.fog,{color:{value:new Ma(0)},opacity:{value:1}}]),vertexShader:Kl.shadow_vert,fragmentShader:Kl.shadow_frag}};ql.physical={uniforms:sc([ql.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ai},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ai},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ai},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ai},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ai},sheen:{value:0},sheenColor:{value:new Ma(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ai},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ai},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ai},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ai},attenuationDistance:{value:0},attenuationColor:{value:new Ma(0)},specularColor:{value:new Ma(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ai},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ai},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ai}}]),vertexShader:Kl.meshphysical_vert,fragmentShader:Kl.meshphysical_frag};var Jl={r:0,b:0,g:0},Yl=new Zi,Xl=new Ai;Xl.set(-1,0,0,0,1,0,0,0,1);function Zl(e,t,n,r,i,a){let o=new Ma(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ns(new ic(1,1,1),new mc({name:`BackgroundCubeMaterial`,uniforms:oc(ql.backgroundCube.uniforms),vertexShader:ql.backgroundCube.vertexShader,fragmentShader:ql.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xl),l.material.toneMapped=Fi.getTransfer(i.colorSpace)!==Lr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ns(new ac(2,2),new mc({name:`BackgroundMaterial`,uniforms:oc(ql.background.uniforms),vertexShader:ql.background.vertexShader,fragmentShader:ql.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Fi.getTransfer(i.colorSpace)!==Lr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Jl,uc(e)),n.buffers.color.setClear(Jl.r,Jl.g,Jl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ql(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function $l(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function eu(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(X(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&X(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function tu(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Io,s=new Ai,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var nu=4,ru=6,iu=20,au=256,ou=new yl,su=new Ma,cu=null,lu=0,uu=0,du=!1,fu=new Q,pu=new Q,mu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fu}=i;cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,lu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Dn,format:Fn,colorSpace:Fr,depthBuffer:!1},r=gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hu(r)),this._blurMaterial=yu(r,e,t),this._ggxMaterial=vu(r,e,t)}return r}_compileMaterial(e){let t=new ns(new ko,e);this._renderer.compile(t,ou)}_sceneToCubeUV(e,t,n,r,i){let a=new ml(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(su),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ns(new ic,new Wo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(su),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;_u(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;_u(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ou)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-nu?n-d+nu:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,_u(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ou),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,_u(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ou)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];_u(t,3*l*(r>this._lodMax-nu?r-this._lodMax+nu:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ou)}};function hu(e){let t=[],n=[],r=e,i=e-nu+1+ru;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?pu.set(1,r,n):e===1?pu.set(-n,1,-r):e===2?pu.set(-n,r,1):e===3?pu.set(-1,r,-n):e===4?pu.set(-n,-1,r):pu.set(n,r,-1),pu.toArray(l,(e*6+t)*3)}}let u=new ko;u.setAttribute(`position`,new mo(c,3)),u.setAttribute(`outputDirection`,new mo(l,3)),n.push(new ns(u,null)),r>nu&&r--}return{lodMeshes:n,sizeLods:t}}function gu(e,t,n){let r=new Ji(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function _u(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function vu(e,t,n){return new mc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:au,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yu(e,t,n){return new mc({name:`SphericalGaussianBlur`,defines:{SAMPLES:iu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bu(){return new mc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xu(){return new mc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cu=class extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ec(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ic(5,5,5),i=new mc({name:`CubemapFromEquirect`,uniforms:oc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ns(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_n),new Ol(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function wu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Cu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new mu(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new mu(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Tu(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xr(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Eu(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?go:ho)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Du(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ou(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Yr(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ku(e,t,n){let r=new WeakMap,i=new Ki;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Yi(h,p,m,u);g.type=En,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Au(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ju={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mu(e,t,n,r,i,a){let o=new Ji(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ko;l.setAttribute(`position`,new _o([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new _o([0,2,0,0,2,0],2));let u=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ns(l,u),f=new yl(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ji(t,n,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),c=new Ji(t,n,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Fi.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ju[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nu=new Gi,Pu=new tc(1,1),Fu=new Yi,Iu=new Xi,Lu=new ec,Ru=[],zu=[],Bu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Uu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ru[i];if(a===void 0&&(a=new Float32Array(i),Ru[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ku(e,t){let n=zu[t];n===void 0&&(n=new Int32Array(t),zu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ju(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wu(n,t))return;e.uniform2fv(this.addr,t),Gu(n,t)}}function Yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wu(n,t))return;e.uniform3fv(this.addr,t),Gu(n,t)}}function Xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wu(n,t))return;e.uniform4fv(this.addr,t),Gu(n,t)}}function Zu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gu(n,t)}else{if(Wu(n,r))return;Hu.set(r),e.uniformMatrix2fv(this.addr,!1,Hu),Gu(n,r)}}function Qu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gu(n,t)}else{if(Wu(n,r))return;Vu.set(r),e.uniformMatrix3fv(this.addr,!1,Vu),Gu(n,r)}}function $u(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gu(n,t)}else{if(Wu(n,r))return;Bu.set(r),e.uniformMatrix4fv(this.addr,!1,Bu),Gu(n,r)}}function ed(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function td(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wu(n,t))return;e.uniform2iv(this.addr,t),Gu(n,t)}}function nd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wu(n,t))return;e.uniform3iv(this.addr,t),Gu(n,t)}}function rd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wu(n,t))return;e.uniform4iv(this.addr,t),Gu(n,t)}}function id(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ad(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wu(n,t))return;e.uniform2uiv(this.addr,t),Gu(n,t)}}function od(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wu(n,t))return;e.uniform3uiv(this.addr,t),Gu(n,t)}}function sd(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wu(n,t))return;e.uniform4uiv(this.addr,t),Gu(n,t)}}function cd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Pu.compareFunction=n.isReversedDepthBuffer()?518:515,a=Pu):a=Nu,n.setTexture2D(t||a,i)}function ld(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Iu,i)}function ud(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Lu,i)}function dd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fu,i)}function fd(e){switch(e){case 5126:return qu;case 35664:return Ju;case 35665:return Yu;case 35666:return Xu;case 35674:return Zu;case 35675:return Qu;case 35676:return $u;case 5124:case 35670:return ed;case 35667:case 35671:return td;case 35668:case 35672:return nd;case 35669:case 35673:return rd;case 5125:return id;case 36294:return ad;case 36295:return od;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return dd}}function pd(e,t){e.uniform1fv(this.addr,t)}function md(e,t){let n=Uu(t,this.size,2);e.uniform2fv(this.addr,n)}function hd(e,t){let n=Uu(t,this.size,3);e.uniform3fv(this.addr,n)}function gd(e,t){let n=Uu(t,this.size,4);e.uniform4fv(this.addr,n)}function _d(e,t){let n=Uu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vd(e,t){let n=Uu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yd(e,t){let n=Uu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bd(e,t){e.uniform1iv(this.addr,t)}function xd(e,t){e.uniform2iv(this.addr,t)}function Sd(e,t){e.uniform3iv(this.addr,t)}function Cd(e,t){e.uniform4iv(this.addr,t)}function wd(e,t){e.uniform1uiv(this.addr,t)}function Td(e,t){e.uniform2uiv(this.addr,t)}function Ed(e,t){e.uniform3uiv(this.addr,t)}function Dd(e,t){e.uniform4uiv(this.addr,t)}function Od(e,t,n){let r=this.cache,i=t.length,a=Ku(n,i);Wu(r,a)||(e.uniform1iv(this.addr,a),Gu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Pu:Nu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function kd(e,t,n){let r=this.cache,i=t.length,a=Ku(n,i);Wu(r,a)||(e.uniform1iv(this.addr,a),Gu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Iu,a[e])}function Ad(e,t,n){let r=this.cache,i=t.length,a=Ku(n,i);Wu(r,a)||(e.uniform1iv(this.addr,a),Gu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Lu,a[e])}function jd(e,t,n){let r=this.cache,i=t.length,a=Ku(n,i);Wu(r,a)||(e.uniform1iv(this.addr,a),Gu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fu,a[e])}function Md(e){switch(e){case 5126:return pd;case 35664:return md;case 35665:return hd;case 35666:return gd;case 35674:return _d;case 35675:return vd;case 35676:return yd;case 5124:case 35670:return bd;case 35667:case 35671:return xd;case 35668:case 35672:return Sd;case 35669:case 35673:return Cd;case 5125:return wd;case 36294:return Td;case 36295:return Ed;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return jd}}var Nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fd(t.type)}},Pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Md(t.type)}},Fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Id=/(\w+)(\])?(\[|\.)?/g;function Ld(e,t){e.seq.push(t),e.map[t.id]=t}function Rd(e,t,n){let r=e.name,i=r.length;for(Id.lastIndex=0;;){let a=Id.exec(r),o=Id.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ld(n,l===void 0?new Nd(s,e,t):new Pd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Fd(s),Ld(n,e)),n=e}}}var zd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Rd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Bd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Vd=37297,Hd=0;function Ud(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wd=new Ai;function Gd(e){Fi._getMatrix(Wd,Fi.workingColorSpace,e);let t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(Fi.getTransfer(e)){case Ir:return[t,`LinearTransferOETF`];case Lr:return[t,`sRGBTransferOETF`];default:return X(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Kd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ud(e.getShaderSource(t),r)}return i}function qd(e,t){let n=Gd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Jd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Yd(e,t){let n=Jd[t];return n===void 0?(X(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Xd=new Q;function Zd(){return Fi.getLuminanceCoefficients(Xd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Xd.x.toFixed(4)}, ${Xd.y.toFixed(4)}, ${Xd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Qd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(tf).join(`
`)}function $d(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ef(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function tf(e){return e!==``}function nf(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var af=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(e){return e.replace(af,cf)}var sf=new Map;function cf(e,t){let n=Kl[t];if(n===void 0){let e=sf.get(t);if(e!==void 0)n=Kl[e],X(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return of(n)}var lf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(e){return e.replace(lf,df)}function df(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ff(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pf={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mf(e){return pf[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function gf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:hf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var _f={302:`ENVMAP_MODE_REFRACTION`};function vf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_f[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yf[e.combine]||`ENVMAP_BLENDING_NONE`}function xf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Sf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mf(n),l=gf(n),u=vf(n),d=bf(n),f=xf(n),p=Qd(n),m=$d(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tf).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tf).join(`
`),_.length>0&&(_+=`
`)):(g=[ff(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(tf).join(`
`),_=[ff(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Kl.tonemapping_pars_fragment,n.toneMapping===0?``:Yd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Kl.colorspace_pars_fragment,qd(`linearToOutputTexel`,n.outputColorSpace),Zd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(tf).join(`
`)),o=of(o),o=nf(o,n),o=rf(o,n),s=of(s),s=nf(s,n),s=rf(s,n),o=uf(o),s=uf(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Bd(i,i.VERTEX_SHADER,y),S=Bd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Kd(i,x,`vertex`),n=Kd(i,S,`fragment`);Yr(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):X(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new zd(i,h),T=ef(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Vd)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Cf=0,wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tf(e),t.set(e,n)),n}},Tf=class{constructor(e){this.id=Cf++,this.code=e,this.usedTimes=0}};function Ef(e){return e===1030||e===37490||e===36285}function Df(e,t,n,r,i,a){let o=new ca,s=new wf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&X(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ql[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,ne=!!i.displacementMap,B=!!i.emissiveMap,re=!!i.metalnessMap,V=!!i.roughnessMap,H=i.anisotropy>0,ie=i.clearcoat>0,ae=i.dispersion>0,U=i.retroreflectivity>0,W=i.iridescence>0,oe=i.sheen>0,se=i.transmission>0,ce=H&&!!i.anisotropyMap,le=ie&&!!i.clearcoatMap,ue=ie&&!!i.clearcoatNormalMap,G=ie&&!!i.clearcoatRoughnessMap,de=W&&!!i.iridescenceMap,K=W&&!!i.iridescenceThicknessMap,fe=oe&&!!i.sheenColorMap,pe=oe&&!!i.sheenRoughnessMap,me=!!i.specularMap,q=!!i.specularColorMap,he=!!i.specularIntensityMap,J=se&&!!i.transmissionMap,ge=se&&!!i.thicknessMap,_e=!!i.gradientMap,ve=!!i.alphaMap,ye=i.alphaTest>0,be=!!i.alphaHash,xe=!!i.extensions,Se=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Se=e.toneMapping);let Ce={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Fi.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:z,displacementMap:ne,emissiveMap:B,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&Ef(i.normalMap.format),metalnessMap:re,roughnessMap:V,anisotropy:H,anisotropyMap:ce,clearcoat:ie,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:G,dispersion:ae,retroreflection:U,iridescence:W,iridescenceMap:de,iridescenceThicknessMap:K,sheen:oe,sheenColorMap:fe,sheenRoughnessMap:pe,specularMap:me,specularColorMap:q,specularIntensityMap:he,transmission:se,transmissionMap:J,thicknessMap:ge,gradientMap:_e,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ve,alphaTest:ye,alphaHash:be,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:ne&&m(i.displacementMap.channel),emissiveMapUv:B&&m(i.emissiveMap.channel),metalnessMapUv:re&&m(i.metalnessMap.channel),roughnessMapUv:V&&m(i.roughnessMap.channel),anisotropyMapUv:ce&&m(i.anisotropyMap.channel),clearcoatMapUv:le&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:pe&&m(i.sheenRoughnessMap.channel),specularMapUv:me&&m(i.specularMap.channel),specularColorMapUv:q&&m(i.specularColorMap.channel),specularIntensityMapUv:he&&m(i.specularIntensityMap.channel),transmissionMapUv:J&&m(i.transmissionMap.channel),thicknessMapUv:ge&&m(i.thicknessMap.channel),alphaMapUv:ve&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||H),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||ve),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Fi.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&Fi.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:xe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(xe&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ql[t];n=dc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Sf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Of(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function kf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Af(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||kf),r.length>1&&r.sort(t||Af),i.length>1&&i.sort(t||Af)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Mf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new jf,e.set(t,[i])):n>=r.length?(i=new jf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Q,color:new Ma};break;case`SpotLight`:n={position:new Q,direction:new Q,color:new Ma,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Q,color:new Ma,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Q,skyColor:new Ma,groundColor:new Ma};break;case`RectAreaLight`:n={color:new Ma,position:new Q,halfWidth:new Q,halfHeight:new Q}}return e[t.id]=n,n}}}function Pf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ff=0;function If(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Lf(e){let t=new Nf,n=Pf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Q);let i=new Q,a=new Zi,o=new Zi;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(If);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ff++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Rf(e){let t=new Lf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function zf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Rf(e),t.set(n,[a])):r>=i.length?(a=new Rf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hf=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Uf=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Wf=new Zi,Gf=new Q,Kf=new Q;function qf(e,t,n){let r=new Ms,i=new Z,a=new Z,o=new Ki,s=new yc,c=new bc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new mc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Bf,fragmentShader:Vf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ko;m.setAttribute(`position`,new mo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ns(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(X(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){X(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){X(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ji(i.x,i.y,{format:Bn,type:Dn,minFilter:_n,magFilter:_n,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new tc(i.x,i.y,En),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=In,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mn,d.map.depthTexture.magFilter=mn}else l.isPointLight?(d.map=new Cu(i.x),d.map.depthTexture=new nc(i.x,Tn)):(d.map=new Ji(i.x,i.y),d.map.depthTexture=new tc(i.x,i.y,Tn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=In,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=_n,d.map.depthTexture.magFilter=_n):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mn,d.map.depthTexture.magFilter=mn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gf.setFromMatrixPosition(l.matrixWorld),e.position.copy(Gf),Kf.copy(e.position),Kf.add(Hf[t]),e.up.copy(Uf[t]),e.lookAt(Kf),e.updateMatrixWorld(),n.makeTranslation(-Gf.x,-Gf.y,-Gf.z),Wf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Wf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ji(i.x,i.y,{format:Bn,type:Dn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Jf(e,t){function n(){let t=!1,n=new Ki,r=null,i=new Ki(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?re(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?re(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Ma(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new Ki().fromArray(R),z=new Ki().fromArray(ee);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),re(e.DEPTH_TEST),o.setFunc(3),ce(!1),le(1),re(e.CULL_FACE),oe(0);function re(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function H(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ie(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ae(t){return h!==t&&(e.useProgram(t),h=t,!0)}let U={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};U[103]=e.MIN,U[104]=e.MAX;let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function oe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(V(e.BLEND),g=!1);return}if(g===!1&&(re(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Yr(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Yr(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Yr(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Yr(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(U[n],U[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(W[r],W[i],W[o],W[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function se(t,n){t.side===2?V(e.CULL_FACE):re(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ce(r),t.blending===1&&t.transparent===!1?oe(0):oe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),G(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function le(t){t===0?V(e.CULL_FACE):(re(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ue(t){t!==k&&(N&&e.lineWidth(t),k=t)}function G(t,n,r){t?(re(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function de(t){t?re(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function K(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function fe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function pe(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function me(){try{e.compressedTexImage2D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function q(){try{e.compressedTexImage3D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function he(){try{e.texSubImage2D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function J(){try{e.texSubImage3D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function ge(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function _e(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function ve(){try{e.texStorage2D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function ye(){try{e.texStorage3D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function be(){try{e.texImage2D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function xe(){try{e.texImage3D(...arguments)}catch(e){Yr(`WebGLState:`,e)}}function Se(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ce(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Y(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function we(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function Te(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ee(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Ma(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:re,disable:V,bindFramebuffer:H,drawBuffers:ie,useProgram:ae,setBlending:oe,setMaterial:se,setFlipSided:ce,setCullFace:le,setLineWidth:ue,setPolygonOffset:G,setScissorTest:de,activeTexture:K,bindTexture:fe,unbindTexture:pe,compressedTexImage2D:me,compressedTexImage3D:q,texImage2D:be,texImage3D:xe,pixelStorei:Ce,getParameter:Se,updateUBOMapping:Te,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:ye,texSubImage2D:he,texSubImage3D:J,compressedTexSubImage2D:ge,compressedTexSubImage3D:_e,scissor:Y,viewport:we,reset:De}}function Yf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Z,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Wr(`canvas`)}function g(e,t,n){let r=1,i=me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),X(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&X(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];X(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||X(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ir:Fi.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,X(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&X(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)X(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)X(`WebGLRenderer: Texture marked for update but image is incomplete`);else{V(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){V(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){V(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){H(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let R={[dn]:e.REPEAT,[fn]:e.CLAMP_TO_EDGE,[pn]:e.MIRRORED_REPEAT},ee={[mn]:e.NEAREST,[hn]:e.NEAREST_MIPMAP_NEAREST,[gn]:e.NEAREST_MIPMAP_LINEAR,[_n]:e.LINEAR,[vn]:e.LINEAR_MIPMAP_NEAREST,[yn]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&X(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ne(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function B(e,t,n){return Math.floor(Math.floor(e/n)/t)}function re(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=B(n.start,r.width,4),c=B(t.start,r.width,4);n.start<=i+1&&a===c&&B(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function V(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ne(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Fi.getPrimaries(Fi.workingColorSpace),r=o.colorSpace===``?null:Fi.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=pe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);z(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ln,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&re(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Hl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else X(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?X(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Hl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=me(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=me(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function H(t,o,s){if(o.image.length!==6)return;let c=ne(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Fi.getPrimaries(Fi.workingColorSpace),r=o.colorSpace===``?null:Fi.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=pe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);z(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?X(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=me(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),K(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,de(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;K(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);K(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function U(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),z(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=de(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)K(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)K(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function W(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)U(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?U(i.__webglFramebuffer[0],t,0):U(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ae(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ae(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,i){let a=r.get(t);n!==void 0&&ie(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&W(t)}function se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&K(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=de(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ae(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ie(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ie(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),z(c,a),ie(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),z(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ie(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ie(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&W(t)}function ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let le=[],ue=[];function G(t){if(t.samples>0){if(K(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(le.length=0,ue.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(le.push(l),ue.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function de(e){return Math.min(i.maxSamples,e.samples)}function K(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function fe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Fi.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&X(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Yr(`WebGLTextures: Unsupported texture color space:`,n)),t}function me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=oe,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=K,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Xf(e,t){function n(n,r=``){let i,a=Fi.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new rc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mc({vertexShader:Zf,fragmentShader:Qf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ns(new ac(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ep=class extends $r{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new $f,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Z,C=null,w=null,T=new ml;T.viewport=new Ki;let E=new ml;E.viewport=new Ki;let D=[T,E],O=new kl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Da,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Da,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Da,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&X(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&X(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ln:In,a=_.stencil?An:Tn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ji(d.textureWidth,d.textureHeight,{format:Fn,type:bn,depthTexture:new tc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ji(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Q,F=new Q;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;L(O,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),R(e,O,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ri*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ee=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ml,o.layers.enable(n),o.viewport=new Ki,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new rc,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ee&&ee(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let z=new Wl;z.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}},tp=new Zi,np=new Ai;np.set(-1,0,0,0,1,0,0,0,1);function rp(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,uc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(tp.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(np),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ip(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Yr(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?X(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):X(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ap=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),op=null;function sp(){return op===null&&(op=new gs(ap,16,16,Bn,Dn),op.name=`DFG_LUT`,op.minFilter=_n,op.magFilter=_n,op.wrapS=fn,op.wrapT=fn,op.generateMipmaps=!1,op.needsUpdate=!0),op}var cp=class{constructor(e={}){let{canvas:t=Gr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Hn,Vn,zn]),g=new Set([bn,Tn,Cn,An,On,kn]),_=new Uint32Array(4),v=new Int32Array(4),y=new Q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Pr;let j=0,M=0,N=null,P=-1,F=null,I=new Ki,L=new Ki,R=null,ee=new Ma(0),te=0,z=t.width,ne=t.height,B=1,re=null,V=null,H=new Ki(0,0,z,ne),ie=new Ki(0,0,z,ne),ae=!1,U=new Ms,W=!1,oe=!1,se=new Zi,ce=new Q,le=new Ki,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G=!1;function de(){return N===null?B:1}let K=n;function fe(e,n){return t.getContext(e,n)}let pe,me,q,he,J,ge,_e,ve,ye,be,xe,Se,Ce,Y,we,Te,Ee,De,Oe,ke,Ae,je,Me;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Fe,!1),t.addEventListener(`webglcontextrestored`,Ie,!1),t.addEventListener(`webglcontextcreationerror`,Le,!1),K===null){let t=`webgl2`;if(K=fe(t,e),K===null)throw fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ne()}catch(e){throw t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,Le,!1),Yr(`WebGLRenderer: `+e.message),e}function Ne(){pe=new Tu(K),pe.init(),Ae=new Xf(K,pe),me=new eu(K,pe,e,Ae),q=new Jf(K,pe),me.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),O=K.createFramebuffer(),k=K.createFramebuffer(),A=K.createFramebuffer(),he=new Ou(K),J=new Of,ge=new Yf(K,pe,q,J,me,Ae,he),_e=new wu(T),ve=new Gl(K),je=new Ql(K,ve),ye=new Eu(K,ve,he,je),be=new Au(K,ye,ve,je,he),De=new ku(K,me,ge),we=new tu(J),xe=new Df(T,_e,pe,me,je,we),Se=new rp(T,J),Ce=new Mf,Y=new zf(pe),Ee=new Zl(T,_e,q,be,p,s),Te=new qf(T,be,me),Me=new ip(K,he,me,q),Oe=new $l(K,pe,he),ke=new Du(K,pe,he),he.programs=xe.programs,T.capabilities=me,T.extensions=pe,T.properties=J,T.renderLists=Ce,T.shadowMap=Te,T.state=q,T.info=he}m!==1009&&(w=new Mu(m,t.width,t.height,o,r,i));let Pe=new ep(T,K);this.xr=Pe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let e=pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(e){e!==void 0&&(B=e,this.setSize(z,ne,!1))},this.getSize=function(e){return e.set(z,ne)},this.setSize=function(e,n,r=!0){if(Pe.isPresenting){X(`WebGLRenderer: Can't change size while VR device is presenting.`);return}z=e,ne=n,t.width=Math.floor(e*B),t.height=Math.floor(n*B),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(z*B,ne*B).floor()},this.setDrawingBufferSize=function(e,n,r){z=e,ne=n,B=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Yr(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){X(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(H)},this.setViewport=function(e,t,n,r){e.isVector4?H.set(e.x,e.y,e.z,e.w):H.set(e,t,n,r),q.viewport(I.copy(H).multiplyScalar(B).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),q.scissor(L.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){q.setScissorTest(ae=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){V=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,K.clearBufferuiv(K.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,K.clearBufferiv(K.COLOR,0,v))}else r|=K.COLOR_BUFFER_BIT}t&&(r|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&K.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Fe,!1),t.removeEventListener(`webglcontextrestored`,Ie,!1),t.removeEventListener(`webglcontextcreationerror`,Le,!1),Ee.dispose(),Ce.dispose(),Y.dispose(),J.dispose(),_e.dispose(),be.dispose(),je.dispose(),Me.dispose(),xe.dispose(),Pe.dispose(),Pe.removeEventListener(`sessionstart`,We),Pe.removeEventListener(`sessionend`,Ge),Ke.stop()};function Fe(e){e.preventDefault(),qr(`WebGLRenderer: Context Lost.`),E=!0}function Ie(){qr(`WebGLRenderer: Context Restored.`),E=!1;let e=he.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;Ne(),he.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function Le(e){Yr(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Re(e){let t=e.target;t.removeEventListener(`dispose`,Re),ze(t)}function ze(e){Be(e),J.remove(e)}function Be(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){xe.releaseProgram(e)}),e.isShaderMaterial&&xe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=nt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ye.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;je.setup(i,r,s,n,c);let h,g=Oe;if(c!==null&&(h=ve.get(c),g=ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*de()),g.setMode(K.LINES)):g.setMode(K.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*de()),i.isLineSegments?g.setMode(K.LINES):i.isLineLoop?g.setMode(K.LINE_LOOP):g.setMode(K.LINE_STRIP)}else i.isPoints?g.setMode(K.POINTS):i.isSprite&&g.setMode(K.TRIANGLES);if(i.isBatchedMesh){if(pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ve.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(K,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ve(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),W===!0&&we.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Qe(e,t,r),e.side=0,e.needsUpdate=!0,Qe(e,t,r),e.side=2):Qe(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Y.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),oe=this.localClippingEnabled,W=we.init(this.clippingPlanes,oe),W===!0&&we.setGlobalState(this.clippingPlanes,t),D!==null&&Te.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ve(o,n,t,e),r.add(o)}else Ve(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let He=null;function Ue(e){He&&He(e)}function We(){Ke.stop()}function Ge(){Ke.start()}let Ke=new Wl;Ke.setAnimationLoop(Ue),typeof self<`u`&&Ke.setContext(self),this.setAnimationLoop=function(e){He=e,Pe.setAnimationLoop(e),e===null?Ke.stop():Ke.start()},Pe.addEventListener(`sessionstart`,We),Pe.addEventListener(`sessionend`,Ge),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Yr(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Pe.enabled===!0&&Pe.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(t),t=Pe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Y.get(e,C.length),x.init(t),x.state.textureUnits=ge.getTextureUnits(),C.push(x),se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),U.setFromProjectionMatrix(se,Vr,t.reversedDepth),oe=this.localClippingEnabled,W=we.init(this.clippingPlanes,oe),b=Ce.get(e,S.length),b.init(),S.push(b),Pe.enabled===!0&&Pe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&qe(e,t,-1/0,T.sortObjects)}qe(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(re,V),G=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,G&&Ee.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&we.beginShadows();let i=x.state.shadowsArray;if(Te.render(i,e,t),W===!0&&we.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ye(n,r,e,a)}G&&Ee.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Je(b,e,n,n.viewport)}}else r.length>0&&Ye(n,r,e,t),G&&Ee.render(e),Je(b,e,t)}N!==null&&M===0&&(ge.updateMultisampleRenderTarget(N),ge.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),je.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],ge.setTextureUnits(x.state.textureUnits),W===!0&&we.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function qe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(U)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);let i=be.update(e),a=e.material;a.visible&&b.push(e,i,a,n,le.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(U))){let i=be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,le.z,s,t)}}else a.visible&&b.push(e,i,a,n,le.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)qe(i[e],t,n,r)}function Je(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),W===!0&&we.setGlobalState(T.clippingPlanes,n),r&&q.viewport(I.copy(r)),i.length>0&&Xe(i,t,n),a.length>0&&Xe(a,t,n),o.length>0&&Xe(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Ye(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=pe.has(`EXT_color_buffer_half_float`)||pe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ji(1,1,{generateMipmaps:!0,type:e?Dn:bn,minFilter:yn,samples:Math.max(4,me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fi.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ee),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),G&&Ee.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),W===!0&&we.setGlobalState(T.clippingPlanes,r),Xe(e,n,r),ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a),pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ze(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ee,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Xe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ze(o,t,n,s,l,c)}}function Ze(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Qe(e,t,n){t.isScene!==!0&&(t=ue);let r=J.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=xe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=xe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=_e.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Re),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return et(e,s),d}else s.uniforms=xe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=xe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=we.uniform),et(e,s),r.needsLights=it(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function $e(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=zd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function et(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function nt(e,t,n,r,i){t.isScene!==!0&&(t=ue),ge.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Fi.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=_e.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=x.state.lights;if(W===!0&&(oe===!0||e!==F)){let t=e===F&&r.id===P;we.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==we.numPlanes||v.numIntersection!==we.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Qe(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(q.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(K,`projectionMatrix`,e.projectionMatrix),O.setValue(K,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(K,ce.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&O.setValue(K,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(K,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(K,`sunShadowMap`,y.state.sunShadowMap,ge),y.state.directionalShadowMap.length>0&&O.setValue(K,`directionalShadowMap`,y.state.directionalShadowMap,ge),y.state.spotShadowMap.length>0&&O.setValue(K,`spotShadowMap`,y.state.spotShadowMap,ge),y.state.pointShadowMap.length>0&&O.setValue(K,`pointShadowMap`,y.state.pointShadowMap,ge)),i.isSkinnedMesh){O.setOptional(K,i,`bindMatrix`),O.setOptional(K,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(K,`boneTexture`,e.boneTexture,ge))}i.isBatchedMesh&&(O.setOptional(K,i,`batchingTexture`),O.setValue(K,`batchingTexture`,i._matricesTexture,ge),O.setOptional(K,i,`batchingIdTexture`),O.setValue(K,`batchingIdTexture`,i._indirectTexture,ge),O.setOptional(K,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(K,`batchingColorTexture`,i._colorsTexture,ge));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&De.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(K,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=sp()),w){if(O.setValue(K,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&rt(k,E),a&&r.fog===!0&&Se.refreshFogUniforms(k,a),Se.refreshMaterialUniforms(k,r,B,ne,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}zd.upload(K,$e(v),k,ge)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(zd.upload(K,$e(v),k,ge),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(K,`center`,i.center),O.setValue(K,`modelViewMatrix`,i.modelViewMatrix),O.setValue(K,`normalMatrix`,i.normalMatrix),O.setValue(K,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Me.update(n,S),Me.bind(n,S)}}return S}function rt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function it(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(K.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest,q.viewport(I),q.scissor(L),q.setScissorTest(R),P=-1;return}if(o.__webglFramebuffer===void 0)ge.setupRenderTarget(e);else if(o.__hasExternalTextures)ge.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ge.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ge.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest}else I.copy(H).multiplyScalar(B).floor(),L.copy(ie).multiplyScalar(B).floor(),R=ae;if(n!==0&&(r=O),q.bindFramebuffer(K.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(I),q.scissor(L),q.setScissorTest(R),i){let r=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,t.__webglTexture,n)}P=-1};function at(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=me.textureFormatReadable(e.format),t.__typeReadable=me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Yr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){q.bindFramebuffer(K.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let u=at(o);if(u.__formatReadable===!1){Yr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Yr(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&K.readPixels(t,n,r,i,Ae.convert(c),Ae.convert(l),a)}finally{let e=N===null?null:J.get(N).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(K.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let d=at(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.bufferData(K.PIXEL_PACK_BUFFER,a.byteLength,K.STREAM_READ),K.readPixels(t,n,r,i,Ae.convert(l),Ae.convert(u),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let p=N===null?null:J.get(N).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,p);let m=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Zr(K,m,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,a),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(f),K.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ge.setTexture2D(e,0),K.copyTexSubImage2D(K.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ae.convert(t.format),_=Ae.convert(t.type),v;t.isData3DTexture?(ge.setTexture3D(t,0),v=K.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ge.setTexture2DArray(t,0),v=K.TEXTURE_2D_ARRAY):(ge.setTexture2D(t,0),v=K.TEXTURE_2D),q.activeTexture(K.TEXTURE0),q.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(K.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(K.UNPACK_ROW_LENGTH),b=q.getParameter(K.UNPACK_IMAGE_HEIGHT),x=q.getParameter(K.UNPACK_SKIP_PIXELS),S=q.getParameter(K.UNPACK_SKIP_ROWS),C=q.getParameter(K.UNPACK_SKIP_IMAGES);q.pixelStorei(K.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(K.UNPACK_SKIP_PIXELS,l),q.pixelStorei(K.UNPACK_SKIP_ROWS,u),q.pixelStorei(K.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(K.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),K.blitFramebuffer(l,u,o,s,f,p,o,s,K.DEPTH_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(K.READ_FRAMEBUFFER,k),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,n.__webglTexture,i),T?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,r.__webglTexture,a),i===0?T?K.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):K.copyTexSubImage2D(v,a,f,p,l,u,o,s):K.blitFramebuffer(l,u,o,s,f,p,o,s,K.COLOR_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?K.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(K.UNPACK_ROW_LENGTH,y),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(K.UNPACK_SKIP_PIXELS,x),q.pixelStorei(K.UNPACK_SKIP_ROWS,S),q.pixelStorei(K.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&K.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&ge.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ge.setTextureCube(e,0):e.isData3DTexture?ge.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ge.setTexture2DArray(e,0):ge.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,q.reset(),je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Fi._getDrawingBufferColorSpace(e),t.unpackColorSpace=Fi._getUnpackColorSpace()}},lp=new gs(new Uint8Array(4),1,1);lp.needsUpdate=!0;var up=4,dp=`
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,fp=(e,t)=>`
precision highp float;
uniform sampler2D from;
uniform vec2 texel;
void main() {
  vec2 base = floor(gl_FragCoord.xy) * ${e}.0;
  float any = 0.0;
  for (int j = 0; j < ${e/2}; j++) {
    for (int i = 0; i < ${e/2}; i++) {
      any = max(any, texture2D(from, (base + vec2(float(i), float(j)) * 2.0 + 1.0) * texel).${t});
    }
  }
  gl_FragColor = vec4(any > 0.0 ? 1.0 : 0.0);
}
`;function pp(){let e=(e,t)=>new mc({uniforms:{from:{value:lp},texel:{value:new Z}},vertexShader:dp,fragmentShader:fp(e,t),depthTest:!1,depthWrite:!1}),t=e(up,`a`),n=e(32/up,`r`),r=new ns(new ac(2,2),t);r.frustumCulled=!1;let i=new Pa;i.add(r);let a=new yl(-1,1,1,-1,0,1),o=null,s=null,c=(e,t,n)=>e&&e.width===t&&e.height===n?e:(e?.dispose(),new Ji(t,n,{depthBuffer:!1}));return{of(e,l,u,d){return o=c(o,Math.ceil(u/up),Math.ceil(d/up)),s=c(s,Math.ceil(o.width/(32/up)),Math.ceil(o.height/(32/up))),r.material=t,t.uniforms.from.value=l,t.uniforms.texel.value.set(1/u,1/d),e.setRenderTarget(o),e.render(i,a),r.material=n,n.uniforms.from.value=o.texture,n.uniforms.texel.value.set(1/o.width,1/o.height),e.setRenderTarget(s),e.render(i,a),s},dispose(){o?.dispose(),s?.dispose(),r.geometry.dispose(),t.dispose(),n.dispose()}}}var mp=160,hp=1700,gp=12,_p=.35,vp=_p*7,yp=e=>{let t=Math.max(e.width,e.height);return{width:Math.max(1,Math.round(e.width/t*mp)),height:Math.max(1,Math.round(e.height/t*mp))}};function bp(){let e=null,t=1/0;return{feed(n,r,i){if(t+=n,!r.active)return e=null,{from:[0,0],to:[0,0],force:[0,0],live:t<vp};let a=[r.x,i.height-r.y],o=e??a;e=a;let s=Math.hypot(r.vx,r.vy);if(s<gp)return{from:o,to:a,force:[0,0],live:t<vp};t=0;let c=Math.min(1,hp/s);return{from:o,to:a,force:[r.vx*c,-r.vy*c],live:!0}}}}var xp={lens:.2,spread:.42,nearSmear:.24,nearSplit:.22,edge:.2,farSmear:.028,farSplit:.03,wakeShift:.011,wakeRays:.03,wakeMost:.035,wakeGlint:.035,noseSplit:.25,noseApart:20,noseRound:.08},Sp=(e,t)=>xp.lens*Math.exp(-((e/t)**2)/(2*xp.spread**2)),Cp=16,wp=[4,8],Tp=.3,Ep=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Dp=`
precision highp float;
uniform sampler2D sheets;
uniform sampler2D mask;
uniform vec2 cell;
uniform sampler2D wake;
uniform float stirred;
uniform vec2 nose;
uniform vec2 size;
uniform vec2 centre;
uniform vec2 ring;
uniform float appear;
uniform float prism;
uniform float edges;
uniform vec3 dFlare;
uniform vec3 dPrism;
uniform vec3 dBend;
uniform vec3 dTunnel;
uniform vec2 warp;
uniform vec3 paper;
// the long rays, drawn at half the frame's size this frame (whether there are any)
uniform sampler2D halfRays;
uniform float halfOn;
// what darkens the frame, and how much (the seventh screen's scrim)
uniform vec4 dim;
uniform float pixel;
varying vec2 vUv;

vec4 tap(vec2 p) {
  vec2 uv = p / size;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  return texture2D(sheets, uv);
}

// red at 0, through green, to blue at 1
vec3 spectrum(float t) {
  vec3 c = clamp(abs(mod(t * 4.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return mix(vec3(1.0), c, 0.85);
}

float ease(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

// whether no sheet is anywhere along the stretch of reach pixels through p: the sum of looksOver in mask.ts
bool bare(vec2 p, vec2 dir, float reach) {
  float span = reach + 4.0;
  float steps = max(1.0, ceil(span / 32.0));
  if (steps + 1.0 > 9.0) return false;
  for (int k = 0; k < 9; k++) {
    if (float(k) > steps) break;
    if (texture2D(mask, (p + dir * span * (float(k) / steps - 0.5)) * cell).r > 0.0) return false;
  }
  return true;
}

// the sheets at p, drawn out along dir over a length of reach pixels, each colour from its own place on it
vec4 rays(vec2 p, vec2 dir, float reach, out vec3 cover) {
  vec3 colour = vec3(0.0);
  cover = vec3(0.0);
  if (reach < 0.75 * pixel) {
    vec4 c = tap(p);
    cover = vec3(c.a);
    return c;
  }
  // nothing to draw out: the same as every tap finding nothing, without the taps
  if (bare(p, dir, reach)) return vec4(0.0);
  vec3 weights = vec3(0.0);
  // each pixel starts its taps at a place of its own: the steps between them show as grain, not as bands
#ifdef HALF
  // (at half size, stretched over two pixels, the even grain below shows as a weave: a grain with no pattern instead,
  // and twice the taps, so it is as fine)
  uvec2 h = uvec2(gl_FragCoord.xy) * uvec2(1597334677u, 3812015801u);
  float grain = float((h.x ^ h.y) * 1597334677u) / 4294967296.0;
  const int most = 32;
  float apart = 1.5;
#else
  float grain = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  const int most = ${Cp};
  float apart = 3.0;
#endif
  // a short ray takes fewer taps: no two closer than a few pixels
  float taps = clamp(ceil(reach / (apart * pixel)), 4.0, float(most));
  for (int i = 0; i < most; i++) {
    if (float(i) >= taps) break;
    float t = (float(i) + grain) / taps;
    vec4 c = tap(p + dir * reach * (t - 0.5));
    vec3 k = spectrum(t);
    colour += c.rgb * k;
    cover += c.a * k;
    weights += k;
  }
  cover /= weights;
  return vec4(colour / weights, 1.0);
}

void main() {
  // the seventh screen's distortions, as the app's (story/distortion.ts, sourceOf, line for line): where this pixel takes
  // its colour from — across its lane for a flare (the lane going left to right), then bent outwards, then inwards
  vec2 q = vUv;
  float aspect = size.x / size.y;
  // the ninth screen's warp (story/devices.ts, warpSource, line for line): a point at radius r from the middle is seen
  // at r / √(1 + k²r²), z times nearer, so all round the middle is drawn out into rays (how far into them: rayed)
  float rayed = 0.0;
  float warped = 0.0;
  if (warp.x > 0.0 || warp.y != 1.0) {
    vec2 b = (q - 0.5) * vec2(aspect, 1.0);
    float r = length(b);
    float kr = warp.x * r;
    float len = r / sqrt(1.0 + kr * kr) / warp.y;
    rayed = kr * kr / (1.0 + kr * kr);
    warped = len;
    q = 0.5 + (r > 0.0 ? b / r * len : vec2(0.0)) / vec2(aspect, 1.0);
  }
  vec2 m = q - 0.5;
  float corner = (aspect * aspect + 1.0) / 4.0;
  float lane = 0.0;
  if (dFlare.x > 0.0) {
    lane = ease((abs(2.0 * q.x - 1.0) - (1.0 - dFlare.y)) / max(dFlare.y, 1e-4));
    q.y = 0.5 + (q.y - 0.5) / (1.0 + dFlare.x * lane);
  }
  if (dBend.x > 0.0) {
    vec2 b = q - 0.5;
    vec2 s = vec2(b.x * aspect, b.y);
    q = 0.5 + b * (1.0 + dBend.x * dot(s, s)) / (1.0 + dBend.x * corner);
  }
  if (dTunnel.x > 0.0) {
    vec2 b = q - 0.5;
    vec2 s = vec2(b.x * aspect, b.y);
    float inner = min(aspect, 1.0) * min(aspect, 1.0) / 4.0;
    float back = 1.0 + dTunnel.x * corner;
    q = 0.5 + b * (back / sqrt(1.0 + (back * back - 1.0) / inner * dot(s, s)));
  }
  // and how far it is drawn out: from the middle for a prism and a bend, across the lane for a flare
  float rim = max(abs(2.0 * m.x), abs(2.0 * m.y));
  float outward = size.x * (
    dPrism.z * ease((rim - (1.0 - dPrism.y)) / max(dPrism.y, 1e-4)) +
    dBend.z * ease((rim - (1.0 - dBend.y)) / max(dBend.y, 1e-4)) +
    dTunnel.z * ease((rim - (1.0 - dTunnel.y)) / max(dTunnel.y, 1e-4))
  );
  float across = size.x * dFlare.z * lane;
  // (the warp's rays as the film draws them: along the radius, as long as the stretch is far out, the colours parting)
  outward += size.y * ${Tp.toFixed(3)} * rayed * warped;

  vec2 p = q * size;
  vec2 c = p - centre;
  float dist = length(c);
  vec2 dir = dist > 0.0 ? c / dist : vec2(0.0);
  float shorter = min(size.x, size.y);

  // the lens over the whole frame: everything is seen larger, most in the middle
  float far0 = dist / shorter;
  float pull = ${xp.lens.toFixed(3)} * appear * exp(-far0 * far0 / ${(2*xp.spread**2).toFixed(4)});
  // the pointer's wake, where there is one: its flow in the page's pixels a second, and how it curls
  vec2 flow = vec2(0.0);
  float curl = 0.0;
  if (stirred > 0.5) {
    vec4 w = texture2D(wake, vUv);
    flow = w.xy;
    curl = w.z;
  }
  float speed = length(flow);
  vec2 seenAt = c * (1.0 - pull) - flow * ${xp.wakeShift.toFixed(4)} * pixel;
  float d = length(seenAt);

  // drawn out into rays where the sheets come out, and again towards the frame's edges; clean between
  float x = (d - ring.x) / ring.y;
  float near = prism * exp(-pow((x + 1.0) / 0.6, 2.0));
  vec2 e = abs(2.0 * vUv - 1.0);
  float far = edges * ease((max(e.x, e.y) - ${(1-xp.edge).toFixed(3)}) / ${xp.edge.toFixed(3)});
  float reach =
    ring.y * near * ${(xp.nearSmear+xp.nearSplit).toFixed(3)} +
    shorter * far * ${(xp.farSmear+xp.farSplit).toFixed(3)};
  // the wake draws the scene out along its own way: the two stretches are laid end to end, never against each other
  vec2 stretch = dir * (reach + outward) + vec2(0.0, m.y < 0.0 ? -across : across);
  if (speed > 1.0) {
    vec2 way = flow / speed;
    float drawn = min(speed * ${xp.wakeRays.toFixed(4)}, shorter / pixel * ${xp.wakeMost.toFixed(4)}) * pixel;
    stretch += (dot(way, dir) < 0.0 ? -way : way) * drawn;
  }
  float drawnOut = length(stretch);
  vec2 way = drawnOut > 0.0 ? stretch / drawnOut : dir;
  // the light in the ring's hole falls on the sheets alone: they come out of white, and the page stays the page
  float light = appear * exp(-pow(d / max(0.8 * (ring.x - ring.y), 1.0), 2.0));
#ifdef HALF
  // (the long rays alone, at half the frame's size: the frame's own pass takes them from here)
  if (drawnOut < ${(wp[0]/2).toFixed(1)} * pixel) {
    gl_FragColor = vec4(paper, 1.0);
    return;
  }
  vec3 cover;
  vec4 seen = rays(centre + seenAt, way, drawnOut, cover);
  gl_FragColor = vec4(paper * (1.0 - cover) + mix(seen.rgb, cover, light), 1.0);
#else
  float drawnFar = halfOn * smoothstep(${wp[0].toFixed(1)} * pixel, ${wp[1].toFixed(1)} * pixel, drawnOut);
  vec3 colour = vec3(0.0);
  if (drawnFar < 1.0) {
    vec3 cover;
    vec4 seen = rays(centre + seenAt, way, drawnOut, cover);
    colour = paper * (1.0 - cover) + mix(seen.rgb, cover, light);
  }
  if (drawnFar > 0.0) colour = mix(colour, texture2D(halfRays, vUv).rgb, drawnFar);
  colour *= 1.0 + ${xp.wakeGlint.toFixed(4)} * clamp(curl / 500.0, -1.0, 1.0);
  if (speed > 1.0) {
    // the flow read a little ahead and a little behind: where it rises or falls the three colours part
    vec2 apart = flow / speed * ${xp.noseApart.toFixed(1)} * pixel / size;
    vec3 parted = vec3(length(texture2D(wake, vUv + apart).xy), speed, length(texture2D(wake, vUv - apart).xy));
    vec2 round = (vUv * size - nose) / (${xp.noseRound.toFixed(3)} * shorter);
    colour +=
      ${xp.noseSplit.toFixed(3)} * exp(-dot(round, round)) * (parted - dot(parted, vec3(1.0 / 3.0))) / ${hp.toFixed(1)};
  }

  colour = mix(colour, dim.rgb, dim.a);
  // a few steps of grey over a wide round show as rings without grain
  float noise = fract(52.9829189 * fract(dot(gl_FragCoord.xy + 17.0, vec2(0.06711056, 0.00583715))));
  gl_FragColor = vec4(colour + (noise - 0.5) / 255.0, 1.0);
#endif
}
`,Op=(e,t)=>!t&&e.appear<=0&&e.prism<=0&&e.edges<=0&&(e.warp?.k??0)<=0&&(e.warp?.z??1)===1&&(e.dim?.[3]??0)<=0&&Object.values(e.distort??{}).every(([e,,t])=>e<=0&&t<=0),kp=`
uniform sampler2D seen;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(seen, vUv);
}
`;function Ap(){let e={sheets:{value:lp},mask:{value:lp},cell:{value:new Z(1,1)},wake:{value:lp},stirred:{value:0},nose:{value:new Z},size:{value:new Z(1,1)},centre:{value:new Z},ring:{value:new Z(150,55)},appear:{value:0},prism:{value:0},edges:{value:1},dFlare:{value:new Q},dPrism:{value:new Q},dBend:{value:new Q},dTunnel:{value:new Q},warp:{value:new Z(0,1)},paper:{value:new Q(245/255,245/255,247/255)},dim:{value:new Ki(0,0,0,0)},halfRays:{value:lp},halfOn:{value:0},pixel:{value:1}},t=t=>new mc({uniforms:e,defines:t,vertexShader:Ep,fragmentShader:Dp,depthTest:!1,depthWrite:!1}),n=t({}),r=t({HALF:1}),i=new mc({uniforms:{seen:{value:lp}},vertexShader:Ep,fragmentShader:kp,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205}),a=null,o=new ns(new ac(2,2),n);o.frustumCulled=!1;let s=new Pa;s.add(o);let c=new yl(-1,1,1,-1,0,1),l=pp(),u=e.paper.value,d=e=>{e.setRenderTarget(null);let t=e.state.buffers.color;t.setClear(u.x,u.y,u.z,1,!0),e.clear(),t.setClear(0,0,0,0,!0)};return{ground:d,over(e,t,r){d(e),i.uniforms.seen.value=t,o.material=i;let a=e.getPixelRatio();r&&(e.setScissor(r.x/a,r.y/a,r.width/a,r.height/a),e.setScissorTest(!0)),e.render(s,c),e.setScissorTest(!1),o.material=n},draw(t,i,u,d,f){let p=e,m=l.of(t,i,u.width,u.height);p.mask.value=m.texture,p.cell.value.set(1/(m.width*32),1/(m.height*32)),p.sheets.value=i,p.wake.value=d??lp,p.stirred.value=+!!d,p.nose.value.set(...f),p.size.value.set(u.width,u.height),p.centre.value.set(...u.centre??[u.width/2,u.height/2]),p.ring.value.set(u.R,u.a),p.pixel.value=u.pixel,p.appear.value=u.appear,p.prism.value=u.prism,p.edges.value=u.edges;let h=u.distort;p.dFlare.value.set(...h?.flare??[0,0,0]),p.dPrism.value.set(...h?.prism??[0,0,0]),p.dBend.value.set(...h?.bend??[0,0,0]),p.dTunnel.value.set(...h?.tunnel??[0,0,0]),p.warp.value.set(u.warp?.k??0,u.warp?.z??1),p.dim.value.set(...u.dim??[0,0,0,0]);let g=u.prism>0||u.edges>0||(u.warp?.k??0)>0||!!d||Object.values(h??{}).some(([e,,t])=>e>0&&t>0);if(p.halfOn.value=+!!g,g){let[e,n]=[Math.ceil(u.width/2),Math.ceil(u.height/2)];(!a||a.width!==e||a.height!==n)&&(a?.dispose(),a=new Ji(e,n,{type:Dn,depthBuffer:!1})),o.material=r,t.setRenderTarget(a),t.render(s,c),p.halfRays.value=a.texture}o.material=n,t.setRenderTarget(null),t.render(s,c)},dispose(){l.dispose(),a?.dispose(),o.geometry.dispose(),n.dispose(),r.dispose(),i.dispose()}}}var jp={x:0,y:0,vx:0,vy:0,active:!1},Mp=1950,Np=4.4,Pp=4.8,Fp=2e3;function Ip(e,t,n){if(!n.active)return{fx:0,fy:0,w:0};let r=e.x-n.x,i=e.y-n.y,a=Math.hypot(r,i);if(a>=t)return{fx:0,fy:0,w:0};let o=(1-(a/t)**2)**2,s=Math.hypot(n.vx,n.vy),c=Math.min(s,Fp),l=a>.001?r/a:s>0?n.vx/s:0,u=a>.001?i/a:s>0?n.vy/s:0,d=s>0?c/s*Pp:0;return{fx:o*(l*(Mp+Np*c)+n.vx*d),fy:o*(u*(Mp+Np*c)+n.vy*d),w:o}}var Lp=.08,Rp=.35,zp=1.45,Bp=(e,t)=>Lp+.92*gt(Rp*t,zp*t,e),Vp=2*Math.PI/1.15,Hp=.56;function Up(e,t,n,r=Vp,i=Hp){let a=(e.v+(t-r*r*e.x)*n)/(1+2*i*r*n);return{x:e.x+a*n,v:Y(a,-1e5,1e5)}}function Wp(e,t,n){let r=n*(Math.PI-B);if(e<0)return{rho:t-n,z:e,along:0,up:1};let i=Math.PI-Math.min(e,r)/n,a=Math.max(0,e-r),o=Math.sin(i),s=-Math.cos(i);return{rho:t+n*Math.cos(i)+a*o,z:n*Math.sin(i)+a*s,along:o,up:s}}var Gp=e=>Y(Math.min(e.width,e.height)/900,.55,1.15),Kp=e=>{let t=Math.min(e.width,e.height);return{R:Y(.312*t,110,350),a:Y(.11*t,39,125)}},qp=(e,t)=>Math.min(t.width/2/Math.max(1e-9,Math.abs(Math.cos(e))),t.height/2/Math.max(1e-9,Math.abs(Math.sin(e)))),Jp=(e,t)=>325*Gp(t)*e*.8,Yp=e=>Math.hypot(e.width,e.height)/2+Jp(be[1],e),Xp=(1+ft)**oe-ft**oe,Zp=e=>((e+ft)**oe-ft**oe)/Xp,Qp=e=>(e*Xp+ft**oe)**(1/oe)-ft,$p=e=>e-2*(1-Math.exp(-e/2)),em=e=>{let t=0,n=e+2;for(let r=0;r<48;r++){let r=(t+n)/2;$p(r)<e?t=r:n=r}return(t+n)/2},tm=e=>V-V/ve-e,nm=e=>V/(V-e);function rm(e,t,n){let r=rt(Math.imul(e+1,2654435761)),i=e*ge+(r()*2-1)*.1,a=vt(be[0],be[1],r()),o=Math.cos(i),s=Math.sin(i),c=325*Gp(t),l=(n>=1?c/n:c)/2,u=Kp(t),d=u.R/ve,f=u.a/ve,p=-l-.1*f,m=f*(Math.PI-B)+l,h=Wp(m,d,f),g=tm(f)+h.z,_=Math.PI/2-i,v=qe(N([s*(Math.PI/2-B),o*(Math.PI/2-B),0]),fe(0,0,_)),y=qp(i,t)+Jp(a,t),b=Yp(t),x=ve*(m-p);return{n:e,angle:i,cos:o,sin:s,roll:_,half:l,near:a,R:d,a:f,from:p,off:m,leaves:v,rho:h.rho,z:g,exit:y,freeAt:em(10*Qp(x/b)),life:em(10*Qp((x+y-h.rho*nm(g))/b)),reach:b}}var im=(e,t,n,r,i)=>{let a=i*i,o=a*i;return(2*o-3*a+1)*e+(o-2*a+i)*t+(3*a-2*o)*n+(o-a)*r},am=.4;function om(e,t){let n=e.reach*Zp($p(Y(t,0,e.life))/10),r=ve*(e.off-e.from),i,a,o=e.from+n/ve,s=t<e.freeAt,c=s?0:gt(e.freeAt,e.freeAt+am,t);if(s){let t=Wp(o,e.R,e.a);i=t.rho,a=tm(e.a)+t.z}else{let t=e.exit-e.rho*nm(e.z),o=Y((n-r)/t,0,1),s=e.exit/e.near,c=V-V/e.near,l=Math.hypot(s-e.rho,c-e.z);i=im(e.rho,Math.sin(B)*l,s,s-e.rho,o),a=im(e.z,-Math.cos(B)*l,c,c-e.z,o)}let l=nm(a),u=i*l;return{r:u,s:o,wrapped:s,toward:c,m:l,x:u*e.cos,y:u*e.sin}}function sm(e,t,n){return n<=0?Math.min(e,t):e<=t-n?e:e>=t+n?t:t-(t+n-e)**2/(4*n)}var cm={full:2400,bend:1.1,flutter:.05,takes:10,lets:5,swing:4},lm=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],um=(e,t,n,r)=>{let i=Math.abs(n)>Math.abs(e)?cm.takes:cm.lets,a=e-n,o=t+i*a,s=Math.exp(-i*r);return[n+(a+o*r)*s,(t-i*o*r)*s]};function dm(e,t,n,r,i=1){if(!e)return{at:t,bend:0,bends:0,axis:0,flutter:0,flutters:0,phase:0};if(r<=0)return{...e,at:t};let a=i/r,o=[(t[0]-e.at[0])*a,(t[1]-e.at[1])*a,(t[2]-e.at[2])*a],s=Math.hypot(...o),c=lm(o,ke(n,[0,0,1])),l=lm(o,ke(n,[1,0,0])),u=lm(o,ke(n,[0,1,0])),d=Math.tanh(-c/cm.full)*cm.bend,f=Math.tanh(s/cm.full)*cm.flutter,p=Math.hypot(l,u)>.3*Math.abs(c)&&s>1?Math.atan2(u,l):0,[m,h]=um(e.bend,e.bends,d,r),[g,_]=um(e.flutter,e.flutters,f,r);return{at:t,bend:m,bends:h,axis:e.axis+Math.atan(Math.tan(p-e.axis))*(1-Math.exp(-r*cm.swing)),flutter:g,flutters:_,phase:e.phase+r*(6+12*Math.min(1,s/cm.full))}}function fm(e,t,n){let[r,i]=um(e.bend,e.bends,0,n),[a,o]=um(e.flutter,e.flutters,0,n);return{at:t,bend:r,bends:i,axis:e.axis,flutter:a,flutters:o,phase:e.phase}}var pm=Math.PI/8,mm=e=>Math.atan2(Math.sin(2*e),Math.cos(2*e))/2,hm=e=>Math.atan2(Math.sin(e),Math.cos(e));function gm(e,t,n,r=!1){let i=r?t.bend*(1-gt(0,.45,Math.abs(e.bend))):t.bend,a=n=>e.bend*Math.cos(n-e.axis)**2+i*Math.cos(n-t.axis)**2,[o,s,c,l]=[e.axis,t.axis].flatMap(e=>[Math.cos(e),Math.sin(e)]),[u,d,f]=[e.bend*o*o+i*c*c,e.bend*s*s+i*l*l,e.bend*o*s+i*c*l],p=Math.atan2(2*f,u-d)/2,m=Math.abs(e.bend)+Math.abs(i)<1e-9?t.axis:Math.abs(a(p))>=Math.abs(a(p+Math.PI/2))?p:p+Math.PI/2,h=t.line??m,[g,_]=[m,m+Math.PI/2].map(e=>Math.abs(a(e))),v=g>1e-9?((g-_)/g)**2:0,y=t.aim===void 0?0:mm(m-t.aim),b=h+(n>0&&Math.abs(y)<pm?y*v:0),x=b+mm(m-b)*(1-Math.exp(-n*cm.swing)),S=e.flutter*Math.cos(e.phase)+t.flutter*Math.cos(t.phase),C=e.flutter*Math.sin(e.phase)+t.flutter*Math.sin(t.phase);return[{...e,bend:a(x),axis:x,flutter:Math.hypot(S,C),phase:S===0&&C===0?e.phase:Math.atan2(C,S)},{...t,line:x,aim:m}]}var _m=28,vm={near:10,far:V*40},ym=`
uniform vec3 ring;
// its middle, its turn; its shape (width, height) and how much of its picture is cut away; its bend, the line it
// bends along, its wave and where its wave is; its lens (zoom, shift) and its size; on the tube: how far its own pose
// it is, how far along the way over the ring, its roll, its size there (none: not on the tube), the way it goes and
// how far it is pushed; its corner, cut, haze and how much of it shows; its drum; the drum's shade, its slot of the
// depth, how near and how far it can be; its picture's layer
attribute vec3 iAt;
attribute vec4 iQ;
attribute vec4 iShape;
attribute vec4 iPaper;
attribute vec4 iLens;
attribute vec4 iTube;
attribute vec4 iWay;
attribute vec4 iLook;
attribute vec4 iDrum;
attribute vec4 iMore;
attribute float iLayer;
uniform float slots;
varying vec2 vUv;
varying vec3 vNormal;
// how much of it shows (on the tube), how much its drum darkens it, and its depth
varying vec3 vLit;
// how much of its picture is cut away (x, y), its corner and its width over its height; its cut, its haze, how much of
// it shows and its picture's layer
flat varying vec4 vCut;
flat varying vec4 vLook;

vec3 turned(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

// where a lane flat as far as drum.y each way, then over a drum of radius drum.z away from the lens, has a point a from
// its middle: how far up, how far away, how far turned (a quarter round at most: edge on, and all past it there too)
vec3 laneAt(float a, vec4 drum) {
  float over = abs(a) - drum.y;
  if (over <= 0.0) return vec3(a, 0.0, 0.0);
  float turn = min(over / drum.z, 1.5707963);
  return vec3(sign(a) * (drum.y + drum.z * sin(turn)), -drum.z * (1.0 - cos(turn)), sign(a) * turn);
}

void main() {
  vUv = uv;
  vCut = vec4(iShape.zw, iLook.x, iShape.x / iShape.y);
  vLook = vec4(iLook.yzw, iLayer);
  vec2 dims = iShape.xy;
  float bend = iPaper.x;
  float axis = iPaper.y;
  float flutter = iPaper.z;
  float size = iLens.w;
  vec4 drum = iDrum;
  // the quad is a unit square: a card is drawn as large as its shape
  vec2 drawn = position.xy * dims;
  float c = cos(axis);
  float s = sin(axis);
  float across = drawn.x * c + drawn.y * s;
  float length = -drawn.x * s + drawn.y * c;
  float bent = across;
  float z = 0.0;
  float tilt = 0.0;
  if (abs(bend) > 1e-4) {
    float r = dims.x / bend;
    tilt = across / r;
    bent = r * sin(tilt);
    z = r * (1.0 - cos(tilt));
  }
  // half a wave along its longer side: it sways, never folds into an S
  float k = 3.14159265 / max(dims.x, dims.y);
  float wave = length * k + iPaper.w;
  z += flutter * sin(wave);
  vec3 lie = normalize(vec3(-sin(tilt), -flutter * k * cos(wave), cos(tilt)));
  vec3 local = vec3(bent * c - length * s, bent * s + length * c, z);
  // on a lane over drums the card bends over its drum point by point, from its middle (drum.x), in its own frame turned
  // as its middle is, and darkens as it turns; as much of it as drum.w says
  float darker = 0.0;
  if (drum.w > 0.0) {
    vec3 m = laneAt(drum.x, drum);
    vec3 p = laneAt(drum.x + drawn.y, drum);
    float up = p.x - m.x;
    float back = p.y - m.y;
    vec3 rolled = vec3(drawn.x, up * cos(m.z) - back * sin(m.z), up * sin(m.z) + back * cos(m.z));
    local = mix(local, rolled, drum.w);
    darker = drum.w * iMore.x * min(1.0, 1.0 - cos(p.z));
  }
  vec3 world = iAt + turned(iQ, local * size);
  vec3 normal = normalize(turned(iQ, vec3(lie.x * c - lie.y * s, lie.x * s + lie.y * c, lie.z)));
  float shown = 1.0;
  if (iTube.w > 0.0) {
    float toward = iTube.x;
    vec2 heading = iWay.xy;
    float rc = cos(iTube.z);
    float rs = sin(iTube.z);
    vec2 d = vec2(drawn.x * rc - drawn.y * rs, drawn.x * rs + drawn.y * rc) * iTube.w;
    vec2 side = vec2(-heading.y, heading.x);
    float at = iTube.y + dot(d, heading);
    float top = ring.y * 1.5707963;
    float off = ring.y * ${(Math.PI-B).toFixed(6)};
    float rho = ring.x - ring.y;
    float h = at;
    vec2 goes = vec2(0.0, 1.0);
    if (at >= 0.0) {
      float t = 3.14159265 - min(at, off) / ring.y;
      float past = max(0.0, at - off);
      goes = vec2(sin(t), -cos(t));
      rho = ring.x + ring.y * cos(t) + past * goes.x;
      h = ring.y * sin(t) + past * goes.y;
    }
    vec3 tube = vec3(heading * rho + side * dot(d, side) + iWay.zw, ring.z - ring.y + h);
    // nothing of it shows in the hole: it comes to be seen as it rounds the tube's inner side
    world = mix(tube, world, toward);
    normal = normalize(mix(vec3(heading * -goes.y, goes.x), normal, toward));
    shown = mix(smoothstep(0.0, 0.42 * top, at), 1.0, toward);
  }
  vNormal = mat3(viewMatrix) * normal;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  // Each card lies on a depth of its own, the later nearer than any before it, so it is drawn whole over them however
  // they cross; within it, each point as far as it is between the nearest and the farthest any of it can be (its
  // depths), so a card that curls over itself still hides itself right, finer than the lens's own depth (plan 73). (It
  // goes with the distance as a line does, so it is told point by point as exactly as the distance.)
  float far = clamp((gl_Position.w - iMore.z) / (iMore.w - iMore.z), 0.0, 1.0);
  vLit = vec3(shown, darker, (slots - 1.0 - iMore.y + 0.999 * far) / slots);
  gl_Position.xy = gl_Position.xy * iLens.x + iLens.yz * gl_Position.w;
}
`,bm=`
precision highp sampler2DArray;
// (a run of cards whose pictures lie on the layers is drawn by one way of this shader, any other by another: no card
// samples two textures to keep one)
#ifdef LAYERED
uniform sampler2DArray layers;
#else
uniform sampler2D one;
#endif
uniform float shade;
uniform vec4 box;
uniform float boxRound;
uniform vec4 frame;
uniform vec3 ground;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vLit;
flat varying vec4 vCut;
flat varying vec4 vLook;

void main() {
  if (vLit.x < 0.003) discard;
  float corner = vCut.z;
  float clip = vLook.x;
  vec2 uv = vUv;
  vec3 n = normalize(vNormal);
  // turned over, the sheet shows the same picture the right way round
  if (!gl_FrontFacing) {
    uv.x = 1.0 - uv.x;
    n = -n;
  }
  // the picture cut to fill a card of a shape of its own, about its middle: its layer, or a texture of its own
  vec2 at = 0.5 + (uv - 0.5) * vCut.xy;
#ifdef LAYERED
  vec4 col = texture(layers, vec3(at, vLook.w));
#else
  vec4 col = texture2D(one, at);
#endif
  // how many pixels in from its edge this is, round its corners where they are rounded (a share of its width)
  vec2 px = max(fwidth(vUv), vec2(1e-6));
  vec2 halfSize = 0.5 / px;
  float r = 0.5 * corner * (1.0 / px.x + vCut.w / px.y);
  vec2 q = abs(vUv - 0.5) / px - (halfSize - r);
  float inside = r - length(max(q, 0.0)) - min(max(q.x, q.y), 0.0);
  // a hair of shade along the edge: a white poster still has a shape on a ground nearly as white
  col.rgb *= 1.0 - 0.14 * (1.0 - smoothstep(0.0, 1.4, inside));
  // lit from the upper left, in front: full face on, darker as it turns away
  float lit = dot(n, normalize(vec3(-0.35, 0.5, 0.8)));
  float dim = 1.0 - shade * (1.0 - smoothstep(-0.1, 0.8, lit));
  // the wall's frame cuts it: the frame that closes in, or the wall's own
  float keep = 1.0;
  if (clip > 0.0) {
    vec4 b = clip > 1.0 ? frame : box;
    vec2 f = gl_FragCoord.xy;
    float br = clip > 1.0 ? 0.0 : boxRound;
    if (br > 0.0) {
      vec2 o = abs(f - 0.5 * (b.xy + b.zw)) - (0.5 * (b.zw - b.xy) - br);
      keep = clamp(br - length(max(o, 0.0)) - min(max(o.x, o.y), 0.0) + 0.5, 0.0, 1.0);
    } else
      keep = clamp(f.x - b.x + 0.5, 0.0, 1.0) * clamp(b.z - f.x + 0.5, 0.0, 1.0) *
        clamp(f.y - b.y + 0.5, 0.0, 1.0) * clamp(b.w - f.y + 0.5, 0.0, 1.0);
  }
  // the edge is softened here, over its last pixel: cheaper by far than drawing every pixel four times over
  float a = vLit.x * clamp(inside, 0.0, 1.0) * keep * vLook.z;
  // what does not show leaves no depth behind, or it would hide the rest of the card drawn after it
  if (a < 0.004) discard;
  gl_FragDepthEXT = vLit.z;
  gl_FragColor = vec4(mix(col.rgb * dim * (1.0 - vLit.y), ground, vLook.y), a);
}
`,xm={least:.5,follows:.08};function Sm(e,t,n,r){let i=Math.PI/Math.max(n,r),a=Math.abs(e)/n+Math.abs(t)*i*i,o=1/(xm.least*n);if(a<=o/2)return[e,t];let s=sm(a,o,o/2)/a;return[e*s,t*s]}function Cm(e,t,n){if(!e||n<=0)return t;let r=1-Math.exp(-Math.min(n,.1)/xm.follows);return{bend:e.bend+(t.bend-e.bend)*r,flutter:e.flutter+(t.flutter-e.flutter)*r,axis:e.axis+mm(t.axis-e.axis)*r,phase:e.phase+hm(t.phase-e.phase)*r}}function wm(e,t,n,r,i){let a=Math.hypot(t,n)/2,o=e.size*(a+Math.abs(r)),[s,c]=[e.at[2]-o,e.at[2]+o],{tube:l}=e;if(l){let e=i.a/ve,t=V-V/ve-e,n=e+Math.abs(l.along)+l.size*a;[s,c]=[Math.min(s,t-n),Math.max(c,t+n)]}let u=e=>Math.min(vm.far,Math.max(vm.near,e)),d=u(V-c);return[d,Math.max(d+.001,u(V-s))]}async function Tm(e,t=async()=>{}){let n=e=>e.texture.image,r=n(e[0]);if(!r?.width||!r.height||typeof document>`u`)return null;let[i,a]=[r.width,r.height],o=e.flatMap((e,t)=>{let r=n(e);return r?.width===i&&r.height===a?[t]:[]}),s=document.createElement(`canvas`);[s.width,s.height]=[i,a];let c=s.getContext(`2d`,{willReadFrequently:!0}),l=i*4,u=new Uint8Array(i*a*4*o.length);for(let[n,r]of o.entries()){n&&await t(),c.clearRect(0,0,i,a),c.drawImage(e[r].texture.image,0,0);let o=c.getImageData(0,0,i,a).data;for(let e=0;e<a;e++)u.set(o.subarray((a-1-e)*l,(a-e)*l),(n*a+e)*l)}let d=new Yi(u,i,a,o.length);return d.colorSpace=``,d.magFilter=_n,d.minFilter=yn,d.generateMipmaps=!0,d.anisotropy=e[0].texture.anisotropy,d.needsUpdate=!0,d.onUpdate=()=>{d.image.data=null},{texture:d,layer:new Map(o.map((e,t)=>[e,t]))}}var Em={iAt:3,iQ:4,iShape:4,iPaper:4,iLens:4,iTube:4,iWay:4,iLook:4,iDrum:4,iMore:4,iLayer:1};function Dm(e,t,n=null){let r=new Pa,i=new ac(1,1,_m,_m),a={ring:{value:new Q},shade:{value:.3},box:{value:new Ki},boxRound:{value:0},frame:{value:new Ki},ground:{value:new Q(...t)},slots:{value:1},layers:{value:n?.texture??null}},o=[],s=e=>{let t=new Cl;t.index=i.index,t.setAttribute(`position`,i.getAttribute(`position`)),t.setAttribute(`uv`,i.getAttribute(`uv`));let n={};for(let[r,i]of Object.entries(Em)){n[r]=new Float32Array(e*i);let a=new bs(n[r],i);a.setUsage(Br),t.setAttribute(r,a)}return{g:t,arrays:n}},c=(e,t)=>{for(;o.length<=e;){let{g:e,arrays:t}=s(64),n=e=>new mc({uniforms:{...a,one:{value:lp}},defines:e?{LAYERED:1}:{},vertexShader:ym,fragmentShader:bm,side:2,transparent:!0,forceSinglePass:!0}),i={layered:n(!0),own:n(!1)},c=new ns(e,i.layered);c.frustumCulled=!1,r.add(c),o.push({mesh:c,materials:i,arrays:t,room:64})}let n=o[e];if(t>n.room){let e=Math.max(t,2*n.room);n.mesh.geometry.dispose();let{g:r,arrays:i}=s(e);n.mesh.geometry=r,n.arrays=i,n.room=e}return n},l=new Map;return{scene:r,update(t,r,i,s,u=0){let d=l;l=new Map,a.ring.value.set(r.R/ve,r.a/ve,V-V/ve),a.box.value.set(...s.box),a.boxRound.value=s.round??0,a.frame.value.set(...s.frame),a.slots.value=t.length;let f=e=>n?.layer.has(e)?-1:e,p=-1,m=0;for(let n=0;n<=t.length;n++)if(!(n<t.length&&n>m&&f(t[n].picture)===f(t[m].picture))&&(n>m||n===t.length)){if(n>m){p++;let r=n-m,i=c(p,r),a=t[m].picture;i.mesh.material=f(a)<0?i.materials.layered:i.materials.own,i.materials.own.uniforms.one.value=f(a)<0?lp:e[a].texture,i.mesh.renderOrder=p,i.mesh.visible=!0,i.mesh.geometry.instanceCount=r;for(let e=0;e<r;e++)h(i.arrays,e,m+e);for(let e of Object.keys(Em)){let t=i.mesh.geometry.getAttribute(e);t.clearUpdateRanges(),t.addUpdateRange(0,r*Em[e]),t.needsUpdate=!0}}m=n}for(let e=p+1;e<o.length;e++)o[e].mesh.visible=!1;function h(a,o,s){let c=t[s],f=(e,...t)=>a[e].set(t,o*Em[e]);f(`iAt`,...c.at),f(`iQ`,...c.q);let{aspect:p}=e[c.picture],[m,h]=p>=1?[1,1/p]:[p,1],[g,_]=c.shape??[m,h],v=g/_>m/h;f(`iShape`,g,_,v?1:g/_/(m/h),v?m/h/(g/_):1);let[y,b]=Sm(c.bend,c.flutter,g,_),x=Cm(d.get(c.key),{bend:y,flutter:b,axis:c.axis,phase:c.phase},u);l.set(c.key,x),f(`iPaper`,x.bend,x.axis,x.flutter,x.phase);let S=c.lens??i;f(`iLens`,S.zoom,2*S.shift[0]/i.width,-2*S.shift[1]/i.height,c.size);let{tube:C}=c;C?(f(`iTube`,C.toward,C.along,C.roll,C.size),f(`iWay`,Math.cos(C.heading),-Math.sin(C.heading),...C.pushed)):f(`iTube`,1,0,0,0),f(`iLook`,c.corner,c.clip>1?2:+(c.clip>0),c.haze,c.shows??1);let{drum:w}=c;w&&w.weight>0?f(`iDrum`,w.middle/c.size,w.flat/c.size,w.radius/c.size,w.weight):f(`iDrum`,0,0,1,0),f(`iMore`,w&&w.weight>0?w.shade:0,s,...wm(c,g,_,x.flutter,r)),f(`iLayer`,n?.layer.get(c.picture)??0)}},onLayers:e=>!!n?.layer.has(e),async prepare(e,t,i){n&&e.initTexture(n.texture);let a=c(0,1),[o,s,l]=[a.mesh.visible,a.mesh.material,a.mesh.geometry.instanceCount],u=[];for(let n of[a.materials.layered,a.materials.own]){Object.assign(a.mesh,{material:n,visible:!0}),a.mesh.geometry.instanceCount=0;let o=e.getRenderTarget();e.setRenderTarget(i),u.push(e.compileAsync(r,t)),e.setRenderTarget(o)}Object.assign(a.mesh,{visible:o,material:s}),a.mesh.geometry.instanceCount=l,await Promise.all(u)},dispose(){i.dispose(),n?.texture.dispose();for(let e of o)e.mesh.geometry.dispose(),e.materials.layered.dispose(),e.materials.own.dispose()}}}var Om=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,km=`
precision highp float;
uniform sampler2D field;
uniform vec2 texel;
uniform vec2 frame;
uniform float dt;
uniform vec2 from;
uniform vec2 to;
uniform vec2 force;
uniform float radius;
uniform float take;
varying vec2 vUv;

vec2 at(vec2 uv) {
  return texture2D(field, uv).xy;
}

void main() {
  vec2 uv = vUv - at(vUv) * dt / frame;
  vec2 e = vec2(texel.x, 0.0);
  vec2 n = vec2(0.0, texel.y);
  vec2 c = at(uv);
  vec2 E = at(uv + e);
  vec2 W = at(uv - e);
  vec2 N = at(uv + n);
  vec2 S = at(uv - n);
  vec2 NE = at(uv + e + n);
  vec2 NW = at(uv - e + n);
  vec2 SE = at(uv + e - n);
  vec2 SW = at(uv - e - n);
  // the slope of how much it gathers: pushed down that slope it spreads to the sides and rolls up
  vec2 gathers = vec2(
    E.x - 2.0 * c.x + W.x + 0.25 * (NE.y - NW.y - SE.y + SW.y),
    N.y - 2.0 * c.y + S.y + 0.25 * (NE.x - NW.x - SE.x + SW.x)
  );
  c = (c + 0.2 * gathers) * exp(-dt / ${_p.toFixed(3)});

  vec2 p = vUv * frame;
  vec2 stroke = to - from;
  float along = clamp(dot(p - from, stroke) / max(dot(stroke, stroke), 1e-6), 0.0, 1.0);
  float d = length(p - from - stroke * along);
  c += (force - c) * take * exp(-d * d / (radius * radius)) * step(1e-3, dot(force, force));

  gl_FragColor = vec4(c, (E.y - W.y) - (N.x - S.x), 1.0);
}
`,Am=.05,jm=22;function Mm(e){if(!(e.extensions.has(`EXT_color_buffer_float`)||e.extensions.has(`EXT_color_buffer_half_float`)))return null;let t=new mc({uniforms:{field:{value:lp},texel:{value:new Z},frame:{value:new Z},dt:{value:0},from:{value:new Z},to:{value:new Z},force:{value:new Z},radius:{value:40},take:{value:0}},vertexShader:Om,fragmentShader:km,depthTest:!1,depthWrite:!1}),n=new ns(new ac(2,2),t);n.frustumCulled=!1;let r=new Pa;r.add(n);let i=new yl(-1,1,1,-1,0,1),a=bp(),o=null,s=!1,c=[0,0],l=(e,t)=>new Ji(e,t,{type:Dn,depthBuffer:!1});return{get live(){return s},get nose(){return c},get texture(){return o[0].texture},step(n,u,d){let f=yp(d);if(!o||o[0].width!==f.width||o[0].height!==f.height){o?.forEach(e=>e.dispose()),o=[l(f.width,f.height),l(f.width,f.height)];for(let t of o)e.setRenderTarget(t),e.clear()}let p=a.feed(n,u,d);if(s=p.live,u.active&&(c=p.to),!s)return;let m=t.uniforms;m.field.value=o[0].texture,m.texel.value.set(1/f.width,1/f.height),m.frame.value.set(d.width,d.height),m.dt.value=n,m.from.value.set(...p.from),m.to.value.set(...p.to),m.force.value.set(...p.force),m.radius.value=Am*Math.min(d.width,d.height),m.take.value=1-Math.exp(-n*jm),e.setRenderTarget(o[1]),e.render(r,i),o=[o[1],o[0]]},dispose(){o?.forEach(e=>e.dispose()),n.geometry.dispose(),t.dispose()}}}var Nm=1e3,Pm=.22,Fm=2.6,Im=620;function Lm(e){let t=rt(e),n=Array.from({length:4},()=>{let e=t()*2-1,n=t()*Math.PI*2,r=[Math.sqrt(1-e*e)*Math.cos(n),Math.sqrt(1-e*e)*Math.sin(n),e],i=Me(Se(r,Math.abs(r[0])<.9?[1,0,0]:[0,1,0])),a=2*Math.PI/Im*(.7+.6*t()),o=ot(r,a),s=Pm*Nm/a;return{k:o,along:ot(Se(o,i),s),swirl:ot(i,Fm),phase:t()*Math.PI*2,beat:(1+Math.floor(t()*3))*(t()<.5?-1:1)}});return{flow:Nm,toWay:1.6,gusts:.35,sway:[0,0,0,0].map(()=>t()*Math.PI*2),modes:n}}function Rm(e,t){let n=2*Math.PI*t;return 1+e.gusts*(.6*Math.sin(n+e.sway[0])+.4*Math.sin(2*n+e.sway[1]))}function zm(e,t,n,r,i){let a=2*Math.PI*r,o=e.flow*e.gusts*.25,s=-e.toWay*n[0]+o*Math.sin(a+e.sway[2]),c=-e.toWay*n[1]+o*.6*Math.sin(2*a+e.sway[3]),l=0;for(let n of e.modes){let e=Math.cos(Te(n.k,t)+n.phase+n.beat*a);s+=e*n.along[0],c+=e*n.along[1],l+=e*n.along[2]}return[s*i,c*i,l*i]}function Bm(e,t,n,r){let i=2*Math.PI*n,a=[0,0,0];for(let n of e.modes){let e=Math.sin(Te(n.k,t)+n.phase+n.beat*i)*r;a[0]+=e*n.swirl[0],a[1]+=e*n.swirl[1],a[2]+=e*n.swirl[2]}return a}var Vm=8,Hm=480,Um=4,Wm=.22,Gm=1.3,Km=e=>gt(0,.14,e)*(.5+.5*(1-gt(.14,.7,e))),qm=34;function Jm(e){let t=new Float32Array(968),{air:n}=e,r=rt(Math.imul(e.seed+1,2246822507)),i=(e=1)=>(r()*2-1)*e,a=n.flow,o=1/Hm,s=Me([Wm*Math.cos(e.heading),-.22*Math.sin(e.heading),1]),c=[i(4e3),i(4e3),i(4e3)],l=[0,0,0],u=[0,0,0],d=[...e.from],f=[0,0,0];for(let r=0;r<=Hm;r++){let i=r*o,p=Km(i),m=e.t0+i*e.span,h=[c[0]+l[0],c[1]+l[1],c[2]+.35*a*i],g=zm(n,h,l,m,p),_=ke(d,[0,0,1]),v=[g[0]-u[0],g[1]-u[1],g[2]-u[2]],y=.35*p*a*Rm(n,m),b=Me([s[0]*p,s[1]*p,s[2]]),x=[v[0]+y*b[0],v[1]+y*b[1],v[2]+y*b[2]];if(r%Um===0){let e=Y(Te(x,_)/(.8*a),-1,1),n=Y(Math.sqrt(Te(x,x))/(.8*a),0,1);t.set([l[0]*Gm,l[1]*Gm,...d,e,n],r/Um*Vm)}if(r===Hm)break;let S=Te(v,_),C=[v[0]-S*_[0],v[1]-S*_[1],v[2]-S*_[2]],w=Math.sqrt(Te(C,C)),T=[0,1,2].map(e=>8*S*Math.abs(S)/a*_[e]+.8*w/a*C[e]),E=Bm(n,h,m,p),D=Se(_,b),O=qm*(Te(b,_)<0?-1:1),k=ke(d,[0,1,0]),A=Math.atan2(-k[0],k[1])-e.roll,j=-68*Math.sin(Math.atan2(Math.sin(A),Math.cos(A))/2),M=[0,1,2].map(e=>O*D[e]+(e===2?j:0)+3*(E[e]-f[e])-f[e]);u=[u[0]+T[0]*o,u[1]+T[1]*o,u[2]+T[2]*o],l=[l[0]+u[0]*o,l[1]+u[1]*o,0],f=[f[0]+M[0]*o,f[1]+M[1]*o,f[2]+M[2]*o];let N=qe([f[0],f[1],f[2],0],d);d=pt([d[0]+.5*o*N[0],d[1]+.5*o*N[1],d[2]+.5*o*N[2],d[3]+.5*o*N[3]])}return t}function Ym(e,t){let n=Y(t,0,1)*120,r=Math.min(120,Math.floor(n)),i=n-r,a=t=>{let n=t*Vm;return{slip:[e[n],e[n+1]],q:[e[n+2],e[n+3],e[n+4],e[n+5]],press:e[n+6],rush:e[n+7]}},o=a(r);if(i===0)return o;let s=a(r+1),c=(e,t)=>e+(t-e)*i;return{slip:[c(o.slip[0],s.slip[0]),c(o.slip[1],s.slip[1])],q:U(o.q,s.q,i),press:c(o.press,s.press),rush:c(o.rush,s.rush)}}var Xm=1/120,Zm=.1,Qm=.6,$m={until:2.6,times:1.8},eh={times:6,over:2.5},th=.8,nh=e=>1+(eh.times-1)*(1-gt(0,eh.over,e)),rh=.42,ih=190,ah=.003,oh=8e-4,sh=9e-6,ch=2*Math.PI/1.5,lh=.45,uh=8,dh=.6,fh=e=>dh*Math.tanh(e/dh),ph=520,mh=1.5,hh=70,gh=3,_h=6,vh=2.5,yh=.6;function bh(e){let t=Lm(e.seed??5),n=e.frame,r=0,i=0,a=0,o=Qm,s=[],c=()=>{let t=0;for(let r=0;r<64;r++)t+=rm(r,n,e.aspects[r%e.aspects.length]).life;return t/64},l=c()/e.count,u=(r,i)=>{let a=r%e.aspects.length,o=rm(r,n,e.aspects[a]),s=rt(Math.imul(r+1,3266489909));return{n:r,picture:a,born:i,rail:o,flight:Jm({air:t,seed:r,heading:o.angle,roll:o.roll,from:o.leaves,t0:i/10,span:(o.life-o.freeAt)/10}),axis:Math.PI/2,curl:Math.PI/2,thrown:0,phase:s()*Math.PI*2,offset:{x:{x:0,v:0},y:{x:0,v:0}},felt:[0,0],turn:{x:{x:0,v:0},y:{x:0,v:0},z:{x:0,v:0}}}},d=t=>e.backward?t.rail.life-(r-t.born):r-t.born,f=t=>{let i=d(t),a=om(t.rail,i),o={n:t.n,picture:t.picture,m:a.m,wrapped:a.wrapped,s:a.s,toward:a.toward,angle:t.rail.angle,roll:t.rail.roll,phase:t.phase+r*9,axis:t.axis,pushed:[t.offset.x.x,t.offset.y.x],...e.backward?{shows:gt(0,th,r-t.born)}:{}};if(a.wrapped)return{...o,x:a.x+t.offset.x.x,y:a.y+t.offset.y.x,q:t.rail.leaves,bend:0,flutter:0};let s=Y((i-t.rail.freeAt)/(t.rail.life-t.rail.freeAt),0,1),c=Ym(t.flight,s),l=Gp(n),{thrown:u}=t;return{...o,axis:t.curl,x:a.x+c.slip[0]*l*a.m+t.offset.x.x,y:a.y-c.slip[1]*l*a.m+t.offset.y.x,q:qe(N([t.turn.x.x,t.turn.y.x,t.turn.z.x]),c.q),bend:1.5*c.press*(1-u)+mh*u,flutter:.045*c.rush+.05*u}},p=(e,t,r)=>{let i=Math.max(ih,rh*Math.min(n.width,n.height)),a=Kp(n),o=a.R+a.a;for(let a of s){let s=f(a),c={x:n.width/2+s.x,y:n.height/2+s.y},l=Ip(c,i,e),u=Bp(Math.hypot(s.x-a.offset.x.x,s.y-a.offset.y.x),o),p=1-Math.exp(-t*uh);a.felt[0]+=(l.fx*u*r-a.felt[0])*p,a.felt[1]+=(l.fy*u*r-a.felt[1])*p;let[m,h]=a.felt;a.offset.x=Up(a.offset.x,m,t),a.offset.y=Up(a.offset.y,h,t);let g=Math.hypot(a.offset.x.v,a.offset.y.v),_=Math.hypot(g,.6*Vp*Math.hypot(a.offset.x.x,a.offset.y.x)),v=gt(0,ph,_)*gt(0,yh,d(a)-a.rail.freeAt);a.thrown+=(v-a.thrown)*(1-Math.exp(-t*(v>a.thrown?_h:vh)));let y=g>hh?Math.atan2(-a.offset.y.v,a.offset.x.v)-a.rail.roll:a.axis;a.curl+=Math.atan(Math.tan(y-a.curl))*(1-Math.exp(-t*gh));let b=gt(0,yh,d(a)-a.rail.freeAt),x=(c.x-e.x)*h-(c.y-e.y)*m,S=ch*ch,C=-(a.offset.y.v*ah+h*oh),w=-(a.offset.x.v*ah+m*oh);a.turn.x=Up(a.turn.x,S*b*fh(C),t,ch,lh),a.turn.y=Up(a.turn.y,S*b*fh(w),t,ch,lh),a.turn.z=Up(a.turn.z,S*b*fh(-x*sh),t,ch,lh)}},m=(e,t,n,c)=>{let d=e*n;for(r+=d*nh(i+d/2),i+=d;r>=o;)s.push(u(a++,o)),o+=o<$m.until?l/$m.times:l;s=s.filter(e=>r-e.born<e.rail.life);for(let n=e;n>1e-9;n-=Xm)p(t,Math.min(Xm,n),c)};return{get time(){return r},get sheets(){return s},get frame(){return n},step(e,t,n=1,r=1){m(Y(e,0,Zm),t,n,r)},warm(e){for(let t=0;t<e;t+=Zm)m(Zm,{x:0,y:0,vx:0,vy:0,active:!1},1,1)},resize(t){n=t,l=c()/e.count;for(let t of s){let i=d(t),a=t.rail;t.rail=rm(t.n,n,e.aspects[t.picture]);let o=i<a.freeAt?i/a.freeAt*t.rail.freeAt:t.rail.freeAt+(i-a.freeAt)/(a.life-a.freeAt)*(t.rail.life-t.rail.freeAt);t.born=e.backward?r-(t.rail.life-o):r-o}},poses:()=>s.map(f)}}var xh=e=>{let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a=0;a<e.length;a++){let o=e[a];o[0]<t&&(t=o[0]),o[0]>r&&(r=o[0]),o[1]<n&&(n=o[1]),o[1]>i&&(i=o[1])}return[t,n,r,i]},Sh=(e,t)=>e[2]<=t[0]||t[2]<=e[0]||e[3]<=t[1]||t[3]<=e[1];function Ch(e,t,n){for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length],o=i[1]-a[1],s=a[0]-i[0],c=1/0,l=-1/0,u=1/0,d=-1/0;for(let e=0;e<t.length;e++){let n=t[e][0]*o+t[e][1]*s;n<c&&(c=n),n>l&&(l=n)}for(let e=0;e<n.length;e++){let t=n[e][0]*o+n[e][1]*s;t<u&&(u=t),t>d&&(d=t)}if(l<=u||d<=c)return!1}return!0}var wh=(e,t)=>Ch(e,e,t)&&Ch(t,e,t);function Th(e,t){return!Sh(xh(e),xh(t))&&wh(e,t)}var Eh=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Dh=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Oh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function kh(e,t,n){let[r,i,,a]=e.corners,o=Oh(Eh(i,r),Eh(a,r)),s=Math.hypot(...o)||1,c=Math.sign(Dh(o,Eh(t,r)));return n.map(e=>{let t=Dh(o,Eh(e,r))/s;return Math.abs(t)<.5?0:Math.sign(t)*c})}function Ah(e,t,n){let r=kh(t,n,e.corners),i=kh(e,n,t.corners),a=r.every(e=>e>=0)||i.every(e=>e<=0);return a===(i.every(e=>e>=0)||r.every(e=>e<=0))?0:a?1:-1}var jh=e=>{let t=0;for(let n=0;n<e.length;n++){let[r,i]=e[n],[a,o]=e[(n+1)%e.length];t+=r*o-a*i}return t/2};function Mh(e,t){let n=jh(t)>0?1:-1,r=e;for(let e=0;e<t.length&&r.length;e++){let[i,a]=t[e],[o,s]=t[(e+1)%t.length],c=e=>n*((o-i)*(e[1]-a)-(s-a)*(e[0]-i)),l=[];for(let e=0;e<r.length;e++){let t=r[e],n=r[(e+1)%r.length],i=c(t),a=c(n);if(i>=0&&l.push(t),i*a<0){let e=i/(i-a);l.push([t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e])}}r=l}return r}function Nh(e,t,[n,r]){let[i,a,,o]=e.corners,s=Oh(Eh(a,i),Eh(o,i));return Dh(s,Eh(i,t))/Dh(s,[n/t[2],-r/t[2],-1])}function Ph(e,t,n){let r=Mh(e.seen,t.seen);if(r.length<3)return 0;let i=r.reduce((e,t)=>e+t[0],0)/r.length,a=r.reduce((e,t)=>e+t[1],0)/r.length,o=[[i,a],...r.map(([e,t])=>[i+(e-i)*.8,a+(t-a)*.8])].map(r=>{let i=Nh(t,n,r)-Nh(e,n,r);return Math.abs(i)<1e-6*n[2]?0:Math.sign(i)});return o.every(e=>e>0)?1:o.every(e=>e<0)?-1:0}var Fh=(e,t,n)=>{let[r,i,,a]=e.corners,o=Oh(Eh(i,r),Eh(a,r)),s=Math.sqrt(Dh(o,o));return t.corners.every(e=>Math.abs(Dh(o,Eh(e,r)))<1e-6*n[2]*s)},Ih=(e,t)=>{let[n,r]=[e.goal,t.goal];if(!n||!r||n.layer===void 0||r.layer===void 0)return 0;let i=e=>[e.reduce((e,t)=>e+t[0],0)/e.length,e.reduce((e,t)=>e+t[1],0)/e.length],[a,o]=[i(n.seen),i(r.seen)];return Math.hypot(a[0]-o[0],a[1]-o[1])<.001?Math.sign(n.layer-r.layer):0},Lh=.02,Rh={ranks:new Map,shares:new Map};function zh(e,t){if(!t.size)return e;let n=e=>t.get(e)??e,r=e=>{let[t,r]=e.split(`:`).map(e=>n(Number(e)));return t<r?`${t}:${r}`:`${r}:${t}`};return{ranks:new Map([...e.ranks].map(([e,t])=>[n(e),t])),shares:new Map([...e.shares].map(([e,t])=>[r(e),t])),met:e.met&&new Map([...e.met].map(([e,t])=>[r(e),n(t)]))}}var Bh=(e,t)=>e.layer===void 0||t.layer===void 0?0:Math.sign(e.layer-t.layer),Vh=(e,t)=>{if(!!e.rises!=!!t.rises){let[n,r]=e.rises?[e,t]:[t,e],i=r.sinks?Math.sign((r.haze??0)-(n.haze??0)):-1;return e===n?i:-i}return Number(!!t.sinks)-Number(!!e.sinks)};function Hh(e,t,n=e.map(e=>xh(e.seen))){let r=e.length,i=e.map(()=>[]),a=Array(r).fill(0);for(let o=0;o<r;o++)for(let s=o+1;s<r;s++){if(Sh(n[o],n[s])||!wh(e[o].seen,e[s].seen))continue;let r=Bh(e[o],e[s])||Ph(e[o],e[s],t)||Ah(e[o],e[s],t);if(r===0)continue;let[c,l]=r===1?[s,o]:[o,s];i[c].push(l),a[l]++}let o=Array(r).fill(0),s=Array(r).fill(!1);for(let t=0;t<r;t++){let n=-1;for(let t=0;t<r;t++)!s[t]&&a[t]===0&&(n===-1||e[t].depth>e[n].depth)&&(n=t);if(n===-1)for(let t=0;t<r;t++)!s[t]&&(n===-1||e[t].depth>e[n].depth)&&(n=t);s[n]=!0,o[n]=t;for(let e of i[n])a[e]--}return o}function Uh(e,t,n=Rh,r=!1,i){let a=e.length,o=e.map(e=>n.ranks.get(e.key)),s=e=>o[e],c=(t,n)=>{let r=o[t],i=o[n];return r!==void 0&&i!==void 0?r<i:e[t].depth>e[n].depth},l=e.map(e=>e.goal?{...e,...e.goal}:e),u=l.map(e=>xh(e.seen)),d=null,f=()=>d??=Hh(l,t,u),p=e.map(()=>[]),m=new Int32Array(a),h=new Int32Array(a),g=0,_=(e,t)=>{m[e]=++g,h[0]=e;let n=1;for(;n;){let e=h[--n];if(e===t)return!0;let r=p[e];for(let e=0;e<r.length;e++)m[r[e]]!==g&&(m[r[e]]=g,h[n++]=r[e])}return!1},v=new Map(e.map((e,t)=>[e.key,t]));for(let[t,n]of e.entries()){let r=n.under===void 0?void 0:v.get(n.under);r!==void 0&&Th(n.seen,e[r].seen)&&p[t].push(r)}let y=new Map,b=e.map(e=>xh(e.seen)),x=e.map(e=>Math.abs(jh(e.seen))),S=[],C=[],w=[];for(let o=0;o<a;o++)for(let c=o+1;c<a;c++){if(Sh(b[o],b[c])||!wh(e[o].seen,e[c].seen))continue;let[a,l]=e[o].key<e[c].key?[o,c]:[c,o],u=Bh(e[a],e[l])||Bh({layer:e[a].sets},{layer:e[l].sets})||Vh(e[a],e[l])||Ih(e[a],e[l]),d=`${e[a].key}:${e[l].key}`;if(u){p[u===1?l:a].push(u===1?a:l),y.set(d,1);continue}let f=Math.min(x[o],x[c]),m=f>0?Math.abs(jh(Mh(e[o].seen,e[c].seen)))/f:0;y.set(d,m);let h=s(a),g=s(l),_=!i||Th(Mh(e[o].seen,e[c].seen),i),v=!r&&Fh(e[a],e[l],t);v&&S.push([a,l]);let T=v?0:Lh,E=_&&m>T&&(n.shares.get(d)??0)>T&&h!==void 0&&g!==void 0,D=v&&_?n.met?.get(d):void 0;if(E)w.push({first:h<g?a:l,then:h<g?l:a,share:m});else if(D!==void 0){let t=D===e[a].key?a:l;w.push({first:t===a?l:a,then:t,share:m})}else C.push([a,l])}for(let{first:e,then:t}of w.sort((e,t)=>t.share-e.share))_(t,e)||p[e].push(t);for(let[n,i]of C){let[a,o]=[l[n],l[i]],s=r&&!Sh(u[n],u[i])&&wh(a.seen,o.seen)?Bh(a,o)||Ph(a,o,t)||Ah(a,o,t):0,c=e[n].under!==void 0&&e[n].under===e[i].under?0:Ph(e[n],e[i],t),d=c&&(!s||s===c)?c:0,[m,h]=d===1?[i,n]:d===-1||f()[n]<f()[i]?[n,i]:[i,n];_(h,m)||p[m].push(h)}let T=Array(a).fill(0);for(let e of p)for(let t of e)T[t]++;let E=[],D=Array(a).fill(!1);for(let e=0;e<a;e++){let e=-1;for(let t=0;t<a;t++)!D[t]&&T[t]===0&&(e===-1||c(t,e))&&(e=t);D[e]=!0,E.push(e);for(let t of p[e])T[t]--}let O=new Map(E.map((t,n)=>[e[t].key,n])),k=new Map(n.met);for(let[t,n]of S){let[r,i]=[e[t].key,e[n].key];k.set(`${r}:${i}`,O.get(r)>O.get(i)?r:i)}return{order:E,last:{ranks:O,shares:y,met:k}}}var Wh=3e7;function Gh(e,t){let n=Math.max(1,Math.min(e,t));return{base:{width:1080*e/n,height:1080*t/n},zoom:n/1080}}var Kh=([e,t,n])=>[e,t,V+n],qh=e=>e>=1?[1,1/e]:[e,1],Jh=(e,t)=>{let n=Math.max(e,t);return{shape:[e/n,t/n],size:n}};function Yh(e,t){let n=Array.from({length:Math.min(e,t)},(e,t)=>t);for(let r=t;r<e;r++){let i=new Set([n[r-1],r===e-1?n[0]:-1]),a=-1,o=-1;for(let s=0;s<t;s++){if(i.has(s))continue;let t=1/0;for(let i=0;i<n.length;i++)n[i]===s&&(t=Math.min(t,r-i,e-(r-i)));t>o&&([a,o]=[s,t])}n.push(a)}return n}function Xh(e,t,n,r){let i=[],a=Array.from({length:n},()=>0);for(let o=0;o<e;o++){let e=o%t,s=new Set;for(let[n,r]of[[-1,0],[-1,-1],[0,-1],[1,-1]]){let[a,c]=[e+n,o+n+r*t];a>=0&&a<t&&c>=0&&c<o&&s.add(i[c])}let c=Math.floor(r(o)*n),l=-1;for(let e=0;e<n;e++){let t=(c+e)%n;!s.has(t)&&(l<0||a[t]<a[l])&&(l=t)}i.push(l),a[l]++}return i}function Zh(e,t,[n,r],i=1.05){let[a,o,s]=e.at,c=Math.abs(a)>=Math.abs(o)?0:1,l=(c?t.height:t.width)/2*i,u=e.at[c];if(Math.abs(u)<1e-6)return e;let d=1;for(let[t,i]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let a=ke(e.q,[t*n*e.size/2,i*r*e.size/2,0]),o=V-s-a[2];d=Math.max(d,(l*o/V-Math.sign(u)*a[c])/Math.abs(u))}return{...e,at:[a*d,o*d,s]}}var Qh={count:12,fill:.7,wide:.94,high:.9,tip:12*Math.PI/180,roll:8*Math.PI/180,duration:16},$h=1e3;function eg(e,t,n,r){let i=i=>{for(let a=0;a<64;a++){let o=2*Math.PI*a/64,s=qe(r,fe(0,o,0)),c=ke(r,[$h*Math.sin(o),0,$h*Math.cos(o)]);for(let[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let o=ke(s,[r*t/2,a*n/2,0]),l=i*$h-c[2]-o[2];if(l<=0)return!1;let[u,d]=[c[0]+o[0],c[1]+o[1]].map(e=>Math.abs(e)*V/l);if(u>e[0]||d>e[1])return!1}}return!0},[a,o]=[1.2,12];for(let e=0;e<40;e++){let e=(a+o)/2;i(e)?o=e:a=e}return o}function tg(e){let{count:t,fill:n,tip:r,roll:i,duration:a}=Qh,o=e.aspects.length,s=qe(fe(0,0,i),fe(r,0,0)),c=n*2*Math.PI*$h/t,l=t=>qh(e.aspects[t]),u=c/Math.min(1,...e.aspects),d=eg([Qh.wide*e.base.width/2,Qh.high*e.base.height/2],c,u,s)*$h,f=(e,n)=>{let r=2*Math.PI*(e+n/a*t)/t,i=ke(s,[$h*Math.sin(r),0,$h*Math.cos(r)]),u=e%o,[f]=l(u);return{key:Wh+e,picture:u,at:Kh([i[0],i[1],i[2]-d]),q:qe(s,fe(0,r,0)),size:c/f,haze:0,shape:null,bend:-c/$h,layer:i[2]}};return{framed:!1,round:a,lives:e=>Array.from({length:t},(t,n)=>f(n,e)),life:(e,n)=>{let r=e-Wh;return r>=0&&r<t?f(r,n):null},comes:t=>Zh(t,e.base,l(t.picture)),end:()=>Kh([0,0,-d-1.4*$h])}}var ng={route:[[5,3],[4,2],[3,1],[2,2],[1,3],[2,4],[3,5],[4,4]],count:500,box:[400,600],far:.08,near:.63,reach:.41,mix:.5,pan:1.45,atmosphere:.5,duration:16,big:.3},rg=Wh+4e3,ig={width:1080,cx:540,cy:675,cell:360},ag=(e,t)=>[ig.cx+(e-3)*ig.cell,ig.cy+(t-3)*ig.cell],og=e=>{let t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)};function sg(e){let{route:t,count:n,pan:r}=ng,i=e.width/ig.width,a=t.map(([e,t])=>ag(e,t)),[o,s]=[a.map(e=>e[0]),a.map(e=>e[1])],c=e.height/2/i,l=ig.cx+(Math.min(...o)-ig.cx)*r-ig.width/2-200,u=ig.cx+(Math.max(...o)-ig.cx)*r+ig.width/2+200,d=ig.cy+(Math.min(...s)-ig.cy)*r-c-200,f=ig.cy+(Math.max(...s)-ig.cy)*r+c+200,p=Math.max(1,Math.round(Math.sqrt(n*((u-l)/(f-d))))),m=Math.max(1,Math.ceil(n/p));return{unit:i,points:a,left:l,top:d,cols:p,rows:m,cw:(u-l)/p,ch:(f-d)/m}}function cg(e){let{count:t,box:n,far:r,near:i,reach:a,mix:o,pan:s,atmosphere:c,duration:l,big:u}=ng,d=e.aspects.length,{unit:f,points:p,left:m,top:h,cols:g,cw:_,ch:v}=sg(e.base),y=Xh(t,g,d,e=>og(e*2.399+1.7)),b=Array.from({length:t},(e,t)=>({x:m+(t%g+.5+(og(t*2+1)-.5)*.85)*_,y:h+(Math.floor(t/g)+.5+(og(t*2+9)-.5)*.85)*v,picture:y[t],mix:og(t*3.137+4.2)-.5})),x=p.length,S=(e,t)=>p[((e+t)%x+x)%x],C=(e,t)=>{let n=n=>{let[r,i,a,o]=[S(e,-1)[n],S(e,0)[n],S(e,1)[n],S(e,2)[n]];return .5*(2*i+(-r+a)*t+(2*r-5*i+4*a-o)*t*t+(-r+3*i-3*a+o)*t*t*t)};return[n(0),n(1)]},w=Array.from({length:x},(e,t)=>{let n=[0];for(let e=1;e<=64;e++){let[r,i]=[C(t,(e-1)/64),C(t,e/64)];n.push(n[e-1]+Math.hypot(i[0]-r[0],i[1]-r[1]))}return n.map(e=>e/n[64])}),T=e=>{let t=(e/l%1+1)%1*x,n=Math.min(x-1,Math.floor(t)),r=w[n],i=t-n,a=1;for(;a<64&&r[a]<i;)a++;let o=(a-1+(i-r[a-1])/Math.max(1e-12,r[a]-r[a-1]))/64,[c,u]=C(n,o);return[ig.cx+(c-ig.cx)*s,ig.cy+(u-ig.cy)*s]},E=fe(0,0,0),D=(t,[s,l])=>{let u=b[t],d=Y(Math.hypot(u.x-s,u.y-l)/(a*ig.width),0,1),p=(i+(r-i)*d)*(1+u.mix*o),m=Y((d-.5)*2,0,1),h=e.aspects[u.picture],[g,_]=[n[0]*p*f,n[1]*p*f];return h>n[0]/n[1]?_=g/h:g=_*h,{key:rg+t,picture:u.picture,at:Kh([(u.x-s)*f,-(u.y-l)*f,-V]),q:E,size:Math.max(g,_),haze:c*m*m*(3-2*m),shape:null,layer:p}};return{framed:!0,step:l/x,waits:!0,keeps:!0,lives:t=>{let n=T(t),[r,i]=[e.base.width*.6,e.base.height*.6];return b.map((e,t)=>D(t,n)).filter(t=>{let[n,a]=qh(e.aspects[t.picture]).map(e=>e*t.size/2);return Math.abs(t.at[0])-n<r&&Math.abs(t.at[1])-a<i})},life:(e,n)=>{let r=e-rg;return r>=0&&r<t?D(r,T(n)):null},comes:t=>Zh(t,e.base,qh(e.aspects[t.picture])),rises:e=>(e.layer??0)<u,end:()=>Kh([0,0,-3*V])}}var lg={route:[{c:3,r:3},{c:4,r:1},{c:2,r:2},{c:4,r:4},{c:2,r:5}],fill:90,gap:3,pullBack:2.2,depth:80,seed:7,duration:12},ug=1e3,dg=7,fg=Wh+1e7,pg=(e,t)=>fg+(e+1e3)*2e3+(t+1e3),mg=(e,t)=>(e%t+t)%t;function hg(e){let t=e|0;return()=>{t=t+1831565813|0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gg(e,t){let n=Array(49).fill(-1),r=Array(t).fill(0),i=0;for(let a of e){let e=a.r*dg+a.c;n[e]>=0||(n[e]=i++%t,r[n[e]]++)}let a=(e,t)=>n[mg(t,dg)*dg+mg(e,dg)],o=i%t;for(let e=0;e<dg;e++)for(let i=0;i<dg;i++){if(n[e*dg+i]>=0)continue;let s=[a(i-1,e),a(i+1,e),a(i,e-1),a(i,e+1)],c=[a(i-1,e-1),a(i+1,e-1),a(i-1,e+1),a(i+1,e+1)],l=-1,u=1/0;for(let e=0;e<t;e++){let n=(o+e)%t,i=s.filter(e=>e===n).length*1e3+c.filter(e=>e===n).length*100+r[n];i<u&&([l,u]=[n,i])}n[e*dg+i]=l,r[l]++,o=(l+1)%t}return n}function _g(e){let{route:t,fill:n,gap:r,pullBack:i,depth:a,seed:o,duration:s}=lg,c=gg(t,e.aspects.length),l=(e,t)=>c[mg(t,dg)*dg+mg(e,dg)],u=r/100*ug,d=(t,n)=>ug/e.aspects[l(t,n)],f=Array.from({length:dg},(e,t)=>{let n=[],r=-d(t,0)/2;for(let e=0;e<dg;e++)n.push(r+d(t,e)/2),r+=d(t,e)+u;return{middles:n,total:r+d(t,0)/2}}),p=hg(o),m=f.reduce((e,t)=>e+t.total,0)/dg/dg,h=f.map(()=>(p()-.5)*m),g=ug+u,_=(e,t)=>{let n=f[mg(e,dg)],r=n.middles[mg(t,dg)]+Math.floor(t/dg)*n.total;return[e*g,h[mg(e,dg)]-r]},v=Array.from({length:49},(e,t)=>-1+2*t/48),y=hg(o);for(let e=v.length-1;e>0;e--){let t=Math.floor(y()*(e+1));[v[e],v[t]]=[v[t],v[e]]}let b=v.map(e=>v.filter(t=>t<e).length),x=t=>V/(n/100)*Math.max(ug/e.base.width,d(t.c,t.r)/e.base.height),S=e=>{let n=t.length,r=mg(e/s,1)*n,a=Math.min(n-1,Math.floor(r)),o=Y(r-a,0,1),[c,l]=[t[a],t[(a+1)%n]],[u,d]=_(c.c,c.r),[f,p]=_(l.c,l.r),m=x(c),h=Math.sin(Math.PI*o);return{x:u+(f-u)*o,y:d+(p-d)*o,distance:m*(x(l)/m)**o*(1+(i-1)*h),wave:h}},C=fe(0,0,0),w=(t,n,r)=>{let i=mg(n,dg)*dg+mg(t,dg),[o,s]=_(t,n),c=a/100*.5*r.distance*v[i]*r.wave,u=l(t,n);return{key:pg(t,n),picture:u,at:Kh([o-r.x,s-r.y,c-r.distance]),q:C,size:ug/qh(e.aspects[u])[0],haze:0,shape:null,layer:b[i]}};return{framed:!0,step:s/t.length,waits:!0,lives:t=>{let n=S(t),r=n.distance+a/100*.5*n.distance*n.wave,[i,o]=[e.base.width,e.base.height],s=Math.max(...Array.from({length:49},(e,t)=>d(t%dg,Math.floor(t/dg)))),[c,l]=[i*r/V+ug,o*r/V+s],u=[];for(let t=Math.floor((n.x-c)/g);t<=Math.ceil((n.x+c)/g);t++){let r=_(t,0)[1],a=f[mg(t,dg)].total/dg,s=Math.floor((r-(n.y+l))/a)-2,c=Math.ceil((r-(n.y-l))/a)+2;for(let r=s;r<=c;r++){let a=w(t,r,n),s=V/(V-a.at[2]),[c,l]=qh(e.aspects[a.picture]).map(e=>e*a.size*s/2);Math.abs(a.at[0]*s)-c<i&&Math.abs(a.at[1]*s)-l<o&&u.push(a)}}return u},life:(e,t)=>{let n=e-fg;return n<0||n>=4e6?null:w(Math.floor(n/2e3)-1e3,mg(n,2e3)-1e3,S(t))},comes:t=>Zh(t,e.base,qh(e.aspects[t.picture])),end:()=>Kh([0,0,-3*x(t[0])])}}var vg={rings:2,count:24,inner:241.92,gap:278.208,width:172.8,wobble:3,duration:18,wide:.94,high:.9,fan:1.5},yg=Wh+1e3,bg=Math.PI/180;function xg(e,t,n,r,i){let a=Array.from({length:e},(e,t)=>Math.max(1,n+t*r)),o=a.reduce((e,t)=>e+t,0),s=0;return a.map((e,n)=>{let r=Math.max(3,Math.round(t*e/o)),a={radius:e,cards:r,first:s,spin:n%2==1?-1:1,tip:fe(n%2==0?i*(n/2+1)*bg:0,n%2==1?-i*((n+1)/2)*bg:0,0)};return s+=r,a})}function Sg(e){let{rings:t,count:n,inner:r,gap:i,width:a,wobble:o,duration:s}=vg,c=xg(t,n,r,i,o),l=e.aspects.length,u=t=>qh(e.aspects[t]),d=(e,t,n)=>{let r=c[e],i=2*Math.PI*(t/r.cards+r.spin*n/s);return{at:ke(r.tip,[Math.sin(i)*r.radius,Math.cos(i)*r.radius,vg.fan*t]),q:qe(r.tip,fe(0,0,-i))}},f=[vg.wide*e.base.width/2,vg.high*e.base.height/2],p=e=>c.every((t,n)=>Array.from({length:64},(e,t)=>t).every(r=>{let i=(t.first+r%t.cards)%l,[o,c]=u(i),p=a/o,{at:m,q:h}=d(n,r%t.cards,r/64*s);return[[-1,-1],[1,-1],[1,1],[-1,1]].every(([t,n])=>{let r=ke(h,[t*o*p/2,n*c*p/2,0]),i=e-m[2]-r[2];return i>0&&Math.abs(m[0]+r[0])*1e3/i<=f[0]&&Math.abs(m[1]+r[1])*1e3/i<=f[1]})})),[m,h]=[300,2e4];for(let e=0;e<40;e++){let e=(m+h)/2;p(e)?h=e:m=e}h=Math.max(h,1e3);let g=(e,t,n)=>{let r=c[e],i=(r.first+t)%l,{at:o,q:s}=d(e,t,n);return{key:yg+r.first+t,picture:i,at:Kh([o[0],o[1],o[2]-h]),q:s,size:a/u(i)[0],haze:0,shape:null,layer:r.first+t}};return{framed:!1,lives:e=>c.flatMap((t,n)=>Array.from({length:t.cards},(t,r)=>g(n,r,e))),life:(e,t)=>{let n=e-yg,r=c.findIndex(e=>n>=e.first&&n<e.first+e.cards);return r<0?null:g(r,n-c[r].first,t)},comes:t=>Zh(t,e.base,u(t.picture)),end:()=>Kh([0,0,-h-2*(r+i*(t-1))])}}var Cg={width:900,gap:28,flat:.56,radius:320,shade:.45,distance:1e3,duration:16},wg=Wh+3e3,Tg=(e,t)=>(e%t+t)%t;function Eg(e){let{width:t,gap:n,radius:r,shade:i,distance:a,duration:o}=Cg,s=e.aspects.length,c=e.base.height/2,l=Cg.flat*c,u=l+Math.PI/2*r,d=e.aspects.map(e=>t/e),f=d.reduce((e,t)=>e+t,0)/s,p=f+n,m=d.reduce((e,t)=>e+Math.abs(t-f),0),h=Math.max(l+Math.PI*r,c*1.3)+m,g=s*Math.max(1,Math.ceil((2*h+2*p)/(s*p))),_=[],v=-d[0]/2;for(let e=0;e<g;e++){let t=d[e%s];_.push(v+t/2),v+=t+n}let y=v+d[0]/2,b=e=>_[Tg(e,g)]+Math.floor(e/g)*y,x=e=>{let t=Math.floor(e);return b(t)+(e-t)*(b(t+1)-b(t))},S=(e,t)=>{let n=x(e)-x(-t),r=Tg(e+t+g/2,g)-g/2;return n-Math.round((e+t-r)/g)*y},C=e=>{let[t,n,o]=I(e,l,r);return{at:Kh([0,t,n-a]),q:fe(-o,0,0),drum:{middle:e,flat:l,radius:r,shade:i},layer:n}},w=(n,r)=>{let i=n%s;return{key:wg+n,picture:i,size:t/qh(e.aspects[i])[0],haze:0,shape:null,...C(S(n,r/o*s))}},T=e=>Math.abs(e.drum.middle)-d[e.picture]/2<u+p/2;return{framed:!1,step:o/s,waits:!0,lives:e=>Array.from({length:g},(t,n)=>w(n,e)).filter(T),life:(e,t)=>{let n=e-wg;return n>=0&&n<g?w(n,t):null},comes:e=>{let t=e.key-wg,r=e.drum.middle,i=Math.sign(r)*(u+d[e.picture]/2+n);return{...w(t,0),...C(i),key:e.key,picture:e.picture}},end:()=>Kh([0,0,-3*a])}}var Dg={duration:4,count:10,layers:5,size:1},Og=Wh+5e3,kg=(e,t)=>(e%t+t)%t,Ag=e=>1-(1-Math.min(1,Math.max(0,e)))**5;function jg(e){let{duration:t,count:n,layers:r,size:i}=Dg,a=e.aspects.length,o=t/n,s=r*o,c=qh(e.aspects.reduce((e,t)=>e+t,0)/a),l=i*Math.min(e.base.width/c[0],e.base.height/c[1]),u=fe(0,0,0),d=Yh(n,a),f=(e,t)=>{if(t<(e-1)*o)return null;let r=Ag((t-e*o)/s);return{key:Og+e,picture:d[kg(e,n)],at:Kh([0,0,-V]),q:u,size:l*r,haze:0,shape:c,layer:e}};return{framed:!1,lives:e=>{let t=Math.floor(e/o)+1;return Array.from({length:Math.ceil(s/o)+3},(n,r)=>f(t-r,e)).filter(e=>e!==null).reverse()},life:(e,t)=>f(e-Og,t),comes:e=>e,step:2*o,waits:!0,end:()=>Kh([0,0,-3*V])}}var Mg={count:18,duration:10,life:.5,wide:246.24,from:.5,box:[.72,.52],birth:.16,melt:.32},Ng=Wh+7e3,Pg=(e,t)=>(e%t+t)%t,Fg=(e,t,n)=>Math.min(n,Math.max(t,e)),Ig=[[1,0],[.705,-.705],[0,-1],[-.705,-.705],[-1,0],[-.705,.705],[0,1],[.705,.705]];function Lg(e){let t=Ig.length,n=Pg(e,1)*t,r=Math.min(t-1,Math.floor(n)),i=n-r,a=e=>Ig[Pg(r+e,t)],o=(e,t,n,r)=>.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(-e+3*t-3*n+r)*i*i*i);return[0,1].map(e=>o(a(-1)[e],a(0)[e],a(1)[e],a(2)[e]))}function Rg(e){let{birth:t,melt:n,from:r}=Mg;if(e<t){let n=e/t,i=1-(1-n)**3*(1-2.2*n);return{scale:r+(1-r)*i,shows:Fg(n*3,0,1)}}if(e>1-n){let t=(e-(1-n))/n;return{scale:1-.12*t*t,shows:1-t*t}}return{scale:1,shows:1}}function zg(e){let{count:t,duration:n,life:r,wide:i,box:a}=Mg,o=e.aspects.length,s=n/t,[c,l]=[a[0]*e.base.width/2,a[1]*e.base.height/2],u=[0,0,0,1],d=(a,d)=>{let f=(d-a*s)/(r*n);if(f<0||f>=1)return null;let p=Pg(a,t),m=p%o,h=e.aspects[m],[g,_]=Lg(p/t),{scale:v,shows:y}=Rg(f);return{key:Ng+a,picture:m,at:Kh([g*c,-_*l,-V]),q:u,size:i*Math.max(1,1/h)*v,haze:0,shows:y,shape:qh(h),layer:a}};return{framed:!1,lives:e=>{let n=Math.floor(e/s);return Array.from({length:Math.ceil(t*r)+1},(t,r)=>d(n-r,e)).filter(e=>e!==null).reverse()},life:(e,t)=>d(e-Ng,t),comes:e=>({...e,shows:0}),rises:e=>(e.shows??1)<1,end:()=>Kh([0,0,-3*V]),laid:e=>Pg(e-Ng,t)%o,waits:!0,start:37*s+.1*r*n,pace:10.5}}var Bg={count:6,rings:14,width:1080,height:1440,cell:900,scale:.97,fade:.45,duration:10},Vg=4,Hg=[fe(0,Math.PI/2,0),fe(0,-Math.PI/2,0),fe(-Math.PI/2,0,0),fe(Math.PI/2,0,0)],Ug=()=>Bg.count*Math.max(1,Math.ceil(Bg.rings/Bg.count));function Wg(e){let t=Math.max(1,Ug()-1);return(1-Bg.fade*gt(0,1,e/t))*Math.min(1,Math.max(0,t-e))}var Gg=e=>e/Bg.duration*Bg.count,Kg=(e,t)=>(e%t+t)%t,qg=e=>(V-e-1)/Bg.cell-.5,Jg=1.5,Yg=6;function Xg(e){let{width:t,height:n,cell:r,scale:i}=Bg,a=Ug()-1,o=e.aspects.length,s=Jh(r*i,n*i),c=Jh(t*i,r*i),l=[s,s,c,c],u=(e,t)=>Wh+(e+1e5)*Vg+t,d=(e,i,a)=>{let s=-(a+.5)*r-1,c=[[-t/2,0,s],[t/2,0,s],[0,-n/2,s],[0,n/2,s]][i],d=(Kg(e,Bg.count)*Vg+i)%o;return{key:u(e,i),picture:d,at:Kh(c),q:Hg[i],size:l[i].size,shape:l[i].shape,haze:1-Wg(a)}};return{framed:!0,lives(e){let t=Gg(e),n=[];for(let e=Math.ceil(t-.5);e-t<a+1;e++)for(let r=0;r<Vg;r++)n.push(d(e,r,e-t));return n},life(e,t){let n=e-Wh,r=Kg(n,Vg),i=(n-r)/Vg-1e5;return d(i,r,i-Gg(t))},comes:t=>Zh(t,e.base,t.shape??[1,1]),end:()=>Kh([0,0,-(a+1)*r-1]),takes:e=>qg(e.at[2])>=Jg,rises:e=>qg(e.at[2])>=Yg,hazeAt:e=>1-Wg(qg(e[2]))}}function Zg(e){let t=e.met?[...e.met]:[],n=new Float64Array(3+2*e.ranks.size+3*e.shares.size+3*t.length),r=0;n[r++]=e.ranks.size;for(let[t,i]of e.ranks)n[r++]=t,n[r++]=i;for(let i of[[...e.shares],t]){n[r++]=i.length;for(let[e,t]of i){let[i,a]=e.split(`:`);n[r++]=Number(i),n[r++]=Number(a),n[r++]=t}}return n}function Qg(e){let t=0,n=new Map;for(let r=e[t++];r>0;r--,t+=2)n.set(e[t],e[t+1]);let r=()=>{let n=new Map;for(let r=e[t++];r>0;r--,t+=3)n.set(`${e[t]}:${e[t+1]}`,e[t+2]);return n},i=r(),a=r();return a.size?{ranks:n,shares:i,met:a}:{ranks:n,shares:i}}var $g=12;function e_(e){let t=new Float64Array(e.size*$g),n=0;for(let[r,i]of e)t.set([r,...i.at,i.bend,i.bends,i.axis,i.flutter,i.flutters,i.phase,i.line??NaN,i.aim??NaN],n),n+=$g;return t}function t_(e){let t=new Map;for(let n=0;n<e.length;n+=$g){let r=e[n+10],i={at:[e[n+1],e[n+2],e[n+3]],bend:e[n+4],bends:e[n+5],axis:e[n+6],flutter:e[n+7],flutters:e[n+8],phase:e[n+9]};Number.isNaN(r)||(i.line=r),Number.isNaN(e[n+11])||(i.aim=e[n+11]),t.set(e[n],i)}return t}function n_(e,t,n){let r=e[t];if(!(r instanceof Float64Array))return r;let i=n(r);return e[t]=i,i}var r_={lens:2,twist:35*Math.PI/180,tilt:53*Math.PI/180,roll:-6*Math.PI/180,size:.3,shape:Math.SQRT1_2,gap:.14,corner:.05,slide:240};function i_(e,t,n){let r=(t,n)=>t+(n-t)*e;return{left:r(t.left,n.left),top:r(t.top,n.top),right:r(t.left+t.width,n.left+n.width),bottom:r(t.top+t.height,n.top+n.height)}}var a_=()=>r_.lens*V,o_=[0,0,V];function s_(e,t,n,r){let i=a_(),a=[n/i,-r/i,-1],o=ke(e,[0,0,1]),s=(o[0]*(t[0]-o_[0])+o[1]*(t[1]-o_[1])+o[2]*(t[2]-o_[2]))/(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=[o_[0]+s*a[0]-t[0],o_[1]+s*a[1]-t[1],o_[2]+s*a[2]-t[2]],l=[-e[0],-e[1],-e[2],e[3]],u=ke(l,c);return[u[0],u[1]]}function c_(e,t){let n=1/0,r=-1/0;for(let i=0;i<e.length;i++){let[a,o]=e[i],[s,c]=e[(i+1)%e.length];if((o-t)*(c-t)>0||o===c)continue;let l=a+(t-o)/(c-o)*(s-a);n=Math.min(n,l),r=Math.max(r,l)}return n<=r?[n,r]:null}function l_(e,t,n){let r=rt(n),i=[];for(let n=0;n<t;n++){let a=new Set([i[n-1],n===t-1?i[0]:void 0]),o=e.filter(e=>!a.has(e)),s=o.length?o:e;i.push(s[Math.floor(r()*s.length)])}return i}function u_(e,t,n){let r=r_.size*Math.sqrt(e*t),i=r*r_.shape*(1+r_.gap),a=r+r*r_.shape*r_.gap,o=qe(fe(0,0,r_.roll),qe(fe(-r_.tilt,0,0),fe(0,0,r_.twist))),s=[0,0,V-a_()],c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,r])=>s_(o,s,n*e/2,r*t/2)),l=c.map(e=>e[1]),u=[],d=[],f=n>=6?[0,1].map(e=>Array.from({length:n},(e,t)=>t).filter(t=>t%2===e)):[Array.from({length:n},(e,t)=>t)];for(let e=Math.ceil((Math.min(...l)-r/2)/a);e*a<Math.max(...l)+r/2;e++){let t=e*a,n=1/0,o=-1/0;for(let e of[t-r/2,t,t+r/2]){let t=c_(c,e);t&&([n,o]=[Math.min(n,t[0]),Math.max(o,t[1])])}for(let[e,i]of c)Math.abs(i-t)<=r/2&&([n,o]=[Math.min(n,e),Math.max(o,e)]);if(n>o)continue;let s=Math.ceil((o-n+2*i)/i),l=u.length,p=(e%2+2)%2;u.push({r:e,middle:(n+o)/2,length:s*i,count:s,way:p?-1:1});let m=f[f.length>1?p:0];for(let[t,n]of l_(m,s,Math.imul(e+101,2654435761)).entries())d.push({row:l,k:t,picture:n})}return{width:e,height:t,size:r,pitch:i,rise:a,turn:o,middle:s,rows:u,slots:d}}function d_(e,t,n){for(let[r,i]of e.rows.entries())t[r]=i.way*r_.slide*n}function f_(e,t,n){let r=e.rows[t.row],i=t.k*e.pitch+(n[t.row]??0),a=r.length;return r.middle+((i+a/2)%a+a)%a-a/2}function p_(e,t,n){let r=f_(e,t,n),i=e.rows[t.row].r*e.rise,a=ke(e.turn,[r,i,0]);return{at:[e.middle[0]+a[0],e.middle[1]+a[1],e.middle[2]+a[2]],q:e.turn}}function m_(e){let t=a_(),n=o_[2]-e[2];return[t*e[0]/n,-t*e[1]/n]}function h_(e,t,n,r=r_.shape){let{at:i,q:a}=p_(e,t,n);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([t,n])=>{let o=ke(a,[t*r*e.size/2,n*e.size/2,0]);return m_([i[0]+o[0],i[1]+o[1],i[2]+o[2]])})}function g_(e,t,n){let r=e.width/2,i=e.height/2;return Th(h_(e,t,n),[[-r,-i],[r,-i],[r,i],[-r,i]])}var __={over:{leaves:[tt,.6],speed:1.6,takes:[.25,.45],after:.006,done:.95,soft:.05,turns:{last:.1,from:[.35,.72],to:.85},away:[tt,.1],gathers:[.39,.95],slows:.85,round:{faces:.6,ahead:1.15,apart:1.3,turns:[.2,.95],ride:.5,out:.6,sinks:.5},far:[tt,.45],comes:.25,near:[.75,.97],open:[0,.4],close:[.5,1]},runs:1.5,setsOff:.25,air:.45,felt:.53,lands:.8,goes:.4,change:{over:.5,takes:[.7,1],turns:[.25,.9],lift:.15,steps:200,budget:2,place:.25,rise:[.5,.95],longer:1.25,pace:1.3,twins:3},paper:Be},v_=[`ring`,`rings`,`grids`,`roll`,`fields`,`scale`,`trail`],y_={ring:tg,rings:Sg,grids:_g,roll:Eg,fields:cg,scale:jg,trail:zg,tunnel:Xg},b_=new Map,x_=e=>{let t=Y(e,0,1);return t**4*(35-84*t+70*t*t-20*t**3)},S_=(e,[t,n])=>{let r=Y((e-t)/(n-t),0,1);return r**3*(r*(6*r-15)+10)},C_=e=>1-(10*e**3-15*e**4+6*e**5),w_=e=>e-6*e**3+8*e**4-3*e**5,T_=Math.max(...Array.from({length:101},(e,t)=>w_(t/100))),E_=(e,t=.25)=>{let n=1/(1-t),r=e=>n*t*(e**3-e**4/2),i=Y(e,0,1);return i<t?r(i/t):i>1-t?1-r((1-i)/t):n*(i-t/2)},D_=(e,t)=>e&&{...e,middle:e.middle*t,flat:e.flat*t,radius:e.radius*t},O_=(e,t,n)=>({key:e.key,picture:e.picture,at:e.at,q:e.q,size:e.size,bend:e.bend??0,axis:0,flutter:0,phase:0,corner:0,clip:t,haze:e.haze,shape:e.shape,tube:null,lens:n,drum:e.drum&&{...e.drum,weight:1},...e.shows===void 0?{}:{shows:e.shows}});function k_(e){let t={width:1,height:1},n=null,r=null,i=0,a=0,o=0,s=null,c=new Map,l=new Map,u=new Map,d=(e,t)=>n_(e.steps,t,t_),f=[],p=()=>{c.clear(),l.clear(),u.clear(),f=[]},m=null,h=-1,g=!1,_,v=null,y=null,b=De.scroll+Ae.stays,x=b+tt*Ae.over,S=e=>new Map(m(e).cards.map(e=>[e.key,e])),C=new Map,w=new Map,T=Rh,E=t=>t.shape??qh(e.aspects[t.picture]),D=t=>n=>{let r=w.get(n.key);if(r)return{...n,picture:r.picture};if(!t.laid)return n;let i=t=>t?{...n,picture:(n.picture+1)%e.aspects.length}:n;for(let e=1;e<64;e++){let r=w.get(n.key-e);if(r)return i(t.laid(n.key-e+1)===r.picture);let a=w.get(n.key+e);if(a)return i(t.laid(n.key+e-1)===a.picture)}return n},O=(e,t)=>e.lives(t).map(D(e)),k=new WeakMap,A=e=>(k.has(e)||k.set(e,e.lives(0).length),k.get(e)),j=(e,t,n)=>{let r=e.life(t,n);return r&&D(e)(r)},M=(t,n,r=s?.gathers??__.over.gathers)=>{if(!t.round||e.still)return 0;let i=A(t),[a,o]=r,c=__.over.slows,l=__.runs*(Ae.over/Ae.each),u=e=>{let t=Y((e-c)/(1-c),0,1);return(1-c)*(t**3-t**4/2)},d=u(o)-u(a),f=(t.round*(i-1)/i-l*d)/(o-a-d);return f*n+(l-f)*u(n)},P=(t,n)=>{let i=r.looks[t],a=t;for(;a>0&&v_[a-1]===v_[t];)a--;let o=a>0&&i.waits,s=(i.start??0)+(a===0?M(i,1):0);if(i.step!==void 0){let t=n-a,r=Math.max(0,Math.floor(t)),c=r||!o?0:__.change.over;return s+(e.still?0:i.step*(r+S_((t-r-c)/(1-c),[0,1])))}let c=Math.max(0,n-(o?a+__.change.over:a)),l=__.setsOff,u=!o||i.soft?c:c<l?l*((c/l)**3-(c/l)**4/2):c-l/2;return s+(e.still?0:(i.pace??__.runs)*u)},F=(e,[n,r,i])=>{let a=Math.max(1,V-i);return[t.width/2+e.shift[0]+e.zoom*V*n/a,t.height/2+e.shift[1]-e.zoom*V*r/a,e.zoom/a]},I=(e,[n,r,i])=>{let a=e.zoom/Math.max(1e-9,i),o=a/e.zoom/V;return[(n-t.width/2-e.shift[0])*o,-(r-t.height/2-e.shift[1])*o,V-a]},L=(e,[t,n,r],[i,a,o])=>{let s=Math.max(1,V-r),c=e.zoom*V/s**2;return[c*(i*s+t*o),-c*(a*s+n*o),e.zoom*o/s**2]},R=(e,t)=>{let n=ie(t,...E(t)).map(n=>F(t.lens??e,n)),r=n.map(([e])=>e),i=n.map(([,e])=>e);return[Math.min(...r),Math.min(...i),Math.max(...r),Math.max(...i)]},ee=(e,t,n,r)=>{let i=t.lens??e,a=Ie(ce(t,...E(t),8).map(e=>F(i,e))),o=a.reduce((e,t)=>e+t[0],0)/a.length,s=a.reduce((e,t)=>e+t[1],0)/a.length,c=a.map(([e,t])=>[o+.95*(e-o),s+.95*(t-s)]),l=([e,t])=>{let n=c.map(([n,r],i)=>{let[a,o]=c[(i+1)%c.length];return(a-n)*(t-r)-(o-r)*(e-n)});return n.every(e=>e>=0)||n.every(e=>e<=0)},u=e=>[o+(r[0]-o)*e,s+(r[1]-s)*e],d=(e,t=1)=>n.every(([n,r])=>l([u(e)[0]+t*n,u(e)[1]+t*r])),f=e=>{if(e(1))return 1;let[t,n]=[0,1];for(let r=0;r<20;r++)[t,n]=e((t+n)/2)?[(t+n)/2,n]:[t,(t+n)/2];return t},p=f(e=>d(0,e));return{at:u(f(e=>d(e,p))),k:p}},te=(e,t)=>e[2]>t.left&&e[0]<t.left+t.width&&e[3]>t.top&&e[1]<t.top+t.height,ne=(e,n)=>({zoom:n,shift:[e.left+e.width/2-t.width/2,e.top+e.height/2-t.height/2]}),B=()=>({left:0,top:0,width:t.width,height:t.height}),re=(e,t)=>({left:e.left-t,top:e.top-t,width:e.width+2*t,height:e.height+2*t}),H=(e,t)=>{let n=Math.max(e.left,t.left),r=Math.max(e.top,t.top);return{left:n,top:r,width:Math.max(0,Math.min(e.left+e.width,t.left+t.width)-n),height:Math.max(0,Math.min(e.top+e.height,t.top+t.height)-r)}},ae=(e,t)=>{let n=Math.min(e.left,t.left),r=Math.min(e.top,t.top);return{left:n,top:r,width:Math.max(e.left+e.width,t.left+t.width)-n,height:Math.max(e.top+e.height,t.top+t.height)-r}},W=(e,t,n)=>{let r=i_(e,t,n);return{left:r.left,top:r.top,width:r.right-r.left,height:r.bottom-r.top}},oe=t=>{if(r&&Math.abs(r.width-t.width)<.5&&Math.abs(r.height-t.height)<.5)return;let{base:n,zoom:i}=Gh(t.width,t.height),a=[];for(let[t,r]of v_.entries())a.push(t&&v_[t-1]===r?a[t-1]:y_[r]({aspects:e.aspects,base:n}));r={looks:a,zoom:i,width:t.width,height:t.height},s=null,p(),w.clear()},se=(e,n)=>{let[r,i,a]=F(e,n.at),o=n.size*V*a+24,[,s,c]=[[r,-o-r,0],[t.width-r,t.width+o-r,0],[i,0,-o-i],[t.height-i,0,t.height+o-i]].sort((e,t)=>e[0]-t[0])[0];return{...n,at:I(e,[r+s,i+c,a])}},le=(i,a)=>{let[o,s]=[r.looks[i-1],r.looks[i]],c=__.change,[u,d]=[P(i-1,i),P(i,i+c.over)],[f,p]=[o,s].map(e=>e.framed?n:B()),m=o.framed?re(f,Math.max(f.width,f.height)/2):f,h=O(o,u).filter(e=>e.size>0&&te(R(a,O_(e,o.framed?2:0,a)),m)),g=h.map(e=>O_(e,o.framed?2:0,a)),_=s.lives(d).filter(e=>e.size>0&&te(R(a,O_(e,0,a)),p)),v=(e,t)=>{let[n,r,i,o]=R(a,e),s=Math.min(i,t.left+t.width)-Math.max(n,t.left),c=Math.min(o,t.top+t.height)-Math.max(r,t.top);return Math.max(0,s)*Math.max(0,c)/Math.max(1e-9,(i-n)*(o-r))},y=e=>{let t=ie(e,...E(e)).map(e=>F(a,e));return Math.abs(t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return e+n[0]*i[1]-i[0]*n[1]},0)/2)},b=e=>e.drum?y(e)/Math.max(1e-9,y({...e,drum:void 0,q:[0,0,0,1]})):1,x=e=>{let t=O_(e,0,a);return v(t,p)*b(t)},S=e=>x(e)<c.place,C=_.filter(e=>!S(e)&&s.rises?.(e)),T=_.filter(e=>!S(e)&&!s.rises?.(e)),D=_.filter(S),k=.001,A=t=>{let n=e.still||o.step!==void 0?null:j(o,t.key,u+k);return n?[0,1,2].map(e=>(n.at[e]-t.at[e])/k*__.runs*c.over):[0,0,0]},M=(e,t)=>{let[n,r]=[F(a,e),F(a,t)];return Math.hypot(n[0]-r[0],n[1]-r[1])},N=(e,t)=>M(g[t].at,T[e].at),z=g.map(e=>v(e,f)*b(e)),ne=Math.max(0,...z),H=z.map(e=>e>=Math.min(c.place,ne)),ae=Math.ceil(T.length/Math.max(1,H.filter(Boolean).length)),U=T.map(()=>-1),W=g.map(()=>0),oe=T.map((e,t)=>T.flatMap((n,r)=>r!==t&&M(e.at,n.at)<=1?[r]:[])),se=(e,t)=>oe[e].some(e=>U[e]>=0&&g[U[e]].picture===t),le=T.flatMap((e,t)=>g.flatMap((e,n)=>H[n]?[{p:t,i:n,reach:N(t,n)}]:[])).sort((e,t)=>e.reach-t.reach),ue=o.keeps?ye(l.get(i-1),ve(i-1))?.ranks:void 0,G=e=>ue?.get(h[e].key),de=e=>G(e)??h[e].layer??g[e].size*F(a,g[e].at)[2],K=s.step===void 0?[]:s.lives(d+2*s.step).filter(e=>!_.some(t=>t.key===e.key)),fe=Math.max(-1/0,...T.map(e=>e.layer??0)),me=new Set(K.filter(e=>Math.abs((e.layer??0)-fe)<c.twins).map(e=>e.picture)),q=(e,t)=>se(e,t)||oe[e].length>0&&me.has(t),he=g.map(e=>({key:e.key,...pe(e,a)})),J=(e,t)=>Th(he[e].seen,he[t].seen)&&(G(e)!==void 0&&G(t)!==void 0?G(e)>G(t):h[e].layer!==void 0&&h[t].layer!==void 0?h[e].layer>h[t].layer:Ph(he[e],he[t],[0,0,1e3])===1),ge=e=>g.some((t,n)=>n!==e&&J(n,e));for(let e of[0,1,2])for(let t of le)U[t.p]===-1&&W[t.i]<ae&&(e===2||!q(t.p,g[t.i].picture)&&(e===1||!ge(t.i)))&&(U[t.p]=t.i,W[t.i]++);for(let e=0,t=!0;t&&e<20;e++){t=!1;for(let e=0;e<T.length;e++)for(let n=e+1;n<T.length;n++){let[r,i]=[U[e],U[n]];r===i||r<0||i<0||Math.max(N(e,i),N(n,r))<Math.max(N(e,r),N(n,i))-1e-6&&([U[e],U[n]]=[i,r],t=!0)}}let _e=Math.max(0,...T.map((e,t)=>U[t]<0?0:N(t,U[t]))),be=(e,t)=>T.every((n,r)=>U[r]!==t||N(r,e)<=c.longer*_e);for(let e=0,t=!0;t&&e<g.length;e++){t=!1;for(let e=0;e<g.length;e++){let n=t=>T.some((n,r)=>U[r]===e&&q(r,g[t].picture)),r=t=>H[t]&&!W[t]&&J(t,e)&&be(t,e),i=W[e]?(()=>{let e=g.findIndex((e,t)=>r(t)&&!n(t));return e>=0?e:g.findIndex((e,t)=>r(t))})():-1;if(!(i<0)){for(let t=0;t<T.length;t++)U[t]===e&&(U[t]=i);[W[i],W[e]]=[W[e],0],t=!0}}}let xe=T.map(e=>({key:e.key,...pe(O_(e,0,a),a)})),Se=(e,t,n,r)=>M(T[e].at,T[t].at)<=1||M(g[n].at,g[r].at)<=1&&Th(xe[e].seen,xe[t].seen);for(let e=0,t=!0;t&&e<T.length;e++){t=!1;for(let e=0;e<T.length;e++)for(let n=0;n<T.length;n++){let[r,i]=[U[e],U[n]];r<0||i<0||r===i||!Se(e,n,r,i)||(T[e].layer??0)>(T[n].layer??0)&&de(r)<de(i)&&([U[e],U[n]]=[i,r],t=!0)}}let Ce=T.map((e,t)=>T.map((n,r)=>({q:r,d:r===t?1/0:M(e.at,n.at)})).sort((e,t)=>e.d-t.d).slice(0,2).map(e=>e.q)),we=(e,t)=>{if(!Th(xe[e].seen,xe[t].seen))return!1;let n=Ph(xe[e],xe[t],[0,0,V]);return n===1||n===0&&(T[e].layer??0)>(T[t].layer??0)},Te=T.map(()=>-1),Ee=e.aspects.map(()=>0),De=new Set,Oe=new Map;for(let[e,t]of g.entries()){let n=T.map((e,t)=>t).filter(t=>U[t]===e).sort((t,n)=>N(t,e)-N(n,e)),r=n.find(e=>!n.some(t=>t!==e&&we(t,e)))??n[0];r!==void 0&&(Oe.set(e,r),De.add(r),Te[r]=t.picture,Ee[t.picture]++)}for(let t=0;t<T.length;t++){if(De.has(t)||U[t]===-1)continue;let n=[...Ce[t].map(e=>Te[e]),g[U[t]].picture];Te[t]=e.aspects.map((e,t)=>t).sort((e,t)=>Number(n.includes(e))-Number(n.includes(t))||Ee[e]-Ee[t]||e-t)[0],Ee[Te[t]]++}let ke=Math.hypot(t.width,t.height),je=[],Me=c.over*Ae.each*t.height,Ne=e=>vt(c.takes[0],c.takes[1],Y(e/ke,0,1)),Pe=e=>Y(Math.max(Ne(e),e/(c.pace*Me)),c.takes[0],c.takes[1]),Fe=(e,t)=>{let n=L(a,g[t].at,A(g[t])),[r,i]=[F(a,g[t].at),F(a,T[e].at)],o=(n[0]*(i[0]-r[0])+n[1]*(i[1]-r[1]))/Math.max(1e-9,N(e,t));return N(e,t)+2*T_*Pe(N(e,t))*Math.max(0,-o)},Ie=(e,t)=>Y(Math.max(Ne(N(e,t)),Fe(e,t)/(c.pace*Me)),c.takes[0],c.takes[1]),Le=(e,t)=>e.q.reduce((e,n,r)=>e+n*t.q[r],0)<0?-1:1;for(let[e,t]of T.entries()){let n=U[e];if(n<0)continue;w.set(t.key,{wall:-1,picture:Te[e]});let r=g[n];if(De.has(e)){je.push({key:t.key,twin:r.key,from:r,sets:o.keeps?void 0:h[n].layer,seenBy:a,velocity:A(r),to:t.key,a:0,b:Ie(e,n),sign:Le(r,t),turn:c.turns,lift:c.lift});continue}let i=1.05,[s,l,u]=r.at,d=Fe(e,n)/(c.pace*Me)<=Ne(N(e,n)),f={...O_(t,0,a),key:t.key,picture:Te[e]},[p,m]=F(a,t.at),_=ie(f,...E(f)).map(e=>{let[t,n]=F(a,e);return[t-p,n-m,0]}),{at:[v,y],k:b}=ee(a,r,_,[p,m]),x=i*Math.max(...ce(r,...E(r),8).map(e=>V-e[2]));je.push({key:t.key,from:d&&!r.drum?{...r,key:t.key,picture:Te[e],at:[s*i,l*i,V-(V-u)*i],size:r.size*i*.9,shape:E(r)}:{...f,at:I(a,[v,y,a.zoom/x]),size:b*f.size*x/(V-t.at[2]),clip:r.clip},seenBy:a,velocity:A(r),to:t.key,a:0,b:Ie(e,n),sign:Le(r,t),turn:c.turns,lift:c.lift,behind:T[Oe.get(n)].key})}for(let[e,t]of g.entries())W[e]||je.push({key:t.key,twin:t.key,from:t,sets:o.keeps?void 0:h[e].layer,seenBy:a,velocity:A(t),cut:o.framed?2:void 0,fades:C.length?c.rise[0]:void 0,to:{...t,at:[4*t.at[0],4*t.at[1],V-4*(V-t.at[2])],haze:1},a:0,b:c.takes[1]});for(let e of D)je.push({key:e.key,from:O_(s.comes(e,d),s.framed?2:0,a),seenBy:a,velocity:[0,0,0],to:e.key,a:0,b:c.takes[1],comes:!0});return{into:i,flights:je,from:f,to:p,orders:[],rises:new Set(C.map(e=>e.key))}},ue=(e,o,c,l,u,d=i,f=a,p=[])=>{let m=r.looks[d],h=ne(n,r.zoom),g=__.over,_=H(re(o,2+r_.slide*(1-l)),B()),v=e=>{let[t,n]=F(c,e.at);return(t-_.left)/_.width+(_.top+_.height-n)/_.height},y=e=>p.some(t=>{let n=t.get(e.key);return!!n&&te(R(c,n),H(o,B()))}),b=e.filter(e=>te(R(c,e),_)||y(e)).sort((e,t)=>v(e)-v(t)),[x,S]=[_.left+_.width/2,_.top+_.height/2],C=e=>{let[t,n]=F(h,e.at);return Math.hypot(t-x,n-S)},T=O(m,f).filter(e=>e.haze<.99&&te(R(h,O_(e,0,h)),n)).sort((e,t)=>e.at[2]-t.at[2]||C(t)-C(e)),D=e=>m.takes?.(e)??!0,k=new Map,N=new Map,P=new Map,I=__.over.gathers;if(u){let e=new Map(T.map(e=>[e.key,e]));for(let[t,n]of w)e.has(t)&&D(e.get(t))&&k.set(n.wall,e.get(t))}else if(m.round){w.clear();let e=T.filter(D),n=Math.min(e.length,b.length),r=[],i=new Map,a=b.length-1;for(let e=0;e<n;e++){let t=[e-1,e-2,e+1-n,e+2-n].flatMap(t=>t>=0&&t<e?[r[t].picture]:[]),o=a,s=1/0;for(let r=a;r>=n-1-e;r--){let e=b[r].picture,n=(i.get(e)??0)*10+(t.includes(e)?100:0)+(a-r);n<s&&([o,s]=[r,n])}let c=b[o];for(r.push(c),i.set(c.picture,(i.get(c.picture)??0)+1),a=o-1;a>=0&&r.includes(b[a]);)a--;o<b.length-1&&!r.includes(b[o+1])&&(a=o+1)}r.sort((e,t)=>b.indexOf(e)-b.indexOf(t));let o=e=>[e-2,e-1,e+1,e+2].some(t=>r[(t+n)%n]!==r[e]&&r[(t+n)%n].picture===r[e].picture);for(let e=0;e<n;e++)if(o(e)){for(let t=Math.max(0,e-3);t<Math.min(n,e+4);t++)if(t!==e){if([r[e],r[t]]=[r[t],r[e]],!o(e)&&!o(t))break;[r[e],r[t]]=[r[t],r[e]]}}let s=b.filter(e=>!r.includes(e));for(let[e,t]of s.entries())P.set(t.key,vt(g.away[0],g.away[1],s.length>1?e/(s.length-1):0));let[l,u]=[_.left+_.width/2,_.top+_.height/2];I=g.gathers;let[d,f]=g.gathers,p=M(m,d,I),v=O(m,p).filter(e=>D(e)&&ke(e.q,[0,0,1])[2]>g.round.faces).map(e=>F(h,e.at)).sort((e,t)=>Math.hypot(e[0]-l,e[1]-u)-Math.hypot(t[0]-l,t[1]-u))[0],y=r.map((e,t)=>{let n=p+t*m.round/A(m),[r,i]=[d,f];for(let e=0;e<40;e++){let e=(r+i)/2;M(m,e,I)<n?r=e:i=e}return t?i:d}),x=e=>{let t=M(m,y[e],I)-g.round.ride*m.round/A(m),[n,r]=[y[e]-.5,y[e]];for(let e=0;e<40;e++){let e=(n+r)/2;M(m,e,I)<t?n=e:r=e}return y[e]-r},S=g.away[1];for(let[e,n]of r.entries()){let[r,i]=F(c,n.at),a=v?Math.hypot(v[0]-r,v[1]-i):0,o=x(e);S=Math.max(S+g.after,y[e]-o-Y(a/(Ae.over*t.height*g.speed),...g.takes)),P.set(n.key,Math.max(g.away[1],Math.min(S,y[e]-o-g.takes[0])))}let C=new Set(e.map(e=>e.key)),E=v?[v[0],v[1]]:[l,u];for(let[e,t]of r.entries()){let n=M(m,y[e],I),r=null,i=1/0;for(let e of C){let t=j(m,e,n);if(ke(t.q,[0,0,1])[2]<.25)continue;let[a,o]=F(h,t.at),s=Math.hypot(a-E[0],o-E[1]);s<i&&([r,i]=[t,s])}r&&!e&&(E=[F(h,r.at)[0],F(h,r.at)[1]]),r&&(C.delete(r.key),k.set(t.key,r),N.set(t.key,y[e]),w.set(r.key,{wall:t.key,picture:t.picture}))}}else{w.clear();let e=T.filter(D),t=new Set,n=new Map;for(let r=1;t.size<Math.min(e.length,b.length);r++)for(let i=b.length-1;i>=0&&t.size<e.length;i--){let e=b[i];t.has(e)||(n.get(e.picture)??0)>=r||(t.add(e),n.set(e.picture,(n.get(e.picture)??0)+1))}let r=b.filter(e=>t.has(e)),i=e.slice(e.length-r.length),a=new Map(T.map(e=>[e.key,e.picture]));for(let[e,t]of i.entries())a.set(t.key,r[e].picture);let o=(e,t)=>Math.hypot(...[0,1,2].map(n=>e.at[n]-t.at[n])),s=1/0;for(let[e,t]of T.entries())for(let n of T.slice(e+1))s=Math.min(s,o(t,n));let c=new Map(i.map(e=>[e.key,T.filter(t=>t!==e&&o(t,e)<2.05*s)])),l=(e,t)=>c.get(e.key).some(e=>a.get(e.key)===t);for(let[e,t]of i.entries())if(l(t,r[e].picture))for(let n=Math.max(0,e-4);n<Math.min(i.length,e+5);n++){if(n===e)continue;let[o,s]=[r[e],r[n]];if([r[e],r[n]]=[s,o],a.set(t.key,s.picture),a.set(i[n].key,o.picture),!l(t,s.picture)&&!l(i[n],o.picture))break;[r[e],r[n]]=[o,s],a.set(t.key,o.picture),a.set(i[n].key,s.picture)}for(let[e,t]of i.entries())k.set(r[e].key,t),w.set(t.key,{wall:r[e].key,picture:r[e].picture})}let L=new Map(T.map((e,t)=>[e.key,t])),ee=e=>e?L.get(e.key):1/0,z=b.map(e=>({c:e,l:k.get(e.key)}));u&&z.sort((e,t)=>ee(e.l)-ee(t.l)||0);let ae=[],U=m.end(),W=z.map(({c:e,l:n},r)=>{let i=z.length>1?r/(z.length-1):0,a=u?{...se(c,e),lens:c}:m.round?{...e,at:[e.at[0],e.at[1],e.at[2]-5*(V-e.at[2])],haze:1,lens:c}:{...e,at:U,haze:1,lens:h},[o,s]=[F(c,e.at),n?F(h,n.at):F(a.lens,a.at)],l=Math.max(1,Math.hypot(s[0]-o[0],s[1]-o[1])),d=P.get(e.key)??vt(g.leaves[0],g.leaves[1],i);return{c:e,l:n,rank:i,out:a,trip:l,a:d,b:N.get(e.key)??d+(!n&&m.round&&!u?g.takes[1]:Y(l/(Ae.over*t.height*g.speed),...g.takes))}}),oe=-1/0;for(let e of W.filter(e=>e.l&&!N.has(e.c.key)).sort((e,t)=>ee(e.l)-ee(t.l)))e.b=Math.max(e.b,oe+g.after),oe=e.b;let ce=[...W].sort((e,t)=>e.a-t.a);for(let[e,t]of ce.entries())t.rank=ce.length>1?e/(ce.length-1):0;let le=(e,t)=>{let n=g.round.ride*m.round/A(m),[r,i]=[.3,.95];for(let a=0;a<40;a++){let a=(r+i)/2;M(m,t,I)-M(m,e+a*(t-e),I)>n?r=a:i=a}return r},ue=new Map([...N].sort((e,t)=>e[1]-t[1]).map(([e],t)=>[e,t]));for(let{c:e,l:n,rank:r,out:i,trip:a,a:o,b:s}of W){let l=Y(1-g.turns.last*Math.hypot(t.width,t.height)/a,...g.turns.from);ae.push({key:n?n.key:e.key,twin:e.key,from:e,seenBy:c,velocity:[0,0,0],to:n?n.key:i,a:o,b:Math.min(s,g.done),sinks:!n,rank:r,turns:l,round:N.has(e.key),slides:N.has(e.key)?le(o,Math.min(s,g.done)):void 0,order:N.has(e.key)?ue.get(e.key)??0:void 0,far:!n&&!!m.round&&!u})}let G=new Set(z.flatMap(e=>e.l?[e.l.key]:[])),de=T.filter(e=>!G.has(e.key)&&D(e)),K=new Map;for(let[e,t]of de.entries()){if(!m.rises?.(t))continue;let n=vt(g.far[0],g.far[1]-g.comes,de.length>1?e/(de.length-1):0);K.set(t.key,[n,n+g.comes])}for(let e of T){if(G.has(e.key)||K.has(e.key))continue;let t=de.indexOf(e),n=t<0?g.near[0]:vt(g.far[0],g.far[1]-g.comes,de.length>1?t/(de.length-1):0);ae.push({key:e.key,from:O_(m.comes(e,f),1,h),seenBy:h,velocity:[0,0,0],to:e.key,a:n,b:t<0?g.near[1]:n+g.comes,comes:!0})}s={flights:ae,wall:o,behind:Math.min(...b.map(e=>F(c,e.at)[2]))/1.08,ahead:m.round?g.round.ahead*Math.max(...[0,.5].flatMap(e=>O(m,M(m,g.gathers[0],I)+e*m.round/T.length).map(e=>O_(e,0,h)).flatMap(e=>[e.at,...ie(e,...E(e))]).map(e=>F(h,e)[2])),...b.flatMap(e=>ie(e,...E(e)).map(e=>F(c,e)[2]))):0,rises:K,gathers:I}},de=(e,t,i,a,o)=>{let c=ne(n,r.zoom),l=G(t,[e.a,e.b]),u=e.round&&typeof e.to==`number`,d=u?e.slides:1,f=e.a+d*(e.b-e.a),p=E_(l/d,Y(__.over.soft/(d*(e.b-e.a)),.25,.4)),m=u?1-S_(p,[1-__.over.round.sinks,1]):1,h=(e,t,n)=>{let r=O_(j(i,e,t),1,c),a=n*__.over.round.out*r.size*E(r)[0],o=Me([-r.at[0],-r.at[1],V-r.at[2]]);return{...r,at:[r.at[0]+o[0]*a,r.at[1]+o[1]*a,r.at[2]+o[2]*a]}},g=typeof e.to==`number`?u&&l<d?h(e.to,M(i,f),m):O_(j(i,e.to,a),1,c):e.to;if(e.comes){let t=E_(l,.4);return{...z(o,g,t),key:e.key,q:g.q,clip:i.framed?2:0,lens:c}}let[_,v]=[F(e.seenBy,o.at),F(g.lens??c,g.at)],y=vt(o.size*_[2],g.size*v[2],p),b=s.behind/(1+.1*(1-(e.rank??1))),x=vt(_[2],b,S_(l,[0,.35])),S=S_(l,e.sinks?[.05,.8]:[.08,1]),C=vt(_[2],s.ahead*__.over.round.apart**(e.order??0),S_(l,[0,.35*d])),w=u?1/vt(1/C,1/v[2],S_(l,[.5*d,d])):1/vt(1/(x+(v[2]-b)*S),1/x+(1/v[2]-1/b)*S,.15),[T,D]=[vt(_[0],v[0],p),vt(_[1],v[1],p)],O=U(o.q,g.q,S_(l,u?[__.over.round.turns[0]*d,__.over.round.turns[1]*d]:[e.turns??.5,__.over.turns.to]));if(u&&l<d){let t=.001,n=h(e.to,M(i,f+t),m),r=F(c,n.at),a=-w_(1-l/d)*d*(e.b-e.a)/t;[T,D]=[T+(r[0]-v[0])*a,D+(r[1]-v[1])*a],y+=(n.size*r[2]-g.size*v[2])*a;let[o,s,u,p]=qe(n.q,[-g.q[0],-g.q[1],-g.q[2],g.q[3]]),_=Math.hypot(o,s,u)*Math.sign(p||1),b=Math.abs(_)<1e-12?0:2*Math.atan2(Math.abs(_),Math.abs(p))*a/_;O=qe(N([o*b,s*b,u*b]),O)}let k={zoom:e.seenBy.zoom*(c.zoom/e.seenBy.zoom)**p,shift:[vt(e.seenBy.shift[0],c.shift[0],p),vt(e.seenBy.shift[1],c.shift[1],p)]},[A,P]=[E(o),E(g)];return{...z(o,{...g,key:e.key},p),key:e.key,picture:o.picture,at:I(k,[T,D,w]),felt:u?I(k,[T,D,1/vt(1/_[2],1/v[2],p)]):void 0,size:y/w,q:O,haze:vt(o.haze,g.haze,S_(l,e.sinks?[.65,.92]:[.4,1])),clip:1,shape:o.shape||g.shape?[vt(A[0],P[0],p),vt(A[1],P[1],p)]:null,lens:k}},K=(e,t,i,a,o)=>{let s=ne(n,r.zoom),c=typeof e.to==`number`?(()=>{let t=j(i,e.to,a);return t?O_(t,1,s):o})():e.to,l=x_(t),u=C_(t),d=e.b-e.a,[f,p]=[F(e.seenBy,o.at),F(s,c.at)],m=L(e.seenBy,o.at,e.velocity),[h,g]=[0,1].map(e=>u*f[e]+w_(t)*m[e]*d+(1-u)*p[e]),_=vt(o.size,c.size,l),v=u*o.size*f[2]+w_(t)*o.size*m[2]*d+(1-u)*c.size*p[2],y=e.lift?1+e.lift*(S_(t,[0,.3])-S_(t,[e.turn?.[1]??.85,1])):1,b=[h,g,v/_*y],x={zoom:e.seenBy.zoom*(s.zoom/e.seenBy.zoom)**(1-u),shift:[vt(e.seenBy.shift[0],s.shift[0],1-u),vt(e.seenBy.shift[1],s.shift[1],1-u)]},[S,C]=[E(o),E(c)];return{...z(o,{...c,key:e.key},l),key:e.key,picture:o.picture,at:I(x,b),size:_/y,drum:D_(z(o,c,l).drum,_/y/(c.drum?c.size:o.size)),felt:e.lift?I(x,[h,g,v/_]):void 0,q:e.sign?pt([0,1,2,3].map(n=>vt(o.q[n],e.sign*c.q[n],e.turn?S_(t,e.turn):l))):U(o.q,c.q,e.turn?S_(t,e.turn):l),haze:i.hazeAt?vt(o.haze,i.hazeAt(I(s,b)),S_(t,[0,.35])):vt(o.haze,c.haze,e.fades?S_(t,[0,e.fades]):l),clip:e.cut??(e.comes?i.framed?2:0:1),shape:o.shape||c.shape?[vt(S[0],C[0],l),vt(S[1],C[1],l)]:null,lens:x}},fe=(e,t,n)=>e===t?n:I(t,F(e,n)),pe=(e,t)=>{let n=ie(e,...E(e)).map(n=>fe(e.lens??t,t,n));return{corners:n,seen:n.map(([e,t,n])=>{let r=Math.max(1,V-n);return[V*e/r,-V*t/r]}),depth:V-fe(e.lens??t,t,e.at)[2]}},me=(e,t,n,r=!1)=>{let i=new Map;for(let{card:t,twin:r}of e)r!==void 0&&!n.ranks.has(t.key)&&n.ranks.has(r)&&i.set(r,t.key);let a=e.map(({card:e,goal:n,under:r,layer:i,goes:a,sinks:o,rises:s,sets:c})=>({key:e.key,...pe(e,t),layer:i,sets:c,goal:{...pe(n,t),layer:a},under:r,sinks:o,rises:s,haze:e.haze})),o=zh(n,i),s=new Set(e.filter(e=>e.free).map(e=>e.card.key)),c=s.size?{ranks:o.ranks,shares:new Map([...o.shares].filter(([e])=>!e.split(`:`).some(e=>s.has(Number(e))))),met:o.met}:o;return Uh(a,[0,0,V],c,r)},q=(e,t)=>{if(e.every(e=>e.layer!==void 0)){let t=[...e].sort((e,t)=>e.layer-t.layer);return T={ranks:new Map(t.map((e,t)=>[e.card.key,t])),shares:new Map},t.map(e=>e.card)}let n=me(e,t,T);return T=n.last,n.order.map(t=>e[t].card)},he=(e,t,n)=>{let i=r.looks[e.into],a=P(e.into,e.into+t*__.change.over),o=[],s=new Map,c=new Set;for(let r of e.flights){let e=G(t,[r.a,r.b]);if(e>=1)continue;c.add(r.key),e>0&&s.set(r.key,e);let l=K(r,e,i,a,r.from),u=typeof r.to==`number`?j(i,r.to,a):null,d=r.comes?l:u?O_(u,1,n):r.to;o.push({card:l,goal:d,twin:r.twin,free:r.comes&&e>0,under:r.behind,goes:u?.layer,sinks:!u&&!r.comes,sets:e>0?void 0:r.sets})}for(let e of o){let t=e.under===void 0?null:o.find(t=>t.card.key===e.under);if(!t)continue;let[r,i]=[e.card,t.card].map(e=>({key:e.key,...pe(e,n)}));if(!Th(r.seen,i.seen)||Ph(r,i,[0,0,1e3])!==0)continue;let a=Math.min(...r.corners.map(e=>V-e[2])),s=1.01*Math.max(...i.corners.map(e=>V-e[2]))/Math.max(1,a),[c,l,u]=e.card.at;e.card={...e.card,at:[c*s,l*s,V-(V-u)*s],size:e.card.size*s,drum:D_(e.card.drum,s)}}for(let r of Be(i,a,c,n,e)){let n=e.rises.has(r.card.key)&&t<__.change.rise[1],i=n?Math.max(r.card.haze,1-S_(t,__.change.rise)):r.card.haze,a={...r.card,haze:i};o.push({...r,card:a,goal:a,rises:n})}return{items:o,flying:s}},J=e=>e>0&&e<7&&r.looks[e-1]!==r.looks[e],ge=e=>{let t=e;for(;t>0&&v_[t-1]===v_[e];)t--;return t},_e=e=>[e+(J(e)?__.change.over:0),e+1],ve=e=>{let[t,n]=_e(e);return Math.round((n-t)*__.change.steps/__.change.over)},ye=(e,t)=>e&&e.length>t?n_(e,t,Qg):void 0,be=(e,t,i)=>{let a=r.looks[0],o=M(a,e),c=new Set(a.lives(o).map(e=>e.key)),l=[],u=new Map,d=new Set,f=new Set;for(let n of s.flights){let r=G(e,[n.a,n.b]);if(f.add(n.key),n.sinks&&r>=1||n.comes&&r<=0||typeof n.to==`number`&&r>=1&&!c.has(n.to))continue;let s=typeof n.to==`number`?j(a,n.to,o):null,p=r>=1&&s!==null,m=p?O_(s,n.comes?a.framed?2:0:1,t):de(n,e,a,o,i(n));r>0&&r<1&&u.set(n.key,r),n.far&&d.add(n.key);let h=s?n.comes?m:O_(s,1,t):n.to;l.push({card:m,goal:h,twin:n.twin,free:!(a.round&&r<1),layer:p&&!a.keeps?s.layer:void 0,goes:s?.layer})}for(let n of Be(a,o,f,t)){let t=s.rises.get(n.card.key),r=t?Math.max(n.card.haze,1-S_(e,t)):n.card.haze,i={...n.card,haze:r};l.push({card:i,goal:i,free:!0})}let p=ae(s.wall,n);return{items:l,flying:u,quiet:d,cut:e<=__.over.close[0]?W(S_(e,__.over.open),s.wall,p):W(S_(e,__.over.close),p,n)}},xe=(e,t)=>{let i=Y(Math.floor(e),0,6);if(J(i)&&e-i<__.change.over){let n=c.get(i),r=(e-i)/__.change.over,{items:a,flying:o}=he(n,r,t),s=W(Ye(r,[0,1]),n.from,n.to);return{items:a,flying:o,quiet:new Set,cut:s,change:n,u:r}}let a=r.looks[i];return{items:Be(a,P(i,e),new Set,t,c.get(ge(i))),flying:new Map,quiet:new Set,cut:n}},Se=e=>Ae.over+e*Ae.each,Ce=(e,t)=>{if(e>=Ae.over)return xe((e-Ae.over)/Ae.each,t);let n=m?S(b+e):null;return be(e/Ae.over,t,e=>(e.twin===void 0?void 0:n?.get(e.twin))??e.from)},we=(e,t)=>{if(!u.has(e)){let t=[...Array(7).keys()].find(t=>t>e&&J(t))??7;u.set(e,{from:e?Se(e):0,to:Se(t),rests:e?Se(e+__.change.over):Ae.over,steps:[],done:!1})}let n=u.get(e);if(n.done)return!1;let r=1/__.paper.steps,i=n.steps.length,a=n.from+i*r,o=[...u.values()].find(e=>e.to===n.from),s=o?.steps.length?d(o,o.steps.length-1):void 0,c=i?d(n,i-1):s??b_,l=i||s?r/__.paper.pace:0,f=ze(c,Ce(a,t),l,t);return n.steps.push(f),(a+r>=n.to-1e-9||a>=n.rests&&!f.size)&&(n.done=!0),!0},Te=e=>{let t;for(let n of u.values())n.from<=e&&(!t||n.from>t.from)&&(t=n);return t?.steps.length?t:void 0},Ee=e=>{let t=Te(e);if(!t)return b_;let n=(e-t.from)*__.paper.steps,r=t.steps.length-1;if(n>=r)return d(t,r);let i=Math.max(0,Math.floor(n)),a=n-i,[o,s]=[d(t,i),d(t,i+1)],c=new Map;for(let[e,t]of o){let n=s.get(e);c.set(e,n?Oe(t,n,a):t)}for(let[e,t]of s)o.has(e)||c.set(e,t);return c},Oe=(e,t,n)=>({...e,bend:vt(e.bend,t.bend,n),axis:e.axis+mm(t.axis-e.axis)*n,flutter:vt(e.flutter,t.flutter,n),phase:vt(e.phase,t.phase,n),line:e.line===void 0||t.line===void 0?e.line??t.line:e.line+mm(t.line-e.line)*n,aim:e.aim===void 0||t.aim===void 0?e.aim??t.aim:e.aim+mm(t.aim-e.aim)*n}),je=e=>{let t=r.looks;if(!s&&m&&y){let e=m(x),t=Et(x).slide,n=[S(b),S(Ue[1])];return ue(e.cards,y,e.lens,t,!1,0,0,n),!0}if(s&&we(0,e))return!0;let n=Ae.over*__.paper.steps;if(s&&m&&f.length<=n){let t=f.length,{items:r}=Ce(t/n*Ae.over,e);return f.push(me(r,e,t?n_(f,t-1,Qg):Rh).last),!0}for(let n=0;n<7;n++){if(J(n)){if(!c.has(n))return c.set(n,le(n,e)),!0;if(we(n,e))return!0;let r=c.get(n),i=r.orders.length;if(i<=__.change.steps){let a=i?n_(r.orders,i-1,Qg):t[n-1].keeps?ye(l.get(n-1),ve(n-1)):Rh,{items:o}=he(r,i/__.change.steps,e);return r.orders.push(me(o,e,a,i>0).last),!0}}if(t[n].keeps){let r=l.get(n)??[];l.set(n,r);let i=ve(n),a=r.length;if(a<=i){let o=a?n_(r,a-1,Qg):J(n)?ye(c.get(n).orders,__.change.steps):t[n-1]===t[n]?ye(l.get(n-1),ve(n-1)):Rh,[s,u]=_e(n),d=P(n,s+(u-s)*a/i),f=Be(t[n],d,new Set,e,c.get(ge(n)));return r.push(me(f,e,o,!1).last),!0}}}return!1},Ne=t=>{let n=performance.now()+(e.budget??__.change.budget);for(;performance.now()<n&&je(t););},Pe=(e,t,n)=>e?.length?n_(e,Math.min(Y(Math.floor(t*n+1e-9),0,n),e.length-1),Qg):void 0,Fe=(e,t)=>{let i=n&&r?ne(n,r.zoom):t;return{at:I(i,F(e.lens??t,e.felt??e.at)),zoom:i.zoom}},Le=(e,t,n)=>gm(e,t,n,!0),Re=(e,t)=>Math.abs(e.bend)<.001&&Math.abs(e.bends)<.01&&e.flutter<1e-4&&Math.abs(e.flutters)<.001&&(Math.abs(t.bend)<1e-6||e.line===void 0||Math.abs(mm(e.line-t.axis))<.001),ze=(e,t,n,r)=>{let i=new Map;for(let{card:a,twin:o}of t.items){let s=e.get(a.key)??(o===void 0?void 0:e.get(o)),c=t.flying.get(a.key);if(c===void 0&&!s)continue;let{at:l,zoom:u}=Fe(a,r),d=c===void 0?0:__.felt*gt(0,__.air,c)*(1-gt(__.lands,1,c))*(t.quiet.has(a.key)?__.goes:1),f=c===void 0?fm(s,l,n):dm(s,l,a.q,n,d*u*V/Math.max(1,V-l[2])),[,p]=Le(a,{...f,line:s?.line,aim:s?.aim},n);c===void 0&&Re(p,a)||i.set(a.key,p)}return i},Be=(e,t,n,r,i)=>{let a=new Map(e.keeps&&i?i.flights.flatMap(e=>e.behind===void 0?[]:[[e.key,e.behind]]):[]);return O(e,t).filter(e=>!n.has(e.key)).map(t=>{let n=O_(t,e.framed?2:0,r);return{card:n,goal:n,layer:e.keeps?void 0:t.layer,goes:t.layer,under:a.get(t.key)}})},Ve=new Set,He=()=>[...w],We=e=>e.map((t,n)=>Zg(n_(e,n,Qg)));return{get field(){return n},makeOne(){return!!n&&!!r&&je(ne(n,r.zoom))},pieces(){let e=[],t=(t,n,r)=>{n&&!Ve.has(t)&&(Ve.add(t),e.push(r()))};t(`way`,!!s,()=>({kind:`way`,way:s,bonds:He()}));for(let[e,n]of u)t(`paper ${e}`,n.done,()=>({kind:`paper`,k:e,paper:{...n,steps:n.steps.map((e,t)=>e_(d(n,t)))}}));t(`way orders`,f.length>Ae.over*__.paper.steps,()=>({kind:`way orders`,steps:We(f)}));for(let[e,n]of c)t(`swap ${e}`,!0,()=>({kind:`swap`,k:e,swap:{...n,orders:[]},bonds:He()})),t(`orders ${e}`,n.orders.length>__.change.steps,()=>({kind:`orders`,k:e,steps:We(n.orders)}));for(let[e,n]of l)t(`rest ${e}`,n.length>ve(e),()=>({kind:`rest`,k:e,steps:We(n)}));return e},feed(e,t){if(!(e!==h||g)){if(`bonds`in t)for(let[e,n]of t.bonds)w.set(e,n);if(t.kind===`way`)s??=t.way;else if(t.kind===`paper`)u.set(t.k,t.paper);else if(t.kind===`way orders`)f=t.steps;else if(t.kind===`swap`)c.has(t.k)||c.set(t.k,t.swap);else if(t.kind===`orders`){let e=c.get(t.k);e&&(e.orders=t.steps)}else l.set(t.k,t.steps)}},resize(e){t=e,r=null,s=null,p(),w.clear()},step(t,u,d){n=u.field,u.wall&&(y=u.wall);for(let e of d.cards)C.set(e.key,e);m=d.ahead??null,m&&d.casts!==h&&(h=d.casts,s=null,p(),w.clear(),g=!1);let b=e.fed?g:!m||!!d.made;if(!n||u.over<=0)return o=u.over,a=0,i=0,C=new Map(d.cards.map(e=>[e.key,e])),T=Rh,n?(oe(n),m?b&&Ne(ne(n,r.zoom)):(s=null,p(),w.clear()),null):null;oe(n);let x=r.looks,S=ne(n,r.zoom),{over:E}=u,D,O,k=null,A=!1;if(E<1){if(i=0,!s||!m&&o<=0&&E>0){if(!u.wall)return null;p(),ue(d.cards,u.wall,d.lens,u.slide??1,o>=1),g=!0}else b&&Ne(S);a=M(x[0],E),D=be(E,S,e=>e.twin===void 0?e.from:C.get(e.twin)??e.from),O=E*Ae.over,D.items.every(e=>e.layer!==void 0)||(k=Pe(f,E,Ae.over*__.paper.steps)??null)}else{let e=Math.max(0,u.pick??0),t=Y(Math.floor(e),0,6);i=t,a=P(t,e);for(let t of[...c.values()].sort((e,t)=>t.into-e.into)){if(e>=t.into)continue;let n=new Map;for(let e of t.flights)e.twin!==void 0&&e.twin!==e.key&&n.set(e.key,e.twin);T=zh(T,n)}b&&Ne(S);for(let e=1;e<=t;e++)J(e)&&!c.has(e)&&c.set(e,le(e,S));if(D=xe(e,S),O=Se(e),D.change)k=Pe(D.change.orders,D.u,__.change.steps)??T,A=!0;else if(x[t].keeps){let[n,r]=_e(t);k=Pe(l.get(t),(e-n)/(r-n),ve(t))??null}}o=E;let j=Te(O);j&&_===null&&O>j.from+1e-9&&(v=O),_=j??null;let N=Ee(O);if(v!==null){let e=Y(Math.abs(O-v)/__.paper.fade,0,1);if(e>=1)v=null;else{let t=e*e*(3-2*e);N=new Map([...N].map(([e,n])=>[e,{...n,bend:n.bend*t,flutter:n.flutter*t}]))}}let F=D.items.map(e=>{let t=N.get(e.card.key)??(e.twin===void 0?void 0:N.get(e.twin));return t?{...e,card:Le(e.card,t,0)[0]}:e}),{cut:I}=D;if(!k)return{cards:q(F,S),cut:I,field:n,lens:S};let L=me(F,S,k,A);return T=L.last,{cards:L.order.map(e=>F[e].card),cut:I,field:n,lens:S}}}}var A_={inner:.5,above:22*Math.PI/180,nearest:2.6,wide:.4,high:.32};function j_(e,t){let n=Math.min(A_.wide*e.width,A_.high*e.height,V/A_.nearest),r=fe(A_.above,0,0);return{centre:[0,0,0],axis:ke(r,[0,1,0]),front:ke(r,[0,0,1]),side:[1,0,0],radius:n,count:t,width:(1-A_.inner)*n}}var M_=(e,t)=>[0,1,2].map(n=>Math.cos(t)*e.front[n]+Math.sin(t)*e.side[n]);function N_(e,t,n){let r=e[0]+t[1]+n[2];if(r>0){let i=.5/Math.sqrt(r+1);return[(t[2]-n[1])*i,(n[0]-e[2])*i,(e[1]-t[0])*i,.25/i]}if(e[0]>t[1]&&e[0]>n[2]){let r=2*Math.sqrt(1+e[0]-t[1]-n[2]);return[.25*r,(t[0]+e[1])/r,(n[0]+e[2])/r,(t[2]-n[1])/r]}if(t[1]>n[2]){let r=2*Math.sqrt(1+t[1]-e[0]-n[2]);return[(t[0]+e[1])/r,.25*r,(n[1]+t[2])/r,(n[0]-e[2])/r]}let i=2*Math.sqrt(1+n[2]-e[0]-t[1]);return[(n[0]+e[2])/i,(n[1]+t[2])/i,.25*i,(e[1]-t[0])/i]}var P_=(e,t,n)=>2*Math.PI*t/e.count+n;function F_(e,t,n){let r=M_(e,P_(e,t,n)),i=(1+A_.inner)/2*e.radius;return{at:[0,1,2].map(t=>e.centre[t]+i*r[t]),q:N_(r,e.axis,Se(r,e.axis))}}function I_(e,t){let n=[t[0]-e.centre[0],t[1]-e.centre[1],t[2]-e.centre[2]],r=n[0]*e.axis[0]+n[1]*e.axis[1]+n[2]*e.axis[2],i=n[0]*e.front[0]+n[1]*e.front[1]+n[2]*e.front[2],a=n[0]*e.side[0]+n[1]*e.side[1]+n[2]*e.side[2];return{angle:Math.atan2(a,i),out:Math.hypot(i,a),up:r}}function L_(e,t,n,r){let i=M_(e,t);return[0,1,2].map(t=>e.centre[t]+n*i[t]+r*e.axis[t])}var R_=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]);function z_(e,t,n){let r=e.map(e=>R_(e,t)),i=Math.max(...r),a=e=>Math.floor((i-r[e])/n),o=n=>Math.atan2(e[n][1]-t[1],e[n][0]-t[0]);return e.map((e,t)=>t).sort((e,t)=>a(e)-a(t)||(a(e)%2?-1:1)*(o(e)-o(t))||e-t)}function B_(e,t,n,r=[]){let i=[...e],a=Array(n).fill(0);for(let t of e)t>=0&&a[t]++;let o=Array.from({length:n},(e,t)=>t);for(let[n,s]of e.entries()){if(s>=0)continue;let e=new Set((t[n]??[]).map(e=>i[e]).filter(e=>e>=0)),c=o.filter(t=>!e.has(t)),l=c.filter(e=>(r[n]??o).includes(e)),u=l.length?l:c.length?c:o,d=u[0];for(let e of u)a[e]<a[d]&&(d=e);i[n]=d,a[d]++}return i}var V_={spin:.25,lies:.55,left:.3,over:.65,sway:6*Math.PI/180,swings:1.2,drift:.04},H_=(e,t,n,r,i)=>{let a=Y(i,0,1),o=a*a,s=o*a,c=s*a,l=c*a;return e*(1-10*s+15*c-6*l)+t*(a-6*s+8*c-3*l)+n*(.5*o-1.5*s+1.5*c-.5*l)+r*(10*s-15*c+6*l)},U_=e=>H_(0,0,0,1,e),W_=e=>{let t=Y(e,0,1);return-4*t**3+7*t**4-3*t**5},G_=14,K_=e=>{let t=Y(e/V_.spin,0,1);return V_.spin*(t-(t**6-3*t**5+2.5*t**4))},q_=e=>[-e[0],-e[1],-e[2],e[3]];function J_(e,t,n,r,i,a,o){let s=ke(n.turn,[1,0,0]),c=ke(n.turn,[0,1,0]),l=ke(n.turn,[0,0,1]),u=e=>{let t=[e[0]-n.middle[0],e[1]-n.middle[1],e[2]-n.middle[2]];return[Te(t,s),Te(t,c),Te(t,l)]},d=e=>[Te(e,s),Te(e,c),Te(e,l)],f=u(e.at),p=u(t),m=d(e.velocity).map(e=>e*i),h=d(e.curve).map(e=>e*i*i),g=r/V_.over,_=V_.over,v=[0,1].map(e=>H_(f[e],m[e]*_,h[e]*_*_,p[e],g)),y=V_.lies,b=f[2]*V_.left,x=-b/(1-y),S=r<y?H_(f[2],m[2]*y,h[2]*y*y,b,r/y)+x*y*W_(r/y):H_(b,x*(1-y),0,0,(r-y)/(1-y)),C=G_+a*.5*Math.sin(V_.sway),w=0;if(b>C){let e=1;for(let t=0;t<24;t++){let t=(w+e)/2;b*(1-t-4*t**3+7*t**4-3*t**5)>C?w=t:e=t}}let T=y+(1-y)*w,E=U_((r-y)/.3)*(1-U_((r-T+.25)/.25)),D=2*Math.PI*V_.swings*r+o,O=Math.atan2(p[1]-f[1],p[0]-f[0]),k=[-Math.sin(O),Math.cos(O)],A=V_.drift*a*E*Math.sin(D),j=[0,1,2].map(e=>n.middle[e]+s[e]*(v[0]+k[0]*A)+c[e]*(v[1]+k[1]*A)+l[e]*S),M=t=>N(e.spin.map(e=>e*i*t)),P=qe(M(K_(1)),e.q),F=qe(n.turn,q_(P)),I=[0,1,2].map(e=>s[e]*k[1]-c[e]*k[0]),L=N(I.map(e=>e*V_.sway*E*Math.cos(D)));return{at:j,q:qe(L,qe(U([0,0,0,1],F,U_(r/V_.lies)),qe(M(K_(r)),e.q))),over:U_(r/V_.over)}}var Y_=(e,t,n)=>vt(e,t,U_(n/V_.over)),X_={gathers:.5,comes:.13,still:.01,slides:8,past:0,rests:.03,ramp:.2},Z_=e=>e*e*e-e*e*e*e/2;function Q_(e){let t=2*Math.PI/e,[n,r]=De.carousel,i=X_.slides,a=r,o=(R-a)/(e-1+i),s=i*o,c=a+s,l=t/o,u=X_.ramp*(r-n),d=2*Math.PI*X_.gathers/(r-n-u/2),f=e=>{if(e<=n)return 0;if(e<=n+u)return d*u*Z_((e-n)/u);let t=d*(u/2+Math.min(e,r)-n-u);if(e<=r||(t+=d*(Math.min(e,c)-r)+(l-d)*s*Z_(Math.min(1,(e-r)/s)),e<=c)||(t+=l*(Math.min(e,R)-c),e<=R))return t;let i=Math.min(1,(e-R)/s);return t+l*s*(i-Z_(i))},p=e=>{let t=1e-6;return(f(e+t)-f(e-t))/(2*t)},m=Array.from({length:e},(t,i)=>n+X_.still+(r-X_.comes-n-X_.still)*i/Math.max(1,e-1)),h=Math.round((Math.PI/2-f(c))/t),g=h*t+f(c),_=Array.from({length:e},(t,n)=>((h-n)%e+e)%e),v=Array(e).fill(0),y=Array(e).fill(0);for(let[e,t]of _.entries())v[t]=a+e*o,y[t]=c+e*o;let b=Array.from({length:e},(e,t)=>t);return $_({n:e,times:m,comes:[],sets:[],seats:[],goes:_,slides:v,lets:y,gate:g,turn:f,pace:p},b)}function $_(e,t){let n=t.map(t=>e.times[t]);return{...e,comes:t.map((e,t)=>t).sort((e,n)=>t[e]-t[n]),sets:n,seats:n.map(e=>e+X_.comes)}}var ev=2,tv=De.freeze[1]*De.scroll,nv=1,rv=1e7,iv=2e7,av=14,ov=.35,sv=4,cv=[0,0,0,1],lv=[0,1,0,0],uv=e=>[-e[0],-e[1],-e[2],e[3]],dv=(e,t,n)=>{let r=Math.acos(Y(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],-1,1));if(Math.sin(r)<1e-6)return pt(e.map((e,r)=>e*(1-n)+t[r]*n));let[i,a]=[Math.sin((1-n)*r),Math.sin(n*r)].map(e=>e/Math.sin(r));return e.map((e,n)=>e*i+t[n]*a)},fv=e=>{let t=Y(e,0,1);return t*t*t*(t*(6*t-15)+10)},pv=e=>{let t=Y(e,0,1);return t**4*(35-84*t+70*t*t-20*t**3)};function mv(e){let t={width:1,height:1},n=bh({frame:t,aspects:e.aspects,count:e.count}),r=t=>{let n=e.aspects[t];return n>=1?[1,1/n]:[n,1]},i=null,a=null,o=[],s=new Map,c=null,l=0,u=null,d=new Map,f=Rh,p=null,m=0,h=e=>e.last instanceof Float64Array?e.last=Qg(e.last):e.last,g=e=>e.airs instanceof Float64Array?e.airs=t_(e.airs):e.airs,_=null,v=!1,y=null,b=()=>325*Gp(t),x=e=>{let t=Math.max(1,V-e[2]);return[V*e[0]/t,-V*e[1]/t]},S=e=>[e.left+e.width/2-t.width/2,e.top+e.height/2-t.height/2],C=(e,t=o)=>{if(!i||!a)return null;let n=i.slots[e],{at:r,q:s}=p_(i,n,t),c=n.over?qe(s,lv):s;return{...me(iv+e,n.picture,r,c,i.size),corner:r_.corner}},w=(e,t,n,i,a,o=!1)=>{let{at:s,q:c}=F_(e,t,a),l=o?qe(c,lv):c;return{...me(n,i,s,l,e.width/r(i)[0]),corner:r_.corner}},T=e=>e.slots.map((t,n)=>e.slots.flatMap((r,i)=>{if(i===n)return[];let a=e.rows[t.row],s=e.rows[r.row];if(a.r===s.r){let e=((r.k-t.k)%a.count+a.count)%a.count;return e===1||e===a.count-1?[i]:[]}return Math.abs(a.r-s.r)===1&&Math.abs(f_(e,t,o)-f_(e,r,o))<e.pitch?[i]:[]})),E=(t,n)=>{let r=e.aspects.map((e,t)=>t);if(r.length<6)return r;let i=(t.rows[t.slots[n].row].r%2+2)%2;return r.filter(e=>e%2===i)},D=(e,t,n,r)=>{let{angle:i,out:a,up:o}=I_(e,r.at),s=P_(e,n,t.turn(t.sets[n]));return{angle:i,out:a,up:o,wrap:Math.round((s-i)/(2*Math.PI))}},O=(e,t,n)=>{let[i,a]=r(n),o=e.width/i*Math.hypot(i,a)/2+av;return Math.max(e.radius+o,o/Math.sin(4*Math.PI/t))},k=(e,t,n)=>{let r=(Math.max(e,t)-t)/(Math.max(e,t)-n),i=0,a=1;for(let e=0;e<40;e++){let e=(i+a)/2;pv(e)<r?i=e:a=e}return a},A=(e,t,n,r,i,a,o,s)=>{let c=(1+A_.inner)/2*e.radius,l=Math.max(a,ov),u=t.sets[n],d=t.seats[n]-u,f=P_(e,n,t.turn(s));if(o<l){let i=o/l,a=u+l*d,s=1e-4,c=P_(e,n,t.turn(a)),p=t.pace(a)*d*l,m=(t.pace(a+s)-t.pace(a-s))/(2*s)*(d*l)**2,h=r.angle+2*Math.PI*r.wrap;f=h+(c-h)*(10*i**3-15*i**4+6*i**5)+p*(-4*i**3+7*i**4-3*i**5)+m*(.5*i**3-i**4+.5*i**5)}let p=r.out>i&&a>0&&a<l?Math.log(a)/Math.log(l):1,m=vt(r.out,c,pv(o**p));return L_(e,f,m,vt(r.up,0,pv(o)))},j=(e,t,n,r,i,a)=>{let o=P_(e,n,t.turn(i))-r,s=i+a*X_.comes;return{by:Math.atan2(Math.sin(o),Math.cos(o))+t.turn(s)-t.turn(i),goes:t.pace(s)*X_.comes*a}},M=(a=n.poses())=>{let s=a.filter(e=>!e.wrapped||e.s+b()/2>0).map(e=>kt(e,b())),c=i?i.slots.flatMap((e,t)=>g_(i,e,o)?[t]:[]):[],l=Math.max(2,s.length,c.length),u=j_(t,l),d=Q_(l),f=M_(u,d.gate),p=[0,1,2].map(e=>-Math.sin(d.gate)*u.front[e]+Math.cos(d.gate)*u.side[e]),m=u.radius*(1+X_.past)+u.width/2+av,h=d.pace(d.lets[d.goes[Math.min(1,l-1)]]),g={at:[0,1,2].map(e=>u.centre[e]+m*f[e]),velocity:p.map(e=>e*m*h),curve:f.map(e=>-e*m*h*h),q:N_(f,u.axis,Se(f,u.axis)),spin:u.axis.map(e=>e*h)},_=e=>{let t=[0,1,2].map(t=>e[t]-i.middle[t]);return[Te(t,ke(i.turn,[1,0,0])),Te(t,ke(i.turn,[0,1,0]))]},v=i?z_(c.map(e=>_(p_(i,i.slots[e],o).at)),_(g.at),.9*i.rise).map(e=>c[e]):[],y=e=>m_(p_(i,i.slots[e],o).at);if(i&&v.length<l){let e=new Set(v),t=i.slots.map((e,t)=>t).filter(t=>!e.has(t)).sort((e,t)=>Math.hypot(...y(e))-Math.hypot(...y(t)));v.push(...t.slice(0,l-v.length))}let S=Array(l).fill(-1);for(let[e,t]of d.goes.entries())S[t]=v[e]??-1;let C=i?T(i):[],A=new Map;for(let[e,t]of S.entries())t>=0&&A.set(t,e);let M=e=>[(e+l-1)%l,(e+1)%l,...S[e]>=0?C[S[e]].flatMap(e=>A.get(e)??[]):[]],N=(1+A_.inner)/2*u.radius,P=s.map(e=>I_(u,e.at)),F=s.map((e,t)=>Math.max(k(P[t].out,O(u,l,e.picture),N),ov)),I=(e,t,n)=>{let{by:r,goes:i}=j(u,d,t,P[e].angle,n,F[e]);return Math.abs(r-i/2)+sv*Math.max(0,.4*i-r)+Math.max(0,r-i/2)},L=s.map((e,t)=>t).sort((e,t)=>P[t].angle-P[e].angle),R=0;for(let e=0;e<L.length;e++){let t=e=>((P[L[e]].angle-P[L[(e+1)%L.length]].angle)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);t(e)>t(R)&&(R=e)}let ee=L.map((e,t)=>L[(R+1+t)%L.length]),te=Array(l).fill(null),z=Array(l).fill(-1),ne=ee.length,B=(e,t)=>d.times[t]+X_.comes<=d.slides[e]-X_.rests,re=-1;for(let[e,t]of ee.entries()){let n=Math.round(e*(l-1)/Math.max(1,ne-1)),r=Math.max(re+1,n-1),i=Math.min(l-(ne-e),n+1),a=e=>!M(e).some(n=>n!==e&&te[n]?.picture===s[t].picture),o={cost:1/0,j:-1,q:-1};for(let e of[2,1,0]){for(let n=r;n<=Math.max(r,i);n++)for(let r=0;r<l;r++){if(te[r]||e>0&&!B(r,n)||e>1&&!a(r))continue;let i=I(t,r,d.times[n]);i<o.cost&&(o={cost:i,j:r,q:n})}if(o.j>=0)break}te[o.j]=s[t],z[o.j]=o.q,re=o.q}let H=new Set(z.filter(e=>e>=0)),ae=e=>{let t=-1;for(let n=0;n<l;n++)te[n]&&(t<0||Math.abs(z[n]-e)<Math.abs(z[t]-e))&&(t=n);return t};for(let e=l-1;e>=0;e--){if(H.has(e))continue;let t=ae(e),n=t>=0?P_(u,t,d.turn(d.times[e]))+Math.PI:0,r=-1,i=1/0;for(let t of[!0,!1]){for(let a=0;a<l;a++){if(te[a]||z[a]>=0||t&&!B(a,e))continue;let o=P_(u,a,d.turn(d.times[e]))-n,s=Math.abs(Math.atan2(Math.sin(o),Math.cos(o)));s<i&&([r,i]=[a,s])}if(r>=0)break}z[r]=e}let U=$_(d,z),W=te.map((e,t)=>e?.key??rv+t),oe=te.map((e,t)=>{if(!e)return!1;let n=F_(u,t,U.turn(U.sets[t])).q,r=t=>{let n=qe(uv(t),e.q);return Math.hypot(n[0],n[1])};return r(qe(n,lv))<r(n)}),se=Array(l).fill(0),ce=Array(l);for(let[e,t]of U.goes.entries())ce[t]=e;let le=B_(U.goes.map(e=>te[e]?.picture??-1),U.goes.map(e=>M(e).map(e=>ce[e])),e.aspects.length,U.goes.map(e=>i&&S[e]>=0?E(i,S[e]):[]));for(let[e,t]of U.goes.entries())se[t]=le[e];if(i){for(let e of i.slots)e.over=!1;for(let[e,t]of S.entries())t>=0&&(i.slots[t].picture=se[e],i.slots[t].over=oe[e]);let t=new Set(S),n=B_(i.slots.map((e,n)=>t.has(n)?e.picture:-1),C,e.aspects.length,i.slots.map((e,t)=>E(i,t)));for(let[e,t]of i.slots.entries())t.picture=n[e]}let ue=e=>{let n=w(u,e,W[e],se[e],U.turn(U.sets[e])),i=V-n.at[2],a=ie({...n,at:[0,0,0]},...r(n.picture)),o=e=>a.some(n=>{let[r,i]=x([e[0]+n[0],e[1]+n[1],e[2]+n[2]]);return Math.abs(r)<t.width/2&&Math.abs(i)<t.height/2}),s=e=>{let[r,a]=[Math.cos(e),Math.sin(e)],s=Math.min(t.width/2/Math.max(1e-6,Math.abs(r)),t.height/2/Math.max(1e-6,Math.abs(a))),c=e=>[r*e*i/V,-a*e*i/V,n.at[2]],l=s+av;for(;o(c(l));)l+=av;return{...n,at:c(l+av)}},c=O(u,l,se[e]),d=new Map,f=t=>{let n=d.get(t);if(n!==void 0)return n;let{angle:r,out:i}=I_(u,s(t).at),a=Math.max(k(i,c,N),ov),{by:o,goes:l}=j(u,U,e,r,U.sets[e],a),f=o-l/2,p=Math.atan2(Math.sin(f),Math.cos(f));return d.set(t,p),p},p=0;for(let e=1;e<72;e++)Math.abs(f(2*Math.PI*e/72))<Math.abs(f(p))&&(p=2*Math.PI*e/72);let m=[p-2*Math.PI/72,p+2*Math.PI/72].find(e=>Math.sign(f(e))!==Math.sign(f(p)));if(m===void 0)return s(p);let[h,g]=[p,m];for(let e=0;e<24;e++){let e=(h+g)/2;Math.sign(f(e))===Math.sign(f(h))?h=e:g=e}return s((h+g)/2)},G=[],de=[],K=[],fe=[],pe=(e,t)=>{G[e]=t,de[e]=D(u,U,e,t),K[e]=O(u,l,t.picture),fe[e]=k(de[e].out,K[e],N)};for(let[e,t]of te.entries())t&&pe(e,t);let me=e=>{G[e]||pe(e,ue(e))},q=new Set(S);return{carousel:u,schedule:U,keys:W,pictures:se,from:G,start:de,clear:K,latch:fe,door:me,lands:S,over:oe,thrown:g,ground:i?{middle:i.middle,turn:i.turn}:{middle:[0,0,0],turn:[0,0,0,1]},rest:(i?.slots??[]).flatMap((e,t)=>q.has(t)?[]:[t]),wall:i}},P=(e,t,n,r,i,a=!1)=>{e.door(t);let o=L(e,t,a),s=e.from[t].at,c=1-pv(r),l=pv(r/Math.max(e.latch[t],ov)),u=e.schedule,d=F_(e.carousel,t,u.turn(u.sets[t])).q,f=e.over[t]?qe(d,lv):d,p=qe(uv(f),o.q),m=Math.hypot(p[2],p[3])>1e-6?pt([0,0,p[2],p[3]]):cv,h=qe(p,uv(m)),g=h[3]<0?h.map(e=>-e):h,_=2*Math.atan2(m[2],m[3]),v=Math.atan2(Math.sin(_),Math.cos(_))*(1-pv(r)),y=u.turn(i)-u.turn(u.sets[t]);return{...z(o,n,pv(r)),at:A(e.carousel,u,t,e.start[t],e.clear[t],e.latch[t],r,i).map((e,t)=>e+(o.at[t]-s[t])*c),q:qe(N(e.carousel.axis.map(e=>e*y*l)),qe(f,qe(dv(g,cv,l),N([0,0,v]))))}},F=(e,t,n,r,i)=>{let a=e.carousel.radius,o=vt((1+A_.inner)/2*a,a*(1+X_.past)+e.carousel.width/2+av,fv(r)),s=M_(e.carousel,P_(e.carousel,t,e.schedule.turn(i)));return{...n,at:[0,1,2].map(t=>e.carousel.centre[t]+o*s[t])}},I=(e,t,n,r,i)=>{let a=Y_(n.size,r.size,i),o=J_(e.thrown,r.at,e.ground,i,De.fly,a,2.4*t),{at:s,over:c}=o,l=e.over[t]?qe(o.q,lv):o.q;return{...n,at:s,q:l,size:a,corner:vt(n.corner,r.corner,c)}},L=(e,t,n=!1)=>(e.keys[t]<rv&&!n?s.get(e.keys[t]):void 0)??e.from[t],R=(e=l,t=o,r=!1)=>{if(!c)return n.poses().map(e=>{let t=kt(e,b());return{card:t,goal:t}});let a=c,s=a.schedule,u=s.turn(e),d=[];for(let[n,i]of a.keys.entries()){let o=w(a.carousel,n,i,a.pictures[n],u,a.over[n]),c=a.lands[n]>=0?C(a.lands[n],t):null;if(e<=s.sets[n])i<rv&&d.push({card:L(a,n,r),goal:o});else if(e<s.seats[n])d.push({card:P(a,n,o,(e-s.sets[n])/(s.seats[n]-s.sets[n]),e,r),goal:o});else if(!c||e<=s.slides[n])d.push({card:o,goal:o});else if(e<s.lets[n]){let t=(e-s.slides[n])/(s.lets[n]-s.slides[n]);d.push({card:F(a,n,o,t,e),goal:c})}else{let t=(e-s.lets[n])/De.fly;t>=1?d.push({card:c,goal:c,twin:i}):d.push({card:I(a,n,o,c,t),goal:c,twin:c.key})}}let f=+(e>=De.carousel[1]),p=d.map(e=>({...e,card:{...e.card,clip:f}}));for(let e of a.rest){let n=C(e,t);n&&i&&g_(i,i.slots[e],t)&&p.push({card:{...n,clip:2},goal:n})}return p},ee=(e,t)=>{let n=new Map,r=e.map(({card:e,goal:r,twin:i})=>{let a=d.get(e.key)??(i===void 0?void 0:d.get(i)),[o,s]=gm(e,{...dm(a,e.at,e.q,t),line:a?.line,aim:a?.aim},t);return n.set(e.key,s),{card:o,goal:r,twin:i}});return d=n,r},te=(e,t)=>{let n=new Map,r=e.map(e=>{let r=d.get(e.card.key);if(!r)return e;let[i,a]=gm(e.card,{...fm(r,e.card.at,t),line:r.line,aim:r.aim},t);return n.set(e.card.key,a),{...e,card:i}});return d=n,r},ne=(e=l)=>{let n=Ye(e,De.land),r=1+(r_.lens-1)*n,[i,o]=a?S(a):[0,0];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([e,a])=>[(e*t.width/2-i*n)/r,(a*t.height/2-o*n)/r])},B=e=>{let t=e.flatMap(e=>ie(e,...r(e.picture)).map(x)),n=t.map(([e])=>e),i=t.map(([,e])=>e);return[Math.min(...n),Math.min(...i),Math.max(...n),Math.max(...i)]},re=(e,n,r)=>{let[i]=De.mask;l>i&&!n.round&&(n.round=B(R(i,[]).map(({card:e})=>e)));let[a,o,s,c]=l>i?n.round:B(r),u=Ye(l,De.land),d=1+(r_.lens-1)*u,[f,p]=S(e),m=Math.min(e.left,t.width/2+a*d+f*u),h=Math.min(e.top,t.height/2+o*d+p*u),g=Math.max(e.left+e.width,t.width/2+s*d+f*u),_=Math.max(e.top+e.height,t.height/2+c*d+p*u),v=i_(Ye(l,De.mask),{left:m,top:h,width:g-m,height:_-h},e);return{left:v.left,top:v.top,width:v.right-v.left,height:v.bottom-v.top}},H=(e,t,n=l)=>{let i=new Map;for(let{card:n,twin:r}of e)r!==void 0&&!t.ranks.has(n.key)&&t.ranks.has(r)&&i.set(r,n.key);return Uh(e.map(({card:e,goal:t})=>{let n=ie(e,...r(e.picture)),i=ie(t,...r(t.picture));return{key:e.key,corners:n,seen:n.map(x),depth:V-e.at[2],goal:{corners:i,seen:i.map(x),depth:V-t.at[2]}}}),[0,0,V],zh(t,i),!1,ne(n))},ae=(e,t=f)=>{let n=H(e,t);return f=n.last,n.order.map(t=>e[t].card)},U=(e,n)=>{let r=e.x-t.width/2,i=e.y-t.height/2,a=1-n*Sp(Math.hypot(r,i),Math.min(t.width,t.height));return{...e,x:t.width/2+r*a,y:t.height/2+i*a,vx:e.vx*a,vy:e.vy*a}},W=e=>{let t=Ye(e,De.land),[n,r]=a?S(a):[0,0];return{zoom:1+(r_.lens-1)*t,shift:[n*t,r*t]}},oe=e=>{if(e.heights!==void 0)return e.heights;if(e.progress<1)return e.progress*De.scroll;let t=e.slide??0,[n,r]=[De.scroll,Ue[1]];for(let e=0;e<40;e++){let e=(n+r)/2;Et(e).slide<t?n=e:r=e}return r},se=t=>{let{progress:n,slide:r}=Et(t),a=[];return i&&d_(i,a,e.still?0:r),{p:n,list:R(n,a,!0)}},ce=()=>{let e=p.steps,t=e.length,n=tv+t/Be.steps,{p:r,list:i}=se(n),a=t?g(e[t-1]):new Map,o=t?1/Be.steps/Be.pace:0,s=new Map,c=i.map(e=>{let t=a.get(e.card.key)??(e.twin===void 0?void 0:a.get(e.twin)),[n,r]=gm(e.card,{...dm(t,e.card.at,e.card.q,o),line:t?.line,aim:t?.aim},o);return s.set(e.card.key,r),{...e,card:n}});e.push({last:H(c,t?h(e[t-1]):Rh,r).last,airs:s});let l=[...s.values()].every(e=>Math.abs(e.bend)<.001&&e.flutter<1e-4);(n>=Ue[1]+nv||n>=Ue[1]&&l)&&(p.done=!0)},le=()=>{let t=performance.now()+(e.budget??ev);for(;p&&!p.done&&performance.now()<t;)ce()},ue=(e,t,n)=>({...e,bend:vt(e.bend,t.bend,n),axis:e.axis+mm(t.axis-e.axis)*n,flutter:vt(e.flutter,t.flutter,n),phase:vt(e.phase,t.phase,n),line:e.line===void 0||t.line===void 0?e.line??t.line:e.line+mm(t.line-e.line)*n,aim:e.aim===void 0||t.aim===void 0?e.aim??t.aim:e.aim+mm(t.aim-e.aim)*n}),de=(e,t,n)=>{let r=e=>({...e,bend:0,flutter:0}),i=new Map;for(let[a,o]of t)i.set(a,ue(e.get(a)??r(o),o,n));for(let[a,o]of e)t.has(a)||i.set(a,ue(o,r(o),n));return i},K=e=>{let t=p.steps,n=Math.max(0,(e-tv)*Be.steps),r=t.length-1;if(n>=r)return g(t[r]);let i=Math.floor(n),[a,o]=[g(t[i]),g(t[i+1])],s=new Map;for(let[e,t]of a){let r=o.get(e);s.set(e,r?ue(t,r,n-i):t)}for(let[e,t]of o)a.has(e)||s.set(e,t);return s},fe=e=>{let t=p.steps,n=Math.floor((e-tv)*Be.steps+1e-9);return h(t[Math.min(t.length-1,Math.max(0,n))])},pe=(e,t)=>e.map(e=>{let n=t.get(e.card.key)??(e.twin===void 0?void 0:t.get(e.twin));return n?{...e,card:gm(e.card,n,0)[0]}:e}),he=t=>{a=t,t&&(i&&Math.abs(i.width-t.width)<.5&&Math.abs(i.height-t.height)<.5||(i=u_(t.width,t.height,e.aspects.length),o.length=0))};return{world:n,get progress(){return l},get box(){return a},get wall(){return i},get cut(){return u},shown:ne,get frame(){return t},middle:()=>a?S(a):[0,0],shapeOf:r,lensAt:W,get castInput(){return y},castFrom(t,n,r){he(n),i&&d_(i,o,e.still?0:r),c=M(t),m++,p={steps:[],done:!1}},makeOne(){return!p||p.done?!1:(ce(),!0)},get stepsMade(){return p?.steps.length??0},packed(e,t=p?.steps.length??0){return(p?.steps??[]).slice(e,t).map(e=>({last:Zg(h(e)),airs:e_(g(e))}))},feed(e){p&&e.cast===m&&(p.steps.push(...e.steps),p.done=e.done)},get casts(){return m},get made(){return p?.done??!1},ahead(e){let{p:t,list:n}=se(e);return{cards:(p?.steps.length?pe(n,K(e)):n).map(e=>e.card),lens:W(t)}},resize(r){t=r;let i=n.time===0;n.resize(t),e.still&&i&&n.warm(14),c=null,p=null,_=null,d.clear()},step(t,r=jp,f={progress:0,wall:null}){l=f.progress,he(f.wall);let h=q(l),g=1-Ye(l,De.lens),x=1-G(l,wt.hero);if(n.step(t,x>0?U(r,g):jp,h,x),s=new Map(n.poses().map(e=>[e.n,kt(e,b())])),i&&d_(i,o,e.still?0:f.slide??0),h>0)c=null,p=null;else if(!c||c.wall!==i){c&&c.wall!==i&&d.clear();let e=n.poses();y={poses:e,slid:f.slide??0},c=M(e),m++,p={steps:[],done:!1}}else e.fed||le();let S,C=(e,t)=>(f.over??0)>0?e.map(e=>e.card):ae(e,t);if(c&&p?.steps.length){let e=oe(f);!v&&d.size&&(_={from:d,at:e}),v=!0;let t=K(e);if(_){let n=Y(Math.abs(e-_.at)/Be.fade,0,1);n>=1?_=null:t=de(_.from,t,n*n*(3-2*n))}d=t,S=C(pe(R(),d),fe(e))}else v=!1,S=C(c?ee(R(),t):te(R(),t));return u=a&&c?re(a,c,S):null,S}}}var hv={looks:{bend:{reach:45,smear:18,split:12},prism:{reach:55,smear:30,split:40},flare:{reach:42,smear:44,split:32},tunnel:{reach:45,smear:10,split:6}},modes:[{mode:`bend`,keys:[[0,0],[.3,190],[.45,137]]},{mode:`prism`,keys:[[.45,163],[.54,219],[.62,159]]},{mode:`flare`,keys:[[.62,203],[.71,260],[.8,187]]},{mode:`tunnel`,keys:[[.8,88],[.9,120],[1,87]]}],blends:.08,calms:[0,.07],dark:[.08,.3],lightens:[0,.05]},gv=[`off`,`flare`,`prism`,`bend`],_v=1.2,vv=e=>{let t=Y(e,0,1);return t*t*t*(t*(6*t-15)+10)},yv=(e,t)=>{if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[r,i]=[e[n-1],e[n]];if(t<=i[0])return vt(r[1],i[1],vv((t-r[0])/(i[0]-r[0])))}return e.at(-1)[1]};function bv(e){let t=hv,n=Object.fromEntries(Object.keys(t.looks).map(e=>[e,[0,0,0]])),r=t.modes.map((n,r)=>{let i=r===0?-1/0:n.keys[0][0],a=t.modes[r+1],o=a?a.keys[0][0]:1/0;return(r===0?1:vv((e-i+t.blends/2)/t.blends))*(1-(a?vv((e-o+t.blends/2)/t.blends):0))}),i=0,a=0;for(let[o,s]of t.modes.entries()){let c=r[o],l=yv(s.keys,e),{reach:u,smear:d,split:f}=t.looks[s.mode],p=s.mode===`bend`||s.mode===`tunnel`?l/100*_v:l/100,m=(d+f)/1080*(s.mode===`prism`?l/100:Math.min(1,l/100));n[s.mode]=[p*c,u/100,m*c],i+=c*gv.indexOf(s.mode===`tunnel`?`bend`:s.mode),a+=c*l}return{look:n,mode:i,amount:e<=0?0:a}}var xv=(e,t)=>{let[n,r]=hv.calms,i=1-vv((t-n)/(r-n));return Object.fromEntries(Object.entries(e).map(([e,[t,n,r]])=>[e,[t*i,n,r*i]]))},Sv=/swiftshader|llvmpipe|softpipe|software|basic render driver|offscreen/i,Cv=e=>!!e&&Sv.test(e),wv=e=>{let t=e.getExtension(`WEBGL_debug_renderer_info`);return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null};function Tv(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Ev(e){let t=new Map,n=new Map,r=e.clone();return Dv(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Dv(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Dv(e.children[r],t.children[r],n)}var Ov=class extends Yc{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Fv(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new Kv(e)}),this.register(function(e){return new qv(e)}),this.register(function(e){return new Rv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new Wv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Mv(e)}),this.register(function(e){return new Jv(e,jv.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Jv(e,jv.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Yv(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Sl.extractUrlBase(e);a=Sl.resolveURL(t,this.path)}else a=Sl.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Qc(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Xv){try{a[jv.KHR_BINARY_GLTF]=new $v(e)}catch(e){r&&r(e);return}i=JSON.parse(a[jv.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Ty(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case jv.KHR_MATERIALS_UNLIT:a[t]=new Nv;break;case jv.KHR_DRACO_MESH_COMPRESSION:a[t]=new ey(i,this.dracoLoader);break;case jv.KHR_TEXTURE_TRANSFORM:a[t]=new ty;break;case jv.KHR_MESH_QUANTIZATION:a[t]=new ny;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function kv(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Av(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var jv={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Mv=class{constructor(e){this.parser=e,this.name=jv.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new Ma(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Fr);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new xl(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new vl(s),o.distance=c;break;case`spot`:o=new gl(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),_y(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Nv=class{constructor(){this.name=jv.KHR_MATERIALS_UNLIT}getMaterialType(){return Wo}extendParams(e,t,n){let r=[];e.color=new Ma(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Fr),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Pr))}return Promise.all(r)}},Pv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(e,e)}return Promise.all(r)}},Iv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Lv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Rv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_SHEEN}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Ma(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Fr)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Pr)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},zv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Bv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_VOLUME}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ma().setRGB(i[0],i[1],i[2],Fr),Promise.all(r)}},Vv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_IOR}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Hv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new Ma().setRGB(i[0],i[1],i[2],Fr),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Pr)),Promise.all(r)}},Uv=class{constructor(e){this.parser=e,this.name=jv.EXT_MATERIALS_BUMP}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Wv=class{constructor(e){this.parser=e,this.name=jv.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Av(this.parser,e,this.name)===null?null:_c}extendMaterialParams(e,t){let n=Av(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Gv=class{constructor(e){this.parser=e,this.name=jv.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Kv=class{constructor(e){this.parser=e,this.name=jv.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},qv=class{constructor(e){this.parser=e,this.name=jv.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Jv=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Yv=class{constructor(e){this.name=jv.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==oy.TRIANGLES&&e.mode!==oy.TRIANGLE_STRIP&&e.mode!==oy.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new Zi,n=new Q,a=new Di,s=new Q(1,1,1),c=new Os(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new bs(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new ko,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new bs(t.array,t.itemSize,t.normalized))}wa.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Xv=`glTF`,Zv=12,Qv={JSON:1313821514,BIN:5130562},$v=class{constructor(e){this.name=jv.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zv),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xv)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Zv,i=new DataView(e,Zv),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Qv.JSON){let r=new Uint8Array(e,Zv+a,t);this.content=n.decode(r)}else if(r===Qv.BIN){let n=Zv+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},ey=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=jv.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=dy[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=dy[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=sy[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Fr,n)})})}},ty=class{constructor(){this.name=jv.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ny=class{constructor(){this.name=jv.KHR_MESH_QUANTIZATION}},ry=class extends Ec{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},iy=new Di,ay=class extends ry{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return iy.fromArray(i).normalize().toArray(i),i}},oy={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sy={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cy={9728:mn,9729:_n,9984:hn,9985:vn,9986:gn,9987:yn},ly={33071:fn,33648:pn,10497:dn},uy={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dy={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},fy={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},py={CUBICSPLINE:void 0,LINEAR:Er,STEP:Tr},my={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function hy(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new gc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function gy(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function _y(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function vy(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function yy(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function by(e){let t,n=e.extensions&&e.extensions[jv.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+xy(n.attributes):e.indices+`:`+xy(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+xy(e.targets[n]);return t}function xy(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Sy(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Cy(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var wy=new Zi,Ty=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new tl(this.options.manager):new Tl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qc(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return gy(i,a,r),_y(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[jv.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Sl.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=uy[r.type],t=sy[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new mo(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=uy[r.type],o=sy[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Ao(f,u/s),t.cache.add(n,c)),p=new Mo(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new mo(f,a,d);if(r.sparse!==void 0){let t=uy.SCALAR,n=sy[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new mo(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=cy[n.magFilter]||1006,t.minFilter=cy[n.minFilter]||1008,t.wrapS=ly[n.wrapS]||1e3,t.wrapT=ly[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Gi(e);t.needsUpdate=!0,n(t)}),t.load(Sl.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),_y(e,a),e.userData.mimeType=a.mimeType||Cy(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[jv.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[jv.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[jv.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new qs,Ro.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ns,Ro.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return gc}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[jv.KHR_MATERIALS_UNLIT]){let e=r[jv.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new Ma(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Fr),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Pr)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||my.OPAQUE;if(l===my.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===my.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Wo&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Z(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Wo&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Wo){let e=i.emissiveFactor;o.emissive=new Ma().setRGB(e[0],e[1],e[2],Fr)}return i.emissiveTexture!==void 0&&a!==Wo&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Pr)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),_y(n,i),t.associations.set(n,{materials:e}),i.extensions&&gy(r,n,i),n})}createUniqueName(e){let t=Vl.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[jv.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Dy(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=by(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[jv.KHR_DRACO_MESH_COMPRESSION]?i(o):Dy(new ko,o,t),o.mode===oy.TRIANGLE_STRIP?e=e.then(e=>Tv(e,1)):o.mode===oy.TRIANGLE_FAN&&(e=e.then(e=>Tv(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?hy(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===oy.TRIANGLES||u.mode===oy.TRIANGLE_STRIP||u.mode===oy.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new ms(l,f):new ns(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===oy.LINES)d=new Gs(l,f);else if(u.mode===oy.LINE_STRIP)d=new Vs(l,f);else if(u.mode===oy.LINE_LOOP)d=new Ks(l,f);else if(u.mode===oy.POINTS)d=new Qs(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&yy(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),_y(d,i),u.extensions&&gy(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&gy(r,c[0],i),c[0];let l=new Ta;i.extensions&&gy(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new ml(Ei.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new yl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_y(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new Zi;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ys(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Uc(i,void 0,l);return _y(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,wy)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new Q().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new hs:t.length>1?new Ta:t.length===1?t[0]:new wa,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),_y(o,i),i.extensions&&gy(n,o,i),i.matrix!==void 0){let e=new Zi;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Ta;n.name&&(i.name=r.createUniqueName(n.name)),_y(i,n),n.extensions&&gy(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Ev(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ro||e instanceof Gi)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}fy[i.path]===fy.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(fy[i.path]){case fy.weights:l=Rc;break;case fy.rotation:l=Bc;break;case fy.translation:case fy.scale:l=Hc;break;default:switch(n.itemSize){case 1:l=Rc;break;default:l=Hc}}let u=r.interpolation===void 0?Er:py[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+fy[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Sy(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Bc?ay:ry)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ey(e,t,n){let r=t.attributes,i=new Ya;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new Q(t[0],t[1],t[2]),new Q(a[0],a[1],a[2])),e.normalized){let t=Sy(sy[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new Q,t=new Q;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Sy(sy[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new xo;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Dy(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=dy[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Fi.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Fi.workingColorSpace}" not supported.`),_y(e,t),Ey(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:vy(e,t.targets,n)})}var Oy=class extends Pa{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ic;e.deleteAttribute(`uv`);let t=new gc({side:1}),n=new gc,r=new vl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new ns(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Os(e,n,6),o=new wa;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new ns(e,ky(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new ns(e,ky(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new ns(e,ky(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new ns(e,ky(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ns(e,ky(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ns(e,ky(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ky(e){return new vc({color:0,emissive:16777215,emissiveIntensity:e})}var Ay=`./devices/`,jy={sheet:168/874,bar:[797/874,860/874,16/402,386/402],round:22,island:[.342,.654,.019,.06]},My=.06,Ny={Frame:0,Glass:0,Island:0},Py=`
vec3 neutralTone(vec3 color) {
  float x = min(color.r, min(color.g, color.b));
  color -= x < 0.08 ? x - 6.25 * x * x : 0.04;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < 0.76) return color;
  float d = 0.24;
  float top = 1.0 - d * d / (peak + d - 0.76);
  color *= top / peak;
  return mix(color, vec3(top), 1.0 - 1.0 / (0.15 * (peak - top) + 1.0));
}
`,Fy=(e,t)=>{e.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`void main() {`,`${Py}\nvoid main() {`).replace(`#include <colorspace_fragment>`,`#include <colorspace_fragment>\n${t?`gl_FragColor.rgb = neutralTone(gl_FragColor.rgb);`:``}\ngl_FragColor = sRGBTransferOETF(gl_FragColor);`)},e.customProgramCacheKey=()=>`phone-${t}`},Iy=(e,t,n)=>{let r=t.matrixWorld.clone().invert().multiply(n.matrixWorld),i=new Ya().setFromBufferAttribute(n.geometry.attributes.position).clone().applyMatrix4(r),a=i.getSize(new Q),o=i.getCenter(new Q),[s,c,l]=[0,1,2].sort((e,t)=>a.getComponent(t)-a.getComponent(e)),u=e=>`xyz`[e],d=new Ya().setFromBufferAttribute(t.geometry.attributes.position),f=o.getComponent(l)>d.getCenter(new Q).getComponent(l)?1:-1,p=a.getComponent(c),m=a.getComponent(s),h={screenMid:{value:new Z(o.getComponent(c),o.getComponent(s))},screenHalf:{value:new Z(p/2-.004*p,m/2-.004*p)},screenRound:{value:.14*p},frontAt:{value:d.getCenter(new Q).getComponent(l)}},g=e.onBeforeCompile;e.onBeforeCompile=(t,n)=>{g.call(e,t,n),Object.assign(t.uniforms,h),t.vertexShader=t.vertexShader.replace(`void main() {`,`varying vec3 vFace;
void main() {`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvFace = vec3(position.${u(c)}, position.${u(s)}, position.${u(l)});`),t.fragmentShader=t.fragmentShader.replace(`void main() {`,`varying vec3 vFace;
uniform vec2 screenMid;
uniform vec2 screenHalf;
uniform float screenRound;
uniform float frontAt;
float rounded(vec2 p, vec2 half_, float r) {
  vec2 q = abs(p) - (half_ - r);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
void main() {`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
if (${f.toFixed(1)} * (vFace.z - frontAt) > 0.0) {
  float open = rounded(vFace.xy - screenMid, screenHalf, screenRound);
  float w = fwidth(open);
  float clear = 1.0 - smoothstep(-w, w, open);
  diffuseColor.a = mix(1.0, diffuseColor.a, clear);
}`)},e.customProgramCacheKey=()=>`phone-glass`},Ly=e=>{let t=e.clone();t.computeBoundingBox();let{min:n,max:r}=t.boundingBox,i=[r.x-n.x,r.y-n.y,r.z-n.z],a=[n.x,n.y,n.z],[o,s]=[0,1,2].sort((e,t)=>i[t]-i[e]),c=t.attributes.position,l=new Float32Array(c.count*2);for(let e=0;e<c.count;e++){let t=[c.getX(e),c.getY(e),c.getZ(e)];l[2*e]=(t[s]-a[s])/i[s],l[2*e+1]=1-(t[o]-a[o])/i[o]}return t.setAttribute(`uv`,new mo(l,2)),t},Ry=`
float islandOf(vec2 uv) {
  vec2 size = vec2(402.0, 874.0);
  vec2 lo = vec2(${jy.island[0].toFixed(5)}, ${jy.island[2].toFixed(5)}) * size + 1.5;
  vec2 hi = vec2(${jy.island[1].toFixed(5)}, ${jy.island[3].toFixed(5)}) * size - 1.5;
  vec2 extent = (hi - lo) / 2.0;
  vec2 q = abs(uv * size - (lo + hi) / 2.0) - vec2(extent.x - extent.y, 0.0);
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - extent.y;
  float w = fwidth(d);
  return 1.0 - smoothstep(-w, w, d);
}
`,zy=`
float barOf(vec2 uv, float grow) {
  vec2 size = vec2(402.0, 874.0);
  vec2 lo = vec2(${jy.bar[2].toFixed(5)}, ${jy.bar[0].toFixed(5)}) * size - grow;
  vec2 hi = vec2(${jy.bar[3].toFixed(5)}, ${jy.bar[1].toFixed(5)}) * size + grow;
  vec2 extent = (hi - lo) / 2.0;
  vec2 q = abs(uv * size - (lo + hi) / 2.0) - vec2(extent.x - extent.y, 0.0);
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - extent.y;
  float w = fwidth(d);
  return 1.0 - smoothstep(-w, w, d);
}
`,By=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Vy={polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},Hy=(e,t)=>new mc({uniforms:{base:{value:e},sheet:{value:t},rise:{value:0}},vertexShader:By,fragmentShader:`
      uniform sampler2D base;
      uniform sampler2D sheet;
      uniform float rise;
      varying vec2 vUv;
      ${zy}
      ${Ry}
      void main() {
        float top = ${jy.sheet.toFixed(5)};
        float edge = mix(1.0, top, rise);
        // where the sheet's picture is read, and the sheet's own shape in it (points): from its top edge down, its top
        // corners round, its edge smoothed; past it the editor as it is now, not what the picture had there
        vec2 at = vec2(vUv.x, vUv.y - edge + top);
        vec2 p = at * vec2(402.0, 874.0);
        float r = ${jy.round.toFixed(1)};
        vec2 inner = vec2(clamp(p.x, r, 402.0 - r), max(p.y, top * 874.0 + r));
        float d = length(p - inner) - r;
        // (inside it the distance stands still, and smoothstep wants its two ends apart)
        float w = max(fwidth(d), 1e-3);
        // the sheet's picture has the tab bar in it too, which must not ride up with it: on the way, the sheet's own ground
        // stands there (and its shadow's), till it has all but come to the bar that stays
        float riding = clamp((edge - top) * 874.0 / 8.0, 0.0, 1.0);
        vec4 own = mix(texture2D(sheet, at), texture2D(sheet, vec2(0.01, 0.6)), barOf(at, 6.0) * riding);
        vec4 c = mix(texture2D(base, vUv), own, 1.0 - smoothstep(-w, w, d));
        // (the capsule alone stays: round it the sheet's own picture goes on rising)
        c = mix(c, mix(texture2D(base, vUv), texture2D(sheet, vUv), rise), barOf(vUv, 0.0));
        gl_FragColor = sRGBTransferOETF(vec4(c.rgb * (1.0 - islandOf(vUv)), 1.0));
      }`,side:2,...Vy}),Uy=e=>new mc({uniforms:{map:{value:e}},vertexShader:By,fragmentShader:`
      uniform sampler2D map;
      varying vec2 vUv;
      ${Ry}
      void main() {
        gl_FragColor = sRGBTransferOETF(vec4(texture2D(map, vUv).rgb * (1.0 - islandOf(vUv)), 1.0));
      }`,side:2,...Vy}),Wy=new Q;function Gy(e,t,n,r,i){let[a,o,s,c]=[1/0,1/0,-1/0,-1/0];for(let i of e)if(!i.isEmpty())for(let e=0;e<8;e++){if(Wy.set(e&1?i.max.x:i.min.x,e&2?i.max.y:i.min.y,e&4?i.max.z:i.min.z),Wy.applyMatrix4(t.matrixWorldInverse),Wy.z>=0)return{x:0,y:0,width:n,height:r};Wy.applyMatrix4(t.projectionMatrix);let[l,u]=[(Wy.x+1)/2*n,(Wy.y+1)/2*r];a=Math.min(a,l),o=Math.min(o,u),s=Math.max(s,l),c=Math.max(c,u)}if(a>s)return{x:0,y:0,width:0,height:0};let[l,u]=[Math.max(0,Math.floor(a-i)),Math.max(0,Math.floor(o-i))],[d,f]=[Math.min(n,Math.ceil(s+i)),Math.min(r,Math.ceil(c+i))];return{x:l,y:u,width:Math.max(0,d-l),height:Math.max(0,f-u)}}var Ky=(e,t)=>{if(!e.width||!e.height)return t;if(!t.width||!t.height)return e;let[n,r]=[Math.min(e.x,t.x),Math.min(e.y,t.y)],[i,a]=[Math.max(e.x+e.width,t.x+t.width),Math.max(e.y+e.height,t.y+t.height)];return{x:n,y:r,width:i-n,height:a-r}};function qy(e){let t=new Pa,n=new ml(W.fov*180/Math.PI,1,.05,40),r=[],i=null,a=[],o={asked:!1,ready:!1,gone:!1},s=Math.min(4,e.capabilities.maxSamples),c=null,l=null,u=``,d=null,f=[new Ya,new Ya,new Ya],p=([e,n,o,s,c])=>{let l=e.scene,u=new Ya().setFromObject(l).getSize(new Q);l.scale.setScalar(W.phone/u.y),l.updateMatrixWorld(!0);let d=e=>{let t=null;return l.traverse(n=>{let r=n;r.isMesh&&r.material.name===e&&(t=r)}),t},[f,p]=[d(`Glass`),d(`Display`)],m=new Map;l.traverse(e=>{let n=e;if(!n.isMesh)return;let r=n.material;if(r.name!==`Display`){if(!m.has(r)){let e=r.clone();e.name===`Glass`&&(e.opacity=My),e.name in Ny&&Object.assign(e,{envMap:t.environment,envMapIntensity:Ny[e.name]}),Fy(e,!0),e.name===`Glass`&&f&&p&&Iy(e,f,p),m.set(r,e),a.push(e)}n.material=m.get(r)}}),i=Hy(n,o),a.push(i);for(let e of[null,s,c]){let n=l.clone(!0);n.traverse(t=>{let n=t;n.isMesh&&n.material.name===`Display`&&(n.geometry=Ly(n.geometry),a.push(n.geometry),n.material=e?Uy(e):i,e&&a.push(n.material))});let o=new Ta;o.add(n),t.add(o),r.push(o)}},m=null,h=()=>{m??=new Ji(4,4,{samples:s}),a.includes(m)||a.push(m),n.aspect=1,n.position.set(0,0,8.8),n.updateProjectionMatrix();for(let e of r)e.position.set(0,0,0);return m},g=async()=>{let r=e.getRenderTarget();e.setRenderTarget(h());let i=e.compileAsync(t,n);e.setRenderTarget(r),await i},_=()=>{let r=e.getRenderTarget();e.setRenderTarget(h()),e.render(t,n),e.setRenderTarget(r)},v=[],y=[()=>{l=new mu(e),t.environment=l.fromScene(new Oy,.04).texture},()=>{let t=new Tl,n=n=>t.loadAsync(`${Ay}${n}.webp`).then(t=>{let n=new Gi(t);return n.flipY=!1,n.colorSpace=Pr,n.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),n.needsUpdate=!0,a.push(n,{dispose:()=>t.close()}),v.push(n),n});return Promise.all([Lt(async()=>{let{MeshoptDecoder:e}=await import(`./DXTYc6wn.js`);return{MeshoptDecoder:e}},[],import.meta.url).then(({MeshoptDecoder:e})=>new Ov().setMeshoptDecoder(e).loadAsync(`${Ay}iphone.glb`)),n(`screen-editor`),n(`screen-library`),n(`screen-loop-a`),n(`screen-loop-b`)]).then(e=>{o.gone||p(e)})},()=>g(),...[0,1,2,3].map(t=>()=>v[t]&&e.initTexture(v[t])),()=>_()],b=t=>{c&&c.width===t.width&&c.height===t.height||(c?.dispose(),c=new Ji(t.width,t.height,{samples:s,resolveDepthBuffer:!1}),e.initRenderTarget(c),u=``,d=null)},x=0,S=Promise.resolve(),C=()=>{if(x<y.length){let e=y[x++];S=S.then(()=>o.gone?void 0:e()),x===y.length&&(S=S.then(()=>o.ready=!o.gone).catch(e=>console.warn(`The phones could not be loaded`,e)))}return S};return{get ready(){return o.ready},get box(){return d},steps:y.length,get begun(){return x},step:C,load:()=>{for(o.asked=!0;x<y.length;)C()},reserve:b,draw(a,o,s){b(a);let l=JSON.stringify([a.width,a.height,o.width,o.height,s]);if(l===u)return c.texture;u=l,n.aspect=o.width/o.height,n.position.set(0,0,s.distance),n.updateProjectionMatrix();for(let[e,t]of s.phones.entries()){let n=r[e];n.position.set(t.x,t.y,t.z),n.rotation.set(t.tilt,t.turn,-t.lean,`YZX`)}i.uniforms.rise.value=s.sheet,t.updateMatrixWorld(),n.updateMatrixWorld();for(let[e,t]of r.entries())f[e].setFromObject(t);let p=Gy(f,n,a.width,a.height,4),m=d?Ky(d,p):{x:0,y:0,width:a.width,height:a.height};return d=p,c.scissor.set(m.x,m.y,m.width,m.height),c.scissorTest=!0,e.setRenderTarget(c),e.clear(),e.render(t,n),c.texture},dispose(){o.gone=!0;let n;t.traverse(t=>{for(let r of[t.material??[]].flat())n??=e.properties.get(r).uniforms?.dfgLUT?.value}),n?.dispose(),c?.dispose(),l?.dispose(),t.environment?.dispose();for(let e of a)e.dispose()}}}var Jy=1.1,Yy=.12,Xy={carousel:.45,wall:.35},Zy=e=>1-(1-Math.min(1,Math.max(0,e)))**3;async function Qy(e){let t={antialias:!1,alpha:!1,powerPreference:`high-performance`,failIfMajorPerformanceCaveat:!0},r=e.canvas.getContext(`webgl2`,t);if(!r)throw Error(`No WebGL here`);if(Cv(wv(r)))throw r.getExtension(`WEBGL_lose_context`)?.loseContext(),Error(`WebGL is drawn by the CPU here`);let i=new cp({canvas:e.canvas,context:r,...t});i.setClearColor(0,0),i.autoClear=!1;let a=!1,o=new tl,s=async t=>{let n=await o.loadAsync(t);n.colorSpace=``,n.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let r=n.image,a=r.width/r.height,s=Math.max(r.width,r.height);if(e.most&&s>e.most){let t=e.most/s,i=document.createElement(`canvas`);i.width=Math.round(r.width*t),i.height=Math.round(r.height*t);let a=i.getContext(`2d`);a.imageSmoothingQuality=`high`,a.drawImage(r,0,0,i.width,i.height),n.image=i}return{texture:n,aspect:a}},c=await Promise.all(e.pictures.map(s)),l=new Map;for(let t of e.backs??[]){let e={texture:new Gi,aspect:1};l.set(c.push(e)-1,s(t).then(t=>{if(a)return t.texture.dispose();e.texture.dispose(),Object.assign(e,t)},e=>console.warn(`A texture of the fifth screen could not be loaded`,e)))}let u=1,d=c.slice(0,e.pictures.length).map(e=>e.aspect),f=null;try{f=new Worker(new URL(new URL(`maker.worker-BEm4Ac2Z.js`,import.meta.url).href,``+import.meta.url),{type:`module`})}catch{f=null}let p={aspects:d,count:e.count,still:e.still,fed:!!f},m={aspects:d,still:e.still,fed:!!f},h=mv(p),g=k_(m),_=-1;f&&(f.onmessage=e=>{let t=e.data;if(t.kind===`passage`)h.feed(t);else for(let e of t.pieces)g.feed(t.cast,e)},f.onerror=()=>{f?.terminate(),f=null,p.fed=!1,m.fed=!1,_=-1});let v=t=>{let n=h.castInput;if(!f||!n||h.casts===_||!t.wall||!t.field)return;_=h.casts;let r={cast:h.casts,frame:h.frame,aspects:d,count:e.count,still:e.still,wall:t.wall,field:t.field,poses:n.poses,slid:n.slid};f.postMessage(r)},y=Dm(c,[1,3,5].map(t=>parseInt(e.ground.slice(t,t+2),16)/255),await Tm(c,()=>new Promise(e=>setTimeout(e)))),[b,x,S,C]=(e.scrim?.match(/[\d.]+/g)??[`0`,`0`,`0`,`0`]).map(Number),w=Ap(),T=e.still?null:Mm(i),E=new ml(50,1,vm.near,vm.far);E.position.set(0,0,V);let D=null,O=e.still?Jy:0,k=!1,A=0,j,N=0,P=qy(i),I={k:0,z:1},R=null,ee=null,z=Rh,ne=0,B=null,H=null,U={time:0,x:0,y:0},oe=``,se=()=>h.lensAt(h.progress),ce=0,le=(t,n=null)=>{if(!D)return;let{frame:r,progress:a}=h,o=Kp(r),s=Ye(a,De.land),c={left:0,top:0,width:r.width,height:r.height},l=e=>[e.left*u,(r.height-e.top-e.height)*u,(e.left+e.width)*u,(r.height-e.top)*u],d=n?{box:l(n.cut),frame:l(n.field),round:(n.round??0)*u}:{box:l(h.cut??c),frame:l(h.box??c)},f=n?.lens??se(),p=1-Ye(a,De.lens),m=Zy(O/Jy),g=Ye(a,[De.freeze[1],De.carousel[0]+.1]),_=B?Zy((e.still?Jy:ne)/Jy)*B.seen:0,v={width:D.width,height:D.height,R:o.R*u,a:o.a*u,appear:B?_:m*p,prism:B?_:m*(1-(1-Xy.carousel)*g)*(1-s),edges:B?B.seen:(1-(1-Xy.wall)*s)*(1-A),pixel:u,distort:j,warp:I,dim:[b/255,x/255,S/255,N],...B?{centre:[D.width/2,(r.height/2-B.dy)*u]}:{}},C=T?.live?T.texture:null,k=Op(v,C),M=D.texture;if(R&&P.ready){if(M=P.draw(D,r,R),k)return w.over(i,M,P.box)}else{if(y.update(n?.cards??t,o,{...r,...f},d,ce),k){w.ground(i),i.render(y.scene,E);return}i.setRenderTarget(D),i.clear(),i.render(y.scene,E)}w.draw(i,M,v,C,T?[T.nose[0]*u,T.nose[1]*u]:[0,0])},ue=null;return{world:h.world,prepare(e=()=>{}){return ue??=(async()=>{let t=()=>new Promise(e=>typeof n==`function`?n(()=>e(),{timeout:400}):setTimeout(e,30)),r=D??new Ji(4,4),o=[()=>y.prepare(i,E,r),...c.flatMap((e,t)=>y.onLayers(t)?[]:[async()=>{await l.get(t),i.initTexture(e.texture)}]),...Array.from({length:P.steps-P.begun},()=>()=>P.step()),()=>D&&P.reserve(D)];for(let[n,r]of o.entries()){if(await t(),a)return;await r(),e((n+1)/o.length)}r!==D&&r.dispose()})(),ue},resize(e,t,n){let r={width:Math.max(1,e),height:Math.max(1,t)};u=n,i.setPixelRatio(u),i.setSize(r.width,r.height,!1),E.fov=2*Math.atan(r.height/2/V)*180/Math.PI,E.aspect=r.width/r.height,E.updateProjectionMatrix();let a=i.getDrawingBufferSize(new Z);D?.dispose(),D=new Ji(a.x,a.y,{depthBuffer:!0}),h.resize(r),g.resize(r),ee?.resize(r),z=Rh,oe=``},frame(t,n=jp,r={progress:0,wall:null,over:0,slide:0,field:null}){O+=t,ce=e.still?0:t;let i=h.step(t,n,r);v(r);let a={left:0,top:0,width:h.frame.width,height:h.frame.height},o=g.step(t,r.pick===void 0?r:{...r,pick:Math.min(r.pick,7)},{cards:i,lens:se(),cut:h.cut??a,box:h.box??a,ahead:h.ahead,casts:h.casts,made:h.made}),s=Xe(r.heights??0);if(o&&s>0){let e={left:0,top:0,width:h.frame.width,height:h.frame.height};o.cards=de(o.cards,o.lens,h.frame,s),o.cut=e,o.field=e}let c=L(r.heights??0);if(A=gt(0,.3,c.comes),j=xv(bv(he(r.heights??0)).look,Dt(r.heights??0)),N=C*G(he(r.heights??0),hv.dark)*(1-G(Dt(r.heights??0),hv.lightens)),o&&c.comes>0&&r.panel){let{comes:e,step:t}=c,n=mt(r.panel,r.later??r.panel,t,r.agents);o.cards=M(o.cards,h.frame,n,e,t,r.agents),Object.assign(o,it(h.frame,n,e,t,r.agents))}(r.heights??0)>=Ne&&P.load();let l=Tt(r.heights??0);I=Ce(l);let u=te(r.heights??0);if(R=l>=W.warp.cut&&u<Ot.leave[1]&&r.phone?ae(l,h.frame,r.phone):null,R&&(R.phones[0].turn+=re(u)),!e.still){U.time+=t;let r=h.frame,[i,a]=e.hover&&n.active?[2*n.x/r.width-1,1-2*n.y/r.height]:[0,0],o=1-Math.exp(-t*W.alive.follow);if(U.x+=(Y(i,-1,1)-U.x)*o,U.y+=(Y(a,-1,1)-U.y)*o,R){let e=1-Y(u/Ot.leave[1],0,1),t=dt(l,U.time,U),n=R.phones[0];n.y+=t.y*e,n.turn+=t.turn*e,n.tilt+=t.tilt*e}}let f=o&&r.stage?F(u,r.stage,h.frame,r.jelly):null;o&&f&&(o.cards=f.cards,o.cut=f.cut,o.field=f.cut,Object.assign(o,{round:0}));let p=h.frame,m=r.start;if(B=null,!(o&&m&&m.top<1.5*p.height&&m.top+m.height>-.5*p.height))H=null;else{ee||(ee=bh({frame:p,aspects:d,count:e.count,backward:!0}),e.still&&ee.warm(14));let r=p.height-m.height,i=Y(1-(m.top-r)/p.height,0,1);H=H===null?i:H+(i-H)*(1-Math.exp(-t/Yy));let a=e.finger?r/2:m.top+m.height/2-p.height/2,s=gt(.25,1,H);e.still||(ne+=t,ee.step(t,{...n,y:n.y-a}));let c=325*Gp(p),l={zoom:1,shift:[0,a]},u=ee.poses().map(e=>({...kt(e,c),lens:l,...s<1?{shows:s}:{}})),f=Uh(u.map(e=>{let t=d[e.picture],n=ie(e,t>=1?1:t,t>=1?1/t:1);return{key:e.key,corners:n,seen:n.map(e=>{let t=Math.max(1,V-e[2]);return[V*e[0]/t,-V*e[1]/t]}),depth:V-e.at[2]}}),[0,0,V],z);z=f.last,o.cards=[...o.cards,...f.order.map(e=>u[e])],B={dy:a,seen:H}}T?.step(t,n,h.frame);let{box:_,progress:y,frame:b}=h,x=o?o.field:_;if(y>=1&&x!==null&&x.top+x.height<=0&&!T?.live&&!B){k||le([]),k=!0;return}if(k=!1,e.still){let e=`${y}|${_?.top}|${_?.width}|${b.width}|${b.height}|${r.over}|${r.pick}|${r.field?.top}|${r.heights}`;if(e===oe&&!o)return;oe=e}le(i,o)},dispose(){a=!0,f?.terminate(),D?.dispose(),y.dispose(),w.dispose(),P.dispose(),T?.dispose();for(let e of c)e.texture.dispose();lp.dispose(),i.dispose(),i.getContext().isContextLost()||i.forceContextLoss()}}}var $y={omega:2*Math.PI/.6,zeta:.3},eb=1/240,tb=(e,t)=>({f:{x:e,v:0},out:{x:t,v:0}});function nb(e,t,n){let r=$y.omega*$y.omega,{f:i,out:a}=e;for(let e=n;e>1e-9;e-=eb){let n=Math.min(eb,e);i=Up(i,r*t.f,n,$y.omega,$y.zeta),a=Up(a,r*t.out,n,$y.omega,$y.zeta)}return{f:i,out:a}}var rb=[`hidden`],ib=3,ab=Object.assign(nt(A({__name:`StoryScene.client`,setup(e){let t=Array.from({length:9},(e,t)=>`./pictures/${t+1}.webp?v=behin2`),n=we.map(e=>`./customization/${e}.webp?v=behin2`),r=a(`scene`),i=bt(r),o=ht(),c=Ve(),u=ct(`(pointer: coarse)`),d=zt(),f=en(),p=Vt(),m=Wt(),h=Bt(),g=null,v=E(!1),y=E(0),b=!1,S=0,w=null,T=!1,D={x:0,y:0,there:!1},O={x:0,y:0,vx:0,vy:0,active:!1},A=null,j=()=>{if(!w||!i.width.value||!i.height.value)return;let e=Math.min(window.devicePixelRatio||1,u.value?1.5:2);w.resize(i.width.value,i.height.value,e)},M=e=>{D.x=e.clientX,D.y=e.clientY,D.there=e.pointerType===`mouse`||e.buttons>0||e.type===`pointerdown`},N=()=>D.there=!1,P={left:0,top:0},F=new Map,I=e=>{let t=F.get(e);t?.isConnected||(t=document.querySelector(`[data-story="${e}"]`),F.set(e,t));let n=t?.getBoundingClientRect();return n?{left:n.left-P.left,top:n.top-P.top,width:n.width,height:n.height}:null},L={wall:null,field:null,panel:null,later:null,agents:null,phone:null,stage:null,start:null},R=()=>{if(!w||o.value!==`visible`)return;let e=r.value?.getBoundingClientRect();P={left:e?.left??0,top:e?.top??0},L.wall=I(`wall`),L.field=I(`categories`),L.panel=I(`panel`),L.later=I(`panel-later`);let[t,n,i,a]=[`panel`,`frame`,`shot`,`picture`].map(e=>I(`agents-${e}`));L.agents=t&&n&&i&&a?{panel:t,frame:n,shot:i,picture:a}:null,L.phone=I(`devices-phone`),L.stage=I(`export-room`),L.start=I(`start`)},ee=()=>{let e=lt.end,t=ze.lenis;if(u.value||!e||!t)return L.start;let n=t.scroll-e.from;return{left:0,top:e.top-Math.min(Math.max(n,0),e.release),width:i.width.value,height:e.height}},z=()=>({progress:p.value,wall:L.wall,over:m.value.over,pick:m.value.pick,slide:m.value.slide,heights:m.value.heights,field:L.field,panel:L.panel,later:L.later,agents:L.agents,phone:L.phone,stage:L.stage,start:ee(),jelly:h.value}),ne=(e,t)=>{if(!w||o.value!==`visible`||window.scrollY>=xt.covers)return;let n=Math.min(.1,t/1e3),{x:r,y:i}=D;O.active=D.there;let a=A&&n>0?(r-A.x)/n:0,s=A&&n>0?(i-A.y)/n:0;O.vx+=(a-O.vx)*.35,O.vy+=(s-O.vy)*.35,O.x=r,O.y=i,A=O.active?{x:r,y:i}:null;let l=m.value.heights??0,u=te(l),d={f:_e(u),out:J(u)};g=!g||c.value===`reduce`?tb(d.f,d.out):nb(g,d,n);let f={f:g.f.x,out:g.out.x};(Math.abs(f.f-h.value.f)>1e-5||Math.abs(f.out-h.value.out)>1e-5)&&(h.value=f),w.frame(It.started?n:0,O,z()),v.value||=!0},B=null,re=e=>{e.stopImmediatePropagation(),b=!0,v.value=!1,H(),o.value===`visible`&&ie()},V=()=>{B?.removeEventListener(`webglcontextlost`,re),B=null},H=()=>{at.ticker.remove(R),at.ticker.remove(ne),window.removeEventListener(`pointermove`,M),window.removeEventListener(`pointerdown`,M),window.removeEventListener(`pointerup`,N),window.removeEventListener(`pointercancel`,N),document.documentElement.removeEventListener(`pointerleave`,N)},ie=()=>{if(b&&!T&&w){if(b=!1,V(),w.dispose(),w=null,++S>ib){d.value=`failed`;return}ae=!1,y.value++}};l(o,e=>e===`visible`&&ie());let ae=!1;return l(r,async e=>{if(e&&!ae&&(ae=!0,B=e,e.addEventListener(`webglcontextlost`,re),await Gt(),!T)){try{let r=await Qy({canvas:e,pictures:t,backs:n,count:window.innerWidth<700?12:20,still:c.value===`reduce`,hover:window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,finger:u.value,ground:Jt.bg,scrim:Jt.scrim,...u.value?{most:Math.ceil(1.25*Math.max(window.innerWidth,window.innerHeight)*Math.min(window.devicePixelRatio||1,1.5))}:{}});if(T)return V(),r.dispose();if(w=r,b)return o.value===`visible`&&ie()}catch(e){console.warn(`The scene could not start`,e),d.value=`failed`;return}d.value=`on`,j(),c.value!==`reduce`&&(window.addEventListener(`pointermove`,M,{passive:!0}),window.addEventListener(`pointerdown`,M,{passive:!0}),window.addEventListener(`pointerup`,N,{passive:!0}),window.addEventListener(`pointercancel`,N,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,N,{passive:!0})),at.ticker.add(R,!1,!0),at.ticker.add(ne),w.prepare(e=>!S&&(f.value=e))}},{immediate:!0,flush:`post`}),l([i.width,i.height],j),x(()=>{T=!0,H(),V(),w?.dispose(),w=null}),(e,t)=>(s(),_(`canvas`,{key:C(y),ref:`scene`,class:k([`story-scene`,{"is-drawn":C(v)}]),"aria-hidden":`true`,hidden:C(d)===`failed`},null,10,rb))}}),[[`__scopeId`,`data-v-aafda1ff`]]),{__name:`StoryScene`}),ob={letters:{duration:1.4,stagger:.025,from:{yPercent:50,scaleY:1.4},ease:rn(.5),out:e=>1-(1-e)**2,fade:{u:[.03,.3],f:[.2,.8]},showed:.88,lead:.8},lines:{duration:.8,stagger:.04,from:{yPercent:120},ease:`power3.out`},scatter:{fade:.5,follow:.85,leads:1.2,room:`power3.inOut`,grow:{duration:1,from:.75,arrow:0,ease:rn(.5)}},blocks:{from:{yPercent:110}},overlap:.5,follow:.2,still:.4,intro:1.2,font:1.5,settle:.2,lands:3,turn:.02,faint:.001,holds:12,back:.15},sb=e=>{let t=e.cloneNode(!0);for(let e of t.querySelectorAll(`[aria-hidden="true"]`))e.remove();for(let e of t.querySelectorAll(`br`))e.replaceWith(` `);for(let e of t.querySelectorAll(`[data-reveal]`))e.append(` `);return(t.textContent??``).replace(/\s+/g,` `).trim()},cb=e=>{let t=new Set;for(let n of e.querySelectorAll(`[data-reveal="heading"], [data-reveal="text"]`)){let r=n.parentElement?.closest(`h1, h2, h3, h4, h5, h6`);t.add(r&&e.contains(r)?r:n)}for(let e of t){if(e.closest(`[aria-hidden="true"]`))continue;let t=/^H([1-6])$/.exec(e.tagName)?.[1],n=document.createElement(t?`span`:e.tagName);t&&(n.setAttribute(`role`,`heading`),n.setAttribute(`aria-level`,t)),n.className=`sr-only`,n.textContent=sb(e),e.id&&(n.id=e.id,e.removeAttribute(`id`)),e.setAttribute(`aria-hidden`,`true`),e.after(n)}},lb=e=>{let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)};function ub(e,t,n={}){let r=Ve(),i=[],a=null,o=[],s=null,c=0,u,f=0,p=()=>{u=void 0;let e=f-performance.now();e>1?u=setTimeout(p,e):ee()},m=!1,g={at:+!n.intro},_=null,v=null,y=(e,t)=>Array.from(e.querySelectorAll(`[data-reveal="${t}"]`)),b=async(e,t)=>{let s=y(e,`heading`),c=y(e,`text`),l=y(e,`block`),u=at.timeline({paused:!0,defaults:{force3D:!1}}),d=e=>u.call(()=>{},void 0,e);if(r.value===`reduce`){u.fromTo([...s,...c,...l],{autoAlpha:0},{autoAlpha:1,duration:ob.still,ease:`none`}),a=u;return}let f=async()=>(t&&await t(),m);for(let e of s){if(await f())return;let t=Ut(e,`[data-reveal-whole]`);i.push(Ke.create(e,{type:`lines, words`,linesClass:`reveal-line`,wordsClass:`reveal-word reveal-char`,ignore:`[data-reveal-whole]`,aria:`none`})),Ht(Array.from(e.querySelectorAll(`.reveal-char`)),t)}for(let e of c){if(await f())return;i.push(Ke.create(e,{type:`lines`,mask:`lines`,linesClass:`reveal-line`,aria:`none`}))}let p=s.flatMap(e=>Array.from(e.querySelectorAll(`.reveal-char, [data-reveal-whole]`))),h=c.map(e=>Array.from(e.querySelectorAll(`.reveal-line`))),g=l.map(e=>Array.from(e.children)),_=(e,t,n,r)=>{at.set(e,{transformOrigin:r.rise?`50% 0%`:`50% 50%`,opacity:0,...r.rise??{scale:r.grow}});let i=t=>at.quickSetter(e,t);o.push({start:t,duration:n,...r,set:{y:i(`yPercent`),sx:i(`scaleX`),sy:i(`scaleY`),o:i(`opacity`)},was:``,u:0,f:0,turned:0,base:0})},v=(e,t,n,{duration:r,stagger:i,ease:a},o)=>{let s=o,c=o;for(let o of e.filter(e=>e.length)){u.fromTo(o,t,{...n,duration:r,stagger:i,ease:a},s).fromTo(o,{opacity:0},{opacity:1,duration:r*1.1,stagger:i,ease:a},s);let e=(o.length-1)*i+r;c=Math.max(c,s+e),s+=e*ob.follow}return c-o},b=0;if(!await f()){if(n.scatter){let{fade:e,follow:t,leads:n,room:r,grow:i}=ob.scatter,a=0;for(let o of s){let s=o.querySelector(`[data-reveal-lead]`),c=Array.from(o.querySelectorAll(`.reveal-char, [data-reveal-whole]`)).filter(e=>e!==s);for(let t of c){let n=b+lb(a++)*(1-e);_(t,n,i.duration,{ease:i.ease,grow:i.from,fades:e/i.duration}),d(n+e)}if(s&&c.length){let e=c[0].getBoundingClientRect().left-s.getBoundingClientRect().left;u.fromTo(c,{x:-e},{x:0,duration:n,ease:r},b+1),_(s,b+1+n*.65,n*.55,{ease:i.ease,grow:i.arrow,fades:.4})}b+=t+(s?n:0)}}else if(p.length){let{from:e,duration:t,stagger:r,ease:i,showed:a,lead:o}=ob.letters;if(n.placed){for(let t of p){let[r,a]=n.placed(t);_(t,r,a-r,{ease:i,rise:e})}d(1),b=1}else{for(let[n,a]of p.entries())_(a,b+n*r,t,{ease:i,rise:e});d(b+(p.length-1)*r+a),b+=((p.length-1)*r+o)*ob.overlap}}await f()||(b+=v(h,ob.lines.from,{yPercent:0},ob.lines,b)*ob.overlap,v(g,ob.blocks.from,{yPercent:0},ob.lines,b),at.set([...s,...c,...l],{visibility:`inherit`}),a=u,[D,O]=[!1,-1])}},S=()=>{a?.kill(),a=null,o=[];for(let e of i.reverse())e.revert();i=[]},C=0,w={x:0,v:0},T=!1,E=!1,D=!1,O=-1,k=()=>r.value===`reduce`||n.scatter,A=-1/0,j=(e,t)=>{let r=Math.min(.1,t/1e3);if(performance.now()-A<ob.back*1e3){let e=Math.exp(-ob.holds*r);w={x:Math.max(0,w.x+w.v*(1-e)/ob.holds),v:w.v*e}}else w=nn(w,0,r,n.lands??ob.lands);an(w,0)&&(w={x:0,v:0}),R(),w.x===0&&w.v===0&&(at.ticker.remove(j),E=!1)},M=()=>{let e=at.utils.clamp(0,1,h(t));T&&!k()&&e>C&&(w={x:w.x+e-C,v:w.v}),e<C&&(A=performance.now()),T=!0,C=e,w.x>C&&(w={x:C,v:0}),E||(E=!0,at.ticker.add(j))},{out:N,fade:P}=ob.letters,F=e=>e<=0?0:e>=1?1:e*e*(3-2*e),I=(e,[t,n])=>F((e-t)/(n-t)),L=(e,t)=>D?e.turned>0?e.base*N(Math.min(1,t/e.turned)):0:e.turned>=1?e.base:e.base+(1-e.base)*e.ease(Math.max(0,(t-e.turned)/(1-e.turned))),R=()=>{let t=n.lags?n.lags*Math.tanh(w.x/n.lags):w.x,r=Math.min(g.at,C-t);if(a?.progress(Math.max(0,r)),a&&o.length){let e=r*a.duration();(D?r<O:r>O)&&(O=r);let t=(D?r-O:O-r)>ob.turn;t&&([D,O]=[!D,r]);for(let n of o){t&&([n.turned,n.base]=[n.u,n.f]);let r=Math.min(1,Math.max(0,(e-n.start)/n.duration)),i=L(n,r);[n.u,n.f]=[r,i];let a=n.rise?I(r,P.u)*I(i,P.f):F(r/(n.fades??1)),o=`${i.toFixed(4)} ${a.toFixed(3)}`;if(o!==n.was){if(n.was=o,n.set.o(Math.max(ob.faint,a)),n.rise)n.set.y(n.rise.yPercent*(1-i)),n.set.sy(1+(n.rise.scaleY-1)*(1-i));else{let e=1+((n.grow??1)-1)*(1-i);n.set.sx(e),n.set.sy(e)}}}}e.value&&(e.value.style.visibility=r>0?`visible`:`hidden`)},ee=()=>{let t=e.value;t&&a&&t.offsetWidth!==c&&(c=t.offsetWidth,S(),b(t).then(R))};l(()=>h(t),M),d(async()=>{await Promise.race([document.fonts.ready,new Promise(e=>setTimeout(e,ob.font*1e3))]),await Gt();let t=e.value;if(!m&&t){cb(t);try{if(await b(t,Gt),m)return}catch(e){console.warn(`The words could not be cut`,e),S(),at.set(t.querySelectorAll(`[data-reveal]`),{visibility:`inherit`}),g.at=1,R(),n.played?.();return}if(c=t.offsetWidth,n.intro){let e=()=>_=at.to(g,{at:1,duration:a.duration()/ob.intro,ease:`none`,onUpdate:R,onComplete:()=>n.played?.()}),t=n.intro;t===!0||t()?e():v=l(t,t=>t&&(v?.(),e()))}else n.played?.();M(),s=new ResizeObserver(()=>{f=performance.now()+ob.settle*1e3,u??=setTimeout(p,ob.settle*1e3)}),s.observe(t)}}),x(()=>{m=!0,at.ticker.remove(j),v?.(),_?.kill(),clearTimeout(u),s?.disconnect(),S()})}function db(e,t=()=>!0){let n=E(!1);Re(e,e=>n.value=!!e.at(-1)?.isIntersecting);let r=m(()=>n.value&&t()?`running`:`paused`);l([e,r],([e,t])=>{e&&e.style.animationPlayState!==t&&(e.style.animationPlayState=t)},{immediate:!0})}var fb={ref:`root`,class:`hero`},pb={class:`container hero__container`,"data-tall":``},mb={class:`hero__title`},hb={class:`hero__title-group-1`,"data-reveal":`heading`},gb={class:`hero__title-sub-1`},_b={class:`hero__title-sub-2`},vb={class:`hero__title-group-2`,"data-reveal":`heading`},yb={class:`hero__title-sub-3`},bb={class:`hero__title-sub-4`},xb={class:`hero__title-sub-5`},Sb={class:`hero__marquee`,"data-reveal-whole":``},Cb=[`data-word`],wb={class:`hero__marquee-word`},Tb=[`data-word`],Eb=Object.assign(nt(A({__name:`Hero`,setup(e){let t=[`جهش `,`هوشمند `,`سازمان `,``,`شما`],n=a(`root`),r=a(`track`),o=Vt(),c=()=>1-G(o.value,wt.hero),l=Qt();return ub(n,c,{intro:()=>It.started,played:()=>l.value=!0}),x(()=>l.value=!1),db(r,()=>c()>0),(e,n)=>(s(),_(`section`,fb,[S(`div`,pb,[S(`h1`,mb,[S(`span`,hb,[S(`span`,gb,i(t[0]),1),S(`span`,_b,i(t[1]),1)]),S(`span`,vb,[S(`span`,yb,i(t[2]),1),S(`span`,bb,i(t[3]),1),S(`span`,xb,[n[0]||=S(`span`,{"aria-hidden":`true`},`(`,-1),S(`span`,Sb,[S(`span`,{class:`hero__marquee-size`,"data-word":t[4],"aria-hidden":`true`},null,8,Cb),S(`span`,{ref_key:`track`,ref:r,class:`hero__marquee-track`},[S(`span`,wb,i(t[4]),1),S(`span`,{class:`hero__marquee-word hero__marquee-copy`,"data-word":t[4],"aria-hidden":`true`},null,8,Tb)],512)]),n[1]||=S(`span`,{"aria-hidden":`true`},`)`,-1)])])]),n[2]||=S(`div`,{class:`hero__texts`},[S(`p`,{class:`hero__text hero__text-1`,"data-reveal":`text`},` پشتیبان رشد و نوآوری در سازمان؛ از یکپارچه‌سازی فرایندها و مدیریت منابع تا تحلیل داده و تصمیم‌گیری دقیق‌تر. `),S(`p`,{class:`hero__text hero__text-2`,"data-reveal":`text`},` بهین راهبرد پارسی در نمایشگاه اتوکام ۱۴۰۵؛ ۲۶ تا ۲۹ آبان، شهر نمایشگاهی اصفهان. `),S(`p`,{class:`hero__text hero__text-3`,"data-reveal":`text`},`Intelligent Digital Transformation for Your Organization`)],-1)])],512))}}),[[`__scopeId`,`data-v-321f34ea`]]),{__name:`Hero`}),Db=`(width >= 1100px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)`,Ob={rest:{scale:.66,radius:20},leaves:.75,capsule:{bottom:24,height:40,shadow:24},bar:{fills:700,idle:.09,drain:.9,preview:.3,omega:9,zeta:.8,expand:1,delay:.1}},kb=e=>Math.min(1,Math.max(0,e)),Ab=e=>e<.5?2*e*e:1-(-2*e+2)**2/2,jb=e=>(1-Ob.rest.scale)*e/2,Mb=(e,{height:t,footer:n,rest:r})=>Math.max(0,t-n-Math.max(0,e)-r),Nb=({height:e,rest:t})=>e-t,Pb=(e,t)=>{let{width:n,unit:r,rest:i}=t,{scale:a}=Ob.rest,o=a+(1-a)*e;return{scale:o,x:(1-o)*n/2,y:i*(1-e),radius:Ob.rest.radius*r*Math.sqrt(Math.max(0,1-e)),capsule:Ab(kb((e-Ob.leaves)/(1-Ob.leaves)))}},Fb=(e,{rest:t})=>{let n=kb(e);return t*(1-(1-n)*(1-n))},Ib={want:0,at:0,v:0,idle:0},Lb=(e,t)=>t<=0?e:{...e,want:Math.min(1,e.want+t/Ob.bar.fills),idle:0},Rb=(e,t)=>{let{idle:n,drain:r,omega:i,zeta:a}=Ob.bar,o=e.idle+t,s=e.want<1&&o>n?Math.max(0,e.want-t/r):e.want,{at:c,v:l}=e,u=Math.max(1,Math.ceil(t*240));for(let e=0;e<u;e++){let e=t/u;l+=(i*i*(s-c)-2*a*i*l)*e,c+=l*e}return{want:s,at:c,v:l,idle:o}},zb=e=>e.want>=1,Bb=e=>e.want===0&&Math.abs(e.at)<.001&&Math.abs(e.v)<.01,Vb=[1280,1440,1512,1728,1920,2560].flatMap(e=>[[e,Math.round(e/1.6)],[e,Math.round(e/1.85)]]),Hb=(e,t)=>Vb.reduce((n,r)=>{let i=n=>2*Math.abs(Math.log(n[0]/e))+Math.abs(Math.log(n[1]/t));return i(r)<i(n)?r:n}),Ub=[`src`],Wb=[`src`],Gb={class:`handoff-layer__track`},Kb=Object.assign(nt(A({__name:`AppHandoff.client`,setup(n){let{appUrl:r,handoffFrame:i}=t().public,o=`${r}/?from=site`,c=ct(Db),f=ct(`(prefers-color-scheme: dark)`),p=a(`zone`),h=a(`layer`),v=a(`screen`),y=a(`capsule`),b=a(`fill`),w=E(!1),D=E([1440,900]),O=m(()=>`./handoff/${D.value.join(`x`)}-${f.value?`dark`:`light`}.webp`),k=null,A=0,j=1/0,M=1/0,N=0,P=1,F=Ib,I={q:0,f:0,on:!1},L=!1,R=()=>({width:window.innerWidth,height:window.innerHeight,unit:P,rest:N}),ee=()=>{let e=p.value;if(!e||!c.value){xt.from=xt.covers=j=M=1/0;return}k=e.previousElementSibling;let t=window.innerHeight;A=k?.offsetHeight??0,N=jb(t);let n=Nb({height:t,rest:N});e.style.height=`${n}px`,j=e.getBoundingClientRect().top+window.scrollY-t,M=j+n,P=parseFloat(getComputedStyle(document.documentElement).fontSize)/16,D.value=Hb(window.innerWidth,t),xt.from=j,xt.covers=k?k.getBoundingClientRect().top+window.scrollY:1/0,V()},{track:te}=qt(),z=()=>{L||(L=!0,te(`handoff`),window.location.assign(o))},ne=()=>{if(!w.value){if(w.value=!0,HTMLScriptElement.supports?.(`speculationrules`)){let e=document.createElement(`script`);e.type=`speculationrules`,e.textContent=JSON.stringify({prerender:[{urls:[o]}],prefetch:[{urls:[o]}]}),document.head.append(e)}else{let e=document.createElement(`link`);e.rel=`prefetch`,e.href=o,document.head.append(e)}}},B=!1,re=0,V=()=>{let e=window.scrollY;e>j-window.innerHeight&&ne();let t=h.value;if(!t||!v.value)return;e>j!==B&&(B=e>j,t.style.visibility=B?`visible`:``);let n=Pb(I.on?I.q:F.at*Ob.bar.preview,R()),r=Fb(I.on?I.f:F.at,R()),i=Mb(e-j,{height:window.innerHeight,footer:A,rest:N});v.value.style.transform=`translate(${n.x}px, ${n.y+i}px) scale(${n.scale})`,v.value.style.setProperty(`--scale`,String(n.scale)),v.value.style.setProperty(`--corner`,`${n.radius/n.scale}px`);let{bottom:a,height:o,shadow:s}=Ob.capsule;y.value&&(y.value.style.transform=`translate(-50%, ${n.capsule*(a+o+s)*P}px)`),b.value&&(b.value.style.transform=`scaleX(${I.on?1:Math.max(0,F.want)})`);let c=Math.round(r*10)/10;k&&c!==re&&(re=c,k.style.transform=c?`translate3d(0, ${-c}px, 0)`:``)},H=e=>t=>e*t+(3-2*e)*t*t+(e-2)*t*t*t,ie=()=>{if(I.on)return;let{preview:e,expand:t,delay:n}=Ob.bar;I.q=F.at*e,I.f=Math.min(1,Math.max(0,F.at)),I.on=!0,document.documentElement.classList.add(`is-opening`),ze.lenis?.stop();let r=(e,n)=>Math.min(3,Math.max(0,n*t/Math.max(1e-6,e)));at.to(I,{f:1,duration:t,ease:H(r(1-I.f,F.v))}),at.to(I,{q:1,duration:t,ease:H(r(1-I.q,F.v*e)),onUpdate:V,onComplete:()=>void at.delayedCall(n,z)})},ae=()=>{let e=ze.lenis;return window.scrollY>=M-1&&(!e||Math.abs(e.velocity)<=.5)},U=e=>{I.on||L||!c.value||e<=0||!ae()||(F=Lb(F,e))},W=e=>e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?window.innerHeight:1),oe={ArrowDown:()=>100,PageDown:e=>.8*e," ":e=>.8*e,End:e=>e},se=e=>{let t=oe[e.key],n=e.target;if(!(!t||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey)&&!n?.closest(`input, textarea, select, button, [contenteditable]`)){if(I.on)return void e.preventDefault();U(t(window.innerHeight))}},ce=(e,t)=>{I.on||F.want===0&&Bb(F)||(F=Rb(F,Math.min(.1,t/1e3)),Bb(F)&&(F=Ib),V(),zb(F)&&ie())};return $t(V),Pe(`scroll`,V,{passive:!0}),Pe(`wheel`,e=>U(W(e)),{passive:!0}),Pe(`keydown`,se),Pe(`resize`,ee,{passive:!0}),Ee(()=>document.body,ee),Pe(`pageshow`,e=>{e.persisted&&(at.killTweensOf(I),document.documentElement.classList.remove(`is-opening`),ze.lenis?.start(),L=I.on=!1,I.q=I.f=0,F=Ib,V())}),l(c,()=>u(ee)),d(()=>{ee(),at.ticker.add(ce)}),x(()=>{at.ticker.remove(ce),at.killTweensOf(I),k&&(k.style.transform=``),xt.from=xt.covers=1/0}),(t,n)=>C(c)?(s(),_(T,{key:0},[S(`div`,{ref_key:`zone`,ref:p,class:`handoff`,"aria-hidden":`true`},null,512),S(`div`,{ref_key:`layer`,ref:h,class:`handoff-layer`,"aria-hidden":`true`},[S(`a`,{ref_key:`screen`,ref:v,class:`handoff-layer__screen`,href:o,tabindex:`-1`,onClick:e(ie,[`prevent`])},[C(w)&&C(i)?(s(),_(`iframe`,{key:0,class:`handoff-layer__frame`,src:C(i),tabindex:`-1`},null,8,Ub)):C(w)?(s(),_(`img`,{key:1,class:`handoff-layer__frame`,src:C(O),alt:``},null,8,Wb)):g(``,!0)],512),S(`div`,{ref_key:`capsule`,ref:y,class:`handoff-layer__capsule`},[n[0]||=S(`span`,{class:`handoff-layer__label`},`ارتباط با بهین‌تک`,-1),S(`span`,Gb,[S(`span`,{ref_key:`fill`,ref:b,class:`handoff-layer__fill`},null,512)])],512)],512)],64)):g(``,!0)}}),[[`__scopeId`,`data-v-907669fe`]]),{__name:`AppHandoff`}),qb=Rt(`./library/wall.webp?v=behin2`),Jb={ref:`root`,class:`library`},Yb={class:`library__frame`,"data-tall":``},Xb={class:`library__wall`,"data-story":`wall`},Zb={key:0,class:`library__wall-image`,src:qb,width:`816`,height:`760`,alt:``,loading:`lazy`,decoding:`async`},Qb={class:`container grid library__container`},$b={class:`library__text`},ex={class:`library__action`,"data-reveal":`block`},tx=Object.assign(nt(A({__name:`راهکارها`,setup(e){let n=`/#how-it-works`,r=tn(),i=a(`root`),o=Vt(),l=Wt();return ub(i,()=>Math.min(G(o.value,wt.library),1-G(ue(l.value.pick),St.library))),(e,t)=>{let i=Zt;return s(),_(`section`,Jb,[S(`div`,Yb,[S(`div`,Xb,[C(r)?(s(),_(`img`,Zb)):g(``,!0)]),S(`div`,Qb,[S(`div`,$b,[t[1]||=y(`<div class="library__heading" data-v-d4641817><h2 class="library__title" data-reveal="heading" data-v-d4641817>چهار بُعد از<br data-v-d4641817>تحول هوشمند</h2><div class="library__copy" data-v-d4641817><p class="library__copy-1" data-reveal="text" data-v-d4641817> از بهینه‌سازی کارهای روزمره تا تصمیم‌گیری مبتنی بر داده؛ </p><p class="library__copy-2" data-reveal="text" data-v-d4641817> راهکارها زمانی اثرگذارند که در کنار هم کار کنند. </p></div></div>`,1),S(`div`,ex,[p(i,{to:C(n)},{default:c(()=>[...t[0]||=[v(`دیدن راهکارها`,-1)]]),_:1},8,[`to`])])])])])],512)}}}),[[`__scopeId`,`data-v-d4641817`]]),{__name:`راهکارها`}),nx=Object.assign(nt(A({__name:`AppRuler`,props:{middle:{},grown:{default:1}},setup(e){let t=e,n=a(`root`),r=a(`canvas`),{width:i,height:o}=bt(n),c=m(()=>o.value&&parseFloat(getComputedStyle(document.documentElement).fontSize)/16),l=m(()=>{let e=Ft.pitch*c.value,{count:n,first:r}=At(o.value,e);if(!n)return[];let a=window.devicePixelRatio||1;return Array.from({length:n},(n,o)=>{let s=Math.round((r+o*e)*a)/a,l=t.middle===null?0:Nt(s+.5-t.middle,Ft.least*c.value,Ft.ramp*c.value),u=t.grown*(Ft.rest+(Ft.full-Ft.rest)*l);return{y:s,length:i.value*u/Ft.full,swell:l}})}),u=null;return w(()=>{let e=r.value,t=l.value;e&&i.value&&o.value&&(u??=[Mt(`--tick`),Mt(`--fg-muted`)],jt(e,i.value,o.value,t,`left`,u))}),(e,t)=>(s(),_(`div`,{ref_key:`root`,ref:n,class:`app-ruler`,"aria-hidden":`true`},[S(`canvas`,{ref_key:`canvas`,ref:r,class:`app-ruler__canvas`},null,512)],512))}}),[[`__scopeId`,`data-v-d73b2274`]]),{__name:`AppRuler`}),rx={class:`container categories__body`},ix=[`src`],ax={ref:`list`,class:`categories__list`},ox={ref:`rows`,class:`categories__rows`},sx={ref:`arrow`,class:`categories__arrow`,"data-reveal":`block`,"aria-hidden":`true`},cx={class:`categories__items`},lx=[`aria-current`],ux=[`onClick`],dx={class:`sr-only`},fx={class:`categories__name`,"data-reveal":`text`,"aria-hidden":`true`},px=9,mx=.2,hx=80,gx=Object.assign(nt(A({__name:`Categories`,setup(e){let t=[`فرایندها`,`منابع`,`داده‌ها`,`گزارش‌ها`,`یکپارچگی`,`تصمیم‌ها`,`رشد`],n=e=>e<=1?1-.4*e:Math.max(.1,.7-.1*e),r=e=>e<=0?0:e>=1?1:e*e*(3-2*e),o={d:{field:[762,684.5],cards:[[295,4.5,110],[465,36.5,170],[672,0,90],[292,212,150],[607,278,120],[0,443.5,130],[247,521.5,100],[427,471.5,160],[662,550,90]]},t:{field:[362,624],cards:[[134,5,68],[212,37,105],[306,0,56],[133,212,93],[276,278,74],[0,444,81],[112,522,62],[194,472,99],[301,550,56]]},p:{field:[358,259],cards:[[134,2,56],[210,16,88],[314,0,44],[124,90,76],[302,102,56],[0,152,66],[94,192,50],[210,150,82],[310,196,44]]}},c=Object.entries(o),l=Object.fromEntries(c.flatMap(([e,t])=>[[`--${e}-height`,t.field[1]],[`--${e}-ratio`,t.field[0]/t.field[1]]])),u=o.d.cards.map((e,t)=>Object.fromEntries(c.flatMap(([e,n])=>{let[r,i]=n.field,[a,o,s]=n.cards[t];return[[`--${e}-x`,`${a/r*100}%`],[`--${e}-y`,`${o/i*100}%`],[`--${e}-w`,`${s/r*100}%`]]}))),h=tn(),v=Wt(),y=Ve(),w=a(`root`),E=a(`list`),D=a(`rows`),O=a(`arrow`),k=m(()=>Math.min(G(v.value.over,St.words),1-G(Xe(v.value.heights??0),Ge.categories)));ub(w,k);let A=b({tops:[],heights:[],room:0,block:0,ruler:0,rulerHeight:0,list:0,listHeight:0,shows:0,height:0,unit:1,drum:!1}),M=``,N=(e,t,n)=>{let r=hx*A.unit,[i,a]=A.drum?[0,A.listHeight]:[t-A.list,A.height-A.list+t],o=e=>{for(let[t,r]of A.tops.entries()){let[i,a]=[A.block+n+r,A.block+n+r+A.heights[t]];if(i<e&&e<a)return Math.min(e-i,a-e)}return 0},s=[i,a].map(e=>Math.min(r,o(e))),c=[i,a,...s].map(e=>e.toFixed(1)).join(` `);c!==M&&(M=c,e.style.setProperty(`--mask-top`,`${i.toFixed(1)}px`),e.style.setProperty(`--mask-bottom`,`${a.toFixed(1)}px`),e.style.setProperty(`--fade-top`,`${s[0].toFixed(1)}px`),e.style.setProperty(`--fade-bottom`,`${s[1].toFixed(1)}px`))},P=e=>{let t=Math.max(0,Math.min(A.tops.length-1,Math.floor(e))),n=Math.min(A.tops.length-1,t+1);return A.tops[t]+(A.tops[n]-A.tops[t])*(e-t)},F=e=>P(e)+(A.heights[0]??0)/2,I={place:v.value.on,pace:0},L=m(()=>v.value.on),R=[],ee=!1,te=e=>{if((!R.length||R.some(e=>e.some(e=>!e.isConnected)))&&(R=Array.from(e.querySelectorAll(`.categories__item`)).map(e=>Array.from(e.querySelectorAll(`.categories__letter`))),ee=!1),!ee&&document.fonts.status===`loaded`){ee=!0;for(let e of R){let t=e[0]?.closest(`.categories__item`)?.querySelector(`.sr-only`);if(!t||e[0]?.dataset.kerned)continue;let n=document.createElement(`span`);n.textContent=t.textContent,n.style.cssText=`position:absolute;visibility:hidden;white-space:nowrap`,e[0].parentElement.append(n),Ht(e,Ut(n)),n.remove();for(let t of e)t.dataset.kerned=`1`}}return R},{track:z}=qt(),ne=e=>{z(`pick_category`,{category:t[e]});let n=lt.unit||le(window.innerHeight),r=De.scroll+Ae.stays+Ae.over+(e+.5)*Ae.each;Ze(Math.round(We(r,lt.tall,n)*n))},B=[],re=[],V=()=>{let e=E.value,t=D.value;if(!e||!t||!A.tops.length)return;let{place:i}=I,a=te(t);for(let[e,o]of Array.from(t.querySelectorAll(`.categories__item`)).entries()){let t=Math.abs(e-i),s=n(t).toFixed(3);B[e]!==s&&(o.style.opacity=B[e]=s);let c=Math.max(0,1-t),l=a[e]??[],u=Math.max(1,l.length-1),d=re[e]??(re[e]=[]);for(let[e,t]of l.entries()){let n=A.room*r(c*1.2-mx*(l.length-1-e)/u),i=n?`translateX(${n.toFixed(2)}px)`:``;d[e]!==i&&(t.style.transform=d[e]=i)}}if(O.value&&(O.value.style.transform=`translateY(${P(i)}px)`),A.drum){let n=A.listHeight/2-A.block-F(i);t.style.transform=`translateY(${n}px)`,e.style.transform=``,N(e,0,n)}else{let n=A.list+A.block+P(Math.min(i+1,A.tops.length-1)),r=A.list+A.block+P(A.tops.length-1)+(A.heights[0]??0),a=n+(A.heights[0]??0)-A.shows,o=Math.max(0,Math.min(a,r-A.shows));e.style.transform=o>0?`translateY(${-o}px)`:``,t.style.transform=``,N(e,o,0)}};Ee(w,()=>{let e=w.value,t=E.value,n=D.value,r=e?.querySelector(`.categories__ruler`);if(!e||!t||!n||!r)return;let i=Array.from(n.querySelectorAll(`.categories__item`));A.tops=i.map(e=>e.offsetTop),A.heights=i.map(e=>e.offsetHeight);let a=getComputedStyle(e);A.drum=a.getPropertyValue(`--drum`).trim()===`1`,A.room=O.value?.offsetWidth??0,A.block=n.offsetTop,A.ruler=r.offsetTop,A.rulerHeight=r.offsetHeight;let o=0;for(let n=t;n&&n!==e;n=n.offsetParent)o+=n.offsetTop;A.list=o,A.listHeight=t.offsetHeight,A.shows=e.clientHeight-parseFloat(a.paddingBottom),A.height=e.clientHeight,A.unit=parseFloat(getComputedStyle(document.documentElement).fontSize)/16,V()});let H=(e,t)=>{let n=v.value.on;if(I.place!==n||I.pace!==0){if(y.value===`reduce`)[I.place,I.pace]=[n,0];else{let e=Math.min(.1,t/1e3),r=I.place-n,i=I.pace+px*r,a=Math.exp(-9*e);I.place=n+(r+i*e)*a,I.pace=(I.pace-px*i*e)*a,Math.abs(I.place-n)<1e-4&&Math.abs(I.pace)<.001&&([I.place,I.pace]=[n,0])}V()}};d(()=>at.ticker.add(H)),x(()=>at.ticker.remove(H));let ie=m(()=>{if(!A.tops.length)return null;let e=Math.max(0,Math.min(t.length-1,v.value.pick-.5));return A.drum?Pt(e/(t.length-1),A.rulerHeight,Ft.least*A.unit):A.block+F(e)-A.ruler});return(e,n)=>{let r=nx;return s(),_(`section`,{ref_key:`root`,ref:w,class:`categories`,"aria-labelledby":`categories-title`},[n[2]||=S(`h2`,{id:`categories-title`,class:`sr-only`},`راهکارهای سازمانی`,-1),S(`div`,rx,[S(`div`,{class:`categories__cards`,style:f(C(l)),"aria-hidden":`true`},[n[0]||=S(`div`,{class:`categories__field`,"data-story":`categories`},null,-1),C(h)?(s(),_(`div`,{key:0,class:`categories__still`,style:f({opacity:C(k)})},[(s(!0),_(T,null,j(C(u),(e,t)=>(s(),_(`img`,{key:t,class:`categories__card`,style:f(e),src:`./pictures/${t+1}.webp?v=behin2`,width:`720`,height:`1053`,alt:``,loading:`lazy`,decoding:`async`},null,12,ix))),128))],4)):g(``,!0)],4),S(`div`,ax,[p(r,{class:`categories__ruler`,middle:C(ie),grown:C(k)},null,8,[`middle`,`grown`]),S(`div`,ox,[S(`span`,sx,[...n[1]||=[S(`span`,null,`→`,-1)]],512),S(`ul`,cx,[(s(),_(T,null,j(t,(e,t)=>S(`li`,{key:e,class:`categories__item`,"aria-current":t===C(L)||void 0},[S(`button`,{type:`button`,class:`categories__pick`,onClick:e=>ne(t)},[S(`span`,dx,i(e),1),S(`span`,fx,[(s(!0),_(T,null,j([e],(e,t)=>(s(),_(`span`,{key:t,class:`categories__letter`},i(e),1))),128))])],8,ux)],8,lx)),64))])],512)],512)])],512)}}}),[[`__scopeId`,`data-v-dbfd8d2e`]]),{__name:`Categories`}),_x=.55,vx=Object.assign(nt(A({__name:`Shortcut`,setup(e){let t=a(`root`),n=a(`line`),r=Wt(),i=m(()=>Xe(r.value.heights??0)),{width:o}=bt(n),{width:c}=Ct(),l=m(()=>`translateX(${(1-2*i.value)*((c.value+o.value)/2)}px)`);ub(t,()=>i.value<1?i.value:0,{lands:7,lags:.03,placed:e=>{let t=n.value,r=c.value+(t?.offsetWidth??0),i=e.getBoundingClientRect(),a=t?(i.left+i.width/2-t.getBoundingClientRect().left)/r:0;return[a,Math.min(1,a+_x*c.value/r)]}});let u=$e();return(e,r)=>(s(),_(`section`,{ref_key:`root`,ref:t,class:`shortcut`,id:`about`,"aria-labelledby":`shortcut-title`},[S(`div`,{class:`shortcut__ride`,style:f(C(u)?{transform:C(l)}:void 0)},[S(`h2`,{id:`shortcut-title`,ref_key:`line`,ref:n,class:`shortcut__title`,"data-reveal":`heading`},` پشتیبان رشد و نوآوری سازمان. `,512)],4)],512))}}),[[`__scopeId`,`data-v-d0b20763`]]),{__name:`Shortcut`}),yx=Rt(`./customization/panel-still.webp?v=behin2`),bx=[`src`],xx={class:`customization__label`},Sx={class:`customization__length`},Cx=[`aria-current`],wx=[`onClick`],Tx={class:`customization__index`,"data-reveal":`block`},Ex={class:`customization__number`},Dx={class:`customization__copy`},Ox={class:`customization__name`,"data-reveal":`text`},kx={class:`customization__text`,"data-reveal":`text`},Ax={key:0,class:`customization__swatches`,"data-reveal":`block`},jx={class:`customization__colours`},Mx=[`aria-label`,`onClick`],Nx=9,Px=.03,Fx=80,Ix=Object.assign(nt(A({__name:`Customization`,setup(e){let t=[{title:`هوشمندسازی فرایندها`,text:`فرایندهای روشن و متصل، کارهای تکراری را کاهش می‌دهند و هماهنگی میان تیم‌ها را بیشتر می‌کنند.`},{title:`تحلیل هوشمند داده‌ها`,text:`دسترسی به اطلاعات یکپارچه، تصویر قابل‌اتکاتری از وضعیت کسب‌وکار در اختیار مدیران می‌گذارد.`},{title:`تصمیم‌گیری دقیق‌تر`,text:`گزارش‌های روشن و به‌موقع، تصمیم‌ها را به واقعیت‌های عملیاتی نزدیک‌تر می‌کنند.`},{title:`یکپارچگی سازمانی`,text:`اتصال واحدها و گردش اطلاعات، دید مشترکی از منابع و عملیات سازمان ایجاد می‌کند.`}],n=[1.3,1.75],r=[4,4.3],o=[4,4.5],c=[4.5,5.9],u=[6.2,6.95],h=[`black`,`cream`,`purple`,`red`],v=e=>e?xe.backs[e-1][1]+Px:xe.backs[0][0]-Px,w=e=>{let t=lt.unit||le(window.innerHeight);Ze(Math.round(We(st+Ae.custom+e*Ae.step,lt.tall,t)*t))},{track:D}=qt(),O=(e,t)=>{D(`pick_step`,{step:e}),w(t)},k=[{names:[`فرایند`,`Marquee`],length:`6.00s`,pictures:[9,1,2,3],comes:[-.4,-.05]},{names:[`داده`],length:`5.20s`,pictures:[8,4,6,2],comes:[3.3,3.55]},{names:[`منابع`],length:`8.00s`,pictures:[5,7,3,1],comes:[4.45,4.75]}],A=(xe.lays[0]+xe.lays[1])/2,M=zt(),N=tn(),F=Wt(),I=Ve(),R=a(`root`),ee=a(`panel`),te=a(`steps`),z=a(`canvas`),ne=a(`type`),B=a(`dark`),re=a(`timeline`),V=a(`track`),H=a(`view`),ie=a(`list`),ae=a(`later`),U=a(`headline`),W=a(`picture`),oe=m(()=>L(F.value.heights??0)),se=E(0);l(()=>oe.value.step,e=>se.value=P(e,se.value));let ce=m(()=>G(oe.value.comes,_t)*(1-G(oe.value.step,o))),ue=()=>G(oe.value.step,n)*(1-G(oe.value.step,r));ub(te,ce),ub(ne,ue),ub(B,ue),ub(U,()=>G(oe.value.step,c)*(1-G(oe.value.step,u)),{scatter:!0});let de=m(()=>oe.value.step<A?0:1),fe={left:0,top:0,width:0,height:0},pe={left:0,top:0,width:0,height:0},me={width:0,height:0},q=new Map,he=(e,t)=>{e&&q.get(e)!==t&&(q.set(e,t),e.style.cssText=t)},J=e=>`${e.toFixed(2)}px`,ge=e=>`left:${J(e.left)};top:${J(e.top)};width:${J(e.width)};height:${J(e.height)};`,_e=``,ve=()=>{if(!me.width)return;let{comes:e,step:t}=oe.value,n=mt(fe,pe,t);if(he(W.value,`${ge(n)}--rounded:${J(n.width*20/755)};`),M.value===`failed`)return;let r=e>0&&(F.value.heights??0)<Ne?`visible`:``;R.value&&R.value.style.visibility!==r&&(R.value.style.visibility=r);let i=yt(me,n,e,t),a=e>0?`visible`:`hidden`;he(ee.value,`visibility:${a};`);let o=e=>e.left<me.width&&e.top<me.height&&e.left+e.width>0&&e.top+e.height>0,s=(F.value.heights??0)>=Ne;(!s||!_e)&&(_e=`${ge(i.stage)}--size:${J(i.stage.width*.13)};`),he(z.value,`${_e}${ue()>0&&!s?``:`visibility:hidden;`}`);let[c,l]=xe.backs.map(e=>Le(G(t,e))),u=`inset(${((1-c)*100).toFixed(3)}% 0 ${(l*100).toFixed(3)}% 0)`;if(B.value&&B.value.style.clipPath!==u&&(B.value.style.clipPath=u),he(re.value,o(i.track)&&t<K(xe.agents.moves)?`${ge(i.panel)}visibility:${a};--rounded:${J(i.panel.width*20/755)};`:`display:none;`),s&&q.get(re.value)===`display:none;`)return;he(V.value,`${ge({...i.track,left:i.track.left-i.panel.left,top:i.track.top-i.panel.top})}--track:${J(i.track.height)};`);let d=k.map(e=>Le(G(t,e.comes))),f=Math.max(1,d.reduce((e,t)=>e+t,0));for(let[e,t]of Array.from(V.value?.querySelectorAll(`.customization__clip`)??[]).entries()){let n=d.slice(0,e).reduce((e,t)=>e+t,0)/f,r=d[e]/f;he(t,`left:${(n*100).toFixed(3)}%;width:${(r*100).toFixed(3)}%;visibility:${r>0?`visible`:`hidden`};`)}let p=Je(t);he(te.value?.querySelector(`.customization__ring`)??null,`transform:translateX(calc(${p.toFixed(4)} * (var(--swatch) + var(--swatch-gap))));`)};l(oe,ve);let ye=b({tops:[],heights:[],list:0,view:0,ruler:0,unit:1}),be={place:se.value,pace:0},Se=(e,t)=>{let n=Math.max(0,Math.min(e.length-1,Math.floor(t))),r=Math.min(e.length-1,n+1);return e[n]+(e[r]-e[n])*(t-n)},Ce=[],Y=``,we=``,Te=e=>{for(let[t,n]of ye.tops.entries()){let r=n+ye.heights[t];if(n<e&&e<r)return Math.min(e-n,r-e)}return 0},De=()=>{let e=ie.value;if(!e||!ye.tops.length)return;let{place:t}=be,n=ye.list-ye.view,r=ye.tops[ye.tops.length-1],i=Math.max(0,...ye.tops.filter(e=>e<n)),a=(r-ye.tops[0])/(ye.tops.length-1)/2,o=Math.max(0,Math.min(a,n-i,r-n)),s=Math.max(0,sm(Se(ye.tops,t),n,o)),c=s>0?`translateY(${(-s).toFixed(2)}px)`:``;c!==Y&&(e.style.transform=Y=c);let l=Fx*ye.unit,u=[s,s+ye.view].map(e=>Math.min(l,Te(e))),d=u.map(e=>`${e.toFixed(1)}px`).join(` `);d!==we&&H.value&&(we=d,H.value.style.setProperty(`--fade-top`,`${u[0].toFixed(1)}px`),H.value.style.setProperty(`--fade-bottom`,`${u[1].toFixed(1)}px`));for(let[n,r]of Array.from(e.querySelectorAll(`.customization__step`)).entries()){let e=(1-.30000000000000004*Math.min(1,Math.abs(n-t))).toFixed(3);Ce[n]!==e&&(r.style.opacity=Ce[n]=e)}},Oe=m(()=>ye.ruler?Pt(oe.value.step/t.length,ye.ruler,Ft.least*ye.unit):null),ke=e=>({left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight});Ee(R,()=>{let e=R.value,t=ie.value,n=H.value,r=te.value?.querySelector(`.customization__ruler`);if(!e||!t||!n||!r)return;let i=Array.from(t.querySelectorAll(`.customization__step`));ye.tops=i.map(e=>e.offsetTop),ye.heights=i.map(e=>e.offsetHeight),ye.list=t.offsetHeight,ye.view=n.clientHeight,ye.ruler=r.offsetHeight,ye.unit=parseFloat(getComputedStyle(document.documentElement).fontSize)/16;let a=ee.value;a&&(e.style.setProperty(`--panel`,`${a.offsetWidth}px`),Object.assign(fe,ke(a))),ae.value&&Object.assign(pe,ke(ae.value)),Object.assign(me,{width:e.clientWidth,height:e.clientHeight}),q.clear(),De(),ve()});let je=(e,t)=>{let n=se.value;if(be.place!==n||be.pace!==0){if(I.value===`reduce`)[be.place,be.pace]=[n,0];else{let e=Math.min(.1,t/1e3),r=be.place-n,i=be.pace+Nx*r,a=Math.exp(-9*e);be.place=n+(r+i*e)*a,be.pace=(be.pace-Nx*i*e)*a,Math.abs(be.place-n)<1e-4&&Math.abs(be.pace)<.001&&([be.place,be.pace]=[n,0])}De()}};return d(()=>at.ticker.add(je)),x(()=>at.ticker.remove(je)),(e,n)=>{let r=nx;return s(),_(`section`,{id:`how-it-works`,ref_key:`root`,ref:R,class:`customization`,"aria-labelledby":`customization-title`},[n[4]||=S(`h2`,{id:`customization-title`,class:`sr-only`},`چهار بُعد از تحول هوشمند`,-1),S(`div`,{ref_key:`panel`,ref:ee,class:`customization__panel`,"data-story":`panel`,"aria-hidden":`true`},null,512),S(`div`,{ref_key:`later`,ref:ae,class:`customization__later`,"data-story":`panel-later`,"aria-hidden":`true`},null,512),C(N)?(s(),_(`img`,{key:0,ref_key:`picture`,ref:W,class:`customization__picture`,src:yx,width:`2016`,height:`1864`,alt:``,decoding:`async`},null,512)):g(``,!0),C(N)?g(``,!0):(s(),_(T,{key:1},[S(`div`,{ref_key:`canvas`,ref:z,class:`customization__canvas`,"aria-hidden":`true`},[S(`div`,{ref_key:`type`,ref:ne,class:`customization__words`},[...n[0]||=[S(`p`,{class:`customization__type`,"data-reveal":`heading`},`سازمان هوشمند`,-1)]],512),S(`div`,{ref_key:`dark`,ref:B,class:`customization__words`},[...n[1]||=[S(`p`,{class:`customization__type customization__type--dark`,"data-reveal":`heading`},` سازمان هوشمند `,-1)]],512)],512),S(`div`,{ref_key:`timeline`,ref:re,class:`customization__timeline`,"aria-hidden":`true`},[S(`div`,{ref_key:`track`,ref:V,class:`customization__track`},[(s(),_(T,null,j(k,(e,t)=>S(`div`,{key:e.names[0],class:`customization__clip`},[(s(!0),_(T,null,j(e.pictures,(e,t)=>(s(),_(`img`,{key:t,class:`customization__frame`,src:`./pictures/${e}.webp?v=behin2`,alt:``,decoding:`async`},null,8,bx))),128)),S(`span`,xx,i(e.names[t===0?C(de):0]),1),S(`span`,Sx,i(e.length),1)])),64))],512)],512)],64)),S(`div`,{ref_key:`steps`,ref:te,class:`customization__steps`},[p(r,{class:`customization__ruler`,middle:C(Oe),grown:C(ce)},null,8,[`middle`,`grown`]),S(`div`,{ref_key:`view`,ref:H,class:`customization__view`},[S(`ol`,{ref_key:`list`,ref:ie,class:`customization__list`},[(s(),_(T,null,j(t,(e,t)=>S(`li`,{key:e.title,class:`customization__step`,"aria-current":t===C(se)||void 0},[S(`button`,{type:`button`,class:`customization__pick`,onClick:n=>O(e.title,t+Px)},[S(`span`,Tx,[S(`span`,Ex,i(String(t+1).padStart(2,`0`)),1)]),S(`span`,Dx,[S(`span`,Ox,i(e.title),1),S(`span`,kx,i(e.text),1)])],8,wx),t===2?(s(),_(`span`,Ax,[S(`span`,jx,[(s(),_(T,null,j(h,(e,t)=>S(`button`,{key:e,type:`button`,class:`customization__swatch`,"aria-label":`${e[0].toUpperCase()}${e.slice(1)} background`,style:f({backgroundImage:`url(./customization/${e}.webp?v=behin2)`}),onClick:n=>O(`${e} background`,v(t))},null,12,Mx)),64)),n[2]||=S(`span`,{class:`customization__ring`},null,-1)])])):g(``,!0)],8,Cx)),64))],512)],512)],512),S(`h2`,{ref_key:`headline`,ref:U,class:`customization__more`},[...n[3]||=[y(`<span class="customization__line" data-reveal="heading" data-v-b1e0881b><span class="customization__arrow" data-reveal-whole data-reveal-lead aria-hidden="true" data-v-b1e0881b>→</span> از فرایند </span><span class="customization__line customization__line--in" data-reveal="heading" data-v-b1e0881b>تا داده،<br data-v-b1e0881b>از بینش </span><span class="customization__line customization__line--right" data-reveal="heading" data-v-b1e0881b>تا تصمیم؛<br data-v-b1e0881b>همراه </span><span class="customization__line customization__line--end" data-reveal="heading" data-v-b1e0881b>سازمان<br data-v-b1e0881b>(شما)</span>`,4)]],512)],512)}}}),[[`__scopeId`,`data-v-b1e0881b`]]),{__name:`Customization`}),Lx=(e,t,n)=>t===`ArrowRight`||t===`ArrowDown`?(e+1)%n:t===`ArrowLeft`||t===`ArrowUp`?(e-1+n)%n:t===`Home`?0:t===`End`?n-1:null,Rx=[`role`,`aria-label`,`aria-hidden`],zx={class:`app-switch__dark`},Bx={class:`app-switch__label`},Vx={key:0,class:`app-switch__badge`},Hx={class:`app-switch__label`},Ux={key:0,class:`app-switch__badge`},Wx=Object.assign(nt(A({__name:`AppSwitch`,props:{options:{},edges:{},name:{},picked:{},size:{}},emits:[`pick`],setup(e,{emit:t}){let n=e,r=t,u=a(`root`),f=a(`pill`),p=a(`light`),m=[],h={width:0,height:0},v=()=>{h.width=u.value?.offsetWidth??0,h.height=u.value?.offsetHeight??0,m.length=0;for(let e of Array.from(u.value?.querySelectorAll(`.app-switch__dark > *`)??[]))m.push({left:e.offsetLeft,right:e.offsetLeft+e.offsetWidth,top:e.offsetTop,bottom:e.offsetTop+e.offsetHeight});C()};Ee(u,v),d(v);let y=(e,t)=>{let n=Math.max(0,Math.min(m.length-1,Math.floor(e))),[r,i]=[m[n],m[Math.min(m.length-1,n+1)]];return!r||!i?0:r[t]+(i[t]-r[t])*(e-n)},b=new Map,x=(e,t)=>{e&&b.get(e)!==t&&(b.set(e,t),e.style.cssText=t)},C=()=>{let e=m[0];if(!e)return;let[t,r]=[y(n.edges[0],`left`),y(n.edges[1],`right`)];x(f.value,`left:${t.toFixed(2)}px;width:${(r-t).toFixed(2)}px;`),x(p.value,`clip-path:inset(${e.top}px ${(h.width-r).toFixed(2)}px ${h.height-e.bottom}px ${t.toFixed(2)}px round 999px);`)};l(()=>n.edges,C,{deep:!0});let w=e=>{let t=Lx(n.picked??0,e.key,n.options.length);t!==null&&(e.preventDefault(),r(`pick`,t),u.value?.querySelectorAll(`.app-switch__dark > *`)[t]?.focus())};return(t,n)=>(s(),_(`div`,{ref_key:`root`,ref:u,class:k([`app-switch`,{"app-switch--l":e.size===`l`}]),role:e.name?`radiogroup`:void 0,"aria-label":e.name,"aria-hidden":e.name?void 0:`true`},[S(`span`,{ref_key:`pill`,ref:f,class:`app-switch__pill`,"aria-hidden":`true`},null,512),S(`div`,zx,[(s(!0),_(T,null,j(e.options,(t,a)=>(s(),D(o(e.name?`button`:`span`),{key:t.label,type:e.name?`button`:void 0,role:e.name?`radio`:void 0,"aria-checked":e.name?a===e.picked:void 0,tabindex:e.name?a===e.picked?0:-1:void 0,class:`app-switch__option`,onClick:t=>e.name&&r(`pick`,a),onKeydown:n[0]||=t=>e.name&&w(t)},{default:c(()=>[S(`span`,Bx,i(t.label),1),t.badge?(s(),_(`span`,Vx,i(t.badge),1)):g(``,!0)]),_:2},1064,[`type`,`role`,`aria-checked`,`tabindex`,`onClick`]))),128))]),S(`div`,{ref_key:`light`,ref:p,class:`app-switch__light`,"aria-hidden":`true`},[(s(!0),_(T,null,j(e.options,e=>(s(),_(`span`,{key:e.label,class:`app-switch__option`},[S(`span`,Hx,i(e.label),1),e.badge?(s(),_(`span`,Ux,i(e.badge),1)):g(``,!0)]))),128))],512)],10,Rx))}}),[[`__scopeId`,`data-v-a8df1068`]]),{__name:`AppSwitch`}),Gx=[`aria-valuenow`],Kx={class:`distortion__value`},qx=300,Jx=Object.assign(nt(A({__name:`Distortion`,setup(e){let t=[.12,.32],n={off:`آغاز`,flare:`فرایند`,prism:`داده`,bend:`بینش`},r=gv.map(e=>({label:n[e]})),o=[.2,.32],c=Wt(),u=tn(),f=a(`root`),h=a(`words`),y=a(`scrim`),b=a(`controls`),x=a(`fill`),w=m(()=>he(c.value.heights??0)),T=m(()=>G(Dt(c.value.heights??0),hv.lightens)),E=m(()=>bv(w.value));ub(h,()=>G(w.value,t)*(1-T.value));let D=m(()=>[E.value.mode,E.value.mode]),O=m(()=>`${Math.round(E.value.amount)}%`),k=new Map,A=(e,t)=>{e&&k.get(e)!==t&&(k.set(e,t),e.style.cssText=t)},j=e=>e*e*(3-2*e),M=()=>{let e=w.value;A(f.value,`visibility:${e>0&&T.value<1?`visible`:`hidden`};`),A(y.value,`opacity:${(G(e,hv.dark)*(1-T.value)).toFixed(3)};`);let t=j(G(e,o)),n=j(T.value);A(b.value,`opacity:${(t*(1-n)).toFixed(3)};transform:translateY(${((1-t)*60-n*40).toFixed(2)}%);`);let r=Math.min(1,E.value.amount/qx);A(x.value,`--full:${r.toFixed(4)};`)};return l([w,T],M),d(M),(e,t)=>{let n=Wx;return s(),_(`section`,{ref_key:`root`,ref:f,class:`distortion`,"aria-labelledby":`distortion-title`},[C(u)?(s(),_(`div`,{key:0,ref_key:`scrim`,ref:y,class:`distortion__scrim`,"aria-hidden":`true`},null,512)):g(``,!0),S(`div`,{ref_key:`words`,ref:h,class:`distortion__words`},[t[1]||=S(`h2`,{id:`distortion-title`,class:`distortion__title`,"data-reveal":`heading`},[v(` فرصت‌های`),S(`br`),v(`تحول `)],-1),S(`div`,{ref_key:`controls`,ref:b,class:`distortion__controls`},[p(n,{options:C(r),edges:C(D),size:`l`},null,8,[`options`,`edges`]),S(`div`,{class:`distortion__amount`,role:`meter`,"aria-valuenow":Math.round(C(E).amount),"aria-valuemin":`0`,"aria-valuemax":qx,"aria-label":`پیشرفت`},[S(`span`,{ref_key:`fill`,ref:x,class:`distortion__fill`,"aria-hidden":`true`},null,512),t[0]||=S(`span`,{class:`distortion__label`},`پیشرفت`,-1),S(`span`,Kx,i(C(O)),1)],8,Gx)],512)],512)],512)}}}),[[`__scopeId`,`data-v-878b77d4`]]),{__name:`Distortion`}),Yx=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon'%20clip-path='url(%23clip0_0_234)'%3e%3cpath%20id='Vector'%20d='M4.7144%2015.9555L9.4318%2013.3084L9.5108%2013.0777L9.4318%2012.9502H9.2011L8.4118%2012.9016L5.7162%2012.8287L3.3787%2012.7316L1.1141%2012.6102L0.5434%2012.4887L0.0091%2011.7845L0.0637%2011.4323L0.5434%2011.1105L1.2294%2011.1713L2.7473%2011.2745L5.024%2011.4323L6.6754%2011.5295L9.1222%2011.7845H9.5108L9.5654%2011.6266L9.4318%2011.5295L9.3286%2011.4323L6.973%209.8356L4.423%208.1477L3.0874%207.1763L2.3649%206.6845L2.0006%206.2231L1.8428%205.2153L2.4985%204.4928L3.3788%204.5535L3.6034%204.6142L4.4959%205.3002L6.4023%206.7756L8.8916%208.6092L9.2559%208.9127L9.4016%208.8095L9.4198%208.7367L9.2558%208.4634L7.9019%206.0167L6.4569%203.5274L5.8134%202.4954L5.6434%201.876C5.5827%201.621%205.5402%201.4086%205.5402%201.1475L6.287%200.1335L6.6997%200L7.6954%200.1336L8.1144%200.4978L8.7336%201.9125L9.7354%204.1407L11.2897%207.1703L11.745%208.0688L11.9879%208.9006L12.0789%209.1556H12.2368V9.0099L12.3643%207.3039L12.6011%205.2092L12.8318%202.5135L12.9107%201.7546L13.2871%200.8439L14.0339%200.3521L14.6167%200.6314L15.0964%201.3174L15.0296%201.7607L14.7443%203.6124L14.1857%206.5145L13.8214%208.4574H14.0339L14.2768%208.2145L15.2603%206.9092L16.9117%204.8449L17.6403%204.0253L18.4903%203.1207L19.0367%202.6896H20.0688L20.8278%203.8189L20.4878%204.9846L19.4253%206.3324L18.5449%207.4738L17.2821%209.1738L16.4928%2010.5338L16.5657%2010.6431L16.7539%2010.6248L19.6074%2010.0178L21.1495%209.7384L22.9891%209.4227L23.8209%209.8113L23.9119%2010.2059L23.5841%2011.0134L21.6171%2011.4991L19.3099%2011.9605L15.8735%2012.7741L15.831%2012.8045L15.8796%2012.8652L17.4278%2013.0109L18.0896%2013.0473H19.7106L22.7281%2013.272L23.5173%2013.794L23.9909%2014.4316L23.9119%2014.9173L22.6977%2015.5366L21.0584%2015.148L17.2334%2014.2373L15.9221%2013.9094H15.7399V14.0187L16.8328%2015.0873L18.8363%2016.8965L21.3438%2019.2279L21.4713%2019.8047L21.1495%2020.2601L20.8095%2020.2115L18.6056%2018.554L17.7556%2017.8072L15.831%2016.1862H15.7035V16.3562L16.1467%2017.0058L18.4903%2020.5272L18.6117%2021.6079L18.4417%2021.96L17.8346%2022.1725L17.1667%2022.0511L15.7946%2020.1265L14.38%2017.959L13.2386%2016.0162L13.0989%2016.0952L12.4249%2023.3504L12.1093%2023.7207L11.3807%2024L10.7736%2023.5386L10.4518%2022.7918L10.7736%2021.3165L11.1622%2019.3919L11.4779%2017.8619L11.7632%2015.9615L11.9332%2015.3301L11.9211%2015.2876L11.7814%2015.3058L10.3486%2017.273L8.169%2020.2176L6.4447%2022.0632L6.0319%2022.2272L5.3155%2021.8568L5.3822%2021.195L5.783%2020.6061L8.169%2017.5704L9.6079%2015.6884L10.5369%2014.6016L10.5307%2014.4437H10.4761L4.1376%2018.5601L3.0083%2018.7058L2.5226%2018.2504L2.5834%2017.5037L2.8141%2017.2608L4.7205%2015.9494L4.7144%2015.9555Z'%20fill='%23D97757'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_234'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,Xx=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon'%20clip-path='url(%23clip0_0_232)'%3e%3cpath%20id='Vector'%20d='M22.4235%209.80335C22.6955%208.99671%2022.7896%208.1422%2022.6995%207.29689C22.6093%206.45158%2022.337%205.63495%2021.9007%204.90154C20.5736%202.62698%2017.9062%201.45698%2015.3012%202.00677C14.5799%201.21679%2013.6602%200.627584%2012.6345%200.298327C11.6087%20-0.0309307%2010.513%20-0.0886476%209.45747%200.130973C8.4019%200.350593%207.4236%200.839818%206.62082%201.54951C5.81804%202.25921%205.21905%203.16439%204.884%204.17415C4.03816%204.34493%203.23908%204.6915%202.54017%205.19071C1.84126%205.68991%201.25862%206.33025%200.831187%207.06892C-0.510375%209.33988%20-0.205781%2012.2044%201.58428%2014.1526C1.31123%2014.9589%201.21619%2015.8132%201.30551%2016.6586C1.39484%2017.5039%201.66648%2018.3207%202.10225%2019.0543C3.43106%2021.3297%206.10013%2022.4996%208.70656%2021.9491C9.27962%2022.5845%209.98375%2023.0922%2010.7719%2023.4383C11.5601%2023.7844%2012.4142%2023.961%2013.2772%2023.9562C15.9473%2023.9586%2018.3129%2022.2614%2019.1286%2019.758C19.9743%2019.5869%2020.7732%2019.2402%2021.4721%2018.7411C22.1709%2018.2419%2022.7536%2017.6017%2023.1813%2016.8632C24.5066%2014.5963%2024.2008%2011.7474%2022.4235%209.80335ZM13.2772%2022.3884C12.2115%2022.3901%2011.1791%2022.0223%2010.3612%2021.3495L10.5051%2021.2692L15.3491%2018.5161C15.4697%2018.4465%2015.5698%2018.3472%2015.6396%2018.228C15.7094%2018.1087%2015.7465%2017.9737%2015.7473%2017.8361V11.1114L17.7952%2012.2778C17.8157%2012.2881%2017.8299%2012.3074%2017.8336%2012.3298V17.9022C17.8283%2020.3777%2015.7914%2022.3832%2013.2772%2022.3884ZM3.48356%2018.2706C2.94907%2017.3618%202.75716%2016.2966%202.94159%2015.2623L3.08541%2015.3474L7.93434%2018.1005C8.05432%2018.1698%208.19091%2018.2064%208.33002%2018.2064C8.46912%2018.2064%208.60571%2018.1698%208.72569%2018.1005L14.6489%2014.7382V17.0663C14.6484%2017.0784%2014.6451%2017.0901%2014.6392%2017.1008C14.6334%2017.1114%2014.6253%2017.1206%2014.6153%2017.1277L9.70894%2019.9139C7.52859%2021.1506%204.743%2020.4152%203.48356%2018.2706ZM2.20772%207.88123C2.74593%206.96666%203.59543%206.2691%204.60584%205.91203V11.5788C4.60402%2011.7157%204.63955%2011.8506%204.70873%2011.9694C4.7779%2012.0882%204.87819%2012.1865%204.99913%2012.2541L10.8936%2015.6023L8.84559%2016.7687C8.83452%2016.7745%208.82218%2016.7775%208.80964%2016.7775C8.79711%2016.7775%208.78476%2016.7745%208.77369%2016.7687L3.87684%2013.9874C1.70081%2012.7455%200.954562%2010.0049%202.20772%207.85769V7.88123ZM19.0327%2011.73L13.1189%208.34877L15.1622%207.18708C15.1733%207.18128%2015.1856%207.17825%2015.1982%207.17825C15.2107%207.17825%2015.2231%207.18128%2015.2342%207.18708L20.131%209.97329C20.8798%2010.3987%2021.4901%2011.025%2021.8909%2011.7791C22.2917%2012.5332%2022.4663%2013.384%2022.3944%2014.2322C22.3225%2015.0804%2022.007%2015.8909%2021.4848%2016.5692C20.9626%2017.2474%2020.2552%2017.7654%2019.4452%2018.0627V12.3958C19.4409%2012.2591%2019.4007%2012.1259%2019.3283%2012.0092C19.256%2011.8925%2019.1541%2011.7963%2019.0327%2011.73ZM21.071%208.71246L20.9271%208.62735L16.0878%205.85065C15.9671%205.78091%2015.8297%205.74415%2015.6897%205.74415C15.5498%205.74415%2015.4124%205.78091%2015.2917%205.85065L9.37313%209.21305V6.88495C9.37187%206.87312%209.37387%206.86117%209.37894%206.85036C9.38401%206.83956%209.39194%206.8303%209.40191%206.82357L14.2988%204.04206C15.0493%203.61636%2015.9073%203.40987%2016.7727%203.44672C17.638%203.48358%2018.4748%203.76226%2019.1851%204.25018C19.8955%204.7381%2020.4501%205.41508%2020.784%206.20195C21.118%206.98881%2021.2175%207.85304%2021.0709%208.69354V8.71246H21.071ZM8.25572%2012.8397L6.20775%2011.678C6.19751%2011.6719%206.18876%2011.6637%206.18212%2011.6539C6.17548%2011.6441%206.17111%2011.633%206.16931%2011.6214V6.06323C6.17045%205.21057%206.41809%204.37585%206.88328%203.65666C7.34846%202.93748%208.01198%202.36354%208.79624%202.00196C9.5805%201.64038%2010.4531%201.5061%2011.312%201.61482C12.1709%201.72354%2012.9807%202.07077%2013.6465%202.61591L13.5026%202.69622L8.65856%205.44929C8.53801%205.51892%208.43793%205.61822%208.36814%205.73745C8.29835%205.85667%208.26126%205.99172%208.2605%206.12932L8.25572%2012.8398V12.8397ZM9.36834%2010.4785L12.0063%208.98154L14.6489%2010.4786V13.4725L12.0158%2014.9695L9.37322%2013.4725L9.36834%2010.4785Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_232'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,Zx=`data:image/svg+xml,%3csvg%20width='21'%20height='24'%20viewBox='0%200%2021%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon'%20clip-path='url(%23clip0_0_226)'%3e%3cpath%20id='Vector'%20d='M20.5816%205.68053L10.9974%200.133497C10.6896%20-0.0446682%2010.3099%20-0.0446682%2010.0021%200.133497L0.418443%205.68053C0.159728%205.83028%200%206.10722%200%206.40717V17.5928C0%2017.8927%200.159728%2018.1697%200.418443%2018.3194L10.0026%2023.8665C10.3104%2024.0446%2010.6901%2024.0446%2010.9979%2023.8665L20.582%2018.3194C20.8407%2018.1697%2021.0004%2017.8927%2021.0004%2017.5928V6.40717C21.0004%206.10722%2020.8407%205.83028%2020.582%205.68053H20.5816ZM19.9795%206.85552L10.7274%2022.9202C10.6649%2023.0284%2010.4998%2022.9842%2010.4998%2022.8588V12.3399C10.4998%2012.1297%2010.3877%2011.9353%2010.206%2011.8297L1.119%206.57045C1.01101%206.50776%201.05511%206.34222%201.18019%206.34222H19.6844C19.9471%206.34222%2020.1114%206.62774%2019.98%206.85597H19.9795V6.85552Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_226'%3e%3crect%20width='21'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`,Qx=`./behin/sandban.svg`,$x=`data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='corner-down-left'%3e%3cpath%20id='Vector'%20d='M5.625%2012.5L2.5%209.375L5.625%206.25M2.5%209.375H10C10.663%209.375%2011.2989%209.11161%2011.7678%208.64277C12.2366%208.17393%2012.5%207.53804%2012.5%206.875V2.5'%20stroke='%23F5F5F7'%20stroke-width='1.3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e`,eS=`data:image/svg+xml,%3csvg%20width='15.8771'%20height='21.5728'%20viewBox='0%200%2015.8771%2021.5728'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Pointer'%20d='M0.625%201.33943V18.3394L5.225%2014.1394L8.225%2020.7394L11.225%2019.3394L8.325%2012.9394L14.225%2012.7394L0.625%201.33943Z'%20fill='%231D1D1F'%20stroke='white'%20stroke-width='1.25'/%3e%3c/svg%3e`,tS=`./behin/sandban.svg`,nS=`./pictures/3.webp?v=behin2`,rS=[`src`],iS={class:`agents__head`},aS=[`src`],oS={class:`agents__message`},sS={class:`agents__tool`},cS=[`src`],lS={class:`agents__call`},uS={class:`agents__detail`},dS={class:`agents__answer`},fS={class:`agents__input`},pS={key:0,class:`agents__typed`},mS={key:1,class:`agents__placeholder`},hS={class:`agents__send`},gS=[`src`],_S=[`src`],vS={class:`agents__tag`},yS=[`src`],bS=.02,xS=Object.assign(nt(A({__name:`Agents`,setup(e){let t=[.15,.24],n=[.38,.45],r=[.17,.24],o={from:.16,each:.02,takes:.05},c=xe.agents.grow,u=xe.agents.opens,f=[{name:`سندبان`,icon:`./behin/sandban.svg`},{name:`زریان`,icon:`./behin/zaryan.svg`},{name:`بهین‌تک`,icon:`./behin/behintech.svg`}],h=[{prompt:`پروژهٔ سندبان را معرفی کنید.`,thumb:nS,tool:`بهین‌تک / سندبان`,detail:`پروژهٔ هوش مصنوعی`,reply:`سندبان؛ هوش مصنوعی در خدمت سازمان.`,toast:`معرفی سندبان`,outline:[.216,.918,.54,.07],at:[.3,.955]},{prompt:`دربارهٔ زریان هم بیشتر بگویید.`,thumb:`./pictures/3.webp?v=behin2`,tool:`بهین‌تک / زریان`,detail:`از ایده تا ابزار هوشمند`,reply:`زریان؛ پروژه‌ای دیگر از مسیر هوش مصنوعی بهین‌تک.`,toast:`معرفی زریان`,outline:[.45,.918,.3062,.07],at:[.74,.96]},{prompt:`چطور با تیم شما گفت‌وگو کنیم؟`,thumb:`./pictures/7.webp?v=behin2`,tool:`بهین‌تک / نمایشگاه`,detail:`اتوکام اصفهان ۱۴۰۵`,reply:`۲۶ تا ۲۹ آبان، شهر نمایشگاهی اصفهان.`,toast:`اطلاعات نمایشگاه`,outline:[.772,.48,.0745,.099],at:[.82,.55]},{prompt:`یک جلسه برای سازمانمان می‌خواهیم.`,thumb:`./pictures/5.webp?v=behin2`,tool:`بهین‌تک / ارتباط`,detail:`info@behinrpco.com`,reply:`برای هماهنگی جلسه، به ما ایمیل بزنید.`,toast:`اطلاعات تماس`,outline:[.216,.942,.2995,.045],at:[.42,.965]}],y=Wt(),b=ct(`(width <= 768px), (width <= 1024px) and (height < 948px)`),x=a(`root`),w=a(`composition`),E=a(`words`),D=a(`talk`),O=a(`chat`),A=a(`captions`),M=a(`turns`),N=a(`toasts`),P=a(`outlines`),F=a(`hand`),I=a(`caret`),L=m(()=>Dt(y.value.heights??0)),R=m(()=>Tt(y.value.heights??0));ub(E,()=>G(L.value,t)*(1-G(L.value,n))),db(I,()=>L.value>0&&G(R.value,W.clear)<1&&G(L.value,r)>0);let ee=m(()=>{let e=L.value,t=xe.agents.turns.findLastIndex(t=>e>=t.types[0]),n=xe.agents.turns[t];if(!n||e>=n.sends[0])return``;let{prompt:r}=h[t];return r.slice(0,Math.round(G(e,n.types)*r.length))}),te={panel:{left:0,top:0,width:0,height:0},frame:{left:0,top:0,width:0,height:0},shot:{left:0,top:0,width:0,height:0},picture:{left:0,top:0,width:0,height:0}},z={width:0,height:0},ne=0;Ee(F,()=>ne=F.value?.offsetWidth??0);let B=()=>{let e=w.value;if(!e||!x.value)return;let t=e.getBoundingClientRect();z.width=t.width,z.height=x.value.clientHeight;for(let n of Object.keys(te)){let r=e.querySelector(`[data-story="agents-${n}"]`)?.getBoundingClientRect();r&&(te[n]={left:r.left-t.left,top:r.top-t.top,width:r.width,height:r.height})}ae()};Ee(x,B);let re=new Map,V=(e,t)=>{e&&re.get(e)!==t&&(re.set(e,t),e.style.cssText=t)},H=e=>`${e.toFixed(2)}px`,ie=(e,t)=>Array.from(e?.querySelectorAll(t)??[]),ae=()=>{let e=L.value,t=Le(G(e,c)),i=Le(G(e,u)),a=Le(G(R.value,W.clear)),s=e>0&&a<1;V(x.value,`visibility:${s?`visible`:`hidden`};--open:${t.toFixed(4)};--late:${i.toFixed(4)};`+(a>0&&s?`opacity:${(1-a).toFixed(4)};`:``)),V(D.value,a>0&&s?`transform:scale(${(1+.04*a).toFixed(4)});`:``);let l=Le(G(e,r));V(O.value,`opacity:${l.toFixed(3)};--come:${l.toFixed(4)};`);let d=Le(G(e,n));for(let[t,n]of ie(A.value,`.agents__caption`).entries()){let r=o.from+t*o.each,a=Le(G(e,[r,r+o.takes])),s=a*(1-(t===0?i:d));V(n,`opacity:${s.toFixed(3)};--pop:${(.6+.4*a).toFixed(4)};`)}let f=xe.agents.turns.map(t=>Le(G(e,t.sends))),p=f.reduce((e,t)=>e+t,0),m=b.value?1:2,h=Math.max(0,p-m);V(M.value,`--gone:${h.toFixed(4)};`);for(let[t,n]of ie(M.value,`.agents__turn`).entries()){let r=t-h,i=Math.min(1,Math.max(0,p-(t+1))),a=Math.min(1,Math.max(0,1+r*2))*(1-.55*i),o=Le(G(e,xe.agents.turns[t].replies));V(n,`opacity:${a.toFixed(3)};--slot:${r.toFixed(4)};--older:${i.toFixed(4)};--said:${f[t].toFixed(4)};--reply:${o.toFixed(4)};`)}U(e)},U=e=>{let t=xe.agents.turns;if(!z.width||e<u[0]){V(F.value,`visibility:hidden;`);for(let e of[...ie(N.value,`.agents__toast`),...ie(P.value,`.agents__outline`)])V(e,`opacity:0;`);return}let n=yt(z,te.panel,1,K(e),te),r=n.shot,i=n.stage,a=t.map((n,r)=>{let i=t[r+1]?.sends[0]??2;return Le(G(e,[n.changes[0],n.changes[0]+bS]))*(1-Le(G(e,[i-bS,i])))});for(let[e,t]of ie(N.value,`.agents__toast`).entries())V(t,`left:${H(i.left+i.width/2)};top:${H(i.top+i.height*.95)};opacity:${a[e].toFixed(3)};--pop:${(.8+.2*a[e]).toFixed(4)};`);for(let[e,t]of ie(P.value,`.agents__outline`).entries()){let[n,i,o,s]=h[e].outline;V(t,`left:${H(r.left+n*r.width)};top:${H(r.top+i*r.height)};width:${H(o*r.width)};height:${H(s*r.height)};opacity:${a[e].toFixed(3)};`)}let[o,s]=h[0].at;for(let[n,r]of t.entries()){let t=n?Le(G(e,r.changes)):1;o+=(h[n].at[0]-o)*t,s+=(h[n].at[1]-s)*t}let c=Le(G(e,[t[0].changes[0],t[0].changes[0]+bS])),l=r.left+o*r.width,d=Math.min(1,Math.max(0,(l+ne-z.width+8)/30));V(F.value,`left:${H(l)};top:${H(r.top+s*r.height)};opacity:${c.toFixed(3)};--flip:${d.toFixed(3)};`)};return l([L,R,b],ae),d(B),(e,t)=>{let n=Yt;return s(),_(`section`,{id:`mcp`,ref_key:`root`,ref:x,class:`agents`,"aria-labelledby":`agents-title`},[S(`div`,{ref_key:`composition`,ref:w,class:`agents__frame`,"data-tall":``},[t[8]||=S(`div`,{class:`agents__panel`,"data-story":`agents-panel`,"aria-hidden":`true`},null,-1),t[9]||=S(`div`,{class:`agents__grown`,"data-story":`agents-frame`,"aria-hidden":`true`},null,-1),t[10]||=S(`div`,{class:`agents__shot`,"data-story":`agents-shot`,"aria-hidden":`true`},null,-1),t[11]||=S(`div`,{class:`agents__picture`,"data-story":`agents-picture`,"aria-hidden":`true`},null,-1),S(`div`,{ref_key:`talk`,ref:D,class:`agents__talk`},[S(`div`,{ref_key:`words`,ref:E,class:`agents__words`},[...t[0]||=[S(`h2`,{id:`agents-title`,class:`agents__title`,"data-reveal":`heading`},[v(` هوش مصنوعی،`),S(`br`),S(`span`,{class:`agents__title-arrow`,"aria-hidden":`true`},`→ `),v(`در خدمت سازمان `)],-1),S(`p`,{class:`agents__text agents__text--first`,"data-reveal":`text`},` از ایده تا ابزار هوشمند؛ پروژه‌های هوش مصنوعی بهین‌تک. `,-1),S(`p`,{class:`agents__text agents__text--second`,"data-reveal":`text`},` سندبان و زریان را در اتوکام ۱۴۰۵ بشناسید. `,-1)]],512),S(`div`,{ref_key:`captions`,ref:A,class:`agents__captions`,"aria-hidden":`true`},[(s(),_(T,null,j(f,(e,t)=>S(`span`,{key:e.name,class:k([`agents__caption`,`agents__caption--${t}`])},[S(`img`,{class:`agents__icon`,src:e.icon,alt:``},null,8,rS),v(i(e.name),1)],2)),64))],512),S(`div`,{ref_key:`chat`,ref:O,class:`agents__chat`,"aria-hidden":`true`},[S(`div`,iS,[p(n,{size:22}),t[1]||=S(`span`,{class:`agents__label`},`بهین‌تک`,-1),t[2]||=S(`span`,{class:`agents__label agents__label--times`},`×`,-1),S(`img`,{class:`agents__agent`,src:C(Qx),alt:``},null,8,aS),t[3]||=S(`span`,{class:`agents__label`},`سندبان`,-1),t[4]||=S(`span`,{class:`agents__label agents__label--state`},`متصل`,-1)]),S(`div`,{ref_key:`turns`,ref:M,class:`agents__body`},[t[5]||=S(`div`,{class:`agents__history`},[S(`span`,{class:`agents__line`}),S(`span`,{class:`agents__line agents__line--short`})],-1),(s(),_(T,null,j(h,e=>S(`div`,{key:e.prompt,class:`agents__turn`},[S(`span`,oS,i(e.prompt),1),S(`div`,sS,[S(`img`,{class:`agents__thumb`,src:e.thumb,alt:``},null,8,cS),S(`span`,lS,i(e.tool),1),S(`span`,uS,i(e.detail),1)]),S(`span`,dS,i(e.reply),1)])),64))],512),S(`div`,fS,[C(ee)?(s(),_(`span`,pS,[S(`span`,null,i(C(ee)),1)])):g(``,!0),S(`span`,{ref_key:`caret`,ref:I,class:`agents__caret`},null,512),C(ee)?g(``,!0):(s(),_(`span`,mS,`دربارهٔ نیاز سازمانتان بگویید…`)),S(`span`,hS,[S(`img`,{class:`agents__arrow`,src:C($x),alt:``},null,8,gS)])])],512)],512),S(`div`,{ref_key:`toasts`,ref:N,"aria-hidden":`true`},[(s(),_(T,null,j(h,e=>S(`span`,{key:e.toast,class:`agents__toast`},[S(`span`,null,`بهین‌تک / `+i(e.toast),1),t[6]||=S(`span`,{class:`agents__undo`},`بازگشت`,-1)])),64))],512),S(`div`,{ref_key:`outlines`,ref:P,"aria-hidden":`true`},[(s(),_(T,null,j(h,e=>S(`span`,{key:e.toast,class:`agents__outline`})),64))],512),S(`div`,{ref_key:`hand`,ref:F,class:`agents__hand`,"aria-hidden":`true`},[S(`img`,{class:`agents__pointer`,src:C(eS),alt:``},null,8,_S),S(`span`,vS,[S(`img`,{class:`agents__mark`,src:C(tS),alt:``},null,8,yS),t[7]||=v(`سندبان`,-1)])],512)],512)],512)}}}),[[`__scopeId`,`data-v-de13d765`]]),{__name:`Agents`}),SS=Object.assign(nt(A({__name:`Devices`,setup(e){let t=Wt(),n=a(`root`),r=a(`words`),i=m(()=>Tt(t.value.heights??0)),o=m(()=>te(t.value.heights??0));return ub(r,()=>G(i.value,W.words)*(1-G(o.value,Ot.leave))),l([i,o],([e,t])=>{n.value&&(n.value.style.visibility=e>=W.warp.cut&&t<Ot.leave[1]?`visible`:`hidden`)}),(e,t)=>(s(),_(`section`,{ref_key:`root`,ref:n,class:`devices`,id:`oodin`,"aria-labelledby":`devices-title`},[t[1]||=S(`div`,{class:`devices__phone`,"data-story":`devices-phone`,"aria-hidden":`true`},null,-1),S(`div`,{ref_key:`words`,ref:r,class:`devices__words`},[...t[0]||=[y(`<h2 id="devices-title" class="devices__title" data-reveal="heading" data-v-92caa201> یک پلتفرم،<br data-v-92caa201><span aria-hidden="true" data-v-92caa201>→</span> هر فرایند </h2><div class="devices__copy" data-v-92caa201><p class="devices__text" data-reveal="text" data-v-92caa201> اودین، سامانهٔ یکپارچهٔ مدیریت سازمان بر پایهٔ Odoo است. </p><p class="devices__text" data-reveal="text" data-v-92caa201> راهکاری برای اتصال گردش‌کارها، مدیریت منابع، گزارش‌گیری دقیق و تصمیم‌گیری سریع‌تر. </p></div>`,2)]],512)],512))}}),[[`__scopeId`,`data-v-92caa201`]]),{__name:`Devices`}),CS={class:`export__frame`,"data-tall":``},wS={class:`export__formats`,"data-story":`export-room`,"aria-hidden":`true`},TS={class:`export__row`},ES={class:`export__row`},DS=Object.assign(nt(A({__name:`Export`,setup(e){let t=e=>e.map(e=>({label:e})),n=t([`3:4`,`4:5`,`9:16`,`1:1`,`4:3`,`16:9`]),r=t([`720p`,`1080p`,`2K`,`4K`]),i=t([`24`,`25`,`30`,`60`]),o=[2,3,5],c=[3,3],u=[`top`,`bottom`,`left`,`right`],f=Wt(),h=Bt(),g=a(`root`),y=a(`words`),b=a(`shapes`),x=a(`controls`),w=a(`title`),E=a(`lower`),D=m(()=>te(f.value.heights??0));ub(y,()=>G(D.value,Ot.words)*(1-G(D.value,Ot.unwords)));let O=m(()=>{let e=h.value.f,t=Y(Math.floor(e),0,1),n=o[t]+(o[t+1]-o[t])*(e-t);return[n,n]}),A=e=>e*e*(3-2*e),M=new Map,N=(e,t)=>{e&&M.get(e)!==t&&(M.set(e,t),e.style.cssText=t)},P=0;Ee(b,()=>{P=b.value?.offsetHeight??0,F()});let F=()=>{let e=D.value,{f:t,out:n}=h.value,r=Y(1-J(e),0,1),i=e<Ot.out[0]||r>.002;g.value&&(g.value.style.visibility=e>=Ot.enter[0]&&i?`visible`:`hidden`);let[a,o]=ye(t);N(b.value,`opacity:${(G(e,Ot.words)*r).toFixed(3)};transform:scale(${(1-Ot.shrink*n).toFixed(4)});--hole-width:${(a*P*Math.abs(Math.cos(ne(e)))).toFixed(2)}px;--hole-height:${(o*P).toFixed(2)}px;`);let s=Array.from(x.value?.querySelectorAll(`.export__row`)??[]);for(let[t,n]of s.entries()){let r=A(G(e,Ot.rows[t])),i=A(G(e,Ot.unrows[t]));N(n,`opacity:${(r*(1-i)).toFixed(3)};transform:translateY(${((1-r)*60-i*40).toFixed(2)}%);`)}};return Ee([w,E],()=>{let e=y.value;if(!g.value||!e||!w.value||!E.value)return;let t=e.offsetTop;g.value.style.setProperty(`--title-end`,`${t+w.value.offsetTop+w.value.offsetHeight}px`),g.value.style.setProperty(`--lower-start`,`${t+E.value.offsetTop}px`),g.value.style.setProperty(`--lower-end`,`${t+E.value.offsetTop+E.value.offsetHeight}px`)}),l([D,h],F,{deep:!0}),d(F),Ee(g,F),(e,t)=>{let a=Wx;return s(),_(`section`,{id:`export`,ref_key:`root`,ref:g,class:`export`,"aria-labelledby":`export-title`},[S(`div`,CS,[S(`div`,wS,[S(`div`,{ref_key:`shapes`,ref:b,class:`export__shapes`},[(s(),_(T,null,j(u,e=>S(`div`,{key:e,class:k([`export__band`,`export__band--${e}`])},[...t[0]||=[S(`span`,{class:`export__shape export__shape--square`},null,-1),S(`span`,{class:`export__shape export__shape--wide`},null,-1)]],2)),64))],512)]),S(`div`,{ref_key:`words`,ref:y,class:`export__words`},[S(`h2`,{id:`export-title`,ref_key:`title`,ref:w,class:`export__title`,"data-reveal":`heading`},[...t[1]||=[v(` اطلاعات یکپارچه،`,-1),S(`br`,null,null,-1),S(`span`,{"aria-hidden":`true`},`→`,-1),v(` تصمیم‌های روشن `,-1)]],512),S(`div`,{ref_key:`lower`,ref:E,class:`export__lower`},[S(`div`,{ref_key:`controls`,ref:x,class:`export__controls`,"aria-hidden":`true`},[S(`div`,TS,[p(a,{options:C(n),edges:C(O)},null,8,[`options`,`edges`])]),S(`div`,ES,[p(a,{options:C(r),edges:c},null,8,[`options`]),p(a,{options:C(i),edges:c},null,8,[`options`]),t[2]||=S(`span`,{class:`export__kinds`},`OODIN · POWERED BY ODOO`,-1)])],512),t[3]||=S(`div`,{class:`export__copy`},[S(`p`,{class:`export__text`,"data-reveal":`text`},` گردش‌کارهای متصل، مدیریت منابع، گزارش‌های روشن و تصمیم‌گیری سریع‌تر؛ در یک پلتفرم سازمانی. `),S(`p`,{class:`export__text`,"data-reveal":`text`},` بهین راهبرد پارسی همراه سازمان‌ها در مسیر نوآوری و تحول دیجیتال. `)],-1)],512)],512)])],512)}}}),[[`__scopeId`,`data-v-a78e4a07`]]),{__name:`Export`}),OS={class:`price-roll`},kS={class:`sr-only`},AS={class:`price-roll__prefix`,"aria-hidden":`true`},jS=Object.assign(nt(A({__name:`PriceRoll`,props:{value:{},prefix:{default:`۰`}},setup(e){let t=e,n={duration:1.1,ease:rn(.5)},r=Ve(),a=E(t.value),o=E([t.value,t.value]),c=null;l(()=>t.value,e=>{if(c?.kill(),o.value=[Math.min(a.value,e),Math.max(a.value,e)],r.value===`reduce`)return void(a.value=e);let t={v:a.value};c=at.to(t,{v:e,...n,onUpdate:()=>a.value=t.v})}),x(()=>c?.kill());let u=e=>String(Math.round(Math.abs(e))).length,d=m(()=>{let e=Math.max(0,a.value),n=Math.min(o.value[1],Math.max(o.value[0],e)),r=Math.max(u(n),u(t.value));return Array.from({length:r},(t,i)=>{let a=r-1-i,o=a===0?e:n,s=o/10**a,c=a===0?s%1:Math.max(0,o/10**(a-1)%10-9);return{at:Math.floor(s)%10+c,seen:a===0||o>=10**a-1}})});return(t,n)=>(s(),_(`span`,OS,[S(`span`,kS,i(e.prefix)+i(e.value.toLocaleString("fa-IR")),1),S(`span`,AS,i(e.prefix),1),(s(!0),_(T,null,j(C(d),(e,t)=>(s(),_(`span`,{key:t,class:k([`price-roll__figure`,{"is-gone":!e.seen}]),"aria-hidden":`true`},[S(`span`,{class:`price-roll__strip`,style:f({transform:`translateY(${(-e.at).toFixed(4)}em)`})},[(s(),_(T,null,j(11,e=>S(`span`,{key:e,class:`price-roll__digit`},i(`۰۱۲۳۴۵۶۷۸۹`[(e-1)%10]),1)),64))],4)],2))),128))]))}}),[[`__scopeId`,`data-v-204c423f`]]),{__name:`PriceRoll`}),MS={class:`sr-only`},NS=[`data-row`],PS={key:0,class:`text-roll__char`},FS=Object.assign(nt(A({__name:`TextRoll`,props:{text:{}},setup(e){let t=e,n={stagger:.025,come:{duration:.7,ease:`back.out(1.7)`},go:{duration:.45,ease:`power3.out`},away:135,stretch:1.3,font:1.5},r=Ve(),o=a(`box`),c=0,f=E([{id:c++,text:t.text,state:`rest`,from:`below`}]),p=e=>Array.from(new Intl.Segmenter("fa",{granularity:"word"}).segment(e),e=>e.segment),m=e=>Array.from(o.value?.querySelectorAll(`[data-row="${e}"] .text-roll__char`)??[]),h=e=>{let t=o.value?.querySelector(`[data-row="${e.id}"]`);if(!t)return;let n=document.createElement(`span`);n.textContent=e.text,n.style.cssText=`position:absolute;visibility:hidden;white-space:pre`,t.append(n),Ht(m(e.id),Ut(n)),n.remove()},g=(e,t,r,i)=>at.to(t,{...r,...e.state===`coming`?n.come:n.go,stagger:i,overwrite:!0,onComplete:()=>{e.state===`coming`?e.state=`rest`:f.value=f.value.filter(t=>t!==e)}});return l(()=>t.text,async e=>{if(r.value===`reduce`)return f.value=[{id:c++,text:e,state:`rest`,from:`below`}],await u(),h(f.value[0]);let t=f.value.find(t=>t.text===e);for(let e of f.value){if(e===t||e.state!==`rest`&&e.state!==`coming`)continue;let r=e.state===`rest`;e.state=r||e.from===`above`?`up`:`down`;let i=e.state===`up`,a=m(e.id);at.set(a,{transformOrigin:i?`50% 100%`:`50% 0%`}),g(e,a,{yPercent:i?-n.away:n.away,scaleY:n.stretch},r?n.stagger:0)}if(t){t.from=t.state===`up`?`above`:`below`,t.state=`coming`,g(t,m(t.id),{yPercent:0,scaleY:1},0);return}f.value=[...f.value,{id:c++,text:e,state:`coming`,from:`below`}],t=f.value.at(-1),await u(),h(t);let i=m(t.id);at.set(i,{yPercent:n.away,scaleY:n.stretch,transformOrigin:`50% 0%`}),g(t,i,{yPercent:0,scaleY:1},n.stagger)}),d(async()=>{await Promise.race([document.fonts.ready,new Promise(e=>setTimeout(e,n.font*1e3))]);for(let e of f.value)h(e)}),x(()=>at.killTweensOf(o.value?.querySelectorAll(`.text-roll__char`)??[])),(t,n)=>(s(),_(`span`,{ref_key:`box`,ref:o,class:`text-roll`},[S(`span`,MS,i(e.text),1),(s(!0),_(T,null,j(C(f),e=>(s(),_(`span`,{key:e.id,class:`text-roll__line`,"data-row":e.id,"aria-hidden":`true`},[(s(!0),_(T,null,j(p(e.text),(e,t)=>(s(),_(T,{key:t},[e.trim()?(s(),_(`span`,PS,i(e),1)):(s(),_(T,{key:1},[v(i(e),1)],64))],64))),128))],8,NS))),128))],512))}}),[[`__scopeId`,`data-v-c2ca0c33`]]),{__name:`TextRoll`}),IS={class:`pricing__header`},LS={class:`pricing__plans`},RS={class:`pricing__body`},zS={class:`pricing__top`},BS={class:`pricing__name`},VS={class:`pricing__claim`},HS={class:`pricing__price`},US={class:`pricing__amount`},WS={key:0,class:`pricing__per`},GS={class:`pricing__features`},KS={class:`pricing__fine`},qS=Object.assign(nt(A({__name:`محصولات`,setup(e){let n=[{label:`محصولات`},{label:`راهکارها`,badge:``}],r={lead:{duration:.34,ease:`power3.inOut`},trail:{duration:.4,ease:`power3.inOut`,delay:.1}},{appUrl:o}=t().public,l=a(`root`),u=Ve(),d=E(0),f=e=>`mailto:info@behinrpco.com?subject=${encodeURIComponent("گفت‌وگو دربارهٔ "+e.name)}`,m=E([0,0]),h={left:0,right:0},y=[],b=()=>m.value=[h.left,h.right],{track:w}=qt(),D=e=>{if(e===d.value)return;let t=e>d.value;d.value=e,w(`switch_billing`,{billing:e?`year`:`month`});for(let e of y)e.kill();if(u.value===`reduce`)return[h.left,h.right]=[e,e],b();let[n,i]=t?[`right`,`left`]:[`left`,`right`];y=[at.to(h,{[n]:e,...r.lead,onUpdate:b}),at.to(h,{[i]:e,...r.trail,onUpdate:b})]};return x(()=>{for(let e of y)e.kill()}),(e,t)=>{let r=Wx,a=jS,o=FS,u=Zt,h=ee;return s(),_(`section`,{id:`pricing`,ref_key:`root`,ref:l,class:`pricing`,"aria-labelledby":`pricing-title`},[S(`div`,IS,[t[0]||=S(`div`,{class:`pricing__heading`},[S(`h2`,{id:`pricing-title`,class:`pricing__title`},` راهکارهایی برای آیندهٔ سازمان شما `),S(`p`,{class:`pricing__lead`},` انسان + داده + هوش مصنوعی؛ از مسئله تا راهکار. `)],-1),p(r,{options:n,edges:C(m),name:`نمایش محصولات و راهکارها`,picked:C(d),onPick:D},null,8,[`edges`,`picked`])]),S(`ul`,LS,[(s(!0),_(T,null,j(C(sn),e=>(s(),_(`li`,{key:e.name,class:k([`pricing__plan`,{"is-pro":e.pro}])},[S(`div`,RS,[S(`div`,zS,[S(`span`,BS,i(e.name),1),S(`h3`,VS,i(e.title),1)]),S(`div`,HS,[S(`div`,US,[p(a,{class:`pricing__figure`,value:e.price[C(d)]},null,8,[`value`]),e.pro?(s(),_(`span`,WS,``)):g(``,!0)]),p(o,{class:`pricing__note`,text:e.note[C(d)]},null,8,[`text`])]),S(`ul`,GS,[(s(!0),_(T,null,j(e.features,e=>(s(),_(`li`,{key:e,class:`pricing__feature`},i(e),1))),128))])]),p(u,{class:`pricing__action`,kind:e.pro?`primary`:`secondary`,size:`l`,to:f(e)},{default:c(()=>[v(i(e.action),1)]),_:2},1032,[`kind`,`to`])],2))),128))]),S(`p`,KS,[t[2]||=v(` برای شناخت بیشتر راهکارها، در نمایشگاه اتوکام با ما همراه شوید.  `,-1),p(h,{to:`/legal/refunds`,class:`pricing__refund`},{default:c(()=>[...t[1]||=[v(`۲۶ تا ۲۹ آبان ۱۴۰۵، شهر نمایشگاهی اصفهان`,-1)]]),_:1}),t[3]||=v(`. `,-1)])],512)}}}),[[`__scopeId`,`data-v-20457a35`]]),{__name:`محصولات`}),JS={id:`contact`,class:`start`,"data-story":`start`,"aria-labelledby":`start-title`},YS={class:`start__content`},XS={class:`start__words`},ZS={id:`start-title`,class:`start__title`},QS={class:`start__bracket`},$S={class:`start__marquee`},eC={class:`start__actions`},tC=`سازمانتان`,nC=Object.assign(nt(A({__name:`Start`,setup(e){let{appUrl:n}=t().public,r=a(`track`);return db(r),(e,t)=>{let a=Zt;return s(),_(`section`,JS,[S(`div`,YS,[S(`div`,XS,[S(`h2`,ZS,[S(`span`,null,[t[2]||=v(` برای گفت‌وگو دربارهٔ `,-1),S(`span`,QS,[t[0]||=S(`span`,null,[v(`آیندهٔ `),S(`span`,{"aria-hidden":`true`},`(`)],-1),S(`span`,$S,[S(`span`,{class:`start__marquee-size`,"data-word":tC,"aria-hidden":`true`}),S(`span`,{ref_key:`track`,ref:r,class:`start__marquee-track`},[S(`span`,{class:`start__marquee-word`},i(tC)),S(`span`,{class:`start__marquee-word start__marquee-copy`,"data-word":tC,"aria-hidden":`true`})],512)]),t[1]||=S(`span`,{"aria-hidden":`true`},`)`,-1)])])]),t[3]||=S(`p`,{class:`start__text`},`درخواست جلسه بگذارید تا در نمایشگاه با هم دربارهٔ نیازها و فرصت‌های سازمان شما صحبت کنیم.`,-1)]),S(`div`,eC,[p(a,{size:`l`,to:C(n)},{default:c(()=>[...t[4]||=[v(`درخواست جلسه`,-1)]]),_:1},8,[`to`]),p(a,{kind:`secondary`,size:`l`,to:`/#how-it-works`},{default:c(()=>[...t[5]||=[v(`دیدن راهکارها`,-1)]]),_:1},8,[`to`])])])])}}}),[[`__scopeId`,`data-v-edc3f623`]]),{__name:`Start`}),rC=Kt(ab),iC=Kt(Kb),aC={class:`home`},oC=18,sC=nt(A({__name:`index`,setup(e){ln({...on,path:`/`,schema:cn()});let t=a(`stage`),n=a(`story`),i=a(`room`),o=a(`mark`),c=Vt(),l=Wt(),u=Ve(),m=null,h=null,[g,v,y,b,w,T,E,D,k,A,j]=[tx,gx,vx,Ix,Jx,xS,SS,DS,qS,nC,Xt].map(e=>O({loader:async()=>e,hydrate:r()})),M=ut+et(se.map(e=>({...e,px:0})),1),N=e=>{let{knee:t,most:n}=Qe,r=Math.abs(e);return r<=t?e:Math.sign(e)*(t+(n-t)*Math.tanh((r-t)/(n-t)))},P={raw:0,shown:0,pace:0,ready:!1},F=-1,{reach:I}=qt(),L=e=>{let n=pe(e),r=t.value;if(n!==F&&r){F=n,n&&I(H[n].name===`agents`?`mcp`:H[n].name),r.classList.add(`is-told`);for(let[e,t]of r.querySelectorAll(`:scope > section`).entries())t.classList.toggle(`is-on`,e===n)}},R=e=>{L(e);let t=Et(e);c.value=t.progress;let n=Math.min(t.pick,7),r=je(n,l.value.on);l.value={over:t.over,pick:n,on:r,slide:t.slide,heights:e}},ee=[],te=[],z=e=>{let{heights:t,pans:n}=He(e,lt.tall,lt.unit);for(let[e,t]of ee.entries()){if(!t)continue;let r=Math.round(n[e]*10)/10;te[e]!==r&&(te[e]=r,t.style.transform=r?`translateY(${-r}px)`:``)}R(t)},ne=e=>{P.raw=e,!(P.ready&&u.value!==`reduce`)&&(P.ready=!0,[P.shown,P.pace]=[e,0],z(e))},B=(e,t)=>{if(P.shown===P.raw&&P.pace===0)return;let n=nn({x:P.shown,v:P.pace},P.raw,Math.min(.1,t/1e3),oC);[P.shown,P.pace]=an(n,P.raw)?[P.raw,0]:[n.x,n.v],z(P.raw-N(P.raw-P.shown))};return d(async()=>{let e=t.value;if(!e)return;let[r,a]=De.mask,[s,c]=St.library.map(e=>De.scroll+Ae.stays+e*Ae.over),l=()=>{let t=window.innerHeight,r=lt.unit=le(t),a=[...[...e.querySelectorAll(`:scope > section`)].flatMap((e,t)=>{let n=e.querySelector(`[data-tall]`),r=n?Math.round(n.offsetHeight-e.clientHeight):0,i=H[t];if(!n||r<=0||!i)return[];let a=`back`in i?i.back:void 0;return[{from:i.at,to:`till`in i?i.till:i.at,px:r,back:a,screen:n}]}),...se.map(e=>({...e,px:0,screen:null}))].sort((e,t)=>e.from-t.from);for(let e of ee)e&&(e.style.transform=``);ee=a.map(e=>e.screen),te.length=0,lt.tall=a.map(({from:e,to:t,px:n,...r})=>({from:e,to:t,px:n,by:`by`in r?r.by:1,back:`back`in r?r.back:void 0})),i.value&&(i.value.style.height=`${(ut+et(lt.tall,r))*r}px`),e.style.height=`${t}px`,o.value&&(o.value.style.top=`${De.scroll*r}px`);let s=n.value?.querySelector(`#contact`),c=n.value?.getBoundingClientRect();lt.end=s&&c?{from:c.top+window.scrollY,top:s.getBoundingClientRect().top-c.top,height:s.getBoundingClientRect().height,release:c.height-t}:null};l(),Oe.addEventListener(`refreshInit`,l),h=()=>Oe.removeEventListener(`refreshInit`,l),await Gt(),t.value&&(m=at.context(()=>{Oe.create({trigger:n.value,start:`top top`,end:`max`,onUpdate:e=>ne(Math.max(0,e.scroll())/lt.unit),onRefresh:e=>ne(Math.max(0,e.scroll())/lt.unit)}),at.timeline({scrollTrigger:{trigger:n.value,start:`top top`,end:()=>`+=${ut*lt.unit}`,scrub:!0}}).fromTo(`.library__wall`,{opacity:0},{opacity:1,duration:(a-r)*De.scroll,ease:`power2.inOut`},r*De.scroll).to(`.library__wall`,{opacity:0,duration:c-s,ease:`power2.inOut`},s).set({},{},ut)},e),at.ticker.add(B))}),x(()=>{h?.(),at.ticker.remove(B),m?.revert()}),(e,r)=>{let a=rC,c=Eb,l=iC;return s(),_(`main`,aC,[S(`div`,{ref_key:`story`,ref:n,class:`story`,style:f({"--pinned":M*C(Fe),"--library":C(De).scroll*C(Fe)})},[S(`span`,{id:`library`,ref_key:`mark`,ref:o,class:`story__mark`},null,512),S(`div`,{ref_key:`stage`,ref:t,class:`story__stage`},[p(a),p(c),p(C(g)),p(C(v)),p(C(y)),p(C(b)),p(C(w)),p(C(T)),p(C(E)),p(C(D))],512),S(`div`,{ref_key:`room`,ref:i,class:`story__room`},null,512),p(C(k)),p(C(A))],4),p(C(j),{hint:``})])}}}),[[`__scopeId`,`data-v-444af203`]]);export{sC as default};