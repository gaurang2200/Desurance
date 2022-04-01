import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button, DialogActions, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import gradientBg from '../images/gradientBg.svg'
import BootstrapInput from "./BootstrapInput";

const NomineeForm = ({ open, handleClose, cost }) => {
    return (
        <Dialog open={open} onClose={handleClose} className="Blur"
            PaperProps={{
                style: {
                    background: '#040011',
                    color: 'white',
                    alignItems: 'center',
                    border: '1px solid #444',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '1em 2em',
                },
                elevation:12
            }}
        >
            <DialogTitle sx={{ fontSize:'2em' }}>
                ADD NOMINEE
            </DialogTitle>
            <DialogContent>
                <img
                    src={gradientBg}
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        zIndex: "0",
                        top: '-5%',
                    }}
                />
                <DialogContentText color="#999" align="center" marginBottom="2em">
                Add a trusted nominee that will recieve your funds in case of a mishappening. You can add only 1 nominee.
                </DialogContentText>

                <Box sx={{ my: 5 }}>
                    <InputLabel sx={{ mt: 5, display: ['none', 'none', 'block'] }} htmlFor="n-address">
                        Nominee Name
                    </InputLabel>
                    <BootstrapInput
                        id="n-address"
                        fullWidth
                        placeholder="Enter Name of the Nominee"
                    />


                    <InputLabel sx={{ mt: 5, display: ['none', 'none', 'block'] }} htmlFor="n-Address">
                        Nominee Address
                    </InputLabel>
                    <BootstrapInput
                        id="n-Address"
                        fullWidth
                        placeholder="Enter the Wallet Address of the Nominee"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button disableRipple className="btn" sx={{ width:'10em', fontSize:'larger', py:1, my: 2 }} fullWidth onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default NomineeForm;