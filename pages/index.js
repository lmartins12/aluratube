import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const estilos = {
    /*backgroundColor: "red"*/};

    const [valorDoFiltro, setValorDoFiltro] = React.useState("")    

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}> 
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header />
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}> 
                Conteúdo
            </Timeline> 
            </div>
        </>
    );    
  }
  
  export default HomePage

//   function Menu () {
//     return (
//         <div> 
//             Menu
//         </div>
//     )
//   }  
  
  const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1 };
    
    img {
        width: 80px;
        height: 80px;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
    const StyledBanner = styled.div`
        background-color: blue;
        background-image: url(${({ bg }) => bg});
        background-size: cover;
        height: 230px;
    `;
  function Header () {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src= {`https://github.com/${config.github}.png`} />
                <div>
                    <h1>
                        {config.name}
                    </h1>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section> 
        </StyledHeader>
    )
  }

  function Timeline ({searchValue, ...props}) {
    const playlistsNames = Object.keys(props.playlists)

    return (
        <StyledTimeline> 
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }