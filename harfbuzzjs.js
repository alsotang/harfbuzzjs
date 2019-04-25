
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var b;b||(b=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in b)b.hasOwnProperty(l)&&(k[l]=b[l]);b.arguments=[];b.thisProgram="./this.program";b.quit=function(a,c){throw c;};b.preRun=[];b.postRun=[];var m=!1,n=!1,p=!1,q=!1;m="object"===typeof window;n="function"===typeof importScripts;p="object"===typeof process&&"function"===typeof require&&!m&&!n;q=!m&&!p&&!n;var r="";
if(p){r=__dirname+"/";var t,u;b.read=function(a,c){t||(t=require("fs"));u||(u=require("path"));a=u.normalize(a);a=t.readFileSync(a);return c?a:a.toString()};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(b.thisProgram=process.argv[1].replace(/\\/g,"/"));b.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",v);b.quit=
function(a){process.exit(a)};b.inspect=function(){return"[Emscripten Module object]"}}else if(q)"undefined"!=typeof read&&(b.read=function(a){return read(a)}),b.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments),"function"===typeof quit&&(b.quit=function(a){quit(a)});
else if(m||n)n?r=self.location.href:document.currentScript&&(r=document.currentScript.src),_scriptDir&&(r=_scriptDir),0!==r.indexOf("blob:")?r=r.substr(0,r.lastIndexOf("/")+1):r="",b.read=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},n&&(b.readBinary=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),b.readAsync=function(a,c,d){var e=new XMLHttpRequest;e.open("GET",a,!0);
e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)},b.setWindowTitle=function(a){document.title=a};var x=b.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=b.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||x);for(l in k)k.hasOwnProperty(l)&&(b[l]=k[l]);k=void 0;
function z(a){var c=B[C>>2];a=c+a+15&-16;if(a<=D())B[C>>2]=a;else if(!E(a))return 0;return c}var aa={"f64-rem":function(a,c){return a%c},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&y("no native wasm support detected");var F,G=!1,H="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function I(a){if(a){for(var c=J,d=a+void 0,e=a;c[e]&&!(e>=d);)++e;if(16<e-a&&c.subarray&&H)a=H.decode(c.subarray(a,e));else{for(d="";a<e;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function K(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,L,J,B;function M(){b.HEAP8=L=new Int8Array(buffer);b.HEAP16=new Int16Array(buffer);b.HEAP32=B=new Int32Array(buffer);b.HEAPU8=J=new Uint8Array(buffer);b.HEAPU16=new Uint16Array(buffer);b.HEAPU32=new Uint32Array(buffer);b.HEAPF32=new Float32Array(buffer);b.HEAPF64=new Float64Array(buffer)}var C=295168,N=b.TOTAL_MEMORY||16777216;5242880>N&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+N+"! (TOTAL_STACK=5242880)");
b.buffer?buffer=b.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(F=new WebAssembly.Memory({initial:N/65536}),buffer=F.buffer):buffer=new ArrayBuffer(N);M();B[C>>2]=5538304;function O(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.M;"number"===typeof d?void 0===c.L?b.dynCall_v(d):b.dynCall_vi(d,c.L):d(void 0===c.L?null:c.L)}}}var P=[],ba=[],ca=[],da=[],Q=!1;function ea(){var a=b.preRun.shift();P.unshift(a)}var R=0,S=null,T=null;
b.preloadedImages={};b.preloadedAudios={};function fa(){var a=U;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var U="harfbuzzjs.wasm";if(!fa()){var ha=U;U=b.locateFile?b.locateFile(ha,r):r+ha}function ia(){try{if(b.wasmBinary)return new Uint8Array(b.wasmBinary);if(b.readBinary)return b.readBinary(U);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}
function ja(){return b.wasmBinary||!m&&!n||"function"!==typeof fetch?new Promise(function(a){a(ia())}):fetch(U,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+U+"'";return a.arrayBuffer()}).catch(function(){return ia()})}
function ka(a){function c(a){b.asm=a.exports;R--;b.monitorRunDependencies&&b.monitorRunDependencies(R);0==R&&(null!==S&&(clearInterval(S),S=null),T&&(a=T,T=null,a()))}function d(a){c(a.instance)}function e(a){ja().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);v(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:aa};R++;b.monitorRunDependencies&&b.monitorRunDependencies(R);if(b.instantiateWasm)try{return b.instantiateWasm(f,
c)}catch(h){return y("Module.instantiateWasm callback failed with error: "+h),!1}b.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||fa()||"function"!==typeof fetch?e(d):WebAssembly.instantiateStreaming(fetch(U,{credentials:"same-origin"}),f).then(d,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");e(d)});return{}}
b.asm=function(a,c){c.memory=F;c.table=new WebAssembly.Table({initial:242,maximum:242,element:"anyfunc"});c.__memory_base=1024;c.__table_base=0;return ka(c)};ba.push({M:function(){la()}});var V={};
function W(a){if(W.K){var c=B[a>>2];var d=B[c>>2]}else W.K=!0,V.USER=V.LOGNAME="web_user",V.PATH="/",V.PWD="/",V.HOME="/home/web_user",V.LANG="C.UTF-8",V._=b.thisProgram,d=Q?X(1024):z(1024),c=Q?X(256):z(256),B[c>>2]=d,B[a>>2]=c;a=[];var e=0,f;for(f in V)if("string"===typeof V[f]){var h=f+"="+V[f];a.push(h);e+=h.length}if(1024<e)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(f=0;f<a.length;f++){e=h=a[f];for(var g=d,A=0;A<e.length;++A)L[g++>>0]=e.charCodeAt(A);L[g>>0]=0;B[c+4*f>>2]=d;
d+=h.length+1}B[c+4*a.length>>2]=0}function ma(a){b.___errno_location&&(B[b.___errno_location()>>2]=a);return a}function D(){return L.length}function E(a){if(2147418112<a)return!1;for(var c=Math.max(D(),16777216);c<a;)536870912>=c?c=K(2*c):c=Math.min(K((3*c+2147483648)/4),2147418112);a=K(c);var d=buffer.byteLength;try{var e=-1!==F.grow((a-d)/65536)?buffer=F.buffer:null}catch(f){e=null}if(!e||e.byteLength!=c)return!1;M();return!0}
function Y(a){if(0===a)return 0;a=I(a);if(!V.hasOwnProperty(a))return 0;Y.K&&na(Y.K);a=V[a];for(var c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:c+4}var f=c+1;if(c=X(f))if(d=c,e=L,0<f){f=d+f-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var A=a.charCodeAt(++h);g=65536+((g&1023)<<10)|A&1023}if(127>=g){if(d>=f)break;e[d++]=g}else{if(2047>=g){if(d+1>=f)break;e[d++]=
192|g>>6}else{if(65535>=g){if(d+2>=f)break;e[d++]=224|g>>12}else{if(d+3>=f)break;e[d++]=240|g>>18;e[d++]=128|g>>12&63}e[d++]=128|g>>6&63}e[d++]=128|g&63}}e[d]=0}Y.K=c;return Y.K}
var oa=b.asm({},{c:v,b:function(a,c,d,e){v("Assertion failed: "+I(a)+", at: "+[c?I(c):"unknown filename",d,e?I(e):"unknown function"])},k:W,j:function(){},d:ma,i:function(){return 0},h:function(){},g:D,f:function(a,c,d){J.set(J.subarray(c,c+d),a)},e:E,n:Y,m:function(a){switch(a){case 30:return 16384;case 85:return 131068;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;
case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;
case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1E3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return"object"===typeof navigator?navigator.hardwareConcurrency||1:1}ma(22);return-1},
l:function(){v("OOM")},a:C},buffer);b.asm=oa;var la=b.___emscripten_environ_constructor=function(){return b.asm.o.apply(null,arguments)},na=b._free=function(){return b.asm.p.apply(null,arguments)};b._hb_blob_create=function(){return b.asm.q.apply(null,arguments)};b._hb_blob_destroy=function(){return b.asm.r.apply(null,arguments)};b._hb_blob_get_length=function(){return b.asm.s.apply(null,arguments)};b._hb_buffer_add_utf8=function(){return b.asm.t.apply(null,arguments)};
b._hb_buffer_create=function(){return b.asm.u.apply(null,arguments)};b._hb_buffer_destroy=function(){return b.asm.v.apply(null,arguments)};b._hb_buffer_get_length=function(){return b.asm.w.apply(null,arguments)};b._hb_buffer_guess_segment_properties=function(){return b.asm.x.apply(null,arguments)};b._hb_buffer_serialize_glyphs=function(){return b.asm.y.apply(null,arguments)};b._hb_buffer_set_direction=function(){return b.asm.z.apply(null,arguments)};
b._hb_direction_from_string=function(){return b.asm.A.apply(null,arguments)};b._hb_face_create=function(){return b.asm.B.apply(null,arguments)};b._hb_face_destroy=function(){return b.asm.C.apply(null,arguments)};b._hb_font_create=function(){return b.asm.D.apply(null,arguments)};b._hb_font_destroy=function(){return b.asm.E.apply(null,arguments)};b._hb_font_set_scale=function(){return b.asm.F.apply(null,arguments)};b._hb_shape=function(){return b.asm.G.apply(null,arguments)};
b._hb_version_string=function(){return b.asm.H.apply(null,arguments)};var X=b._malloc=function(){return b.asm.I.apply(null,arguments)};b.dynCall_vi=function(){return b.asm.J.apply(null,arguments)};b.asm=oa;b.then=function(a){if(b.calledRun)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c();a(b)}}return b};function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;
T=function pa(){b.calledRun||Z();b.calledRun||(T=pa)};
function Z(){function a(){if(!b.calledRun&&(b.calledRun=!0,!G)){Q||(Q=!0,O(ba));O(ca);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();da.unshift(a)}O(da)}}if(!(0<R)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ea();O(P);0<R||b.calledRun||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},
1)):a())}}b.run=Z;function v(a){if(b.onAbort)b.onAbort(a);void 0!==a?(x(a),y(a),a=JSON.stringify(a)):a="";G=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}b.abort=v;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();b.noExitRuntime=!0;Z();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    