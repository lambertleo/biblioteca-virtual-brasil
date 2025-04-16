
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

type ValoresFormulario = {
  titulo: string;
  autor: string;
  genero: string;
  anoPublicacao: string;
  sinopse: string;
};

const EditarLivro = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  // Valores pré-preenchidos do livro que está sendo editado
  const defaultValues = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Romance",
    anoPublicacao: "1899",
    sinopse: "Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. É narrado em primeira pessoa por Bento Santiago, que, na velhice, decide escrever um livro para \"atar as duas pontas da vida\". No livro, Bentinho conta a história de seu amor por Capitu, desde a infância até a idade adulta, culminando em uma suspeita de traição que o acompanhará pelo resto da vida."
  };

  const form = useForm<ValoresFormulario>({
    defaultValues,
  });

  const onSubmit = (data: ValoresFormulario) => {
    setSubmitting(true);
    
    // Simulando uma chamada de API
    setTimeout(() => {
      toast.success("Livro atualizado com sucesso!");
      setSubmitting(false);
      navigate("/detalhes-livro");
    }, 1000);
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <div className="logo">Biblioteca<span>Virtual</span></div>
          <nav className="navegacao">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/adicionar-livro">Adicionar Livro</Link></li>
              <li><Link to="/#">Categorias</Link></li>
              <li><Link to="/#">Sobre</Link></li>
              <li><Link to="/#">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container">
        <div className="voltar-navegacao mb-4">
          <Link to="/detalhes-livro" className="botao botao-secundario">&larr; Voltar para Detalhes</Link>
        </div>
        
        <section className="secao-formulario">
          <h1 className="titulo-secao mb-6">Editar Livro</h1>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grupo-formulario">
              <label htmlFor="titulo">Título</label>
              <input 
                id="titulo"
                {...form.register("titulo")} 
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="autor">Autor</label>
              <input 
                id="autor"
                {...form.register("autor")} 
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="genero">Gênero</label>
              <select 
                id="genero"
                {...form.register("genero")} 
                className="w-full p-3 border border-gray-300 rounded"
              >
                <option value="Romance">Romance</option>
                <option value="Conto">Conto</option>
                <option value="Poesia">Poesia</option>
                <option value="Biografia">Biografia</option>
                <option value="História">História</option>
                <option value="Ficção Científica">Ficção Científica</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Autoajuda">Autoajuda</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="anoPublicacao">Ano de Publicação</label>
              <input 
                id="anoPublicacao"
                type="text"
                {...form.register("anoPublicacao")} 
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="sinopse">Sinopse</label>
              <textarea 
                id="sinopse"
                {...form.register("sinopse")} 
                rows={5}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            
            <div className="acoes-formulario">
              <Button
                type="button" 
                variant="outline"
                onClick={() => navigate("/detalhes-livro")}
              >
                Cancelar
              </Button>
              
              <Button 
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </div>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="rodape">
        <div className="container">
          <div className="conteudo-rodape">
            <div>
              <h3>Biblioteca Virtual Brasil</h3>
              <p>Um acervo digital para preservar e promover a literatura brasileira, facilitando o acesso à cultura e conhecimento.</p>
            </div>
            <div>
              <h3>Links Úteis</h3>
              <ul>
                <li><Link to="/#">Termos de Uso</Link></li>
                <li><Link to="/#">Política de Privacidade</Link></li>
                <li><Link to="/#">Perguntas Frequentes</Link></li>
                <li><Link to="/#">Suporte</Link></li>
              </ul>
            </div>
            <div>
              <h3>Contato</h3>
              <p>contato@bibliotecavirtual.com.br</p>
              <p>Tel: (11) 4002-8922</p>
              <p>Av. Paulista, 1500 - São Paulo</p>
            </div>
          </div>
          <div className="direitos">
            <p>&copy; 2025 Biblioteca Virtual Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EditarLivro;
