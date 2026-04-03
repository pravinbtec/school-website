import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
    const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingAdmissions, setLoadingAdmissions] = useState(true);
  useEffect(() => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  if (isLoggedIn !== "true") {
    navigate("/admin-login");
  }
}, [navigate]);

  useEffect(() => {
    fetchContacts();
    fetchAdmissions();
  }, []);

 const fetchContacts = async () => {
  try {
    const res = await axios.get("${import.meta.env.VITE_API_URL}/api/contact");
    setContacts(res.data);
  } catch (error) {
    console.log("Error fetching contacts:", error);
  } finally {
    setLoadingContacts(false);
  }
};

  const fetchAdmissions = async () => {
  try {
    const res = await axios.get("${import.meta.env.VITE_API_URL}/api/admission");
    setAdmissions(res.data);
  } catch (error) {
    console.log("Error fetching admissions:", error);
  } finally {
    setLoadingAdmissions(false);
  }
};
  const handleLogout = () => {
  localStorage.removeItem("adminLoggedIn");
  navigate("/admin-login");
};
const deleteContact = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this contact message?");

  if (!confirmDelete) return;

  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${id}`);
    setContacts((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
    console.log("Error deleting contact message:", error);
    alert("Failed to delete contact message");
  }
};
const deleteAdmission = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this admission form?");
  if (!confirmDelete) return;

  try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/admission/${id}`);
    console.log("Delete success:", res.data);

    setAdmissions((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
    console.log("FULL delete admission error:", error);
    console.log("Error response:", error.response);
    console.log("Error response data:", error.response?.data);
    console.log("Error status:", error.response?.status);

    alert(`Failed to delete admission form. Status: ${error.response?.status || "unknown"}`);
  }
};
    return (
  <div className="min-h-screen bg-gray-100 px-6 py-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Contact Messages</h2>

          <div className="grid gap-6 md:grid-cols-2">
           {loadingContacts ? (
  <p>Loading contact messages...</p>
) : contacts.length === 0 ? (
  <p>No contact messages found.</p>
) : (
 contacts.map((item) => (
  <div key={item._id} className="rounded-2xl bg-white p-6 shadow-md">

    <div className="mb-4 flex items-start justify-between">
      <h3 className="text-xl font-semibold text-blue-700">
        {item.name}
      </h3>

      <button
        onClick={() => deleteContact(item._id)}
        className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>

    <p className="mt-2 text-gray-600">
      <strong>Email:</strong> {item.email}
    </p>
    <p className="mt-2 text-sm text-gray-500">
  Submitted on: {new Date(item.createdAt).toLocaleString()}
</p>

    <p className="mt-2 text-gray-600">
      <strong>Message:</strong> {item.message}
    </p>

  </div>
))
)}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Admission Forms</h2>

          <div className="grid gap-6 md:grid-cols-2">
           {loadingAdmissions ? (
  <p>Loading admission forms...</p>
) : admissions.length === 0 ? (
  <p>No admission forms found.</p>
) : (
admissions.map((item) => (
  <div key={item._id} className="rounded-2xl bg-white p-6 shadow-md">
    <div className="mb-4 flex items-start justify-between">
      <h3 className="text-xl font-semibold text-blue-700">
        {item.studentName}
      </h3>

      <button
        onClick={() => deleteAdmission(item._id)}
        className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>

    <p className="mt-2 text-gray-600">
      <strong>Parent Name:</strong> {item.parentName}
    </p>
    <p className="mt-2 text-gray-600">
      <strong>Email:</strong> {item.email}
    </p>
    <p className="mt-2 text-gray-600">
      <strong>Phone:</strong> {item.phone}
    </p>
    <p className="mt-2 text-gray-600">
      <strong>Class:</strong> {item.className}
    </p>
    <p className="mt-2 text-sm text-gray-500">
  Submitted on: {new Date(item.createdAt).toLocaleString()}
</p>
  </div>
))
)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;