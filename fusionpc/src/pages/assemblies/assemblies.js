import React, { Component } from 'react';
import '/workspaces/fusionpc/fusionpc/src/pages/assemblies/assemblies.css';
import sigma from '/workspaces/fusionpc/fusionpc/src/components/img/Frame 6.png'
import moon from '/workspaces/fusionpc/fusionpc/src/components/img/moonpc.png'


import Footer from '/workspaces/fusionpc/fusionpc/src/components/footer/footer.js'

export default class Assemblies extends Component {
    render() {
        return (
            <div class="assembly">
                <p className='nashi'>Наши сборки</p>
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
                        <p class="price">70 999Р</p>
                        <button>Приобрести</button>
                    </div>
                </div>
                <div class="product-card">
                <img src={moon}></img> 
                    <div class="product-info">
                        <h2>MOON PC</h2>
                        <p><div class="color">Процессор</div> — INTEL CORE I7-14700K <br/>
                        <div class="color">Видеокарта</div> —
                        GEFORCE RTX 4070TI GAMINGPRO <br/>
                        <div class="color">ОЗУ</div>
                        — Patriot Viper Steel 3200Mhz 2x16gb <br/>
                        <div class="color">Материнская плата</div> —
                        Gigabyte Aorus V2 <br/>
                        <div class="color">Блок питания</div>
                        — AeroCool Cyleno 600w <br/>
                        <div class="color">Корпус</div>
                        — Formula F33-Black</p>
                        <p class="price">246 100Р</p>
                        <button>Приобрести</button>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div id="footer">
                    < Footer />
                </div>
            </div>
        </div>
        )
    }
}