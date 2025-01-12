import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { LinkedIn, MailOutline } from "@mui/icons-material";

const Contact: React.FC = () => {
    return (

        <Box sx={{ padding: "50px", color: "text.primary", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Contato
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://www.linkedin.com/in/thiagohdomingos/"
                    startIcon={<LinkedIn />}
                >
                    LinkedIn
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="mailto:thiagohdomingos@hotmail.com"
                    startIcon={<MailOutline />}
                >
                    Email
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;
