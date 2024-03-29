/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/Filter','sap/ui/model/FilterOperator'],function(q,F,a){"use strict";var O=sap.ui.base.Object.extend("sap.ui.model.odata.Filter",{constructor:function(p,v,A){if(typeof p==="object"){var f=p;p=f.path;v=f.values;A=f.and}this.sPath=p;this.aValues=v;this.bAND=A==undefined?true:A},convert:function(){var f=[];for(var i=0,l=this.aValues&&this.aValues.length||0;i<l;i++){f.push(new F({path:this.sPath,operator:this.aValues[i].operator,value1:this.aValues[i].value1,value2:this.aValues[i].value2}))}if(f.length>1){var o=new F({filters:f,and:this.bAND});return o}else{return f[0]}}});return O},true);
