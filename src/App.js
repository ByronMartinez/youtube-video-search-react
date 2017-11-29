import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtubeSearch from "youtube-api-search";
import _ from "lodash";

const API_KEY = 'AIzaSyApvp8NQYWO7xaYq1fXyos6mEKFjmFMKO4';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videos : []
        }   
        this.changeSelectedVideo = this.changeSelectedVideo.bind(this);
    }

    searchVideos(term) {
        youtubeSearch({ key : API_KEY, term : term},(videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    componentDidMount() {
        this.searchVideos("react");
    }

    changeSelectedVideo(video) {
        this.setState({
            selectedVideo : video
        })
    }

    render() {
        const videoSearch = _.debounce( (term) => { this.searchVideos(term) },300);
        return (
            <div className="container-fluid" style={ { marginTop : "10px" } }>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2000px-YouTube_Logo_2017.svg.png" style={{width:"100px"}}/> Video Search</a>
                </nav>
                <hr/>
                <SearchBar onSearchTermChange={videoSearch}/>
                <div className="row">
                    <VideoList 
                        videos={this.state.videos} 
                        onSelectVideo={this.changeSelectedVideo}
                        />
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
            </div>
        );
    }
};


export default App;
