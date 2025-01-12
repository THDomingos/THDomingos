import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Projects: React.FC = () => {
  return (
    <Box sx={{ padding: "50px", color: "text.primary", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            href="https://github.com/THDomingos/THDomingos"
            startIcon={<GitHub />}
            sx={{ textAlign: "left", padding: "20px" }}
          >
            Portfólio - React
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            href="https://github.com/THDomingos/patient_management"
            startIcon={<GitHub />}
            sx={{ textAlign: "left", padding: "20px" }}
          >
            Patient Management - Java, SQL, React
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
