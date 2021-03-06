import ascii from 'rollup-plugin-ascii'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  extend: true,
  plugins: [
    resolve(),
    ascii(),
    commonjs()
  ]
}
