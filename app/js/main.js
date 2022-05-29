import {burger} from "./scripts/burger";
import {autoHeightCatalog} from "./scripts/autoHeightCatalog";
import {modal} from "./scripts/modal";

const burgerSelector = document.querySelector('.burger');
const menuSelector = document.querySelector('.nav__burger');
// const modal = document.querySelector('.modal');

burger(burgerSelector, menuSelector)
autoHeightCatalog();