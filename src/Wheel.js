import React from 'react'
import './css/Wheel.css'
import ZingTouch from 'zingtouch';
class Wheel extends React.Component
{
constructor()
{
super();
this.angle=0;
}
componentDidMount()
{  const{changemenuforward,menuposition,changemenubackward}=this.props;
  var myElement = document.getElementById('container');
var region =  ZingTouch.Region(myElement);
 region.bind(myElement, 'rotate', function(e){
if(Math.floor(e.detail.distanceFromOrigin)==0)
{
this.angle=Math.abs(e.detail.angle)
}
if(Math.abs(this.angle-e.detail.angle)>15)
{
this.angle = Math.abs(e.detail.angle); 
if (e.detail.distanceFromLast === 0) {
return;
}
if(Math.abs(e.detail.distanceFromLast>0))
{
  changemenuforward();
}
if(Math.abs(e.detail.distanceFromLast<0))
{
  changemenubackward();
}
}
else if(Math.abs(this.angle-e.detail.angle)>300)
{
this.angle = Math.abs(e.detail.angle);
if (e.detail.distanceFromLast === 0) {
  return;
  }
if(Math.abs(e.detail.distanceFromLast>0))
{
changemenuforward()
}
if(Math.abs(e.detail.distanceFromLast<0))
{
  changemenubackward()
}
}
});
}
render()
{
const{change,pressingmenu}=this.props
return(
    <div className="container" id="container">
      <div className="internal" id="internal" onClick={()=>change()}></div>
      <div className="menu" onClick={()=>pressingmenu()}>MENU</div>
    <div className="forward"><img style={{height:20,width:20}} src='https://image.flaticon.com/icons/png/512/31/31085.png'/></div>
    <div className="backward"><img style={{height:20,width:20}} src='https://image.flaticon.com/icons/png/512/83/83965.png'/></div>
    <div className="forward1" ><img style={{height:20,width:20}} src='https://image.flaticon.com/icons/png/512/724/724956.png'/></div>
    </div>
    
   
    
)
}
}
export default Wheel;