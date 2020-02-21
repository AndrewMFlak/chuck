console.log("hello js file");
var chuckPlaceholder = {};

const Url = ("https://api.chucknorris.io/jokes/random");
$('.callButton').click(function() {
    $.ajax({
        url: Url,
        type: "GET",
        success: function(result) {
            console.log(result);
            chuck = result;
            $('#returnDiv').append(chuck.value);
            console.log(chuck.id);
            console.log(chuck.value);
        },
        error:function(error){
            console.log(`Error ${error}`)
        }
    });
});

$('.clearButton').click(function() {
    $('#returnDiv').empty();
})