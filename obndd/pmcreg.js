var ddID = "#5e51a0ee-e52a-4fa7-ae2d-276b784f16c7";
var nonPaymentMessage = ".noPayAlert"; //Should be declared hidden in your css file or you can just include $(".noPayAlert").css("visibility","hidden"); in your logic.
console.log("Hello World!");
//Disable Input until Exemption is not requested
/*function getTempID(){
	$.getJSON("https://jonlowrey.com/nic/obndd/pmctempid.php", function( data ) {
  		var items = [];
  		$.each( data, function( key, val ) {
   			items.push( "<li id='" + key + "'>" + val + "</li>" );
  			console.log("Hello!");
		});
	});

};*/
function disableStuff(){
$(".form-control").prop('disabled', true);
$(ddID).prop('disabled', false);
$("#MainContent_Main_Wizard1_ctl00_Page1Group1TextBox4").prop('disabled', false);
};
$(document).ready(function () {
    if(window.location.href.indexOf("Yes") > -1) { //They select payment exemption
       console.log("Request Payment Exemtion");
    }
        if($(ddID).length)
        {
                disableStuff();
        }


        if($(ddID).find("option:selected").text() === "No")
        {
                $(".form-control").prop('disabled', false);
        }if($(ddID).find("option:selected").text() === "Yes")
        {
                $(nonPaymentMessage).css("visibility","visible"); //Need to Update this
        }
});



//ON Change Function
//show Purchase Order Link
$(ddID).change(function(){
        var changed = $(this).find("option:selected").text();
        //console.log(changed);
        if(changed === "Yes")
        {
                //console.log("i ran");
                $(nonPaymentMessage).css("visibility","visible");
                disableStuff();
		$("#MainContent_Main_Wizard1_ctl00_Page1Group1Egov_FormServices_Web_WebControls_MultiLineTextBox3TextBox1").prop('disabled', false);
        }
        else if(changed ==="No"){
                $(".form-control").prop('disabled', false);
                $(nonPaymentMessage).css("visibility","hidden");
		//getTempID();

        }
        else{
                $(nonPaymentMessage).css("visibility","hidden");
                disableStuff();
        }

});


//Questions Page
var q1ID ="#MainContent_Main_Wizard1_ctl00_Page2Group2DropDownList2";

$(q1ID).change(function(){
	var changed = $(this).find("option:selected").text();
	if(changed === "Yes"){
	$(".exp1").css("visibility","visible");
	//console.log("Im here!");
	
	}
	else if(changed === "No"){
	$(".exp1").css("visibility","hidden");

	
	
	}
	else{}
});
