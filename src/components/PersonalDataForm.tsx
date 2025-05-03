import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalDataSchema, PersonalData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface PersonalDataFormProps {
  onSubmit: (data: PersonalData) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onSubmit }) => {
  const form = useForm<PersonalData>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      weight: undefined,
      height: undefined,
      age: undefined,
      gender: undefined,
    },
  });

  const handleFormSubmit = (data: PersonalData) => {
    console.log('Dati personali inviati:', data);
    onSubmit(data);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Inserisci i tuoi Dati</CardTitle>
        <CardDescription>Questi dati ci aiuteranno a personalizzare il piano.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Es. 70"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || undefined)} // Usa undefined per resettare
                      className="focus:ring-2 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Altezza (cm)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Es. 175"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)} // Usa undefined per resettare
                       className="focus:ring-2 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Età</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Es. 30"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)} // Usa undefined per resettare
                       className="focus:ring-2 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Genere</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2" // Aumentato spazio
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Maschio</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Femmina</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal">Altro</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Prosegui al Pianificatore
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PersonalDataForm;