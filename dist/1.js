(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(5),i=n.n(a)()(o.a);i.push([e.i,"._1DnTK1Ih59CTfyLpAKgJct{font-size:1.3em;font-weight:bold;margin:1em 0 0 0}._2ydwa8atKKR0XN_KqlrlMc{width:15em;display:grid;grid-template-columns:1fr;justify-items:center}.dYYIC8g7L_-5S9Iax6dhY{justify-self:start}.cPq0bVivAIdhSFoughO-W{width:100%;margin:.5em;font-size:1em}._1PxKlhHw2232zCglfLKnSB{background-color:#000;border:0;color:#fff;width:100%;height:2.5em;outline:none;font-weight:bold}","",{version:3,sources:["webpack://./src/Delivery/RequestPickup/index.scss"],names:[],mappings:"AAAA,yBACE,eAAA,CACA,gBAAA,CACA,gBAAA,CAEF,yBACE,UAAA,CACA,YAAA,CACA,yBAAA,CACA,oBAAA,CAGF,uBACE,kBAAA,CAGF,uBACE,UAAA,CACA,WAAA,CACA,aAAA,CAGF,yBACE,qBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,gBAAA",sourcesContent:[".ReqPickupTitle {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n}\n.RequestPickupForm {\n  width: 15em;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n}\n\n.SearchTitle {\n  justify-self: start;\n}\n\n.SearchBox {\n  width: 100%;\n  margin: 0.5em;\n  font-size: 1em;\n}\n\n.RequestButton {\n  background-color: black;\n  border: 0;\n  color: white;\n  width: 100%;\n  height: 2.5em;\n  outline: none;\n  font-weight: bold;\n}"],sourceRoot:""}]),i.locals={ReqPickupTitle:"_1DnTK1Ih59CTfyLpAKgJct",RequestPickupForm:"_2ydwa8atKKR0XN_KqlrlMc",SearchTitle:"dYYIC8g7L_-5S9Iax6dhY",SearchBox:"cPq0bVivAIdhSFoughO-W",RequestButton:"_1PxKlhHw2232zCglfLKnSB"},t.a=i},26:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(5),i=n.n(a)()(o.a);i.push([e.i,"._1YpKxhxnogEuQO2pljnBhB{display:grid;grid-template-columns:1fr;grid-auto-rows:2em}._1jYLwWWn38wmPICQQwgE3A{font-size:1.1em;display:flex;justify-content:start;align-items:center}._1jYLwWWn38wmPICQQwgE3A:first-child{background-color:#d9d9d9}","",{version:3,sources:["webpack://./src/Delivery/TypeNSearch/SearchResult.scss","webpack://./src/globalStyle/theme.scss"],names:[],mappings:"AAEA,yBACE,YAAA,CACA,yBAAA,CACA,kBAAA,CAGF,yBACE,eAAA,CAKA,YAAA,CACA,qBAAA,CACA,kBAAA,CANA,qCACE,wBCVQ",sourcesContent:['@use "../../globalStyle/theme";\n\n.Entries {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 2em;\n}\n\n.Entry {\n  font-size: 1.1em;\n  &:first-child {\n    background-color: theme.$darkShade;\n  }\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}',"$lightShade: #f2f2f2;\n$darkShade: #d9d9d9;\n"],sourceRoot:""}]),i.locals={Entries:"_1YpKxhxnogEuQO2pljnBhB",Entry:"_1jYLwWWn38wmPICQQwgE3A"},t.a=i},27:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(5),i=n.n(a)()(o.a);i.push([e.i,"._2XPidy4i_GwtEeEBLcB9Hn,._1p2IzWFhpYtbRHTkCNNR7W{background-color:#f2f2f2;width:100%}._1p2IzWFhpYtbRHTkCNNR7W{display:flex;flex-direction:row;align-items:center;height:3em;justify-content:start}._2cxLQVYrmhfRvY8jkdTlXm{outline:none;border:none;font-size:1.1em;width:80%;background-color:inherit}._2cxLQVYrmhfRvY8jkdTlXm::placeholder{color:gray;opacity:1}._2XPidy4i_GwtEeEBLcB9Hn{position:absolute;height:12em;overflow:scroll}._2yA9avhTHyH6eCAjSf8JCD{position:relative;width:100%}._2fgIB7FzqVgfo3VM9qaor7{border:0;color:gray;outline:none}","",{version:3,sources:["webpack://./src/Delivery/TypeNSearch/index.scss","webpack://./src/globalStyle/theme.scss"],names:[],mappings:"AAEA,kDACE,wBCHW,CDIX,UAAA,CAGF,yBAEE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,UAAA,CACA,qBAAA,CAGF,yBACE,YAAA,CACA,WAAA,CACA,eAAA,CACA,SAAA,CACA,wBAAA,CAEA,sCACE,UAAA,CACA,SAAA,CAKJ,yBAEE,iBAAA,CACA,WAAA,CACA,eAAA,CAGF,yBACE,iBAAA,CACA,UAAA,CAGF,yBACE,QAAA,CACA,UAAA,CACA,YAAA",sourcesContent:['@use "../../globalStyle/theme";\n\n%SearchBox {\n  background-color: theme.$lightShade;\n  width: 100%;\n}\n\n.InputFieldBox {\n  @extend %SearchBox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 3em;\n  justify-content: start;\n}\n\n.InputField {\n  outline: none;\n  border: none;\n  font-size: 1.1em;\n  width: 80%;\n  background-color: inherit;\n\n  &::placeholder {\n    color: gray;\n    opacity: 1;\n  }\n}\n\n\n.ResultBox {\n  @extend %SearchBox;\n  position: absolute;\n  height: 12em;\n  overflow: scroll;\n}\n\n.ResultBoxAnchor {\n  position: relative;\n  width: 100%;\n}\n\n.Delete {\n  border: 0;\n  color: gray;\n  outline: none;\n}\n\n',"$lightShade: #f2f2f2;\n$darkShade: #d9d9d9;\n"],sourceRoot:""}]),i.locals={ResultBox:"_2XPidy4i_GwtEeEBLcB9Hn",InputFieldBox:"_1p2IzWFhpYtbRHTkCNNR7W",InputField:"_2cxLQVYrmhfRvY8jkdTlXm",ResultBoxAnchor:"_2yA9avhTHyH6eCAjSf8JCD",Delete:"_2fgIB7FzqVgfo3VM9qaor7"},t.a=i},28:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),A=n(25),c={insert:"head",singleton:!1},l=(i()(A.a,c),A.a.locals||{}),s=function(e){return o.a.createElement("div",null,"Searching")},u=n(26),d={insert:"head",singleton:!1},f=(i()(u.a,d),u.a.locals||{}),m=function(e){var t=e.results.slice(0,4),n=e.setters,r=n.setShow,a=n.setTyped,i=n.setSelected,A=function(e){return function(){console.log(e),r(!1),a(e),i(!0)}};return o.a.createElement("div",{className:f.Entries},t.map((function(e,t){return o.a.createElement("div",{className:f.Entry,key:t,onClick:A(e)},o.a.createElement("p",null,e))})))},h=n(27),C={insert:"head",singleton:!1},y=(i()(h.a,C),h.a.locals||{});function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,A=e[Symbol.iterator]();!(r=(i=A.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==A.return||A.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){var t,n,a,i=p(e.typewriter||Object(r.useState)(""),2),A=i[0],c=i[1],l=p(Object(r.useState)(!1),2),u=l[0],d=l[1],f=p(Object(r.useState)([]),2),h=f[0],C=f[1],g=p(Object(r.useState)(!1),2),b=g[0],w=g[1],B=p(Object(r.useState)(!1),2),E=B[0],S=B[1];return t=function(){if(!A||E)return C([]),d(!1),void w(!1);var e=setTimeout((function(){var e;console.log("this should not explode"),d(!0),w(!0),(e=A,new Promise((function(t,n){"false"===e?setTimeout((function(){t(["Address not found"])}),1e3):setTimeout((function(){t(["".concat(e,", ON"),"".concat(e,", QB"),"".concat(e,", NS"),"".concat(e,", BC"),"".concat(e,", NL"),"".concat(e,", MB")])}),1e3)}))).then((function(e){C(e),d(!1)})).catch((function(e){console.log("Something's wrong",e),d(!1)}))}),500);return function(){clearTimeout(e),d(!1),C([])}},n=[A],a=Object(r.useRef)(!0),Object(r.useEffect)((function(){var e=void 0;return a.current?a.current=!1:e=t(),e}),n),o.a.createElement("div",{className:e.className,"data-cy":e["data-cy"]},o.a.createElement("div",{className:y.InputFieldBox},o.a.createElement("input",{className:y.InputField,onChange:function(e){S(!1),c(e.target.value)},value:A,onFocus:function(e){A&&w(!1)},placeholder:e.whatToType||"Don't forget to specify label"}),A&&o.a.createElement("button",{className:y.Delete,onClick:function(e){w(!1),c("")}},"X")),o.a.createElement("div",{className:y.ResultBoxAnchor},b&&o.a.createElement("div",{className:y.ResultBox,onBlur:function(e){w(!1)}},u&&o.a.createElement(s,null),0===h.length||o.a.createElement(m,{results:h,setters:{setTyped:c,setShow:w,setSelected:S}}))))};function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,A=e[Symbol.iterator]();!(r=(i=A.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==A.return||A.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(){var e=w(Object(r.useState)(""),2),t=e[0],n=e[1],a=w(Object(r.useState)(""),2),i=a[0],A=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:l.ReqPickupTitle},"Deliver your parcel now"),o.a.createElement("form",{className:l.RequestPickupForm,onSubmit:function(e){e.preventDefault()}},o.a.createElement(b,{typewriter:[t,n],className:l.SearchBox,whatToType:"Enter pickup location"}),o.a.createElement(b,{typewriter:[i,A],className:l.SearchBox,whatToType:"Enter destination"}),o.a.createElement("button",{type:"submit",className:l.RequestButton},"Request now")))};t.default=function(){return o.a.createElement(E,null)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvUmVxdWVzdFBpY2t1cC9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9EZWxpdmVyeS9UeXBlTlNlYXJjaC9TZWFyY2hSZXN1bHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvVHlwZU5TZWFyY2gvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvUmVxdWVzdFBpY2t1cC9pbmRleC5zY3NzPzM1ZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlbGl2ZXJ5L1R5cGVOU2VhcmNoL1NlYXJjaGluZ0ZvclJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvVHlwZU5TZWFyY2gvU2VhcmNoUmVzdWx0LnNjc3M/MTY2NyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvVHlwZU5TZWFyY2gvU2VhcmNoUmVzdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9EZWxpdmVyeS9UeXBlTlNlYXJjaC9pbmRleC5zY3NzP2U5NDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlbGl2ZXJ5L1R5cGVOU2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9EZWxpdmVyeS9UeXBlTlNlYXJjaC91c2VFZmZlY3RTa2lwRmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlbGl2ZXJ5L1R5cGVOU2VhcmNoL3NlYXJjaEFkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlbGl2ZXJ5L1JlcXVlc3RQaWNrdXAvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVsaXZlcnkvUmVxdWVzdFBpY2t1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpIiwibG9jYWxzIiwib3B0aW9ucyIsInByb3BzIiwiaXRlbXMiLCJyZXN1bHRzIiwic2xpY2UiLCJzZXR0ZXJzIiwic2V0U2hvdyIsInNldFR5cGVkIiwic2V0U2VsZWN0ZWQiLCJ3aGVuQ2xpY2tlZCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiJHMiLCJFbnRyaWVzIiwibWFwIiwiRW50cnkiLCJrZXkiLCJvbkNsaWNrIiwiZWZmZWN0IiwiZGVwcyIsImZpcnN0UmVuZGVyIiwidHlwZXdyaXRlciIsInVzZVN0YXRlIiwidHlwZWQiLCJzZWFyY2hpbmciLCJzZXRTZWFyY2hpbmciLCJzZXRSZXN1bHRzIiwic2hvd1Jlc3VsdCIsInNlbGVjdGVkIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImFkZHIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJlIiwiY2xlYXJUaW1lb3V0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZWZmZWN0UmV0dXJucyIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJkYXRhLWN5IiwiSW5wdXRGaWVsZEJveCIsIklucHV0RmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25Gb2N1cyIsInBsYWNlaG9sZGVyIiwid2hhdFRvVHlwZSIsIkRlbGV0ZSIsIlJlc3VsdEJveEFuY2hvciIsIlJlc3VsdEJveCIsIm9uQmx1ciIsIlNlYXJjaGluZ0ZvclJlc3VsdCIsImxlbmd0aCIsInBpY2t1cCIsInNldFBpY2t1cCIsImRlc3QiLCJzZXREZXN0IiwiUmVxUGlja3VwVGl0bGUiLCJSZXF1ZXN0UGlja3VwRm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJTZWFyY2hCb3giLCJ0eXBlIiwiUmVxdWVzdEJ1dHRvbiIsIlJlcXVlc3QiXSwibWFwcGluZ3MiOiJ5RkFBQSwyQkFHSUEsRUFISixNQUc4QixHQUE0QixLQUUxREEsRUFBd0JDLEtBQUssQ0FBQ0MsRUFBT0MsRUFBSSw2WUFBOFksR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMscURBQXFELE1BQVEsR0FBRyxTQUFXLDJOQUEyTixlQUFpQixDQUFDLDhkQUE4ZCxXQUFhLE1BRXJ2Q0gsRUFBd0JJLE9BQVMsQ0FD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QWpCLDJCQUNBLDBCQUFNcEQsVUFBV0MsRUFBR29ELGtCQUNsQkMsU0FQaUIsU0FBQTVCLEdBQ3JCQSxFQUFFNkIsbUJBUUksa0JBQUMsRUFBRCxDQUNFN0MsV0FBWSxDQUFDc0MsRUFBUUMsR0FDckJqRCxVQUFXQyxFQUFHdUQsVUFDZGYsV0FBVywwQkFDYixrQkFBQyxFQUFELENBQ0UvQixXQUFZLENBQUN3QyxFQUFNQyxHQUNuQm5ELFVBQVdDLEVBQUd1RCxVQUNkZixXQUFXLHNCQUNiLDRCQUFRZ0IsS0FBSyxTQUFTekQsVUFBV0MsRUFBR3lELGVBQXBDLGtCQ3RCSyxxQkFDYixPQUNFLGtCQUFDQyxFQUFEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5fMURuVEsxSWg1OUNUZnlMcEFLZ0pjdHtmb250LXNpemU6MS4zZW07Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MWVtIDAgMCAwfS5fMnlkd2E4YXRLS1IwWE5fS3FscmxNY3t3aWR0aDoxNWVtO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO2p1c3RpZnktaXRlbXM6Y2VudGVyfS5kWVlJQzhnN0xfLTVTOUlheDZkaFl7anVzdGlmeS1zZWxmOnN0YXJ0fS5jUHEwYlZpdkFJZGhTRm91Z2hPLVd7d2lkdGg6MTAwJTttYXJnaW46LjVlbTtmb250LXNpemU6MWVtfS5fMVB4S2xoSHcyMjMyekNnbGZMS25TQntiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyOjA7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO2hlaWdodDoyLjVlbTtvdXRsaW5lOm5vbmU7Zm9udC13ZWlnaHQ6Ym9sZH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRGVsaXZlcnkvUmVxdWVzdFBpY2t1cC9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUNFLGVBQUEsQ0FDQSxnQkFBQSxDQUNBLGdCQUFBLENBRUYseUJBQ0UsVUFBQSxDQUNBLFlBQUEsQ0FDQSx5QkFBQSxDQUNBLG9CQUFBLENBR0YsdUJBQ0Usa0JBQUEsQ0FHRix1QkFDRSxVQUFBLENBQ0EsV0FBQSxDQUNBLGFBQUEsQ0FHRix5QkFDRSxxQkFBQSxDQUNBLFFBQUEsQ0FDQSxVQUFBLENBQ0EsVUFBQSxDQUNBLFlBQUEsQ0FDQSxZQUFBLENBQ0EsZ0JBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlJlcVBpY2t1cFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbn1cXG4uUmVxdWVzdFBpY2t1cEZvcm0ge1xcbiAgd2lkdGg6IDE1ZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5TZWFyY2hUaXRsZSB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uU2VhcmNoQm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uUmVxdWVzdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiUmVxUGlja3VwVGl0bGVcIjogXCJfMURuVEsxSWg1OUNUZnlMcEFLZ0pjdFwiLFxuXHRcIlJlcXVlc3RQaWNrdXBGb3JtXCI6IFwiXzJ5ZHdhOGF0S0tSMFhOX0txbHJsTWNcIixcblx0XCJTZWFyY2hUaXRsZVwiOiBcImRZWUlDOGc3TF8tNVM5SWF4NmRoWVwiLFxuXHRcIlNlYXJjaEJveFwiOiBcImNQcTBiVml2QUlkaFNGb3VnaE8tV1wiLFxuXHRcIlJlcXVlc3RCdXR0b25cIjogXCJfMVB4S2xoSHcyMjMyekNnbGZMS25TQlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5fMVlwS3hoeG5vZ0V1UU8ycGxqbkJoQntkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtncmlkLWF1dG8tcm93czoyZW19Ll8xallMd1dXbjM4d21QSUNRUXdnRTNBe2ZvbnQtc2l6ZToxLjFlbTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcn0uXzFqWUx3V1duMzh3bVBJQ1FRd2dFM0E6Zmlyc3QtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjojZDlkOWQ5fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9EZWxpdmVyeS9UeXBlTlNlYXJjaC9TZWFyY2hSZXN1bHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2dsb2JhbFN0eWxlL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEseUJBQ0UsWUFBQSxDQUNBLHlCQUFBLENBQ0Esa0JBQUEsQ0FHRix5QkFDRSxlQUFBLENBS0EsWUFBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FOQSxxQ0FDRSx3QkNWUVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9nbG9iYWxTdHlsZS90aGVtZVxcXCI7XFxuXFxuLkVudHJpZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDJlbTtcXG59XFxuXFxuLkVudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGRhcmtTaGFkZTtcXG4gIH1cXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsXCIkbGlnaHRTaGFkZTogI2YyZjJmMjtcXG4kZGFya1NoYWRlOiAjZDlkOWQ5O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkVudHJpZXNcIjogXCJfMVlwS3hoeG5vZ0V1UU8ycGxqbkJoQlwiLFxuXHRcIkVudHJ5XCI6IFwiXzFqWUx3V1duMzh3bVBJQ1FRd2dFM0FcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuXzJYUGlkeTRpX0d3dEVlRUJMY0I5SG4sLl8xcDJJeldGaHBZdGJSSFRrQ05OUjdXe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjt3aWR0aDoxMDAlfS5fMXAySXpXRmhwWXRiUkhUa0NOTlI3V3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6M2VtO2p1c3RpZnktY29udGVudDpzdGFydH0uXzJjeExRVllybWhmUnZZOGprZFRsWG17b3V0bGluZTpub25lO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxLjFlbTt3aWR0aDo4MCU7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5fMmN4TFFWWXJtaGZSdlk4amtkVGxYbTo6cGxhY2Vob2xkZXJ7Y29sb3I6Z3JheTtvcGFjaXR5OjF9Ll8yWFBpZHk0aV9Hd3RFZUVCTGNCOUhue3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMmVtO292ZXJmbG93OnNjcm9sbH0uXzJ5QTlhdmhUSHlINmVDQWpTZjhKQ0R7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0uXzJmZ0lCN0Z6cVZnZm8zVk05cWFvcjd7Ym9yZGVyOjA7Y29sb3I6Z3JheTtvdXRsaW5lOm5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RlbGl2ZXJ5L1R5cGVOU2VhcmNoL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWxTdHlsZS90aGVtZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGtEQUNFLHdCQ0hXLENESVgsVUFBQSxDQUdGLHlCQUVFLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLGtCQUFBLENBQ0EsVUFBQSxDQUNBLHFCQUFBLENBR0YseUJBQ0UsWUFBQSxDQUNBLFdBQUEsQ0FDQSxlQUFBLENBQ0EsU0FBQSxDQUNBLHdCQUFBLENBRUEsc0NBQ0UsVUFBQSxDQUNBLFNBQUEsQ0FLSix5QkFFRSxpQkFBQSxDQUNBLFdBQUEsQ0FDQSxlQUFBLENBR0YseUJBQ0UsaUJBQUEsQ0FDQSxVQUFBLENBR0YseUJBQ0UsUUFBQSxDQUNBLFVBQUEsQ0FDQSxZQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2dsb2JhbFN0eWxlL3RoZW1lXFxcIjtcXG5cXG4lU2VhcmNoQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsaWdodFNoYWRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5JbnB1dEZpZWxkQm94IHtcXG4gIEBleHRlbmQgJVNlYXJjaEJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogM2VtO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLklucHV0RmllbGQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXG4gICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcblxcbi5SZXN1bHRCb3gge1xcbiAgQGV4dGVuZCAlU2VhcmNoQm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMmVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLlJlc3VsdEJveEFuY2hvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkRlbGV0ZSB7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogZ3JheTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblwiLFwiJGxpZ2h0U2hhZGU6ICNmMmYyZjI7XFxuJGRhcmtTaGFkZTogI2Q5ZDlkOTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJSZXN1bHRCb3hcIjogXCJfMlhQaWR5NGlfR3d0RWVFQkxjQjlIblwiLFxuXHRcIklucHV0RmllbGRCb3hcIjogXCJfMXAySXpXRmhwWXRiUkhUa0NOTlI3V1wiLFxuXHRcIklucHV0RmllbGRcIjogXCJfMmN4TFFWWXJtaGZSdlk4amtkVGxYbVwiLFxuXHRcIlJlc3VsdEJveEFuY2hvclwiOiBcIl8yeUE5YXZoVEh5SDZlQ0FqU2Y4SkNEXCIsXG5cdFwiRGVsZXRlXCI6IFwiXzJmZ0lCN0Z6cVZnZm8zVk05cWFvcjdcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlNlYXJjaGluZzwvZGl2PlxuICApXG59IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWFyY2hSZXN1bHQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgJHMgZnJvbSBcIi4vU2VhcmNoUmVzdWx0LnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gcHJvcHMucmVzdWx0cy5zbGljZSgwLCA0KTtcblxuICBjb25zdCB7c2V0U2hvdywgc2V0VHlwZWQsIHNldFNlbGVjdGVkfSA9IHByb3BzLnNldHRlcnM7XG4gIGNvbnN0IHdoZW5DbGlja2VkID0gKGl0ZW0pID0+ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBzZXRTaG93KGZhbHNlKTtcbiAgICBzZXRUeXBlZChpdGVtKTtcbiAgICBzZXRTZWxlY3RlZCh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyRzLkVudHJpZXN9PlxuICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpPT4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17JHMuRW50cnl9IGtleT17aX0gXG4gICAgICAgIG9uQ2xpY2s9e3doZW5DbGlja2VkKGl0ZW0pfVxuXG4gICAgICA+PHA+e2l0ZW19PC9wPjwvZGl2PlxuICAgIFxuICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdXNlRWZmZWN0IGZyb20gXCIuL3VzZUVmZmVjdFNraXBGaXJzdFwiO1xuaW1wb3J0IHNlYXJjaEFkZHJlc3MgZnJvbSBcIi4vc2VhcmNoQWRkcmVzc1wiO1xuaW1wb3J0IFNlYXJjaGluZ0ZvclJlc3VsdCBmcm9tIFwiLi9TZWFyY2hpbmdGb3JSZXN1bHRcIjtcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSBcIi4vU2VhcmNoUmVzdWx0XCI7XG5cbmltcG9ydCAkcyBmcm9tIFwiLi9pbmRleC5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCBbdHlwZWQsIHNldFR5cGVkXSA9IHByb3BzLnR5cGV3cml0ZXIgfHwgdXNlU3RhdGUoXCJcIik7Ly90aGUgc2Vjb25kIHBhcnQgaXMgb25seSBmb3IgdGVzdGluZyBwdXJwb3NlXG4gIGNvbnN0IFtzZWFyY2hpbmcsIHNldFNlYXJjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dSZXN1bHQsIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmb2N1c09uSW5wdXQgPSBlID0+IHtcbiAgICBpZiAodHlwZWQpIHtcbiAgICAgIHNldFNob3coZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXJ0VHlwaW5nID0gZSA9PiB7XG4gICAgc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgIHNldFR5cGVkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGNsaWNrRGVsZXRlID0gZSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgc2V0VHlwZWQoXCJcIik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PnsgLy90aGlzIGlzIGEgbW9kaWZpZWQgdXNlRWZmZWN0IGhvb2sgdGhhdCBkb2VzIG5vdCBydW4gb24gaW5pdGlhbCByZW5kZXIgY2hlY2sgaW1wb3J0XG4gICAgaWYgKCF0eXBlZCB8fCBzZWxlY3RlZCkge1xuICAgICAgc2V0UmVzdWx0cyhbXSk7XG4gICAgICBzZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBzaG91bGQgbm90IGV4cGxvZGVcIik7XG4gICAgICBzZXRTZWFyY2hpbmcodHJ1ZSk7XG4gICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgc2VhcmNoQWRkcmVzcyh0eXBlZClcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICBzZXRSZXN1bHRzKHJlcyk7XG4gICAgICAgICAgc2V0U2VhcmNoaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGU9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZydzIHdyb25nXCIsIGUpO1xuICAgICAgICAgIHNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICBzZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgc2V0UmVzdWx0cyhbXSk7XG4gICAgfTtcbiAgfSwgW3R5cGVkXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGRhdGEtY3k9e3Byb3BzW1wiZGF0YS1jeVwiXX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXskcy5JbnB1dEZpZWxkQm94fT5cblxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXskcy5JbnB1dEZpZWxkfSBcbiAgICAgICAgICBvbkNoYW5nZT17c3RhcnRUeXBpbmd9IHZhbHVlPXt0eXBlZH1cbiAgICAgICAgICBvbkZvY3VzPXtmb2N1c09uSW5wdXR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLndoYXRUb1R5cGUgfHwgXCJEb24ndCBmb3JnZXQgdG8gc3BlY2lmeSBsYWJlbFwifS8+XG4gICAgICAgIFxuICAgICAgICB7dHlwZWQgJiYgPGJ1dHRvbiBjbGFzc05hbWU9eyRzLkRlbGV0ZX0gb25DbGljaz17Y2xpY2tEZWxldGV9Plg8L2J1dHRvbj59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9eyRzLlJlc3VsdEJveEFuY2hvcn0+XG4gICAgICAgICAge3Nob3dSZXN1bHQgJiYgXG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyRzLlJlc3VsdEJveH0gb25CbHVyPXtlPT57c2V0U2hvdyhmYWxzZSl9fT5cbiAgICAgICAgICAgIHtzZWFyY2hpbmcgJiYgPFNlYXJjaGluZ0ZvclJlc3VsdC8+fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7cmVzdWx0cy5sZW5ndGggPT09IDAgfHwgKFxuICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0IHJlc3VsdHM9e3Jlc3VsdHN9IHNldHRlcnM9e3tzZXRUeXBlZCwgc2V0U2hvdywgc2V0U2VsZWN0ZWR9fSAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgIFxuICApXG59IiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGVmZmVjdCwgZGVwcykgPT4ge1xuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgbGV0IGVmZmVjdFJldHVybnMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmlyc3RSZW5kZXIuY3VycmVudCkge1xuICAgICAgZmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZmZlY3RSZXR1cm5zID0gZWZmZWN0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0UmV0dXJucztcbiAgfSwgZGVwcylcbn0iLCJleHBvcnQgZGVmYXVsdCAoYWRkcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICBpZiAoYWRkciA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57cmVzb2x2ZShbXCJBZGRyZXNzIG5vdCBmb3VuZFwiXSl9LCAxMDAwKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57cmVzb2x2ZShcbiAgICAgICAgW2Ake2FkZHJ9LCBPTmAsIGAke2FkZHJ9LCBRQmAsIGAke2FkZHJ9LCBOU2AsIGAke2FkZHJ9LCBCQ2AsIGAke2FkZHJ9LCBOTGAsIGAke2FkZHJ9LCBNQmBdXG4gICAgICApfSwgMTAwMClcbiAgICB9XG4gIH0pXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgJHMgZnJvbSBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFR5cGVOU2VhcmNoIGZyb20gXCIuLi9UeXBlTlNlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwaWNrdXAsIHNldFBpY2t1cF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc3QsIHNldERlc3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY2FsY3VsYXRlUm91dGUgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXskcy5SZXFQaWNrdXBUaXRsZX0+RGVsaXZlciB5b3VyIHBhcmNlbCBub3c8L3A+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9eyRzLlJlcXVlc3RQaWNrdXBGb3JtfVxuICAgICAgICBvblN1Ym1pdD17Y2FsY3VsYXRlUm91dGV9XG4gICAgICA+XG4gICAgICAgICAgPFR5cGVOU2VhcmNoIFxuICAgICAgICAgICAgdHlwZXdyaXRlcj17W3BpY2t1cCwgc2V0UGlja3VwXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JHMuU2VhcmNoQm94fSBcbiAgICAgICAgICAgIHdoYXRUb1R5cGU9XCJFbnRlciBwaWNrdXAgbG9jYXRpb25cIi8+XG4gICAgICAgICAgPFR5cGVOU2VhcmNoIFxuICAgICAgICAgICAgdHlwZXdyaXRlcj17W2Rlc3QsIHNldERlc3RdfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXskcy5TZWFyY2hCb3h9IFxuICAgICAgICAgICAgd2hhdFRvVHlwZT1cIkVudGVyIGRlc3RpbmF0aW9uXCIvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17JHMuUmVxdWVzdEJ1dHRvbn0+UmVxdWVzdCBub3c8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZXF1ZXN0Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=