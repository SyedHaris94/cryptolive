import axios from 'axios';
import { handleAction } from '../actions/handleaction';
import * as DB from "../../firebase/firebase";

import { toast } from 'react-toastify';
import { css } from 'glamor';
import $ from "jquery";
export default class MiddleWare{


    static LoginRequest(data, route) {
        console.log("daadaa", data);
        return dispatch => {
          return DB.auth
            .signInWithEmailAndPassword(data.email, data.password)
            .then(sent => {
                dispatch(handleAction.login(data));
                   toast.success("successfully Login !", {
                      position: toast.POSITION.TOP_RIGHT
                    });
                    localStorage.setItem('user', sent.email)
                $("#closeModal").click();
                window.location.reload()
                    // route.push(
                    //  "/icopage"
                    // )
            })
            .catch(error => {
                var errorMessage ="The email address or password you entered is not valid";
                toast.error(errorMessage, {
                  position: toast.POSITION.TOP_CENTER
                });
            });
        };
    }


    static SignupRequest(data, route) {
        console.log("datataa", data);
        return dispatch => {
            return DB.auth
              .createUserWithEmailAndPassword(data.email, data.password)
              .then(send => {
                var user = DB.auth.currentUser;
                //   console.log('user', user) 
                        const ref = DB.database.ref("User/Profiles");
                               ref.push(
                                 {
                                    uid:
                                     send.uid,
                                    name:
                                     data.name,
                                    email:
                                     data.email,
                                    role:
                                     "User",
                                     contactNum: data.contactNum,
                                 },
                                 success => {
                                   dispatch(
                                     handleAction.signup(
                                       {
                                         name:
                                           data.name,
                                         email:
                                           data.email,
                                           contactNum: data.contactNum,
                                         role:
                                           "User"
                                       }
                                     )
                                   ),
                                   route.push(
                                    "/"
                                  );
                                  toast.success("successfully Signup!", {
                                    position: toast.POSITION.TOP_CENTER
                                  });
                                     $("#closeModal").click();
                                 }
                            );
                      }).catch( data => {
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });

                });
        
        };
      }
    

      static UserProfile() {
        console.log("fetching user");
        return dispatch => {
        //   let user = DB.auth.currentUser;
          let arrdata = [];
          let dataabase = DB.database.ref("User/Profiles");
          dataabase.on("value", object => {
            let data = object.val();
            for (var a in data) arrdata.push(data[a]);
                dispatch(handleAction.userprofile(arrdata));   
                // console.log("fetched user profile", data);
            });
        };
      }

    static LoginFacebook(){
        return dispatch => {
          console.log("login user")
          DB.auth.signInWithPopup(DB.provider).then((result, error) => {
            
            var user = result.user;


            if (error) {
                var errorMessage ="Unable to Signin with Facebook";
                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_CENTER
                  });
            } else {
                const ref = DB.database.ref("/User/Profiles/").orderByChild("unique_id").equalTo(result.additionalUserInfo.profile.id).on('value', (snapshot) => {
                    console.log('result_user', snapshot.val());
                    if (!snapshot.val()){
                        DB.database.ref("/User/Profiles/").push(
                        {
                            uid : user.uid,
                            unique_id: result.additionalUserInfo.profile.id,
                            name: result.additionalUserInfo.profile.name,
                            image : result.additionalUserInfo.profile.picture.data.url,
                            role: "User",
                            // contactNum: data.contactNum,
                        });
                    }
                });
                console.log('result', result);
                console.log('provider', DB.provider);
                localStorage.setItem('user', result.additionalUserInfo.profile.name
        )
            dispatch(handleAction.facebookLogin());   
            toast.success("successfully Login !", {
                position: toast.POSITION.TOP_CENTER

            });
            }
          })

        
        }
    }

    static LoginTwitter(){
        return dispatch => {
          console.log("login user")
          DB.auth.signInWithPopup(DB.twitterProvider).then(result =>  {
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            var user = result.user;
            
            const ref = DB.database.ref("/User/Profiles/").orderByChild("unique_id").equalTo(result.additionalUserInfo.profile.id).on('value', (snapshot) => {
                console.log('result_user', snapshot.val());
                if (!snapshot.val()){
                    DB.database.ref("/User/Profiles/").push(
                    {   
                        uid : user.uid,
                        unique_id: result.additionalUserInfo.profile.id,
                        name: result.additionalUserInfo.profile.name,
                        image : result.additionalUserInfo.profile.profile_image_url,
                        role: "User",
                        // contactNum: data.contactNum,
                    });
                }
            });
            console.log('result',result.additionalUserInfo)
            localStorage.setItem('user', result.additionalUserInfo.username)
            toast.success("successfully Login !", {
                position: toast.POSITION.TOP_CENTER

            });
            
          }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            console.log(error)
            
          });

        console.log('provider', DB.twitterProvider);
        dispatch(handleAction.twitterLogin());   
        }
    }

    static LoginGoogle(){
        return dispatch => {
          console.log("login user")

          DB.auth.signInWithPopup(DB.googleProvider).then(result =>  {
            var token = result.credential.accessToken;
            
            var user = result.user;
            console.log('result',result)

            const ref = DB.database.ref("/User/Profiles/").orderByChild("email").equalTo(result.additionalUserInfo.profile.email).on('value', (snapshot) => {
                console.log('result_user', snapshot.val());
                if (!snapshot.val()){
                    DB.database.ref("/User/Profiles/").push(
                    {
                        unique_id: result.additionalUserInfo.profile.id,
                        name: result.additionalUserInfo.profile.name,
                        image : result.additionalUserInfo.profile.picture,
                        email: result.additionalUserInfo.profile.email,
                        role: "User",
                    });
                }
            });

            localStorage.setItem('user', result.additionalUserInfo.profile.name)
            toast.success("successfully Login !", {
                position: toast.POSITION.TOP_CENTER

            });
            
          }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            console.log(error)
            
          });

        console.log('provider', DB.twitterProvider);
        dispatch(handleAction.twitterLogin());   
        }
    }


      static resetPass(data) {
        console.log("reset email", data);
        return dispatch => {
          dispatch(handleAction.resetpass(data));
          var emailAddress = data.email;
          DB.auth
            .sendPasswordResetEmail(emailAddress)
            .then(function() {
              // Email sent.
              toast.success("Email Successfully Sent!", {
                position: toast.POSITION.TOP_CENTER
              });
                $("#closeModal").click();
            //   alert("Email Successfully Sent");
            })
            .catch(function(error) {
              // An error happened.
              var errorMessage = "The email address you entered is not Registered";
              toast.error(errorMessage, {
                position: toast.POSITION.TOP_RIGHT
              });
            });
        };
      }
    
      static SendRating(data) {
        console.log("send data", data);
       
        return dispatch => {
          let user = DB.auth.currentUser;
          let database = DB.database.ref("User/Rating")
          database.push(
            {
                // unique_id : 
                uid: user.uid,
                comment: data.comment,
                Team: data.Team,
                Concept: data.Concept,
                Whitepaper: data.Whitepaper,
                icoName: data.icoName,
                approved: 0
            },
            success => {
              dispatch(
                handleAction.sendRating(
                  {
                    comment: data.comment,
                    Team: data.Team,
                    Concept: data.Concept,
                    Whitepaper: data.Whitepaper,
                    icoName: data.icoName
                  }
                )
              ),
                alert(
                  "successfully rated"
                );
            }
          );
        };
    }

    static  sendCryptoCurr(data){
        console.log("send data", data);
        return dispatch => {
            let database = DB.database.ref("CryptoCurrency")
            if(data.coin !== data.coin){
            database.set(
              {
                coin: data.coin 
              }
            ,
              success => {
                dispatch(
                  handleAction.send_crypto(
                    {
                    coin: data.coin
                    }
                  )
                ),
                alert('succesfully send')
                console.log('succesfully updated data');
               }
            );
        }
        else {
            alert('exist')
                console.log('already exist');
            }
        }
    };

    static fetchCryptoData() {
        console.log("fetching data");
        return dispatch => {
            let arrdata = [];
            let dataabase = DB.database.ref('CryptoCurrency/');
            dataabase.on("value", snapshot => {
                snapshot.forEach((cryptoSnapshot) => {
                    let array = [];
                    let obj = cryptoSnapshot.val();
                    console.log('data ===' ,obj)
                    for (var a in obj) {
                        array.push(obj[a]);
                        console.log('array ===' ,array)
                        dispatch(handleAction.get_crypto(array))
                    }
                })
            });
        };
    }

    static  sendAllICO(data){
            console.log("send data", data);
            return dispatch => {
                let database = DB.database.ref("ICO/All ICO")
                // if(data.allico !== data.allico){
    
                database.set(
                  {
                    allico: data.allico 
                  }
                ,
                  success => {
                    dispatch(
                      handleAction.send_ICO(
                        {
                            allico: data.allico
                        }
                      )
                    ),
                    alert('success')
                    console.log('succesfully updated data');
                   }
                );
            // }
            // else {
            //     alert('exist')
            //         console.log('already exist');
            //     }
            }};
    
    static fetchIcoData() {
        console.log("fetching data");
        return dispatch => {
            let arrdata = [];
            let dataabase = DB.database.ref('ICO/All ICO');
            dataabase.on("value", snapshot => {
                snapshot.forEach((icoSnapshot) => {
                    let array = [];
                    let obj = icoSnapshot.val();
                    console.log('data ===' ,obj)
                    for (var a in obj) {
                        array.push(obj[a]);
                        // console.log('array all_ico ===' ,array)
                        dispatch(handleAction.get_ICO(array))
                    }
                })
            });
        };
    }

    static sendUpcomingICO(data){
        console.log("send data", data);
        return dispatch => {
            let database = DB.database.ref("ICO/Upcoming ICO")
            if(data.upcomingico === data.upcomingico){

            database.set(
                {
                    upcomingico: data.upcomingico
                }
            ,
                success => {
                dispatch(
                    handleAction.send_ICO(
                    {
                        upcomingico: data.upcomingico
                    }
                    )
                ),
                alert('successfully sent');
                // console.log('succesfully updated data');
                }
            );
        }
        else {
                alert('already exist');
                // console.log('already exist');
            }
        }};

    static fetchUpcomingICO() {
        console.log("fetching data");
        return dispatch => {
            let arrdata = [];
            let dataabase = DB.database.ref('ICO/Upcoming ICO');
            dataabase.on("value", snapshot => {
                snapshot.forEach((upcomSnapshot) => {
                    let array = [];
                    let obj = upcomSnapshot.val();
                    console.log('data ===' ,obj)
                    for (var a in obj) {
                        array.push(obj[a]);
                        // console.log('array uc_ico ===' ,array)
                        dispatch(handleAction.get_uc_ICO(array))
                    }
                })
            });
        };
    }

    static sendEndedICO(data){
        console.log("send data", data);
        return dispatch => {
            let database = DB.database.ref("ICO/Ended ICO")
            if(data.endedico !== data.endedico){

            database.set(
                {
                    endedico: data.endedico
                }
            ,
                success => {
                dispatch(
                    handleAction.send_end_ICO(
                    {
                        endedico: data.endedico
                    }
                    )
                ),
                alert('successfully sent');
                // console.log('succesfully updated data');
                }
            );
        }
        else {
                alert('already exist');
                // console.log('already exist');
            }
        }};


    static fetchEndedICO() {
        console.log("fetching data");
        return dispatch => {
            let arrdata = [];
            let dataabase = DB.database.ref('ICO/Ended ICO');
            dataabase.on("value", snapshot => {
                snapshot.forEach((endSnapshot) => {
                    let array = [];
                    let obj = endSnapshot.val();
                    console.log('data ===' ,obj)
                    for (var a in obj) {
                        array.push(obj[a]);
                        // console.log('array ended_ico ===' ,array)
                        dispatch(handleAction.get_end_ICO(array))
                    }
                })
            });
        };
    }

    
    static sendPublishICO(data){
        console.log("send data", data);
        return dispatch => {
            let database = DB.database.ref("/ICO/All ICO/allico")
            database.push(
                {   
                    email: data.email,
                    ico_name: data.ico_name,        
                    website_url: data.website_url,
                    social: data.social,
                    about: data.about,
                    country: data.country,
                    ico_start_date: data.ico_start_date,
                    ico_end_date: data.ico_end_date,
                    link_to_white: data.link_to_white,  
                    link_to_bounty: data.link_to_bounty,
                    token_ticker: data.token_ticker,
                    paltform: data.paltform,
                    white_kyc: data.white_kyc,
                    restriction: data.restriction,
                    approved: 0,
                    goal: 999,
                    featured: 0
                },
                success => {
                dispatch(
                    handleAction.send_publish(
                    {
                        email: data.email,
                        ico_name: data.ico_name,        
                        website_url: data.website_url,
                        social: data.social,
                        about: data.about,
                        country: data.country,
                        ico_start_date: data.ico_start_date,
                        ico_end_date: data.ico_end_date,
                        link_to_white: data.link_to_white,  
                        link_to_bounty: data.link_to_bounty,
                        token_ticker: data.token_ticker,
                        paltform: data.paltform,
                        white_kyc: data.white_kyc,
                        restriction: data.restriction,
                        approved: 0,
                        goal: 999,
                        featured: 0
                    }
                    )
                ),
                alert('successfully sent');
                }
            );
    }};

    static GetRating() {
        console.log("fetching data");
        return dispatch => {
            let dataabase = DB.database.ref('User/Rating/');
            dataabase.on("value", snapshot => {
                // snapshot.forEach((endSnapshot) => {
                    let array = [];
                    let obj = snapshot.val();
                    console.log('data ===' ,obj)
                    for (var a in obj) {
                        array.push(obj[a]);
                        // console.log('array ended_ico ===' ,array)
                        dispatch(handleAction.getRating(array))
                    }
                })
        };
    }

    static GetData = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData1(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData2 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=150&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData2(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData3 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=300&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData3(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData4 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=450&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData4(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData5 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=600&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData5(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData6 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=750&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData6(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData7 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=900&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData7(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData8 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1050&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData8(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData9 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1200&limit=150')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData9(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData10 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1350&limit=200')
                .then((res) => {
                    // console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData10(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }
    static GetGlobal = () => {  
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/global/')
            .then((res) => {
                // console.log('response of getting global req', res.data)
                dispatch(handleAction.getGlobal(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }

    static CryptoInfo = () => {  
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=1600')
            .then((res) => {
                // console.log('response of getting global req', res.data)
                dispatch(handleAction.getCryptoDetail(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }


    static BitcoinData = () => {
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
            .then((res) => {
                // console.log('response of getting bitcoin page', res.data)
                dispatch(handleAction.getBitcoin(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }
}
