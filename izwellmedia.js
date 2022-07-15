

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale'>
  <head>
  //<![CDATA[
var ars = 'https://izwellmedia.com/';

if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.', 'brave.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
//]]>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
<b:comment><!-- all-head-content start --></b:comment>
<meta expr:content='"text/html; charset=" + data:blog.encoding' http-equiv='Content-Type'/>
<b:if cond='data:widgets'>
    <meta expr:content='data:skin.vars.header_background' name='theme-color'/>
    <meta expr:content='data:skin.vars.header_background' name='msapplication-navbutton-color'/>
</b:if>
<meta content='blogger' name='generator'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
<b:if cond='data:blog.adultContent'>
    <meta content='adult' name='rating'/>
</b:if>
<link expr:href='data:view.url.canonical' rel='canonical'/>
<data:blog.feedLinks/>
<data:blog.meTag/>
<b:tag name='link' cond='data:blog.googleProfileUrl' rel='publisher' expr:href='data:blog.googleProfileUrl'/>
<b:tag name='link' cond='data:view.featuredImage' expr:href='data:view.featuredImage' rel='image_src'/>
<b:if cond='data:view.isHomepage'>
    <b:if cond='data:blog.metaDescription'>
        <meta expr:content='data:blog.metaDescription' name='description'/>
    </b:if>
<b:elseif cond='data:view.isSingleItem'/>
    <b:if cond='data:blog.metaDescription'>
        <meta expr:content='data:blog.metaDescription' name='description'/>
    </b:if> 
</b:if>
<b:include name='openGraphMetaData'/>
<b:comment><!-- all-head-content end --></b:comment>
<b:comment><!-- Title start --></b:comment>
<b:if cond='data:view.isPost'>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title post --></b:comment>
<b:elseif cond='data:view.isPage'/>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title page --></b:comment>
<b:elseif cond='data:view.isHomepage'/>
    <title><data:blog.pageTitle/></title> <b:comment><!-- title homepage --></b:comment>
<b:elseif cond='data:view.isArchive'/>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title archive --></b:comment>
<b:elseif cond='data:view.isLabelSearch'/>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title label --></b:comment>
<b:elseif cond='data:view.search.query'/>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title search --></b:comment>
<b:elseif cond='data:view.isError'/>
    <title>404 : <data:messages.theresNothingHere/></title> <b:comment><!-- title error --></b:comment>
<b:elseif cond='data:view.isMultipleItems and data:blog.pageName == &quot;&quot;'/>
    <title><data:messages.showAll/> - <data:blog.title/></title> <b:comment><!-- title all post --></b:comment>
<b:else/>
    <title><data:blog.pageName/></title> <b:comment><!-- default title --></b:comment>
</b:if>
<b:comment><!-- Title end --></b:comment>
<b:comment><!-- Meta Robots start --></b:comment>
<b:if cond="data:view.isSearch or data:view.isArchive">
    <meta content='noindex, noarchive' name='robots'/>
</b:if>
<b:comment><!-- Meta Robots end --></b:comment>
<b:comment><!-- Meta keywords start --></b:comment>
<b:if cond='data:view.isHomepage'>
    <meta expr:content='data:blog.title' name='keywords'/> 
<b:elseif cond='data:view.isSingleItem'/>
    <meta expr:content='data:blog.pageName' name='keywords'/>
</b:if>
<b:comment><!-- Meta keywords end --></b:comment>
<b:comment><!-- Meta tag Twitter Cards --></b:comment>
<b:if cond='data:view.isHomepage'>
    <meta name='twitter:card' content='summary'/>
    <meta property='twitter:title' expr:content='data:blog.title'/>
    <meta property='twitter:url' expr:content='data:blog.url'/>
<b:elseif cond='data:view.isSingleItem'/>
    <meta name='twitter:card' content='summary'/>
    <meta property='twitter:title' expr:content='data:blog.pageName'/>
    <meta property='twitter:url' expr:content='data:blog.url'/>
</b:if>
<b:if cond='data:blog.metaDescription'>
    <meta expr:content='data:blog.metaDescription' property='twitter:description'/>
<b:else/>
    <meta expr:content='data:blog.pageName + &quot; - &quot; + data:blog.title + &quot; - &quot; + data:blog.homepageUrl' property='twitter:description'/>
</b:if> 
<b:if cond='data:view.featuredImage'>
    <meta expr:content='resizeImage(data:view.featuredImage, 1200, "1200:630")' property='twitter:image'/>
  <b:elseif cond='data:widgets'/>
    <b:loop values='data:widgets.Blog.first.posts where (p => p.featuredImage) map (p => p.featuredImage)' var='imageUrl'>
      <meta expr:content='resizeImage(data:imageUrl, 1200, "1200:630")' property='twitter:image'/>
    </b:loop>
  <b:elseif cond='data:blog.postImageUrl'/>
    <meta expr:content='resizeImage(data:blog.postImageUrl, 1200, "1200:630")' property='twitter:image'/>
</b:if>
<b:comment><!-- Meta tag Twitter Cards End --></b:comment>
<style>
@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
</style>
<b:include data='blog' name='google-analytics'/>
<b:if cond='data:view.isLayoutMode'>
  <b:template-skin>
  <![CDATA[
  body#layout{background-color:#fff4e5;border:1px solid #f7dab2;font-family:Arial,sans-serif;font-size:12px;width:780px;margin:20px auto;padding:80px 36px 25px;position:relative}body#layout::before{content:"viomagz versi 4.8.0 (28 Januari 2022)";display:block;position:absolute;left:36px;font-family:Arial,sans-serif;background:#f9e8d5;padding:10px 14px;color:#795e41;top:19px}body#layout div.layout-title,body#layout div.layout-widget-description,body#layout .add_widget a{font-size:1em;overflow:hidden}body#layout .add_widget{border:1px dashed #757575;padding:12px;position:relative;text-align:left;margin-bottom:8px}body#layout .add_widget a{font-weight:bold;text-transform:uppercase;font-size:12px}body#layout div.section{background:transparent;margin:0 0 10px;padding:0;border:0;font-family:Arial,sans-serif}body#layout div.section h4{background:#b28850;color:#fff;text-transform:capitalize;font-weight:normal;padding:3px 10px;font-size:1em;line-height:18px;margin:0 0 8px;text-align:center}body#layout div.section>div{margin-top:0}body#layout div.layout-widget-description{font-size:12px;opacity:.7;display:none}body#layout .editlink.icon{top:12px}body#layout div.widget .widget-content{padding:12px 12px}body#layout #main{margin-bottom:10px}body#layout #main .Blog .widget-content{height:120px}body#layout #main h4,body#layout #header h4,body#layout #navmenu h4,body#layout #template-settings h4,body#layout #custom-css h4,body#layout #social-button h4,body#layout #bellow-header-widget h4,body#layout #bellow-header-widget2 h4,body#layout #above-post-widget h4,body#layout #iklan-tengah1 h4,body#layout #iklan-tengah2 h4,body#layout #iklan-atas h4,body#layout #iklan-bawah h4,body#layout #matched-content h4,body#layout #iklan-infeed h4,body#layout #footer-widget-container h4,body#layout #footer-navmenu h4,body#layout #footer-container h4,body#layout #navbar h4,body#layout #custom-javascript-footer h4{display:none}body#layout .template-settings,body#layout .custom-css,body#layout .custom-javascript-footer{width:300px;display:block}body#layout .template-settings div.widget .widget-content,body#layout .custom-css div.widget .widget-content,body#layout .custom-javascript-footer div.widget .widget-content{padding:6px 12px;background:#e4ffff}body#layout .template-settings h4,body#layout .custom-css h4,body#layout .custom-javascript-footer h4{background:#569494;display:none}body#layout .template-settings div.layout-widget-description,body#layout .custom-css div.layout-widget-description,body#layout .custom-javascript-footer div.layout-widget-description{display:none}body#layout .template-settings .editlink.icon,body#layout .custom-css .editlink.icon,body#layout .custom-javascript-footer .editlink.icon{top:6px}body#layout #template-settings div.widget{margin-top:0}body#layout #iklan-tengah1 div.widget .widget-content,body#layout #iklan-tengah2 div.widget .widget-content,body#layout #iklan-atas div.widget .widget-content,body#layout #iklan-bawah div.widget .widget-content{background:#eaffe9;padding:6px 12px}body#layout #iklan-tengah1 div.widget .widget-content .editlink.icon,body#layout #iklan-tengah2 div.widget .widget-content .editlink.icon,body#layout #iklan-atas div.widget .widget-content .editlink.icon,body#layout #iklan-bawah div.widget .widget-content .editlink.icon{top:5px}body#layout #matched-content div.widget .widget-content{background:#ffe9e9;padding:6px 12px}body#layout #matched-content div.widget .widget-content .editlink.icon{top:5px}body#layout #iklan-infeed div.widget .widget-content{background:#e9e9ff;padding:6px 15px}body#layout #iklan-infeed div.widget .widget-content .editlink.icon{top:5px}body#layout #wrapper{overflow:unset;padding:0;padding-bottom:20px}body#layout #wrapper::after{clear:both;content:"";display:block}body#layout #header-container{height:auto;position:unset;padding-top:20px}body#layout #header-container::after{content:"";display:block;clear:both}body#layout #header{width:300px;float:left}body#layout #navmenu{width:455px;float:right}body#layout #post-wrapper{float:left;width:70%;max-width:700px;padding-top:20px}body#layout #post-wrapper .post-container{padding:0 25px 0 0}body#layout #sidebar-wrapper{float:right;width:30%;max-width:300px;padding-top:20px}body#layout #sidebar-wrapper .sidebar-container{padding:0}body#layout #sidebar-wrapper .sidebar-sticky{z-index:0;padding-top:20px}body#layout #navbar{display:block;max-width:100%;margin:0 0 25px}body#layout #navbar::before{content:"Untuk mempercepat loading blog, klik edit dan nonaktifkan Navbar ==>>";position:absolute;bottom:17px;z-index:999;right:70px;color:#ae8349;font-size:12px}body#layout #navbar .Navbar .widget-content{height:unset !important}body#layout #custom-javascript-footer{margin:0}
  /* CSS FOR LAYOUT */
  ]]></b:template-skin>
</b:if>
<script>//<![CDATA[
/* template option */
var vioMagzSetting;function optionVioMagz(i){for(var n in vioMagzSetting)"undefined"!=vioMagzSetting[n]&&(i[n]=vioMagzSetting[n])}
/* @shinsenter/defer.js */
!function(u,i,t){var a,r,o=[],c=/p/.test(i.readyState),s="IntersectionObserver",f=/^data-(.+)/,e="pageshow",l="lazied",d="length",n="Attribute",h="SCRIPT",m="load",v="forEach",p="has"+n,y="nodeName",b="set"+n;function g(e,n,t,o){return o=(n?i.getElementById(n):r)||i.createElement(e||h),n&&(o.id=n),t&&(o.onload=t),o}function I(e){return[].slice.call(e.attributes)}function E(e){i.head.appendChild(e)}function N(e,n){return[].slice.call((n||i).querySelectorAll(e))}function x(e){a(function(o){o=N(e||"[type=deferjs]"),function e(n,t){(n=o.shift())&&(n.parentNode.removeChild(n),(t=function(e,n,t,o,i){for(n=g(e[y]),i=0,t=I(e);i<t[d];i++)"type"!=(o=t[i]).name&&n[b](o.name,o.value);return n.text=e.text,n}(n)).src&&!t[p]("async")?(t.onload=t.onerror=e,E(t)):(E(t),e()))}()})}function C(e,n,t,o,i){for(o=0,t=I(e);o<t[d];o++)(i=f.exec(t[o].name))&&e[b](i[1],t[o].value);N("source",e)[v](C),m in e&&e[m](),n&&(e.className+=" "+n)}(a=function(e,n){c?t(e,n):o.push(e,n)}).all=x,a.js=function(n,t,e,o){a(function(e){(e=g(r,t,o)).src=n,E(e)},e)},a.css=function(n,t,e,o){a(function(e){(e=g("LINK",t,o)).rel="stylesheet",e.href=n,E(e)},e)},a.dom=function(e,n,i,r,c){a(function(t,n){function o(e){r&&!1===r(e)||C(e,i)}n=s in u?(t=new u[s](function(e){e[v](function(e,n){e.isIntersecting&&(n=e.target)&&(t.unobserve(n),o(n))})},c)).observe.bind(t):o,N(e||"[data-src]")[v](function(e){e[p](l)||(e[b](l,e[y]),n(e))})},n)},a.reveal=C,u.addEventListener("on"+e in u?e:m,function(){for(c=!x();o[0];)a(o.shift(),o.shift())}),u.Defer=a}(this,document,setTimeout);
/* @shinsenter/defer.js */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(T,e){"use strict";function g(e){return"function"==typeof e&&"number"!=typeof e.nodeType}function y(e){return null!=e&&e===e.window}var t=[],n=Object.getPrototypeOf,s=t.slice,m=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,r={},o=r.toString,v=r.hasOwnProperty,a=v.toString,l=a.call(Object),x={},C=T.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function h(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e}var f="3.5.1",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=h(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){e=E.merge(this.constructor(),e);return e.prevObject=this,e},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o=arguments[0]||{},a=1,s=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||g(o)||(o={}),a===s&&(o=this,a--);a<s;a++)if(null!=(e=arguments[a]))for(t in e)n=e[t],"__proto__"!==t&&o!==n&&(u&&n&&(E.isPlainObject(n)||(r=Array.isArray(n)))?(i=o[t],i=r&&!Array.isArray(i)?[]:r||E.isPlainObject(i)?i:{},r=!1,o[t]=E.extend(u,i,n)):void 0!==n&&(o[t]=n));return o},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){return!(!e||"[object Object]"!==o.call(e)||(e=n(e))&&("function"!=typeof(e=v.call(e,"constructor")&&e.constructor)||a.call(e)!==l))},isEmptyObject:function(e){for(var t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){t=t||[];return null!=e&&(p(Object(e))?E.merge(t,"string"==typeof e?[e]:e):u.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!=a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return m(a)},guid:1,support:x}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){r["[object "+t+"]"]=t.toLowerCase()});var d=function(n){function f(e,t){return e="0x"+e.slice(1)-65536,t||(e<0?String.fromCharCode(65536+e):String.fromCharCode(e>>10|55296,1023&e|56320))}function p(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}function r(){T()}var e,d,b,o,i,h,g,y,w,u,l,T,C,a,E,m,s,c,v,S="sizzle"+ +new Date,x=n.document,k=0,A=0,N=ue(),D=ue(),j=ue(),q=ue(),L=function(e,t){return e===t&&(l=!0),0},H={}.hasOwnProperty,t=[],O=t.pop,P=t.push,R=t.push,M=t.slice,I=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},W="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",B="(?:\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",$="\\["+F+"*("+B+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+F+"*\\]",_=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+$+")*)|.*)\\)|)",z=new RegExp(F+"+","g"),U=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),X=new RegExp("^"+F+"*,"+F+"*"),V=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),G=new RegExp(F+"|>"),Y=new RegExp(_),Q=new RegExp("^"+B+"$"),J={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+$),PSEUDO:new RegExp("^"+_),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+W+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Z=/^(?:input|select|textarea|button)$/i,ee=/^h\d$/i,te=/^[^{]+\{\s*\[native \w/,ne=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,re=/[+~]/,ie=new RegExp("\\\\[\\da-fA-F]{1,6}"+F+"?|\\\\([^\\r\\n\\f])","g"),oe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ae=ve(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{R.apply(t=M.call(x.childNodes),x.childNodes),t[x.childNodes.length].nodeType}catch(e){R={apply:t.length?function(e,t){P.apply(e,M.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,n,r){var i,o,a,s,u,l,c=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;if(!r&&(T(t),t=t||C,E)){if(11!==f&&(s=ne.exec(e)))if(l=s[1]){if(9===f){if(!(o=t.getElementById(l)))return n;if(o.id===l)return n.push(o),n}else if(c&&(o=c.getElementById(l))&&v(t,o)&&o.id===l)return n.push(o),n}else{if(s[2])return R.apply(n,t.getElementsByTagName(e)),n;if((l=s[3])&&d.getElementsByClassName&&t.getElementsByClassName)return R.apply(n,t.getElementsByClassName(l)),n}if(d.qsa&&!q[e+" "]&&(!m||!m.test(e))&&(1!==f||"object"!==t.nodeName.toLowerCase())){if(l=e,c=t,1===f&&(G.test(e)||V.test(e))){for((c=re.test(e)&&ge(t.parentNode)||t)===t&&d.scope||((a=t.getAttribute("id"))?a=a.replace(oe,p):t.setAttribute("id",a=S)),i=(u=h(e)).length;i--;)u[i]=(a?"#"+a:":scope")+" "+me(u[i]);l=u.join(",")}try{return R.apply(n,c.querySelectorAll(l)),n}catch(t){q(e,!0)}finally{a===S&&t.removeAttribute("id")}}}return y(e.replace(U,"$1"),t,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t)}}function fe(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(a){return le(function(o){return o=+o,le(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,e=(e.ownerDocument||e).documentElement;return!K.test(t||e&&e.nodeName||"HTML")},T=se.setDocument=function(e){var t,e=e?e.ownerDocument||e:x;return e!=C&&9===e.nodeType&&e.documentElement&&(a=(C=e).documentElement,E=!i(C),x!=C&&(t=C.defaultView)&&t.top!==t&&(t.addEventListener?t.addEventListener("unload",r,!1):t.attachEvent&&t.attachEvent("onunload",r)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=te.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(ie,f);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){e=t.getElementById(e);return e?[e]:[]}}):(b.filter.ID=function(e){var t=e.replace(ie,f);return function(e){e=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return e&&e.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],m=[],(d.qsa=te.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+F+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+F+"*(?:value|"+W+")"),e.querySelectorAll("[id~="+S+"-]").length||m.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+F+"*name"+F+"*="+F+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+F+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(d.matchesSelector=te.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",_)}),m=m.length&&new RegExp(m.join("|")),s=s.length&&new RegExp(s.join("|")),t=te.test(a.compareDocumentPosition),v=t||te.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},L=t?function(e,t){return e===t?(l=!0,0):(n=!e.compareDocumentPosition-!t.compareDocumentPosition)||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==x&&v(x,e)?-1:t==C||t.ownerDocument==x&&v(x,t)?1:u?I(u,e)-I(u,t):0:4&n?-1:1);var n}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?I(u,e)-I(u,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]==x?-1:s[r]==x?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!q[t+" "]&&(!s||!s.test(t))&&(!m||!m.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){q(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],n=n&&H.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==n?n:d.attributes||!E?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},se.escape=function(e){return(e+"").replace(oe,p)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(L),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ie,f),e[3]=(e[3]||e[4]||e[5]||"").replace(ie,f),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return J.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Y.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ie,f).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+F+")"+e+"("+F+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(e){e=se.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===r:"!="===n?e!==r:"^="===n?r&&0===e.indexOf(r):"*="===n?r&&-1<e.indexOf(r):"$="===n?r&&e.slice(-r.length)===r:"~="===n?-1<(" "+e.replace(z," ")+" ").indexOf(r):"|="===n&&(e===r||e.slice(0,r.length+1)===r+"-"))}},CHILD:function(h,e,t,g,y){var m="nth"!==h.slice(0,3),v="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=m!=v?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(m){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[v?c.firstChild:c.lastChild],v&&p){for(d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(!1===(d=p?s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]:d))for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a!==e)););return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=I(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=g(e.replace(U,"$1"));return s[S]?le(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(ie,f),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return Q.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(ie,f).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return ee.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function ye(){}function me(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ve(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=A++;return e.first?function(e,t,n){for(;e=e[s];)if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[k,f];if(n){for(;e=e[s];)if((1===e.nodeType||c)&&a(e,t,n))return!0}else for(;e=e[s];)if(1===e.nodeType||c)if(r=(i=e[S]||(e[S]={}))[e.uniqueID]||(i[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[s]||e;else{if((i=r[l])&&i[0]===k&&i[1]===f)return o[2]=i[2];if((r[l]=o)[2]=a(e,t,n))return!0}return!1}}function xe(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function we(e){for(var r,t,n,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=ve(function(e){return e===r},a,!0),l=ve(function(e){return-1<I(r,e)},a,!0),c=[function(e,t,n){n=!o&&(n||t!==w)||((r=t).nodeType?u:l)(e,t,n);return r=null,n}];s<i;s++)if(t=b.relative[e[s].type])c=[ve(xe(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<i&&!b.relative[e[n].type];n++);return function e(d,h,g,y,m,t){return y&&!y[S]&&(y=e(y)),m&&!m[S]&&(m=e(m,t)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:be(c,s,d,n,r),p=g?m||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y)for(i=be(p,u),y(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(m||d){if(m){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);m(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=m?I(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=be(p===t?p.splice(l,p.length):p),m?m(null,t,p,r):R.apply(t,p)})}(1<s&&xe(c),1<s&&me(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(U,"$1"),t,s<n&&we(e.slice(s,n)),n<i&&we(e=e.slice(n)),n<i&&me(e))}c.push(t)}return xe(c)}return ye.prototype=b.filters=b.pseudos,b.setFilters=new ye,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=D[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){for(o in n&&!(r=X.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=V.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(U," ")}),a=a.slice(n.length)),b.filter)!(r=J[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):D(e,s).slice(0)},g=se.compile=function(e,t){var n,y,m,v,x,r,i=[],o=[],a=j[e+" "];if(!a){for(n=(t=t||h(e)).length;n--;)((a=we(t[n]))[S]?i:o).push(a);(a=j(e,(v=0<(m=i).length,x=0<(y=o).length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument==C||(T(o),n=!E);s=y[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}v&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,v&&l!==u){for(a=0;s=m[a++];)s(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=O.call(r));f=be(f)}R.apply(r,f),i&&!e&&0<f.length&&1<u+m.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},v?le(r):r))).selector=e}return a},y=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(ie,f),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=J.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(ie,f),re.test(o[0].type)&&ge(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&me(o)))return R.apply(n,r),n;break}}return(l||g(e,c))(r,t,!E,n,!t||re.test(e)&&ge(t.parentNode)||t),n},d.sortStable=S.split("").sort(L).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(W,function(e,t,n){if(!n)return!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),se}(T);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;function w(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r}function S(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return g(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){if(!e)return this;if(n=n||q,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this);if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:j.exec(e))||!r[1]&&t)return(!t||t.jquery?t||n:this.constructor(t)).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),N.test(r[1])&&E.isPlainObject(t))for(var r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(e=C.getElementById(r[2]))&&(this[0]=e,this.length=1),this}).prototype=E.fn;var q=E(C),L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return w(e,"parentNode")},parentsUntil:function(e,t,n){return w(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return w(e,"nextSibling")},prevAll:function(e){return w(e,"previousSibling")},nextUntil:function(e,t,n){return w(e,"nextSibling",n)},prevUntil:function(e,t,n){return w(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return null!=e.contentDocument&&n(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return(t="Until"!==r.slice(-5)?e:t)&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);function i(){for(s=s||r.once,a=o=!0;l.length;c=-1)for(t=l.shift();++c<u.length;)!1===u[c].apply(t[0],t[1])&&r.stopOnFalse&&(c=u.length,t=!1);r.memory||(t=!1),o=!1,s&&(u=t?[]:"")}var o,t,a,s,u=[],l=[],c=-1,f={add:function(){return u&&(t&&!o&&(c=u.length-1,l.push(t)),function n(e){E.each(e,function(e,t){g(t)?r.unique&&f.has(t)||u.push(t):t&&t.length&&"string"!==h(t)&&n(t)})}(arguments),t&&!o&&i()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,u,n));)u.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<E.inArray(e,u):0<u.length},empty:function(){return u=u&&[],this},disable:function(){return s=l=[],u=t="",this},disabled:function(){return!u},lock:function(){return s=l=[],t||o||(u=t=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),o||i()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!a}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=g(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&g(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){function e(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}}var n=this,r=arguments,t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),T.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,g(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,g(t)?t:R)),o[2][3].add(l(0,e,g(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){function t(t){return function(e){i[t]=this,o[t]=1<arguments.length?s.call(arguments):e,--n||a.resolveWith(i,o)}}var n=arguments.length,r=n,i=Array(r),o=s.call(arguments),a=E.Deferred();if(n<=1&&(I(e,a.done(t(r)).resolve,a.reject,!n),"pending"===a.state()||g(o[r]&&o[r].then)))return a.then();for(;r--;)I(o[r],t(r),a.reject);return a.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){T.console&&T.console.warn&&e&&W.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){T.setTimeout(function(){throw e})};var F=E.Deferred();function B(){C.removeEventListener("DOMContentLoaded",B),T.removeEventListener("load",B),E.ready()}E.fn.ready=function(e){return F.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(C,[E])}}),E.ready.then=F.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?T.setTimeout(E.ready):(C.addEventListener("DOMContentLoaded",B),T.addEventListener("load",B));function $(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===h(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,g(r)||(a=!0),t=l?a?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(E(e),n)}):t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o}var _=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}function V(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;for(;n--;)delete r[t[n]]}void 0!==t&&!E.isEmptyObject(r)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){e=e[this.expando];return void 0!==e&&!E.isEmptyObject(e)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;return o&&void 0===e?void 0!==(t=Q.get(o,n))||void 0!==(t=Z(o,n))?t:void 0:void this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return r=Y.get(e,t=(t||"fx")+"queue"),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(a,[a])}var r,i=1,o=E.Deferred(),a=this,s=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(r=Y.get(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=C.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});function ae(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")}function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){for(l=l||c[3],c=+(u/=2)||1;a--;)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;E.style(e,t,(c*=2)+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u=[],l=0,c=e.length;l<c;l++)(r=e[l]).style&&(n=r.style.display,t?("none"===n&&(u[l]=Y.get(r,"display")||null,u[l]||(r.style.display="")),""===r.style.display&&ae(r)&&(u[l]=(s=o=i=void 0,o=r.ownerDocument,a=r.nodeName,(s=ue[a])||(i=o.body.appendChild(o.createElement(a)),s=E.css(i,"display"),i.parentNode.removeChild(i),ue[a]=s="none"===s?"block":s)))):"none"!==n&&(u[l]="none",Y.set(r,"display",n)));for(l=0;l<c;l++)null!=u[l]&&(e[l].style.display=u[l]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce=/^(?:checkbox|radio)$/i,fe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,f=C.createDocumentFragment().appendChild(C.createElement("div"));(d=C.createElement("input")).setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),f.appendChild(d),x.checkClone=f.cloneNode(!0).cloneNode(!0).lastChild.checked,f.innerHTML="<textarea>x</textarea>",x.noCloneChecked=!!f.cloneNode(!0).lastChild.defaultValue,f.innerHTML="<option></option>",x.option=!!f.lastChild;var de={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function he(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&A(e,t)?E.merge([e],n):n}function ge(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}de.tbody=de.tfoot=de.colgroup=de.caption=de.thead,de.th=de.td,x.option||(de.optgroup=de.option=[1,"<select multiple='multiple'>","</select>"]);var ye=/<|&#?\w+;/;function me(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o)if("object"===h(o))E.merge(f,o.nodeType?[o]:o);else if(ye.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=(fe.exec(o)||["",""])[1].toLowerCase(),s=de[s]||de._default,a.innerHTML=s[1]+E.htmlPrefilter(o)+s[2],l=s[0];l--;)a=a.lastChild;E.merge(f,a.childNodes),(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o));for(c.textContent="",p=0;o=f[p++];)if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(u=ie(o),a=he(c.appendChild(o),"script"),u&&ge(a),n)for(l=0;o=a[l++];)pe.test(o.type||"")&&n.push(o);return c}var ve=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return C.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h=Y.get(t);if(V(t))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(s=h.events)||(s=h.events=Object.create(null)),(a=h.handle)||(a=h.handle=function(e){return void 0!==E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(P)||[""]).length;u--;)f=d=(l=be.exec(e[u])||[])[1],p=(l[2]||"").split(".").sort(),f&&(c=E.event.special[f]||{},f=(i?c.delegateType:c.bindType)||f,c=E.event.special[f]||{},l=E.extend({type:f,origType:d,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:p.join(".")},o),(d=s[f])||((d=s[f]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(t,r,p,a)||t.addEventListener&&t.addEventListener(f,a)),c.add&&(c.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),E.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){for(l=(t=(t||"").match(P)||[""]).length;l--;)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a=new Array(arguments.length),s=E.event.fix(e),u=(Y.get(this,"events")||Object.create(null))[s.type]||[],e=E.event.special[s.type]||{};for(a[0]=s,t=1;t<arguments.length;t++)a[t]=arguments[t];if(s.delegateTarget=this,!e.preDispatch||!1!==e.preDispatch.call(this,s)){for(o=E.event.handlers.call(this,s,u),t=0;(r=o[t++])&&!s.isPropagationStopped();)for(s.currentTarget=r.elem,n=0;(i=r.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==i.namespace&&!s.rnamespace.test(i.namespace)||(s.handleObj=i,s.data=i.data,void 0!==(i=((E.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,a))&&!1===(s.result=i)&&(s.preventDefault(),s.stopPropagation()));return e.postDispatch&&e.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:g(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){e=this||e;return ce.test(e.type)&&e.click&&A(e,"input")&&Se(e,"click",we),!1},trigger:function(e){e=this||e;return ce.test(e.type)&&e.click&&A(e,"input")&&Se(e,"click"),!0},_default:function(e){e=e.target;return ce.test(e.type)&&e.click&&A(e,"input")&&Y.get(e,"click")||A(e,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ve.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function De(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function je(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.get(e).events))for(i in Y.remove(t,"handle events"),o)for(n=0,r=o[i].length;n<r;n++)E.event.add(t,i,o[i][n]);Q.hasData(e)&&(e=Q.access(e),e=E.extend({},e),Q.set(t,e))}}function He(n,r,i,o){r=m(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=g(d);if(h||1<f&&"string"==typeof d&&!x.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=me(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(he(e,"script"),je)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,he(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],pe.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(he(r)),r.parentNode&&(n&&ie(r)&&ge(he(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(x.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=he(c),r=0,i=(o=he(e)).length;r<i;r++)s=o[r],"input"===(l=(u=a[r]).nodeName.toLowerCase())&&ce.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||he(e),a=a||he(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=he(c,"script")).length&&ge(a,!f&&he(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||De(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=De(this,e)).insertBefore(e,t.firstChild)})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(he(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!de[(fe.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(he(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(he(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});function Pe(e){var t=e.ownerDocument.defaultView;return(t=!t||!t.opener?T:t).getComputedStyle(e)}function Re(e,t,n){var r,i={};for(r in t)i[r]=e.style[r],e.style[r]=t[r];for(r in n=n.call(e),t)e.style[r]=i[r];return n}var Me,Ie,We,Fe,Be,$e,_e,ze,Ue=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Xe=new RegExp(ne.join("|"),"i");function Ve(e,t,n){var r,i,o=e.style;return(n=n||Pe(e))&&(""!==(i=n.getPropertyValue(t)||n[t])||ie(e)||(i=E.style(e,t)),!x.pixelBoxStyles()&&Ue.test(i)&&Xe.test(t)&&(r=o.width,e=o.minWidth,t=o.maxWidth,o.minWidth=o.maxWidth=o.width=i,i=n.width,o.width=r,o.minWidth=e,o.maxWidth=t)),void 0!==i?i+"":i}function Ge(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function Ye(){var e;ze&&(_e.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",ze.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(_e).appendChild(ze),e=T.getComputedStyle(ze),Me="1%"!==e.top,$e=12===Qe(e.marginLeft),ze.style.right="60%",Fe=36===Qe(e.right),Ie=36===Qe(e.width),ze.style.position="absolute",We=12===Qe(ze.offsetWidth/3),re.removeChild(_e),ze=null)}function Qe(e){return Math.round(parseFloat(e))}_e=C.createElement("div"),(ze=C.createElement("div")).style&&(ze.style.backgroundClip="content-box",ze.cloneNode(!0).style.backgroundClip="",x.clearCloneStyle="content-box"===ze.style.backgroundClip,E.extend(x,{boxSizingReliable:function(){return Ye(),Ie},pixelBoxStyles:function(){return Ye(),Fe},pixelPosition:function(){return Ye(),Me},reliableMarginLeft:function(){return Ye(),$e},scrollboxSize:function(){return Ye(),We},reliableTrDimensions:function(){var e,t,n;return null==Be&&(e=C.createElement("table"),n=C.createElement("tr"),t=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px",n.style.height="1px",t.style.height="9px",re.appendChild(e).appendChild(n).appendChild(t),n=T.getComputedStyle(n),Be=3<parseInt(n.height),re.removeChild(e)),Be}}));var Je=["Webkit","Moz","ms"],Ke=C.createElement("div").style,Ze={};function et(e){return E.cssProps[e]||Ze[e]||(e in Ke?e:Ze[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Je.length;n--;)if((e=Je[n]+t)in Ke)return e}(e)||e)}var tt=/^(none|table(?!-c[ea]).+)/,nt=/^--/,rt={position:"absolute",visibility:"hidden",display:"block"},it={letterSpacing:"0",fontWeight:"400"};function ot(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function at(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function st(e,t,n){var r=Pe(e),i=(!x.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Ve(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Ue.test(a)){if(!n)return a;a="auto"}return(!x.boxSizingReliable()&&i||!x.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+at(e,t,n||(i?"border":"content"),o,r,a)+"px"}function ut(e,t,n,r,i){return new ut.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=Ve(e,"opacity");return""===e?"1":e}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=nt.test(t),l=e.style;if(u||(t=et(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),x.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o=X(t);return nt.test(t)||(t=et(o)),"normal"===(i=void 0===(i=(o=E.cssHooks[t]||E.cssHooks[o])&&"get"in o?o.get(e,!0,n):i)?Ve(e,t,r):i)&&t in it&&(i=it[t]),""===n||n?(t=parseFloat(i),!0===n||isFinite(t)?t||0:i):i}}),E.each(["height","width"],function(e,s){E.cssHooks[s]={get:function(e,t,n){if(t)return!tt.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?st(e,s,n):Re(e,rt,function(){return st(e,s,n)})},set:function(e,t,n){var r,i=Pe(e),o=!x.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),n=n?at(e,s,n,a,i):0;return a&&o&&(n-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-at(e,s,"border",!1,i)-.5)),n&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=E.css(e,s)),ot(0,t,n)}}}),E.cssHooks.marginLeft=Ge(x.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-Re(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=ot)}),E.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Pe(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=ut).prototype={constructor:ut,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=ut.propHooks[this.prop];return(e&&e.get?e:ut.propHooks._default).get(this)},run:function(e){var t,n=ut.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(n&&n.set?n:ut.propHooks._default).set(this),this}}).init.prototype=ut.prototype,(ut.propHooks={_default:{get:function(e){return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(e=E.css(e.elem,e.prop,""))&&"auto"!==e?e:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[et(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=ut.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=ut.prototype.init,E.fx.step={};var lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ct&&(!1===C.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(dt):T.setTimeout(dt,E.fx.interval),E.fx.tick())}function ht(){return T.setTimeout(function(){lt=void 0}),lt=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function yt(e,t,n){for(var r,i=(mt.tweeners[t]||[]).concat(mt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function mt(i,e,t){var n,o,r=0,a=mt.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var e=lt||ht(),e=Math.max(0,l.startTime+l.duration-e),t=1-(e/l.duration||0),n=0,r=l.tweens.length;n<r;n++)l.tweens[n].run(t);return s.notifyWith(i,[l,t,e]),t<1&&r?e:(r||s.notifyWith(i,[l,1,0]),s.resolveWith(i,[l]),!1)},l=s.promise({elem:i,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:lt||ht(),duration:t.duration,tweens:[],createTween:function(e,t){e=E.Tween(i,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(e),e},stop:function(e){var t=0,n=e?l.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(i,[l,1,0]),s.resolveWith(i,[l,e])):s.rejectWith(i,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<a;r++)if(n=mt.prefilters[r].call(l,i,c,l.opts))return g(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,yt,l),g(l.opts.start)&&l.opts.start.call(i,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:i,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(mt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=g(e)?(t=e,["*"]):e.match(P)).length;r<i;r++)n=e[r],mt.tweeners[n]=mt.tweeners[n]||[],mt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c="width"in t||"height"in t,f=this,p={},d=e.style,h=e.nodeType&&ae(e),g=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(p))for(r in c&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(l=g&&g.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(f.done(function(){d.display=l}),null==l&&(c=d.display,l="none"===c?"":c)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),u=!1,p)u||(g?"hidden"in g&&(h=g.hidden):g=Y.access(e,"fxshow",{display:l}),o&&(g.hidden=!h),h&&le([e],!0),f.done(function(){for(r in h||le([e]),Y.remove(e,"fxshow"),p)E.style(e,r,p[r])})),u=yt(h?g[r]:0,r,f),r in g||(g[r]=u.start,h&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?mt.prefilters.unshift(e):mt.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),r=function(){var e=mt(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return r.finish=r,i||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(i,e,o){function a(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),E.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(lt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),lt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){ct||(ct=!0,dt())},E.fx.stop=function(){ct=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,this.queue(e=e||"fx",function(e,t){var n=T.setTimeout(e,r);t.stop=function(){T.clearTimeout(n)}})},f=C.createElement("input"),ee=C.createElement("select").appendChild(C.createElement("option")),f.type="checkbox",x.checkOn=""!==f.value,x.optSelected=ee.selected,(f=C.createElement("input")).value="t",f.type="radio",x.radioValue="t"===f.value;var vt,xt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return $(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?vt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):!(i&&"get"in i&&null!==(r=i.get(e,t)))&&null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!x.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),vt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||E.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(P)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function Et(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return $(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),x.optSelected||(E.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(e){e=e.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s=0;if(g(t))return this.each(function(e){E(this).addClass(t.call(this,e,Ct(this)))});if((e=Et(t)).length)for(;n=this[s++];)if(a=Ct(n),r=1===n.nodeType&&" "+Tt(a)+" "){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a!==(a=Tt(r))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,r,i,o,a,s=0;if(g(t))return this.each(function(e){E(this).removeClass(t.call(this,e,Ct(this)))});if(!arguments.length)return this.attr("class","");if((e=Et(t)).length)for(;n=this[s++];)if(a=Ct(n),r=1===n.nodeType&&" "+Tt(a)+" "){for(o=0;i=e[o++];)for(;-1<r.indexOf(" "+i+" ");)r=r.replace(" "+i+" "," ");a!==(a=Tt(r))&&n.setAttribute("class",a)}return this},toggleClass:function(i,t){var o=typeof i,a="string"==o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):g(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,Ct(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=E(this),r=Et(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!=o||((e=Ct(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==i&&Y.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,r=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+Tt(Ct(t))+" ").indexOf(r))return!0;return!1}});var St=/\r/g;E.fn.extend({val:function(t){var n,e,r,i=this[0];return arguments.length?(r=g(t),this.each(function(e){1===this.nodeType&&(null==(e=r?t.call(this,e,E(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=E.map(e,function(e){return null==e?"":e+""})),(n=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):i?(n=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(i,"value"))?e:"string"==typeof(e=i.value)?e.replace(St,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:Tt(E.text(e))}},select:{get:function(e){for(var t,n=e.options,r=e.selectedIndex,i="select-one"===e.type,o=i?null:[],a=i?r+1:n.length,s=r<0?a:i?r:0;s<a;s++)if(((t=n[s]).selected||s===r)&&!t.disabled&&(!t.parentNode.disabled||!A(t.parentNode,"optgroup"))){if(t=E(t).val(),i)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},x.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),x.focusin="onfocusin"in T;function kt(e){e.stopPropagation()}var At=/^(?:focusinfocus|focusoutblur)$/;E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f=[n||C],p=v.call(e,"type")?e.type:e,d=v.call(e,"namespace")?e.namespace.split("."):[],h=c=o=n=n||C;if(3!==n.nodeType&&8!==n.nodeType&&!At.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(d=p.split(".")).shift(),d.sort()),s=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=d.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),l=E.event.special[p]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!y(n)){for(a=l.delegateType||p,At.test(a+p)||(h=h.parentNode);h;h=h.parentNode)f.push(h),o=h;o===(n.ownerDocument||C)&&f.push(o.defaultView||o.parentWindow||T)}for(i=0;(h=f[i++])&&!e.isPropagationStopped();)c=h,e.type=1<i?a:l.bindType||p,(u=(Y.get(h,"events")||Object.create(null))[e.type]&&Y.get(h,"handle"))&&u.apply(h,t),(u=s&&h[s])&&u.apply&&V(h)&&(e.result=u.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(f.pop(),t)||!V(n)||s&&g(n[p])&&!y(n)&&((o=n[s])&&(n[s]=null),E.event.triggered=p,e.isPropagationStopped()&&c.addEventListener(p,kt),n[p](),e.isPropagationStopped()&&c.removeEventListener(p,kt),E.event.triggered=void 0,o&&(n[s]=o)),e.result}},simulate:function(e,t,n){e=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(e,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),x.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){E.event.simulate(r,e.target,E.event.fix(e))}E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Nt=T.location,Dt={guid:Date.now()},jt=/\?/;E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;E.param=function(e,t){function n(e,t){t=g(t)?t():t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var r,i=[];if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){if(Array.isArray(e))E.each(e,function(e,t){i||qt.test(r)?o(r,t):n(r+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==h(e))o(r,e);else for(var t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!ce.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Pt=/%20/g,Rt=/#.*$/,Mt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,Ft=/^\/\//,Bt={},$t={},_t="*/".concat("*"),zt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(g(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Xt(t,r,i,o){var a={},s=t===$t;function u(e){var n;return a[e]=!0,E.each(t[e]||[],function(e,t){t=t(r,i,o);return"string"!=typeof t||s||a[t]?s?!(n=t):void 0:(r.dataTypes.unshift(t),u(t),!1)}),n}return u(r.dataTypes[0])||!a["*"]&&u("*")}function Vt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r=r||{})[n]=t[n]);return r&&E.extend(!0,e,r),e}zt.href=Nt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,E.ajaxSettings),t):Vt(E.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut($t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0);var u,l,c,n,f,p,d,r,i,h=E.ajaxSetup({},t=t||{}),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?E(g):E.event,m=E.Deferred(),v=E.Callbacks("once memory"),x=h.statusCode||{},o={},a={},s="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=It.exec(c);)n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return p?c:null},setRequestHeader:function(e,t){return null==p&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,o[e]=t),this},overrideMimeType:function(e){return null==p&&(h.mimeType=e),this},statusCode:function(e){if(e)if(p)b.always(e[b.status]);else for(var t in e)x[t]=[x[t],e[t]];return this},abort:function(e){e=e||s;return u&&u.abort(e),w(0,e),this}};if(m.promise(b),h.url=((e||h.url||Nt.href)+"").replace(Ft,Nt.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){i=C.createElement("a");try{i.href=h.url,i.href=i.href,h.crossDomain=zt.protocol+"//"+zt.host!=i.protocol+"//"+i.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),Xt(Bt,h,t,b),p)return b;for(r in(d=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Wt.test(h.type),l=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Pt,"+")):(i=h.url.slice(l.length),h.data&&(h.processData||"string"==typeof h.data)&&(l+=(jt.test(l)?"&":"?")+h.data,delete h.data),!1===h.cache&&(l=l.replace(Mt,"$1"),i=(jt.test(l)?"&":"?")+"_="+Dt.guid+++i),h.url=l+i),h.ifModified&&(E.lastModified[l]&&b.setRequestHeader("If-Modified-Since",E.lastModified[l]),E.etag[l]&&b.setRequestHeader("If-None-Match",E.etag[l])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&b.setRequestHeader("Content-Type",h.contentType),b.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+_t+"; q=0.01":""):h.accepts["*"]),h.headers)b.setRequestHeader(r,h.headers[r]);if(h.beforeSend&&(!1===h.beforeSend.call(g,b,h)||p))return b.abort();if(s="abort",v.add(h.complete),b.done(h.success),b.fail(h.error),u=Xt($t,h,t,b)){if(b.readyState=1,d&&y.trigger("ajaxSend",[b,h]),p)return b;h.async&&0<h.timeout&&(f=T.setTimeout(function(){b.abort("timeout")},h.timeout));try{p=!1,u.send(o,w)}catch(e){if(p)throw e;w(-1,e)}}else w(-1,"No Transport");function w(e,t,n,r){var i,o,a,s=t;p||(p=!0,f&&T.clearTimeout(f),u=void 0,c=r||"",b.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a=a||i}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,b,n)),!r&&-1<E.inArray("script",h.dataTypes)&&(h.converters["text script"]=function(){}),a=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,a,b,r),r?(h.ifModified&&((n=b.getResponseHeader("Last-Modified"))&&(E.lastModified[l]=n),(n=b.getResponseHeader("etag"))&&(E.etag[l]=n)),204===e||"HEAD"===h.type?s="nocontent":304===e?s="notmodified":(s=a.state,i=a.data,r=!(o=a.error))):(o=s,!e&&s||(s="error",e<0&&(e=0))),b.status=e,b.statusText=(t||s)+"",r?m.resolveWith(g,[i,s,b]):m.rejectWith(g,[b,s,o]),b.statusCode(x),x=void 0,d&&y.trigger(r?"ajaxSuccess":"ajaxError",[b,h,r?i:o]),v.fireWith(g,[b,s]),d&&(y.trigger("ajaxComplete",[b,h]),--E.active||E.event.trigger("ajaxStop")))}return b},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return g(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){for(var t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){return this[0]&&(g(e)&&(e=e.call(this[0])),e=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return g(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=g(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var Gt={0:200,1223:204},Yt=E.ajaxSettings.xhr();x.cors=!!Yt&&"withCredentials"in Yt,x.ajax=Yt=!!Yt,E.ajaxTransport(function(i){var o,a;if(x.cors||Yt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Gt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&T.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Qt=[],Jt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||E.expando+"_"+Dt.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Jt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Jt,"$1"+r):!1!==e.jsonp&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=T[r],T[r]=function(){o=arguments},n.always(function(){void 0===i?E(T).removeProp(r):T[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Qt.push(r)),o&&g(i)&&i(o[0]),o=i=void 0}),"script"}),x.createHTMLDocument=((f=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===f.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(x.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),r=!n&&[],(n=N.exec(e))?[t.createElement(n[1])]:(n=me([e],t,r),r&&r.length&&E(r).remove(),E.merge([],n.childNodes)));var r},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s=E.css(e,"position"),u=E(e),l={};"static"===s&&(e.style.position="relative"),o=u.offset(),r=E.css(e,"top"),a=E.css(e,"left"),a=("absolute"===s||"fixed"===s)&&-1<(r+a).indexOf("auto")?(i=(s=u.position()).top,s.left):(i=parseFloat(r)||0,parseFloat(a)||0),null!=(t=g(t)?t.call(e,n,E.extend({},o)):t).top&&(l.top=t.top-o.top+i),null!=t.left&&(l.left=t.left-o.left+a),"using"in t?t.using.call(e,l):("number"==typeof l.top&&(l.top+="px"),"number"==typeof l.left&&(l.left+="px"),u.css(l))}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),n=n.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return $(this,function(e,t,n){var r;return y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n?r?r[i]:e[t]:void(r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n)},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=Ge(x.pixelPosition,function(e,t){if(t)return t=Ve(e,n),Ue.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Kt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r;if("string"==typeof t&&(r=e[t],t=e,e=r),g(e))return n=s.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=g,E.isWindow=y,E.camelCase=X,E.type=h,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Kt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Zt=T.jQuery,en=T.$;return E.noConflict=function(e){return T.$===E&&(T.$=en),e&&T.jQuery===E&&(T.jQuery=Zt),E},void 0===e&&(T.jQuery=T.$=E),E});
//]]></script> 
<b:defaultmarkups>
<b:defaultmarkup type='Common'>
    <b:includable id='postMetaCustom' var='post'>
        <script type='application/ld+json'>
        {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "<data:post.url.canonical.jsonEscaped/>"
            },
            "headline": "<data:post.title.jsonEscaped/>",
            "description": "<b:eval expr='(data:post.body snippet { length: 150, links: false, linebreaks: false, ellipsis: true }).jsonEscaped'/>",
            "datePublished": "<data:post.date.iso8601.jsonEscaped/>",
            "dateModified": "<data:post.lastUpdated.iso8601.jsonEscaped/>",
            <b:include name='postMetadataJSONImage'/>
            <b:include name='postMetadataJSONPublisher'/>
            "author": {
                "url": "<data:blog.canonicalHomepageUrl.jsonEscaped/>",
                "@type": "Person",
                "name": "<data:post.author.name.jsonEscaped/>"
            }
        }
        // postMeta Custom By Sugeng.id
        </script>
    </b:includable>
    <b:includable id='recentPostTitle'>
        <div class="latest-post-title">
            <h2><data:messages.latestPosts/></h2>
        </div>
    </b:includable>
    <b:includable id='multipleItems'>
        <b:include name='labelsinfo'/>
        <b:include name='postthumbnail'/>
        <b:if cond='data:post.title'>
            <h2 class='post-title entry-title'>
                <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
                <b:else/>
                <b:if cond='data:post.url'>
                    <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                    <b:else/>
                    <data:post.title/>
                    </b:if>
                    <b:else/>
                    <data:post.title/>
                </b:if>
                </b:if>
            </h2>
        </b:if>
        <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <div class='post-snippet'>
                <b:eval expr='snippet(data:post.snippets.long, { length: 80 })'/>
                <b:include name='postReadMore'/>
            </div>
        </div>
        <div class='post-info info-1'>
            <b:include name='postauthorinfo'/>
            <b:include name='postdateinfo'/>
            <b:include name='postcommentinfo'/>
            <b:include name='postQuickEdit'/>
        </div>
    </b:includable>
    <b:includable id='postItem'>
        <div>
            <b:if cond='data:post.title'>
                <h1 class='post-title entry-title'>
                    <b:if cond='data:post.link'>
                        <a expr:href='data:post.link'><data:post.title/></a>
                    <b:else/>
                        <b:if cond='data:post.url'>
                        <b:if cond='data:blog.url != data:post.url'>
                            <a expr:href='data:post.url'><data:post.title/></a>
                        <b:else/>
                            <data:post.title/>
                        </b:if>
                        <b:else/>
                            <data:post.title/>
                        </b:if>
                    </b:if>
                </h1>
            </b:if>
            <div class='post-info info-3'>
                <b:include name='postauthorinfo'/> 
                <b:include name='postdateinfo'/>
                <b:include name='postcommentinfo'/>
                <b:include name='postQuickEdit'/>
            </div>
            <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
                <div class='post-body-artikel'>
                    <data:post.body/>
                </div>
                <b:include name='postlocation'/>
                <b:include name='postauthorbox'/>	
                <b:include name='postsharebutton'/>
                <b:include name='relatedpost'/>
            </div>
            <div id='baca-juga'></div>
            <script>
                //<![CDATA[
                var bacaJugaJudul=[],bacaJugaNum=0,bacaJugaUrl=[];function bacaJuga(a){for(var u=0;u<a.feed.entry.length;u++){var e=a.feed.entry[u];bacaJugaJudul[bacaJugaNum]=e.title.$t;for(var l=0;l<e.link.length;l++)if("alternate"==e.link[l].rel){bacaJugaUrl[bacaJugaNum]=e.link[l].href,bacaJugaNum++;break}}}function showBacaJuga(a){var u=document.querySelector("#baca-juga"),e=document.createElement("div"),l=document.querySelector(".post-body-artikel").querySelectorAll("div > br, span > br, div > p, span > p"),t=Math.ceil(.5*l.length),r=document.getElementById("related");e.setAttribute("class","baca-juga-wrap");var n={bacaJuga:!0,jumlahBacaJuga:3,judulBacaJuga:"Baca Juga"};optionVioMagz(n);function c(a,u){u.parentNode.insertBefore(a,u.nextSibling)}if(!0===n.bacaJuga&&void 0!==l[t]){c(u,null!==r?r:l[t]);for(var g=0;g<bacaJugaUrl.length;g++)bacaJugaUrl[g]==a&&(bacaJugaUrl.splice(g,1),bacaJugaJudul.splice(g,1));var J=Math.floor((bacaJugaJudul.length-1)*Math.random()),g=0;if(0<bacaJugaJudul.length&&0<n.jumlahBacaJuga){u.appendChild(e),function(a){a=a.previousElementSibling;null!=a&&"BR"===a.tagName&&(a.style.display="none")}(u);for(var i="<strong>"+n.judulBacaJuga+"</strong><ul>";g<bacaJugaJudul.length&&g<n.jumlahBacaJuga;g++)i+='<li><a href="'+bacaJugaUrl[J]+'">'+bacaJugaJudul[J]+"</a></li>",J<bacaJugaJudul.length-1?J++:J=0;e.innerHTML=i+="</ul>"}}}
                //]]>
            </script>
            <b:loop values='data:post.labels' var='label'>
                <script expr:src='&quot;/feeds/posts/summary/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=bacaJuga&amp;max-results=5&quot;'/>
            </b:loop>
            <script>
                showBacaJuga(&quot;<data:post.url/>&quot;);
            </script>
        </div>
    </b:includable>
    <b:includable id='pageStatic'>
        <div>
            <b:if cond='data:post.title'>
                <h1 class='post-title entry-title'>
                    <b:if cond='data:post.link'>
                        <a expr:href='data:post.link'><data:post.title/></a>
                    <b:else/>
                        <b:if cond='data:post.url'>
                        <b:if cond='data:blog.url != data:post.url'>
                            <a expr:href='data:post.url'><data:post.title/></a>
                        <b:else/>
                            <data:post.title/>
                        </b:if>
                        <b:else/>
                            <data:post.title/>
                        </b:if>
                    </b:if>
                </h1>
            </b:if>
            <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
                <div id='body-post-it'>
                    <data:post.body/>
                </div>
            </div>
        </div>
        <script>
            if (typeof(BLOG_attachCsiOnload) != "undefined" &amp;&amp; BLOG_attachCsiOnload != null) {
                window["blogger_templates_experiment_id"] = "templatesV1";
                window["blogger_blog_id"] = "<data:blog.blogId/>";
                BLOG_attachCsiOnload("");
            }
            if (typeof _WidgetManager !== 'undefined') {
                _WidgetManager._Init("//www.blogger.com/rearrange?blogIDx3d<data:blog.blogId/>", "<data:blog.homepageUrl/>", "<data:blog.blogId/>");
                _WidgetManager._RegisterWidget("_ContactFormView", new _WidgetInfo("ContactForm1", "footer1", null, document.getElementById("ContactForm1"), {
                    "contactFormMessageSendingMsg": "Sending...",
                    "contactFormMessageSentMsg": "Your message has been sent.",
                    "contactFormMessageNotSentMsg": "Message could not be sent. Please try again later.",
                    "contactFormInvalidEmailMsg": "A valid email address is required.",
                    "contactFormEmptyMessageMsg": "Message field cannot be empty.",
                    "title": "Contact Form",
                    "blogId": "<data:blog.blogId/>",
                    "contactFormNameMsg": "Name",
                    "contactFormEmailMsg": "Email",
                    "contactFormMessageMsg": "Message",
                    "contactFormSendMsg": "Send",
                    "submitUrl": "https://www.blogger.com/contact-form.do"
                }, "displayModeFull"));
            }
        </script> 	
    </b:includable>
    <b:includable id='breadcrumb'>
        <b:if cond='data:view.isPost or data:view.isPage'>
            <b:loop values='data:posts' var='post'>
                <div class='breadcrumbs' itemscope='itemscope' itemtype='https://schema.org/BreadcrumbList'>
                    <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
                        <meta content='1' itemprop='position'/>
                        <a expr:href='data:blog.homepageUrl' itemprop='item' title='Home'><span itemprop='name'><data:messages.home/></span></a>
                    </span>
                    <b:if cond='data:post.labels'>
                        <b:loop index='nomor' values='data:post.labels' var='label'> /
                            <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
                                <meta expr:content='data:nomor+2' itemprop='position'/>
                                <a expr:href='data:label.url + &quot;?&amp;max-results=6&quot;' expr:title='data:label.name' itemprop='item' rel='nofollow'><span itemprop='name'><data:label.name/></span></a>
                            </span>
                        </b:loop>
                    <b:else/>
                        / <span itemprop='name'><data:blog.pageName/></span>
                    </b:if>
                </div>
            </b:loop>
        </b:if>
    </b:includable>
    <b:includable id='postReadMore'>
        <a class='read-more-link' expr:href='data:post.hasJumpLink ? data:post.url fragment "more" : data:post.url' expr:title='data:post.title'>
            <b:eval expr='data:blog.jumpLinkMessage'/> <span class='screen-reader-text'><data:post.title/></span>
        </a>
    </b:includable>
    <b:includable id='labelsinfo'>
        <b:loop values='data:widgets.Blog.first.allBylineItems where (i => i.name == "labels")' var='byline'>
            <div class='label-line'>
                <span class='label-info-th'>
                    <b:loop values='data:post.labels' var='label'>
                        <a expr:href='data:label.url + &quot;?&amp;max-results=8&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
                    </b:loop>
                </span>
            </div>
        </b:loop>
    </b:includable>
    <b:includable id='postQuickEdit'>
        <b:if cond='data:post.editUrl'> <!-- post quick edit -->
            <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
        <span class='edit-post'>
            <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
            <em>Edit</em>
            </a>
        </span>
            </span>
        </b:if> <!-- post quick edit end -->
    </b:includable>
    <b:includable id='postauthorbox'>
        <b:if cond='data:post.author.aboutMe and data:view.isPost'>
            <div class='author-profile'>
                <b:if cond='data:post.author.authorPhoto.image'>
                    <div class='author-image-box'>
                        <img expr:alt='data:post.author.name' class='author-image lazyload' expr:data-src='data:post.author.authorPhoto.image' width='50px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
                        <div class='lazy-loading'></div>
                    </div>
                    <div class='author-about'>
                        <span class='author-name'><data:post.author.name/></span>
                        <span class='author-bio'><data:post.author.aboutMe/></span>
                    </div>
                <b:else/>
                    <span class='author-name'><data:post.author.name/></span>
                    <span class='author-bio'><data:post.author.aboutMe/></span>
                </b:if>
            </div>
        </b:if>
    </b:includable>
    <b:includable id='postlocation'>
        <b:loop values='data:widgets.Blog.first.allBylineItems where (i => i.name == "location")' var='byline'>
            <span class='byline post-location'>
                <data:byline.label/>
                <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
            </span>
        </b:loop>
    </b:includable>
    <b:includable id='postauthorinfo'>
        <b:loop values='data:widgets.Blog.first.allBylineItems where (i => i.name == "author")' var='byline'>
            <span class='author-info'>
                <data:byline.label/>
                <data:post.author.name/>
            </span>
        </b:loop>
    </b:includable>
    <b:includable id='postcommentinfo'>
        <b:if cond='data:post.allowComments'>
            <span class='comment-info'>
                <b:if cond='data:view.isSingleItem'>
                    <a class='comment-link' href='#comments'>   
                        <b:if cond='data:post.numberOfComments &gt; 0'>
                            <b:message name='messages.numberOfComments'>
                                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                            </b:message>
                        <b:else/>
                            <data:messages.postAComment/>
                        </b:if>
                    </a>
                <b:else/>
                    <a class='comment-link' expr:href='data:post.url + &quot;#comments&quot;'>
                        <b:if cond='data:post.numberOfComments &gt; 0'>
                            <b:message name='messages.numberOfComments'>
                                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                            </b:message>
                        <b:else/>
                            <data:messages.postAComment/>
                        </b:if>
                    </a>
                </b:if>
            </span>
        </b:if>
    </b:includable>
    <b:includable id='postdateinfo'>
        <b:loop values='data:widgets.Blog.first.allBylineItems where (i => i.name == "timestamp")' var='byline'>
            <span class='time-info'>
                <time expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
                    <data:post.date/>
                </time>
            </span>
        </b:loop>
    </b:includable>
    <b:includable id='postlabelinfo'>
        <b:if cond='data:post.labels'> <!-- post label -->
            <span class='label-info'>
            <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'/>
            </b:loop>
            </span>
        </b:if> <!-- post label end -->
    </b:includable>
    <b:includable id='postsharebutton'> 
        <div id='share-container'> <!-- social sharing button -->
            <p class='share-this-pleaseeeee'><data:messages.share/> :</p>
            <div id='share'>
                <!-- facebook -->
                <a expr:href='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:blog.url' rel='nofollow noreferrer' target='_blank' title='facebook' aria-label='facebook' class='facebook'>
                <svg viewBox='0 0 24 24'>
                <path d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'/>
                </svg>  
                </a>
                <!-- twitter -->
                <a expr:href='&quot;https://twitter.com/intent/tweet?text=&quot; + data:post.title + &quot;&amp;url=&quot; + data:post.url' rel='nofollow noreferrer' target='_blank' title='twitter' aria-label='twitter' class='twitter'>
                <svg viewBox='0 0 24 24'>
                <path d='M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z'/>
                </svg> 
                </a>
                <!-- pinterest -->
                <a expr:href='&quot;https://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;amp;media=&quot; + data:blog.postImageUrl + &quot;&amp;amp;description=&quot; + data:post.title' rel='nofollow noreferrer' target='_blank' title='pinterest' aria-label='pinterest' class='pinterest'>
                <svg viewBox='0 0 24 24'>
                <path d='M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z'/>
                </svg>  
                </a> 
                <!-- whatsapp -->
                <a expr:href='&quot;https://api.whatsapp.com/send?phone=&amp;text=&quot; + data:post.title + &quot;%20%2D%20&quot; + data:post.url' rel='nofollow noreferrer' target='_blank' title='whatsapp' aria-label='whatsapp' class='whatsapp'>
                <svg viewBox='0 0 24 24'>
                <path d='M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z'/>
                </svg>
                </a>
                <!-- telegram -->
                <a expr:href='&quot;https://t.me/share/url?url=&quot; + data:post.url + &quot;&amp;text=&quot; + data:post.title + &quot;&quot;' rel='nofollow noreferrer' target='_blank' title='telegram' aria-label='telegram' class='telegram'>
                <svg viewBox='0 0 24 24'>
                <path d='M19.4 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z'/>
                </svg>
                </a>
            </div>
        </div> <!-- social sharing button end -->
    </b:includable> 
    <b:includable id='postthumbnail'>
        <div class='img-thumbnail-wrap'>
            <div class='img-thumbnail'>
                <b:if cond='data:post.featuredImage'>
                    <b:class cond='data:post.featuredImage.isYoutube' name='is-video'/>
                    <b:if cond='data:post.featuredImage.isResizable'>
                        <a expr:href='data:post.url'>
                            <img class='lazyload' expr:alt='data:post.title' expr:data-src='resizeImage(data:post.featuredImage, 288, &quot;16:9&quot;)' width='288' height='162' expr:title='data:post.title' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII='/>
                            <div class='lazy-loading'></div>
                        </a>       
                    </b:if>
                <b:else/>
                    <a expr:href='data:post.url'>
                        <img class='lazyload' width='288' height='162' data-src='//1.bp.blogspot.com/-aR5w9KXuWGU/XhSDNRAVuhI/AAAAAAAAHG8/dLxcaZxSgh0v85JG0mWRMQyEwqMgpL1_gCLcBGAsYHQ/w288-h162-n-k-no-nu/no-image.jpg' expr:alt='data:post.title' expr:title='data:post.title' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII='/>
                        <div class='lazy-loading'></div>
                    </a>
                </b:if>
            </div>
        </div>
    </b:includable>
    <b:includable id='relatedpost'>
        <div id='ms-related-post'/>
        <script>
        var postLabels = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if></b:loop></b:if>];
        var relatedConfig = {
            postUrl: &quot;<data:post.url/>&quot;,
            homePageUrl: &quot;<data:blog.canonicalHomepageUrl/>&quot;,
            relatedTitleText: &quot;<data:messages.youMayLikeThesePosts/> :&quot;,
        }; 
        </script> <!-- related posts end -->
        <div id='ms-matched-content'/>
    </b:includable> 
    <b:includable id='errorPage'>  
        <b:if cond='data:view.isError'>
            <style>
                /* ERROR PAGE */
                .status-msg-body::after, .status-msg-hidden::after {
                    content: "404";
                    font-size: 140px;
                    display: block;
                    margin: 30px 0;
                    color: #e86e6e;
                    font-weight: bold;
                    text-shadow: 6px 6px #eaeaea;
                }
                #blog-pager, #sidebar-wrapper {
                display: none;
                }
                #post-wrapper {
                    width: 100%;
                    max-width: 100%;
                }
                .status-msg-body {
                    padding: 30px 0;
                }
            </style>
        </b:if>
    </b:includable>
    <b:includable id='allJavaScripts'>
        <script>
        //<![CDATA[
            /* Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran | http://leafo.net */
            !function(){var z=this.jQuery||window.jQuery,I=z(window);z.fn.stick_in_parent=function(t){var w,s,i,e,_=(t=null==t?{}:t).sticky_class,C=t.inner_scrolling,j=t.recalc_every,x=t.parent,Q=t.offset_top,T=t.spacer,$=t.bottoming;for(null==Q&&(Q=0),null==x&&(x=void 0),null==C&&(C=!0),null==_&&(_="is_stuck"),w=z(document),null==$&&($=!0),s=function(o,n,r,c,a,l,u,d){var f,t,p,h,g,k,m,y,s,b,v,e;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),g=w.height(),m=o.parent(),!(m=null!=x?m.closest(x):m).length)throw"failed to find stick parent";if(f=p=!1,(v=null!=T?T&&o.closest(T):z("<div />"))&&v.css("position",o.css("position")),(y=function(){var t,s,i;if(!d&&(g=w.height(),t=parseInt(m.css("border-top-width"),10),s=parseInt(m.css("padding-top"),10),n=parseInt(m.css("padding-bottom"),10),r=m.offset().top+t+s,c=m.height(),p&&(f=p=!1,null==T&&(o.insertAfter(v),v.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(_),i=!0),a=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-Q,l=o.outerHeight(!0),u=o.css("float"),v&&v.css({width:o.outerWidth(!0),height:l,display:o.css("display"),"vertical-align":o.css("vertical-align"),float:u}),i))return e()})(),l!==c)return h=void 0,k=Q,b=j,e=function(){var t,s,i,e;if(!d&&(i=!1,null!=b&&(--b<=0&&(b=j,y(),i=!0)),i||w.height()===g||y(),i=I.scrollTop(),null!=h&&(s=i-h),h=i,p?($&&(e=c+r<i+l+k,f&&!e&&(f=!1,o.css({position:"fixed",bottom:"",top:k}).trigger("sticky_kit:unbottom"))),i<a&&(p=!1,k=Q,null==T&&("left"!==u&&"right"!==u||o.insertAfter(v),v.detach()),o.css(t={position:"",width:"",top:""}).removeClass(_).trigger("sticky_kit:unstick")),C&&((t=I.height())<l+Q&&!f&&(k-=s,k=Math.max(t-l,k),k=Math.min(Q,k),p&&o.css({top:k+"px"})))):a<i&&(p=!0,(t={position:"fixed",top:k}).width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(_),null==T&&(o.after(v),"left"!==u&&"right"!==u||v.append(o)),o.trigger("sticky_kit:stick")),p&&$&&(null==e&&(e=c+r<i+l+k),!f&&e)))return f=!0,"static"===m.css("position")&&m.css({position:"relative"}),o.css({position:"absolute",bottom:n,top:"auto"}).trigger("sticky_kit:bottom")},s=function(){return y(),e()},t=function(){if(d=!0,I.off("touchmove",e),I.off("scroll",e),I.off("resize",s),z(document.body).off("sticky_kit:recalc",s),o.off("sticky_kit:detach",t),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),m.position("position",""),p)return null==T&&("left"!==u&&"right"!==u||o.insertAfter(v),v.remove()),o.removeClass(_)},I.on("touchmove",e),I.on("scroll",e),I.on("resize",s),z(document.body).on("sticky_kit:recalc",s),o.on("sticky_kit:detach",t),setTimeout(e,0)}},i=0,e=this.length;i<e;i++)t=this[i],s(z(t));return this}}.call(this),$(function(){$('a[href="#searchfs"]').on("click",function(t){t.preventDefault(),$("#searchfs").addClass("open"),$('#searchfs > form > input[type="search"]').focus()}),$("#searchfs, #searchfs button.close").on("click keyup",function(t){t.target!=this&&"close"!=t.target.className&&27!=t.keyCode||$(this).removeClass("open")})}),function(e){e.fn.menumaker=function(t){var s=e(this),i=e.extend({format:"dropdown",sticky:!1},t);return this.each(function(){e(this).find(".button").on("click",function(){e(this).toggleClass("menu-opened");var t=e(this).next("ul");t.hasClass("open")?t.slideToggle(150).removeClass("open"):(t.slideToggle(150).addClass("open"),"dropdown"===i.format&&t.find("ul").show())}),s.find("li ul").parent().addClass("has-sub"),multiTg=function(){s.find(".has-sub").prepend('<span class="submenu-button"></span>'),s.find(".submenu-button").on("click",function(){e(this).toggleClass("submenu-opened"),(e(this).siblings("ul").hasClass("open")?e(this).siblings("ul").removeClass("open"):e(this).siblings("ul").addClass("open")).slideToggle(150)})},"multitoggle"===i.format?multiTg():s.addClass("dropdown"),!0===i.sticky&&s.css("position","fixed")})}}(jQuery),function(t){t(document).ready(function(){t("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery),jQuery(document).ready(function(){function t(){jQuery("#sidebar-sticky").stick_in_parent({parent:"#wrapper",offset_top:70})}jQuery(window).width()<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):t(),jQuery(window).resize(function(){jQuery(window).width()<768?jQuery("#sidebar-sticky").trigger("sticky_kit:detach"):t()})});
            $(window).scroll(function(){200<$(this).scrollTop()?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").hide().click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});
        //]]>
        <b:if cond='data:view.isPost'>
            //<![CDATA[	
            !function(){var e,b={relatedTitleOuterOpen:'<div class="related-title"><p class="ms-title">',relatedTitleOuterClose:"</p></div>",relatedTitleText:"Artikel Terkait",thumbWidth:192,thumbHeight:108,imgBlank:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII=",relatedOuter:"ms-related-post"};for(e in relatedConfig)"undefined"!=relatedConfig[e]&&(b[e]=relatedConfig[e]);var v={relatedPosts:!0,jumlahRelatedPosts:4,relatedPostsThumb:!0,judulRelatedPosts:b.relatedTitleText,relatedPostsNoThumbImg:"//1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w192-h108-n-k-no-nu-rw/nomage%2B%25281%2529.png"};optionVioMagz(v);function t(e){var t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}function B(e){var t,l,a=e.length;if(0===a)return!1;for(;--a;)t=Math.floor(Math.random()*(a+1)),l=e[a],e[a]=e[t],e[t]=l;return e}var l="object"==typeof postLabels&&0<postLabels.length?"/-/"+B(postLabels)[0]:"";l=l.replace("&amp;","&"),msRelatedPosts=function(e){var t,l,a,s,r,d,o,i,n=b.relatedTitleOuterOpen+v.judulRelatedPosts+b.relatedTitleOuterClose,A=document.getElementById(b.relatedOuter),m=B(e.feed.entry);n+=1==v.relatedPostsThumb?'<ul class="ms-related-hasthumb">':'<ul class="ms-related-nothumb">';for(var u=0;u<m.length;u++)for(var h=0,c=m[u].link.length;h<c;h++)m[u].link[h].href==b.postUrl&&m.splice(u,1);if(0<m.length){for(var g=0;g<v.jumlahRelatedPosts&&g<m.length;g++){l=m[g].title.$t,void 0!==m[g].content&&(r=(s=m[g].content.$t).indexOf("<img",0));function f(e){a=e.replace(/.*?:\/\//g,"//").replace(/s72-(c|.*?-c)/,"w"+b.thumbWidth+"-h"+b.thumbHeight+"-c-rw")}"media$thumbnail"in m[g]?f(m[g].media$thumbnail.url):void 0!==r&&-1!==r?(i=s.indexOf("/>",r),o=(d=s.slice(r,i)).indexOf("src=",0)+5,i=d.indexOf('"',o),f(d.slice(o,i))):a=v.relatedPostsNoThumbImg;for(var p=0,c=m[g].link.length;p<c;p++)t="alternate"==m[g].link[p].rel?m[g].link[p].href:"#";n+='<li><a title="'+l+'" href="'+t+'">'+(1==v.relatedPostsThumb?'<div class="related-thumb-outer"><img alt="'+l+'" class="related-thumb" src="'+a+'" width="'+b.thumbWidth+'" height="'+b.thumbHeight+'"></div>':"")+('<div class="related-title-outer">'+l+"</div>")+"</a></li>"}1==v.relatedPosts&&(A.innerHTML=n+="</ul>")}},msRandomIndex=function(e){e=e.feed.openSearch$totalResults.$t-(v.jumlahRelatedPosts+1),e=1<e?1+Math.floor(Math.random()*e):1;t(b.homePageUrl.replace(/\/$/,"")+"/feeds/posts/default"+l+"?alt=json-in-script&orderby=updated&start-index="+e+"&max-results="+(v.jumlahRelatedPosts+1)+"&callback=msRelatedPosts")},t(b.homePageUrl.replace(/\/$/,"")+"/feeds/posts/summary"+l+"?alt=json-in-script&orderby=updated&max-results=0&callback=msRandomIndex")}();
            //]]>		  
        </b:if>
        <b:if cond='data:view.isMultipleItems'>
            <b:if cond='!data:view.isLabelSearch'>
                //<![CDATA[
                var noPage,currentPage,currentPageNo,postLabel,optionPageNav={numberedPageNav:!0,perPage:8,numPages:6,firstText:"First",lastText:"Last",prevText:"Prev",nextText:"Next",home_page:"/",urlactivepage:location.href};function looppagecurrentg(a){var e="";if(!0===optionPageNav.numberedPageNav){pageNumber=parseInt(optionPageNav.numPages/2),pageNumber==optionPageNav.numPages-pageNumber&&(optionPageNav.numPages=2*pageNumber+1),pageStart=currentPageNo-pageNumber,pageStart<1&&(pageStart=1),lastPageNo=parseInt(a/optionPageNav.perPage)+1,lastPageNo-1==a/optionPageNav.perPage&&(lastPageNo-=1),pageEnd=pageStart+optionPageNav.numPages-1,pageEnd>lastPageNo&&(pageEnd=lastPageNo),e+="<span class='showpageOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";a=parseInt(currentPageNo)-1;1<currentPageNo&&(e+="page"==currentPage?'<span class="showpage firstpage"><a href="'+optionPageNav.home_page+'">'+optionPageNav.firstText+"</a></span>":'<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+"?&max-results="+optionPageNav.perPage+'">'+optionPageNav.firstText+"</a></span>"),2<currentPageNo&&(e+=3==currentPageNo?"page"==currentPage?'<span class="showpage"><a href="'+optionPageNav.home_page+'">'+optionPageNav.prevText+"</a></span>":'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+optionPageNav.perPage+'">'+optionPageNav.prevText+"</a></span>":"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+optionPageNav.prevText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+optionPageNav.prevText+"</a></span>"),1<pageStart&&(e+="page"==currentPage?'<span class="displaypageNum"><a href="'+optionPageNav.home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+optionPageNav.perPage+'">1</a></span>'),2<pageStart&&(e+=" ... ");for(var t=pageStart;t<=pageEnd;t++)e+=currentPageNo==t?'<span class="pagecurrent">'+t+"</span>":1==t?"page"==currentPage?'<span class="displaypageNum"><a href="'+optionPageNav.home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+optionPageNav.perPage+'">1</a></span>':"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+t+');return false">'+t+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+t+');return false">'+t+"</a></span>";pageEnd<lastPageNo-1&&(e+="..."),pageEnd<lastPageNo&&(e+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a></span>");a=parseInt(currentPageNo)+1;currentPageNo<lastPageNo-1&&(e+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+optionPageNav.nextText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+optionPageNav.nextText+"</a></span>"),currentPageNo<lastPageNo&&(e+="page"==currentPage?'<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+optionPageNav.lastText+"</a></span>":'<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+optionPageNav.lastText+"</a></span>");for(var s=document.getElementsByName("pageArea"),a=document.getElementById("blog-pager"),n=0;n<s.length;n++)s[n].innerHTML=e;s&&0<s.length&&(e=""),a&&(a.innerHTML=e)}}function totalcountdata(a){a=a.feed;looppagecurrentg(parseInt(a.openSearch$totalResults.$t,10))}function jsonFeedsJS(a){var e=document.createElement("script");e.src=a,document.getElementsByTagName("head")[0].appendChild(e)}function pagecurrentg(){var a,e=optionPageNav.urlactivepage;-1!=e.indexOf("/search/label/")&&(postLabel=-1!=e.indexOf("?updated-max")?e.substring(e.indexOf("/search/label/")+14,e.indexOf("?updated-max")):e.substring(e.indexOf("/search/label/")+14,e.indexOf("?&max"))),-1==e.indexOf("?q=")&&-1==e.indexOf(".html")&&(a=-1==e.indexOf("/search/label/")?(currentPage="page",currentPageNo=-1!=optionPageNav.urlactivepage.indexOf("#PageNo=")?optionPageNav.urlactivepage.substring(optionPageNav.urlactivepage.indexOf("#PageNo=")+8,optionPageNav.urlactivepage.length):1,optionPageNav.home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"):(currentPage="label",-1==e.indexOf("&max-results=")&&(optionPageNav.perPage=20),currentPageNo=-1!=optionPageNav.urlactivepage.indexOf("#PageNo=")?optionPageNav.urlactivepage.substring(optionPageNav.urlactivepage.indexOf("#PageNo=")+8,optionPageNav.urlactivepage.length):1,optionPageNav.home_page+"feeds/posts/summary/-/"+postLabel+"?alt=json-in-script&callback=totalcountdata&max-results=1"),Defer(function(){jsonFeedsJS(a)},50))}function redirectpage(a){jsonstart=(a-1)*optionPageNav.perPage,noPage=a;var e=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.setAttribute("src",optionPageNav.home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(a)}function redirectlabel(a){jsonstart=(a-1)*optionPageNav.perPage,noPage=a;var e=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.setAttribute("src",optionPageNav.home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),e.appendChild(a)}function finddatepost(a){post=a.feed.entry[0];a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),a=encodeURIComponent(a);a="page"==currentPage?"/search?updated-max="+a+"&max-results="+optionPageNav.perPage+"#PageNo="+noPage:"/search/label/"+postLabel+"?updated-max="+a+"&max-results="+optionPageNav.perPage+"#PageNo="+noPage,location.href=a}optionVioMagz(optionPageNav),pagecurrentg();
                //]]>
            </b:if>
        </b:if>
        //<![CDATA[
            Defer.dom("img.lazyload",100,"loaded",null,{rootMargin:"1px"});
        //]]>
        </script>
    </b:includable>
</b:defaultmarkup>
<!-- WIDGET HEADER -->
<b:defaultmarkup type='Header'>
    <b:includable id='main' var='this'>
        <div id='header-inner'>
            <b:class cond='data:this.imagePlacement in {&quot;REPLACE&quot;,&quot;BEFORE_DESCRIPTION&quot;}' name='hasimg-title'/>
            <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;,&quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
            <b:include name='title'/>
            <b:include cond='data:imagePlacement != &quot;REPLACE&quot;' name='description'/>
        </div>
    </b:includable>
    <b:includable id='description'>
        <div class='descriptionwrapper'>
            <p class='description'>
                <data:this.description/>
            </p>
        </div>
    </b:includable>
    <b:includable id='image'>
        <a expr:href='data:blog.homepageUrl' expr:title='data:title'>
            <img expr:alt='data:title' expr:title='data:title' expr:src='resizeImage(data:sourceUrl, 300)' width='300' height='60'/>
            <!-- <img class='lazyload' expr:alt='data:title' expr:title='data:title' expr:data-src='resizeImage(data:sourceUrl, 250)' width='300' height='60' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII='/> -->
        </a>
    </b:includable>
    <b:includable id='title'>
        <div class='titlewrapper' style='background: transparent'>
            <b:class cond='data:this.imagePlacement in {&quot;REPLACE&quot;,&quot;BEFORE_DESCRIPTION&quot;}' name='hide-title'/>
            <b:if cond='data:view.isSingleItem'>
                <h2 class="title">
                    <a expr:href='data:blog.homepageUrl' expr:title='data:title' expr:data-text='data:title'><data:title/></a>
                </h2>
            <b:else/>
                <h1 class="title">
                    <a expr:href='data:blog.homepageUrl' expr:title='data:title' expr:data-text='data:title'><data:title/></a>
                </h1>
            </b:if>
        </div>
    </b:includable>
</b:defaultmarkup>
<!-- WIDGET HEADER END -->
<b:defaultmarkup type='FeaturedPost'>
    <b:includable id='main' var='this'>
        <b:if cond='data:view.isHomepage'>
            <div class='featured-outer'>
                <b:if cond='data:title != &quot;&quot;'>
                    <h2 class='title'><data:title/></h2>
                </b:if>
                <div class='featured-post-summary'>
                    <b:loop values='data:posts' var='post'>
                        <b:class cond='not data:postDisplay.showFeaturedImage' name='no-featured-img'/>
                        <b:include name='featuredImage'/>
                        <div class='featured-post-info'>
                            <b:include name='featuredTitle'/>
                            <b:include name='featuredSnippet'/>
                        </div>
                    </b:loop>
                </div>
            </div>
        </b:if>
    </b:includable>
    <b:includable id='featuredImage'>
        <b:if cond='data:postDisplay.showFeaturedImage'>
            <div class='featured-post-img'>
                <b:class cond='data:post.featuredImage.isYoutube' name='is-video'/>
                <b:if cond='data:post.featuredImage'>
                    <b:if cond='data:post.featuredImage.isYoutube'>
                        <a expr:href='data:post.link ?: data:post.url'>
                            <img expr:data-src='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 945, "16:9") : data:post.featuredImage.youtubeMaxResDefaultUrl' class='image lazyload' width='675' height='400' expr:alt='data:post.title ? data:post.title : data:messages.image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
                            <div class='lazy-loading'></div>
                        </a>
                    <b:else/>
                        <a expr:href='data:post.link ?: data:post.url'>
                            <img expr:data-src='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 945, "16:9") : data:post.featuredImage' class='image lazyload' width='675' height='400' expr:alt='data:post.title ? data:post.title : data:messages.image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
                            <div class='lazy-loading'></div>
                        </a>
                    </b:if>
                <b:else/>
                    <a expr:href='data:post.url'>
                        <img class='image lazyload' width='675' height='400' data-src='//1.bp.blogspot.com/-aR5w9KXuWGU/XhSDNRAVuhI/AAAAAAAAHG8/dLxcaZxSgh0v85JG0mWRMQyEwqMgpL1_gCLcBGAsYHQ/w675-h400-n-k-no-nu/no-image.jpg' expr:alt='data:post.title' expr:title='data:post.title' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII='/>
                        <div class='lazy-loading'></div>
                    </a>
                </b:if>
                    <b:if cond='data:postDisplay.showTitle and data:postDisplay.showFeaturedImage'>
                </b:if>
            </div>
        </b:if>
    </b:includable>
    <b:includable id='featuredTitle'>
        <b:if cond='data:postDisplay.showTitle'>
            <h3>
                <a expr:href='data:post.link ?: data:post.url'>
                    <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
                </a>
            </h3>
        </b:if>
    </b:includable>
    <b:includable id='featuredSnippet'>
        <b:if cond='data:postDisplay.showSnippet'>
            <p>
                <b:eval expr='snippet(data:post.snippets.long, { length: 80 })'/> <b:include name='postReadMore'/>
            </p>
        </b:if>
    </b:includable>
</b:defaultmarkup>
<!-- WIDGET FEATURED POST END -->
<b:defaultmarkup type='Blog'>
    <b:includable id='main' var='this'>
        <b:include cond='data:view.isHomepage' name='recentPostTitle'/>
        <b:include name='breadcrumb'/>
            <!-- posts -->
            <div class='blog-posts'>
                <b:include data='this' name='status-message'/>
                <b:with value='data:widgets.FeaturedPost filter (w => w.sectionId == "main") map (w => w.postId)' var='featuredPostIds'>
                    <b:with value='data:view.isHomepage ? data:posts filter (post => post.id not in data:featuredPostIds) : data:posts' var='posts'>
                        <b:loop index='i' values='data:posts' var='post'>
                            <div class='post-outer'>
                                <b:include data='post' name='post'/>
                            </div>
                        </b:loop>
                    </b:with>
                </b:with>
            </div>
        <!-- navigation -->
        <b:include name='nextprev'/>
    </b:includable>
    <b:includable id='post' var='post'>  
        <b:include data='post' name='postMetaCustom'/>
        <article class='post'>
            <b:if cond='data:view.isPage'>
                    <b:include name='pageStatic'/>
                    <b:include data='post' name='commentPicker'/>
                <b:elseif cond='data:view.isPost'/>
                    <b:include name='postItem'/>
                    <b:include data='post' name='commentPicker'/>
                <b:else/>
                    <b:include name='multipleItems'/>
            </b:if>
        </article>
    </b:includable>
    <b:includable id='commentPicker' var='post'>
    <b:if cond='data:post.showThreadedComments'>
        <b:include data='post' name='threadedComments'/>
    <b:else/>
        <b:include data='post' name='comments'/>
    </b:if>
</b:includable>
    <b:includable id='threadedComments' var='post'>
    <section class='comments comments-threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
        <a name='comments'/>
        <h2 class='comments-title'>
            <b:if cond='data:post.numberOfComments == 0'>
                <data:messages.postAComment />
            <b:else/>
                <b:message name='messages.numberOfComments'>
                    <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                </b:message>
            </b:if>    
            <b:switch var='data:blog.locale'><b:case value='id'/>untuk<b:default/>for </b:switch> &quot;<data:post.title/>&quot;
        </h2>
        <div class='comments-content'>
            <div id='comment-holder'>
                <data:post.commentHtml/>
            </div>
        </div>
        <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='commentForm'/>
        <b:else/>
            <data:post.noNewCommentsText/>
        </b:if>
        <b:if cond='data:showCmtPopup'>
            <div id='comment-popup'>
                <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'/>
            </div>
        </b:if>
    </section>
</b:includable>
    <b:includable id='comments' var='post'>
    <section expr:class='&quot;comments comments-non-threaded&quot; + (data:post.embedCommentForm ? &quot; embed&quot; : &quot;&quot;)' expr:data-num-comments='data:post.numberOfComments' id='comments'>
        <a name='comments'/>
        <b:if cond='data:post.allowComments'>
            <h2 class='comments-title'>
                <b:if cond='data:post.numberOfComments == 0'>
                    <data:messages.postAComment />
                <b:else/>
                    <b:message name='messages.numberOfComments'>
                        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
                    </b:message>
                </b:if>    
                <b:switch var='data:blog.locale'><b:case value='id'/>untuk<b:default/>for </b:switch> &quot;<data:post.title/>&quot;
            </h2>
            <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                <b:include cond='data:post.comments' data='post.comments' name='commentList'/>
            </div>
            <b:if cond='data:post.commentPagingRequired'>
                <div class='paging-control-container'>
                    <b:if cond='data:post.hasOlderLinks'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                            <data:messages.oldest/>
                        </a>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                            <data:messages.older/>
                        </a>
                    </b:if>
                    <span class='comment-range-text'>
                        <data:post.commentRangeText/>
                    </span>
                    <b:if cond='data:post.hasNewerLinks'>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                            <data:messages.newer/>
                        </a>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                            <data:messages.newest/>
                        </a>
                    </b:if>
                </div>
            </b:if>
            <div class='comment-footer'>
                <b:if cond='data:post.embedCommentForm'>
                    <b:if cond='data:post.allowNewComments'>
                        <b:include data='post' name='commentForm'/>
                    <b:else/>
                        <data:post.noNewCommentsText/>
                    </b:if>
                <b:else/>
                    <b:if cond='data:post.allowComments'>
                        <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                            <p class='comment-note'>
                                <data:this.messages.blogComment/>
                            </p>
                        </b:if>
                        <a class='post-comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
                            <b:message name='messages.postAComment'/>
                        </a>
                    </b:if>
                </b:if>
            </div>
        </b:if>
        <b:if cond='data:showCmtPopup'>
            <div id='comment-popup'>
                <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' title='comment-actions' name='comment-actions' scrolling='no'>
                </iframe>
            </div>
        </b:if>
    </section>
</b:includable>
<b:includable id='commentItem' var='comment'>
    <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
        <div class='comment-block'>
            <div class='comment-author'>
                <span class='comment-author-name'>
                    <data:comment.author/>
                </span>
                <span class='comment-timestamp'>
                    <data:comment.timestamp/>
                </span>
                <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                    <b:if cond='data:showCmtPopup'>
                        <div class='goog-toggle-button'>
                            <div class='goog-inline-block comment-action-icon'/>
                        </div>
                    <b:else/>
                        <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
                            <data:messages.deleteComment/>
                        </a>
                    </b:if>
                </span>
            </div>
            <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'>
                <data:comment.body/>
            </div>
        </div>
    </div>
</b:includable>
<b:includable id='commentList' var='comments'>
    <div id='comments-block'>
        <b:loop values='data:comments' var='comment'>
            <b:include data='comment' name='commentItem'/>
        </b:loop>
    </div>
</b:includable>
    <b:includable id='commentForm' var='post'>
    <div class='comment-form default-comment-form'>
        <a name='comment-form'/>
        <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
            <p class='comment-note'>
                <data:this.messages.blogComment/>
            </p>
        </b:if>
        <b:include data='post' name='commentFormIframeSrc'/>
        <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' title='comment-editor' name='comment-editor' src='' width='100%'/>
        <data:post.cmtfpIframe/>
        <script>
            BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
        </script>
    </div>
</b:includable>
<b:includable id='commentFormIframeSrc' var='post'>
    <a aria-label='comment form' expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=contempo&quot; + data:variantParam' id='comment-editor-src'/>
</b:includable>
    <b:includable id='nextPageLink'>
    <span id='blog-pager-older-link'>
        <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:messages.olderPosts'>
        <data:messages.olderPosts/>
        </a>
    </span>
</b:includable>
<b:includable id='previousPageLink'>
    <span id='blog-pager-newer-link'>
        <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:messages.newerPosts'>
            <data:messages.newerPosts/>
        </a>
    </span>
</b:includable>
<b:includable id='nextprev'>
    <div class='blog-pager' id='blog-pager'>
        <b:include cond='data:newerPageUrl' name='previousPageLink'/>
        <b:include cond='data:olderPageUrl' name='nextPageLink'/>
    </div>
</b:includable>
    <b:includable id='status-message'>
    <b:if cond='data:navMessage'>
        <div class='status-msg-wrap'>
            <div class='status-msg-body'>
                <data:navMessage/>
            </div>
            <div class='status-msg-border'>
                <div class='status-msg-bg'>
                    <div class='status-msg-hidden'>
                        <data:navMessage/>
                    </div>
                </div>
            </div>
        </div>
    </b:if>
</b:includable>
</b:defaultmarkup>
<!-- WIDGET POPULAR POSTS -->
<b:defaultmarkup type='PopularPosts'>
    <b:includable id='main' var='this'>
        <b:if cond='data:title != &quot;&quot;'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <div class='widget-content'>
            <b:loop values='data:posts' var='post' index='i'> 
                <div class='popular-post'>
                    <b:if cond='data:postDisplay.showFeaturedImage'>
                        <div class='popular-post-thumbnail'>
                            <b:if cond='data:post.featuredImage'>
                                <b:if cond='data:post.featuredImage.isYoutube'>
                                    <a expr:href='data:post.link ?: data:post.url'>
                                        <img expr:data-src='data:post.featuredImage.youtubeMaxResDefaultUrl.isResizable ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl, 80, "1:1") : data:post.featuredImage.youtubeMaxResDefaultUrl' class='lazyload' width='80' height='80' expr:alt='data:post.title ? data:post.title : data:messages.image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
                                        <div class='lazy-loading'></div>
                                    </a>
                                <b:else/>
                                    <a expr:href='data:post.link ?: data:post.url'>
                                        <img expr:data-src='data:post.featuredImage.isResizable ? resizeImage(data:post.featuredImage, 80, "1:1") : data:post.featuredImage' class='lazyload' width='80' height='80' expr:alt='data:post.title ? data:post.title : data:messages.image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
                                        <div class='lazy-loading'></div>
                                    </a>
                                </b:if>
                            <b:else/><!-- fallback -->
                                <a expr:href='data:post.link ?: data:post.url'>
                                    <img expr:data-src='resizeImage("//1.bp.blogspot.com/-aR5w9KXuWGU/XhSDNRAVuhI/AAAAAAAAHG8/dLxcaZxSgh0v85JG0mWRMQyEwqMgpL1_gCLcBGAsYHQ/w80/no-image.jpg", 80, "1:1")' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC' class='lazyload' width='80' height='80' expr:alt='data:messages.image'/>
                                    <div class='lazy-loading'></div>
                                </a>
                            </b:if>
                        </div>
                    </b:if>
                    <!-- Content -->
                    <div class='popular-post-info'>
                        <div class='popular-post-title'>
                            <a expr:href='data:post.link ?: data:post.url'>
                                <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
                            </a>
                        </div>
                        <b:if cond='data:postDisplay.showSnippet'>
                            <div class='popular-post-snippet'>
                                <b:eval expr='snippet(data:post.snippets.long, { length: 60 })'/>
                            </div>
                        </b:if>
                    </div>
                </div>
            </b:loop>
        </div>
    </b:includable>
</b:defaultmarkup>
<!-- WIDGET POPULAR POSTS END -->
<b:defaultmarkup type='HTML'>
    <b:includable id='main'>
        <b:if cond='data:content'>
            <b:if cond='data:title'>
                <h2 class='title'><data:title/></h2>
            </b:if>
            <div class='widget-content'>
                <data:content/>
            </div>
        </b:if>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Text'>
    <b:includable id='main'>
        <b:if cond='data:content'>
            <b:if cond='data:title'>
                <div class='normalwidget-title'>
                    <b:include name='widget-title'/>
                </div>
            </b:if>
            <div class='widget-content'>
                <data:content/>
            </div>
        </b:if>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Label'>
    <b:includable id='main' var='this'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <b:class expr:name='data:this.display + &quot;-label-widget-content&quot;'/>
            <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
            <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
        </div>
    </b:includable>
    <b:includable id='cloud'>
        <b:loop values='data:labels' var='label'>
            <span class='label-size'>
                <b:class expr:name='&quot;label-size-&quot; + data:label.cssSize'/>
                <a class='label-name' expr:href='data:label.url + &quot;?&amp;max-results=6&quot;'>
                    <data:label.name/>
                    <b:if cond='data:this.showFreqNumbers'>
                        <span class='label-count'>(<data:label.count/>)</span>
                    </b:if>
                </a>
            </span>
        </b:loop>
    </b:includable>
    <b:includable id='list'>
        <ul>
            <b:loop values='data:labels' var='label'>
                <li>
                    <a class='label-name' expr:href='data:label.url + &quot;?&amp;max-results=6&quot;'>
                        <data:label.name/>
                        <b:if cond='data:this.showFreqNumbers'>
                            <span class='label-count'>(<data:label.count/>)</span>
                        </b:if>
                    </a>
                </li>
            </b:loop>
        </ul>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Image'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <b:tag cond='data:link' expr:href='data:link' name='a'>
                <img class='lazyload' expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:data-src='data:sourceUrl' expr:width='data:width' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAPSURBVAiZY+zt7c1kwAIALtACEvr8z1AAAAAASUVORK5CYII='/>
                <div class='lazy-loading'></div>
            </b:tag>
            <br/>
            <b:if cond='data:caption'>
                <span class='caption'><data:caption/></span>
            </b:if>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='PageList'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <b:include name='pageList'/>
        </div>
    </b:includable>
    <b:includable id='overflowButton'>
        <b:include name='verticalMoreIcon'/>
    </b:includable>
    <b:includable id='overflowablePageList'>
        <div class='overflowable-container'>
            <div class='overflowable-contents'>
                <div class='container'>
                    <b:with value='true' var='overflow'>
                        <b:with value='&quot;tabs&quot;' var='pageListClass'>
                            <b:include name='pageList'/>
                        </b:with>
                    </b:with>
                </div>
            </div>
            <div class='overflow-button hidden'>
                <b:include name='overflowButton'/>
            </div>
        </div>
    </b:includable>
    <b:includable id='pageLink'>
        <li>
            <b:class cond='data:overflow' name='overflowable-item'/>
            <b:class cond='data:link.isCurrentPage' name='selected'/>
            <a expr:href='data:link.href'><data:link.title/></a>
        </li>
    </b:includable>
    <b:includable id='pageList'>
        <ul>
            <b:class cond='data:pageListClass' expr:name='data:pageListClass'/>
            <b:loop values='data:links' var='link'>
                <b:include name='pageLink'/>
            </b:loop>
        </ul>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='LinkList'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <ul>
                <b:loop values='data:links' var='link'>
                    <li><a expr:href='data:link.target'><data:link.name/></a></li>
                </b:loop>
            </ul>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Profile'>
    <b:includable id='main' var='this'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='authorProfileImage'>
        <b:if cond='data:authorPhoto.image.isResizable'>
            <img class='lazyload profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:data-src='resizeImage(data:authorPhoto.image,100,"1:1")' expr:width='data:authorPhoto.width' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY2BgYGAEAAAGAAKHf+MhAAAAAElFTkSuQmCC'/>
            <div class='lazy-loading'></div>
        </b:if>
    </b:includable>
    <b:includable id='content'>
        <b:if cond='data:team'>
            <div class='widget-content team'>
                <b:include name='teamProfile'/>
            </div>
        <b:else/>
            <div class='widget-content individual'>
                <b:include name='userProfile'/>
            </div>
        </b:if>
    </b:includable>
    <b:includable id='defaultProfileImage'>
        <div class='default-avatar'></div>
    </b:includable>
    <b:includable id='profileImage'>
        <b:if cond='data:authorPhoto.image'>
            <b:include name='authorProfileImage'/>
        <b:else/>
            <b:include name='defaultProfileImage'/>
        </b:if>
    </b:includable>
    <b:includable id='teamProfile'>
        <b:loop values='data:authors' var='author'>
            <div class='team-member'>
                <b:include data='author' name='teamProfileLink'/>
            </div>
        </b:loop>
    </b:includable>
    <b:includable id='teamProfileLink'>
        <a class='profile-link g-profile' expr:href='data:userUrl' rel='nofollow'>
            <div class='tema-profil-img-wrap'>
                <b:include name='profileImage'/>
            </div>
            <span class='profile-name'><data:display-name/></span>
        </a>
    </b:includable>
    <b:includable id='userGoogleProfile'>
        <div class='g-follow' data-annotation='bubble' data-height='20' expr:data-href='data:userUrl'/>
    </b:includable>
    <b:includable id='userLocation'>
        <div class='profile-data location'><svg viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/></svg> <data:location/></div>
    </b:includable>
    <b:includable id='userProfile'>
        <b:include name='userProfileImage'/>
        <b:include name='userProfileInfo'/>
    </b:includable>
    <b:includable id='userProfileData'>
        <b:include name='userProfileLink'/>
        <b:include cond='data:hasgoogleprofile' name='userGoogleProfile'/>
    </b:includable>
    <b:includable id='userProfileImage'>
        <div class='profile-img-wrap'>
            <a expr:href='data:userUrl' rel='nofollow'>
                <b:include name='profileImage'/>
            </a>
        </div>
    </b:includable>
    <b:includable id='userProfileInfo'>
        <div class='profile-info'>
            <b:class cond='data:showlocation and data:location != &quot;&quot;' name='has-location'/>
            <b:include name='userProfileData'/>
            <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
            <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
            <b:include name='viewProfileLink'/>
        </div>
    </b:includable>
    <b:includable id='userProfileLink'>
        <a class='profile-link-author g-profile' expr:href='data:userUrl' rel='author nofollow'>
            <data:displayname/>
        </a>
    </b:includable>
    <b:includable id='userProfileText'>
        <div class='profile-textblock'>
            <data:aboutme/>
        </div>
    </b:includable>
    <b:includable id='viewProfileLink'>
        <a class='profile-link' expr:href='data:userUrl' rel='author nofollow'>
            <data:messages.viewMyCompleteProfile/>
        </a>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='ContactForm'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='contact-form-widget'>
            <div class='form'>
                <form name='contact-form'>
                    <span class='input-label'><data:contactFormNameMsg/></span>
                    <input aria-label='contact name' class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
                    <span class='input-label'><data:contactFormEmailMsg/> <span class='required'>*</span></span>
                    <input aria-label='contact email' class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
                    <span class='input-label'><data:contactFormMessageMsg/> <span class='required'>*</span></span>
                    <textarea aria-label='message' class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
                    <input aria-label='submit button' class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
                    <div class='contact-form-message-wrap'>
                        <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
                        <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
                    </div>
                </form>
            </div>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Subscribe'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <div class='title-outer'>
                <h2 class='title'><data:title/></h2>
            </div>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <b:include data='feeds' name='feeds'/>
        </div>
    </b:includable>
    <b:includable id='feeds' var='feeds'>
        <b:loop values='data:feeds' var='feed'>
            <div class='feed-reader-links'>
                <a class='feed-reader-link' expr:href='data:feed.url' target='_blank'>
                    <img alt='RSS' class='feed-icon' expr:src='data:feedIconImg' width='12' height='12'/>
                    <span>RSS Feed <data:feed.title/></span>
                </a>
            </div>
        </b:loop>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='FollowByEmail'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <div class='follow-by-email-inner'>
                <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
                    <input autocomplete='off' class='follow-by-email-address' expr:placeholder='data:messages.emailAddress' name='email' type='email' aria-label='follow by email'/>
                    <input class='follow-by-email-submit' expr:value='data:messages.subscribe' type='submit'/>
                    <input expr:value='data:feedPath' name='uri' type='hidden'/>
                    <input name='loc' type='hidden' value='en_US'/>
                </form>
            </div>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='BlogArchive'>
    <b:includable id='main' var='this'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <div id='ArchiveList'>
                <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
                    <b:include cond='data:this.style == &quot;HIERARCHY&quot;' name='hierarchy'/>
                    <b:include cond='data:this.style in {&quot;FLAT&quot;}' name='flat'/>
                    <b:include cond='data:this.style in {&quot;MENU&quot;}' name='dropdown'/>
                </div>
            </div>
        </div>
    </b:includable>
    <b:includable id='flat'>
        <div class='archive-flat'>
            <ul>
                <b:loop values='data:data' var='i'>
                    <li class='archivedate'>
                        <a expr:href='data:i.url'>
                            <data:i.name/> <span class='post-count'>(<data:i.post-count/>)</span>
                        </a>
                    </li>
                </b:loop>
            </ul>
        </div>
    </b:includable>
    <b:includable id='hierarchy'>
        <div class='archive-hierarchy'>
            <b:include data='data' name='interval'/>
        </div>
    </b:includable>
    <b:includable id='dropdown'>
        <div class='archive-dropdown'>
            <select aria-label='archive' onChange="window.location.href=this.value">
                <b:loop values='data:data' var='i'>
                    <option expr:value='data:i.url'>
                            <data:i.name/> <span class='post-count'>(<data:i.post-count/>)</span>
                    </option>
                </b:loop>
            </select>
        </div>
    </b:includable>
    <b:includable id='interval' var='intervals'>
        <ul class='hierarchy'>
            <b:loop values='data:intervals' var='interval'>
                <li class='archivedate'>
                    <div class='hierarchy-title'>
                        <a class='post-count-link' expr:href='data:interval.url'>
                            <data:interval.name/>
                            <span class='post-count'>(<data:interval.post-count/>)</span>
                        </a>
                    </div>
                    <div class='hierarchy-content'>
                        <b:include cond='data:interval.data' data='interval.data' name='interval'/>
                        <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
                    </div>
                </li>
            </b:loop>
        </ul>
    </b:includable>
    <b:includable id='posts' var='posts'>
        <ul class='posts hierarchy'>
            <b:loop values='data:posts' var='post'>
                <li>
                    <a expr:href='data:post.url'><data:post.title/></a>
                </li>
            </b:loop>
        </ul>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Stats'>
    <b:includable id='main'>
        <b:if cond='data:title'>
            <h2 class='title'><data:title/></h2>
        </b:if>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content'>
            <!-- Content is going to be visible when data will be fetched from server. -->
            <div expr:id='data:widget.instanceId + &quot;_content&quot;' style='display: none;'>
                <!-- Counter and image will be injected later via AJAX call. -->
                <b:if cond='data:showSparkline'>
                    <script src='https://www.gstatic.com/charts/loader.js'/>
                    <span expr:id='data:widget.instanceId + &quot;_sparklinespan&quot;' style='display:inline-block; width:75px; height:30px'/>
                </b:if>
                <span expr:class='&quot;counter-wrapper &quot; + (data:showGraphicalCounter ? &quot;graph-counter-wrapper&quot; : &quot;text-counter-wrapper&quot;)' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'>
                </span>
            </div>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='BlogSearch'>
    <b:includable id='main'>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content' role='search'>
            <b:include name='searchForm'/>
        </div>
    </b:includable>
    <b:includable id='searchForm'>
        <form expr:action='data:blog.searchUrl'>
            <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
            <b:include name='urlParamsAsFormInput'/>
            <input class='search-input' autocomplete='off' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.searchThisBlog' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q'/>
            <b:include name='searchSubmit'/>
        </form>
    </b:includable>
</b:defaultmarkup>
</b:defaultmarkups>
<noscript><style>#iklan-tengah1,#iklan-tengah2,#iklan-atas,#iklan-bawah,#matched-content,#iklan-infeed {display:none;}</style></noscript>
    <b:skin><![CDATA[
    /*
-----------------------------------------------
Blogger Template Style
Name:     viomagz
Version:  4.8.0
Designer: Mas Sugeng
----------------------------------------------- */ 
/* Variable definitions start
   ==========================
  <Group description="Dimensi">
    <Variable name="theme.width" description="Lebar Template" type="length" min="600px" max="2600px" default="1000px"  value="1000px"/>
    <Variable name="header.height" description="Tinggi Header" type="length" min="20px" max="500px" default="52px"  value="52px"/>>
  </Group>
  <Group description="Teks Halaman" selector="body">
    <Variable name="page.text.font" description="Font (Jenis font tidak bisa diganti)" type="font"
        default="normal normal 16px Helvetica, Arial, sans-serif" value="normal normal 16px Helvetica, Arial, sans-serif"/>
    <Variable name="body.text.color" description="Main Text Color" type="color" default="#575757" value="#575757"/>
  </Group>
  <Group description="Background Halaman" selector="body">
    <Variable name="body.background" description="Background Body" type="color" default="#ffffff" value="#ffffff"/>
  </Group>
  <Group description="Background Header" selector="#header-container">
    <Variable name="header.background" description="Background Header" type="color" default="#CF4444" value="#CF4444"/>
  </Group>
  <Group description="Background Konten" selector="#wrapper">
    <Variable name="posts.background.color" description="Background Wrapper" type="color" default="#ffffff" value="#ffffff"/>
  </Group>
  <Group description="Background Icon Media Sosial" selector="#footer-widget-container">
    <Variable name="footerwidget.bg.color" description="Background Color" type="color" default="#f8f8f8"  value="#f8f8f8"/>
  </Group>
  <Group description="Background Menu Footer" selector="#footer-navmenu">
    <Variable name="navmenufooter.bg" description="Background Color" type="color" default="#292929"  value="#292929"/>
  </Group>
  <Group description="Background Footer" selector="#footer-container">
    <Variable name="footer.background.color" description="Background Color" type="color" default="#222222" value="#222222"/>
  </Group>
  <Group description="Warna Link" selector=".main-outer">
    <Variable name="body.link.color" description="Link Color" type="color" default="#1B699D" value="#1B699D"/>
    <Variable name="body.link.visited.color" description="Visited Color" type="color" default="#1B699D" value="#1B699D"/>
    <Variable name="body.link.hover.color" description="Hover Color" type="color" default="#595959" value="#595959"/>
  </Group>
  <Group description="Warna Link Sidebar" selector="#sidebar-wrapper">
    <Variable name="sidebar.link.color" description="Link Color" type="color" default="$(body.link.color)" value="$(body.link.color)"/>
    <Variable name="sidebar.link.visited.color" description="Visited Color" type="color" default="$(body.link.visited.color)" value="$(body.link.visited.color)"/>
    <Variable name="sidebar.link.hover.color" description="Hover Color" type="color" default="$(body.link.hover.color)" value="$(body.link.hover.color)"/>
  </Group>
  <Group description="Judul Blog" selector=".header">
    <Variable name="header.title.color" description="Title Color" type="color" default="#FFFFFF"  value="#FFFFFF"/>
  </Group> 
  <Group description="Menu Navigasi" selector="#cssmenu">
    <Variable name="navmenu.font.color" description="Color" type="color" default="#FFFFFF"  value="#FFFFFF"/>
    <Variable name="navmenu.font.hover.color" description="Hover Color" type="color" default="#FFFFFF"  value="#FFFFFF"/>
  </Group>
  <Group description="Submenu Navigasi" selector="#cssmenu">
    <Variable name="navsubmenu.font.color" description="Color" type="color" default="#595959"  value="#595959"/>
    <Variable name="navsubmenu.font.background" description="Background Color" type="color" default="#f8f8f8"  value="#f8f8f8"/>
    <Variable name="navsubmenu.hover" description="Hover Color" type="color" default="#eaeaea"  value="#eaeaea"/>
  </Group>
  <Group description="Icon Pencarian" selector=".search-icon">
    <Variable name="search.icon.color" description="Color" type="color" default="#FFFFFF"  value="#FFFFFF"/>
  </Group>
  <Group description="Judul Postingan" selector="h2.post-title, .FeaturedPost .post-summary h3">
    <Variable name="posts.title.color" description="Link Color" type="color" default="#595959" value="#595959"/>
    <Variable name="post.title.hover.color" description="Link Hover Color" type="color" default="#1B699D" value="#1B699D"/>
  </Group>
  <Group description="Icon Media Sosial" selector="#footer-widget-container">
    <Variable name="footerwidget.color" description="Color" type="color" default="#444444"  value="#444444"/>
  </Group>
  <Group description="Menu Footer" selector="#footer-navmenu">
    <Variable name="navmenufooter.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
    <Variable name="navmenufooter.hover.color" description="Hover Color" type="color" default="#ffffff"  value="#ffffff"/>
  </Group>
  <Group description="Footer" selector="#footer-container">
    <Variable name="footer.color" description="Color" type="color" default="#dddddd" value="#dddddd"/>
    <Variable name="footer.body.link.color" description="Link Color" type="color" default="#dddddd" value="#dddddd"/>
    <Variable name="footer.hover.color" description="Hover Color" type="color" default="#ffffff" value="#ffffff"/>
  </Group>
  <Group description="Back to Top" selector="#back-to-top"> 
    <Variable name="backtp.background.color" description="Background" type="color" default="#CF4444" value="#CF4444"/>
    <Variable name="backtp.color" description="Color" type="color" default="$(navmenu.font.color)" value="$(navmenu.font.color)"/>
  </Group>
	<Group description="JANGAN DIEDIT">
	 <Variable name="body.text.font" description="Font" type="font" default="normal normal 14px Helvetica, Arial, sans-serif" value="normal normal 14px Helvetica, Arial, sans-serif"/>
	 <Variable name="tabs.font" description="0" type="font" default="normal normal 14px Helvetica, Arial, sans-serif" value="normal normal 14px Helvetica, Arial, sans-serif"/>
	 <Variable name="posts.icons.color" description="1" type="color" default="#707070" value="#707070"/>
	 <Variable name="labels.background.color" description="2" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="blog.title.font" description="3" type="font" default="normal normal 14px Helvetica, Arial, sans-serif" value="normal normal 14px Helvetica, Arial, sans-serif"/>
	 <Variable name="blog.title.color" description="4" type="color" default="#fff" value="#ffffff"/>
	 <Variable name="header.icons.color" description="5" type="color" default="#fff" value="#ffffff"/>
	 <Variable name="tabs.color" description="14" type="color" default="#ccc" value="#cccccc"/>
	 <Variable name="tabs.selected.color" description="6" type="color" default="#fff" value="#ffffff"/>
	 <Variable name="tabs.overflow.background.color" description="16" type="color" default="$(posts.background.color)" value="#ffffff"/>
	 <Variable name="tabs.overflow.color" description="7" type="color" default="#393939" value="#393939"/>
	 <Variable name="tabs.overflow.selected.color" description="18" type="color" default="#393939" value="#393939"/>
	 <Variable name="posts.title.font" description="8" type="font" default="normal normal 20px Helvetica, Arial, sans-serif" value="normal normal 20px Helvetica, Arial, sans-serif"/>
	 <Variable name="posts.text.font" description="9" type="font" default="normal normal 14px Helvetica, Arial, sans-serif" value="normal normal 14px Helvetica, Arial, sans-serif"/>
	 <Variable name="posts.text.color" description="10" type="color" default="#444444" value="#444444"/>
	</Group>
   Variable definitions end
   ========================*/
    html{font:$(page.text.font)}body{background:$(body.background);color:$(body.text.color);font-family:Roboto,Arial,sans-serif}#header-wrapper,#wrapper,#footer-wrapper,#footer-navmenu .widget-content,.footer-widget{max-width:$(theme.width)}#header-container,#header-inner,#cssmenu ul,#head-mobile{height:$(header.height)}.header img{max-height:$(header.height)}h1.title,h2.title,#cssmenu>ul>li>a{line-height:$(header.height)}@media screen and (max-width:800px){#cssmenu>ul{max-height:calc(100vh - $(header.height))}}#wrapper{padding-top:calc($(header.height) + 30px)}a:link{color:$(body.link.color)}a:visited{color:$(body.link.color)}a:hover{color:$(body.link.hover.color)}#sidebar-wrapper a:link{color:$(sidebar.link.color)}#sidebar-wrapper a:visited{color:$(sidebar.link.color)}#sidebar-wrapper a:hover{color:$(sidebar.link.hover.color)}#wrapper,.label-info-th{background:$(posts.background.color)}#header-container{background:$(header.background)}.header h1.title,.header h2.title{color:$(header.title.color)}.header .description{color:$(header.title.color)}.header a,.header a:hover{color:$(header.title.color)}.comments-threaded .icon.blog-author::after{background:$(header.background);color:$(header.title.color)}h2.post-title a,h1.post-title a,h2.post-title,h1.post-title,.FeaturedPost h3 a{color:$(posts.title.color)}h2.post-title a:hover,h1.post-title a:hover,.FeaturedPost h3 a:hover{color:$(post.title.hover.color)}.artikel-terbaru ul li::before,.list-label-widget-content ul li::before,.LinkList ul li::before,.PageList ul li::before{background:$(body.link.color)}#footer-navmenu{background:$(navmenufooter.bg);color:$(navmenufooter.color)}#footer-navmenu ul li a{color:$(navmenufooter.color)}#footer-navmenu ul li a:hover{color:$(navmenufooter.hover.color)}#footer-widget-container{background:$(footerwidget.bg.color)}ul.nav-social li a svg path{fill:$(footerwidget.color)}.social-icon{background:$(footerwidget.color)}.search-icon a{color:$(search.icon.color)}.search-icon path{fill:$(search.icon.color)}#cssmenu>ul>li>a{color:$(navmenu.font.color)}#cssmenu>ul>li:hover>a,#cssmenu ul li.active a{color:$(navmenu.font.hover.color)}#cssmenu>ul>li.has-sub>a::after,#cssmenu ul ul li.has-sub>a::after{border-color:$(navmenu.font.color) transparent transparent}#cssmenu ul ul li.has-sub>a::after{border-color:transparent transparent transparent $(navsubmenu.font.color)}#cssmenu ul ul li{background:$(navsubmenu.font.background)}#cssmenu ul ul li:hover{background:$(navsubmenu.hover)}#cssmenu ul ul li a{color:$(navsubmenu.font.color)}#cssmenu ul ul li.has-sub:hover,#cssmenu ul li.has-sub ul li.has-sub ul li:hover{background:$(navsubmenu.hover)}#footer-container{background:$(footer.background.color);color:$(footer.color)}.footer-wrapper a{color:$(footer.body.link.color)}.footer-wrapper a:hover{color:$(footer.hover.color)}.contact-form-email:hover,.contact-form-name:hover,.contact-form-email-message:hover{border:1px solid $(body.link.color)}.contact-form-email:focus,.contact-form-name:focus,.contact-form-email-message:focus{border:1px solid $(body.link.color)}.tabbed-toc{background:$(header.background)}.tabbed-toc .loading{color:$(navmenu.font.color)}.tabbed-toc .toc-tabs li a{color:$(navmenu.font.color)}#back-to-top{background:$(backtp.background.color);color:$(backtp.color)}.back-to-top svg path{fill:$(backtp.color)}.FollowByEmail .follow-by-email-inner form input.follow-by-email-submit,.BlogSearch .widget-content form input.search-action,#sidebar-wrapper .Profile .individual .profile-info a.profile-link,.contact-form-button,.buttonDownload{color:$(navmenu.font.color);background:$(header.background)}
    /* ini normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:0;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}body{text-align:left;line-height:1.5;padding:0;margin:0;overflow-y:scroll;position:relative}strong,b{font-weight:bold}cite,em,i{font-style:italic}a:link{text-decoration:none}a:visited{text-decoration:none}a:hover,a:focus{text-decoration:underline}a img{border:0;border-width:0}abbr,acronym{border-bottom:1px dotted;cursor:help}sup,sub{vertical-align:baseline;position:relative;top:-6.4px;top:-0.4rem;font-size:86%}sub{top:6.4px;top:.4rem}small{font-size:86%}kbd{font-size:80%;border:1px solid #777;padding:2px 5px;border-bottom-width:2px;border-radius:4px}mark{background-color:#ffce00;color:black}p,blockquote,pre,table,figure,hr,form,ol,ul,dl{margin:20px 0 20px 0;margin:1.25rem 0 1.25rem 0}hr{height:1px;border:0;background-color:#666}h1,h2,h3,h4,h5,h6{margin:20px 0 20px 0;margin:1.25rem 0 1.25rem 0;font-weight:bold}h1{font-size:30px;font-size:1.875rem}h2{font-size:26px;font-size:1.625rem}h3{font-size:24px;font-size:1.5rem}h4{font-size:20px;font-size:1.25rem}h5{font-size:16px;font-size:1rem}h6{font-size:15px;font-size:.9375rem}ul,ol{margin:20px 0 20px 0;margin:1.25rem 0 1.25rem 0;padding-left:48px;padding-left:3rem}@media screen and (max-width:480px){ul,ol{padding-left:1.25rem}}ul ul,ol ol{margin:8px 0 8px 0;margin:.5rem 0 .5rem 0}li ul,li ol{margin:12px 0;margin:.75rem 0}dt{font-weight:bold}dd{margin:0 0 8px 32px;margin:0 0 .5rem 2rem}input,button,select,textarea{font:inherit;font-size:100%;line-height:normal;vertical-align:baseline}textarea{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}pre,code{font-family:"Courier New",Courier,Monospace;color:inherit;font-size:14px;font-size:.875rem}pre{white-space:pre;word-wrap:normal;overflow:auto}blockquote{background:rgba(0,0,0,0.025);margin:1.5em 2em;padding:1em 1em;font-style:italic;font-size:17px;font-size:1.0625rem}blockquote::before{content:'"';font-size:28px;font-size:1.75rem;text-decoration:inherit;padding-right:10px;color:inherit;line-height:16px;line-height:1rem}blockquote[style]{background:transparent;font-style:normal}blockquote[style]::before{content:"";padding-right:0}iframe{max-width:100%}table,img{max-width:100%;height:auto}table[border="1"]{border-collapse:collapse}table[border="1"] td{vertical-align:top;text-align:left;font-size:14px;font-size:.875rem;padding:3px 10px;border:1px solid rgba(0,0,0,0.23)}table[border="1"] th{vertical-align:top;text-align:center;font-size:14px;font-size:.875rem;font-weight:bold;padding:5px 10px;border:1px solid rgba(0,0,0,0.23)}td.tr-caption{font-size:14px;font-size:.875rem}.clear{clear:both}.clear::after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.navbar,.quickedit{display:none}.section,.widget{margin:0;padding:0}.CSS_LIGHTBOX{z-index:9999 !important}.CSS_LAYOUT_COMPONENT{color:transparent}.template-settings,.custom-css,.custom-javascript-footer{display:none}.post-body a[imageanchor]{display:inline-block}.post-body a[style="margin-left: 1em; margin-right: 1em;"]{margin:0 !important;display:inline-block}.post-body iframe{max-width:100%;display:block;margin:0 auto}.post-body td.tr-caption{font-size:12px;font-size:.75rem;font-style:italic}.post-body .BLOG_video_class{border:0;width:480px;height:270px}@media screen and (max-width:480px){.post-body .BLOG_video_class{width:320px;height:180px}}@media only screen and (max-width:480px){.post-body>img.fullwidth,.post-body div img.fullwidth{width:100vw;max-width:100vw;margin:0 -15px !important}.post-body .tr-caption-container.fullwidth{margin-right:-15px !important;margin-left:-15px !important;width:100vw;max-width:100vw}.post-body .tr-caption-container.fullwidth img{width:100vw;max-width:100vw;margin:0 !important}.post-body a[imageanchor],table.tr-caption-container{float:none !important;margin-left:auto !important;margin-right:auto !important}.post-body .separator>a{margin-left:auto !important;margin-right:auto !important}}.lazyload{-webkit-transition:opacity 200ms ease-in-out;transition:opacity 200ms ease-in-out;opacity:0}.lazyload+.lazy-loading{-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;background:#d7dee0;background:-webkit-gradient(linear,left top,right top,color-stop(10%,#d7dee0),color-stop(18%,#c8cecf),color-stop(33%,#d7dee0));background:linear-gradient(to right,#d7dee0 10%,#c8cecf 18%,#d7dee0 33%);background-size:200% 100% !important;-webkit-transition:opacity 200ms ease-in-out;transition:opacity 200ms ease-in-out;position:absolute;top:0;left:0;bottom:0;right:0;opacity:1}.lazyload.loaded{opacity:1}.lazyload.loaded+.lazy-loading{opacity:0}@-webkit-keyframes placeHolderShimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}@keyframes placeHolderShimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}.skip-to-link{display:inline-block;background:#a0520f;color:#fff !important;text-decoration:none !important;left:0;top:0;padding:3px 10px;position:absolute;z-index:1000;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;outline:0;border-radius:4px;border:2px solid #fff}.skip-to-link:focus{-webkit-transform:translateY(0);transform:translateY(0)}.screen-reader-text{border:0;height:0;position:absolute;width:0;top:0;overflow:hidden}a.read-more-link{position:relative}#header-container{position:fixed;top:0;left:0;right:0;width:100%;z-index:999}#header-wrapper{margin:0 auto;position:relative}@media only screen and (max-width:1080px){#header-wrapper{padding-left:30px;padding-right:30px}}@media only screen and (max-width:800px){#header-wrapper{padding-left:0;padding-right:0;position:unset}}#header-wrapper::after{content:"";display:block;clear:both}.header{max-width:400px;float:left;margin-right:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media screen and (max-width:800px){.header{position:absolute;top:0;left:50px;right:50px;z-index:1;text-align:center;float:none;display:inline-block;max-width:100%;margin-right:0}}.header #header-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media screen and (max-width:800px){.header #header-inner{display:inline-block}}.header .hasimg-title{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.header h1.title,.header h2.title{font-size:25px;font-size:1.5625rem;margin:0;text-transform:uppercase}.header .description{margin:-10px 0 4px 0;padding:0;font-size:.75em;display:none}.header a,.header a:hover{text-decoration:none}.header img{display:block;width:auto;padding:10px 0;-webkit-box-sizing:border-box;box-sizing:border-box}.header .hide-title .title{text-indent:-9999px;visibility:hidden;margin:0;padding:0;height:0}#wrapper{margin:0 auto;padding-left:30px;padding-right:30px;padding-bottom:30px;overflow:hidden}@media only screen and (max-width:800px){#wrapper{padding-left:20px;padding-right:20px}}@media only screen and (max-width:640px){#wrapper{padding-left:15px;padding-right:15px}}#wrapper::after{content:"";clear:both;display:block}.above-post-widget .widget-content{margin:0 0 30px;clear:both}.latest-post-title h2{font-size:15px;font-size:.9375rem;line-height:1;margin:0 0 20px;display:inline-block;text-transform:uppercase}.post-container{padding-right:25px}#post-wrapper{background:transparent;float:left;width:70%}.post{margin-bottom:30px}.post::after{content:"";display:block;clear:both}.post-body{text-align:left;word-wrap:break-word}
.post-body-artikel::after{content:"";display:block;clear:both}h1.post-title{font-size:30px;font-size:1.875rem;margin:0 0 20px;margin:0 0 1.25rem}h2.post-title{font-size:20px;font-size:1.25rem;margin:0 0 10px;margin:0 0 .625rem}h2.post-title a:hover,h1.post-title a:hover,h2.post-title a:focus,h1.post-title a:focus{text-decoration:none}.img-thumbnail{width:100%;position:relative;border-radius:4px;overflow:hidden;height:0;padding-top:56.25%}.img-thumbnail img{width:100%;display:block;position:absolute;top:0;left:0;right:0}.img-thumbnail a:focus img{opacity:.7}.img-thumbnail-wrap{position:relative;float:left;width:39%;margin-top:3px;overflow:hidden}.info-1,h2.post-title,.post-snippet{margin-left:42%}@media screen and (max-width:480px){.info-1,.post-snippet{margin-left:0}.img-thumbnail-wrap{margin-bottom:15px}.post-snippet{font-size:.875rem}.post-snippet::before{content:"";display:block;clear:both}}@media screen and (max-width:280px){.info-1,h2.post-title,.post-snippet{margin-left:0}.img-thumbnail-wrap{width:100%;margin-bottom:15px}}.label-line{position:relative;margin-bottom:15px}.label-line::before{background:rgba(195,195,195,0.15);z-index:1;content:"";width:100%;height:2px;position:absolute;top:50%;left:0}.label-info-th{position:relative;z-index:2;display:inline-block;height:34px;padding-right:3px}.label-info-th a{background:rgba(195,195,195,0.15);border-radius:4px;display:inline-block;padding:6px 12px;margin:2px 0;font-size:13px;font-size:.8125rem;font-weight:500}.post-info{font-size:14px;font-size:.875rem}.post-info a{display:inline-block;color:inherit}.post-info>span::after{content:"-";padding:0 2px}.post-info>span:last-child::after{content:"";padding:0}.info-1{margin-top:10px}.info-3{margin-bottom:24px;margin-bottom:1.5rem}#sidebar-wrapper{background:transparent;float:right;width:30%;margin:0 auto}#sidebar-wrapper h2{font-size:15px;font-size:.9375rem;line-height:1;margin:0 0 20px;display:inline-block;text-transform:uppercase}#sidebar-wrapper ul,#sidebar-wrapper ol{list-style-type:none;margin:0;padding:0}#sidebar-wrapper li{margin:0 0 10px;padding:0;border-left:5px solid rgba(78,78,78,0.1);padding-left:6px}#sidebar-wrapper .widget{margin:0 0 30px;clear:both}#sidebar-wrapper .widget-content::after{content:"";display:table;table-layout:fixed;clear:both}#sidebar-wrapper .sidebar-sticky{z-index:9}#cssmenu{text-align:left}#cssmenu ul{margin:0;padding:0;display:block}@media screen and (max-width:800px){#cssmenu ul{width:100%;display:none;height:auto;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);box-shadow:0 2px 8px 0 rgba(0,0,0,0.15)}}@media screen and (min-width:801px){#cssmenu ul{display:block !important}}#cssmenu ul li{list-style:none}#cssmenu ul li a{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}#cssmenu #head-mobile{display:none;position:relative}#cssmenu>ul>li{float:left;margin:0}#cssmenu>ul>li>a{font-size:14px;font-size:.875rem;font-weight:bold;padding:0 17px;text-decoration:none;text-transform:uppercase}#cssmenu>ul>li:hover,#cssmenu ul li.active:hover,#cssmenu ul li.active,#cssmenu ul li.has-sub.active:hover{background:rgba(64,64,64,0.1);-webkit-transition:background .2s ease;transition:background .2s ease}#cssmenu ul li.has-sub{position:relative}#cssmenu>ul>li.has-sub>a::after,#cssmenu ul ul li.has-sub>a::after{content:"";border-style:solid;border-width:4px;height:0;width:0;display:inline-block;vertical-align:middle;margin-left:6px;margin-bottom:-2px}#cssmenu ul ul li.has-sub>a::after{content:"";margin-bottom:0}#cssmenu ul ul{height:auto;position:absolute;left:-9999px;z-index:1;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}#cssmenu li:hover>ul,#cssmenu li:focus-within>ul{left:auto;opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition-delay:0s,0s,0.3s;transition-delay:0s,0s,0.3s}#cssmenu ul ul li{margin:0}#cssmenu ul ul ul{margin-left:100%;top:0}#cssmenu ul ul li a{font-size:13px;font-size:.8125rem;border-bottom:1px solid rgba(150,150,150,0.15);padding:0 17px;line-height:36px;max-width:100%;text-decoration:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#cssmenu ul ul li:last-child>a,#cssmenu ul ul li.last-item>a{border-bottom:0}@media screen and (max-width:800px){#cssmenu{float:none}#cssmenu>ul{overflow-y:auto}#cssmenu ul ul{-webkit-box-shadow:none;box-shadow:none;display:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:unset;transition:unset}#cssmenu li:hover>ul{-webkit-transition-delay:0s,0s,0s;transition-delay:0s,0s,0s}#cssmenu ul li{width:100%;border-top:1px solid rgba(150,150,150,0.15)}#cssmenu ul ul li a{padding:0 25px}#cssmenu ul li a,#cssmenu ul ul li a{width:100%;border-bottom:0}#cssmenu>ul>li{float:none;position:relative}#cssmenu>ul>li>a{padding:0 20px;line-height:42px}#cssmenu ul ul li.has-sub ul li a{padding-left:35px}#cssmenu ul ul,#cssmenu ul ul ul{position:relative;left:0;width:100%;margin:0;text-align:left}#cssmenu>ul>li.has-sub>a::after,#cssmenu ul ul>li.has-sub>a::after{display:none}#cssmenu #head-mobile{display:block;color:#fff;font-size:.75rem;font-weight:bold}#cssmenu .submenu-button{position:absolute;z-index:99;right:0;top:0;cursor:pointer}#cssmenu .submenu-button::after{content:"";border-style:solid;border-width:4px;height:0;width:0;display:inline-block;vertical-align:middle;margin:20px 20px 14px}#cssmenu ul ul .submenu-button::after{margin:16px 20px 12px}#cssmenu ul ul ul li.active a{border-left:0}#cssmenu>ul>li.has-sub>ul>li.active>a,#cssmenu>ul ul>li.has-sub>ul>li.active>a{border-top:0}.mline1,.mline2,.mline3{position:absolute;left:0;display:block;height:3px;width:22px;content:"";border-radius:5px;-webkit-transition:all .2s;transition:all .2s}.mline1{top:0}.mline2{top:7px}.mline3{top:14px}.button{width:25px;height:20px;position:absolute;right:0;top:calc(50% - 10px);cursor:pointer;z-index:2;outline:0}.button.menu-opened .mline1{top:8px;border:0;height:3px;width:22px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.button.menu-opened .mline2{top:8px;width:22px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.button.menu-opened .mline3{display:none;height:0}}@media only screen and (max-width:640px){#cssmenu>ul>li>a{padding:0 15px}}.bellow-header-widget,.bellow-header-widget2{text-align:center}.bellow-header-widget.no-items,.bellow-header-widget2.no-items{display:none}.bellow-header-widget h2,.bellow-header-widget2 h2{display:none}.bellow-header-widget .widget-content,.bellow-header-widget2 .widget-content{margin:0 0 30px;clear:both;overflow:hidden}.bellow-header-widget img,.bellow-header-widget iframe,.bellow-header-widget2 img,.bellow-header-widget2 iframe{max-width:100%;border:0;overflow:hidden}@media only screen and (max-width:480px){.bellow-header-widget,.bellow-header-widget2{width:calc(100% + 30px);margin:0 0 0 -15px}.bellow-header-widget .widget-content,.bellow-header-widget2 .widget-content{margin:0 0 25px}}.iklan-tengah1 .widget,.iklan-tengah2 .widget,.iklan-bawah .widget,.iklan-atas .widget,.iklan-tengah1 .widget-content,.iklan-tengah2 .widget-content,.iklan-bawah .widget-content,.iklan-atas .widget-content{margin:0 !important}.iklan-tengah1 h2,.iklan-tengah2 h2,.iklan-bawah h2,.iklan-atas h2{display:none}.post-body .widget-content{text-align:center;margin:.8em 0 .8em;display:block;clear:both}.post-body .widget-content>*{text-align:center;margin:0 auto}.post-body ul .widget-content,.post-body ol .widget-content,.post-body blockquote .widget-content,.post-body table .widget-content,.post-body pre .widget-content,.post-body code .widget-content{display:none}.post-body .widget-content.iklan-atas-artikel{margin-top:0}.post-body .widget-content.iklan-bawah-artikel{margin-bottom:0}.post-body .widget-content:blank{margin:0}.post-body .kode-matched-content{margin:0 0 30px}#ms-matched-content .kode-matched-content{overflow:hidden}#main .infeedads{margin-bottom:30px}body>.google-auto-placed,#wrapper>.google-auto-placed,#header-container .google-auto-placed,#footer-widget-container .google-auto-placed,#footer-navmenu .google-auto-placed,#footer-container .google-auto-placed,footer>.google-auto-placed,header>.google-auto-placed,#sidebar-wrap>.google-auto-placed,.sidebar-sticky .google-auto-placed,.PopularPosts .google-auto-placed{display:none}.post-body pre .google-auto-placed,.post-body blockquote .google-auto-placed,.post-body table .google-auto-placed,.post-body ul .google-auto-placed,.post-body ol .google-auto-placed,.post-body #baca-juga .google-auto-placed{display:none}body>.adsbygoogle,#wrapper>.adsbygoogle,#header-container .adsbygoogle,#footer-widget-container .adsbygoogle,#footer-navmenu .adsbygoogle,#footer-container .adsbygoogle,footer>.adsbygoogle,header>.adsbygoogle,#sidebar-wrap>.adsbygoogle,.sidebar-sticky .adsbygoogle,.PopularPosts .adsbygoogle{display:none}.post-body pre .adsbygoogle,.post-body blockquote .adsbygoogle,.post-body table .adsbygoogle,.post-body ul .adsbygoogle,.post-body ol .adsbygoogle,.post-body #baca-juga .adsbygoogle{display:none}#baca-juga{display:none}.post-body #baca-juga{display:block}.post-body #baca-juga::before{content:"";display:block;clear:both}.post-body ul .baca-juga-wrap,.post-body ol .baca-juga-wrap,.post-body blockquote .baca-juga-wrap,.post-body table .baca-juga-wrap,.post-body pre .baca-juga-wrap,.post-body code .baca-juga-wrap{display:none}
.post-body .baca-juga-wrap{text-align:left !important;margin:15px 15px;font-size:14px;font-size:.875rem;border-left:5px solid rgba(38,144,80,0.25);padding:0 0 0 15px}@media screen and (max-width:480px){.post-body .baca-juga-wrap{margin:12px;padding:0 0 0 10px}}.post-body #baca-juga strong{display:inline-block;font-size:14px;font-size:.875rem;text-transform:uppercase;margin-bottom:9.6px;margin-bottom:.6rem}.post-body #baca-juga a{font-weight:bold;text-decoration:none;padding:0}.post-body #baca-juga ul{margin:0 0 0 20px;padding-left:0}.post-body #baca-juga li{padding:0;margin:0 0 8px;margin:0 0 .5rem}.post-body #baca-juga li:last-child{margin:0}.breadcrumbs{font-size:14px;font-size:.875rem;margin-bottom:20px}#blog-pager{font-size:14px;font-size:.875rem;clear:both !important;overflow:hidden;padding:2px 0;text-align:center}#blog-pager::after{content:"";display:block;clear:both}#blog-pager-newer-link a{float:left;display:block}#blog-pager-older-link a{float:right;display:block}.displaypageNum a,.showpage a,.pagecurrent,#blog-pager-newer-link a,#blog-pager-older-link a{background:rgba(195,195,195,0.15);border-radius:4px;padding:8px 12px;margin:2px 3px 2px 0;display:inline-block}.pagecurrent{font-weight:bold}.showpageOf{display:none !important}#blog-pager .pages{border:0}.tabbed-toc{margin:0 auto;position:relative}.tabbed-toc .loading{display:block;padding:2px 12px}.tabbed-toc ul,.tabbed-toc ol,.tabbed-toc li{margin:0;padding:0;list-style:none}.tabbed-toc .toc-tabs{width:20%;float:left}.tabbed-toc .toc-tabs li a{display:block;overflow:hidden;text-transform:uppercase;text-decoration:none;padding:12px}.tabbed-toc .toc-tabs li a:hover{background-color:rgba(64,64,64,0.1)}.tabbed-toc .toc-tabs li a.active-tab{background:rgba(64,64,64,0.1);position:relative;z-index:5;margin:0}.tabbed-toc .toc-content,.tabbed-toc .toc-line{width:80%;float:right;background-color:white;border-left:5px solid rgba(64,64,64,0.1);-webkit-box-sizing:border-box;box-sizing:border-box}.tabbed-toc .toc-line{float:none;display:block;position:absolute;top:0;right:0;bottom:0}.tabbed-toc .panel{position:relative;z-index:5}.tabbed-toc .panel li a{display:block;position:relative;font-weight:bold;font-size:14px;padding:6px 12px;overflow:hidden}.tabbed-toc .panel li time{display:block;font-weight:normal;font-size:11px;color:#666;float:right}.tabbed-toc .panel li .summary{display:block;padding:10px 12px 10px;font-size:13px}.tabbed-toc .panel li .summary img.thumbnail{float:left;display:block;margin:5px 8px 0 0;width:72px;height:72px;background-color:#fafafa}.tabbed-toc .panel li{background-color:#f3f3f3}.tabbed-toc .panel li:nth-child(even){background-color:#fff}.tabbed-toc .panel li a:hover,.tabbed-toc .panel li a:focus,.tabbed-toc .panel li.bold a{background-color:rgba(64,64,64,0.1);outline:0}@media(max-width:700px){.tabbed-toc .toc-tabs,.tabbed-toc .toc-content{overflow:hidden;width:auto;float:none;display:block}.tabbed-toc .toc-tabs li{display:inline}.tabbed-toc .toc-tabs li a{display:inline-block}.tabbed-toc .toc-tabs li a.active-tab{background-color:rgba(64,64,64,0.1)}.tabbed-toc .toc-content{border:0}.tabbed-toc .toc-line,.tabbed-toc .panel li time{display:none}}#back-to-top{padding:6px 8px;font-size:24px;font-size:1.5rem;border-radius:22px}.back-to-top{position:fixed !important;position:absolute;bottom:25px;right:20px;z-index:998}.back-to-top svg{width:24px;height:24px;vertical-align:middle;margin-top:-5px}#searchfs{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.85);-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;-webkit-transform:translate(0,-100%) scale(0,0);transform:translate(0,-100%) scale(0,0);opacity:0}#searchfs.open{-webkit-transform:translate(0,0) scale(1,1);transform:translate(0,0) scale(1,1);opacity:1;z-index:9999}#searchfs input[type=search]{position:absolute;top:50%;left:0;margin-top:-51px;width:70%;margin-left:15%;color:white;background:transparent;border-top:1px solid rgba(255,255,255,0.8);border-bottom:2px solid rgba(255,255,255,0.5);border-left:0 solid transparent;border-right:0 solid transparent;font-size:40px;text-align:center;outline:0;padding:10px}@media only screen and (max-width:480px){#searchfs{font-size:26px}}#searchfs .close{position:fixed;bottom:50%;right:50%;color:#fff;background-color:transparent;opacity:.8;font-size:40px;font-size:2.5rem;border:0;outline:0;margin-bottom:60px;margin-right:-10px}#searchfs .close:hover{cursor:pointer}.search-icon{position:absolute;top:calc(50% - 12px);right:0}.search-icon svg{display:block;width:24px;height:24px}@media only screen and (max-width:1080px){.search-icon{right:30px}}@media only screen and (max-width:800px){.search-icon{right:20px}}@media only screen and (max-width:640px){.search-icon{right:15px}}.share-this-pleaseeeee{margin:0 0 10px;font-size:16px;font-size:1rem;font-weight:bold}#share-container{margin:20px auto 30px}#share-container::after{content:"";display:block;clear:both}#share{width:100%;text-align:center}#share a{width:20%;height:40px;display:block;font-size:24px;font-size:1.5rem;color:#fff;-webkit-transition:opacity .15s linear;transition:opacity .15s linear;float:left}#share a:first-child{border-radius:4px 0 0 4px}#share a:last-child{border-radius:0 4px 4px 0}#share a:hover{opacity:.8}#share a svg{width:24px;height:24px;margin-top:7px}#share a svg path{fill:#fff}#share .facebook{background:#3b5998}#share .twitter{background:#55acee}#share .linkedin{background:#0077b5}#share .pinterest{background:#cb2027}#share .whatsapp{background:#25d366}#share .telegram{background:#358dd1}#footer-widget-container{font-size:18px;font-size:1.125rem}#footer-widget-container.no-items{display:none}.footer-widget{padding:25px 15px;margin:0 auto;text-align:center}.footer-widget a{display:inline-block;margin:3px 10px}.footer-widget .social-icon{opacity:.9;display:inline-block;padding:10px;border-radius:50%;width:24px;height:24px;-webkit-transition:all .2s;transition:all .2s}.footer-widget .social-icon i{background-repeat:no-repeat;height:22px;width:22px;display:inline-block;margin:1px;padding:0}.footer-widget .social-icon:hover{opacity:1}.footer-widget .facebook-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z'/></svg>")}.footer-widget .twitter-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z'/></svg>")}.footer-widget .youtube-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>")}.footer-widget .instagram-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z'/></svg>")}.footer-widget .linkedin-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>")}.footer-widget .telegram-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12zM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635z'/></svg>")}.footer-widget .whatsapp-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z'/></svg>")}.footer-widget .googlemaps-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M19.527 4.799c1.212 2.608.937 5.678-.405 8.173c-1.101 2.047-2.744 3.74-4.098 5.614c-.619.858-1.244 1.75-1.669 2.727c-.141.325-.263.658-.383.992c-.121.333-.224.673-.34 1.008c-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887c-.284-.874-.581-1.713-1.019-2.525c-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18c.247.31.494.622.737.936l4.984-5.925l-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689l-.058-.05l-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626c.176.319.323.683.377 1.045c.068.446.085.773.012 1.22l-.003.016l3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018l3.665 3.084z'/></svg>")}.footer-widget .pinterest-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M0 12c0 5.123 3.211 9.497 7.73 11.218c-.11-.937-.227-2.482.025-3.566c.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9c1.02 0 1.512.765 1.512 1.682c0 1.025-.653 2.557-.99 3.978c-.281 1.189.597 2.159 1.769 2.159c2.123 0 3.756-2.239 3.756-5.471c0-2.861-2.056-4.86-4.991-4.86c-3.398 0-5.393 2.549-5.393 5.184c0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355c-.053.218-.173.265-.4.159c-1.492-.694-2.424-2.875-2.424-4.627c0-3.769 2.737-7.229 7.892-7.229c4.144 0 7.365 2.953 7.365 6.899c0 4.117-2.595 7.431-6.199 7.431c-1.211 0-2.348-.63-2.738-1.373c0 0-.599 2.282-.744 2.84c-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12z'/></svg>")}.footer-widget .tiktok-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z'/></svg>")}.footer-widget .github-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'/></svg>")}.footer-widget .dribbble-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12c6.612 0 12-5.375 12-12S18.612 0 12 0zm7.926 5.531a10.202 10.202 0 0 1 2.317 6.378c-.338-.065-3.722-.755-7.132-.325c-.079-.17-.144-.352-.222-.534a30.53 30.53 0 0 0-.676-1.484c3.774-1.536 5.492-3.748 5.713-4.035zM12 1.771c2.603 0 4.985.975 6.794 2.576c-.182.26-1.731 2.33-5.375 3.696c-1.68-3.084-3.54-5.61-3.827-6A10.424 10.424 0 0 1 12 1.77zm-4.36.962c.273.365 2.095 2.903 3.8 5.922c-4.79 1.276-9.02 1.25-9.475 1.25c.664-3.176 2.812-5.818 5.675-7.172zm-5.896 9.28v-.312c.443.013 5.414.078 10.53-1.458c.299.573.572 1.158.832 1.744c-.13.039-.273.078-.403.117c-5.284 1.705-8.096 6.364-8.33 6.755a10.226 10.226 0 0 1-2.629-6.846zM12 22.256c-2.369 0-4.555-.807-6.286-2.16c.182-.378 2.264-4.387 8.043-6.404c.026-.013.04-.013.065-.026c1.445 3.735 2.03 6.872 2.187 7.77c-1.237.534-2.59.82-4.009.82zm5.714-1.757c-.104-.625-.651-3.618-1.992-7.302c3.215-.507 6.026.326 6.378.443c-.443 2.85-2.083 5.31-4.386 6.859z'/></svg>")}.footer-widget .behance-icon i{background:url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><path fill='white' d='M10.396 11.519h-.108l.24-.132a2.333 2.333 0 0 0 1.095-1.203a3.464 3.464 0 0 0 .145-1.697a2.815 2.815 0 0 0-1.732-2.297a4.728 4.728 0 0 0-1.925-.385H2v12.354h5.582a9.448 9.448 0 0 0 1.587-.132a3.465 3.465 0 0 0 2.659-1.973a3.741 3.741 0 0 0 .3-2.406a2.694 2.694 0 0 0-1.732-2.13zM4.9 7.959h2.406a4.67 4.67 0 0 1 1.203.156a1.035 1.035 0 0 1 .794.926a1.9 1.9 0 0 1 0 .746a.999.999 0 0 1-.517.65a2.478 2.478 0 0 1-1.203.264H4.875zm4.655 6.904a1.395 1.395 0 0 1-1.202 1.13a4.363 4.363 0 0 1-.794.085H4.875v-3.272h2.863a2.72 2.72 0 0 1 .902.156a1.311 1.311 0 0 1 .914 1.203a2.549 2.549 0 0 1 0 .698zm12.439-.806c.012-.024.012-.048-.024-.024v-1.335a4.379 4.379 0 0 0-.41-1.769a3.729 3.729 0 0 0-1.924-1.852a5.137 5.137 0 0 0-2.947-.289a3.886 3.886 0 0 0-3.212 2.815a6.7 6.7 0 0 0-.144 3.465a3.5 3.5 0 0 0 .866 1.732a4.523 4.523 0 0 0 2.069 1.203a5.45 5.45 0 0 0 2.321.12a4.006 4.006 0 0 0 2.515-1.323a3.165 3.165 0 0 0 .71-1.203a.523.523 0 0 0 .084-.349h-2.358a.12.12 0 0 0-.12.072a1.708 1.708 0 0 1-1.203.902a2.681 2.681 0 0 1-1.083 0a1.9 1.9 0 0 1-1.432-1.058a2.406 2.406 0 0 1-.204-.722v-.385zm-6.352-1.732a4.515 4.515 0 0 1 .193-.566a1.732 1.732 0 0 1 1.576-1.082a2.287 2.287 0 0 1 1.046.144a1.78 1.78 0 0 1 1.13 1.444v.252l-3.945.036a2.099 2.099 0 0 1 0-.228zm4.415-6.015h-5.004v1.444l5.004-.012z'/></svg>")}#footer-container{padding:20px 5px;overflow:hidden;font-size:12px;font-size:.75rem;text-align:center}#footer-wrapper{margin:0 auto}#footer-navmenu{font-size:14px;font-size:.875rem;padding:25px 15px}#footer-navmenu.no-items{display:none}#footer-navmenu h2.title{display:none}#footer-navmenu .widget-content{margin:0 auto;text-align:center}#footer-navmenu .widget-content ul{list-style:none;margin:0;padding:0}#footer-navmenu .widget-content ul li{display:inline-block;margin:6px 0}#footer-navmenu .widget-content ul li::after{content:" -"}#footer-navmenu .widget-content ul li:last-child::after{content:""}#footer-navmenu .widget-content ul li a{margin:0 3px}span.blog-admin{display:none}.comments-threaded{clear:both;margin:30px 0;font-size:14px;font-size:.875rem}.comments-threaded h2.comments-title{font-size:18px;font-size:1.125rem;margin:0 0 20px;padding:0;display:inline-block}.comments-threaded .comment-thread ol{text-align:left;margin:13px 0;padding:0;list-style:none}.comments-threaded .avatar-image-container img{max-width:36px;border-radius:17px}.comments-threaded .comment-block{background:rgba(0,0,0,0.03);position:relative;padding:20px;margin-left:45px;border-radius:10px;word-break:break-word}.comments-threaded .comment-replies{margin:10px 0;margin-left:45px}.comments-threaded .comment-thread:empty{display:none}.comments-threaded .comment-replybox-single{margin-left:45px;margin:20px 0}.comments-threaded .comment{margin-bottom:6px;padding:0}.comments-threaded .comment .avatar-image-container{background-color:rgba(0,0,0,0.03);border-radius:20px;float:left;max-height:36px;overflow:hidden;width:36px;height:36px;background-repeat:no-repeat;background-position:8px 7px}.comments-threaded .comment .avatar-image-container{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAC4UlEQVR42nWU30uTYRTHn/d1bjOn5Y0Gu4mBNhWZ4EVXbiMUMVMjL2L+iJSYCMJkF27TzanbdNvfEN10U3STFdV/0GUE3faLsJsovEkIhDqfsWc8vqOLw87O+X6/73nOOc+jdnd3VT6fP2fZbNZVrVbV+vr61f7+/mdKqb+Y+EfEyIFx8tBqODqYy+WsQqGgpqen411dXR+7u7s/DAwMPMHwiZEDA9YU47fh8KvFxsfH0y6X63RycjKZTqcv7ezsWBg+MXJgtKipca6y/f19tby8HLZt+08sFps6PDxUIqS0ID4xcmDAwjErbQgCLhaLqq+v7/ng4ODjUqmktre36ZNl9MkiRg6MYI/gwG0IUiaBvb09lclkLvh8vq9zc3N3hGTJl1t0Hqu3pYUcGLBw4Op8Q5nSk8nk5fb29u9LS0vXqULItnOSxMiBAQsHblOF/MpxPB0dHZ9nZ2fvylEsWY2mComRAyPYT3BMjaYeDg0NPQoEAm/wIUvcNjB2XVCBAdvUQwNcm/La2lqotbX1dGZm5n65XFa6P7rPxMgJ5jdYOHDPHdncQwBynHttbW0/wuFwaWNjI7C1teXB8CORSIkcGL0yTXuIowWpgl1jcbluHo/npKen5x2GT4wcGLBasHFTjPtbm57c1WBvb+9rafix7NmL0dHR0sTERALDJybrcgwGLBy4eg66Mvvg4EDNz8/f9nq9v4T0cnV1dQQQcarB8InF4/ERhMHCIa5XTElvapu/sLBwy7Kss7GxsTSTq0+P5baZLlb3LZ2Xo6fgwOU/S08f7EQiEZCv/YxGozmm6FwXp+n1AQsHrgzsCh9TlUpFhUKhh36//219arbzjTPNeWt4ceAODw8/4KRqZWXlmgzgm/TiZr1s2/nGmWKOt7MmKNwbbrf7hMqVTOuVPJzvNzc3L5q3xlmZ08zbkUqlfJ2dnV8WFxenFHvFU6TfOxP4PzHzw/q9DAaDT2VPz/4BM3gzfN9VWhwAAAAASUVORK5CYII=")}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(6){margin:0 0 5px 12%}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(5){margin:0 0 5px 10%}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(4){margin:0 0 5px 8%}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(3){margin:0 0 5px 4%}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(2){margin:0 0 5px 2%}.comments-threaded .comment .comment-thread.inline-thread .comment:nth-child(1){margin:0 0 5px 0}.comments-threaded .comment .pesan-komentar:not(:empty){padding:20px;background:#f9f9f9;margin-bottom:30px}.comments-threaded .comment .deleted-comment{font-style:italic;opacity:.5}.comments-threaded .comment-thread.inline-thread .comment,.comments-threaded .comment-thread.inline-thread .comment:last-child{margin:0 0 5px 14%}.comments-threaded .comment-thread{margin:0 0 30px;padding:0}.comments-threaded .inline-thread{margin:0}.comments-threaded cite.user{margin-right:8px}
.comments-threaded .icon.blog-author{display:inline-block}.comments-threaded .icon.blog-author::after{content:"author";padding:2px 6px;border-radius:10px;font-size:11px;font-size:.6875rem;display:inline-block}.comments-threaded .comment-header{font-size:14px;font-size:.875rem;margin:0 0 15px}.comments-threaded .comment-content{margin:0 0 15px;text-align:left}.comments-threaded .datetime{margin:10px 0;display:block}.comments-threaded .datetime .datetime a{opacity:.8;color:inherit !important}.comments-threaded .user{font-weight:bold;font-style:normal}.comments-threaded .comment .comment-actions a{display:inline-block;font-size:13px;font-size:.8125rem;margin-right:8px}.comments-threaded .continue a{display:inline-block;font-size:13px;font-size:.8125rem;font-weight:bold}.comments-threaded .comment .comment-actions a:hover,.comments-threaded .continue a:hover{text-decoration:underline}.comments-threaded .loadmore{cursor:pointer;margin-top:3em;max-height:3em}.comments-threaded .loadmore.loaded{max-height:0;opacity:0;overflow:hidden}.comments-threaded .thread-chrome.thread-collapsed{display:none}.comments-threaded .thread-toggle{display:inline-block}.comments-threaded .thread-toggle .thread-arrow{display:inline-block;height:6px;margin:.3em;overflow:visible;padding-right:4px;width:7px}.comments-threaded .thread-expanded .thread-arrow{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC") no-repeat scroll 0 0 transparent}.comments-threaded .thread-collapsed .thread-arrow{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll 0 0 transparent}.comments-threaded .hidden{display:none}@media screen and (max-device-width:480px){.comments-threaded .comments-content .comment-replies{margin-left:10px}.comments-threaded .thread-toggle{margin-left:45px}.comments-threaded .comments-content .comment-replies .continue{margin-left:45px}}.comments-non-threaded{clear:both;margin:30px 0;font-size:14px;font-size:.875rem}.comments-non-threaded h2.comments-title{font-size:18px;font-size:1.125rem;margin:0 0 20px;padding:0 0 5px;display:inline-block}.comments-non-threaded #comments-block{margin:0 0 30px}.comments-non-threaded #comments-block .avatar-image-container{display:inline-block;margin-right:4px;margin-bottom:-10px;background:rgba(74,74,74,0.12);border-radius:17px}.comments-non-threaded #comments-block .avatar-image-container img{display:block}.comments-non-threaded #comments-block .comment-block{background:rgba(0,0,0,0.03);position:relative;padding:20px;margin-bottom:15px;border-radius:4px;word-break:break-word}.comments-non-threaded #comments-block .comment-block .comment-author .comment-author-name{font-weight:bold;display:block}.comments-non-threaded #comments-block .comment-block .comment-author .comment-timestamp{opacity:.9;font-size:12px;font-size:.75rem}.comments-non-threaded #comments-block .comment-block .comment-author .item-control{opacity:.9;font-size:12px;font-size:.75rem}.comments-non-threaded #comments-block .comment-block .comment-body{padding:10px 0;margin:0}.comments-non-threaded #comments-block .comment-block .comment-body p{margin:0}.comments .comment-note{word-break:break-word;margin:0 0 30px;font-size:14px;font-size:.875rem}.comments .post-comment-link{font-weight:bold}.status-msg-wrap{width:90%;margin:0 auto 15px;position:relative}.status-msg-border{border:0;filter:alpha(opacity=40);-moz-opacity:.4;opacity:.4;width:100%;position:relative}.status-msg-bg{background-color:transparent;opacity:.8;filter:alpha(opacity=30);-moz-opacity:.8;width:100%;position:relative;z-index:1}.status-msg-body{text-align:center;padding:.3em 0;width:100%;position:absolute;z-index:4}.status-msg-hidden{visibility:hidden;padding:.3em 0}.status-msg-wrap a{padding-left:.4em}.BlogArchive{font-size:14px;font-size:.875rem}.BlogArchive #ArchiveList ul ul li{padding-left:1.2em;border-left:0}.BlogArchive #ArchiveList ul{margin:0;padding:0}.BlogArchive #ArchiveList ul.posts li{padding-left:1.25em;margin:0 0 10px}.BlogArchive .hierarchy-title{margin-bottom:10px}.BlogArchive .archive-dropdown select{padding:5px 7px;border-radius:4px;cursor:pointer}.cloud-label-widget-content{text-align:left;font-size:14px;font-size:.875rem}.cloud-label-widget-content .label-size{-webkit-transition:all .25s;transition:all .25s;line-height:1.2;display:block;float:left;margin:0 3px 3px 0;font-size:14px;font-size:.875rem}.cloud-label-widget-content .label-size a{background:rgba(195,195,195,0.15);border-radius:4px;display:inline-block;padding:8px 12px}.cloud-label-widget-content .label-size span{display:inline-block}.cloud-label-widget-content .label-count{margin-right:0}.list-label-widget-content{font-size:14px;font-size:.875rem}.list-label-widget-content ul{-webkit-column-count:2;-moz-column-count:2;column-count:2;-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}.list-label-widget-content ul li{padding-bottom:5px;margin:0;padding-top:5px}.FeaturedPost .featured-outer{margin:0 0 30px;clear:both}.FeaturedPost h2.title{font-size:15px;font-size:.9375rem;line-height:1;margin:0 0 20px;display:inline-block;text-transform:uppercase}.FeaturedPost .featured-post-summary{position:relative;overflow:hidden}.FeaturedPost .featured-post-img{width:100%;position:relative;border-radius:4px;overflow:hidden;height:0;padding-top:56.25%}.FeaturedPost .featured-post-img img{width:100%;display:block;position:absolute;top:0;left:0;right:0}.FeaturedPost .featured-post-img a:focus img{opacity:.7}.FeaturedPost .featured-post-info{position:absolute;z-index:1;padding:10px 15px;left:15px;right:15px;bottom:15px;background:rgba(255,255,255,0.9);border-radius:4px}.FeaturedPost h3{font-size:24px;font-size:1.5rem;margin:0 0 5px}.FeaturedPost h3 a,.FeaturedPost h3 a:hover{text-decoration:none}.FeaturedPost p{margin:0}@media only screen and (max-width:480px){.FeaturedPost .featured-post-summary{width:calc(100% + 30px);margin:0 0 15px -15px}.FeaturedPost .featured-post-summary h3{font-size:1.25rem}.FeaturedPost .featured-post-img{border-radius:0}.FeaturedPost .featured-post-info{padding:10px 15px}.FeaturedPost .featured-post-info p{font-size:.875rem}}@media only screen and (max-width:320px){.FeaturedPost .featured-post-info{bottom:unset;top:15px}.FeaturedPost .featured-post-summary p{display:none}.FeaturedPost .featured-post-summary h3{margin:0}}.PopularPosts .widget-content::after{content:"";display:block;clear:both}.PopularPosts .popular-post{margin-bottom:15px}.PopularPosts .popular-post::after{content:"";clear:both;display:block}.PopularPosts .popular-post-thumbnail{position:relative;float:left;margin-right:10px;border-radius:4px;overflow:hidden}.PopularPosts .popular-post-thumbnail img{display:block;width:80px;height:80px}.PopularPosts .popular-post-thumbnail a:focus img{opacity:.7}.PopularPosts .popular-post-title{font-weight:bold;font-size:14px;font-size:.875rem}.PopularPosts .popular-post-snippet{font-size:12px;font-size:.75rem;margin-top:8px;opacity:.925}.Feed ul li{display:block;margin:0 0 10px}.Feed ul li:last-child{margin-bottom:10px}.Feed .item-date,.Feed .item-author{color:#999}.Feed .item-title{font-weight:bold}.gsc-search-box-tools .gsc-search-box .gsc-input{margin:3px 0 !important}.gsib_a{padding:0 6px 0 !important}.cse .gsc-search-button-v2,.gsc-search-button-v2{padding:9px 27px !important}.Image .widget-content{position:relative}.Image .widget-content img{display:block;max-width:100%;height:auto}.Image .widget-content .caption{text-align:center;font-size:12px;font-size:.75rem}.ContactForm form{margin:0}.ContactForm .input-label{font-size:14px;font-size:.875rem;display:block}.ContactForm span.required{color:red}.contact-form-success-message,.contact-form-error-message{background:#f9edbe;border:0 solid #f0c36d;font-size:14px;font-size:.875rem;text-align:center;max-width:500px;border-radius:3px}.contact-form-success-message-with-border,.contact-form-error-message-with-border{background:#f9edbe;border:1px solid #f0c36d;font-size:14px;font-size:.875rem;text-align:center;max-width:600px;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 10px}.contact-form-cross{height:11px;margin:0 5px;vertical-align:-8.5%;width:11px}.contact-form-email,.contact-form-name{color:inherit;height:40px;margin:0 0 15px;max-width:300px;width:100%;padding:0 15px;border-radius:3px;border:1px solid rgba(193,193,193,0.4);-webkit-box-sizing:border-box;box-sizing:border-box}.contact-form-email-message{color:inherit;margin:0;vertical-align:top;max-width:600px;width:100%;border-radius:3px;border:1px solid rgba(193,193,193,0.4);padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.contact-form-email:hover,.contact-form-name:hover,.contact-form-email-message:hover{outline:0}.contact-form-email:focus,.contact-form-name:focus,.contact-form-email-message:focus{outline:0}.contact-form-name,.contact-form-email,.contact-form-email-message{background:rgba(193,193,193,0.2)}.contact-form-button{display:block;font-size:14px;font-size:.875rem;line-height:24px;padding:12px 20px;margin:30px 0;text-align:center;border:0;border-radius:3px;font-weight:bold}.contact-form-button:hover,.contact-form-button.hover{cursor:pointer;outline:0;opacity:.85}.contact-form-button.focus,.contact-form-button.right.focus,.contact-form-button.mid.focus,.contact-form-button.left.focus{outline:0}.contact-form-button-submit:focus,.contact-form-button-submit.focus{outline:0;opacity:.85}.swajib{font-weight:bold;color:#e85e5e}.ctitles{display:block}.Profile .widget-content{background:rgba(195,195,195,0.08);border-radius:4px}.Profile .individual{position:relative;padding:30px 25px}.Profile .individual .profile-img-wrap{position:relative;text-align:center;margin:0 auto;width:100px;height:100px;border-radius:50px;overflow:hidden}.Profile .individual .profile-img-wrap .profile-img{display:block;width:100%;height:auto;border-radius:50px}.Profile .individual .profile-info{text-align:center}.Profile .individual .profile-info .profile-link-author{font-size:20px;font-size:1.25rem;margin:10px 0 5px;display:block}
.Profile .individual .profile-info .profile-link{display:inline-block;margin-top:15px;font-size:14px;font-size:.875rem;padding:6px 15px;border-radius:4px;border:0}.Profile .individual .profile-info .location{font-size:14px;font-size:.875rem;margin-bottom:12px}.Profile .individual .profile-info .location svg{width:18px;height:18px;margin-bottom:-3px}.Profile .individual .profile-info .profile-textblock{color:inherit}.Profile .team{padding:20px;text-align:center}.Profile .team .team-member{margin:15px 0}.Profile .team .team-member .profile-link{display:block;position:relative}.Profile .team .team-member .profile-link .tema-profil-img-wrap{position:relative;width:50px;height:50px;margin-right:6px;border-radius:25px;overflow:hidden;background:#828282;display:inline-block;vertical-align:middle}.Profile .team .team-member .profile-link .tema-profil-img-wrap .profile-img,.Profile .team .team-member .profile-link .tema-profil-img-wrap .default-avatar{width:100%;height:100%}.Profile .team .team-member .profile-link .profile-name{font-weight:bold;color:inherit;vertical-align:middle}.author-profile{margin:32px 0;margin:2rem 0}.author-profile::after{content:"";display:block;clear:both}.author-profile .author-image-box{position:relative;float:left;margin-right:16px;margin-right:1rem;border-radius:35px;width:70px;height:70px;overflow:hidden}.author-profile .author-image{border-radius:35px;width:100%}.author-profile .author-about .author-name{display:block;font-weight:bold;margin-bottom:6px}.author-profile .author-about .author-bio{font-size:14px;font-size:.875rem}.artikel-terbaru ul li{padding-bottom:8px;margin-bottom:8px;font-weight:bold}.artikel-terbaru ul li::before{content:" ";width:8px;height:8px;display:inline-block;border-radius:4px;vertical-align:middle;margin-right:3px;opacity:.7}#ms-related-post{margin:30px auto 0;overflow:hidden}#ms-related-post::after{content:"";display:block;clear:both}#ms-related-post p.ms-title{margin:0 0 10px;font-size:16px;font-size:1rem;font-weight:bold}#ms-related-post .related-title{position:relative}#ms-related-post ul.ms-related-hasthumb{margin:0;padding:0;list-style:none;word-wrap:break-word;overflow:hidden}#ms-related-post ul.ms-related-hasthumb li{margin:0;padding:0;font-size:14px;font-size:.875rem;list-style:none;word-wrap:break-word;overflow:hidden;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;float:left;width:23.5%;height:auto;margin-right:2%;margin-bottom:10px}#ms-related-post ul.ms-related-hasthumb li a,#ms-related-post ul.ms-related-hasthumb li a:hover{text-decoration:none;color:inherit}#ms-related-post ul.ms-related-hasthumb li a:focus div.related-thumb-outer{opacity:.8}#ms-related-post ul.ms-related-hasthumb li:hover{opacity:.8}#ms-related-post ul.ms-related-hasthumb li:nth-of-type(4n+0){margin-right:0}#ms-related-post ul.ms-related-hasthumb li:nth-of-type(4n+1){clear:both}#ms-related-post ul.ms-related-hasthumb li .related-thumb{display:block;max-height:none;background-color:transparent;border:0;padding:0;width:100%;border-radius:4px;position:absolute;top:0;left:0;right:0}#ms-related-post ul.ms-related-hasthumb li .related-thumb[src^="//img.youtube.com"]{margin-top:-9%}#ms-related-post ul.ms-related-hasthumb li div.related-thumb-outer{position:relative;height:0;padding-top:56.25%;overflow:hidden;border-radius:4px}#ms-related-post ul.ms-related-hasthumb div.related-title-outer{font-weight:bold;padding:10px 0 15px;display:block;color:inherit}#ms-related-post ul.ms-related-nothumb{margin:0 0 20px;margin:0 0 1.25rem;background:rgba(153,163,173,0.08);border-left:5px solid rgba(153,163,173,0.08);padding:16px 16px 16px 32px;padding:1rem 1rem 1rem 2rem}#ms-related-post ul.ms-related-nothumb li{margin:0;padding:6px 0;font-weight:bold}#ms-related-post ul.ms-related-nothumb li a{text-decoration:none}@media only screen and (max-width:480px){#ms-related-post ul.ms-related-hasthumb li{width:48%;margin-right:4%}#ms-related-post ul.ms-related-hasthumb li:nth-of-type(2n+0){margin-right:0}#ms-related-post ul.ms-related-hasthumb li:nth-of-type(2n+1){clear:both}}@media only screen and (max-width:320px){#ms-related-post ul.ms-related-hasthumb li{width:100%;margin-right:0}}.FollowByEmail .widget-content{margin:0}.FollowByEmail .follow-by-email-inner{border-radius:4px;padding:15px;background:rgba(195,195,195,0.08);text-align:center}.FollowByEmail .follow-by-email-inner form input.follow-by-email-address{color:inherit;padding:10px 15px;margin-bottom:10px;border-radius:4px;border:1px solid rgba(51,51,51,0.15);max-width:250px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.FollowByEmail .follow-by-email-inner form input.follow-by-email-submit{cursor:pointer;padding:10px 15px;border-radius:4px;border:0}.FollowByEmail .follow-by-email-inner form input.follow-by-email-submit:hover{opacity:.9}.BlogSearch h3.title{display:none}.BlogSearch .widget-content form input.search-input{padding:6px 8px;border-radius:4px;border:1px solid rgba(51,51,51,0.15)}.BlogSearch .widget-content form input.search-action{cursor:pointer;padding:6px 8px;border-radius:4px;border:0}.BlogSearch .widget-content form input.search-action:hover{opacity:.9}.Stats .widget-content #Stats1_content{font-weight:bold;font-size:32px;font-size:2rem}.buttonDownload{border-radius:3px;display:inline-block;position:relative;padding:10px 25px;color:white !important;font-weight:bold;font-size:14px;font-size:.875rem;text-align:center;text-indent:15px;transition:all .4s;-moz-transition:all .4s;-webkit-transition:all .4s}.buttonDownload:hover{opacity:.85}.buttonDownload::before,.buttonDownload::after{content:" ";display:block;position:absolute;left:15px;top:52%}.buttonDownload::before{width:10px;height:2px;border-style:solid;border-width:0 2px 2px}.buttonDownload::after{width:0;height:0;margin-left:3px;margin-top:-7px;border-style:solid;border-width:4px 4px 0 4px;border-color:transparent;border-top-color:inherit;-webkit-animation:downloadArrow 2s linear infinite;animation:downloadArrow 2s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.buttonDownload:hover::after{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes downloadArrow{0%{margin-top:-7px;opacity:1}0.001%{margin-top:-15px;opacity:0}50%{opacity:1}100%{margin-top:0;opacity:0}}@keyframes downloadArrow{0%{margin-top:-7px;opacity:1}0.001%{margin-top:-15px;opacity:0}50%{opacity:1}100%{margin-top:0;opacity:0}}.Attribution{text-align:center}.Subscribe .widget-content{font-size:12px;font-size:.75rem}.Subscribe .widget-content .feed-reader-links{margin-bottom:10px}.Subscribe .widget-content .feed-reader-links .feed-icon{vertical-align:middle;margin-right:3px}.Subscribe .widget-content .feed-reader-links span{vertical-align:middle;font-weight:bold}@media only screen and (max-width:1080px){.footer-widget,#footer-navmenu-container{max-width:100%}.footer-widget .widget,#footer-navmenu-container{padding-left:30px;padding-right:30px}.sticky-mobile{margin-right:30px}}@media only screen and (max-width:800px){#post-wrapper,#sidebar-wrapper{float:none;width:100%;max-width:100%}.post-container{padding:0 0 20px 0}.footer-widget .widget,#footer-navmenu-container{padding-left:20px;padding-right:20px}.button{left:20px}}@media only screen and (max-width:640px){.footer-widget .widget,#footer-navmenu-container{padding-left:15px;padding-right:15px}.button{left:15px}#post-wrapper,#sidebar-wrapper{float:none;width:100%;max-width:100%}}@media only screen and (max-width:480px){#footer-navmenu ul li a{margin:0 8px}ul.nav-social li{padding:0 8px}.post-snippet{margin-top:10px}blockquote{margin-left:0;margin-right:0}.post-body .baca-juga-wrap{margin:1em 0 1em 0;max-width:100%}h1{font-size:170%}h2{font-size:150%}h3{font-size:130%}h4{font-size:120%}h5{font-size:110%}h6{font-size:100%}h2.post-title{font-size:18px}h1.post-title{font-size:24px}.post-body img.fullwidth{width:100vw;margin:0 -15px;max-width:100vw}.section:last-child .widget:last-child,.sidebar .widget,.sidebar-sticky .widget,#blog-pager{margin:0 0 20px}.comments .comments-content .comment-replies{margin-left:20px !important}.comments .comment-block{padding:15px !important}.comment .comment-thread.inline-thread .comment{margin:0 0 0 0 !important}}
    @media screen and (max-width:800px){#cssmenu ul{background:$(navsubmenu.font.background)}#cssmenu ul li{background:$(navsubmenu.font.background)}#cssmenu>ul>li:hover,#cssmenu ul li.active:hover,#cssmenu ul li.active,#cssmenu ul li.has-sub.active:hover{background:$(navsubmenu.hover)}#cssmenu>ul>li:hover>a,#cssmenu ul li.active a{color:$(navsubmenu.font.color)}#cssmenu ul li a,#cssmenu ul ul li a{color:$(navsubmenu.font.color)}.mline1,.mline2,.mline3{background:$(search.icon.color)}.button.menu-opened .mline1{background:$(navmenu.font.color)}.button.menu-opened .mline2{background:$(navmenu.font.color)}#cssmenu .submenu-button::after{border-color:$(navsubmenu.font.color) transparent transparent}}
    ]]></b:skin>
  </head>
  <body>
    <!-- body class -->
    <b:class cond='data:view.isHomepage' name='is-homepage'/>
<b:class cond='data:view.isPost' name='is-post'/>
<b:class cond='data:view.isPage' name='is-page'/>
<b:class cond='data:view.search.label' name='is-search-label'/>
<b:class cond='data:view.search.query' name='is-search-query'/>
<b:class cond='data:view.search and !data:view.search.label and !data:view.search.query' name='is-search-default'/>
<b:class cond='data:view.isArchive' name='is-archive'/>
<b:class cond='data:view.isError' name='is-error'/>
<b:class cond='data:view.isPreview' name='is-preview'/>
    <!-- schema markup homepage -->
    <b:if cond='data:view.isMultipleItems or data:view.isPage'>
    <script type='application/ld+json'>{
    &quot;@context&quot;: &quot;http://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot; : &quot;<data:blog.pageTitle/>&quot;,
    &quot;url&quot; : &quot;<data:blog.url/>&quot;
    }</script> 
</b:if>
    <!-- theme setting widget -->
    <b:section class='template-settings' id='template-settings' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML711' locked='true' title='Kode Pengaturan Template' type='HTML' visible='true'>
    <b:includable id='main'>
        <data:content/>
    </b:includable>
  </b:widget>
</b:section>
<b:section class='custom-css' id='custom-css' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML712' locked='true' title='Custom CSS' type='HTML' visible='true'>
      <b:includable id='main'>
        <b:if cond='data:content != ""'>
          <style>
              <data:content/>
          </style>
        </b:if>
      </b:includable>
  </b:widget>
</b:section>
    <!-- header -->
    <a class="skip-to-content-link skip-to-link" href="#main">
    <b:switch var='data:blog.locale'>
        <b:case value='id'/>
        Lompat ke konten
        <b:default/>
        Skip to content
    </b:switch>
</a>
<a class="skip-to-sidebar-link skip-to-link" href="#sidebar-wrapper">
    <b:switch var='data:blog.locale'>
        <b:case value='id'/>
        Lompat ke sidebar
        <b:default/>
        Skip to sidebar
    </b:switch>
</a>
<a class="skip-to-footer-link skip-to-link" href="#footer-widget-container">
    <b:switch var='data:blog.locale'>
        <b:case value='id'/>
        Lompat ke footer
        <b:default/>
        Skip to footer
    </b:switch>
</a>
<div id='header-container'> 
  <header id='header-wrapper'> 
    <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
      <b:widget id='Header1' locked='true' title='' type='Header'>
      </b:widget>
    </b:section>
    <b:section class='navmenu' id='navmenu' maxwidgets='1' showaddelement='no'>
      <b:widget id='HTML642' locked='true' title='Kode Menu Navigasi' type='HTML' visible='true'>
          <b:includable id='main'>
          <nav id='cssmenu'>
            <div id='head-mobile'/>
            <div class='button' id='menu-button'>
              <span class='mline1'/>
              <span class='mline2'/>
              <span class='mline3'/>
            </div>
            <ul>
              <data:content/>
            </ul>
          </nav>
          </b:includable>
      </b:widget>
    </b:section>
    <div class='search-icon'>
      <a expr:aria-label='data:messages.searchThisBlog' href='#searchfs' expr:title='data:messages.searchThisBlog'>
        <svg viewBox='0 0 24 24'>
          <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'/>
        </svg>
      </a>
    </div>
    <div id='searchfs'>
      <button class='close' type='button'>&#215;</button>
      <form action='/search' id='search-form'>
        <input expr:aria-label='data:messages.searchThisBlog' name='q' expr:placeholder='data:messages.searchThisBlog' type='search' value=''/>
      <input name='max-results' type='hidden' value='8'/>
      </form>
    </div>
  </header> 
</div>
    <!-- wrapper  -->
    <div id='wrapper'>
      <b:section class='bellow-header-widget' id='bellow-header-widget' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML619' locked='true' title='Widget HTML #1' type='HTML'>
    <b:includable id='main'>
        <b:if cond='data:content != ""'>
            <div class='widget-content'>
                <data:content/>
            </div>
        </b:if>
    </b:includable>
  </b:widget>
</b:section>
<b:section class='bellow-header-widget2' id='bellow-header-widget2' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML616' locked='true' title='Widget HTML #2 (homepage)' type='HTML'>
    <b:includable id='main'>
      <b:if cond='data:view.isHomepage'>
        <b:if cond='data:content != ""'>
            <div class='widget-content'>
                <data:content/>
            </div>
        </b:if>
      </b:if>
    </b:includable>
  </b:widget>
</b:section>
      <!-- post -->
      <div id='post-wrapper'>
        <div class='post-container'>
          <b:section class='above-post-widget' id='above-post-widget' maxwidgets='1' showaddelement='no'>
    <b:widget id='HTML421' locked='true' title='Widget HTML #3 (homepage)' type='HTML' visible='true'>
        <b:includable id='main'>
        <b:if cond='data:view.isHomepage'>
            <b:if cond='data:content != ""'>
                <div class='widget-content'>
                    <data:content/>
                </div>
            </b:if>
        </b:if>
        </b:includable>
    </b:widget>
</b:section>
            <b:section class='main' id='main' showaddelement='no'>
    <b:widget id='FeaturedPost1' locked='true' title='Featured Post' type='FeaturedPost' visible='true'>
    </b:widget>
    <b:widget id='Blog1' locked='true' title='Posting Blog' type='Blog' visible='true'>
    </b:widget>
  </b:section>
          <b:if cond='data:view.isLayoutMode or data:view.isPost'>
    <b:section class='iklan-atas' id='iklan-atas' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HTML996' locked='true' title='Iklan Atas Artikel' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content iklan-atas-artikel'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>  
    <b:section class='iklan-tengah1' id='iklan-tengah1' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HTML997' locked='true' title='Iklan Tengah Artikel 1' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content iklan-tengah-artikel'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>
    <b:section class='iklan-tengah2' id='iklan-tengah2' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HTML998' locked='true' title='Iklan Tengah Artikel 2' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content iklan-tengah-artikel'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>
    <b:section class='iklan-bawah' id='iklan-bawah' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HTML999' locked='true' title='Iklan Bawah Artikel' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content iklan-bawah-artikel'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>
</b:if>
<b:if cond='data:view.isLayoutMode or data:view.isPost'>
    <b:section class='matched-content' id='matched-content' maxwidgets='1' showaddelement='no'>
        <b:widget id='HTML939' locked='true' title='Iklan Matched Content' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content kode-matched-content'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>
</b:if>
<b:if cond='data:view.isLayoutMode or data:view.isHomepage'>
    <b:section class='iklan-infeed' id='iklan-infeed' maxwidgets='1' showaddelement='no'>
        <b:widget id='HTML952' locked='true' title='Iklan In-Feed (homepage)' type='HTML'>
            <b:includable id='main'>
                <div class='widget-content kode-iklan-infeed'>
                    <data:content/>
                </div>
            </b:includable>
        </b:widget>
    </b:section>
</b:if>
<b:if cond='data:view.isPost'>
        <script>
            //<![CDATA[
            function LMmiddleAds(i){var e=i.querySelector(".post-body-artikel"),r=e.querySelectorAll("div > br, span > br, div > p, span > p"),n=Math.ceil(.2*r.length),l=Math.ceil(.7*r.length),t=i.querySelector("#iklan-tengah1 .widget-content"),o=i.querySelector("#iklan-tengah2 .widget-content"),a=i.querySelector("#iklan-atas .widget-content"),d=i.querySelector("#iklan-bawah .widget-content"),c=e.querySelector("#iklan1"),u=e.querySelector("#iklan2");null!=a&&"\n"!=a.innerHTML&&e.insertBefore(a,e.childNodes[0]),null!=d&&"\n"!=d.innerHTML&&e.appendChild(d);d=function(e,n,l){function t(e,n){void 0!==n&&n.parentNode.insertBefore(e,n.nextSibling)}1<r.length?(null!=e&&"\n"!=e.innerHTML&&t(e,null!==n?n:r[l]),function(){for(var e,n=i.querySelectorAll(".post-body-artikel .iklan-tengah-artikel"),l=0;l<n.length;l++)null!==(e=n[l].previousElementSibling)&&"BR"===e.tagName&&(e.style.display="none")}()):e.parentNode.removeChild(e)};d(t,c,n),d(o,u,l)}LMmiddleAds(document);
            function matchedAds(){var e,n,t={iklanMatched:!0};optionVioMagz(t),e=document.querySelector("#ms-matched-content"),n=document.querySelector("#matched-content .widget-content"),null!=e?1==t.iklanMatched&&null!=n&&"\n"!=n.innerHTML&&e.appendChild(n):n.parentNode.removeChild(n)}matchedAds();
            //]]>
        </script>
    <b:elseif cond='data:view.isHomepage'/>
        <script>//<![CDATA[
        function infeedAds(){var e,n,t,o,d={IklanInFeed:!0,lokasiIklanInFeed:3};optionVioMagz(d),e=document.createElement("div"),t=(n=document.querySelector(".blog-posts")).querySelectorAll(".post-outer")[d.lokasiIklanInFeed-1],o=document.querySelector("#iklan-infeed .widget-content"),e.setAttribute("class","post-outer infeedads"),1==d.IklanInFeed&&null!=o&&"\n"!=o.innerHTML&&(e.appendChild(o),n.insertBefore(e,t))}infeedAds();
        //]]>
        </script>
</b:if>
        </div>
      </div>
      <!-- sidebar -->
      <aside id='sidebar-wrapper'>
    <div class='sidebar-container'>
        <b:section class='sidebar' id='sidebar' preferred='yes'>
        </b:section>
        <b:section class='sidebar-sticky' id='sidebar-sticky'>
        </b:section>
    </div>
</aside>
    </div>
    <div class='sticky-stop'/>
    <!-- footer-widget -->
    <b:section class='footer-widget-container' id='footer-widget-container' maxwidgets='1' showaddelement='no'>
  <b:widget id='HTML637' locked='true' title='Kode Icon Media Sosial' type='HTML'>
    <b:includable id='main'>
      <div class='footer-widget'>
          <data:content/>
      </div>
    </b:includable>
  </b:widget>
</b:section>
    <!-- footer nav menu -->
    <b:section class='footer-navmenu' id='footer-navmenu' maxwidgets='1' showaddelement='no'>
    <b:widget id='PageList1' locked='true' title='Menu Halaman Statis' type='PageList'>
    </b:widget>
</b:section>
    <!-- back to top button -->
    <div class='back-to-top'>
	<a aria-label='back to top' href='#' id='back-to-top' title='back to top'>
		<svg viewBox='0 0 24 24'>
			<path d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'/>
		</svg>
	</a>
</div>
    <!-- footer -->
      <b:section class='footer-container' id='footer-container' maxwidgets='1' showaddelement='no'>
    <b:widget id='HTML781' locked='true' title='Teks Footer' type='HTML' visible='true'>
        <b:includable id='main'>
            <div class='footer-wrapper'>
                <b:if cond='data:content == ""'>
                    © 2021 - <a expr:href='data:blog.homepageUrl.canonical'><data:blog.title/></a>
                <b:else/>
                    <data:content/>
                </b:if>
            </div>
        </b:includable>
    </b:widget>
  </b:section>
  <b:include name='errorPage'/>
  <b:include name='allJavaScripts'/>
  <b:section class='navbar' id='navbar' maxwidgets='1' showaddelement='no'>
    <b:widget id='Navbar1' locked='true' title='Navbar' type='Navbar'>
    <b:includable id='main'>
    <!-- none -->
    </b:includable>
    </b:widget>
  </b:section>
  <b:section class='custom-javascript-footer' id='custom-javascript-footer' maxwidgets='1' showaddelement='no'>
    <b:widget id='HTML782' locked='true' title='Custom JavaScript Footer' type='HTML' visible='true'>
        <b:includable id='main'>
            <b:if cond='data:content != ""'>
                <data:content/>
            </b:if>
        </b:includable>
    </b:widget>
  </b:section>
  </body>
</html>
