import drink from "../assets/drinks-5.png"
import fastFood from "../assets/fastFood.png"
import cake from "../assets/cake.png"
import fruits from "../assets/fruits.png"
import meat from "../assets/meat.png"
import salad from "../assets/salad.png"
import burger from "../assets/Cards/burger.png"
import pizza from "../assets/Cards/pizza.png"
import hut from "../assets/Cards/hut.png"
import mcdonalds from "../assets/Cards/mcdonalds.png"
import carrows from "../assets/Cards/carrows.png"
import kfs from "../assets/Cards/kfs.png"
import coca_cola from "../assets/products/coca-cola.jpg"
import blackberry_lime from "../assets/products/blackberry-lime.jpg"
import coffee from "../assets/products/coffee.jpg"
import flash from "../assets/products/flash.jpg"
import ginger_orange from "../assets/products/ginger-orange.jpg"
import gorilla from "../assets/products/gorilla.jpg"
import juniper from "../assets/products/juniper-and-champagne-fizz.jpg"
import limonade_iced from "../assets/products/Lemonade_Iced_Tea.jpg"
import moscow_mule from "../assets/products/moscow-mule.jpg"
import mountain from "../assets/products/mountain-dew.jpg"
import peach from "../assets/products/peach-lemonade.jpg"
import pepsi from "../assets/products/pepsi.jpg"
import shirley_temlpe from "../assets/products/shirley-temple.jpg"
import rogers from "../assets/products/rogers.jpg"
import sparkling from "../assets/products/sparkling.jpg"
import strawberryIced from "../assets/products/Strawberry-Basil-Iced.png"
import strawberryLimonade from "../assets/products/strawberry-limonade.jpg"
import strawberry from "../assets/products/strawberry-spritzers.jpg"
import water from "../assets/products/water.jpg"
import watermelon from "../assets/products/Watermelon-Green.jpg"
import { v4 as uuid } from "uuid"

export const db = [
    {
        categoryname: "Drinks",
        items: [
            { name: "Coca Cola", image: coca_cola, id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.23, rate: 3 },
            { name: "Pepsi", id: uuid(), image: pepsi, favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.4, rate: 5 },
            { name: "Mountain Dew", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1, rate: 2, image: mountain },
            { name: "Water", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 0.5, rate: 5, image: water },
            { name: "Flash", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: flash },
            { name: "Gorilla", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: gorilla },
            { name: "Coffee", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: coffee },
            { name: "Blackberry-Lime Porch Punch", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: blackberry_lime },
            { name: "Rosemary-and-Ginger Mule", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: moscow_mule },
            { name: "Peach Lemonade", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: peach },
            { name: "Strawberry Spritzers", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: strawberry },
            { name: "Shirley Temple Drink", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: shirley_temlpe },
            { name: "Ginger-Orange Mocktails", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: ginger_orange },
            { name: "Sparkling Plum Punch", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: sparkling },
            { name: "Berry Juniper Fizz", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: juniper },
            { name: "Lemonade Iced Tea", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: limonade_iced },
            { name: "Strawberry-Basil Sweet Tea", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: strawberryIced },
            { name: "Roy Rogers Drink", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: rogers },
            { name: "Watermelon-Basil Sweet Tea", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: watermelon },
            { name: "Strawberry Lemonade", id: uuid(), favourite: JSON.parse(localStorage.getItem("isfav")) || false, price: 1.2, rate: 4, image: strawberryLimonade },
        ],
        icon: drink,
        id: uuid()
    },
    {
        categoryname: "Fast Foods",
        items: [],
        icon: fastFood,
        id: uuid()
    },
    {
        categoryname: "Cakes",
        items: [],
        icon: cake,
        id: uuid()
    },
    {
        categoryname: "Fruits",
        items: [],
        icon: fruits,
        id: uuid()
    },
    {
        categoryname: "Salad",
        items: [],
        icon: salad,
        id: uuid()
    },
    {
        categoryname: "Meaty",
        items: [],
        icon: meat,
        id: uuid()
    },
]

export const restoraunt = [
    { name: "Burger King", rate: 4.8, away: 4.3, icon: burger, type: "Burger" },
    { name: "Carrows Restaurant", rate: 4.7, away: 0.3, icon: carrows, type: "Fish" },
    { name: "KFC", rate: 4.4, away: 18.6, icon: kfs, type: "Chiken" },
    { name: "Domino’s Pizza", rate: 5, away: 2.8, icon: pizza, type: "Pizza", },
    { name: "McDonald’s", rate: 4.1, away: 9.0, icon: mcdonalds, type: "Burger" },
    { name: "Pizza Hut", rate: 4.6, away: 3.4, icon: hut, type: "Pizza" },
]