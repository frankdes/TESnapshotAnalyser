var svgns = "http://www.w3.org/2000/svg";
var createSVGTag = function (obj) {
    
    let tag = document.createElementNS(svgns, obj.tagType);
    for (const prop in obj.attributes) {
        tag.setAttribute(prop, obj.attributes[prop]);
    }
    if (obj.strokewidth) {
        tag.setAttribute("stroke-width", obj.strokewidth);
    }
    if (obj.textanchor) {
        tag.setAttribute("text-anchor", obj.textanchor);
    }
    if (obj.dominantbaseline) {
        tag.setAttribute("dominant-baseline", obj.dominantbaseline);
    }
    if (obj.fontsize) {
        tag.setAttribute("font-size", obj.fontsize);
    }
    if (obj.hasText) {
        const node = document.createTextNode(obj.text);
        tag.appendChild(node);
    }


    obj.elem.append(tag);
}
var getLegendsArray = function (minValue,maxValue) {
    let interval =( maxValue - minValue )/ 10;
    let legends = [];
    for (let i = interval + minValue; i < maxValue; i += interval) {
       
        legends.push(Number.parseFloat(i).toFixed(2).toString());
    }
    return legends;
}
var createSVGText = function(x, y, text,gtagid)
{
    let obj = new Object();
    obj.elem = document.getElementById(gtagid);
    obj.tagType = "text";
    obj.attributes = new Object();
    obj.attributes.x = x;
    obj.attributes.y = y;
   // obj.fontsize = "100%";
    obj.hasText = true;
    obj.text = text;
    obj.textanchor = "middle";
    obj.dominantbaseline = "middle";

    createSVGTag(obj);

}
var createSVGCircle = function () {
   
    let obj = new Object();
    obj.elem =  document.getElementById('svgroot');
    obj.tagType = "circle";
    obj.attributes = new Object();

    obj.attributes.parentId = 'svgroot';
    obj.attributes.id = GuidIDStr();
    obj.attributes.cx = "150";
    obj.attributes.cy = "125";
    obj.attributes.r = "80";
    obj.attributes.fill = "green";
    createSVGTag(obj);
}
var createGtag = function () {
    let obj = new Object();
    obj.elem = document.getElementById('svgroot');
    obj.tagType = "g";

    obj.attributes = new Object();
    obj.attributes.stroke = "black";
    obj.attributes.id = "gtag";
    obj.strokewidth = "1";
    createSVGTag(obj);
}
var createxGtag = function () {
    let obj = new Object();
    obj.elem = document.getElementById('gtag');
    obj.tagType = "g";
    
    obj.attributes = new Object();
    obj.attributes.stroke = "black";
    obj.attributes.id = "xtag";
    obj.strokewidth = "1";
    createSVGTag(obj);
}

var createyGtag = function () {
    let obj = new Object();
    obj.elem = document.getElementById('gtag');
    obj.tagType = "g";

    obj.attributes = new Object();
    obj.attributes.stroke = "black";
    obj.attributes.id = "ytag";
    obj.strokewidth = "1";
    createSVGTag(obj);
}
var createXLegends = function (length, interval, y,legends) {
    let i = 0;
    for (let l = interval; l < length; l += interval) {
        if (i < legends.length) {
            createSVGText(l, y, legends[i++],"xtag")
        }
    }
    
}
var createYLegends = function (length, interval, x, legends) {
    let i = 0;
    for (let l = interval; l < length; l += interval) {
        let index = legends.length - ++i;
        if (index < legends.length) {
            createSVGText(x, l, legends[index], "ytag")
        }
    }

}

var barChart = function (points, fill) {
    if (points.length > 0) {

        points.forEach(p => {
            if (!isNaN(p.x) && !isNaN(p.y)) {
                let obj = new Object();
                obj.elem = document.getElementById('xtag');
                obj.tagType = "rect";
                obj.attributes = new Object();
                obj.attributes.x = p.x + p.xoffset;
                obj.attributes.y = p.y > 0 ? -1 * Number(p.y) : 0;
                obj.attributes.width = p.w;
                obj.attributes.height = p.y > 0 ? p.y : -1 * p.y;
                obj.attributes.fill = fill;
                createSVGTag(obj);
            }

        });

    }
}

var createXaxis = function (length, interval, translateX, translateY, legends,yplacemnet ) {

    let d = "M 0 0 h " + length;
    for (let l = interval; l < length; l += interval) {
        d = d + " M" + l + " 5 v -10";
    }
    createxGtag();
    let obj = new Object();  
    obj.elem = document.getElementById('xtag');
    obj.tagType = "path";
    obj.attributes = new Object();
    obj.attributes.d = d;  //"M 0 0 h 1000  M 100 5 v -10 M 200 5 v -10 M 300 5 v -10  M 400 5 v -10   M 500 5 v -10  M 600 5 v -10  M 700 5 v -10  M 800 5 v -10  M 900 5 v -10";
    createSVGTag(obj);
    createXLegends(length, interval, yplacemnet, legends);
    if (translateX > 0 || translateY > 0) {
        obj.elem.setAttribute("transform", "translate(###,!!!)".replace('###', translateX).replace('!!!', translateY))
    }
  
}

var createYaxis = function (length, interval, translateX, translateY, legends,xplacment) {
    let d = "M 0 0 v " + length;
    for (let l = interval; l < length; l += interval) {
        d = d + " M 5 " + l + " h -10";
    }
    createyGtag();
    let obj = new Object();
    obj.elem = document.getElementById('ytag');
    obj.tagType = "path";
    obj.attributes = new Object();
    obj.attributes.d = d;  //"M 0 0 v 1000  M 5 100 h -10 M 5 200 h -10 M 5 300 h -10  M 5 400 h -10   M 5 500 h -10  M 5 600 h -10  M 5 700 h -10  M 5 800 h -10  M 5 900 h -10";
    createSVGTag(obj);
    createYLegends(length, interval, xplacment,legends);
    if (translateX > 0 || translateY > 0) {
        obj.elem.setAttribute("transform", "translate(###,!!!)".replace('###', translateX).replace('!!!', translateY))
    }
    //obj.elem.setAttribute("transform", "translate(0,500)")

}
var translateGTag = function () {
    let elem = document.getElementById('gtag');
    elem.setAttribute("transform", "translate(0,500)")
}