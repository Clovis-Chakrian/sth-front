import React from 'react';
import { Box, TextField, Button, Typography, IconButton, InputAdornment,  AppBar,  Toolbar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import logoLogin from "../../assets/logoLogin.png";
import logo from "../../assets/logoInitial.png";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
      <Box
      display="flex"
      flexDirection={'column'}
      sx={{ height: '100vh', backgroundColor: '#310F9F', minHeight:'800px'}}
      >
        <AppBar position="static" style={{ backgroundColor: "#310F9F" }}>
          <Toolbar
            style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <img src={logo} alt="logo" width="170px" />
          </Toolbar>
      </AppBar>

      <Box
        display="flex"
        justifyContent="center"
        align-items='stretch' /* Faz os itens terem a mesma altura */
        sx={{backgroundColor: '#310F9F', width:'100%'}}>
        <Box
        marginTop={'10px'}
          sx={{
            margin:'auto',
            width: '40%',
            maxWidth: 500,
            p: 1,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
            Cadastro
          </Typography>
          <Box component="form" noValidate autoComplete="off"
          sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',  // Espaça os elementos igualmente
        minHeight:'500px',             // Ajuste a altura conforme necessário
        padding: 3,                       // Espaçamento interno
      }}
          >
            <TextField label="Nome completo" fullWidth required sx={{ mb: 2 }} defaultValue="" />
            <TextField label="Instituição ou Empresa" fullWidth required sx={{ mb: 2 }} defaultValue="" />
            <TextField label="Email" type="email" fullWidth required sx={{ mb: 2 }} placeholder="" />
            <TextField
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirmar senha"
              type={showConfirmPassword ? 'text' : 'password'}
              fullWidth
              required
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#6A00B9', '&:hover': { backgroundColor: '#5800A1' } }}>
              Cadastrar
            </Button>
          </Box>
        </Box>
        {/* Box para o lado direito com imagem ou ilustração */}
        <Box
          component="img"
          src={logoLogin}
          alt="Ilustração"
          sx={{
            display: { xs: 'none', lg: 'block' }, // Exibe a imagem apenas quando a tela for maior que 1200px
            width: { lg: '45%' },
            maxHeight: '800px',
            borderRadius: '2px',
            marginTop: '10px',
          }}
        />
      </Box>
    </Box>
  );
}
export default RegisterPage;
