import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/demo/rtkurj2l/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/rtkurj2l/\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2025/04/09 16:23:18\",\"permalink\":\"/demo/rtkurj2l/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/bar.md\"}")
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
