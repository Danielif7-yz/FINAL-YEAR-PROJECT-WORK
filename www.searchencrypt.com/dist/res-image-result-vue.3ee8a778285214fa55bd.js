(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(t,e,i){"use strict";i.r(e);var a={name:"image-result",props:["resultId","resultData"],components:{NiceLink:i(8).a},data:function(){return{}},computed:{isLoaded:function(){return this.result},result:function(){return this.resultData||this.$store.getters.imageResults[this.resultId]||{}}}},s=(i(213),i(0)),n=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"image-result",class:{unloaded:this.isLoaded}},[this._v("\n    image\n")])}),[],!1,null,null,null);e.default=n.exports},213:function(t,e,i){"use strict";var a=i(64);i.n(a).a},214:function(t,e,i){(e=i(1)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=latin-ext);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,400i,500,500i,600,600i,700,800,900&display=swap&subset=latin-ext);"]),e.push([t.i,".fa,.fas,.far,.fal,.fad,.fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.image-result{position:relative;margin-bottom:27px;max-width:612px}.image-result>*{margin:0}\n",""]),t.exports=e},64:function(t,e,i){var a=i(214);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(2).default)("0a918889",a,!0,{})},8:function(t,e,i){"use strict";var a={name:"serp-link",props:["href","nice","target","text"],mounted:function(){},computed:{targetVal:function(){return this.target||"_blank"},niceVal:function(){return this.nice||this.href}}},s=i(0),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"nl",attrs:{href:t.href,rel:t.href,"data-nice-url":t.niceVal,target:t.targetVal}},[t._t("default",[t._v(t._s(t.text))])],2)}),[],!1,null,null,null);e.a=n.exports}}]);