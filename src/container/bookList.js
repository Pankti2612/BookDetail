import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.book.map((books) => {
            return(
                <li 
                    key={books.title} 
                    onClick = {() => this.props.selectBook(books)}
                    className="list-group-item">
                    {books.title}
                </li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-md-2">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        book: state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook : selectBook},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);