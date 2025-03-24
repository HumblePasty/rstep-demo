import{iY as u}from"./index-BI30NJEZ.js";import{o as i}from"./interfaces-DDtDqZYj.js";import{e as c}from"./VertexAttribute-Cq4MnHjR.js";var e;function S(r){return r===e.Shadow||r===e.ShadowHighlight||r===e.ShadowExcludeHighlight||r===e.ViewshedShadow}function b(r){return f(r)||r===e.Normal}function N(r){return g(r)||r===e.Normal}function a(r){return r===e.Highlight||r===e.ObjectAndLayerIdColor}function O(r){return t(r)||a(r)}function t(r){return r===e.Color}function l(r){return t(r)||v(r)}function H(r){return t(r)||r===e.ObjectAndLayerIdColor}function s(r){return t(r)||r===e.Highlight}function A(r){return s(r)||n(r)}function h(r){return t(r)||a(r)}function m(r){return l(r)||a(r)}function f(r){return h(r)||n(r)}function g(r){return m(r)||n(r)}function n(r){return r===e.Depth}function v(r){return r===e.ColorEmission}(function(r){r[r.Color=0]="Color",r[r.ColorEmission=1]="ColorEmission",r[r.Depth=2]="Depth",r[r.Normal=3]="Normal",r[r.Shadow=4]="Shadow",r[r.ShadowHighlight=5]="ShadowHighlight",r[r.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",r[r.ViewshedShadow=7]="ViewshedShadow",r[r.Highlight=8]="Highlight",r[r.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",r[r.COUNT=10]="COUNT"})(e||(e={}));function x(r,d){switch(d.normalType){case o.Compressed:r.attributes.add(c.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:r.attributes.add(c.NORMAL,"vec3"),r.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:r.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:u(d.normalType);case o.COUNT:}}var o;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"})(o||(o={}));export{n as C,v as S,o as a,N as b,h as c,A as d,t as e,f,O as h,a as i,H as l,e as n,S as o,b as r,x as t,l as u};
