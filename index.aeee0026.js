function n(n){return n&&n.__esModule?n.default:n}var e;function t(n,e,t){var o,l,u,a,i;function c(){var r=Date.now()-a;r<e&&r>=0?o=setTimeout(c,e-r):(o=null,t||(i=n.apply(u,l),u=l=null))}null==e&&(e=100);var r=function(){u=this,l=arguments,a=Date.now();var r=t&&!o;return o||(o=setTimeout(c,e)),r&&(i=n.apply(u,l),u=l=null),i};return r.clear=function(){o&&(clearTimeout(o),o=null)},r.flush=function(){o&&(i=n.apply(u,l),u=l=null,clearTimeout(o),o=null)},r}t.debounce=t,e=t;const o=document.querySelector("#search-box"),l=document.querySelector(".country-list"),u=document.querySelector(".country-info");o.addEventListener("input",n(e)((function(n){n.target.value.trim(),fetch("https://restcountries.com/v3.1/name/can?fields=name,capital,population,flags,languages").then((n=>n.json())).then((n=>{!function(n){if(n.length){if(!(n.length>10))return 1===n.length?(l.innerHTML="",u.innerHTML=function(n){const{name:e,capital:t,population:o,flags:l,languages:u}=n;return markUp=`\n  <svg width="40" height="40">\n  <use href='https://flagcdn.com/ca.svg'>${e.official}<use>\n  </svg>\n  <p>Capital: ${t[0]}</p>\n  <p>Population: ${o}</p>\n  <p>Languages: ${u}</p>\n  `}(n[0]),void console.log("one country")):void(n.length<11&&(u.innerHTML="",l.innerHTML=void 0,console.log("list",n)));console.log("so many countries")}else console.log("no countries")}(n),console.log(n)}))}),1e3));
//# sourceMappingURL=index.aeee0026.js.map
