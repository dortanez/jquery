const movieArray = [];

for(let i = 1; i <= 10; i++) {
    $('select').append('<option class="rate">' + i + '</option>')
}

$('input[type="submit"]').on('click', function(e) {
    e.preventDefault();
    $('table').append("<tr><td>" + $('#title').val() + "</td><td>" + $('#rating').val() + "</td></tr>")
    
    
})