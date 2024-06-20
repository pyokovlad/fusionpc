import '/workspaces/fusionpc/fusionpc/src/components/advantages/advantages.css'
import slide2 from '/workspaces/fusionpc/fusionpc/src/components/img/Group 1.png'

function Advantages() {
    return ( 
        <div class="container2">
        <div class="zagolovok">
            <p>Наши преимущества</p>
        </div>
         <div class="card-container">
             <div class="card">
                 <div class="card-title">
                     ДЕШЕВЛЕ И КАЧЕСТВЕННЕЕ
                 </div>
                 <div class="card-text">
                     Создавая наши сборки, мы опирались на самое-самое главное - это соотношение цены к производительности. При подборе блока питания, материнской платы и системы охлаждения рассчитывалось потребление и тепловыделение отдельно каждого компьютера.
                 </div>
             </div>
             <div class="card">
                 <div class="card-title">
                     МАКСИМАЛЬНАЯ КАСТОМИЗАЦИЯ
                 </div>
                 <div class="card-text">
                     Немаловажным моментом является то, что в нашем магазине Вы можете сами выбрать корпус и изменить начинку любого компьютера.
                 </div>
             </div>
             <div class="card">
                 <div class="card-title">
                     РАСШИРЕННАЯ ГАРАНТИЯ
                 </div>
                 <div class="card-text">
                     В течение года мы будем полностью сопровождать Вас и Ваш компьютер. При возникновении неисправности мы покрываем расходы на ремонт и компенсируем расходы на доставку.
                 </div>
             </div>
             <div class="card">
                 <div class="card-title">
                     СБОРКА ПОД КЛЮЧ
                 </div>
                 <div class="card-text">
                     Душа просит что-то более дорогое и кастомное? Мы поможем и готовы специально для Вас сделать нечто особое, уникальное и интересное.
                 </div>
             </div>
             <div class="card">
                 <div class="card-title">
                     ДОСТАВКА ПО ВСЕЙ РОССИИ
                 </div>
                 <div class="card-text">
                     Мы отправляем компьютеры в специальных, удароустойчивых ящиках с помощью самых надежных транспортных компаний, которые зарекомендовали себя на рынке.
                 </div>
             </div>
             <div class="card">
                 <div class="card-title">
                     ПОДАРКИ В КАЖДОМ ЗАКАЗЕ
                 </div>
                 <div class="card-text">
                     Каждый заказ комплектуется небольшими подарками, которые мы бережно кладём вместе с компьютером. Так мы показываем, насколько важен каждый клиент для нас.
                 </div>
             </div>
         </div>
         <div class="slide2">
         <img src={slide2}></img>
         </div>
     </div>
    );
  }
  
  export default Advantages;