import UserForm from "../model/user.model.js";

export const submitUserForm = async (req, res) => {
  try {
    const { username, phoneNumber, location, address } = req.body;

    if (!username || !phoneNumber || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUserForm = new UserForm({
      username,
      phoneNumber,
      location,
      address,
    });

    await newUserForm.save();

    return res
      .status(201)
      .json({ message: "User form submitted successfully!" });
  } catch (err) {
    console.error("Error saving user form:", err);
    return res.status(400).json({ message: err.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUser = await UserForm.find();
    return res.status(200).json(allUser);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const clear = await UserForm.deleteMany({});
    res.status(200).json({ message: "userDetail is cleared successfully" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
