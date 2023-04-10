import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";

export default function SignInComponent() {
  return (
    <>
      <div className="signUpTable">
        <div className="backButton">
          <IconButton aria-label="delete" href="/">
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="contentsignuptable">
          <Stack spacing={2} sx={{ width: "20vw" }}>
            <h1 className="loginTitle">Sign Up</h1>
            <div className="signUpDiv">
              <Typography>Do you have an account?</Typography>
              <Link className="linkDiv" href="/">
                Sign in
              </Link>
            </div>
            <TextField id="filled-basic" label="Name" variant="outlined" />
            <TextField id="filled-basic" label="Email" variant="outlined" />
            <TextField id="filled-basic" label="Password" variant="outlined" />
            <TextField
              id="filled-basic"
              label="Confirm Password"
              variant="outlined"
            />
            <Button
              className="buttons"
              size="large"
              variant="contained"
              disabled
            >
              Sign Up
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
