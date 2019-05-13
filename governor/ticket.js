var rowCount = $('#Page2Group2GridView1DisplayGridViewPage1Group2GridView1 > tbody >').length;

console.log("ADULT!");
console.log(rowCount);
$('#MainContent_Main_Wizard1_ctl00_Page2Group1TextBox3').val(rowCount);

var rowCountChild = $('#Page2Group2GridView2DisplayGridViewPage1Group2GridView2 > tbody >').length;

console.log("ADULT!");
console.log(rowCount);
$('#MainContent_Main_Wizard1_ctl00_Page2Group1TextBox4').val(rowCountChild);
