import React from 'react';

const PatientHistory = ({ history }) => (
  <div className="mt-4">
    {history.map((record, index) => (
      <div key={index} className="p-2 border rounded mb-2">
        <p>Diagnosis: {record.diagnosis}</p>
        <p>Date Diagnosed: {record.date_diagnosed}</p>
        <p>Date Recovered: {record.date_recovered}</p>
      </div>
    ))}
  </div>
);

export default PatientHistory;