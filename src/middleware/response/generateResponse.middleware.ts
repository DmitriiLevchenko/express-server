

export default function (req, res, next) {
  try {
    if (!res.data) {
      throw new Error("Something went wrong");
    } else {
      res.status(200).json(res.data);
    }
  } catch (e) {
    next(e);
  }
}
