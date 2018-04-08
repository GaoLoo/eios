(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-18').attr('src', (dpi>1) ? 'images/family_group-82.png' : 'images/family_group-41.png');


$('.js-21').attr('src', (dpi>1) ? 'images/halove-610.png' : 'images/halove-305.png');
$('.js-24').attr('src', (dpi>1) ? 'images/halove-608.png' : 'images/halove-304.png');
$('.js-26').attr('src', (dpi>1) ? 'images/halove-608.png' : 'images/halove-304.png');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-27').attr('src', 'images/back-70.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});