import '/workspaces/fusionpc/fusionpc/src/components/footer/footer.css';
import tg from '/workspaces/fusionpc/fusionpc/src/components/img/tg-logo-DXP1_upZ 1.png';
import vk from '/workspaces/fusionpc/fusionpc/src/components/img/vk-logo-fjyuAe3N 1.png';
import wa from '/workspaces/fusionpc/fusionpc/src/components/img/logo-whatsapp-D0rh4hPr 1.png';
import yt from '/workspaces/fusionpc/fusionpc/src/components/img/youtube-logo-BWwA9dSz 1.png';



function Footer() {
    return (
        <div class="container">
            <footer class="footer-container">
                <div class="tech-support">
                <h3>ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
                <p>Столкнулись с проблемой на сайте, у Вас есть вопросы <br/>
                или нужна помощь? Свяжитесь с нами, мы Вам поможем!</p>
                <p class="phone-number">+7 (495) 123-45-67</p>
            
                </div>
                <div class="web">
                    <h3>НАШИ СОЦИАЛЬНЫЕ СЕТИ</h3>
                    <div class="web-img">
                        <a href="#"><img src={tg}></img></a>
                        <a href="#"><img src={vk}></img></a>
                        <a href="#"><img src={wa}></img></a>
                        <a href="#"><img src={yt}></img></a>
                    </div>
                </div>
            </footer>
            <div class="copyright">
                © COPYRIGHT 2019-2024 FUSIONPC. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </div>
        
        </div>
    );
  }
  
  export default Footer;