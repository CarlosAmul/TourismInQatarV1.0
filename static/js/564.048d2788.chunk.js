"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[564],{27076:function(e,t,r){var o=r(1413),l=r(15861),n=r(15671),a=r(43144),i=r(87757),c=r.n(i),s=r(72426),d=r(9062),p=(r(19727),(0,s.ZF)({apiKey:"AIzaSyDI8fCDmQfTwJsmq9FdnvKs12AIjtm8Gz4",authDomain:"tourisminqatar-59dff.firebaseapp.com",projectId:"tourisminqatar-59dff",storageBucket:"tourisminqatar-59dff.appspot.com",messagingSenderId:"673096009255",appId:"1:673096009255:web:3ff863c5edc27c23ad7002",measurementId:"G-PCC2TNX9LD"})),u=(0,d.ad)(p),q=function(){function e(){var t=this;(0,n.Z)(this,e),this.listenToFeedbacks=function(e){var r=(0,d.IO)((0,d.hJ)(u,"feedbacks"));return(0,d.cf)(r,(function(r){var o=[];r.forEach((function(e){o.push(t.reformat(e))})),e(o)}))},this.getFeedbacks=(0,l.Z)(c().mark((function e(){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,d.IO)((0,d.hJ)(u,"feedbacks")),o=[],e.next=4,(0,d.PL)(r);case 4:return e.sent.forEach((function(e){o.push(t.reformat(e))})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),this.getTestingComments=function(){var e=(0,l.Z)(c().mark((function e(r){var o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,d.IO)((0,d.hJ)(u,"feedbacks"),(0,d.ar)("name","==",r)),l=[],e.next=4,(0,d.PL)(o);case 4:return e.sent.forEach((function(e){l.push(t.reformat(e))})),e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.addFeedback=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ET)((0,d.hJ)(u,"feedbacks"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateFeedback=function(){var e=(0,l.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,d.JU)(u,"feedbacks",t.id),e.next=3,(0,d.r7)(r,{name:t.name,comment:t.comment});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteFeedback=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.oe)((0,d.JU)(u,"feedbacks",t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,a.Z)(e,[{key:"reformat",value:function(e){return(0,o.Z)({id:e.id},e.data())}}]),e}(),f=function(){function e(){var t=this;(0,n.Z)(this,e),this.listenToEvents=function(e){var r=(0,d.IO)((0,d.hJ)(u,"events"));return(0,d.cf)(r,(function(r){var o=[];r.forEach((function(e){o.push(t.reformat(e))})),e(o)}))},this.addEvent=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ET)((0,d.hJ)(u,"events"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateEvent=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.JU)(u,"events",t.id),e.next=3,(0,d.r7)(feed,{title:t.title,date:t.date});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteEvent=function(){var e=(0,l.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.oe)((0,d.JU)(u,"events",t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEvents=(0,l.Z)(c().mark((function e(){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,d.IO)((0,d.hJ)(u,"events")),o=[],e.next=4,(0,d.PL)(r);case 4:return e.sent.forEach((function(e){o.push(t.reformat(e))})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))}return(0,a.Z)(e,[{key:"reformat",value:function(e){return(0,o.Z)({id:e.id},e.data())}}]),e}();t.Z={Feedbacks:new q,Events:new f}},13564:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var o=r(1413),l=r(29439),n=r(27805),a=r(53584),i=r(85747),c=r(95999),s=r(5595),d=r(68476),p=r(72791),u=r(26445),q=r(57621),f=r(66362),b=r(53767),h=r(20191),v=r(97123),m=r(64554),g=r(36151),k=r(16336),w=r(71652),y=r(29163),x=r(27076),Z=r(15861),C=r(87757),j=r.n(C),I=function(){var e=(0,Z.Z)(j().mark((function e(t){var r,o,l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.theTitle,o=t.eventdate,l=D(o),x.Z.Events.addEvent({title:r,date:l});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.toLocaleDateString().split("/");return t[1]<10&&(t[1]="0".concat(t[1])),t[0]<10&&(t[0]="0".concat(t[0])),String("".concat(t[2],"-").concat(t[0],"-").concat(t[1]))},R=r(85703),S=r(53861),E=r(25212),P=r(53026),T=(r(78199),r(18456),r(81724),r(79286),r(86951),r(26146),r(60466),r(47630)),z=r(12065),F=r(80184);(0,T.ZP)(m.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end"}})),(0,T.ZP)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat((0,z.Fq)(t.palette.common.black,.24))}}));r(26769),r(5977),r(26098);(0,T.ZP)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),(0,T.ZP)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),(0,T.ZP)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));r(49751);(0,T.ZP)("div")((function(e){var t=e.theme;return{outline:"none",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}}}));(0,T.ZP)("div")((function(e){var t=e.theme;return{outline:"none",overflow:"hidden",position:"relative",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}}}));var A=r(66770),M=((0,T.ZP)("div")((function(e){var t=e.theme,r="rtl"===t.direction;return{"& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":{fill:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":{color:t.palette.primary.main},"& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":{stroke:t.palette.primary.main},"& .ql-stroke":{stroke:t.palette.text.primary},"& .ql-fill, .ql-stroke.ql-fill":{fill:t.palette.text.primary},"& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":{"&:focus":{outline:"none"}},"& .ql-toolbar.ql-snow":{border:"none",borderBottom:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-formats":{"&:not(:last-of-type)":{marginRight:t.spacing(2)}},"& button":{padding:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,color:t.palette.text.primary},"& button svg, span svg":{width:20,height:20},"& .ql-picker-label":(0,o.Z)((0,o.Z)({},t.typography.subtitle2),{},{color:t.palette.text.primary,"& .ql-stroke":{stroke:t.palette.text.primary}}),"& .ql-picker-label svg":(0,o.Z)({},r&&{right:"0 !important",left:"auto !important"}),"& .ql-color,& .ql-background,& .ql-align ":{"& .ql-picker-label":{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}},"& .ql-expanded":{"& .ql-picker-label":{borderRadius:4,color:t.palette.text.disabled,borderColor:"transparent !important",backgroundColor:t.palette.action.focus,"& .ql-stroke":{stroke:t.palette.text.disabled}},"& .ql-picker-options":{padding:0,marginTop:4,border:"none",maxHeight:200,overflow:"auto",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .ql-picker-item":{color:t.palette.text.primary},"&.ql-align":{"& .ql-picker-options":{padding:0,display:"flex"},"& .ql-picker-item":{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"}},"&.ql-color, &.ql-background":{"& .ql-picker-options":{padding:8},"& .ql-picker-item":{margin:3,borderRadius:4,"&.ql-selected":{border:"solid 1px black"}}},"&.ql-font, &.ql-size, &.ql-header":{"& .ql-picker-options":{padding:t.spacing(1,0)},"& .ql-picker-item":{padding:t.spacing(.5,1.5)}}}}}})),["Arial","Tahoma","Georgia","Impact","Verdana"]),J=["8px","9px","10px","12px","14px","16px","20px","24px","32px","42px","54px","68px","84px","98px"];var G=A.Quill.import("attributors/style/size");G.whitelist=J,A.Quill.register(G,!0);var _=A.Quill.import("attributors/style/font");_.whitelist=M,A.Quill.register(_,!0);(0,T.ZP)(m.Z)((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032]),"& .ql-container.ql-snow":(0,o.Z)((0,o.Z)({borderColor:"transparent"},t.typography.body1),{},{fontFamily:t.typography.fontFamily}),"& .ql-editor":{minHeight:200,"&.ql-blank::before":{fontStyle:"normal",color:t.palette.text.disabled},"& pre.ql-syntax":(0,o.Z)((0,o.Z)({},t.typography.body2),{},{padding:t.spacing(2),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[900]})}}}));var L=(0,T.ZP)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":(0,z.Fq)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":(0,o.Z)((0,o.Z)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":(0,o.Z)((0,o.Z)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:t.palette.grey[50012],borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":(0,o.Z)((0,o.Z)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":(0,o.Z)((0,o.Z)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":(0,o.Z)((0,o.Z)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":(0,o.Z)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":(0,o.Z)({},t.typography.subtitle2),"& .fc .fc-list-event":(0,o.Z)((0,o.Z)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),W=r(4942),O=r(66809),V=r(90388),B=r(13400),Q=r(20890),U=r(16386);function H(e){return(0,U.Z)(new Date(e),"dd MMMM yyyy")}var N=[{value:"dayGridMonth",label:"Month",icon:"ic:round-view-module"},{value:"timeGridWeek",label:"Week",icon:"ic:round-view-week"},{value:"timeGridDay",label:"Day",icon:"ic:round-view-day"},{value:"listWeek",label:"Agenda",icon:"ic:round-view-agenda"}],K=(0,T.ZP)("div")((function(e){var t=e.theme;return(0,W.Z)({display:"flex",alignItems:"center",flexDirection:"column",padding:t.spacing(2.5)},t.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between"})}));function X(e){var t=e.date,r=e.view,o=e.onToday,l=e.onNextDate,n=e.onPrevDate,a=e.onChangeView,i=(0,S.Z)("up","sm");return(0,F.jsxs)(K,{children:[i&&(0,F.jsx)(b.Z,{direction:"row",spacing:.5,children:N.map((function(e){return(0,F.jsx)(O.Z,{title:e.label,children:(0,F.jsx)(V.Z,{value:r,selected:e.value===r,onChange:function(){return a(e.value)},sx:{width:32,height:32,padding:0,border:0},children:(0,F.jsx)(P.Z,{icon:e.icon,width:20,height:20})})},e.value)}))}),(0,F.jsxs)(b.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,F.jsx)(B.Z,{onClick:n,children:(0,F.jsx)(P.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})}),(0,F.jsx)(Q.Z,{variant:"h5",children:H(t)}),(0,F.jsx)(B.Z,{onClick:l,children:(0,F.jsx)(P.Z,{icon:"eva:arrow-ios-forward-fill",width:20,height:20})})]}),i&&(0,F.jsx)(g.Z,{size:"small",color:"error",variant:"contained",onClick:o,children:"Today"})]})}function Y(){var e=(0,R.Z)().themeStretch,t=(0,S.Z)("up","sm"),r=(0,p.useRef)(null),Z=(0,p.useState)(new Date),C=(0,l.Z)(Z,2),j=C[0],D=C[1],P=(0,p.useState)(t?"dayGridMonth":"listWeek"),T=(0,l.Z)(P,2),z=T[0],A=T[1],M=(0,p.useState)([]),J=(0,l.Z)(M,2),G=J[0],_=J[1],W=(0,p.useState)(!1),O=(0,l.Z)(W,2),V=(O[0],O[1],(0,p.useState)(!1)),B=(0,l.Z)(V,2),Q=(B[0],B[1],(0,p.useState)("")),U=(0,l.Z)(Q,2),H=U[0],N=U[1],K=(0,p.useState)(new Date),Y=(0,l.Z)(K,2),$=Y[0],ee=Y[1],te=(0,p.useState)("#7A0C2E"),re=(0,l.Z)(te,2);re[0],re[1];(0,p.useEffect)((function(){x.Z.Events.listenToEvents(_)}),[]),(0,p.useEffect)((function(){var e=r.current;if(e){var o=e.getApi(),l=t?"dayGridMonth":"listWeek";o.changeView(l),A(l)}}),[t]);var oe=function(){N(""),ee(new Date)};return(0,F.jsx)(E.Z,{title:"Calendar",children:(0,F.jsx)(u.Z,{maxWidth:!e&&"xl",children:(0,F.jsxs)(q.Z,{children:[(0,F.jsx)(f.Z,{children:(0,F.jsxs)(b.Z,{spacing:4,direction:"row",children:[(0,F.jsx)(h.Z,{label:"Title",type:"text",value:H,onChange:function(e){return N(e.target.value)}}),(0,F.jsx)(w._,{dateAdapter:k.Z,children:(0,F.jsx)(y.M,{label:"Event date",value:$,onChange:function(e){return ee(e)},inputFormat:"yyyy-MM-dd",renderInput:function(e){return(0,F.jsx)(h.Z,(0,o.Z)({},e))}})}),(0,F.jsxs)(v.Z,{children:[(0,F.jsx)(m.Z,{sx:{flexGrow:1}}),(0,F.jsx)(g.Z,{variant:"outlined",color:"inherit",onClick:oe,children:"Cancel"}),(0,F.jsx)(g.Z,{type:"submit",variant:"contained",onClick:function(){I({theTitle:H,eventdate:$}),oe()},children:"Add"})]})]})}),(0,F.jsxs)(L,{children:[(0,F.jsx)(X,{date:j,view:z,onNextDate:function(){var e=r.current;if(e){var t=e.getApi();t.next(),D(t.getDate())}},onPrevDate:function(){var e=r.current;if(e){var t=e.getApi();t.prev(),D(t.getDate())}},onToday:function(){var e=r.current;if(e){var t=e.getApi();t.today(),D(t.getDate())}},onChangeView:function(e){var t=r.current;t&&(t.getApi().changeView(e),A(e))}}),(0,F.jsx)(n.ZPm,{weekends:!0,editable:!0,droppable:!0,selectable:!0,events:G,ref:r,rerenderDelay:10,initialDate:j,initialView:z,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,allDayMaintainDuration:!0,eventResizableFromStart:!0,height:t?720:"auto",plugins:[a.Z,i.ZP,s.ZP,c.ZP,d.ZP]})]})]})})})}}}]);
//# sourceMappingURL=564.048d2788.chunk.js.map