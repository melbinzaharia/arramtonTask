import User from "../models/user.model.js";



export const userDetails = async (req, res, next) => {
  const  id  = req.params.id;
  try {
    const validUser = await User.findById(id);
    const { password: pass, ...rest } = validUser?._doc;
    res.json(rest);
  } catch (err) {
    next(err);
  }
};


export default userDetails;