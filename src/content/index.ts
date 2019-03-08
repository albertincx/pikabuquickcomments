console.log('content-script2!');
const post_comment_class = '.post_comments_count';
const full = 0;
var st = `
.vkdmenu {
display: inline;
position: fixed;
z-index: 999999;
padding: 10px;
    background: #3535359e;
bottom: 0;
width: 100%;
padding: 31px 0px;
}
.vkh {height: 100%;}
.vkclose {
    background: #ddd;
    padding: 11px;
    border-radius: 4px;
    margin-right: 30px;
        position: absolute;
    right: 0;
    width: 79px;
    margin-right: 0;
    border: -20px;
    bottom: 40px;
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
}
.vkdwrap {
        height: 100%;
    overflow: hidden;
    overflow-y: scroll;
         padding-right: 60px; 
    padding-top: 60px; 
}
.vkdmenu .vkcw {    }
.vkcw.comments {        
padding: 0 9px;    background: #fff;    margin-bottom: 90px; 
display: block !important;
}
.vkcw .comment_tree {    background: #fff;}
.vkdmenu:not(.show) {display:none!important;}
.vkload:not(.show) {display:none!important;}
.vkdmenu.show {display:block!important;}
.vkload.show {display:block!important;}
`;

function stw(d: string, end = false) {
  return '<' + (end ? '/' : '') + d + '>';
}

function pqcrun() {
  if (!$('.vkdmenu').length) {
    const style = stw('style');
    const style2 = stw('style', true);

    const div2 = stw('div', true);
    const span2 = stw('span', true);
    const a2 = stw('a', true);

    const v = style + `${st}` + style2 +
        '<div class="vkdmenu">' +
        '<' + 'div class="vkdwrap">' +
        '<' + 'div class="vkcw comments">' + div2 + div2 +
        '<' + 'a class="vkclose">Закрыть' + a2 +
        '<' + 'span class="vkload more_action loading">' + span2 +
        div2;

    $('body').append(v);
  }
}

if (!$(post_comment_class).length) {
  full = 1;
  post_comment_class = 'a.story__to-comments';
}
$(document).on('click', post_comment_class, function() {
  let me = $(this);
  $('.vkload').addClass('show');
  $('.vkdmenu').addClass('show');
  $.get(me.attr('href'), function(d: any) {
    $('.vkdmenu').addClass('vkh');
    const html = $(d).find('div.comments,section.comments_show').html();
    $('.vkdmenu .vkcw').html(html);
  });
  return false;
});
$(document).on('click', '.vkclose', function() {
  $('.vkload').removeClass('show');
  $('.vkdmenu').removeClass('show');
  $('.vkcw').empty();
  $('.vkh').removeClass('vkh');
  return false;
});
$(document).on('click', '.comment__toggle,.comment-toggle-children_collapse', function() {
  let par = !full ? $(this).closest('.comment'): $(this);
  par.next().show();
  return false;
});
pqcrun();
