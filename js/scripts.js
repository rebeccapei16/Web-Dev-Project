function validate(){
	//validation for zipcode
	var isNum = isNaN($("#zipcode").val());
	if (isNum==true){
		alert("The zipcode contains non-digit input!");
		return false;
	}

	if ($("#zipcode").val().length != 0){
		if ($("#zipcode").val().length != 5){
			alert("The zipcode does not contain five digits!");
			return false;
		}
	}
	return true;
}

function validate2(){

	var time_ = $("#pickupTime").val();
	var from = "07:00";
	var to = "17:00";
	if(time_<from){
		alert("Pickup Time needs to be after 7am.");
		return false;
	}
	if(time_>to){
		alert("Pickup Time needs to be before 5am.");
		return false;
	}

	var date_ = $("#pickupDate").val();
	var pudate = new Date(date_);
	if(pudate <= new Date()){
		alert("Pickup Date is not valid. Date has to be after today.");
		return false;
	}

	var isNumP = isNaN($("#phone").val());
	if (isNumP==true){
		alert("The Phone number contains non-digit input!");
		return false;
	}

	if ($("#phone").val().length != 10){
		alert("The zipcode does not contain ten digits!");
		return false;
	}

	//validation for zipcode
	var isNum = isNaN($("#zipcode").val());
	if (isNum==true){
		alert("The zipcode contains non-digit input!");
		return false;
	}

	if ($("#zipcode").val().length != 0){
		if ($("#zipcode").val().length != 5){
			alert("The zipcode does not contain five digits!");
			return false;
		}
	}
	return true;
}



