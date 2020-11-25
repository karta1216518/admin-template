import { Nuxt, Builder } from "nuxt";
import nuxtConfig from "./nuxt.config";

import { setup as setupvServer } from "jest-dev-server";
import { setup as setupEnv } from "jest-environment-puppeteer";

const buildNuxt = async () => {
  const nuxt = new Nuxt(nuxtConfig);
  process.env.buildDir = nuxt.options.buildDir;

  await new Builder(nuxt).build();
  return nuxt;
};

module.exports = async jestConfig => {
  if (process.env.RE_BUILD) {
    const nuxt = await buildNuxt();
  }

  await setupvServer({
    command: `npm run dev`,
    launchTimeout: 200000,
    port: 3000,
  });

  await setupEnv(jestConfig);
};
