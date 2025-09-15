function IsLetter(code) {
    var outval = false;
    if (code >= 97 && code <= 122) {
        outval = true;
    }
    return outval;
}
function IsLetterOrDigit(code) {
    var outval = false;
    if (code >= 97 && code <= 122) {
        outval = true;
    }
    else {
        if (code >= 48 && code <= 57) {
            outval = true;
        }
    }
    return outval;
}
function GetAlphaNumeric(valin) {
    var val = valin.toLowerCase();
    var valout = [];
    for (var i = 0; i < val.length; ++i) {
        var code = val.charCodeAt(i);
        if (IsLetterOrDigit(code)) {
            valout.push(val[i]);
        }
        else {
            var codestr = code.toString();
            for (var j = 0; j < codestr.length; ++j) {
                valout.push(codestr[j]);
            }
        }
    }
    return valout.toString().replace(/,/g, "");
}
function GetAlphaNumericUniqueNoSpace(valin) {
    var val = valin.toLowerCase();
    var outval = val.trim().replace(/\s+/g, "");
    return GetAlphaNumericUnique(outval);
}
function GetAlphaNumericUnique(valin) {
    var val = valin.toLowerCase();
    var valout = [];
    for (var i = 0; i < val.length; ++i) {
        var code = val.charCodeAt(i);
        if (!IsLetterOrDigit(code)) {
            var codestr = code.toString();
            for (var j = 0; j < codestr.length; ++j) {
                valout.push(codestr[j]);
            }
        }
        else {
            if (IsLetter(code)) {
                valout.push(val[i]);
            }
            else {
                valout.push("x");
                valout.push(val[i]);
                valout.push("x");
            }
        }
    }
    return valout.toString().replace(/,/g, "");
}
function GetKeyFromFieldText(fld, value) {
    switch (fld.KeyTransform) {
        case "alphanumeric":
            return GetAlphaNumeric(value);
        case "alphanumericunique":
            return GetAlphaNumericUnique(value);
        case "alphanumericuniquenospace":
            return GetAlphaNumericUniqueNoSpace(value);

        default:
            return GetAlphaNumeric(value);
    }


}
function GetVal(val) {
    if (val < 10) {
        return "0" + val.toString();
    }
    return val.toString();
}
function GetUTCNowTimeTicks() {
    var d = new Date();
    var n = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
    return n;
}
function GetYearWeek(day) {
    var val = Math.floor(day / 7);
    if (val === 0) {
        val = 1;
    }
    return GetVal(val);
}
function GetYearWeekMonSun(dd) {
    var YearFirst = GetYearFirst(dd);
    var YearFirstWeekDay = YearFirst.getDay() - 1;
    if (YearFirstWeekDay < 0) {
        YearFirstWeekDay = 6;
    }
    var val = 1;
    if (GetDayOfYear(dd) > 7) {
        var day = GetDayOfYear(dd) + YearFirstWeekDay - 7;
        val = Math.floor(day / 7);
        if (val < 1) {
            val = 1;
        }
        val += 1;
    }
    return GetVal(val);
}
function GetYearWeekSunSat(dd) {
    var YearFirst = GetYearFirst(dd);
    var YearFirstWeekDay = YearFirst.getDay();
    var val = 1;
    if (GetDayOfYear(dd) > 7) {
        var day = GetDayOfYear(dd) + YearFirstWeekDay - 7;
        val = Math.floor(day / 7);
        if (val < 1) {
            val = 1;
        }
        val += 1;
    }
    return GetVal(val);
}
function GetYearFirst(dd) {
    var YearFirst = new Date();
    YearFirst.setDate(1);
    YearFirst.setMonth(0);
    YearFirst.setFullYear(dd.getFullYear());
    return YearFirst;
}
function GetDayOfYear(dd) {
    var YearFirst = GetYearFirst(dd);
    var diff = dd.valueOf() - YearFirst.valueOf();
    var days = Math.floor(diff / (24 * 60 * 60 * 1000));
    return days;
}
function GetDateTimeTransform(transform, val) {
    if (typeof val === 'string') {
        val = new Date(val);
    }
    var outval = val;
    switch (transform) {
        case "YYYYMMDDhhmmss":
            outval = val.getFullYear().toString() + GetVal(val.getMonth() + 1) + GetVal(val.getDate()) + GetVal(val.getHours()) + GetVal(val.getMinutes()) + GetVal(val.getSeconds());
            break;
        case "YYYYMMDDhhmm":
            outval = val.getFullYear().toString() + GetVal(val.getMonth() + 1) + GetVal(val.getDate()) + GetVal(val.getHours()) + GetVal(val.getMinutes());
            break;
        case "YYYYMMDDhh":
            outval = val.getFullYear().toString() + GetVal(val.getMonth() + 1) + GetVal(val.getDate()) + GetVal(val.getHours());
            break;
        case "YYYYMMDD":
            outval = val.getFullYear().toString() + GetVal(val.getMonth() + 1) + GetVal(val.getDate());
            break;
        case "YYYYMM":
            outval = val.getFullYear().toString() + GetVal(val.getMonth() + 1);
            break;
        case "YYYY":
            outval = val.getFullYear().toString();
            break;
        case "YYYYWeek":
            outval = val.getFullYear().toString() + GetYearWeek(GetDayOfYear(val));
            break;
        case "YYYYWeekSunSat":
            outval = val.getFullYear().toString() + GetYearWeekSunSat(val);
            break;
        case "YYYYWeekMonSun":
            outval = val.getFullYear().toString() + GetYearWeekMonSun(val);
            break;
        case "Time":
            outval = GetVal(val.getHours()) + GetVal(val.getMinutes());
            break;
        case "Ticks":
            outval = val.valueOf().toString();
            break;
        default:
            outval = val.valueOf().toString();
            break;
    }
    return outval;
}
function GetDateTimeTransformUTC(transform, val) {
    if (typeof val === 'string') {
        val = new Date(val);
    }
    var outval = val;
    switch (transform) {
        case "YYYYMMDDhhmmss":
            outval = val.getUTCFullYear().toString() + GetVal(val.getUTCMonth() + 1) + GetVal(val.getUTCDate()) + GetVal(val.getUTCHours()) + GetVal(val.getUTCMinutes()) + GetVal(val.getUTCSeconds());
            break;
        case "YYYYMMDDhhmm":
            outval = val.getUTCFullYear().toString() + GetVal(val.getUTCMonth() + 1) + GetVal(val.getUTCDate()) + GetVal(val.getUTCHours()) + GetVal(val.getUTCMinutes());
            break;
        case "YYYYMMDDhh":
            outval = val.getUTCFullYear().toString() + GetVal(val.getUTCMonth() + 1) + GetVal(val.getUTCDate()) + GetVal(val.getUTCHours());
            break;
        case "YYYYMMDD":
            outval = val.getUTCFullYear().toString() + GetVal(val.getUTCMonth() + 1) + GetVal(val.getUTCDate());
            break;
        case "YYYYMM":
            outval = val.getUTCFullYear().toString() + GetVal(val.getUTCMonth() + 1);
            break;
        case "YYYY":
            outval = val.getUTCFullYear().toString();
            break;
        case "YYYYWeek":
            outval = val.getUTCFullYear().toString() + GetYearWeek(GetDayOfYear(val));
            break;
        case "YYYYWeekSunSat":
            outval = val.getUTCFullYear().toString() + GetYearWeekSunSat(val);
            break;
        case "YYYYWeekMonSun":
            outval = val.getUTCFullYear().toString() + GetYearWeekMonSun(val);
            break;
        case "Time":
            outval = GetVal(val.getUTCHours()) + GetVal(val.getUTCMinutes());
            break;
        case "Ticks":
            outval = val.valueOf().toString();
            break;
        default:
            outval = val.valueOf().toString();
            break;
    }
    return outval;
}
function GetKeyFromFieldDateTime(fld, val) {

    return GetDateTimeTransform(fld.DateKeyTransform, val);


}
function GetShortNameFromFieldDateTime(fld, val) {

    return GetDateTimeTransform(fld.ShortNameDateTransform, val);


}
function GetKeyFromFieldSubForm(obj, fld, item, value) {
    var key = ""


    if (obj.SubForms !== undefined && obj.SubForms !== null && obj.SubForms.length > 0) {
        //    var SubForms = obj.SubForms.filter(f => f.parentFldName === fld.FldName);
        var SubForms = obj.SubForms.filter(f => f.parentName === GetParentName(item, fld));
        for (var i = 0; i < SubForms.length; ++i) {

            key = key + SubForms[i].key;
        }

    }
    return key;
}
function GetShortNameFromFieldSubForm(obj, fld, item, value) {
    var ShortName = ""

    if (obj.SubForms !== undefined && obj.SubForms !== null && obj.SubForms.length > 0) {
        var SubForms = obj.SubForms.filter(f => f.parentName === GetParentName(item, fld));
        for (var i = 0; i < SubForms.length; ++i) {
            if (ShortName === "") {
                ShortName = SubForms[i].ShortName;
            }
            else {
                ShortName = ShortName + ' ' + SubForms[i].ShortName;
            }
        }

    }
    return ShortName;
}
function GetKeyFromField(rootitem, fld, item, value) {

    switch (fld.DataType) {

        case "Text":
            return GetKeyFromFieldText(fld, value);
        case "Number":
            return value.toString();
        case "bool":
            return value ? "1" : "0";
        case "DateTime":
            return GetKeyFromFieldDateTime(fld, value);
        case "SubForm":
            return GetKeyFromFieldSubForm(rootitem, fld, item, value);

        default:
            return value;


    }



}
function GetShortNameFromField(rootitem, fld, item, value) {

    switch (fld.DataType) {

        case "Text":
            return value;
        case "Number":
            return value;
        case "bool":
            return value ? 1 : 0;
        case "DateTime":
            return GetShortNameFromFieldDateTime(fld, value);
        case "SubForm":
            return GetShortNameFromFieldSubForm(rootitem, fld, item, value);

        default:
            return value;


    }



}