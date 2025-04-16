
import { Link } from "react-router-dom";

const AdicionarLivro = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <div className="logo">Biblioteca<span>Virtual</span></div>
          <nav className="navegacao">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/adicionar-livro" className="ativo">Adicionar Livro</Link></li>
              <li><Link to="/#">Categorias</Link></li>
              <li><Link to="/#">Sobre</Link></li>
              <li><Link to="/#">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container">
        <h1 className="titulo-secao">Adicionar Novo Livro</h1>
        
        <section className="secao-formulario">
          <div className="mensagem-sucesso">
            Livro adicionado com sucesso! (Esta é apenas uma mensagem de demonstração)
          </div>
          
          <form>
            <div className="grupo-formulario">
              <label htmlFor="titulo">Título do Livro</label>
              <input type="text" id="titulo" name="titulo" placeholder="Ex: Dom Casmurro" required />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="autor">Autor</label>
              <input type="text" id="autor" name="autor" placeholder="Ex: Machado de Assis" required />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="genero">Gênero</label>
              <select id="genero" name="genero" required>
                <option value="">Selecione um gênero</option>
                <option value="romance">Romance</option>
                <option value="conto">Conto</option>
                <option value="poesia">Poesia</option>
                <option value="biografia">Biografia</option>
                <option value="historia">História</option>
                <option value="ficcao">Ficção Científica</option>
                <option value="fantasia">Fantasia</option>
                <option value="autoajuda">Autoajuda</option>
                <option value="infantil">Infantil</option>
                <option value="didatico">Didático</option>
              </select>
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="ano">Ano de Publicação</label>
              <input type="number" id="ano" name="ano" placeholder="Ex: 1899" required />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="imagem">URL da Capa (opcional)</label>
              <input type="url" id="imagem" name="imagem" placeholder="https://exemplo.com/imagem.jpg" />
            </div>
            
            <div className="grupo-formulario">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" placeholder="Escreva uma breve sinopse ou descrição do livro..." required></textarea>
            </div>
            
            <div className="grupo-formulario">
              <label>
                <input type="checkbox" id="lido" name="lido" />
                Marcar como lido
              </label>
            </div>
            
            <div className="acoes-formulario">
              <button type="reset" className="botao botao-secundario">Limpar</button>
              <button type="submit" className="botao">Adicionar Livro</button>
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

export default AdicionarLivro;
