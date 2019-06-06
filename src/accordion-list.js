import React from 'react'
import { Component } from 'react';
import { ListItem } from './list-item';
import axios from 'axios';

export class AccordionList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            faqs : []
        };
        axios.get('https://api.myjson.com/bins/jw3rg').then(aResponse => {
            this.setState({
                faqs : aResponse.data.faqs
            });
        });
        this.handleListClick = this.handleListClick.bind(this);
    }

    handleListClick (aId, aClicked) {
        const id = aId === aClicked ? null : aId;

        this.setState({
            clickedFaq : id
        });
    }

    render () {
        if (this.state.faqs.length) {
            return (<ul className="faq">
                {this.state.faqs.map(aFaq => {
                    return <ListItem
                        faq={aFaq}
                        clickedFaq={this.state.clickedFaq}
                        key={aFaq.id}
                        onClickHandler={this.handleListClick}
                    />;
                })}
            </ul>);
        }
        else {
            return <div className="error">Sorry - no data yet</div>;
        }

    }
}