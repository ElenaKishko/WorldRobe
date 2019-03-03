$(function(){
    var puppy;
    // Attach a button listener to the button
    $('.btn').on('click', function() {
        // On click on the button, make an AJAX request to reddit for results of cute puppies      
        //https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
        $.ajax({
            type: 'GET',
			url: 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true',
            success: function(data) {
                // puppy = data;
                console.log(puppy);				
				//console.log(data.data.children[0].data.thumbnail);
				var i=0;
				while(i<data.data.children.length){
					//console.log(data.data.children[i].data.thumbnail);
					//var myText = document.getElementsByClassName("text");
					var myText = document.createElement("div");
					var myImg = document.createElement("img");
					myImg.setAttribute("src", data.data.children[i].data.thumbnail);
					//console.log(myImg);
					myText.append(myImg);
					console.log(myText);
					i++;					
				}
            }   
        });
    });
// For each of the elements in data.children, 
//append a new <img> element to .text with the src as the child.data.thumbnail
});