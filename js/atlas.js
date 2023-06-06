window.addEventListener("error", function(e){
	console.log(e);
	var errorMessage = "<p class=\"error\">Une erreur est intervenue :</p>";
	errorMessage += "<p class=\"errorBody\">"+e.message+"</p>";
	errorMessage += "<p class=\"errorBody\">à la ligne "+e.lineno+"</p>";
	errorMessage += "<p class=\"error\">Si ça arrive à nouveau, contacte-moi sur discord (Yann#9169)</p>";
	document.getElementById("loadingContent").innerHTML = errorMessage;
});



var atlas = [
	{
    	"id": 0,
    	"name": "Tardis",
    	"description": "",
    	"website": "",
    	"center": [
    		16.5,
    		137.5
    	],
    	"path": [
    		[
    			5.5,
    			115.5
    		],
    		[
    			9.5,
    			115.5
    		],
    		[
    			9.5,
    			114.5
    		],
    		[
    			14.5,
    			114.5
    		],
    		[
    			14.5,
    			113.5
    		],
    		[
    			15.5,
    			110.5
    		],
    		[
    			16.5,
    			109.5
    		],
    		[
    			17.5,
    			110.5
    		],
    		[
    			17.5,
    			113.5
    		],
    		[
    			18.5,
    			113.5
    		],
    		[
    			18.5,
    			114.5
    		],
    		[
    			23.5,
    			114.5
    		],
    		[
    			23.5,
    			115.5
    		],
    		[
    			27.5,
    			115.5
    		],
    		[
    			27.5,
    			117.5
    		],
    		[
    			28.5,
    			117.5
    		],
    		[
    			28.5,
    			118.5
    		],
    		[
    			29.5,
    			118.5
    		],
    		[
    			29.5,
    			122.5
    		],
    		[
    			28.5,
    			122.5
    		],
    		[
    			28.5,
    			159.5
    		],
    		[
    			29.5,
    			159.5
    		],
    		[
    			29.5,
    			161.5
    		],
    		[
    			3.5,
    			161.5
    		],
    		[
    			3.5,
    			159.5
    		],
    		[
    			4.5,
    			159.5
    		],
    		[
    			4.5,
    			122.5
    		],
    		[
    			3.5,
    			122.5
    		],
    		[
    			3.5,
    			118.5
    		],
    		[
    			4.5,
    			118.5
    		],
    		[
    			4.5,
    			117.5
    		],
    		[
    			5.5,
    			117.5
    		]
    	]
    },
	{
    	"id": 1,
    	"name": "Logo laser disc",
    	"description": "",
    	"website": "",
    	"center": [
    		531.5,
    		460.5
    	],
    	"path": [
    		[
    			499.5,
    			454.5
    		],
    		[
    			515.5,
    			449.5
    		],
    		[
    			520.5,
    			443.5
    		],
    		[
    			525.5,
    			438.5
    		],
    		[
    			531.5,
    			435.5
    		],
    		[
    			536.5,
    			435.5
    		],
    		[
    			537.5,
    			436.5
    		],
    		[
    			537.5,
    			439.5
    		],
    		[
    			530.5,
    			445.5
    		],
    		[
    			529.5,
    			446.5
    		],
    		[
    			529.5,
    			448.5
    		],
    		[
    			547.5,
    			448.5
    		],
    		[
    			551.5,
    			450.5
    		],
    		[
    			557.5,
    			447.5
    		],
    		[
    			559.5,
    			447.5
    		],
    		[
    			559.5,
    			449.5
    		],
    		[
    			552.5,
    			453.5
    		],
    		[
    			551.5,
    			454.5
    		],
    		[
    			551.5,
    			456.5
    		],
    		[
    			553.5,
    			456.5
    		],
    		[
    			555.5,
    			457.5
    		],
    		[
    			557.5,
    			458.5
    		],
    		[
    			570.5,
    			471.5
    		],
    		[
    			570.5,
    			473.5
    		],
    		[
    			548.5,
    			473.5
    		],
    		[
    			548.5,
    			472.5
    		],
    		[
    			542.5,
    			472.5
    		],
    		[
    			542.5,
    			473.5
    		],
    		[
    			534.5,
    			473.5
    		],
    		[
    			534.5,
    			472.5
    		],
    		[
    			531.5,
    			472.5
    		],
    		[
    			531.5,
    			473.5
    		],
    		[
    			524.5,
    			473.5
    		],
    		[
    			524.5,
    			472.5
    		],
    		[
    			519.5,
    			472.5
    		],
    		[
    			519.5,
    			473.5
    		],
    		[
    			497.5,
    			473.5
    		],
    		[
    			496.5,
    			472.5
    		],
    		[
    			496.5,
    			470.5
    		],
    		[
    			510.5,
    			456.5
    		],
    		[
    			509.5,
    			455.5
    		],
    		[
    			508.5,
    			454.5
    		],
    		[
    			506.5,
    			454.5
    		],
    		[
    			506.5,
    			455.5
    		],
    		[
    			503.5,
    			455.5
    		],
    		[
    			503.5,
    			456.5
    		],
    		[
    			499.5,
    			456.5
    		]
    	]
    }
];

//console.log("There are "+atlas.length+" entries in the Atlas.");

/*
atlas.sort(function(a, b){
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}
		// a must be equal to b
	return 0;
});

for(var i = 0; i < atlas.length; i++){
	if(atlas[i-1]){
		if(atlas[i-1].id == atlas[i].id){
			console.log(atlas[i-1].id + ": "+ atlas[i-1].name);
			console.log(atlas[i  ].id + ": "+ atlas[i  ].name);
		}
	}
}

console.log("biggest id: "+atlas[atlas.length-1].id + ", " + atlas[atlas.length-1].name);
*/


/*
for(var i = 0; i < atlas.length; i++){
	if(typeof atlas[i].website == "undefined"){
		console.log(atlas[i].name);
	} else if(atlas[i].website.trim() != ""){
		if(atlas[i].website.trim().substring(0, 4) != "http"){
			console.log(atlas[i].name + ": " + atlas[i].website);
		}
	}
}
*/

// sort by center.y, so that lines will overlap less
atlas.sort(function(a, b){
	if (a.center[1] < b.center[1]) {
		return -1;
	}
	if (a.center[1] > b.center[1]) {
		return 1;
	}
		// a must be equal to b
	return 0;
});




/*

// Populate with test data

for(var i = 0; i < 10000; i++){
	var x = ~~(Math.random() * 1000)+0.5;
	var y = ~~(Math.random() * 1000)+0.5;
	var w = ~~(Math.random()*100);
	var h = ~~(Math.random()*100);
	atlas.push({
		"id": 5,
    	"name": "test"+(i+3),
    	"website": "",
    	"subreddit": "",
    	"center": [0, 0],
    	"path":[
			[x, y],
			[x+w, y],
			[x+w, y+h],
			[x, y+h]
    	]
	});
}

*/

