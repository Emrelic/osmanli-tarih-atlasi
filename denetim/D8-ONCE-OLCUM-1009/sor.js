(function(){
 var ADIM=10, W=harita.getCanvas().clientWidth, H=harita.getCanvas().clientHeight;
 var KAT=["osmanli-dolgu","himaye-dolgu","devlet-dolgu"].filter(function(k){return harita.getLayer(k);});
 var nx=Math.floor(W/ADIM), ny=Math.floor(H/ADIM), g=[], say={};
 for(var j=0;j<ny;j++){for(var i=0;i<nx;i++){
  var f=harita.queryRenderedFeatures([i*ADIM+ADIM/2,j*ADIM+ADIM/2],{layers:KAT});
  var e=null; if(f.length){var t=f[0]; e=t.layer.id==="osmanli-dolgu"?"OSMANLI":(t.layer.id==="himaye-dolgu"?"himaye:":"")+(t.properties.id||t.properties.renk||"?");}
  g.push(e); if(e) say[e]=(say[e]||0)+1; }}
 var kenar=0; for(var j=0;j<ny;j++)for(var i=0;i<nx;i++){var a=g[j*nx+i]; if(!a)continue;
  if(i+1<nx){var b=g[j*nx+i+1]; if(b&&b!==a)kenar++;} if(j+1<ny){var c=g[(j+1)*nx+i]; if(c&&c!==a)kenar++;}}
 var gor=new Array(g.length).fill(false), bil={}, kucuk=0;
 for(var k=0;k<g.length;k++){ if(!g[k]||gor[k])continue; var y=[k],n=0; gor[k]=true;
  while(y.length){var p=y.pop();n++;var pi=p%nx,pj=(p-pi)/nx;
   [[1,0],[-1,0],[0,1],[0,-1]].forEach(function(d){var qi=pi+d[0],qj=pj+d[1]; if(qi<0||qj<0||qi>=nx||qj>=ny)return; var q=qj*nx+qi; if(!gor[q]&&g[q]===g[k]){gor[q]=true;y.push(q);}});}
  bil[g[k]]=(bil[g[k]]||0)+1; if(n<20)kucuk++; }
 var c=harita.getCenter(); return {adim_px:ADIM, izgara:[nx,ny], tuval:[W,H], merkez:[+c.lng.toFixed(4),+c.lat.toFixed(4)], zoom:harita.getZoom(), katman:KAT, hucre:say, sahip_degisim_kenari:kenar, bilesen:bil, kucuk_bilesen_lt20:kucuk};
})()
