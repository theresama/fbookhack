// var pressed = false
// var lastInput = ""

// window.onkeydown = function(e) {   
// 	var e = window.event||e;
//    	var key = e.keyCode ? e.keyCode : e.which;

//    	console.log(pressed +", " + key + ", " + document.activeElement.value + ", " + lastInput)
//    	if (key == 13 && document.activeElement.name == "add_comment_text_text" && !pressed && document.activeElement.value.trim()=="" && lastInput.trim()!="") {
//    		//alert("serdtfygvbhj")
//    		pressed = true
//    		e.preventDefault()
//        	if(isOffensive(lastInput)){
//        		    var r = window.confirm("Are you sure you want to comment this?");
//     			if( !r ){
//     				e.preventDefault()
//     				pressed = false
//     			}
//        	}pressed=false
//    	}
//    	lastInput = document.activeElement.value
// }

window.addEventListener('keypress', function (e) {
	if (e.keyCode == 13 && document.activeElement.name == "add_comment_text_text") {
		e.preventDefault
		element = document.activeElement.value
		if (isOffensive(element)){
    		var r = window.confirm("Are you sure you want to post this?");
    	}
    	if( !r )
    	event.preventDefault();
	}
}


var clickedPost = function(event)
{
	console.log(event);
	//event.preventDefault();
	element = document.querySelectorAll('input[name=xhpc_message]')[0].value;
	if (isOffensive(element)){
    var r = window.confirm("Are you sure you want to post this?");
    if( !r )
    	event.preventDefault();
	}
}

setTimeout(function() {
	element = document.querySelectorAll('button[value="1"][type="submit"]')[0]
	parent = element.parentNode
	element.addEventListener('click', clickedPost)

	element2 = document.querySelectorAll('button[value="1"][type="submit"]')[2]
	parent2 = element2.parentNode
	element2.addEventListener('click', clickedPost)

}, 500);

var isOffensive = function(profanity){

	var bad = new Array();
	bad[0] = /\w*fuck\w*/
 	bad[1] = /\w*fck\w*/
 	bad[2] = /\w*fuk\w*/
 	bad[3] = /\w*shit\w*/
 	bad[4] = /\w*penis\w*/
 	bad[5] = /\w*fag\w*/
 	bad[6] = /\w*ass\w*/
 	bad[7] = /\w*nigger\w*/
 	bad[8] = /\w*dick\w*/
 	bad[9] = /\w*cunt\w*/

 	for (var i = bad.length - 1; i >= 0; i--) {
 		if (bad[i].test(profanity))
 			return true;
 	};
 	return false;
}









