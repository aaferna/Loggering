const solar = require("solardb-core")
const { DateTime } = require("luxon");

exports.loggering = (app, data, directory = null) => {

    let r = solar.dbCreateCollection (app, directory)
    let idLog = 0
    let now = DateTime.local().c
    
    let postSave = {
        date: now,
        data: data
    }

    let id = parseInt(solar.dbGetLatestFile(app))
    
        if(id != 0){
            let r = solar.dbGetData(id, app).pop()
            if(r.code !== "ENOENT" && now.day == r.date.day){ idLog = id }
        }
            
        if(idLog != 0){ 
            solar.dbUpdate(postSave, idLog, app) 
        } else {
            idLog = solar.dbInsert(postSave, app).id
        }
    
}

