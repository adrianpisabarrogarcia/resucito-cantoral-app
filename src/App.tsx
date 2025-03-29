import React from "react";
import Header from "./components/Header";
import { Box, Typography, Container, Paper } from "@mui/material";

function App() {
  return (
    <>
      <Header />
        <Box
          sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={3}
              sx={{ p: 4, backgroundColor: "#fff9f9", borderRadius: 3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4, // margen superior opcional
                }}
              >
                <img
                  src="/home-image.webp"
                  alt="Imágen con el título del cantoral: Resucitó"
                  width={300}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ mt: 2, mb: 3, textAlign: "justify" }}
              >
                En el <strong>Camino Neocatecumenal</strong> vemos aparecer hoy
                un servicio humilde y esencial cual es el del{" "}
                <strong>CANTOR</strong>. Él, en este itinerario de educación de
                la fe, tiene la misión de ayudar a crear la comunidad litúrgica
                o, mejor, de recrearla; de convertir tantas veces una pluralidad
                en una unidad de culto: «A una sola voz, con un solo corazón y
                con una sola alma».
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", textAlign: "justify", mb: 3 }}
              >
                Culto espiritual que se expresa en la acción litúrgica de la
                comunidad: fuente constante, en nuestro caminar histórico, de lo
                más profundamente inocente: el sentimiento de nuestra maldad
                iluminado por lo inefable del amor de ALGUIEN que nos ama así,
                que nos ama aunque hayamos sido sus enemigos; fuente de la
                conversión, fuente de la FE.
              </Typography>

              <Typography
                variant="subtitle2"
                align="right"
                sx={{ fontWeight: "bold", mt: 4 }}
              >
                — KIKO
              </Typography>
            </Paper>
          </Container>
        </Box>
    </>
  );
}
export default App;
