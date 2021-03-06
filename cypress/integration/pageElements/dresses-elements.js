// This file contains all Dresses page elements

const dresses = {
    selector: 'ul.submenu-container.clearfix.first-in-line-xs',
};

const summerDresses = {
    selector: '.submenu-container > :nth-child(3) > a'
};

const categoryName = {
    selector: '.cat-name',
    text: 'Summer Dresses'
};

const sortByFilter = {
    selector: '#selectProductSort'
};

const addToCart = {
    selector: '.ajax_add_to_cart_button > span'
};

const shoppingCartLayer = {
    selector: '#layer_cart > .clearfix',
    selectorConfirmation: '.layer_cart_product > h2'
};

const cartConformationModal = {
    selector: '.cross'
};

const continueShopping = {
    selector: '.continue > span'
};

const proceedToCheckout = {
    selector: '.button-container > .button-medium > span'
};

const cartButton = {
    selector: '[title="View my shopping cart"]'
};

export const dressesElements = {
    dresses,
    summerDresses,
    categoryName,
    sortByFilter,
    addToCart,
    shoppingCartLayer,
    cartConformationModal,
    continueShopping,
    proceedToCheckout,
    cartButton
};