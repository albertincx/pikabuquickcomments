const urlPat = "https://*.pikabu.ru/*"
module.exports = {
  name: 'Pikabu quick comments',
  version: '1.0.3',
  description: 'Read comments quickly, save your time',
  author: 'albertincx',
  manifest_version: 2,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    urlPat,
    'contextMenus',
  ],
  content_scripts: [{
    css: ["css/content.css"],
    js: [ 'js/jq.js', 'js/content.js' ],
    run_at: 'document_end',
    matches: [ urlPat ],
    all_frames: false
  }],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
}
