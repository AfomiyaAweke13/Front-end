import React from 'react';

function PatientHistory({ history }) {
  if (!history || history.length === 0) {
    return <div className="mt-4 text-gray-500">No history found</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Patient History</h2>
      <div className="space-y-4">
        {history.map((record, index) => (
          <div key={index} className="border p-4 rounded">
            <p><span className="font-semibold">Diagnosis:</span> {record.diagnosis}</p>
            <p><span className="font-semibold">Date Diagnosed:</span> {record.date_diagnosed}</p>
            {record.date_recovered && (
              <p><span className="font-semibold">Date Recovered:</span> {record.date_recovered}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientHistory;