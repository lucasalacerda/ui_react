import React from "react";
import axios from 'axios';

export class ResultPage extends React.Component {
    state = {
        results: []
      }
      componentDidMount() {
        let search = this.props.location.search;
        console.log(this.props)
        axios.get(`http://openlibrary.org/search.json${search}`)
          .then(res => {
              console.log(res)
            const results = res.data.docs;
            this.setState({ results });
          })
      }
    render(){
        return (
            <ul>
                {this.state.results.map((result, index) => <li key={index}>{result.title_suggest}</li>)}
            </ul>
        )
    }       
}