
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});
$("#plusminus").click(function () {
    $("input").toggleClass("show");
    if($(this).attr("class") === "fa fa-plus")
        $(this).attr("class", "fa fa-minus");
    else
        $(this).attr("class", "fa fa-plus");
});