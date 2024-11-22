(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const a=[{images:{360:{"1x":"./img/myproject/Financ-mob.1x.jpg","2x":"./img/myproject/Financ-mob.2x.jpg"},767:{"1x":"./img/myproject/Financ-tab.1x.jpg","2x":"./img/myproject/Financ-tab.2x.jpg"},1280:{"1x":"./img/myproject/Financ-desc.1x.jpg","2x":"./img/myproject/Financ-desc.2x.jpg"}},stack:"React, JavaScript, Node JS, Git",title:"WALLET WEBSERVICE",link:"#"},{images:{360:{"1x":"./img/myproject/Diet-mob.1x.jpg","2x":"./img/myproject/Diet-mob.2x.jpg"},767:{"1x":"./img/myproject/Diet-tab.1x.jpg","2x":"./img/myproject/Diet-tab.2x.jpg"},1280:{"1x":"./img/myproject/Diet-desc.1x.jpg","2x":"./img/myproject/Diet-desc.2x.jpg"}},stack:"React, JavaScript, Node JS, Git",title:"GREEN HARVEST WEBSERVICE",link:"#"},{image:"./img/myproject/Learn-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"ENGLISH EXCELLENCE WEBSERVICE",link:"#"},{image:"./img/myproject/Mimino-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"#"},{image:"./img/myproject/Artistry-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"#"},{image:"./img/myproject/Body-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"#"},{image:"./img/myproject/Power-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"#"},{image:"./img/myproject/Fresh-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"Fruitbox online store",link:"#"},{image:"./img/myproject/first screen-1x.jpg",stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"#"}];let r=0;const n=3,g=document.getElementById("projects-list"),m=document.getElementById("load-more");m.addEventListener("click",l);function l(){a.slice(r,r+n).forEach(i=>{const c=document.createElement("li");c.innerHTML=`
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
                   
                `,g.appendChild(c)}),r+=n,r>=a.length&&m.classList.add("hidden")}l();
//# sourceMappingURL=index.js.map
