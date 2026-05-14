import{a as S,S as q,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const B="55821000-c477eb790cad5f38062000930",M="https://pixabay.com/api/";async function f(s,t=1){const a={key:B,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await S.get(M,{params:a})).data}const m=document.querySelector(".gallery"),d=document.querySelector(".loader-wrap"),y=document.querySelector(".btn"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function g(s){const t=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:c,comments:v,downloads:w})=>`
<li class="gallery-item">
  <a href="${o}" class="gallery-link">
    <img class="gallery-image" src="${a}" 
         alt="${e}" 
          />
  </a>
  <div class="info">
  <p><span class="info-label">Likes</span><span>${r}</span></p>
  <p><span class="info-label">Views</span><span>${c}</span></p>
  <p><span class="info-label">Comments</span><span>${v}</span></p>
  <p><span class="info-label">Downloads</span><span>${w}</span></p>
  </div>
</li>
    `).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}function E(){m.innerHTML=""}function h(){d.classList.remove("is-hidden"),d.classList.add("show")}function L(){d.classList.add("is-hidden"),d.classList.remove("show")}function b(){y.classList.add("visible")}function u(){y.classList.remove("visible")}const $=document.querySelector(".btn"),O=document.getElementById("search-form"),I=document.getElementById("search-input");let l="",i=1,p=0;O.addEventListener("submit",async s=>{if(s.preventDefault(),l=I.value.trim(),!l){n.error({message:"Please enter a search query!"});return}i=1,E(),h();try{u();const t=await f(l,i);if(p=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits);const a=Math.ceil(p/15);i<a?b():(u(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong. Try again!"})}finally{L()}});$.addEventListener("click",async()=>{i+=1;try{h(),u();const s=await f(l,i);g(s.hits);const t=Math.ceil(p/15);i>=t?(u(),n.info({message:"We're sorry, but you've reached the end of search results."})):b();const o=document.querySelector(".gallery a").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch{n.error({message:"Error loading more images"})}finally{L()}});
//# sourceMappingURL=index.js.map
