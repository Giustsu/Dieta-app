import React from 'react';
import { FoodOption } from '@/lib/foods';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Printer, Info, CalendarCheck2 } from 'lucide-react';

type MealPlan = Record<string, Record<string, FoodOption | null>>;

interface WeeklySummaryProps {
  plan: MealPlan;
}

const daysOfWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const mealTypes = ["Colazione", "Spuntino Mattina", "Pranzo", "Spuntino Pomeriggio", "Cena"];
const mealKeys = ["breakfast", "snack1", "lunch", "snack2", "dinner"];

const WeeklySummary: React.FC<WeeklySummaryProps> = ({ plan }) => {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Titolo visibile solo in stampa */}
      <div className="hidden print:block text-center mb-6">
        <h2 className="text-2xl font-bold">Piano Alimentare Settimanale</h2>
        <p className="text-sm text-gray-600">Dieta Ipouricemica</p>
      </div>

      <Card className="mt-8 print:shadow-none print:border-none print:mt-0">
        <CardHeader className="flex flex-row items-center justify-between print:hidden">
          <CardTitle className="text-2xl flex items-center">
             <CalendarCheck2 className="mr-2 h-6 w-6 text-green-600"/>
             Il Tuo Piano Alimentare
          </CardTitle>
          <Button onClick={handlePrint} variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Stampa / Salva PDF
          </Button>
        </CardHeader>
        <CardContent className="print:p-0">
          {/* Tabella Riepilogo */}
          <div className="overflow-x-auto">
            <Table className="min-w-full border print:border-collapse print:text-xs"> {/* Stili specifici per stampa */}
              <TableHeader className="bg-gray-100 print:bg-white">
                <TableRow>
                  <TableHead className="border p-2 font-semibold w-[90px] print:w-[80px]">Giorno</TableHead>
                  {mealTypes.map((mealType) => (
                    <TableHead key={mealType} className="border p-2 font-semibold print:p-1">{mealType}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {daysOfWeek.map((day) => (
                  <TableRow key={day} className="even:bg-gray-50 print:even:bg-white"> {/* Righe alternate */}
                    <TableCell className="border p-2 font-medium print:p-1">{day}</TableCell>
                    {mealKeys.map((mealKey) => {
                      const food = plan[day]?.[mealKey];
                      return (
                        <TableCell key={mealKey} className="border align-top p-2 print:p-1">
                          {food ? (
                            <div>
                              <p className="font-medium text-sm print:text-xs">{food.name}</p>
                              <p className="text-xs text-muted-foreground print:text-gray-600">({food.quantity})</p>
                            </div>
                          ) : (
                            <p className="text-xs text-muted-foreground italic print:text-gray-500">--</p> // Placeholder per stampa
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Sezione Commenti Finali */}
          <div className="mt-8 p-4 border rounded-md bg-blue-50/50 print:bg-transparent print:border-t print:mt-6 print:p-0 print:pt-4">
            <h3 className="flex items-center text-lg font-semibold mb-3 print:text-base">
              <Info className="mr-2 h-5 w-5 text-blue-600" />
              Considerazioni sul Piano e Prospettive
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground print:text-xs print:text-black">
              <p>
                Questo piano alimentare è progettato per aiutarti a gestire i livelli di acido urico seguendo una dieta ipouricemica bilanciata. La costanza è fondamentale: cerca di seguire il piano il più fedelmente possibile.
              </p>
              <p>
                <span className="font-semibold">Miglioramenti Settimanali:</span> Con l'aderenza alla dieta, potresti iniziare a notare miglioramenti nei sintomi (se presenti) e nei livelli di acido urico (verificabili con esami medici) nel corso delle prime settimane. I risultati individuali possono variare.
              </p>
              <p>
                <span className="font-semibold">Tempi Previsti:</span> Il raggiungimento di obiettivi specifici (come la normalizzazione dei livelli di acido urico) richiede tempo e dipende da fattori individuali (metabolismo, gravità della condizione, aderenza alla dieta, stile di vita). Generalmente, sono necessarie diverse settimane o mesi di dieta costante per osservare cambiamenti significativi e stabili.
              </p>
              <p>
                <span className="font-semibold">Importante:</span> Questo piano è un esempio e non sostituisce il parere medico. Consulta sempre il tuo medico o un dietologo/nutrizionista per un piano personalizzato e per monitorare i tuoi progressi, soprattutto se hai condizioni mediche preesistenti o stai assumendo farmaci. Ricorda l'importanza di bere molta acqua durante la giornata.
              </p>
            </div>
          </div>

           {/* Pulsante Stampa visibile anche in fondo per comodità (nascosto in stampa) */}
           <div className="mt-6 text-center print:hidden">
              <Button onClick={handlePrint}>
               <Printer className="mr-2 h-4 w-4" />
                Stampa / Salva PDF
              </Button>
           </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WeeklySummary;