var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequire37c5;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequire37c5=o),o("72Z32"),o("iZRpi"),o("fMtCK");var a=o("72Z32"),i=o("iZRpi");const r=new(0,a.default),u=document.querySelector(".js-films-list-index");window.addEventListener("load",(function(){r.fetchPopular().then((({results:t})=>{(0,i.default)(t,u)}))}));a=o("72Z32"),i=o("iZRpi");var s=o("fMtCK");const l=new(0,a.default),c=document.querySelector(".input__wraper"),d=document.querySelector(".js-films-list-index");c.addEventListener("submit",(function(t){t.preventDefault(),l.query=t.currentTarget.elements.searchQuery.value,l.resetPage(),l.fetchMoviesySearch().then((({results:t})=>{(0,s.default)(),(0,i.default)(t,d)}))}));const f={arrowLeft:document.querySelector("button[aria-label='previous-page'"),arrowRight:document.querySelector("button[aria-label='next-page'"),pagination:document.querySelector(".pagination"),firstButton:document.querySelector(".firstButton-and-threeDots"),lastButton:document.querySelector(".lastButton-and-threeDots")};let p=1;function g(){let t=p-2,e=p+2;t<3&&(t=1,e=5);for(let n=t;n<=e;n+=1)if(n===p){const t=`<button id="paginationButton" data-page="${n}" class="button-page paginationButton active">${n}</button>`;f.pagination.insertAdjacentHTML("beforeend",t)}else{const t=`<button id="paginationButton" data-page="${n}" class="button-page paginationButton">${n}</button>`;f.pagination.insertAdjacentHTML("beforeend",t)}if(t>=3){if(v())return;{const t='<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>',e="<span class='page-buttons__points'>···</span>";f.firstButton.insertAdjacentHTML("beforeend",t),f.firstButton.insertAdjacentHTML("beforeend",e)}}t<3&&v()&&(f.firstButton.innerHTML="")}function b(){f.pagination.innerHTML=""}function v(){return null!==document.querySelector(".page-buttons__points")}g(),f.arrowLeft.addEventListener("click",(function(){1!==p&&(p-=1,b(),g())})),f.arrowRight.addEventListener("click",(function(){p+=1,b(),g()})),f.pagination.addEventListener("click",(function(t){t.preventDefault(),t.target!==t.currentTarget&&(p=Number(t.target.dataset.page),b(),g())})),o("jxohN"),o("iZDtr"),o("2VTKf"),o("iiPHV");
//# sourceMappingURL=index.99901adc.js.map
