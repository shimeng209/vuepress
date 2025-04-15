import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/index.html.vue"
const data = JSON.parse("{\"path\":\"/xianyu/\",\"title\":\"闲鱼指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"闲鱼指南\",\"createTime\":\"2025/04/09 16:23:18\",\"permalink\":\"/xianyu/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"notes/闲鱼/README.md\"}")
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
