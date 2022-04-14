import React from 'react'
import './css/Menu.css'
import  music from './static/music.jpg'
import  games from './static/games.jpg'
import  setting from './static/settings.png'
import  nowplaing1 from './static/nowplaing1.jpg'
class Menu extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
    const{menuitems,menuposition}=this.props;
     return(
     <div className="menuitems">
         
         <div className="item-container">
         <ul>
        {menuitems.map((menuitem,index)=>{
          return menuposition==index?<li className="active" key={index}>{menuitem}</li>:<li  key={index}>{menuitem}</li>
        })}
         </ul>
         </div>
         <div className="image-container">
          {menuposition==0&&<img src={nowplaing1}></img>}
          {menuposition==1&&<img src={music}></img>}
          {menuposition==2&&<img src={games}></img>}
          {menuposition==3&&<img src={setting}></img>}
         </div>
     </div>
     )
    }
}
export default Menu