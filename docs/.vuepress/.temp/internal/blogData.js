export const blogPostData = [{"path":"/article/rxyyrxqe/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/04/09 16:23:18","lang":"zh-CN","excerpt":""},{"path":"/article/w5z9lvce/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/04/09 16:23:18","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
