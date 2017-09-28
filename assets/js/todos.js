// check off strike thorugh
$("ul").on("click", "li", function() {
	$(this).toggleClass("out")
})


$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//getting text from input
		var todoText = $(this).val()
		// create new li and add to ul and clear input and add span
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})