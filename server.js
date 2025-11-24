const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static('.'));

// Specific route for agent config
app.get('/agent_config.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'agent_config.html'));
});

// Default route - serve index.html for root and any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
