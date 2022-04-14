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
        <img  style={{height:50,width:50,margin:10,opacity:0.6}}src="https://image.flaticon.com/icons/png/512/1828/1828471.png"/>
    </div>)
}

}
export default LockScreen