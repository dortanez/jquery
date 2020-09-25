const movieArray = [];
let currentID = 0;

// creating rating list 1-10
for(let i = 1; i <= 10; i++) {
    $('select').append('<option class="rate">' + i + '</option>')
}

// submitting movie rating
$('form').on('submit', function(e) {
    e.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();
    const movieData = {title, rating, currentID};
    movieArray.push(movieData);
    currentID++;
    $('table').append(createHTMLData(movieData));
    $(this).trigger('reset')
})

// delete rating when clicking on delete button
$('section').on('click','.far', function(e) {
    const indexId = movieArray.findIndex((val) => {val.currentID === e.target.id});
    movieArray.splice(indexId,1);
    $(this).parent().parent().remove();
})

// create movie rating data to append to html page
const createHTMLData = (data) => {
    return `
    <tr>
        <td> ${data.title} </td>
        <td> ${data.rating} </td>
        <td><i class='far fa-trash-alt' id='${data.currentID}'></i></td>
    </tr>
    `
}