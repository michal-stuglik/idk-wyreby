(this["webpackJsonpidk-wyreby"]=this["webpackJsonpidk-wyreby"]||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(23),i=a.n(o),c=(a(39),a(24)),s=a(25),p=a(31),l=a(26),m=a(32),u=a(66),h=a(69),d=a(70),E=a(67),y=a(68),g=a(27),b=a.n(g),f=a(28),v=u.a.BaseLayer,S=u.a.Overlay;function G(e,t){e.properties&&e.properties.title&&t.bindPopup(e.properties.popupContent)}var w=[49.2,22.5],M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(l.a)(t).call(this,e))).state={zoom:12,data:[],collapsed:!0,center:w},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://polistes.net/idk/data.json",{params:{}}).then((function(t){var a=t.data;return e.setState({data:a})})).catch((function(e){return Promise.reject(e)}))}},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",null,n.a.createElement(h.a,{center:this.state.center,zoom:this.state.zoom},n.a.createElement(u.a,{position:"topright"},n.a.createElement(v,{checked:!0,name:"OSM Mapnik"},n.a.createElement(d.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),n.a.createElement(v,{name:"OSM B&W"},n.a.createElement(d.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})),n.a.createElement(v,{name:"ESRI Imagery"},n.a.createElement(d.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",attribution:'\xa9 <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'})),n.a.createElement(v,{name:"ESRI NatGeoWorldMap"},n.a.createElement(d.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",attribution:'\xa9 <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'})),n.a.createElement(v,{name:"OpenTopoMap"},n.a.createElement(d.a,{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'attribution: Map data: \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: \xa9 <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'})),n.a.createElement(S,{checked:!0,name:"Wyr\u0119by"},n.a.createElement(E.a,{color:"purple"},n.a.createElement(y.a,{key:e.key,data:e,onEachFeature:G})))),n.a.createElement(f.a,{position:"bottomleft"})))}}]),t}(n.a.Component);a(64);var k=function(){return n.a.createElement(M,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.4efd4f01.chunk.js.map