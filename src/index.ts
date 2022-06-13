import http, { Server } from "http";
import path from "path";
import { AddressInfo } from "net";
import express, { Application } from "express";
export const app: Application = express();

const server: Server = http.createServer(app);

// creating a static route to the public directory
const pubDir = path.join(__dirname, "../public");

app.use(express.static(pubDir));
app.use(express.json());

app.get("/", (req, res) => res.status(200).sendFile(`${pubDir}/index.html`));

const PORT = process.env.PORT || 4000;

//extracting address for testing purposes
export const SCSAdress = server
  .listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
  .address() as AddressInfo;
