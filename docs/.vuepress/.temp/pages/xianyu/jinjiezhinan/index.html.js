import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/jinjiezhinan/index.html.vue"
const data = JSON.parse("{\"path\":\"/xianyu/jinjiezhinan/\",\"title\":\"一个账号每日必做的事\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"一个账号每日必做的事\",\"createTime\":\"2025/04/09 16:31:18\",\"permalink\":\"/xianyu/jinjiezhinan/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.58,\"words\":175},\"filePathRelative\":\"notes/闲鱼/每日必做.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
