const fs = require('fs');

exports.dbCreateCollection = (collection, store = "./data/") => {
    if (!fs.existsSync(store)) {
        fs.mkdirSync(store)
    } 
    if (!fs.existsSync(store + collection)) {
        fs.mkdirSync(store+collection)
        fs.writeFileSync(store+collection+"/.indx", "0", 'utf8');
    } 
    return store + collection
}

exports.dbInsert = (dataInsert, collection, store = "./data/") => {

    this.dbCreateCollection (collection, store)
    let id = parseInt(fs.readFileSync(store+collection+"/.indx", 'utf-8')) + 1
    let directory = store+collection+"/"+id+".log";
    fs.writeFileSync(store+collection+"/.indx", id.toString(), 'utf8');

        try {
            fs.writeFileSync(directory, JSON.stringify(dataInsert), 'utf8');
            return {
                id: id,
                directory: directory
            }
                
        } catch (err) {
            if (err.code === 'ENOENT') {
                return [ {
                    code: err.code,
                    msj: "El directorio o archivo no existe2",
                } ]
            } else {
            
                return [ {
                    code: err,
                    msj: "ERRO EXEPTION",
                } ]
            }
        }     
    

}

exports.dbUpdate = (dataInsert, id, collection, store = "./data/") => {

    let directory = store+collection+"/"+id+".log";

    try {
        fs.accessSync(directory, fs.F_OK)
        try {
            fs.appendFileSync(directory, "\n"+JSON.stringify(dataInsert));
            return {
                id: id,
                directory: directory
            }
        } catch (err) {
            if (err.code === 'ENOENT') {
                return [ {
                    code: err.code,
                    msj: "El directorio o archivo no existe",
                } ]
            } else {
            
                return [ {
                    code: err,
                    msj: "ERRO EXEPTION",
                } ]
            }
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            return [ {
                code: err.code,
                msj: "El directorio o archivo no existe",
            } ]
        } else {
        
            return [ {
                code: err,
                msj: "ERRO EXEPTION",
            } ]
        }
    }
        
}

exports.dbGetData = (id, collection, store = "./data/") => {

    let directory = store+collection+"/"+id+".log";
    

    try {
        let response = fs.readFileSync(directory, 'utf-8').split("\n")
        let arrC = []
        response.forEach(r =>{
                arrC.push(JSON.parse(r))            
        })
        return arrC
    } catch (err) {
        if (err.code === 'ENOENT') {
            return [ {
                code: err.code,
                msj: "El directorio o archivo no existe",
            } ]
          } else {
            return [ {
                code: err,
                msj: "ERRO EXEPTION",
            } ]
          }
    }

}

exports.dbGetLatestFile = (collection, store = "./data/") => {

    let directory = store+collection+"/";

    try {

        let id = fs.readFileSync(directory+"/.indx", 'utf-8')

        return id

    } catch (err) {
        if (err.code === 'ENOENT') {
            return [ {
                code: err.code,
                msj: "El directorio o archivo no existe",
            } ]
          } else {
            return [ {
                code: err,
                msj: "ERRO EXEPTION",
            } ]
          }
    }

}