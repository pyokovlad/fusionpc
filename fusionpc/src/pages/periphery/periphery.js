import React, { Component } from 'react';
import '/workspaces/fusionpc/fusionpc/src/pages/periphery/periphery.css';
import keyboard from '/workspaces/fusionpc/fusionpc/src/components/img/keyboard.png'

export default class Periphery extends Component {
    render() {
        return (
            <div class="product-other">
                <p className='per'>Периферия</p>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>ANNE PRO 2</h2>
                        <p>Тип: Игровая клавиатура <br/>
                            Тип соединения: проводная, беспроводная<br/>
                            Интерфейс: Bluetooth, USB Type-C<br/>
                            Тип клавиатуры: Механическая<br/>
                            Количество клавиш клавиатуры: 61</p>
                            <p class="price">5 650Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={keyboard}></img> 
                </div>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>KD83 g3ms Magnetite</h2>
                        <p>Тип: Игровая клавиатура <br/>
                                Тип соединения: проводная<br/>
                                    Интерфейс: USB Type-C<br/>
                            Тип клавиатуры: Механическая<br/>
                            Количество клавиш клавиатуры: 83</p>
                            <p class="price">8 233Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={keyboard}></img> 
                </div>
            </div>
        )
    }
}