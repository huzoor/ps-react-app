import React from "react";
import LineChart from 'react-linechart';

class NewsInfo extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { newsHits: [] };
      
    }
  
    componentDidMount() {
      this.fetchNewsInfo();
    }
  
    fetchNewsInfo() {
      fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then((res) => res.json())
        .then((newsInfo) => this.setState({ newsHits: newsInfo.hits }))
        .catch((e) => console.error(e));
    }
  
    render() {
        console.log(this.state.newsHits)
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
      return(
        <React.Fragment>
        <table>
            <thead>
                <tr className="headItems">
                    <th>Comments</th>
                    <th>Vote Count</th>
                    <th>UpVote</th>
                    <th>News Details</th>
                </tr>
            </thead>
            <tbody>
                {this.state.newsHits.length && this.state.newsHits.map(item => <tr key={item.created_at_i}>
                    <td>{item.num_comments}</td>
                    <td>{item.points}</td>
                    <td><div class="votearrow pointer" title="upvote"></div></td>
                    <td>{item.title}</td>
                </tr>)}
            </tbody>
        </table>
        <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />

      </React.Fragment>
      )
    }
  }



export default NewsInfo;
