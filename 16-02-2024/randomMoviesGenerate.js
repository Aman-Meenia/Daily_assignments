import { add_new_movie_contianer } from "./addMovieToContainer.js"
const list = [
    {
        "title": "Jawaan",
        "duration": "134 min",
        "genre": "Action, Thriller",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BYTM0MDdkMTgtNjlmZi00NmU5LTg3NDAtNDg5NGY4YzMyNjYzXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_SX300.jpg",
        "logoClass": "ri-heart-line"
    },
    {
        "title": "Baahubali: The Beginning",
        "duration": "159 min",
        "genre": "Action, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
        "logoClass": "ri-heart-line"
    },
    {
        "title": "Adipurush",
        "duration": "179 min",
        "genre": "Action, Adventure, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "Animal",
        "duration": "204 min",
        "genre": "Action, Crime, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "Bhaag Milkha Bhaag",
        "duration": "186 min",
        "genre": "Biography, Drama, Sport",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "PK",
        "duration": "153 min",
        "genre": "Comedy, Drama, Sci-Fi",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMTg5NzIzMzEyOF5BMl5BanBnXkFtZTgwMjgzMTg0MzE@._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "Don",
        "duration": "171 min",
        "genre": "Action, Crime, Thriller",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMzAyMWE0MjgtMDVjNS00ZDMyLWE4NjQtNWU2ZDgyYTlmMjdjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "Dangal",
        "duration": "161 min",
        "genre": "Action, Biography, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",

        "logoClass": "ri-heart-line"
    },
    {
        "title": "Agneepath",
        "duration": "174 min",
        "genre": "Action, Crime, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BMzI4Mzg3NTEtMDFhMy00ZTUxLWJiYTItYTM2NGU4MWVmMDAyXkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_SX300.jpg",
        "logoClass": "ri-heart-line"
    },
    {
        "title": "Singham Returns",
        "duration": "142 min",
        "genre": "Action, Crime, Drama",
        "rating": 8,
        "img": "https://m.media-amazon.com/images/M/MV5BZDFiZjg4MjYtMDBmYy00NzY0LWI5NTctOWJlODc2NzhiMTU0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "logoClass": "ri-heart-line"
    }
]

const update_data_list = () => {
    localStorage.setItem("list", JSON.stringify(list));
}

const randomMoviesGenerator = () => {

    for (let i = 0; i < list.length; i++) {
        add_new_movie_contianer(list[i].title, list[i].duration, list[i].genre, list[i].rating, list[i].img, list[i].logoClass)

    }
   localStorage.setItem("list", JSON.stringify(list));
}


export {
    randomMoviesGenerator
}