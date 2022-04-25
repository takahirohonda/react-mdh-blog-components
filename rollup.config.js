/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import css from 'rollup-plugin-import-css'
import externals from 'rollup-plugin-node-externals'
import { visualizer } from 'rollup-plugin-visualizer'

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
  plugins: [
    typescript({
      exclude: [
        'src/stories/**/**.*',
        '**/*.(test|spec|stories).(ts|tsx)',
        'src/setupTests.ts',
        'src/reportWebVitals.ts',
      ], // don't generate *.d.ts files - can move to tsconfig exclude section.
    }),
    externals(),
    resolve(),
    commonjs(),
    json(),
    css(),
    svgr({
      // process SVG to DOM Node or String. Default: false
      stringify: false,
    }),
    url(),
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
}
