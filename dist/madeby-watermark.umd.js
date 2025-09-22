(function(n){typeof define=="function"&&define.amd?define(n):n()})((function(){"use strict";class n{constructor(e={}){this.options={variant:e.variant||"auto",animated:e.animated!==!1,showIcon:e.showIcon!==!1,className:e.className||"",...e},this.container=null,this.sparkles=[],this.animationFrameId=null,this.isDestroyed=!1,this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.init()}init(){this.createContainer(),this.injectStyles(),this.setupEventListeners(),this.options.animated&&(this.generateSparkles(),this.startAnimations())}createContainer(){if(this.container=document.createElement("a"),this.container.href="https://syntaglott.pl",this.container.target="_blank",this.container.rel="noopener noreferrer",this.container.setAttribute("aria-label","Website created by Syntaglott"),this.container.className=`madeby-container ${this.getVariantClass()} ${this.options.className}`,this.container.setAttribute("data-madeby","true"),this.options.animated){const r=document.createElement("div");r.className="madeby-shimmer",this.container.appendChild(r)}if(this.options.showIcon){const r=this.createIcon();this.container.appendChild(r)}const e=document.createElement("span");e.textContent="Made by",this.container.appendChild(e);const t=document.createElement("span");t.className="madeby-brand",t.textContent="Syntaglott",this.container.appendChild(t);const a=this.createExternalIcon();this.container.appendChild(a)}createIcon(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("class","madeby-icon"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2");const t=document.createElementNS("http://www.w3.org/2000/svg","polyline");t.setAttribute("points","16,18 22,12 16,6"),e.appendChild(t);const a=document.createElementNS("http://www.w3.org/2000/svg","polyline");return a.setAttribute("points","8,6 2,12 8,18"),e.appendChild(a),e}createExternalIcon(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("class","madeby-external"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2");const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"),e.appendChild(t);const a=document.createElementNS("http://www.w3.org/2000/svg","polyline");a.setAttribute("points","15,3 21,3 21,9"),e.appendChild(a);const r=document.createElementNS("http://www.w3.org/2000/svg","line");return r.setAttribute("x1","10"),r.setAttribute("y1","14"),r.setAttribute("x2","21"),r.setAttribute("y2","3"),e.appendChild(r),e}generateSparkles(){this.sparkles=Array.from({length:6},(e,t)=>{const a=document.createElement("div");a.className="madeby-sparkle";const r=Math.random()*80+10,i=Math.random()*60+20,o=Math.random()*2;return a.style.left=`${r}%`,a.style.top=`${i}%`,a.style.animationDelay=`${o}s`,this.container.appendChild(a),{element:a,x:r,y:i,delay:o}})}setupEventListeners(){this.container&&(this.container.addEventListener("mousemove",this.handleMouseMove),this.container.addEventListener("mouseleave",this.handleMouseLeave),this.container.addEventListener("click",this.handleClick),this.container.addEventListener("keydown",this.handleKeyDown))}handleMouseMove(e){if(!this.options.animated||!this.container)return;const t=this.container.getBoundingClientRect(),a=t.left+t.width/2,r=t.top+t.height/2,i=(e.clientX-a)*.1,o=(e.clientY-r)*.1;this.container.style.transform=`translate(${i}px, ${o}px)`}handleMouseLeave(){this.container&&(this.container.style.transform="translate(0, 0)")}handleClick(e){console.log("MadeBy component clicked")}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),window.open("https://syntaglott.pl","_blank","noopener,noreferrer"))}startAnimations(){!this.options.animated||this.isDestroyed||(this.animationFrameId=requestAnimationFrame(()=>this.startAnimations()))}getVariantClass(){switch(this.options.variant){case"light":return"madeby-light";case"dark":return"madeby-dark";case"transparent":return"madeby-transparent";default:return""}}injectStyles(){if(document.getElementById("madeby-styles"))return;const e=document.createElement("style");e.id="madeby-styles",e.textContent=this.getStyles(),document.head.appendChild(e)}getStyles(){return`

      .madeby-container {

        --accent: #00ffd0;
        --bg: #0e100f;
        --text: #e8eadf;
        --cream: #f4f0dc;
        --glass-bg: rgba(255, 255, 255, 0.03);
        --glass-border: rgba(255, 255, 255, 0.08);
        --shadow-color: rgba(0, 255, 208, 0.15);

        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 16px;
        border-radius: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: -0.01em;
        text-decoration: none;
        color: var(--text);
        background: 
          linear-gradient(135deg, var(--glass-bg) 0%, rgba(255, 255, 255, 0.01) 100%),
          radial-gradient(circle at 30% 20%, rgba(0, 255, 208, 0.03) 0%, transparent 50%);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(20px) saturate(1.2);
        -webkit-backdrop-filter: blur(20px) saturate(1.2);
        box-shadow: 
          0 2px 16px rgba(0, 0, 0, 0.1),
          0 1px 4px rgba(0, 0, 0, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform;
        overflow: hidden;
        z-index: 1;
        cursor: pointer;
      }

      .madeby-container::before {
        content: "";
        position: absolute;
        inset: -24px;
        z-index: -2;
        pointer-events: none;
        filter: saturate(1.3) contrast(1.1) brightness(1.1);
        mix-blend-mode: plus-lighter;
        opacity: 0;
        background:
          radial-gradient(50px 50px at 25% 25%, color-mix(in oklab, var(--accent) 120%, transparent) 0%, transparent 65%),
          radial-gradient(35px 35px at 75% 70%, color-mix(in oklab, var(--text) 40%, transparent) 0%, transparent 75%),
          conic-gradient(from 45deg at 50% 50%, color-mix(in oklab, var(--accent) 30%, transparent) 0deg, transparent 90deg, color-mix(in oklab, var(--accent) 20%, transparent) 180deg, transparent 270deg),
          linear-gradient(135deg, color-mix(in oklab, var(--bg) 90%, transparent) 0%, transparent 60%);
        transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform, opacity;
      }

      .madeby-container::after {
        content: "";
        position: absolute;
        inset: -24px;
        z-index: -1;
        pointer-events: none;
        mix-blend-mode: color-dodge;
        opacity: 0;
        background:
          conic-gradient(from 60deg at 65% 25%, color-mix(in oklab, var(--cream) 45%, transparent) 0 30%, transparent 30% 100%),
          radial-gradient(30px 30px at 35% 75%, color-mix(in oklab, var(--accent) 25%, transparent) 0%, transparent 70%),
          linear-gradient(45deg, color-mix(in oklab, var(--accent) 15%, transparent) 0%, transparent 40%, color-mix(in oklab, var(--cream) 10%, transparent) 60%, transparent 100%);
        transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform, opacity;
      }

      .madeby-container:hover {
        transform: translateY(-2px) scale(1.02);
        border-color: rgba(0, 255, 208, 0.4);
        box-shadow: 
          0 8px 32px var(--shadow-color),
          0 2px 8px rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(0, 255, 208, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        background: 
          linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%),
          radial-gradient(circle at 30% 20%, rgba(0, 255, 208, 0.05) 0%, transparent 50%);
      }

      .madeby-container:hover::before {
        opacity: 0.2;
        animation: gradientFloat 8s ease-in-out infinite;
      }

      .madeby-container:hover::after {
        opacity: 0.12;
        animation: gradientRotate 12s linear infinite;
      }

      @keyframes gradientFloat {
        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        25% { transform: translate(1px, -1px) rotate(0.5deg) scale(1.02); }
        50% { transform: translate(-0.5px, 0.5px) rotate(-0.3deg) scale(1.01); }
        75% { transform: translate(0.5px, -0.5px) rotate(0.2deg) scale(1.03); }
      }

      @keyframes gradientRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .madeby-shimmer {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          110deg,
          transparent 0%,
          rgba(0, 255, 208, 0.15) 30%,
          rgba(255, 255, 255, 0.1) 50%,
          rgba(0, 255, 208, 0.15) 70%,
          transparent 100%
        );
        transition: left 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 1;
        pointer-events: none;
      }

      .madeby-container:hover .madeby-shimmer {
        left: 100%;
      }

      .madeby-icon {
        width: 16px;
        height: 16px;
        color: var(--accent);
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform;
        filter: 
          drop-shadow(0 0 6px rgba(0, 255, 208, 0.4))
          drop-shadow(0 0 12px rgba(0, 255, 208, 0.2));
      }

      .madeby-container:hover .madeby-icon {
        transform: rotate(8deg) scale(1.15);
        filter: 
          drop-shadow(0 0 12px rgba(0, 255, 208, 0.6))
          drop-shadow(0 0 24px rgba(0, 255, 208, 0.3))
          drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
      }

      .madeby-brand {
        background: linear-gradient(
          135deg, 
          var(--accent) 0%, 
          #00e5ff 25%,
          #00b8d4 50%,
          var(--accent) 75%,
          #40e0d0 100%
        );
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        letter-spacing: -0.02em;
        animation: brandShimmer 3s ease-in-out infinite;
      }

      @keyframes brandShimmer {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      .madeby-sparkle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: radial-gradient(circle, var(--accent) 0%, rgba(0, 255, 208, 0.8) 50%, transparent 70%);
        border-radius: 50%;
        opacity: 0;
        filter: 
          drop-shadow(0 0 4px var(--accent))
          drop-shadow(0 0 8px rgba(0, 255, 208, 0.5));
        animation: sparkle 2.5s ease-in-out infinite;
        pointer-events: none;
      }

      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }

      .madeby-external {
        width: 12px;
        height: 12px;
        opacity: 0.7;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        filter: drop-shadow(0 0 2px rgba(0, 255, 208, 0.3));
      }

      .madeby-container:hover .madeby-external {
        opacity: 1;
        transform: translate(2px, -2px) rotate(5deg);
        filter: drop-shadow(0 0 4px rgba(0, 255, 208, 0.5));
      }

      .madeby-light {
        --text: #1a1a1a;
        --bg: #ffffff;
        --glass-bg: rgba(255, 255, 255, 0.12);
        --glass-border: rgba(0, 0, 0, 0.08);
        --shadow-color: rgba(0, 150, 255, 0.2);
        background: 
          linear-gradient(135deg, var(--glass-bg) 0%, rgba(255, 255, 255, 0.06) 100%),
          radial-gradient(circle at 30% 20%, rgba(0, 150, 255, 0.04) 0%, transparent 50%);
        border: 1px solid var(--glass-border);
        color: #0a0a0a;
        box-shadow: 
          0 4px 20px rgba(0, 0, 0, 0.08),
          0 1px 4px rgba(0, 0, 0, 0.04),
          inset 0 1px 0 rgba(255, 255, 255, 0.4);
      }

      .madeby-light::before {
        background: 
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 55%),
          radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.06) 0%, transparent 65%),
          conic-gradient(from 30deg at 50% 50%, rgba(0, 150, 255, 0.08) 0deg, transparent 120deg);
        mix-blend-mode: overlay;
        opacity: 0.9;
      }

      .madeby-light::after {
        background: 
          conic-gradient(from 60deg at 65% 35%, rgba(255, 255, 255, 0.12) 0 30%, transparent 30% 100%),
          radial-gradient(circle at 35% 75%, rgba(0, 0, 0, 0.04) 0%, transparent 55%);
        mix-blend-mode: soft-light;
        opacity: 0.8;
      }

      .madeby-light:hover {
        border-color: rgba(0, 150, 255, 0.4);
        box-shadow: 
          0 8px 32px rgba(0, 0, 0, 0.12),
          0 0 40px rgba(0, 150, 255, 0.25),
          0 2px 8px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.5);
      }

      .madeby-light .madeby-brand {
        background: linear-gradient(
          135deg,
          var(--accent) 0%,
          #0066ff 25%,
          #0080ff 50%,
          #0099ff 75%,
          var(--accent) 100%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .madeby-light .madeby-icon {
        filter: 
          drop-shadow(0 0 8px rgba(0, 150, 255, 0.6))
          drop-shadow(0 0 16px rgba(0, 150, 255, 0.3))
          drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
        color: #0066ff;
      }

      .madeby-dark {
        --text: #e8eadf;
        --bg: #0e100f;
        --glass-bg: rgba(14, 16, 15, 0.9);
        --glass-border: rgba(255, 255, 255, 0.12);
        --shadow-color: rgba(0, 255, 208, 0.18);
        background: 
          linear-gradient(135deg, var(--glass-bg) 0%, rgba(14, 16, 15, 0.7) 100%),
          radial-gradient(circle at 30% 20%, rgba(0, 255, 208, 0.04) 0%, transparent 50%);
        border-color: var(--glass-border);
      }

      .madeby-transparent {
        --text: #e8eadf;
        --bg: transparent;
        --accent: #00ffd0;
        --glass-bg: rgba(255, 255, 255, 0.02);
        --glass-border: rgba(255, 255, 255, 0.06);
        --shadow-color: rgba(0, 255, 208, 0.12);
        background: transparent;
        border: 1px solid var(--glass-border);
        backdrop-filter: none;
      }

      .madeby-transparent::before {
        background:
          radial-gradient(45px 45px at 25% 25%, color-mix(in oklab, var(--accent) 90%, transparent) 0%, transparent 65%),
          radial-gradient(35px 35px at 75% 70%, color-mix(in oklab, var(--text) 25%, transparent) 0%, transparent 75%),
          conic-gradient(from 45deg at 50% 50%, color-mix(in oklab, var(--accent) 20%, transparent) 0deg, transparent 90deg),
          linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
        mix-blend-mode: plus-lighter;
        opacity: 0;
        transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .madeby-transparent::after {
        background:
          conic-gradient(from 60deg at 65% 25%, color-mix(in oklab, var(--accent) 30%, transparent) 0 30%, transparent 30% 100%),
          radial-gradient(30px 30px at 35% 75%, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 70%),
          linear-gradient(45deg, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 50%);
        mix-blend-mode: color-dodge;
        opacity: 0;
        transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .madeby-transparent:hover {
        border-color: rgba(0, 255, 208, 0.25);
        box-shadow: 
          0 4px 20px var(--shadow-color),
          0 1px 4px rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(0, 255, 208, 0.08);
      }

      .madeby-transparent:hover::before {
        opacity: 0.15;
      }

      .madeby-transparent:hover::after {
        opacity: 0.1;
      }

      .madeby-transparent .madeby-shimmer {
        background: linear-gradient(
          110deg,
          transparent 0%,
          rgba(0, 255, 208, 0.12) 30%,
          rgba(255, 255, 255, 0.08) 50%,
          rgba(0, 255, 208, 0.12) 70%,
          transparent 100%
        );
      }

      @media (prefers-reduced-motion: reduce) {
        .madeby-container,
        .madeby-container::before,
        .madeby-container::after,
        .madeby-icon,
        .madeby-shimmer,
        .madeby-sparkle,
        .madeby-brand {
          animation: none !important;
          transition: none !important;
        }
      }

      @media (prefers-contrast: high) {
        .madeby-container {
          border-color: var(--accent);
          background: var(--bg);
          box-shadow: 0 0 0 2px var(--accent);
        }
      }

      .madeby-container:focus-visible {
        outline: 3px solid var(--accent);
        outline-offset: 3px;
        box-shadow: 
          0 0 0 3px rgba(0, 255, 208, 0.3),
          0 8px 32px var(--shadow-color);
      }
    `}render(e){if(!e){console.error("MadeBy: Target element is required");return}if(typeof e=="string"&&(e=document.querySelector(e)),!e){console.error("MadeBy: Target element not found");return}return e.appendChild(this.container),this}destroy(){this.isDestroyed=!0,this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.container&&(this.container.removeEventListener("mousemove",this.handleMouseMove),this.container.removeEventListener("mouseleave",this.handleMouseLeave),this.container.removeEventListener("click",this.handleClick),this.container.removeEventListener("keydown",this.handleKeyDown),this.container.parentNode&&this.container.parentNode.removeChild(this.container)),this.container=null,this.sparkles=[]}updateOptions(e){this.options={...this.options,...e};const t=this.container?.parentNode;return t&&(this.destroy(),this.init(),t.appendChild(this.container)),this}}function s(d={}){return new n(d)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-madeby-auto]").forEach(e=>{const t={variant:e.getAttribute("data-variant")||"auto",animated:e.getAttribute("data-animated")!=="false",showIcon:e.getAttribute("data-show-icon")!=="false",className:e.getAttribute("data-class")||""};new n(t).render(e)})}),typeof window<"u"&&(window.MadeByComponent=n,window.createMadeBy=s),typeof module<"u"&&module.exports&&(module.exports={MadeByComponent:n,createMadeBy:s}),typeof define=="function"&&define.amd&&define(function(){return{MadeByComponent:n,createMadeBy:s}})}));
