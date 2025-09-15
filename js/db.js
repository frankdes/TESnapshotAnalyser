var data = new Map();
var dbversion = 1;
var jsonDBList = ["econtrade"];
var fileDBList = ["code"];
var createDB = function (site) {
    if (jsonDBList.includes(site)) {
        return createJsonItemDB(site);
    }
    else {
        if (fileDBList.includes(site)) {
            return createFileItemDB(site);
        }
     
    }
}
var createJsonItemDB = function (site) {
    return new Promise(resolve => {

        var objectsDB = data.get(site);
        var request = self.indexedDB.open(site, dbversion);

        request.onerror = function (event) {
            console.log("indexdb not allowed");
            resolve(false);
        };

        request.onsuccess = function (event) {
            objectsDB.db = event.target.result;
            objectsDB.isReady = true;
            resolve(true);
        }
        request.onupgradeneeded = function (event) {
            objectsDB.db = event.target.result;
            var jsonitems = objectsDB.db.createObjectStore("jsonitems", { keyPath: "id" });
            jsonitems.transaction.oncomplete = function (event) {

            };


        }

    });
}
var createFileItemDB = function (site) {
    return new Promise(resolve => {

        var objectsDB = data.get(site);
        var request = self.indexedDB.open(site, dbversion);

        request.onerror = function (event) {
            console.log("indexdb not allowed");
            resolve(false);
        };

        request.onsuccess = function (event) {
            objectsDB.db = event.target.result;
            objectsDB.isReady = true;
            resolve(true);
        }
        request.onupgradeneeded = function (event) {
            objectsDB.db = event.target.result;
            var jsonitems = objectsDB.db.createObjectStore("files", { keyPath: "id" });
            jsonitems.transaction.oncomplete = function (event) {

            };


        }

    });
}
var saveArrayData = function (site, storename, key, items) {


    //  objectsDB
    return new Promise(resolve => {
        var obj = new Object();
        obj.id = key;
        obj.data = items;
        objectsDB = data.get(site);

        var objectStore = objectsDB.db.transaction(storename, "readwrite").objectStore(storename);

        var requestUpdate = objectStore.put(obj);
        requestUpdate.onerror = function (event) {

            resolve(false);
            // Do something with the error
        };
        requestUpdate.onsuccess = function (event) {
            // Success - the data is updated!
            resolve(true);
        };
    });
}
var saveArrayDataAsync = async function (site, storename, key, items) {
    if (!data.has(site)) {
        var objectsDB = new Object();
        objectsDB.site = site;
        objectsDB.isReady = false;
        objectsDB.lock = false;
        data.set(site, objectsDB);
        await createDB(site);
    }
    var result = await saveArrayData(site, storename, key, items);
    return result;

}
var clearStore = async function (cmd) {

    for (let i = 0; i < jsonDBList.length; ++i) {
        let site = jsonDBList[i];
        if (!data.has(site)) {
            var objectsDB = new Object();
            objectsDB.site = site;
            objectsDB.isReady = false;
            objectsDB.lock = false;
            data.set(site, objectsDB);
            await createDB(site);
        }
        objectsDB = data.get(site);
        
        const objectStore = objectsDB.db.transaction("jsonitems", "readwrite").objectStore("jsonitems"); 

        // Make a request to clear all the data out of the object store
        const objectStoreRequest = objectStore.clear();

        objectStoreRequest.onsuccess = (event) => {
            // report the success of our request
        
        };
    }
    for (let i = 0; i < fileDBList.length; ++i) {
        let site = fileDBList[i];
        if (!data.has(site)) {
            var objectsDB = new Object();
            objectsDB.site = site;
            objectsDB.isReady = false;
            objectsDB.lock = false;
            data.set(site, objectsDB);
            await createDB(site);
        }
        objectsDB = data.get(site);

        const objectStore = objectsDB.db.transaction("files", "readwrite").objectStore("files"); 

        // Make a request to clear all the data out of the object store
        const objectStoreRequest = objectStore.clear();

        objectStoreRequest.onsuccess = (event) => {
            // report the success of our request

        };
    }
   await sendtobrowser(cmd);
}
var getArrayData = function (site, storename, key) {


    return new Promise(resolve => {

        var objectsDB = data.get(site);
        if (objectsDB !== undefined && objectsDB !== null && objectsDB.db !== undefined && objectsDB.db !== null) {
            var objectStore = objectsDB.db.transaction(storename, "readonly").objectStore(storename);

            var request = objectStore.get(key);
            request.onerror = function (event) {
                resolve(null);
            };
            request.onsuccess = function (event) {

                if (event.target !== undefined && event.target !== null && event.target.result !== undefined && event.target.result !== null) {
                    resolve(event.target.result.data);
                }
                else {
                    resolve(null);
                }

            };
        }
        else {
            resolve(null);
        }


    });

}
var getArrayDataAsync = async function (site, storename, key) {
    if (!data.has(site)) {
        var objectsDB = new Object();
        objectsDB.site = site;
        objectsDB.isReady = false;
        objectsDB.lock = false;
        data.set(site, objectsDB);
        await createDB(site);
    }
    var result = await getArrayData(site, storename, key);
    return result;

}
var GetSingleItem = function (site, store, id) {


    return new Promise(resolve => {

        var objectsDB = data.get(site);
        if (objectsDB !== undefined && objectsDB !== null && objectsDB.db !== undefined && objectsDB.db !== null) {
            var objectStore = objectsDB.db.transaction(store, "readonly").objectStore(store);

            var request = objectStore.get(id);
            request.onerror = function (event) {
                resolve(null);
            };
            request.onsuccess = function (event) {

                if (event.target !== undefined && event.target !== null && event.target.result !== undefined && event.target.result !== null) {
                    resolve(event.target.result);
                }
                else {
                    resolve(null);
                }

            };
        }
        else {
            resolve(null);
        }
    });

}
var GetSingleItemAsync = async function (site, store, id) {
    if (!data.has(site)) {
        var objectsDB = new Object();
        objectsDB.site = site;
        objectsDB.isReady = false;
        objectsDB.lock = false;
        data.set(site, objectsDB);
        await createDB(site);
    }
    var result = await GetSingleItem(site, store, id);
    return result;

}
var deleteItemFromStore = async function (site, store, key) {


    return new Promise(resolve => {

        var objectsDB = data.get(site);
        if (objectsDB !== undefined && objectsDB !== null && objectsDB.db !== undefined && objectsDB.db !== null) {
            var request = objectsDB.db.transaction([store], "readwrite")
                .objectStore(store)
                .delete(key);
            request.onsuccess = function (event) {
                resolve(true);
            };

            request.onerror = function (event) {

                resolve(false);
            };
        }
        else {
            resolve(null);
        }
    });
}