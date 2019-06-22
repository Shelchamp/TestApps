import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input : "",
            data : props.data
        }
    }

    filterSearch(){
        let match = this.state.data.filter(pokemon=>(
            this.state.input.toLocaleLowerCase() === pokemon.slice(0, this.state.input.length).toLowerCase()
            ));   
        return match; 
    }

    handleInput(e){
        this.setState( { input : e.target.value} )   
    }

    fillSearchBar(e){
        this.setState({input : e.target.innerHTML})
    }

    

    render(){
        const Results = props => {
            let dataItems = props.map((item, i) => <li 
                                                    className="search-result" 
                                                    onClick={this.fillSearchBar.bind(this)} 
                                                    key={i}
                                                    >{item}</li>)
            return (
                <ul>
                    {dataItems}
                </ul>
            )
        }
        const results = Results(this.filterSearch());

        return (
        <div>
            <input 
                onChange={this.handleInput.bind(this)} 
                value={this.state.input}
                placeholder={"Search..."}    
                />
            <article>{results}</article>
        </div>
        )
    }
}



