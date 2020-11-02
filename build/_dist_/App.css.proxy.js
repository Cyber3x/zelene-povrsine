// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".trgovacka.svelte-14tvl2k.svelte-14tvl2k{position:absolute;width:23.51%;height:42.1%;top:27.12%;left:37%}.stambena.svelte-14tvl2k.svelte-14tvl2k{position:absolute;height:41.20583%;width:31.37552%;left:7.21458%;top:53.16019%}.turisticka.svelte-14tvl2k.svelte-14tvl2k{position:absolute;height:63.40648%;width:26.84531%;left:59.84375%;top:.92593%}.industrijska.svelte-14tvl2k.svelte-14tvl2k{position:absolute;height:68.56204%;width:30.24896%;left:1.45833%;top:-2.59259%}.skolska.svelte-14tvl2k.svelte-14tvl2k{position:absolute;height:51.475%;width:28.1875%;left:6.45833%;top:47.5%}.rekreacijska.svelte-14tvl2k.svelte-14tvl2k{position:absolute;height:66.85833%;width:25.21562%;left:68.28125%;top:20.37037%}svg.svelte-14tvl2k path.svelte-14tvl2k:hover{cursor:pointer}.separator-with-text.svelte-14tvl2k.svelte-14tvl2k{background-color:#2d3748;color:#e2e8f0}img.svelte-14tvl2k.svelte-14tvl2k{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}