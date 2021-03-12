import React from 'react';
import './Components.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        
        this.sortedWords = this.sortWords(props.words);
    }

    sortWords(words) {
        // We dont want to modify array in place
        words = [...words];

        return words.sort((a, b) => {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a == b) return 0;
            if (a > b) return 1;
            return -1;
        });
    }

    render() {
        return (
            <div className="List">
                <ol className="WordsList">
                    {this.sortedWords.map(word => {
                        return <li key={word}><p className="Word">{word}</p></li>;
                    })}
                </ol>
            </div>
          );
    }
}

export default List;
