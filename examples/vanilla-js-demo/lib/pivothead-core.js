(function(i,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(i=typeof globalThis<"u"?globalThis:i||self,a(i.PivotheadCore={}))})(this,function(i){"use strict";function a(n,t){return[...n].sort((e,s)=>{const o=e[t.field],h=s[t.field];return o<h?t.direction==="asc"?-1:1:o>h?t.direction==="asc"?1:-1:0})}function r(n,t=null){let e=[...n.data];return t&&(e=a(e,t)),e}class d{constructor(t){this.config=t,this.state={data:r(t),sortConfig:null,rowSizes:this.initializeRowSizes(t.data)}}initializeRowSizes(t){return t.map((e,s)=>({index:s,height:40}))}sort(t,e){this.state.sortConfig={field:t,direction:e},this.applySort()}applySort(){this.state.data=r(this.config,this.state.sortConfig),this.state.rowSizes=this.state.data.map((t,e)=>this.state.rowSizes[e]||{index:e,height:40})}getState(){return{...this.state}}reset(){this.state.sortConfig=null,this.state.data=r(this.config),this.state.rowSizes=this.initializeRowSizes(this.config.data)}resizeRow(t,e){const s=this.state.rowSizes.findIndex(o=>o.index===t);s!==-1&&(this.state.rowSizes[s].height=Math.max(20,e))}}i.PivotEngine=d,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
