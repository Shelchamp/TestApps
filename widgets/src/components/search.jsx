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
        let match = this.state.data.filter(pokemon=>{
            let name = this.state.input;
            if (name.toLocaleLowerCase() === pokemon.slice(0, name.length).toLowerCase()) return pokemon;    
        })   
        return match; 
    }

    handleInput(e){
        this.setState( { input : e.target.value} )
        
    }

    

    render(){
        const Results = props => {
            let dataItems = props.map((item, i) => <li key={i}>{item}</li>)
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



