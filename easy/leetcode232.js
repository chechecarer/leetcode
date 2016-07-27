/**
 * @constructor
 */
var Queue = function() {
    return new Array();
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    Array.call.push(this, x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
	if(!this.empty){
		Array.call.shift();
	}  
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
	if(!this.empty){
		return Array.call.shift();
	} 
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return (this.length === 0)? true: false;
};