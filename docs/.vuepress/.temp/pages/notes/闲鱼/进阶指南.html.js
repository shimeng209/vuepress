import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/notes/闲鱼/进阶指南.html.vue"
const data = JSON.parse("{\"path\":\"/notes/%E9%97%B2%E9%B1%BC/%E8%BF%9B%E9%98%B6%E6%8C%87%E5%8D%97.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"notes/闲鱼/进阶指南.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"cf3f3f\",\"sort\":10002,\"name\":\"闲鱼\"}]}")
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
