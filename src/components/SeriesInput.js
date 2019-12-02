import React, { Component } from 'react';
import './SeriesInput.css';
import { connect } from 'react-redux'
import SeriesLoading from './SeriesLoading.js'

class SeriesInput extends Component {
  constructor(){
    super();
    this.state = {
      seriesId:0,
      loading:0,
      error:'',
      seriesData:false
    }
  }
  loadSeries(e){
    if(this.state.loading){
      return console.warn('waiting for a request to finish')
    }
    const url='http://localhost:9001/series-videos?seriesId='+e.target.elements.seriesId.value;
    this.setState({
      loading:1
    })
    fetch(url).then(res => res.json()).then(json =>{
      if(json.error){
        this.setState({error:json.error,loading:0})
      }else{
        this.setState({loading:0,error:''});
        this.props.dispatch({
          type:'SET_SERIES_DATA',
          data:json
        });
      }
    })
    e.preventDefault();
    return false;//prevent 
  }
  render() {
    return (
      <div className="seriesinput_component">
        <div>
          <form onSubmit={this.loadSeries.bind(this)} id="form">
          <div className="seriesinput_box">
            <div>Series Id:</div>
            <div>
              <input type="text" name="seriesId" className="seriesinput_input"  placeholder="Series ID"/>
            </div>
          </div>
          <div className="seriesinput_box">
            <input className="seriesinput_button" type="submit" form="form" value="GET SERIES DATA" />
          </div>
          </form>
        </div>
        <div>
          <SeriesLoading state={this.state}/>
        </div>
      </div>
    );
  }
}

export default connect()(SeriesInput);
