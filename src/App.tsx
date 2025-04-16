
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdicionarLivro from "./pages/AdicionarLivro";
import DetalhesLivro from "./pages/DetalhesLivro";
import EditarLivro from "./pages/EditarLivro";
import NotFound from "./pages/NotFound";
import "./estilo.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/adicionar-livro" element={<AdicionarLivro />} />
          <Route path="/detalhes-livro" element={<DetalhesLivro />} />
          <Route path="/editar-livro" element={<EditarLivro />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
