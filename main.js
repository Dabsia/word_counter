		function countWord() {
			var words = document.getElementById("word").value;
			// Initialize the word counter
			var count = 0;
			// Split the words on each space character
			var split = words.split(' ');
            console.log(split)
            
			// Loop through the words and increase the counter when each split word is not empty
			for (var i = 0; i < split.length; i++) {
				if (split[i] != "") {
					count += 1;
				}
                
			}
			// Display it as output
			var show = document.getElementById("show");
            show.textContent = count;
}