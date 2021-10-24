/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

export default class Search extends Component {
    state = {
        data: null
      }
    
      componentDidMount() {
        axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=war`)
          .then(res => {
            this.setState({ data: res.data });
            
          })
        
      }

    //   shouldComponentUpdate(){

    //   }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <div className='SearchBox'>
                    <input  type='search' placeholder='Search Movie Name'></input>
                </div>
            <div className='MainDiv'>
                {this.state.data && this.state.data.Search.map(item => {
                    return (
                        <div className='MovieCard'>
                            <img className='MoviePoster' src={item.Poster} ></img>
                            <p className='Title'>{item.Title}</p>
                        </div>
                    )
                })}
                
            </div></div>
        )
    }
}