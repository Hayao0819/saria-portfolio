import { Config } from "haru/load_config"


const config: Config = {
    output: "dist",
    input: "src",
    embed_to_html: () => Deno.readTextFileSync("src/index.html"),
    tailwind: {},
    title: "Haru App",
    pretty: true,
}

export default config
