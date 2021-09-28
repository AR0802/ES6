const {mkdir} = require("fs").promises;

methods.MKCOL = async function(request) {
    let path = urltoPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    }
    catch(e) {
        if (e.code != "ENOENT") throw e;
        await mkdir(path);
        return {status: 204};
    }
    if (stats.isDirectory()) return {status: 204};
    else return {status: 400, body: "not a directory!"};
};