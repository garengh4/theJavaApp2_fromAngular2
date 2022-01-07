// export const environment = {
//   production: true,
//   customerAPIUrl: 'https://garengh4-java.herokuapp.com/heroku_6578cc937de4a25' + '/customer-api'

// };

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 3333;
const APPLICATION_NAME: string = '/EKart_Server';
export const environment = {
  production: false,
  sellerAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/seller-api',
  //updateSellerAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/seller-api',
  //updateCustomerAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/customer-api',
  customerAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/customer-api',
  customerCartUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/customerCart-api',
  //SellerProductManagementAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/sellerProduct-api',
  sellerOrderAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/sellerOrder-api',
  sellerProductAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/sellerProduct-api',
  customerProductAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/customerProduct-api',

  apiBaseUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME
};