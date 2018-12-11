import React, { Component } from 'react';
import '../style/wordlist.css'
import WordListItem from './WordListItem'

export default class WordList extends Component {
    render() {
        return (
            <div>
                <div className='totalWords'>
                    <p>0</p>
                    <p>words saved </p>
                </div>
                <div className='totalWords'>
                    <p>0</p>
                    <p>mastered </p>
                </div>
                <WordListItem />
            </div>
        )
    }
}