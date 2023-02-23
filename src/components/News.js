import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',
    language: 'en'
  }
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes,
    category: propTypes.string,
    language: propTypes.string
  }
   constructor(){
      super();
      this.state = {
          articles: [],
          loading: false,
          page: 1,
      }
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrev = async () => { 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      })
    }

    handleNext = async () => {
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&domains=wsj.com&apiKey=1834ad42eb01433d83facfb182fd15c9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false,
        })
      }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>Newsify - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {this.state.loading || this.state.articles.map((e)=>{
                return <div className='col-lg-4 col-md-6' key={e.url}>
                        <NewsItem title={e.title?e.title.slice(0, 45):""} description={e.description?e.description.slice(0, 78):""} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
                    </div>
            })}
        </div>
        <div className="my-3 ">
          <nav aria-label="...">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item p-2"><button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>Previous</button></li>
              <li className={`page-item ${this.state.page === 1? 'active' : ''} p-2`}><button className="page-link">1</button></li>
              <li className={`page-item ${this.state.page === 2? 'active' : ''} p-2`}><button className="page-link">2</button></li>
              <li className={`page-item ${this.state.page === 3? 'active' : ''} p-2`}><button className="page-link">3</button></li>
              <li className="page-item p-2"><button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next</button></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default News
