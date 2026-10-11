import{a as e,c as t,f as n,i as r,l as i,m as a,o,p as s}from"./index-BwT1d6DD.js";var c=1e3,l=1001,u=1002,d=1003,f=1004,p=1005,m=1006,h=1007,g=1008,_=1009,v=1010,y=1011,b=1012,x=1013,S=1014,C=1015,w=1016,T=1017,E=1018,D=1020,O=35902,k=35899,A=1021,j=1022,M=1023,N=1026,P=1027,F=1028,I=1029,L=1030,ee=1031,te=1033,ne=33776,re=33777,ie=33778,R=33779,z=35840,B=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,de=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,V=36492,Oe=36494,ke=36495,Ae=36283,H=36284,je=36285,U=36286,W=2300,Me=2301,Ne=2302,Pe=2303,Fe=2400,Ie=2401,Le=2402,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function K(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,G(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function q(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var J=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=q(this.x,e.x,t.x),this.y=q(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=q(this.x,e,t),this.y=q(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(q(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(q(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=q(this.x,e.x,t.x),this.y=q(this.y,e.y,t.y),this.z=q(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=q(this.x,e,t),this.y=q(this.y,e,t),this.z=q(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ft.copy(this).projectOnVector(e),this.sub(ft)}reflect(e){return this.sub(ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(q(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ft=new Y,pt=new dt,X=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(mt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(mt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mt=new X,ht=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gt=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _t(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:ht,fromXYZ:gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:ht,fromXYZ:gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var vt=_t();function yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var xt,St=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xt===void 0&&(xt=Je(`canvas`)),xt.width=e.width,xt.height=e.height;let t=xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(yt(t[e]/255)*255):t[e]=yt(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ct=0,wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ct++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Tt(r[t].image)):e.push(Tt(r[t]))}else e=Tt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Tt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?St.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var Et=0,Dt=new Y,Ot=class e extends nt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=l,i=l,a=m,o=g,s=M,c=_,u=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=ot(),this.name=``,this.source=new wt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dt).x}get height(){return this.source.getSize(Dt).y}get depth(){return this.source.getSize(Dt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case c:e.x-=Math.floor(e.x);break;case l:e.x=e.x<0?0:1;break;case u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case c:e.y-=Math.floor(e.y);break;case l:e.y=e.y<0?0:1;break;case u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=300,Ot.DEFAULT_ANISOTROPY=1;var kt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=q(this.x,e.x,t.x),this.y=q(this.y,e.y,t.y),this.z=q(this.z,e.z,t.z),this.w=q(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=q(this.x,e,t),this.y=q(this.y,e,t),this.z=q(this.z,e,t),this.w=q(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},At=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:m,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let r=new Ot({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:m,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},jt=class extends At{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mt=class extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=d,this.minFilter=d,this.wrapR=l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Nt=class extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=d,this.minFilter=d,this.wrapR=l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Z=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pt.setFromMatrixColumn(e,0).length(),i=1/Pt.setFromMatrixColumn(e,1).length(),a=1/Pt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(It,e,Lt)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rt.crossVectors(n,Bt),Rt.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rt.crossVectors(n,Bt)),Rt.normalize(),zt.crossVectors(Bt,Rt),r[0]=Rt.x,r[4]=zt.x,r[8]=Bt.x,r[1]=Rt.y,r[5]=zt.y,r[9]=Bt.y,r[2]=Rt.z,r[6]=zt.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pt.set(r[0],r[1],r[2]).length(),o=Pt.set(r[4],r[5],r[6]).length(),s=Pt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ft.copy(this);let c=1/a,l=1/o,u=1/s;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pt=new Y,Ft=new Z,It=new Y(0,0,0),Lt=new Y(1,1,1),Rt=new Y,zt=new Y,Bt=new Y,Vt=new Z,Ht=new dt,Ut=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(q(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-q(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(q(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-q(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(q(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-q(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ht.setFromEuler(this),this.setFromQuaternion(Ht,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ut.DEFAULT_ORDER=`XYZ`;var Wt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gt=0,Kt=new Y,qt=new dt,Jt=new Z,Yt=new Y,Xt=new Y,Zt=new Y,Qt=new dt,$t=new Y(1,0,0),en=new Y(0,1,0),tn=new Y(0,0,1),nn={type:`added`},rn={type:`removed`},an={type:`childadded`,child:null},on={type:`childremoved`,child:null},sn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new Ut,r=new dt,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Z},normalMatrix:{value:new X}}),this.matrix=new Z,this.matrixWorld=new Z,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.multiply(qt),this}rotateOnWorldAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.premultiply(qt),this}rotateX(e){return this.rotateOnAxis($t,e)}rotateY(e){return this.rotateOnAxis(en,e)}rotateZ(e){return this.rotateOnAxis(tn,e)}translateOnAxis(e,t){return Kt.copy(e).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($t,e)}translateY(e){return this.translateOnAxis(en,e)}translateZ(e){return this.translateOnAxis(tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yt.copy(e):Yt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Xt,Yt,this.up):Jt.lookAt(Yt,Xt,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),qt.setFromRotationMatrix(Jt),this.quaternion.premultiply(qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(K(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null):K(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,e,Zt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,Qt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};sn.DEFAULT_UP=new Y(0,1,0),sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ln={type:`move`},un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},pn={h:0,s:0,l:0};function mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var hn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=st(e,1),t=q(t,0,1),n=q(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mn(i,r,e+1/3),this.g=mn(i,r,e),this.b=mn(i,r,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=dn[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}copyLinearToSRGB(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return vt.workingToColorSpace(gn.copy(this),e),Math.round(q(gn.r*255,0,255))*65536+Math.round(q(gn.g*255,0,255))*256+Math.round(q(gn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(gn.copy(this),t);let n=gn.r,r=gn.g,i=gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ze){vt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,r=gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(pn);let n=ct(fn.h,pn.h,t),r=ct(fn.s,pn.s,t),i=ct(fn.l,pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new hn;hn.NAMES=dn;var _n=class extends sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new Y,yn=new Y,bn=new Y,xn=new Y,Sn=new Y,Cn=new Y,wn=new Y,Tn=new Y,En=new Y,Dn=new Y,On=new kt,kn=new kt,An=new kt,jn=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){vn.subVectors(r,t),yn.subVectors(n,t),bn.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(yn),s=vn.dot(bn),c=yn.dot(yn),l=yn.dot(bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,xn.x),s.addScaledVector(a,xn.y),s.addScaledVector(o,xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return On.setScalar(0),kn.setScalar(0),An.setScalar(0),On.fromBufferAttribute(e,t),kn.fromBufferAttribute(e,n),An.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(On,i.x),a.addScaledVector(kn,i.y),a.addScaledVector(An,i.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),yn.subVectors(e,t),vn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),vn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Sn.subVectors(r,n),Cn.subVectors(i,n),Tn.subVectors(e,n);let s=Sn.dot(Tn),c=Cn.dot(Tn);if(s<=0&&c<=0)return t.copy(n);En.subVectors(e,r);let l=Sn.dot(En),u=Cn.dot(En);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Sn,a);Dn.subVectors(e,i);let f=Sn.dot(Dn),p=Cn.dot(Dn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Cn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Sn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Pn):Pn.fromBufferAttribute(r,t),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fn.copy(e.boundingBox)),Fn.applyMatrix4(e.matrixWorld),this.union(Fn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hn),Un.subVectors(this.max,Hn),In.subVectors(e.a,Hn),Ln.subVectors(e.b,Hn),Rn.subVectors(e.c,Hn),zn.subVectors(Ln,In),Bn.subVectors(Rn,Ln),Vn.subVectors(In,Rn);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0];return!Kn(t,In,Ln,Rn,Un)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,In,Ln,Rn,Un))?!1:(Wn.crossVectors(zn,Bn),t=[Wn.x,Wn.y,Wn.z],Kn(t,In,Ln,Rn,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Pn=new Y,Fn=new Mn,In=new Y,Ln=new Y,Rn=new Y,zn=new Y,Bn=new Y,Vn=new Y,Hn=new Y,Un=new Y,Wn=new Y,Gn=new Y;function Kn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Gn.fromArray(e,a);let o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),s=t.dot(Gn),c=n.dot(Gn),l=r.dot(Gn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var qn=new Y,Jn=new J,Yn=0,Xn=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=C,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix3(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Zn=class extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qn=class extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},$n=class extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},er=new Mn,tr=new Y,nr=new Y,rr=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(tr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(nr)),this.expandByPoint(tr.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ir=0,ar=new Z,or=new sn,sr=new Y,cr=new Mn,lr=new Mn,ur=new Y,dr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?Qn:Zn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ar.makeRotationFromQuaternion(e),this.applyMatrix4(ar),this}rotateX(e){return ar.makeRotationX(e),this.applyMatrix4(ar),this}rotateY(e){return ar.makeRotationY(e),this.applyMatrix4(ar),this}rotateZ(e){return ar.makeRotationZ(e),this.applyMatrix4(ar),this}translate(e,t,n){return ar.makeTranslation(e,t,n),this.applyMatrix4(ar),this}scale(e,t,n){return ar.makeScale(e,t,n),this.applyMatrix4(ar),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new $n(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(this.boundingBox.min,cr.min),this.boundingBox.expandByPoint(ur),ur.addVectors(this.boundingBox.max,cr.max),this.boundingBox.expandByPoint(ur)):(this.boundingBox.expandByPoint(cr.min),this.boundingBox.expandByPoint(cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&K(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(cr.min,lr.min),cr.expandByPoint(ur),ur.addVectors(cr.max,lr.max),cr.expandByPoint(ur)):(cr.expandByPoint(lr.min),cr.expandByPoint(lr.max))}cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ur.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ur));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ur.fromBufferAttribute(a,t),o&&(sr.fromBufferAttribute(e,t),ur.add(sr)),r=Math.max(r,n.distanceToSquared(ur))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&K(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){K(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new J,f=new J,p=new J,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ur.fromBufferAttribute(e,t),ur.normalize(),e.setXYZ(t,ur.x,ur.y,ur.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Xn(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},fr=new Y,pr=new Y,mr=new X,hr=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fr.subVectors(n,t).cross(pr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mr.getNormalMatrix(e),r=this.coplanarPoint(fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gr=0,_r=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new hn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new hn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new J().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vr=new Y,yr=new Y,br=new Y,xr=new Y,Sr=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yr.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(yr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=xr.dot(this.direction),s=-xr.dot(br),c=xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yr).addScaledVector(br,d),f}intersectSphere(e,t){if(e.radius<0)return null;vr.subVectors(e.center,this.origin);let n=vr.dot(this.direction),r=vr.dot(vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,ee=E-F*D,te=O-P*A,ne=k-F*A,re=j-P*N,ie=M-F*N,R=re*ne-ie*te,z=L*ie-ee*re,B=te*ee-ne*L;if(r){if(R<0||z<0||B<0)return null}else if((R<0||z<0||B<0)&&(R>0||z>0||B>0))return null;let ae=R+z+B;if(ae===0)return null;let oe=I*(R*D+z*A+B*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cr=class extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new hn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wr=new Z,Tr=new Sr,Er=new rr,Dr=new Y,Or=new Y,kr=new Y,Ar=new Y,jr=new Y,Mr=new Y,Nr=new Y,Pr=new Y,Fr=class extends sn{constructor(e=new dr,t=new Cr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Mr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(jr.fromBufferAttribute(s,e),a?Mr.addScaledVector(jr,r):Mr.addScaledVector(jr.sub(t),r))}t.add(Mr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Tr.copy(e.ray).recast(e.near),!(Er.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Er,Dr)===null||Tr.origin.distanceToSquared(Dr)>(e.far-e.near)**2))&&(wr.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(wr),(n.boundingBox===null||Tr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Lr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Lr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Lr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Lr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ir(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Pr.copy(s),Pr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Pr);return l<n.near||l>n.far?null:{distance:l,point:Pr.clone(),object:e}}function Lr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Or),e.getVertexPosition(c,kr),e.getVertexPosition(l,Ar);let u=Ir(e,t,n,r,Or,kr,Ar,Nr);if(u){let e=new Y;jn.getBarycoord(Nr,Or,kr,Ar,e),i&&(u.uv=jn.getInterpolatedAttribute(i,s,c,l,e,new J)),a&&(u.uv1=jn.getInterpolatedAttribute(a,s,c,l,e,new J)),o&&(u.normal=jn.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};jn.getNormal(Or,kr,Ar,t.normal),u.face=t,u.barycoord=e}return u}var Rr=class extends Ot{constructor(e=null,t=1,n=1,r,i,a,o,s,c=d,l=d,u,f){super(null,a,o,s,c,l,r,i,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zr=new rr,Br=new J(.5,.5),Vr=new Y,Hr=class{constructor(e=new hr,t=new hr,n=new hr,r=new hr,i=new hr,a=new hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476+Br.distanceTo(e.center),zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ur=new Z,Wr=class e{constructor(){this.coordinateSystem=Ge,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ur.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Hr),n[e].setFromProjectionMatrix(Ur,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Hr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}};function Gr(e,t){return e-t}function Kr(e,t){return e.z-t.z}function qr(e,t){return t.z-e.z}var Jr=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let i=this.pool,a=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});let o=i[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Yr=new Z,Xr=new hn(1,1,1),Zr=new Hr,Qr=new Wr,$r=new Mn,ei=new rr,ti=new Y,ni=new Y,ri=new Y,ii=new Jr,ai=new Fr,oi=[];function si(e,t,n=0){let r=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){let i=e.count;for(let a=0;a<i;a++)for(let i=0;i<r;i++)t.setComponent(a+n,i,e.getComponent(a,i))}else t.array.set(e.array,n*r);t.needsUpdate=!0}function ci(e,t){if(e.constructor!==t.constructor){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)t[r]=e[r]}else{let n=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,n))}}var li=class extends Fr{constructor(e,t,n=t*2,r){super(new dr,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Rr(new Float32Array(e*e*4),e,e,M,C);this._matricesTexture=t}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Rr(new Uint32Array(e*e),e,e,I,S);this._indirectTexture=t}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Rr(new Float32Array(e*e*4).fill(1),e,e,M,C);t.colorSpace=vt.workingColorSpace,this._colorsTexture=t}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let{array:i,itemSize:a,normalized:o}=e.getAttribute(r),s=new Xn(new i.constructor(n*a),a,o);t.setAttribute(r,s)}if(e.getIndex()!==null){let e=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Xn(e,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw Error(`THREE.BatchedMesh: All geometries must consistently have "index".`);for(let n in t.attributes){if(!e.hasAttribute(n))throw Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=e.getAttribute(n),i=t.getAttribute(n);if(r.itemSize!==i.itemSize||r.normalized!==i.normalized)throw Error(`THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.`)}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Yr),this.getBoundingBoxAt(r,$r).applyMatrix4(Yr),e.union($r)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Yr),this.getBoundingSphereAt(r,ei).applyMatrix4(Yr),e.union(ei)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error(`THREE.BatchedMesh: Maximum item count reached.`);let t={visible:!0,active:!0,geometryIndex:e},n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Gr),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=t):(n=this._instanceInfo.length,this._instanceInfo.push(t));let r=this._matricesTexture;Yr.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;let i=this._colorsTexture;return i&&(Xr.toArray(i.image.data,n*4),i.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},i=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute(`position`).count:t;let a=e.getIndex();if(a!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?a.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw Error(`THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.`);let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Gr),o=this._availableGeometryIds.shift(),i[o]=r):(o=this._geometryCount,this._geometryCount++,i.push(r)),this.setGeometryAt(o,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw Error(`THREE.BatchedMesh: Maximum geometry count reached.`);this._validateGeometry(t);let n=this.geometry,r=n.getIndex()!==null,i=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(r&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw Error(`THREE.BatchedMesh: Reserved space not large enough for provided geometry.`);let s=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute(`position`).count;for(let e in n.attributes){let r=t.getAttribute(e),i=n.getAttribute(e);si(r,i,s);let a=r.itemSize;for(let e=r.count,t=c;e<t;e++){let t=s+e;for(let e=0;e<a;e++)i.setComponent(t,e,0)}i.needsUpdate=!0,i.addUpdateRange(s*a,c*a)}if(r){let e=o.indexStart,n=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let t=0;t<a.count;t++)i.setX(e+t,s+a.getX(t));for(let t=a.count,r=n;t<r;t++)i.setX(e+t,s);i.needsUpdate=!0,i.addUpdateRange(e,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let t=0,r=n.length;t<r;t++)n[t].active&&n[t].geometryIndex===e&&this.deleteInstance(t);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,r=n.map((e,t)=>t).sort((e,t)=>n[e].vertexStart-n[t].vertexStart),i=this.geometry;for(let a=0,o=n.length;a<o;a++){let o=n[r[a]];if(o.active!==!1){if(i.index!==null){if(o.indexStart!==t){let{indexStart:n,vertexStart:r,reservedIndexCount:a}=o,s=i.index,c=s.array,l=e-r;for(let e=n;e<n+a;e++)c[e]=c[e]+l;s.array.copyWithin(t,n,n+a),s.addUpdateRange(t,a),s.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){let{vertexStart:t,reservedVertexCount:n}=o,r=i.attributes;for(let i in r){let a=r[i],{array:o,itemSize:s}=a;o.copyWithin(e*s,t*s,(t+n)*s),a.addUpdateRange(e*s,n*s),a.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=i.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let e=new Mn,t=n.index,i=n.attributes.position;for(let n=r.start,a=r.start+r.count;n<a;n++){let r=n;t&&(r=t.getX(r)),e.expandByPoint(ti.fromBufferAttribute(i,r))}r.boundingBox=e}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let t=new rr;this.getBoundingBoxAt(e,$r),$r.getCenter(t.center);let i=n.index,a=n.attributes.position,o=0;for(let e=r.start,n=r.start+r.count;e<n;e++){let n=e;i&&(n=i.getX(n)),ti.fromBufferAttribute(a,n),o=Math.max(o,t.center.distanceToSquared(ti))}t.radius=Math.sqrt(o),r.boundingSphere=t}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t||(this._instanceInfo[e].visible=t,this._visibilityChanged=!0),this}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Gr);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),i=new Int32Array(e);ci(this._multiDrawCounts,r),ci(this._multiDrawStarts,i),this._multiDrawCounts=r,this._multiDrawStarts=i,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,s=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ci(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ci(o.image.data,this._matricesTexture.image.data),s&&(s.dispose(),this._initColorsTexture(),ci(s.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(e=>e.active);if(Math.max(...n.map(e=>e.vertexStart+e.reservedVertexCount))>e)throw Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(e=>e.indexStart+e.reservedIndexCount))>t)throw Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dr,this._initializeGeometry(r));let i=this.geometry;r.index&&ci(r.index.array,i.index.array);for(let e in r.attributes)ci(r.attributes[e].array,i.attributes[e].array)}raycast(e,t){let n=this._instanceInfo,r=this._geometryInfo,i=this.matrixWorld,a=this.geometry;ai.material=this.material,ai.geometry.index=a.index,ai.geometry.attributes=a.attributes,ai.geometry.boundingBox===null&&(ai.geometry.boundingBox=new Mn),ai.geometry.boundingSphere===null&&(ai.geometry.boundingSphere=new rr);for(let a=0,o=n.length;a<o;a++){if(!n[a].visible||!n[a].active)continue;let o=n[a].geometryIndex,s=r[o];ai.geometry.setDrawRange(s.start,s.count),this.getMatrixAt(a,ai.matrixWorld).premultiply(i),this.getBoundingBoxAt(o,ai.geometry.boundingBox),this.getBoundingSphereAt(o,ai.geometry.boundingSphere),ai.raycast(e,oi);for(let e=0,n=oi.length;e<n;e++){let n=oi[e];n.object=this,n.batchId=a,t.push(n)}oi.length=0}ai.material=null,ai.geometry.index=null,ai.geometry.attributes={},ai.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this._geometryInfo=e._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox===null?null:e.boundingBox.clone(),boundingSphere:e.boundingSphere===null?null:e.boundingSphere.clone()})),this._instanceInfo=e._instanceInfo.map(e=>({...e})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,i){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,s=1;i.wireframe&&(s=2,o=r.attributes.position.count>65535?4:2);let c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data,h=n.isArrayCamera?Qr:Zr;f&&(n.isArrayCamera?h.setFromArrayCamera(n):(Yr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),h.setFromProjectionMatrix(Yr,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){Yr.copy(this.matrixWorld).invert(),ti.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Yr),ni.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Yr);for(let e=0,t=c.length;e<t;e++)if(c[e].visible&&c[e].active){let t=c[e].geometryIndex;this.getMatrixAt(e,Yr),this.getBoundingSphereAt(t,ei).applyMatrix4(Yr);let n=!1;if(f&&(n=!h.intersectsSphere(ei)),!n){let n=d[t],r=ri.subVectors(ei.center,ti).dot(ni);ii.push(n.start,n.count,r,e)}}let e=ii.list,t=this.customSort;t===null?e.sort(i.transparent?qr:Kr):t.call(this,e,n);for(let t=0,n=e.length;t<n;t++){let n=e[t];l[g]=n.start*o*s,u[g]=n.count*s,m[g]=n.index,g++}ii.reset()}else for(let e=0,t=c.length;e<t;e++)if(c[e].visible&&c[e].active){let t=c[e].geometryIndex,n=!1;if(f&&(this.getMatrixAt(e,Yr),this.getBoundingSphereAt(t,ei).applyMatrix4(Yr),n=!h.intersectsSphere(ei)),!n){let n=d[t];l[g]=n.start*o*s,u[g]=n.count*s,m[g]=e,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,i,a){this.onBeforeRender(e,null,r,i,a)}},ui=class extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new hn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},di=new Y,fi=new Y,pi=new Z,mi=new Sr,hi=new rr,gi=new Y,_i=new Y,vi=class extends sn{constructor(e=new dr,t=new ui){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)di.fromBufferAttribute(t,e-1),fi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=di.distanceTo(fi);e.setAttribute(`lineDistance`,new $n(n,1))}else G(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(r),hi.radius+=i,e.ray.intersectsSphere(hi)===!1)return;pi.copy(r).invert(),mi.copy(e.ray).applyMatrix4(pi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=yi(this,e,mi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=yi(this,e,mi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=yi(this,e,mi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=yi(this,e,mi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function yi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(di.fromBufferAttribute(s,i),fi.fromBufferAttribute(s,a),n.distanceSqToSegment(di,fi,gi,_i)>r)return;gi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(gi);if(!(c<t.near||c>t.far))return{distance:c,point:_i.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var bi=new Y,xi=new Y,Si=class extends vi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)bi.fromBufferAttribute(t,e),xi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+bi.distanceTo(xi);e.setAttribute(`lineDistance`,new $n(n,1))}else G(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ci=class extends vi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},wi=class extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new hn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ti=new Z,Ei=new Sr,Di=new rr,Oi=new Y,ki=class extends sn{constructor(e=new dr,t=new wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=i,e.ray.intersectsSphere(Di)===!1)return;Ti.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Ti);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Oi.fromBufferAttribute(l,n),Ai(Oi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Oi.fromBufferAttribute(l,a),Ai(Oi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=Ei.distanceSqToPoint(e);if(s<n){let n=new Y;Ei.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ji=class extends Ot{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends Ot{constructor(e,t,n=S,r,i,a,o=d,s=d,c,l=N,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ni=class extends Mi{constructor(e,t=S,n=301,r,i,a=d,o=d,s,c=N){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new $n(c,3)),this.setAttribute(`normal`,new $n(l,3)),this.setAttribute(`uv`,new $n(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){G(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new J:new Y);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,r=[],i=[],a=[],o=new Y,s=new Z;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Y)}i[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(q(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(q(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Li=class extends Ii{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new J){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ri=class extends Li{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function zi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Bi=new Y,Vi=new Y,Hi=new zi,Ui=new zi,Wi=new zi,Gi=class extends Ii{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Vi.subVectors(r[0],r[1]).add(r[0]),c=Vi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Bi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Bi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Hi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ui.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Wi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Hi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ui.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Wi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Hi.calc(s),Ui.calc(s),Wi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ki(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function qi(e,t){let n=1-e;return n*n*t}function Ji(e,t){return 2*(1-e)*e*t}function Yi(e,t){return e*e*t}function Xi(e,t,n,r){return qi(e,t)+Ji(e,n)+Yi(e,r)}function Zi(e,t){let n=1-e;return n*n*n*t}function Qi(e,t){let n=1-e;return 3*n*n*e*t}function $i(e,t){return 3*(1-e)*e*e*t}function ea(e,t){return e*e*e*t}function ta(e,t,n,r,i){return Zi(e,t)+Qi(e,n)+$i(e,r)+ea(e,i)}var na=class extends Ii{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,r.x,i.x,a.x,o.x),ta(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Ii{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,r.x,i.x,a.x,o.x),ta(e,r.y,i.y,a.y,o.y),ta(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Ii{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Ii{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Ii{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xi(e,r.x,i.x,a.x),Xi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Ii{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xi(e,r.x,i.x,a.x),Xi(e,r.y,i.y,a.y),Xi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=Object.freeze({__proto__:null,ArcCurve:Ri,CatmullRomCurve3:Gi,CubicBezierCurve:na,CubicBezierCurve3:ra,EllipseCurve:Li,LineCurve:ia,LineCurve3:aa,QuadraticBezierCurve:oa,QuadraticBezierCurve3:sa,SplineCurve:class extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new J){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ki(o,s.x,c.x,l.x,u.x),Ki(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this}}}),la=class e extends dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new $n(p,3)),this.setAttribute(`normal`,new $n(m,3)),this.setAttribute(`uv`,new $n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ua=class e extends dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Y,d=new Y,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new $n(p,3)),this.setAttribute(`normal`,new $n(m,3)),this.setAttribute(`uv`,new $n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},da=class e extends dr{constructor(e=new sa(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Y,s=new Y,c=new J,l=new Y,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new $n(u,3)),this.setAttribute(`normal`,new $n(d,3)),this.setAttribute(`uv`,new $n(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function fa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ma(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ma(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function pa(e){let t={};for(let n=0;n<e.length;n++){let r=fa(e[n]);for(let e in r)t[e]=r[e]}return t}function ma(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ga(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:vt.workingColorSpace}var _a={clone:fa,merge:pa},va=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ya=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ba=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=va,this.fragmentShader=ya,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new hn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new kt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Z().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends ba{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Sa=class extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new hn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new hn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ca=class extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ea(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Da=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Oa=class extends Da{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ka=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Aa=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ja=class extends Da{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Pa(n,t,g,y,r);i[p]=Ma(x,o,_,b,m)}return i}};function Ma(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Na(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Pa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ma(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Na(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Fa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ea(e.settings)&&(n.settings={inTangents:Ta(e.settings.inTangents,Array),outTangents:Ta(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ja(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case W:t=this.InterpolantFactoryMethodDiscrete;break;case Me:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return W;case this.InterpolantFactoryMethodLinear:return Me;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ea(this.settings)&&(Ia(this.settings.inTangents,e),Ia(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(K(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(K(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){K(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){K(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){K(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ea(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ia(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Fa.prototype.ValueTypeName=``,Fa.prototype.TimeBufferType=Float32Array,Fa.prototype.ValueBufferType=Float32Array,Fa.prototype.DefaultInterpolation=Me;var La=class extends Fa{constructor(e,t,n){super(e,t,n)}};La.prototype.ValueTypeName=`bool`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=W,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`color`;var za=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName=`number`;var Ba=class extends Da{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Va=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName=`quaternion`,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Fa{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName=`string`,Ha.prototype.ValueBufferType=Array,Ha.prototype.DefaultInterpolation=W,Ha.prototype.InterpolantFactoryMethodLinear=void 0,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Fa{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`vector`;var Wa=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new hn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ga=class extends Wa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new hn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ka=new Z,qa=new Y,Ja=new Y,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=_,this.map=null,this.mapPass=null,this.matrix=new Z,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(qa),Ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ja),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ka,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new Y,Za=new dt,Qa=new Y,$a=class extends sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Z,this.projectionMatrix=new Z,this.projectionMatrixInverse=new Z,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,Za,Qa),Qa.x===1&&Qa.y===1&&Qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,Qa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,Za,Qa),Qa.x===1&&Qa.y===1&&Qa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,Qa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},eo=new Y,to=new J,no=new J,ro=class extends $a{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(eo.x,eo.y).multiplyScalar(-e/eo.z),eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(eo.x,eo.y).multiplyScalar(-e/eo.z)}getViewSize(e,t){return this.getViewBounds(e,to,no),t.subVectors(no,to)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},io=class extends $a{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ao=class extends Ya{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new ao}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},so=-90,co=1,lo=class extends sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ro(so,co,e,t);r.layers=this.layers,this.add(r);let i=new ro(so,co,e,t);i.layers=this.layers,this.add(i);let a=new ro(so,co,e,t);a.layers=this.layers,this.add(a);let o=new ro(so,co,e,t);o.layers=this.layers,this.add(o);let s=new ro(so,co,e,t);s.layers=this.layers,this.add(s);let c=new ro(so,co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},uo=class extends ro{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fo=`\\[\\]\\.:\\/`,po=RegExp(`[\\[\\]\\.:\\/]`,`g`),mo=`[^\\[\\]\\.:\\/]`,ho=`[^`+fo.replace(`\\.`,``)+`]`,go=`((?:WC+[\\/:])*)`.replace(`WC`,mo),_o=`(WCOD+)?`.replace(`WCOD`,ho),vo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mo),yo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mo),bo=RegExp(`^`+go+_o+vo+yo+`$`),xo=[`material`,`materials`,`bones`,`map`],So=class{constructor(e,t,n){let r=n||Co.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Co=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(po,``)}static parseTrackName(e){let t=bo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){K(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){K(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){K(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){K(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){K(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;K(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Co.Composite=So,Co.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Co.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Co.prototype.GetterByBindingType=[Co.prototype._getValue_direct,Co.prototype._getValue_array,Co.prototype._getValue_arrayElement,Co.prototype._getValue_toArray],Co.prototype.SetterByBindingTypeAndVersioning=[[Co.prototype._setValue_direct,Co.prototype._setValue_direct_setNeedsUpdate,Co.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_array,Co.prototype._setValue_array_setNeedsUpdate,Co.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_arrayElement,Co.prototype._setValue_arrayElement_setNeedsUpdate,Co.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Co.prototype._setValue_fromArray,Co.prototype._setValue_fromArray_setNeedsUpdate,Co.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wo=new Z,To=class{constructor(e,t,n=0,r=1/0){this.ray=new Sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Wt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):K(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wo),this}intersectObject(e,t=!0,n=[]){return Do(e,this,n,t),n.sort(Eo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Do(e[r],this,n,t);return n.sort(Eo),n}};function Eo(e,t){return e.distance-t.distance}function Do(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Do(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Oo=new Y,ko=new Y,Ao=new Y,jo=new Y,Mo=new Y,No=new Y,Po=new Y,Fo=class{constructor(e=new Y,t=new Y){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Oo.subVectors(e,this.start),ko.subVectors(this.end,this.start);let n=ko.dot(ko);if(n===0)return 0;let r=ko.dot(Oo)/n;return t&&(r=q(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=No,n=Po){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;Ao.subVectors(c,o),jo.subVectors(l,s),Mo.subVectors(o,s);let u=Ao.dot(Ao),d=jo.dot(jo),f=jo.dot(Mo);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=q(a,0,1);else{let e=Ao.dot(Mo);if(d<=r)a=0,i=q(-e/u,0,1);else{let t=Ao.dot(jo),n=u*d-t*t;i=n===0?0:q((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=q(-e/u,0,1)):a>1&&(a=1,i=q((t-e)/u,0,1))}}return t.copy(o).addScaledVector(Ao,i),n.copy(s).addScaledVector(jo,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Io(e,t,n,r){let i=Lo(r);switch(n){case A:return e*t;case F:return e*t/i.components*i.byteLength;case I:return e*t/i.components*i.byteLength;case L:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case j:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case R:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case B:case oe:return Math.max(e,16)*Math.max(t,8)/4;case z:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case V:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case H:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case U:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Lo(e){switch(e){case _:case v:return{byteLength:1,components:1};case b:case y:case w:return{byteLength:2,components:1};case T:case E:return{byteLength:2,components:4};case S:case x:case C:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ro(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function zo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},$={common:{diffuse:{value:new hn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new hn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new hn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new hn(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},Bo={basic:{uniforms:pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new hn(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new hn(0)},specular:{value:new hn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:pa([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new hn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:pa([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new hn(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:pa([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:pa([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:pa([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:pa([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:pa([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:pa([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:pa([$.common,$.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:pa([$.lights,$.fog,{color:{value:new hn(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};Bo.physical={uniforms:pa([Bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new hn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new hn(0)},specularColor:{value:new hn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var Vo={r:0,b:0,g:0},Ho=new Z,Uo=new X;Uo.set(-1,0,0,0,1,0,0,0,1);function Wo(e,t,n,r,i,a){let o=new hn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Fr(new Fi(1,1,1),new ba({name:`BackgroundCubeMaterial`,uniforms:fa(Bo.backgroundCube.uniforms),vertexShader:Bo.backgroundCube.vertexShader,fragmentShader:Bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ho.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uo),l.material.toneMapped=vt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Fr(new la(2,2),new ba({name:`BackgroundMaterial`,uniforms:fa(Bo.background.uniforms),vertexShader:Bo.background.vertexShader,fragmentShader:Bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=vt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vo,ga(e)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Go(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ko(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Jo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new hr,s=new X,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yo=4,Xo=6,Zo=20,Qo=256,$o=new io,es=new hn,ts=null,ns=0,rs=0,is=!1,as=new Y,os=new Y,ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=as}=i;ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ts,ns,rs),this._renderer.xr.enabled=is,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:m,minFilter:m,generateMipmaps:!1,type:w,format:M,colorSpace:Be,depthBuffer:!1},r=ls(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ls(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cs(r)),this._blurMaterial=fs(r,e,t),this._ggxMaterial=ds(r,e,t)}return r}_compileMaterial(e){let t=new Fr(new dr,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,r,i){let a=new ro(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fr(new Fi,new Cr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(es),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;us(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ms()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ps());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;us(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Yo?n-d+Yo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,us(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$o),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,us(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$o)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];us(t,3*l*(r>this._lodMax-Yo?r-this._lodMax+Yo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,$o)}};function cs(e){let t=[],n=[],r=e,i=e-Yo+1+Xo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?os.set(1,r,n):e===1?os.set(-n,1,-r):e===2?os.set(-n,r,1):e===3?os.set(-1,r,-n):e===4?os.set(-n,-1,r):os.set(n,r,-1),os.toArray(l,(e*6+t)*3)}}let u=new dr;u.setAttribute(`position`,new Xn(c,3)),u.setAttribute(`outputDirection`,new Xn(l,3)),n.push(new Fr(u,null)),r>Yo&&r--}return{lodMeshes:n,sizeLods:t}}function ls(e,t,n){let r=new jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function us(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ds(e,t,n){return new ba({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fs(e,t,n){return new ba({name:`SphericalGaussianBlur`,defines:{SAMPLES:Zo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ps(){return new ba({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return new ba({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gs=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ji(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fi(5,5,5),i=new ba({name:`CubemapFromEquirect`,uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Fr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=m),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function _s(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new gs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function vs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ys(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Qn:Zn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function bs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ss(e,t,n){let r=new WeakMap,i=new kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Mt(h,p,m,u);g.type=C,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new J(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Cs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ws={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ts(e,t,n,r,i,a){let o=new jt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new dr;l.setAttribute(`position`,new $n([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new $n([0,2,0,0,2,0],2));let u=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Fr(l,u),f=new io(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new jt(t,n,{type:w,depthBuffer:!1,stencilBuffer:!1}),c=new jt(t,n,{type:w,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},vt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ws[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Es=new Ot,Ds=new Mi(1,1),Os=new Mt,ks=new Nt,As=new ji,js=[],Ms=[],Ns=new Float32Array(16),Ps=new Float32Array(9),Fs=new Float32Array(4);function Is(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=js[i];if(a===void 0&&(a=new Float32Array(i),js[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ls(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Rs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zs(e,t){let n=Ms[t];n===void 0&&(n=new Int32Array(t),Ms[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2fv(this.addr,t),Rs(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ls(n,t))return;e.uniform3fv(this.addr,t),Rs(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4fv(this.addr,t),Rs(n,t)}}function Ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Fs.set(r),e.uniformMatrix2fv(this.addr,!1,Fs),Rs(n,r)}}function Gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ps.set(r),e.uniformMatrix3fv(this.addr,!1,Ps),Rs(n,r)}}function Ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ns.set(r),e.uniformMatrix4fv(this.addr,!1,Ns),Rs(n,r)}}function qs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2iv(this.addr,t),Rs(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3iv(this.addr,t),Rs(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4iv(this.addr,t),Rs(n,t)}}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2uiv(this.addr,t),Rs(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3uiv(this.addr,t),Rs(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4uiv(this.addr,t),Rs(n,t)}}function tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ds.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ds):a=Es,n.setTexture2D(t||a,i)}function nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ks,i)}function rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||As,i)}function ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Os,i)}function ac(e){switch(e){case 5126:return Bs;case 35664:return Vs;case 35665:return Hs;case 35666:return Us;case 35674:return Ws;case 35675:return Gs;case 35676:return Ks;case 5124:case 35670:return qs;case 35667:case 35671:return Js;case 35668:case 35672:return Ys;case 35669:case 35673:return Xs;case 5125:return Zs;case 36294:return Qs;case 36295:return $s;case 36296:return ec;case 35678:case 36198:case 36298:case 36306:case 35682:return tc;case 35679:case 36299:case 36307:return nc;case 35680:case 36300:case 36308:case 36293:return rc;case 36289:case 36303:case 36311:case 36292:return ic}}function oc(e,t){e.uniform1fv(this.addr,t)}function sc(e,t){let n=Is(t,this.size,2);e.uniform2fv(this.addr,n)}function cc(e,t){let n=Is(t,this.size,3);e.uniform3fv(this.addr,n)}function lc(e,t){let n=Is(t,this.size,4);e.uniform4fv(this.addr,n)}function uc(e,t){let n=Is(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dc(e,t){let n=Is(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fc(e,t){let n=Is(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pc(e,t){e.uniform1iv(this.addr,t)}function mc(e,t){e.uniform2iv(this.addr,t)}function hc(e,t){e.uniform3iv(this.addr,t)}function gc(e,t){e.uniform4iv(this.addr,t)}function _c(e,t){e.uniform1uiv(this.addr,t)}function vc(e,t){e.uniform2uiv(this.addr,t)}function yc(e,t){e.uniform3uiv(this.addr,t)}function bc(e,t){e.uniform4uiv(this.addr,t)}function xc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ds:Es;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Sc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ks,a[e])}function Cc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||As,a[e])}function wc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Os,a[e])}function Tc(e){switch(e){case 5126:return oc;case 35664:return sc;case 35665:return cc;case 35666:return lc;case 35674:return uc;case 35675:return dc;case 35676:return fc;case 5124:case 35670:return pc;case 35667:case 35671:return mc;case 35668:case 35672:return hc;case 35669:case 35673:return gc;case 5125:return _c;case 36294:return vc;case 36295:return yc;case 36296:return bc;case 35678:case 36198:case 36298:case 36306:case 35682:return xc;case 35679:case 36299:case 36307:return Sc;case 35680:case 36300:case 36308:case 36293:return Cc;case 36289:case 36303:case 36311:case 36292:return wc}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ac(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tc(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Ac(e,t){e.seq.push(t),e.map[t.id]=t}function jc(e,t,n){let r=e.name,i=r.length;for(kc.lastIndex=0;;){let a=kc.exec(r),o=kc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ac(n,l===void 0?new Ec(s,e,t):new Dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Oc(s),Ac(n,e)),n=e}}}var Mc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Nc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Pc=37297,Fc=0;function Ic(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Lc=new X;function Rc(e){vt._getMatrix(Lc,vt.workingColorSpace,e);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(vt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ic(e.getShaderSource(t),r)}return i}function Bc(e,t){let n=Rc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Vc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Hc(e,t){let n=Vc[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Uc=new Y;function Wc(){return vt.getLuminanceCoefficients(Uc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Uc.x.toFixed(4)}, ${Uc.y.toFixed(4)}, ${Uc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Gc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Jc).join(`
`)}function Kc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function qc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jc(e){return e!==``}function Yc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(e){return e.replace(Zc,el)}var $c=new Map;function el(e,t){let n=Q[t];if(n===void 0){let e=$c.get(t);if(e!==void 0)n=Q[e],G(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Qc(n)}var tl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(e){return e.replace(tl,rl)}function rl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function il(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var al={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ol(e){return al[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var sl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function cl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:sl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ll={302:`ENVMAP_MODE_REFRACTION`};function ul(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ll[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var dl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function fl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:dl[e.combine]||`ENVMAP_BLENDING_NONE`}function pl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ml(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ol(n),l=cl(n),u=ul(n),d=fl(n),f=pl(n),p=Gc(n),m=Kc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jc).join(`
`),_.length>0&&(_+=`
`)):(g=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jc).join(`
`),_=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:Hc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,Bc(`linearToOutputTexel`,n.outputColorSpace),Wc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jc).join(`
`)),o=Qc(o),o=Yc(o,n),o=Xc(o,n),s=Qc(s),s=Yc(s,n),s=Xc(s,n),o=nl(o),s=nl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Nc(i,i.VERTEX_SHADER,y),S=Nc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=zc(i,x,`vertex`),n=zc(i,S,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Mc(i,h),T=qc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Pc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var hl=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=hl++,this.code=e,this.usedTimes=0}};function vl(e){return e===1030||e===37490||e===36285}function yl(e,t,n,r,i,a){let o=new Wt,s=new gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Bo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,ee=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,ie=!!i.displacementMap,R=!!i.emissiveMap,z=!!i.metalnessMap,B=!!i.roughnessMap,ae=i.anisotropy>0,oe=i.clearcoat>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ae&&!!i.anisotropyMap,pe=oe&&!!i.clearcoatMap,me=oe&&!!i.clearcoatNormalMap,he=oe&&!!i.clearcoatRoughnessMap,ge=le&&!!i.iridescenceMap,_e=le&&!!i.iridescenceThicknessMap,ve=ue&&!!i.sheenColorMap,ye=ue&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=de&&!!i.transmissionMap,we=de&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,V=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:te,bumpMap:ne,normalMap:re,displacementMap:ie,emissiveMap:R,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&vl(i.normalMap.format),metalnessMap:z,roughnessMap:B,anisotropy:ae,anisotropyMap:fe,clearcoat:oe,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:ue,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:de,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:V,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ee&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:re&&m(i.normalMap.channel),displacementMapUv:ie&&m(i.displacementMap.channel),emissiveMapUv:R&&m(i.emissiveMap.channel),metalnessMapUv:z&&m(i.metalnessMap.channel),roughnessMapUv:B&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:we&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(re||ae),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:R&&i.emissiveMap.isVideoTexture===!0&&vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bo[t];n=_a.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ml(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function bl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||xl),r.length>1&&r.sort(t||Sl),i.length>1&&i.sort(t||Sl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cl,e.set(t,[i])):n>=r.length?(i=new Cl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new hn};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new hn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new hn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new hn,groundColor:new hn};break;case`RectAreaLight`:n={color:new hn,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function El(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Dl=0;function Ol(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kl(e){let t=new Tl,n=El(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Z,o=new Z;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ol);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Dl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Al(e){let t=new kl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function jl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Al(e),t.set(n,[a])):r>=i.length?(a=new Al(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ml=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nl=`uniform sampler2D shadow_pass;
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
}`,Pl=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Fl=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Il=new Z,Ll=new Y,Rl=new Y;function zl(e,t,n){let r=new Hr,i=new J,a=new J,o=new kt,s=new Ca,c=new wa,l={},u=n.maxTextureSize,f={0:1,1:0,2:2},p=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Ml,fragmentShader:Nl}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new dr;g.setAttribute(`position`,new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fr(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],f=l.shadow;if(f===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();i.multiply(g),a.copy(f.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,f.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new jt(i.x,i.y,{format:L,type:w,minFilter:m,magFilter:m,generateMipmaps:!1}),f.map.texture.name=l.name+`.shadowMap`,f.map.depthTexture=new Mi(i.x,i.y,C),f.map.depthTexture.name=l.name+`.shadowMapDepth`,f.map.depthTexture.format=N,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=d,f.map.depthTexture.magFilter=d}else l.isPointLight?(f.map=new gs(i.x),f.map.depthTexture=new Ni(i.x,S)):(f.map=new jt(i.x,i.y),f.map.depthTexture=new Mi(i.x,i.y,S)),f.map.depthTexture.name=l.name+`.shadowMap`,f.map.depthTexture.format=N,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=m,f.map.depthTexture.magFilter=m):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=d,f.map.depthTexture.magFilter=d);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();l.isPointLight!==!0&&f.updateMatrices(l,s);for(let t=0;t<v;t++){let i=f.getCamera(t);if(l.isPointLight){let e=f.camera,n=f.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ll.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ll),Rl.copy(e.position),Rl.add(Pl[t]),e.up.copy(Fl[t]),e.lookAt(Rl),e.updateMatrixWorld(),n.makeTranslation(-Ll.x,-Ll.y,-Ll.z),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=f.getFrustum(t),T(n,s,i,l,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,s),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,f)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new jt(i.x,i.y,{format:L,type:w}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bl(e,t){function n(){let t=!1,n=new kt,r=null,i=new kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):B(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):B(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new hn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new kt().fromArray(ee),re=new kt().fromArray(te);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let R={};R[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),R[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),R[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),z(e.CULL_FACE),ue(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function B(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ae(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(B(e.BLEND),g=!1);else if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?B(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):B(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?B(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):B(e.POLYGON_OFFSET_FILL)}function ge(t){t?z(e.SCISSOR_TEST):B(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ve(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||R[t]),i.type=t,i.texture=n)}function ye(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function V(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function H(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function je(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function U(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function W(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new hn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:B,bindFramebuffer:ae,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:V,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:U,uniformBlockBinding:W,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:H,viewport:je,reset:Me}}function Vl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new J,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ve:vt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),L(t)}function F(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&I(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function I(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function L(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ee=0;function te(){ee=0}function ne(){return ee}function re(e){ee=e}function ie(){let e=ee;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ee+=1,e}function R(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(t,i){let a=r.get(t);if(t.isVideoTexture&&V(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function B(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[c]:e.REPEAT,[l]:e.CLAMP_TO_EDGE,[u]:e.MIRRORED_REPEAT},ce={[d]:e.NEAREST,[f]:e.NEAREST_MIPMAP_NEAREST,[p]:e.NEAREST_MIPMAP_LINEAR,[m]:e.LINEAR,[h]:e.LINEAR_MIPMAP_NEAREST,[g]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=R(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&I(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=de(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=vt.getPrimaries(vt.workingColorSpace),r=o.colorSpace===``?null:vt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Oe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===P,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&pe(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Io(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Io(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ke(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=de(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=vt.getPrimaries(vt.workingColorSpace),r=o.colorSpace===``?null:vt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Oe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);ue(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else z(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function xe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&De(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&ye(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ce=[],we=[];function Te(t){if(t.samples>0){if(De(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(Ce.length=0,we.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ce.push(c),we.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function De(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function V(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Hl(e,t){function n(n,r=``){let i,a=vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ul=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wl=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ba({vertexShader:Ul,fragmentShader:Wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fr(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Gl,g={},v=t.getContextAttributes(),y=null,b=null,x=[],C=[],w=new J,T=null,E=null,O=new ro;O.viewport=new kt;let k=new ro;k.viewport=new kt;let A=[O,k],j=new uo,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new un,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new un,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new un,x[e]=t),t.getHandSpace()};function L(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<x.length;e++){let t=C[e];t!==null&&(C[e]=null,x[e].disconnect(t))}F=null,I=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?P:N,a=v.stencil?D:S);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new jt(d.textureWidth,d.textureHeight,{format:M,type:_,depthTexture:new Mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new jt(f.framebufferWidth,f.framebufferHeight,{format:M,type:_,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new Y,re=new Y;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function R(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(F!==j.near||I!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),F=j.near,I=j.far),j.layers.mask=e.layers.mask|6,O.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;R(j,i);for(let e=0;e<a.length;e++)R(a[e],i);a.length===2?ie(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),z(e,j,i)};function z(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let B=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new ro,o.layers.enable(n),o.viewport=new kt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Pi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=C[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}B&&B(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new Ro;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){B=e},this.dispose=function(){}}},ql=new Z,Jl=new X;Jl.set(-1,0,0,0,1,0,0,0,1);function Yl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ga(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ql.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return K(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Zl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ql=null;function $l(){return Ql===null&&(Ql=new Rr(Zl,16,16,L,w),Ql.name=`DFG_LUT`,Ql.minFilter=m,Ql.magFilter=m,Ql.wrapS=l,Ql.wrapT=l,Ql.generateMipmaps=!1,Ql.needsUpdate=!0),Ql}var eu=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([te,ee,I]),v=new Set([_,S,b,D,T,E]),y=new Uint32Array(4),x=new Int32Array(4),C=new Y,O=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,P=!1,F=null,L=null,ne=null,re=null;this._outputColorSpace=ze;let ie=0,R=0,z=null,B=-1,ae=null,oe=new kt,se=new kt,ce=null,le=new hn(0),ue=0,de=t.width,fe=t.height,pe=1,me=null,he=null,ge=new kt(0,0,de,fe),_e=new kt(0,0,de,fe),ve=!1,ye=new Hr,be=!1,xe=!1,Se=new Z,Ce=new Y,we=new kt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return z===null?pe:1}let V=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,H,je,U,W,Me,Ne,Pe,Fe,Ie,Le,Re,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),V===null){let t=`webgl2`;if(V=Oe(t,e),V===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}$e()}catch(e){throw t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),K(`WebGLRenderer: `+e.message),e}function $e(){ke=new vs(V),ke.init(),Je=new Hl(V,ke),Ae=new qo(V,ke,e,Je),H=new Bl(V,ke),Ae.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),L=V.createFramebuffer(),ne=V.createFramebuffer(),re=V.createFramebuffer(),je=new xs(V),U=new bl,W=new Vl(V,ke,H,U,Ae,Je,je),Me=new _s(N),Ne=new zo(V),Xe=new Go(V,Ne),Pe=new ys(V,Ne,je,Xe),Fe=new Cs(V,Pe,Ne,Xe,je),We=new Ss(V,Ae,W),Ve=new Jo(U),Ie=new yl(N,Me,ke,Ae,Xe,Ve),Le=new Yl(N,U),Re=new wl,Be=new jl(ke),Ue=new Wo(N,Me,H,Fe,p,s),He=new zl(N,Fe,Ae),Qe=new Xl(V,je,Ae,H),Ke=new Ko(V,ke,je),qe=new bs(V,ke,je),je.programs=Ie.programs,N.capabilities=Ae,N.extensions=ke,N.properties=U,N.renderLists=Re,N.shadowMap=He,N.state=H,N.info=je}m!==1009&&(M=new Ts(m,t.width,t.height,o,r,i));let tt=new Kl(N,V);this.xr=tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(de,fe,!1))},this.getSize=function(e){return e.set(de,fe)},this.setSize=function(e,n,r=!0){tt.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),H.viewport(oe.copy(ge).multiplyScalar(pe).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),H.scissor(se.copy(_e).multiplyScalar(pe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){H.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=h.has(t)}if(e){let e=z.texture.type,t=v.has(e),n=Ue.getClearColor(),r=Ue.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,V.clearBufferuiv(V.COLOR,0,y)):(x[0]=i,x[1]=a,x[2]=o,x[3]=r,V.clearBufferiv(V.COLOR,0,x))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),Ue.dispose(),Re.dispose(),Be.dispose(),U.dispose(),Me.dispose(),Fe.dispose(),Xe.dispose(),Qe.dispose(),Ie.dispose(),tt.dispose(),tt.removeEventListener(`sessionstart`,ut),tt.removeEventListener(`sessionend`,J),dt.stop()};function nt(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),P=!0}function rt(){Ze(`WebGLRenderer: Context Restored.`),P=!1;let e=je.autoReset,t=He.enabled,n=He.autoUpdate,r=He.needsUpdate,i=He.type;$e(),je.autoReset=e,He.enabled=t,He.autoUpdate=n,He.needsUpdate=r,He.type=i}function it(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){q(e),U.remove(e)}function q(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=xt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Ne.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*De()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*De()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function st(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),be===!0&&Ve.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,r),e.side=0,e.needsUpdate=!0,gt(e,t,r),e.side=2):gt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),k=Be.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),F!==null&&F.updateLights(k.state.lightsArray),xe=this.localClippingEnabled,be=Ve.init(this.clippingPlanes,xe),be===!0&&Ve.setGlobalState(this.clippingPlanes,t),F!==null&&He.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];st(o,n,t,e),r.add(o)}else st(i,n,t,e),r.add(i)}}),k=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){dt.stop()}function J(){dt.start()}let dt=new Ro;dt.setAnimationLoop(lt),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(e){ct=e,tt.setAnimationLoop(e),e===null?dt.stop():dt.start()},tt.addEventListener(`sessionstart`,ut),tt.addEventListener(`sessionend`,J),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=tt.enabled===!0&&tt.isPresenting===!0,r=M!==null&&(z===null||n)&&M.begin(N,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(t),t=tt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,z),k=Be.get(e,j.length),k.init(t),k.state.textureUnits=W.getTextureUnits(),j.push(k),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(Se,Ge,t.reversedDepth),xe=this.localClippingEnabled,be=Ve.init(this.clippingPlanes,xe),O=Re.get(e,A.length),O.init(),A.push(O),tt.enabled===!0&&tt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&ft(e,t,-1/0,N.sortObjects)}ft(e,t,0,N.sortObjects),O.finish(),F!==null&&F.updateLights(k.state.lightsArray),N.sortObjects===!0&&O.sort(me,he),Ee=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ee&&Ue.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Ve.beginShadows();let i=k.state.shadowsArray;if(He.render(i,e,t),be===!0&&Ve.endShadows(),(r&&M.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];X(n,r,e,a)}Ee&&Ue.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(O,e,n,n.viewport)}}else r.length>0&&X(n,r,e,t),Ee&&Ue.render(e),pt(O,e,t)}z!==null&&R===0&&(W.updateMultisampleRenderTarget(z),W.updateRenderTargetMipmap(z)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),Xe.resetDefaultState(),B=-1,ae=null,j.pop(),j.length>0?(k=j[j.length-1],W.setTextureUnits(k.state.textureUnits),be===!0&&Ve.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,F!==null&&F.renderEnd()};function ft(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ye)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Fe.update(e),a=e.material;a.visible&&O.push(e,i,a,n,we.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ye))){let i=Fe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,we.z,s,t)}}else a.visible&&O.push(e,i,a,n,we.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ft(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),be===!0&&Ve.setGlobalState(N.clippingPlanes,n),r&&H.viewport(oe.copy(r)),i.length>0&&mt(i,t,n),a.length>0&&mt(a,t,n),o.length>0&&mt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function X(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new jt(1,1,{generateMipmaps:!0,type:e?w:_,minFilter:g,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(le),ue=N.getClearAlpha(),ue<1&&N.setClearColor(16777215,.5),N.clear(),Ee&&Ue.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),be===!0&&Ve.setGlobalState(N.clippingPlanes,r),mt(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(le,ue),d!==void 0&&(r.viewport=d),N.toneMapping=u}function mt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function gt(e,t,n){t.isScene!==!0&&(t=Te);let r=U.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=Ie.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,N),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ve.uniform),yt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function _t(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Mc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];C.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(C))return n}return null}function xt(e,t,n,r,i){t.isScene!==!0&&(t=Te),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=k.state.lights;if(be===!0&&(xe===!0||e!==ae)){let t=e===ae&&r.id===B;Ve.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ve.numPlanes||v.numIntersection!==Ve.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=gt(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(H.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==B&&(B=r.id,C=!0),v.needsLights){let e=bt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ae!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(V,`projectionMatrix`,e.projectionMatrix),T.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(V,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&T.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(V,`sunShadowMap`,y.state.sunShadowMap,W),y.state.directionalShadowMap.length>0&&T.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,W),y.state.spotShadowMap.length>0&&T.setValue(V,`spotShadowMap`,y.state.spotShadowMap,W),y.state.pointShadowMap.length>0&&T.setValue(V,`pointShadowMap`,y.state.pointShadowMap,W)),i.isSkinnedMesh){T.setOptional(V,i,`bindMatrix`),T.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(V,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(T.setOptional(V,i,`batchingTexture`),T.setValue(V,`batchingTexture`,i._matricesTexture,W),T.setOptional(V,i,`batchingIdTexture`),T.setValue(V,`batchingIdTexture`,i._indirectTexture,W),T.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(V,`batchingColorTexture`,i._colorsTexture,W));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&We.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=$l()),C){if(T.setValue(V,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&St(E,w),a&&r.fog===!0&&Le.refreshFogUniforms(E,a),Le.refreshMaterialUniforms(E,r,pe,fe,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Mc.upload(V,_t(v),E,W)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Mc.upload(V,_t(v),E,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(V,`center`,i.center),T.setValue(V,`modelViewMatrix`,i.modelViewMatrix),T.setValue(V,`normalMatrix`,i.normalMatrix),T.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,x),Qe.bind(n,x)}}return x}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,ie=t,R=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,H.viewport(oe),H.scissor(se),H.setScissorTest(ce),B=-1;return}if(o.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(o.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else oe.copy(ge).multiplyScalar(pe).floor(),se.copy(_e).multiplyScalar(pe).floor(),ce=ve;if(n!==0&&(r=L),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(oe),H.scissor(se),H.setScissorTest(ce),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}B=-1};function wt(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=wt(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=z===null?null:U.get(z).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=wt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=z===null?null:U.get(z).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await et(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,ne),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){ie=0,R=0,z=null,H.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},tu=1.25,nu=65535,ru=2**-24,iu=Symbol(`SKIP_GENERATION`),au={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[iu]:!1};function ou(e,t,n){return n.min.x=t[e],n.min.y=t[e+1],n.min.z=t[e+2],n.max.x=t[e+3],n.max.y=t[e+4],n.max.z=t[e+5],n}function su(e){let t=-1,n=-1/0;for(let r=0;r<3;r++){let i=e[r+3]-e[r];i>n&&(n=i,t=r)}return t}function cu(e,t){t.set(e)}function lu(e,t,n){let r,i;for(let a=0;a<3;a++){let o=a+3;r=e[a],i=t[a],n[a]=r<i?r:i,r=e[o],i=t[o],n[o]=r>i?r:i}}function uu(e,t,n){for(let r=0;r<3;r++){let i=t[e+2*r],a=t[e+2*r+1],o=i-a,s=i+a;o<n[r]&&(n[r]=o),s>n[r+3]&&(n[r+3]=s)}}function du(e){let t=e[3]-e[0],n=e[4]-e[1],r=e[5]-e[2];return 2*(t*n+n*r+r*t)}function fu(e,t){return t[e+15]===nu}function pu(e,t){return t[e+6]}function mu(e,t){return t[e+14]}function hu(e){return e+8}function gu(e,t){return e+t[e+6]*8}function _u(e,t){return t[e+7]}function vu(e){return e}function yu(e,t,n,r,i){let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0,d=1/0,f=1/0,p=1/0,m=-1/0,h=-1/0,g=-1/0,_=e.offset||0;for(let r=(t-_)*6,i=(t+n-_)*6;r<i;r+=6){let t=e[r+0],n=e[r+1],i=t-n,_=t+n;i<a&&(a=i),_>c&&(c=_),t<d&&(d=t),t>m&&(m=t);let v=e[r+2],y=e[r+3],b=v-y,x=v+y;b<o&&(o=b),x>l&&(l=x),v<f&&(f=v),v>h&&(h=v);let S=e[r+4],C=e[r+5],w=S-C,T=S+C;w<s&&(s=w),T>u&&(u=T),S<p&&(p=S),S>g&&(g=S)}r[0]=a,r[1]=o,r[2]=s,r[3]=c,r[4]=l,r[5]=u,i[0]=d,i[1]=f,i[2]=p,i[3]=m,i[4]=h,i[5]=g}var bu=32,xu=(e,t)=>e.candidate-t.candidate,Su=Array(bu).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Cu=new Float32Array(6);function wu(e,t,n,r,i,a){let o=-1,s=0;if(a===0)o=su(t),o!==-1&&(s=(t[o]+t[o+3])/2);else if(a===1)o=su(e),o!==-1&&(s=Tu(n,r,i,o));else if(a===2){let a=du(e),c=tu*i,l=n.offset||0,u=(r-l)*6,d=(r+i-l)*6;for(let e=0;e<3;e++){let r=t[e],l=(t[e+3]-r)/bu;if(i<bu/4){let t=[...Su];t.length=i;let r=0;for(let i=u;i<d;i+=6,r++){let a=t[r];a.candidate=n[i+2*e],a.count=0;let{bounds:o,leftCacheBounds:s,rightCacheBounds:c}=a;for(let e=0;e<3;e++)c[e]=1/0,c[e+3]=-1/0,s[e]=1/0,s[e+3]=-1/0,o[e]=1/0,o[e+3]=-1/0;uu(i,n,o)}t.sort(xu);let l=i;for(let e=0;e<l;e++){let n=t[e];for(;e+1<l&&t[e+1].candidate===n.candidate;)t.splice(e+1,1),l--}for(let r=u;r<d;r+=6){let i=n[r+2*e];for(let e=0;e<l;e++){let a=t[e];i>=a.candidate?uu(r,n,a.rightCacheBounds):(uu(r,n,a.leftCacheBounds),a.count++)}}for(let n=0;n<l;n++){let r=t[n],l=r.count,u=i-r.count,d=r.leftCacheBounds,f=r.rightCacheBounds,p=0;l!==0&&(p=du(d)/a);let m=0;u!==0&&(m=du(f)/a);let h=1+tu*(p*l+m*u);h<c&&(o=e,c=h,s=r.candidate)}}else{for(let e=0;e<bu;e++){let t=Su[e];t.count=0,t.candidate=r+l+e*l;let n=t.bounds;for(let e=0;e<3;e++)n[e]=1/0,n[e+3]=-1/0}for(let t=u;t<d;t+=6){let i=~~((n[t+2*e]-r)/l);i>=bu&&(i=31);let a=Su[i];a.count++,uu(t,n,a.bounds)}let t=Su[31];cu(t.bounds,t.rightCacheBounds);for(let e=30;e>=0;e--){let t=Su[e],n=Su[e+1];lu(t.bounds,n.rightCacheBounds,t.rightCacheBounds)}let f=0;for(let t=0;t<31;t++){let n=Su[t],r=n.count,l=n.bounds,u=Su[t+1].rightCacheBounds;r!==0&&(f===0?cu(l,Cu):lu(l,Cu,Cu)),f+=r;let d=0,p=0;f!==0&&(d=du(Cu)/a);let m=i-f;m!==0&&(p=du(u)/a);let h=1+tu*(d*f+p*m);h<c&&(o=e,c=h,s=n.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${a} used.`);return{axis:o,pos:s}}function Tu(e,t,n,r){let i=0,a=e.offset;for(let o=t,s=t+n;o<s;o++)i+=e[(o-a)*6+r*2];return i/n}var Eu=class{constructor(){this.boundingData=new Float32Array(6)}};function Du(e,t,n,r,i,a){let o=r,s=r+i-1,c=a.pos,l=a.axis*2,u=n.offset||0;for(;;){for(;o<=s&&n[(o-u)*6+l]<c;)o++;for(;o<=s&&n[(s-u)*6+l]>=c;)s--;if(o<s){for(let n=0;n<t;n++){let r=e[o*t+n];e[o*t+n]=e[s*t+n],e[s*t+n]=r}for(let e=0;e<6;e++){let t=o-u,r=s-u,i=n[t*6+e];n[t*6+e]=n[r*6+e],n[r*6+e]=i}o++,s--}else return o}}var Ou,ku,Au,ju,Mu=2**32;function Nu(e){return`count`in e?1:1+Nu(e.left)+Nu(e.right)}function Pu(e,t,n){return Ou=new Float32Array(n),ku=new Uint32Array(n),Au=new Uint16Array(n),ju=new Uint8Array(n),Fu(e,t)}function Fu(e,t){let n=e/4,r=e/2,i=`count`in t,a=t.boundingData;for(let e=0;e<6;e++)Ou[n+e]=a[e];if(i)return t.buffer?(ju.set(new Uint8Array(t.buffer),e),e+t.buffer.byteLength):(ku[n+6]=t.offset,Au[r+14]=t.count,Au[r+15]=nu,e+32);{let{left:r,right:i,splitAxis:a}=t,o=Fu(e+32,r),s=e/32,c=o/32-s;if(c>Mu)throw Error(`MeshBVH: Cannot store relative child node offset greater than 32 bits.`);return ku[n+6]=c,ku[n+7]=a,Fu(o,i)}}function Iu(e,t,n,r,i,a){let{maxDepth:o,verbose:s,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:d}=i,f=e.primitiveBuffer,p=e.primitiveBufferStride,m=new Float32Array(6),h=!1,g=new Eu;return yu(t,n,r,g.boundingData,m),v(g,n,r,m),g;function _(e){d&&d((e-a.offset)/a.count)}function v(e,n,r,i=null,a=0){!h&&a>=o&&(h=!0,s&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let d=r>l;if(r<=c&&!d||a>=o)return _(n+r),e.offset=n,e.count=r,e;let g=wu(e.boundingData,i,t,n,r,u),y=g.axis===-1?-1:Du(f,p,t,n,r,g);if(g.axis===-1||y===n||y===n+r){if(!d)return _(n+r),e.offset=n,e.count=r,e;g.axis=Math.max(0,su(e.boundingData)),y=n+Math.max(1,Math.floor(r/2))}e.splitAxis=g.axis;let b=new Eu,x=n,S=y-n;e.left=b,yu(t,x,S,b.boundingData,m),v(b,x,S,m,a+1);let C=new Eu,w=y,T=r-S;return e.right=C,yu(t,w,T,C.boundingData,m),v(C,w,T,m,a+1),e}}function Lu(e,t){let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=e.getRootRanges(t.range),i=r[0],a=r[r.length-1],o={offset:i.offset,count:a.offset+a.count-i.offset},s=new Float32Array(6*o.count);s.offset=o.offset,e.computePrimitiveBounds(o.offset,o.count,s),e._roots=r.map(r=>{let i=Iu(e,s,r.offset,r.count,t,o),a=Nu(i),c=new n(32*a);return Pu(0,i,c),c})}var Ru=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},zu=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},Bu,Vu,Hu=[],Uu=new Ru(()=>new Mn);function Wu(e,t,n,r,i,a){Bu=Uu.getPrimitive(),Vu=Uu.getPrimitive(),Hu.push(Bu,Vu),zu.setBuffer(e._roots[t]);let o=Gu(0,e.geometry,n,r,i,a);zu.clearBuffer(),Uu.releasePrimitive(Bu),Uu.releasePrimitive(Vu),Hu.pop(),Hu.pop();let s=Hu.length;return s>0&&(Vu=Hu[s-1],Bu=Hu[s-2]),o}function Gu(e,t,n,r,i=null,a=0,o=0){let{float32Array:s,uint16Array:c,uint32Array:l}=zu,u=e*2;if(fu(u,c)){let t=pu(e,l),n=mu(u,c);return ou(vu(e),s,Bu),r(t,n,!1,o,a+e/8,Bu)}{let u=hu(e),d=gu(e,l),f=u,p=d,m,h,g,_;if(i&&(g=Bu,_=Vu,ou(vu(f),s,g),ou(vu(p),s,_),m=i(g),h=i(_),h<m)){f=d,p=u;let e=m;m=h,h=e,g=_}g||(g=Bu,ou(vu(f),s,g));let v=fu(f*2,c),y=n(g,v,m,o+1,a+f/8),b;if(y===2){let e=w(f);b=r(e,T(f)-e,!0,o+1,a+f/8,g)}else b=y&&Gu(f,t,n,r,i,a,o+1);if(b)return!0;_=Vu,ou(vu(p),s,_);let x=fu(p*2,c),S=n(_,x,h,o+1,a+p/8),C;if(S===2){let e=w(p);C=r(e,T(p)-e,!0,o+1,a+p/8,_)}else C=S&&Gu(p,t,n,r,i,a,o+1);return!!C;function w(e){let{uint16Array:t,uint32Array:n}=zu,r=e*2;for(;!fu(r,t);)e=hu(e),r=e*2;return pu(e,n)}function T(e){let{uint16Array:t,uint32Array:n}=zu,r=e*2;for(;!fu(r,t);)e=gu(e,n),r=e*2;return pu(e,n)+mu(r,t)}}}var Ku=new zu.constructor,qu=new zu.constructor,Ju=new Ru(()=>new Mn),Yu=new Mn,Xu=new Mn,Zu=new Mn,Qu=new Mn,$u=!1;function ed(e,t,n,r){if($u)throw Error(`MeshBVH: Recursive calls to bvhcast not supported.`);$u=!0;let i=e._roots,a=t._roots,o,s=0,c=0,l=new Z().copy(n).invert();for(let e=0,t=i.length;e<t;e++){Ku.setBuffer(i[e]),c=0;let t=Ju.getPrimitive();ou(vu(0),Ku.float32Array,t),t.applyMatrix4(l);for(let e=0,i=a.length;e<i&&(qu.setBuffer(a[e]),o=td(0,0,n,l,r,s,c,0,0,t),qu.clearBuffer(),c+=a[e].byteLength/32,!o);e++);if(Ju.releasePrimitive(t),Ku.clearBuffer(),s+=i[e].byteLength/32,o)break}return $u=!1,o}function td(e,t,n,r,i,a=0,o=0,s=0,c=0,l=null,u=!1){let d,f;u?(d=qu,f=Ku):(d=Ku,f=qu);let p=d.float32Array,m=d.uint32Array,h=d.uint16Array,g=f.float32Array,_=f.uint32Array,v=f.uint16Array,y=e*2,b=t*2,x=fu(y,h),S=fu(b,v),C=!1;if(S&&x)C=u?i(pu(t,_),mu(t*2,v),pu(e,m),mu(e*2,h),c,o+t/8,s,a+e/8):i(pu(e,m),mu(e*2,h),pu(t,_),mu(t*2,v),s,a+e/8,c,o+t/8);else if(S){let l=Ju.getPrimitive();ou(vu(t),g,l),l.applyMatrix4(n);let d=hu(e),f=gu(e,m);ou(vu(d),p,Yu),ou(vu(f),p,Xu);let h=l.intersectsBox(Yu),_=l.intersectsBox(Xu);C=h&&td(t,d,r,n,i,o,a,c,s+1,l,!u)||_&&td(t,f,r,n,i,o,a,c,s+1,l,!u),Ju.releasePrimitive(l)}else{let d=hu(t),f=gu(t,_);ou(vu(d),g,Zu),ou(vu(f),g,Qu);let h=l.intersectsBox(Zu),v=l.intersectsBox(Qu);if(h&&v)C=td(e,d,n,r,i,a,o,s,c+1,l,u)||td(e,f,n,r,i,a,o,s,c+1,l,u);else if(h){if(x)C=td(e,d,n,r,i,a,o,s,c+1,l,u);else{let t=Ju.getPrimitive();t.copy(Zu).applyMatrix4(n);let l=hu(e),f=gu(e,m);ou(vu(l),p,Yu),ou(vu(f),p,Xu);let h=t.intersectsBox(Yu),g=t.intersectsBox(Xu);C=h&&td(d,l,r,n,i,o,a,c,s+1,t,!u)||g&&td(d,f,r,n,i,o,a,c,s+1,t,!u),Ju.releasePrimitive(t)}}else if(v){if(x)C=td(e,f,n,r,i,a,o,s,c+1,l,u);else{let t=Ju.getPrimitive();t.copy(Qu).applyMatrix4(n);let l=hu(e),d=gu(e,m);ou(vu(l),p,Yu),ou(vu(d),p,Xu);let h=t.intersectsBox(Yu),g=t.intersectsBox(Xu);C=h&&td(f,l,r,n,i,o,a,c,s+1,t,!u)||g&&td(f,d,r,n,i,o,a,c,s+1,t,!u),Ju.releasePrimitive(t)}}}return C}var nd=new class{constructor(){let e=null,t=null,n=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(i,a)=>{if(r)throw Error(`BVHTraversalHelper: cannot call setBVH during an active traversal.`);this.root=a,this.buffer=e=i._roots[a],this.uint16Array=n=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=n=null,this.uint32Array=t=null},this.getRangeStart=e=>{let r=e*2;for(;!fu(r,n);)e=hu(e),r=e*2;return pu(e,t)},this.getRangeEnd=e=>{let r=e*2;for(;!fu(r,n);)e=gu(e,t),r=e*2;return pu(e,t)+mu(r,n)};let i=(e,r,a)=>{let o=fu(r*2,n);if(!e(a,o,r)&&!o){let n=hu(r),o=gu(r,t);i(e,n,a+1),i(e,o,a+1)}};this.traverseBuffer=e=>{if(r)throw Error(`BVHTraversalHelper: cannot start a traversal during an active traversal.`);r=!0;try{i(e,0,0)}finally{r=!1}},this.traverse=r=>{this.traverseBuffer((i,a,o)=>{if(a){let s=o*2,c=t[o+6],l=n[s+14];return r(i,a,new Float32Array(e,o*4,6),c,l)}{let n=_u(o,t);return r(i,a,new Float32Array(e,o*4,6),n)}})}}},rd=new Mn,id=new Float32Array(6),ad=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...au,...e},`maxLeafSize`in e&&(console.warn(`BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.`),e={...e,targetLeafSize:e.maxLeafSize}),Lu(this,e)}getRootRanges(){throw Error(`BVH: getRootRanges() not implemented`)}writePrimitiveBounds(){throw Error(`BVH: writePrimitiveBounds() not implemented`)}writePrimitiveRangeBounds(e,t,n,r){let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let n=e,r=e+t;n<r;n++){this.writePrimitiveBounds(n,id,0);let[e,t,r,u,d,f]=id;e<i&&(i=e),u>s&&(s=u),t<a&&(a=t),d>c&&(c=d),r<o&&(o=r),f>l&&(l=f)}return n[r+0]=i,n[r+1]=a,n[r+2]=o,n[r+3]=s,n[r+4]=c,n[r+5]=l,n}computePrimitiveBounds(e,t,n){let r=n.offset||0;for(let i=e,a=e+t;i<a;i++){this.writePrimitiveBounds(i,id,0);let[e,t,a,o,s,c]=id,l=(e+o)/2,u=(t+s)/2,d=(a+c)/2,f=(o-e)/2,p=(s-t)/2,m=(c-a)/2,h=(i-r)*6;n[h+0]=l,n[h+1]=f+(Math.abs(l)+f)*ru,n[h+2]=u,n[h+3]=p+(Math.abs(u)+p)*ru,n[h+4]=d,n[h+5]=m+(Math.abs(d)+m)*ru}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,r=t.length;n<r;n++)t[n]+=e;else{let t=this._roots;for(let n=0;n<t.length;n++){let r=t[n],i=new Uint32Array(r),a=new Uint16Array(r),o=r.byteLength/32;for(let t=0;t<o;t++){let n=8*t;fu(2*n,a)&&(i[n+6]+=e)}}}}traverse(e,t=0){nd.setBVH(this,t),nd.traverse(e),nd.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n),a=new Float32Array(n),o=n.byteLength/32;for(let e=o-1;e>=0;e--){let t=e*8,n=t*2;if(fu(n,i)){let e=pu(t,r),o=mu(n,i);this.writePrimitiveRangeBounds(e,o,id,0),a.set(id,t)}else{let e=hu(t),n=gu(t,r);for(let r=0;r<3;r++){let i=a[e+r],o=a[e+r+3],s=a[n+r],c=a[n+r+3];a[t+r]=i<s?i:s,a[t+r+3]=o>c?o:c}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{ou(0,new Float32Array(t),rd),e.union(rd)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:i,scratchPrimitive:a,iterate:o}=e;if(r&&i){let e=r;r=(t,n,r,s,c)=>e(t,n,r,s,c)?!0:o(t,n,this,i,r,s,a)}else r||=i?(e,t,n,r)=>o(e,t,this,i,n,r,a):(e,t,n)=>n;let s=!1,c=0,l=this._roots;for(let e=0,i=l.length;e<i;e++){let i=l[e];if(s=Wu(this,e,n,r,t,c),s)break;c+=i.byteLength/32}return s}bvhcast(e,t,n){let{intersectsRanges:r}=n;return ed(this,e,t,r)}};function od(){return typeof SharedArrayBuffer<`u`}function sd(e){return e.index?e.index.count:e.attributes.position.count}function cd(e){return sd(e)/3}function ld(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function ud(e,t){if(!e.index){let n=e.attributes.position.count,r=ld(n,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);e.setIndex(new Xn(r,1));for(let e=0;e<n;e++)r[e]=e}}function dd(e,t,n){let r=sd(e)/n,i=t||e.drawRange,a=i.start/n,o=(i.start+i.count)/n,s=Math.max(0,a),c=Math.min(r,o)-s;return{offset:Math.floor(s),count:Math.floor(c)}}function fd(e,t){return e.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function pd(e,t,n){let r=dd(e,t,n),i=fd(e,n);if(!i.length)return[r];let a=[],o=r.offset,s=r.offset+r.count,c=sd(e)/n,l=[];for(let e of i){let{offset:t,count:n}=e,r=t,i=t+(isFinite(n)?n:c-t);r<s&&i>o&&(l.push({pos:Math.max(o,r),isStart:!0}),l.push({pos:Math.min(s,i),isStart:!1}))}l.sort((e,t)=>e.pos===t.pos?e.type===`end`?-1:1:e.pos-t.pos);let u=0,d=null;for(let e of l){let t=e.pos;u!==0&&t!==d&&a.push({offset:d,count:t-d}),u+=e.isStart?1:-1,d=t}return a}function md(e,t){let n=e[e.length-1],r=n.offset+n.count>2**16,i=e.reduce((e,t)=>e+t.count,0),a=r?4:2,o=t?new SharedArrayBuffer(i*a):new ArrayBuffer(i*a),s=r?new Uint32Array(o):new Uint16Array(o),c=0;for(let t=0;t<e.length;t++){let{offset:n,count:r}=e[t];for(let e=0;e<r;e++)s[c+e]=n+e;c+=r}return s}var hd=class extends ad{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(!e.isBufferGeometry)throw Error(`BVH: Only BufferGeometries are supported.`);if(e.index&&e.index.isInterleavedBufferAttribute)throw Error(`BVH: InterleavedBufferAttribute is not supported for the index attribute.`);if(t.useSharedArrayBuffer&&!od())throw Error(`BVH: SharedArrayBuffer is not available.`);super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?e=>this._indirectBuffer[e]:e=>e,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...au,...t},t[iu]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let r=md(pd(t,e.range,n),e.useSharedArrayBuffer);this._indirectBuffer=r}else ud(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Mn))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:pd(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw Error(`BVH: raycastObject3D() not implemented`)}},gd=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let i=0,a=e.length;i<a;i++){let a=e[i][t];n=a<n?a:n,r=a>r?a:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=e.dot(a);n=o<n?o:n,r=o>r?o:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};gd.prototype.setFromBox=(function(){let e=new Y;return function(t,n){let r=n.min,i=n.max,a=1/0,o=-1/0;for(let n=0;n<=1;n++)for(let s=0;s<=1;s++)for(let c=0;c<=1;c++){e.x=r.x*n+i.x*(1-n),e.y=r.y*s+i.y*(1-s),e.z=r.z*c+i.z*(1-c);let l=t.dot(e);a=Math.min(l,a),o=Math.max(l,o)}this.min=a,this.max=o}})();var _d=(function(){let e=new Y,t=new Y,n=new Y;return function(r,i,a){let o=r.start,s=e,c=i.start,l=t;n.subVectors(o,c),e.subVectors(r.end,r.start),t.subVectors(i.end,i.start);let u=n.dot(l),d=l.dot(s),f=l.dot(l),p=n.dot(s),m=s.dot(s)*f-d*d,h,g;h=m===0?0:(u*d-p*f)/m,g=(u+h*d)/f,a.x=h,a.y=g}})(),vd=(function(){let e=new J,t=new Y,n=new Y;return function(r,i,a,o){_d(r,i,e);let s=e.x,c=e.y;if(s>=0&&s<=1&&c>=0&&c<=1)r.at(s,a),i.at(c,o);else if(s>=0&&s<=1)c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);else if(c>=0&&c<=1)s<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);else{let e;e=s<0?r.start:r.end;let l;l=c<0?i.start:i.end;let u=t,d=n;if(r.closestPointToPoint(l,!0,t),i.closestPointToPoint(e,!0,n),u.distanceToSquared(l)<=d.distanceToSquared(e)){a.copy(u),o.copy(l);return}a.copy(e),o.copy(d);return}}})(),yd=(function(){let e=new Y,t=new Y,n=new hr,r=new Fo;return function(i,a){let{radius:o,center:s}=i,{a:c,b:l,c:u}=a;if(r.start=c,r.end=l,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o||(r.start=c,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o)||(r.start=l,r.end=u,r.closestPointToPoint(s,!0,e).distanceTo(s)<=o))return!0;let d=a.getPlane(n);if(Math.abs(d.distanceToPoint(s))<=o){let e=d.projectPoint(s,t);if(a.containsPoint(e))return!0}return!1}})(),bd=[`x`,`y`,`z`],xd=1e-15,Sd=xd*xd;function Cd(e){return Math.abs(e)<xd}var wd=class extends jn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=[,,,,].fill().map(()=>new Y),this.satBounds=[,,,,].fill().map(()=>new gd),this.points=[this.a,this.b,this.c],this.plane=new hr,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Fo,this.needsUpdate=!0}intersectsSphere(e){return yd(e,this)}update(){let e=this.a,t=this.b,n=this.c,r=this.points,i=this.satAxes,a=this.satBounds,o=i[0],s=a[0];this.getNormal(o),s.setFromPoints(o,r);let c=i[1],l=a[1];c.subVectors(e,t),l.setFromPoints(c,r);let u=i[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,r);let f=i[3],p=a[3];f.subVectors(n,e),p.setFromPoints(f,r);let m=c.length(),h=u.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<xd?h<xd||g<xd?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):h<xd?g<xd?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):g<xd&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};wd.prototype.closestPointToSegment=(function(){let e=new Y,t=new Y,n=new Fo;return function(r,i=null,a=null){let{start:o,end:s}=r,c=this.points,l,u=1/0;for(let o=0;o<3;o++){let s=(o+1)%3;n.start.copy(c[o]),n.end.copy(c[s]),vd(n,r,e,t),l=e.distanceToSquared(t),l<u&&(u=l,i&&i.copy(e),a&&a.copy(t))}return this.closestPointToPoint(o,e),l=o.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(o)),this.closestPointToPoint(s,e),l=s.distanceToSquared(e),l<u&&(u=l,i&&i.copy(e),a&&a.copy(s)),Math.sqrt(u)}})(),wd.prototype.intersectsTriangle=(function(){let e=new wd,t=new gd,n=new gd,r=new Y,i=new Y,a=new Y,o=new Y,s=new Fo,c=new Fo,l=new Y,u=new J,d=new J;function f(e,i,a,s){let c=r;!e.isDegenerateIntoPoint&&!e.isDegenerateIntoSegment?c.copy(e.plane.normal):c.copy(i.plane.normal);let l=e.satBounds,u=e.satAxes;for(let r=1;r<4;r++){let a=l[r],s=u[r];if(t.setFromPoints(s,i.points),a.isSeparated(t)||(o.copy(c).cross(s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}let d=i.satBounds,f=i.satAxes;for(let r=1;r<4;r++){let a=d[r],s=f[r];if(t.setFromPoints(s,e.points),a.isSeparated(t)||(o.crossVectors(c,s),t.setFromPoints(o,e.points),n.setFromPoints(o,i.points),t.isSeparated(n)))return!1}return a&&(s||console.warn(`ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.`),a.start.set(0,0,0),a.end.set(0,0,0)),!0}function p(e,t,n,r,i,a,o,s,c,l,u){let d=o/(o-s);l.x=r+(i-r)*d,u.start.subVectors(t,e).multiplyScalar(d).add(e),d=o/(o-c),l.y=r+(a-r)*d,u.end.subVectors(n,e).multiplyScalar(d).add(e)}function m(e,t,n,r,i,a,o,s,c,l,u){if(i>0)p(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else if(a>0)p(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(s*c>0||o!=0)p(e.a,e.b,e.c,t,n,r,o,s,c,l,u);else if(s!=0)p(e.b,e.a,e.c,n,t,r,s,o,c,l,u);else if(c!=0)p(e.c,e.a,e.b,r,t,n,c,o,s,l,u);else return!0;return!1}function h(e,t,n,i){let a=t.degenerateSegment,o=e.plane.distanceToPoint(a.start),s=e.plane.distanceToPoint(a.end);return Cd(o)?Cd(s)?f(e,t,n,i):(n&&(n.start.copy(a.start),n.end.copy(a.start)),e.containsPoint(a.start)):Cd(s)?(n&&(n.start.copy(a.end),n.end.copy(a.end)),e.containsPoint(a.end)):e.plane.intersectLine(a,r)!=null&&(n&&(n.start.copy(r),n.end.copy(r)),e.containsPoint(r))}function g(e,t,n){let r=t.a;return Cd(e.plane.distanceToPoint(r))&&e.containsPoint(r)?(n&&(n.start.copy(r),n.end.copy(r)),!0):!1}function _(e,t,n){let i=e.degenerateSegment,a=t.a;return i.closestPointToPoint(a,!0,r),a.distanceToSquared(r)<Sd&&(n&&(n.start.copy(a),n.end.copy(a)),!0)}function v(e,t,n,o){if(e.isDegenerateIntoSegment){if(t.isDegenerateIntoSegment){let o=e.degenerateSegment,s=t.degenerateSegment,c=i,l=a;o.delta(c),s.delta(l);let u=r.subVectors(s.start,o.start),d=c.x*l.y-c.y*l.x;if(Cd(d))return!1;let f=(u.x*l.y-u.y*l.x)/d,p=-(c.x*u.y-c.y*u.x)/d;return f<0||f>1||p<0||p>1?!1:Cd(o.start.z+c.z*f-(s.start.z+l.z*p))?(n&&(n.start.copy(o.start).addScaledVector(c,f),n.end.copy(o.start).addScaledVector(c,f)),!0):!1}return t.isDegenerateIntoPoint?_(e,t,n):h(t,e,n,o)}if(e.isDegenerateIntoPoint)return t.isDegenerateIntoPoint?t.a.distanceToSquared(e.a)<Sd&&(n&&(n.start.copy(e.a),n.end.copy(e.a)),!0):t.isDegenerateIntoSegment?_(t,e,n):g(t,e,n);if(t.isDegenerateIntoPoint)return g(e,t,n);if(t.isDegenerateIntoSegment)return h(e,t,n,o)}return function(t,n=null,r=!1){this.needsUpdate&&this.update(),t.isExtendedTriangle?t.needsUpdate&&t.update():(e.copy(t),e.update(),t=e);let o=v(this,t,n,r);if(o!==void 0)return o;let p=this.plane,h=t.plane,g=h.distanceToPoint(this.a),_=h.distanceToPoint(this.b),y=h.distanceToPoint(this.c);Cd(g)&&(g=0),Cd(_)&&(_=0),Cd(y)&&(y=0);let b=g*_,x=g*y;if(b>0&&x>0)return!1;let S=p.distanceToPoint(t.a),C=p.distanceToPoint(t.b),w=p.distanceToPoint(t.c);Cd(S)&&(S=0),Cd(C)&&(C=0),Cd(w)&&(w=0);let T=S*C,E=S*w;if(T>0&&E>0)return!1;i.copy(p.normal),a.copy(h.normal);let D=i.cross(a),O=0,k=Math.abs(D.x),A=Math.abs(D.y);A>k&&(k=A,O=1),Math.abs(D.z)>k&&(O=2);let j=bd[O],M=this.a[j],N=this.b[j],P=this.c[j],F=t.a[j],I=t.b[j],L=t.c[j];if(m(this,M,N,P,b,x,g,_,y,u,s)||m(t,F,I,L,T,E,S,C,w,d,c))return f(this,t,n,r);if(u.y<u.x){let e=u.y;u.y=u.x,u.x=e,l.copy(s.start),s.start.copy(s.end),s.end.copy(l)}if(d.y<d.x){let e=d.y;d.y=d.x,d.x=e,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<d.x||d.y<u.x?!1:(n&&(d.x>u.x?n.start.copy(c.start):n.start.copy(s.start),d.y<u.y?n.end.copy(c.end):n.end.copy(s.end)),!0)}})(),wd.prototype.distanceToPoint=(function(){let e=new Y;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),wd.prototype.distanceToTriangle=(function(){let e=new Y,t=new Y,n=[`a`,`b`,`c`],r=new Fo,i=new Fo;return function(a,o=null,s=null){let c=o||s?r:null;if(this.intersectsTriangle(a,c,!0))return(o||s)&&(o&&c.getCenter(o),s&&c.getCenter(s)),0;let l=1/0;for(let t=0;t<3;t++){let r,i=n[t],c=a[i];this.closestPointToPoint(c,e),r=c.distanceToSquared(e),r<l&&(l=r,o&&o.copy(e),s&&s.copy(c));let u=this[i];a.closestPointToPoint(u,e),r=u.distanceToSquared(e),r<l&&(l=r,o&&o.copy(u),s&&s.copy(e))}for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];r.set(this[u],this[d]);for(let c=0;c<3;c++){let u=n[c],d=n[(c+1)%3];i.set(a[u],a[d]),vd(r,i,e,t);let f=e.distanceToSquared(t);f<l&&(l=f,o&&o.copy(e),s&&s.copy(t))}}return Math.sqrt(l)}})();var Td=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new Y,this.max=new Y,this.matrix=new Z,this.invMatrix=new Z,this.points=Array(8).fill().map(()=>new Y),this.satAxes=[,,,].fill().map(()=>new Y),this.satBounds=[,,,].fill().map(()=>new gd),this.alignedSatBounds=[,,,].fill().map(()=>new gd),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Td.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,r=this.points;for(let i=0;i<=1;i++)for(let a=0;a<=1;a++)for(let o=0;o<=1;o++){let s=r[1*i|2*a|4*o];s.x=i?n.x:t.x,s.y=a?n.y:t.y,s.z=o?n.z:t.z,s.applyMatrix4(e)}let i=this.satBounds,a=this.satAxes,o=r[0];for(let e=0;e<3;e++){let t=a[e],n=i[e],s=r[1<<e];t.subVectors(o,s),n.setFromPoints(t,r)}let s=this.alignedSatBounds;s[0].setFromPointsField(r,`x`),s[1].setFromPointsField(r,`y`),s[2].setFromPointsField(r,`z`),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})(),Td.prototype.intersectsBox=(function(){let e=new gd;return function(t){this.needsUpdate&&this.update();let n=t.min,r=t.max,i=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(e.min=n.x,e.max=r.x,o[0].isSeparated(e)||(e.min=n.y,e.max=r.y,o[1].isSeparated(e))||(e.min=n.z,e.max=r.z,o[2].isSeparated(e)))return!1;for(let n=0;n<3;n++){let r=a[n],o=i[n];if(e.setFromBox(r,t),o.isSeparated(e))return!1}return!0}})(),Td.prototype.intersectsTriangle=(function(){let e=new wd,t=[,,,],n=new gd,r=new gd,i=new Y;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(e.copy(a),e.update(),a=e);let o=this.satBounds,s=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let e=0;e<3;e++){let r=o[e],i=s[e];if(n.setFromPoints(i,t),r.isSeparated(n))return!1}let c=a.satBounds,l=a.satAxes,u=this.points;for(let e=0;e<3;e++){let t=c[e],r=l[e];if(n.setFromPoints(r,u),t.isSeparated(n))return!1}for(let e=0;e<3;e++){let a=s[e];for(let e=0;e<4;e++){let o=l[e];if(i.crossVectors(a,o),n.setFromPoints(i,t),r.setFromPoints(i,u),n.isSeparated(r))return!1}}return!0}})(),Td.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})(),Td.prototype.distanceToPoint=(function(){let e=new Y;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})(),Td.prototype.distanceToBox=(function(){let e=[`x`,`y`,`z`],t=Array(12).fill().map(()=>new Fo),n=Array(12).fill().map(()=>new Fo),r=new Y,i=new Y;return function(a,o=0,s=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(s||c)&&(a.getCenter(i),this.closestPointToPoint(i,r),a.closestPointToPoint(r,i),s&&s.copy(r),c&&c.copy(i)),0;let l=o*o,u=a.min,d=a.max,f=this.points,p=1/0;for(let e=0;e<8;e++){let t=f[e];i.copy(t).clamp(u,d);let n=t.distanceToSquared(i);if(n<p&&(p=n,s&&s.copy(t),c&&c.copy(i),n<l))return Math.sqrt(n)}let m=0;for(let r=0;r<3;r++)for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let o=(r+1)%3,s=(r+2)%3,c=i<<o|a<<s,l=1<<r|i<<o|a<<s,p=f[c],h=f[l];t[m].set(p,h);let g=e[r],_=e[o],v=e[s],y=n[m],b=y.start,x=y.end;b[g]=u[g],b[_]=i?u[_]:d[_],b[v]=a?u[v]:d[_],x[g]=d[g],x[_]=i?u[_]:d[_],x[v]=a?u[v]:d[_],m++}for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){i.x=e?d.x:u.x,i.y=t?d.y:u.y,i.z=n?d.z:u.z,this.closestPointToPoint(i,r);let a=i.distanceToSquared(r);if(a<p&&(p=a,s&&s.copy(r),c&&c.copy(i),a<l))return Math.sqrt(a)}for(let e=0;e<12;e++){let a=t[e];for(let e=0;e<12;e++){let t=n[e];vd(a,t,r,i);let o=r.distanceToSquared(i);if(o<p&&(p=o,s&&s.copy(r),c&&c.copy(i),o<l))return Math.sqrt(o)}}return Math.sqrt(p)}})();var Ed=new class extends Ru{constructor(){super(()=>new wd)}},Dd=new Y,Od=new Y;function kd(e,t,n={},r=0,i=1/0){let a=r*r,o=i*i,s=1/0,c=null;if(e.shapecast({boundsTraverseOrder:e=>(Dd.copy(t).clamp(e.min,e.max),Dd.distanceToSquared(t)),intersectsBounds:(e,t,n)=>n<s&&n<o,intersectsTriangle:(e,n)=>{e.closestPointToPoint(t,Dd);let r=t.distanceToSquared(Dd);return r<s&&(Od.copy(Dd),s=r,c=n),r<a}}),s===1/0)return null;let l=Math.sqrt(s);return n.point?n.point.copy(Od):n.point=Od.clone(),n.distance=l,n.faceIndex=c,n}var Ad=!0,jd=new Y,Md=new Y,Nd=new Y,Pd=new J,Fd=new J,Id=new J,Ld=new Y,Rd=new Y,zd=new Y,Bd=new Y;function Vd(e,t,n,r,i,a,o,s){let c;if(c=a===1?e.intersectTriangle(r,n,t,!0,i):e.intersectTriangle(t,n,r,a!==2,i),c===null)return null;let l=e.origin.distanceTo(i);return l<o||l>s?null:{distance:l,point:i.clone()}}function Hd(e,t,n,r,i,a,o,s,c,l,u){jd.fromBufferAttribute(t,a),Md.fromBufferAttribute(t,o),Nd.fromBufferAttribute(t,s);let d=Vd(e,jd,Md,Nd,Bd,c,l,u);if(d){if(r){Pd.fromBufferAttribute(r,a),Fd.fromBufferAttribute(r,o),Id.fromBufferAttribute(r,s),d.uv=new J;let e=jn.getInterpolation(Bd,jd,Md,Nd,Pd,Fd,Id,d.uv);Ad||(d.uv=e)}if(i){Pd.fromBufferAttribute(i,a),Fd.fromBufferAttribute(i,o),Id.fromBufferAttribute(i,s),d.uv1=new J;let e=jn.getInterpolation(Bd,jd,Md,Nd,Pd,Fd,Id,d.uv1);Ad||(d.uv1=e)}if(n){Ld.fromBufferAttribute(n,a),Rd.fromBufferAttribute(n,o),zd.fromBufferAttribute(n,s),d.normal=new Y;let t=jn.getInterpolation(Bd,jd,Md,Nd,Ld,Rd,zd,d.normal);d.normal.dot(e.direction)>0&&d.normal.multiplyScalar(-1),Ad||(d.normal=t)}let t={a,b:o,c:s,normal:new Y,materialIndex:0};if(jn.getNormal(jd,Md,Nd,t.normal),d.face=t,d.faceIndex=a,Ad){let e=new Y;jn.getBarycoord(Bd,jd,Md,Nd,e),d.barycoord=e}}return d}function Ud(e){return e&&e.isMaterial?e.side:e}function Wd(e,t,n,r,i,a,o){let s=r*3,c=s+0,l=s+1,u=s+2,{index:d,groups:f}=e;e.index&&(c=d.getX(c),l=d.getX(l),u=d.getX(u));let{position:p,normal:m,uv:h,uv1:g}=e.attributes;if(Array.isArray(t)){let e=r*3;for(let s=0,d=f.length;s<d;s++){let{start:d,count:_,materialIndex:v}=f[s];if(e>=d&&e<d+_){let e=Ud(t[v]),s=Hd(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=v,i)i.push(s);else return s}}}}else{let e=Ud(t),s=Hd(n,p,m,h,g,c,l,u,e,a,o);if(s){if(s.faceIndex=r,s.face.materialIndex=0,i)i.push(s);else return s}}return null}function Gd(e,t,n,r){let i=e.a,a=e.b,o=e.c,s=t,c=t+1,l=t+2;n&&(s=n.getX(s),c=n.getX(c),l=n.getX(l)),i.x=r.getX(s),i.y=r.getY(s),i.z=r.getZ(s),a.x=r.getX(c),a.y=r.getY(c),a.z=r.getZ(c),o.x=r.getX(l),o.y=r.getY(l),o.z=r.getZ(l)}function Kd(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,l=r+i;e<l;e++)Wd(c,t,n,e,a,o,s)}function qd(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,c=r+i;e<c;e++){let r;r=Wd(s,t,n,e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function Jd(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let n=e,s=t+e;n<s;n++){let e;if(e=n,Gd(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function Yd(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(e,n,a=!1){let l=e*2;if(fu(l,s)){let t=pu(e,o),n=mu(l,s),a=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=3*t,o=3*(t+n);e<o;e++){let t=r[e],n=i.getX(t),o=i.getY(t),s=i.getZ(t);n<a&&(a=n),n>f&&(f=n),o<u&&(u=o),o>p&&(p=o),s<d&&(d=s),s>m&&(m=s)}return c[e+0]!==a||c[e+1]!==u||c[e+2]!==d||c[e+3]!==f||c[e+4]!==p||c[e+5]!==m?(c[e+0]=a,c[e+1]=u,c[e+2]=d,c[e+3]=f,c[e+4]=p,c[e+5]=m,!0):!1}{let r=hu(e),i=gu(e,o),s=a,l=!1,u=!1;if(t){if(!s){let e=r/8+n/32,a=i/8+n/32;l=t.has(e),u=t.has(a),s=!l&&!u}}else l=!0,u=!0;let f=s||l,p=s||u,m=!1;f&&(m=d(r,n,s));let h=!1;p&&(h=d(i,n,s));let g=m||h;if(g)for(let t=0;t<3;t++){let n=r+t,a=i+t,o=c[n],s=c[n+3],l=c[a],u=c[a+3];c[e+t]=o<l?o:l,c[e+t+3]=s>u?s:u}return g}}}function Xd(e,t,n,r,i){let a,o,s,c,l,u,d=1/n.direction.x,f=1/n.direction.y,p=1/n.direction.z,m=n.origin.x,h=n.origin.y,g=n.origin.z,_=t[e],v=t[e+3],y=t[e+1],b=t[e+3+1],x=t[e+2],S=t[e+3+2];return d>=0?(a=(_-m)*d,o=(v-m)*d):(a=(v-m)*d,o=(_-m)*d),f>=0?(s=(y-h)*f,c=(b-h)*f):(s=(b-h)*f,c=(y-h)*f),a>c||s>o||((s>a||isNaN(a))&&(a=s),(c<o||isNaN(o))&&(o=c),p>=0?(l=(x-g)*p,u=(S-g)*p):(l=(S-g)*p,u=(x-g)*p),a>u||l>o)?!1:((l>a||a!==a)&&(a=l),(u<o||o!==o)&&(o=u),a<=i&&o>=r)}function Zd(e,t,n,r,i,a,o,s){let{geometry:c,_indirectBuffer:l}=e;for(let e=r,u=r+i;e<u;e++)Wd(c,t,n,l?l[e]:e,a,o,s)}function Qd(e,t,n,r,i,a,o){let{geometry:s,_indirectBuffer:c}=e,l=1/0,u=null;for(let e=r,d=r+i;e<d;e++){let r;r=Wd(s,t,n,c?c[e]:e,null,a,o),r&&r.distance<l&&(u=r,l=r.distance)}return u}function $d(e,t,n,r,i,a,o){let{geometry:s}=n,{index:c}=s,l=s.attributes.position;for(let s=e,u=t+e;s<u;s++){let e;if(e=n.resolveTriangleIndex(s),Gd(o,e*3,c,l),o.needsUpdate=!0,r(o,e,i,a))return!0}return!1}function ef(e,t,n,r,i,a,o){zu.setBuffer(e._roots[t]),tf(0,e,n,r,i,a,o),zu.clearBuffer()}function tf(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=zu,u=e*2;if(fu(u,c))Kd(t,n,r,pu(e,l),mu(u,c),i,a,o);else{let c=hu(e);Xd(c,s,r,a,o)&&tf(c,t,n,r,i,a,o);let u=gu(e,l);Xd(u,s,r,a,o)&&tf(u,t,n,r,i,a,o)}}var nf=[`x`,`y`,`z`];function rf(e,t,n,r,i,a){zu.setBuffer(e._roots[t]);let o=af(0,e,n,r,i,a);return zu.clearBuffer(),o}function af(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=zu,l=e*2;if(fu(l,s))return qd(t,n,r,pu(e,c),mu(l,s),i,a);{let s=_u(e,c),l=nf[s],u=r.direction[l]>=0,d,f;u?(d=hu(e),f=gu(e,c)):(d=gu(e,c),f=hu(e));let p=Xd(d,o,r,i,a)?af(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=Xd(f,o,r,i,a)?af(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var of=new Mn,sf=new wd,cf=new wd,lf=new Z,uf=new Td,df=new Td;function ff(e,t,n,r){zu.setBuffer(e._roots[t]);let i=pf(0,e,n,r);return zu.clearBuffer(),i}function pf(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=zu,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),uf.set(n.boundingBox.min,n.boundingBox.max,r),i=uf),fu(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=pu(e,s),m=mu(c,o);if(lf.copy(r).invert(),n.boundsTree)return ou(vu(e),a,df),df.matrix.copy(lf),df.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>df.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let t=p*3,n=(m+p)*3;t<n;t+=3)if(Gd(cf,t,l,u),cf.needsUpdate=!0,e.intersectsTriangle(cf))return!0;return!1}});{let e=cd(n);for(let t=p*3,n=(m+p)*3;t<n;t+=3){Gd(sf,t,l,u),sf.a.applyMatrix4(lf),sf.b.applyMatrix4(lf),sf.c.applyMatrix4(lf),sf.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(Gd(cf,t,d,f),cf.needsUpdate=!0,sf.intersectsTriangle(cf))return!0}}}else{let o=hu(e),c=gu(e,s);return ou(vu(o),a,of),!!(i.intersectsBox(of)&&pf(o,t,n,r,i)||(ou(vu(c),a,of),i.intersectsBox(of)&&pf(c,t,n,r,i)))}}var mf=new Z,hf=new Td,gf=new Td,_f=new Y,vf=new Y,yf=new Y,bf=new Y;function xf(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),hf.set(t.boundingBox.min,t.boundingBox.max,n),hf.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Ed.getPrimitive(),p=Ed.getPrimitive(),m=_f,h=vf,g=null,_=null;i&&(g=yf,_=bf);let v=1/0,y=null,b=null;return mf.copy(n).invert(),gf.matrix.copy(mf),e.shapecast({boundsTraverseOrder:e=>hf.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(gf.min.copy(e.min),gf.max.copy(e.max),gf.needsUpdate=!0),!0),intersectsRange:(e,r)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:e=>gf.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,i)=>{for(let o=t,s=t+i;o<s;o++){Gd(p,3*o,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=e,n=e+r;t<n;t++){Gd(f,3*t,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=t,b=o),e<a)return!0}}}});{let i=cd(t);for(let t=0,o=i;t<o;t++){Gd(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=e,i=e+r;n<i;n++){Gd(f,3*n,l,c),f.needsUpdate=!0;let e=f.distanceToTriangle(p,m,g);if(e<v&&(h.copy(m),_&&_.copy(g),v=e,y=n,b=t),e<a)return!0}}}}}),Ed.releasePrimitive(f),Ed.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(mf),h.applyMatrix4(mf),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Sf(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let n=e.geometry,r=n.index?n.index.array:null,i=n.attributes.position,a,o,s,c,l=0,u=e._roots;for(let e=0,t=u.length;e<t;e++)a=u[e],o=new Uint32Array(a),s=new Uint16Array(a),c=new Float32Array(a),d(0,l),l+=a.byteLength;function d(n,a,l=!1){let u=n*2;if(fu(u,s)){let t=pu(n,o),a=mu(u,s),l=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let n=t,o=t+a;n<o;n++){let t=3*e.resolveTriangleIndex(n);for(let e=0;e<3;e++){let n=t+e;n=r?r[n]:n;let a=i.getX(n),o=i.getY(n),s=i.getZ(n);a<l&&(l=a),a>p&&(p=a),o<d&&(d=o),o>m&&(m=o),s<f&&(f=s),s>h&&(h=s)}}return c[n+0]!==l||c[n+1]!==d||c[n+2]!==f||c[n+3]!==p||c[n+4]!==m||c[n+5]!==h?(c[n+0]=l,c[n+1]=d,c[n+2]=f,c[n+3]=p,c[n+4]=m,c[n+5]=h,!0):!1}{let e=hu(n),r=gu(n,o),i=l,s=!1,u=!1;if(t){if(!i){let n=e/8+a/32,o=r/8+a/32;s=t.has(n),u=t.has(o),i=!s&&!u}}else s=!0,u=!0;let f=i||s,p=i||u,m=!1;f&&(m=d(e,a,i));let h=!1;p&&(h=d(r,a,i));let g=m||h;if(g)for(let t=0;t<3;t++){let i=e+t,a=r+t,o=c[i],s=c[i+3],l=c[a],u=c[a+3];c[n+t]=o<l?o:l,c[n+t+3]=s>u?s:u}return g}}}function Cf(e,t,n,r,i,a,o){zu.setBuffer(e._roots[t]),wf(0,e,n,r,i,a,o),zu.clearBuffer()}function wf(e,t,n,r,i,a,o){let{float32Array:s,uint16Array:c,uint32Array:l}=zu,u=e*2;if(fu(u,c))Zd(t,n,r,pu(e,l),mu(u,c),i,a,o);else{let c=hu(e);Xd(c,s,r,a,o)&&wf(c,t,n,r,i,a,o);let u=gu(e,l);Xd(u,s,r,a,o)&&wf(u,t,n,r,i,a,o)}}var Tf=[`x`,`y`,`z`];function Ef(e,t,n,r,i,a){zu.setBuffer(e._roots[t]);let o=Df(0,e,n,r,i,a);return zu.clearBuffer(),o}function Df(e,t,n,r,i,a){let{float32Array:o,uint16Array:s,uint32Array:c}=zu,l=e*2;if(fu(l,s))return Qd(t,n,r,pu(e,c),mu(l,s),i,a);{let s=_u(e,c),l=Tf[s],u=r.direction[l]>=0,d,f;u?(d=hu(e),f=gu(e,c)):(d=gu(e,c),f=hu(e));let p=Xd(d,o,r,i,a)?Df(d,t,n,r,i,a):null;if(p){let e=p.point[l];if(u?e<=o[f+s]:e>=o[f+s+3])return p}let m=Xd(f,o,r,i,a)?Df(f,t,n,r,i,a):null;return p&&m?p.distance<=m.distance?p:m:p||m||null}}var Of=new Mn,kf=new wd,Af=new wd,jf=new Z,Mf=new Td,Nf=new Td;function Pf(e,t,n,r){zu.setBuffer(e._roots[t]);let i=Ff(0,e,n,r);return zu.clearBuffer(),i}function Ff(e,t,n,r,i=null){let{float32Array:a,uint16Array:o,uint32Array:s}=zu,c=e*2;if(i===null&&(n.boundingBox||n.computeBoundingBox(),Mf.set(n.boundingBox.min,n.boundingBox.max,r),i=Mf),fu(c,o)){let i=t.geometry,l=i.index,u=i.attributes.position,d=n.index,f=n.attributes.position,p=pu(e,s),m=mu(c,o);if(jf.copy(r).invert(),n.boundsTree)return ou(vu(e),a,Nf),Nf.matrix.copy(jf),Nf.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:e=>Nf.intersectsBox(e),intersectsTriangle:e=>{e.a.applyMatrix4(r),e.b.applyMatrix4(r),e.c.applyMatrix4(r),e.needsUpdate=!0;for(let n=p,r=m+p;n<r;n++)if(Gd(Af,3*t.resolveTriangleIndex(n),l,u),Af.needsUpdate=!0,e.intersectsTriangle(Af))return!0;return!1}});{let e=cd(n);for(let n=p,r=m+p;n<r;n++){Gd(kf,3*t.resolveTriangleIndex(n),l,u),kf.a.applyMatrix4(jf),kf.b.applyMatrix4(jf),kf.c.applyMatrix4(jf),kf.needsUpdate=!0;for(let t=0,n=e*3;t<n;t+=3)if(Gd(Af,t,d,f),Af.needsUpdate=!0,kf.intersectsTriangle(Af))return!0}}}else{let o=hu(e),c=gu(e,s);return ou(vu(o),a,Of),!!(i.intersectsBox(Of)&&Ff(o,t,n,r,i)||(ou(vu(c),a,Of),i.intersectsBox(Of)&&Ff(c,t,n,r,i)))}}var If=new Z,Lf=new Td,Rf=new Td,zf=new Y,Bf=new Y,Vf=new Y,Hf=new Y;function Uf(e,t,n,r={},i={},a=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Lf.set(t.boundingBox.min,t.boundingBox.max,n),Lf.needsUpdate=!0;let s=e.geometry,c=s.attributes.position,l=s.index,u=t.attributes.position,d=t.index,f=Ed.getPrimitive(),p=Ed.getPrimitive(),m=zf,h=Bf,g=null,_=null;i&&(g=Vf,_=Hf);let v=1/0,y=null,b=null;return If.copy(n).invert(),Rf.matrix.copy(If),e.shapecast({boundsTraverseOrder:e=>Lf.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o&&(t&&(Rf.min.copy(e.min),Rf.max.copy(e.max),Rf.needsUpdate=!0),!0),intersectsRange:(r,i)=>{if(t.boundsTree){let s=t.boundsTree;return s.shapecast({boundsTraverseOrder:e=>Rf.distanceToBox(e),intersectsBounds:(e,t,n)=>n<v&&n<o,intersectsRange:(t,o)=>{for(let x=t,S=t+o;x<S;x++){let t=s.resolveTriangleIndex(x);Gd(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let t=r,n=r+i;t<n;t++){let n=e.resolveTriangleIndex(t);Gd(f,3*n,l,c),f.needsUpdate=!0;let r=f.distanceToTriangle(p,m,g);if(r<v&&(h.copy(m),_&&_.copy(g),v=r,y=t,b=x),r<a)return!0}}}})}{let o=cd(t);for(let t=0,s=o;t<s;t++){Gd(p,3*t,d,u),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let n=r,o=r+i;n<o;n++){let r=e.resolveTriangleIndex(n);Gd(f,3*r,l,c),f.needsUpdate=!0;let i=f.distanceToTriangle(p,m,g);if(i<v&&(h.copy(m),_&&_.copy(g),v=i,y=n,b=t),i<a)return!0}}}}}),Ed.releasePrimitive(f),Ed.releasePrimitive(p),v===1/0?null:(r.point?r.point.copy(h):r.point=h.clone(),r.distance=v,r.faceIndex=y,i&&(i.point?i.point.copy(_):i.point=_.clone(),i.point.applyMatrix4(If),h.applyMatrix4(If),i.distance=h.sub(i.point).length(),i.faceIndex=b),r)}function Wf(e,t,n){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(n.ray.origin),e.object=t,e)}var Gf=new Td,Kf=new Sr,qf=new Y,Jf=new Z,Yf=new Y,Xf=[`getX`,`getY`,`getZ`],Zf=class e extends hd{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,r=e._roots,i=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=r.map(e=>e.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=i?i.slice():null):(o.roots=r,o.index=a?a.array:null,o.indirectBuffer=i),o}static deserialize(t,n,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:i,roots:a,indirectBuffer:o}=t;t.version||(console.warn(`MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data.`),c(a));let s=new e(n,{...r,[iu]:!0});if(s._roots=a,s._indirectBuffer=o||null,r.setIndex){let e=n.getIndex();if(e===null){let e=new Xn(t.index,1,!1);n.setIndex(e)}else e.array!==i&&(e.array.set(i),e.needsUpdate=!0)}return s;function c(e){for(let t=0;t<e.length;t++){let n=e[t],r=new Uint32Array(n),i=new Uint16Array(n);for(let e=0,t=n.byteLength/32;e<t;e++){let t=8*e;fu(2*t,i)||(r[t+6]=r[t+6]/8-e)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn(`MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.`),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=(i?i[e]:e)*3,c=s+0,l=s+1,u=s+2;o&&(c=o[c],l=o[l],u=o[u]);for(let e=0;e<3;e++){let r=a[Xf[e]](c),i=a[Xf[e]](l),o=a[Xf[e]](u),s=r;i<s&&(s=i),o<s&&(s=o);let d=r;i>d&&(d=i),o>d&&(d=o),t[n+e]=s,t[n+e+3]=d}return t}computePrimitiveBounds(e,t,n){let r=this.geometry,i=this._indirectBuffer,a=r.attributes.position,o=r.index?r.index.array:null,s=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw Error(`MeshBVH: compute triangle bounds range is invalid.`);let c=a.array,l=a.offset||0,u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);let d=[`getX`,`getY`,`getZ`],f=n.offset;for(let r=e,p=e+t;r<p;r++){let e=(i?i[r]:r)*3,t=(r-f)*6,p=e+0,m=e+1,h=e+2;o&&(p=o[p],m=o[m],h=o[h]),s||(p=p*u+l,m=m*u+l,h=h*u+l);for(let e=0;e<3;e++){let r,i,o;s?(r=a[d[e]](p),i=a[d[e]](m),o=a[d[e]](h)):(r=c[p+e],i=c[m+e],o=c[h+e]);let l=r;i<l&&(l=i),o<l&&(l=o);let u=r;i>u&&(u=i),o>u&&(u=o);let f=(u-l)/2,g=e*2;n[t+g+0]=l+f,n[t+g+1]=f+(Math.abs(l)+f)*ru}}return n}raycastObject3D(e,t,n=[]){let{material:r}=e;if(r===void 0)return;Jf.copy(e.matrixWorld).invert(),Kf.copy(t.ray).applyMatrix4(Jf),Yf.setFromMatrixScale(e.matrixWorld),qf.copy(Kf.direction).multiply(Yf);let i=qf.length(),a=t.near/i,o=t.far/i;if(t.firstHitOnly===!0){let i=this.raycastFirst(Kf,r,a,o);i=Wf(i,e,t),i&&n.push(i)}else{let i=this.raycast(Kf,r,a,o);for(let r=0,a=i.length;r<a;r++){let a=Wf(i[r],e,t);a&&n.push(a)}}return n}refit(e=null){return(this.indirect?Sf:Yd)(this,e)}raycast(e,t=0,n=0,r=1/0){let i=this._roots,a=[],o=this.indirect?Cf:ef;for(let s=0,c=i.length;s<c;s++)o(this,s,t,e,a,n,r);return a}raycastFirst(e,t=0,n=0,r=1/0){let i=this._roots,a=null,o=this.indirect?Ef:rf;for(let s=0,c=i.length;s<c;s++){let i=o(this,s,t,e,n,r);i!=null&&(a==null||i.distance<a.distance)&&(a=i)}return a}intersectsGeometry(e,t){let n=!1,r=this._roots,i=this.indirect?Pf:ff;for(let a=0,o=r.length;a<o&&(n=i(this,a,e,t),!n);a++);return n}shapecast(e){let t=Ed.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?$d:Jd});return Ed.releasePrimitive(t),n}bvhcast(t,n,r){let{intersectsRanges:i,intersectsTriangles:a}=r,o=Ed.getPrimitive(),s=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?e=>{let t=this.resolveTriangleIndex(e);Gd(o,t*3,s,c)}:e=>{Gd(o,e*3,s,c)},u=Ed.getPrimitive(),d=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?e=>{let n=t.resolveTriangleIndex(e);Gd(u,n*3,d,f)}:e=>{Gd(u,e*3,d,f)};if(a){if(!(t instanceof e))throw Error(`MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.`);let r=(e,t,r,i,s,c,d,f)=>{for(let m=r,h=r+i;m<h;m++){p(m),u.a.applyMatrix4(n),u.b.applyMatrix4(n),u.c.applyMatrix4(n),u.needsUpdate=!0;for(let n=e,r=e+t;n<r;n++)if(l(n),o.needsUpdate=!0,a(o,u,n,m,s,c,d,f))return!0}return!1};if(i){let e=i;i=function(t,n,i,a,o,s,c,l){return e(t,n,i,a,o,s,c,l)?!0:r(t,n,i,a,o,s,c,l)}}else i=r}return super.bvhcast(t,n,{intersectsRanges:i})}intersectsBox(e,t){return Gf.set(e.min,e.max,t),Gf.needsUpdate=!0,this.shapecast({intersectsBounds:e=>Gf.intersectsBox(e),intersectsTriangle:e=>Gf.intersectsTriangle(e)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},i=0,a=1/0){return(this.indirect?Uf:xf)(this,e,t,n,r,i,a)}closestPointToPoint(e,t={},n=0,r=1/0){return kd(this,e,t,n,r)}},Qf={Mesh:Fr.prototype.raycast,Line:vi.prototype.raycast,LineSegments:Si.prototype.raycast,LineLoop:Ci.prototype.raycast,Points:ki.prototype.raycast,BatchedMesh:li.prototype.raycast},$f=new Fr,ep=[];function tp(e,t){if(this.isBatchedMesh)np.call(this,e,t);else{let{geometry:n}=this;if(n.boundsTree)n.boundsTree.raycastObject3D(this,e,t);else{let n;if(this instanceof Fr)n=Qf.Mesh;else if(this instanceof Si)n=Qf.LineSegments;else if(this instanceof Ci)n=Qf.LineLoop;else if(this instanceof vi)n=Qf.Line;else if(this instanceof ki)n=Qf.Points;else throw Error(`BVH: Fallback raycast function not found.`);n.call(this,e,t)}}}function np(e,t){if(this.boundsTrees){let n=this.boundsTrees,r=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,a=this.matrixWorld;$f.material=this.material,$f.geometry=this.geometry;let o=$f.geometry.boundsTree,s=$f.geometry.drawRange;$f.geometry.boundingSphere===null&&($f.geometry.boundingSphere=new rr);for(let o=0,s=r.length;o<s;o++){if(!this.getVisibleAt(o))continue;let s=r[o].geometryIndex;if($f.geometry.boundsTree=n[s],this.getMatrixAt(o,$f.matrixWorld).premultiply(a),!$f.geometry.boundsTree){this.getBoundingBoxAt(s,$f.geometry.boundingBox),this.getBoundingSphereAt(s,$f.geometry.boundingSphere);let e=i[s];$f.geometry.setDrawRange(e.start,e.count)}$f.raycast(e,ep);for(let e=0,n=ep.length;e<n;e++){let n=ep[e];n.object=this,n.batchId=o,t.push(n)}ep.length=0}$f.geometry.boundsTree=o,$f.geometry.drawRange=s,$f.material=null,$f.geometry=null}else Qf.BatchedMesh.call(this,e,t)}function rp(e={}){let{type:t=Zf}=e;return this.boundsTree=new t(this,e),this.boundsTree}function ip(){this.boundsTree=null}var ap=.5,op=16,sp=1<<27,cp=768,lp=5,up={ao:!1,cavity:!1,outline:!1,smoothEdges:!1,scale:1},dp=Math.hypot(30,40,21),fp=30/dp,pp=40/dp,mp=21/dp,hp=Math.hypot(-.62,-.3,.72),gp=-.62/hp,_p=-.3/hp,vp=.72/hp,yp=Math.hypot(gp,_p,vp+1),bp=gp/yp,xp=_p/yp,Sp=(vp+1)/yp,Cp=Math.hypot(fp,pp,mp+1);fp/Cp,pp/Cp,(mp+1)/Cp;var wp=.1,Tp=.12,Ep=.7,Dp=.1,Op=.08,kp=1.6,Ap=40,jp=8,Mp=3,Np=10,Pp=2.5,Fp=.85,Ip=.35,Lp=.3,Rp=.45,zp=.14,Bp=.38,Vp=.4,Hp=[28,42,61],Up=.62,Wp={mode:0,keyX:fp,keyY:pp,keyZ:mp,key:Ep,fill:Dp,ambLow:wp,ambUp:Tp,head:Op,wrap:0,specScale:1,aoRadius:kp,aoGain:Mp,aoAmbient:Fp,aoKey:Ip,cavRadius:.09,cavScale:Lp,cavDark:Rp,cavLight:zp,outline:Bp,shadow:0,shadowLength:3,exposure:1,contrast:0,curvFull:2.5,zebra:14,backDim:.5,classes:[null,null,null,null,null]},Gp=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;Gp[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}var Kp=4096,qp=1.6,Jp=4095/qp;function Yp(e){let t=new Uint8Array(Kp),n=e<-1?-1:e>1?1:e;for(let e=0;e<Kp;e++){let r=e/4095*qp;r>.8&&(r=.8+.2*(1-Math.exp(-(r-.8)/.2)));let i=r<=.0031308?12.92*r:1.055*r**(1/2.4)-.055;n>0?i+=(i*i*(3-2*i)-i)*n*1.6:n<0&&(i+=(.5-i)*-n*.6),t[e]=Math.round(255*(i<0?0:i>1?1:i))}return t}var Xp=Yp(0),Zp=new Float32Array(768);{let e=[[0,29,63,168],[.25,63,143,224],[.5,217,217,212],[.75,242,154,58],[1,198,34,28]];for(let t=0;t<256;t++){let n=t/255,r=0;for(;r<e.length-2&&n>e[r+1][0];)r++;let i=e[r],a=e[r+1],o=(n-i[0])/(a[0]-i[0]);for(let e=0;e<3;e++)Zp[t*3+e]=Gp[Math.round(i[e+1]+(a[e+1]-i[e+1])*o)]}}var Qp=new Float32Array(256);{let e=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let t=0;t<16;t++){let n=e[t]/16*Math.PI*2;for(let r=0;r<jp;r++){let i=Math.sqrt((r+.5+e[t]/16-.5)/jp),a=r*2.399963+n;Qp[(t*jp+r)*2]=Math.cos(a)*i,Qp[(t*jp+r)*2+1]=Math.sin(a)*i}}}function $p(e,t){let n=new Float32Array(e.length);for(let r=0;r+2<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;n[i]+=p,n[i+1]+=m,n[i+2]+=h,n[a]+=p,n[a+1]+=m,n[a+2]+=h,n[o]+=p,n[o+1]+=m,n[o+2]+=h}for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2])||1;n[e]/=t,n[e+1]/=t,n[e+2]/=t}return n}var em=class{width=0;height=0;depth=new Float32Array;beginLayer(e){e.linearize(),this.begin(e.width,e.height,e.fx/e.hw,e.fy/e.hh),this.setClip(e.clipPlane);let t=e.depth,n=this.depth;for(let e=0;e<n.length;e++){let r=t[e];n[e]=r>0?1/r:0}}compositeOnto(e,t){let n=this.width,r=n*this.height,i=this.alb,a=this.nrm,o=this.out,s=e.out;if(s.length!==o.length)return;let c=t<0?0:t>1?1:t;for(let e=0;e<r;e++){if(i[e]===0)continue;let t=a[e],l=(t&1023)-512,u=(t>>>10&1023)-512,d=(t>>>20&1023)-512,f=d>0?d/Math.sqrt(l*l+u*u+d*d):0;f=1-f;let p=c+(1-c)*Vp*f*f,m=e%n;(m>0&&i[e-1]===0||m<n-1&&i[e+1]===0||e>=n&&i[e-n]===0||e+n<r&&i[e+n]===0)&&(p*=.5);let h=e*4,g=s[h+3]/255*(1-p),_=p+g;s[h]=(o[h]*p+s[h]*g)/_,s[h+1]=(o[h+1]*p+s[h+1]*g)/_,s[h+2]=(o[h+2]*p+s[h+2]*g)/_,s[h+3]=_*255}}nrm=new Uint32Array;alb=new Uint32Array;wire=new Uint8Array;aux=new Uint8Array;hasAux=!1;ao=new Uint8Array;aoTmp=new Uint16Array;aoKeyR=-1;aoKeyG=-1;sh=new Uint8Array;hasShadow=!1;clipPlane=null;cA0=0;cAx=0;cAy=0;cD=0;out=new Uint8ClampedArray;out32=new Uint32Array;linear=!1;hasWire=!1;hasAO=!1;edges=[];hw=0;hh=0;fx=1;fy=1;SX=new Int32Array(1024);SY=new Int32Array(1024);IW=new Float32Array(1024);NX=new Float32Array(1024);NY=new Float32Array(1024);NZ=new Float32Array(1024);CR=new Uint8Array(3072);FL=new Uint8Array(1024);nv=0;extraV=0;extraI=[];AX=new Uint8Array(1024);cur=null;curAlb=0;curBack=0;curColored=!1;curAux=!1;matKeys=[];matEmis=new Float32Array(768);matSpec=new Float32Array(65536);matCls=new Uint8Array(256);matSide=new Uint8Array(256);prepLook=null;prepMats=-1;pSpec=new Float32Array;pLut=new Int32Array(256);pLuts=new Float32Array;pWrap=new Float32Array(256);pFres=new Float32Array(256);pDim=new Float32Array(256);pTone=Xp;pToneC=0;preview=new Uint8ClampedArray;previewWidth=0;previewHeight=0;begin(e,t,n,r){e=Math.max(1,e|0),t=Math.max(1,t|0);let i=e*t;this.width!==e||this.height!==t||this.depth.length!==i?(this.width=e,this.height=t,this.depth=new Float32Array(i),this.nrm=new Uint32Array(i),this.alb=new Uint32Array(i),this.out=new Uint8ClampedArray(i*4),this.out32=new Uint32Array(this.out.buffer),this.wire.length&&(this.wire=new Uint8Array(i)),this.aux.length&&(this.aux=new Uint8Array(i))):(this.depth.fill(0),this.alb.fill(0),this.hasWire&&this.wire.fill(0),this.hasAux&&this.aux.fill(0)),this.hw=e/2,this.hh=t/2,this.fx=n*this.hw,this.fy=r*this.hh,this.linear=!1,this.hasWire=!1,this.hasAO=!1,this.hasAux=!1,this.hasShadow=!1,this.aoKeyR=-1,this.clipPlane=null,this.prepMats=-1,this.matKeys.length=0,this.edges.length=0,this.cur=null}setClip(e){this.clipPlane=e&&e.length>=4?[e[0],e[1],e[2],e[3]]:null;let t=this.clipPlane;t&&(this.cAx=t[0]/this.fx,this.cAy=-t[1]/this.fy,this.cA0=t[0]*(.5-this.hw)/this.fx-t[1]*(.5-this.hh)/this.fy-t[2],this.cD=t[3])}material(e,t,n=0,r=0){let i=Math.max(.2,Math.min(1,Math.round(t*20)/20)),a=((e*32+Math.round(i*20))*8+n)*4+r,o=this.matKeys.indexOf(a);if(o>=0)return o+1;if(this.matKeys.length>=255)return 255;o=this.matKeys.length,this.matKeys.push(a);let s=o+1;this.matCls[s]=n,this.matSide[s]=r,this.matEmis[s*3]=Gp[e>>16&255],this.matEmis[s*3+1]=Gp[e>>8&255],this.matEmis[s*3+2]=Gp[e&255];let c=8/(i*i),l=Math.min(.3,.05*(c+8)/8*Ep),u=this.matSpec,d=s*256;for(let e=0;e<256;e++){let t=l*(e/255)**c;u[d+e]=t>1e-5?t:0}return s}reserve(e){if(this.SX.length>=e)return;let t=this.SX.length;for(;t<e;)t*=2;let n=e=>{let n=new Int32Array(t);return n.set(e),n},r=e=>{let n=new Float32Array(t);return n.set(e),n};this.SX=n(this.SX),this.SY=n(this.SY),this.IW=r(this.IW),this.NX=r(this.NX),this.NY=r(this.NY),this.NZ=r(this.NZ);let i=new Uint8Array(t);i.set(this.FL),this.FL=i;let a=new Uint8Array(t*3);a.set(this.CR),this.CR=a;let o=new Uint8Array(t);o.set(this.AX),this.AX=o}setMesh(e){let t=e.positions,n=e.normals,r=Math.floor(t.length/3);this.reserve(r+64),this.cur=e,this.nv=r,this.extraV=0,this.extraI.length=0;let i=e.modelView,a=this.hw,o=this.hh,s=this.fx,c=this.fy,l=i[0],u=i[1],d=i[2],f=i[4],p=i[5],m=i[6],h=i[8],g=i[9],_=i[10],v=i[12],y=i[13],b=i[14],x=this.SX,S=this.SY,C=this.IW,w=this.NX,T=this.NY,E=this.NZ,D=this.FL,O=n.length>=r*3;for(let e=0,i=0;e<r;e++,i+=3){let r=t[i],k=t[i+1],A=t[i+2],j=-(d*r+m*k+_*A+b);if(j>.5){let t=1/j,n=Math.round((a+s*(l*r+f*k+h*A+v)*t)*op),i=Math.round((o-c*(u*r+p*k+g*A+y)*t)*op);n>sp?n=sp:n<-134217728&&(n=-134217728),i>sp?i=sp:i<-134217728&&(i=-134217728),x[e]=n,S[e]=i,C[e]=t,D[e]=0}else D[e]=1;if(O){let t=n[i],r=n[i+1],a=n[i+2],o=l*t+f*r+h*a,s=u*t+p*r+g*a,c=d*t+m*r+_*a,v=o*o+s*s+c*c;if(v>0){let t=1/Math.sqrt(v);w[e]=o*t,T[e]=s*t,E[e]=c*t}else w[e]=0,T[e]=0,E[e]=1}else w[e]=0,T[e]=0,E[e]=1}let k=e.colors&&e.colors.length>=r*3?e.colors:null;this.curColored=k!==null,k&&this.CR.set(k.subarray(0,r*3));let A=k?0:(e.cls??0)%lp,j=e.emissive??0,M=e.roughness??.5,N=this.material(j,M,A,0),P=e.color,F=P>>16&255|P&65280|(P&255)<<16;this.curAlb=(F|N<<24)>>>0,this.curBack=this.clipPlane?(F|this.material(j,M,A,e.cull?2:1)<<24)>>>0:this.curAlb;let I=e.aux&&e.aux.length>=r?e.aux:null;this.curAux=I!==null,I&&(this.AX.set(I.subarray(0,r)),this.hasAux||=(this.aux.length===this.width*this.height?this.aux.fill(0):this.aux=new Uint8Array(this.width*this.height),!0)),e.wire&&(this.wire.length!==this.width*this.height&&(this.wire=new Uint8Array(this.width*this.height)),this.hasWire=!0)}get triangleCount(){return this.cur?Math.floor(this.cur.index.length/3):0}drawTriangles(e=0,t=this.triangleCount){let n=this.cur;if(!n||this.linear)return;let r=Math.min(t,this.triangleCount)*3;for(let t=e*3;t<r;t+=cp)this.scan(n.index,t,t+cp<r?t+cp:r,!0);if(this.extraI.length){let e=this.extraI.slice();this.extraI.length=0,this.scan(e,0,e.length,!1),this.extraV=0}}clip(e,t,n){let r=this.cur,i=r.positions,a=r.modelView;this.reserve(this.nv+this.extraV+4);let o=this.SX,s=this.SY,c=this.IW,l=this.NX,u=this.NY,d=this.NZ,f=this.CR,p=this.FL,m=this.AX,h=[e,t,n],g=[0,0,0],_=[0,0,0],v=[0,0,0];for(let e=0;e<3;e++){let t=h[e]*3,n=i[t],r=i[t+1],o=i[t+2];g[e]=a[0]*n+a[4]*r+a[8]*o+a[12],_[e]=a[1]*n+a[5]*r+a[9]*o+a[13],v[e]=-(a[2]*n+a[6]*r+a[10]*o+a[14])}let y=[];for(let e=0;e<3;e++){let t=(e+1)%3,n=h[e],r=h[t],i=p[n]===0,a=p[r]===0;if(i&&y.push(n),i!==a){let n=i?e:t,r=i?t:e,a=h[n],b=h[r],x=(v[n]-ap)/(v[n]-v[r]),S=this.nv+this.extraV++,C=g[n]+(g[r]-g[n])*x,w=_[n]+(_[r]-_[n])*x,T=1/ap,E=Math.round((this.hw+this.fx*C*T)*op),D=Math.round((this.hh-this.fy*w*T)*op);if(E<=sp?E<-134217728&&(E=-134217728):E=sp,D<=sp?D<-134217728&&(D=-134217728):D=sp,o[S]=E,s[S]=D,c[S]=T,p[S]=0,l[S]=l[a]+(l[b]-l[a])*x,u[S]=u[a]+(u[b]-u[a])*x,d[S]=d[a]+(d[b]-d[a])*x,this.curColored)for(let e=0;e<3;e++)f[S*3+e]=f[a*3+e]+(f[b*3+e]-f[a*3+e])*x;this.curAux&&(m[S]=m[a]+(m[b]-m[a])*x),y.push(S)}}for(let e=2;e<y.length;e++)this.extraI.push(y[0],y[e-1],y[e])}scan(e,t,n,r){let i=this.width,a=this.height,o=this.depth,s=this.nrm,c=this.alb,l=this.wire,u=this.aux,d=this.SX,f=this.SY,p=this.IW,m=this.NX,h=this.NY,g=this.NZ,_=this.CR,v=this.FL,y=this.AX,b=this.clipPlane!==null,x=this.cA0,S=this.cAx,C=this.cAy,w=this.cD,T=this.cur.cull===!0&&!b,E=this.cur.wire===!0&&this.hasWire,D=this.curColored,O=this.curAlb,k=this.curBack,A=this.hasAux,j=this.curAux;for(let M=t;M+2<n;M+=3){let t=e[M],n=e[M+1],N=e[M+2];if(v[t]|v[n]|v[N]){r&&!(v[t]&v[n]&v[N])&&(this.clip(t,n,N),d=this.SX,f=this.SY,p=this.IW,m=this.NX,h=this.NY,g=this.NZ,_=this.CR,v=this.FL,y=this.AX);continue}let P=d[t],F=f[t],I=d[n],L=f[n],ee=d[N],te=f[N],ne=(I-P)*(te-F)-(L-F)*(ee-P);if(ne===0)continue;let re=1;if(ne>0){if(T)continue;re=-1}else{let e=I,t=L,r=n;I=ee,L=te,n=N,ee=e,te=t,N=r,ne=-ne}let ie=P<I?P:I,R=P>I?P:I,z=F<L?F:L,B=F>L?F:L;ee<ie?ie=ee:ee>R&&(R=ee),te<z?z=te:te>B&&(B=te);let ae=ie+7>>4,oe=R-8>>4,se=z+7>>4,ce=B-8>>4;if(ae<0&&(ae=0),se<0&&(se=0),oe>=i&&(oe=i-1),ce>=a&&(ce=a-1),ae>oe||se>ce)continue;let le=I-P,ue=L-F,de=ee-I,fe=te-L,pe=P-ee,me=F-te,he=ae*op+8,ge=se*op+8,_e=le*(ge-F)-ue*(he-P),ve=de*(ge-L)-fe*(he-I),ye=pe*(ge-te)-me*(he-ee),be=ue<0||ue===0&&le>0?0:1,xe=fe<0||fe===0&&de>0?0:1,Se=me<0||me===0&&pe>0?0:1,Ce=ue*op,we=fe*op,Te=me*op,Ee=le*op,De=de*op,V=pe*op,Oe=1/ne,ke=p[t],Ae=p[n]-ke,H=p[N]-ke,je=m[t]*re,U=h[t]*re,W=g[t]*re,Me=m[n]*re-je,Ne=h[n]*re-U,Pe=g[n]*re-W,Fe=m[N]*re-je,Ie=h[N]*re-U,Le=g[N]*re-W,Re=0,ze=0,Be=0;E&&(Re=1/(op*Math.sqrt(le*le+ue*ue)||1),ze=1/(op*Math.sqrt(de*de+fe*fe)||1),Be=1/(op*Math.sqrt(pe*pe+me*me)||1));let Ve=t*3,He=n*3,Ue=N*3,We=re===1?O:k,Ge=(We&4278190080)>>>0,Ke=y[t],qe=y[n]-Ke,Je=y[N]-Ke;for(let e=se;e<=ce;e++){let t=x+C*e-S*e*i,n=_e,r=ve,a=ye,d=!1;for(let f=e*i+ae,p=f+(oe-ae);f<=p;f++){if(n>=be&&r>=xe&&a>=Se){d=!0;let e=a*Oe,i=n*Oe,p=ke+e*Ae+i*H;if(p>o[f]&&(!b||t+S*f+w*p<=0)){if(o[f]=p,s[f]=(je+e*Me+i*Fe)*511+512|0|((U+e*Ne+i*Ie)*511+512|0)<<10|((W+e*Pe+i*Le)*511+512|0)<<20,D){let t=1-e-i;c[f]=(_[Ve]*t+_[He]*e+_[Ue]*i|0|(_[Ve+1]*t+_[He+1]*e+_[Ue+1]*i|0)<<8|(_[Ve+2]*t+_[He+2]*e+_[Ue+2]*i|0)<<16|Ge)>>>0}else c[f]=We;if(j?u[f]=Ke+e*qe+i*Je:A&&(u[f]=0),E){let e=n*Re,t=r*ze,i=a*Be;t<e&&(e=t),i<e&&(e=i),l[f]=e>=1.1?0:e<=.35?255:(1.1-e)*340|0}else this.hasWire&&(l[f]=0)}}else if(d)break;n-=Ce,r-=we,a-=Te}_e+=Ee,ve+=De,ye+=V}}}linearize(){if(this.linear)return;let e=this.depth;for(let t=0;t<e.length;t++){let n=e[t];n>0&&(e[t]=1/n)}this.linear=!0;let t=this.clipPlane;if(!t)return;let n=this.width,r=this.alb,i=this.nrm,a=this.matSide,o=this.cA0,s=this.cAx,c=this.cAy,l=this.cD,u=t[2]<0?-1:1,d=(t[0]*u*511+512|0|(t[1]*u*511+512|0)<<10|(t[2]*u*511+512|0)<<20)>>>0;for(let t=0;t<e.length;t++){if(e[t]===0||a[r[t]>>>24]!==2)continue;let u=t%n,f=(t-u)/n,p=o+s*u+c*f,m=p===0?0:-l/p;m>.25&&m<=e[t]&&(e[t]=m),i[t]=d}}computeAO(e=0,t=this.height,n=Wp){this.linearize();let r=this.width+1>>1,i=this.height+1>>1;this.ao.length!==r*i&&(this.ao=new Uint8Array(r*i),this.aoTmp=new Uint16Array(r*i)),(this.aoKeyR!==n.aoRadius||this.aoKeyG!==n.aoGain)&&(this.hasAO=!1,this.aoKeyR=n.aoRadius,this.aoKeyG=n.aoGain);for(let a=e+1>>1,o=Math.min(i,t+1>>1);a<o;a++)this.aoRow(a,r,n.aoRadius,n.aoGain)}aoValid(e=Wp){return this.hasAO&&this.aoKeyR===e.aoRadius&&this.aoKeyG===e.aoGain}aoRow(e,t,n,r){let i=this.width,a=this.height,o=this.depth,s=this.nrm,c=this.ao,l=Qp,u=this.hw,d=this.hh,f=this.fy,p=1/this.fx,m=1/this.fy,h=e*2,g=-(h+.5-d)*m,_=(e&3)<<2;for(let v=0,y=h*i,b=e*t;v<t;v++,y+=2,b++){let e=o[y];if(!(e>0)){c[b]=255;continue}let t=n*f/e;if(t>Ap&&(t=Ap),t<2){c[b]=255;continue}let x=t*e/f,S=1/(x*x),C=.03*x,w=s[y],T=(w&1023)-512,E=(w>>>10&1023)-512,D=(w>>>20&1023)-512,O=1/Math.sqrt(T*T+E*E+D*D||1);T*=O,E*=O,D*=O;let k=v*2,A=(k+.5-u)*e*p,j=g*e,M=0;for(let n=(v&3|_)*jp*2,r=n+16;n<r;n+=2){let r=(k+l[n]*t+1024.5|0)-1024,s=(h+l[n+1]*t+1024.5|0)-1024;if(r<0||s<0||r>=i||s>=a)continue;let c=o[s*i+r];if(!(c>0))continue;let f=(r+.5-u)*c*p-A,g=-(s+.5-d)*c*m-j,_=e-c,v=(f*f+g*g+_*_)*S;if(v>=1||v===0)continue;let y=f*T+g*E+_*D-C;y>0&&(M+=y/(x*Math.sqrt(v))*(1-v))}let N=1-M*r/jp;c[b]=N<=0?0:N*255|0}}computeShadow(e,t=0,n=this.height){this.linearize();let r=this.width,i=this.height,a=r+1>>1,o=i+1>>1;this.sh.length!==a*o&&(this.sh=new Uint8Array(a*o)),this.aoTmp.length!==a*o&&(this.aoTmp=new Uint16Array(a*o)),this.hasShadow=!1;let s=this.depth,c=this.sh,l=this.fy,u=e.keyX,d=e.keyY,f=e.keyZ,p=e.shadowLength,m=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let e=t+1>>1,h=Math.min(o,n+1>>1);e<h;e++){let t=e*2;for(let n=0,o=t*r,h=e*a;n<a;n++,o+=2,h++){let a=s[o];if(!(a>0)){c[h]=255;continue}let g=n*2,_=l/a,v=(m[n&3|(e&3)<<2]+.5)/16,y=0;for(let e=0;e<Np;e++){let n=(e+v)/Np,o=p*n*(.35+.65*n),c=g+u*o*_+.5|0,l=t-d*o*_+.5|0;if(c<0||l<0||c>=r||l>=i)break;let m=s[l*r+c];if(!(m>0))continue;let h=a-f*o-m,b=.03+.06*o;if(h>b&&h<Pp){let e=(h-b)/(.05+.1*o);if(e>=1){y=1;break}e>y&&(y=e)}}c[h]=(1-y)*255|0}}}blurShadow(){this.blurHalf(this.sh),this.hasShadow=!0}blurAO(){this.blurHalf(this.ao),this.hasAO=!0}blurHalf(e){let t=this.width+1>>1,n=this.height+1>>1,r=this.aoTmp;if(e.length===t*n&&r.length===t*n){for(let i=0;i<n;i++){let n=i*t;for(let i=0;i<t;i++){let a=i>=2?i-2:0,o=i>=1?i-1:0,s=i+1<t?i+1:t-1;r[n+i]=e[n+a]+e[n+o]+e[n+i]+e[n+s]}}for(let i=0;i<n;i++){let a=(i>=2?i-2:0)*t,o=(i>=1?i-1:0)*t,s=i*t,c=(i+1<n?i+1:n-1)*t;for(let n=0;n<t;n++)e[s+n]=r[a+n]+r[o+n]+r[s+n]+r[c+n]+8>>4}}}prepare(e){let t=this.matKeys.length;if(this.prepLook===e&&this.prepMats===t)return;this.prepLook=e,this.prepMats=t,this.pSpec.length!==65536&&(this.pSpec=new Float32Array(65536)),this.pLuts.length!==lp*1024&&(this.pLuts=new Float32Array(lp*1024));for(let t=0;t<lp;t++){let n=e.classes[t]?.lut;n&&n.length>=1024&&this.pLuts.set(n.subarray(0,1024),t*1024)}let n=this.pSpec,r=this.matSpec;for(let i=1;i<=t;i++){let t=this.matCls[i],a=this.matSide[i],o=e.classes[t]??null,s=i*256;if(this.pLut[i]=o?.lut?t*1024:-1,this.pWrap[i]=o?o.wrap:e.wrap,this.pFres[i]=o?o.fresnel:0,this.pDim[i]=a===1?1-e.backDim:1,a===2){for(let e=0;e<256;e++)n[s+e]=0;continue}let c=o?.spec;if(c)for(let t=0;t<256;t++){let r=t/255,i=(c[0]*r**c[1]+c[2]*r**c[3])*e.specScale;n[s+t]=i>1e-5?i:0}else for(let t=0;t<256;t++)n[s+t]=r[s+t]*e.specScale}e.contrast===0?this.pTone=Xp:(this.pTone===Xp||this.pToneC!==e.contrast)&&(this.pTone=Yp(e.contrast),this.pToneC=e.contrast)}shade(e,t=0,n=this.height){this.linearize(),this.prepare(e.look??Wp);for(let r=t;r<n;r++)this.shadeRow(e,r,1,this.out32,r*this.width)}shadePreview(e,t=2){this.linearize(),this.prepare(e.look??Wp);let n=Math.max(1,t|0),r=Math.ceil(this.width/n),i=Math.ceil(this.height/n);this.preview.length!==r*i*4&&(this.preview=new Uint8ClampedArray(r*i*4)),this.previewWidth=r,this.previewHeight=i;let a=new Uint32Array(this.preview.buffer),o={...e,smoothEdges:!1};for(let e=0,t=0;e<this.height;e+=n,t++)this.shadeRow(o,e,n,a,t*r)}shadeRow(e,t,n,r,i){let a=this.width,o=this.height,s=this.depth,c=this.nrm,l=this.alb,u=this.aux,d=e.look??Wp,f=d.mode,p=(a+1>>1)*(o+1>>1),m=e.ao&&this.hasAO&&this.ao.length===p&&(d.aoAmbient>0||d.aoKey>0),h=this.ao,g=this.wire,_=this.hasWire,v=e.shadow===!0&&this.hasShadow&&d.shadow>0&&this.sh.length===p,y=this.sh,b=d.shadow,x=e.outline&&d.outline>0,S=e.smoothEdges,C=this.edges,w=e.cavity&&(d.cavDark>0||d.cavLight>0)||f===1,T=this.matEmis,E=this.pSpec,D=1/this.fy,O=this.pTone,k=this.pLut,A=this.pLuts,j=this.pWrap,M=this.pFres,N=this.pDim,P=this.matSide,F=this.hasAux,I=d.keyX,L=d.keyY,ee=d.keyZ,te=d.key,ne=d.fill,re=d.ambLow,ie=d.ambUp,R=d.head,z=Math.hypot(I,L,ee+1)||1,B=I/z,ae=L/z,oe=(ee+1)/z,se=d.aoAmbient,ce=d.aoKey,le=d.cavScale,ue=d.cavDark,de=d.cavLight,fe=d.cavRadius,pe=d.outline,me=d.exposure,he=127/(d.curvFull||1),ge=d.zebra*.5,_e=Math.max(1,Math.round(e.scale)),ve=_e*a,ye=Gp[Hp[0]],be=Gp[Hp[1]],xe=Gp[Hp[2]];{let e=t>0,d=t<o-1,p=t>=_e,z=t+_e<o,Se=a+1>>1,Ce=(t>>1)*Se,we=t&1?t+2<o?Se:0:t>=2?-Se:0;for(let Se=0,Te=t*a;Se<a;Se+=n,Te+=n,i++){let n=l[Te];if(n===0){r[i]=0,S&&(Se>0&&l[Te-1]!==0||Se<a-1&&l[Te+1]!==0||e&&l[Te-a]!==0||d&&l[Te+a]!==0)&&C.push(Te);continue}let Ee=c[Te],De=(Ee&1023)-512,V=(Ee>>>10&1023)-512,Oe=(Ee>>>20&1023)-512;Oe<0&&(Oe=-Oe);let ke=De*De+V*V+Oe*Oe,Ae=ke>9e3?1/Math.sqrt(ke):0,H=De*Ae,je=V*Ae,U=Ae===0?1:Oe*Ae,W=s[Te],Me=n>>>24,Ne=H*I+je*L+U*ee,Pe=j[Me];Pe>0&&(Ne=(Ne+Pe)/(1+Pe)),Ne<0&&(Ne=0);let Fe=H*gp+je*_p+U*vp;Fe<0&&(Fe=0);let Ie=re+ie*(.5+.5*je)+ne*Fe+R*(U>0?U:0),Le=te*Ne,Re=H*B+je*ae+U*oe,ze=0;if(Re>0){let e=Re<.9999?Re*255:254.97,t=e|0,n=Me*256+t,r=E[n];ze=r+(E[n+1]-r)*(e-t)}if(m||v){let e=Ce+(Se>>1),t=Se&1?+(Se+2<a):Se>=2?-1:0;if(m){let n=1-(h[e]*9+h[e+t]*3+h[e+we]*3+h[e+t+we])*(1/4080),r=se*n,i=ce*n;Ie*=r<1?1-r:0,Le*=i<1?1-i:0,ze*=1-n}if(v){let n=(1-(y[e]*9+y[e+t]*3+y[e+we]*3+y[e+t+we])*(1/4080))*b;Le*=1-n,ze*=1-n}}let Be=me*N[Me],Ve=0;if(x||S||w){let e=W*D;if(x||S){let t=.25+6*e*_e,n=0,r=0,i=!1,o;if(Se>=_e&&(o=s[Te-_e],o===0?i=!0:W-o>n?n=W-o:o-W>r&&(r=o-W)),Se+_e<a&&(o=s[Te+_e],o===0?i=!0:W-o>n?n=W-o:o-W>r&&(r=o-W)),p&&(o=s[Te-ve],o===0?i=!0:W-o>n?n=W-o:o-W>r&&(r=o-W)),z&&(o=s[Te+ve],o===0?i=!0:W-o>n?n=W-o:o-W>r&&(r=o-W)),S&&(i||n>t||r>t)&&C.push(Te),x){let e=n>t?(n-t)/t:0;e>1&&(e=1),i&&e<.7&&(e=.7),Be*=1-pe*e}}if(w){let n=fe/e+.5|0,r=_e,i=(f===1?12:4)*_e;n<r?n=r:n>i&&(n=i);let u=.15+3*n*e,d=De,p=De,m=V,h=V,g,_;if(Se>=n&&(g=Te-n,_=s[g]-W,l[g]!==0&&_<u&&_>-u&&(d=(c[g]&1023)-512)),Se+n<a&&(g=Te+n,_=s[g]-W,l[g]!==0&&_<u&&_>-u&&(p=(c[g]&1023)-512)),t>=n&&(g=Te-n*a,_=s[g]-W,l[g]!==0&&_<u&&_>-u&&(m=(c[g]>>>10&1023)-512)),t+n<o&&(g=Te+n*a,_=s[g]-W,l[g]!==0&&_<u&&_>-u&&(h=(c[g]>>>10&1023)-512)),Ve=(p-d+(m-h))/511/(2*n*e),f!==1){let e=Ve*le;Be*=e<0?1+(e<-1?-1:e)*ue:1+(e>1?1:e)*de}}}let He=Me*3,Ue,We,Ge;if(f===0){let e=(Ie+Le)*Be,r=k[Me];if(r<0)Ue=Gp[n&255]*e,We=Gp[n>>>8&255]*e,Ge=Gp[n>>>16&255]*e;else{let t=r+(F?u[Te]<<2:0);Ue=A[t]*e,We=A[t+1]*e,Ge=A[t+2]*e,ze*=A[t+3]}if(P[Me]===2){let e=((Se+t)/(3*_e)|0)&1?.78:1;Ue*=e,We*=e,Ge*=e}let i=M[Me];if(i>0){let e=1-U,t=e*e*e*i*me;Ue+=t,We+=t,Ge+=t*1.06;let n=H*bp+je*xp+U*Sp;if(n>.5){let e=n<.9999?n*255:254.97,t=e|0,i=Me*256+t,a=E[i];ze+=(a+(E[i+1]-a)*(e-t))*.4*(r<0?1:A[r+(F?u[Te]<<2:0)+3])}}ze*=me,Ue+=ze+T[He],We+=ze+T[He+1],Ge+=ze+T[He+2]}else if(f===1){let e=128+Ve*he+.5|0;e<0?e=0:e>255&&(e=255);let t=Ie+Le;t>1&&(t=1);let n=(.5+.5*t)*(Be<me?.5+Be/me*.5:1)*me,r=e*3;Ue=Zp[r]*n,We=Zp[r+1]*n,Ge=Zp[r+2]*n}else{let e=2*U*je,t=2*U*H,n=(e*.94+t*.34)*ge+64,r=n-(n|0);r=r<.5?r*2:2-r*2;let i=.08,a=(r-.5+i)/(2*i);a<0?a=0:a>1&&(a=1);let o=Ie+Le;o>1.1&&(o=1.1);let s=(.05+.85*a)*(.55+.45*o)*Be;Ue=s,We=s,Ge=s*1.02}if(_){let e=g[Te];if(e!==0){let t=e/255*Up;Ue+=(ye-Ue)*t,We+=(be-We)*t,Ge+=(xe-Ge)*t}}let Ke=Ue*Jp|0,qe=We*Jp|0,Je=Ge*Jp|0;r[i]=(O[Ke<Kp?Ke:4095]|O[qe<Kp?qe:4095]<<8|O[Je<Kp?Je:4095]<<16|4278190080)>>>0}}}finish(){let e=this.edges,t=e.length;if(!t)return;let n=this.width,r=this.height,i=this.out,a=new Uint32Array(t);for(let o=0;o<t;o++){let t=e[o],s=t%n,c=(t-s)/n,l=0,u=0,d=0,f=0,p=0;for(let e=-1;e<=1;e++){let t=c+e;if(!(t<0||t>=r))for(let r=-1;r<=1;r++){let a=s+r;if(a<0||a>=n)continue;let o=(r===0?2:1)*(e===0?2:1),c=(t*n+a)*4,m=i[c+3]*o;l+=i[c]*m,u+=i[c+1]*m,d+=i[c+2]*m,f+=m,p+=o}}a[o]=f>0?(Math.round(l/f)|Math.round(u/f)<<8|Math.round(d/f)<<16|Math.round(f/p)<<24)>>>0:0}let o=this.out32;for(let n=0;n<t;n++)o[e[n]]=a[n];e.length=0}resolve(e){this.linearize();let t=e.look??Wp;e.ao&&!this.aoValid(t)&&(this.computeAO(0,this.height,t),this.blurAO()),e.shadow&&t.shadow>0&&(this.computeShadow(t),this.blurShadow()),this.shade(e),e.smoothEdges&&this.finish()}normalAt(e,t){let n=t*this.width+e;if(!this.alb[n])return null;let r=this.nrm[n],i=(r&1023)-512,a=(r>>>10&1023)-512,o=(r>>>20&1023)-512,s=Math.hypot(i,a,o)||1;return[i/s,a/s,o/s]}covered(e,t){return this.alb[t*this.width+e]!==0}};function tm(e,t,n,r){let i=t>>1,a=n>>1;for(let n=0;n<a;n++)for(let a=0;a<i;a++){let o=(n*2*t+a*2)*4,s=o+4,c=o+t*4,l=c+4,u=(n*i+a)*4,d=e[o+3],f=e[s+3],p=e[c+3],m=e[l+3],h=d+f+p+m;h===0?r[u]=r[u+1]=r[u+2]=r[u+3]=0:(r[u]=(e[o]*d+e[s]*f+e[c]*p+e[l]*m)/h,r[u+1]=(e[o+1]*d+e[s+1]*f+e[c+1]*p+e[l+1]*m)/h,r[u+2]=(e[o+2]*d+e[s+2]*f+e[c+2]*p+e[l+2]*m)/h,r[u+3]=h/4)}}var nm=[`padrao`,`gesso`,`preparo`,`curvatura`,`zebra`,`realista`],rm=[`escuro`,`claro`,`gradiente`],im=[`BL`,`A1`,`A2`,`A3`,`B1`],am={BL:16052972,A1:15656143,A2:15325883,A3:14863779,B1:15657168},om={plaster:14275526,neutral:13618632,ivory:15261642,cervical:14800056,gum:13139066,incisal:12569302},sm=Math.PI/180,cm=(e,t,n,r)=>{let i=typeof e==`number`&&Number.isFinite(e)?e:r;return i<t?t:i>n?n:i},lm={lightElevation:[5,90,1],lightIntensity:[.3,2,.05],occlusion:[0,2,.05],edges:[0,2,.05],exposure:[-1,1,.05],contrast:[-1,1,.05],curvatureScale:[.25,4,.05]},um={padrao:[Math.round(Math.atan2(Wp.keyY,Wp.keyX)/sm),Math.round(Math.asin(Wp.keyZ)/sm)],gesso:[60,40],preparo:[135,12],curvatura:[60,45],zebra:[90,60],realista:[60,35]},dm={padrao:[`Padrão`,`Equilibrada: luz presa à câmera, oclusão de ambiente e realce leve de sulcos.`],gesso:[`Gesso`,`Monocromática e fosca, com luz suave de estúdio. Para ler a forma.`],preparo:[`Preparo em evidência`,`Luz rasante com sombra projetada e realce de arestas. Para ler o término; gire a luz com Alt + arrastar.`],curvatura:[`Curvatura`,`Mapa de cores: convexo em tons quentes, côncavo em tons frios, plano em cinza.`],zebra:[`Zebra`,`Listras de reflexo: revelam irregularidades da superfície.`],realista:[`Realista`,`Gengiva, dentes e cerâmica caracterizados, com a cor da restauração por escala.`]};function fm(e){return{preset:e,lightAzimuth:um[e][0],lightElevation:um[e][1],lightIntensity:1,occlusion:1,edges:1,exposure:0,contrast:0,curvatureScale:1,background:`escuro`,shade:`A2`}}function pm(){return nm.map(e=>({id:e,label:dm[e][0],description:dm[e][1],defaults:fm(e)}))}function mm(e){let t=typeof e==`object`&&e?e:{},n=nm.includes(t.preset)?t.preset:`padrao`,r=fm(n),i=cm(t.lightAzimuth,-1e6,1e6,r.lightAzimuth)%360;return i<0&&(i+=360),{preset:n,lightAzimuth:i,lightElevation:cm(t.lightElevation,lm.lightElevation[0],lm.lightElevation[1],r.lightElevation),lightIntensity:cm(t.lightIntensity,lm.lightIntensity[0],lm.lightIntensity[1],1),occlusion:cm(t.occlusion,lm.occlusion[0],lm.occlusion[1],1),edges:cm(t.edges,lm.edges[0],lm.edges[1],1),exposure:cm(t.exposure,lm.exposure[0],lm.exposure[1],0),contrast:cm(t.contrast,lm.contrast[0],lm.contrast[1],0),curvatureScale:cm(t.curvatureScale,lm.curvatureScale[0],lm.curvatureScale[1],1),background:rm.includes(t.background)?t.background:`escuro`,shade:im.includes(t.shade)?t.shade:`A2`}}function hm(e){let t=fm(`padrao`);return e.preset===`padrao`&&e.lightAzimuth===t.lightAzimuth&&e.lightElevation===t.lightElevation&&e.lightIntensity===1&&e.occlusion===1&&e.edges===1&&e.exposure===0&&e.contrast===0}var gm=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},_m=e=>[gm(e>>16&255),gm(e>>8&255),gm(e&255)],vm=(e,t,n)=>{let r=n<=e?0:n>=t?1:(n-e)/(t-e);return r*r*(3-2*r)};function ym(e,t=1){let n=_m(e),r=new Float32Array(1024);for(let e=0;e<256;e++)r[e*4]=n[0],r[e*4+1]=n[1],r[e*4+2]=n[2],r[e*4+3]=t;return r}function bm(){let e=_m(om.ivory),t=_m(om.cervical),n=_m(om.gum),r=new Float32Array(1024);for(let i=0;i<256;i++){let a=i/255,o=vm(.05,.34,a),s=vm(.3,.62,a);for(let a=0;a<3;a++){let c=e[a]+(t[a]-e[a])*o;r[i*4+a]=c+(n[a]-c)*s}r[i*4+3]=.55+.45*s}return r}function xm(e){let t=am[e],n=_m(t),r=_m(om.incisal),i=new Float32Array(1024),a=[n[0]*.97,n[1]*.9,n[2]*.74];for(let e=0;e<256;e++){let t=e/255,o=1-vm(0,.42,t),s=vm(.55,1,t)*.42;for(let t=0;t<3;t++){let c=n[t]+(a[t]-n[t])*o;i[e*4+t]=c+(r[t]*.9-c)*s}i[e*4+3]=1}return i}var Sm={lut:ym(om.plaster,1),spec:[.02,6,0,1],wrap:.25,fresnel:0},Cm={lut:null,spec:[.03,8,0,1],wrap:.25,fresnel:0},wm={lut:ym(om.neutral,1),spec:[.03,10,.05,60],wrap:0,fresnel:0},Tm={lut:bm(),spec:[.035,10,.3,70],wrap:.2,fresnel:.03},Em={lut:ym(om.gum,1),spec:[.035,10,.3,70],wrap:.25,fresnel:.03},Dm={lut:ym(om.ivory,.55),spec:[.035,10,.3,70],wrap:.2,fresnel:.03},Om=e=>({lut:xm(e),spec:[.08,12,.75,260],wrap:.32,fresnel:.12}),km=(e,t,n,r)=>{let i=[null,null,null,null,null];return i[1]=e,i[2]=t,i[3]=n,i[4]=r,i},Am={padrao:()=>({}),gesso:()=>({key:.6,fill:.16,ambLow:.14,ambUp:.2,head:.06,wrap:.25,aoRadius:2.4,aoGain:3,aoAmbient:.9,aoKey:.3,cavScale:.25,cavDark:.35,cavLight:.08,outline:.3,classes:km(Sm,Cm,Sm,Sm)}),preparo:()=>({key:1,fill:.03,ambLow:.08,ambUp:.09,head:.05,specScale:.5,shadow:.7,shadowLength:3,aoRadius:.6,aoGain:4,aoAmbient:1,aoKey:.45,cavRadius:.07,cavScale:.5,cavDark:.6,cavLight:.3,outline:.3,contrast:.2,classes:km(wm,null,wm,wm)}),curvatura:()=>({mode:1,cavRadius:.12,key:.6,ambLow:.16,ambUp:.2,aoAmbient:.5,aoKey:.2,outline:.3}),zebra:()=>({mode:2,zebra:7,key:.5,ambLow:.2,ambUp:.2,aoAmbient:.4,aoKey:.1,outline:.3}),realista:e=>({key:.74,fill:.12,ambLow:.1,ambUp:.14,head:.1,cavScale:.25,cavDark:.4,cavLight:.06,outline:.3,classes:km(Tm,Om(e),Em,Dm)})},jm=new Map;function Mm(e){let t=mm(e),n=[t.preset,t.lightAzimuth,t.lightElevation,t.lightIntensity,t.occlusion,t.edges,t.exposure,t.contrast,t.curvatureScale,t.preset===`realista`?t.shade:``].join(`|`),r=jm.get(n);if(r)return r;let i={...Wp,...Am[t.preset](t.shade)},a=t.lightElevation*sm,o=t.lightAzimuth*sm,s={...i,keyX:Math.cos(a)*Math.cos(o),keyY:Math.cos(a)*Math.sin(o),keyZ:Math.sin(a),key:i.key*t.lightIntensity,aoAmbient:i.aoAmbient*t.occlusion,aoKey:i.aoKey*t.occlusion,cavDark:Math.min(.95,i.cavDark*t.edges),cavLight:Math.min(.9,i.cavLight*t.edges),exposure:2**t.exposure,contrast:Math.max(-1,Math.min(1,i.contrast+t.contrast)),curvFull:Wp.curvFull/t.curvatureScale};return t.lightAzimuth===um.padrao[0]&&t.lightElevation===um.padrao[1]&&(s.keyX=Wp.keyX,s.keyY=Wp.keyY,s.keyZ=Wp.keyZ),jm.size>400&&jm.clear(),jm.set(n,s),s}function Nm(e){return e.preset===`realista`}function Pm(e,t){let n=Math.min(1,Math.hypot(e,t)),r=n<1e-6?90:Math.atan2(t,e)/sm;r<0&&(r+=360);let i=Math.max(lm.lightElevation[0],Math.min(90,Math.acos(n)/sm));return{azimuth:Math.round(r),elevation:Math.round(i)}}function Fm(e,t){let n=Math.cos(Math.max(0,Math.min(90,t))*sm);return{x:n*Math.cos(e*sm),y:n*Math.sin(e*sm)}}function Im(e,t,n){let[r,i,a,o]=n,s=Math.floor(e.length/3),c=new Float32Array(s);for(let t=0,n=0;t<s;t++,n+=3)c[t]=r*e[n]+i*e[n+1]+a*e[n+2]+o;let l=[],u=(t,n)=>{let r=c[t],i=r/(r-c[n]),a=t*3,o=n*3;l.push(e[a]+(e[o]-e[a])*i,e[a+1]+(e[o+1]-e[a+1])*i,e[a+2]+(e[o+2]-e[a+2])*i)};for(let e=0;e+2<t.length;e+=3){let n=t[e],r=t[e+1],i=t[e+2],a=c[n]>0,o=c[r]>0,s=c[i]>0;(a!==o||o!==s)&&(a!==o&&a!==s?(u(n,r),u(n,i)):o!==a&&o!==s?(u(r,i),u(r,n)):(u(i,n),u(i,r)))}return new Float32Array(l)}function Lm(e,t){let[n,r,i,a]=e,o=t[0]*n+t[4]*r+t[8]*i,s=t[1]*n+t[5]*r+t[9]*i,c=t[2]*n+t[6]*r+t[10]*i,l=Math.hypot(o,s,c)||1,u=-a*n,d=-a*r,f=-a*i,p=t[0]*u+t[4]*d+t[8]*f+t[12],m=t[1]*u+t[5]*d+t[9]*f+t[13],h=t[2]*u+t[6]*d+t[10]*f+t[14];return[o/l,s/l,c/l,-(o*p+s*m+c*h)/l]}var Rm=Math.PI*2,zm=(e,t,n)=>Math.min(n,Math.max(t,e)),Bm=(e,t,n)=>{let r=zm((n-e)/(t-e),0,1);return r*r*(3-2*r)},Vm=Array.from({length:40},(e,t)=>{let n=Math.cos(t/40*Rm);return Math.sign(n)*Math.abs(n)**.77}),Hm=Array.from({length:40},(e,t)=>{let n=Math.sin(t/40*Rm);return Math.sign(n)*Math.abs(n)**.77}),Um=.03,Wm=Math.PI-.03;function Gm(e,t=`Oclusal`){let{X:n,Y:r,Z:i,mesial:a}=e,o=new Y;switch(t){case`Vestibular`:o.copy(i).addScaledVector(r,.35);break;case`Lingual`:o.copy(i).negate().addScaledVector(r,.35);break;case`Mesial`:o.copy(a).addScaledVector(r,.25);break;case`Distal`:o.copy(a).negate().addScaledVector(r,.25);break;default:o.copy(r).addScaledVector(i,.05)}return o.normalize(),{tgt:e.origin.clone().addScaledVector(r,e.H*.6),r:40,th:Math.atan2(o.x,o.z),ph:zm(Math.acos(zm(o.y,-1,1)),Um,Wm)}}function Km(e,t,n=new dt){let r=zm(t,Um,Wm),i=Math.sin(r),a=new Y(i*Math.sin(e),Math.cos(r),i*Math.cos(e));return n.setFromRotationMatrix(new Z().lookAt(a,new Y,new Y(0,1,0)))}var qm=new Y(1,0,0),Jm=new Y(0,1,0),Ym=new Y(0,0,1),Xm=.008,Zm=class{camera=new ro(35,1,.5,3e3);tgt=new Y(0,0,-18);r=120;quat=Km(0,1);goal=null;goalQuat=null;goalOf=null;key=``;v=new Y;q=new dt;get th(){let e=this.v.copy(Ym).applyQuaternion(this.quat);return Math.atan2(e.x,e.z)}set th(e){Km(e,this.ph,this.quat)}get ph(){let e=this.v.copy(Ym).applyQuaternion(this.quat);return Math.acos(zm(e.y,-1,1))}set ph(e){Km(this.th,e,this.quat)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.key=``}rotate(e,t,n){this.goal=null;let r=this.q.setFromAxisAngle(Jm,-e*Xm).multiply(new dt().setFromAxisAngle(qm,-t*Xm));this.turn(r,n)}roll(e,t){this.goal=null,this.turn(this.q.setFromAxisAngle(Ym,e),t)}turn(e,t){if(t){let n=this.quat.clone().multiply(e).multiply(this.quat.clone().invert());this.tgt.sub(t).applyQuaternion(n).add(t)}this.quat.multiply(e).normalize()}pan(e,t){this.goal=null;let n=this.r*.0016,r=new Y().copy(qm).applyQuaternion(this.quat),i=new Y().copy(Jm).applyQuaternion(this.quat);this.tgt.addScaledVector(r,-e*n).addScaledVector(i,t*n)}zoom(e,t){this.goal=null;let n=zm(this.r*Math.exp(e*.0012),6,800),r=n/this.r;t&&r!==1&&this.tgt.sub(t).multiplyScalar(r).add(t),this.r=n}jump(e){this.tgt.copy(e.tgt),this.r=e.r,Km(e.th,e.ph,this.quat),this.goal=null}update(e=1/60){let t=this.goal;if(t){(this.goalOf!==t||!this.goalQuat)&&(this.goalQuat=Km(t.th,t.ph),this.goalOf=t);let n=1-.84**zm(e*60,.25,6);this.tgt.lerp(t.tgt,n),this.r+=(t.r-this.r)*n,this.quat.slerp(this.goalQuat,n),this.quat.angleTo(this.goalQuat)<.001&&Math.abs(t.r-this.r)<.05&&this.tgt.distanceTo(t.tgt)<.02&&this.jump(t)}this.camera.quaternion.copy(this.quat),this.camera.position.copy(Ym).applyQuaternion(this.quat).multiplyScalar(this.r).add(this.tgt),this.camera.updateMatrixWorld(!0);let n=this.quat,r=`${this.tgt.x.toFixed(4)},${this.tgt.y.toFixed(4)},${this.tgt.z.toFixed(4)},${this.r.toFixed(3)},${n.x.toFixed(6)},${n.y.toFixed(6)},${n.z.toFixed(6)},${n.w.toFixed(6)}`,i=r!==this.key;return this.key=r,i}get animating(){return this.goal!==null}},Qm=!1;function $m(){Qm||(Qm=!0,dr.prototype.computeBoundsTree=rp,dr.prototype.disposeBoundsTree=ip,Fr.prototype.raycast=tp)}function eh(e,t=!1){$m(),e.computeBoundsTree(t?{indirect:!0}:void 0)}function th(e){e.boundsTree?e.boundsTree.refit():eh(e),e.boundingBox=null,e.boundingSphere=null}function nh(e){e.boundsTree&&e.disposeBoundsTree(),e.dispose()}function rh(e){let t=new dr;return t.setAttribute(`position`,new Xn(e.positions,3)),t.setIndex(new Xn(e.index,1)),t.userData.lowIndex=e.lowIndex,eh(t),t.computeVertexNormals(),t}var ih=.8,ah=3.4,oh=.02,sh=class{rc=new To;nm=new X;v=new Y;n=new Y;o=new Y;hits=[];constructor(){$m(),this.rc.firstHitOnly=!0}cast(e,t,n,r=1/0){return this.rc.set(e,t),this.rc.near=0,this.rc.far=r,this.hits.length=0,this.rc.intersectObjects(n,!1,this.hits),this.hits[0]??null}pick(e,t,n){return this.rc.setFromCamera(e,t),this.rc.near=0,this.rc.far=1/0,this.hits.length=0,this.rc.intersectObjects(n,!1,this.hits),this.hits[0]??null}signedDistance(e,t,n=0,r=1,i=null){if(!t.length)return 1/0;let a=e.geometry,o=a.getAttribute(`position`),s=a.getAttribute(`normal`);e.updateMatrixWorld(!0);let c=e.matrixWorld;this.nm.getNormalMatrix(c);let l=1/0;for(let e=n;e<o.count;e+=r){this.v.fromBufferAttribute(o,e).applyMatrix4(c),this.n.fromBufferAttribute(s,e).applyMatrix3(this.nm).normalize(),this.o.copy(this.v).addScaledVector(this.n,-.8);let n=this.cast(this.o,this.n,t,ah);if(n){let t=n.distance-ih;i&&(i[e]=t),t<l&&(l=t)}}return l}thickness(e,t,n,r,i){let a=e.geometry,o=a.getAttribute(`position`),s=a.getAttribute(`normal`);e.updateMatrixWorld(!0),t.updateMatrixWorld(!0);let c=e.matrixWorld;this.nm.getNormalMatrix(c);let l=new X().getNormalMatrix(t.matrixWorld),u=new Y,d=new Y,f=[t],p=1/0;for(let e=n;e<o.count;e++){if(o.getY(e)<r)continue;this.v.fromBufferAttribute(o,e).applyMatrix4(c),this.n.fromBufferAttribute(s,e).applyMatrix3(this.nm).normalize();let t=this.cast(this.v,this.n,f,8);if(t?.face&&(d.copy(t.face.normal).applyMatrix3(l),d.dot(this.n)>0)){let e=-t.distance-i;e<p&&(p=e);continue}this.o.copy(this.v).addScaledVector(this.n,oh);let n=this.cast(this.o,u.copy(this.n).negate(),f,8);if(n){let e=n.distance-oh-i;e<p&&(p=e)}}return p===1/0?null:p}},ch=1.4,lh=.045,uh=.5,dh=e=>e===`adicionar`||e===`remover`||e===`suavizar`,fh=(e,t=ch)=>e>=t?0:(1-(e/t)**2)**2;function ph(e,t,n,r,i,a){let o=e.length/3,s=ch,c=0;if(a===`suavizar`){let t=[];for(let a=r;a<o;a++){let r=e[a*3],o=e[a*3+1],c=e[a*3+2],l=Math.hypot(r-i[0],o-i[1],c-i[2]);if(l>=s)continue;let u=n[a];if(!u||!u.length)continue;let d=fh(l)*uh,f=0,p=0,m=0;for(let t of u)f+=e[t*3],p+=e[t*3+1],m+=e[t*3+2];t.push(a,r+(f/u.length-r)*d,o+(p/u.length-o)*d,c+(m/u.length-c)*d)}for(let n=0;n<t.length;n+=4){let r=t[n]*3;e[r]=t[n+1],e[r+1]=t[n+2],e[r+2]=t[n+3],c++}return c}let l=a===`adicionar`?1:-1;for(let n=r;n<o;n++){let r=n*3,a=Math.hypot(e[r]-i[0],e[r+1]-i[1],e[r+2]-i[2]);if(a>=s)continue;let o=fh(a)*lh*l;e[r]+=t[r]*o,e[r+1]+=t[r+1]*o,e[r+2]+=t[r+2]*o,c++}return c}var mh=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],hh=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],gh=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],_h=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],vh=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],yh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],bh=e=>Math.hypot(e[0],e[1],e[2]),xh=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]);function Sh(e){let t=bh(e);return t>1e-20?[e[0]/t,e[1]/t,e[2]/t]:[0,0,1]}function Ch(e){let t=Math.abs(e[0]),n=Math.abs(e[1]),r=Math.abs(e[2]),i=t<=n&&t<=r?[1,0,0]:n<=r?[0,1,0]:[0,0,1],a=Sh(mh(i,gh(e,vh(i,e))));return{u:a,v:yh(e,a)}}function wh(e){let{positions:t,indices:n}=e,r=Math.floor(t.length/3),i=Math.floor(n.length/3),a=new Uint32Array(r+1);for(let e=0;e<i*3;e++)a[n[e]+1]++;for(let e=0;e<r;e++)a[e+1]+=a[e];let o=a.slice(0,r),s=new Uint32Array(i*3);for(let e=0;e<i;e++)for(let t=0;t<3;t++)s[o[n[e*3+t]]++]=e;return{positions:t,indices:n,vertexCount:r,triangleCount:i,vtStart:a,vtTris:s}}function Th(e,t){let n=e.positions;return[n[t*3],n[t*3+1],n[t*3+2]]}function Eh(e,t,n,r){let i=e.indices;for(let a=e.vtStart[n],o=e.vtStart[n+1];a<o;a++){let n=e.vtTris[a];if(n!==t&&(i[n*3]===r||i[n*3+1]===r||i[n*3+2]===r))return n}return-1}function Dh(e,t){let n=Th(e,e.indices[t*3]),r=Th(e,e.indices[t*3+1]),i=Th(e,e.indices[t*3+2]);return yh(mh(r,n),mh(i,n))}function Oh(e,t,n){let r=e.positions,i=e.indices,a=n*n,o=new Uint8Array(e.vertexCount);for(let n=0;n<e.vertexCount;n++){let e=r[n*3]-t[0],i=r[n*3+1]-t[1],s=r[n*3+2]-t[2];e*e+i*i+s*s<=a&&(o[n]=1)}let s=0;for(let t=0;t<e.triangleCount;t++)(o[i[t*3]]||o[i[t*3+1]]||o[i[t*3+2]])&&s++;let c=new Uint32Array(s);s=0;for(let t=0;t<e.triangleCount;t++)(o[i[t*3]]||o[i[t*3+1]]||o[i[t*3+2]])&&(c[s++]=t);return c}function kh(e,t,n,r){let i=e.positions,a=e.indices,o=[],[s,c,l]=n,[u,d,f]=r;for(let e=0;e<t.length;e++){let n=t[e],r=a[n*3]*3,p=a[n*3+1]*3,m=a[n*3+2]*3,h=i[r],g=i[r+1],_=i[r+2],v=i[p]-h,y=i[p+1]-g,b=i[p+2]-_,x=i[m]-h,S=i[m+1]-g,C=i[m+2]-_,w=d*C-f*S,T=f*x-u*C,E=u*S-d*x,D=v*w+y*T+b*E;if(Math.abs(D)<1e-12)continue;let O=1/D,k=s-h,A=c-g,j=l-_,M=(k*w+A*T+j*E)*O;if(M<-1e-7||M>1+1e-7)continue;let N=A*b-j*y,P=j*v-k*b,F=k*y-A*v,I=(u*N+d*P+f*F)*O;if(I<-1e-7||M+I>1+1e-7)continue;let L=(x*N+S*P+C*F)*O;o.push({tri:n,t:L,point:[s+u*L,c+d*L,l+f*L]})}return o}function Ah(e,t,n,r,i,a,o,s=4e3){let c=e.positions,l=e.indices,u=yh(r,i),d=e=>{let t=(c[e*3]-n[0])*u[0]+(c[e*3+1]-n[1])*u[1]+(c[e*3+2]-n[2])*u[2];return t===0?1e-30:t},f=(e,t,n,r)=>{let i=n/(n-r);return[c[e*3]+(c[t*3]-c[e*3])*i,c[e*3+1]+(c[t*3+1]-c[e*3+1])*i,c[e*3+2]+(c[t*3+2]-c[e*3+2])*i]},p=1e-6,m=e=>{let t=1/0,r=-1/0,a=0;for(let o=0;o<3;o++){let s=l[e*3+o],c=l[e*3+(o+1)%3],u=d(s),p=d(c);if(u>0==p>0)continue;let m=f(s,c,u,p),h=(m[0]-n[0])*i[0]+(m[1]-n[1])*i[1]+(m[2]-n[2])*i[2];h<t&&(t=h),h>r&&(r=h),a++}return a===2?[t,r]:null},h=m(t);if(!h||h[1]<=p){let n=-1,r=1/0;for(let i=0;i<3;i++){let a=l[t*3+i];for(let t=e.vtStart[a],i=e.vtStart[a+1];t<i;t++){let i=e.vtTris[t],a=m(i);!a||a[1]<=p||a[0]<-.001||Math.abs(a[0])<r&&(r=Math.abs(a[0]),n=i)}}n>=0&&(t=n)}let g=r=>{let u=[],m=t,h=-1,g=-1;for(let t=0;t<s;t++){let s=l[m*3],_=l[m*3+1],v=l[m*3+2],y=d(s),b=d(_),x=d(v),S=-1,C=-1,w=0,T=0,E=-1/0,D=-1,O=-1,k=0,A=0,j=-1/0;for(let e=0;e<3;e++){let t=e===0?s:e===1?_:v,r=e===0?_:e===1?v:s,a=e===0?y:e===1?b:x,o=e===0?b:e===1?x:y;if(a>0==o>0||t===h&&r===g||t===g&&r===h)continue;let l=a/(a-o),u=(c[t*3]+(c[r*3]-c[t*3])*l-n[0])*i[0]+(c[t*3+1]+(c[r*3+1]-c[t*3+1])*l-n[1])*i[1]+(c[t*3+2]+(c[r*3+2]-c[t*3+2])*l-n[2])*i[2];u>E?(j=E,D=S,O=C,k=w,A=T,E=u,S=t,C=r,w=a,T=o):u>j&&(j=u,D=t,O=r,k=a,A=o)}if(t===0&&r&&(E=j,S=D,C=O,w=k,T=A),S<0)break;if(E<-1e-6)return{out:u,backwards:!0};let M=f(S,C,w,T);if(E>p&&u.push({point:M,tri:m}),E>a||E>p&&o&&o(M))break;let N=Eh(e,m,S,C);if(N<0)break;h=S,g=C,m=N}return{out:u,backwards:!1}},_=g(!1);if(!_.backwards)return _.out;let v=g(!0);return v.out.length>=_.out.length?v.out:_.out}function jh(e,t,n){let r=1/0,i=-1,a=n;for(let o=0;o<t.length;o++){let s=t[o],c=Mh(n,Th(e,e.indices[s*3]),Th(e,e.indices[s*3+1]),Th(e,e.indices[s*3+2])),l=(c[0]-n[0])**2+(c[1]-n[1])**2+(c[2]-n[2])**2;l<r&&(r=l,i=s,a=c)}return{point:a,tri:i,distance:Math.sqrt(r)}}function Mh(e,t,n,r){let i=mh(n,t),a=mh(r,t),o=mh(e,t),s=vh(i,o),c=vh(a,o);if(s<=0&&c<=0)return t;let l=mh(e,n),u=vh(i,l),d=vh(a,l);if(u>=0&&d<=u)return n;let f=s*d-u*c;if(f<=0&&s>=0&&u<=0)return _h(t,i,s/(s-u));let p=mh(e,r),m=vh(i,p),h=vh(a,p);if(h>=0&&m<=h)return r;let g=m*c-s*h;if(g<=0&&c>=0&&h<=0)return _h(t,a,c/(c-h));let _=u*h-m*d;if(_<=0&&d-u>=0&&m-h>=0)return _h(n,mh(r,n),(d-u)/(d-u+(m-h)));let v=1/(_+g+f);return hh(t,hh(gh(i,g*v),gh(a,f*v)))}var Nh={aresta:`na aresta do término`,fundo:`no fundo do sulco`,pe:`no pé da parede`},Ph={cropRadius:10,maxRadius:8,angles:120,step:.05,smooth:.1,minWall:1,stopRise:.8,turnWindow:.2,edgeTurn:18,flatSlope:-20,edgeToTrough:1,maxLedge:1.8,jump:.2,freeCost:1.5,freeStep:.1,medianHalf:2,loopSmooth:1.2,passes:3,seedNormalRadius:2,edgeBias:.5,preferred:`aresta`,climbMax:8},Fh=Math.PI/180;function Ih(e){return e.vtStart!==void 0}function Lh(e){let t=Math.max(1,Math.ceil(e*3)),n=new Float64Array(t*2+1),r=0;for(let i=-t;i<=t;i++)n[i+t]=Math.exp(-.5*(i/e)**2),r+=n[i+t];for(let e=0;e<n.length;e++)n[e]/=r;return n}function Rh(e,t){let n=e.length,r=(t.length-1)/2,i=new Float64Array(n);for(let a=0;a<n;a++){let o=0;for(let i=-r;i<=r;i++){let s=a+i,c=s<0?2*e[0]-e[Math.min(n-1,-s)]:s>=n?2*e[n-1]-e[Math.max(0,2*(n-1)-s)]:e[s];o+=c*t[i+r]}i[a]=o}return i}function zh(e,t,n,r,i,a,o){let s=0,c=1/0,l=!1,u=!1,d=a.stopRise+.4,f=Ah(e,t,n,r,i,a.maxRadius,e=>{let t=(e[0]-n[0])*r[0]+(e[1]-n[1])*r[1]+(e[2]-n[2])*r[2];return t>s&&(s=t),l?(t<c&&(c=t),t>=c+d&&(u=!0),u):(t<=s-a.minWall&&(l=!0,c=t),!1)});if(f.length<2)return null;let p=[n];for(let e of f)p.push(e.point);let m=new Float64Array(p.length);for(let e=1;e<p.length;e++)m[e]=m[e-1]+xh(p[e-1],p[e]);let h=m[p.length-1],g=Math.floor(h/a.step)+1;if(g<8)return null;let _=new Float64Array(g),v=new Float64Array(g),y=new Float64Array(g),b=new Float64Array(g),x=new Float64Array(g),S=0;for(let e=0;e<g;e++){let t=e*a.step;for(;S<p.length-2&&m[S+1]<t;)S++;let o=m[S+1]-m[S],s=o>1e-12?(t-m[S])/o:0,c=p[S],l=p[S+1],u=c[0]+(l[0]-c[0])*s,d=c[1]+(l[1]-c[1])*s,f=c[2]+(l[2]-c[2])*s;_[e]=u,v[e]=d,y[e]=f;let h=u-n[0],g=d-n[1],C=f-n[2];b[e]=h*i[0]+g*i[1]+C*i[2],x[e]=h*r[0]+g*r[1]+C*r[2]}let C=Rh(b,o),w=Rh(x,o),T=new Float64Array(g),E=new Float64Array(g);for(let e=0;e<g;e++){let t=Math.max(0,e-1),n=Math.min(g-1,e+1);T[e]=Math.atan2(w[n]-w[t],C[n]-C[t])}let D=new Float64Array(g);D[0]=T[0];for(let e=1;e<g;e++){let t=T[e]-T[e-1];t>Math.PI?t-=2*Math.PI:t<-Math.PI&&(t+=2*Math.PI),D[e]=D[e-1]+t}let O=Math.max(1,Math.round(a.turnWindow/a.step));for(let e=0;e<g;e++)E[e]=D[Math.min(g-1,e+O)]-D[Math.max(0,e-O)];return{n:g,px:_,py:v,pz:y,r:C,h:w,phi:D,turn:E}}function Bh(e,t){let{n,r,h:i,phi:a,turn:o}=e,s=t.step,c=Math.max(1,Math.round(t.turnWindow/s)),l=-1/0,u=-1;for(let e=0;e<n;e++)if(i[e]>l&&(l=i[e]),i[e]<=l-t.minWall){u=e;break}if(u<0){let e=0;for(let t=1;t<n;t++)i[t]<i[e]&&(e=t);return{list:[{i:e,kind:`indefinido`,cost:4,r:r[e],h:i[e],turn:o[e]/Fh,neighbor:!1,noWall:!0}],lo:e,hi:e}}let d=new Float64Array(n),f=1/0,p=n-1;for(let e=u;e<n;e++)if(i[e]<f&&(f=i[e]),d[e]=f,i[e]>=f+t.stopRise){p=e;break}let m=t.flatSlope*Fh,h=Math.max(2,Math.round(.15/s)),g=[];for(let e=u;e<=p;e++){if(a[e]<m)continue;let t=e;for(;t+1<=p&&a[t+1]>=m;)t++;(t-e+1>=h||t===p)&&g.push(e),e=t}let _=Math.round(1.5/s),v=e=>{for(let r=e+1;r<=Math.min(n-1,e+_);r++)if(i[r]>=i[e]+t.stopRise)return!0;return!1},y=[],b=-t.edgeTurn*Fh,x=Math.round(t.edgeToTrough/s),S=Math.round(t.maxLedge/s),C=new Set,w=new Set,T=new Map;for(let e of g){let n=-1;for(let t=Math.max(u+1,e-x);t<e;t++)(n<0||o[t]<o[n])&&(n=t);if(n<0||o[n]>b)continue;let r=i[e],a=e;for(let t=e;t<=Math.min(p,e+c);t++)i[t]<r&&(r=i[t],a=t);if(i[n]-r<.12)continue;let s=n;for(;s+1<e&&o[s+1]<=o[n]/2;)s++;let l=Math.min(e-1,Math.round(n+(s-n)*Math.max(0,Math.min(1,t.edgeBias))));C.add(l),T.set(l,a)}for(let e=u+1;e<p;e++){if(o[e]>b)continue;let t=!0;for(let n=Math.max(u,e-c);n<=Math.min(p,e+c);n++)if(o[n]<o[e]||o[n]===o[e]&&n<e){t=!1;break}if(!t)continue;let n=!1;for(let t of g)t<e&&e-t<=S&&(n=!0);n&&!C.has(e)&&(C.add(e),w.add(e))}let E=[...C].sort((e,t)=>e-t),D=0;for(let e of E){let t=Math.max(0,i[e]-d[e])/.1,n=Math.min(1,-o[e]/(60*Fh));y.push({i:e,kind:`aresta`,cost:.6*D+t-.3*n+(w.has(e)?.4:0),r:r[e],h:i[e],turn:o[e]/Fh,neighbor:v(e),noWall:!1}),D++}for(let[e,t]of T)t===e||i[e]-i[t]>.8||y.push({i:t,kind:`fundo`,cost:Vh,r:r[t],h:i[t],turn:o[t]/Fh,neighbor:v(t),noWall:!1});if(g.length&&E.some(e=>e>g[0])){let e=g[0],t=e;for(let n=Math.max(u,e-c);n<=Math.min(p,e+c);n++)o[n]>o[t]&&(t=n);y.push({i:t,kind:`pe`,cost:Vh,r:r[t],h:i[t],turn:o[t]/Fh,neighbor:v(t),noWall:!1})}let O=0;for(let e of g){let t=!1;for(let n of E)n<e&&e-n<=x&&(t=!0);if(t){O++;continue}let n=e;for(let t=Math.max(u,e-c);t<=Math.min(p,e+c);t++)o[t]>o[n]&&(n=t);let a=Math.max(0,i[n]-d[n])/.1;y.push({i:n,kind:`vinco`,cost:1+.6*O+a,r:r[n],h:i[n],turn:o[n]/Fh,neighbor:v(n),noWall:!1}),O++}let k=u;for(let e of g)e>k&&(k=e);for(let e of E)e>k&&(k=e);let A=Math.min(p,(g.length||E.length?k:u+Math.round(4/s))+Math.round(1/s)),j=Math.max(1,Math.round(t.freeStep/s));for(let e=u;e<=A;e+=j){let n=Math.max(0,i[e]-d[e])/.1;y.push({i:e,kind:`indefinido`,cost:t.freeCost+n,r:r[e],h:i[e],turn:o[e]/Fh,neighbor:v(e),noWall:!1})}return{list:y,lo:u,hi:p}}var Vh=6;function Hh(e,t){return t===`aresta`?e.cost:e.kind===t?e.cost-Vh:e.kind===`aresta`?e.cost+2:e.cost}function Uh(e,t,n=`aresta`){let r=e.length,i=2*r,a=1/t,o=e.map(e=>Float64Array.from(e,e=>e.r*a)),s=e.map(e=>Float64Array.from(e,e=>e.h*a)),c=e.map(e=>Float64Array.from(e,e=>Hh(e,n))),l=c[0].slice(),u=[];for(let e=1;e<i;e++){let t=(e-1)%r,n=e%r,i=o[t],a=s[t],d=o[n],f=s[n],p=c[n],m=i.length,h=d.length,g=new Float64Array(h),_=new Int32Array(h);for(let e=0;e<h;e++){let t=d[e],n=f[e],r=1/0,o=0;for(let e=0;e<m;e++){let s=i[e]-t,c=a[e]-n,u=s*s+c*c,d=l[e]+(u>36?6:Math.sqrt(u));d<r&&(r=d,o=e)}g[e]=r+p[e],_[e]=o}u.push(_),l=g}let d=0;for(let e=1;e<l.length;e++)l[e]<l[d]&&(d=e);let f=new Int32Array(i),p=d;for(let e=i-1;e>=1;e--)f[e]=p,p=u[e-1][p];f[0]=p;let m=Array(r),h=Math.floor(r/2);for(let e=h;e<h+r;e++)m[e%r]=f[e];return m}function Wh(e,t,n,r,i,a={}){let o={...Ph,...a},s=zh(e,t,n,r,i,o,Lh(o.smooth/o.step));return s?{r:[...s.r],h:[...s.h],turn:[...s.turn].map(e=>e/Fh),candidates:Bh(s,o).list.map(e=>({r:e.r,h:e.h,kind:e.kind,cost:e.cost,turn:e.turn}))}:null}function Gh(e,t,n,r,i,a){let o=Lh(a.smooth/a.step),s=a.angles,c=[],l=[],u=[],d=0;for(let f=0;f<s;f++){let p=f/s*2*Math.PI,m=Sh(_h(gh(i.u,Math.cos(p)),i.v,Math.sin(p)));u.push(m);let h=zh(e,t,n,r,m,a,o);c.push(h),h?l.push(Bh(h,a)):(d++,l.push(null))}if(d>s/4)return null;let f=[];for(let e=0;e<s;e++)l[e]&&f.push(e);return{profiles:c,sets:l,dirs:u,live:f,center:n,axis:r}}function Kh(e,t,n,r){let{profiles:i,sets:a,dirs:o,live:s,center:c,axis:l}=e,u=t.angles,d=s.map(e=>a[e].list),f=d,p;if(r&&n!==`aresta`){let e=[];f=d.map((t,i)=>{let a=t.map((e,t)=>t).filter(e=>t[e].kind===n),o=a.length?a:[r[i]];return e.push(o),o.map(e=>t[e])}),p=Uh(f,t.jump,n).map((t,n)=>e[n][t]),f=d}else p=Uh(f,t.jump,n);let m=s.length,h=new Float64Array(m),g=new Float64Array(m);for(let e=0;e<m;e++){let t=f[e][p[e]];h[e]=t.r,g[e]=t.h}let _=Jh(qh(h,t.medianHalf),t.loopSmooth),v=Jh(qh(g,t.medianHalf),t.loopSmooth),y=[],b=[],x=[];for(let e=0;e<m;e++){let t=s[e],n=f[e][p[e]],r=i[t],d=a[t],m=n.i;if(!n.noWall){let t=1/0;for(let n=d.lo;n<=d.hi;n++){let i=(r.r[n]-_[e])**2+(r.h[n]-v[e])**2;i<t&&(t=i,m=n)}}let h=[r.px[m],r.py[m],r.pz[m]],g=mh(h,c);y.push({point:h,angle:t/u*2*Math.PI,radius:vh(g,o[t]),height:vh(g,l),kind:n.kind,turn:n.turn,neighbor:n.neighbor}),b.push(h),x.push(n.noWall)}return{samples:y,loop:b,noWall:x,pick:p}}function qh(e,t){let n=e.length,r=new Float64Array(n);if(t<1||n<2*t+1)return e.slice();let i=new Float64Array(2*t+1);for(let a=0;a<n;a++){for(let r=-t;r<=t;r++)i[r+t]=e[(a+r+n)%n];r[a]=i.slice().sort()[t]}return r}function Jh(e,t){let n=e.length;if(t<=0||n<5)return e.slice();let r=Lh(t),i=(r.length-1)/2,a=new Float64Array(n);for(let t=0;t<n;t++){let o=0;for(let a=-i;a<=i;a++)o+=e[((t+a)%n+n)%n]*r[a+i];a[t]=o}return a}function Yh(e){let t=[0,0,0];for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t[0]+=(r[1]-i[1])*(r[2]+i[2]),t[1]+=(r[2]-i[2])*(r[0]+i[0]),t[2]+=(r[0]-i[0])*(r[1]+i[1])}return t}function Xh(e,t,n,r){let i=0,a=0,o=0;for(let s=0;s<e.length;s++){let c=mh(e[s],t),l=mh(e[(s+1)%e.length],t),u=vh(c,n),d=vh(c,r),f=vh(l,n),p=vh(l,r),m=u*p-f*d;i+=m,a+=(u+f)*m,o+=(d+p)*m}return Math.abs(i)<1e-12?t:_h(_h(t,n,a/(3*i)),r,o/(3*i))}function Zh(e,t,n){let r=vh(t,n.u),i=vh(t,n.v),a=!1;for(let t=0,o=e.length-1;t<e.length;o=t++){let s=vh(e[t],n.u),c=vh(e[t],n.v),l=vh(e[o],n.u),u=vh(e[o],n.v);c>i!=u>i&&r<(l-s)*(i-c)/(u-c)+s&&(a=!a)}return a}function Qh(e){let t=0;for(let n=0;n<e.length;n++)t+=xh(e[n],e[(n+1)%e.length]);return t}function $h(e,t){return Math.abs(vh(Yh(e),t))/2}function eg(e,t){let{u:n,v:r}=Ch(t),i=e.map(e=>[vh(e,n),vh(e,r)]),a=i.length,o=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);for(let e=0;e<a;e++){let t=i[e],n=i[(e+1)%a];for(let r=e+2;r<a;r++){if(e===0&&r===a-1)continue;let s=i[r],c=i[(r+1)%a],l=o(t,n,s),u=o(t,n,c),d=o(s,c,t),f=o(s,c,n);if((l>0&&u<0||l<0&&u>0)&&(d>0&&f<0||d<0&&f>0))return!0}}return!1}function tg(e,t){let n=e.length,r=[];if(!e.some(e=>e))return r;if(e.every(e=>e))return[{from:0,to:n-1,len:n}];let i=0;for(;e[i];)i++;for(let a=1;a<=n;a++){let o=(i+a)%n;if(!e[o])continue;let s=a;for(;s+1<=n&&e[(i+s+1)%n];)s++;s-a+1>=t&&r.push({from:o,to:(i+s)%n,len:s-a+1}),a=s}return r}function ng(e,t,n,r,i,a,o){let s=e.samples,c=s.length,l=Math.max(2,Math.round(12/360*c)),u=[],d=(e,r)=>{let i=[0,0,0];for(let a=0;a<r;a++){let r=mh(s[(e+a)%c].point,t);i=_h(i,Sh(mh(r,gh(n,vh(r,n)))),1)}return Sh(i)},f=e.noWall,p=s.map((e,t)=>e.kind===`indefinido`&&!f[t]),m=s.map((e,t)=>e.neighbor&&e.kind!==`aresta`&&!f[t]),h=0,g=0,_=0,v=0;for(let e=0;e<c;e++)f[e]?h++:p[e]?g++:m[e]?_++:s[e].kind===`vinco`&&v++;for(let e of tg(f,l))u.push({from:e.from,to:e.to,direction:d(e.from,e.len),reason:`sem-parede`});for(let e of tg(p,l))u.push({from:e.from,to:e.to,direction:d(e.from,e.len),reason:`pouco-definida`});for(let e of tg(m,l))u.push({from:e.from,to:e.to,direction:d(e.from,e.len),reason:`vizinho`});let y=0;for(let e=0;e<c;e++){let t=s[e],n=s[(e+1)%c];Math.hypot(t.radius-n.radius,t.height-n.height)>3*r.jump&&y++}let b=1-h/c*1.6-g/c*1.2-_/c*.6-v/c*.25-.08*y,x=[],S=e=>`${Math.round(100*e/c)}%`;a&&(b=Math.min(b,.1),x.push(`O contorno sugerido se cruza.`)),(i<5||i>220)&&(b=Math.min(b,.2),x.push(`Área do contorno fora do esperado para um preparo (${i.toFixed(1)} mm²).`)),o||(b=Math.min(b,.4),x.push(`O ponto clicado ficou fora do contorno encontrado: clique no topo do preparo.`)),h/c>.1&&x.push(`Não há parede axial em ${S(h)} do contorno: o clique pode não estar no topo de um preparo.`),g/c>.05&&x.push(`Margem pouco definida em ${S(g)} do contorno.`),_/c>.05&&x.push(`O contorno encosta em dente vizinho em ${S(_)} do perímetro; ali a margem foi posta no fundo do vinco.`),y>0&&x.push(`O contorno tem ${y} degrau(s) entre cortes vizinhos.`),v/c>.5&&x.push(`Sem aresta de término nítida em ${S(v)} do contorno (margem posta no vinco com a gengiva).`),b=Math.max(0,Math.min(1,b));let C=b>=.75?`alta`:b>=.5?`media`:`baixa`;return{score:b,level:C,reasons:C===`alta`&&!x.length?[]:x,weak:u}}var rg=(e,t,n,r=`aresta`)=>({loop:[],samples:[],axis:e,center:t,basis:Ch(e),area:0,perimeter:0,confidence:{score:0,level:`baixa`,reasons:[n],weak:[]},variant:r,alternatives:[],seedUsed:t});function ig(e,t,n,r){let i=e.positions,a=e.indices,o=e=>i[e*3]*n[0]+i[e*3+1]*n[1]+i[e*3+2]*n[2],s=a[t*3];for(let e=1;e<3;e++)o(a[t*3+e])>o(s)&&(s=a[t*3+e]);let c=Th(e,s);for(let t=0;t<4e3;t++){let t=s,n=o(s);for(let r=e.vtStart[s],i=e.vtStart[s+1];r<i;r++){let i=e.vtTris[r];for(let e=0;e<3;e++){let r=a[i*3+e],s=o(r);s>n&&(n=s,t=r)}}if(t===s||xh(Th(e,t),c)>r)break;s=t}return s}function ag(e,t,n={}){let r={...Ph,...n};r.passes=Math.max(1,Math.floor(r.passes)),r.angles=Math.max(12,Math.floor(r.angles));let i=Ih(e)?e:wh(e),a={tris:Oh(i,t.point,r.cropRadius)},o=t.normal?Sh(t.normal):[0,0,1];if(!a.tris.length)return rg(o,t.point,`Não há superfície do scan perto do ponto clicado.`);let s=jh(i,a.tris,t.point),c=s.point,l=s.tri;if(s.distance>2)return rg(o,t.point,`O ponto clicado está longe da superfície do scan.`);if(t.occlusal){let e=Sh(t.occlusal),n=Th(i,ig(i,l,e,r.climbMax));if(xh(n,c)>.05){let t=vh(n,e),o=r.seedNormalRadius*r.seedNormalRadius,s=[0,0,0],u=0,d=Oh(i,n,r.seedNormalRadius),f=new Uint8Array(i.vertexCount);for(let r=0;r<d.length;r++)for(let a=0;a<3;a++){let c=i.indices[d[r]*3+a];if(f[c])continue;f[c]=1;let l=Th(i,c),p=mh(l,n);vh(p,p)>o||vh(l,e)<t-.4||(s=_h(s,l,1),u++)}let p=u?gh(s,1/u):n;a.tris=Oh(i,p,r.cropRadius);let m=jh(i,a.tris,p);c=m.point,l=m.tri}}let u=c,d=t.occlusal?Sh(t.occlusal):t.normal?Sh(t.normal):Sh(Dh(i,l)),f=r.seedNormalRadius*r.seedNormalRadius,p=[];for(let e=0;e<a.tris.length;e++){let t=a.tris[e],n=Th(i,i.indices[t*3]),r=n[0]-c[0],o=n[1]-c[1],s=n[2]-c[2];r*r+o*o+s*s<=f&&p.push(Dh(i,t))}let m=d,h=20*Fh;for(let e=0;e<4;e++){let e=[0,0,0];for(let t of p){let n=Math.hypot(t[0],t[1],t[2]);if(n<1e-12)continue;let r=vh(t,m)/n;r<=0||(e=_h(e,t,Math.exp(-.5*(Math.acos(Math.min(1,r))/h)**2)))}if(vh(e,e)<1e-18)break;m=Sh(e)}let g=Ch(m),_=null,v=null;for(let e=0;e<r.passes;e++){let t=Gh(i,l,c,m,g,r);if(!t)break;v=t;let n=Kh(t,r,`aresta`);if(_=n,e===r.passes-1)break;let o=Yh(n.loop);if(vh(o,o)<1e-9)break;let s=Sh(o);vh(s,m)<0&&(s=gh(s,-1)),vh(s,m)<Math.cos(35*Fh)&&(s=m);let u=Ch(s),d=Xh(n.loop,c,u.u,u.v),f=kh(i,a.tris,d,s);if(!f.length)break;let p=f[0],h=1/0;for(let e of f){let t=xh(e.point,c);t<h&&(h=t,p=e)}let y=xh(p.point,c),b=1-vh(s,m);if(c=p.point,l=p.tri,m=s,g=u,y<.02&&b<1e-5&&e>0){let e=Gh(i,l,c,m,g,r);e&&(v=e,_=Kh(e,r,`aresta`));break}}if(!_||!v||_.loop.length<8)return rg(m,c,`Não foi possível traçar um contorno a partir deste ponto.`,r.preferred);let y=_;r.preferred!==`aresta`&&(_=Kh(v,r,r.preferred,y.pick));let b=$h(_.loop,m),x=Qh(_.loop),S=eg(_.loop,m),C=ng(_,c,m,r,b,S,Zh(_.loop,u,g)),w=[];for(let e of[`aresta`,`fundo`,`pe`]){if(e===r.preferred)continue;let t=e===`aresta`?y:Kh(v,r,e,y.pick),n=0,i=0;for(let e=0;e<t.loop.length;e++){let r=xh(t.loop[e],_.loop[e]);r>n&&(n=r),r>.1&&i++}i!==0&&w.push({variant:e,label:Nh[e],loop:t.loop,samples:t.samples,area:$h(t.loop,m),perimeter:Qh(t.loop),maxShift:n,differs:i/t.loop.length})}return w.sort((e,t)=>t.differs-e.differs),{loop:_.loop,samples:_.samples,axis:m,center:c,basis:g,area:b,perimeter:x,confidence:C,variant:r.preferred,alternatives:w,seedUsed:u}}var og={U:{1:[8.5,7,10],2:[6.5,6,9],3:[7.5,8,10],4:[7,9,8],5:[6.8,9,7.5],6:[10,11,7],7:[9,10.5,6.5],8:[8.5,10,6]},L:{1:[5.4,6,9],2:[5.9,6.2,9],3:[6.9,7.7,10],4:[7,7.7,8],5:[7.2,8.2,7.5],6:[11,10.5,7],7:[10.5,10,6.5],8:[10,9.5,6]}},sg=e=>Math.floor(e/10)<=2?`U`:`L`,cg=e=>e%10,lg=e=>{let t=Math.floor(e/10),n=e%10;return Number.isInteger(e)&&t>=1&&t<=4&&n>=1&&n<=8},ug={cimento:[10,150],minEsp:[.3,2],altura:[-2.5,2.5],largura:[85,118],cuspide:[40,160]},dg=.03,fg=.05;function pg(e){let t=(e,t,n)=>zm(Number.isFinite(e)?e:n,ug[t][0],ug[t][1]);return{cimento:t(e.cimento,`cimento`,50),minEsp:t(e.minEsp,`minEsp`,.8),altura:t(e.altura,`altura`,0),largura:t(e.largura,`largura`,100),cuspide:t(e.cuspide,`cuspide`,100),emerg:e.emerg===`Côncavo`||e.emerg===`Reto`?e.emerg:`Convexo`}}var mg={U:{p:14.5,z0:1.6},L:{p:13,z0:0}},hg=.99,gg=4.4,_g=4.7,vg={1:21,2:11,3:41,4:31};function yg(e){let{p:t,z0:n}=mg[e],r=e===`U`?1:-1,i=[],a=[],o=0,s=0,c=0;for(let e=0;e<=700;e++){let n=e*.05,r=-(n*n)/t;e&&(o+=Math.hypot(n-s,r-c)),i.push(n),a.push(o),s=n,c=r}let l=e=>{let t=0,n=a.length-1;for(;n-t>1;){let r=t+n>>1;a[r]<e?t=r:n=r}let r=(e-a[t])/(a[n]-a[t]||1);return i[t]+r*(i[n]-i[t])},u=e===`U`?[[1,-1],[2,1]]:[[4,-1],[3,1]],d=[],f={"-1":[],1:[]};for(let[i,a]of u){let o=0;for(let s=1;s<=7;s++){let[c,u,p]=og[e][s],m=o+c/2*hg;o+=c*hg;let h=l(m),g=-(h*h)/t,_=Math.hypot(2*h/t,1),v=[a*2*h/t/_,0,1/_],y=[a*h,r*(p+.8)+(e===`U`?.3:0),g+n],b=[v[2],0,-v[0]],x=e===`U`?[-b[0],0,-b[2]]:b,S=e===`U`?[0,-1,0]:[0,1,0],C=i*10+s;d.push({id:C,arch:e,type:s,a:c/2,b:u/2,H:p,pos:y,X:x,Y:S,Z:v,mesial:s>1?C-1:vg[i],distal:s<7?C+1:null}),f[a].push([a*h,y[1]+r*gg,g+n])}}let p=(e,t)=>{let n=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.hypot(n[0],n[1],n[2])||1;return[e[0]+n[0]/r*4,e[1]+n[1]/r*4,e[2]+n[2]/r*4]},m=f[-1],h=f[1];return{arch:e,teeth:d,gumPath:[p(m[6],m[5]),...m.slice().reverse(),...h,p(h[6],h[5])]}}var bg={16:`crown`,24:`onlay`,36:`crown`},xg=[15026253,15898954,16111882,5020415,16777215];function Sg(e){return e<-.03?0:e<.1?1:e<.35?2:e<1?3:4}var Cg={tooth:15327954,plan:9417983,stump:14262374,gum:12876412,crown:16052714,scan:14208960,line:15234607,mark:15234607,measure:16777215,activeEmissive:1707010};function wg(){let e=(e,t=.45)=>new Sa({color:e,roughness:t,metalness:0,side:2});return{tooth:e(Cg.tooth),plan:e(Cg.plan),stump:e(Cg.stump,.6),gum:e(Cg.gum,.7),crown:e(Cg.crown,.3),scan:e(Cg.scan,.55),line:new ui({color:Cg.line,depthTest:!1,transparent:!0}),mark:new Cr({color:Cg.mark,depthTest:!1}),meas:new ui({color:Cg.measure,depthTest:!1}),measP:new Cr({color:Cg.measure,depthTest:!1})}}function Tg(e){for(let t of Object.keys(e))e[t].dispose()}var Eg=.15,Dg={min:5,max:220};function Og(e){return e.boundsTree||eh(e,!e.getIndex()),e.boundsTree}var kg=()=>({point:new Y,distance:0,faceIndex:-1});function Ag(e,t,n=1/0,r=kg()){return Og(e).closestPointToPoint(t,r,0,n)}function jg(e,t,n){let r=Math.max(1,Math.ceil(t.distanceTo(n)/Eg)),i=[t.clone()],a=kg(),o=new Y;for(let s=1;s<r;s++){o.lerpVectors(t,n,s/r);let c=Ag(e,o,1/0,a),l=c?c.point.clone():o.clone();l.distanceToSquared(i[i.length-1])>1e-8&&i.push(l)}return i}function Mg(e){let t=new Y;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t}function Ng(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2}function Pg(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=a[0]*o[1]-o[0]*a[1];t+=(a[0]+o[0])*s,n+=(a[1]+o[1])*s,r+=s}if(Math.abs(r)<1e-12){for(let r of e)t+=r[0],n+=r[1];return[t/(e.length||1),n/(e.length||1)]}return[t/(3*r),n/(3*r)]}function Fg(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];o[1]>t!=s[1]>t&&e<(s[0]-o[0])*(t-o[1])/(s[1]-o[1])+o[0]&&(r=!r)}return r}var Ig=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);function Lg(e,t,n,r){let i=Ig(n,r,e),a=Ig(n,r,t),o=Ig(e,t,n),s=Ig(e,t,r);return(i>0&&a<0||i<0&&a>0)&&(o>0&&s<0||o<0&&s>0)}function Rg(e,t=0){let n=e.length;if(n<4)return!1;let r=new Float64Array(n+1);for(let t=0;t<n;t++){let i=e[t],a=e[(t+1)%n];r[t+1]=r[t]+Math.hypot(a[0]-i[0],a[1]-i[1])}let i=r[n];for(let a=0;a<n;a++){let o=e[a],s=e[(a+1)%n];for(let c=a+2;c<n;c++){if(a===0&&c===n-1)continue;let l=r[c]-r[a+1];if(!(Math.min(l,i-(r[c+1]-r[a]))<t)&&Lg(o,s,e[c],e[(c+1)%n]))return!0}}return!1}function zg(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=s[0]-o[0],l=s[1]-o[1],u=n*l-r*c;if(Math.abs(u)<1e-14)continue;let d=o[0]-t[0],f=o[1]-t[1],p=(d*l-f*c)/u,m=(d*r-f*n)/u;p>0&&m>=-1e-9&&m<=1+1e-9&&i.push({r:p,edge:a,f:Math.min(1,Math.max(0,m))})}return i}function Bg(e,t,n){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2,o=zg(e,t,Math.cos(a),Math.sin(a));if(!o.length)return null;let s=o[0],c=o[0];for(let e of o)e.r>s.r&&(s=e),e.r<c.r&&(c=e);if(s.r-c.r>.35)return null;r.push(s)}return r}function Vg(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=Ig(t,n,o)*r,l=Ig(t,n,s)*r;if(c>=0&&i.push(o),c>0&&l<0||c<0&&l>0){let e=c/(c-l);i.push([o[0]+(s[0]-o[0])*e,o[1]+(s[1]-o[1])*e])}}return i}function Hg(e,t){let n=e.length;if(n<5)return e.slice();let r=0,i=-1;for(let t=1;t<n;t++){let n=Math.hypot(e[t][0]-e[0][0],e[t][1]-e[0][1]);n>i&&(i=n,r=t)}let a=new Uint8Array(n);a[0]=a[r]=1;let o=(r,i)=>{let s=e[r],c=e[i%n],l=Math.hypot(c[0]-s[0],c[1]-s[1])||1,u=-1,d=t;for(let t=r+1;t<i;t++){let n=Math.abs(Ig(s,c,e[t]))/l;n>d&&(d=n,u=t)}u<0||(a[u]=1,o(r,u),o(u,i))};return o(0,r),o(r,n),e.filter((e,t)=>a[t])}function Ug(e,t){let n=Pg(e);if(Fg(n[0],n[1],e)&&Bg(e,n,t))return n;let r=Hg(e,.12),i=Ng(r)>=0?1:-1,a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of r)a=Math.min(a,e[0]),o=Math.max(o,e[0]),s=Math.min(s,e[1]),c=Math.max(c,e[1]);let l=[[a,s],[o,s],[o,c],[a,c]];for(let e=0;e<r.length&&l.length>=3;e++)l=Vg(l,r[e],r[(e+1)%r.length],i);if(l.length<3||Math.abs(Ng(l))<1e-4)return null;let u=Pg(l);return Bg(e,u,t)?u:null}function Wg(e,t){let n=0;for(let r=0;r<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3;n+=e[i]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[i+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[i+2]*(e[a]*e[o+1]-e[a+1]*e[o])}return n/6}function Gg(e,t,n,r){let i=[];for(let a=0;a<n.length-1;a++){let o=n[a],s=n[a+1],c=e[o],l=e[s],u=t[o],d=t[s];if(!(c&&l))for(let e=0;e<40;e+=r){let t=(e+r)%40;c?i.push(u,d+t,d+e):l?i.push(u+e,u+t,d):i.push(u+e,u+t,d+t,u+e,d+t,d+e)}}return i}function Kg(e){for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}}function qg(e,t,n,r){let i=[],a=[],o=[];for(let s of e){a.push(i.length/3),o.push(!!s.c);let e=s.tb&&r?s.tb:0;if(s.c){i.push(0,s.y+(e?e*r(0,0):0),0);continue}let c=s.A??t*(s.k??1),l=s.B??n*(s.kz??s.k??1);for(let t=0;t<40;t++){let n=Vm[t]*c,a=Hm[t]*l;i.push(n,s.y+(e?e*r(n,a):0),a)}}return Jg(i,a,o)}function Jg(e,t,n){let r=t.map((e,t)=>t),i=Gg(n,t,r,1),a=t.length-1,o=Gg(n,t,r.filter(e=>e===0||e===a||n[e]||e%2==0),2);return Wg(e,i)<0&&(Kg(i),Kg(o)),{positions:Float32Array.from(e),index:new Uint32Array(i),starts:t,lowIndex:new Uint32Array(o)}}var Yg=.2;function Xg(e,t){let n=Math.min(e/.45,1);return .8+.2*(t===`Côncavo`?n**1.7:t===`Reto`?n:1-(1-n)**2)-.13*Bm(.55,1,e)}function Zg(e,t){return t<=2?1-.55*e**1.6:t===3?1-.3*e**1.6:1}function Qg(e,t,n,r){if(e>=6){let e=[[-.45,.45,1],[.45,.45,.95],[-.45,-.45,.9],[.45,-.45,.85]],i=(.42*Math.min(t,n))**2;return(a,o)=>{let s=0;for(let r of e){let e=a-r[0]*t,c=o-r[1]*n;s+=r[2]*Math.exp(-(e*e+c*c)/i)}return 1.6*r*s}}if(e>=4){let e=(.5*t)**2;return(t,i)=>{let a=i-.45*n,o=i+.45*n;return r*(1.6*Math.exp(-(t*t+a*a)/e)+1.1*Math.exp(-(t*t+o*o)/e))}}if(e===3){let e=(.6*t)**2;return(t,i)=>{let a=i-.1*n;return 2*r*Math.exp(-(t*t+a*a)/e)}}let i=t*t*.8;return e=>.5*r*Math.exp(-(e*e)/i)}function $g(e,t,n,r=1){let i=[{c:!0,y:-3},{k:.66,y:-3},{k:.8,y:0}],a=r<1;for(let o=1;o<=12;o++){let s=o/12*r,c=Xg(s,n);i.push({k:c,kz:c*Zg(s,t),y:s*e,tb:a?0:Bm(.75,1,s)})}let o=i[i.length-1];for(let e=1;e<8;e++){let t=1-e/8;i.push({k:o.k*t,kz:o.kz*t,y:o.y,tb:+!a})}return i.push({c:!0,y:o.y,tb:+!a}),i}function e_(e,t,n){let r=e=>Zg(Math.min(1,Math.max(0,e/t)),n),i=r(e);return[{k:.74,kz:.74*r(0),y:0,w:!0},{k:.69,kz:.69*r(e*.5),y:e*.5,w:!0},{k:.6,kz:.6*r(e*.93),y:e*.93,w:!0},{k:.53,kz:.53*i,y:e,w:!0,r:!0},{k:.38,kz:.38*i,y:e,r:!0},{k:.18,kz:.18*i,y:e,r:!0}]}function t_(e,t,n){let r=Xg(n,`Convexo`)-.035,i=r*Zg(n,t),a=n*e;return[{k:r,kz:i,y:a},{k:r*.7,kz:i*.7,y:a,r:!0},{k:r*.35,kz:i*.35,y:a,r:!0}]}var n_=(e,t,n=!1)=>t===`crown`?{kind:t,hs:e.H-2,virtual:n}:{kind:t,cut:.85,virtual:n},r_=(e,t)=>t.kind===`crown`?t.hs:t.cut*e.H;function i_(e){return qg($g(e.H,e.type,`Convexo`),e.a,e.b,Qg(e.type,e.a,e.b,1))}function a_(e,t){return t.kind===`crown`?qg([{c:!0,y:-3},{k:.64,y:-3},...e_(t.hs,e.H,e.type).map(e=>({k:e.k,kz:e.kz,y:e.y})),{c:!0,y:t.hs}],e.a,e.b,null):qg($g(e.H,e.type,`Convexo`,t.cut),e.a,e.b,null)}function o_(e,t,n){let r=n.cimento/1e3,i=n.largura/100,a=e.a*i,o=e.b,s=Qg(e.type,a,o,n.cuspide/100),c,l,u;t.kind===`crown`?(c=e_(t.hs,e.H,e.type),l=t.hs,u=0):(u=t.cut,c=t_(e.H,e.type,u),l=u*e.H);let d=Math.max(e.H+n.altura,l+r+Yg),f=c.map(t=>({A:e.a*t.k+(t.w?r:0),B:e.b*t.kz+(t.w?r:0),y:t.y+(t.r?r:0)})).reverse(),p=[{c:!0,y:l+r},...f],m=p.length,h=u?l:0;for(let t=0;t<=12;t++){let r=t/12,a=u+(1-u)*r,s=Xg(a,n.emerg),c=1+(i-1)*(u?Bm(0,.5,r):Bm(0,.45,a));p.push({A:e.a*c*s,B:o*s*Zg(a,e.type),y:h+(d-h)*r,tb:Bm(u?u+(1-u)*.4:.75,1,a)})}let g=p[p.length-1];for(let e=1;e<8;e++){let t=1-e/8;p.push({A:g.A*t,B:g.B*t,y:g.y,tb:1})}p.push({c:!0,y:g.y,tb:1});let _=qg(p,a,o,s);return{..._,outerStart:_.starts[m],side:_.starts.slice(m,m+12+1),marginY:h,cut:u}}function s_(e,t){let n=[];for(let r of[10,30,0,20])for(let i=0;i<t.length-1;i++){let a=(t[i]+r)*3,o=(t[i+1]+r)*3;n.push(e[a],e[a+1],e[a+2],e[o],e[o+1],e[o+2])}return new Float32Array(n)}function c_(e,t,n){let r=Qg(e,1,1,n);return{equator:(e,t,n)=>(Math.abs(Math.cos(e)/t)**2.6+Math.abs(Math.sin(e)/n)**2.6)**(-1/2.6),wall:(n,r)=>({r:Xg(r,t)*Math.hypot(Math.cos(n),Zg(r,e)*Math.sin(n)),h:r}),relief:(e,t)=>r(e,t)}}var l_=.15,u_={min:12,max:56},d_=.03,f_=.06,p_=.6,m_={area:1,fraction:.04},h_=.8,g_=.5,__=.4,v_={areaRatio:12,above:13,below:8,space:2.2},y_=new Sr,b_=new Y,x_=new Y,S_=new Y,C_=new Y;function w_(e,t,n,r){let i=new Map,a=[],o=new Uint32Array(n.length*3);for(let s=0;s<n.length;s++)for(let c=0;c<3;c++){let l=t[n[s]*3+c],u=i.get(l);u===void 0&&(u=a.length/3,i.set(l,u),a.push(e[l*3],e[l*3+1],e[l*3+2])),o[s*3+(r&&c?3-c:c)]=u}let s=new dr;return s.setAttribute(`position`,new Xn(new Float32Array(a),3)),s.setIndex(new Xn(o,1)),eh(s),s}var T_=[.08,.2,.45];function E_(e,t,n,r){let i=e.getAttribute(`position`).array,a=e.getIndex().array,o=new Y(1,0,0);Math.abs(o.dot(r))>.9&&o.set(0,1,0),o.addScaledVector(r,-o.dot(r)).normalize();let s=new Y().crossVectors(r,o),c=t.map(e=>(b_.subVectors(e,n),[b_.dot(o),b_.dot(s)])),l=1/0,u=-1/0,d=1/0,f=-1/0;for(let e of c)l=Math.min(l,e[0]),u=Math.max(u,e[0]),d=Math.min(d,e[1]),f=Math.max(f,e[1]);let p=(e,t,r)=>{let i=e-n.x,a=t-n.y,p=r-n.z,m=i*o.x+a*o.y+p*o.z,h=i*s.x+a*s.y+p*s.z;return m>=l&&m<=u&&h>=d&&h<=f&&Fg(m,h,c)},m=new Mn().setFromPoints(t),h=m.getSize(b_).length()/2+2,g=(m.min.x+m.max.x)/2,_=(m.min.y+m.max.y)/2,v=(m.min.z+m.max.z)/2,y=e=>{let t=i[e*3]-g,n=i[e*3+1]-_,a=i[e*3+2]-v,o=t*r.x+n*r.y+a*r.z;return t*t+n*n+a*a-o*o},b=[],x=new Map,S=Math.floor(a.length/3);for(let e=0;e<S;e++)y(a[e*3])>h*h||(x.set(e,b.length),b.push(e));let C=b.length,w=new Map,T=new Int32Array(C*3).fill(-1),E=new Uint8Array(C);for(let e=0;e<C;e++){let t=b[e];for(let n=0;n<3;n++){let r=a[t*3+n],i=a[t*3+(n+1)%3],o=r<i?r*4294967296+i:i*4294967296+r,s=w.get(o);s===void 0?w.set(o,e*3+n):(T[e*3+n]=Math.floor(s/3),T[s]=e)}y(a[t*3])>(h-.7)*(h-.7)&&(E[e]=1)}let D=new Float64Array(C),O=new Uint8Array(C);for(let e=0;e<C;e++){let t=b[e],n=a[t*3]*3,r=a[t*3+1]*3,o=a[t*3+2]*3;x_.set(i[r]-i[n],i[r+1]-i[n+1],i[r+2]-i[n+2]),S_.set(i[o]-i[n],i[o+1]-i[n+1],i[o+2]-i[n+2]),D[e]=x_.cross(S_).length()/2,O[e]=+!!p((i[n]+i[r]+i[o])/3,(i[n+1]+i[r+1]+i[o+1])/3,(i[n+2]+i[r+2]+i[o+2])/3)}let k=-1,A=1/0;for(let t of[1,-1]){y_.origin.copy(n),y_.direction.copy(r).multiplyScalar(t);let i=Og(e).raycastFirst(y_,2,0,25);i&&i.distance<A&&i.faceIndex!=null&&(A=i.distance,k=x.get(i.faceIndex)??-1)}let j=new Fo,M=new Mn;for(let n of T_){let r=new Uint8Array(C);for(let i=0;i<t.length;i++)j.start.copy(t[i]),j.end.copy(t[(i+1)%t.length]),M.makeEmpty().expandByPoint(j.start).expandByPoint(j.end).expandByScalar(n),Og(e).shapecast({intersectsBounds:e=>e.intersectsBox(M),intersectsTriangle:(e,t)=>{let i=x.get(t);return i!==void 0&&!r[i]&&e.closestPointToSegment(j)<n&&(r[i]=1),!1}});let o=new Int32Array(C).fill(-1),s=[],c=[];for(let e=0;e<C;e++){if(r[e]||o[e]>=0)continue;let t=s.length,n={leak:!1,touch:!1,inside:0,total:0};for(s.push(n),o[e]=t,c.push(e);c.length;){let e=c.pop();E[e]&&(n.leak=!0),n.total+=D[e],O[e]&&(n.inside+=D[e]);for(let i=0;i<3;i++){let a=T[e*3+i];a<0||(r[a]?n.touch=!0:o[a]<0&&(o[a]=t,c.push(a)))}}}let l=-1,u=e=>e>=0&&!s[e].leak&&s[e].touch;if(k>=0&&u(o[k]))l=o[k];else for(let e=0;e<s.length;e++)u(e)&&s[e].inside>.5*s[e].total&&(l<0||s[e].inside>s[l].inside)&&(l=e);if(l<0)continue;let d=[],f=new Set;for(let e=0;e<C;e++)if(o[e]===l){d.push(b[e]);for(let t=0;t<3;t++)f.add(a[b[e]*3+t])}for(let e=0;e<C;e++){if(!r[e])continue;let t=b[e],n=a[t*3],o=a[t*3+1],s=a[t*3+2];(f.has(n)||f.has(o)||f.has(s))&&(O[e]||p(i[n*3],i[n*3+1],i[n*3+2])||p(i[o*3],i[o*3+1],i[o*3+2])||p(i[s*3],i[s*3+1],i[s*3+2]))&&d.push(t)}return d}return null}function D_(e,t,n){let r=new Float64Array(n.length*3);for(let i=0;i<n.length;i++){let a=t[n[i]*3]*3,o=t[n[i]*3+1]*3,s=t[n[i]*3+2]*3,c=e[o]-e[a],l=e[o+1]-e[a+1],u=e[o+2]-e[a+2],d=e[s]-e[a],f=e[s+1]-e[a+1],p=e[s+2]-e[a+2];r[i*3]=l*p-u*f,r[i*3+1]=u*d-c*p,r[i*3+2]=c*f-l*d}return r}function O_(e,t,n){let r=0;for(let i=0;i<e.length;i+=3){let a=e[i],o=e[i+1],s=e[i+2],c=Math.hypot(a,o,s),l=(a*t.x+o*t.y+s*t.z)*n;l<0&&c>0&&(r+=l*l/(2*c))}return r}function k_(e,t,n){let r=0;for(let i=0;i<e.length;i+=3){let a=e[i],o=e[i+1],s=e[i+2],c=Math.hypot(a,o,s);(a*t.x+o*t.y+s*t.z)*n<-.07*c&&(r+=c/2)}return r}var A_=class e{id;type;origin=new Y;X=new Y;Y=new Y;Z=new Y;quat=new dt;mesialSign;prep;neighbors=null;ring=new Float32Array(120);area=0;prepArea=0;undercut=0;tilt=0;dims;scanSign=1;shape=null;toLocal=new Z;toScan=new Z;profiles=[];yTop=0;opp=null;intr=null;constructor(e){this.id=e,this.type=cg(e);let t=Math.floor(e/10);this.mesialSign=t===2||t===4?1:-1}get retention(){return this.undercut>m_.area&&this.undercut>m_.fraction*this.prepArea}dispose(){this.prep&&nh(this.prep),this.neighbors&&nh(this.neighbors)}local(e,t=new Y){return t.copy(e).applyMatrix4(this.toLocal)}scan(e,t=new Y){return t.copy(e).applyMatrix4(this.toScan)}static build(t){let{own:n,opp:r,loop:i}=t,a=n.getAttribute(`position`),o=n.getIndex();if(!a||!o||i.length<3)return`Não foi possível ler o scan desta arcada.`;let s=a.array,c=o.array,l=new e(t.id),u=new Y;for(let e of i)u.add(e);u.multiplyScalar(1/i.length);let d=Mg(i);if(d.lengthSq()<1e-10)return`Os pontos marcados estão alinhados: contorne o preparo.`;d.normalize();let f=!1;if(r){let e=Og(r).closestPointToPoint(u,void 0,0,40);if(e){let t=e.point.clone().sub(u).dot(d);Math.abs(t)>.3&&(t<0&&d.negate(),f=!0)}}let p=`A linha de margem se cruza. Desfaça os últimos pontos e contorne o preparo em um único sentido.`;{let e=new Y(1,0,0);Math.abs(e.dot(d))>.9&&e.set(0,1,0),e.addScaledVector(d,-e.dot(d)).normalize();let t=new Y().crossVectors(d,e),n=i.map(n=>(b_.subVectors(n,u),[b_.dot(e),b_.dot(t)]));if(Rg(n,1))return p;let r=Math.abs(Ng(n));if(r>Dg.max*1.3)return`O contorno marcado é grande demais para um dente (${r.toFixed(1).replace(`.`,`,`)} mm²). Marque só a margem do preparo.`}let m=E_(n,i,u,d);if(!m||m.length<8)return m?`Não foi possível ler a superfície do preparo dentro da linha. Confira se a linha contorna o preparo.`:`A linha não fecha uma região sobre o preparo. Marque a margem contornando o preparo inteiro, sempre sobre o dente preparado.`;let h=m,g=D_(s,c,h),_=new Y;for(let e=0;e<g.length;e+=3)_.x+=g[e],_.y+=g[e+1],_.z+=g[e+2];!f&&_.dot(d)<0&&d.negate();let v=_.dot(d)<0?-1:1,y=_.clone().multiplyScalar(v);y.lengthSq()>1e-12?y.normalize():y.copy(d);let b=d.clone(),x=O_(g,b,v),S=new Y;for(let e of[.25,.5,.75,1]){S.copy(d).lerp(y,e).normalize();let t=O_(g,S,v);t<x-1e-9&&(x=t,b.copy(S))}for(let e of[.14,.07,.035]){let t=new Y(1,0,0);Math.abs(t.dot(b))>.9&&t.set(0,1,0),t.addScaledVector(b,-t.dot(b)).normalize();let n=new Y().crossVectors(b,t),r=b.clone();for(let i=0;i<8;i++){let a=i/8*Rm;if(S.copy(r).addScaledVector(t,Math.cos(a)*e).addScaledVector(n,Math.sin(a)*e).normalize(),S.dot(d)<.86)continue;let o=O_(g,S,v);o<x-1e-9&&(x=o,b.copy(S))}}if(l.tilt=Math.acos(zm(b.dot(d),-1,1))*180/Math.PI,l.tilt>1){let e=E_(n,i,u,b);if(e&&e.length>=8){h=e,g=D_(s,c,h),_.set(0,0,0);for(let e=0;e<g.length;e+=3)_.x+=g[e],_.y+=g[e+1],_.z+=g[e+2];v=_.dot(b)<0?-1:1}}l.undercut=k_(g,b,v);for(let e=0;e<g.length;e+=3)l.prepArea+=Math.hypot(g[e],g[e+1],g[e+2])/2;l.Y.copy(b);let C=new Y(1,0,0);Math.abs(C.dot(b))>.9&&C.set(0,1,0),C.addScaledVector(b,-C.dot(b)).normalize();let w=new Y().crossVectors(b,C),T=i.map(e=>(b_.subVectors(e,u),[b_.dot(C),b_.dot(w)]));if(Rg(T,1))return p;l.area=Math.abs(Ng(T));let E=l.area.toFixed(1).replace(`.`,`,`)+` mm²`;if(l.area<Dg.min)return`O contorno marcado é pequeno demais para um dente (${E}). Marque a margem em volta de todo o preparo.`;if(l.area>Dg.max)return`O contorno marcado é grande demais para um dente (${E}). Marque só a margem do preparo.`;if(l.prepArea>v_.areaRatio*l.area)return`A superfície dentro da linha (${l.prepArea.toFixed(0)} mm²) é grande demais para o contorno marcado (${E}). Marque a margem sobre o dente preparado, contornando-o por inteiro.`;let D=Ug(T,40);if(!D)return`O contorno tem reentrâncias que o motor ainda não reproduz. Marque a margem com um contorno mais regular.`;l.origin.copy(u).addScaledVector(C,D[0]).addScaledVector(w,D[1]);let O=a.count,k=0,A=0,j=0,M=0,N=0,P=0,F=0,I=0,L=l.origin,ee=e=>{k=A=j=M=N=P=0;for(let t=0;t<O;t++){let n=s[t*3]-L.x,r=s[t*3+1]-L.y,i=s[t*3+2]-L.z,a=n*b.x+r*b.y+i*b.z;if(a<e||a>14)continue;let o=n*C.x+r*C.y+i*C.z,c=n*w.x+r*w.y+i*w.z;o*o+c*c>144||(k+=o*o,A+=o*c,j+=c*c,M+=o,N+=c,P++)}};ee(1),P<200&&ee(-3);for(let e=0;e<O;e++){let t=s[e*3]-L.x,n=s[e*3+1]-L.y,r=s[e*3+2]-L.z;F+=t*C.x+n*C.y+r*C.z,I+=t*w.x+n*w.y+r*w.z}F/=O||1,I/=O||1;let te=1,ne=0,re=!1;if(P>=20){let e=k/P-(M/P)**2,t=j/P-(N/P)**2,n=A/P-M/P*(N/P),r=.5*Math.atan2(2*n,e-t);te=Math.cos(r),ne=Math.sin(r);let i=e*te*te+2*n*te*ne+t*ne*ne,a=e+t-i;re=i>1.25*Math.max(a,1e-9)}let ie=Math.hypot(F,I);!re&&ie>1&&(te=-I/ie,ne=F/ie);let R=-ne,z=te;R*-F+z*-I<0&&(R=-R,z=-z),l.Z.copy(C).multiplyScalar(R).addScaledVector(w,z).normalize(),l.X.crossVectors(l.Y,l.Z).normalize();let B=new Z().makeBasis(l.X,l.Y,l.Z);l.quat.setFromRotationMatrix(B),l.toScan.copy(B).setPosition(l.origin),l.toLocal.copy(l.toScan).invert(),l.scanSign=v<0?-1:1,l.prep=w_(s,c,h,v<0);let ae=new Uint8Array(Math.floor(c.length/3));for(let e of h)ae[e]=1;let oe=new Mn().setFromPoints(i).expandByScalar(p_),se=[],ce=p_*p_;for(let e=0;e<ae.length;e++){if(ae[e])continue;let t=c[e*3]*3,n=c[e*3+1]*3,r=c[e*3+2]*3,a=(s[t]+s[n]+s[r])/3,o=(s[t+1]+s[n+1]+s[r+1])/3,l=(s[t+2]+s[n+2]+s[r+2])/3;if(!((a-L.x)**2+(o-L.y)**2+(l-L.z)**2>256)){if(oe.containsPoint(b_.set(a,o,l))){let e=!1;for(let t of i)if(t.distanceToSquared(b_)<ce){e=!0;break}if(e)continue}se.push(e)}}l.neighbors=se.length?w_(s,c,se,v<0):null;let le=i.map(e=>l.local(e)),ue=Bg(le.map(e=>[e.x,e.z]),[0,0],40);if(!ue)return`O contorno tem reentrâncias que o motor ainda não reproduz. Marque a margem com um contorno mais regular.`;let de={point:new Y,distance:0,faceIndex:-1};for(let e=0;e<40;e++){let t=ue[e];x_.lerpVectors(le[t.edge],le[(t.edge+1)%le.length],t.f);let r=Og(n).closestPointToPoint(l.scan(x_,S_),de,0,.5);r&&l.local(r.point,x_),l.ring[e*3]=x_.x,l.ring[e*3+1]=x_.y,l.ring[e*3+2]=x_.z}let fe=l.prep.getAttribute(`position`),pe=-1/0;for(let e=0;e<fe.count;e++)pe=Math.max(pe,l.local(b_.fromBufferAttribute(fe,e),x_).y);l.yTop=pe+1;let me=0,he=0;for(let e=0;e<40;e++){let t=e/40*Rm,n=Math.cos(t),r=Math.sin(t),i=Math.hypot(l.ring[e*3],l.ring[e*3+2]),a=zm(Math.ceil(i/d_),32,200),o=new Float32Array((a+1)*3);o[0]=l.ring[e*3],o[1]=l.ring[e*3+1],o[2]=l.ring[e*3+2];let s=0;for(let e=1;e<=a;e++){let t=i*(1-e/a),c=t*n,u=t*r,d=l.heightAt(c,u);if(he++,o[e*3]=c,o[e*3+2]=u,d===null)me++,o[e*3+1]=NaN;else{o[e*3+1]=d;for(let t=s+1;t<e;t++)o[t*3+1]=o[s*3+1]+(d-o[s*3+1])*(t-s)/(e-s);s=e}}for(let e=s+1;e<=a;e++)o[e*3+1]=o[s*3+1];l.profiles.push(o)}if(me>he*.35)return l.dispose(),`Não foi possível ler a superfície do preparo dentro da linha. Confira se a linha contorna o preparo.`;let ge=1/0,_e=-1/0,ve=1/0;for(let e=0;e<40;e++)ve=Math.min(ve,l.ring[e*3+1]);for(let e of l.profiles)for(let t=1;t<e.length;t+=3)ge=Math.min(ge,e[t]),_e=Math.max(_e,e[t]);return _e-ve>v_.above||ve-ge>v_.below?(l.dispose(),`A superfície dentro da linha sobe ou desce mais do que um preparo. Confira se a linha contorna só o dente preparado.`):(l.opp=r,l.measure(r),l.dims.xPlus-l.dims.xMinus<v_.space?(l.dispose(),`Não há espaço entre os dentes vizinhos para uma peça neste lugar. Confira a linha de margem.`):l)}heightAt(e,t){y_.origin.set(e,this.yTop,t).applyMatrix4(this.toScan),y_.direction.copy(this.Y).negate();let n=Og(this.prep).raycastFirst(y_,2);return n?this.yTop-n.distance:null}castLocal(e,t,n,r,i,a,o,s){y_.origin.set(t,n,r).applyMatrix4(this.toScan),y_.direction.set(i,a,o).transformDirection(this.toScan);let c=Og(e).raycastFirst(y_,2,0,s);return c?c.distance:null}setOpposing(e){e!==this.opp&&(this.opp=e,this.measure(e))}measure(e){let t=this.ring,n=1/0,r=-1/0,i=1/0,a=-1/0,o=1/0,s=-1/0;for(let e=0;e<40;e++)n=Math.min(n,t[e*3]),r=Math.max(r,t[e*3]),i=Math.min(i,t[e*3+2]),a=Math.max(a,t[e*3+2]),o=Math.min(o,t[e*3+1]);for(let e of this.profiles)for(let t=1;t<e.length;t+=3)s=Math.max(s,e[t]);let c=(i+a)/2,l=(a-i)/2/h_,u=(n+r)/2,[d,,f]=og[sg(this.id)][this.type],p=this.shape??c_(this.type,`Convexo`,1),m=0;for(let e=-6;e<=6;e++)for(let t=-6;t<=6;t++)m=Math.max(m,p.relief(e/6*.87,t/6*.87));let h=1/0;if(e)for(let t=0;t<=8;t++)for(let i=0;i<=8;i++){let a=n+(r-n)*t/8,s=c+l*.9*(2*i/8-1),u=this.castLocal(e,a,o-1,s,0,1,0,40);u!==null&&(h=Math.min(h,o-1+u))}let g=s+Yg+.3,_=h<1/0?Math.max(h,g+m):s+2,v=1/0,y=1/0,b=-1/0;if(this.neighbors){for(let e of[.4,.55,.7,.85])for(let t of[-.35,0,.35]){let n=_*e,r=c+l*t,i=this.castLocal(this.neighbors,u,n,r,1,0,0,14),a=this.castLocal(this.neighbors,u,n,r,-1,0,0,14);i!==null&&(v=Math.min(v,i)),a!==null&&(y=Math.min(y,a))}if(h===1/0){let e=this.neighbors.getAttribute(`position`);for(let t=0;t<e.count;t++)this.local(b_.fromBufferAttribute(e,t),x_),Math.abs(x_.z-c)<l&&Math.abs(x_.x-u)<d+4&&(b=Math.max(b,x_.y))}}let x=(r-n)/2/h_,S=v<1/0,C=y<1/0,w,T;h<1/0?(w=h-fg-m,T=`antagonista`):b>g?(w=b-.2-m,T=`vizinhos`):(w=f,T=`tabela`),this.dims={xPlus:S?u+v:u+x,xMinus:C?u-y:u-x,hasPlus:S,hasMinus:C,oz:c,b:l,H0:Math.max(w,g),heightFrom:T}}roof(e){return this.intrados(e).roofY}intrados(e){if(this.intr&&this.intr.cement===e)return this.intr;let t=this.prep,n=Og(t),r=t.getAttribute(`position`),i=t.getIndex(),a={point:new Y,distance:0,faceIndex:-1},o=new Y,s=new Y,c=(e,t)=>{let c=Math.hypot(e.x,e.z),l=n.closestPointToPoint(this.scan(e,s),a,0,f_);if(!l)return;let u=l.faceIndex*3;x_.fromBufferAttribute(r,i.getX(u)),S_.fromBufferAttribute(r,i.getX(u+1)),C_.fromBufferAttribute(r,i.getX(u+2)),o.subVectors(S_,x_).cross(C_.sub(x_)),o.lengthSq()<1e-20?o.copy(this.Y):o.normalize(),s.copy(l.point).addScaledVector(o,t);for(let e=0;e<2&&t>0;e++){let e=n.closestPointToPoint(s,a,0,t);if(!e||e.distance>t-.002||e.distance<1e-6)break;s.sub(e.point).multiplyScalar(t/e.distance).add(e.point)}this.local(s,e);let d=Math.hypot(e.x,e.z),f=c+t+d_;d>f&&(e.x*=f/d,e.z*=f/d)},l=[],u=0;for(let e of this.profiles){let t=e.length/3,n=new Float32Array(t);for(let r=1;r<t;r++)n[r]=n[r-1]+Math.hypot(e[r*3]-e[r*3-3],e[r*3+1]-e[r*3-2],e[r*3+2]-e[r*3-1]);l.push(n),u=Math.max(u,n[t-1])}let d=zm(Math.ceil(u/l_),u_.min,u_.max),f=[],p=new Y,m=-1/0,h=this.profiles[0],g=h.length/3-1;p.set(h[g*3],h[g*3+1],h[g*3+2]),c(p,e*zm(l[0][g]/1,0,1)),f.push(p.x,p.y,p.z),m=Math.max(m,p.y);for(let t=d-1;t>=1;t--)for(let n=0;n<40;n++){let r=this.profiles[n],i=l[n],a=i.length-1,o=i[a]*t/d,s=0,u=a;for(;u-s>1;){let e=s+u>>1;i[e]<o?s=e:u=e}let h=(o-i[s])/(i[u]-i[s]||1);p.set(r[s*3]+(r[u*3]-r[s*3])*h,r[s*3+1]+(r[u*3+1]-r[s*3+1])*h,r[s*3+2]+(r[u*3+2]-r[s*3+2])*h),c(p,e*zm(o/1,0,1)),f.push(p.x,p.y,p.z),p.y>m&&(m=p.y)}return this.intr={cement:e,pos:f,rings:d,roofY:m},this.intr}minHeight(e){return this.roof(e)+Yg}crown(e){let t=e.cimento/1e3,n=e.largura/100,r=this.dims,i=this.intrados(t),a=this.shape??c_(this.type,e.emerg,e.cuspide/100),o=(r.xPlus+r.xMinus)/2,s=Math.max(1,(r.xPlus-r.xMinus)/2*n),c=r.oz,l=r.b,u=Math.max(r.H0+e.altura,this.minHeight(t)),d=i.pos.slice(),f=[0],p=[!0];for(let e=1;e<i.rings;e++)f.push(1+(e-1)*40),p.push(!1);let m=f.length,h=this.ring,g=[],_=new Float64Array(80),v=(e,n,r)=>{let i=this.heightAt(e,r);return i===null?n:Math.max(n,i+t+Yg)};for(let e=0;e<=12;e++){let t=e/12;if(f.push(d.length/3),p.push(!1),g.push(d.length/3),e===0){for(let e=0;e<120;e++)d.push(h[e]);continue}let n=1-Bm(0,g_,t),r=Bm(.75,1,t);for(let i=0;i<40;i++){let f=i/40*Rm,p=Math.cos(f),m=Math.sin(f),g=a.equator(f,s,l),y=a.wall(f,0),b=a.wall(f,t),x=o+b.r*g*p+(h[i*3]-(o+y.r*g*p))*n,S=c+b.r*g*m+(h[i*3+2]-(c+y.r*g*m))*n,C=h[i*3+1],w=C+(u-C)*b.h+(r?r*a.relief((x-o)/s,(S-c)/l):0);d.push(x,v(x,w,S),S),e===12&&(_[i*2]=x,_[i*2+1]=S)}}for(let e=1;e<8;e++){let t=1-e/8;f.push(d.length/3),p.push(!1);for(let e=0;e<40;e++){let n=o+(_[e*2]-o)*t,r=c+(_[e*2+1]-c)*t;d.push(n,v(n,u+a.relief((n-o)/s,(r-c)/l),r),r)}}f.push(d.length/3),p.push(!0),d.push(o,v(o,u+a.relief(0,0),c),c);let y=Jg(d,f,p);return{...y,outerStart:y.starts[m],side:g,marginY:0,cut:0}}};function j_(e){let t=new Map;for(let n=0;n+2<e.length;n+=3)for(let r=0;r<3;r++){let i=e[n+r],a=e[n+(r+1)%3],o=i<a?i*4294967296+a:a*4294967296+i;t.set(o,(t.get(o)??0)+1)}let n=0;for(let e of t.values())e!==2&&n++;return n}function M_(e,t){let n=Array.from({length:t},()=>new Set);for(let t=0;t+2<e.length;t+=3)for(let r=0;r<3;r++){let i=e[t+r],a=e[t+(r+1)%3];n[i].add(a),n[a].add(i)}return n.map(e=>[...e])}var N_=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],P_=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],F_=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],I_=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},L_=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];function R_(e){let t=new Map,n=(e,t)=>e<t?e*4294967296+t:t*4294967296+e;for(let r=0;r+2<e.length;r+=3)for(let i=0;i<3;i++){let a=n(e[r+i],e[r+(i+1)%3]);t.set(a,(t.get(a)??0)+1)}let r=new Map;for(let i=0;i+2<e.length;i+=3)for(let a=0;a<3;a++){let o=e[i+a],s=e[i+(a+1)%3];if(t.get(n(o,s))!==1)continue;let c=r.get(o);c||r.set(o,c=[]),c.push(s)}let i=[],a=new Set;for(let[e]of r){if(a.has(e))continue;let t=[],n=e;for(let i=0;i<r.size+2&&!a.has(n);i++){a.add(n),t.push(n);let i=r.get(n);if(!i||!i.length||(n=i[0],n===e))break}t.length>=3&&i.push(t)}return i}function z_(e,t){let n=0;for(let r=0;r<t.length;r++){let i=t[r]*3,a=t[(r+1)%t.length]*3;n+=Math.hypot(e[i]-e[a],e[i+1]-e[a+1],e[i+2]-e[a+2])}return n}function B_(e,t){let n=[0,0,0];for(let r=0;r<t.length;r++){let i=t[r]*3,a=t[(r+1)%t.length]*3;n[0]+=(e[i+1]-e[a+1])*(e[i+2]+e[a+2]),n[1]+=(e[i+2]-e[a+2])*(e[i]+e[a]),n[2]+=(e[i]-e[a])*(e[i+1]+e[a+1])}return n}var V_=class{x0;y0;cell;h;nx;ny;constructor(e,t,n,r,i){this.x0=e,this.y0=t,this.cell=n,this.nx=Math.floor((r-e)/n)+1,this.ny=Math.floor((i-t)/n)+1,this.h=new Float32Array(this.nx*this.ny).fill(-1/0)}add(e,t,n){let r=Math.floor((e-this.x0)/this.cell),i=Math.floor((t-this.y0)/this.cell);if(r<0||i<0||r>=this.nx||i>=this.ny)return;let a=i*this.nx+r;n>this.h[a]&&(this.h[a]=n)}at(e,t){let n=Math.floor((e-this.x0)/this.cell),r=Math.floor((t-this.y0)/this.cell),i=-1/0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let a=n+t,o=r+e;if(a<0||o<0||a>=this.nx||o>=this.ny)continue;let s=this.h[o*this.nx+a];s>i&&(i=s)}return i}},H_={occlusal:[0,0,1],buccal:[0,1,0]},U_=.82;function W_(e,t,n,r,i,a,o){let s=1/0,c=-1/0,l=new Float32Array(t),u=new Float32Array(t),d=new Float32Array(t);for(let o=0;o<t;o++){let t=[e[o*3]-n[0],e[o*3+1]-n[1],e[o*3+2]-n[2]];l[o]=P_(t,i),u[o]=P_(t,r),d[o]=P_(t,a),l[o]<s&&(s=l[o]),l[o]>c&&(c=l[o])}let f=(c-s)/o||1,p=new Float32Array(40*o).fill(-1);for(let e=0;e<t;e++){let t=Math.min(o-1,Math.floor((l[e]-s)/f)),n=(Math.round(Math.atan2(d[e],u[e])/Rm*40)%40+40)%40,r=Math.hypot(u[e],d[e]);r>p[n*o+t]&&(p[n*o+t]=r)}return{r:p,h0:s,dh:f}}function G_(e,t,n,r,i,a){let{r:o,h0:s,dh:c}=W_(e,t,n,r,i,a,40),l=new Float32Array(40),u=new Float32Array(40),d=new Float32Array(40),f=new Float32Array(40);for(let e=0;e<40;e++){let t=o.subarray(e*40,(e+1)*40);for(let e=1;e<40;e++)t[e]<0&&(t[e]=t[e-1]);for(let e=38;e>=0;e--)t[e]<0&&(t[e]=t[e+1]);let n=0;for(let e=0;e<40;e++)t[e]>t[n]&&(n=e);let r=n,i=t[n]*U_;for(;r>0&&t[r-1]>=i&&t[r-1]<=t[r]+1e-6;)r--;let a=s+(r+.5)*c,p=t[r];if(r>0&&t[r-1]<i){let e=(t[r]-i)/(t[r]-t[r-1]||1);a-=e*c,p=i}l[e]=p,u[e]=a,d[e]=t[n],f[e]=s+(n+.5)*c}let p=l.slice(),m=u.slice();for(let e=0;e<40;e++){let t=[p[(e+40-1)%40],p[e],p[(e+1)%40]].sort((e,t)=>e-t);l[e]=t[1];let n=[m[(e+40-1)%40],m[e],m[(e+1)%40]].sort((e,t)=>e-t);u[e]=n[1]}return{neckR:l,neckY:u,eqR:d,eqY:f}}function K_(e,t,n,r){let i=e.positions,a=i.length/3,o=[],s=R_(e.indices);if(!s.length)throw Error(`O dente não tem bordo aberto: a linha cervical não foi encontrada (malha fechada).`);let c=s.map(e=>z_(i,e)),l=0;for(let e=1;e<s.length;e++)c[e]>c[l]&&(l=e);let u=s[l],d=c.filter((e,t)=>t!==l);d.length&&o.push(`${d.length} furo(s) além do bordo cervical (perímetro total ${d.reduce((e,t)=>e+t,0).toFixed(1)} mm).`),(c[l]<8||c[l]>60)&&o.push(`Bordo cervical com perímetro incomum (${c[l].toFixed(1)} mm).`);let f=[0,0,0];for(let e of u)f[0]+=i[e*3],f[1]+=i[e*3+1],f[2]+=i[e*3+2];f[0]/=u.length,f[1]/=u.length,f[2]/=u.length;let p=[0,0,0];for(let e=0;e<a;e++)p[0]+=i[e*3],p[1]+=i[e*3+1],p[2]+=i[e*3+2];p[0]/=a,p[1]/=a,p[2]/=a;let m,h=r?`arquivo`:`geometria`,g=I_(B_(i,u));P_(N_(p,f),g)<0&&(g[0]=-g[0],g[1]=-g[1],g[2]=-g[2]);let _=0;if(r){m=I_(r.occlusal);let e=1/0,t=-1/0;for(let n=0;n<a;n++){let r=P_([i[n*3],i[n*3+1],i[n*3+2]],m);r<e&&(e=r),r>t&&(t=r)}_=(P_(f,m)-e)/(t-e||1);let n=Math.acos(Math.min(1,Math.abs(P_(m,g))))*180/Math.PI;_>.45?(o.push(`A convenção do arquivo não confere (bordo aberto a ${(_*100).toFixed(0)}% da altura): referencial detectado pela geometria.`),m=g,h=`geometria`):n>12&&o.push(`Normal do bordo cervical a ${n.toFixed(0)}° do eixo oclusal do arquivo (corte irregular).`)}else m=g;let v=Math.abs(m[0])<.9?[1,0,0]:[0,1,0];v=I_(N_(v,L_(m,P_(v,m))));let y=F_(m,v),b=new Float32Array(a),x=new Float32Array(a),S=new Float32Array(a),C=-1/0,w=1/0;for(let e=0;e<a;e++){let t=[i[e*3]-f[0],i[e*3+1]-f[1],i[e*3+2]-f[2]];b[e]=P_(t,v),x[e]=P_(t,y),S[e]=P_(t,m),S[e]>C&&(C=S[e]),S[e]<w&&(w=S[e])}let T=0,E=0,D=0;for(let e=0;e<a;e++)S[e]>w+(C-w)*.55&&(T+=b[e],E+=x[e],D++);T/=D||1,E/=D||1;let O=1/0,k=-1/0,A=1/0,j=-1/0;for(let e=0;e<a;e++)b[e]<O&&(O=b[e]),b[e]>k&&(k=b[e]),x[e]<A&&(A=x[e]),x[e]>j&&(j=x[e]);let M=new V_(O,A,.3,k,j);for(let e=0;e<a;e++)M.add(b[e],x[e],S[e]);let N=0,P=0,F=0;for(let e=0;e<a;e++){let t=b[e]-T,n=x[e]-E;N+=t*t,P+=t*n,F+=n*n}let I=.5*Math.atan2(2*P,N-F),L=(N*Math.cos(I)**2+2*P*Math.cos(I)*Math.sin(I)+F*Math.sin(I)**2)/a,ee=(N+F)/a-L,te=Math.sqrt(Math.max(L,ee)/Math.max(Math.min(L,ee),1e-9)),ne=e=>{let t=1/0,n=-1/0;for(let r=0;r<a;r++){let i=b[r]*e[0]+x[r]*e[1];i<t&&(t=i),i>n&&(n=i)}return n-t},re=e=>{let t=ne(e)*.3,n=0,r=0;for(let i=-10;i<=10;i++){let a=i/10*t,o=M.at(T+e[0]*a,E+e[1]*a);o>-1/0&&(n+=o,r++)}return r?n/r:-1/0},ie=t>=4,R;if(h===`arquivo`&&r){let e=I_(N_(I_(r.buccal),L_(m,P_(I_(r.buccal),m)))),t=F_(m,e);R=[P_(t,v),P_(t,y)]}else{let e=0,t=ie?1/0:-1/0;for(let n=0;n<36;n++){let r=n/36*Math.PI,i=re([Math.cos(r),Math.sin(r)]);(ie?i<t:i>t)&&(t=i,e=r)}R=[Math.cos(e),Math.sin(e)]}let z=[-R[1],R[0]],B=[re(R),re(z)];h===`arquivo`&&(ie?B[0]>B[1]+.15:B[0]<B[1]-.15)&&o.push(`Pista do sulco/borda incisal discorda da convenção do arquivo (linha central MD ${B[0].toFixed(1)} × VL ${B[1].toFixed(1)} mm).`);let ae=ne(R),oe=ne(z),se=t===1||t===2?n===`U`:t>=6&&n===`L`;Math.abs(ae/oe-1)>.1&&ae>oe!==se&&o.push(`Extensões MD ${ae.toFixed(1)} × VL ${oe.toFixed(1)} mm fora do esperado para a posição ${t} (${n===`U`?`superior`:`inferior`}).`);let ce=[0,0];{let e=[1/0,1/0],t=[-1/0,-1/0];for(let n=0;n<a;n++){let r=(S[n]-w)/(C-w||1);if(r<.45||r>.8)continue;let i=(b[n]-T)*R[0]+(x[n]-E)*R[1],a=(b[n]-T)*z[0]+(x[n]-E)*z[1]>0?0:1;i<e[a]&&(e[a]=i),i>t[a]&&(t[a]=i)}ce[0]=t[0]-e[0],ce[1]=t[1]-e[1]}let le=[-1/0,-1/0],ue=0,de=0,fe=-1/0;for(let e=0;e<M.ny;e++)for(let t=0;t<M.nx;t++){let n=M.h[e*M.nx+t];if(n===-1/0)continue;let r=M.x0+(t+.5)*M.cell-T,i=M.y0+(e+.5)*M.cell-E,a=r*z[0]+i*z[1]>0?0:1;n>le[a]&&(le[a]=n),n>fe&&(fe=n,ue=r,de=i)}let pe=ce[0]>=ce[1]?1:-1;t===4||t===5?Math.abs(le[0]-le[1])>.3&&(pe=le[0]>le[1]?1:-1):t===6&&n===`U`&&(pe=ue*z[0]+de*z[1]>0?-1:1);let me;if(h===`arquivo`&&r){let e=I_(N_(I_(r.buccal),L_(m,P_(I_(r.buccal),m))));me=[P_(e,v),P_(e,y)],(me[0]*z[0]+me[1]*z[1]>0?1:-1)!==pe&&(t===4||t===5||t>=6)&&o.push(`Pista anatômica do lado vestibular discorda da convenção do arquivo.`)}else me=pe>0?z:[-z[0],-z[1]];let he=I_([v[0]*me[0]+y[0]*me[1],v[1]*me[0]+y[1]*me[1],v[2]*me[0]+y[2]*me[1]]),ge=I_(F_(m,he)),_e=[P_(ge,v),P_(ge,y)],ve=ue*_e[0]+de*_e[1],ye={sign:ve>=0?1:-1,weight:Math.abs(ve)<.15?0:t>=6?3:t===3?2:t<=2?1:.5};return{origin:f,X:ge,Y:m,Z:he,mesialSign:ye.sign,sideVote:ye,cues:{pcaRatio:te,centerLine:B,widthMD:ce,cuspZ:le,apexX:ve,rimLevel:_},warnings:o,rim:u,holes:d,mode:h}}function q_(e,t){let n=new Float32Array(e.length);for(let r=0;r<e.length;r+=3){let i=e[r],a=e[r+1],o=e[r+2];n[r]=t[0]*i+t[4]*a+t[8]*o+t[12],n[r+1]=t[1]*i+t[5]*a+t[9]*o+t[13],n[r+2]=t[2]*i+t[6]*a+t[10]*o+t[14]}return n}function J_(e,t,n,r={}){let i=K_(e,t,n,r.hint),{X:a,Y:o,Z:s}=i,c=e.positions.length/3,l=G_(e.positions,c,i.origin,a,o,s),u=[...i.origin],d=0,f=0,p=0;for(let e=0;e<40;e++){let t=e/40*Rm;d+=l.neckR[e]*Math.cos(t),p+=l.neckR[e]*Math.sin(t),f+=l.neckY[e]}d/=40,f/=40,p/=40;for(let e=0;e<3;e++)u[e]+=a[e]*d+o[e]*f+s[e]*p;let m=new Float64Array(16);m[0]=a[0],m[4]=a[1],m[8]=a[2],m[1]=o[0],m[5]=o[1],m[9]=o[2],m[2]=s[0],m[6]=s[1],m[10]=s[2],m[12]=-(a[0]*u[0]+a[1]*u[1]+a[2]*u[2]),m[13]=-(o[0]*u[0]+o[1]*u[1]+o[2]*u[2]),m[14]=-(s[0]*u[0]+s[1]*u[1]+s[2]*u[2]),m[15]=1;let h=q_(e.positions,m),g=G_(h,c,[0,0,0],[1,0,0],[0,1,0],[0,0,1]),_=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];for(let e=0;e<c;e++)for(let t=0;t<3;t++){let n=h[e*3+t];n<_[t]&&(_[t]=n),n>v[t]&&(v[t]=n)}let y=1/0,b=-1/0,x=1/0,S=-1/0;for(let e=0;e<c;e++){if(h[e*3+1]<0)continue;let t=h[e*3],n=h[e*3+2];t<y&&(y=t),t>b&&(b=t),n<x&&(x=n),n>S&&(S=n)}let C=i.warnings.slice();return(v[1]<4||v[1]>20)&&C.push(`Altura da coroa incomum (${v[1].toFixed(1)} mm).`),{positions:h,indices:e.indices.slice(),rim:Uint32Array.from(i.rim),mesialSign:r.mesialSign??i.mesialSign,sideVote:i.sideVote,md:b-y,vl:S-x,height:v[1],min:_,max:v,cervicalRing:{r:g.neckR,y:g.neckY},equator:{r:g.eqR,y:g.eqY},toCanonical:m,mode:i.mode,warnings:C,cues:i.cues,holes:i.holes}}function Y_(e){let t=e.positions.slice();for(let e=0;e<t.length;e+=3)t[e]=-t[e];let n=e.indices.slice();for(let e=0;e+2<n.length;e+=3){let t=n[e+1];n[e+1]=n[e+2],n[e+2]=t}let r=e.rim.slice().reverse(),i=e=>{let t=new Float32Array(40),n=new Float32Array(40);for(let r=0;r<40;r++){let i=((20-r)%40+40)%40;t[i]=e.r[r],n[i]=e.y[r]}return{r:t,y:n}},a=e.toCanonical.slice();for(let e=0;e<4;e++)a[e*4]=-a[e*4];return{...e,positions:t,indices:n,rim:r,mesialSign:e.mesialSign===1?-1:1,sideVote:{sign:e.sideVote.sign===1?-1:1,weight:e.sideVote.weight},min:[-e.max[0],e.min[1],e.min[2]],max:[-e.min[0],e.max[1],e.max[2]],cervicalRing:i(e.cervicalRing),equator:i(e.equator),toCanonical:a}}var X_=/\.(stl|obj|ply|off|eoff)$/i,Z_=/^(upper|upperjaw|superior|maxilar|maxila|upper_jaw|u)$/i,Q_=/^(lower|lowerjaw|inferior|mandibula|mandíbula|lower_jaw|l)$/i;function $_(e){let t=e.toLowerCase();return t?t.includes(`thimble`)?`reduced-thimble`:t.includes(`facial`)?`reduced-facial-ridges`:t.includes(`incisal`)?`reduced-incisal-ridges`:t.includes(`retention`)?`reduced-retention`:`outra`:`anatomico`}function ev(e){let t=e.replace(/\\/g,`/`).split(`/`).filter(Boolean);if(!t.length)return null;let n=t[t.length-1],r=t.slice(0,-1),i=/^(\d)\.png$/i.exec(n);if(i&&r.length>=1){let e=r[r.length-1],t=Z_.test(e)?`U`:Q_.test(e)?`L`:null;return t?{thumbnail:!0,collection:r.length>=2?r[r.length-2]:``,key:t+i[1]}:null}if(!X_.test(n))return null;let a=n.replace(X_,``);if(r.length>=1){let t=r[r.length-1],n=Z_.test(t)?`U`:Q_.test(t)?`L`:null,i=/^([1-8])(?:[-_ ](.+))?$/.exec(a);if(n&&i){let t=i[2]??``;return{collection:r.length>=2?r.slice(0,-1).join(`/`):``,arch:n,position:Number(i[1]),variant:$_(t),variantLabel:t,fdi:null,path:e}}}let o=/(?:^|[^0-9])([1-4][1-8])(?:[-_ ](.+))?$/.exec(a);if(o){let t=Number(o[1]),n=o[2]??``;return{collection:r.join(`/`),arch:sg(t),position:cg(t),variant:$_(n),variantLabel:n,fdi:t,path:e}}return null}function tv(e){let t={collections:new Map},n=e=>{let n=t.collections.get(e);return n||t.collections.set(e,n={name:e,teeth:new Map,thumbnails:new Map,ignored:[]}),n};for(let t of e){let e=ev(t.path);if(!e){(X_.test(t.path)||/\.png$/i.test(t.path))&&n(``).ignored.push(t.path);continue}if(`thumbnail`in e){n(e.collection).thumbnails.set(e.key,t.bytes);continue}let r={...e,bytes:t.bytes},i=r.arch+r.position,a=n(r.collection).teeth.get(i)??[];a.push(r),n(r.collection).teeth.set(i,a)}return t}function nv(e,t,n,r=`anatomico`){let i=e.collections.get(t);if(!i)return null;let a=i.teeth.get(sg(n)+cg(n))??[];return a.find(e=>e.fdi===n&&e.variant===r)??a.find(e=>e.fdi===null&&e.variant===r)??a.find(e=>e.variant===r)??null}function rv(n){if(/\.(off|eoff)$/i.test(n.path)){let e=t(n.bytes);return{positions:e.positions,indices:e.indices}}let r=n.path.split(`/`).pop()??n.path,a=i(e(r,n.bytes));return{positions:a.positions,indices:a.indices}}var iv=new WeakMap;function av(e){return e.fdi===null?H_:null}function ov(e,t){let n=iv.get(e);if(n&&(t===void 0||n.mesialSign===t))return n;let r=J_(rv(e),e.position,e.arch,{hint:av(e),mesialSign:t});return iv.set(e,r),r}function sv(e){let t=[],n=[],r=[...e.teeth.keys()],i=r.filter(e=>Number(e[1])>=6||Number(e[1])===3),a=new Set(i.length?i:r);for(let[r,i]of e.teeth){let e=i.find(e=>e.variant===`anatomico`);if(!e||!a.has(r)&&e.fdi===null)continue;let o,s;if(e.fdi!==null){let t=Math.floor(e.fdi/10);o=t===2||t===4?1:-1,s=10}else try{let t=ov(e);o=t.sideVote.sign,s=t.sideVote.weight;for(let r of t.warnings)n.push(`${e.path}: ${r}`)}catch(t){n.push(`${e.path}: ${t instanceof Error?t.message:String(t)}`);continue}t.push({key:r,path:e.path,mesialSign:o,weight:s})}let o=0;for(let e of t)o+=e.mesialSign*e.weight;let s=o>=0?1:-1,c=t.filter(e=>e.weight>0&&e.mesialSign!==s).map(e=>e.path);return{side:s===1?`esquerdo`:`direito`,mesialSign:s,votes:t,dissent:c,warnings:n}}var cv=new WeakMap;function lv(e){let t=cv.get(e);return t||cv.set(e,t=sv(e)),t}function uv(e,t,n,r=`anatomico`){let i=nv(e,t,n,r),a=e.collections.get(t);if(!i||!a)return null;let o=Math.floor(n/10),s=o===2||o===4?1:-1,c;if(i.fdi!==null){let e=Math.floor(i.fdi/10);c=e===2||e===4?1:-1}else c=lv(a).mesialSign;let l=ov(i,c),u=c!==s;return{tooth:u?Y_(l):l,entry:i,mirrored:u}}function dv(e,t){if(e.fdi!==null)return e.fdi;let n=t.mesialSign===1;return(e.arch===`U`?n?2:1:n?3:4)*10+e.position}function fv(e){let t=0;for(let n=0;n+8<e.length;n+=9){let r=e[n+3]-e[n],i=e[n+4]-e[n+1],a=e[n+5]-e[n+2],o=e[n+6]-e[n],s=e[n+7]-e[n+1],c=e[n+8]-e[n+2];t+=.5*Math.hypot(i*c-a*s,a*o-r*c,r*s-i*o)}return t}function pv(e,t){let n=Math.floor(e.length/9),r=Math.sqrt(2*fv(e)/Math.max(1,t));(!(r>0)||!Number.isFinite(r))&&(r=1);let i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let t=0;t<n*9;t+=3){let n=e[t],r=e[t+1],u=e[t+2];n<i&&(i=n),n>s&&(s=n),r<a&&(a=r),r>c&&(c=r),u<o&&(o=u),u>l&&(l=u)}let u=Math.max(s-i,c-a,l-o);u/r>131e3&&(r=u/131e3);let d=Math.floor((s-i)/r)+1,f=Math.floor((c-a)/r)+1,p=new Map,m=[],h=[],g=[],_=t=>{let n=e[t],s=e[t+1],c=e[t+2],l=Math.floor((n-i)/r)+d*(Math.floor((s-a)/r)+f*Math.floor((c-o)/r)),u=p.get(l);return u===void 0&&(u=h.length,p.set(l,u),m.push(0,0,0),h.push(0)),m[u*3]+=n,m[u*3+1]+=s,m[u*3+2]+=c,h[u]++,u};for(let e=0;e<n;e++){let t=_(e*9),n=_(e*9+3),r=_(e*9+6);t!==n&&n!==r&&t!==r&&g.push(t,n,r)}let v=new Float32Array(h.length*3);for(let e=0;e<h.length;e++)v[e*3]=m[e*3]/h[e],v[e*3+1]=m[e*3+1]/h[e],v[e*3+2]=m[e*3+2]/h[e];return{positions:v,index:new Uint32Array(g)}}var mv=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],hv=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function gv(e,t,n=1,r=`L`){let i=[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2],a=.5*Math.max(t[0]-e[0],t[1]-e[1],t[2]-e[2])*1.15,o=(e,t)=>({right:hv(mv(t,e)),up:t,toward:e,center:i,halfWidth:a}),s=[n,0,0],c=[-n,0,0],l=r===`U`?[0,-1,0]:[0,1,0];return{oclusal:o([0,1,0],[0,0,1]),vestibular:o([0,0,1],l),lingual:o([0,0,-1],l),mesial:o(s,l),distal:o(c,l)}}function _v(e,t=4e3,n=`L`){let r=new Float32Array(e.indices.length*3);for(let t=0;t<e.indices.length;t++){let n=e.indices[t]*3;r[t*3]=e.positions[n],r[t*3+1]=e.positions[n+1],r[t*3+2]=e.positions[n+2]}let i=e.indices.length/3>t*1.5?pv(r,t):{positions:e.positions,index:e.indices};return{mesh:{positions:i.positions,index:i.index},min:e.min,max:e.max,views:gv(e.min,e.max,e.mesialSign,n)}}function vv(e,t){let n=new Float32Array(e.length);for(let r=0;r+2<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;for(let e of[i,a,o])n[e]+=p,n[e+1]+=m,n[e+2]+=h}for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2])||1;n[e]/=t,n[e+1]/=t,n[e+2]/=t}return n}function yv(e,t,n={}){let r=n.width??240,i=n.height??180,a=n.background??[255,255,255,255],o=new Uint8ClampedArray(r*i*4);for(let e=0;e<r*i;e++)o[e*4]=a[0],o[e*4+1]=a[1],o[e*4+2]=a[2],o[e*4+3]=a[3];let s=new Float32Array(r*i).fill(-1/0),c=r/2/t.halfWidth,{right:l,up:u,toward:d,center:f}=t,p=hv(n.light??[d[0]*.7+u[0]*.5-l[0]*.35,d[1]*.7+u[1]*.5-l[1]*.35,d[2]*.7+u[2]*.5-l[2]*.35]),m=(e,t,n)=>{let a=e-f[0],o=t-f[1],s=n-f[2];return[r/2+(a*l[0]+o*l[1]+s*l[2])*c,i/2-(a*u[0]+o*u[1]+s*u[2])*c,a*d[0]+o*d[1]+s*d[2]]},h=(e,t,n)=>{let a=e.positions,c=e.index,l=vv(a,c),u=e.colors??null,d=a.length/3,f=new Float32Array(d*3),h=new Float32Array(d);for(let e=0;e<d;e++){let t=m(a[e*3],a[e*3+1],a[e*3+2]);f[e*3]=t[0],f[e*3+1]=t[1],f[e*3+2]=t[2];let n=l[e*3]*p[0]+l[e*3+1]*p[1]+l[e*3+2]*p[2];h[e]=.3+.7*Math.abs(n)}for(let e=0;e+2<c.length;e+=3){let a=c[e],l=c[e+1],d=c[e+2],p=f[a*3],m=f[a*3+1],g=f[l*3],_=f[l*3+1],v=f[d*3],y=f[d*3+1],b=Math.max(0,Math.floor(Math.min(p,g,v))),x=Math.min(r-1,Math.ceil(Math.max(p,g,v))),S=Math.max(0,Math.floor(Math.min(m,_,y))),C=Math.min(i-1,Math.ceil(Math.max(m,_,y)));if(b>x||S>C)continue;let w=(_-y)*(p-v)+(v-g)*(m-y);if(!(Math.abs(w)<1e-12))for(let e=S;e<=C;e++)for(let i=b;i<=x;i++){let c=i+.5,b=e+.5,x=((_-y)*(c-v)+(v-g)*(b-y))/w,S=((y-m)*(c-v)+(p-v)*(b-y))/w,C=1-x-S;if(x<-1e-4||S<-1e-4||C<-1e-4)continue;let T=x*f[a*3+2]+S*f[l*3+2]+C*f[d*3+2],E=e*r+i;if(T<=s[E])continue;s[E]=T;let D=x*h[a]+S*h[l]+C*h[d],O=t[0],k=t[1],A=t[2];u&&(O=x*u[a*3]+S*u[l*3]+C*u[d*3],k=x*u[a*3+1]+S*u[l*3+1]+C*u[d*3+1],A=x*u[a*3+2]+S*u[l*3+2]+C*u[d*3+2]);let j=E*4;o[j]=o[j]*(1-n)+O*D*n,o[j+1]=o[j+1]*(1-n)+k*D*n,o[j+2]=o[j+2]*(1-n)+A*D*n,o[j+3]=255}}};for(let e of n.extra??[])h(e.mesh,e.color,e.alpha??1);h(e,n.color??[236,226,205],1);for(let e of n.lines??[]){let t=e.points,n=e.width??1;for(let a=0;a+5<t.length;a+=3){let s=m(t[a],t[a+1],t[a+2]),c=m(t[a+3],t[a+4],t[a+5]),l=Math.ceil(Math.hypot(c[0]-s[0],c[1]-s[1])*2)+1;for(let t=0;t<=l;t++){let a=s[0]+(c[0]-s[0])*t/l,u=s[1]+(c[1]-s[1])*t/l;for(let t=-n;t<=n;t++)for(let s=-n;s<=n;s++){if(s*s+t*t>n*n)continue;let c=Math.round(a+s),l=Math.round(u+t);if(c<0||l<0||c>=r||l>=i)continue;let d=(l*r+c)*4;o[d]=e.color[0],o[d+1]=e.color[1],o[d+2]=e.color[2],o[d+3]=255}}}}return{width:r,height:i,rgba:o,depth:s}}var bv=120,xv=.5,Sv=.85,Cv=.3,wv={base:0,place:0,antagonist:0,candidates:0,builds:0,reset(){this.base=this.place=this.antagonist=this.candidates=this.builds=0}},Tv=()=>typeof performance<`u`?performance.now():Date.now(),Ev=new Sr;new Y;var Dv=class{tooth;geometry;cx;cz;a;b;eqR=new Float32Array(40);eqY=new Float32Array(40);wallR=new Float32Array(520);wallY=new Float32Array(520);cap;profile;profileBands=1;profileDh=1;capFirst=1;nsEq=6;ref;cusp;top;constructor(e){this.tooth=e;let t=new dr;t.setAttribute(`position`,new Xn(e.positions,3)),t.setIndex(new Xn(e.indices,1)),eh(t),this.geometry=t;let n=1/0,r=-1/0,i=1/0,a=-1/0;for(let t=0;t<40;t++){let o=t/40*Rm,s=e.equator.r[t]*Math.cos(o),c=e.equator.r[t]*Math.sin(o);n=Math.min(n,s),r=Math.max(r,s),i=Math.min(i,c),a=Math.max(a,c)}this.cx=(n+r)/2,this.cz=(i+a)/2,this.a=(r-n)/2,this.b=(a-i)/2;let o=e.positions,s=o.length/3,c=0;for(let e=0;e<s;e++)o[e*3+1]>c&&(c=o[e*3+1]);this.top=c;let l=c/60;this.profile=new Float32Array(2400);let u=new Float32Array(2400).fill(-1);for(let e=0;e<s;e++){let t=o[e*3+1];if(t<0)continue;let n=o[e*3]-this.cx,r=o[e*3+2]-this.cz,i=(Math.round(Math.atan2(r,n)/Rm*40)%40+40)%40,a=Math.min(59,Math.floor(t/l)),s=Math.hypot(n,r);s>u[i*60+a]&&(u[i*60+a]=s)}for(let e=0;e<40;e++){let t=u.subarray(e*60,(e+1)*60);for(let e=1;e<60;e++)t[e]<0&&(t[e]=t[e-1]);for(let e=58;e>=0;e--)t[e]<0&&(t[e]=t[e+1]);let n=0;for(let e=0;e<60;e++)t[e]>t[n]&&(n=e);this.eqR[e]=t[n],this.eqY[e]=(n+.5)*l;for(let r=0;r<60;r++)this.profile[e*60+r]=t[r]/t[n]}this.profileBands=60,this.profileDh=l;let d=new Float32Array(23);for(let e=0;e<=22;e++)d[e]=e===22?0:1-(e/22)**1.6;let f=new Float32Array(23*bv),p=Og(t);for(let e=0;e<=22;e++){for(let t=0;t<bv;t++){let n=t/bv*Rm,r=this.eqAt(n),i=this.cx+d[e]*r*Math.cos(n),a=this.cz+d[e]*r*Math.sin(n);Ev.origin.set(i,c+1,a),Ev.direction.set(0,-1,0);let o=p.raycastFirst(Ev,2,0,c+2),s=o?o.point.y:NaN;(e===0||!(s>=0))&&(s=e===0?this.eqYAt(n):NaN),f[e*bv+t]=s}let t=f.subarray(e*bv,(e+1)*bv);for(let e=0;e<bv;e++)if(Number.isNaN(t[e])){let n=e,r=e;for(;Number.isNaN(t[n])&&n>e-bv;)n--;for(;Number.isNaN(t[r])&&r<e+bv;)r++;let i=t[(n%bv+bv)%bv],a=t[r%bv];t[e]=Number.isFinite(i)&&Number.isFinite(a)?(i+a)/2:Number.isFinite(i)?i:Number.isFinite(a)?a:this.eqYAt(e/bv*Rm)}}this.cap={rho:d,h:f};let m=0;for(let e=0;e<=22;e++)Math.abs(d[e]-Sv)<Math.abs(d[m]-Sv)&&(m=e);let h=0;for(let e=0;e<bv;e++)h+=f[m*bv+e];let g=h/bv,_=0;for(let e=0;e<40;e++)_+=this.eqY[e]/40;this.nsEq=zm(Math.round(12*_/g),3,9);for(let e=0;e<40;e++){let t=e/40*Rm;for(let n=0;n<=12;n++){let r,i;if(n<=this.nsEq){i=n/this.nsEq*this.eqY[e];let t=zm(i/this.profileDh-.5,0,this.profileBands-1),a=Math.floor(t),o=t-a;r=n===this.nsEq?1:Math.min(1,this.profile[e*this.profileBands+a]*(1-o)+this.profile[e*this.profileBands+Math.min(this.profileBands-1,a+1)]*o)}else r=1-(n-this.nsEq)/(12-this.nsEq)*.15000000000000002,i=this.capAt(r,t);this.wallR[e*13+n]=r,this.wallY[e*13+n]=i}}let v=1;for(;v<22&&d[v]>=Sv;)v++;this.capFirst=v,this.ref=g;let y=-1/0;for(let e=0;e<f.length;e++)f[e]>y&&(y=f[e]);this.cusp=Math.max(.2,y-this.ref)}dispose(){nh(this.geometry)}eqAt(e){return this.ringAt(this.eqR,e)}eqYAt(e){return this.ringAt(this.eqY,e)}ringAt(e,t){let n=(t/Rm%1+1)%1*40,r=Math.floor(n),i=n-r;return e[r%40]*(1-i)+e[(r+1)%40]*i}capAt(e,t){let{rho:n,h:r}=this.cap;e=zm(e,0,1);let i=0;for(;i<22&&n[i+1]>e;)i++;let a=n[i]===n[i+1]?0:(n[i]-e)/(n[i]-n[i+1]),o=(t/Rm%1+1)%1*bv,s=Math.floor(o),c=o-s,l=e=>r[e*bv+s%bv]*(1-c)+r[e*bv+(s+1)%bv]*c;return l(i)*(1-a)+l(i+1)*a}capAtXZ(e,t){let n=e-this.cx,r=t-this.cz,i=Math.atan2(r,n);return this.capAt(Math.hypot(n,r)/this.eqAt(i),i)}equator(e,t,n){let r=Math.cos(e),i=Math.sin(e),a=this.eqAt(e);return Math.hypot(a*r*t/this.a,a*i*n/this.b)}wall(e,t){let n=(e/Rm%1+1)%1*40,r=Math.floor(n)%40,i=(r+1)%40,a=n-Math.floor(n),o=zm(t,0,1)*12,s=Math.floor(o),c=Math.min(12,s+1),l=o-s,u=e=>this.wallR[e*13+s]*(1-l)+this.wallR[e*13+c]*l,d=e=>this.wallY[e*13+s]*(1-l)+this.wallY[e*13+c]*l;return{r:u(r)*(1-a)+u(i)*a,h:(d(r)*(1-a)+d(i)*a)/this.ref}}relief(e,t){return this.capAtXZ(this.cx+e*this.a,this.cz+t*this.b)-this.ref}};function Ov(e,t,n,r){e.push(t,n,r)}function kv(e,t,n,r,i,a=1,o=1){let s=0,c=0,l=n/a,u=i/o;for(;s<l||c<u;){let d=t+s*a%n,f=t+(s+1)*a%n,p=r+c*o%i,m=r+(c+1)*o%i;s<l&&(c>=u||(s+1)/l<=(c+1)/u)?(Ov(e,d,f,p),s++):(Ov(e,d,m,p),c++)}}function Av(e,t,n,r,i,a){for(let o=0;o<r;o+=i){let s=n+o,c=n+(o+i)%r;a?Ov(e,t,c,s):Ov(e,s,c,t)}}var jv=(e,t,n,r,i)=>{let a=e/n,o=t/r,s=Math.abs(a)<.25?`centro`:a*i>0?`mesial`:`distal`;return`${Math.abs(o)<.2?`fossa central`:o>0?`vestibular`:`lingual`} ${s}`};function Mv(e,t,n,r={}){let i=e.shape;e.shape=n;let a=Tv(),o=e.crown(t);wv.base+=Tv()-a,wv.builds++,e.shape=i;let s=t.cimento/1e3,c=e.dims,l=o.outerStart,u=Array.from(o.positions.subarray(0,(l+40)*3)),d=[],f=[];for(let e=0;e<o.starts.length&&o.starts[e]<=l;e++)d.push(o.starts[e]),f.push(e===0);let p=[],m=[],h=d.length;for(let e=0;e<h-1;e++)f[e]?(Av(p,d[e],d[e+1],40,1,!0),Av(m,d[e],d[e+1],40,2,!0)):(kv(p,d[e],40,d[e+1],40),(e-1)%2==0&&kv(m,d[e],40,d[Math.min(h-1,e+2)],40,2,2));let g=(c.xPlus+c.xMinus)/2,_=Math.max(1,(c.xPlus-c.xMinus)/2*(t.largura/100)),v=c.oz,y=c.b,b=Math.max(c.H0+t.altura,e.minHeight(s)),x=_/n.a,S=y/n.b,C=t.cuspide/100,w=e.ring,T=Math.max(Yg,t.minEsp??.2),E=new Map,D=(t,n,r)=>{let i=E.get(t);if(i===void 0){let a=e.heightAt(n,r);i=a===null?NaN:a+s+T,E.set(t,i)}return i},O=(e,t,n,r)=>{let i=D(e,t,r);if(Number.isNaN(i))return n;let a=n-i;if(a>=Cv)return n;if(a<=-.3)return i;let o=(a+Cv)/(2*Cv);return i+Cv*o*o},k=e=>{let t=(e/Rm%1+1)%1*40,n=Math.floor(t)%40,r=t-Math.floor(t);return w[n*3+1]*(1-r)+w[(n+1)%40*3+1]*r},A=new Float32Array(40);for(let e=0;e<40;e++){let t=e/40*Rm,r=n.eqR[e],i=x*r*Math.cos(t),a=S*r*Math.sin(t),o=Math.hypot(i,a),s=Math.hypot(w[e*3]-g,w[e*3+2]-v);A[e]=Math.max(1,(s+.05)/o)}let j=new Float32Array(40);for(let e=0;e<40;e++){let t=0;for(let n=-2;n<=2;n++)t=Math.max(t,A[(e+n+40)%40]);j[e]=t}let M=0;for(let e=0;e<40;e++)M=Math.max(M,j[e]);let N=e=>{let t=(e/Rm%1+1)%1*40,n=Math.floor(t)%40,r=t-Math.floor(t);return j[n]*(1-r)+j[(n+1)%40]*r},P=u.length/3,F=[l];for(let e=1;e<=12;e++)F.push(P+(e-1)*40),d.push(P+(e-1)*40),f.push(!1);let I=P+480,L=[],ee=n.capFirst;for(let e=ee;e<=22;e++)L.push(I+(e-ee)*bv),d.push(I+(e-ee)*bv),f.push(e===22);let te=22-ee,ne=480+te*bv+1;u.length=(P+ne)*3;let re=e=>{let t=(t,r)=>{let i=k(r);return i+(e-i)*t/n.ref},r=P*3;for(let e=1;e<=12;e++){let i=1-Bm(0,xv,e/12);for(let a=0;a<40;a++){let o=a/40*Rm,s=Math.cos(o),c=Math.sin(o),l=j[a],d=n.eqR[a],f=n.wallR[a*13+e],p=n.wallR[a*13],m=g+l*x*f*d*s+(w[a*3]-(g+l*x*p*d*s))*i,h=v+l*S*f*d*c+(w[a*3+2]-(v+l*S*p*d*c))*i,_=t(n.wallY[a*13+e],o);u[r++]=m,u[r++]=O(r/3|0,m,_,h),u[r++]=h}}for(let e=ee;e<22;e++){let i=n.cap.rho[e];for(let a=0;a<bv;a++){let o=a/bv*Rm,s=n.eqAt(o),c=N(o),l=g+c*x*i*s*Math.cos(o),d=v+c*S*i*s*Math.sin(o),f=n.cap.h[e*bv+a],p=t(n.ref+(f-n.ref)*C,o);u[r++]=l,u[r++]=O(r/3|0,l,p,d),u[r++]=d}}let i=n.ref+(n.cap.h[22*bv]-n.ref)*C;u[r++]=g,u[r++]=O(r/3|0,g,t(i,0),v),u[r++]=v},ie=Tv();re(b),wv.place+=Tv()-ie;for(let e=0;e<12;e++)kv(p,F[e],40,F[e+1],40),e%2==0&&kv(m,F[e],40,F[Math.min(12,e+2)],40,2,2);kv(p,F[12],40,I,bv),kv(m,F[12],40,I,bv,2,6);for(let e=0;e<te-1;e++)kv(p,L[e],bv,L[e+1],bv),e%2==0&&kv(m,L[e],bv,L[Math.min(te-1,e+2)],bv,6,6);let R=L[te];Av(p,R,L[te-1],bv,1,!1),Av(m,R,L[(te-1)%2==0?te-1:te-2],bv,6,!1);let z=null;r.opp&&(r.adapt?.amplitude??.5)>0&&(z=Pv(e,u,I,P+ne,r.opp,{ox:g,oz:v,a:_,b:y,mesialSign:e.mesialSign},(e,t,n,r)=>O(I+e,t,n,r),{...r.adapt??{},minEsp:T},b,re,n.top/n.ref));let B=Float32Array.from(u),ae=Uint32Array.from(p),oe=Uint32Array.from(m);if(Wg(B,ae)<0){let e=e=>{for(let t=0;t+2<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}};e(ae),e(oe)}return{positions:B,index:ae,starts:d,lowIndex:oe,outerStart:l,side:F,marginY:0,cut:0,capStart:I,capRings:L,occlusion:z,marginFactor:M}}function Nv(e,t,n,r,i){Ev.origin.set(n,i,r),e.scan(Ev.origin,Ev.origin),Ev.direction.copy(e.Y);let a=Og(t).raycastFirst(Ev,2,0,30);return a?i+a.distance:null}function Pv(e,t,n,r,i,a,o,s,c,l,u){let d=s.target??.05,f=s.amplitude??.5,[p,m]=s.radius??[.25,1.2],h=s.drops??[0,.15,.3,.5],g=s.wantContacts??3,_=r-n,v=new Float32Array(_),y=new Float32Array(_),b=new Float32Array(_),x=()=>{for(let e=0;e<_;e++)v[e]=t[(n+e)*3],b[e]=t[(n+e)*3+1],y[e]=t[(n+e)*3+2]};x();let S=1/0;for(let e=0;e<_;e++)S=Math.min(S,b[e]);let C=new Float32Array(_).fill(NaN),w=0,T=Tv();for(let t=0;t<_;t++){let n=Nv(e,i,v[t],y[t],S-6);n!==null&&(C[t]=n,w++)}wv.antagonist+=Tv()-T;let E=Tv(),D=()=>{let e=1/0;for(let t=0;t<_;t++)Number.isNaN(C[t])||(e=Math.min(e,C[t]-b[t]));return e},O=0;if(w)for(let e=0;e<4;e++){let e=D();if(!Number.isFinite(e)||Math.abs(e-d)<.003)break;O+=(e-d)/u,l(c+O),x()}let k=m,A=new Map;for(let e=0;e<_;e++){let t=Math.floor(v[e]/k)*100003+Math.floor(y[e]/k),n=A.get(t);n||A.set(t,n=[]),n.push(e)}let j=[],M=[];for(let e=0;e<_;e++){let t=Math.floor(v[e]/k),n=Math.floor(y[e]/k),r=[],i=[];for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let s=A.get((t+a)*100003+(n+o));if(s)for(let t of s){let n=Math.hypot(v[t]-v[e],y[t]-y[e]);n<=m&&(r.push(t),i.push(n))}}j.push(Int32Array.from(r)),M.push(Float32Array.from(i))}let N=Math.PI*a.a*a.b/_,P=e=>{l(c+e),x();let t=new Float32Array(_),n=new Float32Array(_),r=0;for(let e=0;e<_;e++){if(t[e]=b[e],Number.isNaN(C[e]))continue;let i=C[e]-t[e];i<-.03&&(r+=N),i<d&&(n[e]=d-i)}let i=new Float32Array(_);for(let e=0;e<_;e++){if(n[e]<=0)continue;let t=Math.min(n[e],f),r=j[e],a=M[e];for(let e=0;e<r.length;e++){let n=a[e],o=t*(n<=p?1:1-Bm(p,m,n));o>i[r[e]]&&(i[r[e]]=o)}}let s=0,u=0,h=0,g=1/0,S=0,w=new Uint8Array(_);for(let e=0;e<_;e++){if(t[e]=o(e,v[e],t[e]-i[e],y[e]),S=Math.max(S,i[e]),Number.isNaN(C[e]))continue;let n=C[e]-t[e];n<-.03&&(s+=N),n>=-.03&&n<=.1&&(w[e]=1),u+=n,h++,n<g&&(g=n)}let T=[],E=new Uint8Array(_);for(let e=0;e<_;e++){if(!w[e]||E[e])continue;let n=[e];E[e]=1;let r=0,i=0,o=0,s=0;for(;n.length;){let e=n.pop();r+=v[e],i+=y[e],o+=t[e],s++;let a=j[e],c=M[e];for(let e=0;e<a.length;e++){let t=a[e];c[e]<=.6&&w[t]&&!E[t]&&(E[t]=1,n.push(t))}}s>=2&&T.push({x:r/s,z:i/s,y:o/s,count:s,where:jv(r/s-a.ox,i/s-a.oz,a.a,a.b,a.mesialSign)})}return T.sort((e,t)=>t.count-e.count),{shift:e,y:t,dent:i,contacts:T,interferenceBefore:r,interferenceAfter:s,meanGap:h?u/h:1/0,minGap:g,maxShift:S}},F=[],I=null;for(let e of h){let t=P(O+e/u);F.push({drop:-(O+e/u),contacts:t.contacts.length,maxShift:t.maxShift,interference:t.interferenceAfter});let n=t.interferenceAfter<=.05&&t.maxShift<=f+1e-6;if(I?n&&t.contacts.length>I.contacts.length&&(I=t):I=t,t.contacts.length>=g&&n){I=t;break}if(!n)break}let L=I;l(c+L.shift),x(),wv.candidates+=Tv()-E;let ee=0,te=0,ne=0;for(let e=0;e<_;e++){ee+=L.dent[e];let r=b[e]-L.dent[e],i=L.y[e]-r;i>.005&&(te++,i>ne&&(ne=i)),t[(n+e)*3+1]=L.y[e]}let re=[],ie=[];for(let e=0;e<_;e++){let t=j[e],n=!0;for(let r=0;r<t.length&&n;r++)L.y[t[r]]>L.y[e]&&(n=!1);n&&ie.push(e)}ie.sort((e,t)=>L.y[t]-L.y[e]);for(let e of ie.slice(0,6))re.push({where:jv(v[e]-a.ox,y[e]-a.oz,a.a,a.b,a.mesialSign),x:v[e],z:y[e],gap:Number.isNaN(C[e])?1/0:C[e]-L.y[e]});let R=[];if(L.interferenceAfter>.05||L.minGap<-.03){let e=1/0,t=0;for(let n=0;n<_;n++){if(Number.isNaN(C[n]))continue;let r=C[n]-L.y[n];r<e&&(e=r,t=C[n]-(L.y[n]-s.minEsp))}R.push(`Espaço oclusal insuficiente: ${t.toFixed(1).replace(`.`,`,`)} mm disponíveis para ${s.minEsp.toFixed(1).replace(`.`,`,`)} mm de espessura mínima — a peça interfere ${(-e).toFixed(2).replace(`.`,`,`)} mm no antagonista (${L.interferenceAfter.toFixed(1).replace(`.`,`,`)} mm²). Reduza o preparo, o antagonista ou a espessura mínima.`)}return{drop:-L.shift,contacts:L.contacts,interferenceBefore:L.interferenceBefore,interferenceAfter:L.interferenceAfter,meanGap:L.meanGap,minGap:L.minGap,maxShift:L.maxShift,meanShift:ee/_,covered:w/_,tried:F,landmarks:re,liftedFraction:te/_,maxLift:ne,warnings:R}}function Fv(e,t,n={}){let r=e.shape,i=e.crown;e.shape=t,e.crown=r=>{e.crown=i;try{return Mv(e,r,t,n)}finally{e.crown=a}};let a=e.crown;return()=>{e.shape=r,e.crown=i}}var Iv={crown:1.5,onlay:.6},Lv=.7,Rv=.25,zv=.16,Bv=.26,Vv=.05,Hv=2.5,Uv={thick:.3,overlap:.5},Wv=2.5,Gv=6,Kv=.004,qv=`Leitura cancelada: o modelo foi trocado durante a importação.`,Jv=e=>e.kind===`crown`?`Coroa total`:`Onlay`;function Yv(e,t){e.updateWorldMatrix(!0,!1);let n=t?new Z().multiplyMatrices(t,e.matrixWorld):e.matrixWorld,r=e.geometry.getAttribute(`position`),i=e.geometry.getIndex(),a=i?i.count:r.count,o=new Float32Array(a*3),s=new Y;for(let e=0;e<a;e++)s.fromBufferAttribute(r,i?i.getX(e):e).applyMatrix4(n),o[e*3]=s.x,o[e*3+1]=s.y,o[e*3+2]=s.z;return o}var Xv=class{root=new cn;content=new cn;overlay=new cn;mats=wg();prober=new sh;markGeo=new ua(Lv,16,12);measGeo=new ua(Rv,12,8);dotGeo=new ua(1,12,8);_mode=null;_active=null;layers=s();plan=new Set;teeth=new Map;up=new Map;scans={};scanGroup=null;scanBox=null;placements=new Map;markers=new Map;margins=new Map;marking=null;suggesting=null;prepared=new WeakMap;diag=new Map;diagOn=!1;diagGeo=new ua(1,8,6);diagMats=null;onMarginSuggested=null;genErrors=new Map;library=null;shapeChoice=new Map;shapeCache=new Map;shapeInstalled=new Map;onMarginChange=null;gums=[];prefs=new Map;fades=new Map;objectKeys=``;onObjectsChange=null;measurePts=[];stroke=null;epoch=0;scanSeq={sup:0,inf:0,mord:0};disposed=!1;constructor(){this.root.add(this.content,this.overlay)}get mode(){return this._mode}get active(){return this._active}reset(){this.epoch++,this.stroke=null,this.clearMeasure();for(let e of[...this.teeth.values(),...this.up.values()])this.dropCrown(e);let e=new Set;this.content.traverse(t=>{let n=t.geometry;n&&n!==this.markGeo&&n!==this.dotGeo&&n!==this.diagGeo&&e.add(n)}),e.forEach(nh),this.content.clear();let t=new Set;for(let e of this.up.values())e.rc&&t.add(e.rc);for(let e of this.margins.values())e.rc&&t.add(e.rc);t.forEach(e=>e.dispose()),this.margins.clear(),this.marking=null,this.suggesting=null,this.genErrors.clear(),this.diag.clear(),this.teeth.clear(),this.up.clear(),this.placements.clear(),this.markers.clear();for(let e of Object.keys(this.scans))delete this.scans[e];this.gums=[],this.scanGroup=null,this.scanBox=null,this._active=null,this.plan.clear(),this.prefs.clear();for(let e of this.fades.values())e.dispose();this.fades.clear(),this.syncObjects()}clear(){this.reset(),this._mode=null}dispose(){if(!this.disposed){if(this.clear(),this.disposed=!0,this.markGeo.dispose(),this.measGeo.dispose(),this.dotGeo.dispose(),this.diagGeo.dispose(),this.diagMats)for(let e of Object.values(this.diagMats))e.dispose();this.diagMats=null,this.onMarginChange=null,this.onMarginSuggested=null,Tg(this.mats)}}loadSample(){this.reset(),this._mode=`sample`;for(let e of[`U`,`L`]){let t=yg(e);for(let n of t.teeth){let t=new dt().setFromRotationMatrix(new Z().makeBasis(new Y(...n.X),new Y(...n.Y),new Y(...n.Z))),r={id:n.id,arch:e,type:n.type,a:n.a,b:n.b,H:n.H,pos:new Y(...n.pos),quat:t,mesial:n.mesial,distal:n.distal,prep:null,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null};r.natural=this.addMesh(this.lathe(i_(r)),this.mats.tooth,r),this.teeth.set(r.id,r)}let n=new da(new Gi(t.gumPath.map(e=>new Y(...e))),200,_g,18,!1),r=[];for(let e=4;e<=200;e+=4)for(let t=2;t<=18;t+=2){let n=19*(e-4)+(t-2),i=19*e+(t-2),a=19*e+t,o=19*(e-4)+t;r.push(n,i,o,i,a,o)}n.userData.lowIndex=new Uint32Array(r),eh(n);let i=new Fr(n,this.mats.gum);i.userData.arch=e,i.userData.depthBias=Wv,i.userData.lodScale=9,this.content.add(i),this.gums.push(i)}for(let e of Object.keys(bg)){let t=this.teeth.get(Number(e));t.prep=n_(t,bg[Number(e)]),t.stump=this.addMesh(this.lathe(a_(t,t.prep)),this.mats.stump,t),t.natural.visible=!1}this.root.updateMatrixWorld(!0),this.applyVis()}lathe(e){let t=rh(e);return t.userData.closed=!0,t}parentOf(e){return e.scan&&this.scanGroup?this.scanGroup:this.content}addMesh(e,t,n){let r=new Fr(e,t);return r.position.copy(n.pos),r.quaternion.copy(n.quat),r.userData.id=n.id,this.parentOf(n).add(r),r.updateWorldMatrix(!0,!1),r}dropMesh(e){e&&(e.removeFromParent(),nh(e.geometry))}dropCrown(e){this.stroke?.rec===e&&(this.stroke=null),e.lines&&=(e.lines.removeFromParent(),e.lines.geometry.dispose(),null),e.crown&&=(this.dropMesh(e.crown),e.crown.material.dispose(),null),e.data=null,e.params=null,e.undo=[],e.adj=null}async loadScan(e,t,n){if(this.disposed)throw Error(`O visualizador 3D já foi encerrado.`);this._mode!==`upload`&&(this.reset(),this._mode=`upload`);let r=this.epoch,i=++this.scanSeq[e],a;try{a=await o(t,n)}catch(e){throw e instanceof Error?e:Error(`Não foi possível ler o arquivo "`+t+`".`)}if(this.disposed||r!==this.epoch||i!==this.scanSeq[e]||this._mode!==`upload`)throw Error(qv);return this.addScan(e,a)}addScan(e,t){let n=Math.floor(t.length/9);if(!n)throw Error(`O arquivo não contém triângulos.`);this._mode!==`upload`&&(this.reset(),this._mode=`upload`);let r=i(t),a=new dr;if(a.setAttribute(`position`,new Xn(r.positions,3)),a.setIndex(new Xn(r.indices,1)),a.computeVertexNormals(),eh(a,!0),this.scanGroup||(this.scanGroup=new cn,this.content.add(this.scanGroup)),this.scans[e])for(let[t,n]of[...this.margins])n.kind===e&&this.dropMargin(t,!0);this.dropMesh(this.scans[e]??null);let o=new Fr(a,this.mats.scan);o.userData.kind=e,this.scanGroup.add(o),this.scans[e]=o;let s=new Mn;for(let e of Object.values(this.scans))e.geometry.computeBoundingBox(),s.union(e.geometry.boundingBox);return this.scanGroup.position.copy(s.getCenter(new Y)).negate(),this.scanBox=s,this.root.updateMatrixWorld(!0),this.applyVis(),{triangles:n}}place(e,t,n,r,i){if(this._mode!==`upload`||!this.scanGroup||!lg(e))return!1;let a=n.clone().normalize();if(!(a.lengthSq()>.5))return!1;i&&a.dot(i)>0&&a.negate();let o=this.scanGroup.worldToLocal(t.clone());this.placements.set(e,{p:o,n:a,kind:r});let s=this.markers.get(e);return s||(s=new Fr(this.markGeo,this.mats.mark),s.userData.dot=Lv,s.renderOrder=20,this.scanGroup.add(s),this.markers.set(e,s)),s.position.copy(o),s.updateWorldMatrix(!0,!1),this.applyVis(),!0}hasPlacement(e){return this.placements.has(e)}upRec(e,t,n){let r=sg(e),i=cg(e),[a,o,s]=og[r][i],c=n.n.clone().normalize(),l=new Y(1,0,0);Math.abs(l.dot(c))>.9&&l.set(0,0,1),l.addScaledVector(c,-l.dot(c)).normalize();let u=new Y().crossVectors(l,c),d={type:i,a:a/2,b:o/2,H:s},f=n_(d,t===`Onlay`?`onlay`:`crown`,!0),p=n.p.clone().addScaledVector(c,-r_(d,f)),m=new dt().setFromRotationMatrix(new Z().makeBasis(l,c,u)),h=this.up.get(e);if(!h)h={id:e,arch:r,...d,pos:p,quat:m,mesial:null,distal:null,prep:f,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null,scan:n.kind},this.up.set(e,h);else{let e=h.rc;Object.assign(h,d,{arch:r,pos:p,quat:m,prep:f,scan:n.kind,rc:null,prepMesh:null,nbMesh:null}),this.releaseCase(e),h.crown&&(h.crown.position.copy(p),h.crown.quaternion.copy(m),h.crown.updateWorldMatrix(!0,!0))}return h}upCase(e,t,n,r){let i=r.dims,a={type:r.type,a:(i.xPlus-i.xMinus)/2,b:i.b,H:i.H0},o=t===`Onlay`?{kind:`onlay`,cut:.85,virtual:!0}:{kind:`crown`,hs:r.roof(0),virtual:!0},s=r.origin.clone(),c=r.quat.clone(),l=this.up.get(e),u=l?.rc;if(l?(Object.assign(l,a,{arch:sg(e),pos:s,quat:c,prep:o,scan:n}),l.crown&&(l.crown.position.copy(s),l.crown.quaternion.copy(c),l.crown.updateWorldMatrix(!0,!0))):(l={id:e,arch:sg(e),...a,pos:s,quat:c,mesial:null,distal:null,prep:o,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null,scan:n},this.up.set(e,l)),u!==r){l.rc=r;let e=e=>{let t=new Fr(e,this.mats.scan);return t.matrixAutoUpdate=!1,t};l.prepMesh=e(r.prep),l.nbMesh=r.neighbors?e(r.neighbors):null,this.releaseCase(u)}return l}releaseCase(e){if(e){for(let t of this.up.values())if(t.rc===e)return;for(let t of this.margins.values())if(t.rc===e)return;this.shapeInstalled.get(e)?.(),this.shapeInstalled.delete(e),e.dispose()}}syncAux(e){if(this.scanGroup){this.scanGroup.updateWorldMatrix(!0,!1);for(let t of[e.prepMesh,e.nbMesh])t&&(t.matrix.copy(this.scanGroup.matrixWorld),t.updateMatrixWorld(!0))}}marginKind(e){let t=sg(e)===`U`?`sup`:`inf`;return this.scans[t]?t:this.margins.get(e)?.kind??null}startMargin(e){if(this._mode!==`upload`||!this.scanGroup||!lg(e))return;this.marking!=null&&this.marking!==e&&this.cancelMargin(),this.dropMargin(e,!1);let t=this.up.get(e);t&&(this.dropCrown(t),this.up.delete(e),this.releaseCase(t.rc)),this.genErrors.delete(e),this.marking=e,this.margins.set(e,{kind:null,pts:[],segs:[],closed:!1,rc:null,line:null,tube:null,dots:[]}),this.applyVis(),this.emitMargin(e)}marginTarget(){return this.marking}suggestMargin(e){this._mode===`upload`&&this.scanGroup&&lg(e)&&(this.marking!==e&&this.startMargin(e),this.marking===e&&(this.suggesting=e))}suggestTarget(){return this.suggesting}suggestAt(e,t,n,r){let i=this.suggesting,a=i==null?void 0:this.margins.get(i);if(i==null||!a||this.marking!==i||!this.scanGroup)return null;let o=this.marginKind(i)??t,s=this.scans[o];if(t!==o||!s)return null;this.suggesting=null;let c=s.geometry,l=this.prepared.get(c);l||(l=wh({positions:c.getAttribute(`position`).array,indices:c.getIndex().array}),this.prepared.set(c,l));let u=this.scanGroup.worldToLocal(e.clone()),d=n?n.clone().normalize():null;d&&r&&d.dot(r)>0&&d.negate(),d&&!(d.lengthSq()>.5)&&(d=null);let f=ag(l,{point:[u.x,u.y,u.z],normal:d?[d.x,d.y,d.z]:void 0});this.buildDiag(i,s,l,f);let p=f.loop.map(e=>new Y(e[0],e[1],e[2])),m={ok:p.length>=20,confidence:f.confidence.score,reasons:f.confidence.reasons.slice()};if(m.ok){let e=[0];for(let t=0;t<p.length;t++)e.push(e[t]+p[t].distanceTo(p[(t+1)%p.length]));let t=e[p.length],n=[];for(let r=0,i=0;r<20;r++){let a=t*r/20;for(;i<p.length-1&&e[i+1]<=a;)i++;(!n.length||n[n.length-1]!==i)&&n.push(i)}a.kind=o,a.pts=n.map(e=>p[e].clone()),a.segs=[];for(let e=0;e+1<n.length;e++)a.segs.push(p.slice(n[e],n[e+1]));a.closing=p.slice(n[n.length-1]),this.drawMargin(i,a)}return this.onMarginSuggested?.(i,m),m.ok&&this.emitMargin(i),m}marginState(e){let t=this.margins.get(e);return{points:t?t.pts.length:0,closed:!!t?.closed}}marginReport(e){let t=this.margins.get(e)?.rc??this.up.get(e)?.rc;if(!t)return null;let n=e=>e.toFixed(1).replace(`.`,`,`)+` mm²`;return{retention:t.retention,undercut:t.undercut,area:t.area,message:t.retention?`O preparo tem retenção no eixo de inserção (${n(t.undercut)} de ${n(t.prepArea)}). A peça é aliviada nessas áreas; confira o preparo.`:null}}realCase(e){return this.margins.get(e)?.rc??this.up.get(e)?.rc??null}pieceData(e){return this.rec(e)?.data??null}marginTargets(){if(this.marking==null)return[];let e=this.marginKind(this.marking);return e&&this.scans[e]?[this.scans[e]]:Object.keys(this.scans).filter(e=>this.scanLayer(e)).map(e=>this.scans[e])}marginFirstPoint(){let e=this.marking==null?void 0:this.margins.get(this.marking);return!e||!e.pts.length||!this.scanGroup?null:this.scanGroup.localToWorld(e.pts[0].clone())}addMarginPoint(e,t,n=!1){let r=this.marking,i=r==null?void 0:this.margins.get(r);if(r==null||!i||i.closed||!this.scanGroup)return`ignored`;let a=this.marginKind(r)??t,o=this.scans[a];if(t!==a||!o)return`ignored`;let s=o.geometry,c=this.scanGroup.worldToLocal(e.clone()),l=Ag(s,c,2);l&&c.copy(l.point);let u=i.pts.length;return u>=3&&(n||c.distanceTo(i.pts[0])<.45)?u>=6&&this.finishMargin()===null?`closed`:`ignored`:u&&c.distanceTo(i.pts[u-1])<.05?`ignored`:(i.kind=a,i.closing=null,u&&i.segs.push(jg(s,i.pts[u-1],c)),i.pts.push(c),this.drawMargin(r,i),this.emitMargin(r),`added`)}undoMarginPoint(){let e=this.marking,t=e==null?void 0:this.margins.get(e);return e==null||!t||!t.pts.length?!1:(t.pts.pop(),t.segs.pop(),t.closing=null,t.pts.length||(t.kind=null),this.drawMargin(e,t),this.emitMargin(e),!0)}finishMargin(){let e=this.marking,t=e==null?void 0:this.margins.get(e);if(e==null||!t)return`Nenhuma linha de margem está sendo marcada.`;let n=t.pts.length;if(n<6){let e=6-n;return`Marque pelo menos 6 pontos em volta do preparo (${e===1?`falta 1`:`faltam `+e}).`}let r=this.closeMargin(e,t);return r===null?(this.marking=null,this.suggesting=null,this.drawMargin(e,t),this.applyVis(),this.emitMargin(e),null):r}closeMargin(e,t){let n=t.pts.length,r=t.kind?this.scans[t.kind]:void 0;if(!r||!t.kind)return`O scan em que a linha foi marcada não está mais carregado.`;let i=t.closing?.length?t.closing:jg(r.geometry,t.pts[n-1],t.pts[0]),a=[...t.segs.flat(),...i],o=t.kind===`sup`?`inf`:t.kind===`inf`?`sup`:sg(e)===`U`?`inf`:`sup`,s=o===t.kind?void 0:this.scans[o],c=A_.build({id:e,own:r.geometry,opp:s?s.geometry:null,loop:a});return typeof c==`string`?c:(t.segs.push(i),t.closing=null,t.closed=!0,t.rc=c,null)}getMargin(e){let t=this.margins.get(e);return!t||!t.kind||!t.pts.length?null:{points:t.pts.map(e=>({x:e.x,y:e.y,z:e.z})),closed:t.closed,scan:t.kind}}setMargin(e,t){if(!lg(e))return`Dente inválido.`;let n=this._mode===`upload`&&this.scanGroup?this.scans[t.scan]:void 0;if(!n)return`O scan em que a linha foi marcada não está carregado.`;let r=Array.isArray(t.points)?t.points:[];if(!r.every(e=>e&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z)))return`A linha de margem guardada tem pontos inválidos.`;if(t.closed&&r.length<6)return`A linha de margem guardada tem menos de 6 pontos.`;this.dropMargin(e,!1);let i={kind:t.scan,pts:[],segs:[],closed:!1,rc:null,line:null,tube:null,dots:[]};for(let t of r){let r=new Y(t.x,t.y,t.z),a=Ag(n.geometry,r,2);if(!a)return this.emitMargin(e),`A linha de margem guardada não cai sobre este scan.`;r.copy(a.point),i.pts.length&&i.segs.push(jg(n.geometry,i.pts[i.pts.length-1],r)),i.pts.push(r)}if(t.closed){let t=this.closeMargin(e,i);if(t!==null)return this.emitMargin(e),t}return i.pts.length&&(this.margins.set(e,i),this.drawMargin(e,i)),this.applyVis(),this.emitMargin(e),null}buildDiag(e,t,n,r){this.dropDiag(e);let i=r.samples.length,a=this.scanGroup;if(i<3||!a)return;this.diagMats??={firm:new ui({color:3526783,depthTest:!1,transparent:!0,opacity:.95}),weak:new ui({color:16765503,depthTest:!1,transparent:!0,opacity:.95}),bad:new ui({color:16731501,depthTest:!1,transparent:!0,opacity:.95}),edge:new Cr({color:15922943,depthTest:!1}),crease:new Cr({color:9345707,depthTest:!1})};let o=new Uint8Array(i);for(let e=0;e<i;e++)r.samples[e].kind===`indefinido`&&(o[e]=1);let s={"pouco-definida":`margem pouco definida`,vizinho:`encostada no dente vizinho`,"sem-parede":`sem parede axial reconhecível`},c=[];for(let e of r.confidence.weak){let t=e.reason===`pouco-definida`?1:2,n=0;for(let r=e.from;t>o[r]&&(o[r]=t),n++,!(r===e.to||n>i);r=(r+1)%i);c.push({reason:s[e.reason],share:n/i})}let l=new cn;l.userData.diag=e;let u=[[],[],[]];for(let e=0;e<i;e++){let t=r.samples[e].point,n=r.samples[(e+1)%i].point;u[Math.max(o[e],o[(e+1)%i])].push(t[0],t[1],t[2],n[0],n[1],n[2])}let d=[this.diagMats.firm,this.diagMats.weak,this.diagMats.bad];u.forEach((e,t)=>{if(!e.length)return;let n=new Si(new dr().setAttribute(`position`,new Xn(new Float32Array(e),3)),d[t]);n.userData.width=7,n.userData.guide=!0,n.renderOrder=19,l.add(n)});let f=0,p=t.geometry.boundsTree?.closestPointToPoint(new Y(r.center[0],r.center[1],r.center[2]));if(p&&p.faceIndex!=null&&p.distance<.5){let{u:e,v:t}=r.basis,a=r.axis,o=r.center;for(let s=0;s<i;s+=2){let i=r.samples[s],c=Math.cos(i.angle),u=Math.sin(i.angle),d=[e[0]*c+t[0]*u,e[1]*c+t[1]*u,e[2]*c+t[2]*u],m=Wh(n,p.faceIndex,o,a,d);if(m)for(let e of m.candidates){if(e.kind===`indefinido`||Math.hypot(e.r-i.radius,e.h-i.height)<.12)continue;let t=new Fr(this.diagGeo,e.kind===`aresta`?this.diagMats.edge:this.diagMats.crease);t.position.set(o[0]+d[0]*e.r+a[0]*e.h,o[1]+d[1]*e.r+a[1]*e.h,o[2]+d[2]*e.r+a[2]*e.h),t.scale.setScalar(.05),t.userData.dot=.05,t.userData.dotMin=1.6,t.renderOrder=19,l.add(t),f++}}}let m=0;for(let e=0;e<i;e++)o[e]===0&&m++;l.visible=this.diagOn,a.add(l),a.children.unshift(a.children.pop()),l.updateMatrixWorld(!0),this.diag.set(e,{group:l,info:{firm:m/i,uncertain:1-m/i,candidates:f,sectors:c}})}dropDiag(e){let t=this.diag.get(e);if(t){this.diag.delete(e),t.group.removeFromParent();for(let e of t.group.children)e.isLineSegments&&e.geometry.dispose()}}setMarginDiagnostics(e){this.diagOn=e;for(let t of this.diag.values())t.group.visible=e}marginDiagnostics(e){return this.diag.get(e)?.info??null}cancelMargin(){let e=this.marking;e!=null&&(this.marking=null,this.dropMargin(e,!0),this.applyVis())}emitMargin(e){this.applyMarginLook(e),this.syncObjects(),this.onMarginChange?.(e,this.marginState(e))}dropMargin(e,t){let n=this.margins.get(e);if(this.marking===e&&(this.marking=null),this.suggesting===e&&(this.suggesting=null),this.dropDiag(e),n){this.margins.delete(e),n.line&&(n.line.removeFromParent(),n.line.geometry.dispose()),n.tube&&(n.tube.removeFromParent(),n.tube.geometry.dispose());for(let e of n.dots)e.removeFromParent();this.releaseCase(n.rc),t&&this.emitMargin(e)}}drawMargin(e,t){let n=this.scanGroup;if(!n)return;let r=t.segs.flat();t.closed?r.push(t.pts[0]):t.pts.length&&r.push(t.pts[t.pts.length-1]),t.line&&=(t.line.removeFromParent(),t.line.geometry.dispose(),null),t.tube&&=(t.tube.removeFromParent(),t.tube.geometry.dispose(),null),r.length>1&&(t.line=new vi(new dr().setFromPoints(r),this.mats.line),t.line.renderOrder=20,t.line.userData.margin=e,t.line.userData.width=2.4,n.add(t.line),t.line.updateWorldMatrix(!0,!1),t.tube=new Fr(new da(new Gi(t.closed?r.slice(0,-1):r,t.closed,`centripetal`),Math.min(600,r.length*2),Vv,5,t.closed),this.mats.mark),t.tube.renderOrder=20,t.tube.userData.glOnly=!0,t.tube.userData.margin=e,n.add(t.tube),t.tube.updateWorldMatrix(!0,!1));let i=t.closed?0:t.pts.length;for(;t.dots.length>i;)t.dots.pop().removeFromParent();for(;t.dots.length<i;){let r=t.dots.length?zv:Bv,i=new Fr(this.dotGeo,this.mats.mark);i.scale.setScalar(r),i.userData.dot=r,i.userData.margin=e,i.renderOrder=21,n.add(i),t.dots.push(i)}t.dots.forEach((e,n)=>{e.position.copy(t.pts[n]),e.updateWorldMatrix(!0,!1)}),this.applyMarginLook(e)}hasModel(){return this._mode===`sample`||Object.keys(this.scans).length>0}available(e){return lg(e)?this._mode!==`sample`||this.teeth.has(e):!1}isPrepared(e){let t=this.teeth.get(e);return!!(t&&t.prep&&!t.prep.virtual)}hasPiece(e){return!!this.rec(e)?.crown}rec(e){if(e!=null)return this._mode===`sample`?this.teeth.get(e):this._mode===`upload`?this.up.get(e):void 0}rep(e){return e.crown??(e.prep&&e.stump?e.stump:e.natural)}neighbor(e){let t=e==null?void 0:this.teeth.get(e);return t?this.rep(t):null}targets(e){let t=[],n=[];if(this._mode===`sample`){for(let n of[e.mesial,e.distal]){let e=this.neighbor(n);e&&t.push(e)}for(let t of this.teeth.values())if(t.arch!==e.arch){let e=this.rep(t);e&&n.push(e)}}else{let t=e.scan===`sup`?`inf`:e.scan===`inf`?`sup`:e.arch===`U`?`inf`:`sup`,r=this.scans[t];r&&n.push(r)}return{same:t,opp:n}}axes(e){let t=this.parentOf(e);return t.updateWorldMatrix(!0,!1),{X:new Y(1,0,0).applyQuaternion(e.quat),Y:new Y(0,1,0).applyQuaternion(e.quat),Z:new Y(0,0,1).applyQuaternion(e.quat),origin:e.pos.clone().applyMatrix4(t.matrixWorld)}}analyze(){if(this._mode!==`sample`)return[];this.root.updateMatrixWorld(!0);let e=[];for(let t of this.teeth.values()){if(!t.prep||t.prep.virtual)continue;let{Y:n,origin:r}=this.axes(t),i=r.addScaledVector(n,r_(t,t.prep)+.01),a=this.prober.cast(i,n,this.targets(t).opp,20);e.push({id:t.id,piece:Jv(t.prep),space:a?a.distance:null})}return e.sort((e,t)=>e.id-t.id)}overviewGoal(){if(this._mode===`upload`&&this.scanBox){let e=this.scanBox.getSize(new Y).length();return{tgt:new Y(0,0,0),r:Math.max(30,e*1.5),th:0,ph:.9}}return{tgt:new Y(0,0,-20),r:125,th:0,ph:1}}focusGoal(e,t=`Oclusal`){let n=this.rec(e),r,i=!n&&this._mode===`upload`&&this.scanGroup?this.margins.get(e)?.rc:null;if(i&&this.scanGroup)this.scanGroup.updateWorldMatrix(!0,!1),r={origin:i.origin.clone().applyMatrix4(this.scanGroup.matrixWorld),X:i.X.clone(),Y:i.Y.clone(),Z:i.Z.clone(),H:i.dims.H0,mesial:i.X.clone().multiplyScalar(i.mesialSign)};else if(n){let{X:e,Y:t,Z:i,origin:a}=this.axes(n),o=n.rc?e.clone().multiplyScalar(n.rc.mesialSign):e.clone(),s=this._mode===`sample`&&n.mesial!=null?this.teeth.get(n.mesial):void 0;s&&(o=s.pos.clone().sub(n.pos).normalize()),r={origin:a,X:e,Y:t,Z:i,H:n.H,mesial:o}}else if(this._mode===`upload`&&this.placements.has(e)&&this.scanGroup){let t=this.placements.get(e),n=t.n.clone(),i=new Y(1,0,0);Math.abs(i.dot(n))>.9&&i.set(0,0,1),i.addScaledVector(n,-i.dot(n)).normalize();let a=new Y().crossVectors(i,n);this.scanGroup.updateWorldMatrix(!0,!1),r={origin:t.p.clone().addScaledVector(n,-4).applyMatrix4(this.scanGroup.matrixWorld),X:i,Y:n,Z:a,H:6,mesial:i.clone()}}else return null;return Gm(r,t)}generate(e,t,n,r){if(!lg(e))return null;let i;if(this._mode===`upload`){if(!this.scanGroup)return null;let n=this.margins.get(e);if(n&&n.closed&&n.rc&&n.kind){let r=n.kind===`sup`?`inf`:n.kind===`inf`?`sup`:sg(e)===`U`?`inf`:`sup`,a=(r===n.kind?null:this.scans[r]?.geometry)??null;n.rc.setOpposing(a),this.applyShape(n.rc,e,a),i=this.upCase(e,t,n.kind,n.rc)}else{let n=this.placements.get(e);if(!n)return null;i=this.upRec(e,t,n)}}else if(this._mode===`sample`){if(i=this.teeth.get(e),!i)return null;let n=t===`Onlay`?`onlay`:`crown`;(!i.prep||i.prep.virtual&&i.prep.kind!==n)&&(this.dropMesh(i.stump),i.prep=n_(i,n,!0),i.stump=this.addMesh(this.lathe(a_(i,i.prep)),this.mats.stump,i),i.natural.visible=!1)}else return null;let a=pg(n);if(this.stroke?.rec===i&&(this.stroke=null),i.undo=[],i.adj=null,this.genErrors.delete(e),this.buildCrown(i,a),r&&this.fit(i,a),i.params=a,i.rc){let t=this.check(e),n=t?t.open?`A peça não fechou como sólido. Marque a margem de novo.`:t.thick!==null&&t.thick<-Uv.thick?`A peça atravessa o preparo (espessura negativa). Confira a linha de margem: ela deve contornar o preparo inteiro.`:r&&Math.min(t.mes??1/0,t.dis??1/0)<-Uv.overlap?`A peça ficou maior que o espaço entre os dentes vizinhos. Confira a linha de margem.`:null:null;if(n)return this.dropCrown(i),this.up.delete(e),this.genErrors.set(e,n),this.applyVis(),null}return this.emLines(i),this.colorize(i),this.applyVis(),{altura:a.altura,largura:a.largura}}buildCrown(e,t){let n=e.rc?e.rc.crown(t):o_(e,e.prep,t),r=this.lathe(n);if(e.crown)nh(e.crown.geometry),e.crown.geometry=r,e.crown.material.vertexColors&&(e.crown.material.vertexColors=!1,e.crown.material.needsUpdate=!0);else{let t=this.mats.crown.clone();t.emissive.setHex(e.id===this._active?Cg.activeEmissive:0),e.crown=this.addMesh(r,t,e),e.crown.userData.piece=!0}e.data=n,e.crown.updateWorldMatrix(!0,!1)}fit(e,t){if(e.rc){this.fitCase(e,e.rc,t);return}let{opp:n}=this.targets(e),r=[];for(let t of[e.mesial,e.distal]){let e=t==null?void 0:this.teeth.get(t),n=e&&(e.crown||!e.prep)?this.rep(e):null;n&&r.push(n)}let i=Math.max(ug.altura[0],r_(e,e.prep)+t.cimento/1e3+Yg-e.H),a=e.crown,o=t=>this.prober.signedDistance(a,t,e.data.outerStart,1),s=()=>{if(r.length)for(let n=0;n<Gv;n++){let n=o(r);if(Math.abs(n-.03)<Kv)break;let i=n===1/0?1.2:zm(n-dg,-1.2,1.2),a=zm(t.largura+i/e.a*100,ug.largura[0],ug.largura[1]);if(a===t.largura)break;t.largura=a,this.buildCrown(e,t)}};s(),(()=>{if(n.length)for(let r=0;r<Gv;r++){let r=o(n);if(Math.abs(r-.05)<Kv)break;let a=r===1/0?1:zm(r-fg,-1.5,1.5),s=zm(t.altura+a,i,ug.altura[1]);if(s===t.altura)break;t.altura=s,this.buildCrown(e,t)}})(),s(),t.largura=Math.round(t.largura*2)/2,t.altura=zm(Math.round(t.altura*20)/20,ug.altura[0],ug.altura[1]),t.altura<i-1e-9&&(t.altura=Math.min(ug.altura[1],Math.ceil(i*20-1e-9)/20)),this.buildCrown(e,t)}proximal(e){let t=e.crown,n=e.data;if(!e.nbMesh)return{plus:1/0,minus:1/0};this.syncAux(e);let r=t.geometry.getAttribute(`normal`),i=t.geometry.getAttribute(`position`),a=r.count,o=n.side[Math.ceil(__*12)],s=new Float32Array(a).fill(1/0);this.prober.signedDistance(t,[e.nbMesh],o,1,s);let c=e.rc?(e.rc.dims.xPlus+e.rc.dims.xMinus)/2:0,l=1/0,u=1/0;for(let e=o;e<a;e++){let t=r.getX(e),n=i.getX(e);t>.5&&n>=c?s[e]<l&&(l=s[e]):t<-.5&&n<=c&&s[e]<u&&(u=s[e])}return{plus:l,minus:u}}fitCase(e,t,n){let r=t.dims,{opp:i}=this.targets(e),a=n.cimento/1e3,o={plus:r.xPlus,minus:r.xMinus};(r.hasPlus||r.hasMinus)&&(n.largura=100);let s=e=>Math.abs(e-.03)<Kv?0:e===1/0?1.2:zm(e-dg,-1.2,1.2),c=()=>{if(e.nbMesh)for(let t=0;t<8;t++){let t=this.proximal(e),i=r.hasPlus?zm(r.xPlus+s(t.plus),o.plus-Hv,o.plus+Hv):r.xPlus,a=r.hasMinus?zm(r.xMinus-s(t.minus),o.minus-Hv,o.minus+Hv):r.xMinus;if(i===r.xPlus&&a===r.xMinus||i-a<2.5)break;r.xPlus=i,r.xMinus=a,this.buildCrown(e,n)}},l=Math.max(ug.altura[0],t.minHeight(a)-r.H0);this.buildCrown(e,n),c(),(()=>{if(i.length)for(let t=0;t<Gv;t++){let t=this.prober.signedDistance(e.crown,i,e.data.outerStart,1);if(Math.abs(t-.05)<Kv)break;let r=t===1/0?1:zm(t-fg,-1.5,1.5),a=zm(n.altura+r,l,ug.altura[1]);if(a===n.altura)break;n.altura=a,this.buildCrown(e,n)}})(),c(),n.altura=zm(Math.round(n.altura*20)/20,ug.altura[0],ug.altura[1]),n.altura<l-1e-9&&(n.altura=Math.min(ug.altura[1],Math.ceil(l*20-1e-9)/20)),e.a=(r.xPlus-r.xMinus)/2,this.buildCrown(e,n)}setToothLibrary(e){for(let e of this.shapeCache.values())e.dispose();return this.shapeCache.clear(),this.library=tv(e),this.listToothCollections()}listToothCollections(){let e=[];if(!this.library)return e;for(let t of this.library.collections.values()){if(!t.teeth.size)continue;let n=lv(t),r=[],i=new Set;for(let e of t.teeth.values()){let t=e.find(e=>e.variant===`anatomico`);t&&r.push(dv(t,n));for(let t of e)t.variant!==`anatomico`&&i.add(t.variant)}r.sort((e,t)=>e-t),e.push({name:t.name,fdis:r,variants:[...i],side:n.side,warnings:n.warnings})}return e}setPieceShape(e,t){t.colecao?this.shapeChoice.set(e,{colecao:t.colecao,variante:t.variante??`anatomico`}):this.shapeChoice.delete(e)}getPieceShape(e){return this.shapeChoice.get(e)??{colecao:null}}shapeFor(e,t,n=`anatomico`){if(!this.library)return null;let r=`${e}|${t}|${n}`,i=this.shapeCache.get(r);if(i)return i;let a=uv(this.library,e,t,n);if(!a)return null;let o=new Dv(a.tooth);return this.shapeCache.set(r,o),o}applyShape(e,t,n){this.shapeInstalled.get(e)?.(),this.shapeInstalled.delete(e);let r=this.shapeChoice.get(t);if(!r?.colecao)return;let i=this.shapeFor(r.colecao,t,r.variante);i&&this.shapeInstalled.set(e,Fv(e,i,{opp:n}))}toothThumbnail(e,t,n,r=240,i=180){if(!this.library||!lg(t))return null;let a=uv(this.library,e,t);if(!a)return null;let o=_v(a.tooth,3e3,sg(t)),s=yv(o.mesh,o.views[n],{width:r,height:i});return{width:s.width,height:s.height,rgba:s.rgba}}pieceWarnings(e){return(this.rec(e)?.data)?.occlusion?.warnings??[]}pieceThumbnail(e,t,n=240,r=180){let i=this.rec(e);if(!i?.data)return null;let a=i.data,o=a.positions.length/3,s=[1/0,1/0,1/0],c=[-1/0,-1/0,-1/0];for(let e=a.outerStart;e<o;e++)for(let t=0;t<3;t++){let n=a.positions[e*3+t];n<s[t]&&(s[t]=n),n>c[t]&&(c[t]=n)}let l=Math.floor(e/10),u=gv(s,c,i.rc?i.rc.mesialSign:l===2||l===4?1:-1,sg(e)),d=yv({positions:a.positions,index:a.index},u[t],{width:n,height:r});return{width:d.width,height:d.height,rgba:d.rgba}}generateError(e){return this.genErrors.get(e)??null}check(e){let t=this.rec(e);if(!t||!t.crown||!t.data||!t.params)return null;this.root.updateMatrixWorld(!0);let n=t.crown,r=t.data.outerStart,{opp:i}=this.targets(t),a=n.geometry.getIndex(),o={occ:this.prober.signedDistance(n,i,r,1),mes:null,dis:null,thick:null,open:j_(a.array),tris:a.count/3};if(this._mode===`sample`){let e=this.neighbor(t.mesial),i=this.neighbor(t.distal);if(o.mes=e?this.prober.signedDistance(n,[e],r,1):null,o.dis=i?this.prober.signedDistance(n,[i],r,1):null,t.stump){let e=t.data.marginY+(t.data.cut?Iv.onlay:Iv.crown);o.thick=this.prober.thickness(n,t.stump,r,e,t.params.cimento/1e3)}}else if(t.rc&&t.prepMesh){this.syncAux(t);let e=t.prep?.kind===`onlay`?Iv.onlay:Iv.crown;o.thick=this.prober.thickness(n,t.prepMesh,r+40,e,t.params.cimento/1e3);let i=this.proximal(t),a=t.rc.dims,s=t.rc.mesialSign>0,c=a.hasPlus?i.plus:null,l=a.hasMinus?i.minus:null;o.mes=s?c:l,o.dis=s?l:c}return o}removePiece(e){let t=this.rec(e);t?(this.dropCrown(t),this._mode===`sample`&&t.prep?.virtual&&(this.dropMesh(t.stump),t.stump=null,t.prep=null),this._mode===`upload`&&(this.up.delete(e),this.dropPlacement(e),this.dropMargin(e,!0),this.releaseCase(t.rc)),this.applyVis()):this._mode===`upload`&&(this.dropPlacement(e),this.dropMargin(e,!0))}dropPlacement(e){this.markers.get(e)?.removeFromParent(),this.markers.delete(e),this.placements.delete(e)}setPlanHighlight(e){this.plan=new Set(e),this._mode===`sample`&&this.applyVis()}setActive(e){this._active=e;for(let t of[...this.teeth.values(),...this.up.values()])t.crown&&(t.crown.material.emissive.setHex(t.id===e?Cg.activeEmissive:0),this.colorize(t));this.applyVis()}setLayers(e){this.layers={...e};let t=this.rec(this._active);t&&this.colorize(t),this.applyVis()}colorize(e){let t=e.crown;if(!t||!e.data)return;let n=t.material;if(!this.layers.contatos||e.id!==this._active){n.vertexColors&&(n.vertexColors=!1,n.needsUpdate=!0);return}let r=t.geometry,i=r.getAttribute(`position`).count,a=new Float32Array(i).fill(1/0),{same:o,opp:s}=this.targets(e);e.nbMesh&&(this.syncAux(e),o.push(e.nbMesh)),this.prober.signedDistance(t,[...o,...s],e.data.outerStart,1,a);let c=new Float32Array(i*3),l=new Uint8Array(i*3),u=new hn;for(let e=0;e<i;e++){let t=xg[Sg(a[e])];u.setHex(t),c[e*3]=u.r,c[e*3+1]=u.g,c[e*3+2]=u.b,l[e*3]=t>>16,l[e*3+1]=t>>8&255,l[e*3+2]=t&255}r.setAttribute(`color`,new Xn(c,3)),r.userData.srgb=l,n.vertexColors||(n.vertexColors=!0,n.needsUpdate=!0)}emLines(e){let t=e.crown;if(!t||!e.data)return;let n=s_(e.data.positions,e.data.side);e.lines?(e.lines.geometry.dispose(),e.lines.geometry=new dr):(e.lines=new Si(new dr,this.mats.line),e.lines.renderOrder=10,t.add(e.lines)),e.lines.geometry.setAttribute(`position`,new Xn(n,3)),e.lines.visible=this.layers.emergencia,e.lines.updateWorldMatrix(!0,!1)}applyVis(){let e=this.rec(this._active),t=this.layers;if(this._mode===`sample`){for(let n of this.teeth.values()){let r=`arch:`+n.arch,i=!!e&&(!t.antagonista&&n.arch!==e.arch||!t.adjacentes&&n.arch===e.arch&&n.id!==e.id),a=!i&&this.shown(r);n.natural&&(n.natural.visible=a&&!n.prep,this.look(n.natural,this.plan.has(n.id)&&!n.prep?this.mats.plan:this.mats.tooth,r)),n.stump&&(n.stump.visible=a,this.look(n.stump,this.mats.stump,r)),n.crown&&(n.crown.visible=!i&&this.shown(`piece:`+n.id),this.lookCrown(n))}for(let n of this.gums){let r=`arch:`+n.userData.arch;n.visible=!(e&&!t.antagonista&&n.userData.arch!==e.arch)&&this.shown(r),this.look(n,this.mats.gum,r)}}else if(this._mode===`upload`){for(let e of Object.keys(this.scans)){let t=this.scans[e],n=`scan:`+e;t.visible=this.scanLayer(e)&&this.shown(n),this.look(t,this.mats.scan,n)}for(let e of this.up.values())e.crown&&(e.crown.visible=this.shown(`piece:`+e.id),this.lookCrown(e));for(let[e,t]of this.markers)t.visible=!this.up.get(e)?.crown;for(let e of this.margins.keys())this.applyMarginLook(e)}for(let e of[...this.teeth.values(),...this.up.values()])e.lines&&(e.lines.visible=t.emergencia);this.syncObjects()}scanLayer(e){if(this.marking!=null)return e===(Math.floor(this.marking/10)<=2?`sup`:`inf`);let t=this.rec(this._active);return!t||this.layers.antagonista||e===t.scan}shown(e){return this.prefs.get(e)?.visible??!0}opacityOf(e){return this.prefs.get(e)?.opacity??1}faded(e,t){let n=this.opacityOf(t);if(n>=.995)return e;let r=t+`|`+e.uuid,i=this.fades.get(r);return i||(i=e.clone(),i.transparent=!0,this.fades.set(r,i)),i.opacity=n,i.depthWrite=!1,i}look(e,t,n){let r=this.faded(t,n);e.material=r,e.userData.obj=n,e.renderOrder=r===t?0:1}lookCrown(e){let t=e.crown;if(!t)return;let n=`piece:`+e.id,r=this.opacityOf(n),i=t.material,a=r<.995;t.userData.obj=n,i.transparent!==a&&(i.transparent=a,i.needsUpdate=!0),i.opacity=a?r:1,i.depthWrite=!a,t.renderOrder=a?2:0}applyMarginLook(e){let t=this.margins.get(e);if(!t)return;let n=`margin:`+e,r=this.shown(n),i=this.up.get(e)?.crown,a=t.closed&&!!i&&i.visible&&this.opacityOf(`piece:`+e)>=.995&&e!==this._active;t.line&&(t.line.visible=r&&!a,t.line.material=this.faded(this.mats.line,n)),t.tube&&(t.tube.visible=r&&!a,t.tube.material=this.faded(this.mats.mark,n));for(let e of t.dots)e.visible=r,e.material=this.faded(this.mats.mark,n)}listObjects(){let e=[],t=(t,n,r,i)=>{e.push({key:t,kind:n,label:r,...i==null?{}:{tooth:i},visible:this.shown(t),opacity:this.opacityOf(t)})};if(this._mode===`upload`){let e={sup:`Arcada superior`,inf:`Arcada inferior`,mord:`Registro de mordida`};for(let n of[`sup`,`inf`,`mord`])this.scans[n]&&t(`scan:`+n,`scan`,e[n])}else this._mode===`sample`&&(t(`arch:U`,`arch`,`Arcada superior`),t(`arch:L`,`arch`,`Arcada inferior`));let n=[...this.teeth.values(),...this.up.values()].filter(e=>e.crown).sort((e,t)=>e.id-t.id);for(let e of n)t(`piece:`+e.id,`piece`,(e.prep?Jv(e.prep):`Coroa total`)+` `+e.id,e.id);for(let e of[...this.margins.keys()].sort((e,t)=>e-t))this.margins.get(e).pts.length&&t(`margin:`+e,`margin`,`Margem `+e,e);return e}setObjectVisible(e,t){this.prefs.set(e,{visible:t,opacity:this.opacityOf(e)}),this.applyVis()}setObjectOpacity(e,t){let n=Number.isFinite(t)?Math.min(1,Math.max(.1,t)):1;this.prefs.set(e,{visible:this.shown(e),opacity:n}),this.applyVis()}syncObjects(){let e=this.listObjects().map(e=>e.key+`=`+e.label).join(`|`);e!==this.objectKeys&&(this.objectKeys=e,this.onObjectsChange?.())}solid(e){let t=e.material;return!(t.transparent&&t.opacity<.5)}pickTargets(){let e=[];return this.content.traverseVisible(t=>{let n=t;n.isMesh&&!n.userData.dot&&!n.userData.glOnly&&this.solid(n)&&e.push(n)}),e}scanTargets(){return Object.values(this.scans).filter(e=>e.visible)}activeCrown(){let e=this.rec(this._active);return e?.crown&&e.crown.visible&&this.solid(e.crown)?e.crown:null}addMeasurePoint(e){this.measurePts.length>=2&&this.clearMeasure(),this.measurePts.push(e.clone());let t=new Fr(this.measGeo,this.mats.measP);if(t.position.copy(e),t.userData.dot=Rv,t.renderOrder=20,this.overlay.add(t),this.measurePts.length<2)return null;let n=new vi(new dr().setFromPoints(this.measurePts),this.mats.meas);return n.renderOrder=20,this.overlay.add(n),this.overlay.updateMatrixWorld(!0),this.measurePts[0].distanceTo(this.measurePts[1])}clearMeasure(){this.measurePts.length=0;for(let e of[...this.overlay.children]){let t=e.geometry;t!==this.measGeo&&t.dispose()}this.overlay.clear()}measureMid(){return this.measurePts.length===2?this.measurePts[0].clone().add(this.measurePts[1]).multiplyScalar(.5):null}canUndo(){return(this.rec(this._active)?.undo.length??0)>0}beginStroke(){let e=this.rec(this._active);return!e||!e.crown||!e.data?!1:(this.stroke={rec:e,changed:!1},e.undo.push(e.data.positions.slice()),e.undo.length>40&&e.undo.shift(),!0)}sculptAt(e,t){let n=this.stroke;if(!n)return!1;let r=n.rec,i=r.crown,a=r.data;if(!i||!a)return!1;let o=i.geometry;i.updateWorldMatrix(!0,!1);let s=i.worldToLocal(e.clone());return t===`suavizar`&&!r.adj&&(r.adj=M_(a.index,a.positions.length/3)),ph(a.positions,o.getAttribute(`normal`).array,r.adj??[],a.outerStart+40,[s.x,s.y,s.z],t)?(n.changed=!0,this.touchCrown(r),!0):!1}endStroke(){let e=this.stroke;if(this.stroke=null,!e)return null;let t=e.rec;return e.changed?(this.emLines(t),this.colorize(t),t.id):(t.undo.pop(),null)}undo(){let e=this.rec(this._active);if(!e||!e.crown||!e.data||this.stroke)return!1;let t=e.undo.pop();return t?(e.data.positions.set(t),this.touchCrown(e),this.emLines(e),this.colorize(e),!0):!1}touchCrown(e){let t=e.crown.geometry;t.getAttribute(`position`).needsUpdate=!0,t.computeVertexNormals(),th(t)}exportFiles(e){let{ids:t,format:n,perPiece:i,model:a,base:o,slugs:s}=e;if(n!==`STL`&&n!==`OBJ`&&n!==`PLY`)throw Error(`Formato de exportação não suportado: `+String(n));this.root.updateMatrixWorld(!0);let c=n.toLowerCase(),l=this._mode===`upload`&&this.scanGroup?this.scanGroup.matrixWorld.clone().invert():void 0,u=[],d=t.map(e=>this.rec(e)).filter(e=>!!e&&!!e.crown);if(i)for(let e of d)u.push({name:`${o}_${e.id}_${s[e.id]||`peca`}.${c}`,blob:r(n,[Yv(e.crown,l)])});else d.length&&u.push({name:`${o}_pecas.${c}`,blob:r(n,d.map(e=>Yv(e.crown,l)))});if(a){let e=[];if(this._mode===`sample`){for(let t of this.teeth.values()){let n=t.prep?t.stump:t.natural;n&&e.push(n)}e.push(...this.gums)}else e.push(...Object.values(this.scans));e.length&&u.push({name:`${o}_modelo.${c}`,blob:r(n,e.map(e=>Yv(e,l)))})}return u}},Zv={seedDepth:3.2,maxDepth:11.5,maxPath:8.5,barrier:-.42,smoothCurv:3,smoothOut:4};function Qv(e,t){let n=new Uint32Array(e+1);for(let e=0;e+2<t.length;e+=3)n[t[e]]+=2,n[t[e+1]]+=2,n[t[e+2]]+=2;let r=new Uint32Array(e+1);for(let t=0;t<e;t++)r[t+1]=r[t]+n[t];let i=r.slice(0,e),a=new Uint32Array(r[e]);for(let e=0;e+2<t.length;e+=3){let n=t[e],r=t[e+1],o=t[e+2];a[i[n]++]=r,a[i[n]++]=o,a[i[r]++]=n,a[i[r]++]=o,a[i[o]++]=n,a[i[o]++]=r}let o=new Uint32Array(e+1),s=new Uint32Array(a.length),c=0;for(let t=0;t<e;t++){o[t]=c;let e=r[t],n=r[t+1];for(let r=e;r<n;r++){let e=a[r],n=!1;for(let r=o[t];r<c;r++)if(s[r]===e){n=!0;break}n||(s[c++]=e)}}return o[e]=c,{start:o,list:s.subarray(0,c)}}function $v(e,t,n,r=0){let i=Math.floor(e.length/3),a=new Float32Array(i);for(let r=0;r<i;r++){let i=n.start[r],o=n.start[r+1];if(o===i)continue;let s=e[r*3],c=e[r*3+1],l=e[r*3+2],u=t[r*3],d=t[r*3+1],f=t[r*3+2],p=0,m=0;for(let r=i;r<o;r++){let i=n.list[r]*3,a=e[i]-s,o=e[i+1]-c,h=e[i+2]-l,g=a*a+o*o+h*h;g<1e-10||(p+=((t[i]-u)*a+(t[i+1]-d)*o+(t[i+2]-f)*h)/g,m++)}m&&(a[r]=p/m)}let o=new Float32Array(i);for(let e=0;e<r;e++){for(let e=0;e<i;e++){let t=n.start[e],r=n.start[e+1],i=a[e]*2;for(let e=t;e<r;e++)i+=a[n.list[e]];o[e]=i/(r-t+2)}let e=a;a=o,o=e}return a}function ey(e,t,n){let r=e.length;if(r<3)return null;let i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;for(let f=0;f<r;f++){let r=e[f],p=t[f],m=n[f];i+=r,a+=p,o+=m,s+=r*r,c+=p*p,l+=r*p,u+=r*m,d+=p*m}let f=[[s,l,i],[l,c,a],[i,a,r]],p=[u,d,o];for(let e=0;e<3;e++){let t=e;for(let n=e+1;n<3;n++)Math.abs(f[n][e])>Math.abs(f[t][e])&&(t=n);if(Math.abs(f[t][e])<1e-9)return null;[f[e],f[t]]=[f[t],f[e]],[p[e],p[t]]=[p[t],p[e]];for(let t=e+1;t<3;t++){let n=f[t][e]/f[e][e];for(let r=e;r<3;r++)f[t][r]-=n*f[e][r];p[t]-=n*p[e]}}let m=p[2]/f[2][2],h=(p[1]-f[1][2]*m)/f[1][1];return[(p[0]-f[0][1]*h-f[0][2]*m)/f[0][0],h,m]}function ty(e,t,n,r={}){let i={...Zv,...r},a=Math.floor(e.length/3),o=new Uint8Array(a).fill(255),s=0,c=0,l=0;for(let t=0;t+2<n.length;t+=3){let r=n[t]*3,i=n[t+1]*3,a=n[t+2]*3,o=e[i]-e[r],u=e[i+1]-e[r+1],d=e[i+2]-e[r+2],f=e[a]-e[r],p=e[a+1]-e[r+1],m=e[a+2]-e[r+2];s+=u*m-d*p,c+=d*f-o*m,l+=o*p-u*f}let u=Math.hypot(s,c,l);if(!(u>1e-9)||a<3)return{weights:o,axis:[0,0,1],toothShare:0};s/=u,c/=u,l/=u;let d=+(Math.abs(s)<.9),f=Math.abs(s)<.9?0:1,p=0,m=d*s+f*c+p*l;d-=s*m,f-=c*m,p-=l*m;let h=Math.hypot(d,f,p);d/=h,f/=h,p/=h;let g=c*p-l*f,_=l*d-s*p,v=s*f-c*d,y=new Float32Array(a),b=new Float32Array(a),x=new Float32Array(a),S=-1/0;for(let t=0,n=0;t<a;t++,n+=3){let r=e[n],i=e[n+1],a=e[n+2];y[t]=r*d+i*f+a*p,b[t]=r*g+i*_+a*v;let o=r*s+i*c+a*l;x[t]=o,o>S&&(S=o)}let C=new Map;for(let e=0;e<a;e++){let t=Math.floor(y[e]/3)*65536+Math.floor(b[e]/3)+32768,n=C.get(t);(n===void 0||x[e]>x[n])&&C.set(t,e)}let w=[0,0,S];for(let e=0;e<3;e++){let t=[],n=[],r=[],i=e===0?5:2.5;for(let e of C.values())w[0]*y[e]+w[1]*b[e]+w[2]-x[e]<i&&(t.push(y[e]),n.push(b[e]),r.push(x[e]));let a=ey(t,n,r);if(!a)break;let o=0;for(let e=0;e<t.length;e++){let i=r[e]-(a[0]*t[e]+a[1]*n[e]+a[2]);i>o&&(o=i)}w=[a[0],a[1],a[2]+o*.6]}let T=new Float32Array(a);for(let e=0;e<a;e++)T[e]=w[0]*y[e]+w[1]*b[e]+w[2]-x[e];let E=Qv(a,n),D=$v(e,t,E,i.smoothCurv),O=new Float32Array(a).fill(1/0),k=.1,A=Math.ceil(i.maxPath/k)+2,j=[];for(let e=0;e<A;e++)j.push([]);for(let e=0;e<a;e++)T[e]<i.seedDepth&&(O[e]=0,j[0].push(e));for(let t=0;t<A;t++){let n=j[t];for(let r=0;r<n.length;r++){let a=n[r],o=O[a];if(Math.floor(o/k)!==t||o>0&&D[a]<i.barrier)continue;let s=e[a*3],c=e[a*3+1],l=e[a*3+2];for(let t=E.start[a],n=E.start[a+1];t<n;t++){let n=E.list[t];if(T[n]>i.maxDepth)continue;let r=o+Math.hypot(e[n*3]-s,e[n*3+1]-c,e[n*3+2]-l);if(r<O[n]&&r<=i.maxPath){O[n]=r;let e=Math.floor(r/k);e<A&&j[e].push(n)}}}}let M=new Float32Array(a),N=new Float32Array(a);for(let e=0;e<a;e++)M[e]=O[e]<1/0?0:1;for(let e=0;e<i.smoothOut;e++){for(let e=0;e<a;e++){let t=E.start[e],n=E.start[e+1],r=M[e];for(let e=t;e<n;e++)r+=M[E.list[e]];N[e]=r/(n-t+1)}let e=M;M=N,N=e}let P=0;for(let e=0;e<a;e++)o[e]=Math.round(M[e]*255),M[e]<.5&&P++;return{weights:o,axis:[s,c,l],toothShare:P/a}}function ny(e,t=[0,1,0]){let n=Math.floor(e.length/3),r=new Uint8Array(n),i=1/0,a=-1/0;for(let r=0,o=0;r<n;r++,o+=3){let n=e[o]*t[0]+e[o+1]*t[1]+e[o+2]*t[2];n<i&&(i=n),n>a&&(a=n)}let o=a>i?255/(a-i):0;for(let a=0,s=0;a<n;a++,s+=3)r[a]=Math.round((e[s]*t[0]+e[s+1]*t[1]+e[s+2]*t[2]-i)*o);return r}function ry(e,t,n,r){let i=Math.floor(e.length/3),a=0;for(let t=0;t+2<n.length;t+=3){let r=n[t]*3,i=n[t+1]*3,o=n[t+2]*3,s=e[i]-e[r],c=e[i+1]-e[r+1],l=e[i+2]-e[r+2],u=e[o]-e[r],d=e[o+1]-e[r+1],f=e[o+2]-e[r+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;a+=.5*Math.sqrt(p*p+m*m+h*h)}let o=Math.sqrt(2*a/Math.max(1,r));(!(o>0)||!Number.isFinite(o))&&(o=1);let s=1/0,c=1/0,l=1/0,u=-1/0,d=-1/0,f=-1/0;for(let t=0;t<i*3;t+=3){let n=e[t],r=e[t+1],i=e[t+2];n<s&&(s=n),n>u&&(u=n),r<c&&(c=r),r>d&&(d=r),i<l&&(l=i),i>f&&(f=i)}let p=Math.max(u-s,d-c,f-l);p/o>131e3&&(o=p/131e3);let m=1/o,h=Math.floor((u-s)*m)+1,g=Math.floor((d-c)*m)+1,_=new Map,v=new Uint32Array(i),y=[],b=[],x=t.length>=i*3;for(let n=0,r=0;n<i;n++,r+=3){let i=e[r],a=e[r+1],o=e[r+2],u=Math.floor((i-s)*m)+h*(Math.floor((a-c)*m)+g*Math.floor((o-l)*m)),d=_.get(u);d===void 0&&(d=b.length,_.set(u,d),y.push(0,0,0,0,0,0),b.push(0));let f=d*6;y[f]+=i,y[f+1]+=a,y[f+2]+=o,x&&(y[f+3]+=t[r],y[f+4]+=t[r+1],y[f+5]+=t[r+2]),b[d]++,v[n]=d}let S=b.length,C=new Float32Array(S*3),w=new Float32Array(S*3);for(let e=0;e<S;e++){let t=e*6,n=1/b[e];C[e*3]=y[t]*n,C[e*3+1]=y[t+1]*n,C[e*3+2]=y[t+2]*n;let r=Math.hypot(y[t+3],y[t+4],y[t+5]);r>0?(w[e*3]=y[t+3]/r,w[e*3+1]=y[t+4]/r,w[e*3+2]=y[t+5]/r):w[e*3+2]=1}let T=new Uint32Array(n.length),E=0;for(let e=0;e+2<n.length;e+=3){let t=v[n[e]],r=v[n[e+1]],i=v[n[e+2]];t!==r&&r!==i&&t!==i&&(T[E++]=t,T[E++]=r,T[E++]=i)}return{positions:C,normals:w,index:T.slice(0,E),map:v}}function iy(e,t,n=4){let r=Math.floor(t.length/3),i=1/0,a=1/0,o=1/0,s=-1/0,c=-1/0;for(let t=0;t+2<e.length;t+=3){let n=e[t],r=e[t+1],l=e[t+2];n<i&&(i=n),n>s&&(s=n),r<a&&(a=r),r>c&&(c=r),l<o&&(o=l)}let l=1/n,u=Math.floor((s-i)*l)+1,d=Math.floor((c-a)*l)+1,f=new Map,p=new Uint32Array(r),m=[];for(let n=0;n<r;n++){let r=t[n*3]*3,s=t[n*3+1]*3,c=t[n*3+2]*3,h=(e[r]+e[s]+e[c])/3,g=(e[r+1]+e[s+1]+e[c+1])/3,_=(e[r+2]+e[s+2]+e[c+2])/3,v=Math.floor((h-i)*l)+u*(Math.floor((g-a)*l)+d*Math.floor((_-o)*l)),y=f.get(v);y===void 0&&(y=m.length,f.set(v,y),m.push(0)),p[n]=y,m[y]++}let h=m.length,g=new Uint32Array(h*2),_=new Uint32Array(h);for(let e=0,t=0;e<h;e++)g[e*2]=t,_[e]=t,t+=m[e],g[e*2+1]=t;let v=new Uint32Array(r*3);for(let e=0;e<r;e++){let n=_[p[e]]++*3;v[n]=t[e*3],v[n+1]=t[e*3+1],v[n+2]=t[e*3+2]}let y=new Float32Array(h*4);for(let t=0;t<h;t++){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let c=g[t*2]*3,l=g[t*2+1]*3;c<l;c++){let t=v[c]*3,l=e[t],u=e[t+1],d=e[t+2];l<n&&(n=l),l>a&&(a=l),u<r&&(r=u),u>o&&(o=u),d<i&&(i=d),d>s&&(s=d)}y[t*4]=(n+a)/2,y[t*4+1]=(r+o)/2,y[t*4+2]=(i+s)/2,y[t*4+3]=Math.hypot(a-n,o-r,s-i)/2}return{index:v,ranges:g,spheres:y}}function ay(e,t,n,r,i){let a=e.spheres,o=e.ranges,s=o.length/2,c=new Uint32Array(s*2),l=Math.hypot(n,1),u=Math.hypot(r,1),d=Math.hypot(t[0],t[1],t[2]),f=0,p=0;for(let e=0;e<s;e++){let s=a[e*4],m=a[e*4+1],h=a[e*4+2],g=a[e*4+3]*d,_=-(t[2]*s+t[6]*m+t[10]*h+t[14]);if(_+g<i)continue;let v=t[0]*s+t[4]*m+t[8]*h+t[12];if(Math.abs(v)*n-_>g*l)continue;let y=t[1]*s+t[5]*m+t[9]*h+t[13];if(Math.abs(y)*r-_>g*u)continue;let b=o[e*2],x=o[e*2+1];p+=x-b,f&&c[f-1]===b?c[f-1]=x:(c[f++]=b,c[f++]=x)}return{ranges:c.subarray(0,f),triangles:p}}var oy=4e4,sy=12e3,cy=16,ly=24,uy=2e4,dy=[7e4,3e4],fy=26e5,py=6e6,my=2048,hy=8;function gy(e,t,n){let r=Math.min(2,Math.max(1,n||1)),i=46e5;return e*t*r*r>i&&(r=Math.max(1,Math.sqrt(i/(e*t)))),r}var _y=()=>typeof performance<`u`?performance.now():Date.now();function vy(e,t,n,r){if(e.length!==t.length||n.length!==r.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;for(let e=0;e<n.length;e++)if(n[e]!==r[e])return!1;return!0}var yy=class{geo=new WeakMap;fast=new em;fine=new em;fastLayer=null;fineLayer=null;mv=new Z;v=new Y;images=new WeakMap;scratch;small=new Uint8ClampedArray;big=new Uint8ClampedArray;job=null;fineSig=null;fineRefs=[];fineSS=1;fineLook=null;gSig=null;gRefs=[];gFrame=null;gSS=1;shownSig=null;shownRefs=[];shownDepth=null;shownScale=1;div=1;lodLevel=0;calm=0;built=!1;lastShown={data:new Uint8ClampedArray,width:0,height:0,seq:0};extDepth=null;lastFineMs=1/0;lastFine={ms:0,triangles:0,width:0,height:0,relight:!1};lastFast={ms:0,triangles:0,width:0,height:0};lastPreview={ms:0,width:0,height:0};get refining(){return this.job!==null}cancel(){this.job=null}cache(e){let t=this.geo.get(e);return t||(t={},this.geo.set(e,t)),t}classOf(e,t){let n=e.userData;return n.kind?1:n.piece?2:n.arch?3:t===Cg.tooth?4:0}auxOf(e,t,n,r,i,a){return t!==1&&t!==2?null:((!e.aux||e.auxKey!==a)&&(e.aux=t===1?ty(n,r,i).weights:ny(n),e.auxKey=a,e.lodAux=void 0,this.built=!0),e.aux)}toMesh(e,t,n,r,i,a,o=0,s=null){let c=e.geometry,l=c.getAttribute(`position`);if(!l||!(l instanceof Xn)||l.count<3)return null;let u=c.getIndex(),d=this.cache(c),f=l.version*4096+(u?u.version:0),p;if(u)p=u.array;else{if(!d.trivial||d.trivial.length!==l.count){d.trivial=new Uint32Array(l.count);for(let e=0;e<l.count;e++)d.trivial[e]=e}p=d.trivial}let m=l.array,h,g=c.getAttribute(`normal`);g instanceof Xn&&g.count===l.count&&g.itemSize===3?h=g.array:((!d.normals||d.normalsKey!==f)&&(d.normals=$p(l.array,p),d.normalsKey=f),h=d.normals);let _=e.material,v=_.vertexColors&&c.userData.srgb instanceof Uint8Array&&c.userData.srgb.length===l.count*3?c.userData.srgb:null,y=_.color?_.color.getHex():13421772,b=this.classOf(e,y),x=a?this.auxOf(d,b,l.array,h,p,f):null,S=this.mv.multiplyMatrices(t,e.matrixWorld).elements.slice(),C=null,w=1/0;if(s&&p.length/3>uy){(!d.blocks||d.blocksKey!==f)&&(d.blocks=iy(l.array,p),d.blocksKey=f,this.built=!0);let e=ay(d.blocks,S,s[0],s[5],ap);p=d.blocks.index,C=e.ranges,w=e.triangles}let T=!0;if(n&&!r){let e=c.userData.lowIndex;if(e)p=e,T=!1,C=null;else if(p.length/3>4e4&&w>dy[+(o>0)]){C=null,(!d.lod||d.lodKey!==f)&&(d.lod=ry(l.array,h,p,oy),d.lodKey=f,this.built=!0);let e=d.lod;if(o>0&&((!d.lod2||d.lod2Key!==f)&&(d.lod2=ry(l.array,h,p,sy),d.lod2Key=f,this.built=!0),e=d.lod2),x){if(!d.lodAux||d.lodAuxOf!==e){let t=e.positions.length/3,n=new Float32Array(t),r=new Uint32Array(t),i=e.map;for(let e=0;e<i.length;e++)n[i[e]]+=x[e],r[i[e]]++;d.lodAux=new Uint8Array(t);for(let e=0;e<t;e++)d.lodAux[e]=r[e]?n[e]/r[e]:0;d.lodAuxOf=e}x=d.lodAux}m=e.positions,h=e.normals,p=e.index,v=null,T=!1}}return{positions:m,normals:h,index:p,ranges:C,modelView:S,color:y,cls:b,aux:x,colors:v,emissive:_.emissive?_.emissive.getHex():0,roughness:typeof _.roughness==`number`?_.roughness:.5,cull:c.userData.closed===!0,wire:i&&(T||n)}}collect(e,t,n){let r=t.matrixWorldInverse,i=this.v,a={opaque:[],layers:[],triangles:0},o=new Map;for(let s of e){let e=this.toMesh(s,r,n.low,s===n.full,n.wireframe===!0,n.aux===!0,n.low?this.lodLevel:0,t.projectionMatrix.elements);if(!e)continue;a.triangles+=Math.floor(e.index.length/3);let c=s.material;if(c.transparent&&c.opacity<.995){let t=s.userData.obj??s.id,n=o.get(t);n||(n={alpha:c.opacity,depth:-1/0,meshes:[]},o.set(t,n),a.layers.push(n));let l=s.geometry;l.boundingSphere||l.computeBoundingSphere();let u=-i.copy(l.boundingSphere.center).applyMatrix4(s.matrixWorld).applyMatrix4(r).z;u>n.depth&&(n.depth=u),n.meshes.push(e)}else a.opaque.push(e)}return a.layers.sort((e,t)=>t.depth-e.depth),a}signature(e,t,n,r,i,a){let o=i.clip,s=[n,r,+!!i.wireframe,i.relief===!1?0:1,i.pixelRatio,i.quality===`fluido`?1:i.quality===`detalhe`?2:0,+!!i.aux,+!!o,o?o[0]:0,o?o[1]:0,o?o[2]:0,o?o[3]:0],c=e=>{for(let t=0;t<16;t++)s.push(e[t])};c(t.matrixWorldInverse.elements),c(t.projectionMatrix.elements);for(let t of e){let e=t.geometry,n=e.getAttribute(`position`),r=e.getIndex(),i=e.getAttribute(`normal`),o=t.material;s.push(t.id,e.id,n?n.version:-1,n?n.count:0,r?r.version:-1,r?r.count:0,i?i.version:-1,o.color?o.color.getHex():0,o.emissive?o.emissive.getHex():0,typeof o.roughness==`number`?o.roughness:.5,o.transparent?o.opacity:1,+!!o.vertexColors,+(e.userData.closed===!0)),c(t.matrixWorld.elements),a.push(o.vertexColors?e.userData.srgb:null,t.userData.obj??null)}return s}*work(e,t,n,r,i,a,o,s,c,l){let u=o.look??Wp;if(!c){let n=a.projectionMatrix.elements;t.begin(r,i,n[0],n[5]),t.setClip(s?Lm(s,a.matrixWorldInverse.elements):null);for(let n of e.opaque)t.setMesh(n),yield*this.draw(t,n);t.linearize(),l?.(),yield}if(o.ao&&!t.aoValid(u)){for(let e=0;e<i;e+=16)t.computeAO(e,Math.min(i,e+16),u),yield;t.blurAO(),yield}if(o.shadow&&u.shadow>0){for(let e=0;e<i;e+=32)t.computeShadow(u,e,Math.min(i,e+32)),yield;t.blurShadow(),yield}for(let e=0;e<i;e+=hy)t.shade(o,e,Math.min(i,e+hy)),yield;if(o.smoothEdges&&(t.finish(),yield),e.layers.length){let r=n(),i={...up,scale:o.scale,look:u};for(let n of e.layers){r.beginLayer(t),yield;for(let e of n.meshes)r.setMesh(e),yield*this.draw(r,e);r.shade(i),yield,r.compositeOnto(t,n.alpha),yield}}}*draw(e,t){let n=t.ranges;if(n)for(let t=0;t+1<n.length;t+=2)for(let r=n[t],i=n[t+1];r<i;r+=my)e.drawTriangles(r,Math.min(i,r+my)),yield;else for(let t=0,n=e.triangleCount;t<n;t+=my)e.drawTriangles(t,t+my),yield}gather(e){let t=[],n=[],r=[];return e.traverseVisible(e=>{e.isMesh?e.userData.glOnly||(e.userData.dot?r:t).push(e):e.isLine&&n.push(e)}),{meshes:t,lines:n,dots:r}}render(e,t,n,r,i,a){let o={triangles:0,lines:0,dots:0,done:!0,ms:0};if(t=Math.floor(t),n=Math.floor(n),!(t>0&&n>0))return this.cancel(),o;i.updateMatrixWorld();let{meshes:s}=this.gather(i),c={ctx:e,W:t,H:n,camera:r,root:i,pixelRatio:a.pixelRatio},l=[],u=this.signature(s,r,t,n,a,l),d=a.look??Wp,f=this.gSig!==null&&vy(u,this.gSig,l,this.gRefs);if(a.preview&&!a.low&&f&&this.gFrame&&!this.gFrame.layers.length)return this.cancel(),this.fineSig=null,this.paintPreview(c,a,d),this.shownSig=u,this.shownRefs=l,o.triangles=this.lastFine.triangles,o.ms=this.lastPreview.ms,o.done=!1,this.overlays(c,o),o;if(a.low||a.preview&&!f){this.cancel();let e=this.paintFast(s,c,{...a,low:!0});return this.shownSig=u,this.shownRefs=l,o.triangles=e.triangles,o.ms=this.lastFast.ms,a.low||(o.done=!1),this.overlays(c,o),o}if(this.fineSig&&this.fineLook===d&&vy(u,this.fineSig,l,this.fineRefs))return this.cancel(),this.presentFine(c),this.shownSig=u,this.shownRefs=l,o.triangles=this.lastFine.triangles,this.overlays(c,o),o;let p=a.budgetMs!=null&&!a.preview;if(this.job&&p&&this.job.look===d&&vy(u,this.job.sig,l,this.job.refs))this.job.target=c;else{let e=a.relief!==!1,i=f&&this.gFrame!==null,o=i?this.gFrame:this.collect(s,r,{...a,low:!1}),m=a.quality??`equilibrado`,h=a.pixelRatio<1.5&&m!==`fluido`?2:1;t*n*h*h>(m===`detalhe`?py:fy)&&(h=1),i&&(h=this.gSS);let g=e&&m!==`fluido`,_={ao:g,cavity:e,outline:e,shadow:g,smoothEdges:!0,scale:a.pixelRatio*h,look:d};this.job=null,this.fineSig=null,i||(this.gSig=null,this.gFrame=null);let v=()=>{this.gSig=u,this.gRefs=l,this.gFrame=o,this.gSS=h};this.job={gen:this.work(o,this.fine,()=>this.fineLayer??=new em,t*h,n*h,r,_,a.clip??null,i,v),sig:u,refs:l,target:c,ss:h,spent:0,triangles:o.triangles,look:d,frame:o,relight:i};let y=!this.shownSig||!vy(u,this.shownSig,l,this.shownRefs);p&&y&&this.lastFineMs>2*(a.budgetMs??0)&&(this.paintFast(s,c,{...a,low:!0}),this.shownSig=u,this.shownRefs=l)}return o.triangles=this.job.triangles,o.done=this.advance(p?Math.max(1,a.budgetMs):1/0),o.ms=o.done?this.lastFine.ms:this.lastFast.ms,this.overlays(c,o),o}step(e=10){let t=this.job;return!t||!this.advance(e)?!1:(this.overlays(t.target,{triangles:0,lines:0,dots:0,done:!0,ms:0}),!0)}advance(e){let t=this.job;if(!t)return!1;let n=_y(),r=!1;for(;;){if(t.gen.next().done){r=!0;break}if(_y()-n>=e)break}return t.spent+=_y()-n,r?(this.job=null,this.fineSig=t.sig,this.fineRefs=t.refs,this.fineSS=t.ss,this.fineLook=t.look,t.relight||(this.lastFineMs=t.spent),this.lastFine={ms:t.spent,triangles:t.triangles,width:this.fine.width,height:this.fine.height,relight:t.relight},this.presentFine(t.target),this.shownSig=t.sig,this.shownRefs=t.refs,!0):!1}paintFast(e,t,n){let r=_y(),{W:i,H:a}=t,o=this.collect(e,t.camera,n),s=this.div,c=Math.max(1,Math.ceil(i/s)),l=Math.max(1,Math.ceil(a/s)),u=this.lodLevel,d={...up,cavity:n.relief!==!1&&u===0,smoothEdges:!0,scale:t.pixelRatio/s,look:n.look??Wp},f=this.work(o,this.fast,()=>this.fastLayer??=new em,c,l,t.camera,d,n.clip??null,!1);for(;!f.next().done;);this.present(t,this.fast.out,c,l),this.shownDepth=this.fast,this.shownScale=c/i;let p=_y()-r;return this.lastFast={ms:p,triangles:o.triangles,width:c,height:l},this.built?(this.built=!1,this.calm=0):p>ly?(this.calm=0,u===0?this.lodLevel=1:s===1&&(this.div=1.5)):p<cy*.5?++this.calm>=12&&(this.calm=0,s>1?this.div=1:u>0&&(this.lodLevel=0)):this.calm=0,o}paintPreview(e,t,n){let r=_y(),i=this.fine,a=t.relief!==!1,o=a&&n.shadow>0;o&&(i.computeShadow(n),i.blurShadow()),i.shadePreview({ao:a&&i.aoValid(n),cavity:a,outline:a,shadow:o,smoothEdges:!1,scale:t.pixelRatio*this.gSS,look:n},2),this.present(e,i.preview,i.previewWidth,i.previewHeight),this.shownDepth=i,this.shownScale=i.width/e.W,this.lastPreview={ms:_y()-r,width:i.previewWidth,height:i.previewHeight}}presentFine(e){let t=this.fine,{W:n,H:r}=e;this.fineSS===2?(this.big.length!==n*r*4&&(this.big=new Uint8ClampedArray(n*r*4)),tm(t.out,t.width,t.height,this.big),this.present(e,this.big,n,r)):this.present(e,t.out,t.width,t.height),this.shownDepth=t,this.shownScale=t.width/n}image(e,t,n){if(typeof ImageData>`u`)return null;let r=this.images.get(e);return(!r||r.width!==t||r.height!==n)&&(r=new ImageData(e,t,n),this.images.set(e,r)),r}scratchCanvas(e,t){if(this.scratch===void 0){this.scratch=null;try{let n=typeof OffscreenCanvas<`u`?new OffscreenCanvas(e,t):typeof document<`u`?document.createElement(`canvas`):null,r=n?n.getContext(`2d`):null;n&&r&&r.putImageData&&(this.scratch={canvas:n,ctx:r})}catch{this.scratch=null}}let n=this.scratch;return n&&(n.canvas.width!==e||n.canvas.height!==t)&&(n.canvas.width=e,n.canvas.height=t),n}present(e,t,n,r){let{ctx:i,W:a,H:o}=e;if(this.lastShown={data:t,width:n,height:r,seq:this.lastShown.seq+1},!i.putImageData){i.clearRect(0,0,a,o);return}if(n===a&&r===o){let e=this.image(t,n,r);e&&i.putImageData(e,0,0);return}let s=this.image(t,n,r),c=s&&i.drawImage?this.scratchCanvas(n,r):null;if(s&&c){c.ctx.putImageData(s,0,0),i.clearRect(0,0,a,o),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality=`high`,i.drawImage(c.canvas,0,0,n,r,0,0,a,o);return}this.small.length!==a*o*4&&(this.small=new Uint8ClampedArray(a*o*4));let l=new Uint32Array(t.buffer,t.byteOffset,n*r),u=new Uint32Array(this.small.buffer);for(let e=0;e<o;e++){let t=Math.min(r-1,Math.floor(e*r/o))*n;for(let r=0,i=e*a;r<a;r++,i++)u[i]=l[t+Math.min(n-1,Math.floor(r*n/a))]}let d=this.image(this.small,a,o);d&&i.putImageData(d,0,0)}renderImage(e,t,n,r,i={}){let a={low:!1,pixelRatio:1,...i},o={fillStyle:``,strokeStyle:``,lineWidth:1,lineJoin:`round`,lineCap:`round`,clearRect(){},beginPath(){},moveTo(){},lineTo(){},closePath(){},fill(){},stroke(){},arc(){}};delete a.budgetMs;let s=this.render(o,e,t,n,r,a);return a.low?{data:this.fast.out,width:this.fast.width,height:this.fast.height,triangles:s.triangles,ms:s.ms}:this.fineSS===2?(this.big.length!==e*t*4&&(this.big=new Uint8ClampedArray(e*t*4)),tm(this.fine.out,this.fine.width,this.fine.height,this.big),{data:this.big,width:e,height:t,triangles:s.triangles,ms:s.ms}):{data:this.fine.out,width:this.fine.width,height:this.fine.height,triangles:s.triangles,ms:s.ms}}depthAt(e,t){let n=this.extDepth;if(n){let r=Math.floor(e*n.scale),i=Math.floor(t*n.scale);return r<0||i<0||r>=n.width||i>=n.height?0:n.data[i*n.width+r]}let r=this.shownDepth;if(!r)return 0;let i=Math.floor(e*this.shownScale),a=Math.floor(t*this.shownScale);return i<0||a<0||i>=r.width||a>=r.height?0:r.depth[a*r.width+i]}shownDepthBuffer(){let e=this.shownDepth;return e?{data:e.depth,width:e.width,height:e.height,scale:this.shownScale}:null}presentExternal(e,t,n,r,i,a,o,s){let c={ctx:e,W:t,H:n,camera:r,root:i,pixelRatio:a},l={triangles:0,lines:0,dots:0,done:!0,ms:0};return this.present(c,o.data,o.width,o.height),this.extDepth=s,this.shownDepth=null,this.overlays(c,l),l}overlays(e,t){let{ctx:n,W:r,H:i,camera:a,root:o}=e,s=e.pixelRatio,{lines:c,dots:l}=this.gather(o),u=a.matrixWorldInverse,d=this.v,f=a.projectionMatrix.elements[0],p=a.projectionMatrix.elements[5],m=r/2,h=i/2;n.lineCap=`round`,n.lineJoin=`round`;let g=n.globalAlpha!==void 0;for(let e of c){let r=e.geometry.getAttribute(`position`);if(!r)continue;let i=e.material,a=this.mv.multiplyMatrices(u,e.matrixWorld),o=e.isLineSegments===!0,c=o&&g&&(this.shownDepth!==null||this.extDepth!==null)&&!e.userData.guide;n.strokeStyle=`#`+i.color.getHexString(),n.lineWidth=(Number(e.userData.width)||1.6)*s;let l=g&&i.transparent&&i.opacity<1?i.opacity:1;g&&(n.globalAlpha=l);let _=[];n.beginPath();let v=NaN,y=NaN,b=0,x=0;for(let e=0;e<r.count;e++){d.fromBufferAttribute(r,e).applyMatrix4(a);let t=-d.z,i=t>.5?(1+f*d.x/t)*m:NaN,s=t>.5?(1-p*d.y/t)*h:NaN;if((o?e%2==1:e>0)&&i===i&&v===v){let e=!1;if(c){let n=this.depthAt((i+v)/2,(s+y)/2),r=(t+b)/2;e=n>0&&r>n+.35}e?_.push(v,y,i,s):(n.moveTo(v,y),n.lineTo(i,s)),x++}v=i,y=s,b=t}if(x>_.length/4&&n.stroke(),_.length){n.globalAlpha=.25*l,n.beginPath();for(let e=0;e<_.length;e+=4)n.moveTo(_[e],_[e+1]),n.lineTo(_[e+2],_[e+3]);n.stroke()}g&&(n.globalAlpha=1),t.lines+=x}for(let e of l){d.setFromMatrixPosition(e.matrixWorld).applyMatrix4(u);let r=-d.z;if(!(r>.5))continue;let i=Math.max((Number(e.userData.dotMin)||2.5)*s,(Number(e.userData.dot)||.3)*p*h/r),a=e.material;g&&(n.globalAlpha=a.transparent&&a.opacity<1?a.opacity:1),n.beginPath(),n.arc((1+f*d.x/r)*m,(1-p*d.y/r)*h,i,0,Math.PI*2),n.fillStyle=`#`+a.color.getHexString(),n.fill(),n.strokeStyle=`rgba(0,0,0,0.55)`,n.lineWidth=s,n.stroke(),t.dots++}g&&(n.globalAlpha=1)}},by=class{port;local=new yy;seq=0;sentSeq=0;busy=!1;pending=null;shots=new Map;sent=new WeakMap;srgbIds=new WeakMap;srgbSeq=0;spare=[];lastImage=null;disposed=!1;onFrame=null;stats={sent:0,replaced:0,frames:0,lastMs:0};constructor(e){this.port=e,e.onmessage=e=>this.receive(e.data)}get working(){return this.busy}get refining(){return!1}step(){return!1}cancel(){}dispose(){this.disposed=!0,this.pending=null,this.shots.clear(),this.port.onmessage=null,this.port.terminate?.()}geoKey(e){let t=e.getAttribute(`position`),n=e.getIndex(),r=e.getAttribute(`normal`),i=e.userData.srgb,a=0;return i&&(a=this.srgbIds.get(i)??0,a||(a=++this.srgbSeq,this.srgbIds.set(i,a))),`${e.id}:${t.version}:${t.count}:${n?n.version:-1}:${n?n.count:0}:${r?r.version:-1}:${a}:${+(e.userData.closed===!0)}`}build(e,t,n,r,i,a){let o=[],s=[],c=!1;i.updateMatrixWorld(),i.traverseVisible(e=>{let t=e;if(e.isLineSegments&&!e.userData.guide&&(c=!0),!t.isMesh||t.userData.glOnly||t.userData.dot)return;let n=t.geometry,r=n.getAttribute(`position`);if(!r||!(r instanceof Xn)||r.count<3)return;let i=this.geoKey(n);if(this.sent.get(n)!==i){this.sent.set(n,i);let e=n.getAttribute(`normal`),t=n.getIndex(),a=n.userData.srgb,o=n.userData.lowIndex;s.push({key:String(n.id),positions:Float32Array.from(r.array),normals:e instanceof Xn&&e.count===r.count?Float32Array.from(e.array):null,index:t?t.array.slice():null,srgb:a?a.slice():null,lowIndex:o?o.slice():null,closed:n.userData.closed===!0})}let a=t.material;o.push({id:t.id,geo:String(n.id),matrix:t.matrixWorld.toArray(),color:a.color?a.color.getHex():13421772,emissive:a.emissive?a.emissive.getHex():0,roughness:typeof a.roughness==`number`?a.roughness:.5,opacity:a.opacity,transparent:a.transparent,vertexColors:a.vertexColors===!0,kind:t.userData.kind??null,piece:t.userData.piece===!0,arch:t.userData.arch??null,obj:t.userData.obj??null})});let l=this.spare;this.spare=[];let u={t:`frame`,seq:e,W:t,H:n,camWorld:r.matrixWorld.toArray(),camProj:r.projectionMatrix.toArray(),meshes:o,geos:s,low:a.low,preview:a.preview===!0,pixelRatio:a.pixelRatio,full:a.full?a.full.id:null,wireframe:a.wireframe===!0,relief:a.relief!==!1,quality:a.quality??`equilibrado`,appearance:a.appearance??null,clip:a.clip??null,depth:c,spare:l},d=[...l];for(let e of s)d.push(e.positions.buffer),e.normals&&d.push(e.normals.buffer),e.index&&d.push(e.index.buffer),e.srgb&&d.push(e.srgb.buffer),e.lowIndex&&d.push(e.lowIndex.buffer);return{req:u,transfer:d}}render(e,t,n,r,i,a){if(this.disposed||(t=Math.floor(t),n=Math.floor(n),!(t>0&&n>0)))return;let o=++this.seq,s=r.clone();s.matrixWorld.copy(r.matrixWorld),s.matrixWorldInverse.copy(r.matrixWorldInverse),s.projectionMatrix.copy(r.projectionMatrix),s.matrixAutoUpdate=!1;let c={seq:o,ctx:e,W:t,H:n,camera:s,root:i,pixelRatio:a.pixelRatio},l={...a},u=()=>this.build(o,t,n,s,i,l);this.busy?(this.pending&&this.stats.replaced++,this.pending={build:u,shot:c}):this.send(u,c)}send(e,t){let{req:n,transfer:r}=e();this.busy=!0,this.sentSeq=t.seq,this.shots.set(t.seq,t),this.stats.sent++,this.port.postMessage(n,r)}receive(e){if(this.disposed||e.t!==`image`)return;let t=e.seq<this.sentSeq,n=t?void 0:this.shots.get(e.seq);if(e.seq===this.sentSeq){this.busy=!1;for(let t of this.shots.keys())(t<e.seq||e.idle)&&this.shots.delete(t)}if(t&&this.spare.length<3&&this.spare.push(e.data),n){let t=new Uint8ClampedArray(e.data),r=e.depth?{data:new Float32Array(e.depth),width:e.depthWidth,height:e.depthHeight,scale:e.depthScale}:null;this.lastImage&&this.spare.length<3&&this.spare.push(this.lastImage.data.buffer),this.lastImage={data:t,width:e.width,height:e.height,depth:r,shot:n},this.local.presentExternal(n.ctx,n.W,n.H,n.camera,n.root,n.pixelRatio,this.lastImage,r),this.stats.frames++,this.stats.lastMs=e.ms,this.onFrame?.(e.done)}if(!this.busy&&this.pending){let e=this.pending;this.pending=null,this.send(e.build,e.shot)}}redrawGuides(){let e=this.lastImage;if(!e||this.disposed)return!1;let t=e.shot;return this.local.presentExternal(t.ctx,t.W,t.H,t.camera,t.root,t.pixelRatio,e,e.depth),!0}};function xy(){if(typeof Worker>`u`)return null;try{if(typeof localStorage<`u`&&localStorage.getItem(`special-ia-cad:worker`)===`0`)return null}catch{}try{let e=new Worker(new URL(new URL(`render.worker-BneIo8fv.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),t={onmessage:null,postMessage:(t,n)=>e.postMessage(t,n),terminate:()=>e.terminate()};return e.onmessage=e=>t.onmessage?.(e),e.onerror=e=>{console.error(`Worker de desenho falhou:`,e.message)},t}catch{return null}}var Sy=170,Cy=6280447,wy=15,Ty=160,Ey=240,Dy=11,Oy=5,ky=12,Ay=`position:absolute;pointer-events:none;background:#fff;color:#0E0E0E;font:500 12px Inter,system-ui,sans-serif;padding:3px 8px;border-radius:6px;transform:translate(-50%,-140%);display:none;white-space:nowrap;z-index:1`,jy=`display:block;width:100%;height:100%;touch-action:none;outline:none`,My=class{renderMode;onObjectsChange=null;onPlaced=null;onMarginChange=null;onMarginSuggested=null;onEdit=null;onMeasure=null;onAppearanceChange=null;onSectionChange=null;appearance=fm(`padrao`);look=Mm(this.appearance);lighting=!1;section=null;sectionPick=null;sectionDirty=!1;sectionGroup=new cn;sectionMat=new ui({color:Cy,depthTest:!1});sectionDotMat=new Cr({color:Cy,depthTest:!1});sectionDotGeo=new ua(1,10,8);stage=new cn;glIdle=null;model=new Xv;cam=new Zm;prober=new sh;scene=new _n;lights=[];gl=null;soft=null;remote=null;quality=`equilibrado`;ctx=null;canvas;glLost=null;wire=!1;wireMat=null;label;ro;el=null;raf=0;disposed=!1;dirty=!0;refine=!1;lastLow=0;lastWheel=-1e9;lastFrame=0;width=0;height=0;pixelRatio=1;tool=`orbitar`;placing=null;drag=null;constructor(){let e=document.createElement(`canvas`),t=null,n=null;try{n=e.getContext(`webgl2`,{antialias:!0,alpha:!0})}catch{n=null}if(n)try{t=new eu({canvas:e,context:n,antialias:!0,alpha:!0}),t.setPixelRatio(Math.min(2,window.devicePixelRatio||1))}catch{t=null,e=document.createElement(`canvas`)}this.gl=t,this.canvas=e,t?this.renderMode=`webgl`:(this.ctx=e.getContext(`2d`),this.startSoftware(),this.renderMode=`software`),this.canvas.style.cssText=jy,t&&(e.addEventListener(`webglcontextlost`,this.onContextLost),e.addEventListener(`webglcontextrestored`,this.onContextRestored));let r=this.cam.camera,i=new Ga(16777215,3814192,1.1),a=new oo(16777215,1.7);a.position.set(30,40,20),a.target.position.set(0,0,-1),r.add(a,a.target);let o=new oo(16777215,.5);o.position.set(-40,-30,-30),this.lights.push(i,a,o),this.stage.add(this.model.root,this.sectionGroup),this.scene.add(i,o,r,this.stage),this.model.onMarginChange=(e,t)=>{this.updateCursor(),this.invalidate(),this.onMarginChange?.(e,t)},this.model.onMarginSuggested=(e,t)=>{this.invalidate(),this.onMarginSuggested?.(e,t)},this.model.onObjectsChange=()=>{this.invalidate(),this.onObjectsChange?.()},this.label=document.createElement(`div`),this.label.style.cssText=Ay,this.listen(this.canvas,!0),this.ro=typeof ResizeObserver<`u`?new ResizeObserver(()=>this.resize()):null,this.cam.jump(this.model.overviewGoal()),this.updateCursor(),this.raf=requestAnimationFrame(this.frame)}get mode(){return this.model.mode}attach(e){this.disposed||(this.el!==e&&(this.el&&this.ro?.unobserve(this.el),this.el=e,this.ro?.observe(e)),this.canvas.parentElement!==e&&e.appendChild(this.canvas),this.label.parentElement!==e&&e.appendChild(this.label),this.resize())}dispose(){if(this.disposed)return;this.disposed=!0,cancelAnimationFrame(this.raf),this.ro?.disconnect();let e=this.canvas;this.listen(e,!1),this.drag=null,this.model.dispose();for(let e of this.lights)e.removeFromParent(),e.dispose();this.scene.clear(),this.clearSectionLines(),this.sectionMat.dispose(),this.sectionDotMat.dispose(),this.sectionDotGeo.dispose(),this.onAppearanceChange=null,this.onSectionChange=null;let t=this.gl??this.glLost??this.glIdle;this.glIdle=null,t&&(t.domElement.removeEventListener(`webglcontextlost`,this.onContextLost),t.domElement.removeEventListener(`webglcontextrestored`,this.onContextRestored),t.dispose(),t.forceContextLoss(),this.gl=this.glLost=null),this.wireMat?.dispose(),this.wireMat=null,this.stopSoftware(),this.ctx=null,e.remove(),this.label.remove(),this.el=null,this.onPlaced=this.onEdit=this.onMeasure=null,this.onMarginChange=null,this.onMarginSuggested=null,this.onObjectsChange=null}listen(e,t){t?(e.addEventListener(`contextmenu`,this.onContextMenu),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onCancel),e.addEventListener(`wheel`,this.onWheel,{passive:!1})):(e.removeEventListener(`contextmenu`,this.onContextMenu),e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onCancel),e.removeEventListener(`wheel`,this.onWheel))}useCanvas(e){let t=this.canvas;t!==e&&(this.listen(t,!1),this.drag=null,e.style.cssText=jy,t.parentElement&&t.parentElement.replaceChild(e,t),this.canvas=e,this.listen(e,!0),this.updateCursor())}onContextLost=e=>{if(e.preventDefault(),this.disposed||!this.gl)return;this.glLost=this.gl,this.gl=null;let t=document.createElement(`canvas`);this.ctx=t.getContext(`2d`),this.startSoftware(),this.renderMode=`software`,this.useCanvas(t),this.resize()};onContextRestored=()=>{!this.disposed&&this.glLost&&(this.needsSoftware()?(this.glIdle=this.glLost,this.glLost=null):(this.gl=this.glLost,this.glLost=null,this.stopSoftware(),this.ctx=null,this.renderMode=`webgl`,this.useCanvas(this.gl.domElement),this.resize()))};needsSoftware(){return!hm(this.appearance)||this.section!==null}syncRenderer(){if(this.disposed)return;let e=this.needsSoftware();if(e&&this.gl){this.glIdle=this.gl,this.gl=null;let e=document.createElement(`canvas`);this.ctx=e.getContext(`2d`),this.startSoftware(),this.renderMode=`software`,this.useCanvas(e),this.resize()}else if(!e&&this.glIdle&&!this.gl){let e=!0;try{e=this.glIdle.getContext().isContextLost()}catch{e=!0}if(e)return;this.gl=this.glIdle,this.glIdle=null,this.stopSoftware(),this.ctx=null,this.renderMode=`webgl`,this.useCanvas(this.gl.domElement),this.resize()}}startSoftware(){this.stopSoftware();let e=xy();if(e){this.remote=new by(e);let t=this.remote;t.onFrame=()=>{this.countFrame(),this.canvas.dataset.ms=t.stats.lastMs.toFixed(1),this.canvas.dataset.sent=t.stats.sent+`/`+t.stats.replaced,this.placeLabel()}}else this.soft=new yy}stopSoftware(){this.remote?.dispose(),this.remote=null,this.soft=null}setRenderQuality(e){(e===`fluido`||e===`equilibrado`||e===`detalhe`)&&(this.quality=e,this.invalidate())}getRenderQuality(){return this.quality}resize(){let e=this.el;if(!e)return;let t=e.clientWidth,n=e.clientHeight;if(t&&n){if(this.width=t,this.height=n,this.gl)this.gl.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.gl.setSize(t,n,!1);else{this.pixelRatio=gy(t,n,window.devicePixelRatio||1);let e=Math.max(1,Math.round(t*this.pixelRatio)),r=Math.max(1,Math.round(n*this.pixelRatio));this.canvas.width!==e&&(this.canvas.width=e),this.canvas.height!==r&&(this.canvas.height=r)}this.cam.setAspect(t/n),this.dirty=!0}}invalidate(){this.dirty=!0,this.section&&(this.sectionDirty=!0)}frame=e=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);let t=this.el;if(!t||!t.isConnected||!this.width)return;let n=this.lastFrame?Math.min(.1,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let r=this.cam.update(n);if(this.gl){if(!r&&!this.dirty)return;this.dirty=!1,this.gl.render(this.scene,this.cam.camera),this.wire&&this.renderWire(this.gl)}else if((this.soft||this.remote)&&this.ctx){let e=this.lighting||this.drag?.mode===`light`,t=this.drag!==null&&!e||this.cam.animating||performance.now()-this.lastWheel<Ey;if(r||this.dirty){let n=t||r;this.dirty=!1,this.sectionDirty&&this.drag?.mode!==`sculpt`&&this.rebuildSection(),this.paint(n,e&&!n),this.refine=n||e,this.lastLow=performance.now()}else if(this.refine&&!t&&!e&&performance.now()-this.lastLow>Ty)this.refine=!1,this.paint(!1);else if(this.soft&&this.soft.refining&&!t&&!e){if(!this.soft.step(Dy))return}else return}else return;this.placeLabel()};presented=0;countFrame(){this.canvas.dataset.frames=String(++this.presented)}paint(e,t=!1){if(!this.ctx)return;let n=this.drag?.mode===`sculpt`?this.model.activeCrown():null,r={low:e,pixelRatio:this.pixelRatio,full:n,wireframe:this.wire,clip:this.clipPlane(),preview:t,quality:this.quality};this.remote?this.remote.render(this.ctx,this.canvas.width,this.canvas.height,this.cam.camera,this.stage,{...r,appearance:this.appearance}):this.soft&&(this.countFrame(),this.soft.render(this.ctx,this.canvas.width,this.canvas.height,this.cam.camera,this.stage,{...r,budgetMs:Dy,look:this.look,aux:Nm(this.appearance)}))}listAppearancePresets(){return pm()}getAppearance(){return{...this.appearance}}setAppearance(e){this.appearance=mm(e),this.look=Mm(this.appearance),this.syncRenderer(),this.invalidate()}setLightDirection(e,t,n=!1){this.lighting=n,this.setAppearance({...this.appearance,lightAzimuth:e,lightElevation:t}),n||(this.refine=!0,this.lastLow=performance.now()-Ty)}clipPlane(){let e=this.section;if(!e)return null;let t=e.flipped?-1:1,n=e.p.clone().addScaledVector(e.n,e.offset);return[e.n.x*t,e.n.y*t,e.n.z*t,-t*e.n.dot(n)]}emitSection(){this.sectionDirty=!0,this.syncRenderer(),this.updateCursor(),this.invalidate(),this.onSectionChange?.(this.getSection())}getSection(){let e=this.section;return{active:e!==null,picking:this.sectionPick!==null,offset:e?e.offset:0,flipped:e?e.flipped:!1}}sectionFromView(){let e=this.cam.camera;e.updateMatrixWorld();let t=e.position.clone().sub(this.cam.tgt);t.lengthSq()<1e-9||(this.sectionPick=null,this.section={n:t.normalize(),p:this.cam.tgt.clone(),offset:0,flipped:!1},this.emitSection())}startSectionPick(){this.model.hasModel()&&(this.sectionPick=[],this.emitSection())}setSectionOffset(e){this.section&&Number.isFinite(e)&&(this.section.offset=Math.max(-15,Math.min(wy,e)),this.emitSection())}flipSection(){this.section&&(this.section.flipped=!this.section.flipped,this.emitSection())}clearSection(){(this.section||this.sectionPick)&&(this.section=null,this.sectionPick=null,this.emitSection())}clearSectionLines(){for(let e of[...this.sectionGroup.children])e.removeFromParent(),e.isLineSegments&&e.geometry.dispose()}rebuildSection(){this.sectionDirty=!1,this.clearSectionLines();for(let e of this.sectionPick??[]){let t=new Fr(this.sectionDotGeo,this.sectionDotMat);t.position.copy(e),t.scale.setScalar(.18),t.userData.dot=.18,this.sectionGroup.add(t)}let e=this.clipPlane();if(e){this.model.root.updateMatrixWorld(!0);let t=new Z;this.model.root.traverseVisible(n=>{let r=n;if(!r.isMesh||r.userData.dot||r.userData.glOnly)return;let i=r.geometry.getAttribute(`position`),a=r.geometry.getIndex();if(!i||!a)return;let o=Lm(e,t.copy(r.matrixWorld).invert().elements),s=Im(i.array,a.array,o);if(!s.length)return;let c=new Si(new dr().setAttribute(`position`,new Xn(s,3)),this.sectionMat);c.matrixAutoUpdate=!1,c.matrix.copy(r.matrixWorld),c.userData.width=1.8,c.renderOrder=15,this.sectionGroup.add(c)})}this.sectionGroup.updateMatrixWorld(!0)}sectionClick(e){let t=this.sectionPick;if(!t)return;let n=this.pick(e,this.model.pickTargets());if(!n)return;if(t.push(n.point.clone()),t.length<2){this.sectionDirty=!0,this.invalidate();return}let r=this.cam.camera.getWorldDirection(new Y),i=t[1].clone().sub(t[0]).cross(r);this.sectionPick=null,i.lengthSq()>1e-9&&(this.section={n:i.normalize(),p:t[0].clone(),offset:0,flipped:!1}),this.emitSection()}setMarginDiagnostics(e){this.model.setMarginDiagnostics(e),this.invalidate()}marginDiagnostics(e){return this.model.marginDiagnostics(e)}renderWire(e){this.wireMat??=new Cr({color:1845821,wireframe:!0,transparent:!0,opacity:.4,depthWrite:!1});let t=[];this.model.root.traverseVisible(e=>{(!e.isMesh||e.userData.dot||e.userData.glOnly)&&e!==this.model.root&&!e.isGroup&&t.push(e)});for(let e of t)e.visible=!1;let n=e.autoClear;e.autoClear=!1,this.scene.overrideMaterial=this.wireMat,e.render(this.scene,this.cam.camera),this.scene.overrideMaterial=null,e.autoClear=n;for(let e of t)e.visible=!0}placeLabel(){let e=this.model.measureMid();e?(e.project(this.cam.camera),e.z>1?this.label.style.display=`none`:(this.label.style.display=`block`,this.label.style.left=(e.x+1)/2*this.width+`px`,this.label.style.top=(1-e.y)/2*this.height+`px`)):this.label.style.display=`none`}ndc(e){let t=this.canvas.getBoundingClientRect();return new J((e.clientX-t.left)/(t.width||1)*2-1,-((e.clientY-t.top)/(t.height||1))*2+1)}pick(e,t){if(!t.length)return null;this.model.root.updateMatrixWorld();let n=this.clipPlane();if(!n)return this.prober.pick(this.ndc(e),this.cam.camera,t);let r=this.ndc(e),i=this.cam.camera,a=new Y().setFromMatrixPosition(i.matrixWorld),o=new Y(r.x,r.y,.5).unproject(i).sub(a).normalize(),s=new Y(n[0],n[1],n[2]),c=s.dot(a)+n[3],l=s.dot(o);if(c>0)return l>=-1e-9?null:this.prober.cast(a.addScaledVector(o,c/-l+1e-4),o,t);let u=this.prober.cast(a,o,t);return u&&s.dot(u.point)+n[3]>1e-4?null:u}hitCrown(e){let t=this.model.activeCrown();return t?this.pick(e,[t]):null}updateCursor(){this.canvas.style.cursor=this.drag&&this.drag.mode!==`sculpt`?`grabbing`:this.tool===`orbitar`&&!this.marking()&&!this.sectionPick?`grab`:`crosshair`}marking(){return this.placing!=null||this.model.marginTarget()!=null}onContextMenu=e=>e.preventDefault();onDown=e=>{if(this.disposed||this.drag)return;try{this.canvas.setPointerCapture(e.pointerId)}catch{}let t={pointer:e.pointerId,x:e.clientX,y:e.clientY,button:e.button,moved:0,mode:`rot`,pivot:null},n=this.tool;if(e.button===0&&e.altKey&&this.model.hasModel())t.mode=`light`,this.drag=t,this.updateCursor();else{if(e.button===0&&dh(n)&&!this.marking()&&!this.sectionPick){let r=this.hitCrown(e);if(r&&this.model.beginStroke()){t.mode=`sculpt`,this.drag=t,this.model.sculptAt(r.point,n)&&this.invalidate(),this.updateCursor();return}}if(t.mode=e.button===0&&e.ctrlKey?`roll`:e.button===0&&!e.shiftKey?`rot`:`pan`,t.mode!==`pan`&&this.model.hasModel()){let n=this.pick(e,this.model.pickTargets());t.pivot=n?n.point.clone():null}this.drag=t,this.cam.goal=null,this.updateCursor()}};onMove=e=>{let t=this.drag;if(!t||e.pointerId!==t.pointer||e.buttons===0)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.moved+=Math.abs(n)+Math.abs(r),t.x=e.clientX,t.y=e.clientY,t.mode===`sculpt`){let t=this.tool;if(!dh(t))return;let n=this.hitCrown(e);n&&this.model.sculptAt(n.point,t)&&this.invalidate()}else if(t.mode===`light`){let e=this.appearance,t=Fm(e.lightAzimuth,e.lightElevation),i=Pm(t.x+n/Sy,t.y-r/Sy);(i.azimuth!==e.lightAzimuth||i.elevation!==e.lightElevation)&&(this.setAppearance({...e,lightAzimuth:i.azimuth,lightElevation:i.elevation}),this.onAppearanceChange?.(this.getAppearance()))}else if(t.mode===`rot`)this.cam.rotate(n,r,t.pivot);else if(t.mode===`roll`){let e=this.canvas.getBoundingClientRect(),i=e.left+e.width/2,a=e.top+e.height/2,o=Math.atan2(t.y-r-a,t.x-n-i),s=Math.atan2(t.y-a,t.x-i)-o;s=Math.atan2(Math.sin(s),Math.cos(s)),this.cam.roll(s,t.pivot)}else this.cam.pan(n,r)};endDrag(e,t){let n=this.drag;if(n&&e.pointerId===n.pointer){this.drag=null;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}if(this.updateCursor(),this.refine=!0,this.lastLow=performance.now(),n.mode===`sculpt`){let e=this.model.endStroke();this.invalidate(),e!=null&&this.onEdit?.(e)}else n.mode===`light`?this.invalidate():t&&n.moved<Oy&&n.button===0&&this.click(e)}}onUp=e=>this.endDrag(e,!0);onCancel=e=>this.endDrag(e,!1);onWheel=e=>{e.preventDefault();let t=e.deltaMode===1?16:e.deltaMode===2?this.height||600:1,n=this.model.hasModel()?this.pick(e,this.model.pickTargets()):null;this.cam.zoom(e.deltaY*t,n?n.point:null),this.lastWheel=performance.now()};click(e){if(this.sectionPick)this.sectionClick(e);else if(this.model.suggestTarget()!=null&&this.model.mode===`upload`){let t=this.pick(e,this.model.marginTargets());if(!t)return;let n=t.face?t.face.normal.clone().transformDirection(t.object.matrixWorld):void 0;this.model.suggestAt(t.point,t.object.userData.kind,n,t.point.clone().sub(this.cam.camera.position)),this.invalidate()}else if(this.model.marginTarget()!=null&&this.model.mode===`upload`){let t=!1,n=this.model.marginFirstPoint();if(n){n.project(this.cam.camera);let r=this.canvas.getBoundingClientRect(),i=r.left+(n.x+1)/2*r.width,a=r.top+(1-n.y)/2*r.height;t=n.z<1&&Math.hypot(e.clientX-i,e.clientY-a)<ky}let r=this.pick(e,this.model.marginTargets());if(!r)return;this.model.addMarginPoint(r.point,r.object.userData.kind,t)}else if(this.placing!=null&&this.model.mode===`upload`){let t=this.pick(e,this.model.scanTargets());if(!t||!t.face)return;let n=t.face.normal.clone().transformDirection(t.object.matrixWorld),r=t.point.clone().sub(this.cam.camera.position),i=this.placing;if(!this.model.place(i,t.point,n,t.object.userData.kind,r))return;this.placing=null,this.updateCursor(),this.invalidate(),this.onPlaced?.(i)}else if(this.tool===`medir`){let t=this.pick(e,this.model.pickTargets());if(!t)return;let n=this.model.addMeasurePoint(t.point);n!=null&&(this.label.textContent=n.toFixed(2).replace(`.`,`,`)+` mm`),this.invalidate(),this.onMeasure?.(n)}}clear(){this.model.clear(),(this.section||this.sectionPick)&&(this.section=null,this.sectionPick=null,this.emitSection()),this.placing=null,this.updateCursor(),this.invalidate()}loadSample(){this.model.loadSample(),this.placing=null,this.updateCursor(),this.overview()}async loadScan(e,t,n){if(this.disposed)throw Error(`O visualizador 3D já foi encerrado.`);let r=await this.model.loadScan(e,t,n);return this.overview(),r}hasModel(){return this.model.hasModel()}available(e){return this.model.available(e)}isPrepared(e){return this.model.isPrepared(e)}overview(){this.cam.goal=this.model.overviewGoal(),this.invalidate()}focus(e,t){let n=this.model.focusGoal(e,t);n&&(this.cam.goal=n,this.invalidate())}analyze(){return this.model.analyze()}setPlanHighlight(e){this.model.setPlanHighlight(e),this.invalidate()}setPlacing(e){e!=null&&this.model.cancelMargin(),this.placing=e,this.updateCursor()}startMargin(e){this.placing=null,this.model.startMargin(e),this.updateCursor(),this.invalidate()}suggestMargin(e){this.placing=null,this.model.suggestMargin(e),this.updateCursor(),this.invalidate()}undoMarginPoint(){return this.model.undoMarginPoint()}finishMargin(){let e=this.model.finishMargin();return this.updateCursor(),this.invalidate(),e}cancelMargin(){this.model.cancelMargin(),this.updateCursor(),this.invalidate()}marginTarget(){return this.model.marginTarget()}marginState(e){return this.model.marginState(e)}marginReport(e){return this.model.marginReport(e)}getMargin(e){return this.model.getMargin(e)}setMargin(e,t){let n=this.model.setMargin(e,t);return this.updateCursor(),this.invalidate(),n}generate(e,t,n,r){let i=this.model.generate(e,t,n,r);return this.invalidate(),i}generateError(e){return this.model.generateError(e)}setToothLibrary(e){return this.model.setToothLibrary(e)}listToothCollections(){return this.model.listToothCollections()}setPieceShape(e,t){this.model.setPieceShape(e,t),this.invalidate()}getPieceShape(e){return this.model.getPieceShape(e)}toothThumbnail(...e){return this.model.toothThumbnail(...e)}pieceThumbnail(...e){return this.model.pieceThumbnail(...e)}pieceWarnings(e){return this.model.pieceWarnings(e)}check(e){return this.model.check(e)}removePiece(e){this.model.removePiece(e),this.invalidate()}setActive(e){this.model.setActive(e),this.invalidate()}setTool(e){this.tool=e,this.updateCursor(),e!==`medir`&&(this.model.clearMeasure(),this.invalidate(),this.onMeasure?.(null))}setLayers(e){this.model.setLayers(e),e.malha!==void 0&&(this.wire=e.malha),this.invalidate()}setWireframe(e){this.wire=e,this.invalidate()}listObjects(){return this.model.listObjects()}setObjectVisible(e,t){this.model.setObjectVisible(e,t),this.invalidate()}setObjectOpacity(e,t){this.model.setObjectOpacity(e,t),this.invalidate()}undo(){let e=this.model.undo();return e&&this.invalidate(),e}canUndo(){return this.model.canUndo()}exportFiles(e){return this.model.exportFiles(e)}};function Ny(){if(typeof document>`u`)throw Error(`O visualizador 3D precisa de um navegador.`);return new My}export{n as MIN_MARGIN_POINTS,Ny as createViewer,s as defaultLayers,a as defaultParams};