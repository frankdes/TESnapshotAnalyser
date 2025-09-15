var swLoadAllFiles = async function () {
    console.log("swLoadAllFiles");
    var objectsDB = new Object();
    objectsDB.site = "code";
    objectsDB.isReady = false;
    objectsDB.lock = false;
    data.set("code", objectsDB);

    await createDB("code");

    var toload = innitloadfiles.length;
    var loaddone = 0;
    innitloadfiles.forEach(async (path) => {
        var headerItems = new Headers();
        headerItems.append('Content-Type', 'application/octet-stream');
        await fetch(path,
            {
                method: 'GET',
                headers: headerItems,
            }

        ).then(response => response.text())
            .then(async (result) => {
                var pathparts = path.split("/");
                var key = pathparts.length === 2 ? GetAlphaNumeric(pathparts[1]) : GetAlphaNumeric(pathparts[0]);
                data.set(key, result);
                await saveArrayData("code", "files", key, result);
               

                ++loaddone;
                if (loaddone === toload) {

                    return true;
                }
            })
            .catch(e => {
                return false;
            });



    })


}
var installProcess = function (event) {
    console.log("installProcess");
    event.waitUntil(
        Promise.all([caches.open(cacheversion).then(function (cache) {
            installComplete = true;
            return cache.addAll([
                '/favicon.ico'
            ]);
        }), swLoadAllFiles()])
    );
}
var activateProcess = function (event) {
    var cacheAllowlist = [cacheversion];
    console.log("activateProcess");
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {

                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
}
var fetchProcessor = async function (event) {

    var url = event.request.url;
    console.log("requesting " + url);


    if (!url.includes('.')) {
        url = "index.html";
    }
    if (url.endsWith(".css") || url.endsWith(".json") || url.endsWith(".js") || url.endsWith(".html")) {
        var prm = new Promise(function (resolve, reject) {
            var parts = url.split('/');
            var id = parts[parts.length - 3] === "id" ? parts[parts.length - 2] : GetAlphaNumeric(parts[parts.length - 1]);
            var contentType = event.request.url.endsWith(".css") ? 'text/css' : event.request.url.endsWith(".json") ? 'application/json' : event.request.url.endsWith(".js") ? 'text/javascript' : 'text/html';
            if (self.data.has(id)) {

                var result = new Object();
                result.file = self.data.get(id);
                result.type = contentType;
                resolve(
                    result
                );
            }
            else {

                GetSingleItemAsync("code", "files", id).then(cssobj => {
                    if (cssobj && cssobj.data) {
                        self.data.set(id, cssobj.data);

                        if (url.endsWith(".json")) {
                            var obj = JSON.parse(cssobj.data);
                            if (url.endsWith("flowengines.json")) {
                                networkflow.set("flows", obj);
                            }
                            else {
                                flow.set("flows", obj);
                            }

                        }

                        var result = new Object();
                        result.file = cssobj.data;
                        result.type = contentType;
                        resolve(
                            result
                        );
                    }
                    else {
                        console.log(url);
                        console.log(id);
                        processPostRequest(event).then(result => {
                            resolve(
                                result
                            );
                        })

                        //reject(
                        //    null
                        //);
                    }
                });
            }
        });
        event.respondWith(prm.then(
            resultOK,
            resultError
        ));
    }
    else {
        var data = await processPostRequest(event);
        return data;
    }
}
var processPostRequest = async function (event) {
    try {
        var serverResponse = await fetch(event.request);

        return serverResponse;
    }
    catch { }
}
var messageProcess = async function (event) {

    var cmd = event.data;
    cmd.event = event;
  
    if (cmd.cmdtype !== undefined && self[cmd.cmdtype]) {
        if (self[cmd.cmdtype].constructor.name === "AsyncFunction") {
            await self[cmd.cmdtype](cmd);
        }
        else {
            self[cmd.cmdtype](cmd);
        }
    }

}
var saveCompareDS = async function (cmd) {
   
    let compareobj = cmd.compareobj;
    await saveArrayDataAsync("econtrade", "jsonitems", compareobj.id, compareobj);
    var jsfile = "";
    var cssfile = "";
    if (compareobj.setInnitScript) {
        jsfile = compareobj.innitScript;
    }
    var maxfieldindex = 0;
    compareobj.datasets.forEach(ds => {
        if (ds.setFilter) {
            jsfile = jsfile + `
                ` + ds.filter;
        }
        
        if (ds.fields && ds.fields.length > 0) {
            if (ds.fields.length > maxfieldindex) {
                maxfieldindex = ds.fields.length;
            }
            let css = `.grid### { display:grid; grid-template-columns:!!!; } .grid### div{  padding : 5px;  border:1px solid gray; align-content:center; }`.replaceAll('###', ds.id);
            let colsgap = ''
            ds.fields.forEach(fld => {
                colsgap = colsgap + "1fr" + " ";
                if (fld.setmethod === "2") {
                    jsfile = jsfile + `
                    ` + fld.script;
                }
            })
         
            colsgap = colsgap.trim();
            css = css.replace('!!!', colsgap);
            cssfile = cssfile + `
            ` + css;
        }


    });
    if (maxfieldindex > 0) {
        let fldCount = compareobj.datasets.length * maxfieldindex;

        let cols = "";
        for (let i = 0; i < fldCount; ++i) {
            cols = cols + "1fr" + " ";
        }

        let css = `.grid### { display:grid; grid-template-columns:!!!; } .grid### div{  padding : 5px;  border:1px solid gray; align-content:center; }`.replaceAll('###', compareobj.id);
        cols = cols.trim();
        css = css.replace('!!!', cols);
        cssfile = cssfile + `
            ` + css;
    }

    if (cssfile !== "") {
        let cssfilename = "grid###.css".replace('###', compareobj.id);
        let csskey = GetAlphaNumeric(cssfilename)
        data.set(csskey, cssfile);
        await saveArrayDataAsync("code", "files", csskey, cssfile);
    }
    if (jsfile !== "") {
        let jsfilename = "script###.js".replace('###', compareobj.id);
        let jskey = GetAlphaNumeric(jsfilename)
        data.set(jskey, jsfile);
        await saveArrayDataAsync("code", "files", jskey, jsfile);
    }

    if (compareobj.runAfterScript && compareobj.runAfterScript.length > 0) {

        for (let i = 0; i < compareobj.runAfterScript.length; ++i) {
            let s = compareobj.runAfterScript[i];
            let jsrunAftername = "script###.js".replace('###', s.id);
            let jsrunAfterkey = GetAlphaNumeric(jsrunAftername)
            data.set(jsrunAfterkey, s.script);
            await saveArrayDataAsync("code", "files", jsrunAfterkey, s.script);
        }


        

    }
    sendtobrowser(cmd);

}
var sendtobrowser = async function (cmd) {

    if (cmd.event) {
        let event = cmd.event;
        cmd.event = undefined;
        var client = await clients.get(event.source.id);
        if (client) {
           
            client.postMessage(cmd);
        }
        else {
            clients.matchAll().then((clientList) => {
                for (const client of clientList) {               
                    client.postMessage(cmd);
                }
            });
        }
    }

}
var resultOK = function (result) {

    return new Response(result.file, {
        headers: {
            'content-type': result.type,
        },
    })


}
var resultError = function (error, type) {
    return new Response("[]", {
        headers: {
            'content-type': 'application/json',
        },
    })
}
var getData = async function (cmd) {
    let passkey = cmd.passkey;
    let id = cmd.id;
    let country = cmd.country;
    let group = cmd.group;
    let dataset = cmd.dataset;
    var result = await getArrayDataAsync("econtrade", "jsonitems", id);
    if (result && cmd.country && cmd.group) {
        if (result.country !== cmd.country || result.group !== cmd.group) {
            result = undefined;
        }
    }


    if (!result) {
        const url = 'https://api.tradingeconomics.com/country/###?group=$$$'.replace('###', country).replace('$$$', group);
        var econdata = await getFromEconTrading(passkey, url);
        var fieldList = [];
        var fldLength = new Object();
        econdata.forEach(item => {
            for (const prop in item) {
                if (!fieldList.includes(prop)) {
                    fieldList.push(prop);
                    fldLength[prop] = item[prop].toString().length;
                }
                else {
                    if (fldLength[prop] < item[prop].toString().length) {
                        fldLength[prop] = item[prop].toString().length;
                    }
                }
            }

        });
        var dataobj = new Object();
        dataobj.items = econdata;
        dataobj.fieldList = fieldList;
        dataobj.fldLength = fldLength;
        dataobj.id = id;
        dataobj.country = country;
        dataobj.group = group;
        dataobj.dataset = dataset;
        await saveArrayDataAsync("econtrade", "jsonitems", id, dataobj);
        result = dataobj;
        let css = `.grid### { display:grid; grid-template-columns:!!!; } .grid### div{  padding : 5px;  border:1px solid gray; align-content:center; }`.replaceAll('###', id);
        let colsgap = ''
        for (const prop in fldLength) {
            colsgap = colsgap + fldLength[prop].toString() + "fr" + " ";
        }
        colsgap = colsgap.trim();
        css = css.replace('!!!', colsgap);
        cssfile = "grid###.css".replace('###',id);
        var csskey = GetAlphaNumeric(cssfile)
        data.set(csskey, css);
        await saveArrayDataAsync("code", "files", csskey, css);
    }
    cmd.data = result;
    sendtobrowser(cmd);

}
var getCompare = async function (cmd) {
    cmd.data = await getArrayDataAsync("econtrade", "jsonitems", cmd.id);
    sendtobrowser(cmd);
}

var getFromEconTrading = async function (passkey, url) {
    var econdata = undefined;
 
        const headers = { 'Authorization': passkey };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            econdata = JSON.parse(await response.text());
          
            //   console.log(data);
        } catch (error) {
            console.error(error);
        }


    return econdata;
}