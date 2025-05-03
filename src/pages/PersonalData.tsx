import React from 'react';
import PersonalDataForm from '@/components/PersonalDataForm';
import { PersonalData } from '@/lib/types';
import { useNavigate } from 'react-router-dom';

const PersonalDataPage = () => {
  const navigate = useNavigate();

  const handleDataSubmit = (data: PersonalData) => {
    console.log('Dati personali ricevuti:', data);
    navigate('/meal-planner', { state: { personalData: data } });
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center min-h-screen pt-10 bg-gray-50">
       <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">I Tuoi Dati</h1>
       <PersonalDataForm onSubmit={handleDataSubmit} />
    </div>
  );
};

export default PersonalDataPage;