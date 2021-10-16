import { app } from "./app";

const port = process.env.NODE_ENV || 3333;

app.listen(port, () => {
  console.log(`The server is running on port ${port} ✔`);
})