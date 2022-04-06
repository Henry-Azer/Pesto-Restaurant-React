import React from "react";
import marinara_pizza from "../components/resorces/marinara-pizza.png";
const PestoMenu = () => {
  return (
    <section className="menu-route">
      <dev className="menu-title">
        <p className="heading">Menu</p>

        <p className="p">Don't miss that delicious food</p>
      <img className="pizza-image" src="https://images.deliveryhero.io/image/talabat/Menuitems/Mix_Chicken_Pizza_637654106929826677.jpg" alt="pizza pic" />
      </dev>
      <div class="container">
        <div class="menu">
        <h2 class="menu-group-heading">Pizza</h2>
          <div className="pizza">
            
            
            <div class="menu-item">
              <img src={marinara_pizza} alt="" />
              <div>
                <h3 class="menu-item-name">Pizza name</h3>
                <p class="pizza-discreption">pizza discreption</p>
              </div>
            </div>
           
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pizza name</h3>
                <p class="pizza-discreption">pizza discreption</p>
              </div>
            </div>
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pizza name</h3>
                <p class="pizza-discreption">pizza discreption</p>
              </div>
            </div>
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pizza name</h3>
                <p class="pizza-discreption">pizza discreption</p>
              </div>
            </div>
          </div>
          <h2 class="menu-group-heading">Pasta</h2>
          <div className="pasta">
            
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pasta name</h3>
                <p class="pasta-discreption">pasta discreption</p>
              </div>
            </div>
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pasta name</h3>
                <p class="pasta-discreption">pasta discreption</p>
              </div>
            </div>
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pasta name</h3>
                <p class="pasta-discreption">pasta discreption</p>
              </div>
            </div>
            <div class="menu-item">
              <img src="" alt="" />
              <div>
                <h3 class="menu-item-name">Pasta name</h3>
                <p class="pasta-discreption">pasta discreption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PestoMenu;
