import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  return res.status(200).json({
    message: req.query.message?.toString() ?? null,
  });
};

export default handler;
