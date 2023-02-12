import React from 'react'
import { useTheme } from '../CustomHooks/CustomHook';



function ThemeToggle() {
   // This is  a customhook can be used anywhere 
   const {theme, onThemeChangeHandler} = useTheme(); 

   console.log(useTheme);
    return (
       <div>
         <div className='btn btn-dark mt-3' onClick={onThemeChangeHandler}>
            { theme === 'dark' ? (
             <div className='btn btn-warning'> 
             <i className="fa-regular fa-sun"></i>
             </div>):(
               <div className='btn btn-dark'>
              <i className="fa-regular fa-moon"></i>
              </div>)}
            </div>
          <div className="text-box mt-4"
             style={{
                backgroundColor : theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white"
             }}>
               Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
               turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
               sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
               mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
               ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
               ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
               eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
               in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
               faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
               Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
               facilisis luctus, metus
         </div>   
       </div>
    )
}

export default ThemeToggle;