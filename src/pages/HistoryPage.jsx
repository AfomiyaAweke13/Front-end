import React, { useState } from 'react';
import { fetchPatientHistory } from '../services/api';
import PatientHistory from '../components/PatientHistory';

function HistoryPage() {
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
      <h2 className="text-2xl font-semibold mb-4">Patient History Lookup</h2>
      <input
        type="text"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleFetch}
        className="text-blue-600 underline mb-4 hover:text-blue-800"
      >
        Get History
      </button>
      <PatientHistory history={history} />
    </div>
  );
}

export default HistoryPage;
