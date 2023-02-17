import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor(){
      super();
      console.log("constructor running")
      this.state = {
          articles: this.articles,
          loading: false
      }
    }

    async componentDidMount(){
      console.log('component')
      let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2>Newsify - Top Headlines</h2>
        <div className='row'>
            {this.state.articles.map((e)=>{
                return <div className='col-md-4' key={e.url}>
                        <NewsItem title={e.title?e.title.slice(0, 45):""} description={e.description?e.description.slice(0, 78):""} imageUrl={e.urlToImage} newsUrl={e.url}/>
                    </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
