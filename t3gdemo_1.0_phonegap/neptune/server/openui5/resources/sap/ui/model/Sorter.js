/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var S=sap.ui.base.Object.extend("sap.ui.model.Sorter",{constructor:function(p,d,g){if(typeof p==="object"){var s=p;p=s.path;d=s.descending;g=s.group}this.sPath=p;var i=this.sPath.indexOf(">");if(i>0){this.sPath=this.sPath.substr(i+1)}this.bDescending=d;this.vGroup=g;if(typeof g=="boolean"&&g){this.fnGroup=function(c){return c.getProperty(this.sPath)}}if(typeof g=="function"){this.fnGroup=g}}});return S},true);
