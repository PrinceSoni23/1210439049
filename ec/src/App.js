import React from 'react';
import ProductList from './Components/List';
import {CssBaseline, AppBar, Toolbar, Typography, Container} from '@mui/material';
function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            N Products Lists
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <ProductList />
        </Container>
      </main>
    </div>
  );
}

export default App;
