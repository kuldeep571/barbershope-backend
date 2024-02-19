const express = require("express");
const dbConnect = require("./Config/dbConnect");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(express.static(__dirname + "/public"))
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/employees", require("./Routers/EmployeesRouter"));

app.use("/api/suppliers", require("./Routers/SuppliersRouter"));

app.use("/api/products", require("./Routers/ProductsRouter"));

app.use("/api/orders", require("./Routers/OrdersRouter"));

app.use("/api/client", require("./Routers/ClientRouter"));

app.use("/api/package", require("./Routers/PackageRouter"));

app.use("/api/user", require("./Routers/UserRouter"));

app.use("/api/admin", require("./Routers/AdminRouter"));

app.use("/api/services", require("./Routers/ServicesRouter"));

app.use("/api/pricinglevel", require("./Routers/PricingRouter"));

app.use("/api/schedule", require("./Routers/ScheduleRouter"));

app.use("/api/imports", require("./Routers/ImportFilesRouter"));

app.listen(PORT, () => {
  console.log(`Barbershop Server is running  at PORT ${PORT}`);
}); 