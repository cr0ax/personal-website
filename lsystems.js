var lsystems=function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,n){this.instructions=t,this.productionRules=n}return t.prototype.step=function(){for(var t=this.instructions.length,n="",e=0;e<t;e++)n+=this.productionRules[this.instructions[e]]||this.instructions[e];this.instructions=n},t.prototype.stepn=function(t){for(var n=0;n<t;n++)this.step()},t}();n.LSystem=i},function(t,n,e){"use strict";function i(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}Object.defineProperty(n,"__esModule",{value:!0}),i(e(0)),i(e(2)),i(e(3))},function(t,n,e){"use strict";function i(t){return Math.floor(Math.random()*t)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),o=function(){function t(){this.possible=["F","+","-","E","B","G","R"]}return t.prototype.singleRuleRandom=function(t){for(var n="",e=0;e<t;e++)n+=String(this.possible[i(this.possible.length)]);return n},t.prototype.ruleSetRandom=function(){return{F:this.singleRuleRandom(13),E:this.singleRuleRandom(13)}},t.prototype.randomSystem=function(){var t=this.ruleSetRandom();return new r.LSystem("F",t)},t.prototype.dragonCurve=function(){var t={F:"F+E+",E:"-F-E"};return new r.LSystem("F",t)},t}();n.Generator=o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t){var n=this;this.rotation=2*Math.PI/4,this.forwardStrings=["F","E"],this.turnLeftStrings=["-"],this.turnRightStrings=["+"],this.orientation=t.orientation||0,this.color=t.color||"#ff0000",this.instructions=t.instructions||[],this.currentIndex=t.currentIndex||0,this.stepLength=t.stepLength||5,this.ctx=t.canvasContext,this.locX=t.locX||0,this.locY=t.locY||0,this.renderWindow=t.renderWindow||5,this.onComplete=t.onComplete||function(){n.currentIndex=0}}return t.prototype.moveForward=function(){var t=this.stepLength*Math.cos(this.orientation*this.rotation),n=this.stepLength*Math.sin(this.orientation*this.rotation);this.locX=this.locX+t,this.locY=this.locY+n,this.ctx.lineTo(this.locX,this.locY)},t.prototype.turnRight=function(){this.orientation=(this.orientation+1)%4},t.prototype.turnLeft=function(){this.orientation=(this.orientation-1)%4},t.prototype.renderOneInstruction=function(t){var n=this.instructions[t],e=function(t){return function(n){return n.indexOf(t)>-1}}(n);e(this.forwardStrings)?this.moveForward():e(this.turnRightStrings)?this.turnRight():e(this.turnLeftStrings)&&this.turnLeft()},t.prototype.saveState=function(){return{x:this.locX,y:this.locY,orientation:this.orientation}},t.prototype.loadState=function(t){this.locX=t.x,this.locY=t.y,this.orientation=t.orientation},t.prototype.renderOnce=function(){this.ctx.beginPath(),this.ctx.moveTo(this.locX,this.locY),this.ctx.strokeStyle=this.color,this.renderOneInstruction(this.currentIndex);for(var t=this.saveState(),n=this.currentIndex+1;n<=this.currentIndex+this.renderWindow;n++)this.renderOneInstruction(n);this.currentIndex=this.currentIndex+1,this.ctx.stroke(),this.loadState(t),this.currentIndex>this.instructions.length&&this.onComplete()},t}();n.TraceRenderer=i}]);