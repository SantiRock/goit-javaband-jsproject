const e={watchedId:[]},t={queueId:[]};function n(){null===localStorage.getItem("queue")?t.watchedId=[]:t.queueId=JSON.parse(localStorage.getItem("queue")).queueId}function a(){null===localStorage.getItem("watched")?e.watchedId=[]:e.watchedId=JSON.parse(localStorage.getItem("watched")).watchedId}n(),a();var s=function(n){const a=document.querySelector(".modalw"),s=(n.title||n.name).toUpperCase(),l=(n.original_title||n.name).toUpperCase(),d=n.popularity.toFixed(1),o=n.vote_average.toFixed(1),c=n.genres.map((e=>e.name)).join(", "),i=`\n      <div class="modal-header">\n        \n        <button class="modal-close">&times;</button>\n      </div>\n      <div class='poster_container'>\n        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500${n.poster_path}" alt="${n.title}">\n      </div>\n      <div class='info'>\n        <h3 class="modal-title">${s}</h3>\n\n        <table>\n          <tr>\n            <th class='t1'>Vote / Votes</th>\n            <th><span class='films__rate'>${o}</span> / ${n.vote_count}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Popularity</th>\n            <th>${d}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Original Title</th>\n            <th>${l}</th>\n          </tr>\n          <tr>\n            <th class='t1'>Genre</th>\n            <th>${c}</th>\n          </tr>\n        </table>\n          <p>ABOUT</p>\n          <p class='about'>${n.overview}</p>\n          <div class="modal-btns">\n            <button class="addw">ADD TO WATCHED</button>\n            <button class="addq">ADD TO QUEUE</button>\n        </div>\n      </div>\n    `,r=document.createElement("div");r.innerHTML=i,r.classList.add("modal-content"),a.appendChild(r),a.style.display="flex",r.querySelector(".modal-close").addEventListener("click",(()=>{a.style.display="none",r.remove()}));const u=e.watchedId,m=t.queueId,p=r.querySelector(".addw"),h=r.querySelector(".addq");u.includes(n.id)&&(p.style.backgroundColor="rgba(255, 107, 1, 0.5)",p.style.cursor="default",h.style.cursor="default"),m.includes(n.id)&&(h.style.cursor="default"),p.disabled=u.includes(n.id),p.addEventListener("click",(()=>{if(u.push(n.id),localStorage.setItem("watched",JSON.stringify(e)),p.style.backgroundColor="rgba(255, 107, 1, 0.5)",p.style.cursor="default",h.style.cursor="default",p.disabled=u.includes(n.id),h.disabled=m.includes(n.id)||u.includes(n.id),m.includes(n.id)){const e=m.indexOf(n.id);m.splice(e,1),localStorage.setItem("queue",JSON.stringify(t))}window.location.reload(),console.log(localStorage)})),h.disabled=m.includes(n.id)||u.includes(n.id),h.addEventListener("click",(()=>{m.push(n.id),localStorage.setItem("queue",JSON.stringify(t)),h.style.cursor="default",h.disabled=m.includes(n.id),console.log(localStorage)})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(a.style.display="none",r.remove())})),document.addEventListener("click",(e=>{e.target===a&&(a.style.display="none",r.remove())}))};const l=document.querySelector(".films");var d=function(e){const t=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/500x750?text=No+poster+available",n=e.title.toUpperCase(),a=e.vote_average.toFixed(1),d=e.release_date.slice(0,4);let o=e.genres.map((e=>e.name)).join(", ");const c=document.createElement("div");c.classList.add("films__card");let i=`\n    <img class='films__poster' src=${t} alt=${n} loading='lazy' class='poster'>\n    <p class='films__title'>${n}</p>\n    <p class='films__details'>${o} | ${d}</p>\n    <div class='films__rate'>${a}</div>\n    `;c.innerHTML=i,l.appendChild(c),c.addEventListener("click",(()=>{s(e)}))};const o=document.querySelector(".watched"),c=document.querySelector(".queue"),i=document.querySelector(".films"),r=document.querySelector(".msn"),u=document.querySelector(".pages"),m=document.querySelector(".screen");console.log(localStorage),n(),a();let p=t.queueId,h=e.watchedId;p=null===localStorage.getItem("queue")?[]:JSON.parse(localStorage.getItem("queue")).queueId,h=null===localStorage.getItem("watched")?[]:JSON.parse(localStorage.getItem("watched")).watchedId;function g(e,t){if(0===e.length)r.textContent="No movies have been added to Watched list yet";else{const n=12*(t-1),a=n+12,s=e.slice(n,a);i.innerHTML="",s.forEach((e=>{m.style.display="flex",fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=0a3a4e00d84de20a8f1b6dfc8a7cdfd5&language=en-US`).then((e=>e.json())).then((e=>d(e))).catch((e=>console.error(e))).finally((()=>m.style.display="none"))})),b(h,v,1)}}const v=Math.ceil(h.length/12),y=Math.ceil(p.length/12),b=(e,t,n)=>{u.innerHTML="";const a=document.createElement("button");a.textContent="←",a.classList.add("pagebtn"),a.disabled=1===n,a.addEventListener("click",(()=>{n--,g(e,n),b(e,t,n)})),u.append(a);const s=document.createElement("button");s.textContent="1",s.classList.add("page"),s.disabled=1===n,s.addEventListener("click",(()=>{g(e,n=1),b(e,t,n)})),u.append(s);const l=document.createElement("div");l.textContent="...",l.classList.add("dots"),u.append(l);const d=Math.max(n-Math.floor(2.5),1),o=Math.max(n-5+1,1),c=Math.max(n-5+2,1);let i;i=n===t?o:n===t-1?c:d;const r=Math.min(i+5-1,t);for(let a=i;a<=r;a++){const s=document.createElement("button");s.classList.add("page"),s.textContent=a,s.disabled=a===n,a===n?s.classList.add("activePage"):s.classList.remove("activePage"),s.addEventListener("click",(()=>{g(e,n=a),b(e,t,n)})),u.append(s)}const m=document.createElement("div");m.textContent="...",m.classList.add("dots"),u.append(m);const p=document.createElement("button");p.textContent=t,p.classList.add("page"),p.disabled=n===t,p.addEventListener("click",(()=>{g(e,n=t),b(e,t,n)})),u.append(p);const h=document.createElement("button");h.textContent="→",h.classList.add("pagebtn"),h.disabled=n===t,h.addEventListener("click",(()=>{n++,g(e,n),b(e,t,n)})),u.append(h)};o.addEventListener("click",(e=>{e.preventDefault(),o.classList.add("selected"),c.classList.remove("selected"),0===h.length?(i.innerHTML="",r.textContent="No movies have been added to Watched list yet",u.innerHTML=""):(g(h,1),b(h,v,1))})),c.addEventListener("click",(e=>{e.preventDefault(),c.classList.add("selected"),o.classList.remove("selected"),0===p.length?(i.innerHTML="",r.textContent="No movies have been added to Queue list yet",u.innerHTML=""):(g(p,1),b(p,y,1))})),u.innerHTML="",g(h,1);
//# sourceMappingURL=mylibrary.1361d1ce.js.map
