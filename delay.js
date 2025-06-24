export default async function handler(req, res) {
  const ms = parseInt(req.query.ms || '1000');
  if (isNaN(ms) || ms < 0 || ms > 30000) {
    return res.status(400).send("Invalid 'ms' query parameter. Must be between 0 and 30000.");
  }

  await new Promise(resolve => setTimeout(resolve, ms));
  res.status(200).send(`Delayed for ${ms}ms`);
}