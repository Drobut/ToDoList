import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function LoginComponent() {
  return (
    <>
      <div className="loginTable">
        <Stack spacing={2} sx={{ width: "20vw" }}>
          <h1 className="loginTitle">Sign In</h1>
          <div className="signUpDiv">
            <Typography>Don't have an account?</Typography>
            <Link className="linkDiv" href="/signup">
              Sign up
            </Link>
          </div>
          <TextField id="filled-basic" label="Email" variant="outlined" />
          <TextField id="filled-basic" label="Password" variant="outlined" />
          <div className="spaceBetween">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Link className="linkDiv" href="/forgotPassword">
              Forgot your password?
            </Link>
          </div>
          <Button className="buttons" size="large" variant="contained" disabled>
            Sign In
          </Button>
        </Stack>
      </div>
    </>
  );
}
