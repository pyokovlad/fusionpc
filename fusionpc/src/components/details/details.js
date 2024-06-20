import '/workspaces/fusionpc/fusionpc/src/components/details/details.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import Assemblies from '/workspaces/fusionpc/fusionpc/src/pages/assemblies/assemblies.js';
import Components from '/workspaces/fusionpc/fusionpc/src/pages/components/components.js';
import Periphery from '/workspaces/fusionpc/fusionpc/src/pages/periphery/periphery.js';


import sigma from '/workspaces/fusionpc/fusionpc/src/components/img/Frame 6.png';
import moon from '/workspaces/fusionpc/fusionpc/src/components/img/Frame 7.png';
import proc from '/workspaces/fusionpc/fusionpc/src/components/img/proc.png';
import keyboard from '/workspaces/fusionpc/fusionpc/src/components/img/keyboard.png';



function Details() {
    return (
        
        <div>
            <div class="product-pc">
                <div class="product-card">
                <img src={sigma}></img> 
                    <div class="product-info">
                        <h2>SIGMA PC</h2>
                        <p><div class="color">Процессор</div> — AMD Ryzen 5 5500 <br/>
                        <div class="color">Видеокарта</div> —
                        Nvidia MSI 2060 Super 8gb <br/>
                        <div class="color">ОЗУ</div>
                        — Patriot Viper Steel 3200Mhz 2x8gb <br/>
                        <div class="color">Материнская плата</div> —
                        Asus B450M K-II <br/>
                        <div class="color">Блок питания</div>
                        — AeroCool Cylon 600w <br/>
                        <div class="color">Корпус</div>
                        — Zalman I3-Edge black</p>
                        <button><Link to ='/Assemblies'>Приобрести</Link></button>
                    </div>
                </div>
                <div class="product-card">
                <img src={moon}></img> 
                    <div class="product-info">
                        <h2>MOON PC</h2>
                        <p><div class="color">Процессор</div> — AMD Ryzen 5 5600 <br/>
                        <div class="color">Видеокарта</div> —
                        Nvidia MSI 4060 8gb <br/>
                        <div class="color">ОЗУ</div>
                        — Patriot Viper Steel 3200Mhz 2x16gb <br/>
                        <div class="color">Материнская плата</div> —
                        Gigabyte Aorus V2 <br/>
                        <div class="color">Блок питания</div>
                        — AeroCool Cyleno 600w <br/>
                        <div class="color">Корпус</div>
                        — Formula F33-Black</p>
                        <button><Link to ='/Assemblies'>Приобрести</Link></button>
                    </div>
                </div>
            </div>
            <div class="product-other">
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>ПОДБОР КОМПЛЕКТУЮЩИХ</h2>
                        <p>Подбор комплектующих: мы <br/>
                        взаимодействуем с клиентом и <br/>
                        впоследствии находим лучший вариант <br/>
                        сборки для него, после чего начинаем <br/>
                        сборку и отдаем клиенту.</p>
                        <button><Link to ='/Components'>Подобрать</Link></button>
                    </div>
                    <img src={proc}></img> 
                </div>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>ПЕРИФЕРИЯ</h2>
                        <p>Подбор комплектующих: мы <br/>
                        взаимодействуем с клиентом и <br/>
                        впоследствии находим лучший вариант <br/>
                        сборки для него, после чего начинаем <br/>
                        сборку и отдаем клиенту.</p>
                        <button><Link to ='/Periphery'>Подобрать</Link></button>
                    </div>
                    <img src={keyboard}></img> 
                </div>
            </div>

                
        </div>
       
    );
  }
  
  export default Details;