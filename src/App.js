import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "모모",
    poster: "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/10/2017103016362315546-540x810.jpg"
  },
  {
    title: "쯔위",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/151020_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_-_%EB%8D%B0%EB%B7%94_%EC%87%BC%EC%BC%80%EC%9D%B4%EC%8A%A4_TWICE_-_Debut_Showcase_%283%29.jpg/200px-151020_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_-_%EB%8D%B0%EB%B7%94_%EC%87%BC%EC%BC%80%EC%9D%B4%EC%8A%A4_TWICE_-_Debut_Showcase_%283%29.jpg"
  },
  {
    title: "정연",
    poster: "https://i.pinimg.com/originals/4d/6d/c9/4d6dc96fe60686c8a8d6dc635815847d.jpg"
  },
  {
    title: "다현",
    poster: "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2016/05/2016051400070313500-540x810.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        { movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
