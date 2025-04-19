const fs = require('fs')

fs.mkdir('Expresscode' , (err)=>{
   if(err)
    console.error(err)
   
    else
    console.log('directory created');

})

fs.rmdir('Expresscode' , (err)=>{
    if(err)
        console.error(err)
    else
        console.log('directory remove')
})

