import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/jinji/index.html.vue"
const data = JSON.parse("{\"path\":\"/xianyu/jinji/\",\"title\":\"新手易犯禁忌\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新手易犯禁忌\",\"createTime\":\"2025/04/09 16:31:10\",\"permalink\":\"/xianyu/jinji/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"notes/闲鱼/新手指南.md\"}")
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
