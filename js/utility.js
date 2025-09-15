!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).uuidv4 = e() }(this, (function () { "use strict"; var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), e = new Uint8Array(16); function n() { if (!t) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return t(e) } for (var o = [], r = 0; r < 256; ++r)o.push((r + 256).toString(16).substr(1)); return function (t, e, r) { "string" == typeof t && (e = "binary" === t ? new Uint8Array(16) : null, t = null); var u = (t = t || {}).random || (t.rng || n)(); if (u[6] = 15 & u[6] | 64, u[8] = 63 & u[8] | 128, e) { for (var i = r || 0, d = 0; d < 16; ++d)e[i + d] = u[d]; return e } return function (t, e) { var n = e || 0, r = o; return (r[t[n + 0]] + r[t[n + 1]] + r[t[n + 2]] + r[t[n + 3]] + "-" + r[t[n + 4]] + r[t[n + 5]] + "-" + r[t[n + 6]] + r[t[n + 7]] + "-" + r[t[n + 8]] + r[t[n + 9]] + "-" + r[t[n + 10]] + r[t[n + 11]] + r[t[n + 12]] + r[t[n + 13]] + r[t[n + 14]] + r[t[n + 15]]).toLowerCase() }(u) } }));
var GuidIDStr = function () {
    var str = uuidv4();
    var parts = str.split('-');
    var guidStr = null;
    for (var i = 0; i < parts.length; ++i) {
        if (guidStr === null) {
            guidStr = parts[i];
        }
        else {
            guidStr = guidStr + parts[i];
        }
    }

    return guidStr;
}
/*
var getTreeFlow = function () {
    var tf = new Object();
    tf.id = GuidIDStr();
    tf.networkflow = networkflow;
    tf.flow = flow;
    tf.audit = audit;
    tf.security = security;
    tf.data = data;
    tf.n = new Object();
    tf.an = new Object();
    tf.v = new Object();
    tf.av = new Object();
    tf.an.tfid = tf.id;
    tf.av.tfid = tf.id;
    return tf;
}
*/
var computeNext = function (selectDate, monthMax, y, m, d) {
    if (d === monthMax) {
        selectDate = new Date(y, m + 1, 1);
    }
    else {
        selectDate.setDate(d + 1);
    }
    return selectDate;
}
var computePrev = function (selectDate, monthMax, y, m, d) {
    if (d === 1) {
        selectDate = new Date(y, m - 1, monthMax);
    }
    else {
        selectDate.setDate(d - 1);
    }
    return selectDate;
}
var isLeapYear = function (y) {
    var valid = false;
    if (y % 4 === 0) {
        if (y % 100 == 0) {
            if (y % 400 == 0) {
                valid = true;
            }
        }
        else {
            valid = true;
        }
    }
    return valid;
}
var getNextDay = function (selectDate) {
    var y = selectDate.getFullYear();
    var m = selectDate.getMonth();
    var d = selectDate.getDate();
    var newdate = new Date(y, m, d);
    switch (m) {
        case 0:
            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 1:
            var monthMax = isLeapYear(y) ? 29 : 28;
            newdate = computeNext(newdate, monthMax, y, m, d);
            break;
        case 2:

            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 3:
            newdate = computeNext(newdate, 30, y, m, d);
            break;
        case 4:
            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 5:
            newdate = computeNext(newdate, 30, y, m, d);
            break;
        case 6:
            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 7:
            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 8:
            newdate = computeNext(newdate, 30, y, m, d);
            break;
        case 9:
            newdate = computeNext(newdate, 31, y, m, d);
            break;
        case 10:
            newdate = computeNext(newdate, 30, y, m, d);
            break;
        case 11:
            if (d === 31) {
                newdate = new Date(y + 1, 0, 1);
            }
            else {
                newdate.setDate(d + 1);
            }

            break;

    }
    return newdate;
}
var getPrevDay = function (selectDate) {
    var y = selectDate.getFullYear();
    var m = selectDate.getMonth();
    var d = selectDate.getDate();
    var newdate = new Date(y, m, d);
    switch (m) {
        case 0:
            if (d === 1) {
                newdate = new Date(y - 1, 11, 31);
            }
            else {
                newdate.setDate(d - 1);
            }

            break;
        case 1:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 2:
            var monthMax = isLeapYear(y) ? 29 : 28;
            newdate = computePrev(newdate, monthMax, y, m, d);
            break;
        case 3:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 4:
            newdate = computePrev(newdate, 30, y, m, d);
            break;
        case 5:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 6:
            newdate = computePrev(newdate, 30, y, m, d);
            break;
        case 7:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 8:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 9:
            newdate = computePrev(newdate, 30, y, m, d);
            break;
        case 10:
            newdate = computePrev(newdate, 31, y, m, d);
            break;
        case 11:
            newdate = computePrev(newdate, 30, y, m, d);
            break;

    }
    return newdate;
}

var getDateTimeUTCNow = function () {
    var ddnow = new Date();
    var offset = ddnow.getTimezoneOffset() * 60 * 1000;
    var totalMS = ddnow.getHours() * 60 * 60 * 1000 + ddnow.getMinutes() * 60 * 1000 + ddnow.getSeconds() * 1000 + ddnow.getMilliseconds();

    var year = ddnow.getFullYear();
    var month = ddnow.getMonth();
    var day = ddnow.getDate();
    var isprevday = Math.abs(offset) > totalMS;

    totalMS = totalMS + offset;

    if (isprevday) {

        totalMS = totalMS + 24 * 60 * 60 * 1000;
        ddnow = getPrevDay(ddnow);
    }

    var h = Math.floor(totalMS / (60 * 60 * 1000));
    var msremain = Math.floor(totalMS % (60 * 60 * 1000));
    var m = Math.floor(msremain / (60 * 1000));
    msremain = Math.floor(msremain % (60 * 1000));
    var ss = Math.floor(msremain / 1000);
    var ms = Math.floor(msremain % 1000);

    var ddutc = new Date(Date.UTC(ddnow.getFullYear(), ddnow.getMonth(), ddnow.getDate(), h, m, ss, ms));
    return ddutc;



}
var getObjCopy = function(obj)
{
   var outobj = new Object();
outobj.objproplist = [];
   for (const prop in obj) {
         
       if (typeof obj[prop] === "object" || typeof obj[prop] === "function" )
           {
              try
              {
             // outobj[prop] = JSON.stringify(obj[prop]);
              outobj.objproplist.push(prop);
              }
              catch(e)
              {
                console.log(obj);
              } 
           }
           else
           {
              
               outobj[prop] = obj[prop];
           }

    }
return outobj;
}
var getHeaders = function(contentType)
{
var headerItems = new Headers();
headerItems.append( 'Content-Type', contentType);
return headerItems;
}
/*
var getFormDataParentAllChildArray = function (tf) {

    var form = tf.av.form;
    var itemlist = form.itemlist;
    var parent = tf.av.parent;
    var outarray = itemlist.filter(c => c.parentid === parent.id);
    var childarray = [];
    var getchildarray = itemlist.filter(c => c.parentid === parent.id);

    while (getchildarray.length > 0) {
        getchildarray.forEach(p => {
            var gc = itemlist.filter(c => c.parentid === p.id);
            if (gc.length > 0) {
                childarray = childarray.concat(gc);
            }
        });
        if (childarray.length > 0) {
            outarray = outarray.concat(childarray);

        }
        getchildarray = childarray;
        childarray = [];
    }

    tf.av.outarray = outarray;


}
*/