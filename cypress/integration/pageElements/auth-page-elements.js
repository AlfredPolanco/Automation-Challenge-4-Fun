// This file contains all elements from the Login Page

const authHeader = {
    selector: '.page-heading',
    text: 'Authentication'
};

const emailInput = {
    selector: '#email_create'
};

const submitCreateButton = {
    selector: '#SubmitCreate > span'
};

const submitAccountButton = {
    selector: '#submitAccount > span'
};

const gender = {
    selector: '#id_gender1'
};

const customerFirstName = {
    selector: 'customer_firstname'
};

const customerLastName = {
    selector: '#customer_lastname'
};

const customerPassword = {
    selector: '#passwd'
};

const customerDayOfBirth = {
    selector: '#days'
};

const customerMonthOfBirth = {
    selector: '#months'
};

const customerYearOfBirth = {
    selector: '#years'
};

const addressFirstName = {
    selector: '#firstname'
};

const addressLastName = {
    selector: '#lastname'
};

const addressCompany = {
    selector: '#company'
};

const address1 = {
    selector: '#address1'
};

const city = {
    selector: '#city'
};

const state = {
    selector: '#id_state'
};

const postalCode = {
    selector: '#postcode'
};

const country = {
    selector: '#id_country'
};

const other = {
    selector: '#other'
};

const phoneNumber = {
    selector: '#phone'
};

const addressAlias = {
    selector: '#alias'
};

const personalInformationForm = {
    gender,
    customerFirstName,
    customerLastName,
    customerPassword,
    customerDayOfBirth,
    customerMonthOfBirth,
    customerYearOfBirth,
    addressFirstName,
    addressLastName,
    addressCompany,
    address1,
    city,
    state,
    postalCode,
    country,
    other,
    phoneNumber,
    addressAlias,
    submitCreateButton
}

export const authPageElements = {
    authHeader,
    emailInput,
    submitCreateButton,
    personalInformationForm
};