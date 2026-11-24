(()=>{var Zl="170";var kf=0,Zh=1,zf=2;var hd=1,$l=2,ii=3,Ri=0,Ge=1,Fe=2,Ti=0,Ts=1,Go=2,$h=3,Jh=4,Hf=5,Yi=100,Vf=101,Gf=102,Wf=103,Xf=104,qf=200,Yf=201,Zf=202,$f=203,Ec=204,Sc=205,Jf=206,Kf=207,Qf=208,jf=209,tp=210,ep=211,np=212,ip=213,sp=214,wc=0,Tc=1,Ac=2,Ps=3,Rc=4,Cc=5,Pc=6,Ic=7,ud=0,rp=1,op=2,Ai=0,ap=1,cp=2,lp=3,Fr=4,hp=5,up=6,dp=7;var dd=300,Is=301,Ls=302,Lc=303,Dc=304,fa=306,Uc=1e3,$i=1001,Nc=1002,dn=1003,fp=1004;var oo=1005;var zn=1006,Ga=1007;var Ji=1008;var oi=1009,fd=1010,pd=1011,_r=1012,Jl=1013,Ki=1014,Hn=1015,Or=1016,Kl=1017,Ql=1018,Ds=1020,md=35902,gd=1021,_d=1022,Ln=1023,xd=1024,yd=1025,As=1026,Us=1027,jl=1028,th=1029,vd=1030,eh=1031;var nh=1033,Bo=33776,ko=33777,zo=33778,Ho=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,zc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,Zc=37813,$c=37814,Jc=37815,Kc=37816,Qc=37817,jc=37818,tl=37819,el=37820,nl=37821,Vo=36492,il=36494,sl=36495,Md=36283,rl=36284,ol=36285,al=36286;var Wo=2300,cl=2301,Wa=2302,Kh=2400,Qh=2401,jh=2402;var pp=3200,mp=3201;var bd=0,gp=1,Si="",Ze="srgb",Vs="srgb-linear",pa="linear",he="srgb";var rs=7680;var tu=519,_p=512,xp=513,yp=514,Ed=515,vp=516,Mp=517,bp=518,Ep=519,ll=35044;var eu="300 es",si=2e3,Xo=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=1234567,ur=Math.PI/180,xr=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function ih(i,t){return(i%t+t)%t}function Sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wp(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function Tp(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function Ap(i,t=1){return t-Math.abs(ih(i,t*2)-t)}function Rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ip(i,t){return i+Math.random()*(t-i)}function Lp(i){return i*(.5-Math.random())}function Dp(i){i!==void 0&&(nu=i);let t=nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(i){return i*ur}function Np(i){return i*xr}function Fp(i){return(i&i-1)===0&&i!==0}function Op(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Br={DEG2RAD:ur,RAD2DEG:xr,generateUUID:Vn,clamp:Ne,euclideanModulo:ih,mapLinear:Sp,inverseLerp:wp,lerp:dr,damp:Tp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Ip,randFloatSpread:Lp,seededRandom:Dp,degToRad:Up,radToDeg:Np,isPowerOfTwo:Fp,ceilPowerOfTwo:Op,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:kp,normalize:ce,denormalize:In},nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=s[0],g=s[3],p=s[6],x=s[1],v=s[4],_=s[7],A=s[2],T=s[5],R=s[8];return r[0]=o*y+a*x+c*A,r[3]=o*g+a*v+c*T,r[6]=o*p+a*_+c*R,r[1]=l*y+h*x+u*A,r[4]=l*g+h*v+u*T,r[7]=l*p+h*_+u*R,r[2]=d*y+f*x+m*A,r[5]=d*g+f*v+m*T,r[8]=d*p+f*_+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xa=new Ht;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){let i=qo("canvas");return i.style.display="block",i}var iu={};function lr(i){i in iu||(iu[i]=!0,console.warn(i))}function Hp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var su=[.64,.33,.3,.6,.15,.06],ru=[.2126,.7152,.0722],ou=[.3127,.329],au=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Vs]:{primaries:su,whitePoint:ou,transfer:pa,toXYZ:au,fromXYZ:cu,luminanceCoefficients:ru,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:su,whitePoint:ou,transfer:he,toXYZ:au,fromXYZ:cu,luminanceCoefficients:ru,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});var os,hl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=qo("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wp=0,Yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xp=0,an=class i extends Ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,s=$i,r=zn,o=Ji,a=Ln,c=oi,l=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Vn(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=dd;an.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(f+1)/2,A=(p+1)/2,T=(h+d)/4,R=(u+y)/4,C=(m+g)/4;return v>_&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=R/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*y,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,p*x);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A}let _=a*x;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+y*_,g===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new w,lu=new Pi,ci=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),co.subVectors(this.max,js),as.subVectors(t.a,js),cs.subVectors(t.b,js),ls.subVectors(t.c,js),xi.subVectors(cs,as),yi.subVectors(ls,cs),zi.subVectors(as,ls);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-zi.z,zi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];return!Za(e,as,cs,ls,co)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,as,cs,ls,co))?!1:(lo.crossVectors(xi,yi),e=[lo.x,lo.y,lo.z],Za(e,as,cs,ls,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new w,new w,new w,new w,new w,new w,new w,new w],Rn=new w,ao=new ci,as=new w,cs=new w,ls=new w,xi=new w,yi=new w,zi=new w,js=new w,co=new w,lo=new w,Hi=new w;function Za(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qp=new ci,tr=new w,$a=new w,Ii=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add($a)),this.expandByPoint(tr.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new w,Ja=new w,ho=new w,vi=new w,Ka=new w,uo=new w,Qa=new w,yr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ho),a=vi.dot(this.direction),c=-vi.dot(ho),l=vi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(ho,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){Ka.subVectors(e,t),uo.subVectors(n,t),Qa.crossVectors(Ka,uo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);let c=a*this.direction.dot(uo.crossVectors(vi,uo));if(c<0)return null;let l=a*this.direction.dot(Ka.cross(vi));if(l<0||c+l>o)return null;let h=-a*vi.dot(Qa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,y,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,y=l*u;e[0]=d+y*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,y=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,Zp)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Mi.crossVectors(n,hn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Mi.crossVectors(n,hn)),Mi.normalize(),fo.crossVectors(hn,Mi),s[0]=Mi.x,s[4]=fo.x,s[8]=hn.x,s[1]=Mi.y,s[5]=fo.y,s[9]=hn.y,s[2]=Mi.z,s[6]=fo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],x=n[3],v=n[7],_=n[11],A=n[15],T=s[0],R=s[4],C=s[8],b=s[12],M=s[1],I=s[5],O=s[9],B=s[13],G=s[2],K=s[6],W=s[10],tt=s[14],V=s[3],ct=s[7],gt=s[11],At=s[15];return r[0]=o*T+a*M+c*G+l*V,r[4]=o*R+a*I+c*K+l*ct,r[8]=o*C+a*O+c*W+l*gt,r[12]=o*b+a*B+c*tt+l*At,r[1]=h*T+u*M+d*G+f*V,r[5]=h*R+u*I+d*K+f*ct,r[9]=h*C+u*O+d*W+f*gt,r[13]=h*b+u*B+d*tt+f*At,r[2]=m*T+y*M+g*G+p*V,r[6]=m*R+y*I+g*K+p*ct,r[10]=m*C+y*O+g*W+p*gt,r[14]=m*b+y*B+g*tt+p*At,r[3]=x*T+v*M+_*G+A*V,r[7]=x*R+v*I+_*K+A*ct,r[11]=x*C+v*O+_*W+A*gt,r[15]=x*b+v*B+_*tt+A*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+y*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],x=u*g*l-y*d*l+y*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*y*l-m*u*l+m*a*f-o*y*f-h*a*p+o*u*p,A=m*u*c-h*y*c-m*a*d+o*y*d+h*a*g-o*u*g,T=e*x+n*v+s*_+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=x*R,t[1]=(y*d*r-u*g*r-y*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(a*g*r-y*c*r+y*s*l-n*g*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=v*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=_*R,t[9]=(m*u*r-h*y*r-m*n*f+e*y*f+h*n*p-e*u*p)*R,t[10]=(o*y*r-m*a*r+m*n*l-e*y*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=A*R,t[13]=(h*y*s-m*u*s+m*n*d-e*y*d-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*y*s-m*n*c+e*y*c+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,y=o*h,g=o*u,p=a*u,x=c*l,v=c*h,_=c*u,A=n.x,T=n.y,R=n.z;return s[0]=(1-(y+p))*A,s[1]=(f+_)*A,s[2]=(m-v)*A,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+v)*R,s[9]=(g-x)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===si)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Xo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h,m,y;if(a===si)m=(o+r)*u,y=-2*u;else if(a===Xo)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new w,Cn=new le,Yp=new w(0,0,0),Zp=new w(1,1,1),Mi=new w,fo=new w,hn=new w,hu=new le,uu=new Pi,Gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$p=0,du=new w,us=new Pi,ti=new le,po=new w,er=new w,Jp=new w,Kp=new Pi,fu=new w(1,0,0),pu=new w(0,1,0),mu=new w(0,0,1),gu={type:"added"},Qp={type:"removed"},ds={type:"childadded",child:null},ja={type:"childremoved",child:null},De=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new Gn,n=new Pi,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ht}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(er,po,this.up):ti.lookAt(po,er,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ti),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new w(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new w,ei=new w,tc=new w,ni=new w,fs=new w,ps=new w,_u=new w,ec=new w,nc=new w,ic=new w,sc=new ue,rc=new ue,oc=new ue,wi=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ei.subVectors(n,e),tc.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ei),c=Pn.dot(tc),l=ei.dot(ei),h=ei.dot(tc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ei.subVectors(t,e),Pn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ps.subVectors(r,n),ec.subVectors(t,n);let c=fs.dot(ec),l=ps.dot(ec);if(c<=0&&l<=0)return e.copy(n);nc.subVectors(t,s);let h=fs.dot(nc),u=ps.dot(nc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(fs,o);ic.subVectors(t,r);let f=fs.dot(ic),m=ps.dot(ic);if(m>=0&&f<=m)return e.copy(r);let y=f*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ps,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return _u.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(_u,a);let p=1/(g+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ih(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ac(o,r,t+1/3),this.g=ac(o,r,t),this.b=ac(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ee.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ne(Ye.r*255,0,255))*65536+Math.round(Ne(Ye.g*255,0,255))*256+Math.round(Ne(Ye.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ze){ee.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(mo);let n=dr(bi.h,mo.h,e),s=dr(bi.s,mo.s,e),r=dr(bi.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new ot;ot.NAMES=wd;var jp=0,li=class extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Vn(),this.name="",this.blending=Ts,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Sc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xn=class extends li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new w,go=new nt,$e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ll&&(t.usage=this.usage),t}};var $o=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jo=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},tm=0,_n=new le,cc=new De,ms=new w,un=new ci,nr=new ci,He=new w,Ie=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Jo:$o)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(un.min,nr.min),un.expandByPoint(He),He.addVectors(un.max,nr.max),un.expandByPoint(He)):(un.expandByPoint(nr.min),un.expandByPoint(nr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)He.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),He.add(ms)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,u=new w,d=new nt,f=new nt,m=new nt,y=new w,g=new w;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[C].add(y),a[b].add(y),a[M].add(y),c[C].add(g),c[b].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,b=x.length;C<b;++C){let M=x[C],I=M.start,O=M.count;for(let B=I,G=I+O;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new w,_=new w,A=new w,T=new w;function R(C){A.fromBufferAttribute(s,C),T.copy(A);let b=a[C];v.copy(b),v.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(T,b);let I=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,b=x.length;C<b;++C){let M=x[C],I=M.start,O=M.count;for(let B=I,G=I+O;B<G;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xu=new le,Vi=new yr,_o=new Ii,yu=new w,xo=new w,yo=new w,vo=new w,lc=new w,Mo=new w,vu=new w,bo=new w,Wt=class extends De{constructor(t=new Ie,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(lc.fromBufferAttribute(u,t),o?Mo.addScaledVector(lc,h):Mo.addScaledVector(lc.sub(e),h))}e.add(Mo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(_o.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(_o,yu)===null||Vi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(xu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,A=v;_<A;_+=3){let T=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);s=Eo(this,p,t,n,l,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let x=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Eo(this,o,t,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,A=v;_<A;_+=3){let T=_,R=_+1,C=_+2;s=Eo(this,p,t,n,l,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let x=g,v=g+1,_=g+2;s=Eo(this,o,t,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function em(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ri,a),c===null)return null;bo.copy(a),bo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(bo);return l<e.near||l>e.far?null:{distance:l,point:bo.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,xo),i.getVertexPosition(c,yo),i.getVertexPosition(l,vo);let h=em(i,t,e,n,xo,yo,vo,vu);if(h){let u=new w;wi.getBarycoord(vu,xo,yo,vo,u),s&&(h.uv=wi.getInterpolatedAttribute(s,a,c,l,u,new nt)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,c,l,u,new nt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};wi.getNormal(xo,yo,vo,d.normal),h.face=d,h.barycoord=u}return h}var fe=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function m(y,g,p,x,v,_,A,T,R,C,b){let M=_/R,I=A/C,O=_/2,B=A/2,G=T/2,K=R+1,W=C+1,tt=0,V=0,ct=new w;for(let gt=0;gt<W;gt++){let At=gt*I-B;for(let qt=0;qt<K;qt++){let de=qt*M-O;ct[y]=de*x,ct[g]=At*v,ct[p]=G,l.push(ct.x,ct.y,ct.z),ct[y]=0,ct[g]=0,ct[p]=T>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(qt/R),u.push(1-gt/C),tt+=1}}for(let gt=0;gt<C;gt++)for(let At=0;At<R;At++){let qt=d+At+K*gt,de=d+At+K*(gt+1),Z=d+(At+1)+K*(gt+1),st=d+(At+1)+K*gt;c.push(qt,de,st),c.push(de,Z,st),V+=6}a.addGroup(f,V,b),f+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Td(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var im={clone:Ns,merge:Qe},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ko=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new w,Mu=new nt,bu=new nt,Ve=class extends Ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,bu),e.subVectors(bu,Mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,_s=1,fl=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(gs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Ve(gs,_s,t,e);r.layers=this.layers,this.add(r);let o=new Ve(gs,_s,t,e);o.layers=this.layers,this.add(o);let a=new Ve(gs,_s,t,e);a.layers=this.layers,this.add(a);let c=new Ve(gs,_s,t,e);c.layers=this.layers,this.add(c);let l=new Ve(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Qo=class extends an{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pl=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Ti});r.uniforms.tEquirect.value=e;let o=new Wt(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=zn),new fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},hc=new w,om=new w,am=new Ht,on=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hc.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new Ii,So=new w,Mr=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],y=s[10],g=s[11],p=s[12],x=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+x).normalize(),n[3].setComponents(c-o,d-h,g-m,_-x).normalize(),n[4].setComponents(c-a,d-u,g-y,_-v).normalize(),e===si)n[5].setComponents(c+a,d+u,g+y,_+v).normalize();else if(e===Xo)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ad(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Wn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let x=p*d-o;for(let v=0;v<l;v++){let _=v*u-r;m.push(_,-x,0),y.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let v=x+l*p,_=x+l*(p+1),A=x+1+l*(p+1),T=x+1+l*p;f.push(v,_,T),f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,T0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
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
}`,I0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,k0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,z0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:lm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:vm,bsdfs:Mm,iridescence_fragment:bm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Im,common:Lm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Nm,displacementmap_vertex:Fm,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:zm,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:eg,envmap_vertex:Xm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:$m,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Km,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:jm,lights_pars_begin:tg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:cg,lights_fragment_maps:lg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:bg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Ng,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:$g,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:c0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:b0,meshbasic_frag:E0,meshlambert_vert:S0,meshlambert_frag:w0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:I0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:k0,sprite_vert:z0,sprite_frag:H0},at={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},kn={basic:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ot(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Qe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Qe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ot(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Qe([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Qe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Qe([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Qe([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Qe([at.common,at.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Qe([at.lights,at.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};kn.physical={uniforms:Qe([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var wo={r:0,b:0,g:0},Wi=new Gn,V0=new le;function G0(i,t,e,n,s,r,o){let a=new ot(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1,_=m(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===fa)?(h===void 0&&(h=new Wt(new fe(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ns(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(v.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Wi)),h.material.toneMapped=ee.getTransfer(_.colorSpace)!==he,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Wt(new Wn(2,2),new yn({name:"BackgroundMaterial",uniforms:Ns(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(wo,Td(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:y,addToRenderList:g}}function W0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,I,O,B,G){let K=!1,W=u(B,O,I);r!==W&&(r=W,l(r.object)),K=f(M,B,O,G),K&&m(M,B,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(M,I,O,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,O){let B=O.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let K=G[I.id];K===void 0&&(K={},G[I.id]=K);let W=K[B];return W===void 0&&(W=d(c()),K[B]=W),W}function d(M){let I=[],O=[],B=[];for(let G=0;G<e;G++)I[G]=0,O[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,I,O,B){let G=r.attributes,K=I.attributes,W=0,tt=O.getAttributes();for(let V in tt)if(tt[V].location>=0){let gt=G[V],At=K[V];if(At===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),gt===void 0||gt.attribute!==At||At&&gt.data!==At.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function m(M,I,O,B){let G={},K=I.attributes,W=0,tt=O.getAttributes();for(let V in tt)if(tt[V].location>=0){let gt=K[V];gt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));let At={};At.attribute=gt,gt&&gt.data&&(At.data=gt.data),G[V]=At,W++}r.attributes=G,r.attributesNum=W,r.index=B}function y(){let M=r.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){let O=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;O[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),G[M]!==I&&(i.vertexAttribDivisor(M,I),G[M]=I)}function x(){let M=r.newAttributes,I=r.enabledAttributes;for(let O=0,B=I.length;O<B;O++)I[O]!==M[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function v(M,I,O,B,G,K,W){W===!0?i.vertexAttribIPointer(M,I,O,G,K):i.vertexAttribPointer(M,I,O,B,G,K)}function _(M,I,O,B){y();let G=B.attributes,K=O.getAttributes(),W=I.defaultAttributeValues;for(let tt in K){let V=K[tt];if(V.location>=0){let ct=G[tt];if(ct===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let gt=ct.normalized,At=ct.itemSize,qt=t.get(ct);if(qt===void 0)continue;let de=qt.buffer,Z=qt.type,st=qt.bytesPerElement,Et=Z===i.INT||Z===i.UNSIGNED_INT||ct.gpuType===Jl;if(ct.isInterleavedBufferAttribute){let ht=ct.data,Dt=ht.stride,Ot=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Yt=0;Yt<V.locationSize;Yt++)p(V.location+Yt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Yt=0;Yt<V.locationSize;Yt++)g(V.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Yt=0;Yt<V.locationSize;Yt++)v(V.location+Yt,At/V.locationSize,Z,gt,Dt*st,(Ot+At/V.locationSize*Yt)*st,Et)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht,ct.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<V.locationSize;ht++)g(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ht=0;ht<V.locationSize;ht++)v(V.location+ht,At/V.locationSize,Z,gt,At*st,At/V.locationSize*ht*st,Et)}}else if(W!==void 0){let gt=W[tt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(V.location,gt);break;case 3:i.vertexAttrib3fv(V.location,gt);break;case 4:i.vertexAttrib4fv(V.location,gt);break;default:i.vertexAttrib1fv(V.location,gt)}}}}x()}function A(){C();for(let M in n){let I=n[M];for(let O in I){let B=I[O];for(let G in B)h(B[G].object),delete B[G];delete I[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let O in I){let B=I[O];for(let G in B)h(B[G].object),delete B[G];delete I[O]}delete n[M.id]}function R(M){for(let I in n){let O=n[I];if(O[M.id]===void 0)continue;let B=O[M.id];for(let G in B)h(B[G].object),delete B[G];delete O[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function X0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y]*d[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===Or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==oi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hn&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function Y0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new on,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,v=x*4,_=p.clippingState||null;c.value=_,_=h(m,d,v,f);for(let A=0;A!==v;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,m!==!0||g===null){let p=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Z0(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=Is:a===Dc&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lc||a===Dc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new pl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var jo=class extends Ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ss=4,Eu=[.125,.215,.35,.446,.526,.582],Zi=20,uc=new jo,Su=new ot,dc=null,fc=0,pc=0,mc=!1,qi=(1+Math.sqrt(5))/2,xs=1/qi,wu=[new w(-qi,xs,0),new w(qi,xs,0),new w(-xs,0,qi),new w(xs,0,qi),new w(0,qi,-xs),new w(0,qi,xs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Li=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,To(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Or,format:Ln,colorSpace:Vs,depthBuffer:!1},s=Tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$0(r)),this._blurMaterial=J0(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,n,s){let a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Su),h.toneMapping=Ai,h.autoClear=!1;let f=new xn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Wt(new fe,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Su),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;To(s,x*v,p>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Is||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;To(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,uc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);let p=[],x=0;for(let R=0;R<Zi;++R){let C=R/y,b=Math.exp(-C*C/2);p.push(b),R===0?x+=b:R<g&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[s],A=3*_*(s>v-Ss?s-v+Ss:0),T=4*(this._cubeSize-_);To(e,A,T,3*_,2*_),c.setRenderTarget(e),c.render(u,uc)}};function $0(i){let t=[],e=[],n=[],s=i,r=i-Ss+1+Eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=Eu[o-i+Ss-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,y=3,g=2,p=1,x=new Float32Array(y*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,C=T>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];x.set(b,y*m*T),v.set(d,g*m*T);let M=[T,T,T,T,T,T];_.set(M,p*m*T)}let A=new Ie;A.setAttribute("position",new $e(x,y)),A.setAttribute("uv",new $e(v,g)),A.setAttribute("faceIndex",new $e(_,p)),t.push(A),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tu(i,t,e){let n=new ai(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J0(i,t,e){let n=new Float32Array(Zi),s=new w(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Au(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ru(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lc||c===Dc,h=c===Is||c===Ls;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Li(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Li(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,_=x.length;v<_;v+=3){let A=x[v+0],T=x[v+1],R=x[v+2];d.push(A,T,T,R,R,A)}}else if(m!==void 0){let x=m.array;y=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let A=v+0,T=v+1,R=v+2;d.push(A,T,T,R,R,A)}}else return;let g=new(Sd(d)?Jo:$o)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function t_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*y[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n_(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*u),R=new Zo(T,_,A,u);R.type=Hn,R.needsUpdate=!0;let C=v*4;for(let M=0;M<u;M++){let I=g[M],O=p[M],B=x[M],G=_*A*4*M;for(let K=0;K<I.count;K++){let W=K*C;f===!0&&(s.fromBufferAttribute(I,K),T[G+W+0]=s.x,T[G+W+1]=s.y,T[G+W+2]=s.z,T[G+W+3]=0),m===!0&&(s.fromBufferAttribute(O,K),T[G+W+4]=s.x,T[G+W+5]=s.y,T[G+W+6]=s.z,T[G+W+7]=0),y===!0&&(s.fromBufferAttribute(B,K),T[G+W+8]=s.x,T[G+W+9]=s.y,T[G+W+10]=s.z,T[G+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new nt(_,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function i_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ta=class extends an{constructor(t,e,n,s,r,o,a,c,l,h=As){if(h!==As&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Ki),n===void 0&&h===Us&&(n=Ds),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rd=new an,Cu=new ta(1,1),Cd=new Zo,Pd=new dl,Id=new Qo,Pu=[],Iu=[],Lu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Be(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),Be(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Be(e,n)}}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function m_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cu.compareFunction=Ed,r=Cu):r=Rd,e.setTexture2D(t||r,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pd,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Id,s)}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cd,s)}function E_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return b_}}function S_(i,t){i.uniform1fv(this.addr,t)}function w_(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function T_(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function A_(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function R_(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C_(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P_(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I_(i,t){i.uniform1iv(this.addr,t)}function L_(i,t){i.uniform2iv(this.addr,t)}function D_(i,t){i.uniform3iv(this.addr,t)}function U_(i,t){i.uniform4iv(this.addr,t)}function N_(i,t){i.uniform1uiv(this.addr,t)}function F_(i,t){i.uniform2uiv(this.addr,t)}function O_(i,t){i.uniform3uiv(this.addr,t)}function B_(i,t){i.uniform4uiv(this.addr,t)}function k_(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rd,r[o])}function z_(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pd,r[o])}function H_(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Id,r[o])}function V_(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cd,r[o])}function G_(i){switch(i){case 5126:return S_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}var ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}},gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function Nu(i,t){i.seq.push(t),i.map[t.id]=t}function W_(i,t,e){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),o=gc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Nu(e,l===void 0?new ml(a,i,t):new gl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new _l(a),Nu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ou=new Ht;function Z_(i){ee._getMatrix(Ou,ee.workingColorSpace,i);let t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y_(i.getShaderSource(t),o)}else return s}function $_(i,t){let e=Z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J_(i,t){let e;switch(t){case ap:e="Linear";break;case cp:e="Reinhard";break;case lp:e="Cineon";break;case Fr:e="ACESFilmic";break;case up:e="AgX";break;case dp:e="Neutral";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ao=new w;function K_(){ee.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function j_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hr(i){return i!==""}function ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(ex,ix)}var nx=new Map;function ix(i,t){let e=Gt[t];if(e===void 0){let n=nx.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(sx,rx)}function rx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function ax(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ls:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function lx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:t="ENVMAP_BLENDING_MULTIPLY";break;case rp:t="ENVMAP_BLENDING_MIX";break;case op:t="ENVMAP_BLENDING_ADD";break}return t}function hx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ux(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ox(e),l=ax(e),h=cx(e),u=lx(e),d=hx(e),f=Q_(e),m=j_(r),y=s.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?J_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),o=xl(o),o=ku(o,e),o=zu(o,e),a=xl(a),a=ku(a,e),a=zu(a,e),o=Hu(o),a=Hu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+g+o,_=x+p+a,A=Fu(s,s.VERTEX_SHADER,v),T=Fu(s,s.FRAGMENT_SHADER,_);s.attachShader(y,A),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(A).trim(),G=s.getShaderInfoLog(T).trim(),K=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let tt=Bu(s,A,"vertex"),V=Bu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+tt+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:K,programLog:O,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(T),C=new Cs(s,y),b=tx(s,y)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,X_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var dx=0,yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vl(t),e.set(t,n)),n}},vl=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function fx(i,t,e,n,s,r,o){let a=new vr,c=new yl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,O,B){let G=O.fog,K=B.geometry,W=b.isMeshStandardMaterial?O.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),V=tt&&tt.mapping===fa?tt.image.height:null,ct=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=gt!==void 0?gt.length:0,qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let de,Z,st,Et;if(ct){let ae=kn[ct];de=ae.vertexShader,Z=ae.fragmentShader}else de=b.vertexShader,Z=b.fragmentShader,c.update(b),st=c.getVertexShaderID(b),Et=c.getFragmentShaderID(b);let ht=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Yt=B.isBatchedMesh===!0,we=!!b.map,jt=!!b.matcap,Pe=!!tt,F=!!b.aoMap,mn=!!b.lightMap,Zt=!!b.bumpMap,$t=!!b.normalMap,It=!!b.displacementMap,xe=!!b.emissiveMap,Pt=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,k=b.clearcoat>0,$=b.dispersion>0,j=b.iridescence>0,Y=b.sheen>0,St=b.transmission>0,ut=E&&!!b.anisotropyMap,_t=k&&!!b.clearcoatMap,te=k&&!!b.clearcoatNormalMap,et=k&&!!b.clearcoatRoughnessMap,xt=j&&!!b.iridescenceMap,Lt=j&&!!b.iridescenceThicknessMap,Nt=Y&&!!b.sheenColorMap,yt=Y&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,Vt=!!b.specularColorMap,me=!!b.specularIntensityMap,D=St&&!!b.transmissionMap,lt=St&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,pt=b.alphaTest>0,dt=!!b.alphaHash,kt=!!b.extensions,Ce=Ai;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let Xe={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:de,fragmentShader:Z,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Vs,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:jt,envMap:Pe,envMapMode:Pe&&tt.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:mn,bumpMap:Zt,normalMap:$t,displacementMap:d&&It,emissiveMap:xe,normalMapObjectSpace:$t&&b.normalMapType===gp,normalMapTangentSpace:$t&&b.normalMapType===bd,metalnessMap:Pt,roughnessMap:P,anisotropy:E,anisotropyMap:ut,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:te,clearcoatRoughnessMap:et,dispersion:$,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:Jt,specularColorMap:Vt,specularIntensityMap:me,transmission:St,transmissionMap:D,thicknessMap:lt,gradientMap:X,opaque:b.transparent===!1&&b.blending===Ts&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:b.combine,mapUv:we&&y(b.map.channel),aoMapUv:F&&y(b.aoMap.channel),lightMapUv:mn&&y(b.lightMap.channel),bumpMapUv:Zt&&y(b.bumpMap.channel),normalMapUv:$t&&y(b.normalMap.channel),displacementMapUv:It&&y(b.displacementMap.channel),emissiveMapUv:xe&&y(b.emissiveMap.channel),metalnessMapUv:Pt&&y(b.metalnessMap.channel),roughnessMapUv:P&&y(b.roughnessMap.channel),anisotropyMapUv:ut&&y(b.anisotropyMap.channel),clearcoatMapUv:_t&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&y(b.sheenRoughnessMap.channel),specularMapUv:Jt&&y(b.specularMap.channel),specularColorMapUv:Vt&&y(b.specularColorMap.channel),specularIntensityMapUv:me&&y(b.specularIntensityMap.channel),transmissionMapUv:D&&y(b.transmissionMap.channel),thicknessMapUv:lt&&y(b.thicknessMap.channel),alphaMapUv:J&&y(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($t||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(we||J),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=m[b.type],I;if(M){let O=kn[M];I=im.clone(O.uniforms)}else I=b.uniforms;return I}function A(b,M){let I;for(let O=0,B=h.length;O<B;O++){let G=h[O];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new ux(i,M,b,r),h.push(I)),I}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function px(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,y,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||mx),n.length>1&&n.sort(d||Gu),s.length>1&&s.sort(d||Gu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function gx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wu,i.set(n,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new ot};break;case"SpotLight":e={position:new w,direction:new w,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yx=0;function vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i){let t=new _x,e=xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,x=0,v=0,_=0,A=0,T=0,R=0;l.sort(vx);for(let b=0,M=l.length;b<M;b++){let I=l[b],O=I.color,B=I.intensity,G=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],B);R++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,V=e.get(I);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let tt=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,tt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=tt.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=K,_++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let tt=I.shadow,V=e.get(I);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(B),W.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==A||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.directionalLength=f,C.pointLength=m,C.spotLength=y,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=A,C.numLightProbes=R,n.version=yx++)}function c(l,h){let u=0,d=0,f=0,m=0,y=0,g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function Xu(i){let t=new Mx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function bx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xu(i),t.set(s,[a])):r>=o.length?(a=new Xu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ml=class extends li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wx(i,t,e){let n=new Mr,s=new nt,r=new nt,o=new ue,a=new Ml({depthPacking:mp}),c=new bl,l={},h=e.maxTextureSize,u={[Ri]:Ge,[Ge]:Ri,[Fe]:Fe},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ex,fragmentShader:Sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ie;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Wt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(T,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ti),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==ii&&this.type===ii,G=p===ii&&this.type!==ii;for(let K=0,W=T.length;K<W;K++){let tt=T[K],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();if(s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){let At=this.type!==ii?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new ai(s.x,s.y,At),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let gt=V.getViewportCount();for(let At=0;At<gt;At++){let qt=V.getViewport(At);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),O.viewport(o),V.updateMatrices(tt,At),n=V.getFrustum(),_(R,C,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&x(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,I)};function x(T,R){let C=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,C,f,y,null)}function v(T,R,C,b){let M=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=M.uuid,B=R.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let K=G[B];K===void 0&&(K=M.clone(),G[B]=K,R.addEventListener("dispose",A)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,b===ii?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=C}return M}function _(T,R,C,b,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ii)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let B=t.update(T),G=T.material;if(Array.isArray(G)){let K=B.groups;for(let W=0,tt=K.length;W<tt;W++){let V=K[W],ct=G[V.materialIndex];if(ct&&ct.visible){let gt=v(T,ct,b,M);T.onBeforeShadow(i,T,R,C,B,gt,V),i.renderBufferDirect(C,null,B,gt,T,V),T.onAfterShadow(i,T,R,C,B,gt,V)}}}else if(G.visible){let K=v(T,G,b,M);T.onBeforeShadow(i,T,R,C,B,K,null),i.renderBufferDirect(C,null,B,K,T,null),T.onAfterShadow(i,T,R,C,B,K,null)}}let O=T.children;for(let B=0,G=O.length;B<G;B++)_(O[B],R,C,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(let C in l){let b=l[C],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Tx={[wc]:Tc,[Ac]:Pc,[Rc]:Ic,[Ps]:Cc,[Tc]:wc,[Pc]:Ac,[Ic]:Rc,[Cc]:Ps};function Ax(i,t){function e(){let D=!1,lt=new ue,X=null,J=new ue(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,kt,Ce,Xe){Xe===!0&&(pt*=Ce,dt*=Ce,kt*=Ce),lt.set(pt,dt,kt,Ce),J.equals(lt)===!1&&(i.clearColor(pt,dt,kt,Ce),J.copy(lt))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,X=null,J=null,pt=null;return{setReversed:function(dt){if(lt!==dt){let kt=t.get("EXT_clip_control");lt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let Ce=pt;pt=null,this.setClear(Ce)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ht(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(i.depthMask(dt),X=dt)},setFunc:function(dt){if(lt&&(dt=Tx[dt]),J!==dt){switch(dt){case wc:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){D=!1,X=null,J=null,pt=null,lt=!1}}}function s(){let D=!1,lt=null,X=null,J=null,pt=null,dt=null,kt=null,Ce=null,Xe=null;return{setTest:function(ae){D||(ae?ht(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!D&&(i.stencilMask(ae),lt=ae)},setFunc:function(ae,Tn,Jn){(X!==ae||J!==Tn||pt!==Jn)&&(i.stencilFunc(ae,Tn,Jn),X=ae,J=Tn,pt=Jn)},setOp:function(ae,Tn,Jn){(dt!==ae||kt!==Tn||Ce!==Jn)&&(i.stencilOp(ae,Tn,Jn),dt=ae,kt=Tn,Ce=Jn)},setLocked:function(ae){D=ae},setClear:function(ae){Xe!==ae&&(i.clearStencil(ae),Xe=ae)},reset:function(){D=!1,lt=null,X=null,J=null,pt=null,dt=null,kt=null,Ce=null,Xe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,x=null,v=null,_=null,A=null,T=null,R=new ot(0,0,0),C=0,b=!1,M=null,I=null,O=null,B=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,tt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=tt>=2);let ct=null,gt={},At=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),de=new ue().fromArray(At),Z=new ue().fromArray(qt);function st(D,lt,X,J){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<X;kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Ps),Zt(!1),$t(Zh),ht(i.CULL_FACE),F(Ti);function ht(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Dt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ot(D,lt){return u[D]!==lt?(i.bindFramebuffer(D,lt),u[D]=lt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Yt(D,lt){let X=f,J=!1;if(D){X=d.get(lt),X===void 0&&(X=[],d.set(lt,X));let pt=D.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,kt=pt.length;dt<kt;dt++)X[dt]=i.COLOR_ATTACHMENT0+dt;X.length=pt.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function we(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let jt={[Yi]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};jt[Wf]=i.MIN,jt[Xf]=i.MAX;let Pe={[qf]:i.ZERO,[Yf]:i.ONE,[Zf]:i.SRC_COLOR,[Ec]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[$f]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,lt,X,J,pt,dt,kt,Ce,Xe,ae){if(D===Ti){y===!0&&(Dt(i.BLEND),y=!1);return}if(y===!1&&(ht(i.BLEND),y=!0),D!==Hf){if(D!==g||ae!==b){if((p!==Yi||_!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,_=Yi),ae)switch(D){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,v=null,A=null,T=null,R.set(0,0,0),C=0,g=D,b=ae}return}pt=pt||lt,dt=dt||X,kt=kt||J,(lt!==p||pt!==_)&&(i.blendEquationSeparate(jt[lt],jt[pt]),p=lt,_=pt),(X!==x||J!==v||dt!==A||kt!==T)&&(i.blendFuncSeparate(Pe[X],Pe[J],Pe[dt],Pe[kt]),x=X,v=J,A=dt,T=kt),(Ce.equals(R)===!1||Xe!==C)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Xe),R.copy(Ce),C=Xe),g=D,b=!1}function mn(D,lt){D.side===Fe?Dt(i.CULL_FACE):ht(i.CULL_FACE);let X=D.side===Ge;lt&&(X=!X),Zt(X),D.blending===Ts&&D.transparent===!1?F(Ti):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function $t(D){D!==kf?(ht(i.CULL_FACE),D!==I&&(D===Zh?i.cullFace(i.BACK):D===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),I=D}function It(D){D!==O&&(W&&i.lineWidth(D),O=D)}function xe(D,lt,X){D?(ht(i.POLYGON_OFFSET_FILL),(B!==lt||G!==X)&&(i.polygonOffset(lt,X),B=lt,G=X)):Dt(i.POLYGON_OFFSET_FILL)}function Pt(D){D?ht(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function P(D){D===void 0&&(D=i.TEXTURE0+K-1),ct!==D&&(i.activeTexture(D),ct=D)}function E(D,lt,X){X===void 0&&(ct===null?X=i.TEXTURE0+K-1:X=ct);let J=gt[X];J===void 0&&(J={type:void 0,texture:void 0},gt[X]=J),(J.type!==D||J.texture!==lt)&&(ct!==X&&(i.activeTexture(X),ct=X),i.bindTexture(D,lt||Et[D]),J.type=D,J.texture=lt)}function k(){let D=gt[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function yt(D){Z.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Jt(D,lt){let X=l.get(lt);X===void 0&&(X=new WeakMap,l.set(lt,X));let J=X.get(D);J===void 0&&(J=i.getUniformBlockIndex(lt,D.name),X.set(D,J))}function Vt(D,lt){let J=l.get(lt).get(D);c.get(lt)!==J&&(i.uniformBlockBinding(lt,J,D.__bindingPointIndex),c.set(lt,J))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,gt={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,x=null,v=null,_=null,A=null,T=null,R=new ot(0,0,0),C=0,b=!1,M=null,I=null,O=null,B=null,G=null,de.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Dt,bindFramebuffer:Ot,drawBuffers:Yt,useProgram:we,setBlending:F,setMaterial:mn,setFlipSided:Zt,setCullFace:$t,setLineWidth:It,setPolygonOffset:xe,setScissorTest:Pt,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:xt,texImage3D:Lt,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:te,texStorage3D:et,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Nt,viewport:yt,reset:me}}function qu(i,t,e,n){let s=Rx(n);switch(e){case gd:return i*t;case xd:return i*t;case yd:return i*t*2;case jl:return i*t/s.components*s.byteLength;case th:return i*t/s.components*s.byteLength;case vd:return i*t*2/s.components*s.byteLength;case eh:return i*t*2/s.components*s.byteLength;case _d:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case nh:return i*t*4/s.components*s.byteLength;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:case kc:return Math.max(i,16)*Math.max(t,8)/4;case Fc:case Bc:return Math.max(i,8)*Math.max(t,8)/2;case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Md:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rx(i){switch(i){case oi:case fd:return{byteLength:1,components:1};case _r:case pd:case Or:return{byteLength:2,components:1};case Kl:case Ql:return{byteLength:2,components:4};case Ki:case Jl:case Hn:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return f?new OffscreenCanvas(P,E):qo("canvas")}function y(P,E,k){let $=1,j=Pt(P);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor($*j.width),St=Math.floor($*j.height);u===void 0&&(u=m(Y,St));let ut=E?m(Y,St):u;return ut.width=Y,ut.height=St,ut.getContext("2d").drawImage(P,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+St+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,E,k,$,j=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=E;if(E===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),E===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),E===i.RGBA){let St=j?pa:ee.getTransfer($);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=St===he?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(P,E){let k;return P?E===null||E===Ki||E===Ds?k=i.DEPTH24_STENCIL8:E===Hn?k=i.DEPTH32F_STENCIL8:E===_r&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===Ds?k=i.DEPTH_COMPONENT24:E===Hn?k=i.DEPTH_COMPONENT32F:E===_r&&(k=i.DEPTH_COMPONENT16),k}function A(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){let E=P.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&h.delete(E)}function R(P){let E=P.target;E.removeEventListener("dispose",R),M(E)}function C(P){let E=n.get(P);if(E.__webglInit===void 0)return;let k=P.source,$=d.get(k);if($){let j=$[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(P),Object.keys($).length===0&&d.delete(k)}n.remove(P)}function b(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let k=P.source,$=d.get(k);delete $[E.__cacheKey],o.memory.textures--}function M(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let j=0;j<E.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(E.__webglFramebuffer[$][j]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=P.textures;for(let $=0,j=k.length;$<j;$++){let Y=n.get(k[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(P)}let I=0;function O(){I=0}function B(){let P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function G(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function K(P,E){let k=n.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,P,E);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function W(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){Z(k,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function tt(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){Z(k,P,E);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function V(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){st(k,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let ct={[Uc]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},gt={[dn]:i.NEAREST,[fp]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},At={[_p]:i.NEVER,[Ep]:i.ALWAYS,[xp]:i.LESS,[Ed]:i.LEQUAL,[yp]:i.EQUAL,[bp]:i.GEQUAL,[vp]:i.GREATER,[Mp]:i.NOTEQUAL};function qt(P,E){if(E.type===Hn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Ga||E.magFilter===oo||E.magFilter===Ji||E.minFilter===zn||E.minFilter===Ga||E.minFilter===oo||E.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ct[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ct[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ct[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,gt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==oo&&E.minFilter!==Ji||E.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function de(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));let $=E.source,j=d.get($);j===void 0&&(j={},d.set($,j));let Y=G(E);if(Y!==P.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Y].usedTimes++;let St=j[P.__cacheKey];St!==void 0&&(j[P.__cacheKey].usedTimes--,St.usedTimes===0&&b(E)),P.__cacheKey=Y,P.__webglTexture=j[Y].texture}return k}function Z(P,E,k){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);let j=de(P,E),Y=E.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+k);let St=n.get(Y);if(Y.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+k);let ut=ee.getPrimaries(ee.workingColorSpace),_t=E.colorSpace===Si?null:ee.getPrimaries(E.colorSpace),te=E.colorSpace===Si||ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let et=y(E.image,!1,s.maxTextureSize);et=xe(E,et);let xt=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type),Nt=v(E.internalFormat,xt,Lt,E.colorSpace,E.isVideoTexture);qt($,E);let yt,Jt=E.mipmaps,Vt=E.isVideoTexture!==!0,me=St.__version===void 0||j===!0,D=Y.dataReady,lt=A(E,et);if(E.isDepthTexture)Nt=_(E.format===Us,E.type),me&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Lt,null));else if(E.isDataTexture)if(Jt.length>0){Vt&&me&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)yt=Jt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,yt.width,yt.height,0,xt,Lt,yt.data);E.generateMipmaps=!1}else Vt?(me&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Lt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Nt,Jt[0].width,Jt[0].height,et.depth);for(let X=0,J=Jt.length;X<J;X++)if(yt=Jt[X],E.format!==Ln)if(xt!==null)if(Vt){if(D)if(E.layerUpdates.size>0){let pt=qu(yt.width,yt.height,E.format,E.type);for(let dt of E.layerUpdates){let kt=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,dt,yt.width,yt.height,1,xt,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,et.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Nt,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,et.depth,xt,Lt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Nt,yt.width,yt.height,et.depth,0,xt,Lt,yt.data)}else{Vt&&me&&e.texStorage2D(i.TEXTURE_2D,lt,Nt,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)yt=Jt[X],E.format!==Ln?xt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Nt,yt.width,yt.height,0,xt,Lt,yt.data)}else if(E.isDataArrayTexture)if(Vt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Nt,et.width,et.height,et.depth),D)if(E.layerUpdates.size>0){let X=qu(et.width,et.height,E.format,E.type);for(let J of E.layerUpdates){let pt=et.data.subarray(J*X/et.data.BYTES_PER_ELEMENT,(J+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,xt,Lt,pt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,xt,Lt,et.data);else if(E.isData3DTexture)Vt?(me&&e.texStorage3D(i.TEXTURE_3D,lt,Nt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,xt,Lt,et.data);else if(E.isFramebufferTexture){if(me)if(Vt)e.texStorage2D(i.TEXTURE_2D,lt,Nt,et.width,et.height);else{let X=et.width,J=et.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,X,J,0,xt,Lt,null),X>>=1,J>>=1}}else if(Jt.length>0){if(Vt&&me){let X=Pt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Nt,X.width,X.height)}for(let X=0,J=Jt.length;X<J;X++)yt=Jt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,Lt,yt):e.texImage2D(i.TEXTURE_2D,X,Nt,xt,Lt,yt);E.generateMipmaps=!1}else if(Vt){if(me){let X=Pt(et);e.texStorage2D(i.TEXTURE_2D,lt,Nt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,xt,Lt,et);g(E)&&p($),St.__version=Y.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function st(P,E,k){if(E.image.length!==6)return;let $=de(P,E),j=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let Y=n.get(j);if(j.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+k);let St=ee.getPrimaries(ee.workingColorSpace),ut=E.colorSpace===Si?null:ee.getPrimaries(E.colorSpace),_t=E.colorSpace===Si||St===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let te=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!te&&!et?xt[J]=y(E.image[J],!0,s.maxCubemapSize):xt[J]=et?E.image[J].image:E.image[J],xt[J]=xe(E,xt[J]);let Lt=xt[0],Nt=r.convert(E.format,E.colorSpace),yt=r.convert(E.type),Jt=v(E.internalFormat,Nt,yt,E.colorSpace),Vt=E.isVideoTexture!==!0,me=Y.__version===void 0||$===!0,D=j.dataReady,lt=A(E,Lt);qt(i.TEXTURE_CUBE_MAP,E);let X;if(te){Vt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Jt,Lt.width,Lt.height);for(let J=0;J<6;J++){X=xt[J].mipmaps;for(let pt=0;pt<X.length;pt++){let dt=X[pt];E.format!==Ln?Nt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Jt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Nt,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Jt,dt.width,dt.height,0,Nt,yt,dt.data)}}}else{if(X=E.mipmaps,Vt&&me){X.length>0&&lt++;let J=Pt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Jt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Nt,yt,xt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,xt[J].width,xt[J].height,0,Nt,yt,xt[J].data);for(let pt=0;pt<X.length;pt++){let kt=X[pt].image[J].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,kt.width,kt.height,Nt,yt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Jt,kt.width,kt.height,0,Nt,yt,kt.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,yt,xt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,Nt,yt,xt[J]);for(let pt=0;pt<X.length;pt++){let dt=X[pt];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt,yt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Jt,Nt,yt,dt.image[J])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),Y.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Et(P,E,k,$,j,Y){let St=r.convert(k.format,k.colorSpace),ut=r.convert(k.type),_t=v(k.internalFormat,St,ut,k.colorSpace),te=n.get(E),et=n.get(k);if(et.__renderTarget=E,!te.__hasExternalTextures){let xt=Math.max(1,E.width>>Y),Lt=Math.max(1,E.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,_t,xt,Lt,E.depth,0,St,ut,null):e.texImage2D(j,Y,_t,xt,Lt,0,St,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),$t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,et.__webglTexture,0,Zt(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let $=E.depthTexture,j=$&&$.isDepthTexture?$.type:null,Y=_(E.stencilBuffer,j),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Zt(E);$t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Y,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,P)}else{let $=E.textures;for(let j=0;j<$.length;j++){let Y=$[j],St=r.convert(Y.format,Y.colorSpace),ut=r.convert(Y.type),_t=v(Y.internalFormat,St,ut,Y.colorSpace),te=Zt(E);k&&$t(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,_t,E.width,E.height):$t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,_t,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_t,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);let j=$.__webglTexture,Y=Zt(E);if(E.depthTexture.format===As)$t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(E.depthTexture.format===Us)$t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ot(P){let E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Dt(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[$],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(P,E,k){let $=n.get(P);E!==void 0&&Et($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ot(P)}function we(P){let E=P.texture,k=n.get(P),$=n.get(E);P.addEventListener("dispose",R);let j=P.textures,Y=P.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let _t=0;_t<E.mipmaps.length;_t++)k.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else k.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)k.__webglFramebuffer[ut]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(St)for(let ut=0,_t=j.length;ut<_t;ut++){let te=n.get(j[ut]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){let _t=j[ut];k.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);let te=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),xt=v(_t.internalFormat,te,et,_t.colorSpace,P.isXRRenderTarget===!0),Lt=Zt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),qt(i.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Et(k.__webglFramebuffer[ut][_t],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Et(k.__webglFramebuffer[ut],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,_t=j.length;ut<_t;ut++){let te=j[ut],et=n.get(te);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),qt(i.TEXTURE_2D,te),Et(k.__webglFramebuffer,P,te,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),g(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),qt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Et(k.__webglFramebuffer[_t],P,E,i.COLOR_ATTACHMENT0,ut,_t);else Et(k.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ut,0);g(E)&&p(ut),e.unbindTexture()}P.depthBuffer&&Ot(P)}function jt(P){let E=P.textures;for(let k=0,$=E.length;k<$;k++){let j=E[k];if(g(j)){let Y=x(P),St=n.get(j).__webglTexture;e.bindTexture(Y,St),p(Y),e.unbindTexture()}}}let Pe=[],F=[];function mn(P){if(P.samples>0){if($t(P)===!1){let E=P.textures,k=P.width,$=P.height,j=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(P),ut=E.length>1;if(ut)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);let te=n.get(E[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,j,i.NEAREST),c===!0&&(Pe.length=0,F.length=0,Pe.push(i.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pe.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,St.__webglColorRenderbuffer[_t]);let te=n.get(E[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Zt(P){return Math.min(s.maxSamples,P.samples)}function $t(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function xe(P,E){let k=P.colorSpace,$=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Vs&&k!==Si&&(ee.getTransfer(k)===he?($!==Ln||j!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=Yt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=$t}function Px(i,t){function e(n,s=Si){let r,o=ee.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.BYTE;if(n===pd)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Or)return i.HALF_FLOAT;if(n===gd)return i.ALPHA;if(n===_d)return i.RGB;if(n===Ln)return i.RGBA;if(n===xd)return i.LUMINANCE;if(n===yd)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===th)return i.RED_INTEGER;if(n===vd)return i.RG;if(n===eh)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===Bo||n===ko||n===zo||n===Ho)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===Oc||n===Bc||n===kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Hc||n===Vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===Hc)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===Qc||n===jc||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Md||n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var El=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},mt=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ix={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`,Sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends Ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,y=new Sl,g=e.getContextAttributes(),p=null,x=null,v=[],_=[],A=new nt,T=null,R=new Ve;R.viewport=new ue;let C=new Ve;C.viewport=new ue;let b=[R,C],M=new El,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=v[Z];return st===void 0&&(st=new fr,v[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=v[Z];return st===void 0&&(st=new fr,v[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=v[Z];return st===void 0&&(st=new fr,v[Z]=st),st.getHandSpace()};function B(Z){let st=_.indexOf(Z.inputSource);if(st===-1)return;let Et=v[st];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<v.length;Z++){let st=_[Z];st!==null&&(_[Z]=null,v[Z].disconnect(st))}I=null,O=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ai(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Et=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Us:As,Et=g.stencil?Ds:Ki);let Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ai(d.textureWidth,d.textureHeight,{format:Ln,type:oi,depthTexture:new ta(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(Z){for(let st=0;st<Z.removed.length;st++){let Et=Z.removed[st],ht=_.indexOf(Et);ht>=0&&(_[ht]=null,v[ht].disconnect(Et))}for(let st=0;st<Z.added.length;st++){let Et=Z.added[st],ht=_.indexOf(Et);if(ht===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=_.length){_.push(Et),ht=Ot;break}else if(_[Ot]===null){_[Ot]=Et,ht=Ot;break}if(ht===-1)break}let Dt=v[ht];Dt&&Dt.connect(Et)}}let W=new w,tt=new w;function V(Z,st,Et){W.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(Et.matrixWorld);let ht=W.distanceTo(tt),Dt=st.projectionMatrix.elements,Ot=Et.projectionMatrix.elements,Yt=Dt[14]/(Dt[10]-1),we=Dt[14]/(Dt[10]+1),jt=(Dt[9]+1)/Dt[5],Pe=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],mn=(Ot[8]+1)/Ot[0],Zt=Yt*F,$t=Yt*mn,It=ht/(-F+mn),xe=It*-F;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xe),Z.translateZ(It),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Pt=Yt+It,P=we+It,E=Zt-xe,k=$t+(ht-xe),$=jt*we/P*Pt,j=Pe*we/P*Pt;Z.projectionMatrix.makePerspective(E,k,$,j,Pt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let st=Z.near,Et=Z.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),M.near=C.near=R.near=st,M.far=C.far=R.far=Et,(I!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far),R.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;let ht=Z.parent,Dt=M.cameras;ct(M,ht);for(let Ot=0;Ot<Dt.length;Ot++)ct(Dt[Ot],ht);Dt.length===2?V(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),gt(Z,M,ht)};function gt(Z,st,Et){Et===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let At=null;function qt(Z,st){if(h=st.getViewerPose(l||o),m=st,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ht=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ot=0;Ot<Et.length;Ot++){let Yt=Et[Ot],we=null;if(f!==null)we=f.getViewport(Yt);else{let Pe=u.getViewSubImage(d,Yt);we=Pe.viewport,Ot===0&&(t.setRenderTargetTextures(x,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(x))}let jt=b[Ot];jt===void 0&&(jt=new Ve,jt.layers.enable(Ot),jt.viewport=new ue,b[Ot]=jt),jt.matrix.fromArray(Yt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Yt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(we.x,we.y,we.width,we.height),Ot===0&&(M.matrix.copy(jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(jt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Ot=u.getDepthInformation(Et[0]);Ot&&Ot.isValid&&Ot.texture&&y.init(t,Ot,s.renderState)}}for(let Et=0;Et<v.length;Et++){let ht=_[Et],Dt=v[Et];ht!==null&&Dt!==void 0&&Dt.update(ht,st,l||o)}At&&At(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let de=new Ad;de.setAnimationLoop(qt),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}},Xi=new Gn,Ux=new le;function Nx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Td(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),v=x.envMap,_=x.envMapRotation;v&&(g.envMap.value=v,Xi.copy(_),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Xi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=s[x.id];_===void 0&&(m(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",g));let A=v.program;n.updateUBOMapping(x,A);let T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){let v=u();x.__bindingPointIndex=v;let _=i.createBuffer(),A=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,R=_.length;T<R;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=C.length;b<M;b++){let I=C[b];if(f(I,T,b,A)===!0){let O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],G=0;for(let K=0;K<B.length;K++){let W=B[K],tt=y(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,_,A){let T=x.value,R=v+"_"+_;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{let C=A[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function m(x){let v=x.uniforms,_=0,A=16;for(let R=0,C=v.length;R<C;R++){let b=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,I=b.length;M<I;M++){let O=b[M],B=Array.isArray(O.value)?O.value:[O.value];for(let G=0,K=B.length;G<K;G++){let W=B[G],tt=y(W),V=_%A,ct=V%tt.boundary,gt=V+ct;_+=ct,gt!==0&&A-gt<tt.storage&&(_+=A-gt),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=tt.storage}}}let T=_%A;return T>0&&(_+=A-T),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Fs=class{constructor(t={}){let{canvas:e=zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Ai,this.toneMappingExposure=1;let _=this,A=!1,T=0,R=0,C=null,b=-1,M=null,I=new ue,O=new ue,B=null,G=new ot(0),K=0,W=e.width,tt=e.height,V=1,ct=null,gt=null,At=new ue(0,0,W,tt),qt=new ue(0,0,W,tt),de=!1,Z=new Mr,st=!1,Et=!1,ht=new le,Dt=new le,Ot=new w,Yt=new ue,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Pe(){return C===null?V:1}let F=n;function mn(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){let U="webgl2";if(F=mn(U,S),F===null)throw mn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Zt,$t,It,xe,Pt,P,E,k,$,j,Y,St,ut,_t,te,et,xt,Lt,Nt,yt,Jt,Vt,me,D;function lt(){Zt=new Q0(F),Zt.init(),Vt=new Px(F,Zt),$t=new q0(F,Zt,t,Vt),It=new Ax(F,Zt),$t.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),xe=new e_(F),Pt=new px,P=new Cx(F,Zt,It,Pt,$t,Vt,xe),E=new Z0(_),k=new K0(_),$=new cm(F),me=new W0(F,$),j=new j0(F,$,xe,me),Y=new i_(F,j,$,xe),Nt=new n_(F,$t,P),et=new Y0(Pt),St=new fx(_,E,k,Zt,$t,me,et),ut=new Nx(_,Pt),_t=new gx,te=new bx(Zt),Lt=new G0(_,E,k,It,Y,f,c),xt=new wx(_,Y,$t),D=new Fx(F,xe,$t,It),yt=new X0(F,Zt,xe),Jt=new t_(F,Zt,xe),xe.programs=St.programs,_.capabilities=$t,_.extensions=Zt,_.properties=Pt,_.renderLists=_t,_.shadowMap=xt,_.state=It,_.info=xe}lt();let X=new wl(_,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,tt,!1))},this.getSize=function(S){return S.set(W,tt)},this.setSize=function(S,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,tt=U,e.width=Math.floor(S*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*V,tt*V).floor()},this.setDrawingBufferSize=function(S,U,z){W=S,tt=U,V=z,e.width=Math.floor(S*z),e.height=Math.floor(U*z),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,U,z,H){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,U,z,H),It.viewport(I.copy(At).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(qt)},this.setScissor=function(S,U,z,H){S.isVector4?qt.set(S.x,S.y,S.z,S.w):qt.set(S,U,z,H),It.scissor(O.copy(qt).multiplyScalar(V).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){It.setScissorTest(de=S)},this.setOpaqueSort=function(S){ct=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,U=!0,z=!0){let H=0;if(S){let N=!1;if(C!==null){let it=C.texture.format;N=it===nh||it===eh||it===th}if(N){let it=C.texture.type,ft=it===oi||it===Ki||it===_r||it===Ds||it===Kl||it===Ql,vt=Lt.getClearColor(),Mt=Lt.getClearAlpha(),Ft=vt.r,zt=vt.g,bt=vt.b;ft?(m[0]=Ft,m[1]=zt,m[2]=bt,m[3]=Mt,F.clearBufferuiv(F.COLOR,0,m)):(y[0]=Ft,y[1]=zt,y[2]=bt,y[3]=Mt,F.clearBufferiv(F.COLOR,0,y))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),te.dispose(),Pt.dispose(),E.dispose(),k.dispose(),Y.dispose(),me.dispose(),D.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",zh),X.removeEventListener("sessionend",Hh),ki.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=xe.autoReset,U=xt.enabled,z=xt.autoUpdate,H=xt.needsUpdate,N=xt.type;lt(),xe.autoReset=S,xt.enabled=U,xt.autoUpdate=z,xt.needsUpdate=H,xt.type=N}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){let U=S.target;U.removeEventListener("dispose",kt),Ce(U)}function Ce(S){Xe(S),Pt.remove(S)}function Xe(S){let U=Pt.get(S).programs;U!==void 0&&(U.forEach(function(z){St.releaseProgram(z)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,z,H,N,it){U===null&&(U=we);let ft=N.isMesh&&N.matrixWorld.determinant()<0,vt=Ff(S,U,z,H,N);It.setMaterial(H,ft);let Mt=z.index,Ft=1;if(H.wireframe===!0){if(Mt=j.getWireframeAttribute(z),Mt===void 0)return;Ft=2}let zt=z.drawRange,bt=z.attributes.position,se=zt.start*Ft,ge=(zt.start+zt.count)*Ft;it!==null&&(se=Math.max(se,it.start*Ft),ge=Math.min(ge,(it.start+it.count)*Ft)),Mt!==null?(se=Math.max(se,0),ge=Math.min(ge,Mt.count)):bt!=null&&(se=Math.max(se,0),ge=Math.min(ge,bt.count));let ye=ge-se;if(ye<0||ye===1/0)return;me.setup(N,H,vt,z,Mt);let rn,re=yt;if(Mt!==null&&(rn=$.get(Mt),re=Jt,re.setIndex(rn)),N.isMesh)H.wireframe===!0?(It.setLineWidth(H.wireframeLinewidth*Pe()),re.setMode(F.LINES)):re.setMode(F.TRIANGLES);else if(N.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),It.setLineWidth(wt*Pe()),N.isLineSegments?re.setMode(F.LINES):N.isLineLoop?re.setMode(F.LINE_LOOP):re.setMode(F.LINE_STRIP)}else N.isPoints?re.setMode(F.POINTS):N.isSprite&&re.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)re.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))re.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let wt=N._multiDrawStarts,Kn=N._multiDrawCounts,oe=N._multiDrawCount,An=Mt?$.get(Mt).bytesPerElement:1,ss=Pt.get(H).currentProgram.getUniforms();for(let ln=0;ln<oe;ln++)ss.setValue(F,"_gl_DrawID",ln),re.render(wt[ln]/An,Kn[ln])}else if(N.isInstancedMesh)re.renderInstances(se,ye,N.count);else if(z.isInstancedBufferGeometry){let wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Kn=Math.min(z.instanceCount,wt);re.renderInstances(se,ye,Kn)}else re.render(se,ye)};function ae(S,U,z){S.transparent===!0&&S.side===Fe&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,ro(S,U,z),S.side=Ri,S.needsUpdate=!0,ro(S,U,z),S.side=Fe):ro(S,U,z)}this.compile=function(S,U,z=null){z===null&&(z=S),p=te.get(z),p.init(U),v.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let vt=it[ft];ae(vt,z,N),H.add(vt)}else ae(it,z,N),H.add(it)}),v.pop(),p=null,H},this.compileAsync=function(S,U,z=null){let H=this.compile(S,U,z);return new Promise(N=>{function it(){if(H.forEach(function(ft){Pt.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){N(S);return}setTimeout(it,10)}Zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Tn=null;function Jn(S){Tn&&Tn(S)}function zh(){ki.stop()}function Hh(){ki.start()}let ki=new Ad;ki.setAnimationLoop(Jn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(S){Tn=S,X.setAnimationLoop(S),S===null?ki.stop():ki.start()},X.addEventListener("sessionstart",zh),X.addEventListener("sessionend",Hh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,C),p=te.get(S,v.length),p.init(U),v.push(p),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Dt),Et=this.localClippingEnabled,st=et.init(this.clippingPlanes,Et),g=_t.get(S,x.length),g.init(),x.push(g),X.enabled===!0&&X.isPresenting===!0){let it=_.xr.getDepthSensingMesh();it!==null&&Va(it,U,-1/0,_.sortObjects)}Va(S,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ct,gt),jt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,jt&&Lt.addToRenderList(g,S),this.info.render.frame++,st===!0&&et.beginShadows();let z=p.state.shadowsArray;xt.render(z,S,U),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let it=U.cameras;if(N.length>0)for(let ft=0,vt=it.length;ft<vt;ft++){let Mt=it[ft];Gh(H,N,S,Mt)}jt&&Lt.render(S);for(let ft=0,vt=it.length;ft<vt;ft++){let Mt=it[ft];Vh(g,S,Mt,Mt.viewport)}}else N.length>0&&Gh(H,N,S,U),jt&&Lt.render(S),Vh(g,S,U);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,U),me.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],st===!0&&et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Va(S,U,z,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){H&&Yt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt);let ft=Y.update(S),vt=S.material;vt.visible&&g.push(S,ft,vt,z,Yt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let ft=Y.update(S),vt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Yt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Yt.copy(ft.boundingSphere.center)),Yt.applyMatrix4(S.matrixWorld).applyMatrix4(Dt)),Array.isArray(vt)){let Mt=ft.groups;for(let Ft=0,zt=Mt.length;Ft<zt;Ft++){let bt=Mt[Ft],se=vt[bt.materialIndex];se&&se.visible&&g.push(S,ft,se,z,Yt.z,bt)}}else vt.visible&&g.push(S,ft,vt,z,Yt.z,null)}}let it=S.children;for(let ft=0,vt=it.length;ft<vt;ft++)Va(it[ft],U,z,H)}function Vh(S,U,z,H){let N=S.opaque,it=S.transmissive,ft=S.transparent;p.setupLightsView(z),st===!0&&et.setGlobalState(_.clippingPlanes,z),H&&It.viewport(I.copy(H)),N.length>0&&so(N,U,z),it.length>0&&so(it,U,z),ft.length>0&&so(ft,U,z),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Gh(S,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Or:oi,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let it=p.state.transmissionRenderTarget[H.id],ft=H.viewport||I;it.setSize(ft.z,ft.w);let vt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(G),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),jt&&Lt.render(z);let Mt=_.toneMapping;_.toneMapping=Ai;let Ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),st===!0&&et.setGlobalState(_.clippingPlanes,H),so(S,z,H),P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let bt=0,se=U.length;bt<se;bt++){let ge=U[bt],ye=ge.object,rn=ge.geometry,re=ge.material,wt=ge.group;if(re.side===Fe&&ye.layers.test(H.layers)){let Kn=re.side;re.side=Ge,re.needsUpdate=!0,Wh(ye,z,H,rn,re,wt),re.side=Kn,re.needsUpdate=!0,zt=!0}}zt===!0&&(P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it))}_.setRenderTarget(vt),_.setClearColor(G,K),Ft!==void 0&&(H.viewport=Ft),_.toneMapping=Mt}function so(S,U,z){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){let ft=S[N],vt=ft.object,Mt=ft.geometry,Ft=H===null?ft.material:H,zt=ft.group;vt.layers.test(z.layers)&&Wh(vt,U,z,Mt,Ft,zt)}}function Wh(S,U,z,H,N,it){S.onBeforeRender(_,U,z,H,N,it),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,U,z,H,S,it),N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,S,it),N.side=Ri,N.needsUpdate=!0,_.renderBufferDirect(z,U,H,N,S,it),N.side=Fe):_.renderBufferDirect(z,U,H,N,S,it),S.onAfterRender(_,U,z,H,N,it)}function ro(S,U,z){U.isScene!==!0&&(U=we);let H=Pt.get(S),N=p.state.lights,it=p.state.shadowsArray,ft=N.state.version,vt=St.getParameters(S,N.state,it,U,z),Mt=St.getProgramCacheKey(vt),Ft=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?k:E).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",kt),Ft=new Map,H.programs=Ft);let zt=Ft.get(Mt);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===ft)return qh(S,vt),zt}else vt.uniforms=St.getUniforms(S),S.onBeforeCompile(vt,_),zt=St.acquireProgram(vt,Mt),Ft.set(Mt,zt),H.uniforms=vt.uniforms;let bt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=et.uniform),qh(S,vt),H.needsLights=Bf(S),H.lightsStateVersion=ft,H.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function Xh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function qh(S,U){let z=Pt.get(S);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ff(S,U,z,H,N){U.isScene!==!0&&(U=we),P.resetTextureUnits();let it=U.fog,ft=H.isMeshStandardMaterial?U.environment:null,vt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vs,Mt=(H.isMeshStandardMaterial?k:E).get(H.envMap||ft),Ft=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,se=!!z.morphAttributes.normal,ge=!!z.morphAttributes.color,ye=Ai;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=_.toneMapping);let rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=rn!==void 0?rn.length:0,wt=Pt.get(H),Kn=p.state.lights;if(st===!0&&(Et===!0||S!==M)){let gn=S===M&&H.id===b;et.setState(H,S,gn)}let oe=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Kn.state.version||wt.outputColorSpace!==vt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==Mt||H.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==et.numPlanes||wt.numIntersection!==et.numIntersection)||wt.vertexAlphas!==Ft||wt.vertexTangents!==zt||wt.morphTargets!==bt||wt.morphNormals!==se||wt.morphColors!==ge||wt.toneMapping!==ye||wt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,wt.__version=H.version);let An=wt.currentProgram;oe===!0&&(An=ro(H,U,N));let ss=!1,ln=!1,Ks=!1,ve=An.getUniforms(),Bn=wt.uniforms;if(It.useProgram(An.program)&&(ss=!0,ln=!0,Ks=!0),H.id!==b&&(b=H.id,ln=!0),ss||M!==S){It.buffers.depth.getReversed()?(ht.copy(S.projectionMatrix),Vp(ht),Gp(ht),ve.setValue(F,"projectionMatrix",ht)):ve.setValue(F,"projectionMatrix",S.projectionMatrix),ve.setValue(F,"viewMatrix",S.matrixWorldInverse);let gi=ve.map.cameraPosition;gi!==void 0&&gi.setValue(F,Ot.setFromMatrixPosition(S.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ln=!0,Ks=!0)}if(N.isSkinnedMesh){ve.setOptional(F,N,"bindMatrix"),ve.setOptional(F,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),ve.setValue(F,"boneTexture",gn.boneTexture,P))}N.isBatchedMesh&&(ve.setOptional(F,N,"batchingTexture"),ve.setValue(F,"batchingTexture",N._matricesTexture,P),ve.setOptional(F,N,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",N._indirectTexture,P),ve.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",N._colorsTexture,P));let Qs=z.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Nt.update(N,z,An),(ln||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,ve.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bn.envMap.value=Mt,Bn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Bn.envMapIntensity.value=U.environmentIntensity),ln&&(ve.setValue(F,"toneMappingExposure",_.toneMappingExposure),wt.needsLights&&Of(Bn,Ks),it&&H.fog===!0&&ut.refreshFogUniforms(Bn,it),ut.refreshMaterialUniforms(Bn,H,V,tt,p.state.transmissionRenderTarget[S.id]),Cs.upload(F,Xh(wt),Bn,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Cs.upload(F,Xh(wt),Bn,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(F,"center",N.center),ve.setValue(F,"modelViewMatrix",N.modelViewMatrix),ve.setValue(F,"normalMatrix",N.normalMatrix),ve.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let gn=H.uniformsGroups;for(let gi=0,_i=gn.length;gi<_i;gi++){let Yh=gn[gi];D.update(Yh,An),D.bind(Yh,An)}}return An}function Of(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Bf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,z){Pt.get(S.texture).__webglTexture=U,Pt.get(S.depthTexture).__webglTexture=z;let H=Pt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let z=Pt.get(S);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,z=0){C=S,T=U,R=z;let H=!0,N=null,it=!1,ft=!1;if(S){let Mt=Pt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(Mt.__hasExternalTextures)P.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let bt=S.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Pt.has(bt)&&(S.width!==bt.image.width||S.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}let Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);let zt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][z]:N=zt[U],it=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?N=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[z]:N=zt,I.copy(S.viewport),O.copy(S.scissor),B=S.scissorTest}else I.copy(At).multiplyScalar(V).floor(),O.copy(qt).multiplyScalar(V).floor(),B=de;if(It.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&It.drawBuffers(S,N),It.viewport(I),It.scissor(O),It.setScissorTest(B),it){let Mt=Pt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,z)}else if(ft){let Mt=Pt.get(S.texture),Ft=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ft)}b=-1},this.readRenderTargetPixels=function(S,U,z,H,N,it,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){It.bindFramebuffer(F.FRAMEBUFFER,vt);try{let Mt=S.texture,Ft=Mt.format,zt=Mt.type;if(!$t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&z>=0&&z<=S.height-N&&F.readPixels(U,z,H,N,Vt.convert(Ft),Vt.convert(zt),it)}finally{let Mt=C!==null?Pt.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,z,H,N,it,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){let Mt=S.texture,Ft=Mt.format,zt=Mt.type;if(!$t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&z>=0&&z<=S.height-N){It.bindFramebuffer(F.FRAMEBUFFER,vt);let bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(U,z,H,N,Vt.convert(Ft),Vt.convert(zt),0);let se=C!==null?Pt.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,se);let ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hp(F,ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(bt),F.deleteSync(ge),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,z=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-z),N=Math.floor(S.image.width*H),it=Math.floor(S.image.height*H),ft=U!==null?U.x:0,vt=U!==null?U.y:0;P.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,ft,vt,N,it),It.unbindTexture()},this.copyTextureToTexture=function(S,U,z=null,H=null,N=0){S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let it,ft,vt,Mt,Ft,zt,bt,se,ge,ye=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(it=z.max.x-z.min.x,ft=z.max.y-z.min.y,vt=z.isBox3?z.max.z-z.min.z:1,Mt=z.min.x,Ft=z.min.y,zt=z.isBox3?z.min.z:0):(it=ye.width,ft=ye.height,vt=ye.depth||1,Mt=0,Ft=0,zt=0),H!==null?(bt=H.x,se=H.y,ge=H.z):(bt=0,se=0,ge=0);let rn=Vt.convert(U.format),re=Vt.convert(U.type),wt;U.isData3DTexture?(P.setTexture3D(U,0),wt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),wt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Kn=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),An=F.getParameter(F.UNPACK_SKIP_PIXELS),ss=F.getParameter(F.UNPACK_SKIP_ROWS),ln=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zt);let Ks=S.isDataArrayTexture||S.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Bn=Pt.get(S),Qs=Pt.get(U),gn=Pt.get(Bn.__renderTarget),gi=Pt.get(Qs.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,gn.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<vt;_i++)Ks&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,N,zt+_i),S.isDepthTexture?(ve&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,N,ge+_i),F.blitFramebuffer(Mt,Ft,it,ft,bt,se,it,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):ve?F.copyTexSubImage3D(wt,N,bt,se,ge+_i,Mt,Ft,it,ft):F.copyTexSubImage2D(wt,N,bt,se,ge+_i,Mt,Ft,it,ft);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(wt,N,bt,se,ge,it,ft,vt,rn,re,ye.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,N,bt,se,ge,it,ft,vt,rn,ye.data):F.texSubImage3D(wt,N,bt,se,ge,it,ft,vt,rn,re,ye):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,bt,se,it,ft,rn,re,ye.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,bt,se,ye.width,ye.height,rn,ye.data):F.texSubImage2D(F.TEXTURE_2D,N,bt,se,it,ft,rn,re,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,Kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,An),F.pixelStorei(F.UNPACK_SKIP_ROWS,ss),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),N===0&&U.generateMipmaps&&F.generateMipmap(wt),It.unbindTexture()},this.copyTextureToTexture3D=function(S,U,z=null,H=null,N=0){return S.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,z,H,N)},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,It.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var br=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hi=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ea=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new w,Er=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sr=class extends li{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,ir=new w,vs=new w,Ms=new w,bs=new nt,sr=new nt,Ld=new le,Ro=new w,rr=new w,Co=new w,Yu=new nt,_c=new nt,Zu=new nt,na=class extends De{constructor(t=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Er(n,3,0,!1)),ys.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),Ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Po(Ro.set(-.5,-.5,0),Ms,o,vs,s,r),Po(rr.set(.5,-.5,0),Ms,o,vs,s,r),Po(Co.set(.5,.5,0),Ms,o,vs,s,r),Yu.set(0,0),_c.set(1,0),Zu.set(1,1);let a=t.ray.intersectTriangle(Ro,rr,Co,!1,ir);if(a===null&&(Po(rr.set(-.5,.5,0),Ms,o,vs,s,r),_c.set(0,1),a=t.ray.intersectTriangle(Ro,Co,rr,!1,ir),a===null))return;let c=t.ray.origin.distanceTo(ir);c<t.near||c>t.far||e.push({distance:c,point:ir.clone(),uv:wi.getInterpolation(ir,Ro,rr,Co,Yu,_c,Zu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Po(i,t,e,n,s,r){bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(sr.x=r*bs.x-s*bs.y,sr.y=s*bs.x+r*bs.y):sr.copy(bs),i.copy(t),i.x+=sr.x,i.y+=sr.y,i.applyMatrix4(Ld)}var Tl=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new le,$u=new le,Io=[],Ju=new ci,Ox=new le,or=new Wt,ar=new Ii,Di=class extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Ju.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Ju)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ar.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),$u.multiplyMatrices(n,Es),or.matrixWorld=$u,or.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){let c=Io[o];c.instanceId=r,c.object=this,e.push(c)}Io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(s*this.count),s,this.count,jl,Hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Tr=class extends li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ku=new le,Al=new yr,Lo=new Ii,Do=new w,ia=class extends De{constructor(t=new Ie,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Ku.copy(s).invert(),Al.copy(t.ray).applyMatrix4(Ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let g=l.getX(m);Do.fromBufferAttribute(u,g),Qu(Do,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++)Do.fromBufferAttribute(u,m),Qu(Do,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qu(i,t,e,n,s,r,o){let a=Al.distanceSqToPoint(i);if(a<e){let c=new w;Al.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Os=class extends an{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],o=[],a=new w,c=new le;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rl=class extends Ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Uo=new w,xc=new rh,yc=new rh,vc=new rh,Qi=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Uo.subVectors(s[0],s[1]).add(s[0]),l=Uo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),xc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,y,g),yc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,y,g),vc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),vc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xc.calc(c),yc.calc(c),vc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ju(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bx(i,t){let e=1-i;return e*e*t}function kx(i,t){return 2*(1-i)*i*t}function zx(i,t){return i*i*t}function pr(i,t,e,n){return Bx(i,t)+kx(i,e)+zx(i,n)}function Hx(i,t){let e=1-i;return e*e*e*t}function Vx(i,t){let e=1-i;return 3*e*e*i*t}function Gx(i,t){return 3*(1-i)*i*i*t}function Wx(i,t){return i*i*i*t}function mr(i,t,e,n,s){return Hx(i,t)+Vx(i,e)+Gx(i,n)+Wx(i,s)}var sa=class extends vn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cl=class extends vn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y),mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends vn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends vn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends vn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends vn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y),pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ju(a,c.x,l.x,h.x,u.x),ju(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},td=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Qi,CubicBezierCurve:sa,CubicBezierCurve3:Cl,EllipseCurve:Ar,LineCurve:ra,LineCurve3:Pl,QuadraticBezierCurve:oa,QuadraticBezierCurve3:Rr,SplineCurve:aa}),Il=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new td[s.type]().fromJSON(s))}return this}},Cr=class extends Il{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ra(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new oa(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new sa(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new aa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ar(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class i extends Ie{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new w,d=new nt,f=new w,m=new w,y=new w,g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(m)}for(let x=0;x<=e;x++){let v=n+x*h*s,_=Math.sin(v),A=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*A,o.push(u.x,u.y,u.z),d.x=x/e,d.y=T/(t.length-1),a.push(d.x,d.y);let R=c[3*T+0]*_,C=c[3*T+1],b=c[3*T+0]*A;l.push(R,C,b)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let _=v+x*t.length,A=_,T=_+t.length,R=_+t.length+1,C=_+1;r.push(A,T,C),r.push(R,C,T)}this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},je=class i extends Xn{constructor(t=1,e=1,n=4,s=8){let r=new Cr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ui=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new w,h=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,y=[],g=n/2,p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function x(){let _=new w,A=new w,T=0,R=(e-t)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,I=M*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,G=B*c+a,K=Math.sin(G),W=Math.cos(G);A.x=I*K,A.y=-M*n+g,A.z=I*W,u.push(A.x,A.y,A.z),_.set(K,R,W).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-M),b.push(m++)}y.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let M=y[b][C],I=y[b+1][C],O=y[b+1][C+1],B=y[b][C+1];(t>0||b!==0)&&(h.push(M,I,B),T+=3),(e>0||b!==r-1)&&(h.push(I,O,B),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){let A=m,T=new nt,R=new w,C=0,b=_===!0?t:e,M=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let I=m;for(let O=0;O<=s;O++){let G=O/s*c+a,K=Math.cos(G),W=Math.sin(G);R.x=b*W,R.y=g*M,R.z=b*K,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=K*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),m++}for(let O=0;O<s;O++){let B=A+O,G=I+O;_===!0?h.push(G,G+1,B):h.push(G+1,G,B),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ue=class i extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ll=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new w,_=new w,A=new w;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],_),f(e[T+2],A),c(v,_,A,x)}function c(x,v,_,A){let T=A+1,R=[];for(let C=0;C<=T;C++){R[C]=[];let b=x.clone().lerp(_,C/T),M=v.clone().lerp(_,C/T),I=T-C;for(let O=0;O<=I;O++)O===0&&C===T?R[C][O]=b:R[C][O]=b.clone().lerp(M,O/I)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){let M=Math.floor(b/2);b%2===0?(d(R[C][M+1]),d(R[C+1][M]),d(R[C][M])):(d(R[C][M+1]),d(R[C+1][M+1]),d(R[C+1][M]))}}function l(x){let v=new w;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new w;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=g(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;o.push(_,1-A)}m(),u()}function u(){for(let x=0;x<o.length;x+=6){let v=o[x+0],_=o[x+2],A=o[x+4],T=Math.max(v,_,A),R=Math.min(v,_,A);T>.9&&R<.1&&(v<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){let x=new w,v=new w,_=new w,A=new w,T=new nt,R=new nt,C=new nt;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),A.copy(x).add(v).add(_).divideScalar(3);let I=g(A);y(T,M+0,x,I),y(R,M+2,v,I),y(C,M+4,_,I)}}function y(x,v,_,A){A<0&&x.x===1&&(o[v]=x.x-1),_.x===0&&_.z===0&&(o[v]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Pr=class extends Cr{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}},Xx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Jx(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ir(r,o,e,a,c,f,0),o}};function Dd(i,t,e,n,s){let r,o;if(s===ay(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ed(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ed(r,i[r],i[r+1],o);return o&&ga(o,o.next)&&(Dr(o),o=o.next),o}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ga(e,e.next)||Te(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ey(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Yx(i,n,s,r):qx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zx(ji(i),t,e),Ir(i,t,e,n,s,r,2)):o===2&&$x(i,t,e,n,s,r):Ir(ji(i),t,e,n,s,r,1);break}}}function qx(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ws(s,a,r,c,o,l,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Dl(f,m,t,e,n),x=Dl(y,g,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&ws(a,h,c,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&ws(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&ws(a,h,c,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&ws(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ga(s,r)&&Ud(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function $x(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sy(o,a)){let c=Nd(o,a);o=ji(o,o.next),c=ji(c,c.next),Ir(o,t,e,n,s,r,0),Ir(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jx(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Dd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(iy(l));for(s.sort(Kx),r=0;r<s.length;r++)e=Qx(s[r],e);return e}function Kx(i,t){return i.x-t.x}function Qx(i,t){let e=jx(i,t);if(!e)return t;let n=Nd(e,i);return ji(n,n.next),ji(e,e.next)}function jx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ws(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Lr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ty(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ty(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function ey(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ny(s)}function ny(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function iy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function sy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ry(i,t)&&(Lr(i,t)&&Lr(t,i)&&oy(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||ga(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ga(i,t){return i.x===t.x&&i.y===t.y}function Ud(i,t,e,n){let s=Fo(Te(i,t,e)),r=Fo(Te(i,t,n)),o=Fo(Te(e,n,i)),a=Fo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&No(i,e,t)||r===0&&No(i,n,t)||o===0&&No(e,i,n)||a===0&&No(e,t,n))}function No(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fo(i){return i>0?1:i<0?-1:0}function ry(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ud(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function oy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nd(i,t){let e=new Ul(i.i,i.x,i.y),n=new Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ed(i,t,e,n){let s=new Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ay(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nd(t),id(n,t);let o=t.length;e.forEach(nd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,id(n,e[c]);let a=Xx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function nd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function id(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ur=class i extends Ll{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ca=class i extends Ie{constructor(t=new Pr([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;gr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];gr.isClockWise(x)===!0&&(m[g]=x.reverse())}let y=gr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=y.length;g<p;g++){let x=y[g],v=x[0]+u,_=x[1]+u,A=x[2]+u;n.push(v,_,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return cy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function cy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var tn=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let x=[],v=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(T+_,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let v=h[p][x+1],_=h[p][x],A=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ke=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let y=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let y=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;o.push(y,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Dn=class extends li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},en=class extends Dn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Oo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends Bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qh:r=t,a=2*e-n;break;case jh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qh:o=t,c=2*n-e;break;case jh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,x=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+x*o[l+A]+v*o[c+A]+_*o[u+A];return r}},Fl=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ol=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oo(e,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oo(t.times,Array),values:Oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wo:e=this.InterpolantFactoryMethodDiscrete;break;case cl:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ly(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=cl;var ts=class extends Un{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Wo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Un{};Bl.prototype.ValueTypeName="color";var kl=class extends Un{};kl.prototype.ValueTypeName="number";var zl=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Pi.slerpFlat(r,0,o,l-a,o,l,c);return r}},la=class extends Un{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Un{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Wo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Un{};Hl.prototype.ValueTypeName="vector";var Vl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},hy=new Vl,Gl=class{constructor(t){this.manager=t!==void 0?t:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ks=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Mc=new le,sd=new w,rd=new w,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var od=new le,cr=new w,bc=new w,Wl=class extends ha{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(cr),bc.copy(n.position),bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bc),n.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}},ua=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Xl=class extends ha{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var da=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ad();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ad(){return performance.now()}var oh="\\[\\]\\.:\\/",uy=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",dy="[^"+oh.replace("\\.","")+"]",fy=/((?:WC+[\/:])*)/.source.replace("WC",ah),py=/(WCOD+)?/.source.replace("WCOD",dy),my=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),gy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),_y=new RegExp("^"+fy+py+my+gy+"$"),xy=["material","materials","bones","map"],ql=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uy,"")}static parseTrackName(t){let e=_y.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=ql;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yy=new Float32Array(1);var cd=new le,Hs=class{constructor(t,e,n=0,s=1/0){this.ray=new yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(t,e=!0,n=[]){return Yl(t,this,n,e),n.sort(ld),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Yl(t[s],this,n,e);return n.sort(ld),n}};function ld(i,t){return i.distance-t.distance}function Yl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Yl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);var Xs=class extends hi{constructor(){super();let t=new fe;t.deleteAttribute("uv");let e=new Dn({side:Ge}),n=new Dn,s=new ua(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Wt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Wt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Wt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Wt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Wt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Wt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Wt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Wt(t,Ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Wt(t,Ws(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new Wt(t,Ws(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new Wt(t,Ws(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new Wt(t,Ws(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Wt(t,Ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(i){let t=new xn;return t.color.setScalar(i),t}var q={updaters:new Set,tweens:[],pickables:[],t:0};function Fd(i){let t=new Fs({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.toneMapping=Fr,t.toneMappingExposure=.95,t.shadowMap.enabled=!0,t.shadowMap.type=$l,t.outputColorSpace=Ze;let e=new Li(t);q.envTex=e.fromScene(new Xs,.04).texture,q.renderer=t,q.camera=new Ve(40,1,.1,600),q.clock=new da,q.raycaster=new Hs,q.canvas=i;let n=()=>{let r=i.clientWidth||window.innerWidth,o=i.clientHeight||window.innerHeight;t.setSize(r,o,!1),q.camera.aspect=r/o,q.camera.updateProjectionMatrix(),q.aspect=r/o,q.onResize&&q.onResize(r,o)};window.addEventListener("resize",n),new ResizeObserver(n).observe(i),n(),i.addEventListener("pointerdown",r=>{let o=i.getBoundingClientRect(),a=new nt((r.clientX-o.left)/o.width*2-1,-((r.clientY-o.top)/o.height)*2+1);q.raycaster.setFromCamera(a,q.camera);let c=q.pickables.filter(h=>h.visible&&yy(h)),l=q.raycaster.intersectObjects(c,!0);for(let h of l){let u=h.object;for(;u&&!u.userData.onTap;)u=u.parent;if(u&&u.userData.onTap){u.userData.onTap(u,h);return}}q.onMiss&&q.onMiss()});let s=()=>{let r=Math.min(q.clock.getDelta(),.05);q.t+=r;for(let o of[...q.updaters])o(r,q.t);vy(r),q.scene&&t.render(q.scene,q.camera),requestAnimationFrame(s)};requestAnimationFrame(s)}function yy(i){for(;i;){if(!i.visible)return!1;i=i.parent}return!0}function zr(i,t){return i.userData.onTap=t,q.pickables.includes(i)||q.pickables.push(i),i}function Od(){q.pickables.length=0}var Ae={linear:i=>i,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,back:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),elastic:i=>i===0||i===1?i:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI)/3)+1,bounce:i=>i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375};function Me(i,t,e=.5,n=Ae.out,s){return new Promise(r=>{let o={};for(let a in t)o[a]=i[a];q.tweens.push({target:i,from:o,to:t,dur:e,e:n,t:0,res:r,onUpdate:s})})}function ui(i){return new Promise(t=>q.tweens.push({target:{},from:{},to:{},dur:i,e:Ae.linear,t:0,res:t}))}function vy(i){let t=[];for(let e of q.tweens){e.t+=i;let n=Math.min(e.t/e.dur,1),s=e.e(n);for(let r in e.to)e.target[r]=e.from[r]+(e.to[r]-e.from[r])*s;e.onUpdate&&e.onUpdate(s),n>=1&&t.push(e)}t.length&&(q.tweens=q.tweens.filter(e=>!t.includes(e)),t.forEach(e=>e.res()))}function Hr(i,t,e=1.2){let n=q.camera,s=n.position.clone(),r=(q.look||t.clone()).clone(),o={k:0};return Me(o,{k:1},e,Ae.inOut,()=>{n.position.lerpVectors(s,i,o.k);let a=r.clone().lerp(t,o.k);n.lookAt(a),q.look=a})}function Nn(i,t){q.camera.position.copy(i),q.camera.lookAt(t),q.look=t.clone()}function _a(i){let t=i.clone().project(q.camera),e=q.canvas.getBoundingClientRect();return{x:(t.x*.5+.5)*e.width,y:(-t.y*.5+.5)*e.height,behind:t.z>1}}function ch(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ie,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Bd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let m=Bd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Bd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new $e(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let y=h.getComponent(d,m);a.setComponent(d+u,m,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function kd(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){let _=a[x],A=i.attributes[_];c[_]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let T=i.morphAttributes[_];T&&(l[_]||(l[_]=[]),T.forEach((R,C)=>{let b=new R.array.constructor(R.count*R.itemSize);l[_][C]=new R.constructor(b,R.itemSize,R.normalized)}))}let f=t*.5,m=Math.log10(1/t),y=Math.pow(10,m),g=f*y;for(let x=0;x<r;x++){let v=n?n.getX(x):x,_="";for(let A=0,T=a.length;A<T;A++){let R=a[A],C=i.getAttribute(R),b=C.itemSize;for(let M=0;M<b;M++)_+=`${~~(C[u[M]](v)*y+g)},`}if(_ in e)h.push(e[_]);else{for(let A=0,T=a.length;A<T;A++){let R=a[A],C=i.getAttribute(R),b=i.morphAttributes[R],M=C.itemSize,I=c[R],O=l[R];for(let B=0;B<M;B++){let G=u[B],K=d[B];if(I[K](o,C[G](v)),b)for(let W=0,tt=b.length;W<tt;W++)O[W][K](o,b[W][G](v))}}e[_]=o,h.push(o),o++}}let p=i.clone();for(let x in i.attributes){let v=c[x];if(p.setAttribute(x,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in l)for(let _=0;_<l[x].length;_++){let A=l[x][_];p.morphAttributes[x][_]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}var lh=new Map;function Tt(i,t={}){let e=i+JSON.stringify(t);if(!t.unique&&lh.has(e))return lh.get(e);let n=new en({color:i,roughness:.6,metalness:0,envMapIntensity:.55,...t});return delete n.unique,t.unique||lh.set(e,n),n}var _e=(i,t={})=>Tt(i,{roughness:.72,sheen:.5,sheenRoughness:.6,sheenColor:new ot(i).lerp(new ot(16777215),.45),...t}),ie=(i,t={})=>Tt(i,{roughness:.25,clearcoat:.8,clearcoatRoughness:.2,...t});function Q(i,t,{cast:e=!0,receive:n=!1}={}){let s=new Wt(i,t);return s.castShadow=e,s.receiveShadow=n,s}function Ut(i,t,e=40,n=28){return Q(new tn(i,e,n),t)}var Kt=(i,t)=>i+Math.random()*(t-i);function xa(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ys(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=xa(e,n),l=xa(e+1,n),h=xa(e,n+1),u=xa(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}var hh=(i,t)=>Ys(i,t)*.55+Ys(i*2.1,t*2.1)*.3+Ys(i*4.3,t*4.3)*.15,qs=(i,t,e)=>{let n=Math.min(Math.max((e-i)/(t-i),0),1);return n*n*(3-2*n)};function uh(i=6273279,t=16773334){let e=new tn(300,32,16),n=new yn({side:Ge,depthWrite:!1,uniforms:{top:{value:new ot(i)},hor:{value:new ot(t)}},vertexShader:"varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; varying vec3 vp; void main(){ float h = normalize(vp).y; float k = smoothstep(-0.05, 0.55, h); gl_FragColor = vec4(mix(hor, top, k),1.);
#include <colorspace_fragment>
}`});return new Wt(e,n)}function dh(i,{sun:t=16773596,sunI:e=2.9,hemiSky:n=12575743,hemiGround:s=9420650,size:r=30}={}){let o=new ks(n,s,.6);i.add(o);let a=new zs(t,e);a.position.set(14,26,12),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let c=a.shadow.camera;return c.left=c.bottom=-r,c.right=c.top=r,c.near=1,c.far=90,a.shadow.bias=-4e-4,a.shadow.normalBias=.03,a.shadow.radius=4,i.add(a),i.add(a.target),{hemi:o,sun:a}}function fh(i=400,t=1352647){let e=new Wn(i,i,160,160);e.rotateX(-Math.PI/2);let n=Tt(t,{roughness:.18,clearcoat:.6,clearcoatRoughness:.2,unique:!0,envMapIntensity:.35}),s={time:{value:0}};n.onBeforeCompile=o=>{o.uniforms.time=s.time,o.vertexShader=`uniform float time;
`+o.vertexShader.replace("#include <beginnormal_vertex>",`
      vec3 objectNormal = normalize(vec3(-cos(position.x*.35+time*1.3)*.042, 1., sin(position.z*.42+time*1.1)*.042));
    `).replace("#include <begin_vertex>",`
      vec3 transformed = position;
      transformed.y += sin(position.x*.35+time*1.3)*.12 + cos(position.z*.42+time*1.1)*.1 + sin((position.x+position.z)*.9+time*2.)*.035;
    `)};let r=new Wt(e,n);return r.receiveShadow=!0,r.userData.update=(o,a)=>{s.time.value=a},r}function Ma({R:i=15,seed:t=0,grass:e=6079038,grass2:n=3972666,sand:s=16178340,height:r=1.7,res:o=140}={}){let a=i*2.6,c=new Wn(a,a,o,o);c.rotateX(-Math.PI/2);let l=c.attributes.position,h=[],u=new ot(e),d=new ot(n),f=new ot(s),m=new ot(14268284),y=new ot,g=(x,v)=>{let A=Math.hypot(x,v)/i+(hh(x*.15+t,v*.15)-.5)*.25,T=1-qs(.62,1,A),R=1-qs(.95,1.25,A);return T*r+T*(hh(x*.12+7+t,v*.12)-.5)*1.4+R*.55-.75};for(let x=0;x<l.count;x++){let v=l.getX(x),_=l.getZ(x),A=g(v,_);l.setY(x,A),A<.12?y.copy(m).lerp(f,qs(-.3,.12,A)):A<.42?y.copy(f):y.copy(u).lerp(d,hh(v*.2,_*.2+3)*1.1-.2).lerp(f,1-qs(.42,.62,A)),h.push(y.r,y.g,y.b)}c.setAttribute("color",new Bt(h,3)),c.computeVertexNormals();let p=new Wt(c,new Dn({vertexColors:!0,roughness:.95}));return p.receiveShadow=!0,p.userData.H=g,p}function Hd(i,{count:t=900,R:e=15,flowers:n=160,avoid:s=[]}={}){let r=i.userData.H,o=new mt,a=new Ue(.06,.45,4);a.translate(0,.2,0);let c=ch([0,1,2].map(T=>{let R=a.clone();return R.rotateZ((T-1)*.35),R.rotateY(T*2.1),R})),l=new Di(c,new Dn({color:16777215,roughness:.9}),t),h=new De,u=new ot,d=0,f=(T,R)=>!s.some(C=>Math.hypot(T-C[0],R-C[1])<C[2]);for(let T=0;T<t*3&&d<t;T++){let R=Math.random()*Math.PI*2,C=Math.sqrt(Math.random())*e*.9,b=Math.cos(R)*C,M=Math.sin(R)*C,I=r(b,M);if(I<.55||!f(b,M))continue;h.position.set(b,I-.05,M),h.rotation.y=Math.random()*6;let O=Kt(.6,1.3);h.scale.set(O,O*Kt(.8,1.4),O),h.updateMatrix(),l.setMatrixAt(d,h.matrix),l.setColorAt(d,u.setHSL(Kt(.24,.31),Kt(.55,.75),Kt(.26,.4))),d++}l.count=d,l.receiveShadow=!0,o.add(l);let m=new tn(.07,8,6);m.scale(1,.35,.6);let y=[];for(let T=0;T<5;T++){let R=m.clone();R.translate(.075,0,0),R.rotateY(T*Math.PI*2/5),y.push(R)}let g=ch(y);g.translate(0,.22,0);let p=new ne(.012,.015,.22,4);p.translate(0,.11,0);let x=new Di(g,new Dn({color:16777215,roughness:.6}),n),v=new Di(new tn(.04,8,6).translate(0,.235,0),Tt(16765503),n),_=new Di(p,Tt(4168506),n),A=[16777215,16748472,16767053,13081599,16743019,9425919];d=0;for(let T=0;T<n*4&&d<n;T++){let R=Math.random()*Math.PI*2,C=Math.sqrt(Math.random())*e*.85,b=Math.cos(R)*C,M=Math.sin(R)*C,I=r(b,M);if(I<.6||!f(b,M))continue;h.position.set(b,I-.02,M),h.rotation.set(Kt(-.15,.15),Math.random()*6,Kt(-.15,.15));let O=Kt(.8,1.4);h.scale.set(O,O,O),h.updateMatrix(),x.setMatrixAt(d,h.matrix),v.setMatrixAt(d,h.matrix),_.setMatrixAt(d,h.matrix),x.setColorAt(d,u.set(A[d%A.length])),d++}return[x,v,_].forEach(T=>{T.count=d,T.castShadow=!0,o.add(T)}),o}function ph(i,t,e=0){let n=new Ur(i,4);n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=kd(n);let s=n.attributes.position;for(let r=0;r<s.count;r++){let o=new w().fromBufferAttribute(s,r),a=1+(Ys(o.x*2.2+e,o.y*2.2+o.z)-.5)*.22;o.multiplyScalar(a),s.setXYZ(r,o.x,o.y,o.z)}return n.computeVertexNormals(),Q(n,_e(t,{sheen:.4,roughness:.85}))}function Vr({fruit:i=null,leaf:t=6078277,leaf2:e=4630076,trunk:n=9067062,scale:s=1}={}){let r=new mt,o=Q(new ne(.22,.38,2.4,12),_e(n,{sheen:.2}));o.position.y=1.2,r.add(o);let a=Q(new ne(.09,.16,1.1,8),_e(n));a.position.set(.4,2.1,0),a.rotation.z=-.8,r.add(a);let c=[[0,3.1,0,1.45],[.95,2.75,.2,1.05],[-.9,2.8,-.1,1.1],[.1,2.75,.9,1],[-.2,2.9,-.85,1],[.3,3.85,-.1,.95]],l=new mt;if(r.add(l),c.forEach((h,u)=>{let d=ph(h[3],u%2?e:t,u*3.7);d.position.set(h[0],h[1],h[2]),l.add(d)}),r.userData.fruitSpots=[],i)for(let h=0;h<9;h++){let u=c[h%c.length],d=Kt(0,Math.PI*2),f=Kt(-.3,.7),m=new w(Math.cos(d)*Math.cos(f),Math.sin(f),Math.sin(d)*Math.cos(f)).multiplyScalar(u[3]*.98),y=Ni(i);y.scale.setScalar(.42),y.position.set(u[0]+m.x,u[1]+m.y-.1,u[2]+m.z),l.add(y),r.userData.fruitSpots.push(y)}return r.scale.setScalar(s),r.userData.update=(h,u)=>{l.rotation.z=Math.sin(u*.8+r.position.x)*.015},r}function ba({h:i=4.2,lean:t=.35,scale:e=1,coconuts:n=!0}={}){let s=new mt,r=9,o=[];for(let f=0;f<=r;f++){let m=f/r;o.push(new w(Math.sin(m*1.3)*t*i*.45,m*i,0))}let a=new Qi(o);for(let f=0;f<r;f++){let m=a.getPoint(f/r),y=a.getPoint((f+1)/r),g=.26-f*.012,p=Q(new ne(g*.92,g*1.08,m.distanceTo(y)*1.05,12),_e(f%2?10514495:9265204,{sheen:.2}));p.position.copy(m).lerp(y,.5),p.lookAt(y),p.rotateX(Math.PI/2),s.add(p)}let c=a.getPoint(1),l=new mt;l.position.copy(c),s.add(l);let h=new Wn(2.6,.7,16,2),u=h.attributes.position;for(let f=0;f<u.count;f++){let m=u.getX(f)+1.3,y=u.getY(f),g=m/2.6,p=Math.sin(g*Math.PI)*(1-g*.3);y*=p;let x=-g*g*1.3;u.setXYZ(f,m,x-Math.abs(y)*.25,y)}h.computeVertexNormals();let d=Tt(4173382,{side:Fe,roughness:.7,sheen:.5,sheenColor:new ot(14155696)});for(let f=0;f<8;f++){let m=Q(h,f%2?d:Tt(5685836,{side:Fe,roughness:.7}));m.rotation.y=f*Math.PI/4+Kt(-.15,.15),m.rotation.z=Kt(.05,.35),l.add(m)}if(n)for(let f=0;f<3;f++){let m=Ut(.17,ie(7029795,{roughness:.5}));m.position.set(Math.cos(f*2.1)*.2,-.2,Math.sin(f*2.1)*.2),l.add(m)}return s.scale.setScalar(e),s.userData.update=(f,m)=>{l.rotation.y=Math.sin(m*.6+s.position.x)*.06,l.rotation.z=Math.sin(m*.9+s.position.z)*.04},s}function mh({scale:i=1,fruit:t=!0}={}){let e=new mt,n=Q(new ne(.16,.22,1.6,10),_e(8367690));n.position.y=.8,e.add(n);let s=new Wn(1.9,.6,12,2),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o)+.95,c=r.getY(o),l=a/1.9;r.setXYZ(o,a,-l*l*.7+Math.abs(c)*.15,c*Math.sin(Math.min(l*3.2,Math.PI/2+l)))}s.computeVertexNormals();for(let o=0;o<6;o++){let a=Q(s,Tt(o%2?5027656:6539098,{side:Fe,roughness:.65}));a.position.y=1.55,a.rotation.set(0,o*1.05,.7+Kt(-.1,.2)),e.add(a)}if(e.userData.fruitSpots=[],t)for(let o=0;o<4;o++){let a=Ni("banana");a.scale.setScalar(.45),a.position.set(.25*Math.cos(o*1.6),1.25-o*.08,.25*Math.sin(o*1.6)),a.rotation.set(0,o*1.6,1.4),e.add(a),e.userData.fruitSpots.push(a)}return e.scale.setScalar(i),e}function gh({fruit:i=null,color:t=5222467,scale:e=1}={}){let n=new mt;if([[0,.45,0,.62],[.55,.35,.1,.48],[-.5,.35,.05,.5],[0,.35,.45,.45]].forEach((s,r)=>{let o=ph(s[3],r%2?t:6210640,r*5.1);o.position.set(s[0],s[1],s[2]),o.scale.y=.8,n.add(o)}),n.userData.fruitSpots=[],i)for(let s=0;s<6;s++){let r=s*1.1,o=Ni(i);o.scale.setScalar(.3),o.position.set(Math.cos(r)*.6,.35+s%3*.15,Math.sin(r)*.55+.05),o.rotation.y=r,n.add(o),n.userData.fruitSpots.push(o)}return n.scale.setScalar(e),n}function Vd({scale:i=1}={}){let t=new mt,e=_e(10185279,{sheen:.2});[[-1.2,-.5],[1.2,-.5],[-1.2,.5],[1.2,.5]].forEach(([n,s])=>{let r=Q(new ne(.08,.1,2.2,8),e);r.position.set(n,1.1,s),t.add(r)});for(let n=0;n<5;n++){let s=Q(new fe(2.7,.08,.1),e);s.position.set(0,2.2,-.5+n*.25),t.add(s)}for(let n=0;n<7;n++){let s=ph(.35,6078277,n);s.position.set(-1.1+n*.37,2.35,Kt(-.4,.4)),s.scale.y=.5,t.add(s)}t.userData.fruitSpots=[];for(let n=0;n<4;n++){let s=Ni("grapes");s.scale.setScalar(.5),s.position.set(-.9+n*.6,1.85,Kt(-.3,.3)),t.add(s),t.userData.fruitSpots.push(s)}return t.scale.setScalar(i),t}function Gd(i=1,t=12104360){let e=new Ur(.5,2),n=e.attributes.position;for(let r=0;r<n.count;r++){let o=new w().fromBufferAttribute(n,r);o.multiplyScalar(1+(Ys(o.x*3,o.y*3+o.z*2)-.5)*.5),o.y*=.65,n.setXYZ(r,o.x,o.y,o.z)}e.computeVertexNormals();let s=Q(e,Tt(t,{roughness:.9}));return s.scale.setScalar(i),s.receiveShadow=!0,s}function _h(i=1,t=16734810){let e=new mt,n=Q(new ne(.09,.12,.3,10),Tt(16774109));n.position.y=.15,e.add(n);let s=Q(new tn(.22,20,12,0,Math.PI*2,0,Math.PI/2),ie(t));s.position.y=.27,s.scale.y=.8,e.add(s);for(let r=0;r<5;r++){let o=Ut(.03,Tt(16777215),8,6),a=r*1.3;o.position.set(Math.cos(a)*.14,.38,Math.sin(a)*.14),e.add(o)}return e.scale.setScalar(i),e}function xh(i=1){let t=new mt,e=Tt(16777215,{roughness:1,sheen:1,sheenColor:new ot(16771312),emissive:8952234,emissiveIntensity:.15});return[[0,0,0,1.4],[1.3,-.2,.1,1],[-1.3,-.25,0,1.05],[.6,.5,-.2,.95],[-.6,.4,.2,.9]].forEach(n=>{let s=Ut(n[3],e,20,14);s.castShadow=!1,s.position.set(n[0],n[1],n[2]),s.scale.y=.75,t.add(s)}),t.scale.setScalar(i),t}function Wd(i=1){let t=new mt,e=[];for(let d=0;d<=10;d++){let f=d/10;e.push(new nt(.55+Math.sin(f*1.4)*.32,f*.7))}let n=new Xn(e,40),s=n.attributes.position,r=[],o=new ot(13208906),a=new ot(11037746);for(let d=0;d<s.count;d++){let f=s.getY(d),m=Math.atan2(s.getZ(d),s.getX(d)),y=Math.sin(f*28)*Math.sin(m*20)>0?o:a;r.push(y.r,y.g,y.b)}n.setAttribute("color",new Bt(r,3));let c=Q(n,new Dn({vertexColors:!0,side:Fe,roughness:.85}));t.add(c);let l=Q(new ke(.86,.06,10,48),_e(11893309));l.rotation.x=Math.PI/2,l.position.y=.7,t.add(l);let h=Q(new ke(.8,.05,10,40,Math.PI),_e(11893309));h.position.y=.7,t.add(h);let u=Q(new Ui(.56,32),Tt(9394730));return u.rotation.x=-Math.PI/2,u.position.y=.02,t.add(u),t.scale.setScalar(i),t}function Xd(i=1){let t=new mt,e=_e(11893055,{sheen:.2}),n=_e(9067051),s=Q(new fe(3,1,1.1),e);s.position.y=.5,t.add(s);for(let r=0;r<6;r++){let o=Q(new fe(.04,.95,1.12),n);o.position.set(-1.25+r*.5,.5,0),t.add(o)}[[-1.4,-.45],[1.4,-.45],[-1.4,.45],[1.4,.45]].forEach(([r,o])=>{let a=Q(new ne(.07,.07,2.6,8),n);a.position.set(r,1.3,o),t.add(a)});for(let r=0;r<8;r++){let o=Q(new fe(.4,.05,1.5),Tt(r%2?16777215:16739179,{roughness:.7}));o.position.set(-1.4+r*.4,2.65,.1),o.rotation.x=.25,t.add(o);let a=Q(new ne(.2,.2,.4,16,1,!1,0,Math.PI),Tt(r%2?16777215:16739179));a.rotation.z=Math.PI/2,a.position.set(-1.4+r*.4,2.47,.84),t.add(a)}return t.scale.setScalar(i),t}function yh(i=120,t=14,e=16774048){let n=new Ie,s=[];for(let c=0;c<i;c++)s.push(Kt(-t,t),Kt(.5,6),Kt(-t,t));n.setAttribute("position",new Bt(s,3));let r=My(),o=new Tr({size:.22,map:r,color:e,transparent:!0,depthWrite:!1,blending:Go}),a=new ia(n,o);return a.userData.update=(c,l)=>{a.rotation.y=l*.02,o.opacity=.6+Math.sin(l*2)*.3},a}var ya;function My(){if(ya)return ya;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ya=new Os(i),ya}function qd(i=16748496){let t=new mt,e=new Ui(.16,16);e.scale(1,1.3,1);let n=Tt(i,{side:Fe,roughness:.5}),s=new mt,r=new mt,o=Q(e,n);o.position.x=-.15,s.add(o);let a=Q(e,n);a.position.x=.15,r.add(a),[s,r].forEach(u=>{u.rotation.x=-Math.PI/2,t.add(u)});let c=Q(new je(.025,.18,4,8),Tt(3355443));c.rotation.x=Math.PI/2,t.add(c);let l=Math.random()*10,h=new w(Kt(-8,8),Kt(1.5,3),Kt(-6,6));return t.userData.update=(u,d)=>{let f=Math.sin(d*18+l)*.9;s.rotation.z=f,r.rotation.z=-f;let m=d*.4+l;t.position.set(h.x+Math.cos(m)*3,h.y+Math.sin(d*1.3+l)*.5,h.z+Math.sin(m*1.3)*2.5),t.rotation.y=-m+Math.PI},t}function zd(i,t,e,n,s){let r=i.attributes.position,o=[],a=new ot(t),c=new ot(e),l=new ot;for(let h=0;h<r.count;h++){let u=qs(n,s,r.getY(h));l.copy(a).lerp(c,u),o.push(l.r,l.g,l.b)}i.setAttribute("color",new Bt(o,3))}function va(i=.35,t=5224520){let e=new Pr;e.moveTo(0,0),e.quadraticCurveTo(i*.45,i*.32,i,0),e.quadraticCurveTo(i*.45,-i*.32,0,0);let n=new ca(e,12),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r);s.setZ(r,-o*o*1.2)}return n.computeVertexNormals(),Q(n,Tt(t,{side:Fe,roughness:.55,clearcoat:.3}))}var by={apple(){let i=new mt,t=[];for(let l=0;l<=32;l++){let h=-Math.PI/2+Math.PI*l/32,u=Math.cos(h)*(1+.12*Math.sin(h))*.5,d=Math.sin(h)*.46,f=Math.exp(-Math.pow((l-32)/3.5,2))*.1-Math.exp(-Math.pow(l/3,2))*.05;t.push(new nt(Math.max(u,.001),d-f))}let e=new Xn(t,48);zd(e,14162732,16730682,-.4,.45);let n=e.attributes.position,s=e.attributes.color,r=new ot(16761402),o=new ot;for(let l=0;l<n.count;l++){let h=Math.max(0,n.getX(l)/.5)*qs(-.1,.4,n.getY(l))*.35;o.fromBufferAttribute(s,l).lerp(r,h),s.setXYZ(l,o.r,o.g,o.b)}i.add(Q(e,new en({vertexColors:!0,roughness:.3,clearcoat:.9,clearcoatRoughness:.15,envMapIntensity:.8})));let a=Q(new ne(.018,.028,.22,8),Tt(7029286));a.position.set(.02,.5,0),a.rotation.z=-.25,i.add(a);let c=va(.3);return c.position.set(.04,.55,0),c.rotation.set(.2,.3,.5),i.add(c),i},banana(){let i=new mt,t=new Rr(new w(-.62,.32,0),new w(0,-.42,0),new w(.62,.32,0)),e=40,n=24,s=[],r=[],o=[],a=new ot(16767034),c=new ot(15906848),l=new ot(5913114),h=new ot(10276666),u=new ot;for(let m=0;m<=e;m++){let y=m/e,g=t.getPoint(y),p=t.getTangent(y),x=new w(0,0,1),v=new w().crossVectors(p,x).normalize(),_=.15*Math.pow(Math.sin(Math.PI*Math.min(Math.max(y*1.06-.03,0),1)),.55)+.012;for(let A=0;A<=n;A++){let T=A/n*Math.PI*2,R=_*(1+.07*Math.cos(T*5)),C=g.clone().addScaledVector(v,Math.cos(T)*R).addScaledVector(x,Math.sin(T)*R);s.push(C.x,C.y,C.z),u.copy(a).lerp(c,.5+.5*Math.cos(T*5)*.4),y<.08||y>.95?u.copy(l):y>.86&&u.lerp(h,(y-.86)/.09),r.push(u.r,u.g,u.b)}}for(let m=0;m<e;m++)for(let y=0;y<n;y++){let g=m*(n+1)+y,p=g+n+1;o.push(g,p,g+1,p,p+1,g+1)}let d=new Ie;d.setIndex(o),d.setAttribute("position",new Bt(s,3)),d.setAttribute("color",new Bt(r,3)),d.computeVertexNormals(),i.add(Q(d,new en({vertexColors:!0,roughness:.45,clearcoat:.4,side:Fe})));let f=Q(new ne(.03,.04,.14,8),Tt(8030762));return f.position.set(.66,.38,0),f.rotation.z=-.7,i.add(f),i.rotation.z=-.15,i},orange(){let i=new mt,t=new tn(.47,64,48),e=t.attributes.position,n=[],s=new ot(16747008),r=new ot(16754219),o=new ot;for(let l=0;l<e.count;l++){let h=new w().fromBufferAttribute(e,l),u=Ys(h.x*30+5,h.y*30+h.z*30);h.multiplyScalar(1+(u-.5)*.018),h.y*=.94,e.setXYZ(l,h.x,h.y,h.z),o.copy(s).lerp(r,u),n.push(o.r,o.g,o.b)}t.setAttribute("color",new Bt(n,3)),t.computeVertexNormals(),i.add(Q(t,new en({vertexColors:!0,roughness:.42,clearcoat:.5,clearcoatRoughness:.35})));let a=Q(new ne(.07,.09,.03,5),Tt(5934890));a.position.y=.44,i.add(a);let c=va(.32,4105533);return c.position.set(0,.46,0),c.rotation.set(.3,-.6,.4),i.add(c),i},strawberry(){let i=new mt,t=[];for(let h=0;h<=30;h++){let u=h/30,d=Math.sin(Math.pow(u,.85)*Math.PI*.92)*.42*(1-Math.pow(u,7)*.2);t.push(new nt(Math.max(d,.001),-.5+u*.9))}t[t.length-1].x=.001;let e=new Xn(t,40);zd(e,14685739,16726855,-.5,.3);let n=Q(e,new en({vertexColors:!0,roughness:.3,clearcoat:1,clearcoatRoughness:.2}));i.add(n);let s=new tn(.018,6,4);s.scale(1,1.6,1);let r=new Di(s,Tt(16769658,{roughness:.5}),70),o=new De,a=0;for(let h=0;h<70;h++){let u=.1+h/70*.78,d=h*2.39996,f=Math.floor(u*30),m=t[f].x*.99,y=t[f].y;o.position.set(Math.cos(d)*m,y,Math.sin(d)*m),o.lookAt(o.position.x*2,y+.2,o.position.z*2),o.rotateX(Math.PI/2),o.updateMatrix(),r.setMatrixAt(a++,o.matrix)}i.add(r);for(let h=0;h<6;h++){let u=va(.26,4173380);u.position.y=.38,u.rotation.set(0,h*Math.PI/3,-.35),i.add(u)}let c=Q(new ne(.02,.025,.14,8),Tt(4165434));c.position.y=.46,i.add(c),i.rotation.x=Math.PI;let l=new mt;return l.add(i),i.position.y=0,l.rotation.z=.25,l},grapes(){let i=new mt,t=new en({color:8077247,roughness:.2,clearcoat:1,clearcoatRoughness:.1,sheen:.6,sheenColor:new ot(13219583)}),e=new en({color:6959016,roughness:.2,clearcoat:1,clearcoatRoughness:.1});[5,5,4,3,2,1].forEach((o,a)=>{let c=.32-a*.15,l=.05+o*.055;for(let h=0;h<o;h++){let u=h*Math.PI*2/o+a*.6,d=Ut(.13,(h+a)%3?t:e,24,16);d.position.set(Math.cos(u)*l*(o>1?1:0),c,Math.sin(u)*l*(o>1?1:0)),d.scale.y=1.08,i.add(d)}});let s=Q(new ne(.02,.03,.3,8),Tt(7031338));s.position.y=.5,s.rotation.z=.3,i.add(s);let r=va(.4,5025343);return r.position.set(.05,.55,0),r.rotation.set(.4,.2,.3),i.add(r),i}};function Ni(i){let t=new mt,e=by[i]();return t.add(e),t.userData.fruit=i,t}function Yd(i=16740270,t=16767053){let e=new mt,n=Q(new fe(1,.8,1,2,2,2),ie(i,{roughness:.35}));n.position.y=.4,e.add(n);let s=ie(t,{roughness:.3,metalness:.2}),r=Q(new fe(1.02,.81,.18),s);r.position.y=.4,e.add(r);let o=Q(new fe(.18,.81,1.02),s);o.position.y=.4,e.add(o);let a=new mt;a.position.y=.8,e.add(a);let c=Q(new fe(1.1,.22,1.1),ie(i,{roughness:.35}));c.position.y=.11,a.add(c);let l=Q(new fe(1.12,.23,.18),s);l.position.y=.11,a.add(l);let h=Q(new fe(.18,.23,1.12),s);h.position.y=.11,a.add(h);for(let d of[-1,1]){let f=Q(new ke(.17,.06,12,24),s);f.position.set(d*.17,.32,0),f.rotation.set(0,0,d*.5),f.scale.set(1,.8,.6),a.add(f)}let u=Ut(.08,s);return u.position.y=.28,a.add(u),e.userData.lid=a,e}var Ea={sunglasses:{slot:"face",ar:"\u0646\u0638\u0627\u0631\u0629 \u0634\u0645\u0633\u064A\u0629",en:"Sunglasses"},flowers:{slot:"head",ar:"\u062A\u0627\u062C \u0627\u0644\u0648\u0631\u0648\u062F",en:"Flower crown"},partyhat:{slot:"head",ar:"\u0642\u0628\u0639\u0629 \u0627\u0644\u062D\u0641\u0644\u0629",en:"Party hat"},bowtie:{slot:"neck",ar:"\u0631\u0628\u0637\u0629 \u0641\u0631\u0627\u0634\u0629",en:"Bow tie"},explorer:{slot:"head",ar:"\u0642\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u062A\u0643\u0634\u0641",en:"Explorer hat"},crown:{slot:"head",ar:"\u0627\u0644\u062A\u0627\u062C \u0627\u0644\u0630\u0647\u0628\u064A",en:"Golden crown"}};function Gr(i){let t=new mt;if(i==="sunglasses"){let e=ie(16732043),n=Tt(1712691,{roughness:.05,clearcoat:1,metalness:.3});for(let r of[-1,1]){let o=Q(new ke(.17,.035,10,28),e);o.position.x=r*.21,t.add(o);let a=Q(new Ui(.16,24),n);a.position.set(r*.21,0,.005),t.add(a)}let s=Q(new ne(.025,.025,.1,8),e);s.rotation.z=Math.PI/2,t.add(s)}else if(i==="flowers"){let e=Q(new ke(.42,.04,8,36),Tt(5025616));e.rotation.x=Math.PI/2,t.add(e);let n=[16740264,16765503,16777215,11635967,16747109];for(let s=0;s<9;s++){let r=s*Math.PI*2/9,o=new mt;o.position.set(Math.cos(r)*.42,.04,Math.sin(r)*.42);for(let c=0;c<5;c++){let l=Ut(.06,Tt(n[s%5]),10,8);l.scale.set(1,.5,1),l.position.set(Math.cos(c*1.256)*.06,0,Math.sin(c*1.256)*.06),o.add(l)}let a=Ut(.035,Tt(16761095),8,6);a.position.y=.02,o.add(a),t.add(o)}}else if(i==="partyhat"){let e=new Ue(.3,.7,32,8),n=e.attributes.position,s=[],r=new ot(5227511),o=new ot(16771899);for(let l=0;l<n.count;l++){let h=Math.sin((n.getY(l)*3+Math.atan2(n.getZ(l),n.getX(l)))*3)>0?r:o;s.push(h.r,h.g,h.b)}e.setAttribute("color",new Bt(s,3));let a=Q(e,new en({vertexColors:!0,roughness:.4,clearcoat:.6}));a.position.y=.35,t.add(a);let c=Ut(.09,_e(16735370));c.position.y=.72,t.add(c)}else if(i==="bowtie"){let e=ie(15022416);for(let s of[-1,1]){let r=Q(new Ue(.13,.22,4),e);r.rotation.z=s*Math.PI/2,r.position.x=s*.11,r.scale.z=.5,t.add(r)}let n=Ut(.055,e);t.add(n)}else if(i==="explorer"){let e=_e(14267756,{sheen:.3}),n=Q(new ne(.62,.62,.04,40),e);t.add(n);let s=Q(new tn(.4,32,16,0,Math.PI*2,0,Math.PI/2),e);s.scale.y=.8,t.add(s);let r=Q(new ne(.405,.405,.09,40,1,!0),Tt(7162927));r.position.y=.05,t.add(r)}else if(i==="crown"){let e=Tt(16763196,{metalness:1,roughness:.22,envMapIntensity:1.4}),n=Q(new ne(.34,.32,.16,32,1,!0),e);n.material.side=Fe,t.add(n);for(let s=0;s<6;s++){let r=s*Math.PI/3,o=Q(new Ue(.07,.22,8),e);o.position.set(Math.cos(r)*.32,.17,Math.sin(r)*.32),t.add(o);let a=Ut(.04,ie([16726891,3917055,7077770][s%3],{roughness:.1}),12,8);a.position.set(Math.cos(r)*.335,0,Math.sin(r)*.335),t.add(a)}t.position.y=.06}return t}function Wr(i=16743074,t=5991423,e=1){let n=new mt,s=Q(new fe(1,1,1),ie(i,{roughness:.5}));s.position.y=.5,n.add(s);let r=Q(new Ue(.8,.6,4),ie(t,{roughness:.45}));r.position.y=1.3,r.rotation.y=Math.PI/4,n.add(r);let o=Q(new fe(.3,.45,.05),Tt(8014378));o.position.set(0,.23,.51),n.add(o);let a=Q(new fe(.25,.25,.05),Tt(12578815,{emissive:16774064,emissiveIntensity:.3}));return a.position.set(.28,.65,.51),n.add(a),n.scale.setScalar(e),n}function Zd(i=1,t=3120730){let e=new mt,n=Q(new ne(.1,.14,.6,8),_e(8016432));n.position.y=.3,e.add(n);for(let s=0;s<3;s++){let r=Q(new Ue(.7-s*.17,.9,16),_e(t,{sheen:.3}));r.position.y=.8+s*.45,e.add(r)}return e.scale.setScalar(i),e}function $d(i=1){let t=new mt,e=[];for(let c=0;c<=20;c++){let l=c/20;e.push(new nt(Math.max(.001,Math.sin(Math.pow(l,.6)*Math.PI)*.45*(l<.5?1:1-(l-.5)*.4)),l*2.2))}let n=Q(new Xn(e,32),ie(16119807,{roughness:.3}));t.add(n);let s=Q(new ke(.17,.05,10,24),ie(16734815));s.position.set(0,1.2,.42),t.add(s);let r=Ut(.15,Tt(8378623,{roughness:.05,clearcoat:1,emissive:2781082,emissiveIntensity:.4}));r.position.set(0,1.2,.38),r.scale.z=.4,t.add(r);for(let c=0;c<3;c++){let l=Q(new fe(.06,.6,.5),ie(16734815)),h=c*Math.PI*2/3;l.position.set(Math.cos(h)*.42,.3,Math.sin(h)*.42),l.rotation.y=-h,t.add(l)}let o=Q(new Ue(.2,.4,24),ie(16734815));o.position.y=2.15,t.add(o);let a=Q(new Ue(.25,.7,16),new xn({color:16757051,transparent:!0,opacity:.85}));return a.rotation.x=Math.PI,a.position.y=-.3,t.add(a),t.userData.update=(c,l)=>{a.scale.y=1+Math.sin(l*30)*.2},t.scale.setScalar(i),t}function Jd(i=1){let t=new mt,e=ie(16769520,{roughness:.55}),n=ie(10185727,{roughness:.4}),s=Q(new fe(1.6,1.4,1.2),e);s.position.y=.7,t.add(s),[[-.9,-.6],[.9,-.6],[-.9,.6],[.9,.6]].forEach(([a,c],l)=>{let h=Q(new ne(.3,.32,2,20),e);h.position.set(a,1,c),t.add(h);let u=Q(new Ue(.4,.8,20),l%2?n:ie(16740270));u.position.set(a,2.4,c),t.add(u)});let r=Q(new ne(.25,.25,.1,20,1,!1,0,Math.PI),Tt(9067066));r.rotation.x=Math.PI/2,r.rotation.z=Math.PI,r.position.set(0,.4,.62),t.add(r);let o=Q(new Wn(.4,.25),Tt(16765503,{side:Fe}));return o.position.set(.9+.2,3.05,.6),t.add(o),t.scale.setScalar(i),t}function Sa(i=1,t=16743050){let e=new mt;for(let n=0;n<5;n++){let s=Q(new je(.08,.5+Math.random()*.4,4,10),ie(t,{roughness:.5}));s.position.set(Kt(-.25,.25),.3,Kt(-.25,.25)),s.rotation.set(Kt(-.5,.5),0,Kt(-.5,.5)),e.add(s)}return e.scale.setScalar(i),e}function Kd(i=1){let t=new mt,e=_e(10116398),n=Tt(16763196,{metalness:1,roughness:.25}),s=Q(new fe(1,.55,.65),e);s.position.y=.28,t.add(s);let r=Q(new ne(.33,.33,1,20,1,!1,0,Math.PI),e);r.rotation.z=Math.PI/2,r.position.y=.55,t.add(r);for(let a of[-.35,.35]){let c=Q(new fe(.08,.57,.67),n);c.position.set(a,.28,0),t.add(c)}let o=Ut(.25,Tt(16766282,{metalness:1,roughness:.3}));return o.position.y=.62,o.scale.y=.4,t.add(o),t.scale.setScalar(i),t}function vh(i=1,t=16755021){let e=new mt;e.add(Ut(.6,ie(t,{roughness:.5})));let n=Q(new ke(.95,.06,8,48),ie(16774048));return n.rotation.x=1.2,e.add(n),e.scale.setScalar(i),e}function jd(i){i.userData.upd=[],i.traverse(t=>{t.userData.update&&i.userData.upd.push(t.userData.update)}),i.userData.tick=(t,e)=>i.userData.upd.forEach(n=>n(t,e))}function tf(){let i=new hi;i.environment=q.envTex,i.environmentIntensity=.4,i.add(uh(6471164,16773592)),i.fog=new br(14676991,45,140);let t=dh(i,{size:22});i.add(fh());let e=Ma({R:15});i.add(e);let n=e.userData.H;i.userData.H=n;let s=(l,h,u,d=0)=>(l.position.set(h,n(h,u)-.05,u),l.rotation.y=d,i.add(l),l),r=new w(0,n(0,6),6);i.userData.stage=r;let o=[[0,6.3,2.6],[0,.6,2.2]];i.add(Hd(e,{R:15,count:1100,flowers:220,avoid:o}));let a={apple:[],banana:[],orange:[],strawberry:[],grapes:[]},c=(l,h,u,d)=>{let f=s(Vr({fruit:l,scale:d,leaf:l==="orange"?4173386:6078277}),h,u,Math.random()*6);a[l].push(f)};c("apple",-6.5,-1.5,1),c("apple",-9,2.5,.85),c("apple",-3.8,-5.5,.9),c("orange",6.5,-2,1),c("orange",9.5,2,.85),c("orange",3.6,-6.2,.9),[[-8.3,6.2],[-10.5,0],[-6.8,9]].forEach(([l,h])=>a.banana.push(s(mh({scale:1.1}),l,h,Math.random()*6))),[[7.8,6.5],[5.8,9.4],[10,5],[-4.2,10.5],[4.2,2.2]].forEach(([l,h])=>a.strawberry.push(s(gh({fruit:"strawberry",scale:1.1}),l,h,Math.random()*6))),a.grapes.push(s(Vd({scale:1.1}),0,-6.5,0)),i.userData.groves=a,[[-12.5,-5,.9],[12.3,-5.5,1],[-13,6,.8],[12.8,8,.85],[0,-12.8,1.1],[-8,-10.5,.9],[8.5,-10.3,.95]].forEach(([l,h,u])=>s(ba({scale:u,lean:.3}),l,h,Math.atan2(l,h)+Math.PI)),s(Xd(1),0,.6,0),[[-3.5,12.2,.9],[3.3,12.6,.7],[-11,9,.8],[11.5,-1.5,.9],[-2.5,-9.5,.6]].forEach(([l,h,u])=>s(Gd(u),l,h,Math.random()*6)),[[-4.6,3.8],[4.9,4.1],[-2.2,1.8],[6.6,1.4]].forEach(([l,h],u)=>s(_h(1.2,u%2?16740419:16734858),l,h));for(let l=0;l<10;l++){let h=l/10*Math.PI*2+.3,u=14.3,d=Ut(.15,ie([16757697,16773314,16765094][l%3]));d.scale.set(1,.4,1.2),d.position.set(Math.cos(h)*u,n(Math.cos(h)*u,Math.sin(h)*u)+.03,Math.sin(h)*u),i.add(d)}for(let l=0;l<9;l++){let h=xh(Kt(1.2,2.4)),u=l/9*Math.PI*2;h.position.set(Math.cos(u)*Kt(30,55),Kt(13,22),Math.sin(u)*Kt(30,55)-10),i.add(h),h.userData.update=(d,f)=>{h.position.x+=d*.3,h.position.x>60&&(h.position.x=-60)}}[[-38,-40,5],[42,-35,6],[-55,10,4],[55,20,4.5]].forEach(([l,h,u])=>{let d=Ma({R:u,res:50,seed:l});d.position.set(l,0,h),i.add(d);let f=ba({scale:.9});f.position.set(l,.9,h),i.add(f)});for(let l=0;l<5;l++)i.add(qd([16748496,16767053,9425919,13081599,16752491][l]));return i.add(yh(90,12)),jd(i),i.userData.sun=t.sun,i}function Fn(i,t){let e=i.userData.groves;for(let n in e)e[n].forEach(s=>(s.userData.fruitSpots||[]).forEach(r=>{r.visible=t.includes(n)}))}var Zs=[{id:"fruit",x:-9,z:8},{id:"forest",x:1,z:11},{id:"colors",x:10,z:5},{id:"sea",x:2,z:-1},{id:"space",x:-9,z:-5},{id:"castle",x:4,z:-12}];function ef(){let i=new hi;i.environment=q.envTex,i.environmentIntensity=.4,i.add(uh(7259903,16773334)),i.fog=new br(13627135,60,160),dh(i,{size:30}),i.add(fh(500,1286084));let t={},e=(a,c,l,h,u={})=>{let d=new mt;d.position.set(c,0,l),i.add(d);let f=Ma({R:3.6,res:60,height:1.3,seed:c*3+l,...u});d.add(f);let m=f.userData.H;return h((g,p,x)=>(g.position.set(p,m(p,x)-.05,x),d.add(g),g),d,m),t[a]=d,d};e("fruit",-9,8,a=>{a(Vr({fruit:"apple",scale:.6}),-.8,-.6),a(ba({scale:.55}),1.4,.4),a(gh({fruit:"strawberry",scale:.6}),.3,1.4),a(mh({scale:.6}),-1.6,1.1)}),e("forest",1,11,a=>{[[-1,-1,.8],[.6,-1.3,.95],[1.5,.4,.75],[-1.6,.6,.7],[0,.2,1.05]].forEach(([c,l,h])=>a(Zd(h),c,l)),a(_h(1.4),.9,1.5)},{grass:5617738,grass2:3116863}),e("colors",10,5,a=>{a(Wr(16743074,5991423,.7),-1,-.6),a(Wr(16767053,16734815,.6),.8,-.9),a(Wr(7070624,11824127,.65),.5,.9),a(Wr(7063039,16751163,.55),-1.3,1)},{grass:11987050,grass2:9425759}),e("sea",2,-1,(a,c)=>{a(Kd(.7),0,0),a(Sa(.9,16743050),-1.4,.6),a(Sa(.8,16757575),1.3,.8),a(Sa(.7,11766015),.9,-1.1)},{grass:16178340,grass2:15387018}),e("space",-9,-5,(a,c)=>{a($d(.75),0,0);let l=vh(.7,16755021);l.position.set(2.2,3.4,0),c.add(l);let h=vh(.45,9403391);h.position.set(-2.2,2.8,.5),c.add(h),c.userData.update=(u,d)=>{l.position.y=3.4+Math.sin(d)*.2,l.rotation.y=d*.5,h.position.y=2.8+Math.cos(d*1.2)*.2}},{grass:12166911,grass2:9403356,sand:14866175}),e("castle",4,-12,a=>{a(Jd(.7),0,-.2),a(Vr({scale:.45,leaf:16751823,leaf2:16744376}),-2,.8),a(Vr({scale:.4,leaf:16751823,leaf2:16744376}),2,.9)},{grass:10216058,grass2:8179562});let n=Zs.map(a=>new w(a.x,.25,a.z)),s=new Qi(n),r=new ne(.22,.22,.08,16),o=Tt(16777215,{roughness:.4,emissive:16777215,emissiveIntensity:.2});for(let a=0;a<=90;a++){let c=s.getPoint(a/90);if(Zs.some(h=>Math.hypot(h.x-c.x,h.z-c.z)<3.4))continue;let l=new Wt(r,o);l.position.copy(c),i.add(l)}for(let a=0;a<10;a++){let c=xh(Kt(1.3,2.4));c.position.set(Kt(-45,45),Kt(4,7),Kt(-45,-22)),i.add(c),c.userData.update=l=>{c.position.x+=l*.4,c.position.x>50&&(c.position.x=-50)}}return i.add(yh(60,18)),jd(i),i.userData.islands=t,i}var Aa={lulu:{ar:"\u0644\u0648\u0644\u0648",en:"Lulu",role:"\u0627\u0644\u062B\u0639\u0644\u0628\u0629 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629\u060C \u0642\u0627\u0626\u062F\u0629 \u0627\u0644\u0631\u062D\u0644\u0629",color:"#ff8a3d"},bibo:{ar:"\u0628\u064A\u0628\u0648",en:"Bibo",role:"\u0627\u0644\u0639\u0635\u0641\u0648\u0631 \u0627\u0644\u0644\u064A \u064A\u0639\u0644\u0651\u0645\u0643 \u062A\u0633\u0645\u0639 \u0648\u062A\u0646\u0637\u0642",color:"#3aa0ff"},bondoq:{ar:"\u0628\u0646\u062F\u0642",en:"Bondoq",role:"\u0627\u0644\u062F\u0628 \u0627\u0644\u0630\u0643\u064A \u0635\u0627\u062D\u0628 \u0627\u0644\u0623\u0644\u063A\u0627\u0632",color:"#a8693a"},toota:{ar:"\u062A\u0648\u062A\u0629",en:"Toota",role:"\u0627\u0644\u0623\u0631\u0646\u0628\u0629 \u0627\u0644\u0644\u064A \u062A\u0639\u0644\u0651\u0645\u0643 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645",color:"#ff7fb0"}},Ey={lulu:{furC:16742943,light:16774374,dark:4860444,iris:4860951,body:[1,1.08,.92],head:[1.1,.97,1],headR:.62,lashes:!0},bibo:{furC:3842303,light:13955327,dark:1920911,iris:1776442,body:[1.02,1,1],head:[1,1,1],headR:.6},bondoq:{furC:11036986,light:15913638,dark:4860952,iris:2824719,body:[1.18,1.05,1.05],head:[1.08,.98,1],headR:.64},toota:{furC:16754891,light:16774136,dark:11552634,iris:3807280,body:[1,1.06,.95],head:[1.04,.98,1],headR:.6,lashes:!0}},Sy=new w;function wa(i,t,e,n){let s=t[0],r=t[1],o=t[2],a=e/(i*s),c=n/(i*r),l=Math.sqrt(Math.max(0,1-a*a-c*c)),h=new w(e,n,l*i*o),u=new w(a/s,c/r,l/o).normalize();return{p:h,n:u}}function Ta(i,t){i.quaternion.setFromUnitVectors(new w(0,0,1),t)}function wy(i,t=1){let e=new mt,n=Tt(16777215,{roughness:.2,clearcoat:1}),s=Ut(.15,n,32,24);s.scale.set(1,1.18,.5),e.add(s);let r=new mt;e.add(r);let o=Ut(.122,ie(i.iris,{roughness:.15}),32,24);o.scale.set(1,1.15,.4),o.position.z=.035,r.add(o);let a=Q(new ke(.095,.012,8,32),Tt(new ot(i.iris).offsetHSL(0,.1,.18).getHex(),{roughness:.4}));a.scale.set(1,1.15,1),a.position.z=.078,r.add(a);let c=Ut(.07,ie(723728,{roughness:.1}),24,16);c.scale.set(1,1.15,.35),c.position.z=.062,r.add(c);let l=Tt(16777215,{emissive:16777215,emissiveIntensity:1}),h=Ut(.042,l,12,8);h.position.set(.045,.055,.095),h.scale.z=.4,r.add(h);let u=Ut(.02,l,10,6);u.position.set(-.045,-.05,.09),u.scale.z=.4,r.add(u),[s,o,a,c,h,u].forEach(f=>f.castShadow=!1),e.scale.setScalar(t);let d=Q(new ke(.1,.024,8,20,Math.PI),Tt(2759186));return d.position.z=.05,d.visible=!1,d.castShadow=!1,e.add(d),{g:e,look:r,arc:d,open:[s,r]}}var Mh=class{constructor(t){this.id=t;let e=this.sp=Ey[t];this.root=new mt,this.root.userData.character=this,this.talk=0,this._talkS=0,this.expr="happy",this.anim=null,this.animT=0,this.blinkT=2,this.lookTarget=null,this.equipped={},this.seed=Math.random()*10;let n=t==="bibo"?_e(e.furC,{sheenColor:new ot(12577023)}):_e(e.furC),s=_e(e.light),r=_e(e.dark);this.mats={F:n,L:s,D:r},this.legs=[];for(let p of[-1,1]){let x=new mt;if(x.position.set(p*.2,.3,0),this.root.add(x),t==="bibo"){let v=Q(new ne(.03,.03,.3,8),Tt(16752430));v.position.y=-.15,x.add(v);for(let _ of[-.5,0,.5]){let A=Q(new je(.035,.12,4,8),Tt(16752430));A.rotation.x=Math.PI/2,A.rotation.y=_,A.position.set(Math.sin(_)*.07,-.28,Math.cos(_)*.07),x.add(A)}}else{let v=Q(new je(.13,.14,6,16),n);v.position.y=-.12,x.add(v);let _=Ut(.15,t==="toota"?s:t==="lulu"?r:n,24,16);if(_.scale.set(1,.6,t==="toota"?1.7:1.3),_.position.set(0,-.24,.08),x.add(_),t==="bondoq"){let A=Ut(.08,s,16,12);A.scale.set(1,1,.3),A.position.set(0,-.24,.27),x.add(A)}}this.legs.push(x)}let o=this.torso=new mt;o.position.y=.3,this.root.add(o);let a=.5,c=Ut(a,n,48,32);c.scale.set(...e.body),c.position.y=.5,o.add(c);let l=Ut(a*.78,s,40,28);l.scale.set(e.body[0]*.85,e.body[1]*.95,.5),l.position.set(0,.47,a*e.body[2]*.62),o.add(l),this.body=c,this.arms=[];for(let p of[-1,1]){let x=new mt;if(x.position.set(p*a*e.body[0]*.86,.78,.02),o.add(x),t==="bibo"){let v=Ut(.3,n,32,20);v.scale.set(.35,.9,.7),v.position.set(p*.05,-.22,-.02),x.add(v);let _=Ut(.17,r,24,16);_.scale.set(.3,.8,.6),_.position.set(p*.07,-.42,-.05),x.add(_),x.rotation.z=p*.25}else{let v=Q(new je(.11,.3,6,16),n);v.position.y=-.2,x.add(v);let _=Ut(.13,t==="lulu"?r:t==="toota"?s:n,20,16);_.position.y=-.4,x.add(_),x.rotation.z=p*.35}x.userData.s=p,this.arms.push(x)}let h=this.tail=new mt;if(h.position.set(0,.4,-a*e.body[2]*.85),o.add(h),t==="lulu"){let p=[];for(let C=0;C<=24;C++){let b=C/24;p.push(new nt(Math.max(.001,Math.sin(Math.pow(b,.7)*Math.PI)*.3*(1-b*.15)),b*1.25))}let x=new Xn(p,32),v=x.attributes.position,_=[],A=new ot(e.furC),T=new ot(e.light);for(let C=0;C<v.count;C++){let b=Br.smoothstep(v.getY(C),.9,1),M=A.clone().lerp(T,b);_.push(M.r,M.g,M.b)}x.setAttribute("color",new Bt(_,3));let R=Q(x,new en({vertexColors:!0,roughness:.8,sheen:.8,sheenRoughness:.5,sheenColor:new ot(16777215)}));R.rotation.x=-.9,R.position.set(0,-.15,-.05),h.add(R)}else if(t==="bibo")for(let p of[-.35,0,.35]){let x=Ut(.16,r,20,12);x.scale.set(.45,.2,1.2),x.position.set(Math.sin(p)*.15,.02,-.15),x.rotation.y=p,x.rotation.x=-.5,h.add(x)}else{let p=Ut(t==="toota"?.17:.12,t==="toota"?_e(16777215):n,24,16);h.add(p)}this.neck=new mt,this.neck.position.set(0,1*e.body[1],.3),o.add(this.neck);let u=e.headR,d=e.head,f=this.head=new mt;f.position.y=1+u*.72+(t==="bibo"?-.05:0),o.add(f);let m=Ut(u,n,56,40);if(m.scale.set(...d),f.add(m),this.headMesh=m,t==="lulu"){let p=Ut(.22,s,40,28);p.scale.set(1.15,.78,1.35),p.position.set(0,-.17,u*.8),f.add(p);for(let v of[-1,1]){let _=Ut(.22,s,32,20);_.scale.set(1.1,.75,.7),_.position.set(v*.3,-.22,u*.6),f.add(_);let A=Ut(.13,s,20,14);A.scale.set(1.3,.7,.7),A.position.set(v*.6,-.2,.12),A.rotation.z=v*.5,f.add(A)}let x=Ut(.07,ie(1970704,{roughness:.2}),24,16);x.scale.set(1.25,.85,.9),x.position.set(0,-.1,u*.8+.28),f.add(x),this.mouthAt={pos:new w(0,-.27,u*.8+.19),n:new w(0,-.35,1).normalize()}}else if(t==="bibo"){let p=Ut(u*.82,s,40,28);p.scale.set(1.08,.9,.55),p.position.set(0,-.08,u*.62),f.add(p);let x=ie(16754224,{roughness:.35}),v=Q(new Ue(.14,.3,24),x);v.rotation.x=Math.PI/2,v.scale.set(1.3,1,.7);let _=new mt;_.position.set(0,-.08,u*.95),v.position.z=.1,_.add(v),f.add(_);let A=Q(new Ue(.1,.2,24),Tt(15763996,{roughness:.4}));A.rotation.x=Math.PI/2,A.scale.set(1.3,1,.6),A.position.z=.07;let T=new mt;T.position.set(0,-.13,u*.93),T.add(A),f.add(T),this.beak={up:_,lo:T},this.tuft=new mt,f.add(this.tuft),[[-.08,.2],[0,0],[.09,-.25]].forEach(([b,M])=>{let I=Ut(.08,n,16,12);I.scale.set(.5,1.7,.5),I.position.set(b,u+.08,.05),I.rotation.z=M,this.tuft.add(I)});let R=this.headphones=new mt;f.add(R);let C=Q(new ke(u*1.04,.035,10,40,Math.PI),ie(16736126));C.position.y=.02,R.add(C);for(let b of[-1,1]){let M=Q(new ne(.15,.15,.1,24),ie(16736126));M.rotation.z=Math.PI/2,M.position.set(b*u*1.02,0,0),R.add(M);let I=Q(new ne(.11,.11,.05,24),Tt(16777215));I.rotation.z=Math.PI/2,I.position.set(b*(u*1.02+.06),0,0),R.add(I)}}else if(t==="bondoq"){let p=Ut(.25,s,40,28);p.scale.set(1.25,.9,.85),p.position.set(0,-.19,u*.8),f.add(p);let x=Ut(.085,ie(2758416,{roughness:.2}),24,16);x.scale.set(1.3,.85,.9),x.position.set(0,-.1,u*.8+.2),f.add(x),this.mouthAt={pos:new w(0,-.27,u*.8+.18),n:new w(0,-.2,1).normalize()};let v=this.glasses=new mt;f.add(v);let _=ie(3811946,{roughness:.25});for(let T of[-1,1]){let R=Q(new ke(.15,.025,10,32),_);R.position.set(T*.22,.1,u*.93),R.rotation.y=T*.25,v.add(R);let C=Q(new Ui(.14,24),Tt(13626111,{transparent:!0,opacity:.25,roughness:.05}));C.position.set(T*.22,.1,u*.93+.01),C.rotation.y=T*.25,v.add(C)}let A=Q(new ne(.018,.018,.14,8),_);A.rotation.z=Math.PI/2,A.position.set(0,.12,u*.98),v.add(A)}else if(t==="toota"){for(let v of[-1,1]){let _=Ut(.2,s,32,20);_.scale.set(1.1,.85,.8),_.position.set(v*.13,-.2,u*.78),f.add(_)}let p=Ut(.055,ie(16732047,{roughness:.2}),20,14);p.scale.set(1.3,.9,.8),p.position.set(0,-.1,u*.98+.02),f.add(p),this.mouthAt={pos:new w(0,-.24,u*.92+.03),n:new w(0,-.15,1).normalize()};let x=Tt(16777215,{roughness:.2,clearcoat:1});this.teeth=new mt;for(let v of[-1,1]){let _=Q(new fe(.055,.07,.03),x);_.position.set(v*.03,-.04,.015),this.teeth.add(_)}}let y=t==="bibo"?.14:.1,g=t==="bibo"?.22:.23;this.eyes=[];for(let p of[-1,1]){let{p:x,n:v}=wa(u,d,p*g,y),_=wy(e,t==="bibo"?1.12:1.05);if(_.g.position.copy(x).addScaledVector(v,-.03),Ta(_.g,v),f.add(_.g),e.lashes)for(let A=0;A<3;A++){let T=Q(new je(.012,.07,3,6),Tt(2759186));T.position.set(p*(.1+A*.025),.15-A*.035,.02),T.rotation.z=p*(-.9-A*.35),_.g.add(T)}this.eyes.push(_)}this.brows=[];for(let p of[-1,1]){let{p:x,n:v}=wa(u,d,p*.24,.31),_=Q(new je(.025,.1,4,8),Tt(t==="bibo"?1920911:e.dark));_.rotation.z=Math.PI/2,_.position.copy(x).addScaledVector(v,.01);let A=new mt;A.position.copy(_.position),_.position.set(0,0,0),Ta(A,v),A.add(_),f.add(A),A.userData.base=A.position.clone(),A.userData.s=p,this.brows.push(A)}for(let p of[-1,1]){let{p:x,n:v}=wa(u,d,p*.36,-.1),_=Ut(.085,Tt(16740241,{transparent:!0,opacity:.55,roughness:.8}),20,12);_.scale.set(1.2,.8,.25),_.position.copy(x),Ta(_,v),_.castShadow=!1,f.add(_)}if(this.mouthAt){let p=this.mouth=new mt;p.position.copy(this.mouthAt.pos),Ta(p,this.mouthAt.n),f.add(p);let x=Q(new ke(.065,.014,8,20,Math.PI),Tt(3806228));x.rotation.z=Math.PI,x.position.y=.02,x.castShadow=!1,p.add(x);let v=Ut(.075,Tt(6953506,{roughness:.6}),24,16);v.scale.set(1,.3,.35),v.castShadow=!1,p.add(v);let _=Ut(.045,Tt(16743050),16,12);_.scale.set(1.2,.5,.4),_.position.set(0,-.025,.015),v.add(_),this.smile=x,this.cav=v,this.teeth&&p.add(this.teeth)}this.ears=[];for(let p of[-1,1]){let x=new mt;if(f.add(x),t==="lulu"){x.position.set(p*.36,u*.78,-.02),x.rotation.z=-p*.38;let v=Q(new Ue(.24,.55,32),n);v.scale.z=.5,v.position.y=.22,x.add(v);let _=Q(new Ue(.15,.36,24),_e(16769999));_.scale.z=.3,_.position.set(0,.17,.07),x.add(_);let A=Q(new Ue(.098,.16,24),r);A.scale.z=.55,A.position.y=.43,x.add(A)}else if(t==="bondoq"){x.position.set(p*.44,u*.7,-.05);let v=Ut(.19,n,24,16);v.scale.z=.55,x.add(v);let _=Ut(.11,s,20,12);_.scale.z=.3,_.position.z=.07,x.add(_)}else if(t==="toota"){x.position.set(p*.2,u*.8,-.08),x.rotation.z=-p*.18;let v=Q(new je(.11,.38,8,20),n);v.scale.z=.55,v.position.y=.25,x.add(v);let _=Q(new je(.06,.32,6,16),_e(16744368));_.scale.z=.3,_.position.set(0,.25,.05),x.add(_);let A=new mt;A.position.y=.5,x.add(A);let T=Q(new je(.11,.22,8,20),n);T.scale.z=.55,T.position.y=.14,A.add(T);let R=Q(new je(.06,.18,6,16),_e(16744368));if(R.scale.z=.3,R.position.set(0,.14,.05),A.add(R),p===1&&(A.rotation.x=-.9,A.rotation.z=-.4),x.userData.up=A,p===-1){let C=ie(16767053),b=new mt;b.position.set(0,.05,.1),x.add(b);for(let I of[-1,1]){let O=Q(new Ue(.1,.17,16),C);O.rotation.z=I*Math.PI/2,O.position.x=I*.08,O.scale.z=.5,b.add(O)}let M=Ut(.045,C);b.add(M)}}x.userData.baseRot=x.rotation.clone(),this.ears.push(x)}this.headTop=new mt,this.headTop.position.set(0,u*d[1]*(t==="toota"?.92:.9),0),f.add(this.headTop),this.face=new mt;{let{p,n:x}=wa(u,d,0,.1);this.face.position.copy(p).addScaledVector(x,.1),this.face.position.y=.1}if(f.add(this.face),t==="lulu"){let p=new mt;p.position.set(0,1.03,0),o.add(p);let x=Q(new ke(.36,.085,14,40),_e(2275496,{sheenColor:new ot(12582902)}));x.rotation.x=Math.PI/2,x.scale.set(1.08,1,1),p.add(x);let v=Q(new Ue(.14,.3,3),_e(2275496));v.position.set(.14,-.14,.34),v.rotation.set(.3,0,Math.PI+.3),p.add(v),this.scarf=p}this.root.traverse(p=>{p.isMesh&&p.castShadow!==!1&&(p.castShadow=!0)})}setExpr(t){this.expr=t}play(t,e){this.anim=t,this.animT=0,this.animDur=e||{wave:2.2,cheer:1.8,jump:.9,nod:1.2,think:2.2,point:1.8,clap:1.6,spin:1.2,sad:1.6}[t]||1.5}lookAt(t){this.lookTarget=t}equip(t,e){let n=t==="head"?this.headTop:t==="face"?this.face:this.neck;if(this.equipped[t]&&(n.remove(this.equipped[t].obj),this.equipped[t]=null),this.tuft&&(this.tuft.visible=!(t==="head"?e:this.equipped.head)),this.glasses&&t==="face"&&(this.glasses.visible=!e),this.scarf&&t==="neck"&&(this.scarf.visible=!e),!e)return;let s=Gr(e);t==="head"&&(s.scale.setScalar(this.id==="toota"?.9:1),this.id==="bibo"&&(s.position.y=.05)),t==="face"&&(s.scale.setScalar(this.id==="bibo"?1.1:1),s.position.z=this.id==="lulu"||this.id==="bondoq"?.05:0),s.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n.add(s),this.equipped[t]={id:e,obj:s}}update(t,e){let n=this.seed;this._talkS+=(this.talk-this._talkS)*Math.min(1,t*18);let s=this._talkS,r=0,o=Math.sin(e*1.1+n)*.03,a=Math.sin(e*.7+n)*.04,c=0,l=Math.sin(e*2.2+n)*.018;this.torso.scale.set(1-l*.5,1+l,1-l*.5);let h=[.35+Math.sin(e*1.6+n)*.05,.35+Math.sin(e*1.6+n+1)*.05],u=[0,0],d=this.expr==="laugh",f=this.expr==="surprised"?.05:this.expr==="think"?.03:0,m=this.expr==="think"?.3:0;if(s>.05&&(o+=Math.sin(e*9)*.04*s,h[1]+=Math.sin(e*5)*.25*s),this.anim){this.animT+=t;let p=this.animT/this.animDur,x=this.animT;switch(this.anim){case"wave":h[0]=2.5+Math.sin(x*12)*.35,a+=.12;break;case"cheer":{r=Math.abs(Math.sin(x*Math.PI*2.2))*.45,h=[2.7+Math.sin(x*14)*.2,2.7+Math.sin(x*14+1)*.2],d=!0;break}case"jump":r=Math.sin(Math.min(p,1)*Math.PI)*.6,h=[1.8,1.8];break;case"nod":o+=Math.sin(x*12)*.18;break;case"think":a+=.25,h[0]=2.2,u[0]=-.9,m=.35,f=.03;break;case"point":h[0]=1.5,u[0]=-.8,c=-.2;break;case"clap":{let v=Math.abs(Math.sin(x*10));h=[1.3,1.3],u=[-1.1+v*.5,-1.1+v*.5],d=!0;break}case"spin":this.root.rotation.y=this._baseRotY+Math.sin(Math.min(p,1)*Math.PI/2)*Math.PI*2,r=Math.sin(Math.min(p,1)*Math.PI)*.3;break;case"sad":o+=.15,m=-.3;break}p>=1&&(this.anim==="spin"&&(this.root.rotation.y=this._baseRotY),this.anim=null)}else this._baseRotY=this.root.rotation.y;if(this.root.position.y+=(this.baseY??0)+r-this.root.position.y,this.head.rotation.set(o,c+Math.sin(e*.5+n)*.06,a),this.arms.forEach((p,x)=>{let v=p.userData.s;p.rotation.z+=(v*h[x]-p.rotation.z)*Math.min(1,t*10),p.rotation.x+=(u[x]-p.rotation.x)*Math.min(1,t*10)}),this.id==="bibo"){let p=this.anim==="cheer"||this.anim==="jump"?Math.sin(e*30)*.5:0;this.arms.forEach(x=>x.rotation.z+=x.userData.s*p*.5)}this.tail.rotation.y=Math.sin(e*(this.anim==="cheer"?9:2.2)+n)*(this.id==="lulu"?.35:.2);let y=Math.sin(e*.9+n*3)>.97?Math.sin(e*40)*.15:0;this.ears.forEach((p,x)=>{p.rotation.z=p.userData.baseRot.z+(x?y:-y*.5),p.userData.up&&x===0&&(p.userData.up.rotation.x=Math.sin(e*2+n)*.08)}),this.blinkT-=t;let g=1;if(this.blinkT<0){let p=-this.blinkT;g=p<.07?1-p/.07:p<.14?(p-.07)/.07:1,p>.14&&(this.blinkT=2+Math.random()*3)}if(this.eyes.forEach(p=>{p.open.forEach(x=>x.visible=!d),p.arc.visible=d,p.g.scale.y=(d?1:Math.max(.08,g))*(this.expr==="surprised"?1.12:1)*p.g.scale.x}),this.lookTarget){this.head.updateWorldMatrix(!0,!1);let p=this.head.worldToLocal(Sy.copy(this.lookTarget)),x=Br.clamp(p.x*.02,-.035,.035),v=Br.clamp(p.y*.02,-.03,.03);this.eyes.forEach(_=>{_.look.position.x+=(x-_.look.position.x)*.1,_.look.position.y+=(v-_.look.position.y)*.1})}if(this.brows.forEach(p=>{p.position.y=p.userData.base.y+f,p.rotation.z=p.userData.s*m*(p.userData.s>0?1:-1)*.6+(this.expr==="surprised",0)}),this.mouth){let p=Math.max(s,this.expr==="surprised"?.5:0,d?.35:0);this.cav.scale.y=.12+p*.9,this.cav.visible=p>.06,this.smile.visible=p<.3,this.teeth&&(this.teeth.visible=!0)}this.beak&&(this.beak.lo.rotation.x=.1+s*.55+(d?.25:0),this.beak.up.rotation.x=-s*.12)}};function Ra(i){return new Mh(i)}var Xr={en:{w_apple:["lulu","Apple."],w_banana:["lulu","Banana."],w_orange:["lulu","Orange."],w_strawberry:["lulu","Strawberry."],w_grapes:["lulu","/\u0261\u0279\u02C8Aps."],lulu_hello:["lulu","Hello! I'm Lulu!"],lulu_play:["lulu","Let's play!"],lulu_great:["lulu","Great job!"],lulu_well:["lulu","Well done!"],lulu_did:["lulu","You did it!"],lulu_amazing:["lulu","Amazing!"],lulu_wow:["lulu","Wow!"],lulu_this:["lulu","This is"],lulu_tap_apple:["lulu","Tap the apple!"],lulu_tap_banana:["lulu","Tap the banana!"],lulu_tap_orange:["lulu","Tap the orange!"],lulu_tap_strawberry:["lulu","Tap the strawberry!"],lulu_tap_grapes:["lulu","Tap the grapes!"],bibo_hi:["bibo","Hi! I'm Bibo! Listen!"],bibo_great:["bibo","Great listening!"],bibo_super:["bibo","Super duper!"],bibo_yes:["bibo","Yes! That's right!"],bibo_again:["bibo","Listen again."],bibo_say:["bibo","Now you say it!"],bibo_nice:["bibo","Nice try! Say it again!"],bibo_perfect:["bibo","Perfect! Great talking!"],bibo_find_apple:["bibo","Find the apple!"],bibo_find_banana:["bibo","Find the banana!"],bibo_find_orange:["bibo","Find the orange!"],bibo_find_strawberry:["bibo","Find the strawberry!"],bibo_find_grapes:["bibo","Find the grapes!"],toota_hi:["toota","Hi! I'm Toota! Let's count!"],toota_one:["toota","One!"],toota_two:["toota","/t\u02C8u!"],toota_three:["toota","Three!"],toota_yay:["toota","Yay! Good counting!"],toota_full:["toota","The basket is full!"],toota_c1_apple:["toota","Collect one apple!"],toota_c2_apple:["toota","Collect two apples!"],toota_c3_apple:["toota","Collect three apples!"],toota_c1_banana:["toota","Collect one banana!"],toota_c2_banana:["toota","Collect two bananas!"],toota_c3_banana:["toota","Collect three bananas!"],toota_c1_orange:["toota","Collect one orange!"],toota_c2_orange:["toota","Collect two oranges!"],toota_c3_orange:["toota","Collect three oranges!"],toota_c1_strawberry:["toota","Collect one strawberry!"],toota_c2_strawberry:["toota","Collect two strawberries!"],toota_c3_strawberry:["toota","Collect three strawberries!"],toota_c1_grapes:["toota","Collect one bunch of grapes!"],toota_c2_grapes:["toota","Collect two bunches of grapes!"],toota_c3_grapes:["toota","Collect three bunches of grapes!"],bondoq_hi:["bondoq","Hello! I'm Bondoq! Let's match!"],bondoq_match:["bondoq","Perfect match!"],bondoq_hmm:["bondoq","Hmm, let's think again."],bondoq_great:["bondoq","Great thinking!"],bondoq_solved:["bondoq","Puzzle solved!"]},ar:{intro1:["lulu","\u0645\u0631\u062D\u0628\u0627! \u0623\u0646\u0627 \u0644\u0648\u0644\u0648. \u0647\u0630\u064A \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062A."],intro2:["lulu","\u064A\u0627 \u062E\u0633\u0627\u0631\u0629! \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0627\u062E\u062A\u0641\u062A \u0645\u0646 \u0627\u0644\u062C\u0632\u064A\u0631\u0629."],intro3_m:["lulu","\u062A\u0633\u0627\u0639\u062F\u0646\u064A \u0646\u0631\u062C\u0651\u0639\u0647\u0627\u061F \u064A\u0644\u0627 \u0646\u0628\u062F\u0623 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629!"],intro3_f:["lulu","\u062A\u0633\u0627\u0639\u062F\u064A\u0646\u064A \u0646\u0631\u062C\u0651\u0639\u0647\u0627\u061F \u064A\u0644\u0627 \u0646\u0628\u062F\u0623 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629!"],who:["lulu","\u0645\u064A\u0646 \u0628\u064A\u0644\u0639\u0628 \u0645\u0639\u064A \u0627\u0644\u064A\u0648\u0645\u061F"],map_m:["lulu","\u0627\u062E\u062A\u0631 \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u060C \u0648\u064A\u0644\u0627 \u0646\u0628\u062F\u0623!"],map_f:["lulu","\u0627\u062E\u062A\u0627\u0631\u064A \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u060C \u0648\u064A\u0644\u0627 \u0646\u0628\u062F\u0623!"],locked:["lulu","\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0644\u0645 \u064A\u0641\u062A\u062D \u0628\u0639\u062F\u064A\u0646. \u062E\u0644\u0651\u0646\u0627 \u0646\u0643\u0645\u0651\u0644 \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0623\u0648\u0644."],w1:["lulu","\u0641\u064A \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u060C \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0636\u0627\u0639\u062A! \u062E\u0644\u0651\u0646\u0627 \u0646\u0631\u062C\u0651\u0639\u0647\u0627."],s1_m:["lulu","\u062A\u0639\u0627\u0644 \u0646\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u0643\u0647. \u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0643\u0631\u0651\u0631\u0647\u0627."],s1_f:["lulu","\u062A\u0639\u0627\u0644\u064A \u0646\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u0643\u0647. \u0627\u0633\u0645\u0639\u064A \u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0643\u0631\u0651\u0631\u064A\u0647\u0627."],s1_quiz:["lulu","\u062D\u0644\u0648! \u0627\u0644\u062D\u064A\u0646 \u0646\u0644\u0639\u0628 \u0644\u0639\u0628\u0629 \u0635\u063A\u064A\u0631\u0629."],s2_m:["bibo","\u0623\u0646\u0627 \u0628\u064A\u0628\u0648! \u0627\u0633\u0645\u0639 \u0627\u0644\u0643\u0644\u0645\u0629\u060C \u0648\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0641\u0627\u0643\u0647\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629."],s2_f:["bibo","\u0623\u0646\u0627 \u0628\u064A\u0628\u0648! \u0627\u0633\u0645\u0639\u064A \u0627\u0644\u0643\u0644\u0645\u0629\u060C \u0648\u0627\u0636\u063A\u0637\u064A \u0639\u0644\u0649 \u0627\u0644\u0641\u0627\u0643\u0647\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629."],s3_m:["toota","\u0623\u0646\u0627 \u062A\u0648\u062A\u0629! \u0627\u062C\u0645\u0639 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0641\u064A \u0627\u0644\u0633\u0644\u0629\u060C \u0648\u0639\u062F\u0651\u0647\u0627 \u0645\u0639\u064A."],s3_f:["toota","\u0623\u0646\u0627 \u062A\u0648\u062A\u0629! \u0627\u062C\u0645\u0639\u064A \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0641\u064A \u0627\u0644\u0633\u0644\u0629\u060C \u0648\u0639\u062F\u0651\u064A\u0647\u0627 \u0645\u0639\u064A."],s4_m:["bondoq","\u0623\u0646\u0627 \u0628\u0646\u062F\u0642! \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0643\u0644\u0645\u0629\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0639\u0644\u0649 \u0635\u0648\u0631\u062A\u0647\u0627."],s4_f:["bondoq","\u0623\u0646\u0627 \u0628\u0646\u062F\u0642! \u0627\u0636\u063A\u0637\u064A \u0639\u0644\u0649 \u0627\u0644\u0643\u0644\u0645\u0629\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0639\u0644\u0649 \u0635\u0648\u0631\u062A\u0647\u0627."],s5_m:["bibo","\u062F\u0648\u0631\u0643 \u0627\u0644\u062D\u064A\u0646! \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u0627\u064A\u0643\u060C \u0648\u0627\u0646\u0637\u0642 \u0627\u0644\u0643\u0644\u0645\u0629."],s5_f:["bibo","\u062F\u0648\u0631\u0643 \u0627\u0644\u062D\u064A\u0646! \u0627\u0636\u063A\u0637\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0627\u064A\u0643\u060C \u0648\u0627\u0646\u0637\u0642\u064A \u0627\u0644\u0643\u0644\u0645\u0629."],s5_nomic:["bibo","\u0627\u0646\u0637\u0642 \u0627\u0644\u0643\u0644\u0645\u0629 \u0628\u0635\u0648\u062A \u0639\u0627\u0644\u064A\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0627\u0636\u063A\u0637 \u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u062E\u0636\u0631."],s5_nomic_f:["bibo","\u0627\u0646\u0637\u0642\u064A \u0627\u0644\u0643\u0644\u0645\u0629 \u0628\u0635\u0648\u062A \u0639\u0627\u0644\u064A\u060C \u0648\u0628\u0639\u062F\u064A\u0646 \u0627\u0636\u063A\u0637\u064A \u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u062E\u0636\u0631."],m_apple:["lulu","\u064A\u0639\u0646\u064A \u062A\u0641\u0627\u062D\u0629."],m_banana:["lulu","\u064A\u0639\u0646\u064A \u0645\u0648\u0632\u0629."],m_orange:["lulu","\u064A\u0639\u0646\u064A \u0628\u0631\u062A\u0642\u0627\u0644\u0629."],m_strawberry:["lulu","\u064A\u0639\u0646\u064A \u0641\u0631\u0627\u0648\u0644\u0629."],m_grapes:["lulu","\u064A\u0639\u0646\u064A \u0639\u0646\u0628."],oops_lulu:["lulu","\u0645\u0627 \u0639\u0644\u064A\u0647! \u0646\u062C\u0631\u0651\u0628 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629."],oops_bibo:["bibo","\u0642\u0631\u064A\u0628! \u0646\u0633\u0645\u0639\u0647\u0627 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629."],oops_toota:["toota","\u0645\u0627 \u0639\u0644\u064A\u0647! \u0646\u062C\u0631\u0651\u0628 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629."],oops_bondoq:["bondoq","\u0645\u0627 \u0639\u0644\u064A\u0647! \u0646\u0641\u0643\u0651\u0631 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629."],help:["lulu","\u0634\u0648\u0641! \u0647\u0630\u064A \u0647\u064A."],stage_done:["lulu","\u0631\u0627\u0626\u0639! \u062E\u0644\u0651\u0635\u0646\u0627 \u0627\u0644\u0645\u0631\u062D\u0644\u0629."],box:["lulu","\u0635\u0646\u062F\u0648\u0642 \u0645\u0641\u0627\u062C\u0622\u062A! \u0648\u0634 \u0641\u064A\u0647 \u064A\u0627 \u062A\u0631\u0649\u061F"],box_open:["lulu","\u0648\u0627\u0648! \u0647\u062F\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u0643."],world_done:["lulu","\u064A\u0627 \u0633\u0644\u0627\u0645! \u0631\u062C\u0651\u0639\u0646\u0627 \u0643\u0644 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0644\u0644\u062C\u0632\u064A\u0631\u0629. \u0647\u0630\u064A \u0634\u0647\u0627\u062F\u062A\u0643!"],wardrobe:["lulu","\u0648\u0634 \u0631\u0627\u064A\u0643 \u0646\u0644\u0628\u0633 \u0634\u064A \u062D\u0644\u0648\u061F"],bag:["lulu","\u0647\u0630\u064A \u062D\u0642\u064A\u0628\u0629 \u0643\u0644\u0645\u0627\u062A\u0643. \u0643\u0644 \u0643\u0644\u0645\u0629 \u062A\u0639\u0644\u0651\u0645\u062A\u0647\u0627 \u0645\u0648\u062C\u0648\u062F\u0629 \u0647\u0646\u0627."],bye:["lulu","\u0646\u0634\u0648\u0641\u0643 \u0628\u0643\u0631\u0629 \u0641\u064A \u0645\u063A\u0627\u0645\u0631\u0629 \u062C\u062F\u064A\u062F\u0629!"]}};var rt={ctx:null,buffers:{},music:null,musicVol:.5,sfxVol:.8,speaking:null,analyser:null,current:null};function Eh(i){let t=Xr.en[i];if(t)return{lang:"en",who:t[0],text:t[1].replace(/^\//,"").replace("\u0261\u0279\u02C8Aps","Grapes").replace("t\u02C8u","Two")};let e=Xr.ar[i];return e?{lang:"ar",who:e[0],text:e[1]}:null}function Ay(){return[...Object.keys(Xr.en),...Object.keys(Xr.ar).map(i=>"ar_"+i)]}function Ca(){if(rt.ctx){rt.ctx.state==="suspended"&&rt.ctx.resume();return}let i=window.AudioContext||window.webkitAudioContext;rt.ctx=new i,rt.master=rt.ctx.createGain(),rt.master.connect(rt.ctx.destination),rt.voiceBus=rt.ctx.createGain(),rt.voiceBus.gain.value=1,rt.voiceBus.connect(rt.master),rt.analyser=rt.ctx.createAnalyser(),rt.analyser.fftSize=512,rt.voiceBus.connect(rt.analyser),rt.sfxBus=rt.ctx.createGain(),rt.sfxBus.gain.value=rt.sfxVol,rt.sfxBus.connect(rt.master),rt.musicBus=rt.ctx.createGain(),rt.musicBus.gain.value=rt.musicVol*.16,rt.musicBus.connect(rt.master),rt.data=new Uint8Array(rt.analyser.fftSize),Ry()}var qr=null;function Ry(){if(qr)return qr;let i=Ay();return qr=Promise.all(i.map(t=>fetch("audio/"+t+".mp3").then(e=>e.arrayBuffer()).then(e=>rt.ctx.decodeAudioData(e)).then(e=>{rt.buffers[t]=e}).catch(()=>{}))),qr}function Cy(){return qr||Promise.resolve()}function rf(){if(!rt.analyser||!rt.current)return 0;rt.analyser.getByteTimeDomainData(rt.data);let i=0;for(let t=0;t<rt.data.length;t++){let e=(rt.data[t]-128)/128;i+=e*e}return Math.min(1,Math.sqrt(i/rt.data.length)*5.5)}function Sh(){if(rt.current){try{rt.current.onended=null,rt.current.stop()}catch{}rt.current=null}}function of(i,t=1){return new Promise(e=>{if(!rt.ctx)return e();let n=()=>{let s=rt.buffers[i];if(!s)return e();Sh();let r=rt.ctx.createBufferSource();r.buffer=s,r.playbackRate.value=t,r.connect(rt.voiceBus),rt.current=r,nf(!0),r.onended=()=>{rt.current===r&&(rt.current=null),nf(!1),e()},r.start()};rt.buffers[i]?n():Cy().then(n)})}function nf(i){if(!rt.musicBus)return;let t=rt.ctx.currentTime;rt.musicBus.gain.cancelScheduledValues(t),rt.musicBus.gain.setTargetAtTime(rt.musicVol*(i?.06:.16),t,.15)}function af(i){rt.musicVol=i,rt.musicBus&&(rt.musicBus.gain.value=i*.16)}function cf(i){rt.sfxVol=i,rt.sfxBus&&(rt.sfxBus.gain.value=i)}function fn(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:o=.005}={}){let a=rt.ctx,c=a.createOscillator(),l=a.createGain();c.type=n,c.frequency.setValueAtTime(i,t),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(s,t+o),l.gain.exponentialRampToValueAtTime(8e-4,t+e),c.connect(l),l.connect(rt.sfxBus),c.start(t),c.stop(t+e+.05)}function bh(i,t,{vol:e=.2,f:n=2e3,q:s=1,sweep:r=1}={}){let o=rt.ctx,a=o.createBuffer(1,o.sampleRate*t,o.sampleRate),c=a.getChannelData(0);for(let d=0;d<c.length;d++)c[d]=Math.random()*2-1;let l=o.createBufferSource();l.buffer=a;let h=o.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(n,i),h.frequency.exponentialRampToValueAtTime(n*r,i+t),h.Q.value=s;let u=o.createGain();u.gain.setValueAtTime(e,i),u.gain.exponentialRampToValueAtTime(.001,i+t),l.connect(h),h.connect(u),u.connect(rt.sfxBus),l.start(i)}function pe(i){if(!rt.ctx)return;let t=rt.ctx.currentTime;switch(i){case"tap":fn(880,t,.08,{vol:.15,type:"triangle"});break;case"pop":fn(500,t,.12,{slide:2.2,vol:.3}),bh(t,.08,{vol:.12,f:3e3});break;case"right":[784,988,1319].forEach((e,n)=>fn(e,t+n*.07,.35,{type:"triangle",vol:.22}));break;case"soft":fn(330,t,.25,{slide:.8,vol:.18,type:"sine"}),fn(262,t+.12,.3,{vol:.14});break;case"star":[1047,1319,1568,2093].forEach((e,n)=>fn(e,t+n*.06,.5,{type:"sine",vol:.16}));break;case"whoosh":bh(t,.45,{vol:.25,f:600,sweep:6,q:.8});break;case"fanfare":[523,659,784,1047,784,1047].forEach((e,n)=>fn(e,t+n*.12,.5,{type:"square",vol:.06})),[523,659,784].forEach(e=>fn(e,t+.72,1.2,{type:"triangle",vol:.12}));break;case"box":fn(200,t,.5,{slide:4,vol:.2,type:"triangle"}),bh(t+.3,.4,{vol:.2,f:4e3}),[1319,1568,2093,2637].forEach((e,n)=>fn(e,t+.45+n*.05,.6,{vol:.12}));break;case"boing":fn(180,t,.35,{slide:2.4,vol:.25,type:"sine"});break;case"count":fn(660,t,.2,{type:"triangle",vol:.2}),fn(990,t+.05,.25,{vol:.12});break}}var sf=null;function lf(){if(!rt.ctx||sf)return;let i=96,t=60/i,e=[0,2,4,7,9],n=392,s=[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],r=[0,2,4,2,7,4,2,0,4,7,9,7,4,2,4,0],o=0,a=rt.ctx.currentTime+.1,c=h=>n*Math.pow(2,h/12),l=(h,u,d)=>{let f=rt.ctx,m=f.createOscillator(),y=f.createOscillator(),g=f.createGain();m.type="sine",y.type="sine",m.frequency.value=h,y.frequency.value=h*4.01;let p=f.createGain();p.gain.value=.12,g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(d,u+.008),g.gain.exponentialRampToValueAtTime(5e-4,u+.9),m.connect(g),y.connect(p),p.connect(g),g.connect(rt.musicBus),m.start(u),y.start(u),m.stop(u+1),y.stop(u+1)};sf=setInterval(()=>{for(;a<rt.ctx.currentTime+.3;){let h=Math.floor(o/8)%4,u=o%16;if(o%2===0){let d=r[(u+h*3)%16];u===7||u===15||l(c(d),a,.5)}o%8===0&&s[h].forEach(d=>l(c(d-12),a,.22)),o%4===2&&l(c(s[h][0]-24),a,.3),a+=t/2,o++}},100)}var Fi=[{id:"fruit",ar:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647",en:"Fruit Island",color:"#ff7a1f",open:!0,mission:"\u0627\u062C\u0645\u0639 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0627\u0644\u0636\u0627\u064A\u0639\u0629 \u0648\u0631\u062C\u0651\u0639\u0647\u0627 \u0644\u0644\u062C\u0632\u064A\u0631\u0629",words:[{id:"apple",en:"Apple",ar:"\u062A\u0641\u0627\u062D\u0629"},{id:"banana",en:"Banana",ar:"\u0645\u0648\u0632\u0629"},{id:"orange",en:"Orange",ar:"\u0628\u0631\u062A\u0642\u0627\u0644\u0629"},{id:"strawberry",en:"Strawberry",ar:"\u0641\u0631\u0627\u0648\u0644\u0629"},{id:"grapes",en:"Grapes",ar:"\u0639\u0646\u0628"}],stages:[{type:"meet",host:"lulu",ar:"\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0627\u0643\u0647",en:"Meet the fruits",reward:"sunglasses",restores:"apple"},{type:"listen",host:"bibo",ar:"\u0627\u0633\u0645\u0639 \u0648\u0627\u062E\u062A\u0631",en:"Listen & choose",reward:"flowers",restores:"banana"},{type:"collect",host:"toota",ar:"\u0627\u062C\u0645\u0639 \u0648\u0639\u064F\u062F",en:"Collect & count",reward:"partyhat",restores:"orange"},{type:"match",host:"bondoq",ar:"\u0637\u0627\u0628\u0642 \u0627\u0644\u0643\u0644\u0645\u0629",en:"Match the word",reward:"bowtie",restores:"strawberry"},{type:"speak",host:"bibo",ar:"\u0627\u0646\u0637\u0642 \u0627\u0644\u0643\u0644\u0645\u0629",en:"Say the word",reward:"explorer",restores:"grapes"}]},{id:"forest",ar:"\u0627\u0644\u063A\u0627\u0628\u0629 \u0627\u0644\u0633\u0639\u064A\u062F\u0629",en:"Happy Forest",color:"#2f9e5a",words:["Cat","Dog","Lion","Elephant","Bird"],mission:"\u0633\u0627\u0639\u062F \u0627\u0644\u062D\u064A\u0648\u0627\u0646\u0627\u062A \u062A\u0644\u0642\u0649 \u0628\u064A\u0648\u062A\u0647\u0627"},{id:"colors",ar:"\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0623\u0644\u0648\u0627\u0646",en:"Color City",color:"#ff5f8f",words:["Red","Blue","Yellow","Green","Pink"],mission:"\u0623\u0635\u0644\u062D \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0628\u0627\u0644\u0623\u0644\u0648\u0627\u0646"},{id:"sea",ar:"\u0623\u0639\u0645\u0627\u0642 \u0627\u0644\u0628\u062D\u0627\u0631",en:"Deep Sea",color:"#139fc4",words:["Fish","Water","Sea","Turtle","Shark"],mission:"\u0623\u0646\u0642\u0630 \u0643\u0627\u0626\u0646\u0627\u062A \u0627\u0644\u0628\u062D\u0631 \u0648\u0644\u0627\u0642\u0650 \u0627\u0644\u0643\u0646\u0632"},{id:"space",ar:"\u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0645\u062F\u0647\u0634",en:"Amazing Space",color:"#7b61ff",words:["Sun","Moon","Star","Rocket","Planet"],mission:"\u0627\u0628\u0646\u0650 \u0635\u0627\u0631\u0648\u062E \u0648\u0633\u0627\u0641\u0631 \u0644\u0644\u0641\u0636\u0627\u0621"},{id:"castle",ar:"\u0642\u0644\u0639\u0629 \u0627\u0644\u062C\u0645\u0644 \u0627\u0644\u0633\u062D\u0631\u064A\u0629",en:"Sentence Castle",color:"#b04fd6",words:["Hello","Goodbye","Thank you","How are you?"],mission:"\u062A\u0639\u0644\u0651\u0645 \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0628\u0633\u064A\u0637\u0629"}],wh=[{id:"first",ar:"\u0623\u0648\u0644 \u0646\u062C\u0645\u0629",desc:"\u062E\u0644\u0651\u0635\u062A \u0623\u0648\u0644 \u0645\u0631\u062D\u0644\u0629"},{id:"listener",ar:"\u0628\u0637\u0644 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639",desc:"3 \u0646\u062C\u0648\u0645 \u0641\u064A \xAB\u0627\u0633\u0645\u0639 \u0648\u0627\u062E\u062A\u0631\xBB"},{id:"counter",ar:"\u0646\u062C\u0645 \u0627\u0644\u0639\u062F\u0651",desc:"\u062E\u0644\u0651\u0635\u062A \xAB\u0627\u062C\u0645\u0639 \u0648\u0639\u064F\u062F\xBB"},{id:"matcher",ar:"\u0639\u0642\u0644 \u0630\u0643\u064A",desc:"\u062E\u0644\u0651\u0635\u062A \u0623\u0644\u063A\u0627\u0632 \u0628\u0646\u062F\u0642"},{id:"speaker",ar:"\u0627\u0644\u0645\u062A\u0643\u0644\u0651\u0645 \u0627\u0644\u0635\u063A\u064A\u0631",desc:"\u0646\u0637\u0642\u062A \u0643\u0644 \u0643\u0644\u0645\u0627\u062A \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"stars10",ar:"\u062C\u0627\u0645\u0639 \u0627\u0644\u0646\u062C\u0648\u0645",desc:"\u062C\u0645\u0639\u062A 10 \u0646\u062C\u0648\u0645"},{id:"fruit",ar:"\u0645\u0646\u0642\u0630 \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647",desc:"\u0631\u062C\u0651\u0639\u062A \u0643\u0644 \u0627\u0644\u0641\u0648\u0627\u0643\u0647"}],hf=["lulu","bibo","toota","bondoq"];var uf="lulu-adventure.v1",df=()=>({profiles:[],current:null,settings:{mic:!0,music:.5,sfx:.8,arabic:!0,limit:0},seenIntro:!1}),Mn=df();try{let i=localStorage.getItem(uf);i&&(Mn={...df(),...JSON.parse(i)})}catch{}var We=Mn;function nn(){try{localStorage.setItem(uf,JSON.stringify(Mn))}catch{}}function ff(i,t,e,n){let s={id:"k"+Date.now().toString(36),name:i,gender:t,avatar:e,age:n,stars:{},done:{},items:[],equipped:{lulu:{},bibo:{},toota:{},bondoq:{}},badges:[],certs:[],words:{},listen:{c:0,w:0},speak:{tries:0,ok:0,rec:0},time:{},sessions:0,created:Date.now()};return Mn.profiles.push(s),Mn.current=s.id,nn(),s}function ze(){return Mn.profiles.find(i=>i.id===Mn.current)||null}function Pa(){let i=new Date;return i.getFullYear()+"-"+String(i.getMonth()+1).padStart(2,"0")+"-"+String(i.getDate()).padStart(2,"0")}function bn(i,t){var e;return(e=i.words)[t]||(e[t]={heard:0,c:0,w:0,said:0,saidOk:0,last:0})}function Yr(i){return Object.values(i.stars).reduce((t,e)=>t+e,0)}function Zr(i){return!i||!i.heard&&!i.c?"new":i.c>=2&&i.c>=i.w*2?"learned":i.w>=2||i.heard&&i.c<2?"review":"learning"}function pf(i,t){let e=Pa();i.time[e]=(i.time[e]||0)+t}function mf(i){Object.assign(i,{stars:{},done:{},items:[],equipped:{lulu:{},bibo:{},toota:{},bondoq:{}},badges:[],certs:[],words:{},listen:{c:0,w:0},speak:{tries:0,ok:0,rec:0},time:{}}),nn()}function gf(i){Mn.profiles=Mn.profiles.filter(t=>t.id!==i),Mn.current===i&&(Mn.current=Mn.profiles[0]?.id||null),nn()}var Je=(i,t="")=>`<svg viewBox="0 0 24 24" aria-hidden="true" ${t}>${i}</svg>`,Qt={star:Je('<path fill="currentColor" stroke="rgba(0,0,0,.15)" stroke-width="1" stroke-linejoin="round" d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4L2.8 9.3l6.4-.8z"/>','class="i-star"'),home:Je('<path fill="currentColor" d="M12 3l9 8h-2.6v9h-4.6v-6H10.2v6H5.6v-9H3z"/>'),speaker:Je('<path fill="currentColor" d="M4 9h4l5-4v14l-5-4H4z"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M16 8.5a5 5 0 010 7M18.6 6a8.5 8.5 0 010 12"/>'),play:Je('<path fill="currentColor" d="M8 4.5v15l12-7.5z"/>'),lock:Je('<path fill="currentColor" d="M7 10V7.5a5 5 0 0110 0V10h1.2c.7 0 1.3.6 1.3 1.3v8.4c0 .7-.6 1.3-1.3 1.3H5.8c-.7 0-1.3-.6-1.3-1.3v-8.4c0-.7.6-1.3 1.3-1.3zm2.4 0h5.2V7.5a2.6 2.6 0 00-5.2 0z"/>'),plus:Je('<path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M12 5v14M5 12h14"/>'),map:Je('<path fill="currentColor" d="M3 6l6-2.5 6 2.5 6-2.5v14.5L15 20.5 9 18l-6 2.5z" opacity=".35"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M3 6l6-2.5 6 2.5 6-2.5v14.5L15 20.5 9 18l-6 2.5zM9 3.5V18M15 6v14.5"/>'),bag:Je('<path fill="currentColor" d="M5 8h14l-1.2 11.2c-.1 1-.9 1.8-2 1.8H8.2c-1 0-1.9-.8-2-1.8z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M8.5 8V6.5a3.5 3.5 0 017 0V8"/>'),shirt:Je('<path fill="currentColor" d="M8.5 3L3 6.5l2.2 4 2-1V21h9.6V9.5l2 1 2.2-4L15.5 3c-.6 1.6-2 2.6-3.5 2.6S9.1 4.6 8.5 3z"/>'),trophy:Je('<path fill="currentColor" d="M7 3h10v2h3.5v2.5A4.5 4.5 0 0116.7 12 5 5 0 0113 15v3h3.5v3h-9v-3H11v-3a5 5 0 01-3.7-3A4.5 4.5 0 013.5 7.5V5H7zm0 4H5.5v.5A2.5 2.5 0 007 9.8zm10 0v2.8a2.5 2.5 0 001.5-2.3V7z"/>'),mic:Je('<rect x="8.5" y="2.5" width="7" height="12" rx="3.5" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21M8.5 21h7"/>'),check:Je('<path fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.5l5 5 10-11"/>'),hand:Je('<path fill="#fff" stroke="#3b2a4a" stroke-width="1.4" stroke-linejoin="round" d="M9 11V4.5a1.5 1.5 0 013 0V10l.2-1.3a1.5 1.5 0 013 .3V11a1.5 1.5 0 013 .2v1a1.5 1.5 0 013 .3V15c0 3.6-2.6 6.5-6.4 6.5h-1.2c-2.2 0-3.6-.9-4.8-2.6L5.2 14.5a1.6 1.6 0 012.6-1.8z"/>'),flag:Je('<path fill="currentColor" d="M5 2.5h2V21H5zM7 4h11l-2.5 4L18 12H7z"/>'),medal:Je('<path fill="#ff5f8f" d="M6 2h4.5L13 7.5 10 9zM18 2h-4.5L11 7.5 14 9z"/><circle cx="12" cy="15" r="6.5" fill="#ffc93c" stroke="#e8a210" stroke-width="1.4"/><path fill="#fff6d0" d="M12 11.2l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/>'),gift:Je('<path fill="currentColor" d="M3.5 9h17v4h-17zM5 13h14v8H5z" opacity=".5"/><path fill="none" stroke="currentColor" stroke-width="2" d="M12 9v12M12 9c-1-3-5-4.5-5-2s5 2 5 2zm0 0c1-3 5-4.5 5-2s-5 2-5 2z"/>')};var is=(i,t=document)=>t.querySelector(i),Se=is("#screen"),Qr=is("#topbar"),La=is("#bubble");Fd(is("#c"));var Rt={};for(let i of["lulu","bibo","toota","bondoq"])Rt[i]=Ra(i);var Th=null,Ah=null,Da="",Rh=0,bf=new Error("abort"),ns=new Set;q.updaters.add((i,t)=>{q.scene&&q.scene.userData.tick&&q.scene.userData.tick(i,t);let e=rf();for(let n in Rt){let s=Rt[n];s.talk=rt.speakingChar===s?e:0,s.root.parent&&s.update(i,t)}ns.forEach(n=>n(i,t)),q.onFrame&&q.onFrame(i,t)});function On(){return Th||(Th=tf()),Th}function Py(){return Ah||(Ah=ef()),Ah}function Sn(i){q.scene=i;for(let t in Rt){let e=Rt[t];e.root.visible=!1,i.add(e.root),e.root.scale.setScalar(1),e.lookAt(null),e.anim=null,e.setExpr("happy")}}function sn(i,t,e=0,n=1){return i.root.visible=!0,i.root.position.copy(t),i.baseY=t.y,i.root.rotation.set(0,e,0),i._baseRotY=e,i.root.scale.setScalar(n),i}var di=i=>Math.atan2(q.camera.position.x-i.x,q.camera.position.z-i.z),Ee=()=>q.aspect<.9;function wn(i){Rh++,Da=i,Sh(),rt.speakingChar=null,Od(),ns.clear(),q.onFrame=null,q.onMiss=null,q.onResize=null,Ef(),Se.innerHTML="",Qr.innerHTML="",document.body.dataset.screen=i;let t=Rh;return()=>{if(t!==Rh)throw bf}}var cn=i=>(...t)=>i(...t).catch(e=>{e!==bf&&console.error(e)});function L(i,t={},...e){let n=document.createElement(i);for(let s in t)s==="class"?n.className=t[s]:s==="html"?n.innerHTML=t[s]:s.startsWith("on")?n.addEventListener(s.slice(2),t[s]):t[s]!==!1&&t[s]!=null&&n.setAttribute(s,t[s]);for(let s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n}function Xt(i,t,e,n){let s=L("button",{class:"btn "+i,type:"button","aria-label":n||null});return typeof t=="string"?s.innerHTML=t:s.append(t),s.addEventListener("click",r=>{Ca(),pe("tap"),e&&e(r)}),s}var Jr=i=>L("span",{class:"en",dir:"ltr"},i);var Re={cache:{}};function Ua(i,t,e=256){let n=i+":"+t;if(Re.cache[n])return Re.cache[n];if(!Re.r){let c=document.createElement("canvas");c.width=c.height=e,Re.r=new Fs({canvas:c,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Re.r.setSize(e,e,!1),Re.r.toneMapping=Fr,Re.r.outputColorSpace=Ze,Re.scene=new hi,Re.scene.environment=new Li(Re.r).fromScene(new Xs,.04).texture,Re.scene.environmentIntensity=.45,Re.scene.add(new ks(16777215,16769216,.9));let l=new zs(16777215,2.4);l.position.set(3,5,6),Re.scene.add(l),Re.cam=new Ve(30,1,.1,50)}let s,r,o;if(i==="char"){let c=Ra(t);c.update(0,1.3),c.eyes.forEach(l=>l.g.scale.y=l.g.scale.x),s=c.root,r=new w(0,2.05,4.1),o=new w(0,1.75,0)}else if(i==="charfull"){let c=Ra(t);c.update(0,1.3),c.eyes.forEach(l=>l.g.scale.y=l.g.scale.x),s=c.root,r=new w(0,1.4,7.2),o=new w(0,1.2,0)}else i==="fruit"?(s=Ni(t),s.rotation.y=-.4,r=new w(0,.5,3.2),o=new w(0,0,0)):i==="acc"&&(s=Gr(t),s.rotation.set(.35,-.5,0),r=new w(0,.5,2.6),o=new w(0,.15,0));Re.scene.add(s),Re.cam.position.copy(r),Re.cam.lookAt(o),Re.r.render(Re.scene,Re.cam);let a=Re.r.domElement.toDataURL("image/png");return Re.scene.remove(s),Re.cache[n]=a}var pn=(i,t,e="")=>L("img",{src:Ua(i,t),class:"thumb "+e,alt:"",draggable:"false"});function Iy(i){let t=Aa[i.who];La.innerHTML="",La.append(L("img",{src:Ua("char",i.who),alt:""}),L("div",{class:"b-body"},L("b",{style:`color:${t.color}`},t.ar),L("p",{dir:i.lang==="en"?"ltr":"rtl",class:i.lang},i.text))),La.classList.add("on")}function Ef(){La.classList.remove("on")}var Sf=i=>{let t=ze(),e=i+(t&&t.gender==="f"?"_f":"_m");return Eh("ar_"+e)?e:i};async function Ct(i,{bubble:t=!0,rate:e=1}={}){let n=Eh(i);if(!n)return;t&&Iy(n);let s=Rt[n.who];rt.speakingChar=s,await of(i,e),rt.speakingChar===s&&(rt.speakingChar=null)}var fi=(i,t)=>Ct("ar_"+Sf(i),t),qn=is("#fx"),Oi=qn.getContext("2d"),$s=[];function wf(i=140){qn.width=innerWidth*devicePixelRatio,qn.height=innerHeight*devicePixelRatio;let t=["#ff7a1f","#ffd84d","#22b8a8","#ff5f8f","#3aa0ff","#8f7bff"];for(let e=0;e<i;e++)$s.push({x:Math.random()*qn.width,y:-20-Math.random()*qn.height*.4,vx:(Math.random()-.5)*4,vy:2+Math.random()*5,r:Math.random()*6,vr:(Math.random()-.5)*.3,c:t[e%t.length],s:(6+Math.random()*8)*devicePixelRatio,life:1});$s.length===i&&requestAnimationFrame(Tf)}function Tf(){Oi.clearRect(0,0,qn.width,qn.height),$s.forEach(i=>{i.x+=i.vx,i.y+=i.vy,i.vy+=.05,i.r+=i.vr,Oi.save(),Oi.translate(i.x,i.y),Oi.rotate(i.r),Oi.fillStyle=i.c,Oi.fillRect(-i.s/2,-i.s/4,i.s,i.s/2),Oi.restore()}),$s=$s.filter(i=>i.y<qn.height+30),$s.length?requestAnimationFrame(Tf):Oi.clearRect(0,0,qn.width,qn.height)}function to(i,t=16767053,e=14){let n=new tn(.07,8,6);for(let s=0;s<e;s++){let r=new Wt(n,new xn({color:s%3?t:16777215,transparent:!0}));r.position.copy(i),q.scene.add(r);let o=new w(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(.8+Math.random()*.8),a={k:0};Me(a,{k:1},.7,Ae.out,()=>{r.position.copy(i).addScaledVector(o,a.k),r.material.opacity=1-a.k,r.scale.setScalar(1-a.k*.6)}).then(()=>q.scene.remove(r))}}function eo(i){let t=new na(new Sr({map:Ly(),transparent:!0,depthTest:!1}));t.position.copy(i),t.scale.setScalar(.1),q.scene.add(t);let e={k:0};Me(e,{k:1},1,Ae.out,()=>{t.scale.setScalar(.2+Math.sin(e.k*Math.PI)*.9),t.position.y=i.y+e.k*1.2,t.material.opacity=1-Math.max(0,e.k-.6)/.4,t.material.rotation=e.k*2}).then(()=>q.scene.remove(t))}var Ch;function Ly(){if(Ch)return Ch;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.translate(64,64),t.beginPath();for(let e=0;e<10;e++){let n=e%2?26:58,s=e*Math.PI/5-Math.PI/2;t.lineTo(Math.cos(s)*n,Math.sin(s)*n)}return t.closePath(),t.fillStyle="#ffcf2e",t.strokeStyle="#ff9f1c",t.lineWidth=8,t.lineJoin="round",t.fill(),t.stroke(),t.fillStyle="rgba(255,255,255,.6)",t.beginPath(),t.ellipse(-12,-14,10,6,-.6,0,7),t.fill(),Ch=new Os(i)}var Dy=new en({color:16777215,transparent:!0,opacity:.2,roughness:0,metalness:0,iridescence:1,iridescenceIOR:1.35,clearcoat:1,depthWrite:!1,envMapIntensity:1.5});function Fa(i,t=1){let e=new mt;e.userData.fruit=i;let n=Ni(i);n.scale.setScalar(.95),e.add(n);let s=new Wt(new tn(.78,40,28),Dy.clone());e.add(s);let r=new Wt(new ke(.82,.05,8,48),new xn({color:16773754,transparent:!0,opacity:0}));e.add(r),e.userData.ring=r,e.userData.bub=s,e.userData.fr=n,e.scale.setScalar(t);let o=Math.random()*10,a=(c,l)=>{n.rotation.y=Math.sin(l*.9+o)*.6,e.position.y=e.userData.baseY+Math.sin(l*1.6+o)*.08,r.rotation.z=l,r.lookAt(q.camera.position)};return e.userData.fl=a,ns.add(a),e}function Oa(i){ns.delete(i.userData.fl),i.parent&&i.parent.remove(i)}async function Ph(i){let t=i.rotation.z;for(let e=0;e<3;e++)await Me(i.rotation,{z:t+.25},.07),await Me(i.rotation,{z:t-.25},.07);i.rotation.z=t}async function jr(i,t=!0){let e=i.userData.ring;e&&await Me(e.material,{opacity:t?.95:0},.3)}async function Ih(i){pe("pop");let t=i.userData.bub;t&&(to(i.getWorldPosition(new w),12578815,10),await Me(t.scale,{x:1.35,y:1.35,z:1.35},.15),t.visible=!1)}var _f=new Hs;function Js(i,t,e){q.camera.updateMatrixWorld(),_f.setFromCamera(new nt(i,t),q.camera);let n=new w;return _f.ray.intersectPlane(e,n),n}function Ba(i){return new Promise(t=>{i.forEach(e=>zr(e,n=>{t(n)}))})}function pi({back:i,title:t,stars:e=!0,replay:n}={}){Qr.innerHTML="";let s=L("div",{class:"tb-side"}),r=L("div",{class:"tb-side"});i&&s.append(Xt("round",Qt.home,i,"\u0631\u062C\u0648\u0639")),n&&s.append(Xt("round teal",Qt.speaker,n,"\u0627\u0633\u0645\u0639 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629"));let o=ze();e&&o&&r.append(L("div",{class:"pill"},L("span",{html:Qt.star}),L("b",{},String(Yr(o))))),Qr.append(r,L("div",{class:"tb-title"},t||""),s)}function En(){let i=ze();for(let t in Rt)for(let e of["head","face","neck"])Rt[t].equip(e,i?.equipped?.[t]?.[e]||null)}var ka=cn(async function(){let i=wn("start"),t=On();Sn(t),Fn(t,mi()),En();let e=t.userData.stage;sn(Rt.lulu,e.clone().add(new w(0,0,.6)),0,1.25),sn(Rt.bibo,e.clone().add(new w(-2.6,0,-1.2)),.4,.9),sn(Rt.toota,e.clone().add(new w(2.5,0,-1)),-.4,.9),sn(Rt.bondoq,e.clone().add(new w(1.4,0,-2.6)),-.2,.9);let n=e.clone().add(new w(0,1.6,0)),s=0;q.onFrame=o=>{s+=o*.05;let a=Ee()?11:8.5;q.camera.position.set(Math.sin(Math.sin(s)*.5)*a,e.y+2.6,e.z+Math.cos(Math.sin(s)*.5)*a),q.camera.lookAt(n),q.camera.fov=Ee()?55:40,q.camera.updateProjectionMatrix()};for(let o in Rt)Rt[o].lookAt(q.camera.position);Rt.lulu.play("wave"),Se.append(L("div",{class:"start"},Af(),L("div",{class:"start-actions"},Xt("big orange pulse",`${Qt.play}<span>\u064A\u0644\u0627 \u0646\u0644\u0639\u0628!</span>`,cn(async()=>{Ca(),lf(),We.seenIntro?Bi():await Uy()})))),Xt("parent-btn",`${Qt.lock}<span>\u0644\u0644\u0648\u0627\u0644\u062F\u064A\u0646</span>`,()=>Nf()));let r=setInterval(()=>{if(Da!=="start")return clearInterval(r);Rt.lulu.play(Math.random()>.5?"wave":"jump")},4200)});function Af(i){return L("div",{class:"logo"+(i?" small":"")},L("div",{class:"logo-ar"},"\u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0644\u0648\u0644\u0648"),L("div",{class:"logo-en",dir:"ltr"},"Lulu's English Adventure"),i?null:L("div",{class:"logo-tag"},L("span",{dir:"ltr"},"Play, Discover & Speak English!"),L("span",{},"\u0627\u0644\u0639\u0628\u060C \u0627\u0643\u062A\u0634\u0641\u060C \u0648\u062A\u0643\u0644\u0651\u0645 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629!")))}function mi(){let i=ze();return Fi[0].stages.filter((e,n)=>i&&i.done["fruit-"+n]).map(e=>e.restores)}var Uy=cn(async function(){let i=wn("intro"),t=On();Sn(t),En(),Fn(t,["apple","banana","orange","strawberry","grapes"]);let e=t.userData.stage;sn(Rt.lulu,e.clone(),0,1.2),Nn(new w(0,e.y+2.4,e.z+(Ee()?10:7)),e.clone().add(new w(0,1.5,0))),q.camera.fov=Ee()?55:40,q.camera.updateProjectionMatrix(),Rt.lulu.lookAt(q.camera.position);let n=Xt("skip","\u062A\u062E\u0637\u0651\u064A",()=>{We.seenIntro=!0,nn(),Bi()});Se.append(n),Rt.lulu.play("wave"),await Ct("lulu_hello"),i(),await Ct("ar_intro1"),i(),await Hr(new w(0,13,e.z+16),new w(0,0,-1),2),i();let s=t.userData.groves,r=[];for(let a in s)s[a].forEach(c=>(c.userData.fruitSpots||[]).forEach(l=>r.push(l)));Rt.lulu.setExpr("surprised"),pe("whoosh");let o=Ct("ar_intro2");for(let a=0;a<r.length;a++){let c=r[a];a%4===0&&to(c.getWorldPosition(new w),16773754,6),c.visible=!1,a%6===0&&await ui(.05)}await o,i(),await Hr(new w(0,e.y+2.4,e.z+(Ee()?10:7)),e.clone().add(new w(0,1.5,0)),1.6),i(),Rt.lulu.setExpr("happy"),Rt.lulu.play("cheer"),await Ct("ar_"+"intro3_m".replace("_m",ze()?.gender==="f"?"_f":"_m")),i(),We.seenIntro=!0,nn(),Bi()}),Bi=cn(async function(){let i=wn("profiles"),t=On();Sn(t),Fn(t,mi());let e=t.userData.stage,n=["bibo","lulu","toota","bondoq"];Nn(new w(0,e.y+2.2,e.z+(Ee()?13:9)),e.clone().add(new w(0,Ee()?2.6:1.3,0))),q.camera.fov=Ee()?55:40,q.camera.updateProjectionMatrix(),n.forEach((o,a)=>{let c=e.clone().add(new w((a-1.5)*1.7,0,a%2?.3:0));sn(Rt[o],c,di(c)*.5),Rt[o].lookAt(q.camera.position)});let s=L("div",{class:"panel profiles"},L("h1",{},"\u0645\u064A\u0646 \u0628\u064A\u0644\u0639\u0628 \u0627\u0644\u064A\u0648\u0645\u061F")),r=L("div",{class:"kid-grid"});We.profiles.forEach(o=>{r.append(Xt("kid",L("div",{},pn("char",o.avatar),L("b",{},o.name),L("small",{html:`${Qt.star} ${Yr(o)}`})),()=>{We.current=o.id,nn(),En(),Rt[o.avatar].play("cheer"),pe("right"),setTimeout(()=>$n(),500)}))}),We.profiles.length<6&&r.append(Xt("kid add",`<div>${Qt.plus}<b>\u0637\u0641\u0644 \u062C\u062F\u064A\u062F</b></div>`,()=>xf())),s.append(r),Se.append(s),pi({back:ka,stars:!1}),We.profiles.length?await fi("who",{bubble:!1}):xf()});function xf(){let i={gender:"m",avatar:"lulu",age:5},t=L("input",{id:"kid-name",type:"text",maxlength:"14",placeholder:"\u0627\u0643\u062A\u0628 \u0627\u0633\u0645 \u0627\u0644\u0637\u0641\u0644",autocomplete:"off"}),e=L("div",{class:"seg"},...[["m","\u0648\u0644\u062F"],["f","\u0628\u0646\u062A"]].map(([a,c])=>{let l=Xt("seg-b"+(a==="m"?" on":""),c,()=>{i.gender=a,e.querySelectorAll(".seg-b").forEach(h=>h.classList.toggle("on",h===l))});return l})),n=L("div",{class:"seg"},...[4,5,6,7].map(a=>{let c=Xt("seg-b"+(a===5?" on":""),a===7?"7+":String(a),()=>{i.age=a,n.querySelectorAll(".seg-b").forEach(l=>l.classList.toggle("on",l===c))});return c})),s=L("div",{class:"avatars"},...hf.map(a=>{let c=Xt("av"+(a==="lulu"?" on":""),pn("char",a),()=>{i.avatar=a,s.querySelectorAll(".av").forEach(l=>l.classList.toggle("on",l===c)),Rt[a].play("jump")},Aa[a].ar);return c})),r=za(L("div",{class:"form"},L("h2",{},"\u0645\u0644\u0641 \u0637\u0641\u0644 \u062C\u062F\u064A\u062F"),L("p",{class:"hint"},"\u064A\u0639\u0628\u0651\u064A\u0647 \u0648\u0644\u064A \u0627\u0644\u0623\u0645\u0631. \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0628\u0642\u0649 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632 \u0641\u0642\u0637."),L("label",{for:"kid-name"},"\u0627\u0644\u0627\u0633\u0645"),t,L("label",{},"\u0648\u0644\u062F \u0623\u0648 \u0628\u0646\u062A\u061F (\u0639\u0634\u0627\u0646 \u062A\u062E\u0627\u0637\u0628\u0647 \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A \u0635\u062D)"),e,L("label",{},"\u0627\u0644\u0639\u0645\u0631"),n,L("label",{},"\u0627\u062E\u062A\u0631 \u0635\u062F\u064A\u0642\u0643"),s,L("div",{class:"row"},Xt("big orange","\u062D\u0641\u0638",()=>{let a=t.value.trim();if(!a){t.focus(),t.classList.add("err");return}ff(a,i.gender,i.avatar,i.age),o(),En(),$n()}),We.profiles.length?Xt("ghost","\u0625\u0644\u063A\u0627\u0621",()=>o()):null))),o=()=>r.remove()}function za(i,t=""){let e=L("div",{class:"modal "+t},L("div",{class:"modal-card"},i));return Se.append(e),e}var $n=cn(async function(){let i=wn("map"),t=ze();if(!t)return Bi();let e=Py();Sn(e);let n=e.userData.islands,s=()=>{let a=Zs.flatMap(h=>[[3.6,0],[-3.6,0],[0,3.6],[0,-3.6]].map(([u,d])=>new w(h.x+u,.5,h.z+d))),c=new w(.5,0,-.5),l=!Ee();q.camera.fov=45,q.camera.updateProjectionMatrix();for(let h=14;h<90;h+=1){let u=l?new w(c.x+h*.62,h,c.z):new w(c.x,h,c.z+h*.62);if(Nn(u,c),q.camera.updateMatrixWorld(),l&&q.camera.up.set(0,1,0),a.every(f=>{let m=f.clone().project(q.camera);return Math.abs(m.x)<.94&&m.y<.7&&m.y>-.72}))break}};s(),q.onResize=s;let r=n.fruit;sn(Rt.lulu,new w(r.position.x+.3,1.15,r.position.z+1.6),0,.55),Rt.lulu.root.rotation.y=di(Rt.lulu.root.position),Rt.lulu.lookAt(q.camera.position);let o=L("div",{class:"map-labels"});Fi.forEach((a,c)=>{let l=Zs[c],h=a.stages?a.stages.filter((m,y)=>t.done[a.id+"-"+y]).length:0,u=a.stages?a.stages.reduce((m,y,g)=>m+(t.stars[a.id+"-"+g]||0),0):0,d=Xt("map-label"+(a.open?"":" locked"),"",()=>yf(a,d),a.ar);d.style.setProperty("--c",a.color),d.innerHTML=`<b>${a.ar}</b><span dir="ltr">${a.en}</span>`+(a.open?`<i>${Qt.star} ${u}/15</i>`:`<i class="lock">${Qt.lock} \u0642\u0631\u064A\u0628\u0627\u064B</i>`),d.dataset.i=c,o.append(d);let f=n[l.id];zr(f,()=>{pe("tap"),yf(a,d)})}),Se.append(o),q.onFrame=()=>{o.querySelectorAll(".map-label").forEach(a=>{let c=Zs[+a.dataset.i],l=_a(new w(c.x,3.2,c.z));a.style.transform=`translate(${l.x}px, ${l.y}px) translate(-50%, -100%)`})},Se.append(Ha("map")),pi({back:Bi,title:"",stars:!0}),Qr.querySelector(".tb-title").append(L("div",{class:"kid-chip"},pn("char",t.avatar),L("span",{},t.name))),t.done["fruit-0"]||await fi("map",{bubble:!0})});async function yf(i,t){if(i.open)return Na(i);t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),pe("soft"),await Ct("ar_locked")}function Ha(i){let t=[["map",Qt.map,"\u0627\u0644\u062E\u0631\u064A\u0637\u0629",$n],["bag",Qt.bag,"\u0643\u0644\u0645\u0627\u062A\u064A",Uf],["wardrobe",Qt.shirt,"\u0627\u0644\u0645\u0644\u0627\u0628\u0633",Bh],["awards",Qt.trophy,"\u0625\u0646\u062C\u0627\u0632\u0627\u062A\u064A",kh]];return L("nav",{class:"nav"},...t.map(([e,n,s,r])=>Xt("nav-b"+(e===i?" on":""),`${n}<span>${s}</span>`,()=>r())))}var Na=cn(async function(i){let t=wn("world"),e=ze(),n=On();Sn(n),En(),Fn(n,mi());let s=n.userData.stage,r=!Ee();Nn(r?s.clone().add(new w(3.2,3.6,10)):s.clone().add(new w(0,5,14)),r?s.clone().add(new w(3.4,1.2,0)):s.clone().add(new w(0,-1.5,0))),q.camera.fov=r?42:55,q.camera.updateProjectionMatrix(),sn(Rt.lulu,s.clone(),di(s),1.3),Rt.lulu.lookAt(q.camera.position),Rt.lulu.play("wave");let o=L("div",{class:"panel world"},L("div",{class:"w-head"},L("h1",{},i.ar),Jr(i.en)),L("p",{class:"mission"},L("span",{html:Qt.flag}),"\u0627\u0644\u0645\u0647\u0645\u0629: "+i.mission)),a=L("div",{class:"stages"});i.stages.forEach((l,h)=>{let u=h===0||e.done[i.id+"-"+(h-1)],d=e.stars[i.id+"-"+h]||0,f=Xt("stage"+(u?"":" locked")+(e.done[i.id+"-"+h]?" done":""),"",()=>{if(!u){pe("soft"),f.classList.remove("shake"),f.offsetWidth,f.classList.add("shake");return}Fh(i,h)},l.ar);f.append(L("div",{class:"st-num"},String(h+1)),pn("char",l.host,"st-host"),L("div",{class:"st-txt"},L("b",{},l.ar),Jr(l.en)),L("div",{class:"st-stars",html:u?[0,1,2].map(m=>`<span class="${m<d?"on":""}">${Qt.star}</span>`).join(""):Qt.lock})),a.append(f)}),o.append(a);let c=L("div",{class:"word-chips"});i.words.forEach(l=>c.append(Xt("wchip",L("div",{},pn("fruit",l.id),Jr(l.en)),()=>{Ct("w_"+l.id)},l.en))),o.append(L("h3",{},"\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u062C\u0632\u064A\u0631\u0629"),c),Se.append(o),pi({back:$n,title:""}),e.done[i.id+"-0"]||(await ui(.4),t(),await Ct("ar_w1"))});function Rf(i){let t=!Ee();q.camera.fov=t?40:56,q.camera.updateProjectionMatrix(),Nn(new w(0,i.y+2.5,i.z+8.5),new w(0,i.y+1.55,i.z)),q.camera.updateMatrixWorld()}function Cf(i){let t=!Ee(),e=new on(new w(0,1,0),-i.y);return Js(t?-.68:-.55,t?-.72:-.78,e)}function no(i,t,{y0:e=0,rows:n}={}){let s=!Ee(),r=new on(new w(0,0,1),-(i.z+1.2)),o=[];if(s){let a=t<=3?-.15:-.3,c=.78;for(let l=0;l<t;l++)o.push(Js(t===1?.3:a+(c-a)*l/(t-1),.02+e+(t>3?l%2?-.12:.1:0),r))}else{let a=t<=2?t:2,c=Math.ceil(t/a);for(let l=0;l<t;l++){let h=l%a,u=Math.floor(l/a),f=(u===c-1?t-a*(c-1):a)===1?.5:0;o.push(Js(a===1?.15:-.25+(h+f)*.65+.1,.42-u*(c>2?.3:.38)+e,r))}}return o}function $r(){return Ee()?.72:.85}function io(i,t,e,n={}){pi({back:()=>Na(i),title:"",replay:n.replay});let s=L("div",{class:"dots"});for(let r=0;r<e;r++)s.append(L("i"));return Qr.querySelector(".tb-title").append(s),r=>s.querySelectorAll("i").forEach((o,a)=>o.classList.toggle("on",a<r))}function Lh(i,t,e){let n=ze(),s=i.words.map(a=>a.id),r=a=>{let c=bn(n,a);return 1+c.w*1.5+(c.c<2?1:0)-Math.min(c.c,4)*.15},o=[];for(;o.length<t;){let a=0,c=s.filter(h=>h!==e&&h!==o[o.length-1]);c.forEach(h=>a+=r(h));let l=Math.random()*a;for(let h of c)if(l-=r(h),l<=0){o.push(h);break}l>0&&o.push(c[0])}return o}var Zn=i=>{i=i.slice();for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i},Pf={lulu:["lulu_great","lulu_well","lulu_amazing","lulu_did"],bibo:["bibo_great","bibo_super","bibo_yes"],toota:["toota_yay"],bondoq:["bondoq_match","bondoq_great"]},Dh=i=>i[Math.floor(Math.random()*i.length)];function Uh(i,t){let e=is(".word-banner");e&&e.remove();let n=L("div",{class:"word-banner"},L("div",{class:"wb-en",dir:"ltr"},L("span",{class:"first"},i.en[0]),i.en.slice(1)),We.settings.arabic&&t!==!1?L("div",{class:"wb-ar"},i.ar):null);return Se.append(n),n}function Nh(){let i=is(".word-banner");i&&(i.classList.add("out"),setTimeout(()=>i.remove(),300))}function Ny(i){return i<=1?3:i<=4?2:1}var Fh=cn(async function(i,t){let e=wn("stage"),n=i.stages[t],s=ze();s.sessions++;let r=On();Sn(r),En(),Fn(r,mi());let o=r.userData.stage;Rf(o);let a=Rt[n.host],c=Cf(o);sn(a,c,di(c)*.7,Ee()?.85:1),a.lookAt(q.camera.position);let l={w:i,i:t,sg:n,st:o,host:a,chk:e,err:0,p:s,prompt:null};l.replay=()=>{l.prompt&&Ct(l.prompt)};let h={meet:Fy,listen:Oy,collect:By,match:ky,speak:Gy}[n.type];await h(l),e(),await Wy(l)});async function Fy(i){let{w:t,st:e,host:n,chk:s,p:r}=i,o=io(t,i.i,10,{replay:i.replay});n.play("wave"),await Ct("lulu_hello"),s(),await fi("s1"),s();let a=no(e,1)[0],c=0;for(let h of t.words){let u=Fa(h.id,1.25);u.position.copy(a),u.userData.baseY=a.y,u.scale.setScalar(.01),q.scene.add(u),pe("whoosh"),await Me(u.scale,{x:1.25,y:1.25,z:1.25},.6,Ae.back),s(),Uh(h),i.prompt="w_"+h.id,n.play("point"),await Ct("lulu_this"),s(),await Ct("w_"+h.id),s(),We.settings.arabic&&(await Ct("ar_m_"+h.id),s()),bn(r,h.id).heard++,await jr(u);let d=If(u);await Ba([u]),s(),d.remove(),await jr(u,!1),pe("right"),eo(u.position.clone().add(new w(0,.8,0))),Me(u.rotation,{y:u.rotation.y+Math.PI*2},.8,Ae.out),await Ct("w_"+h.id,{rate:.95}),s(),n.play("cheer"),c++,o(c),await Me(u.scale,{x:.01,y:.01,z:.01},.35,Ae.in),Oa(u),Nh()}await Ct("ar_s1_quiz"),s();let l=Lh(t,5);for(let h of l){let u=Zn(t.words.map(d=>d.id).filter(d=>d!==h))[0];await Lf(i,Zn([h,u]),h,"lulu_tap_"+h),c++,o(c)}}function If(i){let t=L("div",{class:"hand",html:Qt.hand});Se.append(t);let e=()=>{if(!t.isConnected)return;let n=_a(i.getWorldPosition(new w));t.style.transform=`translate(${n.x}px, ${n.y}px)`,requestAnimationFrame(e)};return e(),t}async function Lf(i,t,e,n,{showWord:s=!1}={}){let{st:r,host:o,chk:a,p:c}=i,l=no(r,t.length),h=t.map((d,f)=>{let m=Fa(d,$r());return m.position.copy(l[f]),m.userData.baseY=l[f].y,m.scale.setScalar(.01),q.scene.add(m),Me(m.scale,{x:$r(),y:$r(),z:$r()},.5,Ae.back),m});await ui(.35),a(),i.prompt=n,await Ct(n),a();let u=0;for(;;){let d=await Ba(h);if(a(),d.userData.fruit===e){bn(c,e).c++,(i.sg.type==="listen"||i.sg.type==="meet")&&c.listen.c++,pe("right"),h.forEach(g=>{g!==d&&Me(g.scale,{x:.01,y:.01,z:.01},.3,Ae.in)}),await Ih(d),a(),eo(d.position.clone().add(new w(0,.6,0))),o.play("cheer");let f=i.w.words.find(g=>g.id===e),m=Uh(f,!0);await Ct("w_"+e),a(),await Ct(Dh(Pf[o.id])),a();let y=o.root.position.clone().add(new w(0,1.4,0));return await Me(d.position,{x:y.x,y:y.y,z:y.z},.5,Ae.inOut),Nh(),h.forEach(Oa),nn(),u}if(u++,i.err++,bn(c,e).w++,(i.sg.type==="listen"||i.sg.type==="meet")&&c.listen.w++,pe("soft"),Ph(d),o.play("think"),await Ct("w_"+d.userData.fruit),a(),u===1&&(await Ct("ar_oops_"+o.id),a()),u>=2){let f=h.find(m=>m.userData.fruit===e);jr(f),o.play("point"),await Ct("ar_help"),a()}await Ct(n),a()}}async function Oy(i){let{w:t,host:e,chk:n}=i,s=io(t,i.i,8,{replay:i.replay});e.play("wave"),await Ct("bibo_hi"),n(),await fi("s2"),n();let r=Lh(t,8);for(let o=0;o<8;o++){let a=r[o],c=o<4?3:4,l=Zn([a,...Zn(t.words.map(h=>h.id).filter(h=>h!==a)).slice(0,c-1)]);await Lf(i,l,a,"bibo_find_"+a),s(o+1)}}async function By(i){let{w:t,st:e,host:n,chk:s,p:r}=i,o=io(t,i.i,4,{replay:i.replay});n.play("jump"),await Ct("toota_hi"),s(),await fi("s3"),s();let a=!Ee(),c=new on(new w(0,1,0),-e.y),l=Js(a?-.42:-.05,a?-.78:-.82,c),h=Wd(.8);h.position.copy(l),q.scene.add(h);let u=L("div",{class:"counter"});Se.append(u);let d=[1,2,2,3],f=Lh(t,4),m=["toota_one","toota_two","toota_three"];for(let y=0;y<d.length;y++){let g=d[y],p=f[y],x=Zn(t.words.map(M=>M.id).filter(M=>M!==p)),v=Zn([...Array(g+1).fill(p),...x.slice(0,a?4:3),x[0]]),_=a?4:3,A=Math.ceil(v.length/_),T=v.map((M,I)=>{let O=I%_,B=Math.floor(I/_),G=a?-.05+O*.27+B%2*.1:-.62+O*.6+B%2*.14,K=a?-.08-B*.22:-.1-B*.17,W=Js(G,K,c),tt=new mt;tt.userData.fruit=M;let V=Ni(M);V.scale.setScalar(a?.75:.7),V.position.y=.4,tt.add(V);let ct=new Wt(new tn(.55,8,6),new xn({visible:!1}));return ct.position.y=.4,tt.add(ct),tt.position.copy(W),tt.rotation.y=Math.random()*6,tt.scale.setScalar(.01),q.scene.add(tt),Me(tt.scale,{x:1,y:1,z:1},.4+I*.04,Ae.back),tt});await ui(.4),s(),i.prompt=`toota_c${g}_${p}`,u.innerHTML=`<img src="${Ua("fruit",p)}" alt=""><b>0 / ${g}</b>`,await Ct(i.prompt),s();let R=0,C=0,b=T.slice();for(;R<g;){let M=await Ba(b);if(s(),M.userData.fruit===p){b.splice(b.indexOf(M),1),M.userData.onTap=null,R++,bn(r,p).c+=R===g?1:0,pe("count");let I=h.position.clone().add(new w(0,.55,0)),O=M.position.clone(),B={k:0};Me(B,{k:1},.55,Ae.inOut,()=>{M.position.lerpVectors(O,I,B.k),M.position.y+=Math.sin(B.k*Math.PI)*1.6,M.scale.setScalar(1-B.k*.45)}).then(()=>{to(I,16767053,6)}),u.innerHTML=`<img src="${Ua("fruit",p)}" alt=""><b>${R} / ${g}</b>`,u.classList.remove("bump"),u.offsetWidth,u.classList.add("bump"),await Ct(m[R-1]),s()}else C++,i.err++,bn(r,p).w++,pe("soft"),Ph(M),n.play("think"),await Ct("w_"+M.userData.fruit),s(),C===2&&(b.filter(I=>I.userData.fruit===p).forEach(I=>Me(I.position,{y:I.position.y+.5},.3,Ae.out).then(()=>Me(I.position,{y:e.y},.3,Ae.bounce))),await Ct("ar_help"),s()),await Ct(i.prompt),s()}n.play("cheer"),pe("right"),eo(h.position.clone().add(new w(0,1.2,0))),await Ct("toota_yay"),s(),T.forEach(M=>q.scene.remove(M)),o(y+1)}u.remove(),q.scene.remove(h)}async function ky(i){let{w:t,st:e,host:n,chk:s,p:r}=i,o=io(t,i.i,2,{replay:i.replay});n.play("wave"),await Ct("bondoq_hi"),s(),await fi("s4"),s();let a=[3,5];for(let c=0;c<a.length;c++){let l=Zn(t.words.map(p=>p.id)).slice(0,a[c]),h=no(e,l.length,{y0:Ee()?.05:.12}),u=l.map((p,x)=>{let v=Fa(p,$r()*.92);return v.position.copy(h[x]),v.userData.baseY=h[x].y,q.scene.add(v),v}),d=L("div",{class:"cards"}),f=null,m=null,y=0,g=new Promise(p=>{let x=async()=>{if(!f||!m)return;let v=f.dataset.id,_=m,A=f;if(f=null,m=null,d.querySelectorAll(".card").forEach(T=>T.classList.remove("sel")),u.forEach(T=>jr(T,!1)),_.userData.fruit===v){y++,bn(r,v).c++,pe("right"),A.classList.add("matched"),A.disabled=!0;let T=_a(_.position),R=A.getBoundingClientRect();A.style.transform=`translate(${T.x-R.left-R.width/2}px, ${T.y-R.top-R.height/2-60}px) scale(.8)`,_.userData.onTap=null,Ih(_),eo(_.position.clone().add(new w(0,.7,0))),n.play("clap"),await Ct("w_"+v),y===l.length?p():Ct(Dh(Pf.bondoq))}else i.err++,bn(r,v).w++,pe("soft"),Ph(_),A.classList.add("nope"),setTimeout(()=>A.classList.remove("nope"),500),n.play("think"),await Ct("bondoq_hmm")};Zn(l).forEach(v=>{let _=t.words.find(T=>T.id===v),A=Xt("card",`<span dir="ltr"><u>${_.en[0]}</u>${_.en.slice(1)}</span>`,()=>{d.querySelectorAll(".card").forEach(T=>T.classList.toggle("sel",T===A)),f=A,Ct("w_"+v,{bubble:!1}),x()},_.en);A.dataset.id=v,d.append(A)}),u.forEach(v=>zr(v,()=>{v.userData.onTap&&(m=v,u.forEach(_=>jr(_,_===v)),pe("tap"),f||Ct("w_"+v.userData.fruit,{bubble:!1}),x())}))});Se.append(d),i.prompt="ar_"+Sf("s4"),await g,s(),await Ct("bondoq_solved"),s(),n.play("cheer"),d.remove(),u.forEach(Oa),o(c+1)}}var Yn=null;(async()=>{try{Yn=await window.claude?.use?.("dictation")}catch{Yn=null}})();var zy=(i,t)=>{let e=Array.from({length:i.length+1},(n,s)=>[s,...Array(t.length).fill(0)]);for(let n=1;n<=t.length;n++)e[0][n]=n;for(let n=1;n<=i.length;n++)for(let s=1;s<=t.length;s++)e[n][s]=Math.min(e[n-1][s]+1,e[n][s-1]+1,e[n-1][s-1]+(i[n-1]===t[s-1]?0:1));return e[i.length][t.length]};function Hy(i,t){let e=t.toLowerCase(),n=i.toLowerCase().replace(/[^a-z ]/g," ").split(/\s+/).filter(Boolean),s={grapes:["grape","great","grapes"],orange:["orange","oranges"],apple:["apple","apples"],banana:["banana","bananas"],strawberry:["strawberry","strawberries"]}[e]||[e];return n.some(r=>s.includes(r)||zy(r,e)<=Math.max(1,Math.floor(e.length/4)))}function Vy(){return new Promise(i=>{let t="",e=!1,n=()=>{e||(e=!0,i(t.trim()))};try{Yn.onFinal(({text:r})=>{t+=" "+r}),Yn.onPartial(({text:r})=>{t||(s=r)}),Yn.onState(({state:r})=>{r==="idle"&&setTimeout(n,200)});let s="";Yn.start().catch(()=>n()),setTimeout(()=>{try{Yn.stop()}catch{}setTimeout(()=>{!t&&s&&(t=s),n()},700)},3800)}catch{n()}})}async function Gy(i){let{w:t,st:e,host:n,chk:s,p:r}=i,o=io(t,i.i,5,{replay:i.replay}),a=!!Yn&&We.settings.mic,c=Rt.lulu,l=Js(Ee()?.55:.72,Ee()?-.78:-.72,new on(new w(0,1,0),-e.y));sn(c,l,di(l)*.7,Ee()?.85:1),c.lookAt(q.camera.position),n.play("wave"),await Ct("bibo_hi"),s(),await(a?fi("s5"):Ct("ar_"+(ze()?.gender==="f"?"s5_nomic_f":"s5_nomic"))),s();let h=no(e,1,{y0:.12})[0],u=0;for(let d of Zn(t.words)){let f=Fa(d.id,1.15);f.position.copy(h),f.userData.baseY=h.y,f.scale.setScalar(.01),q.scene.add(f),pe("whoosh"),await Me(f.scale,{x:1.15,y:1.15,z:1.15},.5,Ae.back),s(),Uh(d),i.prompt="w_"+d.id,await Ct("w_"+d.id),s(),await Ct("bibo_say"),s();let m=!1;for(let y=0;y<3&&!m;y++){let g=Xt("mic pulse",a?`${Qt.mic}<span>\u0627\u0636\u063A\u0637 \u0648\u062A\u0643\u0644\u0651\u0645</span>`:`${Qt.check}<span>\u0642\u0644\u062A\u0647\u0627!</span>`,null,"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646");Se.append(g);let p="";if(await new Promise(x=>g.addEventListener("click",async()=>{r.speak.tries++,bn(r,d.id).said++,a&&(g.classList.add("listening"),g.innerHTML=`${Qt.mic}<span>\u0623\u0633\u0645\u0639\u0643\u2026</span>`,n.setExpr("surprised"),p=await Vy(),n.setExpr("happy")),x()},{once:!0})),s(),g.remove(),!a){m=!0;break}r.speak.rec++,p&&Hy(p,d.en)?(m=!0,r.speak.ok++,bn(r,d.id).saidOk++,bn(r,d.id).c++):y<2?(n.play("nod"),await Ct("bibo_nice"),s(),await Ct("w_"+d.id),s()):m=!0}pe("right"),Ih(f),eo(f.position.clone().add(new w(0,.5,0))),n.play("cheer"),c.play("clap"),await Ct(Dh(["bibo_perfect","bibo_super","bibo_great"])),s(),Oa(f),Nh(),nn(),u++,o(u)}}async function Wy(i){let{w:t,i:e,sg:n,p:s}=i,r=t.id+"-"+e,o=!s.done[r],a=Ny(i.err);s.stars[r]=Math.max(s.stars[r]||0,a),s.done[r]=!0;let c=f=>{if(!s.badges.includes(f))return s.badges.push(f),!0},l=[];c("first")&&l.push("first"),n.type==="listen"&&a===3&&c("listener")&&l.push("listener"),n.type==="collect"&&c("counter")&&l.push("counter"),n.type==="match"&&c("matcher")&&l.push("matcher"),n.type==="speak"&&c("speaker")&&l.push("speaker"),Yr(s)>=10&&c("stars10")&&l.push("stars10");let h=t.stages.every((f,m)=>s.done[t.id+"-"+m]),u=!1;h&&!s.certs.includes(t.id)&&(s.certs.push(t.id),u=!0,c("fruit"),l.push("fruit"),s.items.includes("crown")||s.items.push("crown"));let d=null;o&&n.reward&&!s.items.includes(n.reward)&&(s.items.push(n.reward),d=n.reward),nn(),o&&await Xy(n.restores),Df({w:t,i:e,stars:a,gift:d,newBadges:l,newCert:u})}var Xy=cn(async function(i){let e=q.scene.userData.groves[i];if(!e||!e.length)return;Ef(),Se.innerHTML="";let n=e[0].position.clone();await Hr(n.clone().add(new w(0,4,7)),n.clone().add(new w(0,1.8,0)),1.4),pe("star");for(let s of e)for(let r of s.userData.fruitSpots||[]){r.visible=!0;let o=r.scale.x;r.scale.setScalar(.001),Me(r.scale,{x:o,y:o,z:o},.5,Ae.back)}e.forEach(s=>to(s.position.clone().add(new w(0,2.8,0)),16773754,16)),await ui(.4),await Ct("w_"+i),await ui(.6)}),Df=cn(async function({w:i,i:t,stars:e,gift:n,newBadges:s,newCert:r}){let o=wn("reward"),a=ze(),c=On();Sn(c),En(),Fn(c,mi());let l=c.userData.stage;Rf(l);let h=Cf(l);sn(Rt.lulu,h,di(h)*.7,Ee()?.85:1),Rt.lulu.lookAt(q.camera.position),Rt.lulu.play("cheer"),wf(),pe("fanfare"),pi({back:()=>Na(i)});let u=L("div",{class:"big-stars"},...[0,1,2].map(m=>L("span",{class:m<e?"on":"",style:`animation-delay:${.3+m*.35}s`,html:Qt.star}))),d=L("div",{class:"reward"},L("h1",{},"\u0631\u0627\u0626\u0639! \u062E\u0644\u0651\u0635\u062A \u0627\u0644\u0645\u0631\u062D\u0644\u0629"),u);if(Se.append(d),await Ct("ar_stage_done"),o(),n){let m=Yd(),y=no(l,1,{y0:-.15})[0];m.position.copy(y),m.position.y-=.6,m.scale.setScalar(.01),q.scene.add(m),await Me(m.scale,{x:1.1,y:1.1,z:1.1},.6,Ae.back),o();let g=(_,A)=>{m.rotation.y=Math.sin(A*2)*.2,m.rotation.z=Math.sin(A*9)*.03};ns.add(g),d.querySelector("h1").textContent="\u0635\u0646\u062F\u0648\u0642 \u0645\u0641\u0627\u062C\u0622\u062A! \u0627\u0636\u063A\u0637 \u0639\u0644\u064A\u0647",await Ct("ar_box"),o();let p=If(m);await Ba([m]),o(),p.remove(),ns.delete(g),pe("box");let x=m.userData.lid;Me(x.position,{y:2.2,x:.8},.6,Ae.out),Me(x.rotation,{z:-1.2},.6,Ae.out);let v=Gr(n);v.position.copy(m.position).add(new w(0,.6,0)),v.scale.setScalar(.01),q.scene.add(v),to(v.position.clone(),16767053,24),await Me(v.position,{y:m.position.y+2.2},.7,Ae.back),Me(v.scale,{x:1.6,y:1.6,z:1.6},.6,Ae.back),ns.add((_,A)=>{v.rotation.y=A*1.5}),d.querySelector("h1").textContent="\u0647\u062F\u064A\u0629 \u062C\u062F\u064A\u062F\u0629: "+Ea[n].ar,await Ct("ar_box_open"),o()}s.length&&d.append(L("div",{class:"badges-new"},...s.map(m=>L("div",{class:"badge on"},L("span",{html:Qt.medal}),L("b",{},wh.find(y=>y.id===m).ar)))));let f=L("div",{class:"row"});r?f.append(Xt("big orange",`${Qt.trophy}<span>\u0634\u0647\u0627\u062F\u062A\u064A!</span>`,()=>Oh(i.id,!0))):t+1<i.stages.length&&f.append(Xt("big orange",`${Qt.play}<span>\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629</span>`,()=>Fh(i,t+1))),n&&f.append(Xt("big teal",`${Qt.shirt}<span>\u0627\u0644\u0628\u0633 \u0644\u0648\u0644\u0648</span>`,()=>Bh(n))),f.append(Xt("big ghost",`${Qt.map}<span>\u0627\u0644\u062C\u0632\u064A\u0631\u0629</span>`,()=>Na(i))),d.append(f),r&&(await ui(.5),o(),await Ct("ar_world_done"))}),Oh=cn(async function(i,t){let e=wn("cert"),n=ze(),s=Fi.find(l=>l.id===i),r=On();Sn(r),En(),Fn(r,mi());let o=r.userData.stage;Nn(new w(0,o.y+2.6,o.z+(Ee()?13:10)),o.clone().add(new w(0,1.4,0))),q.camera.fov=Ee()?55:40,q.camera.updateProjectionMatrix(),["bibo","lulu","toota","bondoq"].forEach((l,h)=>{let u=o.clone().add(new w((h-1.5)*1.8,0,-1));sn(Rt[l],u,di(u)*.5),Rt[l].lookAt(q.camera.position),t&&setTimeout(()=>Rt[l].play("cheer"),h*200)}),t&&(wf(200),pe("fanfare"));let a=s.stages.reduce((l,h,u)=>l+(n.stars[s.id+"-"+u]||0),0),c=new Date;Se.append(L("div",{class:"cert-wrap"},L("div",{class:"cert"},L("div",{class:"cert-top"},Af(!0)),L("h2",{},"\u0634\u0647\u0627\u062F\u0629 \u0625\u0646\u062C\u0627\u0632"),Jr("Certificate of Achievement"),L("p",{},"\u062A\u064F\u0645\u0646\u062D \u0647\u0630\u0647 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0644\u0644\u0628\u0637\u0644"),L("div",{class:"cert-name"},n.name),L("p",{},`\u0644\u0623\u0646\u0647 \u0631\u062C\u0651\u0639 \u0643\u0644 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0625\u0644\u0649 ${s.ar} \u0648\u062A\u0639\u0644\u0651\u0645 ${s.words.length} \u0643\u0644\u0645\u0627\u062A \u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u062C\u062F\u064A\u062F\u0629`.replace("\u0644\u0623\u0646\u0647",n.gender==="f"?"\u0644\u0623\u0646\u0647\u0627":"\u0644\u0623\u0646\u0647").replace("\u0631\u062C\u0651\u0639",n.gender==="f"?"\u0631\u062C\u0651\u0639\u062A":"\u0631\u062C\u0651\u0639").replace("\u0648\u062A\u0639\u0644\u0651\u0645",n.gender==="f"?"\u0648\u062A\u0639\u0644\u0651\u0645\u062A":"\u0648\u062A\u0639\u0644\u0651\u0645").replace("\u0644\u0644\u0628\u0637\u0644",n.gender==="f"?"\u0644\u0644\u0628\u0637\u0644\u0629":"\u0644\u0644\u0628\u0637\u0644")),L("div",{class:"cert-words",dir:"ltr"},...s.words.map(l=>L("span",{},pn("fruit",l.id),l.en))),L("div",{class:"cert-foot"},L("div",{},L("b",{html:`${Qt.star} ${a} / 15`}),L("small",{},"\u0646\u062C\u0648\u0645")),pn("char","lulu","cert-lulu"),L("div",{},L("b",{},c.toLocaleDateString("ar-SA-u-nu-latn",{year:"numeric",month:"long",day:"numeric"})),L("small",{},"\u0627\u0644\u062A\u0627\u0631\u064A\u062E")))))),pi({back:kh}),Se.append(L("div",{class:"row bottom"},Xt("big orange",`${Qt.map}<span>\u0627\u0644\u062E\u0631\u064A\u0637\u0629</span>`,()=>$n()))),t&&(await ui(.3),e())}),Bh=cn(async function(i){let t=wn("wardrobe"),e=ze();if(!e)return Bi();let n=On();Sn(n),En(),Fn(n,mi());let s=n.userData.stage,r="lulu",o=!Ee(),a=(u,d=!0)=>{r=u;let f=Rt[u],m=f.root.position,y=m.clone().add(new w(o?-1.2:0,1.7,o?4.6:6.2)),g=m.clone().add(new w(o?-1.1:0,o?1.25:.5,0));q.camera.fov=o?40:52,q.camera.updateProjectionMatrix(),d?Hr(y,g,.8):Nn(y,g),f.play("spin"),c.querySelectorAll(".tab").forEach(p=>p.classList.toggle("on",p.dataset.id===u)),h()};["bibo","lulu","toota","bondoq"].forEach((u,d)=>{let f=s.clone().add(new w((d-1.5)*2.4,0,0));sn(Rt[u],f,0),Rt[u].lookAt(q.camera.position),zr(Rt[u].root,()=>a(u))});let c=L("div",{class:"tabs"},...["lulu","bibo","toota","bondoq"].map(u=>{let d=Xt("tab",L("div",{},pn("char",u),L("span",{},Aa[u].ar)),()=>a(u));return d.dataset.id=u,d})),l=L("div",{class:"items"}),h=()=>{l.innerHTML="",Object.keys(Ea).forEach(u=>{let d=Ea[u],f=e.items.includes(u),m=e.equipped[r]?.[d.slot]===u,y=Xt("item"+(f?"":" locked")+(m?" on":"")+(i===u?" new":""),"",()=>{var g;if(!f){pe("soft"),y.classList.remove("shake"),y.offsetWidth,y.classList.add("shake");return}(g=e.equipped)[r]||(g[r]={}),e.equipped[r][d.slot]=m?null:u,nn(),En(),Rt[r].play(m?"nod":"cheer"),m||pe("star"),h()},d.ar);y.append(f?pn("acc",u):L("div",{class:"q",html:Qt.gift}),L("span",{},f?d.ar:"\u0627\u0631\u0628\u062D\u0647\u0627")),l.append(y)})};Se.append(L("div",{class:"panel wardrobe"},L("h1",{},"\u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0644\u0627\u0628\u0633"),c,L("p",{class:"hint"},"\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0642\u0637\u0639\u0629 \u0639\u0634\u0627\u0646 \u062A\u0644\u0628\u0633\u0647\u0627\u060C \u0648\u0627\u0636\u063A\u0637 \u0645\u0631\u0629 \u062B\u0627\u0646\u064A\u0629 \u0639\u0634\u0627\u0646 \u062A\u0634\u064A\u0644\u0647\u0627."),l)),pi({back:$n}),Se.append(Ha("wardrobe")),a("lulu",!1),await fi("wardrobe")}),Uf=cn(async function(){let i=wn("bag"),t=ze();if(!t)return Bi();let e=On();Sn(e),En(),Fn(e,mi());let n=e.userData.stage;Nn(new w(3,n.y+3,n.z+6),new w(0,n.y+1.6,0));let s=n.clone().add(new w(1.6,0,-1.5));sn(Rt.lulu,s,di(s)),Rt.lulu.lookAt(q.camera.position);let r=L("div",{class:"panel bag"},L("h1",{},"\u062D\u0642\u064A\u0628\u0629 \u0643\u0644\u0645\u0627\u062A\u064A"));Fi.forEach(o=>{let a=L("section",{},L("h3",{style:`--c:${o.color}`},o.ar," ",Jr(o.en))),c=L("div",{class:"bag-grid"});o.open?o.words.forEach(l=>{let h=Zr(t.words[l.id]),u=Xt("bag-w "+h,L("div",{},pn("fruit",l.id),L("b",{dir:"ltr"},l.en),L("small",{},l.ar),L("i",{class:"st",html:h==="learned"?Qt.check:""})),async()=>{Rt.lulu.play("nod"),await Ct("w_"+l.id),We.settings.arabic&&Ct("ar_m_"+l.id)},l.en);c.append(u)}):c.append(...o.words.map(l=>L("div",{class:"bag-w soon"},L("div",{},L("span",{class:"q",html:Qt.lock}),L("b",{dir:"ltr"},l),L("small",{},"\u0642\u0631\u064A\u0628\u0627\u064B"))))),a.append(c),r.append(a)}),Se.append(r),pi({back:$n}),Se.append(Ha("bag")),await fi("bag")}),kh=cn(async function(){let i=wn("awards"),t=ze();if(!t)return Bi();let e=On();Sn(e),En(),Fn(e,mi());let n=e.userData.stage;Nn(new w(-3,n.y+3,n.z+6),new w(0,n.y+1.6,0));let s=n.clone().add(new w(-1.6,0,-1.5));sn(Rt.bondoq,s,di(s)),Rt.bondoq.lookAt(q.camera.position),Rt.bondoq.play("wave");let r=L("div",{class:"panel awards"},L("h1",{},"\u0625\u0646\u062C\u0627\u0632\u0627\u062A\u064A"));r.append(L("h3",{},"\u0627\u0644\u0634\u0647\u0627\u062F\u0627\u062A"));let o=L("div",{class:"cert-list"});Fi.forEach(a=>{let c=t.certs.includes(a.id);o.append(Xt("cert-mini"+(c?" on":""),`${Qt.trophy}<b>${a.ar}</b><small>${c?"\u0627\u0641\u062A\u062D \u0627\u0644\u0634\u0647\u0627\u062F\u0629":"\u0644\u0645 \u062A\u0643\u062A\u0645\u0644 \u0628\u0639\u062F"}</small>`,()=>{c?Oh(a.id):pe("soft")}))}),r.append(o,L("h3",{},"\u0627\u0644\u0623\u0648\u0633\u0645\u0629")),r.append(L("div",{class:"badge-grid"},...wh.map(a=>L("div",{class:"badge"+(t.badges.includes(a.id)?" on":"")},L("span",{html:Qt.medal}),L("b",{},a.ar),L("small",{},a.desc))))),Se.append(r),pi({back:$n}),Se.append(Ha("awards"))});function Nf(){let i=2+Math.floor(Math.random()*7),t=3+Math.floor(Math.random()*6),e=i*t,n=Zn([e,e+i,e-t,e+2]),s=za(L("div",{class:"gate"},L("h2",{},"\u0645\u0646\u0637\u0642\u0629 \u0648\u0644\u064A \u0627\u0644\u0623\u0645\u0631"),L("p",{},"\u0644\u0644\u0643\u0628\u0627\u0631 \u0641\u0642\u0637: \u0643\u0645 \u062D\u0627\u0635\u0644"),L("div",{class:"q",dir:"ltr"},`${i} \xD7 ${t}`),L("div",{class:"gate-opts"},...n.map(r=>Xt("gate-o",String(r),()=>{r===e?(s.remove(),Kr()):(s.querySelector(".q").classList.add("shake"),setTimeout(()=>s.remove(),500))}))),Xt("ghost","\u0631\u062C\u0648\u0639",()=>s.remove())),"gate-m")}var Kr=cn(async function(i){let t=wn("parent"),e=On();Sn(e),Nn(new w(0,30,40),new w(0,0,0));let n=We.profiles,s=n.find(u=>u.id===i)||ze()||n[0],r=L("div",{class:"parent"}),o=L("header",{},L("div",{},L("h1",{},"\u0644\u0648\u062D\u0629 \u0648\u0644\u064A \u0627\u0644\u0623\u0645\u0631"),L("p",{},"\u0643\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062D\u0641\u0648\u0638\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632 \u0641\u0642\u0637. \u0644\u0627 \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0648\u0644\u0627 \u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0648\u0644\u0627 \u0645\u062D\u0627\u062F\u062B\u0627\u062A.")),Xt("ghost","\u0631\u062C\u0648\u0639 \u0644\u0644\u0639\u0628\u0629",()=>ze()?$n():ka()));if(r.append(o),!s)r.append(L("section",{class:"card"},L("p",{},"\u0645\u0627 \u0641\u064A\u0647 \u0645\u0644\u0641\u0627\u062A \u0623\u0637\u0641\u0627\u0644 \u0628\u0639\u062F. \u0623\u0636\u0641 \u0637\u0641\u0644 \u0645\u0646 \u0634\u0627\u0634\u0629 \xAB\u0645\u064A\u0646 \u0628\u064A\u0644\u0639\u0628 \u0627\u0644\u064A\u0648\u0645\u061F\xBB.")));else{r.append(L("div",{class:"kid-tabs"},...n.map(C=>Xt("kt"+(C.id===s.id?" on":""),L("span",{},pn("char",C.avatar),C.name),()=>Kr(C.id)))));let u=Fi[0],d=u.words.filter(C=>Zr(s.words[C.id])==="learned"),f=u.words.filter(C=>Zr(s.words[C.id])==="review"),m=s.listen.c+s.listen.w?Math.round(100*s.listen.c/(s.listen.c+s.listen.w)):null,y=s.speak.rec?Math.round(100*s.speak.ok/s.speak.rec):null,g=u.stages.filter((C,b)=>s.done["fruit-"+b]).length,p=Math.round((s.time[Pa()]||0)/60),x=[...Array(7)].map((C,b)=>{let M=new Date;M.setDate(M.getDate()-(6-b));let I=M.getFullYear()+"-"+String(M.getMonth()+1).padStart(2,"0")+"-"+String(M.getDate()).padStart(2,"0");return{d:M,min:Math.round((s.time[I]||0)/60)}}),v=x.reduce((C,b)=>C+b.min,0),_=Math.max(10,...x.map(C=>C.min)),A=C=>C==null?'<span class="muted">\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F</span>':`<div class="meter"><i style="width:${C}%"></i></div><b>${C}%</b>`,T=L("div",{class:"kpis"},Ia("\u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u062A\u0639\u0644\u064E\u0651\u0645\u0629",`${d.length} / ${u.words.length}`),Ia("\u0627\u0644\u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629",`${g} / ${u.stages.length}`),Ia("\u0648\u0642\u062A \u0627\u0644\u0644\u0639\u0628 \u0627\u0644\u064A\u0648\u0645",`${p} \u062F\u0642\u064A\u0642\u0629`),Ia("\u0627\u0644\u0646\u062C\u0648\u0645",String(Yr(s))));r.append(T);let R=L("div",{class:"grid2"});R.append(L("section",{class:"card"},L("h3",{},"\u0627\u0644\u0643\u0644\u0645\u0627\u062A"),L("ul",{class:"wlist"},...u.words.map(C=>{let b=Zr(s.words[C.id]),M=s.words[C.id]||{};return L("li",{},pn("fruit",C.id),L("b",{dir:"ltr"},C.en),L("span",{class:"tag "+b},{learned:"\u062A\u0639\u0644\u0651\u0645\u0647\u0627",review:"\u064A\u062D\u062A\u0627\u062C \u0645\u0631\u0627\u062C\u0639\u0629",learning:"\u064A\u062A\u0639\u0644\u0651\u0645\u0647\u0627",new:"\u0644\u0645 \u062A\u0628\u062F\u0623"}[b]),L("small",{},`\u0635\u062D ${M.c||0} \xB7 \u0645\u062D\u0627\u0648\u0644\u0627\u062A ${M.w||0}`))})),f.length?L("p",{class:"note"},"\u0646\u0646\u0635\u062D \u0628\u0645\u0631\u0627\u062C\u0639\u0629: ",L("b",{dir:"ltr"},f.map(C=>C.en).join("\u060C ")),". \u0627\u0644\u0644\u0639\u0628\u0629 \u062A\u0643\u0631\u0631 \u0647\u0630\u0647 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0623\u0643\u062B\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B."):null)),R.append(L("section",{class:"card"},L("h3",{},"\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639 \u0648\u0627\u0644\u0646\u0637\u0642"),L("div",{class:"lvl"},L("span",{},"\u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629)"),L("div",{html:A(m)})),L("div",{class:"lvl"},L("span",{},"\u0627\u0644\u0646\u0637\u0642 (\u062A\u0639\u0631\u0651\u0641 \u0635\u0648\u062A\u064A)"),L("div",{html:A(y)})),L("p",{class:"muted"},`\u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0646\u0637\u0642: ${s.speak.tries}. ${Yn?"":"\u0627\u0644\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u062A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632\u060C \u0641\u0627\u0644\u0644\u0639\u0628\u0629 \u062A\u0643\u0627\u0641\u0626 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0641\u0642\u0637."}`),L("h3",{},"\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0623\u0633\u0628\u0648\u0639"),L("div",{class:"bars"},...x.map(C=>L("div",{class:"bar"},L("i",{style:`height:${Math.round(100*C.min/_)}%`}),L("b",{},String(C.min)),L("small",{},C.d.toLocaleDateString("ar",{weekday:"short"}))))),L("p",{class:"muted"},`\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0623\u0633\u0628\u0648\u0639: ${v} \u062F\u0642\u064A\u0642\u0629. ${qy(s,d.length,g)}`))),r.append(R),r.append(L("section",{class:"card danger"},L("h3",{},"\u0645\u0644\u0641 \u0627\u0644\u0637\u0641\u0644"),L("div",{class:"row"},Xt("ghost","\u062A\u0635\u0641\u064A\u0631 \u0627\u0644\u062A\u0642\u062F\u0651\u0645",()=>vf(`\u062A\u0635\u0641\u064A\u0631 \u0643\u0644 \u062A\u0642\u062F\u0651\u0645 ${s.name}\u061F`,()=>{mf(s),Kr(s.id)})),Xt("ghost","\u062D\u0630\u0641 \u0627\u0644\u0645\u0644\u0641",()=>vf(`\u062D\u0630\u0641 \u0645\u0644\u0641 ${s.name} \u0646\u0647\u0627\u0626\u064A\u0627\u064B\u061F`,()=>{gf(s.id),Kr()})))))}let a=We.settings,c=(u,d,f)=>{let m=Xt("toggle"+(a[u]?" on":""),`<i></i><span>${d}<small>${f}</small></span>`,()=>{a[u]=!a[u],nn(),m.classList.toggle("on",a[u])});return m},l=(u,d,f)=>{let m=L("input",{type:"range",min:"0",max:"1",step:".1",value:String(a[u]),id:"set-"+u});return m.addEventListener("input",()=>{a[u]=+m.value,f(a[u]),nn()}),L("label",{class:"rng",for:"set-"+u},L("span",{},d),m)},h=L("div",{class:"seg"},...[[0,"\u0628\u062F\u0648\u0646"],[15,"15 \u062F"],[30,"30 \u062F"],[45,"45 \u062F"]].map(([u,d])=>{let f=Xt("seg-b"+(a.limit===u?" on":""),d,()=>{a.limit=u,nn(),h.querySelectorAll(".seg-b").forEach(m=>m.classList.toggle("on",m===f))});return f}));r.append(L("section",{class:"card"},L("h3",{},"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"),c("mic","\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646",Yn?"\u0641\u064A \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0646\u0637\u0642\u060C \u064A\u0637\u0644\u0628 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0625\u0630\u0646\u0643 \u0623\u0648\u0644 \u0645\u0631\u0629":"\u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632 \u0623\u0648 \u0627\u0644\u0645\u062A\u0635\u0641\u062D"),c("arabic","\u0627\u0644\u0645\u0639\u0646\u0649 \u0627\u0644\u0639\u0631\u0628\u064A","\u062A\u0642\u0648\u0644 \u0644\u0648\u0644\u0648 \u0645\u0639\u0646\u0649 \u0627\u0644\u0643\u0644\u0645\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A"),l("music","\u0635\u0648\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649",af),l("sfx","\u0635\u0648\u062A \u0627\u0644\u0645\u0624\u062B\u0631\u0627\u062A",cf),L("label",{},"\u062D\u062F \u0627\u0644\u0644\u0639\u0628 \u0627\u0644\u064A\u0648\u0645\u064A"),h,L("p",{class:"muted"},"\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629: \u0627\u0644\u0644\u0639\u0628\u0629 \u0644\u0627 \u062A\u062C\u0645\u0639 \u0623\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0644\u0627 \u062A\u0631\u0633\u0644\u0647\u0627. \u0627\u0644\u0635\u0648\u062A (\u0625\u0630\u0627 \u0641\u0639\u0651\u0644\u062A \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646) \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0641\u0642\u0637 \u0644\u0644\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0643\u0644\u0645\u0629 \u0644\u062D\u0638\u062A\u0647\u0627. \u0628\u0639\u062F \u0641\u062A\u062D \u0627\u0644\u0644\u0639\u0628\u0629 \u0645\u0631\u0629\u060C \u062A\u0628\u0642\u0649 \u0623\u0635\u0648\u0627\u062A\u0647\u0627 \u0645\u062D\u0645\u0651\u0644\u0629."))),Se.append(r)});function Ia(i,t){return L("div",{class:"kpi"},L("small",{},i),L("b",{},t))}function qy(i,t,e){return e?e===5?`\u0623\u0643\u0645\u0644 \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0648\u062A\u0639\u0644\u0651\u0645 ${t} \u0643\u0644\u0645\u0627\u062A. \u0645\u0645\u062A\u0627\u0632!`:`\u0623\u0643\u0645\u0644 ${e} \u0645\u0646 5 \u0645\u0631\u0627\u062D\u0644 \u0641\u064A \u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u0643\u0647. \u0627\u0633\u062A\u0645\u0631\u0651\u0648\u0627!`:"\u0644\u0645 \u064A\u0628\u062F\u0623 \u0627\u0644\u0645\u0631\u0627\u062D\u0644 \u0628\u0639\u062F."}function vf(i,t){let e=za(L("div",{class:"gate"},L("h2",{},i),L("div",{class:"row"},Xt("big orange","\u0646\u0639\u0645",()=>{e.remove(),t()}),Xt("ghost","\u0644\u0627",()=>e.remove()))),"gate-m")}var Mf=!1;setInterval(()=>{let i=ze();if(!i||document.visibilityState!=="visible"||Da==="parent"||Da==="start"||!rt.ctx)return;pf(i,15),nn();let t=We.settings.limit;if(t&&!Mf&&(i.time[Pa()]||0)>=t*60){Mf=!0;let e=za(L("div",{class:"gate"},pn("char","lulu"),L("h2",{},"\u0648\u0642\u062A \u0627\u0644\u0631\u0627\u062D\u0629!"),L("p",{},"\u0644\u0639\u0628\u062A \u0643\u062B\u064A\u0631 \u0627\u0644\u064A\u0648\u0645. \u0646\u0643\u0645\u0651\u0644 \u0627\u0644\u0645\u063A\u0627\u0645\u0631\u0629 \u0628\u0643\u0631\u0629!"),Xt("big orange","\u062A\u0645\u0627\u0645",()=>{e.remove(),Ct("ar_bye"),ka()}),Xt("ghost","\u0648\u0644\u064A \u0627\u0644\u0623\u0645\u0631",()=>{e.remove(),Nf()})),"gate-m")}},15e3);window.__lulu={E:q,CH:Rt,runStage:Fh,WORLDS:Fi,store:We,worldMap:$n,wardrobe:Bh,wordBag:Uf,achievements:kh,parentDash:Kr,certificate:Oh,rewardScreen:Df};document.addEventListener("pointerdown",()=>Ca(),{once:!0});ka();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
