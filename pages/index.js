import HomeHead from '../components/head/Home.js'
import Script11 from '../components/scripts/home/Script11.js';
import Script12 from '../components/scripts/home/Script12.js';
import Script13 from '../components/scripts/home/Script13.js';
import Script14 from '../components/scripts/home/Script14.js';
import Script15 from '../components/scripts/home/Script15.js';

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getCoverItems } from '../services/coverItems.js';

const defaultSegments = [
  "editories/geral",
  "editories/entretenimento",
  "editories/economia",
  "editories/saude",
  "editories/trabalho",
  "editories/policia",
  "editories/politica",
  "editories/esportes",
  "editories/games"
]

export default function Home() {

  const [coverItems, setCoverItems] = useState([])

  useEffect(() => { test() }, [])

  const test = async () => {
    const response = await getCoverItems(defaultSegments)
    console.log(response.data.items)
    response.success && setCoverItems(response.data.items)
  }

  return (
    <div>
      <HomeHead />


      <div id="bg-top-overlay"></div>
      <div id="r7-header" className="barra-r7" data-ga-event-category="barra-r7">
        <div id="r7-header-main">
          <div id="r7-header">
            <div id="r7-main-navigation" className="r7-main-navigation">
              <ul className="menu-R7">
                <li>
                  <a className="r7-logo" href="http://r7.com/" title="Ir para o R7"></a>
                </li>
                <li className="mais mais-extra-small main-menu" onClick={() => window.toggleNavegMenu()}>
                  <a href="#" title="Veja mais">Navegar</a>
                </li>
                <div className="sub_menu_responsible_extra_small"></div>
                <li className="main-menu" id="item-0" style={{ "border-top-color": "#000" }}>
                  <a style={{ color: "#000" }} href="http://noticias.r7.com/" title="Ir para o NOTÍCIAS ">NOTÍCIAS</a>
                </li>
                <li className="main-menu" id="item-1" style={{ "border-top-color": "#0E8148" }}>
                  <a style={{ "color": "#0E8148" }} href="http://esportes.r7.com/" title="Ir para o ESPORTES ">ESPORTES</a>
                </li>
                <li className="main-menu" id="item-2" style={{ "border-top-color": "#F78714" }}>
                  <a style={{ "color": "#F78714" }} href="http://diversao.r7.com/" title="Ir para o DIVERSÃO ">DIVERSÃO</a>
                </li>
                <li className="mais mais-small main-menu" onClick={() => window.toggleNavegMenu()}>
                  <a href="#" title="Veja mais">mais</a>
                </li>
                <div className="sub_menu_responsible_small"></div>
                <li className="main-menu" id="item-3" style={{ "border-top-color": "#9C5BB9" }}>
                  <a style={{ color: "#9C5BB9" }} href="http://meuestilo.r7.com/" title="Ir para o MEU ESTILO ">MEU ESTILO</a>
                </li>
                <li className="mais mais-medium main-menu" onClick={() => window.toggleNavegMenu()}>
                  <a href="#" title="Veja mais">mais</a>
                </li>
                <div className="sub_menu_responsible_medium"></div>
                <li className="main-menu" id="item-4" style={{ "border-top-color": "#6B7982" }}>
                  <a style={{ color: "#6B7982" }} href="https://www.r7.com/tudo-do-r7/todos-os-blogs" title="Ir para o BLOGS ">BLOGS</a>
                </li>
                <li className="main-menu" id="item-5" style={{ "border-top-color": "#2e50cb" }}>
                  <a style={{ color: "#2e50cb" }} href="http://recordtv.r7.com/" title="Ir para o RECORD TV ">RECORD TV</a>
                </li>
                <li className="main-menu" id="item-6" style={{ "border-top-color": "#007cd7" }}>
                  <a style={{ color: "#007cd7" }} href="http://tv.r7.com/" title="Ir para o VÍDEOS ">VÍDEOS</a>
                </li>
                <li className="main-menu" id="item-7" style={{ "border-top-color": "#6b7982" }}>
                  <a style={{ color: "#6b7982" }} href="https://www.r7.com/servicos" title="Ir para o SERVIÇOS ">SERVIÇOS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script11 />

      <header className="topo">
        <div className="wrapper">
          <div className="fv-header-top" data-ga-event-category="fv-header-top">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="fv-header-top__wrapper">
                    <div className="content-left">
                      <button className="menu-button menu-button-top ga-event-track" data-ga-event-label="botao-menu"><span className="menu-button__text">MENU</span></button>
                    </div>
                    <h1><a href="index.html" className="logo-header ga-event-track" data-ga-event-label="logo"></a></h1>
                    <div className="content-right">
                      <div id="search-box" className="search">
                        <form action="#" className="form-search">
                          <a href="#" className="button-closed-itens search-button-close"></a> <a href="#" className="button-open-itens search-button-open"></a> <input type="text" className="input-search" placeholder="Busca" />
                        </form>
                      </div>
                      <div className="google-search-bundle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fv-header-nav" data-ga-event-category="fv-header-nav">
            <div className="line-menu">
              <ul className="line-menu__list">
                <li className="lb-geral">
                  <a className="ga-event-track" data-ga-event-label="geral" href="geral.html">Geral</a>
                </li>
                <li className="lb-entretenimento">
                  <a className="ga-event-track" data-ga-event-label="entretenimento" href="entretenimento.html">Entretenimento</a>
                </li>
                <li className="lb-economia">
                  <a className="ga-event-track" data-ga-event-label="economia" href="economia.html">Economia</a>
                </li>
                <li className="lb-saude">
                  <a className="ga-event-track" data-ga-event-label="saude" href="saude.html">Saúde</a>
                </li>
                <li className="lb-trabalho">
                  <a className="ga-event-track" data-ga-event-label="trabalho" href="trabalho.html">Trabalho</a>
                </li>
                <li className="lb-policia">
                  <a className="ga-event-track" data-ga-event-label="policia" href="policia.html">Polícia</a>
                </li>
                <li className="lb-politica">
                  <a className="ga-event-track" data-ga-event-label="politica" href="politica.html">Política</a>
                </li>
                <li className="lb-esportes">
                  <a className="ga-event-track" data-ga-event-label="esportes" href="esportes.html">Esportes</a>
                </li>
                <li className="lb-games">
                  <a className="ga-event-track" data-ga-event-label="games" href="games.html">Games</a>
                </li>
                <li className="lb-videos right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="videos-menu">Vídeos</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="videos &gt; folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-social right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="social-menu">Colunas</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="social &gt; helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="social &gt; andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a>
                    </li>
                    <li>
                      <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entretenimento &gt; pedro-permuy">Pedro Permuy</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; de-olho-no-poder">De Olho no Poder</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-cidades right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="cidades-menu">Cidades</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="cidades &gt; guarapari" href="/cidades/guarapari/">Guarapari</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-blogs right-item">
                  <a href="#" className="toggle-submenu-blogs" data-submenu-id="blogs-menu">Blogs</a>
                  <ul className="line-menu__submenu has-submenu">
                    <li className="col3 geral ativo">
                      <a href="#">Geral</a>
                      <ul className="submenu">
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; livrepensar">Livre Pensar</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empregoseconcursos">Empregos e Concursos</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; midiaemercado">Mídia & Mercado</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; petblog">Pet Blog</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; vem-ler-comigo">Vem Ler Comigo</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; direito-ao-direito">Direito ao Direito</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; bem-pensado">Bem Pensado</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; educatech">Educatech</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; gente-e-gestao">Gente e Gestão</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; portugues-em-dia">Português em Dia</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; virginia-pelles">Sexo e Prazer</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; viva-mais">Viva Mais</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; priorize-voce">Priorize Você!</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; economia-circular">Economia Circular</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; radar">Folha Digital</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empreendedorismo-digital">Empreendedorismo Digital</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Entretenimento</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; na-balada">Na Balada</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; espacogourmet">Espaço Gourmet</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-kids">Folhinha Kids</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-macakids">Folhinha Macakids</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Economia</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; gestao-e-resultados">Gestão e Resultados</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Saúde</a>
                      <ul>
                        <li>
                          <a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude &gt; blogs &gt; em-forma">Em Forma!</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Política</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; esplanada">Esplanada</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Esportes</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; corridaderua">Corrida de Rua</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; loucaporesportes">Louca por Esportes</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; no-pique">No Pique</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="submenu-nav submenu-nav--videos" id="videos-menu">
              <ul>
                <li>
                  <a className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a>
                </li>
                <li>
                  <a className="ga-event-track" data-ga-event-label="videos &gt; folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a>
                </li>
              </ul>
            </div>
            <div className="submenu-nav submenu-nav--social" id="social-menu">
              <ul>
                <li>
                  <a className="ga-event-track" data-ga-event-label="social &gt; helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a>
                </li>
                <li>
                  <a className="ga-event-track" data-ga-event-label="social &gt; andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a>
                </li>
                <li>
                  <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entretenimento &gt; pedro-permuy">Pedro Permuy</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">De Olho no Poder</a>
                </li>
              </ul>
            </div>
            <div className="submenu-nav submenu-nav--cidades" id="cidades-menu">
              <ul>
                <li>
                  <a className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a>
                </li>
                <li>
                  <a className="ga-event-track" data-ga-event-label="cidades &gt; guarapari" href="/cidades/guarapari/">Guarapari</a>
                </li>
              </ul>
            </div>
            <div className="submenu-nav--blogs" id="blogs-menu-box">
              <div className="wrap">
                <h2>Geral</h2>
                <ul>
                  <li>
                    <a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; livrepensar">Livre Pensar</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empregoseconcursos">Empregos e Concursos</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; midiaemercado">Mídia & Mercado</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; petblog">Pet Blog</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; vem-ler-comigo">Vem Ler Comigo</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; direito-ao-direito">Direito ao Direito</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; bem-pensado">Bem Pensado</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; educatech">Educatech</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; gente-e-gestao">Gente e Gestão</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; virginia-pelles">Sexo e Prazer</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; viva-mais">Viva Mais</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; portugues-em-dia">Português em Dia</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; priorize-voce">Priorize Você!</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; economia-circular">Economia Circular</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; radar">Folha Digital</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empreendedorismo-digital">Empreendedorismo Digital</a>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h2>Entretenimento</h2>
                <ul>
                  <li>
                    <a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; na-balada">Na Balada</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; espacogourmet">Espaço Gourmet</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-kids">Folhinha Kids</a>
                  </li>
                  <li>
                    <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-macakids">Folhinha Macakids</a>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h2>Economia</h2>
                <ul>
                  <li>
                    <a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; gestao-e-resultados">Gestão e Resultados</a>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h2>Saúde</h2>
                <ul>
                  <li>
                    <a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude &gt; blogs &gt; em-forma">Em Forma!</a>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h2>Política</h2>
                <ul>
                  <li>
                    <a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; esplanada">Esplanada</a>
                  </li>
                </ul>
              </div>
              <div className="wrap">
                <h2>Esportes</h2>
                <ul>
                  <li>
                    <a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; corridaderua">Corrida de Rua</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; loucaporesportes">Louca por Esportes</a>
                  </li>
                  <li>
                    <a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; no-pique">No Pique</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fv-header-nav sticky-menu" data-ga-event-category="sticky-menu">
            <div className="group-items">
              <a href="index.html" className="logo ga-event-track" data-ga-event-label="logo"></a>
              <div className="menu-button menu-button-sticky hidden-sm-down ga-event-track" data-ga-event-label="botao-menu">
                <span className="menu-button__text">MENU</span>
              </div>
            </div>
            <div className="line-menu">
              <ul className="line-menu__list">
                <li className="lb-geral">
                  <a className="ga-event-track" data-ga-event-label="geral" href="geral.html">Geral</a>
                </li>
                <li className="lb-entretenimento">
                  <a className="ga-event-track" data-ga-event-label="entretenimento" href="entretenimento.html">Entretenimento</a>
                </li>
                <li className="lb-economia">
                  <a className="ga-event-track" data-ga-event-label="economia" href="economia.html">Economia</a>
                </li>
                <li className="lb-saude">
                  <a className="ga-event-track" data-ga-event-label="saude" href="saude.html">Saúde</a>
                </li>
                <li className="lb-trabalho">
                  <a className="ga-event-track" data-ga-event-label="trabalho" href="trabalho.html">Trabalho</a>
                </li>
                <li className="lb-policia">
                  <a className="ga-event-track" data-ga-event-label="policia" href="policia.html">Polícia</a>
                </li>
                <li className="lb-politica">
                  <a className="ga-event-track" data-ga-event-label="politica" href="politica.html">Política</a>
                </li>
                <li className="lb-esportes">
                  <a className="ga-event-track" data-ga-event-label="esportes" href="esportes.html">Esportes</a>
                </li>
                <li className="lb-games">
                  <a className="ga-event-track" data-ga-event-label="games" href="games.html">Games</a>
                </li>
                <li className="lb-videos right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="videos-menu">Vídeos</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="videos &gt; folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-social right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="social-menu">Colunas</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="social &gt; helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="social &gt; andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a>
                    </li>
                    <li>
                      <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entretenimento &gt; pedro-permuy">Pedro Permuy</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                    </li>
                    <li>
                      <a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">De Olho no Poder</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-cidades right-item">
                  <a href="#" className="toggle-submenu" data-submenu-id="cidades-menu">Cidades</a>
                  <ul className="line-menu__submenu">
                    <li>
                      <a className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a>
                    </li>
                    <li>
                      <a className="ga-event-track" data-ga-event-label="cidades &gt; guarapari" href="/cidades/guarapari/">Guarapari</a>
                    </li>
                  </ul>
                </li>
                <li className="lb-blogs right-item">
                  <a href="#" className="toggle-submenu-blogs" data-submenu-id="blogs-menu">Blogs</a>
                  <ul className="line-menu__submenu has-submenu">
                    <li className="col3 geral ativo">
                      <a href="#">Geral</a>
                      <ul className="submenu">
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; livrepensar">Livre Pensar</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empregoseconcursos">Empregos e Concursos</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; midiaemercado">Mídia & Mercado</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; petblog">Pet Blog</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; vem-ler-comigo">Vem Ler Comigo</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; direito-ao-direito">Direito ao Direito</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; bem-pensado">Bem Pensado</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; educatech">Educatech</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; gente-e-gestao">Gente e Gestão</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; portugues-em-dia">Português em Dia</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; virginia-pelles">Sexo e Prazer</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; viva-mais">Viva Mais</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; priorize-voce">Priorize Você!</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; economia-circular">Economia Circular</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; radar">Folha Digital</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empreendedorismo-digital">Empreendedorismo Digital</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Entretenimento</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; na-balada">Na Balada</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; espacogourmet">Espaço Gourmet</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-kids">Folhinha Kids</a>
                        </li>
                        <li>
                          <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-macakids">Folhinha Macakids</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Economia</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; gestao-e-resultados">Gestão e Resultados</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Saúde</a>
                      <ul>
                        <li>
                          <a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude &gt; blogs &gt; em-forma">Em Forma!</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Política</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; esplanada">Esplanada</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col1">
                      <a href="#">Esportes</a>
                      <ul>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; corridaderua">Corrida de Rua</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; loucaporesportes">Louca por Esportes</a>
                        </li>
                        <li>
                          <a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; no-pique">No Pique</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="submenu-nav submenu-nav--social" id="social-menu">
              <ul>
                <li>
                  <a className="ga-event-track" data-ga-event-label="social &gt; helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a>
                </li>
                <li>
                  <a className="ga-event-track" data-ga-event-label="social &gt; andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a>
                </li>
                <li>
                  <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entretenimento &gt; pedro-permuy">Pedro Permuy</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                </li>
                <li>
                  <a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">De Olho no Poder</a>
                </li>
              </ul>
            </div>
            <div className="submenu-nav submenu-nav--cidades" id="cidades-menu">
              <ul>
                <li>
                  <a className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a>
                </li>
                <li>
                  <a className="ga-event-track" data-ga-event-label="cidades &gt; guarapari" href="/cidades/guarapari/">Guarapari</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="menu-hover" className="menu-hover" data-ga-event-category="menu-completo">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mobile-header">
                  <a href="index.html"><img src="assets/images/signature-icons/redacao-folhavitoria.png" alt="redacao-folhavitoria" /></a>
                </div>
                <div className="menu-hover-wrapper menu-hover-wrapperv1">
                  <nav className="menu-hover-nav">
                    <ul className="menu-hover-list">
                      <li className="menu-hover-item menu-hover-geral" data-background-color="bg-color-geral" data-menu-slug="geral"><span>Geral</span></li>
                      <li className="menu-hover-item menu-hover-entretenimento" data-background-color="bg-color-entretenimento" data-menu-slug="entretenimento"><span>Entretenimento</span></li>
                      <li className="menu-hover-item menu-hover-economia" data-background-color="bg-color-economia" data-menu-slug="economia"><span>Economia</span></li>
                      <li className="menu-hover-item menu-hover-saude" data-background-color="bg-color-saude" data-menu-slug="saude"><span>Saúde</span></li>
                      <li className="menu-hover-item menu-hover-trabalho" data-background-color="bg-color-trabalho" data-menu-slug="trabalho"><span>Trabalho</span></li>
                      <li className="menu-hover-item menu-hover-policia" data-background-color="bg-color-policia" data-menu-slug="policia"><span>Polícia</span></li>
                      <li className="menu-hover-item menu-hover-politica" data-background-color="bg-color-politica" data-menu-slug="politica"><span>Política</span></li>
                      <li className="menu-hover-item menu-hover-esportes" data-background-color="bg-color-esportes" data-menu-slug="esportes"><span>Esportes</span></li>
                      <li className="menu-hover-item menu-hover-video" data-background-color="bg-color-video" data-menu-slug="videos"><span>Vídeos</span></li>
                      <li className="menu-hover-item menu-hover-colunas" data-background-color="bg-color-colunas" data-menu-slug="colunas"><span>Colunas</span></li>
                      <li className="menu-hover-item menu-hover-blogs" data-background-color="bg-color-blogs" data-menu-slug="blogs"><span>Blogs</span></li>
                      <li className="menu-hover-item menu-hover-games" data-background-color="bg-color-games" data-menu-slug="games"><span>Games</span></li>
                      <li className="menu-hover-item menu-hover-cidades" data-background-color="bg-color-cidades" data-menu-slug="cidades"><span>Cidades</span></li>
                      <li className="menu-hover-item menu-hover-dino" data-background-color="bg-color-dino" data-menu-slug="dino"><span>Dino</span></li>
                    </ul>
                  </nav>
                  <div className="secondary-menu-list">
                    <div id="secondary-menu-economia" className="secondary-menu bg-color-economia">
                      <div className="fixed-header-secondary-menu">
                        <h2>ECONOMIA <a className="btn-more-news ga-event-track" data-ga-event-label="economia &gt; mais-noticias" href="/economia">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-economia" className="secondary-menu-wrapper economia-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="economia &gt; mais-noticias" href="/economia">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <h3>ESPECIAL</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/cadernos/oab-em-pauta" className="ga-event-track" data-ga-event-label="geral &gt; cadernos &gt; oab-em-pauta">OAB em Pauta</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/espirito-startups" className="ga-event-track" data-ga-event-label="geral &gt; cadernos &gt; espirito-startups">Espírito Startups</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/lider-empresarial" className="ga-event-track" data-ga-event-label="geral &gt; cadernos &gt; premio-lider-empresarial">Prêmio Líder Empresarial</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>COLUNAS</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/data-business" className="ga-event-track" data-ga-event-label="economia &gt; data-business">Data Business</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/agro-business" className="ga-event-track" data-ga-event-label="economia &gt; agro-business">Agro Business</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/mercado-diario" className="ga-event-track" data-ga-event-label="economia &gt; mercado-diario">Mercado Diário</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" className="ga-event-track" data-ga-event-label="economia &gt; financas-de-a-a-z">Finanças de A a Z</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" data-ga-event-label="geral &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-saude" className="secondary-menu bg-color-saude">
                      <div className="fixed-header-secondary-menu">
                        <h2>SAÚDE <a className="btn-more-news ga-event-track" data-ga-event-label="saude &gt; mais-noticias" href="/saude">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-saude" className="secondary-menu-wrapper saude-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="saude &gt; mais-noticias" href="/saude">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/saude/excelenciaemsaude/" className="ga-event-track" data-ga-event-label="saude &gt; cadernos &gt; excelencia-em-saude">Excelência em Saúde</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-politica" className="secondary-menu bg-color-politica">
                      <div className="fixed-header-secondary-menu">
                        <h2>POLÍTICA <a className="btn-more-news ga-event-track" data-ga-event-label="politica &gt; mais-noticias" href="/politica">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-politica" className="secondary-menu-wrapper politica-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="politica &gt; mais-noticias" href="/politica">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <ul>
                              <li>
                                <a target="_blank" href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" data-ga-event-label="politica &gt; de-olho-no-poder">De Olho no Poder</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-trabalho" className="secondary-menu bg-color-trabalho">
                      <div className="fixed-header-secondary-menu">
                        <h2>TRABALHO <a className="btn-more-news ga-event-track" data-ga-event-label="trabalho &gt; mais-noticias" href="/trabalho">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-trabalho" className="secondary-menu-wrapper trabalho-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="trabalho &gt; mais-noticias" href="/trabalho">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <ul>
                              <li>
                                <a target="_blank" href="https://curriculos.folhavitoria.com.br/" className="ga-event-track" data-ga-event-label="trabalho &gt; fv-curriculos">FV Currículos</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-geral" className="secondary-menu bg-color-geral">
                      <div className="fixed-header-secondary-menu">
                        <h2>GERAL <a className="btn-more-news ga-event-track" data-ga-event-label="geral &gt; mais-noticias" href="/geral">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-geral" className="secondary-menu-wrapper geral-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="geral &gt; mais-noticias" href="/geral">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <ul>
                              <li>
                                <a target="_blank" href="https://institutoamericobuaiz.com.br/" className="ga-event-track" data-ga-event-label="geral &gt; instituto-americo-buaiz">Instituto Américo Buaiz</a>
                              </li>
                              <li>
                                <a target="_blank" href="https://www.folhavitoria.com.br/publicidade-legal/" className="ga-event-track" data-ga-event-label="geral &gt; publicidade-legal">Publicidade Legal</a>
                              </li>
                              <li>
                                <a target="_blank" href="https://www.folhavitoria.com.br/geral/redeconstrubom/" className="ga-event-track" data-ga-event-label="geral &gt; redeconstrubom">Rede Construbom</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ESPECIAL</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/cadernos/especial-educacao---filmes-e-trilhas-sonoras-inesqueciveis" className="ga-event-track" data-ga-event-label="geral &gt; cadernos &gt; especial-educacao---filmes-e-trilhas-sonoras-inesqueciveis">Especial Educação 2022</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/premio-marcas-icones/" className="ga-event-track" data-ga-event-label="geral &gt; cadernos &gt; marcas-icones-2020">Marcas Ícones 2021</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>COLUNAS</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-entretenimento" className="secondary-menu bg-color-entretenimento">
                      <div className="fixed-header-secondary-menu">
                        <h2>ENTRETENIMENTO <a className="btn-more-news ga-event-track" data-ga-event-label="entretenimento &gt; mais-noticias" href="/entretenimento">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-entretenimento" className="secondary-menu-wrapper entretenimento-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="entretenimento &gt; mais-noticias" href="/entretenimento">MAIS NOTÍCIAS</a>
                          <div className="item-secondary-menu">
                            <h3>HOTSITES</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/chef-de-familia/" className="ga-event-track" data-ga-event-label="geral &gt; chef-de-familia">Chef de Família</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/especialwanessacamargo/" className="ga-event-track" data-ga-event-label="entretenimento &gt; especial-wanessa-camargo">Especial Wanessa Camargo</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>COLUNAS</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                              </li>
                              <li>
                                <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entreterimento &gt; pedro-permuy">Pedro Permuy</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-policia" className="secondary-menu bg-color-policia">
                      <div className="fixed-header-secondary-menu">
                        <h2>POLÍCIA <a className="btn-more-news ga-event-track" data-ga-event-label="policia &gt; mais-noticias" href="/policia">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-policia" className="secondary-menu-wrapper policia-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="policia &gt; mais-noticias" href="/policia">MAIS NOTÍCIAS</a>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-esportes" className="secondary-menu bg-color-esportes">
                      <div className="fixed-header-secondary-menu">
                        <h2>ESPORTES <a className="btn-more-news ga-event-track" data-ga-event-label="esportes &gt; mais-noticias" href="/esportes">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-esportes" className="secondary-menu-wrapper esportes-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="esportes &gt; mais-noticias" href="/esportes">MAIS NOTÍCIAS</a>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-games" className="secondary-menu bg-color-games">
                      <div className="fixed-header-secondary-menu">
                        <h2>GAMES<a className="btn-more-news ga-event-track" data-ga-event-label="games &gt; mais-noticias" href="/games">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-games" className="secondary-menu-wrapper games-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="games &gt; mais-noticias" href="/games">MAIS NOTÍCIAS</a>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-videos" className="secondary-menu bg-color-videos">
                      <div className="fixed-header-secondary-menu">
                        <h2>VÍDEOS <a className="btn-more-news ga-event-track" data-ga-event-label="videos &gt; mais-videos" href="/videos/tv-vitoria">MAIS VÍDEOS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-videos" className="secondary-menu-wrapper videos-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="videos &gt; mais-videos" href="/videos/tv-vitoria">MAIS VÍDEOS</a>
                          <div className="item-secondary-menu">
                            <h3>FOLHA VITÓRIA</h3>
                            <ul>
                              <li>
                                <a href="http://folhavitoria.com.br:8080/videos/folha-vitoria/" className="ga-event-track" data-ga-event-label="videos &gt; folha-vitoria &gt; de-olho-no-poder">Canais de Vídeo</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>TV VITÓRIA</h3>
                            <ul>
                              <li>
                                <a href="videos/tv-vitoria/es-no-ar.html" className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria &gt; es-no-ar">ES no Ar</a>
                              </li>
                              <li>
                                <a href="videos/tv-vitoria/balanco-geral-es.html" className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria &gt; balanco-geral-es">Balanço Geral</a>
                              </li>
                              <li>
                                <a href="videos/tv-vitoria/fala-es.html" className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria &gt;fala-es">Fala ES</a>
                              </li>
                              <li>
                                <a href="videos/tv-vitoria/cidade-alerta-es.html" className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria &gt; cidade-alerta-es">Cidade Alerta</a>
                              </li>
                              <li>
                                <a href="videos/tv-vitoria/jornal-da-tv-vitoria.html" className="ga-event-track" data-ga-event-label="videos &gt; tv-vitoria &gt; jornal-da-tv-vitoria">Jornal da TV Vitória</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-colunas" className="secondary-menu bg-color-colunas">
                      <div className="fixed-header-secondary-menu">
                        <h2>COLUNAS</h2>
                      </div>
                      <div id="secondary-menu-scroll-colunas" className="secondary-menu-wrapper colunas-menu">
                        <div className="secondary-menu-scroll">
                          <div className="item-secondary-menu">
                            <h3>GERAL</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>SOCIAIS</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/social/helio-dorea/" className="ga-event-track" data-ga-event-label="social &gt; helio-dorea">Helio Dórea</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/social/andreapena/" className="ga-event-track" data-ga-event-label="social &gt; andrea-pena">Andrea Pena</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ECONOMIA</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ENTRETENIMENTO</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento &gt; resenhando">Resenhando</a>
                              </li>
                              <li>
                                <a href="cadernos/pedro-permuy.html" className="ga-event-track" data-ga-event-label="entretenimento &gt; pedro-permuy">Pedro Permuy</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>POLÍTICA</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" data-ga-event-label="politica &gt; de-olho-no-poder">De Olho no Poder</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-blogs" className="secondary-menu bg-color-blogs">
                      <div className="fixed-header-secondary-menu">
                        <h2>BLOGS</h2>
                      </div>
                      <div id="secondary-menu-scroll-blogs" className="secondary-menu-wrapper blogs-menu">
                        <div className="secondary-menu-scroll">
                          <div className="item-secondary-menu">
                            <h3>GERAL</h3>
                            <ul>
                              <li>
                                <a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; livrepensar">Livre Pensar</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empregoseconcursos">Empregos e Concursos</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; midiaemercado">Mídia & Mercado</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; petblog">Pet Blog</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; vem-ler-comigo">Vem Ler Comigo</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; direito-ao-direito">Direito ao Direito</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; bem-pensado">Bem Pensado</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; viva-mais">Viva Mais</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; educatech">Educatech</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; gente-e-gestao">Gente e Gestão</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; virginia-pelles">Sexo e Prazer</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; portugues-em-dia">Português em Dia</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; priorize-voce">Priorize Você!</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; economia-circular">Economia Circular</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; radar">Folha Digital</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empreendedorismo-digital">Empreendedorismo Digital</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ENTRETENIMENTO</h3>
                            <ul>
                              <li>
                                <a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; na-balada">Na Balada</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; espacogourmet">Espaço Gourmet</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-kids">Folhinha Kids</a>
                              </li>
                              <li>
                                <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-macakids">Folhinha Macakids</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ECONOMIA</h3>
                            <ul>
                              <li>
                                <a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; gestao-e-resultados">Gestão e Resultados</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>SAÚDE</h3>
                            <ul>
                              <li>
                                <a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude &gt; blogs &gt; em-forma">Em Forma!</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>POLÍTICA</h3>
                            <ul>
                              <li>
                                <a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; esplanada">Esplanada</a>
                              </li>
                            </ul>
                          </div>
                          <div className="item-secondary-menu">
                            <h3>ESPORTES</h3>
                            <ul>
                              <li>
                                <a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; corridaderua">Corrida de Rua</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; loucaporesportes">Louca por Esportes</a>
                              </li>
                              <li>
                                <a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; blogs &gt; no-pique">No Pique</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-cidades" className="secondary-menu bg-color-cidades">
                      <div className="fixed-header-secondary-menu">
                        <h2>CIDADES</h2>
                      </div>
                      <div id="secondary-menu-scroll-cidades" className="secondary-menu-wrapper cidades-menu">
                        <div className="secondary-menu-scroll">
                          <div className="item-secondary-menu">
                            <ul>
                              <li>
                                <a href="cidades/domingos-martins/index.html" className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins">Domingos Martins</a>
                              </li>
                              <li>
                                <a href="cidades/guarapari/index.html" className="ga-event-track" data-ga-event-label="cidades &gt; guarapari">Guarapari</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="secondary-menu-dino" className="secondary-menu bg-color-dino">
                      <div className="fixed-header-secondary-menu">
                        <h2>DINO <a className="btn-more-news ga-event-track" data-ga-event-label="dino &gt; mais-noticias" href="/cadernos/dino">MAIS NOTÍCIAS</a></h2>
                      </div>
                      <div id="secondary-menu-scroll-dino" className="secondary-menu-wrapper dino-menu">
                        <div className="secondary-menu-scroll">
                          <a className="btn-more-news ga-event-track" data-ga-event-label="dino &gt; dino" href="/cadernos/dino">MAIS NOTÍCIAS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ display: "none", width: "auto", height: "auto", position: "fixed", bottom: 0, left: "50%", transform: "translate(-50%)", "z-index": "9999998", cursor: "pointer" }}>
        <button onClick={() => this.parentNode.style.display = 'none'} style={{ position: "absolute", top: "-24px", right: 0, height: "25px", width: "25px", cursor: "pointer", "z-index": "9999999999", background: "#fff", border: "1px solid #ccc", padding: "0 0 0 1px", color: "#666" }}>X</button>
        {/* DANDO ERRO E ESTOURANDO TELA BRANCA NO SITE */}
        {/* <div id="stickybottom-r7">
            <Script12 />
          </div> */}
      </div>
      <main>
        <section className="content-home" id="section-topo" data-ga-event-category="featured-cards">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-advertising home-posicao-1">
                  <div className="content-advertising">
                    <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_DESTAQUE_01" data-sizes-desktop="[[970,250],[970,90],[728,90]]" data-sizes-mobile="[[320,100]]"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 order-card-feature">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card-theme card-model-1 card-featured ga-event-track" data-ga-event-label="home/destaque/01">
                      <a href="geral/noticia/01/2022/sesa-quer-que-municipios-exijam-teste-negativo-de-covid-para-shows-e-eventos.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/43a18060-4313-11ec-adf0-715cc2e9c9c4--w635_h408_lx0_rx768_ty9_by503.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <span className="hat bg-color-geral">GERAL</span>
                        <h2><a href="geral/noticia/01/2022/sesa-quer-que-municipios-exijam-teste-negativo-de-covid-para-shows-e-eventos.html" target="_self">Sesa quer que municípios exijam teste negativo de covid para shows e eventos</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/02">
                      <a href="policia/noticia/01/2022/dono-de-lava-jato-e-assassinado-com-mais-de-30-tiros-em-vila-velha.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/b73d3790-72f1-11ec-a98e-e79bb3b56485--w116_h116_lx129_rx903_ty0_by774.jpeg" alt="" /></a>
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/dono-de-lava-jato-e-assassinado-com-mais-de-30-tiros-em-vila-velha.html" target="_self">Dono de lava-jato é assassinado com mais de 30 tiros em Vila Velha</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="home/destaque/03">
                      <a href="geral/noticia/01/2022/cozinheira-saia-do-terminal-de-carapina-ao-ser-atropelada-por-onibus-do-transcol.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/1e34dec0-72f8-11ec-b1e9-2b3294357c01--w445_h262_lx29_rx1251_ty0_by720.jpeg" alt="" /></picture></a>
                      <div className="card-title title2">
                        <span className="hat bg-color-geral">GERAL</span>
                        <h2><a href="geral/noticia/01/2022/cozinheira-saia-do-terminal-de-carapina-ao-ser-atropelada-por-onibus-do-transcol.html" target="_self">Cozinheira saía do Terminal de Carapina ao ser atropelada por ônibus do Transcol</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                    <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="home/destaque/04">
                      <a href="economia/noticia/01/2022/petrobras-anuncia-aumentos-de-4-8-para-gasolina-e-de-8-para-o-diesel.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/e7092e80-187d-11ec-b71d-d1ad25fff220--w445_h262_lx0_rx1024_ty83_by685.jpg" alt="" /></picture></a>
                      <div className="card-title title2">
                        <span className="hat bg-color-economia">ECONOMIA</span>
                        <h2><a href="economia/noticia/01/2022/petrobras-anuncia-aumentos-de-4-8-para-gasolina-e-de-8-para-o-diesel.html" target="_self">Petrobras anuncia aumento de 4,8% para gasolina a partir desta quarta</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card-advertising home-posicao-2">
                  <div className="content-advertising">
                    <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_DESTAQUE_02" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-8 col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/05">
                          <a href="entretenimento/noticia/01/2022/conheca-as-melhores-praias-do-es-para-levar-as-criancas-durante-as-ferias-e-o-verao.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/36d657b0-6f01-11ec-b407-01dd0209baf7--w116_h116_lx576_rx2800_ty0_by2224.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                            </div>
                            <h2><a href="entretenimento/noticia/01/2022/conheca-as-melhores-praias-do-es-para-levar-as-criancas-durante-as-ferias-e-o-verao.html" target="_self">Conheça as melhores praias no ES para levar as crianças no verão</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/06">
                          <a href="geral/noticia/01/2022/rodovia-em-alegre-e-interditada-devido-a-erosao-causada-por-chuvas.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/b4980db0-6b4c-0137-b0b0-6231c35b6685--w116_h116_lx280_rx1000_ty0_by720.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-geral">GERAL</span>
                            </div>
                            <h2><a href="geral/noticia/01/2022/rodovia-em-alegre-e-interditada-devido-a-erosao-causada-por-chuvas.html" target="_self">Rodovia em Alegre é interditada devido à erosão causada por chuvas</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="home/destaque/07">
                      <a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/89fb34c0-72ed-11ec-8ddf-2b9307d5380e--w350_h262_lx77_rx1523_ty0_by1083.jpeg" alt="" /></picture></a>
                      <div className="card-title">
                        <span className="hat bg-color-geral">GERAL</span>
                        <h2><a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" target="_self">Inscrição para 1,3 mil vagas do Nossa Bolsa terminam nesta quarta</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/08">
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-geral">GERAL</span>
                            </div>
                            <h2><a href="geral/noticia/01/2022/alerta-de-chuvas-intensas-para-11-cidades-do-es-veja-quais-sao.html" target="_self">Alerta de chuvas intensas para 11 cidades do ES. Veja quais são!</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/09">
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-games">GAMES</span>
                            </div>
                            <h2><a href="games/noticia/01/2022/horizon-forbidden-west-tem-imagens-vazadas-da-versao-ps4.html" target="_self">Vazaram imagens da versão de Horizon Forbidden West</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-advertising home-posicao-3">
                      <div className="content-advertising">
                        <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_DESTAQUE_03" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 order-sm--1">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="home/destaque/10">
                      <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/2022/01/11/a-cara-do-verao-confira-os-hits-nacionais-e-internacionais-que-estao-bombando-no-verao-capixaba/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/d9174800-72ed-11ec-8ae8-cddc9483fac8--w255_h140_lx0_rx605_ty87_by420.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/2022/01/11/a-cara-do-verao-confira-os-hits-nacionais-e-internacionais-que-estao-bombando-no-verao-capixaba/" target="_blank">Só sucesso! Veja os hits que estão bombando no verão</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="home/destaque/11">
                      <a href="trabalho/noticia/01/2022/sines-do-es-abrem-mais-de-1-5-mil-vagas-de-empregos-nesta-semana.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/53427000-7217-11ec-8603-7933b7a48779--w255_h140_lx0_rx1280_ty75_by778.jpeg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="trabalho/noticia/01/2022/sines-do-es-abrem-mais-de-1-5-mil-vagas-de-empregos-nesta-semana.html" target="_self">ES tem mais de 1,5 mil vagas de empregos nesta semana. Veja!</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="home/destaque/12">
                      <a href="esportes/noticia/01/2022/ex-jogador-da-selecao-da-turquia-morre-em-acidente-de-carro-aos-27-anos.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/15199fb0-72e9-11ec-9bc0-7fe5aa9133cb--w255_h140_lx0_rx639_ty5_by355.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/ex-jogador-da-selecao-da-turquia-morre-em-acidente-de-carro-aos-27-anos.html" target="_self">Ex-jogador da seleção da Turquia morre em acidente de carro</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="home/destaque/13">
                      <a href="saude/noticia/01/2022/exagerou-no-sol-veja-como-cuidar-da-pele-e-evitar-problemas.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/80f12c60-72e1-11ec-837a-196b9e82c443--w255_h140_lx0_rx800_ty80_by520.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-saude">SAúDE</span>
                        </div>
                        <h2><a href="saude/noticia/01/2022/exagerou-no-sol-veja-como-cuidar-da-pele-e-evitar-problemas.html" target="_self">Exagerou no sol? Veja como cuidar da pele e evitar problemas</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card-advertising home-posicao-4">
                  <div className="content-advertising">
                    <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_DESTAQUE_04" data-sizes-desktop="[[970,250],[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/14">
                      <a href="economia/noticia/01/2022/mais-dois-voos-sao-cancelados-no-aeroporto-de-vitoria-nesta-terca.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/881f8430-7dbe-0138-f55c-0a58a9feac2a--w116_h116_lx265_rx1016_ty0_by751.jpeg" alt="" /></a>
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/mais-dois-voos-sao-cancelados-no-aeroporto-de-vitoria-nesta-terca.html" target="_self">Mais dois voos são cancelados no Aeroporto de Vitória nesta terça</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="home/destaque/15">
                      <a href="trabalho/noticia/01/2022/procurando-estagio-mais-de-400-vagas-abertas-para-niveis-medio-tecnico-e-superior-no-es.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/ba29ea80-72e1-11ec-837a-196b9e82c443--w116_h116_lx213_rx1067_ty0_by854.jpeg" alt="" /></a>
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="trabalho/noticia/01/2022/procurando-estagio-mais-de-400-vagas-abertas-para-niveis-medio-tecnico-e-superior-no-es.html" target="_self">Procurando estágio? Veja mais de 470 vagas abertas no ES</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="home/destaque/16">
                  <a href="geral/noticia/01/2022/rio-doce-ultrapassa-nivel-de-inundacao-em-colatina-e-linhares.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/90348010-6fbb-11ec-a8eb-59811ae7e2a7--w350_h262_lx0_rx1600_ty2_by1199.jpeg" alt="" /></picture></a>
                  <div className="card-title">
                    <span className="hat bg-color-geral">GERAL</span>
                    <h2><a href="geral/noticia/01/2022/rio-doce-ultrapassa-nivel-de-inundacao-em-colatina-e-linhares.html" target="_self">Rio Doce ultrapassa nível de inundação em Colatina e Linhares</a></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card-theme card-model-social-column ga-event-track" data-ga-event-label="home/social/01">
                      <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/9f75a270-728b-11ec-a485-39c1b7caff6d--w223_h128_lx0_rx853_ty75_by564.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="social-profile">
                          <img src="assets/images/social-column/ricardo-frizera.png" alt="ricardo-frizera" className="avatar" /> <span>MUNDO BUSINESS</span>
                          <h3><a href="https://www.folhavitoria.com.br/economia/mundo-business/">Ricardo Frizera</a></h3>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/economia/mundo-business/" target="_blank">Usina fotovoltaica no ES pode abastecer mais de 2 mil residências</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-theme card-model-social-column ga-event-track" data-ga-event-label="home/social/02">
                      <a href="https://www.folhavitoria.com.br/social/helio-dorea/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/bf09e4c0-728b-11ec-a485-39c1b7caff6d--w223_h128_lx105_rx1560_ty221_by1056.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="social-profile">
                          <img src="assets/images/social-column/helio.png" alt="helio" className="avatar" /> <span>COLUNA SOCIAL</span>
                          <h3><a href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a></h3>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/social/helio-dorea/" target="_blank">Franco Bortoluzzi reúne amigos para almoço e degustação de vinhos</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-theme card-model-social-column ga-event-track" data-ga-event-label="home/social/03">
                      <a href="https://www.folhavitoria.com.br/social/andreapena/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/e6ea2d10-728b-11ec-a485-39c1b7caff6d--w223_h128_lx14_rx435_ty95_by336.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="social-profile">
                          <img src="assets/images/social-column/andrea.png" alt="andrea" className="avatar" /> <span>COLUNA SOCIAL</span>
                          <h3><a href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a></h3>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/social/andreapena/" target="_blank">Flavia Abaurre celebra 50 anos em condomínio construído pela família</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-geral" id="section-geral" data-ga-event-category="section-geral">
          <div className="topo-editorias topo-geral bg-color-geral">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Geral</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section grl-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_GERAL_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/geral/01">
                    <a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/89fb34c0-72ed-11ec-8ddf-2b9307d5380e--w445_h262_lx0_rx1600_ty70_by1013.jpeg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-geral">GERAL</span>
                      <h2><a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" target="_self">Inscrição para 1,3 mil vagas do Nossa Bolsa terminam nesta quarta</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/02">
                        <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/2022/01/11/empregadas-gestantes-devem-permanecer-em-regime-de-teletrabalho/" className="image-link" target="_blank"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/e1cb1640-e0ce-11eb-8cbf-6fecadd6c335--w116_h116_lx150_rx750_ty0_by600.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-geral">GERAL</span>
                          </div>
                          <h2><a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/2022/01/11/empregadas-gestantes-devem-permanecer-em-regime-de-teletrabalho/" target="_blank">Grávidas devem continuar em home office durante a pandemia. Veja seus direitos!</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/03">
                        <a href="geral/noticia/01/2022/saiba-quais-sao-as-marcas-de-cafe-irregulares-apreendidas-em-supermercados-da-grande-vitoria.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/20b754e0-723d-11ec-8407-571205f32322--w116_h116_lx200_rx1400_ty0_by1200.jpeg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-geral">GERAL</span>
                          </div>
                          <h2><a href="geral/noticia/01/2022/saiba-quais-sao-as-marcas-de-cafe-irregulares-apreendidas-em-supermercados-da-grande-vitoria.html" target="_self">Saiba quais são as marcas de café irregulares apreendidas na Grande Vitória</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia/2022/01/11/dica-do-dia-no-11-pele-vermelha-cara-palida/" target="_blank">Dicas de Português: 'cara-pálida' ou 'cara pálida'? Veja como usar!</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="geral/noticia/01/2022/rio-doce-ultrapassa-nivel-de-inundacao-em-colatina-e-linhares.html" target="_self">Rio Doce ultrapassa nível de inundação em Colatina e Linhares</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/geral/06">
                      <a href="geral/noticia/01/2022/rodovia-em-alegre-e-interditada-devido-a-erosao-causada-por-chuvas.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/b4980db0-6b4c-0137-b0b0-6231c35b6685--w240_h140_lx23_rx1257_ty0_by720.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="geral/noticia/01/2022/rodovia-em-alegre-e-interditada-devido-a-erosao-causada-por-chuvas.html" target="_self">Rodovia em Alegre é interditada devido à erosão</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/geral/07">
                      <a href="geral/noticia/01/2022/alerta-de-chuvas-intensas-para-11-cidades-do-es-veja-quais-sao.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/e3e8ce80-5861-11ec-9932-65553fe5efda--w240_h140_lx29_rx1571_ty0_by900.jpeg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="geral/noticia/01/2022/alerta-de-chuvas-intensas-para-11-cidades-do-es-veja-quais-sao.html" target="_self">Alerta de chuvas intensas para 11 cidades do ES</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/geral/08">
                      <a href="geral/noticia/01/2022/incendio-atinge-apartamento-no-bairro-ourimar-na-serra.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/c2788330-72ce-11ec-8813-15a9cbfb3840--w240_h140_lx0_rx553_ty13_by335.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="geral/noticia/01/2022/incendio-atinge-apartamento-no-bairro-ourimar-na-serra.html" target="_self">VÍDEO | Incêndio atinge apartamento no bairro Ourimar</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section grl-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_GERAL_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/09">
                          <a href="geral/noticia/01/2022/cozinheira-saia-do-terminal-de-carapina-ao-ser-atropelada-por-onibus-do-transcol.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/1e34dec0-72f8-11ec-b1e9-2b3294357c01--w116_h116_lx280_rx1000_ty0_by720.jpeg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-geral">GERAL</span>
                            </div>
                            <h2><a href="geral/noticia/01/2022/cozinheira-saia-do-terminal-de-carapina-ao-ser-atropelada-por-onibus-do-transcol.html" target="_self">Cozinheira saía do Terminal de Carapina ao ser atropelada por ônibus do Transcol</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/geral/10">
                          <a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/89fb34c0-72ed-11ec-8ddf-2b9307d5380e--w116_h116_lx259_rx1342_ty0_by1083.jpeg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-geral">GERAL</span>
                            </div>
                            <h2><a href="geral/noticia/01/2022/inscricoes-do-nossa-bolsa-2022-terminam-nesta-quarta-feira-veja-quem-pode-participar.html" target="_self">Inscrição para 1,3 mil vagas do Nossa Bolsa terminam nesta quarta</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/geral/11">
                      <a href="geral/noticia/01/2022/adolescente-faz-parto-sozinha-em-casa-diz-que-achou-o-bebe-mas-acaba-revelando-estupro.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/2de5bcb0-72c4-11ec-a268-0dfa19a2f877--w240_h140_lx14_rx786_ty0_by450.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-geral">GERAL</span>
                        </div>
                        <h2><a href="geral/noticia/01/2022/adolescente-faz-parto-sozinha-em-casa-diz-que-achou-o-bebe-mas-acaba-revelando-estupro.html" target="_self">Adolescente faz parto sozinha em casa e revela estupro</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-entretenimento" id="section-entretenimento" data-ga-event-category="section-entretenimento">
          <div className="topo-editorias topo-entretenimento bg-color-entretenimento">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Entretenimento</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section ent-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ENTRETENIMENTO_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/entretenimento/01">
                    <a href="entretenimento/noticia/01/2022/conheca-as-melhores-praias-do-es-para-levar-as-criancas-durante-as-ferias-e-o-verao.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/36d657b0-6f01-11ec-b407-01dd0209baf7--w445_h262_lx0_rx3376_ty118_by2106.jpg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-entretenimento">ENTRETENIMENTO</span>
                      <h2><a href="entretenimento/noticia/01/2022/conheca-as-melhores-praias-do-es-para-levar-as-criancas-durante-as-ferias-e-o-verao.html" target="_self">Conheça as melhores praias do ES para levar as crianças no verão</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/02">
                        <a href="entretenimento/noticia/01/2022/ana-maria-braga-aparece-com-peruca-ruiva-no-mais-voce-e-vira-meme-ao-ser-comparada-com-chucky-o-boneco-assassino.38" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/3e591a20-72fa-11ec-96ee-6f63bd3a0b1a--w116_h116_lx14_rx267_ty13_by266.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                          </div>
                          <h2><a href="entretenimento/noticia/01/2022/ana-maria-braga-aparece-com-peruca-ruiva-no-mais-voce-e-vira-meme-ao-ser-comparada-com-chucky-o-boneco-assassino.38" target="_self">Ana Maria Braga aparece com peruca e vira meme ao ser comparada com Chucky - O Boneco Assassino</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/03">
                        <a href="entretenimento/noticia/01/2022/com-fabrica-capixaba-roupa-feita-em-guarapari-e-vendida-para-todo-o-brasil.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/b044c900-7254-11ec-922a-9f129dc523b7--w116_h116_lx0_rx900_ty225_by1125.jpeg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                          </div>
                          <h2><a href="entretenimento/noticia/01/2022/com-fabrica-capixaba-roupa-feita-em-guarapari-e-vendida-para-todo-o-brasil.html" target="_self">Com fábrica capixaba, roupa feita em Guarapari é vendida para todo Brasil</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="entretenimento/noticia/01/2022/serie-documental-sobre-neymar-jr-ganha-trailer-da-netflix.html" target="_self">VÍDEO | Série documental sobre Neymar Jr. ganha trailer da Netflix</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/2022/01/11/a-cara-do-verao-confira-os-hits-nacionais-e-internacionais-que-estao-bombando-no-verao-capixaba/" target="_blank">Confira os hits que estão bombando no verão capixaba</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/entretenimento/06">
                      <a href="entretenimento/noticia/01/2022/justin-timberlake-vende-mansao-em-nova-york-por-164-milhoes-de-reais.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/9c1b6910-9a34-0135-84a8-6231c35b6685--w240_h140_lx25_rx735_ty0_by414.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="entretenimento/noticia/01/2022/justin-timberlake-vende-mansao-em-nova-york-por-164-milhoes-de-reais.html" target="_self">Justin Timberlake vende mansão em NY por R$ 164 milhões</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/entretenimento/07">
                      <a href="entretenimento/noticia/01/2022/festival-de-cerveja-artesanal-gastronomia-e-shows-com-entrada-gratuita-comeca-nesta-quinta-em-vila-velha.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/95df56e0-7243-11ec-8bf2-23599d66c73a--w240_h140_lx0_rx1880_ty79_by1175.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="entretenimento/noticia/01/2022/festival-de-cerveja-artesanal-gastronomia-e-shows-com-entrada-gratuita-comeca-nesta-quinta-em-vila-velha.html" target="_self">Festival de cerveja artesanal começa nesta quinta no ES</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/entretenimento/08">
                      <a href="https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/2022/01/shows-de-henrique-juliano-e-atitude-67-vao-agitar-guarapari-no-fim-de-semana/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/d9958780-7223-11ec-a7e7-2d6bca06de11--w240_h140_lx0_rx724_ty67_by489.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/2022/01/shows-de-henrique-juliano-e-atitude-67-vao-agitar-guarapari-no-fim-de-semana/" target="_blank">Shows de Henrique & Juliano e Atitude 67 vão agitar Guarapari</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section ent-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ENTRETENIMENTO_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/09">
                          <a href="entretenimento/noticia/01/2022/luciana-gimenez-se-irrita-com-comentario-sobre-a-sexualidade-do-filho-certa-obsessao-hein.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/8c1b5810-96c0-0138-35c4-0a58a9feac2a--w116_h116_lx0_rx522_ty14_by536.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                            </div>
                            <h2><a href="entretenimento/noticia/01/2022/luciana-gimenez-se-irrita-com-comentario-sobre-a-sexualidade-do-filho-certa-obsessao-hein.html" target="_self">Luciana Gimenez se irrita com comentário sobre a sexualidade do filho</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/entretenimento/10">
                          <a href="entretenimento/noticia/01/2022/ex-de-britney-spears-sai-da-prisao-e-causa-panico-ao-espionar-casa-da-mae-da-cantora.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/328bdb60-47b2-11ec-a51f-93ca180e2fd2--w116_h116_lx64_rx382_ty0_by318.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                            </div>
                            <h2><a href="entretenimento/noticia/01/2022/ex-de-britney-spears-sai-da-prisao-e-causa-panico-ao-espionar-casa-da-mae-da-cantora.html" target="_self">Ex de Britney Spears sai da prisão e causa pânico ao espionar casa da mãe</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/entretenimento/11">
                      <a href="entretenimento/noticia/01/2022/mojito-de-melancia-aprenda-receita-simples-e-refrescante.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/a89ac4a0-722e-11ec-959a-c7a1af305128--w240_h140_lx0_rx2000_ty79_by1246.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-entretenimento">ENTRETENIMENTO</span>
                        </div>
                        <h2><a href="entretenimento/noticia/01/2022/mojito-de-melancia-aprenda-receita-simples-e-refrescante.html" target="_self">Mojito de melancia: aprenda receita simples e refrescante</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-economia" id="section-economia" data-ga-event-category="section-economia">
          <div className="topo-editorias topo-economia bg-color-economia">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Economia</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section ecn-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ECONOMIA_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="scroll-wrapper">
                    <div className="scroll x2">
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/01">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="assets/images/social-column/data-business-profile.png" alt="data-business-profile" className="avatar" /> <span><a href="http://www.folhavitoria.com.br/economia/data-business/" target="_self">Luan Sperandio</a></span>
                            <h2><a href="http://www.folhavitoria.com.br/economia/data-business/" target="_self">As escolas deveriam reabrir apenas após a vacinação das crianças?</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/02">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="assets/images/social-column/agro-business-profile.png" alt="agro-business-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/agro-business" target="_self">Stefany Sampaio</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/agro-business" target="_self">Agro é responsável por 35,9% da movimentação econômica do cooperativismo capixaba</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/economia/01">
                    <a href="economia/noticia/01/2022/mais-dois-voos-sao-cancelados-no-aeroporto-de-vitoria-nesta-terca.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/881f8430-7dbe-0138-f55c-0a58a9feac2a--w445_h262_lx2_rx1278_ty0_by751.jpeg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-economia">ECONOMIA</span>
                      <h2><a href="economia/noticia/01/2022/mais-dois-voos-sao-cancelados-no-aeroporto-de-vitoria-nesta-terca.html" target="_self">Mais dois voos são cancelados no Aeroporto de Vitória nesta terça</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/02">
                        <a href="economia/noticia/01/2022/petrobras-anuncia-aumentos-de-4-8-para-gasolina-e-de-8-para-o-diesel.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/9bc616f0-7b51-11eb-95ed-45b38de91fb5--w116_h116_lx235_rx935_ty0_by700.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-economia">ECONOMIA</span>
                          </div>
                          <h2><a href="economia/noticia/01/2022/petrobras-anuncia-aumentos-de-4-8-para-gasolina-e-de-8-para-o-diesel.html" target="_self">Petrobras anuncia aumento de 4,8% para gasolina a partir desta quarta-feira</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/03">
                        <a href="economia/noticia/01/2022/es-deve-receber-r-24-4-milhoes-para-investimento-na-atencao-primaria-a-saude.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/89658bd0-3317-11eb-bd3c-778f5e5cef60--w116_h116_lx150_rx650_ty0_by500.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-economia">ECONOMIA</span>
                          </div>
                          <h2><a href="economia/noticia/01/2022/es-deve-receber-r-24-4-milhoes-para-investimento-na-atencao-primaria-a-saude.html" target="_self">ES deve receber R$ 24,4 milhões para investimento na atenção primária à Saúde</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="scroll-wrapper">
                    <div className="scroll x2">
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/05">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="assets/images/social-column/mercado-diario-profile.png" alt="mercado-diario-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/mercado-diario" target="_self">Vinicius Torres</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/mercado-diario" target="_self">Como as eleições vão influenciar a bolsa?</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/06">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="assets/images/social-column/financas-de-a-a-z-profile.png" alt="financas-de-a-a-z-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" target="_self">Ana Porto</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" target="_self">Comece bem 2022: faça sua reserva de emergência</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/anac-diz-que-monitora-cancelamento-de-voos-por-covid-19.html" target="_self">Anac diz que monitora cancelamento de voos por covid-19</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/teto-para-aposentadorias-e-pensoes-do-inss-sobe-para-r-7-087-em-2022.html" target="_self">Teto para aposentadorias e pensões do INSS sobe para R$ 7.087 em 2022</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/economia/06">
                      <a href="economia/noticia/01/2022/governo-quer-atrair-investidor-de-fora-para-leilao-da-br-262.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/9b222ef0-b94b-0138-991a-0a58a9feac2a--w240_h140_lx0_rx906_ty31_by560.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/governo-quer-atrair-investidor-de-fora-para-leilao-da-br-262.html" target="_self">Governo quer atrair investidor de fora para leilão da BR-262</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/economia/07">
                      <a href="economia/noticia/01/2022/pagamento-de-abono-salarial-sera-de-82-a-313-com-liberacao-de-r-21-8-bi.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/bfe8a360-a4c5-0137-40f1-6231c35b6685--w240_h140_lx0_rx1024_ty43_by640.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/pagamento-de-abono-salarial-sera-de-82-a-313-com-liberacao-de-r-21-8-bi.html" target="_self">PIS/Pasep: pagamento de abono salarial começa em fevereiro</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/economia/08">
                      <a href="economia/noticia/01/2022/mais-de-195-mil-empresarios-pedem-adesao-ao-simples-na-1-semana-de-prazo.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/617d22c0-2f1d-11eb-b9a7-751cb77b5a2f--w240_h140_lx0_rx800_ty17_by483.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/mais-de-195-mil-empresarios-pedem-adesao-ao-simples-na-1-semana-de-prazo.html" target="_self">Mais de 195 mil empresários pedem adesão ao Simples</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section ecn-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ECONOMIA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/09">
                          <a href="economia/noticia/01/2022/guedes-convoca-equipe-para-resolver-refis-e-orienta-bolsonaro-a-vetar-reajuste.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/d12d2c70-dab0-11eb-b6b8-3f2932a9fc9c--w116_h116_lx235_rx935_ty0_by700.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-economia">ECONOMIA</span>
                            </div>
                            <h2><a href="economia/noticia/01/2022/guedes-convoca-equipe-para-resolver-refis-e-orienta-bolsonaro-a-vetar-reajuste.html" target="_self">Guedes convoca equipe para resolver Refis e orienta Bolsonaro a vetar reajuste</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/economia/10">
                          <a href="economia/noticia/01/2022/bolsonaro-complemento-do-refis-a-pequenas-empresas-pode-vir-por-lei-complementar.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/04bd26a0-8b75-0135-fdef-6231c35b6685--w116_h116_lx375_rx1829_ty0_by1454.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-economia">ECONOMIA</span>
                            </div>
                            <h2><a href="economia/noticia/01/2022/bolsonaro-complemento-do-refis-a-pequenas-empresas-pode-vir-por-lei-complementar.html" target="_self">Bolsonaro: complemento do Refis a pequenas empresas pode vir por lei</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/economia/11">
                      <a href="economia/noticia/01/2022/preco-do-etanol-cai-em-18-estados-na-semana-diz-anp-media-nacional-recua-0-24.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/d31bef60-8d07-0135-b704-6231c35b6685--w240_h140_lx0_rx580_ty5_by343.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-economia">ECONOMIA</span>
                        </div>
                        <h2><a href="economia/noticia/01/2022/preco-do-etanol-cai-em-18-estados-na-semana-diz-anp-media-nacional-recua-0-24.html" target="_self">Preço do etanol cai em 18 Estados na semana, diz ANP</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-saude" id="section-saude" data-ga-event-category="section-saude">
          <div className="topo-editorias topo-saude bg-color-saude">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Saúde</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising sde-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_01" data-sizes-desktop="[[970,250],[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 order-1 order-lg-1">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/saude/01">
                    <a href="saude/noticia/01/2022/saude-reduz-periodo-de-quarentena-por-covid-para-no-minimo-sete-dias-em-todo-pais.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/d2530940-75e0-0138-711f-0a58a9feac2a--w540_h262_lx0_rx660_ty26_by346.jpg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-saude">SAúDE</span>
                      <h2><a href="saude/noticia/01/2022/saude-reduz-periodo-de-quarentena-por-covid-para-no-minimo-sete-dias-em-todo-pais.html" target="_self">Saúde reduz período de quarentena por covid para no mínimo sete dias em todo País</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-2 order-lg-2">
                  <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/saude/02">
                    <a href="saude/noticia/01/2022/1-3-milhao-de-pessoas-no-es-estao-sem-protecao-de-vacina-contra-covid.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/49b77960-face-11eb-9b25-23ee807ff34e--w255_h140_lx0_rx900_ty53_by547.jpg" alt="" /></picture></a>
                    <div className="card-title">
                      <a href="#" className="button-more-click"></a>
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/1-3-milhao-de-pessoas-no-es-estao-sem-protecao-de-vacina-contra-covid.html" target="_self">Covid: 1,3 milhão de pessoas no ES estão sem proteção da vacina</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-3 order-lg-3">
                  <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/saude/03">
                    <a href="saude/noticia/01/2022/exagerou-no-sol-veja-como-cuidar-da-pele-e-evitar-problemas.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/80f12c60-72e1-11ec-837a-196b9e82c443--w255_h140_lx0_rx800_ty80_by520.jpg" alt="" /></picture></a>
                    <div className="card-title">
                      <a href="#" className="button-more-click"></a>
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/exagerou-no-sol-veja-como-cuidar-da-pele-e-evitar-problemas.html" target="_self">Exagerou no sol? Veja como cuidar da pele e evitar problemas</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 order-4 order-lg-4">
                  <div className="card-advertising sde-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_02" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-5 order-lg-5">
                  <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/saude/04">
                    <a href="saude/noticia/01/2022/ao-vivo-secretario-de-saude-do-es-fala-sobre-covid-19.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/26e2ba50-5df0-11ec-af67-43cd2f668b7b--w255_h140_lx0_rx1170_ty29_by671.jpg" alt="" /></picture></a>
                    <div className="card-title">
                      <a href="#" className="button-more-click"></a>
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/ao-vivo-secretario-de-saude-do-es-fala-sobre-covid-19.html" target="_self">Presença da Ômicron no ES passa de 3% para 97%, diz secretário de Saúde</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-5 order-6 order-lg-6">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/05">
                    <a href="saude/noticia/01/2022/covid-e-influenza-saiba-onde-se-vacinar-na-grande-vitoria.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/ae05c660-7210-11ec-ad2c-113001cac01c--w116_h116_lx191_rx808_ty0_by617.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/covid-e-influenza-saiba-onde-se-vacinar-na-grande-vitoria.html" target="_self">Covid e gripe: veja onde se vacinar na Grande Vitória</a></h2>
                    </div>
                  </div>
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/06">
                    <a href="saude/noticia/01/2022/populacao-tera-atendimento-psiquiatrico-gratuito-no-sabado-15-em-vitoria.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/06ac95a0-721b-11ec-95d2-61c1ddd88005--w116_h116_lx58_rx1022_ty0_by964.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/populacao-tera-atendimento-psiquiatrico-gratuito-no-sabado-15-em-vitoria.html" target="_self">Atendimento psiquiátrico gratuito no sábado em Vitória</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-8 order-lg-7">
                  <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/saude/07">
                    <a href="saude/noticia/01/2022/covid-19-saiba-onde-estao-sendo-realizados-testes-na-grande-vitoria.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/43a18060-4313-11ec-adf0-715cc2e9c9c4--w255_h140_lx0_rx768_ty45_by467.jpg" alt="" /></picture></a>
                    <div className="card-title">
                      <a href="#" className="button-more-click"></a>
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/covid-19-saiba-onde-estao-sendo-realizados-testes-na-grande-vitoria.html" target="_self">Covid 19: saiba onde estão sendo realizados testes na Grande Vitória</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-5 order-9 order-lg-8">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/saude/08">
                    <a href="saude/noticia/01/2022/epidemia-de-gripe-causa-falta-de-remedios-nas-farmacias-da-grande-vitoria.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/011d07f0-6e33-11ec-b1af-6db6cc26d439--w445_h262_lx29_rx1251_ty0_by720.jpeg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-saude">SAúDE</span>
                      <h2><a href="saude/noticia/01/2022/epidemia-de-gripe-causa-falta-de-remedios-nas-farmacias-da-grande-vitoria.html" target="_self">Epidemia de gripe causa falta de remédios nas farmácias</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 order-7 order-lg-9">
                  <div className="card-advertising sde-posicao-3">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_03" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-10 order-lg-10">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/09">
                    <a href="saude/noticia/01/2022/covid-19-teste-sem-agendamento-no-aeroporto-de-vitoria-sera-apenas-para-quem-estiver-viajando.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/7dd6c4f0-2f48-11eb-b63c-8b8aec4fb157--w116_h116_lx164_rx820_ty0_by656.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/covid-19-teste-sem-agendamento-no-aeroporto-de-vitoria-sera-apenas-para-quem-estiver-viajando.html" target="_self">Aeroporto: Teste sem agendar apenas para quem estiver viajando</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-11 order-lg-11">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/10">
                    <a href="saude/noticia/01/2022/covid-19-vitoria-e-a-primeira-cidade-da-regiao-metropolitana-a-atingir-o-risco-muito-baixo.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/b77387b0-5c25-11ec-99d8-4973026f94dd--w116_h116_lx170_rx816_ty0_by646.jpeg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/covid-19-vitoria-e-a-primeira-cidade-da-regiao-metropolitana-a-atingir-o-risco-muito-baixo.html" target="_self">Vitória é a primeira cidade da Região Metropolitana a atingir o 'risco muito baixo'</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 order-12 order-lg-12">
                  <div className="card-advertising sde-posicao-4">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_04" data-sizes-desktop="[[970,250],[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-13 order-lg-13">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/11">
                    <a href="saude/noticia/01/2022/es-prepara-ampliacao-de-300-leitos-na-rede-hospitalar-por-aumento-de-casos-de-gripe-e-covid.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/49462540-8b15-11eb-9c77-5d8a0cebfa60--w116_h116_lx420_rx1500_ty0_by1080.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/es-prepara-ampliacao-de-300-leitos-na-rede-hospitalar-por-aumento-de-casos-de-gripe-e-covid.html" target="_self">ES prepara ampliação de leitos na rede hospitalar por aumento de gripe e covid</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-14 order-lg-14">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/12">
                    <a href="saude/noticia/01/2022/es-pode-ter-epidemia-de-dengue-no-verao-alerta-secretario-de-saude.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/c3d8bf70-d8f5-0137-ac27-0a58a9feac2a--w116_h116_lx86_rx634_ty0_by548.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/es-pode-ter-epidemia-de-dengue-no-verao-alerta-secretario-de-saude.html" target="_self">ES pode ter epidemia de dengue no verão, alerta secretário de saúde</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-16 order-lg-15">
                  <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/saude/13">
                    <a href="saude/noticia/01/2022/gripe-h3n2-pode-ser-mais-grave-em-criancas-de-0-a-2-anos.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/8f915c50-0d91-11ec-bf0e-b1ba25b1a012--w255_h140_lx13_rx627_ty0_by337.jpg" alt="" /></picture></a>
                    <div className="card-title">
                      <a href="#" className="button-more-click"></a>
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/gripe-h3n2-pode-ser-mais-grave-em-criancas-de-0-a-2-anos.html" target="_self">Gripe H3N2 pode ser mais grave em crianças de 0 a 2 anos</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-5 order-17 order-lg-16">
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/14">
                    <a href="saude/noticia/01/2022/vitoria-vai-ampliar-horario-e-equipes-em-seis-postos-para-atender-pacientes-com-gripe.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/9b8be520-6da9-11ec-911a-1fb0cab8e945--w116_h116_lx113_rx340_ty0_by227.jpg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/vitoria-vai-ampliar-horario-e-equipes-em-seis-postos-para-atender-pacientes-com-gripe.html" target="_self">Vitória vai ampliar horário e equipes em postos de saúde</a></h2>
                    </div>
                  </div>
                  <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/saude/15">
                    <a href="saude/noticia/01/2022/vacinacao-infantil-contra-a-covid-19-devera-obedecer-intervalo-de-8-semanas-entre-as-2-doses.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/95557bd0-6e71-11ec-9065-83c627f3d88b--w116_h116_lx170_rx574_ty0_by404.jpeg" alt="" /></a>
                    <div className="card-title">
                      <div className="card-info">
                        <span className="hat font-color-saude">SAúDE</span>
                      </div>
                      <h2><a href="saude/noticia/01/2022/vacinacao-infantil-contra-a-covid-19-devera-obedecer-intervalo-de-8-semanas-entre-as-2-doses.html" target="_self">Vacinação em crianças terá intervalo de 8 semanas entre as doses</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 order-15 order-lg-17">
                  <div className="card-advertising sde-posicao-5">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_05" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-trabalho" id="section-trabalho" data-ga-event-category="section-trabalho">
          <div className="topo-editorias topo-trabalho bg-color-trabalho">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Trabalho</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section trl-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_TRABALHO_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/trabalho/01">
                    <a href="trabalho/noticia/01/2022/procurando-estagio-mais-de-400-vagas-abertas-para-niveis-medio-tecnico-e-superior-no-es.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/ba29ea80-72e1-11ec-837a-196b9e82c443--w445_h262_lx0_rx1280_ty50_by804.jpeg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-trabalho">TRABALHO</span>
                      <h2><a href="trabalho/noticia/01/2022/procurando-estagio-mais-de-400-vagas-abertas-para-niveis-medio-tecnico-e-superior-no-es.html" target="_self">Procurando estágio? Mais de 470 vagas abertas para níveis médio, técnico e superior no ES</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/02">
                        <a href="trabalho/noticia/01/2022/petrobras-recebe-212-mil-inscricoes-para-757-vagas.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/a7a2d1d0-12d7-0138-9221-0a58a9feac2a--w116_h116_lx190_rx950_ty0_by760.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-trabalho">TRABALHO</span>
                          </div>
                          <h2><a href="trabalho/noticia/01/2022/petrobras-recebe-212-mil-inscricoes-para-757-vagas.html" target="_self">Concurso da Petrobras tem 212 mil inscrições para 757 vagas</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/03">
                        <a href="trabalho/noticia/01/2022/cidade-do-interior-do-es-tera-concurso-para-guarda-municipal-em-2022.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/30c0d950-6fc8-11ec-bf35-6fa0c83e5a5e--w116_h116_lx280_rx1000_ty0_by720.jpeg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-trabalho">TRABALHO</span>
                          </div>
                          <h2><a href="trabalho/noticia/01/2022/cidade-do-interior-do-es-tera-concurso-para-guarda-municipal-em-2022.html" target="_self">Cidade do interior do ES terá concurso para Guarda Municipal em 2022</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2022/01/03/grandes-empresas-oferecem-programas-de-capacitacao-para-negros/" target="_blank">Grandes empresas oferecem programas de capacitação</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="trabalho/noticia/01/2022/concursos-no-brasil-podem-ter-236-mil-vagas-parar-diferentes-niveis-e-regioes-diz-especialista.html" target="_self">Concursos: 236 mil vagas previstas no Brasil</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/trabalho/06">
                      <a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2022/01/06/coca-cola-abre-vagas-no-es-para-auxiliar-administrativo-pcd/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/f1b0a5a0-8797-0136-fbcc-6231c35b6685--w240_h140_lx27_rx593_ty0_by330.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2022/01/06/coca-cola-abre-vagas-no-es-para-auxiliar-administrativo-pcd/" target="_blank">Coca Cola abre vagas no ES para auxiliar administrativo</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/trabalho/07">
                      <a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2022/01/06/empresas-em-todo-o-pais-oferecem-mais-de-1000-vagas/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/647da330-7dda-11eb-8e93-f57a8989ae25--w240_h140_lx0_rx1195_ty0_by697.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2022/01/06/empresas-em-todo-o-pais-oferecem-mais-de-1000-vagas/" target="_blank">Empresas em todo o país oferecem mais de mil vagas. Confira!</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/trabalho/08">
                      <a href="trabalho/noticia/01/2022/ibge-prorroga-inscricoes-para-o-censo-2022-ate-21-de-janeiro-devido-a-baixa-procura.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/a66015a0-971e-11eb-8e6a-4ff65e2de2eb--w240_h140_lx0_rx540_ty43_by358.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="trabalho/noticia/01/2022/ibge-prorroga-inscricoes-para-o-censo-2022-ate-21-de-janeiro-devido-a-baixa-procura.html" target="_self">IBGE prorroga inscrições para o censo 2022 até 21 de janeiro</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section trl-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_TRABALHO_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/09">
                          <a href="trabalho/noticia/01/2022/vitoria-abre-processo-seletivo-para-contratacao-de-professores-com-salario-de-ate-r-3-6-mil.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/6585c300-6cdd-11ec-9fa1-81fb290e164f--w116_h116_lx133_rx667_ty0_by534.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-trabalho">TRABALHO</span>
                            </div>
                            <h2><a href="trabalho/noticia/01/2022/vitoria-abre-processo-seletivo-para-contratacao-de-professores-com-salario-de-ate-r-3-6-mil.html" target="_self">Vitória abre processo seletivo para contratação de professores</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/trabalho/10">
                          <a href="trabalho/noticia/01/2022/serra-abre-500-vagas-gratuitas-para-capacitar-meis.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/e7a611f0-d223-0137-a1c6-0a58a9feac2a--w116_h116_lx128_rx896_ty0_by768.jpeg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-trabalho">TRABALHO</span>
                            </div>
                            <h2><a href="trabalho/noticia/01/2022/serra-abre-500-vagas-gratuitas-para-capacitar-meis.html" target="_self">Serra abre 500 vagas gratuitas para capacitar microempreendedores</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/trabalho/11">
                      <a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2021/12/23/veja-dicas-para-montar-um-escritorio-dentro-de-casa/" className="image-link" target="_blank"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/8004b360-7960-0135-496a-6231c35b6685--w240_h140_lx0_rx400_ty33_by267.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-trabalho">TRABALHO</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/2021/12/23/veja-dicas-para-montar-um-escritorio-dentro-de-casa/" target="_blank">Veja dicas para montar um escritório dentro de casa</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-policia" id="section-policia" data-ga-event-category="section-policia">
          <div className="topo-editorias topo-policia bg-color-policia">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Polícia</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section plc-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLICIA_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/policia/01">
                    <a href="policia/noticia/01/2022/dono-de-lava-jato-e-assassinado-com-mais-de-30-tiros-em-vila-velha.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/b73d3790-72f1-11ec-a98e-e79bb3b56485--w445_h262_lx0_rx1032_ty83_by691.jpeg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-policia">POLíCIA</span>
                      <h2><a href="policia/noticia/01/2022/dono-de-lava-jato-e-assassinado-com-mais-de-30-tiros-em-vila-velha.html" target="_self">Dono de lava-jato é assassinado com mais de 30 tiros em Vila Velha</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/02">
                        <a href="policia/noticia/01/2022/tres-suspeitos-de-envolvimento-com-o-trafico-sao-presos-com-uma-pistola-turca-e-municao-de-fuzil.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/30c998c0-70c1-11ec-9b7a-49de1f04348e--w116_h116_lx160_rx1120_ty0_by960.jpeg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-policia">POLíCIA</span>
                          </div>
                          <h2><a href="policia/noticia/01/2022/tres-suspeitos-de-envolvimento-com-o-trafico-sao-presos-com-uma-pistola-turca-e-municao-de-fuzil.html" target="_self">Suspeitos de tráfico são presos com pistola turca e munição de fuzil</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/03">
                        <a href="policia/noticia/01/2022/adolescente-tenta-defender-a-mae-e-e-agredida-a-pauladas-pelo-pai.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/5811ae30-9a35-11eb-8e2b-e3420daf9210--w116_h116_lx325_rx876_ty0_by551.png" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-policia">POLíCIA</span>
                          </div>
                          <h2><a href="policia/noticia/01/2022/adolescente-tenta-defender-a-mae-e-e-agredida-a-pauladas-pelo-pai.html" target="_self">Adolescente tenta defender a mãe e é agredida a pauladas pelo pai em Cariacica</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/casal-e-morto-com-12-tiros-enquanto-dormia-em-vila-velha.html" target="_self">Casal é morto com 12 tiros enquanto dormia em Vila Velha</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/motorista-de-aplicativo-que-mudou-rota-para-estuprar-passageira-e-preso-em-linhares.html" target="_self">Motorista de app que mudou rota para estuprar passageira é preso</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/policia/06">
                      <a href="policia/noticia/01/2022/jovem-e-morto-a-tiros-e-amiga-dele-e-agredida-com-coronhadas-em-cariacica.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/01b84670-8ba8-0138-6fc3-0a58a9feac2a--w240_h140_lx0_rx1156_ty97_by771.jpeg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/jovem-e-morto-a-tiros-e-amiga-dele-e-agredida-com-coronhadas-em-cariacica.html" target="_self">Jovem é morto a tiros e amiga dele é agredida com coronhadas</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/policia/07">
                      <a href="policia/noticia/01/2022/homem-e-assassinado-e-tres-sao-baleados-em-bar-de-cariacica.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/fe61a8a0-cea9-11eb-84a1-5dcd1de92db1--w240_h140_lx32_rx754_ty0_by421.jpeg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/homem-e-assassinado-e-tres-sao-baleados-em-bar-de-cariacica.html" target="_self">Homem é assassinado e três são baleados em bar de Cariacica</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/policia/08">
                      <a href="policia/noticia/01/2022/video-homens-brigam-no-meio-da-rua-apos-ofensas-no-centro-de-vitoria.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/d1463000-70cc-11ec-b921-27016a2b52dc--w240_h140_lx102_rx653_ty0_by321.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/video-homens-brigam-no-meio-da-rua-apos-ofensas-no-centro-de-vitoria.html" target="_self">VÍDEO | Homens brigam no meio da rua após ofensas no Centro</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section plc-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLICIA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/09">
                          <a href="policia/noticia/01/2022/pm-prende-em-piuma-suspeito-de-assassinar-a-tiros-comerciante-de-cachoeiro-na-vespera-de-natal.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/7fd00a90-7255-11ec-922a-9f129dc523b7--w116_h116_lx100_rx700_ty0_by600.png" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-policia">POLíCIA</span>
                            </div>
                            <h2><a href="policia/noticia/01/2022/pm-prende-em-piuma-suspeito-de-assassinar-a-tiros-comerciante-de-cachoeiro-na-vespera-de-natal.html" target="_self">Suspeito de matar comerciante na véspera do Natal é preso</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/policia/10">
                          <a href="policia/noticia/01/2022/funcionario-e-preso-suspeito-de-furtar-equipamentos-de-empresa-em-vitoria.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/0779b260-7257-11ec-b053-97470189bb01--w116_h116_lx0_rx738_ty431_by1169.jpeg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-policia">POLíCIA</span>
                            </div>
                            <h2><a href="policia/noticia/01/2022/funcionario-e-preso-suspeito-de-furtar-equipamentos-de-empresa-em-vitoria.html" target="_self">Funcionário é preso suspeito de furtar equipamentos da mineradora Vale</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/policia/11">
                      <a href="policia/noticia/01/2022/homem-e-morto-com-mais-de-10-tiros-em-cariacica.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/42caf460-70a3-11ec-bcff-09cb5949bdb8--w240_h140_lx132_rx508_ty0_by219.png" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-policia">POLíCIA</span>
                        </div>
                        <h2><a href="policia/noticia/01/2022/homem-e-morto-com-mais-de-10-tiros-em-cariacica.html" target="_self">Homem é morto com mais de 10 tiros em Cariacica</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-politica" id="section-politica" data-ga-event-category="section-politica">
          <div className="topo-editorias topo-politica bg-color-politica">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Política</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section plt-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLITICA_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/politica/01">
                    <a href="politica/noticia/01/2022/servidores-de-vila-velha-recebem-abono-nesta-sexta-feira.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/4e1953f0-33b2-0137-2ea6-6231c35b6685--w445_h262_lx25_rx875_ty0_by500.jpg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-politica">POLíTICA</span>
                      <h2><a href="politica/noticia/01/2022/servidores-de-vila-velha-recebem-abono-nesta-sexta-feira.html" target="_self">Servidores de Vila Velha recebem abono nesta sexta-feira</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/02">
                        <a href="politica/noticia/01/2022/abraham-weintraub-anuncia-volta-ao-brasil-e-adota-discurso-eleitoral.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/26b5be50-df26-0137-4cdc-0a58a9feac2a--w116_h116_lx190_rx950_ty0_by760.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-politica">POLíTICA</span>
                          </div>
                          <h2><a href="politica/noticia/01/2022/abraham-weintraub-anuncia-volta-ao-brasil-e-adota-discurso-eleitoral.html" target="_self">Abraham Weintraub anuncia volta ao Brasil e adota discurso eleitoral</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/03">
                        <a href="politica/noticia/01/2022/twitter-remove-posts-de-malafaia-apos-associacao-entre-vacina-e-infanticidio.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/85a328f0-2ba7-0137-d1cf-6231c35b6685--w116_h116_lx78_rx383_ty0_by305.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-politica">POLíTICA</span>
                          </div>
                          <h2><a href="politica/noticia/01/2022/twitter-remove-posts-de-malafaia-apos-associacao-entre-vacina-e-infanticidio.html" target="_self">Twitter remove posts de Malafaia após associação entre vacina e infanticídio</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/politica/blogs/esplanada/2022/01/11/mdb-prefere-doria/" target="_blank">Esplanada | Em cenário indefinido para eleições, MDB prefere Dória</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/geral/blogs/livrepensar/2022/01/ivete-x-bolsonaro-artistas-devem-ou-nao-se-posicionar/" target="_blank">Ivete x Bolsonaro: artistas devem ou não se posicionar?</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/politica/06">
                      <a href="politica/noticia/01/2022/essa-direita-camicase-se-autodestroi-diz-senadora-soraya-thronicke.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/c452bd30-5d98-0137-eec5-6231c35b6685--w240_h140_lx0_rx460_ty18_by287.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="politica/noticia/01/2022/essa-direita-camicase-se-autodestroi-diz-senadora-soraya-thronicke.html" target="_self">'Essa direita camicase se autodestrói', diz senadora Soraya</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/politica/07">
                      <a href="politica/noticia/01/2022/planalto-confirma-viagem-de-bolsonaro-ao-suriname-nos-dias-20-e-21-de-janeiro.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/e6e293b0-187d-11ec-9f10-955809186c2e--w240_h140_lx0_rx1024_ty85_by683.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="politica/noticia/01/2022/planalto-confirma-viagem-de-bolsonaro-ao-suriname-nos-dias-20-e-21-de-janeiro.html" target="_self">Planalto confirma viagem de Bolsonaro ao Suriname</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/politica/08">
                      <a href="politica/noticia/01/2022/alckmin-manifesta-preocupacao-com-fala-de-lula-sobre-reforma-trabalhista.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/00e10770-0df2-0136-a254-6231c35b6685--w240_h140_lx0_rx600_ty3_by353.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="politica/noticia/01/2022/alckmin-manifesta-preocupacao-com-fala-de-lula-sobre-reforma-trabalhista.html" target="_self">Alckmin manifesta preocupação com fala de Lula sobre reforma</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section plt-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLITICA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/09">
                          <a href="politica/noticia/01/2022/de-aliado-a-rival-chefe-da-anvisa-agora-desafia-o-presidente.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/fc5aa700-b2bb-11eb-bc1e-9d53111ca667--w116_h116_lx235_rx935_ty0_by700.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-politica">POLíTICA</span>
                            </div>
                            <h2><a href="politica/noticia/01/2022/de-aliado-a-rival-chefe-da-anvisa-agora-desafia-o-presidente.html" target="_self">De aliado a rival, chefe da Anvisa agora desafia o presidente</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/politica/10">
                          <a href="politica/noticia/01/2022/nao-serei-jamais-bajuladora-de-mandato-diz-vice-lider-do-governo-no-congresso.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/c452bd30-5d98-0137-eec5-6231c35b6685--w116_h116_lx78_rx383_ty0_by305.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-politica">POLíTICA</span>
                            </div>
                            <h2><a href="politica/noticia/01/2022/nao-serei-jamais-bajuladora-de-mandato-diz-vice-lider-do-governo-no-congresso.html" target="_self">'Não serei jamais bajuladora de mandato, diz vice-líder do governo</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/politica/11">
                      <a href="politica/noticia/01/2022/terceira-via-sera-capaz-de-dialogar-e-ter-um-ou-dois-candidatos-afirma-doria.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/504de350-4628-11eb-afad-956b16c2bac5--w240_h140_lx0_rx1100_ty16_by657.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-politica">POLíTICA</span>
                        </div>
                        <h2><a href="politica/noticia/01/2022/terceira-via-sera-capaz-de-dialogar-e-ter-um-ou-dois-candidatos-afirma-doria.html" target="_self">Doria: Terceira via será capaz de dialogar e ter um ou dois candidatos</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-esportes" id="section-esportes" data-ga-event-category="section-esportes">
          <div className="topo-editorias topo-esportes bg-color-esportes">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Esportes</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section esp-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/esportes/01">
                    <a href="esportes/noticia/01/2022/novak-djokovic-e-acusado-de-mentir-no-formulario-de-entrada-na-australia.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/38185760-1a47-0136-e43c-6231c35b6685--w445_h262_lx1_rx545_ty0_by320.jpg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-esportes">ESPORTES</span>
                      <h2><a href="esportes/noticia/01/2022/novak-djokovic-e-acusado-de-mentir-no-formulario-de-entrada-na-australia.html" target="_self">Novak Djokovic é acusado de mentir no formulário de entrada na Austrália</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/02">
                        <a href="esportes/noticia/01/2022/ex-jogador-da-selecao-da-turquia-morre-em-acidente-de-carro-aos-27-anos.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/15199fb0-72e9-11ec-9bc0-7fe5aa9133cb--w116_h116_lx140_rx500_ty0_by360.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-esportes">ESPORTES</span>
                          </div>
                          <h2><a href="esportes/noticia/01/2022/ex-jogador-da-selecao-da-turquia-morre-em-acidente-de-carro-aos-27-anos.html" target="_self">Ex-jogador da seleção da Turquia morre em acidente de carro aos 27 anos</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/03">
                        <a href="esportes/noticia/01/2022/paulo-sousa-e-apresentado-no-flamengo-e-fala-em-oportunidade-unica-na-carreira.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/44521530-7246-11ec-acc6-876ece2ab4ec--w116_h116_lx343_rx1705_ty0_by1362.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-esportes">ESPORTES</span>
                          </div>
                          <h2><a href="esportes/noticia/01/2022/paulo-sousa-e-apresentado-no-flamengo-e-fala-em-oportunidade-unica-na-carreira.html" target="_self">Paulo Sousa é apresentado no Flamengo e fala em 'oportunidade única' na carreira</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/corinthians-revela-que-jo-willian-e-renato-augusto-estao-com-a-covid-19.html" target="_self">Corinthians revela que Jô, Willian e Renato Augusto estão com a covid-19</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="https://www.folhavitoria.com.br/esportes/blogs/corridaderua/2022/01/08/corrida-de-verao-vai-movimentar-o-litoral-sul-capixaba/" target="_blank">Corrida de Verão vai movimentar o litoral sul capixaba</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/esportes/06">
                      <a href="esportes/noticia/01/2022/luiz-henrique-testa-positivo-para-a-covid-19-em-reapresentacao-do-fluminense.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/dafa4e00-722b-11ec-baec-cdcad2259492--w240_h140_lx14_rx786_ty0_by450.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/luiz-henrique-testa-positivo-para-a-covid-19-em-reapresentacao-do-fluminense.html" target="_self">Luiz Henrique testa positivo para a covid-19 no retorno do Flu</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/esportes/07">
                      <a href="esportes/noticia/01/2022/nba-lanca-nba-trivia-e-fas-podem-ganhar-premios-todo-o-mes.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/4eb8eb10-7229-11ec-82cd-bfd98b57ce8e--w240_h140_lx0_rx1200_ty250_by950.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/nba-lanca-nba-trivia-e-fas-podem-ganhar-premios-todo-o-mes.html" target="_self">NBA lança ‘NBA Trivia’ e fãs podem ganhar prêmios todo o mês</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/esportes/08">
                      <a href="esportes/noticia/01/2022/eles-querem-captura-lo-e-prende-lo-outra-vez-afirma-o-irmao-de-novak-djokovic.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/0ecee980-de60-11eb-9175-253ecbe0f33a--w240_h140_lx0_rx1600_ty3_by936.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/eles-querem-captura-lo-e-prende-lo-outra-vez-afirma-o-irmao-de-novak-djokovic.html" target="_self">'Eles querem prendê-lo', afirma o irmão de Novak Djokovic</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section esp-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/09">
                          <a href="esportes/noticia/01/2022/neymar-volta-a-franca-e-inicia-corrida-para-reforcar-o-psg-contra-o-real-madrid.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/5d2b0400-5062-11ec-a289-0b7e0f2972f8--w116_h116_lx154_rx523_ty0_by369.jpeg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-esportes">ESPORTES</span>
                            </div>
                            <h2><a href="esportes/noticia/01/2022/neymar-volta-a-franca-e-inicia-corrida-para-reforcar-o-psg-contra-o-real-madrid.html" target="_self">Neymar volta à França e inicia corrida para reforçar o PSG contra o Real Madrid</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/esportes/10">
                          <a href="esportes/noticia/01/2022/adhemar-ferreira-da-silva-e-o-1-homenageado-da-colecao-grandes-idolos-do-esporte.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/f11f3f00-7236-11ec-9741-290af07b43fc--w116_h116_lx70_rx430_ty0_by360.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-esportes">ESPORTES</span>
                            </div>
                            <h2><a href="esportes/noticia/01/2022/adhemar-ferreira-da-silva-e-o-1-homenageado-da-colecao-grandes-idolos-do-esporte.html" target="_self">Grandes Ídolos do Esporte: Adhemar Ferreira da Silva é o 1º homenageado</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/esportes/11">
                      <a href="esportes/noticia/01/2022/klay-thompson-faz-17-pontos-em-volta-a-nba-apos-941-dias-noite-inesquecivel.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/c3738410-7215-11ec-970e-0105ec01071c--w240_h140_lx0_rx1080_ty360_by990.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-esportes">ESPORTES</span>
                        </div>
                        <h2><a href="esportes/noticia/01/2022/klay-thompson-faz-17-pontos-em-volta-a-nba-apos-941-dias-noite-inesquecivel.html" target="_self">Klay Thompson faz 17 pontos em volta à NBA após 941 dias</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-editorias content-games" id="section-games" data-ga-event-category="section-games">
          <div className="topo-editorias topo-games bg-color-games">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>Games</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content-editorias">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-advertising advertising-section esp-posicao-1 sec-posicao-1">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_01" data-sizes-desktop="[[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="card-theme card-model-1 ga-event-track" data-ga-event-label="editories/games/01">
                    <a href="games/noticia/01/2022/fa-cria-acessorio-para-tornar-dualsense-de-ps5-acessivel-com-uma-so-mao.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/5d5ddfc0-72d0-11ec-bec8-5369f209eda3--w445_h262_lx0_rx555_ty1_by327.jpg" alt="" /></picture></a>
                    <div className="card-title title2">
                      <span className="hat bg-color-games">GAMES</span>
                      <h2><a href="games/noticia/01/2022/fa-cria-acessorio-para-tornar-dualsense-de-ps5-acessivel-com-uma-so-mao.html" target="_self">Fã cria acessório para tornar DualSense de PS5 acessível com uma só mão</a></h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/02">
                        <a href="games/noticia/01/2022/xbox-series-sx-e-o-console-que-mais-rapido-vendeu-da-microsoft.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/bce1fd10-72ca-11ec-853c-495e28ecc48b--w116_h116_lx333_rx877_ty0_by544.jpg" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-games">GAMES</span>
                          </div>
                          <h2><a href="games/noticia/01/2022/xbox-series-sx-e-o-console-que-mais-rapido-vendeu-da-microsoft.html" target="_self">Xbox Series S|X é o console que mais rápido vendeu da Microsoft</a></h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/03">
                        <a href="games/noticia/01/2022/dying-light-2-hours.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/ec2240e0-72ce-11ec-9c3d-ef3fceb19f27--w116_h116_lx221_rx1173_ty0_by952.png" alt="" /></a>
                        <div className="card-title">
                          <div className="card-info">
                            <span className="hat font-color-games">GAMES</span>
                          </div>
                          <h2><a href="games/noticia/01/2022/dying-light-2-hours.html" target="_self">Dying Light 2: Mais detalhes sobre a duração do novo game da Techland</a></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/04">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/verstappen-24-virtual.html" target="_self">24 horas de Le Mans Virtual: Max Verstappen irá correr no rFactor2</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/05">
                      <div className="card-title">
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/bbl-reality-games-lenovo.html" target="_self">Reality-show de games será lançado em parceria da Lenovo com a BBL</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/games/06">
                      <a href="games/noticia/01/2022/horizon-forbidden-west-tem-imagens-vazadas-da-versao-ps4.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/b5a3aba0-72cc-11ec-b7f1-3b73ac3c9815--w240_h140_lx0_rx720_ty36_by456.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/horizon-forbidden-west-tem-imagens-vazadas-da-versao-ps4.html" target="_self">Vazaram imagens da versão de Horizon Forbidden West no Playstation 4</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/games/07">
                      <a href="games/noticia/01/2022/take-two-esta-adquirindo-a-zynga-em-negocio-de-mais-de-12-7-bi-de-dolares.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/354e8120-7220-11ec-bb7e-fb409f08c9c3--w240_h140_lx38_rx296_ty0_by151.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/take-two-esta-adquirindo-a-zynga-em-negocio-de-mais-de-12-7-bi-de-dolares.html" target="_self">Take-Two está adquirindo a Zynga em negócio de mais de 12.7 bi de dólares</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/games/08">
                      <a href="games/noticia/01/2022/liga-brasileira-de-free-fire-volta-a-tv-aberta-em-2022.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/54558250-7246-11ec-acc6-876ece2ab4ec--w240_h140_lx9_rx503_ty0_by288.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/liga-brasileira-de-free-fire-volta-a-tv-aberta-em-2022.html" target="_self">Liga Brasileira de Free Fire volta a TV aberta em 2022</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-advertising advertising-section esp-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/09">
                          <a href="games/noticia/01/2022/pubg-esta-gratuito.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/251c2380-5c21-11ec-b72a-39f22a21918f--w116_h116_lx300_rx876_ty0_by576.jpg" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-games">GAMES</span>
                            </div>
                            <h2><a href="games/noticia/01/2022/pubg-esta-gratuito.html" target="_self">PUBG: BATTLEGROUNDS está gratuito para ser jogado. Recompensas para quem comprou.</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card-theme card-model-2 ga-event-track" data-ga-event-label="editories/games/10">
                          <a href="games/noticia/01/2022/gilles-monteil-homenagem.html" className="image-link" target="_self"><img className="lazy" data-original="https://assets.folhavitoria.com.br/images/2913c9b0-71fd-11ec-9fc0-7fb383ed6a85--w116_h116_lx227_rx479_ty0_by252.png" alt="" /></a>
                          <div className="card-title">
                            <div className="card-info">
                              <span className="hat font-color-games">GAMES</span>
                            </div>
                            <h2><a href="games/noticia/01/2022/gilles-monteil-homenagem.html" target="_self">Gilles Monteil, ator das animações de games da Ubisoft é homenageado</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <div className="card-theme card-model-3 ga-event-track" data-ga-event-label="editories/games/11">
                      <a href="games/noticia/01/2022/assinaturas-games.html" className="image-link" target="_self"><picture><img className="img-fluid lazy" data-original="https://assets.folhavitoria.com.br/images/202e1680-72d3-11ec-bb65-6bbe30fd4b9e--w240_h140_lx297_rx1503_ty0_by704.jpg" alt="" /></picture></a>
                      <div className="card-title">
                        <a href="#" className="button-more-click"></a>
                        <div className="card-info">
                          <span className="hat font-color-games">GAMES</span>
                        </div>
                        <h2><a href="games/noticia/01/2022/assinaturas-games.html" target="_self">Concorrente do GamePass? Ubisoft+ está chegando</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mobile-footer-ad-container slided-offscren" data-ga-event-category="mobile-footer-ad">
          <div className="content-advertising">
            <div data-premium="" data-adunit="FOLHA_VITORIA_HEADERSTICKY" data-sizes-desktop="" data-sizes-mobile="[[320,100],[320,50]]"></div>
          </div>
        </div>
      </main>
      <nav className="indicator-section">
        <a href="#section-topo" className="indicator--color-topo indicator--active page-scroll page-scroll-topo"><span><span>Topo</span></span></a> <a href="#section-geral" className="indicator--color-geral page-scroll page-scroll-geral"><span><span>Geral</span></span></a> <a href="#section-entretenimento" className="indicator--color-entretenimento page-scroll page-scroll-entretenimento"><span><span>Entretenimento</span></span></a> <a href="#section-economia" className="indicator--color-economia page-scroll page-scroll-economia"><span><span>Economia</span></span></a> <a href="#section-saude" className="indicator--color-saude page-scroll page-scroll-saude"><span><span>Saúde</span></span></a> <a href="#section-trabalho" className="indicator--color-trabalho page-scroll page-scroll-trabalho"><span><span>Trabalho</span></span></a> <a href="#section-policia" className="indicator--color-policia page-scroll page-scroll-policia"><span><span>Polícia</span></span></a> <a href="#section-politica" className="indicator--color-politica page-scroll page-scroll-politica"><span><span>Política</span></span></a> <a href="#section-esportes" className="indicator--color-esportes page-scroll page-scroll-esportes"><span><span>Esportes</span></span></a> <a href="#section-games" className="indicator--color-games page-scroll page-scroll-games"><span><span>Games</span></span></a>
      </nav>
      <footer>
        <div className="sitemap" data-ga-event-category="sitemap-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                    <h4 className="border-geral"><a className="ga-event-track" data-ga-event-label="geral" href="geral.html">Geral</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <h5>Blogs</h5><a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; livrepensar">Livre Pensar</a> <a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; empregoseconcursos">Empregos e Concursos</a> <a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; midiaemercado">Mídia & Mercado</a> <a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; petblog">Pet Blog</a> <a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; vem-ler-comigo">Vem Ler Comigo</a> <a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; direito-ao-direito">Direito ao Direito</a> <a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; bem-pensado">Bem Pensado</a> <a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; educatech">Educatech</a> <a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; gente-e-gestao">Gente e Gestão</a> <a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; virginia-pelles">Sexo e Prazer</a> <a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; viva-mais">Viva Mais</a> <a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; priorize-voce">Priorize Você!</a> <a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; economia-circular">Economia Circular</a> <a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; radar">Folha Digital</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="border-entretenimento"><a className="ga-event-track" data-ga-event-label="entretenimento" href="entretenimento.html">Entretenimento</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <div className="itens">
                          <h5>Hotsites</h5><a href="https://www.folhavitoria.com.br/entretenimento/chef-de-familia/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; chef-de-familia">Chef de Família</a> <a href="https://www.folhavitoria.com.br/entretenimento/especialwanessacamargo/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; especialwanessacamargo">Especial Wanessa Camargo</a>
                        </div>
                        <h5>Blogs</h5><a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; na-balada">Na Balada</a> <a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; espacogourmet">Espaço Gourmet</a> <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-kids">Folhinha Kids</a> <a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento &gt; folhinha-macakids">Folhinha Macakids</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="border-economia"><a className="ga-event-track" data-ga-event-label="economia" href="economia.html">Economia</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <h5>Blogs</h5><a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; gestao-e-resultados">Gestão e Resultados</a>
                      </div>
                      <div className="itens">
                        <h5>Colunas</h5><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; financas-com-ibefes">Finanças com IBEF-ES</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="border-saude"><a className="ga-event-track" data-ga-event-label="saude" href="saude.html">Saúde</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <h5>Blogs</h5><a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude &gt; blogs &gt; em-forma">Em Forma!</a>
                      </div>
                    </div>
                    <h4 className="border-trabalho"><a className="ga-event-track" data-ga-event-label="trabalho" href="trabalho.html">Trabalho</a></h4>
                    <h4 className="border-policia"><a className="ga-event-track" data-ga-event-label="policia" href="policia.html">Polícia</a></h4>
                  </li>
                  <li>
                    <h4 className="border-politica"><a className="ga-event-track" data-ga-event-label="politica" href="politica.html">Política</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <h5>Blogs</h5><a href="http://www.folhavitoria.com.br/politica/blogs/bastidores/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; bastidores">Bastidores</a> <a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica &gt; esplanada">Esplanada</a>
                      </div>
                    </div>
                    <h4 className="border-esportes"><a className="ga-event-track" data-ga-event-label="esportes" href="esportes.html">Esportes</a></h4>
                    <div className="group-itens">
                      <div className="itens">
                        <h5>Blogs</h5><a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; corridaderua">Corrida de Rua</a> <a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; loucaporesportes">Louca por Esportes</a> <a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes &gt; no-pique">No Pique</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="border-social">Colunas</h4>
                    <div className="group-itens">
                      <div className="itens">
                        <a href="https://www.folhavitoria.com.br/social/helio-dorea/" className="ga-event-track" target="_blank" data-ga-event-label="social &gt; helio-dorea">Helio Dórea</a> <a href="https://www.folhavitoria.com.br/social/andreapena/" className="ga-event-track" target="_blank" data-ga-event-label="social &gt; andrea-pena">Andrea Pena</a> <a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; mundo-business">Mundo Business</a> <a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" target="_blank" data-ga-event-label="social &gt; resenhando">Resenhando</a> <a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia &gt; faz-a-conta">Faz a Conta</a> <a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral &gt; momento-decor">Momento Décor</a>
                      </div>
                    </div>
                    <h4 className="border-cidades">Cidades</h4>
                    <div className="group-itens">
                      <div className="itens">
                        <a href="cidades/domingos-martins/index.html" className="ga-event-track" data-ga-event-label="cidades &gt; domingos-martins">Domingos Martins</a> <a href="cidades/guarapari/index.html" className="ga-event-track" data-ga-event-label="cidades &gt; guarapari">Guarapari</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4 className="border-outros">Outros</h4>
                    <div className="group-itens">
                      <div className="itens">

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rodape">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="rodape-wrapper">
                  <div className="bx-left">
                    <a href="index.html" className="logo"></a>
                    <nav className="menu-footer">
                      <a href="paginas/fale-conosco.html">Fale Conosco</a>
                    </nav>
                  </div>
                  <div className="social-pages">
                    <a href="https://www.facebook.com/folhavitoria/" target="_blank"></a> <a href="https://twitter.com/folha_vitoria" target="_blank"></a> <a href="https://www.instagram.com/folhavitoria/" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="barra-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <span className="copy"><strong>Jornal Online Folha Vitória</strong> - Todos os direitos reservados © 2007 -
                  <script type="text/javascript">

                    document.write(new Date().getFullYear());
                  </script></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script defer type="text/javascript" src="assets/libraries/jquery/dist/jquery.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/jquery-lazyload/jquery.lazyload.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/jquery-autocomplete/jquery-autocomplete4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/jquery-menu-aim/jquery-menu-aim.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/iscroll/iscroll.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/swiper/dist/js/swiper.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/angular/angular.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/angular-lazy-img/dist/angular-lazy-img.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/libraries/jquery-easing/jquery.easing.min4ef9.js?v=3.7.7"></script>
      <script defer type="text/javascript" src="assets/scripts/pages/home-cover.min4ef9.js?v=3.7.7"></script>
      {/* DANDO ERRO DE SINTAXE */}
      {/* <script data-cfasync="false" async src="https://tags.premiumads.com.br/dfp/762da93f-a649-49c9-b287-945d22c1eef0"></script> */}
      <script src="dist/js/swiper.min.html"></script>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

      <Script13 />

      <div className="overlay" style={{ visibility: "hidden" }}>
        <div id="cookies-bar" className="cookies-bar">
          <p className="cookies-text">Nós utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento. <a href="https://assets.folhavitoria.com.br/documents/4d111420-497c-11ec-af2e-9bc7a5f4a2b5.pdf" target="_blank">Saiba mais sobre nossa Política de Privacidade.</a></p><button id="accept-button" className="btn accept">ACEITAR TODOS OS COOKIES</button>
        </div>
      </div>

      <Script14 />
      <Script15 />

    </div>
  )
}
