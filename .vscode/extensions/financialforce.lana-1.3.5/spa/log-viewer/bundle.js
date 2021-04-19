const t=document.createElement("div");function e(e){return e?(t.innerHTML=e,t.innerText):e}function n(e,n){const i=function(e){return e?(t.innerText=e,t.innerHTML):e}(e);return n?"<b>"+i+"</b>":i}function i(t){const e=String(~~(t/1e3)),n=e.length<4?"0000".substr(e.length)+e:e;return n.substring(0,n.length-3)+"."+n.substr(n.length-3)+"ms"}function o(t){const e=document.querySelector(".tabHolder"),n=document.getElementById(t),i=document.querySelector(".tabber"),o=n.dataset.show,s=o?document.getElementById(o):null;e.querySelectorAll(".tab").forEach(t=>t.classList.remove("selected")),n.classList.add("selected"),i.querySelectorAll(".tabItem").forEach(t=>t.classList.remove("selected")),s&&s.classList.add("selected")}function s(t){const e=t.children;t.netDuration=t.duration=t.exitStamp-t.timestamp;for(let n=0;n<e.length;++n){const i=e[n].duration;i&&(t.netDuration-=i)}}const r=/^[A-Z_]*$/,a={error:"rgba(255, 128, 128, 0.2)",skip:"rgba(128, 255, 128, 0.2)",unexpected:"rgba(128, 128, 255, 0.2)"};let l,c,d,p;function u(t,e,n){p[e]||(p[e]=!0,d.push({reason:e,timestamp:t,color:a[n]}))}function m(t){const e=t.match(/\[(\w*)\]/)[1],n=Number(e);return isNaN(n)?e:n}function h(t){const e=t.match(/Rows:(\d+)/)[1];return Number(e)}function E(t){this.lineNumber=m(t[2]),this.text=e(t[4])||this.type,"System.Type.forName(String, String)"===this.text&&(this.cpuType="loading")}function f(t){this.lineNumber=m(t[2])}function T(t){this.lineNumber=m(t[2]),this.text=e(t[3])}function y(t){this.text=t[3],this.group=this.type}function x(t){this.lineNumber=m(t[2])}function g(t){this.text=t[2]}function _(t){this.lineNumber=m(t[2]),this.text=t[3],this.group=this.type,this.value=t[4]}function N(t){this.lineNumber=m(t[2]),this.text=this.type+":"+t[3]+" "+t[4],this.group=this.type}function L(t){this.text=t[3],this.group=this.type}function I(t){}const C={ROOT:{},CONSTRUCTOR_ENTRY:{exitTypes:["CONSTRUCTOR_EXIT"],displayType:"method",hasLineNumber:!0,cpuType:"method",suffix:" (constructor)",timelineKey:"method",parse:function(t){this.lineNumber=m(t[2]),this.text=e(t[5]+t[4])},classes:"node"},CONSTRUCTOR_EXIT:{parse:f},METHOD_ENTRY:{exitTypes:["METHOD_EXIT"],displayType:"method",hasLineNumber:!0,cpuType:"method",timelineKey:"method",parse:E,classes:"node"},METHOD_EXIT:{parse:f},SYSTEM_CONSTRUCTOR_ENTRY:{exitTypes:["SYSTEM_CONSTRUCTOR_EXIT"],displayType:"method",hasLineNumber:!0,cpuType:"method",namespace:"system",suffix:" (system constructor)",timelineKey:"systemMethod",parse:T,classes:"node system"},SYSTEM_CONSTRUCTOR_EXIT:{parse:f},SYSTEM_METHOD_ENTRY:{exitTypes:["SYSTEM_METHOD_EXIT"],displayType:"method",hasLineNumber:!0,cpuType:"method",namespace:"system",timelineKey:"systemMethod",parse:T,classes:"node system"},SYSTEM_METHOD_EXIT:{parse:f},CODE_UNIT_STARTED:{exitTypes:["CODE_UNIT_FINISHED"],displayType:"method",hasLineNumber:!1,suffix:" (entrypoint)",timelineKey:"codeUnit",parse:function(t){const e=t[3].split(":"),n=t[4]||t[3];switch(e[0]){case"EventService":this.cpuType="method",this.namespace=function(t){const e=t.indexOf("__");return e<0?"unmanaged":t.substring(0,e)}(e[1]),this.group="EventService "+this.namespace,this.text=t[3];break;case"Validation":this.cpuType="custom",this.declarative=!0,this.group="Validation",this.text=n||e[0]+":"+e[1];break;case"Workflow":this.cpuType="custom",this.declarative=!0,this.group="Workflow",this.text=n||e[0];break;default:this.cpuType="method",n&&n.startsWith("VF:")&&(this.namespace=function(t){const e=t.indexOf("__");if(e<0)return"unmanaged";const n=t.indexOf("/");if(n<0)return"unmanaged";const i=t.indexOf("/",n+1);return i<0?"unmanaged":t.substring(i+1,e)}(n)),this.text=n||t[3]}},classes:"node"},CODE_UNIT_FINISHED:{parse:g},VF_APEX_CALL_START:{exitTypes:["VF_APEX_CALL_END"],displayType:"method",hasLineNumber:!0,cpuType:"method",suffix:" (VF APEX)",parse:E,classes:"node"},VF_APEX_CALL_END:{parse:g},VF_EVALUATE_FORMULA_BEGIN:{exitTypes:["VF_EVALUATE_FORMULA_END"],cpuType:"custom",suffix:" (VF FORMULA)",parse:y,classes:"node formula"},VF_EVALUATE_FORMULA_END:{parse:g},VF_SERIALIZE_VIEWSTATE_BEGIN:{exitTypes:["VF_SERIALIZE_VIEWSTATE_END"],displayType:"method",cpuType:"method",namespace:"system",timelineKey:"systemMethod",parse:function(t){this.text=this.type}},VF_SERIALIZE_VIEWSTATE_END:{parse:I,text:""},DML_BEGIN:{exitTypes:["DML_END"],displayType:"method",hasLineNumber:!0,cpuType:"free",timelineKey:"dml",parse:function(t){this.group="DML",this.lineNumber=m(t[2]),this.text="DML "+t[3]+" "+t[4],this.rowCount=h(t[5])}},DML_END:{parse:function(t){this.lineNumber=m(t[2])},text:""},SOQL_EXECUTE_BEGIN:{exitTypes:["SOQL_EXECUTE_END"],displayType:"method",hasLineNumber:!0,cpuType:"free",timelineKey:"soql",parse:function(t){this.group="SOQL",this.lineNumber=m(t[2]),this.text="SOQL: "+t[3]+" - "+t[4]},onEnd:function(t){this.rowCount=t.rowCount}},SOQL_EXECUTE_END:{parse:function(t){this.lineNumber=m(t[2]),this.rowCount=h(t[3])},text:""},HEAP_ALLOCATE:{parse:x,text:""},STATEMENT_EXECUTE:{parse:x,text:""},VARIABLE_SCOPE_BEGIN:{prefix:"ASSIGN ",parse:_,onEnd:function(t){this.value=t.value},classes:"node detail"},VARIABLE_ASSIGNMENT:{parse:_},USER_INFO:{parse:N},USER_DEBUG:{parse:N},CUMULATIVE_LIMIT_USAGE:{exitTypes:["CUMULATIVE_LIMIT_USAGE_END"],displayType:"method",cpuType:"system",timelineKey:"systemMethod",parse:function(t){this.text=this.type,this.group=this.type}},CUMULATIVE_LIMIT_USAGE_END:{parse:I,text:""},LIMIT_USAGE:{parse:function(t){this.lineNumber=m(t[2]),this.text=t[3]+" "+t[4]+" out of "+t[5],this.group=this.type}},LIMIT_USAGE_FOR_NS:{parse:function(t){this.text=t[2],this.group=this.type},after:function(t){this.text.match(/Maximum CPU time: (\d+)/)[1]},acceptsText:!0},TOTAL_EMAIL_RECIPIENTS_QUEUED:{parse:function(t){this.text=t[2]}},STATIC_VARIABLE_LIST:{parse:function(t){this.text=""},acceptsText:!0},SYSTEM_MODE_ENTER:{},SYSTEM_MODE_EXIT:{},EXECUTION_STARTED:{},EXECUTION_FINISHED:{},ENTERING_MANAGED_PKG:{displayType:"method",cpuType:"pkg",timelineKey:"method",parse:function(t){const e=t[2],n=e.lastIndexOf("."),i=n<0?e:e.substring(n+1);this.text=this.namespace=i,this.name=this.type+": "+t[2]},after:function(t){this.exitStamp=t.timestamp,this.duration=this.netDuration=this.exitStamp-this.timestamp}},EVENT_SERVICE_PUB_BEGIN:{exitTypes:["EVENT_SERVICE_PUB_END"],displayType:"method",cpuType:"custom",timelineKey:"flow",parse:function(t){this.group=this.type,this.text=t[2]}},EVENT_SERVICE_PUB_END:{parse:I,text:""},EVENT_SERVICE_PUB_DETAIL:{parse:function(t){this.text=t[2]+" "+t[3]+" "+t[4],this.group=this.type}},SAVEPOINT_SET:{parse:function(t){this.lineNumber=m(t[2]),this.text=t[3]}},FLOW_START_INTERVIEWS_BEGIN:{exitTypes:["FLOW_START_INTERVIEWS_END"],displayType:"method",cpuType:"custom",declarative:!0,timelineKey:"flow",parse:function(t){this.group="FLOW_START_INTERVIEWS",this.text="FLOW_START_INTERVIEWS : "+t[2]}},FLOW_START_INTERVIEWS_END:{parse:I,text:""},FLOW_START_INTERVIEW_BEGIN:{parse:L},FLOW_START_INTERVIEW_END:{},FLOW_START_INTERVIEW_LIMIT_USAGE:{parse:function(t){this.text=t[2],this.group=this.type}},FLOW_CREATE_INTERVIEW_BEGIN:{parse:I,text:""},FLOW_CREATE_INTERVIEW_END:{},FLOW_ELEMENT_BEGIN:{exitTypes:["FLOW_ELEMENT_END"],displayType:"method",cpuType:"custom",declarative:!0,timelineKey:"flow",parse:function(t){this.group=this.type,this.text=this.type+" - "+t[3]+" "+t[4]}},FLOW_ELEMENT_END:{parse:I,text:""},FLOW_ELEMENT_DEFERRED:{declarative:!0,parse:function(t){this.text=t[2]+" "+t[3],this.group=this.type}},FLOW_VALUE_ASSIGNMENT:{declarative:!0,parse:function(t){this.text=t[3]+" "+t[4],this.group=this.type}},FLOW_INTERVIEW_FINISHED:{parse:L},FLOW_ELEMENT_ERROR:{parse:function(t){this.text=t[1]+t[2]+" "+t[3]+" "+t[4]}},FLOW_ACTIONCALL_DETAIL:{parse:function(t){this.text=t[3]+" : "+t[4]+" : "+t[5]+" : "+t[6],this.group=this.type}},FLOW_ASSIGNMENT_DETAIL:{parse:function(t){this.text=t[3]+" : "+t[4]+" : "+t[5],this.group=this.type}},FLOW_LOOP_DETAIL:{parse:function(t){this.text=t[3]+" : "+t[4],this.group=this.type}},FLOW_RULE_DETAIL:{parse:function(t){this.text=t[3]+" : "+t[4],this.group=this.type}},FLOW_BULK_ELEMENT_BEGIN:{exitTypes:["FLOW_BULK_ELEMENT_END"],displayType:"method",cpuType:"custom",declarative:!0,timelineKey:"flow",parse:function(t){this.text=this.type+" - "+t[2],this.group=this.type}},FLOW_BULK_ELEMENT_END:{parse:I,text:""},FLOW_BULK_ELEMENT_DETAIL:{declarative:!0,parse:function(t){this.text=t[2]+" : "+t[3]+" : "+t[4],this.group=this.type}},FLOW_BULK_ELEMENT_LIMIT_USAGE:{declarative:!0,parse:function(t){this.text=t[2],this.group=this.type}},VALIDATION_RULE:{parse:y},VALIDATION_FORMULA:{parse:function(t){const e=t.length>3?" "+t[3]:"";this.text=t[2]+e,this.group=this.type},acceptsText:!0},VALIDATION_PASS:{parse:y},WF_FLOW_ACTION_BEGIN:{parse:I,text:""},WF_FLOW_ACTION_END:{},WF_FLOW_ACTION_ERROR:{parse:function(t){this.text=t[1]+" "+t[4]}},WF_FLOW_ACTION_ERROR_DETAIL:{parse:function(t){this.text=t[1]+" "+t[2]}},WF_FIELD_UPDATE:{parse:function(t){this.text=" "+t[2]+" "+t[3]+" "+t[4]+" "+t[5]+" "+t[6],this.group=this.type}},WF_RULE_EVAL_BEGIN:{exitTypes:["WF_RULE_EVAL_END"],displayType:"method",cpuType:"custom",declarative:!0,timelineKey:"workflow",parse:function(t){this.text="WF_RULE_EVAL"}},WF_RULE_EVAL_END:{parse:I,text:""},WF_RULE_EVAL_VALUE:{parse:function(t){this.text=t[2],this.group=this.type}},WF_RULE_FILTER:{parse:function(t){this.text=t[2],this.group=this.type},acceptsText:!0},WF_RULE_NOT_EVALUATED:{parse:I,text:""},WF_CRITERIA_BEGIN:{exitTypes:["WF_CRITERIA_END","WF_RULE_NOT_EVALUATED"],displayType:"method",cpuType:"custom",declarative:!0,timelineKey:"workflow",parse:function(t){this.group="WF_CRITERIA",this.text="WF_CRITERIA : "+t[5]+" : "+t[3]}},WF_CRITERIA_END:{parse:I,text:""},WF_FORMULA:{parse:function(t){this.text=t[2]+" : "+t[3],this.group=this.type},acceptsText:!0},WF_ACTION:{parse:function(t){this.text=t[2],this.group=this.type}},WF_ACTIONS_END:{},WF_SPOOL_ACTION_BEGIN:{parse:I,text:""},WF_TIME_TRIGGERS_BEGIN:{parse:I,text:""},EXCEPTION_THROWN:{parse:function(t){const e=t[3];e.indexOf("System.LimitException")>=0&&u(this.timestamp,e,"error"),this.lineNumber=m(t[2]),this.text=e,this.group=this.type},discontinuity:!0},FATAL_ERROR:{parse:function(t){u(this.timestamp,"FATAL ERROR! cause="+t[2],"error"),this.text=t[2]},acceptsText:!0,hideable:!1,discontinuity:!0}};function b(t,e){const n=t.split("|"),i=n[1],o=C[i];if(!o)return!r.test(i)&&e&&e.acceptsText?(e.text+=" | "+t,null):(i?console.warn("Unknown log line: "+i):t.startsWith("*** Skipped")?u(e.timestamp,"Skipped-Lines","skip"):t.indexOf("MAXIMUM DEBUG LOG SIZE REACHED")>=0?u(e.timestamp,"Max-Size-reached","skip"):console.warn("Bad log line: "+t),null);if(!o.parse)return null;const s=Object.create(o);return s.logLine=t,s.timestamp=function(t){const e=t.match(/.*\((\d+)\)/);return Number(e[1])}(n[0]),s.parse(n),e&&e.after&&e.after(s),s}let S,A,O,F;Object.keys(C).forEach(t=>{const e=C[t];e.type=t,e.exitTypes&&e.exitTypes.forEach(t=>{C[t].isExit=!0})});class R{constructor(t){this.lines=t,this.index=0}peek(){return this.index<this.lines.length?this.lines[this.index]:null}fetch(){return this.index<this.lines.length?this.lines[this.index++]:null}}function D(t,e){return e.length>0&&t.push({displayType:"block",children:e}),[]}function w(t,e,n){t.exitStamp=e.timestamp,t.onEnd&&t.onEnd(e),!t.exitTypes.includes(e.type)||t.hasLineNumber&&e.lineNumber!==t.lineNumber?F||u(e.timestamp,"Unexpected-Exit","unexpected"):(F=!1,n.fetch())}function M(t,e){const n=e.exitTypes,i=[];if(++A,n){let n,o=[];for(;n=t.peek();){if(n.discontinuity&&(F=!0),n.isExit){w(e,n,t);break}t.fetch(),O=n.timestamp,n.exitTypes||"method"===n.displayType?(o=D(i,o),i.push(M(t,n))):o.push(n)}null==n&&(e.exitStamp=O,e.duration=O-e.timestamp,u(O,"Unexpected-End","unexpected")),D(i,o)}return e.children=i,s(e),--A,e}function B(t){const e=t.indexOf(".");return e>=0?t.substr(0,e)+".cls":t.indexOf(" trigger ")>=0?t.split(" ")[2]+".trigger":null}function v(t){const e=t.target.parentElement,n=e.querySelector(".toggle"),i=e.querySelector(".childContainer");switch(n.textContent){case"+":i.style.display="block",n.textContent="-";break;case"-":i.style.display="none",n.textContent="+"}}function k(t,e){const n=t.prefix||"",o=t.suffix||"";let s=t.text,r=null;e&&(r=document.createElement("a"),r.setAttribute("href","#"),r.appendChild(document.createTextNode(s)),r.addEventListener("click",()=>{var t;(t=e)&&window.vscodeAPIInstance.postMessage(t)}),s="");let a=n,l="";if(t.summaryCount&&t.group?(a+=t.group,r=null):l+=s,"method"===t.displayType&&(t.value&&(l+=" = "+t.value),l+=o+" - ",l+=t.truncated?"TRUNCATED":i(t.duration)+" ("+i(t.netDuration)+")",t.lineNumber&&(l+=", line: "+t.lineNumber)),t.containsDml||t.containsSoql){let e="";t.containsDml&&(e+="D"),t.containsSoql&&(e+="S"),a="("+e+") "+a}return r?[document.createTextNode(a),r,document.createTextNode(l)]:[document.createTextNode(a),document.createTextNode(l)]}function W(t,e){const n=e.children,i=n.length;for(let e=0;e<i;++e){const i=n[e],o=i.summaryCount&&i.group||i.text,s=document.createElement("div");if(s.className=!1!==i.hideable?"block detail":"block",i.summaryCount){const t=document.createElement("span");t.innerText="x"+i.summaryCount,t.className="count",s.appendChild(t)}let r=o&&o!==i.type?i.type+" - "+o:i.type;r.endsWith("\\")&&(r=r.substring(0,r.length-1));const a=document.createTextNode(r);s.appendChild(a),t.appendChild(s)}}function U(){const t=document.getElementById("tree");t.innerHTML="",t.appendChild(function t(e,n){const i=document.createElement("div"),o=document.createElement("span"),s=e.children,r=document.createTextNode(s.length>0?"+":" "),a=document.createElement("div"),l=document.createElement("span"),c=k(e,function(t){const e=t.text;if(!("METHOD_ENTRY"===t.type||"CONSTRUCTOR_ENTRY"===t.type)||!/^[0-9a-zA-Z_]+(\.[0-9a-zA-Z_]+)*\(.*\)$/.test(e))return null;let n="";t.hasLineNumber&&(n="-"+t.lineNumber);let i=e.substr(0,e.indexOf("("));if("METHOD_ENTRY"===t.type){const t=i.lastIndexOf(".");return{typeName:e.substr(0,t)+n,text:e}}return{typeName:i+n,text:e}}(e));for(let t=0;t<c.length;t++)l.appendChild(c[t]);l.className="name",s.length>0?(o.className="toggle",o.addEventListener("click",v)):o.className="indent",o.appendChild(r),a.className="childContainer",a.style.display="none";const d=s.length;for(let n=0;n<d;++n){const i=s[n];switch(i.displayType){case"method":a.appendChild(t(i,B(e.text)));break;case"block":W(a,i)}}if(e.timestamp&&(i.dataset.enterstamp=""+e.timestamp),i.className=e.classes||"",i.appendChild(o),e.summaryCount){const t=document.createElement("span");t.innerText="x"+e.summaryCount,t.className="count",i.appendChild(t)}return i.appendChild(l),i.appendChild(a),i}(S))}function V(t){!function t(e){const n=e.querySelector(".toggle");if(n&&" "!==n.textContent){const i=e.querySelector(".childContainer");i.style.display="block",n.textContent="-";let o=i.firstElementChild;for(;o;)o.classList.contains("block")||t(o),o=o.nextElementSibling}}(document.getElementById("tree").firstElementChild)}function G(t){!function t(e){const n=e.querySelector(".toggle");if(n&&" "!==n.textContent){const i=e.querySelector(".childContainer");i.style.display="none",n.textContent="+";let o=i.firstElementChild;for(;o;)o.classList.contains("block")||t(o),o=o.nextElementSibling}}(document.getElementById("tree").firstElementChild)}function H(t,e){const n=document.styleSheets[0].rules;for(let i=0;i<n.length;++i){const o=n[i];if(o.selectorText===t){o.style.display=e?"none":"block";break}}}function P(t){H(".detail",t.target.checked)}function X(t){H(".node.system",t.target.checked)}function K(t){H(".node.formula",t.target.checked)}window.addEventListener("DOMContentLoaded",(function(t){const e=document.getElementById("expandAll"),n=document.getElementById("collapseAll"),i=document.getElementById("hideDetails"),o=document.getElementById("hideSystem"),s=document.getElementById("hideFormula");e.addEventListener("click",V),n.addEventListener("click",G),i.addEventListener("change",P),o.addEventListener("change",X),s.addEventListener("change",K)}));const q={codeUnit:{label:"Code Unit",strokeColor:"#B0B0B0",fillColor:"#6BAD68",textColor:"#FFFFFF"},soql:{label:"SOQL",strokeColor:"#B0B0B0",fillColor:"#4B9D6E",textColor:"#FFFFFF"},method:{label:"Method",strokeColor:"#B0B0B0",fillColor:"#328C72",textColor:"#FFFFFF"},flow:{label:"Flow",strokeColor:"#B0B0B0",fillColor:"#237A72",textColor:"#FFFFFF"},dml:{label:"DML",strokeColor:"#B0B0B0",fillColor:"#22686D",textColor:"#FFFFFF"},workflow:{label:"Workflow",strokeColor:"#B0B0B0",fillColor:"#285663",textColor:"#FFFFFF"},systemMethod:{label:"System Method",strokeColor:"#B0B0B0",fillColor:"#2D4455",textColor:"#FFFFFF"}};let Y,Q,z,Z,j,$,J,tt,et,nt,it;function ot(t){z=function t(e){if(e.exitStamp)return e.exitStamp;if(!e.children)return null;let n=e.timestamp||0;for(let i=e.children.length-1;i>=0;--i){const o=t(e.children[i]);o>n&&(n=o)}return n}(et),Z=function t(e,n=0){if(!e.children)return n;const i=e.duration?n+1:n;let o=n;for(let n=e.children.length-1;n>=0;--n){const s=t(e.children[n],i);s>o&&(o=s)}return o}(et);if(document.getElementById("shrinkToFit").checked){const t=document.getElementById("timelineScroll").offsetWidth;Y=t/z}else Y=1e-6*z<32e3?1e-6:32e3/z;Q=Y>4e-7?"normal 16px serif":"normal 8px serif",j=t.width=Y*z,J=j,t.style.width=J+"px",$=t.height=15*Z,tt=$,t.style.height=tt+"px"}function st(t){const e=document.getElementById("timeline"),n=e.getContext("2d");et=t,ot(e),n.setTransform(1,0,0,1,0,$),d.length>0&&function(t){const e=d.length;let n=0;for(;n<e;){const i=d[n++],o=n<e?d[n]:null,s=i.timestamp,r=o?o.timestamp:z;t.fillStyle=i.color,t.fillRect(s*Y,-$,(r-s)*Y,$)}}(n),function(t){t.lineWidth=1,t.font=Q,t.textBaseline="top",t.textAlign="left";const e=Y>2e-7,n=Y>2e-8;for(let i=1e8,o=1;i<z;i+=1e8,++o){const s=o%10==0,r=i*Y;if((e||s)&&(t.strokeStyle=s?"#F88962":"#E0E0E0",t.beginPath(),t.moveTo(r,-$),t.lineTo(r,0),t.stroke(),n)){const e=i/1e9;t.fillStyle=s?"#F88962":"#808080",t.fillText(e.toFixed(1)+"s",r+2,2-$)}}}(n),function t(e,n,i){const o=n.timelineKey;if(o){const t=q[o],s=n.timestamp*Y,r=-15*i,a=n.duration*Y;e.fillStyle=t.fillColor,e.fillRect(s,r,a,-15),e.lineWidth=1,e.strokeStyle=t.strokeColor,e.strokeRect(s,r,a,-15)}if(!n.children)return;const s=n.duration?i+1:i,r=n.children.length;for(let i=0;i<r;++i)t(e,n.children[i],s)}(n,et,0)}function rt(t){st(et)}function at(t,e,n,i){if(t.duration){if(t.timestamp>n||t.exitStamp<n)return null;if(e===i)return t}if(t.children){const o=t.duration?e+1:e;if(i>=o){const e=t.children.length;for(let s=0;s<e;++s){const e=at(t.children[s],o,n,i);if(e)return e}}}return null}function lt(t,e){const n=document.getElementById("timelineScroll"),o=(t+n.scrollLeft)/J*z,s=~~((tt-e)/tt*Z),r=document.getElementById("tooltip"),a=at(et,0,o,s);if(a){let o=t+10,s=e+2,l=a.type+"<br>"+a.text;a.timestamp&&(l+="<br>timestamp: "+a.timestamp,a.exitStamp&&(l+=" => "+a.exitStamp,l+="<br>duration: "+i(a.duration),"free"===a.cpuType?l+=" (free)":l+=" (netDuration: "+i(a.netDuration)+")")),r.innerHTML=l,r.style.display="block",o+r.offsetWidth>n.offsetWidth&&(o=n.offsetWidth-r.offsetWidth),r.style.left=o+n.offsetLeft+"px",s+r.offsetHeight>n.offsetHeight&&(s-=r.offsetHeight+4,s<-100&&(s=-100)),r.style.top=s+n.offsetTop+"px"}else r.style.display="none"}function ct(t){const e=t.target;if("timeline"===e.id||"tooltip"===e.id){const e=document.getElementById("timelineScroll"),n=e.getClientRects()[0],i=window.getComputedStyle(e),o=parseInt(i.borderLeftWidth,10),s=parseInt(i.borderTopWidth,10);nt=t.clientX-n.left-o,it=t.clientY-n.top-s,lt(nt,it)}}function dt(t){const e=t.offsetX/J*z,n=~~((tt-t.offsetY)/tt*Z),i=at(et,0,e,n);if(i&&i.timestamp){const t=document.querySelector('div[data-enterstamp="'+i.timestamp+'"]'),e=t.querySelector("span.name")||t;o("treeTab"),function t(e,n){if(n){const t=e.querySelector(".toggle");e.querySelector(".childContainer").style.display="block",t.textContent="-"}const i=e.parentElement;"tree"!==i.id&&t(i,!0)}(t,!1),t.scrollIntoView(),window.getSelection().selectAllChildren(e)}}function pt(t){if(!t.relatedTarget||"tooltip"!==t.relatedTarget.id){document.getElementById("tooltip").style.display="none"}}function ut(){lt(nt,it)}window.addEventListener("DOMContentLoaded",(function(t){const e=document.getElementById("timeline"),n=document.getElementById("timelineScroll");document.getElementById("shrinkToFit").addEventListener("click",rt),e.addEventListener("click",dt),e.addEventListener("mouseout",pt),n.addEventListener("scroll",ut),document.addEventListener("mousemove",ct),function(){const t=document.getElementById("timelineKey"),e=document.createElement("span");t.innerHTML="",e.innerText="",t.appendChild(e);for(const e in q){const n=q[e],i=document.createElement("div"),o=document.createElement("span");o.innerText=n.label,i.className="keyEntry",i.style.backgroundColor=n.fillColor,i.style.color=n.textColor,i.appendChild(o),t.appendChild(i)}}()}));const mt={count:["count","duration","name"],duration:["duration","count","name"],netDuration:["netDuration","count","name"],name:["name","count","duration"]};let ht,Et,ft;function Tt(t){const e={};return function t(e,n,i){const o=n.children;if(i){let t=e[i];t?(++t.count,n.duration&&(t.duration+=n.duration,t.netDuration+=n.netDuration)):e[i]={name:i,count:1,duration:n.duration||0,netDuration:n.netDuration||0}}o&&o.forEach((function(n){t(e,n,n.group||n.text)}))}(e,t),ht=Object.values(e),ht}function yt(t,e,n,i){let o;switch(t){case"count":n=n.count,i=i.count;break;case"duration":n=n.duration,i=i.duration;break;case"netDuration":n=n.netDuration,i=i.netDuration;break;default:n=n.name,i=i.name}return o=n===i?0:void 0===n?1:void 0===i||n<i?-1:1,e?o:-o}function xt(t,e,i,o,s){const r=document.createElement("div"),a=n(t,s),l=document.createElement("span"),c=n(e,s),d=document.createElement("span"),p=n(i,s),u=document.createElement("span"),m=n(o,s),h=document.createElement("span");return l.className="name",l.innerHTML=a,l.title=a,d.className="count",d.innerHTML=c,u.className="duration",u.innerHTML=p,h.className="netDuration",h.innerHTML=m,r.className=s?"row":"row data",r.appendChild(l),r.appendChild(d),r.appendChild(u),r.appendChild(h),r}function gt(){const t=document.getElementById("sortField").value,e=document.getElementById("sortAscending").checked,n=document.getElementById("analysisHeader"),o=document.getElementById("analysis"),s=document.getElementById("analysisFooter");ht.sort((function(n,i){return function(t,e,n,i){const o=mt[t],s=o.length;for(let t=0;t<s;++t){const s=yt(o[t],e,n,i);if(0!==s)return s}return 0}(t,e,n,i)})),n.innerHTML="",n.appendChild(xt("Method Name","Count","Total Duration","Net duration",!0)),o.innerHTML="";let r=0,a=0;ht.forEach((function(t){var e=t.duration?i(t.duration):"-",n=t.netDuration?i(t.netDuration):"-";o.appendChild(xt(t.name,t.count,e,n)),r+=t.count,a+=t.netDuration})),c&&(s.innerHTML="",s.appendChild(xt("Total",r,i(c),i(a),!0)))}function _t(t){gt()}function Nt(t,e){let n=t[e.text];n||(n=t[e.text]={count:0,rowCount:0}),n.count+=1,n.rowCount+=e.rowCount||0}function Lt(t){return Et={},ft={},function t(e,n,i){const o=e.children,s=o.length;for(let e=0;e<s;++e){const s=o[e];switch(s.type){case"DML_BEGIN":Nt(n,s);break;case"SOQL_EXECUTE_BEGIN":Nt(i,s)}"method"===s.displayType&&t(s,n,i)}}(t,Et,ft),{dmlMap:Et,soqlMap:ft}}function It(t,e){const n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),s=function(t){const e=Object.keys(t);return e.sort((e,n)=>{const i=t[n].count-t[e].count;if(0!==i)return i;const o=t[n].rowCount-t[e].rowCount;return 0!==o?o:e.localeCompare(n)}),e}(e);o.className="dbBlock";let r=0,a=0;return s.forEach(t=>{const n=document.createElement("div"),i=document.createElement("span"),s=document.createElement("span"),l=document.createElement("span"),c=e[t];r+=c.count,a+=c.rowCount,n.className="dbEntry",i.className="dbCount",i.innerText="Count: x"+c.count,s.className="dbCount",s.innerText="Rows: x"+c.rowCount,l.className="dbName",l.innerText=t.substr(t.indexOf(" ")+1),l.title=t,n.appendChild(i),n.appendChild(s),n.appendChild(l),o.appendChild(n)}),i.innerText=t+" (Count: x"+r+", Rows: x"+a+")",i.className="dbTitle",n.className="dbSection",n.appendChild(i),n.appendChild(o),n}function Ct(t,e){let n=e.split(".");return t.has(n[0])?n[0]:null}function bt(t){const e=function(t){const e=t.children;let n=new Set,i=0;for(;i<window.activeNamespaces.length;)n.add(window.activeNamespaces[i]),++i;for(i=0;i<e.length;){const t=e[i];"ENTERING_MANAGED_PKG"===t.type&&n.add(t.text),++i}return n}(t),n=t.children;let i;for(;i<n.length;){const t=n[i],o=t.type;"CODE_UNIT_STARTED"!==o||"method"!=t.type||t.namespace?("EXCEPTION_THROWN"===o||"CONSTRUCTOR_ENTRY"===o||"METHOD_ENTRY"===o)&&(t.namespace=Ct(e,t.text)):t.namespace=Ct(e,t.text),++i}return e}function St(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}window.addEventListener("DOMContentLoaded",(function(t){const e=document.getElementById("sortField"),n=document.getElementById("sortAscending");e.addEventListener("change",_t),n.addEventListener("change",_t)}));St(".statusBar {\n    margin-top: 10px;\n\tdisplay: flex;\n}\n#status {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 10pt;\n\tmargin-bottom: 5px;\n\tmargin-top: 5px;\n}\n.statusPad {\n\tflex-grow: 1;\n}\n.helpIcon {\n\twidth: 24px;\n\theight: 24px;\n}\n.reason {\n\tdisplay: inline-block;\n\tpadding: 2px;\n\tpadding-left: 4px;\n\tpadding-right: 4px;\n\tmargin-left: 5px;\n}\n");St(".header {\n\tdisplay: flex;\n}\n.logArea {\n\tflex-grow: 1;\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n}\n#logPicker {\n\tmargin: 5px;\n\tdisplay: block;\n}\n");St("#logSettings {\n\tpadding: 10px 0;\n\tmin-height: 27px;\n}\n.setting {\n\tdisplay: inline-block;\n\tfont-family: var(--vscode-editor-font-family);\n\tbackground-color: var(--vscode-textBlockQuote-background);\n\tfont-size: 8pt;\n\tpadding: 5px;\n\tmargin-right: 5px;\n\tmargin-bottom: 5px;\n}\n.settingTitle {\n\tfont-weight: bold;\n\tmargin-right: 2px;\n}\n.settingValue {\n\tcolor: #808080;\n}\n");St(".tabHolder {\n\tdisplay: flex;\n\tbackground-color: var(--vscode-editorGroupHeader-tabsBackground);\n}\n.tab {\n\tdisplay: inline-block;\n\tborder: 1px solid var(--vscode-tab-border);\n\tbackground-color: var(--vscode-tab-background);\n\tcolor: var(--vscode-tab-inactiveForeground);\n\tpadding: 5px 10px;\n\tcursor: pointer;\n}\n.tab.selected {\n\tborder-bottom-width: 0;\n\tborder: 1px solid var(--vscode-tab-activeBorder);\n\tbackground-color: var(--vscode-tab-activeBackground);\n\tcolor: var(--vscode-tab-activeForeground);\n\tcursor: default;\n}\n.tabPad {\n\tflex-grow: 1;\n}\n.tabber {\n\tborder-top-width: 0;\n\tpadding-top: 10px;\n\tflex: 1;\n\tmargin-bottom: 20px;\n}\n.tabItem {\n\tdisplay: none;\n\theight: 100%;\n}\n.tabItem.selected {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n");St(".buttonContainer {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: 5px;\n\tmargin-bottom: 10px;\n}\n.buttonContainer button {\n\tdisplay: block;\n\tmargin: 5px;\n}\n.filterCheckbox {\n\tmargin: 5px;\n}\n#treeScroll {\n\toverflow: scroll;\n\twhite-space: nowrap;\n\tflex: 1;\n}\n#tree {\n\twhite-space: nowrap;\n\theight: 0;\n}\n#tree .count {\n\tcolor: red;\n\tmargin-right: 5px;\n}\n.node {\n\tmargin-top: 2px;\n}\n.node.system {\n}\n.node.formula {\n}\n.childContainer {\n\tmargin-left: 24px;\n}\n.block {\n\tmargin-top: 2px;\n}\n.detail {\n\tdisplay: none;\n}\n.toggle {\n\tcursor: pointer;\n\tmargin-right: 4px;\n\tpadding: 2px;\n\tborder: 1px solid silver;\n\tdisplay: inline-block;\n\twidth: 10px;\n\ttext-align: center;\n\tline-height: 10px;\n}\n.indent {\n}\n");St("#timelineView {\n\tposition: relative;\n}\n#tooltip {\n\tdisplay: none;\n\tposition: absolute;\n\tz-index: 1000;\n\tpadding: 5px;\n\tbackground-color: var(--vscode-editor-background);\n\tcolor: var(--vscode-editor-foreground);\n\tword-break: break-word;\n\tmax-width: 1000px;\n}\n#timelineScroll {\n\tz-index: 0;\n\toverflow: auto;\n}\n#timeline {\n\tz-index: 0;\n}\n#timelineKey {\n\tmargin-top: 5px;\n}\n#timelineKey .keyEntry {\n\tdisplay: inline-block;\n\tfont-size: 8pt;\n\tpadding: 4px;\n\tmargin-right: 5px;\n}\n");St(".analysisSettings {\n\tmargin-bottom: 10px;\n\tpadding: 10px;\n}\n.analysisScroller {\n\toverflow: scroll;\n\tflex: 1;\n}\n#analysis {\n\theight: 0;\n}\n.analysis .row {\n\tdisplay: flex;\n}\n.analysis .row span {\n\tmargin: 2px;\n}\n.analysis .row.data span {\n\tbackground-color: var(--vscode-editorGroupHeader-tabsBackground);\n}\n.analysis .row .name {\n\tflex-grow: 1;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.analysis .row .count {\n\tmin-width: 50px;\n\ttext-align: right;\n}\n.analysis .row .duration {\n\tmin-width: 110px;\n\ttext-align: right;\n}\n.analysis .row .netDuration {\n\tmin-width: 110px;\n\ttext-align: right;\n}\n");St("#dbScroller {\n\toverflow: scroll;\n\tflex: 1;\n}\n#dbContent {\n\theight: 0;\n}\n.dbSection {\n\tpadding: 10px;\n}\n.dbTitle {\n\tfont-weight: bold;\n\tfont-size: 10pt;\n}\n.dbBlock {\n\tmargin-left: 10px;\n}\n.dbEntry {\n\tdisplay: flex;\n}\n.dbCount {\n\tdisplay: inline-block;\n\twidth: 90px;\n\tmin-width: 90px;\n}\n.dbName {\n\twhite-space: nowrap;\n}\n");const At=/\d+\.\d+\sAPEX_CODE,\w+;APEX_PROFILING,.+/;let Ot,Ft,Rt;function Dt(t,e,n,i){const o=document.getElementById("status"),s=document.createElement("span"),r=document.createElement("a"),a=document.createElement("span"),l=Ot?(Ot/1e6).toFixed(2)+" MB":"",c=z?(z/1e9).toFixed(3)+" Sec":"",p=l||c?" ("+l+(l&&c?", ":"")+c+")":"";r.setAttribute("href","#"),r.appendChild(document.createTextNode(t)),r.addEventListener("click",()=>{window.vscodeAPIInstance.postMessage({path:e})}),s.appendChild(r),s.appendChild(document.createTextNode(p+" - ")),a.innerText=n,a.style.color=i,o.innerHTML="",o.appendChild(s),o.appendChild(a),Array.isArray(d)&&d.forEach(t=>{const e=document.createElement("span");e.innerText=t.reason,e.className="reason",e.style.backgroundColor=t.color,o.appendChild(e)})}function wt(t,e,n){const i=t.children,o=i.length;for(let s=0;s<o;++s){const o=i[s];o.type===e&&(t[n]=!0),"method"===o.displayType&&(t[n]|=wt(o,e,n))}return t[n]}function Mt(t){const e=new Date;Ft&&console.debug(Ft+" = "+(e-Rt)+"ms"),Ft=t,Rt=e}function Bt(t,e,n){Ot=t.length,Dt(e,n,"Processing...","black"),setTimeout(()=>{Mt("renderLogSettings"),function(t){const e=document.getElementById("logSettings");e.innerHTML="";for(const n in t){const i=t[n];if("NONE"!==i){const t=document.createElement("div"),o=document.createElement("span"),s=document.createElement("span");o.innerText=n+":",o.className="settingTitle",s.innerText=i,s.className="settingValue",t.className="setting",t.appendChild(o),t.appendChild(s),e.appendChild(t)}}}(function(t){const e=t.match(At);if(!e)return null;const n=e[0];return n.substring(n.indexOf(" ")+1).split(";").reduce((t,e)=>{const n=e.split(",");return t[n[0]]=n[1],t},{})}(t)),Mt("parseLog"),function(t){const e=t.indexOf("EXECUTION_STARTED");let n,i=t.substring(e,t.length).split("\n");i=i.slice(1,i.length-1),l=[],d=[],p={};let o=i.length;for(let t=0;t<o;++t){const e=i[t];if(e){const t=b(e,n);t&&(l.push(t),n=t)}}c=l.length>1?l[l.length-1].timestamp-l[0].timestamp:null}(t),Mt("getRootMethod");const i=function(){const t=new R(l),e=[],n={text:"Log Root",type:"ROOT",children:e};let i,o=[];for(A=0,F=!1,O=void 0;i=t.fetch();)C[i.type].exitTypes?(o=D(e,o),e.push(M(t,i))):o.push(i);return D(e,o),n}();Mt("setNamespaces"),bt(i),Mt("markContainers - DML"),wt(i,"DML_BEGIN","containsDml"),Mt("markContainers - SOQL"),wt(i,"SOQL_EXECUTE_BEGIN","containsSoql"),Mt("insertPackageWrappers"),function t(e){const n=e.children,i="DML_BEGIN"===e.type;let o,r=0;for(;r<n.length;){const e=n[r],a=e.type;if(o){if("ENTERING_MANAGED_PKG"===a&&e.namespace===o.namespace){n.splice(r,1),o.exitStamp=e.exitStamp,s(o);continue}if(i&&("DML_BEGIN"===a||"SOQL_EXECUTE_BEGIN"===a)){n.splice(r,1),o.children.push(e),o.containsDml=e.containsDml||"DML_BEGIN"===a,o.containsSoql=e.containsSoql||"SOQL_EXECUTE_BEGIN"===a,o.exitStamp=e.exitStamp,s(o),"method"===e.displayType&&t(e);continue}++r}else++r;"method"===e.displayType&&t(e),o="ENTERING_MANAGED_PKG"===a?e:null}}(i),Mt("analyseMethods"),Tt(i),Mt("analyseDb"),Lt(i),Dt(e,n,"Rendering...","black"),setTimeout(()=>{Mt("renderTreeView"),function(t){S=t,U()}(i),Mt("renderTimeline"),st(i),Mt("renderAnalysis"),gt(),Mt("renderDb"),function(){const t=document.getElementById("dbContent");t.innerHTML="",t.appendChild(It("DML Statements",Et)),t.appendChild(It("SOQL Statements",ft))}(),Mt(""),Dt(e,n,"Ready",d.length>0?"red":"green")},10)},10)}function vt(t){o(t.target.id)}window.addEventListener("DOMContentLoaded",(function(t){document.querySelector(".tabHolder").querySelectorAll(".tab").forEach(t=>t.addEventListener("click",vt)),function(){const t=document.getElementById("LOG_FILE_NAME").innerHTML,e=document.getElementById("LOG_FILE_PATH").innerHTML,n=document.getElementById("LOG_FILE_TXT").innerHTML,i=document.getElementById("LOG_FILE_NS").innerHTML;window.activeNamespaces=i.split(","),window.vscodeAPIInstance=acquireVsCodeApi(),Bt(n,t,e)}()}));
