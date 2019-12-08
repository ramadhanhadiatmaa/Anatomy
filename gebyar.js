
function storeData(){

	var db = firebase.firestore();

	var akun = document.getElementById("akun").value;

	var hp = document.getElementById("hp").value;

	var modal = document.getElementById("myModal1");
	var modal2 = document.getElementById("myModal2");

	// Get the button that opens the modal
	var btn = document.getElementById("submit");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	db.collection("null").add({

	})
	.then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);


	if (akun === ""){
		//alert("Masukan akun sosmed");
		
  		modal.style.display = "block";

  		span.onclick = function() {
		  modal.style.display = "none";
		}

		window.onclick = function(event) {
		  if (event.target == modal) {
		    modal.style.display = "none";
		  }
		}

		return false;
	}else{
	
	}


	if (hp === ""){
		modal2.style.display = "block";

  		span.onclick = function() {
		  modal2.style.display = "none";
		}

		window.onclick = function(event) {
		  if (event.target == modal2) {
		   modal2.style.display = "none";
		  }
		}

		return false;
	}else{

	}



	// When the user clicks anywhere outside of the modal, close it
	
	
	db.collection("daftar").doc(docRef.id).set({
          id: docRef.id,
          akun: akun,
          hp: hp,
          jam: firebase.firestore.Timestamp.fromDate(new Date()),
        })

        document.getElementById("nomor").innerHTML = docRef.id;

     

    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        //window.alert("Login terlebih dahulu");
    });

  
}