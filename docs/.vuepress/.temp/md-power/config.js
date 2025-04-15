import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._ee02bcf022b59c882a0d7a4332d4e378/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._ee02bcf022b59c882a0d7a4332d4e378/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'E:/vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._ee02bcf022b59c882a0d7a4332d4e378/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'E:/vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._ee02bcf022b59c882a0d7a4332d4e378/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'E:/vuepress/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._ee02bcf022b59c882a0d7a4332d4e378/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
