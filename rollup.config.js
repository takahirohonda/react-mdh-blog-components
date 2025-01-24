/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import css from 'rollup-plugin-import-css'
import includePaths from 'rollup-plugin-includepaths'
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
    externals(),
    resolve(),
    commonjs(),
    typescript(),
    json(),
    css(),
    svgr({
      // process SVG to DOM Node or String. Default: false
      stringify: false,
    }),
    url(),
    image(),
    includePaths({ paths: ['src'] }),
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
}
