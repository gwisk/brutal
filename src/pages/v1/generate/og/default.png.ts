import type { APIRoute } from "astro";
import satori from "satori";
import { Config } from '@eliancodes/brutal-ui';
import { html as toReactElement } from "satori-html";
import { type ResvgRenderOptions, Resvg } from "@resvg/resvg-js";

const fontFile = await fetch(
	"https://og-playground.vercel.app/inter-latin-ext-700-normal.woff"
);

const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 700;
const width = 1400;

export const GET: APIRoute = async () => {
	const bgColor = Config.colors[Math.floor(Math.random() * Config.colors.length)];
	const link = "filmslop.com";
	const html = toReactElement(`
  <div style="background-color: ${bgColor}; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; filter: drop-shadow()">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">  
          <p style="font-size: 48px;">FilmSlop</p>
		  <p style="font-size: 32px;">a new film review site</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: -2rem;">
          <p style="font-size: 32px">${link}</p>
          <img src="data:," width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
        </div>
      </div>
    </div>
  </div>
  `);

	const svg = await satori(html, {
		fonts: [
			{
				name: "Inter Latin",
				data: fontData,
				style: "normal",
			},
		],

		height,
		width,
	});

	const opts: ResvgRenderOptions = {
		fitTo: {
			mode: "width",
			value: width,
		},
	};
	const resvg = new Resvg(svg, opts);
	const pngData = resvg.render();
	const pngBuffer = pngData.asPng();

	return new Response(pngBuffer, {
		headers: {
			"content-type": "image/png",
		},
	});
};