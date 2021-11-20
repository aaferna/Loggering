const { DateTime } = require("luxon"),
    { dbCreateCollection, dbInsert, dbUpdate, dbGetLatestFile, dbGetData } = require('./modules/mdw')

exports.loggering = (app, data, directory = "./data/") => {

    let r = dbCreateCollection (app, directory)
    let idLog = 0
    let now = DateTime.local().c
    
    let postSave = {
        app: app,
        date: now,
        data: data
    }

    let id = parseInt(dbGetLatestFile(app))
    
        if(id != 0){
            let r = dbGetData(id, app).pop()
            if(r.code !== "ENOENT" && now.day == r.date.day){ idLog = id }
        }
            
        if(idLog != 0){ 
            dbUpdate(postSave, idLog, app) 
        } else {
            idLog = dbInsert(postSave, app).id
        }
    
}

