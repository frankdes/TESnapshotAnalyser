var getPageInfo = function (id) {
    let pageinfo = JSON.parse(localStorage.getItem(id + "pageinfo"));
    pageinfo.pageSize = Number(pageinfo.pageSize);
    pageinfo.pageNo = Number(pageinfo.pageNo);

    pageinfo.itemCount = Number(pageinfo.itemCount);
    return pageinfo;
}
var reSetPageSize = function (id, pageSize) {
    let pageinfo = getPageInfo(id);
    let start = (pageinfo.pageNo - 1) * pageinfo.pageSize;
    pageinfo.pageNo = Math.ceil(start / Number(pageSize));
    if (pageinfo.pageNo < 1) {
        pageinfo.pageNo = 1;
    }
    pageinfo.pageSize = Number(pageSize);
    localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));
    renderGridPage(id);
    renderPaging(id);

}
var goToPage = function (id, pageNo) {
    let pageinfo = getPageInfo(id);
    pageinfo.pageNo = pageNo;
    localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));
    renderGridPage(id);
    renderPaging(id);
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
    </select>`.replace('###', id) + pageHtml + '</div>';

    document.getElementById("page" + id).innerHTML = pageHtml;
    pageSizeElem = document.getElementById("pagesize" + id);
    pageSizeElem.value = pageinfo.pageSize;
    pageSizeElem.addEventListener('change', (event) => { reSetPageSize(id, event.target.value); });
}
var renderGridPage = function (id) {
    let pageinfo = getPageInfo(id);
    let obj = data.get(id);
    let dgdiv = document.getElementById("datagrid" + id);
    if (dgdiv.offsetWidth < 600) {
        dgdiv.classList.remove("grid" + id);
        dgdiv.classList.add("flexcol");

        var body = "";
        let start = (pageinfo.pageNo - 1) * pageinfo.pageSize;
        if (start < obj.items.length) {
            let end = start + pageinfo.pageSize
            let items = obj.items.slice(start, end);
            items.forEach(item => {
                let fldcount = 0;
                let summary = "";
                let detail = "";
                if (obj.fieldWithDSTitle && obj.fieldWithDSTitle.length > 0) {
                   
                    /*
                    <details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>

                    */
                    obj.fieldWithDSTitle.forEach(fld => {
                        let prop = obj.fieldIsAlphaNumeric ? GetAlphaNumeric(fld.title) : fld;
                        if (item[fld.dsname + prop]) {
                            if (fldcount++ < 2) {

                                summary = summary + "<div  class='scflexrow'><span><b>@@@-!!!:</b></span><span>###</span></div>".replace('@@@', fld.dsname).replace('!!!', fld.title).replace('###', item[fld.dsname + prop]);

                            }
                            else {

                                detail = detail + "<div class='scflexrow'><span><b>@@@-!!!:</b></span><span>###</span></div>".replace('@@@', fld.dsname).replace('!!!', fld.title).replace('###', item[fld.dsname + prop]);

                            }

                            
                        }
                        else {
                          
                            if (fldcount < 2) {

                                summary = summary + "<div class='scflexrow'><span><b>@@@-!!!:</b></span><span></span></div>".replace('@@@', fld.dsname).replace('!!!', fld.title);

                            }
                            else {

                                detail = detail + "<div class='scflexrow'><span><b>@@@-!!!:</b></span><span></span></div>".replace('@@@', fld.dsname).replace('!!!', fld.title);

                            }
                        }
                    });
                    body = body + "<details><summary>###</summary>!!!</details>".replace('###', summary).replace('!!!', detail)
                }
                else {
                    obj.fieldList.forEach(fld => {
                        let prop = obj.fieldIsAlphaNumeric ? GetAlphaNumeric(fld) : fld;
                        if (item[prop]) {
                            if (fldcount++ < 2) {

                                summary = summary + "<div class='scflexrow'><span><b>!!!:</b></span><span>###</span></div>".replace('!!!', fld).replace('###', item[prop]);

                            }
                            else {

                                detail = detail + "<div class='scflexrow'><span><b>!!!:</b></span><span>###</span></div>".replace('!!!', fld).replace('###', item[prop]);

                            }
                           
                        }
                        else {
                            if (fldcount < 2) {

                                summary = summary + "<div class='scflexrow'><span><b>!!!:</b></span><span></span></div>".replace('!!!', fld);

                            }
                            else {

                                detail = detail + "<div class='scflexrow'><span><b>!!!:</b></span><span></span></div>".replace('!!!', fld);

                            }
                        }
                    });
                    body = body + "<details><summary>###</summary>!!!</details>".replace('###', summary).replace('!!!', detail)
                }
            });
            dgdiv.innerHTML =  body;
        }


    }
    else { 
        dgdiv.classList.remove("flexcol");
        dgdiv.classList.add("grid" + id);
       

    var header = "";
    if (obj.fieldWithDSTitle && obj.fieldWithDSTitle.length > 0) {
        obj.fieldWithDSTitle.forEach(fld => {
            header = header + "<div class='flexcol'><h3>!!!</h3><h3>###</h3></div>".replace('!!!', fld.dsname).replace('###', fld.title);
        });
    }
    else {
        obj.fieldList.forEach(fld => {
            header = header + "<div><h3>###</h3></div>".replace('###', fld);
        });
    }
    var body = "";
    let start = (pageinfo.pageNo - 1) * pageinfo.pageSize;
    if (start < obj.items.length) {
        let end = start + pageinfo.pageSize
        let items = obj.items.slice(start, end);
        items.forEach(item => {
            if (obj.fieldWithDSTitle && obj.fieldWithDSTitle.length > 0) {
                obj.fieldWithDSTitle.forEach(fld => {
                    let prop = obj.fieldIsAlphaNumeric ? GetAlphaNumeric(fld.title) : fld;
                    if (item[fld.dsname + prop]) {

                        body = body + "<div>###</div>".replace('###', item[fld.dsname + prop]);
                    }
                    else {
                        body = body + "<div></div>"
                    }
                });

            }
            else {
                obj.fieldList.forEach(fld => {
                    let prop = obj.fieldIsAlphaNumeric ? GetAlphaNumeric(fld) : fld;
                    if (item[prop]) {

                        body = body + "<div>###</div>".replace('###', item[prop]);
                    }
                    else {
                        body = body + "<div></div>"
                    }
                });
            }
        });
        dgdiv.innerHTML = header + body;
    }
 }
}
var setUpRenderGrid = function (id) {
    let pageinfoStr = localStorage.getItem(id + "pageinfo");
    if (!pageinfoStr) {
        let obj = data.get(id);
        let pageinfo = new Object();
        pageinfo.pageSize = 5;
        pageinfo.pageNo = 1;
        pageinfo.pageSizeOptions = [5, 10, 20];
        pageinfo.itemCount = obj.items.length;
        localStorage.setItem(id + "pageinfo", JSON.stringify(pageinfo));      
    }
    renderGridPage(id);
    renderPaging(id);
}
