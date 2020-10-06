const notes = require('./notes.js') 
const chalk = require('chalk')
const yargs = require('yargs')
// const validator=require('validator')
//  const gettingnotes=getnotes()
// const sum= add(4,12)
// console.log(sum)
// console.log(chalk.blue.bgRed.bgGreen.inverse.bold.italic('gettingnotes'))
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
// console.log(process.argv[2])
// console.log(validator.isEmail('index@example.com'))
// console.log(validator.isURL('https/meadd.io'))
// const command = process.argv[2]
// console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
            
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'note body',
                demandOption: true,
                type: 'string'
            }
    },
    handler(argv){
        notes.addnote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder: {
            
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
},
    handler(argv){
        notes.removenotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing a new note',
    handler(){
        notes.listnotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a new note',
    builder: {
            
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }},
    handler(argv){
        notes.readnotes(argv.title)
    }
})
// console.log(yargs.argv)
// if(command ==='add'){
//     console.log('adding note')
// }else if(command === 'remove'){
//     console.log('removing note!!')
// }
 yargs.parse()