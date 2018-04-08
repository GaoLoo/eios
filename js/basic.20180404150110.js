(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-33').attr('src', (dpi>1) ? 'images/basic_operation-98.png' : 'images/basic_operation-49.png');
$('.js-34').attr('src', (dpi>1) ? ((dpi>2) ? 'images/front-927.jpg' : 'images/front-618.jpg') : 'images/front-309.jpg');
$('.js-35').attr('src', (dpi>1) ? ((dpi>2) ? 'images/back-942.jpg' : 'images/back-628.jpg') : 'images/back-314.jpg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-36').attr('src', 'images/back-70.png');
$('.js-37').attr('src', 'images/1-2-314.png');
$('.js-38').attr('src', 'images/2-314-1.png');
$('.js-39').attr('src', 'images/3-315.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});