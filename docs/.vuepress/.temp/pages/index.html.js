import comp from "E:/vuepress/my-project/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Yuan\",\"tagline\":\"记录思考&搞钱\",\"text\":\"一个简约的，功能丰富的 vuepress 文档&博客 主题\",\"actions\":[{\"theme\":\"brand\",\"text\":\"闲鱼\",\"link\":\"/xianyu/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/pengzhanbo/vuepress-theme-plume\"}]}}]},\"headers\":[],\"readingTime\":{\"minutes\":0.19,\"words\":57},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
