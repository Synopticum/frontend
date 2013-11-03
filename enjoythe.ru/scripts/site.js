$(document).ready(function()
{
    //slides the element with class "menu_body" when paragraph with class "menu_head" is clicked 
    $("#menu li a").click(function()
    {
        $(this).next("div.podmenu").slideToggle(300).siblings("div.podmenu").slideUp("slow");
        $(this).siblings();
    });
	 $("a.top_link").click(function()
    {
        $(this).next("div.top_podmenu").slideToggle(300).siblings("div.top_podmenu").slideUp("slow");
        $(this).siblings();
    });
});