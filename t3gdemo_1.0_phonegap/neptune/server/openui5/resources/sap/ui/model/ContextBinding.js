/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global','./Binding'],function(q,B){"use strict";var C=B.extend("sap.ui.model.ContextBinding",{constructor:function(m,p,c,P,e){B.call(this,m,p,c,P,e);this.oElementContext=null;this.bInitial=true},metadata:{publicMethods:["getElementContext"]}});C.prototype.checkUpdate=function(f){};C.prototype.getBoundContext=function(c){return this.oElementContext};return C},true);
