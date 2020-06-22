## Google Search Engine

### [Live Link](https://search-enginne.herokuapp.com/)


#### Custom built Google search engine using external API

#### Technologies used: NextJS, SASS

#### Features: 

* Custom search engine using Serpstack API
* Displays search results (articles, videos)
* Error handling for no results
* Pagination for results
* Front end styling based on Google's UI

#### Demo Images: 

1. Home page
![alt text](https://github.com/ckuo15/search-engine/blob/master/static/images/demo1.png)

2. Search result 
![alt text](https://github.com/ckuo15/search-engine/blob/master/static/images/demo2.png)

#### Sample Code Snippet of redirecting to results page upon clicking the search button.

```javascript
  handleClick = (e) => {
    e.preventDefault();
    if (this.state.search != ""){
      window.location.href = `/results?searchQuery=${this.state.search}`
    }
  }
```
