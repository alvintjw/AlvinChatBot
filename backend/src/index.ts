import app from "./app.js";
import { connectToDatbase } from "./db/connections.js";

//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatbase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open and connected to Database")
    );
  })
  .catch((error) => console.log(error));
