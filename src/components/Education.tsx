import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

const Education: React.FC = () => {
  const theme = useTheme();

  const educationData = [
    {
      icon: <FaGraduationCap style={{ color: "#FFA500", fontSize: "30px" }} />,
      title: "Engenharia de Software",
      institution: "Descomplica Faculdade Digital",
      year: "2024",
    },
    {
      icon: <FaJava style={{ color: "#007396", fontSize: "30px" }} />,
      title: "Formação em Java",
      institution: "Rocketseat",
      year: "2024",
    },
    {
      icon: <FaGraduationCap style={{ color: "#FFA500", fontSize: "30px" }} />,
      title: "Liderança e Gestão de Pessoas",
      institution: "Descomplica Faculdade Digital",
      year: "2023",
    },
    {
      icon: <FaGraduationCap style={{ color: "#336791", fontSize: "30px" }} />,
      title: "Tecnologia em Redes de Computadores",
      institution: "UNINTER Centro Universitário Internacional",
      year: "2022",
    },
  ];

  return (
    <Box
      sx={{
        padding: "50px",
        color: "text.primary",
        backgroundColor: "secondary.main",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Formação Acadêmica
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "4px",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        {educationData.map((edu, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
              position: "relative",
              "&:nth-of-type(even)": {
                flexDirection: "row-reverse",
                textAlign: "right",
              },
            }}
          >
            <Paper
              sx={{
                padding: "20px",
                width: "300px",
                marginX: "20px",
                boxShadow: 3,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.background.paper
                    : theme.palette.grey[200],
              }}
            >
              <Typography variant="h6" gutterBottom>
                {edu.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.institution}
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
                {edu.year}
              </Typography>
            </Paper>

            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
              }}
            >
              {edu.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
