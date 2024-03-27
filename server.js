const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const personRoutes = require('./routes/personRoutes');
app.use('/api', personRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
