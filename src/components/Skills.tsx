import React from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import { Code, Dataset, Web, Language } from "@mui/icons-material";

const Skills: React.FC = () => {
  return (
    <Box sx={{ padding: "50px", color: "text.primary", textAlign: "center", backgroundColor: "secondary.main" }}>
      <Typography variant="h4" gutterBottom>
        Habilidades Técnicas
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Chip
            icon={<Language />}
            label="Java"
            color="primary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Chip
            icon={<Dataset />}
            label="SQL / PostgreSQL"
            color="primary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Chip
            icon={<Web />}
            label="React"
            color="primary"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
