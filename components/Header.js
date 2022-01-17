export default function () {

    return <header className="topo">
        <div className="wrapper">
            <div className="fv-header-top" data-ga-event-category="fv-header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="fv-header-top__wrapper">
                                <div className="content-left">
                                    <button className="menu-button menu-button-top ga-event-track" data-ga-event-label="botao-menu">
                                        <span className="hamburger hamburger--slider">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </span>
                                        <span className="menu-button__text">
                                            MENU
                                        </span>
                                    </button>
                                </div>
                                <h1>
                                    <a href="/" className="logo-header ga-event-track" data-ga-event-label="logo"></a>
                                </h1>

                                <div className="content-right">                                    <div id="search-box" className="search">
                                        <form action="" className="form-search">
                                            <a href="#" className="button-closed-itens search-button-close"><i className="zmdi zmdi-close"></i></a>
                                            <a href="#" className="button-open-itens search-button-open"><i className="zmdi zmdi-search"></i></a>
                                            <input type="text" className="input-search" placeholder="Busca" />
                                                <button type="submit"></button>
                                        </form>
                                    </div>
                                    <div className="google-search-bundle">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fv-header-nav" data-ga-event-category="fv-header-nav">
                <div className="line-menu">
                    <ul className="line-menu__list">
                        <li className="lb-geral"><a className="ga-event-track" data-ga-event-label="geral" href="/geral">Geral</a></li>
                        <li className="lb-entretenimento"><a className="ga-event-track" data-ga-event-label="entretenimento" href="/entretenimento">Entretenimento</a></li>
                        <li className="lb-economia"><a className="ga-event-track" data-ga-event-label="economia" href="/economia">Economia</a></li>
                        <li className="lb-saude"><a className="ga-event-track" data-ga-event-label="saude" href="/saude">Saúde</a></li>
                        <li className="lb-trabalho"><a className="ga-event-track" data-ga-event-label="trabalho" href="/trabalho">Trabalho</a></li>
                        <li className="lb-policia"><a className="ga-event-track" data-ga-event-label="policia" href="/policia">Polícia</a></li>
                        <li className="lb-politica"><a className="ga-event-track" data-ga-event-label="politica" href="/politica">Política</a></li>
                        <li className="lb-esportes"><a className="ga-event-track" data-ga-event-label="esportes" href="/esportes">Esportes</a></li>
                        <li className="lb-games"><a className="ga-event-track" data-ga-event-label="games" href="/games">Games</a></li>
                        <li className="lb-videos right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="videos-menu">Vídeos<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="videos > tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="videos > folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a></li>
                            </ul>
                        </li>
                        <li className="lb-social right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="social-menu">Colunas<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="social > helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="social > andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia > mundo-business">Mundo Business</a></li>
                                <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia > faz-a-conta">Faz a Conta</a></li>
                                <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entretenimento > pedro-permuy">Pedro Permuy</a></li>
                                <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">Finanças com IBEF-ES</a></li>
                                <li><a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="politica > de-olho-no-poder">De Olho no Poder</a></li>
                            </ul>
                        </li>
                        <li className="lb-cidades right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="cidades-menu">Cidades<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="cidades > domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="cidades > guarapari" href="/cidades/guarapari/">Guarapari</a></li>
                            </ul>
                        </li>
                        <li className="lb-blogs right-item">
                            <a href="#" className="toggle-submenu-blogs" data-submenu-id="blogs-menu">Blogs<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu has-submenu">
                                <li className="col3 geral ativo">
                                    <a href="#">Geral</a>
                                    <ul className="submenu">
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral > livrepensar">Livre Pensar</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empregoseconcursos">Empregos e Concursos</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > midiaemercado">Mídia &#38; Mercado</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral > petblog">Pet Blog</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral > vem-ler-comigo">Vem Ler Comigo</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral > direito-ao-direito">Direito ao Direito</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > bem-pensado">Bem Pensado</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral > educatech">Educatech</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral > gente-e-gestao">Gente e Gestão</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral > portugues-em-dia">Português em Dia</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral > virginia-pelles">Sexo e Prazer</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral > viva-mais">Viva Mais</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral > priorize-voce">Priorize Você!</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral > economia-circular">Economia Circular</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > radar">Folha Digital</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empreendedorismo-digital">Empreendedorismo Digital</a></li>
                                    </ul>
                                </li>
                                <li className="col1">

                                    <a href="#">Entretenimento</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > na-balada">Na Balada</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > espacogourmet">Espaço Gourmet</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-kids">Folhinha Kids</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-macakids">Folhinha Macakids</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Economia</a>
                                    <ul>

                                        <li><a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia > gestao-e-resultados">Gestão e Resultados</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Saúde</a>
                                    <ul>
                                        <li><a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude > blogs > em-forma">Em Forma!</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Política</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica > esplanada">Esplanada</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Esportes</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > corridaderua">Corrida de Rua</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > loucaporesportes">Louca por Esportes</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > no-pique">No Pique</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="submenu-nav submenu-nav--videos" id="videos-menu">
                    <ul>
                        <li><a className="ga-event-track" data-ga-event-label="videos > tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a></li>
                        <li><a className="ga-event-track" data-ga-event-label="videos > folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a></li>
                    </ul>
                </div>
                <div className="submenu-nav submenu-nav--social" id="social-menu">
                    <ul>
                        <li><a className="ga-event-track" data-ga-event-label="social > helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a></li>
                        <li><a className="ga-event-track" data-ga-event-label="social > andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia > mundo-business">Mundo Business</a></li>
                        <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia > faz-a-conta">Faz a Conta</a></li>
                        <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entretenimento > pedro-permuy">Pedro Permuy</a></li>
                        <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">Finanças com IBEF-ES</a></li>
                        <li><a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">De Olho no Poder</a></li>
                    </ul>
                </div>
                <div className="submenu-nav submenu-nav--cidades" id="cidades-menu">
                    <ul>
                        <li><a className="ga-event-track" data-ga-event-label="cidades > domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a></li>
                        <li><a className="ga-event-track" data-ga-event-label="cidades > guarapari" href="/cidades/guarapari/">Guarapari</a></li>
                    </ul>
                </div>
                <div className="submenu-nav--blogs" id="blogs-menu-box">
                    <button className="close-hover-menu"><i className="zmdi zmdi-close"></i></button>
                    <div className="wrap">
                        <h2>Geral</h2>
                        <ul>
                            <li><a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral > livrepensar">Livre Pensar</a></li>
                            <li><a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empregoseconcursos">Empregos e Concursos</a></li>
                            <li><a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > midiaemercado">Mídia &#38; Mercado</a></li>
                            <li><a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral > petblog">Pet Blog</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral > vem-ler-comigo">Vem Ler Comigo</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral > direito-ao-direito">Direito ao Direito</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > bem-pensado">Bem Pensado</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral > educatech">Educatech</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral > gente-e-gestao">Gente e Gestão</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral > virginia-pelles">Sexo e Prazer</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral > viva-mais">Viva Mais</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral > portugues-em-dia">Português em Dia</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral > priorize-voce">Priorize Você!</a></li>
                            <li><a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral > economia-circular">Economia Circular</a></li>
                            <li><a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > radar">Folha Digital</a></li>
                            <li><a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empreendedorismo-digital">Empreendedorismo Digital</a></li>
                        </ul>
                    </div>
                    <div className="wrap">
                        <h2>Entretenimento</h2>
                        <ul>
                            <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > na-balada">Na Balada</a></li>
                            <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > espacogourmet">Espaço Gourmet</a></li>
                            <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-kids">Folhinha Kids</a></li>
                            <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-macakids">Folhinha Macakids</a></li>
                        </ul>
                    </div>
                    <div className="wrap">
                        <h2>Economia</h2>
                        <ul>
                            <li><a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia > gestao-e-resultados">Gestão e Resultados</a></li>
                        </ul>
                    </div>
                    <div className="wrap">
                        <h2>Saúde</h2>
                        <ul>
                            <li><a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude > blogs > em-forma">Em Forma!</a></li>
                        </ul>
                    </div>
                    <div className="wrap">
                        <h2>Política</h2>
                        <ul>
                            <li><a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica > esplanada">Esplanada</a></li>
                        </ul>
                    </div>
                    <div className="wrap">
                        <h2>Esportes</h2>
                        <ul>
                            <li><a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > corridaderua">Corrida de Rua</a></li>
                            <li><a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > loucaporesportes">Louca por Esportes</a></li>
                            <li><a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > no-pique">No Pique</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fv-header-nav sticky-menu" data-ga-event-category="sticky-menu">
                <div className="group-items">
                    <a href="/" className="logo ga-event-track" data-ga-event-label="logo"></a>
                    <div className="menu-button menu-button-sticky hidden-sm-down ga-event-track" data-ga-event-label="botao-menu">
                        <span className="hamburger hamburger--slider">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </span>
                        <span className="menu-button__text">
                            MENU
                        </span>
                    </div>
                </div>
                <div className="line-menu">
                    <ul className="line-menu__list">
                        <li className="lb-geral"><a className="ga-event-track" data-ga-event-label="geral" href="/geral">Geral</a></li>
                        <li className="lb-entretenimento"><a className="ga-event-track" data-ga-event-label="entretenimento" href="/entretenimento">Entretenimento</a></li>
                        <li className="lb-economia"><a className="ga-event-track" data-ga-event-label="economia" href="/economia">Economia</a></li>
                        <li className="lb-saude"><a className="ga-event-track" data-ga-event-label="saude" href="/saude">Saúde</a></li>
                        <li className="lb-trabalho"><a className="ga-event-track" data-ga-event-label="trabalho" href="/trabalho">Trabalho</a></li>
                        <li className="lb-policia"><a className="ga-event-track" data-ga-event-label="policia" href="/policia">Polícia</a></li>
                        <li className="lb-politica"><a className="ga-event-track" data-ga-event-label="politica" href="/politica">Política</a></li>
                        <li className="lb-esportes"><a className="ga-event-track" data-ga-event-label="esportes" href="/esportes">Esportes</a></li>
                        <li className="lb-games"><a className="ga-event-track" data-ga-event-label="games" href="/games">Games</a></li>
                        <li className="lb-videos right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="videos-menu">Vídeos<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="videos > tv-vitoria" href="/videos/tv-vitoria">TV Vitória</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="videos > folha-vitoria" href="/videos/folha-vitoria">Folha Vitória</a></li>
                            </ul>
                        </li>
                        <li className="lb-social right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="social-menu">Colunas<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="social > helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="social > andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia > mundo-business">Mundo Business</a></li>
                                <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia > faz-a-conta">Faz a Conta</a></li>
                                <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entretenimento > pedro-permuy">Pedro Permuy</a></li>
                                <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                                <li><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">Finanças com IBEF-ES</a></li>
                                <li><a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">De Olho no Poder</a></li>
                            </ul>
                        </li>

                        <li className="lb-cidades right-item">
                            <a href="#" className="toggle-submenu" data-submenu-id="cidades-menu">Cidades<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu">
                                <li><a className="ga-event-track" data-ga-event-label="cidades > domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a></li>
                                <li><a className="ga-event-track" data-ga-event-label="cidades > guarapari" href="/cidades/guarapari/">Guarapari</a></li>
                            </ul>
                        </li>
                        <li className="lb-blogs right-item">
                            <a href="#" className="toggle-submenu-blogs" data-submenu-id="blogs-menu">Blogs<i className="zmdi zmdi-chevron-down"></i></a>
                            <ul className="line-menu__submenu has-submenu">
                                <li className="col3 geral ativo">
                                    <a href="#">Geral</a>
                                    <ul className="submenu">
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral > livrepensar">Livre Pensar</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empregoseconcursos">Empregos e Concursos</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > midiaemercado">Mídia &#38; Mercado</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral > petblog">Pet Blog</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral > vem-ler-comigo">Vem Ler Comigo</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral > direito-ao-direito">Direito ao Direito</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > bem-pensado">Bem Pensado</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral > educatech">Educatech</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral > gente-e-gestao">Gente e Gestão</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral > portugues-em-dia">Português em Dia</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral > virginia-pelles">Sexo e Prazer</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral > viva-mais">Viva Mais</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral > priorize-voce">Priorize Você!</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral > economia-circular">Economia Circular</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > radar">Folha Digital</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empreendedorismo-digital">Empreendedorismo Digital</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Entretenimento</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > na-balada">Na Balada</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > espacogourmet">Espaço Gourmet</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-kids">Folhinha Kids</a></li>
                                        <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-macakids">Folhinha Macakids</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Economia</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia > gestao-e-resultados">Gestão e Resultados</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Saúde</a>
                                    <ul>
                                        <li><a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude > blogs > em-forma">Em Forma!</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Política</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/politica/blogs/esplanada/" className="ga-event-track" target="_blank" data-ga-event-label="politica > esplanada">Esplanada</a></li>
                                    </ul>
                                </li>
                                <li className="col1">
                                    <a href="#">Esportes</a>
                                    <ul>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > corridaderua">Corrida de Rua</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > loucaporesportes">Louca por Esportes</a></li>
                                        <li><a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > no-pique">No Pique</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="submenu-nav submenu-nav--social" id="social-menu">
                    <ul>
                        <li><a className="ga-event-track" data-ga-event-label="social > helio-dorea" href="https://www.folhavitoria.com.br/social/helio-dorea/">Helio Dórea</a></li>
                        <li><a className="ga-event-track" data-ga-event-label="social > andrea-pena" href="https://www.folhavitoria.com.br/social/andreapena/">Andrea Pena</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia > mundo-business">Mundo Business</a></li>
                        <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia > faz-a-conta">Faz a Conta</a></li>
                        <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entretenimento > pedro-permuy">Pedro Permuy</a></li>
                        <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                        <li><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">Finanças com IBEF-ES</a></li>
                        <li><a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">De Olho no Poder</a></li>			</ul>
                </div>
                <div className="submenu-nav submenu-nav--cidades" id="cidades-menu">
                    <ul>
                        <li><a className="ga-event-track" data-ga-event-label="cidades > domingos-martins" href="/cidades/domingos-martins/">Domingos Martins</a></li>
                        <li><a className="ga-event-track" data-ga-event-label="cidades > guarapari" href="/cidades/guarapari/">Guarapari</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="menu-hover" className="menu-hover" data-ga-event-category="menu-completo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mobile-header">
                            <a href="/"><img src="/assets/images/signature-icons/redacao-folhavitoria.png" alt="" /></a>
                            <button className="close-hover-menu"><i className="zmdi zmdi-close"></i></button>
                        </div>
                        <div className="menu-hover-wrapper menu-hover-wrapperv1">
                            <nav className="menu-hover-nav">
                                <ul className="menu-hover-list">
                                    <li className="menu-hover-item menu-hover-geral" data-background-color="bg-color-geral" data-menu-slug="geral">
                                        <span>Geral <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-entretenimento" data-background-color="bg-color-entretenimento" data-menu-slug="entretenimento">
                                        <span>Entretenimento <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-economia" data-background-color="bg-color-economia" data-menu-slug="economia">
                                        <span>Economia <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-saude" data-background-color="bg-color-saude" data-menu-slug="saude">
                                        <span>Saúde <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-trabalho" data-background-color="bg-color-trabalho" data-menu-slug="trabalho">
                                        <span>Trabalho <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-policia" data-background-color="bg-color-policia" data-menu-slug="policia">
                                        <span>Polícia <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-politica" data-background-color="bg-color-politica" data-menu-slug="politica">
                                        <span>Política <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-esportes" data-background-color="bg-color-esportes" data-menu-slug="esportes">
                                        <span>Esportes <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-video" data-background-color="bg-color-video" data-menu-slug="videos">
                                        <span>Vídeos <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-colunas" data-background-color="bg-color-colunas" data-menu-slug="colunas">
                                        <span>Colunas <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-blogs" data-background-color="bg-color-blogs" data-menu-slug="blogs">
                                        <span>Blogs <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-games" data-background-color="bg-color-games" data-menu-slug="games">
                                        <span>Games <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-cidades" data-background-color="bg-color-cidades" data-menu-slug="cidades">
                                        <span>Cidades <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                    <li className="menu-hover-item menu-hover-dino" data-background-color="bg-color-dino" data-menu-slug="dino">
                                        <span>Dino <i className="zmdi zmdi-chevron-right"></i></span>
                                    </li>
                                </ul>
                            </nav>
                            <div className="secondary-menu-list">
                                <div id="secondary-menu-economia" className="secondary-menu bg-color-economia">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>ECONOMIA <a className="btn-more-news ga-event-track" data-ga-event-label="economia > mais-noticias" href="/economia">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-economia" className="secondary-menu-wrapper economia-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="economia > mais-noticias" href="/economia">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <h3>ESPECIAL</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/cadernos/oab-em-pauta" className="ga-event-track" data-ga-event-label="geral > cadernos > oab-em-pauta">OAB em Pauta</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/espirito-startups" className="ga-event-track" data-ga-event-label="geral > cadernos > espirito-startups">Espírito Startups</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/lider-empresarial" className="ga-event-track" data-ga-event-label="geral > cadernos > premio-lider-empresarial">Prêmio Líder Empresarial</a></li>
                                                </ul>
                                            </div>

                                            <div className="item-secondary-menu">
                                                <h3>COLUNAS</h3>
                                                <ul>
                                                    <li>
                                                        <a href="https://www.folhavitoria.com.br/economia/data-business" className="ga-event-track" data-ga-event-label="economia > data-business">
                                                            Data Business
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.folhavitoria.com.br/economia/agro-business" className="ga-event-track" data-ga-event-label="economia > agro-business">
                                                            Agro Business
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.folhavitoria.com.br/economia/mercado-diario" className="ga-event-track" data-ga-event-label="economia > mercado-diario">
                                                            Mercado Diário
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" className="ga-event-track" data-ga-event-label="economia > financas-de-a-a-z">
                                                            Finanças de A a Z
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" data-ga-event-label="geral > financas-com-ibefes">
                                                            Finanças com IBEF-ES
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-saude" className="secondary-menu bg-color-saude">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>SAÚDE <a className="btn-more-news ga-event-track" data-ga-event-label="saude > mais-noticias" href="/saude">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>

                                    <div id="secondary-menu-scroll-saude" className="secondary-menu-wrapper saude-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="saude > mais-noticias" href="/saude">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/saude/excelenciaemsaude/" className="ga-event-track" data-ga-event-label="saude > cadernos > excelencia-em-saude">Excelência em Saúde</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div id="secondary-menu-politica" className="secondary-menu bg-color-politica">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>POLÍTICA <a className="btn-more-news ga-event-track" data-ga-event-label="politica > mais-noticias" href="/politica">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-politica" className="secondary-menu-wrapper politica-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="politica > mais-noticias" href="/politica">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <ul>
                                                    <li>
                                                        <a target="_blank" href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" data-ga-event-label="politica > de-olho-no-poder">De Olho no Poder</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-trabalho" className="secondary-menu bg-color-trabalho">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>TRABALHO <a className="btn-more-news ga-event-track" data-ga-event-label="trabalho > mais-noticias" href="/trabalho">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-trabalho" className="secondary-menu-wrapper trabalho-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="trabalho > mais-noticias" href="/trabalho">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <ul>
                                                    <li><a target="_blank" href="https://curriculos.folhavitoria.com.br/" className="ga-event-track" data-ga-event-label="trabalho > fv-curriculos">FV Currículos</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-geral" className="secondary-menu bg-color-geral">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>GERAL <a className="btn-more-news ga-event-track" data-ga-event-label="geral > mais-noticias" href="/geral">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-geral" className="secondary-menu-wrapper geral-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="geral > mais-noticias" href="/geral">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <ul>
                                                    <li><a target="_blank" href="https://institutoamericobuaiz.com.br/" className="ga-event-track" data-ga-event-label="geral > instituto-americo-buaiz">Instituto Américo Buaiz</a></li>
                                                    <li><a target="_blank" href="https://www.folhavitoria.com.br/publicidade-legal/" className="ga-event-track" data-ga-event-label="geral > publicidade-legal">Publicidade Legal</a></li>
                                                    <li><a target="_blank" href="https://www.folhavitoria.com.br/geral/redeconstrubom/" className="ga-event-track" data-ga-event-label="geral > redeconstrubom">Rede Construbom</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ESPECIAL</h3>
                                                <ul>
                                                    
                                                    <li><a href="https://www.folhavitoria.com.br/cadernos/especial-educacao---filmes-e-trilhas-sonoras-inesqueciveis" className="ga-event-track" data-ga-event-label="geral > cadernos > especial-educacao---filmes-e-trilhas-sonoras-inesqueciveis">Especial Educação 2022</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/premio-marcas-icones/" className="ga-event-track" data-ga-event-label="geral > cadernos > marcas-icones-2020">Marcas Ícones 2021</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>COLUNAS</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-entretenimento" className="secondary-menu bg-color-entretenimento">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>ENTRETENIMENTO <a className="btn-more-news ga-event-track" data-ga-event-label="entretenimento > mais-noticias" href="/entretenimento">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-entretenimento" className="secondary-menu-wrapper entretenimento-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="entretenimento > mais-noticias" href="/entretenimento">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <h3>HOTSITES</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/entretenimento/chef-de-familia/" className="ga-event-track" data-ga-event-label="geral > chef-de-familia">Chef de Família</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>COLUNAS</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                                                    <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entreterimento > pedro-permuy">Pedro Permuy</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-policia" className="secondary-menu bg-color-policia">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>POLÍCIA <a className="btn-more-news ga-event-track" data-ga-event-label="policia > mais-noticias" href="/policia">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-policia" className="secondary-menu-wrapper policia-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="policia > mais-noticias" href="/policia">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-esportes" className="secondary-menu bg-color-esportes">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>ESPORTES <a className="btn-more-news ga-event-track" data-ga-event-label="esportes > mais-noticias" href="/esportes">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-esportes" className="secondary-menu-wrapper esportes-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="esportes > mais-noticias" href="/esportes">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>

                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-games" className="secondary-menu bg-color-games">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>GAMES<a className="btn-more-news ga-event-track" data-ga-event-label="games > mais-noticias" href="/games">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-games" className="secondary-menu-wrapper games-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="games > mais-noticias" href="/games">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-videos" className="secondary-menu bg-color-videos">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>VÍDEOS <a className="btn-more-news ga-event-track" data-ga-event-label="videos > mais-videos" href="/videos/tv-vitoria">MAIS VÍDEOS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-videos" className="secondary-menu-wrapper videos-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="videos > mais-videos" href="/videos/tv-vitoria">MAIS VÍDEOS <i className="zmdi zmdi-long-arrow-right"></i></a>
                                            <div className="item-secondary-menu">
                                                <h3>FOLHA VITÓRIA</h3>
                                                <ul>
                                                    <li><a href="/videos/folha-vitoria" className="ga-event-track" data-ga-event-label="videos > folha-vitoria > de-olho-no-poder">Canais de Vídeo</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>TV VITÓRIA</h3>
                                                <ul>
                                                    <li><a href="/videos/tv-vitoria/es-no-ar" className="ga-event-track" data-ga-event-label="videos > tv-vitoria > es-no-ar">ES no Ar</a></li>
                                                    <li><a href="/videos/tv-vitoria/balanco-geral-es" className="ga-event-track" data-ga-event-label="videos > tv-vitoria > balanco-geral-es">Balanço Geral</a></li>
                                                    <li><a href="/videos/tv-vitoria/fala-es" className="ga-event-track" data-ga-event-label="videos > tv-vitoria >fala-es">Fala ES</a></li>
                                                    <li><a href="/videos/tv-vitoria/cidade-alerta-es" className="ga-event-track" data-ga-event-label="videos > tv-vitoria > cidade-alerta-es">Cidade Alerta</a></li>
                                                    <li><a href="/videos/tv-vitoria/jornal-da-tv-vitoria" className="ga-event-track" data-ga-event-label="videos > tv-vitoria > jornal-da-tv-vitoria">Jornal da TV Vitória</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-colunas" className="secondary-menu bg-color-colunas">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>COLUNAS</h2>
                                    </div>
                                    <div id="secondary-menu-scroll-colunas" className="secondary-menu-wrapper colunas-menu">
                                        <div className="secondary-menu-scroll">
                                            <div className="item-secondary-menu">
                                                <h3>GERAL</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/colunas/momento-decor/" className="ga-event-track" target="_blank" data-ga-event-label="geral > momento-decor">Momento Décor</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>SOCIAIS</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/social/helio-dorea/" className="ga-event-track" data-ga-event-label="social > helio-dorea">Helio Dórea</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/social/andreapena/" className="ga-event-track" data-ga-event-label="social > andrea-pena">Andrea Pena</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ECONOMIA</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/mundo-business/" className="ga-event-track" data-ga-event-label="economia > mundo-business">Mundo Business</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/faz-a-conta/" className="ga-event-track" target="_blank" data-ga-event-label="economia > faz-a-conta">Faz a Conta</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/financascomibefes/" className="ga-event-track" target="_blank" data-ga-event-label="economia > financas-com-ibefes">Finanças com IBEF-ES</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ENTRETENIMENTO</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/entretenimento/resenhando/" className="ga-event-track" data-ga-event-label="entretenimento > resenhando">Resenhando</a></li>
                                                    <li><a href="/cadernos/pedro-permuy" className="ga-event-track" data-ga-event-label="entretenimento > pedro-permuy">Pedro Permuy</a></li>

                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>POLÍTICA</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/politica/colunas/de-olho-no-poder/" className="ga-event-track" data-ga-event-label="politica > de-olho-no-poder">De Olho no Poder</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-blogs" className="secondary-menu bg-color-blogs">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>BLOGS</h2>
                                    </div>
                                    <div id="secondary-menu-scroll-blogs" className="secondary-menu-wrapper blogs-menu">
                                        <div className="secondary-menu-scroll">
                                            <div className="item-secondary-menu">
                                                <h3>GERAL</h3>
                                                <ul>
                                                    <li><a href="http://www.folhavitoria.com.br/geral/blogs/livrepensar/" className="ga-event-track" target="_blank" data-ga-event-label="geral > livrepensar">Livre Pensar</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empregoseconcursos">Empregos e Concursos</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/geral/blogs/midiaemercado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > midiaemercado">Mídia &#38; Mercado</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/geral/blogs/petblog/" className="ga-event-track" target="_blank" data-ga-event-label="geral > petblog">Pet Blog</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/vem-ler-comigo/" className="ga-event-track" target="_blank" data-ga-event-label="geral > vem-ler-comigo">Vem Ler Comigo</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/direito-ao-direito/" className="ga-event-track" target="_blank" data-ga-event-label="geral > direito-ao-direito">Direito ao Direito</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/bem-pensado/" className="ga-event-track" target="_blank" data-ga-event-label="geral > bem-pensado">Bem Pensado</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/viva-mais/" className="ga-event-track" target="_blank" data-ga-event-label="geral > viva-mais">Viva Mais</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/educatech/" className="ga-event-track" target="_blank" data-ga-event-label="geral > educatech">Educatech</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/gente-e-gestao/" className="ga-event-track" target="_blank" data-ga-event-label="geral > gente-e-gestao">Gente e Gestão</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/virginia-pelles/" className="ga-event-track" target="_blank" data-ga-event-label="geral > virginia-pelles">Sexo e Prazer</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/portugues-em-dia" className="ga-event-track" target="_blank" data-ga-event-label="geral > portugues-em-dia">Português em Dia</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/priorize-voce/" className="ga-event-track" target="_blank" data-ga-event-label="geral > priorize-voce">Priorize Você!</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/blogs/economia-circular/" className="ga-event-track" target="_blank" data-ga-event-label="geral > economia-circular">Economia Circular</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/geral/blogs/folha-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > radar">Folha Digital</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/economia/blogs/empreendedorismo-digital/" className="ga-event-track" target="_blank" data-ga-event-label="geral > empreendedorismo-digital">Empreendedorismo Digital</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ENTRETENIMENTO</h3>
                                                <ul>
                                                    <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/na-balada" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > na-balada">Na Balada</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/entretenimento/blogs/espacogourmet/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > espacogourmet">Espaço Gourmet</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-kids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-kids">Folhinha Kids</a></li>
                                                    <li><a href="https://www.folhavitoria.com.br/entretenimento/blogs/folhinha-macakids/" className="ga-event-track" target="_blank" data-ga-event-label="entretenimento > folhinha-macakids">Folhinha Macakids</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ECONOMIA</h3>
                                                <ul>
                                                    <li><a href="http://www.folhavitoria.com.br/economia/blogs/gestaoeresultados/" className="ga-event-track" target="_blank" data-ga-event-label="economia > gestao-e-resultados">Gestão e Resultados</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>SAÚDE</h3>
                                                <ul>
                                                    <li><a href="https://www.folhavitoria.com.br/saude/blogs/em-forma/" className="ga-event-track" target="_blank" data-ga-event-label="saude > blogs > em-forma">Em Forma!</a></li>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>POLÍTICA</h3>
                                                <ul>
                                                </ul>
                                            </div>
                                            <div className="item-secondary-menu">
                                                <h3>ESPORTES</h3>
                                                <ul>
                                                    <li><a href="http://www.folhavitoria.com.br/esportes/blogs/corridaderua/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > corridaderua">Corrida de Rua</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/esportes/blogs/loucaporesportes/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > loucaporesportes">Louca por Esportes</a></li>
                                                    <li><a href="http://www.folhavitoria.com.br/esportes/blogs/no-pique/" className="ga-event-track" target="_blank" data-ga-event-label="esportes > blogs > no-pique">No Pique</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-cidades" className="secondary-menu bg-color-cidades">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>CIDADES</h2>
                                    </div>
                                    <div id="secondary-menu-scroll-cidades" className="secondary-menu-wrapper cidades-menu">
                                        <div className="secondary-menu-scroll">
                                            <div className="item-secondary-menu">
                                                <ul>
                                                    <li><a href="/cidades/domingos-martins/" className="ga-event-track" data-ga-event-label="cidades > domingos-martins">Domingos Martins</a></li>
                                                    <li><a href="/cidades/guarapari/" className="ga-event-track" data-ga-event-label="cidades > guarapari">Guarapari</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="secondary-menu-dino" className="secondary-menu bg-color-dino">
                                    <div className="fixed-header-secondary-menu">
                                        <button className="btn btn-default menu-mobile-return"><i className="zmdi zmdi-long-arrow-return"></i></button>
                                        <h2>DINO <a className="btn-more-news ga-event-track" data-ga-event-label="dino > mais-noticias" href="/cadernos/dino">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a></h2>
                                    </div>
                                    <div id="secondary-menu-scroll-dino" className="secondary-menu-wrapper dino-menu">
                                        <div className="secondary-menu-scroll">
                                            <a className="btn-more-news ga-event-track" data-ga-event-label="dino > dino" href="/cadernos/dino">MAIS NOTÍCIAS <i className="zmdi zmdi-long-arrow-right"></i></a>
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
}
