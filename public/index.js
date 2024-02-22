async function ajaxSearch(artistName) {
	try {
		const response = await fetch(`/uknumberones/artist/${artistName}`);
		
		const songList = await response.json();
		
		// Looping through the array of JSON objects and add the results to 'results' <div>
		//let html = "";
		songList.forEach(song => {
			const node1 = document.createElement("p");
			const textNode = document.createTextNode(`Artist Name: ${song.artist} Song Title: ${song.title} Year: ${song.year}<br />`);
			
			node1.appendChild(textNode);
			
			// creates the buy button
			const buttonElement = document.createElement("input");
			buttonElement.setAttribute("type", "button");
			buttonElement.setAttribute("value", "Buy");
			
			const textField = document.createElement("input");
			textField.setAttribute("id", `quantity${song.id}`);
			
			// Adding the new node to the <div id="results">
			document.getElementById("results").appendChild(node1);
			
			node1.appendChild(textField);
			
			// creates a "buy" button event handler
			buttonElement.addEventListener('click', ajaxBuy.bind(this, song));
			
			document.getElementById("results").appendChild(buttonElement);
		});
	} catch (e) {
		alert(`Error occured: ${e}`);
	}
}

async function ajaxBuy(purchaseSong) {
	try {
		const totalQuantity ={
			quantity: document.getElementById(`quantity${purchaseSong.id}`).value
		}
		
		const response = await fetch(`/uknumberones/${purchaseSong.id}/buy`, {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(totalQuantity)
		});
		
		if(response.status == 404) {
			alert("No song with that ID");
		} else {
			alert("Song bought successfully!");
		}
	} catch (e) {
		alert(`Error occured: ${e}`);
	}
}

// Allows the AJAX run when we click a Button
document.getElementById('ajaxButton').addEventListener('click', ()=> {
	// Reads the artist name from the text field
	const song = document.getElementById('artistName').value;
	ajaxSearch(song);
});