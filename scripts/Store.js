const store = function() {
	let items = [];
	const setVideo= function(garbage){
		items = garbage
	}
	return{
		items,
		setVideo
	}
}();