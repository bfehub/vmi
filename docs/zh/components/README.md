# 介绍

用于编写文档使用的组件。

## 使用

```sh
npm i -D @bfehub/vuepress-components@1.60.x
```

```ts
// docs/.vuepress/config.ts
import { defineClientConfig } from '@vuepress/client'
import { VpNpmBadge } from '@bfehub/vuepress-components'

export default defineClientConfig({
  enhance({ app }) {
    app.use(VpNpmBadge)
  },
})
```
