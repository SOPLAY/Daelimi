export default function handler(req, res) {
  if (req.method === "POST") {
    res
      .status(200)
      .json({ answer: `${req.body.isFilter} : ${req.body.message}` });
  } else {
    res.status(400).json({ badRequest: "Do not use this" });
  }
}
