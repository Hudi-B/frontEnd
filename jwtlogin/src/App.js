import './App.css';
import { Stack, Container, TextField, Button, Box, Card, CardContent, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username , setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const login = () => {
    setUsername(document.getElementById('username').value);
    setPassword(document.getElementById('password').value);
    axios.post('https://jwt.sulla.hu/login', {username, password})
      .then((response) => {
        const token = response.data.token;
          axios.get('https://jwt.sulla.hu/termekek', {headers: {Authorization: `Bearer ${token}`}})
            .then((response) => {
              setData(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            })
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      })
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1>Login</h1>
        <Stack>
          <TextField id='username' label="Username" variant="outlined" defaultValue={"user"}/>
          <TextField sx={{ mt: 2 }} id='password' label="Password" variant="outlined" defaultValue={"password"} type='password'/>
          <Button sx={{ mt: 2, maxWidth: 200, mx: 'auto' }} variant="contained" onClick={login}>Login</Button>
        </Stack>
        <Box sx={{ mt: 2 }}>
          {loading ? (
              <Alert severity="info">Logging in...</Alert>
            ) : (
              data.map((item) => (
                <Card key={item.id} variant="outlined">
                  <CardContent>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </CardContent>
                </Card>
              ))
            )}
        </Box>
      </Container>

    </>
  );
}

export default App;
