(function(window){var svgSprite="<svg>"+
'<symbol id="icon-more" viewBox="0 0 1024 1024">'
+
	'<path d="M65.937408 547.736576 882.85184 548.38272 595.134464 794.195968 594.568192 862.384128 948.18304 547.736576 948.18304 503.57248 594.4064 145.67424 594.245632 212.110336 882.016256 504.055808 65.937408 503.57248 65.937408 547.736576Z"  ></path>'
+
"</symbol>"
+
'<symbol id="icon-hint" viewBox="0 0 1024 1024">'
+
	'<path d="M512.00307 141.216255c-205.16573 0-370.881982 166.558433-370.881982 370.881982 0 205.205639 165.716252 370.881982 370.881982 370.881982 204.363458 0 370.881982-165.67532 370.881982-370.881982C882.885052 307.774689 716.366527 141.216255 512.00307 141.216255zM481.362212 744.530984c-26.467815 1.939165-45.685505-8.472975-47.454802-34.855856-2.276856-33.29429 18.881023-92.044346 23.221888-104.22476l43.156916-125.97411c4.297886-12.854772-2.739391-18.58631-8.640798-18.164708-27.183106 2.023076-58.414411 64.989153-71.604828 65.957201-5.184069 0.379647-9.903557-4.172019-10.199293-8.303106-0.842181-12.516058 29.543873-44.041052 38.479383-53.776787 27.647687-28.531823 64.524572-51.460022 107.176998-54.621015 31.608905-2.318812 66.673515 13.192464 44.757367 82.47848L556.508703 632.253828c-3.709485 10.747785-10.577916 28.701692-9.819646 39.828101 0.294712 4.847401 3.581572 9.482979 9.44 9.061376 22.084994-1.644453 58.498322-63.638389 68.824505-64.396659 3.667529-0.25378 9.103332 3.539616 9.524934 9.777691C635.82619 646.627187 555.666522 739.051179 481.362212 744.530984zM583.946612 383.342782c-30.176276 2.27481-51.2922-15.004739-53.230342-43.494607-2.106987-30.512944 24.150026-57.570183 56.517201-59.930951 29.416983-2.190899 52.05047 14.96176 53.988612 43.410696C643.371026 355.273493 617.030102 380.940059 583.946612 383.342782z"  ></path>'
+
"</symbol>"
+
'<symbol id="icon-right" viewBox="0 0 1024 1024">'
+
	'<path d="M346.572832 893.846708c-6.771217 0-13.476943-2.349511-18.61394-7.070023-10.259668-9.348925-10.259668-24.524556 0-33.883715L703.835631 510.090511 327.958892 167.219489c-10.259668-9.360182-10.259668-24.535813 0-33.884738 10.273994-9.360182 26.89044-9.360182 37.163411 0l394.477376 359.77297c10.260691 9.360182 10.260691 24.534789 0 33.895995L365.122303 886.775662C359.985306 891.497197 353.27958 893.846708 346.572832 893.846708L346.572832 893.846708z"  ></path>'
+
"</symbol>"
+
'<symbol id="icon-left" viewBox="0 0 1024 1024">'
+
	'<path d="M309.35552 512 331.077632 533.722112 692.922368 895.565824 714.64448 873.843712 352.800768 512 714.64448 150.156288 692.922368 128.434176 331.077632 490.277888 331.077632 490.277888Z"  ></path>'
+
"</symbol>"
+
'<symbol id="icon-close" viewBox="0 0 1024 1024">'
+
	'<path d="M836.8 203.2 803.2 169.6 512 460.8 220.8 169.6 187.2 203.2 478.4 496 187.2 787.2 220.8 820.8 512 529.6 803.2 820.8 836.8 787.2 545.6 496Z"  ></path>'
+
"</symbol>"
+
"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)