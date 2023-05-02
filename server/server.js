const app = require("./app");
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.status(200).send("<h1>The server is running successfully!</h1>");
});

// Handling uncaught exceptions.
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the system due to uncaught exception.`);
  process.exit(1);
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`The server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
};

start();

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection.`);
  server.close(() => {
    process.exit(1);
  });
});
