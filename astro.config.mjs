import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
// 引入cloudflare邮件插件
import { cloudflareEmail } from "@emdash-cms/cloudflare/plugins";

export default defineConfig({
  integrations: [
    emdash({
      plugins: [
        cloudflareEmail({
          from: {
            email: "no-reply@main.xydwyrj.cc.cd",
            name: "小于的网游日记"
          }
        })
      ],
    }),
  ],
});
