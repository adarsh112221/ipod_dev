
import React from 'react'
import './css/Nav.css'
class Nav extends React.Component
{
    constructor()
    {   super()
        this.state = {
           time:this.gettime()
        }  
        this.updatetime=0;
    }
   gettime(){
    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if (today.getMinutes() < 10) {
        time = today.getHours() + ":0" + today.getMinutes();
    }
    return time;
    }
    componentDidMount()
     { const{time}=this.state;
    this.updatetime=setInterval(() => {
            this.setState({time:this.gettime()})
        }, 60000);
    }
    componentWillUnmount()
    {
        clearInterval(this.updatetime)
    }
   render()
     {  const{time}=this.state

    return(
     <div className="Nav">
           <div id="one"><i className="fas fa-wifi"></i></div>
           <div style={{color:'white',fontSize:13.5}}>{time}</div>
           <div id="two"><i className="fas fa-battery-three-quarters"></i></div>
    </div>
    )
   }



}
export default Nav