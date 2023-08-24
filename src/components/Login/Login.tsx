import { Fragment,useEffect,useState } from "react";
import ModalLogin from "../UI/ModalLogin";
import classes from './Login.module.scss'
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useAppDispatch } from "../../app/hooks";
import {addUser} from "../../app/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Login = (props: any) => {
    const dispatch = useAppDispatch();
    const items = useSelector((state: RootState) => state.user);

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState(null)
    


    const Signin=async()=>{
        const response= await axios.post('https://milk-tea-shop-be.onrender.com/api/login/',{
            username,password
        })
        console.log(response.data)
        console.log(response.data.user)
        document.cookie='refreshToken='+response.data.refreshToken
        document.cookie='accessToken='+response.data.accessToken
        dispatch(addUser(response.data.user));
        response.data.error&&setErr(response.data.error)
        !response.data.error&&props.onHideLogin()
    }

    useEffect(()=>{
        console.log(items)
    },[])

  return (
    <Fragment>
        <ModalLogin onClose={props.onHideLogin}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPViCqVyGRxdQtmHT-5rBlQoa1XJsMwkOdQ3A-hEWfkYMRLG-S-LRYCLcGteHqbSF4Kk&usqp=CAU" 
                        style={{width:100,height:100,marginLeft:35+'%',marginBottom:10+'%'}}/>
                    <div className={classes.loginForm}>
                        <input type="text" name="username" placeholder="Tài khoản" onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="password" name="password" placeholder="Mật khẩu" onChange={e=>setPassword(e.target.value)}/>
                        <p style={{color:'red'}}>{err}</p>
                        <button type="submit" className={classes.btn} onClick={Signin} >Đăng nhập</button>
                        <p className={classes.message}>Bạn có tài khoản chưa ?<a href="#"> Đăng kí</a></p>
                    </div>
                </div>
            </div>
            
        </ModalLogin>
    </Fragment>
  );
};

export default Login;
