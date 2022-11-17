import React from 'react';
import UserIcon from './images/icons8-user-96.png';
import Button from '../extra/Button';
import { useEffect, useState } from 'react';


export const LoginBtn = () => {
    const [username, setUsername] = useState<string>();
    const [email, setemail] = useState<string>();
    const [loggedIn, setloggedIn] = useState<boolean>(false);


    const logout = () => {
        localStorage.removeItem('access_token');
        window.location.reload();
    }

    useEffect(() => {
        //Todo fetch current user
        if (localStorage.getItem('access_token')) {
            setloggedIn(true)
            setUsername("Exempel Exempelson");
            setemail("Exempel.Exempelson@gmail.com");
        };
    }, []);

    if (loggedIn) {

        return (
            <div className='dropdown'>
                <Button content='Login' color='#D9D9D9' iconLink={UserIcon} onClick={
                    () => console.log("You clicked on login buttons")
                }
                />
                <div className='dropdown-content'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'left',
                    }}>
                        <button onClick={logout}
                            className='BoldText' style={{
                                border: 'none',
                                backgroundColor: '#29ABE2',
                                borderRadius: '5px',
                                padding: '5px',
                            }
                            }

                        >Logout</button>
                    </div>
                    <div className='BoldText'>
                        {username}
                        {email}
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <Button content='Login' color='#D9D9D9' iconLink={UserIcon} onClick={()=>{
                
            }}/>
        )
    }






}