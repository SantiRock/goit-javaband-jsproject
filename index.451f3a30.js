function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register("btpe3",(function(t,n){e(t.exports,"render",(function(){return l})),e(t.exports,"paginationH",(function(){return c}));var a=o("7cEWj");console.log(localStorage);let s=1,d=50;const r=document.querySelector(".screen");const l=()=>{(r.style.display="flex",fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=0a3a4e00d84de20a8f1b6dfc8a7cdfd5&per_page=18&page=${s}`).then((e=>{if(!e.ok)throw r.style.display="none",new Error(e.status);return e.json()})).finally((()=>r.style.display="none"))).then((e=>(0,a.default)(e)))};l();const i=document.querySelector(".pages"),c=()=>{i.innerHTML="";const e=document.createElement("button");e.textContent="←",e.classList.add("pagebtn"),e.disabled=1===s,e.addEventListener("click",(()=>{s--,l(),c()})),i.append(e);const t=document.createElement("button");t.textContent="1",t.classList.add("page"),t.disabled=1===s,t.addEventListener("click",(()=>{s=1,l(),c()})),i.append(t);const n=document.createElement("div");n.textContent="...",n.classList.add("dots"),i.append(n);const a=Math.max(s-Math.floor(2.5),1),o=Math.max(s-5+1,1),r=Math.max(s-5+2,1);let u;u=s===d?o:49===s?r:a;const p=Math.min(u+5-1,d);for(let e=u;e<=p;e++){const t=document.createElement("button");t.classList.add("page"),t.textContent=e,t.disabled=e===s,e===s?t.classList.add("activePage"):t.classList.remove("activePage"),t.addEventListener("click",(()=>{s=e,l(),c()})),i.append(t)}const g=document.createElement("div");g.textContent="...",g.classList.add("dots"),i.append(g);const f=document.createElement("button");f.textContent=d,f.classList.add("page"),f.disabled=s===d,f.addEventListener("click",(()=>{s=d,l(),c()})),i.append(f);const m=document.createElement("button");m.textContent="→",m.classList.add("pagebtn"),m.disabled=s===d,m.addEventListener("click",(()=>{s++,l(),c()})),i.append(m)};c()})),o.register("7cEWj",(function(t,n){e(t.exports,"default",(function(){return r}));var a=o("ezyJp"),s=o("bTcpz");const d=document.querySelector(".films");var r=function e(t){d.innerHTML="",0===a.genresArr.length&&(0,a.loadGenres)().then((()=>{e(t)})),t.results.slice(0,12).map((e=>{const t=e.genre_ids,n=[];for(let e=0;e<t.length;e++){let o=a.genresArr.find((n=>n.id===t[e]));o&&n.push(o.name)}const o=n.join(", "),r=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/500x750?text=No+poster+available",l=document.createElement("div");l.classList.add("films__card"),l.innerHTML=`\n        <img class= "films__poster" src=${r}></> \n        <p class= "films__title">${e.title||e.name}</p>\n        <p class= "films__details">${o} | ${e.release_date&&e.release_date.slice(0,4)||e.first_air_date.slice(0,4)}</p>\n        <div class='films__rate'>${e.vote_average.toFixed(1)}</div>\n    `,d.appendChild(l),l.addEventListener("click",(()=>{(0,s.default)(e)}))})).join("")}})),o.register("ezyJp",(function(t,n){e(t.exports,"genresArr",(function(){return a})),e(t.exports,"loadGenres",(function(){return o}));let a=[];function o(){return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0a3a4e00d84de20a8f1b6dfc8a7cdfd5&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>(a=e.genres,a)))}})),o.register("bTcpz",(function(t,n){e(t.exports,"default",(function(){return d}));var a=o("bOFJ0"),s=o("ezyJp");var d=function(e){const t=document.querySelector(".modalw"),n=(e.title||e.name).toUpperCase(),o=(e.original_title||e.name).toUpperCase(),d=e.popularity.toFixed(1),r=e.vote_average.toFixed(1),l=e.genre_ids,i=[];for(let e=0;e<l.length;e++){let t=s.genresArr.find((t=>t.id===l[e]));t&&i.push(t.name)}const c=i.join(", "),u=`\n      <div class="modal-header">\n        \n        <button class="modal-close">&times;</button>\n      </div>\n      <div class='poster_container'>\n        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${n}">\n      </div>\n      <div class='info'>\n        <h3 class="modal-title">${n}</h3>\n\n        <table>\n          <tr>\n            <th class='t1'>Vote / Votes</th>\n            <th><span class='films__rate'>${r}</span> / ${e.vote_count}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Popularity</th>\n            <th>${d}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Original Title</th>\n            <th>${o}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Genre</th>\n            <th>${c}</th>\n          </tr>\n        </table>\n          <p>ABOUT</p>\n          <p class='about'>${e.overview}</p>\n          <div class="modal-btns">\n            <button class="addw">ADD TO WATCHED</button>\n            <button class="addq">ADD TO QUEUE</button>\n        </div>\n      </div>\n    `,p=document.createElement("div");p.innerHTML=u,p.classList.add("modal-content"),t.appendChild(p),t.style.display="flex",p.querySelector(".modal-close").addEventListener("click",(()=>{t.style.display="none",p.remove()}));const g=a.watchedLocalStorage.watchedId,f=a.queueLocalStorage.queueId,m=p.querySelector(".addw");g.includes(e.id)&&(m.style.backgroundColor="rgba(255, 107, 1, 0.5)"),f.includes(e.id),m.disabled=g.includes(e.id),m.addEventListener("click",(()=>{g.push(e.id),localStorage.setItem("watched",JSON.stringify(a.watchedLocalStorage)),m.style.backgroundColor="rgba(255, 107, 1, 0.5)",m.disabled=g.includes(e.id),h.disabled=f.includes(e.id)||g.includes(e.id),console.log(localStorage)}));const h=p.querySelector(".addq");h.disabled=f.includes(e.id)||g.includes(e.id),h.addEventListener("click",(()=>{f.push(e.id),localStorage.setItem("queue",JSON.stringify(a.queueLocalStorage)),h.disabled=f.includes(e.id)||g.includes(e.id),console.log(localStorage)})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(t.style.display="none",p.remove())})),document.addEventListener("click",(e=>{e.target===t&&(t.style.display="none",p.remove())}))}})),o.register("bOFJ0",(function(t,n){e(t.exports,"watchedLocalStorage",(function(){return a})),e(t.exports,"queueLocalStorage",(function(){return o})),e(t.exports,"getLocalq",(function(){return s})),e(t.exports,"getLocalw",(function(){return d}));const a={watchedId:[]},o={queueId:[]};function s(){null===localStorage.getItem("queue")?o.watchedId=[]:o.queueId=JSON.parse(localStorage.getItem("queue")).queueId}function d(){null===localStorage.getItem("watched")?a.watchedId=[]:a.watchedId=JSON.parse(localStorage.getItem("watched")).watchedId}s(),d()})),o("btpe3");
//# sourceMappingURL=index.451f3a30.js.map
