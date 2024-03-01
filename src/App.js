import React from "react";
import unsplash from "./unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./ImageList.css";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 100 },
    });

    if (response.data.results.length === 0) {
      this.setState({ images: [], noResults: true });
    } else {
      this.setState({ images: response.data.results, noResults: false });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.noResults ? (
          <div className="no-result">No results found in our database.</div>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
