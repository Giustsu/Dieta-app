import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { foodDatabase, FoodOption } from '@/lib/foods';
import { CalendarDays, Utensils } from 'lucide-react'; // Icone

interface MealPlannerFormProps {
  onSubmit: (plan: Record<string, Record<string, FoodOption | null>>) => void;
}

const daysOfWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const mealTypes = ["Colazione", "Spuntino Mattina", "Pranzo", "Spuntino Pomeriggio", "Cena"];
const mealKeys = ["breakfast", "snack1", "lunch", "snack2", "dinner"];

const getOptionsForMeal = (mealKey: string): FoodOption[] => {
  const key = mealKey.includes('snack') ? 'snack' : mealKey;
  return foodDatabase[key as keyof typeof foodDatabase] || [];
}

const getRandomFoodOption = (arr: FoodOption[]): FoodOption | null => {
  if (!arr || arr.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generateInitialPlan = (): Record<string, Record<string, FoodOption | null>> => {
  return daysOfWeek.reduce((acc, day) => {
    acc[day] = mealKeys.reduce((mealAcc, mealKey) => {
      const options = getOptionsForMeal(mealKey);
      mealAcc[mealKey] = getRandomFoodOption(options);
      return mealAcc;
    }, {} as Record<string, FoodOption | null>);
    return acc;
  }, {} as Record<string, Record<string, FoodOption | null>>);
};


const MealPlannerForm: React.FC<MealPlannerFormProps> = ({ onSubmit }) => {
  const [plan, setPlan] = useState<Record<string, Record<string, FoodOption | null>>>(generateInitialPlan());

  const handleSelectChange = (day: string, mealKey: string, selectedFoodId: string) => {
    const options = getOptionsForMeal(mealKey);
    const selectedFood = options.find(option => option.id === selectedFoodId) || null;

    setPlan(prevPlan => ({
      ...prevPlan,
      [day]: {
        ...prevPlan[day],
        [mealKey]: selectedFood,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(plan);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {daysOfWeek.map((day) => (
        <Card key={day} className="shadow-md hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
            <CardTitle className="text-xl flex items-center">
              <CalendarDays className="mr-2 h-5 w-5 text-blue-600" />
              {day}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {mealTypes.map((mealType, index) => {
              const mealKey = mealKeys[index];
              const options = getOptionsForMeal(mealKey);
              const selectedValue = plan[day]?.[mealKey]?.id || "";

              return (
                <div key={mealKey} className="space-y-2 flex flex-col">
                  <Label htmlFor={`${day}-${mealKey}`} className="font-semibold text-sm mb-1">{mealType}</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange(day, mealKey, value)}
                    value={selectedValue}
                  >
                    <SelectTrigger id={`${day}-${mealKey}`} className="flex-grow">
                      <SelectValue placeholder={`Seleziona ${mealType}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.length > 0 ? options.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name} <span className="text-xs text-muted-foreground">({option.quantity})</span>
                        </SelectItem>
                      )) : (
                         <div className="p-2 text-sm text-muted-foreground italic">Nessuna opzione</div>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-center pt-4">
        <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
          <Utensils className="mr-2 h-5 w-5" />
          Genera Riepilogo Settimanale
        </Button>
      </div>
    </form>
  );
};

export default MealPlannerForm;