import React, {useState} from "react";

const SignUp = ()=>{

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmpassword] = useState("");
    const[error, setError] = useState(""); 
    const[check, setCheck] = useState(false);
    const form_submit = (e)=>{
        e.preventDefault();
        if(!email || !password || !name || !confirmpassword){
            setError("All fields are required");
            setCheck(false);
            return;
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            setError("Email is not valid");
            setCheck(false);
            return;
        }
        else if(password !== confirmpassword){
            setError("Password in not matching");
            setCheck(false);
            return;
        }
        else{
            setError("");
            setCheck(true);
            return;
        }
        
    }

    return (
        <div className="container">
            <div className="formWrap">
                <h1 className="heading">Sign Up</h1>
                <div className="input">
                    <form method="post">
                        <input type="text" className="input" placeholder="Enter Your Full Name" name="fullname" onChange={(e)=> setName(e.target.value)} value={name}/><br></br>
                        
                        <input type="email" className="input" placeholder="Email" name="email" onChange={(e)=> setEmail(e.target.value)} value={email}/><br></br>

                        <input type="password" className="input" placeholder="Password" name="password" 
                        onChange={(e)=> setPassword(e.target.value)} value={password}/><br></br>

                        <input type="password" className="input" placeholder="Confirm Password" name="confirmpassword" onChange={(e)=> setConfirmpassword(e.target.value)} value={confirmpassword}/><br></br>

                        {error && <p style={{color: "red"}}>{error}</p>}
                        {check && <p style={{color: "green"}}>Successfully Submited</p>}
                        <button type="submit" onClick={form_submit}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp