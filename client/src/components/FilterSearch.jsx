import React from "react";

class FilterSearch extends React.Component {
  state = {
    showFilter: false,
    sources: []
  };

  async componentDidMount()  {
    const response = await fetch('https://newsapi.org/v2/sources?apiKey=55ec436a68c7442eab5d35809a4ffcff')
    const sources = await response.json();
    this.setState({
      sources: sources.sources
    })
  }

  toggleFilter = () => {
    this.setState(prevState => ({
      showFilter: !prevState.showFilter
    }));
  };

  render() {
    return (
      <div className="filter-search-container">
        <div className="show-filter-search container">
          <input
            type="text"
            className="search form-input"
            placeholder="Search over 30,000 sources"
          />
          <button onClick={this.toggleFilter} className="show-filter">
            {this.state.showFilter ? "Hide Filters" : "Show Filters"}
            <img
              className="filter-arrow"
              src={
                this.state.showFilter
                  ? "chevron-up-solid.svg"
                  : "chevron-down-solid.svg"
              }
              alt=""
            />
          </button>
        </div>
        {this.state.showFilter && (
          <div className="filter-section container">
            <div className="source">
              <h4>By Source</h4>
              <div className="source-input">
                <select name="source" id="source">
                  <option selected disabled>Choose a source</option>
                  {this.state.sources.map((source, index) => (
                    <option key={index} value={source.name}>{source.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="filter-submit">Apply Filters</button>
          </div>
        )}
      </div>
    );
  }
}

export default FilterSearch;
