import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/notes/闲鱼/新手必看注意事项.html.vue"
const data = JSON.parse("{\"path\":\"/notes/%E9%97%B2%E9%B1%BC/%E6%96%B0%E6%89%8B%E5%BF%85%E7%9C%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"notes/闲鱼/新手必看注意事项.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"cf3f3f\",\"sort\":10002,\"name\":\"闲鱼\"}]}")
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
