import React from "react";
import { Route } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import NewsInfo from './NewsInfo'

class ReadMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { markdown: "" };
  }

  componentDidMount() {
    this.fetchTutorial();
  }

  fetchTutorial() {
    fetch("/tutorial.json")
      .then((res) => res.json())
      .then(({ data }) => this.setState({ markdown: data }))
      .catch((e) => console.error(e));
  }

  render() {
    return this.state.markdown ? (
      <div>
        <Markdown>{this.state.markdown}</Markdown>
      </div>
    ) : null;
  }
}



const MultipleRoutes = () => (

    <Route exact path="/" component={NewsInfo} />

);

export default MultipleRoutes;
