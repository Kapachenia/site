import {burger} from "./scripts/burger";
import {autoHeightCatalog} from "./scripts/autoHeightCatalog";

const burgerSelector = document.querySelector('.burger');
const menuSelector = document.querySelector('.nav__burger')

burger(burgerSelector, menuSelector)
autoHeightCatalog();