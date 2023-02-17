import React, { useState, useContext } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Login({setToggleAuth}) {

    const {handleLogin, user} = useContext(UserContext)
    const history = useHistory()
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: ""
    })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = ({target: {name, value}}) => {
        setUserLoginData(currentUser => ({
            ...currentUser,
            [name]: value
        }))
    }

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
              <form onSubmit={(e) => handleLogin(e, userLoginData)}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                    // html input attribute
                    name="email"
                    type="text"
                    placeholder="johndoe@email.com"
                    onChange={handleChange}
                    // value={user.email}
                    value={userLoginData.email}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                    // html input attribute
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    // value={user.password}
                    value={userLoginData.password}
                    />
                </FormControl>
    
                <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
                </form>
              <Typography
                endDecorator={<Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign up</Link>}
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