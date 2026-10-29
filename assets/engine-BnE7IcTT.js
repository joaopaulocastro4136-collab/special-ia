import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,V as h,a as g,b as _,d as v,j as y,k as b,m as x,w as S,x as C,y as w,z as T}from"./embutida-registro-8p8wGjAH.js";import{m as E}from"./unzip-CXohLwpf.js";import{r as D,t as O}from"./io-ImVmFttS.js";import{A as k,D as A,E as j,H as M,J as N,M as P,P as F,S as I,T as ee,Y as L,_ as R,b as te,g as ne,h as re,it as z,j as B,nt as V,q as H,rt as ie,tt as ae,v as oe,x as U,y as se}from"./index-DTzuJyJp.js";import{n as W,r as ce,t as le}from"./preview-DkClgfYb.js";import{a as ue,c as de,i as fe,l as G,n as pe,o as me,r as he,s as K,t as ge,u as q}from"./separar-BcIBdnzX.js";import{$ as J,$t as Y,An as _e,B as ve,Bn as ye,C as X,D as be,Dn as xe,E as Se,En as Ce,F as we,Fn as Te,G as Ee,Gn as De,H as Oe,Hn as ke,In as Ae,J as je,K as Me,L as Ne,Ln as Pe,M as Fe,Mn as Ie,N as Le,Nn as Re,O as ze,On as Be,P as Ve,Pn as He,Q as Ue,Qt as We,R as Ge,Rn as Ke,S as qe,Sn as Je,T as Ye,Tn as Xe,U as Ze,Un as Qe,V as $e,Vn as et,W as tt,Wn as nt,X as rt,Xt as it,Y as at,Yt as ot,Z as st,Zt as ct,_ as lt,_n as ut,a as dt,at as ft,b as pt,bn as mt,c as ht,cn as gt,ct as _t,d as vt,dn as yt,dt as bt,et as xt,f as St,ft as Ct,g as wt,gn as Tt,h as Et,hn as Dt,i as Ot,it as kt,j as At,jn as jt,k as Z,kn as Q,l as Mt,ln as Nt,lt as Pt,m as Ft,mn as It,mt as Lt,n as Rt,nn as zt,nt as Bt,o as Vt,ot as Ht,p as Ut,pn as Wt,q as Gt,rn as Kt,rt as qt,s as Jt,st as Yt,t as Xt,tn as Zt,tt as Qt,un as $t,ut as en,v as tn,vn as nn,vt as rn,w as an,wn as on,x as sn,y as cn,yn as ln,yt as un,z as dn,zn as fn}from"./MeshBVH-CfLyM2cc.js";import"./embutida-CD06q8Uu.js";function pn(e,t,n,r){let i=fe(e,n?{occlusal:n}:{}),a=i.candidates.map(n=>U(e,n.center,i.occlusal,t)),o,s=r?r(e,i.candidates.map(e=>e.center),t,i.occlusal,a,e=>{o=e}):a;return o?{result:i,fdi:s,dentes:o}:{result:i,fdi:s}}function mn(e,t){return new Promise((n,r)=>{let i=!1,a=e=>{i||(i=!0,e())},o=()=>{try{let r=pn(P({positions:e.positions,indices:e.indices}),e.arch,e.occlusal,t);a(()=>n(r))}catch(e){a(()=>r(e instanceof Error?e:Error(String(e))))}};if(typeof Worker>`u`)return o();let s;try{s=new Worker(new URL(new URL(`find.worker-D7IMfCa9.js`,import.meta.url).href,``+import.meta.url),{type:`module`})}catch{return o()}let c=setTimeout(()=>{s.terminate(),o()},hn);s.onmessage=e=>{clearTimeout(c),s.terminate();let t=e.data;t.ok?a(()=>n(t.dentes?{result:t.result,fdi:t.fdi,dentes:t.dentes}:{result:t.result,fdi:t.fdi})):o()},s.onerror=()=>{clearTimeout(c),s.terminate(),o()};let l=e.positions.slice(),u=e.indices.slice();try{s.postMessage({positions:l,indices:u,occlusal:e.occlusal,arch:e.arch},[l.buffer,u.buffer])}catch{clearTimeout(c),s.terminate(),o()}})}var hn=12e4;function gn(e,t,n,r,i){let a=F(e,n),o=e=>k(F(e,[t[0]*A(e,t),t[1]*A(e,t),t[2]*A(e,t)])),s=o(a),c=o(ee(t,s));return A(c,r)<0&&(c=[-c[0],-c[1],-c[2]]),{buccal:s,mesial:c,arch:i}}function _n(e,t){let n=A(e,t.buccal),r=A(e,t.mesial),i=t.arch===`U`?`palatina`:`lingual`;return Math.abs(n)>Math.abs(r)*1.8?n>0?`vestibular`:i:Math.abs(r)>Math.abs(n)*1.8?r>0?`mesial`:`distal`:(r>0?`mesio`:`disto`)+`-`+(n>0?`vestibular`:i)}var vn={"pouco-definida":`margem pouco definida`,vizinho:`margem encostada no dente vizinho`,"sem-parede":`sem parede de preparo reconhecível`};function yn(e,t){let n=e.samples.length,r=[];for(let i of e.confidence.weak){let e=(i.to-i.from+n)%n+1,a=t?`na `+_n(i.direction,t):`num trecho de ${Math.round(100*e/n)}% do contorno`;r.push(`${vn[i.reason]} ${a}`)}return r}function bn(e){let t=[];for(let n of e.confidence.reasons)/se cruza/.test(n)?t.push(`O contorno se cruza: a leitura não serve como está.`):/Área do contorno/.test(n)?t.push(`O contorno tem um tamanho que não parece de um preparo.`):/fora do contorno/.test(n)?t.push(`O ponto clicado não está dentro do contorno encontrado.`):/parede axial/.test(n)?t.push(`Parte do contorno não tem parede de preparo: este dente pode não estar preparado.`):/degrau/.test(n)&&t.push(`A linha tem pequenos saltos neste trecho.`);return t}function xn(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Sn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Cn={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},$={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},wn={basic:{uniforms:ke([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Cn.meshbasic_vert,fragmentShader:Cn.meshbasic_frag},lambert:{uniforms:ke([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Cn.meshlambert_vert,fragmentShader:Cn.meshlambert_frag},phong:{uniforms:ke([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Cn.meshphong_vert,fragmentShader:Cn.meshphong_frag},standard:{uniforms:ke([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Cn.meshphysical_vert,fragmentShader:Cn.meshphysical_frag},toon:{uniforms:ke([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Cn.meshtoon_vert,fragmentShader:Cn.meshtoon_frag},matcap:{uniforms:ke([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Cn.meshmatcap_vert,fragmentShader:Cn.meshmatcap_frag},points:{uniforms:ke([$.points,$.fog]),vertexShader:Cn.points_vert,fragmentShader:Cn.points_frag},dashed:{uniforms:ke([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Cn.linedashed_vert,fragmentShader:Cn.linedashed_frag},depth:{uniforms:ke([$.common,$.displacementmap]),vertexShader:Cn.depth_vert,fragmentShader:Cn.depth_frag},normal:{uniforms:ke([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Cn.meshnormal_vert,fragmentShader:Cn.meshnormal_frag},sprite:{uniforms:ke([$.sprite,$.fog]),vertexShader:Cn.sprite_vert,fragmentShader:Cn.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Cn.background_vert,fragmentShader:Cn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:Cn.backgroundCube_vert,fragmentShader:Cn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Cn.cube_vert,fragmentShader:Cn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Cn.equirect_vert,fragmentShader:Cn.equirect_frag},distance:{uniforms:ke([$.common,$.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Cn.distance_vert,fragmentShader:Cn.distance_frag},shadow:{uniforms:ke([$.lights,$.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Cn.shadow_vert,fragmentShader:Cn.shadow_frag}};wn.physical={uniforms:ke([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Cn.meshphysical_vert,fragmentShader:Cn.meshphysical_frag};var Tn={r:0,b:0,g:0},En=new st,Dn=new rt;Dn.set(-1,0,0,0,1,0,0,0,1);function On(e,t,n,r,i,a){let o=new Ut(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ue(new Jt(1,1,1),new yt({name:`BackgroundCubeMaterial`,uniforms:Te(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(En.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dn),l.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Nt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ue(new en(2,2),new yt({name:`BackgroundMaterial`,uniforms:Te(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Nt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Tn,ye(e)),n.buffers.color.setClear(Tn.r,Tn.g,Tn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function kn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function An(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(nt(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&nt(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Mn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Pt,s=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Nn=4,Pn=6,Fn=20,In=256,Ln=new Yt,Rn=new Ut,zn=null,Bn=0,Vn=0,Hn=!1,Un=new Q,Wn=new Q,Gn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Un}=i;zn=this._renderer.getRenderTarget(),Bn=this._renderer.getActiveCubeFace(),Vn=this._renderer.getActiveMipmapLevel(),Hn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zn,Bn,Vn),this._renderer.xr.enabled=Hn,e.scissorTest=!1,Jn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zn=this._renderer.getRenderTarget(),Bn=this._renderer.getActiveCubeFace(),Vn=this._renderer.getActiveMipmapLevel(),Hn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:Fe,format:rn,colorSpace:Gt,depthBuffer:!1},r=qn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kn(r)),this._blurMaterial=Xn(r,e,t),this._ggxMaterial=Yn(r,e,t)}return r}_compileMaterial(e){let t=new Ue(new Mt,e);this._renderer.compile(t,Ln)}_sceneToCubeUV(e,t,n,r,i){let a=new _t(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Rn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Jt,new J({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Rn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Jn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Jn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ln)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Nn?n-d+Nn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Jn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ln),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Jn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ln)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Jn(t,3*l*(r>this._lodMax-Nn?r-this._lodMax+Nn:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ln)}};function Kn(e){let t=[],n=[],r=e,i=e-Nn+1+Pn;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Wn.set(1,r,n):e===1?Wn.set(-n,1,-r):e===2?Wn.set(-n,r,1):e===3?Wn.set(-1,r,-n):e===4?Wn.set(-n,-1,r):Wn.set(n,r,-1),Wn.toArray(l,(e*6+t)*3)}}let u=new Mt;u.setAttribute(`position`,new ht(c,3)),u.setAttribute(`outputDirection`,new ht(l,3)),n.push(new Ue(u,null)),r>Nn&&r--}return{lodMeshes:n,sizeLods:t}}function qn(e,t,n){let r=new Ie(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Jn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Yn(e,t,n){return new yt({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$n(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xn(e,t,n){return new yt({name:`SphericalGaussianBlur`,defines:{SAMPLES:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$n(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zn(){return new yt({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$n(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qn(){return new yt({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$n(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $n(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var er=class extends Ie{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jt(5,5,5),i=new yt({name:`CubemapFromEquirect`,uniforms:Te(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ue(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=tt),new Et(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function tr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new er(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Gn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Gn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function nr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&De(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?nn:ut)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ir(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ar(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ke(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function or(e,t,n){let r=new WeakMap,i=new _e;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=ze,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Be(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function lr(e,t,n,r,i,a){let o=new Ie(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Mt;l.setAttribute(`position`,new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new be([0,2,0,0,2,0],2));let u=new ct({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(l,u),f=new Yt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ie(t,n,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),c=new Ie(t,n,{type:Fe,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ft.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=cr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ur=new Dt,dr=new X(1,1),fr=new cn,pr=new tn,mr=new lt,hr=[],gr=[],_r=new Float32Array(16),vr=new Float32Array(9),yr=new Float32Array(4);function br(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=hr[i];if(a===void 0&&(a=new Float32Array(i),hr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function xr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Sr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Cr(e,t){let n=gr[t];n===void 0&&(n=new Int32Array(t),gr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function wr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Tr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xr(n,t))return;e.uniform2fv(this.addr,t),Sr(n,t)}}function Er(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xr(n,t))return;e.uniform3fv(this.addr,t),Sr(n,t)}}function Dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xr(n,t))return;e.uniform4fv(this.addr,t),Sr(n,t)}}function Or(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Sr(n,t)}else{if(xr(n,r))return;yr.set(r),e.uniformMatrix2fv(this.addr,!1,yr),Sr(n,r)}}function kr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Sr(n,t)}else{if(xr(n,r))return;vr.set(r),e.uniformMatrix3fv(this.addr,!1,vr),Sr(n,r)}}function Ar(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Sr(n,t)}else{if(xr(n,r))return;_r.set(r),e.uniformMatrix4fv(this.addr,!1,_r),Sr(n,r)}}function jr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xr(n,t))return;e.uniform2iv(this.addr,t),Sr(n,t)}}function Nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xr(n,t))return;e.uniform3iv(this.addr,t),Sr(n,t)}}function Pr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xr(n,t))return;e.uniform4iv(this.addr,t),Sr(n,t)}}function Fr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xr(n,t))return;e.uniform2uiv(this.addr,t),Sr(n,t)}}function Lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xr(n,t))return;e.uniform3uiv(this.addr,t),Sr(n,t)}}function Rr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xr(n,t))return;e.uniform4uiv(this.addr,t),Sr(n,t)}}function zr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(dr.compareFunction=n.isReversedDepthBuffer()?518:515,a=dr):a=ur,n.setTexture2D(t||a,i)}function Br(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||pr,i)}function Vr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||mr,i)}function Hr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fr,i)}function Ur(e){switch(e){case 5126:return wr;case 35664:return Tr;case 35665:return Er;case 35666:return Dr;case 35674:return Or;case 35675:return kr;case 35676:return Ar;case 5124:case 35670:return jr;case 35667:case 35671:return Mr;case 35668:case 35672:return Nr;case 35669:case 35673:return Pr;case 5125:return Fr;case 36294:return Ir;case 36295:return Lr;case 36296:return Rr;case 35678:case 36198:case 36298:case 36306:case 35682:return zr;case 35679:case 36299:case 36307:return Br;case 35680:case 36300:case 36308:case 36293:return Vr;case 36289:case 36303:case 36311:case 36292:return Hr}}function Wr(e,t){e.uniform1fv(this.addr,t)}function Gr(e,t){let n=br(t,this.size,2);e.uniform2fv(this.addr,n)}function Kr(e,t){let n=br(t,this.size,3);e.uniform3fv(this.addr,n)}function qr(e,t){let n=br(t,this.size,4);e.uniform4fv(this.addr,n)}function Jr(e,t){let n=br(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Yr(e,t){let n=br(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xr(e,t){let n=br(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zr(e,t){e.uniform1iv(this.addr,t)}function Qr(e,t){e.uniform2iv(this.addr,t)}function $r(e,t){e.uniform3iv(this.addr,t)}function ei(e,t){e.uniform4iv(this.addr,t)}function ti(e,t){e.uniform1uiv(this.addr,t)}function ni(e,t){e.uniform2uiv(this.addr,t)}function ri(e,t){e.uniform3uiv(this.addr,t)}function ii(e,t){e.uniform4uiv(this.addr,t)}function ai(e,t,n){let r=this.cache,i=t.length,a=Cr(n,i);xr(r,a)||(e.uniform1iv(this.addr,a),Sr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dr:ur;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function oi(e,t,n){let r=this.cache,i=t.length,a=Cr(n,i);xr(r,a)||(e.uniform1iv(this.addr,a),Sr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||pr,a[e])}function si(e,t,n){let r=this.cache,i=t.length,a=Cr(n,i);xr(r,a)||(e.uniform1iv(this.addr,a),Sr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||mr,a[e])}function ci(e,t,n){let r=this.cache,i=t.length,a=Cr(n,i);xr(r,a)||(e.uniform1iv(this.addr,a),Sr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||fr,a[e])}function li(e){switch(e){case 5126:return Wr;case 35664:return Gr;case 35665:return Kr;case 35666:return qr;case 35674:return Jr;case 35675:return Yr;case 35676:return Xr;case 5124:case 35670:return Zr;case 35667:case 35671:return Qr;case 35668:case 35672:return $r;case 35669:case 35673:return ei;case 5125:return ti;case 36294:return ni;case 36295:return ri;case 36296:return ii;case 35678:case 36198:case 36298:case 36306:case 35682:return ai;case 35679:case 36299:case 36307:return oi;case 35680:case 36300:case 36308:case 36293:return si;case 36289:case 36303:case 36311:case 36292:return ci}}var ui=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ur(t.type)}},di=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=li(t.type)}},fi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pi=/(\w+)(\])?(\[|\.)?/g;function mi(e,t){e.seq.push(t),e.map[t.id]=t}function hi(e,t,n){let r=e.name,i=r.length;for(pi.lastIndex=0;;){let a=pi.exec(r),o=pi.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mi(n,l===void 0?new ui(s,e,t):new di(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fi(s),mi(n,e)),n=e}}}var gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hi(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _i(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vi=37297,yi=0;function bi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xi=new rt;function Si(e){Ft._getMatrix(xi,Ft.workingColorSpace,e);let t=`mat3( ${xi.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(e)){case je:return[t,`LinearTransferOETF`];case Nt:return[t,`sRGBTransferOETF`];default:return nt(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ci(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bi(e.getShaderSource(t),r)}return i}function wi(e,t){let n=Si(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ti={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ei(e,t){let n=Ti[t];return n===void 0?(nt(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Di=new Q;function Oi(){return Ft.getLuminanceCoefficients(Di),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Di.x.toFixed(4)}, ${Di.y.toFixed(4)}, ${Di.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ki(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mi).join(`
`)}function Ai(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ji(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mi(e){return e!==``}function Ni(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fi=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ii(e){return e.replace(Fi,Ri)}var Li=new Map;function Ri(e,t){let n=Cn[t];if(n===void 0){let e=Li.get(t);if(e!==void 0)n=Cn[e],nt(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ii(n)}var zi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bi(e){return e.replace(zi,Vi)}function Vi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Hi(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Ui={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Wi(e){return Ui[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Gi={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ki(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Gi[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var qi={302:`ENVMAP_MODE_REFRACTION`};function Ji(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:qi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Yi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Xi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Yi[e.combine]||`ENVMAP_BLENDING_NONE`}function Zi(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Qi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wi(n),l=Ki(n),u=Ji(n),d=Xi(n),f=Zi(n),p=ki(n),m=Ai(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mi).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mi).join(`
`),_.length>0&&(_+=`
`)):(g=[Hi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mi).join(`
`),_=[Hi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Cn.tonemapping_pars_fragment,n.toneMapping===0?``:Ei(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Cn.colorspace_pars_fragment,wi(`linearToOutputTexel`,n.outputColorSpace),Oi(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mi).join(`
`)),o=Ii(o),o=Ni(o,n),o=Pi(o,n),s=Ii(s),s=Ni(s,n),s=Pi(s,n),o=Bi(o),s=Bi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_i(i,i.VERTEX_SHADER,y),S=_i(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ci(i,x,`vertex`),n=Ci(i,S,`fragment`);Ke(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):nt(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new gi(i,h),T=ji(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vi)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var $i=0,ea=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ta(e),t.set(e,n)),n}},ta=class{constructor(e){this.id=$i++,this.code=e,this.usedTimes=0}};function na(e){return e===1030||e===37490||e===36285}function ra(e,t,n,r,i,a){let o=new Ge,s=new ea,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&nt(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wn[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,L=!!i.aoMap,R=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,re=!!i.displacementMap,z=!!i.emissiveMap,B=!!i.metalnessMap,V=!!i.roughnessMap,H=i.anisotropy>0,ie=i.clearcoat>0,ae=i.dispersion>0,oe=i.retroreflectivity>0,U=i.iridescence>0,se=i.sheen>0,W=i.transmission>0,ce=H&&!!i.anisotropyMap,le=ie&&!!i.clearcoatMap,ue=ie&&!!i.clearcoatNormalMap,de=ie&&!!i.clearcoatRoughnessMap,fe=U&&!!i.iridescenceMap,G=U&&!!i.iridescenceThicknessMap,pe=se&&!!i.sheenColorMap,me=se&&!!i.sheenRoughnessMap,he=!!i.specularMap,K=!!i.specularColorMap,ge=!!i.specularIntensityMap,q=W&&!!i.transmissionMap,J=W&&!!i.thicknessMap,Y=!!i.gradientMap,_e=!!i.alphaMap,ve=i.alphaTest>0,ye=!!i.alphaHash,X=!!i.extensions,be=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(be=e.toneMapping);let xe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:R,bumpMap:te,normalMap:ne,displacementMap:re,emissiveMap:z,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&na(i.normalMap.format),metalnessMap:B,roughnessMap:V,anisotropy:H,anisotropyMap:ce,clearcoat:ie,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:ae,retroreflection:oe,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:G,sheen:se,sheenColorMap:pe,sheenRoughnessMap:me,specularMap:he,specularColorMap:K,specularIntensityMap:ge,transmission:W,transmissionMap:q,thicknessMap:J,gradientMap:Y,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:_e,alphaTest:ve,alphaHash:ye,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:R&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:ne&&m(i.normalMap.channel),displacementMapUv:re&&m(i.displacementMap.channel),emissiveMapUv:z&&m(i.emissiveMap.channel),metalnessMapUv:B&&m(i.metalnessMap.channel),roughnessMapUv:V&&m(i.roughnessMap.channel),anisotropyMapUv:ce&&m(i.anisotropyMap.channel),clearcoatMapUv:le&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:G&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(i.sheenRoughnessMap.channel),specularMapUv:he&&m(i.specularMap.channel),specularColorMapUv:K&&m(i.specularColorMap.channel),specularIntensityMapUv:ge&&m(i.specularIntensityMap.channel),transmissionMapUv:q&&m(i.transmissionMap.channel),thicknessMapUv:J&&m(i.thicknessMap.channel),alphaMapUv:_e&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ne||H),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||_e),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:be,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Ft.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:z&&i.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:X&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(X&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=wn[t];n=ln.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Qi(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ia(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function aa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function oa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||aa),r.length>1&&r.sort(t||oa),i.length>1&&i.sort(t||oa)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ca(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new sa,e.set(t,[i])):n>=r.length?(i=new sa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function la(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Q,color:new Ut};break;case`SpotLight`:n={position:new Q,direction:new Q,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Q,color:new Ut,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Q,skyColor:new Ut,groundColor:new Ut};break;case`RectAreaLight`:n={color:new Ut,position:new Q,halfWidth:new Q,halfHeight:new Q}}return e[t.id]=n,n}}}function ua(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var da=0;function fa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function pa(e){let t=new la,n=ua(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Q);let i=new Q,a=new st,o=new st;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(fa);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=da++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ma(e){let t=new pa(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ha(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ma(e),t.set(n,[a])):r>=i.length?(a=new ma(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ga=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_a=`uniform sampler2D shadow_pass;
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
}`,va=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],ya=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],ba=new st,xa=new Q,Sa=new Q;function Ca(e,t,n){let r=new Z,i=new Be,a=new Be,o=new _e,s=new xt,c=new Qt,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ga,fragmentShader:_a}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute(`position`,new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ue(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(nt(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){nt(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){nt(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ie(i.x,i.y,{format:ot,type:Fe,minFilter:tt,magFilter:tt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new X(i.x,i.y,ze),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=sn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt}else l.isPointLight?(d.map=new er(i.x),d.map.depthTexture=new wt(i.x,on)):(d.map=new Ie(i.x,i.y),d.map.depthTexture=new X(i.x,i.y,on)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=sn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=tt,d.map.depthTexture.magFilter=tt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=kt,d.map.depthTexture.magFilter=kt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),xa.setFromMatrixPosition(l.matrixWorld),e.position.copy(xa),Sa.copy(e.position),Sa.add(va[t]),e.up.copy(ya[t]),e.lookAt(Sa),e.updateMatrixWorld(),n.makeTranslation(-xa.x,-xa.y,-xa.z),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ie(i.x,i.y,{format:ot,type:Fe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function wa(e,t){function n(){let t=!1,n=new _e,r=null,i=new _e(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Kt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Ut(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),te=new _e().fromArray(L),ne=new _e().fromArray(R);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let z={};z[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),ce(!1),le(1),B(e.CULL_FACE),se(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function H(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ie(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ae(t){return h!==t&&(e.useProgram(t),h=t,!0)}let oe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};oe[103]=e.MIN,oe[104]=e.MAX;let U={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function se(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(B(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ke(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ke(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ke(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ke(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(oe[n],oe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(U[r],U[i],U[o],U[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function W(t,n){t.side===2?V(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ce(r),t.blending===1&&t.transparent===!1?se(0):se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),de(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function le(t){t===0?V(e.CULL_FACE):(B(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ue(t){t!==k&&(N&&e.lineWidth(t),k=t)}function de(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function fe(t){t?B(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function G(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function pe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||z[t]),i.type=t,i.texture=n)}function me(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function K(){try{e.compressedTexImage3D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function ge(){try{e.texSubImage2D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function q(){try{e.texSubImage3D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function ve(){try{e.texStorage2D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function ye(){try{e.texStorage3D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function X(){try{e.texImage2D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function be(){try{e.texImage3D(...arguments)}catch(e){Ke(`WebGLState:`,e)}}function xe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Se(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ce(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function we(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Te(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ee(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function De(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Ut(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:V,bindFramebuffer:H,drawBuffers:ie,useProgram:ae,setBlending:se,setMaterial:W,setFlipSided:ce,setCullFace:le,setLineWidth:ue,setPolygonOffset:de,setScissorTest:fe,activeTexture:G,bindTexture:pe,unbindTexture:me,compressedTexImage2D:he,compressedTexImage3D:K,texImage2D:X,texImage3D:be,pixelStorei:Se,getParameter:xe,updateUBOMapping:Te,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:ye,texSubImage2D:ge,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:Y,scissor:Ce,viewport:we,reset:De}}function Ta(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Pe(`canvas`)}function g(e,t,n){let r=1,i=he(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),nt(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&nt(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];nt(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||nt(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?je:Ft.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,nt(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&nt(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)nt(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)nt(`WebGLRenderer: Texture marked for update but image is incomplete`);else{V(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?H(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let L={[zt]:e.REPEAT,[St]:e.CLAMP_TO_EDGE,[qt]:e.MIRRORED_REPEAT},R={[kt]:e.NEAREST,[Ht]:e.NEAREST_MIPMAP_NEAREST,[ft]:e.NEAREST_MIPMAP_LINEAR,[tt]:e.LINEAR,[Me]:e.LINEAR_MIPMAP_NEAREST,[Ee]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ne(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&nt(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,L[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,L[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,L[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,R[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,R[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function re(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function z(e,t,n){return Math.floor(Math.floor(e/n)/t)}function B(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=z(n.start,r.width,4),c=z(t.start,r.width,4);n.start<=i+1&&a===c&&z(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function V(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=re(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ft.getPrimaries(Ft.workingColorSpace),r=o.colorSpace===``?null:Ft.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=me(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ne(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===qe,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&B(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=fn(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=fn(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=he(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=he(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function H(t,o,s){if(o.image.length!==6)return;let c=re(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ft.getPrimaries(Ft.workingColorSpace),r=o.colorSpace===``?null:Ft.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=me(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ne(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?nt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=he(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function oe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function U(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)oe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?oe(i.__webglFramebuffer[0],t,0):oe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ae(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ae(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,i){let a=r.get(t);n!==void 0&&ie(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&U(t)}function W(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&G(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ae(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ie(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ie(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ne(c,a),ie(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ne(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ie(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ie(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&U(t)}function ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let le=[],ue=[];function de(t){if(t.samples>0){if(G(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(le.length=0,ue.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(le.push(l),ue.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function fe(e){return Math.min(i.maxSamples,e.samples)}function G(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ft.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&nt(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ke(`WebGLTextures: Unsupported texture color space:`,n)),t}function he(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=ee,this.rebindTextures=se,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=G,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ea(e,t){function n(n,r=``){let i,a=Ft.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Da=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oa=`
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

}`,ka=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Se(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Da,fragmentShader:Oa,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Aa=class extends Ye{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ka,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Be,C=null,w=null,T=new _t;T.viewport=new _e;let E=new _t;E.viewport=new _e;let D=[T,E],O=new Ot,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Re,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Re,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Re,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&nt(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&nt(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?qe:sn,a=_.stencil?Je:on);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ie(d.textureWidth,d.textureHeight,{format:rn,type:mt,depthTexture:new X(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ie(f.framebufferWidth,f.framebufferHeight,{format:rn,type:mt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Q,F=new Q;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),L(e,O,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let R=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new _t,o.layers.enable(n),o.viewport=new _e,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Se,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new xn;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},ja=new st,Ma=new rt;Ma.set(-1,0,0,0,1,0,0,0,1);function Na(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ye(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ja.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ma),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Pa(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ke(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?nt(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):nt(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Fa=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ia=null;function La(){return Ia===null&&(Ia=new pt(Fa,16,16,ot,Fe),Ia.name=`DFG_LUT`,Ia.minFilter=tt,Ia.magFilter=tt,Ia.wrapS=St,Ia.wrapT=St,Ia.generateMipmaps=!1,Ia.needsUpdate=!0),Ia}var Ra=class{constructor(e={}){let{canvas:t=Ae(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([un,it,Zt]),g=new Set([mt,on,xe,Je,Xe,Ce]),_=new Uint32Array(4),v=new Int32Array(4),y=new Q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=gt;let j=0,M=0,N=null,P=-1,F=null,I=new _e,ee=new _e,L=null,R=new Ut(0),te=0,ne=t.width,re=t.height,z=1,B=null,V=null,H=new _e(0,0,ne,re),ie=new _e(0,0,ne,re),ae=!1,oe=new Z,U=!1,se=!1,W=new st,ce=new Q,le=new _e,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return N===null?z:1}let G=n;function pe(e,n){return t.getContext(e,n)}let me,he,K,ge,q,J,Y,ve,ye,X,be,Se,we,Te,De,Oe,ke,je,Me,Ne,Pe,Le,Re;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),G===null){let t=`webgl2`;if(G=pe(t,e),G===null)throw pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Ke(`WebGLRenderer: `+e.message),e}function ze(){me=new nr(G),me.init(),Pe=new Ea(G,me),he=new jn(G,me,e,Pe),K=new wa(G,me),he.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),O=G.createFramebuffer(),k=G.createFramebuffer(),A=G.createFramebuffer(),ge=new ar(G),q=new ia,J=new Ta(G,me,K,q,he,Pe,ge),Y=new tr(T),ve=new Sn(G),Le=new kn(G,ve),ye=new rr(G,ve,ge,Le),X=new sr(G,ye,ve,Le,ge),je=new or(G,he,J),De=new Mn(q),be=new ra(T,Y,me,he,Le,De),Se=new Na(T,q),we=new ca,Te=new ha(me),ke=new On(T,Y,K,X,p,s),Oe=new Ca(T,X,he),Re=new Pa(G,ge,he,K),Me=new An(G,me,ge),Ne=new ir(G,me,ge),ge.programs=be.programs,T.capabilities=he,T.extensions=me,T.properties=q,T.renderLists=we,T.shadowMap=Oe,T.state=K,T.info=ge}m!==1009&&(w=new lr(m,t.width,t.height,o,r,i));let Be=new Aa(T,G);this.xr=Be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(e){e!==void 0&&(z=e,this.setSize(ne,re,!1))},this.getSize=function(e){return e.set(ne,re)},this.setSize=function(e,n,r=!0){Be.isPresenting?nt(`WebGLRenderer: Can't change size while VR device is presenting.`):(ne=e,re=n,t.width=Math.floor(e*z),t.height=Math.floor(n*z),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ne*z,re*z).floor()},this.setDrawingBufferSize=function(e,n,r){ne=e,re=n,z=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Ke(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){nt(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(H)},this.setViewport=function(e,t,n,r){e.isVector4?H.set(e.x,e.y,e.z,e.w):H.set(e,t,n,r),K.viewport(I.copy(H).multiplyScalar(z).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),K.scissor(ee.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){K.setScissorTest(ae=e)},this.setOpaqueSort=function(e){B=e},this.setTransparentSort=function(e){V=e},this.getClearColor=function(e){return e.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=ke.getClearColor(),r=ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,G.clearBufferuiv(G.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,G.clearBufferiv(G.COLOR,0,v))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),ke.dispose(),we.dispose(),Te.dispose(),q.dispose(),Y.dispose(),X.dispose(),Le.dispose(),Re.dispose(),be.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,tt),Be.removeEventListener(`sessionend`,rt),at.stop()};function Ve(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),E=!0}function He(){et(`WebGLRenderer: Context Restored.`),E=!1;let e=ge.autoReset,t=Oe.enabled,n=Oe.autoUpdate,r=Oe.needsUpdate,i=Oe.type;ze(),ge.autoReset=e,Oe.enabled=t,Oe.autoUpdate=n,Oe.needsUpdate=r,Oe.type=i}function Ue(e){Ke(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){qe(e),q.remove(e)}function qe(e){let t=q.get(e).programs;t!==void 0&&(t.forEach(function(e){be.releaseProgram(e)}),e.isShaderMaterial&&be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=vt(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ye.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=ve.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*fe()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ve.get(c).bytesPerElement:1,o=q.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),U===!0&&De.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ft(e,t,r),e.side=0,e.needsUpdate=!0,ft(e,t,r),e.side=2):ft(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Te.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),se=this.localClippingEnabled,U=De.init(this.clippingPlanes,se),U===!0&&De.setGlobalState(this.clippingPlanes,t),D!==null&&Oe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Ye(o,n,t,e),r.add(o)}else Ye(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=q.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function $e(e){Ze&&Ze(e)}function tt(){at.stop()}function rt(){at.start()}let at=new xn;at.setAnimationLoop($e),typeof self<`u`&&at.setContext(self),this.setAnimationLoop=function(e){Ze=e,Be.setAnimationLoop(e),e===null?at.stop():at.start()},Be.addEventListener(`sessionstart`,tt),Be.addEventListener(`sessionend`,rt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ke(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Te.get(e,C.length),x.init(t),x.state.textureUnits=J.getTextureUnits(),C.push(x),W.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),oe.setFromProjectionMatrix(W,jt,t.reversedDepth),se=this.localClippingEnabled,U=De.init(this.clippingPlanes,se),b=we.get(e,S.length),b.init(),S.push(b),Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ot(e,t,-1/0,T.sortObjects)}ot(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(B,V),de=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,de&&ke.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),U===!0&&De.beginShadows();let i=x.state.shadowsArray;if(Oe.render(i,e,t),U===!0&&De.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];lt(n,r,e,a)}de&&ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ct(b,e,n,n.viewport)}}else r.length>0&&lt(n,r,e,t),de&&ke.render(e),ct(b,e,t)}N!==null&&M===0&&(J.updateMultisampleRenderTarget(N),J.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],J.setTextureUnits(x.state.textureUnits),U===!0&&De.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ot(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(oe)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(W);let i=X.update(e),a=e.material;a.visible&&b.push(e,i,a,n,le.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(oe))){let i=X.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(W)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,le.z,s,t)}}else a.visible&&b.push(e,i,a,n,le.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ot(i[e],t,n,r)}function ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),U===!0&&De.setGlobalState(T.clippingPlanes,n),r&&K.viewport(I.copy(r)),i.length>0&&ut(i,t,n),a.length>0&&ut(a,t,n),o.length>0&&ut(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function lt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=me.has(`EXT_color_buffer_half_float`)||me.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ie(1,1,{generateMipmaps:!0,type:e?Fe:mt,minFilter:Ee,samples:Math.max(4,he.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(R),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),de&&ke.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),U===!0&&De.setGlobalState(T.clippingPlanes,r),ut(e,n,r),J.updateMultisampleRenderTarget(a),J.updateRenderTargetMipmap(a),me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(J.updateMultisampleRenderTarget(a),J.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(R,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ut(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&dt(o,t,n,s,l,c)}}function dt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ft(e,t,n){t.isScene!==!0&&(t=ue);let r=q.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=be.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Y.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ht(e,s),d}else s.uniforms=be.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=De.uniform),ht(e,s),r.needsLights=bt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function pt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gi.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ht(e,t){let n=q.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function _t(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function vt(e,t,n,r,i){t.isScene!==!0&&(t=ue),J.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ft.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Y.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=q.get(r),y=x.state.lights;if(U===!0&&(se===!0||e!==F)){let t=e===F&&r.id===P;De.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==De.numPlanes||v.numIntersection!==De.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ft(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(K.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=_t(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(G,`projectionMatrix`,e.projectionMatrix),O.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(G,ce.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&O.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(G,`sunShadowMap`,y.state.sunShadowMap,J),y.state.directionalShadowMap.length>0&&O.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,J),y.state.spotShadowMap.length>0&&O.setValue(G,`spotShadowMap`,y.state.spotShadowMap,J),y.state.pointShadowMap.length>0&&O.setValue(G,`pointShadowMap`,y.state.pointShadowMap,J)),i.isSkinnedMesh){O.setOptional(G,i,`bindMatrix`),O.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(G,`boneTexture`,e.boneTexture,J))}i.isBatchedMesh&&(O.setOptional(G,i,`batchingTexture`),O.setValue(G,`batchingTexture`,i._matricesTexture,J),O.setOptional(G,i,`batchingIdTexture`),O.setValue(G,`batchingIdTexture`,i._indirectTexture,J),O.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(G,`batchingColorTexture`,i._colorsTexture,J));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=La()),w){if(O.setValue(G,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&yt(k,E),a&&r.fog===!0&&Se.refreshFogUniforms(k,a),Se.refreshMaterialUniforms(k,r,z,re,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}gi.upload(G,pt(v),k,J)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gi.upload(G,pt(v),k,J),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(G,`center`,i.center),O.setValue(G,`modelViewMatrix`,i.modelViewMatrix),O.setValue(G,`normalMatrix`,i.normalMatrix),O.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,S),Re.bind(n,S)}}return S}function yt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function bt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=q.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),q.get(e.texture).__webglTexture=t,q.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=q.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=q.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),ee.copy(e.scissor),L=e.scissorTest,K.viewport(I),K.scissor(ee),K.setScissorTest(L),P=-1;return}if(o.__webglFramebuffer===void 0)J.setupRenderTarget(e);else if(o.__hasExternalTextures)J.rebindTextures(e,q.get(e.texture).__webglTexture,q.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&q.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);J.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=q.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&J.useMultisampledRTT(e)===!1?q.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),ee.copy(e.scissor),L=e.scissorTest}else I.copy(H).multiplyScalar(z).floor(),ee.copy(ie).multiplyScalar(z).floor(),L=ae;if(n!==0&&(r=O),K.bindFramebuffer(G.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(I),K.scissor(ee),K.setScissorTest(L),i){let r=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=q.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}P=-1};function xt(e){let t=q.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=he.textureFormatReadable(e.format),t.__typeReadable=he.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){K.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=xt(o);if(u.__formatReadable===!1){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Ke(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,Pe.convert(c),Pe.convert(l),a)}finally{let e=N===null?null:q.get(N).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){K.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let d=xt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,Pe.convert(l),Pe.convert(u),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let p=N===null?null:q.get(N).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,p);let m=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qe(G,m,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(f),G.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;J.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Pe.convert(t.format),_=Pe.convert(t.type),v;t.isData3DTexture?(J.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(J.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(J.setTexture2D(t,0),v=G.TEXTURE_2D),K.activeTexture(G.TEXTURE0),K.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(G.UNPACK_ROW_LENGTH),b=K.getParameter(G.UNPACK_IMAGE_HEIGHT),x=K.getParameter(G.UNPACK_SKIP_PIXELS),S=K.getParameter(G.UNPACK_SKIP_ROWS),C=K.getParameter(G.UNPACK_SKIP_IMAGES);K.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(G.UNPACK_SKIP_PIXELS,l),K.pixelStorei(G.UNPACK_SKIP_ROWS,u),K.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=q.get(e),r=q.get(t),h=q.get(n.__renderTarget),g=q.get(r.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||q.has(e)){let n=q.get(e),r=q.get(t);K.bindFramebuffer(G.READ_FRAMEBUFFER,k),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(G.UNPACK_ROW_LENGTH,y),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(G.UNPACK_SKIP_PIXELS,x),K.pixelStorei(G.UNPACK_SKIP_ROWS,S),K.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){q.get(e).__webglFramebuffer===void 0&&J.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?J.setTextureCube(e,0):e.isData3DTexture?J.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?J.setTexture2DArray(e,0):J.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,K.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}},za={Mesh:Ue.prototype.raycast,Line:dn.prototype.raycast,LineSegments:Ze.prototype.raycast,LineLoop:Oe.prototype.raycast,Points:bt.prototype.raycast,BatchedMesh:dt.prototype.raycast},Ba=new Ue,Va=[];function Ha(e,t){if(this.isBatchedMesh)Ua.call(this,e,t);else{let{geometry:n}=this;if(n.boundsTree)n.boundsTree.raycastObject3D(this,e,t);else{let n;if(this instanceof Ue)n=za.Mesh;else if(this instanceof Ze)n=za.LineSegments;else if(this instanceof Oe)n=za.LineLoop;else if(this instanceof dn)n=za.Line;else if(this instanceof bt)n=za.Points;else throw Error(`BVH: Fallback raycast function not found.`);n.call(this,e,t)}}}function Ua(e,t){if(this.boundsTrees){let n=this.boundsTrees,r=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,a=this.matrixWorld;Ba.material=this.material,Ba.geometry=this.geometry;let o=Ba.geometry.boundsTree,s=Ba.geometry.drawRange;Ba.geometry.boundingSphere===null&&(Ba.geometry.boundingSphere=new Wt);for(let o=0,s=r.length;o<s;o++){if(!this.getVisibleAt(o))continue;let s=r[o].geometryIndex;if(Ba.geometry.boundsTree=n[s],this.getMatrixAt(o,Ba.matrixWorld).premultiply(a),!Ba.geometry.boundsTree){this.getBoundingBoxAt(s,Ba.geometry.boundingBox),this.getBoundingSphereAt(s,Ba.geometry.boundingSphere);let e=i[s];Ba.geometry.setDrawRange(e.start,e.count)}Ba.raycast(e,Va);for(let e=0,n=Va.length;e<n;e++){let n=Va[e];n.object=this,n.batchId=o,t.push(n)}Va.length=0}Ba.geometry.boundsTree=o,Ba.geometry.drawRange=s,Ba.material=null,Ba.geometry=null}else za.BatchedMesh.call(this,e,t)}function Wa(e={}){let{type:t=Xt}=e;return this.boundsTree=new t(this,e),this.boundsTree}function Ga(){this.boundsTree=null}var Ka=.5,qa=16,Ja=1<<27,Ya=768,Xa=2e4,Za=8,Qa={ao:!1,cavity:!1,outline:!1,smoothEdges:!1,scale:1},$a=Math.hypot(30,40,21),eo=30/$a,to=40/$a,no=21/$a,ro=Math.hypot(-.62,-.3,.72),io=-.62/ro,ao=-.3/ro,oo=.72/ro,so=Math.hypot(io,ao,oo+1),co=io/so,lo=ao/so,uo=(oo+1)/so,fo=Math.hypot(eo,to,no+1);eo/fo,to/fo,(no+1)/fo;var po=.1,mo=.12,ho=.7,go=.1,_o=.08,vo=1.6,yo=40,bo=8,xo=3,So=10,Co=2.5,wo=.85,To=.35,Eo=.3,Do=.45,Oo=.14,ko=.38,Ao=.4,jo=[28,42,61],Mo=.62,No={mode:0,keyX:eo,keyY:to,keyZ:no,key:ho,fill:go,ambLow:po,ambUp:mo,head:_o,wrap:0,specScale:1,aoRadius:vo,aoGain:xo,aoAmbient:wo,aoKey:To,cavRadius:.09,cavScale:Eo,cavDark:Do,cavLight:Oo,outline:ko,shadow:0,shadowLength:3,exposure:1,contrast:0,curvFull:2.5,zebra:14,backDim:.5,classes:[null,null,null,null,null]},Po=new Float32Array(12290);for(let e=0;e<Po.length;e++){let t=(e<<6)+32;Po[e]=t>9e3?1/Math.sqrt(t):0}var Fo=new Float32Array(256);for(let e=0;e<256;e++)Fo[e]=(e/64)**(1/2.2);var Io=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;Io[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}var Lo=4096,Ro=1.6,zo=4095/Ro;function Bo(e){let t=new Uint8Array(Lo),n=e<-1?-1:e>1?1:e;for(let e=0;e<Lo;e++){let r=e/4095*Ro;r>.8&&(r=.8+.2*(1-Math.exp(-(r-.8)/.2)));let i=r<=.0031308?12.92*r:1.055*r**(1/2.4)-.055;n>0?i+=(i*i*(3-2*i)-i)*n*1.6:n<0&&(i+=(.5-i)*-n*.6),t[e]=Math.round(255*(i<0?0:i>1?1:i))}return t}var Vo=Bo(0),Ho=new Float32Array(768);{let e=[[0,29,63,168],[.25,63,143,224],[.5,217,217,212],[.75,242,154,58],[1,198,34,28]];for(let t=0;t<256;t++){let n=t/255,r=0;for(;r<e.length-2&&n>e[r+1][0];)r++;let i=e[r],a=e[r+1],o=(n-i[0])/(a[0]-i[0]);for(let e=0;e<3;e++)Ho[t*3+e]=Io[Math.round(i[e+1]+(a[e+1]-i[e+1])*o)]}}var Uo=new Float32Array(256);{let e=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let t=0;t<16;t++){let n=e[t]/16*Math.PI*2;for(let r=0;r<bo;r++){let i=Math.sqrt((r+.5+e[t]/16-.5)/bo),a=r*2.399963+n;Uo[(t*bo+r)*2]=Math.cos(a)*i,Uo[(t*bo+r)*2+1]=Math.sin(a)*i}}}function Wo(e,t){let n=new Float32Array(e.length);for(let r=0;r+2<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;n[i]+=p,n[i+1]+=m,n[i+2]+=h,n[a]+=p,n[a+1]+=m,n[a+2]+=h,n[o]+=p,n[o+1]+=m,n[o+2]+=h}for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2])||1;n[e]/=t,n[e+1]/=t,n[e+2]/=t}return n}var Go=class{width=0;height=0;depth=new Float32Array;beginLayer(e){e.linearize(),this.begin(e.width,e.height,e.fx/e.hw,e.fy/(e.fullH/2),e.rowOff,e.fullH),this.setClip(e.clipPlane);let t=e.depth,n=this.depth;for(let e=0;e<n.length;e++){let r=t[e];n[e]=r>0?1/r:0}this.rowMin.set(e.rowMin),this.rowMax.set(e.rowMax)}compositeOnto(e,t){let n=this.width,r=n*this.height,i=this.alb,a=this.nrm,o=this.out,s=e.out;if(s.length!==o.length)return;let c=t<0?0:t>1?1:t;for(let e=0;e<r;e++){if(i[e]===0)continue;let t=a[e],l=(t&1023)-512,u=(t>>>10&1023)-512,d=(t>>>20&1023)-512,f=d>0?d/Math.sqrt(l*l+u*u+d*d):0;f=1-f;let p=c+(1-c)*Ao*f*f,m=e%n;(m>0&&i[e-1]===0||m<n-1&&i[e+1]===0||e>=n&&i[e-n]===0||e+n<r&&i[e+n]===0)&&(p*=.5);let h=e*4,g=s[h+3]/255*(1-p),_=p+g;s[h]=(o[h]*p+s[h]*g)/_,s[h+1]=(o[h+1]*p+s[h+1]*g)/_,s[h+2]=(o[h+2]*p+s[h+2]*g)/_,s[h+3]=_*255}}rowMin=new Int32Array;rowMax=new Int32Array;rowOff=0;fullH=0;ef=new Uint8Array;nrm=new Uint32Array;alb=new Uint32Array;wire=new Uint8Array;aux=new Uint8Array;hasAux=!1;ao=new Uint8Array;aoTmp=new Uint16Array;aoKeyR=-1;aoKeyG=-1;sh=new Uint8Array;hasShadow=!1;clipPlane=null;cA0=0;cAx=0;cAy=0;cD=0;out=new Uint8ClampedArray;out32=new Uint32Array;linear=!1;hasWire=!1;hasAO=!1;edges=[];hw=0;hh=0;fx=1;fy=1;SX=new Int32Array(1024);SY=new Int32Array(1024);IW=new Float32Array(1024);NX=new Float32Array(1024);NY=new Float32Array(1024);NZ=new Float32Array(1024);CR=new Uint8Array(3072);FL=new Uint8Array(1024);nv=0;extraV=0;extraI=[];AX=new Uint8Array(1024);gour=!1;VF=new Float32Array(4096);VB=new Float32Array(4096);STP=new Int32Array(1024);BST=new Int32Array(1024);stamp=0;lk=null;gMesh=null;gAux=null;gCurv=null;gId=0;gLut=-1;gWrap=0;gFres=0;gAlb=[0,0,0];gEm=[0,0,0];gM=new Float64Array(12);lazy=!1;cur=null;curAlb=0;curBack=0;curColored=!1;curAux=!1;matKeys=[];matEmis=new Float32Array(768);matSpec=new Float32Array(65536);matCls=new Uint8Array(256);matSide=new Uint8Array(256);matGour=new Uint8Array(256);prepLook=null;prepMats=-1;pSpec=new Float32Array;pLut=new Int32Array(256);pLuts=new Float32Array;pWrap=new Float32Array(256);pFres=new Float32Array(256);pDim=new Float32Array(256);pTone=Vo;pToneC=0;preview=new Uint8ClampedArray;previewWidth=0;previewHeight=0;begin(e,t,n,r,i=0,a=t){e=Math.max(1,e|0),t=Math.max(1,t|0);let o=e*t;this.width!==e||this.height!==t||this.depth.length!==o?(this.width=e,this.height=t,this.depth=new Float32Array(o),this.nrm=new Uint32Array(o),this.alb=new Uint32Array(o),this.out=new Uint8ClampedArray(o*4),this.out32=new Uint32Array(this.out.buffer),this.wire.length&&(this.wire=new Uint8Array(o)),this.aux.length&&(this.aux=new Uint8Array(o)),this.rowMin=new Int32Array(t),this.rowMax=new Int32Array(t)):(this.depth.fill(0),this.alb.fill(0),this.hasWire&&this.wire.fill(0),this.hasAux&&this.aux.fill(0)),this.rowMin.fill(e),this.rowMax.fill(-1),this.rowOff=i,this.fullH=a,this.hw=e/2,this.hh=a/2-i,this.fx=n*this.hw,this.fy=a/2*r,this.linear=!1,this.hasWire=!1,this.hasAO=!1,this.hasAux=!1,this.hasShadow=!1,this.aoKeyR=-1,this.clipPlane=null,this.prepMats=-1,this.matKeys.length=0,this.edges.length=0,this.cur=null}setClip(e){this.clipPlane=e&&e.length>=4?[e[0],e[1],e[2],e[3]]:null;let t=this.clipPlane;t&&(this.cAx=t[0]/this.fx,this.cAy=-t[1]/this.fy,this.cA0=t[0]*(.5-this.hw)/this.fx-t[1]*(.5-this.hh)/this.fy-t[2],this.cD=t[3])}setLook(e){this.lk=e}material(e,t,n=0,r=0,i=0){let a=Math.max(.2,Math.min(1,Math.round(t*20)/20)),o=(((e*32+Math.round(a*20))*8+n)*4+r)*2+i,s=this.matKeys.indexOf(o);if(s>=0)return s+1;if(this.matKeys.length>=255)return 255;s=this.matKeys.length,this.matKeys.push(o);let c=s+1;this.matCls[c]=n,this.matSide[c]=r,this.matGour[c]=i,this.matEmis[c*3]=Io[e>>16&255],this.matEmis[c*3+1]=Io[e>>8&255],this.matEmis[c*3+2]=Io[e&255];let l=8/(a*a),u=Math.min(.3,.05*(l+8)/8*ho),d=this.matSpec,f=c*256;for(let e=0;e<256;e++){let t=u*(e/255)**l;d[f+e]=t>1e-5?t:0}return c}reserve(e){if(this.SX.length>=e)return;let t=this.SX.length;for(;t<e;)t*=2;let n=e=>{let n=new Int32Array(t);return n.set(e),n},r=e=>{let n=new Float32Array(t);return n.set(e),n};this.SX=n(this.SX),this.SY=n(this.SY),this.IW=r(this.IW),this.NX=r(this.NX),this.NY=r(this.NY),this.NZ=r(this.NZ);let i=new Uint8Array(t);i.set(this.FL),this.FL=i;let a=new Uint8Array(t*3);a.set(this.CR),this.CR=a;let o=new Uint8Array(t);o.set(this.AX),this.AX=o;let s=new Float32Array(t*4);s.set(this.VF),this.VF=s;let c=new Float32Array(t*4);c.set(this.VB),this.VB=c;let l=new Int32Array(t);l.set(this.STP),this.STP=l;let u=new Int32Array(t);u.set(this.BST),this.BST=u}setMatrix(e){let t=this.gM;t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t[9]=e[12],t[10]=e[13],t[11]=e[14]}setMeshLit(e,t){this.setMatrix(e.modelView),this.gour=!0,this.gMesh=e,this.stamp++,this.curColored=!1,this.curAux=!1;let n=(e.cls??0)%5,r=e.emissive??0,i=e.roughness??.5,a=this.material(r,i,n,0,1),o=e.color;if(this.curAlb=o>>16&255|o&65280|(o&255)<<16|a<<24,this.curAlb>>>=0,this.curBack=this.curAlb,this.prepare(this.lk),this.gId=a,this.gLut=this.pLut[a],this.gWrap=this.pWrap[a],this.gFres=this.pFres[a],this.gAlb[0]=Io[o>>16&255],this.gAlb[1]=Io[o>>8&255],this.gAlb[2]=Io[o&255],this.gEm[0]=this.matEmis[a*3],this.gEm[1]=this.matEmis[a*3+1],this.gEm[2]=this.matEmis[a*3+2],this.gAux=e.aux&&e.aux.length>=t?e.aux:null,this.gCurv=e.curv&&e.curv.length>=t?e.curv:null,this.lH.length===0||this.lHLook!==this.lk){let e=this.lk,t=Math.hypot(e.keyX,e.keyY,e.keyZ+1)||1;this.lH=[e.keyX/t,e.keyY/t,(e.keyZ+1)/t],this.lHLook=this.lk}}lH=[];lHLook=null;vert(e){let t=this.gMesh,n=t.positions,r=t.normals,i=this.gM,a=e*3,o=n[a],s=n[a+1],c=n[a+2],l=-(i[2]*o+i[5]*s+i[8]*c+i[11]);this.STP[e]=this.stamp,this.VF[e*4+3]=this.gCurv?this.gCurv[e]+.5:128.5;let u=r[a],d=r[a+1],f=r[a+2],p=i[0]*u+i[3]*d+i[6]*f,m=i[1]*u+i[4]*d+i[7]*f,h=i[2]*u+i[5]*d+i[8]*f,g=p*p+m*m+h*h;if(g>0){let t=1/Math.sqrt(g);this.NX[e]=p*t,this.NY[e]=m*t,this.NZ[e]=h*t}else this.NX[e]=0,this.NY[e]=0,this.NZ[e]=1;if(l>.5){let t=1/l,n=Math.round((this.hw+this.fx*(i[0]*o+i[3]*s+i[6]*c+i[9])*t)*qa),r=Math.round((this.hh-this.fy*(i[1]*o+i[4]*s+i[7]*c+i[10])*t)*qa);n>Ja?n=Ja:n<-134217728&&(n=-134217728),r>Ja?r=Ja:r<-134217728&&(r=-134217728),this.SX[e]=n,this.SY[e]=r,this.IW[e]=t,this.FL[e]=0,this.lightVert(e,!1)}else this.FL[e]=1}vertP(e){let t=this.gMesh,n=t.positions,r=t.normals,i=this.gM,a=e*3,o=n[a],s=n[a+1],c=n[a+2],l=-(i[2]*o+i[5]*s+i[8]*c+i[11]);this.STP[e]=this.stamp;let u=r[a],d=r[a+1],f=r[a+2],p=i[0]*u+i[3]*d+i[6]*f,m=i[1]*u+i[4]*d+i[7]*f,h=i[2]*u+i[5]*d+i[8]*f,g=p*p+m*m+h*h;if(g>0){let t=1/Math.sqrt(g);this.NX[e]=p*t,this.NY[e]=m*t,this.NZ[e]=h*t}else this.NX[e]=0,this.NY[e]=0,this.NZ[e]=1;if(l>.5){let t=1/l,n=Math.round((this.hw+this.fx*(i[0]*o+i[3]*s+i[6]*c+i[9])*t)*qa),r=Math.round((this.hh-this.fy*(i[1]*o+i[4]*s+i[7]*c+i[10])*t)*qa);n>Ja?n=Ja:n<-134217728&&(n=-134217728),r>Ja?r=Ja:r<-134217728&&(r=-134217728),this.SX[e]=n,this.SY[e]=r,this.IW[e]=t,this.FL[e]=0}else this.FL[e]=1}lightVert(e,t){let n=this.lk,r=this.gId,i=n.exposure,a=this.lH,o=this.NX[e],s=this.NY[e],c=this.NZ[e];t&&(o=-o,s=-s,c=-c),c<0&&(c=-c);let l=o*n.keyX+s*n.keyY+c*n.keyZ,u=this.gWrap;u>0&&(l=(l+u)/(1+u)),l<0&&(l=0);let d=o*io+s*ao+c*oo;d<0&&(d=0);let f=(n.ambLow+n.ambUp*(.5+.5*s)+n.fill*d+n.head*c+n.key*l)*i,p=this.pSpec,m=o*a[0]+s*a[1]+c*a[2],h=0;if(m>0){let e=m<.9999?m*255:254.97,t=e|0,n=r*256+t,i=p[n];h=i+(p[n+1]-i)*(e-t)}let g,_,v,y=this.gLut,b=this.pLuts,x=this.gAux,S=y<0?0:y+(x?x[e]<<2:0);y<0?(g=this.gAlb[0]*f,_=this.gAlb[1]*f,v=this.gAlb[2]*f):(g=b[S]*f,_=b[S+1]*f,v=b[S+2]*f,h*=b[S+3]);let C=this.gFres;if(C>0){let e=1-c,t=e*e*e*C*i;g+=t,_+=t,v+=t*1.06;let n=o*co+s*lo+c*uo;if(n>.5){let e=n<.9999?n*255:254.97,t=e|0,i=r*256+t,a=p[i];h+=(a+(p[i+1]-a)*(e-t))*.4*(y<0?1:b[S+3])}}h*=i,g+=h+this.gEm[0],_+=h+this.gEm[1],v+=h+this.gEm[2];let w=this.pTone,T=e*4,E=t?this.VB:this.VF,D=g*zo|0,O=_*zo|0,k=v*zo|0;D>4095&&(D=4095),O>4095&&(O=4095),k>4095&&(k=4095),E[T]=w[D]+.5,E[T+1]=w[O]+.5,E[T+2]=w[k]+.5,E[T+3]=this.VF[T+3],t&&(this.BST[e]=this.stamp)}setMesh(e){let t=e.positions,n=e.normals,r=Math.floor(t.length/3);if(this.reserve(r+64),this.cur=e,this.nv=r,this.extraV=0,this.extraI.length=0,this.gour=!1,this.lazy=!1,e.vlit===!0&&this.lk!==null&&this.lk.mode===0&&!this.clipPlane&&!e.wire&&n.length>=r*3&&!(e.colors&&e.colors.length>=r*3)){this.setMeshLit(e,r);return}this.lazy=e.ranges!=null&&r>Xa&&n.length>=r*3,this.lazy&&(this.setMatrix(e.modelView),this.gMesh=e,this.stamp++);let i=e.modelView,a=this.hw,o=this.hh,s=this.fx,c=this.fy,l=i[0],u=i[1],d=i[2],f=i[4],p=i[5],m=i[6],h=i[8],g=i[9],_=i[10],v=i[12],y=i[13],b=i[14],x=this.SX,S=this.SY,C=this.IW,w=this.NX,T=this.NY,E=this.NZ,D=this.FL,O=n.length>=r*3;for(let e=0,i=0;!this.lazy&&e<r;e++,i+=3){let r=t[i],k=t[i+1],A=t[i+2],j=-(d*r+m*k+_*A+b);if(j>.5){let t=1/j,n=Math.round((a+s*(l*r+f*k+h*A+v)*t)*qa),i=Math.round((o-c*(u*r+p*k+g*A+y)*t)*qa);n>Ja?n=Ja:n<-134217728&&(n=-134217728),i>Ja?i=Ja:i<-134217728&&(i=-134217728),x[e]=n,S[e]=i,C[e]=t,D[e]=0}else D[e]=1;if(O){let t=n[i],r=n[i+1],a=n[i+2],o=l*t+f*r+h*a,s=u*t+p*r+g*a,c=d*t+m*r+_*a,v=o*o+s*s+c*c;if(v>0){let t=1/Math.sqrt(v);w[e]=o*t,T[e]=s*t,E[e]=c*t}else w[e]=0,T[e]=0,E[e]=1}else w[e]=0,T[e]=0,E[e]=1}let k=e.colors&&e.colors.length>=r*3?e.colors:null;this.curColored=k!==null,k&&this.CR.set(k.subarray(0,r*3));let A=k?0:(e.cls??0)%5,j=e.emissive??0,M=e.roughness??.5,N=this.material(j,M,A,0),P=e.color,F=P>>16&255|P&65280|(P&255)<<16;this.curAlb=(F|N<<24)>>>0,this.curBack=this.clipPlane?(F|this.material(j,M,A,e.cull?2:1)<<24)>>>0:this.curAlb;let I=e.aux&&e.aux.length>=r?e.aux:null;this.curAux=I!==null,I&&(this.AX.set(I.subarray(0,r)),this.hasAux||=(this.aux.length===this.width*this.height?this.aux.fill(0):this.aux=new Uint8Array(this.width*this.height),!0)),e.wire&&(this.wire.length!==this.width*this.height&&(this.wire=new Uint8Array(this.width*this.height)),this.hasWire=!0)}get triangleCount(){return this.cur?Math.floor(this.cur.index.length/3):0}drawTriangles(e=0,t=this.triangleCount){let n=this.cur;if(!n||this.linear)return;let r=Math.min(t,this.triangleCount)*3;for(let t=e*3;t<r;t+=Ya)this.scan(n.index,t,t+Ya<r?t+Ya:r,!0);if(this.extraI.length){let e=this.extraI.slice();this.extraI.length=0,this.scan(e,0,e.length,!1),this.extraV=0}}clip(e,t,n){let r=this.cur,i=r.positions,a=r.modelView;this.reserve(this.nv+this.extraV+4);let o=this.SX,s=this.SY,c=this.IW,l=this.NX,u=this.NY,d=this.NZ,f=this.CR,p=this.FL,m=this.AX,h=[e,t,n],g=[0,0,0],_=[0,0,0],v=[0,0,0];for(let e=0;e<3;e++){let t=h[e]*3,n=i[t],r=i[t+1],o=i[t+2];g[e]=a[0]*n+a[4]*r+a[8]*o+a[12],_[e]=a[1]*n+a[5]*r+a[9]*o+a[13],v[e]=-(a[2]*n+a[6]*r+a[10]*o+a[14])}let y=[];for(let e=0;e<3;e++){let t=(e+1)%3,n=h[e],r=h[t],i=p[n]===0,a=p[r]===0;if(i&&y.push(n),i!==a){let n=i?e:t,r=i?t:e,a=h[n],b=h[r],x=(v[n]-Ka)/(v[n]-v[r]),S=this.nv+this.extraV++,C=g[n]+(g[r]-g[n])*x,w=_[n]+(_[r]-_[n])*x,T=1/Ka,E=Math.round((this.hw+this.fx*C*T)*qa),D=Math.round((this.hh-this.fy*w*T)*qa);if(E<=Ja?E<-134217728&&(E=-134217728):E=Ja,D<=Ja?D<-134217728&&(D=-134217728):D=Ja,o[S]=E,s[S]=D,c[S]=T,p[S]=0,l[S]=l[a]+(l[b]-l[a])*x,u[S]=u[a]+(u[b]-u[a])*x,d[S]=d[a]+(d[b]-d[a])*x,this.gour){let e=Math.sqrt(l[S]*l[S]+u[S]*u[S]+d[S]*d[S])||1;l[S]/=e,u[S]/=e,d[S]/=e,this.VF[S*4+3]=this.VF[a*4+3]+(this.VF[b*4+3]-this.VF[a*4+3])*x,this.STP[S]=this.stamp,this.BST[S]=0,this.lightVert(S,!1)}else this.lazy&&(this.STP[S]=this.stamp);if(this.curColored)for(let e=0;e<3;e++)f[S*3+e]=f[a*3+e]+(f[b*3+e]-f[a*3+e])*x;this.curAux&&(m[S]=m[a]+(m[b]-m[a])*x),y.push(S)}}for(let e=2;e<y.length;e++)this.extraI.push(y[0],y[e-1],y[e])}scan(e,t,n,r){let i=this.width,a=this.height,o=this.depth,s=this.nrm,c=this.alb,l=this.wire,u=this.aux,d=this.rowMin,f=this.rowMax,p=this.SX,m=this.SY,h=this.IW,g=this.NX,_=this.NY,v=this.NZ,y=this.CR,b=this.FL,x=this.AX,S=this.VF,C=this.VB,w=this.STP,T=this.BST,E=this.gour,D=this.stamp,O=this.lazy,k=this.clipPlane!==null,A=this.cA0,j=this.cAx,M=this.cAy,N=this.cD,P=this.cur.cull===!0&&!k,F=this.cur.wire===!0&&this.hasWire,I=this.curColored,ee=this.curAlb,L=this.curBack,R=this.hasAux,te=this.curAux,ne=this.hasWire,re=!I&&!te&&!F&&!k;for(let z=t;z+2<n;z+=3){let t=e[z],n=e[z+1],B=e[z+2];if(E?(w[t]!==D&&this.vert(t),w[n]!==D&&this.vert(n),w[B]!==D&&this.vert(B)):O&&(w[t]!==D&&this.vertP(t),w[n]!==D&&this.vertP(n),w[B]!==D&&this.vertP(B)),b[t]|b[n]|b[B]){r&&!(b[t]&b[n]&b[B])&&(this.clip(t,n,B),p=this.SX,m=this.SY,h=this.IW,g=this.NX,_=this.NY,v=this.NZ,y=this.CR,b=this.FL,x=this.AX,S=this.VF,C=this.VB,w=this.STP,T=this.BST);continue}let V=p[t],H=m[t],ie=p[n],ae=m[n],oe=p[B],U=m[B],se=(ie-V)*(U-H)-(ae-H)*(oe-V);if(se===0)continue;let W=1;if(se>0){if(P)continue;W=-1}else{let e=ie,t=ae,r=n;ie=oe,ae=U,n=B,oe=e,U=t,B=r,se=-se}let ce=V<ie?V:ie,le=V>ie?V:ie,ue=H<ae?H:ae,de=H>ae?H:ae;oe<ce?ce=oe:oe>le&&(le=oe),U<ue?ue=U:U>de&&(de=U);let fe=ce+7>>4,G=le-8>>4,pe=ue+7>>4,me=de-8>>4;if(fe<0&&(fe=0),pe<0&&(pe=0),G>=i&&(G=i-1),me>=a&&(me=a-1),fe>G||pe>me)continue;let he=ie-V,K=ae-H,ge=oe-ie,q=U-ae,J=V-oe,Y=H-U,_e=fe*qa+8,ve=pe*qa+8,ye=he*(ve-H)-K*(_e-V),X=ge*(ve-ae)-q*(_e-ie),be=J*(ve-U)-Y*(_e-oe),xe=K<0||K===0&&he>0?0:1,Se=q<0||q===0&&ge>0?0:1,Ce=Y<0||Y===0&&J>0?0:1,we=K*qa,Te=q*qa,Ee=Y*qa,De=he*qa,Oe=ge*qa,ke=J*qa,Ae=1/se,je=h[t],Me=h[n]-je,Ne=h[B]-je,Pe=W===1?ee:L;if(E){W===-1&&(T[t]!==D&&this.lightVert(t,!0),T[n]!==D&&this.lightVert(n,!0),T[B]!==D&&this.lightVert(B,!0));let e=W===1?S:C,r=t*4,a=n*4,l=B*4,u=e[r],p=e[r+1],m=e[r+2],h=e[r+3],g=e[a]-u,_=e[a+1]-p,v=e[a+2]-m,y=e[a+3]-h,b=e[l]-u,x=e[l+1]-p,w=e[l+2]-m,E=e[l+3]-h,O=-Ee*Ae,k=-we*Ae,A=ke*Ae,j=De*Ae,M=O*Me+k*Ne,N=A*Me+j*Ne,P=O*g+k*b,F=A*g+j*b,I=O*_+k*x,ee=A*_+j*x,L=O*v+k*w,R=A*v+j*w,te=O*y+k*E,ne=A*y+j*E,re=be*Ae,z=ye*Ae,V=je+re*Me+z*Ne,H=u+re*g+z*b,ie=p+re*_+z*x,ae=m+re*v+z*w,oe=h+re*y+z*E,U=G-fe;for(let e=pe;e<=me;e++){let t=0,n=U;if(we>0){let e=Math.floor((ye-xe)/we);e<n&&(n=e)}else if(we<0){let e=Math.ceil((ye-xe)/we);e>t&&(t=e)}else ye<xe&&(n=-1);if(Te>0){let e=Math.floor((X-Se)/Te);e<n&&(n=e)}else if(Te<0){let e=Math.ceil((X-Se)/Te);e>t&&(t=e)}else X<Se&&(n=-1);if(Ee>0){let e=Math.floor((be-Ce)/Ee);e<n&&(n=e)}else if(Ee<0){let e=Math.ceil((be-Ce)/Ee);e>t&&(t=e)}else be<Ce&&(n=-1);if(t<=n){let r=e*i+fe,a=V+M*t,l=H+P*t,u=ie+I*t,p=ae+L*t,m=oe+te*t;for(let e=r+t,i=r+n;e<=i;e++)a>o[e]&&(o[e]=a,s[e]=l|0|(u|0)<<8|(p|0)<<16|(m|0)<<24,c[e]=Pe),a+=M,l+=P,u+=I,p+=L,m+=te;fe+t<d[e]&&(d[e]=fe+t),fe+n>f[e]&&(f[e]=fe+n)}ye+=De,X+=Oe,be+=ke,V+=N,H+=F,ie+=ee,ae+=R,oe+=ne}continue}if(re){let e=511*W,r=g[t]*e+512,a=_[t]*e+512,p=v[t]*e+512,m=(g[n]-g[t])*e,h=(_[n]-_[t])*e,y=(v[n]-v[t])*e,b=(g[B]-g[t])*e,x=(_[B]-_[t])*e,S=(v[B]-v[t])*e,C=-Ee*Ae,w=-we*Ae,T=ke*Ae,E=De*Ae,D=C*Me+w*Ne,O=T*Me+E*Ne,k=C*m+w*b,A=T*m+E*b,j=C*h+w*x,M=T*h+E*x,N=C*y+w*S,P=T*y+E*S,F=be*Ae,I=ye*Ae,ee=je+F*Me+I*Ne,L=r+F*m+I*b,te=a+F*h+I*x,re=p+F*y+I*S,z=G-fe;for(let e=pe;e<=me;e++){let t=0,n=z;if(we>0){let e=Math.floor((ye-xe)/we);e<n&&(n=e)}else if(we<0){let e=Math.ceil((ye-xe)/we);e>t&&(t=e)}else ye<xe&&(n=-1);if(Te>0){let e=Math.floor((X-Se)/Te);e<n&&(n=e)}else if(Te<0){let e=Math.ceil((X-Se)/Te);e>t&&(t=e)}else X<Se&&(n=-1);if(Ee>0){let e=Math.floor((be-Ce)/Ee);e<n&&(n=e)}else if(Ee<0){let e=Math.ceil((be-Ce)/Ee);e>t&&(t=e)}else be<Ce&&(n=-1);if(t<=n){let r=e*i+fe,a=ee+D*t,p=L+k*t,m=te+j*t,h=re+N*t;for(let e=r+t,i=r+n;e<=i;e++)a>o[e]&&(o[e]=a,s[e]=p|0|(m|0)<<10|(h|0)<<20,c[e]=Pe,R&&(u[e]=0),ne&&(l[e]=0)),a+=D,p+=k,m+=j,h+=N;fe+t<d[e]&&(d[e]=fe+t),fe+n>f[e]&&(f[e]=fe+n)}ye+=De,X+=Oe,be+=ke,ee+=O,L+=A,te+=M,re+=P}continue}let Fe=g[t]*W,Ie=_[t]*W,Le=v[t]*W,Re=g[n]*W-Fe,ze=_[n]*W-Ie,Be=v[n]*W-Le,Ve=g[B]*W-Fe,He=_[B]*W-Ie,Ue=v[B]*W-Le,We=0,Ge=0,Ke=0;F&&(We=1/(qa*Math.sqrt(he*he+K*K)||1),Ge=1/(qa*Math.sqrt(ge*ge+q*q)||1),Ke=1/(qa*Math.sqrt(J*J+Y*Y)||1));let qe=t*3,Je=n*3,Ye=B*3,Xe=(Pe&4278190080)>>>0,Ze=x[t],Qe=x[n]-Ze,$e=x[B]-Ze;for(let e=pe;e<=me;e++){let t=A+M*e-j*e*i,n=ye,r=X,a=be,p=!1,m=-1,h=0,g=e*i;for(let e=g+fe,i=g+G;e<=i;e++){if(n>=xe&&r>=Se&&a>=Ce){p||(p=!0,m=e),h=e;let i=a*Ae,d=n*Ae,f=je+i*Me+d*Ne;if(f>o[e]&&(!k||t+j*e+N*f<=0)){if(o[e]=f,s[e]=(Fe+i*Re+d*Ve)*511+512|0|((Ie+i*ze+d*He)*511+512|0)<<10|((Le+i*Be+d*Ue)*511+512|0)<<20,I){let t=1-i-d;c[e]=(y[qe]*t+y[Je]*i+y[Ye]*d|0|(y[qe+1]*t+y[Je+1]*i+y[Ye+1]*d|0)<<8|(y[qe+2]*t+y[Je+2]*i+y[Ye+2]*d|0)<<16|Xe)>>>0}else c[e]=Pe;if(te?u[e]=Ze+i*Qe+d*$e:R&&(u[e]=0),F){let t=n*We,i=r*Ge,o=a*Ke;i<t&&(t=i),o<t&&(t=o),l[e]=t>=1.1?0:t<=.35?255:(1.1-t)*340|0}else ne&&(l[e]=0)}}else if(p)break;n-=we,r-=Te,a-=Ee}p&&(m-g<d[e]&&(d[e]=m-g),h-g>f[e]&&(f[e]=h-g)),ye+=De,X+=Oe,be+=ke}}}linearize(){if(this.linear)return;let e=this.depth,t=this.width,n=this.rowMin,r=this.rowMax;for(let i=0,a=this.height;i<a;i++)for(let a=i*t+n[i],o=i*t+r[i];a<=o;a++){let t=e[a];t>0&&(e[a]=1/t)}this.linear=!0;let i=this.clipPlane;if(!i)return;let a=this.alb,o=this.nrm,s=this.matSide,c=this.cA0,l=this.cAx,u=this.cAy,d=this.cD,f=i[2]<0?-1:1,p=(i[0]*f*511+512|0|(i[1]*f*511+512|0)<<10|(i[2]*f*511+512|0)<<20)>>>0;for(let n=0;n<e.length;n++){if(e[n]===0||s[a[n]>>>24]!==2)continue;let r=n%t,i=(n-r)/t,f=c+l*r+u*i,m=f===0?0:-d/f;m>.25&&m<=e[n]&&(e[n]=m),o[n]=p}}computeAO(e=0,t=this.height,n=No){this.linearize();let r=this.width+1>>1,i=this.height+1>>1;this.ao.length!==r*i&&(this.ao=new Uint8Array(r*i),this.aoTmp=new Uint16Array(r*i)),(this.aoKeyR!==n.aoRadius||this.aoKeyG!==n.aoGain)&&(this.hasAO=!1,this.aoKeyR=n.aoRadius,this.aoKeyG=n.aoGain);for(let a=e+1>>1,o=Math.min(i,t+1>>1);a<o;a++)this.aoRow(a,r,n.aoRadius,n.aoGain)}aoValid(e=No){return this.hasAO&&this.aoKeyR===e.aoRadius&&this.aoKeyG===e.aoGain}aoRow(e,t,n,r){let i=this.width,a=this.height,o=this.depth,s=this.nrm,c=this.ao,l=Uo,u=this.hw,d=this.hh,f=this.fy,p=1/this.fx,m=1/this.fy,h=e*2,g=-(h+.5-d)*m,_=(e&3)<<2;for(let v=0,y=h*i,b=e*t;v<t;v++,y+=2,b++){let e=o[y];if(!(e>0)){c[b]=255;continue}let t=n*f/e;if(t>yo&&(t=yo),t<2){c[b]=255;continue}let x=t*e/f,S=1/(x*x),C=.03*x,w=s[y],T=(w&1023)-512,E=(w>>>10&1023)-512,D=(w>>>20&1023)-512,O=1/Math.sqrt(T*T+E*E+D*D||1);T*=O,E*=O,D*=O;let k=v*2,A=(k+.5-u)*e*p,j=g*e,M=0;for(let n=(v&3|_)*bo*2,r=n+16;n<r;n+=2){let r=(k+l[n]*t+1024.5|0)-1024,s=(h+l[n+1]*t+1024.5|0)-1024;if(r<0||s<0||r>=i||s>=a)continue;let c=o[s*i+r];if(!(c>0))continue;let f=(r+.5-u)*c*p-A,g=-(s+.5-d)*c*m-j,_=e-c,v=(f*f+g*g+_*_)*S;if(v>=1||v===0)continue;let y=f*T+g*E+_*D-C;y>0&&(M+=y/(x*Math.sqrt(v))*(1-v))}let N=1-M*r/bo;c[b]=N<=0?0:N*255|0}}computeShadow(e,t=0,n=this.height){this.linearize();let r=this.width,i=this.height,a=r+1>>1,o=i+1>>1;this.sh.length!==a*o&&(this.sh=new Uint8Array(a*o)),this.aoTmp.length!==a*o&&(this.aoTmp=new Uint16Array(a*o)),this.hasShadow=!1;let s=this.depth,c=this.sh,l=this.fy,u=e.keyX,d=e.keyY,f=e.keyZ,p=e.shadowLength,m=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let e=t+1>>1,h=Math.min(o,n+1>>1);e<h;e++){let t=e*2;for(let n=0,o=t*r,h=e*a;n<a;n++,o+=2,h++){let a=s[o];if(!(a>0)){c[h]=255;continue}let g=n*2,_=l/a,v=(m[n&3|(e&3)<<2]+.5)/16,y=0;for(let e=0;e<So;e++){let n=(e+v)/So,o=p*n*(.35+.65*n),c=g+u*o*_+.5|0,l=t-d*o*_+.5|0;if(c<0||l<0||c>=r||l>=i)break;let m=s[l*r+c];if(!(m>0))continue;let h=a-f*o-m,b=.03+.06*o;if(h>b&&h<Co){let e=(h-b)/(.05+.1*o);if(e>=1){y=1;break}e>y&&(y=e)}}c[h]=(1-y)*255|0}}}blurShadow(){this.blurHalf(this.sh),this.hasShadow=!0}blurAO(){this.blurHalf(this.ao),this.hasAO=!0}blurHalf(e){let t=this.width+1>>1,n=this.height+1>>1,r=this.aoTmp;if(e.length===t*n&&r.length===t*n){for(let i=0;i<n;i++){let n=i*t;for(let i=0;i<t;i++){let a=i>=2?i-2:0,o=i>=1?i-1:0,s=i+1<t?i+1:t-1;r[n+i]=e[n+a]+e[n+o]+e[n+i]+e[n+s]}}for(let i=0;i<n;i++){let a=(i>=2?i-2:0)*t,o=(i>=1?i-1:0)*t,s=i*t,c=(i+1<n?i+1:n-1)*t;for(let n=0;n<t;n++)e[s+n]=r[a+n]+r[o+n]+r[s+n]+r[c+n]+8>>4}}}prepare(e){let t=this.matKeys.length;if(this.prepLook===e&&this.prepMats===t)return;this.prepLook=e,this.prepMats=t,this.pSpec.length!==65536&&(this.pSpec=new Float32Array(65536)),this.pLuts.length!==5120&&(this.pLuts=new Float32Array(5120));for(let t=0;t<5;t++){let n=e.classes[t]?.lut;n&&n.length>=1024&&this.pLuts.set(n.subarray(0,1024),t*1024)}let n=this.pSpec,r=this.matSpec;for(let i=1;i<=t;i++){let t=this.matCls[i],a=this.matSide[i],o=e.classes[t]??null,s=i*256;if(this.pLut[i]=o?.lut?t*1024:-1,this.pWrap[i]=o?o.wrap:e.wrap,this.pFres[i]=o?o.fresnel:0,this.pDim[i]=a===1?1-e.backDim:1,a===2){for(let e=0;e<256;e++)n[s+e]=0;continue}let c=o?.spec;if(c)for(let t=0;t<256;t++){let r=t/255,i=(c[0]*r**c[1]+c[2]*r**c[3])*e.specScale;n[s+t]=i>1e-5?i:0}else for(let t=0;t<256;t++)n[s+t]=r[s+t]*e.specScale}e.contrast===0?this.pTone=Vo:(this.pTone===Vo||this.pToneC!==e.contrast)&&(this.pTone=Bo(e.contrast),this.pToneC=e.contrast)}shade(e,t=0,n=this.height){this.linearize(),this.prepare(e.look??No);let r=this.width,i=this.height,a=this.rowMin,o=this.rowMax;this.out32.fill(0,t*r,n*r);let s=e.look??No,c=Math.max(1,Math.round(e.scale)),l=e.outline&&s.outline>0||e.smoothEdges;for(let s=t;s<n;s+=Za){let t=Math.min(n,s+Za),u=r,d=-1;for(let e=s>0?s-1:0,n=t<i?t:i-1;e<=n;e++)a[e]<u&&(u=a[e]),o[e]>d&&(d=o[e]);if(u>d)continue;u=u>0?u-1:0,d=d<r-1?d+1:r-1;let f=l?this.edgeFlags(s,t,c,u,d):null;for(let n=s;n<t;n++){let t=a[n],s=o[n];n>0&&(a[n-1]<t&&(t=a[n-1]),o[n-1]>s&&(s=o[n-1])),n<i-1&&(a[n+1]<t&&(t=a[n+1]),o[n+1]>s&&(s=o[n+1])),!(t>s)&&this.shadeRow(e,n,1,this.out32,n*r,t>0?t-1:0,s<r-1?s+1:r-1,f)}}}edgeFlags(e,t,n,r,i){let a=this.width,o=this.height,s=this.depth,c=1/this.fy,l=(a>>3)+1;this.ef.length<l&&(this.ef=new Uint8Array(l));let u=this.ef,d=e>=n?e-n:0,f=t+n<=o?t+n:o;for(let e=r>>3,t=i>>3;e<=t;e++){let t=e*Za-n>0?e*Za-n:0,r=e*Za+Za+n<a?e*Za+Za+n:a,i=1/0,o=0;for(let e=d;e<f;e++)for(let n=e*a+t,c=e*a+r;n<c;n++){let e=s[n];e<i&&(i=e),e>o&&(o=e)}u[e]=+(i>0&&o-i<=.25+6*i*c*n)}return u}shadePreview(e,t=2){this.linearize(),this.prepare(e.look??No);let n=Math.max(1,t|0),r=Math.ceil(this.width/n),i=Math.ceil(this.height/n);this.preview.length!==r*i*4&&(this.preview=new Uint8ClampedArray(r*i*4)),this.previewWidth=r,this.previewHeight=i;let a=new Uint32Array(this.preview.buffer),o={...e,smoothEdges:!1};for(let e=0,t=0;e<this.height;e+=n,t++)this.shadeRow(o,e,n,a,t*r,0,this.width-1,null)}shadeRow(e,t,n,r,i,a,o,s=null){let c=this.width,l=this.height,u=this.depth,d=this.nrm,f=this.alb,p=this.aux,m=e.look??No,h=m.mode,g=(c+1>>1)*(l+1>>1),_=e.ao&&this.hasAO&&this.ao.length===g&&(m.aoAmbient>0||m.aoKey>0),v=this.ao,y=this.wire,b=this.hasWire,x=e.shadow===!0&&this.hasShadow&&m.shadow>0&&this.sh.length===g,S=this.sh,C=m.shadow,w=e.outline&&m.outline>0,T=e.smoothEdges,E=this.edges,D=e.cavity&&(m.cavDark>0||m.cavLight>0)||h===1,O=this.matEmis,k=this.pSpec,A=1/this.fy,j=this.pTone,M=this.pLut,N=this.pLuts,P=this.pWrap,F=this.pFres,I=this.pDim,ee=this.matSide,L=this.hasAux,R=this.matGour,te=m.keyX,ne=m.keyY,re=m.keyZ,z=m.key,B=m.fill,V=m.ambLow,H=m.ambUp,ie=m.head,ae=Math.hypot(te,ne,re+1)||1,oe=te/ae,U=ne/ae,se=(re+1)/ae,W=m.aoAmbient,ce=m.aoKey,le=m.cavScale,ue=m.cavDark,de=m.cavLight,fe=m.cavRadius,G=m.outline,pe=m.exposure,me=127/(m.curvFull||1),he=m.zebra*.5,K=Math.max(1,Math.round(e.scale)),ge=K*c,q=Io[jo[0]],J=Io[jo[1]],Y=Io[jo[2]];{let e=t>0,m=t<l-1,g=t>=K,ae=t+K<l,_e=c+1>>1,ve=(t>>1)*_e,ye=t&1?t+2<l?_e:0:t>=2?-_e:0;i+=a;for(let _e=a,X=t*c+a;_e<=o;_e+=n,X+=n,i++){let n=f[X];if(n===0){r[i]=0,T&&(_e>0&&f[X-1]!==0||_e<c-1&&f[X+1]!==0||e&&f[X-c]!==0||m&&f[X+c]!==0)&&E.push(X);continue}if(R[n>>>24]===1){let e=d[X],t=u[X],n=1;if((w||T)&&(s===null||s[_e>>3]===0)){let e=.25+t*A*6*K,r=0,i=0,a=!1,o;if(_e>=K&&(o=u[X-K],o===0?a=!0:t-o>r?r=t-o:o-t>i&&(i=o-t)),_e+K<c&&(o=u[X+K],o===0?a=!0:t-o>r?r=t-o:o-t>i&&(i=o-t)),g&&(o=u[X-ge],o===0?a=!0:t-o>r?r=t-o:o-t>i&&(i=o-t)),ae&&(o=u[X+ge],o===0?a=!0:t-o>r?r=t-o:o-t>i&&(i=o-t)),T&&(a||r>e||i>e)&&E.push(X),w){let t=r>e?(r-e)/e:0;t>1&&(t=1),a&&t<.7&&(t=.7),n=1-G*t}}if(D){let t=((e>>>24)-128)*(le/32);n*=t<0?1+(t<-1?-1:t)*ue:1+(t>1?1:t)*de}let a=e&255,o=e>>>8&255,l=e>>>16&255;if(n!==1){let e=n*64+.5|0,t=Fo[e<255?e:255];a=a*t|0,o=o*t|0,l=l*t|0,a>255&&(a=255),o>255&&(o=255),l>255&&(l=255)}r[i]=(a|o<<8|l<<16|4278190080)>>>0;continue}let a=d[X],o=(a&1023)-512,be=(a>>>10&1023)-512,xe=(a>>>20&1023)-512;xe<0&&(xe=-xe);let Se=Po[o*o+be*be+xe*xe>>6],Ce=o*Se,we=be*Se,Te=Se===0?1:xe*Se,Ee=u[X],De=n>>>24,Oe=Ce*te+we*ne+Te*re,ke=P[De];ke>0&&(Oe=(Oe+ke)/(1+ke)),Oe<0&&(Oe=0);let Ae=Ce*io+we*ao+Te*oo;Ae<0&&(Ae=0);let je=V+H*(.5+.5*we)+B*Ae+ie*(Te>0?Te:0),Me=z*Oe,Ne=Ce*oe+we*U+Te*se,Pe=0;if(Ne>0){let e=Ne<.9999?Ne*255:254.97,t=e|0,n=De*256+t,r=k[n];Pe=r+(k[n+1]-r)*(e-t)}if(_||x){let e=ve+(_e>>1),t=_e&1?+(_e+2<c):_e>=2?-1:0;if(_){let n=1-(v[e]*9+v[e+t]*3+v[e+ye]*3+v[e+t+ye])*(1/4080),r=W*n,i=ce*n;je*=r<1?1-r:0,Me*=i<1?1-i:0,Pe*=1-n}if(x){let n=(1-(S[e]*9+S[e+t]*3+S[e+ye]*3+S[e+t+ye])*(1/4080))*C;Me*=1-n,Pe*=1-n}}let Fe=pe*I[De],Ie=0;if(w||T||D){let e=Ee*A;if((w||T)&&(s===null||s[_e>>3]===0)){let t=.25+6*e*K,n=0,r=0,i=!1,a;if(_e>=K&&(a=u[X-K],a===0?i=!0:Ee-a>n?n=Ee-a:a-Ee>r&&(r=a-Ee)),_e+K<c&&(a=u[X+K],a===0?i=!0:Ee-a>n?n=Ee-a:a-Ee>r&&(r=a-Ee)),g&&(a=u[X-ge],a===0?i=!0:Ee-a>n?n=Ee-a:a-Ee>r&&(r=a-Ee)),ae&&(a=u[X+ge],a===0?i=!0:Ee-a>n?n=Ee-a:a-Ee>r&&(r=a-Ee)),T&&(i||n>t||r>t)&&E.push(X),w){let e=n>t?(n-t)/t:0;e>1&&(e=1),i&&e<.7&&(e=.7),Fe*=1-G*e}}if(D){let n=fe/e+.5|0,r=K,i=(h===1?12:4)*K;n<r?n=r:n>i&&(n=i);let a=.15+3*n*e,s=o,p=o,m=be,g=be,_,v;if(_e>=n&&(_=X-n,v=u[_]-Ee,f[_]!==0&&v<a&&v>-a&&(s=(d[_]&1023)-512)),_e+n<c&&(_=X+n,v=u[_]-Ee,f[_]!==0&&v<a&&v>-a&&(p=(d[_]&1023)-512)),t>=n&&(_=X-n*c,v=u[_]-Ee,f[_]!==0&&v<a&&v>-a&&(m=(d[_]>>>10&1023)-512)),t+n<l&&(_=X+n*c,v=u[_]-Ee,f[_]!==0&&v<a&&v>-a&&(g=(d[_]>>>10&1023)-512)),Ie=(p-s+(m-g))/511/(2*n*e),h!==1){let e=Ie*le;Fe*=e<0?1+(e<-1?-1:e)*ue:1+(e>1?1:e)*de}}}let Le=De*3,Re,ze,Be;if(h===0){let e=(je+Me)*Fe,r=M[De];if(r<0)Re=Io[n&255]*e,ze=Io[n>>>8&255]*e,Be=Io[n>>>16&255]*e;else{let t=r+(L?p[X]<<2:0);Re=N[t]*e,ze=N[t+1]*e,Be=N[t+2]*e,Pe*=N[t+3]}if(ee[De]===2){let e=((_e+t)/(3*K)|0)&1?.78:1;Re*=e,ze*=e,Be*=e}let i=F[De];if(i>0){let e=1-Te,t=e*e*e*i*pe;Re+=t,ze+=t,Be+=t*1.06;let n=Ce*co+we*lo+Te*uo;if(n>.5){let e=n<.9999?n*255:254.97,t=e|0,i=De*256+t,a=k[i];Pe+=(a+(k[i+1]-a)*(e-t))*.4*(r<0?1:N[r+(L?p[X]<<2:0)+3])}}Pe*=pe,Re+=Pe+O[Le],ze+=Pe+O[Le+1],Be+=Pe+O[Le+2]}else if(h===1){let e=128+Ie*me+.5|0;e<0?e=0:e>255&&(e=255);let t=je+Me;t>1&&(t=1);let n=(.5+.5*t)*(Fe<pe?.5+Fe/pe*.5:1)*pe,r=e*3;Re=Ho[r]*n,ze=Ho[r+1]*n,Be=Ho[r+2]*n}else{let e=2*Te*we,t=2*Te*Ce,n=(e*.94+t*.34)*he+64,r=n-(n|0);r=r<.5?r*2:2-r*2;let i=.08,a=(r-.5+i)/(2*i);a<0?a=0:a>1&&(a=1);let o=je+Me;o>1.1&&(o=1.1);let s=(.05+.85*a)*(.55+.45*o)*Fe;Re=s,ze=s,Be=s*1.02}if(b){let e=y[X];if(e!==0){let t=e/255*Mo;Re+=(q-Re)*t,ze+=(J-ze)*t,Be+=(Y-Be)*t}}let Ve=Re*zo|0,He=ze*zo|0,Ue=Be*zo|0;r[i]=(j[Ve<Lo?Ve:4095]|j[He<Lo?He:4095]<<8|j[Ue<Lo?Ue:4095]<<16|4278190080)>>>0}}}finish(){let e=this.edges,t=e.length;if(!t)return;let n=this.width,r=this.height,i=this.out,a=new Uint32Array(t);for(let o=0;o<t;o++){let t=e[o],s=t%n,c=(t-s)/n,l=0,u=0,d=0,f=0,p=0;for(let e=-1;e<=1;e++){let t=c+e;if(!(t<0||t>=r))for(let r=-1;r<=1;r++){let a=s+r;if(a<0||a>=n)continue;let o=(r===0?2:1)*(e===0?2:1),c=(t*n+a)*4,m=i[c+3]*o;l+=i[c]*m,u+=i[c+1]*m,d+=i[c+2]*m,f+=m,p+=o}}a[o]=f>0?(Math.round(l/f)|Math.round(u/f)<<8|Math.round(d/f)<<16|Math.round(f/p)<<24)>>>0:0}let o=this.out32;for(let n=0;n<t;n++)o[e[n]]=a[n];e.length=0}resolve(e){this.linearize();let t=e.look??No;e.ao&&!this.aoValid(t)&&(this.computeAO(0,this.height,t),this.blurAO()),e.shadow&&t.shadow>0&&(this.computeShadow(t),this.blurShadow()),this.shade(e),e.smoothEdges&&this.finish()}normalAt(e,t){let n=t*this.width+e;if(!this.alb[n])return null;let r=this.nrm[n],i=(r&1023)-512,a=(r>>>10&1023)-512,o=(r>>>20&1023)-512,s=Math.hypot(i,a,o)||1;return[i/s,a/s,o/s]}covered(e,t){return this.alb[t*this.width+e]!==0}};function Ko(e,t,n,r){let i=t>>1,a=n>>1;for(let n=0;n<a;n++)for(let a=0;a<i;a++){let o=(n*2*t+a*2)*4,s=o+4,c=o+t*4,l=c+4,u=(n*i+a)*4,d=e[o+3],f=e[s+3],p=e[c+3],m=e[l+3],h=d+f+p+m;h===0?r[u]=r[u+1]=r[u+2]=r[u+3]=0:(r[u]=(e[o]*d+e[s]*f+e[c]*p+e[l]*m)/h,r[u+1]=(e[o+1]*d+e[s+1]*f+e[c+1]*p+e[l+1]*m)/h,r[u+2]=(e[o+2]*d+e[s+2]*f+e[c+2]*p+e[l+2]*m)/h,r[u+3]=h/4)}}var qo=[`padrao`,`gesso`,`preparo`,`curvatura`,`zebra`,`realista`],Jo=[`escuro`,`claro`,`gradiente`],Yo=[`BL`,`A1`,`A2`,`A3`,`B1`],Xo={BL:16052972,A1:15656143,A2:15325883,A3:14863779,B1:15657168},Zo={plaster:14275526,neutral:13618632,ivory:15261642,cervical:14800056,gum:13139066,incisal:12569302},Qo=Math.PI/180,$o=(e,t,n,r)=>{let i=typeof e==`number`&&Number.isFinite(e)?e:r;return i<t?t:i>n?n:i},es={lightElevation:[5,90,1],lightIntensity:[.3,2,.05],occlusion:[0,2,.05],edges:[0,2,.05],exposure:[-1,1,.05],contrast:[-1,1,.05],curvatureScale:[.25,4,.05]},ts={padrao:[Math.round(Math.atan2(No.keyY,No.keyX)/Qo),Math.round(Math.asin(No.keyZ)/Qo)],gesso:[60,40],preparo:[135,12],curvatura:[60,45],zebra:[90,60],realista:[60,35]},ns={padrao:[`Padrão`,`Equilibrada: luz presa à câmera, oclusão de ambiente e realce leve de sulcos.`],gesso:[`Gesso`,`Monocromática e fosca, com luz suave de estúdio. Para ler a forma.`],preparo:[`Preparo em evidência`,`Luz rasante com sombra projetada e realce de arestas. Para ler o término; gire a luz com Alt + arrastar.`],curvatura:[`Curvatura`,`Mapa de cores: convexo em tons quentes, côncavo em tons frios, plano em cinza.`],zebra:[`Zebra`,`Listras de reflexo: revelam irregularidades da superfície.`],realista:[`Realista`,`Gengiva, dentes e cerâmica caracterizados, com a cor da restauração por escala.`]};function rs(e){return{preset:e,lightAzimuth:ts[e][0],lightElevation:ts[e][1],lightIntensity:1,occlusion:1,edges:1,exposure:0,contrast:0,curvatureScale:1,background:`escuro`,shade:`A2`}}function is(){return qo.map(e=>({id:e,label:ns[e][0],description:ns[e][1],defaults:rs(e)}))}function as(e){let t=typeof e==`object`&&e?e:{},n=qo.includes(t.preset)?t.preset:`padrao`,r=rs(n),i=$o(t.lightAzimuth,-1e6,1e6,r.lightAzimuth)%360;return i<0&&(i+=360),{preset:n,lightAzimuth:i,lightElevation:$o(t.lightElevation,es.lightElevation[0],es.lightElevation[1],r.lightElevation),lightIntensity:$o(t.lightIntensity,es.lightIntensity[0],es.lightIntensity[1],1),occlusion:$o(t.occlusion,es.occlusion[0],es.occlusion[1],1),edges:$o(t.edges,es.edges[0],es.edges[1],1),exposure:$o(t.exposure,es.exposure[0],es.exposure[1],0),contrast:$o(t.contrast,es.contrast[0],es.contrast[1],0),curvatureScale:$o(t.curvatureScale,es.curvatureScale[0],es.curvatureScale[1],1),background:Jo.includes(t.background)?t.background:`escuro`,shade:Yo.includes(t.shade)?t.shade:`A2`}}var os=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},ss=e=>[os(e>>16&255),os(e>>8&255),os(e&255)],cs=(e,t,n)=>{let r=n<=e?0:n>=t?1:(n-e)/(t-e);return r*r*(3-2*r)};function ls(e,t=1){let n=ss(e),r=new Float32Array(1024);for(let e=0;e<256;e++)r[e*4]=n[0],r[e*4+1]=n[1],r[e*4+2]=n[2],r[e*4+3]=t;return r}function us(){let e=ss(Zo.ivory),t=ss(Zo.cervical),n=ss(Zo.gum),r=new Float32Array(1024);for(let i=0;i<256;i++){let a=i/255,o=cs(.05,.34,a),s=cs(.3,.62,a);for(let a=0;a<3;a++){let c=e[a]+(t[a]-e[a])*o;r[i*4+a]=c+(n[a]-c)*s}r[i*4+3]=.55+.45*s}return r}function ds(e){let t=Xo[e],n=ss(t),r=ss(Zo.incisal),i=new Float32Array(1024),a=[n[0]*.97,n[1]*.9,n[2]*.74];for(let e=0;e<256;e++){let t=e/255,o=1-cs(0,.42,t),s=cs(.55,1,t)*.42;for(let t=0;t<3;t++){let c=n[t]+(a[t]-n[t])*o;i[e*4+t]=c+(r[t]*.9-c)*s}i[e*4+3]=1}return i}var fs={lut:ls(Zo.plaster,1),spec:[.02,6,0,1],wrap:.25,fresnel:0},ps={lut:null,spec:[.03,8,0,1],wrap:.25,fresnel:0},ms={lut:ls(Zo.neutral,1),spec:[.03,10,.05,60],wrap:0,fresnel:0},hs={lut:us(),spec:[.035,10,.3,70],wrap:.2,fresnel:.03},gs={lut:ls(Zo.gum,1),spec:[.035,10,.3,70],wrap:.25,fresnel:.03},_s={lut:ls(Zo.ivory,.55),spec:[.035,10,.3,70],wrap:.2,fresnel:.03},vs=e=>({lut:ds(e),spec:[.08,12,.75,260],wrap:.32,fresnel:.12}),ys=(e,t,n,r)=>{let i=[null,null,null,null,null];return i[1]=e,i[2]=t,i[3]=n,i[4]=r,i},bs={padrao:()=>({}),gesso:()=>({key:.6,fill:.16,ambLow:.14,ambUp:.2,head:.06,wrap:.25,aoRadius:2.4,aoGain:3,aoAmbient:.9,aoKey:.3,cavScale:.25,cavDark:.35,cavLight:.08,outline:.3,classes:ys(fs,ps,fs,fs)}),preparo:()=>({key:1,fill:.03,ambLow:.08,ambUp:.09,head:.05,specScale:.5,shadow:.7,shadowLength:3,aoRadius:.6,aoGain:4,aoAmbient:1,aoKey:.45,cavRadius:.07,cavScale:.5,cavDark:.6,cavLight:.3,outline:.3,contrast:.2,classes:ys(ms,null,ms,ms)}),curvatura:()=>({mode:1,cavRadius:.12,key:.6,ambLow:.16,ambUp:.2,aoAmbient:.5,aoKey:.2,outline:.3}),zebra:()=>({mode:2,zebra:7,key:.5,ambLow:.2,ambUp:.2,aoAmbient:.4,aoKey:.1,outline:.3}),realista:e=>({key:.74,fill:.12,ambLow:.1,ambUp:.14,head:.1,cavScale:.25,cavDark:.4,cavLight:.06,outline:.3,classes:ys(hs,vs(e),gs,_s)})},xs=new Map;function Ss(e){let t=as(e),n=[t.preset,t.lightAzimuth,t.lightElevation,t.lightIntensity,t.occlusion,t.edges,t.exposure,t.contrast,t.curvatureScale,t.preset===`realista`?t.shade:``].join(`|`),r=xs.get(n);if(r)return r;let i={...No,...bs[t.preset](t.shade)},a=t.lightElevation*Qo,o=t.lightAzimuth*Qo,s={...i,keyX:Math.cos(a)*Math.cos(o),keyY:Math.cos(a)*Math.sin(o),keyZ:Math.sin(a),key:i.key*t.lightIntensity,aoAmbient:i.aoAmbient*t.occlusion,aoKey:i.aoKey*t.occlusion,cavDark:Math.min(.95,i.cavDark*t.edges),cavLight:Math.min(.9,i.cavLight*t.edges),exposure:2**t.exposure,contrast:Math.max(-1,Math.min(1,i.contrast+t.contrast)),curvFull:No.curvFull/t.curvatureScale};return t.lightAzimuth===ts.padrao[0]&&t.lightElevation===ts.padrao[1]&&(s.keyX=No.keyX,s.keyY=No.keyY,s.keyZ=No.keyZ),xs.size>400&&xs.clear(),xs.set(n,s),s}function Cs(e){return e.preset===`realista`}function ws(e,t){let n=Math.min(1,Math.hypot(e,t)),r=n<1e-6?90:Math.atan2(t,e)/Qo;r<0&&(r+=360);let i=Math.max(es.lightElevation[0],Math.min(90,Math.acos(n)/Qo));return{azimuth:Math.round(r),elevation:Math.round(i)}}function Ts(e,t){let n=Math.cos(Math.max(0,Math.min(90,t))*Qo);return{x:n*Math.cos(e*Qo),y:n*Math.sin(e*Qo)}}var Es=250,Ds=120,Os=class{dt=[];last=-1;total=0;tick(e){if(this.total++,this.last>=0){let t=e-this.last;t<=Es?(this.dt.push(t),this.dt.length>Ds&&this.dt.shift()):this.dt.length=0}this.last=e}fps(e){if(this.last<0||e-this.last>500||this.dt.length<2)return null;let t=Math.min(30,this.dt.length),n=0;for(let e=this.dt.length-t;e<this.dt.length;e++)n+=this.dt[e];return n>0?1e3*t/n:null}worstMs(){let e=0;for(let t of this.dt)t>e&&(e=t);return e}avgMs(){if(!this.dt.length)return 0;let e=0;for(let t of this.dt)e+=t;return e/this.dt.length}reset(){this.dt.length=0,this.last=-1,this.total=0}},ks=(e,t=1)=>e.toFixed(t).replace(`.`,`,`),As=e=>Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,`.`);function js(e){let t=[`caminho: ${e.path===`webgl`?`WebGL`:`SOFTWARE`} — ${e.reason}`,e.fps===null?`quadros/s: parado (o quadro só é refeito quando algo muda)`:`quadros/s: ${ks(e.fps)}  (média ${ks(e.avgMs)} ms, pior ${ks(e.worstMs)} ms)`,`triângulos desenhados: ${As(e.triangles)}${e.drawCalls==null?``:`  (${e.drawCalls} chamadas)`}`,`canvas: ${e.canvasW}×${e.canvasH} px  (tela ${e.cssW}×${e.cssH} css)`,`pixel ratio: ${ks(e.pixelRatio,2)} usado  (dispositivo ${ks(e.devicePixelRatio,2)})`,`aparência: ${e.appearance}`];e.submitMs!=null&&t.push(`CPU por quadro (envio à GPU): ${ks(e.submitMs,2)} ms`),e.gpu&&t.push(`GPU: ${e.gpu}`),e.spin!==void 0&&t.push(`giro de teste (tecla R): ${e.spin?`LIGADO`:`desligado`}`);for(let n of e.notes??[])t.push(n);return t}function Ms(e,t=null){let n=/[?&]diag=([^&#]*)/.exec(e);return{on:n!==null&&n[1]!==`0`&&n[1]!==`false`&&n[1]!==``,store:null}}var Ns=8,Ps=class{dedos=new Map;par=null;get ativo(){return this.par!==null}tem(e){return this.dedos.has(e)}meio(){if(!this.par)return null;let e=this.dedos.get(this.par[0]),t=this.dedos.get(this.par[1]);return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}encosta(e,t,n){return this.dedos.set(e,{x:t,y:n}),this.par||this.dedos.size!==2?!1:(this.par=this.doisPrimeiros(),!0)}anda(e,t,n){let r=this.dedos.get(e);if(!r)return null;this.dedos.set(e,{x:t,y:n});let i=this.par;if(!i||i[0]!==e&&i[1]!==e)return null;let a=this.dedos.get(i[0]===e?i[1]:i[0]),o=Math.hypot(r.x-a.x,r.y-a.y),s=Math.hypot(t-a.x,n-a.y);return{dx:(t-r.x)/2,dy:(n-r.y)/2,abertura:o>=Ns&&s>=Ns?s/o:1}}sai(e){if(!this.dedos.delete(e))return null;let t=this.par;if(!t||t[0]!==e&&t[1]!==e)return null;if(this.par=null,this.dedos.size>=2)return this.par=this.doisPrimeiros(),{resta:null,novoPar:!0};for(let[e,t]of this.dedos)return{resta:{id:e,x:t.x,y:t.y},novoPar:!1};return{resta:null,novoPar:!1}}limpa(){this.dedos.clear(),this.par=null}doisPrimeiros(){let[e,t]=this.dedos.keys();return[e,t]}};$.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},wn.line={uniforms:ln.merge([$.common,$.fog,$.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Fs=class extends yt{constructor(e){super({type:`LineMaterial`,uniforms:ln.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Is=new Vt,Ls=new Q,Rs=class extends Ve{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new be([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new be([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new we(t,6,1);return this.setAttribute(`instanceStart`,new Ne(n,3,0)),this.setAttribute(`instanceEnd`,new Ne(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new we(t,6,1);return this.setAttribute(`instanceColorStart`,new Ne(n,3,0)),this.setAttribute(`instanceColorEnd`,new Ne(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new He(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Is.setFromBufferAttribute(t),this.boundingBox.union(Is))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Ls.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Ls)),Ls.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Ls));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}},zs=new _e,Bs=new Q,Vs=new Q,Hs=new _e,Us=new _e,Ws=new _e,Gs=new Q,Ks=new st,qs=new ve,Js=new Q,Ys=new Vt,Xs=new Wt,Zs=new _e,Qs,$s;function ec(e,t,n){return Zs.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Zs.multiplyScalar(1/Zs.w),Zs.x=$s/n.width,Zs.y=$s/n.height,Zs.applyMatrix4(e.projectionMatrixInverse),Zs.multiplyScalar(1/Zs.w),Math.abs(Math.max(Zs.x,Zs.y))}function tc(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){qs.start.fromBufferAttribute(i,r),qs.end.fromBufferAttribute(a,r),qs.applyMatrix4(n);let o=new Q,s=new Q;Qs.distanceSqToSegment(qs.start,qs.end,s,o),s.distanceTo(o)<$s*.5&&t.push({point:s,pointOnLine:o,distance:Qs.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function nc(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Qs.at(1,Ws),Ws.w=1,Ws.applyMatrix4(t.matrixWorldInverse),Ws.applyMatrix4(r),Ws.multiplyScalar(1/Ws.w),Ws.x*=i.x/2,Ws.y*=i.y/2,Ws.z=0,Gs.copy(Ws),Ks.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Hs.fromBufferAttribute(s,t),Us.fromBufferAttribute(c,t),Hs.w=1,Us.w=1,Hs.applyMatrix4(Ks),Us.applyMatrix4(Ks),Hs.z>u&&Us.z>u)continue;if(Hs.z>u){let e=Hs.z-Us.z,t=(Hs.z-u)/e;Hs.lerp(Us,t)}else if(Us.z>u){let e=Us.z-Hs.z,t=(Us.z-u)/e;Us.lerp(Hs,t)}Hs.applyMatrix4(r),Us.applyMatrix4(r),Hs.multiplyScalar(1/Hs.w),Us.multiplyScalar(1/Us.w),Hs.x*=i.x/2,Hs.y*=i.y/2,Us.x*=i.x/2,Us.y*=i.y/2,qs.start.copy(Hs),qs.start.z=0,qs.end.copy(Us),qs.end.z=0;let o=qs.closestPointToPointParameter(Gs,!0);qs.at(o,Js);let l=at.lerp(Hs.z,Us.z,o),d=l>=-1&&l<=1,f=Gs.distanceTo(Js)<$s*.5;if(d&&f){qs.start.fromBufferAttribute(s,t),qs.end.fromBufferAttribute(c,t),qs.start.applyMatrix4(a),qs.end.applyMatrix4(a);let r=new Q,i=new Q;Qs.distanceSqToSegment(qs.start,qs.end,i,r),n.push({point:i,pointOnLine:r,distance:Qs.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var rc=class extends Ue{constructor(e=new Rs,t=new Fs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Bs.fromBufferAttribute(t,e),Vs.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Bs.distanceTo(Vs);let i=new we(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Ne(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Ne(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Qs=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;$s=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Xs.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?$s*.5:ec(r,Math.max(r.near,Xs.distanceToPoint(Qs.origin)),s.resolution),Xs.radius+=c,Qs.intersectsSphere(Xs)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ys.copy(o.boundingBox).applyMatrix4(a);let l;l=n?$s*.5:ec(r,Math.max(r.near,Ys.distanceToPoint(Qs.origin)),s.resolution),Ys.expandByScalar(l),Qs.intersectsBox(Ys)!==!1&&(n?tc(this,t):nc(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(zs),this.material.uniforms.resolution.value.set(zs.z,zs.w))}},ic=1.6,ac=.25,oc=240;function sc(e,t,n){if(n){let n=Math.floor(t/2),r=new Float32Array(n*6);for(let t=0;t<n*6;t++)r[t]=e[t];return r}let r=Math.max(0,t-1),i=new Float32Array(r*6);for(let t=0;t<r;t++)for(let n=0;n<6;n++)i[t*6+n]=e[t*3+n];return i}var cc=class{group=new At;entries=new Map;hidden=[];frame=0;constructor(){this.group.userData.overlay=!0,this.group.matrixAutoUpdate=!1}overlay(e,t){let n=new Fs({color:16777215,linewidth:ic,transparent:!0,depthTest:t,depthWrite:!1,worldUnits:!1}),r=new rc(new Rs,n);return r.frustumCulled=!1,r.matrixAutoUpdate=!1,r.matrixWorldAutoUpdate=!1,r.userData.overlay=!0,r.userData.key=e,this.group.add(r),r}sync(e,t,n,r){n&&(e.geometry.dispose(),e.geometry=new Rs,n.length&&e.geometry.setPositions(n));let i=e.material,a=t.material;i.color.copy(a.color),i.opacity=r,i.linewidth=Number(t.userData.width)||ic,e.matrix.copy(t.matrixWorld),e.matrixWorld.copy(t.matrixWorld),e.renderOrder=t.renderOrder}begin(e){this.end(),this.frame++,e.traverseVisible(e=>{let t=e;if(!t.isLine||t.userData.overlay)return;let n=t.geometry.getAttribute(`position`);if(!n)return;let r=t.isLineSegments===!0,i=t.geometry.id+`:`+n.version+`:`+n.count,a=this.entries.get(t),o=null;a||(a={front:this.overlay(i,!1),dim:null,key:``,used:0,on:!1},this.entries.set(t,a)),a.key!==i&&(o=sc(n.array,n.count,r),a.key=i);let s=t.material,c=s.transparent&&s.opacity<1?s.opacity:1,l=r&&!t.userData.guide&&!t.userData.margin;o&&(a.on=o.length>0),a.front.material.depthTest=l,l&&(a.dim??=this.overlay(i,!1),this.sync(a.dim,t,o,c*ac),a.dim.visible=a.on),this.sync(a.front,t,o,c),a.front.visible=a.on,a.used=this.frame,t.visible=!1,this.hidden.push(t)}),this.frame%oc===0&&this.sweep()}end(){for(let e of this.hidden)e.visible=!0;this.hidden.length=0;for(let e of this.entries.values())e.front.visible=!1,e.dim&&(e.dim.visible=!1)}sweep(){for(let[e,t]of this.entries)if(!(t.used>=this.frame-1)){for(let e of[t.front,t.dim])e&&(e.removeFromParent(),e.geometry.dispose(),e.material.dispose());this.entries.delete(e)}}dispose(){this.end();for(let e of this.entries.values())for(let t of[e.front,e.dim])t&&(t.removeFromParent(),t.geometry.dispose(),t.material.dispose());this.entries.clear()}},lc=Math.hypot(-.62,-.3,.72),uc=[-.62/lc,-.3/lc,.72/lc],dc=[[29,63,168],[63,143,224],[217,217,212],[242,154,58],[198,34,28]],fc=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};function pc(){let e=[];for(let t of dc)for(let n of t)e.push(fc(n));return e}var mc=1.25;function hc(e){return{key:[e.keyX,e.keyY,e.keyZ],l1:[e.key,e.fill,e.head,e.ambLow],l2:[e.ambUp,e.specScale,e.exposure,e.contrast],cav:[e.cavScale*mc,e.cavDark,e.cavLight,e.outline],ao:[e.aoAmbient,e.aoKey,e.mode,e.zebra*.5],cv:[e.curvFull||1,e.backDim,0,0]}}function gc(e){let t=Math.max(.2,Math.min(1,Math.round(e*20)/20)),n=8/(t*t);return[Math.min(.3,.05*(n+8)/8*No.key),n,0,1]}function _c(e,t,n){let r=e.classes[t]??null;return{spec:r?.spec?[r.spec[0],r.spec[1],r.spec[2],r.spec[3]]:gc(n),cls:[r?r.wrap:e.wrap,r?r.fresnel:0,r?.lut?t:-1,+!!r?.lut]}}function vc(e){let t=new Float32Array(5120);for(let n=0;n<5;n++){let r=e.classes[n]?.lut;r&&r.length>=1024&&t.set(r.subarray(0,1024),n*1024)}return t}function yc(e,t,n,r=9e6){let i=Math.min(2,Math.max(1,n||1));return e*t*i*i>r&&(i=Math.max(1,Math.sqrt(r/Math.max(1,e*t)))),i}function bc(e){return e.forcedSoftware?{path:`software`,reason:`forçado por ?render=software`}:e.webglCreated?e.contextLost?{path:`software`,reason:`contexto WebGL perdido (aguardando restauração)`}:e.shaderFailed?{path:`webgl`,reason:`WebGL ativo, em modo simples (o sombreador próprio não compilou)`}:{path:`webgl`,reason:`WebGL ativo`}:{path:`software`,reason:e.createError?`WebGL indisponível: `+e.createError:`WebGL indisponível neste navegador`}}var xc=class{make;surface=null;has=!1;at=-1/0;stale=!1;constructor(e){this.make=e}get ready(){return this.has}capture(e,t,n){if(n&&t-this.at<500)return this.stale=!0,!1;try{let n=this.surface??=this.make();n.width!==e.width&&(n.width=e.width),n.height!==e.height&&(n.height=e.height);let r=n.getContext(`2d`);return r?(r.clearRect(0,0,n.width,n.height),r.drawImage(e,0,0),this.has=!0,this.at=t,this.stale=!1,!0):!1}catch{return!1}}paint(e,t,n){if(!this.has||!this.surface)return!1;try{return e.drawImage(this.surface,0,0,this.surface.width,this.surface.height,0,0,t,n),!0}catch{return!1}}clear(){this.has=!1,this.stale=!1}},Sc=.8,Cc=3,wc=1e-5,Tc=.03;function Ec(e){for(;;){let t=e.next();if(t.done)return t.value}}function Dc(e,t){let n=0,r=Math.floor(t.length/3);for(let i=0;i<r;i++){let r=t[i*3]*3,a=t[i*3+1]*3,o=t[i*3+2]*3,s=e[a]-e[r],c=e[a+1]-e[r+1],l=e[a+2]-e[r+2],u=e[o]-e[r],d=e[o+1]-e[r+1],f=e[o+2]-e[r+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;n+=.5*Math.sqrt(p*p+m*m+h*h)}return r?Math.sqrt(n*4/(Math.sqrt(3)*r)):0}var Oc=3,kc=new Float64Array(4);function Ac(e,t,n,r,i){let a=e[t],o=e[t+1],s=e[t+2],c=e[t+4],l=e[t+5],u=e[t+7],d=a+c+u;if(kc[0]=n,kc[1]=r,kc[2]=i,kc[3]=0,!(d>0))return 0;let f=Tc*d/3,p=a+f,m=c+f,h=u+f,g=-e[t+3]+f*n,_=-e[t+6]+f*r,v=-e[t+8]+f*i,y=p*(m*h-l*l)-o*(o*h-l*s)+s*(o*l-m*s),b=n,x=r,S=i;if(y>1e-12*d*d*d){let e=1/y;b=e*(g*(m*h-l*l)-o*(_*h-l*v)+s*(_*l-m*v)),x=e*(p*(_*h-l*v)-g*(o*h-l*s)+s*(o*v-_*s)),S=e*(p*(m*v-_*l)-o*(o*v-_*s)+g*(o*l-m*s))}kc[0]=b,kc[1]=x,kc[2]=S;let C=e[t]*b*b+2*e[t+1]*b*x+2*e[t+2]*b*S+2*e[t+3]*b+e[t+4]*x*x+2*e[t+5]*x*S+2*e[t+6]*x+e[t+7]*S*S+2*e[t+8]*S+e[t+9];return Math.max(0,C)/d}function*jc(e,t){let n=e.positions,r=e.normals,i=e.index,a=Math.floor(n.length/3),o=Math.floor(i.length/3),s=1/0,c=1/0,l=1/0;for(let e=0;e<a*3;e+=3){let t=n[e],r=n[e+1],i=n[e+2];t<s&&(s=t),r<c&&(c=r),i<l&&(l=i)}let u=new Float32Array(o),d=0;for(let e=0;e<o;e++){let t=i[e*3]*3,r=i[e*3+1]*3,a=i[e*3+2]*3,o=n[r]-n[t],s=n[r+1]-n[t+1],c=n[r+2]-n[t+2],l=n[a]-n[t],f=n[a+1]-n[t+1],p=n[a+2]-n[t+2],m=s*p-c*f,h=c*l-o*p,g=o*f-s*l,_=.5*Math.sqrt(m*m+h*h+g*g);u[e]=_,d+=_,(e&32767)==32767&&(yield)}let f=Math.sqrt(2*d/Math.max(1,t));(!(f>0)||!Number.isFinite(f))&&(f=1);let p=f/2,m=1/p,h=Math.max(4,Math.round(t/2)),g=1024;for(;g<a*2;)g<<=1;let _=g-1,v=new Int32Array(g).fill(-1),y=new Int32Array(a),b=new Int32Array(a),x=new Int32Array(a),S=new Int32Array(a),C=new Uint32Array(a),w=new Float64Array(a*3),T=0;for(let e=0,t=0;e<a;e++,t+=3){let r=n[t],i=n[t+1],a=n[t+2],o=Math.floor((r-s)*m),u=Math.floor((i-c)*m),d=Math.floor((a-l)*m),f=(Math.imul(o,73856093)^Math.imul(u,19349663)^Math.imul(d,83492791))&_,p;for(;;){if(p=v[f],p<0){p=T++,v[f]=p,y[p]=o,b[p]=u,x[p]=d;break}if(y[p]===o&&b[p]===u&&x[p]===d)break;f=f+1&_}S[e]=p,C[p]++,w[p*3]+=r,w[p*3+1]+=i,w[p*3+2]+=a,(e&32767)==32767&&(yield)}let E=new Float64Array(T*10),D=new Float32Array(a);for(let e=0;e<o;e++){let t=i[e*3],r=i[e*3+1],a=i[e*3+2],o=u[e];D[t]+=o,D[r]+=o,D[a]+=o;let s=t*3,c=r*3,l=a*3,d=n[c]-n[s],f=n[c+1]-n[s+1],p=n[c+2]-n[s+2],m=n[l]-n[s],h=n[l+1]-n[s+1],g=n[l+2]-n[s+2],_=f*g-p*h,v=p*m-d*g,y=d*h-f*m,b=Math.sqrt(_*_+v*v+y*y);if(!(b>0))continue;_/=b,v/=b,y/=b;let x=-(_*n[s]+v*n[s+1]+y*n[s+2]),C=o*_*_,w=o*_*v,T=o*_*y,O=o*_*x,k=o*v*v,A=o*v*y,j=o*v*x,M=o*y*y,N=o*y*x,P=o*x*x,F=S[t],I=S[r],ee=S[a];for(let e=0;e<3;e++){let t=e===0?F:e===1?I:ee;if(e===1&&t===F||e===2&&(t===F||t===I))continue;let n=t*10;E[n]+=C,E[n+1]+=w,E[n+2]+=T,E[n+3]+=O,E[n+4]+=k,E[n+5]+=A,E[n+6]+=j,E[n+7]+=M,E[n+8]+=N,E[n+9]+=P}(e&32767)==32767&&(yield)}let O=[T],k=[],A=[y],j=[b],M=[x],N=[C],P=[w],F=[E];for(let e=1;e<Oc;e++){let t=O[e-1],n=A[e-1],r=j[e-1],i=M[e-1],a=N[e-1],o=P[e-1],s=F[e-1],c=1024;for(;c<t*2;)c<<=1;let l=c-1,u=new Int32Array(c).fill(-1),d=new Int32Array(t),f=new Int32Array(t),p=new Int32Array(t),m=new Int32Array(t),h=new Uint32Array(t),g=new Float64Array(t*3),_=new Float64Array(t*10),v=0;for(let e=0;e<t;e++){let t=n[e]>>1,c=r[e]>>1,y=i[e]>>1,b=(Math.imul(t,73856093)^Math.imul(c,19349663)^Math.imul(y,83492791))&l,x;for(;;){if(x=u[b],x<0){x=v++,u[b]=x,d[x]=t,f[x]=c,p[x]=y;break}if(d[x]===t&&f[x]===c&&p[x]===y)break;b=b+1&l}m[e]=x,h[x]+=a[e],g[x*3]+=o[e*3],g[x*3+1]+=o[e*3+1],g[x*3+2]+=o[e*3+2];for(let t=0,n=x*10,r=e*10;t<10;t++)_[n+t]+=s[r+t]}k.push(m),O.push(v),A.push(d),j.push(f),M.push(p),N.push(h),P.push(g),F.push(_),yield}let I=[new Float64Array];for(let e=1;e<Oc;e++){let t=new Float64Array(O[e]);for(let n=0;n<O[e];n++){let r=1/N[e][n];t[n]=Ac(F[e],n*10,P[e][n*3]*r,P[e][n*3+1]*r,P[e][n*3+2]*r)}I.push(t),yield}let ee=I[1],L=I[2],R=k[0],te=k[1],ne=e=>{let t=0;for(let n=0;n<O[2];n++)L[n]<=e&&t++;for(let n=0;n<O[1];n++)ee[n]<=e&&!(L[te[n]]<=e)&&t++;for(let n=0;n<T;n++){let r=R[n];!(ee[r]<=e)&&!(L[te[r]]<=e)&&t++}return t},re=1e-10,z=f*f*4;if(ne(0)>h)for(let e=0;e<14;e++){let e=Math.sqrt(re*z);ne(e)>h?re=e:z=e}else z=0;let B=z;yield;let V=new Int32Array(T),H=[],ie=[],ae=new Int32Array(O[1]).fill(-1),oe=new Int32Array(O[2]).fill(-1);for(let e=0;e<T;e++){let t=R[e],n=te[t],r;L[n]<=B?(r=oe[n],r<0&&(r=H.length,oe[n]=r,H.push(2),ie.push(n))):ee[t]<=B?(r=ae[t],r<0&&(r=H.length,ae[t]=r,H.push(1),ie.push(t))):(r=H.length,H.push(0),ie.push(e)),V[e]=r}let U=H.length,se=new Int32Array(a);for(let e=0;e<a;e++)se[e]=V[S[e]];let W=new Float64Array(U*10),ce=new Float64Array(U*3),le=new Uint32Array(U),ue=new Float64Array(U),de=new Float64Array(U),fe=new Float64Array(U),G=new Float64Array(U);for(let e=0;e<U;e++){let t=H[e],n=ie[e];for(let r=0;r<10;r++)W[e*10+r]=F[t][n*10+r];ce[e*3]=P[t][n*3],ce[e*3+1]=P[t][n*3+1],ce[e*3+2]=P[t][n*3+2],le[e]=N[t][n];let r=p*(1<<t);ue[e]=r,de[e]=s+A[t][n]*r,fe[e]=c+j[t][n]*r,G[e]=l+M[t][n]*r}let pe=new Int32Array(U).fill(-1),me=new Float64Array(U).fill(1/0);for(let e=0,t=0;e<a;e++,t+=3){let r=se[e],i=r*10,a=n[t],o=n[t+1],s=n[t+2],c=W[i]+W[i+4]+W[i+7],l=W[i]*a*a+2*W[i+1]*a*o+2*W[i+2]*a*s+2*W[i+3]*a+W[i+4]*o*o+2*W[i+5]*o*s+2*W[i+6]*o+W[i+7]*s*s+2*W[i+8]*s+W[i+9],u=1/le[r],d=a-ce[r*3]*u,f=o-ce[r*3+1]*u,p=s-ce[r*3+2]*u,m=(c>0?Math.max(0,l)/c:0)+wc*(d*d+f*f+p*p)/(ue[r]*ue[r]);m<me[r]&&(me[r]=m,pe[r]=e),(e&32767)==32767&&(yield)}let he=new Int32Array(U*Cc).fill(-1),K=new Float32Array(U*Cc*3),ge=U*Cc,q=new Float32Array(ge*3),J=new Int32Array(ge),Y=new Uint32Array(a),_e=0,ve=r.length>=a*3;for(let e=0,t=0;e<a;e++,t+=3){let n=se[e],i=ve?r[t]:0,a=ve?r[t+1]:0,o=ve?r[t+2]:1,s=Math.sqrt(i*i+a*a+o*o);s>0?(i/=s,a/=s,o/=s):(i=0,a=0,o=1);let c=-1,l=-2,u=-1;for(let e=0;e<Cc;e++){if(he[n*Cc+e]<0){u=e;break}let t=(n*Cc+e)*3,r=i*K[t]+a*K[t+1]+o*K[t+2];r>l&&(l=r,c=e)}let d;if(c>=0&&(l>=Sc||u<0))d=he[n*Cc+c];else{d=_e++,J[d]=n,he[n*Cc+u]=d;let e=(n*Cc+u)*3;K[e]=i,K[e+1]=a,K[e+2]=o}let f=D[e]>0?D[e]:1e-9;q[d*3]+=i*f,q[d*3+1]+=a*f,q[d*3+2]+=o*f,Y[e]=d,(e&32767)==32767&&(yield)}let ye=new Float32Array(U*3);for(let e=0;e<U;e++){let t=1/le[e],r=pe[e]*3,i=n[r],a=n[r+1],o=n[r+2];Ac(W,e*10,ce[e*3]*t,ce[e*3+1]*t,ce[e*3+2]*t);{let t=ue[e],n=de[e]-.25*t,r=fe[e]-.25*t,s=G[e]-.25*t,c=1.5*t,l=kc[0],u=kc[1],d=kc[2];l>=n&&l<=n+c&&u>=r&&u<=r+c&&d>=s&&d<=s+c&&(i=l,a=u,o=d)}ye[e*3]=i,ye[e*3+1]=a,ye[e*3+2]=o}let X=new Float32Array(_e*3),be=new Float32Array(_e*3);for(let e=0;e<_e;e++){let t=J[e]*3;X[e*3]=ye[t],X[e*3+1]=ye[t+1],X[e*3+2]=ye[t+2];let n=q[e*3],r=q[e*3+1],i=q[e*3+2],a=Math.sqrt(n*n+r*r+i*i);a>0?(be[e*3]=n/a,be[e*3+1]=r/a,be[e*3+2]=i/a):be[e*3+2]=1}let xe=new Uint32Array(o*3),Se=0;for(let e=0;e<o;e++){let t=i[e*3],n=i[e*3+1],r=i[e*3+2],a=se[t],o=se[n],s=se[r];if(a!==o&&o!==s&&a!==s){let e=Y[t],i=Y[n],a=Y[r],o=e*3,s=i*3,c=a*3,l=X[s]-X[o],u=X[s+1]-X[o+1],d=X[s+2]-X[o+2],f=X[c]-X[o],p=X[c+1]-X[o+1],m=X[c+2]-X[o+2],h=u*m-d*p,g=d*f-l*m,_=l*p-u*f,v=h*(be[o]+be[s]+be[c])+g*(be[o+1]+be[s+1]+be[c+1])+_*(be[o+2]+be[s+2]+be[c+2]);xe[Se++]=e,v>=0?(xe[Se++]=i,xe[Se++]=a):(xe[Se++]=a,xe[Se++]=i)}(e&32767)==32767&&(yield)}let Ce=xe.slice(0,Se);return{positions:X,normals:be,index:Ce,map:Y,edge:Dc(X,Ce),blocks:null}}function*Mc(e,t,n,r){let i=Math.floor(e.length/3),a=Math.floor(n.length/3),o=new Float32Array(i),s=new Uint16Array(i),c=(n,r)=>{let i=n*3,a=r*3,c=e[a]-e[i],l=e[a+1]-e[i+1],u=e[a+2]-e[i+2],d=c*c+l*l+u*u;if(d<1e-10)return;let f=((t[a]-t[i])*c+(t[a+1]-t[i+1])*l+(t[a+2]-t[i+2])*u)/d;o[n]+=f,s[n]++,o[r]+=f,s[r]++};for(let e=0;e<a;e++){let t=n[e*3],r=n[e*3+1],i=n[e*3+2];c(t,r),c(r,i),c(i,t),(e&32767)==32767&&(yield)}let l=new Uint8Array(i);for(let e=0;e<i;e++){let t=s[e]?2*o[e]/s[e]:0,n=Math.round(128+t*r);l[e]=n<0?0:n>255?255:n}return l}function*Nc(e,t,n=4){let r=Math.floor(t.length/3),i=1/0,a=1/0,o=1/0;for(let t=0;t+2<e.length;t+=3){let n=e[t],r=e[t+1],s=e[t+2];n<i&&(i=n),r<a&&(a=r),s<o&&(o=s)}let s=1/n,c=1024;for(;c<r;)c<<=1;let l=c-1,u=new Int32Array(c).fill(-1),d=new Int32Array(r),f=new Int32Array(r),p=new Int32Array(r),m=new Int32Array(r),h=new Uint32Array(r),g=0;for(let n=0;n<r;n++){let r=t[n*3]*3,c=t[n*3+1]*3,_=t[n*3+2]*3,v=(e[r]+e[c]+e[_])/3,y=(e[r+1]+e[c+1]+e[_+1])/3,b=(e[r+2]+e[c+2]+e[_+2])/3,x=Math.floor((v-i)*s),S=Math.floor((y-a)*s),C=Math.floor((b-o)*s),w=(Math.imul(x,73856093)^Math.imul(S,19349663)^Math.imul(C,83492791))&l,T;for(;;){if(T=u[w],T<0){T=g++,u[w]=T,d[T]=x,f[T]=S,p[T]=C;break}if(d[T]===x&&f[T]===S&&p[T]===C)break;w=w+1&l}m[n]=T,h[T]++,(n&32767)==32767&&(yield)}let _=new Uint32Array(g*2),v=new Uint32Array(g);for(let e=0,t=0;e<g;e++)_[e*2]=t,v[e]=t,t+=h[e],_[e*2+1]=t;let y=new Uint32Array(r*3);for(let e=0;e<r;e++){let n=v[m[e]]++*3;y[n]=t[e*3],y[n+1]=t[e*3+1],y[n+2]=t[e*3+2],(e&32767)==32767&&(yield)}let b=new Float32Array(g*4);for(let t=0;t<g;t++){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let c=_[t*2]*3,l=_[t*2+1]*3;c<l;c++){let t=y[c]*3,l=e[t],u=e[t+1],d=e[t+2];l<n&&(n=l),l>a&&(a=l),u<r&&(r=u),u>o&&(o=u),d<i&&(i=d),d>s&&(s=d)}b[t*4]=(n+a)/2,b[t*4+1]=(r+o)/2,b[t*4+2]=(i+s)/2,b[t*4+3]=Math.hypot(a-n,o-r,s-i)/2,(t&1023)==1023&&(yield)}return{index:y,ranges:_,spheres:b}}function Pc(e,t,n,r,i,a=null){let o=e.spheres,s=e.ranges,c=s.length/2,l=new Uint32Array(c*2),u=Math.hypot(n,1),d=Math.hypot(r,1),f=Math.hypot(t[0],t[1],t[2]),p=0,m=0,h=0;for(let e=0;e<c;e++){let c=o[e*4],g=o[e*4+1],_=o[e*4+2],v=o[e*4+3]*f,y=-(t[2]*c+t[6]*g+t[10]*_+t[14]);if(y+v<i)continue;let b=t[0]*c+t[4]*g+t[8]*_+t[12];if(Math.abs(b)*n-y>v*u)continue;let x=t[1]*c+t[5]*g+t[9]*_+t[13];if(Math.abs(x)*r-y>v*d)continue;if(a&&y>v){let e=a.hh-a.fy*x/y,t=v*a.fy/(y-v)+2;if(e+t<a.y0||e-t>a.y1)continue}let S=s[e*2],C=s[e*2+1];m+=C-S,h+=(y>i?y:i)*(C-S),p&&l[p-1]===S?l[p-1]=C:(l[p++]=S,l[p++]=C)}return{ranges:l.subarray(0,p),triangles:m,depth:m?h/m:0}}var Fc=16383,Ic={seedDepth:3.2,maxDepth:11.5,maxPath:8.5,barrier:-.42,smoothCurv:3,smoothOut:4};function Lc(e,t){return Ec(Rc(e,t))}function*Rc(e,t){let n=new Uint32Array(e+1);for(let e=0;e+2<t.length;e+=3)n[t[e]]+=2,n[t[e+1]]+=2,n[t[e+2]]+=2;let r=new Uint32Array(e+1);for(let t=0;t<e;t++)r[t+1]=r[t]+n[t];let i=r.slice(0,e),a=new Uint32Array(r[e]);for(let e=0;e+2<t.length;e+=3){let n=t[e],r=t[e+1],o=t[e+2];a[i[n]++]=r,a[i[n]++]=o,a[i[r]++]=n,a[i[r]++]=o,a[i[o]++]=n,a[i[o]++]=r}let o=new Uint32Array(e+1),s=new Uint32Array(a.length),c=0;for(let t=0;t<e;t++){o[t]=c;let e=r[t],n=r[t+1];for(let r=e;r<n;r++){let e=a[r],n=!1;for(let r=o[t];r<c;r++)if(s[r]===e){n=!0;break}n||(s[c++]=e)}(t&Fc)===Fc&&(yield)}return o[e]=c,{start:o,list:s.subarray(0,c)}}function zc(e,t,n,r=0){return Ec(Bc(e,t,n,r))}function*Bc(e,t,n,r=0){let i=Math.floor(e.length/3),a=new Float32Array(i);for(let r=0;r<i;r++){let i=n.start[r],o=n.start[r+1];if(o===i)continue;let s=e[r*3],c=e[r*3+1],l=e[r*3+2],u=t[r*3],d=t[r*3+1],f=t[r*3+2],p=0,m=0;for(let r=i;r<o;r++){let i=n.list[r]*3,a=e[i]-s,o=e[i+1]-c,h=e[i+2]-l,g=a*a+o*o+h*h;g<1e-10||(p+=((t[i]-u)*a+(t[i+1]-d)*o+(t[i+2]-f)*h)/g,m++)}m&&(a[r]=p/m),(r&Fc)===Fc&&(yield)}let o=new Float32Array(i);for(let e=0;e<r;e++){for(let e=0;e<i;e++){let t=n.start[e],r=n.start[e+1],i=a[e]*2;for(let e=t;e<r;e++)i+=a[n.list[e]];o[e]=i/(r-t+2),(e&Fc)===Fc&&(yield)}let e=a;a=o,o=e}return a}function Vc(e,t,n){let r=e.length;if(r<3)return null;let i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;for(let f=0;f<r;f++){let r=e[f],p=t[f],m=n[f];i+=r,a+=p,o+=m,s+=r*r,c+=p*p,l+=r*p,u+=r*m,d+=p*m}let f=[[s,l,i],[l,c,a],[i,a,r]],p=[u,d,o];for(let e=0;e<3;e++){let t=e;for(let n=e+1;n<3;n++)Math.abs(f[n][e])>Math.abs(f[t][e])&&(t=n);if(Math.abs(f[t][e])<1e-9)return null;[f[e],f[t]]=[f[t],f[e]],[p[e],p[t]]=[p[t],p[e]];for(let t=e+1;t<3;t++){let n=f[t][e]/f[e][e];for(let r=e;r<3;r++)f[t][r]-=n*f[e][r];p[t]-=n*p[e]}}let m=p[2]/f[2][2],h=(p[1]-f[1][2]*m)/f[1][1];return[(p[0]-f[0][1]*h-f[0][2]*m)/f[0][0],h,m]}function Hc(e,t,n,r={}){return Ec(Uc(e,t,n,r))}function*Uc(e,t,n,r={}){let i={...Ic,...r},a=Math.floor(e.length/3),o=new Uint8Array(a).fill(255),s=0,c=0,l=0;for(let t=0;t+2<n.length;t+=3){let r=n[t]*3,i=n[t+1]*3,a=n[t+2]*3,o=e[i]-e[r],u=e[i+1]-e[r+1],d=e[i+2]-e[r+2],f=e[a]-e[r],p=e[a+1]-e[r+1],m=e[a+2]-e[r+2];s+=u*m-d*p,c+=d*f-o*m,l+=o*p-u*f,(t/3&Fc)===Fc&&(yield)}let u=Math.hypot(s,c,l);if(!(u>1e-9)||a<3)return{weights:o,axis:[0,0,1],toothShare:0};s/=u,c/=u,l/=u;let d=+(Math.abs(s)<.9),f=Math.abs(s)<.9?0:1,p=0,m=d*s+f*c+p*l;d-=s*m,f-=c*m,p-=l*m;let h=Math.hypot(d,f,p);d/=h,f/=h,p/=h;let g=c*p-l*f,_=l*d-s*p,v=s*f-c*d,y=new Float32Array(a),b=new Float32Array(a),x=new Float32Array(a),S=-1/0;for(let t=0,n=0;t<a;t++,n+=3){let r=e[n],i=e[n+1],a=e[n+2];y[t]=r*d+i*f+a*p,b[t]=r*g+i*_+a*v;let o=r*s+i*c+a*l;x[t]=o,o>S&&(S=o),(t&Fc)===Fc&&(yield)}let C=new Map;for(let e=0;e<a;e++){let t=Math.floor(y[e]/3)*65536+Math.floor(b[e]/3)+32768,n=C.get(t);(n===void 0||x[e]>x[n])&&C.set(t,e),(e&Fc)===Fc&&(yield)}let w=[0,0,S];for(let e=0;e<3;e++){let t=[],n=[],r=[],i=e===0?5:2.5;for(let e of C.values())w[0]*y[e]+w[1]*b[e]+w[2]-x[e]<i&&(t.push(y[e]),n.push(b[e]),r.push(x[e]));let a=Vc(t,n,r);if(!a)break;let o=0;for(let e=0;e<t.length;e++){let i=r[e]-(a[0]*t[e]+a[1]*n[e]+a[2]);i>o&&(o=i)}w=[a[0],a[1],a[2]+o*.6]}let T=new Float32Array(a);for(let e=0;e<a;e++)T[e]=w[0]*y[e]+w[1]*b[e]+w[2]-x[e];let E=yield*Rc(a,n),D=yield*Bc(e,t,E,i.smoothCurv),O=new Float32Array(a).fill(1/0),k=0,A=.1,j=Math.ceil(i.maxPath/A)+2,M=[];for(let e=0;e<j;e++)M.push([]);for(let e=0;e<a;e++)T[e]<i.seedDepth&&(O[e]=0,M[0].push(e));for(let t=0;t<j;t++){let n=M[t];for(let r=0;r<n.length;r++){++k&2047||(yield);let a=n[r],o=O[a];if(Math.floor(o/A)!==t||o>0&&D[a]<i.barrier)continue;let s=e[a*3],c=e[a*3+1],l=e[a*3+2];for(let t=E.start[a],n=E.start[a+1];t<n;t++){let n=E.list[t];if(T[n]>i.maxDepth)continue;let r=o+Math.hypot(e[n*3]-s,e[n*3+1]-c,e[n*3+2]-l);if(r<O[n]&&r<=i.maxPath){O[n]=r;let e=Math.floor(r/A);e<j&&M[e].push(n)}}}}let N=new Float32Array(a),P=new Float32Array(a);for(let e=0;e<a;e++)N[e]=O[e]<1/0?0:1;for(let e=0;e<i.smoothOut;e++){for(let e=0;e<a;e++){let t=E.start[e],n=E.start[e+1],r=N[e];for(let e=t;e<n;e++)r+=N[E.list[e]];P[e]=r/(n-t+1),(e&Fc)===Fc&&(yield)}let e=N;N=P,P=e}let F=0;for(let e=0;e<a;e++)o[e]=Math.round(N[e]*255),N[e]<.5&&F++;return{weights:o,axis:[s,c,l],toothShare:F/a}}function Wc(e,t=[0,1,0]){let n=Math.floor(e.length/3),r=new Uint8Array(n),i=1/0,a=-1/0;for(let r=0,o=0;r<n;r++,o+=3){let n=e[o]*t[0]+e[o+1]*t[1]+e[o+2]*t[2];n<i&&(i=n),n>a&&(a=n)}let o=a>i?255/(a-i):0;for(let a=0,s=0;a<n;a++,s+=3)r[a]=Math.round((e[s]*t[0]+e[s+1]*t[1]+e[s+2]*t[2]-i)*o);return r}var Gc=`
attribute float aux;
attribute float curv;
varying vec3 vN;
varying vec3 vP;
varying vec3 vW;
varying float vAux;
varying float vCurv;
#ifdef USE_COLOR
varying vec3 vCol;
#endif
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vP = mv.xyz;
  vN = normalMatrix * normal;
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  vAux = aux;
  vCurv = curv;
#ifdef USE_COLOR
  vCol = color;
#endif
  gl_Position = projectionMatrix * mv;
}
`,Kc=`
varying vec3 vN;
varying vec3 vP;
varying vec3 vW;
varying float vAux;
varying float vCurv;
#ifdef USE_COLOR
varying vec3 vCol;
#endif

uniform vec3 uKey;
uniform vec4 uL1;
uniform vec4 uL2;
uniform vec4 uCav;
uniform vec4 uAO;
uniform vec4 uCv;
uniform vec3 uFill;
uniform vec3 uRamp[5];
uniform sampler2D uLut;

uniform vec3 uColor;
uniform vec3 uEmis;
uniform float uOpacity;
uniform vec4 uSpec;
uniform vec4 uCls;
uniform vec4 uMat;
uniform vec4 uClip;
uniform float uClipOn;

float specAt(float nh) {
  float c = max(nh, 0.0001);
  return uSpec.x * pow(c, uSpec.y) + uSpec.z * pow(c, uSpec.w);
}

float stripe(float u) {
  float f = fract(u);
  f = f < 0.5 ? f * 2.0 : 2.0 - f * 2.0;
  float fw = max(0.08, fwidth(f));
  return clamp((f - 0.5 + fw) / (2.0 * fw), 0.0, 1.0);
}

vec3 curvatureColor(float t) {
  float s = clamp(t, 0.0, 1.0) * 4.0;
  if (s < 1.0) return mix(uRamp[0], uRamp[1], s);
  if (s < 2.0) return mix(uRamp[1], uRamp[2], s - 1.0);
  if (s < 3.0) return mix(uRamp[2], uRamp[3], s - 2.0);
  return mix(uRamp[3], uRamp[4], s - 3.0);
}

vec3 toDisplay(vec3 x, float contrast) {
  // ombro suave acima de 0,8, para os brilhos não estourarem
  x = min(x, vec3(0.8)) + 0.2 * (1.0 - exp(-max(x - 0.8, 0.0) / 0.2));
  x = clamp(x, 0.0, 1.0);
  vec3 lo = 12.92 * x;
  vec3 hi = 1.055 * pow(max(x, vec3(0.0031308)), vec3(1.0 / 2.4)) - 0.055;
  vec3 v = mix(hi, lo, step(x, vec3(0.0031308)));
  if (contrast > 0.0) v += (v * v * (3.0 - 2.0 * v) - v) * contrast * 1.6;
  else if (contrast < 0.0) v += (0.5 - v) * -contrast * 0.6;
  return clamp(v, 0.0, 1.0);
}

void main() {
  bool clipOn = uClipOn > 0.5;
  if (clipOn && dot(vW, uClip.xyz) + uClip.w > 0.0) discard;

  vec3 V = normalize(-vP);
  vec3 N = normalize(vN);
  bool cap = false;
  float dimBack = 1.0;
  if (clipOn && !gl_FrontFacing) {
    // atrás do corte: numa malha fechada vê-se a "tampa" (plano do corte, hachurada); numa aberta, o avesso escurecido
    if (uMat.x > 0.5) { cap = true; N = normalize((viewMatrix * vec4(uClip.xyz, 0.0)).xyz); }
    else dimBack = 1.0 - uCv.y;
  }
  if (dot(N, V) < 0.0) N = -N;

  float expo = uL2.z;
  float kd = dot(N, uKey);
  float wrap = cap ? 0.0 : uCls.x;
  if (wrap > 0.0) kd = (kd + wrap) / (1.0 + wrap);
  kd = max(kd, 0.0);
  float kf = max(dot(N, uFill), 0.0);
  float ndv = max(dot(N, V), 0.0);
  float amb = uL1.w + uL2.x * (0.5 + 0.5 * N.y) + uL1.y * kf + uL1.z * ndv;
  float key = uL1.x * kd;
  float mul = expo * dimBack;
  float curvature = vCurv;

  if (uAO.z < 0.5) {
    // realce de cavidades: vales escurecem, cristas clareiam; e uma oclusão barata pela concavidade
    float cc = curvature * uCav.x;
    if (cc < 0.0) mul *= 1.0 + max(cc, -1.0) * uCav.y;
    else mul *= 1.0 + min(cc, 1.0) * uCav.z;
    float occ = clamp(-curvature * 0.5, 0.0, 1.0);
    amb *= 1.0 - min(uAO.x * occ * 0.6, 1.0);
    key *= 1.0 - min(uAO.y * occ * 0.6, 1.0);
  }
  // contorno suave: as bordas rasantes escurecem um pouco (silhueta legível sobre o fundo)
  mul *= 1.0 - uCav.w * 0.55 * pow(1.0 - ndv, 3.0);

  vec3 col;
  if (uAO.z > 0.5 && uAO.z < 1.5) {
    // mapa de curvatura: a cor é o dado; a luz só modula um pouco
    float lt = min(amb + key, 1.0);
    float m = (0.5 + 0.5 * lt) * (mul < expo ? 0.5 + 0.5 * (mul / expo) : 1.0) * expo;
    col = curvatureColor(0.5 + 0.5 * curvature / uCv.x) * m;
  } else if (uAO.z > 1.5) {
    // zebra: listras pelo vetor de reflexão; uma irregularidade as quebra
    vec3 R = reflect(-V, N);
    float u = (R.y * 0.94 + R.x * 0.34) * uAO.w + 64.0;
    float lt = min(amb + key, 1.1);
    float m = (0.05 + 0.85 * stripe(u)) * (0.55 + 0.45 * lt) * mul;
    col = vec3(m, m, m * 1.02);
  } else {
    vec3 base;
    float gloss = 1.0;
#ifdef USE_COLOR
    base = vCol;
#else
    if (uCls.z >= 0.0) {
      vec4 l = texture2D(uLut, vec2((clamp(vAux, 0.0, 1.0) * 255.0 + 0.5) / 256.0, (uCls.z + 0.5) / 5.0));
      base = l.rgb;
      gloss = l.a;
    } else base = uColor;
#endif
    col = base * ((amb + key) * mul);
    float sp = 0.0;
    if (cap) {
      // tampa do corte: hachura diagonal, para ler como material cortado
      float hatch = mod(floor((gl_FragCoord.x + gl_FragCoord.y) / (3.0 * uMat.y)), 2.0) > 0.5 ? 0.78 : 1.0;
      col *= hatch;
    } else {
      vec3 H = normalize(uKey + V);
      sp = specAt(dot(N, H)) * uL2.y * gloss;
      float fr = uCls.y;
      if (fr > 0.0) {
        // clareia nas bordas rasantes e ganha um segundo reflexo (a janela do preenchimento no vidrado)
        float f = 1.0 - ndv;
        float ff = f * f * f * fr * expo;
        col += vec3(ff, ff, ff * 1.06);
        float nh2 = dot(N, normalize(uFill + V));
        if (nh2 > 0.5) sp += specAt(nh2) * uL2.y * 0.4 * gloss;
      }
    }
    col += vec3(sp * expo) + uEmis;
  }

  float a = uOpacity;
  if (a < 0.995) a = clamp(a + (1.0 - a) * 0.4 * pow(1.0 - ndv, 2.0), 0.0, 1.0);
  gl_FragColor = vec4(toDisplay(col, uL2.w), a);
}
`,qc=`
varying vec3 vW;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mv;
}
`,Jc=`
varying vec3 vW;
uniform vec4 uClip;
uniform float uClipOn;
void main() {
  if (uClipOn > 0.5 && dot(vW, uClip.xyz) + uClip.w > 0.0) discard;
  gl_FragColor = vec4(0.0);
}
`,Yc={tooth:15327954,plan:9417983,stump:14262374,gum:12876412,crown:16052714,scan:14208960,cera:16052714,line:15234607,mark:15234607,measure:16777215,activeEmissive:1707010};function Xc(){let e=(e,t=.45)=>new Bt({color:e,roughness:t,metalness:0,side:2});return{tooth:e(Yc.tooth),plan:e(Yc.plan),stump:e(Yc.stump,.6),gum:e(Yc.gum,.7),crown:e(Yc.crown,.3),scan:e(Yc.scan,.55),cera:e(Yc.cera,.4),ceraCor:(()=>{let t=e(16777215,.5);return t.vertexColors=!0,t})(),line:new $e({color:Yc.line,depthTest:!1,transparent:!0}),mark:new J({color:Yc.mark,depthTest:!1}),meas:new $e({color:Yc.measure,depthTest:!1}),measP:new J({color:Yc.measure,depthTest:!1})}}function Zc(e){for(let t of Object.keys(e))e[t].dispose()}function Qc(e,t){return e.kind?1:e.piece?2:e.arch?3:t===Yc.tooth?4:0}var $c=240,el=class{enabled=!0;shared={uKey:{value:new Q(0,0,1)},uL1:{value:new _e},uL2:{value:new _e},uCav:{value:new _e},uAO:{value:new _e},uCv:{value:new _e},uFill:{value:new Q(...uc)},uRamp:{value:[0,1,2,3,4].map(()=>new Q)},uLut:{value:null},uClip:{value:new _e},uClipOn:{value:0}};lut=new pt(new Float32Array(5120),256,5,rn,ze);lutLook=null;mats=new Map;seen=new Set;geo=new WeakMap;swaps=[];preFront=this.makePre(0);preBoth=this.makePre(2);pres=new Map;frames=0;v=new Q;lastPrepMs=0;constructor(){this.lut.minFilter=this.lut.magFilter=kt,this.lut.generateMipmaps=!1,this.lut.needsUpdate=!0,this.shared.uLut.value=this.lut;let e=pc();this.shared.uRamp.value.forEach((t,n)=>t.set(e[n*3],e[n*3+1],e[n*3+2]))}makePre(e){return new yt({vertexShader:qc,fragmentShader:Jc,uniforms:{uClip:this.shared.uClip,uClipOn:this.shared.uClipOn},side:e,colorWrite:!1,transparent:!0,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}make(){let e=this.shared;return new yt({vertexShader:Gc,fragmentShader:Kc,uniforms:{uKey:e.uKey,uL1:e.uL1,uL2:e.uL2,uCav:e.uCav,uAO:e.uAO,uCv:e.uCv,uFill:e.uFill,uRamp:e.uRamp,uLut:e.uLut,uClip:e.uClip,uClipOn:e.uClipOn,uColor:{value:new Ut},uEmis:{value:new Ut},uOpacity:{value:1},uSpec:{value:new _e},uCls:{value:new _e},uMat:{value:new _e}},side:2,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}setShared(e){let t=this.shared,n=hc(e.look);t.uKey.value.set(...n.key),t.uL1.value.set(...n.l1),t.uL2.value.set(...n.l2),t.uCav.value.set(...n.cav),t.uAO.value.set(...n.ao),t.uCv.value.set(...n.cv),this.lutLook!==e.look&&(this.lut.image.data.set(vc(e.look)),this.lut.needsUpdate=!0,this.lutLook=e.look),e.clip?(t.uClip.value.set(e.clip[0],e.clip[1],e.clip[2],e.clip[3]),t.uClipOn.value=1):t.uClipOn.value=0}prepare(e,t,n){let r=e.geometry,i=r.getAttribute(`position`),a=r.getIndex();if(!i||!a)return;let o=i.count,s=a.version+a.count*4096,c=this.geo.get(r);c||(c={nbN:-1,nbIdx:-1,curvPos:-1,curvIdx:-1,curvN:-1,auxPos:-1,auxIdx:-1,auxN:-1,auxCls:-1},this.geo.set(r,c)),(!c.curv||c.curv.count!==o)&&(c.curv=new ht(new Float32Array(o),1),r.setAttribute(`curv`,c.curv),c.curvPos=-1),(!c.aux||c.aux.count!==o)&&(c.aux=new ht(new Uint8Array(o),1,!0),r.setAttribute(`aux`,c.aux),c.auxPos=-1);let l=r.getAttribute(`normal`),u=null,d=()=>u??=l&&l.count===o&&l.itemSize===3?l.array:Wo(i.array,a.array),f=c.curvPos!==-1;if((c.curvPos!==i.version||c.curvIdx!==s||c.curvN!==o)&&!(n.defer&&f)&&((!c.nb||c.nbN!==o||c.nbIdx!==s)&&(c.nb=Lc(o,a.array),c.nbN=o,c.nbIdx=s),c.curv.array.set(zc(i.array,d(),c.nb,2)),c.curv.needsUpdate=!0,c.curvPos=i.version,c.curvIdx=s,c.curvN=o),n.wantAux&&(t===1||t===2)){let e=c.auxPos!==-1&&c.auxCls===t;if((c.auxPos!==i.version||c.auxIdx!==s||c.auxN!==o||c.auxCls!==t)&&!(n.defer&&e)){let e=t===1?Hc(i.array,d(),a.array).weights:Wc(i.array);c.aux.array.set(e),c.aux.needsUpdate=!0,c.auxPos=i.version,c.auxIdx=s,c.auxN=o,c.auxCls=t}}}begin(e,t,n){if(this.end(),!this.enabled)return;let r=performance.now();this.frames++,this.setShared(n);let i=[],a=t.matrixWorldInverse;e.traverseVisible(e=>{let t=e;if(!t.isMesh||t.userData.dot||t.userData.glOnly||t.userData.overlay)return;let r=t.material;if(Array.isArray(r)||!r.isMeshStandardMaterial)return;let o=r,s=Qc(t.userData,o.color.getHex());this.prepare(t,s,n);let c=this.mats.get(t);c||(c=this.make(),this.mats.set(t,c)),this.seen.add(t);let l=c.uniforms;l.uColor.value.copy(o.color),l.uEmis.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity);let u=o.transparent&&o.opacity<.995;l.uOpacity.value=u?o.opacity:1;let d=_c(n.look,s,o.roughness);l.uSpec.value.set(...d.spec),l.uCls.value.set(...d.cls);let f=t.geometry.userData.closed===!0;l.uMat.value.set(+!!f,n.pixelRatio,0,0),c.vertexColors!==o.vertexColors&&(c.vertexColors=o.vertexColors,c.needsUpdate=!0),c.side=f&&!n.clip?0:2,c.transparent=u,c.depthWrite=!0;let p={mesh:t,material:r,order:t.renderOrder,pre:null};if(this.swaps.push(p),t.material=c,u){t.geometry.boundingSphere||t.geometry.computeBoundingSphere();let e=-this.v.copy(t.geometry.boundingSphere.center).applyMatrix4(t.matrixWorld).applyMatrix4(a).z;i.push({swap:p,depth:e})}}),i.sort((e,t)=>t.depth-e.depth),i.forEach(({swap:e},t)=>{let n=e.mesh,r=this.pres.get(n);r||(r=new Ue(n.geometry,this.preBoth),r.matrixAutoUpdate=!1,r.matrixWorldAutoUpdate=!1,r.frustumCulled=!1,r.userData.overlay=!0,this.pres.set(n,r)),r.geometry=n.geometry,r.material=n.material.side===0?this.preFront:this.preBoth;let i=-1e3+t*2;r.renderOrder=i,n.renderOrder=i+1,n.add(r),r.matrixWorld.copy(n.matrixWorld),e.pre=r}),this.frames%$c===0&&this.sweep(),this.lastPrepMs=performance.now()-r}end(){for(let e of this.swaps)e.mesh.material=e.material,e.mesh.renderOrder=e.order,e.pre&&e.mesh.remove(e.pre);this.swaps.length=0}get meshCount(){return this.swaps.length}sweep(){for(let[e,t]of this.mats)this.seen.has(e)||(t.dispose(),this.mats.delete(e),this.pres.delete(e));this.seen.clear()}dispose(){this.end();for(let e of this.mats.values())e.dispose();this.mats.clear(),this.pres.clear(),this.preFront.dispose(),this.preBoth.dispose(),this.lut.dispose()}};function tl(e,t,n){let r=[],i=t.projectionMatrix.elements[5],a=new Q;return e.traverseVisible(e=>{let o=e;if(!o.isMesh||!o.userData.dot)return;a.setFromMatrixPosition(o.matrixWorld).applyMatrix4(t.matrixWorldInverse);let s=-a.z;if(!(s>.5))return;let c=(Number(o.userData.dotMin)||2.5)*(s/(n/2*i));o.scale.x<c&&(r.push({m:o,s:o.scale.x}),o.scale.setScalar(c),o.updateMatrixWorld())}),()=>{for(let{m:e,s:t}of r)e.scale.setScalar(t),e.updateMatrixWorld()}}function nl(e,t,n){let[r,i,a,o]=n,s=Math.floor(e.length/3),c=new Float32Array(s);for(let t=0,n=0;t<s;t++,n+=3)c[t]=r*e[n]+i*e[n+1]+a*e[n+2]+o;let l=[],u=(t,n)=>{let r=c[t],i=r/(r-c[n]),a=t*3,o=n*3;l.push(e[a]+(e[o]-e[a])*i,e[a+1]+(e[o+1]-e[a+1])*i,e[a+2]+(e[o+2]-e[a+2])*i)};for(let e=0;e+2<t.length;e+=3){let n=t[e],r=t[e+1],i=t[e+2],a=c[n]>0,o=c[r]>0,s=c[i]>0;(a!==o||o!==s)&&(a!==o&&a!==s?(u(n,r),u(n,i)):o!==a&&o!==s?(u(r,i),u(r,n)):(u(i,n),u(i,r)))}return new Float32Array(l)}function rl(e,t){let[n,r,i,a]=e,o=t[0]*n+t[4]*r+t[8]*i,s=t[1]*n+t[5]*r+t[9]*i,c=t[2]*n+t[6]*r+t[10]*i,l=Math.hypot(o,s,c)||1,u=-a*n,d=-a*r,f=-a*i,p=t[0]*u+t[4]*d+t[8]*f+t[12],m=t[1]*u+t[5]*d+t[9]*f+t[13],h=t[2]*u+t[6]*d+t[10]*f+t[14];return[o/l,s/l,c/l,-(o*p+s*m+c*h)/l]}var il=.03,al=Math.PI-.03,ol=.5,sl=3e3,cl=1.1,ll=2,ul=.2,dl=e=>{let t=Math.tan(35*Math.PI/360)/Math.tan(e*Math.PI/360);return Math.sqrt(t*t-ul*ul*(t*t-1))};function fl(e,t){return t>0&&t<1?{tgt:e.tgt.clone(),r:Math.min(800,e.r/t),th:e.th,ph:e.ph,...e.up?{up:e.up.clone()}:{}}:e}function pl(t,n,r,i=.15){let a=r>0?r:1,o=Math.max(t*(1+i)/(.6*a),n*(1+i)/.6);return e(o,6,800)}function ml(t,n=`Oclusal`){let{X:r,Y:i,Z:a,mesial:o}=t,s=new Q;switch(n){case`Vestibular`:s.copy(a).addScaledVector(i,.35);break;case`Lingual`:s.copy(a).negate().addScaledVector(i,.35);break;case`Mesial`:s.copy(o).addScaledVector(i,.25);break;case`Distal`:s.copy(o).negate().addScaledVector(i,.25);break;default:s.copy(i).addScaledVector(a,.05)}return s.normalize(),{tgt:t.origin.clone().addScaledVector(i,t.H*.6),r:40,th:Math.atan2(s.x,s.z),ph:e(Math.acos(e(s.y,-1,1)),il,al)}}function hl(t,n,r=new Ct,i){let a=e(n,il,al),o=Math.sin(a),s=new Q(o*Math.sin(t),Math.cos(a),o*Math.cos(t)),c=i&&i.lengthSq()>0&&new Q().crossVectors(i,s).lengthSq()>1e-6?i:new Q(0,1,0);return r.setFromRotationMatrix(new st().lookAt(s,new Q,c))}function gl(t){let n=/[?&]lente=([^&#]*)/.exec(t);if(!n)return 8;let r=n[1].replace(/%2c/gi,`,`).trim().toLowerCase();if(r===`antiga`)return 35;let i=Number(r.replace(`,`,`.`));return r!==``&&Number.isFinite(i)?e(i,3,60):8}var _l=new Q(1,0,0),vl=new Q(0,1,0),yl=new Q(0,0,1),bl=.008,xl=class{camera=new _t(8,1,ol,sl);tgt=new Q(0,0,-18);r=120;quat=hl(0,1);dolly=dl(8);sceneC=new Q;sceneR=0;goal=null;goalQuat=null;goalOf=null;key=``;v=new Q;w=new Q;q=new Ct;box=new Vt;sphere=new Wt;get th(){let e=this.v.copy(yl).applyQuaternion(this.quat);return Math.atan2(e.x,e.z)}set th(e){hl(e,this.ph,this.quat)}get ph(){let t=this.v.copy(yl).applyQuaternion(this.quat);return Math.acos(e(t.y,-1,1))}set ph(e){hl(this.th,e,this.quat)}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.key=``}get lens(){return this.camera.fov}get eyeDistance(){return this.r*this.dolly}setLens(t){let n=e(Number.isFinite(t)?t:8,3,60);n!==this.camera.fov&&(this.camera.fov=n,this.dolly=dl(n),this.camera.updateProjectionMatrix(),this.key=``)}setSceneBounds(e,t=0){e&&t>0&&Number.isFinite(t+e.x+e.y+e.z)?(this.sceneC.copy(e),this.sceneR=t):this.sceneR=0}fitScene(e){let t=this.box.makeEmpty(),n=this.v;try{e.updateMatrixWorld(),e.traverse(e=>{let r=e;if(!r.isMesh||r.userData.dot||r.userData.glOnly||r.userData.overlay)return;let i=r.geometry,a=i?.getAttribute(`position`);if(!a||!a.count)return;i.boundingSphere||i.computeBoundingSphere();let o=i.boundingSphere,s=o.radius*r.matrixWorld.getMaxScaleOnAxis();n.copy(o.center).applyMatrix4(r.matrixWorld),s>=0&&Number.isFinite(s+n.x+n.y+n.z)&&(t.expandByPoint(this.w.set(n.x-s,n.y-s,n.z-s)),t.expandByPoint(this.w.set(n.x+s,n.y+s,n.z+s)))})}catch{t.makeEmpty()}if(t.isEmpty()){this.sceneR=0;return}let r=t.getBoundingSphere(this.sphere);this.setSceneBounds(r.center,r.radius)}rotate(e,t,n){this.goal=null;let r=this.q.setFromAxisAngle(vl,-e*bl).multiply(new Ct().setFromAxisAngle(_l,-t*bl));this.turn(r,n)}roll(e,t){this.goal=null,this.turn(this.q.setFromAxisAngle(yl,e),t)}turn(e,t){if(t){let n=this.quat.clone().multiply(e).multiply(this.quat.clone().invert());this.tgt.sub(t).applyQuaternion(n).add(t)}this.quat.multiply(e).normalize()}pan(e,t){this.goal=null;let n=this.r*.0016,r=new Q().copy(_l).applyQuaternion(this.quat),i=new Q().copy(vl).applyQuaternion(this.quat);this.tgt.addScaledVector(r,-e*n).addScaledVector(i,t*n)}zoom(t,n){this.goal=null;let r=e(this.r*Math.exp(t*.0012),6,800),i=r/this.r;n&&i!==1&&this.tgt.sub(n).multiplyScalar(i).add(n),this.r=r}pinch(t,n,r,i,a){this.goal=null;let o=this.v.copy(yl).applyQuaternion(this.quat),s=this.eyeDistance-this.w.copy(i).sub(this.tgt).dot(o);if(s>0||(s=this.eyeDistance),a>0&&(t||n)){let e=2*s*Math.tan(this.camera.fov*Math.PI/360)/a;this.tgt.addScaledVector(this.w.copy(_l).applyQuaternion(this.quat),-t*e),this.tgt.addScaledVector(this.w.copy(vl).applyQuaternion(this.quat),n*e)}if(r>0&&Number.isFinite(r)){let t=e(this.r/r,6,800),n=t/this.r;n!==1&&this.tgt.sub(i).multiplyScalar(n).add(i),this.r=t}}pointOnTargetPlane(e,t){let n=Math.tan(this.camera.fov*Math.PI/360)*this.eyeDistance,r=new Q().copy(_l).applyQuaternion(this.quat).multiplyScalar(e*n*this.camera.aspect),i=new Q().copy(vl).applyQuaternion(this.quat).multiplyScalar(t*n);return r.add(i).add(this.tgt)}jump(e){this.tgt.copy(e.tgt),this.r=e.r,hl(e.th,e.ph,this.quat,e.up),this.goal=null}update(t=1/60){let n=this.goal;if(n){(this.goalOf!==n||!this.goalQuat)&&(this.goalQuat=hl(n.th,n.ph,void 0,n.up),this.goalOf=n);let r=1-.84**e(t*60,.25,6);this.tgt.lerp(n.tgt,r),this.r+=(n.r-this.r)*r,this.quat.slerp(this.goalQuat,r),this.quat.angleTo(this.goalQuat)<.001&&Math.abs(n.r-this.r)<.05&&this.tgt.distanceTo(n.tgt)<.02&&this.jump(n)}let r=this.r*this.dolly,i=this.v.copy(yl).applyQuaternion(this.quat);this.fitClip(r,i),this.camera.quaternion.copy(this.quat),this.camera.position.copy(i).multiplyScalar(r).add(this.tgt),this.camera.updateMatrixWorld(!0);let a=this.quat,o=`${this.tgt.x.toFixed(4)},${this.tgt.y.toFixed(4)},${this.tgt.z.toFixed(4)},${this.r.toFixed(3)},${a.x.toFixed(6)},${a.y.toFixed(6)},${a.z.toFixed(6)},${a.w.toFixed(6)},${this.camera.fov}`,s=o!==this.key;return this.key=o,s}fitClip(e,t){let n=this.camera,r=e-sl,i=e+sl;if(this.sceneR>0){let n=e-((this.sceneC.x-this.tgt.x)*t.x+(this.sceneC.y-this.tgt.y)*t.y+(this.sceneC.z-this.tgt.z)*t.z),a=this.sceneR*cl+ll;r=n-a,i=n+a}r=Math.max(ol,r),i=Math.max(i,r+1),(r!==n.near||i!==n.far)&&(n.near=r,n.far=i,n.updateProjectionMatrix())}get animating(){return this.goal!==null}};function Sl(e){let t=Math.floor(e.length/3),n=new Uint32Array(t),r=16;for(;r<t*2;)r*=2;let i=r-1,a=new Int32Array(r).fill(-1),o=new Float32Array(3),s=new Uint32Array(o.buffer),c=!1;for(let r=0;r<t;r++){let t=o[0]=e[r*3]+0,l=o[1]=e[r*3+1]+0,u=o[2]=e[r*3+2]+0,d=Math.imul(s[0],73856093)^Math.imul(s[1],19349663)^Math.imul(s[2],83492791);d^=d>>>15,d=Math.imul(d,739982445),d^=d>>>12;let f=d&i;for(;;){let o=a[f];if(o<0){a[f]=r,n[r]=r;break}if(e[o*3]+0===t&&e[o*3+1]+0===l&&e[o*3+2]+0===u){n[r]=o,c=!0;break}f=f+1&i}}return{rep:n,merged:c}}function Cl(e,t,n=55,r,i){let a=Math.floor(e.length/3),o=Math.floor(t.length/3),s=i&&i.length===a*3?i:new Float32Array(a*3),c=r&&r.merged?r.rep:null,l=Math.cos(n*Math.PI/180),u=new Float32Array(o*3),d=new Float32Array(o*3),f=new Uint32Array(a+1);for(let n=0;n<o;n++){let r=t[n*3],i=t[n*3+1],a=t[n*3+2],o=r*3,s=i*3,l=a*3,p=e[s]-e[o],m=e[s+1]-e[o+1],h=e[s+2]-e[o+2],g=e[l]-e[o],_=e[l+1]-e[o+1],v=e[l+2]-e[o+2],y=e[l]-e[s],b=e[l+1]-e[s+1],x=e[l+2]-e[s+2];u[n*3]=m*v-h*_,u[n*3+1]=h*g-p*v,u[n*3+2]=p*_-m*g;let S=Math.hypot(p,m,h),C=Math.hypot(g,_,v),w=Math.hypot(y,b,x),T=(e,t,n)=>{let r=2*e*t;return r>0?Math.acos(Math.max(-1,Math.min(1,(e*e+t*t-n*n)/r))):0};d[n*3]=T(S,C,w),d[n*3+1]=T(S,w,C),d[n*3+2]=T(C,w,S);for(let e=0;e<3;e++){let r=t[n*3+e];f[(c?c[r]:r)+1]++}}for(let e=0;e<a;e++)f[e+1]+=f[e];let p=f.slice(0,a),m=new Uint32Array(o*3);for(let e=0;e<o;e++)for(let n=0;n<3;n++){let r=t[e*3+n],i=c?c[r]:r;m[p[i]++]=e*3+n}let h=new Float32Array(o*3);for(let e=0;e<o;e++){let t=Math.hypot(u[e*3],u[e*3+1],u[e*3+2]);t>0&&(h[e*3]=u[e*3]/t,h[e*3+1]=u[e*3+1]/t,h[e*3+2]=u[e*3+2]/t)}let g=new Float32Array(a),_=new Float32Array(a),v=new Float32Array(a);for(let e=0;e<a;e++){let t=f[e],n=f[e+1];if(t===n)continue;let r=-1,i=-1;for(let e=t;e<n;e++){let t=m[e];d[t]>i&&(h[t-t%3]!==0||h[t-t%3+1]!==0||h[t-t%3+2]!==0)&&(i=d[t],r=t)}if(r<0)continue;let a=Math.floor(r/3)*3,o=h[a],s=h[a+1],c=h[a+2],u=0,p=0,y=0;for(let e=t;e<n;e++){let t=m[e],n=Math.floor(t/3)*3,r=h[n],i=h[n+1],a=h[n+2];if(r===0&&i===0&&a===0||r*o+i*s+a*c<l)continue;let f=d[t];u+=r*f,p+=i*f,y+=a*f}u===0&&p===0&&y===0&&(u=o,p=s,y=c),g[e]=u,_[e]=p,v[e]=y}for(let e=0;e<a;e++){let t=c?c[e]:e,n=Math.hypot(g[t],_[t],v[t])||1;s[e*3]=g[t]/n,s[e*3+1]=_[t]/n,s[e*3+2]=v[t]/n}return s}function wl(e,t=!0){let n=e.getAttribute(`position`),r=e.getIndex();if(!n)return;let i=r?r.array:null;if(!i){e.computeVertexNormals();return}let a=e.userData.normalGroups;t&&(!a||a.count!==n.count)&&(a={...Sl(n.array),count:n.count},e.userData.normalGroups=a);let o=e.getAttribute(`normal`);o&&o.count===n.count&&o.itemSize===3?(Cl(n.array,i,void 0,t?a:null,o.array),o.needsUpdate=!0):e.setAttribute(`normal`,new ht(Cl(n.array,i,void 0,t?a:null),3))}var Tl=!1;function El(){Tl||(Tl=!0,Mt.prototype.computeBoundsTree=Wa,Mt.prototype.disposeBoundsTree=Ga,Ue.prototype.raycast=Ha)}function Dl(e,t=!1){El(),e.computeBoundsTree(t?{indirect:!0}:void 0)}function Ol(e){e.boundsTree?e.boundsTree.refit():Dl(e),e.boundingBox=null,e.boundingSphere=null}function kl(e){e.boundsTree&&e.disposeBoundsTree(),e.dispose()}function Al(e){let t=new Mt;return t.setAttribute(`position`,new ht(e.positions,3)),t.setIndex(new ht(e.index,1)),t.userData.lowIndex=e.lowIndex,Dl(t),wl(t),t}var jl=.8,Ml=3.4,Nl=3.4,Pl=.02,Fl=class{rc=new Y;nm=new rt;v=new Q;n=new Q;o=new Q;hits=[];constructor(){El(),this.rc.firstHitOnly=!0}cast(e,t,n,r=1/0){return this.rc.set(e,t),this.rc.near=0,this.rc.far=r,this.hits.length=0,this.rc.intersectObjects(n,!1,this.hits),this.hits[0]??null}pick(e,t,n){return this.rc.setFromCamera(e,t),this.rc.near=0,this.rc.far=1/0,this.hits.length=0,this.rc.intersectObjects(n,!1,this.hits),this.hits[0]??null}inside(e,t,n){this.rc.set(e,t),this.rc.near=1e-4,this.rc.far=20,this.rc.firstHitOnly=!1,this.hits.length=0;try{this.rc.intersectObjects(n,!1,this.hits)}finally{this.rc.firstHitOnly=!0}this.hits.sort((e,t)=>e.distance-t.distance);let r=0;for(let e=0;e<this.hits.length;e++)(e===0||this.hits[e].distance-this.hits[e-1].distance>1e-6)&&r++;return r%2==1}signedDistance(e,t,n=0,r=1,i=null){if(!t.length)return 1/0;let a=e.geometry,o=a.getAttribute(`position`),s=a.getAttribute(`normal`);e.updateMatrixWorld(!0);let c=e.matrixWorld;this.nm.getNormalMatrix(c);let l=1/0;for(let e=n;e<o.count;e+=r){this.v.fromBufferAttribute(o,e).applyMatrix4(c),this.n.fromBufferAttribute(s,e).applyMatrix3(this.nm).normalize(),this.o.copy(this.v).addScaledVector(this.n,-.8);let n=this.cast(this.o,this.n,t,Ml),r=n?n.distance-jl:1/0;if((!n||n.distance<.001)&&this.inside(this.v,this.n,t)){this.o.copy(this.v).addScaledVector(this.n,-3.4);let e=this.cast(this.o,this.n,t,6.8);e&&e.distance-3.4<r&&(n=e,r=e.distance-Nl)}n&&(i&&(i[e]=r),r<l&&(l=r))}return l}thickness(e,t,n,r,i){let a=e.geometry,o=a.getAttribute(`position`),s=a.getAttribute(`normal`);e.updateMatrixWorld(!0),t.updateMatrixWorld(!0);let c=e.matrixWorld;this.nm.getNormalMatrix(c);let l=new rt().getNormalMatrix(t.matrixWorld),u=new Q,d=new Q,f=[t],p=1/0;for(let e=n;e<o.count;e++){if(o.getY(e)<r)continue;this.v.fromBufferAttribute(o,e).applyMatrix4(c),this.n.fromBufferAttribute(s,e).applyMatrix3(this.nm).normalize();let t=this.cast(this.v,this.n,f,8);if(t?.face&&(d.copy(t.face.normal).applyMatrix3(l),d.dot(this.n)>0)){let e=-t.distance-i;e<p&&(p=e);continue}this.o.copy(this.v).addScaledVector(this.n,Pl);let n=this.cast(this.o,u.copy(this.n).negate(),f,8);if(n){let e=n.distance-Pl-i;e<p&&(p=e)}}return p===1/0?null:p}},Il={min:12,max:170},Ll=.15,Rl=e=>{let t=[0,0,0];for(let n of e)t[0]+=n[0],t[1]+=n[1],t[2]+=n[2];let n=e.length||1;return[t[0]/n,t[1]/n,t[2]/n]};function zl(e,t=Ll){let n=e.length;if(n<3)return e.slice();let r=[0];for(let t=0;t<n;t++)r.push(r[t]+j(e[t],e[(t+1)%n]));let i=r[n];if(i<1e-6)return e.slice();let a=Math.max(24,Math.ceil(i/t)),o=[];for(let t=0,s=0;t<a;t++){let c=i*t/a;for(;s<n-1&&r[s+1]<=c;)s++;let l=r[s+1]-r[s],u=l>1e-12?(c-r[s])/l:0,d=e[s],f=e[(s+1)%n];o.push([d[0]+(f[0]-d[0])*u,d[1]+(f[1]-d[1])*u,d[2]+(f[2]-d[2])*u])}return o}function Bl(e,t,n=.5){let r=e.map(e=>[e[0],e[1],e[2]]),i=r.length;for(let e=0;e<t;e++)r=r.map((e,t)=>{let a=r[(t+i-1)%i],o=r[(t+1)%i];return[e[0]+n*((a[0]+o[0])/2-e[0]),e[1]+n*((a[1]+o[1])/2-e[1]),e[2]+n*((a[2]+o[2])/2-e[2])]});return r}var Vl=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),Hl=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2};function Ul(e,t){let{u:n,v:r}=B(t),i=e.slice();for(let e=0;e<40;e++){let e=i.length;if(e<6)return i;let t=i.map(e=>[A(e,n),A(e,r)]),a=!1;for(let o=0;o<e&&!a;o++){let s=t[o],c=t[(o+1)%e];for(let l=o+2;l<e;l++){if(o===0&&l===e-1)continue;let u=t[l],d=t[(l+1)%e],f=Vl(u,d,s),p=Vl(u,d,c),m=Vl(s,c,u),h=Vl(s,c,d);if(!((f>0&&p<0||f<0&&p>0)&&(m>0&&h<0||m<0&&h>0)))continue;let g=f/(f-p),_=i[o],v=i[(o+1)%e],y=[_[0]+(v[0]-_[0])*g,_[1]+(v[1]-_[1])*g,_[2]+(v[2]-_[2])*g],b=[y,...i.slice(o+1,l+1)],x=[...i.slice(l+1),...i.slice(0,o+1),y];i=Math.abs(Hl(b.map(e=>[A(e,n),A(e,r)])))>=Math.abs(Hl(x.map(e=>[A(e,n),A(e,r)])))?b:x,a=!0;break}}if(!a)return i}return i}function Wl(e,t,n=96){let{u:r,v:i}=B(t),a=Rl(e),o=Array(n).fill(NaN),s=Array(n).fill(NaN);for(let c of e){let e=[c[0]-a[0],c[1]-a[1],c[2]-a[2]],l=A(e,r),u=A(e,i),d=Math.hypot(l,u),f=Math.floor((Math.atan2(u,l)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n)%n;(Number.isNaN(o[f])||d>o[f])&&(o[f]=d,s[f]=A(e,t))}if(!o.map((e,t)=>Number.isNaN(e)?-1:t).filter(e=>e>=0).length)return{c:a,u:r,v:i,eixo:t,raio:o.fill(0),alt:s.fill(0)};for(let e=0;e<n;e++){if(!Number.isNaN(o[e]))continue;let t=-1,r=-1;for(let i=1;i<n&&(t<0||r<0);i++)t<0&&!Number.isNaN(o[(e-i+n)%n])&&(t=i),r<0&&!Number.isNaN(o[(e+i)%n])&&(r=i);let i=(e-t+n)%n,a=(e+r)%n,c=t/(t+r);o[e]=o[i]+(o[a]-o[i])*c,s[e]=s[i]+(s[a]-s[i])*c}return{c:a,u:r,v:i,eixo:t,raio:o,alt:s}}function Gl(e,t){let n=e.raio.length,r=[];for(let i=0;i<n;i++){let a=(i+.5)/n*2*Math.PI,o=t(i,e.raio[i]);r.push([e.c[0]+(e.u[0]*Math.cos(a)+e.v[0]*Math.sin(a))*o+e.eixo[0]*e.alt[i],e.c[1]+(e.u[1]*Math.cos(a)+e.v[1]*Math.sin(a))*o+e.eixo[1]*e.alt[i],e.c[2]+(e.u[2]*Math.cos(a)+e.v[2]*Math.sin(a))*o+e.eixo[2]*e.alt[i]])}return r}var Kl=(e,t)=>e.map((n,r)=>{let i=[];for(let n=-t;n<=t;n++)i.push(e[(r+n+e.length)%e.length]);return i.sort((e,t)=>e-t)[i.length>>1]});function ql(e,t,n=2){let r=Wl(e,t),i=Kl(r.raio,n);return Gl(r,e=>i[e])}function Jl(e,t,n){let r=Rl(e);return e.map(e=>{let i=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],a=A(i,t),o=[i[0]-t[0]*a,i[1]-t[1]*a,i[2]-t[2]*a],s=Math.hypot(o[0],o[1],o[2]);return s<1e-9?e:I(e,o,n/s)})}function Yl(e,t,n=Il){let r=K(e,t);if(r>=n.min&&r<=n.max)return e;let i=r<n.min?n.min*1.15:n.max*.85,a=Math.sqrt(i/Math.max(r,1e-6)),o=Rl(e);return e.map(e=>{let n=[e[0]-o[0],e[1]-o[1],e[2]-o[2]],r=A(n,t);return[o[0]+t[0]*r+(n[0]-t[0]*r)*a,o[1]+t[1]*r+(n[1]-t[1]*r)*a,o[2]+t[2]*r+(n[2]-t[2]*r)*a]})}function Xl(e,t,n=1){let r=Wl(e,t),i=r.raio.length,a=0,o=0,s=0;for(let e=0;e<i;e++){let t=(e+.5)/i*2*Math.PI,n=Math.cos(t)*r.raio[e],c=Math.sin(t)*r.raio[e];a+=n*n,o+=n*c,s+=c*c}let c=.5*Math.atan2(2*o,a-s),l=Math.cos(c),u=Math.sin(c),d=0,f=0;for(let e=0;e<i;e++){let t=(e+.5)/i*2*Math.PI,n=Math.cos(t)*r.raio[e],a=Math.sin(t)*r.raio[e];d=Math.max(d,Math.abs(n*l+a*u)),f=Math.max(f,Math.abs(-n*u+a*l))}return d=Math.max(d*.9*n,1.2),f=Math.max(f*.9*n,1.2),Gl(r,e=>{let t=(e+.5)/i*2*Math.PI-c;return d*f/Math.hypot(f*Math.cos(t),d*Math.sin(t))})}function Zl(e,t,n,r=0,i=96){let{u:a,v:o}=B(t),s=[];for(let c=0;c<i;c++){let l=c/i*2*Math.PI;s.push([e[0]+(a[0]*Math.cos(l)+o[0]*Math.sin(l))*n+t[0]*r,e[1]+(a[1]*Math.cos(l)+o[1]*Math.sin(l))*n+t[1]*r,e[2]+(a[2]*Math.cos(l)+o[2]*Math.sin(l))*n+t[2]*r])}return s}var Ql=e=>{let t=Rl(e);return`${e.length}|${de(e).toFixed(2)}|${t.map(e=>e.toFixed(2)).join(`,`)}`};function $l(e,t,n,r){let i=zl(t);return r&&(i=r(i)),i=i.map(e.prender),i=Ul(i,n),i=zl(i).map(e.prender),Ul(i,n)}function*eu(e,t){let n=[{loop:e.loop,variant:e.variant},...e.alternatives.map(e=>({loop:e.loop,variant:e.variant}))],r=e=>e===t?-1:e===`aresta`?0:e===`fundo`?1:2;n.sort((e,t)=>r(e.variant)-r(t.variant));for(let e of n)e.loop.length>=8&&(yield{...e,rotulo:`leitura ${ue[e.variant]}`})}function*tu(e){let t=new Set,n=e=>{let n=Ql(e);return t.has(n)?!0:(t.add(n),!1)},r=[];for(let t of e.bases)for(let i of eu(t,e.leitura))n(i.loop)||(r.push({loop:i.loop,conf:t.confidence.score}),yield{etapa:`leitura`,rotulo:i.rotulo,loop:i.loop,sugestao:{sg:t,variant:i.variant},baixa:t.confidence.level===`baixa`});for(let t of e.irmas??[])for(let e of eu(t))n(e.loop)||(r.push({loop:e.loop,conf:t.confidence.score}),yield{etapa:`semente`,rotulo:`outro preparo detectado no mesmo lugar, ${e.rotulo}`,loop:e.loop,sugestao:{sg:t,variant:e.variant},baixa:t.confidence.level===`baixa`});let{u:i,v:a}=B(e.eixo),o=[{rotulo:`semente no topo, laço mais suave`,ponto:e.centro,opcoes:{loopSmooth:3,medianHalf:4}},{rotulo:`semente no topo, busca mais curta`,ponto:e.centro,opcoes:{maxRadius:5.5,cropRadius:8}}];for(let t of[.8,1.6])for(let n=0;n<6;n++){let r=n/6*2*Math.PI,s=e.prender(I(I(e.centro,i,Math.cos(r)*t),a,Math.sin(r)*t));o.push({rotulo:`semente a ${t.toString().replace(`.`,`,`)} mm do topo (${Math.round(r*180/Math.PI)}°)`,ponto:s})}for(let t of o){if(e.urgente?.())break;let i;try{i=e.sugerir(t.ponto,e.eixo,t.opcoes)}catch{continue}for(let e of eu(i))n(e.loop)||(r.push({loop:e.loop,conf:i.confidence.score}),yield{etapa:`semente`,rotulo:`${t.rotulo}, ${e.rotulo}`,loop:e.loop,sugestao:{sg:i,variant:e.variant},baixa:i.confidence.level===`baixa`})}let s=r.slice().sort((e,t)=>t.conf-e.conf).slice(0,3),c=e.eixo;for(let[t,r]of s.entries()){let i=`linha ${t+1}`,a=[{rotulo:`${i}: reamostrada e sem laços`,baixa:!1,fazer:()=>$l(e,r.loop,c)},{rotulo:`${i}: suavizada`,baixa:!1,fazer:()=>$l(e,r.loop,c,e=>Bl(e,8))},{rotulo:`${i}: suavizada forte`,baixa:!1,fazer:()=>$l(e,r.loop,c,e=>Bl(e,30))},{rotulo:`${i}: sem reentrâncias`,baixa:!1,fazer:()=>$l(e,r.loop,c,e=>ql(e,c,2))},{rotulo:`${i}: sem reentrâncias, mediana larga`,baixa:!1,fazer:()=>$l(e,r.loop,c,e=>ql(e,c,5))},{rotulo:`${i}: área ajustada`,baixa:!0,fazer:()=>$l(e,r.loop,c,e=>Yl(ql(e,c,2),c))}];for(let t of[-.1,.1,-.2,.2,-.3,.3,-.5,.5])a.push({rotulo:`${i}: ${t<0?`encolhida`:`dilatada`} ${Math.abs(t).toString().replace(`.`,`,`)} mm`,baixa:Math.abs(t)>=.3,fazer:()=>$l(e,r.loop,c,e=>Jl(ql(e,c,2),c,t))});for(let t of a){if(e.urgente?.())break;let r;try{r=t.fazer()}catch{continue}r.length<12||n(r)||(yield{etapa:`reparo`,rotulo:t.rotulo,loop:r,baixa:t.baixa})}}let l=s[0]?.loop??null;if(l){let t=e=>Yl(e,c),r=[{rotulo:`laço regularizado, área na faixa`,fazer:()=>$l(e,l,c,e=>t(ql(e,c,8)))},{rotulo:`elipse sobre o contorno`,fazer:()=>$l(e,l,c,e=>t(Xl(e,c)))},{rotulo:`elipse menor`,fazer:()=>$l(e,l,c,e=>t(Xl(e,c,.8)))},{rotulo:`elipse maior`,fazer:()=>$l(e,l,c,e=>t(Xl(e,c,1.2)))}];for(let e of r){let t;try{t=e.fazer()}catch{continue}t.length<12||n(t)||(yield{etapa:`ultimo-recurso`,rotulo:e.rotulo,loop:t,baixa:!0})}}let u=l?(()=>{let t=Rl(l);return A([t[0]-e.centro[0],t[1]-e.centro[1],t[2]-e.centro[2]],c)})():-1.5;for(let t of[3.4,2.8,4.2,2.4,5,3.8,2,6])for(let r of[u,u-.7,u+.7]){let i;try{i=$l(e,Zl(e.centro,k(c),t,r),c)}catch{continue}i.length<12||n(i)||(yield{etapa:`ultimo-recurso`,rotulo:`círculo de ${t.toString().replace(`.`,`,`)} mm sobre o preparo`,loop:i,baixa:!0})}}var nu=6;function ru(e,t,n,r,i,a){if(!t.length)return i;try{let o=ge({positions:e.positions,indices:e.indices,arco:n,oclusal:r},{detectarPreparos:!1});if(o.dentes.length<nu)return i;try{a?.(o.dentes.filter(e=>e.fdi>0&&!e.numeroIncerto).map(e=>({fdi:e.fdi,larguraMD:e.larguraMD,alturaCoroa:e.alturaCoroa,confianca:e.confianca.pontuacao})))}catch{}let s=new Int32Array(e.vertexCount).fill(-1);o.dentes.forEach((t,n)=>{for(let r of t.triangulos)for(let t=0;t<3;t++)s[e.indices[r*3+t]]=n});let c=e.positions;return t.map((t,n)=>{let r=-1,a=9;for(let n=0;n<e.vertexCount;n++){if(s[n]<0)continue;let e=(c[n*3]-t[0])**2+(c[n*3+1]-t[1])**2+(c[n*3+2]-t[2])**2;e<a&&(a=e,r=s[n])}let l=r>=0?o.dentes[r]:null;if(!l||!(l.fdi>0))return i[n]??null;let u=Math.floor(l.fdi/10),d=l.fdi%10,f=i[n];return{fdi:l.fdi,position:d,quadrant:u,arc:f?f.arc:0,side:u===2||u===3?1:-1,uncertain:l.numeroIncerto,pelosDentes:!0}})}catch{return i}}var iu={U:{p:14.5,z0:1.6},L:{p:13,z0:0}},au=.99,ou=4.4,su=4.7,cu={1:21,2:11,3:41,4:31};function lu(e){let{p:t,z0:n}=iu[e],r=e===`U`?1:-1,i=[],a=[],o=0,s=0,c=0;for(let e=0;e<=700;e++){let n=e*.05,r=-(n*n)/t;e&&(o+=Math.hypot(n-s,r-c)),i.push(n),a.push(o),s=n,c=r}let l=e=>{let t=0,n=a.length-1;for(;n-t>1;){let r=t+n>>1;a[r]<e?t=r:n=r}let r=(e-a[t])/(a[n]-a[t]||1);return i[t]+r*(i[n]-i[t])},u=e===`U`?[[1,-1],[2,1]]:[[4,-1],[3,1]],d=[],f={"-1":[],1:[]};for(let[i,a]of u){let o=0;for(let s=1;s<=7;s++){let[c,u,p]=w[e][s],m=o+c/2*au;o+=c*au;let h=l(m),g=-(h*h)/t,_=Math.hypot(2*h/t,1),v=[a*2*h/t/_,0,1/_],y=[a*h,r*(p+.8)+(e===`U`?.3:0),g+n],b=[v[2],0,-v[0]],x=e===`U`?[-b[0],0,-b[2]]:b,S=e===`U`?[0,-1,0]:[0,1,0],C=i*10+s;d.push({id:C,arch:e,type:s,a:c/2,b:u/2,H:p,pos:y,X:x,Y:S,Z:v,mesial:s>1?C-1:cu[i],distal:s<7?C+1:null}),f[a].push([a*h,y[1]+r*ou,g+n])}}let p=(e,t)=>{let n=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.hypot(n[0],n[1],n[2])||1;return[e[0]+n[0]/r*4,e[1]+n[1]/r*4,e[2]+n[2]/r*4]},m=f[-1],h=f[1];return{arch:e,teeth:d,gumPath:[p(m[6],m[5]),...m.slice().reverse(),...h,p(h[6],h[5])]}}var uu={16:`crown`,24:`onlay`,36:`crown`},du=[15026253,15898954,16111882,5020415,16777215];function fu(e){return e<-.03?0:e<.1?1:e<.35?2:e<1?3:4}var pu=.15,mu={min:5,max:220};function hu(e){return e.boundsTree||Dl(e,!e.getIndex()),e.boundsTree}var gu=()=>({point:new Q,distance:0,faceIndex:-1});function _u(e,t,n=1/0,r=gu()){return hu(e).closestPointToPoint(t,r,0,n)}function vu(e,t,n){let r=Math.max(1,Math.ceil(t.distanceTo(n)/pu)),i=[t.clone()],a=gu(),o=new Q;for(let s=1;s<r;s++){o.lerpVectors(t,n,s/r);let c=_u(e,o,1/0,a),l=c?c.point.clone():o.clone();l.distanceToSquared(i[i.length-1])>1e-8&&i.push(l)}return i}function yu(e){let t=new Q;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t}function bu(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2}function xu(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=a[0]*o[1]-o[0]*a[1];t+=(a[0]+o[0])*s,n+=(a[1]+o[1])*s,r+=s}if(Math.abs(r)<1e-12){for(let r of e)t+=r[0],n+=r[1];return[t/(e.length||1),n/(e.length||1)]}return[t/(3*r),n/(3*r)]}function Su(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];o[1]>t!=s[1]>t&&e<(s[0]-o[0])*(t-o[1])/(s[1]-o[1])+o[0]&&(r=!r)}return r}var Cu=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);function wu(e,t,n,r){let i=Cu(n,r,e),a=Cu(n,r,t),o=Cu(e,t,n),s=Cu(e,t,r);return(i>0&&a<0||i<0&&a>0)&&(o>0&&s<0||o<0&&s>0)}function Tu(e,t=0){let n=e.length;if(n<4)return!1;let r=new Float64Array(n+1);for(let t=0;t<n;t++){let i=e[t],a=e[(t+1)%n];r[t+1]=r[t]+Math.hypot(a[0]-i[0],a[1]-i[1])}let i=r[n];for(let a=0;a<n;a++){let o=e[a],s=e[(a+1)%n];for(let c=a+2;c<n;c++){if(a===0&&c===n-1)continue;let l=r[c]-r[a+1];if(!(Math.min(l,i-(r[c+1]-r[a]))<t)&&wu(o,s,e[c],e[(c+1)%n]))return!0}}return!1}function Eu(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=s[0]-o[0],l=s[1]-o[1],u=n*l-r*c;if(Math.abs(u)<1e-14)continue;let d=o[0]-t[0],f=o[1]-t[1],p=(d*l-f*c)/u,m=(d*r-f*n)/u;p>0&&m>=-1e-9&&m<=1+1e-9&&i.push({r:p,edge:a,f:Math.min(1,Math.max(0,m))})}return i}function Du(e,t,n){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2,o=Eu(e,t,Math.cos(a),Math.sin(a));if(!o.length)return null;let s=o[0],c=o[0];for(let e of o)e.r>s.r&&(s=e),e.r<c.r&&(c=e);if(s.r-c.r>.35)return null;r.push(s)}return r}function Ou(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=Cu(t,n,o)*r,l=Cu(t,n,s)*r;if(c>=0&&i.push(o),c>0&&l<0||c<0&&l>0){let e=c/(c-l);i.push([o[0]+(s[0]-o[0])*e,o[1]+(s[1]-o[1])*e])}}return i}function ku(e,t){let n=e.length;if(n<5)return e.slice();let r=0,i=-1;for(let t=1;t<n;t++){let n=Math.hypot(e[t][0]-e[0][0],e[t][1]-e[0][1]);n>i&&(i=n,r=t)}let a=new Uint8Array(n);a[0]=a[r]=1;let o=(r,i)=>{let s=e[r],c=e[i%n],l=Math.hypot(c[0]-s[0],c[1]-s[1])||1,u=-1,d=t;for(let t=r+1;t<i;t++){let n=Math.abs(Cu(s,c,e[t]))/l;n>d&&(d=n,u=t)}u<0||(a[u]=1,o(r,u),o(u,i))};return o(0,r),o(r,n),e.filter((e,t)=>a[t])}function Au(e,t){let n=xu(e);if(Su(n[0],n[1],e)&&Du(e,n,t))return n;let r=ku(e,.12),i=bu(r)>=0?1:-1,a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of r)a=Math.min(a,e[0]),o=Math.max(o,e[0]),s=Math.min(s,e[1]),c=Math.max(c,e[1]);let l=[[a,s],[o,s],[o,c],[a,c]];for(let e=0;e<r.length&&l.length>=3;e++)l=Ou(l,r[e],r[(e+1)%r.length],i);if(l.length<3||Math.abs(bu(l))<1e-4)return null;let u=xu(l);return Du(e,u,t)?u:null}function ju(e,t){let n=0;for(let r=0;r<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3;n+=e[i]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[i+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[i+2]*(e[a]*e[o+1]-e[a+1]*e[o])}return n/6}function Mu(e,t,n,r,i,a=1,o=1){let s=0,c=0,l=n/a,u=i/o;for(;s<l||c<u;){let d=t+s*a%n,f=t+(s+1)*a%n,p=r+c*o%i,m=r+(c+1)*o%i;s<l&&(c>=u||(s+1)/l<=(c+1)/u)?(e.push(d,f,p),s++):(e.push(d,m,p),c++)}}function Nu(e,t,n,r,i,a){for(let o=0;o<r;o+=i){let s=n+o,c=n+(o+i)%r;a?e.push(t,c,s):e.push(s,c,t)}}function Pu(e,t,n,r,i){let a=[],o=e=>Math.max(1,Math.round(r*i[e]/40));for(let s=0;s<n.length-1;s++){let c=n[s],l=n[s+1],u=e[c],d=e[l],f=t[c],p=t[l];if(!(u&&d)){if(u)Nu(a,f,p,i[l],o(l),!0);else if(d)Nu(a,p,f,i[c],o(c),!1);else if(i[c]!==i[l])Mu(a,f,i[c],p,i[l],o(c),o(l));else for(let e=0;e<40;e+=r){let t=(e+r)%40;a.push(f+e,f+t,p+t,f+e,p+t,p+e)}}}return a}function Fu(e){for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}}function Iu(e,t,n,i){let a=[],o=[],s=[];for(let c of e){o.push(a.length/3),s.push(!!c.c);let e=c.tb&&i?c.tb:0;if(c.c){a.push(0,c.y+(e?e*i(0,0):0),0);continue}let l=c.A??t*(c.k??1),d=c.B??n*(c.kz??c.k??1);for(let t=0;t<40;t++){let n=r[t]*l,o=u[t]*d;a.push(n,c.y+(e?e*i(n,o):0),o)}}return Lu(a,o,s)}function Lu(e,t,n,r){let i=t.map((e,t)=>t),a=r??n.map(e=>e?1:40),o=Pu(n,t,i,1,a),s=t.length-1,c=Pu(n,t,i.filter(e=>e===0||e===s||n[e]||e%2==0),2,a);return ju(e,o)<0&&(Fu(o),Fu(c)),{positions:Float32Array.from(e),index:new Uint32Array(o),starts:t,lowIndex:new Uint32Array(c)}}var Ru=e=>e.marginN??40,zu=.2;function Bu(e,t){let n=Math.min(e/.45,1);return .8+.2*(t===`Côncavo`?n**1.7:t===`Reto`?n:1-(1-n)**2)-.13*y(.55,1,e)}function Vu(e,t){return t<=2?1-.55*e**1.6:t===3?1-.3*e**1.6:1}function Hu(e,t,n,r){if(e>=6){let e=[[-.45,.45,1],[.45,.45,.95],[-.45,-.45,.9],[.45,-.45,.85]],i=(.42*Math.min(t,n))**2;return(a,o)=>{let s=0;for(let r of e){let e=a-r[0]*t,c=o-r[1]*n;s+=r[2]*Math.exp(-(e*e+c*c)/i)}return 1.6*r*s}}if(e>=4){let e=(.5*t)**2;return(t,i)=>{let a=i-.45*n,o=i+.45*n;return r*(1.6*Math.exp(-(t*t+a*a)/e)+1.1*Math.exp(-(t*t+o*o)/e))}}if(e===3){let e=(.6*t)**2;return(t,i)=>{let a=i-.1*n;return 2*r*Math.exp(-(t*t+a*a)/e)}}let i=t*t*.8;return e=>.5*r*Math.exp(-(e*e)/i)}function Uu(e,t,n,r=1){let i=[{c:!0,y:-3},{k:.66,y:-3},{k:.8,y:0}],a=r<1;for(let o=1;o<=12;o++){let s=o/12*r,c=Bu(s,n);i.push({k:c,kz:c*Vu(s,t),y:s*e,tb:a?0:y(.75,1,s)})}let o=i[i.length-1];for(let e=1;e<8;e++){let t=1-e/8;i.push({k:o.k*t,kz:o.kz*t,y:o.y,tb:+!a})}return i.push({c:!0,y:o.y,tb:+!a}),i}function Wu(e,t,n){let r=e=>Vu(Math.min(1,Math.max(0,e/t)),n),i=r(e);return[{k:.74,kz:.74*r(0),y:0,w:!0},{k:.69,kz:.69*r(e*.5),y:e*.5,w:!0},{k:.6,kz:.6*r(e*.93),y:e*.93,w:!0},{k:.53,kz:.53*i,y:e,w:!0,r:!0},{k:.38,kz:.38*i,y:e,r:!0},{k:.18,kz:.18*i,y:e,r:!0}]}function Gu(e,t,n){let r=Bu(n,`Convexo`)-.035,i=r*Vu(n,t),a=n*e;return[{k:r,kz:i,y:a},{k:r*.7,kz:i*.7,y:a,r:!0},{k:r*.35,kz:i*.35,y:a,r:!0}]}var Ku=(e,t,n=!1)=>t===`crown`?{kind:t,hs:e.H-2,virtual:n}:{kind:t,cut:.85,virtual:n},qu=(e,t)=>t.kind===`crown`?t.hs:t.cut*e.H;function Ju(e){return Iu(Uu(e.H,e.type,`Convexo`),e.a,e.b,Hu(e.type,e.a,e.b,1))}function Yu(e,t){return t.kind===`crown`?Iu([{c:!0,y:-3},{k:.64,y:-3},...Wu(t.hs,e.H,e.type).map(e=>({k:e.k,kz:e.kz,y:e.y})),{c:!0,y:t.hs}],e.a,e.b,null):Iu(Uu(e.H,e.type,`Convexo`,t.cut),e.a,e.b,null)}function Xu(e,t,n){let r=n.cimento/1e3,i=n.largura/100,a=e.a*i,o=e.b,s=Hu(e.type,a,o,n.cuspide/100),c,l,u;t.kind===`crown`?(c=Wu(t.hs,e.H,e.type),l=t.hs,u=0):(u=t.cut,c=Gu(e.H,e.type,u),l=u*e.H);let d=Math.max(e.H+n.altura,l+r+zu),f=c.map(t=>({A:e.a*t.k+(t.w?r:0),B:e.b*t.kz+(t.w?r:0),y:t.y+(t.r?r:0)})).reverse(),p=[{c:!0,y:l+r},...f],m=p.length,h=u?l:0;for(let t=0;t<=12;t++){let r=t/12,a=u+(1-u)*r,s=Bu(a,n.emerg),c=1+(i-1)*(u?y(0,.5,r):y(0,.45,a));p.push({A:e.a*c*s,B:o*s*Vu(a,e.type),y:h+(d-h)*r,tb:y(u?u+(1-u)*.4:.75,1,a)})}let g=p[p.length-1];for(let e=1;e<8;e++){let t=1-e/8;p.push({A:g.A*t,B:g.B*t,y:g.y,tb:1})}p.push({c:!0,y:g.y,tb:1});let _=Iu(p,a,o,s);return{..._,outerStart:_.starts[m],side:_.starts.slice(m,m+12+1),marginY:h,cut:u}}function Zu(e,t,n=40){let r=[];for(let i of[10,30,0,20])for(let a=0;a<t.length-1;a++){let o=(t[a]+(a===0?i*n/40:i))*3,s=(t[a+1]+i)*3;r.push(e[o],e[o+1],e[o+2],e[s],e[s+1],e[s+2])}return new Float32Array(r)}function Qu(e,t,n){let r=Hu(e,1,1,n);return{equator:(e,t,n)=>(Math.abs(Math.cos(e)/t)**2.6+Math.abs(Math.sin(e)/n)**2.6)**(-1/2.6),wall:(n,r)=>({r:Bu(r,t)*Math.hypot(Math.cos(n),Vu(r,e)*Math.sin(n)),h:r}),relief:(e,t)=>r(e,t)}}var $u=.15,ed={min:12,max:56},td=.03,nd=.06,rd=.6,id={area:1,fraction:.04},ad=.8,od=.03,sd=.35,cd=1.2,ld=.8,ud=3.5,dd=.5,fd=.4,pd={from:.5,to:2},md=.3;function hd(e,t){return e*y(pd.from,pd.to,t)}function gd(e,t){let n=e-t;if(n>=.3)return e;if(n<=-.3)return t;let r=(n+md)/(2*md);return t+md*r*r}var _d={queries:0,heightChecks:0,constrain:0,skipped:0,pushed:0,audits:0,disabled:!1,reset(){this.queries=this.heightChecks=this.constrain=this.skipped=this.pushed=this.audits=0}},vd=[[.5,1],[1,2],[2,3],[3,1/0]],yd={areaRatio:12,above:13,below:8,space:2.2},bd={tableFactor:1.4,aboveNeighbors:.5},xd=new We,Sd=new Q,Cd=new Q,wd=new Q,Td=new Q;function Ed(e,t,n,r){let i=new Map,a=[],o=new Uint32Array(n.length*3);for(let s=0;s<n.length;s++)for(let c=0;c<3;c++){let l=t[n[s]*3+c],u=i.get(l);u===void 0&&(u=a.length/3,i.set(l,u),a.push(e[l*3],e[l*3+1],e[l*3+2])),o[s*3+(r&&c?3-c:c)]=u}let s=new Mt;return s.setAttribute(`position`,new ht(new Float32Array(a),3)),s.setIndex(new ht(o,1)),Dl(s),s}var Dd=[.08,.2,.45];function Od(e,t,n,r,i=!1){let a=e.getAttribute(`position`).array,o=e.getIndex().array,s=new Q(1,0,0);Math.abs(s.dot(r))>.9&&s.set(0,1,0),s.addScaledVector(r,-s.dot(r)).normalize();let c=new Q().crossVectors(r,s),l=t.map(e=>(Sd.subVectors(e,n),[Sd.dot(s),Sd.dot(c)])),u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e of l)u=Math.min(u,e[0]),d=Math.max(d,e[0]),f=Math.min(f,e[1]),p=Math.max(p,e[1]);let m=(e,t,r)=>{let i=e-n.x,a=t-n.y,o=r-n.z,m=i*s.x+a*s.y+o*s.z,h=i*c.x+a*c.y+o*c.z;return m>=u&&m<=d&&h>=f&&h<=p&&Su(m,h,l)},h=new Vt().setFromPoints(t),g=h.getSize(Sd).length()/2+2,_=(h.min.x+h.max.x)/2,v=(h.min.y+h.max.y)/2,y=(h.min.z+h.max.z)/2,b=e=>{let t=a[e*3]-_,n=a[e*3+1]-v,i=a[e*3+2]-y,o=t*r.x+n*r.y+i*r.z;return t*t+n*n+i*i-o*o},x=[],S=new Map,C=Math.floor(o.length/3);for(let e=0;e<C;e++)b(o[e*3])>g*g||(S.set(e,x.length),x.push(e));let w=x.length,T=new Map,E=new Int32Array(w*3).fill(-1),D=new Uint8Array(w);for(let e=0;e<w;e++){let t=x[e];for(let n=0;n<3;n++){let r=o[t*3+n],i=o[t*3+(n+1)%3],a=r<i?r*4294967296+i:i*4294967296+r,s=T.get(a);s===void 0?T.set(a,e*3+n):(E[e*3+n]=Math.floor(s/3),E[s]=e)}b(o[t*3])>(g-.7)*(g-.7)&&(D[e]=1)}let O=new Float64Array(w),k=new Uint8Array(w);for(let e=0;e<w;e++){let t=x[e],n=o[t*3]*3,r=o[t*3+1]*3,i=o[t*3+2]*3;Cd.set(a[r]-a[n],a[r+1]-a[n+1],a[r+2]-a[n+2]),wd.set(a[i]-a[n],a[i+1]-a[n+1],a[i+2]-a[n+2]),O[e]=Cd.cross(wd).length()/2,k[e]=+!!m((a[n]+a[r]+a[i])/3,(a[n+1]+a[r+1]+a[i+1])/3,(a[n+2]+a[r+2]+a[i+2])/3)}let A=-1,j=1/0;for(let t of i?[1]:[1,-1]){xd.origin.copy(n),xd.direction.copy(r).multiplyScalar(t);let i=hu(e).raycastFirst(xd,2,0,25);i&&i.distance<j&&i.faceIndex!=null&&(j=i.distance,A=S.get(i.faceIndex)??-1)}let M=new ve,N=new Vt;for(let n of Dd){let r=new Uint8Array(w);for(let i=0;i<t.length;i++)M.start.copy(t[i]),M.end.copy(t[(i+1)%t.length]),N.makeEmpty().expandByPoint(M.start).expandByPoint(M.end).expandByScalar(n),hu(e).shapecast({intersectsBounds:e=>e.intersectsBox(N),intersectsTriangle:(e,t)=>{let i=S.get(t);return i!==void 0&&!r[i]&&e.closestPointToSegment(M)<n&&(r[i]=1),!1}});let i=new Int32Array(w).fill(-1),s=[],c=[];for(let e=0;e<w;e++){if(r[e]||i[e]>=0)continue;let t=s.length,n={leak:!1,touch:!1,inside:0,total:0};for(s.push(n),i[e]=t,c.push(e);c.length;){let e=c.pop();D[e]&&(n.leak=!0),n.total+=O[e],k[e]&&(n.inside+=O[e]);for(let a=0;a<3;a++){let o=E[e*3+a];o<0||(r[o]?n.touch=!0:i[o]<0&&(i[o]=t,c.push(o)))}}}let l=-1,u=e=>e>=0&&!s[e].leak&&s[e].touch;if(A>=0&&u(i[A]))l=i[A];else for(let e=0;e<s.length;e++)u(e)&&s[e].inside>.5*s[e].total&&(l<0||s[e].inside>s[l].inside)&&(l=e);if(l<0)continue;let d=[],f=new Set;for(let e=0;e<w;e++)if(i[e]===l){d.push(x[e]);for(let t=0;t<3;t++)f.add(o[x[e]*3+t])}for(let e=0;e<w;e++){if(!r[e])continue;let t=x[e],n=o[t*3],i=o[t*3+1],s=o[t*3+2];(f.has(n)||f.has(i)||f.has(s))&&(k[e]||m(a[n*3],a[n*3+1],a[n*3+2])||m(a[i*3],a[i*3+1],a[i*3+2])||m(a[s*3],a[s*3+1],a[s*3+2]))&&d.push(t)}return d}return null}function kd(e,t,n){let r=new Float64Array(n.length*3);for(let i=0;i<n.length;i++){let a=t[n[i]*3]*3,o=t[n[i]*3+1]*3,s=t[n[i]*3+2]*3,c=e[o]-e[a],l=e[o+1]-e[a+1],u=e[o+2]-e[a+2],d=e[s]-e[a],f=e[s+1]-e[a+1],p=e[s+2]-e[a+2];r[i*3]=l*p-u*f,r[i*3+1]=u*d-c*p,r[i*3+2]=c*f-l*d}return r}function Ad(e,t,n){let r=0;for(let i=0;i<e.length;i+=3){let a=e[i],o=e[i+1],s=e[i+2],c=Math.hypot(a,o,s),l=(a*t.x+o*t.y+s*t.z)*n;l<0&&c>0&&(r+=l*l/(2*c))}return r}function jd(e,t,n){let r=0;for(let i=0;i<e.length;i+=3){let a=e[i],o=e[i+1],s=e[i+2],c=Math.hypot(a,o,s);(a*t.x+o*t.y+s*t.z)*n<-.07*c&&(r+=c/2)}return r}var Md=1.5,Nd=.3,Pd=class t{id;type;origin=new Q;X=new Q;Y=new Q;Z=new Q;quat=new Ct;mesialSign;prep;neighbors=null;ring=new Float32Array(120);ringDense=new Float32Array(720);area=0;prepArea=0;undercut=0;tilt=0;dims;scanSign=1;shape=null;warnings=[];sideSource=`centroide`;sideConfidence=1;buccalFlipped=!1;archSagitta=null;input;toLocal=new st;toScan=new st;profiles=[];yTop=0;opp=null;intr=new Map;constructor(e){this.id=e,this.type=i(e);let t=Math.floor(e/10);this.mesialSign=t===2||t===4?1:-1}get retention(){return this.undercut>id.area&&this.undercut>id.fraction*this.prepArea}dispose(){this.prep&&kl(this.prep),this.neighbors&&kl(this.neighbors)}local(e,t=new Q){return t.copy(e).applyMatrix4(this.toLocal)}toScanMatrix(){return this.toScan}scan(e,t=new Q){return t.copy(e).applyMatrix4(this.toScan)}withBuccalFlip(e){return t.build({...this.input,buccalFlip:e})}static build(n){let{own:r,opp:i,loop:a}=n,o=r.getAttribute(`position`),s=r.getIndex();if(!o||!s||a.length<3)return`Não foi possível ler o scan desta arcada.`;let c=o.array,l=s.array,u=new t(n.id);u.input=n,u.buccalFlipped=!!n.buccalFlip;let d=new Q;for(let e of a)d.add(e);d.multiplyScalar(1/a.length);let f=yu(a);if(f.lengthSq()<1e-10)return`Os pontos marcados estão alinhados: contorne o preparo.`;f.normalize();let p=!1;if(n.hint)f.dot(n.hint.Y)<0&&f.negate(),p=!0;else if(i){let e=hu(i).closestPointToPoint(d,void 0,0,40);if(e){let t=e.point.clone().sub(d).dot(f);Math.abs(t)>.3&&(t<0&&f.negate(),p=!0)}}let m=`A linha de margem se cruza. Desfaça os últimos pontos e contorne o preparo em um único sentido.`;{let e=new Q(1,0,0);Math.abs(e.dot(f))>.9&&e.set(0,1,0),e.addScaledVector(f,-e.dot(f)).normalize();let t=new Q().crossVectors(f,e),n=a.map(n=>(Sd.subVectors(n,d),[Sd.dot(e),Sd.dot(t)]));if(Tu(n,1))return m;let r=Math.abs(bu(n));if(r>mu.max*1.3)return`O contorno marcado é grande demais para um dente (${r.toFixed(1).replace(`.`,`,`)} mm²). Marque só a margem do preparo.`}let h;if(p)h=Od(r,a,d,f,!0);else{let e=f.clone().negate(),t=Od(r,a,d,f,!0),n=Od(r,a,d,e,!0),i=(e,t)=>{if(!e||e.length<8)return{faces:-1/0,rise:-1/0};let n=kd(c,l,e),r=0,i=0,a=0;for(let o=0;o<n.length;o+=3){let s=Math.hypot(n[o],n[o+1],n[o+2]);r+=n[o]*t.x+n[o+1]*t.y+n[o+2]*t.z;let u=e[o/3],f=l[u*3]*3,p=l[u*3+1]*3,m=l[u*3+2]*3,h=(c[f]+c[p]+c[m])/3-d.x,g=(c[f+1]+c[p+1]+c[m+1])/3-d.y,_=(c[f+2]+c[p+2]+c[m+2])/3-d.z;i+=(h*t.x+g*t.y+_*t.z)*s,a+=s}return{faces:Math.sign(r),rise:a?i/a:0}},o=i(t,f),s=i(n,e);(t&&n&&t.length===n.length&&t.reduce((e,t)=>e+t,0)===n.reduce((e,t)=>e+t,0)?s.rise>o.rise:s.faces>o.faces||s.faces===o.faces&&s.rise>o.rise)?(f.copy(e),h=n):h=t}if(!h||h.length<8)return h?`Não foi possível ler a superfície do preparo dentro da linha. Confira se a linha contorna o preparo.`:`A linha não fecha uma região sobre o preparo. Marque a margem contornando o preparo inteiro, sempre sobre o dente preparado.`;let g=h,_=kd(c,l,g),v=new Q;for(let e=0;e<_.length;e+=3)v.x+=_[e],v.y+=_[e+1],v.z+=_[e+2];let y=v.dot(f)<0?-1:1,x=v.clone().multiplyScalar(y);x.lengthSq()>1e-12?x.normalize():x.copy(f);let S=f.clone(),C=Ad(_,S,y),w=new Q;for(let e of[.25,.5,.75,1]){w.copy(f).lerp(x,e).normalize();let t=Ad(_,w,y);t<C-1e-9&&(C=t,S.copy(w))}for(let e of[.14,.07,.035]){let t=new Q(1,0,0);Math.abs(t.dot(S))>.9&&t.set(0,1,0),t.addScaledVector(S,-t.dot(S)).normalize();let n=new Q().crossVectors(S,t),r=S.clone();for(let i=0;i<8;i++){let a=i/8*b;if(w.copy(r).addScaledVector(t,Math.cos(a)*e).addScaledVector(n,Math.sin(a)*e).normalize(),w.dot(f)<.86)continue;let o=Ad(_,w,y);o<C-1e-9&&(C=o,S.copy(w))}}if(u.tilt=Math.acos(e(S.dot(f),-1,1))*180/Math.PI,u.tilt>1){let e=Od(r,a,d,S,!0);if(e&&e.length>=8){g=e,_=kd(c,l,g),v.set(0,0,0);for(let e=0;e<_.length;e+=3)v.x+=_[e],v.y+=_[e+1],v.z+=_[e+2];y=v.dot(S)<0?-1:1}}u.undercut=jd(_,S,y);for(let e=0;e<_.length;e+=3)u.prepArea+=Math.hypot(_[e],_[e+1],_[e+2])/2;u.Y.copy(S);let T=new Q(1,0,0);Math.abs(T.dot(S))>.9&&T.set(0,1,0),T.addScaledVector(S,-T.dot(S)).normalize();let E=new Q().crossVectors(S,T),D=a.map(e=>(Sd.subVectors(e,d),[Sd.dot(T),Sd.dot(E)]));if(Tu(D,1))return m;u.area=Math.abs(bu(D));let O=u.area.toFixed(1).replace(`.`,`,`)+` mm²`;if(u.area<mu.min)return`O contorno marcado é pequeno demais para um dente (${O}). Marque a margem em volta de todo o preparo.`;if(u.area>mu.max)return`O contorno marcado é grande demais para um dente (${O}). Marque só a margem do preparo.`;if(u.prepArea>yd.areaRatio*u.area)return`A superfície dentro da linha (${u.prepArea.toFixed(0)} mm²) é grande demais para o contorno marcado (${O}). Marque a margem sobre o dente preparado, contornando-o por inteiro.`;let k=Au(D,40);if(!k)return`O contorno tem reentrâncias que o motor ainda não reproduz. Marque a margem com um contorno mais regular.`;u.origin.copy(d).addScaledVector(T,k[0]).addScaledVector(E,k[1]);let A=o.count,j=0,M=0,N=0,P=0,F=0,I=0,ee=0,L=0,R=u.origin,te=e=>{j=M=N=P=F=I=0;for(let t=0;t<A;t++){let n=c[t*3]-R.x,r=c[t*3+1]-R.y,i=c[t*3+2]-R.z,a=n*S.x+r*S.y+i*S.z;if(a<e||a>14)continue;let o=n*T.x+r*T.y+i*T.z,s=n*E.x+r*E.y+i*E.z;o*o+s*s>144||(j+=o*o,M+=o*s,N+=s*s,P+=o,F+=s,I++)}};te(1),I<200&&te(-3);for(let e=0;e<A;e++){let t=c[e*3]-R.x,n=c[e*3+1]-R.y,r=c[e*3+2]-R.z;ee+=t*T.x+n*T.y+r*T.z,L+=t*E.x+n*E.y+r*E.z}ee/=A||1,L/=A||1;let ne=1,re=0,z=!1;if(I>=20){let e=j/I-(P/I)**2,t=N/I-(F/I)**2,n=M/I-P/I*(F/I),r=.5*Math.atan2(2*n,e-t);ne=Math.cos(r),re=Math.sin(r);let i=e*ne*ne+2*n*ne*re+t*re*re,a=e+t-i;z=i>1.25*Math.max(a,1e-9)}let B=Math.hypot(ee,L);!z&&B>1&&(ne=-L/B,re=ee/B);let V=-re,H=ne;{let t=new Map;for(let e=0;e<A;e+=2){let n=c[e*3]-R.x,r=c[e*3+1]-R.y,i=c[e*3+2]-R.z,a=n*S.x+r*S.y+i*S.z;if(a<1||a>14)continue;let o=n*T.x+r*T.y+i*T.z,s=n*E.x+r*E.y+i*E.z;if(o*o+s*s>625)continue;let l=o*ne+s*re;if(Math.abs(l)<2.5)continue;let u=Math.floor((l+2.5*Math.sign(l))/7),d=t.get(u);d||t.set(u,d={n:0,x:0,y:0,a:0}),d.n++,d.x+=o,d.y+=s,d.a+=l}let r=[0],i=[0],a=[0];for(let e of t.values())e.n>=60&&(r.push(e.x/e.n),i.push(e.y/e.n),a.push(e.a/e.n));let o=NaN,s=0,l=0,d=0,f=r.length;if(f>=3){let e=0,t=0,n=0,c=0,u=0,p=0,m=0,h=0;for(let a=0;a<f;a++){let o=r[a],s=i[a],l=o*o+s*s;e+=o,t+=s,n+=o*o,c+=s*s,u+=o*s,p+=o*l,m+=s*l,h+=l}let g=[[n,u,e],[u,c,t],[e,t,f]],_=[-p,-m,-h],v=e=>e[0][0]*(e[1][1]*e[2][2]-e[1][2]*e[2][1])-e[0][1]*(e[1][0]*e[2][2]-e[1][2]*e[2][0])+e[0][2]*(e[1][0]*e[2][1]-e[1][1]*e[2][0]),y=v(g);if(Math.abs(y)>1e-9){let n=e=>g.map((t,n)=>t.map((t,r)=>r===e?_[n]:t)),c=v(n(0))/y,u=v(n(1))/y,p=v(n(2))/y;s=-c/2,l=-u/2;let m=Math.sqrt(Math.max(0,s*s+l*l-p)),h=0;for(let e of a)h=Math.max(h,Math.abs(e));if(h=Math.min(h,m),m>=10&&m<=120){o=m-Math.sqrt(Math.max(0,m*m-h*h));let n=e/f,a=t/f,c=0,u=0;for(let e=0;e<f;e++){let t=(r[e]-n)*V+(i[e]-a)*H,o=Math.hypot(r[e]-s,i[e]-l)-m;c+=t*t,u+=o*o}d=c>1e-9?1-Math.sqrt(u/c):0}}}Number.isFinite(o)&&o>=.3?(V*-s+H*-l<0&&(V=-V,H=-H),u.sideSource=`arcada`,u.sideConfidence=e(o/Md,0,1)*e(.5+d,.3,1),u.archSagitta=o):(V*-ee+H*-L<0&&(V=-V,H=-H),u.sideSource=`centroide`,u.sideConfidence=Nd,u.archSagitta=Number.isFinite(o)?o:null),n.buccalFlip&&(V=-V,H=-H)}u.Z.copy(T).multiplyScalar(V).addScaledVector(E,H).normalize(),n.hint&&(u.Z.copy(n.hint.Z).addScaledVector(S,-n.hint.Z.dot(S)).normalize(),u.sideSource=`eixos`,u.sideConfidence=1),u.X.crossVectors(u.Y,u.Z).normalize();let ie=new st().makeBasis(u.X,u.Y,u.Z);u.quat.setFromRotationMatrix(ie),u.toScan.copy(ie).setPosition(u.origin),u.toLocal.copy(u.toScan).invert(),u.scanSign=y<0?-1:1,u.prep=Ed(c,l,g,y<0);let ae=new Uint8Array(Math.floor(l.length/3));for(let e of g)ae[e]=1;let oe=new Vt().setFromPoints(a).expandByScalar(rd),U=[],se=rd*rd,W=n.hint?.ownTriangles??0;for(let e=0;e<ae.length;e++){if(ae[e]||e<W)continue;let t=l[e*3]*3,n=l[e*3+1]*3,r=l[e*3+2]*3,i=(c[t]+c[n]+c[r])/3,o=(c[t+1]+c[n+1]+c[r+1])/3,s=(c[t+2]+c[n+2]+c[r+2])/3;if(!((i-R.x)**2+(o-R.y)**2+(s-R.z)**2>256)){if(oe.containsPoint(Sd.set(i,o,s))){let e=!1;for(let t of a)if(t.distanceToSquared(Sd)<se){e=!0;break}if(e)continue}U.push(e)}}u.neighbors=U.length?Ed(c,l,U,y<0):null;let ce=a.map(e=>u.local(e)),le=Du(ce.map(e=>[e.x,e.z]),[0,0],240);if(!le)return`O contorno tem reentrâncias que o motor ainda não reproduz. Marque a margem com um contorno mais regular.`;let ue={point:new Q,distance:0,faceIndex:-1};for(let e=0;e<240;e++){let t=le[e];Cd.lerpVectors(ce[t.edge],ce[(t.edge+1)%ce.length],t.f);let n=hu(r).closestPointToPoint(u.scan(Cd,wd),ue,0,.5);n&&u.local(n.point,Cd),u.ringDense[e*3]=Cd.x,u.ringDense[e*3+1]=Cd.y,u.ringDense[e*3+2]=Cd.z}for(let e=0;e<40;e++)for(let t=0;t<3;t++)u.ring[e*3+t]=u.ringDense[e*3*6+t];let de=u.prep.getAttribute(`position`),fe=-1/0;for(let e=0;e<de.count;e++)fe=Math.max(fe,u.local(Sd.fromBufferAttribute(de,e),Cd).y);u.yTop=fe+1;let G=0,pe=0;for(let t=0;t<40;t++){let n=t/40*b,r=Math.cos(n),i=Math.sin(n),a=Math.hypot(u.ring[t*3],u.ring[t*3+2]),o=e(Math.ceil(a/td),32,200),s=new Float32Array((o+1)*3);s[0]=u.ring[t*3],s[1]=u.ring[t*3+1],s[2]=u.ring[t*3+2];let c=0;for(let e=1;e<=o;e++){let t=a*(1-e/o),n=t*r,l=t*i,d=u.heightAt(n,l);if(pe++,s[e*3]=n,s[e*3+2]=l,d===null)G++,s[e*3+1]=NaN;else{s[e*3+1]=d;for(let t=c+1;t<e;t++)s[t*3+1]=s[c*3+1]+(d-s[c*3+1])*(t-c)/(e-c);c=e}}for(let e=c+1;e<=o;e++)s[e*3+1]=s[c*3+1];u.profiles.push(s)}if(G>pe*.35)return u.dispose(),`Não foi possível ler a superfície do preparo dentro da linha. Confira se a linha contorna o preparo.`;let me=1/0,he=-1/0,K=1/0;for(let e=0;e<40;e++)K=Math.min(K,u.ring[e*3+1]);for(let e of u.profiles)for(let t=1;t<e.length;t+=3)me=Math.min(me,e[t]),he=Math.max(he,e[t]);return he-K>yd.above||K-me>yd.below?(u.dispose(),`A superfície dentro da linha sobe ou desce mais do que um preparo. Confira se a linha contorna só o dente preparado.`):(u.opp=i,u.measure(i),u.dims.xPlus-u.dims.xMinus<yd.space?(u.dispose(),`Não há espaço entre os dentes vizinhos para uma peça neste lugar. Confira a linha de margem.`):u)}heightAt(e,t){xd.origin.set(e,this.yTop,t).applyMatrix4(this.toScan),xd.direction.copy(this.Y).negate();let n=hu(this.prep).raycastFirst(xd,2);return n?this.yTop-n.distance:null}castLocal(e,t,n,r,i,a,o,s){xd.origin.set(t,n,r).applyMatrix4(this.toScan),xd.direction.set(i,a,o).transformDirection(this.toScan);let c=hu(e).raycastFirst(xd,2,0,s);return c?c.distance:null}setOpposing(e){e!==this.opp&&(this.opp=e,this.measure(e))}measure(e){let t=this.ring,r=1/0,i=-1/0,a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e=0;e<40;e++)r=Math.min(r,t[e*3]),i=Math.max(i,t[e*3]),a=Math.min(a,t[e*3+2]),o=Math.max(o,t[e*3+2]),s=Math.min(s,t[e*3+1]);for(let e of this.profiles)for(let t=1;t<e.length;t+=3)c=Math.max(c,e[t]);let l=(a+o)/2,u=(o-a)/2/ld,d=(r+i)/2,[f,,p]=w[n(this.id)][this.type],m=this.shape??Qu(this.type,`Convexo`,1),h=0;for(let e=-6;e<=6;e++)for(let t=-6;t<=6;t++)h=Math.max(h,m.relief(e/6*.87,t/6*.87));let g=1/0;if(e)for(let t=0;t<=8;t++)for(let n=0;n<=8;n++){let a=r+(i-r)*t/8,o=l+u*.9*(2*n/8-1),c=this.castLocal(e,a,s-1,o,0,1,0,40);c!==null&&(g=Math.min(g,s-1+c))}let _=c+zu+.3,v=g<1/0?Math.max(g,_+h):c+2,y=1/0,b=1/0,x=-1/0;if(this.neighbors){let e=this.neighbors.getAttribute(`position`);for(let t=0;t<e.count;t++)this.local(Sd.fromBufferAttribute(e,t),Cd),Math.abs(Cd.z-l)<u&&Math.abs(Cd.x-d)<f+4&&(x=Math.max(x,Cd.y));let t=Math.min(v,Math.max(c+1,x>_?x:p));for(let e of[.4,.55,.7,.85])for(let n of[-.35,0,.35]){let r=t*e,i=l+u*n,a=this.castLocal(this.neighbors,d,r,i,1,0,0,14),o=this.castLocal(this.neighbors,d,r,i,-1,0,0,14);a!==null&&a<=f/2+ud&&(y=Math.min(y,a)),o!==null&&o<=f/2+ud&&(b=Math.min(b,o))}}let S=(i-r)/2/ld,T=y<1/0,E=b<1/0,D=Math.max(bd.tableFactor*p,x>_?x+bd.aboveNeighbors:0,_+h+.5),O,k;if(this.warnings.length=0,g<1/0&&g-.05<=D)O=g-C-h,k=`antagonista`;else if(x>_?(O=x-.2-h,k=`vizinhos`):(O=p,k=`tabela`),g<1/0){let e=e=>e.toFixed(1).replace(`.`,`,`);this.warnings.push(`Antagonista fora de oclusão: a superfície oposta está a ${e(g)} mm da margem; a altura da peça foi limitada a ${e(D)} mm (${k===`vizinhos`?`altura dos vizinhos`:`altura de tabela`}) e a peça não toca o antagonista.`)}this.dims={xPlus:T?d+y:d+S,xMinus:E?d-b:d-S,hasPlus:T,hasMinus:E,oz:l,b:u,H0:Math.min(Math.max(O,_),D-h),heightFrom:k,Hmax:D,antagonistAt:g<1/0?g:null}}roof(e,t=1){return this.intrados(e,t).roofY}intrados(t,n=1){let r=`${t}|${n}`,i=this.intr.get(r);if(i)return i;let a=t=>n>0?e(t/n,0,1):1,o=this.prep,s=hu(o),c=o.getAttribute(`position`),l=o.getIndex(),u={point:new Q,distance:0,faceIndex:-1},d=new Q,f=new Q,p=(e,t)=>{let n=Math.hypot(e.x,e.z),r=s.closestPointToPoint(this.scan(e,f),u,0,nd);if(!r)return;let i=r.faceIndex*3;Cd.fromBufferAttribute(c,l.getX(i)),wd.fromBufferAttribute(c,l.getX(i+1)),Td.fromBufferAttribute(c,l.getX(i+2)),d.subVectors(wd,Cd).cross(Td.sub(Cd)),d.lengthSq()<1e-20?d.copy(this.Y):d.normalize(),f.copy(r.point).addScaledVector(d,t);for(let e=0;e<2&&t>0;e++){let e=s.closestPointToPoint(f,u,0,t);if(!e||e.distance>t-.002||e.distance<1e-6)break;f.sub(e.point).multiplyScalar(t/e.distance).add(e.point)}this.local(f,e);let a=Math.hypot(e.x,e.z),o=n+t+td;a>o&&(e.x*=o/a,e.z*=o/a)},m=[],h=0;for(let e of this.profiles){let t=e.length/3,n=new Float32Array(t);for(let r=1;r<t;r++)n[r]=n[r-1]+Math.hypot(e[r*3]-e[r*3-3],e[r*3+1]-e[r*3-2],e[r*3+2]-e[r*3-1]);m.push(n),h=Math.max(h,n[t-1])}let g=e(Math.ceil(h/$u),ed.min,ed.max),_=[],v=[],y=new Q,b=-1/0,x=this.profiles[0],S=x.length/3-1;y.set(x[S*3],x[S*3+1],x[S*3+2]),p(y,t*a(m[0][S])),_.push(y.x,y.y,y.z),v.push(t*a(m[0][S])),b=Math.max(b,y.y);for(let e=g-1;e>=1;e--)for(let n=0;n<40;n++){let r=this.profiles[n],i=m[n],o=i.length-1,s=i[o]*e/g,c=0,l=o;for(;l-c>1;){let e=c+l>>1;i[e]<s?c=e:l=e}let u=(s-i[c])/(i[l]-i[c]||1);y.set(r[c*3]+(r[l*3]-r[c*3])*u,r[c*3+1]+(r[l*3+1]-r[c*3+1])*u,r[c*3+2]+(r[l*3+2]-r[c*3+2])*u),p(y,t*a(s)),_.push(y.x,y.y,y.z),v.push(t*a(s)),y.y>b&&(b=y.y)}b=Math.max(b,this.relieveFaces(_,v,g));let C={cement:t,ramp:n,pos:_,rings:g,roofY:b};return this.intr.size>=6&&this.intr.delete(this.intr.keys().next().value),this.intr.set(r,C),C}get intradosCached(){return this.intr.size}relieveFaces(e,t,n){let r=this.prep,i=hu(r),a=r.getAttribute(`position`),o=r.getIndex(),s={point:new Q,distance:0,faceIndex:-1},c=new Q,l=new Q,u=new Q,d=new Q,f=new Q,p=e.length/3,m=this.ringDense,h=(t,n)=>t<p?e[t*3+n]:m[(t-p)*3+n],g=e=>e<p?t[e]:0,_=new Float32Array(p*3);for(let t=0;t<p;t++){let n=i.closestPointToPoint(this.scan(c.set(e[t*3],e[t*3+1],e[t*3+2]),c),s,0,1);if(!n){_[t*3+1]=1;continue}let r=n.faceIndex*3;l.fromBufferAttribute(a,o.getX(r)),u.fromBufferAttribute(a,o.getX(r+1)),d.fromBufferAttribute(a,o.getX(r+2)),f.subVectors(u,l).cross(d.sub(l)).normalize().transformDirection(this.toLocal),_[t*3]=f.x,_[t*3+1]=f.y,_[t*3+2]=f.z}let v=(e,t,n)=>{let r=i.closestPointToPoint(this.scan(c.set(e,t,n),c),s,0,1);if(!r)return 1/0;let p=r.faceIndex*3;return l.fromBufferAttribute(a,o.getX(p)),u.fromBufferAttribute(a,o.getX(p+1)),d.fromBufferAttribute(a,o.getX(p+2)),f.subVectors(u,l).cross(d.sub(l)),c.sub(r.point).dot(f)>=0?r.distance:-r.distance},y=[],b=(e,t)=>1+e*40+(t+40)%40;for(let e=0;e<40;e++)y.push(0,b(0,e),b(0,e+1));for(let e=0;e<n-2;e++)for(let t=0;t<40;t++)y.push(b(e,t),b(e,t+1),b(e+1,t+1),b(e,t),b(e+1,t+1),b(e+1,t));Mu(y,b(n-2,0),40,p,240);let x=new Float32Array(p),S=new Float32Array(p),C=new Uint8Array(p),w=(e,t,n,r,i,a,o)=>{let s=v(e,t,n);if(!Number.isFinite(s)||Math.abs(s)>.12)return!1;let c=r-s;if(c<=1e-4)return!1;let l=!1;for(let e of o<0?[i,a]:[i,a,o])if(e<p){let t=Math.min(c,.05-S[e]);t>x[e]&&(x[e]=t,l=!0)}return l};for(let t=0;t<6;t++){x.fill(0);let n=!1;for(let e=0;e+2<y.length;e+=3){let r=[y[e],y[e+1],y[e+2]];if(t>0&&!(r[0]<p&&C[r[0]])&&!(r[1]<p&&C[r[1]])&&!(r[2]<p&&C[r[2]]))continue;let i=Math.min(g(r[0]),g(r[1]),g(r[2]));w((h(r[0],0)+h(r[1],0)+h(r[2],0))/3,(h(r[0],1)+h(r[1],1)+h(r[2],1))/3,(h(r[0],2)+h(r[1],2)+h(r[2],2))/3,i,r[0],r[1],r[2])&&(n=!0);for(let e=0;e<3;e++){let t=r[e],a=r[(e+1)%3];t>=p&&a>=p||w((h(t,0)+h(a,0))/2,(h(t,1)+h(a,1))/2,(h(t,2)+h(a,2))/2,i,t,a,-1)&&(n=!0)}}if(!n)break;let r=!1;C.fill(0);for(let t=0;t<p;t++){if(x[t]<=1e-5)continue;let n=x[t];S[t]+=n,r=!0,C[t]=1,e[t*3]+=_[t*3]*n,e[t*3+1]+=_[t*3+1]*n,e[t*3+2]+=_[t*3+2]*n}if(!r)break}let T=-1/0;for(let t=0;t<p;t++)e[t*3+1]>T&&(T=e[t*3+1]);return T}liftAboveTissue(e,t,n){let r=this.neighbors;if(!r)return t;let i=hu(r),a=r.getAttribute(`position`),o=r.getIndex(),s=this._tInfo,c=this._tQ,l=this._tN,u=0;for(let r=0;r<4&&u<cd;r++){c.set(e,t+u,n).applyMatrix4(this.toScan);let r=i.closestPointToPoint(c,s,0,ad);if(!r)break;let d=r.faceIndex*3;if(Cd.fromBufferAttribute(a,o.getX(d)),wd.fromBufferAttribute(a,o.getX(d+1)),Td.fromBufferAttribute(a,o.getX(d+2)),l.subVectors(wd,Cd).cross(Td.sub(Cd)),l.lengthSq()<1e-20||(l.normalize(),c.sub(r.point).dot(l)>=0)||(l.transformDirection(this.toLocal),l.y<sd))break;u+=Math.min((r.distance+od)/l.y,cd-u)}return t+u}_tInfo={point:new Q,distance:0,faceIndex:-1};_tQ=new Q;_tN=new Q;minHeight(e,t=1){return this.roof(e,t)+zu}prepFaceNormal(e,t){let n=this.prep.getAttribute(`position`),r=this.prep.getIndex();return Cd.fromBufferAttribute(n,r.getX(e*3)),wd.fromBufferAttribute(n,r.getX(e*3+1)),Td.fromBufferAttribute(n,r.getX(e*3+2)),t.subVectors(wd,Cd).cross(Td.sub(Cd)),t.lengthSq()<1e-20?t.copy(this.Y):t.normalize()}_cpInfo={point:new Q,distance:0,faceIndex:-1};_cn=new Q;_cq=new Q;clearance(e,t,n,r=6,i={d:0,nx:0,ny:1,nz:0}){_d.queries++;let a=this._cq.set(e,t,n).applyMatrix4(this.toScan),o=hu(this.prep).closestPointToPoint(a,this._cpInfo,0,r);if(!o)return null;let s=this.prepFaceNormal(o.faceIndex,this._cn);a.sub(o.point);let c=a.length(),l=c<1e-9||a.dot(s)>=0;if(!l){_d.heightChecks++;let r=this.heightAt(e,n);l=r===null||t>=r-1e-6}return c>1e-6?a.multiplyScalar(1/c):a.copy(s),l||a.negate(),a.transformDirection(this.toLocal),i.d=l?c:-c,i.nx=a.x,i.ny=a.y,i.nz=a.z,i}marginDistance(t,n,r){let i=this.ring,a=1/0;for(let o=0;o<40;o++){let s=(o+1)%40,c=i[o*3],l=i[o*3+1],u=i[o*3+2],d=i[s*3]-c,f=i[s*3+1]-l,p=i[s*3+2]-u,m=t-c,h=n-l,g=r-u,_=d*d+f*f+p*p,v=_>0?e((m*d+h*f+g*p)/_,0,1):0,y=m-d*v,b=h-f*v,x=g-p*v,S=y*y+b*b+x*x;S<a&&(a=S)}return Math.sqrt(a)}constrain(e,t,n,r,i,a=t){if(_d.disabled)return 0;let o=e[t*3],s=e[t*3+1],c=e[t*3+2],l=this.marginDistance(o,s,c);if(_d.constrain++,l<pd.from)return 0;let u=this.lip,d=a*4;d+3>=u.length&&(this.lip=this.growLip(a));let f=n+hd(r,l);if(this.lip[d+3]>0&&this.lip[d+3]-Math.hypot(o-this.lip[d],s-this.lip[d+1],c-this.lip[d+2])>=f+.3)return _d.skipped++,0;let p=this._cl,m=0,h=0,g=o,_=s,v=c,y=r+.5,b=l,x=0;for(let e=0;e<6&&m<y;e++){x>.03&&(b=this.marginDistance(o,s,c),x=0);let e=n+hd(r,b);if(!this.clearance(o,s,c,e+.3+.02,p)){h=e+md+.02,g=o,_=s,v=c;break}h=p.d,g=o,_=s,v=c;let t=Math.min(gd(p.d,e)-p.d,y-m);if(t<1e-4)break;if(i&&p.ny>=.5)s+=t/p.ny;else{let e=Math.max(p.ny,0),n=Math.hypot(p.nx,e,p.nz);n<.2?s+=t:(o+=p.nx/n*t,s+=e/n*t,c+=p.nz/n*t)}m+=t,x+=t}let S=this.lip;return S[d]=g,S[d+1]=_,S[d+2]=v,S[d+3]=h,m>0&&(_d.pushed++,e[t*3]=o,e[t*3+1]=s,e[t*3+2]=c),m}_cl={d:0,nx:0,ny:1,nz:0};lip=new Float32Array(16384);growLip(e){let t=new Float32Array(Math.max(this.lip.length*2,(e+1)*4*2));return t.set(this.lip),t}thicknessAudit(e,t,n,r,i,a){_d.audits++;let o=vd.map(([e,t])=>({from:e,to:t,min:1/0,required:0,samples:0})),s=1/0,c=0,l=-1/0,u=null,d=0,f=this._cl;for(let p=t;p<n;p++){let t=e[p*3],n=e[p*3+1],m=e[p*3+2],h=this.marginDistance(t,n,m);if(h<pd.from||!this.clearance(t,n,m,8,f))continue;let g=f.d-r,_=hd(i,h);d++;let v=o.find(e=>h>=e.from&&h<e.to);v&&(v.samples++,g<v.min&&(v.min=g,v.required=_)),h>=pd.to&&(c++,g<s&&(s=g));let y=_-g;y>l&&(l=y,u={x:t,y:n,z:m,dMargin:h,thick:g,required:_,where:a?a(t,m):``})}return{min:c?s:null,bands:o,deficit:d?l:-1/0,at:u,samples:d}}crown(e,t=!0){let n=e.cimento/1e3,r=e.largura/100,i=this.dims,a=e.rampaCimento??1,o=this.intrados(n,a),s=this.shape??Qu(this.type,e.emerg,e.cuspide/100),c=(i.xPlus+i.xMinus)/2,l=Math.max(1,(i.xPlus-i.xMinus)/2*r),u=i.oz,d=i.b,f=Math.max(i.heightFrom===`antagonista`?i.H0+e.altura:Math.min(i.H0+e.altura,i.Hmax),this.minHeight(n)),p=o.pos.slice(),m=[0],h=[!0],g=[1];for(let e=1;e<o.rings;e++)m.push(1+(e-1)*40),h.push(!1),g.push(40);let _=m.length,v=this.ring,x=this.ringDense,S=[],C=new Float64Array(80),w=Math.max(zu,e.minEsp??.2),T=(e,r,i,a)=>{let o=p.length/3;p.push(e,r,i),t&&this.constrain(p,o,n,w,a)};for(let e=0;e<=12;e++){let t=e/12;if(m.push(p.length/3),h.push(!1),S.push(p.length/3),g.push(e===0?240:40),e===0){for(let e=0;e<720;e++)p.push(x[e]);continue}let n=1-y(0,dd,t),r=y(.75,1,t);for(let i=0;i<40;i++){let a=i/40*b,o=Math.cos(a),p=Math.sin(a),m=s.equator(a,l,d),h=s.wall(a,0),g=s.wall(a,t),_=c+g.r*m*o+(v[i*3]-(c+h.r*m*o))*n,y=u+g.r*m*p+(v[i*3+2]-(u+h.r*m*p))*n,x=v[i*3+1];T(_,x+(f-x)*g.h+(r?r*s.relief((_-c)/l,(y-u)/d):0),y,e===12),e===12&&(C[i*2]=_,C[i*2+1]=y)}}for(let e=1;e<8;e++){let t=1-e/8;m.push(p.length/3),h.push(!1),g.push(40);for(let e=0;e<40;e++){let n=c+(C[e*2]-c)*t,r=u+(C[e*2+1]-u)*t;T(n,f+s.relief((n-c)/l,(r-u)/d),r,!0)}}m.push(p.length/3),h.push(!0),g.push(1),T(c,f+s.relief(0,0),u,!0);let E=Lu(p,m,h,g);return{...E,outerStart:E.starts[_],side:S,marginY:0,cut:0,marginN:240}}},Fd=6;function Id(e,t){let n=new Mt;return n.setAttribute(`position`,new ht(e,3)),n.setIndex(new ht(t,1)),Dl(n),n}var Ld=class{positions;intradorso;toda;base;indice;_p=new Q;_info={point:new Q,distance:0,faceIndex:0};mexidos=null;mexidosChave=``;cortesNoComeco=0;constructor(e,t,n){this.positions=e,this.base=e.slice(),this.indice=Uint32Array.from(t);let r=[];for(let e=0;e<t.length;e+=3)t[e]<n&&t[e+1]<n&&t[e+2]<n&&r.push(t[e],t[e+1],t[e+2]);this.intradorso=r.length?Id(this.base,Uint32Array.from(r)):null,this.toda=Id(e,this.indice.slice())}distancia(e,t,n){if(!this.intradorso)return 1/0;let r=this.intradorso.boundsTree.closestPointToPoint(this._p.set(e,t,n),this._info,0,Fd);return r?r.distance:1/0}cruza(e,t){let n=e.length+`:`+e[0];if(this.mexidosChave!==n){this.mexidos&&kl(this.mexidos);let r=[];for(let n=0;n<e.length;n++){let i=e[n];r.push(t[i],t[i+1],t[i+2])}if(this.mexidos=r.length?Id(this.positions,Uint32Array.from(r)):null,this.mexidosChave=n,r.length){let e=Id(this.base,Uint32Array.from(r)),t=Id(this.base,this.indice.slice());this.cortesNoComeco=Rd(e,t,1/0),kl(e),kl(t)}else this.cortesNoComeco=0}else this.mexidos&&Ol(this.mexidos);return this.mexidos?(Ol(this.toda),Rd(this.mexidos,this.toda,this.cortesNoComeco)>this.cortesNoComeco):!1}dispose(){this.mexidos&&kl(this.mexidos),this.intradorso&&kl(this.intradorso),kl(this.toda)}};function Rd(e,t,n){let r=e.getIndex().array,i=t.getIndex().array,a=0;return e.boundsTree.bvhcast(t.boundsTree,new st,{intersectsTriangles:(e,t,o,s)=>{let c=r[o*3],l=r[o*3+1],u=r[o*3+2],d=i[s*3],f=i[s*3+1],p=i[s*3+2];return c===d||c===f||c===p||l===d||l===f||l===p||u===d||u===f||u===p||zd(e,t)||zd(t,e)||!e.intersectsTriangle(t)?!1:++a>n}}),a}function zd(e,t){let n=e.b.x-e.a.x,r=e.b.y-e.a.y,i=e.b.z-e.a.z,a=e.c.x-e.a.x,o=e.c.y-e.a.y,s=e.c.z-e.a.z,c=r*s-i*o,l=i*a-n*s,u=n*o-r*a,d=Math.sqrt(c*c+l*l+u*u);if(d<1e-12)return!1;let f=1e-4*d,p=c*(t.a.x-e.a.x)+l*(t.a.y-e.a.y)+u*(t.a.z-e.a.z),m=c*(t.b.x-e.a.x)+l*(t.b.y-e.a.y)+u*(t.b.z-e.a.z),h=c*(t.c.x-e.a.x)+l*(t.c.y-e.a.y)+u*(t.c.z-e.a.z);return p>f&&m>f&&h>f||p<-f&&m<-f&&h<-f}function Bd(e){let t=new Map;for(let n=0;n+2<e.length;n+=3)for(let r=0;r<3;r++){let i=e[n+r],a=e[n+(r+1)%3],o=i<a?i*4294967296+a:a*4294967296+i;t.set(o,(t.get(o)??0)+1)}let n=0;for(let e of t.values())e!==2&&n++;return n}function Vd(e){let t=new Set;for(let n=0;n+2<e.length;n+=3)for(let r=0;r<3;r++){let i=e[n+r]*4294967296+e[n+(r+1)%3];if(t.has(i))return!1;t.add(i)}return!0}function Hd(e,t){let n=Array.from({length:t},()=>new Set);for(let t=0;t+2<e.length;t+=3)for(let r=0;r<3;r++){let i=e[t+r],a=e[t+(r+1)%3];n[i].add(a),n[a].add(i)}return n.map(e=>[...e])}var Ud=120,Wd=.5,Gd=.85,Kd=Math.tan(35*Math.PI/180),qd=1.2,Jd={base:0,place:0,antagonist:0,candidates:0,builds:0,reset(){this.base=this.place=this.antagonist=this.candidates=this.builds=0}},Yd=()=>typeof performance<`u`?performance.now():Date.now(),Xd=new We;new Q;var Zd=class{tooth;geometry;cx;cz;a;b;eqR=new Float32Array(40);eqY=new Float32Array(40);wallR=new Float32Array(520);wallY=new Float32Array(520);cap;profile;profileBands=1;profileDh=1;capFirst=1;nsEq=6;ref;cusp;top;constructor(t){this.tooth=t;let n=new Mt;n.setAttribute(`position`,new ht(t.positions,3)),n.setIndex(new ht(t.indices,1)),Dl(n),this.geometry=n;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let e=0;e<40;e++){let n=e/40*b,s=t.equator.r[e]*Math.cos(n),c=t.equator.r[e]*Math.sin(n);r=Math.min(r,s),i=Math.max(i,s),a=Math.min(a,c),o=Math.max(o,c)}this.cx=(r+i)/2,this.cz=(a+o)/2,this.a=(i-r)/2,this.b=(o-a)/2;let s=t.positions,c=s.length/3,l=0;for(let e=0;e<c;e++)s[e*3+1]>l&&(l=s[e*3+1]);this.top=l;let u=l/60;this.profile=new Float32Array(2400);let d=new Float32Array(2400).fill(-1);for(let e=0;e<c;e++){let t=s[e*3+1];if(t<0)continue;let n=s[e*3]-this.cx,r=s[e*3+2]-this.cz,i=(Math.round(Math.atan2(r,n)/b*40)%40+40)%40,a=Math.min(59,Math.floor(t/u)),o=Math.hypot(n,r);o>d[i*60+a]&&(d[i*60+a]=o)}for(let e=0;e<40;e++){let t=d.subarray(e*60,(e+1)*60);for(let e=1;e<60;e++)t[e]<0&&(t[e]=t[e-1]);for(let e=58;e>=0;e--)t[e]<0&&(t[e]=t[e+1]);let n=0;for(let e=0;e<60;e++)t[e]>t[n]&&(n=e);this.eqR[e]=t[n],this.eqY[e]=(n+.5)*u;for(let r=0;r<60;r++)this.profile[e*60+r]=t[r]/t[n]}this.profileBands=60,this.profileDh=u;let f=new Float32Array(23);for(let e=0;e<=22;e++)f[e]=e===22?0:1-(e/22)**1.6;let p=new Float32Array(23*Ud),m=hu(n);for(let e=0;e<=22;e++){for(let t=0;t<Ud;t++){let n=t/Ud*b,r=this.eqAt(n),i=this.cx+f[e]*r*Math.cos(n),a=this.cz+f[e]*r*Math.sin(n);Xd.origin.set(i,l+1,a),Xd.direction.set(0,-1,0);let o=m.raycastFirst(Xd,2,0,l+2),s=o?o.point.y:NaN;(e===0||!(s>=0))&&(s=e===0?this.eqYAt(n):NaN),p[e*Ud+t]=s}let t=p.subarray(e*Ud,(e+1)*Ud);for(let e=0;e<Ud;e++)if(Number.isNaN(t[e])){let n=e,r=e;for(;Number.isNaN(t[n])&&n>e-Ud;)n--;for(;Number.isNaN(t[r])&&r<e+Ud;)r++;let i=t[(n%Ud+Ud)%Ud],a=t[r%Ud];t[e]=Number.isFinite(i)&&Number.isFinite(a)?(i+a)/2:Number.isFinite(i)?i:Number.isFinite(a)?a:this.eqYAt(e/Ud*b)}}this.cap={rho:f,h:p};let h=0;for(let e=0;e<=22;e++)Math.abs(f[e]-Gd)<Math.abs(f[h]-Gd)&&(h=e);let g=0;for(let e=0;e<Ud;e++)g+=p[h*Ud+e];let _=g/Ud,v=0;for(let e=0;e<40;e++)v+=this.eqY[e]/40;this.nsEq=e(Math.round(12*v/_),3,9);for(let t=0;t<40;t++){let n=t/40*b;for(let r=0;r<=12;r++){let i,a;if(r<=this.nsEq){a=r/this.nsEq*this.eqY[t];let n=e(a/this.profileDh-.5,0,this.profileBands-1),o=Math.floor(n),s=n-o;i=r===this.nsEq?1:Math.min(1,this.profile[t*this.profileBands+o]*(1-s)+this.profile[t*this.profileBands+Math.min(this.profileBands-1,o+1)]*s)}else i=1-(r-this.nsEq)/(12-this.nsEq)*.15000000000000002,a=this.capAt(i,n);this.wallR[t*13+r]=i,this.wallY[t*13+r]=a}}let y=1;for(;y<22&&f[y]>=Gd;)y++;this.capFirst=y,this.ref=_;let x=-1/0;for(let e=0;e<p.length;e++)p[e]>x&&(x=p[e]);this.cusp=Math.max(.2,x-this.ref)}dispose(){kl(this.geometry)}eqAt(e){return this.ringAt(this.eqR,e)}eqYAt(e){return this.ringAt(this.eqY,e)}ringAt(e,t){let n=(t/b%1+1)%1*40,r=Math.floor(n),i=n-r;return e[r%40]*(1-i)+e[(r+1)%40]*i}capAt(t,n){let{rho:r,h:i}=this.cap;t=e(t,0,1);let a=0;for(;a<22&&r[a+1]>t;)a++;let o=r[a]===r[a+1]?0:(r[a]-t)/(r[a]-r[a+1]),s=(n/b%1+1)%1*Ud,c=Math.floor(s),l=s-c,u=e=>i[e*Ud+c%Ud]*(1-l)+i[e*Ud+(c+1)%Ud]*l;return u(a)*(1-o)+u(a+1)*o}capAtXZ(e,t){let n=e-this.cx,r=t-this.cz,i=Math.atan2(r,n);return this.capAt(Math.hypot(n,r)/this.eqAt(i),i)}equator(e,t,n){let r=Math.cos(e),i=Math.sin(e),a=this.eqAt(e);return Math.hypot(a*r*t/this.a,a*i*n/this.b)}wall(t,n){let r=(t/b%1+1)%1*40,i=Math.floor(r)%40,a=(i+1)%40,o=r-Math.floor(r),s=e(n,0,1)*12,c=Math.floor(s),l=Math.min(12,c+1),u=s-c,d=e=>this.wallR[e*13+c]*(1-u)+this.wallR[e*13+l]*u,f=e=>this.wallY[e*13+c]*(1-u)+this.wallY[e*13+l]*u;return{r:d(i)*(1-o)+d(a)*o,h:(f(i)*(1-o)+f(a)*o)/this.ref}}relief(e,t){return this.capAtXZ(this.cx+e*this.a,this.cz+t*this.b)-this.ref}},Qd=(e,t,n,r,i)=>{let a=e/n,o=t/r,s=Math.abs(a)<.25?`centro`:a*i>0?`mesial`:`distal`;return`${Math.abs(o)<.2?`fossa central`:o>0?`vestibular`:`lingual`} ${s}`};function $d(e,t,n,r={}){let i=e.shape;e.shape=n;let a=Yd(),o=e.crown(t,!1);Jd.base+=Yd()-a,Jd.builds++,e.shape=i;let s=t.cimento/1e3,c=e.dims,l=o.outerStart,u=Array.from(o.positions.subarray(0,(l+240)*3)),d=[],f=[];for(let e=0;e<o.starts.length&&o.starts[e]<=l;e++)d.push(o.starts[e]),f.push(e===0);let p=[],m=[],g=d.length,_=e=>f[e]?1:e===g-1?240:40,v=e=>_(e)/20;for(let e=0;e<g-1;e++)if(f[e])Nu(p,d[e],d[e+1],40,1,!0),Nu(m,d[e],d[e+1],40,2,!0);else if(Mu(p,d[e],40,d[e+1],_(e+1)),(e-1)%2==0){let t=Math.min(g-1,e+2);Mu(m,d[e],40,d[t],_(t),v(e),v(t))}let x=(c.xPlus+c.xMinus)/2,S=Math.max(1,(c.xPlus-c.xMinus)/2*(t.largura/100)),C=c.oz,w=c.b,T=c.heightFrom===`antagonista`?1/0:c.Hmax/(n.top/n.ref),E=Math.max(Math.min(c.H0+t.altura,T),e.minHeight(s)),D=S/n.a,O=w/n.b,k=t.cuspide/100,A=e.ring,j=Math.max(zu,t.minEsp??.2),M=[0,0,0],N=(t,n,r,i)=>(M[0]=n,M[1]=r,M[2]=i,e.constrain(M,0,s,j,!0,t),M[1]),P=e=>{let t=(e/b%1+1)%1*40,n=Math.floor(t)%40,r=t-Math.floor(t);return A[n*3+1]*(1-r)+A[(n+1)%40*3+1]*r},F=new Float32Array(40);for(let e=0;e<40;e++){let t=e/40*b,r=n.eqR[e],i=D*r*Math.cos(t),a=O*r*Math.sin(t),o=Math.hypot(i,a),s=Math.hypot(A[e*3]-x,A[e*3+2]-C);F[e]=Math.max(1,(s+.05)/o)}let I=new Float32Array(40);for(let e=0;e<40;e++){let t=0;for(let n=-2;n<=2;n++)t=Math.max(t,F[(e+n+40)%40]);I[e]=t}let ee=0;for(let e=0;e<40;e++)ee=Math.max(ee,I[e]);let L=e=>{let t=(e/b%1+1)%1*40,n=Math.floor(t)%40,r=t-Math.floor(t);return I[n]*(1-r)+I[(n+1)%40]*r},R=u.length/3,te=[l];for(let e=1;e<=12;e++)te.push(R+(e-1)*40),d.push(R+(e-1)*40),f.push(!1);let ne=R+480,re=[],z=n.capFirst;for(let e=z;e<=22;e++)re.push(ne+(e-z)*Ud),d.push(ne+(e-z)*Ud),f.push(e===22);let B=22-z,V=480+B*Ud+1;u.length=(R+V)*3;let H=t=>{let r=(e,r)=>{let i=P(r);return i+(t-i)*e/n.ref},i=R*3;for(let t=1;t<=12;t++){let a=t/12,o=1-y(0,Wd,a);for(let a=0;a<40;a++){let l=a/40*b,d=Math.cos(l),f=Math.sin(l),p=I[a],m=n.eqR[a],h=n.wallR[a*13+t],g=n.wallR[a*13],_=x+p*D*h*m*d+(A[a*3]-(x+p*D*g*m*d))*o,v=C+p*O*h*m*f+(A[a*3+2]-(C+p*O*g*m*f))*o,y=r(n.wallY[a*13+t],l),S=A[a*3]-x,w=A[a*3+2]-C,T=Math.hypot(S,w)||1e-6,E=Math.min(Math.max(0,y-A[a*3+1]),qd),k=Math.hypot(p*D*m*d,p*O*m*f),M=(d>=0?c.hasPlus:c.hasMinus)?Math.abs(f):1,N=Math.min(k,T+Kd*E*M);if(E>0&&e.neighbors&&N>Math.hypot(_-x,v-C)){Xd.origin.set(x+S/T*T,y,C+w/T*T),e.scan(Xd.origin,Xd.origin),Xd.direction.set(S/T,0,w/T).transformDirection(e.toScanMatrix());let t=hu(e.neighbors).raycastFirst(Xd,2,0,3);t&&(N=Math.min(N,T+Math.max(0,t.distance-.1)))}let P=Math.hypot(_-x,v-C);if(P<N){let e=N/(P||1e-6);_=x+(_-x)*e,v=C+(v-C)*e}y=e.liftAboveTissue(_,y,v);let F=i/3;u[i++]=_,u[i++]=y,u[i++]=v,e.constrain(u,F,s,j,!1)}}for(let t=z;t<22;t++){let a=n.cap.rho[t];for(let o=0;o<Ud;o++){let c=o/Ud*b,l=n.eqAt(c),d=L(c),f=x+d*D*a*l*Math.cos(c),p=C+d*O*a*l*Math.sin(c),m=n.cap.h[t*Ud+o],h=r(n.ref+(m-n.ref)*k,c),g=i/3;u[i++]=f,u[i++]=h,u[i++]=p,e.constrain(u,g,s,j,!0)}}let a=n.ref+(n.cap.h[22*Ud]-n.ref)*k,o=i/3;u[i++]=x,u[i++]=r(a,0),u[i++]=C,e.constrain(u,o,s,j,!0)},ie=Yd();H(E),Jd.place+=Yd()-ie;for(let e=0;e<12;e++)Mu(p,te[e],e===0?240:40,te[e+1],40),e%2==0&&Mu(m,te[e],e===0?240:40,te[Math.min(12,e+2)],40,e===0?12:2,2);Mu(p,te[12],40,ne,Ud),Mu(m,te[12],40,ne,Ud,2,6);for(let e=0;e<B-1;e++)Mu(p,re[e],Ud,re[e+1],Ud),e%2==0&&Mu(m,re[e],Ud,re[Math.min(B-1,e+2)],Ud,6,6);let ae=re[B];Nu(p,ae,re[B-1],Ud,1,!1),Nu(m,ae,re[(B-1)%2==0?B-1:B-2],Ud,6,!1);let oe=null;r.opp&&(r.adapt?.amplitude??.5)>0&&(oe=tf(e,u,ne,R+V,r.opp,{ox:x,oz:C,a:S,b:w,mesialSign:e.mesialSign},(e,t,n,r)=>N(ne+e,t,n,r),{target:h(t),...r.adapt??{},minEsp:j},E,H,n.top/n.ref));let U=Float32Array.from(u),se=Uint32Array.from(p),W=Uint32Array.from(m);if(ju(U,se)<0){let e=e=>{for(let t=0;t+2<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}};e(se),e(W)}return{positions:U,index:se,starts:d,lowIndex:W,outerStart:l,side:te,marginY:0,cut:0,marginN:240,capStart:ne,capRings:re,occlusion:oe,marginFactor:ee}}function ef(e,t,n,r,i){Xd.origin.set(n,i,r),e.scan(Xd.origin,Xd.origin),Xd.direction.copy(e.Y);let a=hu(t).raycastFirst(Xd,2,0,30);return a?i+a.distance:null}function tf(e,t,n,r,i,a,o,s,c,l,u){let d=s.target??.05,f=s.amplitude??.5,[p,m]=s.radius??[.25,1.2],h=s.drops??[0,.15,.3,.5],g=s.wantContacts??3,_=r-n,v=new Float32Array(_),b=new Float32Array(_),x=new Float32Array(_),S=()=>{for(let e=0;e<_;e++)v[e]=t[(n+e)*3],x[e]=t[(n+e)*3+1],b[e]=t[(n+e)*3+2]};S();let C=1/0;for(let e=0;e<_;e++)C=Math.min(C,x[e]);let w=new Float32Array(_).fill(NaN),T=0,E=Yd();for(let t=0;t<_;t++){let n=ef(e,i,v[t],b[t],C-6);n!==null&&(w[t]=n,T++)}Jd.antagonist+=Yd()-E;let D=Yd(),O=()=>{let e=1/0;for(let t=0;t<_;t++)Number.isNaN(w[t])||(e=Math.min(e,w[t]-x[t]));return e},k=0,A=e.dims.heightFrom===`antagonista`?1/0:Math.max(0,e.dims.Hmax/u-c);if(T)for(let e=0;e<4;e++){let e=O();if(!Number.isFinite(e)||Math.abs(e-d)<.003)break;let t=Math.min(k+(e-d)/u,A);if(Math.abs(t-k)<1e-6)break;k=t,l(c+k),S()}let j=m,M=new Map;for(let e=0;e<_;e++){let t=Math.floor(v[e]/j)*100003+Math.floor(b[e]/j),n=M.get(t);n||M.set(t,n=[]),n.push(e)}let N=[],P=[];for(let e=0;e<_;e++){let t=Math.floor(v[e]/j),n=Math.floor(b[e]/j),r=[],i=[];for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let s=M.get((t+a)*100003+(n+o));if(s)for(let t of s){let n=Math.hypot(v[t]-v[e],b[t]-b[e]);n<=m&&(r.push(t),i.push(n))}}N.push(Int32Array.from(r)),P.push(Float32Array.from(i))}let F=Math.PI*a.a*a.b/_,I=e=>{l(c+e),S();let t=new Float32Array(_),n=new Float32Array(_),r=0;for(let e=0;e<_;e++){if(t[e]=x[e],Number.isNaN(w[e]))continue;let i=w[e]-t[e];i<-.03&&(r+=F),i<d&&(n[e]=d-i)}let i=new Float32Array(_);for(let e=0;e<_;e++){if(n[e]<=0)continue;let t=Math.min(n[e],f),r=N[e],a=P[e];for(let e=0;e<r.length;e++){let n=a[e],o=t*(n<=p?1:1-y(p,m,n));o>i[r[e]]&&(i[r[e]]=o)}}let s=0,u=0,h=0,g=1/0,C=0,T=new Uint8Array(_);for(let e=0;e<_;e++){if(t[e]=o(e,v[e],t[e]-i[e],b[e]),C=Math.max(C,i[e]),Number.isNaN(w[e]))continue;let n=w[e]-t[e];n<-.03&&(s+=F),n>=-.03&&n<=.1&&(T[e]=1),u+=n,h++,n<g&&(g=n)}let E=[],D=new Uint8Array(_);for(let e=0;e<_;e++){if(!T[e]||D[e])continue;let n=[e];D[e]=1;let r=0,i=0,o=0,s=0;for(;n.length;){let e=n.pop();r+=v[e],i+=b[e],o+=t[e],s++;let a=N[e],c=P[e];for(let e=0;e<a.length;e++){let t=a[e];c[e]<=.6&&T[t]&&!D[t]&&(D[t]=1,n.push(t))}}s>=2&&E.push({x:r/s,z:i/s,y:o/s,count:s,where:Qd(r/s-a.ox,i/s-a.oz,a.a,a.b,a.mesialSign)})}return E.sort((e,t)=>t.count-e.count),{shift:e,y:t,dent:i,contacts:E,interferenceBefore:r,interferenceAfter:s,meanGap:h?u/h:1/0,minGap:g,maxShift:C}},ee=[],L=null;for(let e of h){let t=I(k+e/u);ee.push({drop:-(k+e/u),contacts:t.contacts.length,maxShift:t.maxShift,interference:t.interferenceAfter});let n=t.interferenceAfter<=.05&&t.maxShift<=f+1e-6;if(L?n&&t.contacts.length>L.contacts.length&&(L=t):L=t,t.contacts.length>=g&&n){L=t;break}if(!n)break}let R=L;l(c+R.shift),S(),Jd.candidates+=Yd()-D;let te=0,ne=0,re=0;for(let e=0;e<_;e++){te+=R.dent[e];let r=x[e]-R.dent[e],i=R.y[e]-r;i>.005&&(ne++,i>re&&(re=i)),t[(n+e)*3+1]=R.y[e]}let z=[],B=[];for(let e=0;e<_;e++){let t=N[e],n=!0;for(let r=0;r<t.length&&n;r++)R.y[t[r]]>R.y[e]&&(n=!1);n&&B.push(e)}B.sort((e,t)=>R.y[t]-R.y[e]);for(let e of B.slice(0,6))z.push({where:Qd(v[e]-a.ox,b[e]-a.oz,a.a,a.b,a.mesialSign),x:v[e],z:b[e],gap:Number.isNaN(w[e])?1/0:w[e]-R.y[e]});let V=[];if(R.interferenceAfter>.05||R.minGap<-.03){let e=1/0,t=0;for(let n=0;n<_;n++){if(Number.isNaN(w[n]))continue;let r=w[n]-R.y[n];r<e&&(e=r,t=w[n]-(R.y[n]-s.minEsp))}V.push(`Espaço oclusal insuficiente: ${t.toFixed(1).replace(`.`,`,`)} mm disponíveis para ${s.minEsp.toFixed(1).replace(`.`,`,`)} mm de espessura mínima — a peça interfere ${(-e).toFixed(2).replace(`.`,`,`)} mm no antagonista (${R.interferenceAfter.toFixed(1).replace(`.`,`,`)} mm²).`)}return{drop:-R.shift,contacts:R.contacts,interferenceBefore:R.interferenceBefore,interferenceAfter:R.interferenceAfter,meanGap:R.meanGap,minGap:R.minGap,maxShift:R.maxShift,meanShift:te/_,covered:T/_,tried:ee,landmarks:z,liftedFraction:ne/_,maxLift:re,warnings:V}}function nf(e,t,n={}){let r=e.shape,i=e.crown;e.shape=t,e.crown=r=>{e.crown=i;try{return $d(e,r,t,n)}finally{e.crown=a}};let a=e.crown;return()=>{e.shape=r,e.crown=i}}var rf=e=>({...e});function af(e,t,n,r=Math.floor(t.length/3)){let i=Math.cos(e.giro),a=Math.sin(e.giro),o=e.s*e.ax,s=e.s*e.ay,c=e.s*e.az;for(let l=0;l<r;l++){let r=t[l*3]*o,u=t[l*3+1]*s,d=t[l*3+2]*c;n[l*3]=e.tx+i*r+a*d,n[l*3+1]=e.ty+u,n[l*3+2]=e.tz-a*r+i*d}}function of(e,t,n,r,i=[0,0,0]){let a=Math.cos(e.giro),o=Math.sin(e.giro);return t*=e.s*e.ax,n*=e.s*e.ay,r*=e.s*e.az,i[0]=e.tx+a*t+o*r,i[1]=e.ty+n,i[2]=e.tz-o*t+a*r,i}function sf(e,t,n,r,i=[0,0,0]){let a=Math.cos(e.giro),o=Math.sin(e.giro);return t-=e.tx,n-=e.ty,r-=e.tz,i[0]=(a*t-o*r)/(e.s*e.ax),i[1]=n/(e.s*e.ay),i[2]=(o*t+a*r)/(e.s*e.az),i}var cf=new Q,lf={point:new Q,distance:0,faceIndex:-1},uf=class{sinal;geometry;bvh;P;I;px=0;py=0;pz=0;nx=0;ny=1;nz=0;triangulos;grade=null;g0=[0,0,0];gn=[0,0,0];consultas=0;constructor(e,t,n=1){this.sinal=n;let r=new Mt;r.setAttribute(`position`,new ht(e,3)),r.setIndex(new ht(t,1)),Dl(r),this.geometry=r,this.bvh=r.boundsTree,this.P=e,this.I=r.getIndex().array,this.triangulos=t.length/3}limite(e,t,n){if(!this.grade){this.geometry.computeBoundingBox();let e=this.geometry.boundingBox,t=mf+ff;this.g0=[e.min.x-t,e.min.y-t,e.min.z-t],this.gn=[Math.ceil((e.max.x-e.min.x+2*t)/ff),Math.ceil((e.max.y-e.min.y+2*t)/ff),Math.ceil((e.max.z-e.min.z+2*t)/ff)],this.gn[0]*this.gn[1]*this.gn[2]>6e6?(this.gn=[0,0,0],this.grade=new Float32Array):this.grade=new Float32Array(this.gn[0]*this.gn[1]*this.gn[2]).fill(NaN)}let r=Math.floor((e-this.g0[0])/ff),i=Math.floor((t-this.g0[1])/ff),a=Math.floor((n-this.g0[2])/ff);if(r<0||i<0||a<0||r>=this.gn[0]||i>=this.gn[1]||a>=this.gn[2])return-1/0;let o=(a*this.gn[1]+i)*this.gn[0]+r,s=this.grade[o];return s!==s&&(s=this.exata(this.g0[0]+(r+.5)*ff,this.g0[1]+(i+.5)*ff,this.g0[2]+(a+.5)*ff,mf),this.grade[o]=s),s-pf}dist(e,t,n,r){return r<=mf-pf&&this.limite(e,t,n)>r?1/0:this.exata(e,t,n,r)}longa=null;distAte(e,t,n,r){let i=this.dist(e,t,n,Math.min(r,mf-pf));if(Number.isFinite(i))return i;if(!this.grade||!this.grade.length)return 1/0;let a=Math.floor((e-this.g0[0])/ff),o=Math.floor((t-this.g0[1])/ff),s=Math.floor((n-this.g0[2])/ff);if(a<0||o<0||s<0||a>=this.gn[0]||o>=this.gn[1]||s>=this.gn[2])return 1/0;this.longa||=new Float32Array(this.grade.length).fill(NaN);let c=(s*this.gn[1]+o)*this.gn[0]+a,l=this.longa[c];if(l!==l&&(l=this.exata(this.g0[0]+(a+.5)*ff,this.g0[1]+(o+.5)*ff,this.g0[2]+(s+.5)*ff,hf),this.longa[c]=l),!Number.isFinite(l)||l-pf>r)return 1/0;let u=this.exata(e,t,n,hf);return u<=r?u:1/0}exata(e,t,n,r){this.consultas++;let i=this.bvh.closestPointToPoint(cf.set(e,t,n),lf,0,r);if(!i)return 1/0;let a=this.P,o=this.I,s=i.faceIndex*3,c=o[s]*3,l=o[s+1]*3,u=o[s+2]*3,d=a[l]-a[c],f=a[l+1]-a[c+1],p=a[l+2]-a[c+2],m=a[u]-a[c],h=a[u+1]-a[c+1],g=a[u+2]-a[c+2],_=f*g-p*h,v=p*m-d*g,y=d*h-f*m,b=(Math.hypot(_,v,y)||1)*this.sinal;return _/=b,v/=b,y/=b,this.nx=_,this.ny=v,this.nz=y,this.px=i.point.x,this.py=i.point.y,this.pz=i.point.z,(e-i.point.x)*_+(t-i.point.y)*v+(n-i.point.z)*y>=0?i.distance:-i.distance}cortes(e,t,n,r,i,a,o){df.origin.set(e,t,n),df.direction.set(r,i,a);let s=this.bvh.raycast(df,2,0,o).map(e=>e.distance).sort((e,t)=>e-t),c=[];for(let e of s)(!c.length||e-c[c.length-1]>1e-6)&&c.push(e);return c}raio(e,t,n,r,i,a,o){df.origin.set(e,t,n),df.direction.set(r,i,a);let s=this.bvh.raycastFirst(df,2,0,o);return s?s.distance:1/0}},df=new We,ff=.25,pf=ff*Math.sqrt(3)/2,mf=1.6,hf=4;function gf(e,t,n,r,i=null){let a=e.getAttribute(`position`),o=e.getIndex(),s=a.array,c=a.itemSize??3,l=o?o.count/3:a.count/3,u=o?o.array:null,d=new st().copy(t.toScanMatrix()).invert().elements,f=new Map,p=i?i.pos:[],m=i?i.idx:[],h=[0,0,0,0,0,0,0,0,0];for(let e=0;e<l;e++){for(let t=0;t<3;t++){let n=(u?u[e*3+t]:e*3+t)*c,r=s[n],i=s[n+1],a=s[n+2];h[t*3]=d[0]*r+d[4]*i+d[8]*a+d[12],h[t*3+1]=d[1]*r+d[5]*i+d[9]*a+d[13],h[t*3+2]=d[2]*r+d[6]*i+d[10]*a+d[14]}let t=(h[0]+h[3]+h[6])/3,i=(h[1]+h[4]+h[7])/3,a=(h[2]+h[5]+h[8])/3;if(Math.abs(t)>14||Math.abs(a)>14||Math.abs(i)>20)continue;let o=h[3]-h[0],l=h[4]-h[1],g=h[5]-h[2],_=h[6]-h[0],v=h[7]-h[1],y=h[8]-h[2],b=l*y-g*v,x=g*_-o*y,S=o*v-l*_,C=(Math.hypot(b,x,S)||1)*n;if(b/=C,x/=C,S/=C,r(t,i,a,b,x,S))for(let t=0;t<3;t++){let n=u?u[e*3+t]:e*3+t,r=f.get(n);r===void 0&&(r=p.length/3,f.set(n,r),p.push(h[t*3],h[t*3+1],h[t*3+2])),m.push(r)}}return m.length<9?null:new uf(Float32Array.from(p),Uint32Array.from(m),n)}var _f=new WeakMap;function vf(e,t,n,r=null,i=null){let a=_f.get(e);if(a&&a.opp===t&&a.arcada===r)return a.a;let o=gf(e.prep,e,1,()=>!0),s=o;if(r&&i){let t=0;for(let e=0;e<i.raio.length;e++)i.raio[e]>t&&(t=i.raio[e]);let n=(t+1.5)*(t+1.5),a=gf(r,e,e.scanSign,(e,t,r)=>{if(Math.abs(t-(i.yMin+i.yMax)/2)>14||e*e+r*r>n+60)return!1;if(t>i.yMin-1.2&&t<i.yMax+1.2&&e*e+r*r<n&&i.distancia(e,t,r)<.7)return!0;let a=o.dist(e,t,r,.01);return Number.isFinite(a)&&Math.abs(a)<1e-4});a&&(s=a)}let c=-1/0;{let e=o.geometry.getAttribute(`position`);for(let t=0;t<e.count;t++)e.getY(t)>c&&(c=e.getY(t))}let l=(e.dims.xPlus+e.dims.xMinus)/2,u=e.neighbors?gf(e.neighbors,e,1,(e,t,r)=>Math.abs(e-l)<11&&Math.abs(r)<8&&t>n-4&&t<c+6):null,d=null;if(t){let n=gf(t,e,1,(e,t,n)=>Math.abs(e)<9&&Math.abs(n)<9&&t>c-3&&t<c+12);if(n){let e=0;for(let[t,r]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1.5,1.5],[-1.5,-1.5]])Number.isFinite(n.raio(t,c,r,0,1,0,30))&&(n.dist(t,c+n.raio(t,c,r,0,1,0,30),r,.5),e-=n.ny);d=e>=0?n:new uf(n.geometry.getAttribute(`position`).array,n.geometry.getIndex().array.slice(),-1)}}let f=null,p=null,m=[];if(e.neighbors){let t=e.neighbors.getAttribute(`position`),r=t.array,i=new st().copy(e.toScanMatrix()).invert().elements,a=[[],[]];for(let o=0;o<t.count;o++){let t=r[o*3],s=r[o*3+1],l=r[o*3+2],u=i[0]*t+i[4]*s+i[8]*l+i[12],d=i[2]*t+i[6]*s+i[10]*l+i[14];if(Math.abs(d)>8)continue;let f=i[1]*t+i[5]*s+i[9]*l+i[13];f<n-1||f>c+6||(u>e.dims.xPlus+.3&&u<e.dims.xPlus+4.5?a[0].push(f,d):u<e.dims.xMinus-.3&&u>e.dims.xMinus-4.5&&a[1].push(f,d))}let o=[],s=[];a.forEach((e,t)=>{if(e.length<400)return;let r=[];for(let t=0;t<e.length;t+=2)r.push(e[t]);r.sort((e,t)=>e-t);let i=r[Math.floor(.99*(r.length-1))];if(i-n<1.5)return;let a=n-1,c=Math.max(1,Math.ceil((i-.5-a)/.5)),l=Array.from({length:c},()=>[]);for(let t=0;t<e.length;t+=2){let n=Math.floor((e[t]-a)/.5);n>=0&&n<c&&e[t]<i-.5&&l[n].push(e[t+1])}let u=-1/0,d=1/0;for(let e of l)e.length<30||(e.sort((e,t)=>e-t),u=Math.max(u,e[Math.floor(.97*(e.length-1))]),d=Math.min(d,e[Math.floor(.03*(e.length-1))]));Number.isFinite(u)&&Number.isFinite(d)&&(o.push(u),s.push(d),m.push({lado:t===0?1:-1,vestibular:u,lingual:d,topo:i}))}),o.length&&(f=o.reduce((e,t)=>e+t,0)/o.length,p=s.reduce((e,t)=>e+t,0)/s.length)}let h={preparo:o,completo:s,vizinhos:u,yProximal:n,antagonista:d,topoDoPreparo:c,zVestibular:f,zLingual:p,contornoVizinhos:m};return _f.set(e,{opp:t,arcada:r,a:h}),h}function yf(e,t,n,r,i,a,o,s=1/0){let c=e.dist(t,n,r,o);return!Number.isFinite(c)||e.py<a||c>=0&&e.nx*i>-xf||c<-s?1/0:c}var bf=.45,xf=.55,Sf=class{P;todos;dist;onde=-1;avaliacoes=0;grosso;constructor(e,t,n){this.P=e,this.todos=t,this.dist=n;let r=Math.max(1,Math.floor(t.length/250));this.grosso=t.filter((e,t)=>t%r===0)}medir(e,t=4,n=!0){let r=this.P,i=[0,0,0],a=1/0;for(let n=0;n<this.grosso.length;n++){let o=this.grosso[n];of(e,r[o*3],r[o*3+1],r[o*3+2],i);let s=this.dist(i[0],i[1],i[2],t);s<a&&(a=s,this.onde=o)}if(this.avaliacoes+=this.grosso.length,!n)return a;let o=Number.isFinite(a)?Math.abs(a)+(a<0?.4:.002):t;for(let t=0;t<this.todos.length;t++){let n=this.todos[t];of(e,r[n*3],r[n*3+1],r[n*3+2],i);let s=this.dist(i[0],i[1],i[2],o);s<a&&(a=s,this.onde=n,o=Math.abs(a)+(a<0?.4:.002))}return this.avaliacoes+=this.todos.length,a}},Cf=72,wf=new We,Tf={ligado:!1};function Ef(e,t,n,r){let i=Math.cos(n),a=Math.sin(n),o=sf(t,14*i,r,14*a),s=sf(t,0,r,0);wf.origin.set(o[0],o[1],o[2]),wf.direction.set(s[0]-o[0],s[1]-o[1],s[2]-o[2]);let c=wf.direction.length();wf.direction.multiplyScalar(1/c);let l=hu(e.geometry).raycastFirst(wf,2,0,c);if(!l)return NaN;let u=of(t,l.point.x,l.point.y,l.point.z);return Math.hypot(u[0],u[2])}function Df(e,t,n,r){let i={r:0,y:0};for(let a=0;a<Cf;a++){let o=a/Cf*b;n.em(o,i),r[a]=Ef(e,t,o,i.y)-i.r}}function Of(e){let t=0,n=0,r=0,i=0;for(let a=0;a<Cf;a++){if(!Number.isFinite(e[a]))continue;let o=a/Cf*b;t++,n+=e[a],r+=e[a]*Math.sin(o),i+=e[a]*Math.cos(o)}if(t<Cf/2)return{dz:0,dx:0,media:0,resto:1/0};let a=n/t,o=2*r/t,s=2*i/t,c=0;for(let t=0;t<Cf;t++){if(!Number.isFinite(e[t]))continue;let n=t/Cf*b,r=e[t]-a-o*Math.sin(n)-s*Math.cos(n);c+=r*r}return{dz:o,dx:s,media:a,resto:Math.sqrt(c/t)}}function kf(e){let t=e.dente,n=t.P,r=[(t.x0+t.x1)/2,t.topo,(t.z0+t.z1)/2],i={s:1,ax:1,ay:1,az:1,giro:e.giro??0,tx:0,ty:0,tz:0},a=e=>{let t=of(i,r[0],r[1],r[2]);i.tx+=e[0]-t[0],i.ty+=e[1]-t[1],i.tz+=e[2]-t[2]},o=e=>{let t=of(i,r[0],r[1],r[2]);i.s=e,a(t)},s=e=>{let t=of(i,r[0],r[1],r[2]);i.giro=e,a(t)},c=e.xMais-e.xMenos;e.inicial?Object.assign(i,e.inicial):(i.s=e.escala??Math.min(1.8,Math.max(.45,(c-2*e.alvoProximal)/t.md)),a([(e.xMais+e.xMenos)/2,e.topoInicial,e.margem.cz]));let l=e.antagonista,u=e.vizinhos,d=l?new Sf(n,t.oclusais,(e,t,n,r)=>l.dist(e,t,n,r)):null,f=e.inicial?bf:1/0,p=u?new Sf(n,t.proxMais,(t,n,r,i)=>yf(u,t,n,r,1,e.yProximal,i,f)):null,m=u?new Sf(n,t.proxMenos,(t,n,r,i)=>yf(u,t,n,r,-1,e.yProximal,i,f)):null,h=[0,0,0],g=(e,t)=>{let r=-1/0;for(let a=0;a<e.length;a++){let o=e[a];of(i,n[o*3],n[o*3+1],n[o*3+2],h),h[0]*t>r&&(r=h[0]*t)}return r*t},_=new Float32Array(Cf),v=0,y=()=>{let e=-1/0;for(let r=0;r<t.vestibulares.length;r++){let a=t.vestibulares[r];of(i,n[a*3],n[a*3+1],n[a*3+2],h),h[2]>e&&(e=h[2])}return e},b=!1,x=!1,S=0,C=1,w=1,T=0,E=0,D=NaN,O=NaN,k=e.inicial?1.3:3;for(;S<12;S++){let n=rf(i);if(d)for(let t=0;t<2;t++){let n=d.medir(i,S===0&&t===0&&!e.inicial?8:1.3,S>0||t>0||!!e.inicial);if(!Number.isFinite(n)||(i.ty+=n-e.alvoOclusal,Math.abs(n-e.alvoOclusal)<.003))break}let r=p?p.medir(i,k):1/0,a=m?m.medir(i,k):1/0;S===0&&(b=Number.isFinite(r),x=Number.isFinite(a),k=1.3,f=bf),(!b||!Number.isFinite(r))&&(r=e.xMais-g(t.proxMais,1)+e.alvoProximal),(!x||!Number.isFinite(a))&&(a=g(t.proxMenos,-1)-e.xMenos+e.alvoProximal);let c=r-e.alvoProximal,l=a-e.alvoProximal;if(Math.abs(T)>.008&&Number.isFinite(D)&&(C=Math.min(4,Math.max(.7,-(r-D)/T))),Math.abs(E)>.008&&Number.isFinite(O)&&(w=Math.min(4,Math.max(.7,-(a-O)/E))),T=Math.max(-.7,Math.min(.7,c/C)),E=Math.max(-.7,Math.min(.7,l/w)),D=r,O=a,e.escala===null){let e=i.s*i.ax*t.md;o(i.s*(e+T+E)/e),i.tx+=(T-E)/2}else{let e=(T-E)/2;i.tx+=e,T=e,E=-e}if(e.giro===null&&S<2&&e.giroMax>0){let n=i.giro,r=1/0,a=i.giro;for(let a of[e.giroMax/4,e.giroMax/16]){let o=n;for(let c=-4;c<=4;c++){let l=Math.max(-e.giroMax,Math.min(e.giroMax,o+c*a));s(l),Df(t,i,e.margem,_);let u=Of(_).resto+.02*Math.abs(l);u<r-1e-6&&(r=u,n=l)}}s(Number.isFinite(r)?n:a)}Df(t,i,e.margem,_);let u=Of(_);if(Number.isFinite(u.resto)){let t=-u.dz;if(e.zVestibular!==null){let n=e.zVestibular-y();t=Math.max(-e.descentroMax-u.dz,Math.min(e.descentroMax-u.dz,n))}i.tz+=Math.max(-.8,Math.min(.8,t)),v=u.dz+t}if(Tf.ligado&&console.log(`  rodada ${S}: s ${i.s.toFixed(4)} t ${i.tx.toFixed(3)} ${i.ty.toFixed(3)} ${i.tz.toFixed(3)} gP ${r.toFixed(3)} gM ${a.toFixed(3)} (onde ${p?.onde} ${m?.onde}) dz ${u.dz.toFixed(3)} resto ${u.resto.toFixed(3)}`),Math.abs(i.tx-n.tx)+Math.abs(i.ty-n.ty)+Math.abs(i.tz-n.tz)+Math.abs(i.s-n.s)*t.md+Math.abs(i.giro-n.giro)*4<.006&&S>=1){S++;break}}let A=d?d.medir(i,1.3):1/0;d&&Number.isFinite(A)&&Math.abs(A-e.alvoOclusal)>.002&&(i.ty+=A-e.alvoOclusal,A=d.medir(i,1.3));let j=p?p.medir(i,1.3):1/0,M=m?m.medir(i,1.3):1/0;return Df(t,i,e.margem,_),{pose:i,rodadas:S,oclusal:A,mais:j,menos:M,temMais:b,temMenos:x,vl:e.zVestibular===null?`margem`:`arcada`,descentro:v,excesso:_,avaliacoes:(d?.avaliacoes??0)+(p?.avaliacoes??0)+(m?.avaliacoes??0)}}function Af(e,t){let n=new Float32Array(e.length);for(let r=0;r+2<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;n[i]+=p,n[i+1]+=m,n[i+2]+=h,n[a]+=p,n[a+1]+=m,n[a+2]+=h,n[o]+=p,n[o+1]+=m,n[o+2]+=h}for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2])||1;n[e]/=t,n[e+1]/=t,n[e+2]/=t}return n}function jf(e,t){let n=new Uint32Array(t+1);for(let t=0;t<e.length;t++)n[e[t]+1]+=2;for(let e=0;e<t;e++)n[e+1]+=n[e];let r=new Uint32Array(n[t]),i=n.slice(0,t);for(let t=0;t+2<e.length;t+=3){let n=e[t],a=e[t+1],o=e[t+2];r[i[n]++]=a,r[i[n]++]=o,r[i[a]++]=n,r[i[a]++]=o,r[i[o]++]=n,r[i[o]++]=a}let a=new Uint32Array(t+1),o=new Uint32Array(r.length),s=0;for(let e=0;e<t;e++){a[e]=s;for(let t=n[e];t<n[e+1];t++){let n=r[t],i=!1;for(let t=a[e];t<s;t++)if(o[t]===n){i=!0;break}i||(o[s++]=n)}}return a[t]=s,{off:a,nb:o.subarray(0,s)}}function Mf(e,t,n,r=1e-4){let i=Math.floor(e.length/3),a=new Int8Array(i);for(let e=0;e<i;e++)a[e]=n[e]>r?1:n[e]<-r?-1:0;let o=new Int32Array(i).fill(-1),s=[],c=[],l=[],u=new Map,d=new Map,f=t=>{let n=o[t];return n<0&&(n=s.length/3,o[t]=n,s.push(e[t*3],e[t*3+1],e[t*3+2]),l.push(t)),n},p=(t,r)=>{let i=Math.min(t,r),a=Math.max(t,r),o=i*4294967296+a,c=d.get(o);if(c===void 0){let t=n[i]/(n[i]-n[a]);c=s.length/3,s.push(e[i*3]+(e[a*3]-e[i*3])*t,e[i*3+1]+(e[a*3+1]-e[i*3+1])*t,e[i*3+2]+(e[a*3+2]-e[i*3+2])*t),l.push(-1),u.set(c,[i,a,t]),d.set(o,c)}return c},m=[];for(let e=0;e+2<t.length;e+=3){let n=[t[e],t[e+1],t[e+2]],r=[a[n[0]],a[n[1]],a[n[2]]];if(+(r[0]>0)+ +(r[1]>0)+ +(r[2]>0)){if(!(+(r[0]<0)+ +(r[1]<0)+ +(r[2]<0)))c.push(f(n[0]),f(n[1]),f(n[2]));else{m.length=0;for(let e=0;e<3;e++){let t=n[e],i=n[(e+1)%3];r[e]>=0&&m.push(f(t)),r[e]*r[(e+1)%3]<0&&m.push(p(t,i))}for(let e=1;e+1<m.length;e++)c.push(m[0],m[e],m[e+1])}}}return{positions:s,index:c,origem:l,aresta:u}}function Nf(e,t,n=-1){let r=Math.floor(e.length/3),i=new Int32Array(t);for(let e=0;e<t;e++)i[e]=e;let a=e=>{for(;i[e]!==e;)i[e]=i[i[e]],e=i[e];return e};for(let t=0;t<r;t++){let n=a(e[t*3]),r=a(e[t*3+1]),o=a(e[t*3+2]);r!==n&&(i[r]=n),o!==n&&(i[a(o)]=n)}let o=-1;if(n>=0)o=a(n);else{let t=new Map,n=0;for(let i=0;i<r;i++){let r=a(e[i*3]),s=(t.get(r)??0)+1;t.set(r,s),s>n&&(n=s,o=r)}}let s=[];for(let t=0;t<r;t++)a(e[t*3])===o&&s.push(t);return s}function Pf(e){let t=new Map,n=(e,t)=>e*4294967296+t;for(let r=0;r+2<e.length;r+=3)for(let i=0;i<3;i++)t.set(n(e[r+i],e[r+(i+1)%3]),r+i);let r=new Map;for(let e of t.keys()){let i=Math.floor(e/4294967296),a=e%4294967296;if(t.has(n(a,i)))continue;let o=r.get(i);o||r.set(i,o=[]),o.push(a)}let i=[],a=new Set;for(let[e]of r){if(a.has(e))continue;let t=[],n=e;for(let i=0;i<=r.size+1&&!a.has(n);i++){a.add(n),t.push(n);let i=r.get(n);if(!i||(n=i.find(e=>!a.has(e))??i[0],n===e))break}t.length>=3&&i.push(t)}return i}function Ff(e,t){let n=0;for(let r=0;r+2<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3;n+=e[i]*(e[a+1]*e[o+2]-e[a+2]*e[o+1])-e[i+1]*(e[a]*e[o+2]-e[a+2]*e[o])+e[i+2]*(e[a]*e[o+1]-e[a+1]*e[o])}return n/6}function If(e,t,n,r,i){let a=t.length,o=r.length,s=new Map;for(let e=0;e<a;e++)s.set(t[e],e);let c=new Set(r),l=e=>{let t=s.get(e);return t===void 0?i(e):r[n[t]]},u=Math.max(8,Math.floor(o/6)),d=[],f=(e,t)=>{let i=n[s.get(e)],a=n[s.get(t)];if(i===a)return[];let c=((a-i)%o+o)%o,l=o-c,d=c<=l?1:-1;if(Math.min(c,l)>u)return null;let f=[];for(let e=((i+d)%o+o)%o;e!==a;e=((e+d)%o+o)%o)f.push(r[e]);return f};for(let t=0;t+2<e.length;t+=3){let n=[e[t],e[t+1],e[t+2]],r=[l(n[0]),l(n[1]),l(n[2])],i=[null,null,null],a=!1;for(let e=0;e<3;e++){if(s.get(n[e])===void 0||s.get(n[(e+1)%3])===void 0)continue;let t=f(n[e],n[(e+1)%3]);t&&t.length&&(i[e]=t,a=!0)}if(c.has(r[0])&&c.has(r[1])&&c.has(r[2]))continue;if(!a){r[0]!==r[1]&&r[1]!==r[2]&&r[2]!==r[0]&&d.push(r[0],r[1],r[2]);continue}let o=[{v:[r[0],r[1],r[2]],mid:i}];for(;o.length;){let e=o.pop(),t=e.mid.findIndex(e=>e!==null&&e.length>0);if(t<0){e.v[0]!==e.v[1]&&e.v[1]!==e.v[2]&&e.v[2]!==e.v[0]&&d.push(e.v[0],e.v[1],e.v[2]);continue}let n=e.v[t],r=e.v[(t+1)%3],i=e.v[(t+2)%3],a=[n,...e.mid[t],r],s=e.mid[(t+1)%3],c=e.mid[(t+2)%3];for(let e=0;e+1<a.length;e++)o.push({v:[a[e],a[e+1],i],mid:[null,e+2===a.length?s:null,e===0?c:null]})}}return d}function Lf(e,t,n=1e-4){let r=e.length;if(r<3)return e.slice();let i=(e,n)=>{let r=(n-e)%t;return r>t/2?r-=t:r<-t/2&&(r+=t),r},a=0;for(let t=0;t<r;t++)a+=Math.sign(i(e[t],e[(t+1)%r]));let o=a>=0?1:-1,s=0;for(let t=1;t<r;t++)(o>0?e[t]<e[s]:e[t]>e[s])&&(s=t);let c=Array(r),l=e[s],u=0;c[s]=e[s];for(let a=1;a<r;a++){let d=(s+a)%r,f=i(l,e[d])*o;f<n&&(f=n),u+f>t-n*(r-a)&&(f=Math.max(n*.5,(t-u)/(r-a+1))),u+=f,l+=f*o,c[d]=(l%t+t)%t}return c}function Rf(e,t,n,r,i,a){let o=(e,t)=>e<t?e*4294967296+t:t*4294967296+e,s=new Map;for(let e=0;e+2<t.length;e+=3)for(let n=0;n<3;n++){let r=o(t[e+n],t[e+(n+1)%3]);s.set(r,(s.get(r)??0)+1)}let c=new Map,l=[],u=[],d=(t,n)=>Math.hypot(e[t*3]-e[n*3],e[t*3+1]-e[n*3+1],e[t*3+2]-e[n*3+2]),f=(e,t)=>{let f=o(e,t),p=c.get(f);if(p!==void 0)return p;if(s.get(f)!==2||!r(e,t)||d(e,t)<=i)return-1;let m=a?a(Math.min(e,t),Math.max(e,t)):.5;return m>0&&m<1?(p=n+l.length,l.push([Math.min(e,t),Math.max(e,t)]),u.push(m),c.set(f,p),p):-1};for(let e=0;e+2<t.length;e+=3)for(let n=0;n<3;n++)f(t[e+n],t[e+(n+1)%3]);let p=[],m=(t,r)=>{let[i,a]=l[t-n],o=u[t-n];return Math.hypot(e[i*3]+(e[a*3]-e[i*3])*o-e[r*3],e[i*3+1]+(e[a*3+1]-e[i*3+1])*o-e[r*3+1],e[i*3+2]+(e[a*3+2]-e[i*3+2])*o-e[r*3+2])};for(let e=0;e+2<t.length;e+=3){let n=[t[e],t[e+1],t[e+2]],r=[0,1,2].map(e=>{let t=c.get(o(n[e],n[(e+1)%3]));return t===void 0?-1:t}),i=+(r[0]>=0)+ +(r[1]>=0)+ +(r[2]>=0);if(i===0)p.push(n[0],n[1],n[2]);else if(i===3)p.push(n[0],r[0],r[2],r[0],n[1],r[1],r[2],r[1],n[2],r[0],r[1],r[2]);else if(i===1){let e=r.findIndex(e=>e>=0);p.push(n[e],r[e],n[(e+2)%3],r[e],n[(e+1)%3],n[(e+2)%3])}else{let e=r.findIndex(e=>e<0),t=n[e],i=n[(e+1)%3],a=n[(e+2)%3],o=r[(e+1)%3],s=r[(e+2)%3];p.push(o,a,s),m(o,t)<=m(s,i)?p.push(t,i,o,t,o,s):p.push(t,i,s,i,o,s)}}return{index:p,novos:l,fr:u}}var zf=[[1/3,1/3,1/3],[.5,.5,0],[0,.5,.5],[.5,0,.5]];function Bf(e,t,n,r,i,a,o={}){let s=o.rodadas??12,c=o.passoMax??.05,l=o.limite??.2,u=o.ganho??1.05,d=e.length/3,f=Array.from({length:d},()=>[]),p=n??Array.from({length:Math.floor(t.length/3)},(e,t)=>t*3);for(let e of p)for(let n=0;n<3;n++)f[t[e+n]].push(e);let m=new Float32Array(d),h=p,g=0,_=0,v=0,y=0;for(;g<s;g++){let n=new Float32Array(d),o=!1;for(let i of h){let s=t[i],c=t[i+1],l=t[i+2];for(let u of zf){let d=a(e[s*3]*u[0]+e[c*3]*u[1]+e[l*3]*u[2],e[s*3+1]*u[0]+e[c*3+1]*u[1]+e[l*3+1]*u[2],e[s*3+2]*u[0]+e[c*3+2]*u[1]+e[l*3+2]*u[2],i,u);if(Number.isFinite(d)&&(g===0&&y++,d<v&&(v=d),!(d>=-1e-5))){o=!0;for(let e=0;e<3;e++){let a=t[i+e];if(!r[a]||u[e]<=0)continue;let o=-d/u[e];o>n[a]&&(n[a]=o)}}}}if(!o)break;let s=new Set;for(let t=0;t<d;t++){if(n[t]<=0||m[t]>=l)continue;let r=Math.min(c,n[t]*u,l-m[t]);m[t]||_++,m[t]+=r,e[t*3]+=i[t*3]*r,e[t*3+1]+=i[t*3+1]*r,e[t*3+2]+=i[t*3+2]*r;for(let e of f[t])s.add(e)}if(!s.size)break;h=Array.from(s),v=0}let b=0;for(let e=0;e<d;e++)m[e]>b&&(b=m[e]);return{empurraoMax:b,vertices:_,rodadas:g,piorFolga:v,amostras:y}}function Vf(e,t,n,r=1){let i=t.length/3,a=0;for(let e of t)e>=a&&(a=e+1);let o=n=>{let r=t[n*3]*3,i=t[n*3+1]*3,a=t[n*3+2]*3,o=e[i]-e[r],s=e[i+1]-e[r+1],c=e[i+2]-e[r+2],l=e[a]-e[r],u=e[a+1]-e[r+1],d=e[a+2]-e[r+2];return[s*d-c*u,c*l-o*d,o*u-s*l]},s=Array.from({length:a},()=>[]),c=[],l=new Uint8Array(i),u=new Uint8Array(a);for(let e=0;e<i;e++){c.push(o(e));for(let r=0;r<3;r++){let i=t[e*3+r];s[i].push(e),n(i)&&(u[i]=1)}}for(let e=0;e<r;e++){let e=[];for(let n=0;n<i;n++){let r=t[n*3],i=t[n*3+1],a=t[n*3+2];if(u[r]||u[i]||u[a])for(let t of[r,i,a])u[t]||e.push(t)}for(let t of e)u[t]=1}for(let e=0;e<i;e++)(u[t[e*3]]||u[t[e*3+1]]||u[t[e*3+2]])&&(l[e]=1);let d=e=>Math.hypot(c[e][0],c[e][1],c[e][2]),f=e=>{let n=new Set([t[e*3],t[e*3+1],t[e*3+2]]),r=new Set([e]);for(let e=0;e<3;e++){let e=[0,0,0],i=new Set;for(let a of n)for(let n of s[a])if(!r.has(n)){r.add(n);for(let e=0;e<3;e++)i.add(t[n*3+e]);l[n]||(e[0]+=c[n][0],e[1]+=c[n][1],e[2]+=c[n][2])}if(Math.hypot(e[0],e[1],e[2])>0)return e;n=i}return null},p=new Map,m=new Set;for(let e=0;e<i;e++){if(!l[e]||d(e)<1e-9)continue;let t=f(e);t&&(p.set(e,t),c[e][0]*t[0]+c[e][1]*t[1]+c[e][2]*t[2]<0&&m.add(e))}if(!m.size)return{index:t,invertidos:0,grupos:0,falhas:0};let h=(e,t)=>e*4294967296+t,g=new Map;for(let e=0;e<i;e++)for(let n=0;n<3;n++)g.set(h(t[e*3+n],t[e*3+(n+1)%3]),e);let _=e=>{let n=[];for(let r=0;r<3;r++){let i=g.get(h(t[e*3+(r+1)%3],t[e*3+r]));i!==void 0&&n.push(i)}return n},v=new Map,y=[],b=new Set(m);for(let e of m)for(let t of _(e))b.add(t);for(let e of b){if(v.has(e))continue;let t=[],n=[e];for(v.set(e,y.length);n.length;){let e=n.pop();t.push(e);for(let t of _(e))b.has(t)&&!v.has(t)&&(v.set(t,y.length),n.push(t))}y.push(t)}let x=new Set,S=[],C=0,w=0;for(let r of y){if(!r.some(e=>m.has(e)))continue;let i=new Set(r),a=new Map,o=!0;for(let e of r)for(let n=0;n<3;n++){let r=t[e*3+n],s=t[e*3+(n+1)%3],c=g.get(h(s,r));c!==void 0&&i.has(c)||(a.has(r)&&(o=!1),a.set(r,s))}if(!o||a.size<3){C++;continue}let s=a.keys().next().value,l=[s];for(let e=a.get(s);e!==s;e=a.get(e)){if(e===void 0||l.length>a.size){o=!1;break}l.push(e)}if(!o||l.length!==a.size){C++;continue}let u=[0,0,0];for(let e of r){let t=p.get(e),n=m.has(e)?t:c[e];if(n){let e=Math.hypot(n[0],n[1],n[2])||1;u[0]+=n[0]/e,u[1]+=n[1]/e,u[2]+=n[2]/e}}let d=Math.hypot(u[0],u[1],u[2]);if(d<1e-9){C++;continue}u[0]/=d,u[1]/=d,u[2]/=d;let f=Uf(e,l,u,n);if(!f)C++;else{for(let e of r)x.add(e);S.push(...f),w++}}if(!x.size)return{index:t,invertidos:m.size,grupos:0,falhas:C};let T=[];for(let e=0;e<i;e++)x.has(e)||T.push(t[e*3],t[e*3+1],t[e*3+2]);return T.push(...S),{index:T,invertidos:m.size,grupos:w,falhas:C}}function Hf(e){let t=Math.floor(e.length/3),n=new Map,r=new Uint8Array(t),i=0;for(let a=0;a<t;a++){let t=e[a*3],o=e[a*3+1],s=e[a*3+2];if(t===o||o===s||s===t){r[a]=1,i++;continue}let c=[t,o,s].sort((e,t)=>e-t).join(`_`),l=n.get(c)??{mais:[],menos:[]};n.set(c,l),(t<o&&o<s||o<s&&s<t||s<t&&t<o?l.mais:l.menos).push(a)}for(let e of n.values())for(let t=Math.min(e.mais.length,e.menos.length),n=0;n<t;n++)r[e.mais[n]]=1,r[e.menos[n]]=1,i+=2;if(!i)return{index:Array.from(e),removidos:0};let a=[];for(let n=0;n<t;n++)r[n]||a.push(e[n*3],e[n*3+1],e[n*3+2]);return{index:a,removidos:i}}function Uf(e,t,n,r){let i=Math.abs(n[0])<.9?[1,0,0]:[0,1,0],a=[n[1]*i[2]-n[2]*i[1],n[2]*i[0]-n[0]*i[2],n[0]*i[1]-n[1]*i[0]],o=Math.hypot(...a);a=[a[0]/o,a[1]/o,a[2]/o];let s=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],c=t=>e[t*3]*a[0]+e[t*3+1]*a[1]+e[t*3+2]*a[2],l=t=>e[t*3]*s[0]+e[t*3+1]*s[1]+e[t*3+2]*s[2],u=(e,t,n)=>(c(t)-c(e))*(l(n)-l(e))-(l(t)-l(e))*(c(n)-c(e)),d=t.slice(),f=[],p=0;for(let e=0;e<d.length;e++){let t=d[e],n=d[(e+1)%d.length];p+=c(t)*l(n)-c(n)*l(t)}if(p<=0)return null;if(d.length<=40)return Wf(d,d.map(c),d.map(l),d.map(r));let m=(e,t,n,r)=>{let i=u(t,n,e),a=u(n,r,e),o=u(r,t,e);return i>1e-12&&a>1e-12&&o>1e-12};for(;d.length>3;){let e=-1,t=-1/0,n=d.length;for(let i=0;i<n;i++){let a=d[(i+n-1)%n],o=d[i],s=d[(i+1)%n],c=u(a,o,s);if(c<-1e-12||r(a)&&r(o)&&r(s))continue;let l=!0;for(let e=0;e<n&&l;e++){let t=d[e];t!==a&&t!==o&&t!==s&&m(t,a,o,s)&&(l=!1)}l&&c>t&&(t=c,e=i)}if(e<0)return null;let i=d.length;f.push(d[(e+i-1)%i],d[e],d[(e+1)%i]),d.splice(e,1)}return f.push(d[0],d[1],d[2]),f}function Wf(e,t,n,r){let i=e.length,a=(e,r,i)=>(t[r]-t[e])*(n[i]-n[e])-(n[r]-n[e])*(t[i]-t[e]),o=(e,t,n,r)=>{if(e===n||e===r||t===n||t===r)return!1;let i=a(n,r,e),o=a(n,r,t),s=a(e,t,n),c=a(e,t,r);return(i>1e-12&&o<-1e-12||i<-1e-12&&o>1e-12)&&(s>1e-12&&c<-1e-12||s<-1e-12&&c>1e-12)},s=(e,t)=>{for(let n=0;n<i;n++)if(o(e,t,n,(n+1)%i))return!1;return!0},c=new Float64Array(i*i).fill(1/0),l=new Int32Array(i*i).fill(-1);for(let e=0;e+1<i;e++)c[e*i+e+1]=0;let u=(e,r)=>(t[e]-t[r])**2+(n[e]-n[r])**2;for(let e=2;e<i;e++)for(let t=0;t+e<i;t++){let n=t+e;for(let e=t+1;e<n;e++){let o=a(t,e,n);if(o<-1e-12||r[t]&&r[e]&&r[n])continue;let d=c[t*i+e]+c[e*i+n];if(!Number.isFinite(d))continue;let f=!0;for(let r=0;r<i&&f;r++)r!==t&&r!==e&&r!==n&&a(t,e,r)>1e-12&&a(e,n,r)>1e-12&&a(n,t,r)>1e-12&&(f=!1);if(!f||e-t>1&&!s(t,e)||n-e>1&&!s(e,n)||(t!==0||n!==i-1)&&!s(t,n))continue;let p=Math.sqrt(u(t,e))+Math.sqrt(u(e,n))+Math.sqrt(u(n,t)),m=d+(o>1e-12?Math.min(1e6,p*p/(2*Math.sqrt(3)*o)):1e6);m<c[t*i+n]&&(c[t*i+n]=m,l[t*i+n]=e)}}if(!Number.isFinite(c[i-1]))return null;let d=[],f=[[0,i-1]];for(;f.length;){let[t,n]=f.pop();if(n-t<2)continue;let r=l[t*i+n];d.push(e[t],e[r],e[n]),f.push([t,r],[r,n])}return d}var Gf=new WeakMap,Kf=new WeakMap;function qf(e){let t=Kf.get(e);if(t)return t;let n=e.nOriginal,r=e.P,i=new Float64Array(6),a=Math.max(1,Math.floor(n/256)),o=[];for(let e=0;e<n;e++)for(let t=0;t<3;t++){let a=r[e*3+t];i[t]+=a/n,i[3+t]+=a*a/n}for(let e=0;e<n;e+=a)o.push(r[e*3],r[e*3+1],r[e*3+2]);return t={n,momentos:i,amostra:Float64Array.from(o)},Kf.set(e,t),t}function Jf(e,t){if(!e||!t||e.n!==t.n||e.amostra.length!==t.amostra.length)return!1;for(let n=0;n<e.amostra.length;n++)if(Math.abs(e.amostra[n]-t.amostra[n])>1e-4)return!1;for(let n=0;n<3;n++)if(Math.abs(e.momentos[n]-t.momentos[n])>1e-4)return!1;for(let n=3;n<6;n++)if(Math.abs(e.momentos[n]-t.momentos[n])>1e-4*(1+2*Math.sqrt(Math.max(e.momentos[n],t.momentos[n]))))return!1;return!0}function Yf(e,t){let n=e.length,r=new Float32Array(n),i=[];for(let a=0;a<n;a++){i.length=0;for(let r=-t;r<=t;r++)i.push(e[(a+r+n)%n]);i.sort((e,t)=>e-t),r[a]=i[t]}return r}function Xf(e,t){let n=e.length,r=new Float32Array(n);for(let i=0;i<n;i++){let a=0;for(let r=-t;r<=t;r++)a+=e[(i+r+n)%n];r[i]=a/(2*t+1)}return r}function Zf(e,t=6){let n=Gf.get(e);if(n)return n;let r=e.positions.length/3,i=Pf(e.indices).sort((e,t)=>t.length-e.length)[0]??[],a=new Float32Array((r+i.length)*3);a.set(e.positions);let o=Array.from(e.indices);for(let n=0;n<i.length;n++){let o=i[n],s=(r+n)*3;a[s]=e.positions[o*3],a[s+1]=e.positions[o*3+1]-t,a[s+2]=e.positions[o*3+2]}for(let e=0;e<i.length;e++){let t=i[e],n=i[(e+1)%i.length],a=r+e,s=r+(e+1)%i.length;o.push(n,t,a,n,a,s)}let s=Uint32Array.from(o),c=Af(a,s),l=jf(s,a.length/3),u=new Mt;u.setAttribute(`position`,new ht(a,3)),u.setIndex(new ht(s,1)),Dl(u);let d=1/0,f=-1/0,p=1/0,m=-1/0,h=-1/0;for(let e=0;e<r;e++){let t=a[e*3+1];if(t>h&&(h=t),t<0)continue;let n=a[e*3],r=a[e*3+2];n<d&&(d=n),n>f&&(f=n),r<p&&(p=r),r>m&&(m=r)}let g=h,_=.05*g,v=.75*g,y=new Float32Array(2880).fill(0);for(let e=0;e<r;e++){let t=a[e*3+1];if(t<_||t>v)continue;let n=a[e*3],r=a[e*3+2],i=Math.hypot(n,r),o=Math.atan2(r,n);o<0&&(o+=b);let s=Math.min(71,Math.floor(o/b*72)),c=Math.min(39,Math.floor((t-_)/(v-_)*40));i>y[s*40+c]&&(y[s*40+c]=i)}let x=new Float32Array(72),S=new Float32Array(72);for(let e=0;e<72;e++){let t=0,n=0;for(let r=0;r<40;r++){let i=0,a=0;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let o=r+n;if(o<0||o>=40)continue;let s=y[(e+t+72)%72*40+o];s>0&&(i+=s,a++)}i=a?i/a:0,i>t+1e-4&&(t=i,n=r)}x[e]=_+(n+.5)/40*(v-_),S[e]=t}x=Xf(Yf(x,3),2),S=Xf(S,1);let C=(e,t)=>{let n=Math.atan2(t,e);n<0&&(n+=b);let r=n/b*72-.5,i=Math.floor(r),a=r-i;return x[(i+72)%72]*(1-a)+x[(i+1+72)%72]*a},w=[],T=[],E=[],D=[],O=[],k=(d+f)/2,A=(f-d)/2;for(let e=0;e<r;e++){let t=a[e*3],n=a[e*3+1],r=a[e*3+2];n>C(t,r)&&D.push(e),n>.4*g&&c[e*3+1]>.1&&w.push(e),n>.3*g&&c[e*3+2]>.5&&r>(p+m)/2+.25*(m-p)&&O.push(e),n>.15*g&&(c[e*3]>.15&&t-k>.2*A?T.push(e):c[e*3]<-.15&&t-k<-.2*A&&E.push(e))}let j=-1,M=-1,N=(p+m)/2;for(let e=0;e<r;e++){let t=a[e*3+1];a[e*3+2]>N?(j<0||t>a[j*3+1])&&(j=e):(M<0||t>a[M*3+1])&&(M=e)}let P=-1;if(j>=0&&M>=0){let e=a[j*3],t=a[j*3+2],n=a[M*3],i=a[M*3+2],o=n-e,s=i-t,l=o*o+s*s||1;for(let n=0;n<r;n++){if(c[n*3+1]<.3||a[n*3+1]<.4*g)continue;let r=a[n*3]-e,i=a[n*3+2]-t,u=(r*o+i*s)/l;u<.15||u>.85||Math.abs(r*s-i*o)/Math.sqrt(l)>.25*A||(P<0||a[n*3+1]<a[P*3+1])&&(P=n)}}let F={P:a,I:s,N:c,adj:l,nOriginal:r,geometry:u,x0:d,x1:f,z0:p,z1:m,topo:h,md:f-d,vl:m-p,altura:g,eqY:x,eqR:S,oclusais:Uint32Array.from(w),proxMais:Uint32Array.from(T),proxMenos:Uint32Array.from(E),vestibulares:Uint32Array.from(O),acima:Uint32Array.from(D),cuspideV:j,cuspideL:M,fossa:P,dispose:()=>{kl(u),Gf.delete(e)}};return Gf.set(e,F),F}var Qf=5e-4,$f=.02,ep=.2,tp=(e,t,n)=>e*Math.min(1,n/Math.max(t,ep));function np(e,t,n,r,i){let a=t.triangulos>e.triangulos?t:e,o=a.geometry.getAttribute(`position`).array,s=o.length/3,c=a.geometry.getIndex().array,l=c;if(a.sinal<0){let e=new Uint32Array(c.length);for(let t=0;t+2<c.length;t+=3)e[t]=c[t],e[t+1]=c[t+2],e[t+2]=c[t+1];l=e}let u=Af(o,l),d=[0,0,0],f=0;for(let e=0;e<n.n;e++)n.tangente(e,d),f+=d[2]*(0-n.p[e*3])+-d[0]*(0-n.p[e*3+2]);let p=f>=0?1:-1,m=new Float32Array(s),h={u:0,d:0,x:0,y:0,z:0,seg:0};for(let e=0;e<s;e++){let t=o[e*3],r=o[e*3+1],i=o[e*3+2];if(n.proximo(t,r,i,h),h.d>1.6){m[e]=h.d;continue}n.tangente(h.seg,d);let a=u[e*3],s=u[e*3+1],c=u[e*3+2],l=p*(s*d[2]-c*d[1]),f=p*(c*d[0]-a*d[2]),g=p*(a*d[1]-s*d[0]),_=(t-h.x)*l+(r-h.y)*f+(i-h.z)*g;m[e]=_>=0?h.d:-h.d}let g=Mf(o,l,m,$f),_=g.positions.length/3;if(g.index.length<9)return`O preparo não tem superfície dentro da linha de margem.`;let v=0;for(let e=1;e<_;e++)g.positions[e*3+1]>g.positions[v*3+1]&&(v=e);let y=Nf(g.index,_,v),b=[];for(let e of y)b.push(g.index[e*3],g.index[e*3+1],g.index[e*3+2]);let x=g.positions,S=Pf(b);if(!S.length)return`O preparo dentro da linha de margem não tem bordo: confira a linha.`;let C=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n]*3,i=e[(n+1)%e.length]*3;t+=Math.hypot(x[r]-x[i],x[r+1]-x[i+1],x[r+2]-x[i+2])}return t};S.sort((e,t)=>C(t)-C(e));let w=S[0],T=0;for(let e=1;e<S.length;e++){let t=S[e],n=0,r=0,i=0;for(let e of t)n+=x[e*3],r+=x[e*3+1],i+=x[e*3+2];let a=x.length/3;x.push(n/t.length,r/t.length,i/t.length),g.origem.push(-1);for(let e=0;e<t.length;e++)b.push(t[(e+1)%t.length],t[e],a);T++}let E=x.length/3,D=Af(x,b),O=new Float32Array(E*3),k=new Uint8Array(E);for(let e of w)k[e]=1;let A=t,j=new Float32Array(E),M=new Uint8Array(E);for(let e=0;e+2<b.length;e+=3){let t=b[e]*3,n=b[e+1]*3,r=b[e+2]*3,i=x[n]-x[t],a=x[n+1]-x[t+1],o=x[n+2]-x[t+2],s=x[r]-x[t],c=x[r+1]-x[t+1],l=x[r+2]-x[t+2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let e of[t,n,r])D[e]*u+D[e+1]*d+D[e+2]*f<.966&&(M[e/3]=1)}let N=e=>tp(r,i,e);for(let e=0;e<E;e++){let t=x[e*3],r=x[e*3+1],i=x[e*3+2];if(j[e]=n.distancia(t,r,i),!k[e]){let n=N(j[e]),a=D[e*3],o=D[e*3+1],s=D[e*3+2],c=n;for(let l=0;l<2&&M[e];l++){let e=A.dist(t+a*c,r+o*c,i+s*c,n+.3);if(!Number.isFinite(e)||Math.abs(e-n)<.002)break;c=Math.min(4*n+.02,Math.max(0,c+(n-e)))}t+=a*c,r+=o*c,i+=s*c}O[e*3]=t,O[e*3+1]=r,O[e*3+2]=i}let P=[],F=0,I=0;for(let e of w)n.proximo(x[e*3],x[e*3+1],x[e*3+2],h),h.d>F&&(F=h.d),h.d>.3&&I++,O[e*3]=h.x,O[e*3+1]=h.y,O[e*3+2]=h.z,P.push(h.u),j[e]=0;let ee=new Uint8Array(E);for(let e=0;e<E;e++)ee[e]=+!k[e];let L=Uint32Array.from(b),R=Bf(O,L,null,ee,D,(e,t,n,r,i)=>{let a=L[r],o=L[r+1],s=L[r+2],c=k[a]||k[o]||k[s],l=j[a]*i[0]+j[o]*i[1]+j[s]*i[2],u=N(l),d=c?Qf:Math.max(Qf,Math.min(u,.6*u+.002)),f=A.dist(e,t,n,u+.3);return Number.isFinite(f)?f-d:1/0},{rodadas:40,passoMax:.05,limite:.2}),te=-1/0;for(let e=0;e<E;e++)O[e*3+1]>te&&(te=O[e*3+1]);return{positions:O,index:L,laco:w,u:P,prenderMax:F,longe:I,furos:T,teto:te,faces:{empurraoMax:R.empurraoMax,vertices:R.vertices,rodadas:R.rodadas,piorFolga:R.piorFolga}}}function rp(e,t){let n=new Mt;return n.setAttribute(`position`,new ht(e,3)),n.setIndex(new ht(t,1)),Dl(n),n}function ip(e,t,n,r=null){if(!t.length||!n.length)return 0;let i=rp(e,Uint32Array.from(t)),a=rp(e,Uint32Array.from(n)),o=i.getIndex().array,s=a.getIndex().array,c=0;return i.boundsTree.bvhcast(a.boundsTree,new st,{intersectsTriangles:(e,t,n,i)=>{let a=[e.a,e.b,e.c],l=[t.a,t.b,t.c];return a.some(e=>l.some(t=>e.distanceToSquared(t)<1e-12))||e.intersectsTriangle(t)&&(c++,r&&r.push(o[n*3],o[n*3+1],o[n*3+2],s[i*3],s[i*3+1],s[i*3+2])),!1}}),kl(i),kl(a),c}function ap(e,t,n,r,i,a){let o=1e-6,s=e[t*3],c=e[t*3+1],l=e[t*3+2],u=e[n*3]-s,d=e[n*3+1]-c,f=e[n*3+2]-l,p=e[r*3],m=e[r*3+1],h=e[r*3+2],g=e[i*3]-p,_=e[i*3+1]-m,v=e[i*3+2]-h,y=e[a*3]-p,b=e[a*3+1]-m,x=e[a*3+2]-h,S=d*x-f*b,C=f*y-u*x,w=u*b-d*y,T=g*S+_*C+v*w;if(Math.abs(T)<1e-14)return!1;let E=s-p,D=c-m,O=l-h,k=(E*S+D*C+O*w)/T;if(k<=o||k>=.999999)return!1;let A=D*v-O*_,j=O*g-E*v,M=E*_-D*g,N=(u*A+d*j+f*M)/T;if(N<=o||k+N>=.999999)return!1;let P=(y*A+b*j+x*M)/T;return P>o&&P<.999999}function op(e,t,n=null){let r=rp(e,Uint32Array.from(t)),i=r.getIndex().array,a=new Set,o=0;return r.boundsTree.bvhcast(r.boundsTree,new st,{intersectsTriangles:(t,r,s,c)=>{if(s>=c)return!1;let l=i[s*3],u=i[s*3+1],d=i[s*3+2],f=i[c*3],p=i[c*3+1],m=i[c*3+2],h=e=>e===l||e===u||e===d,g=e=>e===f||e===p||e===m;if(+!!g(l)+ +!!g(u)+ +!!g(d)>=2||lp(t,r)||lp(r,t)||!(!h(f)&&!h(p)&&ap(e,f,p,l,u,d)||!h(p)&&!h(m)&&ap(e,p,m,l,u,d)||!h(m)&&!h(f)&&ap(e,m,f,l,u,d)||!g(l)&&!g(u)&&ap(e,l,u,f,p,m)||!g(u)&&!g(d)&&ap(e,u,d,f,p,m)||!g(d)&&!g(l)&&ap(e,d,l,f,p,m)))return!1;let _=[[l,u,d].sort((e,t)=>e-t).join(`,`),[f,p,m].sort((e,t)=>e-t).join(`,`)].sort().join(`|`);return a.has(_)||(a.add(_),o++,n&&n.push(l,u,d,f,p,m)),!1}}),kl(r),o}function sp(e,t,n,r=null){if(!n.length)return 0;let i=rp(e,Uint32Array.from(n)),a=rp(e,Uint32Array.from(t)),o=i.getIndex().array,s=a.getIndex().array,c=new Set,l=(e,t,n)=>[e,t,n].sort((e,t)=>e-t).join(`,`),u=0;return i.boundsTree.bvhcast(a.boundsTree,new st,{intersectsTriangles:(e,t,n,i)=>{let a=[e.a,e.b,e.c],d=[t.a,t.b,t.c];if(a.some(e=>d.some(t=>e.distanceToSquared(t)<1e-12))||!e.intersectsTriangle(t))return!1;let f=l(o[n*3],o[n*3+1],o[n*3+2]),p=l(s[i*3],s[i*3+1],s[i*3+2]);if(f===p)return!1;let m=f<p?`${f}|${p}`:`${p}|${f}`;return c.has(m)||(c.add(m),u++,r&&r.push(o[n*3],o[n*3+1],o[n*3+2],s[i*3],s[i*3+1],s[i*3+2])),!1}}),kl(i),kl(a),u}var cp=(e,t)=>{let n=e.x-t.x,r=e.y-t.y,i=e.z-t.z;return n*n+r*r+i*i<1e-12};function lp(e,t){let n=e.b.x-e.a.x,r=e.b.y-e.a.y,i=e.b.z-e.a.z,a=e.c.x-e.a.x,o=e.c.y-e.a.y,s=e.c.z-e.a.z,c=r*s-i*o,l=i*a-n*s,u=n*o-r*a,d=Math.sqrt(c*c+l*l+u*u);if(d<1e-12)return!1;let f=1e-4*d,p=c*(t.a.x-e.a.x)+l*(t.a.y-e.a.y)+u*(t.a.z-e.a.z),m=c*(t.b.x-e.a.x)+l*(t.b.y-e.a.y)+u*(t.b.z-e.a.z),h=c*(t.c.x-e.a.x)+l*(t.c.y-e.a.y)+u*(t.c.z-e.a.z);return p>f&&m>f&&h>f||p<-f&&m<-f&&h<-f}var up=class{mesma;a;b;ordA;ordB;constructor(e,t,n,r=!1){this.mesma=r,this.a=rp(e,Uint32Array.from(t)),this.b=rp(e,Uint32Array.from(n)),this.ordA=this.a.getIndex().array,this.ordB=this.b.getIndex().array}contar(e=null){if(!this.ordA.length||!this.ordB.length)return 0;Ol(this.a),Ol(this.b);let{ordA:t,ordB:n,mesma:r}=this,i=r?new Set:null,a=(e,t,n)=>[e,t,n].sort((e,t)=>e-t).join(`,`),o=0;return this.a.boundsTree.bvhcast(this.b.boundsTree,new st,{intersectsTriangles:(r,s,c,l)=>{if(cp(r.a,s.a)||cp(r.a,s.b)||cp(r.a,s.c)||cp(r.b,s.a)||cp(r.b,s.b)||cp(r.b,s.c)||cp(r.c,s.a)||cp(r.c,s.b)||cp(r.c,s.c)||lp(r,s)||lp(s,r)||!r.intersectsTriangle(s))return!1;if(i){let e=a(t[c*3],t[c*3+1],t[c*3+2]),r=a(n[l*3],n[l*3+1],n[l*3+2]);if(e===r)return!1;let o=e<r?`${e}|${r}`:`${r}|${e}`;if(i.has(o))return!1;i.add(o)}return o++,e&&e.push(t[c*3],t[c*3+1],t[c*3+2],n[l*3],n[l*3+1],n[l*3+2]),!1}}),o}liberar(){kl(this.a),kl(this.b)}};function dp(e,t,n,r,i,a={}){let o=a.rodadas??40,s=a.passo??.01,c=a.limite??.12,l=[i,...a.outras??[]],u=[];for(let e=0;e+2<n.length;e+=3)(r[n[e]]||r[n[e+1]]||r[n[e+2]])&&u.push(n[e],n[e+1],n[e+2]);let d=new Float32Array(e.length/3),f=new Uint16Array(e.length/3),p=new Uint8Array(e.length/3),m=-1,h=0,g=0,_=1/0,v=0,y=[];for(;g<=o&&(y.length=0,h=a.detector?a.detector.contar(y):ip(e,t,u,y),m<0&&(m=h),h&&g!==o);g++){if(h<_)_=h,v=0;else if(++v>=4*l.length)break;let t=!1;for(let n=0;n<y.length;n+=6)for(let i=3;i<6;i++){let a=y[n+i];if(!r[a]||f[a]>g)continue;f[a]=g+1;let o=Math.min(c-d[a],s*(1+.5*g));if(o<=1e-6)continue;let u=l[Math.min(l.length-1,Math.floor(p[a]++/3))];d[a]+=o,t=!0,e[a*3]+=u[a*3]*o,e[a*3+1]+=u[a*3+1]*o,e[a*3+2]+=u[a*3+2]*o}if(!t)break}let b=0,x=0;for(let e=0;e<d.length;e++)d[e]>0&&(b++,d[e]>x&&(x=d[e]));let S=[0,0,0,0,0,0];for(let e=0;e<d.length;e++)d[e]>0&&S[Math.min(5,Math.floor(d[e]/.05))]++;return{rodadas:g,inicial:Math.max(0,m),restantes:h,vertices:b,deslocamentoMax:x,histograma:S,resto:y.slice(0,36)}}var fp=8,pp=class{p;n;acc;comprimento;raio=new Float64Array(720);altura=new Float64Array(720);yMin;yMax;grupos;cotaGrupo;cx;cz;constructor(e){let t=[],n=Math.floor(e.length/3);for(let r=0;r<n;r++){let n=e[r*3],i=e[r*3+1],a=e[r*3+2],o=t.length;o&&Math.hypot(n-t[o-3],i-t[o-2],a-t[o-1])<1e-5||t.push(n,i,a)}for(;t.length>9&&Math.hypot(t[0]-t[t.length-3],t[1]-t[t.length-2],t[2]-t[t.length-1])<1e-5;)t.length-=3;this.p=Float64Array.from(t),this.n=t.length/3,this.acc=new Float64Array(this.n+1);let r=1/0,i=-1/0,a=0,o=0;for(let e=0;e<this.n;e++){let n=(e+1)%this.n,s=Math.hypot(t[n*3]-t[e*3],t[n*3+1]-t[e*3+1],t[n*3+2]-t[e*3+2]);this.acc[e+1]=this.acc[e]+s,a+=(t[e*3]+t[n*3])*.5*s,o+=(t[e*3+2]+t[n*3+2])*.5*s,t[e*3+1]<r&&(r=t[e*3+1]),t[e*3+1]>i&&(i=t[e*3+1])}this.comprimento=this.acc[this.n],this.yMin=r,this.yMax=i,this.cx=a/this.comprimento,this.cz=o/this.comprimento;let s=Math.ceil(this.n/fp);this.grupos=new Float64Array(s*4),this.cotaGrupo=new Float64Array(s);for(let e=0;e<s;e++){let n=e*fp,r=Math.min(this.n,n+fp),i=1/0,a=-1/0,o=1/0,s=-1/0,c=1/0,l=-1/0;for(let e=n;e<=r;e++){let n=e%this.n*3;i=Math.min(i,t[n]),a=Math.max(a,t[n]),o=Math.min(o,t[n+1]),s=Math.max(s,t[n+1]),c=Math.min(c,t[n+2]),l=Math.max(l,t[n+2])}let u=(i+a)/2,d=(o+s)/2,f=(c+l)/2,p=0;for(let e=n;e<=r;e++){let n=e%this.n*3;p=Math.max(p,Math.hypot(t[n]-u,t[n+1]-d,t[n+2]-f))}this.grupos.set([u,d,f,p*(1+1e-9)+1e-9],e*4)}this.tabelas()}tabelas(){let{p:e,n:t,raio:n,altura:r}=this;n.fill(-1);for(let i=0;i<t;i++){let a=(i+1)%t,o=e[i*3],s=e[i*3+2],c=e[a*3],l=e[a*3+2],u=Math.atan2(s,o),d=Math.atan2(l,c)-u;d>Math.PI?d-=b:d<-Math.PI&&(d+=b);let f=Math.min(u,u+d),p=Math.max(u,u+d);for(let t=Math.ceil(f/b*720);t<=Math.floor(p/b*720);t++){let u=t/720*b,d=Math.cos(u),f=Math.sin(u),p=c-o,m=l-s,h=d*m-f*p;if(Math.abs(h)<1e-12)continue;let g=(f*o-d*s)/h;if(g<-1e-9||g>1+1e-9)continue;let _=(o+p*g)*d+(s+m*g)*f,v=(t%720+720)%720;_>n[v]&&(n[v]=_,r[v]=e[i*3+1]+(e[a*3+1]-e[i*3+1])*g)}}for(let e=0;e<720;e++){if(n[e]>0)continue;let t=1,i=1;for(;t<720&&n[(e-t+720)%720]<=0;)t++;for(;i<720&&n[(e+i)%720]<=0;)i++;let a=(e-t+720)%720,o=(e+i)%720,s=t/(t+i);n[e]=n[a]+(n[o]-n[a])*s,r[e]=r[a]+(r[o]-r[a])*s}}em(e,t={r:0,y:0}){let n=e/b*720;n-=Math.floor(n/720)*720;let r=Math.floor(n),i=n-r,a=(r+1)%720,o=r%720;return t.r=this.raio[o]+(this.raio[a]-this.raio[o])*i,t.y=this.altura[o]+(this.altura[a]-this.altura[o])*i,t}proximo(e,t,n,r={u:0,d:0,x:0,y:0,z:0,seg:0}){let{p:i,n:a,grupos:o,cotaGrupo:s}=this,c=o.length>>2,l=0,u=1/0;for(let r=0;r<c;r++){let i=e-o[r*4],a=t-o[r*4+1],c=n-o[r*4+2],d=Math.sqrt(i*i+a*a+c*c)-o[r*4+3],f=d>0?d*d:0;s[r]=f,f<u&&(u=f,l=r)}let d=1/0,f=0,p=0;for(let r=-1;r<c;r++){let o=r<0?l:r;if(r>=0&&(o===l||s[o]>=d))continue;let c=Math.min(a,(o+1)*fp);for(let r=o*fp;r<c;r++){let o=r+1===a?0:r+1,s=i[r*3],c=i[r*3+1],l=i[r*3+2],u=i[o*3]-s,m=i[o*3+1]-c,h=i[o*3+2]-l,g=e-s,_=t-c,v=n-l,y=u*u+m*m+h*h,b=y>0?(g*u+_*m+v*h)/y:0;b<0?b=0:b>1&&(b=1);let x=g-u*b,S=_-m*b,C=v-h*b,w=x*x+S*S+C*C;w<d&&(d=w,f=r,p=b)}}let m=f+1===a?0:f+1;return r.d=Math.sqrt(d),r.seg=f,r.u=this.acc[f]+(this.acc[f+1]-this.acc[f])*p,r.x=i[f*3]+(i[m*3]-i[f*3])*p,r.y=i[f*3+1]+(i[m*3+1]-i[f*3+1])*p,r.z=i[f*3+2]+(i[m*3+2]-i[f*3+2])*p,r}distancia(e,t,n){return this.proximo(e,t,n,this._tmp).d}_tmp={u:0,d:0,x:0,y:0,z:0,seg:0};ponto(e,t=[0,0,0]){let{p:n,n:r,acc:i}=this,a=this.comprimento;e-=Math.floor(e/a)*a;let o=0,s=r;for(;s-o>1;){let t=o+s>>1;i[t]<=e?o=t:s=t}let c=o+1===r?0:o+1,l=i[o+1]-i[o],u=l>0?(e-i[o])/l:0;return t[0]=n[o*3]+(n[c*3]-n[o*3])*u,t[1]=n[o*3+1]+(n[c*3+1]-n[o*3+1])*u,t[2]=n[o*3+2]+(n[c*3+2]-n[o*3+2])*u,t}tangente(e,t=[0,0,0]){let{p:n,n:r}=this,i=e+1===r?0:e+1,a=n[i*3]-n[e*3],o=n[i*3+1]-n[e*3+1],s=n[i*3+2]-n[e*3+2],c=Math.hypot(a,o,s)||1;return t[0]=a/c,t[1]=o/c,t[2]=s/c,t}};function mp(e,t=.1,n=160){let r=Math.floor(e.length/3),i=0;for(let t=0;t<r;t++){let n=(t+1)%r;i+=Math.hypot(e[n*3]-e[t*3],e[n*3+1]-e[t*3+1],e[n*3+2]-e[t*3+2])}let a=Math.max(n,Math.ceil(i/t)),o=Math.max(1,Math.ceil(a/r)),s=new Float64Array(r*o*3),c=0;for(let t=0;t<r;t++){let n=(t-1+r)%r*3,i=t*3,a=(t+1)%r*3,l=(t+2)%r*3;for(let t=0;t<o;t++){let r=t/o,u=r*r,d=u*r;for(let t=0;t<3;t++){let o=e[n+t],f=e[i+t],p=e[a+t],m=e[l+t];s[c++]=.5*(2*f+(p-o)*r+(2*o-5*f+4*p-m)*u+(3*f-o-3*p+m)*d)}}}return s}var hp=.006;function gp(e,t,n=3e-4,r=.003,i=7,a=.03){let o=e,s=0,c=0,l=0,u=0;if(a>0){let n=Float64Array.from(e.p),r=!1;for(let i=0;i<e.n;i++){let e=t.dist(n[i*3],n[i*3+1],n[i*3+2],a);!Number.isFinite(e)||Math.abs(e)<1e-6||(n[i*3]=t.px,n[i*3+1]=t.py,n[i*3+2]=t.pz,r=!0)}r&&(o=new pp(n))}for(;u<i;u++){let e=o.p,i=o.n,a=[],d=0,f=0;for(let o=0;o<i;o++){let s=(o+1)%i,c=o*3,l=s*3;a.push(e[c],e[c+1],e[c+2]);let u=e[l]-e[c],p=e[l+1]-e[c+1],m=e[l+2]-e[c+2],h=Math.hypot(u,p,m),g=1/0,_=0,v=0,y=0,b=-1/0,x=0,S=0,C=0;for(let n of[.25,.5,.75]){let r=t.dist(e[c]+u*n,e[c+1]+p*n,e[c+2]+m*n,.3);Number.isFinite(r)&&(r<g&&(g=r,_=t.px,v=t.py,y=t.pz),r>b&&(b=r,x=t.px,S=t.py,C=t.pz))}if(!Number.isFinite(g)||(g<d&&(d=g),g>=-n&&b>hp&&(g=-2*n,_=x,v=S,y=C),g>=-n||h<r))continue;let w=((_-e[c])*u+(v-e[c+1])*p+(y-e[c+2])*m)/(h*h||1);w<=.02||w>=.98||Math.hypot(_-(e[c]+u*w),v-(e[c+1]+p*w),y-(e[c+2]+m*w))>.05||(a.push(_,v,y),f++)}if(u===0&&(c=d),l=d,!f)break;s+=f,o=new pp(a)}if(s&&u===i){let e=o.p,n=o.n,r=0;for(let i=0;i<n;i++){let a=(i+1)%n;for(let n of[.25,.5,.75]){let o=t.dist(e[i*3]+(e[a*3]-e[i*3])*n,e[i*3+1]+(e[a*3+1]-e[i*3+1])*n,e[i*3+2]+(e[a*3+2]-e[i*3+2])*n,.3);o<r&&(r=o)}}l=r}return{margem:o,inseridos:s,rodadas:u,piorAntes:c,piorDepois:l}}var _p=.4,vp=.35,yp=.004,bp=[.001,.002,.003,.004],xp=(e,t,n)=>((e+512)*1024+(t+512))*1024+(n+512);function Sp(e,t,n,r,i,a,o={}){let s=o.passos??[.005,.01,.02,.04,.08,.15],c=o.limite??.3,l=o.ajustar,u=e.length/3,d=[];for(let e=0;e+2<t.length;e+=3)d.push(t[e],t[e+1],t[e+2]);for(let e=0;e+2<n.length;e+=3)d.push(n[e],n[e+1],n[e+2]);let f=d.length/3,p=new Map,m=(t,n)=>{let r=1/0,i=1/0,a=1/0,o=-1/0,s=-1/0,c=-1/0;for(let n=0;n<3;n++){let l=d[t*3+n]*3,u=e[l],f=e[l+1],p=e[l+2];r=Math.min(r,u),o=Math.max(o,u),i=Math.min(i,f),s=Math.max(s,f),a=Math.min(a,p),c=Math.max(c,p)}return[Math.floor((r-n)/_p),Math.floor((i-n)/_p),Math.floor((a-n)/_p),Math.floor((o+n)/_p),Math.floor((s+n)/_p),Math.floor((c+n)/_p)]};for(let e=0;e<f;e++){let t=m(e,vp);for(let n=t[0];n<=t[3];n++)for(let r=t[1];r<=t[4];r++)for(let i=t[2];i<=t[5];i++){let t=xp(n,r,i),a=p.get(t);a?a.push(e):p.set(t,[e])}}let h=new Map;for(let e=0;e<f;e++)for(let t=0;t<3;t++){let n=d[e*3+t];if(!r[n])continue;let i=h.get(n);i?i.push(e):h.set(n,[e])}let g=new Rt,_=new Rt,v=(t,n)=>{for(let r=0;r<3;r++){let i=d[n*3+r]*3;(r===0?t.a:r===1?t.b:t.c).set(e[i],e[i+1],e[i+2])}t.needsUpdate=!0},y=(t,n)=>{for(let r=0;r<3;r++){let i=d[t*3+r]*3;for(let t=0;t<3;t++){let r=d[n*3+t]*3,a=e[i]-e[r],o=e[i+1]-e[r+1],s=e[i+2]-e[r+2];if(a*a+o*o+s*s<1e-12)return!0}}return!1},b=new Float32Array(f),x=new Float32Array(f),S=new Float32Array(f),C=new Float32Array(f),w=new Float32Array(f),T=new Float32Array(f),E=t=>{let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let c=0;c<3;c++){let l=d[t*3+c]*3,u=e[l],f=e[l+1],p=e[l+2];u<n&&(n=u),u>a&&(a=u),f<r&&(r=f),f>o&&(o=f),p<i&&(i=p),p>s&&(s=p)}b[t]=n-1e-5,x[t]=r-1e-5,S[t]=i-1e-5,C[t]=a+1e-5,w[t]=o+1e-5,T[t]=s+1e-5};for(let e=0;e<f;e++)E(e);let D=new Int32Array(f),O=0,k=(e,t=1/0)=>{E(e);let n=m(e,.02),r=0,i=!1;O++;for(let a=n[0];a<=n[3];a++)for(let o=n[1];o<=n[4];o++)for(let s=n[2];s<=n[5];s++){let n=p.get(xp(a,o,s));if(n){for(let a of n)if(a!==e&&D[a]!==O&&(D[a]=O,!(C[a]<b[e]||b[a]>C[e]||w[a]<x[e]||x[a]>w[e]||T[a]<S[e]||S[a]>T[e])&&!y(e,a)&&(i||=(v(g,e),!0),v(_,a),!lp(g,_)&&!lp(_,g)&&g.intersectsTriangle(_)&&++r>=t)))return r}}return r},A=(t,n)=>{let r=d[t*3]*3,i=d[t*3+1]*3,a=d[t*3+2]*3,o=e[i]-e[r],s=e[i+1]-e[r+1],c=e[i+2]-e[r+2],l=e[a]-e[r],u=e[a+1]-e[r+1],f=e[a+2]-e[r+2],p=s*f-c*u,m=c*l-o*f,h=o*u-s*l,g=Math.hypot(p,m,h)||1;n[0]=p/g,n[1]=m/g,n[2]=h/g},j=(e,t=1/0)=>{let n=0;for(let r of h.get(e)??[])if(n+=k(r,t-n),n>=t)return n;return n},M=new Float32Array(u),N=new Set,P=0,F=0,I=0,ee=[0,0,0],L=[0,0,0],R=[0,0,0],te=o.orcamento??3e3;for(let t=0;t+5<i.length&&P<te;t+=6){let n=new Set;for(let e=0;e<6;e++)r[i[t+e]]&&h.has(i[t+e])&&n.add(i[t+e]);for(let t of n){if(N.has(t))continue;N.add(t);let n=j(t);if(!n)continue;let r=h.get(t),i=r.map(e=>{let t=[0,0,0];return A(e,t),t}),u=e[t*3],d=e[t*3+1],f=e[t*3+2],p=n,m=u,g=d,_=f,v=!1,y=!!o.anel?.[t],b=y?yp:c;busca:for(let n of y?bp:s)for(let o of a)for(let a of[1,-1]){if(P>=te)break busca;if(M[t]+n>b)continue;let s=o[t*3]*a,c=o[t*3+1]*a,h=o[t*3+2]*a;if(!s&&!c&&!h||(P++,R[0]=u+s*n,R[1]=d+c*n,R[2]=f+h*n,l&&!l(t,R)))continue;e[t*3]=R[0],e[t*3+1]=R[1],e[t*3+2]=R[2];let y=!1;for(let e=0;e<r.length&&!y;e++)A(r[e],L),ee[0]=i[e][0],ee[1]=i[e][1],ee[2]=i[e][2],ee[0]*L[0]+ee[1]*L[1]+ee[2]*L[2]<.2&&(y=!0);if(y)continue;let x=j(t,p);if(x<p&&(p=x,m=R[0],g=R[1],_=R[2],v=!0,!x))break busca}e[t*3]=v?m:u,e[t*3+1]=v?g:d,e[t*3+2]=v?_:f;for(let e of r)E(e);if(v){let e=Math.hypot(m-u,g-d,_-f);M[t]+=e,F++,M[t]>I&&(I=M[t])}}}return{tentativas:P,movidos:F,deslocamentoMax:I}}var Cp=.8,wp=1.6,Tp=1.6,Ep=2.4,Dp=[0,.1,.2,.35,.55,.8,1.1,1.6,2.4];function Op(e,t){if(t<.3)return Float64Array.from(e);let n=Math.min(359,Math.ceil(3*t)),r=new Float64Array(2*n+1),i=0;for(let e=-n;e<=n;e++){let a=Math.exp(-(e*e)/(2*t*t));r[e+n]=a,i+=a}let a=new Float64Array(720);for(let t=0;t<720;t++){let o=0;for(let i=-n;i<=n;i++)o+=r[i+n]*e[(t+i+2880)%720];a[t]=o/i}return a}var kp=class{filtrar;alfa;sigmaMax;tabelas;constructor(e,t,n=!0,r=Cp,i=wp){this.filtrar=n,this.alfa=r,this.sigmaMax=i;let a=Float64Array.from(e),o=720/(b*Math.max(.5,t));this.tabelas=Dp.map(e=>Op(a,e*o))}valor(e,t){let n=this.filtrar?Math.min(this.sigmaMax,this.alfa*Math.max(0,t)):0,r=1;for(;r<Dp.length-1&&Dp[r]<n;)r++;let i=Math.min(1,Math.max(0,(n-Dp[r-1])/(Dp[r]-Dp[r-1]))),a=e/b*720;a-=Math.floor(a/720)*720;let o=Math.floor(a),s=a-o,c=(o+1)%720,l=o%720,u=this.tabelas[r-1],d=this.tabelas[r],f=u[l]+(u[c]-u[l])*s;return f+(d[l]+(d[c]-d[l])*s-f)*i}};function Ap(e){let{pos:t,ref:n,adj:r,vertices:i}=e,a=t.length/3,o=new Float32Array(a*3),s=new Uint8Array(a);for(let e=0;e<a;e++)for(let r=0;r<3;r++)o[e*3+r]=t[e*3+r]-n[e*3+r];for(let a=0;a<e.iteracoes;a++)for(let a=0;a<i.length;a++){let c=i[a],l=r.off[c],u=r.off[c+1],d=u-l;if(d<2)continue;let f=0,p=0,m=0;for(let e=l;e<u;e++){let t=r.nb[e];f+=o[t*3],p+=o[t*3+1],m+=o[t*3+2]}for(let r of[.5,.25]){let i=o[c*3]+(f/d-o[c*3])*r,a=o[c*3+1]+(p/d-o[c*3+1])*r,l=o[c*3+2]+(m/d-o[c*3+2])*r,u=n[c*3]+i,h=n[c*3+1]+a,g=n[c*3+2]+l;if(e.aceita(c,u,h,g)){o[c*3]=i,o[c*3+1]=a,o[c*3+2]=l,t[c*3]=u,t[c*3+1]=h,t[c*3+2]=g,s[c]=1;break}}}let c=0;for(let e=0;e<a;e++)c+=s[e];return c}function jp(e){let{pos:t,ref:n,adj:r,vertices:i,tris:a}=e,o=t.length/3,s=new Uint8Array(o);for(let e=0;e<i.length;e++)s[i[e]]=1;let c=Af(n,a),l=Math.cos(Math.PI/3),u=0;for(let n=0;n<=e.rodadas;n++){let o=Af(t,a),d=new Set;u=0;for(let e=0;e<i.length;e++){let t=i[e];for(let e=r.off[t];e<r.off[t+1];e++){let n=r.nb[e];s[n]&&(o[t*3]*o[n*3]+o[t*3+1]*o[n*3+1]+o[t*3+2]*o[n*3+2]>l||c[t*3]*c[n*3]+c[t*3+1]*c[n*3+1]+c[t*3+2]*c[n*3+2]<=l||(d.add(t),d.add(n),u++))}}if(!u||n===e.rodadas)break;let f=new Set(d);for(let e of d)for(let t=r.off[e];t<r.off[e+1];t++)s[r.nb[t]]&&f.add(r.nb[t]);for(let n=0;n<3;n++)for(let n of f){let i=r.off[n],a=r.off[n+1],o=a-i,s=0,c=0,l=0;for(let e=i;e<a;e++){let n=r.nb[e];s+=t[n*3],c+=t[n*3+1],l+=t[n*3+2]}for(let r of[.5,.25]){let i=t[n*3]+(s/o-t[n*3])*r,a=t[n*3+1]+(c/o-t[n*3+1])*r,u=t[n*3+2]+(l/o-t[n*3+2])*r;if(e.aceita(n,i,a,u)){t[n*3]=i,t[n*3+1]=a,t[n*3+2]=u;break}}}}return u}var Mp=.4,Np=.25,Pp=.5,Fp=6,Ip=.006,Lp=class{v=[];k=[];get tamanho(){return this.v.length}empilhar(e,t){let{v:n,k:r}=this,i=n.length;for(n.push(e),r.push(t);i>0;){let e=i-1>>1;if(n[e]>=n[i])break;[n[e],n[i]]=[n[i],n[e]],[r[e],r[i]]=[r[i],r[e]],i=e}}desempilhar(){let{v:e,k:t}=this,n=[e[0],t[0]],r=e.pop(),i=t.pop();if(e.length){e[0]=r,t[0]=i;let n=0;for(;;){let r=2*n+1,i=r+1,a=n;if(r<e.length&&e[r]>e[a]&&(a=r),i<e.length&&e[i]>e[a]&&(a=i),a===n)break;[e[a],e[n]]=[e[n],e[a]],[t[a],t[n]]=[t[n],t[a]],n=a}}return n}};function Rp(e,t,n,r,i,a,o){let s=e.length,c=Float32Array.from(e),l=new Lp;for(let t=0;t<s;t++)e[t]>0&&l.empilhar(e[t],t);for(;l.tamanho;){let[s,u]=l.desempilhar();if(!(s<c[u]))for(let d=n.off[u];d<n.off[u+1];d++){let f=n.nb[d];if(!r[f])continue;let p=Math.hypot(t[f*3]-t[u*3],t[f*3+1]-t[u*3+1],t[f*3+2]-t[u*3+2]),m=o?Math.min(s-i*p,Math.max(e[f],o[f])):s-i*p;m>c[f]+1e-7&&(c[f]=m,l.empilhar(m,f),a&&!e[f]&&(a[f*3]=a[u*3],a[f*3+1]=a[u*3+1],a[f*3+2]=a[u*3+2]))}}return c}function zp(e,t,n,r,i,a){let o=e.length,s=Float32Array.from(e),c=new Float32Array(o).fill(1/0),l=new Lp,u=[];for(let t=0;t<o;t++)e[t]>0&&u.push(t);u.sort((t,n)=>e[n]-e[t]);for(let a of u){let o=e[a],u=Pp*Math.min(1,o/.3);for(c[a]=0,l.empilhar(0,a);l.tamanho;){let[d,f]=l.desempilhar(),p=-d;if(!(p>c[f]+1e-9)){o>s[f]&&(s[f]=o,i&&!e[f]&&(i[f*3]=i[a*3],i[f*3+1]=i[a*3+1],i[f*3+2]=i[a*3+2]));for(let e=n.off[f];e<n.off[f+1];e++){let i=n.nb[e];if(!r[i])continue;let a=p+Math.hypot(t[i*3]-t[f*3],t[i*3+1]-t[f*3+1],t[i*3+2]-t[f*3+2]);a>u||a>=c[i]||(c[i]=a,l.empilhar(-a,i))}}}}let d=Rp(s,t,n,r,Np,i,a);for(let t=0;t<Fp;t++){let s=Float32Array.from(d);for(let c=0;c<o;c++){if(!r[c])continue;let o=d[c],l=1,u=-1,f=0;for(let e=n.off[c];e<n.off[c+1];e++){let t=n.nb[e];r[t]&&(o+=d[t],l++,d[t]>f&&(f=d[t],u=t))}if(o<=0)continue;if(d[c]<=0){if(t>=2||u<0)continue;i&&(i[c*3]=i[u*3],i[c*3+1]=i[u*3+1],i[c*3+2]=i[u*3+2])}let p=a?Math.max(e[c],a[c]):1/0;s[c]=Math.min(Math.max(o/l,e[c]),p)}d.set(s)}return d}var Bp=.1,Vp=new Map;function Hp(e){if(e<Bp*1.2)return[];let t=Math.min(12,Math.max(2,Math.ceil(e/Bp))),n=Vp.get(t);if(!n){n=[];for(let e=0;e<=t;e++)for(let r=0;e+r<=t;r++){let i=t-e-r;e!==t&&r!==t&&i!==t&&n.push([e/t,r/t,i/t])}Vp.set(t,n)}return n}function Up(e,t){let n=Math.floor(e.length/3),r=new Uint32Array(t+1);for(let t=0;t<n*3;t++)r[e[t]+1]++;for(let e=0;e<t;e++)r[e+1]+=r[e];let i=new Uint32Array(n*3),a=r.slice(0,t);for(let t=0;t<n;t++)for(let n=0;n<3;n++)i[a[e[t*3+n]]++]=t*3;return{off:r,lista:i}}function Wp(e){let{pos:t,tris:n,movel:r,adj:i,medida:a}=e,o=t.length/3,s=e.limite??3,c=e.rodadas??24,l=Math.floor(n.length/3),{off:u,lista:d}=Up(n,o),f=e=>{let r=0;for(let i=0;i<3;i++){let a=n[e+i]*3,o=n[e+(i+1)%3]*3;r=Math.max(r,Math.hypot(t[a]-t[o],t[a+1]-t[o+1],t[a+2]-t[o+2]))}return r},p=[0,0,0],m=e.acumulado??new Float32Array(o),h=new Uint8Array(o),g=new Float32Array(o*3),_=e.faces??null,v=0,y=0,b=0,x=0,S=e.vertices??null,C=new Float32Array(o);for(;y<c;y++){C.fill(0);let c=!1;b=0;let w;if(e.teto){w=new Float32Array(o);for(let t=0;t<o;t++)w[t]=Math.max(0,e.teto[t]-m[t])}let T=(e,t)=>{r[e]&&t>C[e]&&(C[e]=t)},E=S??null,D=E?E.length:o;for(let e=0;e<D;e++){let n=E?E[e]:e;if(!r[n])continue;let i=a.falta(t[n*3],t[n*3+1],t[n*3+2],p);y===0&&x++,i>0&&(i>b&&(b=i),c=!0,T(n,i),g[n*3]=p[0],g[n*3+1]=p[1],g[n*3+2]=p[2])}let O=_,k=O?O.length:l;for(let e=0;e<k;e++){let i=O?O[e]:e*3,o=n[i],s=n[i+1],l=n[i+2];if(!r[o]&&!r[s]&&!r[l])continue;let u=f(i);if(a.faceLonge&&a.faceLonge(Math.min(t[o*3+1],t[s*3+1],t[l*3+1]),u))continue;let d=Hp(u);for(let e of d){let n=t[o*3]*e[0]+t[s*3]*e[1]+t[l*3]*e[2],i=t[o*3+1]*e[0]+t[s*3+1]*e[1]+t[l*3+1]*e[2],u=t[o*3+2]*e[0]+t[s*3+2]*e[1]+t[l*3+2]*e[2],d=a.falta(n,i,u,p);if(y===0&&x++,!(d>0))continue;d>b&&(b=d),c=!0;let f=[o,s,l],m=[0,1,2].filter(t=>r[f[t]]&&e[t]>1e-9).sort((t,n)=>e[n]-e[t]),h=d,_=0,v=[0,0,0];for(let t of m){_+=e[t];let n=Math.min(h/e[t],w?w[f[t]]:1/0);v[t]=n,h-=e[t]*n}if(h>1e-9&&_>0)for(let e of m)v[e]+=h/_;for(let e of m){let t=f[e];T(t,v[e]),!g[t*3]&&!g[t*3+1]&&!g[t*3+2]&&(g[t*3]=p[0],g[t*3+1]=p[1],g[t*3+2]=p[2])}}}if(!c){b=0;break}let A=e.suave?zp(C,t,i,r,g,w):Rp(C,t,i,r,Mp,g,w),j=[];for(let e=0;e<o;e++)A[e]>1e-7&&r[e]&&j.push(e);let M=new Float32Array(j.length*3);j.forEach((e,t)=>{let n=g[e*3]*2,a=g[e*3+1]*2,o=g[e*3+2]*2;for(let t=i.off[e];t<i.off[e+1];t++){let e=i.nb[t];A[e]>1e-7&&r[e]&&(n+=g[e*3],a+=g[e*3+1],o+=g[e*3+2])}let s=Math.hypot(n,a,o)||1;M[t*3]=n/s,M[t*3+1]=a/s,M[t*3+2]=o/s});let N=new Set,P=[];if(j.forEach((e,n)=>{let r=Math.min(A[e],s-m[e]);if(!(r<=1e-7)){t[e*3]+=M[n*3]*r,t[e*3+1]+=M[n*3+1]*r,t[e*3+2]+=M[n*3+2]*r,h[e]||v++,m[e]+=r,h[e]=1,P.push(e),g[e*3]=M[n*3],g[e*3+1]=M[n*3+1],g[e*3+2]=M[n*3+2];for(let t=u[e];t<u[e+1];t++)N.add(d[t]);for(let t=i.off[e];t<i.off[e+1];t++){let e=i.nb[t];for(let t=u[e];t<u[e+1];t++)N.add(d[t])}}}),!P.length)break;_=Array.from(N);let F=new Set;for(let e of P){F.add(e);for(let t=i.off[e];t<i.off[e+1];t++)F.add(i.nb[t])}S=Array.from(F)}let w=0;for(let e=0;e<o;e++)m[e]>w&&(w=m[e]);return{rodadas:y,vertices:v,deslocamentoMax:w,faltaFinal:b,amostras:x,tocados:h}}var Gp=.01,Kp=.004,qp=.15,Jp=e=>Kp*Math.min(1,e/.03)*Math.max(0,Math.min(1,(.5-e)/.3));function Yp(e,t,n,r){return tp(t,n,e)+Math.max(hd(r,e),Math.min(r,qp*e))+Jp(e)}function Xp(e){let{A:t,margem:n,cim:r,rampa:i,piso:a,profundo:o}=e;return{faceLonge:(e,n)=>e>t.topoDoPreparo+r+a+.02+.6*n,falta:(e,s,c,l)=>{let u=o?t.preparo.distAte(e,s,c,r+a+.01):t.preparo.dist(e,s,c,r+a+.01);if(!Number.isFinite(u)||u>r+a+.01)return NaN;let d=n.distancia(e,s,c);if(d<pd.from)return NaN;let f=e-t.preparo.px,p=s-t.preparo.py,m=c-t.preparo.pz,h=Math.hypot(f,p,m);if(h>1e-5){let e=(u>=0?1:-1)/h;f*=e,p*=e,m*=e}else f=t.preparo.nx,p=t.preparo.ny,m=t.preparo.nz;return l[0]=f,l[1]=p,l[2]=m,Yp(d,r,i,a)+Ip-u}}}var Zp=new Q(.5773,.5779,.5768).normalize(),Qp=new We,$p=new Q,em={point:new Q,distance:0,faceIndex:-1},tm=.5,nm=1,rm=.014,im=4,am=1,om=8,sm=[1,2],cm=.5;function lm(e){let{A:t}=e,n=Xp(e);return(r,i,a,o={})=>{let{revisar:s,base:c}=o,l=Math.max(0,o.passadas??om),u=r.length/3,d=[];for(let e=0;e+2<i.length;e+=3)Math.max(i[e],i[e+1],i[e+2])>=a&&d.push(i[e],i[e+1],i[e+2]);let f=Uint32Array.from(d),p=new Uint8Array(u);for(let e=a;e<u;e++)p[e]=1;let m={antagonista:{pontos:0,max:0},piso:{pontos:0,max:0},revertidos:{pontos:0,max:0},malha:{pontos:0,max:0,antes:0,depois:0},folga:1/0,restam:0,autointersecoes:{antes:0,depois:0},passadas:0},h=jf(f,u),g=Up(f,u),_=new Uint8Array(u),v=t=>{if(!t.length)return;let i=new Set;for(let e of t)for(let t=g.off[e];t<g.off[e+1];t++)i.add(g.lista[t]);let a=Wp({pos:r,tris:f,movel:p,adj:h,medida:n,limite:e.profundo?3:.4,faces:[...i],vertices:t});if(a.vertices){for(let e=0;e<u;e++)a.tocados[e]&&!_[e]&&(_[e]=1,m.piso.pontos++);m.piso.max=Math.max(m.piso.max,a.deslocamentoMax)}},y=s?Array.from(s).filter(e=>p[e]):[];v(y);let b=r.slice(),x=new Uint8Array(u),S=new Uint8Array(u),C=e=>{let t=[];for(let n=a;n<u;n++){if(!(e[n]>0))continue;let i=Math.min(1,e[n]),a=0;for(let e=0;e<3;e++){let t=r[n*3+e]+(c[n*3+e]-r[n*3+e])*i;a=Math.max(a,Math.abs(t-r[n*3+e])),r[n*3+e]=t}a<=1e-7||(t.push(n),x[n]=1,S[n]||(S[n]=1,m.revertidos.pontos++),m.revertidos.max=Math.max(m.revertidos.max,Math.hypot(b[n*3]-c[n*3],b[n*3+1]-c[n*3+1],b[n*3+2]-c[n*3+2])))}return t},w=()=>{let e=new Float32Array(u);for(let t=a;t<u;t++)e[t]=1;return e};if(y.length&&c){let e=new Uint8Array(u);for(let t of y)e[t]=1;let t=[];for(let n=0;n+2<f.length;n+=3)(e[f[n]]||e[f[n+1]]||e[f[n+2]])&&t.push(f[n],f[n+1],f[n+2]);let n=[],a=sp(c,i,t),o=sp(r,i,t,n);if(m.malha.antes=a,m.malha.depois=o,o>a){let s=m.revertidos.pontos,c=new Float32Array(u);for(let s of sm){for(let t of n)p[t]&&e[t]&&(c[t]=1);if(v(C(um(c,r,h,p,1/s))),n=[],o=sp(r,i,t,n),o<=a)break}o>a&&(v(C(w())),o=sp(r,i,t)),m.malha.depois=o,m.malha.pontos=m.revertidos.pontos-s,m.malha.max=m.revertidos.max}}let T=t.antagonista;if(!T)return m;let E=new Mt;E.setAttribute(`position`,new ht(r,3)),E.setIndex(new ht(Uint32Array.from(i),1)),Dl(E);let D=E.boundsTree,O=E.getIndex().array,k=(e,t,n)=>{Qp.origin.set(e,t,n),Qp.direction.copy(Zp);let r=D.raycast(Qp,2).map(e=>e.distance).sort((e,t)=>e-t),i=0;for(let e=0;e<r.length;e++)(e===0||r[e]-r[e-1]>1e-6)&&i++;return i%2==1},A=[1/0,1/0,1/0],j=[-1/0,-1/0,-1/0];for(let e=a;e<u;e++)for(let t=0;t<3;t++)A[t]=Math.min(A[t],r[e*3+t]),j[t]=Math.max(j[t],r[e*3+t]);let M=T.geometry,N=M.getAttribute(`position`).array,P=M.getIndex().array,F=e=>N[e*3]>=A[0]-tm&&N[e*3]<=j[0]+tm&&N[e*3+1]>=A[1]-tm&&N[e*3+1]<=j[1]+tm&&N[e*3+2]>=A[2]-tm&&N[e*3+2]<=j[2]+tm,I=[],ee=[],L=new Map;for(let e=0;e<N.length/3;e++)F(e)&&I.push(e);let R=1/0;for(let e=0;e+2<P.length;e+=3)if(F(P[e])||F(P[e+1])||F(P[e+2]))for(let t=0;t<3;t++){let n=P[e+t],r=L.get(n);r===void 0&&(r=u+L.size,L.set(n,r),R=Math.min(R,N[n*3+1])),ee.push(r)}let te=new Float32Array(r.length+L.size*3);for(let[e,t]of L)te[t*3]=N[e*3],te[t*3+1]=N[e*3+1],te[t*3+2]=N[e*3+2];let ne=(e,t,n,r,i,a)=>{let o=T.raio(e-r*jl,t-i*jl,n-a*jl,r,i,a,Ml),s=Number.isFinite(o)?o-jl:1/0;if((!Number.isFinite(o)||o<.001)&&T.cortes(e,t,n,r,i,a,20).length%2==1){let o=T.raio(e-r*Nl,t-i*Nl,n-a*Nl,r,i,a,Nl+Ml);Number.isFinite(o)&&o-3.4<s&&(s=o-Nl)}return s},re=(e,t,n,r)=>{let i=te,a=i[r*3],o=i[r*3+2],s=i[e*3],c=i[e*3+2],l=i[t*3]-s,u=i[t*3+2]-c,d=i[n*3]-s,f=i[n*3+2]-c,p=l*f-u*d;if(Math.abs(p)<1e-12)return NaN;let m=((a-s)*f-(o-c)*d)/p,h=(l*(o-c)-u*(a-s))/p;return m<-1e-6||h<-1e-6||m+h>1+1e-6?NaN:i[e*3+1]+m*(i[t*3+1]-i[e*3+1])+h*(i[n*3+1]-i[e*3+1])},z=(e,t,n)=>{let r=te,i=(e,t)=>Math.hypot(r[e*3]-r[t*3],r[e*3+1]-r[t*3+1],r[e*3+2]-r[t*3+2]);return Math.max(i(e,t),i(t,n),i(n,e))},B=()=>{let e=new Float32Array(u),t=Af(r,f),n=0,i=1/0,o=0,s=(t,n)=>{p[t]&&n>e[t]&&(e[t]=Math.min(am,n))},c=[];for(let e=a;e<u;e++){let a=r[e*3],o=r[e*3+1],l=r[e*3+2];if(o<R-nm)continue;let u=T.distAte(a,o,l,nm),d=T.py;if(!Number.isFinite(u)&&o<R)continue;let f=T.cortes(a,o,l,0,-1,0,im),p=f.length%2==1;if(!Number.isFinite(u)&&!p)continue;c.push(e);let m=0,h=!1;if(p)h=!0,i=Math.min(i,-(Number.isFinite(u)?Math.abs(u):f[0])),m=f[0]+rm;else{let e=Math.abs(u);if(i=Math.min(i,e),e<.008){h=!0;let t=e>1e-6?(o-d)/e:-1;m=(rm-e)/Math.max(1/3,-t)}}let g=t[e*3],_=t[e*3+1],v=t[e*3+2];if(_>.1){let e=ne(a,o,l,g,_,v);i=Math.min(i,e),e<.008&&(h=!0,p||(m=Math.max(m,(rm-e)*Math.max(1/3,_))))}h&&(n++,s(e,m))}D.refit();for(let e of I){let t=N[e*3],r=N[e*3+1],o=N[e*3+2];$p.set(t,r,o);let c=D.closestPointToPoint($p,em,0,tm);if(!c)continue;let l=c.distance,u=c.faceIndex,d=k(t,r,o),f=d?-l:l;if(i=Math.min(i,f),f>=.008)continue;Qp.origin.set(t,r,o),Qp.direction.set(0,1,0);let p=d?D.raycastFirst(Qp,2,0,3):null,m=p?p.faceIndex:u,h=d?(p?p.distance:2*l)+rm:2*(rm-l);if(!(Math.max(O[m*3],O[m*3+1],O[m*3+2])<a)){n++;for(let e=0;e<3;e++)s(O[m*3+e],h)}}if(c.length&&ee.length){let e=new Uint8Array(u);for(let t of c)e[t]=1;let t=[];for(let n=0;n+2<f.length;n+=3)(e[f[n]]||e[f[n+1]]||e[f[n+2]])&&t.push(f[n],f[n+1],f[n+2]);te.set(r);let a=[];o=ip(te,t,ee,a);for(let e=0;e+5<a.length;e+=6){let t=a[e],n=a[e+1],r=a[e+2],i=a[e+3],o=a[e+4],c=a[e+5],l=0;for(let e of[i,o,c]){let i=re(t,n,r,e);i===i&&(l=Math.max(l,i-te[e*3+1]))}for(let e of[t,n,r]){let t=re(i,o,c,e);t===t&&(l=Math.max(l,te[e*3+1]-t))}l=Math.min(l>0?l:.02,Math.max(z(t,n,r),z(i,o,c)))+rm;for(let e of[t,n,r])s(e,l)}n+=o,o&&(i=Math.min(i,-.001))}return{pedido:e,n,pior:i,cortes:o}},V=null,H=null;c&&(V=new Mt,V.setAttribute(`position`,new ht(Float32Array.from(c),3)),V.setIndex(new ht(Uint32Array.from(f),1)),Dl(V),H=V.boundsTree);let ie=(e,t,n)=>{Qp.origin.set(r[e*3],r[e*3+1],r[e*3+2]),Qp.direction.set(0,t,0);let i=H.raycastFirst(Qp,2,0,n);return i&&i.face&&i.face.normal.y>0?i.distance:NaN},ae=e=>{let t=r[e*3]-c[e*3],n=r[e*3+1]-c[e*3+1],i=r[e*3+2]-c[e*3+2],a=Math.hypot(t,n,i);if(a<1e-6||!Number.isNaN(ie(e,1,.5)))return 0;let o=ie(e,-1,3*a+.05);return o===o?o:Math.max(0,n)},oe=e=>{let t=B(),n=0;for(let i=0;i<e&&t.n;i++){let e=c?new Float32Array(u).fill(1/0):null;if(e)for(let n=a;n<u;n++)t.pedido[n]>0&&(e[n]=ae(n),t.pedido[n]=Math.min(t.pedido[n],e[n]+rm));let i=Rp(t.pedido,r,h,p,cm);if(e)for(let n=a;n<u;n++)i[n]>0&&(t.pedido[n]>0?i[n]=Math.min(i[n],e[n]+rm):i[n]=Math.min(i[n],ae(n)));let o=zp(t.pedido,r,h,p,void 0,i),s=[];for(let e=a;e<u;e++)o[e]>1e-7&&(r[e*3+1]-=o[e],x[e]=1,s.push(e));if(!s.length)break;m.passadas++,v(s);let l=B();if(n=l.n>=t.n&&l.pior<=t.pior+1e-4?n+1:0,t=l,n>=2)break}return t},U=oe(l);if(U.n&&c){let e=new Float32Array(u);for(let t=a;t<u;t++)(x[t]||U.pedido[t]>0)&&(e[t]=1);for(let t of sm){if(v(C(um(e,r,h,p,1/t))),U=oe(Math.min(3,l)),!U.n)break;for(let t=a;t<u;t++)U.pedido[t]>0&&(e[t]=1)}U.n&&(v(C(w())),U=oe(l))}let se=()=>{let e=[];for(let t=0;t+2<f.length;t+=3)(x[f[t]]||x[f[t+1]]||x[f[t+2]])&&e.push(f[t],f[t+1],f[t+2]);return e},W=se();if(W.length&&(m.autointersecoes.antes=sp(b,i,W),m.autointersecoes.depois=sp(r,i,W),m.autointersecoes.depois>m.autointersecoes.antes)){if(c){let e=new Float32Array(u);for(let t=a;t<u;t++)x[t]&&(e[t]=1);v(C(um(e,r,h,p,1/sm[0]))),W=se(),m.autointersecoes.antes=sp(b,i,W),m.autointersecoes.depois=sp(r,i,W),m.autointersecoes.depois>m.autointersecoes.antes&&(v(C(w())),W=se(),m.autointersecoes.depois=sp(r,i,W),m.autointersecoes.antes=sp(b,i,W))}else r.set(b),x.fill(0),m.piso={pontos:0,max:0},m.autointersecoes.depois=m.autointersecoes.antes;U=B()}for(let e=a;e<u;e++){let t=b[e*3+1]-r[e*3+1];x[e]&&!S[e]&&t>1e-6&&(m.antagonista.pontos++,m.antagonista.max=Math.max(m.antagonista.max,t))}return m.folga=U.pior,m.restam=U.n,E.disposeBoundsTree(),E.dispose(),V&&(V.disposeBoundsTree(),V.dispose()),m}}function um(e,t,n,r,i){let a=Float32Array.from(e),o=[];for(let e=0;e<a.length;e++)a[e]>0&&o.push(e);for(;o.length;){let e=o.pop();for(let s=n.off[e];s<n.off[e+1];s++){let c=n.nb[s];if(!r[c])continue;let l=a[e]-i*Math.hypot(t[c*3]-t[e*3],t[c*3+1]-t[e*3+1],t[c*3+2]-t[e*3+2]);l>a[c]+1e-6&&(a[c]=l,o.push(c))}}return a}function dm(e,t,n){let r=e.length;if(!r)return 0;let i=Array.from({length:r},(e,t)=>t).sort((t,n)=>e[t]-e[n]),a=0;for(let e=0;e<r;e++)a+=t[e];let o=n*a,s=0;for(let n of i)if(s+=t[n],s>=o)return e[n];return e[i[r-1]]}var fm=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],pm=.4;function mm(e,t,n,r,i,a,o,s=pm){let c=n?n.length:t.length/3,l=new Float64Array(c),u=new Float64Array(c),d=new Float64Array(c),f=new Float64Array(c),p=new Float64Array(c);for(let o=0;o<c;o++){let s=n?n[o]:o,c=t[s*3]*3,m=t[s*3+1]*3,h=t[s*3+2]*3,g=(e[c]+e[m]+e[h])/3,_=(e[c+1]+e[m+1]+e[h+1])/3,v=(e[c+2]+e[m+2]+e[h+2])/3,y=e[m]-e[c],b=e[m+1]-e[c+1],x=e[m+2]-e[c+2],S=e[h]-e[c],C=e[h+1]-e[c+1],w=e[h+2]-e[c+2],T=b*w-x*C,E=x*S-y*w,D=y*C-b*S,O=Math.hypot(T,E,D),k=[g,_,v];l[o]=fm(k,a),u[o]=fm(k,i),d[o]=fm(k,r),f[o]=O/2,p[o]=O>0?(T*r[0]+E*r[1]+D*r[2])/O:0}let m=dm(d,f,.995),h=1/0;for(let e=0;e<c;e++)d[e]<h&&(h=d[e]);let g=h+Math.max(0,s)*(m-h),_=Float64Array.from(f,(e,t)=>d[t]>=g?e:0),v=dm(l,_,.99)-dm(l,_,.01),y=dm(u,_,.99)-dm(u,_,.01);(dm(l,_,.99)+dm(l,_,.01))/2;let b=(dm(u,_,.99)+dm(u,_,.01))/2,x=0,S=[];for(let e of o)x+=fm(e,r)/Math.max(1,o.length),fm(e,i)>b&&S.push(fm(e,r));let C=S.length?S.reduce((e,t)=>e+t,0)/S.length:x,w=0;for(let e=0;e<c;e++)d[e]>x&&(w+=(d[e]-x)*p[e]*f[e]);return{larguraMD:v,espessuraVL:y,altura:Math.max(0,m-C),volume:Math.max(0,w)}}var hm=new WeakMap;function gm(e){let t=e.getIndex();return t?t.array instanceof Uint32Array?t.array:Uint32Array.from(t.array):Uint32Array.from({length:e.getAttribute(`position`).count},(e,t)=>t)}function _m(e,t){if(hm.has(e))return hm.get(e);let n=null;try{let r=ge({positions:e.getAttribute(`position`).array,indices:gm(e),arco:t},{detectarPreparos:!1});n=r.dentes.length>=6?r:null}catch{n=null}return hm.set(e,n),n}var vm=e=>({1:2,2:1,3:4,4:3})[Math.floor(e/10)]*10+e%10,ym=e=>e<=2?1:e===3?3:e<=5?4:6;function bm(e){let t=Math.floor(e/10),n=e%10,r=[];return r.push(n===1?vm(e):t*10+n-1),n<8&&r.push(t*10+n+1),r}function xm(e,t){return e.dentes.find(e=>e.fdi===t&&e.tipo===`natural`&&e.confianca.nivel!==`baixa`)??null}function Sm(e,t,n,r){let i=t.getAttribute(`position`).array,a=gm(t),o=null,s=12.25,c=e=>{let t=1/0;for(let n=0;n<e.triangulos.length;n+=3){let o=a[e.triangulos[n]*3]*3,s=(i[o]-r[0])**2+(i[o+1]-r[1])**2+(i[o+2]-r[2])**2;s<t&&(t=s)}return t};for(let t of e.dentes){let e=c(t);e<s&&(s=e,o=t)}return o?o.fdi===n:bm(n).some(t=>{let n=e.dentes.find(e=>e.fdi===t);return!!n&&c(n)<81})}var Cm=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],wm=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Tm=(e,t)=>{let n=fm(e,t);return[e[0]-t[0]*n,e[1]-t[1]*n,e[2]-t[2]*n]},Em=2.5;function Dm(e,t,n,r,i,a,o,s,c,l=[]){let u=wm(r),d=wm(Tm(Math.abs(u[0])<.9?[1,0,0]:[0,1,0],u)),f=Cm(u,d),p=a<=3,m=null,h=`extensão`;if(p&&l.length>=2){let e=l.length,t=0,n=0,r=new Float64Array(e),i=new Float64Array(e);for(let a=0;a<e;a++)r[a]=fm(l[a],d),i[a]=fm(l[a],f),t+=r[a]/e,n+=i[a]/e;let a=0,o=0,s=0,c=1/0,u=-1/0,p=1/0,g=-1/0;for(let l=0;l<e;l++){let e=r[l]-t,d=i[l]-n;a+=e*e,o+=e*d,s+=d*d,c=Math.min(c,r[l]),u=Math.max(u,r[l]),p=Math.min(p,i[l]),g=Math.max(g,i[l])}if(Math.hypot(u-c,g-p)>=Em){let e=.5*Math.atan2(2*o,a-s),t=Math.cos(e),n=Math.sin(e);m=wm([d[0]*t+f[0]*n,d[1]*t+f[1]*n,d[2]*t+f[2]*n]),h=`borda incisal`}}if(!m&&(a===4||a===5)&&o.length>=2){let e=Tm([o[0][0]-o[1][0],o[0][1]-o[1][1],o[0][2]-o[1][2]],u);Math.hypot(e[0],e[1],e[2])>=3&&(m=wm(Cm(u,wm(e))),h=`cúspides`)}if(!m){let r=n.length,o=new Float64Array(r*3),s=new Float64Array(r),c=new Float64Array(r),l=1/0,h=-1/0;for(let i=0;i<r;i++){let r=n[i],a=t[r*3]*3,d=t[r*3+1]*3,f=t[r*3+2]*3,p=[(e[a]+e[d]+e[f])/3,(e[a+1]+e[d+1]+e[f+1])/3,(e[a+2]+e[d+2]+e[f+2])/3];o[i*3]=p[0],o[i*3+1]=p[1],o[i*3+2]=p[2],s[i]=Math.hypot(...Cm([e[d]-e[a],e[d+1]-e[a+1],e[d+2]-e[a+2]],[e[f]-e[a],e[f+1]-e[a+1],e[f+2]-e[a+2]]))/2,c[i]=fm(p,u),c[i]<l&&(l=c[i]),c[i]>h&&(h=c[i])}let g=[];for(let e=0;e<r;e++)c[e]>=l+.4*(h-l)&&g.push(e);let _=new Float64Array(g.length),v=Float64Array.from(g,e=>s[e]),y=e=>{let t=e*Math.PI/180;return[d[0]*Math.cos(t)+f[0]*Math.sin(t),d[1]*Math.cos(t)+f[1]*Math.sin(t),d[2]*Math.cos(t)+f[2]*Math.sin(t)]},b=1/0,x=0;for(let e=0;e<180;e++){let t=y(e);g.forEach((e,n)=>{_[n]=o[e*3]*t[0]+o[e*3+1]*t[1]+o[e*3+2]*t[2]});let n=dm(_,v,.99)-dm(_,v,.01);n<b&&(b=n,x=e)}let[S,C]=w[i][a]??[1,1];m=y(!p&&S<=C?x:x+90)}fm(m,c)<0&&(m=[-m[0],-m[1],-m[2]]);let g=wm(Cm(u,m));return fm(g,s)<0&&(g=[-g[0],-g[1],-g[2]]),{mes:m,vest:g,como:h}}function Om(e,t,n){let r=e.getAttribute(`position`).array,i=gm(e),a=wm(n.oclusal),{mes:o,vest:s}=Dm(r,i,t.triangulos,a,n.arco,t.fdi%10,t.pontasCuspide,t.vestibular,t.mesial,t.bordaIncisal),c=wm(t.eixo),l=t.linhaGengival,u=mm(r,i,t.triangulos,c,s,o,l),d=mm(r,i,t.triangulos,c,s,o,l,0);return{...u,inteira:{larguraMD:d.larguraMD,espessuraVL:d.espessuraVL}}}function km(e,t,n){let[r,i]=w[n][e.fdi%10]??[NaN,NaN];if(e.confianca.nivel!==`alta`&&e.confianca.motivos.some(e=>/[Ll]argura.*diferente da média/.test(e)))return`a separação mede a largura do ${e.fdi} fora da média da posição`;let a=e=>e.toFixed(2).replace(`.`,`,`),{larguraMD:o,espessuraVL:s}=`inteira`in t?t.inteira:t;return o>=.8*r&&o<=1.25*r?s>=.7*i&&s<=1.3*i?null:`a espessura do ${e.fdi} (${a(s)} mm) foge da faixa da posição (${a(.7*i)}–${a(1.3*i)} mm)`:`a largura do ${e.fdi} (${a(o)} mm) foge da faixa da posição (${a(.8*r)}–${a(1.25*r)} mm)`}var Am={valor:null};function jm(e,t,n){let r=Pm(e,t,n).ref;return r?{...r,dente:{...r.dente},alvo:{...r.alvo},proporcao:[...r.proporcao],recusados:(r.recusados??[]).map(e=>({...e}))}:null}function Mm(e,t,n){return Pm(e,t,n).recusados.map(e=>({...e}))}var Nm=new WeakMap;function Pm(e,t,n){let r=Nm.get(e);r||Nm.set(e,r=new Map);let i=`${t}|${n.map(e=>e.toFixed(1)).join(`,`)}`;return r.has(i)||r.set(i,Fm(e,t,n)),r.get(i)}function Fm(e,t,r){let i=n(t),a=_m(e,i);if(!a||!Sm(a,e,t,r))return{ref:null,recusados:[]};let o=t%10,s=Math.floor(t/10),c=[],l=t=>{let{inteira:n,...r}=Om(e,t,a);return{m:r,motivo:km(t,{...r,inteira:n},i)}},u=xm(a,vm(t));if(u){let{m:e,motivo:t}=l(u);if(!t)return{ref:{fdi:u.fdi,origem:`homologo`,dente:e,alvo:{...e},proporcao:[1,1,1]},recusados:c};c.push({fdi:u.fdi,motivo:t})}let d=[];for(let e of[1,-1,2,-2]){let t=o+e;t>=1&&t<=8&&ym(t)===ym(o)&&d.push(s*10+t)}for(let e of[...d,...d.map(vm)]){let t=xm(a,e);if(!t)continue;let{m:n,motivo:r}=l(t);if(r){c.push({fdi:e,motivo:r});continue}let[s,u,d]=w[i][o],[f,p,m]=w[i][e%10],h=[s/f,u/p,d/m];return{ref:{fdi:e,origem:`vizinho`,dente:n,alvo:{larguraMD:n.larguraMD*h[0],espessuraVL:n.espessuraVL*h[1],altura:n.altura*h[2],volume:n.volume*h[0]*h[1]*h[2]},proporcao:h,recusados:c},recusados:c}}return{ref:null,recusados:c}}var Im=new WeakMap;function Lm(e,t=1){let n=Im.get(e);n||Im.set(e,n=new Map);let r=n.get(t);if(!r){let i=e.getAttribute(`position`).array;r=new uf(i instanceof Float32Array?i:Float32Array.from(i),gm(e).slice(),t),n.set(t,r)}return r}function Rm(e,t,n,r,i=1.5){let a=n?n.length:t.length/3,o=new Map,s=t=>{let n=o.get(t);return n===void 0&&(n=r.dist(e[t*3],e[t*3+1],e[t*3+2],i),o.set(t,n)),n},c=1/0,l=0,u=0,d=[];for(let r=0;r<a;r++){let i=n?n[r]:r,a=t[i*3],o=t[i*3+1],f=t[i*3+2],p=s(a),m=s(o),h=s(f);c=Math.min(c,p,m,h);let g=(p+m+h)/3;if(!(g<.1))continue;let _=e[o*3]-e[a*3],v=e[o*3+1]-e[a*3+1],y=e[o*3+2]-e[a*3+2],b=e[f*3]-e[a*3],x=e[f*3+1]-e[a*3+1],S=e[f*3+2]-e[a*3+2],C=Math.hypot(v*S-y*x,y*b-_*S,_*x-v*b)/2;u+=C,g<.05&&(l+=C),d.push(i)}let f=new Map,p=e=>{let t=e;for(;f.get(t)!==t;)t=f.get(t);let n=e;for(;f.get(n)!==t;){let e=f.get(n);f.set(n,t),n=e}return t};for(let e of d)for(let n=0;n<3;n++)f.has(t[e*3+n])||f.set(t[e*3+n],t[e*3+n]);for(let e of d){let n=p(t[e*3]);f.set(p(t[e*3+1]),n),f.set(p(t[e*3+2]),n)}let m=new Set;for(let e of d)m.add(p(t[e*3]));return{min:c,area005:l,area01:u,manchas:m.size}}var zm=new WeakMap;function Bm(e,t,n,r){let i=zm.get(e);i||zm.set(e,i=new WeakMap);let a=i.get(t);a||i.set(t,a=new Map);let o=`${n}|${r.map(e=>e.toFixed(1)).join(`,`)}`;a.has(o)||a.set(o,Vm(e,t,n,r));let s=a.get(o);return s?s.map(e=>({...e})):null}function Vm(e,t,r,i){let a=_m(e,n(r));if(!a||!Sm(a,e,r,i))return null;let o=e.getAttribute(`position`).array,s=gm(e),c=bm(r),l=vm(r),u=[];for(let e of a.dentes)e.tipo===`natural`&&e.fdi!==r&&u.push({fdi:e.fdi,papel:c.includes(e.fdi)?`vizinho`:e.fdi===l?`homologo`:`arcada`,...Rm(o,s,e.triangulos,t)});return u}function Hm(e,t,n,r,i,a){let o=e.getAttribute(`position`).array,s=gm(e),c=n.elements,l=Math.max(4,r-i),u=[[],[]];for(let e=0;e<s.length/3;e++){let t=0,n=0,d=0;for(let r=0;r<3;r++){let i=s[e*3+r]*3,a=o[i],l=o[i+1],u=o[i+2];t+=(c[0]*a+c[4]*l+c[8]*u+c[12])/3,n+=(c[1]*a+c[5]*l+c[9]*u+c[13])/3,d+=(c[2]*a+c[6]*l+c[10]*u+c[14])/3}Math.abs(d)>8||n<a||(t>r&&t<r+l?u[0].push(e):t<i&&t>i-l&&u[1].push(e))}let d=[];for(let e of u)e.length>=30&&d.push({fdi:0,papel:`vizinho`,...Rm(o,s,e,t)});return d}function Um(e,t,n,r=.1,i=.6){let a=new Map,o=t=>{let r=a.get(t);return r===void 0&&(r=n.dist(e[t*3],e[t*3+1],e[t*3+2],i),a.set(t,r)),r},s=[];for(let e=0;e+2<t.length;e+=3)(o(t[e])+o(t[e+1])+o(t[e+2]))/3<r&&s.push(e);let c=new Map,l=e=>{let t=e;for(;c.get(t)!==t;)t=c.get(t);let n=e;for(;c.get(n)!==t;){let e=c.get(n);c.set(n,t),n=e}return t};for(let e of s)for(let n=0;n<3;n++)c.has(t[e+n])||c.set(t[e+n],t[e+n]);for(let e of s){let n=l(t[e]);c.set(l(t[e+1]),n),c.set(l(t[e+2]),n)}let u=new Map;for(let n of s){let r=l(t[n]),i=u.get(r);i||u.set(r,i={s:[0,0,0],n:0,min:1/0,area:0});let a=t[n]*3,s=t[n+1]*3,c=t[n+2]*3;for(let r of[t[n],t[n+1],t[n+2]])i.s[0]+=e[r*3],i.s[1]+=e[r*3+1],i.s[2]+=e[r*3+2],i.n++,i.min=Math.min(i.min,o(r));i.area+=Math.hypot(...Cm([e[s]-e[a],e[s+1]-e[a+1],e[s+2]-e[a+2]],[e[c]-e[a],e[c+1]-e[a+1],e[c+2]-e[a+2]]))/2}return[...u.values()].map(e=>({centro:[e.s[0]/e.n,e.s[1]/e.n,e.s[2]/e.n],min:e.min,area:e.area})).sort((e,t)=>e.min-t.min)}var Wm=.1,Gm=.3,Km=e=>{let t=e.filter(e=>e.fdi>0).map(e=>String(e.fdi));return t.length?` `+(t.length>1?`${t.slice(0,-1).join(`, `)} e ${t[t.length-1]}`:t[0]):``};function qm(e){let t=(e??[]).filter(e=>Number.isFinite(e.min)),n=[[`vizinho`,t.filter(e=>e.papel===`vizinho`)],[`homologo`,t.filter(e=>e.papel===`homologo`)],[`arcada`,t.filter(e=>e.papel===`arcada`)]],r=(e,t)=>(e===`vizinho`?t.length>1?`vizinhos`:`vizinho`:e===`homologo`?`homólogo`:t.length>1?`dentes da arcada`:`dente da arcada`)+Km(t),i=(e,n)=>{let r=e.length,i=t=>e.reduce((e,n)=>e+t(n),0)/r;return{alvo:Math.max(Gp,i(e=>e.min)),area005:i(e=>e.area005),area01:i(e=>e.area01),origem:n,dentes:t,usados:e}};for(let[e,t]of n){let n=t.filter(e=>e.min<=Wm).sort((e,t)=>e.min-t.min);if(n.length){let t=e===`arcada`?n.slice(0,2):n;return i(t,r(e,t))}}for(let[e,t]of n){let n=t.filter(e=>e.min<=Gm).sort((e,t)=>e.min-t.min);if(n.length)return i([n[0]],`${r(e,[n[0]])} (nenhum dente do scan toca o antagonista)`)}return{alvo:Gp,area005:0,area01:0,origem:t.length?`contato do motor (os dentes do scan estão longe do antagonista)`:`contato do motor (sem dente do scan para medir)`,dentes:t,usados:[]}}var Jm=.5,Ym=-.53,Xm=.3,Zm=.08,Qm=.003,$m=(e,t,n)=>Math.sqrt(e*e+t*t+n*n);function eh(e){let{pos:t,tris:n,peso:r,todos:i}=e,a=t.length/3,o=jf(n,a),s=Float32Array.from(t),c=[];for(let e=0;e<a;e++)r[e]>0&&o.off[e+1]>o.off[e]&&c.push(e);let l=[];for(let e=0,n=Math.max(1,Math.floor(c.length/4e3));e<c.length&&l.length<2e4;e+=n){let n=c[e];for(let e=o.off[n];e<o.off[n+1];e++){let r=o.nb[e];l.push($m(t[r*3]-t[n*3],t[r*3+1]-t[n*3+1],t[r*3+2]-t[n*3+2]))}}l.sort((e,t)=>e-t);let u=l.length?l[l.length>>1]:Xm,d=e.voltas??Math.max(6,Math.min(60,Math.round(6*(.3/Math.max(.001,u))**2))),f=Ff(t,i),p=f<0?-1:1,m=Math.abs(f);if(!c.length)return{vertices:0,voltas:0,aresta:u,desvioMax:0,desvioMedio:0,volumeAntes:m,volumeDepois:m};let h=new Uint8Array(a),g=new Uint8Array(a);for(let e of c){h[e]=1,g[e]=1;for(let t=o.off[e];t<o.off[e+1];t++)g[o.nb[t]]=1}let _=[];for(let e=0;e+2<n.length;e+=3)(g[n[e]]||g[n[e+1]]||g[n[e+2]])&&_.push(e);let v=new Uint32Array(_.length*3);_.forEach((e,t)=>{v[t*3]=n[e],v[t*3+1]=n[e+1],v[t*3+2]=n[e+2]});let y=[];for(let e=0;e<a;e++)g[e]&&y.push(e);let b=new Float32Array(a*3),x=new Float32Array(a*3),S=()=>{for(let e of y)b[e*3]=0,b[e*3+1]=0,b[e*3+2]=0;for(let e=0;e<v.length;e+=3){let n=v[e]*3,r=v[e+1]*3,i=v[e+2]*3,a=t[r]-t[n],o=t[r+1]-t[n+1],s=t[r+2]-t[n+2],c=t[i]-t[n],l=t[i+1]-t[n+1],u=t[i+2]-t[n+2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c;b[n]+=d,b[n+1]+=f,b[n+2]+=p,b[r]+=d,b[r+1]+=f,b[r+2]+=p,b[i]+=d,b[i+1]+=f,b[i+2]+=p}for(let e of c){let t=$m(b[e*3],b[e*3+1],b[e*3+2])||1;b[e*3]/=t,b[e*3+1]/=t,b[e*3+2]/=t}},C=e=>{S();for(let n of c){let i=0,a=0,s=0,c=0,l=t[n*3],u=t[n*3+1],d=t[n*3+2];for(let e=o.off[n];e<o.off[n+1];e++){let n=o.nb[e],r=t[n*3]-l,f=t[n*3+1]-u,p=t[n*3+2]-d,m=1/Math.max(1e-4,$m(r,f,p));i+=r*m,a+=f*m,s+=p*m,c+=m}let f=i/c,p=a/c,m=s/c,h=f*b[n*3]+p*b[n*3+1]+m*b[n*3+2],g=e*r[n]*h;x[n*3]=b[n*3]*g,x[n*3+1]=b[n*3+1]*g,x[n*3+2]=b[n*3+2]*g}for(let e of c)for(let n=0;n<3;n++)t[e*3+n]+=x[e*3+n]},{folgaPiso:w,dirPiso:T}=e,E=()=>{for(let e of c){let n=t[e*3]-s[e*3],i=t[e*3+1]-s[e*3+1],a=t[e*3+2]-s[e*3+2];if(w&&T&&Number.isFinite(w[e])){let t=T[e*3],r=T[e*3+1],o=T[e*3+2],s=n*t+i*r+a*o,c=-Math.max(0,w[e]-Qm);s<c&&(n+=t*(c-s),i+=r*(c-s),a+=o*(c-s))}let o=$m(n,i,a),c=Zm*r[e],l=o>c?c/o:1;t[e*3]=s[e*3]+n*l,t[e*3+1]=s[e*3+1]+i*l,t[e*3+2]=s[e*3+2]+a*l}};for(let e=0;e<d;e++)C(Jm),C(Ym);{let e=new Float32Array(a).fill(1),n=new Float32Array(a).fill(1);for(let n of c){let i=$m(t[n*3]-s[n*3],t[n*3+1]-s[n*3+1],t[n*3+2]-s[n*3+2]),a=Zm*r[n];e[n]=i>a?a/i:1}for(let t of c){let r=e[t];for(let n=o.off[t];n<o.off[t+1];n++)r=Math.min(r,e[o.nb[n]]);n[t]=r}for(let r of c){let i=n[r],a=1;for(let e=o.off[r];e<o.off[r+1];e++)i+=n[o.nb[e]],a++;let c=Math.min(e[r],i/a);for(let e=0;e<3;e++)t[r*3+e]=s[r*3+e]+(t[r*3+e]-s[r*3+e])*c}}E();let D=_.length,O=new Float64Array(D*4),k=new Float64Array(D*4),A=[],j=new Map;for(let e=0;e<D;e++)for(let t=0;t<3;t++){let r=n[_[e]+t],i=n[_[e]+(t+1)%3],o=r<i?r*a+i:i*a+r,s=j.get(o);s===void 0?j.set(o,e):A.push(s,e)}let M=(e,t)=>{for(let r=0;r<D;r++){let i=_[r],a=n[i]*3,o=n[i+1]*3,s=n[i+2]*3,c=e[o]-e[a],l=e[o+1]-e[a+1],u=e[o+2]-e[a+2],d=e[s]-e[a],f=e[s+1]-e[a+1],p=e[s+2]-e[a+2],m=l*p-u*f,h=u*d-c*p,g=c*f-l*d,v=$m(m,h,g);t[r*4]=v>0?m/v:0,t[r*4+1]=v>0?h/v:0,t[r*4+2]=v>0?g/v:0,t[r*4+3]=v/2}};M(s,O);let N=new Float64Array(a*3),P=new Float64Array(a),F=(e,t)=>{for(let e of y)N[e*3]=0,N[e*3+1]=0,N[e*3+2]=0,P[e]=0;for(let t of _){let r=[n[t],n[t+1],n[t+2]],i=e[r[1]*3]-e[r[0]*3],a=e[r[1]*3+1]-e[r[0]*3+1],o=e[r[1]*3+2]-e[r[0]*3+2],s=e[r[2]*3]-e[r[0]*3],c=e[r[2]*3+1]-e[r[0]*3+1],l=e[r[2]*3+2]-e[r[0]*3+2],u=$m(a*l-o*c,o*s-i*l,i*c-a*s)/2;if(!(u<1e-4))for(let t=0;t<3;t++){let n=r[t],i=r[(t+1)%3],a=r[(t+2)%3],o=e[n*3]-e[a*3],s=e[n*3+1]-e[a*3+1],c=e[n*3+2]-e[a*3+2],l=e[i*3]-e[a*3],d=e[i*3+1]-e[a*3+1],f=e[i*3+2]-e[a*3+2],p=$m(s*f-c*d,c*l-o*f,o*d-s*l),m=p>1e-12?Math.max(-10,Math.min(10,(o*l+s*d+c*f)/p)):0;for(let t=0;t<3;t++){let r=(e[i*3+t]-e[n*3+t])*m*.5;N[n*3+t]+=r,N[i*3+t]-=r}P[n]+=u/3}}for(let e of y)t[e]=P[e]>1e-6?$m(N[e*3],N[e*3+1],N[e*3+2])/(2*P[e]):0},I=new Float64Array(a),ee=new Float64Array(a),L=new Float64Array(a);F(s,I);for(let e of y){let t=I[e];for(let n=o.off[e];n<o.off[e+1];n++)t=Math.max(t,I[o.nb[n]]);L[e]=t}let R=c.map(e=>I[e]).sort((e,t)=>e-t),te=R.length?R[Math.floor(.9*(R.length-1))]:1/0,ne=Math.cos(45*Math.PI/180),re=Math.PI/180,z=(e,t,n)=>Math.acos(Math.max(-1,Math.min(1,e[t*4]*e[n*4]+e[t*4+1]*e[n*4+1]+e[t*4+2]*e[n*4+2]))),B=()=>{if(!e.semGuarda)for(let e=0;e<14;e++){M(t,k);let r=new Uint8Array(a),i=!1,l=e=>{for(let t=0;t<3;t++){let a=n[_[e]+t];h[a]&&(r[a]=1,i=!0)}};for(let e=0;e<D;e++)O[e*4+3]<1e-6||(k[e*4+3]<.1*O[e*4+3]||O[e*4]*k[e*4]+O[e*4+1]*k[e*4+1]+O[e*4+2]*k[e*4+2]<ne)&&l(e);for(let e=0;e<A.length;e+=2){let t=A[e],n=A[e+1];O[t*4+3]<1e-6||O[n*4+3]<1e-6||z(k,t,n)>Math.max(z(O,t,n),30*re)+2*re&&(l(t),l(n))}F(t,ee);for(let e of y)if(!(ee[e]<=Math.max(L[e],te)*1.02)){h[e]&&(r[e]=1,i=!0);for(let t=o.off[e];t<o.off[e+1];t++){let e=o.nb[t];h[e]&&(r[e]=1,i=!0)}}if(!i)return;let u=e===13?0:.5;for(let e of c)if(r[e])for(let n=0;n<3;n++)t[e*3+n]=s[e*3+n]+(t[e*3+n]-s[e*3+n])*u}};B(),S();let V=new Float32Array(a);for(let e=0;e+2<v.length;e+=3){let n=v[e],r=v[e+1],i=v[e+2],a=t[r*3]-t[n*3],o=t[r*3+1]-t[n*3+1],s=t[r*3+2]-t[n*3+2],c=t[i*3]-t[n*3],l=t[i*3+1]-t[n*3+1],u=t[i*3+2]-t[n*3+2],d=$m(o*u-s*l,s*c-a*u,a*l-o*c)/6;V[n]+=d,V[r]+=d,V[i]+=d}let H=m-Math.abs(Ff(t,i)),ie=0;for(let e of c)ie+=r[e]*V[e];if(ie>1e-9&&Math.abs(H)>1e-6){let e=p*H/ie;for(let n of c){let i=e*r[n];t[n*3]+=b[n*3]*i,t[n*3+1]+=b[n*3+1]*i,t[n*3+2]+=b[n*3+2]*i}E(),B()}let ae=0,oe=0,U=0;for(let e of c){let n=$m(t[e*3]-s[e*3],t[e*3+1]-s[e*3+1],t[e*3+2]-s[e*3+2]);n>1e-7&&(U++,oe+=n,n>ae&&(ae=n))}return{vertices:U,voltas:d,aresta:u,desvioMax:ae,desvioMedio:U?oe/U:0,volumeAntes:m,volumeDepois:Math.abs(Ff(t,i))}}function th(e,t,n,r,i=5){let a=n=>e[n*3]!==t[n*3]||e[n*3+1]!==t[n*3+1]||e[n*3+2]!==t[n*3+2],o=0;for(let s=0;s<i;s++){let i=[];for(let e=0;e+2<n.length;e+=3)(a(n[e])||a(n[e+1])||a(n[e+2]))&&i.push(n[e],n[e+1],n[e+2]);let c=[];if(!sp(e,n,i,c))break;let l=s>=2?0:.5;for(let n of new Set(c))if(n>=r&&a(n)){o++;for(let r=0;r<3;r++)e[n*3+r]=t[n*3+r]+(e[n*3+r]-t[n*3+r])*l}}return o}var nh=180/Math.PI,rh=.002,ih=.15,ah=.6,oh=.01;function sh(e,t){let n=e.outerStart+e.ringCount,r=[],i=t=>t<n?0:e.tFaixa[t-n];for(let n=0;n+2<e.index.length;n+=3){let a=e.index[n],o=e.index[n+1],s=e.index[n+2];a<e.outerStart||o<e.outerStart||s<e.outerStart||i(a)<t&&i(o)<t&&i(s)<t&&r.push(a,o,s)}return r}function ch(e,t){let n=new Float32Array(e.length),r=new Uint8Array(e.length/3);for(let i=0;i+2<t.length;i+=3){let a=t[i]*3,o=t[i+1]*3,s=t[i+2]*3,c=e[o]-e[a],l=e[o+1]-e[a+1],u=e[o+2]-e[a+2],d=e[s]-e[a],f=e[s+1]-e[a+1],p=e[s+2]-e[a+2],m=l*p-u*f,h=u*d-c*p,g=c*f-l*d,_=Math.hypot(m,h,g),v=Math.max(Math.hypot(c,l,u),Math.hypot(d,f,p),Math.hypot(e[s]-e[o],e[s+1]-e[o+1],e[s+2]-e[o+2]));if(!(_<2e-4||v*v/_>6))for(let e of[a,o,s])n[e]+=m,n[e+1]+=h,n[e+2]+=g,r[e/3]=1}for(let e=0;e<n.length;e+=3){if(!r[e/3]){n[e]=n[e+1]=n[e+2]=NaN;continue}let t=Math.hypot(n[e],n[e+1],n[e+2])||1;n[e]/=t,n[e+1]/=t,n[e+2]/=t}return n}function lh(e,t){let n=new Float64Array(e.length/3);for(let r=0;r+2<t.length;r+=3){let i=t[r],a=t[r+1],o=t[r+2],s=e[a*3]-e[i*3],c=e[a*3+1]-e[i*3+1],l=e[a*3+2]-e[i*3+2],u=e[o*3]-e[i*3],d=e[o*3+1]-e[i*3+1],f=e[o*3+2]-e[i*3+2],p=Math.hypot(c*f-l*d,l*u-s*f,s*d-c*u)/2;n[i]+=p,n[a]+=p,n[o]+=p}return n}function uh(e,t,n){let r=n.outerStart+n.ringCount,i=new Float32Array(e);for(let e=0;e<n.tFaixa.length;e++)i[(r+e)*3]=n.etapas.pose[e*3],i[(r+e)*3+1]=n.etapas.pose[e*3+1],i[(r+e)*3+2]=n.etapas.pose[e*3+2];let a=ch(e,t),o=ch(i,t),s=e.length/3,c=lh(e,t),l=(e,t,n)=>Math.acos(Math.max(-1,Math.min(1,e[t*3]*e[n*3]+e[t*3+1]*e[n*3+1]+e[t*3+2]*e[n*3+2])))*nh,u=new Set,d=0,f=0,p=0,m=[];for(let i=0;i+2<t.length;i+=3)for(let h=0;h<3;h++){let g=t[i+h],_=t[i+(h+1)%3],v=Math.min(g,_)*s+Math.max(g,_);if(u.has(v)||(u.add(v),g<r||_<r)||c[g]<rh||c[_]<rh)continue;let y=l(a,g,_);if(!(y>60))continue;let b=g<r||_<r?0:l(o,g,_);y-b>30&&(d++,y>90&&f++,y>p&&(p=y),m.push({ang:y,ref:b,v:[g,_],x:(e[g*3]+e[_*3])/2,y:(e[g*3+1]+e[_*3+1])/2,z:(e[g*3+2]+e[_*3+2])/2,t:g<r?0:n.tFaixa[g-r]}))}return m.sort((e,t)=>t.ang-e.ang),{dobras:d,invertidas:f,maior:p,piores:m.slice(0,10)}}function dh(e,t){let n=e.positions,r=e.outerStart+e.ringCount,i=Af(n,t),a=new Set(t),o=[];for(let t of a)t>=r&&e.tFaixa[t-r]>0&&e.tFaixa[t-r]<=.9&&o.push(t);let s=ah,c=new Map,l=(e,t,n)=>`${e},${t},${n}`;for(let e of a){let t=l(Math.floor(n[e*3]/s),Math.floor(n[e*3+1]/s),Math.floor(n[e*3+2]/s)),r=c.get(t);r?r.push(e):c.set(t,[e])}let u=[],d=0,f=-1,p=new Float64Array(27),m=[];for(let e of o){let t=n[e*3],r=n[e*3+1],a=n[e*3+2];m.length=0;let o=Math.floor(t/s),h=Math.floor(r/s),g=Math.floor(a/s);for(let e=o-1;e<=o+1;e++)for(let i=h-1;i<=h+1;i++)for(let o=g-1;o<=g+1;o++){let s=c.get(l(e,i,o));if(s)for(let e of s){let i=Math.hypot(n[e*3]-t,n[e*3+1]-r,n[e*3+2]-a);i>=ih&&i<=ah&&m.push(e)}}if(m.length<6){u.push(0);continue}let _=i[e*3],v=i[e*3+1],y=i[e*3+2],b=+(Math.abs(_)<.8),x=+!b,S=x*y,C=-b*y,w=b*v-x*_,T=Math.hypot(S,C,w)||1;S/=T,C/=T,w/=T;let E=v*w-y*C,D=y*S-_*w,O=_*C-v*S;p[0]=_,p[1]=v,p[2]=y;let k=Math.cos(.436),A=Math.sin(.436);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=Math.cos(t)*S+Math.sin(t)*E,r=Math.cos(t)*C+Math.sin(t)*D,i=Math.cos(t)*w+Math.sin(t)*O;p[3+e*3]=k*_+A*n,p[4+e*3]=k*v+A*r,p[5+e*3]=k*y+A*i}let j=0;for(let e=0;e<9;e++){let i=p[e*3],o=p[e*3+1],s=p[e*3+2],c=-1/0;for(let e of m){let t=i*n[e*3]+o*n[e*3+1]+s*n[e*3+2];t>c&&(c=t)}let l=i*t+o*r+s*a-c;l>j&&(j=l)}u.push(j),j>d&&(d=j,f=e)}let h=u.slice().sort((e,t)=>e-t);return{max:d,p99:h.length?h[Math.floor(h.length*.99)]:0,acima005:u.filter(e=>e>.05).length,x:f>=0?n[f*3]:NaN,y:f>=0?n[f*3+1]:NaN,z:f>=0?n[f*3+2]:NaN,t:f>=0?e.tFaixa[f-r]:NaN,valores:u}}var fh=.25,ph=.8,mh=.04;function hh(e){let t=e.positions,n=e.outerStart+e.ringCount,r=t=>t<n?0:e.tFaixa[t-n],i=1/0,a=-1/0,o=[];for(let t=0;t+2<e.index.length;t+=3){let n=e.index[t],i=e.index[t+1],a=e.index[t+2];n<e.outerStart||i<e.outerStart||a<e.outerStart||(r(n)<1.6||r(i)<1.6||r(a)<1.6)&&o.push(n,i,a)}for(let r=n;r<t.length/3;r++)e.tFaixa[r-n]<1&&(i=Math.min(i,t[r*3+1]),a=Math.max(a,t[r*3+1]));for(let r=e.outerStart;r<n;r++)i=Math.min(i,t[r*3+1]);let s=Math.ceil((a-i)/mh)+1,c={max:0,vista:``,y:NaN,u:NaN},l={};for(let[e,n,a]of[[`+z`,2,1],[`-z`,2,-1],[`+x`,0,1],[`-x`,0,-1]]){let u=new Float64Array(s).fill(-1/0),d=new Float64Array(s).fill(9),f=(e,t,n,r,o)=>{let c=Math.max(1,Math.ceil(Math.hypot(n-e,r-t)/mh));for(let l=0;l<=c;l++){let f=l/c,p=e+(n-e)*f,m=(t+(r-t)*f)*a,h=Math.round((p-i)/mh);h>=0&&h<s&&m>u[h]&&(u[h]=m,d[h]=o)}};for(let e=0;e<o.length;e+=3)for(let i=0;i<3;i++){let a=o[e+i],s=o[e+(i+1)%3];f(t[a*3+1],t[a*3+n],t[s*3+1],t[s*3+n],Math.min(r(a),r(s)))}for(let e=0;e<s;e++)u[e]<1&&(u[e]=-1/0);let p=0;for(let e=0;e<s;e++)d[e]<1&&(p=e);for(let e=p+Math.round(.3/mh);e<s;e++)u[e]=-1/0;let m=Math.round(fh/mh),h=Math.round(ph/mh),g=0;for(let t=m;t<s-m;t++){if(!Number.isFinite(u[t]))continue;let n=-1/0;for(let e=Math.max(0,t-h);e<=t-m;e++)if(Number.isFinite(u[e]))for(let r=t+m;r<=Math.min(s-1,t+h);r++){if(!Number.isFinite(u[r]))continue;let i=u[e]+(u[r]-u[e])*((t-e)/(r-e));i>n&&(n=i)}if(!Number.isFinite(n))continue;let r=u[t]-n;r>g&&(g=r),r>c.max&&(c={max:r,vista:e,y:i+t*mh,u:u[t]*a})}l[e]=g}return{...c,porVista:l}}function gh(e,t,n,r,i){let a=e.positions,o=e.outerStart+e.ringCount,s=Math.cos(n),c=Math.sin(n),l=t=>t<o?0:e.tFaixa[t-o],u=e=>-(a[e*3]-r)*c+(a[e*3+2]-i)*s,d=e=>(a[e*3]-r)*s+(a[e*3+2]-i)*c,f=a.length/3,p=new Map,m=new Map,h=(e,t)=>{let n=Math.min(e,t)*f+Math.max(e,t);if(!p.has(n)){let r=u(e),i=r/(r-u(t));p.set(n,{r:d(e)+(d(t)-d(e))*i,y:a[e*3+1]+(a[t*3+1]-a[e*3+1])*i,t:l(e)+(l(t)-l(e))*i})}return n},g=(e,t)=>{(m.get(e)??m.set(e,[]).get(e)).push(t),(m.get(t)??m.set(t,[]).get(t)).push(e)};for(let e=0;e+2<t.length;e+=3){let n=[t[e],t[e+1],t[e+2]],r=n.map(u),i=[];for(let e=0;e<3;e++){let t=n[e],a=n[(e+1)%3];r[e]<0!=r[(e+1)%3]<0&&i.push(h(t,a))}i.length===2&&p.get(i[0]).r>.2&&p.get(i[1]).r>.2&&g(i[0],i[1])}let _=-1,v=1/0;for(let[e,t]of m)t.length===1&&p.get(e).t<v&&(v=p.get(e).t,_=e);if(_<0||v>.02)return null;let y=[p.get(_)],b=new Set([_]),x=_;for(;;){let e=(m.get(x)??[]).find(e=>!b.has(e));if(e===void 0)break;b.add(e),y.push(p.get(e)),x=e}return y}function _h(e){let t=.04,n=[],r=0;n.push([e[0].r,e[0].y]);for(let i=1;i<e.length&&e[i-1].t<1;i++){let a=e[i-1].r,o=e[i-1].y,s=e[i].r,c=e[i].y,l=Math.hypot(s-a,c-o);for(;r+l>=t;){let e=(t-r)/l;a+=(s-a)*e,o+=(c-o)*e,l=Math.hypot(s-a,c-o),r=0,n.push([a,o])}r+=l}let i=n.length;if(i<19)return{maximo:0,alternancias:0,y:NaN,r:NaN};let a=(e,r,i,a)=>{let o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;for(let m=r;m<=i;m++){let r=(m-a)*t,i=n[m][e];o++,s+=r,c+=r*r,l+=r**3,u+=r**4,d+=i,f+=r*i,p+=r*r*i}let m=o*(c*u-l*l)-s*(s*u-l*c)+c*(s*l-c*c);return Math.abs(m)<1e-12?n[a][e]:(d*(c*u-l*l)-s*(f*u-l*p)+c*(f*l-c*p))/m},o=0,s=0,c=0,l=NaN,u=NaN;for(let e=2;e+2<i;e++){let t=Math.max(0,e-9),r=Math.min(i-1,e+9);if(r-t<11)continue;let d=n[e][0]-a(0,t,r,e),f=n[e][1]-a(1,t,r,e),p=Math.hypot(d,f);if(p>o&&(o=p,l=n[e][1],u=n[e][0]),p<oh)continue;let m=n[Math.min(i-1,e+1)][0]-n[Math.max(0,e-1)][0],h=n[Math.min(i-1,e+1)][1]-n[Math.max(0,e-1)][1],g=Math.sign(d*-h+f*m);s!==0&&g!==s&&c++,s=g}return{maximo:o,alternancias:c,y:l,r:u}}function vh(e){let t=e.etapas.polimento;if(!t)return e.positions;let n=Float32Array.from(e.positions);for(let e=0;e<n.length;e++)n[e]-=t[e];return n}function yh(e){let t=vh(e),n=e.outerStart+e.ringCount,r=e.etapas.pose,i=e.tFaixa.length,a=new Float64Array(i),o=t=>e.tFaixa[t]>=1&&e.origem[t]>=0;for(let e=0;e<i;e++)o(e)&&(a[e]=Math.hypot(t[(n+e)*3]-r[e*3],t[(n+e)*3+1]-r[e*3+1],t[(n+e)*3+2]-r[e*3+2]));let s=e=>o(e)&&a[e]>.01,c=0,l=0,u=.6,d=new Map,f=(e,t,n)=>`${e},${t},${n}`;for(let e=0;e<i;e++)if(s(e)){c++,a[e]>l&&(l=a[e]);let r=t[(n+e)*3],i=t[(n+e)*3+1],o=t[(n+e)*3+2],s=f(Math.floor(r/u),Math.floor(i/u),Math.floor(o/u));(d.get(s)??d.set(s,[]).get(s)).push(e)}let p=0;for(let e=0;e<i;e++){if(!o(e)||a[e]<=p)continue;let r=t[(n+e)*3],i=t[(n+e)*3+1],s=t[(n+e)*3+2],c=Math.floor(r/u),l=Math.floor(i/u),m=Math.floor(s/u),h=!1;for(let e=c-1;e<=c+1&&!h;e++)for(let a=l-1;a<=l+1&&!h;a++)for(let o=m-1;o<=m+1&&!h;o++)for(let c of d.get(f(e,a,o))??[])if(Math.hypot(t[(n+c)*3]-r,t[(n+c)*3+1]-i,t[(n+c)*3+2]-s)<=.6){h=!0;break}h||(p=a[e])}let m=0,h=[];for(let r=0;r+2<e.index.length;r+=3){let i=e.index[r],c=e.index[r+1],l=e.index[r+2];if(i<n||c<n||l<n)continue;let u=i-n,d=c-n,f=l-n;if(!(s(u)||s(d)||s(f)))continue;let p=t[c*3]-t[i*3],g=t[c*3+1]-t[i*3+1],_=t[c*3+2]-t[i*3+2],v=t[l*3]-t[i*3],y=t[l*3+1]-t[i*3+1],b=t[l*3+2]-t[i*3+2];m+=Math.hypot(g*b-_*y,_*v-p*b,p*y-g*v)/2;for(let[e,n,r,s]of[[i,c,u,d],[c,l,d,f],[l,i,f,u]]){if(!o(r)||!o(s))continue;let i=Math.hypot(t[e*3]-t[n*3],t[e*3+1]-t[n*3+1],t[e*3+2]-t[n*3+2]);i>.04&&h.push(Math.abs(a[r]-a[s])/i)}}return h.sort((e,t)=>e-t),{levantados:c,maximo:l,area:m,foraDaRegiao:p,inclinacao:h.length?h[Math.floor(h.length*.99)]:0,inclinacaoMax:h.length?h[h.length-1]:0}}function bh(e){let t=vh(e),n=e.outerStart+e.ringCount,r=e.etapas.pose,i=e.tFaixa.length,a=new Float64Array(i),o=t=>e.origem[t]>=0;for(let e=0;e<i;e++)o(e)&&(a[e]=Math.hypot(t[(n+e)*3]-r[e*3],t[(n+e)*3+1]-r[e*3+1],t[(n+e)*3+2]-r[e*3+2]));let s=.6,c=new Map,l=(e,t,n)=>e+`,`+t+`,`+n;for(let e=0;e<i;e++)if(o(e)&&a[e]>.01){let r=l(Math.floor(t[(n+e)*3]/s),Math.floor(t[(n+e)*3+1]/s),Math.floor(t[(n+e)*3+2]/s));(c.get(r)??c.set(r,[]).get(r)).push(e)}let u=e=>{let r=t[(n+e)*3],i=t[(n+e)*3+1],a=t[(n+e)*3+2],o=Math.floor(r/s),u=Math.floor(i/s),d=Math.floor(a/s);for(let e=o-1;e<=o+1;e++)for(let o=u-1;o<=u+1;o++)for(let s=d-1;s<=d+1;s++)for(let u of c.get(l(e,o,s))??[])if(Math.hypot(t[(n+u)*3]-r,t[(n+u)*3+1]-i,t[(n+u)*3+2]-a)<=.6)return!0;return!1},d=t=>{let n=[],r=0;for(let s=0;s<i;s++)o(s)&&e.tParede[s]>=1===t&&(n.push(a[s]),t&&a[s]>r&&!u(s)&&(r=a[s]));return n.sort((e,t)=>e-t),{vertices:n.length,max:n.length?n[n.length-1]:0,p95:n.length?n[Math.floor(n.length*.95)]:0,foraDaRegiao:r}};return{cervical:d(!1),acima:d(!0)}}function xh(e,t=3,n=.85){let r=sh(e,1),i=sh(e,1.25),a=dh(e,r),o=uh(e.positions,r,e),s=e.outerStart+e.ringCount,c=e.positions,l=new Float32Array(c);for(let t=0;t<e.tFaixa.length;t++)l[(s+t)*3]=e.etapas.pose[t*3],l[(s+t)*3+1]=e.etapas.pose[t*3+1],l[(s+t)*3+2]=e.etapas.pose[t*3+2];let u=ch(c,i),d=ch(l,i),f=lh(c,i),p=[],m={x:NaN,y:NaN,z:NaN,t:NaN},h=-1;for(let t of new Set(i)){if(t<s)continue;let r=e.tFaixa[t-s];if(r<n-.05||r>n+.07||f[t]<rh)continue;let i=t-s,a=Math.atan2(c[t*3+2],c[t*3]),o=Math.round((a<0?a+2*Math.PI:a)/(2*Math.PI)*e.margem.raio.length)%e.margem.raio.length;if(Math.hypot(c[t*3],c[t*3+2])<.75*e.margem.raio[o]||Math.hypot(c[t*3]-e.etapas.faixa[i*3],c[t*3+1]-e.etapas.faixa[i*3+1],c[t*3+2]-e.etapas.faixa[i*3+2])>.01)continue;let l=Math.max(-1,Math.min(1,u[t*3]*d[t*3]+u[t*3+1]*d[t*3+1]+u[t*3+2]*d[t*3+2])),g=Math.acos(l)*nh;Number.isFinite(g)&&(p.push(g),g>h&&(h=g,m={x:c[t*3],y:c[t*3+1],z:c[t*3+2],t:r}))}p.sort((e,t)=>e-t);let g=0,_=0,v=0,y=0,b={graus:NaN,y:NaN,r:NaN};for(let n=0;n<360;n+=t){let t=gh(e,i,n*Math.PI/180,0,0);if(!t||t.length<4)continue;g++;let r=_h(t);r.maximo>y&&(y=r.maximo,b={graus:n,y:r.y,r:r.r}),r.alternancias>=1&&_++,r.alternancias>=2&&v++}return{faixa:{vertices:new Set(r).size,triangulos:r.length/3,geratrizes:g},contorno:hh(e),bico:{max:a.max,p99:a.p99,acima005:a.acima005,x:a.x,y:a.y,z:a.z,t:a.t},aba:{dobras:o.dobras,invertidas:o.invertidas,maiorDobra:o.maior,inflexoes:_,pregas:v,ondulacaoMax:y,ondulacaoEm:b,piores:o.piores},degrau:{max:p.length?p[p.length-1]:0,p95:p.length?p[Math.floor(p.length*.95)]:0,vertices:p.length,em:m},fossa:yh(e),terco:bh(e)}}var Sh=.85,Ch=.6,wh=8,Th=.15,Eh=.05,Dh={ligada:!1},Oh={cervicalAdaptado:!1},kh=1.5,Ah=.6,jh=.14,Mh=.012,Nh=`encosta no antagonista`,Ph=.005,Fh=4,Ih=2.5,Lh=40,Rh=.15,zh=kh,Bh=[.8,1.25],Vh=.3,Hh=1,Uh=.6,Wh=.2,Gh=1.2,Kh=.01,qh=.25,Jh=2,Yh=3,Xh=8,Zh=.06;function Qh(e,t){let n=e=>e.cortes>0?2:+(e.invasao>0);return n(t)===n(e)?e.cortes>0?t.cortes<e.cortes:e.invasao>0?t.invasao<e.invasao-Zh:t.pregas+t.dobras<e.pregas+e.dobras:n(t)<n(e)}var $h=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function eg(e,t,n,r){if(!n.opp||!t.antagonista)return qm(null);let i=Lm(n.opp,t.antagonista.sinal),a=n.arcada??null;if(!a)return qm(null);let o=Bm(a,i,e.id,r);return(o??[]).some(e=>e.papel===`vizinho`)||(o=[...o??[],...Hm(a,i,e.toScanMatrix().clone().invert(),e.dims.xPlus,e.dims.xMinus,t.yProximal)]),qm(o)}var tg=()=>typeof performance<`u`?performance.now():Date.now(),ng=e=>e.toFixed(2).replace(`.`,`,`);function rg(e,t){if(t&&t.length>=12){let n=new Q,r=new Float64Array(t.length*3);for(let i=0;i<t.length;i++)e.local(t[i],n),r[i*3]=n.x,r[i*3+1]=n.y,r[i*3+2]=n.z;let i=new pp(r);return i.n>=120&&i.comprimento/i.n<=.25?i:new pp(mp(i.p,.1,160))}return new pp(mp(e.ring,.1,160))}var ig=new WeakMap;function ag(e,t,n,r,i,a){let o=ig.get(e);o||ig.set(e,o=new Map);let s=`${i}|${a}|${n.triangulos}|${r.n}|${r.comprimento.toFixed(4)}|${r.p[0].toFixed(4)}|${r.p[1].toFixed(4)}`,c=o.get(s);return c===void 0&&(c=np(t,n,r,i,a),o.size>=4&&o.delete(o.keys().next().value),o.set(s,c)),c}var og=(e,t,n)=>`Espessura de ${ng(e)} mm em ${t}, abaixo dos ${ng(n)} mm pedidos (o dente inteiro não cabe no espaço).`;function sg(e,t,n,r,i){let a=of(n,(r.x0+r.x1)/2,0,(r.z0+r.z1)/2),o=(e-a[0])/(.5*n.s*n.ax*r.md),s=(t-a[2])/(.5*n.s*n.az*r.vl),c=Math.abs(o)<.25?`centro`:o*i>0?`mesial`:`distal`;return`${Math.abs(s)<.2?`fossa central`:s>0?`vestibular`:`lingual`} ${c}`}function cg(e,t,n,r,i=0){let a=new Float32Array(720),o=new Float32Array(720),s=new Float32Array(720),c=[];for(let n=0;n<72;n++){let r=(n+.5)/72*b,i=of(t,e.eqR[n]*Math.cos(r),e.eqY[n],e.eqR[n]*Math.sin(r)),a=Math.atan2(i[2],i[0]);a<0&&(a+=b),c.push([a,i[1]])}c.sort((e,t)=>e[0]-t[0]);let l=e=>{let t=c.length,n=0;for(;n<t&&c[n][0]<e;)n++;let r=c[(n-1+t)%t],i=c[n%t],a=e-r[0],o=i[0]-r[0];return a<0&&(a+=b),o<=0&&(o+=b),r[1]+(i[1]-r[1])*Math.min(1,a/o)},u=0,d=0,f=new Float32Array(720).fill(NaN);for(let r=0;r<720;r+=3)f[r]=Ef(e,t,r/720*b,n.altura[r]);for(let e=0;e<720;e++){if(e%3==0)continue;let t=e-e%3,r=(t+3)%720,i=e%3/3;Number.isFinite(f[t])&&Number.isFinite(f[r])&&(f[e]=n.raio[e]+(f[t]-n.raio[t])*(1-i)+(f[r]-n.raio[r])*i)}for(let e=0;e<720;e++){if(Number.isFinite(f[e]))continue;u++;let t=1,r=1;for(;t<720&&!Number.isFinite(f[(e-t+720)%720]);)t++;for(;r<720&&!Number.isFinite(f[(e+r)%720]);)r++;if(t>=720){f[e]=n.raio[e];continue}let i=f[(e-t+720)%720],a=f[(e+r)%720];f[e]=i+(a-i)*(t/(t+r))}let p=0;for(let e=0;e<720;e++){let t=e/720*b;a[e]=i>0?1+Math.max(-i,Math.min(i,n.raio[e]-f[e]))/Math.max(.3,f[e]):Math.min(2.5,Math.max(.4,n.raio[e]/Math.max(.3,f[e])));let c=Math.abs(f[e]-n.raio[e]);c>d&&(d=c),s[e]=l(t);let u=s[e]-n.altura[e];u<r.min&&p++,o[e]=i>0?Math.max(Eh,u):Math.min(Math.max(r.min,Math.min(r.max,u)),Math.max(r.min,r.razao*c))}let m=new Float32Array(720),h=0;for(let e=-16;e<=16;e++)h+=o[(e+720)%720];for(let e=0;e<720;e++)m[e]=h/33,h+=o[(e+16+1)%720]-o[(e-16+720)%720];for(let e=0;e<720;e++)o[e]=i>0?Math.max(Eh,Math.min(m[e],s[e]-n.altura[e])):Math.max(r.min,Math.min(m[e],Math.max(r.min,Math.min(r.max,s[e]-n.altura[e]))));let g=0;for(let e=0;e<720;e++)g+=n.raio[e]/720;return{campo:new kp(Array.from(a,e=>e-1),g,!Dh.ligada,i>0?Tp:void 0,i>0?Ep:void 0),k:a,h:o,eq:s,desvioMax:d,prolongado:u/720,acimaDoEquador:p/720}}function lg(e,t){let n=[0,0,0],r=-1/0,i=1/0;for(let a=0;a<e.nOriginal;a++)e.P[a*3+1]<0||(of(t,e.P[a*3],e.P[a*3+1],e.P[a*3+2],n),n[2]>r&&(r=n[2]),n[2]<i&&(i=n[2]));return{max:r,min:i}}function ug(e,t){let n=t/b*720;n-=Math.floor(n/720)*720;let r=Math.floor(n),i=n-r;return e[r%720]+(e[(r+1)%720]-e[r%720])*i}function dg(e,t,r,i={}){let a=tg(),o=[],s=[],c=r.cimento/1e3,l=r.rampaCimento??1,u=Math.max(0,r.minEsp),d=Math.max(0,i.pisoEspessura??.2),f=i.alvoProximal??.03,p=Math.max(0,i.anisoMax??.08),m=Math.max(0,i.ajusteLocalMax??.1),g=Dh.ligada?0:wh,_=(()=>{let e=i.cervicalAdaptado??Oh.cervicalAdaptado;return e?typeof e==`object`?Math.max(.05,e.max??1.5):kh:0})(),v=(r.versaoCoroa??1)>=2,y={min:i.banda?.min??.8,max:i.banda?.max??3,razao:i.banda?.razao??(Dh.ligada?2:5)},b=rg(e,i.margem);if(b.n<12||b.comprimento<6)return`A linha de margem é curta demais para uma coroa.`;let x=Zf(t);if(x.md<2||x.altura<2||!x.oclusais.length)return`O dente da biblioteca não tem uma coroa utilizável (malha vazia ou sem face oclusal).`;let S=tg(),C=vf(e,i.opp??null,b.yMax+1,i.arcada??null,b),w=gp(b,C.completo),T=w.margem,E=ag(e,C.preparo,C.completo,T,c,l);if(typeof E==`string`)return E;E.longe&&o.push(`O preparo recortado não chega à linha de margem em ${E.longe} ponto(s) do bordo (até ${ng(E.prenderMax)} mm): o bordo do intradorso foi levado até a linha.`),E.furos&&o.push(`O scan do preparo tinha ${E.furos} furo(s), fechado(s) no intradorso.`),e.retention&&s.push(`Preparo com área retentiva (${ng(e.undercut)} mm²): o intradorso copia o preparo, sem alívio.`);let D=tg(),O=e.dims,k=O.heightFrom===`antagonista`?C.antagonista:null;i.opp&&!k&&o.push(C.antagonista?`O antagonista está fora de oclusão${O.antagonistAt==null?``:` (a ${ng(O.antagonistAt)} mm da margem)`}: a altura veio do caso.`:`O antagonista não fica sobre este dente: a altura veio do caso.`);let A=(()=>{let t=new Q(T.cx,T.yMax,T.cz).applyMatrix4(e.toScanMatrix());return[t.x,t.y,t.z]})(),j=tg(),M=r.contato===`funcional`&&k?eg(e,C,i,A):null,N=v?Am.valor??(i.arcada?jm(i.arcada,e.id,A):null):null,P=v&&!Am.valor&&i.arcada?Mm(i.arcada,e.id,A):[],F=tg()-j,I={fatorVLPedido:1,fatorVL:1,larguraLivre:null,porqueVL:``,porqueMD:``},ee=M?M.alvo:h(r),L=ee,R=Number.isFinite(i.altura)?i.altura:0,te=!!i.alturaAntiga,ne=E.teto+2;if(!k){let t=Qu(e.type,`Convexo`,1),n=0;for(let e=-6;e<=6;e++)for(let r=-6;r<=6;r++)n=Math.max(n,t.relief(e/6*.87,r/6*.87));ne=Math.max(O.H0+(te?R:0)+n,E.teto+.6),N&&!te&&(ne=Math.max(ne,Math.min(O.Hmax,ug(T.altura,Math.PI/2)+N.alvo.altura)))}let re=i.giro===`auto`?null:(i.giro??0)*Math.PI/180,z={dente:x,margem:T,vizinhos:C.vizinhos,yProximal:C.yProximal,antagonista:k,zVestibular:(i.vl??`arcada`)===`arcada`?C.zVestibular:null,descentroMax:.45,xMais:O.xPlus,xMenos:O.xMinus,topoInicial:ne,alvoOclusal:L,alvoProximal:f,escala:null,giro:re,giroMax:(i.giroMax??12)*Math.PI/180},B=kf(z),V=!!i.reduzir&&Math.abs(i.reduzir-1)>1e-4;V&&(B=kf({...z,escala:B.pose.s*i.reduzir,giro:B.pose.giro}));let H=B.pose,ie=e=>{let t=[];for(let n=0;n<B.excesso.length;n++){let r=(n/B.excesso.length*360-e+540)%360-180;Math.abs(r)<30&&Number.isFinite(B.excesso[n])&&t.push(B.excesso[n])}return t.sort((e,t)=>e-t),t.length?t[t.length>>1]:0},ae=e=>{let t=of(H,(x.x0+x.x1)/2,x.topo,(x.z0+x.z1)/2);H.az=e;let n=of(H,(x.x0+x.x1)/2,x.topo,(x.z0+x.z1)/2);H.tx+=t[0]-n[0],H.ty+=t[1]-n[1],H.tz+=t[2]-n[2],B=kf({...z,escala:V?H.s:null,giro:H.giro,inicial:H}),Object.assign(H,B.pose)},oe={vizinhos:null,faltaVestibular:NaN,faltaLingual:NaN,fatorPedido:1,fatorAplicado:1,motivo:`sem contorno dos dois vizinhos`};if(C.zVestibular!==null&&C.zLingual!==null&&(oe.vizinhos={vestibular:C.zVestibular,lingual:C.zLingual,lados:C.contornoVizinhos.length}),!N&&p>0&&i.vlVizinhos!==!1&&oe.vizinhos&&C.contornoVizinhos.length>=2){let e=lg(x,H),t=e.max-e.min,n=C.zVestibular-C.zLingual,r=(n-t)/2,a=r,o=i.vlLimiar??.1;oe.faltaVestibular=r,oe.faltaLingual=a;let s=ie(90),c=ie(270);if(Math.abs(r)>o&&!(r>0?s<.3&&c<.3:s>-.3&&c>-.3))oe.motivo=`os vizinhos pedem ${r>0?`esticar`:`encolher`} ${ng(Math.abs(2*r))} mm, mas o colo do dente já ${r>0?`sobra`:`falta`} na margem (vestibular ${ng(s)} mm, lingual ${ng(c)} mm)`;else if(Math.abs(r)>o){let e=n/Math.max(1,t),r=Math.min(1+p,Math.max(1,e));oe.fatorPedido=e,oe.fatorAplicado=r,oe.motivo=Math.abs(e-r)>.001?`pedia ${((e-1)*100).toFixed(1)} %, limitado a ${((r-1)*100).toFixed(1)} %`:`contorno vestibular e lingual dos vizinhos`,ae(r)}else oe.motivo=`os vizinhos não pedem (arcada ${ng(n)} mm × dente ${ng(t)} mm)`}else!N&&p>0&&i.vlVizinhos!==!1&&oe.vizinhos&&(oe.motivo=`só um vizinho com coroa medida`);let U=x.P.length/3,se=new Float32Array(U*3),W=new Float32Array(U*3),ce=new Float32Array(U),le=new Float32Array(U),ue=cg(x,H,T,y),de=!1,fe=()=>{let e=de?1:Sh;af(H,x.P,se);for(let t=0;t<U;t++){let n=se[t*3],r=se[t*3+1],i=se[t*3+2],a=Math.atan2(i,n),o=ug(T.altura,a),s=(r-o)/ug(ue.h,a);ce[t]=r-o,le[t]=s;let c=s<e?ue.campo.valor(a,ce[t]):0,l=1;if(s>0){let t=s/e;if(de){if(t>=1)l=0;else{let e=Math.max(0,Math.min(1,.5+c*Math.hypot(n,i)/.2)),r=e*e*(3-2*e);l=r*(1-t*t*t*(10-15*t+6*t*t))+(1-r)*(1-t)*(1-t)*(1-t)}}else if(Dh.ligada)l=t>=1?0:(1-t)*(1-t);else{let e=Math.max(0,Math.min(1,(Ch-Math.abs(c)*Math.hypot(n,i))/.44999999999999996));l=t>=1?0:(1-t)*(1-t)*(1-t)*(1+(1.5+1.5*e)*t)}}n*n+i*i<.04&&(l=0);let u=l>0?1+c*l:1;W[t*3]=n*u,W[t*3+1]=r,W[t*3+2]=i*u}};if(fe(),N&&(!B.temMais||!B.temMenos)){let e=[];for(let t=0;t+2<x.I.length;t+=3)ce[x.I[t]]>=0&&ce[x.I[t+1]]>=0&&ce[x.I[t+2]]>=0&&e.push(t/3);let t=mm(W,x.I,e,[0,1,0],[0,0,1],[1,0,0],[]).larguraMD,n=[0,0,0],r=-1/0,i=1/0;for(let e=0;e<x.proxMais.length;e++){let t=x.proxMais[e];of(H,x.P[t*3],x.P[t*3+1],x.P[t*3+2],n),n[0]>r&&(r=n[0])}for(let e=0;e<x.proxMenos.length;e++){let t=x.proxMenos[e];of(H,x.P[t*3],x.P[t*3+1],x.P[t*3+2],n),n[0]<i&&(i=n[0])}if(t>1&&Number.isFinite(r)&&Number.isFinite(i)){let e=Math.max(Bh[0]*t,Math.min(Bh[1]*t,N.alvo.larguraMD)),n=e*(r-i)/t;if(B.temMais&&!B.temMenos)z.xMenos=r-n;else if(!B.temMais&&B.temMenos)z.xMais=i+n;else{let e=(O.xPlus+O.xMinus)/2;z.xMais=e+n/2,z.xMenos=e-n/2}B=kf({...z,escala:V?H.s:null,giro:H.giro,inicial:H}),Object.assign(H,B.pose),ue=cg(x,H,T,y),fe(),I.larguraLivre=e,Math.abs(e-N.alvo.larguraMD)>.001&&(I.porqueMD=`limitada a ${e>t?`+`:`−`}${Math.round((e>t?Bh[1]-1:1-Bh[0])*100)} % do espaço do caso`)}}if(N&&p>0){let e=[];for(let t=0;t+2<x.I.length;t+=3)ce[x.I[t]]>=0&&ce[x.I[t+1]]>=0&&ce[x.I[t+2]]>=0&&e.push(t/3);let t=V?i.reduzir:1,n=mm(W,x.I,e,[0,1,0],[0,0,1],[1,0,0],[]).espessuraVL,r=N.alvo.espessuraVL*t/Math.max(1,n),a=ie(90),o=ie(270),s=Math.max(1,ug(T.raio,Math.PI/2)),c=Math.max(1,ug(T.raio,3*Math.PI/2)),l=Math.max(1,Math.min(1.15,r)),u=r<1?`o dente da biblioteca já é mais espesso; a regra só alarga`:l<r-.001?`limitada a +${Math.round(Rh*100)} % para não distorcer o dente`:``,d=1+Math.max(0,Math.min((zh-a)/s,(zh-o)/c));d<l&&(l=d,u=`o colo do dente já passa da margem`),i.homologoVLMax!==void 0&&i.homologoVLMax<l&&(l=Math.max(1,i.homologoVLMax),u=`com mais que isso a coroa se cruzava, entrava no vizinho ou enrugava a faixa cervical`),oe.fatorPedido=r,oe.fatorAplicado=l,oe.motivo=`${N.origem===`homologo`?`homólogo`:`vizinho`} ${N.fdi}: pedia ${((r-1)*100).toFixed(1)} %${u?`, ${u}`:``}`,I.fatorVLPedido=r,I.fatorVL=l,I.porqueVL=u,Math.abs(l-1)>.001&&(ae(l),ue=cg(x,H,T,y),fe())}let G=H.az,pe={d:0,nx:0,ny:1,nz:0},me=!e.retention,he=(e,t,n,r,i=!1)=>{let a=i&&me?C.preparo.distAte(e,t,n,r):C.preparo.dist(e,t,n,r);if(!Number.isFinite(a))return!1;let o=e-C.preparo.px,s=t-C.preparo.py,c=n-C.preparo.pz,l=Math.hypot(o,s,c);if(l>1e-5){let e=(a>=0?1:-1)/l;o*=e,s*=e,c*=e}else o=C.preparo.nx,s=C.preparo.ny,c=C.preparo.nz;return pe.d=a,pe.nx=o,pe.ny=s,pe.nz=c,!0},K=e=>{let t=c+d+.05,n=[];for(let r=0;r<x.nOriginal;r++)le[r]>=1&&he(W[r*3],W[r*3+1],W[r*3+2],t+e,!0)&&n.push(r);if(!n.length)return e;let r=e=>{let r=-1/0;for(let i of n){let n=W[i*3],a=W[i*3+1]-e,o=W[i*3+2];if(!he(n,a,o,t,!0))continue;let s=c+hd(d,T.distancia(n,a,o))-pe.d;s>r&&(r=s)}return r},i=Math.max(0,r(0))+Ph;if(r(e)<=i)return e;let a=0,o=e;for(let e=0;e<12;e++){let e=(a+o)/2;r(e)<=i?a=e:o=e}return a};if(p>0&&d>0)for(let e=0;e<2;e++){let e=0;of(H,0,0,(x.z0+x.z1)/2)[2];for(let t=0;t<x.nOriginal;t+=2){if(le[t]<1)continue;let n=W[t*3],r=W[t*3+1],i=W[t*3+2];if(!he(n,r,i,c+d+.05,!0))continue;let a=c+hd(d,T.distancia(n,r,i))-pe.d;if(!(a<=.01)&&pe.ny>.6){let t=Math.max(.3,of(H,0,x.topo,0)[1]-r);e=Math.max(e,a/t)}}if(e<.001)break;let t=Math.max(1-p,H.ay*(1-e)),n=Math.min(Math.max(1+p,H.az),H.az*1);if(Math.abs(t-H.ay)<.001&&Math.abs(n-H.az)<.001)break;let r=of(H,(x.x0+x.x1)/2,x.topo,(x.z0+x.z1)/2);H.ay=t,H.az=n;let a=of(H,(x.x0+x.x1)/2,x.topo,(x.z0+x.z1)/2);H.tx+=r[0]-a[0],H.ty+=r[1]-a[1],H.tz+=r[2]-a[2],B=kf({...z,escala:i.reduzir&&Math.abs(i.reduzir-1)>1e-4?H.s:null,giro:H.giro,inicial:H}),Object.assign(H,B.pose),ue=cg(x,H,T,y),fe()}let ge=te?{pedida:k?0:R,feita:k?0:R,motivo:``}:{pedida:R,feita:0,motivo:``};if(!te&&Math.abs(R)>1e-4){let e=R;if(e>0&&C.antagonista){let t=C.antagonista,n=new Sf(x.P,x.oclusais,(e,n,r,i)=>t.dist(e,n,r,i)).medir(H,e+1.3);Number.isFinite(n)&&e>n-.01&&(e=Math.max(0,n-Gp),ge.motivo=Nh)}else if(e<0){let t=K(-e);t<-e-.001&&(e=-t,ge.motivo=`abaixo disso a anatomia ficaria com menos de ${ng(d)} mm sobre o preparo`)}Math.abs(e)>.001?(k?(L=Math.max(Gp,ee-e),z.alvoOclusal=L):H.ty+=e,B=kf({...z,escala:V?H.s:null,giro:H.giro,inicial:H}),Object.assign(H,B.pose),ue=cg(x,H,T,y),fe()):e=0,ge.feita=e}_>0&&(de=!0,ue=cg(x,H,T,y,_),fe());let q=tg();ue.prolongado>.02&&o.push(`A margem desce abaixo do toco de raiz do dente da biblioteca em ${(ue.prolongado*100).toFixed(0)} % do contorno: a parede cervical foi prolongada até a linha.`),ue.acimaDoEquador>.05&&!de&&o.push(`Em ${(ue.acimaDoEquador*100).toFixed(0)} % do contorno a margem fica a menos de ${ng(y.min)} mm do equador do dente: ali a faixa cervical passa do equador. Um dente menor (opção "reduzir") ou mais baixo evita isso.`);let J=Mf(W,x.I,ce,.02),Y=J.positions.length/3;if(J.index.length<9)return`O dente da biblioteca fica inteiro abaixo da linha de margem: não há coroa para recortar.`;let _e=0;for(let e=1;e<Y;e++)J.positions[e*3+1]>J.positions[_e*3+1]&&(_e=e);let ve=Nf(J.index,Y,_e),ye=[];for(let e of ve)ye.push(J.index[e*3],J.index[e*3+1],J.index[e*3+2]);let X=Float32Array.from(J.positions),be=Pf(ye);if(!be.length)return`O recorte do dente na margem não fechou um bordo: a linha de margem não contorna o dente.`;let xe=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n]*3,i=e[(n+1)%e.length]*3;t+=Math.hypot(X[r]-X[i],X[r+1]-X[i+1],X[r+2]-X[i+2])}return t};be.sort((e,t)=>xe(t)-xe(e));let Se=be[0];be.length>1&&o.push(`A malha do dente da biblioteca tem ${be.length-1} furo(s) acima da margem; ficaram abertos.`);let Ce=new Float32Array(Y*3),we=new Float32Array(Y);for(let e=0;e<Y;e++){let t=J.origem[e];if(t>=0)Ce[e*3]=se[t*3],Ce[e*3+1]=se[t*3+1],Ce[e*3+2]=se[t*3+2],we[e]=le[t];else{let[t,n,r]=J.aresta.get(e);for(let i=0;i<3;i++)Ce[e*3+i]=se[t*3+i]+(se[n*3+i]-se[t*3+i])*r;we[e]=0}}let Te={u:0,d:0,x:0,y:0,z:0,seg:0},Ee=[],De=new Uint8Array(Y),Oe=0;for(let e of Se)T.proximo(X[e*3],X[e*3+1],X[e*3+2],Te),Te.d>Oe&&(Oe=Te.d),X[e*3]=Te.x,X[e*3+1]=Te.y,X[e*3+2]=Te.z,Ee.push(Te.u),De[e]=1;for(let e=0;e<3;e++){let e=new Float32Array(Y).fill(-1),t=t=>e[t]>=0?e[t]:e[t]=T.distancia(X[t*3],X[t*3+1],X[t*3+2]),n=Rf(X,ye,Y,(e,n)=>!(De[e]&&De[n])&&Math.min(t(e),t(n))<Ah,jh);if(!n.novos.length)break;let r=Y+n.novos.length,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r),s=new Uint8Array(r);i.set(X),a.set(Ce),o.set(we),s.set(De),n.novos.forEach(([e,t],n)=>{let r=Y+n;for(let n=0;n<3;n++)i[r*3+n]=(X[e*3+n]+X[t*3+n])/2,a[r*3+n]=(Ce[e*3+n]+Ce[t*3+n])/2;o[r]=(we[e]+we[t])/2,J.origem.push(-1)}),ye.length=0;for(let e of n.index)ye.push(e);X=i,Ce=a,we=o,De=s,Y=r}let ke=tg(),Ae=Float32Array.from(X),je=new Uint8Array(Y);for(let e of ye)je[e]=1;let Me=jf(ye,Y),Ne=Af(X,ye),Pe=new Float32Array(Y),Fe=new Float32Array(Y);for(let e=0;e<Y;e++)je[e]&&(Pe[e]=T.distancia(X[e*3],X[e*3+1],X[e*3+2]));let Ie=e=>Yp(e,c,l,d),Le=Ie,Re=new Uint8Array(Y);for(let e=0;e<Y;e++)je[e]&&!De[e]&&(Re[e]=1);let ze=(e,t,n)=>{if(!k)return 1/0;let r=k.dist(e,t,n,1.3);return Number.isFinite(r)?Math.max(0,r-L):1/0},Be=new Float32Array(Y).fill(1/0);if(k)for(let e=0;e<Y;e++)Re[e]&&(Be[e]=ze(X[e*3],X[e*3+1],X[e*3+2]));let Ve=tg(),He=[];if(M&&k&&Math.max(0,...M.usados.map(e=>e.manchas))>=2){let t=n(e.id)===`U`,r=[[t?`cúspide palatina`:`cúspide vestibular`,t?x.cuspideL:x.cuspideV],[`fossa`,x.fossa]],i=new Float32Array(Y),a=new Float32Array(Y*3);for(let[e,t]of r){if(!(t>=0))continue;let n=W[t*3],r=W[t*3+1],o=W[t*3+2],s=-1;for(let e=0;e<Y;e++)Re[e]&&Number.isFinite(Be[e])&&(X[e*3]-n)**2+(X[e*3+1]-r)**2+(X[e*3+2]-o)**2<=Gh**2&&(s<0||Be[e]<Be[s])&&(s=e);if(s<0){He.push({onde:e,falta:1/0,feito:0});continue}let c=Be[s];if(c<=Kh||c>qh){He.push({onde:e,falta:c,feito:0});continue}let l=X[s*3],u=X[s*3+1],d=X[s*3+2];k.dist(l,u,d,c+L+.05);let f=k.px-l,p=k.py-u,m=k.pz-d,h=Math.hypot(f,p,m);h<1e-6||(i[s]=Math.max(i[s],c),a[s*3]=f/h,a[s*3+1]=p/h,a[s*3+2]=m/h,He.push({onde:e,falta:c,feito:c}))}if(He.some(e=>e.feito>0)){let e=zp(i,X,Me,Re,a,Be);for(let t=0;t<Y;t++){if(!(e[t]>1e-5)||!Re[t]||!a[t*3]&&!a[t*3+1]&&!a[t*3+2])continue;let n=Math.min(e[t],Number.isFinite(Be[t])?Math.max(Be[t],i[t]):e[t]);X[t*3]+=a[t*3]*n,X[t*3+1]+=a[t*3+1]*n,X[t*3+2]+=a[t*3+2]*n,Fe[t]+=n,Pe[t]=T.distancia(X[t*3],X[t*3+1],X[t*3+2]),Be[t]=ze(X[t*3],X[t*3+1],X[t*3+2])}}}let Ue=tg()-Ve,We=0,Ge=null;for(let e=0;e<3;e++){let t=new Float32Array(Y),n=new Float32Array(Y*3),r=!1,i=0,a=new Uint8Array(Y);for(let e=0;e<Y;e++){if(!je[e]||De[e]||Pe[e]<.005||Ge&&!Ge[e])continue;let a=X[e*3],o=X[e*3+1],s=X[e*3+2];if(!he(a,o,s,c+d+.05,!0))continue;n[e*3]=pe.nx,n[e*3+1]=pe.ny,n[e*3+2]=pe.nz;let l=Ie(Pe[e])-pe.d;l>0&&(t[e]=l+1e-5,r=!0,l>i&&(i=l))}if(!r)break;let o=t;if(e===0&&(o=de?zp(t,X,Me,Re,n,Be):Rp(t,X,Me,Re,Mp,n,Be)),de&&e===0){for(let e=0;e<Y;e++)o[e]>0&&!n[e*3]&&!n[e*3+1]&&!n[e*3+2]&&(n[e*3]=Ne[e*3],n[e*3+1]=Ne[e*3+1],n[e*3+2]=Ne[e*3+2]);for(let e=0;e<3;e++){let e=Float32Array.from(n);for(let t=0;t<Y;t++){if(o[t]<=0)continue;let r=n[t*3]*2,i=n[t*3+1]*2,a=n[t*3+2]*2;for(let e=Me.off[t];e<Me.off[t+1];e++){let t=Me.nb[e];o[t]>0&&(r+=n[t*3],i+=n[t*3+1],a+=n[t*3+2])}let s=Math.hypot(r,i,a);s>1e-6&&(e[t*3]=r/s,e[t*3+1]=i/s,e[t*3+2]=a/s)}n.set(e)}}for(let e=0;e<Y;e++){if(o[e]<=0||Pe[e]<.005)continue;let t=Math.min(o[e],2);t<=1e-5||(!n[e*3]&&!n[e*3+1]&&!n[e*3+2]&&(n[e*3]=Ne[e*3],n[e*3+1]=Ne[e*3+1],n[e*3+2]=Ne[e*3+2]),Fe[e]||We++,Fe[e]+=t,a[e]=1,X[e*3]+=n[e*3]*t,X[e*3+1]+=n[e*3+1]*t,X[e*3+2]+=n[e*3+2]*t,Pe[e]=T.distancia(X[e*3],X[e*3+1],X[e*3+2]))}Ge=a}let Ke=[];for(let e=0;e+2<ye.length;e+=3)Math.min(Pe[ye[e]],Pe[ye[e+1]],Pe[ye[e+2]])<.8&&Ke.push(e);let qe=new Uint8Array(Y),Je=new Float32Array(Y*3);for(let e=0;e<Y;e++)!je[e]||De[e]||Pe[e]>1.2||(qe[e]=1,he(X[e*3],X[e*3+1],X[e*3+2],.6)?(Je[e*3]=pe.nx,Je[e*3+1]=pe.ny,Je[e*3+2]=pe.nz):(Je[e*3]=Ne[e*3],Je[e*3+1]=Ne[e*3+1],Je[e*3+2]=Ne[e*3+2]));let Ye=Uint32Array.from(ye),Xe=(e,t,n,r)=>{let i=Math.max(Qf,Le(r)),a=C.completo.dist(e,t,n,i+.3);if(!Number.isFinite(a))return 1/0;let o=C.preparo.dist(C.completo.px,C.completo.py,C.completo.pz,.02);return Number.isFinite(o)&&Math.abs(o)<.002?a-i:r<.3&&a>-.03?a-Qf:1/0},Ze=Bf(X,Ye,Ke,qe,Je,(e,t,n,r,i)=>Xe(e,t,n,Pe[Ye[r]]*i[0]+Pe[Ye[r+1]]*i[1]+Pe[Ye[r+2]]*i[2]),{rodadas:40,passoMax:.05,limite:.3});if(Ze.vertices)for(let e=0;e<Y;e++)qe[e]&&(Pe[e]=T.distancia(X[e*3],X[e*3+1],X[e*3+2]));let Qe=(e,t,n)=>{let r=T.distancia(e,t,n);return r>Th&&he(e,t,n,c+d+.05,!0)&&pe.d<Le(r)+1e-4?!1:!(k&&ze(e,t,n)<5e-4)};if(g>0){let e=[];for(let t=0;t<Y;t++)je[t]&&!De[t]&&we[t]<1&&Pe[t]>=.002&&e.push(t);Ap({pos:X,ref:Ae,adj:Me,vertices:e,iteracoes:g,aceita:(e,t,n,r)=>Qe(t,n,r)});for(let t of e)Pe[t]=T.distancia(X[t*3],X[t*3+1],X[t*3+2])}let $e=tg(),et=T.comprimento,tt=[],nt=Lf(Ee,et),rt=Lf(E.u,et);Se.forEach((e,t)=>tt.push({u:nt[t],lado:0,i:t})),E.laco.forEach((e,t)=>tt.push({u:rt[t],lado:1,i:t}));for(let e=0;e<T.n;e++)tt.push({u:T.acc[e],lado:2,i:e});tt.sort((e,t)=>e.u-t.u);let it=[],at=Array(Se.length),ot=Array(E.laco.length);for(let e of tt)(!it.length||e.u-it[it.length-1]>Mh)&&it.push(e.u),e.lado===0?at[e.i]=it.length-1:e.lado===1&&(ot[e.i]=it.length-1);if(it.length>3&&it[0]+et-it[it.length-1]<Mh){let e=it.length-1;it.pop();for(let t=0;t<at.length;t++)at[t]===e&&(at[t]=0);for(let t=0;t<ot.length;t++)ot[t]===e&&(ot[t]=0)}let st=it.length;if(st<12)return`O bordo da peça não pôde ser formado sobre a linha de margem.`;let ct=new Int32Array(E.positions.length/3).fill(-1),lt=new Uint8Array(E.positions.length/3);for(let e of E.laco)lt[e]=1;let ut=new Uint8Array(E.positions.length/3);for(let e=0;e<E.index.length;e++)ut[E.index[e]]=1;let dt=[];for(let e=0;e<ct.length;e++)ut[e]&&!lt[e]&&(ct[e]=dt.length/3,dt.push(E.positions[e*3],E.positions[e*3+1],E.positions[e*3+2]));let ft=dt.length/3,pt=[0,0,0];for(let e=0;e<st;e++)T.ponto(it[e],pt),dt.push(pt[0],pt[1],pt[2]);let mt=Array.from({length:st},(e,t)=>ft+t),ht=new Int32Array(Y).fill(-1),gt=[],_t=[],vt=[],yt=[],bt=[];for(let e=0;e<Y;e++)if(je[e]&&!De[e]){ht[e]=dt.length/3,dt.push(X[e*3],X[e*3+1],X[e*3+2]),gt.push(J.origem[e]<x.nOriginal?J.origem[e]:-1),vt.push(we[e]);for(let t=0;t<3;t++)yt.push(Ce[e*3+t]),bt.push(Ae[e*3+t]);let t=Math.atan2(X[e*3+2],X[e*3]),n=ug(T.altura,t);_t.push((X[e*3+1]-n)/Math.max(.3,ug(ue.eq,t)-n))}let xt=Array(E.index.length);for(let e=0;e+2<E.index.length;e+=3)xt[e]=E.index[e],xt[e+1]=E.index[e+2],xt[e+2]=E.index[e+1];let St=E.laco.slice().reverse(),Ct=ot.slice().reverse(),wt=e=>e>=ft&&e<ft+st,Tt=Vf(dt,If(xt,St,Ct,mt,e=>ct[e]),wt),Et=Vf(dt,If(ye,Se,at,mt,e=>ht[e]),wt),Dt=Hf(Tt.index),Ot=Hf(Et.index),kt=Dt.index,At=Ot.index;Dt.removidos+Ot.removidos&&o.push(`${Dt.removidos+Ot.removidos} triângulo(s) de área nula junto ao anel removido(s) (margem na borda do teto).`);let jt=ft+st,Z=Float32Array.from(dt),Mt=Z.length/3,Nt=new Uint8Array(Mt),Pt=new Float32Array(Mt*3);for(let e=0;e<Y;e++)if(ht[e]>=0&&qe[e]){let t=ht[e];Nt[t]=1,Pt[t*3]=Je[e*3],Pt[t*3+1]=Je[e*3+1],Pt[t*3+2]=Je[e*3+2]}let Ft=[],It=Uint32Array.from(At);for(let e=0;e+2<It.length;e+=3)Math.min(It[e],It[e+1],It[e+2])<jt&&Ft.push(e);let Lt=(e,t,n)=>Xe(e,t,n,T.distancia(e,t,n));Bf(Z,It,Ft,Nt,Pt,Lt,{rodadas:30,passoMax:.02,limite:.15});let Rt=Float32Array.from(Z),zt=new Float32Array(Mt).fill(9);for(let e=0;e<Y;e++)if(ht[e]>=0){let t=ht[e];for(let n=0;n<3;n++)Rt[t*3+n]=Ae[e*3+n];zt[t]=we[e]}let Bt=g>0?jf(It,Mt):null;if(Bt){let e=[];for(let t=jt;t<Mt;t++)zt[t]<1&&e.push(t);let t=(e,t,n,r)=>Qe(t,n,r);Ap({pos:Z,ref:Rt,adj:Bt,vertices:e,iteracoes:g,aceita:t}),jp({pos:Z,ref:Rt,adj:Bt,vertices:e,tris:It,rodadas:4,aceita:t})}let Vt=new Uint8Array(Mt);for(let e=ft;e<jt;e++)Vt[e]=1;for(let e=0;e<Y;e++)ht[e]>=0&&(qe[e]||Fe[e]>0)&&(Vt[ht[e]]=1);let Ht=T.yMax+Ih,Ut=(e,t,n)=>Z[e*3+1]<Ht||Z[t*3+1]<Ht||Z[n*3+1]<Ht,Wt=[],Gt=[],Kt=[];for(let e=0;e+2<kt.length;e+=3)Ut(kt[e],kt[e+1],kt[e+2])&&Wt.push(kt[e],kt[e+1],kt[e+2]);for(let e=0;e+2<It.length;e+=3){let t=It[e],n=It[e+1],r=It[e+2],i=Vt[t]||Vt[n]||Vt[r];(i||Ut(t,n,r))&&Gt.push(t,n,r),i&&Kt.push(t,n,r)}let qt=Uint32Array.from(Gt),Jt=new Float32Array(Mt*3),Yt=new Float32Array(Mt*3);for(let e=ft;e<Mt;e++){let t=Z[e*3]-T.cx,n=Z[e*3+2]-T.cz,r=Math.hypot(t,n)||1;Jt[e*3]=t/r,Jt[e*3+2]=n/r,Yt[e*3]=t/r/Math.SQRT2,Yt[e*3+1]=1/Math.SQRT2,Yt[e*3+2]=n/r/Math.SQRT2}let Xt=[];for(let e=0;e+2<At.length;e+=3)(Nt[At[e]]||Nt[At[e+1]]||Nt[At[e+2]])&&Xt.push(At[e],At[e+1],At[e+2]);let Zt=new up(Z,Wt,Xt),Qt=new up(Z,Kt,qt,!0),$t=()=>dp(Z,Wt,At,Nt,Pt,{outras:[Jt,Yt],limite:.2,detector:Zt}),en=[],tn=()=>(en.length=0,Qt.contar(en)),nn=$t(),rn=0,an=new Uint8Array(Mt),on=null,sn=null,cn=null,ln=null,un=null,dn=0,fn=0,pn=e=>{let t=tg();hn(e),dn+=tg()-t},mn=new Float32Array(Mt*3);for(let e=ft;e<Mt;e++)mn[e*3+1]=1;let hn=e=>{if(e||(nn=$t()),rn=tn(),!rn&&!nn.restantes)return;(!on||!sn||!cn)&&(on=jf(qt,Mt),sn=Uint8Array.from(Nt),cn=Float32Array.from(Pt));let t=on,n=sn,r=cn,i=Af(Z,It);for(let e=jt;e<Mt;e++)Nt[e]||(n[e]=1,he(Z[e*3],Z[e*3+1],Z[e*3+2],1)?(r[e*3]=pe.nx,r[e*3+1]=pe.ny,r[e*3+2]=pe.nz):(r[e*3]=i[e*3],r[e*3+1]=i[e*3+1],r[e*3+2]=i[e*3+2]));if(!ln){ln=Uint8Array.from(n),un=new Float32Array(Mt*3);let e=[0,0,0],t={u:0,d:0,x:0,y:0,z:0,seg:0},r=new Uint8Array(Mt);for(let e=ft;e<jt;e++)r[e]=1,ln[e]=1,an[e]=1;for(let e=0;e<Wt.length;e++){let n=Wt[e];n>=ft||ln[n]||r[n]||T.proximo(Z[n*3],Z[n*3+1],Z[n*3+2],t)}for(let n=0;n<Mt;n++)ln[n]&&(T.proximo(Z[n*3],Z[n*3+1],Z[n*3+2],t),T.tangente(t.seg,e),un[n*3]=e[0],un[n*3+1]=e[1],un[n*3+2]=e[2])}let a=(e,t)=>{if(e>=jt)return!0;if(e>=ft){let e=C.completo.dist(t[0],t[1],t[2],.05);return!Number.isFinite(e)||e>=-3e-4}let n=T.distancia(t[0],t[1],t[2]),r=tp(c,l,n),i=C.completo.dist(t[0],t[1],t[2],r+.3);if(!Number.isFinite(i))return!1;let a=t[0]-C.completo.px,o=t[1]-C.completo.py,s=t[2]-C.completo.pz,u=Math.hypot(a,o,s);if(u<1e-6)return!1;let d=(i>=0?1:-1)/u;a*=d,o*=d,s*=d;let f=r-i;t[0]+=a*f,t[1]+=o*f,t[2]+=s*f;let p=C.completo.dist(t[0],t[1],t[2],r+.3);return Number.isFinite(p)&&p>=r-.002},o=()=>{let e=[];nn.restantes&&Zt.contar(e);for(let t=0;t<3&&(nn.restantes||rn);t++){let t=[];for(let n of e)t.push(n);for(let e of en)t.push(e);if(!Sp(Z,Wt,qt,ln,t,[r,Jt,Yt,mn,un],{limite:.3,ajustar:a,anel:an}).movidos)break;e=[],nn={...nn,restantes:Zt.contar(e)},rn=tn()}};nn.restantes+rn<=160&&o();let s=0;for(let e=0;e<8&&rn;e++){let i=new Set;for(let e of en)n[e]&&i.add(e);for(let r=0;r<=Math.min(e,3);r++){let e=new Set(i);for(let r of i)for(let i=t.off[r];i<t.off[r+1];i++)n[t.nb[i]]&&e.add(t.nb[i]);i=e}for(let n=0;n<2+3*e;n++){let e=new Map;for(let n of i){let r=0,i=0,a=0,o=t.off[n+1]-t.off[n];for(let e=t.off[n];e<t.off[n+1];e++){let n=t.nb[e];r+=Z[n*3],i+=Z[n*3+1],a+=Z[n*3+2]}e.set(n,[Z[n*3]+(r/o-Z[n*3])*.5,Z[n*3+1]+(i/o-Z[n*3+1])*.5,Z[n*3+2]+(a/o-Z[n*3+2])*.5])}for(let[t,n]of e)Z[t*3]=n[0],Z[t*3+1]=n[1],Z[t*3+2]=n[2]}let a=[];for(let e=0;e+2<It.length;e+=3)(i.has(It[e])||i.has(It[e+1])||i.has(It[e+2]))&&a.push(e);Bf(Z,It,a,n,r,Lt,{rodadas:30,passoMax:.01,limite:.1}),nn=$t();let o=rn;if(rn=tn(),s=rn<o?0:s+1,s>=2)break}(nn.restantes||rn)&&nn.restantes+rn<=160&&o()};pn(!0);let gn=jf(It,Mt),_n=new Uint8Array(Mt);for(let e=jt;e<Mt;e++)_n[e]=1;let vn=new Float32Array(Mt).fill(1/0),yn=new Float32Array(Mt);if(k)for(let e=jt;e<Mt;e++)vn[e]=ze(Z[e*3],Z[e*3+1],Z[e*3+2]);let bn={A:C,margem:T,cim:c,rampa:l,piso:d,profundo:me},xn=Xp(bn),Sn=e=>{let t=tg(),n=Wp({pos:Z,tris:It,movel:_n,adj:gn,medida:xn,teto:vn,acumulado:yn,limite:me?3:.4,suave:de,faces:e?.faces??null,vertices:e?.vertices??null});return fn+=tg()-t,n},Cn=Sn(null),$=Cn,wn=Up(It,Mt);for(let e=0;e<4&&Cn.vertices;e++){let e=Z.slice();pn(!1);let t=[],n=new Set;for(let r=jt;r<Mt;r++)if(Z[r*3]!==e[r*3]||Z[r*3+1]!==e[r*3+1]||Z[r*3+2]!==e[r*3+2]){t.push(r);for(let e=wn.off[r];e<wn.off[r+1];e++)n.add(wn.lista[e])}Cn=Sn({faces:[...n],vertices:t})}let Tn=0,En=[];if(v){let e=Uint32Array.from([...kt,...At]),t=jf(It,Mt);for(let n=0;n<8;n++){let r=[];if(!op(Z,e,r))break;let i=new Set;for(let e of r)e>=jt&&i.add(e);if(!i.size)break;for(let e=0;e<Math.min(n,2);e++){let e=new Set(i);for(let n of i)for(let r=t.off[n];r<t.off[n+1];r++)t.nb[r]>=jt&&e.add(t.nb[r]);i=e}for(let e=0;e<1+n;e++){let e=new Map;for(let n of i){let r=0,i=0,a=0,o=0;for(let e=t.off[n];e<t.off[n+1];e++){let n=t.nb[e];r+=Z[n*3],i+=Z[n*3+1],a+=Z[n*3+2],o++}o&&e.set(n,[(Z[n*3]+r/o)/2,(Z[n*3+1]+i/o)/2,(Z[n*3+2]+a/o)/2])}for(let[t,n]of e)Z[t*3]=n[0],Z[t*3+1]=n[1],Z[t*3+2]=n[2]}for(let e of i)En.push(e),Tn++}Tn&&o.push(`Leques dobrados num vértice alisados: ${Tn} vértice(s) (o piso é refeito neles na conferência final).`)}let Dn,On=null,kn,An=[],jn=new Map,Mn=tg();if(v){Dn=Z.slice();let e=new Float32Array(Mt),t=C.vizinhos,n=new Float32Array(Mt).fill(1/0),r=new Float32Array(Mt*3),i=of(H,(x.x0+x.x1)/2,0,0)[0],a=.5*H.s*H.ax*x.md;for(let o=jt;o<Mt;o++){if(zt[o]<1)continue;let s=Z[o*3],l=Z[o*3+1],u=Z[o*3+2],p=$h((T.distancia(s,l,u)-Hh)/Uh);if(p>0&&k){let e=k.dist(s,l,u,L+Wh+.05);Number.isFinite(e)&&(p*=$h((e-L)/Wh))}if(p>0&&t&&Math.abs(s-i)>.3*a)for(let e of[1,-1]){if((s-i)*e<=0)continue;let n=yf(t,s,l,u,e,C.yProximal,f+Wh+.05,bf);Number.isFinite(n)&&(p*=$h((n-f)/Wh))}e[o]=p,p>0&&he(s,l,u,c+d+.08+.02,!0)&&(n[o]=pe.d-Ie(T.distancia(s,l,u)),r[o*3]=pe.nx,r[o*3+1]=pe.ny,r[o*3+2]=pe.nz)}let s=Uint32Array.from([...kt,...At]),l=eh({pos:Z,tris:It,peso:e,todos:s,folgaPiso:n,dirPiso:r}),u=th(Z,Dn,It,jt);for(let e=0;e<3;e++){let e=[];if(!op(Z,s,e))break;let t=0;for(let n of new Set(e))if(n>=jt&&(Z[n*3]!==Dn[n*3]||Z[n*3+1]!==Dn[n*3+1]||Z[n*3+2]!==Dn[n*3+2])){for(let e=0;e<3;e++)Z[n*3+e]=Dn[n*3+e];t++}if(u+=t,!t)break}u&&o.push(`Acabamento: ${u} vértice(s) devolvido(s) (pela metade ou inteiros) porque a suavização cruzava a malha.`);for(let e=jt;e<Mt;e++){let t=Z[e*3]-Dn[e*3],n=Z[e*3+1]-Dn[e*3+1],r=Z[e*3+2]-Dn[e*3+2];(t||n||r)&&(An.push(e),jn.set(e,[t,n,r]))}kn=new Float32Array(Z.length);for(let[e,[t,n,r]]of jn)kn[e*3]=t,kn[e*3+1]=n,kn[e*3+2]=r;On={vertices:l.vertices,voltas:l.voltas,aresta:l.aresta,desvioMax:l.desvioMax,desvioMedio:l.desvioMedio,volumeAntes:l.volumeAntes,volumeDepois:l.volumeDepois},o.push(`Acabamento final: ${l.vertices} vértice(s) suavizado(s) em ${l.voltas} volta(s) (aresta ${l.aresta.toFixed(3)} mm), desvio até ${l.desvioMax.toFixed(3)} mm (médio ${l.desvioMedio.toFixed(3)}), volume ${l.volumeAntes.toFixed(2)} → ${l.volumeDepois.toFixed(2)} mm³.`)}let Nn=tg()-Mn,Pn=lm(bn),Fn=Pn(Z,Uint32Array.from([...kt,...At]),jt,{revisar:[...An,...En]});if((Cn.vertices||Fn.antagonista.pontos||On?.vertices)&&(nn={...nn,restantes:Zt.contar()},rn=tn()),(Fn.antagonista.pontos||Fn.restam)&&o.push(`Conferência final: ${Fn.antagonista.pontos} ponto(s) da externa desceram por região para sair do antagonista (até ${Fn.antagonista.max.toFixed(3)} mm, ${Fn.passadas} passada(s)); piso refeito em ${Fn.piso.pontos}; autointerseções na região ${Fn.autointersecoes.antes} → ${Fn.autointersecoes.depois}; ${Fn.restam} violação(ões) no fim; folga final ${Fn.folga.toFixed(3)} mm.`),Fn.restam?s.push(`A coroa ainda toca o antagonista em ${Fn.restam} ponto(s) (até ${ng(Math.max(0,-Fn.folga))} mm): o espaço oclusal não comporta ${ng(d)} mm de espessura sem encostar.`):Fn.antagonista.max>.02&&s.push(`A face oclusal foi rebaixada em ${Fn.antagonista.pontos} ponto(s) (até ${ng(Fn.antagonista.max)} mm) para não entrar no antagonista.`),ge.motivo&&(ge.motivo===Nh&&!(Fn.folga<=.03&&!Fn.restam)&&(ge.motivo=Fn.restam?`encosta no antagonista e ainda o toca`:`o antagonista limita a subida`),s.push(`Altura: pedido ${(e=>`${e>0?`+`:`−`}${ng(Math.abs(e))}`)(ge.pedida)} mm; ${Math.abs(ge.feita)<.01?`a coroa ficou onde estava`:`a coroa ${ge.feita>0?`subiu`:`desceu`} ${ng(Math.abs(ge.feita))} mm`} (${ge.motivo}).`),o.push(`Ajuste de altura limitado: pedido ${ng(ge.pedida)} mm, feito ${ng(ge.feita)} mm (${ge.motivo}).`)),Zt.liberar(),Qt.liberar(),o.push(`Piso de espessura na peça pronta (${It.length/3} tri. externa, ${kt.length/3} interna, anel ${st}): ${$.amostras} amostras, ${C.preparo.consultas} consultas ao preparo; ${$.vertices} vértice(s) levantado(s) até ${ng($.deslocamentoMax)} mm na primeira conferência; última conferência: ${Cn.vertices} vértice(s), falta ${Cn.faltaFinal.toFixed(4)} em ${Cn.rodadas} rodada(s); ${nn.restantes} par(es) externa × intradorso e ${rn} dobra(s) da externa no fim.`),nn.restantes+rn>Lh)return`A coroa por encaixe ficou com ${nn.restantes+rn} pares de triângulos cruzados (a margem deixa pouco dente acima dela).`;(nn.restantes||rn)&&(o.push(`${nn.restantes+rn} par(es) de triângulos ainda se cruzam junto à margem (externa × intradorso ou dobras da externa).`),s.push(`${nn.restantes+rn} par(es) de triângulos da malha ainda se cruzam junto à margem.`));let In=Uint32Array.from([...kt,...At]),Ln=Ff(Z,In);if(Ln<0){for(let e=0;e+2<In.length;e+=3){let t=In[e+1];In[e+1]=In[e+2],In[e+2]=t}Ln=-Ln}let Rn=Bd(In),zn=Vd(In);if(Rn)return`A coroa por encaixe ficou com ${Rn} aresta(s) aberta(s) (a margem deixa pouco dente acima dela).`;let Bn=tg(),Vn=Z.length/3,Hn=ft+st,Un=of(H,(x.x0+x.x1)/2,0,0)[0],Wn=.5*H.s*H.ax*x.md,Gn=(e,t,n,r)=>{let i=1/0;for(let a=0;a<2;a++)for(let o=Hn;o<Vn;o+=a?1:r){let r=Z[o*3],s=Z[o*3+1],c=Z[o*3+2];if(!e(o,r,s,c))continue;let l=t(r,s,c,a&&Number.isFinite(i)?Math.abs(i)+(i<0?.4:.002):n);l<i&&(i=l)}return i},Kn=C.vizinhos,qn=k?Gn((e,t,n)=>n>E.teto-.5&&(gt[e-Hn]<0||x.N[gt[e-Hn]*3+1]>0),(e,t,n,r)=>k.dist(e,t,n,r),L+1.2,7):1/0,Jn=Kn?Gn((e,t)=>t-Un>.2*Wn,(e,t,n,r)=>yf(Kn,e,t,n,1,C.yProximal,r,bf),1.2,5):1/0,Yn=Kn?Gn((e,t)=>Un-t>.2*Wn,(e,t,n,r)=>yf(Kn,e,t,n,-1,C.yProximal,r,bf),1.2,5):1/0,Xn=e.mesialSign>0,Zn=(e,t)=>t&&Number.isFinite(e)?e:null,Qn={oclusal:Zn(qn,!!k),mesial:Zn(Xn?Jn:Yn,Xn?B.temMais:B.temMenos),distal:Zn(Xn?Yn:Jn,Xn?B.temMenos:B.temMais),alvoOclusal:L,alvoProximal:f};k&&Qn.oclusal===null&&o.push(`O antagonista não alcança a peça: a folga oclusal não pôde ser medida.`),Qn.oclusal!==null&&Qn.oclusal<L-.03&&o.push(`Folga oclusal ${ng(Qn.oclusal)} mm, abaixo do alvo de ${ng(L)} mm (ajuste local de espessura na face oclusal).`);for(let[e,t]of[[`mesial`,Qn.mesial],[`distal`,Qn.distal]])t!==null&&Math.abs(t-f)>.05&&o.push(`Contato ${e} a ${ng(t)} mm (alvo ${ng(f)} mm)${i.reduzir&&i.reduzir<1?`: o dente foi reduzido a pedido`:``}.`);let $n=null;if(M&&k){let t=Rm(Z,It,null,k,L+.5),r=n(e.id)===`U`,i=[[`cúspide vestibular`,x.cuspideV],[r?`cúspide palatina`:`cúspide lingual`,x.cuspideL],[`fossa`,x.fossa]],a=new Map;for(let e=0;e<gt.length;e++)for(let[,t]of i)gt[e]===t&&a.set(t,[Z[(Hn+e)*3],Z[(Hn+e)*3+1],Z[(Hn+e)*3+2]]);let s=Um(Z,It,k).map(e=>{let t=`vertente`,n=Jh;for(let[r,o]of i){let i=a.get(o);if(!i)continue;let s=Math.hypot(e.centro[0]-i[0],e.centro[1]-i[1],e.centro[2]-i[2]);s<n&&(n=s,t=r)}return{onde:t,min:e.min,area:e.area}}),c=Math.max(0,...M.usados.map(e=>e.manchas));$n={origem:M.origem,alvo:L,areaRef005:M.area005,areaRef01:M.area01,manchasRef:c,dentes:M.dentes.map(e=>({fdi:e.fdi,papel:e.papel,min:e.min,area005:e.area005,area01:e.area01,manchas:e.manchas})),coroa:t,funcional:He,pontos:s},o.push(`Toque funcional pelo ${M.origem}: alvo ${L.toFixed(3)} mm (a referência toca em ${c} ponto(s), ${ng(M.area01)} mm² a menos de 0,1 mm); a coroa: ${s.map(e=>`${e.onde} ${e.min.toFixed(3)} mm`).join(`, `)||`nenhum ponto a menos de 0,1 mm`}${He.length?`; ${He.map(e=>`${e.onde}: ${Number.isFinite(e.falta)?`faltavam ${e.falta.toFixed(3)} mm`:`o antagonista está a mais de 1,3 mm`}${e.feito>0?`, subiu`:e.falta<=Kh?`, já tocava`:`, longe demais para subir (até ${ng(qh)} mm: regra 3)`}`).join(`; `)}`:``}.`)}let er=null;if(v){let t=[];for(let e=ft;e<Hn;e++)t.push([Z[e*3],Z[e*3+1],Z[e*3+2]]);let n=mm(Z,In.subarray(kt.length),null,[0,1,0],[0,0,1],[e.mesialSign,0,0],t),r=[];if(N){let e=V?i.reduzir:1,t={larguraMD:N.alvo.larguraMD*e,espessuraVL:N.alvo.espessuraVL*e,altura:N.alvo.altura,volume:N.alvo.volume*e*e};Math.abs(n.larguraMD-t.larguraMD)>Vh&&r.push(`largura ${ng(n.larguraMD)} mm (${B.temMais&&B.temMenos?`o espaço entre os vizinhos`:I.porqueMD||`o espaço do caso`})`),Math.abs(n.espessuraVL-t.espessuraVL)>Vh&&r.push(`espessura vestíbulo-lingual ${ng(n.espessuraVL)} mm (${I.porqueVL||`a forma do dente da biblioteca`})`),!k&&Math.abs(n.altura-t.altura)>Vh&&r.push(`altura ${ng(n.altura)} mm (a altura do caso)`);let a=N.origem===`vizinho`&&P.length?` (${P.map(e=>e.motivo).join(`; `)})`:``;r.length&&s.push(`Tamanho pelo ${N.origem===`homologo`?`homólogo`:`vizinho`} ${N.fdi}${a} (${ng(t.larguraMD)} × ${ng(t.espessuraVL)} mm): ${r.join(`; `)}.`),o.push(`Tamanho pelo ${N.origem===`homologo`?`homólogo`:`vizinho`} ${N.fdi}: alvo MD ${ng(t.larguraMD)}, VL ${ng(t.espessuraVL)}, altura ${ng(t.altura)} mm, volume ${t.volume.toFixed(0)} mm³; a coroa: ${ng(n.larguraMD)}, ${ng(n.espessuraVL)}, ${ng(n.altura)} mm, ${n.volume.toFixed(0)} mm³.`)}!N&&P.length&&o.push(`Tamanho: nenhum dente do scan serviu de referência (${P.map(e=>e.motivo).join(`; `)}); o tamanho é o do dente da biblioteca.`),er={referencia:N?{fdi:N.fdi,origem:N.origem,alvo:N.alvo,proporcao:N.proporcao}:null,recusados:P,coroa:n,fatorVLPedido:I.fatorVLPedido,fatorVL:I.fatorVL,larguraLivre:I.larguraLivre,motivo:r.join(`; `)}}(!B.temMais||!B.temMenos)&&o.push(`Sem dente vizinho ao alcance do lado ${[B.temMais?``:Xn?`mesial`:`distal`,B.temMenos?``:Xn?`distal`:`mesial`].filter(Boolean).join(` e `)}: a largura veio do espaço medido no caso.`);let tr=vd.map(([e,t])=>({de:e,ate:t,min:1/0,exigida:0,amostras:0,dMin:NaN,onde:``,x:0,z:0})),nr=1/0,rr=null,ir=-1/0,ar=null,or=new Float32Array(Vn-Hn);for(let e=Hn;e<Vn;e++)or[e-Hn]=T.distancia(Z[e*3],Z[e*3+1],Z[e*3+2]);for(let t=0;t<2;t++){let n=2.5;if(t){n=c+u+.02;for(let e of tr)Number.isFinite(e.min)&&(n=Math.max(n,e.min+c+.002))}for(let r=Hn;r<Vn;r+=t?1:6){let i=or[r-Hn];if(i<pd.from)continue;let a=Z[r*3],o=Z[r*3+1],s=Z[r*3+2];if(!he(a,o,s,t?n:Fh,!t))continue;let l=pe.d-c,d=hd(u,i),f=tr.find(e=>i>=e.de&&i<e.ate);f&&(t&&f.amostras++,l<f.min&&(f.min=l,f.exigida=d,f.dMin=i,f.x=a,f.z=s)),i>=pd.to&&l<nr&&(nr=l,rr=[a,o,s]),d-l>ir&&(ir=d-l,ar={x:a,y:o,z:s,dMargem:i,espessura:l,exigida:d,onde:sg(a,s,H,x,e.mesialSign)})}}let sr={min:Number.isFinite(nr)?nr:null,em:rr,onde:rr?sg(rr[0],rr[2],H,x,e.mesialSign):``,deficit:ir,deficitEm:ar,pedida:u,faixas:tr.map(({x:t,z:n,...r})=>({...r,onde:Number.isFinite(r.min)?sg(t,n,H,x,e.mesialSign):``}))},cr=null;ar&&ir>.02&&(cr={esp:ar.espessura,onde:ar.onde},o.push(`O espaço não comporta o dente com ${ng(u)} mm de espessura: ${ng(ar.espessura)} mm em ${ar.onde} (a ${ng(ar.dMargem)} mm da margem; faltam ${ng(ir)} mm). A espessura pedida só é conferida: a forma garante o piso de ${ng(d)} mm.`));let lr=null;if(k){let e=C.preparo.geometry.getAttribute(`position`).array,t=1/0;for(let n=0;n<e.length;n+=3)if(e[n+1]>C.topoDoPreparo-.4){let r=k.dist(e[n],e[n+1],e[n+2],6);r<t&&(t=r)}Number.isFinite(t)&&(lr=t)}let ur=0,dr=0,fr=0,pr=0,mr=0,hr=1/0,gr=0;{let e=0;for(let t=0;t<Y;t++){if(ht[t]<0)continue;let n=ht[t],r=jn.get(n),i=r?r[0]:0,a=r?r[1]:0,o=r?r[2]:0,s=Math.hypot(Z[n*3]-i-Ce[t*3],Z[n*3+1]-a-Ce[t*3+1],Z[n*3+2]-o-Ce[t*3+2]);we[t]<1?(fr++,dr+=s,s>ur&&(ur=s)):s>1e-5&&(mr++,s>pr&&(pr=s)),e++}}for(let e=0;e<720;e++)ue.h[e]<hr&&(hr=ue.h[e]),ue.h[e]>gr&&(gr=ue.h[e]);let _r=0;for(let e=0;e<st;e++){let t=(ft+e)*3,n=(ft+(e+1)%st)*3;_r=Math.max(_r,T.distancia(Z[t],Z[t+1],Z[t+2]),T.distancia((Z[t]+Z[n])/2,(Z[t+1]+Z[n+1])/2,(Z[t+2]+Z[n+2])/2))}let vr=pr>m+.005;vr?o.push(`O espaço oclusal não comporta este dente intacto: para manter ${ng(d)} mm de espessura a anatomia foi afastada do preparo até ${ng(pr)} mm em ${mr} vértices, além do ajuste local permitido (${ng(m)} mm).`):pr>1e-4&&o.push(`Ajuste local fora da faixa cervical (espessura mínima): até ${ng(pr)} mm em ${mr} vértices.`),N&&Math.abs(G-1)>.001?o.push(`Espessura vestíbulo-lingual aumentada ${((G-1)*100).toFixed(1)} % pelo tamanho do ${oe.motivo}.`):Math.abs(G-1)>.001&&o.push(`Largura vestíbulo-lingual ${G>1?`esticada`:`encolhida`} ${(Math.abs(G-1)*100).toFixed(1)} % para acompanhar o contorno dos vizinhos (vestibular faltavam ${ng(oe.faltaVestibular)} mm, lingual ${ng(oe.faltaLingual)} mm; ${oe.motivo}; limite ± ${(p*100).toFixed(0)} %).`),(Math.abs(H.ay-1)>.001||Math.abs(H.az-G)>.001)&&o.push(`Escala por eixo aplicada pela espessura mínima: altura ${(H.ay*100).toFixed(1)} %${Math.abs(H.az-G)>.001?`, vestíbulo-lingual ${(H.az*100).toFixed(1)} %`:``} (limite ± ${(p*100).toFixed(0)} %).`);let yr=e=>`${Math.round(e*100)} %`;vr&&s.unshift(`Espaço oclusal pequeno${lr===null?``:` (${ng(lr)} mm entre o preparo e o antagonista)`}: a anatomia da face oclusal foi afastada do preparo até ${ng(pr)} mm para manter ${ng(d)} mm de espessura.`),cr&&s.unshift(og(cr.esp,cr.onde,u)),(Math.abs(H.ay-1)>.02||Math.abs(H.az-1)>.02)&&s.push(`Escala aplicada ao dente: altura ${yr(H.ay)}, largura vestíbulo-lingual ${yr(H.az)}.`);{let e=[];Qn.oclusal===null&&k?e.push(`oclusal não medido (o antagonista não alcança a peça)`):Qn.oclusal!==null&&Qn.oclusal<L-.03&&e.push(`oclusal ${ng(Qn.oclusal)} mm (alvo ${ng(L)})`);for(let[t,n]of[[`mesial`,Qn.mesial],[`distal`,Qn.distal]])n===null||Math.abs(n-f)<=.05||e.push(`${t} ${ng(n)} mm (alvo ${ng(f)})`);e.length&&s.push(`Contato: ${e.join(`; `)}.`)}let br=tg(),xr={escala:H.s,eixos:[H.ax,H.ay,H.az],giro:H.giro*180/Math.PI,translacao:[H.tx,H.ty,H.tz],rodadas:B.rodadas,vl:{criterio:B.vl,descentro:B.descentro,...oe},contatos:Qn,espessura:sr,cervical:{max:ur,media:fr?dr/fr:0,faixaMin:hr,faixaMax:gr,desvioRadialMax:ue.desvioMax,vertices:fr,acimaDoEquador:ue.acimaDoEquador},ajusteLocal:{max:pr,vertices:mr},altura:ge,borda:{max:_r,vertices:st,prenderExterna:Oe,prenderIntradorso:E.prenderMax},margem:{pontos:T.n,inseridos:w.inseridos,cordaAntes:w.piorAntes,cordaDepois:w.piorDepois},faces:{intradorso:E.faces,externa:{empurraoMax:Ze.empurraoMax,vertices:Ze.vertices,rodadas:Ze.rodadas,piorFolga:Ze.piorFolga}},cruzamentos:nn,desdobro:{intradorso:{invertidos:Tt.invertidos,grupos:Tt.grupos,falhas:Tt.falhas},externa:{invertidos:Et.invertidos,grupos:Et.grupos,falhas:Et.falhas}},malha:{triangulos:In.length/3,vertices:Vn,abertas:Rn,orientada:zn,volume:Ln},prolongado:ue.prolongado,tempo:{total:br-a,preparar:S-a,intradorso:D-S,ajuste:q-D,cervical:ke-q,espessura:$e-ke,costura:Bn-$e,medidas:br-Bn,reparo:dn,piso:fn,dentes:F,funcional:Ue,polimento:Nn},toque:$n,tamanho:er,polimento:On,avisos:s,diagnostico:o},Sr={positions:Z,index:In,outerStart:ft,ringCount:st,origem:Int32Array.from(gt),pose:H,margem:T,tParede:Float32Array.from(_t),tFaixa:Float32Array.from(vt),etapas:{pose:Float32Array.from(yt),faixa:Float32Array.from(bt),...Dn?{semPolimento:Dn}:{},...kn?{polimento:kn}:{}},relatorio:xr,conferir:Pn,dente:qf(x)};if(N&&(I.fatorVL>1.001||i.homologoVLMax!==void 0)){let n=[Qn.mesial,Qn.distal].filter(e=>e!==null&&e<f-.05),a=Tn?op(Z,In):0,o=!n.length&&!a?xh(Sr):null,s=!!o&&(o.aba.pregas>Yh||o.aba.dobras>Xh);if(n.length||a||s){let s={porque:a?`a malha se cruzava em ${a} par(es)`:n.length?`a coroa entrava ${ng(-Math.min(...n))} mm no dente vizinho`:`a faixa cervical enrugava (${o.aba.pregas} prega(s), ${o.aba.dobras} dobra(s))`,invasao:n.length?-Math.min(...n):0,cortes:a,pregas:o?.aba.pregas??0,dobras:o?.aba.dobras??0};if(i.homologoVLMax!==void 0)return Sr.alargamento=s,Sr;let c=I.fatorVL,l=e=>`+${((e-1)*100).toFixed(1)} %`,u=s,d=null;for(let n of c-1>.02?[1+(c-1)/2,1]:[1]){let a=dg(e,t,r,{...i,homologoVLMax:n});if(typeof a==`string`)break;let o=a.alargamento;if(delete a.alargamento,!o)return a.relatorio.diagnostico.unshift(`Tamanho: com a espessura vestíbulo-lingual a ${l(c)} ${s.porque}; refeita com ${l(n)}.`),a;if(!Qh(u,o))break;u=o,d={r:a,proximo:n,pr:o}}if(d)return d.r.relatorio.diagnostico.unshift(`Tamanho: com a espessura vestíbulo-lingual a ${l(c)} ${s.porque}; refeita com ${l(d.proximo)} (ainda ${d.pr.porque}).`),d.r;Sr.relatorio.diagnostico.unshift(`Tamanho: ${s.porque} com ou sem a espessura vestíbulo-lingual pelo homólogo (${l(c)}); o alargamento fica.`)}}return Sr}var fg=.02;function pg(e,t){if(Math.abs(t-e.pedida)<1e-9||!e.faixas.every(e=>`dMin`in e))return{deficit:e.deficitEm?e.deficit:-1/0,em:e.deficitEm,faixas:e.faixas};let n=-1/0,r=null,i=e.faixas.map(e=>{let i=Number.isFinite(e.dMin)?hd(t,e.dMin):0;return Number.isFinite(e.min)&&i-e.min>n&&(n=i-e.min,r={x:NaN,y:NaN,z:NaN,dMargem:e.dMin,espessura:e.min,exigida:i,onde:e.onde}),{...e,exigida:i}});return{deficit:n,em:r,faixas:i}}function mg(e,t){let n=pg(e,t);return n.em&&n.deficit>fg?og(n.em.espessura,n.em.onde,t):null}function hg(e,t=e.pedida){let n=pg(e,t),r=n.em;return{min:e.min,bands:n.faixas.map(e=>({from:e.de,to:e.ate,min:e.min,required:e.exigida,samples:e.amostras})),deficit:r?n.deficit:-1/0,at:r?{x:r.x,y:r.y,z:r.z,dMargin:r.dMargem,thick:r.espessura,required:r.exigida,where:r.onde}:null,samples:e.faixas.reduce((e,t)=>e+t.amostras,0)}}var gg=(e,t)=>{let n=Math.atan2(e[t*3+2],e[t*3]);return n<0?n+b:n};function _g(e,t){let n=e.length;if(n<=40)return e.slice();let r=new Float64Array(n),i=new Uint8Array(n),a=[];for(let i=0;i<n;i++)r[i]=gg(t,e[i]);for(let t=0;t<40;t++){let o=t/40*b,s=-1,c=1/0;for(let e=0;e<n;e++){if(i[e])continue;let t=Math.abs(r[e]-o);t>Math.PI&&(t=b-t),t<c&&(c=t,s=e)}i[s]=1,a.push(e[s])}for(let t=0;t<n;t++)i[t]||a.push(e[t]);return a}function vg(e,t){let n=e.positions.length/3,r=e.ringCount,i=e.outerStart+r,a=Array.from({length:14},()=>[]);for(let t=0;t<n-i;t++){let n=e.tParede[t];a[n>=1?13:Math.min(12,Math.max(1,Math.round(n*12)))].push(i+t)}let o=Array(14).fill(!1);for(let e=1;e<=12;e++)a[e].length<40&&(a[e+1]=a[e].concat(a[e+1]),a[e]=[],o[e]=!0);let s=[],c=[e.outerStart],l=Array.from({length:r},(t,n)=>e.outerStart+n);for(let t of _g(l,e.positions))s.push(t);let u=Array(14).fill(0);for(let t=1;t<=13;t++){u[t]=e.outerStart+s.length;for(let n of _g(a[t],e.positions))s.push(n)}for(let e=12;e>=1;e--)o[e]&&(u[e]=u[e+1]);for(let e=1;e<=12;e++)c.push(u[e]);let d=u[13],f=new Uint32Array(n);for(let t=0;t<e.outerStart;t++)f[t]=t;let p=new Float32Array(e.positions.length);p.set(e.positions.subarray(0,e.outerStart*3)),s.forEach((t,n)=>{let r=e.outerStart+n;f[t]=r,p[r*3]=e.positions[t*3],p[r*3+1]=e.positions[t*3+1],p[r*3+2]=e.positions[t*3+2]});let m=new Uint32Array(e.index.length);for(let t=0;t<m.length;t++)m[t]=f[e.index[t]];let h=new Uint32Array(n);for(let e=0;e<n;e++)h[f[e]]=e;let g=e.relatorio,_=g.contatos.oclusal,v={drop:0,contacts:[],interferenceBefore:0,interferenceAfter:0,meanGap:_??1/0,minGap:_??1/0,maxShift:g.ajusteLocal.max,meanShift:0,covered:t&&_!==null?1:0,tried:[],landmarks:[],liftedFraction:0,maxLift:g.ajusteLocal.max,warnings:g.avisos.slice()};return{positions:p,index:m,starts:[0,e.outerStart,...c.slice(1)],lowIndex:m,outerStart:e.outerStart,side:c,marginY:0,cut:0,capStart:d,capRings:[],occlusion:v,marginFactor:1,marginN:r,ringCount:r,autoAjuste:!0,encaixe:g,espessuraAuditoria:hg(g.espessura),bruto:e,ordem:h}}var yg=class extends Error{motivo;constructor(e){super(`Não foi possível montar a coroa com o dente inteiro da biblioteca neste caso (${e}).`),this.motivo=e,this.name=`EncaixeRecusado`}};function bg(e,t,n={}){let r=e.shape,i=e.crown;e.shape=t;let a=r=>{e.crown=i;try{let i;try{let a=Number.isFinite(r.largura)&&r.largura>0?r.largura/100:1,o=dg(e,t.tooth,r,{opp:n.opp??null,arcada:n.arcada??null,margem:n.margem??null,reduzir:a,altura:r.altura,alturaAntiga:r.versaoAltura!==2});if(typeof o!=`string`)return vg(o,!!n.opp);i=o}catch(e){i=e instanceof Error?e.message:String(e)}throw new yg(i)}finally{e.crown=a}};return e.crown=a,()=>{e.shape=r,e.crown=i}}function xg(e,t,n){let r={},i=Math.floor(e.length/3);if(n<i){let t=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let r=Math.max(0,n);r<i;r++)for(let n=0;n<3;n++){let i=e[r*3+n];i<t[n]&&(t[n]=i),i>a[n]&&(a[n]=i)}r.largura_md=a[0]-t[0],r.altura=a[1]-t[1],r.largura_vl=a[2]-t[2]}let a=0;for(let n=0;n+2<t.length;n+=3){let r=t[n]*3,i=t[n+1]*3,o=t[n+2]*3,s=e[r],c=e[r+1],l=e[r+2],u=e[i],d=e[i+1],f=e[i+2],p=e[o],m=e[o+1],h=e[o+2];a+=s*(d*h-f*m)-c*(u*h-f*p)+l*(u*m-d*p)}return t.length>=3&&(r.volume=Math.abs(a)/6),r}function Sg(e,t){let n=M(t),r=n==null?void 0:e?.find(e=>e.fdi===n&&e.confianca>=.5),i={};return r&&(Number.isFinite(r.larguraMD)&&r.larguraMD>0&&(i.homologo_largura_md=r.larguraMD),Number.isFinite(r.alturaCoroa)&&r.alturaCoroa>0&&(i.homologo_altura=r.alturaCoroa)),i}var Cg=1e-5,wg=e=>{let t=e;return!!t&&!!t.bruto&&!!t.ordem&&t.ordem.length===t.positions.length/3&&!!t.bruto.origem&&!!t.bruto.dente},Tg=`o dente da biblioteca mudou`,Eg=`a maior parte do que foi esculpido ficaria abaixo da linha de margem na peça nova`;function Dg(e,t){if(!wg(e))return`a peça esculpida veio de um caso salvo e não guarda de que ponto do dente cada vértice veio`;if(!wg(t))return`a peça nova não foi feita pelo encaixe do dente inteiro`;if(!Jf(e.bruto.dente,t.bruto.dente))return Tg;let n=e,r=n.bruto,i=r.outerStart+r.ringCount,a=n.positions,o=r.positions,s=new Map,c=0,l=0,u=0;for(let e=n.outerStart;e<a.length/3;e++){let t=n.ordem[e],u=a[e*3]-o[t*3],d=a[e*3+1]-o[t*3+1],f=a[e*3+2]-o[t*3+2],p=Math.hypot(u,d,f);if(p<=Cg)continue;let m=t>=i?r.origem[t-i]:-1;m>=0?s.set(m,[u,d,f]):(c++,l=Math.max(l,p))}if(!s.size&&!c)return{levados:[],perdidos:0,maiorPerdido:0,maiorLevado:0};let d=t,f=d.bruto,p=f.outerStart+f.ringCount,m=d.positions,h=[],g=new Set;for(let e=d.outerStart;e<m.length/3;e++){let t=d.ordem[e];if(t<p)continue;let n=f.origem[t-p],r=n>=0?s.get(n):void 0;r&&(h.push([e,r]),g.add(n))}if(s.size&&g.size<.5*s.size)return Eg;for(let[e,t]of s)g.has(e)||(c++,l=Math.max(l,Math.hypot(t[0],t[1],t[2])));let _=[];for(let[e,t]of h)m[e*3]+=t[0],m[e*3+1]+=t[1],m[e*3+2]+=t[2],_.push(e),u=Math.max(u,Math.hypot(t[0],t[1],t[2]));return{levados:_,perdidos:c,maiorPerdido:l,maiorLevado:u}}var Og=[`cimento`,`largura`,`contato`,`folga`,`rampaCimento`,`versaoCoroa`],kg={cimento:`o cimento`,largura:`a largura`,contato:`o contato oclusal`,folga:`a folga oclusal`,rampaCimento:`a rampa do cimento`,versaoCoroa:`a versão da coroa`},Ag=e=>e?.colecao?{colecao:e.colecao,variante:e.variante??`anatomico`}:{colecao:null},jg={crown:1.5,onlay:.6},Mg=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Ng=70,Pg=15e3,Fg=2e4,Ig=12e3,Lg=14,Rg=60,zg=.25,Bg=.8,Vg=.75,Hg=.8,Ug=.7,Wg=.25,Gg=.16,Kg=.26,qg=.05,Jg=2.5,Yg={thick:.3,overlap:.5},Xg=`Ainda não há dentes de biblioteca carregados; a peça é gerada assim que eles estiverem disponíveis.`,Zg=`O dente ainda não tem a linha de margem; a peça é gerada quando a margem estiver traçada.`,Qg=`Onlay ainda não disponível pela biblioteca de dentes: foi gerada uma coroa total sobre este preparo.`,$g=2.5,e_=6,t_=.004,n_={origin:.2,ring:.1},r_=`Leitura cancelada: o modelo foi trocado durante a importação.`,i_=e=>e.autoAjuste?40:Ru(e),a_=e=>e.kind===`crown`?`Coroa total`:`Onlay`;function o_(e,t){e.updateWorldMatrix(!0,!1);let n=t?new st().multiplyMatrices(t,e.matrixWorld):e.matrixWorld,r=e.geometry.getAttribute(`position`),i=e.geometry.getIndex(),a=i?i.count:r.count,o=new Float32Array(a*3),s=new Q;for(let e=0;e<a;e++)s.fromBufferAttribute(r,i?i.getX(e):e).applyMatrix4(n),o[e*3]=s.x,o[e*3+1]=s.y,o[e*3+2]=s.z;return o}var s_=class{root=new At;content=new At;overlay=new At;mats=Xc();prober=new Fl;markGeo=new It(Ug,16,12);measGeo=new It(Wg,12,8);dotGeo=new It(1,12,8);_mode=null;_active=null;layers=T();plan=new Set;teeth=new Map;up=new Map;scans={};scanGroup=null;scanBox=null;placements=new Map;markers=new Map;extras=new Map;margins=new Map;marking=null;suggesting=null;prepared=new WeakMap;archInfo=new WeakMap;found={};detecting={};lastSug=new Map;autoSrc=new Map;autoRefusals=new Map;autoRetry=new Map;autoAtual=new Map;autoFraco=new Set;genMargem=new Set;onDetected=null;diag=new Map;diagOn=!1;diagGeo=new It(1,8,6);diagMats=null;onMarginSuggested=null;genErrors=new Map;library=null;defaultCollection=null;requireLibrary=!0;crownBuilder=`encaixe`;shapeChoice=new Map;shapeCache=new Map;analyzed=new Map;shapeInstalled=new Map;inutil=new Map;marcasDaGeracao=new Map;onMarginChange=null;gums=[];prefs=new Map;fades=new Map;objectKeys=``;onObjectsChange=null;measurePts=[];stroke=null;sculpted=new WeakSet;epoch=0;scanSeq={sup:0,inf:0,mord:0};disposed=!1;constructor(){this.root.add(this.content,this.overlay)}get mode(){return this._mode}get active(){return this._active}reset(){this.epoch++,this.stroke=null,this.clearMeasure();for(let e of[...this.teeth.values(),...this.up.values()])this.dropCrown(e);let e=new Set;this.content.traverse(t=>{let n=t.geometry;n&&n!==this.markGeo&&n!==this.dotGeo&&n!==this.diagGeo&&e.add(n)}),e.forEach(kl),this.content.clear();let t=new Set;for(let e of this.up.values())e.rc&&t.add(e.rc);for(let e of this.margins.values())e.rc&&t.add(e.rc);for(let e of this.shapeInstalled.values())e();this.shapeInstalled.clear(),this.shapeChoice.clear(),t.forEach(e=>e.dispose()),this.margins.clear(),this.extras.clear(),this.marking=null,this.suggesting=null,this.genErrors.clear(),this.diag.clear(),this.teeth.clear(),this.up.clear(),this.placements.clear(),this.markers.clear();for(let e of Object.keys(this.scans))delete this.scans[e];this.gums=[],this.scanGroup=null,this.scanBox=null,this._active=null,this.plan.clear(),this.prefs.clear();for(let e of this.fades.values())e.dispose();this.fades.clear(),this.syncObjects()}clear(){this.reset(),this._mode=null}dispose(){if(!this.disposed){if(this.clear(),this.disposed=!0,this.markGeo.dispose(),this.measGeo.dispose(),this.dotGeo.dispose(),this.diagGeo.dispose(),this.diagMats)for(let e of Object.values(this.diagMats))e.dispose();this.diagMats=null,this.onMarginChange=null,this.onMarginSuggested=null,Zc(this.mats)}}loadSample(){this.reset(),this._mode=`sample`;for(let e of[`U`,`L`]){let t=lu(e);for(let n of t.teeth){let t=new Ct().setFromRotationMatrix(new st().makeBasis(new Q(...n.X),new Q(...n.Y),new Q(...n.Z))),r={id:n.id,arch:e,type:n.type,a:n.a,b:n.b,H:n.H,pos:new Q(...n.pos),quat:t,mesial:n.mesial,distal:n.distal,prep:null,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null};r.natural=this.addMesh(this.lathe(Ju(r)),this.mats.tooth,r),this.teeth.set(r.id,r)}let n=new vt(t.gumPath.map(e=>new Q(...e))),r=new Tt(n,200,su,18,!1),i=[];for(let e=4;e<=200;e+=4)for(let t=2;t<=18;t+=2){let n=19*(e-4)+(t-2),r=19*e+(t-2),a=19*e+t,o=19*(e-4)+t;i.push(n,r,o,r,a,o)}r.userData.lowIndex=new Uint32Array(i),Dl(r);let a=new Ue(r,this.mats.gum);a.userData.arch=e,a.userData.depthBias=$g,a.userData.lodScale=9,this.content.add(a),this.gums.push(a)}for(let e of Object.keys(uu)){let t=this.teeth.get(Number(e));t.prep=Ku(t,uu[Number(e)]),t.stump=this.addMesh(this.lathe(Yu(t,t.prep)),this.mats.stump,t),t.natural.visible=!1}this.root.updateMatrixWorld(!0),this.applyVis()}lathe(e){let t=Al(e);return t.userData.closed=!0,t}parentOf(e){return e.scan&&this.scanGroup?this.scanGroup:this.content}addMesh(e,t,n){let r=new Ue(e,t);return r.position.copy(n.pos),r.quaternion.copy(n.quat),r.userData.id=n.id,this.parentOf(n).add(r),r.updateWorldMatrix(!0,!1),r}dropMesh(e){e&&(e.removeFromParent(),kl(e.geometry))}dropCrown(e){this.stroke?.rec===e&&(this.stroke=null),e.lines&&=(e.lines.removeFromParent(),e.lines.geometry.dispose(),null),e.crown&&=(this.dropMesh(e.crown),e.crown.material.dispose(),null),e.data=null,e.params=null,e.undo=[],e.adj=null,e.thickness=null,e.notes=[],e.forma=null}async loadScan(e,t,n){if(this.disposed)throw Error(`O visualizador 3D já foi encerrado.`);this._mode!==`upload`&&(this.reset(),this._mode=`upload`);let r=this.epoch,i=++this.scanSeq[e],a;try{a=await D(t,n)}catch(e){throw e instanceof Error?e:Error(`Não foi possível ler o arquivo "`+t+`".`)}if(this.disposed||r!==this.epoch||i!==this.scanSeq[e]||this._mode!==`upload`)throw Error(r_);return this.addScan(e,a)}addScan(e,t){let n=Math.floor(t.length/9);if(!n)throw Error(`O arquivo não contém triângulos.`);this._mode!==`upload`&&(this.reset(),this._mode=`upload`);let r=E(t),i=new Mt;if(i.setAttribute(`position`,new ht(r.positions,3)),i.setIndex(new ht(r.indices,1)),wl(i,!1),Dl(i,!0),this.scanGroup||(this.scanGroup=new At,this.content.add(this.scanGroup)),this.scans[e]){for(let[t,n]of[...this.margins])n.kind===e&&this.dropMargin(t,!0);for(let[e,t]of[...this.up])this.dropCrown(t),this.up.delete(e),this.releaseCase(t.rc);for(let[t,n]of[...this.placements])n.kind===e&&this.dropPlacement(t)}this.dropMesh(this.scans[e]??null);let a=new Ue(i,this.mats.scan);a.userData.kind=e,this.scanGroup.add(a),this.scans[e]=a;let o=new Vt;for(let e of Object.values(this.scans))e.geometry.computeBoundingBox(),o.union(e.geometry.boundingBox);return this.scanGroup.position.copy(o.getCenter(new Q)).negate(),this.scanBox=o,this.root.updateMatrixWorld(!0),this.applyVis(),{triangles:n}}place(e,t,n,r,i){if(this._mode!==`upload`||!this.scanGroup||!m(e))return!1;let a=n.clone().normalize();if(!(a.lengthSq()>.5))return!1;i&&a.dot(i)>0&&a.negate();let o=this.scanGroup.worldToLocal(t.clone());this.placements.set(e,{p:o,n:a,kind:r});let s=this.markers.get(e);return s||(s=new Ue(this.markGeo,this.mats.mark),s.userData.dot=Ug,s.renderOrder=20,this.scanGroup.add(s),this.markers.set(e,s)),s.position.copy(o),s.updateWorldMatrix(!0,!1),this.applyVis(),!0}hasPlacement(e){return this.placements.has(e)}upRec(e,t,r){let a=n(e),o=i(e),[s,c,l]=w[a][o],u=r.n.clone().normalize(),d=new Q(1,0,0);Math.abs(d.dot(u))>.9&&d.set(0,0,1),d.addScaledVector(u,-d.dot(u)).normalize();let f=new Q().crossVectors(d,u),p={type:o,a:s/2,b:c/2,H:l},m=Ku(p,t===`Onlay`?`onlay`:`crown`,!0),h=r.p.clone().addScaledVector(u,-qu(p,m)),g=new Ct().setFromRotationMatrix(new st().makeBasis(d,u,f)),_=this.up.get(e);if(!_)_={id:e,arch:a,...p,pos:h,quat:g,mesial:null,distal:null,prep:m,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null,scan:r.kind},this.up.set(e,_);else{let e=_.rc;Object.assign(_,p,{arch:a,pos:h,quat:g,prep:m,scan:r.kind,rc:null,prepMesh:null,nbMesh:null}),this.releaseCase(e),_.crown&&(_.crown.position.copy(h),_.crown.quaternion.copy(g),_.crown.updateWorldMatrix(!0,!0))}return _}upCase(e,t,r,i){let a=i.dims,o={type:i.type,a:(a.xPlus-a.xMinus)/2,b:a.b,H:a.H0},s=t===`Onlay`?{kind:`onlay`,cut:.85,virtual:!0}:{kind:`crown`,hs:i.roof(0),virtual:!0},c=i.origin.clone(),l=i.quat.clone(),u=this.up.get(e),d=u?.rc;if(u?(Object.assign(u,o,{arch:n(e),pos:c,quat:l,prep:s,scan:r}),u.crown&&(u.crown.position.copy(c),u.crown.quaternion.copy(l),u.crown.updateWorldMatrix(!0,!0))):(u={id:e,arch:n(e),...o,pos:c,quat:l,mesial:null,distal:null,prep:s,natural:null,stump:null,crown:null,data:null,params:null,lines:null,undo:[],adj:null,scan:r},this.up.set(e,u)),d!==i){u.rc=i;let e=e=>{let t=new Ue(e,this.mats.scan);return t.matrixAutoUpdate=!1,t};u.prepMesh=e(i.prep),u.nbMesh=i.neighbors?e(i.neighbors):null,this.releaseCase(d)}return u}releaseCase(e){if(e){for(let t of this.up.values())if(t.rc===e)return;for(let t of this.margins.values())if(t.rc===e)return;this.shapeInstalled.get(e)?.(),this.shapeInstalled.delete(e),e.dispose()}}syncAux(e){let t=e.scan?this.scanGroup:this.content;if(t){t.updateWorldMatrix(!0,!1);for(let n of[e.prepMesh,e.nbMesh])n&&(n.matrix.copy(t.matrixWorld),e.scan||n.matrix.multiply(new st().compose(e.pos,e.quat,new Q(1,1,1))),n.updateMatrixWorld(!0))}}sampleCase(e){if(e.rc&&e.rc.id===e.id)return;let t=e.prep,n=new st().compose(e.pos,e.quat,new Q(1,1,1)).clone().invert(),r=0,i=(t,i)=>{let a=[],o=[];t=[...t].sort((t,n)=>t===e?-1:+(n===e));for(let s of t){let t=s===e?s.stump:this.rep(s);if(!t||s!==e&&s.pos.distanceTo(e.pos)>i)continue;let c=t.geometry,l=c.getAttribute(`position`),u=c.getIndex(),d=new st().compose(s.pos,s.quat,new Q(1,1,1)).premultiply(n),f=a.length/3,p=new Q;for(let e=0;e<l.count;e++)p.fromBufferAttribute(l,e).applyMatrix4(d),a.push(p.x,p.y,p.z);let m=u?u.count:l.count;for(let e=0;e<m;e++)o.push(f+(u?u.getX(e):e));s===e&&(r=m/3)}if(!o.length)return null;let s=new Mt;return s.setAttribute(`position`,new ht(Float32Array.from(a),3)),s.setIndex(new ht(Uint32Array.from(o),1)),Dl(s),s},a=[],o=[];for(let t of this.teeth.values())(t.arch===e.arch?a:o).push(t);let s=i(a,16),c=i(o,30);if(!s)return;let l=[],u=t.kind===`crown`?.74:Bu(t.cut,`Convexo`)-.035,d=t.kind===`crown`?.74*Vu(0,e.type):u*Vu(t.cut,e.type),f=t.kind===`crown`?0:t.cut*e.H;for(let t=0;t<64;t++){let n=t/64*Math.PI*2,r=Math.cos(n),i=Math.sin(n);l.push(new Q(Math.sign(r)*Math.abs(r)**.77*u*e.a,f,Math.sign(i)*Math.abs(i)**.77*d*e.b))}let p=Pd.build({id:e.id,own:s,opp:c,loop:l,hint:{Y:new Q(0,1,0),Z:new Q(0,0,1),ownTriangles:r}});if(kl(s),c&&kl(c),typeof p==`string`)return;this.dropSampleCase(e),e.rc=p;let m=e=>{let t=new Ue(e,this.mats.scan);return t.matrixAutoUpdate=!1,t};e.prepMesh=m(p.prep),e.nbMesh=p.neighbors?m(p.neighbors):null}dropSampleCase(e){e.rc&&!e.scan&&(this.shapeInstalled.get(e.rc)?.(),this.shapeInstalled.delete(e.rc),e.rc.dispose(),e.rc=null,e.prepMesh=null,e.nbMesh=null)}marginKind(e){let t=n(e)===`U`?`sup`:`inf`;return this.scans[t]?t:this.margins.get(e)?.kind??null}startMargin(e){if(this._mode!==`upload`||!this.scanGroup||!m(e))return;this.marking!=null&&this.marking!==e&&this.cancelMargin(),this.dropMargin(e,!1);let t=this.up.get(e);t&&(this.dropCrown(t),this.up.delete(e),this.releaseCase(t.rc)),this.genErrors.delete(e),this.marking=e,this.margins.set(e,{kind:null,pts:[],segs:[],closed:!1,rc:null,line:null,tube:null,dots:[]}),this.applyVis(),this.emitMargin(e)}marginTarget(){return this.marking}suggestMargin(e){this._mode===`upload`&&this.scanGroup&&m(e)&&(this.marking!==e&&this.startMargin(e),this.marking===e&&(this.suggesting=e))}suggestTarget(){return this.suggesting}suggestAt(e,t,n,r){let i=this.suggesting,a=i==null?void 0:this.margins.get(i);if(i==null||!a||this.marking!==i||!this.scanGroup)return null;let o=this.marginKind(i)??t,s=this.scans[o];if(t!==o||!s)return null;this.suggesting=null;let{pm:c,occlusal:l}=this.scanPrep(s.geometry),u=this.scanGroup.worldToLocal(e.clone()),d=[u.x,u.y,u.z],f=this.found[o],p=f&&f.geometry===s.geometry?pe(f.det.result,d):null,m,h=!1;if(p&&p.suggestion&&p.score>=.4)m=p.suggestion,h=!0;else{let e=n?n.clone().normalize():null;if(e&&r&&e.dot(r)>0&&(e=null),e&&!(e.lengthSq()>.5)&&(e=null),m=q(c,{point:d,normal:e?[e.x,e.y,e.z]:void 0,occlusal:l}),m.confidence.score<.5&&f&&f.geometry===s.geometry){let e=null,t=2.5;for(let n of f.det.result.candidates)if(!(!n.suggestion||n.score<.4))for(let r of n.suggestion.loop){let i=Math.hypot(r[0]-d[0],r[1]-d[1],r[2]-d[2]);i<t&&(t=i,e=n)}e&&e.suggestion&&(m=e.suggestion,h=!0)}}return this.applySuggestion(i,a,o,s,c,m,m.variant,h)}scanPrep(e){let t=this.prepared.get(e);t||(t=P({positions:e.getAttribute(`position`).array,indices:e.getIndex().array}),this.prepared.set(e,t));let n=this.archInfo.get(e);return n||(n={occlusal:he(t),frame:null},this.archInfo.set(e,n)),{pm:t,occlusal:n.occlusal,frame:n.frame}}archOf(e,t){let{pm:n,occlusal:r}=this.scanPrep(e),i=this.archInfo.get(e);if(i.frame===null&&!(`frameTried`in i)){let e=t===`inf`?[-r[0],-r[1],-r[2]]:r;i.frame=se(n,e),i.frameTried=!0}return i.frame}describe(e,t,r,i,a,o){let s=this.archOf(r.geometry,t),c=n(e)===`U`?`U`:`L`,l=yn(i,s?gn(i.center,i.axis,s.center,s.anterior,c):null),u=[...bn(i),...l],d={ok:o,confidence:i.confidence.score,reasons:o?u:i.confidence.reasons.slice(),variant:a,weak:l,alternatives:i.alternatives.map(e=>({variant:e.variant,label:e.label,differs:e.differs,maxShift:e.maxShift}))};if(a!==i.variant&&(d.alternatives=[{variant:i.variant,label:ue[i.variant],differs:1,maxShift:0},...d.alternatives.filter(e=>e.variant!==a)]),!o){let e=i.confidence.reasons.some(e=>/parede axial/.test(e));d.message=i.loop.length?e||i.confidence.score<.15?`Este dente não parece preparado: não há parede de preparo em volta do ponto clicado. A margem de um preparo pode ser marcada ponto a ponto.`:`A leitura ficou muito incerta aqui. A margem pode ser marcada ponto a ponto.`:`Não foi possível traçar um contorno a partir deste ponto.`}return d}fillFromLoop(e,t,n){let r=[0];for(let e=0;e<n.length;e++)r.push(r[e]+n[e].distanceTo(n[(e+1)%n.length]));let i=r[n.length],a=[];for(let e=0,t=0;e<20;e++){let o=i*e/20;for(;t<n.length-1&&r[t+1]<=o;)t++;(!a.length||a[a.length-1]!==t)&&a.push(t)}e.kind=t,e.pts=a.map(e=>n[e].clone()),e.segs=[];for(let t=0;t+1<a.length;t++)e.segs.push(n.slice(a[t],a[t+1]));e.closing=n.slice(a[a.length-1])}applySuggestion(e,t,n,r,i,a,o,s=!1,c=[]){let l=o===a.variant?null:a.alternatives.find(e=>e.variant===o),u=(l?l.loop:a.loop).map(e=>new Q(e[0],e[1],e[2])),d=this.autoSrc.get(e);(!d||!d.bases.includes(a))&&this.autoSrc.set(e,{kind:n,bases:[a],irmas:c});let f=a.confidence.reasons.some(e=>/parede axial/.test(e))&&a.confidence.score<.3,p=u.length>=20&&(s||!f&&a.area>=5&&a.confidence.score>=.4);p&&(this.buildDiag(e,r,i,a),this.fillFromLoop(t,n,u),this.lastSug.set(e,{sg:a,kind:n,variant:o,geometry:r.geometry}),this.drawMargin(e,t));let m=this.describe(e,n,r,a,o,p);return this.onMarginSuggested?.(e,m),p&&this.emitMargin(e),m}toDetected(e,t,n){let r=[];return this.scanGroup&&n.result.candidates.forEach((t,i)=>{if(!t.suggestion||t.score<.4)return;let a=this.folgaAteAntagonista(e,t.center,n.result.occlusal);if(this.semEspacoParaCoroa(a,t.suggestion.confidence.rawScore??t.suggestion.confidence.score))return;let o=n.fdi[i],s=this.scanGroup.localToWorld(new Q(t.center[0],t.center[1],t.center[2]));r.push({scan:e,index:i,fdi:o?o.fdi:e===`sup`?20:30,uncertain:!o||o.uncertain,score:t.score,confidence:t.suggestion.confidence.score,center:{x:s.x,y:s.y,z:s.z},...o?{arc:o.arc}:{},...o?.pelosDentes?{numeroDosDentes:!0}:{},...a?{espaco:a.espaco}:{}})}),r}folgaAteAntagonista(e,t,n){let r=this.scans[e===`sup`?`inf`:`sup`],i=this.scans[e];if(!r||!i)return null;try{let e=hu(r.geometry),a=new Q(n[0],n[1],n[2]).normalize(),o=(t,n,r)=>{let i=e.raycastFirst(new We(new Q(t,n,r),a),2);return i?i.distance:1/0},s=o(t[0],t[1],t[2]),{pm:c}=this.scanPrep(i.geometry),l=c.positions,u=[a.x,a.y,a.z],d=t[0]*u[0]+t[1]*u[1]+t[2]*u[2],{u:f,v:p}=B(u),m=Array.from({length:12},()=>({h:-1/0,i:-1}));for(let e=0;e<c.vertexCount;e++){let n=l[e*3]-t[0],r=l[e*3+1]-t[1],i=l[e*3+2]-t[2],a=n*f[0]+r*f[1]+i*f[2],o=n*p[0]+r*p[1]+i*p[2],s=Math.hypot(a,o);if(s<5||s>25)continue;let c=l[e*3]*u[0]+l[e*3+1]*u[1]+l[e*3+2]*u[2];if(c<d-4)continue;let h=Math.min(11,Math.floor((Math.atan2(o,a)+Math.PI)/(2*Math.PI)*12));c>m[h].h&&(m[h]={h:c,i:e})}let h=m.filter(e=>e.i>=0).map(e=>o(l[e.i*3],l[e.i*3+1],l[e.i*3+2])).filter(Number.isFinite).sort((e,t)=>e-t);return{espaco:s,ganho:h.length>=3&&Number.isFinite(s)?s-h[h.length>>1]:null}}catch{return null}}semEspacoParaCoroa(e,t){return!!e&&e.espaco<Bg&&e.ganho!==null&&e.ganho<Hg&&t<Vg}detectPreparations(e){let t=(e?[e]:[`sup`,`inf`]).filter(e=>this.scans[e]),n=t.map(e=>{let t=this.scans[e].geometry,n=this.found[e];if(n&&n.geometry===t)return Promise.resolve(n.list);let r=this.detecting[e];if(r&&r.geometry===t)return r.pr;let i=e===`sup`?`U`:`L`,a=(typeof Worker>`u`?Promise.resolve().then(()=>{let{pm:e,occlusal:n}=this.scanPrep(t);return pn(e,i,n,ru)}):mn({positions:t.getAttribute(`position`).array,indices:t.getIndex().array,arch:i},ru)).then(n=>{if(this.detecting[e]?.pr===a&&delete this.detecting[e],this.scans[e]?.geometry!==t||!this.scanGroup)return[];let r=this.toDetected(e,t,n);return this.found[e]={geometry:t,det:n,list:r},this.onDetected?.(this.detectedPreparations()),r},t=>{throw this.detecting[e]?.pr===a&&delete this.detecting[e],t});return this.detecting[e]={geometry:t,pr:a},a});return Promise.all(n).then(e=>{let n=e.flat().sort((e,t)=>t.score-e.score);return n.length||!this.weakFallback?n:this.weakPreparation(t)})}weakFallback=!0;weakPreparation(e){let t=null;for(let n of e){let e=this.found[n];if(e&&e.geometry===this.scans[n]?.geometry)for(let r=0;r<e.det.result.candidates.length;r++){let i=e.det.result.candidates[r];if(!i.suggestion||i.sameAs||i.geometryScore<zg||this.semEspacoParaCoroa(this.folgaAteAntagonista(n,i.center,e.det.result.occlusal),i.suggestion.confidence.rawScore??i.suggestion.confidence.score))continue;let a=i.geometryScore+i.score;(!t||a>t.rank)&&(t={kind:n,index:r,c:i,e:e.det.fdi[r],rank:a})}}let n=t;if(!n||!this.scanGroup)return[];let{kind:r,index:i,c:a,e:o}=n,s=this.scanGroup.localToWorld(new Q(a.center[0],a.center[1],a.center[2])),c={scan:r,index:i,fdi:o?o.fdi:r===`sup`?20:30,uncertain:!0,score:Math.min(a.score,.39),confidence:a.suggestion.confidence.score,center:{x:s.x,y:s.y,z:s.z},weak:!0};return this.found[r].list=[...this.found[r].list,c],this.onDetected?.(this.detectedPreparations()),[c]}detectedPreparations(){let e=[];for(let t of[`sup`,`inf`]){let n=this.found[t];n&&this.scans[t]?.geometry===n.geometry&&e.push(...n.list)}return e.sort((e,t)=>t.score-e.score)}suggestDetected(e,t,n){let r=this.found[t],i=this.scans[t];if(!r||!i||r.geometry!==i.geometry)return null;let a=r.det.result.candidates[n];if(!a||!a.suggestion)return null;this.marking!==e&&this.suggestMargin(e);let o=this.margins.get(e);if(this.marking!==e||!o)return null;this.suggesting=null;let{pm:s}=this.scanPrep(i.geometry),c=r.det.result.candidates.filter((e,t)=>t!==n&&e.suggestion&&e.suggestion.loop.length>=8&&Mg(e.center,a.center)<6).map(e=>e.suggestion);return r.list.some(e=>e.index===n&&e.weak)?this.autoFraco.add(e):this.autoFraco.delete(e),this.applySuggestion(e,o,t,i,s,a.suggestion,a.suggestion.variant,!0,c)}suggestForTooth(e){let t=this.marginKind(e);if(!t)return null;let n=this.found[t];if(!n||this.scans[t]?.geometry!==n.geometry)return null;let r=n.list,i=new Set;for(let[t,n]of this.margins)t!==e&&n.pts.length&&i.add(t);let a=r.find(t=>te(t.fdi,e)<=1&&!i.has(t.fdi))??null;return!a&&r.length===1&&r[0].score>=.4&&(a=r[0]),a?this.suggestDetected(e,a.scan,a.index):null}useMarginVariant(e,t){let n=this.lastSug.get(e),r=n?this.scans[n.kind]:void 0;if(!n||!r||r.geometry!==n.geometry||t!==n.sg.variant&&!n.sg.alternatives.some(e=>e.variant===t))return null;this.marking!==e&&this.suggestMargin(e);let i=this.margins.get(e);if(this.marking!==e||!i)return null;this.suggesting=null;let{pm:a}=this.scanPrep(r.geometry);return this.applySuggestion(e,i,n.kind,r,a,n.sg,t,!0)}finishMarginAuto(){let e=this.passosMargemAuto(),t=e.next();for(;!t.done;)t=e.next();return t.value}*passosMargemAuto(){let e=this.marking,t=e==null?void 0:this.margins.get(e);if(e==null||!t)return{error:`Nenhuma linha de margem está sendo marcada.`,downgraded:null};let n=[];this.autoRefusals.set(e,n),this.autoRetry.delete(e),this.autoAtual.delete(e);let r=this.lastSug.get(e),i=t.pts.length?this.finishMargin():`O detector não traçou um contorno utilizável para este preparo.`;if(i===null){let t=r?`leitura preferida (${ue[r.variant]})`:`linha como veio do detector`;return this.autoAtual.set(e,t),this.autoRetry.set(e,{it:null,ctx:null,orc:{t0:0,medidas:0,urgenteMs:Ig,max:Rg},usada:r?{sg:r.sg,variant:r.variant}:{},fresco:!1,run:null}),{error:null,downgraded:null,...this.autoFraco.has(e)||r&&r.sg.confidence.level===`baixa`?{lowConfidence:!0}:{},stage:`direta`,refusals:n}}n.push({stage:`leitura`,attempt:r?`leitura preferida (${ue[r.variant]})`:`linha como veio do detector`,reason:i});let a=this.autoSrc.get(e)??(r?{kind:r.kind,bases:[r.sg],irmas:[]}:null),o=a?this.scans[a.kind]:void 0;if(!a||!o||!a.bases.length)return{error:i,downgraded:null,refusals:n};let s={t0:performance.now(),medidas:0,urgenteMs:Pg,max:Ng},c=this.contextoAuto(e,a,r?r.variant:void 0,s),l=tu(c);for(let o=l.next();!o.done;o=l.next()){let u=o.value;if(u.etapa===`leitura`&&r&&u.sugestao&&u.sugestao.sg===r.sg&&u.sugestao.variant===r.variant||u.etapa!==`ultimo-recurso`&&c.urgente?.())continue;yield,s.medidas++;let d=this.tentarCandidata(e,t,a.kind,u);if(d===null){this.commitMargin(e,t),this.autoRetry.set(e,{it:l,ctx:c,orc:s,usada:this.usadaDe(u),fresco:!0,run:null}),this.autoAtual.set(e,u.rotulo);let a=u.baixa||u.etapa===`ultimo-recurso`||this.autoFraco.has(e);return{error:null,downgraded:u.etapa===`leitura`?`A leitura "${r?ue[r.variant]:`inicial`}" foi recusada (${i}); a margem ficou ${u.rotulo.replace(/^leitura /,``)}.`:`A leitura inicial foi recusada (${i}); a margem foi refeita (${u.rotulo}).`,lowConfidence:a,stage:u.etapa,refusals:n}}n.push({stage:u.etapa,attempt:u.rotulo,reason:d})}return r&&this.useMarginVariant(e,r.variant),{error:`Não foi possível fechar a margem deste preparo.`,downgraded:null,refusals:n}}contextoAuto(e,t,n,r){let i=this.scans[t.kind],{pm:a,occlusal:o}=this.scanPrep(i.geometry),s=t.bases[0],c=s.loop.length?s.axis:o,l=new Q,u={bases:t.bases,irmas:t.irmas,leitura:n??s.variant,oclusal:o,centro:s.center,eixo:c,sugerir:(e,t,n)=>q(a,{point:e,normal:t,occlusal:o},n),prender:e=>{let t=_u(i.geometry,l.set(e[0],e[1],e[2]));return t?[t.point.x,t.point.y,t.point.z]:e}};return u.urgente=()=>performance.now()-r.t0>r.urgenteMs||r.medidas>=r.max,u}tentarCandidata(e,t,n,r){try{let i=this.scans[n];if(r.sugestao){let{pm:a}=this.scanPrep(i.geometry);return this.applySuggestion(e,t,n,i,a,r.sugestao.sg,r.sugestao.variant,!0).ok?this.closeMargin(e,t):`O laço sugerido tem pontos de menos para virar linha.`}return this.fillFromLoop(t,n,r.loop.map(e=>new Q(e[0],e[1],e[2]))),this.closeMargin(e,t)}catch(e){return`Falha inesperada ao medir a linha: `+(e instanceof Error?e.message:String(e))}}usadaDe(e){return e.sugestao?{sg:e.sugestao.sg,variant:e.sugestao.variant}:{loop:e.loop}}retryMarginAuto(e,t=!1,n=1/0){let r=this.margins.get(e),i=this.autoRetry.get(e)?.run?.geracoes??0,a={ok:!1,esgotado:!0,tried:i,aplica:!1},o={ok:!1,esgotado:!0,tried:i,aplica:!0};if(!r||!r.kind||!this.genMargem.has(e))return a;(!this.autoRetry.has(e)||!this.autoSrc.get(e)?.bases.length)&&this.origemDaMargem(e,r);let s=this.autoRetry.get(e),c=this.autoSrc.get(e);if(!s||!c||!c.bases.length||!this.scans[c.kind])return a;if(t||!s.run){s.fresco||(s.it=null,s.ctx=null),s.fresco=!1;let e=performance.now();Object.assign(s.orc,{t0:e,medidas:0,urgenteMs:Ig,max:Rg}),s.run={t0:e,geracoes:0,snap:{kind:r.kind,pts:r.pts,segs:r.segs,closing:r.closing,closed:r.closed,rc:r.rc,loop:r.loop}}}else if(!s.it)return o;let l=s.run;s.it||=(s.ctx=this.contextoAuto(e,c,void 0,s.orc),tu(s.ctx));let u=this.autoRefusals.get(e)??[];this.autoRefusals.set(e,u);let d=s.it,f=performance.now();for(;performance.now()-l.t0<Fg&&performance.now()-f<n&&l.geracoes<Lg;){let t=d.next();if(t.done)break;let n=t.value,i=s.usada;if((i.sg?n.sugestao?.sg===i.sg&&n.sugestao.variant===i.variant:n.loop===i.loop)||n.etapa!==`ultimo-recurso`&&s.ctx?.urgente?.())continue;s.orc.medidas++;let a=this.tentarCandidata(e,r,c.kind,n);if(a!==null)u.push({stage:n.etapa,attempt:n.rotulo,reason:a});else return s.usada=this.usadaDe(n),this.autoAtual.set(e,n.rotulo),this.genMargem.delete(e),l.geracoes++,this.drawMargin(e,r),this.applyVis(),this.emitMargin(e),{ok:!0,attempt:n.rotulo,stage:n.etapa,tried:l.geracoes}}let p=l.snap;return r.kind=p.kind,r.pts=p.pts,r.segs=p.segs,r.closing=p.closing,r.closed=p.closed,r.rc=p.rc,r.loop=p.loop,this.drawMargin(e,r),this.applyVis(),this.emitMargin(e),s.it=null,s.ctx=null,{ok:!1,esgotado:!0,tried:l.geracoes,aplica:!0}}origemDaMargem(e,t){let n=t.kind,r=n?this.scans[n]:void 0;if(n&&r&&t.closed&&t.pts.length){if(!this.autoSrc.get(e)?.bases.length){let{pm:i,occlusal:a}=this.scanPrep(r.geometry),o=t.loop?.length?t.loop:t.pts,s=new Q;for(let e of o)s.add(e);s.divideScalar(o.length);let c=_u(r.geometry,s),l=c?c.point:s,u;try{u=q(i,{point:[l.x,l.y,l.z],occlusal:a})}catch{return}if(u.loop.length<20)return;this.autoSrc.set(e,{kind:n,bases:[u],irmas:[]})}this.autoAtual.set(e,this.autoAtual.get(e)??`linha do caso salvo`),this.autoRetry.set(e,{it:null,ctx:null,orc:{t0:0,medidas:0,urgenteMs:Ig,max:Rg},usada:{loop:[]},fresco:!1,run:null})}}marginAutoRefusals(e){return(this.autoRefusals.get(e)??[]).slice()}commitMargin(e,t){this.marking=null,this.suggesting=null,this.drawMargin(e,t),this.applyVis(),this.emitMargin(e)}marginPoints(){let e=this.marking==null?void 0:this.margins.get(this.marking);return!e||!this.scanGroup?[]:e.pts.map(e=>this.scanGroup.localToWorld(e.clone()))}marginPointNear(e,t){let n=this.marginPoints(),r=-1,i=t;return n.forEach((t,n)=>{let a=Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z);a<i&&(i=a,r=n)}),r}moveMarginPoint(e,t,n=!1){let r=this.marking,i=r==null?void 0:this.margins.get(r);if(r==null||!i||i.closed||!i.kind||!this.scanGroup||e<0||e>=i.pts.length)return!1;let a=this.scans[i.kind];if(!a)return!1;let o=a.geometry,s=this.scanGroup.worldToLocal(new Q(t.x,t.y,t.z)),c=_u(o,s,2);if(!c)return!1;if(s.copy(c.point),n){let{pm:t,occlusal:n}=this.scanPrep(o),a=this.lastSug.get(r),c=i.pts.map((t,n)=>n===e?[s.x,s.y,s.z]:[t.x,t.y,t.z]),l=G(t,c.length>=3?c:[[s.x,s.y,s.z]],{occlusal:a?a.sg.axis:n,window:.6}),u=c.length>=3?e:0;l.points[u]&&s.set(l.points[u][0],l.points[u][1],l.points[u][2])}i.pts[e]=s;let l=i.pts.length;return e>0&&(i.segs[e-1]=vu(o,i.pts[e-1],s)),e+1<l&&(i.segs[e]=vu(o,s,i.pts[e+1])),i.closing&&(e===0||e===l-1)&&(i.closing=l>=2?vu(o,i.pts[l-1],i.pts[0]):null),this.drawMargin(r,i),this.emitMargin(r),!0}insertMarginPoint(e){let t=this.marking,n=t==null?void 0:this.margins.get(t);if(t==null||!n||n.closed||!n.kind||!this.scanGroup||n.pts.length<2)return!1;let r=this.scans[n.kind];if(!r)return!1;let i=r.geometry,a=this.scanGroup.worldToLocal(new Q(e.x,e.y,e.z)),o=_u(i,a,2);if(!o)return!1;a.copy(o.point);let s=n.closing?[...n.segs,n.closing]:n.segs,c=-1,l=1/0;return s.forEach((e,t)=>{for(let n of e){let e=n.distanceTo(a);e<l&&(l=e,c=t)}}),c<0||l>2?!1:(c===n.segs.length?(n.segs.push(vu(i,n.pts[n.pts.length-1],a)),n.pts.push(a),n.closing=vu(i,a,n.pts[0])):(n.segs.splice(c,1,vu(i,n.pts[c],a),vu(i,a,n.pts[c+1])),n.pts.splice(c+1,0,a)),this.drawMargin(t,n),this.emitMargin(t),!0)}removeMarginPoint(e){let t=this.marking,n=t==null?void 0:this.margins.get(t);if(t==null||!n||n.closed||!n.kind||e<0||e>=n.pts.length||n.pts.length<=6)return!1;let r=this.scans[n.kind];if(!r)return!1;let i=r.geometry,a=n.pts.length;return n.pts.splice(e,1),e===a-1?(n.segs.pop(),n.closing=n.closing?vu(i,n.pts[n.pts.length-1],n.pts[0]):null):e===0?(n.segs.shift(),n.closing=n.closing?vu(i,n.pts[n.pts.length-1],n.pts[0]):null):n.segs.splice(e-1,2,vu(i,n.pts[e-1],n.pts[e])),this.drawMargin(t,n),this.emitMargin(t),!0}marginState(e){let t=this.margins.get(e);return{points:t?t.pts.length:0,closed:!!t?.closed}}marginReport(e){let t=this.margins.get(e)?.rc??this.up.get(e)?.rc;if(!t)return null;let n=e=>e.toFixed(1).replace(`.`,`,`)+` mm²`;return{retention:t.retention,undercut:t.undercut,area:t.area,message:t.retention?`O preparo tem retenção no eixo de inserção (${n(t.undercut)} de ${n(t.prepArea)}). A peça é aliviada nessas áreas.`:null}}realCase(e){return this.margins.get(e)?.rc??this.up.get(e)?.rc??null}pieceData(e){return this.rec(e)?.data??null}marginTargets(){if(this.marking==null)return[];let e=this.marginKind(this.marking);return e&&this.scans[e]?[this.scans[e]]:Object.keys(this.scans).filter(e=>this.scanLayer(e)).map(e=>this.scans[e])}marginFirstPoint(){let e=this.marking==null?void 0:this.margins.get(this.marking);return!e||!e.pts.length||!this.scanGroup?null:this.scanGroup.localToWorld(e.pts[0].clone())}addMarginPoint(e,t,n=!1){let r=this.marking,i=r==null?void 0:this.margins.get(r);if(r==null||!i||i.closed||!this.scanGroup)return`ignored`;let a=this.marginKind(r)??t,o=this.scans[a];if(t!==a||!o)return`ignored`;let s=o.geometry,c=this.scanGroup.worldToLocal(e.clone()),l=_u(s,c,2);l&&c.copy(l.point);let u=i.pts.length;return u>=3&&(n||c.distanceTo(i.pts[0])<.45)?u>=6&&this.finishMargin()===null?`closed`:`ignored`:u&&c.distanceTo(i.pts[u-1])<.05?`ignored`:(i.kind=a,i.closing=null,u&&i.segs.push(vu(s,i.pts[u-1],c)),i.pts.push(c),this.drawMargin(r,i),this.emitMargin(r),`added`)}undoMarginPoint(){let e=this.marking,t=e==null?void 0:this.margins.get(e);return e==null||!t||!t.pts.length?!1:(t.pts.pop(),t.segs.pop(),t.closing=null,t.pts.length||(t.kind=null),this.drawMargin(e,t),this.emitMargin(e),!0)}finishMargin(){let e=this.marking,t=e==null?void 0:this.margins.get(e);if(e==null||!t)return`Nenhuma linha de margem está sendo marcada.`;let n=t.pts.length;if(n<6){let e=6-n;return`Marque pelo menos 6 pontos em volta do preparo (${e===1?`falta 1`:`faltam `+e}).`}let r=this.closeMargin(e,t);return r===null?(this.commitMargin(e,t),null):r}closeMargin(e,t){let r=t.pts.length,i=t.kind?this.scans[t.kind]:void 0;if(!i||!t.kind)return`O scan em que a linha foi marcada não está mais carregado.`;let a=t.closing?.length?t.closing:vu(i.geometry,t.pts[r-1],t.pts[0]),o=[...t.segs.flat(),...a],s=t.kind===`sup`?`inf`:t.kind===`inf`?`sup`:n(e)===`U`?`inf`:`sup`,c=s===t.kind?void 0:this.scans[s],l=Pd.build({id:e,own:i.geometry,opp:c?c.geometry:null,loop:o});return typeof l==`string`?l:(t.segs.push(a),t.closing=null,t.closed=!0,t.rc=l,t.loop=o,null)}getMargin(e){let t=this.margins.get(e);return!t||!t.kind||!t.pts.length?null:{points:t.pts.map(e=>({x:e.x,y:e.y,z:e.z})),closed:t.closed,scan:t.kind,segs:t.segs.map(e=>e.flatMap(e=>[e.x,e.y,e.z]))}}setMargin(e,t){if(!m(e))return`Dente inválido.`;let n=this._mode===`upload`&&this.scanGroup?this.scans[t.scan]:void 0;if(!n)return`O scan em que a linha foi marcada não está carregado.`;let r=Array.isArray(t.points)?t.points:[];if(!r.every(e=>e&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z)))return`A linha de margem guardada tem pontos inválidos.`;if(t.closed&&r.length<6)return`A linha de margem guardada tem menos de 6 pontos.`;this.dropMargin(e,!1);let i={kind:t.scan,pts:[],segs:[],closed:!1,rc:null,line:null,tube:null,dots:[]},a=this.exactSegs(t,r.length);if(a&&r.every(e=>_u(n.geometry,new Q(e.x,e.y,e.z),.05)))i.pts=r.map(e=>new Q(e.x,e.y,e.z)),i.segs=t.closed?a.slice(0,-1):a,t.closed&&(i.closing=a[a.length-1]);else for(let t of r){let r=new Q(t.x,t.y,t.z),a=_u(n.geometry,r,2);if(!a)return this.emitMargin(e),`A linha de margem guardada não cai sobre este scan.`;r.copy(a.point),i.pts.length&&i.segs.push(vu(n.geometry,i.pts[i.pts.length-1],r)),i.pts.push(r)}if(t.closed){let t=this.closeMargin(e,i);if(t!==null)return this.emitMargin(e),t}return i.pts.length&&(this.margins.set(e,i),this.drawMargin(e,i)),this.applyVis(),this.emitMargin(e),null}exactSegs(e,t){let n=e.segs;if(!Array.isArray(n)||t<2||n.length!==(e.closed?t:t-1))return null;let r=[];for(let t=0;t<n.length;t++){let i=n[t],a=e.points[t];if(!Array.isArray(i)||i.length<3||i.length%3||i.length>3e4||!i.every(e=>Number.isFinite(e))||Math.hypot(i[0]-a.x,i[1]-a.y,i[2]-a.z)>1e-6)return null;let o=[];for(let e=0;e<i.length;e+=3)o.push(new Q(i[e],i[e+1],i[e+2]));r.push(o)}return r}buildDiag(e,t,n,r){this.dropDiag(e);let i=r.samples.length,a=this.scanGroup;if(i<3||!a)return;this.diagMats??={firm:new $e({color:3526783,depthTest:!1,transparent:!0,opacity:.95}),weak:new $e({color:16765503,depthTest:!1,transparent:!0,opacity:.95}),bad:new $e({color:16731501,depthTest:!1,transparent:!0,opacity:.95}),edge:new J({color:15922943,depthTest:!1}),crease:new J({color:9345707,depthTest:!1})};let o=new Uint8Array(i);for(let e=0;e<i;e++)r.samples[e].kind===`indefinido`&&(o[e]=1);let s={"pouco-definida":`margem pouco definida`,vizinho:`encostada no dente vizinho`,"sem-parede":`sem parede axial reconhecível`},c=[];for(let e of r.confidence.weak){let t=e.reason===`pouco-definida`?1:2,n=0;for(let r=e.from;t>o[r]&&(o[r]=t),n++,!(r===e.to||n>i);r=(r+1)%i);c.push({reason:s[e.reason],share:n/i})}let l=new At;l.userData.diag=e;let u=[[],[],[]];for(let e=0;e<i;e++){let t=r.samples[e].point,n=r.samples[(e+1)%i].point;u[Math.max(o[e],o[(e+1)%i])].push(t[0],t[1],t[2],n[0],n[1],n[2])}let d=[this.diagMats.firm,this.diagMats.weak,this.diagMats.bad];u.forEach((e,t)=>{if(!e.length)return;let n=new Ze(new Mt().setAttribute(`position`,new ht(new Float32Array(e),3)),d[t]);n.userData.width=7,n.userData.guide=!0,n.renderOrder=19,l.add(n)});let f=0,p=t.geometry.boundsTree?.closestPointToPoint(new Q(r.center[0],r.center[1],r.center[2]));if(p&&p.faceIndex!=null&&p.distance<.5){let{u:e,v:t}=r.basis,a=r.axis,o=r.center;for(let s=0;s<i;s+=2){let i=r.samples[s],c=Math.cos(i.angle),u=Math.sin(i.angle),d=[e[0]*c+t[0]*u,e[1]*c+t[1]*u,e[2]*c+t[2]*u],m=me(n,p.faceIndex,o,a,d);if(m)for(let e of m.candidates){if(e.kind===`indefinido`||Math.hypot(e.r-i.radius,e.h-i.height)<.12)continue;let t=new Ue(this.diagGeo,e.kind===`aresta`?this.diagMats.edge:this.diagMats.crease);t.position.set(o[0]+d[0]*e.r+a[0]*e.h,o[1]+d[1]*e.r+a[1]*e.h,o[2]+d[2]*e.r+a[2]*e.h),t.scale.setScalar(.05),t.userData.dot=.05,t.userData.dotMin=1.6,t.renderOrder=19,l.add(t),f++}}}let m=0;for(let e=0;e<i;e++)o[e]===0&&m++;l.visible=this.diagOn,a.add(l),a.children.unshift(a.children.pop()),l.updateMatrixWorld(!0),this.diag.set(e,{group:l,info:{firm:m/i,uncertain:1-m/i,candidates:f,sectors:c}})}dropDiag(e){let t=this.diag.get(e);if(t){this.diag.delete(e),t.group.removeFromParent();for(let e of t.group.children)e.isLineSegments&&e.geometry.dispose()}}setMarginDiagnostics(e){this.diagOn=e;for(let t of this.diag.values())t.group.visible=e}marginDiagnostics(e){return this.diag.get(e)?.info??null}cancelMargin(){let e=this.marking;e!=null&&(this.marking=null,this.dropMargin(e,!0),this.applyVis())}emitMargin(e){this.applyMarginLook(e),this.syncObjects(),this.onMarginChange?.(e,this.marginState(e))}dropMargin(e,t){let n=this.margins.get(e);if(this.marking===e&&(this.marking=null),this.suggesting===e&&(this.suggesting=null),this.dropDiag(e),this.autoSrc.delete(e),this.autoRetry.delete(e),this.autoAtual.delete(e),this.genMargem.delete(e),n){this.margins.delete(e),n.line&&(n.line.removeFromParent(),n.line.geometry.dispose()),n.tube&&(n.tube.removeFromParent(),n.tube.geometry.dispose());for(let e of n.dots)e.removeFromParent();this.releaseCase(n.rc),t&&this.emitMargin(e)}}drawMargin(e,t){let n=this.scanGroup;if(!n)return;let r=t.segs.flat();if(t.closed?r.push(t.pts[0]):t.pts.length&&r.push(t.pts[t.pts.length-1]),t.line&&=(t.line.removeFromParent(),t.line.geometry.dispose(),null),t.tube&&=(t.tube.removeFromParent(),t.tube.geometry.dispose(),null),r.length>1){t.line=new dn(new Mt().setFromPoints(r),this.mats.line),t.line.renderOrder=20,t.line.userData.margin=e,t.line.userData.width=2.4,n.add(t.line),t.line.updateWorldMatrix(!0,!1);let i=new vt(t.closed?r.slice(0,-1):r,t.closed,`centripetal`);t.tube=new Ue(new Tt(i,Math.min(600,r.length*2),qg,5,t.closed),this.mats.mark),t.tube.renderOrder=20,t.tube.userData.glOnly=!0,t.tube.userData.margin=e,n.add(t.tube),t.tube.updateWorldMatrix(!0,!1)}let i=t.closed?0:t.pts.length;for(;t.dots.length>i;)t.dots.pop().removeFromParent();for(;t.dots.length<i;){let r=t.dots.length?Gg:Kg,i=new Ue(this.dotGeo,this.mats.mark);i.scale.setScalar(r),i.userData.dot=r,i.userData.margin=e,i.renderOrder=21,n.add(i),t.dots.push(i)}t.dots.forEach((e,n)=>{e.position.copy(t.pts[n]),e.updateWorldMatrix(!0,!1)}),this.applyMarginLook(e)}hasModel(){return this._mode===`sample`||Object.keys(this.scans).length>0}available(e){return m(e)?this._mode!==`sample`||this.teeth.has(e):!1}isPrepared(e){let t=this.teeth.get(e);return!!(t&&t.prep&&!t.prep.virtual)}hasPiece(e){return!!this.rec(e)?.crown}rec(e){if(e!=null)return this._mode===`sample`?this.teeth.get(e):this._mode===`upload`?this.up.get(e):void 0}rep(e){return e.crown??(e.prep&&e.stump?e.stump:e.natural)}neighbor(e){let t=e==null?void 0:this.teeth.get(e);return t?this.rep(t):null}targets(e){let t=[],n=[];if(this._mode===`sample`){for(let n of[e.mesial,e.distal]){let e=this.neighbor(n);e&&t.push(e)}for(let t of this.teeth.values())if(t.arch!==e.arch){let e=this.rep(t);e&&n.push(e)}}else{let t=e.scan===`sup`?`inf`:e.scan===`inf`?`sup`:e.arch===`U`?`inf`:`sup`,r=this.scans[t];r&&n.push(r)}return{same:t,opp:n}}axes(e){let t=this.parentOf(e);return t.updateWorldMatrix(!0,!1),{X:new Q(1,0,0).applyQuaternion(e.quat),Y:new Q(0,1,0).applyQuaternion(e.quat),Z:new Q(0,0,1).applyQuaternion(e.quat),origin:e.pos.clone().applyMatrix4(t.matrixWorld)}}analyze(){if(this._mode!==`sample`)return[];this.root.updateMatrixWorld(!0);let e=[];for(let t of this.teeth.values()){if(!t.prep||t.prep.virtual)continue;let{Y:n,origin:r}=this.axes(t),i=r.addScaledVector(n,qu(t,t.prep)+.01),a=this.prober.cast(i,n,this.targets(t).opp,20);e.push({id:t.id,piece:a_(t.prep),space:a?a.distance:null})}return e.sort((e,t)=>e.id-t.id)}overviewGoal(){if(this._mode===`upload`&&this.scanBox){let e=this.scanBox.getSize(new Q).length();return{tgt:new Q(0,0,0),r:Math.max(30,e*1.5),th:0,ph:.9}}return{tgt:new Q(0,0,-20),r:125,th:0,ph:1}}frameGoal(e,t,n,r){if(this._mode!==`upload`||!this.scanGroup)return null;this.scanGroup.updateWorldMatrix(!0,!1);let i=new Q(...t).transformDirection(this.scanGroup.matrixWorld),a=new Q(...n).transformDirection(this.scanGroup.matrixWorld);return{tgt:new Q(...e).applyMatrix4(this.scanGroup.matrixWorld),r,th:Math.atan2(i.x,i.z),ph:Math.acos(Math.min(1,Math.max(-1,i.y))),up:a}}focusGoal(e,t=`Oclusal`){let n=this.rec(e),r,i=!n&&this._mode===`upload`&&this.scanGroup?this.margins.get(e)?.rc:null;if(i&&this.scanGroup)this.scanGroup.updateWorldMatrix(!0,!1),r={origin:i.origin.clone().applyMatrix4(this.scanGroup.matrixWorld),X:i.X.clone(),Y:i.Y.clone(),Z:i.Z.clone(),H:i.dims.H0,mesial:i.X.clone().multiplyScalar(i.mesialSign)};else if(n){let{X:e,Y:t,Z:i,origin:a}=this.axes(n),o=n.rc?e.clone().multiplyScalar(n.rc.mesialSign):e.clone(),s=this._mode===`sample`&&n.mesial!=null?this.teeth.get(n.mesial):void 0;s&&(o=s.pos.clone().sub(n.pos).normalize()),r={origin:a,X:e,Y:t,Z:i,H:n.H,mesial:o}}else if(this._mode===`upload`&&this.placements.has(e)&&this.scanGroup){let t=this.placements.get(e),n=t.n.clone(),i=new Q(1,0,0);Math.abs(i.dot(n))>.9&&i.set(0,0,1),i.addScaledVector(n,-i.dot(n)).normalize();let a=new Q().crossVectors(i,n);this.scanGroup.updateWorldMatrix(!0,!1),r={origin:t.p.clone().addScaledVector(n,-4).applyMatrix4(this.scanGroup.matrixWorld),X:i,Y:n,Z:a,H:6,mesial:i.clone()}}else return null;return ml(r,t)}generate(e,t,r,i){if(!m(e))return null;let a;for(let t of this.marcasDaGeracao.get(e)??[])this.inutil.delete(t);this.marcasDaGeracao.delete(e);let o=null,s=[];if(t===`Onlay`&&this.requireLibrary&&(t=`Coroa total`,s.push(Qg)),this._mode===`upload`){if(!this.scanGroup)return null;let r=this.margins.get(e);if(r&&r.closed&&r.rc&&r.kind){let i=r.kind===`sup`?`inf`:r.kind===`inf`?`sup`:n(e)===`U`?`inf`:`sup`,s=(i===r.kind?null:this.scans[i]?.geometry)??null;r.rc.setOpposing(s);let c=r.rc,l=r.kind,u=r.loop??null;o=()=>this.applyShape(c,e,s,{arcada:this.scans[l]?.geometry??null,margem:u}),o(),a=this.upCase(e,t,r.kind,r.rc)}else{let n=this.placements.get(e);if(!n)return null;if(this.requireLibrary)return this.genErrors.set(e,Zg),null;a=this.upRec(e,t,n)}}else if(this._mode===`sample`){if(a=this.teeth.get(e),!a)return null;let n=t===`Onlay`?`onlay`:`crown`;if((!a.prep||a.prep.virtual&&a.prep.kind!==n)&&(this.dropMesh(a.stump),a.prep=Ku(a,n,!0),a.stump=this.addMesh(this.lathe(Yu(a,a.prep)),this.mats.stump,a),a.natural.visible=!1,this.dropSampleCase(a)),this.requireLibrary&&a.prep.kind===`onlay`&&!s.includes(`Onlay ainda não disponível pela biblioteca de dentes: foi gerada uma coroa total sobre este preparo.`)&&s.push(Qg),(this.requireLibrary||this.effectiveShape(e))&&this.sampleCase(a),a.rc){let t=a.rc,n=a;o=()=>this.applyShape(t,e,this.sampleOpposing(n)),o()}}else return null;if(this.requireLibrary&&!this.effectiveShape(e))return this.genErrors.set(e,Xg),a.crown&&(this.dropCrown(a),this.applyVis()),null;if(this.requireLibrary&&a.rc&&!this.shapeInstalled.has(a.rc))return this.genErrors.set(e,`Nenhuma coleção carregada tem este dente.`),a.crown&&(this.dropCrown(a),this.applyVis()),null;let c=[],l=()=>{for(let e of c){let t=s.indexOf(e);t>=0&&s.splice(t,1)}c=[];let t=this.effectiveShape(e),n=t?.colecao,r=this.shapeChoice.get(e),i=r?.colecao??this.defaultCollection;i&&n&&i!==n&&!this.inutil.has(`${i}|${e}`)&&c.push(`A coleção "${i}" não tem anatomia disponível para o dente ${e}. A peça foi feita com "${n}".`),r&&r.colecao===n&&r.variante!==t?.variante&&c.push(`A variante escolhida não está disponível ou não pôde ser lida. A peça foi feita com a anatomia inteira da mesma coleção.`);for(let[t,r]of this.inutil){let i=t.lastIndexOf(`|`),a=t.slice(0,i);Number(t.slice(i+1))===e&&n&&a!==n&&c.push(`O dente ${e} da coleção "${a}" não pôde ser lido (${r.replace(/\.$/,``)}). A peça foi feita com "${n}".`)}s.push(...c)};l();let u={...S(r),contato:r.contato,folga:r.folga,rampaCimento:r.rampaCimento,versaoAltura:r.versaoAltura,versaoCoroa:r.versaoCoroa};this.stroke?.rec===a&&(this.stroke=null);let d=a.data&&this.sculpted.has(a.data)?{data:a.data,params:a.params,forma:a.forma??null}:null;a.undo=[],a.adj=null,a.notes=s,a.thickness=null,this.genErrors.delete(e),this.genMargem.delete(e);let f={e:null},p=[];for(;;)try{this.buildCrown(a,u),i&&this.fit(a,u);break}catch(t){if(!(t instanceof yg))throw t;f.e??=t;let n=this.effectiveShape(e),r=n?.colecao;if(this.requireLibrary&&r&&o&&a.rc){let i=n?.variante??`anatomico`,s=i===`anatomico`?`${r}|${e}`:`${r}|${e}|${i}`;if(this.inutil.set(s,`a coroa não pôde ser montada com ele: ${t.motivo}`),p.push(s),o(),this.shapeInstalled.has(a.rc)&&this.effectiveShape(e)?.colecao){l();continue}}for(let e of p)this.inutil.delete(e);o&&a.rc&&o(),this.dropCrown(a),this.up.delete(e);let i=f.e.message;return this.genErrors.set(e,i),this.recusaDaGeracao(e,i),this.applyVis(),null}if(p.length&&this.marcasDaGeracao.set(e,p),a.forma=Ag(this.effectiveShape(e)),a.params=u,d&&this.levarAEscultura(a,d,i,s),a.rc){let t=this.check(e);if(t?.open)return this.dropCrown(a),this.up.delete(e),this.genErrors.set(e,`A peça não fechou como sólido com esta margem.`),this.recusaDaGeracao(e,`A peça não fechou como sólido.`),this.applyVis(),null;t&&t.thick!==null&&t.thick<-Yg.thick&&s.push(`A peça atravessa o preparo (espessura negativa): a linha de margem não contorna o preparo inteiro.`),t&&i&&Math.min(t.mes??1/0,t.dis??1/0)<-Yg.overlap&&s.push(`A peça ficou maior que o espaço entre os dentes vizinhos.`)}this.emLines(a),this.colorize(a),this.applyVis();let h=a.data?.encaixe?.altura;return h&&u.versaoAltura!==2?(u.altura=h.pedida,u.versaoAltura=2,{altura:u.altura,largura:u.largura,versaoAltura:2}):{altura:u.altura,largura:u.largura}}levarAEscultura(e,t,n,r){let i=e.params,a=e.data;if(!i||!a)return;let o=e=>{r.push(`A escultura manual não foi levada porque ${e}; ela continua em Versões.`)};if(n){o(`a peça foi refeita do zero, com o ajuste automático`);return}let s=t.params?Og.find(e=>t.params[e]!==i[e]):void 0;if(s){o(`${kg[s]} mudou e a peça foi refeita do zero`);return}if(JSON.stringify(t.forma??null)!==JSON.stringify(e.forma??null)){o(Tg);return}let c=t.data.encaixe?.tamanho?.fatorVL,l=a.encaixe?.tamanho?.fatorVL;if(c!==void 0&&l!==void 0&&Math.abs(c-l)>.001){let e=e=>`${e>=1?`+`:`−`}${Math.abs((e-1)*100).toFixed(1).replace(`.`,`,`)} %`;o(`a espessura vestíbulo-lingual pelo homólogo mudou (${e(c)} → ${e(l)}) e a peça foi refeita do zero`);return}let u=a.positions.slice(),d=Dg(t.data,a);if(typeof d==`string`){o(d);return}if(!d.levados.length&&!d.perdidos)return;let f=a.bruto?.conferir,p=f?f(a.positions,a.index,a.outerStart+Ru(a),{revisar:d.levados,base:u}):null;e.crown&&this.touchCrown(e),e.thickness=null;let m=!1;for(let e=0;e<u.length&&!m;e++)m=u[e]!==a.positions[e];let h=e=>e.toFixed(2).replace(`.`,`,`);if(!m){o(`ela entraria no antagonista ou no piso de 0,20 mm e a correção não coube`);return}this.sculpted.add(a),d.perdidos&&r.push(`A escultura foi levada para a peça nova, menos ${d.perdidos} ponto(s) junto à margem (até ${h(d.maiorPerdido)} mm).`);let g=p?.malha.pontos??0,_=(p?.revertidos.pontos??0)-g;g&&r.push(`A escultura não foi levada em ${g} ponto(s) onde cruzava a malha da peça (até ${h(p.malha.max)} mm): ali a peça voltou à forma do dente da biblioteca.`),_>0&&r.push(`A escultura não foi levada em ${_} ponto(s) junto ao antagonista (até ${h(p.revertidos.max)} mm): ali a peça voltou à forma do dente da biblioteca.`),p&&p.antagonista.pontos&&p.antagonista.max>.001&&r.push(`A escultura foi rebaixada em ${p.antagonista.pontos} ponto(s) (até ${h(p.antagonista.max)} mm) para não entrar no antagonista.`),p?.restam&&r.push(`A coroa ainda toca o antagonista em ${p.restam} ponto(s) (até ${h(Math.max(0,-p.folga))} mm).`)}recusaDaGeracao(e,t){if(this.genMargem.add(e),!this.autoSrc.has(e))return;let n=this.autoRefusals.get(e)??[];this.autoRefusals.set(e,n),n.length<300&&n.push({stage:`geração`,attempt:`margem em uso: ${this.autoAtual.get(e)??`linha do detector`}`,reason:t})}buildCrown(e,t){let n=e.rc?e.rc.crown(t):Xu(e,e.prep,t);e.rc&&`encaixe`in n&&(n.metodo=`encaixe`);let r=this.lathe(n);if(e.crown)kl(e.crown.geometry),e.crown.geometry=r,e.crown.material.vertexColors&&(e.crown.material.vertexColors=!1,e.crown.material.needsUpdate=!0);else{let t=this.mats.crown.clone();t.emissive.setHex(e.id===this._active?Yc.activeEmissive:0),e.crown=this.addMesh(r,t,e),e.crown.userData.piece=!0}e.data=n,e.thickness=n.espessuraAuditoria??null,e.rc&&!e.scan&&(e.crown.position.copy(e.rc.origin).applyQuaternion(e.quat).add(e.pos),e.crown.quaternion.copy(e.quat).multiply(e.rc.quat)),e.crown.updateWorldMatrix(!0,!1)}fit(t,n){if(t.rc){this.fitCase(t,t.rc,n);return}let{opp:r}=this.targets(t),i=[];for(let e of[t.mesial,t.distal]){let t=e==null?void 0:this.teeth.get(e),n=t&&(t.crown||!t.prep)?this.rep(t):null;n&&i.push(n)}let a=Math.max(_.altura[0],qu(t,t.prep)+n.cimento/1e3+zu-t.H),o=t.crown,s=e=>this.prober.signedDistance(o,e,t.data.outerStart,1),c=()=>{if(i.length)for(let r=0;r<e_;r++){let r=s(i);if(Math.abs(r-.03)<t_)break;let a=r===1/0?1.2:e(r-p,-1.2,1.2),o=e(n.largura+a/t.a*100,_.largura[0],_.largura[1]);if(o===n.largura)break;n.largura=o,this.buildCrown(t,n)}};c(),(()=>{if(r.length)for(let i=0;i<e_;i++){let i=s(r),o=h(n);if(Math.abs(i-o)<t_)break;let c=i===1/0?1:e(i-o,-1.5,1.5),l=e(n.altura+c,a,_.altura[1]);if(l===n.altura)break;n.altura=l,this.buildCrown(t,n)}})(),c(),n.largura=Math.round(n.largura*2)/2,n.altura=e(Math.round(n.altura*20)/20,_.altura[0],_.altura[1]),n.altura<a-1e-9&&(n.altura=Math.min(_.altura[1],Math.ceil(a*20-1e-9)/20)),this.buildCrown(t,n)}proximal(e){let t=e.crown,n=e.data;if(!e.nbMesh)return{plus:1/0,minus:1/0};this.syncAux(e);let r=t.geometry.getAttribute(`normal`),i=t.geometry.getAttribute(`position`),a=r.count,o=n.side[Math.ceil(fd*12)],s=new Float32Array(a).fill(1/0);this.prober.signedDistance(t,[e.nbMesh],o,1,s);let c=e.rc?(e.rc.dims.xPlus+e.rc.dims.xMinus)/2:0,l=1/0,u=1/0,d=!!n.autoAjuste,f=-1/0;if(d){f=-1/0;for(let e=n.outerStart,t=n.outerStart+Ru(n);e<t;e++)f=Math.max(f,i.getY(e));f+=1}for(let e=o;e<a;e++){let t=r.getX(e),n=i.getX(e);d&&(i.getY(e)<f||s[e]<-.45)||(t>.5&&n>=c?s[e]<l&&(l=s[e]):t<-.5&&n<=c&&s[e]<u&&(u=s[e]))}return{plus:l,minus:u}}fitCase(t,n,r){let i=n.dims,{opp:a}=this.targets(t);if(t.data?.autoAjuste){t.a=(i.xPlus-i.xMinus)/2;return}let o=r.cimento/1e3,s={plus:i.xPlus,minus:i.xMinus};(i.hasPlus||i.hasMinus)&&(r.largura=100);let c=(t,n)=>Math.abs(t-.03)<t_?0:t===1/0?1.2:e((t-p)*n,-1.2,1.2),l=.05,u=(e,t)=>{let n=-t/e;return Number.isFinite(n)?n:0},d=t=>t>l?e(1/t,1,6):1,f=()=>{if(!t.nbMesh)return;let n=1,a=1,o=null;for(let f=0;f<8;f++){let f=this.proximal(t);if(o){let e=i.xPlus!==o.xp&&Number.isFinite(f.plus)&&Number.isFinite(o.plus),t=i.xMinus!==o.xm&&Number.isFinite(f.minus)&&Number.isFinite(o.minus),r=e?u(i.xPlus-o.xp,f.plus-o.plus):0,s=t?u(o.xm-i.xMinus,f.minus-o.minus):0;if((!e||r<l)&&(!t||s<l))break;e&&(n=d(r)),t&&(a=d(s))}o={plus:f.plus,minus:f.minus,xp:i.xPlus,xm:i.xMinus};let p=i.hasPlus?e(i.xPlus+c(f.plus,n),s.plus-Jg,s.plus+Jg):i.xPlus,m=i.hasMinus?e(i.xMinus-c(f.minus,a),s.minus-Jg,s.minus+Jg):i.xMinus;if(p===i.xPlus&&m===i.xMinus||p-m<2.5)break;i.xPlus=p,i.xMinus=m,this.buildCrown(t,r)}},m=Math.max(_.altura[0],n.minHeight(o)-i.H0),g=i.heightFrom===`antagonista`?_.altura[1]:Math.max(m,Math.min(_.altura[1],i.Hmax-i.H0));this.buildCrown(t,r),f(),(()=>{if(!a.length)return;let n=t.data?.occlusion;if(!(n&&n.covered>.5))for(let n=0;n<e_;n++){let n=this.prober.signedDistance(t.crown,a,t.data.outerStart,1),i=h(r);if(Math.abs(n-i)<t_)break;let o=n===1/0?1:e(n-i,-1.5,1.5),s=e(r.altura+o,m,g);if(s===r.altura)break;r.altura=s,this.buildCrown(t,r)}})(),f(),r.altura=e(Math.round(r.altura*20)/20,_.altura[0],_.altura[1]),r.altura<m-1e-9&&(r.altura=Math.min(_.altura[1],Math.ceil(m*20-1e-9)/20)),t.a=(i.xPlus-i.xMinus)/2,this.buildCrown(t,r)}setToothLibrary(e){for(let e of this.shapeCache.values())e.dispose();return this.shapeCache.clear(),this.analyzed.clear(),this.inutil.clear(),this.marcasDaGeracao.clear(),this.library=v([...e,...g()]),this.listToothCollections()}listToothCollections(){let e=[];if(!this.library)return e;for(let t of this.library.collections.values()){if(!t.teeth.size)continue;let n=this.analyzed.get(t.name),r=[],i=new Set;for(let e of t.teeth.values()){let t=x(e);for(let e of t.filter(e=>e.fdi!==null))r.push(e.fdi);let a=t.find(e=>e.fdi===null);if(a){if(n)r.push(ne(a,n));else{let e=a.arch===`U`?[1,2]:[3,4];for(let t of e)r.push(t*10+a.position)}}for(let t of e)t.variant!==`anatomico`&&i.add(t.variant)}r.sort((e,t)=>e-t),e.push({name:t.name,fdis:r,variants:[...i],side:n?n.side:`indefinido`,warnings:n?n.warnings:[]})}return e}toothCollectionFiles(e){let t=this.library?.collections.get(e);if(!t)return[];let n=[];for(let e of t.teeth.values())for(let t of e)t.variant===`anatomico`&&n.push({path:t.path,bytes:t.bytes});return n}setPieceShape(e,t){t.colecao?this.shapeChoice.set(e,{colecao:t.colecao,variante:t.variante??`anatomico`,origem:`escolhida`}):this.shapeChoice.delete(e)}getPieceShape(e){return this.effectiveShape(e)??{colecao:null}}getPieceForma(e){let t=this._mode===`upload`?this.up.get(e):void 0;return t?.crown&&t.forma?{...t.forma}:null}setDefaultCollection(e){this.defaultCollection=e}getDefaultCollection(){return this.defaultCollection}hasTooth(e,t){return!!this.library&&!this.inutil.has(`${e}|${t}`)&&!!R(this.library,e,t)}effectiveShape(e){if(!this.library)return null;let t=this.shapeChoice.get(e);if(t?.colecao&&this.hasTooth(t.colecao,e)){let n=t.variante??`anatomico`;return n!==`anatomico`&&(this.inutil.has(`${t.colecao}|${e}|${n}`)||!R(this.library,t.colecao,e,n))?{...t,variante:`anatomico`}:t}if(this.defaultCollection&&this.hasTooth(this.defaultCollection,e))return{colecao:this.defaultCollection,variante:`anatomico`,origem:`padrao`};for(let t of this.library.collections.values())if(t.teeth.size&&this.hasTooth(t.name,e))return{colecao:t.name,variante:`anatomico`,origem:`primeira`};return null}sampleOpposing(e){let t=e.rc;return t?t.opp??null:null}shapeFor(e,t,n=`anatomico`){if(!this.library)return null;let r=`${e}|${t}|${n}`,i=this.shapeCache.get(r);if(i)return i;try{let i=oe(this.library,e,t,n);if(!i)return null;let a=this.library.collections.get(e);a&&this.analyzed.set(e,re(a));let o=new Zd(i.tooth);return this.shapeCache.set(r,o),o}catch(i){return this.inutil.set(n===`anatomico`?`${e}|${t}`:r,i instanceof Error?i.message:String(i)),null}}applyShape(e,t,n,r={}){this.shapeInstalled.get(e)?.(),this.shapeInstalled.delete(e);let i=null;for(let e=0;e<=(this.library?.collections.size??0)+2&&!i;e++){let e=this.effectiveShape(t);if(!e?.colecao||(i=this.shapeFor(e.colecao,t,e.variante),!i&&!this.inutil.has(`${e.colecao}|${t}`)&&!this.inutil.has(`${e.colecao}|${t}|${e.variante??`anatomico`}`)))return}i&&this.shapeInstalled.set(e,this.crownBuilder===`encaixe`?bg(e,i,{opp:n,arcada:r.arcada??null,margem:r.margem??null}):nf(e,i,{opp:n}))}toothThumbnail(e,t,r,i=240,a=180){if(!this.library||!m(t))return null;let o;try{if(o=oe(this.library,e,t,`anatomico`,!0),!o)return null;let n=this.library.collections.get(e);n&&this.analyzed.set(e,re(n))}catch(n){return this.inutil.set(`${e}|${t}`,n instanceof Error?n.message:String(n)),null}try{let e=ce(o.tooth,3e3,n(t)),s=le(e.mesh,e.views[r],{width:i,height:a});return{width:s.width,height:s.height,rgba:s.rgba}}catch{return null}}alturaQueVale(e,t){if(t.versaoAltura===2)return t.altura;let n=this.realCase(e);return n&&n.dims.heightFrom===`antagonista`?0:null}setPieceMinEsp(t,n){let r=this.rec(t);if(!r||!r.params||!Number.isFinite(n))return;let i=e(n,_.minEsp[0],_.minEsp[1]);r.params={...r.params,minEsp:i},r.thickness=null;let a=r.data;if(!a?.encaixe)return;let o=a.encaixe.espessura,s=mg(o,i),c=e=>{if(e){for(let t=e.length-1;t>=0;t--)e[t].startsWith(`Espessura de `)&&e.splice(t,1);s&&e.unshift(s)}};c(a.encaixe.avisos),c(a.occlusion?.warnings),this.sculpted.has(r.data)||(r.thickness=hg(o,i))}pieceWarnings(e){let t=this.rec(e);if(!t?.data)return[];let n=t.data,r=[...t.rc?.warnings??[],...n.occlusion?.warnings??[],...t.notes??[]],i=t.thickness??(t.rc&&t.params?this.thicknessOf(t):null),a=!!n.encaixe?.avisos?.some(e=>e.startsWith(`Espessura de `));if(i&&i.deficit>.02&&i.at&&!a){let e=e=>e.toFixed(2).replace(`.`,`,`);r.push(`Espessura abaixo do mínimo: ${e(i.at.thick)} mm onde o exigido é ${e(i.at.required)} mm (${i.at.where||`na parede`}, a ${e(i.at.dMargin)} mm da margem). A peça não deve ser fabricada assim.`)}return r}exportIssues(e){let t=this.rec(e);if(!t?.data||!t.params)return[];let n=[],r=t.rc?t.thickness??this.thicknessOf(t):null;if(r&&r.deficit>.02&&r.at){let e=e=>e.toFixed(2).replace(`.`,`,`);n.push(`Espessura mínima não atendida: ${e(r.at.thick)} mm (exigido ${e(r.at.required)} mm) ${r.at.where||`na parede`}, a ${e(r.at.dMargin)} mm da margem.`)}for(let e of t.notes??[])(e.startsWith(`A peça atravessa`)||e.startsWith(`A peça ficou maior`))&&n.push(e);return n}thicknessOf(e){let t=e.rc,n=e.data,r=e.params;if(!t||!n||!r)return null;let i=t.dims,a=(i.xPlus+i.xMinus)/2,o=Math.max(1,(i.xPlus-i.xMinus)/2),s=i.oz,c=i.b,l=t.thicknessAudit(n.positions,n.outerStart+Ru(n),n.positions.length/3,r.cimento/1e3,Math.max(zu,r.minEsp),(e,n)=>Qd(e-a,n-s,o,c,t.mesialSign));return e.thickness=l,l}pieceThumbnail(e,t,r=240,i=180){let a=this.rec(e);if(!a?.data)return null;let o=a.data,s=o.positions.length/3,c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0];for(let e=o.outerStart;e<s;e++)for(let t=0;t<3;t++){let n=o.positions[e*3+t];n<c[t]&&(c[t]=n),n>l[t]&&(l[t]=n)}let u=Math.floor(e/10),d=a.rc?a.rc.mesialSign:u===2||u===4?1:-1,f=W(c,l,d,n(e)),p=le({positions:o.positions,index:o.index},f[t],{width:r,height:i});return{width:p.width,height:p.height,rgba:p.rgba}}generateError(e){return this.genErrors.get(e)??null}buccalSide(e){let t=this.margins.get(e)?.rc??this.rec(e)?.rc;return t?{source:t.sideSource,confidence:t.sideConfidence,flipped:t.buccalFlipped,sagitta:t.archSagitta}:null}setBuccalFlip(e,t){let n=this.margins.get(e);if(!n?.rc)return`Este dente não tem um caso sobre a linha de margem.`;if(n.rc.buccalFlipped===t)return null;let r=n.rc.withBuccalFlip(t);if(typeof r==`string`)return r;let i=n.rc,a=this.up.get(e);return a&&(this.dropCrown(a),this.up.delete(e)),n.rc=r,this.releaseCase(i),this.applyVis(),null}check(e){let t=this.rec(e);if(!t||!t.crown||!t.data||!t.params)return null;this.root.updateMatrixWorld(!0);let n=t.crown,r=t.data.outerStart,{opp:i}=this.targets(t),a=n.geometry.getIndex(),o={occ:this.prober.signedDistance(n,i,r,1),mes:null,dis:null,thick:null,...t.params.contato===`funcional`&&t.data.encaixe?{occAlvo:t.data.encaixe.contatos.alvoOclusal}:{},open:Bd(a.array),tris:a.count/3};if(t.rc){let e=t.thickness??this.thicknessOf(t);e&&(o.thickness=e,o.thick=e.min)}if(this._mode===`sample`){let e=this.neighbor(t.mesial),i=this.neighbor(t.distal);if(o.mes=e?this.prober.signedDistance(n,[e],r,1):null,o.dis=i?this.prober.signedDistance(n,[i],r,1):null,t.stump&&!t.rc){let e=t.data.marginY+(t.data.cut?jg.onlay:jg.crown);o.thick=this.prober.thickness(n,t.stump,r,e,t.params.cimento/1e3)}}else if(t.rc&&t.prepMesh){this.syncAux(t);let e=this.proximal(t),n=t.rc.dims,r=t.rc.mesialSign>0,i=n.hasPlus?e.plus:null,a=n.hasMinus?e.minus:null;o.mes=r?i:a,o.dis=r?a:i}return o}medidasIA(e){let t=this.rec(e);if(!t||!t.crown||!t.data||!t.params)return null;let n=t.crown.geometry,r=xg(n.getAttribute(`position`).array,n.getIndex()?.array??[],t.data.outerStart),i=this.check(e);i&&Number.isFinite(i.occ)&&(r.folga_min=i.occ),i&&i.thick!=null&&Number.isFinite(i.thick)&&(r.espessura_min=i.thick);let a=i?[i.mes,i.dis].filter(e=>e!=null&&Number.isFinite(e)):[];a.length&&(r.contato_proximal_min=Math.min(...a));let o=this._mode===`upload`&&t.scan?Sg(this.found[t.scan]?.det.dentes,e):{},s=this.folgaDosVizinhos(t);return s!=null&&(o.vizinho_folga_min=s),{fdi:e,contexto:o,feito:r}}folgasDosVizinhos=new WeakMap;folgaDosVizinhos(e){if(!e.rc||!e.nbMesh)return null;let{opp:t}=this.targets(e),n=t[0]?.geometry??null,r=this.folgasDosVizinhos.get(e.rc);if(r&&r.opp===n)return r.folga;let i=null;if(t.length){this.syncAux(e);let n=e.nbMesh.geometry;n.getAttribute(`normal`)||n.computeVertexNormals();let r=this.prober.signedDistance(e.nbMesh,t,0,2);i=Number.isFinite(r)?r:null}return this.folgasDosVizinhos.set(e.rc,{opp:n,folga:i}),i}removePiece(e){let t=this.rec(e);t?(this.dropCrown(t),this._mode===`sample`&&t.prep?.virtual&&(this.dropMesh(t.stump),t.stump=null,t.prep=null),this._mode===`upload`&&(this.up.delete(e),this.dropPlacement(e),this.dropMargin(e,!0),this.releaseCase(t.rc)),this.applyVis()):this._mode===`upload`&&(this.dropPlacement(e),this.dropMargin(e,!0))}dropPlacement(e){this.markers.get(e)?.removeFromParent(),this.markers.delete(e),this.placements.delete(e)}setPlanHighlight(e){this.plan=new Set(e),this._mode===`sample`&&this.applyVis()}setActive(e){this._active=e;for(let t of[...this.teeth.values(),...this.up.values()])t.crown&&(t.crown.material.emissive.setHex(t.id===e?Yc.activeEmissive:0),this.colorize(t));this.applyVis()}setLayers(e){this.layers={...e};let t=this.rec(this._active);t&&this.colorize(t),this.applyVis()}colorize(e){let t=e.crown;if(!t||!e.data)return;let n=t.material;if(!this.layers.contatos||e.id!==this._active){n.vertexColors&&(n.vertexColors=!1,n.needsUpdate=!0);return}let r=t.geometry,i=r.getAttribute(`position`).count,a=new Float32Array(i).fill(1/0),{same:o,opp:s}=this.targets(e);e.nbMesh&&(this.syncAux(e),o.push(e.nbMesh)),this.prober.signedDistance(t,[...o,...s],e.data.outerStart+(e.data.marginN?Ru(e.data):0),1,a);let c=new Float32Array(i*3),l=new Uint8Array(i*3),u=new Ut;for(let e=0;e<i;e++){let t=du[fu(a[e])];u.setHex(t),c[e*3]=u.r,c[e*3+1]=u.g,c[e*3+2]=u.b,l[e*3]=t>>16,l[e*3+1]=t>>8&255,l[e*3+2]=t&255}r.setAttribute(`color`,new ht(c,3)),r.userData.srgb=l,n.vertexColors||(n.vertexColors=!0,n.needsUpdate=!0)}emLines(e){let t=e.crown;if(!t||!e.data)return;let n=Zu(e.data.positions,e.data.side,i_(e.data));e.lines?(e.lines.geometry.dispose(),e.lines.geometry=new Mt):(e.lines=new Ze(new Mt,this.mats.line),e.lines.renderOrder=10,t.add(e.lines)),e.lines.geometry.setAttribute(`position`,new ht(n,3)),e.lines.visible=this.layers.emergencia,e.lines.updateWorldMatrix(!0,!1)}applyVis(){let e=this.rec(this._active),t=this.layers;if(this._mode===`sample`){for(let n of this.teeth.values()){let r=`arch:`+n.arch,i=!!e&&(!t.antagonista&&n.arch!==e.arch||!t.adjacentes&&n.arch===e.arch&&n.id!==e.id),a=!i&&this.shown(r);n.natural&&(n.natural.visible=a&&!n.prep,this.look(n.natural,this.plan.has(n.id)&&!n.prep?this.mats.plan:this.mats.tooth,r)),n.stump&&(n.stump.visible=a,this.look(n.stump,this.mats.stump,r)),n.crown&&(n.crown.visible=!i&&this.shown(`piece:`+n.id),this.lookCrown(n))}for(let n of this.gums){let r=`arch:`+n.userData.arch;n.visible=!(e&&!t.antagonista&&n.userData.arch!==e.arch)&&this.shown(r),this.look(n,this.mats.gum,r)}}else if(this._mode===`upload`){for(let[e,t]of this.extras)t.mesh.visible=this.shown(e),this.look(t.mesh,this.baseDoExtra(t.src),e);for(let e of Object.keys(this.scans)){let t=this.scans[e],n=`scan:`+e;t.visible=this.scanLayer(e)&&this.shown(n)&&!this.coberto(e),this.look(t,this.mats.scan,n)}for(let e of this.up.values())e.crown&&(e.crown.visible=this.shown(`piece:`+e.id),this.lookCrown(e));for(let[e,t]of this.markers)t.visible=!this.up.get(e)?.crown;for(let e of this.margins.keys())this.applyMarginLook(e)}for(let e of[...this.teeth.values(),...this.up.values()])e.lines&&(e.lines.visible=t.emergencia);this.syncObjects()}scanLayer(e){if(this.marking!=null)return e===(Math.floor(this.marking/10)<=2?`sup`:`inf`);let t=this.rec(this._active);return!t||this.layers.antagonista||e===t.scan}coberto(e){if(this.marking!=null)return!1;for(let[t,n]of this.extras)if(n.src.scan===e&&n.src.tone===`modelo`&&this.shown(t)&&this.opacityOf(t)>=.995)return!0;return!1}baseDoExtra(e){return e.tone===`troquel`?this.mats.stump:e.tone===`cera`?e.colors&&e.colors.length===e.positions.length?this.mats.ceraCor:this.mats.cera:this.mats.tooth}setExtraMeshes(e){let t=new Set(e.map(e=>e.key));for(let[e,n]of[...this.extras])t.has(e)||(this.dropMesh(n.mesh),this.extras.delete(e));if(this._mode===`upload`&&this.scanGroup){for(let t of e){let e=this.extras.get(t.key);if(e&&e.src.positions===t.positions&&e.src.indices===t.indices&&e.src.colors===t.colors&&e.src.tone===t.tone){e.src=t,e.mesh.position.set(...t.offset??[0,0,0]),e.mesh.updateMatrixWorld(!0);continue}e&&(this.dropMesh(e.mesh),this.extras.delete(t.key));let n=new Mt;if(n.setAttribute(`position`,new ht(t.positions,3)),n.setIndex(new ht(t.indices,1)),wl(n,!1),Dl(n,!0),t.tone===`cera`&&t.colors&&t.colors.length===t.positions.length){n.setAttribute(`color`,new ht(t.colors,3));let e=new Uint8Array(t.colors.length);for(let n=0;n<e.length;n++)e[n]=Math.round(255*Math.min(1,Math.max(0,t.colors[n])));n.userData.srgb=e}let r=new Ue(n,this.baseDoExtra(t));r.position.set(...t.offset??[0,0,0]),this.scanGroup.add(r),this.extras.set(t.key,{mesh:r,src:t})}this.root.updateMatrixWorld(!0)}this.applyVis()}shown(e){return this.prefs.get(e)?.visible??!0}opacityOf(e){return this.prefs.get(e)?.opacity??1}faded(e,t){let n=this.opacityOf(t);if(n>=.995)return e;let r=t+`|`+e.uuid,i=this.fades.get(r);return i||(i=e.clone(),i.transparent=!0,this.fades.set(r,i)),i.opacity=n,i.depthWrite=!1,i}look(e,t,n){let r=this.faded(t,n);e.material=r,e.userData.obj=n,e.renderOrder=r===t?0:1}lookCrown(e){let t=e.crown;if(!t)return;let n=`piece:`+e.id,r=this.opacityOf(n),i=t.material,a=r<.995;t.userData.obj=n,i.transparent!==a&&(i.transparent=a,i.needsUpdate=!0),i.opacity=a?r:1,i.depthWrite=!a,t.renderOrder=a?2:0}applyMarginLook(e){let t=this.margins.get(e);if(!t)return;let n=`margin:`+e,r=this.shown(n),i=this.up.get(e)?.crown,a=t.closed&&!!i&&i.visible&&this.opacityOf(`piece:`+e)>=.995&&e!==this._active;t.line&&(t.line.visible=r&&!a,t.line.material=this.faded(this.mats.line,n)),t.tube&&(t.tube.visible=r&&!a,t.tube.material=this.faded(this.mats.mark,n));for(let e of t.dots)e.visible=r,e.material=this.faded(this.mats.mark,n)}listObjects(){let e=[],t=(t,n,r,i)=>{e.push({key:t,kind:n,label:r,...i==null?{}:{tooth:i},visible:this.shown(t),opacity:this.opacityOf(t)})};if(this._mode===`upload`){let e={sup:`Arcada superior`,inf:`Arcada inferior`,mord:`Registro de mordida`};for(let n of[`sup`,`inf`,`mord`])this.scans[n]&&t(`scan:`+n,`scan`,e[n])}else this._mode===`sample`&&(t(`arch:U`,`arch`,`Arcada superior`),t(`arch:L`,`arch`,`Arcada inferior`));let n=[...this.teeth.values(),...this.up.values()].filter(e=>e.crown).sort((e,t)=>e.id-t.id);for(let e of n)t(`piece:`+e.id,`piece`,(e.prep?a_(e.prep):`Coroa total`)+` `+e.id,e.id);for(let e of[...this.margins.keys()].sort((e,t)=>e-t))this.margins.get(e).pts.length&&t(`margin:`+e,`margin`,`Margem `+e,e);for(let[e,n]of[...this.extras].sort((e,t)=>e[0].localeCompare(t[0])))t(e,`model`,n.src.label,n.src.tooth);return e}setObjectVisible(e,t){this.prefs.set(e,{visible:t,opacity:this.opacityOf(e)}),this.applyVis()}setObjectOpacity(e,t){let n=Number.isFinite(t)?Math.min(1,Math.max(.1,t)):1;this.prefs.set(e,{visible:this.shown(e),opacity:n}),this.applyVis()}syncObjects(){let e=this.listObjects().map(e=>e.key+`=`+e.label).join(`|`);e!==this.objectKeys&&(this.objectKeys=e,this.onObjectsChange?.())}solid(e){let t=e.material;return!(t.transparent&&t.opacity<.5)}pickTargets(){let e=[];return this.content.traverseVisible(t=>{let n=t;n.isMesh&&!n.userData.dot&&!n.userData.glOnly&&this.solid(n)&&e.push(n)}),e}scanTargets(){return Object.values(this.scans).filter(e=>e.visible)}activeCrown(){let e=this.rec(this._active);return e?.crown&&e.crown.visible&&this.solid(e.crown)?e.crown:null}addMeasurePoint(e){this.measurePts.length>=2&&this.clearMeasure(),this.measurePts.push(e.clone());let t=new Ue(this.measGeo,this.mats.measP);if(t.position.copy(e),t.userData.dot=Wg,t.renderOrder=20,this.overlay.add(t),this.measurePts.length<2)return null;let n=new dn(new Mt().setFromPoints(this.measurePts),this.mats.meas);return n.renderOrder=20,this.overlay.add(n),this.overlay.updateMatrixWorld(!0),this.measurePts[0].distanceTo(this.measurePts[1])}clearMeasure(){this.measurePts.length=0;for(let e of[...this.overlay.children]){let t=e.geometry;t!==this.measGeo&&t.dispose()}this.overlay.clear()}measureMid(){return this.measurePts.length===2?this.measurePts[0].clone().add(this.measurePts[1]).multiplyScalar(.5):null}canUndo(){return(this.rec(this._active)?.undo.length??0)>0}beginStroke(){let e=this.rec(this._active);if(!e||!e.crown||!e.data)return!1;let t=e.data.positions.slice(),n={rec:e,changed:!1,notes:e.notes?.slice(),base:t};return this.stroke=n,e.undo.push(t),e.undo.length>40&&(n.dropped=e.undo.shift()),!0}sculptAt(e,t){let n=this.stroke;if(!n)return!1;let r=n.rec,i=r.crown,a=r.data;if(!i||!a)return!1;let o=i.geometry;i.updateWorldMatrix(!0,!1);let s=i.worldToLocal(e.clone());t===`suavizar`&&!r.adj&&(r.adj=Hd(a.index,a.positions.length/3));let c=a.outerStart+Ru(a),l=a.positions,u=l.length/3,d=o.getAttribute(`normal`).array,f=[];for(let e=c;e<u;e++)Math.hypot(l[e*3]-s.x,l[e*3+1]-s.y,l[e*3+2]-s.z)<1.4&&f.push(e,l[e*3],l[e*3+1],l[e*3+2],d[e*3],d[e*3+1],d[e*3+2]);if(!ae(a.positions,d,r.adj??[],c,[s.x,s.y,s.z],t))return!1;if(t!==`adicionar`&&r.rc&&r.params){let e=r.params.cimento/1e3,n=0;for(let t=0;t<f.length;t+=7)r.rc.constrain(l,f[t],e,.2,!1)>1e-4&&n++;if(t===`remover`)for(let e=0;e<f.length;e+=7){let t=f[e],n=l[t*3]-f[e+1],r=l[t*3+1]-f[e+2],i=l[t*3+2]-f[e+3];n*f[e+4]+r*f[e+5]+i*f[e+6]>1e-7&&(l[t*3]=f[e+1],l[t*3+1]=f[e+2],l[t*3+2]=f[e+3])}if(n){r.notes??=[];let e=`A escultura parou no piso de 0,20 mm: a peça não fica mais fina que isso sobre o preparo.`;r.notes.includes(e)||r.notes.push(e)}}return r.thickness=null,n.changed=!0,this.touchCrown(r),!0}prepararAumento(){let e=this.stroke,t=e?.rec.data;e&&t&&!e.trava&&(e.trava=new Ld(t.positions,t.index,t.outerStart+Ru(t)))}puxar(e,t,n){let r=this.stroke;if(!r)return!1;let i=r.rec,a=i.crown,o=i.data;if(!a||!o)return!1;a.updateWorldMatrix(!0,!1);let s=a.worldToLocal(e.clone()),c=a.worldToLocal(t.clone()),l=o.positions,u=r.base,d=o.outerStart+Ru(o),f=[c.x-s.x,c.y-s.y,c.z-s.z];if(Math.hypot(f[0],f[1],f[2])<1e-6&&!r.changed)return!1;let p=i.rc,m=(i.params?.cimento??0)/1e3,h=new Float32Array(3),g=p&&i.params?(e,t,n,r)=>(h[0]=e,h[1]=t,h[2]=n,p.constrain(h,0,m,zu,!1,r)>1e-4):void 0;this.prepararAumento();let _=V(l,u,o.index,d,[s.x,s.y,s.z],f,ie(n),g,r.trava);if(!_.moved.length)return!1;let v=_.floored;if(i.notes=r.notes?.slice(),v){i.notes??=[];let e=`A escultura parou no piso de 0,20 mm: a peça não fica mais fina que isso sobre o preparo.`;i.notes.includes(e)||i.notes.push(e)}if(_.limited){i.notes??=[];let e=`O aumento chegou ao limite deste traço; para ir além, solte e puxe de novo.`;i.notes.includes(e)||i.notes.push(e)}let y=!1;for(let e=0;e<l.length&&!y;e++)y=l[e]!==u[e];return r.changed=y,i.thickness=null,this.touchCrown(i),!0}endStroke(){let e=this.stroke;if(this.stroke=null,!e)return null;e.trava?.dispose();let t=e.rec;return e.changed?(t.data&&this.sculpted.add(t.data),this.emLines(t),this.colorize(t),t.id):(t.undo.pop(),null)}cancelStroke(){let e=this.stroke;if(this.stroke=null,!e)return!1;e.trava?.dispose();let t=e.rec,n=t.undo.pop();return e.dropped&&t.undo.unshift(e.dropped),t.notes=e.notes,!e.changed||!n||!t.crown||!t.data?!1:(t.data.positions.set(n),t.thickness=null,this.touchCrown(t),this.emLines(t),this.colorize(t),!0)}undo(){let e=this.rec(this._active);if(!e||!e.crown||!e.data||this.stroke)return!1;let t=e.undo.pop();return t?(e.data.positions.set(t),this.touchCrown(e),this.emLines(e),this.colorize(e),!0):!1}touchCrown(e){let t=e.crown.geometry;t.getAttribute(`position`).needsUpdate=!0,wl(t),Ol(t)}getPieceSnapshot(e){if(this._mode!==`upload`||!this.scanGroup)return null;let t=this.up.get(e);if(!t||!t.crown||!t.data||!t.params||!t.prep||!t.scan)return null;let n=this.scans[t.scan];if(!n)return null;this.root.updateMatrixWorld(!0);let r=t.data,i=r.positions.length/3,a=new st().multiplyMatrices(this.scanGroup.matrixWorld.clone().invert(),t.crown.matrixWorld),o=new Float32Array(i*3),s=new Q;for(let e=0;e<i;e++)s.set(r.positions[e*3],r.positions[e*3+1],r.positions[e*3+2]).applyMatrix4(a),o[e*3]=s.x,o[e*3+1]=s.y,o[e*3+2]=s.z;n.geometry.computeBoundingBox();let c=n.geometry.boundingBox,l=n.geometry.getAttribute(`position`),u=n.geometry.getIndex(),d={};for(let e of Object.keys(r)){if(e===`positions`||e===`index`||e===`lowIndex`||e===`starts`||e===`outerStart`||e===`side`||e===`marginY`||e===`cut`)continue;let t=N(r[e]);t!==void 0&&(d[e]=t)}let f=this.placements.get(e),p={frame:{pos:t.pos.toArray(),quat:t.quat.toArray()},shape:{type:t.type,a:t.a,b:t.b,H:t.H},starts:r.starts.slice(),extra:d};t.rc?(p.dims={xPlus:t.rc.dims.xPlus,xMinus:t.rc.dims.xMinus},p.ring=Array.from(t.rc.ring)):f&&(p.placement={p:f.p.toArray(),n:f.n.toArray()});let m=this.getPieceForma(e)??this.getPieceShape(e);return{version:1,tooth:e,piece:a_(t.prep),params:{...t.params},shape:m.colecao?{colecao:m.colecao,variante:m.variante??`anatomico`}:{colecao:null},scan:t.scan,scanTriangles:(u?u.count:l.count)/3,scanBox:[...c.min.toArray(),...c.max.toArray()],onMargin:!!t.rc,sculpted:this.sculpted.has(r),...r.metodo===`encaixe`?{metodo:`encaixe`}:{},positions:o,indices:r.index.slice(),outerStart:r.outerStart,side:r.side.slice(),marginY:r.marginY,cut:r.cut,local:r.positions.slice(),lowIndex:r.lowIndex.slice(),engine:p}}restorePiece(e,t){let r=H(t);if(r)return r;if(!m(e)||t.tooth!==e)return`Esta peça foi guardada para outro dente.`;if(this._mode!==`upload`||!this.scanGroup)return`Carregue os scans do caso antes de restaurar a peça.`;let i=this.scans[t.scan];if(!i)return`O scan em que a peça foi feita não está carregado.`;i.geometry.computeBoundingBox();let a=i.geometry.boundingBox,o=i.geometry.getAttribute(`position`),s=i.geometry.getIndex(),c=[...a.min.toArray(),...a.max.toArray()];if((s?s.count:o.count)/3!==t.scanTriangles||c.some((e,n)=>Math.abs(e-t.scanBox[n])>.001))return`O scan carregado não é o mesmo em que a peça foi feita. A peça não foi restaurada.`;let l=L(t.engine),u=t.engine.shape,d=new Q().fromArray(l.pos),f=new Ct().fromArray(l.quat).normalize(),p;try{if(t.onMargin){let r=this.margins.get(e);if(!r||!r.closed||!r.rc||r.kind!==t.scan)return`A peça foi feita sobre a linha de margem: restaure a margem do dente antes da peça.`;let i=`A linha de margem do dente não é a mesma em que a peça foi feita. A peça não foi restaurada.`;if(r.rc.origin.distanceTo(d)>n_.origin)return i;let a=t.engine.ring;if(Array.isArray(a)&&a.length===r.rc.ring.length){let e=0;for(let t=0;t<a.length;t++){let n=a[t];if(typeof n!=`number`){e=1/0;break}e=Math.max(e,Math.abs(n-r.rc.ring[t]))}if(e>n_.ring)return i}let o=r.kind===`sup`?`inf`:r.kind===`inf`?`sup`:n(e)===`U`?`inf`:`sup`,s=(o===r.kind?null:this.scans[o]?.geometry)??null;r.rc.setOpposing(s),this.setPieceShape(e,t.shape);try{this.applyShape(r.rc,e,s,{arcada:this.scans[r.kind]?.geometry??null,margem:r.loop??null})}catch{}let c=this.up.get(e);c&&this.dropCrown(c),p=this.upCase(e,t.piece,r.kind,r.rc);let l=t.engine.dims;l&&typeof l.xPlus==`number`&&typeof l.xMinus==`number`&&Number.isFinite(l.xPlus)&&Number.isFinite(l.xMinus)&&l.xPlus>l.xMinus&&(r.rc.dims.xPlus=l.xPlus,r.rc.dims.xMinus=l.xMinus)}else{let n=t.engine.placement,r=e=>Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`&&Number.isFinite(e));if(!n||!r(n.p)||!r(n.n))return`O instantâneo da peça não tem a marcação do preparo.`;if(this.scanGroup.updateWorldMatrix(!0,!1),!this.place(e,this.scanGroup.localToWorld(new Q().fromArray(n.p)),new Q().fromArray(n.n),t.scan))return`Não foi possível recolocar a marcação do preparo.`;let i=this.up.get(e);i&&this.dropCrown(i),p=this.upRec(e,t.piece,this.placements.get(e))}p.type=u.type,p.a=u.a,p.b=u.b,p.H=u.H,p.pos.copy(d),p.quat.copy(f);let r=N(t.engine.extra),i=Array.isArray(t.engine.starts)&&t.engine.starts.every(e=>Number.isInteger(e))?t.engine.starts.slice():[],a={...r??{},positions:t.local.slice(),index:t.indices.slice(),lowIndex:t.lowIndex.slice(),starts:i,outerStart:t.outerStart,side:t.side.slice(),marginY:t.marginY,cut:t.cut},o=new Mt;o.setAttribute(`position`,new ht(a.positions,3)),o.setIndex(new ht(a.index,1)),o.userData.lowIndex=a.lowIndex,o.userData.closed=!0,Dl(o,!0),wl(o);let s=this.mats.crown.clone();return s.emissive.setHex(e===this._active?Yc.activeEmissive:0),p.crown=this.addMesh(o,s,p),p.crown.userData.piece=!0,p.data=a,p.params={...t.params},p.undo=[],p.adj=null,p.forma=Ag(t.shape),t.sculpted&&this.sculpted.add(a),this.genErrors.delete(e),this.emLines(p),this.colorize(p),this.applyVis(),null}catch(t){let n=this.up.get(e);return n&&(this.dropCrown(n),this.up.delete(e),this.releaseCase(n.rc)),this.applyVis(),`Não foi possível restaurar a peça: `+(t instanceof Error?t.message:`erro inesperado`)+`.`}}exportFiles(e){let{ids:t,format:n,perPiece:r,model:i,base:a,slugs:o}=e;if(n!==`STL`&&n!==`OBJ`&&n!==`PLY`)throw Error(`Formato de exportação não suportado: `+String(n));this.root.updateMatrixWorld(!0);let s=n.toLowerCase(),c=this._mode===`upload`&&this.scanGroup?this.scanGroup.matrixWorld.clone().invert():void 0,l=[],u=t.map(e=>this.rec(e)).filter(e=>!!e&&!!e.crown);if(r)for(let e of u)l.push({name:`${a}_${e.id}_${o[e.id]||`peca`}.${s}`,blob:O(n,[o_(e.crown,c)])});else u.length&&l.push({name:`${a}_pecas.${s}`,blob:O(n,u.map(e=>o_(e.crown,c)))});if(i){let e=[];if(this._mode===`sample`){for(let t of this.teeth.values()){let n=t.prep?t.stump:t.natural;n&&e.push(n)}e.push(...this.gums)}else e.push(...Object.values(this.scans));e.length&&l.push({name:`${a}_modelo.${s}`,blob:O(n,e.map(e=>o_(e,c)))})}return l}},c_=[2.7,3.6,4.8,6.4,8.5],l_=192,u_=(e=0,t=!0)=>({tier:e,relief:t,calm:0,hold:12,since:1e9}),d_=(()=>{let e=c_.findIndex(e=>e>=6);return e<0?c_.length:e})();function f_(e,t,n,r=t){let i=c_.length-1,a=d_,o=e.since+1;if(n)return{...e,calm:0,since:o};if(t>50){let n=t>0?r/t:0,s=e.tier,c=e.relief;s<a?n>=.5&&s<i?s++:c?c=!1:n>=.3&&s+1<a?s++:s=a:n>=.3&&s<i&&s++,s>=a&&(c=!0);let l=s!==e.tier||c!==e.relief,u=e.since<=60&&l?Math.min(l_,e.hold*2):e.hold;return{tier:s,relief:c,calm:0,hold:u,since:o}}if(t<36){let t=e.calm+1;return t>=e.hold&&(e.tier>0||!e.relief)?e.relief?{...e,tier:e.tier-1,relief:e.tier-1<a?!1:e.relief,calm:0,since:0}:{...e,relief:!0,calm:0,since:0}:{...e,calm:t,since:o}}return{...e,calm:0,since:o}}var p_=4e3,m_=[.4,.16,.064,.0256,.01],h_=1.25,g_=[3,1,2,0,4],__=class{src;levels=m_.map(()=>void 0);from=m_.map(()=>-1);blocks=null;edge;triangles;tasks=[];auxTask=null;aux=null;auxLevels=m_.map(()=>void 0);constructor(e){this.src=e,this.triangles=Math.floor(e.index.length/3),this.edge=Dc(e.positions,e.index),this.tasks.push(this.run())}curv=null;curvLevels=m_.map(()=>void 0);*run(){this.triangles>2e4&&(this.blocks=yield*Nc(this.src.positions,this.src.index)),yield*this.build(g_[0]),this.curv=yield*Mc(this.src.positions,this.src.normals,this.src.index,32);for(let e=1;e<g_.length;e++)yield*this.build(g_[e])}*build(e){if(this.levels[e])return;let t=-1;for(let n=e-1;n>=0;n--)if(this.levels[n]){t=n;break}let n=yield*jc(t<0?this.src:this.levels[t],Math.max(200,Math.round(this.triangles*m_[e])));n.index.length/3>p_&&(n.blocks=yield*Nc(n.positions,n.index)),this.from[e]=t,this.levels[e]=n}get pending(){return this.tasks.length>0||this.auxTask!==null}pump(e,t){for(;t()<e;){let e=this.auxTask??this.tasks[0];if(!e)return!1;e.next().done&&(e===this.auxTask?this.auxTask=null:this.tasks.shift())}return this.pending}drain(){for(;this.pending;)this.pump(1/0,()=>0)}ensureSome(){if(!this.levels.some(Boolean)&&!this.levels[3]){let e=Ec(jc(this.src,Math.max(200,Math.round(this.triangles*m_[3]))));this.from[3]=-1,this.levels[3]=e}}wantAux(e){if(this.aux||this.auxTask)return;let t=this;this.auxTask=(function*(){t.aux=yield*e()})()}get auxReady(){return this.aux!==null}auxOf(e){if(!this.aux)return null;if(e<0)return this.aux;let t=this.auxLevels[e];if(t)return t;let n=this.levels[e];if(!n)return null;let r=this.from[e],i=r<0?this.aux:this.auxOf(r);if(!i)return null;let a=n.positions.length/3,o=new Float32Array(a),s=new Uint32Array(a),c=n.map;for(let e=0;e<c.length;e++)o[c[e]]+=i[e],s[c[e]]++;t=new Uint8Array(a);for(let e=0;e<a;e++)t[e]=s[e]?Math.round(o[e]/s[e]):0;return this.auxLevels[e]=t,t}curvOf(e){if(!this.curv)return null;if(e<0)return this.curv;let t=this.curvLevels[e];if(t)return t;let n=this.levels[e];if(!n)return null;let r=this.from[e],i=r<0?this.curv:this.curvOf(r);if(!i)return null;let a=n.positions.length/3,o=new Float32Array(a),s=new Uint32Array(a),c=n.map;for(let e=0;e<c.length;e++)o[c[e]]+=i[e],s[c[e]]++;t=new Uint8Array(a);for(let e=0;e<a;e++)t[e]=s[e]?Math.round(o[e]/s[e]):128;return this.curvLevels[e]=t,t}choose(e,t){let n=e/this.edge,r=t*h_,i=-1;for(let e=m_.length-1;e>=0;e--){let t=this.levels[e];if((t?t.edge:this.edge/Math.sqrt(m_[e]))*n<=r){i=e;break}}if(i<0)return-1;if(this.levels[i])return i;for(let e=i+1;e<m_.length;e++)if(this.levels[e])return e;for(let e=i-1;e>=0;e--)if(this.levels[e])return e;return-2}},v_=26e5,y_=6e6,b_=2048,x_=8,S_=8;function C_(e,t,n){let r=Math.min(2,Math.max(1,n||1)),i=46e5;return e*t*r*r>i&&(r=Math.max(1,Math.sqrt(i/(e*t)))),r}var w_=()=>typeof performance<`u`?performance.now():Date.now();function T_(e,t,n,r){if(e.length!==t.length||n.length!==r.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;for(let e=0;e<n.length;e++)if(n[e]!==r[e])return!1;return!0}var E_=class{geo=new WeakMap;fast=new Go;fine=new Go;fastLayer=null;fineLayer=null;mv=new st;v=new Q;images=new WeakMap;scratch;small=new Uint8ClampedArray;big=new Uint8ClampedArray;job=null;fineSig=null;fineRefs=[];fineSS=1;fineLook=null;gSig=null;gRefs=[];gFrame=null;gSS=1;shownSig=null;shownRefs=[];shownDepth=null;shownScale=1;ts=u_();scanMs=0;built=!1;deferBuild=!1;starving=!1;canDefer=!1;vertexLighting=!0;timeScale=1;preps=new Set;auxEpoch=0;onPrepared=null;minTier=0;maxTier=c_.length-1;lockRelief=null;get tierState(){return this.ts}fixTier(e,t=e!==null||null){this.minTier=e===null?0:Math.max(0,Math.min(c_.length-1,e)),this.maxTier=e===null?c_.length-1:this.minTier,this.lockRelief=t,this.ts={...this.ts,tier:Math.max(this.minTier,Math.min(this.maxTier,this.ts.tier)),relief:t??this.ts.relief}}get fastLevel(){return{edge:c_[this.ts.tier],relief:this.ts.relief}}get fastTier(){return this.ts.tier}get preparing(){for(let e of this.preps)if(e.pending)return!0;return!1}pump(e){let t=w_()+e,n=!1;for(let e of[...this.preps]){let r=e.auxReady;if(e.pump(t,w_)?n=!0:e.pending||this.preps.delete(e),!r&&e.auxReady&&(this.auxEpoch++,this.onPrepared?.()),w_()>=t)return!0}return n}lastShown={data:new Uint8ClampedArray,width:0,height:0,seq:0};extDepth=null;lastFineMs=1/0;lastFine={ms:0,triangles:0,width:0,height:0,relight:!1};lastFast={ms:0,triangles:0,width:0,height:0,scanMs:0,rebuilt:!1};shownBand=null;lastPreview={ms:0,width:0,height:0};get refining(){return this.job!==null}cancel(){this.job=null}cache(e){let t=this.geo.get(e);return t||(t={},this.geo.set(e,t)),t}classOf(e,t){return Qc(e.userData,t)}prepOf(e,t,n,r,i){return(!e.prep||e.prepKey!==i)&&(e.prep&&this.preps.delete(e.prep),e.prep=new __({positions:t,normals:n,index:r}),e.prepKey=i,this.preps.add(e.prep)),e.prep}auxOf(e,t,n,r,i,a,o){return t===1&&o?(o.auxReady||(o.wantAux(()=>(function*(){return(yield*Uc(n,r,i)).weights})()),this.preps.add(o)),o.aux):t===2?((!e.aux||e.auxKey!==a)&&(e.aux=Wc(n),e.auxKey=a),e.aux):null}bandRows(e,t,n){let r=S_*Math.max(1,Math.round(n));return{r0:Math.max(0,Math.floor(e.y0)-r),r1:Math.min(t,Math.ceil(e.y1)+r)}}cullRows=null;arrays(e,t,n){let r=e.getIndex(),i=t.version*4096+(r?r.version:0),a,o;if(r)a=r.array;else{if(!n.trivial||n.trivial.length!==t.count){n.trivial=new Uint32Array(t.count);for(let e=0;e<t.count;e++)n.trivial[e]=e}a=n.trivial}let s=e.getAttribute(`normal`);return s instanceof ht&&s.count===t.count&&s.itemSize===3?o=s.array:((!n.normals||n.normalsKey!==i)&&(n.normals=Wo(t.array,a),n.normalsKey=i),o=n.normals),{index:a,normals:o,key:i}}preload(e){let t=e.getAttribute(`position`);if(!t||!(t instanceof ht)||t.count<3)return;let n=this.cache(e),{index:r,normals:i,key:a}=this.arrays(e,t,n);r.length/3>2e4&&this.prepOf(n,t.array,i,r,a)}toMesh(e,t,n,r,i,a,o,s=0,c=0,l=null){let u=e.geometry,d=u.getAttribute(`position`);if(!d||!(d instanceof ht)||d.count<3)return null;let f=this.cache(u),p=this.arrays(u,d,f),m=p.key,h=p.index,g=d.array,_=p.normals,v=e.material,y=v.vertexColors&&u.userData.srgb instanceof Uint8Array&&u.userData.srgb.length===d.count*3?u.userData.srgb:null,b=v.color?v.color.getHex():13421772,x=this.classOf(e,b),S=h.length/3,C=S>2e4||a&&x===1?this.prepOf(f,d.array,_,h,m):null,w=a?this.auxOf(f,x,d.array,_,h,m,C):null,T=this.mv.multiplyMatrices(t,e.matrixWorld).elements.slice(),E=null,D=0;if(C&&C.blocks&&l){let e=Pc(C.blocks,T,l[0],l[5],Ka,this.cullRows);h=C.blocks.index,E=e.ranges,D=e.depth}let O=!0,k=!1,A=null;if(n&&!r){let n=u.userData.lowIndex;if(n)h=n,O=!1,E=null;else if(C&&S>5e4&&!y&&s>0){if(!(D>0)){let n=e.geometry;n.boundingSphere||n.computeBoundingSphere(),D=-this.v.copy(n.boundingSphere.center).applyMatrix4(e.matrixWorld).applyMatrix4(t).z}let n=C.edge*s/Math.max(D,Ka),r=C.choose(n,c);if(r===-2){if(this.deferBuild&&this.canDefer)return this.starving=!0,null;C.ensureSome(),this.built=!0,r=C.choose(n,c)}if(r===-1&&!C.blocks&&S>2e4){if(!C.levels.some(Boolean)){if(this.deferBuild&&this.canDefer)return this.starving=!0,null;C.ensureSome(),this.built=!0}r=C.levels.findIndex(Boolean)}if(o&&r>=-1&&(k=!0,A=C.curvOf(r)),r>=0){let e=C.levels[r];if(g=e.positions,_=e.normals,h=e.index,E=null,y=null,O=!1,w=a?C.auxOf(r):null,e.blocks&&l){let t=Pc(e.blocks,T,l[0],l[5],Ka,this.cullRows);h=e.blocks.index,E=t.ranges}}}}return{positions:g,normals:_,index:h,ranges:E,modelView:T,color:b,cls:x,aux:w,colors:y,vlit:k,curv:A,emissive:v.emissive?v.emissive.getHex():0,roughness:typeof v.roughness==`number`?v.roughness:.5,cull:u.userData.closed===!0,wire:i&&(O||n)}}collect(e,t,n,r){let i=t.matrixWorldInverse,a=this.v,o={opaque:[],layers:[],triangles:0},s=new Map,c=t.projectionMatrix.elements[5]*r/2,l=c_[this.ts.tier],u=n.band?this.bandRows(n.band,r,n.pixelRatio):null;this.cullRows=u?{y0:u.r0,y1:u.r1,hh:r/2,fy:c}:null;let d=this.vertexLighting&&l>=6&&n.low&&(n.look??No).mode===0&&!n.clip&&n.wireframe!==!0;for(let r of e){let e=this.toMesh(r,i,n.low,r===n.full,n.wireframe===!0,n.aux===!0,d&&r.material.transparent!==!0,c,l,t.projectionMatrix.elements);if(!e)continue;if(e.ranges)for(let t=0;t+1<e.ranges.length;t+=2)o.triangles+=e.ranges[t+1]-e.ranges[t];else o.triangles+=Math.floor(e.index.length/3);let u=r.material;if(u.transparent&&u.opacity<.995){let t=r.userData.obj??r.id,n=s.get(t);n||(n={alpha:u.opacity,depth:-1/0,meshes:[]},s.set(t,n),o.layers.push(n));let c=r.geometry;c.boundingSphere||c.computeBoundingSphere();let l=-a.copy(c.boundingSphere.center).applyMatrix4(r.matrixWorld).applyMatrix4(i).z;l>n.depth&&(n.depth=l),n.meshes.push(e)}else o.opaque.push(e)}return o.layers.sort((e,t)=>t.depth-e.depth),o}signature(e,t,n,r,i,a){let o=i.clip,s=[n,r,+!!i.wireframe,i.relief===!1?0:1,i.pixelRatio,i.quality===`fluido`?1:i.quality===`detalhe`?2:0,+!!i.aux,+!!o,o?o[0]:0,o?o[1]:0,o?o[2]:0,o?o[3]:0,this.auxEpoch],c=e=>{for(let t=0;t<16;t++)s.push(e[t])};c(t.matrixWorldInverse.elements),c(t.projectionMatrix.elements);for(let t of e){let e=t.geometry,n=e.getAttribute(`position`),r=e.getIndex(),i=e.getAttribute(`normal`),o=t.material;s.push(t.id,e.id,n?n.version:-1,n?n.count:0,r?r.version:-1,r?r.count:0,i?i.version:-1,o.color?o.color.getHex():0,o.emissive?o.emissive.getHex():0,typeof o.roughness==`number`?o.roughness:.5,o.transparent?o.opacity:1,+!!o.vertexColors,+(e.userData.closed===!0)),c(t.matrixWorld.elements),a.push(o.vertexColors?e.userData.srgb:null,t.userData.obj??null)}return s}*work(e,t,n,r,i,a,o,s,c,l,u=0,d=i){let f=o.look??No;if(!c){let n=a.projectionMatrix.elements,o=w_();t.begin(r,i,n[0],n[5],u,d),t.setLook(f),t.setClip(s?rl(s,a.matrixWorldInverse.elements):null);for(let n of e.opaque)t.setMesh(n),yield*this.draw(t,n);t.linearize(),this.scanMs=w_()-o,l?.(),yield}if(o.ao&&!t.aoValid(f)){for(let e=0;e<i;e+=16)t.computeAO(e,Math.min(i,e+16),f),yield;t.blurAO(),yield}if(o.shadow&&f.shadow>0){for(let e=0;e<i;e+=32)t.computeShadow(f,e,Math.min(i,e+32)),yield;t.blurShadow(),yield}for(let e=0;e<i;e+=x_)t.shade(o,e,Math.min(i,e+x_)),yield;if(o.smoothEdges&&(t.finish(),yield),e.layers.length){let r=n(),i={...Qa,scale:o.scale,look:f};for(let n of e.layers){r.beginLayer(t),yield;for(let e of n.meshes)r.setMesh(e),yield*this.draw(r,e);r.shade(i),yield,r.compositeOnto(t,n.alpha),yield}}}*draw(e,t){let n=t.ranges;if(n)for(let t=0;t+1<n.length;t+=2)for(let r=n[t],i=n[t+1];r<i;r+=b_)e.drawTriangles(r,Math.min(i,r+b_)),yield;else for(let t=0,n=e.triangleCount;t<n;t+=b_)e.drawTriangles(t,t+b_),yield}gather(e){let t=[],n=[],r=[];return e.traverseVisible(e=>{e.isMesh?e.userData.glOnly||(e.userData.dot?r:t).push(e):e.isLine&&n.push(e)}),{meshes:t,lines:n,dots:r}}render(e,t,n,r,i,a){let o={triangles:0,lines:0,dots:0,done:!0,ms:0};if(t=Math.floor(t),n=Math.floor(n),!(t>0&&n>0))return this.cancel(),o;i.updateMatrixWorld();let{meshes:s}=this.gather(i),c={ctx:e,W:t,H:n,camera:r,root:i,pixelRatio:a.pixelRatio},l=[],u=this.signature(s,r,t,n,a,l),d=a.look??No,f=this.gSig!==null&&T_(u,this.gSig,l,this.gRefs);if(a.preview&&!a.low&&f&&this.gFrame&&!this.gFrame.layers.length)return this.cancel(),this.fineSig=null,this.paintPreview(c,a,d),this.shownSig=u,this.shownRefs=l,o.triangles=this.lastFine.triangles,o.ms=this.lastPreview.ms,o.done=!1,this.overlays(c,o),o;if(a.low||a.preview&&!f){this.cancel();let e=this.paintFast(s,c,{...a,low:!0});return e?(this.shownSig=u,this.shownRefs=l,o.triangles=e.triangles,o.ms=this.lastFast.ms,a.low||(o.done=!1),this.overlays(c,o),o):(o.starved=!0,o.done=!1,o)}if(this.fineSig&&this.fineLook===d&&T_(u,this.fineSig,l,this.fineRefs))return this.cancel(),this.presentFine(c),this.shownSig=u,this.shownRefs=l,o.triangles=this.lastFine.triangles,this.overlays(c,o),o;let p=a.budgetMs!=null&&!a.preview;if(this.job&&p&&this.job.look===d&&T_(u,this.job.sig,l,this.job.refs))this.job.target=c;else{let e=a.relief!==!1,i=f&&this.gFrame!==null,o=i?this.gFrame:this.collect(s,r,{...a,low:!1},n),m=a.quality??`equilibrado`,h=a.pixelRatio<1.5&&m!==`fluido`?2:1;t*n*h*h>(m===`detalhe`?y_:v_)&&(h=1),i&&(h=this.gSS);let g=e&&m!==`fluido`,_={ao:g,cavity:e,outline:e,shadow:g,smoothEdges:!0,scale:a.pixelRatio*h,look:d};this.job=null,this.fineSig=null,i||(this.gSig=null,this.gFrame=null);let v=()=>{this.gSig=u,this.gRefs=l,this.gFrame=o,this.gSS=h};this.job={gen:this.work(o,this.fine,()=>this.fineLayer??=new Go,t*h,n*h,r,_,a.clip??null,i,v),sig:u,refs:l,target:c,ss:h,spent:0,triangles:o.triangles,look:d,frame:o,relight:i};let y=!this.shownSig||!T_(u,this.shownSig,l,this.shownRefs);p&&y&&this.lastFineMs>2*(a.budgetMs??0)&&this.paintFast(s,c,{...a,low:!0})&&(this.shownSig=u,this.shownRefs=l)}return o.triangles=this.job.triangles,o.done=this.advance(p?Math.max(1,a.budgetMs):1/0),o.ms=o.done?this.lastFine.ms:this.lastFast.ms,this.overlays(c,o),o}step(e=10){let t=this.job;return!t||!this.advance(e)?!1:(this.overlays(t.target,{triangles:0,lines:0,dots:0,done:!0,ms:0}),!0)}advance(e){let t=this.job;if(!t)return!1;let n=w_(),r=!1;for(;;){if(t.gen.next().done){r=!0;break}if(w_()-n>=e)break}return t.spent+=w_()-n,r?(this.job=null,this.fineSig=t.sig,this.fineRefs=t.refs,this.fineSS=t.ss,this.fineLook=t.look,t.relight||(this.lastFineMs=t.spent),this.lastFine={ms:t.spent,triangles:t.triangles,width:this.fine.width,height:this.fine.height,relight:t.relight},this.presentFine(t.target),this.shownSig=t.sig,this.shownRefs=t.refs,!0):!1}paintFast(e,t,n){let r=w_(),{W:i,H:a}=t;n.level&&(this.ts={...this.ts,tier:Math.max(0,Math.min(c_.length-1,n.level.tier)),relief:n.level.relief}),this.canDefer=this.deferBuild&&!n.band&&this.lastShown.seq>0&&this.lastShown.width===i&&this.lastShown.height===a&&!this.lastShown.y0,this.starving=!1;let o=this.collect(e,t.camera,n,a);if(this.starving)return this.starving=!1,null;let s=n.band,c=s?this.bandRows(s,a,t.pixelRatio):null,l=c?c.r0:0,u=c?c.r1:a,d=this.ts.relief&&n.relief!==!1,f={...Qa,cavity:d,outline:d,smoothEdges:!0,scale:t.pixelRatio,look:n.look??No},p=this.work(o,this.fast,()=>this.fastLayer??=new Go,i,u-l,t.camera,f,n.clip??null,!1,void 0,l,a);for(;!p.next().done;);if(s){let e=Math.floor(s.y0),t=Math.ceil(s.y1);this.lastShown={data:this.fast.out.subarray((e-l)*i*4,(t-l)*i*4),width:i,height:t-e,seq:this.lastShown.seq+1,y0:e},this.shownBand={r0:l,y0:e,y1:t}}else this.present(t,this.fast.out,i,a),this.shownBand=null;this.shownDepth=this.fast,this.shownScale=1;let m=w_()-r;this.lastFast={ms:m,triangles:o.triangles,width:i,height:s?Math.ceil(s.y1)-Math.floor(s.y0):a,scanMs:this.scanMs,rebuilt:this.built};let h=this.built;if(this.built=!1,!n.level){let e=f_(this.ts,m*this.timeScale,h,this.scanMs*this.timeScale);this.ts={...e,tier:Math.max(this.minTier,Math.min(this.maxTier,e.tier)),relief:this.lockRelief??e.relief}}return o}paintPreview(e,t,n){let r=w_(),i=this.fine,a=t.relief!==!1,o=a&&n.shadow>0;o&&(i.computeShadow(n),i.blurShadow()),i.shadePreview({ao:a&&i.aoValid(n),cavity:a,outline:a,shadow:o,smoothEdges:!1,scale:t.pixelRatio*this.gSS,look:n},2),this.present(e,i.preview,i.previewWidth,i.previewHeight),this.shownDepth=i,this.shownScale=i.width/e.W,this.lastPreview={ms:w_()-r,width:i.previewWidth,height:i.previewHeight}}presentFine(e){let t=this.fine,{W:n,H:r}=e;this.fineSS===2?(this.big.length!==n*r*4&&(this.big=new Uint8ClampedArray(n*r*4)),Ko(t.out,t.width,t.height,this.big),this.present(e,this.big,n,r)):this.present(e,t.out,t.width,t.height),this.shownDepth=t,this.shownScale=t.width/n}image(e,t,n){if(typeof ImageData>`u`)return null;let r=this.images.get(e);return(!r||r.width!==t||r.height!==n)&&(r=new ImageData(e,t,n),this.images.set(e,r)),r}scratchCanvas(e,t){if(this.scratch===void 0){this.scratch=null;try{let n=typeof OffscreenCanvas<`u`?new OffscreenCanvas(e,t):typeof document<`u`?document.createElement(`canvas`):null,r=n?n.getContext(`2d`):null;n&&r&&r.putImageData&&(this.scratch={canvas:n,ctx:r})}catch{this.scratch=null}}let n=this.scratch;return n&&(n.canvas.width!==e||n.canvas.height!==t)&&(n.canvas.width=e,n.canvas.height=t),n}present(e,t,n,r){let{ctx:i,W:a,H:o}=e;if(this.lastShown={data:t,width:n,height:r,seq:this.lastShown.seq+1},!i.putImageData){i.clearRect(0,0,a,o);return}if(n===a&&r===o){let e=this.image(t,n,r);e&&i.putImageData(e,0,0);return}let s=this.image(t,n,r),c=s&&i.drawImage?this.scratchCanvas(n,r):null;if(s&&c){c.ctx.putImageData(s,0,0),i.clearRect(0,0,a,o),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality=`high`,i.drawImage(c.canvas,0,0,n,r,0,0,a,o);return}this.small.length!==a*o*4&&(this.small=new Uint8ClampedArray(a*o*4));let l=new Uint32Array(t.buffer,t.byteOffset,n*r),u=new Uint32Array(this.small.buffer);for(let e=0;e<o;e++){let t=Math.min(r-1,Math.floor(e*r/o))*n;for(let r=0,i=e*a;r<a;r++,i++)u[i]=l[t+Math.min(n-1,Math.floor(r*n/a))]}let d=this.image(this.small,a,o);d&&i.putImageData(d,0,0)}renderImage(e,t,n,r,i={}){let a={low:!1,pixelRatio:1,...i},o={fillStyle:``,strokeStyle:``,lineWidth:1,lineJoin:`round`,lineCap:`round`,clearRect(){},beginPath(){},moveTo(){},lineTo(){},closePath(){},fill(){},stroke(){},arc(){}};delete a.budgetMs;let s=this.render(o,e,t,n,r,a);return a.low&&a.band?{data:this.lastShown.data,width:this.lastShown.width,height:this.lastShown.height,triangles:s.triangles,ms:s.ms}:a.low?{data:this.fast.out,width:this.fast.width,height:this.fast.height,triangles:s.triangles,ms:s.ms}:this.fineSS===2?(this.big.length!==e*t*4&&(this.big=new Uint8ClampedArray(e*t*4)),Ko(this.fine.out,this.fine.width,this.fine.height,this.big),{data:this.big,width:e,height:t,triangles:s.triangles,ms:s.ms}):{data:this.fine.out,width:this.fine.width,height:this.fine.height,triangles:s.triangles,ms:s.ms}}depthAt(e,t){let n=this.extDepth;if(n){let r=Math.floor(e*n.scale),i=Math.floor(t*n.scale);return r<0||i<0||r>=n.width||i>=n.height?0:n.data[i*n.width+r]}let r=this.shownDepth;if(!r)return 0;let i=Math.floor(e*this.shownScale),a=Math.floor(t*this.shownScale);return i<0||a<0||i>=r.width||a>=r.height?0:r.depth[a*r.width+i]}shownDepthBuffer(){let e=this.shownDepth;if(!e)return null;let t=this.shownBand;if(t){let n=e.width;return{data:e.depth.subarray((t.y0-t.r0)*n,(t.y1-t.r0)*n),width:n,height:t.y1-t.y0,scale:this.shownScale,y0:t.y0}}return{data:e.depth,width:e.width,height:e.height,scale:this.shownScale}}presentExternal(e,t,n,r,i,a,o,s){let c={ctx:e,W:t,H:n,camera:r,root:i,pixelRatio:a},l={triangles:0,lines:0,dots:0,done:!0,ms:0};return this.present(c,o.data,o.width,o.height),this.extDepth=s,this.shownDepth=null,this.overlays(c,l),l}presentExternalBands(e,t,n,r,i,a,o,s){let c={ctx:e,W:t,H:n,camera:r,root:i,pixelRatio:a},l={triangles:0,lines:0,dots:0,done:!0,ms:0};if(!e.putImageData)e.clearRect(0,0,t,n);else for(let t of o){let n=this.image(t.data,t.width,t.height);n&&e.putImageData(n,0,t.y0)}return this.lastShown={data:o[0].data,width:o[0].width,height:o[0].height,seq:this.lastShown.seq+1},this.extDepth=s,this.shownDepth=null,this.overlays(c,l),l}overlays(e,t){let{ctx:n,W:r,H:i,camera:a,root:o}=e,s=e.pixelRatio,{lines:c,dots:l}=this.gather(o),u=a.matrixWorldInverse,d=this.v,f=a.projectionMatrix.elements[0],p=a.projectionMatrix.elements[5],m=r/2,h=i/2;n.lineCap=`round`,n.lineJoin=`round`;let g=n.globalAlpha!==void 0;for(let e of c){let r=e.geometry.getAttribute(`position`);if(!r)continue;let i=e.material,a=this.mv.multiplyMatrices(u,e.matrixWorld),o=e.isLineSegments===!0,c=o&&g&&(this.shownDepth!==null||this.extDepth!==null)&&!e.userData.guide;n.strokeStyle=`#`+i.color.getHexString(),n.lineWidth=(Number(e.userData.width)||1.6)*s;let l=g&&i.transparent&&i.opacity<1?i.opacity:1;g&&(n.globalAlpha=l);let _=[];n.beginPath();let v=NaN,y=NaN,b=0,x=0;for(let e=0;e<r.count;e++){d.fromBufferAttribute(r,e).applyMatrix4(a);let t=-d.z,i=t>.5?(1+f*d.x/t)*m:NaN,s=t>.5?(1-p*d.y/t)*h:NaN;if((o?e%2==1:e>0)&&i===i&&v===v){let e=!1;if(c){let n=this.depthAt((i+v)/2,(s+y)/2),r=(t+b)/2;e=n>0&&r>n+.35}e?_.push(v,y,i,s):(n.moveTo(v,y),n.lineTo(i,s)),x++}v=i,y=s,b=t}if(x>_.length/4&&n.stroke(),_.length){n.globalAlpha=.25*l,n.beginPath();for(let e=0;e<_.length;e+=4)n.moveTo(_[e],_[e+1]),n.lineTo(_[e+2],_[e+3]);n.stroke()}g&&(n.globalAlpha=1),t.lines+=x}for(let e of l){d.setFromMatrixPosition(e.matrixWorld).applyMatrix4(u);let r=-d.z;if(!(r>.5))continue;let i=Math.max((Number(e.userData.dotMin)||2.5)*s,(Number(e.userData.dot)||.3)*p*h/r),a=e.material;g&&(n.globalAlpha=a.transparent&&a.opacity<1?a.opacity:1),n.beginPath(),n.arc((1+f*d.x/r)*m,(1-p*d.y/r)*h,i,0,Math.PI*2),n.fillStyle=`#`+a.color.getHexString(),n.fill(),n.strokeStyle=`rgba(0,0,0,0.55)`,n.lineWidth=s,n.stroke(),t.dots++}g&&(n.globalAlpha=1)}},D_=.25,O_=.75,k_=class{local=new E_;ports;seq=0;sentSeq=0;waiting=new Set;parts=new Map;pending=null;shots=new Map;sent;held;preparing;srgbIds=new WeakMap;srgbSeq=0;spare=[];lastImage=null;disposed=!1;dead=!1;tier=u_();split=.5;lock=null;onFrame=null;onPrepared=null;onDead=null;stats={sent:0,replaced:0,frames:0,lastMs:0,banded:0};constructor(e){this.ports=Array.isArray(e)?e:[e],this.sent=this.ports.map(()=>new WeakMap),this.held=this.ports.map(()=>new Map),this.preparing=this.ports.map(()=>!0),this.ports.forEach((e,t)=>{e.onmessage=e=>this.receive(t,e.data),e.onerror=e=>this.die(e)})}die(e){this.disposed||this.dead||(this.dead=!0,this.waiting.clear(),this.parts.clear(),this.pending=null,this.shots.clear(),this.onDead?.(e))}fixLevel(e,t=!0){this.lock=e===null?null:u_(e,t),this.lock&&(this.tier=this.lock)}get workers(){return this.ports.length}get level(){return{edge:c_[this.tier.tier],relief:this.tier.relief}}get working(){return this.waiting.size>0}get refining(){return!1}step(){return!1}cancel(){}dispose(){this.disposed=!0,this.pending=null,this.shots.clear();for(let e of this.ports)e.onmessage=null,e.terminate?.()}geoKey(e){let t=e.getAttribute(`position`),n=e.getIndex(),r=e.getAttribute(`normal`),i=e.userData.srgb,a=0;return i&&(a=this.srgbIds.get(i)??0,a||(a=++this.srgbSeq,this.srgbIds.set(i,a))),`${e.id}:${t.version}:${t.count}:${n?n.version:-1}:${n?n.count:0}:${r?r.version:-1}:${a}:${+(e.userData.closed===!0)}`}scene(e){let t=[],n=[],r=!1;return e.updateMatrixWorld(),e.traverseVisible(e=>{let i=e;if(e.isLineSegments&&!e.userData.guide&&(r=!0),!i.isMesh||i.userData.glOnly||i.userData.dot)return;let a=i.geometry,o=a.getAttribute(`position`);if(!o||!(o instanceof ht)||o.count<3)return;n.push({g:a,key:this.geoKey(a)});let s=i.material;t.push({id:i.id,geo:String(a.id),matrix:i.matrixWorld.toArray(),color:s.color?s.color.getHex():13421772,emissive:s.emissive?s.emissive.getHex():0,roughness:typeof s.roughness==`number`?s.roughness:.5,opacity:s.opacity,transparent:s.transparent,vertexColors:s.vertexColors===!0,kind:i.userData.kind??null,piece:i.userData.piece===!0,arch:i.userData.arch??null,obj:i.userData.obj??null})}),{meshes:t,depth:r,refs:n}}geosFor(e,t){let n=[],r=[],i=this.sent[e],a=this.held[e],o=new Set(t.refs.map(e=>String(e.g.id)));if(a.size>o.size+8)for(let[e,t]of a)o.has(e)||(i.delete(t),a.delete(e),r.push(e));for(let{g:e,key:r}of t.refs){if(i.get(e)===r)continue;i.set(e,r),a.set(String(e.id),e);let t=e.getAttribute(`position`),o=e.getAttribute(`normal`),s=e.getIndex(),c=e.userData.srgb,l=e.userData.lowIndex;n.push({key:String(e.id),positions:Float32Array.from(t.array),normals:o instanceof ht&&o.count===t.count?Float32Array.from(o.array):null,index:s?s.array.slice():null,srgb:c?c.slice():null,lowIndex:l?l.slice():null,closed:e.userData.closed===!0})}return{geos:n,drop:r}}transferOf(e,t){let n=[...t];for(let t of e)n.push(t.positions.buffer),t.normals&&n.push(t.normals.buffer),t.index&&n.push(t.index.buffer),t.srgb&&n.push(t.srgb.buffer),t.lowIndex&&n.push(t.lowIndex.buffer);return n}render(e,t,n,r,i,a){if(this.disposed||this.dead||(t=Math.floor(t),n=Math.floor(n),!(t>0&&n>0)))return;let o=++this.seq,s=r.clone();s.matrixWorld.copy(r.matrixWorld),s.matrixWorldInverse.copy(r.matrixWorldInverse),s.projectionMatrix.copy(r.projectionMatrix),s.matrixAutoUpdate=!1;let c={shot:{seq:o,ctx:e,W:t,H:n,camera:s,root:i,pixelRatio:a.pixelRatio,low:a.low,preview:a.preview===!0,bands:!1},opts:{...a},cam:s};this.working?(this.pending&&this.stats.replaced++,this.pending=c):this.send(c)}send(e){let{shot:t,opts:n,cam:r}=e,i=this.scene(t.root),a=this.ports.length===2&&t.low&&!t.preview&&!this.preparing[0]&&!this.preparing[1];t.bands=a;let o=a?[0,1]:[0],s=t.H,c=Math.round(s*this.split);this.sentSeq=t.seq,this.shots.set(t.seq,t),this.waiting.clear(),this.parts.clear();for(let e of o)this.waiting.add(e);this.stats.sent++,a&&this.stats.banded++;try{this.postRequests(o,i,t,n,r,a,s,c)}catch(e){this.die(e instanceof Error?e.message:String(e))}}postRequests(e,t,n,r,i,a,o,s){e.forEach((e,c)=>{let{geos:l,drop:u}=this.geosFor(e,t),d=this.spare.splice(0,3),f={t:`frame`,seq:n.seq,W:n.W,H:o,camWorld:i.matrixWorld.toArray(),camProj:i.projectionMatrix.toArray(),meshes:t.meshes,geos:l,drop:u,low:r.low,preview:r.preview===!0,pixelRatio:r.pixelRatio,full:r.full?r.full.id:null,wireframe:r.wireframe===!0,relief:r.relief!==!1,quality:r.quality??`equilibrado`,appearance:r.appearance??null,clip:r.clip??null,depth:t.depth,spare:d,band:a?c===0?{y0:0,y1:s}:{y0:s,y1:o}:null,level:a?{tier:this.tier.tier,relief:this.tier.relief}:null};this.ports[e].postMessage(f,this.transferOf(l,d))});for(let n=0;n<this.ports.length;n++){if(e.includes(n))continue;let{geos:r,drop:i}=this.geosFor(n,t);(r.length||i.length)&&this.ports[n].postMessage({t:`sync`,geos:r,drop:i,spare:[]},this.transferOf(r,[]))}}receive(e,t){if(this.disposed||this.dead)return;if(t.t===`error`){this.die(t.message);return}if(t.t===`prepared`){e===0&&this.onPrepared?.();return}if(t.t===`status`){this.preparing[e]=t.preparing;return}if(t.t!==`image`)return;let n=t.seq<this.sentSeq,r=n?void 0:this.shots.get(t.seq);if(n)this.spare.length<6&&this.spare.push(t.data);else if(t.seq===this.sentSeq&&(this.waiting.delete(e),!r?.bands))for(let e of this.shots.keys())(e<t.seq||t.idle)&&this.shots.delete(e);if(r){if(r.bands)this.parts.set(e,t),this.parts.size===2&&this.presentBands(r);else{let e=new Uint8ClampedArray(t.data),n=t.depth?{data:new Float32Array(t.depth),width:t.depthWidth,height:t.depthHeight,scale:t.depthScale}:null;this.recycle(),this.lastImage={parts:[{data:e,width:t.width,height:t.height,y0:0}],depth:n,shot:r},this.local.presentExternal(r.ctx,r.W,r.H,r.camera,r.root,r.pixelRatio,this.lastImage.parts[0],n),this.stats.frames++,this.stats.lastMs=t.ms,this.onFrame?.(t.done)}}if(!this.working&&this.pending){let e=this.pending;this.pending=null,this.send(e)}}recycle(){if(this.lastImage){for(let e of this.lastImage.parts)this.spare.length<6&&this.spare.push(e.data.buffer);this.lastImage=null}}presentBands(e){let t=[...this.parts.values()].sort((e,t)=>e.y0-t.y0),n=e.W,r=e.H;this.parts.clear();for(let t of this.shots.keys())t<e.seq&&this.shots.delete(t);let i=t.map(e=>({data:new Uint8ClampedArray(e.data),width:e.width,height:e.height,y0:e.y0})),a=null;if(t.every(e=>e.depth)){let e=new Float32Array(n*r);for(let r of t)e.set(new Float32Array(r.depth),r.y0*n);a={data:e,width:n,height:r,scale:1}}this.recycle(),this.lastImage={parts:i,depth:a,shot:e},this.local.presentExternalBands(e.ctx,n,r,e.camera,e.root,e.pixelRatio,i,a),this.stats.frames++;let o=Math.max(t[0].ms,t[1].ms);this.stats.lastMs=o,this.lock||(this.tier=f_(this.tier,o,t[0].rebuilt||t[1].rebuilt,Math.max(t[0].scanMs,t[1].scanMs)));let s=t[0].ms,c=t[1].ms;s+c>0&&(this.split=Math.max(D_,Math.min(O_,this.split-.3*((s-c)/(s+c))*this.split))),this.onFrame?.(!1)}redrawGuides(){let e=this.lastImage;if(!e||this.disposed)return!1;let t=e.shot;return e.parts.length===1?this.local.presentExternal(t.ctx,t.W,t.H,t.camera,t.root,t.pixelRatio,e.parts[0],e.depth):this.local.presentExternalBands(t.ctx,t.W,t.H,t.camera,t.root,t.pixelRatio,e.parts,e.depth),!0}};function A_(e=2){if(typeof Worker>`u`)return[];let t=e;try{if(typeof localStorage<`u`){if(localStorage.getItem(`special-ia-cad:worker`)===`0`)return[];let e=Number(localStorage.getItem(`special-ia-cad:workers`));e>=1&&e<=2&&(t=Math.min(t,e))}}catch{}let n=[];for(let e=0;e<t;e++)try{let e=new Worker(new URL(new URL(`render.worker-VrwREXht.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),t={onmessage:null,onerror:null,postMessage:(t,n)=>e.postMessage(t,n),terminate:()=>e.terminate()};e.onmessage=e=>t.onmessage?.(e),e.onerror=e=>{console.error(`Worker de desenho falhou:`,e.message),t.onerror?.(e.message||`o worker de desenho falhou`)},e.onmessageerror=()=>t.onerror?.(`mensagem ilegível do worker de desenho`),n.push(t)}catch{break}return n}var j_=170,M_=6280447,N_=15,P_=160,F_=240,I_=11,L_=5,R_=12,z_=`position:absolute;pointer-events:none;background:#fff;color:#0E0E0E;font:500 12px Inter,system-ui,sans-serif;padding:3px 8px;border-radius:6px;transform:translate(-50%,-140%);display:none;white-space:nowrap;z-index:1`,B_=`display:block;width:100%;height:100%;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent`,V_=`Modelo 3D. Setas giram; Shift e setas movem; + e − aproximam e afastam; Home volta à visão geral.`,H_=24,U_=100,W_=class{renderMode;onObjectsChange=null;onPlaced=null;onMarginChange=null;onMarginSuggested=null;onEdit=null;onMeasure=null;onAppearanceChange=null;onSectionChange=null;appearance=rs(`padrao`);look=Ss(this.appearance);lighting=!1;section=null;sectionPick=null;sectionDirty=!1;sectionGroup=new At;sectionMat=new $e({color:M_,depthTest:!1});sectionDotMat=new J({color:M_,depthTest:!1});sectionDotGeo=new It(1,10,8);stage=new At;surfaces=new el;glLines=new cc;last=new xc(()=>document.createElement(`canvas`));meter=new Os;diagOn=!1;diagEl=null;diagAt=0;spin=!1;submitMs=0;gpuName=``;triangles=0;drawCalls=0;shaderError=``;webglError=``;lostCount=0;glErrors=0;fallbackWhy=``;forcedSoftware=!1;model=new s_;cam=new xl;prober=new Fl;scene=new $t;lights=[];gl=null;soft=null;remote=null;quality=`equilibrado`;ctx=null;canvas;glLost=null;wire=!1;wireMat=null;label;ro;el=null;raf=0;disposed=!1;dirty=!0;refine=!1;lastLow=0;lastWheel=-1e9;lastFrame=0;width=0;height=0;pixelRatio=1;tool=`orbitar`;raioDoAumento=2;placing=null;drag=null;dedos=new Ps;pinchAnchor=null;constructor(){let e=document.createElement(`canvas`),t=null,n=null;if(this.forcedSoftware=/[?&]render=software\b/.test(typeof location<`u`?location.search:``),this.cam.setLens(gl(typeof location<`u`?location.search:``)),!this.forcedSoftware)try{n=e.getContext(`webgl2`,{antialias:!0,alpha:!0,powerPreference:`high-performance`}),n||(this.webglError=`o navegador não deu um contexto WebGL2`)}catch(e){n=null,this.webglError=e instanceof Error?e.message:`erro ao criar o contexto`}if(n)try{t=new Ra({canvas:e,context:n,antialias:!0,alpha:!0}),t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.setClearColor(0,0),t.info.autoReset=!1,t.debug.onShaderError=(e,t,n,r)=>{let i=[e.getShaderInfoLog(n),e.getShaderInfoLog(r)].filter(Boolean).join(` | `).slice(0,400);console.error(`Sombreador WebGL não compilou:`,i),this.shaderError=i||`sem mensagem`,this.surfaces.enabled=!1,this.dirty=!0};try{let e=n.getExtension(`WEBGL_debug_renderer_info`);e&&(this.gpuName=String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)))}catch{}}catch(n){t=null,this.webglError=n instanceof Error?n.message:`erro ao criar o renderizador`,e=document.createElement(`canvas`)}this.gl=t,this.canvas=e,t?this.renderMode=`webgl`:(this.ctx=e.getContext(`2d`),this.startSoftware(),this.renderMode=`software`),this.prepareCanvas(this.canvas),t&&(e.addEventListener(`webglcontextlost`,this.onContextLost),e.addEventListener(`webglcontextrestored`,this.onContextRestored)),this.initDiag();let r=this.cam.camera,i=new Le(16777215,3814192,1.1),a=new an(16777215,1.7);a.position.set(30,40,20),a.target.position.set(0,0,-1),r.add(a,a.target);let o=new an(16777215,.5);o.position.set(-40,-30,-30),this.lights.push(i,a,o),this.stage.add(this.model.root,this.sectionGroup),this.scene.add(i,o,r,this.stage,this.glLines.group),this.model.onMarginChange=(e,t)=>{this.updateCursor(),this.invalidate(),this.onMarginChange?.(e,t)},this.model.onMarginSuggested=(e,t)=>{this.invalidate(),this.onMarginSuggested?.(e,t)},this.model.onObjectsChange=()=>{this.invalidate(),this.onObjectsChange?.()},this.label=document.createElement(`div`),this.label.style.cssText=z_,this.listen(this.canvas,!0),document.addEventListener(`visibilitychange`,this.onVisibility),this.ro=typeof ResizeObserver<`u`?new ResizeObserver(()=>this.resize()):null,this.cam.jump(this.model.overviewGoal()),this.updateCursor(),this.raf=requestAnimationFrame(this.frame)}get mode(){return this.model.mode}attach(e){this.disposed||(this.el!==e&&(this.el&&this.ro?.unobserve(this.el),this.el=e,this.ro?.observe(e)),this.canvas.parentElement!==e&&e.appendChild(this.canvas),this.label.parentElement!==e&&e.appendChild(this.label),this.diagEl&&this.diagEl.parentElement!==e&&e.appendChild(this.diagEl),this.resize())}dispose(){if(this.disposed)return;this.disposed=!0,cancelAnimationFrame(this.raf),this.ro?.disconnect();let e=this.canvas;this.listen(e,!1),this.drag=null,this.dedos.limpa(),this.pinchAnchor=null,this.model.dispose();for(let e of this.lights)e.removeFromParent(),e.dispose();this.scene.clear(),this.clearSectionLines(),this.sectionMat.dispose(),this.sectionDotMat.dispose(),this.sectionDotGeo.dispose(),this.onAppearanceChange=null,this.onSectionChange=null,this.surfaces.dispose(),this.glLines.dispose(),this.diagEl?.remove(),this.diagEl=null,window.removeEventListener(`keydown`,this.onDiagKey),document.removeEventListener(`visibilitychange`,this.onVisibility);let t=this.gl??this.glLost;t&&(t.domElement.removeEventListener(`webglcontextlost`,this.onContextLost),t.domElement.removeEventListener(`webglcontextrestored`,this.onContextRestored),t.dispose(),t.forceContextLoss(),this.gl=this.glLost=null),this.wireMat?.dispose(),this.wireMat=null,this.stopSoftware(),this.ctx=null,e.remove(),this.label.remove(),this.el=null,this.onPlaced=this.onEdit=this.onMeasure=null,this.onMarginChange=null,this.onMarginSuggested=null,this.onObjectsChange=null}listen(e,t){t?(e.addEventListener(`contextmenu`,this.onContextMenu),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onCancel),e.addEventListener(`lostpointercapture`,this.onLostCapture),e.addEventListener(`wheel`,this.onWheel,{passive:!1}),e.addEventListener(`keydown`,this.onKey)):(e.removeEventListener(`contextmenu`,this.onContextMenu),e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onCancel),e.removeEventListener(`lostpointercapture`,this.onLostCapture),e.removeEventListener(`wheel`,this.onWheel),e.removeEventListener(`keydown`,this.onKey))}prepareCanvas(e){e.style.cssText=B_,e.tabIndex=0,e.setAttribute(`role`,`application`),e.setAttribute(`aria-label`,V_)}useCanvas(e){let t=this.canvas;if(t===e)return;this.listen(t,!1),this.drag=null,this.dedos.limpa(),this.pinchAnchor=null,this.prepareCanvas(e);let n=typeof document<`u`&&document.activeElement===t;t.parentElement&&t.parentElement.replaceChild(e,t),this.canvas=e,n&&e.focus({preventScroll:!0}),this.listen(e,!0),this.updateCursor()}onContextLost=e=>{e.preventDefault(),this.lostCount++,this.toSoftware(``)};toSoftware(e){if(this.disposed||!this.gl)return;this.glLost=this.gl,this.gl=null,this.fallbackWhy=e;let t=document.createElement(`canvas`);this.ctx=t.getContext(`2d`),this.startSoftware(),this.renderMode=`software`,this.useCanvas(t),this.resize(),this.ctx&&this.last.paint(this.ctx,t.width,t.height),this.dirty=!0}onContextRestored=()=>{!this.disposed&&this.glLost&&(this.gl=this.glLost,this.glLost=null,this.fallbackWhy=``,this.stopSoftware(),this.ctx=null,this.renderMode=`webgl`,this.useCanvas(this.gl.domElement),this.resize(),this.dirty=!0)};startSoftware(e=!0){this.stopSoftware();let t=typeof navigator<`u`&&navigator.hardwareConcurrency||2,n=e?A_(t>=3?2:1):[];if(n.length){this.remote=new k_(n.length===2?n:n[0]);let e=this.remote;e.onFrame=()=>{this.countFrame(),this.canvas.dataset.ms=e.stats.lastMs.toFixed(1),this.canvas.dataset.sent=e.stats.sent+`/`+e.stats.replaced,this.placeLabel()},e.onPrepared=()=>{this.dirty=!0},e.onDead=t=>{this.remote===e&&(console.warn(`Desenho fora da thread principal parou (`+t+`); seguindo na thread principal.`),this.startSoftware(!1),this.dirty=!0)}}else this.soft=new E_,this.soft.deferBuild=!0,this.soft.onPrepared=()=>{this.dirty=!0}}stopSoftware(){this.remote?.dispose(),this.remote=null,this.soft=null}setRenderQuality(e){(e===`fluido`||e===`equilibrado`||e===`detalhe`)&&(this.quality=e,this.invalidate())}getRenderQuality(){return this.quality}resize(){let e=this.el;if(!e)return;let t=e.clientWidth,n=e.clientHeight;if(t&&n){if(this.width=t,this.height=n,this.gl)this.pixelRatio=yc(t,n,window.devicePixelRatio||1),this.gl.setPixelRatio(this.pixelRatio),this.gl.setSize(t,n,!1);else{this.pixelRatio=C_(t,n,window.devicePixelRatio||1);let e=Math.max(1,Math.round(t*this.pixelRatio)),r=Math.max(1,Math.round(n*this.pixelRatio));this.canvas.width!==e&&(this.canvas.width=e),this.canvas.height!==r&&(this.canvas.height=r)}this.cam.setAspect(t/n),this.dirty=!0}}invalidate(){this.dirty=!0,this.section&&(this.sectionDirty=!0)}frame=e=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);let t=this.el;if(!t||!t.isConnected||!this.width)return;let n=this.lastFrame?Math.min(.1,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e,this.diagOn&&this.spin&&!this.gesturing&&this.cam.rotate(2.2,0,null),this.dirty&&this.cam.fitScene(this.stage);let r=this.cam.update(n)||this.diagOn&&this.spin;if(this.diagOn&&e-this.diagAt>250&&(this.diagAt=e,this.writeDiag()),this.gl){if(!r&&!this.dirty&&this.last.stale&&!this.gesturing&&(this.dirty=!0),!r&&!this.dirty)return;this.dirty=!1,this.sectionDirty&&this.drag?.mode!==`sculpt`&&this.rebuildSection();try{this.drawGl(this.gl),this.last.capture(this.gl.domElement,performance.now(),this.gesturing),this.glErrors=0}catch(e){console.error(`Erro ao desenhar com WebGL:`,e),this.dirty=!0,++this.glErrors>=3&&this.toSoftware(`erro de desenho WebGL: `+(e instanceof Error?e.message:String(e)));return}this.countFrame()}else if((this.soft||this.remote)&&this.ctx){let e=this.lighting||this.drag?.mode===`light`,t=this.drag!==null&&!e||this.dedos.ativo||this.cam.animating||performance.now()-this.lastWheel<F_;if(r||this.dirty){let n=t||r;this.dirty=!1,this.sectionDirty&&this.drag?.mode!==`sculpt`&&this.rebuildSection();let i=this.paint(n,e&&!n);this.refine=n||e,this.lastLow=performance.now(),this.soft?.preparing&&this.soft.pump(i?12:3),i&&(this.dirty=!0)}else if(this.refine&&!t&&!e&&performance.now()-this.lastLow>P_)this.refine=!1,this.paint(!1);else if(this.soft&&this.soft.refining&&!t&&!e){if(!this.soft.step(I_))return}else{this.soft?.preparing&&!t&&this.soft.pump(6);return}}else return;this.placeLabel()};get gesturing(){return this.drag!==null||this.dedos.ativo}presented=0;countFrame(){this.canvas.dataset.frames=String(++this.presented),this.meter.tick(performance.now())}drawGl(e){let t=performance.now(),n=this.cam.camera,r=this.clipPlane();this.scene.updateMatrixWorld(),e.info.reset(),e.clippingPlanes=!this.surfaces.enabled&&r?[new Pt(new Q(-r[0],-r[1],-r[2]),-r[3])]:[];let i=tl(this.stage,n,this.height);try{this.surfaces.begin(this.stage,n,{look:this.look,clip:r,pixelRatio:this.pixelRatio,wantAux:Cs(this.appearance),defer:this.drag?.mode===`sculpt`}),this.glLines.begin(this.stage),e.render(this.scene,n),this.triangles=e.info.render.triangles,this.drawCalls=e.info.render.calls,this.glLines.end(),this.surfaces.end(),this.wire&&this.renderWire(e,r)}finally{this.glLines.end(),this.surfaces.end(),i()}this.submitMs=performance.now()-t}initDiag(){let e=null;try{e=localStorage.getItem(`special-ia-diag`),e!==null&&localStorage.removeItem(`special-ia-diag`)}catch{}let t=Ms(typeof location<`u`?location.search:``,e);window.addEventListener(`keydown`,this.onDiagKey),this.setDiag(t.on)}setDiag(e){if(this.diagOn=e,!e)this.spin=!1,this.diagEl?.remove(),this.diagEl=null;else{if(!this.diagEl){let e=document.createElement(`div`);e.style.cssText=`position:absolute;left:8px;bottom:8px;max-width:calc(100% - 16px);padding:6px 8px;border-radius:6px;background:rgba(10,12,16,.78);color:#9fe8b0;font:11px/1.35 ui-monospace,Menlo,monospace;white-space:pre-wrap;pointer-events:none;z-index:5`,this.diagEl=e}this.el&&this.diagEl.parentElement!==this.el&&this.el.appendChild(this.diagEl),this.diagAt=0,this.meter.reset()}}onDiagKey=e=>{if(e.ctrlKey&&e.altKey&&e.key.toLowerCase()===`d`)e.preventDefault(),this.setDiag(!this.diagOn);else if(this.diagOn&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key.toLowerCase()===`r`){let t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;this.spin=!this.spin,this.meter.reset()}};writeDiag(){if(!this.diagEl)return;this.el&&this.diagEl.parentElement!==this.el&&this.el.appendChild(this.diagEl);let e=performance.now(),t=bc({webglCreated:this.gl!==null||this.glLost!==null,contextLost:this.glLost!==null&&this.gl===null,shaderFailed:!this.surfaces.enabled,forcedSoftware:this.forcedSoftware,createError:this.webglError||void 0}),n=this.renderMode===`software`,r=[];this.shaderError&&r.push(`erro do sombreador: `+this.shaderError),this.lostCount&&r.push(`contexto WebGL perdido ${this.lostCount}×`);{let e=this.cam.camera;r.push(`lente de ${this.cam.lens}°: olho a ${this.cam.eyeDistance.toFixed(0)} mm, planos de corte ${e.near.toFixed(1)}…${e.far.toFixed(0)} mm`)}if(n||r.push(`preparo das malhas: ${this.surfaces.lastPrepMs.toFixed(1)} ms; malhas com sombreador: ${this.surfaces.meshCount}`),n){let e=this.soft?.lastFine;this.soft&&(this.triangles=e&&e.triangles?e.triangles:this.soft.lastFast.triangles);let t=this.soft?this.soft.fastLevel:this.remote?.level;t&&r.push(`quadro em movimento: resolução cheia; malha com aresta-alvo de ${t.edge} px${t.relief?``:`, sem realce`}`),this.remote&&r.push(`${this.remote.workers} worker(s) de desenho; quadros repartidos em faixas: ${this.remote.stats.banded} de ${this.remote.stats.sent}`)}this.diagEl.textContent=js({path:n?`software`:t.path,reason:n&&this.fallbackWhy?this.fallbackWhy:t.reason,gpu:this.gpuName||void 0,fps:this.meter.fps(e),avgMs:this.meter.avgMs(),worstMs:this.meter.worstMs(),submitMs:n?void 0:this.submitMs,triangles:this.triangles,drawCalls:n?void 0:this.drawCalls,canvasW:this.canvas.width,canvasH:this.canvas.height,cssW:this.width,cssH:this.height,devicePixelRatio:window.devicePixelRatio||1,pixelRatio:n?this.canvas.width/Math.max(1,this.width):this.pixelRatio,appearance:`${this.appearance.preset} (luz ${this.appearance.lightAzimuth}°/${this.appearance.lightElevation}°)${this.section?`, com corte`:``}${this.wire?`, malha`:``}`,spin:this.spin,notes:r}).join(`
`)}paint(e,t=!1){if(!this.ctx)return!1;let n=this.drag?.mode===`sculpt`?this.model.activeCrown():null,r={low:e,pixelRatio:this.pixelRatio,full:n,wireframe:this.wire,clip:this.clipPlane(),preview:t,quality:this.quality};return this.remote?(this.remote.render(this.ctx,this.canvas.width,this.canvas.height,this.cam.camera,this.stage,{...r,appearance:this.appearance}),!1):this.soft?(this.countFrame(),this.soft.render(this.ctx,this.canvas.width,this.canvas.height,this.cam.camera,this.stage,{...r,budgetMs:I_,look:this.look,aux:Cs(this.appearance)}).starved===!0):!1}listAppearancePresets(){return is()}getAppearance(){return{...this.appearance}}setAppearance(e){this.appearance=as(e),this.look=Ss(this.appearance),this.invalidate()}setLightDirection(e,t,n=!1){this.lighting=n,this.setAppearance({...this.appearance,lightAzimuth:e,lightElevation:t}),n||(this.refine=!0,this.lastLow=performance.now()-P_)}clipPlane(){let e=this.section;if(!e)return null;let t=e.flipped?-1:1,n=e.p.clone().addScaledVector(e.n,e.offset);return[e.n.x*t,e.n.y*t,e.n.z*t,-t*e.n.dot(n)]}emitSection(){this.sectionDirty=!0,this.updateCursor(),this.invalidate(),this.onSectionChange?.(this.getSection())}getSection(){let e=this.section;return{active:e!==null,picking:this.sectionPick!==null,offset:e?e.offset:0,flipped:e?e.flipped:!1}}sectionFromView(){let e=this.cam.camera;e.updateMatrixWorld();let t=e.position.clone().sub(this.cam.tgt);t.lengthSq()<1e-9||(this.sectionPick=null,this.section={n:t.normalize(),p:this.cam.tgt.clone(),offset:0,flipped:!1},this.emitSection())}startSectionPick(){this.model.hasModel()&&(this.sectionPick=[],this.emitSection())}setSectionOffset(e){this.section&&Number.isFinite(e)&&(this.section.offset=Math.max(-15,Math.min(N_,e)),this.emitSection())}flipSection(){this.section&&(this.section.flipped=!this.section.flipped,this.emitSection())}clearSection(){(this.section||this.sectionPick)&&(this.section=null,this.sectionPick=null,this.emitSection())}clearSectionLines(){for(let e of[...this.sectionGroup.children])e.removeFromParent(),e.isLineSegments&&e.geometry.dispose()}rebuildSection(){this.sectionDirty=!1,this.clearSectionLines();for(let e of this.sectionPick??[]){let t=new Ue(this.sectionDotGeo,this.sectionDotMat);t.position.copy(e),t.scale.setScalar(.18),t.userData.dot=.18,this.sectionGroup.add(t)}let e=this.clipPlane();if(e){this.model.root.updateMatrixWorld(!0);let t=new st;this.model.root.traverseVisible(n=>{let r=n;if(!r.isMesh||r.userData.dot||r.userData.glOnly)return;let i=r.geometry.getAttribute(`position`),a=r.geometry.getIndex();if(!i||!a)return;let o=rl(e,t.copy(r.matrixWorld).invert().elements),s=nl(i.array,a.array,o);if(!s.length)return;let c=new Ze(new Mt().setAttribute(`position`,new ht(s,3)),this.sectionMat);c.matrixAutoUpdate=!1,c.matrix.copy(r.matrixWorld),c.userData.width=1.8,c.renderOrder=15,this.sectionGroup.add(c)})}this.sectionGroup.updateMatrixWorld(!0)}sectionClick(e){let t=this.sectionPick;if(!t)return;let n=this.pick(e,this.model.pickTargets());if(!n)return;if(t.push(n.point.clone()),t.length<2){this.sectionDirty=!0,this.invalidate();return}let r=this.cam.camera.getWorldDirection(new Q),i=t[1].clone().sub(t[0]).cross(r);this.sectionPick=null,i.lengthSq()>1e-9&&(this.section={n:i.normalize(),p:t[0].clone(),offset:0,flipped:!1}),this.emitSection()}setMarginDiagnostics(e){this.model.setMarginDiagnostics(e),this.invalidate()}marginDiagnostics(e){return this.model.marginDiagnostics(e)}renderWire(e,t=null){this.wireMat??=new J({color:1845821,wireframe:!0,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});let n=[];this.model.root.traverseVisible(e=>{(!e.isMesh||e.userData.dot||e.userData.glOnly||e.userData.overlay)&&e!==this.model.root&&!e.isGroup&&n.push(e)});for(let e of n)e.visible=!1;this.glLines.group.visible=!1;let r=e.autoClear;e.autoClear=!1,e.clippingPlanes=t?[new Pt(new Q(-t[0],-t[1],-t[2]),-t[3])]:[],this.scene.overrideMaterial=this.wireMat;try{e.render(this.scene,this.cam.camera)}finally{this.scene.overrideMaterial=null,e.autoClear=r,e.clippingPlanes=[],this.glLines.group.visible=!0;for(let e of n)e.visible=!0}this.triangles=e.info.render.triangles,this.drawCalls=e.info.render.calls}placeLabel(){let e=this.model.measureMid();e?(e.project(this.cam.camera),e.z>1?this.label.style.display=`none`:(this.label.style.display=`block`,this.label.style.left=(e.x+1)/2*this.width+`px`,this.label.style.top=(1-e.y)/2*this.height+`px`)):this.label.style.display=`none`}ndc(e){let t=this.canvas.getBoundingClientRect();return new Be((e.clientX-t.left)/(t.width||1)*2-1,-((e.clientY-t.top)/(t.height||1))*2+1)}pick(e,t){if(!t.length)return null;this.model.root.updateMatrixWorld();let n=this.clipPlane();if(!n)return this.prober.pick(this.ndc(e),this.cam.camera,t);let r=this.ndc(e),i=this.cam.camera,a=new Q().setFromMatrixPosition(i.matrixWorld),o=new Q(r.x,r.y,.5).unproject(i).sub(a).normalize(),s=new Q(n[0],n[1],n[2]),c=s.dot(a)+n[3],l=s.dot(o);if(c>0)return l>=-1e-9?null:this.prober.cast(a.addScaledVector(o,c/-l+1e-4),o,t);let u=this.prober.cast(a,o,t);return u&&s.dot(u.point)+n[3]>1e-4?null:u}pickFront(e,t){if(!t.length)return null;this.model.root.updateMatrixWorld();let n=this.ndc(e),r=this.cam.camera,i=new Q().setFromMatrixPosition(r.matrixWorld),a=new Q(n.x,n.y,.5).unproject(r).sub(i).normalize(),o=this.clipPlane();for(let e=0;e<6;e++){let e=this.prober.cast(i,a,t);if(!e)return null;let n=o?new Q(o[0],o[1],o[2]):null,r=n?n.dot(e.point)+o[3]>1e-4:!1,s=e.face?e.face.normal.clone().transformDirection(e.object.matrixWorld):null;if(!r&&(!s||s.dot(a)<0))return e;i.copy(e.point).addScaledVector(a,.001)}return null}marginPointAt(e){let t=this.model.marginPoints();if(!t.length)return-1;let n=this.canvas.getBoundingClientRect(),r=this.cam.camera,i=-1,a=12;return t.forEach((t,o)=>{let s=t.clone().project(r);if(s.z>=1)return;let c=Math.hypot(e.clientX-(n.left+(s.x+1)/2*n.width),e.clientY-(n.top+(1-s.y)/2*n.height));c<a&&(a=c,i=o)}),i}noPlanoDe(e,t){let n=this.cam.camera,r=new Y;r.setFromCamera(this.ndc(e),n);let i=new Pt().setFromNormalAndCoplanarPoint(n.getWorldDirection(new Q),t);return r.ray.intersectPlane(i,new Q)}hitCrown(e){let t=this.model.activeCrown();return t?this.pick(e,[t]):null}updateCursor(){this.canvas.style.cursor=this.drag&&this.drag.mode!==`sculpt`?`grabbing`:this.tool===`orbitar`&&!this.marking()&&!this.sectionPick?`grab`:`crosshair`}marking(){return this.placing!=null||this.model.marginTarget()!=null}onContextMenu=e=>e.preventDefault();onDown=e=>{if(this.disposed)return;if(e.pointerType===`touch`){e.isPrimary&&this.endGesture(!0);let t=this.dedos.encosta(e.pointerId,e.clientX,e.clientY);if(this.dedos.ativo){try{this.canvas.setPointerCapture(e.pointerId)}catch{}t&&this.beginPinch();return}}if(this.drag)return;try{this.canvas.setPointerCapture(e.pointerId)}catch{}let t={pointer:e.pointerId,x:e.clientX,y:e.clientY,button:e.button,moved:0,mode:`rot`,pivot:null,toque:e.pointerType===`touch`},n=this.tool;if(e.button===0&&e.altKey&&this.model.hasModel())t.mode=`light`,this.drag=t,this.updateCursor();else{if(e.button===0&&!e.ctrlKey&&!e.shiftKey&&this.model.marginTarget()!=null&&this.model.mode===`upload`&&this.model.suggestTarget()==null){let n=this.marginPointAt(e);if(n>=0){t.mode=`margin`,t.point=n,this.drag=t,this.cam.goal=null,this.updateCursor();return}}if(e.button===0&&(z(n)||n===`aumentar`)&&!this.marking()&&!this.sectionPick){let r=this.hitCrown(e);if(r&&this.model.beginStroke()){t.mode=`sculpt`,this.drag=t,n===`aumentar`?(t.puxar=r.point.clone(),this.model.prepararAumento()):this.model.sculptAt(r.point,n)&&this.invalidate(),this.updateCursor();return}}if(t.mode=e.button===0&&e.ctrlKey?`roll`:e.button===0&&!e.shiftKey?`rot`:`pan`,t.mode!==`pan`&&this.model.hasModel()){let n=this.pick(e,this.model.pickTargets());t.pivot=n?n.point.clone():null}this.drag=t,this.cam.goal=null,this.updateCursor()}};onMove=e=>{if(e.pointerType===`touch`&&this.dedos.tem(e.pointerId)){let t=this.dedos.anda(e.pointerId,e.clientX,e.clientY);if(this.dedos.ativo){t&&this.pinchStep(t);return}}let t=this.drag;if(!t||e.pointerId!==t.pointer||e.buttons===0)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.moved+=Math.abs(n)+Math.abs(r),t.x=e.clientX,t.y=e.clientY,t.mode===`sculpt`&&t.puxar){let n=this.noPlanoDe(e,t.puxar);n&&this.model.puxar(t.puxar,n,this.raioDoAumento)&&this.invalidate()}else if(t.mode===`sculpt`){let t=this.tool;if(!z(t))return;let n=this.hitCrown(e);n&&this.model.sculptAt(n.point,t)&&this.invalidate()}else if(t.mode===`margin`){let n=this.pickFront(e,this.model.marginTargets());n&&t.point!=null&&this.model.moveMarginPoint(t.point,n.point,!1)}else if(t.mode===`light`){let e=this.appearance,t=Ts(e.lightAzimuth,e.lightElevation),i=ws(t.x+n/j_,t.y-r/j_);(i.azimuth!==e.lightAzimuth||i.elevation!==e.lightElevation)&&(this.setAppearance({...e,lightAzimuth:i.azimuth,lightElevation:i.elevation}),this.onAppearanceChange?.(this.getAppearance()))}else if(t.mode===`rot`)this.cam.rotate(n,r,t.pivot);else if(t.mode===`roll`){let e=this.canvas.getBoundingClientRect(),i=e.left+e.width/2,a=e.top+e.height/2,o=Math.atan2(t.y-r-a,t.x-n-i),s=Math.atan2(t.y-a,t.x-i)-o;s=Math.atan2(Math.sin(s),Math.cos(s)),this.cam.roll(s,t.pivot)}else this.cam.pan(n,r)};endDrag(e,t,n,r=!1){let i=this.drag;if(i&&e===i.pointer){if(this.drag=null,!r)try{this.canvas.releasePointerCapture(e)}catch{}if(this.updateCursor(),this.refine=!0,this.lastLow=performance.now(),i.mode===`sculpt`){let e=this.model.endStroke();this.invalidate(),e!=null&&this.onEdit?.(e)}else if(i.mode===`light`)this.invalidate();else if(i.mode===`margin`){if(i.moved>=L_&&i.point!=null){let e=this.pickFront(t,this.model.marginTargets());e&&this.model.moveMarginPoint(i.point,e.point,!0)}else i.point!=null&&n&&(t.altKey||t.metaKey)&&this.model.removeMarginPoint(i.point);this.invalidate()}else n&&!i.semClique&&i.moved<L_&&i.button===0&&this.click(t)}}onUp=e=>this.release(e,!0);onCancel=e=>this.release(e,!1);onLostCapture=e=>{let t=this.drag;this.release(e,!1,t&&t.pointer===e.pointerId?{clientX:t.x,clientY:t.y}:e)};onVisibility=()=>{document.visibilityState===`hidden`&&this.endGesture(!1)};endGesture(e){let t=this.drag;t&&(t.toque||!e)&&this.endDrag(t.pointer,{clientX:t.x,clientY:t.y},!1),this.dedos.ativo&&(this.refine=!0,this.lastLow=performance.now()),this.dedos.limpa(),this.pinchAnchor=null}release(e,t,n=e){if(e.pointerType===`touch`){let t=this.dedos.sai(e.pointerId);if(t){try{this.canvas.releasePointerCapture(e.pointerId)}catch{}this.pinchAnchor=null,t.novoPar?this.beginPinch():t.resta?this.resumeDrag(t.resta):(this.refine=!0,this.lastLow=performance.now());return}}this.endDrag(e.pointerId,n,t)}beginPinch(){let e=this.drag;e?.mode===`sculpt`&&e.toque&&this.model.cancelStroke()&&this.invalidate(),e&&this.endDrag(e.pointer,{clientX:e.x,clientY:e.y},!1,!0);let t=this.dedos.meio();if(!t)return;this.cam.goal=null;let n={clientX:t.x,clientY:t.y},r=this.model.hasModel()?this.pick(n,this.model.pickTargets()):null;if(r)this.pinchAnchor=r.point.clone();else{let e=this.ndc(n);this.pinchAnchor=this.cam.pointOnTargetPlane(e.x,e.y)}this.updateCursor()}pinchStep(e){this.pinchAnchor&&this.cam.pinch(e.dx,e.dy,e.abertura,this.pinchAnchor,this.height)}resumeDrag(e){let t={pointer:e.id,x:e.x,y:e.y,button:0,moved:0,mode:`rot`,pivot:null,semClique:!0,toque:!0};if(this.model.hasModel()){let n=this.pick({clientX:e.x,clientY:e.y},this.model.pickTargets());t.pivot=n?n.point.clone():null}this.drag=t,this.cam.goal=null,this.updateCursor()}onKey=e=>{if(this.disposed||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.key,n=t===`ArrowLeft`?-24:t===`ArrowRight`?H_:0,r=t===`ArrowUp`?-24:t===`ArrowDown`?H_:0;if(n||r)e.shiftKey?this.cam.pan(n,r):this.cam.rotate(n,r,null);else if(t===`+`||t===`=`)this.cam.zoom(-100);else if(t===`-`||t===`_`)this.cam.zoom(U_);else if(t===`Home`)this.overview();else return;e.preventDefault()};onWheel=e=>{e.preventDefault();let t=e.deltaMode===1?16:e.deltaMode===2?this.height||600:1,n=this.model.hasModel()?this.pick(e,this.model.pickTargets()):null;this.cam.zoom(e.deltaY*t,n?n.point:null),this.lastWheel=performance.now()};click(e){if(this.sectionPick)this.sectionClick(e);else if(this.model.suggestTarget()!=null&&this.model.mode===`upload`){let t=this.pickFront(e,this.model.marginTargets());if(!t)return;let n=t.face?t.face.normal.clone().transformDirection(t.object.matrixWorld):void 0;this.model.suggestAt(t.point,t.object.userData.kind,n,t.point.clone().sub(this.cam.camera.position)),this.invalidate()}else if(this.model.marginTarget()!=null&&this.model.mode===`upload`){let t=!1,n=this.model.marginFirstPoint();if(n){n.project(this.cam.camera);let r=this.canvas.getBoundingClientRect(),i=r.left+(n.x+1)/2*r.width,a=r.top+(1-n.y)/2*r.height;t=n.z<1&&Math.hypot(e.clientX-i,e.clientY-a)<R_}let r=this.pick(e,this.model.marginTargets());if(!r)return;this.model.addMarginPoint(r.point,r.object.userData.kind,t)}else if(this.placing!=null&&this.model.mode===`upload`){let t=this.pick(e,this.model.scanTargets());if(!t||!t.face)return;let n=t.face.normal.clone().transformDirection(t.object.matrixWorld),r=t.point.clone().sub(this.cam.camera.position),i=this.placing;if(!this.model.place(i,t.point,n,t.object.userData.kind,r))return;this.placing=null,this.updateCursor(),this.invalidate(),this.onPlaced?.(i)}else if(this.tool===`medir`){let t=this.pick(e,this.model.pickTargets());if(!t)return;let n=this.model.addMeasurePoint(t.point);n!=null&&(this.label.textContent=n.toFixed(2).replace(`.`,`,`)+` mm`),this.invalidate(),this.onMeasure?.(n)}}clear(){this.model.clear(),(this.section||this.sectionPick)&&(this.section=null,this.sectionPick=null,this.emitSection()),this.placing=null,this.updateCursor(),this.invalidate()}loadSample(){this.model.loadSample(),this.placing=null,this.updateCursor(),this.overview()}async loadScan(e,t,n){if(this.disposed)throw Error(`O visualizador 3D já foi encerrado.`);let r=await this.model.loadScan(e,t,n);return this.overview(),r}hasModel(){return this.model.hasModel()}available(e){return this.model.available(e)}isPrepared(e){return this.model.isPrepared(e)}setLens(e){this.cam.setLens(e),this.dirty=!0}getLens(){return this.cam.lens}overview(){this.cam.goal=fl(this.model.overviewGoal(),this.cam.camera.aspect),this.invalidate()}focus(e,t){let n=this.model.focusGoal(e,t);n&&(this.cam.goal=fl(n,this.cam.camera.aspect),this.invalidate())}frameScan(e,t,n,r,i){let a=this.model.frameGoal(e,t,n,pl(r,i,this.cam.camera.aspect));a&&(this.cam.goal=a,this.invalidate())}analyze(){return this.model.analyze()}setPlanHighlight(e){this.model.setPlanHighlight(e),this.invalidate()}setPlacing(e){e!=null&&this.model.cancelMargin(),this.placing=e,this.updateCursor()}startMargin(e){this.placing=null,this.model.startMargin(e),this.updateCursor(),this.invalidate()}suggestMargin(e){this.placing=null,this.model.suggestMargin(e),this.updateCursor(),this.invalidate()}undoMarginPoint(){return this.model.undoMarginPoint()}finishMargin(){let e=this.model.finishMargin();return this.updateCursor(),this.invalidate(),e}cancelMargin(){this.model.cancelMargin(),this.updateCursor(),this.invalidate()}marginTarget(){return this.model.marginTarget()}marginState(e){return this.model.marginState(e)}marginReport(e){return this.model.marginReport(e)}getMargin(e){return this.model.getMargin(e)}detectPreparations(e){return this.model.detectPreparations(e)}detectedPreparations(){return this.model.detectedPreparations()}suggestDetected(e,t,n){this.placing=null;let r=this.model.suggestDetected(e,t,n);return this.updateCursor(),this.invalidate(),r}suggestForTooth(e){this.placing=null;let t=this.model.suggestForTooth(e);return this.updateCursor(),this.invalidate(),t}useMarginVariant(e,t){let n=this.model.useMarginVariant(e,t);return this.invalidate(),n}finishMarginAuto(){let e=this.model.finishMarginAuto();return this.updateCursor(),this.invalidate(),e}*passosMargemAuto(){let e=yield*this.model.passosMargemAuto();return this.updateCursor(),this.invalidate(),e}marginAutoRefusals(e){return this.model.marginAutoRefusals(e)}marginPointNear(e,t){return this.model.marginPointNear(e,t)}moveMarginPoint(e,t,n){return this.model.moveMarginPoint(e,t,n)}insertMarginPoint(e){return this.model.insertMarginPoint(e)}removeMarginPoint(e){return this.model.removeMarginPoint(e)}get onDetected(){return this.model.onDetected}set onDetected(e){this.model.onDetected=e}setMargin(e,t){let n=this.model.setMargin(e,t);return this.updateCursor(),this.invalidate(),n}generate(e,t,n,r){let i=this.model.generate(e,t,n,r);return this.invalidate(),i}generateError(e){return this.model.generateError(e)}setToothLibrary(e){return this.model.setToothLibrary(e)}listToothCollections(){return this.model.listToothCollections()}toothCollectionFiles(e){return this.model.toothCollectionFiles(e)}setDefaultCollection(e){this.model.setDefaultCollection(e)}getDefaultCollection(){return this.model.getDefaultCollection()}setPieceShape(e,t){this.model.setPieceShape(e,t),this.invalidate()}getPieceShape(e){return this.model.getPieceShape(e)}getPieceForma(e){return this.model.getPieceForma(e)}toothThumbnail(...e){return this.model.toothThumbnail(...e)}pieceThumbnail(...e){return this.model.pieceThumbnail(...e)}pieceWarnings(e){return this.model.pieceWarnings(e)}getPieceSnapshot(e){return this.model.getPieceSnapshot(e)}setPieceMinEsp(e,t){this.model.setPieceMinEsp(e,t)}alturaQueVale(e,t){return this.model.alturaQueVale(e,t)}restorePiece(e,t){let n=this.model.restorePiece(e,t);return this.invalidate(),n}check(e){return this.model.check(e)}medidasIA(e){return this.model.medidasIA(e)}removePiece(e){this.model.removePiece(e),this.invalidate()}setActive(e){this.model.setActive(e),this.invalidate()}setRaioDoAumento(e){this.raioDoAumento=ie(e)}setTool(e){this.tool=e,this.updateCursor(),e!==`medir`&&(this.model.clearMeasure(),this.invalidate(),this.onMeasure?.(null))}setLayers(e){this.model.setLayers(e),e.malha!==void 0&&(this.wire=e.malha),this.invalidate()}setWireframe(e){this.wire=e,this.invalidate()}listObjects(){return this.model.listObjects()}setExtraMeshes(e){this.model.setExtraMeshes(e),this.invalidate()}setObjectVisible(e,t){this.model.setObjectVisible(e,t),this.invalidate()}setObjectOpacity(e,t){this.model.setObjectOpacity(e,t),this.invalidate()}undo(){let e=this.model.undo();return e&&this.invalidate(),e}canUndo(){return this.model.canUndo()}exportFiles(e){return this.model.exportFiles(e)}};function G_(){if(typeof document>`u`)throw Error(`O visualizador 3D precisa de um navegador.`);return new W_}export{c as MIN_ESP_PADRAO,l as MIN_MARGIN_POINTS,d as OCCLUSION_DEFAULT,a as OCLUSOES,o as PIECE_SNAPSHOT_VERSION,s as VERSAO_ALTURA,f as VERSAO_COROA,G_ as createViewer,T as defaultLayers,t as defaultParams,h as occlusalTarget};