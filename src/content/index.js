console.log('content-script!')
var cclass = '.post_comments_count';
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
    width: 50px;
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
.vkcw.comments {        padding: 0 9px;    background: #fff;    margin-bottom: 90px; }
.vkcw .comment_tree {    background: #fff;}
.vkdmenu:not(.show) {display:none!important;}
.vkload:not(.show) {display:none!important;}
.vkdmenu.show {display:block!important;}
.vkload.show {display:block!important;}
`;

function stw(d, end) {
  return '<' + (end ? '/' : '') + d + '>';
}

function vkdclose() {
  $('.vkcw').empty();
  $('.vkh').removeClass('vkh');
  return false;
}

function pqcrun() {
  if (!$('.vkdmenu').length) {
    var vkdmenu = stw('style') + `${st}` + stw('style', 1) +
        '<div class="vkdmenu">' +
        '<' + 'div class="vkdwrap">' +
        '<' + 'div class="vkcw comments">' + stw('div', 1) +
        stw('div', 1) +
        '<' + 'a class="vkclose">Закрыть' + stw('a', 1) +
        '<' + 'span class="vkload more_action loading">' + stw('span', 1) +
        stw('div', 1);

    $('body').append(vkdmenu);
  }
  $(document).on('click', '.vkclose', function() {
    $('.vkload').removeClass('show')
    $('.vkdmenu').removeClass('show')
    return vkdclose();
  });
  $(document).on('click', cclass, function() {
    let me = $(this)
    $('.vkload').addClass('show')
    $('.vkdmenu').addClass('show')
    $.get(me.attr('href'), function(d) {
      $('.vkdmenu').addClass('vkh')
      $('.vkdmenu .vkcw').html($(d).find('div.comments').html())
    })
    return false
  })
}
$(document).on('click', '.comment__toggle', function() {
  let par = $(this).closest('.comment')
  par.next().show();
  return false
})
pqcrun()
