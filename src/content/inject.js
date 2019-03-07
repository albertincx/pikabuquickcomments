var content = chrome.extension.getURL('js/content.js')
var script = document.createElement('script')
chrome.storage.sync.get(['key'], function (result) {
  console.log('Value currently is ' + result.key)
})
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', content)
document.body.appendChild(script)
