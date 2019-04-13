(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="tpobntbohqpAhnbjm/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js2').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.08-1920.jpg' : 'images/screen-shot-2019-04-13-at-14.35.08-960-1.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/pasted-image-782.jpg' : 'images/pasted-image-391.jpg');
$('.js').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.40-1244.jpg' : 'images/screen-shot-2019-04-13-at-14.35.40-622-1.jpg');}else if($(window).width()>=480){$('.js2').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.08-960.jpg' : 'images/screen-shot-2019-04-13-at-14.35.08-480.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/pasted-image-390.jpg' : 'images/pasted-image-195.jpg');
$('.js').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.40-622.jpg' : 'images/screen-shot-2019-04-13-at-14.35.40-311.jpg');}else{$('.js2').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.08-640.jpg' : 'images/screen-shot-2019-04-13-at-14.35.08-320.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/pasted-image-260.jpg' : 'images/pasted-image-130.jpg');
$('.js').attr('src', (dpi>1) ? 'images/screen-shot-2019-04-13-at-14.35.40-414.jpg' : 'images/screen-shot-2019-04-13-at-14.35.40-207.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});