console.log("hello js file");
var chuck = {};

const Url = ("https://api.chucknorris.io/jokes/random");
$('.callButton').click(function() {
    $.ajax({
        url: Url,
        type: "GET",
        success: function(result) {
            console.log(result);
            chuck = result;
            $('#returnDiv').append(chuck);
            var chuckId = chuck.id;
            var chuckJoke = chuck.value;
            console.log(chuckId);
            console.log(chuckJoke);
        },
        error:function(error){
            console.log(`Error ${error}`)
        }
    });
});