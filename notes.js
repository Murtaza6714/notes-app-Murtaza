const fs = require('fs')
const chalk = require('chalk')
const getnotes = () => {
    return 'get notes...'
}
const addnote = (title,body) => {
    const notes = loadnotes()
        const duplicatenote = notes.find((note) => note.title === title)

    if(!duplicatenote){
        notes.push({
            title: title,
            body: body
        })  
    savenotes(notes)
    console.log(chalk.bgGreen('new note added'))
    
}else{
    console.log(chalk.bgRed('note title taken!!'))
}
}

const removenotes = (title) => {
    const notes1= loadnotes()
    const notestokeep= notes1.filter((note) => note.title !== title)
    savenotes(notestokeep)
    if(notes1.length>notestokeep.length){
        console.log(chalk.green('Notes removed successfuly'))
    }else
         console.log(chalk.bgRed('no note removed'))
    
}
const readnotes = (title,body)=>{
    const notes= loadnotes()
    const findnote = notes.find((note) => note.title===title)
    if(findnote !== undefined){
        console.log(chalk.bgMagenta(findnote.title))
        console.log(findnote.body)
    }else{
        console.log(chalk.red('no note found '))
    }
}

const listnotes = (title) => {
    const notes = loadnotes()
    console.log(chalk.yellow('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
    
}
    
const savenotes= (notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync("notes.json",datajson)    
}

const loadnotes= () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    }catch(e){
        return []
    }
    
}

module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removenotes: removenotes,
    listnotes: listnotes,
    readnotes: readnotes
}