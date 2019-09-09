import gitbook from 'gitbook'
let loadScript = url => {
  let script = document.createElement('script')
  script.src = url
  script.async = 1
  document.getElementsByTagName('head')[0].appendChild(script)
}

let addCodepenDiv = () => {}
gitbook.events.bind('start', (e, config) => {
  const pluginConfig = config.codepen
  if (pluginConfig) {
    let url = 'https://static.codepen.io/assets/embed/ei.js'
    loadScript(url)
  }
})
