import '../css/content.css'

var MINIM = 'minim'
var MINIMHOLD = 'minimhold'

function stw (d, end) {
  return '<' + (end ? '/' : '') + d + '>'
}
function collapse () {
  var dlist = document.getElementsByClassName('task-list')[0].children
  for (var i = 0; i < dlist.length; i += 1) {
    if (i === 0 || i >= (dlist.length - 2)) {
      dlist[i].classList.add('firstgr')
      continue
    }
    var el = dlist[i]
    if (!el.classList.contains(MINIM)) {
      el.classList.add(MINIM)
      el.getElementsByClassName('task-group-title')[0]
        .insertAdjacentHTML('afterend', '<div class="vkdmenu">' +
          '<a class="holder_">' +
          stw('a', 1) + stw('div', 1))
    }
  }
  console.log('checked')
  clearInterval(window.yougilesetint)
  document.getElementsByClassName('task-list')[0].addEventListener('click',
    (e) => {
      if (e.target && e.target.classList.contains('holder_')) {
        const el = e.target.closest('.task-group')
        if (el) {
          if (el.classList.contains(MINIMHOLD)) {
            el.classList.remove(MINIMHOLD)
          } else {
            el.classList.add(MINIMHOLD)
          }
        }
      }
    }, { capture: true })

  document.getElementsByClassName('task-list')[0].addEventListener('mouseout',
    (e) => {
      // console.log(e.target.classList, e.target.closest('.task-group'))
      const el = e.target.closest('.task-group')
      if (el && !el.classList.contains('firstgr')) {
        el.classList.add(MINIM)
      }
    })
  document.getElementsByClassName('task-list')[0].addEventListener('mouseover',
    (e) => {
      // console.log(e.target.classList, e.target.closest('.task-group'))
      const el = e.target.closest('.task-group')
      if (el && !el.classList.contains('firstgr')) {
        el.classList.remove(MINIM)
      }
    })
}
function ready () {
  document.querySelector('.upper-panel__search')
  collapse()
}

window.yougilesetint = setInterval(() => {
  ready()
}, 4222)
document.addEventListener('DOMContentLoaded', ready)
