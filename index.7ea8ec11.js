!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire37c5;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire37c5=a),a("l7OcW"),a("kXDXL"),a("dDwfd");var o=a("l7OcW"),r=a("kXDXL"),i=new(0,o.default),u=document.querySelector(".js-films-list-index");window.addEventListener("load",(function(){i.fetchPopular().then((function(t){var e=t.results;(0,r.default)(e,u)}))}));o=a("l7OcW"),r=a("kXDXL");var c=a("dDwfd"),d=new(0,o.default),l=document.querySelector(".input__wraper"),s=document.querySelector(".js-films-list-index");l.addEventListener("submit",(function(t){t.preventDefault(),d.query=t.currentTarget.elements.searchQuery.value,d.resetPage(),d.fetchMoviesySearch().then((function(t){var e=t.results;(0,c.default)(),(0,r.default)(e,s)}))}));var f={arrowLeft:document.querySelector("button[aria-label='previous-page'"),arrowRight:document.querySelector("button[aria-label='next-page'"),pagination:document.querySelector(".pagination"),firstButton:document.querySelector(".firstButton-and-threeDots"),lastButton:document.querySelector(".lastButton-and-threeDots")},p=1;function g(){var t=p-2,e=p+2;t<3&&(t=1,e=5);for(var n=t;n<=e;n+=1)if(n===p){var a='<button id="paginationButton" data-page="'.concat(n,'" class="button-page paginationButton active">').concat(n,"</button>");f.pagination.insertAdjacentHTML("beforeend",a)}else{var o='<button id="paginationButton" data-page="'.concat(n,'" class="button-page paginationButton">').concat(n,"</button>");f.pagination.insertAdjacentHTML("beforeend",o)}if(t>=3){if(v())return;f.firstButton.insertAdjacentHTML("beforeend",'<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>'),f.firstButton.insertAdjacentHTML("beforeend","<span class='page-buttons__points'>···</span>")}t<3&&v()&&(f.firstButton.innerHTML="")}function b(){f.pagination.innerHTML=""}function v(){return null!==document.querySelector(".page-buttons__points")}g(),f.arrowLeft.addEventListener("click",(function(){1!==p&&(p-=1,b(),g())})),f.arrowRight.addEventListener("click",(function(){p+=1,b(),g()})),f.pagination.addEventListener("click",(function(t){t.preventDefault(),t.target!==t.currentTarget&&(p=Number(t.target.dataset.page),b(),g())})),a("7MDoz"),a("3cGbf"),a("296C4"),a("ak33M")}();
//# sourceMappingURL=index.7ea8ec11.js.map
