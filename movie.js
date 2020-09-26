const movieArray = [];
let currentID = 0;

// creating rating list 1-10
for(let i = 1; i <= 10; i++) {
    $('select').append('<option class="rate">' + i + '</option>')
}

// submitting movie rating
$('form').on('submit', function(e) {
    e.preventDefault();
    const title = $('#title-input').val();
    const rating = $('#rating-input').val();
    const movieData = {title, rating, currentID};
    movieArray.push(movieData);
    currentID++;
    $('tbody').append(createHTMLData(movieData));
    $(this).trigger('reset');
})

// delete rating when clicking on delete button
$('section').on('click','.far', function(e) {
    const indexId = movieArray.findIndex((val) => {val.currentID === e.target.id});
    movieArray.splice(indexId,1);
    $(this).parent().parent().remove();
})

// sorting movie ratings
$('.fas').on('click', function(e) {
    const direction = $(this).hasClass('fa-sort-down') ? 'down' : 'up';
    const keyToSortBy = $(this).attr('id');
    const sortedMovies = sortBy(movieArray, keyToSortBy, direction);
    $('tbody').empty();
    for(let movie of movieArray) {
        const HTMLToAppend = createHTMLData(movie);
        $('tbody').append(HTMLToAppend);
    }
    $(this).toggleClass('fa-sort-down');
    $(this).toggleClass('fa-sort-up');
})

// function that sorts the data
const sortBy = (arr, keyToSortBy, direction) => {
    return arr.sort((a,b) => {
        if(keyToSortBy === 'rating') {
            a[keyToSortBy] = +a[keyToSortBy];
            b[keyToSortBy] = +b[keyToSortBy];
        }
        if(a[keyToSortBy] > b[keyToSortBy]) {
            return direction === 'up' ? 1 : -1;
        } else if(b[keyToSortBy] > a[keyToSortBy]) {
            return direction === 'up' ? -1 : 1;
        }
        return 0;
    })
}

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