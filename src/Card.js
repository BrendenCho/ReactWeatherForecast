import React from 'react';
import "./CardStyle.css"

class Card extends React.Component {


    state = {
        day: "",
        w: "",
        code: "01d"
    }


    constructor(props) {
        super();



    }



    static getDerivedStateFromProps(props, state) {
        if (props.day !== state.day) {
         
            
         
        let t = String(props.day)
        t = pickDate(t);

        let b = String(props.code)
      
        b = weatherCode(b)

         
         
         
            return {
                w: props.weather,
                day: t,
                code: b
          };
        }
    
        return null;
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (this.props.selected !== prevProps.selected) {
          this.selectNew();
        }
      }




    render() {



        return <div className="inner">
            <h2>{this.state.day}</h2>
            <img className="image" src={require("./images/" + this.state.code + ".png")} alt="oops" width="100" height="100"></img>
            <h2> {this.state.w} </h2>

        </div>
    }

}


function pickDate(d) {

    switch (d) {

        case "1":
            return "Monday";
        case "2":
            return "Tuesday";
        case "3":
            return "Wednesday";
        case "4":
            return "Thursday";
        case "5":
            return "Friday";
        case "6":
            return "Saturday";
        case "0":
            return "Sunday";
        default:
            return ""
    }

}

function weatherCode(c) {

    switch (c) {

        case "200":
        case "201":
        case "202":
        case "210":
        case "211":
        case "212":
        case "221":
        case "230":
        case "231":
        case "232":

            return "11d";

        case "300":
        case "301":
        case "302":
        case "310":
        case "311":
        case "312":
        case "313":
        case "314":
        case "321":

            return "09d";

        case "500":
        case "501":
        case "502":
        case "503":
        case "504":

            return "10d";

        case "511":

            return "13d";

        case "520":
        case "521":
        case "522":
        case "531":

            return "09d";

        case "600":
        case "601":
        case "602":
        case "611":
        case "612":
        case "613":
        case "615":
        case "616":
        case "620":
        case "621":
        case "622":

            return "13d";

        case "701":
        case "711":
        case "721":
        case "731":
        case "741":
        case "751":
        case "761":
        case "762":
        case "771":
        case "781":

            return "50d";

        case "800":

            return "01d";

        case "801":

            return "02d";


        case "802":

            return "03d";

        case "803":
        case "804":

            return "04d";

        default:
            return "01d";
    }




}

export default Card