async function ajaxAdd(newSong) {
	try {
		const response = await fetch(`/uknumberones/add`, {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(newSong)
		});
		
		if(response.status == 400) {
			alert("Error occured! Possible invalid data");
		} else {
			alert('Song Added Successfully!');
		}
	} catch (e) {
		alert(`Error occured ${e}`);
	}
}

// Allows the AJAX run when we click a Button
document.getElementById('ajaxButton').addEventListener('click', ()=> {
	// Reads the artist name from the text field
	const song = {
		title: document.getElementById('songTitle').value,
		artist: document.getElementById('artistName').value,
		year: document.getElementById('yearDate').value,
		download: document.getElementById('downloadCount').value,
		price: document.getElementById('priceAmount').value,
		quantity: document.getElementById('totalQuantity').value
	}
	ajaxAdd(song);
});