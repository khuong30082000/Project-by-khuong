import './main-title.css'
import Button from './../Button'
import cls from 'classnames'
function MainTitle({children,btnProps,btnShowBox,type=''}) {

   const classes = cls('main-title spacing',{
     'main-title__search': type === 'search',
    'd-flex tcl-jc-between tcl-ais-center':btnShowBox
   })
  return (
    <div class={classes}>
    <h2>{children}</h2>
    { btnShowBox && <Button {...btnProps}>{btnShowBox}</Button>}
   </div>
  );
}

export default MainTitle;
