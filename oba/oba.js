$(".sameAsResCheck input[type='checkbox']").change(function() {
    if(this.checked) {
        $(".bizAddr").slideDown();
    }
    else{
	$(".bizAddr").slideUp();
    }
});

console.log("it works!");
$(".reciprocal").hide();
$(".baseState").hide();
$(".bizAddr").hide();
$(".archCand").hide();

$(".actionDrop select").change(function() {
	applicationTypeCheck();
});

$(".liceDrop select").change(function() {
        licenseTypeCheck();
	archCanAlert();
});
$( document ).ready(function() {
	var text = $(".actionDrop select").find("option:selected").text();
	console.log(text);
	applicationTypeCheck();
	licenseTypeCheck();
});


//BEGIN PASTE FROM REGENTS

//Define Checks

//Page 1
function applicationTypeCheck()
{
	console.log("LOAD!");
        console.log($(".actionDrop select").find("option:selected").text());
        var text = $(".actionDrop select").find("option:selected").text();
        console.log(text);
        if(text.toLowerCase().includes('base')){
                $(".baseState").slideDown();
                $(".reciprocal").slideUp();
        }
        else if(text.toLowerCase().includes('reciprocal')){
                $(".baseState").slideUp();
                $(".reciprocal").slideDown();
        }
        else{
                $(".baseState").slideUp();
                $(".reciprocal").slideUp();
        }
}

function licenseTypeCheck()
{
        var text = $(".liceDrop select").find("option:selected").text();
        if(text.toLowerCase().includes('landscape')){
                $(".ltINTER").slideUp();
                $(".ltARCH").slideUp();
                $(".ltLAND").slideDown();
        }
        else if(text.toLowerCase().includes('interior')){
                $(".ltARCH").slideUp();
                $(".ltLAND").slideUp();
                $(".ltINTER").slideDown();
        }
	else if(text.toLowerCase().includes('architect')){
                $(".ltINTER").slideUp();
                $(".ltLAND").slideUp();
                $(".ltARCH").slideDown();
		if(text.toLowerCase().includes('candidate')){
		$(".archCand").slideDown();
		}
        }
        else{
		$(".ltINTER").slideUp();
                $(".ltLAND").slideUp();
                $(".ltARCH").slideUp();
        }

	if(text.toLowerCase().includes('candidate')){
                $(".noncandidate").slideUp();
                $(".candidate").slideDown();
        }else{
                $(".noncandidate").slideDown();
                $(".candidate").slideUp();
	}
}

function archCanAlert(){
       var text = $(".liceDrop select").find("option:selected").text();
	console.log("Arch Candidate");
	if(text.toLowerCase().match('architect candidate')){
	console.log('match');
	}

}
