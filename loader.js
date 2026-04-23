var e={TOGGLE_WIDGET:`TOGGLE_WIDGET`,READY:`READY`};(()=>{let t=document.currentScript,n=t?.src?new URL(`./`,t.src).toString():`./`,r=t?.src?new URL(t.src).searchParams.get(`id`):null,i=()=>{let t=`ss-chat-loader`;if(document.getElementById(t+`-container`))return;let i=document.createElement(`div`);i.id=t+`-container`,document.body.appendChild(i);let a=i.attachShadow({mode:`open`}),o=document.createElement(`style`);o.textContent=`
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
  `,a.appendChild(o);let s=document.createElement(`iframe`);s.className=`widget-iframe`;let c=new URL(`${n}index.html`);r&&c.searchParams.set(`id`,r),s.src=c.toString(),a.appendChild(s);let l=document.createElement(`div`);l.className=`toggle-button`,l.innerHTML=`
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#3f66e0"></circle>
      <rect x="12" y="17" width="24" height="14" rx="7" fill="white"></rect>
      <path d="M20 31L17 35V31H20Z" fill="white"></path>
      <circle cx="18" cy="24" r="1.2" fill="#3f66e0"></circle>
      <circle cx="24" cy="24" r="1.2" fill="#3f66e0"></circle>
      <circle cx="30" cy="24" r="1.2" fill="#3f66e0"></circle>
    </svg>
  `,a.appendChild(l);let u=!1,d=e=>{u=e===void 0?!u:e,u?(s.classList.add(`open`),l.classList.add(`open`),l.innerHTML=`
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `):(s.classList.remove(`open`),l.classList.remove(`open`),l.innerHTML=`
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#3f66e0"></circle>
          <rect x="12" y="17" width="24" height="14" rx="7" fill="white"></rect>
          <path d="M20 31L17 35V31H20Z" fill="white"></path>
          <circle cx="18" cy="24" r="1.2" fill="#3f66e0"></circle>
          <circle cx="24" cy="24" r="1.2" fill="#3f66e0"></circle>
          <circle cx="30" cy="24" r="1.2" fill="#3f66e0"></circle>
        </svg>
      `)};l.addEventListener(`click`,()=>d()),window.addEventListener(`message`,t=>{let n=t.data;if(n.source===`widget`)switch(n.type){case e.TOGGLE_WIDGET:d(n.payload?.open);break;case e.READY:console.log(`Widget Ready`);break}})};if(document.body){i();return}window.addEventListener(`DOMContentLoaded`,i,{once:!0})})();