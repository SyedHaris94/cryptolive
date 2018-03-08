import React, {Component} from 'react'

class Auth extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-md-6">
                    <div className="col-md-12">
                        <h1>Login</h1>
                            <div className="col-md-12">
                                <input type="text" placeholder="Username" name="" id=""/>
                            </div>
                            <div className="col-md-12">
                                    <br/>
                                <input type="text" placeholder="Password" name="" id=""/>
                            </div>
                            <div className="col-md-12">
                                <br/>
                                <div className="col-md-1"><input type="checkbox" name="vehicle" value="Bike"/></div>
                                <div className="col-md-9">Keep me signed in</div>
                            </div>
                            <div className="col-md-12">
                                    <br/>
                                    <button type="button" className="btn btn-primary" style={{textAlign: 'center', width: '180px',backgroundColor: '#0097A7'}}>LOGIN</button>
                            </div>
                    </div>
                </div>
                    <div classNameName="col-md-6">
                        <div classNameName="col-md-12" style={{paddingTop: '30px'}}>
                            <h5>If you dont have already account click <br/>
                                then the button below to create your account
                            </h5>
                        </div>
                        <div classNameName="col-md-12">
                            <button type="button" classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width:'180px',marginLeft: '40px',backgroundColor: '#0097A7'}}>CREATE ACCOUNT</button>
                        </div>
                        <br/>
                            {/* <h3 style={{marginLeft: '80px'}}>OR</h3> */}
                        <div classNameName="col-md-12">
                            <button type="button" classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width: '180px',marginLeft: '40px',backgroundColor: '#303f9f'}}>
                                SIGN WITH FACEBOOK
                            </button>
                        </div>
                        <div classNameName="col-md-12">
                            <br/>
                            <button type="button" className="btn btn-primary" style={{textAlign: 'center',width: '180px',marginLeft: '40px',backgroundColor: '#2196f3'}} >
                                SIGN WITH TWITTER
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor: '#e0e0e0',height:'50px',width: '920px',marginTop: '50px'}}>
                        <br/>
                        <p style={{textAlign: 'center'}} >So you cant get in your Account? <u>Did you forget your password?</u></p>
                    </div>
            </div>
        )
    }
}

export default Auth;