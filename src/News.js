import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  articles=[
    {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": "BBC Sport",
      "title": "Spinner Ashwin retires from India duty",
      "description": "India spinner Ravichandran Ashwin retires from international cricket at the age of 38.",
      "url": "https://www.bbc.com/sport/cricket/articles/cy89jww8g7lo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png",
      "publishedAt": "2024-12-18T06:26:03Z",
      "content": "How Wham! turned one song into a cultural phenomenon. VideoHow Wham! turned one song into a cultural phenomenon"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": "Stephan Shemilt",
      "title": "England arrive at judgement day for Bazball",
      "description": "The tour of New Zealand begins a defining year for England under Ben Stokes and Brendon McCullum, writes chief cricket reporter Stephan Shemilt.",
      "url": "https://www.bbc.com/sport/cricket/articles/c1kndplm81eo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/1959/live/71b96be0-ac90-11ef-9d45-751faac6a2f5.jpg",
      "publishedAt": "2024-11-27T11:11:04Z",
      "content": "In Christchurch, the city of his birth, Stokes is born again. Physically fit and back to his ebullient self. \r\nAs usual, he politely fends off suggestions that this is a homecoming - \"I'm English\" - … [+1960 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "Prithvi Shaw: The rise and fade of Indian cricket's wonder boy",
      "description": "It has been a steep fall for the 25-year-old batter, once hailed as Indian cricket's 'next big thing'.",
      "url": "https://www.bbc.com/news/articles/czxdlyz87yjo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33c2/live/00f89240-b074-11ef-8ab9-9192db313061.jpg",
      "publishedAt": "2024-12-08T01:15:43Z",
      "content": "Prithvi Shaw went unsold in the IPL auction in November\r\nLast month, Rishabh Pant became the most expensive player in the history of the Indian Premier League (IPL) as he was signed by Lucknow SuperG… [+6049 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "Commentator Isa Guha sorry for calling cricketer 'primate'",
      "description": "Guha apologises after her remark about Indian cricketer Jasprit Bumrah caused a backlash.",
      "url": "https://www.bbc.com/news/articles/cn9gy7938xeo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0b4e/live/4d79c2c0-bb5e-11ef-9941-6df04cb58452.jpg",
      "publishedAt": "2024-12-16T04:38:44Z",
      "content": "Cricket commentator Isa Guha has apologised for calling Indian bowler Jasprit Bumrah the \"most valuable primate\" during the third Test against Australia.\r\nShe made the remark while commentating for F… [+2286 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": "Stephan Shemilt",
      "title": "England close on victory in first Test against New Zealand",
      "description": "England are on course for victory in the first Test against New Zealand after Chris Woakes' crucial two wickets in two balls on the third day in Christchurch.",
      "url": "https://www.bbc.com/sport/cricket/articles/cz0m0ln43mxo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/992f/live/5ab3ac10-aedb-11ef-93a6-9fd2d3586a96.jpg",
      "publishedAt": "2024-11-30T05:48:03Z",
      "content": "England are on course for victory in the first Test against New Zealand after Chris Woakes' crucial two wickets in two balls on the third day in Christchurch.\r\nThe tourists had built a first-innings … [+1002 chars]"
  }
  ]
    constructor(){
        super();
        this.state={
          articles:this.articles,
          loading:false

        }

    }
    async componentDidMount () {
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=550a17202be44acfa87c757bd265a732"
      let data=await fetch(url);
      let ParseData=await data.json(); 
      this.setState({articles:ParseData.articles})
    }
    
  render() {

    return (
      <div className="conatiner my-3">
        <h2>Monkey news</h2>
   
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}/>
           </div>

        })}
           
            
        
         

        </div>
                 
      </div>
    )
  }
}
