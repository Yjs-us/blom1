import cloudflare from "@astrojs/cloudflare"; 
import react from "@astrojs/react"; 
import { d1, r2 } from "@emdash-cms/cloudflare"; 
import { defineConfig, fontProviders } from "astro/config"; 
import emdash from "emdash/astro";
export default defineConfig({ 
output: "server", 
adapter: cloudflare(), 
image: { 
layout: "constrained", 
responsiveStyles: true, 
}, 
integrations: [ 
react(), 
emdash({ 
plugins: [
        smtpPlugin({
          host: "smtp.mx.cloudflare.net",
          port: 465,
          secure: true,
          user: "api_token",
          pass: "cfat_KwXg5jXt8210F6dBY31A7J00QJqgXjjZ6dWwbTJm4150f762",
          from: "no-reply@你的已验证域名"
        })
      ]
database: d1({ binding: "DB", session: "auto", coalesce: true }), 
storage: r2({ binding: "MEDIA" }), 
}), 
], 
fonts: [ 
{ 
provider: fontProviders.google(), 
name: "Inter", 
cssVariable: "--font-body", 
weights: [400, 500, 600, 700], 
fallbacks: ["sans-serif"], 
}, 
{ 
provider: fontProviders.google(), 
name: "JetBrains Mono", 
cssVariable: "--font-mono", 
weights: [400, 500], 
fallbacks: ["monospace"], 
}, 
], 
devToolbar: { enabled: false }, 
});
