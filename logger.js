const fs = require('fs');

exports.logger = (directory, app, data) => {

    const hoy = new Date();
    const today = hoy.toISOString().slice(0, 10);
    const time = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
    let dataf = time+' > '+data+"\n";

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
