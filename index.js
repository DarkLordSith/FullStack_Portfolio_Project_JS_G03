import{a as S,i as h}from"./assets/vendor-DM1_jADJ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const L="https://portfolio-js.b.goit.study/api/reviews";let o=0,c=[],n=j();const E=document.querySelector(".reviews-list"),p=document.querySelector(".slider-button-prev"),g=document.querySelector(".slider-button-next"),b=p.querySelector(".icon-button-swipe"),I=g.querySelector(".icon-button-swipe");async function w(){try{c=(await S.get(L)).data,d(c),m()}catch{h.error({title:"Error",message:"Failed to load reviews. Please try again later."}),N()}}function j(){const e=window.innerWidth;return e>=1280?2:(e>=768,1)}function d(e){const a=e.slice(o,o+n).map(r=>`
      <li class="review-item">
          <p class="author-feedback">${r.review}</p>
            <div class="avatar-text-container">
             <img class="review-avatar" src="${r.avatar_url}" alt="${r.author}" />
             <h3 class="name-author">${r.author}</h3>
          </div>
        </div>
      </li>
    `).join("");E.innerHTML=a}function N(){E.innerHTML='<p class="no-reviews">Not found</p>'}function m(){const e=o===0,i=o+n>=c.length;p.disabled=e,g.disabled=i,p.classList.toggle("disabled",e),g.classList.toggle("disabled",i),b.classList.toggle("icon-disabled",e),I.classList.toggle("icon-disabled",i)}function R(){p.addEventListener("click",()=>{o>0&&(o-=n,d(c),m())}),g.addEventListener("click",()=>{o+n<c.length&&(o+=n,d(c),m())}),window.addEventListener("resize",()=>{const e=j();e!==n&&(n=e,o=0,d(c),m())})}function k(){w(),R()}const f=[{images:{360:{"1x":"./img/myproject/Financ-mob.1x.jpg","2x":"./img/myproject/Financ-mob.2x.jpg"},767:{"1x":"./img/myproject/Financ-tab.1x.jpg","2x":"./img/myproject/Financ-tab.2x.jpg"},1280:{"1x":"./img/myproject/Financ-desc.1x.jpg","2x":"./img/myproject/Financ-desc.2x.jpg"}},stack:"React, JavaScript, Node JS, Git",title:"WALLET WEBSERVICE",link:"#"},{images:{360:{"1x":"./img/myproject/Diet-mob.1x.jpg","2x":"./img/myproject/Diet-mob.2x.jpg"},767:{"1x":"./img/myproject/Diet-tab.1x.jpg","2x":"./img/myproject/Diet-tab.2x.jpg"},1280:{"1x":"./img/myproject/Diet-desc.1x.jpg","2x":"./img/myproject/Diet-desc.2x.jpg"}},stack:"React, JavaScript, Node JS, Git",title:"GREEN HARVEST WEBSERVICE",link:"#"},{image:"./img/myproject/Learn-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"ENGLISH EXCELLENCE WEBSERVICE",link:"#"},{image:"./img/myproject/Mimino-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"#"},{image:"./img/myproject/Artistry-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"#"},{image:"./img/myproject/Body-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"#"},{image:"./img/myproject/Power-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"#"},{image:"./img/myproject/Fresh-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"Fruitbox online store",link:"#"},{image:"./img/myproject/first screen-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"#"}];let l=0;const v=3,J=document.getElementById("projects-list"),x=document.getElementById("load-more");x.addEventListener("click",y);function y(){f.slice(l,l+v).forEach(i=>{const a=document.createElement("li");a.innerHTML=`
                    <img src="${i.images}" alt="${i.title}">
                    <div class="info">
                        <p class="stack">${i.stack}</p>
                        <div class="info-text">
                        <h3 class="title">${i.title}</h3>
                        <a href="${i.link}" class="link-visit" target="_blank">
                    <span class="text-visit">VISIT</span>
                        <svg class="icon-arrow" width="24" height="24" >
                  <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </a>
                </div>
                    </div>
                   
                `,J.appendChild(a)}),l+=v,l>=f.length&&x.classList.add("hidden")}y();document.addEventListener("DOMContentLoaded",()=>{k()});
//# sourceMappingURL=index.js.map
