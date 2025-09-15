self.importScripts('js/utility.js', 'js/swmethods.js', 'js/db.js', 'js/errormessages.js', 'js/transform.js');
var cacheversion = 'v0';
var issw = true;
var innitloadfiles = [ 
    "css/index.css",
    "js/index.js", 
    "js/grid.js", 
    'js/svgraphics.js',
    "js/utility.js",
    "js/transform.js",
    "js/errormessages.js",
    "index.html"
];
self.addEventListener('install', installProcess);
self.addEventListener('activate', activateProcess);
self.addEventListener('message', messageProcess);
self.addEventListener('fetch', fetchProcessor);