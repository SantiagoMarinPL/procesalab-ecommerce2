import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import dynamic from "next/dynamic";

const dev = process.env.NODE_ENV === "development" || true; // remove "|| true" in production

function Contact(props) {
  // Customer details
  const [identifier, setIdentifier] = useState(dev ? '123456' : '');
  const [firstName, setFirstName] = useState(dev ? 'Juan' : '');
  const [lastName, setLastName] = useState(dev ? 'Arcila' : '');
  const [phone, setPhone] = useState(dev ? '3228752768' : '');
  const [email, setEmail] = useState(dev ? 'juanca.arcilav@gmail.com' : '');

  return (
    <Layout title="Contact">
      <Typography gutterBottom variant="h6" color="textPrimary" component="h1">
        Contact
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="identifier"
          label="Identifier"
          name="identifier"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Enviar
        </Button>
      </form>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
});
