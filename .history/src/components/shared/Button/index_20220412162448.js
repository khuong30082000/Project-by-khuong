import "./button.css";
import cls from 'classnames'
import IconLoading from './../IconLoading'
function Button({children,type = 'default',size,loading ='false',as ='button',...restProps}) {

   const classes = cls('btn',{
       'btn-default' : type ==='default',
       'btn-category' : type ==='category',
       'btn-primary' : type ==='primary',
       'btn-size-large' : size ==='large'
   })
   if( as === 'a'){
    return(
        <a className={classes} {...restProps}>
        {loading &&  <IconLoading /> }
        {children}
        </a>
      );
   }
  return(
    <button className={classes} {...restProps}>
    {loading &&  <IconLoading /> }
    {children}
    </button>
  );
}

export default Button;
