import React from "react";
import { Dialog } from "@mui/material";
import successImg from '../images/successImg.png';

const SuccessImage = ({ showImage, handleImageClose }) => {
    return (
        <Dialog open={showImage} onClose={handleImageClose} className="Blur"
        PaperProps={{
            style:{
                borderRadius: '10px'
            }
        }}>
            <img src={successImg} />
        </Dialog>
    );
}

export default SuccessImage;