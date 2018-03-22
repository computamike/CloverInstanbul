'use strict'

/**
 * converts a PHP clover XML file into an Istanbul compatable format.
 */

let program = require('commander')

program
  .version('0.1.0')
  .option('-I --input <path>', 'Path to the PHP XML reporting file.')
  .option('-O --output <path>', 'Path to write the new istanbul file.')
  
  .option('-p, --peppers', 'Add peppers')

  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv)

console.log('you ordered a pizza with:')
if (program.peppers) console.log('  - peppers')
if (program.pineapple) console.log('  - pineapple')
if (program.bbqSauce) console.log('  - bbq')
console.log('  - %s cheese', program.cheese)
