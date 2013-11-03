function checkMailForm() {
	var errors = 0;
    var v = [];

    v.push(document.forms['mainForm'].contactFace);                  // req
    v.push(document.forms['mainForm'].companyName);                  // req
    v.push(document.forms['mainForm'].companyNumber);                // req
    v.push(document.forms['mainForm'].companyEmail);                 // req
    v.push(document.forms['mainForm'].deliveryFrom);                 // req
    v.push(document.forms['mainForm'].deliveryTo);                   // req

/*
    v.push(document.forms['mainForm'].deliverySendDate);             // --
    v.push(document.forms['mainForm'].deliveryTransportType);        // --
    v.push(document.forms['mainForm'].deliveryContract);             // --
    v.push(document.forms['mainForm'].deliveryConditions);           // --
    v.push(document.forms['mainForm'].deliveryWarningClass);         // --
    v.push(document.forms['mainForm'].cargoCode);                    // --
*/

    v.push(document.forms['mainForm'].cargoDescription);             // req
    v.push(document.forms['mainForm'].cargoCapacity);                // req
    v.push(document.forms['mainForm'].cargoManufacturer);            // req
    v.push(document.forms['mainForm'].cargoCountryFrom);             // req
    v.push(document.forms['mainForm'].cargoWeightBrutto);            // req
    v.push(document.forms['mainForm'].cargoWeight);                  // req
    v.push(document.forms['mainForm'].cargoCost);                    // req

/*
    v.push(document.forms['mainForm'].cargoDescr);                   // --
    v.push(document.forms['mainForm'].advancedDescr);                // --
    v.push(document.forms['mainForm'].test2);                        // --
*/

	for(ii = 0; ii < v.length; ii++){
		if(v[ii].value.length > 2){
			document.getElementById('var' + ii).style.backgroundColor="#fff";
		}
		else {
			document.getElementById('var' + ii).style.backgroundColor="#c99";
			errors = 1;
		}
	}

	if(errors == 0){
		document.forms['mainForm'].submit();
	}
	else {
		return false;
	}
}