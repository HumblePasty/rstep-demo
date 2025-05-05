import{dm as Me,kx as We,a0 as Ae,X as x,w as Et,yH as Wt,bK as Vt,x as Bt,oA as kt,yI as Ht,ky as Jt,kA as Qe,ov as Gt,mt as Ke,u5 as Yt,dl as H,el as Je,Z as Ve,mr as Zt,xY as qt,ej as J,dk as xe,bq as Xt,ak as X,bY as Qt,dY as et,mM as Kt,aK as ei,r as g,x0 as ti,qR as ii,nA as ri,vD as pe,_ as ai,b4 as Pe,t$ as si,yJ as ne,oq as Se,e6 as De,yK as V,dj as he,e8 as tt,ea as it,ef as Ie,e9 as ni,tk as oi,mm as li,oo as ci}from"./index-BlU5-B7d.js";import{C as di}from"./computeTranslationToOriginAndRotation-yPeVNk0h.js";import{t as yt,n as pi,r as hi,b as ui}from"./utils-BoAU1MRu.js";import{e as h,E as fi}from"./VertexAttribute-Cq4MnHjR.js";import{t as mi}from"./orientedBoundingBox-DFaJQ2o3.js";import{r as Ot,k as Ge,aJ as vi,aK as gi,aq as At,K as Rt,ar as xt,as as S,o as M,_ as _e,aL as rt,F as Si,f as _i,w as Ye,j as Ti,e as Re,Q as bi,a0 as Ei,I as yi,a as Oi,v as Ai,N as Ri,ab as xi,P as Ci,ac as Di,a6 as Li,U as Pi,V as Ii,ag as at,aM as $i,ai as st,aj as wi,ak as nt,al as Ni,am as Ui,an as zi,ao as Fi,aN as ji,aO as ot,aP as Mi,aQ as Wi,aR as Vi,A as k,at as Bi,af as se,ay as Be,aH as ki,aI as Hi,p as Ji}from"./Texture-C8cAvRx7.js";import{t as Gi}from"./basicInterfaces-CZwQPxTp.js";import{s as Yi,m as Zi}from"./Util-BqVdeNU-.js";import{Y as qi,j as Te}from"./Octree-CuaA4LaV.js";import{M as Xi,b as $e,v as Ct,B as Qi}from"./lineSegment-5FgK9jC-.js";import{H as Ki}from"./InterleavedLayout-C_MP9rFb.js";import{n as G,i as er,e as tr,C as ir,f as lt,h as rr}from"./NormalAttribute.glsl-DbSNCHzp.js";import{E as ct,f as be}from"./enums-D9v74xTE.js";import{B as Ee,g as we,c as dt}from"./renderState-5U5mGt-0.js";import"./BindType-BmZEZMMh.js";import{o as p}from"./interfaces-DDtDqZYj.js";import"./floatRGBA-gvt6ysHL.js";import"./Texture-DZtLfQ5W.js";class va{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function Dt(t){return"array"in t}function ye(t,e,i="ground"){if(yt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Dt(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function ga(t,e,i,r,a,s,l,o,n,c,d){const m=pr[d.mode];let v,f,O=0;if(Me(t,e,i,r,n.spatialReference,a,o))return m!=null&&m.requiresAlignment(d)?(O=m.applyElevationAlignmentBuffer(r,a,s,l,o,n,c,d),v=s,f=l):(v=r,f=a),Me(v,n.spatialReference,f,s,c.spatialReference,l,o)?O:void 0}function Lt(t,e,i,r,a){const s=(yt(t)?t.z:Dt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=ye(e,t,"ground")??0;return a.verticalDistanceToGround=0,a.sampledElevation=l,void(a.z=l)}case"relative-to-ground":{const l=ye(e,t,"ground")??0,o=i.geometryZWithOffset(s,r);return a.verticalDistanceToGround=o,a.sampledElevation=l,void(a.z=o+l)}case"relative-to-scene":{const l=ye(e,t,"scene")??0,o=i.geometryZWithOffset(s,r);return a.verticalDistanceToGround=o,a.sampledElevation=l,void(a.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(s,r),o=ye(e,t,"ground")??0;return a.verticalDistanceToGround=l-o,a.sampledElevation=o,void(a.z=l)}default:return void(a.z=0)}}function Sa(t,e,i,r){return Lt(t,e,i,r,oe),oe.z}function _a(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:ke.UPDATE:t.onTheGroundChanged}function Ta(t){return t==="relative-to-ground"||t==="relative-to-scene"}function ba(t){return t!=="absolute-height"}function Ea(t,e,i,r,a){Lt(e,i,a,r,oe),ar(t,oe.verticalDistanceToGround);const s=oe.sampledElevation,l=We(hr,t.transformation);return Oe[0]=e.x,Oe[1]=e.y,Oe[2]=oe.z,di(e.spatialReference,Oe,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function ar(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function sr(t,e,i,r,a,s){let l=0;const o=s.spatialReference;e*=3,r*=3;for(let n=0;n<a;++n){const c=t[e],d=t[e+1],m=t[e+2],v=s.getElevation(c,d,m,o,"ground")??0;l+=v,i[r]=c,i[r+1]=d,i[r+2]=v,e+=3,r+=3}return l/a}function nr(t,e,i,r,a,s,l,o){let n=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=s.spatialReference;e*=3,r*=3;for(let v=0;v<a;++v){const f=t[e],O=t[e+1],E=t[e+2],A=s.getElevation(f,O,E,m,"ground")??0;n+=A,i[r]=f,i[r+1]=O,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return n/a}function or(t,e,i,r,a,s,l,o){let n=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=s.spatialReference;e*=3,r*=3;for(let v=0;v<a;++v){const f=t[e],O=t[e+1],E=t[e+2],A=s.getElevation(f,O,E,m,"scene")??0;n+=A,i[r]=f,i[r+1]=O,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return n/a}function lr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function cr(t,e,i,r,a,s,l,o){const n=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<a;++d){const m=t[e],v=t[e+1],f=t[e+2];i[r]=m,i[r+1]=v,i[r+2]=c==null?f+n:n,e+=3,r+=3}return 0}class dr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var ke;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(ke||(ke={}));const pr={"absolute-height":{applyElevationAlignmentBuffer:cr,requiresAlignment:lr},"on-the-ground":{applyElevationAlignmentBuffer:sr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:nr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:or,requiresAlignment:()=>!0}},hr=Ae(),oe=new dr,Oe=x(),ur=()=>Et.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function fr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function ya(t,e,i,r){const a=t==null?void 0:t.expression;if(typeof a!="string")return null;const s=Sr(a);if(s!=null)return{cachedResult:s};const l=await Vt();Bt(i);const o=l.arcadeUtils,n=o.createSyntaxTree(a);return o.dependsOnView(n)?(r!=null&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(n),context:o.createExecContext(null,{sr:e}),modules:l}}}function mr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function vr(t,e){if(t!=null&&!Pt(t)){if(!e||!t.arcade)return void ur().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=Wt(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function gr(t){if(t!=null){if(Pt(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function Oa(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const r=i==null?void 0:i.expression;return e||r==="0"||(i=null),i??null}const Aa={cachedResult:0};function Pt(t){return t.cachedResult!=null}function Sr(t){return t==="0"?0:null}let Ra=class It{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=kt(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=gr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Ht(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const a=e==null?void 0:e.arcade;a&&i!=null&&r!=null?(this._featureExpressionInfoContext=fr(e),vr(this._featureExpressionInfoContext,mr(a.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new It;return e!=null&&i.setFromElevationInfo(e),i}},_r=class extends Ot{get geometries(){return this._geometries}get transformation(){return this._transformation??Jt}set transformation(e){this._transformation=We(this._transformation??Ae(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?We(this._shaderTransformation??Ae(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ge.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new $t),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Yi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),fi(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new vi;for(const i of this._geometries)i.occludees=pi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=hi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new gi(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Gi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return Qe(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Ae()){return Qe(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new pt,this._validateBoundingVolume(this._bvWorldSpace,ue.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new pt,this._validateBoundingVolume(this._bvObjectSpace,ue.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===ue.ObjectSpace;for(const a of this._geometries){const s=a.boundingInfo;s&&Tr(s,e,r?a.transformation:this.getCombinedShaderTransformation(a))}Gt(Ke(e.bounds),e.min,e.max,.5);for(const a of this._geometries){const s=a.boundingInfo;if(s==null)continue;const l=r?a.transformation:this.getCombinedShaderTransformation(a),o=Yt(l);H(ht,s.center,l);const n=Je(ht,Ke(e.bounds)),c=s.radius*o;e.bounds[3]=Math.max(e.bounds[3],n+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class $t{constructor(){this.min=Ve(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Ve(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class pt extends $t{constructor(){super(...arguments),this.bounds=Zt()}}function Tr(t,e,i){const r=t.bbMin,a=t.bbMax;if(qt(i)){const s=J(br,i[12],i[13],i[14]);xe(F,r,s),xe(j,a,s);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(H(F,r,i),Xt(r,a))for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],F[s]),e.max[s]=Math.max(e.max[s],F[s]);else{H(j,a,i);for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],F[s],j[s]),e.max[s]=Math.max(e.max[s],F[s],j[s]);for(let s=0;s<3;++s){X(F,r),X(j,a),F[s]=a[s],j[s]=r[s],H(F,F,i),H(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l],j[l]),e.max[l]=Math.max(e.max[l],F[l],j[l])}}}const br=x(),F=x(),j=x(),ht=x();var ue;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(ue||(ue={}));const Er=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var Ce;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Ce||(Ce={}));let yr=class extends Ot{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Ge.Layer,this.events=new Qt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new et,this._handles=new Kt,this._objects=new et,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??Ce.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const a of Er)this._handles.add(this.events.on(a,s=>e.handleEvent(a,s)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==Ce.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new qi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ei(this._octree),this._objectsAdded.clear()}};var ut,ft,mt;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(ut||(ut={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(ft||(ft={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(mt||(mt={}));let Or=class{constructor(e,i){this.vec3=e,this.id=i}};function vt(t,e,i,r){return new Or(Ve(t,e,i),r)}var ie,fe;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ie||(ie={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(fe||(fe={}));class U extends At{constructor(){super(...arguments),this.space=ie.Screen,this.anchor=fe.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=Rt.None,this.emissionSource=xt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ie.Draped}}g([S({count:ie.COUNT})],U.prototype,"space",void 0),g([S({count:fe.COUNT})],U.prototype,"anchor",void 0),g([S()],U.prototype,"occluder",void 0),g([S()],U.prototype,"hasSlicePlane",void 0),g([S()],U.prototype,"writeDepth",void 0),g([S()],U.prototype,"hideOnShortSegments",void 0),g([S()],U.prototype,"hasCap",void 0),g([S()],U.prototype,"hasTip",void 0),g([S()],U.prototype,"vvSize",void 0),g([S()],U.prototype,"vvColor",void 0),g([S()],U.prototype,"vvOpacity",void 0),g([S()],U.prototype,"hasOccludees",void 0),g([S()],U.prototype,"terrainDepthTest",void 0),g([S()],U.prototype,"cullAboveTerrain",void 0);const gt=8;function Ar(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new _e("vvSizeMinSize",r=>r.vvSize.minSize),new _e("vvSizeMaxSize",r=>r.vvSize.maxSize),new _e("vvSizeOffset",r=>r.vvSize.offset),new _e("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new rt("vvOpacityValues",r=>r.vvOpacity.values,gt),new rt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,gt)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(Si,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function wt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function Rr(t){if(t==null)return 1;const e=wt(t);return Math.floor(e.reduce((i,r)=>i+r))}function xr(t){return wt(t).reduce((e,i)=>Math.max(e,i))}function Cr(t){return t==null?ti:t.length===4?t:ii(Dr,t[0],t[1],t[2],1)}const Dr=ri();function Lr(t,e){e.stippleEnabled?Pr(t,e):Ir(t)}function Pr(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:a}=t;a.include(ui),e.draped||(_i(r,e),r.uniforms.add(new M("worldToScreenPerDistanceRatio",(s,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${wr};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Ye(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),a.uniforms.add(new Ti("stipplePatternTexture",s=>s.stippleTexture),new M("stipplePatternSDFNormalizer",s=>$r(s.stipplePattern)),new M("stipplePatternPixelSizeInv",s=>1/Nt(s))),a.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(a.uniforms.add(new Re("stippleOffColor",s=>Cr(s.stippleOffColor))),a.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):a.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Ir(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function $r(t){return t?(Math.floor(.5*(xr(t)-1))+.5)/t.pixelRatio:1}function Nt(t){const e=t.stipplePattern;return e?Rr(t.stipplePattern)/e.pixelRatio:1}const wr=p.float(.4),Ut=64,Nr=Ut/2,Ur=Nr/5,zr=Ut/Ur,La=.25;function Fr(t,e){const i=t.vertex;Ye(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",zr).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ie.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(r,a)=>a.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var re;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(re||(re={}));class y extends At{constructor(){super(...arguments),this.capType=re.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=Rt.None,this.emissionSource=xt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}g([S({count:re.COUNT})],y.prototype,"capType",void 0),g([S()],y.prototype,"hasSlicePlane",void 0),g([S()],y.prototype,"hasPolygonOffset",void 0),g([S()],y.prototype,"writeDepth",void 0),g([S()],y.prototype,"draped",void 0),g([S()],y.prototype,"stippleEnabled",void 0),g([S()],y.prototype,"stippleOffColorEnabled",void 0),g([S()],y.prototype,"stipplePreferContinuous",void 0),g([S()],y.prototype,"roundJoins",void 0),g([S()],y.prototype,"applyMarkerOffset",void 0),g([S()],y.prototype,"vvSize",void 0),g([S()],y.prototype,"vvColor",void 0),g([S()],y.prototype,"vvOpacity",void 0),g([S()],y.prototype,"falloffEnabled",void 0),g([S()],y.prototype,"innerColorEnabled",void 0),g([S()],y.prototype,"hasOccludees",void 0),g([S()],y.prototype,"occluder",void 0),g([S()],y.prototype,"terrainDepthTest",void 0),g([S()],y.prototype,"cullAboveTerrain",void 0),g([S()],y.prototype,"wireframe",void 0),g([S()],y.prototype,"discardInvisibleFragments",void 0),g([S()],y.prototype,"objectAndLayerIdColorInstanced",void 0);const me=1;function zt(t){const e=new bi,{attributes:i,varyings:r,vertex:a,fragment:s}=e,{applyMarkerOffset:l,draped:o,output:n,capType:c,stippleEnabled:d,falloffEnabled:m,roundJoins:v,wireframe:f,innerColorEnabled:O}=t;e.include(Ei),e.include(Ar,t),e.include(Lr,t),e.include(yi,t);const E=l&&!o;E&&(a.uniforms.add(new M("markerScale",_=>_.markerScale)),e.include(Fr,{space:ie.World})),Oi(a,t),a.uniforms.add(new Ai("inverseProjectionMatrix",(_,u)=>u.camera.inverseProjectionMatrix),new Ri("nearFar",(_,u)=>u.camera.nearFar),new M("miterLimit",_=>_.join!=="miter"?0:_.miterLimit),new Re("viewport",(_,u)=>u.camera.fullViewport)),a.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=t.terrainDepthTest&&n===G.Color;A&&r.add("depth","float");const D=d;D&&r.add("vLineSizeInv","float");const b=c===re.ROUND,N=d&&b,T=m||N;T&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),a.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),a.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),a.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Ye(a),a.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${D?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),E&&a.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),a.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&a.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),a.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v?a.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((me+2)/(me+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):a.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const P=c!==re.BUTT;return a.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${P?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),a.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${T?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&a.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?a.uniforms.add(new M("worldToScreenRatio",(_,u)=>1/u.screenToPCSRatio)):a.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?a.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):a.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),a.uniforms.add(new M("stipplePatternPixelSize",_=>Nt(_))),a.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),a.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&e.include(xi,t),e.include(Ci,t),e.include(Di,t),s.include(Li),s.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?s.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&s.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(pe)}) {
          discard;
        }
      `),N?s.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(pe)}, stippleCoverage);
      `):s.main.add(p`float stippleAlpha = getStippleAlpha();`),n!==G.ObjectAndLayerIdColor&&s.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(pe)});`),s.uniforms.add(new Re("intrinsicColor",_=>_.color)),s.main.add(p`vec4 color = intrinsicColor * vColor;`),O&&(s.uniforms.add(new Re("innerColor",_=>_.innerColor??_.color),new M("innerWidth",(_,u)=>_.innerWidth*u.camera.pixelRatio)),s.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),s.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),m&&(s.uniforms.add(new M("falloff",_=>_.falloff)),s.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||s.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),s.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const jr=Object.freeze(Object.defineProperty({__proto__:null,build:zt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));class Mr extends Pi{constructor(e,i,r){super(e,i,new Ii(jr,()=>ai(()=>Promise.resolve().then(()=>Xr),void 0,import.meta.url)),r,Ft),this.primitiveType=i.wireframe?ct.LINES:ct.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:a,hasOccludees:s,hasPolygonOffset:l}=e,o=r===at.NONE,n=r===at.FrontFace;return Ee({blending:e.output===G.Color?Fi(r):null,depthTest:{func:zi(r)},depthWrite:Ui(e),drawBuffers:a===G.Depth?{buffers:[be.NONE]}:Ni(r,a),colorWrite:we,stencilWrite:s?nt:null,stencilTest:s?i?st:wi:null,polygonOffset:o||n?l?St:null:$i})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?St:null;this._occluderPipelineTransparent=Ee({blending:dt,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:ji,drawBuffers:e.output===G.Depth?{buffers:[be.NONE]}:null}),this._occluderPipelineOpaque=Ee({blending:dt,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:Wi,stencilTest:Mi,drawBuffers:e.output===G.Depth?{buffers:[be.NONE]}:null}),this._occluderPipelineMaskWrite=Ee({blending:null,polygonOffset:i,depthTest:Vi,depthWrite:null,colorWrite:null,stencilWrite:nt,stencilTest:st,drawBuffers:e.output===G.Depth?{buffers:[be.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const St={factor:0,units:-4},Ft=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var z;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(z||(z={}));class Wr extends Bi{constructor(e){super(e,Br),this._configuration=new y,this.vertexAttributeLocations=Ft,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>er(i)||tr(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>ir(i)],[k.OCCLUDER_MATERIAL,i=>lt(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>lt(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===G.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===G.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>rr(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==G.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Hr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===se.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=pe||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>pe}intersectDraped({attributes:e,screenToWorldRatio:i},r,a,s,l,o){if(!a.options.selectionMode)return;const n=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const D=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+D*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(c*=n.data[0]);const d=s[0],m=s[1],v=(c/2+4)*i;let f=Number.MAX_VALUE,O=0;const E=e.get(h.POSITION).data,A=He(this.parameters,e)?E.length-2:E.length-5;for(let D=0;D<A;D+=3){const b=E[D],N=E[D+1],T=(D+3)%E.length,P=d-b,_=m-N,u=E[T]-b,q=E[T+1]-N,L=Pe((u*P+q*_)/(u*u+q*q),0,1),ae=u*L-P,I=q*L-_,Q=ae*ae+I*I;Q<f&&(f=Q,O=D/3)}f<v*v&&l(o.dist,o.normal,O,!1)}intersect(e,i,r,a,s,l){if(!r.options.selectionMode||!e.visible)return;if(!Zi(i))return void Et.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,n=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,m=Jr;si(m,r.point);const v=c*d.pixelRatio/2+4*d.pixelRatio;J(de[0],m[0]-v,m[1]+v,0),J(de[1],m[0]+v,m[1]+v,0),J(de[2],m[0]+v,m[1]-v,0),J(de[3],m[0]-v,m[1]-v,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],Z[b]))return;Se(d.eye,Z[0],Z[1],Ue),Se(d.eye,Z[1],Z[2],ze),Se(d.eye,Z[2],Z[3],Fe),Se(d.eye,Z[3],Z[0],je);let f=Number.MAX_VALUE,O=0;const E=He(this.parameters,o)?n.length-2:n.length-5;for(let b=0;b<E;b+=3){$[0]=n[b]+i[12],$[1]=n[b+1]+i[13],$[2]=n[b+2]+i[14];const N=(b+3)%n.length;if(w[0]=n[N]+i[12],w[1]=n[N+1]+i[13],w[2]=n[N+2]+i[14],V(Ue,$)<0&&V(Ue,w)<0||V(ze,$)<0&&V(ze,w)<0||V(Fe,$)<0&&V(Fe,w)<0||V(je,$)<0&&V(je,w)<0)continue;if(d.projectToRenderScreen($,ee),d.projectToRenderScreen(w,te),ee[2]<0&&te[2]>0){he(B,$,w);const P=d.frustum,_=-V(P[Te.NEAR],$)/tt(B,it(P[Te.NEAR]));Ie(B,B,_),xe($,$,B),d.projectToRenderScreen($,ee)}else if(ee[2]>0&&te[2]<0){he(B,w,$);const P=d.frustum,_=-V(P[Te.NEAR],w)/tt(B,it(P[Te.NEAR]));Ie(B,B,_),xe(w,w,B),d.projectToRenderScreen(w,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const T=Xi($e(ee,te,bt),m);T<f&&(f=T,X(_t,$),X(Tt,w),O=b/3)}const A=r.rayBegin,D=r.rayEnd;if(f<v*v){let b=Number.MAX_VALUE;if(Qi($e(_t,Tt,bt),$e(A,D,Gr),K)){he(K,K,A);const N=ni(K);Ie(K,K,1/N),b=N/Je(A,D)}l(b,K,O,!1)}}get _layout(){const e=Ki().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Be()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new kr(this._layout,this.parameters)}createGLMaterial(e){return new Vr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Vr extends Hi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Mr,e)}}class Br extends ki{constructor(){super(...arguments),this.width=0,this.color=oi,this.join="miter",this.cap=re.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class kr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=me+r}}_isClosed(e){return He(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,a=this._isClosed(e);let s=a?2:2*2;return s+=((a?r:r-1)-(a?0:1))*(2*this.numJoinSubdivisions+4),s+=2,this._parameters.wireframe&&(s=2+4*(s-2)),s}write(e,i,r,a,s,l){var Ze,qe,Xe;const o=Yr,n=Zr,c=qr,d=r.get(h.POSITION),m=d.indices,v=d.data.length/3,f=(Ze=r.get(h.DISTANCETOSTART))==null?void 0:Ze.data;m&&m.length!==2*(v-1)&&console.warn("RibbonLineMaterial does not support indices");const O=((qe=r.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:qe.data[0])??((Xe=r.get(h.SIZE))==null?void 0:Xe.data[0])??1;let E=[1,1,1,1],A=0;const D=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);D?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(E=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(s.buffer),P=Be()?new Uint8Array(s.buffer):null,_=this.vertexBufferLayout.stride/4;let u=l*_;const q=u;let L=0;const ae=f?(R,W,Y)=>L=f[Y]:(R,W,Y)=>L+=Je(R,W),I=(R,W,Y,ce,ve,jt,Mt)=>{if(T[u++]=W[0],T[u++]=W[1],T[u++]=W[2],T[u++]=R[0],T[u++]=R[1],T[u++]=R[2],T[u++]=Y[0],T[u++]=Y[1],T[u++]=Y[2],T[u++]=ce,T[u++]=Mt,T[u++]=ve,T[u++]=O,D)T[u++]=A;else{const ge=Math.min(4*jt,E.length-4);T[u++]=E[ge],T[u++]=E[ge+1],T[u++]=E[ge+2],T[u++]=E[ge+3]}b&&(T[u++]=N),Be()&&(a&&(P[4*u]=a[0],P[4*u+1]=a[1],P[4*u+2]=a[2],P[4*u+3]=a[3]),u++)};u+=_,J(n,d.data[0],d.data[1],d.data[2]),e&&H(n,n,e);const Q=this._isClosed(r);if(Q){const R=d.data.length-3;J(o,d.data[R],d.data[R+1],d.data[R+2]),e&&H(o,o,e)}else J(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),I(n,n,c,1,z.LEFT_CAP_START,0,0),I(n,n,c,1,z.RIGHT_CAP_START,0,0),X(o,n),X(n,c);const Le=Q?0:1,le=Q?v:v-1;for(let R=Le;R<le;R++){const W=(R+1)%v*3;J(c,d.data[W],d.data[W+1],d.data[W+2]),e&&H(c,c,e),ae(o,n,R),I(o,n,c,0,z.LEFT_JOIN_END,R,L),I(o,n,c,0,z.RIGHT_JOIN_END,R,L);const Y=this.numJoinSubdivisions;for(let ce=0;ce<Y;++ce){const ve=(ce+1)/(Y+1);I(o,n,c,ve,z.LEFT_JOIN_END,R,L),I(o,n,c,ve,z.RIGHT_JOIN_END,R,L)}I(o,n,c,1,z.LEFT_JOIN_START,R,L),I(o,n,c,1,z.RIGHT_JOIN_START,R,L),X(o,n),X(n,c)}Q?(J(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),L=ae(o,n,le),I(o,n,c,0,z.LEFT_JOIN_END,Le,L),I(o,n,c,0,z.RIGHT_JOIN_END,Le,L)):(L=ae(o,n,le),I(o,n,n,0,z.LEFT_CAP_END,le,L),I(o,n,n,0,z.RIGHT_CAP_END,le,L)),Ne(T,q+_,T,q,_),u=Ne(T,u-_,T,u,_),this._parameters.wireframe&&this._addWireframeVertices(s,q,u,_)}_addWireframeVertices(e,i,r,a){const s=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const n=c=>o=Ne(l,c,s,o,a);for(let c=0;c<l.length-1;c+=2*a)n(c),n(c+2*a),n(c+1*a),n(c+2*a),n(c+1*a),n(c+3*a)}}function Ne(t,e,i,r,a){for(let s=0;s<a;s++)i[r++]=t[e++];return r}function He(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Hr(t){return t.anchor===fe.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const $=x(),w=x(),B=x(),K=x(),Jr=x(),ee=ne(),te=ne(),_t=x(),Tt=x(),bt=Ct(),Gr=Ct(),Yr=x(),Zr=x(),qr=x(),de=[ne(),ne(),ne(),ne()],Z=[x(),x(),x(),x()],Ue=De(),ze=De(),Fe=De(),je=De();class Pa{constructor(e){this._originSR=e,this._rootOriginId="root/"+li(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=vt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,a=Math.round(e[0]/r),s=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${a}/${s}/${l}`;let n=this._origins.get(o);const c=.5*r;if(he(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(n){const d=Math.max(...C);if(he(C,e,n.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return n}return i}return n||(n=vt(a*r,s*r,l*r,o),this._origins.set(o,n)),n}_drawOriginBox(e,i=ci(1,1,0,1)){const r=window.view,a=r._stage,s=i.toString();if(!this._objects.has(s)){this._material=new Wr({width:2,color:i}),a.add(this._material);const f=new yr(a,{pickable:!1}),O=new _r({castShadow:!1});a.add(O),f.add(O),this._objects.set(s,O)}const l=this._objects.get(s),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=o.length,c=new Array(3*n),d=new Array,m=.5*this._gridSize;for(let f=0;f<n;f++)c[3*f]=e[0]+(1&o[f]?m:-m),c[3*f+1]=e[1]+(2&o[f]?m:-m),c[3*f+2]=e[2]+(4&o[f]?m:-m),f>0&&d.push(f-1,f);Me(c,this._originSR,0,c,r.renderSpatialReference,0,n);const v=new Ji(this._material,[[h.POSITION,new mi(c,d,3,!0)]],null,Ge.Line);a.add(v),l.addGeometry(v)}get test(){}}const C=x(),Xr=Object.freeze(Object.defineProperty({__proto__:null,build:zt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));export{_r as A,U as B,Ce as C,re as D,ar as E,Sa as F,ye as G,dr as R,Wr as W,Pa as _,mt as a,ft as b,Lt as c,ke as d,ut as e,Aa as f,Ta as g,Oa as h,ya as i,yr as j,ba as k,vr as l,_a as m,ie as n,Ra as o,Ea as p,Ar as q,va as r,mr as s,vt as t,ga as u,Fr as v,fe as w,Ut as x,Nr as y,La as z};
