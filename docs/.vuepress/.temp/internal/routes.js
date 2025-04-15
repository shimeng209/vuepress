export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/w5z9lvce/\",\"/preview/markdown.html\":\"/article/rxyyrxqe/\",\"/notes/demo/bar.html\":\"/demo/rtkurj2l/\",\"/notes/demo/foo.html\":\"/demo/a4mdgnsa/\",\"/notes/demo/\":\"/demo/\",\"/notes/%E9%97%B2%E9%B1%BC/\":\"/xianyu/\",\"/notes/%E9%97%B2%E9%B1%BC/%E5%85%AB%E5%A4%A9%E8%B5%B7%E5%8F%B7%E6%B5%81%E7%A8%8B.html\":\"/xianyu/mt72m9kc/\",\"/notes/%E9%97%B2%E9%B1%BC/%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E4%BB%B7%E6%A0%BC.html\":\"/xianyu/jit7fsum/\",\"/notes/%E9%97%B2%E9%B1%BC/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97.html\":\"/xianyu/jinji/\",\"/notes/%E9%97%B2%E9%B1%BC/%E6%AF%8F%E6%97%A5%E5%BF%85%E5%81%9A.html\":\"/xianyu/jinjiezhinan/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/w5z9lvce/", { loader: () => import(/* webpackChunkName: "article_w5z9lvce_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/article/w5z9lvce/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/rxyyrxqe/", { loader: () => import(/* webpackChunkName: "article_rxyyrxqe_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/article/rxyyrxqe/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/rtkurj2l/", { loader: () => import(/* webpackChunkName: "demo_rtkurj2l_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/demo/rtkurj2l/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/a4mdgnsa/", { loader: () => import(/* webpackChunkName: "demo_a4mdgnsa_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/demo/a4mdgnsa/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/xianyu/", { loader: () => import(/* webpackChunkName: "xianyu_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/index.html.js"), meta: {"title":"闲鱼指南"} }],
  ["/xianyu/mt72m9kc/", { loader: () => import(/* webpackChunkName: "xianyu_mt72m9kc_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/mt72m9kc/index.html.js"), meta: {"title":"八天起号流程"} }],
  ["/xianyu/jit7fsum/", { loader: () => import(/* webpackChunkName: "xianyu_jit7fsum_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/jit7fsum/index.html.js"), meta: {"title":"如何设置价格"} }],
  ["/xianyu/jinji/", { loader: () => import(/* webpackChunkName: "xianyu_jinji_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/jinji/index.html.js"), meta: {"title":"新手易犯禁忌"} }],
  ["/xianyu/jinjiezhinan/", { loader: () => import(/* webpackChunkName: "xianyu_jinjiezhinan_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/xianyu/jinjiezhinan/index.html.js"), meta: {"title":"一个账号每日必做的事"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/vuepress/my-project/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
