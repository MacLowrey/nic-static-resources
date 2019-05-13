var mainDropdown = '.lictypedrop div select';
/*  ^^This is the selector for the main drop down. We give that drop down the 
** "lictypedrop" class in app engine then it looks for the 'form-control' 
** class inside of that to listen for actions and check the value. We save
** it here so we don't need to write that every time.
*/ 


//This function checks on page load if a drop down should be shown
$(document).ready(function (){ //When the page loads run this code
var selected = $(mainDropdown).find("option:selected").text(); //Get the value of the dropdown
        console.log(selected); //Put it in console (for testing)
        slide(selected); //Pass the value to the slide function
});


//This Function Runs every time the top dropdown changes
$(mainDropdown).change(function() { //When the dropdown changes run this code
	var selected = $(mainDropdown).find("option:selected").text(); //Get the value of the dropdown
	console.log(selected); //Put it in the console (for testing)
	slide(selected); //Pass the value to the slide function
});

//This function reveals a drop down dependent on the value it is passed
/* A Note, 
** You need to have given everything you want to show/hide a class in app engine
** It doesn't matter what you call it, just needs to be unique and not used elsewhere in the app.
** In this form we used foodlicclass, lodgelicclass, and poollicclass and put them in the slide and slideUpAll functions
**
*/
function slide(text){
	slideUpAll(); //Hide all drop downs
	if(text ==='Food')  //Is the value we were passed Food?
	{$('.foodlicclass').slideDown();} //If Food slide down the 'foodlicclass'
	if(text ==='Public Bathing') //Is it Public Bathing?
	{$('.poollicclass').slideDown();} //If Yes, show 'poollicclass'
	if(text ==='Lodging') //Is it lodging?
	{$('.lodgelicclass').slideDown();} //If Yes, show 'lodgelicclass'
}
//This function hides all the drop downs
function slideUpAll()
{
	$('.foodlicclass').slideUp();
	$('.poollicclass').slideUp();
	$('.lodgelicclass').slideUp();
}


//BEGIN SELECT FIX

/*
Need to clear out the selections in case someone changes their mind.
If someone changes from Food To Lodging they would be charged for both their
food and lodging selections. This code clears out the other two fields when
one drop down is selected.
*/


var poollic = '.poollicclass select';
var lodgelic = '.lodgelicclass select';
var foodlic = '.foodlicclass select';


$(foodlic).change(function() {
clearDrops(foodlic);
});
$(poollic).change(function() {
clearDrops(poollic);
});
$(lodgelic).change(function() {
clearDrops(lodgelic);
});


function clearDrops(calledby){
	if(!calledby.includes('pool'))
	{console.log('Not Pool');
	$(poollic).val('');
	}
	if(!calledby.includes('lodge'))
	{console.log('Not Lodge');
	$(lodgelic).val('');
	}
	if(!calledby.includes('food'))
	{console.log('Not Food');
	$(foodlic).val('');
	}

}
