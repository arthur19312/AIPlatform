(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/puzzle/index"],{"18da":function(t,e,n){"use strict";var i=n("54a0"),o=n.n(i);o.a},1931:function(t,e,n){"use strict";(function(t){n("bb2c");i(n("66fd"));var e=i(n("9837"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"54a0":function(t,e,n){},"68b1":function(t,e,n){"use strict";n.r(e);var i=n("f59a"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},9837:function(t,e,n){"use strict";n.r(e);var i=n("fc79"),o=n("68b1");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("18da");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},f59a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",nowStep:-1,stepList:[{name:"选择主图"},{name:"选择素材图"},{name:"合成回忆拼图"}],mainpicExampleSrc:"../../static/image/explain.png",mainpic:"",uploadText:"点击上传主图",isUploaded:!1,action:"http://www.example.com/upload",materialPicList:[],uploadPercent:70}},onLoad:function(){},methods:{chooseImg:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(n){console.log(JSON.stringify(n.tempFilePaths)),e.mainpic=n.tempFilePaths[0],t.getImageInfo({src:n.tempFilePaths[0],success:function(t){console.log(t),e.mainpicExampleSrc=n.tempFilePaths[0],e.uploadText="重新上传",e.isUploaded=!0}})}})},nextStep:function(){this.nowStep<4&&this.nowStep++},lastStep:function(){this.nowStep>-1&&this.nowStep--},submitMaterial:function(){this.materialPicList=this.$refs.uUpload.lists.filter((function(t){return 100==t.progress})),console.log(this.materialPicList),this.nowStep++},submitOrder:function(){},saveImg:function(){}}};e.default=n}).call(this,n("543d")["default"])},fc79:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uSteps:function(){return n.e("uview-ui/components/u-steps/u-steps").then(n.bind(null,"93d3"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"0690"))},uLineProgress:function(){return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null,"097d"))}},o=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["1931","common/runtime","common/vendor"]]]);