import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
      super();
      this.state = {
          articles: [],
          loading: false,
          page: 1,
      }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=1&pageSize=30";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrev = async () => { 
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=${this.state.page - 1}&pageSize=30`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }
    handleNext = async () => {
      if (this.state.page + 1 > Math.ceil(this.state.totalResults/30)){

      }else{
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=${this.state.page + 1}&pageSize=30`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
      }
    }

  render() {
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
        <div className="my-3 ">
          <nav aria-label="...">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item disabled p-3"><button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>Previous</button></li>
              <li className={`page-item ${this.state.page === 1? 'active' : 'disabled'} p-3`}><button className="page-link">1<span className="visually-hidden">(current)</span></button></li>
              <li className={`page-item ${this.state.page === 2? 'active' : 'disabled'} p-3`} aria-current="page"><button className="page-link">2</button></li>
              <li className={`page-item ${this.state.page === 3? 'active' : 'disabled'} p-3`}><button className="page-link">3</button></li>
              <li className="page-item p-3"><button type="button" className="btn btn-primary" onClick={this.handleNext}>Next</button></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default News
