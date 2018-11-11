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
    bottom: 0px;
}
.vkdwrap {
        height: 100%;
    overflow: hidden;
    overflow-y: scroll;
}
.vkdmenu .vkcw {    padding-right: 60px;    padding-top: 60px;}
.vkcw .comment_tree {    background: #fff;}
`;

function stw(d, end) {
  return '<' + (end ? '/' : '') + d + '>';
};

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
        stw('div', 1);

    $('body').append(vkdmenu);
  }
  $(document).on('click', '.vkclose', function() {
    return vkdclose();
  });
  $(document).on('click', cclass, function() {
    let me = $(this);
    $.get(me.attr('href'), function(d) {
      $('.vkdmenu').addClass('vkh');
      $('.vkdmenu .vkcw').html($(d).find('div.comments').html());
    });
    return false;
  });
}

pqcrun();