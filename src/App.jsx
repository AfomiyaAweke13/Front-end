import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Dummy API function
const fetchPatientHistory = async (patientId) => {
  return [
    { date: '2024-01-10', diagnosis: 'Common Cold', treatment: 'Rest and fluids' },
    { date: '2024-03-05', diagnosis: 'High Blood Pressure', treatment: 'Medication' },
  ];
};

// Navbar
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-6">
    <Link to="/" className="hover:text-yellow-300">Home</Link>
    <Link to="/history" className="hover:text-yellow-300">View History</Link>
    <Link to="/signup" className="hover:text-yellow-300">Sign Up</Link>
  </nav>
);

// Home Page
const Home = () => (
  <div className="text-center mt-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to EMR Management System</h1>
    <p className="text-lg max-w-2xl mx-auto">
      This system allows patients and doctors to securely access and manage electronic medical records.
      Use the navigation above to view patient history or register as a new user.
    </p>
  </div>
);

// Patient History Display
const PatientHistory = ({ history }) => {
  if (!history.length) return <p className="mt-4 text-gray-500">No history available.</p>;
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Patient History:</h3>
      <ul className="list-disc list-inside">
        {history.map((record, idx) => (
          <li key={idx}>
            <strong>{record.date}</strong>: {record.diagnosis} – {record.treatment}
          </li>
        ))}
      </ul>
    </div>
  );
};

// History Page
const HistoryPage = () => {
  const [patientId, setPatientId] = useState('');
  const [history, setHistory] = useState([]);

  const handleFetch = async () => {
    if (patientId.trim()) {
      const data = await fetchPatientHistory(patientId);
      setHistory(data);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Search Patient History</h2>
      <input
        type="text"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleFetch}
        className="text-blue-600 underline hover:text-blue-800"
      >
        Get History
      </button>
      <PatientHistory history={history} />
    </div>
  );
};

// Sign Up Page
const SignUp = () => {
  const [role, setRole] = useState('patient');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Signing up as ${role}`, formData);
    // Replace with actual signup logic (API call)
    alert(`Signed up successfully as a ${role}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="patient"
            checked={role === 'patient'}
            onChange={() => setRole('patient')}
          /> Patient
        </label>
        <label>
          <input
            type="radio"
            value="doctor"
            checked={role === 'doctor'}
            onChange={() => setRole('doctor')}
          /> Doctor
        </label>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
