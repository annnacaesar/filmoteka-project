function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire37c5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire37c5=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.d81b2b5b.js","9cBl5":"noImageAvailable.4bf2d6d5.jpg","b9auz":"index.44bba2c0.js"}'));var o={API_KEY:"7cb8097836a7a1f4e5c19953961668c8",BASE_URL:"https://api.themoviedb.org/3",IMG_URL:"https://image.tmdb.org/t/p/w500/"},r=i("iiPHV");const{API_KEY:l,BASE_URL:s}=o,c=`${s}/search/movie?api_key=${l}&include_adult=false`;class u{fetchMoviesySearch(){return(0,r.default)(),fetch(`${c}&query=${this.searchQuery}&language=${this.language}&page=${this.currentPage}`).then((e=>e.json())).finally(r.default)}async fetchPopular(){(0,r.default)();const e=`${s}/trending/movie/day?api_key=${l}&page=${this.currentPage}`;return fetch(e).then((e=>e.json())).finally(r.default)}async getMovieDetails(e){(0,r.default)();return fetch(`${s}/movie/${e}?api_key=${l}`).then((e=>e.json())).finally(r.default)}async fetchById(){(0,r.default)();const e=await fetch(`${s}/movie/${this.movieId}?api_key=${l}`);return await e.json().finally(r.default)}async fetchTrailer(e){(0,r.default)();const t=await fetch(`${s}/movie/${e}/videos?api_key=${l}`);return await t.json()}getMoviedId(e){this.movieId=e}getItemFromLS(e){return localStorage.getItem(e)}addMovie(e,t){let n=JSON.parse(this.getItemFromLS(t));return null===n&&(n=[]),n.push(e),localStorage.setItem(t,JSON.stringify(n))}deleteMovie(e){let t=JSON.parse(this.getItemFromLS(e));const n=t.filter((e=>e.id!==Number(this.movieId)));return t=n,localStorage.setItem(e,JSON.stringify(t))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get page(){return this.currentPage}set page(e){this.currentPage=e}constructor(){this.searchQuery="",this.currentPage=1,this.language="en-US",this.genres="",this.movieId=0}}var d=e(i("amrNH")).template({1:function(e,t,n,a,i){var o,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="films__item" data-id='+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:l)===s?o.call(r,{name:"id",hash:{},data:i,loc:{start:{line:2,column:34},end:{line:2,column:40}}}):o)+'>\n\n    <a href="" class="films__wrapper">\n      <div class="films__img-wrapper">\n        <img class="films__img" src="'+c(typeof(o=null!=(o=u(n,"img")||(null!=t?u(t,"img"):t))?o:l)===s?o.call(r,{name:"img",hash:{},data:i,loc:{start:{line:6,column:37},end:{line:6,column:44}}}):o)+'" alt="'+c(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===s?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:6,column:51},end:{line:6,column:60}}}):o)+'" loading="lazy" />\n      </div>\n\n      <div class="films__info">\n        <p class="films__name">'+c(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:l)===s?o.call(r,{name:"title",hash:{},data:i,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):o)+'</p>\n\n        <p class="films__description">\n          '+c(typeof(o=null!=(o=u(n,"genre")||(null!=t?u(t,"genre"):t))?o:l)===s?o.call(r,{name:"genre",hash:{},data:i,loc:{start:{line:13,column:10},end:{line:13,column:19}}}):o)+"\n          |\n          "+c(typeof(o=null!=(o=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?o:l)===s?o.call(r,{name:"releaseDate",hash:{},data:i,loc:{start:{line:15,column:10},end:{line:15,column:25}}}):o)+'\n        </p>\n      </div>\n    </a>\n\n    <div class="trailer-button">\n      <a href="#" class="video-play-btn" aria-label="watch trailer"></a>\n    </div>\n\n  </li>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:25,column:9}}}))?o:""},useData:!0}),m={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};[1,2,3,4,5,6,7].slice(0,4);var f;f=new URL(i("kyEFX").resolve("9cBl5"),import.meta.url).toString();const{API_KEY:g,BASE_URL:p,IMG_URL:h}=o,y=e=>e.map((e=>m[`${e}`])),v=e=>e.map((e=>e.name)),_=({genres:t=null,genre_ids:n=null,id:a,original_title:i,overview:o,popularity:r,poster_path:l,release_date:s,vote_average:c,vote_count:u})=>{return{genre:n?y(n):v(t),id:a,title:i,about:o,popularity:r,img:(m=l,m?`${h}${m}`:`${e(f)}`),releaseDate:s?(d=s,d?d.slice(0,4):data):"",vote:c,votes:u};var d,m};function b(e,t){const n=e.map((e=>{let t=_(e);return t.genre.length<=3?t.genre=t.genre.join(", "):t.genre=[t.genre[0],t.genre[1],"Other"].join(", "),t}));t.insertAdjacentHTML("beforeend",d(n))}const w=document.querySelector(".js-films-list-index");function S(){w.innerHTML=""}const L=new u,q={arrowLeft:document.querySelector("button[aria-label='previous-page'"),arrowRight:document.querySelector("button[aria-label='next-page'"),pagination:document.querySelector(".pagination"),firstButton:document.querySelector(".firstButton-and-threeDots"),lastButton:document.querySelector(".lastButton-and-threeDots"),filmsContainerIndex:document.querySelector(".js-films-list-index"),inputError:document.querySelector(".input__error")};let $,E=1;function T(e,t){if(E>$)return;E=e,$=t;let n=E-2,a=E+2;E!==$&&E+1!==$||(n=E-3,a=$),E+3===$&&(a=$),n<3&&(n=1,a=5),$<=5&&(n=E,a=$);for(let e=n;e<=a;e+=1)if(e===E){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton active">${e}</button>`;q.pagination.insertAdjacentHTML("beforeend",t)}else{const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`;q.pagination.insertAdjacentHTML("beforeend",t)}if(n>=3){if(O())return;!function(){const e='<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>',t="<span class='page-buttons__first-points'>···</span>";q.firstButton.insertAdjacentHTML("beforeend",e),q.firstButton.insertAdjacentHTML("beforeend",t)}()}if(n<3&&O()&&(q.firstButton.innerHTML=""),E===$||E+1===$||E+2===$||E+3===$)return q.lastButton.innerHTML="",void(q.lastButton.style.marginRight=0);null===document.querySelector(".page-buttons__last-points")&&(!function(e){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`,n="<span class='page-buttons__last-points'>···</span>";q.lastButton.insertAdjacentHTML("beforeend",n),q.lastButton.insertAdjacentHTML("beforeend",t),q.lastButton.style.marginRight="10px"}($),q.arrowLeft.onclick=j,q.arrowRight.onclick=B,q.pagination.onclick=k,q.firstButton.onclick=M,q.lastButton.onclick=I)}function M(e){"BUTTON"===e.target.nodeName&&(E=1,N(L.query,E))}function I(e){"BUTTON"===e.target.nodeName&&(E=$,N(L.query,E))}function j(){1!==E&&(E-=1,N(L.query,E))}function B(){E!==$&&(E+=1,N(L.query,E))}function x(){q.pagination.innerHTML="",q.firstButton.innerHTML="",q.lastButton.innerHTML=""}function k(e){e.preventDefault(),e.target!==e.currentTarget&&(E=Number(e.target.dataset.page),N(L.query,E))}function O(){return null!==document.querySelector(".page-buttons__first-points")}function H(e,t){L.query=e,L.page=t,sessionStorage.setItem("query",e),sessionStorage.setItem("page",t),L.fetchMoviesySearch().then((({results:e,total_pages:t})=>{0!==e.length?(S(),b(e,q.filmsContainerIndex),x(),T(L.page,t)):q.inputError.textContent="Search result not successful. Enter the correct movie name and smile : )"}))}function N(e,t){if(""===e)return E=t,L.page=E,L.query="",sessionStorage.setItem("query",L.query),sessionStorage.setItem("page",E),L.fetchPopular().then((({results:e,total_pages:t})=>{S(),b(e,q.filmsContainerIndex),x(),T(L.page,t)})),void P();H(e,t),P()}function P(){window.scrollTo(pageXOffset,0)}new u,document.querySelector(".js-films-list-index");const A=document.querySelector(".logo");window.addEventListener("load",(function(){let e=sessionStorage.getItem("query"),t=sessionStorage.getItem("page");null===e&&(e="");null===t&&(t=1);N(e,Number(t))})),A.addEventListener("click",(function(e){e.preventDefault();N("",1)}));var D=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,F=/^0o[0-7]+$/i,U=parseInt,Q="object"==typeof t&&t&&t.Object===Object&&t,W="object"==typeof self&&self&&self.Object===Object&&self,J=Q||W||Function("return this")(),G=Object.prototype.toString,V=Math.max,Y=Math.min,K=function(){return J.Date.now()};function X(e,t,n){var a,i,o,r,l,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=a,o=i;return a=i=void 0,c=t,r=e.apply(o,n)}function g(e){return c=e,l=setTimeout(h,t),u?f(e):r}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=o}function h(){var e=K();if(p(e))return y(e);l=setTimeout(h,function(e){var n=t-(e-s);return d?Y(n,o-(e-c)):n}(e))}function y(e){return l=void 0,m&&a?f(e):(a=i=void 0,r)}function v(){var e=K(),n=p(e);if(a=arguments,i=this,s=e,n){if(void 0===l)return g(s);if(d)return l=setTimeout(h,t),f(s)}return void 0===l&&(l=setTimeout(h,t)),r}return t=Z(t)||0,z(n)&&(u=!!n.leading,o=(d="maxWait"in n)?V(Z(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,a=s=i=l=void 0},v.flush=function(){return void 0===l?r:y(K())},v}function z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Z(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==G.call(e)}(e))return NaN;if(z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(D,"");var n=C.test(e);return n||F.test(e)?U(e.slice(2),n?2:8):R.test(e)?NaN:+e}const ee=new u,te=document.querySelector(".input__wraper"),ne=document.querySelector(".input__error");document.querySelector(".js-films-list-index");te.addEventListener("submit",(function(e){if(e.preventDefault(),ee.query=e.currentTarget.searchQuery.value.trim(),ne.textContent=" ",ee.resetPage(),!ee.query)return void(ne.textContent="Please enter something to search ");H(ee.query,ee.page)})),i("jxohN");let ae={};const ie=[],oe=[],re=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},le=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};function se(e){const t=document.querySelector(".btn-watch.is-active");e.currentTarget.classList.toggle("is-active");const n=le("allWatchedMovies");if(t){let e;n.forEach((({id:t},n)=>t===ae.id?e=n:n)),ie.splice(e,1),re("allWatchedMovies",ie)}!!n&&n.find((({id:e})=>e===ae.id))||(ie.push(ae),re("allWatchedMovies",ie))}function ce(e){const t=document.querySelector(".btn-queue.is-active");e.currentTarget.classList.toggle("is-active");const n=le("allQueueMovies");if(t){let t;e.currentTarget.textContent="add to Queue",n.forEach((({id:e},n)=>e===ae.id?t=n:n)),oe.splice(t,1),re("allQueueMovies",oe)}!!n&&n.find((({id:e})=>e===ae.id))||(oe.push(ae),re("allQueueMovies",oe))}var ue=i("9B8F0");const de=new u,me=document.querySelector(".trailer__window"),fe=document.querySelector(".trailer__backdrop");function ge(e){const t=e.currentTarget.dataset.id;de.fetchTrailer(t).then((({results:e})=>{e.forEach((e=>{if("Official Trailer"===e.name){console.log(e.key);document.querySelector(".basicLightbox .modal__container").classList.add("visually-hidden"),t=e.key,console.log(t),fe.classList.remove("visually-hidden"),me.innerHTML=`\n  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  `,fe.addEventListener("click",(e=>{e.target===fe&&pe()}))}var t}))}))}function pe(){document.querySelector(".basicLightbox .modal__container").classList.remove("visually-hidden"),fe.classList.add("visually-hidden"),me.innerHTML=""}fe.addEventListener("click",(e=>{e.target===fe&&pe()}));const{IMG_URL:he}=o,ye=new u;async function ve(e){const t=await ye.getMovieDetails(e).then((e=>e)),n=_(t);return ae=n,n}({cardContainer:document.querySelector(".films__container")}).cardContainer.addEventListener("click",(async function(e){if(e.preventDefault(),"DIV"!==e.target.nodeName&&"UL"!==e.target.nodeName){if("IMG"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await ve(n))}if("P"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await ve(n))}}function t({id:e,img:t,title:n,popularity:a,vote:i,votes:o,about:r,genre:l}){const s=ue.create(`\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap">\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="${t}"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="${e}">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n\t\t\t\t\t</button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">${n}</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                <span class="modal__rating-right-item--color">${i}</span> /\n                <span class="modal__rating-right-item--shadow">${o}</span>\n              </li>\n              <li class="modal__rating-right-item">${a}</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${n}</li>\n              <li class="modal__rating-right-item">${l}</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ${r}\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="${e}">\n            <button class="modal__button btn-watch">add to Watched</button>\n            <button class="modal__button btn-queue">add to queue</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,{onShow:e=>{window.addEventListener("keydown",c),window.addEventListener("click",u),e.element().querySelector(".modal__close").onclick=e.close},onClose:e=>{window.removeEventListener("keydown",c),window.removeEventListener("click",u)}});function c(e){"Escape"===e.code&&s.close()}function u(e){console.log(e.target.classList.value),"basicLightbox__placeholder"===e.target.classList.value&&s.close()}s.show()}document.querySelector(".modal__button-play").addEventListener("click",ge),document.querySelector(".btn-watch").addEventListener("click",se),document.querySelector(".btn-queue").addEventListener("click",ce)})),i("iiPHV");
//# sourceMappingURL=index.d81b2b5b.js.map
