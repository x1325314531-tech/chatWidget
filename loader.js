import{t as e}from"./assets/bridge-WnRKv1qb.js";(function(){let t=`ss-chat-loader`;if(document.getElementById(t+`-container`))return;let n=document.createElement(`div`);n.id=t+`-container`,document.body.appendChild(n);let r=n.attachShadow({mode:`open`}),i=document.createElement(`style`);i.textContent=`
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
  `,r.appendChild(i);let a=document.createElement(`iframe`);a.className=`widget-iframe`,a.src=`./index.html`,r.appendChild(a);let o=document.createElement(`div`);o.className=`toggle-button`,o.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,r.appendChild(o);let s=!1,c=e=>{s=e===void 0?!s:e,s?(a.classList.add(`open`),o.classList.add(`open`),o.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `):(a.classList.remove(`open`),o.classList.remove(`open`),o.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `)};o.addEventListener(`click`,()=>c()),window.addEventListener(`message`,t=>{let n=t.data;if(n.source===`widget`)switch(n.type){case e.TOGGLE_WIDGET:c(n.payload?.open);break;case e.READY:console.log(`Widget Ready`);break}})})();