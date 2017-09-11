import firebase from 'firebase' 

const config = {
  // Initialize Firebase
    apiKey: "AIzaSyD7OO48x5nMEIetJ9MdHrdxaYX21LYXTsM",
    authDomain: "shoppingcart-f462e.firebaseapp.com",
    databaseURL: "https://shoppingcart-f462e.firebaseio.com",
    projectId: "shoppingcart-f462e",
    storageBucket: "shoppingcart-f462e.appspot.com",
    messagingSenderId: "250066760376"
}

firebase.initializeApp(config);
const ref = firebase.database().ref('products');
const added = firebase.database().ref('cart');

const profile = {
  'firstName': 'Abeja',
  'lastName': 'Members',
  'limit': 850.00
}

const promotions = [
  { 'id': 1, 'title': '50% OFF' },
  { 'id': 2, 'title': 'Guest Benefits' },
  { 'id': 3, 'title': 'Employee Benefit' },
  { 'id': 4, 'title': '+ $1000.00 on limit' }
]

// Simulate requests
export default {

  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },
  
  getProducts(cb){
    ref.on('value', function(snapshot){
      setTimeout(() => cb(snapshot.val()), 200)
      });
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  },
  
  addToCart (cb) {
     added.then(function(res){
          addToCart(res.data)
      });
  }  
} 


