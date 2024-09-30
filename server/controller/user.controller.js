import UserForm from "../model/user.model.js";

export const submitUserForm = async (req, res) => {
  try {
    const { username, phoneNumber, location } = req.body;

    if (!username || !phoneNumber || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newUserForm = new UserForm({
      username,
      phoneNumber,
      location,
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
