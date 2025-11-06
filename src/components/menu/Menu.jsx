import React from "react";
import menu1 from "../../img/menu (1).png";
import menu2 from "../../img/menu (2).png";
import menu5 from "../../img/menu (5).png";
import menu6 from "../../img/menu (6).png";
import menu7 from "../../img/menu (7).png";
import menu8 from "../../img/menu (8).png";
import menu9 from "../../img/menu (9).png";
import menu10 from "../../img/menu (10).png";
import menu11 from "../../img/menu (11).png";
import menu14 from "../../img/menu (14).png";
import { Container } from "react-bootstrap";
import Slider from "../Slider";
import "./menu.css";

const menuData = [
  {
    img: menu1,
    title: "CROISSANT",
    description: " ",
    price: 4,
  },
  {
    img: menu2,
    title: "RAISIN SCROLL",
    description: "",
    price: 4,
  },
  {
    img: menu5,
    title: "AFFOGATO",
    description: "vanilla ice cream with espresso",
    price: 15,
  },
  {
    img: menu6,
    title: "LATTE",
    description: "espresson with min amount of milk",
    price: 15,
  },
  {
    img: menu14,
    title: "ESPRESSO DOBLE",
    description: "2 shots",
    price: 10,
  },
  {
    img: menu7,
    title: "FRAPPE CARAMEL LATTE",
    description: "shot espresso with milk and wippedCream",
    price: 10,
  },
  {
    img: menu8,
    title: "FRAPPE CHOCOLATE LATTE",
    description: "shot espresso with milk and wippedCream",
    price: 10,
  },
  {
    img: menu10,
    title: "ICE GREEN",
    description: "shot espresso with matcha",
    price: 10,
  },
  {
    img: menu11,
    title: "ICE SALTED CARAMEL",
    description: "shot espresso with milk and salted caramel",
    price: 10,
  },
  {
    img: menu9,
    title: "ICE COFFEE",
    description: "shot espresso with sparkiling soda",
    price: 10,
  },
];

function Menu() {
  return (
    <section className="menu py-5">
      <Container>
        <h2 className="menuTitle">Our Menu</h2>
        <Slider
          data={menuData}
          renderItem={(item) => (
            <div className="menuCard d-flex flex-column justify-content-between">
              <div className="menuImg">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <h4 className="price">EGP {item.price}</h4>
              </div>
            </div>
          )}
        />
      </Container>
    </section>
  );
}

export default Menu;
