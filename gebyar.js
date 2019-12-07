
function storeData(){

	var db = firebase.firestore();

	var akun = document.getElementById("akun").value;

	var hp = document.getElementById("hp").value;

	db.collection("null").add({

	})
	.then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        
 


	if (akun === ""){
		alert("Masukan akun sosmed");
		return false;
	}else{

	}

	if (hp === "") {
		alert("Masukan nomor hp");
		return false;
	}
	
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