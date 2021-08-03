const fs = require('fs');

exports.loggering = (directory, app, data, timer = true) => {

    const hoy = new Date();
    const today = hoy.toISOString().slice(0, 10);
    const time = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
    if (timer == true){
        let dataf = time+' > '+data+"\n";
    } else {
        let dataf = data+"\n";
    }

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    } else {

        fs.access(directory+app+"-"+today+".log", fs.F_OK, (err) => {
            if (err) {
                fs.writeFile(directory+app+"-"+today+".log", dataf, function(err) {
                    if(err) return err;
                });
            } else {
                fs.appendFile(directory+app+"-"+today+".log", dataf, function (err) {
                    if (err) return err;
                });
            }
        })

        return dataf
    }
    
}

