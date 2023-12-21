import React from 'react'
import './css/Display.css'
import Nav from './Nav'
import LockScreen from './LockScreen'
import Menu from './Menu'
class Display extends React.Component
{
constructor()
{
    super();
    this.state={
    
    }
}
render()
{  const{locked,homescreen,menuitems,menuposition,currentmenu}=this.props
    return(
     <div className="display" >
         <Nav/>
    
         {locked&&<LockScreen/>}
         {homescreen&&<Menu currentmenu={currentmenu} menuposition={menuposition} menuitems={menuitems}/>}

     </div>
    )
}

}
export default Display