import React, { Component } from 'react';
import database from '../database/db.json';
import { connect } from 'react-redux';
import { displayWords } from '../actions';
import '../style/wordListItem.css'

class WordListItem extends Component {
    componentDidMount() {
        this.props.displayWords();
    }

    renderWords = () => {
        const wordlist = this.props.wordList.wordList.wordList;
        if (wordlist) {
            console.log('inside renderwords', this.props.wordList.wordList.wordList)
            const words = wordlist.map((word) =>
                <li onClick={this.selectWord} key={word.id}>{word.word}</li>
            )
            return words;
        }

    }

    selectWord = () => {
        console.log(this)
    }

    render() {
        if (this.props.wordList) {
            console.log('inside wordlist item', this.props.wordList)

        }
        return (
            <div>
                <ul className='wordlist'>{this.renderWords()}</ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapstate to props', state)
    return {
        wordList: state
    }
}

export default connect(mapStateToProps, { displayWords })(WordListItem);