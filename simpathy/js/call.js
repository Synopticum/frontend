$( ".a1" ).click(function() {
	$( ".page-qr, .page-profile" ).hide();
	$( ".page-list" ).show();
});

$( ".a2" ).click(function() {
	$( ".page-qr, .page-list" ).hide();
	$( ".page-profile" ).show();
});

$( ".qc a" ).click(function() {
	$( ".page-profile, .page-list" ).hide();
	$( ".page-qr" ).show();
});
