import React , {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div className="col-md-4" style={{border: '1px solid #ddd'}}><h5>Select Book</h5></div>;
        }
        return(
            <div className="col-md-4" style={{border: '1px solid #ddd'}}>
                <h5>Book Detail</h5>
                <div> Title : {this.props.book.title}</div>
                <div> Pages : {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook
    };
}
export default connect(mapStateToProps)(BookDetail);