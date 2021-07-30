'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    name:'Seattle', 
    min: 23,
    max: 65,
    avg: 6.3,
   
    getRandomCustomer: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }, 
    cookiesPurchased: function (){
    return Math.ceil((this.getRandomCustomer()) * this.avg);
    },
    
    render: function(){
      let h3 = document.createElement('h3');
      h3.textContent = 'Seattle';
      listOfCookies.appendChild(h3);

      let ul = document.createElement('ul');
      let total = 0;
 
      for (let i=0; i < hours.length; i++){
        let seattleCookiesSold = this.cookiesPurchased();
        let li = document.createElement('li');

        li.textContent = `${hours[i]}: ${seattleCookiesSold} cookies`;
        ul.appendChild(li);
        total = total + seattleCookiesSold;
        console.log(seattleCookiesSold);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${total}`;
    ul.appendChild(li);
    listOfCookies.appendChild(ul);
  } 
} 

  let listOfCookies = document.getElementById('cookie store');

  seattle.render();


 let tokyo = {
    name:'Tokyo', 
    min: 3,
    max: 24,
    avg: 1.2,
 
  getRandomCustomer: function (){
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }, 
  cookiesPurchased: function (){
  return Math.ceil((this.getRandomCustomer()) * this.avg);
  },
  

  render: function(){
    let h3 = document.createElement('h3');
    h3.textContent = 'Tokyo';
    listOfCookies.appendChild(h3);

    let ul = document.createElement('ul');
    let total = 0;

    for (let i=0; i < hours.length; i++){
      let tokyoCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');

      li.textContent = `${hours[i]}: ${tokyoCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + tokyoCookiesSold;
      console.log(tokyoCookiesSold);

  }
  let li = document.createElement('li');
  li.textContent = `Total: ${total}`;
  ul.appendChild(li);
  listOfCookies.appendChild(ul);
} 
} 

  tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38, 
  avg: 3.7, 

  getRandomCustomer: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }, 
    cookiesPurchased: function (){
    return Math.ceil((this.getRandomCustomer()) * this.avg);
    },

  render: function(){
    let h3 = document.createElement('h3');
    h3.textContent = 'Dubai';
    listOfCookies.appendChild(h3);

    let ul = document.createElement('ul');
    let total = 0;

    for(let i=0; i <hours.length; i++){
      let dubaiCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${dubaiCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + dubaiCookiesSold;
      console.log(dubaiCookiesSold);
    
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${total}`;
    ul.appendChild(li);
    listOfCookies.appendChild(ul);
  
  }
}
 dubai.render();

 let paris = {
  name: 'Paris',
  min: 20,
  max: 38, 
  avg: 2.3, 

  getRandomCustomer: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }, 
    cookiesPurchased: function (){
    return Math.ceil((this.getRandomCustomer()) * this.avg);
    },

  render: function(){
    let h3 = document.createElement('h3');
    h3.textContent = 'Paris';
    listOfCookies.appendChild(h3);

    let ul = document.createElement('ul');
    let total = 0;

    for(let i=0; i <hours.length; i++){
      let parisCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${parisCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + parisCookiesSold;
      console.log(parisCookiesSold);
    
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${total}`;
    ul.appendChild(li);
    listOfCookies.appendChild(ul);
  
  }
}
 paris.render();

 let lima = {
  name: 'Lima',
  min: 2,
  max: 16, 
  avg: 4.6, 

  getRandomCustomer: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }, 
    cookiesPurchased: function (){
    return Math.ceil((this.getRandomCustomer()) * this.avg);
    },

  render: function(){
    let h3 = document.createElement('h3');
    h3.textContent = 'Lima';
    listOfCookies.appendChild(h3);

    let ul = document.createElement('ul');
    let total = 0;

    for(let i=0; i <hours.length; i++){
      let limaCookiesSold = this.cookiesPurchased();
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${limaCookiesSold} cookies`;
      ul.appendChild(li);
      total = total + limaCookiesSold;
      console.log(limaCookiesSold);
    
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${total}`;
    ul.appendChild(li);
    listOfCookies.appendChild(ul);
  
  }
}
lima.render();



