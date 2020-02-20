console.log("hello js file");

const Url = ("https://api.chucknorris.io/jokes/random");
$('.callButton').click(function() {
    $.ajax({
        url: Url,
        type: "GET",
        success: function(result) {
            console.log(result);
        },
        error:function(error){
            console.log(`Error ${error}`)
        }
    })
})