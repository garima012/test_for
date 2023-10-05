const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&pid=Api&P=0&h=220',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=220',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://tse2.mm.bing.net/th?id=OIP.wg4R0mAD1_DQAII9hCM-8AHaDk&pid=Api&P=0&h=220',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://tse4.mm.bing.net/th?id=OIP.NPes_Rxu2ivooWXP0xTbBQHaF7&pid=Api&P=0&h=220',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.DTOQsKz0n7H9WORkibQrAgHaEo&pid=Api&P=0&h=220',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://tse4.mm.bing.net/th?id=OIP.o01pM7cb-KEA7GT-cC7nEgHaE8&pid=Api&P=0&h=220',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.cq-5UG_MoFUYYW2KdqLlcwHaEw&pid=Api&P=0&h=220',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.kL-GzjgaAaduFO2wOIeZWwHaEo&pid=Api&P=0&h=220',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&pid=Api&P=0&h=220',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://tse2.mm.bing.net/th?id=OIP.JOgC3XbqdiF64Q64JsBN_gHaEo&pid=Api&P=0&h=220',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.XztsnQoaNQ-XS4t4VFlbDAHaD3&pid=Api&P=0&h=220',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&pid=Api&P=0&h=220',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://tse4.mm.bing.net/th?id=OIP.whn-n7GS5FvQUbfvFUMUxQHaEo&pid=Api&P=0&h=220',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://tse4.mm.bing.net/th?id=OIP.YDJzemAv0ZM5JTksh6zsqAHaF7&pid=Api&P=0&h=220',
    price: 9.99,
  },
];


const display =()=>{


  let display = products.map((v) => {
   return `<article class="product">
   <img
     src="${v.image}"
     class="product-img img"
     alt=""
   />
   <footer>
     <h5 class="product-name">${v.product-name}</h5>
     <span class="product-price">${v.price}</span>
   </footer>
 </article>`

})



let company = products.map((v) => {
  return` <button class="company-btn">${v.company}</button>`
})

let output = company.reduce((pre,curr,index) => {
  if(!pre.includes(curr)){
    pre.push(curr)
  }
  return pre;
},[])


document.getElementById("companies").innerHTML =output.join(""); 
document.getElementById("products").innerHTML = display.join("");
}
display();



