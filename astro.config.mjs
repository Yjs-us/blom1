import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import smtpPlugin from "emdash-plugin-smtp";

export default defineConfig({
  integrations: [
    emdash({
      plugins: [
        smtpPlugin({
          host: "smtp.mx.cloudflare.net",
          port: 465,
          secure: true,
          user: "api_token",
          pass: "cfat_RIgcIRXuN0odREyZ94efkMJkF9u45cHbynESma9C94083222",
          from: "no-reply@shturl.cc/txLrMLyB"
        })
      ],
    }),
  ],
});
