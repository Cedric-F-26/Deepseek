export default async (req, res) => {
  // Autorise CORS (pour Cursor)
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Transmet la requête à DeepSeek
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DEEPSEEK_KEY}`
    },
    body: JSON.stringify(req.body)
  });
  res.status(200).json(await response.json());
};
