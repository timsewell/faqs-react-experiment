import React from 'react'
import { Component } from 'react';

export class ListItem extends Component {
    constructor (props) {
        super(props);
        this.state = props.faq || {
            question : '',
            answer : '',
            id : ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.onClickHandler(this.state.id, this.props.clickedFaq);
    }

    render () {
        const answerClass = this.props.clickedFaq === this.state.id ?
            'answer active' : 'answer';

        return (<li className="faq-item" key={this.state.id}>
            <span className="question" onClick={this.handleClick}>
                {this.state.question}
                <span className="switch" onClick={this.handleClick}>[ + ]</span>
            </span>
            <span className={answerClass}>
                {this.state.answer}
            </span>
        </li>);
    }
}