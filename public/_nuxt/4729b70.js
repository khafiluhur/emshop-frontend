(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(103).default)("94868cfc",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";n(302)},312:function(e,t,n){var r=n(102)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.slick-dots{\n  text-align:left;\n  position:static\n}\n.slick-next:before,.slick-prev:before{\n  color:#000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},323:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(39),n(294)),c=n.n(o),l=(n(295),n(296),n(59).default),d={Authorization:"Bearer 1|3mTRZGnfTJ4wB0iX7LbAQbEKo6ZtQIbB56zxbNpA"},f={name:"Banner",components:{VueSlickCarousel:c.a},data:function(){return{settings:{arrows:!0,dots:!0,slidesToShow:3,autoplay:!0,speed:4e3,autoplaySpeed:4e3},banners:[],path:"https://api.shobaro.com"}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get(e.path+"/api/banner",{headers:d});case 3:n=t.sent,e.banners=n.data.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},h=(n(311),n(50)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-12 my-5"},[Object.keys(e.banners).length?n("VueSlickCarousel",e._b({},"VueSlickCarousel",e.settings,!1),e._l(e.banners,(function(t){return n("div",{key:t.id,attrs:{size:t.size}},[n("img",{staticClass:"rounded-3xl p-3",attrs:{src:e.path+"/assets/imgs/banners/"+t.img,alt:t.title}})])})),0):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);