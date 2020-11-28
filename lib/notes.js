fs = require('fs');
const path = require('path');



const syncNotes = (notesArray) =>{
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray , null, 2)
      );
    
};


module.exports = syncNotes;