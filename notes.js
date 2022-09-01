const fs=require('fs')

const loadNotes = () =>{
    try{
        const dataJson=fs.readFileSync('notes.json').toString()
        const data=JSON.parse(dataJson)
        return data

    }catch(err){
        return []
    }
}

const addNote = (title,body) =>{
    const notes = loadNotes()
    const dupl = notes.filter((note)=> note.title===title)

    if(dupl.length===0){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log("New Note added")
    }else{
        console.log("Title already exists")
    }
    
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const dupl = notes.filter((note)=> note.title===title)
    if(dupl.length!=0){
        const Element = notes.filter((note) =>{
            if(note.title===title){
                return note
            }
        })
        const element = Element[0]
        const condition = (ele) => ele.title===element.title
        const indx = notes.findIndex(condition)
        notes.splice(indx,1)
        saveNotes(notes)

        console.log(`${element.title} removed successfully`)
    }else{
        console.log("No such note exists")
    }
}

const readNote = (title) =>{
    const notes=loadNotes()
    const dupl = notes.filter((note)=> note.title===title)
    if(dupl.length!=0){
        const element = notes.filter((note)=>{
            if(note.title===title){
                return note
            }
        })
        console.log(`Title: ${title}\nBody:  ${element[0].body}`)
    }else{
        console.log("No such note found")
    }
}

const listNote = () =>{
    const notes = loadNotes()
    console.log("Titles Of Notes are")
    for(let i=0;i<notes.length;i++){
        console.log(`Title ${i+1}: ${notes[i].title}`)
    }
}

const saveNotes = (notes) =>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNote:listNote
}