/* eslint-disable no-this-before-super */
import React, {Component} from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'



const initialState = {
    displayValue: '1000',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}


export default class Calculator extends Component {

    state = {...initialState}


    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }


    clearMemory() {
        this.setState({...initialState})
    }
    setOperation(operation){
        console.log(operation)
    }
    addDigit(n){
        console.log(n)
    }

    render (){
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator">
                <Display value={0}/>
                <Button label="AC" click={this.state.displayValue} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
            )
    }
}