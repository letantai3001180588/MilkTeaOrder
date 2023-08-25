import { useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";
import { emptyUser } from "../../app/userSlice";

const HeaderLoginButton = (props: any) => {
  const dispatch = useAppDispatch();

  const [itemAdded, setItemAdded] = useState(false);
  const items = useSelector((state: RootState) => state.user);
  const btnClasses = `${classes.button} ${itemAdded && classes.bump}`;

  const  getCookie=(name:string)=> {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
const deleteCookie=(cookieName:string)=> {
  document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

  const logout=()=>{
    const cookieAccess=getCookie('accessToken');
    const cookieRefresh=getCookie('refreshToken');
    // const res=await axios.post('http://localhost:8000/api/logout/',{
    //   'refresh_token':cookieRefresh
    // },
    //   {
    //     headers:{
    //       "Authorization":'Bearer '+cookieAccess
    //     }
    //   })
    dispatch(emptyUser())
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
  }

  return (
    <div  style={{display:'inline-block'}}>
      {!items.username
      ?<button className={btnClasses} onClick={props.onClick}>
        <span style={{fontSize:18}}>
          Đăng nhập 
        </span>
      </button>

      :<>
      {/* <nav>
        <div className={classes.menu}>
          <input
            type="radio"
            name="selected-menu"
            id="selected-menu4"
            className={classes.menu__selector} />
          <label className={classes.menu__title} htmlFor="selected-menu4">{items.username}</label>
          <ul className={classes.menu__items}>
            <li className={classes.menu__item}>{items.email}</li>
            <li>
              <hr className={classes.dropdown_divider}/>
            </li>
            <li className={classes.menu__item} onClick={()=>logout}>
              <button onClick={logout} style={{zIndex:999}}>
                Logout
              </button>
              Đăng xuất
            </li>
          </ul>
        </div>
      </nav> */}
        <div className={btnClasses} style={{display:'inline-block'}}>
          <span>{items.username}</span>/
          <span  onClick={logout}>Đăng xuất</span>
        </div>

      </>
      }
    </div>
  );
};

export default HeaderLoginButton;
