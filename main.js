$(document).ready(function(){
    $('body').on('submit', '#search-form', function(e) {
        let searchText = $('#search-text').val(); 
        getMovies(searchText); 
        e.preventDefault(); 
    }); 
}); 

// Get movies from OMDB api

function getMovies(searchText) {
    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?apikey=6c3b530f&' + searchText
    }).done(function(data) {
        // let movies = data.Search; 
        // let output = ''; 
        // $.each(movies, function(index, movie) {
        //     output += `
        //         <li>
        //             <a href="#">
        //                 <img src="${movie.Poster}">
        //                 <h2>${movie.Title}</h2>
        //                 <p>Release Year: ${movie.Year}</p>
        //             </a>
        //         </li>              
        //     `; 
        // }); 
        // $('#movies').html(output).listview('refresh'); 
        console.log(data)
    });
}