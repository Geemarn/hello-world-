
$("ul").on("click", "li", function(){
	$(this).toggleClass("clicked")
})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	})
	event.stopPropagation();
})
$("input").keypress(function(event){
	if(event.which === 13){
	var todo = $(this).val();
	$(this).val("");
	$("ul").append("<li> <span class='trash'><i class='fas fa-trash'></i></span> " + todo + "</li>")
	}
})
$("#pencil").click(function(){
	$("input").slideToggle();
})