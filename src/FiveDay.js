import React from 'react';
import Card from "./Card"
import "./FiveDay.css"

class FiveDay extends React.Component {

    constructor(props) {

        super();

        this.state = {
            zip: props.zip,
            city: "",
            apiKey: props.apiKey,
            jData: {},
            d: [],
            w: [],
            c:[500,500,500,500,500]
        }


    }

componentDidMount() {

        const str = "https://api.openweathermap.org/data/2.5/forecast?zip=" + this.state.zip + ",us&appid=" + this.state.apiKey;
       fetch(str)
            .then(response => response.json())
            .then(data => {

                this.setState({

                    jData: data,
                    
                })


            })
            .then(()=>{
          
                let arr = []
                arr = this.state.jData.list;
              
                let timeArr = [];
                let codeArr = [];
                let condArr = [];
                let indexArr = [];
        
                for (var x = 0; x < 40; x++) {
                    timeArr[x] = parseInt(arr && arr[x] && arr[x].dt);
                    codeArr[x] = parseInt(arr && arr[x] && arr[x].weather && arr[x].weather[0] && arr[x].weather[0].id);
                    condArr[x] = arr && arr[x] && arr[x].weather && arr[x].weather[0] && arr[x].weather[0].main
                }
        
                for (var i = 0; i < 40; i++) {
                    timeArr[i] = timeArr[i] * 1000;
                    timeArr[i] = new Date(timeArr[i]);
        
                }
        
                for (var a = 0; a < 40; a++) {
        
                    if (timeArr[a].getHours() === 11) {
                        indexArr.push(a);
                    }
           
                }
                let retCond = [];
                let retCode = [];
                let retDay = [];
                for(var p = 0; p < 5;p++){
                    retCond[p] = condArr[indexArr[p]];
                    retCode[p] = codeArr[indexArr[p]];
                    retDay[p] = timeArr[indexArr[p]].getDay();
                }

             

                this.setState({
                    d:retDay, 
                    city:this.state.jData.city && this.state.jData.city.name,
                    w:retCond,
                    c:retCode,
                                      

                })

              
            }).then(()=>{

                this.setState({

                    
                
                })

            }).catch(e=>{
                console.log(e)
            })



            
            
    

    }


    render() {
        
        return <div>
            <h1>{"Five Day Forecast for " + this.state.city} </h1>
            <Card day={this.state.d[0]} code={this.state.c[0]} weather={this.state.w[0]} />
            <Card day={this.state.d[1]} code={this.state.c[1]} weather={this.state.w[1]} />
            <Card day={this.state.d[2]} code={this.state.c[2]} weather={this.state.w[2]} />
            <Card day={this.state.d[3]} code={this.state.c[3]} weather={this.state.w[3]} />
            <Card day={this.state.d[4]} code={this.state.c[4]} weather={this.state.w[4]} />


        </div>

    }
}

export default FiveDay