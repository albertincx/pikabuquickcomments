import '../css/content.css'

function stw (d, attr = {}, end = false) {
  var attrs = Object.keys(attr).map(at => `${at}="${attr[at]}"`).join(' ')
  return '<' + (end ? '/' : '') + d + ' ' + attrs + '">'
}

function appnd (el, html) {
  if (!el) return
  el.insertAdjacentHTML('afterend', html)
}

const TRIGGER = 'collapseStolbs'

var btn = stw('div', {
  class: 'main-menu__item main-menu__item--help',
  id: TRIGGER
}) + 'TOGGLE' + stw('div', {}, true)

var MINIM = 'minim'
var MINIMA = 'minimactive'
var MINIMHOLD = 'minimhold'
var FIRSTGR = 'firstgr'

function mainOver (e) {
  const el = e.target.closest('.task-group')
  if (el && el.classList.contains(MINIMA) &&
    !el.classList.contains(FIRSTGR)) {
    el.classList.remove(MINIM)
  }
}

function mainOut (e) {
  const el = e.target.closest('.task-group')
  if (el && el.classList.contains(MINIMA) &&
    !el.classList.contains(FIRSTGR)) {
    el.classList.add(MINIM)
  }
}

function mainClick (e) {
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
}

function collapse () {
  var main = document.getElementsByClassName('task-list')[0]
  var checkOne = document.getElementsByClassName(MINIM)[0]
  var dlist = main.children
  if (checkOne) {
    for (let i = 0; i < dlist.length; i += 1) {
      dlist[i].classList.remove(FIRSTGR, MINIM, MINIMA)
    }
    document.querySelectorAll('.vkdmenu').forEach(i => i.remove())
    main.removeEventListener('click', mainClick)
    main.removeEventListener('mouseout', mainOut)
    main.removeEventListener('mouseover', mainOver)
    return
  }
  for (var i = 0; i < dlist.length; i += 1) {
    dlist[i].classList.add(MINIMA)
    if (i === 0 || i >= (dlist.length - 2)) {
      dlist[i].classList.add(FIRSTGR)
      continue
    }
    var el = dlist[i]
    if (!el.classList.contains(MINIM)) {
      el.classList.add(MINIM)
      el.getElementsByClassName('task-group-title')[0]
        .insertAdjacentHTML('afterend', '<div class="vkdmenu">' +
          '<a class="holder_">' +
          stw('a', {}, 1) + stw('div', {}, 1))
    }
  }
  // console.log('checked')
  main.addEventListener('click', mainClick, { capture: true })
  main.addEventListener('mouseout', mainOut)
  main.addEventListener('mouseover', mainOver)
}

let cnt = 0
window.yougilesetint = setInterval(() => {
  var el = document.querySelector('.main-menu__item.main-menu__item--help')
  // console.log(el, cnt)
  if (el || cnt > 5) {
    appnd(el, btn)
    document.getElementById(TRIGGER).addEventListener('click', collapse)
    clearInterval(window.yougilesetint)
  } else {
    cnt += 1
  }
}, 5000)
// document.addEventListener('DOMContentLoaded', ready)
