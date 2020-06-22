import HomeStyle from "../homepage.scss";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //this function keeps track of the input entered by users.
  updateQuery(e) {
    this.setState({ search: e.currentTarget.value })
  }

  // this function redirects users to the search results page based on the query.
  handleClick = (e) => {
    e.preventDefault();
    if (this.state.search != "") {
      window.location.href = `/results?searchQuery=${this.state.search}`
    }
  }

  //Renders the search bar in the home page. 
  render() {
    return (
      <div className="home-container">
        <style jsx>{HomeStyle}</style>
        <div className="home-navbar">
          <div className="home-dropdown">
            <i className="fas fa-th"></i>
            <div className="dropdown-content">
              <a href="https://www.linkedin.com/in/cindy-kuo-92621a1a5/" target="_blank"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a>
              <a href="https://www.cindycwkuo.com/" target="_blank"><i className="far fa-folder-open"></i><span>Portfolio</span></a>
              <a href="https://github.com/ckuo15" target="_blank"><i className="fab fa-github"></i><span>Github</span></a>
              <a href="https://angel.co/u/cindy-kuo-2" target="_blank"><i className="fab fa-angellist"></i><span>AngelList</span></a>
            </div>
          </div>
          <a href="https://www.cindycwkuo.com/" target="_blank" >
            <img src="../static/images/c-icon.png" className="home-user-icon" />
          </a>
        </div>
        <div className="home-center-container">
          <p className="company-title">
            <span className="company-letter">G</span>
            <span className="company-letter">o</span>
            <span className="company-letter">o</span>
            <span className="company-letter">g</span>
            <span className="company-letter">l</span>
            <span className="company-letter">e</span>
          </p>
          <div className="form-container">
            <form id="form" autoComplete="off">
              <div className="form-input">
                <i className="fas fa-search"></i>
                <div>
                  <input type="text" id="search-bar" className="form-control" onChange={this.updateQuery} value={this.state.search} ></input>
                </div>
              </div>
              <div className="form-button">
                <button className="search-button" onClick={this.handleClick} id="searchButton">Google Search</button>
              </div>
            </form>
          </div>
          <div className="developer-info">Developed by Cindy Kuo</div>
        </div>
      </div>
    )
  }
}

export default Home;