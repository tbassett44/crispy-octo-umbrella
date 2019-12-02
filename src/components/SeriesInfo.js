import React, { Component } from 'react';
import { connect } from 'react-redux'
import './SeriesInfo.css';


class SeriesInfo extends Component {
  constructor(){
    super();
    this.state = {
      SeriesData:false
    }
  }
  componentDidMount(){
    this.unsubscribe=this.props.store.subscribe(()=>{
      let cs=this.props.store.getState();
      this.setState({
        SeriesData:cs.SeriesData
      })
    })
  }
  componentWillUnmont(){
    this.unsubscribe();
  }
  render() {
    if(!this.state.SeriesData){
      return (
        <div>
        Waiting for Series info to be loaded
        </div>
      );
    }else{
      let alt="Hero Image";
      var el=this.state.SeriesData.episodeList;
      var episodes= Object.keys(el).map(function(key) {
        return <div key={el[key].episodeNumber}>{el[key].episodeNumber}. {el[key].episodeTitle}</div>
    });
      return (
        <div>
          <div>
            <img src={this.state.SeriesData.seriesHeroArt} alt={alt} className="seriesinfo_hero" />
          </div>
          <div>
            <div className="seriesinfo_main">
              <div className="seriesinfo_title">
                {this.state.SeriesData.seriesTitle}
              </div>
            </div>
            <div className="seriesinfo_episodes">
              <div className="seriesinfo_episodes_title">First Twenty (or less) Episodes</div>
              <div className="seriesinfo_episodes_list">{episodes}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default connect()(SeriesInfo);