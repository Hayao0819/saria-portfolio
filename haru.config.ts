import { Config } from "haru/load_config"

export default {
    output: "dist",
    input: "src",
    embed_to_html: (html) => {
        return `<!DOCTYPE html>
                <html lang="ja">
                    <head>
                    </head>
            
                    <body>
                    <div class="flex justify-center">
	                    ${html}
                    </div>
                </body>
                </html>`
    },
} as Config
