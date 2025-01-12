import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SiPostgresql, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";


const Skills: React.FC = () => {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "#ff9800" },
    { name: "SQL / PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
  ];

  return (
    <Box
      sx={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "secondary.main",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Habilidades Técnicas
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "background.paper",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: 3,
                transition: "transform 0.3s, background-color 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: skill.color,
                  color: "#ffffff",
                },
              }}
            >
              <Box
                sx={{
                  fontSize: "60px", // Aumenta o tamanho do ícone
                  marginBottom: "10px",
                }}
              >
                {skill.icon}
              </Box>
              <Typography variant="h6">{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
