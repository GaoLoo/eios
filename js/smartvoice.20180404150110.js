(function (d) {
  var h = [];
  d.loadImages = function (a, e) {
    "string" == typeof a && (a = [a]);
    for (var f = a.length, g = 0, b = 0; b < f; b++) {
      var c = document.createElement("img");
      c.onload = function () {
        g++;
        g == f && d.isFunction(e) && e()
      };
      c.src = a[b];
      h.push(c)
    }
  }
})(window.jQuery);
$.fn.hasAttr = function (name) {
  var attr = $(this).attr(name);
  return typeof attr !== typeof undefined && attr !== false;
};

$(document).ready(function () {
  r = function () {
    dpi = window.devicePixelRatio;
    $('.js-30').attr('src', (dpi > 1)
      ? 'images/halove-618.png'
      : 'images/halove-309.png');
  };
  if (!window.HTMLPictureElement) {
    r();
  }
  if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
    $('.js-31').attr('src', 'images/bot-49.png');
    $('.js-32').attr('src', 'images/back-70.png');

  }
  (function () {
    $('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)')
      .each(function () {
        $(this)
          .click(function () {
            var t = this.hash.length > 1
              ? $('[name="' + this.hash.slice(1) + '"]')
                .offset()
                .top
              : 0;
            return $("html, body").animate({
              scrollTop: t
            }, 400),
            !1
          })
      })
  })();

});
/**
 * 全屏实现
 */
$(function () {
  var player = new tvp.Player()
  var video = new tvp.VideoInfo();
  video.setVid("y0538dv9g8k");
   player.create({
    width: 310,
    height: 163,
    video: video,
    modId: "mod_player",
    oninited:function (param) { // 当播放器初始化完毕时
      $('.tvp_fullscreen').hide()
    },
  });

})