
import { Link } from "react-router-dom";

const DetalhesLivro = () => {
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
        <div className="voltar-navegacao">
          <Link to="/" className="botao botao-secundario">&larr; Voltar para a Galeria</Link>
        </div>
        
        <section className="detalhes-livro">
          <div className="capa-livro">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Dom Casmurro" />
          </div>
          
          <div className="info-detalhada">
            <h1>Dom Casmurro</h1>
            
            <div className="info-meta">
              <p><strong>Autor:</strong> Machado de Assis</p>
              <p><strong>Gênero:</strong> <span className="etiqueta-genero">Romance</span></p>
              <p><strong>Ano de Publicação:</strong> 1899</p>
              <p><strong>Status:</strong> Disponível</p>
            </div>
            
            <div className="descricao-livro">
              <h3>Sinopse</h3>
              <p>Dom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. É narrado em primeira pessoa por Bento Santiago, que, na velhice, decide escrever um livro para "atar as duas pontas da vida". No livro, Bentinho conta a história de seu amor por Capitu, desde a infância até a idade adulta, culminando em uma suspeita de traição que o acompanhará pelo resto da vida.</p>
              <p>A obra é considerada um dos maiores clássicos da literatura brasileira, explorando temas como ciúme, dúvida, memória e a confiabilidade do narrador. A personalidade complexa de Capitu e a ambiguidade sobre sua suposta traição fazem deste um dos mais intrigantes romances brasileiros.</p>
            </div>
            
            <div className="acoes-livro">
              <button className="botao botao-secundario">Marcar como Lido</button>
              <button className="botao">Editar Informações</button>
            </div>
          </div>
        </section>
        
        <section className="container">
          <h2 className="titulo-secao">Outros Livros do Mesmo Autor</h2>
          <div className="grade-livros">
            {/* Livro 1 */}
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
            
            {/* Livro 2 */}
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
            
            {/* Livro 3 */}
            <div className="card-livro">
              <img src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Capa do livro Quincas Borba" />
              <div className="info-livro">
                <h3>Quincas Borba</h3>
                <p>Machado de Assis</p>
                <span className="etiqueta-genero">Romance</span>
                <p>1891</p>
                <Link to="/detalhes-livro" className="botao">Ver Detalhes</Link>
              </div>
            </div>
          </div>
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

export default DetalhesLivro;
