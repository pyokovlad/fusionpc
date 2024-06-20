import '/workspaces/fusionpc/fusionpc/src/components/fusionpc/fusionpc.css';
import mainphoto from '/workspaces/fusionpc/fusionpc/src/components/img/mainphoto.png';
import line from '/workspaces/fusionpc/fusionpc/src/components/img/arrow-right-line.png';
import slide from '/workspaces/fusionpc/fusionpc/src/components/img/Frame 1.png';

function FusionPC() {
    return (
        <div class="container">
            <div class="header1">
                <h1>Fusion PC <br />
                    for best profit</h1>
            </div>
            <div class="subheader">
                <h2>Мы обеспечиваем лучшее сочетание качеств
                сборки и наиболее низкой цены</h2>
            </div>
            <a href="#"><div class="button">
                <p class='text_button'>Приступить</p>
                <img src={line}></img>
            </div></a>
            <div class="image">
                <img src={mainphoto}></img> 
            </div>
            <div class="slide">
                <img src={slide}></img> 
            </div>
        </div>
    );
  }
  
  export default FusionPC;