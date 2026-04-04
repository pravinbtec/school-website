const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
console.log("MONGO_URI starts with:", process.env.MONGO_URI?.slice(0, 20));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
  })
  .catch((error) => {
    console.log("MongoDB error:", error);
  });

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

const admissionSchema = new mongoose.Schema(
  {
    studentName: String,
    parentName: String,
    email: String,
    phone: String,
    className: String,
  },
  { timestamps: true }
);

const Admission = mongoose.model("Admission", admissionSchema);

app.post("/api/contact", async (req, res) => {
  console.log("Incoming data:", req.body);

  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.json({ message: "Message saved successfully ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/contact/:id", async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    res.status(200).json({ message: "Contact message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact message", error });
  }
});

app.post("/api/admission", async (req, res) => {
  try {
    const { studentName, parentName, email, phone, className } = req.body;

    const newAdmission = new Admission({
      studentName,
      parentName,
      email,
      phone,
      className,
    });

    await newAdmission.save();

    res.json({ message: "Admission submitted successfully ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/admission", async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/admission/:id", async (req, res) => {
  console.log("DELETE admission route hit, id =", req.params.id);
  try {
    const deletedAdmission = await Admission.findByIdAndDelete(req.params.id);

    if (!deletedAdmission) {
      return res.status(404).json({ message: "Admission form not found" });
    }

    res.status(200).json({ message: "Admission form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting admission form", error });
  }
});

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000} 🚀`);
});