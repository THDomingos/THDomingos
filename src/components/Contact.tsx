import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, MailOutline, GitHub } from "@mui/icons-material";

const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        position: "relative",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,code')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ zIndex: 2, maxWidth: "800px" }}>
        <Typography variant="h3" gutterBottom>
          Vamos criar algo incrível juntos!
        </Typography>
        <Typography variant="h6" paragraph>
          Sinta-se à vontade para entrar em contato. Seja para discutir projetos, compartilhar ideias ou apenas dizer olá!
        </Typography>

        {/* Links de Contato */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/thiagohdomingos/"
            target="_blank"
            sx={{
              color: "white",
              "&:hover": { color: "primary.main" },
              fontSize: "40px",
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            href="mailto:thiagohdomingos@hotmail.com"
            sx={{
              color: "white",
              "&:hover": { color: "primary.main" },
              fontSize: "40px",
            }}
          >
            <MailOutline fontSize="large" />
          </IconButton>
          <IconButton
            href="https://github.com/THDomingos"
            target="_blank"
            sx={{
              color: "white",
              "&:hover": { color: "primary.main" },
              fontSize: "40px",
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Box>

        {/* Formulário do Google */}
        <Box
          sx={{
            border: "2px solid white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScS-Kx0BKXr7hp4gDdn30WmhndR06hRNp1qh89zW66fsO0hVg/viewform?embedded=true"
            width="100%"
            height="500px"
            frameBorder="0"
            title="Formulário de Contato"
            style={{
              border: "none",
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
