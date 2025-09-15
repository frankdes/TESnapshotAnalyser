var swfile = '/sw.js';
var pageReloadPath = '/index.html';
var err = undefined;
var key = undefined;
var datasetcount = 0;
var comparedatasetcount = 0;
var comparelinks = 0;
var data = new Map();
var loadRawData = -1;
var loadCompare = -1;
var refresh = false;
var configReload = false;
var sectionhtml = `<header class='flexrow'><div><label>data set</label><input id='dataset###' /></div><div><label for='country###'>Country</label><select  id='country###'>
<option value='Afghanistan'>Afghanistan</option>
<option value='Albania'>Albania</option>
<option value='Algeria'>Algeria</option>
<option value='American Samoa'>American Samoa</option>
<option value='Andorra'>Andorra</option>
<option value='Angola'>Angola</option>
<option value='Antigua and Barbuda'>Antigua and Barbuda</option>
<option value='Argentina'>Argentina</option>
<option value='Armenia'>Armenia</option>
<option value='Aruba'>Aruba</option>
<option value='Australia'>Australia</option>
<option value='Austria'>Austria</option>
<option value='Azerbaijan'>Azerbaijan</option>
<option value='Bahamas'>Bahamas</option>
<option value='Bahrain'>Bahrain</option>
<option value='Bangladesh'>Bangladesh</option>
<option value='Barbados'>Barbados</option>
<option value='Belarus'>Belarus</option>
<option value='Belgium'>Belgium</option>
<option value='Belize'>Belize</option>
<option value='Benin'>Benin</option>
<option value='Bermuda'>Bermuda</option>
<option value='Bhutan'>Bhutan</option>
<option value='Bolivia'>Bolivia</option>
<option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
<option value='Botswana'>Botswana</option>
<option value='Brazil'>Brazil</option>
<option value='Brunei'>Brunei</option>
<option value='Bulgaria'>Bulgaria</option>
<option value='Burkina Faso'>Burkina Faso</option>
<option value='Burundi'>Burundi</option>
<option value='Cambodia'>Cambodia</option>
<option value='Cameroon'>Cameroon</option>
<option value='Canada'>Canada</option>
<option value='Cape Verde'>Cape Verde</option>
<option value='Cayman Islands'>Cayman Islands</option>
<option value='Central African Republic'>Central African Republic</option>
<option value='Chad'>Chad</option>
<option value='Channel Islands'>Channel Islands</option>
<option value='Chile'>Chile</option>
<option value='China'>China</option>
<option value='Colombia'>Colombia</option>
<option value='Comoros'>Comoros</option>
<option value='Congo'>Congo</option>
<option value='Costa Rica'>Costa Rica</option>
<option value='Croatia'>Croatia</option>
<option value='Cuba'>Cuba</option>
<option value='Cyprus'>Cyprus</option>
<option value='Czech Republic'>Czech Republic</option>
<option value='Denmark'>Denmark</option>
<option value='Djibouti'>Djibouti</option>
<option value='Dominica'>Dominica</option>
<option value='Dominican Republic'>Dominican Republic</option>
<option value='East Timor'>East Timor</option>
<option value='Ecuador'>Ecuador</option>
<option value='Egypt'>Egypt</option>
<option value='El Salvador'>El Salvador</option>
<option value='Equatorial Guinea'>Equatorial Guinea</option>
<option value='Eritrea'>Eritrea</option>
<option value='Estonia'>Estonia</option>
<option value='Ethiopia'>Ethiopia</option>
<option value='Euro area'>Euro area</option>
<option value='European Union'>European Union</option>
<option value='Faroe Islands'>Faroe Islands</option>
<option value='Fiji'>Fiji</option>
<option value='Finland'>Finland</option>
<option value='France'>France</option>
<option value='French Polynesia'>French Polynesia</option>
<option value='Gabon'>Gabon</option>
<option value='Gambia'>Gambia</option>
<option value='Georgia'>Georgia</option>
<option value='Germany'>Germany</option>
<option value='Ghana'>Ghana</option>
<option value='Greece'>Greece</option>
<option value='Greenland'>Greenland</option>
<option value='Grenada'>Grenada</option>
<option value='Guam'>Guam</option>
<option value='Guatemala'>Guatemala</option>
<option value='Guinea'>Guinea</option>
<option value='Guinea Bissau'>Guinea Bissau</option>
<option value='Guyana'>Guyana</option>
<option value='Haiti'>Haiti</option>
<option value='Honduras'>Honduras</option>
<option value='Hong Kong'>Hong Kong</option>
<option value='Hungary'>Hungary</option>
<option value='Iceland'>Iceland</option>
<option value='India'>India</option>
<option value='Indonesia'>Indonesia</option>
<option value='Iran'>Iran</option>
<option value='Iraq'>Iraq</option>
<option value='Ireland'>Ireland</option>
<option value='Isle of Man'>Isle of Man</option>
<option value='Israel'>Israel</option>
<option value='Italy'>Italy</option>
<option value='Ivory Coast'>Ivory Coast</option>
<option value='Jamaica'>Jamaica</option>
<option value='Japan'>Japan</option>
<option value='Jordan'>Jordan</option>
<option value='Kazakhstan'>Kazakhstan</option>
<option value='Kenya'>Kenya</option>
<option value='Kiribati'>Kiribati</option>
<option value='Kosovo'>Kosovo</option>
<option value='Kuwait'>Kuwait</option>
<option value='Kyrgyzstan'>Kyrgyzstan</option>
<option value='Laos'>Laos</option>
<option value='Latvia'>Latvia</option>
<option value='Lebanon'>Lebanon</option>
<option value='Lesotho'>Lesotho</option>
<option value='Liberia'>Liberia</option>
<option value='Libya'>Libya</option>
<option value='Liechtenstein'>Liechtenstein</option>
<option value='Lithuania'>Lithuania</option>
<option value='Luxembourg'>Luxembourg</option>
<option value='Macau'>Macau</option>
<option value='Macedonia'>Macedonia</option>
<option value='Madagascar'>Madagascar</option>
<option value='Malawi'>Malawi</option>
<option value='Malaysia'>Malaysia</option>
<option value='Maldives'>Maldives</option>
<option value='Mali'>Mali</option>
<option value='Malta'>Malta</option>
<option value='Marshall Islands'>Marshall Islands</option>
<option value='Mauritania'>Mauritania</option>
<option value='Mauritius'>Mauritius</option>
<option value='Mayotte'>Mayotte</option>
<option value='Mexico'>Mexico</option>
<option value='Micronesia'>Micronesia</option>
<option value='Moldova'>Moldova</option>
<option value='Monaco'>Monaco</option>
<option value='Mongolia'>Mongolia</option>
<option value='Montenegro'>Montenegro</option>
<option value='Morocco'>Morocco</option>
<option value='Mozambique'>Mozambique</option>
<option value='Myanmar'>Myanmar</option>
<option value='Namibia'>Namibia</option>
<option value='Nepal'>Nepal</option>
<option value='Netherlands'>Netherlands</option>
<option value='Netherlands Antilles'>Netherlands Antilles</option>
<option value='New Caledonia'>New Caledonia</option>
<option value='New Zealand'>New Zealand</option>
<option value='Nicaragua'>Nicaragua</option>
<option value='Niger'>Niger</option>
<option value='Nigeria'>Nigeria</option>
<option value='North Korea'>North Korea</option>
<option value='Northern Mariana Islands'>Northern Mariana Islands</option>
<option value='Norway'>Norway</option>
<option value='Oman'>Oman</option>
<option value='Pakistan'>Pakistan</option>
<option value='Palau'>Palau</option>
<option value='Palestine'>Palestine</option>
<option value='Panama'>Panama</option>
<option value='Papua New Guinea'>Papua New Guinea</option>
<option value='Paraguay'>Paraguay</option>
<option value='Peru'>Peru</option>
<option value='Philippines'>Philippines</option>
<option value='Poland'>Poland</option>
<option value='Portugal'>Portugal</option>
<option value='Puerto Rico'>Puerto Rico</option>
<option value='Qatar'>Qatar</option>
<option value='Republic of the Congo'>Republic of the Congo</option>
<option value='Romania'>Romania</option>
<option value='Russia'>Russia</option>
<option value='Rwanda'>Rwanda</option>
<option value='Samoa'>Samoa</option>
<option value='San Marino'>San Marino</option>
<option value='Sao Tome and Principe'>Sao Tome and Principe</option>
<option value='Saudi Arabia'>Saudi Arabia</option>
<option value='Senegal'>Senegal</option>
<option value='Serbia'>Serbia</option>
<option value='Seychelles'>Seychelles</option>
<option value='Sierra Leone'>Sierra Leone</option>
<option value='Singapore'>Singapore</option>
<option value='Slovakia'>Slovakia</option>
<option value='Slovenia'>Slovenia</option>
<option value='Solomon Islands'>Solomon Islands</option>
<option value='Somalia'>Somalia</option>
<option value='South Africa'>South Africa</option>
<option value='South Korea'>South Korea</option>
<option value='South Sudan'>South Sudan</option>
<option value='Spain'>Spain</option>
<option value='Sri Lanka'>Sri Lanka</option>
<option value='St Kitts and Nevis'>St Kitts and Nevis</option>
<option value='St Lucia'>St Lucia</option>
<option value='St Vincent and the Grenadines'>St Vincent and the Grenadines</option>
<option value='Sudan'>Sudan</option>
<option value='Suriname'>Suriname</option>
<option value='Swaziland'>Swaziland</option>
<option value='Sweden'>Sweden</option>
<option value='Switzerland'>Switzerland</option>
<option value='Syria'>Syria</option>
<option value='Taiwan'>Taiwan</option>
<option value='Tajikistan'>Tajikistan</option>
<option value='Tanzania'>Tanzania</option>
<option value='Thailand'>Thailand</option>
<option value='Togo'>Togo</option>
<option value='Tonga'>Tonga</option>
<option value='Trinidad and Tobago'>Trinidad and Tobago</option>
<option value='Tunisia'>Tunisia</option>
<option value='Turkey'>Turkey</option>
<option value='Turkmenistan'>Turkmenistan</option>
<option value='Uganda'>Uganda</option>
<option value='Ukraine'>Ukraine</option>
<option value='United Arab Emirates'>United Arab Emirates</option>
<option value='United Kingdom'>United Kingdom</option>
<option value='United States'>United States</option>
<option value='Uruguay'>Uruguay</option>
<option value='Uzbekistan'>Uzbekistan</option>
<option value='Vanuatu'>Vanuatu</option>
<option value='Venezuela'>Venezuela</option>
<option value='Vietnam'>Vietnam</option>
<option value='Virgin Islands'>Virgin Islands</option>
<option value='West Bank and Gaza'>West Bank and Gaza</option>
<option value='World'>World</option>
<option value='Yemen'>Yemen</option>
<option value='Zambia'>Zambia</option>
<option value='Zimbabwe'>Zimbabwe</option>
    </select></div><div><label  for='group###'>Group</label><select id='group###'>
     <option value='health'>health</option>
    <option value='market'>market</option>
      <option value='taxes'>taxes</option>
         <option value='gdp'>gdp</option>
          <option value='housing'>housing</option>
           <option value='trade'>trade</option>
<option value='climate'>climate</option>
<option value='labour'>labour</option>
<option value='overview'>overview</option>
<option value='prices'>prices</option>
<option value='government'>government</option>
<option value='consumer'>consumer</option>
<option value='business'>business</option>
<option value='money'>money</option>
    </select></div><button id='###' >load</button></header><article   id='rawdata###'>
    <section   class='grid###'   id='datagrid###'  ></section>
    <section     id='page###'  ></section>
    </article>`
var removeAllChildElements = function (elem) {

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
var createHtmlElement = function (item) {
    
    const elem = document.createElement(item.tagType);
    if (item.attributes !== undefined && item.attributes !== null) {
        item.attributes.forEach(attr => { elem.setAttribute(attr.name, attr.value); });
    }

    if (item.hasText) {
        const node = document.createTextNode(item.text);
        elem.appendChild(node);
    }
  
    return elem;

}
var createDiv = function (parentElem, divId) {
    let div = new Object();
    div.tagType = "div";
    div.attributes = [];
    let attr = new Object();
    attr.name = "id";
    attr.value = divId;
    div.attributes.push(attr);
    let divelem = createHtmlElement(div);
    parentElem.append(divelem);
    return divelem;
}
var createDivPrePend = function (parentElem, divId) {
    let div = new Object();
    div.tagType = "div";
    div.attributes = [];
    let attr = new Object();
    attr.name = "id";
    attr.value = divId;
    div.attributes.push(attr);
    let divelem = createHtmlElement(div);
    parentElem.prepend(divelem);
    return divelem;
}

var AddButton = function (parentElem,id, title, onclickmethod) {
    let b = Object();
    b.tagType = "button";
    b.attributes = [];
    let attr = new Object();
    attr.name = "onclick";
    attr.value = onclickmethod;
    b.attributes.push(attr);
    attr = new Object();
    attr.name = "id";
    attr.value = id;
    b.attributes.push(attr);
    b.hasText = true;
    b.text = title;
    parentElem.append(createHtmlElement(b));
}
var showDiv = function (divElem) {
    divElem.classList.remove("collapsediv");
    divElem.classList.remove("hidediv");
    divElem.classList.add("showdiv");
}
var collapseDiv = function (divElem) {
    divElem.classList.remove("showdiv");
    divElem.classList.remove("hidediv");
    divElem.classList.add("collapsediv");
}
var hideDiv = function (divElem) {
    divElem.classList.remove("showdiv");
    divElem.classList.remove("collapsediv");
    divElem.classList.add("hidediv");
}
var processServiceMessage = async function (cmd) {
   
    if (cmd.callback !== undefined && self[cmd.callback]) {

       
        if (self[cmd.callback].constructor.name === "AsyncFunction") {

            valid = await self[cmd.callback](cmd);
        }
        else {
            valid = self[cmd.callback](cmd);
        }
    }

}
var checkSetServiceWorker = function () {

    if ('serviceWorker' in navigator) {
        if (!navigator.serviceWorker.controller) {
            navigator.serviceWorker.register(swfile, { scope: '/' }).then(function (reg) {

                window.location = window.location.href;// pageReloadPath;

            }).catch(function (error) {

                document.getElementsByTagName("body")[0].innerHTML = "<h2>Please refresh browser</h2>";
            });
        }
        else {

            navigator.serviceWorker.addEventListener('message', function (event) {

                processServiceMessage(event.data);
            });

            startInnitLoad();
        }
    }
    else {

        document.getElementsByTagName("body")[0].innerHTML = "<h2>This website cannot work in this browser</h2>";
    }

}
var startInnitLoad = function () {
    if (!key) {
        key = localStorage.getItem("key");
        if (!key) {
            DoLoadKey();
        }
        else {
            InnitDisplay();
        }
    }
}
var DoLoadKey = function () {
    document.getElementsByTagName('body')[0].innerHTML = "<div><form class='flexrowwithgap'><b>Enter Key</b><input id='key' required /><button class='minwidth100' type='submit' onclick='setkey()' >Save</button></form><div>"
}
var InnitDisplay = function () {
    refresh = false;
    document.getElementsByTagName('body')[0].innerHTML = "<header class='flexrow' id='toolbar'></header><article id='main'></article><footer id='footer'></footer>";
    setToolBar();
    checkLoadRawData();
}
var checkLoadRawDataFromConfig = function () {
    var rawdataliststr = localStorage.getItem("rawdatalist");
    if (rawdataliststr) {
        refresh = true;
        loadRawData++;
        var rawdata = JSON.parse(rawdataliststr);
        if (loadRawData < rawdata.length) {
            addsection(rawdata[loadRawData]);
        }
        else {
            loadRawData = -1;
            checkRunCompare();
        }

    }

}
var checkRunCompare = function () {
   
    let comparedataliststr = localStorage.getItem("comparedatalist");
    if (comparedataliststr) {
        loadCompare++;
        comparedatalist = JSON.parse(comparedataliststr);
        comparedatalist.forEach(c => {
            let compareObj = data.get(c);
            setCompare(compareObj);
            GenerateComparisonDS(compareObj.id);


        });
    }
    configReload = false;
}

var checkLoadRawData = function () {
    var rawdataliststr = localStorage.getItem("rawdatalist");
    if (rawdataliststr) {
        refresh = true;
        loadRawData++;
        var rawdata = JSON.parse(rawdataliststr);
        if (loadRawData < rawdata.length ) {
            addsection(rawdata[loadRawData]);
        }
        else {
            loadRawData = -1;
            checkLoadCompare();
        }

    }
    
}


var checkLoadCompare = function () {

    let comparedataliststr = localStorage.getItem("comparedatalist");
    if (comparedataliststr) {
        loadCompare++;
        comparedatalist = JSON.parse(comparedataliststr);
        if (loadCompare < comparedatalist.length) {
            LoadCompareData(comparedatalist[loadCompare]);
        }
        else {
            loadCompare = -1;
        }
    }
}
var setkey = function () {
    var keyinput = document.getElementById('key');
    if (keyinput.validity.valid) {
        localStorage.setItem("key", keyinput.value);
        startInnitLoad();
    }
}
var setToolBar = function () {
    var toolbar = document.getElementById("toolbar");
    toolbar.innerHTML = "<div><button onclick='addrawdata()'>Add Raw data</button></div><div><button onclick='addCompare()'>Compare Data</button><button onclick='showConfig()'>Get Config</button><button onclick='clearData()'>Clear data</button></div>"
}
var clearData = function () {
    key = undefined;
    localStorage.clear();
    var cmd = new Object();
    cmd.cmdtype = "clearStore";
    cmd.callback = "startInnitLoad";
  
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(cmd);
    }

}

var showConfig = function () {

    let config = new Object();
    config.rawdataRequest = [];
    config.compareObject = [];
    var rawdataliststr = localStorage.getItem("rawdatalist");
    if (rawdataliststr) {
        let rawdatalist = JSON.parse(rawdataliststr);
        rawdatalist.forEach(r => {
            let rawObject = data.get(r);
            let request = new Object();
            request.id = rawObject.id;
            request.country = rawObject.country;
            request.group = rawObject.group;
            request.dataset = rawObject.dataset;
            config.rawdataRequest.push(request);
        });
    }

    let comparedataliststr = localStorage.getItem("comparedatalist");
    if (comparedataliststr) {
        comparedatalist = JSON.parse(comparedataliststr);
        comparedatalist.forEach(c => {
            let compareObj = data.get(c);
            let cItem = new Object();
            cItem.id = compareObj.id;
            cItem.setInnitScript = compareObj.setInnitScript;
            cItem.innitScript = compareObj.innitScript;
            cItem.title = compareObj.title;
            cItem.datasets = [];
            cItem.runAfterScript = [];
            compareObj.datasets.forEach(ds => {
                cDS = new Object();
                cDS.id = ds.id;
                cDS.title = ds.title;
                cDS.parentid = ds.parentid;
                cDS.setFilter = ds.setFilter;
                cDS.filter = ds.filter;
                cDS.fieldCount = ds.fieldCount;
                cDS.datasetid = ds.datasetid;
                cDS.name = ds.name;
                cDS.fields = [];
                ds.fields.forEach(f => {
                    let fld = new Object();
                    fld.id = f.id;
                    fld.parentid = f.parentid;
                    fld.setmethod = f.setmethod;
                    fld.index = f.index;
                    fld.title = f.title;
                    fld.name = f.name;
                    fld.script = f.script;
                    cDS.fields.push(fld);

                })
                cItem.datasets.push(cDS);

            });
            if (compareObj.runAfterScript && compareObj.runAfterScript.length > 0) {
                compareObj.runAfterScript.forEach(ras => {
                    let rasObj = new Object();
                    rasObj.id = ras.id;
                    rasObj.parentid = ras.parentid;
                    rasObj.order = ras.order;
                    rasObj.script = ras.script;
                    cItem.runAfterScript.push(rasObj);
                });
            }
            config.compareObject.push(cItem);
        });

    }

    let configdiv = document.getElementById("configdiv");
    if (configdiv) {
        configdiv.remove();
    }
    let mainElem = document.getElementById("main");
    configdiv = createDivPrePend(mainElem, "configdiv");

    let jsscript = new Object();
    jsscript.tagType = "textarea";
    jsscript.attributes = [];
    let attr = new Object();
    attr.name = 'id';
    attr.value = "configarea"
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'cols';
    attr.value = configdiv.offsetWidth < 600 ? "50" : "100";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'rows';
    attr.value = "10";
    jsscript.attributes.push(attr);
    let jsscriptElem = createHtmlElement(jsscript);
    configdiv.append(jsscriptElem);
    jsscriptElem.value = JSON.stringify(config);

    jsscriptElem.addEventListener("change", (e) => {
        config = JSON.parse(e.target.value);
        if (config.rawdataRequest && config.rawdataRequest.length > 0) {
            let rawidlist = [];
            config.rawdataRequest.forEach(raw => {
                rawidlist.push(raw.id);
                data.set(raw.id, raw);
            });

            localStorage.setItem("rawdatalist", JSON.stringify(rawidlist));
        }
        if (config.compareObject && config.compareObject.length > 0) {
            let cdList = [];
            config.compareObject.forEach(item => {
                cdList.push(item.id);
                data.set(item.id, item);
            });

            localStorage.setItem("comparedatalist", JSON.stringify(cdList));
        }


    });

    let runB = new Object();
    runB.tagType = "button";
    runB.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = "configrun";
    runB.attributes.push(attr);
    runB.hasText = true;
    runB.text = "run";
    let runBElem = createHtmlElement(runB);
    configdiv.append(runBElem);
    runBElem.addEventListener("click", (e) => {
        configReload = true;
        document.getElementsByTagName('body')[0].innerHTML = "<header class='flexrow' id='toolbar'></header><article id='main'></article><footer id='footer'></footer>";
        setToolBar();
        checkLoadRawDataFromConfig();
    })


}
var addSVGraph = function () {

    let obj = new Object();
    obj.tagType = "svg";
    obj.attributes = new Object();
    obj.strokewidth = "1";
    var gid = GuidIDStr();
    var section = new Object();
    section.tagType = "section";
    section.attributes = [];
    var attr = new Object();
    attr.name = 'id';
    attr.value = 'section' + gid;
    section.attributes.push(attr);
    obj.elem = createHtmlElement(section);
    mainElem = document.getElementById("main");
    mainElem.append(obj.elem);
    obj.attributes.parentId = gid;
    obj.attributes.id = "svgroot";
    obj.attributes.version = "2";
    obj.attributes.stroke = "black";
    obj.attributes.width = "100%";
    obj.attributes.height = "450";
    createSVGTag(obj);
    createGtag();
    createXaxis(400, 40, 0, 266, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], 20);
    createYaxis(400, 40, 0, 0, getLegendsArray(-1,2), -30);
    barChart([{ x: 100, y: 10, w: 10, xoffset: -5 }, { x: 200, y: 20, w: 10, xoffset: -5 }, { x: 300, y: 50, w: 10, xoffset: -5 }], "red");
    let gtagElem = document.getElementById('gtag')
    gtagElem.setAttribute("transform", "translate(60,0)");

   // createSVGText(500, 1020, "hello");
  //  let gtagElem = document.getElementById('gtag')
 //   gtagElem.setAttribute("transform", "translate(500,0)");
  //  gtagElem.setAttribute("transform", "scale(0.5,0.5)")
  //  let rootElem = document.getElementById('svgroot')
   // rootElem.setAttribute("transform", "scale(0.5,0.5)")


}
var addrawdata = function () {

    refresh = false;
    var gid = GuidIDStr();
    var section = new Object();
    section.tagType = "section";
    section.attributes = [];
    var attr = new Object();
    attr.name = 'id';
    attr.value = 'section' + gid;
    section.attributes.push(attr);
    var elem = createHtmlElement(section);
    document.getElementById('main').append(elem);
    datasetcount++;
    document.getElementById('section' + gid).innerHTML = sectionhtml.replaceAll('###', gid);
    document.getElementById('dataset' + gid).value = "Dataset" + datasetcount.toString();
    document.getElementById(gid).addEventListener("click", (event) => {
        LoadData(event.target.id);

    })
}
var addsection = function (gid) {
   
    var section = new Object();
    section.tagType = "section";
    section.attributes = [];
    var attr = new Object();
    attr.name = 'id';
    attr.value = 'section' + gid;
    section.attributes.push(attr);
    var elem = createHtmlElement(section);
    document.getElementById('main').append(elem)

    datasetcount++;
   
    document.getElementById('section' + gid).innerHTML = sectionhtml.replaceAll('###', gid);
    document.getElementById('dataset' + gid).value = "Dataset" + datasetcount.toString();
    document.getElementById(gid).addEventListener("click", (event) => {
        LoadData(event.target.id);

    });
    LoadData(gid);
}
var LoadData = function (id) {
   
    var country = document.getElementById('country' + id).value

    var group = document.getElementById('group' + id).value

    var dataset = document.getElementById('dataset' + id).value
    var cmd = new Object();
    cmd.cmdtype = "getData";
    cmd.callback = "displaydata";
    if (!refresh) {
        cmd.group = group;
        cmd.country = country;
        cmd.dataset = dataset;
    }
    else {
        if (configReload) {
            let raw = data.get(id);
            cmd.group = raw.group;
            cmd.country = raw.country;
            cmd.dataset = raw.dataset;
        }
    }
    cmd.passkey = key;
    cmd.id = id;
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(cmd);
    }

}
var LoadCompareData = function (id) {

    var cmd = new Object();
    cmd.cmdtype = "getCompare";
    cmd.callback = "reSetCompare";
    cmd.id = id;
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(cmd);
    }

}

var displaydata = function (cmd) {
    var rawdatalist = [];
    var rawdataliststr =  localStorage.getItem("rawdatalist");

    if (rawdataliststr) {
        rawdatalist = JSON.parse(rawdataliststr);
    }
    if (!rawdatalist.includes(cmd.id)) {
        rawdatalist.push(cmd.id);
        localStorage.setItem("rawdatalist", JSON.stringify(rawdatalist));
    }
    data.set(cmd.id, cmd.data);
    var csslink = new Object();
    csslink.tagType = "link"
    csslink.attributes = [];
    let attr = new Object();
    attr.name = "id";
    attr.value = "grid" + cmd.id;
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "rel";
    attr.value = "stylesheet";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "href";
    attr.value = "grid" + cmd.id + ".css";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "rendersectiongrid('" + cmd.id + "')" ;
    csslink.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(csslink));

}
var renderRawDataPage = function (id) {
    let pageinfo = getPageInfo(id);
    let obj = data.get(id);
    var header = "";
    obj.fieldList.forEach(fld => {
        header = header + "<div><h3>###</h3></div>".replace('###', fld);
    });
    var body = "";
    let start = (pageinfo.pageNo - 1) * pageinfo.pageSize;
    if (start < obj.items.length) {
        let end = start + pageinfo.pageSize
        let items = obj.items.slice(start, end);

        items.forEach(item => {

            obj.fieldList.forEach(fld => {
                if (item[fld]) {

                    body = body + "<div>###</div>".replace('###', item[fld]);
                }
                else {
                    body = body + "<div></div>"
                }
            });
        });
        document.getElementById("datagrid" + id).innerHTML = header + body;
    }
}
/*
var reSetPageSize = function (id, pageSize) {
    let pageinfo = getPageInfo(id);
    let start = (pageinfo.pageNo - 1) * pageinfo.pageSize;
    pageinfo.pageNo = Math.ceil( start /Number( pageSize));
    if (pageinfo.pageNo < 1) {
        pageinfo.pageNo = 1;
    }
    pageinfo.pageSize = Number(pageSize);
    localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));
    renderRawDataPage(id);
    renderPaging(id);

}
var goToPage = function (id, pageNo) {
    let pageinfo = getPageInfo(id);
    pageinfo.pageNo = pageNo;
    localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));
    renderRawDataPage(id);
    renderPaging(id);
}
var getPageInfo = function (id) {
    let pageinfo = JSON.parse(localStorage.getItem(id + "pageinfo"));
    pageinfo.pageSize = Number(pageinfo.pageSize);
    pageinfo.pageNo = Number(pageinfo.pageNo);
   
    pageinfo.itemCount = Number(pageinfo.itemCount);
    return pageinfo;
}
var renderPaging = function (id) {
    let pageinfo = getPageInfo(id);
    let cnt = pageinfo.itemCount / pageinfo.pageSize;
    if (cnt * pageinfo.pageSize < pageinfo.itemCount) {
        cnt++;
    }
    let pageHtml = '';
    for (let i = 0; i < cnt; ++i) {
        let number = i + 1;
        if (number !== pageinfo.pageNo) {
            pageHtml = pageHtml + `<button class='pageButton' onclick=goToPage('!!!',###)>###</button>`.replace('!!!', id).replaceAll('###', number);
        }
        else {
            pageHtml = pageHtml + `<button class='pageButtonCurrent' >###</button>`.replace('###', number);
        }

    }

    pageHtml = `<div class='pageFlex'><select  id='pagesize###'>
    <option>5</option>
    <option>10</option>
     <option>20</option>
    </select>`.replace('###',id) + pageHtml + '</div>';

    document.getElementById("page" + id).innerHTML = pageHtml;
    pageSizeElem = document.getElementById("pagesize" + id);
    pageSizeElem.value = pageinfo.pageSize;
    pageSizeElem.addEventListener('change', (event) => { reSetPageSize(id, event.target.value); });
}

*/
var rendersectiongridBU = function (id) {
    
    let obj = data.get(id);
    let pageinfo = new Object();
    pageinfo.pageSize = 5;
    pageinfo.pageNo = 1;
    pageinfo.pageSizeOptions = [5, 10, 20];
    pageinfo.itemCount = obj.items.length;
    let pageinfoStr = localStorage.getItem(id + "pageinfo");
    if (pageinfoStr) {
        pageinfo = JSON.parse(pageinfoStr);
    }
    else {
        localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));
    }
    document.getElementById('dataset' + id).value = obj.dataset;
    document.getElementById('country' + id).value = obj.country;
    document.getElementById('group' + id).value = obj.group;
    
    renderRawDataPage(id);
    renderPaging(id);

    /*
    var header = "";
    obj.fieldList.forEach(fld => {
        header = header + "<div><h3>###</h3></div>".replace('###', fld);
    });
    var body = "";
    obj.items.forEach(item => {

        obj.fieldList.forEach(fld => {
            if (item[fld]) {

                body = body + "<div>###</div>".replace('###', item[fld]);
            }
            else {
                body = body + "<div></div>"
            }
        });
    });
    document.getElementById("datagrid" + id).innerHTML = header + body;
    */
    if (loadRawData > -1) {
        checkLoadRawData();
    }
    else {
        checkLoadCompare();
    }
}
var rendersectiongrid = function (id) {
    let obj = data.get(id);
    document.getElementById('dataset' + id).value = obj.dataset;
    document.getElementById('country' + id).value = obj.country;
    document.getElementById('group' + id).value = obj.group;
    setUpRenderGrid(id);
  
    if (loadRawData > -1) {
        if (configReload) {
            checkLoadRawDataFromConfig();
        }
        else {
            checkLoadRawData();
        }
    }
    else {
        if (configReload) {
            checkRunCompare();
        }
        else {
            checkLoadCompare();
        }
    }
}
var reSetCompare = function (cmd) {
    if (cmd.data) {
        let compareObj = cmd.data;
        data.set(compareObj.id, compareObj);
        setCompare(compareObj);
        GenerateComparisonDS(compareObj.id);
        if (loadCompare > -1) {
            checkLoadCompare();
        }
    }
}
var addCompare = function () {
    let compareObj = new Object(); 
    compareObj.datasets = [];
    let gid = GuidIDStr();
    compareObj.id = gid;
    compareObj.setInnitScript = true;
    compareObj.innitScript = `
    // if needed add global variables here
    var innit### = function(compareObj){
        //if needed write a script to innitialise data. Do not change function name
    }`.replace('###', gid);
    
    let comparedatalist = [];
    let comparedataliststr = localStorage.getItem("comparedatalist");
    if (comparedataliststr) {
        comparedatalist = JSON.parse(comparedataliststr);
    }
    comparedatalist.push(gid);
    comparedatasetcount = comparedatalist.length;
    compareObj.title = "Comparison" + comparedatasetcount.toString();
    localStorage.setItem("comparedatalist", JSON.stringify(comparedatalist));
    data.set(compareObj.id, compareObj);
    setCompare(compareObj);
}
var setCompare = function (compareObj) {
    let sectionid = 'section' + compareObj.id;
    let sectionelem = document.getElementById(sectionid);
    let mainElem = document.getElementById('main');
    if (sectionelem) {
        removeAllChildElements(sectionelem);
    }
    else {
        let section = new Object();
        section.tagType = "section";
        section.attributes = [];
        let attr = new Object();
        attr.name = 'id';
        attr.value = 'section' + compareObj.id;
        section.attributes.push(attr);
        attr = new Object();
        attr.name = 'class';
        attr.value = 'comparegrid';
        section.attributes.push(attr);
        sectionelem = createHtmlElement(section);
        mainElem.append(sectionelem);
    }
    let div = new Object();
    div.tagType = "div";
    div.attributes = [];
    let attr = new Object();
    attr.name = "class";
    attr.value = "comparefieldset";
    div.attributes.push(attr);
    let divElem = createHtmlElement(div);
    sectionelem.append(divElem);
    let nameinput = new Object();
    nameinput.tagType = "input";
    nameinput.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = "comparetitle" + compareObj.id;
    nameinput.attributes.push(attr);
    attr = new Object();
    attr.name = 'type';
    attr.value = "text";
    nameinput.attributes.push(attr);
    let nameinputElem = createHtmlElement(nameinput);
    divElem.append(nameinputElem);
    nameinputElem.value = compareObj.title;
    nameinputElem.addEventListener("change", (event) => {
        compareObj.title = event.target.value;

    });

    div = new Object();
    div.tagType = "div";
    div.attributes = [];
    attr = new Object();
    attr.name = "class";
    attr.value = "comparefieldset";
    div.attributes.push(attr);
    divElem = createHtmlElement(div);
    sectionelem.append(divElem);

    divElem.innerHTML = `<div><input type="checkbox" id="setInnitScript###" name="setInnitScript###"  />
    <label for="setInnitScript###">Set Innit Script</label></div>
    <textarea id='innitScript###' cols='!!!' rows='10'></textarea>
    `.replaceAll('###', compareObj.id).replace('!!!', mainElem.offsetWidth < 600 ? "50" : "100" );


    let setInnitScriptElem = document.getElementById("setInnitScript" + compareObj.id);
    let innitScriptElem = document.getElementById("innitScript" + compareObj.id);
    setInnitScriptElem.addEventListener("click", (event) => {
        compareObj.setInnitScript = event.target.checked;
        if (event.target.checked) {
            showDiv(innitScriptElem);
        }
        else {
            hideDiv(innitScriptElem);
        }

    });

    setInnitScriptElem.checked = compareObj.setInnitScript;
    if (compareObj.setInnitScript) {
        showDiv(innitScriptElem);
    }
    else {
        hideDiv(innitScriptElem);
    }
    innitScriptElem.value = compareObj.innitScript;
    innitScriptElem.addEventListener("change", (event) => {
        compareObj.innitScript = event.target.value;
    });


    if (compareObj.datasets.length > 0) {
        compareObj.datasets.forEach(ds => {
            setDataSet(compareObj, ds);
        });
    }
    else {
        addDataSet(compareObj);
        addDataSet(compareObj);
    }
    AddButton(sectionelem, 'addds' + compareObj.id, "Add DataSet", "AddDataSetToCompareDS('###')".replaceAll('###', compareObj.id));
    let datagridid = 'datagridcontainer' + compareObj.id;
    let datagridelem = document.getElementById(datagridid);
    if (datagridelem) {
        removeAllChildElements(datagridelem);
        datagridelem.remove()
    }
  
        let dgsection = new Object();
        dgsection.tagType = "section";
        dgsection.attributes = [];
        attr = new Object();
        attr.name = 'id';
        attr.value = datagridid;
        dgsection.attributes.push(attr);

        datagridelem = createHtmlElement(dgsection);
        document.getElementById('main').append(datagridelem);
       
    let dgheader = new Object();
    dgheader.tagType = "header";
    dgheader.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = 'datagridheader' + compareObj.id;
    dgheader.attributes.push(attr);

    dgheaderelem = createHtmlElement(dgheader);
    datagridelem.append(dgheaderelem);
    AddButton(dgheaderelem, 'dggenerate' + compareObj.id, "Generate Comparison", "GenerateComparisonDS('###')".replaceAll('###', compareObj.id));
}
var AddDataSetToCompareDS = function (compareid) {
    let compareObj = data.get(compareid);
    addDataSet(compareObj);
    let sectionid = 'section' + compareObj.id;
    let sectionelem = document.getElementById(sectionid);
    let bId = 'addds' + compareObj.id;
    let bElem = document.getElementById(bId);
    bElem.remove();
    AddButton(sectionelem, 'addds' + compareObj.id, "Add DataSet", "AddDataSetToCompareDS('###')".replaceAll('###', compareObj.id));
}
var addLabel = function (elem, forid,text) {
    var label = new Object();
    label.attributes = [];
    label.tagType = "label";
    var attr = new Object();
    attr.name = 'for';
    attr.value = forid;
    label.attributes.push(attr);
    label.hasText = true;
    label.text = text;
   
    elem.append(createHtmlElement(label));
}
var addDataSet = function (compareObj) {
    
    let gid = GuidIDStr();
    let compareds = new Object();
    compareds.id = gid;
    compareds.parentid = compareObj.id;
    compareds.setFilter = true;
    compareds.filter = `var filter### = function(ds){
        // write a script to filter out rows and return the filtered dataset. Do not change function name
    }`.replace('###', gid);
    compareds.fieldCount = 0;
    compareds.fields = [];
    compareObj.datasets.push(compareds);
    compareds.name = "CompareDataSet" + compareObj.datasets.length.toString();
  
    setDataSet(compareObj, compareds);
}
var setDataSet = function (compareObj, compareds) {
    let compareElem = document.getElementById('section' + compareObj.id);
    let gid = compareds.id;
    let div = new Object();
    div.tagType = "div";
    let divElem = createHtmlElement(div);
    compareElem.append(divElem);
    addLabel(divElem, "comparedsname" + compareds.id, "compare data set");
    let nameinput = new Object();
    nameinput.tagType = "input";
    nameinput.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = "comparedsname" + compareds.id;
    nameinput.attributes.push(attr);
    attr = new Object();
    attr.name = 'type';
    attr.value = "text";
    nameinput.attributes.push(attr);
    let nameinputElem = createHtmlElement(nameinput);
    divElem.append(nameinputElem);
    nameinputElem.value = compareds.name;
    nameinputElem.addEventListener("change", (event) => {
        compareds.name = event.target.value;
    });
    div = new Object();
    div.tagType = "div";
    divElem = createHtmlElement(div);
    compareElem.append(divElem);
    addLabel(divElem, 'select' + gid, "select data set")
    var section = new Object();
    section.tagType = "select";
    section.attributes = [];
    var attr = new Object();
    attr.name = 'id';
    attr.value = 'select' + gid;
    section.attributes.push(attr);
    var elem = createHtmlElement(section);
    divElem.append(elem);
    var rawdataliststr = localStorage.getItem("rawdatalist");
    if (rawdataliststr) {
        let rawdata = JSON.parse(rawdataliststr);
        rawdata.forEach(id => {

            let ds = data.get(id);
            var option = new Object();
            option.tagType = "option";
            option.attributes = [];
            var attr = new Object();
            attr.name = 'value';
            attr.value = id;
            option.attributes.push(attr);
            option.hasText = true;
            option.text = ds.dataset;
            var optelem = createHtmlElement(option);
            elem.append(optelem);
        });
        if (!compareds.datasetid) {
            compareds.datasetid = rawdata[0];
        }
    }

    elem.addEventListener("change", (event) => {
        compareds.datasetid = event.target.value;
        let dsarticleelem = document.getElementById('article' + compareds.id);
        if (dsarticleelem) {
            removeAllChildElements(dsarticleelem);
            compareds.fields = [];
            compareds.fieldCount = 0;
        }
        addFieldSelection(compareds);
        addFieldSelection(compareds);
        AddButton(dsarticleelem, "addfld" + compareObj.id + "_" + compareds.id, "Add Field", "AddFieldToCompareDS('###','@@@')".replace('###', compareObj.id).replace('@@@', compareds.id));
    });
    elem.value = compareds.datasetid;
    div = new Object();
    div.tagType = "div";
    div.attributes = [];
    attr = new Object();
    attr.name = "class";
    attr.value = "comparefieldset";
    div.attributes.push(attr);
    divElem = createHtmlElement(div);
    compareElem.append(divElem);

    divElem.innerHTML = `<div><input type="checkbox" id="setfilter###" name="setfilter###"  />
    <label for="setfilter###">Filter Rows</label></div>
    <textarea id='filter###' cols='!!!' rows='10'></textarea>
    `.replaceAll('###', compareds.id).replace('!!!', divElem.offsetWidth < 600 ? "50" : "100");;


    let setfilterElem = document.getElementById("setfilter" + compareds.id);
    let filterElem = document.getElementById("filter" + compareds.id);
    setfilterElem.addEventListener("click", (event) => {
        compareds.setFilter = event.target.checked;
        if (event.target.checked) {
            showDiv(filterElem);
        }
        else {
            hideDiv(filterElem);
        }

    });

    setfilterElem.checked = compareds.setFilter;
    if (compareds.setFilter) {
        showDiv(filterElem);
    }
    else {
        hideDiv(filterElem);
    }
    filterElem.value = compareds.filter;
    filterElem.addEventListener("change", (event) => {
        compareds.filter = event.target.value;
    });
    if (compareds.fields.length > 0) {
        compareds.fields.forEach(fld => { setFieldSelection(compareds, fld); });
    }
    else {
        addFieldSelection(compareds);
        addFieldSelection(compareds);
    }
    let dsarticleelem = document.getElementById('article' + compareds.id);
    AddButton(dsarticleelem, "addfld" + compareObj.id + "_" + compareds.id, "Add Field", "AddFieldToCompareDS('###','@@@')".replace('###', compareObj.id).replace('@@@', compareds.id));
    let datagridelem = document.getElementById('datagridcontainer' + compareds.id);

    if (!datagridelem) {
        let dsarticle = new Object();
        dsarticle.tagType = "article";
        dsarticle.attributes = [];
        let attr = new Object();
        attr.name = 'id';
        attr.value = 'datagridcontainer' + compareds.id;
        dsarticle.attributes.push(attr);
        attr = new Object();
        attr.name = 'class';
        attr.value = 'comparefieldset';
        dsarticle.attributes.push(attr);
        dsarticleelem = createHtmlElement(dsarticle);
        var sectionelem = document.getElementById('section' + compareds.parentid);
        sectionelem.append(dsarticleelem);
        let dgid = "datagridgenerate" + compareObj.id + "_" + compareds.id;
        AddButton(dsarticleelem, dgid, "Generate Data Set", "GenerateDataGrid('###','@@@')".replace('###', compareObj.id).replace('@@@', compareds.id));
    }
}
var AddFieldToCompareDS = function (compareObjId, compareDSId) {
    let compareObj = data.get(compareObjId);
    let compareds = compareObj.datasets.find(o => o.id === compareDSId);
    addFieldSelection(compareds);
    let bid = "addfld" + compareObj.id + "_" + compareds.id;
    let bElem = document.getElementById(bid);
    bElem.remove();
   
    let dsarticleelem = document.getElementById('article' + compareds.id);
    AddButton(dsarticleelem, bid, "Add Field", "AddFieldToCompareDS('###','@@@')".replace('###', compareObj.id).replace('@@@', compareds.id));

  
}
var addFieldSelection = function (compareds) {
    if (compareds.datasetid) {
        let fld = new Object();
        fld.id = GuidIDStr();
        fld.parentid = compareds.id;
        fld.setmethod = "1";
        fld.index = compareds.fieldCount++;
        compareds.fields.push(fld);
        fld.title = "fld" + fld.index.toString();
        setFieldSelection(compareds, fld);
    }
}
var setFieldSelection = function (compareds,fld) {
    if (compareds.datasetid) {
       
        var sectionelem = document.getElementById('section' + compareds.parentid);
        let dsarticleelem = document.getElementById('article' + compareds.id);
       
        if (!dsarticleelem) {
            let dsarticle = new Object();
            dsarticle.tagType = "article";
            dsarticle.attributes = [];
            let attr = new Object();
            attr.name = 'id';
            attr.value = 'article' + compareds.id;
            dsarticle.attributes.push(attr);
            attr = new Object();
            attr.name = 'class';
            attr.value = 'comparefieldset';
            dsarticle.attributes.push(attr);
            dsarticleelem = createHtmlElement(dsarticle);
            sectionelem.append(dsarticleelem);
        }
        let heading = new Object();
        heading.tagType = "input";
        heading.attributes = [];
        let attr = new Object();
        attr.name = 'type';
        attr.value = 'text';
        heading.attributes.push(attr);
        let headingElem =  createHtmlElement(heading)
        dsarticleelem.append(headingElem);
        headingElem.value = fld.title;
        headingElem.addEventListener("change", (event) => {
            fld.title = event.target.value;
        })
        let p = new Object();
        if (fld.index === 0) {
          
            p.tagType = "p";
            p.hasText = true;
            p.text = "This field is the key field. The value of this field will be used to match with the corresponding key fields in the data sets that are to be compared.";
        }
        else {
         
            p.tagType = "p";
            p.hasText = true;
            p.text = "This field has an index of ###. The value of this field will be compared with the field with the same index in the other datasets to be compared.".replace('###',fld.index);
        }
        dsarticleelem.append(createHtmlElement(p));
        let fldset = new Object();
        fldset.tagType = "fieldset";
        fldset.attributes = [];
        attr = new Object();
        attr.name = 'id';
        attr.value = 'fldset' + fld.id;
        fldset.attributes.push(attr);
        let fldelem = createHtmlElement(fldset);
        dsarticleelem.append(fldelem);
        fldelem.innerHTML = ` <legend>Select field set option</legend>
        <div>
  <input type="radio" id="selectfield###" name="cmds###" value="1"   />
   <label for="selectfield">Select a field</label>
</div>
<div>
    <input type="radio" id="computefield###" name="cmds###" value="2"  />
 <label for="computefield">Compute field</label>
</div>
`.replaceAll('###', fld.id);
        fldelem.addEventListener("click", (event) => {
            if (event.target.value) {
                fld.setmethod = event.target.value;
                if (fld.setmethod === "1") {
                    document.getElementById("selectfield" + fld.id).setAttribute("checked", true);
                    hideDiv(scriptDiv);
                    showDiv(selectDiv);

                }
                else {
                    document.getElementById("computefield" + fld.id).setAttribute("checked", true);
                    hideDiv(selectDiv);
                    showDiv(scriptDiv);
                }
            }
        })

        let selectDiv = createDiv(dsarticleelem, 'fieldselectdiv' + fld.id);
        let scriptDiv = createDiv(dsarticleelem, 'scriptdiv' + fld.id)

        addLabel(selectDiv, 'fieldselect' + fld.id, "select data set field")
        let section = new Object();
        section.tagType = "select";
        section.attributes = [];
        attr = new Object();
        attr.name = 'id';
        attr.value = 'fieldselect' + fld.id;
        section.attributes.push(attr);
        let elem = createHtmlElement(section);
        selectDiv.append(elem);
        let ds = data.get(compareds.datasetid);
        if (ds) {

            ds.fieldList.forEach(nm => {

              
                var option = new Object();
                option.tagType = "option";
                option.attributes = [];
                var attr = new Object();
                attr.name = 'value';
                attr.value = nm;
                option.attributes.push(attr);
                option.hasText = true;
                option.text = nm;
                var optelem = createHtmlElement(option);
                elem.append(optelem);
            });
            if (!fld.name) {
                fld.name = ds.fieldList[0];
            }
            elem.addEventListener("change", (event) => {
                fld.name = event.target.value;

            });

            elem.value = fld.name;
            let jsscript = new Object();
            jsscript.tagType = "textarea";
            jsscript.attributes = [];
            let attr = new Object();
            attr.name = 'id';
            attr.value = "computefld" + fld.id;
            jsscript.attributes.push(attr);
            attr = new Object();
            attr.name = 'cols';
            attr.value = scriptDiv.offsetWidth < 600 ?  "50" : "100";
            jsscript.attributes.push(attr);
            attr = new Object();
            attr.name = 'rows';
            attr.value = "10";
            jsscript.attributes.push(attr);
            let jsscriptElem = createHtmlElement(jsscript);
            scriptDiv.append(jsscriptElem);
            if (fld.script && fld.script !== '') {
                jsscriptElem.value = fld.script;
            }
            else {
                jsscriptElem.value = `var computefld### = function(row){
            //write code to return field value. Do not change function name
            }`.replace("###", fld.id);
            }
            jsscriptElem.addEventListener("change", (event) => {
                fld.script = event.target.value;

            });
        }

        if (fld.setmethod === "1") {
            document.getElementById("selectfield" + fld.id).setAttribute("checked", true);
            hideDiv(scriptDiv);
            showDiv(selectDiv);
         
        }
        else {
            document.getElementById("computefield" + fld.id).setAttribute("checked", true);
            hideDiv(selectDiv);
            showDiv(scriptDiv);
        }
    }
}
var GenerateDataGrid = function (compareobjId, dsid) {
    console.log(compareobjId + "-" + dsid)
    var cmd = new Object();
    cmd.cmdtype = "saveCompareDS";
    cmd.callback = "generateDS";
    cmd.compareobj = data.get(compareobjId);
    cmd.dsId = dsid;
    console.log(cmd.dataset);
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(cmd);
    }

}
var generateDS = function (cmd) {
    let compareobj = cmd.compareobj;
    let csselem = document.getElementById("grid" + compareobj.id);
    if (csselem) {
        csselem.remove();
    }
    let jselem = document.getElementById("script" + compareobj.id);
    if (jselem) {
        jselem.remove();
    }
    comparelinks = 0;

    let csslink = new Object();
    csslink.tagType = "link"
    csslink.attributes = [];
    let attr = new Object();
    attr.name = "id";
    attr.value = "grid" + compareobj.id;
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "rel";
    attr.value = "stylesheet";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "href";
    attr.value = "grid" + compareobj.id + ".css";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "compareDataGridGenerate('" + compareobj.id + "','" + cmd.dsId + "')";
    csslink.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(csslink));

    let jsscript = new Object();
    jsscript.tagType = "script"
    jsscript.attributes = [];
    attr = new Object();
    attr.name = "id";
    attr.value = "script" + compareobj.id;
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "asp-append-version";
    attr.value = "true";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "src";
    attr.value = "script" + compareobj.id + ".js";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "compareDataGridGenerate('" + compareobj.id + "','" + cmd.dsId + "')";
    jsscript.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(jsscript));
}
var compareDataGridGenerate = function (compareobjid, dsId) {
    if (++comparelinks === 2) {
        let compareobj = data.get(compareobjid);
        compareobj.keyfields = [];
        if (compareobj.setInnitScript && window["innit" + compareobj.id]) {
            window["innit" + compareobj.id](compareobj);
        }
        let ds = compareobj.datasets.find(d => d.id === dsId);
        let rawdata = data.get(ds.datasetid);
        let items = rawdata.items;
        if (ds.filter && window["filter" + ds.id]) {
            items = window["filter" + ds.id](items);
        }     
        ds.fieldList = [];
        ds.fieldIsAlphaNumeric = true;
        ds.items = [];
        ds.fields.forEach(fld => {
            ds.fieldList.push(fld.title)

        });
        items.forEach(item => {
            let dsitem = new Object();
            ds.fields.forEach(fld => {
                if (fld.setmethod === "1") {
                    if (item[fld.name]) {
                        dsitem[GetAlphaNumeric(fld.title)] = item[fld.name];
                    }
                }
                else {
                    if (window["computefld" + fld.id]) {
                        let fldval = window["computefld" + fld.id](item);
                        dsitem[GetAlphaNumeric(fld.title)] = fldval;
                    }
                }
                if (fld.index === 0) {
                    let key = dsitem[GetAlphaNumeric(fld.title)];
                    if (key && !compareobj.keyfields.includes(key)) {
                        compareobj.keyfields.push(key);
                    }
                }
            });
            ds.items.push(dsitem);
        });
        data.set(ds.id, ds);
        let datagridsec = document.getElementById("datagridcontainer" + ds.id);
        let datagriddiv = document.getElementById("datagrid" + ds.id);
        if (datagriddiv) {
            datagriddiv.remove();
        }
        datagriddiv = createDiv(datagridsec, "datagrid" + ds.id);
        datagriddiv.classList.add("grid" + ds.id);
        let pagediv = document.getElementById("page" + ds.id);
        if (pagediv) {
            pagediv.remove();
        }
        pagediv = createDiv(datagridsec, "page" + ds.id);
        setUpRenderGrid(ds.id);
      
    }
}
var GenerateComparisonDS = function (id) {
    var cmd = new Object();
    cmd.cmdtype = "saveCompareDS";
    cmd.callback = "generateComparison";
    cmd.compareobj = data.get(id);
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(cmd);
    }
}
var generateComparison = function (cmd) {
    let compareobj = cmd.compareobj;
    let csselem = document.getElementById("grid" + compareobj.id);
    if (csselem) {
        csselem.remove();
    }
    let jselem = document.getElementById("script" + compareobj.id);
    if (jselem) {
        jselem.remove();
    }
    comparelinks = 0;

    let csslink = new Object();
    csslink.tagType = "link"
    csslink.attributes = [];
    let attr = new Object();
    attr.name = "id";
    attr.value = "grid" + compareobj.id;
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "rel";
    attr.value = "stylesheet";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "href";
    attr.value = "grid" + compareobj.id + ".css";
    csslink.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "compareGenerate('" + compareobj.id + "')";
    csslink.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(csslink));

    let jsscript = new Object();
    jsscript.tagType = "script"
    jsscript.attributes = [];
    attr = new Object();
    attr.name = "id";
    attr.value = "script" + compareobj.id;
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "asp-append-version";
    attr.value = "true";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "src";
    attr.value = "script" + compareobj.id + ".js";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "compareGenerate('" + compareobj.id  + "')";
    jsscript.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(jsscript));
}

var compareGenerate = function (compareobjid) {
    if (++comparelinks === 2) {
        let compareobj = data.get(compareobjid);
        if (compareobj.setInnitScript && window["innit" + compareobj.id]) {
            window["innit" + compareobj.id](compareobj);
        }
        compareobj.keyfields = [];
        compareobj.maxFieldIndex = 0;
        compareobj.datasets.forEach(ds => {
            if (compareobj.maxFieldIndex < ds.fields.length) {
                compareobj.maxFieldIndex = ds.fields.length;
            }
            let rawdata = data.get(ds.datasetid);
            let items = rawdata.items;
            if (ds.filter && window["filter" + ds.id]) {
                items = window["filter" + ds.id](items);
            }         
            ds.fieldList = [];
            ds.fieldIsAlphaNumeric = true;
            ds.items = [];
            ds.fields.forEach(fld => {
                ds.fieldList.push(fld.title)
               
            });
            items.forEach(item => {
                let dsitem = new Object();
                ds.fields.forEach(fld => {
                    if (fld.setmethod === "1") {
                        if (item[fld.name]) {
                            dsitem[GetAlphaNumeric(fld.title)] = item[fld.name];                          
                        }                     
                    }
                    else {
                        if (window["computefld" + fld.id]) {
                            let fldval = window["computefld" + fld.id](item);
                            dsitem[GetAlphaNumeric(fld.title)] = fldval;
                        }                      
                    }
                    if (fld.index === 0) {
                        let key = dsitem[GetAlphaNumeric(fld.title)];
                        if (key && !compareobj.keyfields.includes(key)) {
                            compareobj.keyfields.push(key);
                        }
                    }
                });
                ds.items.push(dsitem);
            });
            data.set(ds.id, ds);
            let datagridsec = document.getElementById("datagridcontainer" + ds.id);
            let datagriddiv = document.getElementById("datagrid" + ds.id);
            if (datagriddiv) {
                datagriddiv.remove();
            }
            datagriddiv = createDiv(datagridsec, "datagrid" + ds.id);
           
            datagriddiv.classList.add("grid" + ds.id);
            let pagediv = document.getElementById("page" + ds.id);
            if (pagediv) {
                pagediv.remove();
            }
            pagediv = createDiv(datagridsec, "page" + ds.id);
            setUpRenderGrid(ds.id);

        });
        let datagridid = 'datagridcontainer' + compareobj.id;
        let datagridelem = document.getElementById(datagridid);
        let divId = "datagrid" + compareobj.id;
        let divElem = document.getElementById(divId);
        if (divElem) {
            divElem.remove();
        }
        let div = new Object();
        div.tagType = "div";
        div.attributes = [];
        let attr = new Object();
        attr.name = "class";
        attr.value = "grid" + compareobj.id;
        div.attributes.push(attr);
        attr = new Object();
        attr.name = "id";
        attr.value = "datagrid" + compareobj.id;
        div.attributes.push(attr);
        divElem = createHtmlElement(div);
        datagridelem.append(divElem);
        pagediv = document.getElementById("page" + compareobj.id);
        if (pagediv) {
            pagediv.remove();
        }
        pagediv = createDiv(datagridelem, "page" + compareobj.id);
        compareobj.items = [];
        compareobj.fieldWithDSTitle = [];
        compareobj.fieldList = [];
        compareobj.fieldIsAlphaNumeric = true;
        for (let i = 0; i < compareobj.maxFieldIndex; ++i) {
            compareobj.datasets.forEach(ds => {
                let fldObj = new Object();
                fldObj.dsname = ds.name;
                let fld = ds.fields.find(f => f.index === i);
                if (fld) {
                    compareobj.fieldList.push(fld.title);
                    fldObj.title = fld.title
                
                }
                else {
                   
                    fldObj.title = "fld" + i.toString();
                    compareobj.fieldList.push(fldObj.title);
                   
                }
                compareobj.fieldWithDSTitle.push(fldObj);
            });
        }       
        compareobj.keyfields.forEach(key => {
            let item = new Object();
            for (let i = 0; i < compareobj.maxFieldIndex; ++i) {
                compareobj.datasets.forEach(ds => {
                   
                    let fld = ds.fields.find(f => f.index === 0);
                    if (fld) {
                        let matchFld = ds.fields.find(f => f.index === i);
                        let matchItem = ds.items.find(f => f[GetAlphaNumeric(fld.title)] === key);
                        if (matchItem && matchFld) {

                            if (matchItem[GetAlphaNumeric(matchFld.title)]) {
                              item[ds.name + GetAlphaNumeric(matchFld.title)] = matchItem[GetAlphaNumeric(matchFld.title)];
                            }

                        }
                    }



                });
            }
            compareobj.items.push(item);
        });
        setUpRenderGrid(compareobj.id);
        afterGenerateScript(compareobj.id);
        setUpRunAfterGenerateScript(compareobj.id);
    }
}
var afterGenerateScript = function (compareobjid) {

    let scriptid = 'scriptcontainer' + compareobjid;
    let scriptelem = document.getElementById(scriptid);
    if (scriptelem) {
        scriptelem.remove();
    }
    let sectionid = 'datagridcontainer' + compareobjid;
    let sectionelem = document.getElementById(sectionid);
    scriptelem = createDiv(sectionelem, scriptid);

    let scriptheader = new Object();
    scriptheader.tagType = "header";
    scriptheader.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = 'scriptheader' + compareobjid;
    scriptheader.attributes.push(attr);

    scriptheaderelem = createHtmlElement(scriptheader);
    scriptelem.append(scriptheaderelem);
    AddButton(scriptheaderelem, 'afterscript' + compareobjid, "add run script", "addRunAfterScript('###')".replaceAll('###', compareobjid));
   

}
var addRunAfterScript = function (compareobjid) {
    let scriptid = 'scriptcontainer' + compareobjid;
    let scriptelem = document.getElementById(scriptid);
    let compareobj = data.get(compareobjid);
    let scriptObject = new Object();
    scriptObject.id = GuidIDStr();
    scriptObject.parentid = compareobjid;
    if (!compareobj.runAfterScript) {
        compareobj.runAfterScript = [];
    }
    scriptObject.order = compareobj.runAfterScript.length;
    compareobj.runAfterScript.push(scriptObject);
    let scriptdivelem = createDiv(scriptelem, "scriptdiv" + scriptObject.id);
    scriptdivelem.classList.add("flexcol");
    let scriptorderdivelem = createDiv(scriptdivelem, "scriptorderdiv" + scriptObject.id);
    scriptorderdivelem.classList.add("flexrow");
    scriptorderdivelem.innerHTML = `<label for='scriptorder###'>Script run Order</label><input id='scriptorder###' />`.replaceAll('###', scriptObject.id);
    let scriptorderElem = document.getElementById('scriptorder' + scriptObject.id);
    scriptorderElem.value = scriptObject.order;
    scriptorderElem.addEventListener('change', (e) => {
        scriptObject.order = e.target.value;
    });
    let jsscript = new Object();
    jsscript.tagType = "textarea";
    jsscript.attributes = [];
    let attr = new Object();
    attr.name = 'id';
    attr.value = "scriptarea" + scriptObject.id
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'cols';
    attr.value = scriptdivelem.offsetWidth < 600 ? "50" : "100";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'rows';
    attr.value = "10";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'spellcheck';
    attr.value = "false";
    jsscript.attributes.push(attr);
    let jsscriptElem = createHtmlElement(jsscript);
    scriptdivelem.append(jsscriptElem);
    jsscriptElem.addEventListener("change", (e) => {
        scriptObject.script  = e.target.value;
    });
    jsscriptElem.value = `var runAfterScript### = function(compareobj,scriptElem)
    {
      //compareobj holds the comparison data set created. scriptElem is the html tag to which results need to be appended to view.
      //Do not change function name

    }
    `.replace('###', scriptObject.id);

    let runB = new Object();
    runB.tagType = "button";
    runB.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = "scriptrun" +  scriptObject.id;
    runB.attributes.push(attr);

    runB.hasText = true;
    runB.text = "run";
    let runBElem = createHtmlElement(runB);
    scriptdivelem.append(runBElem);
    runBElem.classList.add("maxwidth200");
    runBElem.addEventListener("click", (e) => {
        var cmd = new Object();
        cmd.cmdtype = "saveCompareDS";
        cmd.callback = "runafterscript";
        cmd.scriptid = scriptObject.id;
        cmd.compareobj = compareobj;
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(cmd);
        }
    })


}
var runafterscript = function (cmd) {

    let jsscript = new Object();
    jsscript.tagType = "script"
    jsscript.attributes = [];
    attr = new Object();
    attr.name = "id";
    attr.value = "script" + cmd.scriptid;
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "asp-append-version";
    attr.value = "true";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "src";
    attr.value = "script" + cmd.scriptid + ".js";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = "onload";
    attr.value = "onLoadRunAfterscript('" + cmd.compareobj.id + "','" + cmd.scriptid + "')";
    jsscript.attributes.push(attr);
    document.getElementsByTagName("head")[0].appendChild(createHtmlElement(jsscript));

}
var onLoadRunAfterscript =async function (compareobjid, scriptid) {
   
    let compareobj = data.get(compareobjid);
    let scriptElem = document.getElementById("scriptdiv" + scriptid);
    let func = "runAfterScript" + scriptid;
    if (scriptElem && compareobj && window[func]) {
        if (window[func].constructor.name === "AsyncFunction") {
            await window[func](compareobj,scriptElem);
        }
        else {
            window[func](compareobj, scriptElem);
        }
    }
    if (configReload) {
        NextRunAfterscript(compareobj, scriptid);
    }
}

var NextRunAfterscript = function (compareobj, scriptid) {
    let sobj = compareobj.runAfterScript.find(s => s.id === scriptid);
    let remaining = compareobj.runAfterScript.filter(s => s.order > sobj.order);
    if (remaining && remaining.length > 0) {
        remaining.sort((a, b) => a.order - b.order);
        let cmd = new Object();
        cmd.scriptid = remaining[0].id;
        cmd.scriptObject = remaining[0];
        cmd.compareobj = compareobj;
        setUpScriptTags(cmd);
    }
}

var setUpScriptTags = function(cmd)
{
    let compareobjid = cmd.compareobj.id
    let scriptid = 'scriptcontainer' + compareobjid;
    let scriptelem = document.getElementById(scriptid);
    let compareobj = cmd.compareobj;
    let scriptObject = cmd.scriptObject;
    
    let scriptdivelem = createDiv(scriptelem, "scriptdiv" + scriptObject.id);
    scriptdivelem.classList.add("flexcol");
    let scriptorderdivelem = createDiv(scriptdivelem, "scriptorderdiv" + scriptObject.id);
    scriptorderdivelem.classList.add("flexrow");
    scriptorderdivelem.innerHTML = `<label for='scriptorder###'>Script run Order</label><input id='scriptorder###' />`.replaceAll('###', scriptObject.id);
    let scriptorderElem = document.getElementById('scriptorder' + scriptObject.id);
    scriptorderElem.value = scriptObject.order;
    scriptorderElem.addEventListener('change', (e) => {
        scriptObject.order = e.target.value;
    });
    let jsscript = new Object();
    jsscript.tagType = "textarea";
    jsscript.attributes = [];
    let attr = new Object();
    attr.name = 'id';
    attr.value = "scriptarea" + scriptObject.id
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'cols';
    attr.value = scriptdivelem.offsetWidth < 600 ? "50" : "100";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'rows';
    attr.value = "10";
    jsscript.attributes.push(attr);
    attr = new Object();
    attr.name = 'spellcheck';
    attr.value = "false";
    jsscript.attributes.push(attr);
    let jsscriptElem = createHtmlElement(jsscript);
    scriptdivelem.append(jsscriptElem);
    jsscriptElem.addEventListener("change", (e) => {
        scriptObject.script = e.target.value;
    });
    jsscriptElem.value = scriptObject.script;

    let runB = new Object();
    runB.tagType = "button";
    runB.attributes = [];
    attr = new Object();
    attr.name = 'id';
    attr.value = "scriptrun" + scriptObject.id;
    runB.attributes.push(attr);

    runB.hasText = true;
    runB.text = "run";
    let runBElem = createHtmlElement(runB);
    scriptdivelem.append(runBElem);
    runBElem.classList.add("maxwidth200");
    runBElem.addEventListener("click", (e) => {
        var cmd = new Object();
        cmd.cmdtype = "saveCompareDS";
        cmd.callback = "runafterscript";
        cmd.scriptid = scriptObject.id;
        cmd.compareobj = compareobj;
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(cmd);
        }
    });
    runafterscript(cmd);
}
var setUpRunAfterGenerateScript = function (compareobjid) {
    let compareobj = data.get(compareobjid);
    if (compareobj.runAfterScript && compareobj.runAfterScript.length > 0) {
        compareobj.runAfterScript.sort((a, b) => a.order - b.order);
        let cmd = new Object();
        
        cmd.scriptid = compareobj.runAfterScript[0].id;
        cmd.scriptObject = compareobj.runAfterScript[0];
        cmd.compareobj = compareobj;
        setUpScriptTags(cmd);
    }
}
document.addEventListener("DOMContentLoaded", checkSetServiceWorker);
//document.addEventListener("DOMContentLoaded", addSVGraph);