import React from 'react'
import './css/Case.css'
import Wheel from './Wheel'
import Display from './Display'
class Case extends React.Component
{
constructor()
{ 
super()
this.state={ 
islocked:true,
homescreen:false,
currentmenu:[-1,0,1,2,3],//-1 represents the locked screen state
menuposition:0,
menuitems:['Now Playing','music','games','settings',]
}
}
changelocked=()=>
{
this.setState({islocked:false,
homescreen:true})
}
pressingmenu=()=>
{
this.setState({islocked:true,homescreen:false})
}
changemenuforward=()=>
{
    if(this.state.menuposition>=3)
    { this.state.menuposition=1;
       this.setState({
        menuposition:0
       })
    }
    else 
    {
        this.state.menuposition+=1;
        this.setState({
            menuposition:this.state.menuposition
           })
    }
}
changemenubackward=()=>
{
    if(this.state.menuposition<=0)
    { this.state.menuposition=3;
       this.setState({
        menuposition:this.state.menuposition
       })
    }
    else 
    {
        this.state.menuposition-=1;
        this.setState({
            menuposition:this.state.menuposition
           })
    }
}
render()
{   
const{islocked,homescreen,currentmenu,menuposition,menuitems}=this.state;
return(    
<div className="App">
<div className="frame">
<Display locked={islocked} currentmenu={currentmenu} menuposition={menuposition} homescreen={homescreen} menuitems={menuitems}/>
<Wheel menuposition={menuposition} changemenubackward ={this.changemenubackward}changemenuforward={this.changemenuforward} currentmenu={currentmenu} locked={islocked} pressingmenu={this.pressingmenu} homescreen={homescreen} change={this.changelocked}/>
</div> 
</div> 
);
}


}
export default Case;