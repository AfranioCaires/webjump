import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

function Error404() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-3">
      <h1 className="text-7xl font-bold opacity-20">404</h1>
      <p className="text-lg font-medium">
        Ops, esta página não pode ser encontrada!
      </p>
      <Link to="/">
        <Button>Voltar para a página inicial →</Button>
      </Link>
    </main>
  );
}

export default Error404;
