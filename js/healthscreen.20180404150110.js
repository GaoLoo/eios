(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-7').attr('src', (dpi>1) ? 'images/halove-624.png' : 'images/halove-312.png');
$('.js-8').attr('src', (dpi>1) ? 'images/halove-610.png' : 'images/halove-305.png');
$('.js-9').attr('src', (dpi>1) ? 'images/halove-610.png' : 'images/halove-305.png');
$('.js-10').attr('src', (dpi>1) ? 'images/halove-608.png' : 'images/halove-304.png');
$('.js-12').attr('src', (dpi>1) ? 'images/halove-614.png' : 'images/halove-307.png');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-16').attr('src', 'images/back-70.png');
$('.js-17').attr('src', 'images/health_icon-49.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});

/**
 * 全屏实现
 */
$(function () {
  var player = new tvp.Player()
  var video = new tvp.VideoInfo();
  video.setVid("e05388bike8");
  player.create({
    width: 310,
    height: 163,
    video: video,
    pic:'../images/video_cut_img.png',
    modId: "mod_player",
    oninited:function (param) { // 当播放器初始化完毕时
      $('.tvp_fullscreen').hide()
    }
  });

})