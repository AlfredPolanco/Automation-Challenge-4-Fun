// This file contains all elements from the Shopping Cart

const proceedToCheckoutCartButton = {
    selector: '.cart_navigation > .button > span'
};

const confirmMyOrderButton = {
    selector: '#cart_navigation > .button > span'
};

const shoppingCartTable = {
    selector: '#center_column'
};

const orderMessageBox = {
    selector: '#ordermsg > .form-control',
    text: 'Please leave at door and be aware of dog!'
};

const termsOfServiceCheckBox = {
    selector: '#cgv'
};

const paymentBankWire = {
    selector: '.bankwire'
};

const paymentCheck = {
    selector: 'cheque'
};

const InfoBox = {
    selector: '.box',
    text: 'Your order on My Store is complete.',
    bankWireText: 'You have chosen to pay by bank wire. Here is a short summary of your order:'
};

export const shoppingCartElements = {
    proceedToCheckoutCartButton,
    shoppingCartTable,
    orderMessageBox,
    termsOfServiceCheckBox,
    paymentBankWire,
    paymentCheck,
    confirmMyOrderButton,
    InfoBox
};