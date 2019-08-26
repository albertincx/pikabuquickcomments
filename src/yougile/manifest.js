const urlPat = 'https://*.yougile.com/*'
module.exports = {
  name: 'yougile fixer',
  version: '1.0.2',
  description: 'fix yougile bugs',
  author: 'albertincx',
  manifest_version: 2,
  permissions: [
    urlPat,
    'contextMenus'
  ],
  content_scripts: [
    {
      css: ['css/content.css'],
      js: ['js/content.js'],
      run_at: 'document_end',
      matches: [urlPat],
      all_frames: false
    }],
  content_security_policy: 'script-src \'self\' \'unsafe-eval\'; object-src \'self\''
}
