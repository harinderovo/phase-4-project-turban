import React, { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [user, setUser] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    // const handleChange = () => {
    //     let y
    // }

    return (
        <CssVarsProvider>
          <main>
            <Sheet
              sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>
              <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                    // html input attribute
                    name="email"
                    type="text"
                    placeholder="johndoe@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    // value={user.email}
                    value={email}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                    // html input attribute
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    // value={user.password}
                    value={password}
                    />
                </FormControl>
    
                <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
                </form>
              <Typography
                endDecorator={<Link /*onClick={() => setToggleAuth(currentVal => !currentVal)}*/>Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don&apos;t have an account?
              </Typography>
            </Sheet>
          </main>
        </CssVarsProvider>
      )
}

export default Login;