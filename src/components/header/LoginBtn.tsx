import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import PopupState from 'material-ui-popup-state';
export default function LoginBtn() {
    const [username, setUsername] = useState<string>();
    const [email, setemail] = useState<string>();
    const [loggedIn, setloggedIn] = useState<boolean>(false);
    const navigate = useNavigate();
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

    const logout = () => {
        localStorage.removeItem("access_token");
        window.location.reload();
    };

    useEffect(() => {
        //Todo fetch current user
        if (!localStorage.getItem("access_token")) {
            setloggedIn(true);
            setUsername("Exempel Exempelson");
            setemail("Exempel.Exempelson@gmail.com");
        }
    }, []);

    return (
        (loggedIn) ?
            <PopupState variant="popover" popupId="demoMenu" >
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            {username}
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem>
                                <div className="BoldText">
                                    <p>{email}</p>
                                </div>

                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <div className="BoldText">
                                    <p>LOG OUT</p>
                                </div>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            :
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Button style={{ margin: "5px" }} variant='text'>LOG IN</Button>
                <Button style={{ margin: "5px" }} variant='contained'>REGISTER</Button>
            </div>

    )
}
