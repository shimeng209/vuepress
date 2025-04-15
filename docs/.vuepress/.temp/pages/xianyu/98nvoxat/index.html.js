import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/98nvoxat/index.html.vue"
const data = JSON.parse("{\"path\":\"/xianyu/98nvoxat/\",\"title\":\"新手指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"新手指南\",\"createTime\":\"2025/04/09 16:31:10\",\"permalink\":\"/xianyu/98nvoxat/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"notes/闲鱼/1.新手指南.md\"}")
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
