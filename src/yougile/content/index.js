import '../css/content.css'

function getS (d) {
  return document.querySelector(d)
}

function getSa (d) {
  return document.querySelectorAll(d)
}

function appnd (el, html) {
  if (!el) return
  el.insertAdjacentHTML('afterend', html)
}

function stw (d, attr = {}, end = false) {
  var attrs = Object.keys(attr).map(at => `${at}="${attr[at]}"`).join(' ')
  return '<' + (end ? '/' : '') + d + ' ' + attrs + '">'
}

const CHFILT = '.sticker-item-filter-checkbox input:checked'

function cleaFilter () {
  async function fffclearfn () {
    function zamk (i, clicksEl) {
      return new Promise((resolve, reject) => {
        if (i) {
          i.click()
          resolve()
          return
        }
        var chs = getSa(clicksEl)
        for (var ii2 = 0; ii2 < chs.length; ii2 += 1) {
          var ci = chs[ii2]
          ci.click()
          if (ii2 === (chs.length - 1)) {
            resolve()
          }
        }
      })
    }

    const stks = getSa('#sticker-panel .sticker-panel-item--filtering')
    const cc = []
    for (let ii = 0; ii < stks.length; ii += 1) {
      cc.push(zamk(stks[ii].querySelector('.sticker-item'), CHFILT))
    }
    await Promise.all(cc)
    await Promise.all([zamk(null, CHFILT)])
    await Promise.all([zamk(null, '.sticker-panel-item-overlay')])
  }

  // const el = getS('.sticker-create')
  const el = getS('.main-menu__item.main-menu__item--help')
  let el2 = getS(`#${d2}`)
  if (!el2) {
    // el2 = el.cloneNode(true)
    // el2.setAttribute('id', d2)
    // el2.classList.add('erasefilter')
    // appnd(el, el2.outerHTML)
    appnd(el, btnErase)
    document.getElementById(d2).addEventListener('click', fffclearfn)
  }
}

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
  const t = e.target
  if (t && t.classList.contains('holder_')) {
    const el = t.closest('.task-group')
    if (el) {
      if (el.classList.contains(MINIMHOLD)) {
        el.classList.remove(MINIMHOLD)
        t.classList.remove('active')
      } else {
        el.classList.add(MINIMHOLD)
        t.classList.add('active')
      }
    }
  }
}

let cntf = 0
const TRIGGER = 'collapseStolbs'
const clsNameToggle = 'main-menu__item main-menu__item--help'
const d2 = 'fffclear'

var btn = stw('div', { class: clsNameToggle, id: TRIGGER }) + 'TOGGLE' +
  stw('div', {}, true)
var btnErase = stw('div', { class: `${clsNameToggle} erasefilter`, id: d2 }) + 'Очистить фильтр' +
  stw('div', {}, true)
var MINIM = 'minim'
var MINIMA = 'minimactive'
var MINIMHOLD = 'minimhold'
var FIRSTGR = 'firstgr'

function collapse () {
  if (cntf === 0) cleaFilter()
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
  main.addEventListener('click', mainClick, { capture: true })
  main.addEventListener('mouseout', mainOut)
  main.addEventListener('mouseover', mainOver)
}

let cnt = 0
window.yougilesetint = setInterval(() => {
  var el = document.querySelector('.main-menu__item.main-menu__item--help')
  if (el || cnt > 5) {
    appnd(el, btn)
    document.getElementById(TRIGGER).addEventListener('click', collapse)
    clearInterval(window.yougilesetint)
  } else {
    cnt += 1
  }
}, 5000)
// document.addEventListener('DOMContentLoaded', ready)
