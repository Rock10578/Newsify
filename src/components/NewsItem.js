import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-2">
            <div className="bg-image hover-overlay ripple" >
                <img src={imageUrl}  alt="Content" className="img-fluid"/>
                <a href="/">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-primary">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;