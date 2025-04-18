import{a7 as Pe,dY as Z,a4 as I,mP as Ne,sX as Qe,o4 as Me,db as C,dc as be,kk as je,e0 as Ke,e6 as L,aC as _,as as G,nj as et,nk as tt,a8 as Be,aw as st,kj as _e,jk as nt,a5 as rt,sY as ot,sO as at,cx as it,qv as lt,sZ as ct,s_ as ut,s$ as ht,t0 as ft,rB as Ie,q7 as dt,cm as pt,t1 as mt,t2 as gt,t3 as Ot,t4 as yt,t5 as wt,t6 as vt,t7 as xt,t8 as At,k6 as $t,dZ as Pt,ea as pe,da as F,t9 as Mt,ed as bt,ob as Tt,aB as k,a6 as St,d$ as He}from"./index-CgLC99fU.js";import{s as It,e as Ce,i as oe}from"./IntersectorInterfaces-CmNINbyF.js";import"./boundedPlane-CcAP6iN5.js";import{b as Rt,d as Ee,s as Nt,a as _t,f as Ct,e as ke,o as ce,c as Et,g as zt,w as Lt,h as Vt,i as Dt,j as Ut,t as D,p as U,k as qe,l as ze}from"./Texture-DeMA0aTg.js";import{o as E}from"./interfaces-DDtDqZYj.js";import{e as A}from"./VertexAttribute-Cq4MnHjR.js";import{r as R,t as Le,n as V}from"./vec3f32-nZdmKIgz.js";import{l as Ft,A as Xe}from"./Indices-BwpCJjpx.js";import{t as b}from"./orientedBoundingBox-BJN0Z9lJ.js";import{s as re}from"./Util-D7614Cj5.js";import{t as Gt}from"./doublePrecisionUtils-B0owpBza.js";let jt=class{constructor(e,n,t){this.object=e,this.geometryId=n,this.triangleNr=t}},Bt=class extends jt{constructor(e,n,t,r){super(e,n,t),this.center=r!=null?Pe(r):null}};class Ht{constructor(e){this.layerUid=e}}let Ms=class extends Ht{constructor(e,n){super(e),this.graphicUid=n}};function kt(s){return(s==null?void 0:s.dist)!=null}const Ve=1e-5;let qt=class{constructor(e){this.options=new It,this._results=new Xt,this.transform=new Rt,this.tolerance=Ve,this.verticalOffset=null,this._ray=Z(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??Ne.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,n,t){this.resetWithRay(Qe(e,n,this._ray),t)}resetWithRay(e,n){this.camera=n,e!==this._ray&&Me(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===Ne.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,C(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,n,t,r,u){var i;this.point=n,this.filterPredicate=r,this.tolerance=t??Ve;const o=Ee(this.verticalOffset);if(e&&e.length>0){const c=u?a=>{u(a)&&this.intersectObject(a)}:a=>{this.intersectObject(a)};for(const a of e){const l=(i=a.getSpatialQueryAccelerator)==null?void 0:i.call(a);l!=null?(o!=null?l.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,c,o):l.forEachAlongRay(this._ray.origin,this._ray.direction,c),this.options.selectionMode&&this.options.hud&&l.forEachDegenerateObject(c)):a.objects.forAll(p=>c(p))}}this.sortResults()}intersectObject(e){const n=e.geometries;if(!n)return;const t=e.effectiveTransformation,r=Ee(this.verticalOffset);for(const u of n){if(!u.visible)continue;const{material:o,id:i}=u;if(!o.visible)continue;this.transform.setAndInvalidateLazyTransforms(t,u.transformation),be(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),be(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const c=this.transform.transform;r!=null&&(r.objectTransform=this.transform),o.intersect(u,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(a,l,p,v,x,$)=>{if(a>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,a))return;const f=v?this._results.hud:this._results,d=v?m=>{const g=new Bt(e,i,p,$);m.set(oe.HUD,g,a,l,je,x)}:m=>m.set(oe.OBJECT,{object:e,geometryId:i,triangleNr:p},a,l,c,x);if((f.min.drapedLayerOrder==null||x>=f.min.drapedLayerOrder)&&(f.min.dist==null||a<f.min.dist)&&d(f.min),this.options.store!==Ce.MIN&&(f.max.drapedLayerOrder==null||x<f.max.drapedLayerOrder)&&(f.max.dist==null||a>f.max.dist)&&d(f.max),this.options.store===Ce.ALL)if(v){const m=new Te(this._ray);d(m),this._results.hud.all.push(m)}else{const m=new K(this._ray);d(m),this._results.all.push(m)}}})}}sortResults(e=this._results.all){e.sort((n,t)=>n.dist!==t.dist?(n.dist??0)-(t.dist??0):n.drapedLayerOrder!==t.drapedLayerOrder?De(n.drapedLayerOrder,t.drapedLayerOrder):De(n.drapedLayerGraphicOrder,t.drapedLayerGraphicOrder))}};function De(s,e){return(e??-Number.MAX_VALUE)-(s??-Number.MAX_VALUE)}function Ss(s){return new qt(s)}let Xt=class{constructor(){this.min=new K(Z()),this.max=new K(Z()),this.hud={min:new Te(Z()),max:new Te(Z()),all:new Array},this.ground=new K(Z()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},K=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(L(ie,this.ray.direction,this.dist),Ke(ie)):null}getIntersectionPoint(e){return!!kt(this)&&(L(ie,this.ray.direction,this.dist),C(e,this.ray.origin,ie),!0)}getTransformedNormal(e){return G(ne,this.normal),ne[3]=0,tt(ne,ne,this.transformation),G(e,ne),_(e,e)}constructor(e){this.intersector=oe.OBJECT,this.normal=I(),this.transformation=Be(),this._ray=Z(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=oe.OBJECT,Me(e,this._ray)}set(e,n,t,r,u,o,i){this.intersector=e,this.dist=t,G(this.normal,r??st),_e(this.transformation,u??je),this.target=n,this.drapedLayerOrder=o,this.drapedLayerGraphicOrder=i}copy(e){Me(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,G(this.normal,e.normal),_e(this.transformation,e.transformation)}},Te=class extends K{constructor(){super(...arguments),this.intersector=oe.HUD}};function _s(s){return new K(s)}const ie=I(),ne=et();function Cs(s){return s.type==="point"}const Zt=.5;function Es(s,e){s.include(Nt),s.attributes.add(A.POSITION,"vec3"),s.attributes.add(A.NORMAL,"vec3"),s.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const n=s.vertex;_t(n,e),Ct(n,e),n.uniforms.add(new ke("viewport",(t,r)=>r.camera.fullViewport),new ce("polygonOffset",t=>t.shaderPolygonOffset),new ce("cameraGroundRelative",(t,r)=>r.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Et(n),n.constants.add("smallOffsetAngle","float",.984807753012208),n.code.add(E`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(E`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?E.float(0):E`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||zt(n),e.draped||(n.uniforms.add(new ce("perDistancePixelRatio",(t,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),n.code.add(E`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${E.float(Zt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Lt(n),e.hasScreenSizePerspective&&Vt(n),n.code.add(E`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?E`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":E`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Yt(s){s.uniforms.add(new Dt("alignPixelEnabled",(e,n)=>n.alignPixelEnabled)),s.code.add(E`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),s.code.add(E`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var me;(function(s){s[s.Occluded=0]="Occluded",s[s.NotOccluded=1]="NotOccluded",s[s.Both=2]="Both",s[s.COUNT=3]="COUNT"})(me||(me={}));function zs(s){s.vertex.uniforms.add(new ce("renderTransparentlyOccludedHUD",(e,n)=>n.hudRenderStyle===me.Occluded?1:n.hudRenderStyle===me.NotOccluded?0:.75),new ke("viewport",(e,n)=>n.camera.fullViewport),new Ut("hudVisibilityTexture",(e,n)=>{var t;return(t=n.hudVisibility)==null?void 0:t.getTexture()})),s.vertex.include(Yt),s.vertex.code.add(E`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Ls(s){s.code.add(E`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),s.code.add(E`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),s.code.add(E`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Vs(s,e){if(s.type==="point")return H(s,e,!1);if(ot(s))switch(s.type){case"extent":return H(s.center,e,!1);case"polygon":return H(s.centroid,e,!1);case"polyline":return H(Ue(s),e,!0);case"mesh":return H(at(s.vertexSpace,s.spatialReference)??s.extent.center,e,!1);case"multipoint":return}else switch(s.type){case"extent":return H(Jt(s),e,!0);case"polygon":return H(Wt(s),e,!0);case"polyline":return H(Ue(s),e,!0);case"multipoint":return}}function Ue(s){const e=s.paths[0];if(!e||e.length===0)return null;const n=ht(e,ft(e)/2);return Ie(n[0],n[1],n[2],s.spatialReference)}function Jt(s){return Ie(.5*(s.xmax+s.xmin),.5*(s.ymax+s.ymin),s.zmin!=null&&s.zmax!=null&&isFinite(s.zmin)&&isFinite(s.zmax)?.5*(s.zmax+s.zmin):void 0,s.spatialReference)}function Wt(s){const e=s.rings[0];if(!e||e.length===0)return null;const n=dt(s.rings,!!s.hasZ);return Ie(n[0],n[1],n[2],s.spatialReference)}function H(s,e,n){const t=n?s:ct(s);return e&&s?ut(s,t,e)?t:null:t}function Ds(s,e,n,t=0){if(s){e||(e=it());const r=s;let u=.5*r.width*(n-1),o=.5*r.height*(n-1);return r.width<1e-7*r.height?u+=o/20:r.height<1e-7*r.width&&(o+=u/20),lt(e,r.xmin-u-t,r.ymin-o-t,r.xmax+u+t,r.ymax+o+t),e}return null}function Us(s,e,n=null){const t=yt(wt);return s!=null&&(t[0]=s[0],t[1]=s[1],t[2]=s[2]),e!=null?t[3]=e:s!=null&&s.length>3&&(t[3]=s[3]),n&&(t[0]*=n,t[1]*=n,t[2]*=n,t[3]*=n),t}function Fs(s=nt,e,n,t=1){const r=new Array(3);if(e==null||n==null)r[0]=1,r[1]=1,r[2]=1;else{let u,o=0;for(let i=2;i>=0;i--){const c=s[i];let a;const l=c!=null,p=i===0&&!u&&!l,v=n[i];c==="symbol-value"||p?a=v!==0?e[i]/v:1:l&&c!=="proportional"&&isFinite(c)&&(a=v!==0?c/v:1),a!=null&&(r[i]=a,u=a,o=Math.max(o,Math.abs(a)))}for(let i=2;i>=0;i--)r[i]==null?r[i]=u:r[i]===0&&(r[i]=.001*o)}for(let u=2;u>=0;u--)r[u]/=t;return rt(r)}function Qt(s){return s.isPrimitive!=null}function Gs(s){return Kt(Qt(s)?[s.width,s.depth,s.height]:s)?null:"Symbol sizes may not be negative values"}function Kt(s){const e=n=>n==null||n>=0;return Array.isArray(s)?s.every(e):e(s)}function js(s,e,n,t=Be()){return s&&vt(t,t,-s/180*Math.PI),e&&xt(t,t,e/180*Math.PI),n&&At(t,t,n/180*Math.PI),t}function Bs(s,e,n){if(n.minDemResolution!=null)return n.minDemResolution;const t=pt(e),r=mt(s)*t,u=gt(s)*t,o=Ot(s)*(e.isGeographic?1:t);return r===0&&u===0&&o===0?n.minDemResolutionForPoints:.01*Math.max(r,u,o)}var Se;(function(s){function e(o,i){const c=o[i],a=o[i+1],l=o[i+2];return Math.sqrt(c*c+a*a+l*l)}function n(o,i){const c=o[i],a=o[i+1],l=o[i+2],p=1/Math.sqrt(c*c+a*a+l*l);o[i]*=p,o[i+1]*=p,o[i+2]*=p}function t(o,i,c){o[i]*=c,o[i+1]*=c,o[i+2]*=c}function r(o,i,c,a,l,p=i){(l=l||o)[p]=o[i]+c[a],l[p+1]=o[i+1]+c[a+1],l[p+2]=o[i+2]+c[a+2]}function u(o,i,c,a,l,p=i){(l=l||o)[p]=o[i]-c[a],l[p+1]=o[i+1]-c[a+1],l[p+2]=o[i+2]-c[a+2]}s.length=e,s.normalize=n,s.scale=t,s.add=r,s.subtract=u})(Se||(Se={}));const Y=Se,ve=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],es=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],ts=[0,0,1,0,1,1,0,1],ss=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ze=new Array(36);for(let s=0;s<6;s++)for(let e=0;e<6;e++)Ze[6*s+e]=s;const X=new Array(36);for(let s=0;s<6;s++)X[6*s]=0,X[6*s+1]=1,X[6*s+2]=2,X[6*s+3]=2,X[6*s+4]=3,X[6*s+5]=0;function Hs(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(24);for(let t=0;t<8;t++)n[3*t]=ve[t][0]*e[0],n[3*t+1]=ve[t][1]*e[1],n[3*t+2]=ve[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,ss,3,!0)],[A.NORMAL,new b(es,Ze,3)],[A.UV0,new b(ts,X,2)]])}const xe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],ns=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],rs=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],os=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function ks(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(18);for(let t=0;t<6;t++)n[3*t]=xe[t][0]*e[0],n[3*t+1]=xe[t][1]*e[1],n[3*t+2]=xe[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,rs,3,!0)],[A.NORMAL,new b(ns,os,3)]])}const ue=R(-.5,0,-.5),he=R(.5,0,-.5),fe=R(0,0,.5),de=R(0,.5,0),J=V(),W=V(),ee=V(),te=V(),se=V();F(J,ue,de),F(W,ue,he),k(ee,J,W),_(ee,ee),F(J,he,de),F(W,he,fe),k(te,J,W),_(te,te),F(J,fe,de),F(W,fe,ue),k(se,J,W),_(se,se);const Ae=[ue,he,fe,de],as=[0,-1,0,ee[0],ee[1],ee[2],te[0],te[1],te[2],se[0],se[1],se[2]],is=[0,1,2,3,1,0,3,2,1,3,0,2],ls=[0,0,0,1,1,1,2,2,2,3,3,3];function qs(s,e){Array.isArray(e)||(e=[e,e,e]);const n=new Array(12);for(let t=0;t<4;t++)n[3*t]=Ae[t][0]*e[0],n[3*t+1]=Ae[t][1]*e[1],n[3*t+2]=Ae[t][2]*e[2];return new U(s,[[A.POSITION,new b(n,is,3,!0)],[A.NORMAL,new b(as,ls,3)]])}function Xs(s,e,n,t,r={uv:!0}){const u=-Math.PI,o=2*Math.PI,i=-Math.PI/2,c=Math.PI,a=Math.max(3,Math.floor(n)),l=Math.max(2,Math.floor(t)),p=(a+1)*(l+1),v=D(3*p),x=D(3*p),$=D(2*p),f=[];let d=0;for(let O=0;O<=l;O++){const S=[],h=O/l,P=i+h*c,M=Math.cos(P);for(let N=0;N<=a;N++){const j=N/a,y=u+j*o,z=Math.cos(y)*M,T=Math.sin(P),ae=-Math.sin(y)*M;v[3*d]=z*e,v[3*d+1]=T*e,v[3*d+2]=ae*e,x[3*d]=z,x[3*d+1]=T,x[3*d+2]=ae,$[2*d]=j,$[2*d+1]=h,S.push(d),++d}f.push(S)}const m=new Array;for(let O=0;O<l;O++)for(let S=0;S<a;S++){const h=f[O][S],P=f[O][S+1],M=f[O+1][S+1],N=f[O+1][S];O===0?(m.push(h),m.push(M),m.push(N)):O===l-1?(m.push(h),m.push(P),m.push(M)):(m.push(h),m.push(P),m.push(M),m.push(M),m.push(N),m.push(h))}const g=[[A.POSITION,new b(v,m,3,!0)],[A.NORMAL,new b(x,m,3,!0)]];return r.uv&&g.push([A.UV0,new b($,m,2,!0)]),r.offset&&(g[0][0]=A.OFFSET,g.push([A.POSITION,new b(Float64Array.from(r.offset),Xe(m.length),3,!0)])),new U(s,g)}function Zs(s,e,n,t){const r=cs(e,n);return new U(s,r)}function cs(s,e,n){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)Y.scale(t,c,s/Y.length(t,c));let u={};function o(c,a){c>a&&([c,a]=[a,c]);const l=c.toString()+"."+a.toString();if(u[l])return u[l];let p=t.length;return t.length+=3,Y.add(t,3*c,t,3*a,t,p),Y.scale(t,p,s/Y.length(t,p)),p/=3,u[l]=p,p}for(let c=0;c<e;c++){const a=r.length,l=new Array(4*a);for(let p=0;p<a;p+=3){const v=r[p],x=r[p+1],$=r[p+2],f=o(v,x),d=o(x,$),m=o($,v),g=4*p;l[g]=v,l[g+1]=f,l[g+2]=m,l[g+3]=x,l[g+4]=d,l[g+5]=f,l[g+6]=$,l[g+7]=m,l[g+8]=d,l[g+9]=f,l[g+10]=d,l[g+11]=m}r=l,u={}}const i=ze(t);for(let c=0;c<i.length;c+=3)Y.normalize(i,c);return[[A.POSITION,new b(ze(t),r,3,!0)],[A.NORMAL,new b(i,r,3,!0)]]}function Ys(s,e,n,t,r,u,o,i,c,a=null){const l=n?Pe(n):I(),p=e?Pe(e):St(0,0,1),v=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],x=u!=null&&u.length===2?u:[1,1],$=r!=null?[r]:[0],f=Xe(1),d=[[A.POSITION,new b(l,f,3,!0)],[A.NORMAL,new b(p,f,3,!0)],[A.COLOR,new b(v,f,4,!0)],[A.SIZE,new b(x,f,2)],[A.ROTATION,new b($,f,1,!0)]];if(i&&d.push([A.UV0,new b(i,f,i.length)]),o!=null&&(o=[o[0],o[1],o[2],o[3]],d.push([A.CENTEROFFSETANDDISTANCE,new b(o,f,4)])),c){const m=[c[0],c[1],c[2],c[3]];d.push([A.FEATUREATTRIBUTE,new b(m,f,4)])}return new U(s,d,null,qe.Point,a)}function us(s,e,n,t,r=!0,u=!0){let o=0;const i=e,c=s;let a=R(0,o,0),l=R(0,o+c,0),p=R(0,-1,0),v=R(0,1,0);t&&(o=c,l=R(0,0,0),a=R(0,o,0),p=R(0,1,0),v=R(0,-1,0));const x=[l,a],$=[p,v],f=n+2,d=Math.sqrt(c*c+i*i);if(t)for(let h=n-1;h>=0;h--){const P=h*(2*Math.PI/n),M=R(Math.cos(P)*i,o,Math.sin(P)*i);x.push(M);const N=R(c*Math.cos(P)/d,-i/d,c*Math.sin(P)/d);$.push(N)}else for(let h=0;h<n;h++){const P=h*(2*Math.PI/n),M=R(Math.cos(P)*i,o,Math.sin(P)*i);x.push(M);const N=R(c*Math.cos(P)/d,i/d,c*Math.sin(P)/d);$.push(N)}const m=new Array,g=new Array;if(r){for(let h=3;h<x.length;h++)m.push(1),m.push(h-1),m.push(h),g.push(0),g.push(0),g.push(0);m.push(x.length-1),m.push(2),m.push(1),g.push(0),g.push(0),g.push(0)}if(u){for(let h=3;h<x.length;h++)m.push(h),m.push(h-1),m.push(0),g.push(h),g.push(h-1),g.push(1);m.push(0),m.push(2),m.push(x.length-1),g.push(1),g.push(2),g.push($.length-1)}const O=D(3*f);for(let h=0;h<f;h++)O[3*h]=x[h][0],O[3*h+1]=x[h][1],O[3*h+2]=x[h][2];const S=D(3*f);for(let h=0;h<f;h++)S[3*h]=$[h][0],S[3*h+1]=$[h][1],S[3*h+2]=$[h][2];return[[A.POSITION,new b(O,m,3,!0)],[A.NORMAL,new b(S,g,3,!0)]]}function Js(s,e,n,t,r,u=!0,o=!0){return new U(s,us(e,n,t,r,u,o))}function Ws(s,e,n,t,r,u,o){const i=r?Le(r):R(1,0,0),c=u?Le(u):R(0,0,0);o??(o=!0);const a=V();_(a,i);const l=V();L(l,a,Math.abs(e));const p=V();L(p,l,-.5),C(p,p,c);const v=R(0,1,0);Math.abs(1-He(a,v))<.2&&pe(v,0,0,1);const x=V();k(x,a,v),_(x,x),k(v,x,a);const $=2*t+(o?2:0),f=t+(o?2:0),d=D(3*$),m=D(3*f),g=D(2*$),O=new Array(3*t*(o?4:2)),S=new Array(3*t*(o?4:2));o&&(d[3*($-2)]=p[0],d[3*($-2)+1]=p[1],d[3*($-2)+2]=p[2],g[2*($-2)]=0,g[2*($-2)+1]=0,d[3*($-1)]=d[3*($-2)]+l[0],d[3*($-1)+1]=d[3*($-2)+1]+l[1],d[3*($-1)+2]=d[3*($-2)+2]+l[2],g[2*($-1)]=1,g[2*($-1)+1]=1,m[3*(f-2)]=-a[0],m[3*(f-2)+1]=-a[1],m[3*(f-2)+2]=-a[2],m[3*(f-1)]=a[0],m[3*(f-1)+1]=a[1],m[3*(f-1)+2]=a[2]);const h=(y,z,T)=>{O[y]=z,S[y]=T};let P=0;const M=V(),N=V();for(let y=0;y<t;y++){const z=y*(2*Math.PI/t);L(M,v,Math.sin(z)),L(N,x,Math.cos(z)),C(M,M,N),m[3*y]=M[0],m[3*y+1]=M[1],m[3*y+2]=M[2],L(M,M,n),C(M,M,p),d[3*y]=M[0],d[3*y+1]=M[1],d[3*y+2]=M[2],g[2*y]=y/t,g[2*y+1]=0,d[3*(y+t)]=d[3*y]+l[0],d[3*(y+t)+1]=d[3*y+1]+l[1],d[3*(y+t)+2]=d[3*y+2]+l[2],g[2*(y+t)]=y/t,g[2*y+1]=1;const T=(y+1)%t;h(P++,y,y),h(P++,y+t,y),h(P++,T,T),h(P++,T,T),h(P++,y+t,y),h(P++,T+t,T)}if(o){for(let y=0;y<t;y++){const z=(y+1)%t;h(P++,$-2,f-2),h(P++,y,f-2),h(P++,z,f-2)}for(let y=0;y<t;y++){const z=(y+1)%t;h(P++,y+t,f-1),h(P++,$-1,f-1),h(P++,z+t,f-1)}}const j=[[A.POSITION,new b(d,O,3,!0)],[A.NORMAL,new b(m,S,3,!0)],[A.UV0,new b(g,O,2,!0)]];return new U(s,j)}function Qs(s,e,n,t,r,u){t=t||10,r=r==null||r,re(e.length>1);const o=[[0,0,0]],i=[],c=[];for(let a=0;a<t;a++){i.push([0,-a-1,-(a+1)%t-1]);const l=a/t*2*Math.PI;c.push([Math.cos(l)*n,Math.sin(l)*n])}return hs(s,c,e,o,i,r,u)}function hs(s,e,n,t,r,u,o=R(0,0,0)){const i=e.length,c=D(n.length*i*3+(6*t.length||0)),a=D(n.length*i*3+(t?6:0)),l=new Array,p=new Array;let v=0,x=0;const $=I(),f=I(),d=I(),m=I(),g=I(),O=I(),S=I(),h=I(),P=I(),M=I(),N=I(),j=I(),y=I(),z=Pt();pe(P,0,1,0),F(f,n[1],n[0]),_(f,f),u?(C(h,n[0],o),_(d,h)):pe(d,0,0,1),Fe(f,d,P,P,g,d,Ge),G(m,d),G(j,g);for(let w=0;w<t.length;w++)L(O,g,t[w][0]),L(h,d,t[w][2]),C(O,O,h),C(O,O,n[0]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];a[x++]=-f[0],a[x++]=-f[1],a[x++]=-f[2];for(let w=0;w<r.length;w++)l.push(r[w][0]>0?r[w][0]:-r[w][0]-1+t.length),l.push(r[w][1]>0?r[w][1]:-r[w][1]-1+t.length),l.push(r[w][2]>0?r[w][2]:-r[w][2]-1+t.length),p.push(0),p.push(0),p.push(0);let T=t.length;const ae=t.length-1;for(let w=0;w<n.length;w++){let Re=!1;w>0&&(G($,f),w<n.length-1?(F(f,n[w+1],n[w]),_(f,f)):Re=!0,C(M,$,f),_(M,M),C(N,n[w-1],m),Mt(n[w],M,z),bt(z,Tt(N,$),h)?(F(h,h,n[w]),_(d,h),k(g,M,d),_(g,g)):Fe(M,m,j,P,g,d,Ge),G(m,d),G(j,g)),u&&(C(h,n[w],o),_(y,h));for(let B=0;B<i;B++)if(L(O,g,e[B][0]),L(h,d,e[B][1]),C(O,O,h),_(S,O),a[x++]=S[0],a[x++]=S[1],a[x++]=S[2],C(O,O,n[w]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2],!Re){const ye=(B+1)%i;l.push(T+B),l.push(T+i+B),l.push(T+ye),l.push(T+ye),l.push(T+i+B),l.push(T+i+ye);for(let we=0;we<6;we++){const We=l.length-6;p.push(l[We+we]-ae)}}T+=i}const Ye=n[n.length-1];for(let w=0;w<t.length;w++)L(O,g,t[w][0]),L(h,d,t[w][1]),C(O,O,h),C(O,O,Ye),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];const ge=x/3;a[x++]=f[0],a[x++]=f[1],a[x++]=f[2];const Oe=T-i;for(let w=0;w<r.length;w++)l.push(r[w][0]>=0?T+r[w][0]:-r[w][0]-1+Oe),l.push(r[w][2]>=0?T+r[w][2]:-r[w][2]-1+Oe),l.push(r[w][1]>=0?T+r[w][1]:-r[w][1]-1+Oe),p.push(ge),p.push(ge),p.push(ge);const Je=[[A.POSITION,new b(c,l,3,!0)],[A.NORMAL,new b(a,p,3,!0)]];return new U(s,Je)}function Ks(s,e,n,t){re(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),re(e[0].length===3,"createPolylineGeometry(): malformed vertex"),re(n==null||n.length===e.length,"createPolylineGeometry: need same number of points and normals"),re(n==null||n[0].length===3,"createPolylineGeometry(): malformed normal");const r=$t(3*e.length),u=new Array(2*(e.length-1));let o=0,i=0;for(let a=0;a<e.length;a++){for(let l=0;l<3;l++)r[o++]=e[a][l];a>0&&(u[i++]=a-1,u[i++]=a)}const c=[[A.POSITION,new b(r,u,3,!0)]];if(n){const a=D(3*n.length);let l=0;for(let p=0;p<e.length;p++)for(let v=0;v<3;v++)a[l++]=n[p][v];c.push([A.NORMAL,new b(a,u,3,!0)])}return t&&c.push([A.COLOR,new b(t,Ft(t.length/4),4)]),new U(s,c,null,qe.Line)}function en(s,e,n,t,r,u=0){const o=new Array(18),i=[[-n,u,r/2],[t,u,r/2],[0,e+u,r/2],[-n,u,-r/2],[t,u,-r/2],[0,e+u,-r/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let a=0;a<6;a++)o[3*a]=i[a][0],o[3*a+1]=i[a][1],o[3*a+2]=i[a][2];return new U(s,[[A.POSITION,new b(o,c,3,!0)]])}function tn(s,e){const n=s.getMutableAttribute(A.POSITION).data;for(let t=0;t<n.length;t+=3){const r=n[t],u=n[t+1],o=n[t+2];pe(Q,r,u,o),be(Q,Q,e),n[t]=Q[0],n[t+1]=Q[1],n[t+2]=Q[2]}}function sn(s,e=s){const n=s.attributes,t=n.get(A.POSITION).data,r=n.get(A.NORMAL).data;if(r){const u=e.getMutableAttribute(A.NORMAL).data;for(let o=0;o<r.length;o+=3){const i=r[o+1];u[o+1]=-r[o+2],u[o+2]=i}}if(t){const u=e.getMutableAttribute(A.POSITION).data;for(let o=0;o<t.length;o+=3){const i=t[o+1];u[o+1]=-t[o+2],u[o+2]=i}}}function $e(s,e,n,t,r){return!(Math.abs(He(e,s))>r)&&(k(n,s,e),_(n,n),k(t,n,s),_(t,t),!0)}function Fe(s,e,n,t,r,u,o){return $e(s,e,r,u,o)||$e(s,n,r,u,o)||$e(s,t,r,u,o)}const Ge=.99619469809,Q=I();function nn(s,e){return s==null&&(s=[]),s.push(e),s}function rn(s,e){if(s==null)return null;const n=s.filter(t=>t!==e);return n.length===0?null:n}function on(s,e,n,t,r){le[0]=s.get(e,0),le[1]=s.get(e,1),le[2]=s.get(e,2),Gt(le,q,3),n.set(r,0,q[0]),t.set(r,0,q[1]),n.set(r,1,q[2]),t.set(r,1,q[3]),n.set(r,2,q[4]),t.set(r,2,q[5])}const le=I(),q=new Float32Array(6);export{Us as A,hs as B,Hs as C,Fs as D,Bs as E,_s as G,tn as O,Ds as S,Ss as T,Gs as U,Kt as Z,me as a,Ls as b,us as c,Yt as d,Es as e,zs as f,qs as g,Ws as h,Js as i,Vs as j,ks as k,on as l,sn as m,nn as n,Ms as o,Zt as p,Ys as q,rn as r,Zs as s,Cs as t,js as u,Fe as v,Ks as w,Xs as x,en as y,Qs as z};
