import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Importa Card
import { UtensilsCrossed } from "lucide-react"; // Importa un'icona

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <Card className="w-full max-w-xl shadow-lg text-center">
        <CardHeader>
           <div className="flex justify-center mb-4">
             <UtensilsCrossed className="h-12 w-12 text-green-600" />
           </div>
          <CardTitle className="text-3xl font-bold text-gray-800">Pianificatore Dieta Ipouricemica</CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Crea e gestisci il tuo menù settimanale personalizzato per tenere sotto controllo l'acido urico.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-8 text-gray-600">
            Inizia inserendo alcuni dati di base per permetterci di adattare meglio i suggerimenti.
          </p>
          <Button size="lg" onClick={() => navigate('/personal-data')} className="bg-green-600 hover:bg-green-700">
            Inizia Ora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;