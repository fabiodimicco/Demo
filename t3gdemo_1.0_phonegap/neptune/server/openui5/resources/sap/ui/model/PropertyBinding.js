/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global','./Binding','./SimpleType'],function(q,B,S){"use strict";var P=B.extend("sap.ui.model.PropertyBinding",{constructor:function(m,p,c,a){B.apply(this,arguments)},metadata:{"abstract":true,publicMethods:["getValue","setValue","setType","getType","setFormatter","getFormatter","getExternalValue","setExternalValue","getBindingMode"]}});P.prototype.getExternalValue=function(){var v=this.getValue();if(this.oType){v=this.oType.formatValue(v,this.sInternalType)}if(this.fnFormatter){v=this.fnFormatter(v)}return v};P.prototype.setExternalValue=function(v){if(this.fnFormatter){return}if(this.oType){v=this.oType.parseValue(v,this.sInternalType);this.oType.validateValue(v)}this.setValue(v)};P.prototype.setType=function(t,i){this.oType=t;this.sInternalType=i};P.prototype.getType=function(){return this.oType};P.prototype.setFormatter=function(f){this.fnFormatter=f};P.prototype.getFormatter=function(){return this.fnFormatter};P.prototype.getBindingMode=function(){return this.sMode};P.prototype.setBindingMode=function(b){this.sMode=b};return P},true);
