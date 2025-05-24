const API_BASE_URL = 'http://localhost:3001'; // Adjust this to match your backend URL

export const fetchPatientHistory = async (patientId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/patients/${patientId}/history`);
    if (!response.ok) {
      throw new Error('Failed to fetch patient history');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching patient history:', error);
    return [];
  }
};