import './App.css';
import React from 'react'
import Content from "./components/Content";
import Menu from "./components/Menu"
import NavBar from "./components/NavBar"
import RightBar from "./components/RightBar"
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box  from '@mui/material/Box';

const App = () => {
  return (
    <Box>
      <NavBar/>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Menu/>
          <Content/>
          <RightBar/>
        </Stack>
      </Container>
    </Box>
  )
}

export default App