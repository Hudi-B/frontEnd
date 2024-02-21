import React from "react";
import { TextField, Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";

function Login() {

    const dispatch = useDispatch();

    const HandleLogin = () => {
        dispatch("login");
    }

    return (
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={3}
        flexDirection="column"
        >
            <Stack direction="column" spacing={2}>
                <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                    />
                    b
                <TextField
                    id="password"
                    name="password"
                    label="password"
                    variant="outlined"
                    type="password"
                />
            </Stack>
        </Box>
    );
}

export default Login;