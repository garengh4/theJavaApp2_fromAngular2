// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


// export const environment = {
//   production: false,
//   customerAPIUrl: 'https://garengh4-java.herokuapp.com/heroku_6578cc937de4a25' + '/customer-api'

// };

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 3333;
const APPLICATION_NAME: string = '/EKart_Server';
//myshec259147l
//'+PORT_NUMBER+'
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