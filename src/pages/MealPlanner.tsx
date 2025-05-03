import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MealPlannerForm from '@/components/MealPlannerForm';
import WeeklySummary from '@/components/WeeklySummary';
import { PersonalData } from '@/lib/types';
import { FoodOption } from '@/lib/foods';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'; // Icona per tornare indietro

type MealPlan = Record<string, Record<string, FoodOption | null>>;

const MealPlannerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const personalData = location.state?.personalData as PersonalData | undefined;
  const [submittedPlan, setSubmittedPlan] = useState<MealPlan | null>(null);

  // Gestione migliorata se mancano i dati personali
  if (!personalData && !location.state?.personalData && !submittedPlan) {
     return (
        <div className="container mx-auto p-4 text-center min-h-screen flex flex-col justify-center items-center bg-red-50">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">Errore</h2>
            <p className="text-red-600 mb-6">Dati personali non trovati. È necessario compilare prima il modulo dei dati personali.</p>
            <Button onClick={() => navigate('/personal-data')} variant="destructive">
              <ArrowLeft className="mr-2 h-4 w-4" /> Torna ai Dati Personali
            </Button>
        </div>
     );
  }

  const currentPersonalData = personalData || location.state?.personalData; // Usa i dati passati se disponibili

  const handlePlanSubmit = (plan: MealPlan) => {
    console.log("Piano settimanale generato:", plan);
    setSubmittedPlan(plan);
    window.scrollTo(0, 0); // Scrolla in cima alla pagina per vedere il riepilogo
  };

  const handleEditPlan = () => {
    setSubmittedPlan(null);
    window.scrollTo(0, 0); // Scrolla in cima
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {!submittedPlan ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Crea il Tuo Piano Settimanale</h1>
          {currentPersonalData && (
            <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
              Piano per: Età {currentPersonalData.age}, Genere {currentPersonalData.gender}, Peso {currentPersonalData.weight}kg, Altezza {currentPersonalData.height}cm
            </p>
          )}
          <MealPlannerForm onSubmit={handlePlanSubmit} />
        </>
      ) : (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Riepilogo Settimanale</h1>
           <WeeklySummary plan={submittedPlan} />
           <div className="flex justify-center mt-8 space-x-4 print:hidden">
             <Button variant="outline" onClick={handleEditPlan}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Modifica Piano
             </Button>
             {/* Il pulsante Stampa è ora dentro WeeklySummary */}
           </div>
        </>
      )}
    </div>
  );
};

export default MealPlannerPage;