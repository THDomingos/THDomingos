import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { School } from "@mui/icons-material";

const Education: React.FC = () => {
  return (
    <Box sx={{ padding: "50px", color: "text.primary", textAlign: "center", backgroundColor: "secondary.main" }}>
      <Typography variant="h4" gutterBottom>
        Educação
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: "20px", boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Descomplica Faculdade Digital
            </Typography>
            <Typography variant="body1" paragraph>
              Pós-graduação Lato Sensu, Engenharia de Software - jun de 2024 - dez de 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Micro Certificados: Lógica de Programação com Java, Gerenciamento Avançado de Projetos, etc.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: "20px", boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Rocketseat
            </Typography>
            <Typography variant="body1" paragraph>
              Formação em Java, Tecnologia da Informação - mai de 2024 - dez de 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Formação em desenvolvimento de software com Java.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
