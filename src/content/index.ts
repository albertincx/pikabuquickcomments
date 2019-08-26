import '../css/content.css';
//var d = document.createElement('style');d.innerHTML='.sticker-item-list__wnd{overflow:visible}';document.body.append(d)
let post_comment_class = '.post_comments_count';
let full = 0;
var st = `
`;
if (!$(post_comment_class).length) {
  full = 1;
  post_comment_class = 'a.story__to-comments';
}
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
        '<div class="vkdmenu'+(full?' full':'')+'">' +
        '<' + 'div class="vkdwrap">' +
        '<' + 'div class="vkcw comments main1">'  + div2 +
        '<' + 'a class="vkclose">Закрыть' + div2 + a2 +
        '<' + 'span class="vkload more_action loading">' + span2 +
        div2;

    $('body').append(v);
  }
}


$(document).on('click', post_comment_class, function() {
  let me = $(this);
  $('.vkdmenu').addClass('show');
  $.get(me.attr('href'), function(d: any) {
    $('.vkdmenu').addClass('vkh');
    const html = $(d).find('div.comments,section.comments_show').html();
    $('.vkdmenu .vkcw').html(html);
  });
  return false;
});
$(document).on('click', '.vkclose', function() {
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
