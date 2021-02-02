import axios from 'axios'
import React, { Component } from 'react'
import './PrcAdvice.css'

export class PrcAdvice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             advice: ""
        }
    }
    componentDidMount() {
        this.getAddvice()
    }
    getAddvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            const {advice} = res.data.slip;
            this.setState({advice});
            console.log("advice : ", {advice})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    
    render() {
      const {advice} = this.state;
        return (
            <div className="app">
                <div className="card">
                    <div className="heading">
                            <h1>{advice}</h1>
                            </div>
                            <p><button onClick={this.getAddvice}>
                        <span>get  advice</span>
                    </button>
                    </p>
                     </div>
            </div>
        )
    }
}

export default PrcAdvice