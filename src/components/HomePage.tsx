import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { LinkedIn, MailOutline } from "@mui/icons-material";

const HomePage: React.FC = () => {
  return (
<Box sx={{ textAlign: "center", padding: "80px", color: "text.primary" }}>
      <Avatar
        sx={{ width: 150, height: 150, margin: "auto", mb: 2 }}
        alt="Thiago H. Domingos"
        src="../../img/avatar.png"
      />
      
      <Typography variant="h3" gutterBottom>
        Thiago H. Domingos
      </Typography>
      <Typography variant="h6" paragraph>
        Desenvolvedor | Arquiteto de Software 
      </Typography>
      <Typography variant="body1" paragraph>
        Com mais de 12 anos de experiência em tecnologia, incluindo suporte
        técnico, liderança e gestão de pessoas, estou direcionando minha carreira
        para atuar como Arquiteto e Desenvolvedor de Software.
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

export default HomePage;
