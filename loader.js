var e={TOGGLE_WIDGET:`TOGGLE_WIDGET`,READY:`READY`};(()=>{let t=document.currentScript,n=t?.src?new URL(`./`,t.src).toString():`./`,r=()=>{let t=`ss-chat-loader`;if(document.getElementById(t+`-container`))return;let r=document.createElement(`div`);r.id=t+`-container`,document.body.appendChild(r);let i=r.attachShadow({mode:`open`}),a=document.createElement(`style`);a.textContent=`
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .widget-iframe {
      border: none;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      position: absolute;
      bottom: 80px;
      right: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom right;
      opacity: 0;
      transform: scale(0.8) translateY(20px);
      pointer-events: none;
      width: 400px;
      height: 600px;
    }
    .widget-iframe.open {
      opacity: 1;
      transform: scale(1) translateY(0);
      pointer-events: all;
    }
    .toggle-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #4361ee;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.4);
      transition: all 0.2s ease;
    }
    .toggle-button:hover {
      transform: scale(1.05);
    }
    .toggle-button svg {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
    }
    .toggle-button.open svg {
      transform: rotate(90deg);
    }
  `,i.appendChild(a);let o=document.createElement(`iframe`);o.className=`widget-iframe`,o.src=`${n}index.html`,i.appendChild(o);let s=document.createElement(`div`);s.className=`toggle-button`,s.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,i.appendChild(s);let c=!1,l=e=>{c=e===void 0?!c:e,c?(o.classList.add(`open`),s.classList.add(`open`),s.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `):(o.classList.remove(`open`),s.classList.remove(`open`),s.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `)};s.addEventListener(`click`,()=>l()),window.addEventListener(`message`,t=>{let n=t.data;if(n.source===`widget`)switch(n.type){case e.TOGGLE_WIDGET:l(n.payload?.open);break;case e.READY:console.log(`Widget Ready`);break}})};if(document.body){r();return}window.addEventListener(`DOMContentLoaded`,r,{once:!0})})();