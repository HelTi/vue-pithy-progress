#!/usr/bin/env node
const shell = require('shelljs')

shell.exec('node --version')

function createLibExec(name) {
  return `npx vue-cli-service build --mode lib --target lib --no-clean --name ${name} ./src/components/${name}/index.vue`
}

let components = ['circle-progress', 'semi-circle-progress', 'progress-bar']

components.forEach(item => {
  shell.exec(createLibExec(item), function(code, stdout, stderr) {
    console.log('Program stderr:', stderr)
  })
})
