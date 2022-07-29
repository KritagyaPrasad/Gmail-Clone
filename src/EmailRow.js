import React from 'react'
import "./EmailRow.css"
import Checkbox from '@mui/material/Checkbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { IconButton } from '@mui/material';
import {useNavigate} from "react-router-dom";


function EmailRow({id,title,subject,description,time}) {

  const navigate = useNavigate();  

  return (
    <div className="emailRow" onClick={() => navigate("/mail") } >
        <div className="emailRow_options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        
        </div>

        <div className="emailRow_title">
            {title}
        </div>

        <div className="emailRow_message">
            <h4>
                {subject}-
                <span className="emailRow_description">
                    {description}
                </span>
            </h4>
        </div>

        <p className='email_description'>{time}</p>
    </div>
  )
}

export default EmailRow;