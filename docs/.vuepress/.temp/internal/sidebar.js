export const sidebar = {"/":{"/demo":{"items":["","foo","bar"],"prefix":"/notes/demo/"},"/xianyu":{"items":"auto","prefix":"/notes/闲鱼/"}},"__auto__":{"/notes/闲鱼/":[{"text":"八天起号流程","link":"/xianyu/mt72m9kc/"},{"text":"如何设置价格","link":"/xianyu/jit7fsum/"},{"text":"新手易犯禁忌","link":"/xianyu/jinji/"},{"text":"一个账号每日必做的事","link":"/xianyu/jinjiezhinan/"}]},"__home__":{"/notes/闲鱼/":"/xianyu/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
