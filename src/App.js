import React from 'react';
import './App.css';
import AnagramFinder from './anagram_finder/AnagramFinder';
import List from './components/List'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words: null
        }
    }

    loadFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            const words = await AnagramFinder(e)
            this.setState({
                words: words
            });
        };
        reader.readAsText(e.target.files[0])
    }

    render() {
        const { words } = this.state;
        return (
            <div className="App">
              <header className="App-header">
                <div  className="Upload-background">
                    <label className="Upload" htmlFor="file-upload">
                        Upload File
                        <input
                            id="file-upload"
                            type="file"
                            hidden
                            onChange={(e) => this.loadFile(e)}
                        />
                    </label>
                </div>
                
                {words && words.length > 0 && <List words={words}/>}

              </header>
            </div>
          );
    }
}

export default App;
