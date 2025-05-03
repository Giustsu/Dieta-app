import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Pagina Non Trovata</h2>
      <p className="text-muted-foreground mb-8">
        Oops! La pagina che stai cercando non esiste.
      </p>
      <Button asChild>
        <Link to="/">Torna alla Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;