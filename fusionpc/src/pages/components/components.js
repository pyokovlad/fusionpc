import React, { Component } from 'react';
import '/workspaces/fusionpc/fusionpc/src/pages/components/components.css';
import proc from '/workspaces/fusionpc/fusionpc/src/components/img/proc.png';

export default class Components extends Component {
    render() {
        return (
            <div class="product-other">
                <p className='comp'>Комплектующие</p>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>AMD Ryzen 5 8600G</h2>
                        <p>Общее количество ядер: 6<br/>
                            Базовая частота процессора: 4.3 ГГц<br/>
                            Тип памяти: DDR5<br/>
                            Тепловыделение: 65 Вт<br/>
                            Максимальная частота графического ядра: 2800 МГц <br/>
                        </p>
                        <p class="price">28 999Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={proc}></img> 
                </div>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>AMD Ryzen 5 7600X</h2>
                        <p>Общее количество ядер: 6<br/>
                            Базовая частота процессора: 4.7 ГГц<br/>
                            Тип памяти: DDR5<br/>
                            Тепловыделение: 105 Вт<br/>
                            Максимальная частота графического ядра: 2200 МГц <br/></p>
                            <p class="price">26 999Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={proc}></img> 
                </div>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>AMD Ryzen 5 7500F</h2>
                        <p>Общее количество ядер: 6<br/>
                            Базовая частота процессора: 3.7 ГГц<br/>
                            Тип памяти: DDR5<br/>
                            Тепловыделение: 65 Вт</p>
                            <p class="price">19 999Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={proc}></img> 
                </div>
                <div class="product-other-card">
                    <div class="product-other-info">
                        <h2>AMD Ryzen 5 5600GT</h2>
                        <p>Общее количество ядер: 6<br/>
                            Базовая частота процессора: 3.6 ГГц<br/>
                            Тип памяти: DDR4<br/>
                            Тепловыделение: 65 Вт<br/>
                            Максимальная частота графического ядра: 1900 МГц <br/></p>
                            <p class="price">17 699Р</p>
                        <button>Купить</button>
                    </div>
                    <img src={proc}></img> 
                </div>
                
            </div>
        )
    }
}