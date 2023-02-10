$(document).ready(function() {

$.ajax({
    url: "https://localhost:8080/api/municipalities",
    type: 'GET',
    dataType: 'json',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function(res) {
        if(res?.items?.length) {
            res?.items?.map((item) => {
                
                $("#cities").append('<option value=' + item?.id + '>' + item?.name + '</option')
            })
        }
    }
});

})