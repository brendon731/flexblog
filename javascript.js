
let clicked = document.querySelectorAll("nav ul li a")
let section, topo;

console.log(clicked[0].getAttribute("href"))


clicked.forEach((e, position)=>{
    e.onclick = (a)=>{
        a.preventDefault()
        section = document.querySelector(clicked[position].getAttribute("href"))
        topo = section.getBoundingClientRect().top 
        window.scrollTo(0, topo)
        
        
    }
})
