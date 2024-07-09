const CatchError = (res, error) => {
  return res.status(500).json({ error: error.message });
};

module.exports = { CatchError };
