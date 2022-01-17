import HomeHead from '../components/head/Home.js'
import Script11 from '../components/scripts/home/Script11.js';
import Script12 from '../components/scripts/home/Script12.js';
import Script13 from '../components/scripts/home/Script13.js';
import Script14 from '../components/scripts/home/Script14.js';
import Script15 from '../components/scripts/home/Script15.js';

import { useEffect, useState } from 'react';
import { getCoverItems, getImageUrl } from '../services/coverItems.js';
import Header from '../components/Header.js';
import Card01 from '../components/cards/Card01.js';
import Card02 from '../components/cards/Card02.js';

import Card03 from '../components/cards/Card03.js';

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

  useEffect(() => { getAllCoverItems() }, [])

  const getAllCoverItems = async () => {
    const response = await getCoverItems(defaultSegments)
    setCoverItems(response.data.items)
  }

  const findPosition = async (position) => {
    if (coverItems.length === 0) return

    const positionData = coverItems.find(item => item.position === position)
    const imageUrl = await getImageUrl({ position, crop_hash: positionData.crop_hash })

    return {
      ...positionData,
      image: imageUrl
    }
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
                <li className="main-menu" id="item-0" style={{ "borderTopColor": "#000" }}>
                  <a style={{ color: "#000" }} href="http://noticias.r7.com/" title="Ir para o NOTÍCIAS ">NOTÍCIAS</a>
                </li>
                <li className="main-menu" id="item-1" style={{ "borderTopColor": "#0E8148" }}>
                  <a style={{ "color": "#0E8148" }} href="http://esportes.r7.com/" title="Ir para o ESPORTES ">ESPORTES</a>
                </li>
                <li className="main-menu" id="item-2" style={{ "borderTopColor": "#F78714" }}>
                  <a style={{ "color": "#F78714" }} href="http://diversao.r7.com/" title="Ir para o DIVERSÃO ">DIVERSÃO</a>
                </li>
                <li className="mais mais-small main-menu" onClick={() => window.toggleNavegMenu()}>
                  <a href="#" title="Veja mais">mais</a>
                </li>
                <div className="sub_menu_responsible_small"></div>
                <li className="main-menu" id="item-3" style={{ "borderTopColor": "#9C5BB9" }}>
                  <a style={{ color: "#9C5BB9" }} href="http://meuestilo.r7.com/" title="Ir para o MEU ESTILO ">MEU ESTILO</a>
                </li>
                <li className="mais mais-medium main-menu" onClick={() => window.toggleNavegMenu()}>
                  <a href="#" title="Veja mais">mais</a>
                </li>
                <div className="sub_menu_responsible_medium"></div>
                <li className="main-menu" id="item-4" style={{ "borderTopColor": "#6B7982" }}>
                  <a style={{ color: "#6B7982" }} href="https://www.r7.com/tudo-do-r7/todos-os-blogs" title="Ir para o BLOGS ">BLOGS</a>
                </li>
                <li className="main-menu" id="item-5" style={{ "borderTopColor": "#2e50cb" }}>
                  <a style={{ color: "#2e50cb" }} href="http://recordtv.r7.com/" title="Ir para o RECORD TV ">RECORD TV</a>
                </li>
                <li className="main-menu" id="item-6" style={{ "borderTopColor": "#007cd7" }}>
                  <a style={{ color: "#007cd7" }} href="http://tv.r7.com/" title="Ir para o VÍDEOS ">VÍDEOS</a>
                </li>
                <li className="main-menu" id="item-7" style={{ "borderTopColor": "#6b7982" }}>
                  <a style={{ color: "#6b7982" }} href="https://www.r7.com/servicos" title="Ir para o SERVIÇOS ">SERVIÇOS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script11 />

      <Header />

      <div style={{ display: "none", width: "auto", height: "auto", position: "fixed", bottom: 0, left: "50%", transform: "translate(-50%)", "zIndex": "9999998", cursor: "pointer" }}>
        <button onClick={() => this.parentNode.style.display = 'none'} style={{ position: "absolute", top: "-24px", right: 0, height: "25px", width: "25px", cursor: "pointer", "zIndex": "9999999999", background: "#fff", border: "1px solid #ccc", padding: "0 0 0 1px", color: "#666" }}>X</button>
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
                          <img src="https://www.folhavitoria.com.br/assets/images/social-column/ricardo-frizera.png" alt="ricardo-frizera" className="avatar" /> <span>MUNDO BUSINESS</span>
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
                          <img src="https://www.folhavitoria.com.br/assets/images/social-column/helio.png" alt="helio" className="avatar" /> <span>COLUNA SOCIAL</span>
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
                          <img src="https://www.folhavitoria.com.br/assets/images/social-column/andrea.png" alt="andrea" className="avatar" /> <span>COLUNA SOCIAL</span>
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/08"} />
                  </div>
                  <div className="card-advertising advertising-section grl-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_GERAL_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/geral/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/08"} />
                  </div>
                  <div className="card-advertising advertising-section ent-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ENTRETENIMENTO_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/entretenimento/11"} />
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
                            <img src="https://www.folhavitoria.com.br/assets/images/social-column/data-business-profile.png" alt="data-business-profile" className="avatar" /> <span><a href="http://www.folhavitoria.com.br/economia/data-business/" target="_self">Luan Sperandio</a></span>
                            <h2><a href="http://www.folhavitoria.com.br/economia/data-business/" target="_self">As escolas deveriam reabrir apenas após a vacinação das crianças?</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/02">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="https://www.folhavitoria.com.br/assets/images/social-column/agro-business-profile.png" alt="agro-business-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/agro-business" target="_self">Stefany Sampaio</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/agro-business" target="_self">Agro é responsável por 35,9% da movimentação econômica do cooperativismo capixaba</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/03"} />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="scroll-wrapper">
                    <div className="scroll x2">
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/05">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="https://www.folhavitoria.com.br/assets/images/social-column/mercado-diario-profile.png" alt="mercado-diario-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/mercado-diario" target="_self">Vinicius Torres</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/mercado-diario" target="_self">Como as eleições vão influenciar a bolsa?</a></h2>
                          </div>
                        </div>
                      </div>
                      <div className="card-theme card-model-social-column-clean ga-event-track" data-ga-event-label="editories/economia_column/06">
                        <div className="card-title">
                          <div className="column-description">
                            <img src="https://www.folhavitoria.com.br/assets/images/social-column/financas-de-a-a-z-profile.png" alt="financas-de-a-a-z-profile" className="avatar" /> <span><a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" target="_self">Ana Porto</a></span>
                            <h2><a href="https://www.folhavitoria.com.br/economia/financas-de-a-a-z" target="_self">Comece bem 2022: faça sua reserva de emergência</a></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/08"} />
                  </div>
                  <div className="card-advertising advertising-section ecn-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ECONOMIA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/economia/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/01"} />
                </div>
                <div className="col-md-4 col-lg-3 order-2 order-lg-2">
                  <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/02"} />
                </div>
                <div className="col-md-4 col-lg-3 order-3 order-lg-3">
                  <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/03"} />
                </div>
                <div className="col-md-12 col-lg-4 order-4 order-lg-4">
                  <div className="card-advertising sde-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_02" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 order-5 order-lg-5">
                  <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/04"} />
                </div>
                <div className="col-md-8 col-lg-5 order-6 order-lg-6">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/05"} />
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/06"} />
                </div>
                <div className="col-md-4 col-lg-3 order-8 order-lg-7">
                  <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/07"} />
                </div>
                <div className="col-md-8 col-lg-5 order-9 order-lg-8">
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/08"} />
                </div>
                <div className="col-md-12 col-lg-4 order-7 order-lg-9">
                  <div className="card-advertising sde-posicao-3">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_03" data-sizes-desktop="[[300,250]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-10 order-lg-10">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/09"} />
                </div>
                <div className="col-md-6 order-11 order-lg-11">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/10"} />
                </div>
                <div className="col-12 order-12 order-lg-12">
                  <div className="card-advertising sde-posicao-4">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_SAUDE_04" data-sizes-desktop="[[970,250],[970,90],[728,90]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-13 order-lg-13">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/11"} />
                </div>
                <div className="col-md-6 order-14 order-lg-14">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/12"} />
                </div>
                <div className="col-md-4 col-lg-3 order-16 order-lg-15">
                  <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/13"} />
                </div>
                <div className="col-md-8 col-lg-5 order-17 order-lg-16">
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/14"} />
                  <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/saude/15"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/08"} />
                  </div>
                  <div className="card-advertising advertising-section trl-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_TRABALHO_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/trabalho/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/08"} />
                  </div>
                  <div className="card-advertising advertising-section plc-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLICIA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/policia/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/08"} />
                  </div>
                  <div className="card-advertising advertising-section plt-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_POLITICA_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/politica/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/08"} />
                  </div>
                  <div className="card-advertising advertising-section esp-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/esportes/11"} />
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
                  <Card01 findPosition={findPosition} coverItems={coverItems} position={"editories/games/01"} />
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="row">
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/02"} />
                    </div>
                    <div className="col-lg-12">
                      <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/03"} />
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/04"} />
                  </div>
                  <div className="col-md-6">
                    <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/05"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/games/06"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/games/07"} />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/games/08"} />
                  </div>
                  <div className="card-advertising advertising-section esp-posicao-2 sec-posicao-2">
                    <div className="content-advertising">
                      <div data-premium="" data-adunit="FOLHA_VITORIA_HOME_ESPORTES_02" data-sizes-desktop="[[300,600]]" data-sizes-mobile="[[300,250]]"></div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="row">
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/09"} />
                      </div>
                      <div className="col-lg-12">
                        <Card02 findPosition={findPosition} coverItems={coverItems} position={"editories/games/10"} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <Card03 findPosition={findPosition} coverItems={coverItems} position={"editories/games/11"} />
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
        <a href="#section-topo" className="indicator--color-topo page-scroll page-scroll-topo"><span><span>Topo</span></span></a> <a href="#section-geral" className="indicator--color-geral page-scroll page-scroll-geral"><span><span>Geral</span></span></a> <a href="#section-entretenimento" className="indicator--color-entretenimento page-scroll page-scroll-entretenimento"><span><span>Entretenimento</span></span></a> <a href="#section-economia" className="indicator--color-economia page-scroll page-scroll-economia"><span><span>Economia</span></span></a> <a href="#section-saude" className="indicator--color-saude page-scroll page-scroll-saude"><span><span>Saúde</span></span></a> <a href="#section-trabalho" className="indicator--color-trabalho page-scroll page-scroll-trabalho"><span><span>Trabalho</span></span></a> <a href="#section-policia" className="indicator--color-policia page-scroll page-scroll-policia"><span><span>Polícia</span></span></a> <a href="#section-politica" className="indicator--color-politica page-scroll page-scroll-politica"><span><span>Política</span></span></a> <a href="#section-esportes" className="indicator--color-esportes page-scroll page-scroll-esportes"><span><span>Esportes</span></span></a> <a href="#section-games" className="indicator--color-games page-scroll page-scroll-games"><span><span>Games</span></span></a>
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
