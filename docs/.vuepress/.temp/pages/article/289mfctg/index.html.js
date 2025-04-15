import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/article/289mfctg/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/289mfctg/\",\"title\":\"进阶指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"进阶指南\",\"createTime\":\"2025/04/09 16:31:18\",\"permalink\":\"/article/289mfctg/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"notes/闲鱼/进阶指南.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"cf3f3f\",\"sort\":10002,\"name\":\"闲鱼\"}]}")
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
