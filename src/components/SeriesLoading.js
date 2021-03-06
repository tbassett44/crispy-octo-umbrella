import React, { Component } from 'react';
import { connect } from 'react-redux'
import './SeriesLoading.css';
class SeriesLoading extends Component {
	render(){
		if(this.props.state.loading){
			return (
				<div>Thinking...</div>
			)
		}else{
			if(this.props.state.error){
				return (
					<div className="seriesloading_error">{this.props.state.error}</div>
				)
			}else{
				return '';
			}
		}
	}
}
export default connect()(SeriesLoading);