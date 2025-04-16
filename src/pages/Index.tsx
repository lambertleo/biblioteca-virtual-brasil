import { Link } from "react-router-dom";
const Index = () => {
  return <div>
      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <div className="logo">Biblioteca<span>Virtual</span></div>
          <nav className="navegacao">
            <ul>
              <li><Link to="/" className="ativo">Início</Link></li>
              <li><Link to="/adicionar-livro">Adicionar Livro</Link></li>
              <li><Link to="/#">Categorias</Link></li>
              <li><Link to="/#">Sobre</Link></li>
              <li><Link to="/#">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <h1>Biblioteca Virtual FAE</h1>
          <p>Explore nossa coleção de livros e descubra novos autores, gêneros e histórias fascinantes.</p>
        </div>
      </section>

      {/* Pesquisa */}
      <section className="container secao-pesquisa">
        <div className="campo-pesquisa">
          <input type="text" placeholder="Pesquisar por título, autor ou gênero..." />
          <button>Buscar</button>
        </div>
      </section>

      {/* Grade de Livros */}
      <section className="container">
        <h2 className="titulo-secao">Livros em Destaque</h2>
        <div className="grade-livros">
          {/* Card 1 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Dom Casmurro" />
            <div className="info-livro">
              <h3>Dom Casmurro</h3>
              <p>Machado de Assis</p>
              <span className="etiqueta-genero">Romance</span>
              <p>1899</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Grande Sertão: Veredas" />
            <div className="info-livro">
              <h3>Grande Sertão: Veredas</h3>
              <p>João Guimarães Rosa</p>
              <span className="etiqueta-genero">Regionalista</span>
              <p>1956</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Memórias Póstumas de Brás Cubas" />
            <div className="info-livro">
              <h3>Memórias Póstumas de Brás Cubas</h3>
              <p>Machado de Assis</p>
              <span className="etiqueta-genero">Romance</span>
              <p>1881</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro O Cortiço" />
            <div className="info-livro">
              <h3>O Cortiço</h3>
              <p>Aluísio Azevedo</p>
              <span className="etiqueta-genero">Naturalismo</span>
              <p>1890</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Capitães da Areia" />
            <div className="info-livro">
              <h3>Capitães da Areia</h3>
              <p>Jorge Amado</p>
              <span className="etiqueta-genero">Romance</span>
              <p>1937</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Iracema" />
            <div className="info-livro">
              <h3>Iracema</h3>
              <p>José de Alencar</p>
              <span className="etiqueta-genero">Romantismo</span>
              <p>1865</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 7 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Vidas Secas" />
            <div className="info-livro">
              <h3>Vidas Secas</h3>
              <p>Graciliano Ramos</p>
              <span className="etiqueta-genero">Romance</span>
              <p>1938</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>

          {/* Card 8 */}
          <div className="card-livro">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro O Alienista" />
            <div className="info-livro">
              <h3>O Alienista</h3>
              <p>Machado de Assis</p>
              <span className="etiqueta-genero">Conto</span>
              <p>1882</p>
              <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
            </div>
          </div>
        </div>
      </section>

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
    </div>;
};
export default Index;