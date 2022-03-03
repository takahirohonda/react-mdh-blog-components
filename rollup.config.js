/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
import css from 'rollup-plugin-import-css'
import renameNodeModules from 'rollup-plugin-rename-node-modules'
import rename from 'rollup-plugin-rename'
import { visualizer } from 'rollup-plugin-visualizer'

import pkg from './package.json'

/**
 * The build currently includes node_modules: https://github.com/rollup/rollup/issues/3684
 * isolateModules can't tell that node_modules is special
 * we include a vendor dir for this included module to ensure it gets included
 */

const nodeModulePlugins = [
  renameNodeModules('vendor'),
  rename({
    include: ['**/*.js'],
    map: (name) =>
      name
        .replace('node_modules', 'vendor')
        .replace('../../vendor', '../vendor'),
  }),
]

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), 'react/jsx-runtime'],
  plugins: [
    typescript({
      sourceMap: true,
      exclude: [
        'src/stories/**/**.*',
        '**/*.(test|spec|stories).(ts|tsx)',
        'src/setupTests.ts',
        'src/reportWebVitals.ts',
      ], // don't generate *.d.ts files
    }),
    resolve(),
    commonjs(),
    json(),
    css(),
    svgr({
      // process SVG to DOM Node or String. Default: false
      stringify: false,
    }),
    url(),
    ...nodeModulePlugins,
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
}
