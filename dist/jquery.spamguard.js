!function($){$.fn.spamguard=function(e){$defaults={protect:"email",setHref:!0};var t=$.extend({},$defaults,e);return this.each(function(){var e=$(this).html(),r=null;"telephone"==t.protect||"tel"==t.protect?(e=e.replace(/[^0-9 \+\/()]+/g,""),r="tel:"+e.replace(/[^0-9\+]+/g,"")):(e=e.replace(/[^a-z.@_-]+/g,""),r="mailto:"+e),$(this).is("a")&&1==t.setHref&&null!=r&&$(this).attr("href",r)})}}(jQuery);