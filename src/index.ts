import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import router from "./routes/routes";
import helmet from "helmet";
import cors from "cors";

import { dataInit } from "./data";
import Config from "./util/config";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

dataInit();

app.use((req: Request, res: Response, next: NextFunction) => {
	console.log("🏈 Solicitud recibida:", req.method, req.url);
	console.log("🏈 body", req.body);
	console.log("🏈 params", req.params);
	// console.log("🏈 query", req.query);
	next();
});

app.use("/api/v1", router);

const port = Config.getInstance().get("port")

const start = (): void => {
	try {
		app.listen(port, () => {
			console.log(`Server started on port ${port}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
