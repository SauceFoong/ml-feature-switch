import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json({ limit: "10mb" }));
app.use(apiRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Root Directory");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
