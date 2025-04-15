import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/article/w5z9lvce/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/w5z9lvce/\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/04/09 16:23:18\",\"permalink\":\"/article/w5z9lvce/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"preview/custom-component.example.md\",\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}]}")
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
