/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var rec1 = (C-A)*(D-B);
	var rec2 = (G-E)*(H-F);
	var width, height;

	if(C<=E || G<=A || D<=F || H <=B){
		return rec1+rec2;
	}
	
	height = Math.min(Math.abs(C-A), Math.abs(G-E), Math.abs(C-E), Math.abs(G-A));
	width = Math.min(Math.abs(D-B), Math.abs(H-F), Math.abs(D-F), Math.abs(H-B));
	
	return rec1+ rec2 - width*height;
};