import React from 'react'
import abc from './static/abc.jpg'
import './css/LockScreen.css'
class LockScreen extends React.Component
{
constructor()
{
super()
}
render()
{
    return(<div className="lockscreen" style={{backgroundImage:`url(${abc})`}}>
        <img  style={{height:50,width:50,margin:10,opacity:0.6}}src="https://th.bing.com/th/id/OIP.NON8NgpzHfq60WfdZU3KngHaHa?rs=1&pid=ImgDetMain"/>
    </div>)
}

}
export default LockScreen