import React from 'react';
import "./MailRow.css";
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { selectMail } from '../features/mailSlice';

function MailRow({id, title, subject, desc, time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({id, title, subject, desc, time}));
        history.push("/mail")
    }

    return (
        <div className="mailRow" onClick={openMail}>
            <div className="mailRow__option" >
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className="mailRow__title">{title}</h3>
            <div className="mailRow__message" >
                <h4>{subject}{" "}<span className="mailRow__description" >{desc}</span></h4>
            </div>
            <p className="mailRow__time" >{time}</p>
        </div>
    )
}

export default MailRow;
