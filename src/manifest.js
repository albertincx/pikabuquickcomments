const urlPat = "https://*.pikabu.ru/*"
module.exports = {
  name: 'Pikabu quick comments',
  version: '1.0.1',
  description: 'Vue.js Chrome Extension Template (wcer)',
  author: 'yura',
  manifest_version: 2,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    urlPat,
    'contextMenus',
  ],
  content_scripts: [{
    js: [ 'js/jq.js', 'js/content.js' ],
    run_at: 'document_end',
    matches: [ urlPat ],
    all_frames: false
  }],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
}
