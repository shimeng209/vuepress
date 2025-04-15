import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/闲鱼/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%97%B2%E9%B1%BC/\",\"title\":\"咸鱼直男\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"咸鱼直男\",\"createTime\":\"2025/04/09 16:23:18\",\"permalink\":\"/闲鱼/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"notes/闲鱼/README.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"cf3f3f\",\"sort\":10002,\"name\":\"闲鱼\"}]}")
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
