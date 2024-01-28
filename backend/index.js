const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PRIVATE_KEY = "a01de8d5-be98-4844-9b47-293b707dcc1c";

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": PRIVATE_KEY } }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error status
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      return res.status(500).json({ error: 'No response received from ChatEngine API' });
    } else {
      // Something happened in setting up the request that triggered an Error
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
