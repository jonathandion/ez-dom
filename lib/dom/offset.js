"use strict";Object.defineProperty(exports,"__esModule",{value:!0});

function offset(a){
return a.map(function(b){
return b.getBoundingClientRect();
})[0];
}exports.default=

offset;