import React from 'react'
import axios from 'axios'

const q1_URL = "http://anapioficeandfire.com/api/characters/16"
const q2_URL = "http://www.anapioficeandfire.com/api/houses/378"
const q3_URL = "http://www.anapioficeandfire.com/api/houses/229"
const q4_URL = "http://www.anapioficeandfire.com/api/houses/17"
const q5_URL = "http://www.anapioficeandfire.com/api/characters/901"
const q6_URL = "http://www.anapioficeandfire.com/api/houses/362"
const q7_URL = "http://www.anapioficeandfire.com/api/characters/232"

const getQ1API = axios.get(q1_URL) 
const getQ2API = axios.get(q2_URL)
const getQ3API = axios.get(q3_URL)
const getQ4API = axios.get(q4_URL)
const getQ5API = axios.get(q5_URL)
const getQ6API = axios.get(q6_URL)
const getQ7API = axios.get(q7_URL)

class GameOfFetches extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            q1: [],
            q2: [],
            q3: [],
            q4: [],
            q5: [],
            q6: [],
            q7: []
        }
    }

    componentDidMount(){
        axios.all([getQ1API, getQ2API, getQ3API, getQ4API, getQ5API, getQ6API, getQ7API]).then(axios.spread((...res) => {
            this.setState({q1:res[0].data.born})
            this.setState({q2:res[1].data.region})
            this.setState({q3:res[2].data.coatOfArms})
            this.setState({q4:res[3].data.seats[1]})
            this.setState({q5:res[4].data.aliases[1]})
            this.setState({q6:res[5].data.founded})
            this.setState({q7:res[6].data.culture})
        }
        )
        ).catch(err => console.error(err.message))
    }


    render() {
        return (
            <div>
                <h1>1. Where was Margaery Tyrell born?</h1>
                <h3>{ this.state.q1 }</h3>

                <h1>2. What region is House Targaryen in?</h1>
                <h3>{ this.state.q2 }</h3>

                <h1>3. What's the coat of arms of House Lannister?</h1>
                <h3>{ this.state.q3 }</h3>

                <h1>4. What is the second seat of House Baratheon?</h1>
                <h3>{ this.state.q4 }</h3>

                <h1>5. What is Robert Baratheon's second alias?</h1>
                <h3>{ this.state.q5 }</h3>

                <h1>6. What's the name of the founder of House Stark?</h1>
                <h3>{ this.state.q6 }</h3>

                <h1>7. What are the titles of Catelyn Stark's three POV books? </h1>
                <h3>{ this.state.q7 }</h3>

            </div>
        )
    }
}


export default GameOfFetches;