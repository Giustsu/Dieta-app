export interface FoodOption {
  id: string; // Identificatore univoco
  name: string;
  quantity: string; // Es. "150g", "1 tazza", "1 porzione"
}

export interface FoodData {
  breakfast: FoodOption[];
  snack: FoodOption[];
  lunch: FoodOption[];
  dinner: FoodOption[];
}

// Ampliamento delle opzioni alimentari per dieta ipouricemica
export const foodDatabase: FoodData = {
  breakfast: [
    { id: "b1", name: "Latte scremato con cereali integrali (senza zuccheri aggiunti)", quantity: "1 tazza (200ml) + 40g" },
    { id: "b2", name: "Yogurt greco magro con frutta fresca (fragole, mirtilli, ciliegie)", quantity: "1 vasetto (150g) + 100g frutta" },
    { id: "b3", name: "Pane integrale tostato con ricotta magra e un velo di marmellata senza zuccheri", quantity: "2 fette (60g) + 50g ricotta" },
    { id: "b4", name: "Frullato con latte scremato (o bevanda vegetale), spinaci, banana e semi di chia", quantity: "250ml + 30g + 1/2 banana + 1 cucchiaino" },
    { id: "b5", name: "Porridge d'avena cotto in acqua o latte scremato con frutta secca (noci, mandorle)", quantity: "40g avena + 15g frutta secca" },
    { id: "b6", name: "Uova strapazzate (max 2) con verdure (pomodorini, funghi)", quantity: "2 uova + verdure q.b." },
    { id: "b7", name: "Fette biscottate integrali con formaggio spalmabile light e pomodoro", quantity: "3 fette + 30g formaggio + 50g pomodoro" },
    { id: "b8", name: "Pancake integrali (senza zucchero) con sciroppo d'acero (poco) e frutta", quantity: "2 piccoli + 1 cucchiaino sciroppo + 50g frutta" },
  ],
  snack: [
    { id: "s1", name: "Frutta fresca di stagione (mela, pera, arancia, ciliegie, fragole)", quantity: "1 frutto medio / 150g" },
    { id: "s2", name: "Yogurt magro bianco naturale", quantity: "1 vasetto (125g)" },
    { id: "s3", name: "Verdure crude (carote, sedano, cetrioli, finocchi)", quantity: "1 porzione (circa 100g)" },
    { id: "s4", name: "Una manciata di mandorle o noci (non salate)", quantity: "max 15-20g" },
    { id: "s5", name: "Gallette di riso integrale con un velo di hummus", quantity: "2 gallette + 30g hummus" },
    { id: "s6", name: "Tisana non zuccherata o acqua aromatizzata", quantity: "1 tazza" },
    { id: "s7", name: "Macedonia di frutta fresca (senza zuccheri aggiunti)", quantity: "1 coppetta (150g)" },
    { id: "s8", name: "Popcorn fatti in casa (senza sale/burro)", quantity: "1 piccola ciotola (20g mais)" },
  ],
  lunch: [
    { id: "l1", name: "Insalata mista abbondante con petto di pollo alla griglia", quantity: "Verdure libere + 120g pollo" },
    { id: "l2", name: "Zuppa di verdure miste con legumi (ceci o lenticchie - 1-2 volte/sett)", quantity: "1 piatto + 50g legumi secchi" },
    { id: "l3", name: "Salmone al vapore o al forno con contorno di broccoli e quinoa", quantity: "120g salmone + 150g broccoli + 60g quinoa" },
    { id: "l4", name: "Riso integrale con verdure di stagione saltate (zucchine, peperoni, carote)", quantity: "70g riso + verdure abbondanti" },
    { id: "l5", name: "Pasta integrale al pomodoro fresco e basilico con parmigiano", quantity: "70g pasta + sugo q.b. + 1 cucchiaino parmigiano" },
    { id: "l6", name: "Frittata al forno con verdure (spinaci, zucchine) e pane integrale", quantity: "2 uova + verdure + 1 fetta pane (30g)" },
    { id: "l7", name: "Insalata di farro con pomodorini, cetrioli, mais e tonno al naturale (sgocciolato)", quantity: "70g farro + verdure + 50g tonno" },
    { id: "l8", name: "Polpette di lenticchie (con moderazione) al sugo con contorno di verdure", quantity: "3-4 polpette (100g) + verdure" },
    { id: "l9", name: "Couscous integrale con verdure miste e ceci (con moderazione)", quantity: "70g couscous + verdure + 40g ceci cotti" },
  ],
  dinner: [
    { id: "d1", name: "Petto di tacchino ai ferri con insalata mista", quantity: "130g tacchino + insalata libera" },
    { id: "d2", name: "Merluzzo al forno con patate (con moderazione) e asparagi", quantity: "150g merluzzo + 100g patate + 150g asparagi" },
    { id: "d3", name: "Minestrone di verdure senza legumi (o con pochi)", quantity: "1 piatto abbondante" },
    { id: "d4", name: "Formaggio fresco magro (ricotta, fiocchi di latte) con verdure grigliate", quantity: "100g formaggio + verdure libere" },
    { id: "d5", name: "Pollo al curry (leggero) con riso basmati e verdure al vapore", quantity: "120g pollo + 60g riso + verdure" },
    { id: "d6", name: "Vellutata di zucca e carote con crostini integrali", quantity: "1 piatto + 2-3 crostini (30g)" },
    { id: "d7", name: "Orata al cartoccio con pomodorini e olive", quantity: "1 orata media (150g) + contorno" },
    { id: "d8", name: "Burger vegetale (a base di verdure/legumi - con moderazione) con pane integrale e insalata", quantity: "1 burger (100g) + 1 panino (60g) + insalata" },
    { id: "d9", name: "Spezzatino di vitello magro con piselli (con moderazione) e purè di patate (poco)", quantity: "100g vitello + 50g piselli + 100g purè" },
  ],
};