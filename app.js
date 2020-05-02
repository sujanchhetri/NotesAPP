const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
 
yargs.version('1.1.1')

//Adding cmd
yargs.command({
                                   command:'add',
                                   describe:'Add new note',
                                   builder:{
                                   title:{
                                   describe:'Note Title',
                                   demandOption:true,
                                   type:'string' 
                                   },
                                   body:{
                                   describe:'Note Body',
                                   demandOption:true,
                                   type:'string'                               
                                   }
                                   },
                                   handler: function(argv){
                                                                      notes.addNote(argv.title,argv.body)
}
}) 

//Removing cmd
yargs.command({
                                   command:'remove',
                                   describe:'Remove a note',
                                   builder:{
                                   title:{
                                   describe:'Note Title',
                                   demandOption:true,
                                   type:'string' 
                                   }                               
},
                                   handler: function(argv){
                                   notes.removeNote(argv.title)
}
})

//list cmd
yargs.command({
                                   command:'list',
                                   describe:'List the notes',
                                   handler: function(){
                                   notes.listNotes()
                                   }
})

//Reading cmd
yargs.command({
                                   command:'read',
                                   describe:'Read a note',
                                   builder:{
                                   title:{
                                   describe:'Note Title',
                                   demandOption:true,
                                   type:'string' 
                                   }
}, 
                                   handler: function(argv){
                                   notes.readNotes(argv.title)
                                   }
})


yargs.parse()
